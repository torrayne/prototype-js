const querySelector = document.querySelector
const querySelectorAll = document.querySelectorAll

function select(query, simplify = true) {
  elements = document.querySelectorAll(query)
  if (elements.length == 1 && simplify) return elements[0]
  return elements
}
