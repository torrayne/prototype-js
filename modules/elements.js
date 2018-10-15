function createElement(tagName, atts, ...rest) {
  return Object.assign(document.createElement(tagName), atts, ...rest)
}

Node.prototype.appendBefore = function (element) {
  element.parentNode.insertBefore(this, element);
}

Node.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}
