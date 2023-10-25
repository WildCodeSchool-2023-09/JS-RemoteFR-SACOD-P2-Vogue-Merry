function Card() {
  return (
    <div className="container-elixir bg-purple-800 flex flex-col items-center w-96 text-white">
      <h1 className="text-xl">Exemple elixir qui sera remplacer</h1>
      <div className="description-elixir">
        <p>Ici l'image </p>
        <p>Effect:</p>
        <p>Aged drinker temporarily</p>
        <p>Ingedientsss</p>
        <p>Newt spleens, Bananas, An orange snake, A green leaf</p>
      </div>
    </div>
  );
}

/* Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
}; */

export default Card;
