class GalaryView {
  _productsMarkup(product) {
    const { title, id, imageSource, price } = product;
    return `

         <article class="item">
                <div class="item__container">
                    <img
                        src=${imageSource}
                        alt=${title}
                        class="item__image"
                    />
                    <div class="item__btn">
                        <button class="item__btn--search u-btn">
                           <span class="fas fa-search"></span>
                        </button>
                        <button  class="item__btn--cart u-btn">
                          <span class="fas fa-shopping-cart"></span> 
                        </button>
                    </div>
                </div>
                <div class="item__description">
                    <p class="item__name">${title}</p>
                    <p class="item__price">$${price}</p>
                </div>
            </article>
        `;
  }

  markup(products) {
    const markup = products.map((product) => {
      return this._productsMarkup(product);
    });
    return `
      <div class="grid__parent">
        ${markup.join("")}
      </div>`;
  }
}

export default new GalaryView();
