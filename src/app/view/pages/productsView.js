import FilterComponents from "../Components/filterView";
import GalaryComponets from "../Components/galaryView";
import "core-js/stable"; // for polyfilling everything else
import { classSelector, attributeSelector } from "../../helper";
import pagesWithProductsView from "../PagesProducts";

class ProductsView extends pagesWithProductsView {
  constructor() {
    super();
  }
  _getDOMElement() {
    this._DOMElement = {
      ...this._getGalaryDOMElement(),
      companyFilter: attributeSelector(".companies-btn"),
      searchFilter: classSelector(".search-input"),
      priceFilter: classSelector(".price-filter"),
      priceValue: classSelector(".price-value"),
    };
  }

  _markup(products) {
    return `
        <section class="product__page">
            ${FilterComponents.markup()}
            ${GalaryComponets.markup(products)}
        </section>
        `;
  }
}

export default new ProductsView();
