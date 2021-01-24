import SpinnerComponent from "./Components/spinnerView";
import { toggleClass, classSelector, attributeSelector } from "../helper";
import "core-js/stable"; // for polyfilling everything else

class AppView {
  _parentElement = document.querySelector("#root");
  getDOMElement = () => {
    this._DOMElement = {
      burger: classSelector(".burger"),
      linksContainer: classSelector(".nav"),
      linksNode: attributeSelector(`[data-route='route']`),
      navigation: classSelector(".navigation"),
      cartContainer: classSelector(".cart__overlay"),
      openCartBtn: classSelector(".cart__placeholder"),
      closeCartBtn: classSelector(".cart--close"),
      routeOutlet: classSelector(`[data-route='outlet']`),
    };
  };

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
  linksEventHandler(handler, routes) {
    const { linksNode } = this._DOMElement;
    linksNode.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        handler(link, routes);
      });
    });
  }
}
export default new AppView();
