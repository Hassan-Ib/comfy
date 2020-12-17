import { async } from "q";
// import { data } from "./data";
import data from "../../products.json";

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "vajel9mfz0r6",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "W3UjDMEZRW869nRjFz0i9QwA7KdSZi6KWCirjeEVpJQ",
});

// const url = "products.json";

export const state = {
  products: [],
};

export const loadData = async () => {
  try {
    const contentfull = await client.getEntries({
      content_type: "furnitureProduct",
    });

    let products = contentfull.items;

    state.products = products.map((product) => {
      const { id } = product.sys;
      const { price, title } = product.fields;
      const { url: imageSource } = product.fields.image.fields.file;
      return { id, price, title, imageSource };
    });
    return state.products;
  } catch (err) {
    console.log(err);
  }
};
