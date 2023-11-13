import { Link } from "react-router-dom";

function Rules() {
  return (
    <div className="container-accueil">
      <h1 className="titreRules">RULES</h1>
      <div className="parchRules">
        <p>
          Bienvenue dans notre univers magique!!
          <br /> Dans notre antre et sous notre aile, vous pourrez devenir un
          sorcier en créant vos propres potions. le but est de recréer une
          potion avec l'aide d'ingrédients proposés.
          <br /> Mais attention, un seul mauvais choix et c'est la perte d'une
          vie. Le nombre de vie dépend du choix de niveau que tu auras
          sélectionné.
          <br /> A toi de jouer et surtout ne perd pas de vie sinon GAME OVER !
        </p>
      </div>
      <Link to="/difficulty">
        <button
          type="button"
          className="flex font-irish bg-purple-heart-500 border-8 border-purple-heart-700 rounded-3xl w-64 text-white  justify-center items-center  text-5xl hover:bg-purple-heart-800 transition p-2 mb-4"
        >
          Play
        </button>
      </Link>
    </div>
  );
}

export default Rules;
