import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from "./components/SearchForm";
import { MovieCard } from "./components/MovieCard";
import { MovieArea } from "./components/MovieArea";
import { useState } from "react";
import { getMovie } from "./helpers/axiosHelpers";
import { Alert } from "react-bootstrap";
function App() {
  const [movie, setMovie] = useState({});
  const handleOnSubmit = async (movieName) => {
    const data = await getMovie(movieName);
    setMovie(data);
  };
  console.log(movie);
  return (
    <div>
      <SearchForm handleOnSubmit={handleOnSubmit}></SearchForm>
      <div className="d-flex justify-content-center mt-5">
        {(movie.imdbID && <MovieCard movie={movie}></MovieCard>) ||
          (movie.Response === "False" && <Alert variant="danger">{movie.Error}</Alert>)}
      </div>
      <hr />
      <div className="d-flex justify-content-around">
        <MovieArea></MovieArea>
      </div>
    </div>
  );
}

export default App;
