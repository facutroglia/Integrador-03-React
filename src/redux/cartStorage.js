export const CartStorage = () => {
  try {
    const data = localStorage.getItem("cartItems");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error cargando el carrito", error);
    return [];
  }
};

export const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Error guardando el carrito", error);
  }
};
