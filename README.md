# snackbar-js
A simple material-design-styled snackbar you can use in any page of your projects.

<img src="https://media.giphy.com/media/xUPGGzh2MOoRPuwSe4/giphy.gif"/>

## Installation

```
# download github
https://github.com/ibnujakaria/snackbar-js/archive/v1.0.9.zip

# npm
npm install --save snackbar-js
```

## How to Use

### Web
```
<script src="dist/snackbar.js"></script>
<script>
  Snackbar
    .create()
    .setText('Hello world! :)')
    .setStyle('center') // or you can use .setStyle('left')
    .show()
</script>
```
### CommonJS
```
import Snackbar from 'snackbar-js'

Snackbar
  .create()
  .setText('Hello world! :)')
  .setStyle('center') // or you can use .setStyle('left')
  .show()
  
```
## License

The project is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
