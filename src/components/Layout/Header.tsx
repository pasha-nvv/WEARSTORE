import { useState } from "react";
import Navigation from "./Navigation";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { useFavorites } from "../../hooks/useFavorites";
import HeaderSearch from "./HeaderSearch";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { items } = useCart();

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const { favorites } = useFavorites();

  return (
    <header className="site-header">
      <div className="header__main">
        <button
          type="button"
          className="header__menu-button"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M2 6h20" />
            <path d="M2 12h20" />
            <path d="M2 18h20" />
          </svg>
          MENU
        </button>

        <Link to="/" className="header__logo">
          Wears | Store.
        </Link>

        <div className="header__actions">
          <HeaderSearch onOpen={() => setIsMenuOpen(false)} />
          <Link
            to="/favorites"
            className="header__favorites-link"
            aria-label={`Favorites (${favorites.length})`}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
            </svg>

            {favorites.length > 0 && (
              <span className="header__favorites-count" aria-hidden="true">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="header__cart-button"
            aria-label={`Cart (${totalQuantity})`}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 8h14l1 12H4L5 8Z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>

            {totalQuantity > 0 && (
              <span className="header__cart-count" aria-hidden="true">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>
      {isMenuOpen && <Navigation onNavigate={() => setIsMenuOpen(false)} />}
    </header>
  );
}

export default Header;
