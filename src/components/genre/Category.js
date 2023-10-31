import SelectedGenre from "./SelectedGenre";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import "./category.css";
import actionImg from "../../images/action.png";
import dramaImg from "../../images/drama.png";
import fantacyImg from "../../images/fantacy.png";
import fictionImg from "../../images/fiction.png";
import horrorImg from "../../images/horror.png";
import musicImg from "../../images/music.png";
import thrillerImg from "../../images/thriller.png";
import romanceImg from "../../images/romance.png";
import westernImg from "../../images/western.png";
import dangerImg from "../../images/danger.png";

export default function Category() {
  let genreArr = [
    {
      name: "Action",
      bgColor: "#FF5209",
      bgImg: actionImg,
    },
    {
      name: "Drama",
      bgColor: "#D7A4FF",
      bgImg: dramaImg,
    },
    {
      name: "Romance",
      bgColor: "#148A08",
      bgImg: romanceImg,
    },
    {
      name: "Thriller",
      bgColor: "#84C2FF",
      bgImg: thrillerImg,
    },
    {
      name: "Western",
      bgColor: "#902500",
      bgImg: westernImg,
    },
    {
      name: "Horror",
      bgColor: "#7358FF",
      bgImg: horrorImg,
    },
    {
      name: "Fantasy",
      bgColor: "#FF4ADE",
      bgImg: fantacyImg,
    },
    {
      name: "Music",
      bgColor: "#E61E32",
      bgImg: musicImg,
    },
    {
      name: "Fiction",
      bgColor: "#6CD061",
      bgImg: fictionImg,
    },
  ];
  const navigate = useNavigate()
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  function handleSubmit() {
    if (categories.length < 3) {
      setError(true);
    } else{
      setError(false);
      localStorage.setItem("genres", JSON.stringify([...categories]));
      navigate('/Browse')
    }
  }

  return (
    <>
      <div className="genre_container">
        <div className="left_genre">
          <h2 className="title">Super app</h2>
          <div className="genre_selection_heading">
            <p>Choose your</p>
            <p>entertainment</p>
            <p>category</p>
          </div>
          <SelectedGenre
            categories={categories}
            setCategories={setCategories}
          />
          {categories.length < 3 &&
            (error ? (
              <p className="error">
                <img src={dangerImg} alt="dangerImg" className="dangerImg" />
                Please select minimum 3 categories !!
              </p>
            ) : (
              ""
            ))}
        </div>
        <div className="right_genre">
          <div className="card_container">
            {genreArr.map((data, index) => (
              <Card
                data={data}
                key={index}
                categories={categories}
                setCategories={setCategories}
              />
            ))}
          </div>
          <button className="nextBtn" onClick={handleSubmit}>
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}
