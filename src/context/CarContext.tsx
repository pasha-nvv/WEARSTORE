import { createContext, useCallback, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  notice: { id: number; productName: string } | null;
  dismissNotice: () => void;
  addToCart: (product: Product) => void;
  changeQuantity: (productName: string, change: number) => void;
  removeFromCart: (productName: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [notice, setNotice] = useState<CartContextType["notice"]>(null);

  const noticeId = useRef(0);

  const dismissNotice = useCallback(() => {
    setNotice(null);
  }, []);

  function addToCart(product: Product) {
    setItems((currentItems) => {
      const exists = currentItems.some(
        (item) => item.product.name === product.name,
      );

      return exists
        ? currentItems.map((item) =>
            item.product.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...currentItems, { product, quantity: 1 }];
    });

    noticeId.current += 1;

    setNotice({
      id: noticeId.current,
      productName: product.name,
    });
  }

  function changeQuantity(productName: string, change: number) {
    if (!Number.isSafeInteger(change)) return;

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.product.name === productName
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item,
      ),
    );
  }

  function removeFromCart(productName: string) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.name !== productName),
    );
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        items,
        notice,
        dismissNotice,
        addToCart,
        changeQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
