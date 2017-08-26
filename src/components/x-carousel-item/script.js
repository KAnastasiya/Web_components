(function () {
  class XCarouselItem extends HTMLElement {
    static get observedAttributes() {
      return ['selected'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      const doc = document.currentScript.ownerDocument;
      const temp = doc.querySelector('template');
      const instance = temp.content.cloneNode(true);
      this.shadowRoot.appendChild(instance);

      this.item = this.shadowRoot.querySelector('figure');
    }

    connectedCallback() {
      this.setData();
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (newVal) {
        this.item.setAttribute('selected', 'true');
      } else {
        this.item.removeAttribute('selected');
      }
    }

    setData() {
      this.item.querySelector('blockquote').innerHTML = this.innerHTML;
      this.item.querySelector('cite').innerHTML = this.getAttribute('author');
      this.selected = !!this.selected;

      const icon = this.getAttribute('icon');
      if (icon) {
        this.item.querySelector('img').src = icon;
      } else {
        this.item.removeChild(this.item.querySelector('.img'));
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

    set mobile(value) {
      if (value) {
        this.setAttribute('mobile', true);
      } else {
        this.removeAttribute('mobile');
      }
    }
  }

  window.customElements.define('x-carousel-item', XCarouselItem);
}());
