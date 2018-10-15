Node.prototype.select = function (query, simplify = true) {
	console.log(this)
  const elements = this.querySelectorAll(query)
  if (elements.length == 1 && simplify) return elements[0]
  return elements
}

const select = (...atts) => document.select(...atts)
