const simpleCustomAttributes = require('simple-custom-attributes');

simpleCustomAttributes.addAttribute('on-click', require('simple-custom-attributes/attributes/on-click'));
simpleCustomAttributes.addAttribute('on-swipe-right', require('simple-custom-attributes/attributes/on-swipe-right'));
simpleCustomAttributes.addAttribute('on-swipe-left', require('simple-custom-attributes/attributes/on-swipe-left'));
simpleCustomAttributes.addAttribute('on-viewport-intersect', {
  bind(el, value) {
    el.onViewportIntersect = new IntersectionObserver(
      value,
      {
        threshold: [1]
      }
    );

    el.onViewportIntersect.observe(el);
  },
  unbind(el, value) {
    el.onViewportIntersect.unobserve(el);
  },
});

simpleCustomAttributes.register({
  toggleOffCanvasNav() {
    document.body.classList.toggle('off-canvas-nav-open');
  },
  toggleOffCanvasSearch() {
    hideOffCanvasSearch();
  },
  copyContentsToClipboard(event) {
    let element = event.currentTarget;
    let text = element.getAttribute('data-to-copy');
    let swapTextElement = element.querySelector('[data-swap-on-copy]');
    let originalElementText = swapTextElement.innerText;

    let textarea = document.createElement('textarea');

    textarea.textContent = text;
    textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy'); // Security exception may be thrown by some browsers.

      swapTextElement.innerText = 'Copied to clipboard!'

      setTimeout(function() {
        swapTextElement.innerText = originalElementText;
      }, 4000);
    } catch(ex) {
      return ex;
    } finally {
      document.body.removeChild(textarea);
    }
  },
  removeParentTargetFromDom(event) {
    let targets = Array.from(document.querySelectorAll('[data-removal-target]'));

    targets.forEach(function(target) {
      if (target.contains(event.currentTarget)) {
        target.parentElement.removeChild(target);
      }
    });
  },
  onSiteHeaderStuck(entries) {
    entries.forEach(function(entry) {
      let siteHeader = document.querySelector('[data-selector="nav"]');
      if (entry.isIntersecting) {
        siteHeader.classList.remove('stuck');
      } else {
        siteHeader.classList.add('stuck');
      }
    });
  },
}, document.body);
