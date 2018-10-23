Node.prototype.on = function (...atts) {
  this.addEventListener(...atts)
  return this
}

Node.prototype.off = function (...atts) {
  this.removeEventListener(...atts)
  return this
}

NodeList.prototype.on = function (...atts) {
  for(let node of this) node.on(...atts)
  return this
}

NodeList.prototype.off = function (...atts) {
  for(let node of this) node.off(...atts)
  return this
}
