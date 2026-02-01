import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="Inicio" className={styles.hero}>
      <article className={styles.content}>
        <h1>ARMAR TU PC NUNCA FUE TAN FACIL</h1>
        <p>
          En Electro Comp conectamos a los amantes de la tecnología con los
          mejores componentes del mercado. Calidad, velocidad y los mejores
          precios en stock para que nunca dejes de crear, trabajar o jugar.
        </p>
        <button className={styles.cta}>COMPRAR AHORA</button>
      </article>
    </section>
  );
};
export default Hero;
