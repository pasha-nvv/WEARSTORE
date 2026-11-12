import { products } from "../data/products";
import type { Product } from "../data/products";

export const categories = [
  "ALL",
  ...new Set(products.map((product) => product.category)),
];

const genders = ["ALL", "MEN", "WOMEN", "UNISEX"] as const;
const sorts = ["featured", "price-asc", "price-desc", "name-asc"] as const;

export interface CatalogFilters {
  q: string;
  category: string;
  gender: (typeof genders)[number];
  minPrice: number | undefined;
  maxPrice: number | undefined;
  sale: boolean;
  isNew: boolean;
  sort: (typeof sorts)[number];
}

function readPrice(value: string | null) {
  if (value === null || value.trim() === "") return undefined;

  const price = Number(value);

  return Number.isFinite(price) && price >= 0 ? price : undefined;
}

export function readCatalogFilters(params: URLSearchParams): CatalogFilters {
  const category = params.get("category") ?? "ALL";
  const gender = params.get("gender") as CatalogFilters["gender"] | null;
  const sort = params.get("sort") as CatalogFilters["sort"] | null;

  const legacyGender =
    category === "MEN" || category === "WOMEN" ? category : "ALL";

  return {
    q: (params.get("q") ?? "").trim(),
    category: categories.includes(category) ? category : "ALL",
    gender: gender !== null && genders.includes(gender) ? gender : legacyGender,
    minPrice: readPrice(params.get("minPrice")),
    maxPrice: readPrice(params.get("maxPrice")),
    sale: params.get("sale") === "1" || category === "SALE",
    isNew: params.get("new") === "1" || category === "NEW ARRIVALS",
    sort: sort !== null && sorts.includes(sort) ? sort : "featured",
  };
}

export function writeCatalogFilters(filters: CatalogFilters) {
  const params = new URLSearchParams();

  if (filters.q.trim()) params.set("q", filters.q.trim());
  if (filters.category !== "ALL") {
    params.set("category", filters.category);
  }
  if (filters.gender !== "ALL") {
    params.set("gender", filters.gender);
  }

  for (const key of ["minPrice", "maxPrice"] as const) {
    const price = filters[key];

    if (price !== undefined && Number.isFinite(price) && price >= 0) {
      params.set(key, String(price));
    }
  }

  if (filters.sale) params.set("sale", "1");
  if (filters.isNew) params.set("new", "1");
  if (filters.sort !== "featured") {
    params.set("sort", filters.sort);
  }

  return params;
}

export function filterProducts(
  source: Product[],
  filters: CatalogFilters,
): Product[] {
  const words = filters.q.toLowerCase().split(/\s+/).filter(Boolean);

  const filtered = source.filter((product) => {
    const searchable = `${product.name} ${product.category}`.toLowerCase();

    const genderMatches =
      filters.gender === "ALL" ||
      product.gender === filters.gender ||
      (product.gender === "UNISEX" &&
        (filters.gender === "MEN" || filters.gender === "WOMEN"));

    return (
      words.every((word) => searchable.includes(word)) &&
      (filters.category === "ALL" || product.category === filters.category) &&
      genderMatches &&
      (filters.minPrice === undefined || product.price >= filters.minPrice) &&
      (filters.maxPrice === undefined || product.price <= filters.maxPrice) &&
      (!filters.sale || product.isOnSale === true) &&
      (!filters.isNew || product.label === "NEW")
    );
  });

  if (filters.sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (filters.sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (filters.sort === "name-asc") {
    filtered.sort((a, b) => a.name.localeCompare(b.name, "en"));
  }

  return filtered;
}
