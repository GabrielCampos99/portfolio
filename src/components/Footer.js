import estilo from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={estilo.container}>
      <div className={estilo.box}>
        <a
          className={estilo.footerTitulo}
          href="https://www.linkedin.com/in/gabrielcampos99/"
          target="_blank"
        >
          Vamos trabalhar juntos? ➵
        </a>

        <p>gabrielsouza.ccampos@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
