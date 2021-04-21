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
    this.type = 'neon-multi-button';
    this.solidMultibuttons = ['botón 1', 'botón 2', 'botón 3', 'botón 4', 'botón 5'];
    this.neonMultibuttons = ['botón 1', 'botón 2', 'botón 3', 'botón 4', 'botón 5'];
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      solidMultibuttons: { type : Array },
      neonMultibuttons: { type : Array }
    };
  };

  static get styles() {
    return styles;
  };

  createSolidMultiButtons() {
    if (this.solidMultibuttons.length > 1 ){
      return this.solidMultibuttons.map(label => html`
      <button class="solid-multi-buttons">${label}</button>
      `);
    } else {
      return html`
        <button id="solid-single-button">
          ${this.solidMultibuttons[0]}
        </button>
      `;
    };
  };

  createNeonMultiButtons() {
    if(this.neonMultibuttons.length > 1){
      return this.neonMultibuttons.map(label => html`
        <button class="neon-multi-buttons">${label}</button>
      `);
    } else {
      return html`
        <button id="neon-single-button">
          ${this.neonMultibuttons[0]}
        </button>
      `;
    };
  };
  
  render() {
    return html`
    <div id="main-container">
      ${this.type === 'solid-multi-button' ? html`      
        <div id="solid-multi-button-container">
          ${this.createSolidMultiButtons()}
        </div>
      ` : html``}
      ${this.type === 'neon-multi-button' ? html`
        <div id="neon-multi-button-container">
          ${this.createNeonMultiButtons()}
        </div>
      ` : html``}
    </div>`;
  };
};
customElements.define('sophos-chimera-button', SophosChimeraButton);