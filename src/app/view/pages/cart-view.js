import { attributeSelector } from "../../helper";
import View from "../View";
export default class HomeProduct extends View {
  _DOMElement = {};
  _galaryElement() {
    this._DOMElement = {
      itemBtnNodes: attributeSelector(".item__btn"),
    };
  }
  addToCartHandler(handler) {
    const { itemBtnNodes } = this._DOMElement;
    console.log(itemBtnNodes);
    itemBtnNodes.forEach((itemBtn) => {
      itemBtn.addEventListener("click", (e) => {
        const id = itemBtn.dataset;
        const btn = e.target.closest(".btn");
        handler(id, btn);
      });
    });
  }
}
