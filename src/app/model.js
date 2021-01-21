import { async } from "q";
import data from "url:./data";
// import "core-js/stable"; // for polyfilling everything else

// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: "vajel9mfz0r6",
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: "W3UjDMEZRW869nRjFz0i9QwA7KdSZi6KWCirjeEVpJQ",
// });

export const state = {
  products: [],
  cart: [],
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

export const getCartItems = () => {
  const cart = getLocalData("cart");
  if (!cart) return [];
  return cart;
};

function setLocalData(dataName, data) {
  const stringifyData = JSON.stringify(data);
  window.localStorage.setItem(dataName, stringifyData);
}
function getLocalData(dataName) {
  const data = window.localStorage.getItem(dataName);
  return JSON.parse(data);
}
