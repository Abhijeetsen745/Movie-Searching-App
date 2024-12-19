import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import MovieCard from "./Components/MovieCard";

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`
      );
      const data = await res.json();
      // console.log(data.Search);

      setAllMovieData(data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg">
        <SearchBar
          searchMovie={searchMovie}
          fetchMovieData={fetchMovieData}
          setSearchMovie={setSearchMovie}
        />
        <MovieCard loading={loading} allMovieData={allMovieData} />
      </div>
    </>
  );
}

export default App;
