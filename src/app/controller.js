import * as Navigation from "./view/navigationView";
import "core-js/stable"; // for polyfilling everything else
import "regenerator-runtime/runtime"; // for polyfilling async await

const navigationSettup = () => {
  const handler = Navigation.handler;
  Navigation.addNavigationHandler(handler);
};

const init = () => {
  //Navigation set up
  navigationSettup();
};

init();
