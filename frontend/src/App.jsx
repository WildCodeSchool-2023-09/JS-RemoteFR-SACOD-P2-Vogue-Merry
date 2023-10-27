import { Route, Routes } from "react-router-dom";
import OngletElixir from "./components/OngletElixir";
import Accueil from "./components/Accueil";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import OngletLevel from "./components/OngletLevel";
import "./App.scss";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/difficulty" element={<OngletLevel />} />
        <Route path="/elixir" element={<OngletElixir />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
