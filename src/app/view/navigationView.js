import domData from "./helpers.js";

console.log(domData.burger);
class NavigationView {
  _parentElement = domData.burger;
  addHandler(className) {
    this._parentElement.addEventListener("click", () => {
      const isClass = this._checkClassName(className);
      console.log(isClass);
      isClass
        ? this._parentElement.classList.remove(className)
        : this._parentElement.classList.add(className);
    });
  }

  _checkClassName(className) {
    return this._parentElement.classList.contains(className) && true;
  }
}

export default new NavigationView();
