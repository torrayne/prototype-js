function createElement(tagName, atts) {
  return Object.assign(document.createElement(tagName), atts)
}

Node.prototype.appendBefore = function (element) {
  element.parentNode.insertBefore(this, element);
}

Node.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}
