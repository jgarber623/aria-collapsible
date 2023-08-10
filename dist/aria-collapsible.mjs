/*!
 *  aria-collapsible v5.0.0
 *
 *  A lightweight, dependency-free JavaScript module for generating progressively-enhanced collapsible regions using ARIA States and Properties.
 *
 *  Source code available at: https://github.com/jgarber623/aria-collapsible
 *
 *  (c) 2015-present Jason Garber (https://sixtwothree.org)
 *
 *  aria-collapsible may be freely distributed under the MIT license.
 */
const attrs = {
  _get: (node, attr) => node.getAttribute(attr),
  _set: (node, attr, value) => node.setAttribute(attr, value),
  _remove: (node, attr) => node.removeAttribute(attr),
  ariaControls: "aria-controls",
  ariaExpanded: "aria-expanded",
  hidden: "hidden"
};

const handleClick = (control, region) => {
  const value = attrs._get(control, attrs.ariaExpanded) !== "true";
  attrs._set(control, attrs.ariaExpanded, value);
  if (value) {
    attrs._remove(region, attrs.hidden);
  } else {
    attrs._set(region, attrs.hidden, true);
  }
};

const handleSetup = (control, region) => {
  attrs._set(control, attrs.ariaExpanded, false);
  attrs._remove(control, attrs.hidden);
  attrs._set(region, attrs.hidden, true);
};

const handleTeardown = (control, region) => {
  attrs._set(control, attrs.ariaExpanded, true);
  attrs._set(control, attrs.hidden, true);
  attrs._remove(region, attrs.hidden);
};

class Collapsible {
  constructor(control) {
    const region = document.getElementById(attrs._get(control, attrs.ariaControls));
    if (control && region) {
      this.control = control;
      this.region = region;
      this.setup = this.#setup;
      this.teardown = this.#teardown;
    }
  }
  #click=() => handleClick(this.control, this.region);
  #setup=() => {
    const {control: control, region: region} = this;
    handleSetup(control, region);
    control.addEventListener("click", this.#click.bind(this));
    this.toggle = this.#click;
  };
  #teardown=() => {
    const {control: control, region: region} = this;
    handleTeardown(control, region);
    control.removeEventListener("click", this.#click);
    this.toggle = undefined;
  };
}

export { Collapsible as default };
