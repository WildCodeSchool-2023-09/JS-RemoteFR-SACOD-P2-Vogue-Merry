import { useState } from "react";
import Contact from "./Modal/Contact";

function Footer() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <footer>
      <p>Copyright @ 2023 Team VOGUE MERRY Tous droits réservés.</p>
      <button
        type="button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        contact us
      </button>
      {openModal && <Contact closeModal={setOpenModal} />}
    </footer>
  );
}
export default Footer;
