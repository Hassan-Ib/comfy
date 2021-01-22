import * as model from "./model";
import App from "./view/App";
import "../style/css/index.css";
import Router, { createRoutes } from "./routes";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const handleClickLink = (link) => {
  const windowPath = link.dataset.routeTo;
  Router.routeToPath(windowPath);
};

const init = async () => {
  try {
    App.getDomElement();
    App.setEvent(handleClickLink);
    // Navigation.addEventHandler();

    // get products
    await model.loadData();
    const products = model.state.products;

    // load first page
    Router.setRoute(products);
    Router.routeToPath("/");
  } catch (error) {
    console.log(error);
  }
};
init();
