(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Collapsible = factory();
	}
}(this, function() {
	'use strict';

	return function($control) {
		if ($control) {
			var $region = document.getElementById($control.getAttribute('aria-controls'));
		}

		var handleClick = function(event) {
			event.preventDefault();

			toggle();
		};

		var teardown = function() {
			$control.setAttribute('aria-expanded', true);
			$control.setAttribute('aria-hidden', true);

			$region.removeAttribute('aria-hidden');
			$region.removeAttribute('tabindex');

			$control.removeEventListener('click', handleClick);
		};

		var toggle = function() {
			var value = $control.getAttribute('aria-expanded') !== 'true';

			$control.setAttribute('aria-expanded', value);

			if (value) {
				$region.removeAttribute('aria-hidden');
				$region.focus();
			} else {
				$region.setAttribute('aria-hidden', true);
			}
		};

		return {
			init: function() {
				if ($region) {
					$control.setAttribute('aria-expanded', false);
					$control.removeAttribute('aria-hidden');

					$region.setAttribute('aria-hidden', true);
					$region.setAttribute('tabindex', -1);

					$control.addEventListener('click', handleClick);

					this.teardown = teardown;
					this.toggle = toggle;
				}
			}
		};
	};
}));