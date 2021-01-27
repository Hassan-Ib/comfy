import { attributeSelector, classSelector } from "../helper";
import SpinnerComponent from "./Components/spinnerView";

export default class View {
  _parentElement = classSelector(`[data-route='outlet']`);
  _getDOMElement() {}
  _clearParent() {
    this._parentElement.innerHTML = "";
  }
  renderSpinner(element) {
    this._clearParent();
    const markup = SpinnerComponent.markup();
    this._parentElement.insertAdjacentElement("afterbegin", markup);
  }

  _errorMarKup() {
    return `
    <section class="u-center error-msg"><h3>unable to connect pls check your connection and try again</h3></section>
    `;
  }
  renderError() {
    this._clearParent();
    this._parentElement.insertAdjacentHtml("afterBegin", this._errorMarKup());
  }

  render(data) {
    this._clearParent();
    const markup = this._markup(data);
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    this._getDOMElement();
  }
}
