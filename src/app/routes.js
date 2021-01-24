import HomeView from "./view/pages/homeView";
import ProductsView from "./view/pages/productsView";
import AboutView from "./view/pages/aboutView";
import App from "./view/App";

export const createRoutes = (products) => {
  return [
    {
      path: "/",
      products: products.filter((item) => item.price < 20),
      page: HomeView,
    },
    {
      path: "/products",
      products,
      page: ProductsView,
    },
    {
      path: "/about-Us",
      page: AboutView,
    },
  ];
};

class Router {
  routeToPath(path, routes) {
    let { page, products } = this._matchRoute(path, routes);
    page.render(products);
    window.history.pushState({}, "", path);
    return { page, products };
  }
  _matchRoute(path, routes) {
    const matchedRoute = routes.find((page) => page.path === path);
    return matchedRoute;
  }
}
export default new Router();
