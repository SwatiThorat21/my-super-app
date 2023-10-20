import bgImg from "../images/bgImg.png";
import "../App.css"

export default function Banner(){
    return(
        <>
         <div className="bg_img_wrapper">
          <img src={bgImg} alt="background_image" className="bgImg"></img>
          <div className="bg_text_wrapper">
            <p>Discover new things on</p>
            <p>Superapp</p>
          </div>
        </div>
        </>
    )
}