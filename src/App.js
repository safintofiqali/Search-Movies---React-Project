import { useState, useEffect } from "react";
import MovieCard from "./moviecard";
// 9a92abaa
const API_URL = "http://www.omdbapi.com/?apikey=9a92abaa";
const App = () => {
  // Use Effect Function
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  // Use State Function
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // Self Defined Functions
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  // Return the elements
  return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          type="search"
          placeholder="Search for movies"
          onChange={(e) => {
            // setSearchTerm(e.target.value);
            searchMovies(e.target.value);
          }}
        />

        <p
          onClick={() => {
            searchMovies(searchTerm);
          }}
        >
          Search
        </p>
      </div>

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })
        ) : (
          <h2>Movie Not Found</h2>
        )}
      </div>
    </div>
  );
};

export default App;
