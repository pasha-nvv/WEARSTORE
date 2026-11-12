import { CartProvider } from "./context/CarContext";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import BrandStatement from "./components/BrandStatement";
import Editorial from "./components/Editorial";
import Footer from "./components/Footer";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { FavoritesProvider } from "./context/FavoritesContext";
import FavoritesPage from "./pages/FavoritesPage";
import Reveal from "./components/Reveal";
import CartFeedback from "./components/CartFeedback";

function HomePage() {
  return (
    <>
      <Hero />
      <Catalog />
      <BrandStatement />
      <Editorial />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Reveal />

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>

        <Footer />
        <CartFeedback />
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
