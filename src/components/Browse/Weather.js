import weatherImg from "../../images/weather.png";
import humidityImg from "../../images/humidity.png";
import tempImg from "../../images/temp.png";
import windImg from "../../images/wind.png";

export default function Weather() {
  return (
    <>
      <div className="weather_container">
        <div className="dateTime_wrapper">
          <p>2-20-2023</p>
          <p>0.7:35 PM</p>
        </div>
        <div className="weather_wrapper">
          <div className="weather">
            <img src={weatherImg} alt="waetherImg" className="weatherImg" />
            <p>Heavy Rain</p>
          </div>
          <div className="temp_press">
            <h2>24°C</h2>
            <div className="press_wrapper">
              <img src={tempImg} alt="tempImg" />
              <div>
                <p>1010 mbar</p>
                <p>Pressure</p>
              </div>
            </div>
          </div>
          <div className="wind_humidity_wrapper">
            <div className="wind_wrapper">
              <img src={windImg} alt="windImg" />
              <div>
                <p>3.7 km/h</p>
                <p>Wind</p>
              </div>
            </div>
            <div className="humidity_wrapper">
              <img src={humidityImg} alt="humidity" />
              <div>
                <p>83%</p>
                <p>Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
