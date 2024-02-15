import API_KEY from "../../utils/apiKey";
import BASE_URL from "../../utils/baseURL";
import IMAGE_URL from "../../utils/urlImage";
import "../TrendingSection/trendingSection.css";
import "../../App.css";
import { useEffect, useState } from "react";
export default function LastestSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log("ERR");
        } else {
          console.log(res);
          // setData(res.results)
        }
      })
      .catch((error) => {});
  }, []);
  // console.log(data);
  if (data != undefined) {
    return (
      <div className="film-card-section">
        <div className="film-card__header">
          <h2 className="film-card__title">Trending</h2>
          {/* <Segmented 
                    options={['Today', 'This week']}
                  
                    onChange={(e) => {handleChangeTimerSegmented(e)}}
                 /> */}
        </div>
        <div className="film-card__list-wrapper">
          <ul className="film-card__list">
            {data?.length === 0 ? (
              <div>Wait</div>
            ) : (
              data.map((item) => {
                console.log(item);
                // const date = new Date(item.release_date || item.first_air_date);
                //           return(

                //                 <a className="film-card__item" key={item.id}>
                //                     <div className="film-card__item-img" style={{backgroundImage: `url(${IMAGE_URL}${item.backdrop_path})` }}></div>
                //                     <span className="film-card__item-name">{item.title || item.name}</span>
                //                     <span className="film-card__item-time">{date.toLocaleDateString('en-us', {year:"numeric", month:"short", day:"numeric"}) }</span>
                //                     <div className="film-card__item-voting">
                //                         <Progress className="film-card__item-voting-percent" type="circle"  percent = {Math.round(item.vote_average*10)}  width = {36}  strokeColor = {Math.round(item.vote_average*10) < 70 ? '#d1d431': '#20b66b'} trailColor = {'#3f3c10'}  />
                //                     </div>
                //                 </a>

                //         )
              })
            )}
          </ul>
        </div>
      </div>
    );
  }
}
