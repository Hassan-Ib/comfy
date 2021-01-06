import GalaryComponets from "../Components/galary";
import View from "../view";
import FrameImgBig from "url:../../../images/frame-big.jpg";
import FrameImgSm1 from "url:../../../images/frame-small-1.jpg";
import FrameImgSm2 from "url:../../../images/frame-small-2.jpg";

import "core-js/stable"; // for polyfilling everything else

class HomeView extends View {
  _parentElement = document.querySelector("#root");

  markup(products) {
    return `
        <section>
            <header class="home__header"> 
                <section class="hero header__hero">
                    <div class="hero__container">
                        <h1 class="hero__text">you’are home unWined relax rest</h1>
                        <h3 class="hero__text-desc">Embrace your choices - we do</h3>
                        <a href="#galary" type="button" class="btn__hero btn">Shop now</a>
                    </div>
                </section>
                <!-- hero__text -->
                <section class="header__frame">
                    <div class="frame frame__big">
                       <img class="picture-frame" src="${FrameImgBig}" alt="Nice furniture frame"/> 
                    </div>

                    <div class="frame frame__small frame__small--1">
                        <img class="picture-frame" src=" ${FrameImgSm1}" alt="Nice furniture frame"/>
                    </div>
                    <div class="frame frame__small frame__small--2">
                       <img class="picture-frame" src="${FrameImgSm2}" alt="Nice furniture frame"/> 
                    </div>
                </section>
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
                        Check more products <span class="fas fa-arrow-right"></span>
                    </a>
                </div>
            </section>
        </section>    
        `;
  }
}

export default new HomeView();
