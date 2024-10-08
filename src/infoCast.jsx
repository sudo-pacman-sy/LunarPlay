function InfoCast(props) {
  const cast = props.cast.map((cast, index) => (
    <div key={index} className="flex items-center space-x-4 mb-4 h-full w-full">
      <img
        src={
          cast.profilePath
            ? `https://image.tmdb.org/t/p/w200${cast.profilePath}`
            : "../src/assets/emptyprofile.jpg"
        }
        alt={cast.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-lg">{cast.name}</p>
        <p className="text-sm text-gray-500">as {cast.character}</p>
      </div>
    </div>
  ));
  return (
    <div className=" min-h-full w-full">
      <div>Casts : {cast}</div>
    </div>
  );
}

export default InfoCast;
