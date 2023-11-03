import { useState } from "react";
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
        <div className="blur-background">
          <Contact closeModal={setOpenContact} />
        </div>
      )}
      {openModal && (
        <div className="blur-background">
          <Modal closeModal={() => setOpenModal(false)} />
        </div>
      )}
    </footer>
  );
}

export default Footer;
