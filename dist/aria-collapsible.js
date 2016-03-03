/*!
 *  aria-collapsible 2.1.0
 *
 *  A lightweight, dependency-free JavaScript module for generating progressively-enhanced collapsible regions using ARIA States and Properties.
 *
 *  Source code available at: https://github.com/jgarber623/aria-collapsible
 *
 *  (c) 2015-present Jason Garber (http://sixtwothree.org)
 *
 *  aria-collapsible may be freely distributed under the MIT license.
 */

(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports === "object") {
    module.exports = factory();
  } else {
    root.Collapsible = factory();
  }
})(this, function() {
  "use strict";
  return function($control) {
    if ($control) {
      var $region = document.getElementById($control.getAttribute("aria-controls"));
    }
    var handleClick = function(event) {
      event.preventDefault();
      toggle();
    };
    var toggle = function() {
      var value = $control.getAttribute("aria-expanded") !== "true";
      $control.setAttribute("aria-expanded", value);
      $region[!value ? "setAttribute" : "removeAttribute"]("aria-hidden", true);
      if (value) {
        $region.focus();
      }
    };
    return {
      init: function() {
        if ($region) {
          $control.setAttribute("aria-expanded", false);
          $control.removeAttribute("aria-hidden");
          $region.setAttribute("aria-hidden", true);
          $region.setAttribute("tabindex", -1);
          $control.addEventListener("click", handleClick);
          this.toggle = toggle;
        }
      }
    };
  };
});