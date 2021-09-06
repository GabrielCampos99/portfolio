import estilo from "./Tecnologias.module.scss";
import { html, css, js, react, github } from "../images/Images";

const Tecnologias = (params) => {
  return (
    <div className={estilo.bg}>
      <div className={estilo.container}>
        <h1 className={estilo.h1}>Tecnologias</h1>
        <div className={estilo.box}>
          <div className={estilo.box_card}>
            <h1 className={estilo.card_title}>HTML/CSS</h1>
            <div className={estilo.svg_box}>
              {html}
              {css}
            </div>
            <ul>
              <li className={estilo.card_subtitle}>HTML5</li>
              <li className={estilo.card_subtitle}>CSS</li>
              <li className={estilo.card_subtitle}>SASS</li>
              <li className={`${estilo.card_subtitle} ${estilo.ultimo}`}>
                Animations
              </li>
            </ul>
          </div>

          <div className={estilo.box_card}>
            <h1 className={estilo.card_title}>Javascript/ES6+</h1>
            <div className={estilo.svg_box}>{js}</div>
            <ul>
              <li className={estilo.card_subtitle}>JavaScript assíncrono</li>
              <li className={estilo.card_subtitle}>NPM</li>
              <li className={estilo.card_subtitle}>BABEL</li>
              <li className={`${estilo.card_subtitle} ${estilo.ultimo}`}>
                OOP
              </li>
            </ul>
          </div>

          <div className={estilo.box_card}>
            <h1 className={estilo.card_title}>React.js</h1>
            <div className={estilo.svg_box}>{react}</div>
            <ul>
              <li className={estilo.card_subtitle}>React.js</li>
              <li className={estilo.card_subtitle}>Hooks</li>
              <li className={estilo.card_subtitle}>Router</li>
              <li className={`${estilo.card_subtitle} ${estilo.ultimo}`}>
                Redux
              </li>
            </ul>
          </div>
        </div>
        <h1 className={estilo.center}>E mais...</h1>
      </div>
      <div className={estilo.seila}>se</div>
    </div>
  );
};

export default Tecnologias;
