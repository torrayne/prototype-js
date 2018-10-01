function createElement(tagName, atts) {
  let element = document.createElement(tagName)

  for (attribute in atts) {
    element.setAttribute(attribute, atts[attribute])
  }

  return element
}

Node.prototype.appendBefore = function (element) {
  element.parentNode.insertBefore(this, element);
}

Node.prototype.appendAfter = function (element) {
  element.parentNode.insertBefore(this, element.nextSibling)
}
