class CartComponents {
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
  _cartItemMarkup({ ...item }) {
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
                <button class="u-btn minus-item cart--btn">
                  <span class="fas fa-minus"></span>
                </button>
                <p class="quantity"> 1 </p>
                <button class="u-btn plus-item cart--btn">
                  <span class="fas fa-plus"></span>
                </button>
              </div>

              <button class="u-btn delete__btn cart--btn ">delete</button>
              <button class="u-btn save__btn cart--btn">save for later</button>
            </div>
          </article>
        `;
  }
  // _generateMarkups(cartProducts) {
  //   if (cartProducts === undefined) {
  //     return "cart is empty";
  //   }
  //   const markupList = cartProducts.map((product) =>
  //     this._cartItemMarkup(product)
  //   );
  //   return markupList.join(",");
  // }
}

export default new CartComponents();
