import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Card({ name, image, effect, ingredients }) {
  return (
    <motion.div
      initial="hidden"
      exit={{ opacity: 0 }}
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="container-elixir bg-purple-800 grid text-white w-72 max-sm:w-36 h-96 max-sm:h-auto rounded-2xl p-4 max-sm:p-2"
    >
      <div className="grid bg-purple-heart-400 rounded-xl h-44">
        <h1 className="text-xl font-irish text-center">{name}</h1>
        <div className="flex justify-center">
          {image ? (
            <img
              className="image-elixir w-36 h-24 object-contain rounded-2xl max-sm:p-2"
              src={image}
              alt={`Elixir: ${name}`}
            />
          ) : (
            <p className="image-elixir w-36 h-24 text-center self-center max-sm:w-28 ">
              No Image available 😱
            </p>
          )}
        </div>
      </div>
      <p className="font-extrabold text-left max-sm:hidden">Effect:</p>
      <p className="max-sm:hidden text-left">
        {effect || "No effect or unknown"}
      </p>
      <p className="font-extrabold text-left max-sm:hidden">Ingedients</p>
      <p className="overflow-auto ingredients text-left max-sm:hidden">
        {ingredients || "Not known yet"}
      </p>
    </motion.div>
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
