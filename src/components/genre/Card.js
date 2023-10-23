import actionImg from "../../images/action.png"
import "./category.css"

export default function Card({data, index, category, setCategory}) {
  function selectCategory(){
    
  }
  return (
    <>
      <div className="card_wrapper">
        <p>Action</p>
        <img src={actionImg} alt="action" className="cardImg"></img>
      </div>
    </>
  );
}
