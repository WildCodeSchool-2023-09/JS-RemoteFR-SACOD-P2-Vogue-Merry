import { NavLink } from "react-router-dom";

import PlayingMusic from "./Music";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <div className="head">
          <img id="logo" src="../src/assets/logo.png" alt="logo" />
          <div className="title">
            <h1>Elixir Maker</h1>
            <p>TEST YOUR KNOWLEDGE</p>
          </div>
        </div>
      </NavLink>
      <ul className="leaderboard">
        <li>
          <NavLink to="difficulty">
            <button id="playButton" type="button">
              <img
                id="potion"
                src="../src/assets/chaudron.png"
                alt="chaudron"
              />
              <h1>Play</h1>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="elixir">
            <button id="potionButton" type="button">
              <img id="potion" src="../src/assets/potion.svg" alt="potion" />
              <h1>Elixirs</h1>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="leaderboard">
            <button id="trophyButton" type="button">
              <img id="trophy" src="../src/assets/trophy.svg" alt="trophy" />
              <h1>Leaderboard</h1>
            </button>
          </NavLink>
        </li>
        <PlayingMusic />
      </ul>
    </nav>
  );
}

export default NavBar;
