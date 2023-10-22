import actionImg from "../../images/action.png"
import "./category.css"

export default function Card() {
  return (
    <>
      <div className="card_wrapper">
        <p>Action</p>
        <img src={actionImg} alt="action"></img>
      </div>
    </>
  );
}
