import { Button, Rate, Tag, Tooltip } from "antd";
import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./detailContentSection.css";
import IMAGE_URL from "../../../utils/urlImage";
export default function DetailContentSection({ item }) {
  const desc = ["Dở tệ", "Không hay", "Bình thường", "Hay", "Tuyệt vời"];

  const [value, setValue] = useState(3);

  return (
    <div className="detailContent">
      <h1 style={{ marginBlock: "16px" }} className="content__title">
        {item.original_title}
      </h1>
      <div className="film-detail__statistic">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className="film-detail__statistic-point">
            {parseFloat(item.vote_average).toFixed(1)}/10
          </span>
          <span style={{ marginRight: "4px" }} className="">
            {item.vote_count} đánh giá
          </span>
        </div>
        <div className="film-detail__statistic-rating">
          <div>
            <Rate
              style={{ fontSize: 24 }}
              tooltips={desc}
              onChange={setValue}
              value={value}
            />
            {value ? (
              <span style={{ fontSize: "16px" }} className="ant-rate-text">
                {desc[value - 1]}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="film-detail__buttonWrapper">
        <Button
          style={{ marginRight: "16px" }}
          type="primary"
          shape="round"
          size={"large"}
          icon={<CaretRightOutlined />}
        >
          Xem ngay
        </Button>
        <Button
          type="primary"
          shape="round"
          size={"large"}
          icon={<PlusOutlined />}
        >
          Danh sách
        </Button>
      </div>
      <div className="film-detail__descripton">{item.overview}</div>
      <div className="film-detail__info">
        <div style={{ marginBottom: "4px" }}>
          Thời gian phát hành: {item.release_date}
        </div>
        <div>
          <span>Thể loại: </span>
          {item.genres?.length < 0 ? (
            <></>
          ) : (
            item.genres.map((element, idx) => {
              return (
                <Tag key={idx} color="magenta">
                  {element.name}
                </Tag>
              );
            })
          )}
        </div>
        <div style={{ marginBottom: "4px" }}>
          <span>Quốc gia: </span>
          {item.production_countries?.length < 0 ? (
            <span>Chưa có thông tin</span>
          ) : (
            item.production_countries.map((element, idx) => {
              return <span key={idx}>{element.name} </span>;
            })
          )}
        </div>
        <div className="production-companies" style={{ marginBottom: "4px" }}>
          <span>Hãng phim: </span>
          {item.production_companies?.length < 0 ? (
            <span>Chưa có thông tin</span>
          ) : (
            item.production_companies.map((element, idx) => {
              return (
                <div key={idx} style={{ marginInline: "16px" }}>
                  <Tooltip title={element.name}>
                    <img
                      className="production-companies--img"
                      src={IMAGE_URL + element.logo_path}
                    ></img>
                  </Tooltip>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
