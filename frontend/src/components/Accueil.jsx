function Accueil() {
  return (
    <div className="container-accueil">
      <img
        className="grand-logo"
        src="../src/assets/grand_logo.png"
        alt="grand_logo"
      />
      <div className="buttons">
        <button className="play" type="button" /* onClick={play} */>
          PLAY
        </button>
        <button className="rules" type="button" /* onClick={rules} */>
          RULES
        </button>
      </div>
    </div>
  );
}
export default Accueil;
