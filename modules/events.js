Node.prototype.on = addEventListener
Node.prototype.off = removeEventListener

NodeList.prototype.on = function (trigger, handler, capture = false) {
  Array.prototype.map.call(this, node => node.on(trigger, handler, capture))
}

NodeList.prototype.off = function (trigger, handler, capture = false) {
  NodeList.prototype.on = function (trigger, handler, capture = false) {
    Array.prototype.map.call(this, node => node.off(trigger, handler, capture))
  }
}
