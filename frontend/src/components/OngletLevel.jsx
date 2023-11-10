import { Link } from "react-router-dom";

function OngletLevel() {
  return (
    <div className="container-accueil">
      <div className="levelButton">
        <Link to="easy">
          <button type="button">EASY</button>
        </Link>
        <Link to="medium">
          <button type="button">MEDIUM</button>
        </Link>
        <Link to="hard">
          <button type="button">HARD</button>
        </Link>
      </div>
    </div>
  );
}

export default OngletLevel;
