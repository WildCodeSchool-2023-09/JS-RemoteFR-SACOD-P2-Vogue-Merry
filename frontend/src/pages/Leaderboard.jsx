import Trophy from "../components/Trophy";
import "./leaderboard.scss";

function Leaderboard() {
  return (
    <>
      <div className="p-4 flex justify-center">
        <div className="grid grid-cols-3 text-center h-52 items-end justify-center flex-grow max-w-2xl">
          <div className="h-full flex flex-col justify-end">
            <p className="font-montserrat">Pseudo1</p>
            <Trophy color="#D6D6D6" />
            <div className="bg-purple-heart-500 h-2/6 text-white font-montserrat">
              {" "}
              7777777
            </div>
          </div>
          <div className="h-full flex flex-col justify-end">
            <p className="font-montserrat">Pseudo1</p>
            <Trophy color="#E7C04B" />
            <div className="bg-purple-heart-800 h-3/6 text-white font-montserrat">
              99999999{" "}
            </div>
          </div>
          <div className="h-full flex flex-col justify-end">
            <p className="font-montserrat">Pseudo1</p>
            <Trophy color="#AC7A35" />
            <div className="bg-purple-heart-400 h-1/6 text-white font-montserrat">
              {" "}
              5555555
            </div>
          </div>
        </div>
      </div>
      <div className="bandeau bg-purple-heart-700 max-w-5xl m-auto p-4 flex justify-center text-white rounded-2xl">
        <h1 className="text-center font-bold font-montserrat text-2xl">
          La suite du Top
        </h1>
      </div>
      <div className="my-4 flex justify-center">
        <div className="reste-leaderboard max-w-sm md:max-w-2xl flex-1 gap-4">
          <div className="w-full bg-black h-16 shadow-xl rounded-l-3xl"> </div>
          <div className="w-full bg-purple-heart-400 h-16 rounded-r-3xl shadow-xl flex items-center pl-4 font-bold text-white font-montserrat">
            999999
          </div>
          <div className="w-full bg-black h-16 shadow-xl rounded-l-3xl"> </div>
          <div className="w-11/12 bg-purple-heart-500 h-16 rounded-r-3xl shadow-xl flex items-center pl-4 font-bold text-white font-montserrat">
            99999
          </div>
          <div className="w-full bg-black h-16 shadow-xl rounded-l-3xl"> </div>
          <div className="w-10/12 bg-purple-heart-400 h-16 rounded-r-3xl shadow-xl flex items-center pl-4 font-bold text-white font-montserrat">
            9999
          </div>
          <div className="w-full bg-black h-16 shadow-xl rounded-l-3xl"> </div>
          <div className="w-7/12 bg-purple-heart-500 h-16 rounded-r-3xl shadow-xl flex items-center pl-4 font-bold text-white font-montserrat">
            7777
          </div>
          <div className="w-full bg-black h-16 shadow-xl rounded-l-3xl"> </div>
          <div className="w-5/12 bg-purple-heart-400 h-16 rounded-r-3xl shadow-xl flex items-center pl-4 font-bold text-white font-montserrat">
            6666
          </div>
          <div className="w-full bg-black h-16 shadow-xl rounded-l-3xl"> </div>
          <div className="w-4/12 bg-purple-heart-500 h-16 rounded-r-3xl shadow-xl flex items-center pl-4 font-bold text-white font-montserrat">
            5555
          </div>
          <div className="w-full bg-black h-16 shadow-xl rounded-l-3xl"> </div>
          <div className="w-2/12 bg-purple-heart-400 h-16 rounded-r-3xl shadow-xl flex items-center pl-4 font-bold text-white font-montserrat">
            4444
          </div>
        </div>
      </div>
    </>
  );
}

export default Leaderboard;
