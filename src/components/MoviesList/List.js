import dummyImg from "../../images/dummyImg.png";
import "./list.css";

export default function GetList() {
  return (
    <>
      <div className="list_wrapper">
        <div className="genre_list">
          <p>Action</p>
          <div className="movieImg_wrapper">
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
          </div>
        </div>

        <div className="genre_list">
          <p>Action</p>
          <div className="movieImg_wrapper">
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
          </div>
        </div>
        
        <div className="genre_list">
          <p>Action</p>
          <div className="movieImg_wrapper">
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
            <img src={dummyImg} alt="movieImg" className="movieImg" />
          </div>
        </div>
      </div>
    </>
  );
}
