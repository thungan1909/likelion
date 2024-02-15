import "./bannerSection.css";
import { useEffect, useState } from "react";
import { Carousel, Button } from "antd";
import { CaretRightOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import IMAGE_URL from "../../../utils/urlImage";
import MovieApi from "../../../api/MovieApi";

export default function BannerSection() {
  const [data, setData] = useState([]);
  const [dataSorted, setDataSorted] = useState([]);
  const navigate = useNavigate();
  let tempArray;
  useEffect(() => {
    MovieApi.getPopular().then((res) => setData(res));
  }, []);

  useEffect(() => {
    sortByRating(data);
  }, [data]);

  const sortByRating = (data) => {
    tempArray = JSON.parse(JSON.stringify(data));
    let temp;
    let len = tempArray.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = i + 1; j < len; j++) {
        if (tempArray[i].vote_average < tempArray[j].vote_average) {
          temp = tempArray[i];
          tempArray[i] = tempArray[j];
          tempArray[j] = temp;
        }
      }
    }

    setDataSorted(tempArray);
  };

  const handleWatchFilm = () => {};
  const handleSeeDetail = (id) => {
    navigate(`/filmDetail/${id}`, { replace: true });
  };

  if (dataSorted !== undefined) {
    return (
      <div id="banner">
        <Carousel autoplay dotPosition={"bottom"}>
          {dataSorted?.length === 0 ? (
            <div></div>
          ) : (
            dataSorted.map((item, index) => {
              if (index < 5) {
                return (
                  <div key={item.id}>
                    <img
                      className="banner-img"
                      src={IMAGE_URL + item.backdrop_path}
                    ></img>
                    <div className="popular-film__detail-wrap">
                      <div className="popular-film__detail">
                        <span className="popular-film__title">
                          {item.title}
                        </span>
                        <p className="popular-film__overview">
                          {item.overview}
                        </p>
                        <div className="popular-film__buttonWrapper">
                          <div className="film-detail__buttonWrapper">
                            <Button
                              onClick={handleWatchFilm}
                              style={{ marginRight: "16px" }}
                              type="primary"
                              shape="round"
                              size={"large"}
                              icon={<CaretRightOutlined />}
                            >
                              Xem ngay
                            </Button>
                            <Button
                              onClick={() => handleSeeDetail(item.id)}
                              type="primary"
                              shape="round"
                              size={"large"}
                              icon={<InfoCircleOutlined />}
                            >
                              Chi tiết
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          )}
        </Carousel>
      </div>
    );
  }
}
