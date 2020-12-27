import View from "../view";
import NavigationComponents from "../Components/navigationView";
import FilterComponents from "../Components/filterView";
import GalaryComponets from "../Components/galary";
class ProductsView extends Veiw {
  _parentElement = document.querySelector("#root");

  _markup(products) {
    return `
        <section>
            ${NavigationComponents()}
            ${FilterComponents()}
            ${GalaryComponets(products)}
        </section>
        
        `;
  }
}
