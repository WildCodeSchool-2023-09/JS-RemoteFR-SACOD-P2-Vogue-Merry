function OngletElixir() {
  return (
    <div className="onglet-elixir pt-6 max-w-7xl flex flex-col m-auto">
      <div className="barre-de-recherche-elixir">
        <input type="text" name="" id="" />
      </div>
      <div className="filtre-elixir flex justify-around text-white p-6">
        <p className="bg-purple-heart-500 px-10 rounded-lg hover:bg-purple-heart-800 py-1 shadow-md">
          Tous
        </p>
        <p className="bg-purple-heart-500 px-10 rounded-lg hover:bg-purple-heart-800 py-1 shadow-md">
          Facile
        </p>
        <p className="bg-purple-heart-500 px-10 rounded-lg hover:bg-purple-heart-800 py-1 shadow-lg">
          Moyen
        </p>
        <p className="bg-purple-heart-500 px-10 rounded-lg hover:bg-purple-heart-800 py-1 shadow-lg">
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
