Node.prototype.css = function (css) {
  Object.assign(this.style, css)
	return this
}

NodeList.prototype.css = function (css) {
	this.forEach(node => node.css(css))
	return this
}
