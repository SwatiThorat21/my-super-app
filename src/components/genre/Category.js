import SelectedGenre from "./SelectedGenre";
import Card from "./Card";
import "./category.css";

export default function Category() {
  return (
    <>
      <div className="genre_container">
        <div className="left_genre">
          <h2 className="title">Super app</h2>
          <div className="heading_wrapper">
            <p>Choose your</p>
            <p>entertainment</p>
            <p>category</p>
          </div>
          <SelectedGenre />
        </div>
        <div className="right_genre">
          <div className="card_wrapper">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <button className="nextBtn">Next Page</button>
        </div>
      </div>
    </>
  );
}
