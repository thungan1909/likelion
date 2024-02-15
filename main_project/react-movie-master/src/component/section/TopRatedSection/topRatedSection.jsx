import { useEffect, useState } from "react";
import MovieApi from "../../../api/MovieApi";
import FilmSection from "../FilmSection/filmSection";
export default function TopRatedSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    MovieApi.getTopRated().then((res) => setData(res));
  }, []);

  if (data !== undefined) {
    return <FilmSection titleSection={"Top Rated"} data={data}></FilmSection>;
  }
}
