import ProductStyles from "./ProductsPage.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductGrid = ({ products }) => {
  const dispatch = useDispatch();

  if (products.length === 0) {
    return <p>No se encontraron productos</p>;
  }

  return (
    <div className={ProductStyles.grid}>
      {products.map((prod) => (
        <div key={prod.id} className={ProductStyles.card}>
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
      ))}
    </div>
  );
};

export default ProductGrid;
