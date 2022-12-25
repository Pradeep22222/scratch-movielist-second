import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from "./components/SearchForm";
import { MovieCard } from "./components/MovieCard";
import { MovieArea } from "./components/MovieArea";
import { useState } from "react";
import { getMovie } from "./helpers/axiosHelpers";
import { Alert } from "react-bootstrap";
function App() {
  const [movieList, setMovieList] = useState([]);
  const [movie, setMovie] = useState({});
  const handleOnSubmit = async (movieName) => {
    const data = await getMovie(movieName);
    setMovie(data);
  };
  const handleOnMovieAdd = (movie, movieType) => {
    setMovieList([...movieList, { ...movie, type: movieType }]);
  };
  console.log(movieList);
  return (
    <div className="app">
      <h1 className="text-center p-5">Movie List</h1>
      <SearchForm handleOnSubmit={handleOnSubmit}></SearchForm>
      <div className="d-flex justify-content-center mt-5">
        {(movie.imdbID && (
          <MovieCard
            movie={movie}
            handleOnMovieAdd={handleOnMovieAdd}
          ></MovieCard>
        )) ||
          (movie.Response === "False" && (
            <Alert variant="danger">{movie.Error}</Alert>
          ))}
      </div>
      <hr />
      <div className="d-flex justify-content-around">
        <MovieArea movieList={movieList}></MovieArea>
      </div>
    </div>
  );
}

export default App;
