export default class Collapsible {
  control;
  region;

  #_expanded = false;

  constructor(control) {
    if (!(control instanceof HTMLElement)) {
      throw new TypeError(`${control} is not an HTMLElement`);
    }

    const value = control.getAttribute('aria-controls');

    if (value === null) {
      throw new Error(`${control} missing required attribute 'aria-controls'`);
    }

    this.control = control;
    /* eslint-disable-next-line unicorn/prefer-query-selector */
    this.region = document.getElementById(value);

    this.setup = this.#setup;
    this.teardown = this.#teardown;
  }

  get #expanded() {
    return this.#_expanded;
  }

  set #expanded(value) {
    this.#_expanded = value;

    this.control.setAttribute('aria-expanded', value);
    this.region[value ? 'removeAttribute' : 'setAttribute']('hidden', true);
  }

  #setup() {
    this.#expanded = false;

    this.control.removeAttribute('hidden');
    this.control.addEventListener('click', this.#toggle.bind(this));

    this.toggle = this.#toggle;
  }

  #teardown() {
    this.#expanded = true;

    this.control.setAttribute('hidden', true);
    this.control.removeEventListener('click', this.#toggle);

    this.toggle = undefined;
  }

  #toggle() {
    this.#expanded = !this.#expanded;
  }
}
