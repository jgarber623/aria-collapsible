# aria-collapsible

[![npm version](https://badge.fury.io/js/aria-collapsible.svg)](https://badge.fury.io/js/aria-collapsible)

A lightweight, dependency-free JavaScript module for generating progressively-enhanced collapsible regions using [ARIA States and Properties](http://www.w3.org/TR/wai-aria/states_and_properties).

### Key Features

- Uses ARIA States and Properties
- Dependency-free
- AMD/CommonJS module support

aria-collapsible is also really tiny:

<table>
	<tbody>
		<tr>
			<th>Uncompressed</th>
			<td>1,942 bytes</td>
		</tr>
		<tr>
			<th>Minified</th>
			<td>1,254 bytes</td>
		</tr>
		<tr>
			<th>Minified and gzipped</th>
			<td>597 bytes</td>
		</tr>
	</tbody>
</table>


## Getting aria-collapsible

Adding aria-collapsible to your project is easy! You've got a couple options:

- [Download a tagged version](https://github.com/jgarber623/aria-collapsible/tags) from GitHub and do it yourself _(old school)_.
- Install via [Bower](http://bower.io/): `bower install aria-collapsible`
- Install via [npm](https://www.npmjs.com/): `npm install aria-collapsible`


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

Lastly, initialize aria-collapsible by creating a `new Collapsible`, passing in a DOM reference to the **control**, and calling the `init()` method.

```js
var collapsible = new Collapsible(document.getElementById('control'));

collapsible.init();
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

aria-collapsible works in all modern browsers.

It makes use of the [addEventListener method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) which first appeared in Internet Explorer in version 9.0. To avoid throwing JavaScript errors in browsers that don't support this method, you can [cut the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard):

```js
if ('addEventListener' in window) {
    // Your scripts here…
}
```


## Acknowledgments

aria-collapsible is inspired by the following works:

- Steve Faulkner's article, [HTML5 Accessibility Chops: hidden and aria-hidden](http://www.paciellogroup.com/blog/2012/05/html5-accessibility-chops-hidden-and-aria-hidden/)
- Heydon Pickering's [Progressive collapsibles demo](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles)
- Nicolas Hoffman's [jQuery collapsible regions plugin](http://a11y.nicolas-hoffmann.net/hide-show/)

Special thanks to [Jeremy Fields](http://ten1seven.com/) for his help testing with [VoiceOver](https://www.apple.com/accessibility/osx/voiceover/).

aria-collapsible is written and maintained by [Jason Garber](https://sixtwothree.org/) with the help of [some great contributors](https://github.com/jgarber623/aria-collapsible/graphs/contributors).


## License

aria-collapsible is freely available under [The MIT License](http://opensource.org/licenses/MIT). Go forth and make the Web a more accessible place.
