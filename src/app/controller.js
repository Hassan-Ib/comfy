import NavigationView from "./view/Components/navigationView";
import HomeView from "./view/pages/home";
import Spinner from "./view/Components/spinner";
import ProductsView from "./view/pages/productsView";
import * as model from "./model";
import Root from "./view/rootView";
import "../style/main.scss";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

let currentPage;

const init = async () => {
  try {
    window.location.hash = "#home";

    // 1). get product
    const products = await model.loadData();
    // 2). render homePage

    // 3). home products
    const homePageProducts = products.filter((product) => product.price < 20);

    homePage(homePageProducts);
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", () => {
  init();
});

window.addEventListener("hashchange", async (e) => {
  currentPage = getPageLocation();
  console.log(currentPage);
  let product, markup;
  switch (currentPage) {
    case "#home":
      init();
      break;
    case "#products":
      window.location.hash = "#products";
      product = await model.loadData();
      markup = ProductsView.render(product);
      break;
    case "#about":
      break;
    case "#productView":
      break;
    // default:
    //   init();
  }

  Root.render(markup);
  NavigationView.navHandler();
});

const homePage = (products) => {
  const markup = HomeView.markup(products);
  //5. render markup
  Root.render(markup);
  //6 add handler to the necesarys
  // refactor this
  NavigationView.navHandler();
  // refactor this
};

function getPageLocation() {
  let page = window.location.hash;
  return page;
}
