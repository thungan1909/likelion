import { Tooltip, Input } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieApi from "../../../api/MovieApi";
const { Search } = Input;

export default function SearchBar() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const onSearch = (value) => {
    handleGetDataBySearch(value);
  };

  const handleGetDataBySearch = (value) => {
    MovieApi.getDataBySearch({ value }).then((res) => setData(res));
  };

  useEffect(() => {
    if (data.length > 0) {
      navigate("/searchResults", {
        replace: true,
        state: {
          data,
        },
      });
    }
  }, [data]);
  return (
    <Tooltip title="Tìm kiếm phim ảnh, TV Show">
      <Search
        className="searchbar"
        placeholder="Tìm kiếm phim ảnh, TV Show, ..."
        onSearch={onSearch}
        enterButton
      />
    </Tooltip>
  );
}
