import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="container-accueil">
      <img
        className="grand-logo"
        src="../src/assets/grand_logo.png"
        alt="grand_logo"
      />

      <div className="buttons">
        <Link to="/jeu">
          <button className="play" type="button">
            PLAY
          </button>
        </Link>
        <button className="rules" type="button">
          RULES
        </button>
      </div>
    </div>
  );
}
export default Accueil;
