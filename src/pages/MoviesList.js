import List from "../components/MoviesList/List";
import profileImg from "../images/pp.png";
import "../components/MoviesList/list.css";

export default function GetMoviesList() {
  return (
    <>
      <div className="list_container">
        <div className="heading_wrapper">
          <h2>Super app</h2>
          <img src={profileImg} alt="profile" />
        </div>
        <div className="genre_wrapper">
          <h2>Entertainment according to your choice</h2>
          <List />
        </div>
      </div>
    </>
  );
}
