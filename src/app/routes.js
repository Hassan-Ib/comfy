import HomeView from "./view/pages/homeView";
import ProductsView from "./view/pages/productsView";
import AboutView from "./view/pages/aboutView";
import App from "./view/App";

export const createRoutes = (products) => {
  return [
    {
      path: "/",
      htmlTemplate: HomeView.markup(
        products.filter((product) => product.price < 20)
      ),
    },
    {
      path: "/products",
      htmlTemplate: ProductsView.markup(products),
    },
    {
      path: "/about-Us",
      htmlTemplate: AboutView.markup(),
    },
  ];
};

class Router {
  _routes;
  setRoute(products) {
    this._routes = createRoutes(products);
  }

  renderPage(path) {
    let { htmlTemplate } = this._matchRoute(path);
    // console.log(htmlTemplate, "done", window.location.pathname);
    App.routeOutletRender(htmlTemplate);
  }
  _matchRoute(path) {
    const matchedRoute = this._routes.find((page) => page.path === path);
    return matchedRoute;
  }
}
export default new Router();
