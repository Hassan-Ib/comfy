import * as model from "./model";
import Root from "./view/App";
import Router, { createRoutes } from "./routes";
import "../style/css/index.css";
import HomeView from "./view/pages/homeView";
import ProductsView from "./view/pages/productsView";
import AboutView from "./view/pages/aboutView";

import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const populateCart = () => {
  // get cart from local storage
  const { cart } = model.state;
  console.log(cart);

  // Root.populateCartView(cart)
  // pass cart to cart view;
};
// add items to cart
const addToCart = (id, btnFunction) => {
  try {
    const item = model.state.products.find((item) => item.id === id);
    if (!btnFunction) return;

    if (btnFunction === "add-item") {
      model.addItemToCart(item);
      populateCart();
    }
    if (btnFunction === "view-item") {
      // Root.viewItem(...item)
    }
  } catch (error) {
    console.log("error got here in controller to", error);
  }
};

// products page javascript and events
const productPageEvents = (route) => {
  const { products } = model.state;
  route.render(products);
  route.addToCartHandler(addToCart);
};
// home page javascript and events
const HomePageEvents = (route) => {
  const { products, cart } = model.state;
  const homeProducts = products.filter((item) => item.price <= 20);
  route.render(homeProducts);
  route.addToCartHandler(addToCart);
};

// about page
const aboutPageEvents = (route) => {
  route.render();
};

const handleLinkRoute = (path) => {
  const route = Router.routeToPath(path);
  console.log(route);
  if (path === "/") {
    HomePageEvents(route);
  } else if (path === "/products") {
    productPageEvents(route);
  } else if (path === "/about-Us") {
    aboutPageEvents(route);
  }
};

// App initallizing
const init = async () => {
  try {
    // get products
    model.getLocalCart();
    populateCart();
    await model.loadData();
    Root.burgerEventHandler();
    Root.cartEventHandler();
    HomePageEvents(HomeView);
    Root.linksEventHandler(handleLinkRoute);
  } catch (error) {
    console.log(error);
  }
};
init();
