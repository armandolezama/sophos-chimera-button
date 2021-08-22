import { css } from 'lit-element';

export default css`
  :host {
    --sophos-chimera-button-width: 200px;
    --sophos-chimera-button-height: 100px;
    --sophos-chimera-button-border-radius: 50px;
  }

  #solid-multi-button-container {
    filter: drop-shadow(3px 10px 15px rgba(0, 0, 0, 0.45));
  }
  
  .solid-multi-buttons, #solid-single-button {
    height: 50px;
    width: 100px;
    background: linear-gradient(to bottom, #bada55, #da55bb);
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    border: none;
    margin: -5px;
    padding: 0;
    stroke: black;
    outline: none;
  }

  #solid-multi-button-container :first-child {
    border-radius: 20px 0 0 20px;
  }

  #solid-multi-button-container :last-child {
    border-radius: 0 20px 20px 0;
  }

  #solid-multi-button-container #solid-single-button {
    border-radius: 20px;
  }

  .solid-multi-buttons:hover, 
  #solid-single-button:hover {
    cursor: pointer;
    filter: drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.45));
  }
  
  .solid-multi-buttons:active,
  #solid-single-button:hover {
    filter: none;
    transform: scale(.95);
  }

  .neon-multi-buttons, #neon-single-button {
    border: 3px solid #72ff00;
    color: #72ff00;
    background-color: #173300;
  }

  .neon-multi-buttons:hover, #neon-single-button:hover {
    border-color: #8eff33;
    color: #8eff33;
    background-color: #2e6600;
  }
  .neon-multi-buttons:focus, #neon-single-button:focus {
    border-color: #8eff33;
    color: #8eff33;
    background-color: #2e6600;
    padding: 16px 16px;
    outline: 0;
    border-radius: 12px;
  }
  .neon-multi-buttons:focus:first-of-type {
    border-radius: 30px 12px 12px 30px;
  }
  .neon-multi-buttons:focus:last-of-type {
    border-radius: 12px 30px 30px 12px;
  }

  .neon-multi-buttons, #neon-single-button {
    min-width: 100px;
    border-radius: 8px;
    display: inline-block;
    padding: 10px 16px;
    margin: 0 3px 0 0;
    cursor: pointer;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }

  @media only screen and (max-width: 767px) {
    button {
      min-width: 80px;
    }
  }

  #simple-single-button, .simple-multi-buttons {
      border: none;
      width: 100px;
      height: 25px;
      background: #f3f0f1;
      position: relative;
      background: #f3f0f1;
      margin-bottom: 25px;
      border-radius: 32px;
      text-align: center;
      cursor: pointer;
      transition: all 0.1s ease-in-out;
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
      color: #6f6cde;
    }
    #simple-single-button span, .simple-multi-buttons span {
      line-height: 10px;
      font-family: "Montserrat", sans-serif;
      font-size: 16px;
      font-weight: semibold;
    }

    #simple-single-button:hover, .simple-multi-buttons:hover {
      opacity: 0.3;
      box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8), 6px 6px 10px rgba(0, 0, 0, 0.2);
    }
    #simple-single-button:active, .simple-multi-buttons:active {
      opacity: 1;
      box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5), inset 8px 8px 16px rgba(0, 0, 0, 0.1);
      color: #79e3b6;
    }
    /* 
    to do:
    añadir estilos para el multi simple buttons
    hacer clases para los diseños horizontal y vertical del multi buttons, convertirlos en módulos indepentdientes
    añadir un botón con un contenedor auxiliar a forma de botón personalizable. 
    acoplar esta última función con la arquitectura actual
      */
`;