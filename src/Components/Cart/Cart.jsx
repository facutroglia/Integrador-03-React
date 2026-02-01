import React, { useState } from "react";
import CartStyles from "./Cart.module.css";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeItem,
  deleteFromCart,
  clearCart,
} from "../../redux/cartSlice";
import { Minus, Plus, ShoppingCart, Trash, X } from "lucide-react";

const Cart = () => {
  const [success, setSuccess] = useState(false);
  const handlePurchase = () => {
    dispatch(clearCart());
    localStorage.removeItem("cartItems");

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setOpened(false);
      document.body.classList.remove("active");
    }, 2500);
  };
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const precioTotal = cartItems.reduce((acc, item) => {
    const p = Number(item.precio) || 0;
    const q = Number(item.quantity) || 1;

    return acc + p * q;
  }, 0);
  const [opened, setOpened] = useState(false);
  const toggle = () => {
    setOpened(!opened);
    document.body.classList.toggle("active");
  };

  return (
    <>
      <button type="button" onClick={toggle} className={CartStyles.btnCart}>
        <ShoppingCart />
        <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
      </button>

      <section
        className={`${CartStyles.cart} ${!opened ? "" : CartStyles.opened}`}
      >
        <form>
          <button type="button" onClick={toggle} className={CartStyles.btnCart}>
            <X />
          </button>
        </form>
        <h2>
          Tus Productos{" "}
          {cartItems.length > 0 && (
            <button type="button" onClick={() => dispatch(clearCart())}>
              <Trash />
            </button>
          )}
        </h2>
        {cartItems.length == 0 && (
          <p className={CartStyles.NoProducts}>No hay productos aun</p>
        )}
        {cartItems.length > 0 && (
          <ul className={CartStyles.items}>
            {cartItems.map((item) => (
              <li key={item.id}>
                <picture>
                  <img src={item.image} alt="" />
                </picture>
                <dl>
                  <dt>{item.name}</dt>
                  <dd>
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    }).format(item.precio)}
                  </dd>
                </dl>

                <form onSubmit={(e) => e.preventDefault()}>
                  <button
                    className={CartStyles["btn-quantity"]}
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <Minus />
                  </button>

                  <output>{item.quantity}</output>
                  <button
                    className={CartStyles["btn-quantity"]}
                    onClick={() => dispatch(addToCart(item))}
                  >
                    <Plus />
                  </button>
                  <button onClick={() => dispatch(deleteFromCart(item.id))}>
                    <Trash />
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
        <footer>
          {cartItems.length > 0 && (
            <p>
              Subtotal:
              <span>
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(
                  cartItems.reduce(
                    (previo, actual) =>
                      previo + actual.precio * actual.quantity,
                    0,
                  ),
                )}
              </span>
            </p>
          )}

          {cartItems.length > 0 && (
            <p>
              Envio: <span> $500 </span>
            </p>
          )}

          {cartItems.length > 0 && (
            <p>
              Total:{""}
              <span>
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(
                  cartItems.reduce(
                    (previo, actual) =>
                      previo + actual.precio * actual.quantity,
                    0,
                  ) + 500,
                )}
              </span>
            </p>
          )}
        </footer>
        {cartItems.length > 0 && (
          <button type="button" onClick={handlePurchase}>
            Realizar compra
          </button>
        )}
        {success && (
          <div className={CartStyles.success}>
            <p> ¡Compra realizada con éxito!</p>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
