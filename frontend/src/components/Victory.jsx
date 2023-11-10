import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Victory({ result, pV, score }) {
  if (result) {
    return (
      <motion.p
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center">Victory!</h1>
        <p>Your score is {score * pV}</p>
        <Link to="/difficulty">
          <button
            type="button"
            className="flex bg-purple-heart-500 rounded-2xl text-white w-full h-full justify-center items-center z-10 text-3xl hover:bg-purple-heart-800 transition"
          >
            Try again
          </button>
        </Link>
      </motion.p>
    );
  }
  return (
    <div>
      <p>Game Over!</p>
      <Link to="/difficulty">
        <button
          type="button"
          className="flex bg-purple-heart-500 rounded-2xl text-white w-full h-full justify-center items-center z-10 text-3xl hover:bg-purple-heart-800 transition"
        >
          Try again
        </button>
      </Link>
    </div>
  );
}

Victory.propTypes = {
  result: PropTypes.bool.isRequired,
  pV: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Victory;
