class CartComponents {
  _generateLaterItems(items) {
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
              <button class="delete__btn cart--btn">delete</button>
              <button class="save__btn cart--btn">move to </button>
            </div>
          </article>
        `;
  }
  _generateCartItems(items) {
    return `
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
            <div class="cart__item--control">
              <div class="cart__item--quantity">
                <button class="minus-item cart--btn">
                  <span class="fas fa-minus"></span>
                </button>
                <p class="quantity"> 1 </p>
                <button class="plus-item cart--btn">
                  <span class="fas fa-plus"></span>
                </button>
              </div>

              <button class="delete__btn cart--btn">delete</button>
              <button class="save__btn cart--btn">save for later</button>
            </div>
          </article>
        `;
  }
  _quickIlter(generateMarkup) {
    let mark = "";
    for (let i = 0; i < 6; i++) {
      mark += generateMarkup();
    }
    return mark;
  }
  _markup() {
    return `<div class="cart__overlay">
              <section class="cart__container">
                <div class="cart__container--header">
                  <h4 class="title">total items in cart : (<span id="items-in-cart">10</span> items) : <span id="total-items-price">$1,500.00</span> </h4>
                  <button class="btn--big btn">proceed to checkout</button>
                </div>

                <section class="cart__items">
                    ${this._quickIlter(this._generateCartItems)}
                </section>
                <section class="later__items">
                </section> 
                <span class="fas fa-times cart--close"></span>
              </section>
            </div>
        `;
  }
  render() {
    return this._markup();
  }
}

export default new CartComponents();
