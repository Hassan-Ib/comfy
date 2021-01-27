import { async } from "q";
import data from "url:./data";
import * as config from "./config";
// import "core-js/stable"; // for polyfilling everything else

// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: "vajel9mfz0r6",
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: "W3UjDMEZRW869nRjFz0i9QwA7KdSZi6KWCirjeEVpJQ",
// });

export const state = {
  products: [],
  cart: { numberOfItemsInCart: 0, items: [] },
};

export const loadData = async () => {
  try {
    // const contentfull = await client.getEntries({
    //   content_type: "furnitureProduct",
    // });
    // if(contentfull){
    // setStateProducts
    // }
    // const products = contentfull.items.map((product) => {
    //loadLocalCart();
    //loadProducts()
    const products = data?.items.map((product) => {
      const { id } = product.sys;
      const { price, title } = product.fields;
      const { url: imageSource } = product.fields.image.fields.file;
      return { id, price, title, imageSource };
    });
    if (!products) return;
    state.products = [...products];
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
const ElementInCart = (id) => {
  return state.cart.items.some((item) => item.id === id);
};
//  add item to cart state
const addToStateCart = (item) => {
  const isElementInCart = ElementInCart(item.id);
  if (isElementInCart) throw new Error("item already in cart");
  const {
    cart: { numberOfItemsInCart, items },
  } = state;
  const newCart = {
    numberOfItemsInCart: numberOfItemsInCart + 1,
    items: [...items, item],
  };
  state.cart = { ...newCart };
};

// add item to cart both state and localStorage
export const addItemToCart = (item) => {
  try {
    addToStateCart(item);
    const { cart: newLocalCart } = state;
    config.setLocalData(config.cartName, newLocalCart);
  } catch (error) {
    throw new Error(error);
  }
};

export const getLocalCart = () => {
  const localCart = config.getLocalData(config.cartName);
  if (localCart === "undefine" || localCart === null) {
    const initalCart = { ...state.cart };
    config.setLocalData(config.cartName, initalCart);
  }
  if (localCart) {
    state.cart = { ...localCart };
  }
};
