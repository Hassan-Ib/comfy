import HomeView from "./view/pages/homeView";
import ProductsView from "./view/pages/productsView";
import AboutView from "./view/pages/aboutView";
import App from "./view/Root";

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
  routeToPath(path, { HomePageEvents, productPageEvents, aboutPageEvents }) {
    let { page } = this._matchRoute(path);
    window.history.pushState({}, "", path);
    if (path === "/") {
      HomePageEvents(page);
    } else if (path === "/products") {
      productPageEvents(page);
    } else if (path === "/about-Us") {
      aboutPageEvents(page);
    }
  }
  _matchRoute(path) {
    const matchedRoute = routes.find((page) => page.path === path);
    return matchedRoute;
  }
}
export default new Router();
