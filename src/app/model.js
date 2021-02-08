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
class Cart {
  _cart = [];
  _dataName = "cart";

  constructor() {
    this._getData();
  }
  _updateCart(cart) {
    config.Storage.setLocalData(this._dataName, cart);
    this._getData();
  }

  _setInitalData() {
    config.Storage.setLocalData(this._dataName, []);
  }
  _getData() {
    let localData = config.Storage.getLocalData(this._dataName);
    if (localData === null || localData === undefined) {
      this._setInitalData();
      localData = [];
    }
    this._cart = [...localData];
  }

  addItemToCart = (item) => {
    try {
      const newCart = this._addProductToCart(item);
      if (newCart === undefined) {
        return;
      }
      this._updateCart(newCart);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  _isProductInCart = (id) => {
    return this._cart.some((item) => item.id === id);
  };

  _addProductToCart = (item) => {
    try {
      if (this._isProductInCart(item.id))
        throw new Error("item already in cart");
      let newItem = { ...item, quantity: 1 };
      const newCart = [...this._cart, newItem];
      return newCart;
    } catch (error) {
      console.log(error.message);
    }
  };
  removeProductFromCart = (productId) => {
    const newCart = this._cart.filter((product) => product.id !== productId);
    this._updateCart(newCart);
  };

  reduceItemQuantity(productId) {
    const newCart = this._cart.filter((product) => {
      if (product.id === productId) {
        if (product.quantity < 2) {
          return;
        } else {
          product.quantity -= 1;
        }
      }
      return product;
    });
    this._updateCart(newCart);
  }
  increaseItemQuantity(productId) {
    const newCart = this._cart.map((product) => {
      if (product.id === productId) {
        product.quantity += 1;
      }
      return product;
    });
    console.log(newCart);
    this._updateCart(newCart);
  }

  get CartTotalPrice() {
    return this._cart
      .reduce((sum, item) => {
        sum += item.price * item.quantity;
        return sum;
      }, 0)
      .toFixed(2);
  }
  get numberOfItemsInCart() {
    return this._cart.reduce((sum, item) => {
      sum += item.quantity;
      return sum;
    }, 0);
  }
  get items() {
    return this._cart;
  }
}

export const state = {
  products: [],
  cart: new Cart(),
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

export const addItemToCart = (productId) => {
  // console.log(productId);
  const item = state.products.find((item) => item.id === productId);
  state.cart.addItemToCart(item);
};

export const removeItemFromCart = (productId) => {
  state.cart.removeProductFromCart(productId);
};
export const increaseItemQuantity = (productId) => {
  state.cart.increaseItemQuantity(productId);
};

export const reduceItemQuantity = (productId) => {
  state.cart.reduceItemQuantity(productId);
};
// cart class
