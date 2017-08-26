(function () {
  class XCarousel extends HTMLElement {
    static get observedAttributes() {
      return ['mobile'];
    }

    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      const doc = document.currentScript.ownerDocument;
      const temp = doc.querySelector('template');
      const instance = temp.content.cloneNode(true);
      shadowRoot.appendChild(instance);

      this.item = this.shadowRoot.querySelector('.carousel');
      this.prevBtn = this.item.querySelector('.btn--prev');
      this.nextBtn = this.item.querySelector('.btn--next');
    }

    connectedCallback() {
      this.childTagName = 'x-carousel-item';
      this.maxMobileWidth = 1210; // px
      this.addEventListener('change', this.onChange);

      Promise.all([customElements.whenDefined(this.childTagName)])
        .then(() => {
          const selectedItem = this.items.find(item => item.hasAttribute('selected'));
          if (!selectedItem) {
            this.items[0].selected = true;
          }

          if (this.items.length > 1) {
            this.prevBtn.addEventListener('click', this.onPrevClick.bind(this));
            this.nextBtn.addEventListener('click', this.onNextClick.bind(this));
          } else {
            this.prevBtn.style.display = 'none';
            this.nextBtn.style.display = 'none';
          }

          this.onResize();
        });

      window.addEventListener('resize', this.onResize.bind(this));
    }

    disconnectedCallback() {
      this.removeEventListener('change', this.onChange);
    }

    attributeChangedCallback(name, oldVal, newVal) {
      this.items.map((elem) => {
        const item = elem;
        return (item.mobile = !!newVal);
      });
    }

    unselectAll() {
      this.items.forEach((elem) => {
        const item = elem;
        item.selected = false;
      });
    }

    select(item) {
      this.unselectAll();
      this.constructor.selectedItem(item);
    }

    onChange(event) {
      this.select(event.target);
    }

    onPrevClick() {
      this.select(this.prevItem);
    }

    onNextClick() {
      this.select(this.nextItem);
    }

    onResize() {
      if (window.matchMedia(`(max-width: ${this.maxMobileWidth}px)`).matches) {
        this.mobile = true;
      } else {
        this.mobile = false;
      }
    }

    get items() {
      return Array.from(this.querySelectorAll(this.childTagName));
    }

    get selectedIndex() {
      return this.items.findIndex(item => item.hasAttribute('selected'));
    }

    get prevItem() {
      const prevIndex = (this.selectedIndex === 0) ? (this.items.length - 1) : (this.selectedIndex - 1);
      return this.items[prevIndex];
    }

    get nextItem() {
      const nextIndex = (this.selectedIndex >= this.items.length - 1) ? 0 : (this.selectedIndex + 1);
      return this.items[nextIndex];
    }

    set mobile(value) {
      if (value) {
        this.setAttribute('mobile', true);
      } else {
        this.removeAttribute('mobile');
      }
    }

    static selectedItem(elem) {
      const item = elem;
      item.selected = true;
    }
  }

  window.customElements.define('x-carousel', XCarousel);
}());
