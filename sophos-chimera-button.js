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

  _createMultiButtons(multiStyle, singleStyle) {
    if(this.buttonsLabels.length > 1) {
      return this.buttonsLabels.map( (label, index) => html`
        <button
        class="${multiStyle}"
        option="${index}"
        @click="${this._fireClick}">

          <span
          class="multi-button-span">
          ${label}
          </span>

        </button>
      `);
    } else {
      return html`
        <button
        id="${singleStyle}"
        option="0"
        @click="${this._fireClick}">

          <span
          id="single-button-span">
          ${this.buttonsLabels[0]}
          </span>

        </button>
      `;
    };
  };

  _fireClick(e) {
    const option = parseInt(e.target.getAttribute('option'));
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
          ${this._createMultiButtons('solid-multi-buttons', 'solid-single-button')}
        </div>
      ` : html``}
      ${this.type === 'neon-multi-button' ? html`
        <div id="neon-multi-button-container">
          ${this._createMultiButtons('neon-multi-buttons', 'neon-single-button')}
        </div>
      ` : html``}
      ${this.type === 'simple-multi-button' ? html`
        <div id="simple-multi-buttons-container">
          ${this._createMultiButtons('simple-multi-buttons', 'simple-single-button')}
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