import { Link } from "react-router-dom";
import "./Navigation.css";

type NavigationProps = {
  onNavigate: () => void;
};

const categories = [
  "NEW ARRIVALS",
  "MEN",
  "WOMEN",
  "SHOES",
  "ACCESSORIES",
  "SALE",
];

function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="category-nav" aria-label="Product categories">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/catalog?category=${encodeURIComponent(category)}`}
          className="category-nav__link"
          onClick={onNavigate}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
