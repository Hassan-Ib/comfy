import NavigationView from "./view/Components/navigationView";
import HomeView from "./view/pages/home";
import Spinner from "./view/Components/spinner";
import ProductsView from "./view/pages/productsView";
import * as model from "./model";
import Root from "./view/rootView";
import "../style/css/index.css";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const createRoutes = async () => {
  const products = await model.loadData();

  return [
    {
      path: "/",
      componentTemplate: HomeView.markup(
        products.filter((product) => product.price < 20)
      ),
    },
    {
      path: "/products",
      componentTemplate: ProductsView.render(products),
    },
    {
      path: "/about-us",
      componentTemplate: `<h3>hello world</h3>`,
    },
  ];
};

const loadPage = () => {};

const init = async () => {
  try {
    // render spinner
    Root.renderSpinner();

    // create routes
    const routes = await createRoutes();

    // get page
    const path = window.location.pathname;

    const page = routes.find(
      (componentTemplate) => componentTemplate.path === path
    );
    // push path and page to history

    // 4). render markup
    Root.render(page.componentTemplate);

    // renderPage(products, ProductsView);

    NavigationView.navHandler();
  } catch (error) {
    console.log(error);
  }
};

init();

const navClickHandle = () => {
  NavigationView.navHandler();
};

function routeHandler() {}
// window.addEventListener("load", (e) => {
//   // e.preventDefault;
//   console.log(e);
//   init();
// });
