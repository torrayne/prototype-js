Node.prototype.select = function (query, limit = true) {
	let elements = this.querySelectorAll(query)

	if (limit === true) {
		if (elements.length == 0) return null
		if (elements.length == 1) return elements[0]
		return elements
	}

	if (typeof (limit) == 'number') {
		if (limit == 1) return elements[0]
		return Array.from(elements).slice(0, limit)
	}

	return elements
}

const select = Node.prototype.select.bind(document)
// te4st
