import { Monitor, Users, ShieldCheck, Zap } from "lucide-react";
import Aboutstyles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <main className={Aboutstyles.container}>
      <section className={Aboutstyles.hero}>
        <h1>Innovación a tu alcance</h1>
        <p>
          En Electro-comp transformamos la forma en que interactúas con la
          tecnología desde hace más de 10 años.
        </p>
      </section>

      <section className={Aboutstyles.history}>
        <div className={Aboutstyles.content}>
          <h2>Nuestra Historia</h2>
          <p>
            Nacimos en el corazón de la ciudad con una misión clara: acercar los
            componentes electrónicos más avanzados tanto a entusiastas como a
            profesionales. Lo que empezó como un pequeño taller, hoy es el
            referente tecnológico de la región.
          </p>
        </div>
        <picture>
          <img
            src="/FondoAboutUs.jpeg"
            alt=""
            className={Aboutstyles.imagePlaceholder}
          />
        </picture>
      </section>

      <section className={Aboutstyles.values}>
        <div className={Aboutstyles.valueCard}>
          <Zap />
          <h3>Rapidez</h3>
          <p>Entregas en tiempo récord y soporte técnico inmediato.</p>
        </div>
        <div className={Aboutstyles.valueCard}>
          <ShieldCheck />
          <h3>Garantía</h3>
          <p>Todos nuestros productos cuentan con respaldo oficial.</p>
        </div>
        <div className={Aboutstyles.valueCard}>
          <Users />
          <h3>Comunidad</h3>
          <p>
            Más que clientes, formamos una red de apasionados por el hardware.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
