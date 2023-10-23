import "./category.css";
import closeIcon from "../../images/closeIcon.png";

export default function SelectedGenre({ category, setCategory }) {
  return (
    <>
      <div className="SelectedGenre_container">
        {category.map((item) => (
          <div className="genreBtn">
            {item.name}
            <img src={closeIcon} alt="closeIcon" className="closeIcon"></img>
          </div>
        ))}
      </div>
    </>
  );
}
