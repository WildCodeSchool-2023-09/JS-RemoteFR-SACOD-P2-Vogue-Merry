import PropTypes from "prop-types";
import { motion } from "framer-motion";

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
      </motion.p>
    );
  }
  return <p>Game Over!</p>;
}

Victory.propTypes = {
  result: PropTypes.bool.isRequired,
  pV: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Victory;
