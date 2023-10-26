import { Route, Routes } from "react-router-dom";
import OngletElixir from "./components/OngletElixir";
import Accueil from "./components/Accueil";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/elixir" element={<OngletElixir />} />
    </Routes>
  );
}
export default App;
