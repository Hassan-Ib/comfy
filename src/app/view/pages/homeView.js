import "core-js/stable"; // for polyfilling everything else
import GalaryComponets from "../Components/galaryView";
import FrameImgBig from "url:../../../images/frame-big.jpg";
import FrameImgSm1 from "url:../../../images/frame-small-1.jpg";
import FrameImgSm2 from "url:../../../images/frame-small-2.jpg";
import HomeAndProduct from "./PagesWithGalary";
import { classSelector, attributeSelector } from "../../helper";

class HomeView extends HomeAndProduct {
  constructor() {
    super();
  }
  _getDOMElement() {
    this._DOMElement = {
      ...this._getGalaryDOMElement(),
      linkBtn: this._parentElement.querySelector(`[data-route='route']`),
    };
  }

  _markup(products) {
    return `
            <main id="home">
                <header class="home__header"> 
                    <section class="hero header__hero">
                        <div class="hero__container">
                            <h1 class="hero__text">you’are home unWined relax rest</h1>
                            <h3 class="hero__text-desc">Embrace your choices - we do</h3>
                            <a href="#products" class="u-btn hero__btn">Shop now</a>
                        </div>
                    </section>
                    <!-- hero__text -->
                    <section class="header__frame">
                        <div class="frame__component">
                            <div class="frame frame__big">
                                <img class="u-picture-frame" src="${FrameImgBig}" alt="Nice furniture frame"/> 
                            </div>
                            
                            <div class="frame frame__small frame__small--1">
                                <img class="u-picture-frame" src=" ${FrameImgSm1}" alt="Nice furniture frame"/>
                            </div>
                            <div class="frame frame__small frame__small--2">
                                <img class="u-picture-frame" src="${FrameImgSm2}" alt="Nice furniture frame"/> 
                            </div>
                        </div>
                    </section>
                </header>
                <section id="products">
                    <div class="u-section__title">
                        <h3 class="title">
                            we feature products that makes home really feels like home
                        </h3>
                    </div>
                    ${GalaryComponets.markup(products)}
                    <div class="see__more u-center">
                        <a data-route="route"  data-route-to="/products" href="products">
                        Check more products <span class="fas fa-arrow-right"></span>
                        </a>
                    </div>
                </section>    
            </main>
        `;
  }
}

export default new HomeView();
