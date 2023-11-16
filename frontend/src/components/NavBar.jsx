import { NavLink } from "react-router-dom";
import PlayingMusic from "./Music";
import logo from "../assets/logo.png";
import chaudron from "../assets/chaudron.png";
import potion from "../assets/potion.svg";
import trophy from "../assets/trophy.svg";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <div className="head">
          <img id="logo" src={logo} alt="logo" />
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
              <img id="potion" src={chaudron} alt="chaudron" />
              <h1>Play</h1>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="elixir">
            <button id="potionButton" type="button">
              <img id="potion" src={potion} alt="potion" />
              <h1>Elixirs</h1>
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="leaderboard">
            <button id="trophyButton" type="button">
              <img id="trophy" src={trophy} alt="trophy" />
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
