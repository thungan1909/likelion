import { useEffect, useState } from "react";
import BASE_URL from "../../utils/baseURL";

export default function RecommendationSection() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}`);
  });
}
