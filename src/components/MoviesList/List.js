import { useEffect, useState } from "react";
import "./list.css";

export default function GetList({ genre }) {
  const [movies, setMovies] = useState([]);

  let img_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchMovies() {
      await fetch(`
        https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&with_genres=${genre}&api_key=34a049d3fb8f5b726b30b0eaca49c7db`)
        .then((res) => res.json())
        .then((data) => setMovies(data.results.splice(0, 4)))
        .catch((err) => console.log(err));
    }
    fetchMovies();
  }, [genre]);

  return (
    <>
      <div className="list_wrapper">
        <div className="genre_list">
          <p>{genre.name}</p>
          <div className="movieImg_wrapper">
            {movies.map((movie, index) => {
              return (
                <div key={index}>
                  <img
                    src={`${img_url}${movie.poster_path}`}
                    alt="movieImg"
                    className="movieImg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
