import { attributeSelector } from "../helper";
import View from "./View";
export default class HomeAndProduct extends View {
  _DOMElement = {};

  _getGalaryDOMElement() {
    return {
      ...this._DOMElement,
      itemBtnNodes: attributeSelector(".item__btn"),
    };
  }

  addProductToCartHandler(handler) {
    const { itemBtnNodes } = this._DOMElement;
    itemBtnNodes.forEach((button) => {
      button.addEventListener("click", (e) => {
        const buttonId = button.dataset.id;
        let targetBtn = e.target.closest(".btn");
        if (targetBtn === null) {
          console.log("btn closest is undefine"); //REMOVE THIS
          return;
        }
        const btnClass = targetBtn.classList;
        const btnFunction = this._getBtnFunction(btnClass);
        if (!btnFunction) return;
        handler(buttonId, btnFunction);
      });
    });
  }
  _getBtnFunction(btnClass) {
    let btnFunction;
    if (btnClass.contains("item__btn--cart")) {
      btnFunction = "add-item";
    }

    if (btnClass.contains("item__btn--search")) {
      btnFunction = "view-item";
    }
    return btnFunction;
  }
  itemMarkup({ imageSource, title, price }) {
    return `<section>  
              <div class="imgContainer">
                <img src="{imageSource}" alt="{title}"/>
              </div>
          
          <div class="closebtn">
                
          </div>
    
    </section> `;
  }
  renderItemView() {}
}
