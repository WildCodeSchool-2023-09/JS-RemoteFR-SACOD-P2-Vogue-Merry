import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Victory({ result, score }) {
  const [bestScore, setBestScore] = useState(1000);

  useEffect(() => {
    const storedScore = Number(
      window.localStorage.getItem("BESTSCORE_ELIXIR_MAKER")
    );
    setBestScore(storedScore);
  }, []);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
      window.localStorage.setItem(
        "BESTSCORE_ELIXIR_MAKER",
        JSON.stringify(score)
      );
    }
  }, [bestScore]);

  if (result) {
    return (
      <motion.p
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-center">Victory!</h1>
        <p>Your score is {score}</p>
        <p>Your highest score is {bestScore}!</p>
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
      {bestScore && <p>Your highest score is {bestScore}</p>}
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
  score: PropTypes.number.isRequired,
};

export default Victory;
