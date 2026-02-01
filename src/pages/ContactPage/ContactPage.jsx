import Contactstyles from "./Contact.module.css";
import { Mail, Phone, MapPin } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";

const ContactPage = () => {
  const [success, setSuccess] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(3, "Muy corto").required("Campo-obligatorio"),
      email: Yup.string().email("Email inválido").required("Campo-obligatorio"),
      message: Yup.string()
        .min(10, "Mensaje muy corto")
        .required("Campo-obligatorio"),
    }),
    onSubmit: async (values, { resetForm }) => {
      await new Promise((res) => setTimeout(res, 800));
      setShowError(false);
      setSuccess(true);
      resetForm();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    },
  });

  return (
    <section className={Contactstyles.page}>
      <div className={Contactstyles.container}>
        {/* Info */}
        <header className={Contactstyles.header}>
          <h1>Contacto</h1>
          <p>
            ¿Tenés alguna consulta sobre componentes, compatibilidad o pedidos?
            Completá el formulario y te respondemos a la brevedad.
          </p>

          <div>
            <p className={Contactstyles.info}>
              <Mail /> ventas@ElectroComp.com
            </p>
            <p className={Contactstyles.info}>
              <Phone /> +54 351-2939-402
            </p>
            <p className={Contactstyles.info}>
              <MapPin /> Cordoba, Argentina
            </p>
          </div>
        </header>

        <article className={Contactstyles.card}>
          <h2 className="">Envianos un mensaje</h2>

          <form onSubmit={formik.handleSubmit} noValidate>
            {formik.submitCount > 0 && !formik.isValid && !success && (
              <p className={Contactstyles.errorMessage}>
                Por favor completá todos los campos correctamente antes de
                enviar. {setTimeout(() => setShowError(false), 3000) && null}
              </p>
            )}
            {success && (
              <p className={Contactstyles.successMessage}>
                Mensaje enviado correctamente. Pronto te responderemos.
              </p>
            )}
            <div className={Contactstyles.formGroup}>
              <label htmlFor="name" className={Contactstyles.label}>
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={Contactstyles.input}
              />
              {formik.touched.name && formik.errors.name && (
                <p className={Contactstyles.errorMessageInput}>
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className={Contactstyles.formGroup}>
              <label htmlFor="email" className={Contactstyles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={Contactstyles.input}
              />
              {formik.touched.email && formik.errors.email && (
                <p className={Contactstyles.errorMessageInput}>
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className={Contactstyles.formGroup}>
              <label htmlFor="message" className={Contactstyles.label}>
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className={Contactstyles.input}
              />
              {formik.touched.message && formik.errors.message && (
                <p className={Contactstyles.errorMessageInput}>
                  {formik.errors.message}
                </p>
              )}
            </div>

            <button type="submit" className={Contactstyles.button}>
              Enviar mensaje
            </button>
          </form>
        </article>
      </div>
    </section>
  );
};

export default ContactPage;
