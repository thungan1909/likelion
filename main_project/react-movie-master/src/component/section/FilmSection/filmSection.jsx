import "./filmSection.css";
import CardItem from "../../base/CardItem/cardItem";
export default function FilmSection({ titleSection, data }) {
  return (
    <div className="film-card-section">
      <div className="film-card__header">
        <h2 className="film-card__title">{titleSection}</h2>
      </div>
      <div className="film-card__list-wrapper">
        <ul className="film-card__list">
          {data?.length === 0 ? (
            <div></div>
          ) : (
            data.map((item) => {
              return <CardItem key={item.id} item={item}></CardItem>;
            })
          )}
        </ul>
      </div>
    </div>
  );
}
