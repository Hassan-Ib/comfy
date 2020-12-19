class RootView {
  _parentElement = document.querySelector("#root");
  checkPageHandler() {
    let page = window.location.hash;
    if (!page) {
      return page;
    }
    return page.slice(1);
  }
  _markup(markup) {
    return `
            ${markup}
            ${CartView()}
        `;
  }
  render(markup) {
    const newMarkup = this.markup(markup);
    this._parentElement.insertAdjacentHTML("afterbegin", newMarkup);
  }
}
export default new RootView();
