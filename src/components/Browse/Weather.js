import { useState, useEffect } from "react";
import humidityImg from "../../images/humidity.png";
import tempImg from "../../images/temp.png";
import windImg from "../../images/wind.png";

export default function Weather() {
  const [weatherData, setWeatherData] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    async function fetchWeatherData() {
      await fetch(
        "https://api.weatherapi.com/v1/current.json?key=71b9c63fa8d34d79ba9120626232810&q=mumbai&aqi=no"
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.error(error));
    }
    fetchWeatherData();
  }, []);

  useEffect(() => {
    const todaysDate = new Date();
    let year = todaysDate.getFullYear();
    let month = todaysDate.getMonth();
    let date = todaysDate.getDate();

    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;

    const dateFormat = date + "-" + month + "-" + year;
    setDate(dateFormat);
  }, []);

  useEffect(() => {
    const date = new Date();
    let hours = date.getHours();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : "12";
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const timeFormat = hours + ":" + minutes + " " + ampm;
    setTime(timeFormat);
  }, []);

  return (
    <>
      {weatherData ? (
        <div className="weather_container">
          <div className="dateTime_wrapper">
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <div className="weather_wrapper">
            <div className="weather">
              <img
                src={weatherData.current.condition.icon}
                alt="waetherImg"
                className="weatherImg"
              />
              <p>{weatherData.current.condition.text}</p>
            </div>
            <div className="temp_press">
              <h2>{weatherData.current.temp_c}°C</h2>
              <div className="press_wrapper">
                <img src={tempImg} alt="tempImg" />
                <div>
                  <p>{weatherData.current.pressure_mb} mbar</p>
                  <p>Pressure</p>
                </div>
              </div>
            </div>
            <div className="wind_humidity_wrapper">
              <div className="wind_wrapper">
                <img src={windImg} alt="windImg" />
                <div>
                  <p>{weatherData.current.wind_kph} km/h</p>
                  <p>Wind</p>
                </div>
              </div>
              <div className="humidity_wrapper">
                <img src={humidityImg} alt="humidity" />
                <div>
                  <p>{weatherData.current.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </>
  );
}
