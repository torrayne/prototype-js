const createElement = (tagName, atts, ...rest) => Object.assign(document.createElement(tagName, ...rest), atts)

Node.prototype.appendBefore = function (element) {
	element.parentNode.insertBefore(this, element)
}

Node.prototype.appendAfter = function (element) {
	element.parentNode.insertBefore(this, element.nextSibling)
}
