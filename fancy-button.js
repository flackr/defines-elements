class FancyButton extends HTMLElement {

  constructor() {
    super();
    let shadow = this.attachShadow({mode: 'open'});

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    let slot = document.createElement('slot');
    slot.setAttribute('name', 'label');
    wrapper.appendChild(slot);


    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'fancy-button.css');

    shadow.appendChild(linkElem);
    shadow.appendChild(wrapper);

    wrapper.addEventListener('click', () => {
      wrapper.animate([
        { boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.6)',
          transform: 'none'},
        { boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.6)',
          transform: 'translate(10px, 10px)'},
        { boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.6)',
          transform: 'none'},
      ], 100);
    });
  }
}

customElements.define('fancy-button', FancyButton);
