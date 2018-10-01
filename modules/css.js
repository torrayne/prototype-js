Node.prototype.css = function (css) {
  for (property in css) {
    this.style[property] = css[property]
  }
}

NodeList.prototype.css = function (css) {
  for (element of this) {
    element.css(css)
  }
}
