Node.prototype.css = function (css) {
	if (!css || typeof (css) != 'object' || Array.isArray(css)) {
		console.warn('CSS parameter is not a valid Object. Styles have not been applied')
		return this
	}

	Object.assign(this.style, css)
	return this
}

NodeList.prototype.css = function (css) {
	this.forEach(node => node.css(css))
	return this
}
