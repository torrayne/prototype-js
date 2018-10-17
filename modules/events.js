Node.prototype.on = function (...atts) {
  this.addEventListener(...atts)
  return this
}

Node.prototype.off = function (...atts) {
  this.removeEventListener(...atts)
  return this
}

NodeList.prototype.on = function (...atts) {
  this.forEach(node => node.on(...atts))
  return this
}

NodeList.prototype.off = function (...atts) {
  this.forEach(node => node.off(...atts))
  return this
}

window.on = Node.prototype.on
