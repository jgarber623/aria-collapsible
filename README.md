# aria-collapsible

**A lightweight, dependency-free JavaScript module for generating progressively-enhanced collapsible regions using [ARIA States and Properties](http://www.w3.org/TR/wai-aria/states_and_properties).**

[![npm](https://img.shields.io/npm/v/aria-collapsible.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/aria-collapsible)
[![Downloads](https://img.shields.io/npm/dt/aria-collapsible.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/aria-collapsible)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/aria-collapsible/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/aria-collapsible/actions/workflows/ci.yml)

### Key Features

- Uses ARIA States and Properties
- Dependency-free
- JavaScript module (ESM), CommonJS, and browser global (`window.Collapsible`) support

## Getting aria-collapsible

You've got a couple options for adding aria-collapsible to your project:

- [Download a release](https://github.com/jgarber623/aria-collapsible/releases) from GitHub and do it yourself _(old school)_.
- Install using [npm](https://www.npmjs.com/package/aria-collapsible): `npm install aria-collapsible --save`
- Install using [Yarn](https://yarnpkg.com/en/package/aria-collapsible): `yarn add aria-collapsible`

## Usage

### HTML

To use aria-collapsible, your markup needs two elements: a **control** and a **region**. The **control**, typically a `<button>` or an `<a>` element, is what your user will interact with and is the element that controls the display of the collapsible region. The **region** is an element elsewhere on the page whose display is handled by the **control**.

The two elements are associated by adding an `aria-controls="region"` attribute to the **control**. The value of the `aria-controls` attribute corresponds to the value of the **region**'s `id` attribute.

```html
<button aria-controls="region" aria-expanded="true" id="control" hidden>Menu</button>

<nav id="region">
  <ul>
    <li><a href="#">Chapter 1</a></li>
    <li><a href="#">Chapter 2</a></li>
    <li><a href="#">Chapter 3</a></li>
    <li><a href="#">Chapter 4</a></li>
    <li><a href="#">Chapter 5</a></li>
  </ul>
</nav>
```

### JavaScript

Initialize aria-collapsible by creating a `new Collapsible`, passing in a DOM reference to the **control**, and calling the `setup()` method.

```js
const collapsible = new Collapsible(document.querySelector('#control'));

collapsible.setup();
```

You can see the above in action in [the included example file](./example/index.html).

Collapsible regions can be shown and hidden programatically using the `toggle()` method:

```js
collapsible.toggle();
```

You can also tear down a collapsible region, resetting the DOM to its initial state and removing event handlers:

```js
collapsible.teardown();
```

## Browser Support

**aria-collapsible works in modern browsers.** The library makes use of several new(ish) JavaScript features and, in an effort to remain as lightweight and dependency-free as possible, leaves it up to you to choose whether or not to polyfill features for older browsers.

## Acknowledgments

aria-collapsible is inspired by the following works:

- Steve Faulkner's article, [HTML5 Accessibility Chops: hidden and aria-hidden](https://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
- Heydon Pickering's [Progressive collapsibles demo](https://web.archive.org/web/20150321045553/http://heydonworks.com:80/practical_aria_examples/#progressive-collapsibles)
- Nicolas Hoffman's [jQuery collapsible regions plugin](https://a11y.nicolas-hoffmann.net/hide-show/)
- Adrian Roselli's article, [Disclosure Widgets](https://adrianroselli.com/2020/05/disclosure-widgets.html)

aria-collapsible is written and maintained by [Jason Garber](https://sixtwothree.org/) with the help of [some great contributors](https://github.com/jgarber623/aria-collapsible/graphs/contributors).

## License

aria-collapsible is freely available under [The MIT License](http://opensource.org/licenses/MIT). Go forth and make the Web a more accessible place.
