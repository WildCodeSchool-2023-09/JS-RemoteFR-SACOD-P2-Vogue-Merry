import { useState } from "react";
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
        <div className="blur-background flex items-center justify-center">
          <Login closeModal={() => setOpenModal(false)} />
        </div>
      )}
    </footer>
  );
}

export default Footer;
