> [!IMPORTANT]
> This project has moved to [codeberg.org/jgarber/aria-collapsible](https://codeberg.org/jgarber/aria-collapsible).

# `<aria-collapsible>` Web Component

**A dependency-free [Web Component](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components) that generates progressively-enhanced collapsible regions using [ARIA States and Properties](http://www.w3.org/TR/wai-aria/states_and_properties).**

[![npm](https://img.shields.io/npm/v/@jgarber/aria-collapsible.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/aria-collapsible)
[![Downloads](https://img.shields.io/npm/dt/@jgarber/aria-collapsible.svg?logo=npm&style=for-the-badge)](https://www.npmjs.com/package/@jgarber/aria-collapsible)
[![Build](https://img.shields.io/github/actions/workflow/status/jgarber623/aria-collapsible/ci.yml?branch=main&logo=github&style=for-the-badge)](https://github.com/jgarber623/aria-collapsible/actions/workflows/ci.yml)

🐳 📖 **[See `<aria-collapsible>` in action!](https://jgarber623.github.io/aria-collapsible/example)**

> [!NOTE]
> Prior to v7.0.0, this package exported a class, `Collapsible`, which offered similar functionality. If that better suits your needs, the legacy package is [available on npm](https://www.npmjs.com/package/aria-collapsible).

## Getting `<aria-collapsible>`

You've got several options for adding this Web Component to your project:

- [Download a release](https://github.com/jgarber623/aria-collapsible/releases) from GitHub and do it yourself _(old school)_.
- Install using [npm](https://www.npmjs.com/package/@jgarber/aria-collapsible): `npm install @jgarber/aria-collapsible --save`
- Install using [Yarn](https://yarnpkg.com/en/package/@jgarber/aria-collapsible): `yarn add @jgarber/aria-collapsible`

## Usage

First, add this `<script>` element to your page which defines the `<aria-collapsible>` Web Component:

```html
<script type="module" src="aria-collapsible.js"></script>
```

Use the `<aria-collapsible>` custom element to wrap a `control` (typically, a `<button>` element) and one or more associated `region`s:

```html
<aria-collapsible>
  <button control hidden>Toggle Menu</button>

  <nav region>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/articles">Articles</a></li>
      <li><a href="/photos">Photos</a></li>
      <li><a href="/links">Links</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</aria-collapsible>
```

With the markup above, the Web Component will associate the control with one or more regions using the `aria-controls` attribute. For region elements without `id` attributes, unique values will be generated. Clicking the control element will alternatively show or hide the associate regions by toggling those element's `hidden` attribute.

> [!IMPORTANT]
> It's recommended that you include the `hidden` attribute on the control element. This attribute will prevent the control from being displayed until the Web Component initializes and removes the `hidden` attribute.

> [!IMPORTANT]
> It's recommended that the region element(s) immediately follow the control element in HTML source order. See the [Focus and Reading Order](https://adrianroselli.com/2020/05/disclosure-widgets.html#Order) section in [Disclosure Widgets](https://adrianroselli.com/2020/05/disclosure-widgets.html) for additional information.

Styling the control and region elements is entirely up to you. Beyond the semantics of the `hidden` attribute and browsers' default styling, this Web Component is unstyled out of the box. Use your imagination. Get creative. The sky's the limit!

In addition to the above-mentioned Disclosure Widgets article, the Web Accessibility Initiative's [Disclosure (Show/Hide) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) page provides additional examples where you may consider using this Web Component.

## Optional Attributes

This Web Component supports a single Boolean attribute, `open`, that behaves similarly to the `<details>` element's [attribute of the same name](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#open). The presence of the `open` attribute will show regions within the Web Component and set the control's `aria-expanded` attribute value to `true`.

An instance of `<aria-collapsible>` may be opened or closed by programatically setting the `open` attribute or property:

```html
<aria-collapsible open>
  <button control hidden>Toggle</button>

  <div region>
    <p>I'm visible!</p>
  </div>
</aria-collapsible>

<script>
  // Close the Web Component by updating its `open` property.
  document.querySelector("aria-collapsible").open = false;

  // Re-open the Web Component by setting its `open` attribute.
  document.querySelector("aria-collapsible").setAttribute("open", "any-value-here-works");
</script>
```

> [!IMPORTANT]
> Boolean attributes like `open` must be removed (either by using `removeAttribute` or setting the property to `false`). Because the attribute is a Boolean, `open="false"` will display the Web Component's region's content.

> [!TIP]
> You might consider manipulating the `open` property in conjunction with [the `window.matchMedia`'s `change` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia#usage_notes).

```js
const component = document.querySelector("aria-collapsible");
const control = component.querySelector("[control]");

window.matchMedia("(width >= 32rem)").addEventListener("change", (event) => {
  component.open = event.matches;
  control.toggleAttribute("hidden", event.matches);
});
```

The code snippet above was inspired by the article, [Why you should use `window.matchMedia` when checking for window resizes in Javascript](https://webdevetc.com/blog/matchmedia-events-for-window-resizes/).

## Events

The `<aria-collapsible>` Web Component supports a `toggle` event which is dispatched whenever the component's `open` property changes. The event is sent after the control element's `aria-expanded` attributed and associated regions' `hidden` attributes are updated. This event is provided to authors who wish (or need!) to provide additional behavior or surface information to users based on this Web Component's state.

## Acknowledgments

The following resources were used while making this Web Component:

- [Disclosure Widgets](https://adrianroselli.com/2020/05/disclosure-widgets.html) by [Adrian Roselli](https://toot.cafe/@aardrian)
- [Disclosure (Show/Hide) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/) by [The Web Accessibility Initiative](https://w3c.social/@wai)
- [Making Web Component properties behave closer to the platform](https://blog.ltgt.net/web-component-properties/) by [Thomas Broyer](https://piaille.fr/@tbroyer)
- [Let's create a Web Component from scratch!](https://gomakethings.com/lets-create-a-web-component-from-scratch/) and [The handleEvent() method is the absolute best way to handle events in Web Components](https://gomakethings.com/the-handleevent-method-is-the-absolute-best-way-to-handle-events-in-web-components/) by [Chris Ferdinandi](https://mastodon.social/@cferdinandi)

## License

The `<aria-collapsible>` Web Component is freely available under the [MIT License](https://opensource.org/licenses/MIT).
