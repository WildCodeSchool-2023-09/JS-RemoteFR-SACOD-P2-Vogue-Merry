/* import { useState } from "react"; 
import OngletElixir from "./OngletElixir"; */

function NavBar() {
  /* const [elixir, setElixir] = useState();
  function clickOnglet() {
    <OngletElixir />;
  } */
  return (
    <nav>
      <div className="head">
        <img src="../src/assets/LOGO_1.png" alt="logo" />
        <div className="title">
          <h1>Elixir Maker</h1>
          <p>TEST YOUR KNOWLEDGE</p>
        </div>
      </div>
      <ul className="leaderboard">
        <li>
          <button type="button" /* onClick= {clickOnglet} */>Elixirs</button>
        </li>
        <li>Leaderboard</li>

        <button type="button">
          <img
            id="muteButton"
            src="../src/assets/Speaker_Icon.svg"
            alt="mute"
          />
        </button>
      </ul>
    </nav>
  );
}
export default NavBar;
