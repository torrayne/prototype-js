function select(query, simplify = true) {
  const elements = document.querySelectorAll(query)
  if (elements.length == 1 && simplify) return elements[0]
  return elements
}
