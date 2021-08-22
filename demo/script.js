const singleCollection = [
  document.getElementById('neon-single-button'),
  document.getElementById('solid-single-button'),
  document.getElementById('simple-single-button')
]

const multiCollection = [
  document.getElementById('neon-multi-button'),
  document.getElementById('solid-multi-button'),
  document.getElementById('simple-multi-button')
]

const singleLabel =  ['botón 1'];
const multiLabel = ['botón 1', 'botón 2', 'botón 3'];

for (const button of singleCollection) {
  button.buttonsLabels = [...singleLabel];
}

for (const button of multiCollection) {
  button.buttonsLabels = [...multiLabel];
}