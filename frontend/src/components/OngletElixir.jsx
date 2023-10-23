import searchIcon from "../assets/search.svg";

function OngletElixir() {
  return (
    <div className="onglet-elixir pt-6 max-w-7xl flex flex-col m-auto">
      <div className="barre-de-recherche-elixir flex items-center justify-center gap-8">
        <img
          src={searchIcon}
          alt="search icon"
          className="w-10 drop-shadow-md"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="  Chercher un elixir"
          className="rounded-xl shadow-xl input-searchbar transition p-1"
        />
      </div>
      <div className="filtre-elixir flex justify-center gap-10 max-sm:gap-2 text-white p-6 font-bold max-sm:flex-col mb-10">
        <p className="bg-purple-heart-500 px-24 text-center rounded-lg hover:bg-purple-heart-800 py-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition">
          Tous
        </p>
        <p className="bg-purple-heart-500 px-24 text-center rounded-lg hover:bg-purple-heart-800 py-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition">
          Facile
        </p>
        <p className="bg-purple-heart-500 px-24 text-center rounded-lg hover:bg-purple-heart-800 py-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition">
          Moyen
        </p>
        <p className="bg-purple-heart-500 px-24 text-center rounded-lg hover:bg-purple-heart-800 py-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition">
          Difficile
        </p>
      </div>
      <div className="container-elixir bg-purple-800 flex flex-col items-center w-96 text-white">
        <h1 className="text-xl">Exemple elixir qui sera remplacer</h1>
        <div className="description-elixir">
          <p>Ici l'image</p>
          <p>Effect:</p>
          <p>Aged drinker temporarily</p>
          <p>Ingedients</p>
          <p>Newt spleens, Bananas, An orange snake, A green leaf</p>
        </div>
      </div>
    </div>
  );
}

export default OngletElixir;
