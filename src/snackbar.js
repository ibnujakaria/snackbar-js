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
    return this
  }

  hide () {
    // this doesn't work in chrome
    // snackbarDom.classList.replace('opened', 'closed')
    snackbarDom.classList.remove('opened')
    snackbarDom.classList.add('closed')
  }

  show () {
    if (!snackbars.length) {
      snackbarDom.className = ''
      snackbarDom.classList.add('opened', this.style + '-style')

      snackbarDom.innerHTML = this.message
      snackbars.push(this)
      this.timeout = setTimeout(function () {
        snackbars.pop().hide()
      }, 3000)
    } else {
      let activeSnackbar = snackbars.pop()
      clearTimeout(activeSnackbar.timeout)
      activeSnackbar.hide()
      let me = this // im too lazy to bind the 'this'
      setTimeout(function () {
        me.show()
      }, 500)
    }
  }
}

let result = {
  snackbars: snackbars,
  create () {
    return new Snackbar()
  }
}

if (window) {
  window.Snackbar = result
}

export default result
