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

const singleLabel =  [{
  label: 'botón 1',
  key: 'first-button',
}];
const multiLabel = [
  {
    label: 'botón 1',
    key: 'first-button',
  },
  {
    label: 'botón 2',
    key: 'second-button',
  },
  {
    label: 'botón 3',
    key: 'third-button',
  },
];

for (const button of singleCollection) {
  button.buttonsLabels = [...singleLabel];
}

for (const button of multiCollection) {
  button.buttonsLabels = [...multiLabel];
}