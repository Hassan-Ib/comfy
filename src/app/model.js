import { async } from "q";
import data from "url:./data";
import cart from "./view/Components/cart";
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
  // console.log(data);

  try {
    // let cartItems = await checkLocalStorage();
    // const contentfull = await client.getEntries({
    //   content_type: "furnitureProduct",
    // });

    let products = getState();
    if (!products) {
      let loadedData = await data.items;
      // console.log(contentfull);

      const Products = loadedData.map((product) => {
        // const newProducts = contentfull.items.map((product) => {
        const { id } = product.sys;
        const { price, title } = product.fields;
        const { url: imageSource } = product.fields.image.fields.file;
        // const img = 'url:'+ imageSource;
        return { id, price, title, imageSource };
      });
      state.products = [...Products];
      saveState(state.products);
    }
    return getState();
  } catch (err) {
    console.log(err);
  }
};

// async function checkLocalStorage(){
//   const storage = window.localStorage
//   const cart = await storage.getItem('cart');
//   if(!cart){
//     return null
//   }

//   return cartItems
// }

function saveState(data) {
  const stringyfyData = JSON.stringify(data);
  window.sessionStorage.setItem("state", stringyfyData);
}
function getState() {
  const data = window.sessionStorage.getItem("state");
  return JSON.parse(data);
}

function setData(cartData) {
  const stringyfyCartData = JSON.stringify(cartData);
  window.localStorage.setItem("cart", stringyfyCartData);
}
function getData() {
  const data = window.localStorage.getItem("cart");
  return JSON.parse(data);
}
