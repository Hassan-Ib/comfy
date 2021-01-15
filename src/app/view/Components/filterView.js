class FilterComponents {
  _markup() {
    return `<section name="filter" class="filter">
                <div class="filters-container">
          <!-- search -->
                <form class="input-form">
                  <input type="text" class="search-input" placeholder="search...">
                </form>
          <!-- categories -->
          <h4>Company</h4>
          <article class="companies"> 
            <button class="companies--btn">all</button> 
            <button class="companies--btn">ikea</button> 
            <button class="companies--btn">marcos</button> 
            <button class="companies--btn">caressa</button> 
            <button class="companies--btn">liddy</button>
          </article>
          <!-- price -->
          <h4>Price</h4>
          <form class="price-form">
            <input type="range" class="price-filter" min="0" value="50" max="80">
          </form>
          <p class="price-value">Value : $80</p>
        </div>
            </section>
    `;
  }

  render() {
    return this._markup();
  }
}

export default new FilterComponents();
