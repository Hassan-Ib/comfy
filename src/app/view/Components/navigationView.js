import "core-js/stable";
import imageUrl from "url:../../../images/logo.svg";
// import icons from 'url:../../img/icons.svg'; // parcel 2

class NavigationComponents {
  _navDomElement() {
    return {
      navigation: classSelector("navigation"),
      linkList: classSelector("nav"),
      cartContainer: classSelector("cart__container"),
      openCartBtn: classSelector("cart-placeholder"),
      closeCartBtn: classSelector("cart--close"),
      burger: classSelector("burger"),
    };
  }

  _classToggle(element, className) {
    const containClassName = element.classList.contains(className);
    !containClassName
      ? element.classList.add(className)
      : element.classList.remove(className);
  }
  cartHandler(DOMElements) {
    const cartContainer = DOMElements.cartContainer;
    const domElement = [DOMElements.openCartBtn, DOMElements.closeCartBtn];
    domElement.forEach((element) => {
      element.addEventListener("click", () => {
        this._classToggle(cartContainer, "cart--open");
      });
    });
  }

  _burgerHandler(DOMElements) {
    DOMElements.burger.addEventListener("click", () => {
      this._classToggle(DOMElements.burger, "toggle");
      this._classToggle(DOMElements.linkList, "navtoggle");
      console.log("burger Click nav 37");
    });
  }
  navHandler() {
    const domElement = this._navDomElement();
    console.log(domElement, "nav 42");
    this._burgerHandler(domElement);
    this.cartHandler(domElement);
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
            <a href="#home" class="nav__link">Home</a>
          </li>
          <li class="nav__item">
            <a href="#products" class="nav__link">Products</a>
          </li>
          <li class="nav__item">
            <a href="#about-Us" class="nav__link">About Us</a>
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

export default new NavigationComponents();

function classSelector(className) {
  return document.querySelector(`.${className}`);
}
