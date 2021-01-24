import * as model from "./model";
import App from "./view/App";
import Router, { createRoutes } from "./routes";
import "../style/css/index.css";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await
import HomeView from "./view/pages/homeView";

const addToCart = (id, btn) => {
  console.log(id, btn);
  const item = model.state.products.find((item) => item.id === id);
};

const productModule = () => {
  const { products, cart } = model.state;
};

const HomeModule = () => {
  const { products, cart } = model.state;
  const homeProducts = products.filter((item) => item.price <= 20);
  HomeView.render(homeProducts);
  HomeView.addToCartHandler(addToCart);
  console.log(products);
  HomeView.addLinkHandler(productModule);
  // Home
};

const handleRouteLink = (link) => {
  const windowPath = link.dataset.routeTo;
  const route = Router.routeToPath(windowPath);

  // window.addEventListener("popstate", (e) => {
  //   console.log("poped", window.location.pathname);
  // });
  // window.addEventListener("pushstate", (e) => {
  //   console.log("poped", window.location.pathname);
  // });
};

const init = async () => {
  try {
    // get products
    await model.loadData();
    const products = model.state.products;
    App.getDOMElement();
    App.burgerEventHandler();
    App.cartEventHandler();
    App.linksEventHandler(handleRouteLink);
    HomeModule();
  } catch (error) {
    console.log(error);
  }
};
init();

window.addEventListener("hashchange", () => {
  console.log("changed");
});
