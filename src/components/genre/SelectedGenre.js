import "./category.css"
import closeIcon from "../../images/closeIcon.png"

export default function SelectedGenre(){
    return(
        <>
        <div className="SelectedGenre_container">
            <div className="genreBtn">Romance <img src={closeIcon} alt="closeIcon" className="closeIcon"></img></div>
            <div className="genreBtn">Music <img src={closeIcon} alt="closeIcon" className="closeIcon"></img></div>
            <div className="genreBtn">Action <img src={closeIcon} alt="closeIcon" className="closeIcon"></img></div>
        </div>
        </>
    )
}