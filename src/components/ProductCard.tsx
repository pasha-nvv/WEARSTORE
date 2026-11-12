import type { Product } from "../data/products";
import { useCart } from "../hooks/useCart";
import "./ProductCard.css";

function ProductCard({ product }: { product: Product }) {
  const { addToCart, notice } = useCart();

  const added = notice?.productName === product.name;

  return (
    <article className="shop-product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />

        {product.label && (
          <span className="product-card__label">{product.label}</span>
        )}
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
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={added ? "m5 12 4 4L19 6" : "M12 5v14M5 12h14"} />
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
        aria-label={`Add ${product.name} to cart`}
        onClick={() => addToCart(product)}
      >
        <span>Add to cart</span>

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </article>
  );
}

export default ProductCard;
