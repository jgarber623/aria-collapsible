# aria-collapsible

**A lightweight, dependency-free JavaScript module for generating progressively-enhanced collapsible regions using [ARIA States and Properties](http://www.w3.org/TR/wai-aria/states_and_properties).**

[![npm](https://img.shields.io/npm/v/aria-collapsible.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/aria-collapsible)
[![Downloads](https://img.shields.io/npm/dt/aria-collapsible.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/aria-collapsible)
[![Build](https://img.shields.io/github/workflow/status/jgarber623/aria-collapsible/CI?logo=github&style=for-the-badge)](https://github.com/jgarber623/aria-collapsible/actions/workflows/ci.yml)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/jgarber623/aria-collapsible?logo=snyk&style=for-the-badge)](https://snyk.io/test/github/jgarber623/aria-collapsible)

### Key Features

- Uses ARIA States and Properties
- Dependency-free
- ES2015/AMD/Node module support

aria-collapsible is also really tiny:

| Format                 | File Size   | Minified Size | Gzipped Size |
|:-----------------------|:------------|:--------------|:-------------|
| Uncompressed (module)  | 1,999 bytes | 1,386 bytes   | 612 bytes    |
| Uncompressed (browser) | 2,410 bytes | 1,432 bytes   | 701 bytes    |
| Minified (browser)     | 1,434 bytes | 1,432 bytes   | 700 bytes    |

## Getting aria-collapsible

You've got a couple options for adding aria-collapsible to your project:

- [Download a tagged version](https://github.com/jgarber623/aria-collapsible/tags) from GitHub and do it yourself _(old school)_.
- Install using [npm](https://www.npmjs.com/package/aria-collapsible): `npm install aria-collapsible --save`
- Install using [Yarn](https://yarnpkg.com/en/package/aria-collapsible): `yarn add aria-collapsible`

## Usage

### HTML

To use aria-collapsible, your markup needs two elements: a **control** and a **region**. The **control**, typically a `<button>` or an `<a>` element, is what your user will interact with and is the element that controls the display of the collapsible region. The **region** is an element elsewhere on the page whose display is handled by the **control**.

The two elements are associated by adding an `aria-controls="region"` attribute to the **control**. The value of the `aria-controls` attribute corresponds to the value of the **region**'s `id` attribute.

```html
<button type="button" aria-controls="region" aria-expanded="true" aria-hidden id="control">Menu</button>

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

### CSS

Most browsers don't natively hide elements with the `aria-hidden` attribute so you'll need to add the following to your stylesheet:

```css
[aria-hidden] {
  display: none !important;
}
```

### JavaScript

Lastly, initialize aria-collapsible by creating a `new Collapsible`, passing in a DOM reference to the **control**, and calling the `setup()` method.

```js
const collapsible = new Collapsible(document.querySelector('#control'));

collapsible.setup();
```

You can see the above in action in [the included example file](./example/index.html).

Collapsible regions can be shown and hidden programatically using the `toggle()` method:

```js
collapsible.toggle();
```

You can also teardown a collapsible region, resetting the DOM to its initial state and removing event handlers:

```js
collapsible.teardown();
```

## Browser Support

aria-collapsible works in modern browsers.

## Acknowledgments

aria-collapsible is inspired by the following works:

- Steve Faulkner's article, [HTML5 Accessibility Chops: hidden and aria-hidden](http://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
- Heydon Pickering's [Progressive collapsibles demo](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles)
- Nicolas Hoffman's [jQuery collapsible regions plugin](http://a11y.nicolas-hoffmann.net/hide-show/)

Special thanks to [Jeremy Fields](http://ten1seven.com/) for his help testing with [VoiceOver](https://www.apple.com/accessibility/osx/voiceover/).

aria-collapsible is written and maintained by [Jason Garber](https://sixtwothree.org/) with the help of [some great contributors](https://github.com/jgarber623/aria-collapsible/graphs/contributors).

## License

aria-collapsible is freely available under [The MIT License](http://opensource.org/licenses/MIT). Go forth and make the Web a more accessible place.
