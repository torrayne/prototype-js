function select(query, simplify = true) {
  elements = document.querySelectorAll(query)
  if (elements.length <= 1 && simplify) {
    return elements[0]
  }
  return elements
}

// Event Listeners
Node.prototype.on = function (trigger, handler, capture = false) {
  addEventListener(trigger, handler.bind(this), capture)
}

NodeList.prototype.on = function (trigger, handler, capture = false) {
  for (element in this) {
    element.on(trigger, handler.bind(this), capture)
  }
}

Node.prototype.off = removeEventListener

NodeList.prototype.off = function (trigger, handler, capture = false) {
  for (element in this) {
    element.removeEventListener(trigger, handler, capture)
  }
}

// Css
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