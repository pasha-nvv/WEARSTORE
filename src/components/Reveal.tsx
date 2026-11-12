import { useLayoutEffect } from "react";
import "./Reveal.css";

const targets = [
  ".hero__content",
  ".catalog__header",
  ".catalog__footer",
  ".shop-product-card",
  ".product-card",
  ".statement",
  ".editorial",
  ".footer",
  ".products-page__header",
  ".favorites-page__empty",
  ".favorites-empty",
  ".cart-heading",
  ".cart-item",
  ".cart-summary",
  ".cart-empty",
].join(",");

function Reveal() {
  useLayoutEffect(() => {
    const root = document.getElementById("root");

    if (
      !root ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const tracked = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const element = entry.target as HTMLElement;

          if (
            entry.isIntersecting &&
            tracked.has(element) &&
            root.contains(element)
          ) {
            if (element.dataset.scrollReveal === "pending") {
              element.dataset.scrollReveal = "visible";
            }

            observer.unobserve(element);
          }
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -24px 0px",
      },
    );

    function collect(element: HTMLElement) {
      const found = Array.from(element.querySelectorAll<HTMLElement>(targets));

      if (element.matches(targets)) found.unshift(element);

      return found;
    }

    function register(element: HTMLElement) {
      if (tracked.has(element) || !root?.contains(element)) return;

      tracked.add(element);

      if (element.contains(document.activeElement)) {
        element.dataset.scrollReveal = "focused";
        return;
      }

      const parent = element.parentElement;

      const index =
        element.matches(".shop-product-card,.product-card") && parent
          ? Array.from(parent.children).indexOf(element)
          : 0;

      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);

      element.dataset.scrollReveal = "pending";
      observer.observe(element);
    }

    function release(element: HTMLElement) {
      observer.unobserve(element);
      delete element.dataset.scrollReveal;
      element.style.removeProperty("--reveal-delay");
      tracked.delete(element);
    }

    collect(root).forEach(register);

    const mutations = new MutationObserver((records) => {
      for (const element of tracked) {
        if (!root.contains(element)) release(element);
      }

      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof HTMLElement) {
            collect(node).forEach(register);
          }
        }
      }
    });

    mutations.observe(root, {
      childList: true,
      subtree: true,
    });

    function handleFocus(event: FocusEvent) {
      let element = event.target instanceof Element ? event.target : null;

      while (element && root?.contains(element)) {
        if (element instanceof HTMLElement && tracked.has(element)) {
          element.dataset.scrollReveal = "focused";
          observer.unobserve(element);
        }

        element = element.parentElement;
      }
    }

    root.addEventListener("focusin", handleFocus);

    return () => {
      mutations.disconnect();
      observer.disconnect();
      root.removeEventListener("focusin", handleFocus);

      for (const element of tracked) release(element);
    };
  }, []);

  return null;
}

export default Reveal;
