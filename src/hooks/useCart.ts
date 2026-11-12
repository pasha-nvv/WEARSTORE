import { useContext } from "react";
import { CartContext } from "../context/CarContext";

export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart має використовуватися всередині CartProvider");
  }

  return context;
}
