const ariaExpanded = 'aria-expanded';
const ariaHidden = 'aria-hidden';

const removeAttribute = (node, attr) => node.removeAttribute(attr);
const setAttribute = (node, attr, value) => node.setAttribute(attr, value);

export default class Collapsible {
  constructor(control) {
    const region = document.getElementById(control.getAttribute('aria-controls'));

    if (control && region) {
      this.control = control;
      this.region = region;

      this.setup = this.#setup;
      this.teardown = this.#teardown;
    }
  }

  #handleClick = (event) => {
    event.preventDefault();

    this.#handleToggle();
  };

  #handleToggle = (control = this.control, region = this.region) => {
    const value = control.getAttribute(ariaExpanded) !== 'true';

    setAttribute(control, ariaExpanded, value);

    if (value) {
      removeAttribute(region, ariaHidden);
      region.focus();
    } else {
      setAttribute(region, ariaHidden, true);
    }
  };

  #setup = (control = this.control, region = this.region) => {
    setAttribute(control, ariaExpanded, false);
    removeAttribute(control, ariaHidden);

    setAttribute(region, ariaHidden, true);
    setAttribute(region, 'tabindex', -1);

    control.addEventListener('click', this.#handleClick);

    this.toggle = this.#handleToggle;
  };

  #teardown = (control = this.control, region = this.region) => {
    setAttribute(control, ariaExpanded, true);
    setAttribute(control, ariaHidden, true);

    removeAttribute(region, ariaHidden);
    removeAttribute(region, 'tabindex');

    control.removeEventListener('click', this.#handleClick);

    this.toggle = undefined;
  };
}
