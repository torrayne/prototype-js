Node.prototype.on = addEventListener
Node.prototype.off = removeEventListener

NodeList.prototype.on = function (trigger, handler, capture = false) {
  for (element in this) {
    element.on(trigger, handler.bind(this), capture)
  }
}

NodeList.prototype.off = function (trigger, handler, capture = false) {
  for (element in this) {
    element.removeEventListener(trigger, handler, capture)
  }
}