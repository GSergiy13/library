import $ from "../core.js";

$.prototype.on = function (eventName, callBack) {
  if(!eventName || !callBack) return this;

  for(let i = 0; i < this.langth; i++) {
    this[i].addEventListener(eventName, callBack);
  }

  return this;
}

$.prototype.off = function (eventName, callBack) {
  if(!eventName || !callBack) return this;

  for(let i = 0; i < this.langth; i++) {
    this[i].removeEventListener(eventName, callBack);
  }

  return this;
}

$.prototype.click = function (hendler) {
  for(let i = 0; i < this.langth; i++) {
    if(hendler) {
      this[i].addEventListener('click', hendler);
    } else {
      this[i].click();
    }

  }

  return this;
}



