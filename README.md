# Prototype JS

## Go from this
```javascript
document.querySelectorAll('h1').forEach((el) => {
    let css = {
        color: 'red'
    }

    for (property in css) {
        el.style[property] = css[property]
    }
})
```
## To this
```javascript
select('h1').css({
    color: 'red'
})
```