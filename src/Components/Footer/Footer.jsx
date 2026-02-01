import {
  Calendar1,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";
import Footerstyles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Footerstyles["footer-container"]}>
      <section className={Footerstyles.socials}>
        <h2>Electro-comp</h2>
        <ul className={Footerstyles["social-icons"]}>
          <li>
            <Youtube />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <Instagram />
          </li>
        </ul>
      </section>
      <address className={Footerstyles["contact-icons"]}>
        <ul>
          <li className={Footerstyles.contact}>
            <Phone />
            351-2939-402
          </li>
          <li className={Footerstyles.contact}>
            <Mail />
            Electro-comp@gmail.com
          </li>
          <li className={Footerstyles.contact}>
            <Calendar1 />
            Lunes a viernes de 9 a 18hs
          </li>
        </ul>
      </address>

      <nav>
        <ul>
          <li className={Footerstyles.contact}>Terminos y condiciones</li>
          <li className={Footerstyles.contact}>Trabaja con nosotros</li>
          <li className={Footerstyles.contact}>Garantia y devoluciones</li>
          <li className={Footerstyles.contact}>Como cuidamos tu privacidad</li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
