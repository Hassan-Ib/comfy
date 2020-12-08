import Navigation from "./view/navigationView";
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const navigationSettup = () => {
  const className = "toggle";

  Navigation.addHandler(className);
};

const init = () => {
  //Navigation set up
  navigationSettup();
};

init();
