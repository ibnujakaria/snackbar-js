import './assets/css/snackbar.css'

// this holds the current snackbars
let snackbars = []

var snackbarDom = document.getElementById('snackbar')
if (!snackbarDom) {
  snackbarDom = document.createElement('div')
  snackbarDom.setAttribute('id', 'snackbar')
  document.body.appendChild(snackbarDom)
}

class Snackbar {
  constructor (message) {
    this.id = snackbars.length
    this.message = message
    this.style = 'left'
    return this
  }

  setText (message) {
    this.message = message
    return this
  }

  setStyle (style) {
    this.style = style
    snackbarDom.classList.add(this.style)
    return this
  }

  show () {
    if (!snackbars.length) {
      snackbarDom.className = '' // clear the classess
      snackbarDom.classList.add('opened')

      snackbarDom.innerHTML = this.message
      snackbars.push(this)
      setTimeout(function () {
        snackbarDom.classList.replace('opened', 'closed')
      }, 3000)
    }
  }
}

export default {
  snackbars: snackbars,
  create () {
    return new Snackbar()
  }
}
