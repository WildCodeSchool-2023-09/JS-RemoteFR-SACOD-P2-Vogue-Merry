import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Victory({ result }) {
  if (result) {
    return (
      <motion.p
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Victory!
      </motion.p>
    );
  }
  return <p>Game Over!</p>;
}

Victory.propTypes = {
  result: PropTypes.bool.isRequired,
};

export default Victory;
