import "../../../App.css";
import { useEffect, useState } from "react";
import MovieApi from "../../../api/MovieApi";
import FilmSection from "../FilmSection/filmSection";
import CustomSegmented from "../../base/CustomSegmented/customSegmented";

export default function TrendingSection() {
  const options = [
    {
      label: "Today",
      value: "day",
    },
    {
      label: "This week",
      value: "week",
    },
  ];
  const [data, setData] = useState([]);
  const [currentSegmented, setCurrentSegmented] = useState(options[0].value);

  useEffect(() => {
    if (currentSegmented !== undefined) {
      MovieApi.getTrending({ currentSegmented }).then((res) => setData(res));
    }
  }, [currentSegmented]);

  if (data !== undefined) {
    return (
      <div>
        <CustomSegmented
          options={options}
          setCurrentSegmented={setCurrentSegmented}
        ></CustomSegmented>
        <FilmSection titleSection={"Trending"} data={data}></FilmSection>
      </div>
    );
  }
}
