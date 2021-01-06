class GalaryView {
  _productsMarkup(product) {
    const { title, id, imageSource, price } = product;
    return `
         <article class="item">
                <div class="item__container">
                    <img
                        src=${imageSource}
                        alt=""
                        class="item__image ${title}"
                    />
                    <div class="item__btn">
                        <span class="item__btn--search">view ${title}
                          <span class="fas fa-search"></span>
                        </span>
                        <span class="fas fa-shopping-cart item__btn--cart">add to cart</span>
                    </div>
                </div>
                <div class="item__description">
                    <p class="item__name">${title}</p>
                    <p class="item__price">$${price}</p>
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
