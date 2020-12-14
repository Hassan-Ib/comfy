import NavigationView from "./view/navigationView";
import HomeView from "./view/home";
import Spinner from "./view/spinner";
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await
import * as model from "./model";

const navigationSettup = async () => {
  Spinner.render();
  await await model.loadData();
  const products = model.state.products;
  const homeGalary = () => {
    return products.filter((product) => product.price > 40);
  };
  console.log(homeGalary());

  HomeView.render(homeGalary());
  NavigationView.bugerHandler();
};

const init = async () => {
  await navigationSettup();
};

init();
