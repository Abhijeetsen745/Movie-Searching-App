import React from "react";

function MovieCard({ loading, allMovieData}) {
  return (
    <div>
      {loading ? (
        <div className="flex justify-center ">
          <img
            className=" w-16 py-20"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      ) : allMovieData === 
      undefined ?  <h2 className="text-xl text-white font-bold text-center">Movie Not Found !! Please Enter valid movie ||</h2>
      : (
        <div className="flex flex-wrap px-4 lg:px-10 ">
          {allMovieData.map((item, index) => {
            return (
              <div key={index} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                  <img
                    className="rounded-lg mb-2 w-full"
                    src={item.Poster}
                    alt=""
                  />
                  <h2 className="text-xl text-white font-bold">{item.Title}</h2>
                  <h2 className="text-lg text-white mb-2">{item.Year}</h2>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MovieCard;
