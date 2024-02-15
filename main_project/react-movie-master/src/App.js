import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import getRoutes from "./service/getRoutes";
function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }
      return null;
    });

  return (
    <BrowserRouter>
      <Routes>{getRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
