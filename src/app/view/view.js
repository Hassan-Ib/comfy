export default class View {
  _clearParent() {
    this._parentElement.innerHTML = "";
  }
  render(product) {
    this._clearParent();
    let markup = this._markup(product);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
