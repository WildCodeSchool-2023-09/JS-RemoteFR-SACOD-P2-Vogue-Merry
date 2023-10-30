import PropTypes from "prop-types";

function Ingredients({ ingredient }) {
  console.info(ingredient);
  return (
    <button
      type="button"
      className="flex text-white font-irish w-full h-full justify-center items-center "
    >
      {ingredient}
    </button>
  );
}

Ingredients.propTypes = {
  ingredient: PropTypes.string.isRequired,
};
export default Ingredients;
