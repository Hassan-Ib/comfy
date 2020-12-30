import CartComponent from "./Components/cart";
import "core-js/stable"; // for polyfilling everything else
// import HomeView from './pages/home';

class RootView {
  _parentElement = document.querySelector("#root");
  _clearRoot() {
    this._parentElement.innerHTML = "";
  }
  checkPageHandler() {
    let page = window.location.hash;
    if (!page) {
      return page;
    }
    return page.slice(1);
  }
  _generateMarkup(markup) {
    return `
            ${markup}
            ${CartComponent.render()}
        `;
  }
  render(markup) {
    this._clearRoot();
    const newMarkup = this._generateMarkup(markup);
    this._parentElement.insertAdjacentHTML("afterbegin", newMarkup);
  }
}
export default new RootView();
