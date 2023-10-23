import $ from "../core.js";

$.prototype.getAttr = function (attribute) {
  if(!attribute) return this;

  for(let i = 0; i < this.length; i++) {
    return this[i].getAttribute(attribute);
  }

  return this;
};


$.prototype.setAttr = function (setAttributeName, valueAttribute) {
  if(!setAttributeName || !valueAttribute) return this;

  for(let i = 0; i < this.length; i++) {
    this[i].setAttribute(setAttributeName, valueAttribute);
  }

  return this;
};


$.prototype.toggleAttr = function (setAttributeName) {
  if(!setAttributeName) return this;

  for(let i = 0; i < this.length; i++) {
    this[i].toggleAttribute(setAttributeName);
  }

  return this;
};