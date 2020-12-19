import NavigationView from "./view/Components/navigationView";
import HomeView from "./view/pages/home";
// import Spinner from "./view/Components/spinner";
import * as model from "./model";
import Root from "./view/rootView";

//polyfiller
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const init = async () => {
  try {
    //1. check hashNode
    const page = Root.checkPageHandler();
    console.log("page", page);
    // 2. render spinner

    // Spinner.render();
    //3. get products
    const products = await model.loadData();
    //4. generate markup

    //5. render markup

    //6 add handler to the necesarys
  } catch (error) {
    console.log(error);
  }
};

init();
