import { Route } from "react-router-dom";
import CheckTokenServices from "./checkTokenServices";
export default class getRoutes {
  static async getRoutes(allRoutes) {
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
  }

  static async checkAuthen(routes) {
    if (!CheckTokenServices()) {
      return getRoutes(routes.publicRoutes);
    } else {
      return getRoutes(routes.privateRoutes);
    }
  }
}
