import estilo from "./Projetos.module.scss";
const Projetos = (params) => {
  const frases = "https://i.imgur.com/j4yth6I.png";
  const graham = "https://i.imgur.com/3D9slZz.png";
  const temp = "https://i.imgur.com/1BLNPAO.png";
  return (
    <div className={estilo.bg}>
      <div className={estilo.container}>
        <h1 className={estilo.projetoH1}>Projetos</h1>
        <div className={estilo.cardBox}>
          <div className={estilo.card}>
            <h1>Frases React</h1>
            <img src={frases} alt="logo" />
            <p>
              Desenvolvi esse app com React.js, foi feito com o intuito de
              aprender a fazer requisições JSON e manipulação de dados.
            </p>
            <a
              className={estilo.btn}
              href="https://github.com/GabrielCampos99/FrasesAleatorias"
              target="_blank"
            >
              Clique
            </a>
          </div>

          <div className={estilo.card}>
            <h1>Formula Graham </h1>
            <img src={graham} alt="logo" />
            <p>
              A formula de graham foi desenvolvida com HTML, CSS e javascript
              puro, foi um dos meus primeiros projetos devenvolvidos.
            </p>
            <a
              className={estilo.btn}
              href="https://github.com/GabrielCampos99/formula-graham"
              target="_blank"
            >
              Clique
            </a>
          </div>

          <div className={estilo.card}>
            <h1>React Tempo </h1>
            <img src={temp} alt="logo" />
            <p>
              Esse app foi um dos mais elaborados que eu fiz até o momento.
              Nele, não apliquei muito design e pratiquei a lógica de
              programação com React, usando hook, requisições e passando dados
              por componentes.
            </p>

            <a
              className={estilo.btn}
              href="https://github.com/GabrielCampos99/appTempo"
              target="_blank"
            >
              Clique
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
