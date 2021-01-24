import HomeView from "./view/pages/homeView";
import ProductsView from "./view/pages/productsView";
import AboutView from "./view/pages/aboutView";
import App from "./view/App";

export const routes = [
  {
    path: "/",
    page: HomeView,
  },
  {
    path: "/products",
    page: ProductsView,
  },
  {
    path: "/about-Us",
    page: AboutView,
  },
];

class Router {
  routeToPath(path) {
    let { page } = this._matchRoute(path);
    window.history.pushState({}, "", path);
    return page;
  }
  _matchRoute(path) {
    const matchedRoute = routes.find((page) => page.path === path);
    return matchedRoute;
  }
}
export default new Router();
