import { LitElement, html } from 'lit-element';
import styles from './sophos-chimera-button-styles';

export class SophosChimeraButton extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.type = '';
    this.buttonsLabels = [];
    this.neonButtonFocusable = false;
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      type : { type : String},
      buttonsLabels : { type : Array },
    };
  };

  static get styles() {
    return styles;
  };

  _createMultiButtons(multiStyle, singleStyle, focusable) {
    multiStyle = focusable ? `${multiStyle}-focusable` : multiStyle;
    singleStyle = focusable ? `${singleStyle}-focusable` : singleStyle;
    
    if(this.buttonsLabels.length > 1) {
      return this.buttonsLabels.map( (label, index) => html`
        <button
        class="${multiStyle}"
        option="${index}"
        @click="${this._fireClick}"
        @mousedown="${this.setActiveStyle}"
        @mouseup="${this.setInactiveStyle}">

          <span
          class="multi-button-span">
          ${label}
          </span>

        </button>
      `);
    } else {
      return html`
        <button
        id="${ singleStyle }"
        option="0"
        @click="${this._fireClick}"
        @mousedown="${this.setActiveStyle}"
        @mouseup="${this.setInactiveStyle}">

          <span
          id="single-button-span">
          ${this.buttonsLabels[0]}
          </span>

        </button>
      `;
    };
  };

  _fireClick(e) {
    const option = parseInt(e.currentTarget.getAttribute('option'));
    this.dispatchEvent(new CustomEvent('sophos-chimera-button-click', {
      detail : {
        option,
        label : this.buttonsLabels[option]
      }
    }));
  };

  render() {
    return html`
    <div id="main-container">
      ${this.type === 'solid-multi-button' ? html`      
        <div id="solid-multi-button-container">
          ${this._createMultiButtons('solid-multi-buttons', 'solid-single-button', false)}
        </div>
      ` : html``}
      ${this.type === 'neon-multi-button' ? html`
        <div id="neon-multi-button-container">
          ${this._createMultiButtons('neon-multi-buttons', 'neon-single-button', this.neonButtonFocusable)}
        </div>
      ` : html``}
      ${this.type === 'simple-multi-button' ? html`
        <div id="simple-multi-buttons-container">
          ${this._createMultiButtons('simple-multi-buttons', 'simple-single-button', false)}
        </div>
      ` : html``}
    </div>`;
  };
};
customElements.define('sophos-chimera-button', SophosChimeraButton);
/*
https://codepen.io/zeynepozdem/pen/yLymeja

https://codepen.io/ryne/pen/PoPoqgO

https://codepen.io/grohit/pen/zYxMOjR

https://codepen.io/jouanmarcel/pen/RwweKqb

https://freefrontend.com/css-buttons/
*/