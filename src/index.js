import Snackbar from './snackbar'

let middleButton = document.getElementById('middle-button')

middleButton.addEventListener('click', onMiddleButtonClicked)

function onMiddleButtonClicked () {
  Snackbar
    .create()
    .setStyle('center')
    .setText('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')
    .show()
}

setTimeout(function () {
  onMiddleButtonClicked()
}, 500)
