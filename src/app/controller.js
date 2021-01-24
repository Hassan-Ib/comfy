import * as model from "./model";
import App from "./view/App";
import Router, { createRoutes } from "./routes";
import "../style/css/index.css";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const addToCart = (id, btn) => {
  console.log(id, btn);
};

const handleRouteLink = (link, routes) => {
  const windowPath = link.dataset.routeTo;
  const { page, products } = Router.routeToPath(windowPath, routes);
  page.addToCartHandler(addToCart);
};

const init = async () => {
  try {
    // get products
    await model.loadData();
    const products = model.state.products;
    // create routes
    const routes = createRoutes(products);
    // load first page
    App.getDOMElement();

    App.burgerEventHandler();
    App.cartEventHandler();
    const { page } = Router.routeToPath("/", routes);
    App.linksEventHandler(handleRouteLink, routes);
    page.addToCartHandler(addToCart);
  } catch (error) {
    console.log(error);
  }
};
init();
