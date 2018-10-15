Node.prototype.on = addEventListener
Node.prototype.off = removeEventListener

NodeList.prototype.on = function (...atts) {
  this.forEach(node => node.on(...atts))
  return this
}

NodeList.prototype.off = function (...atts) {
  this.forEach(node => node.off(...atts))
  return this
}
