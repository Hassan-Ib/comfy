import NavigationView from "./navigationView";
import GalaryView from "./galary";
import View from "./view";

class HomeView extends View {
  _parentElement = document.querySelector("#root");

  _markup(products) {
    return `
        <section id="Home">
            <header class="home__header"> 
                ${NavigationView.render()}
                <section class="hero">
                    <div class="hero__container">
                        <h1 class="hero__text">rest, relax, unwind</h1>
                        <h3 class="hero__text-desc">Embrace your choices - we do</h3>
                        <a href="#" type="button" class="btn__hero btn">Shop now</a>
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
                ${GalaryView.render(products)}
                <div class="see__more">
                    <a href="#product">
                        See more products <span class="fas fa-arrow-right"></span>
                    </a>
                </div>
            </section>
        </section>    
        `;
  }
  //   render(products) {
  //     let data = products.slice();
  //     let markup = this._markup(data);
  //     this._parentElement.innerHTML = "";
  //     this._parentElement.insertAdjacentHTML("afterbegin", markup);
  //   }
}

export default new HomeView();
