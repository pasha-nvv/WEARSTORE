import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { products } from "../data/products";
import type { Product } from "../data/products";

const STORAGE_KEY = "wearstore:favorites";

function readFavorites(): string[] | null {
  try {
    const saved: unknown = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? "[]",
    );

    if (!Array.isArray(saved)) return [];

    return products
      .filter((product) => saved.includes(product.name))
      .map((product) => product.name);
  } catch {
    return null;
  }
}

interface FavoritesContextType {
  favorites: Product[];
  isFavorite: (productName: string) => boolean;
  toggleFavorite: (productName: string) => void;
  clearFavorites: () => void;
}

export const FavoritesContext =
  createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favoriteNames, setFavoriteNames] =
    useState<string[] | null>(readFavorites);

  const names = favoriteNames ?? [];

  const favorites = products.filter((product) =>
    names.includes(product.name),
  );

  useEffect(() => {
    if (favoriteNames === null) return;

    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favoriteNames),
      );
    } catch {
      // Favorites remain available for this session.
    }
  }, [favoriteNames]);

  function isFavorite(productName: string) {
    return names.includes(productName);
  }

  function toggleFavorite(productName: string) {
    setFavoriteNames((currentNames) => {
      const current = currentNames ?? [];

      return current.includes(productName)
        ? current.filter((name) => name !== productName)
        : [...current, productName];
    });
  }

  function clearFavorites() {
    setFavoriteNames([]);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}