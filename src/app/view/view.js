export default class View {
  _clearParent() {
    this._parentElement.innerHTML = "";
  }
  render(product) {
    let data = null;
    if (product) {
      data = product.slice();
    }
    // const data = product.slice();
    this._clearParent();
    let markup = this._markup(data);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
