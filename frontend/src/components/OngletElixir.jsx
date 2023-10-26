import { useEffect, useState } from "react";
import axios from "axios";
import searchIcon from "../assets/search.svg";
import Card from "./Card";
import loadingIcon from "../assets/loading.svg";

function OngletElixir() {
  const [elixir, setElixir] = useState();
  const [searchValue, setSearchValue] = useState("");
  const boutonStyle =
    "bg-purple-heart-500 px-24 text-center rounded-lg hover:bg-purple-heart-800 py-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition font-montserrat";
  const nombreElixir = 32;
  const API = `https://api.potterdb.com/v1/potions?page[size]=${nombreElixir}`;

  useEffect(() => {
    axios.get(API).then((response) => {
      setElixir(response.data.data);
    });
  }, []);

  /* condition pour attendre les infos de l'API car sinon on ne peut pas boucler avec le .map ligne 55 */
  if (!elixir) {
    return (
      <div className="flex justify-center items-center h-screen font-extrabold font-montserrat text-lg">
        <img
          src={loadingIcon}
          className="loading-icon h-16 animate-spin p-4"
          alt="loading icon"
        />
        Chargement en cours
      </div>
    );
  }
  return (
    <div className="onglet-elixir pt-6 max-w-7xl flex flex-col m-auto font-montserrat">
      <div className="barre-de-recherche-elixir flex items-center justify-center gap-8">
        <img
          src={searchIcon}
          alt="search icon"
          className="w-10 drop-shadow-md"
        />
        <input
          type="search"
          placeholder="  Chercher un elixir"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value.toLowerCase())}
          className="rounded-xl shadow-xl input-searchbar transition p-1 border-4 border-white"
        />
      </div>
      <div className="filtre-elixir flex justify-center gap-10 max-sm:gap-2 text-white p-6 font-bold max-sm:flex-col mb-10">
        <p className={boutonStyle}>All</p>
        <p className={boutonStyle}>Easy</p>
        <p className={boutonStyle}>Medium</p>
        <p className={boutonStyle}>Hard</p>
      </div>
      <div className="liste-elixir flex flex-wrap gap-10 justify-center">
        {elixir
          .filter((element) =>
            element.attributes.name.toLowerCase().includes(searchValue)
          )
          .map((element) => (
            <Card
              key={element.id}
              name={element.attributes.name}
              image={element.attributes.image}
              effect={element.attributes.effect}
              ingredients={element.attributes.ingredients}
            />
          ))}
      </div>
    </div>
  );
}

export default OngletElixir;
