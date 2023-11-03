import Trophy from "../components/Trophy";

function Leaderboard() {
  return (
    <div className="p-4 flex justify-center">
      <div className="grid grid-cols-3 text-center h-52 items-end justify-center flex-grow max-w-2xl">
        <div className="h-full flex flex-col justify-end">
          <p>Pseudo1</p>
          <Trophy color="#D6D6D6" />
          <div className="bg-purple-heart-500 h-2/6"> </div>
        </div>
        <div className="h-full flex flex-col justify-end">
          <p>Pseudo1</p>
          <Trophy color="#E7C04B" />
          <div className="bg-purple-heart-800 h-3/6"> </div>
        </div>
        <div className="h-full flex flex-col justify-end">
          <p>Pseudo1</p>
          <Trophy color="#AC7A35" />
          <div className="bg-purple-heart-400 h-1/6"> </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
