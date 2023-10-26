import timerImg from "../../images/timer.png";
// import incrementImg from "../../images/increment.png"
// import decrementImg from "../../decrement.png"

export default function ShowTimer() {
  return (
    <>
    <div className="timer_container">
      <div className="timer">
        <img src={timerImg} alt="timerImg" className="timerImg" />
        <div className="manual_timer_wrapper">
          <p>05:09:00</p>
        </div>
      </div>
      <button>Start</button>
      </div>
    </>
  );
}
