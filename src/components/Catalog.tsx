import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import "./Catalog.css";

function Catalog() {
  return (
    <section className="catalog" id="catalog">
      <div className="catalog__header">
        <div>
          <p className="catalog__eyebrow">01 / THE COLLECTION</p>
          <h2 className="catalog__title">NEW ARRIVALS</h2>
        </div>

        <p className="catalog__count">SELECTED PIECES — 04</p>
      </div>

      <div className="catalog__grid">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      <div className="catalog__footer">
        <Link to="/catalog" className="catalog__view-all">
          VIEW ALL PRODUCTS <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export default Catalog;
