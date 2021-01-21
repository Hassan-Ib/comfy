import "core-js/stable";
import imageUrl from "url:../../../images/logo.svg";

class NavigationComponents {
  markup() {
    return `
    <section class="navigation">
      <div class="burger">
        <div class="burger__line"></div>
        <div class="burger__line"></div>
        <div class="burger__line"></div>
      </div>

      <div class="logo">
        <!--<img src=${imageUrl} alt="company logo" id="logo" /> -->
        <span>comfy</span> <br/>
        <span>furniture</span>
      </div>

      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <a  data-route="route"  data-route-to="/" href="/home" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a  data-route="route" data-route-to="/products"  href="/products" class="nav__link">Products</a>
          </li>
          <li class="nav__item">
            <a data-route="route"  data-route-to="/about-Us" href="/about-Us" class="nav__link">About Us</a>
          </li>
        </ul>
        <!-- <span class="fas fa-arrow-left nav-close"></span> -->
      </nav>      
                
      <button class="cart__placeholder u-btn">
        <span class="fas fa-shopping-cart cart__placeholder--icon">
          <span class="cart__quantity cart__placeholder--text">10</span>
        </span>
      </button>
    </section>
                
    `;
  }
}

export default new NavigationComponents();
