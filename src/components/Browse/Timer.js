import incrementImg from "../../images/increment.png";
import decrementImg from "../../images/decrement.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState, useEffect } from "react";
import timerSound from "../../audio/countdown.wav";

export default function ShowTimer() {
  const [hour, setHour] = useState("00");
  const [min, setMin] = useState("00");
  const [sec, setSec] = useState("00");
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio(timerSound));

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [playing, audio]);

  function increaseHour() {
    setHour((hours) => (parseInt(hours, 10) + 1).toString().padStart(2, "0"));
  }
  function increaseMin() {
    if (min === "59") return;
    setMin((mins) => (parseInt(mins, 10) + 1).toString().padStart(2, "0"));
  }
  function increaseSec() {
    if (sec === "59") return;
    setSec((secs) => (parseInt(secs, 10) + 1).toString().padStart(2, "0"));
  }
  function decreaseHour() {
    if (hour <= "00") return;
    setHour((hours) => (parseInt(hours, 10) - 1).toString().padStart(2, "0"));
  }
  function decreaseMin() {
    if (min <= "00") return;
    setMin((mins) => (parseInt(mins, 10) - 1).toString().padStart(2, "0"));
  }
  function decraeseSec() {
    if (sec <= "00") return;
    setSec((secs) => (parseInt(secs, 10) - 1).toString().padStart(2, "0"));
  }
  function toHoursMin(totalSecs) {
    const totalMins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const hour = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    return `${hour} : ${mins} : ${secs}`;
  }
  function handlePlaying() {
    if (hour !== "00" || min !== "00" || sec !== "00") {
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  }
  function handleStop() {
    setHour("00");
    setMin("00");
    setSec("00");
    setPlaying(false);
  }

  return (
    <>
      <div className="timer_container">
        <div className="timer">
          <CountdownCircleTimer
            isPlaying={playing}
            duration={
              parseInt(sec) + parseInt(min) * 60 + parseInt(hour) * 60 * 60
            }
            colors={["#FF6A6A", "#FF6A6A"]}
            size={140}
            trailColor="#191E39"
            strokeWidth={8}
            trailStrokeWidth={18}
          >
            {({ remainingTime }) => toHoursMin(remainingTime)}
          </CountdownCircleTimer>
          <div className="manual_timer_wrapper">
            <div className="timer_text_wrapper">
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
            <div className="increment_wrapper">
              <img
                src={incrementImg}
                alt="incrementImg"
                style={{ cursor: "pointer" }}
                onClick={increaseHour}
              />
              <img
                src={incrementImg}
                alt="incrementImg"
                style={{ cursor: "pointer" }}
                onClick={increaseMin}
              />
              <img
                src={incrementImg}
                alt="incrementImg"
                style={{ cursor: "pointer" }}
                onClick={increaseSec}
              />
            </div>
            <div className="time_wrapper">
              <p>{hour}</p>
              <p>:</p>
              <p>{min}</p>
              <p>:</p>
              <p>{sec}</p>
            </div>
            <div className="decrement_wrapper">
              <img
                src={decrementImg}
                alt="decrementImg"
                style={{ cursor: "pointer" }}
                onClick={decreaseHour}
              />
              <img
                src={decrementImg}
                alt="decrementImg"
                style={{ cursor: "pointer" }}
                onClick={decreaseMin}
              />
              <img
                src={decrementImg}
                alt="decrementImg"
                style={{ cursor: "pointer" }}
                onClick={decraeseSec}
              />
            </div>
            {playing ? (
              <button className="startTimer_btn" onClick={handleStop}>
              Stop
            </button>
            ) : (
              <button className="startTimer_btn" onClick={handlePlaying}>
              Start
            </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
