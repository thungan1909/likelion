import { useState, useEffect } from "react";
import { Row } from "antd";
import "./similarMovieSection.css";
import HorizontalCardItem from "../../base/HorizontalCardItem/horizontalCardItem";
import MovieApi from "../../../api/MovieApi";

export default function SimilarMovieSection({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    MovieApi.getSimilar({ id }).then((res) => setData(res));
  }, [id]);

  return (
    <div className="horizontal-card__list-wrapper">
      <h1 style={{ color: "#FFF" }}>Các phim tương tự</h1>
      <ul className="film-card__horizontal-list">
        <Row justify={"space-between"}>
          {data?.length === 0 ? (
            <div></div>
          ) : (
            data.map((item, index) => {
              if (index < 10) {
                return (
                  <HorizontalCardItem
                    key={index}
                    item={item}
                  ></HorizontalCardItem>
                );
              }
            })
          )}
        </Row>
      </ul>
    </div>
  );
}
