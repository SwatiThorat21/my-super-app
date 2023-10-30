import { useState, useEffect } from "react";

export default function ShowNews() {
  const [news, setNews] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    async function fetchNews() {
      await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-09-30&sortBy=publishedAt&apiKey=b06a318c9f8e4d97899ae0796931a130"
      )
        .then((response) => response.json())
        .then((data) => setNews(data.articles[0]))
        .catch((error) => console.error(error));
    }
    fetchNews();
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
      {news ? <div className="news_container">
        <img src={news.urlToImage} alt="news" className="newsImg" />
        <div className="news_heading">
          <h2>{news.title}</h2>
          <div className="date_time_news_wrapper">
            <p className="news_date">{date}</p>
            <p>{time}</p>
          </div>
        </div>
        <p className="news_para">{news.description}</p>
      </div> : <p>Loading news...</p>}
    </>
  );
}
