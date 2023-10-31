import { useEffect, useState } from "react";
import dummyImg from "../../images/dummyImg.png";
import "./list.css";

export default function GetList() {
  const genres = JSON.parse(localStorage.getItem("genres"));

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2ef1d30f45msh6b439ca06c2e7fep11c37cjsn11b70d669752",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    genres.forEach((genre) => {
      async function fetchMovies() {
        await fetch(
          `https://moviesdatabase.p.rapidapi.com/titles?genre=${genre.name}`,
          options
        )
          .then((res) => res.json())
          .then((data) => console.log(setMovies(data.results.splice(4, 4))))
          .catch((err) => console.log(err));
      }
      fetchMovies();
    });
  }, [genres]);

  return (
    <>
      <div className="list_wrapper">
        <div className="genre_list">
          {genres.map((genre) => (
            <p>{genre.name}</p>
          ))}
          {movies.map((movie) => {
            return [
              <div className="movieImg_wrapper">
                <img src={movie.results.primaryImage.url} alt="movieImg" className="movieImg" />
                <img src={dummyImg} alt="movieImg" className="movieImg" />
                <img src={dummyImg} alt="movieImg" className="movieImg" />
                <img src={dummyImg} alt="movieImg" className="movieImg" />
              </div>,
            ];
          })}
        </div>
      </div>
    </>
  );
}
