import SpinnerComponent from "./Components/spinnerView";
import { toggleClass, classSelector, attributeSelector } from "../helper";
import "core-js/stable"; // for polyfilling everything else

class Root {
  _parentElement = document.querySelector("#root");
  _DOMElement = {
    burger: classSelector(".burger"),
    linksContainer: classSelector(".nav"),
    // linksNode: attributeSelector(`[data-route='route']`),
    navigation: classSelector(".navigation"),
    cartContainer: classSelector(".cart__overlay"),
    cartItemsContainer: classSelector(".cart__items"),
    openCartBtn: classSelector(".cart__placeholder"),
    closeCartBtn: classSelector(".cart--close"),
    routeOutlet: classSelector(`[data-route='outlet']`),
  };

  // _getDOMElement() {
  //   this._DOMElement = {
  //     ...this._DOMElement,
  //     linksNode: attributeSelector(`[data-route='route']`),
  //   };
  // }

  cartEventHandler() {
    const { cartContainer, openCartBtn, closeCartBtn } = this._DOMElement;
    [openCartBtn, closeCartBtn].forEach((button) => {
      button.addEventListener("click", () => {
        toggleClass("cart--open", cartContainer);
      });
    });
  }
  burgerEventHandler() {
    const { burger: hamBurgerMenu, linksContainer } = this._DOMElement;
    hamBurgerMenu.addEventListener("click", () => {
      toggleClass("toggle", hamBurgerMenu);
      toggleClass("showLinks", linksContainer);
    });
  }
  linksEventHandler(handler) {
    window.addEventListener("click", (e) => {
      let link = e.target;
      if (!link.dataset.route) return;
      e.preventDefault();
      const path = link.dataset.routeTo;
      handler(path);
    });
  }
}
export default new Root();
