import NotFoundImg from "../../assets/img/404-error.png";
export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src={NotFoundImg} style={{ width: "300px" }}></img>
      <span style={{ fontSize: "48px" }}>Page not found</span>
    </div>
  );
}
