import NavigationView from "./view/navigationView";
import HomeView from "./view/home";
import Spinner from "./view/spinner";
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await
import * as model from "./model";

const init = async () => {
  Spinner.render();
  const products = await model.loadData();
  const homeGalaryProducts = products.filter((product) => product.price > 50);
  HomeView.render(homeGalaryProducts);
  NavigationView.navHandler();
};

init();
