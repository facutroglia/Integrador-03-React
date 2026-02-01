import Home from "./Components/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import AboutPage from "./pages/AboutUsPage/AboutUsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuProvider } from "./Context/NavContext";
import ProductsPage from "./pages/ProductsPages/ProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <MenuProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Products" element={<ProductsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
      </MenuProvider>
    </Router>
  );
}

export default App;
