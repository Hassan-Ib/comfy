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
  companyFilter(handle) {
    const { companyFilter } = this._DOMElement;
    companyFilter.forEach((btn) => {
      const companyName = btn.innerHTML;
      handle(companyName);
    });
  }
  searchFilter(handle) {
    const { searchFilter } = this._DOMElement;
    searchFilter.addEventListener("changed", () => {
      const filterValue = searchFilter.value;
      handle(filterValue);
    });
  }
  priceFilter(handle) {
    const { priceFilter, priceValue } = this._DOMElement;
    priceFilter.addEventListener("changed", () => {
      const value = priceFilter.value;
      priceValue.innerHTML = `Value : $${value}`;
      handle(value);
    });
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
