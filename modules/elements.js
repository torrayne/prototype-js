function createElement(tagName, atts) {
  let element = document.createElement(tagName)
  Object.assign(element, atts)
  return element
}

Node.prototype.appendBefore = function (element) {
  element.parentNode.insertBefore(this, element);
}

Node.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}
