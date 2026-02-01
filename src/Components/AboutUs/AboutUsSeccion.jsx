import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section id="AboutUs" className={styles.AboutUs}>
      <article className={styles.content}>
        <h2>Creamos soluciones con impacto real</h2>
        <p>
          No solo construimos productos, diseñamos experiencias que transforman
          el día a día de nuestros clientes. Nuestra pasión por la innovación
          nos define, pero nuestro compromiso con las personas es lo que nos
          mueve.
        </p>
        <button onClick={() => navigate("/about")} className={styles.btnAbout}>
          Conócenos
        </button>
      </article>
      <figure className={styles.image}>
        <img src="/FondoAboutUs.jpeg" />
      </figure>
    </section>
  );
};
export default AboutUs;
