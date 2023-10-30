import potion from "../assets/potion.svg";
import PV from "../assets/f7dfdf45.png";

function Jeu() {
  return (
    <div
      className="h-screen w-full flex justify:center bg-[url('./assets/potionclassroom-animation-ok.gif')] bg-cover 
        max-sm:bg-contain max-sm:bg-no-repeat "
    >
      <div
        className="  h-full w-full flex flex-col items-center p-3 
      "
      >
        <p className=" shadow-white-100 shadow-2xl bg-purple-heart-300 rounded-2xl  w-64 flex justify-center max-sm:w-22 max-sm:h-4">
          <h2 className="text-black text-center  text-xl font-irish max-sm:text-xs  ">
            You must make this potion
          </h2>
        </p>
        <div
          className="flex justify-between w-5/6 p-3 max-sm:w-full
  
        "
        >
          <div
            className="bg-[url('./assets/parch.png')] bg-no-repeat h-96 w-80 p-10 flex flex-col  items-center gap-4
          max-sm:w-20 max-sm:h-22 max-sm:bg-contain max-sm:p-0  max-sm:gap-0 "
          >
            <img
              src={potion}
              alt="potion"
              className="w-10 h-10 mt-8 max-sm:w-4 max-sm:h-4 max-sm:mt-0"
            />
            <p
              className="w-26 text-white text-center font-irish
            max-sm:w-18 max-sm:text-xs 
            "
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati
            </p>
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
      </div>
    </div>
  );
}

export default Jeu;
