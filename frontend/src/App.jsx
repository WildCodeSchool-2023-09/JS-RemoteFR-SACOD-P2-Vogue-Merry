import OngletElixir from "./components/OngletElixir";
import logo from "./assets/logo.svg";
import "./App.scss";

function App() {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" className="h-20" />
        <ul>
          <li>Test1</li>
          <li>Test2</li>
          <li>Test3</li>
        </ul>
      </nav>
      <OngletElixir />
    </>
  );
}

export default App;
