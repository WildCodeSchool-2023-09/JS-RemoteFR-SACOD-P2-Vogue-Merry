function Accueil() {
  return (
    <div className="container-accueil">
      <img
        className="grand-logo"
        src="../src/assets/grand_logo.png"
        alt="grand_logo"
      />
      <div className="buttons">
        <button className="play" type="button">
          PLAY
        </button>
        <button className="rules" type="button">
          RULES
        </button>
      </div>
    </div>
  );
}
export default Accueil;
