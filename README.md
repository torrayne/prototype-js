# Prototype JS

Prototyping pure JavaScript with parts of jQuery I actually use and like.

## Getting Started

Pick and choose from any of the modules, the minified folder contains [prototype.min.js](min/prototype.min.js) that has all of the modules merged into one file.

# Modules

## [select.js](modules/select.js)
### Syntax
```javascript
Node.prototype.select = function (query[, simplify = true])
```
### Parameters
#### `query`
A vaild CSS selector string
#### `simplify` [optional]
A boolean that allows returning a Node instead of a Nodelist with one element. Use `simplify = false` if used in a loop.
### Returns
`Node` or `Nodelist`
### Example
```javascript
// Before
const parent = document.querySelector('query') // Node
const children = parent.querySelectorAll('query') // Nodelist

// After 
const parent = select('query') // Node
const children = parent.select('query') // Nodelist
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
`Node`
### Example
```javascript
// Before
Object.assign(parent.style, {
    color: 'red',
    fontSize: '14px'
})

children.forEach(el => {
    Object.assign(el.style, {
        color: 'red',
        fontSize: '14px'
    })
})

// After
parent.css({
    color: 'red',
    fontSize: '14px'
})

chilren.css({
    color: 'red',
    fontSize: '14px'
})
```

## [events.js](modules/events.js)
The events module just wraps the built-in [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) and [`removeEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener).
### Returns
`Node`
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




## Example
Before
```javascript
const container = document.querySelector('#container')
const parts = container.querySelectorAll('.part')
parts.forEach(el => {
    el.addEventListener('click', e => {
        el.style.color = 'red'
        el.style.fontSize = '14px'
    })
})
```
After
```javascript
const container = select('.container')
const parts = container.select('.part')
parts.on('click', e => {
    e.target.css({
        color: 'red',
        fontSize: '14px'
    })
})
```
## License

The project is licensed under the GNU General Public License v3.0. - see the [LICENSE.md](LICENSE.md) file for details
