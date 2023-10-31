import profileImg from "../../images/profileImg.png";
import "./browse.css";

export default function ShowProfile() {
  let userInfo = JSON.parse(localStorage.getItem("formdata"));
  let genre = JSON.parse(localStorage.getItem("genre"));
  return (
    <>
      <div className="profile_container">
        <img src={profileImg} alt="profile img" className="profileIMg" />
        <div className="profile_details_wrapper">
          <p>{userInfo.name}</p>
          <p>{userInfo.email}</p>
          <h2>{userInfo.userName}</h2>
          <div
            className={`selectedGenre_wrapper ${
              genre.length > 4 ? "display_scroll" : ""
            }`}
          >
            {genre.map((item) => {
              return (
                <div className="genre_browse_btn" key={item.name}>
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
