import domData from "./helpers.js";

console.log(domData.burger);

function checkToggle(element, className) {
  return element.classList.contains(className) && true;
}

function toggle(element, className) {
  // console.log(element, className);
  const isToggled = checkToggle(element, className);
  isToggled
    ? element.classList.remove(className)
    : element.classList.add(className);
}

export const handler = () => {
  toggle(domData.burger, "toggle");
  toggle(domData.nav, "navtoggle");
};

export function addNavigationHandler(handler) {
  domData.burger.addEventListener("click", () => {
    handler();
  });
}
let anchor = document.querySelectorAll(".nav__link");
console.log(anchor);
anchor.forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
// export default new NavigationView();
