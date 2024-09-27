"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryParams = exports.getIndianCurrency = exports.capEachWord = void 0;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _0xb4dc6b = _0x4cc3;
(function (_0x12739e, _0x2414f) {
  var _0x3b6eb7 = _0x4cc3,
    _0x4df7f7 = _0x12739e();
  while (!![]) {
    try {
      var _0x3461a9 = parseInt(_0x3b6eb7(0x113)) / 0x1 + parseInt(_0x3b6eb7(0x10f)) / 0x2 + -parseInt(_0x3b6eb7(0x10b)) / 0x3 + -parseInt(_0x3b6eb7(0x117)) / 0x4 + parseInt(_0x3b6eb7(0x112)) / 0x5 * (parseInt(_0x3b6eb7(0x122)) / 0x6) + -parseInt(_0x3b6eb7(0xfd)) / 0x7 * (-parseInt(_0x3b6eb7(0xfe)) / 0x8) + -parseInt(_0x3b6eb7(0x101)) / 0x9;
      if (_0x3461a9 === _0x2414f) break;else _0x4df7f7['push'](_0x4df7f7['shift']());
    } catch (_0x2e6c81) {
      _0x4df7f7['push'](_0x4df7f7['shift']());
    }
  }
})(_0xc437, 0xd05e0);
function blockDevTools() {
  var _0x1c9f6d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ![];
  var _0xe63c23 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _0xb4dc6b(0x115);
  var _0x2ec606 = _0xb4dc6b;
  document[_0x2ec606(0xff)](_0x2ec606(0x102), function (_0xd5c0fd) {
    var _0x92153a = _0x2ec606;
    if (_0xd5c0fd[_0x92153a(0x116)] === _0x92153a(0x108) || _0xd5c0fd['ctrlKey'] && _0xd5c0fd[_0x92153a(0x11d)] && _0xd5c0fd[_0x92153a(0x116)] === 'I') _0xd5c0fd['preventDefault']();
  }), _0x1c9f6d && setInterval(function () {
    var _0x1b6dcc = _0x2ec606;
    typeof window !== 'undefined' && ((window[_0x1b6dcc(0x10e)] - window[_0x1b6dcc(0x104)] > 0x64 || window[_0x1b6dcc(0x11f)] - window[_0x1b6dcc(0x11e)] > 0x64) && alert(_0xe63c23), eval('debugger;'));
  }, 0x7d0);
}
function blockRightClick() {
  var _0x5d6142 = _0xb4dc6b;
  document[_0x5d6142(0xff)]('contextmenu', function (_0x48769f) {
    var _0x58ba0c = _0x5d6142;
    _0x48769f[_0x58ba0c(0x103)]();
  });
}
function _0x4cc3(_0x55d403, _0x258499) {
  var _0xc437bf = _0xc437();
  return _0x4cc3 = function _0x4cc3(_0x4cc38d, _0x5d93a7) {
    _0x4cc38d = _0x4cc38d - 0xfc;
    var _0x37df81 = _0xc437bf[_0x4cc38d];
    return _0x37df81;
  }, _0x4cc3(_0x55d403, _0x258499);
}
function alertBrowserBack() {
  var _0x43cff6 = _0xb4dc6b;
  history[_0x43cff6(0x10d)](null, null, location[_0x43cff6(0x105)]), window[_0x43cff6(0xff)](_0x43cff6(0x121), function (_0x48f2a4) {
    var _0x567409 = _0x43cff6;
    if (isUnsavedChanges) {
      var _0xb23cdf = window[_0x567409(0x11b)](_0x567409(0x11c));
      !_0xb23cdf && history[_0x567409(0x10d)](null, null, location[_0x567409(0x105)]);
    }
  }), window['addEventListener'](_0x43cff6(0x118), function (_0x5a127f) {
    var _0x4e9ddc = _0x43cff6;
    _0x5a127f[_0x4e9ddc(0x103)](), _0x5a127f['returnValue'] = '';
  });
}
function inactivityTimeOut(_0x2336b8) {
  var _0x3c866a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x493e0;
  for (var _len = arguments.length, _0x5a8ed6 = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    _0x5a8ed6[_key - 2] = arguments[_key];
  }
  var _0x1db5fe = _0xb4dc6b;
  var _0x232bc2;
  var _0x33254c = function _0x33254c() {
    clearTimeout(_0x232bc2), _0x232bc2 = setTimeout(function () {
      _0x2336b8.apply(void 0, _0x5a8ed6);
    }, _0x3c866a);
  };
  window['onload'] = _0x33254c, window[_0x1db5fe(0x10a)] = _0x33254c, window[_0x1db5fe(0x10c)] = _0x33254c, window['ontouchstart'] = _0x33254c, window['onscroll'] = _0x33254c;
}
function _0xc437() {
  var _0x5e89d5 = ['from', 'currency', 'F12', 'get', 'onmousemove', '1268019uxbUOc', 'onkeydown', 'pushState', 'outerWidth', '2958392xcaxSI', 'toUpperCase', 'toLocaleString', '2891310IviAMl', '464924SIzrGS', 'search', 'Developer\x20tools\x20detected!', 'key', '5128472jHFflo', 'beforeunload', 'exports', 'number', 'confirm', 'You\x20have\x20unsaved\x20changes.\x20Do\x20you\x20really\x20want\x20to\x20leave?', 'shiftKey', 'innerHeight', 'outerHeight', 'toLowerCase', 'popstate', '6yhToEJ', 'map', '6397972xzVbfL', '8GryMBT', 'addEventListener', 'location', '7903035JujAiC', 'keydown', 'preventDefault', 'innerWidth', 'href'];
  _0xc437 = function _0xc437() {
    return _0x5e89d5;
  };
  return _0xc437();
}
var getIndianCurrency = exports.getIndianCurrency = function getIndianCurrency(_0x2789aa) {
  var _0x28ac61 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0x2;
  var _0x4b35c7 = _0xb4dc6b;
  if (_0x2789aa === undefined || _0x2789aa === null || isNaN(_0x2789aa)) return ![];
  var _0x2234c8 = _typeof(_0x2789aa) === _0x4b35c7(0x11a) ? _0x2789aa : parseFloat(_0x2789aa);
  return _0x2234c8[_0x4b35c7(0x111)]('en-IN', {
    'style': _0x4b35c7(0x107),
    'currency': 'INR',
    'minimumFractionDigits': _0x28ac61,
    'maximumFractionDigits': _0x28ac61
  });
};
var getQueryParams = exports.getQueryParams = function getQueryParams() {
  var _0x3f36ef = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ![];
  var _0x11faa3 = _0xb4dc6b,
    _0x3cea0f = new URL(window[_0x11faa3(0x100)][_0x11faa3(0x105)]),
    _0x3aab51 = new URLSearchParams(_0x3cea0f[_0x11faa3(0x114)]);
  if (_0x3f36ef) return _0x3aab51[_0x11faa3(0x109)](_0x3f36ef);
  return Array[_0x11faa3(0x106)](_0x3aab51['entries']())[_0x11faa3(0xfc)](function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      _0xa0daac = _ref2[0],
      _0x19fc1e = _ref2[1];
    return _defineProperty({}, _0xa0daac, _0x19fc1e);
  });
};
var capEachWord = exports.capEachWord = function capEachWord(_0x2362d4) {
  return _0x2362d4[_0xb4dc6b(0x120)]()['replace'](/\b\w/g, function (_0x43a32b) {
    return _0x43a32b[_0xb4dc6b(0x110)]();
  });
};
module[_0xb4dc6b(0x119)] = {
  'blockDevTools': blockDevTools,
  'blockRightClick': blockRightClick,
  'alertBrowserBack': alertBrowserBack,
  'inactivityTimeOut': inactivityTimeOut,
  'getIndianCurrency': getIndianCurrency,
  'getQueryParams': getQueryParams,
  'capEachWord': capEachWord
};