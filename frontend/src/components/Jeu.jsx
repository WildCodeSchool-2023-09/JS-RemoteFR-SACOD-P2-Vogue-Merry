import axios from "axios";
import { useState, useEffect } from "react";
import PV from "../assets/f7dfdf45.png";
import Ingredients from "./Ingredients";
import "../App.scss";


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

  const ingredientsPotion = potions[0]?.attributes.ingredients.split(",");
  const random = Math.ceil(Math.random() * potions.length);

  let wrongIngredients = [];

  for (let i = random; i < potions.length; i += 1) {
    const arr = potions[i]?.attributes.ingredients.split(",");
    wrongIngredients = wrongIngredients?.concat(arr);
  }

  const allIngredients = ingredientsPotion?.concat(
    wrongIngredients.slice(0, 10 - ingredientsPotion.length)
  );
  allIngredients?.sort();
  const [animation, setAnimation] = useState("bg");

  return (
    <div id={animation} className="h-screen w-full flex justify:center ">
      <div
        className="  h-full w-full flex flex-col items-center p-3 justify-around max-sm:justify-normal
      "
      >
        <div className=" shadow-white-100 shadow-2xl bg-purple-heart-300 rounded-2xl  w-64 flex justify-center max-sm:w-22 max-sm:h-4">
          <h2 className="text-black text-center  text-xl font-irish max-sm:text-xs  ">
            You must make this potion
          </h2>
        </div>
        <div
          className="flex justify-between w-5/6 p-3 max-sm:w-full max-sm:h-48 items-center
  
        "
        >
          <div
            className="bg-[url('./assets/parch.png')] bg-no-repeat h-96 w-80 p-10 flex flex-col  items-center gap-4
          max-sm:w-2/6 max-sm:h-28 max-sm:bg-cover max-sm:p-0  max-sm:gap-0 "
          >
            <img
              src={potions[0]?.attributes.image}
              alt="potion"
              className="w-10 h-10 mt-8 max-sm:w-6 max-sm:h-6 max-sm:mt-4"
            />
            <span
              className="w-26 text-white text-center font-irish flex flex-col
            max-sm:w-18 max-sm:text-xs 
            "
            >
              <p>{potions[0]?.attributes.name}</p>
              <p>{potions[0]?.attributes.characteristics}</p>
              <p>{potions[0]?.attributes.effect} </p>
            </span>
          </div>
          <div
            className="text-white h-48 w-72 p-10 rounded-2xl bg-purple-heart-500 flex flex-col  gap-10 justify-center
          max-sm:w-28 max-sm:h-16 max-sm:p-0 max-sm:gap-0 align-middle"
          >
            <div className="flex flex-row justify-around max-sm:justify-center">
              <h3 className="self-center font-irish">PV</h3>
              <img
                src={PV}
                alt="PV"
                className="w-15 h-12 max-sm:w-6 max-sm:h-6  max-sm:text-xs"
              />
              <img
                src={PV}
                alt="PV"
                className="w-15 h-12 max-sm:w-6 max-sm:h-6  max-sm:text-xs"
              />
              <img
                src={PV}
                alt="PV"
                className="w-15 h-12 max-sm:w-6 max-sm:h-6  max-sm:text-xs"
              />
            </div>
            <div className="flex flex-row justify-around max-sm:justify-center">
              <h3 className="font-irish">Score </h3>
              <h4 className="font-irish">.../100</h4>
            </div>
          </div>
        </div>
        <div className=" flex flex-wrap justify-center pt-6 ">
          {allIngredients?.map((ingredient) => (
            <div
              key={ingredient}
              className="flex  bg-purple-heart-500 w-56 h-10 rounded m-2 max-sm:w-42"
            >
              <Ingredients
                ingredient={ingredient}
                ingredientsPotion={ingredientsPotion}
                setAnimation={setAnimation}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Jeu;
