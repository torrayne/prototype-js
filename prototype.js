Node.prototype.css = function (css) {
  for (property in css) {
    this.style[property] = css[property]
  }
}

NodeList.prototype.css = function (css) {
  for (element in this) {
    element.css(css)
  }
}
Node.prototype.on = addEventListener
Node.prototype.off = removeEventListener

NodeList.prototype.on = function (trigger, handler, capture = false) {
  for (element in this) {
    element.on(trigger, handler.bind(this), capture)
  }
}

NodeList.prototype.off = function (trigger, handler, capture = false) {
  for (element in this) {
    element.off(trigger, handler, capture)
  }
}

function querySelector(query, simplify = true) {
  elements = document.querySelectorAll(query)
  if (elements.length == 1 && simplify) return elements[0]
  return elements
}