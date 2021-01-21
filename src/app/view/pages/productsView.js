import FilterComponents from "../Components/filterView";
import GalaryComponets from "../Components/galaryView";
import "core-js/stable"; // for polyfilling everything else

class ProductsView {
  markup(products) {
    return `
        <section class="product__page">
            ${FilterComponents.markup()}
            ${GalaryComponets.markup(products)}
        </section>
        `;
  }
}

export default new ProductsView();
