import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import {
  categories,
  filterProducts,
  readCatalogFilters,
  writeCatalogFilters,
} from "../utils/catalog";
import type { CatalogFilters } from "../utils/catalog";
import "./ProductsPage.css";
import "./CatalogFilters.css";

function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const panelRef = useRef<HTMLDetailsElement>(null);

  const filters = readCatalogFilters(searchParams);
  const signature = writeCatalogFilters(filters).toString();
  const results = filterProducts(products, filters);

  const formSignature = JSON.stringify([
    filters.category,
    filters.gender,
    filters.minPrice,
    filters.maxPrice,
    filters.sale,
    filters.isNew,
  ]);

  function clearAll() {
    panelRef.current?.querySelector("form")?.reset();
    setSearchParams({});
  }

  function update(patch: Partial<CatalogFilters>) {
    setSearchParams(writeCatalogFilters({ ...filters, ...patch }));
  }

  const chips: {
    label: string;
    patch: Partial<CatalogFilters>;
  }[] = [];

  if (filters.q) {
    chips.push({
      label: "Search: " + filters.q,
      patch: { q: "" },
    });
  }

  if (filters.category !== "ALL") {
    chips.push({
      label: filters.category,
      patch: { category: "ALL" },
    });
  }

  if (filters.gender !== "ALL") {
    chips.push({
      label: filters.gender,
      patch: { gender: "ALL" },
    });
  }

  if (filters.minPrice !== undefined) {
    chips.push({
      label: "From $" + filters.minPrice,
      patch: { minPrice: undefined },
    });
  }

  if (filters.maxPrice !== undefined) {
    chips.push({
      label: "Up to $" + filters.maxPrice,
      patch: { maxPrice: undefined },
    });
  }

  if (filters.sale) {
    chips.push({
      label: "On sale",
      patch: { sale: false },
    });
  }

  if (filters.isNew) {
    chips.push({
      label: "New arrivals",
      patch: { isNew: false },
    });
  }

  return (
    <main className="products-page">
      <div className="products-page__header">
        <p className="products-page__eyebrow">WEARSTORE / ALL PRODUCTS</p>

        <h1 className="products-page__title">
          {filters.q ? "SEARCH RESULTS" : "THE COLLECTION"}
        </h1>

        {filters.q && (
          <p className="products-page__query">Results for “{filters.q}”</p>
        )}

        <p className="products-page__count" aria-live="polite">
          {String(results.length).padStart(2, "0")}{" "}
          {results.length === 1 ? "PRODUCT" : "PRODUCTS"}
        </p>
      </div>

      <div className="catalog-controls">
        <details
          className="catalog-filters"
          ref={panelRef}
          onKeyDown={(event) => {
            if (event.key === "Escape" && panelRef.current) {
              panelRef.current.open = false;
              panelRef.current.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>
            Filters <span aria-hidden="true">+</span>
          </summary>

          <FilterForm
            key={formSignature}
            filters={filters}
            onClear={clearAll}
            onApply={(next) => {
              setSearchParams(writeCatalogFilters(next));

              if (panelRef.current) {
                panelRef.current.open = false;
                panelRef.current.querySelector("summary")?.focus();
              }
            }}
          />
        </details>

        <label className="catalog-sort">
          <span>Sort by</span>

          <select
            aria-label="Sort products"
            value={filters.sort}
            onChange={(event) =>
              update({
                sort: event.target.value as CatalogFilters["sort"],
              })
            }
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name-asc">Name: A-Z</option>
          </select>
        </label>
      </div>

      {(chips.length > 0 || filters.sort !== "featured") && (
        <div className="catalog-chips">
          {chips.map(({ label, patch }) => (
            <button
              type="button"
              key={label}
              aria-label={"Remove filter: " + label}
              onClick={() => update(patch)}
            >
              <span>{label}</span>
              <span aria-hidden="true">×</span>
            </button>
          ))}

          <button
            type="button"
            className="catalog-chips__clear"
            onClick={clearAll}
          >
            Clear all
          </button>
        </div>
      )}

      {results.length > 0 ? (
        <ProductResults key={signature} items={results} />
      ) : (
        <section className="catalog-empty" role="status">
          <h2>No products found</h2>
          <p>Try another search or clear your filters.</p>
          <button type="button" onClick={clearAll}>
            Clear all
          </button>
        </section>
      )}

      <Link to="/" className="products-page__back">
        ← BACK TO HOME
      </Link>
    </main>
  );
}

function FilterForm({
  filters,
  onApply,
  onClear,
}: {
  filters: CatalogFilters;
  onApply: (next: CatalogFilters) => void;
  onClear: () => void;
}) {
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const min = String(data.get("minPrice") ?? "");
    const max = String(data.get("maxPrice") ?? "");

    const minPrice = min === "" ? undefined : Number(min);
    const maxPrice = max === "" ? undefined : Number(max);

    if (
      minPrice !== undefined &&
      maxPrice !== undefined &&
      minPrice > maxPrice
    ) {
      setError("Minimum price must not exceed maximum price.");
      return;
    }

    setError("");

    onApply({
      ...filters,
      category: String(data.get("category")),
      gender: String(data.get("gender")) as CatalogFilters["gender"],
      minPrice,
      maxPrice,
      sale: data.has("sale"),
      isNew: data.has("new"),
    });
  }

  return (
    <form
      className="catalog-filter-form"
      onSubmit={handleSubmit}
      onReset={() => setError("")}
    >
      <label>
        Category
        <select
          name="category"
          aria-label="Category"
          defaultValue={filters.category}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "ALL" ? "All categories" : category}
            </option>
          ))}
        </select>
      </label>

      <label>
        Gender
        <select name="gender" aria-label="Gender" defaultValue={filters.gender}>
          <option value="ALL">All genders</option>
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="UNISEX">Unisex</option>
        </select>
      </label>

      <fieldset className="catalog-filter-price">
        <legend>Price ($)</legend>

        <div>
          <label>
            Min
            <input
              type="number"
              name="minPrice"
              aria-label="Minimum price"
              min="0"
              step="any"
              placeholder="0"
              defaultValue={filters.minPrice ?? ""}
            />
          </label>

          <label>
            Max
            <input
              type="number"
              name="maxPrice"
              aria-label="Maximum price"
              min="0"
              step="any"
              placeholder="Any"
              defaultValue={filters.maxPrice ?? ""}
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="catalog-filter-options">
        <legend>Collection</legend>

        <label>
          <input type="checkbox" name="sale" defaultChecked={filters.sale} />
          On sale
        </label>

        <label>
          <input type="checkbox" name="new" defaultChecked={filters.isNew} />
          New arrivals
        </label>
      </fieldset>

      {error && (
        <p className="catalog-filter-error" role="alert">
          {error}
        </p>
      )}

      <div className="catalog-filter-actions">
        <button type="button" onClick={onClear}>
          Clear all
        </button>

        <button type="submit">Apply filters</button>
      </div>
    </form>
  );
}

function ProductResults({ items }: { items: Product[] }) {
  const [visibleCount, setVisibleCount] = useState(8);

  return (
    <>
      <div className="products-page__grid">
        {items.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      {visibleCount < items.length && (
        <div className="products-page__load-more">
          <button
            type="button"
            className="products-page__load-more-button"
            onClick={() =>
              setVisibleCount((current) => Math.min(current + 8, items.length))
            }
          >
            LOAD MORE PRODUCTS <span>+</span>
          </button>

          <p className="products-page__remaining">
            SHOWING {Math.min(visibleCount, items.length)} OF {items.length}{" "}
            PRODUCTS
          </p>
        </div>
      )}
    </>
  );
}

export default ProductsPage;
