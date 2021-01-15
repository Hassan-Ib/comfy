import View from "../view";
import "core-js/stable"; // for polyfilling everything else

class SpinnerComponents extends View {
  _parentElement = document.querySelector("#root");

  _markup() {
    return `
        <div class="spinner">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        
        </div>
        `;
  }
  render() {
    return this._markup();
  }
}

export default new SpinnerComponents();
