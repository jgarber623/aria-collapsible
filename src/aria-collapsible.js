export default function Collapsible($control) {
  const $region = document.getElementById($control.getAttribute('aria-controls'));

  if ($control && $region) {
    const handleClick = event => {
      event.preventDefault();

      handleToggle();
    };

    const handleToggle = () => {
      const value = $control.getAttribute('aria-expanded') !== 'true';

      $control.setAttribute('aria-expanded', value);

      if (value) {
        $region.removeAttribute('aria-hidden');
        $region.focus();
      } else {
        $region.setAttribute('aria-hidden', true);
      }
    };

    return {
      setup: () => {
        $control.setAttribute('aria-expanded', false);
        $control.removeAttribute('aria-hidden');

        $region.setAttribute('aria-hidden', true);
        $region.setAttribute('tabindex', -1);

        $control.addEventListener('click', handleClick);

        this.toggle = handleToggle;
      },

      teardown: () => {
        $control.setAttribute('aria-expanded', true);
        $control.setAttribute('aria-hidden', true);

        $region.removeAttribute('aria-hidden');
        $region.removeAttribute('tabindex');

        $control.removeEventListener('click', handleClick);
      }
    };
  }
}
