Node.prototype.on = function (trigger, handler, capture = false) {
  addEventListener(trigger, handler.bind(this), capture)
}

NodeList.prototype.on = function (trigger, handler, capture = false) {
  for (element in this) {
    element.on(trigger, handler.bind(this), capture)
  }
}

Node.prototype.off = removeEventListener

NodeList.prototype.off = function (trigger, handler, capture = false) {
  for (element in this) {
    element.removeEventListener(trigger, handler, capture)
  }
}