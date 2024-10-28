function Trending() {
  return (
    <div className="-pt-5 px-3 text-4xl">
      <p className="font-outfit pb-2 bg-gradient-to-r from-yellow-400 to-pink-600 inline-block text-transparent bg-clip-text">
        What&apos;s Trending?
      </p>
    </div>
  );
}

function Action() {
  return (
    <div className="pt-6 px-3 text-4xl">
      <span className="font-outfit text-red-500">Action</span>
    </div>
  );
}

function Thriller() {
  return (
    <div className="pt-6 px-3 text-4xl">
      <span className="font-outfit text-blue-500">Thriller & Suspense</span>
    </div>
  );
}

function Comedy() {
  return (
    <div className="pt-6 px-3 text-4xl">
      <span className="font-outfit text-[#03C988]">Comedy</span>
    </div>
  );
}

function TopRated() {
  return (
    <div className="pt-6 px-3 text-4xl">
      <span className="font-outfit text-[#FFD700]">Top Rated</span>
    </div>
  );
}

function Trailer() {
  return (
    <div className="w-screen py-2 lg:-ml-2 pl-2 pb-3 text-3xl">
      <span className="font-outfit text-[#E8B86D]">Trailer</span>
    </div>
  );
}

function Castheading() {
  return (
    <div className="w-screen pb-3 lg:-ml-2 pl-2 text-3xl">
      <span className="font-outfit text-[#E8B86D]">Casts</span>
    </div>
  );
}

function Similarmovies() {
  return (
    <div className="w-screen p-4 pt-8 pb-2 text-3xl">
      <span className="font-outfit text-[#E8B86D]">Similar Movies</span>
    </div>
  );
}

export {
  Trending,
  Action,
  Thriller,
  Comedy,
  TopRated,
  Trailer,
  Castheading,
  Similarmovies,
};
