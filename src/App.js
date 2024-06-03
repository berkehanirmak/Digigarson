import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };
  return (
    <div>
      <div className="language-container">
        <h3> {i18n.language.toUpperCase()} - ☑️</h3>
        <button onClick={() => clickHandle("tr")}>Türkçe</button>
        <button onClick={() => clickHandle("en")}>English</button>
        <button onClick={() => clickHandle("fr")}>French</button>
        <button onClick={() => clickHandle("de")}>Deutsch</button>
        <button onClick={() => clickHandle("ar")}>العربية</button>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/urunlerimiz" element={<ProductsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
