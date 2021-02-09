import { classSelector } from "../../helper";
import View from "../View";
class LaterItemView extends View {
  _parentElement = classSelector("#later__items--container");

  populate(laterData) {
    const { items } = laterData;
    const laterQuantity = items.length;
    if (laterQuantity > 0) {
      this.render(items);
    }
  }
  addLaterEventItemHandlers({ deleteItemHandler, saveItemHandler }) {
    this._parentElement.addEventListener("click", (e) => {
      const targetElement = e.target;
      const isDeleteBtn = targetElement.classList.contains("delete__btn");
      const isMoveBtn = targetElement.classList.contains("move--cart");
      if (!isDeleteBtn && !isMoveBtn) return;

      const itemId = targetElement.closest("[data-id]").dataset.id;
      if (isDeleteBtn) {
        deleteItemHandler(itemId);
      }
      if (isMoveBtn) {
        saveItemHandler(itemId);
      }
    });
  }
  _generateLaterItems(items) {
    let generatedMarkup = items
      .map((item) => this._LaterItemsMarkup({ ...item }))
      .join("");
    return `
    <div class="later__container--header">
      <h4 class="title">total items in cart : (<span id="items-in-later">10</span> items)</h4>
    </div>
    ${generatedMarkup}`;
  }
  _markup(items) {
    const markup = this._generateCartItems(items);
    return markup;
  }

  _laterItemsMarkup({ id, imageSource, title, price }) {
    return `
        <article class="cart__item" data-id=${id}>
            
            <div class="item--grid">
              <div class="cart__item--img">
                <img src="${imageSource}" alt="${title}" class="cart--img" />
              </div>
              <div class="cart__item--desc">
                <p class="cart__item--title">${title}</p>
                <p class="cart__item--available">in stuck</p>
                <p class="cart__item--price">${price}</p>
              </div>
            </div>

              <button class="u-btn delete__btn cart--btn ">delete</button>
              <button class="u-btn save__btn cart--btn move--cart">move to cart</button>
            </div>
          </article>
        `;
  }
}

export default new LaterItemView();
