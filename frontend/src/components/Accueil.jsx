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
        <Link to="difficulty">
          <button className="play transition" type="button">
            PLAY
          </button>
        </Link>
        <Link to="rules">
          <button className="rules transition" type="button">
            RULES
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Accueil;
