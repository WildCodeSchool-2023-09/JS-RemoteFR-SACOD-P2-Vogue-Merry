import { Route, Routes } from "react-router-dom";
import OngletElixir from "./components/OngletElixir";
import Accueil from "./components/Accueil";
import NavBar from "./components/NavBar";
import "./App.scss";
import Jeu from "./components/Jeu";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/elixir" element={<OngletElixir />} />
        <Route path="/jeu" element={<Jeu />} />
      </Routes>
    </>
  );
}
export default App;
