import * as model from "./model";
import Root from "./view/Root";
import Router, { createRoutes } from "./routes";
import "../style/css/index.css";
import HomeView from "./view/pages/homeView";

import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await
import CartView from "./view/pages/cartView";

const populateCart = () => {
  const { cart } = model.state;
  CartView.populateCart(cart);
};

const deleteItemHandler = (id) => {
  model.removeItemFromCart(id);
  console.log("delete", id);
};
const saveItemHandler = (id) => {
  console.log("saveItem", id);
};
const increaseItemHandler = (id) => {
  console.log("increaseItem", id);
};
const decreaseItemHandler = (id) => {
  console.log("decreaseItem", id);
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
      console.log("view item " + id);
    }
  } catch (error) {
    if (error.message == "item already in cart") {
      console.log("bingo");
      //cart.handleAlreadyInCart()
    }
    console.log("error got here in controller to", error);
  }
};

// products page javascript and events
const productPageEvents = (route) => {
  const { products } = model.state;
  route.render(products);
  route.addProductToCartHandler(addToCart);
};
// home page javascript and events
const HomePageEvents = (route) => {
  const { products, cart } = model.state;
  const homeProducts = products.filter((item) => item.price <= 20);
  route.render(homeProducts);
  route.addProductToCartHandler(addToCart);
};

// about page
const aboutPageEvents = (route) => {
  route.render();
};

const handleLinkRoute = (path) => {
  const route = Router.routeToPath(path);
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
    const handlers = {
      deleteItemHandler,
      saveItemHandler,
      increaseItemHandler,
      decreaseItemHandler,
    };
    CartView.addCartEventItemHandlers({ ...handlers });
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
