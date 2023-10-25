import PropTypes from "prop-types";

function Card({ name, image, effect, ingredients }) {
  return (
    <div className="container-elixir bg-purple-800 flex flex-col items-center w-96 text-white">
      <h1 className="text-xl">{name}</h1>
      <div className="description-elixir">
        {image ? (
          <img className="image-elixir" src={image} alt={`Elixir: ${name}`} />
        ) : (
          <p className="image-elixir">No Image available 🥲</p>
        )}
        <p>Effect:</p>
        <p>{effect || "No effect or unknown"}</p>
        <p>Ingedients</p>
        <p>{ingredients || "Not known yet"}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  effect: PropTypes.string,
  ingredients: PropTypes.string,
};

Card.defaultProps = {
  image: "No image available",
  effect: "No effect",
  ingredients: "Not known yet",
};

export default Card;
