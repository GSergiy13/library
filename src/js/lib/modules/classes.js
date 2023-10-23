import $ from '../core.js'

$.prototype.addClass = function (...ClassName) {
  for(let i = 0; i < this.langth; i++) {
    if(!this[i].classList) return this;

    this[i].classList.add(...ClassName);
  }

  return this;
};

$.prototype.removeClass = function (...ClassName) {
  for(let i = 0; i < this.langth; i++) {
    if(!this[i].classList) return this;

    this[i].classList.remove(...ClassName);
  }

  return this;
};

$.prototype.toggleClass = function (ClassName) {
  for(let i = 0; i < this.length; i++) {
    if(!this[i].classList) return this;

    this[i].classList.toggle(ClassName);
  }

  return this;
};
