import timerImg from "../../images/timer.png";
import incrementImg from "../../images/increment.png";
import decrementImg from "../../images/decrement.png";

export default function ShowTimer() {
  return (
    <>
      <div className="timer_container">
        <div className="timer">
          <img src={timerImg} alt="timerImg" className="timerImg" />
          <div className="manual_timer_wrapper">
            <div className="timer_text_wrapper">
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
            <div className="increment_wrapper">
              <img src={incrementImg} alt="incrementImg" />
              <img src={incrementImg} alt="incrementImg" />
              <img src={incrementImg} alt="incrementImg" />
            </div>
            <div className="time_wrapper">
              <p>05</p>
              <p>:</p>
              <p>09</p>
              <p>:</p>
              <p>00</p>
            </div>
            <div className="decrement_wrapper">
              <img src={decrementImg} alt="incrementImg" />
              <img src={decrementImg} alt="incrementImg" />
              <img src={decrementImg} alt="incrementImg" />
            </div>
            <button className="startTimer_btn">Start</button>
          </div>
        </div>
      </div>
    </>
  );
}
