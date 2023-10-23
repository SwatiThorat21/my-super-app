import "./category.css";

export default function Card({ data, category, setCategory }) {
  function handleCategoryClick() {
    setCategory([...category, data]);
  }

  return (
    <>
      <div className="card_wrapper" onClick={handleCategoryClick} style={{background:data.bgColor}}>
        <p>{data.name}</p>
        <img src={data.bgImg} alt="action" className="cardImg"></img>
      </div>
    </>
  );
}
