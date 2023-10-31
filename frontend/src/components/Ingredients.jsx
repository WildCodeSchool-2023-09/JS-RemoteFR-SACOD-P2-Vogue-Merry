import PropTypes from "prop-types";


function Ingredients({ ingredient, ingredientsPotion, setAnimation }) {
  function returnToTrueAnimation() {
    setAnimation("bg");
  }
  const isTrue = () => {
    if (ingredientsPotion.includes(ingredient) !== true) {
      setAnimation("bgFalse");
      setTimeout(returnToTrueAnimation, 3000);
    }
  };

  return (
    <button
      type="button"
      className="flex text-white font-irish w-full h-full justify-center items-center "
      onClick={isTrue}
    >
      {ingredient}
    </button>
  );
}

Ingredients.propTypes = {
  ingredient: PropTypes.string.isRequired,
  ingredientsPotion: PropTypes.isRequired,
  setAnimation: PropTypes.func.isRequired,

};
export default Ingredients;
