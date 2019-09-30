const scripts = document.getElementsByTagName('script');

for (let i = 0; i < scripts.length; i++) {
  let script = scripts[i];
  if (!script.hasAttribute('defines-elements'))
    continue;

  let elements = script.getAttribute('defines-elements').split(' ');
  let style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  let css = elements.join(', ') + ' { display: none !important; }';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
  script.addEventListener('load', function() {
    let missing = [];
    for (let j = 0; j < elements.length; j++) {
      if (customElements.get(elements[j]) === undefined) {
        missing.push(elements[j]);
      }
    }
    if (missing.length > 0)
      console.error('Script ' + script.src + ' did not define elements: ' + missing.join(', '));

    // TODO: Investigate why it seems necessary to wait several frames before
    // removing the display: none stylesheet to avoid a flash of unstyled
    // content.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.head.removeChild(style);
        });
      });
    });
  });
}
