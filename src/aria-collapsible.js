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

	var Collapsible = function($control) {
		this.$control = $control;
	};

	Collapsible.prototype = {
		init: function() {
			if (this.$control) {
				this.$region = document.getElementById(this.$control.getAttribute('aria-controls'));

				if (this.$region) {
					this.$control.addEventListener('click', this.handleClick.bind(this));
					this.$region.setAttribute('aria-hidden', true);
				}
			}
		},

		handleClick: function(event) {
			event.preventDefault();

			this.toggle(this.$control.getAttribute('aria-expanded') !== 'true');
		},

		toggle: function(value) {
			this.$control.setAttribute('aria-expanded', value);
			this.$region[!value ? 'setAttribute' : 'removeAttribute']('aria-hidden', true);
		}
	};

	return Collapsible;
}));