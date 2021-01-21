import NavigationView from "./view/Components/navigationView";
import * as model from "./model";
import App from "./view/App";
import "../style/css/index.css";
import Router, { createRoutes } from "./routes";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

// window.addEventListener("load", () => {
//   App.rootRender();
//   App.getDomElement();
// });
const init = async () => {
  try {
    // render init html
    App.rootRender();
    App.getDomElement();
    App.setEvent(handleClickLink);

    // get products
    await model.loadData();
    const products = model.state.products;

    // load first page
    Router.setRoute(products);
    Router.renderPage("/");
  } catch (error) {
    console.log(error);
  }
};

function handleClickLink(link) {
  const windowPath = link.dataset.routeTo;
  window.history.pushState({}, "", windowPath);
  // console.log("windowPath: ", windowPath, window.location.pathname);
  Router.renderPage(windowPath);
}

init();
