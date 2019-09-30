# defines-elements

Scripts declare which elements they will define. Once loaded those elements
become visible.

See [live demo](https://flackr.github.io/defines-elements/index.html) using the polyfill.

e.g.
```html
<script type="module" src="fancy-button.js" defines-elements="fancy-button"></script>
<!-- Note: Only sees the elements defined by scripts above. -->
<script src="defines-elements.js"></script>

<!-- The button will only become visible after fancy-button.js loads. -->
<fancy-button>
  <span slot="label">Test button</span>
</fancy-button>
```
