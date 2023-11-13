import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import searchIcon from "../assets/search.svg";
import Card from "./Card";
import loadingIcon from "../assets/loading.svg";
import CardModal from "./Modal/CardModal";

function OngletElixir() {
  const [elixir, setElixir] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [difficulty, setDifficulty] = useState(null);
  const [openCard, setOpenCard] = useState(false);
  const [btnIndex, setBtnIndex] = useState();
  const [pageActuel, setPageActuel] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [clicked, setClicked] = useState(1);

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setOpenCard(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleClick = (number) => {
    setClicked(number);
  };

  const ref = useRef(null);

  const scrollToElement = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  function findButtonIndex(objet) {
    return objet.id === btnIndex;
  }

  function handleDifficulty(value, isActive) {
    setDifficulty(value);
    setSearchValue("");
    setSearchActive(!isActive);
    setPageActuel(0);
  }

  useEffect(() => {
    let API = [
      "https://api.potterdb.com/v1/potions",
      "https://api.potterdb.com/v1/potions?page[number]=2",
    ];
    if (difficulty) {
      API = `https://api.potterdb.com/v1/potions?filter[difficulty_not_null]=true&filter[ingredients_not_null]=true&filter[difficulty_cont_any]=${difficulty}`;
      axios.get(API).then((response) => {
        setElixir(response.data.data);
      });
    } else {
      axios.all(API.map((endpoint) => axios.get(endpoint))).then((response) => {
        setElixir([...response[0].data.data, ...response[1].data.data]);
      });
    }
  }, [difficulty]);

  const boutonStyle =
    "bg-purple-heart-500 px-24 max-xl:px-12 text-center rounded-lg hover:bg-purple-heart-800 py-1 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] transition font-montserrat disabled:bg-purple-heart-800";

  /* condition pour attendre les infos de l'API car sinon on ne peut pas boucler avec le .map plus bas */
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

  function handlePageNext(slice) {
    if (!(slice + 36 > 156)) {
      setPageActuel(pageActuel + 36);
    }
  }

  function handlePagePrevious(slice) {
    if (!(slice - 36 < 0)) {
      setPageActuel(pageActuel - 36);
    }
  }

  return (
    <div
      ref={ref}
      className="onglet-elixir pt-6 max-w-7xl flex flex-col m-auto font-montserrat mb-16"
    >
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
          onChange={(event) => {
            setSearchValue(event.target.value.toLowerCase());
            setSearchActive(!!event.target.value);
            setPageActuel(0);
            setDifficulty(null);
            setClicked(0);
          }}
          className="rounded-xl shadow-xl input-searchbar transition p-1 border-4 border-white"
        />
      </div>
      <div className="filtre-elixir flex justify-center gap-10 max-sm:gap-2 text-white p-6 font-bold max-sm:flex-col mb-10">
        <button
          type="button"
          onClick={() => {
            handleDifficulty(null, true);
            handleClick(1);
          }}
          disabled={clicked === 1 && true}
          className={boutonStyle}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => {
            handleDifficulty("beginner", false);
            handleClick(2);
          }}
          disabled={clicked === 2 && true}
          className={boutonStyle}
        >
          Easy
        </button>
        <button
          type="button"
          onClick={() => {
            handleDifficulty("moderate,advanced", false);
            handleClick(3);
          }}
          disabled={clicked === 3 && true}
          className={boutonStyle}
        >
          Medium
        </button>
        <button
          type="button"
          onClick={() => {
            handleDifficulty("wizard", false);
            handleClick(4);
          }}
          disabled={clicked === 4 && true}
          className={boutonStyle}
        >
          Hard
        </button>
      </div>
      <motion.div className="liste-elixir flex flex-wrap gap-10 max-sm:gap-2 justify-center ">
        <LayoutGroup>
          <AnimatePresence>
            {elixir
              .filter((element) =>
                element.attributes.name.toLowerCase().includes(searchValue)
              )
              .slice(pageActuel, pageActuel + 36)
              .map((element) => (
                <button
                  key={element.id}
                  type="button"
                  onClick={() => {
                    setOpenCard(true);
                    setBtnIndex(element.id);
                  }}
                >
                  {}
                  <Card
                    key={element.id}
                    name={element.attributes.name}
                    image={element.attributes.image}
                    effect={element.attributes.effect}
                    ingredients={element.attributes.ingredients}
                  />
                </button>
              ))}
          </AnimatePresence>
        </LayoutGroup>
        {openCard && (
          <div className="blur-background flex items-center justify-center">
            <CardModal
              key={elixir[elixir.findIndex(findButtonIndex)].id}
              name={elixir[elixir.findIndex(findButtonIndex)].attributes.name}
              image={elixir[elixir.findIndex(findButtonIndex)].attributes.image}
              effect={
                elixir[elixir.findIndex(findButtonIndex)].attributes.effect
              }
              ingredients={
                elixir[elixir.findIndex(findButtonIndex)].attributes.ingredients
              }
              closeModal={setOpenCard}
            />
          </div>
        )}
      </motion.div>
      <div className="flex justify-center gap-4 mt-6 mb-10 text-white">
        <button
          type="button"
          onClick={() => {
            handlePagePrevious(pageActuel);
            scrollToElement();
          }}
          disabled={pageActuel - 36 < 0 || searchActive}
          className="btnNextElixir box-border shadow-md shadow-gray-500 py-1 w-32 rounded-lg bg-purple-heart-500 transition hover:bg-purple-heart-800 disabled:bg-purple-100 disabled:text-gray-400 disabled:shadow-none"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={() => {
            handlePageNext(pageActuel);
            scrollToElement();
          }}
          disabled={pageActuel + 36 > 156 || searchActive}
          className="btnNextElixir box-border shadow-md shadow-gray-500 py-1 w-32 rounded-lg bg-purple-heart-500 transition hover:bg-purple-heart-800 disabled:bg-purple-100 disabled:text-gray-400 disabled:shadow-none"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OngletElixir;
