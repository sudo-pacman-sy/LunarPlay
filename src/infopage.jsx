import MovieInfo from "./movieinfo";
import NavBar from "./navbar";

function Infopage() {
  return (
    <div className="bg-[#111111] h-full">
      <NavBar />
      <MovieInfo />
    </div>
  );
}

export default Infopage;
