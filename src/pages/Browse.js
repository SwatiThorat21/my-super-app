import Profile from "../components/Browse/Profile";
import Notes from "../components/Browse/Notes";
import Weather from "../components/Browse/Weather";
import Timer from "../components/Browse/Timer";
import News from "../components/Browse/News";
import "../components/Browse/browse.css";

export default function Browse() {
  return (
    <>
      <div className="browse_container">
        <div className="grid_wrapper">
          <Profile />
          <Notes />
          <Weather />
          <Timer />
          <News />
        </div>
        <button className="browseBtn">Browse</button>
      </div>
    </>
  );
}
