import View from "../view";

class Spinner extends View {
  _parentElement = document.querySelector("#root");

  _markup() {
    return `
        <div class="spinner">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        
        
        </div>
        `;
  }
}

export default new Spinner();
