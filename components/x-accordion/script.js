(function () {
  class XAccordion extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const doc = document.currentScript.ownerDocument;
      const temp = doc.querySelector('template');
      const instance = temp.content.cloneNode(true);
      shadowRoot.appendChild(instance);
    }

    connectedCallback() {
      this.childTagName = 'x-accordion-item';
      this.addEventListener('change', this.onChange);

      Promise.all([customElements.whenDefined(this.childTagName)])
        .then(() => {
          const selectedItem = this.items.find(item => item.hasAttribute('selected'));
          if (!selectedItem) {
            this.items[0].selected = true;
          }

          const styles = getComputedStyle(this.items[0]);
          const headerMarginBottom = styles.getPropertyValue('--accordion-header-margin-bottom');
          if (parseInt(headerMarginBottom) < 0) {
            const borderColor = styles.getPropertyValue('--accordion-border-color');
            this.style.borderBottom = `1px solid ${borderColor}`;
          }
        });
    }

    disconnectedCallback() {
      this.removeEventListener('change', this.onChange);
    }

    closeAll() {
      this.items.forEach((elem) => {
        const item = elem;
        item.selected = false;
      });
    }

    open(item) {
      this.closeAll();
      this.constructor.openSelected(item);
    }

    onChange(event) {
      this.open(event.target);
    }

    get items() {
      return Array.from(this.querySelectorAll(this.childTagName));
    }

    static openSelected(elem) {
      const item = elem;
      item.selected = true;
    }
  }

  window.customElements.define('x-accordion', XAccordion);
}());
