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

class StateData {
  _data;
  _dataName;
  constructor(dataName) {
    this._dataName = dataName;
    this._getData();
  }
  _updateData(dataList) {
    config.Storage.setLocalData(this._dataName, dataList);
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
    this._data = [...localData];
  }

  addItemToData = (item) => {
    try {
      const newData = this._addItemToData(item);
      if (newData === undefined) {
        return;
      }
      this._updateData(newData);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  _isItemInData = (id) => {
    return this._data.some((item) => item.id === id);
  };

  _addItemToData = (item) => {
    try {
      if (this._isItemInData(item.id)) throw new Error("item already in cart");
      let newItem = { ...item, quantity: 1 };
      const newData = [...this._data, newItem];
      return newData;
    } catch (error) {
      console.log(error.message);
    }
  };
  removeItemFromData = (productId) => {
    const newCart = this._data.filter((product) => product.id !== productId);
    this._updateData(newCart);
  };
  get items() {
    return this._data;
  }
}
class LaterItems extends StateData {
  constructor() {
    super("laterItem");
  }
}

class Cart extends StateData {
  constructor() {
    super("cart");
  }
  reduceItemQuantity(productId) {
    const newCart = this._data.filter((product) => {
      if (product.id === productId) {
        if (product.quantity < 2) {
          return;
        } else {
          product.quantity -= 1;
        }
      }
      return product;
    });
    this._updateData(newCart);
  }
  increaseItemQuantity(productId) {
    const newCart = this._data.map((product) => {
      if (product.id === productId) {
        product.quantity += 1;
      }
      return product;
    });
    this._updateData(newCart);
  }

  get CartTotalPrice() {
    return this._data
      .reduce((sum, item) => {
        sum += item.price * item.quantity;
        return sum;
      }, 0)
      .toFixed(2);
  }
  get numberOfItemsInCart() {
    return this._data.reduce((sum, item) => {
      sum += item.quantity;
      return sum;
    }, 0);
  }
}

export const state = {
  products: [],
  cart: new Cart(),
  laterItems: new LaterItems(),
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
  state.cart.addItemToData(item);
};

export const removeItemFromCart = (productId) => {
  state.cart.removeItemFromData(productId);
};
export const increaseItemQuantity = (productId) => {
  state.cart.increaseItemQuantity(productId);
};

export const reduceItemQuantity = (productId) => {
  state.cart.reduceItemQuantity(productId);
};
