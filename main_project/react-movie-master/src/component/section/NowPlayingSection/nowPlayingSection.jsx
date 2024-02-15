import { useEffect, useState } from "react";
import API_KEY from "../../utils/apiKey";
import BASE_URL from "../../utils/baseURL";
import { Row, Segmented } from "antd";
import CardItem from "../CardItem/cardItem";
import HorizontalCardItem from "../HorizontalCardItem/horizontalCardItem";

export default function NowPlayingSection() {
  const [data, setData] = useState([]);
  const [timerSegmented, setTimerSegmented] = useState("day");

  const handleChangeTimerSegmented = (value) => {
    if (value === "Today") {
      setTimerSegmented("day");
    } else if (value === "This week") {
      setTimerSegmented("week");
    }
  };
  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log("ERR");
        } else {
          setData(res.results);
        }
      })
      .catch((error) => {});
  }, []);
  if (data != undefined) {
    return (
      <div className="film-card-section">
        <div className="film-card__header">
          <h2 className="film-card__title">Now Playing</h2>
          <Segmented
            options={["Trung Quốc", "Nhật Bản", "Ấn Độ", "Hàn Quốc"]}
            onChange={(e) => {
              handleChangeTimerSegmented(e);
            }}
          />
        </div>
        <div className="film-card__list-wrapper">
          <ul className="film-card__horizontal-list">
            <Row justify={"space-between"}>
              {data?.length === 0 ? (
                <div>Wait</div>
              ) : (
                data.map((item, index) => {
                  if (index < 10) {
                    return (
                      <HorizontalCardItem item={item}></HorizontalCardItem>
                    );
                  }
                })
              )}
            </Row>
          </ul>
        </div>
      </div>
    );
  }
}
