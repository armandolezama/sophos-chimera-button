import { css } from 'lit-element';

export default css`
  :host {
    --sophos-chimera-button-width: 100px;
    --sophos-chimera-button-height: 50px;
    --sophos-chimera-button-border-radius: 50px;
    --sophos-chimera-button-font-size: 1rem;
    --sophos-chimera-button-display: flex;
    --sophos-chimera-button-flex-direction: row;
    --sophos-chimera-button-flex-flow: row;
    --sophos-chimera-button-justify-content: space-around;
    --sophos-chimera-button-align-items: center;
    --sophos-chimera-button-justify-items: center;
    --sophos-chimera-button-align-content: center;
  }

  #solid-multi-button-container, 
  #neon-multi-button-container,
  #simple-multi-buttons-container {
    display: var(--sophos-chimera-button--solid-multi-button-container-neon-multi-button-container-simple-multi-buttons-container-display, var(--sophos-chimera-button-display));
    flex-direction: var(--sophos-chimera-button--solid-multi-button-container-neon-multi-button-container-simple-multi-buttons-container-flex-direction, var(--sophos-chimera-button-flex-direction));
    flex-flow: var(--sophos-chimera-button--solid-multi-button-container-neon-multi-button-container-simple-multi-buttons-container-flex-flow, var(--sophos-chimera-button-flex-flow));
    justify-content: var(--sophos-chimera-button--solid-multi-button-container-neon-multi-button-container-simple-multi-buttons-container-justify-content, var(--sophos-chimera-button-justify-content));
    align-items: var(--sophos-chimera-button--solid-multi-button-container-neon-multi-button-container-simple-multi-buttons-container-align-items, var(--sophos-chimera-button-align-items));
    justify-items: var(--sophos-chimera-button--solid-multi-button-container-neon-multi-button-container-simple-multi-buttons-container-justify-items, var(--sophos-chimera-button-justify-items));
    align-content: var(--sophos-chimera-button--solid-multi-button-container-neon-multi-button-container-simple-multi-buttons-container-align-content, var(--sophos-chimera-button-align-content));
    filter: var(--sophos-chimera-button--solid-multi-button-container-neon-multi-button-container-simple-multi-buttons-container-filter, drop-shadow(3px 10px 15px rgba(0, 0, 0, 0.45)));
  }
  
  .solid-multi-buttons, #solid-single-button {
    height: var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-height, var(--sophos-chimera-button-height));
    width: var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-width, var(--sophos-chimera-button-width));
    background: var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-background, linear-gradient(to bottom, #bada55, #da55bb));
    font-weight:  var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-font-weight, bold);
    color:  var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-color, white);
    font-size: var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-font-size, var(--sophos-chimera-button-font-size));
    border:  var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-border, none);
    margin:  var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-margin, -5px);
    padding:  var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-padding, 0);
    stroke:  var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-stroke, black);
    outline:  var(--sophos-chimera-button-solid-multi-buttons-solid-single-button-outline, none);
  }

  #solid-multi-button-container :first-child {
    border-radius: var(--sophos-chimera-button-solid-multi-button-container-first-child, 20px 0 0 20px);
  }

  #solid-multi-button-container :last-child {
    border-radius: var(--sophos-chimera-button-solid-multi-button-container-first-child, 0 20px 20px 0);
  }

  #solid-multi-button-container #solid-single-button {
    border-radius: var(--sophos-chimera-button-solid-multi-button-container-solid-single-button, 20px);
  }

  .solid-multi-buttons:hover, 
  #solid-single-button:hover {
    cursor: var(--sophos-chimera-button-solid-multi-buttons-hover-solid-single-button-hover-cursor, pointer);
    filter: var(--sophos-chimera-button-solid-multi-buttons-hover-solid-single-button-hover-cursor, drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.45)));
  }
  
  .solid-multi-buttons:active,
  #solid-single-button:active {
    filter: var(--sophos-chimera-button-solid-multi-buttons-active-solid-single-button-hover-filter, none);
    transform: var(--sophos-chimera-button-solid-multi-buttons-active-solid-single-button-hover-transform, scale(.95));
  }

  .neon-multi-buttons:hover, 
  #neon-single-button:hover,
  .neon-multi-buttons-focusable:hover, 
  #neon-single-button-focusable:hover{
    border-color: var(--sophos-chimera-button-neon-multi-buttons-hover-neon-single-button-hover-border-color, #8eff33);
    color: var(--sophos-chimera-button-neon-multi-buttons-hover-neon-single-button-hover-color, #8eff33);
    background-color: var(--sophos-chimera-button-neon-multi-buttons-hover-neon-single-button-hover-background-color,#2e6600);
  }

  .neon-multi-buttons-focusable:focus #neon-single-button-focusable:focus {
    border-color: var(--sophos-chimera-button-neon-multi-buttons-focus-neon-single-button-focus-border-color, #8eff33);
    color: var(--sophos-chimera-button-neon-multi-buttons-focus-neon-single-button-focus-color, #8eff33);
    background-color: var(--sophos-chimera-button-neon-multi-buttons-focus-neon-single-button-focus-background-color, #2e6600);
    padding: var(--sophos-chimera-button-neon-multi-buttons-focus-neon-single-button-focus-padding, 16px 16px);
    outline: var(--sophos-chimera-button-neon-multi-buttons-focus-neon-single-button-focus-outline, 0);
    border-radius: var(--sophos-chimera-button-neon-multi-buttons-focus-neon-single-button-focus-border-radius, 12px);
  }
  .neon-multi-buttons-focusable:focus:first-child {
    border-radius: var(--sophos-chimera-button-neon-multi-buttons-focus-first-child, 30px 12px 12px 30px);
  }
  .neon-multi-buttons-focusable:focus:last-child {
    border-radius: var(--sophos-chimera-button-neon-multi-buttons-focus-last-child, 12px 30px 30px 12px);
  }

  .neon-multi-buttons:active, 
  #neon-single-button:active,
  .neon-multi-buttons-focusable:focus, 
  #neon-single-button-focusable:focus {
    border-color: var(--sophos-chimera-button-neon-multi-buttons-active-neon-single-button-active-border-color, #8eff33);
    color: var(--sophos-chimera-button-neon-multi-buttons-active-neon-single-button-active-color, #8eff33);
    background-color: var(--sophos-chimera-button-neon-multi-buttons-active-neon-single-button-active-background-color, #2e6600);
    padding: var(--sophos-chimera-button-neon-multi-buttons-active-neon-single-button-active-padding, 16px 16px);
    outline: var(--sophos-chimera-button-neon-multi-buttons-active-neon-single-button-active-outline, 0);
    border-radius: var(--sophos-chimera-button-neon-multi-buttons-active-neon-single-button-active-border-radius, 12px);
  }
  .neon-multi-buttons:active:first-child {
    border-radius: var(--sophos-chimera-button-neon-multi-buttons-focus-first-child, 30px 12px 12px 30px);
  }
  .neon-multi-buttons:active:last-child {
    border-radius: var(--sophos-chimera-button-neon-multi-buttons-focus-last-child, 12px 30px 30px 12px);
  }

  .neon-multi-buttons, 
  #neon-single-button,
  .neon-multi-buttons-focusable, 
  #neon-single-button-focusable {
    height: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-height, var(--sophos-chimera-button-height));
    width: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-width, var(--sophos-chimera-button-width));
    min-width:  var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-min-width, 100px);
    border-radius: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-border-radius, 8px);
    display: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-display, inline-block);
    padding: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-padding, 10px 16px);
    margin: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-margin, 0 3px 0 0);
    cursor: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-cursor, pointer);
    transition-duration: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-transition-duration, 0.1s);
    transition-timing-function: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-transition-timing-function, ease-in-out);
    font-size: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button ,var(--sophos-chimera-button-font-size));;
    border: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-border, 3px solid #72ff00);
    color: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-color, #72ff00);
    background-color: var(--sophos-chimera-button-neon-multi-buttons-neon-single-button-background-color, #173300);
  }

  @media only screen and (max-width: 767px) {
    button {
      min-width: 80px;
    }
  }

  #simple-single-button, .simple-multi-buttons {
      border: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-border, none);
      height: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-height, var(--sophos-chimera-button-height));
      width: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-width, var(--sophos-chimera-button-width));
      background: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-background, #f3f0f1);
      position: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-position, relative);
      margin-bottom: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-margin-bottom, 25px);
      border-radius: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-border-radius, 32px);
      text-align: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-text-align, center);
      cursor: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-cursor, pointer);
      transition: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-transition, all 0.1s ease-in-out);
      box-shadow: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-box-shadow, -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2));
      color: var(--sophos-chimera-button-simple-single-buttons-simple-multi-button-color, #6f6cde);
    }

    #simple-single-button span, .simple-multi-buttons span {
      line-height: var(--sophos-chimera-button-simple-single-button-span-simple-multi-buttons-span-line-height, 10px);
      font-family: var(--sophos-chimera-button-simple-single-button-span-simple-multi-buttons-span-font-family, "Montserrat", sans-serif);
      font-size: var(--sophos-chimera-button-simple-single-button-span-simple-multi-buttons-span-font-size, var(--sophos-chimera-button-font-size));;
      font-weight: var(--sophos-chimera-button-simple-single-button-span-simple-multi-buttons-span-font-weight, semibold);
    }

    #simple-single-button:hover, .simple-multi-buttons:hover {
      opacity: var(--sophos-chimera-button-simple-single-button-hover-simple-multi-buttons-hover-opacity, 0.8);
      box-shadow: var(--sophos-chimera-button-simple-single-button-hover-simple-multi-buttons-hover-box-shadow, -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2));
    }
    #simple-single-button:active, .simple-multi-buttons:active {
      opacity: var(--sophos-chimera-button--simple-single-button-active-simple-multi-buttons-active-opacity, 1);
      box-shadow: var(--sophos-chimera-button--simple-single-button-active-simple-multi-buttons-active-box-shadow, inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1));
      color: var(--sophos-chimera-button--simple-single-button-active-simple-multi-buttons-active-color, #79e3b6);
    }
    /* 
    to do:
    añadir estilos para el multi simple buttons
    hacer clases para los diseños horizontal y vertical del multi buttons, convertirlos en módulos indepentdientes
    añadir un botón con un contenedor auxiliar a forma de botón personalizable. 
    acoplar esta última función con la arquitectura actual
      */
`;