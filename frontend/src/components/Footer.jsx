import { useState } from "react";
import Modal from "./Modal/Modal";

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
        <div className="blur-background">
          <Modal closeModal={() => setOpenModal(false)} />
        </div>
      )}
    </footer>
  );
}

export default Footer;
