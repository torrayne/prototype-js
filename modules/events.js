Node.prototype.on = addEventListener
Node.prototype.off = removeEventListener

NodeList.prototype.on = function (...atts) {
  Array.prototype.map.call(this, node => node.on(...atts))
}

NodeList.prototype.off = function (...atts) {
    Array.prototype.map.call(this, node => node.off(...atts))
}
