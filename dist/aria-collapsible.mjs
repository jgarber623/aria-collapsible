/*!
 *  aria-collapsible v4.0.0
 *
 *  A lightweight, dependency-free JavaScript module for generating progressively-enhanced collapsible regions using ARIA States and Properties.
 *
 *  Source code available at: https://github.com/jgarber623/aria-collapsible
 *
 *  (c) 2015-present Jason Garber (https://sixtwothree.org)
 *
 *  aria-collapsible may be freely distributed under the MIT license.
 */

const removeAttribute = (node, attr) => node.removeAttribute(attr);

const setAttribute = (node, attr, value) => node.setAttribute(attr, value);

class Collapsible {
  constructor(control) {
    const region = document.getElementById(control.getAttribute("aria-controls"));
    if (control && region) {
      this.control = control;
      this.region = region;
      this.setup = this.#setup;
      this.teardown = this.#teardown;
    }
  }
  #handleClick=event => {
    event.preventDefault();
    this.#handleToggle();
  };
  #handleToggle=(control = this.control, region = this.region) => {
    const value = control.getAttribute("aria-expanded") !== "true";
    setAttribute(control, "aria-expanded", value);
    if (value) {
      removeAttribute(region, "aria-hidden");
      region.focus();
    } else {
      setAttribute(region, "aria-hidden", true);
    }
  };
  #setup=(control = this.control, region = this.region) => {
    setAttribute(control, "aria-expanded", false);
    removeAttribute(control, "aria-hidden");
    setAttribute(region, "aria-hidden", true);
    setAttribute(region, "tabindex", -1);
    control.addEventListener("click", this.#handleClick);
    this.toggle = this.#handleToggle;
  };
  #teardown=(control = this.control, region = this.region) => {
    setAttribute(control, "aria-expanded", true);
    setAttribute(control, "aria-hidden", true);
    removeAttribute(region, "aria-hidden");
    removeAttribute(region, "tabindex");
    control.removeEventListener("click", this.#handleClick);
    this.toggle = undefined;
  };
}

export { Collapsible as default };
