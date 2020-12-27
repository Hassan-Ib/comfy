import NavigationView from "./view/Components/navigationView";
import HomeView from "./view/pages/home";
import Spinner from "./view/Components/spinner";
import * as model from "./model";
import Root from "./view/rootView";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const pages = ["#home", "#product", "#about"];
let currentPage = "";
const init = async () => {
  try {
    // let markup;
    // //2. get products
    // const products = await model.loadData();
    // //4. generate markup :HOME
    // //checkpage location
    // markup = HomeView.markup(products);
    // currentPage = getPageLocation();
    // console.log(currentPage);
    // //5. render markup
    // Root.render(markup);
    //6 add handler to the necesarys
  } catch (error) {
    console.log(error);
  }
};

init();

function getPageLocation() {
  let page = window.location.hash;
  if (!page) page = "#home";
  return page.slice(1);
}
