import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import "./HeaderSearch.css";

function HeaderSearch({ onOpen }: { onOpen?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const panelId = useId();
  const location = useLocation();
  const isCatalog = useMatch("/catalog") !== null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;

    inputRef.current?.focus({ preventScroll: true });

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  function toggleSearch() {
    if (!isOpen) {
      setQuery(new URLSearchParams(location.search).get("q") ?? "");
      onOpen?.();
    }

    setIsOpen((current) => !current);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams(isCatalog ? location.search : "");

    const value = query.trim();

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    params.delete("page");

    const search = params.toString();

    navigate({
      pathname: "/catalog",
      search: search ? `?${search}` : "",
    });

    setIsOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <div
      className="header-search"
      ref={wrapperRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="header-search__toggle"
        aria-label={isOpen ? "Close search" : "Open search"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={toggleSearch}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="10.8" cy="10.8" r="7" />
          <path d="m16 16 5 5" />
        </svg>
      </button>

      {/* Форма постійно існує — CSS анімує зміну data-open. */}
      <form
        id={panelId}
        className="header-search__panel"
        data-open={isOpen}
        inert={!isOpen}
        role="search"
        onSubmit={handleSubmit}
      >
        <div className="header-search__content">
          <input
            ref={inputRef}
            type="search"
            name="q"
            aria-label="Search products"
            placeholder="Search products…"
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />

          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default HeaderSearch;
