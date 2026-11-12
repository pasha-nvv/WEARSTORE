import { useEffect } from "react";
import { useCart } from "../hooks/useCart";
import "./CartFeedback.css";

function CartFeedback() {
  const { notice, dismissNotice } = useCart();
  const noticeId = notice?.id;

  useEffect(() => {
    if (noticeId === undefined) return;

    const timer = window.setTimeout(dismissNotice, 3200);

    return () => window.clearTimeout(timer);
  }, [noticeId, dismissNotice]);

  return (
    <div
      className="cart-feedback"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {notice && (
        <div className="cart-feedback__message" key={notice.id}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m5 12 4 4L19 6" />
          </svg>

          <div>
            <p className="cart-feedback__title">Added to cart</p>
            <p className="cart-feedback__product">{notice.productName}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartFeedback;
