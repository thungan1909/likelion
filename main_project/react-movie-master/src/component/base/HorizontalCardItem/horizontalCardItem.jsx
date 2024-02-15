import { useNavigate } from "react-router-dom";
import { Progress, Col } from "antd";
import IMAGE_URL from "../../../utils/urlImage";
export default function HorizontalCardItem({ item }) {
  const navigate = useNavigate();
  const handleClickCard = (id) => {
    navigate(`/filmDetail/${id}`, { replace: true });
  };
  return (
    <Col span={4} style={{ margin: "4px" }}>
      <a
        className="horizontal-card__item"
        key={item.id}
        onClick={() => handleClickCard(item.id)}
      >
        <div
          className="horizontal-card__item-img"
          style={{ backgroundImage: `url(${IMAGE_URL}${item.backdrop_path})` }}
        ></div>
        <span className="film-card__item-name">{item.title || item.name}</span>
        <div className="film-card__item-voting">
          <Progress
            className="film-card__item-voting-percent"
            type="circle"
            percent={Math.round(item.vote_average * 10)}
            width={36}
            strokeColor={
              Math.round(item.vote_average * 10) < 70 ? "#d1d431" : "#20b66b"
            }
            trailColor={"#3f3c10"}
          />
        </div>
      </a>
      {/* </Link> */}
    </Col>
  );
}
