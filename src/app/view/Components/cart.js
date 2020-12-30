class CartComponents {
  _generateCartItems(items) {
    return `
            <article class="cart__item">
            <div class="item--grid">
              <div class="cart__item--img">
                <img src="./images/product-1.jpeg" alt="#" class="cart--img" />
              </div>
              <div class="cart__item--desc">
                <p class="cart__item--title">queen size bed</p>
                <p class="cart__item--price">$40.99</p>
              </div>
            </div>
            <div class="cart__item--control">
              <div class="cart__item--quantity">
                <button class="minus-item cart--btn">
                  <span class="fas fa-minus"></span>
                </button>
                <span class="quantity"> 1 </span>
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
  _markup() {
    return `
            <section class="cart__container">
              <section class="cart__items">
              ${this._generateCartItems()}
              </section>
              <section class="later__items">
              </section>
              <span class="fas fa-times cart--close"></span>
            </section>
        `;
  }
  render() {
    return this._markup();
  }
}

export default new CartComponents();

`

 <section class="cart__container cart--open">
        <section class="cart__items">
          
          <article class="cart__item">
            <div class="item--grid">
              <div class="cart__item--img">
                <img src="./images/product-1.jpeg" alt="#" class="cart--img" />
              </div>
              <div class="cart__item--desc">
                <p class="cart__item--title">queen size bed</p>
                <p class="cart__item--price">$40.99</p>
              </div>
            </div>
            <div class="cart__item--control">
              <div class="cart__item--quantity">
                <button class="plus-item">
                  <span class="fas fa-minus"></span>
                </button>
                <span class="quantity"> 1 </span>
                <button class="plus-item">
                  <span class="fas fa-plus"></span>
                </button>
              </div>

              <button class="delete__btn">delete</button>
              <button class="save__btn">save for later</button>
            </div>
          </article>
        </section>
        <section class="later__items">
          <article class="cart__item">
            <div class="item--grid">
              <div class="cart__item--img">
                <img src="./images/product-1.jpeg" alt="#" class="cart--img" />
              </div>
              <div class="cart__item--desc">
                <p class="cart__item--title">queen size bed</p>
                <p class="cart__item--price">$40.99</p>
              </div>
            </div>
            <div class="cart__item--control">
              <div class="cart__item--quantity">
                <button class="plus-item">
                  <span class="fas fa-minus"></span>
                </button>
                <span class="quantity"> 1 </span>
                <button class="plus-item">
                  <span class="fas fa-plus"></span>
                </button>
              </div>

              <button class="delete__btn">delete</button>
              <button class="save__btn">save for later</button>
            </div>
          </article>
        </section>
        <span class="fas fa-times"></span>
      </section>
`;
