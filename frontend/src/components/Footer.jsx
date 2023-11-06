import { useState } from "react";
import { motion } from "framer-motion";
import Contact from "./Modal/Contact";
import Modal from "./Modal/Login";

function Footer() {
  const [openModal, setOpenModal] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  return (
    <footer>
      <p>Copyright @ 2023 Team VOGUE MERRY Tous droits réservés.</p>
      <div className="bonus">
        <button
          className="buttonContact"
          type="button"
          onClick={() => {
            setOpenContact(true);
          }}
        >
          contact us
        </button>
        <button
          className="buttonLogin"
          type="button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Login
        </button>
      </div>
      {openContact && (
        <div className="blur-background flex items-center justify-center">
          <Contact closeModal={setOpenContact} />
        </div>
      )}
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="blur-background flex items-center justify-center"
        >
          <Modal closeModal={() => setOpenModal(false)} />
        </motion.div>
      )}
    </footer>
  );
}

export default Footer;
