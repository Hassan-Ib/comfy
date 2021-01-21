class AboutView {
  markup() {
    return `
            <section>
                <article>
                    <h3>this page tells all you need to know about us</h3>
                    <a href="/products"> go back to products</a>
                </article>
            </section>
        `;
  }
}
export default new AboutView();
