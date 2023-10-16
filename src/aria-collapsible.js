const attributes = {
  _get: (node, attribute) => node.getAttribute(attribute),
  _set: (node, attribute, value) => node.setAttribute(attribute, value),
  _remove: (node, attribute) => node.removeAttribute(attribute),
  ariaControls: 'aria-controls',
  ariaExpanded: 'aria-expanded',
  hidden: 'hidden'
};

const handleClick = (control, region) => {
  const value = attributes._get(control, attributes.ariaExpanded) !== 'true';

  attributes._set(control, attributes.ariaExpanded, value);

  if (value) {
    attributes._remove(region, attributes.hidden);
  } else {
    attributes._set(region, attributes.hidden, true);
  }
};

const handleSetup = (control, region) => {
  attributes._set(control, attributes.ariaExpanded, false);
  attributes._remove(control, attributes.hidden);

  attributes._set(region, attributes.hidden, true);
};

const handleTeardown = (control, region) => {
  attributes._set(control, attributes.ariaExpanded, true);
  attributes._set(control, attributes.hidden, true);

  attributes._remove(region, attributes.hidden);
};

export default class Collapsible {
  constructor(control) {
    const region = document.querySelector(`#${attributes._get(control, attributes.ariaControls)}`);

    if (control && region) {
      this.control = control;
      this.region = region;

      this.setup = this.#setup;
      this.teardown = this.#teardown;
    }
  }

  #click = () => handleClick(this.control, this.region);

  #setup = () => {
    const { control, region } = this;

    handleSetup(control, region);

    control.addEventListener('click', this.#click.bind(this));

    this.toggle = this.#click;
  };

  #teardown = () => {
    const { control, region } = this;

    handleTeardown(control, region);

    control.removeEventListener('click', this.#click);

    this.toggle = undefined;
  };
}
