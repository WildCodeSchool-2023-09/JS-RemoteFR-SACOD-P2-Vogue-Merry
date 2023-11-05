import { useState } from "react";
import { motion } from "framer-motion";
import Login from "./Modal/Login";

function Footer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <footer>
      <p>Copyright @ 2023 Team VOGUE MERRY Tous droits réservés.</p>
      <button
        className="buttonLogin"
        type="button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Login
      </button>
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="blur-background flex items-center justify-center"
        >
          <Login closeModal={() => setOpenModal(false)} />
        </motion.div>
      )}
    </footer>
  );
}

export default Footer;
