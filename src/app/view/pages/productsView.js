// import View from "../view";
import NavigationComponents from "../Components/navigationView";
import FilterComponents from "../Components/filterView";
import GalaryComponets from "../Components/galary";
import "core-js/stable"; // for polyfilling everything else

class ProductsView {
  _markup(products) {
    return `
        <section>
            ${NavigationComponents.render()}
            ${FilterComponents.render()}
            <section id="galary">
                ${GalaryComponets.render(products)}
            </section>
            
        </section>
        
        `;
  }
  render(products) {
    return this._markup(products);
  }
}

export default new ProductsView();
