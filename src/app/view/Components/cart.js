class Cart {
  _generateCartItems(items) {
    return `
            <article class="cart__item">
                div.cartItem
            </article>
        `;
  }
  _markup() {
    return `
            <section class="cart__container">
                ${this._generateCartItems()}
            </section>
        
        `;
  }
  render() {
    return this._markup();
  }
}

export default new Cart();
