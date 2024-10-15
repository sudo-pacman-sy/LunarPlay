import { Castheading } from "./Headings";

function InfoCast(props) {
  const castMembers = props.cast.map((cast) => ({
    profileImage: cast.profilePath
      ? `https://image.tmdb.org/t/p/w200${cast.profilePath}`
      : "../src/assets/emptyprofile.jpg",
    name: cast.name,
    character: cast.character,
  }));

  return (
    <>
      <div className="">
        <Castheading />
        <div className="">
          {castMembers.length > 0 ? (
            <div className="max-h-[150px] max-w-[900px] flex gap-4 border-4 border-gray-600 overflow-x-auto p-6 rounded-xl scrollbar-thin scrollbar-thumb-gray-400">
              {castMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 min-h-[88px] min-w-64 py-2 pl-2 border-2 rounded-xl"
                >
                  <img
                    src={member.profileImage}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-lg line-clamp-2 text-white">
                      {member.name}
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      as {member.character}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-center py-4">
              No cast information available.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default InfoCast;
