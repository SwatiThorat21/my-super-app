import newsImg from "../../images/news.png";

export default function ShowNews() {
  return (
    <>
      <div className="news_container">
        <img src={newsImg} alt="news" className="newsImg" />
        <div className="news_heading">
          <h2>Want to climb Mount Everest?</h2>
          <div className="date_time_news_wrapper">
            <p className="news_date">2-20-23</p>
            <p>07:35 PM</p>
          </div>
        </div>
        <p className="news_para">
          sit amet consectetur adipisicing elit. Aut omnis magnam eligendi
          laudantium dolorem. Molestiae eveniet enim fugiat ratione vero,
          aliquam error nobis illum architecto reiciendis eum beatae dicta sit
          commodi temporibus! Ipsa, dolor! sit amet 
        </p>
      </div>
    </>
  );
}
