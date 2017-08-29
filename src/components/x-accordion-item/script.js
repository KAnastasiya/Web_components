(function () {
  class XAccordionItem extends HTMLElement {
    static get observedAttributes() {
      return ['selected'];
    }

    constructor() {
      super();
      this.onClick = this.onClick.bind(this);

      this.attachShadow({ mode: 'open' });
      const doc = document.currentScript.ownerDocument;
      const temp = doc.querySelector('template');
      const instance = temp.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);

      this.item = this.shadowRoot.querySelector('.item');
      this.header = this.item.querySelector('.header');
    }

    connectedCallback() {
      this.setData();
      this.header.addEventListener('click', this.onClick);
    }

    disconnectedCallback() {
      this.header.removeEventListener('click', this.onClick);
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (newVal) {
        this.item.setAttribute('selected', 'true');
      } else {
        this.item.removeAttribute('selected');
      }
    }

    setData() {
      this.header.querySelector('h5').innerHTML = this.getAttribute('title');
      this.item.querySelector('.details').querySelector('p').innerHTML = this.innerHTML;
      this.selected = !!this.selected;

      const icon = this.getAttribute('icon');
      if (icon) {
        this.header.querySelector('img').src = icon;
      } else {
        this.header.removeChild(this.header.querySelector('.img'));
      }
    }

    onClick() {
      if (!this.selected) {
        this.dispatchEvent(new CustomEvent('change', { bubbles: true }));
      }
    }

    get selected() {
      return this.hasAttribute('selected');
    }

    set selected(value) {
      if (value) {
        this.setAttribute('selected', true);
      } else {
        this.removeAttribute('selected');
      }
    }
  }

  window.customElements.define('x-accordion-item', XAccordionItem);
}());
