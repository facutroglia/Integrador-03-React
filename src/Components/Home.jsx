import Hero from "./Hero/HeroSeccion";
import CarruselTriple from "./Products/ProductsSeccion";
import AboutUs from "./AboutUs/AboutUsSeccion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <>
      <main>
        <Hero />
        <CarruselTriple />
        <AboutUs />
      </main>
    </>
  );
};
export default Home;
