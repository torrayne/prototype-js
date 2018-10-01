# Prototype JS

## Go from this
```javascript
document.querySelectorAll('h1').forEach((el) => {
    let css = {
        color: 'red'
    }

    for (style in css) {
        el.style[style] = css[style]
    }
})
```
## To this
```javascript
select('h1').css({
    color: 'red'
})
```