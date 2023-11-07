import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import PV from "../assets/f7dfdf45.png";
import Ingredients from "./Ingredients";
import "../App.scss";
import ingtransp from "../assets/ingredienttransp.png";
import Chaudron from "./chaudron";

function Jeu() {
  const [potions, setPotions] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.potterdb.com/v1/potions?filter[difficulty_not_null]=true&filter[ingredients_not_null]=true"
      )
      .then((response) => {
        setPotions(response.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const { id } = useParams();

  let pvs;
  let selectedPotions;
  let random;
  if (id === "easy") {
    pvs = [1, 2, 3, 4];
    selectedPotions = potions.filter((potion) =>
      potion?.attributes.difficulty.includes("Beginner")
    );
    random = Math.ceil(Math.random() * selectedPotions.length);
  } else if (id === "medium") {
    pvs = [1, 2, 3];
    const difficulty = ["Advanced", "Modarate"];
    selectedPotions = potions.filter(
      (potion) =>
        difficulty.some((el) => potion?.attributes.difficulty.includes(el)) ===
        true
    );
  } else {
    pvs = [1, 2];
    selectedPotions = potions.filter((potion) =>
      potion?.attributes.difficulty.includes("Wizard")
    );
  }
  const [pV, setPV] = useState(pvs);
  let selectedPotion;
  function getPotion() {
    selectedPotion = selectedPotions[random];
    return selectedPotion;
  }

  const potionSelected = useMemo(
    () => getPotion(selectedPotion),
    selectedPotions
  );

  const ingredientsPotion = potionSelected?.attributes.ingredients.split(",");

  let wrongIngredients = [];
  function getIngredient() {
    for (
      let i = Math.ceil(Math.random() * potions.length);
      i < potions.length;
      i += 1
    ) {
      const arr = potions[i]?.attributes.ingredients.split(",");
      wrongIngredients = wrongIngredients?.concat(arr);
    }
    return wrongIngredients;
  }
  const wrongList = useMemo(
    () => getIngredient(wrongIngredients),
    ingredientsPotion
  );

  const allIngredients = ingredientsPotion?.concat(
    wrongList.slice(0, 10 - ingredientsPotion.length)
  );

  allIngredients?.sort();

  const [imgIngredient, setImgIngredient] = useState(ingtransp);

  const [imgIngredientClass, setImgIngredientClass] = useState("");

  const [bg, setBg] = useState("bgTrue");

  const [score, setScore] = useState(0);
  const ingredientsPotionLength = ingredientsPotion?.length;
  const gainScore = 200 / ingredientsPotionLength;

  return (
    <div id="bg" className="w-full flex justify:center ">
      <div
        className="  h-full w-full flex flex-col items-center p-3 justify-around max-sm:justify-normal
      "
      >
        <div className=" shadow-white-100 shadow-2xl bg-purple-heart-300 rounded-2xl  w-72 justify-center  flex flex-col max-sm:w-22 max-sm:h-8">
          <h2 className="text-black text-center  text-xl font-irish max-sm:text-xs  ">
            You must make this potion
          </h2>
          <p className="font-irish text-center max-sm:text-xs">
            Find {ingredientsPotion?.length} ingredients
          </p>
        </div>
        {pV.length !== 0 ? (
          <>
            <div
              className="flex justify-between w-5/6  p-3 max-sm:w-full max-sm:h-48 items-center
  
        "
            >
              <div
                className="bg-[url('./assets/parch.png')] bg-no-repeat h-72 w-80  flex flex-col  items-center justify-center
          max-sm:w-2/6 max-sm:h-32 max-sm:bg-cover max-sm:p-0  max-sm:gap-0 "
              >
                <img
                  src={potionSelected?.attributes.image}
                  alt="potion"
                  className="w-14 h-12  max-sm:w-6 max-sm:h-6 "
                />
                <span
                  className="w-26 text-white text-center font-irish flex flex-col
            max-sm:w-18 max-sm:text-xs 
            "
                >
                  <p>{potionSelected?.attributes.name}</p>
                  <p>{potionSelected?.attributes.characteristics}</p>
                  <p>{potionSelected?.attributes.effect} </p>
                </span>
              </div>
              <span className={imgIngredientClass}>
                <img src={imgIngredient} alt={imgIngredient} />
              </span>
              <div
                className="text-white h-48 w-72 p-10 rounded-2xl bg-purple-heart-500 flex flex-col  gap-10 justify-center
          max-sm:w-28 max-sm:h-16 max-sm:p-0 max-sm:gap-0 align-middle"
              >
                <div className="flex flex-row justify-around max-sm:justify-center">
                  <h3 className="self-center font-irish">PV</h3>
                  {pV?.map((pv) => (
                    <div key={pv}>
                      <img
                        src={PV}
                        alt="PV"
                        className="w-15 h-12 max-sm:w-6 max-sm:h-6  max-sm:text-xs"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-row justify-around max-sm:justify-center">
                  <h3 className="font-irish">Score </h3>
                  <h4 className="font-irish">{score}/200</h4>
                </div>
              </div>
            </div>
            <span className="w-full h-3/6 ">
              <Chaudron bg={bg} />
            </span>
            <div className=" flex flex-wrap justify-center ">
              {allIngredients?.map((ingredient) => (
                <div
                  key={ingredient}
                  className="flex  bg-purple-heart-500 w-56 h-10 rounded m-2 max-sm:w-42"
                >
                  <Ingredients
                    ingredient={ingredient}
                    ingredientsPotion={ingredientsPotion}
                    setImgIngredient={setImgIngredient}
                    setBg={setBg}
                    setImgIngredientClass={setImgIngredientClass}
                    score={score}
                    setScore={setScore}
                    gainScore={gainScore}
                    setPV={setPV}
                    pV={pV}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <p
            className="text-white font-irish w-5/6 h-3/6 flex justify-center items-center text-7xl
          max-sm:text-xl max-sm:text-black "
          >
            Game Over !!
          </p>
        )}
      </div>
    </div>
  );
}

export default Jeu;
