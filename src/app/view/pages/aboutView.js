import { classSelector } from "../../helper";
import View from "../View";
class AboutView extends View {
  constructor() {
    super();
  }
  _DOMElement = {};
  _getDOMElement() {
    this._DOMElement = {
      linkBtn: classSelector(".back-home"),
    };
  }
  _markup() {
    return `
            <section>
                <article class="u-center">
                    <h3>this page tells all you need to know about us</h3>
                    <a class="u-center back-home" data-route="route" data-route-to="/" href="/home"> go back to products</a>
                </article>
            </section>
        `;
  }
}
export default new AboutView();
