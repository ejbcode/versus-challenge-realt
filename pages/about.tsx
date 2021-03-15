import styled from "styled-components";

const AboutStyle = styled.div`
  padding: 2rem;
  .grid {
    grid-template-columns: 1fr 1fr;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }

  line-height: 2;
  .image {
    img {
    }
  }
`;

export default function AboutPage() {
  return (
    <AboutStyle>
      <h1>RealTrends challenge</h1>
      <div className="grid">
        <div className="content">
          <h4>Se debe crear una aplicación de votación realtime.</h4>
          <h2>API </h2>
          <ul>
            <li>Debe exponer un servidor de websocket al que se pueda subscribir.</li>
            <li>Debe emitir eventos cuando haya votos nuevos.</li>
          </ul>
          <h2>Cliente</h2>
          <ul>
            <li>Debe haber al menos dos productos sobre los cuales se pueda votar.</li>
            <li>Se debe mostrar un indicador del porcentaje de votos de cada producto</li>
            <li>Se debe poder ver quienes fueron los votantes y sus respectivas valoraciónes.</li>
            <li>Cada usuario puede votar una vez, si vota más de una, el voto se transfiere.</li>
          </ul>
          <h2>Definiciones técnicas</h2>
          <ul>
            <li>
              El código de la aplicación debe estar subida a un repositorio de público acceso.
            </li>
          </ul>
          <h2>Puntos extra</h2>
          <ul>
            <li>
              El usuario puede seleccionar los productos desde el cliente viendo un modal con
              productos de Mercado Libre.
            </li>
          </ul>
        </div>
        <div className="image">
          <img alt="ds" src="/spec.png" width="50%" />
        </div>
      </div>
      <div className="about">
        <p>
          <a href="https://www.real-trends.com/"> Conozca sobre Real Trends</a>
        </p>
        <p>
          <a href="https://github.com/goncy/realtrends-challenge"> Link del Challange</a>
        </p>
        <p>
          <a href="https://github.com/ejbcode/versus-challenge-realt">
            Link de la solucion del Challenge
          </a>
        </p>
      </div>
    </AboutStyle>
  );
}
