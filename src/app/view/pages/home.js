import NavigationComponents from "../Components/navigationView";
import GalaryComponets from "../Components/galary";
import View from "../view";

import "core-js/stable"; // for polyfilling everything else

class HomeView extends View {
  _parentElement = document.querySelector("#root");

  markup(products) {
    return `
        <section id="home">
            <header class="home__header"> 
                ${NavigationComponents.render()}
                <section class="hero">
                    <div class="hero__container">
                        <h1 class="hero__text">rest, relax, unwind</h1>
                        <h3 class="hero__text-desc">Embrace your choices - we do</h3>
                        <a href="#galary" type="button" class="btn__hero btn">Shop now</a>
                    </div>
                </section>
                <!-- hero__text -->
            </header>
            <section id="galary">
                <div class="section__title">
                    <h3 class="title">
                        we feature products that makes home really feels like home
                    </h3>
                </div>
                ${GalaryComponets.render(products)}
                <div class="see__more">
                    <a href="#products">
                        See more products <span class="fas fa-arrow-right"></span>
                    </a>
                </div>
            </section>
        </section>    
        `;
  }
  // render(products) {
  //   let data = products.slice();
  //   let markup = this._markup(data);
  //   this._parentElement.innerHTML = "";
  //   this._parentElement.insertAdjacentHTML("afterbegin", markup);
  // }
}

export default new HomeView();
