import PropTypes from "prop-types";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

function CardModal({ name, image, effect, ingredients, closeModal }) {
  const componentRef = useRef();

  const handleOutsideClick = (event) => {
    if (!componentRef.current.contains(event.target)) {
      closeModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <button
        className="text-[#636262] text-2xl text-white -translate-y-52 translate-x-32 absolute"
        type="button"
        onClick={() => closeModal(false)}
      >
        <p> X </p>
      </button>
      <motion.div
        ref={componentRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="container-elixir bg-purple-800 grid text-white w-72 h-96 rounded-2xl p-4"
      >
        <div className="grid bg-purple-heart-400 rounded-xl h-44">
          <h1 className="text-xl font-irish text-center">{name}</h1>
          <div className="flex justify-center">
            {image ? (
              <img
                className="image-elixir w-36 h-24 object-contain rounded-2xl"
                src={image}
                alt={`Elixir: ${name}`}
              />
            ) : (
              <p className="image-elixir w-36 h-24 text-center self-center">
                No Image available 😱
              </p>
            )}
          </div>
        </div>
        <p className="font-extrabold">Effect:</p>
        <p>{effect || "No effect or unknown"}</p>
        <p className="font-extrabold">Ingedients</p>
        <p className="overflow-auto ingredients">
          {ingredients || "Not known yet"}
        </p>
      </motion.div>
    </>
  );
}

CardModal.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  effect: PropTypes.string,
  ingredients: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

CardModal.defaultProps = {
  image: "No image available",
  effect: "No effect",
  ingredients: "Not known yet",
};

export default CardModal;
