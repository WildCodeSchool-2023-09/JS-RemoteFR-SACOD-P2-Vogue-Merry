
import PlayingMusic from "./Music";

import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <Link to="/">
        <div className="head">
          <img id="logo" src="../src/assets/LOGO_1.png" alt="logo" />
          <div className="title">
            <h1>Elixir Maker</h1>
            <p>TEST YOUR KNOWLEDGE</p>
          </div>
        </div>
      </Link>
      <ul className="leaderboard">
        <li>
          <Link to="/elixir">
            <button id="potionButton" type="button">
              <img id="potion" src="../src/assets/potion.svg" alt="potion" />
              <h1>Elixirs</h1>
            </button>
          </Link>
        </li>
        <li>
          <button id="trophyButton" type="button">
            <img id="trophy" src="../src/assets/trophy.svg" alt="trophy" />
            <h1>Leaderboard</h1>
          </button>
        </li>
        <PlayingMusic />
      </ul>
    </nav>
  );
}

export default NavBar;
