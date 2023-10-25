import "./category.css";
import closeIcon from "../../images/closeIcon.png";

export default function SelectedGenre({ categories, setCategories }) {
  return (
    <>
      <div className="SelectedGenre_container">
        {categories.map((item) => (
        <div className="genreBtn">
            {item.name}
            <img src={closeIcon} alt="closeIcon" className="closeIcon"></img>
          </div>
        ))}
      </div>
    </>
  );
}
