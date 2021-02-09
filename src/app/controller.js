import * as model from "./model";
import Root from "./view/Root";
import Router from "./routes";
import "../style/css/index.css";
import HomeView from "./view/pages/homeView";

import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await
import CartView from "./view/pages/cartView";
import { Later } from "./view/Components/index";

const getStateData = () => {
  const { products, cart, laterItems } = model.state;
  return { products, cart, laterItems };
};

const populateCart = () => {
  const { cart } = getStateData();
  const cartData = {
    items: cart.items,
    totalCartPrice: cart.CartTotalPrice,
    numberOfItemsInCart: cart.numberOfItemsInCart,
  };
  CartView.populateCart(cartData);
};
const populateSaveForLater = () => {
  const { laterItems } = getStateData();
  console.log(laterItems);
  // Later.populate();
};

const deleteItemHandler = (id) => {
  model.removeItemFromCart(id);
  populateCart();
};
const saveItemHandler = (id) => {
  populateSaveForLater(id);
};
const increaseItemHandler = (id) => {
  model.increaseItemQuantity(id);
  populateCart();
};
const decreaseItemHandler = (id) => {
  model.reduceItemQuantity(id);
  populateCart();
};

const viewItems = () => {
  console.log(window.location);
};
// add items to cart
const addToCart = (id, btnFunction) => {
  try {
    if (btnFunction === "add-item") {
      model.addItemToCart(id);
      populateCart();
    }
    if (btnFunction === "view-item") {
      // Root.viewItem(...item, viewItems)
      console.log("view item " + id);
    }
  } catch (error) {
    if (error.message == "item already in cart") {
      console.log(error.message);
      return;
    }
    console.log("error got here in controller to", error);
  }
};

function addProductsToRoute(route, products) {
  route.render(products);
  route.addProductToCartHandler(addToCart);
}
// products page javascript and events
const productPageEvents = (route) => {
  const { products } = getStateData();
  addProductsToRoute(route, products);
};
// home page javascript and events
const HomePageEvents = (route) => {
  let { products } = getStateData();
  products = products.filter((item) => item.price <= 20);
  addProductsToRoute(route, products);
};

// about page
const aboutPageEvents = (route) => {
  route.render();
};

const handleLinkRoute = (path) => {
  const routeFn = {
    HomePageEvents,
    productPageEvents,
    aboutPageEvents,
  };
  Router.routeToPath(path, routeFn);
};

// App initallizing
const init = async () => {
  try {
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
