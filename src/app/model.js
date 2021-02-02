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
  cart: {
    numberOfItemsInCart: 0,
    totalCartPrice: 0,
    items: [],
  },
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
      const { company } = product.fields;
      return { id, price, title, imageSource, company };
    });
    if (!products) return;
    state.products = [...products];
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
const itemInCart = (id) => {
  return state.cart.items.some((item) => item.id === id);
};
//  add item to cart state
const addToStateCart = (item) => {
  const isItemInCart = itemInCart(item.id);
  const {
    cart: { items },
  } = state;

  if (isItemInCart) throw new Error("item already in cart");
  let newItem = { ...item, quantity: 1 };
  const newCartItems = [...items, newItem]; // createItem({...item, quantity})

  const newCart = {
    items: newCartItems,
    numberOfItemsInCart: newCartItems.reduce((sum, item) => {
      sum += item.quantity;
      return sum;
    }, 0),

    totalCartPrice: newCartItems
      .reduce((sum, item) => {
        sum += item.price * item.quantity;
        return sum;
      }, 0)
      .toFixed(2),
  };
  console.log(newCart);
  state.cart = { ...newCart };
};

// add item to cart both state and localStorage
export const addItemToCart = (item) => {
  try {
    addToStateCart(item);
    const { cart: newLocalCart } = state;
    config.Storage.setLocalData(config.cartName, newLocalCart);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getLocalCart = () => {
  const localCart = config.Storage.getLocalData(config.cartName);
  if (localCart === "undefine" || localCart === null) {
    const initalCart = { ...state.cart };
    config.Storage.setLocalData(config.cartName, initalCart);
  }
  if (localCart) {
    state.cart = { ...localCart };
  }
};
export function getCartQuantity(cartItems) {
  const value = cartItems.reduce((sum, item) => {
    sum += item.quantity;
  }, 0);
  console.log(value);
  return value;
}
export const removeItemFromCart = (id) => {};
