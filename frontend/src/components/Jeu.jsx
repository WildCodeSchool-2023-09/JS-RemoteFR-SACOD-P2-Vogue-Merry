import potion from "../assets/potion.svg";
import PV from "../assets/f7dfdf45.png";

function Jeu() {
  return (
    <div className="h-screen w-screen bg-scroll ">
      <div className="bg-[url('./assets/potionclassroom-animation-ok.gif')] bg-cover h-full w-full flex flex-col ">
        <h2 className="text-white text-center p-10">
          Vous devez refaire cette potion
        </h2>
        <div className="flex justify-between ml-10 mr-20">
          <div className="bg-[url('./assets/parch.png')] bg-no-repeat h-96 w-80 p-10 flex flex-col items-center gap-4 ">
            <img src={potion} alt="potion" className="w-10 h-10 mt-8 " />
            <p className="w-26 text-white text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati
            </p>
          </div>
          <div className="text-white h-96 w-80 p-10  flex flex-col  gap-10">
            <div className="flex flex row">
              <h3>PV</h3>
              <img src={PV} alt="PV" className="w-15 h-12" />
              <img src={PV} alt="PV" className="w-15 h-12" />
              <img src={PV} alt="PV" className="w-15 h-12" />
            </div>
            <h3>Score .../100</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jeu;
