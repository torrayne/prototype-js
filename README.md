# Prototype JS

_**Disclaimer:** This was a POC and shouldn't be used in Production. I recommend building your web apps with something like Svelte, Vue, or React._

Prototyping pure JavaScript with parts of jQuery I actually use and like.

## Getting Started

Pick and choose from any of the modules, the minified folder contains [prototype.min.js](min/prototype.min.js) that has all of the modules merged into one file.
## Example
```javascript
const styles = {
    el.style.color = 'red'
    el.style.fontSize = '14px'
}

// Before
const parent = document.querySelector('#parent')
const chilren = parent.querySelectorAll('.child')
children.forEach(el => {
    el.addEventListener('click', e => Object.assign(el.style, styles))
})

// After
const parent = select('#parent')
const chilren = parent.select('.child')
chilren.on('click', e => e.target.css(styles))

// And because all of the modules return their Node or NodeList you can chain your methods:
const headerList =
    select('h1')
    .css({color: 'blue'})
    .on('click', e => console.log('click'))

// headerList = NodeList
```
# Modules

## [select.js](modules/select.js)
### Syntax
```javascript
Node.prototype.select = function (query[, limit = true])
```
### Parameters
#### `query`
A vaild CSS selector string
#### `limit` [optional]
If `truthy` and there is only one element a `Node` will be returned. If `falsey` and there is only one element a `NodeList` will be returned.
### Returns
`Node` or `NodeList`
### Example
```javascript
// Before
const parent = document.querySelector('#parent') // Node
const children = parent.querySelectorAll('.child') // NodeList

// After 
const parent = select('#parent') // Node
const children = parent.select('.child') // NodeList
```


## [css.js](modules/css.js)
### Syntax
```javascript
Node.prototype.css = function (css)
```
### Parameters
#### `css`
An object containing valid JavaScript style keys and values
### Returns
`Node` or `NodeList`
### Example
```javascript
const styles = {
    color: 'red',
    fontSize: '14px'
}
// Before
Object.assign(parent.style, styles)

children.forEach(el => {
    Object.assign(el.style, styles)
})

// After
parent.css(styles)

chilren.css(styles)
```

## [events.js](modules/events.js)
The events module just wraps the built-in [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) and [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener).
### Returns
`Node` or `NodeList`
### Example
```javascript
// Before
parent.addEventListener('click', eventHandler)

children.foreach(el => {
    el.addEventListener('click', eventHandler)
})

// After
parent.on('click', eventHandler)
children.on('click', eventHandler)
```
## License

The project is licensed under the GNU General Public License v3.0. - see the [LICENSE.md](LICENSE.md) file for details
