import { css } from 'lit-element';

export default css`
  #solid-multi-button-container {
    filter: drop-shadow(3px 10px 15px rgba(0, 0, 0, 0.45));
  }
  
  .solid-multi-buttons{
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

  #solid-single-button {
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
`;