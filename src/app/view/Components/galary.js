class GalaryView {
  _productsMarkup(product) {
    return `
         <article class="item">
                <div class="item__container">
                    <img
                        src=${product.imageSource}
                        alt=""
                        class="item__image ${product.title}"
                    />
                    <div class="item__btn">
                        <span class="fas fa-lens"></span>
                        <span class="fas fa-shopping-cart">add to cart</span>
                    </div>
                </div>
                <div class="item__description">
                    <p class="item__name">${product.title}</p>
                    <p class="item__price">${product.price}</p>
                </div>
            </article>
        `;
  }

  _markup(products) {
    const markup = products.map((product) => {
      return this._productsMarkup(product);
    });
    return `
      <div class="grid__parent">
        ${markup.join("")}
      </div>`;
  }
  render(products) {
    return this._markup(products);
  }
}

export default new GalaryView();
