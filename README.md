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

## Minify all modules
```shellscript
sh min.sh
```

## Merge all files into one prototype.js
```shellscript
sh make.sh ./prototype.js
```
