import "./App.scss";
/* import { useState } from "react"; */
import NavBar from "./components/NavBar";
import Music from "./components/Music";

function App() {
  /* const [isPlaying, setIsPlaying] = useState(false); */
  return (
    <div>
      <NavBar />
      <Music />
    </div>
  );
}

export default App;
