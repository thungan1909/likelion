import IMAGE_URL from "../../../utils/urlImage";
import "./bannerFilm.css";
export default function BannerFilm({ item }) {
  return (
    <div id="bannerFilm">
      <img className="bannerFilm-img" src={IMAGE_URL + item.poster_path}></img>
    </div>
  );
}
