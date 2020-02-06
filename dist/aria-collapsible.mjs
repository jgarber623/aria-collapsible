/*!
 *  aria-collapsible v3.0.0
 *
 *  A lightweight, dependency-free JavaScript module for generating progressively-enhanced collapsible regions using ARIA States and Properties.
 *
 *  Source code available at: https://github.com/jgarber623/aria-collapsible
 *
 *  (c) 2015-present Jason Garber (http://sixtwothree.org)
 *
 *  aria-collapsible may be freely distributed under the MIT license.
 */

function Collapsible($control) {
  const $region = document.getElementById($control.getAttribute("aria-controls"));
  if ($control && $region) {
    const handleClick = event => {
      event.preventDefault();
      handleToggle();
    };
    const handleToggle = () => {
      const value = $control.getAttribute("aria-expanded") !== "true";
      $control.setAttribute("aria-expanded", value);
      if (value) {
        $region.removeAttribute("aria-hidden");
        $region.focus();
      } else {
        $region.setAttribute("aria-hidden", true);
      }
    };
    return {
      setup: () => {
        $control.setAttribute("aria-expanded", false);
        $control.removeAttribute("aria-hidden");
        $region.setAttribute("aria-hidden", true);
        $region.setAttribute("tabindex", -1);
        $control.addEventListener("click", handleClick);
        this.toggle = handleToggle;
      },
      teardown: () => {
        $control.setAttribute("aria-expanded", true);
        $control.setAttribute("aria-hidden", true);
        $region.removeAttribute("aria-hidden");
        $region.removeAttribute("tabindex");
        $control.removeEventListener("click", handleClick);
      }
    };
  }
}

export default Collapsible;
