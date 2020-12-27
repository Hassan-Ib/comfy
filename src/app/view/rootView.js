import CartComponent from "./Components/cart";
// import HomeView from './pages/home';

class RootView {
  _parentElement = document.querySelector("#root");
  checkPageHandler() {
    let page = window.location.hash;
    if (!page) {
      return page;
    }
    return page.slice(1);
  }
  generateMarkup(markup) {
    return `
            ${markup}
            ${CartComponent.render()}
        `;
  }
  render(markup) {
    const newMarkup = this._markup(markup);
    this._parentElement.insertAdjacentHTML("afterbegin", newMarkup);
  }
}
export default new RootView();
