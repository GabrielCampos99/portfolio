import estilo from "./Main.module.scss";
import illustration from "../images/illustration-1.svg";

const Main = () => {
  return (
    <div className={estilo.bg}>
      <header className={estilo.header}>
        <nav>
          <ul class={estilo.header_nav}>
            <li className={estilo.logo}>GabrielCampos</li>
          </ul>
        </nav>
        <div className={estilo.header_box}>
          <div className={estilo["header_box--conteudo"]}>
            <div className={estilo.flex}>
              <p className={estilo.lowSubtitle}>React.js</p>
              <p className={estilo.lowSubtitle}>HTML</p>
              <p className={estilo.lowSubtitle}>CSS</p>
            </div>

            <h1>Gabriel Campos Front End-Developer</h1>
            <h2>Apaixado por codigo, desafios e pelo universo tech!</h2>
          </div>
          <div className={estilo["header_box--svg"]}>
            <img className={estilo.svg} src={illustration} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Main;
