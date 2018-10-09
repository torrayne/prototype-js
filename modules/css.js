Node.prototype.css = function (css) {
  Object.assign(this.style, css)
}

NodeList.prototype.css = function (css) {
  Array.prototype.map.call(this, node => node.css(css))
}
