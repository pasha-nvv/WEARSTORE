import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFavorites } from "../hooks/useFavorites";
import "./ProductsPage.css";
import "./FavoritesPage.css";

function FavoritesPage() {
  const { favorites, clearFavorites } = useFavorites();

  return (
    <main className="products-page favorites-page">
      <div className="products-page__header">
        <p className="products-page__eyebrow">WEARSTORE / FAVORITES</p>

        <h1 className="products-page__title">YOUR FAVORITES</h1>

        <p className="products-page__count">
          {String(favorites.length).padStart(2, "0")} SAVED PIECES
        </p>
      </div>

      <div className="favorites-toolbar">
        <Link to="/catalog">← Continue shopping</Link>

        {favorites.length > 0 && (
          <button type="button" onClick={clearFavorites}>
            Clear favorites
          </button>
        )}
      </div>

      {favorites.length > 0 ? (
        <div className="products-page__grid">
          {favorites.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      ) : (
        <section className="favorites-empty">
          <h2>Your favorites list is empty</h2>
          <p>Tap the heart on a product to save it here.</p>
          <Link to="/catalog">Explore collection →</Link>
        </section>
      )}
    </main>
  );
}

export default FavoritesPage;
