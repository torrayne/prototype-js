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
Node.prototype.on = addEventListener
Node.prototype.off = removeEventListener

NodeList.prototype.on = function (trigger, handler, capture = false) {
  for (element of this) {
    element.on(trigger, handler.bind(this), capture)
  }
}

NodeList.prototype.off = function (trigger, handler, capture = false) {
  for (element of this) {
    element.off(trigger, handler, capture)
  }
}
function select(query, simplify = true) {
  elements = document.querySelectorAll(query)
  if (elements.length == 1 && simplify) return elements[0]
  return elements
}
