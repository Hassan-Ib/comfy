import { classSelector } from "../../helper";
import View from "../View";
import { classSelector } from "../../helper";
class LaterItemView extends View {
  _parentElement = classSelector("#later__items--container");
  _laterItemsMarkup(items) {
    return `
            <div class="later__container--header">
                  <h4 class="title">total items in cart : (<span id="items-in-cart">10</span> items)</h4>
            </div>
            <article class="cart__item">
            <div class="item--grid">
              <div class="cart__item--img">
                <img src="./images/product-1.jpeg" alt="#" class="cart--img" />
              </div>
              <div class="cart__item--desc">
                <p class="cart__item--title">queen size bed</p>
                <p class="cart__item--available">in stuck</p>
                <p class="cart__item--price">$40.99</p>
              </div>
            </div>

              <button class="u-btn delete__btn cart--btn ">delete</button>
              <button class="u-btn save__btn cart--btn">save for later</button>
            </div>
          </article>
        `;
  }
}
