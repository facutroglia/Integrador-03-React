import headerStyles from "./Header.module.css";
import { useMenu } from "../../Context/NavContext.jsx";
import Cart from "../Cart/Cart.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

const Header = () => {
  const { toggleMenu, isMenuOpen, closeMenu } = useMenu();
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <header className={headerStyles.header}>
      <h2>ELECTRO-COMP</h2>

      <nav
        className={`${headerStyles.navbar} ${
          isMenuOpen ? headerStyles.open : ""
        }`}
      >
        <button
          className={headerStyles["nav-items"]}
          onClick={() => goToSection("Inicio")}
        >
          Inicio
        </button>
        <button
          className={headerStyles["nav-items"]}
          onClick={() => goToSection("Productos")}
        >
          Productos
        </button>
        <button
          className={headerStyles["nav-items"]}
          onClick={() => goToSection("AboutUs")}
        >
          Sobre nosotros
        </button>

        <Link
          className={headerStyles["nav-items"]}
          to="/contacto"
          onClick={closeMenu}
        >
          Contactanos
        </Link>
      </nav>

      <Cart />

      <button className={headerStyles["btn-menu"]} onClick={toggleMenu}>
        <Menu />
      </button>
    </header>
  );
};

export default Header;
