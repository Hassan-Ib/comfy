class GalaryView {
  _markup(product) {
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

  _productMarkup(products) {
    const markup = products.map((product) => {
      return this._markup(product);
    });
    return markup.join("");
  }
  render(products) {
    return `
        <div class="grid__parent">
            ${this._productMarkup(products)}
           
        </div>`;
  }
}

export default new GalaryView();
