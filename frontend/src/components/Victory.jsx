import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Victory({ result, pV, score }) {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const data = window.localStorage.getItem("BESTSCORE_ELIXIR_MAKER");
    if (data) setBestScore(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (bestScore < score) {
      setBestScore(score);
    }
    window.localStorage.setItem(
      "BESTSCORE_ELIXIR_MAKER",
      JSON.stringify(bestScore)
    );
  }, [score, bestScore]);

  if (result) {
    return (
      <motion.p
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center">Victory!</h1>
        <p>Your score is {score * pV}</p>
        <p>Your highest score is {bestScore * pV}!</p>
      </motion.p>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Game Over!</p>
      <p>Your highest score is {bestScore}!</p>
    </div>
  );
}

Victory.propTypes = {
  result: PropTypes.bool.isRequired,
  pV: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Victory;
