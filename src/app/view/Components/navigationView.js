import "core-js/stable";
import imageUrl from "url:../../../images/comfy-logo.png";
// import icons from 'url:../../img/icons.svg'; // parcel 2

class NavigationView {
  navHandler() {
    const burgerParent = document.querySelector(".burger");
    const navParent = document.querySelector(".nav");
    burgerParent.addEventListener("click", () => {
      // console.log(burgerParent);
      burgerParent.classList.toggle("toggle");
      navParent.classList.toggle("navtoggle");
    });
  }
  _markup() {
    return `
    <section class="navigation">
      <div class="burger">
        <div class="burger__line"></div>
        <div class="burger__line"></div>
        <div class="burger__line"></div>
      </div>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#Home" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#Products" class="nav__link">Products</a>
          </li>
          <li class="nav__item">
            <a href="#About-Us" class="nav__link">About Us</a>
          </li>
        </ul>
        <!-- <span class="fas fa-arrow-left nav-close"></span> -->
      </nav>
                
      <figure class="logo">
        <img src=${imageUrl} alt="company logo" id="logo" /> 
        <!--<h1 id="logo">comfy</h1>-->
      </figure>
                
      <section class="cart-placeholder">
        <span class="fas fa-shopping-cart">
          <span class="cart__quantity">10</span>
        </span>
      </section>
    </section>
                
    `;
  }

  render() {
    return this._markup();
  }
}

export default new NavigationView();
