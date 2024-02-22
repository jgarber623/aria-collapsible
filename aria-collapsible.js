export default class AriaCollapsible extends HTMLElement {
  static tagName = "aria-collapsible";

  static observedAttributes = ["open"];

  static register(tagName = this.tagName, registry = globalThis.customElements) {
    registry?.define(tagName, this);
  }

  #configured = false;

  #open;

  #control;
  #regions;

  constructor() {
    super();

    this.#control = this.querySelector("[control]");
    this.#regions = this.querySelectorAll("[region]");

    this.#configured = this.#control && this.#regions.length;
  }

  #toggle() {
    this.#control.setAttribute("aria-expanded", this.open);

    for (const region of this.#regions) {
      region.toggleAttribute("hidden", !this.open);
    }
  }

  get open() {
    return Boolean(this.#open);
  }

  set open(value) {
    this.toggleAttribute("open", Boolean(value));
  }

  attributeChangedCallback(name, _oldValue, _newValue) {
    if (!this.constructor.observedAttributes.includes(name)) return;

    this.#open = this.hasAttribute("open");

    this.#toggle();
  }

  connectedCallback() {
    if (!this.#configured) return;

    this.#control.addEventListener("click", this);

    const regionIds = [];

    for (const region of this.#regions) {
      if (!region.id) {
        region.setAttribute("id", `region-${globalThis.crypto.randomUUID()}`);
      }

      regionIds.push(region.id);
    }

    this.#control.setAttribute("aria-controls", regionIds.join(" "));
    this.#control.removeAttribute("hidden");

    this.#toggle();
  }

  disconnectedCallback() {
    if (!this.#configured) return;

    this.#control.removeEventListener("click", this);

    this.#control.removeAttribute("aria-controls");
    this.#control.setAttribute("hidden", true);

    this.#toggle();
  }

  handleEvent(event) {
    event.preventDefault();

    this.open = !this.open;
  }
}

AriaCollapsible.register();
