import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "./CartPage.css";

const formatPrice = (value: number) =>
  value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function CartPage() {
  const { items, changeQuantity, removeFromCart, clearCart } = useCart();

  const totalQuantity = items.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <main className="cart-page">
      <Link to="/catalog" className="cart-back">
        ← Continue shopping
      </Link>

      <div className="cart-heading">
        <h1>
          Your cart
          <span className="cart-heading__count">
            ({totalQuantity})
          </span>
        </h1>

        {items.length > 0 && (
          <button
            type="button"
            className="cart-text-button"
            onClick={clearCart}
          >
            Clear cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <section className="cart-empty">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden="true"
          >
            <path d="M5 8h14l1 12H4L5 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>

          <h2>Your cart is empty</h2>
          <p>Add products from the catalog to get started.</p>

          <Link to="/catalog" className="cart-primary-link">
            Explore collection →
          </Link>
        </section>
      ) : (
        <div className="cart-layout">
          <ul className="cart-items">
            {items.map(({ product, quantity }) => (
              <li key={product.name} className="cart-item">
                <img
                  className="cart-item__image"
                  src={product.image}
                  alt={product.name}
                />

                <div className="cart-item__details">
                  <p className="cart-item__category">
                    {product.category}
                  </p>

                  <h2>{product.name}</h2>

                  <p className="cart-item__price">
                    {formatPrice(product.price)} each
                  </p>

                  <button
                    type="button"
                    className="cart-text-button"
                    aria-label={`Remove ${product.name} from cart`}
                    onClick={() => removeFromCart(product.name)}
                  >
                    Remove
                  </button>
                </div>

                <div
                  className="cart-quantity"
                  role="group"
                  aria-label={`Quantity for ${product.name}`}
                >
                  <button
                    type="button"
                    aria-label={`Decrease quantity of ${product.name}`}
                    disabled={quantity === 1}
                    onClick={() => changeQuantity(product.name, -1)}
                  >
                    −
                  </button>

                  <span
                    className="cart-quantity__value"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {quantity}
                  </span>

                  <button
                    type="button"
                    aria-label={`Increase quantity of ${product.name}`}
                    onClick={() => changeQuantity(product.name, 1)}
                  >
                    +
                  </button>
                </div>

                <p className="cart-item__subtotal">
                  {formatPrice(product.price * quantity)} $
                </p>
              </li>
            ))}
          </ul>

          <aside
            className="cart-summary"
            aria-labelledby="cart-summary-title"
          >
            <h2 id="cart-summary-title">Order summary</h2>

            <div className="cart-summary__row">
              <span>Items</span>
              <span>{totalQuantity}</span>
            </div>

            <div className="cart-summary__total">
              <span>Total</span>
              <strong>{formatPrice(totalPrice)} $</strong>
            </div>

            <Link to="/catalog" className="cart-primary-link">
              Continue shopping →
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}

export default CartPage;