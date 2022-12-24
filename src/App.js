import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchForm } from "./components/SearchForm";
import { MovieCard } from "./components/MovieCard";
import { MovieArea } from "./components/MovieArea";
import { useState } from "react";
import { getMovie } from "./helpers/axiosHelpers";
function App() {
  const [movie, setMovie] = useState({});
  const handleOnSubmit = async (movieName) => {
    const data = await getMovie(movieName);
    console.log(data);
  };

  return (
    <div>
      <SearchForm handleOnSubmit={handleOnSubmit}></SearchForm>
      <div className="d-flex justify-content-center mt-5">
        <MovieCard></MovieCard>
      </div>
      <hr />
      <div className="d-flex justify-content-around">
        <MovieArea></MovieArea>
      </div>
    </div>
  );
}

export default App;
