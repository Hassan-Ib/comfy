import CartComponent from "./Components/cartView";
import NavigationComponents from "./Components/navigationView";
import SpinnerComponent from "./Components/spinnerView";
import { toggleClass, classSelector, attributeSelector } from "../helper";
import "core-js/stable"; // for polyfilling everything else

class AppView {
  _parentElement = document.querySelector("#root");
  getDomElement = () => {
    // NavigationComponents.getTags();
    this._rootElement = {
      burger: classSelector(".burger"),
      linksContainer: classSelector(".nav"),
      linksNode: attributeSelector(`[data-route='route']`),
      navigation: classSelector(".navigation"),
      cartContainer: classSelector(".cart__overlay"),
      openCartBtn: classSelector(".cart__placeholder"),
      closeCartBtn: classSelector(".cart--close"),
      links: attributeSelector(`[data-route="route"]`),
      routeOutlet: classSelector(`[data-route='outlet']`),
    };
  };

  setEvent(handler) {
    const domElement = this._rootElement;
    this._setBurgerEvent(domElement);
    this._setCartEvent(domElement);
    this._setLinksEvent(domElement, handler);
  }
  _setCartEvent(DOMElements) {
    const { cartContainer, openCartBtn, closeCartBtn } = DOMElements;
    [openCartBtn, closeCartBtn].forEach((button) => {
      button.addEventListener("click", () => {
        toggleClass("cart--open", cartContainer);
      });
    });
  }
  _setLinksEvent(domElement, handler) {
    const { links: linksNode } = domElement;
    linksNode.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        handler(link);
      });
    });
  }

  _setBurgerEvent(DOMElements) {
    const { burger: hamBurgerMenu, linksContainer } = DOMElements;
    hamBurgerMenu.addEventListener("click", () => {
      toggleClass("toggle", hamBurgerMenu);
      toggleClass("showLinks", linksContainer);
    });
  }

  _clearElement(element) {
    element.innerHTML = "";
  }

  _rootMarkup() {
    return `
      ${NavigationComponents.markup()}
      <section data-route='outlet'></section>
      ${CartComponent.markup()}
    `;
  }
  rootRender() {
    const newMarkup = this._rootMarkup();
    addMarkupToElement(newMarkup, this._parentElement);
  }

  renderSpinner(element) {
    this._clearElement(element);
    const markup = SpinnerComponent.markup();
    addMarkupToElement(markup, element);
  }
  routeOutletRender(markup) {
    const { routeOutlet } = this._rootElement;
    this._clearElement(routeOutlet);
    addMarkupToElement(markup, routeOutlet);
  }
}
export default new AppView();

const addMarkupToElement = (markup, element) => {
  element.insertAdjacentHTML("afterbegin", markup);
};
