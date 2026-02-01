/*import React, { useState } from "react";
import { Productos } from "../../data/productos";
import ProductStyles from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarruselTriple = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getItemsPerView = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const [index, setIndex] = useState(0);

 useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setIndex(0); // resetea para evitar cortes raros
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const destacados = Productos.filter((p) => p.destacados).slice(0, 9);
  const siguiente = () => {
    if (index < destacados.length - itemsPerView) {
      setIndex(index + itemsPerView);
    } else {
      setIndex(0);
    }
  };

  const anterior = () => {
    if (index > 0) {
      setIndex(index - itemsPerView);
    } else {
      setIndex(destacados.length - itemsPerView);
    }
  };

  return (
    <section id="Productos" className={ProductStyles["carrusel-container"]}>
      <h3>Produtos destacados</h3>
      <div>
        <button onClick={anterior} className={ProductStyles["btn-anterior"]}>
          <ChevronLeft />
        </button>
        <button onClick={siguiente} className={ProductStyles["btn-siguiente"]}>
          <ChevronRight />
        </button>
      </div>
      <div className={ProductStyles["carrusel-ventana"]}>
        <div
          className={ProductStyles["carrusel-track"]}
          style={{ transform: `translateX(-${index * (100 / 3)}%)` }}
        >
          {destacados.map((prod) => (
            <div key={prod.id} className={ProductStyles["carrusel-item"]}>
              <div className={ProductStyles.card}>
                <img src={prod.image} alt={prod.name} />
                <h4>{prod.name}</h4>
                <p>${prod.precio}</p>
                <button
                  onClick={() => dispatch(addToCart(prod))}
                  className={ProductStyles["btn-buy"]}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/Products")}
        className={ProductStyles["btn-buy"]}
      >
        Ver mas productos
      </button>
    </section>
  );
};

export default CarruselTriple;*/

import React, { useEffect, useState } from "react";
import { Productos } from "../../data/Productos.json";
import ProductStyles from "./Products.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarruselTriple = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const destacados = Productos.filter((p) => p.destacados).slice(0, 9);

  const getItemsPerView = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const maxIndex = Math.max(0, destacados.length - itemsPerView);

  useEffect(() => {
    setIndex((prev) => Math.min(prev, maxIndex));
  }, [itemsPerView, maxIndex]);

  const siguiente = () => {
    if (index + itemsPerView <= maxIndex) {
      setIndex(index + itemsPerView);
    } else {
      setIndex(0);
    }
  };

  const anterior = () => {
    if (index - itemsPerView >= 0) {
      setIndex(index - itemsPerView);
    } else {
      setIndex(maxIndex);
    }
  };

  return (
    <section id="Productos" className={ProductStyles["carrusel-container"]}>
      <h3>Productos destacados</h3>

      <div className={ProductStyles["controls"]}>
        <button onClick={anterior} className={ProductStyles["btn-anterior"]}>
          <ChevronLeft />
        </button>
        <button onClick={siguiente} className={ProductStyles["btn-siguiente"]}>
          <ChevronRight />
        </button>
      </div>

      <div className={ProductStyles["carrusel-ventana"]}>
        <div
          className={ProductStyles["carrusel-track"]}
          style={{
            transform: `translateX(-${index * (100 / itemsPerView)}%)`,
          }}
        >
          {destacados.map((prod) => (
            <div key={prod.id} className={ProductStyles["carrusel-item"]}>
              <div className={ProductStyles.card}>
                <img src={prod.image} alt={prod.name} />
                <h4>{prod.name}</h4>
                <p>${prod.precio}</p>
                <button
                  onClick={() => dispatch(addToCart(prod))}
                  className={ProductStyles["btn-buy"]}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/Products")}
        className={ProductStyles["btn-buy"]}
      >
        Ver más productos
      </button>
    </section>
  );
};

export default CarruselTriple;
