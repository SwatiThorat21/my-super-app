import "./category.css";
import closeIcon from "../../images/closeIcon.png";

export default function SelectedGenre({ categories, setCategories }) {
  
  function handleClose(name) {
    setCategories(categories.filter((item) => item.name !== name));
   }

  return (
    <>
      <div className="SelectedGenre_container">
        {categories.map((item) => (
          <div className="genreBtn" key={item.name}>
            {item.name}
            <img
              src={closeIcon}
              alt="closeIcon"
              className="closeIcon"
              onClick={()=>handleClose(item.name)}
            ></img>
          </div>
        ))}
      </div>
    </>
  );
}
