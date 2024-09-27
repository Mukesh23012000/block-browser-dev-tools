"use strict";

function blockDevTools() {
  var isDebuggger = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Developer tools detected!";
  document.addEventListener('keydown', function (event) {
    if (event.key === 'F12' || event.ctrlKey && event.shiftKey && event.key === 'I') event.preventDefault();
  });
  if (isDebuggger) {
    setInterval(function () {
      if (typeof window !== 'undefined') {
        if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
          alert(message);
        }
        eval('debugger');
      }
    }, 2000);
  }
}
function blockRightClick() {
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
  });
}
function alertBrowserBack() {
  window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '';
  });
}
function inactivityTimeOut(callback) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300000;
  for (var _len = arguments.length, callbackArgs = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    callbackArgs[_key - 2] = arguments[_key];
  }
  var timeout;
  var resetTimer = function resetTimer() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(void 0, callbackArgs);
    }, time);
  };
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onkeydown = resetTimer;
  window.ontouchstart = resetTimer;
  window.onscroll = resetTimer;
}
module.exports = {
  blockDevTools: blockDevTools,
  blockRightClick: blockRightClick,
  alertBrowserBack: alertBrowserBack,
  inactivityTimeOut: inactivityTimeOut
};