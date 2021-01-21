import "core-js/stable"; // for polyfilling everything else

class SpinnerComponents {
  _parentElement = document.querySelector("#root");

  markup() {
    return `
        <div class="spinner">
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>        
        </div>
        `;
  }
}

export default new SpinnerComponents();
