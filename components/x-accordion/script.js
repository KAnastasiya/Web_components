(function () {
  window.XAccordion = class XAccordion extends HTMLElement {
    constructor() {
      super();
      this.items = this.querySelectorAll('x-accordion-item');
      this.itemsCount = this.items.length;

      for (let i = 0; i < this.itemsCount; i++) {
        if (this.items[i].hasAttribute('selected')) {
          this.open(this.items[i]);
        }
      }

      this.onItemClick = this.onItemClick.bind(this);
      this.addEventListener('click', this.onItemClick);
    }

    onItemClick(event) {
      if (event.target.tagName === 'X-ACCORDION-ITEM' && !event.target.hasAttribute('selected')) {
        const currentItem = this.querySelector('x-accordion-item[selected]');
        currentItem.shadowRoot.querySelector('.title').classList.remove('open');
        currentItem.shadowRoot.querySelector('.details').classList.remove('open');
        currentItem.removeAttribute('selected');
        this.close(currentItem);
        this.open(event.target);
      }
    }

    open(elem) {
      elem.setAttribute('selected', 'true');
      elem.shadowRoot.querySelector('.title').classList.add('open');
      elem.shadowRoot.querySelector('.details').classList.add('open');
    }

    close(elem) {
      elem.removeAttribute('selected', 'true');
      elem.shadowRoot.querySelector('.title').classList.remove('open');
      elem.shadowRoot.querySelector('.details').classList.remove('open');
    }
  };

  window.customElements.define('x-accordion', window.XAccordion);
}());
