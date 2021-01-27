import { attributeSelector } from "../../helper";
import View from "../View";
export default class HomeAndProduct extends View {
  _DOMElement = {};

  // constructor() {
  //   super();
  // }

  _getGalaryDOMElement() {
    return {
      ...this._DOMElement,
      itemBtnNodes: attributeSelector(".item__btn"),
    };
  }

  addToCartHandler(handler) {
    const { itemBtnNodes } = this._DOMElement;
    itemBtnNodes.forEach((itemBtn) => {
      itemBtn.addEventListener("click", (e) => {
        const id = itemBtn.dataset.id;
        let btn = e.target.closest(".btn");
        let btnFunction;
        if (btn === null) {
          console.log("btn closest is undefine"); //REMOVE THIS
          return;
        }

        const btnClass = btn.classList;

        if (btnClass.contains("item__btn--cart")) {
          btnFunction = "add-item";
        }

        if (btnClass.contains("item__btn--search")) {
          btnFunction = "view-item";
        }
        handler(id, btnFunction);
      });
    });
  }
}
