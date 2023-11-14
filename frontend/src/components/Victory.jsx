import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
  const bestFinalScore = bestScore * pV;
  if (result) {
    return (
      <motion.p
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-center">Victory!</h1>
        <p>Your score is {score * pV}</p>
        <p className="text-6xl text-center mb-6">
          Your highest score is {bestFinalScore}!
        </p>
        <Link to="/difficulty">
          <button
            type="button"
            className="flex bg-purple-heart-300 rounded-2xl text-black px-14 h-full justify-center items-center z-10 text-3xl hover:bg-purple-heart-800 transition"
          >
            Try again
          </button>
        </Link>
      </motion.p>
    );
  }
  return (
    <div className="flex flex-col items-center ">
      <p>Game Over!</p>
      <Link to="/difficulty">
        <button
          type="button"
          className="flex bg-purple-heart-300 rounded-2xl text-black px-14 h-full justify-center items-center z-10 text-3xl hover:bg-purple-heart-800 transition"
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
