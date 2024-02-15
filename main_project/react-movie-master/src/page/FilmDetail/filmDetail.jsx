import React, { useEffect, useState } from "react";
import "./filmDetail.css";
import { useParams } from "react-router-dom";
import BannerFilm from "../../component/base/BannerFilm/bannerFilm";
import CustomHeader from "../../component/base/CustomHeader/customHeader";
import DetailContentSection from "../../component/section/DetailContentSection/detailContentSection";
import SimilarMovieSection from "../../component/section/SimilarMovieSection/similarMovieSection";
import MovieApi from "../../api/MovieApi";
import IMAGE_URL from "../../utils/urlImage";

export default function FilmDetail() {
  const { id } = useParams();
  const [filmInfo, setFilmInfo] = useState();
  useEffect(() => {
    MovieApi.getFilmDetail({ id }).then((res) => setFilmInfo(res));
  }, [id]);
  if (filmInfo !== undefined) {
    return (
      <div className="page-wrapper">
        <CustomHeader></CustomHeader>
        <div className="detail-wrapper">
          <div
            className="detail-background"
            style={{
              backgroundImage: `url(${IMAGE_URL}${filmInfo.backdrop_path})`,
            }}
          >
            <div className="detail-background--cover"></div>
          </div>
          <div className="detail-info">
            <BannerFilm item={filmInfo}></BannerFilm>
            <DetailContentSection item={filmInfo}></DetailContentSection>
          </div>
        </div>
        <div className="similar-movie-wrapper">
          <SimilarMovieSection id={id}></SimilarMovieSection>
        </div>
      </div>
    );
  }
}
