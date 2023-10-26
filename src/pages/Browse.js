import Profile from "../components/Browse/Profile";
import Notes from "../components/Browse/Notes";
import Weather from "../components/Browse/Weather";
import Timer from "../components/Browse/Timer";
import News from "../components/Browse/News";

export default function Browse() {
  return (
    <>
    <div className="browse_container">
      <div className="left_grid_wrapper">
        <Profile />
        <Notes />
        <Weather />
        <Timer />
      </div>
      <News />
      <button className="browseBtn">Browse</button>
    </div>
    </>
  );
}