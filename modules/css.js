Node.prototype.css = function (css) {
  Object.assign(this.style, css)
	return this
}

NodeList.prototype.css = function (css) {
	for(let node of this) node.css(css)
	return this
}
