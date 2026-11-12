import type { Product } from "../data/products";
import { useCart } from "../hooks/useCart";
import { useFavorites } from "../hooks/useFavorites";
import "./ProductCard.css";

function ProductCard({ product }: { product: Product }) {
  const { addToCart, notice } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const added = notice?.productName === product.name;
  const favorite = isFavorite(product.name);

  return (
    <article className="shop-product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />

        {product.label && (
          <span className="product-card__label">{product.label}</span>
        )}
        <button
          type="button"
          className="product-card__favorite"
          aria-pressed={favorite}
          aria-label={`${favorite ? "Remove" : "Add"} ${product.name} ${favorite ? "from" : "to"} favorites`}
          onClick={() => toggleFavorite(product.name)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill={favorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>
      </div>

      <div className="product-card__info">
        <div>
          <p className="product-card__category">{product.category}</p>

          <h2 className="product-card__name">{product.name}</h2>
        </div>

        <p className="product-card__price">${product.price.toFixed(2)}</p>
      </div>

      <button
        type="button"
        className="product-card__add-to-cart"
        data-added={added}
        aria-label={`Add ${product.name} to cart`}
        onClick={() => addToCart(product)}
      >
        <span>{added ? "Added" : "Add to cart"}</span>

        <svg
          key={added ? notice?.id : "idle"}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d={added ? "m5 12 4 4L19 6" : "M12 5v14M5 12h14"} />
        </svg>
      </button>
    </article>
  );
}

export default ProductCard;
