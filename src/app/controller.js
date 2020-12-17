import NavigationView from "./view/Components/navigationView";
import HomeView from "./view/pages/home";
import Spinner from "./view/Components/spinner";
import * as model from "./model";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const init = async () => {
  Spinner.render();
  const products = await model.loadData();
  const homeGalaryProducts = products.filter((product) => product.price > 50);
  HomeView.render(homeGalaryProducts);
  NavigationView.navHandler();
};

init();
