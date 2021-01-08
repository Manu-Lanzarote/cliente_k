import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="jumbotron">
      <div className="caja">
        <h1 id="h1">KALYPSE</h1>
        <h2>Createur de combinaisons de plongée personnalisables</h2>
        <hr />
        <h3>MADE IN FRANCE</h3>
        <div className="cont_video">
          <Link to="./ModalApp">
            <button className="video">KALYPSE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
