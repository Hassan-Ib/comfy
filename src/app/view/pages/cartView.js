import { classSelector, attributeSelector } from "../../helper";
import View from "../View";
class CartComponents extends View {
  _parentElement = classSelector("#cart__items--container");
  _DOMElement = {
    totalCartPrice: classSelector("#total-items-price"),
    totalCartItems: attributeSelector(".items-in-cart"),
  };

  populateCart(cart) {
    const { numberOfItemsInCart, items, totalCartPrice } = cart;
    this._setTotalNumberOfCartItem(numberOfItemsInCart);
    this._setTotalPriceOfCartItems(totalCartPrice);
    this.render(items);
  }
  addCartEventItemHandlers({
    deleteItemHandler,
    saveItemHandler,
    increaseItemHandler,
    decreaseItemHandler,
  }) {
    this._parentElement.addEventListener("click", (e) => {
      const targetElement = e.target;
      const isDeleteBtn = targetElement.classList.contains("delete__btn");
      const isSaveBtn = targetElement.classList.contains("save__btn");
      const isIncreaseBtn = targetElement.classList.contains("plus-item");
      const isDecreaseBtn = targetElement.classList.contains("minus-item");
      // console.log(targetElement);
      if (!isDecreaseBtn && !isDeleteBtn && !isIncreaseBtn && !isSaveBtn)
        return;

      const itemId = targetElement.closest("[data-id]").dataset.id;
      if (isDeleteBtn) {
        deleteItemHandler(itemId);
      }
      if (isSaveBtn) {
        saveItemHandler(itemId);
      }
      if (isIncreaseBtn) {
        increaseItemHandler(itemId);
      }
      if (isDecreaseBtn) {
        decreaseItemHandler(itemId);
      }
    });
  }
  _generateCartItems(items) {
    let generatedMarkup = items
      .map((item) => this._cartItemMarkup({ ...item }))
      .join("");
    return `${generatedMarkup}`;
  }
  _markup(items) {
    const markup = this._generateCartItems(items);
    return markup;
  }
  _setTotalNumberOfCartItem(value) {
    const { totalCartItems } = this._DOMElement;
    totalCartItems.forEach((tag) => (tag.innerHTML = value));
  }
  _setTotalPriceOfCartItems(value) {
    const { totalCartPrice } = this._DOMElement;
    totalCartPrice.innerHTML = `Price: $ ${value}`;
  }

  _cartItemMarkup({ id, imageSource, title, price, quantity }) {
    return `
            <article class="cart__item" data-id=${id}>
            <div class="item--grid">
              <div class="cart__item--img">
                <img src=${imageSource} />
              </div>
              <div class="cart__item--desc">
                <p class="cart__item--title">${title}</p>
                <p class="cart__item--available">in stuck</p>
                <p class="cart__item--price">$${price}</p>
              </div>
            </div>
            <div class="cart__item--control">
              <div class="cart__item--quantity">
                <button class="u-btn minus-item cart--btn fas fa-minus">
                </button>
                <p class="quantity"> ${quantity} </p>
                <button class="u-btn plus-item cart--btn fas fa-plus">
                </button>
              </div>

              <button class="u-btn delete__btn cart--btn ">delete</button>
              <button class="u-btn save__btn cart--btn">save for later</button>
            </div>
          </article>
        `;
  }
}

export default new CartComponents();
