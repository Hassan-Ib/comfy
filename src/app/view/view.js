export default class View {
  _clearParent() {
    this._parentElement.innerHTML = "";
  }

  generateMarkup(product) {
    let data = null;
    if (product) {
      data = product.slice();
    }
    let markup = this._markup(data);
    return markup;
  }
}
