import Snackbar from './snackbar'

let middleButton = document.getElementById('middle-button')
let leftButton = document.getElementById('left-button')

middleButton.addEventListener('click', onMiddleButtonClicked)
leftButton.addEventListener('click', onLeftButtonClicked)

function onMiddleButtonClicked () {
  Snackbar
    .create()
    .setStyle('center')
    .setText('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')
    .show()
}

function onLeftButtonClicked () {
  Snackbar
    .create()
    .setStyle('left')
    .setText('Left snackbar :)')
    .show()
}

setTimeout(function () {
  onMiddleButtonClicked()
}, 500)
