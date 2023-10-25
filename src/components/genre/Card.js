import "./category.css";

export default function Card({ data, categories, setCategories }) {
  function handleCategoryClick() {
    let duplicateCategories = categories.filter(
      (item) => item.name === data.name
    );

    if (duplicateCategories.length > 0) {
      setCategories(categories.filter((item) => item.name !== data.name));
    } else {
      setCategories([...categories, data]);
    }
  }

  return (
    <>
      <div
        className={`card_wrapper ${
          categories.some((item) => item.name === data.name) ? "activeDiv" : ""
        }`}
        onClick={handleCategoryClick}
        style={{ background: data.bgColor }}
      >
        <p>{data.name}</p>
        <img src={data.bgImg} alt="action" className="cardImg"></img>
      </div>
    </>
  );
}
