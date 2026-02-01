import { useState } from "react";
import { Productos } from "../../data/productos";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";
import ProductsPagestyles from "./ProductsPage.module.css";

const ProductsPage = () => {
  const [category, setCategory] = useState("all");
  const [order, setOrder] = useState("default");

  const filteredProducts = Productos.filter((p) =>
    category === "all" ? true : p.categoria === category,
  ).sort((a, b) => {
    if (order === "price-asc") return a.precio - b.precio;
    if (order === "price-desc") return b.precio - a.precio;
    return 0;
  });

  return (
    <section className={ProductsPagestyles.productsPage}>
      <h2>Productos</h2>

      <div className={ProductsPagestyles.layout}>
        <Filters
          category={category}
          setCategory={setCategory}
          order={order}
          setOrder={setOrder}
        />

        <ProductGrid products={filteredProducts} />
      </div>
    </section>
  );
};

export default ProductsPage;
