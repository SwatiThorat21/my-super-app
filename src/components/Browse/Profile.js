import profileImg from "../../images/profileImg.png";
import "./browse.css"

export default function showProfile() {
  return (
    <>
      <div className="profile_container">
        <img src={profileImg} alt="profile img" className="profileIMg"/>
        <div className="profile_details_wrapper">
          <p>KK Vinay</p>
          <p>Vinay090@gmail.com</p>
          <h2>vinay060</h2>
          <div className="selectedGenre_wrapper">
            <div className="genre_browse_btn">Home</div>
            <div className="genre_browse_btn">Home</div>
            <div className="genre_browse_btn">Home</div>
            <div className="genre_browse_btn">Home</div>
            <div className="genre_browse_btn">Home</div>
            <div className="genre_browse_btn">Home</div>

          </div>
        </div>
      </div>
    </>
  );
}
