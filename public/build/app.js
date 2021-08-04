(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/js/jquery-3.5.1.js":
/*!***********************************!*\
  !*** ./assets/js/jquery-3.5.1.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.flat */ "./node_modules/core-js/modules/es.array.flat.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.array.unscopables.flat */ "./node_modules/core-js/modules/es.array.unscopables.flat.js");

__webpack_require__(/*! core-js/modules/es.date.now */ "./node_modules/core-js/modules/es.date.now.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.5.1",
      S = function S(e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return S.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function ne(e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) {
              l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            }

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
        }

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function h(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && S(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (S.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        S.find(e, i[t], n);
      }

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function is(e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  S.fn.extend({
    has: function has(e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (S.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return h(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function next(e) {
      return O(e, "nextSibling");
    },
    prev: function prev(e) {
      return O(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return h(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return h(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return T(e.firstChild);
    },
    contents: function contents(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        I(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function data(e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      Q.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
          }

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function ie(e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function ie(e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  S.fn.extend({
    show: function show() {
      return le(this, !0);
    },
    hide: function hide() {
      return le(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        ke(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) {
          d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && S.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) {
          if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            S.event.remove(e, d + t[l], n, r, !0);
          }
        }

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) {
        s[t] = arguments[t];
      }

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) {
            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function setup() {
        return Ae(this, e, Se), !1;
      },
      trigger: function trigger() {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function on(e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) {
        for (n = 0, r = s[i].length; n < r; n++) {
          S.event.add(t, i, s[i][n]);
        }
      }
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) {
        u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : b(u.textContent.replace(je, ""), u, l));
      }
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  S.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e;
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Oe(o[r], a[r]);
      } else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            }
            n[Y.expando] = void 0;
          }

          n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    }
  }), S.fn.extend({
    detach: function detach(e) {
      return Re(this, e, !0);
    },
    remove: function remove(e) {
      return Re(this, e);
    },
    text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function Ie(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function We(e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) {
      o[i] = e.style[i], e.style[i] = t[i];
    }

    for (i in r = n.call(e), t) {
      e.style[i] = o[i];
    }

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), s;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      },
      reliableTrDimensions: function reliableTrDimensions() {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) {
        if ((e = _e[n] + t) in ze) return e;
      }
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) {
            o[t[a]] = S.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], ot.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || S.style(e, r);
        }
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
          for (r in g || le([e]), Y.remove(e, "fxshow"), d) {
            S.style(e, r, d[r]);
          }
        })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function a() {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && at.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function attr(e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), pt = {
    set: function set(e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function prop(e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) {
        if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = vt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = S(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function wt(e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      Dt(n + "[" + t + "]", e[t], r, i);
    }
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      Dt(n, e[n], t, i);
    }
    return r.join("&");
  }, S.fn.extend({
    serialize: function serialize() {
      return S.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || zt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return S;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./assets/js/puddyb.js":
/*!*****************************!*\
  !*** ./assets/js/puddyb.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_puddyb_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/puddyb.scss */ "./assets/scss/puddyb.scss");
/* harmony import */ var _scss_puddyb_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_puddyb_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_slick_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/slick.scss */ "./assets/scss/slick.scss");
/* harmony import */ var _scss_slick_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_slick_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/slick-theme.scss */ "./assets/scss/slick-theme.scss");
/* harmony import */ var _scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_slick_theme_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jquery_3_5_1_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jquery-3.5.1.js */ "./assets/js/jquery-3.5.1.js");
/* harmony import */ var _jquery_3_5_1_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jquery_3_5_1_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slick_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slick.js */ "./assets/js/slick.js");
/* harmony import */ var _slick_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_slick_js__WEBPACK_IMPORTED_MODULE_5__);


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)





$(window).ready(function () {
  if ($('#content.discobus #bus_slider').length) $('#content.discobus #bus_slider').slick();

  if ($('#overtitle').length) {
    setTimeout(function () {
      $('#overtitle_bar').hide(250);
      $('#overtitle').hide(250);
      $('#shroud').hide(300);
    }, 3000);
  }

  ;
  $('#content.temps_a_bord #watches_row .watch').click(function () {
    var popin;
    popin = $('#temps_a_bord_popin_' + $(this).data('id'));

    if (popin.length) {
      $('#shroud').show(300);
      popin.addClass('active').show(300);
    }
  });
  $('#bus_row .bus .inner').click(function () {
    var bus = $('#nos_discobus_popin .bus[data-id=' + $(this).parent().data('id') + ']');
    bus.addClass('active');
    $('#shroud').show(300);
    $('#nos_discobus_popin').addClass('active').show(300, function () {
      bus.children('.slider').slick();
    });
  });
  $('#shroud').click(function () {
    $('.popin.active').hide(300).removeClass('active');
    $('#shroud').hide(300);
  });
  $('.popin .close').click(function () {
    $('.popin.active').hide(300).removeClass('active');
    $('#shroud').hide(300);
  });
  $('#phone').click(function () {
    if ($(this).hasClass('active')) {
      $(this).children('div').hide(250);
      $(this).removeClass('active');
    } else {
      $(this).children('div').show(250);
      $(this).addClass('active');
    }
  });
  $('main.main div.alert .close').click(function () {
    $(this).parent().hide(300);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./assets/js/slick.js":
/*!****************************!*\
  !*** ./assets/js/slick.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ "./assets/scss/puddyb.scss":
/*!*********************************!*\
  !*** ./assets/scss/puddyb.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/scss/slick-theme.scss":
/*!**************************************!*\
  !*** ./assets/scss/slick-theme.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/scss/slick.scss":
/*!********************************!*\
  !*** ./assets/scss/slick.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./assets/js/puddyb.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvanF1ZXJ5LTMuNS4xLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wdWRkeWIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NsaWNrLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3B1ZGR5Yi5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3NsaWNrLXRoZW1lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3Mvc2xpY2suc2NzcyJdLCJuYW1lcyI6WyJlIiwidCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudCIsIkVycm9yIiwid2luZG93IiwiQyIsInIiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInMiLCJzbGljZSIsImciLCJmbGF0IiwiY2FsbCIsImNvbmNhdCIsImFwcGx5IiwidSIsInB1c2giLCJpIiwiaW5kZXhPZiIsIm4iLCJvIiwidG9TdHJpbmciLCJ2IiwiaGFzT3duUHJvcGVydHkiLCJhIiwibCIsInkiLCJtIiwibm9kZVR5cGUiLCJ4IiwiRSIsImMiLCJ0eXBlIiwic3JjIiwibm9uY2UiLCJub01vZHVsZSIsImIiLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInciLCJmIiwiUyIsImZuIiwiaW5pdCIsInAiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJqcXVlcnkiLCJjb25zdHJ1Y3RvciIsInRvQXJyYXkiLCJnZXQiLCJwdXNoU3RhY2siLCJtZXJnZSIsInByZXZPYmplY3QiLCJlYWNoIiwibWFwIiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJldmVuIiwiZ3JlcCIsIm9kZCIsImVuZCIsInNvcnQiLCJzcGxpY2UiLCJleHRlbmQiLCJpc1BsYWluT2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwiZXhwYW5kbyIsIk1hdGgiLCJyYW5kb20iLCJyZXBsYWNlIiwiaXNSZWFkeSIsImVycm9yIiwibm9vcCIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwibWFrZUFycmF5IiwiaW5BcnJheSIsImd1aWQiLCJzdXBwb3J0IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiZCIsImgiLCJUIiwiRGF0ZSIsImsiLCJ1ZSIsIkEiLCJOIiwiRCIsImoiLCJxIiwicG9wIiwiTCIsIkgiLCJPIiwiUCIsIlIiLCJNIiwiSSIsIlciLCJGIiwiQiIsIlJlZ0V4cCIsIiQiLCJfIiwieiIsIlUiLCJYIiwiViIsIkciLCJJRCIsIkNMQVNTIiwiVEFHIiwiQVRUUiIsIlBTRVVETyIsIkNISUxEIiwiYm9vbCIsIm5lZWRzQ29udGV4dCIsIlkiLCJRIiwiSiIsIksiLCJaIiwiZWUiLCJ0ZSIsIm5lIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicmUiLCJpZSIsImNoYXJDb2RlQXQiLCJvZSIsImFlIiwiYmUiLCJkaXNhYmxlZCIsIm5vZGVOYW1lIiwiZGlyIiwibmV4dCIsImNoaWxkTm9kZXMiLCJzZSIsIm93bmVyRG9jdW1lbnQiLCJleGVjIiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3QiLCJ5ZSIsInNjb3BlIiwieGUiLCJqb2luIiwicXVlcnlTZWxlY3RvckFsbCIsInJlbW92ZUF0dHJpYnV0ZSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJsZSIsImNlIiwiZmUiLCJhdHRySGFuZGxlIiwicGUiLCJzb3VyY2VJbmRleCIsIm5leHRTaWJsaW5nIiwiZGUiLCJoZSIsImdlIiwiaXNEaXNhYmxlZCIsInZlIiwiaXNYTUwiLCJuYW1lc3BhY2VVUkkiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXREb2N1bWVudCIsImRlZmF1bHRWaWV3IiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsImF0dGFjaEV2ZW50IiwiYXR0cmlidXRlcyIsImNsYXNzTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJmaWx0ZXIiLCJmaW5kIiwiZ2V0QXR0cmlidXRlTm9kZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwibWF0Y2hlc1NlbGVjdG9yIiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsImRpc2Nvbm5lY3RlZE1hdGNoIiwiY29tcGFyZURvY3VtZW50UG9zaXRpb24iLCJjb250YWlucyIsInNvcnREZXRhY2hlZCIsInVuc2hpZnQiLCJhdHRyIiwic3BlY2lmaWVkIiwiZXNjYXBlIiwidW5pcXVlU29ydCIsImRldGVjdER1cGxpY2F0ZXMiLCJzb3J0U3RhYmxlIiwiZ2V0VGV4dCIsInRleHRDb250ZW50IiwiZmlyc3RDaGlsZCIsIm5vZGVWYWx1ZSIsInNlbGVjdG9ycyIsImNyZWF0ZVBzZXVkbyIsIm1hdGNoIiwicmVsYXRpdmUiLCJwcmVGaWx0ZXIiLCJsYXN0Q2hpbGQiLCJ1bmlxdWVJRCIsInBzZXVkb3MiLCJzZXRGaWx0ZXJzIiwibm90IiwiaGFzIiwibGFuZyIsInRhcmdldCIsImxvY2F0aW9uIiwiaGFzaCIsInJvb3QiLCJmb2N1cyIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImVuYWJsZWQiLCJjaGVja2VkIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiZW1wdHkiLCJwYXJlbnQiLCJoZWFkZXIiLCJpbnB1dCIsImJ1dHRvbiIsImx0IiwiZ3QiLCJudGgiLCJyYWRpbyIsImNoZWNrYm94IiwiZmlsZSIsInBhc3N3b3JkIiwiaW1hZ2UiLCJzdWJtaXQiLCJyZXNldCIsIm1lIiwid2UiLCJUZSIsIkNlIiwiRWUiLCJmaWx0ZXJzIiwidG9rZW5pemUiLCJjb21waWxlIiwic2VsZWN0b3IiLCJzZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJleHByIiwidW5pcXVlIiwiaXNYTUxEb2MiLCJlc2NhcGVTZWxlY3RvciIsImlzIiwicGFyc2VIVE1MIiwicmVhZHkiLCJjaGlsZHJlbiIsImNvbnRlbnRzIiwicHJldiIsImNsb3Nlc3QiLCJpbmRleCIsInByZXZBbGwiLCJhZGQiLCJhZGRCYWNrIiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImNvbnRlbnREb2N1bWVudCIsImNvbnRlbnQiLCJyZXZlcnNlIiwicHJvbWlzZSIsImRvbmUiLCJmYWlsIiwidGhlbiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJzdG9wT25GYWxzZSIsIm1lbW9yeSIsInJlbW92ZSIsImRpc2FibGUiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwicGlwZSIsInByb2dyZXNzIiwibm90aWZ5IiwicmVzb2x2ZSIsInJlamVjdCIsIlR5cGVFcnJvciIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsImV4Y2VwdGlvbkhvb2siLCJzdGFja1RyYWNlIiwicmVqZWN0V2l0aCIsImdldFN0YWNrSG9vayIsInNldFRpbWVvdXQiLCJ3aGVuIiwiY29uc29sZSIsIndhcm4iLCJuYW1lIiwibWVzc2FnZSIsInN0YWNrIiwicmVhZHlFeGNlcHRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVhZHlXYWl0IiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwidG9VcHBlckNhc2UiLCJ1aWQiLCJjYWNoZSIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwic2V0IiwiYWNjZXNzIiwiaGFzRGF0YSIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJyZW1vdmVEYXRhIiwiX2RhdGEiLCJfcmVtb3ZlRGF0YSIsInF1ZXVlIiwiZGVxdWV1ZSIsIl9xdWV1ZUhvb2tzIiwic3RvcCIsImNsZWFyUXVldWUiLCJzb3VyY2UiLCJjb21wb3NlZCIsImdldFJvb3ROb2RlIiwic3R5bGUiLCJkaXNwbGF5IiwiY3NzIiwiY3VyIiwiY3NzTnVtYmVyIiwidW5pdCIsInN0YXJ0IiwiYm9keSIsInNob3ciLCJoaWRlIiwidG9nZ2xlIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNoZWNrQ2xvbmUiLCJjbG9uZU5vZGUiLCJub0Nsb25lQ2hlY2tlZCIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIl9kZWZhdWx0IiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwib3B0Z3JvdXAiLCJodG1sUHJlZmlsdGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJTZSIsImtlIiwib2ZmIiwiZXZlbnQiLCJBZSIsIm5hbWVzcGFjZSIsImhhbmRsZXIiLCJpc1RyaWdnZXIiLCJzcGVjaWFsIiwiZGVsZWdhdGVUeXBlIiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiRXZlbnQiLCJnbG9iYWwiLCJldmVudHMiLCJjcmVhdGUiLCJoYW5kbGUiLCJ0cmlnZ2VyZWQiLCJkaXNwYXRjaCIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJkZWxlZ2F0ZUNvdW50Iiwic2V0dXAiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwiZml4IiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImhhbmRsZXJzIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbSIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwicm5hbWVzcGFjZSIsImhhbmRsZU9iaiIsInJlc3VsdCIsInBvc3REaXNwYXRjaCIsImFkZFByb3AiLCJlbnVtZXJhYmxlIiwib3JpZ2luYWxFdmVudCIsIndyaXRhYmxlIiwibG9hZCIsIm5vQnViYmxlIiwiY2xpY2siLCJiZWZvcmV1bmxvYWQiLCJyZXR1cm5WYWx1ZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJyZWxhdGVkVGFyZ2V0IiwidGltZVN0YW1wIiwibm93IiwiaXNTaW11bGF0ZWQiLCJhbHRLZXkiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImNoYW5nZWRUb3VjaGVzIiwiY3RybEtleSIsImRldGFpbCIsImV2ZW50UGhhc2UiLCJtZXRhS2V5IiwicGFnZVgiLCJwYWdlWSIsInNoaWZ0S2V5IiwidmlldyIsImNvZGUiLCJjaGFyQ29kZSIsImtleSIsImtleUNvZGUiLCJidXR0b25zIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwic2NyZWVuWCIsInNjcmVlblkiLCJ0YXJnZXRUb3VjaGVzIiwidG9FbGVtZW50IiwidG91Y2hlcyIsIndoaWNoIiwiYmx1ciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwib24iLCJvbmUiLCJOZSIsIkRlIiwiamUiLCJxZSIsIkxlIiwiSGUiLCJPZSIsIlBlIiwiaHRtbCIsImNsb25lIiwiX2V2YWxVcmwiLCJSZSIsImNsZWFuRGF0YSIsImRldGFjaCIsImFwcGVuZCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJhZnRlciIsInJlcGxhY2VXaXRoIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJpbnNlcnRBZnRlciIsInJlcGxhY2VBbGwiLCJNZSIsIkllIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIldlIiwiRmUiLCJCZSIsImdldFByb3BlcnR5VmFsdWUiLCJwaXhlbEJveFN0eWxlcyIsIndpZHRoIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIiRlIiwiY3NzVGV4dCIsIm1hcmdpbkxlZnQiLCJyaWdodCIsInBvc2l0aW9uIiwib2Zmc2V0V2lkdGgiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsImJveFNpemluZ1JlbGlhYmxlIiwicGl4ZWxQb3NpdGlvbiIsInJlbGlhYmxlTWFyZ2luTGVmdCIsInNjcm9sbGJveFNpemUiLCJyZWxpYWJsZVRyRGltZW5zaW9ucyIsImhlaWdodCIsInBhcnNlSW50IiwiX2UiLCJ6ZSIsIlVlIiwiWGUiLCJjc3NQcm9wcyIsIlZlIiwiR2UiLCJZZSIsInZpc2liaWxpdHkiLCJRZSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwiSmUiLCJtYXgiLCJLZSIsImNlaWwiLCJaZSIsImdldENsaWVudFJlY3RzIiwiZXQiLCJjc3NIb29rcyIsIm9wYWNpdHkiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImNvbHVtbkNvdW50IiwiZmlsbE9wYWNpdHkiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJncmlkQXJlYSIsImdyaWRDb2x1bW4iLCJncmlkQ29sdW1uRW5kIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZFJvdyIsImdyaWRSb3dFbmQiLCJncmlkUm93U3RhcnQiLCJsaW5lSGVpZ2h0Iiwib3JkZXIiLCJvcnBoYW5zIiwid2lkb3dzIiwiekluZGV4Iiwiem9vbSIsInNldFByb3BlcnR5IiwiaXNGaW5pdGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImV4cGFuZCIsIlR3ZWVuIiwicHJvcCIsImVhc2luZyIsIm9wdGlvbnMiLCJwcm9wSG9va3MiLCJydW4iLCJkdXJhdGlvbiIsInBvcyIsInN0ZXAiLCJmeCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJsaW5lYXIiLCJzd2luZyIsImNvcyIsIlBJIiwidHQiLCJudCIsInJ0IiwiaXQiLCJvdCIsImF0Iiwic3QiLCJoaWRkZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJpbnRlcnZhbCIsInRpY2siLCJ1dCIsImN0IiwiZnQiLCJ0d2VlbmVycyIsInByZWZpbHRlcnMiLCJzdGFydFRpbWUiLCJ0d2VlbnMiLCJwcm9wcyIsIm9wdHMiLCJzcGVjaWFsRWFzaW5nIiwib3JpZ2luYWxQcm9wZXJ0aWVzIiwib3JpZ2luYWxPcHRpb25zIiwiY3JlYXRlVHdlZW4iLCJiaW5kIiwiY29tcGxldGUiLCJ0aW1lciIsImFuaW0iLCJBbmltYXRpb24iLCJ0d2VlbmVyIiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsInByZWZpbHRlciIsInNwZWVkIiwic3BlZWRzIiwib2xkIiwiZmFkZVRvIiwiYW5pbWF0ZSIsImZpbmlzaCIsInRpbWVycyIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImZhZGVJbiIsImZhZGVPdXQiLCJmYWRlVG9nZ2xlIiwic2xvdyIsImZhc3QiLCJkZWxheSIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInJhZGlvVmFsdWUiLCJwdCIsImR0IiwicmVtb3ZlQXR0ciIsImF0dHJIb29rcyIsImh0IiwidnQiLCJ5dCIsIm10IiwicmVtb3ZlUHJvcCIsInByb3BGaXgiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsInh0IiwidmFsIiwidmFsSG9va3MiLCJmb2N1c2luIiwiYnQiLCJ3dCIsInBhcmVudFdpbmRvdyIsInNpbXVsYXRlIiwidHJpZ2dlckhhbmRsZXIiLCJUdCIsIkN0IiwiRXQiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIlN0Iiwia3QiLCJBdCIsIk50IiwiRHQiLCJwYXJhbSIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwianQiLCJxdCIsIkx0IiwiSHQiLCJPdCIsIlB0IiwiUnQiLCJNdCIsIkl0IiwiV3QiLCJGdCIsIkJ0IiwiZGF0YVR5cGVzIiwiJHQiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsImFjdGl2ZSIsImxhc3RNb2RpZmllZCIsImV0YWciLCJ1cmwiLCJpc0xvY2FsIiwicHJvdG9jb2wiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJhY2NlcHRzIiwieG1sIiwianNvbiIsInJlc3BvbnNlRmllbGRzIiwiY29udmVydGVycyIsImNvbnRleHQiLCJhamF4U2V0dXAiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJzdGF0dXNDb2RlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZXRSZXF1ZXN0SGVhZGVyIiwib3ZlcnJpZGVNaW1lVHlwZSIsIm1pbWVUeXBlIiwic3RhdHVzIiwiYWJvcnQiLCJtZXRob2QiLCJkYXRhVHlwZSIsImNyb3NzRG9tYWluIiwiaG9zdCIsInRyYWRpdGlvbmFsIiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInN1Y2Nlc3MiLCJ0aW1lb3V0Iiwic2VuZCIsImRhdGFGaWx0ZXIiLCJzdGF0dXNUZXh0IiwiZ2V0SlNPTiIsImdldFNjcmlwdCIsIndyYXBBbGwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndyYXBJbm5lciIsIndyYXAiLCJ1bndyYXAiLCJ2aXNpYmxlIiwib2Zmc2V0SGVpZ2h0IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJfdCIsInp0IiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib250aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0IiwiYmluYXJ5IiwicmVzcG9uc2UiLCJzY3JpcHQiLCJzY3JpcHRBdHRycyIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiVXQiLCJYdCIsIlZ0IiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwiY3JlYXRlSFRNTERvY3VtZW50IiwiaW1wbGVtZW50YXRpb24iLCJhbmltYXRlZCIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJ1bmJpbmQiLCJkZWxlZ2F0ZSIsInVuZGVsZWdhdGUiLCJob3ZlciIsIkd0IiwicHJveHkiLCJob2xkUmVhZHkiLCJwYXJzZUpTT04iLCJpc0Z1bmN0aW9uIiwiaXNXaW5kb3ciLCJjYW1lbENhc2UiLCJpc051bWVyaWMiLCJpc05hTiIsInRyaW0iLCJkZWZpbmUiLCJZdCIsImpRdWVyeSIsIlF0Iiwibm9Db25mbGljdCIsInNsaWNrIiwicG9waW4iLCJidXMiLCJmYWN0b3J5IiwiU2xpY2siLCJpbnN0YW5jZVVpZCIsImVsZW1lbnQiLCJzZXR0aW5ncyIsImRhdGFTZXR0aW5ncyIsImRlZmF1bHRzIiwiYWNjZXNzaWJpbGl0eSIsImFkYXB0aXZlSGVpZ2h0IiwiYXBwZW5kQXJyb3dzIiwiYXBwZW5kRG90cyIsImFycm93cyIsImFzTmF2Rm9yIiwicHJldkFycm93IiwibmV4dEFycm93IiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJjc3NFYXNlIiwiY3VzdG9tUGFnaW5nIiwic2xpZGVyIiwiZG90cyIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVkZ2VGcmljdGlvbiIsImZhZGUiLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzd2lwZSIsInN3aXBlVG9TbGlkZSIsInRvdWNoTW92ZSIsInRvdWNoVGhyZXNob2xkIiwidXNlQ1NTIiwidXNlVHJhbnNmb3JtIiwidmFyaWFibGVXaWR0aCIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwid2FpdEZvckFuaW1hdGUiLCJpbml0aWFscyIsImFuaW1hdGluZyIsImRyYWdnaW5nIiwiYXV0b1BsYXlUaW1lciIsImN1cnJlbnREaXJlY3Rpb24iLCJjdXJyZW50TGVmdCIsImN1cnJlbnRTbGlkZSIsImRpcmVjdGlvbiIsIiRkb3RzIiwibGlzdFdpZHRoIiwibGlzdEhlaWdodCIsImxvYWRJbmRleCIsIiRuZXh0QXJyb3ciLCIkcHJldkFycm93Iiwic2Nyb2xsaW5nIiwic2xpZGVDb3VudCIsInNsaWRlV2lkdGgiLCIkc2xpZGVUcmFjayIsIiRzbGlkZXMiLCJzbGlkaW5nIiwic2xpZGVPZmZzZXQiLCJzd2lwZUxlZnQiLCJzd2lwaW5nIiwiJGxpc3QiLCJ0b3VjaE9iamVjdCIsInRyYW5zZm9ybXNFbmFibGVkIiwidW5zbGlja2VkIiwiYWN0aXZlQnJlYWtwb2ludCIsImFuaW1UeXBlIiwiYW5pbVByb3AiLCJicmVha3BvaW50cyIsImJyZWFrcG9pbnRTZXR0aW5ncyIsImNzc1RyYW5zaXRpb25zIiwiZm9jdXNzZWQiLCJpbnRlcnJ1cHRlZCIsInBhdXNlZCIsInBvc2l0aW9uUHJvcCIsInJvd0NvdW50Iiwic2hvdWxkQ2xpY2siLCIkc2xpZGVyIiwiJHNsaWRlc0NhY2hlIiwidHJhbnNmb3JtVHlwZSIsInRyYW5zaXRpb25UeXBlIiwidmlzaWJpbGl0eUNoYW5nZSIsIndpbmRvd1dpZHRoIiwid2luZG93VGltZXIiLCJvcmlnaW5hbFNldHRpbmdzIiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJhdXRvUGxheUNsZWFyIiwiYXV0b1BsYXlJdGVyYXRvciIsImNoYW5nZVNsaWRlIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInNldFBvc2l0aW9uIiwic3dpcGVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJrZXlIYW5kbGVyIiwiaHRtbEV4cHIiLCJyZWdpc3RlckJyZWFrcG9pbnRzIiwiYWN0aXZhdGVBREEiLCJhZGRTbGlkZSIsInNsaWNrQWRkIiwibWFya3VwIiwiYWRkQmVmb3JlIiwidW5sb2FkIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsIm91dGVySGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwiYW5pbVN0YXJ0IiwiYXBwbHlUcmFuc2l0aW9uIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJzbGlkZUhhbmRsZXIiLCJ0cmFuc2l0aW9uIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2xpZGVUbyIsImJ1aWxkQXJyb3dzIiwiYnVpbGREb3RzIiwiZG90IiwiZ2V0RG90Q291bnQiLCJidWlsZE91dCIsInNldHVwSW5maW5pdGUiLCJ1cGRhdGVEb3RzIiwic2V0U2xpZGVDbGFzc2VzIiwiYnVpbGRSb3dzIiwibmV3U2xpZGVzIiwibnVtT2ZTbGlkZXMiLCJvcmlnaW5hbFNsaWRlcyIsInNsaWRlc1BlclNlY3Rpb24iLCJyb3ciLCJjaGVja1Jlc3BvbnNpdmUiLCJpbml0aWFsIiwiZm9yY2VVcGRhdGUiLCJicmVha3BvaW50IiwidGFyZ2V0QnJlYWtwb2ludCIsInJlc3BvbmRUb1dpZHRoIiwidHJpZ2dlckJyZWFrcG9pbnQiLCJzbGlkZXJXaWR0aCIsImlubmVyV2lkdGgiLCJtaW4iLCJ1bnNsaWNrIiwicmVmcmVzaCIsImRvbnRBbmltYXRlIiwiJHRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwiY2hlY2tOYXZpZ2FibGUiLCJuYXZpZ2FibGVzIiwicHJldk5hdmlnYWJsZSIsImdldE5hdmlnYWJsZUluZGV4ZXMiLCJjbGVhblVwRXZlbnRzIiwiaW50ZXJydXB0IiwiY2xlYW5VcFNsaWRlRXZlbnRzIiwib3JpZW50YXRpb25DaGFuZ2UiLCJyZXNpemUiLCJjbGVhblVwUm93cyIsImRlc3Ryb3kiLCJmYWRlU2xpZGUiLCJzbGlkZUluZGV4IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm9mZnNldExlZnQiLCJvdXRlcldpZHRoIiwiZ2V0T3B0aW9uIiwic2xpY2tHZXRPcHRpb24iLCJpbmRleGVzIiwiZ2V0U2xpY2siLCJnZXRTbGlkZUNvdW50Iiwic2xpZGVzVHJhdmVyc2VkIiwic3dpcGVkU2xpZGUiLCJjZW50ZXJPZmZzZXQiLCJhYnMiLCJnb1RvIiwic2xpY2tHb1RvIiwiY3JlYXRpb24iLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwic2xpZGVDb250cm9sSW5kZXgiLCJhcmlhQnV0dG9uQ29udHJvbCIsIm1hcHBlZFNsaWRlSW5kZXgiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiYWN0aW9uIiwiaW5pdFVJIiwidGFnTmFtZSIsImxvYWRSYW5nZSIsImNsb25lUmFuZ2UiLCJyYW5nZVN0YXJ0IiwicmFuZ2VFbmQiLCJsb2FkSW1hZ2VzIiwiaW1hZ2VzU2NvcGUiLCJpbWFnZVNvdXJjZSIsImltYWdlU3JjU2V0IiwiaW1hZ2VTaXplcyIsImltYWdlVG9Mb2FkIiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwicHJvZ3Jlc3NpdmVMYXp5TG9hZCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwic2xpY2tQcmV2IiwidHJ5Q291bnQiLCIkaW1nc1RvTG9hZCIsImluaXRpYWxpemluZyIsImxhc3RWaXNpYmxlSW5kZXgiLCJjdXJyZW50QnJlYWtwb2ludCIsInJlc3BvbnNpdmVTZXR0aW5ncyIsIndpbmRvd0RlbGF5IiwicmVtb3ZlU2xpZGUiLCJzbGlja1JlbW92ZSIsInJlbW92ZUJlZm9yZSIsInJlbW92ZUFsbCIsInNldENTUyIsInBvc2l0aW9uUHJvcHMiLCJzZXREaW1lbnNpb25zIiwic2V0RmFkZSIsInNldEhlaWdodCIsInNldE9wdGlvbiIsInNsaWNrU2V0T3B0aW9uIiwiaXRlbSIsIm9wdCIsImJvZHlTdHlsZSIsIldlYmtpdFRyYW5zaXRpb24iLCJ1bmRlZmluZWQiLCJNb3pUcmFuc2l0aW9uIiwibXNUcmFuc2l0aW9uIiwiT1RyYW5zZm9ybSIsInBlcnNwZWN0aXZlUHJvcGVydHkiLCJ3ZWJraXRQZXJzcGVjdGl2ZSIsIk1velRyYW5zZm9ybSIsIk1velBlcnNwZWN0aXZlIiwid2Via2l0VHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJhbGxTbGlkZXMiLCJyZW1haW5kZXIiLCJldmVuQ29lZiIsImluZmluaXRlQ291bnQiLCJ0YXJnZXRFbGVtZW50Iiwic3luYyIsImFuaW1TbGlkZSIsIm9sZFNsaWRlIiwic2xpZGVMZWZ0IiwibmF2VGFyZ2V0Iiwic3dpcGVEaXJlY3Rpb24iLCJ4RGlzdCIsInlEaXN0Iiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQi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Z0I1aUMsS0FBaEIsQ0FBc0J1RyxDQUFDLENBQUNwRyxDQUFELENBQUQsQ0FBSzB4QixLQUEzQixFQUFrQ2dVLElBQWxDLENBQU47QUFDSixVQUFJLE9BQU9DLEdBQVAsSUFBYyxXQUFsQixFQUErQixPQUFPQSxHQUFQO0FBQ2xDOztBQUNELFdBQU92L0IsQ0FBUDtBQUNILEdBZkQ7QUFpQkgsQ0FqN0ZDLENBQUQsQzs7Ozs7Ozs7Ozs7QUNqQkQsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIGpRdWVyeSB2My41LjEgfCAoYykgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXHJcbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1lLmRvY3VtZW50P3QoZSwhMCk6ZnVuY3Rpb24oZSl7aWYoIWUuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gdChlKX06dChlKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihDLGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVtdLHI9T2JqZWN0LmdldFByb3RvdHlwZU9mLHM9dC5zbGljZSxnPXQuZmxhdD9mdW5jdGlvbihlKXtyZXR1cm4gdC5mbGF0LmNhbGwoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiB0LmNvbmNhdC5hcHBseShbXSxlKX0sdT10LnB1c2gsaT10LmluZGV4T2Ysbj17fSxvPW4udG9TdHJpbmcsdj1uLmhhc093blByb3BlcnR5LGE9di50b1N0cmluZyxsPWEuY2FsbChPYmplY3QpLHk9e30sbT1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZcIm51bWJlclwiIT10eXBlb2YgZS5ub2RlVHlwZX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxFPUMuZG9jdW1lbnQsYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLHQpZm9yKHIgaW4gYykoaT10W3JdfHx0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUocikpJiZvLnNldEF0dHJpYnV0ZShyLGkpO24uaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25bby5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgZj1cIjMuNS4xXCIsUz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUy5mbi5pbml0KGUsdCl9O2Z1bmN0aW9uIHAoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj13KGUpO3JldHVybiFtKGUpJiYheChlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9Uy5mbj1TLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6UyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMubWFwKHRoaXMsZnVuY3Rpb24oZSx0KXtyZXR1cm4gbi5jYWxsKGUsdCxlKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2socy5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxldmVuOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQrMSklMn0pKX0sb2RkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMuZ3JlcCh0aGlzLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQlMn0pKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LFMuZXh0ZW5kPVMuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8bShhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpcj1lW3RdLFwiX19wcm90b19fXCIhPT10JiZhIT09ciYmKGwmJnImJihTLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8Uy5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPVMuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxTLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhmK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW8uY2FsbChlKSkmJighKHQ9cihlKSl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG49di5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcikmJmEuY2FsbChuKT09PWwpfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0O2Zvcih0IGluIGUpcmV0dXJuITE7cmV0dXJuITB9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oZSx0LG4pe2IoZSx7bm9uY2U6dCYmdC5ub25jZX0sbil9LGVhY2g6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTA7aWYocChlKSl7Zm9yKG49ZS5sZW5ndGg7cjxuO3IrKylpZighMT09PXQuY2FsbChlW3JdLHIsZVtyXSkpYnJlYWt9ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihwKE9iamVjdChlKSk/Uy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTp1LmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6aS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9MCxvPWUubGVuZ3RoLGE9IW47aTxvO2krKykhdChlW2ldLGkpIT09YSYmci5wdXNoKGVbaV0pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLGE9W107aWYocChlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtyZXR1cm4gZyhhKX0sZ3VpZDoxLHN1cHBvcnQ6eX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKFMuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLFMuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGUsdCl7bltcIltvYmplY3QgXCIrdCtcIl1cIl09dC50b0xvd2VyQ2FzZSgpfSk7dmFyIGQ9ZnVuY3Rpb24obil7dmFyIGUsZCxiLG8saSxoLGYsZyx3LHUsbCxULEMsYSxFLHYscyxjLHksUz1cInNpenpsZVwiKzEqbmV3IERhdGUscD1uLmRvY3VtZW50LGs9MCxyPTAsbT11ZSgpLHg9dWUoKSxBPXVlKCksTj11ZSgpLEQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT09PXQmJihsPSEwKSwwfSxqPXt9Lmhhc093blByb3BlcnR5LHQ9W10scT10LnBvcCxMPXQucHVzaCxIPXQucHVzaCxPPXQuc2xpY2UsUD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wLHI9ZS5sZW5ndGg7bjxyO24rKylpZihlW25dPT09dClyZXR1cm4gbjtyZXR1cm4tMX0sUj1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTT1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsST1cIig/OlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIrTStcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiLFc9XCJcXFxcW1wiK00rXCIqKFwiK0krXCIpKD86XCIrTStcIiooWypeJHwhfl0/PSlcIitNK1wiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIrSStcIikpfClcIitNK1wiKlxcXFxdXCIsRj1cIjooXCIrSStcIikoPzpcXFxcKCgoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXwoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrVytcIikqKXwuKilcXFxcKXwpXCIsQj1uZXcgUmVnRXhwKE0rXCIrXCIsXCJnXCIpLCQ9bmV3IFJlZ0V4cChcIl5cIitNK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIitNK1wiKyRcIixcImdcIiksXz1uZXcgUmVnRXhwKFwiXlwiK00rXCIqLFwiK00rXCIqXCIpLHo9bmV3IFJlZ0V4cChcIl5cIitNK1wiKihbPit+XXxcIitNK1wiKVwiK00rXCIqXCIpLFU9bmV3IFJlZ0V4cChNK1wifD5cIiksWD1uZXcgUmVnRXhwKEYpLFY9bmV3IFJlZ0V4cChcIl5cIitJK1wiJFwiKSxHPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrSStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitJK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrSStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitXKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitGKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitNK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTStcIiooPzooWystXXwpXCIrTStcIiooXFxcXGQrKXwpKVwiK00rXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrUitcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK00rXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK00rXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK00rXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L0hUTUwkL2ksUT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLEo9L15oXFxkJC9pLEs9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxaPS9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLGVlPS9bK35dLyx0ZT1uZXcgUmVnRXhwKFwiXFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXChbXlxcXFxyXFxcXG5cXFxcZl0pXCIsXCJnXCIpLG5lPWZ1bmN0aW9uKGUsdCl7dmFyIG49XCIweFwiK2Uuc2xpY2UoMSktNjU1MzY7cmV0dXJuIHR8fChuPDA/U3RyaW5nLmZyb21DaGFyQ29kZShuKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKG4+PjEwfDU1Mjk2LDEwMjMmbnw1NjMyMCkpfSxyZT0vKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxpZT1mdW5jdGlvbihlLHQpe3JldHVybiB0P1wiXFwwXCI9PT1lP1wiXFx1ZmZmZFwiOmUuc2xpY2UoMCwtMSkrXCJcXFxcXCIrZS5jaGFyQ29kZUF0KGUubGVuZ3RoLTEpLnRvU3RyaW5nKDE2KStcIiBcIjpcIlxcXFxcIitlfSxvZT1mdW5jdGlvbigpe1QoKX0sYWU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuITA9PT1lLmRpc2FibGVkJiZcImZpZWxkc2V0XCI9PT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwocC5jaGlsZE5vZGVzKSxwLmNoaWxkTm9kZXMpLHRbcC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmxlbmd0aCxyPTA7d2hpbGUoZVtuKytdPXRbcisrXSk7ZS5sZW5ndGg9bi0xfX19ZnVuY3Rpb24gc2UodCxlLG4scil7dmFyIGksbyxhLHMsdSxsLGMsZj1lJiZlLm93bmVyRG9jdW1lbnQscD1lP2Uubm9kZVR5cGU6OTtpZihuPW58fFtdLFwic3RyaW5nXCIhPXR5cGVvZiB0fHwhdHx8MSE9PXAmJjkhPT1wJiYxMSE9PXApcmV0dXJuIG47aWYoIXImJihUKGUpLGU9ZXx8QyxFKSl7aWYoMTEhPT1wJiYodT1aLmV4ZWModCkpKWlmKGk9dVsxXSl7aWYoOT09PXApe2lmKCEoYT1lLmdldEVsZW1lbnRCeUlkKGkpKSlyZXR1cm4gbjtpZihhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZSBpZihmJiYoYT1mLmdldEVsZW1lbnRCeUlkKGkpKSYmeShlLGEpJiZhLmlkPT09aSlyZXR1cm4gbi5wdXNoKGEpLG59ZWxzZXtpZih1WzJdKXJldHVybiBILmFwcGx5KG4sZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0KSksbjtpZigoaT11WzNdKSYmZC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaSkpLG59aWYoZC5xc2EmJiFOW3QrXCIgXCJdJiYoIXZ8fCF2LnRlc3QodCkpJiYoMSE9PXB8fFwib2JqZWN0XCIhPT1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKXtpZihjPXQsZj1lLDE9PT1wJiYoVS50ZXN0KHQpfHx6LnRlc3QodCkpKXsoZj1lZS50ZXN0KHQpJiZ5ZShlLnBhcmVudE5vZGUpfHxlKT09PWUmJmQuc2NvcGV8fCgocz1lLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXMucmVwbGFjZShyZSxpZSk6ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHM9UykpLG89KGw9aCh0KSkubGVuZ3RoO3doaWxlKG8tLSlsW29dPShzP1wiI1wiK3M6XCI6c2NvcGVcIikrXCIgXCIreGUobFtvXSk7Yz1sLmpvaW4oXCIsXCIpfXRyeXtyZXR1cm4gSC5hcHBseShuLGYucXVlcnlTZWxlY3RvckFsbChjKSksbn1jYXRjaChlKXtOKHQsITApfWZpbmFsbHl7cz09PVMmJmUucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gZyh0LnJlcGxhY2UoJCxcIiQxXCIpLGUsbixyKX1mdW5jdGlvbiB1ZSgpe3ZhciByPVtdO3JldHVybiBmdW5jdGlvbiBlKHQsbil7cmV0dXJuIHIucHVzaCh0K1wiIFwiKT5iLmNhY2hlTGVuZ3RoJiZkZWxldGUgZVtyLnNoaWZ0KCldLGVbdCtcIiBcIl09bn19ZnVuY3Rpb24gbGUoZSl7cmV0dXJuIGVbU109ITAsZX1mdW5jdGlvbiBjZShlKXt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTt0cnl7cmV0dXJuISFlKHQpfWNhdGNoKGUpe3JldHVybiExfWZpbmFsbHl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCksdD1udWxsfX1mdW5jdGlvbiBmZShlLHQpe3ZhciBuPWUuc3BsaXQoXCJ8XCIpLHI9bi5sZW5ndGg7d2hpbGUoci0tKWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobil3aGlsZShuPW4ubmV4dFNpYmxpbmcpaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZlLnR5cGU9PT10fX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT10fHxcImJ1dHRvblwiPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImZvcm1cImluIGU/ZS5wYXJlbnROb2RlJiYhMT09PWUuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gZT9cImxhYmVsXCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OlwibGFiZWxcImluIGUmJmUuZGlzYWJsZWQ9PT10fX1mdW5jdGlvbiB2ZShhKXtyZXR1cm4gbGUoZnVuY3Rpb24obyl7cmV0dXJuIG89K28sbGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoW10sZS5sZW5ndGgsbyksaT1yLmxlbmd0aDt3aGlsZShpLS0pZVtuPXJbaV1dJiYoZVtuXT0hKHRbbl09ZVtuXSkpfSl9KX1mdW5jdGlvbiB5ZShlKXtyZXR1cm4gZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmV9Zm9yKGUgaW4gZD1zZS5zdXBwb3J0PXt9LGk9c2UuaXNYTUw9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5uYW1lc3BhY2VVUkksbj0oZS5vd25lckRvY3VtZW50fHxlKS5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuIVkudGVzdCh0fHxuJiZuLm5vZGVOYW1lfHxcIkhUTUxcIil9LFQ9c2Uuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbixyPWU/ZS5vd25lckRvY3VtZW50fHxlOnA7cmV0dXJuIHIhPUMmJjk9PT1yLm5vZGVUeXBlJiZyLmRvY3VtZW50RWxlbWVudCYmKGE9KEM9cikuZG9jdW1lbnRFbGVtZW50LEU9IWkoQykscCE9QyYmKG49Qy5kZWZhdWx0VmlldykmJm4udG9wIT09biYmKG4uYWRkRXZlbnRMaXN0ZW5lcj9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixvZSwhMSk6bi5hdHRhY2hFdmVudCYmbi5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsb2UpKSxkLnNjb3BlPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKEMuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbCYmIWUucXVlcnlTZWxlY3RvckFsbChcIjpzY29wZSBmaWVsZHNldCBkaXZcIikubGVuZ3RofSksZC5hdHRyaWJ1dGVzPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTmFtZT1cImlcIiwhZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc05hbWVcIil9KSxkLmdldEVsZW1lbnRzQnlUYWdOYW1lPWNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKEMuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pLGQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZT1LLnRlc3QoQy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSxkLmdldEJ5SWQ9Y2UoZnVuY3Rpb24oZSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZSkuaWQ9UywhQy5nZXRFbGVtZW50c0J5TmFtZXx8IUMuZ2V0RWxlbWVudHNCeU5hbWUoUykubGVuZ3RofSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgdC5nZXRFbGVtZW50QnlJZCYmRSl7dmFyIG49dC5nZXRFbGVtZW50QnlJZChlKTtyZXR1cm4gbj9bbl06W119fSk6KGIuZmlsdGVyLklEPWZ1bmN0aW9uKGUpe3ZhciBuPWUucmVwbGFjZSh0ZSxuZSk7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEF0dHJpYnV0ZU5vZGUmJmUuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiB0JiZ0LnZhbHVlPT09bn19LGIuZmluZC5JRD1mdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB0LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2k9dC5nZXRFbGVtZW50c0J5TmFtZShlKSxyPTA7d2hpbGUobz1pW3IrK10paWYoKG49by5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIikpJiZuLnZhbHVlPT09ZSlyZXR1cm5bb119cmV0dXJuW119fSksYi5maW5kLlRBRz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGUsdCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTpkLnFzYT90LnF1ZXJ5U2VsZWN0b3JBbGwoZSk6dm9pZCAwfTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9W10saT0wLG89dC5nZXRFbGVtZW50c0J5VGFnTmFtZShlKTtpZihcIipcIj09PWUpe3doaWxlKG49b1tpKytdKTE9PT1uLm5vZGVUeXBlJiZyLnB1c2gobik7cmV0dXJuIHJ9cmV0dXJuIG99LGIuZmluZC5DTEFTUz1kLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGUsdCl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmRSlyZXR1cm4gdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGUpfSxzPVtdLHY9W10sKGQucXNhPUsudGVzdChDLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGNlKGZ1bmN0aW9uKGUpe3ZhciB0O2EuYXBwZW5kQ2hpbGQoZSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK1MrXCInPjwvYT48c2VsZWN0IGlkPSdcIitTK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsZS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZ2LnB1c2goXCJbKl4kXT1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitNK1wiKig/OnZhbHVlfFwiK1IrXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrUytcIi1dXCIpLmxlbmd0aHx8di5wdXNoKFwifj1cIiksKHQ9Qy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIikpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIlwiKSxlLmFwcGVuZENoaWxkKHQpLGUucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPScnXVwiKS5sZW5ndGh8fHYucHVzaChcIlxcXFxbXCIrTStcIipuYW1lXCIrTStcIio9XCIrTStcIiooPzonJ3xcXFwiXFxcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHx2LnB1c2goXCI6Y2hlY2tlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK1MrXCIrKlwiKS5sZW5ndGh8fHYucHVzaChcIi4jLitbK35dXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIlxcXFxcXGZcIiksdi5wdXNoKFwiW1xcXFxyXFxcXG5cXFxcZl1cIil9KSxjZShmdW5jdGlvbihlKXtlLmlubmVySFRNTD1cIjxhIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+PHNlbGVjdCBkaXNhYmxlZD0nZGlzYWJsZWQnPjxvcHRpb24vPjwvc2VsZWN0PlwiO3ZhciB0PUMuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO3Quc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaGlkZGVuXCIpLGUuYXBwZW5kQ2hpbGQodCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiRFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgmJnYucHVzaChcIm5hbWVcIitNK1wiKlsqXiR8IX5dPz1cIiksMiE9PWUucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLmFwcGVuZENoaWxkKGUpLmRpc2FibGVkPSEwLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoJiZ2LnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIiksdi5wdXNoKFwiLC4qOlwiKX0pKSwoZC5tYXRjaGVzU2VsZWN0b3I9Sy50ZXN0KGM9YS5tYXRjaGVzfHxhLndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8YS5tb3pNYXRjaGVzU2VsZWN0b3J8fGEub01hdGNoZXNTZWxlY3Rvcnx8YS5tc01hdGNoZXNTZWxlY3RvcikpJiZjZShmdW5jdGlvbihlKXtkLmRpc2Nvbm5lY3RlZE1hdGNoPWMuY2FsbChlLFwiKlwiKSxjLmNhbGwoZSxcIltzIT0nJ106eFwiKSxzLnB1c2goXCIhPVwiLEYpfSksdj12Lmxlbmd0aCYmbmV3IFJlZ0V4cCh2LmpvaW4oXCJ8XCIpKSxzPXMubGVuZ3RoJiZuZXcgUmVnRXhwKHMuam9pbihcInxcIikpLHQ9Sy50ZXN0KGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHk9dHx8Sy50ZXN0KGEuY29udGFpbnMpP2Z1bmN0aW9uKGUsdCl7dmFyIG49OT09PWUubm9kZVR5cGU/ZS5kb2N1bWVudEVsZW1lbnQ6ZSxyPXQmJnQucGFyZW50Tm9kZTtyZXR1cm4gZT09PXJ8fCEoIXJ8fDEhPT1yLm5vZGVUeXBlfHwhKG4uY29udGFpbnM/bi5jb250YWlucyhyKTplLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHIpKSl9OmZ1bmN0aW9uKGUsdCl7aWYodCl3aGlsZSh0PXQucGFyZW50Tm9kZSlpZih0PT09ZSlyZXR1cm4hMDtyZXR1cm4hMX0sRD10P2Z1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbj0hZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gbnx8KDEmKG49KGUub3duZXJEb2N1bWVudHx8ZSk9PSh0Lm93bmVyRG9jdW1lbnR8fHQpP2UuY29tcGFyZURvY3VtZW50UG9zaXRpb24odCk6MSl8fCFkLnNvcnREZXRhY2hlZCYmdC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlKT09PW4/ZT09Q3x8ZS5vd25lckRvY3VtZW50PT1wJiZ5KHAsZSk/LTE6dD09Q3x8dC5vd25lckRvY3VtZW50PT1wJiZ5KHAsdCk/MTp1P1AodSxlKS1QKHUsdCk6MDo0Jm4/LTE6MSl9OmZ1bmN0aW9uKGUsdCl7aWYoZT09PXQpcmV0dXJuIGw9ITAsMDt2YXIgbixyPTAsaT1lLnBhcmVudE5vZGUsbz10LnBhcmVudE5vZGUsYT1bZV0scz1bdF07aWYoIWl8fCFvKXJldHVybiBlPT1DPy0xOnQ9PUM/MTppPy0xOm8/MTp1P1AodSxlKS1QKHUsdCk6MDtpZihpPT09bylyZXR1cm4gcGUoZSx0KTtuPWU7d2hpbGUobj1uLnBhcmVudE5vZGUpYS51bnNoaWZ0KG4pO249dDt3aGlsZShuPW4ucGFyZW50Tm9kZSlzLnVuc2hpZnQobik7d2hpbGUoYVtyXT09PXNbcl0pcisrO3JldHVybiByP3BlKGFbcl0sc1tyXSk6YVtyXT09cD8tMTpzW3JdPT1wPzE6MH0pLEN9LHNlLm1hdGNoZXM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gc2UoZSxudWxsLG51bGwsdCl9LHNlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlLHQpe2lmKFQoZSksZC5tYXRjaGVzU2VsZWN0b3ImJkUmJiFOW3QrXCIgXCJdJiYoIXN8fCFzLnRlc3QodCkpJiYoIXZ8fCF2LnRlc3QodCkpKXRyeXt2YXIgbj1jLmNhbGwoZSx0KTtpZihufHxkLmRpc2Nvbm5lY3RlZE1hdGNofHxlLmRvY3VtZW50JiYxMSE9PWUuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIG59Y2F0Y2goZSl7Tih0LCEwKX1yZXR1cm4gMDxzZSh0LEMsbnVsbCxbZV0pLmxlbmd0aH0sc2UuY29udGFpbnM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4oZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKSx5KGUsdCl9LHNlLmF0dHI9ZnVuY3Rpb24oZSx0KXsoZS5vd25lckRvY3VtZW50fHxlKSE9QyYmVChlKTt2YXIgbj1iLmF0dHJIYW5kbGVbdC50b0xvd2VyQ2FzZSgpXSxyPW4mJmouY2FsbChiLmF0dHJIYW5kbGUsdC50b0xvd2VyQ2FzZSgpKT9uKGUsdCwhRSk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1yP3I6ZC5hdHRyaWJ1dGVzfHwhRT9lLmdldEF0dHJpYnV0ZSh0KToocj1lLmdldEF0dHJpYnV0ZU5vZGUodCkpJiZyLnNwZWNpZmllZD9yLnZhbHVlOm51bGx9LHNlLmVzY2FwZT1mdW5jdGlvbihlKXtyZXR1cm4oZStcIlwiKS5yZXBsYWNlKHJlLGllKX0sc2UuZXJyb3I9ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrZSl9LHNlLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1bXSxyPTAsaT0wO2lmKGw9IWQuZGV0ZWN0RHVwbGljYXRlcyx1PSFkLnNvcnRTdGFibGUmJmUuc2xpY2UoMCksZS5zb3J0KEQpLGwpe3doaWxlKHQ9ZVtpKytdKXQ9PT1lW2ldJiYocj1uLnB1c2goaSkpO3doaWxlKHItLSllLnNwbGljZShuW3JdLDEpfXJldHVybiB1PW51bGwsZX0sbz1zZS5nZXRUZXh0PWZ1bmN0aW9uKGUpe3ZhciB0LG49XCJcIixyPTAsaT1lLm5vZGVUeXBlO2lmKGkpe2lmKDE9PT1pfHw5PT09aXx8MTE9PT1pKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZS50ZXh0Q29udGVudClyZXR1cm4gZS50ZXh0Q29udGVudDtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpbis9byhlKX1lbHNlIGlmKDM9PT1pfHw0PT09aSlyZXR1cm4gZS5ub2RlVmFsdWV9ZWxzZSB3aGlsZSh0PWVbcisrXSluKz1vKHQpO3JldHVybiBufSwoYj1zZS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpsZSxtYXRjaDpHLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS5yZXBsYWNlKHRlLG5lKSxlWzNdPShlWzNdfHxlWzRdfHxlWzVdfHxcIlwiKS5yZXBsYWNlKHRlLG5lKSxcIn49XCI9PT1lWzJdJiYoZVszXT1cIiBcIitlWzNdK1wiIFwiKSxlLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGUpe3JldHVybiBlWzFdPWVbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09ZVsxXS5zbGljZSgwLDMpPyhlWzNdfHxzZS5lcnJvcihlWzBdKSxlWzRdPSsoZVs0XT9lWzVdKyhlWzZdfHwxKToyKihcImV2ZW5cIj09PWVbM118fFwib2RkXCI9PT1lWzNdKSksZVs1XT0rKGVbN10rZVs4XXx8XCJvZGRcIj09PWVbM10pKTplWzNdJiZzZS5lcnJvcihlWzBdKSxlfSxQU0VVRE86ZnVuY3Rpb24oZSl7dmFyIHQsbj0hZVs2XSYmZVsyXTtyZXR1cm4gRy5DSElMRC50ZXN0KGVbMF0pP251bGw6KGVbM10/ZVsyXT1lWzRdfHxlWzVdfHxcIlwiOm4mJlgudGVzdChuKSYmKHQ9aChuLCEwKSkmJih0PW4uaW5kZXhPZihcIilcIixuLmxlbmd0aC10KS1uLmxlbmd0aCkmJihlWzBdPWVbMF0uc2xpY2UoMCx0KSxlWzJdPW4uc2xpY2UoMCx0KSksZS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGUpe3ZhciB0PWUucmVwbGFjZSh0ZSxuZSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWU/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oZSl7cmV0dXJuIGUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXR9fSxDTEFTUzpmdW5jdGlvbihlKXt2YXIgdD1tW2UrXCIgXCJdO3JldHVybiB0fHwodD1uZXcgUmVnRXhwKFwiKF58XCIrTStcIilcIitlK1wiKFwiK00rXCJ8JClcIikpJiZtKGUsZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/XCIhPVwiPT09cjohcnx8KHQrPVwiXCIsXCI9XCI9PT1yP3Q9PT1pOlwiIT1cIj09PXI/dCE9PWk6XCJePVwiPT09cj9pJiYwPT09dC5pbmRleE9mKGkpOlwiKj1cIj09PXI/aSYmLTE8dC5pbmRleE9mKGkpOlwiJD1cIj09PXI/aSYmdC5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1yPy0xPChcIiBcIit0LnJlcGxhY2UoQixcIiBcIikrXCIgXCIpLmluZGV4T2YoaSk6XCJ8PVwiPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihoLGUsdCxnLHYpe3ZhciB5PVwibnRoXCIhPT1oLnNsaWNlKDAsMyksbT1cImxhc3RcIiE9PWguc2xpY2UoLTQpLHg9XCJvZi10eXBlXCI9PT1lO3JldHVybiAxPT09ZyYmMD09PXY/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD15IT09bT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHkpe3doaWxlKGwpe2E9ZTt3aGlsZShhPWFbbF0paWYoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1mOjE9PT1hLm5vZGVUeXBlKXJldHVybiExO3U9bD1cIm9ubHlcIj09PWgmJiF1JiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYodT1bbT9jLmZpcnN0Q2hpbGQ6Yy5sYXN0Q2hpbGRdLG0mJnApe2Q9KHM9KHI9KGk9KG89KGE9YylbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pJiZyWzJdLGE9cyYmYy5jaGlsZE5vZGVzW3NdO3doaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKDE9PT1hLm5vZGVUeXBlJiYrK2QmJmE9PT1lKXtpW2hdPVtrLHMsZF07YnJlYWt9fWVsc2UgaWYocCYmKGQ9cz0ocj0oaT0obz0oYT1lKVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXXx8W10pWzBdPT09ayYmclsxXSksITE9PT1kKXdoaWxlKGE9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpKWlmKCh4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpJiYrK2QmJihwJiYoKGk9KG89YVtTXXx8KGFbU109e30pKVthLnVuaXF1ZUlEXXx8KG9bYS51bmlxdWVJRF09e30pKVtoXT1bayxkXSksYT09PWUpKWJyZWFrO3JldHVybihkLT12KT09PWd8fGQlZz09MCYmMDw9ZC9nfX19LFBTRVVETzpmdW5jdGlvbihlLG8pe3ZhciB0LGE9Yi5wc2V1ZG9zW2VdfHxiLnNldEZpbHRlcnNbZS50b0xvd2VyQ2FzZSgpXXx8c2UuZXJyb3IoXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiK2UpO3JldHVybiBhW1NdP2Eobyk6MTxhLmxlbmd0aD8odD1bZSxlLFwiXCIsb10sYi5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KGUudG9Mb3dlckNhc2UoKSk/bGUoZnVuY3Rpb24oZSx0KXt2YXIgbixyPWEoZSxvKSxpPXIubGVuZ3RoO3doaWxlKGktLSllW249UChlLHJbaV0pXT0hKHRbbl09cltpXSl9KTpmdW5jdGlvbihlKXtyZXR1cm4gYShlLDAsdCl9KTphfX0scHNldWRvczp7bm90OmxlKGZ1bmN0aW9uKGUpe3ZhciByPVtdLGk9W10scz1mKGUucmVwbGFjZSgkLFwiJDFcIikpO3JldHVybiBzW1NdP2xlKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG89cyhlLG51bGwscixbXSksYT1lLmxlbmd0aDt3aGlsZShhLS0pKGk9b1thXSkmJihlW2FdPSEodFthXT1pKSl9KTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHJbMF09ZSxzKHIsbnVsbCxuLGkpLHJbMF09bnVsbCwhaS5wb3AoKX19KSxoYXM6bGUoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiAwPHNlKHQsZSkubGVuZ3RofX0pLGNvbnRhaW5zOmxlKGZ1bmN0aW9uKHQpe3JldHVybiB0PXQucmVwbGFjZSh0ZSxuZSksZnVuY3Rpb24oZSl7cmV0dXJuLTE8KGUudGV4dENvbnRlbnR8fG8oZSkpLmluZGV4T2YodCl9fSksbGFuZzpsZShmdW5jdGlvbihuKXtyZXR1cm4gVi50ZXN0KG58fFwiXCIpfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK24pLG49bi5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpLGZ1bmN0aW9uKGUpe3ZhciB0O2Rve2lmKHQ9RT9lLmxhbmc6ZS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKXx8ZS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKXJldHVybih0PXQudG9Mb3dlckNhc2UoKSk9PT1ufHwwPT09dC5pbmRleE9mKG4rXCItXCIpfXdoaWxlKChlPWUucGFyZW50Tm9kZSkmJjE9PT1lLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5sb2NhdGlvbiYmbi5sb2NhdGlvbi5oYXNoO3JldHVybiB0JiZ0LnNsaWNlKDEpPT09ZS5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWF9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Qy5hY3RpdmVFbGVtZW50JiYoIUMuaGFzRm9jdXN8fEMuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6Z2UoITEpLGRpc2FibGVkOmdlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6dmUoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0OnZlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSxlcTp2ZShmdW5jdGlvbihlLHQsbil7cmV0dXJuW248MD9uK3Q6bl19KSxldmVuOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTA7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksb2RkOnZlKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSksbHQ6dmUoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0OnQ8bj90Om47MDw9LS1yOyllLnB1c2gocik7cmV0dXJuIGV9KSxndDp2ZShmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6bjsrK3I8dDspZS5wdXNoKHIpO3JldHVybiBlfSl9fSkucHNldWRvcy5udGg9Yi5wc2V1ZG9zLmVxLHtyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSliLnBzZXVkb3NbZV09ZGUoZSk7Zm9yKGUgaW57c3VibWl0OiEwLHJlc2V0OiEwfSliLnBzZXVkb3NbZV09aGUoZSk7ZnVuY3Rpb24gbWUoKXt9ZnVuY3Rpb24geGUoZSl7Zm9yKHZhciB0PTAsbj1lLmxlbmd0aCxyPVwiXCI7dDxuO3QrKylyKz1lW3RdLnZhbHVlO3JldHVybiByfWZ1bmN0aW9uIGJlKHMsZSx0KXt2YXIgdT1lLmRpcixsPWUubmV4dCxjPWx8fHUsZj10JiZcInBhcmVudE5vZGVcIj09PWMscD1yKys7cmV0dXJuIGUuZmlyc3Q/ZnVuY3Rpb24oZSx0LG4pe3doaWxlKGU9ZVt1XSlpZigxPT09ZS5ub2RlVHlwZXx8ZilyZXR1cm4gcyhlLHQsbik7cmV0dXJuITF9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT1bayxwXTtpZihuKXt3aGlsZShlPWVbdV0paWYoKDE9PT1lLm5vZGVUeXBlfHxmKSYmcyhlLHQsbikpcmV0dXJuITB9ZWxzZSB3aGlsZShlPWVbdV0paWYoMT09PWUubm9kZVR5cGV8fGYpaWYoaT0obz1lW1NdfHwoZVtTXT17fSkpW2UudW5pcXVlSURdfHwob1tlLnVuaXF1ZUlEXT17fSksbCYmbD09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSllPWVbdV18fGU7ZWxzZXtpZigocj1pW2NdKSYmclswXT09PWsmJnJbMV09PT1wKXJldHVybiBhWzJdPXJbMl07aWYoKGlbY109YSlbMl09cyhlLHQsbikpcmV0dXJuITB9cmV0dXJuITF9fWZ1bmN0aW9uIHdlKGkpe3JldHVybiAxPGkubGVuZ3RoP2Z1bmN0aW9uKGUsdCxuKXt2YXIgcj1pLmxlbmd0aDt3aGlsZShyLS0paWYoIWlbcl0oZSx0LG4pKXJldHVybiExO3JldHVybiEwfTppWzBdfWZ1bmN0aW9uIFRlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGE9W10scz0wLHU9ZS5sZW5ndGgsbD1udWxsIT10O3M8dTtzKyspKG89ZVtzXSkmJihuJiYhbihvLHIsaSl8fChhLnB1c2gobyksbCYmdC5wdXNoKHMpKSk7cmV0dXJuIGF9ZnVuY3Rpb24gQ2UoZCxoLGcsdix5LGUpe3JldHVybiB2JiYhdltTXSYmKHY9Q2UodikpLHkmJiF5W1NdJiYoeT1DZSh5LGUpKSxsZShmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1bXSx1PVtdLGw9dC5sZW5ndGgsYz1lfHxmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPTAsaT10Lmxlbmd0aDtyPGk7cisrKXNlKGUsdFtyXSxuKTtyZXR1cm4gbn0oaHx8XCIqXCIsbi5ub2RlVHlwZT9bbl06bixbXSksZj0hZHx8IWUmJmg/YzpUZShjLHMsZCxuLHIpLHA9Zz95fHwoZT9kOmx8fHYpP1tdOnQ6ZjtpZihnJiZnKGYscCxuLHIpLHYpe2k9VGUocCx1KSx2KGksW10sbixyKSxvPWkubGVuZ3RoO3doaWxlKG8tLSkoYT1pW29dKSYmKHBbdVtvXV09IShmW3Vbb11dPWEpKX1pZihlKXtpZih5fHxkKXtpZih5KXtpPVtdLG89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiZpLnB1c2goZltvXT1hKTt5KG51bGwscD1bXSxpLHIpfW89cC5sZW5ndGg7d2hpbGUoby0tKShhPXBbb10pJiYtMTwoaT15P1AoZSxhKTpzW29dKSYmKGVbaV09ISh0W2ldPWEpKX19ZWxzZSBwPVRlKHA9PT10P3Auc3BsaWNlKGwscC5sZW5ndGgpOnApLHk/eShudWxsLHQscCxyKTpILmFwcGx5KHQscCl9KX1mdW5jdGlvbiBFZShlKXtmb3IodmFyIGksdCxuLHI9ZS5sZW5ndGgsbz1iLnJlbGF0aXZlW2VbMF0udHlwZV0sYT1vfHxiLnJlbGF0aXZlW1wiIFwiXSxzPW8/MTowLHU9YmUoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1pfSxhLCEwKSxsPWJlKGZ1bmN0aW9uKGUpe3JldHVybi0xPFAoaSxlKX0sYSwhMCksYz1bZnVuY3Rpb24oZSx0LG4pe3ZhciByPSFvJiYobnx8dCE9PXcpfHwoKGk9dCkubm9kZVR5cGU/dShlLHQsbik6bChlLHQsbikpO3JldHVybiBpPW51bGwscn1dO3M8cjtzKyspaWYodD1iLnJlbGF0aXZlW2Vbc10udHlwZV0pYz1bYmUod2UoYyksdCldO2Vsc2V7aWYoKHQ9Yi5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLGVbc10ubWF0Y2hlcykpW1NdKXtmb3Iobj0rK3M7bjxyO24rKylpZihiLnJlbGF0aXZlW2Vbbl0udHlwZV0pYnJlYWs7cmV0dXJuIENlKDE8cyYmd2UoYyksMTxzJiZ4ZShlLnNsaWNlKDAscy0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVtzLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKCQsXCIkMVwiKSx0LHM8biYmRWUoZS5zbGljZShzLG4pKSxuPHImJkVlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrXCIgXCJdO2lmKGwpcmV0dXJuIHQ/MDpsLnNsaWNlKDApO2E9ZSxzPVtdLHU9Yi5wcmVGaWx0ZXI7d2hpbGUoYSl7Zm9yKG8gaW4gbiYmIShyPV8uZXhlYyhhKSl8fChyJiYoYT1hLnNsaWNlKHJbMF0ubGVuZ3RoKXx8YSkscy5wdXNoKGk9W10pKSxuPSExLChyPXouZXhlYyhhKSkmJihuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpyWzBdLnJlcGxhY2UoJCxcIiBcIil9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKSxiLmZpbHRlcikhKHI9R1tvXS5leGVjKGEpKXx8dVtvXSYmIShyPXVbb10ocikpfHwobj1yLnNoaWZ0KCksaS5wdXNoKHt2YWx1ZTpuLHR5cGU6byxtYXRjaGVzOnJ9KSxhPWEuc2xpY2Uobi5sZW5ndGgpKTtpZighbilicmVha31yZXR1cm4gdD9hLmxlbmd0aDphP3NlLmVycm9yKGUpOngoZSxzKS5zbGljZSgwKX0sZj1zZS5jb21waWxlPWZ1bmN0aW9uKGUsdCl7dmFyIG4sdix5LG0seCxyLGk9W10sbz1bXSxhPUFbZStcIiBcIl07aWYoIWEpe3R8fCh0PWgoZSkpLG49dC5sZW5ndGg7d2hpbGUobi0tKShhPUVlKHRbbl0pKVtTXT9pLnB1c2goYSk6by5wdXNoKGEpOyhhPUEoZSwodj1vLG09MDwoeT1pKS5sZW5ndGgseD0wPHYubGVuZ3RoLHI9ZnVuY3Rpb24oZSx0LG4scixpKXt2YXIgbyxhLHMsdT0wLGw9XCIwXCIsYz1lJiZbXSxmPVtdLHA9dyxkPWV8fHgmJmIuZmluZC5UQUcoXCIqXCIsaSksaD1rKz1udWxsPT1wPzE6TWF0aC5yYW5kb20oKXx8LjEsZz1kLmxlbmd0aDtmb3IoaSYmKHc9dD09Q3x8dHx8aSk7bCE9PWcmJm51bGwhPShvPWRbbF0pO2wrKyl7aWYoeCYmbyl7YT0wLHR8fG8ub3duZXJEb2N1bWVudD09Q3x8KFQobyksbj0hRSk7d2hpbGUocz12W2ErK10paWYocyhvLHR8fEMsbikpe3IucHVzaChvKTticmVha31pJiYoaz1oKX1tJiYoKG89IXMmJm8pJiZ1LS0sZSYmYy5wdXNoKG8pKX1pZih1Kz1sLG0mJmwhPT11KXthPTA7d2hpbGUocz15W2ErK10pcyhjLGYsdCxuKTtpZihlKXtpZigwPHUpd2hpbGUobC0tKWNbbF18fGZbbF18fChmW2xdPXEuY2FsbChyKSk7Zj1UZShmKX1ILmFwcGx5KHIsZiksaSYmIWUmJjA8Zi5sZW5ndGgmJjE8dSt5Lmxlbmd0aCYmc2UudW5pcXVlU29ydChyKX1yZXR1cm4gaSYmKGs9aCx3PXApLGN9LG0/bGUocik6cikpKS5zZWxlY3Rvcj1lfXJldHVybiBhfSxnPXNlLnNlbGVjdD1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSxjPSFyJiZoKGU9bC5zZWxlY3Rvcnx8ZSk7aWYobj1ufHxbXSwxPT09Yy5sZW5ndGgpe2lmKDI8KG89Y1swXT1jWzBdLnNsaWNlKDApKS5sZW5ndGgmJlwiSURcIj09PShhPW9bMF0pLnR5cGUmJjk9PT10Lm5vZGVUeXBlJiZFJiZiLnJlbGF0aXZlW29bMV0udHlwZV0pe2lmKCEodD0oYi5maW5kLklEKGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSx0KXx8W10pWzBdKSlyZXR1cm4gbjtsJiYodD10LnBhcmVudE5vZGUpLGU9ZS5zbGljZShvLnNoaWZ0KCkudmFsdWUubGVuZ3RoKX1pPUcubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDt3aGlsZShpLS0pe2lmKGE9b1tpXSxiLnJlbGF0aXZlW3M9YS50eXBlXSlicmVhaztpZigodT1iLmZpbmRbc10pJiYocj11KGEubWF0Y2hlc1swXS5yZXBsYWNlKHRlLG5lKSxlZS50ZXN0KG9bMF0udHlwZSkmJnllKHQucGFyZW50Tm9kZSl8fHQpKSl7aWYoby5zcGxpY2UoaSwxKSwhKGU9ci5sZW5ndGgmJnhlKG8pKSlyZXR1cm4gSC5hcHBseShuLHIpLG47YnJlYWt9fX1yZXR1cm4obHx8ZihlLGMpKShyLHQsIUUsbiwhdHx8ZWUudGVzdChlKSYmeWUodC5wYXJlbnROb2RlKXx8dCksbn0sZC5zb3J0U3RhYmxlPVMuc3BsaXQoXCJcIikuc29ydChEKS5qb2luKFwiXCIpPT09UyxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZShmdW5jdGlvbihlKXtyZXR1cm4gMSZlLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKEMuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSl8fGZlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbilyZXR1cm4gZS5nZXRBdHRyaWJ1dGUodCxcInR5cGVcIj09PXQudG9Mb3dlckNhc2UoKT8xOjIpfSksZC5hdHRyaWJ1dGVzJiZjZShmdW5jdGlvbihlKXtyZXR1cm4gZS5pbm5lckhUTUw9XCI8aW5wdXQvPlwiLGUuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIpLFwiXCI9PT1lLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIil9KXx8ZmUoXCJ2YWx1ZVwiLGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pLGNlKGZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpfSl8fGZlKFIsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKCFuKXJldHVybiEwPT09ZVt0XT90LnRvTG93ZXJDYXNlKCk6KHI9ZS5nZXRBdHRyaWJ1dGVOb2RlKHQpKSYmci5zcGVjaWZpZWQ/ci52YWx1ZTpudWxsfSksc2V9KEMpO1MuZmluZD1kLFMuZXhwcj1kLnNlbGVjdG9ycyxTLmV4cHJbXCI6XCJdPVMuZXhwci5wc2V1ZG9zLFMudW5pcXVlU29ydD1TLnVuaXF1ZT1kLnVuaXF1ZVNvcnQsUy50ZXh0PWQuZ2V0VGV4dCxTLmlzWE1MRG9jPWQuaXNYTUwsUy5jb250YWlucz1kLmNvbnRhaW5zLFMuZXNjYXBlU2VsZWN0b3I9ZC5lc2NhcGU7dmFyIGg9ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVtdLGk9dm9pZCAwIT09bjt3aGlsZSgoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGUpaWYoMT09PWUubm9kZVR5cGUpe2lmKGkmJlMoZSkuaXMobikpYnJlYWs7ci5wdXNoKGUpfXJldHVybiByfSxUPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPVtdO2U7ZT1lLm5leHRTaWJsaW5nKTE9PT1lLm5vZGVUeXBlJiZlIT09dCYmbi5wdXNoKGUpO3JldHVybiBufSxrPVMuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7ZnVuY3Rpb24gQShlLHQpe3JldHVybiBlLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT10LnRvTG93ZXJDYXNlKCl9dmFyIE49L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7ZnVuY3Rpb24gRChlLG4scil7cmV0dXJuIG0obik/Uy5ncmVwKGUsZnVuY3Rpb24oZSx0KXtyZXR1cm4hIW4uY2FsbChlLHQsZSkhPT1yfSk6bi5ub2RlVHlwZT9TLmdyZXAoZSxmdW5jdGlvbihlKXtyZXR1cm4gZT09PW4hPT1yfSk6XCJzdHJpbmdcIiE9dHlwZW9mIG4/Uy5ncmVwKGUsZnVuY3Rpb24oZSl7cmV0dXJuLTE8aS5jYWxsKG4sZSkhPT1yfSk6Uy5maWx0ZXIobixlLHIpfVMuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcj10WzBdO3JldHVybiBuJiYoZT1cIjpub3QoXCIrZStcIilcIiksMT09PXQubGVuZ3RoJiYxPT09ci5ub2RlVHlwZT9TLmZpbmQubWF0Y2hlc1NlbGVjdG9yKHIsZSk/W3JdOltdOlMuZmluZC5tYXRjaGVzKGUsUy5ncmVwKHQsZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfSkpfSxTLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayhTKGUpLmZpbHRlcihmdW5jdGlvbigpe2Zvcih0PTA7dDxyO3QrKylpZihTLmNvbnRhaW5zKGlbdF0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKG49dGhpcy5wdXNoU3RhY2soW10pLHQ9MDt0PHI7dCsrKVMuZmluZChlLGlbdF0sbik7cmV0dXJuIDE8cj9TLnVuaXF1ZVNvcnQobik6bn0sZmlsdGVyOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhEKHRoaXMsZXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnB1c2hTdGFjayhEKHRoaXMsZXx8W10sITApKX0saXM6ZnVuY3Rpb24oZSl7cmV0dXJuISFEKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGUmJmsudGVzdChlKT9TKGUpOmV8fFtdLCExKS5sZW5ndGh9fSk7dmFyIGoscT0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLzsoUy5mbi5pbml0PWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpO2lmKCFlKXJldHVybiB0aGlzO2lmKG49bnx8aixcInN0cmluZ1wiPT10eXBlb2YgZSl7aWYoIShyPVwiPFwiPT09ZVswXSYmXCI+XCI9PT1lW2UubGVuZ3RoLTFdJiYzPD1lLmxlbmd0aD9bbnVsbCxlLG51bGxdOnEuZXhlYyhlKSl8fCFyWzFdJiZ0KXJldHVybiF0fHx0LmpxdWVyeT8odHx8bikuZmluZChlKTp0aGlzLmNvbnN0cnVjdG9yKHQpLmZpbmQoZSk7aWYoclsxXSl7aWYodD10IGluc3RhbmNlb2YgUz90WzBdOnQsUy5tZXJnZSh0aGlzLFMucGFyc2VIVE1MKHJbMV0sdCYmdC5ub2RlVHlwZT90Lm93bmVyRG9jdW1lbnR8fHQ6RSwhMCkpLE4udGVzdChyWzFdKSYmUy5pc1BsYWluT2JqZWN0KHQpKWZvcihyIGluIHQpbSh0aGlzW3JdKT90aGlzW3JdKHRbcl0pOnRoaXMuYXR0cihyLHRbcl0pO3JldHVybiB0aGlzfXJldHVybihpPUUuZ2V0RWxlbWVudEJ5SWQoclsyXSkpJiYodGhpc1swXT1pLHRoaXMubGVuZ3RoPTEpLHRoaXN9cmV0dXJuIGUubm9kZVR5cGU/KHRoaXNbMF09ZSx0aGlzLmxlbmd0aD0xLHRoaXMpOm0oZSk/dm9pZCAwIT09bi5yZWFkeT9uLnJlYWR5KGUpOmUoUyk6Uy5tYWtlQXJyYXkoZSx0aGlzKX0pLnByb3RvdHlwZT1TLmZuLGo9UyhFKTt2YXIgTD0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxIPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O2Z1bmN0aW9uIE8oZSx0KXt3aGlsZSgoZT1lW3RdKSYmMSE9PWUubm9kZVR5cGUpO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oZSl7dmFyIHQ9UyhlLHRoaXMpLG49dC5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihTLmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXRoaXMubGVuZ3RoLG89W10sYT1cInN0cmluZ1wiIT10eXBlb2YgZSYmUyhlKTtpZighay50ZXN0KGUpKWZvcig7cjxpO3IrKylmb3Iobj10aGlzW3JdO24mJm4hPT10O249bi5wYXJlbnROb2RlKWlmKG4ubm9kZVR5cGU8MTEmJihhPy0xPGEuaW5kZXgobik6MT09PW4ubm9kZVR5cGUmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IobixlKSkpe28ucHVzaChuKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soMTxvLmxlbmd0aD9TLnVuaXF1ZVNvcnQobyk6byl9LGluZGV4OmZ1bmN0aW9uKGUpe3JldHVybiBlP1wic3RyaW5nXCI9PXR5cGVvZiBlP2kuY2FsbChTKGUpLHRoaXNbMF0pOmkuY2FsbCh0aGlzLGUuanF1ZXJ5P2VbMF06ZSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy51bmlxdWVTb3J0KFMubWVyZ2UodGhpcy5nZXQoKSxTKGUsdCkpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWU/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoZSkpfX0pLFMuZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmMTEhPT10Lm5vZGVUeXBlP3Q6bnVsbH0scGFyZW50czpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicGFyZW50Tm9kZVwiLG4pfSxuZXh0OmZ1bmN0aW9uKGUpe3JldHVybiBPKGUsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGUpe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJuZXh0U2libGluZ1wiLG4pfSxwcmV2VW50aWw6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBoKGUsXCJwcmV2aW91c1NpYmxpbmdcIixuKX0sc2libGluZ3M6ZnVuY3Rpb24oZSl7cmV0dXJuIFQoKGUucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsZSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT1lLmNvbnRlbnREb2N1bWVudCYmcihlLmNvbnRlbnREb2N1bWVudCk/ZS5jb250ZW50RG9jdW1lbnQ6KEEoZSxcInRlbXBsYXRlXCIpJiYoZT1lLmNvbnRlbnR8fGUpLFMubWVyZ2UoW10sZS5jaGlsZE5vZGVzKSl9fSxmdW5jdGlvbihyLGkpe1MuZm5bcl09ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLm1hcCh0aGlzLGksZSk7cmV0dXJuXCJVbnRpbFwiIT09ci5zbGljZSgtNSkmJih0PWUpLHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiYobj1TLmZpbHRlcih0LG4pKSwxPHRoaXMubGVuZ3RoJiYoSFtyXXx8Uy51bmlxdWVTb3J0KG4pLEwudGVzdChyKSYmbi5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKG4pfX0pO3ZhciBQPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dGhyb3cgZX1mdW5jdGlvbiBJKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1TLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/KGU9cixuPXt9LFMuZWFjaChlLm1hdGNoKFApfHxbXSxmdW5jdGlvbihlLHQpe25bdF09ITB9KSxuKTpTLmV4dGVuZCh7fSxyKTt2YXIgaSx0LG8sYSxzPVtdLHU9W10sbD0tMSxjPWZ1bmN0aW9uKCl7Zm9yKGE9YXx8ci5vbmNlLG89aT0hMDt1Lmxlbmd0aDtsPS0xKXt0PXUuc2hpZnQoKTt3aGlsZSgrK2w8cy5sZW5ndGgpITE9PT1zW2xdLmFwcGx5KHRbMF0sdFsxXSkmJnIuc3RvcE9uRmFsc2UmJihsPXMubGVuZ3RoLHQ9ITEpfXIubWVtb3J5fHwodD0hMSksaT0hMSxhJiYocz10P1tdOlwiXCIpfSxmPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHQmJiFpJiYobD1zLmxlbmd0aC0xLHUucHVzaCh0KSksZnVuY3Rpb24gbihlKXtTLmVhY2goZSxmdW5jdGlvbihlLHQpe20odCk/ci51bmlxdWUmJmYuaGFzKHQpfHxzLnB1c2godCk6dCYmdC5sZW5ndGgmJlwic3RyaW5nXCIhPT13KHQpJiZuKHQpfSl9KGFyZ3VtZW50cyksdCYmIWkmJmMoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIFMuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oZSx0KXt2YXIgbjt3aGlsZSgtMTwobj1TLmluQXJyYXkodCxzLG4pKSlzLnNwbGljZShuLDEpLG48PWwmJmwtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxTLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hc30sbG9jazpmdW5jdGlvbigpe3JldHVybiBhPXU9W10sdHx8aXx8KHM9dD1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWF9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGF8fCh0PVtlLCh0PXR8fFtdKS5zbGljZT90LnNsaWNlKCk6dF0sdS5wdXNoKHQpLGl8fGMoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBmLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhb319O3JldHVybiBmfSxTLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIG89W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLGE9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sXCJjYXRjaFwiOmZ1bmN0aW9uKGUpe3JldHVybiBhLnRoZW4obnVsbCxlKX0scGlwZTpmdW5jdGlvbigpe3ZhciBpPWFyZ3VtZW50cztyZXR1cm4gUy5EZWZlcnJlZChmdW5jdGlvbihyKXtTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPW0oaVt0WzRdXSkmJmlbdFs0XV07c1t0WzFdXShmdW5jdGlvbigpe3ZhciBlPW4mJm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2UmJm0oZS5wcm9taXNlKT9lLnByb21pc2UoKS5wcm9ncmVzcyhyLm5vdGlmeSkuZG9uZShyLnJlc29sdmUpLmZhaWwoci5yZWplY3QpOnJbdFswXStcIldpdGhcIl0odGhpcyxuP1tlXTphcmd1bWVudHMpfSl9KSxpPW51bGx9KS5wcm9taXNlKCl9LHRoZW46ZnVuY3Rpb24odCxuLHIpe3ZhciB1PTA7ZnVuY3Rpb24gbChpLG8sYSxzKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgbj10aGlzLHI9YXJndW1lbnRzLGU9ZnVuY3Rpb24oKXt2YXIgZSx0O2lmKCEoaTx1KSl7aWYoKGU9YS5hcHBseShuLHIpKT09PW8ucHJvbWlzZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7dD1lJiYoXCJvYmplY3RcIj09dHlwZW9mIGV8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpJiZlLnRoZW4sbSh0KT9zP3QuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSk6KHUrKyx0LmNhbGwoZSxsKHUsbyxSLHMpLGwodSxvLE0scyksbCh1LG8sUixvLm5vdGlmeVdpdGgpKSk6KGEhPT1SJiYobj12b2lkIDAscj1bZV0pLChzfHxvLnJlc29sdmVXaXRoKShuLHIpKX19LHQ9cz9lOmZ1bmN0aW9uKCl7dHJ5e2UoKX1jYXRjaChlKXtTLkRlZmVycmVkLmV4Y2VwdGlvbkhvb2smJlMuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayhlLHQuc3RhY2tUcmFjZSksdTw9aSsxJiYoYSE9PU0mJihuPXZvaWQgMCxyPVtlXSksby5yZWplY3RXaXRoKG4scikpfX07aT90KCk6KFMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rJiYodC5zdGFja1RyYWNlPVMuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCkpLEMuc2V0VGltZW91dCh0KSl9fXJldHVybiBTLkRlZmVycmVkKGZ1bmN0aW9uKGUpe29bMF1bM10uYWRkKGwoMCxlLG0ocik/cjpSLGUubm90aWZ5V2l0aCkpLG9bMV1bM10uYWRkKGwoMCxlLG0odCk/dDpSKSksb1syXVszXS5hZGQobCgwLGUsbShuKT9uOk0pKX0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZT9TLmV4dGVuZChlLGEpOmF9fSxzPXt9O3JldHVybiBTLmVhY2gobyxmdW5jdGlvbihlLHQpe3ZhciBuPXRbMl0scj10WzVdO2FbdFsxXV09bi5hZGQsciYmbi5hZGQoZnVuY3Rpb24oKXtpPXJ9LG9bMy1lXVsyXS5kaXNhYmxlLG9bMy1lXVszXS5kaXNhYmxlLG9bMF1bMl0ubG9jayxvWzBdWzNdLmxvY2spLG4uYWRkKHRbM10uZmlyZSksc1t0WzBdXT1mdW5jdGlvbigpe3JldHVybiBzW3RbMF0rXCJXaXRoXCJdKHRoaXM9PT1zP3ZvaWQgMDp0aGlzLGFyZ3VtZW50cyksdGhpc30sc1t0WzBdK1wiV2l0aFwiXT1uLmZpcmVXaXRofSksYS5wcm9taXNlKHMpLGUmJmUuY2FsbChzLHMpLHN9LHdoZW46ZnVuY3Rpb24oZSl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCx0PW4scj1BcnJheSh0KSxpPXMuY2FsbChhcmd1bWVudHMpLG89Uy5EZWZlcnJlZCgpLGE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JbdF09dGhpcyxpW3RdPTE8YXJndW1lbnRzLmxlbmd0aD9zLmNhbGwoYXJndW1lbnRzKTplLC0tbnx8by5yZXNvbHZlV2l0aChyLGkpfX07aWYobjw9MSYmKEkoZSxvLmRvbmUoYSh0KSkucmVzb2x2ZSxvLnJlamVjdCwhbiksXCJwZW5kaW5nXCI9PT1vLnN0YXRlKCl8fG0oaVt0XSYmaVt0XS50aGVuKSkpcmV0dXJuIG8udGhlbigpO3doaWxlKHQtLSlJKGlbdF0sYSh0KSxvLnJlamVjdCk7cmV0dXJuIG8ucHJvbWlzZSgpfX0pO3ZhciBXPS9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vaz1mdW5jdGlvbihlLHQpe0MuY29uc29sZSYmQy5jb25zb2xlLndhcm4mJmUmJlcudGVzdChlLm5hbWUpJiZDLmNvbnNvbGUud2FybihcImpRdWVyeS5EZWZlcnJlZCBleGNlcHRpb246IFwiK2UubWVzc2FnZSxlLnN0YWNrLHQpfSxTLnJlYWR5RXhjZXB0aW9uPWZ1bmN0aW9uKGUpe0Muc2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGV9KX07dmFyIEY9Uy5EZWZlcnJlZCgpO2Z1bmN0aW9uIEIoKXtFLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpLFMucmVhZHkoKX1TLmZuLnJlYWR5PWZ1bmN0aW9uKGUpe3JldHVybiBGLnRoZW4oZSlbXCJjYXRjaFwiXShmdW5jdGlvbihlKXtTLnJlYWR5RXhjZXB0aW9uKGUpfSksdGhpc30sUy5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEscmVhZHk6ZnVuY3Rpb24oZSl7KCEwPT09ZT8tLVMucmVhZHlXYWl0OlMuaXNSZWFkeSl8fChTLmlzUmVhZHk9ITApIT09ZSYmMDwtLVMucmVhZHlXYWl0fHxGLnJlc29sdmVXaXRoKEUsW1NdKX19KSxTLnJlYWR5LnRoZW49Ri50aGVuLFwiY29tcGxldGVcIj09PUUucmVhZHlTdGF0ZXx8XCJsb2FkaW5nXCIhPT1FLnJlYWR5U3RhdGUmJiFFLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbD9DLnNldFRpbWVvdXQoUy5yZWFkeSk6KEUuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixCKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsQikpO3ZhciAkPWZ1bmN0aW9uKGUsdCxuLHIsaSxvLGEpe3ZhciBzPTAsdT1lLmxlbmd0aCxsPW51bGw9PW47aWYoXCJvYmplY3RcIj09PXcobikpZm9yKHMgaW4gaT0hMCxuKSQoZSx0LHMsbltzXSwhMCxvLGEpO2Vsc2UgaWYodm9pZCAwIT09ciYmKGk9ITAsbShyKXx8KGE9ITApLGwmJihhPyh0LmNhbGwoZSxyKSx0PW51bGwpOihsPXQsdD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIGwuY2FsbChTKGUpLG4pfSkpLHQpKWZvcig7czx1O3MrKyl0KGVbc10sbixhP3I6ci5jYWxsKGVbc10scyx0KGVbc10sbikpKTtyZXR1cm4gaT9lOmw/dC5jYWxsKGUpOnU/dChlWzBdLG4pOm99LF89L14tbXMtLyx6PS8tKFthLXpdKS9nO2Z1bmN0aW9uIFUoZSx0KXtyZXR1cm4gdC50b1VwcGVyQ2FzZSgpfWZ1bmN0aW9uIFgoZSl7cmV0dXJuIGUucmVwbGFjZShfLFwibXMtXCIpLnJlcGxhY2UoeixVKX12YXIgVj1mdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV8fDk9PT1lLm5vZGVUeXBlfHwhK2Uubm9kZVR5cGV9O2Z1bmN0aW9uIEcoKXt0aGlzLmV4cGFuZG89Uy5leHBhbmRvK0cudWlkKyt9Ry51aWQ9MSxHLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZVt0aGlzLmV4cGFuZG9dO3JldHVybiB0fHwodD17fSxWKGUpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dDpPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0aGlzLmV4cGFuZG8se3ZhbHVlOnQsY29uZmlndXJhYmxlOiEwfSkpKSx0fSxzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk9dGhpcy5jYWNoZShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpW1godCldPW47ZWxzZSBmb3IociBpbiB0KWlbWChyKV09dFtyXTtyZXR1cm4gaX0sZ2V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy5jYWNoZShlKTplW3RoaXMuZXhwYW5kb10mJmVbdGhpcy5leHBhbmRvXVtYKHQpXX0sYWNjZXNzOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdm9pZCAwPT09dHx8dCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJnZvaWQgMD09PW4/dGhpcy5nZXQoZSx0KToodGhpcy5zZXQoZSx0LG4pLHZvaWQgMCE9PW4/bjp0KX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1lW3RoaXMuZXhwYW5kb107aWYodm9pZCAwIT09cil7aWYodm9pZCAwIT09dCl7bj0odD1BcnJheS5pc0FycmF5KHQpP3QubWFwKFgpOih0PVgodCkpaW4gcj9bdF06dC5tYXRjaChQKXx8W10pLmxlbmd0aDt3aGlsZShuLS0pZGVsZXRlIHJbdFtuXV19KHZvaWQgMD09PXR8fFMuaXNFbXB0eU9iamVjdChyKSkmJihlLm5vZGVUeXBlP2VbdGhpcy5leHBhbmRvXT12b2lkIDA6ZGVsZXRlIGVbdGhpcy5leHBhbmRvXSl9fSxoYXNEYXRhOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdm9pZCAwIT09dCYmIVMuaXNFbXB0eU9iamVjdCh0KX19O3ZhciBZPW5ldyBHLFE9bmV3IEcsSj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sSz0vW0EtWl0vZztmdW5jdGlvbiBaKGUsdCxuKXt2YXIgcixpO2lmKHZvaWQgMD09PW4mJjE9PT1lLm5vZGVUeXBlKWlmKHI9XCJkYXRhLVwiK3QucmVwbGFjZShLLFwiLSQmXCIpLnRvTG93ZXJDYXNlKCksXCJzdHJpbmdcIj09dHlwZW9mKG49ZS5nZXRBdHRyaWJ1dGUocikpKXt0cnl7bj1cInRydWVcIj09PShpPW4pfHxcImZhbHNlXCIhPT1pJiYoXCJudWxsXCI9PT1pP251bGw6aT09PStpK1wiXCI/K2k6Si50ZXN0KGkpP0pTT04ucGFyc2UoaSk6aSl9Y2F0Y2goZSl7fVEuc2V0KGUsdCxuKX1lbHNlIG49dm9pZCAwO3JldHVybiBufVMuZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGUpe3JldHVybiBRLmhhc0RhdGEoZSl8fFkuaGFzRGF0YShlKX0sZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFEuYWNjZXNzKGUsdCxuKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1EucmVtb3ZlKGUsdCl9LF9kYXRhOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gWS5hY2Nlc3MoZSx0LG4pfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihlLHQpe1kucmVtb3ZlKGUsdCl9fSksUy5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24obixlKXt2YXIgdCxyLGksbz10aGlzWzBdLGE9byYmby5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PW4pe2lmKHRoaXMubGVuZ3RoJiYoaT1RLmdldChvKSwxPT09by5ub2RlVHlwZSYmIVkuZ2V0KG8sXCJoYXNEYXRhQXR0cnNcIikpKXt0PWEubGVuZ3RoO3doaWxlKHQtLSlhW3RdJiYwPT09KHI9YVt0XS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPVgoci5zbGljZSg1KSksWihvLHIsaVtyXSkpO1kuc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuKX0pOiQodGhpcyxmdW5jdGlvbihlKXt2YXIgdDtpZihvJiZ2b2lkIDA9PT1lKXJldHVybiB2b2lkIDAhPT0odD1RLmdldChvLG4pKT90OnZvaWQgMCE9PSh0PVoobyxuKSk/dDp2b2lkIDA7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7US5zZXQodGhpcyxuLGUpfSl9LG51bGwsZSwxPGFyZ3VtZW50cy5sZW5ndGgsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1EucmVtb3ZlKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKGUpcmV0dXJuIHQ9KHR8fFwiZnhcIikrXCJxdWV1ZVwiLHI9WS5nZXQoZSx0KSxuJiYoIXJ8fEFycmF5LmlzQXJyYXkobik/cj1ZLmFjY2VzcyhlLHQsUy5tYWtlQXJyYXkobikpOnIucHVzaChuKSkscnx8W119LGRlcXVldWU6ZnVuY3Rpb24oZSx0KXt0PXR8fFwiZnhcIjt2YXIgbj1TLnF1ZXVlKGUsdCkscj1uLmxlbmd0aCxpPW4uc2hpZnQoKSxvPVMuX3F1ZXVlSG9va3MoZSx0KTtcImlucHJvZ3Jlc3NcIj09PWkmJihpPW4uc2hpZnQoKSxyLS0pLGkmJihcImZ4XCI9PT10JiZuLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBvLnN0b3AsaS5jYWxsKGUsZnVuY3Rpb24oKXtTLmRlcXVldWUoZSx0KX0sbykpLCFyJiZvJiZvLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oZSx0KXt2YXIgbj10K1wicXVldWVIb29rc1wiO3JldHVybiBZLmdldChlLG4pfHxZLmFjY2VzcyhlLG4se2VtcHR5OlMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7WS5yZW1vdmUoZSxbdCtcInF1ZXVlXCIsbl0pfSl9KX19KSxTLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24odCxuKXt2YXIgZT0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCJmeFwiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP1MucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9Uy5xdWV1ZSh0aGlzLHQsbik7Uy5fcXVldWVIb29rcyh0aGlzLHQpLFwiZnhcIj09PXQmJlwiaW5wcm9ncmVzc1wiIT09ZVswXSYmUy5kZXF1ZXVlKHRoaXMsdCl9KX0sZGVxdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKHRoaXMsZSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5xdWV1ZShlfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj0xLGk9Uy5EZWZlcnJlZCgpLG89dGhpcyxhPXRoaXMubGVuZ3RoLHM9ZnVuY3Rpb24oKXstLXJ8fGkucmVzb2x2ZVdpdGgobyxbb10pfTtcInN0cmluZ1wiIT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksZT1lfHxcImZ4XCI7d2hpbGUoYS0tKShuPVkuZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgZWU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLHRlPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2VlK1wiKShbYS16JV0qKSRcIixcImlcIiksbmU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLHJlPUUuZG9jdW1lbnRFbGVtZW50LGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sb2U9e2NvbXBvc2VkOiEwfTtyZS5nZXRSb290Tm9kZSYmKGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShvZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJmllKGUpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIpfTtmdW5jdGlvbiBzZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIFMuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwoUy5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9ZS5ub2RlVHlwZSYmKFMuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJnRlLmV4ZWMoUy5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe3UvPTIsbD1sfHxjWzNdLGM9K3V8fDE7d2hpbGUoYS0tKVMuc3R5bGUoZSx0LGMrbCksKDEtbykqKDEtKG89cygpL3V8fC41KSk8PTAmJihhPTApLGMvPW87Yyo9MixTLnN0eWxlKGUsdCxjK2wpLG49bnx8W119cmV0dXJuIG4mJihjPStjfHwrdXx8MCxpPW5bMV0/YysoblsxXSsxKSpuWzJdOituWzJdLHImJihyLnVuaXQ9bCxyLnN0YXJ0PWMsci5lbmQ9aSkpLGl9dmFyIHVlPXt9O2Z1bmN0aW9uIGxlKGUsdCl7Zm9yKHZhciBuLHIsaSxvLGEscyx1LGw9W10sYz0wLGY9ZS5sZW5ndGg7YzxmO2MrKykocj1lW2NdKS5zdHlsZSYmKG49ci5zdHlsZS5kaXNwbGF5LHQ/KFwibm9uZVwiPT09biYmKGxbY109WS5nZXQocixcImRpc3BsYXlcIil8fG51bGwsbFtjXXx8KHIuc3R5bGUuZGlzcGxheT1cIlwiKSksXCJcIj09PXIuc3R5bGUuZGlzcGxheSYmYWUocikmJihsW2NdPSh1PWE9bz12b2lkIDAsYT0oaT1yKS5vd25lckRvY3VtZW50LHM9aS5ub2RlTmFtZSwodT11ZVtzXSl8fChvPWEuYm9keS5hcHBlbmRDaGlsZChhLmNyZWF0ZUVsZW1lbnQocykpLHU9Uy5jc3MobyxcImRpc3BsYXlcIiksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pLFwibm9uZVwiPT09dSYmKHU9XCJibG9ja1wiKSx1ZVtzXT11KSkpKTpcIm5vbmVcIiE9PW4mJihsW2NdPVwibm9uZVwiLFkuc2V0KHIsXCJkaXNwbGF5XCIsbikpKTtmb3IoYz0wO2M8ZjtjKyspbnVsbCE9bFtjXSYmKGVbY10uc3R5bGUuZGlzcGxheT1sW2NdKTtyZXR1cm4gZX1TLmZuLmV4dGVuZCh7c2hvdzpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBsZSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGUpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZT9lP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe2FlKHRoaXMpP1ModGhpcykuc2hvdygpOlModGhpcykuaGlkZSgpfSl9fSk7dmFyIGNlLGZlLHBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pLGRlPS88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKikvaSxoZT0vXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pO2NlPUUuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcImRpdlwiKSksKGZlPUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxmZS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGZlLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksY2UuYXBwZW5kQ2hpbGQoZmUpLHkuY2hlY2tDbG9uZT1jZS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsY2UuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLHkubm9DbG9uZUNoZWNrZWQ9ISFjZS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWUsY2UuaW5uZXJIVE1MPVwiPG9wdGlvbj48L29wdGlvbj5cIix5Lm9wdGlvbj0hIWNlLmxhc3RDaGlsZDt2YXIgZ2U9e3RoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2Z1bmN0aW9uIHZlKGUsdCl7dmFyIG47cmV0dXJuIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUucXVlcnlTZWxlY3RvckFsbD9lLnF1ZXJ5U2VsZWN0b3JBbGwodHx8XCIqXCIpOltdLHZvaWQgMD09PXR8fHQmJkEoZSx0KT9TLm1lcmdlKFtlXSxuKTpufWZ1bmN0aW9uIHllKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKVkuc2V0KGVbbl0sXCJnbG9iYWxFdmFsXCIsIXR8fFkuZ2V0KHRbbl0sXCJnbG9iYWxFdmFsXCIpKX1nZS50Ym9keT1nZS50Zm9vdD1nZS5jb2xncm91cD1nZS5jYXB0aW9uPWdlLnRoZWFkLGdlLnRoPWdlLnRkLHkub3B0aW9ufHwoZ2Uub3B0Z3JvdXA9Z2Uub3B0aW9uPVsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdKTt2YXIgbWU9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIHhlKGUsdCxuLHIsaSl7Zm9yKHZhciBvLGEscyx1LGwsYyxmPXQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLHA9W10sZD0wLGg9ZS5sZW5ndGg7ZDxoO2QrKylpZigobz1lW2RdKXx8MD09PW8paWYoXCJvYmplY3RcIj09PXcobykpUy5tZXJnZShwLG8ubm9kZVR5cGU/W29dOm8pO2Vsc2UgaWYobWUudGVzdChvKSl7YT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStTLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07d2hpbGUoYy0tKWE9YS5sYXN0Q2hpbGQ7Uy5tZXJnZShwLGEuY2hpbGROb2RlcyksKGE9Zi5maXJzdENoaWxkKS50ZXh0Q29udGVudD1cIlwifWVsc2UgcC5wdXNoKHQuY3JlYXRlVGV4dE5vZGUobykpO2YudGV4dENvbnRlbnQ9XCJcIixkPTA7d2hpbGUobz1wW2QrK10paWYociYmLTE8Uy5pbkFycmF5KG8scikpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD1pZShvKSxhPXZlKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmeWUoYSksbil7Yz0wO3doaWxlKG89YVtjKytdKWhlLnRlc3Qoby50eXBlfHxcIlwiKSYmbi5wdXNoKG8pfXJldHVybiBmfXZhciBiZT0vXmtleS8sd2U9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLFRlPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gQ2UoKXtyZXR1cm4hMH1mdW5jdGlvbiBFZSgpe3JldHVybiExfWZ1bmN0aW9uIFNlKGUsdCl7cmV0dXJuIGU9PT1mdW5jdGlvbigpe3RyeXtyZXR1cm4gRS5hY3RpdmVFbGVtZW50fWNhdGNoKGUpe319KCk9PShcImZvY3VzXCI9PT10KX1mdW5jdGlvbiBrZShlLHQsbixyLGksbyl7dmFyIGEscztpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7Zm9yKHMgaW5cInN0cmluZ1wiIT10eXBlb2YgbiYmKHI9cnx8bixuPXZvaWQgMCksdClrZShlLHMsbixyLHRbc10sbyk7cmV0dXJuIGV9aWYobnVsbD09ciYmbnVsbD09aT8oaT1uLHI9bj12b2lkIDApOm51bGw9PWkmJihcInN0cmluZ1wiPT10eXBlb2Ygbj8oaT1yLHI9dm9pZCAwKTooaT1yLHI9bixuPXZvaWQgMCkpLCExPT09aSlpPUVlO2Vsc2UgaWYoIWkpcmV0dXJuIGU7cmV0dXJuIDE9PT1vJiYoYT1pLChpPWZ1bmN0aW9uKGUpe3JldHVybiBTKCkub2ZmKGUpLGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfSkuZ3VpZD1hLmd1aWR8fChhLmd1aWQ9Uy5ndWlkKyspKSxlLmVhY2goZnVuY3Rpb24oKXtTLmV2ZW50LmFkZCh0aGlzLHQsaSxyLG4pfSl9ZnVuY3Rpb24gQWUoZSxpLG8pe28/KFkuc2V0KGUsaSwhMSksUy5ldmVudC5hZGQoZSxpLHtuYW1lc3BhY2U6ITEsaGFuZGxlcjpmdW5jdGlvbihlKXt2YXIgdCxuLHI9WS5nZXQodGhpcyxpKTtpZigxJmUuaXNUcmlnZ2VyJiZ0aGlzW2ldKXtpZihyLmxlbmd0aCkoUy5ldmVudC5zcGVjaWFsW2ldfHx7fSkuZGVsZWdhdGVUeXBlJiZlLnN0b3BQcm9wYWdhdGlvbigpO2Vsc2UgaWYocj1zLmNhbGwoYXJndW1lbnRzKSxZLnNldCh0aGlzLGksciksdD1vKHRoaXMsaSksdGhpc1tpXSgpLHIhPT0obj1ZLmdldCh0aGlzLGkpKXx8dD9ZLnNldCh0aGlzLGksITEpOm49e30sciE9PW4pcmV0dXJuIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpLG4udmFsdWV9ZWxzZSByLmxlbmd0aCYmKFkuc2V0KHRoaXMsaSx7dmFsdWU6Uy5ldmVudC50cmlnZ2VyKFMuZXh0ZW5kKHJbMF0sUy5FdmVudC5wcm90b3R5cGUpLHIuc2xpY2UoMSksdGhpcyl9KSxlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpKX19KSk6dm9pZCAwPT09WS5nZXQoZSxpKSYmUy5ldmVudC5hZGQoZSxpLENlKX1TLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVkuZ2V0KHQpO2lmKFYodCkpe24uaGFuZGxlciYmKG49KG89bikuaGFuZGxlcixpPW8uc2VsZWN0b3IpLGkmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IocmUsaSksbi5ndWlkfHwobi5ndWlkPVMuZ3VpZCsrKSwodT12LmV2ZW50cyl8fCh1PXYuZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCkpLChhPXYuaGFuZGxlKXx8KGE9di5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFMmJlMuZXZlbnQudHJpZ2dlcmVkIT09ZS50eXBlP1MuZXZlbnQuZGlzcGF0Y2guYXBwbHkodCxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KGU9KGV8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDt3aGlsZShsLS0pZD1nPShzPVRlLmV4ZWMoZVtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQmJihmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30sZD0oaT9mLmRlbGVnYXRlVHlwZTpmLmJpbmRUeXBlKXx8ZCxmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30sYz1TLmV4dGVuZCh7dHlwZTpkLG9yaWdUeXBlOmcsZGF0YTpyLGhhbmRsZXI6bixndWlkOm4uZ3VpZCxzZWxlY3RvcjppLG5lZWRzQ29udGV4dDppJiZTLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoaSksbmFtZXNwYWNlOmguam9pbihcIi5cIil9LG8pLChwPXVbZF0pfHwoKHA9dVtkXT1bXSkuZGVsZWdhdGVDb3VudD0wLGYuc2V0dXAmJiExIT09Zi5zZXR1cC5jYWxsKHQscixoLGEpfHx0LmFkZEV2ZW50TGlzdGVuZXImJnQuYWRkRXZlbnRMaXN0ZW5lcihkLGEpKSxmLmFkZCYmKGYuYWRkLmNhbGwodCxjKSxjLmhhbmRsZXIuZ3VpZHx8KGMuaGFuZGxlci5ndWlkPW4uZ3VpZCkpLGk/cC5zcGxpY2UocC5kZWxlZ2F0ZUNvdW50KyssMCxjKTpwLnB1c2goYyksUy5ldmVudC5nbG9iYWxbZF09ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVkuaGFzRGF0YShlKSYmWS5nZXQoZSk7aWYodiYmKHU9di5ldmVudHMpKXtsPSh0PSh0fHxcIlwiKS5tYXRjaChQKXx8W1wiXCJdKS5sZW5ndGg7d2hpbGUobC0tKWlmKGQ9Zz0ocz1UZS5leGVjKHRbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkKXtmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KHI/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxzPXNbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxhPW89cC5sZW5ndGg7d2hpbGUoby0tKWM9cFtvXSwhaSYmZyE9PWMub3JpZ1R5cGV8fG4mJm4uZ3VpZCE9PWMuZ3VpZHx8cyYmIXMudGVzdChjLm5hbWVzcGFjZSl8fHImJnIhPT1jLnNlbGVjdG9yJiYoXCIqKlwiIT09cnx8IWMuc2VsZWN0b3IpfHwocC5zcGxpY2UobywxKSxjLnNlbGVjdG9yJiZwLmRlbGVnYXRlQ291bnQtLSxmLnJlbW92ZSYmZi5yZW1vdmUuY2FsbChlLGMpKTthJiYhcC5sZW5ndGgmJihmLnRlYXJkb3duJiYhMSE9PWYudGVhcmRvd24uY2FsbChlLGgsdi5oYW5kbGUpfHxTLnJlbW92ZUV2ZW50KGUsZCx2LmhhbmRsZSksZGVsZXRlIHVbZF0pfWVsc2UgZm9yKGQgaW4gdSlTLmV2ZW50LnJlbW92ZShlLGQrdFtsXSxuLHIsITApO1MuaXNFbXB0eU9iamVjdCh1KSYmWS5yZW1vdmUoZSxcImhhbmRsZSBldmVudHNcIil9fSxkaXNwYXRjaDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaSxvLGEscz1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksdT1TLmV2ZW50LmZpeChlKSxsPShZLmdldCh0aGlzLFwiZXZlbnRzXCIpfHxPYmplY3QuY3JlYXRlKG51bGwpKVt1LnR5cGVdfHxbXSxjPVMuZXZlbnQuc3BlY2lhbFt1LnR5cGVdfHx7fTtmb3Ioc1swXT11LHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXNbdF09YXJndW1lbnRzW3RdO2lmKHUuZGVsZWdhdGVUYXJnZXQ9dGhpcywhYy5wcmVEaXNwYXRjaHx8ITEhPT1jLnByZURpc3BhdGNoLmNhbGwodGhpcyx1KSl7YT1TLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyx1LGwpLHQ9MDt3aGlsZSgoaT1hW3QrK10pJiYhdS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXt1LmN1cnJlbnRUYXJnZXQ9aS5lbGVtLG49MDt3aGlsZSgobz1pLmhhbmRsZXJzW24rK10pJiYhdS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKXUucm5hbWVzcGFjZSYmITEhPT1vLm5hbWVzcGFjZSYmIXUucm5hbWVzcGFjZS50ZXN0KG8ubmFtZXNwYWNlKXx8KHUuaGFuZGxlT2JqPW8sdS5kYXRhPW8uZGF0YSx2b2lkIDAhPT0ocj0oKFMuZXZlbnQuc3BlY2lhbFtvLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8by5oYW5kbGVyKS5hcHBseShpLmVsZW0scykpJiYhMT09PSh1LnJlc3VsdD1yKSYmKHUucHJldmVudERlZmF1bHQoKSx1LnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGMucG9zdERpc3BhdGNoJiZjLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsdSksdS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGEscz1bXSx1PXQuZGVsZWdhdGVDb3VudCxsPWUudGFyZ2V0O2lmKHUmJmwubm9kZVR5cGUmJiEoXCJjbGlja1wiPT09ZS50eXBlJiYxPD1lLmJ1dHRvbikpZm9yKDtsIT09dGhpcztsPWwucGFyZW50Tm9kZXx8dGhpcylpZigxPT09bC5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWUudHlwZXx8ITAhPT1sLmRpc2FibGVkKSl7Zm9yKG89W10sYT17fSxuPTA7bjx1O24rKyl2b2lkIDA9PT1hW2k9KHI9dFtuXSkuc2VsZWN0b3IrXCIgXCJdJiYoYVtpXT1yLm5lZWRzQ29udGV4dD8tMTxTKGksdGhpcykuaW5kZXgobCk6Uy5maW5kKGksdGhpcyxudWxsLFtsXSkubGVuZ3RoKSxhW2ldJiZvLnB1c2gocik7by5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOm99KX1yZXR1cm4gbD10aGlzLHU8dC5sZW5ndGgmJnMucHVzaCh7ZWxlbTpsLGhhbmRsZXJzOnQuc2xpY2UodSl9KSxzfSxhZGRQcm9wOmZ1bmN0aW9uKHQsZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KFMuRXZlbnQucHJvdG90eXBlLHQse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDptKGUpP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiBlKHRoaXMub3JpZ2luYWxFdmVudCl9OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbdF19LHNldDpmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTplfSl9fSl9LGZpeDpmdW5jdGlvbihlKXtyZXR1cm4gZVtTLmV4cGFuZG9dP2U6bmV3IFMuRXZlbnQoZSl9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxjbGljazp7c2V0dXA6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc3x8ZTtyZXR1cm4gcGUudGVzdCh0LnR5cGUpJiZ0LmNsaWNrJiZBKHQsXCJpbnB1dFwiKSYmQWUodCxcImNsaWNrXCIsQ2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkFlKHQsXCJjbGlja1wiKSwhMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQ7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJlkuZ2V0KHQsXCJjbGlja1wiKXx8QSh0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUucmVzdWx0JiZlLm9yaWdpbmFsRXZlbnQmJihlLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9ZS5yZXN1bHQpfX19fSxTLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUsdCxuKXtlLnJlbW92ZUV2ZW50TGlzdGVuZXImJmUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LG4pfSxTLkV2ZW50PWZ1bmN0aW9uKGUsdCl7aWYoISh0aGlzIGluc3RhbmNlb2YgUy5FdmVudCkpcmV0dXJuIG5ldyBTLkV2ZW50KGUsdCk7ZSYmZS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9ZSx0aGlzLnR5cGU9ZS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWUuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09ZS5kZWZhdWx0UHJldmVudGVkJiYhMT09PWUucmV0dXJuVmFsdWU/Q2U6RWUsdGhpcy50YXJnZXQ9ZS50YXJnZXQmJjM9PT1lLnRhcmdldC5ub2RlVHlwZT9lLnRhcmdldC5wYXJlbnROb2RlOmUudGFyZ2V0LHRoaXMuY3VycmVudFRhcmdldD1lLmN1cnJlbnRUYXJnZXQsdGhpcy5yZWxhdGVkVGFyZ2V0PWUucmVsYXRlZFRhcmdldCk6dGhpcy50eXBlPWUsdCYmUy5leHRlbmQodGhpcyx0KSx0aGlzLnRpbWVTdGFtcD1lJiZlLnRpbWVTdGFtcHx8RGF0ZS5ub3coKSx0aGlzW1MuZXhwYW5kb109ITB9LFMuRXZlbnQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpTLkV2ZW50LGlzRGVmYXVsdFByZXZlbnRlZDpFZSxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpFZSxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpFZSxpc1NpbXVsYXRlZDohMSxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1DZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1DZSxlJiYhdGhpcy5pc1NpbXVsYXRlZCYmZS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LFMuZWFjaCh7YWx0S2V5OiEwLGJ1YmJsZXM6ITAsY2FuY2VsYWJsZTohMCxjaGFuZ2VkVG91Y2hlczohMCxjdHJsS2V5OiEwLGRldGFpbDohMCxldmVudFBoYXNlOiEwLG1ldGFLZXk6ITAscGFnZVg6ITAscGFnZVk6ITAsc2hpZnRLZXk6ITAsdmlldzohMCxcImNoYXJcIjohMCxjb2RlOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGUpe3ZhciB0PWUuYnV0dG9uO3JldHVybiBudWxsPT1lLndoaWNoJiZiZS50ZXN0KGUudHlwZSk/bnVsbCE9ZS5jaGFyQ29kZT9lLmNoYXJDb2RlOmUua2V5Q29kZTohZS53aGljaCYmdm9pZCAwIT09dCYmd2UudGVzdChlLnR5cGUpPzEmdD8xOjImdD8zOjQmdD8yOjA6ZS53aGljaH19LFMuZXZlbnQuYWRkUHJvcCksUy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oZSx0KXtTLmV2ZW50LnNwZWNpYWxbZV09e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIEFlKHRoaXMsZSxTZSksITF9LHRyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gQWUodGhpcyxlKSwhMH0sZGVsZWdhdGVUeXBlOnR9fSksUy5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGUsaSl7Uy5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6aSxiaW5kVHlwZTppLGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdCxuPWUucmVsYXRlZFRhcmdldCxyPWUuaGFuZGxlT2JqO3JldHVybiBuJiYobj09PXRoaXN8fFMuY29udGFpbnModGhpcyxuKSl8fChlLnR5cGU9ci5vcmlnVHlwZSx0PXIuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPWkpLHR9fX0pLFMuZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4ga2UodGhpcyxlLHQsbixyKX0sb25lOmZ1bmN0aW9uKGUsdCxuLHIpe3JldHVybiBrZSh0aGlzLGUsdCxuLHIsMSl9LG9mZjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaTtpZihlJiZlLnByZXZlbnREZWZhdWx0JiZlLmhhbmRsZU9iailyZXR1cm4gcj1lLmhhbmRsZU9iaixTKGUuZGVsZWdhdGVUYXJnZXQpLm9mZihyLm5hbWVzcGFjZT9yLm9yaWdUeXBlK1wiLlwiK3IubmFtZXNwYWNlOnIub3JpZ1R5cGUsci5zZWxlY3RvcixyLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUpe2ZvcihpIGluIGUpdGhpcy5vZmYoaSx0LGVbaV0pO3JldHVybiB0aGlzfXJldHVybiExIT09dCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdHx8KG49dCx0PXZvaWQgMCksITE9PT1uJiYobj1FZSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC5yZW1vdmUodGhpcyxlLG4sdCl9KX19KTt2YXIgTmU9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksRGU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxqZT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gcWUoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJlMoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBMZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBIZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gT2UoZSx0KXt2YXIgbixyLGksbyxhLHM7aWYoMT09PXQubm9kZVR5cGUpe2lmKFkuaGFzRGF0YShlKSYmKHM9WS5nZXQoZSkuZXZlbnRzKSlmb3IoaSBpbiBZLnJlbW92ZSh0LFwiaGFuZGxlIGV2ZW50c1wiKSxzKWZvcihuPTAscj1zW2ldLmxlbmd0aDtuPHI7bisrKVMuZXZlbnQuYWRkKHQsaSxzW2ldW25dKTtRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9Uy5leHRlbmQoe30sbyksUS5zZXQodCxhKSl9fWZ1bmN0aW9uIFBlKG4scixpLG8pe3I9ZyhyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYheS5jaGVja0Nsb25lJiZEZS50ZXN0KGQpKXJldHVybiBuLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9bi5lcShlKTtoJiYoclswXT1kLmNhbGwodGhpcyxlLHQuaHRtbCgpKSksUGUodCxyLGksbyl9KTtpZihmJiYodD0oZT14ZShyLG5bMF0ub3duZXJEb2N1bWVudCwhMSxuLG8pKS5maXJzdENoaWxkLDE9PT1lLmNoaWxkTm9kZXMubGVuZ3RoJiYoZT10KSx0fHxvKSl7Zm9yKHM9KGE9Uy5tYXAodmUoZSxcInNjcmlwdFwiKSxMZSkpLmxlbmd0aDtjPGY7YysrKXU9ZSxjIT09cCYmKHU9Uy5jbG9uZSh1LCEwLCEwKSxzJiZTLm1lcmdlKGEsdmUodSxcInNjcmlwdFwiKSkpLGkuY2FsbChuW2NdLHUsYyk7aWYocylmb3IobD1hW2EubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsUy5tYXAoYSxIZSksYz0wO2M8cztjKyspdT1hW2NdLGhlLnRlc3QodS50eXBlfHxcIlwiKSYmIVkuYWNjZXNzKHUsXCJnbG9iYWxFdmFsXCIpJiZTLmNvbnRhaW5zKGwsdSkmJih1LnNyYyYmXCJtb2R1bGVcIiE9PSh1LnR5cGV8fFwiXCIpLnRvTG93ZXJDYXNlKCk/Uy5fZXZhbFVybCYmIXUubm9Nb2R1bGUmJlMuX2V2YWxVcmwodS5zcmMse25vbmNlOnUubm9uY2V8fHUuZ2V0QXR0cmlidXRlKFwibm9uY2VcIil9LGwpOmIodS50ZXh0Q29udGVudC5yZXBsYWNlKGplLFwiXCIpLHUsbCkpfXJldHVybiBufWZ1bmN0aW9uIFJlKGUsdCxuKXtmb3IodmFyIHIsaT10P1MuZmlsdGVyKHQsZSk6ZSxvPTA7bnVsbCE9KHI9aVtvXSk7bysrKW58fDEhPT1yLm5vZGVUeXBlfHxTLmNsZWFuRGF0YSh2ZShyKSksci5wYXJlbnROb2RlJiYobiYmaWUocikmJnllKHZlKHIsXCJzY3JpcHRcIikpLHIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyKSk7cmV0dXJuIGV9Uy5leHRlbmQoe2h0bWxQcmVmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNsb25lOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbCxjPWUuY2xvbmVOb2RlKCEwKSxmPWllKGUpO2lmKCEoeS5ub0Nsb25lQ2hlY2tlZHx8MSE9PWUubm9kZVR5cGUmJjExIT09ZS5ub2RlVHlwZXx8Uy5pc1hNTERvYyhlKSkpZm9yKGE9dmUoYykscj0wLGk9KG89dmUoZSkpLmxlbmd0aDtyPGk7cisrKXM9b1tyXSx1PWFbcl0sdm9pZCAwLFwiaW5wdXRcIj09PShsPXUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkmJnBlLnRlc3Qocy50eXBlKT91LmNoZWNrZWQ9cy5jaGVja2VkOlwiaW5wdXRcIiE9PWwmJlwidGV4dGFyZWFcIiE9PWx8fCh1LmRlZmF1bHRWYWx1ZT1zLmRlZmF1bHRWYWx1ZSk7aWYodClpZihuKWZvcihvPW98fHZlKGUpLGE9YXx8dmUoYykscj0wLGk9by5sZW5ndGg7cjxpO3IrKylPZShvW3JdLGFbcl0pO2Vsc2UgT2UoZSxjKTtyZXR1cm4gMDwoYT12ZShjLFwic2NyaXB0XCIpKS5sZW5ndGgmJnllKGEsIWYmJnZlKGUsXCJzY3JpcHRcIikpLGN9LGNsZWFuRGF0YTpmdW5jdGlvbihlKXtmb3IodmFyIHQsbixyLGk9Uy5ldmVudC5zcGVjaWFsLG89MDt2b2lkIDAhPT0obj1lW29dKTtvKyspaWYoVihuKSl7aWYodD1uW1kuZXhwYW5kb10pe2lmKHQuZXZlbnRzKWZvcihyIGluIHQuZXZlbnRzKWlbcl0/Uy5ldmVudC5yZW1vdmUobixyKTpTLnJlbW92ZUV2ZW50KG4scix0LmhhbmRsZSk7bltZLmV4cGFuZG9dPXZvaWQgMH1uW1EuZXhwYW5kb10mJihuW1EuZXhwYW5kb109dm9pZCAwKX19fSksUy5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbihlKXtyZXR1cm4gUmUodGhpcyxlLCEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe3JldHVybiBSZSh0aGlzLGUpfSx0ZXh0OmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/Uy50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSl9LG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxxZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciB0PXFlKHRoaXMsZSk7dC5pbnNlcnRCZWZvcmUoZSx0LmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wO251bGwhPShlPXRoaXNbdF0pO3QrKykxPT09ZS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKGUsITEpKSxlLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihlLHQpe3JldHVybiBlPW51bGwhPWUmJmUsdD1udWxsPT10P2U6dCx0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBTLmNsb25lKHRoaXMsZSx0KX0pfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSl7dmFyIHQ9dGhpc1swXXx8e30sbj0wLHI9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09ZSYmMT09PXQubm9kZVR5cGUpcmV0dXJuIHQuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhTmUudGVzdChlKSYmIWdlWyhkZS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2U9Uy5odG1sUHJlZmlsdGVyKGUpO3RyeXtmb3IoO248cjtuKyspMT09PSh0PXRoaXNbbl18fHt9KS5ub2RlVHlwZSYmKFMuY2xlYW5EYXRhKHZlKHQsITEpKSx0LmlubmVySFRNTD1lKTt0PTB9Y2F0Y2goZSl7fX10JiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGUpfSxudWxsLGUsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIG49W107cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtTLmluQXJyYXkodGhpcyxuKTwwJiYoUy5jbGVhbkRhdGEodmUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSxuKX19KSxTLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oZSxhKXtTLmZuW2VdPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdCxuPVtdLHI9UyhlKSxpPXIubGVuZ3RoLTEsbz0wO288PWk7bysrKXQ9bz09PWk/dGhpczp0aGlzLmNsb25lKCEwKSxTKHJbb10pW2FdKHQpLHUuYXBwbHkobix0LmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobil9fSk7dmFyIE1lPW5ldyBSZWdFeHAoXCJeKFwiK2VlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLEllPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sV2U9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fTtmb3IoaSBpbiB0KW9baV09ZS5zdHlsZVtpXSxlLnN0eWxlW2ldPXRbaV07Zm9yKGkgaW4gcj1uLmNhbGwoZSksdCllLnN0eWxlW2ldPW9baV07cmV0dXJuIHJ9LEZlPW5ldyBSZWdFeHAobmUuam9pbihcInxcIiksXCJpXCIpO2Z1bmN0aW9uIEJlKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuc3R5bGU7cmV0dXJuKG49bnx8SWUoZSkpJiYoXCJcIiE9PShhPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSl8fGllKGUpfHwoYT1TLnN0eWxlKGUsdCkpLCF5LnBpeGVsQm94U3R5bGVzKCkmJk1lLnRlc3QoYSkmJkZlLnRlc3QodCkmJihyPXMud2lkdGgsaT1zLm1pbldpZHRoLG89cy5tYXhXaWR0aCxzLm1pbldpZHRoPXMubWF4V2lkdGg9cy53aWR0aD1hLGE9bi53aWR0aCxzLndpZHRoPXIscy5taW5XaWR0aD1pLHMubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gJGUoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLHJlLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO3ZhciBlPUMuZ2V0Q29tcHV0ZWRTdHlsZShsKTtuPVwiMSVcIiE9PWUudG9wLHM9MTI9PT10KGUubWFyZ2luTGVmdCksbC5zdHlsZS5yaWdodD1cIjYwJVwiLG89MzY9PT10KGUucmlnaHQpLHI9MzY9PT10KGUud2lkdGgpLGwuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGk9MTI9PT10KGwub2Zmc2V0V2lkdGgvMykscmUucmVtb3ZlQ2hpbGQodSksbD1udWxsfX1mdW5jdGlvbiB0KGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBuLHIsaSxvLGEscyx1PUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxsPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLnN0eWxlJiYobC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsbC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIseS5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09bC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxTLmV4dGVuZCh5LHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBlKCkscn0scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG59LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBlKCksc30sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiBlKCksaX0scmVsaWFibGVUckRpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtyZXR1cm4gbnVsbD09YSYmKGU9RS5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksdD1FLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxuPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4XCIsdC5zdHlsZS5oZWlnaHQ9XCIxcHhcIixuLnN0eWxlLmhlaWdodD1cIjlweFwiLHJlLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKHQpLmFwcGVuZENoaWxkKG4pLHI9Qy5nZXRDb21wdXRlZFN0eWxlKHQpLGE9MzxwYXJzZUludChyLmhlaWdodCkscmUucmVtb3ZlQ2hpbGQoZSkpLGF9fSkpfSgpO3ZhciBfZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0semU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFVlPXt9O2Z1bmN0aW9uIFhlKGUpe3ZhciB0PVMuY3NzUHJvcHNbZV18fFVlW2VdO3JldHVybiB0fHwoZSBpbiB6ZT9lOlVlW2VdPWZ1bmN0aW9uKGUpe3ZhciB0PWVbMF0udG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49X2UubGVuZ3RoO3doaWxlKG4tLSlpZigoZT1fZVtuXSt0KWluIHplKXJldHVybiBlfShlKXx8ZSl9dmFyIFZlPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxHZT0vXi0tLyxZZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sUWU9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifTtmdW5jdGlvbiBKZShlLHQsbil7dmFyIHI9dGUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIEtlKGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9Uy5jc3MoZSxuK25lW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmMDw9byYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKXx8MCksdX1mdW5jdGlvbiBaZShlLHQsbil7dmFyIHI9SWUoZSksaT0oIXkuYm94U2l6aW5nUmVsaWFibGUoKXx8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLG89aSxhPUJlKGUsdCxyKSxzPVwib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7aWYoTWUudGVzdChhKSl7aWYoIW4pcmV0dXJuIGE7YT1cImF1dG9cIn1yZXR1cm4oIXkuYm94U2l6aW5nUmVsaWFibGUoKSYmaXx8IXkucmVsaWFibGVUckRpbWVuc2lvbnMoKSYmQShlLFwidHJcIil8fFwiYXV0b1wiPT09YXx8IXBhcnNlRmxvYXQoYSkmJlwiaW5saW5lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmKGk9XCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksKG89cyBpbiBlKSYmKGE9ZVtzXSkpLChhPXBhcnNlRmxvYXQoYSl8fDApK0tlKGUsdCxufHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxvLHIsYSkrXCJweFwifWZ1bmN0aW9uIGV0KGUsdCxuLHIsaSl7cmV0dXJuIG5ldyBldC5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfVMuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49QmUoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsZ3JpZEFyZWE6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TdGFydDohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1N0YXJ0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1YKHQpLHU9R2UudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9WGUocykpLGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PT0obz10eXBlb2YgbikmJihpPXRlLmV4ZWMobikpJiZpWzFdJiYobj1zZShlLHQsaSksbz1cIm51bWJlclwiKSxudWxsIT1uJiZuPT1uJiYoXCJudW1iZXJcIiE9PW98fHV8fChuKz1pJiZpWzNdfHwoUy5jc3NOdW1iZXJbc10/XCJcIjpcInB4XCIpKSx5LmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PW58fDAhPT10LmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwobFt0XT1cImluaGVyaXRcIiksYSYmXCJzZXRcImluIGEmJnZvaWQgMD09PShuPWEuc2V0KGUsbixyKSl8fCh1P2wuc2V0UHJvcGVydHkodCxuKTpsW3RdPW4pKX19LGNzczpmdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscz1YKHQpO3JldHVybiBHZS50ZXN0KHQpfHwodD1YZShzKSksKGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSkmJlwiZ2V0XCJpbiBhJiYoaT1hLmdldChlLCEwLG4pKSx2b2lkIDA9PT1pJiYoaT1CZShlLHQscikpLFwibm9ybWFsXCI9PT1pJiZ0IGluIFFlJiYoaT1RZVt0XSksXCJcIj09PW58fG4/KG89cGFyc2VGbG9hdChpKSwhMD09PW58fGlzRmluaXRlKG8pP298fDA6aSk6aX19KSxTLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihlLHUpe1MuY3NzSG9va3NbdV09e2dldDpmdW5jdGlvbihlLHQsbil7aWYodClyZXR1cm4hVmUudGVzdChTLmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/WmUoZSx1LG4pOldlKGUsWWUsZnVuY3Rpb24oKXtyZXR1cm4gWmUoZSx1LG4pfSl9LHNldDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaT1JZShlKSxvPSF5LnNjcm9sbGJveFNpemUoKSYmXCJhYnNvbHV0ZVwiPT09aS5wb3NpdGlvbixhPShvfHxuKSYmXCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsaSkscz1uP0tlKGUsdSxuLGEsaSk6MDtyZXR1cm4gYSYmbyYmKHMtPU1hdGguY2VpbChlW1wib2Zmc2V0XCIrdVswXS50b1VwcGVyQ2FzZSgpK3Uuc2xpY2UoMSldLXBhcnNlRmxvYXQoaVt1XSktS2UoZSx1LFwiYm9yZGVyXCIsITEsaSktLjUpKSxzJiYocj10ZS5leGVjKHQpKSYmXCJweFwiIT09KHJbM118fFwicHhcIikmJihlLnN0eWxlW3VdPXQsdD1TLmNzcyhlLHUpKSxKZSgwLHQscyl9fX0pLFMuY3NzSG9va3MubWFyZ2luTGVmdD0kZSh5LnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuKHBhcnNlRmxvYXQoQmUoZSxcIm1hcmdpbkxlZnRcIikpfHxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQtV2UoZSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KSkrXCJweFwifSksUy5lYWNoKHttYXJnaW46XCJcIixwYWRkaW5nOlwiXCIsYm9yZGVyOlwiV2lkdGhcIn0sZnVuY3Rpb24oaSxvKXtTLmNzc0hvb2tzW2krb109e2V4cGFuZDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPXt9LHI9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZS5zcGxpdChcIiBcIik6W2VdO3Q8NDt0KyspbltpK25lW3RdK29dPXJbdF18fHJbdC0yXXx8clswXTtyZXR1cm4gbn19LFwibWFyZ2luXCIhPT1pJiYoUy5jc3NIb29rc1tpK29dLnNldD1KZSl9KSxTLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPXt9LGE9MDtpZihBcnJheS5pc0FycmF5KHQpKXtmb3Iocj1JZShlKSxpPXQubGVuZ3RoO2E8aTthKyspb1t0W2FdXT1TLmNzcyhlLHRbYV0sITEscik7cmV0dXJuIG99cmV0dXJuIHZvaWQgMCE9PW4/Uy5zdHlsZShlLHQsbik6Uy5jc3MoZSx0KX0sZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9fSksKChTLlR3ZWVuPWV0KS5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmV0LGluaXQ6ZnVuY3Rpb24oZSx0LG4scixpLG8pe3RoaXMuZWxlbT1lLHRoaXMucHJvcD1uLHRoaXMuZWFzaW5nPWl8fFMuZWFzaW5nLl9kZWZhdWx0LHRoaXMub3B0aW9ucz10LHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1yLHRoaXMudW5pdD1vfHwoUy5jc3NOdW1iZXJbbl0/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgZT1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gZSYmZS5nZXQ/ZS5nZXQodGhpcyk6ZXQucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGUpe3ZhciB0LG49ZXQucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz10PVMuZWFzaW5nW3RoaXMuZWFzaW5nXShlLHRoaXMub3B0aW9ucy5kdXJhdGlvbiplLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPXQ9ZSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqdCt0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxuJiZuLnNldD9uLnNldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSkuaW5pdC5wcm90b3R5cGU9ZXQucHJvdG90eXBlLChldC5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIDEhPT1lLmVsZW0ubm9kZVR5cGV8fG51bGwhPWUuZWxlbVtlLnByb3BdJiZudWxsPT1lLmVsZW0uc3R5bGVbZS5wcm9wXT9lLmVsZW1bZS5wcm9wXToodD1TLmNzcyhlLmVsZW0sZS5wcm9wLFwiXCIpKSYmXCJhdXRvXCIhPT10P3Q6MH0sc2V0OmZ1bmN0aW9uKGUpe1MuZnguc3RlcFtlLnByb3BdP1MuZnguc3RlcFtlLnByb3BdKGUpOjEhPT1lLmVsZW0ubm9kZVR5cGV8fCFTLmNzc0hvb2tzW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtYZShlLnByb3ApXT9lLmVsZW1bZS5wcm9wXT1lLm5vdzpTLnN0eWxlKGUuZWxlbSxlLnByb3AsZS5ub3crZS51bml0KX19fSkuc2Nyb2xsVG9wPWV0LnByb3BIb29rcy5zY3JvbGxMZWZ0PXtzZXQ6ZnVuY3Rpb24oZSl7ZS5lbGVtLm5vZGVUeXBlJiZlLmVsZW0ucGFyZW50Tm9kZSYmKGUuZWxlbVtlLnByb3BdPWUubm93KX19LFMuZWFzaW5nPXtsaW5lYXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHN3aW5nOmZ1bmN0aW9uKGUpe3JldHVybi41LU1hdGguY29zKGUqTWF0aC5QSSkvMn0sX2RlZmF1bHQ6XCJzd2luZ1wifSxTLmZ4PWV0LnByb3RvdHlwZS5pbml0LFMuZnguc3RlcD17fTt2YXIgdHQsbnQscnQsaXQsb3Q9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLGF0PS9xdWV1ZUhvb2tzJC87ZnVuY3Rpb24gc3QoKXtudCYmKCExPT09RS5oaWRkZW4mJkMucmVxdWVzdEFuaW1hdGlvbkZyYW1lP0MucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0KTpDLnNldFRpbWVvdXQoc3QsUy5meC5pbnRlcnZhbCksUy5meC50aWNrKCkpfWZ1bmN0aW9uIHV0KCl7cmV0dXJuIEMuc2V0VGltZW91dChmdW5jdGlvbigpe3R0PXZvaWQgMH0pLHR0PURhdGUubm93KCl9ZnVuY3Rpb24gbHQoZSx0KXt2YXIgbixyPTAsaT17aGVpZ2h0OmV9O2Zvcih0PXQ/MTowO3I8NDtyKz0yLXQpaVtcIm1hcmdpblwiKyhuPW5lW3JdKV09aVtcInBhZGRpbmdcIituXT1lO3JldHVybiB0JiYoaS5vcGFjaXR5PWkud2lkdGg9ZSksaX1mdW5jdGlvbiBjdChlLHQsbil7Zm9yKHZhciByLGk9KGZ0LnR3ZWVuZXJzW3RdfHxbXSkuY29uY2F0KGZ0LnR3ZWVuZXJzW1wiKlwiXSksbz0wLGE9aS5sZW5ndGg7bzxhO28rKylpZihyPWlbb10uY2FsbChuLHQsZSkpcmV0dXJuIHJ9ZnVuY3Rpb24gZnQobyxlLHQpe3ZhciBuLGEscj0wLGk9ZnQucHJlZmlsdGVycy5sZW5ndGgscz1TLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIHUuZWxlbX0pLHU9ZnVuY3Rpb24oKXtpZihhKXJldHVybiExO2Zvcih2YXIgZT10dHx8dXQoKSx0PU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi1lKSxuPTEtKHQvbC5kdXJhdGlvbnx8MCkscj0wLGk9bC50d2VlbnMubGVuZ3RoO3I8aTtyKyspbC50d2VlbnNbcl0ucnVuKG4pO3JldHVybiBzLm5vdGlmeVdpdGgobyxbbCxuLHRdKSxuPDEmJmk/dDooaXx8cy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTpvLHByb3BzOlMuZXh0ZW5kKHt9LGUpLG9wdHM6Uy5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOlMuZWFzaW5nLl9kZWZhdWx0fSx0KSxvcmlnaW5hbFByb3BlcnRpZXM6ZSxvcmlnaW5hbE9wdGlvbnM6dCxzdGFydFRpbWU6dHR8fHV0KCksZHVyYXRpb246dC5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLlR3ZWVuKG8sbC5vcHRzLGUsdCxsLm9wdHMuc3BlY2lhbEVhc2luZ1tlXXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gobiksbn0sc3RvcDpmdW5jdGlvbihlKXt2YXIgdD0wLG49ZT9sLnR3ZWVucy5sZW5ndGg6MDtpZihhKXJldHVybiB0aGlzO2ZvcihhPSEwO3Q8bjt0KyspbC50d2VlbnNbdF0ucnVuKDEpO3JldHVybiBlPyhzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2wsZV0pKTpzLnJlamVjdFdpdGgobyxbbCxlXSksdGhpc319KSxjPWwucHJvcHM7Zm9yKCFmdW5jdGlvbihlLHQpe3ZhciBuLHIsaSxvLGE7Zm9yKG4gaW4gZSlpZihpPXRbcj1YKG4pXSxvPWVbbl0sQXJyYXkuaXNBcnJheShvKSYmKGk9b1sxXSxvPWVbbl09b1swXSksbiE9PXImJihlW3JdPW8sZGVsZXRlIGVbbl0pLChhPVMuY3NzSG9va3Nbcl0pJiZcImV4cGFuZFwiaW4gYSlmb3IobiBpbiBvPWEuZXhwYW5kKG8pLGRlbGV0ZSBlW3JdLG8pbiBpbiBlfHwoZVtuXT1vW25dLHRbbl09aSk7ZWxzZSB0W3JdPWl9KGMsbC5vcHRzLnNwZWNpYWxFYXNpbmcpO3I8aTtyKyspaWYobj1mdC5wcmVmaWx0ZXJzW3JdLmNhbGwobCxvLGMsbC5vcHRzKSlyZXR1cm4gbShuLnN0b3ApJiYoUy5fcXVldWVIb29rcyhsLmVsZW0sbC5vcHRzLnF1ZXVlKS5zdG9wPW4uc3RvcC5iaW5kKG4pKSxuO3JldHVybiBTLm1hcChjLGN0LGwpLG0obC5vcHRzLnN0YXJ0KSYmbC5vcHRzLnN0YXJ0LmNhbGwobyxsKSxsLnByb2dyZXNzKGwub3B0cy5wcm9ncmVzcykuZG9uZShsLm9wdHMuZG9uZSxsLm9wdHMuY29tcGxldGUpLmZhaWwobC5vcHRzLmZhaWwpLmFsd2F5cyhsLm9wdHMuYWx3YXlzKSxTLmZ4LnRpbWVyKFMuZXh0ZW5kKHUse2VsZW06byxhbmltOmwscXVldWU6bC5vcHRzLnF1ZXVlfSkpLGx9Uy5BbmltYXRpb249Uy5leHRlbmQoZnQse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLmNyZWF0ZVR3ZWVuKGUsdCk7cmV0dXJuIHNlKG4uZWxlbSxlLHRlLmV4ZWModCksbiksbn1dfSx0d2VlbmVyOmZ1bmN0aW9uKGUsdCl7bShlKT8odD1lLGU9W1wiKlwiXSk6ZT1lLm1hdGNoKFApO2Zvcih2YXIgbixyPTAsaT1lLmxlbmd0aDtyPGk7cisrKW49ZVtyXSxmdC50d2VlbmVyc1tuXT1mdC50d2VlbmVyc1tuXXx8W10sZnQudHdlZW5lcnNbbl0udW5zaGlmdCh0KX0scHJlZmlsdGVyczpbZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGMsZj1cIndpZHRoXCJpbiB0fHxcImhlaWdodFwiaW4gdCxwPXRoaXMsZD17fSxoPWUuc3R5bGUsZz1lLm5vZGVUeXBlJiZhZShlKSx2PVkuZ2V0KGUsXCJmeHNob3dcIik7Zm9yKHIgaW4gbi5xdWV1ZXx8KG51bGw9PShhPVMuX3F1ZXVlSG9va3MoZSxcImZ4XCIpKS51bnF1ZXVlZCYmKGEudW5xdWV1ZWQ9MCxzPWEuZW1wdHkuZmlyZSxhLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXthLnVucXVldWVkfHxzKCl9KSxhLnVucXVldWVkKysscC5hbHdheXMoZnVuY3Rpb24oKXtwLmFsd2F5cyhmdW5jdGlvbigpe2EudW5xdWV1ZWQtLSxTLnF1ZXVlKGUsXCJmeFwiKS5sZW5ndGh8fGEuZW1wdHkuZmlyZSgpfSl9KSksdClpZihpPXRbcl0sb3QudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF2fHx2b2lkIDA9PT12W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT12JiZ2W3JdfHxTLnN0eWxlKGUscil9aWYoKHU9IVMuaXNFbXB0eU9iamVjdCh0KSl8fCFTLmlzRW1wdHlPYmplY3QoZCkpZm9yKHIgaW4gZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD12JiZ2LmRpc3BsYXkpJiYobD1ZLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz1TLmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDoobGUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPVMuY3NzKGUsXCJkaXNwbGF5XCIpLGxlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKGZ1bmN0aW9uKCl7aC5kaXNwbGF5PWx9KSxudWxsPT1sJiYoYz1oLmRpc3BsYXksbD1cIm5vbmVcIj09PWM/XCJcIjpjKSksaC5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxuLm92ZXJmbG93JiYoaC5vdmVyZmxvdz1cImhpZGRlblwiLHAuYWx3YXlzKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSx1PSExLGQpdXx8KHY/XCJoaWRkZW5cImluIHYmJihnPXYuaGlkZGVuKTp2PVkuYWNjZXNzKGUsXCJmeHNob3dcIix7ZGlzcGxheTpsfSksbyYmKHYuaGlkZGVuPSFnKSxnJiZsZShbZV0sITApLHAuZG9uZShmdW5jdGlvbigpe2ZvcihyIGluIGd8fGxlKFtlXSksWS5yZW1vdmUoZSxcImZ4c2hvd1wiKSxkKVMuc3R5bGUoZSxyLGRbcl0pfSkpLHU9Y3QoZz92W3JdOjAscixwKSxyIGluIHZ8fCh2W3JdPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9XSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P2Z0LnByZWZpbHRlcnMudW5zaGlmdChlKTpmdC5wcmVmaWx0ZXJzLnB1c2goZSl9fSksUy5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Uy5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxtKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFtKHQpJiZ0fTtyZXR1cm4gUy5meC5vZmY/ci5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiBTLmZ4LnNwZWVkcz9yLmR1cmF0aW9uPVMuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249Uy5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXttKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZTLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sUy5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIoYWUpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9Uy5pc0VtcHR5T2JqZWN0KHQpLG89Uy5zcGVlZChlLG4sciksYT1mdW5jdGlvbigpe3ZhciBlPWZ0KHRoaXMsUy5leHRlbmQoe30sdCksbyk7KGl8fFkuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZlLnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihpLGUsbyl7dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChvKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGkmJihvPWUsZT1pLGk9dm9pZCAwKSxlJiZ0aGlzLnF1ZXVlKGl8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9ITAsdD1udWxsIT1pJiZpK1wicXVldWVIb29rc1wiLG49Uy50aW1lcnMscj1ZLmdldCh0aGlzKTtpZih0KXJbdF0mJnJbdF0uc3RvcCYmYShyW3RdKTtlbHNlIGZvcih0IGluIHIpclt0XSYmclt0XS5zdG9wJiZhdC50ZXN0KHQpJiZhKHJbdF0pO2Zvcih0PW4ubGVuZ3RoO3QtLTspblt0XS5lbGVtIT09dGhpc3x8bnVsbCE9aSYmblt0XS5xdWV1ZSE9PWl8fChuW3RdLmFuaW0uc3RvcChvKSxlPSExLG4uc3BsaWNlKHQsMSkpOyFlJiZvfHxTLmRlcXVldWUodGhpcyxpKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuITEhPT1hJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBlLHQ9WS5nZXQodGhpcyksbj10W2ErXCJxdWV1ZVwiXSxyPXRbYStcInF1ZXVlSG9va3NcIl0saT1TLnRpbWVycyxvPW4/bi5sZW5ndGg6MDtmb3IodC5maW5pc2g9ITAsUy5xdWV1ZSh0aGlzLGEsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksZT1pLmxlbmd0aDtlLS07KWlbZV0uZWxlbT09PXRoaXMmJmlbZV0ucXVldWU9PT1hJiYoaVtlXS5hbmltLnN0b3AoITApLGkuc3BsaWNlKGUsMSkpO2ZvcihlPTA7ZTxvO2UrKyluW2VdJiZuW2VdLmZpbmlzaCYmbltlXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgdC5maW5pc2h9KX19KSxTLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGUscil7dmFyIGk9Uy5mbltyXTtTLmZuW3JdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gbnVsbD09ZXx8XCJib29sZWFuXCI9PXR5cGVvZiBlP2kuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShsdChyLCEwKSxlLHQsbil9fSksUy5lYWNoKHtzbGlkZURvd246bHQoXCJzaG93XCIpLHNsaWRlVXA6bHQoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmx0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oZSxyKXtTLmZuW2VdPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5hbmltYXRlKHIsZSx0LG4pfX0pLFMudGltZXJzPVtdLFMuZngudGljaz1mdW5jdGlvbigpe3ZhciBlLHQ9MCxuPVMudGltZXJzO2Zvcih0dD1EYXRlLm5vdygpO3Q8bi5sZW5ndGg7dCsrKShlPW5bdF0pKCl8fG5bdF0hPT1lfHxuLnNwbGljZSh0LS0sMSk7bi5sZW5ndGh8fFMuZnguc3RvcCgpLHR0PXZvaWQgMH0sUy5meC50aW1lcj1mdW5jdGlvbihlKXtTLnRpbWVycy5wdXNoKGUpLFMuZnguc3RhcnQoKX0sUy5meC5pbnRlcnZhbD0xMyxTLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7bnR8fChudD0hMCxzdCgpKX0sUy5meC5zdG9wPWZ1bmN0aW9uKCl7bnQ9bnVsbH0sUy5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sUy5mbi5kZWxheT1mdW5jdGlvbihyLGUpe3JldHVybiByPVMuZngmJlMuZnguc3BlZWRzW3JdfHxyLGU9ZXx8XCJmeFwiLHRoaXMucXVldWUoZSxmdW5jdGlvbihlLHQpe3ZhciBuPUMuc2V0VGltZW91dChlLHIpO3Quc3RvcD1mdW5jdGlvbigpe0MuY2xlYXJUaW1lb3V0KG4pfX0pfSxydD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxpdD1FLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIikuYXBwZW5kQ2hpbGQoRS5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKSxydC50eXBlPVwiY2hlY2tib3hcIix5LmNoZWNrT249XCJcIiE9PXJ0LnZhbHVlLHkub3B0U2VsZWN0ZWQ9aXQuc2VsZWN0ZWQsKHJ0PUUuY3JlYXRlRWxlbWVudChcImlucHV0XCIpKS52YWx1ZT1cInRcIixydC50eXBlPVwicmFkaW9cIix5LnJhZGlvVmFsdWU9XCJ0XCI9PT1ydC52YWx1ZTt2YXIgcHQsZHQ9Uy5leHByLmF0dHJIYW5kbGU7Uy5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMuYXR0cixlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5yZW1vdmVBdHRyKHRoaXMsZSl9KX19KSxTLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgZS5nZXRBdHRyaWJ1dGU/Uy5wcm9wKGUsdCxuKTooMT09PW8mJlMuaXNYTUxEb2MoZSl8fChpPVMuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChTLmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP3B0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCBTLnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPVMuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZigheS5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZBKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goUCk7aWYoaSYmMT09PWUubm9kZVR5cGUpd2hpbGUobj1pW3IrK10pZS5yZW1vdmVBdHRyaWJ1dGUobil9fSkscHQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P1MucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LFMuZWFjaChTLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oZSx0KXt2YXIgYT1kdFt0XXx8Uy5maW5kLmF0dHI7ZHRbdF09ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz10LnRvTG93ZXJDYXNlKCk7cmV0dXJuIG58fChpPWR0W29dLGR0W29dPXIscj1udWxsIT1hKGUsdCxuKT9vOm51bGwsZHRbb109aSkscn19KTt2YXIgaHQ9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxndD0vXig/OmF8YXJlYSkkL2k7ZnVuY3Rpb24gdnQoZSl7cmV0dXJuKGUubWF0Y2goUCl8fFtdKS5qb2luKFwiIFwiKX1mdW5jdGlvbiB5dChlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUmJmUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9ZnVuY3Rpb24gbXQoZSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoZSk/ZTpcInN0cmluZ1wiPT10eXBlb2YgZSYmZS5tYXRjaChQKXx8W119Uy5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gJCh0aGlzLFMucHJvcCxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbUy5wcm9wRml4W2VdfHxlXX0pfX0pLFMuZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89ZS5ub2RlVHlwZTtpZigzIT09byYmOCE9PW8mJjIhPT1vKXJldHVybiAxPT09byYmUy5pc1hNTERvYyhlKXx8KHQ9Uy5wcm9wRml4W3RdfHx0LGk9Uy5wcm9wSG9va3NbdF0pLHZvaWQgMCE9PW4/aSYmXCJzZXRcImluIGkmJnZvaWQgMCE9PShyPWkuc2V0KGUsbix0KSk/cjplW3RdPW46aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOmVbdF19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidGFiaW5kZXhcIik7cmV0dXJuIHQ/cGFyc2VJbnQodCwxMCk6aHQudGVzdChlLm5vZGVOYW1lKXx8Z3QudGVzdChlLm5vZGVOYW1lKSYmZS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSx5Lm9wdFNlbGVjdGVkfHwoUy5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH0sc2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTt0JiYodC5zZWxlY3RlZEluZGV4LHQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpfX0pLFMuZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtTLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSksUy5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKHQpe3ZhciBlLG4scixpLG8sYSxzLHU9MDtpZihtKHQpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS5hZGRDbGFzcyh0LmNhbGwodGhpcyxlLHl0KHRoaXMpKSl9KTtpZigoZT1tdCh0KSkubGVuZ3RoKXdoaWxlKG49dGhpc1t1KytdKWlmKGk9eXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2E9MDt3aGlsZShvPWVbYSsrXSlyLmluZGV4T2YoXCIgXCIrbytcIiBcIik8MCYmKHIrPW8rXCIgXCIpO2khPT0ocz12dChyKSkmJm4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixzKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24odCl7dmFyIGUsbixyLGksbyxhLHMsdT0wO2lmKG0odCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUseXQodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKChlPW10KHQpKS5sZW5ndGgpd2hpbGUobj10aGlzW3UrK10paWYoaT15dChuKSxyPTE9PT1uLm5vZGVUeXBlJiZcIiBcIit2dChpKStcIiBcIil7YT0wO3doaWxlKG89ZVthKytdKXdoaWxlKC0xPHIuaW5kZXhPZihcIiBcIitvK1wiIFwiKSlyPXIucmVwbGFjZShcIiBcIitvK1wiIFwiLFwiIFwiKTtpIT09KHM9dnQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGksdCl7dmFyIG89dHlwZW9mIGksYT1cInN0cmluZ1wiPT09b3x8QXJyYXkuaXNBcnJheShpKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJmE/dD90aGlzLmFkZENsYXNzKGkpOnRoaXMucmVtb3ZlQ2xhc3MoaSk6bShpKT90aGlzLmVhY2goZnVuY3Rpb24oZSl7Uyh0aGlzKS50b2dnbGVDbGFzcyhpLmNhbGwodGhpcyxlLHl0KHRoaXMpLHQpLHQpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7aWYoYSl7dD0wLG49Uyh0aGlzKSxyPW10KGkpO3doaWxlKGU9clt0KytdKW4uaGFzQ2xhc3MoZSk/bi5yZW1vdmVDbGFzcyhlKTpuLmFkZENsYXNzKGUpfWVsc2Ugdm9pZCAwIT09aSYmXCJib29sZWFuXCIhPT1vfHwoKGU9eXQodGhpcykpJiZZLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLGUpLHRoaXMuc2V0QXR0cmlidXRlJiZ0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZXx8ITE9PT1pP1wiXCI6WS5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihlKXt2YXIgdCxuLHI9MDt0PVwiIFwiK2UrXCIgXCI7d2hpbGUobj10aGlzW3IrK10paWYoMT09PW4ubm9kZVR5cGUmJi0xPChcIiBcIit2dCh5dChuKSkrXCIgXCIpLmluZGV4T2YodCkpcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHh0PS9cXHIvZztTLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKG4pe3ZhciByLGUsaSx0PXRoaXNbMF07cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9bShuKSx0aGlzLmVhY2goZnVuY3Rpb24oZSl7dmFyIHQ7MT09PXRoaXMubm9kZVR5cGUmJihudWxsPT0odD1pP24uY2FsbCh0aGlzLGUsUyh0aGlzKS52YWwoKSk6bik/dD1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiB0P3QrPVwiXCI6QXJyYXkuaXNBcnJheSh0KSYmKHQ9Uy5tYXAodCxmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSwocj1TLnZhbEhvb2tzW3RoaXMudHlwZV18fFMudmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwic2V0XCJpbiByJiZ2b2lkIDAhPT1yLnNldCh0aGlzLHQsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9dCkpfSkpOnQ/KHI9Uy52YWxIb29rc1t0LnR5cGVdfHxTLnZhbEhvb2tzW3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcImdldFwiaW4gciYmdm9pZCAwIT09KGU9ci5nZXQodCxcInZhbHVlXCIpKT9lOlwic3RyaW5nXCI9PXR5cGVvZihlPXQudmFsdWUpP2UucmVwbGFjZSh4dCxcIlwiKTpudWxsPT1lP1wiXCI6ZTp2b2lkIDB9fSksUy5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihlKXt2YXIgdD1TLmZpbmQuYXR0cihlLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPXQ/dDp2dChTLnRleHQoZSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGk9ZS5vcHRpb25zLG89ZS5zZWxlY3RlZEluZGV4LGE9XCJzZWxlY3Qtb25lXCI9PT1lLnR5cGUscz1hP251bGw6W10sdT1hP28rMTppLmxlbmd0aDtmb3Iocj1vPDA/dTphP286MDtyPHU7cisrKWlmKCgobj1pW3JdKS5zZWxlY3RlZHx8cj09PW8pJiYhbi5kaXNhYmxlZCYmKCFuLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFBKG4ucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYodD1TKG4pLnZhbCgpLGEpcmV0dXJuIHQ7cy5wdXNoKHQpfXJldHVybiBzfSxzZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGk9ZS5vcHRpb25zLG89Uy5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDt3aGlsZShhLS0pKChyPWlbYV0pLnNlbGVjdGVkPS0xPFMuaW5BcnJheShTLnZhbEhvb2tzLm9wdGlvbi5nZXQociksbykpJiYobj0hMCk7cmV0dXJuIG58fChlLnNlbGVjdGVkSW5kZXg9LTEpLG99fX19KSxTLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7Uy52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGUsdCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gZS5jaGVja2VkPS0xPFMuaW5BcnJheShTKGUpLnZhbCgpLHQpfX0seS5jaGVja09ufHwoUy52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PT1lLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjplLnZhbHVlfSl9KSx5LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIGJ0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyx3dD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtTLmV4dGVuZChTLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8RV0sZD12LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD12LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxFLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIWJ0LnRlc3QoZCtTLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTpTLm1ha2VBcnJheSh0LFtlXSksYz1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxidC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxFKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1pPTA7d2hpbGUoKG89cFtpKytdKSYmIWUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSlmPW8sZS50eXBlPTE8aT9zOmMuYmluZFR5cGV8fGQsKGw9KFkuZ2V0KG8sXCJldmVudHNcIil8fE9iamVjdC5jcmVhdGUobnVsbCkpW2UudHlwZV0mJlkuZ2V0KG8sXCJoYW5kbGVcIikpJiZsLmFwcGx5KG8sdCksKGw9dSYmb1t1XSkmJmwuYXBwbHkmJlYobykmJihlLnJlc3VsdD1sLmFwcGx5KG8sdCksITE9PT1lLnJlc3VsdCYmZS5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gZS50eXBlPWQscnx8ZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8Yy5fZGVmYXVsdCYmITEhPT1jLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksdCl8fCFWKG4pfHx1JiZtKG5bZF0pJiYheChuKSYmKChhPW5bdV0pJiYoblt1XT1udWxsKSxTLmV2ZW50LnRyaWdnZXJlZD1kLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5hZGRFdmVudExpc3RlbmVyKGQsd3QpLG5bZF0oKSxlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkmJmYucmVtb3ZlRXZlbnRMaXN0ZW5lcihkLHd0KSxTLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsYSYmKG5bdV09YSkpLGUucmVzdWx0fX0sc2ltdWxhdGU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPVMuZXh0ZW5kKG5ldyBTLkV2ZW50LG4se3R5cGU6ZSxpc1NpbXVsYXRlZDohMH0pO1MuZXZlbnQudHJpZ2dlcihyLG51bGwsdCl9fSksUy5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uy5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXNbMF07aWYobilyZXR1cm4gUy5ldmVudC50cmlnZ2VyKGUsdCxuLCEwKX19KSx5LmZvY3VzaW58fFMuZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKG4scil7dmFyIGk9ZnVuY3Rpb24oZSl7Uy5ldmVudC5zaW11bGF0ZShyLGUudGFyZ2V0LFMuZXZlbnQuZml4KGUpKX07Uy5ldmVudC5zcGVjaWFsW3JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUscik7dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4saSwhMCksWS5hY2Nlc3MoZSxyLCh0fHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMuZG9jdW1lbnR8fHRoaXMsdD1ZLmFjY2VzcyhlLHIpLTE7dD9ZLmFjY2VzcyhlLHIsdCk6KGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihuLGksITApLFkucmVtb3ZlKGUscikpfX19KTt2YXIgVHQ9Qy5sb2NhdGlvbixDdD17Z3VpZDpEYXRlLm5vdygpfSxFdD0vXFw/LztTLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0O2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDt0cnl7dD0obmV3IEMuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfWNhdGNoKGUpe3Q9dm9pZCAwfXJldHVybiB0JiYhdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8Uy5lcnJvcihcIkludmFsaWQgWE1MOiBcIitlKSx0fTt2YXIgU3Q9L1xcW1xcXSQvLGt0PS9cXHI/XFxuL2csQXQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLE50PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBEdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKVMuZWFjaChlLGZ1bmN0aW9uKGUsdCl7cnx8U3QudGVzdChuKT9pKG4sdCk6RHQobitcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPXQ/ZTpcIlwiKStcIl1cIix0LHIsaSl9KTtlbHNlIGlmKHJ8fFwib2JqZWN0XCIhPT13KGUpKWkobixlKTtlbHNlIGZvcih0IGluIGUpRHQobitcIltcIit0K1wiXVwiLGVbdF0scixpKX1TLnBhcmFtPWZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPWZ1bmN0aW9uKGUsdCl7dmFyIG49bSh0KT90KCk6dDtyW3IubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoZSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KG51bGw9PW4/XCJcIjpuKX07aWYobnVsbD09ZSlyZXR1cm5cIlwiO2lmKEFycmF5LmlzQXJyYXkoZSl8fGUuanF1ZXJ5JiYhUy5pc1BsYWluT2JqZWN0KGUpKVMuZWFjaChlLGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihuIGluIGUpRHQobixlW25dLHQsaSk7cmV0dXJuIHIuam9pbihcIiZcIil9LFMuZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPVMucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGU/Uy5tYWtlQXJyYXkoZSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBlPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhUyh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmTnQudGVzdCh0aGlzLm5vZGVOYW1lKSYmIUF0LnRlc3QoZSkmJih0aGlzLmNoZWNrZWR8fCFwZS50ZXN0KGUpKX0pLm1hcChmdW5jdGlvbihlLHQpe3ZhciBuPVModGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP1MubWFwKG4sZnVuY3Rpb24oZSl7cmV0dXJue25hbWU6dC5uYW1lLHZhbHVlOmUucmVwbGFjZShrdCxcIlxcclxcblwiKX19KTp7bmFtZTp0Lm5hbWUsdmFsdWU6bi5yZXBsYWNlKGt0LFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pO3ZhciBqdD0vJTIwL2cscXQ9LyMuKiQvLEx0PS8oWz8mXSlfPVteJl0qLyxIdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLE90PS9eKD86R0VUfEhFQUQpJC8sUHQ9L15cXC9cXC8vLFJ0PXt9LE10PXt9LEl0PVwiKi9cIi5jb25jYXQoXCIqXCIpLFd0PUUuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gRnQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXTtpZihtKHQpKXdoaWxlKG49aVtyKytdKVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uIEJ0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PU10O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsUy5lYWNoKHRbZV18fFtdLGZ1bmN0aW9uKGUsdCl7dmFyIG49dChpLG8sYSk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIG58fHV8fHNbbl0/dT8hKHI9bik6dm9pZCAwOihpLmRhdGFUeXBlcy51bnNoaWZ0KG4pLGwobiksITEpfSkscn1yZXR1cm4gbChpLmRhdGFUeXBlc1swXSl8fCFzW1wiKlwiXSYmbChcIipcIil9ZnVuY3Rpb24gJHQoZSx0KXt2YXIgbixyLGk9Uy5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihuIGluIHQpdm9pZCAwIT09dFtuXSYmKChpW25dP2U6cnx8KHI9e30pKVtuXT10W25dKTtyZXR1cm4gciYmUy5leHRlbmQoITAsZSxyKSxlfVd0LmhyZWY9VHQuaHJlZixTLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6VHQuaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDovXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLy50ZXN0KFR0LnByb3RvY29sKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpJdCx0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6SlNPTi5wYXJzZSxcInRleHQgeG1sXCI6Uy5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/JHQoJHQoZSxTLmFqYXhTZXR0aW5ncyksdCk6JHQoUy5hamF4U2V0dGluZ3MsZSl9LGFqYXhQcmVmaWx0ZXI6RnQoUnQpLGFqYXhUcmFuc3BvcnQ6RnQoTXQpLGFqYXg6ZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZSYmKHQ9ZSxlPXZvaWQgMCksdD10fHx7fTt2YXIgYyxmLHAsbixkLHIsaCxnLGksbyx2PVMuYWpheFNldHVwKHt9LHQpLHk9di5jb250ZXh0fHx2LG09di5jb250ZXh0JiYoeS5ub2RlVHlwZXx8eS5qcXVlcnkpP1MoeSk6Uy5ldmVudCx4PVMuRGVmZXJyZWQoKSxiPVMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksdz12LnN0YXR1c0NvZGV8fHt9LGE9e30scz17fSx1PVwiY2FuY2VsZWRcIixUPXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oZSl7dmFyIHQ7aWYoaCl7aWYoIW4pe249e307d2hpbGUodD1IdC5leGVjKHApKW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pfXQ9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHYubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHYudXJsPSgoZXx8di51cmx8fFR0LmhyZWYpK1wiXCIpLnJlcGxhY2UoUHQsVHQucHJvdG9jb2wrXCIvL1wiKSx2LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8di5tZXRob2R8fHYudHlwZSx2LmRhdGFUeXBlcz0odi5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtcIlwiXSxudWxsPT12LmNyb3NzRG9tYWluKXtyPUUuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj12LnVybCxyLmhyZWY9ci5ocmVmLHYuY3Jvc3NEb21haW49V3QucHJvdG9jb2wrXCIvL1wiK1d0Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt2LmNyb3NzRG9tYWluPSEwfX1pZih2LmRhdGEmJnYucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB2LmRhdGEmJih2LmRhdGE9Uy5wYXJhbSh2LmRhdGEsdi50cmFkaXRpb25hbCkpLEJ0KFJ0LHYsdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9Uy5ldmVudCYmdi5nbG9iYWwpJiYwPT1TLmFjdGl2ZSsrJiZTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksdi50eXBlPXYudHlwZS50b1VwcGVyQ2FzZSgpLHYuaGFzQ29udGVudD0hT3QudGVzdCh2LnR5cGUpLGY9di51cmwucmVwbGFjZShxdCxcIlwiKSx2Lmhhc0NvbnRlbnQ/di5kYXRhJiZ2LnByb2Nlc3NEYXRhJiYwPT09KHYuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih2LmRhdGE9di5kYXRhLnJlcGxhY2UoanQsXCIrXCIpKToobz12LnVybC5zbGljZShmLmxlbmd0aCksdi5kYXRhJiYodi5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHYuZGF0YSkmJihmKz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrdi5kYXRhLGRlbGV0ZSB2LmRhdGEpLCExPT09di5jYWNoZSYmKGY9Zi5yZXBsYWNlKEx0LFwiJDFcIiksbz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0N0Lmd1aWQrKytvKSx2LnVybD1mK28pLHYuaWZNb2RpZmllZCYmKFMubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLFMubGFzdE1vZGlmaWVkW2ZdKSxTLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixTLmV0YWdbZl0pKSwodi5kYXRhJiZ2Lmhhc0NvbnRlbnQmJiExIT09di5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHYuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHYuZGF0YVR5cGVzWzBdJiZ2LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dP3YuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09di5kYXRhVHlwZXNbMF0/XCIsIFwiK0l0K1wiOyBxPTAuMDFcIjpcIlwiKTp2LmFjY2VwdHNbXCIqXCJdKSx2LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGksdi5oZWFkZXJzW2ldKTtpZih2LmJlZm9yZVNlbmQmJighMT09PXYuYmVmb3JlU2VuZC5jYWxsKHksVCx2KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh2LmNvbXBsZXRlKSxULmRvbmUodi5zdWNjZXNzKSxULmZhaWwodi5lcnJvciksYz1CdChNdCx2LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1Qsdl0pLGgpcmV0dXJuIFQ7di5hc3luYyYmMDx2LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dChmdW5jdGlvbigpe1QuYWJvcnQoXCJ0aW1lb3V0XCIpfSx2LnRpbWVvdXQpKTt0cnl7aD0hMSxjLnNlbmQoYSxsKX1jYXRjaChlKXtpZihoKXRocm93IGU7bCgtMSxlKX19ZWxzZSBsKC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIGwoZSx0LG4scil7dmFyIGksbyxhLHMsdSxsPXQ7aHx8KGg9ITAsZCYmQy5jbGVhclRpbWVvdXQoZCksYz12b2lkIDAscD1yfHxcIlwiLFQucmVhZHlTdGF0ZT0wPGU/NDowLGk9MjAwPD1lJiZlPDMwMHx8MzA0PT09ZSxuJiYocz1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT11WzBdKXUuc2hpZnQoKSx2b2lkIDA9PT1yJiYocj1lLm1pbWVUeXBlfHx0LmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihyKWZvcihpIGluIHMpaWYoc1tpXSYmc1tpXS50ZXN0KHIpKXt1LnVuc2hpZnQoaSk7YnJlYWt9aWYodVswXWluIG4pbz11WzBdO2Vsc2V7Zm9yKGkgaW4gbil7aWYoIXVbMF18fGUuY29udmVydGVyc1tpK1wiIFwiK3VbMF1dKXtvPWk7YnJlYWt9YXx8KGE9aSl9bz1vfHxhfWlmKG8pcmV0dXJuIG8hPT11WzBdJiZ1LnVuc2hpZnQobyksbltvXX0odixULG4pKSwhaSYmLTE8Uy5pbkFycmF5KFwic2NyaXB0XCIsdi5kYXRhVHlwZXMpJiYodi5jb252ZXJ0ZXJzW1widGV4dCBzY3JpcHRcIl09ZnVuY3Rpb24oKXt9KSxzPWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD17fSxjPWUuZGF0YVR5cGVzLnNsaWNlKCk7aWYoY1sxXSlmb3IoYSBpbiBlLmNvbnZlcnRlcnMpbFthLnRvTG93ZXJDYXNlKCldPWUuY29udmVydGVyc1thXTtvPWMuc2hpZnQoKTt3aGlsZShvKWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCF1JiZyJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1PW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89dTtlbHNlIGlmKFwiKlwiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrXCIgXCIrb118fGxbXCIqIFwiK29dKSlmb3IoaSBpbiBsKWlmKChzPWkuc3BsaXQoXCIgXCIpKVsxXT09PW8mJihhPWxbdStcIiBcIitzWzBdXXx8bFtcIiogXCIrc1swXV0pKXshMD09PWE/YT1sW2ldOiEwIT09bFtpXSYmKG89c1swXSxjLnVuc2hpZnQoc1sxXSkpO2JyZWFrfWlmKCEwIT09YSlpZihhJiZlW1widGhyb3dzXCJdKXQ9YSh0KTtlbHNlIHRyeXt0PWEodCl9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjphP2U6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrdStcIiB0byBcIitvfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6dH19KHYscyxULGkpLGk/KHYuaWZNb2RpZmllZCYmKCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpKSYmKFMubGFzdE1vZGlmaWVkW2ZdPXUpLCh1PVQuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpKSYmKFMuZXRhZ1tmXT11KSksMjA0PT09ZXx8XCJIRUFEXCI9PT12LnR5cGU/bD1cIm5vY29udGVudFwiOjMwND09PWU/bD1cIm5vdG1vZGlmaWVkXCI6KGw9cy5zdGF0ZSxvPXMuZGF0YSxpPSEoYT1zLmVycm9yKSkpOihhPWwsIWUmJmx8fChsPVwiZXJyb3JcIixlPDAmJihlPTApKSksVC5zdGF0dXM9ZSxULnN0YXR1c1RleHQ9KHR8fGwpK1wiXCIsaT94LnJlc29sdmVXaXRoKHksW28sbCxUXSk6eC5yZWplY3RXaXRoKHksW1QsbCxhXSksVC5zdGF0dXNDb2RlKHcpLHc9dm9pZCAwLGcmJm0udHJpZ2dlcihpP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFtULHYsaT9vOmFdKSxiLmZpcmVXaXRoKHksW1QsbF0pLGcmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbVCx2XSksLS1TLmFjdGl2ZXx8Uy5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gVH0sZ2V0SlNPTjpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuZ2V0KGUsdCxuLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFMuZ2V0KGUsdm9pZCAwLHQsXCJzY3JpcHRcIil9fSksUy5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihlLGkpe1NbaV09ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIG0odCkmJihyPXJ8fG4sbj10LHQ9dm9pZCAwKSxTLmFqYXgoUy5leHRlbmQoe3VybDplLHR5cGU6aSxkYXRhVHlwZTpyLGRhdGE6dCxzdWNjZXNzOm59LFMuaXNQbGFpbk9iamVjdChlKSYmZSkpfX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXt2YXIgdDtmb3IodCBpbiBlLmhlYWRlcnMpXCJjb250ZW50LXR5cGVcIj09PXQudG9Mb3dlckNhc2UoKSYmKGUuY29udGVudFR5cGU9ZS5oZWFkZXJzW3RdfHxcIlwiKX0pLFMuX2V2YWxVcmw9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmFqYXgoe3VybDplLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oKXt9fSxkYXRhRmlsdGVyOmZ1bmN0aW9uKGUpe1MuZ2xvYmFsRXZhbChlLHQsbil9fSl9LFMuZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiB0aGlzWzBdJiYobShlKSYmKGU9ZS5jYWxsKHRoaXNbMF0pKSx0PVMoZSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJnQuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLHQubWFwKGZ1bmN0aW9uKCl7dmFyIGU9dGhpczt3aGlsZShlLmZpcnN0RWxlbWVudENoaWxkKWU9ZS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gZX0pLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKG4pe3JldHVybiBtKG4pP3RoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBJbm5lcihuLmNhbGwodGhpcyxlKSl9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1TKHRoaXMpLHQ9ZS5jb250ZW50cygpO3QubGVuZ3RoP3Qud3JhcEFsbChuKTplLmFwcGVuZChuKX0pfSx3cmFwOmZ1bmN0aW9uKHQpe3ZhciBuPW0odCk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihlKXtTKHRoaXMpLndyYXBBbGwobj90LmNhbGwodGhpcyxlKTp0KX0pfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbigpe1ModGhpcykucmVwbGFjZVdpdGgodGhpcy5jaGlsZE5vZGVzKX0pLHRoaXN9fSksUy5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGUpe3JldHVybiFTLmV4cHIucHNldWRvcy52aXNpYmxlKGUpfSxTLmV4cHIucHNldWRvcy52aXNpYmxlPWZ1bmN0aW9uKGUpe3JldHVybiEhKGUub2Zmc2V0V2lkdGh8fGUub2Zmc2V0SGVpZ2h0fHxlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKX0sUy5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgQy5YTUxIdHRwUmVxdWVzdH1jYXRjaChlKXt9fTt2YXIgX3Q9ezA6MjAwLDEyMjM6MjA0fSx6dD1TLmFqYXhTZXR0aW5ncy54aHIoKTt5LmNvcnM9ISF6dCYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIHp0LHkuYWpheD16dD0hIXp0LFMuYWpheFRyYW5zcG9ydChmdW5jdGlvbihpKXt2YXIgbyxhO2lmKHkuY29yc3x8enQmJiFpLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnhocigpO2lmKHIub3BlbihpLnR5cGUsaS51cmwsaS5hc3luYyxpLnVzZXJuYW1lLGkucGFzc3dvcmQpLGkueGhyRmllbGRzKWZvcihuIGluIGkueGhyRmllbGRzKXJbbl09aS54aHJGaWVsZHNbbl07Zm9yKG4gaW4gaS5taW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUoaS5taW1lVHlwZSksaS5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpLGUpci5zZXRSZXF1ZXN0SGVhZGVyKG4sZVtuXSk7bz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtvJiYobz1hPXIub25sb2FkPXIub25lcnJvcj1yLm9uYWJvcnQ9ci5vbnRpbWVvdXQ9ci5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP3IuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiByLnN0YXR1cz90KDAsXCJlcnJvclwiKTp0KHIuc3RhdHVzLHIuc3RhdHVzVGV4dCk6dChfdFtyLnN0YXR1c118fHIuc3RhdHVzLHIuc3RhdHVzVGV4dCxcInRleHRcIiE9PShyLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2Ygci5yZXNwb25zZVRleHQ/e2JpbmFyeTpyLnJlc3BvbnNlfTp7dGV4dDpyLnJlc3BvbnNlVGV4dH0sci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sci5vbmxvYWQ9bygpLGE9ci5vbmVycm9yPXIub250aW1lb3V0PW8oXCJlcnJvclwiKSx2b2lkIDAhPT1yLm9uYWJvcnQ/ci5vbmFib3J0PWE6ci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09ci5yZWFkeVN0YXRlJiZDLnNldFRpbWVvdXQoZnVuY3Rpb24oKXtvJiZhKCl9KX0sbz1vKFwiYWJvcnRcIik7dHJ5e3Iuc2VuZChpLmhhc0NvbnRlbnQmJmkuZGF0YXx8bnVsbCl9Y2F0Y2goZSl7aWYobyl0aHJvdyBlfX0sYWJvcnQ6ZnVuY3Rpb24oKXtvJiZvKCl9fX0pLFMuYWpheFByZWZpbHRlcihmdW5jdGlvbihlKXtlLmNyb3NzRG9tYWluJiYoZS5jb250ZW50cy5zY3JpcHQ9ITEpfSksUy5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6L1xcYig/OmphdmF8ZWNtYSlzY3JpcHRcXGIvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZ2xvYmFsRXZhbChlKSxlfX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiKX0pLFMuYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKG4pe3ZhciByLGk7aWYobi5jcm9zc0RvbWFpbnx8bi5zY3JpcHRBdHRycylyZXR1cm57c2VuZDpmdW5jdGlvbihlLHQpe3I9UyhcIjxzY3JpcHQ+XCIpLmF0dHIobi5zY3JpcHRBdHRyc3x8e30pLnByb3Aoe2NoYXJzZXQ6bi5zY3JpcHRDaGFyc2V0LHNyYzpuLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGk9ZnVuY3Rpb24oZSl7ci5yZW1vdmUoKSxpPW51bGwsZSYmdChcImVycm9yXCI9PT1lLnR5cGU/NDA0OjIwMCxlLnR5cGUpfSksRS5oZWFkLmFwcGVuZENoaWxkKHJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2kmJmkoKX19fSk7dmFyIFV0LFh0PVtdLFZ0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87Uy5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9WHQucG9wKCl8fFMuZXhwYW5kbytcIl9cIitDdC5ndWlkKys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPSExIT09ZS5qc29ucCYmKFZ0LnRlc3QoZS51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmMD09PShlLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZWdC50ZXN0KGUuZGF0YSkmJlwiZGF0YVwiKTtpZihhfHxcImpzb25wXCI9PT1lLmRhdGFUeXBlc1swXSlyZXR1cm4gcj1lLmpzb25wQ2FsbGJhY2s9bShlLmpzb25wQ2FsbGJhY2spP2UuanNvbnBDYWxsYmFjaygpOmUuanNvbnBDYWxsYmFjayxhP2VbYV09ZVthXS5yZXBsYWNlKFZ0LFwiJDFcIityKTohMSE9PWUuanNvbnAmJihlLnVybCs9KEV0LnRlc3QoZS51cmwpP1wiJlwiOlwiP1wiKStlLmpzb25wK1wiPVwiK3IpLGUuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIG98fFMuZXJyb3IocitcIiB3YXMgbm90IGNhbGxlZFwiKSxvWzBdfSxlLmRhdGFUeXBlc1swXT1cImpzb25cIixpPUNbcl0sQ1tyXT1mdW5jdGlvbigpe289YXJndW1lbnRzfSxuLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWk/UyhDKS5yZW1vdmVQcm9wKHIpOkNbcl09aSxlW3JdJiYoZS5qc29ucENhbGxiYWNrPXQuanNvbnBDYWxsYmFjayxYdC5wdXNoKHIpKSxvJiZtKGkpJiZpKG9bMF0pLG89aT12b2lkIDB9KSxcInNjcmlwdFwifSkseS5jcmVhdGVIVE1MRG9jdW1lbnQ9KChVdD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKS5ib2R5KS5pbm5lckhUTUw9XCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiLDI9PT1VdC5jaGlsZE5vZGVzLmxlbmd0aCksUy5wYXJzZUhUTUw9ZnVuY3Rpb24oZSx0LG4pe3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBlP1tdOihcImJvb2xlYW5cIj09dHlwZW9mIHQmJihuPXQsdD0hMSksdHx8KHkuY3JlYXRlSFRNTERvY3VtZW50Pygocj0odD1FLmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSkuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLmhyZWY9RS5sb2NhdGlvbi5ocmVmLHQuaGVhZC5hcHBlbmRDaGlsZChyKSk6dD1FKSxvPSFuJiZbXSwoaT1OLmV4ZWMoZSkpP1t0LmNyZWF0ZUVsZW1lbnQoaVsxXSldOihpPXhlKFtlXSx0LG8pLG8mJm8ubGVuZ3RoJiZTKG8pLnJlbW92ZSgpLFMubWVyZ2UoW10saS5jaGlsZE5vZGVzKSkpO3ZhciByLGksb30sUy5mbi5sb2FkPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT10aGlzLHM9ZS5pbmRleE9mKFwiIFwiKTtyZXR1cm4tMTxzJiYocj12dChlLnNsaWNlKHMpKSxlPWUuc2xpY2UoMCxzKSksbSh0KT8obj10LHQ9dm9pZCAwKTp0JiZcIm9iamVjdFwiPT10eXBlb2YgdCYmKGk9XCJQT1NUXCIpLDA8YS5sZW5ndGgmJlMuYWpheCh7dXJsOmUsdHlwZTppfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6dH0pLmRvbmUoZnVuY3Rpb24oZSl7bz1hcmd1bWVudHMsYS5odG1sKHI/UyhcIjxkaXY+XCIpLmFwcGVuZChTLnBhcnNlSFRNTChlKSkuZmluZChyKTplKX0pLmFsd2F5cyhuJiZmdW5jdGlvbihlLHQpe2EuZWFjaChmdW5jdGlvbigpe24uYXBwbHkodGhpcyxvfHxbZS5yZXNwb25zZVRleHQsdCxlXSl9KX0pLHRoaXN9LFMuZXhwci5wc2V1ZG9zLmFuaW1hdGVkPWZ1bmN0aW9uKHQpe3JldHVybiBTLmdyZXAoUy50aW1lcnMsZnVuY3Rpb24oZSl7cmV0dXJuIHQ9PT1lLmVsZW19KS5sZW5ndGh9LFMub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsPVMuY3NzKGUsXCJwb3NpdGlvblwiKSxjPVMoZSksZj17fTtcInN0YXRpY1wiPT09bCYmKGUuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxzPWMub2Zmc2V0KCksbz1TLmNzcyhlLFwidG9wXCIpLHU9Uy5jc3MoZSxcImxlZnRcIiksKFwiYWJzb2x1dGVcIj09PWx8fFwiZml4ZWRcIj09PWwpJiYtMTwobyt1KS5pbmRleE9mKFwiYXV0b1wiKT8oYT0ocj1jLnBvc2l0aW9uKCkpLnRvcCxpPXIubGVmdCk6KGE9cGFyc2VGbG9hdChvKXx8MCxpPXBhcnNlRmxvYXQodSl8fDApLG0odCkmJih0PXQuY2FsbChlLG4sUy5leHRlbmQoe30scykpKSxudWxsIT10LnRvcCYmKGYudG9wPXQudG9wLXMudG9wK2EpLG51bGwhPXQubGVmdCYmKGYubGVmdD10LmxlZnQtcy5sZWZ0K2kpLFwidXNpbmdcImluIHQ/dC51c2luZy5jYWxsKGUsZik6KFwibnVtYmVyXCI9PXR5cGVvZiBmLnRvcCYmKGYudG9wKz1cInB4XCIpLFwibnVtYmVyXCI9PXR5cGVvZiBmLmxlZnQmJihmLmxlZnQrPVwicHhcIiksYy5jc3MoZikpfX0sUy5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbih0KXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT10P3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGUpe1Mub2Zmc2V0LnNldE9mZnNldCh0aGlzLHQsZSl9KTt2YXIgZSxuLHI9dGhpc1swXTtyZXR1cm4gcj9yLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhlPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDplLnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6ZS5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfTp2b2lkIDB9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PVMuY3NzKHIsXCJwb3NpdGlvblwiKSl0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXt0PXRoaXMub2Zmc2V0KCksbj1yLm93bmVyRG9jdW1lbnQsZT1yLm9mZnNldFBhcmVudHx8bi5kb2N1bWVudEVsZW1lbnQ7d2hpbGUoZSYmKGU9PT1uLmJvZHl8fGU9PT1uLmRvY3VtZW50RWxlbWVudCkmJlwic3RhdGljXCI9PT1TLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLnBhcmVudE5vZGU7ZSYmZSE9PXImJjE9PT1lLm5vZGVUeXBlJiYoKGk9UyhlKS5vZmZzZXQoKSkudG9wKz1TLmNzcyhlLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksaS5sZWZ0Kz1TLmNzcyhlLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKX1yZXR1cm57dG9wOnQudG9wLWkudG9wLVMuY3NzKHIsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDp0LmxlZnQtaS5sZWZ0LVMuY3NzKHIsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBlPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGUmJlwic3RhdGljXCI9PT1TLmNzcyhlLFwicG9zaXRpb25cIikpZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gZXx8cmV9KX19KSxTLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKHQsaSl7dmFyIG89XCJwYWdlWU9mZnNldFwiPT09aTtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO2lmKHgoZSk/cj1lOjk9PT1lLm5vZGVUeXBlJiYocj1lLmRlZmF1bHRWaWV3KSx2b2lkIDA9PT1uKXJldHVybiByP3JbaV06ZVt0XTtyP3Iuc2Nyb2xsVG8obz9yLnBhZ2VYT2Zmc2V0Om4sbz9uOnIucGFnZVlPZmZzZXQpOmVbdF09bn0sdCxlLGFyZ3VtZW50cy5sZW5ndGgpfX0pLFMuZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oZSxuKXtTLmNzc0hvb2tzW25dPSRlKHkucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuIHQ9QmUoZSxuKSxNZS50ZXN0KHQpP1MoZSkucG9zaXRpb24oKVtuXStcInB4XCI6dH0pfSksUy5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEscyl7Uy5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6cyxcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihyLG8pe1MuZm5bb109ZnVuY3Rpb24oZSx0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoJiYocnx8XCJib29sZWFuXCIhPXR5cGVvZiBlKSxpPXJ8fCghMD09PWV8fCEwPT09dD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiAkKHRoaXMsZnVuY3Rpb24oZSx0LG4pe3ZhciByO3JldHVybiB4KGUpPzA9PT1vLmluZGV4T2YoXCJvdXRlclwiKT9lW1wiaW5uZXJcIithXTplLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1lLm5vZGVUeXBlPyhyPWUuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGUuYm9keVtcInNjcm9sbFwiK2FdLHJbXCJzY3JvbGxcIithXSxlLmJvZHlbXCJvZmZzZXRcIithXSxyW1wib2Zmc2V0XCIrYV0scltcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09bj9TLmNzcyhlLHQsaSk6Uy5zdHlsZShlLHQsbixpKX0scyxuP2U6dm9pZCAwLG4pfX0pfSksUy5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oZSx0KXtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSksUy5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiB0aGlzLm9uKGUsbnVsbCx0LG4pfSx1bmJpbmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5vZmYoZSxudWxsLHQpfSxkZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5vbih0LGUsbixyKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGUsXCIqKlwiKTp0aGlzLm9mZih0LGV8fFwiKipcIixuKX0saG92ZXI6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGUpLm1vdXNlbGVhdmUodHx8ZSl9fSksUy5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihlLG4pe1MuZm5bbl09ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMDxhcmd1bWVudHMubGVuZ3RoP3RoaXMub24obixudWxsLGUsdCk6dGhpcy50cmlnZ2VyKG4pfX0pO3ZhciBHdD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7Uy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxtKGUpKXJldHVybiByPXMuY2FsbChhcmd1bWVudHMsMiksKGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KHMuY2FsbChhcmd1bWVudHMpKSl9KS5ndWlkPWUuZ3VpZD1lLmd1aWR8fFMuZ3VpZCsrLGl9LFMuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/Uy5yZWFkeVdhaXQrKzpTLnJlYWR5KCEwKX0sUy5pc0FycmF5PUFycmF5LmlzQXJyYXksUy5wYXJzZUpTT049SlNPTi5wYXJzZSxTLm5vZGVOYW1lPUEsUy5pc0Z1bmN0aW9uPW0sUy5pc1dpbmRvdz14LFMuY2FtZWxDYXNlPVgsUy50eXBlPXcsUy5ub3c9RGF0ZS5ub3csUy5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9Uy50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sUy50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShHdCxcIlwiKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBTfSk7dmFyIFl0PUMualF1ZXJ5LFF0PUMuJDtyZXR1cm4gUy5ub0NvbmZsaWN0PWZ1bmN0aW9uKGUpe3JldHVybiBDLiQ9PT1TJiYoQy4kPVF0KSxlJiZDLmpRdWVyeT09PVMmJihDLmpRdWVyeT1ZdCksU30sXCJ1bmRlZmluZWRcIj09dHlwZW9mIGUmJihDLmpRdWVyeT1DLiQ9UyksU30pOyIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL3Njc3MvcHVkZHliLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL3NsaWNrLnNjc3MnO1xuaW1wb3J0ICcuLi9zY3NzL3NsaWNrLXRoZW1lLnNjc3MnO1xuXG5cbmltcG9ydCAnLi9qcXVlcnktMy41LjEuanMnO1xuaW1wb3J0ICcuL3NsaWNrLmpzJztcblxuJCh3aW5kb3cpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgaWYgKCQoJyNjb250ZW50LmRpc2NvYnVzICNidXNfc2xpZGVyJykubGVuZ3RoKVxuICAgICAgICAkKCcjY29udGVudC5kaXNjb2J1cyAjYnVzX3NsaWRlcicpLnNsaWNrKCk7XG5cbiAgICBpZiAoJCgnI292ZXJ0aXRsZScpLmxlbmd0aCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyNvdmVydGl0bGVfYmFyJykuaGlkZSgyNTApO1xuICAgICAgICAgICAgJCgnI292ZXJ0aXRsZScpLmhpZGUoMjUwKTtcbiAgICAgICAgICAgICQoJyNzaHJvdWQnKS5oaWRlKDMwMCk7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH07XG5cbiAgICAkKCcjY29udGVudC50ZW1wc19hX2JvcmQgI3dhdGNoZXNfcm93IC53YXRjaCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBwb3BpbjtcbiAgICAgICAgcG9waW4gPSAkKCcjdGVtcHNfYV9ib3JkX3BvcGluXycgKyAkKHRoaXMpLmRhdGEoJ2lkJykpO1xuICAgICAgICBpZiAocG9waW4ubGVuZ3RoKXtcbiAgICAgICAgICAgICQoJyNzaHJvdWQnKS5zaG93KDMwMCk7XG4gICAgICAgICAgICBwb3Bpbi5hZGRDbGFzcygnYWN0aXZlJykuc2hvdygzMDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcjYnVzX3JvdyAuYnVzIC5pbm5lcicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBidXMgPSAkKCcjbm9zX2Rpc2NvYnVzX3BvcGluIC5idXNbZGF0YS1pZD0nKyQodGhpcykucGFyZW50KCkuZGF0YSgnaWQnKSsnXScpO1xuICAgICAgICBidXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcjc2hyb3VkJykuc2hvdygzMDApO1xuICAgICAgICAkKCcjbm9zX2Rpc2NvYnVzX3BvcGluJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNob3coMzAwLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgYnVzLmNoaWxkcmVuKCcuc2xpZGVyJykuc2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcjc2hyb3VkJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLnBvcGluLmFjdGl2ZScpLmhpZGUoMzAwKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJyNzaHJvdWQnKS5oaWRlKDMwMCk7XG4gICAgfSk7XG5cbiAgICAkKCcucG9waW4gLmNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLnBvcGluLmFjdGl2ZScpLmhpZGUoMzAwKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICQoJyNzaHJvdWQnKS5oaWRlKDMwMCk7XG4gICAgfSk7XG5cbiAgICAkKCcjcGhvbmUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ2RpdicpLmhpZGUoMjUwKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignZGl2Jykuc2hvdygyNTApO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ21haW4ubWFpbiBkaXYuYWxlcnQgLmNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5oaWRlKDMwMCk7XG4gICAgfSk7XG59KTsiLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4wXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9