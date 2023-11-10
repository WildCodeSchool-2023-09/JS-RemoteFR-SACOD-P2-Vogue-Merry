import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Victory({ result }) {
  if (result) {
    return (
      <motion.p
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>Victory!</p>
        <Link to="/difficulty">
          <button
            type="button"
            className="flex bg-purple-heart-500 rounded-2xl text-white w-full h-full justify-center items-center z-10 "
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
          className="flex bg-purple-heart-500 rounded-2xl text-white w-full h-full justify-center items-center z-10 hover"
        >
          Try again
        </button>
      </Link>
    </div>
  );
}

Victory.propTypes = {
  result: PropTypes.bool.isRequired,
};

export default Victory;
