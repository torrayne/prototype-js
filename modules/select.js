Node.prototype.select = function (query, simplify = true) {
  const elements = this.querySelectorAll(query)
  if (elements.length == 1 && simplify) return elements[0]
  return elements
}

const select = Node.prototype.select.bind(document)
