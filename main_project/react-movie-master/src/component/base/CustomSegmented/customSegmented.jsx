import { Segmented } from "antd";
import "./customSegmented.css";

export default function CustomSegmented({ options, setCurrentSegmented }) {
  const handleChangeCurrentSegmented = (value) => {
    setCurrentSegmented(value);
  };
  return (
    <Segmented
      style={{ position: "absolute", right: "56px", zIndex: "1" }}
      options={options}
      onChange={(e) => {
        handleChangeCurrentSegmented(e);
      }}
    />
  );
}
