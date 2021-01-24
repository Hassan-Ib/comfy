import FilterComponents from "../Components/filterView";
import GalaryComponets from "../Components/galaryView";
import "core-js/stable"; // for polyfilling everything else
import { classSelector, attributeSelector } from "../../helper";
import View from "../View";

class ProductsView extends View {
  _DOMElement = {};
  _getDOMElement() {
    this._DOMElement = {
      itemBtnNodes: attributeSelector(".item__btn"),
    };
  }
  addToCartHandler(handler) {
    const { itemBtnNodes } = this._DOMElement;
    itemBtnNodes.forEach((itemBtn) => {
      itemBtn.addEventListener("click", (e) => {
        const id = itemBtn.dataset;
        handler(id);
      });
    });
  }

  _markup(products) {
    return `
        <section class="product__page">
            ${FilterComponents.markup()}
            ${GalaryComponets.markup(products)}
        </section>
        `;
  }
}

export default new ProductsView();
