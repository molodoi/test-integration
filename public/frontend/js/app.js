var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      r = e.document,
      i = Object.getPrototypeOf,
      o = n.slice,
      a = n.concat,
      u = n.push,
      s = n.indexOf,
      l = {},
      c = l.toString,
      f = l.hasOwnProperty,
      d = f.toString,
      p = d.call(Object),
      h = {},
      g = function e(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      v = function e(t) {
    return null != t && t === t.window;
  },
      y = { type: !0, src: !0, noModule: !0 };function m(e, t, n) {
    var i,
        o = (t = t || r).createElement("script");if (o.text = e, n) for (i in y) {
      n[i] && (o[i] = n[i]);
    }t.head.appendChild(o).parentNode.removeChild(o);
  }function b(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? l[c.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var x = "3.3.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",
      w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn = w.prototype = { jquery: x, constructor: w, length: 0, toArray: function toArray() {
      return o.call(this);
    }, get: function get(e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(o.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: u, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        u = 1,
        s = arguments.length,
        l = !1;for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || g(a) || (a = {}), u === s && (a = this, u--); u < s; u++) {
      if (null != (e = arguments[u])) for (t in e) {
        n = a[t], a !== (r = e[t]) && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }return a;
  }, w.extend({ expando: "jQuery" + (x + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && d.call(n) === p);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      m(e);
    }, each: function each(e, t) {
      var n,
          r = 0;if (T(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(C, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : s.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r, i = [], o = 0, a = e.length, u = !n; o < a; o++) {
        (r = !t(e[o], o)) !== u && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          u = [];if (T(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && u.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && u.push(i);
      }return a.apply([], u);
    }, guid: 1, support: h }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    l["[object " + t + "]"] = t.toLowerCase();
  });function T(e) {
    var t = !!e && "length" in e && e.length,
        n = b(e);return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }var E = function (e) {
    var t,
        n,
        r,
        i,
        o,
        a,
        u,
        s,
        l,
        c,
        f,
        d,
        p,
        h,
        g,
        v,
        y,
        m,
        b,
        x = "sizzle" + 1 * new Date(),
        w = e.document,
        C = 0,
        T = 0,
        E = ae(),
        N = ae(),
        k = ae(),
        A = function A(e, t) {
      return e === t && (f = !0), 0;
    },
        D = {}.hasOwnProperty,
        S = [],
        L = S.pop,
        j = S.push,
        q = S.push,
        O = S.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        I = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        B = "\\[" + I + "*(" + R + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + I + "*\\]",
        M = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
        W = new RegExp(I + "+", "g"),
        $ = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
        F = new RegExp("^" + I + "*," + I + "*"),
        z = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
        _ = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
        U = new RegExp(M),
        V = new RegExp("^" + R + "$"),
        X = { ID: new RegExp("^#(" + R + ")"), CLASS: new RegExp("^\\.(" + R + ")"), TAG: new RegExp("^(" + R + "|[*])"), ATTR: new RegExp("^" + B), PSEUDO: new RegExp("^" + M), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"), bool: new RegExp("^(?:" + H + ")$", "i"), needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i") },
        Q = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        G = /^[^{]+\{\s*\[native \w/,
        K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        re = function re() {
      d();
    },
        ie = me(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      q.apply(S = O.call(w.childNodes), w.childNodes), S[w.childNodes.length].nodeType;
    } catch (e) {
      q = { apply: S.length ? function (e, t) {
          j.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;while (e[n++] = t[r++]) {}e.length = n - 1;
        } };
    }function oe(e, t, r, i) {
      var o,
          u,
          l,
          c,
          f,
          h,
          y,
          m = t && t.ownerDocument,
          C = t ? t.nodeType : 9;if (r = r || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return r;if (!i && ((t ? t.ownerDocument || t : w) !== p && d(t), t = t || p, g)) {
        if (11 !== C && (f = K.exec(e))) if (o = f[1]) {
          if (9 === C) {
            if (!(l = t.getElementById(o))) return r;if (l.id === o) return r.push(l), r;
          } else if (m && (l = m.getElementById(o)) && b(t, l) && l.id === o) return r.push(l), r;
        } else {
          if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r;if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return q.apply(r, t.getElementsByClassName(o)), r;
        }if (n.qsa && !k[e + " "] && (!v || !v.test(e))) {
          if (1 !== C) m = t, y = e;else if ("object" !== t.nodeName.toLowerCase()) {
            (c = t.getAttribute("id")) ? c = c.replace(te, ne) : t.setAttribute("id", c = x), u = (h = a(e)).length;while (u--) {
              h[u] = "#" + c + " " + ye(h[u]);
            }y = h.join(","), m = J.test(e) && ge(t.parentNode) || t;
          }if (y) try {
            return q.apply(r, m.querySelectorAll(y)), r;
          } catch (e) {} finally {
            c === x && t.removeAttribute("id");
          }
        }
      }return s(e.replace($, "$1"), t, r, i);
    }function ae() {
      var e = [];function t(n, i) {
        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
      }return t;
    }function ue(e) {
      return e[x] = !0, e;
    }function se(e) {
      var t = p.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function le(e, t) {
      var n = e.split("|"),
          i = n.length;while (i--) {
        r.attrHandle[n[i]] = t;
      }
    }function ce(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function fe(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function de(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function pe(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ie(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function he(e) {
      return ue(function (t) {
        return t = +t, ue(function (n, r) {
          var i,
              o = e([], n.length, t),
              a = o.length;while (a--) {
            n[i = o[a]] && (n[i] = !(r[i] = n[i]));
          }
        });
      });
    }function ge(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }n = oe.support = {}, o = oe.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, d = oe.setDocument = function (e) {
      var t,
          i,
          a = e ? e.ownerDocument || e : w;return a !== p && 9 === a.nodeType && a.documentElement ? (p = a, h = p.documentElement, g = !o(p), w !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)), n.attributes = se(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = se(function (e) {
        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = G.test(p.getElementsByClassName), n.getById = se(function (e) {
        return h.appendChild(e).id = x, !p.getElementsByName || !p.getElementsByName(x).length;
      }), n.getById ? (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (r.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, r.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && g) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];i = t.getElementsByName(e), r = 0;while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }return r;
        }return o;
      }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
      }, y = [], v = [], (n.qsa = G.test(p.querySelectorAll)) && (se(function (e) {
        h.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]");
      }), se(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = p.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (n.matchesSelector = G.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se(function (e) {
        n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", M);
      }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = G.test(h.compareDocumentPosition), b = t || G.test(h.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }return !1;
      }, A = t ? function (e, t) {
        if (e === t) return f = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === w && b(w, e) ? -1 : t === p || t.ownerDocument === w && b(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return f = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            u = [t];if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;if (i === o) return ce(e, t);n = e;while (n = n.parentNode) {
          a.unshift(n);
        }n = t;while (n = n.parentNode) {
          u.unshift(n);
        }while (a[r] === u[r]) {
          r++;
        }return r ? ce(a[r], u[r]) : a[r] === w ? -1 : u[r] === w ? 1 : 0;
      }, p) : p;
    }, oe.matches = function (e, t) {
      return oe(e, null, null, t);
    }, oe.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== p && d(e), t = t.replace(_, "='$1']"), n.matchesSelector && g && !k[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
        var r = m.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return oe(t, p, null, [e]).length > 0;
    }, oe.contains = function (e, t) {
      return (e.ownerDocument || e) !== p && d(e), b(e, t);
    }, oe.attr = function (e, t) {
      (e.ownerDocument || e) !== p && d(e);var i = r.attrHandle[t.toLowerCase()],
          o = i && D.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
    }, oe.escape = function (e) {
      return (e + "").replace(te, ne);
    }, oe.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, oe.uniqueSort = function (e) {
      var t,
          r = [],
          i = 0,
          o = 0;if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(A), f) {
        while (t = e[o++]) {
          t === e[o] && (i = r.push(o));
        }while (i--) {
          e.splice(r[i], 1);
        }
      }return c = null, e;
    }, i = oe.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += i(e);
          }
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else while (t = e[r++]) {
        n += i(t);
      }return n;
    }, (r = oe.selectors = { cacheLength: 50, createPseudo: ue, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = E[e + " "];return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && E(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (r) {
            var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              u = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, s) {
            var l,
                c,
                f,
                d,
                p,
                h,
                g = o !== a ? "nextSibling" : "previousSibling",
                v = t.parentNode,
                y = u && t.nodeName.toLowerCase(),
                m = !s && !u,
                b = !1;if (v) {
              if (o) {
                while (g) {
                  d = t;while (d = d[g]) {
                    if (u ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                  }h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? v.firstChild : v.lastChild], a && m) {
                b = (p = (l = (c = (f = (d = v)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]) && l[2], d = p && v.childNodes[p];while (d = ++p && d && d[g] || (b = p = 0) || h.pop()) {
                  if (1 === d.nodeType && ++b && d === t) {
                    c[e] = [C, p, b];break;
                  }
                }
              } else if (m && (b = p = (l = (c = (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === C && l[1]), !1 === b) while (d = ++p && d && d[g] || (b = p = 0) || h.pop()) {
                if ((u ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) && ++b && (m && ((c = (f = d[x] || (d[x] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [C, b]), d === t)) break;
              }return (b -= i) === r || b % r == 0 && b / r >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[x] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function (e, n) {
            var r,
                o = i(e, t),
                a = o.length;while (a--) {
              e[r = P(e, o[a])] = !(n[r] = o[a]);
            }
          }) : function (e) {
            return i(e, 0, n);
          }) : i;
        } }, pseudos: { not: ue(function (e) {
          var t = [],
              n = [],
              r = u(e.replace($, "$1"));return r[x] ? ue(function (e, t, n, i) {
            var o,
                a = r(e, null, i, []),
                u = e.length;while (u--) {
              (o = a[u]) && (e[u] = !(t[u] = o));
            }
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
          };
        }), has: ue(function (e) {
          return function (t) {
            return oe(e, t).length > 0;
          };
        }), contains: ue(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
          };
        }), lang: ue(function (e) {
          return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === h;
        }, focus: function focus(e) {
          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: pe(!1), disabled: pe(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !r.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return Q.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; --r >= 0;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = r.pseudos.eq;for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      r.pseudos[t] = fe(t);
    }for (t in { submit: !0, reset: !0 }) {
      r.pseudos[t] = de(t);
    }function ve() {}ve.prototype = r.filters = r.pseudos, r.setFilters = new ve(), a = oe.tokenize = function (e, t) {
      var n,
          i,
          o,
          a,
          u,
          s,
          l,
          c = N[e + " "];if (c) return t ? 0 : c.slice(0);u = e, s = [], l = r.preFilter;while (u) {
        n && !(i = F.exec(u)) || (i && (u = u.slice(i[0].length) || u), s.push(o = [])), n = !1, (i = z.exec(u)) && (n = i.shift(), o.push({ value: n, type: i[0].replace($, " ") }), u = u.slice(n.length));for (a in r.filter) {
          !(i = X[a].exec(u)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), u = u.slice(n.length));
        }if (!n) break;
      }return t ? u.length : u ? oe.error(e) : N(e, s).slice(0);
    };function ye(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function me(e, t, n) {
      var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          u = T++;return t.first ? function (t, n, i) {
        while (t = t[r]) {
          if (1 === t.nodeType || a) return e(t, n, i);
        }return !1;
      } : function (t, n, s) {
        var l,
            c,
            f,
            d = [C, u];if (s) {
          while (t = t[r]) {
            if ((1 === t.nodeType || a) && e(t, n, s)) return !0;
          }
        } else while (t = t[r]) {
          if (1 === t.nodeType || a) if (f = t[x] || (t[x] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;else {
            if ((l = c[o]) && l[0] === C && l[1] === u) return d[2] = l[2];if (c[o] = d, d[2] = e(t, n, s)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, n, r) {
        var i = e.length;while (i--) {
          if (!e[i](t, n, r)) return !1;
        }return !0;
      } : e[0];
    }function xe(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) {
        oe(e, t[r], n);
      }return n;
    }function we(e, t, n, r, i) {
      for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++) {
        (o = e[u]) && (n && !n(o, r, i) || (a.push(o), l && t.push(u)));
      }return a;
    }function Ce(e, t, n, r, i, o) {
      return r && !r[x] && (r = Ce(r)), i && !i[x] && (i = Ce(i, o)), ue(function (o, a, u, s) {
        var l,
            c,
            f,
            d = [],
            p = [],
            h = a.length,
            g = o || xe(t || "*", u.nodeType ? [u] : u, []),
            v = !e || !o && t ? g : we(g, d, e, u, s),
            y = n ? i || (o ? e : h || r) ? [] : a : v;if (n && n(v, y, u, s), r) {
          l = we(y, p), r(l, [], u, s), c = l.length;while (c--) {
            (f = l[c]) && (y[p[c]] = !(v[p[c]] = f));
          }
        }if (o) {
          if (i || e) {
            if (i) {
              l = [], c = y.length;while (c--) {
                (f = y[c]) && l.push(v[c] = f);
              }i(null, y = [], l, s);
            }c = y.length;while (c--) {
              (f = y[c]) && (l = i ? P(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f));
            }
          }
        } else y = we(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, s) : q.apply(a, y);
      });
    }function Te(e) {
      for (var t, n, i, o = e.length, a = r.relative[e[0].type], u = a || r.relative[" "], s = a ? 1 : 0, c = me(function (e) {
        return e === t;
      }, u, !0), f = me(function (e) {
        return P(t, e) > -1;
      }, u, !0), d = [function (e, n, r) {
        var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));return t = null, i;
      }]; s < o; s++) {
        if (n = r.relative[e[s].type]) d = [me(be(d), n)];else {
          if ((n = r.filter[e[s].type].apply(null, e[s].matches))[x]) {
            for (i = ++s; i < o; i++) {
              if (r.relative[e[i].type]) break;
            }return Ce(s > 1 && be(d), s > 1 && ye(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace($, "$1"), n, s < i && Te(e.slice(s, i)), i < o && Te(e = e.slice(i)), i < o && ye(e));
          }d.push(n);
        }
      }return be(d);
    }function Ee(e, t) {
      var n = t.length > 0,
          i = e.length > 0,
          o = function o(_o, a, u, s, c) {
        var f,
            h,
            v,
            y = 0,
            m = "0",
            b = _o && [],
            x = [],
            w = l,
            T = _o || i && r.find.TAG("*", c),
            E = C += null == w ? 1 : Math.random() || .1,
            N = T.length;for (c && (l = a === p || a || c); m !== N && null != (f = T[m]); m++) {
          if (i && f) {
            h = 0, a || f.ownerDocument === p || (d(f), u = !g);while (v = e[h++]) {
              if (v(f, a || p, u)) {
                s.push(f);break;
              }
            }c && (C = E);
          }n && ((f = !v && f) && y--, _o && b.push(f));
        }if (y += m, n && m !== y) {
          h = 0;while (v = t[h++]) {
            v(b, x, a, u);
          }if (_o) {
            if (y > 0) while (m--) {
              b[m] || x[m] || (x[m] = L.call(s));
            }x = we(x);
          }q.apply(s, x), c && !_o && x.length > 0 && y + t.length > 1 && oe.uniqueSort(s);
        }return c && (C = E, l = w), b;
      };return n ? ue(o) : o;
    }return u = oe.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = k[e + " "];if (!o) {
        t || (t = a(e)), n = t.length;while (n--) {
          (o = Te(t[n]))[x] ? r.push(o) : i.push(o);
        }(o = k(e, Ee(i, r))).selector = e;
      }return o;
    }, s = oe.select = function (e, t, n, i) {
      var o,
          s,
          l,
          c,
          f,
          d = "function" == typeof e && e,
          p = !i && a(e = d.selector || e);if (n = n || [], 1 === p.length) {
        if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && g && r.relative[s[1].type]) {
          if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;d && (t = t.parentNode), e = e.slice(s.shift().value.length);
        }o = X.needsContext.test(e) ? 0 : s.length;while (o--) {
          if (l = s[o], r.relative[c = l.type]) break;if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), J.test(s[0].type) && ge(t.parentNode) || t))) {
            if (s.splice(o, 1), !(e = i.length && ye(s))) return q.apply(n, i), n;break;
          }
        }
      }return (d || u(e, p))(i, t, !g, n, !t || J.test(e) && ge(t.parentNode) || t), n;
    }, n.sortStable = x.split("").sort(A).join("") === x, n.detectDuplicates = !!f, d(), n.sortDetached = se(function (e) {
      return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
    }), se(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || le("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && se(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || le("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), se(function (e) {
      return null == e.getAttribute("disabled");
    }) || le(H, function (e, t, n) {
      var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), oe;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var N = function N(e, t, n) {
    var r = [],
        i = void 0 !== n;while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && w(e).is(n)) break;r.push(e);
      }
    }return r;
  },
      k = function k(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      A = w.expr.match.needsContext;function D(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e, t, n) {
    return g(t) ? w.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return s.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (w.contains(i[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < r; t++) {
        w.find(e, i[t], n);
      }return r > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(L(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(L(this, e || [], !0));
    }, is: function is(e) {
      return !!L(this, "string" == typeof e && A.test(e) ? w(e) : e || [], !1).length;
    } });var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var i, o;if (!e) return this;if (n = n || j, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (i[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), S.test(i[1]) && w.isPlainObject(t)) for (i in t) {
          g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        }return this;
      }return (o = r.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, j = w(r);var O = /^(?:parents|prev(?:Until|All))/,
      P = { children: !0, contents: !0, next: !0, prev: !0 };w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && w(e);if (!A.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } });function H(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {}return e;
  }w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return N(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return N(e, "parentNode", n);
    }, next: function next(e) {
      return H(e, "nextSibling");
    }, prev: function prev(e) {
      return H(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return N(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return N(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return N(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return N(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return k((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return k(e.firstChild);
    }, contents: function contents(e) {
      return D(e, "iframe") ? e.contentDocument : (D(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, r) {
      var i = w.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (P[e] || w.uniqueSort(i), O.test(e) && i.reverse()), this.pushStack(i);
    };
  });var I = /[^\x20\t\r\n\f]+/g;function R(e) {
    var t = {};return w.each(e.match(I) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? R(e) : w.extend({}, e);var t,
        n,
        r,
        i,
        o = [],
        a = [],
        u = -1,
        s = function s() {
      for (i = i || e.once, r = t = !0; a.length; u = -1) {
        n = a.shift();while (++u < o.length) {
          !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
    },
        l = { add: function add() {
        return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
          w.each(n, function (n, r) {
            g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r);
          });
        }(arguments), n && !t && s()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          var n;while ((n = w.inArray(t, o, n)) > -1) {
            o.splice(n, 1), n <= u && u--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, o) > -1 : o.length > 0;
      }, empty: function empty() {
        return o && (o = []), this;
      }, disable: function disable() {
        return i = a = [], o = n = "", this;
      }, disabled: function disabled() {
        return !o;
      }, lock: function lock() {
        return i = a = [], n || t || (o = n = ""), this;
      }, locked: function locked() {
        return !!i;
      }, fireWith: function fireWith(e, n) {
        return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || s()), this;
      }, fire: function fire() {
        return l.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!r;
      } };return l;
  };function B(e) {
    return e;
  }function M(e) {
    throw e;
  }function W(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          r = "pending",
          i = { state: function state() {
          return r;
        }, always: function always() {
          return o.done(arguments).fail(arguments), this;
        }, "catch": function _catch(e) {
          return i.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, r) {
              var i = g(e[r[4]]) && e[r[4]];o[r[1]](function () {
                var e = i && i.apply(this, arguments);e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, r, i) {
          var o = 0;function a(t, n, r, i) {
            return function () {
              var u = this,
                  s = arguments,
                  l = function l() {
                var e, l;if (!(t < o)) {
                  if ((e = r.apply(u, s)) === n.promise()) throw new TypeError("Thenable self-resolution");l = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(l) ? i ? l.call(e, a(o, n, B, i), a(o, n, M, i)) : (o++, l.call(e, a(o, n, B, i), a(o, n, M, i), a(o, n, B, n.notifyWith))) : (r !== B && (u = void 0, s = [e]), (i || n.resolveWith)(u, s));
                }
              },
                  c = i ? l : function () {
                try {
                  l();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== M && (u = void 0, s = [e]), n.rejectWith(u, s));
                }
              };t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(a(0, e, g(i) ? i : B, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : B)), n[2][3].add(a(0, e, g(r) ? r : M));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, i) : i;
        } },
          o = {};return w.each(n, function (e, t) {
        var a = t[2],
            u = t[5];i[t[1]] = a.add, u && a.add(function () {
          r = u;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
        }, o[t[0] + "With"] = a.fireWith;
      }), i.promise(o), t && t.call(o, o), o;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          u = function u(e) {
        return function (n) {
          r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i);
        };
      };if (t <= 1 && (W(e, a.done(u(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();while (n--) {
        W(i[n], u(n), a.reject);
      }return a.promise();
    } });var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && $.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var F = w.Deferred();w.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(r, [w]));
    } }), w.ready.then = F.then;function z() {
    r.removeEventListener("DOMContentLoaded", z), e.removeEventListener("load", z), w.ready();
  }"complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", z), e.addEventListener("load", z));var _ = function _(e, t, n, r, i, o, a) {
    var u = 0,
        s = e.length,
        l = null == n;if ("object" === b(n)) {
      i = !0;for (u in n) {
        _(e, t, u, n[u], !0, o, a);
      }
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(w(e), n);
    })), t)) for (; u < s; u++) {
      t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
    }return i ? e : l ? t.call(e) : s ? t(e[0], n) : o;
  },
      U = /^-ms-/,
      V = /-([a-z])/g;function X(e, t) {
    return t.toUpperCase();
  }function Q(e) {
    return e.replace(U, "ms-").replace(V, X);
  }var Y = function Y(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function G() {
    this.expando = w.expando + G.uid++;
  }G.uid = 1, G.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[Q(t)] = n;else for (r in t) {
        i[Q(r)] = t[r];
      }return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in r ? [t] : t.match(I) || []).length;while (n--) {
            delete r[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var K = new G(),
      J = new G(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ee = /[A-Z]/g;function te(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e);
  }function ne(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = te(n);
      } catch (e) {}J.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return J.hasData(e) || K.hasData(e);
    }, data: function data(e, t, n) {
      return J.access(e, t, n);
    }, removeData: function removeData(e, t) {
      J.remove(e, t);
    }, _data: function _data(e, t, n) {
      return K.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      K.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 === e) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
          n = a.length;while (n--) {
            a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Q(r.slice(5)), ne(o, r, i[r]));
          }K.set(o, "hasDataAttrs", !0);
        }return i;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        J.set(this, e);
      }) : _(this, function (t) {
        var n;if (o && void 0 === t) {
          if (void 0 !== (n = J.get(o, e))) return n;if (void 0 !== (n = ne(o, e))) return n;
        } else this.each(function () {
          J.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var r;if (e) return t = (t || "fx") + "queue", r = K.get(e, t), n && (!r || Array.isArray(n) ? r = K.access(e, t, w.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t),
          a = function a() {
        w.dequeue(e, t);
      };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return K.get(e, n) || K.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          K.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          u = function u() {
        --r || i.resolveWith(o, [o]);
      };"string" != typeof e && (t = e, e = void 0), e = e || "fx";while (a--) {
        (n = K.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(u));
      }return u(), i.promise(t);
    } });var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
      oe = ["Top", "Right", "Bottom", "Left"],
      ae = function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }i = n.apply(e, r || []);for (o in t) {
      e.style[o] = a[o];
    }return i;
  };function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        u = r ? function () {
      return r.cur();
    } : function () {
      return w.css(e, t, "");
    },
        s = u(),
        l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        c = (w.cssNumber[t] || "px" !== l && +s) && ie.exec(w.css(e, t));if (c && c[3] !== l) {
      s /= 2, l = l || c[3], c = +s || 1;while (a--) {
        w.style(e, t, c + l), (1 - o) * (1 - (o = u() / s || .5)) <= 0 && (a = 0), c /= o;
      }c *= 2, w.style(e, t, c + l), n = n || [];
    }return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var le = {};function ce(e) {
    var t,
        n = e.ownerDocument,
        r = e.nodeName,
        i = le[r];return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i);
  }function fe(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++) {
      (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = K.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", K.set(r, "display", n)));
    }for (o = 0; o < a; o++) {
      null != i[o] && (e[o].style.display = i[o]);
    }return e;
  }w.fn.extend({ show: function show() {
      return fe(this, !0);
    }, hide: function hide() {
      return fe(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? w(this).show() : w(this).hide();
      });
    } });var de = /^(?:checkbox|radio)$/i,
      pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;function ve(e, t) {
    var n;return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && D(e, t) ? w.merge([e], n) : n;
  }function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
    }
  }var me = /<|&#?\w+;/;function be(e, t, n, r, i) {
    for (var o, a, u, s, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++) {
      if ((o = e[p]) || 0 === o) if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);else if (me.test(o)) {
        a = a || f.appendChild(t.createElement("div")), u = (pe.exec(o) || ["", ""])[1].toLowerCase(), s = ge[u] || ge._default, a.innerHTML = s[1] + w.htmlPrefilter(o) + s[2], c = s[0];while (c--) {
          a = a.lastChild;
        }w.merge(d, a.childNodes), (a = f.firstChild).textContent = "";
      } else d.push(t.createTextNode(o));
    }f.textContent = "", p = 0;while (o = d[p++]) {
      if (r && w.inArray(o, r) > -1) i && i.push(o);else if (l = w.contains(o.ownerDocument, o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }return f;
  }!function () {
    var e = r.createDocumentFragment().appendChild(r.createElement("div")),
        t = r.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var xe = r.documentElement,
      we = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function Ne() {
    return !1;
  }function ke() {
    try {
      return r.activeElement;
    } catch (e) {}
  }function Ae(e, t, n, r, i, o) {
    var a, u;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      "string" != typeof n && (r = r || n, n = void 0);for (u in t) {
        Ae(e, u, n, r, t[u], o);
      }return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
      return w().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, i, r, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, r, i) {
      var o,
          a,
          u,
          s,
          l,
          c,
          f,
          d,
          p,
          h,
          g,
          v = K.get(e);if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(xe, i), n.guid || (n.guid = w.guid++), (s = v.events) || (s = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
          return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
        }), l = (t = (t || "").match(I) || [""]).length;while (l--) {
          p = g = (u = Te.exec(t[l]) || [])[1], h = (u[2] || "").split(".").sort(), p && (f = w.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = w.event.special[p] || {}, c = w.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (d = s[p]) || ((d = s[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), w.event.global[p] = !0);
        }
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          u,
          s,
          l,
          c,
          f,
          d,
          p,
          h,
          g,
          v = K.hasData(e) && K.get(e);if (v && (s = v.events)) {
        l = (t = (t || "").match(I) || [""]).length;while (l--) {
          if (u = Te.exec(t[l]) || [], p = g = u[1], h = (u[2] || "").split(".").sort(), p) {
            f = w.event.special[p] || {}, d = s[p = (r ? f.delegateType : f.bindType) || p] || [], u = u[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length;while (o--) {
              c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, p, v.handle), delete s[p]);
          } else for (p in s) {
            w.event.remove(e, p + t[l], n, r, !0);
          }
        }w.isEmptyObject(s) && K.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t = w.event.fix(e),
          n,
          r,
          i,
          o,
          a,
          u,
          s = new Array(arguments.length),
          l = (K.get(this, "events") || {})[t.type] || [],
          c = w.event.special[t.type] || {};for (s[0] = t, n = 1; n < arguments.length; n++) {
        s[n] = arguments[n];
      }if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
        u = w.event.handlers.call(this, t, l), n = 0;while ((o = u[n++]) && !t.isPropagationStopped()) {
          t.currentTarget = o.elem, r = 0;while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) {
            t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, s)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, t), t.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          u = [],
          s = t.delegateCount,
          l = e.target;if (s && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < s; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
          }o.length && u.push({ elem: l, handlers: o });
        }
      }return l = this, s < t.length && u.push({ elem: l, handlers: t.slice(s) }), u;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: g(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== ke() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === ke() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return D(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: Ne, isPropagationStopped: Ne, isImmediatePropagationStopped: Ne, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === r || w.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (i in e) {
          this.off(i, t, e[i]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Se = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e, t) {
    return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
  }function Oe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Pe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function He(e, t) {
    var n, r, i, o, a, u, s, l;if (1 === t.nodeType) {
      if (K.hasData(e) && (o = K.access(e), a = K.set(t, o), l = o.events)) {
        delete a.handle, a.events = {};for (i in l) {
          for (n = 0, r = l[i].length; n < r; n++) {
            w.event.add(t, i, l[i][n]);
          }
        }
      }J.hasData(e) && (u = J.access(e), s = w.extend({}, u), J.set(t, s));
    }
  }function Ie(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && de.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
  }function Re(e, t, n, r) {
    t = a.apply([], t);var i,
        o,
        u,
        s,
        l,
        c,
        f = 0,
        d = e.length,
        p = d - 1,
        v = t[0],
        y = g(v);if (y || d > 1 && "string" == typeof v && !h.checkClone && Le.test(v)) return e.each(function (i) {
      var o = e.eq(i);y && (t[0] = v.call(this, i, o.html())), Re(o, t, n, r);
    });if (d && (i = be(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
      for (s = (u = w.map(ve(i, "script"), Oe)).length; f < d; f++) {
        l = i, f !== p && (l = w.clone(l, !0, !0), s && w.merge(u, ve(l, "script"))), n.call(e[f], l, f);
      }if (s) for (c = u[u.length - 1].ownerDocument, w.map(u, Pe), f = 0; f < s; f++) {
        l = u[f], he.test(l.type || "") && !K.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(je, ""), c, l));
      }
    }return e;
  }function Be(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || w.cleanData(ve(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(De, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          u = e.cloneNode(!0),
          s = w.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ve(u), r = 0, i = (o = ve(e)).length; r < i; r++) {
        Ie(o[r], a[r]);
      }if (t) if (n) for (o = o || ve(e), a = a || ve(u), r = 0, i = o.length; r < i; r++) {
        He(o[r], a[r]);
      } else He(e, u);return (a = ve(u, "script")).length > 0 && ye(a, !s && ve(e, "script")), u;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (Y(n)) {
          if (t = n[K.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            }n[K.expando] = void 0;
          }n[J.expando] && (n[J.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return Be(this, e, !0);
    }, remove: function remove(e) {
      return Be(this, e);
    }, text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Re(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Re(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Re(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(ve(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Se.test(e) && !ge[(pe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(ve(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Re(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(ve(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) {
        n = a === o ? this : this.clone(!0), w(i[a])[t](n), u.apply(r, n.get());
      }return this.pushStack(r);
    };
  });var Me = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
      We = function We(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      $e = new RegExp(oe.join("|"), "i");!function () {
    function t() {
      if (c) {
        l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", xe.appendChild(l).appendChild(c);var t = e.getComputedStyle(c);i = "1%" !== t.top, s = 12 === n(t.marginLeft), c.style.right = "60%", u = 36 === n(t.right), o = 36 === n(t.width), c.style.position = "absolute", a = 36 === c.offsetWidth || "absolute", xe.removeChild(l), c = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var i,
        o,
        a,
        u,
        s,
        l = r.createElement("div"),
        c = r.createElement("div");c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, { boxSizingReliable: function boxSizingReliable() {
        return t(), o;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), u;
      }, pixelPosition: function pixelPosition() {
        return t(), i;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), s;
      }, scrollboxSize: function scrollboxSize() {
        return t(), a;
      } }));
  }();function Fe(e, t, n) {
    var r,
        i,
        o,
        a,
        u = e.style;return (n = n || We(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)), !h.pixelBoxStyles() && Me.test(a) && $e.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a;
  }function ze(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }var _e = /^(none|table(?!-c[ea]).+)/,
      Ue = /^--/,
      Ve = { position: "absolute", visibility: "hidden", display: "block" },
      Xe = { letterSpacing: "0", fontWeight: "400" },
      Qe = ["Webkit", "Moz", "ms"],
      Ye = r.createElement("div").style;function Ge(e) {
    if (e in Ye) return e;var t = e[0].toUpperCase() + e.slice(1),
        n = Qe.length;while (n--) {
      if ((e = Qe[n] + t) in Ye) return e;
    }
  }function Ke(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = Ge(e) || e), t;
  }function Je(e, t, n) {
    var r = ie.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function Ze(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        u = 0,
        s = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (s += w.css(e, n + oe[a], !0, i)), r ? ("content" === n && (s -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (s -= w.css(e, "border" + oe[a] + "Width", !0, i))) : (s += w.css(e, "padding" + oe[a], !0, i), "padding" !== n ? s += w.css(e, "border" + oe[a] + "Width", !0, i) : u += w.css(e, "border" + oe[a] + "Width", !0, i));
    }return !r && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - u - .5))), s;
  }function et(e, t, n) {
    var r = We(e),
        i = Fe(e, t, r),
        o = "border-box" === w.css(e, "boxSizing", !1, r),
        a = o;if (Me.test(i)) {
      if (!n) return i;i = "auto";
    }return a = a && (h.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === w.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px";
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = Fe(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            u = Q(t),
            s = Ue.test(t),
            l = e.style;if (s || (t = Ke(u)), a = w.cssHooks[t] || w.cssHooks[u], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = ie.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (w.cssNumber[u] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o,
          a,
          u = Q(t);return Ue.test(t) || (t = Ke(u)), (a = w.cssHooks[t] || w.cssHooks[u]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, r) {
        if (n) return !_e.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, t, r) : ue(e, Ve, function () {
          return et(e, t, r);
        });
      }, set: function set(e, n, r) {
        var i,
            o = We(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            u = r && Ze(e, t, r, a, o);return a && h.scrollboxSize() === o.position && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - .5)), u && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Je(e, n, u);
      } };
  }), w.cssHooks.marginLeft = ze(h.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
          i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
        }return i;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Je);
  }), w.fn.extend({ css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = We(e), i = t.length; a < i; a++) {
            o[t[a]] = w.css(e, t[a], !1, r);
          }return o;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } }), w.fn.delay = function (t, n) {
    return t = w.fx ? w.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
      var i = e.setTimeout(n, t);r.stop = function () {
        e.clearTimeout(i);
      };
    });
  }, function () {
    var e = r.createElement("input"),
        t = r.createElement("select").appendChild(r.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
  }();var tt,
      nt = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return _(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!h.radioValue && "radio" === t && D(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(I);if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    } }), tt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = nt[t] || w.find.attr;nt[t] = function (e, t, r) {
      var i,
          o,
          a = t.toLowerCase();return r || (o = nt[a], nt[a] = i, i = null != n(e, t, r) ? a : null, nt[a] = o), i;
    };
  });var rt = /^(?:input|select|textarea|button)$/i,
      it = /^(?:a|area)$/i;w.fn.extend({ prop: function prop(e, t) {
      return _(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), h.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  });function ot(e) {
    return (e.match(I) || []).join(" ");
  }function at(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function ut(e) {
    return Array.isArray(e) ? e : "string" == typeof e ? e.match(I) || [] : [];
  }w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          u,
          s = 0;if (g(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, at(this)));
      });if ((t = ut(e)).length) while (n = this[s++]) {
        if (i = at(n), r = 1 === n.nodeType && " " + ot(i) + " ") {
          a = 0;while (o = t[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }i !== (u = ot(r)) && n.setAttribute("class", u);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          u,
          s = 0;if (g(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, at(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = ut(e)).length) while (n = this[s++]) {
        if (i = at(n), r = 1 === n.nodeType && " " + ot(i) + " ") {
          a = 0;while (o = t[a++]) {
            while (r.indexOf(" " + o + " ") > -1) {
              r = r.replace(" " + o + " ", " ");
            }
          }i !== (u = ot(r)) && n.setAttribute("class", u);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          r = "string" === n || Array.isArray(e);return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, at(this), t), t);
      }) : this.each(function () {
        var t, i, o, a;if (r) {
          i = 0, o = w(this), a = ut(e);while (t = a[i++]) {
            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
          }
        } else void 0 !== e && "boolean" !== n || ((t = at(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;t = " " + e + " ";while (n = this[r++]) {
        if (1 === n.nodeType && (" " + ot(at(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var st = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          r,
          i = this[0];{
        if (arguments.length) return r = g(e), this.each(function (n) {
          var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
            return null == e ? "" : e + "";
          })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
        });if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(st, "") : null == n ? "" : n;
      }
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : ot(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              u = a ? null : [],
              s = a ? o + 1 : i.length;for (r = o < 0 ? s : a ? o : 0; r < s; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), a) return t;u.push(t);
            }
          }return u;
        }, set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = w.makeArray(t),
              a = i.length;while (a--) {
            ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, h.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), h.focusin = "onfocusin" in e;var lt = /^(?:focusinfocus|focusoutblur)$/,
      ct = function ct(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, i, o) {
      var a,
          u,
          s,
          l,
          c,
          d,
          p,
          h,
          y = [i || r],
          m = f.call(t, "type") ? t.type : t,
          b = f.call(t, "namespace") ? t.namespace.split(".") : [];if (u = h = s = i = i || r, 3 !== i.nodeType && 8 !== i.nodeType && !lt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (m = (b = m.split(".")).shift(), b.sort()), c = m.indexOf(":") < 0 && "on" + m, t = t[w.expando] ? t : new w.Event(m, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), t.isTrigger = o ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : w.makeArray(n, [t]), p = w.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(i, n))) {
        if (!o && !p.noBubble && !v(i)) {
          for (l = p.delegateType || m, lt.test(l + m) || (u = u.parentNode); u; u = u.parentNode) {
            y.push(u), s = u;
          }s === (i.ownerDocument || r) && y.push(s.defaultView || s.parentWindow || e);
        }a = 0;while ((u = y[a++]) && !t.isPropagationStopped()) {
          h = u, t.type = a > 1 ? l : p.bindType || m, (d = (K.get(u, "events") || {})[t.type] && K.get(u, "handle")) && d.apply(u, n), (d = c && u[c]) && d.apply && Y(u) && (t.result = d.apply(u, n), !1 === t.result && t.preventDefault());
        }return t.type = m, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(y.pop(), n) || !Y(i) || c && g(i[m]) && !v(i) && ((s = i[c]) && (i[c] = null), w.event.triggered = m, t.isPropagationStopped() && h.addEventListener(m, ct), i[m](), t.isPropagationStopped() && h.removeEventListener(m, ct), w.event.triggered = void 0, s && (i[c] = s)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(r, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), h.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var r = this.ownerDocument || this,
            i = K.access(r, t);i || r.addEventListener(e, n, !0), K.access(r, t, (i || 0) + 1);
      }, teardown: function teardown() {
        var r = this.ownerDocument || this,
            i = K.access(r, t) - 1;i ? K.access(r, t, i) : (r.removeEventListener(e, n, !0), K.remove(r, t));
      } };
  });var ft = /\[\]$/,
      dt = /\r?\n/g,
      pt = /^(?:submit|button|image|reset|file)$/i,
      ht = /^(?:input|select|textarea|keygen)/i;function gt(e, t, n, r) {
    var i;if (Array.isArray(t)) w.each(t, function (t, i) {
      n || ft.test(e) ? r(e, i) : gt(e + "[" + ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && null != i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== b(t)) r(e, t);else for (i in t) {
      gt(e + "[" + i + "]", t[i], n, r);
    }
  }w.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = g(t) ? t() : t;r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      gt(n, e[n], t, i);
    }return r.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && ht.test(this.nodeName) && !pt.test(e) && (this.checked || !de.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(dt, "\r\n") };
        }) : { name: t.name, value: n.replace(dt, "\r\n") };
      }).get();
    } }), w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;while (e.firstElementChild) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return g(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = g(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, h.createHTMLDocument = function () {
    var e = r.implementation.createHTMLDocument("").body;return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
  }(), w.parseHTML = function (e, t, n) {
    if ("string" != typeof e) return [];"boolean" == typeof t && (n = t, t = !1);var i, o, a;return t || (h.createHTMLDocument ? ((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(i)) : t = r), o = S.exec(e), a = !n && [], o ? [t.createElement(o[1])] : (o = be([e], t, a), a && a.length && w(a).remove(), w.merge([], o.childNodes));
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          u,
          s,
          l,
          c = w.css(e, "position"),
          f = w(e),
          d = {};"static" === c && (e.style.position = "relative"), u = f.offset(), o = w.css(e, "top"), s = w.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + s).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), g(t) && (t = t.call(e, n, w.extend({}, u))), null != t.top && (d.top = t.top - u.top + a), null != t.left && (d.left = t.left - u.left + i), "using" in t ? t.using.call(e, d) : f.css(d);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0];if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) {
            e = e.parentNode;
          }e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;while (e && "static" === w.css(e, "position")) {
          e = e.offsetParent;
        }return e || xe;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (r) {
      return _(this, function (e, r, i) {
        var o;if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i;
      }, e, r, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = ze(h.pixelPosition, function (e, n) {
      if (n) return n = Fe(e, t), Me.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      w.fn[r] = function (i, o) {
        var a = arguments.length && (n || "boolean" != typeof i),
            u = n || (!0 === i || !0 === o ? "margin" : "border");return _(this, function (t, n, i) {
          var o;return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, u) : w.style(t, n, i, u);
        }, t, a ? i : void 0, a);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), i = function i() {
      return e.apply(t || this, r.concat(o.call(arguments)));
    }, i.guid = e.guid = e.guid || w.guid++, i;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = D, w.isFunction = g, w.isWindow = v, w.camelCase = Q, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var vt = e.jQuery,
      yt = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = yt), t && e.jQuery === w && (e.jQuery = vt), w;
  }, t || (e.jQuery = e.$ = w), w;
});

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t();
})(this, function () {
  'use strict';
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }function t(e, t) {
    if (1 !== e.nodeType) return [];var o = getComputedStyle(e, null);return t ? o[t] : o;
  }function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }function n(e) {
    if (!e) return document.body;switch (e.nodeName) {case 'HTML':case 'BODY':
        return e.ownerDocument.body;case '#document':
        return e.body;}var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;return (/(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    );
  }function r(e) {
    return 11 === e ? re : 10 === e ? pe : re || pe;
  }function p(e) {
    if (!e) return document.documentElement;for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }function s(e) {
    var t = e.nodeName;return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();r.setStart(n, 0), r.setEnd(i, 0);var l = r.commonAncestorContainer;if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);var f = d(e);return f.host ? a(f.host, t) : a(e, d(t).host);
  }function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        n = e.nodeName;if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;return r[o];
    }return e[o];
  }function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, 'top'),
        i = l(t, 'left'),
        r = o ? -1 : 1;return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
  }function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        n = 'Left' == o ? 'Right' : 'Bottom';return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }function h(e, t, o, n) {
    return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }function c() {
    var e = document.body,
        t = document.documentElement,
        o = r(10) && getComputedStyle(t);return { height: h('Height', e, t, o), width: h('Width', e, t, o) };
  }function g(e) {
    return le({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function u(e) {
    var o = {};try {
      if (r(10)) {
        o = e.getBoundingClientRect();var n = l(e, 'top'),
            i = l(e, 'left');o.top += n, o.left += i, o.bottom += n, o.right += i;
      } else o = e.getBoundingClientRect();
    } catch (t) {}var p = { left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top },
        s = 'HTML' === e.nodeName ? c() : {},
        d = s.width || e.clientWidth || p.right - p.left,
        a = s.height || e.clientHeight || p.bottom - p.top,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;if (f || h) {
      var u = t(e);f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h;
    }return g(p);
  }function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = 'HTML' === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));var b = g({ top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height });if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var y = parseFloat(m.marginTop, 10),
          w = parseFloat(m.marginLeft, 10);b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w;
    }return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }function y(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = $(o.clientWidth, window.innerWidth || 0),
        r = $(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, 'left'),
        d = { top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r };return g(d);
  }function w(e) {
    var n = e.nodeName;return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e));
  }function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;for (var o = e.parentElement; o && 'none' === t(o, 'transform');) {
      o = o.parentElement;
    }return o || document.documentElement;
  }function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        s = { top: 0, left: 0 },
        d = p ? E(e) : a(e, t);if ('viewport' === r) s = y(d, p);else {
      var l;'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;var f = b(l, d, p);if ('HTML' === l.nodeName && !w(d)) {
        var m = c(),
            h = m.height,
            g = m.width;s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left;
      } else s = f;
    }return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s;
  }function x(e) {
    var t = e.width,
        o = e.height;return t * o;
  }function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf('auto')) return e;var p = v(o, n, r, i),
        s = { top: { width: p.width, height: t.top - p.top }, right: { width: p.right - t.right, height: p.height }, bottom: { width: p.width, height: p.bottom - t.bottom }, left: { width: t.left - p.left, height: p.height } },
        d = Object.keys(s).map(function (e) {
      return le({ key: e }, s[e], { area: x(s[e]) });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          n = e.height;return t >= o.clientWidth && n >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];return l + (f ? '-' + f : '');
  }function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        i = n ? E(t) : a(t, o);return b(o, i, n);
  }function S(e) {
    var t = getComputedStyle(e),
        o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
        i = { width: e.offsetWidth + n, height: e.offsetHeight + o };return i;
  }function T(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function C(e, t, o) {
    o = o.split('-')[0];var n = S(e),
        i = { width: n.width, height: n.height },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
  }function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });var n = D(e, function (e) {
      return e[t] === o;
    });return e.indexOf(n);
  }function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n = t['function'] || t.fn;t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
    }), o;
  }function k() {
    if (!this.state.isDestroyed) {
      var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          n = e.enabled;return n && o === t;
    });
  }function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;if ('undefined' != typeof document.body.style[r]) return r;
    }return null;
  }function H() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }function A(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;p.addEventListener(t, o, { passive: !0 }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }function I(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, { passive: !0 });var r = n(e);return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }function F() {
    this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate));
  }function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';-1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
    });
  }function K(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];!1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }function q(e, t, o) {
    var n = D(e, function (e) {
      var o = e.name;return o === t;
    }),
        i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order;
    });if (!i) {
      var r = '`' + t + '`';console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }return i;
  }function G(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }function z(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = me.indexOf(e),
        n = me.slice(o + 1).concat(me.slice(0, o));return t ? n.reverse() : n;
  }function V(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];if (!r) return e;if (0 === p.indexOf('%')) {
      var s;switch (p) {case '%p':
          s = o;break;case '%':case '%r':default:
          s = n;}var d = g(s);return d[t] / 100 * r;
    }if ('vh' === p || 'vw' === p) {
      var a;return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }return r;
  }function _(e, t, o, n) {
    var i = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(D(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return V(e, i, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
      });
    }), i;
  }function X(e, t) {
    var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split('-')[0];return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1) {
    if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
      oe = 1;break;
    }
  }var i = ee && window.Promise,
      ie = i ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, oe));
    };
  },
      re = ee && !!(window.MSInputMethodContext && document.documentMode),
      pe = ee && /MSIE 10/.test(navigator.userAgent),
      se = function se(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      de = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }(),
      ae = function ae(e, t, o) {
    return t in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
  },
      le = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var n in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }return e;
  },
      fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      me = fe.slice(3),
      he = { FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise' },
      ce = function () {
    function t(o, n) {
      var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};se(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return le({ name: e }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();var p = this.options.eventsEnabled;p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }return de(t, [{ key: 'update', value: function value() {
        return k.call(this);
      } }, { key: 'destroy', value: function value() {
        return H.call(this);
      } }, { key: 'enableEventListeners', value: function value() {
        return F.call(this);
      } }, { key: 'disableEventListeners', value: function value() {
        return U.call(this);
      } }]), t;
  }();return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = { placement: 'bottom', positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];if (n) {
            var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = { start: ae({}, d, r[d]), end: ae({}, d, r[d] + r[a] - p[a]) };e.offsets.popper = le({}, p, l[n]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: X, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var o = t.boundariesElement || p(e.instance.popper);e.instance.reference === o && (o = p(o));var n = B('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];i.top = '', i.left = '', i[n] = '';var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);i.top = r, i.left = s, i[n] = d, t.boundaries = a;var l = t.priority,
              f = e.offsets.popper,
              m = { primary: function primary(e) {
              var o = f[e];return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o);
            }, secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = f[o];return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n);
            } };return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';f = le({}, f, m[t](e));
          }), e.offsets.popper = f, e;
        }, priority: ['left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent' }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, o) {
          var n;if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;var i = o.element;if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);var b = d[m] + d[l] / 2 - u / 2,
              y = t(e.instance.popper),
              w = parseFloat(y['margin' + f], 10),
              E = parseFloat(y['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - w - E;return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e;
        }, element: '[x-arrow]' }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];switch (t.behavior) {case he.FLIP:
              p = [n, i];break;case he.CLOCKWISE:
              p = z(n);break;case he.COUNTERCLOCKWISE:
              p = z(n, !0);break;default:
              p = t.behavior;}return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;n = e.placement.split('-')[0], i = T(n);var a = e.offsets.popper,
                l = e.offsets.reference,
                f = Z,
                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                y = -1 !== ['top', 'bottom'].indexOf(n),
                w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);(m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
          }), e;
        }, behavior: 'flip', padding: 5, boundariesElement: 'viewport' }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;var t = e.offsets.reference,
              o = D(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = D(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = { position: i.position },
              h = { left: Z(i.left), top: Q(i.top), bottom: Q(i.bottom), right: Z(i.right) },
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = B('transform');if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';else {
            var y = 'bottom' == c ? -1 : 1,
                w = 'right' == g ? -1 : 1;m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g;
          }var E = { "x-placement": e.placement };return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: 'bottom', y: 'right' }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);return t.setAttribute('x-placement', p), j(t, { position: o.positionFixed ? 'fixed' : 'absolute' }), o;
        }, gpuAcceleration: void 0 } } }, ce;
});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper);
}(this, function (t, e, c) {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(s);"function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
        return Object.getOwnPropertyDescriptor(s, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i;
      });
    }return r;
  }e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;var r,
      n,
      s,
      a,
      l,
      u,
      f,
      d,
      _,
      g,
      m,
      p,
      v,
      E,
      y,
      T,
      C,
      I,
      A,
      D,
      b,
      S,
      w,
      N,
      O,
      k,
      P,
      L,
      j,
      R,
      H,
      W,
      M,
      x,
      U,
      K,
      F,
      V,
      Q,
      B,
      Y,
      G,
      q,
      z,
      X,
      J,
      Z,
      $,
      tt,
      et,
      nt,
      it,
      rt,
      st,
      ot,
      at,
      lt,
      ht,
      ct,
      ut,
      ft,
      dt,
      _t,
      gt,
      mt,
      pt,
      vt,
      Et,
      yt,
      Tt,
      Ct,
      It,
      At,
      Dt,
      bt,
      St,
      wt,
      Nt,
      Ot,
      kt,
      Pt,
      Lt,
      jt,
      Rt,
      Ht,
      Wt,
      Mt,
      xt,
      Ut,
      Kt,
      Ft,
      Vt,
      Qt,
      Bt,
      Yt,
      Gt,
      qt,
      zt,
      Xt,
      Jt,
      Zt,
      $t,
      te,
      ee,
      ne,
      ie,
      re,
      se,
      oe,
      ae,
      le,
      he,
      ce,
      ue,
      fe,
      de,
      _e,
      ge,
      me,
      pe,
      ve,
      Ee,
      ye,
      Te,
      Ce,
      Ie,
      Ae,
      De,
      be,
      Se,
      we,
      Ne,
      Oe,
      ke,
      Pe,
      Le,
      je,
      Re,
      He,
      We,
      Me,
      xe,
      Ue,
      Ke,
      Fe,
      Ve,
      Qe,
      Be,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      sn,
      on,
      an,
      ln,
      hn,
      cn,
      un,
      fn,
      dn,
      _n,
      gn,
      mn,
      pn,
      vn,
      En,
      yn,
      Tn,
      Cn = function (i) {
    var e = "transitionend";function t(t) {
      var e = this,
          n = !1;return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }var l = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {}return t;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");e && "#" !== e || (e = t.getAttribute("href") || "");try {
          return 0 < i(document).find(e).length ? e : null;
        } catch (t) {
          return null;
        }
      }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;var e = i(t).css("transition-duration");return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      }, isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      }, typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                s = e[i],
                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".');
          }
        }var a;
      } };return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = { bindType: e, delegateType: e, handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }, l;
  }(e),
      In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api" }, f = "alert", d = "fade", _ = "show", g = function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.close = function (t) {
      var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      r.removeData(this._element, s), this._element = null;
    }, t._getRootElement = function (t) {
      var e = Cn.getSelectorFromElement(t),
          n = !1;return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = r.Event(u.CLOSE);return r(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;if (r(e).removeClass(_), r(e).hasClass(d)) {
        var t = Cn.getTransitionDurationFromElement(e);r(e).one(Cn.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      r(t).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = r(this),
            e = t.data(s);e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, o(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), i;
  }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function () {
    return r.fn[n] = l, g._jQueryInterface;
  }, g),
      An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = { CLICK_DATA_API: "click" + E + y, FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y }, k = function () {
    function n(t) {
      this._element = t;
    }var t = n.prototype;return t.toggle = function () {
      var t = !0,
          e = !0,
          n = m(this._element).closest(b)[0];if (n) {
        var i = m(this._element).find(S)[0];if (i) {
          if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1;else {
            var r = m(n).find(w)[0];r && m(r).removeClass(C);
          }if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;i.checked = !m(this._element).hasClass(C), m(i).trigger("change");
          }i.focus(), e = !1;
        }
      }e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C);
    }, t.dispose = function () {
      m.removeData(this._element, v), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = m(this).data(v);t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]();
      });
    }, o(n, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), n;
  }(), m(document).on(O.CLICK_DATA_API, D, function (t) {
    t.preventDefault();var e = t.target;m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = m(t.target).closest(N)[0];m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
  }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
    return m.fn[p] = T, k._jQueryInterface;
  }, k),
      Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, x = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, U = "next", K = "prev", F = "left", V = "right", Q = { SLIDE: "slide" + R, SLID: "slid" + R, KEYDOWN: "keydown" + R, MOUSEENTER: "mouseenter" + R, MOUSELEAVE: "mouseleave" + R, TOUCHEND: "touchend" + R, LOAD_DATA_API: "load" + R + H, CLICK_DATA_API: "click" + R + H }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' }, $ = function () {
    function s(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners();
    }var t = s.prototype;return t.next = function () {
      this._isSliding || this._slide(U);
    }, t.nextWhenVisible = function () {
      !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(K);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();var i = n < t ? U : K;this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t;
    }, t._addEventListeners = function () {
      var e = this;this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
          return e.cycle(t);
        }, 500 + e._config.interval);
      }));
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
          t.preventDefault(), this.prev();break;case 39:
          t.preventDefault(), this.next();}
    }, t._getItemIndex = function (t) {
      return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === U,
          i = t === K,
          r = this._getItemIndex(e),
          s = this._items.length - 1;if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;var o = (r + (t === K ? -1 : 1)) % this._items.length;return -1 === o ? this._items[this._items.length - 1] : this._items[o];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
          r = P.Event(Q.SLIDE, { relatedTarget: t, direction: e, from: i, to: n });return P(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);var e = this._indicatorsElement.children[this._getItemIndex(t)];e && P(e).addClass(Y);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          r,
          s = this,
          o = P(this._element).find(Z.ACTIVE_ITEM)[0],
          a = this._getItemIndex(o),
          l = e || o && this._getItemByDirection(t, o),
          h = this._getItemIndex(l),
          c = Boolean(this._interval);if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
        this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);var u = P.Event(Q.SLID, { relatedTarget: l, direction: r, from: a, to: h });if (P(this._element).hasClass(G)) {
          P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);var f = Cn.getTransitionDurationFromElement(o);P(o).one(Cn.TRANSITION_END, function () {
            P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () {
              return P(s._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(f);
        } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);c && this.cycle();
      }
    }, s._jQueryInterface = function (i) {
      return this.each(function () {
        var t = P(this).data(j),
            e = h({}, M, P(this).data());"object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (e = h({}, e, i));var n = "string" == typeof i ? i : e.slide;if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, s._dataApiClickHandler = function (t) {
      var e = Cn.getSelectorFromElement(this);if (e) {
        var n = P(e)[0];if (n && P(n).hasClass(B)) {
          var i = h({}, P(n).data(), P(this).data()),
              r = this.getAttribute("data-slide-to");r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault();
        }
      }
    }, o(s, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return M;
      } }]), s;
  }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
    P(Z.DATA_RIDE).each(function () {
      var t = P(this);$._jQueryInterface.call(t, t.data());
    });
  }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () {
    return P.fn[L] = W, $._jQueryInterface;
  }, $),
      bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = { toggle: !0, parent: "" }, ot = { toggle: "boolean", parent: "(string|element)" }, at = { SHOW: "show" + it, SHOWN: "shown" + it, HIDE: "hide" + it, HIDDEN: "hidden" + it, CLICK_DATA_API: "click" + it + ".data-api" }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = { ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' }, gt = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
        var r = n[i],
            s = Cn.getSelectorFromElement(r);null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var t = a.prototype;return t.toggle = function () {
      tt(this._element).hasClass(lt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
        var i = tt.Event(at.SHOW);if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));var r = this._getDimension();tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              o = Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END, function () {
            tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN);
          }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
        var e = tt.Event(at.HIDE);if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
            var r = this._triggerArray[i],
                s = Cn.getSelectorFromElement(r);if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[n] = "";var o = Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END, function () {
            t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN);
          }).emulateTransitionEnd(o);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t;
    }, t._getDimension = function () {
      return tt(this._element).hasClass(ft) ? ft : dt;
    }, t._getParent = function () {
      var n = this,
          t = null;Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return tt(t).find(e).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = tt(t).hasClass(lt);0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = Cn.getSelectorFromElement(t);return e ? tt(e)[0] : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = tt(this),
            e = t.data(nt),
            n = h({}, st, t.data(), "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? i : {});if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
        }
      });
    }, o(a, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return st;
      } }]), a;
  }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();var n = tt(this),
        e = Cn.getSelectorFromElement(this);tt(e).each(function () {
      var t = tt(this),
          e = t.data(nt) ? "toggle" : n.data();gt._jQueryInterface.call(t, e);
    });
  }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () {
    return tt.fn[et] = rt, gt._jQueryInterface;
  }, gt),
      Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = { HIDE: "hide" + Et, HIDDEN: "hidden" + Et, SHOW: "show" + Et, SHOWN: "shown" + Et, CLICK: "click" + Et, CLICK_DATA_API: "click" + Et + yt, KEYDOWN_DATA_API: "keydown" + Et + yt, KEYUP_DATA_API: "keyup" + Et + yt }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic" }, Vt = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string" }, Qt = function () {
    function l(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var t = l.prototype;return t.toggle = function () {
      if (!this._element.disabled && !mt(this._element).hasClass(At)) {
        var t = l._getParentFromElement(this._element),
            e = mt(this._menu).hasClass(Dt);if (l._clearMenus(), !e) {
          var n = { relatedTarget: this._element },
              i = mt.Event(It.SHOW, n);if (mt(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r = this._element;"parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig());
            }"ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n));
          }
        }
      }
    }, t.dispose = function () {
      mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;mt(this._element).on(It.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = l._getParentFromElement(this._element);this._menu = mt(t).find(Lt)[0];
      }return this._menu;
    }, t._getPlacement = function () {
      var t = mt(this._element).parent(),
          e = Mt;return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e;
    }, t._detectNavbar = function () {
      return 0 < mt(this._element).closest(".navbar").length;
    }, t._getPopperConfig = function () {
      var e = this,
          t = {};"function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t;
      } : t.offset = this._config.offset;var n = { placement: this._getPlacement(), modifiers: { offset: t, flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (n.modifiers.applyStyle = { enabled: !1 }), n;
    }, l._jQueryInterface = function (e) {
      return this.each(function () {
        var t = mt(this).data(vt);if (t || (t = new l(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, l._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
        var i = l._getParentFromElement(e[n]),
            r = mt(e[n]).data(vt),
            s = { relatedTarget: e[n] };if (r) {
          var o = r._menu;if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
            var a = mt.Event(It.HIDE, s);mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)));
          }
        }
      }
    }, l._getParentFromElement = function (t) {
      var e,
          n = Cn.getSelectorFromElement(t);return n && (e = mt(n)[0]), e || t.parentNode;
    }, l._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
        var e = l._getParentFromElement(this),
            n = mt(e).hasClass(Dt);if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = mt(e).find(Rt).get();if (0 !== i.length) {
            var r = i.indexOf(t.target);38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === t.which) {
            var s = mt(e).find(kt)[0];mt(s).trigger("focus");
          }mt(this).trigger("click");
        }
      }
    }, o(l, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Ft;
      } }, { key: "DefaultType", get: function get() {
        return Vt;
      } }]), l;
  }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function (t) {
    t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle");
  }).on(It.CLICK_DATA_API, Pt, function (t) {
    t.stopPropagation();
  }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function () {
    return mt.fn[pt] = Tt, Qt._jQueryInterface;
  }, Qt),
      wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Jt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Zt = { HIDE: "hide" + qt, HIDDEN: "hidden" + qt, SHOW: "show" + qt, SHOWN: "shown" + qt, FOCUSIN: "focusin" + qt, RESIZE: "resize" + qt, CLICK_DISMISS: "click.dismiss" + qt, KEYDOWN_DISMISS: "keydown.dismiss" + qt, MOUSEUP_DISMISS: "mouseup.dismiss" + qt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt, CLICK_DATA_API: "click" + qt + ".data-api" }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler" }, se = function () {
    function r(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }var t = r.prototype;return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;if (!this._isTransitioning && !this._isShown) {
        Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);var n = Bt.Event(Zt.SHOW, { relatedTarget: t });Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) {
          return e.hide(t);
        }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
          Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
            Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = Bt.Event(Zt.HIDE);if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;var i = Bt(this._element).hasClass(ne);if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
            var r = Cn.getTransitionDurationFromElement(this._element);Bt(this._element).one(Cn.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t;
    }, t._showElement = function (t) {
      var e = this,
          n = Bt(this._element).hasClass(ne);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i);
      };if (n) {
        var s = Cn.getTransitionDurationFromElement(this._element);Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
      } else r();
    }, t._enforceFocus = function () {
      var e = this;Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;this._isShown ? Bt(window).on(Zt.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : Bt(window).off(Zt.RESIZE);
    }, t._hideModal = function () {
      var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = Bt(this._element).hasClass(ne) ? ne : "";if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;if (!n) return void t();var i = Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        Bt(this._backdrop).removeClass(ie);var r = function r() {
          e._removeBackdrop(), t && t();
        };if (Bt(this._element).hasClass(ne)) {
          var s = Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var r = this;if (this._isBodyOverflowing) {
        Bt(re.FIXED_CONTENT).each(function (t, e) {
          var n = Bt(e)[0].style.paddingRight,
              i = Bt(e).css("padding-right");Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), Bt(re.STICKY_CONTENT).each(function (t, e) {
          var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        }), Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
        });var t = document.body.style.paddingRight,
            e = Bt(document.body).css("padding-right");Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
      }
    }, t._resetScrollbar = function () {
      Bt(re.FIXED_CONTENT).each(function (t, e) {
        var n = Bt(e).data("padding-right");"undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right");
      }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) {
        var n = Bt(e).data("margin-right");"undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right");
      });var t = Bt(document.body).data("padding-right");"undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right");
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");t.className = $t, document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = Bt(this).data(Gt),
            e = h({}, Xt, Bt(this).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n](i);
        } else e.show && t.show(i);
      });
    }, o(r, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Xt;
      } }]), r;
  }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
    var e,
        n = this,
        i = Cn.getSelectorFromElement(this);i && (e = Bt(i)[0]);var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var s = Bt(e).one(Zt.SHOW, function (t) {
      t.isDefaultPrevented() || s.one(Zt.HIDDEN, function () {
        Bt(n).is(":visible") && n.focus();
      });
    });se._jQueryInterface.call(Bt(e), r, this);
  }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function () {
    return Bt.fn[Yt] = zt, se._jQueryInterface;
  }, se),
      Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(_e = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" }), selector: !(de = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)" }), placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent" }, pe = "out", ve = { HIDE: "hide" + he, HIDDEN: "hidden" + he, SHOW: (me = "show") + he, SHOWN: "shown" + he, INSERTED: "inserted" + he, CLICK: "click" + he, FOCUSIN: "focusin" + he, FOCUSOUT: "focusout" + he, MOUSEENTER: "mouseenter" + he, MOUSELEAVE: "mouseleave" + he }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function () {
    function i(t, e) {
      if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }var t = i.prototype;return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = oe(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");var t = oe.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        oe(this.element).trigger(t);var n = oe.contains(this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !n) return;var i = this.getTipElement(),
            r = Cn.getUID(this.constructor.NAME);i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            o = this._getAttachment(s);this.addAttachmentClass(o);var a = !1 === this.config.container ? document.body : oe(this.config.container);oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, { placement: o, modifiers: { offset: { offset: this.config.offset }, flip: { behavior: this.config.fallbackPlacement }, arrow: { element: Ce }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          }, onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          } }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);var l = function l() {
          e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e);
        };if (oe(this.tip).hasClass(Ee)) {
          var h = Cn.getTransitionDurationFromElement(this.tip);oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h);
        } else l();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = oe.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
          var s = Cn.getTransitionDurationFromElement(n);oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      oe(this.getTipElement()).addClass(ue + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || oe(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = oe(this.getTipElement());this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye);
    }, t.setElementContent = function (t, e) {
      var n = this.config.html;"object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e);
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getAttachment = function (t) {
      return _e[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== be) {
          var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;oe(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }oe(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = h({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === me && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === pe && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }return !1;
    }, t._getConfig = function (t) {
      return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t;
    }, t._getDelegateConfig = function () {
      var t = {};if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }return t;
    }, t._cleanTipClass = function () {
      var t = oe(this.getTipElement()),
          e = t.attr("class").match(fe);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = oe(this).data(le),
            e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, o(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return ge;
      } }, { key: "NAME", get: function get() {
        return ae;
      } }, { key: "DATA_KEY", get: function get() {
        return le;
      } }, { key: "Event", get: function get() {
        return ve;
      } }, { key: "EVENT_KEY", get: function get() {
        return he;
      } }, { key: "DefaultType", get: function get() {
        return de;
      } }]), i;
  }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function () {
    return oe.fn[ae] = ce, Se._jQueryInterface;
  }, Se),
      On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }), He = h({}, Nn.DefaultType, { content: "(string|element|function)" }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = { HIDE: "hide" + ke, HIDDEN: "hidden" + ke, SHOW: (Me = "show") + ke, SHOWN: "shown" + ke, INSERTED: "inserted" + ke, CLICK: "click" + ke, FOCUSIN: "focusin" + ke, FOCUSOUT: "focusout" + ke, MOUSEENTER: "mouseenter" + ke, MOUSELEAVE: "mouseleave" + ke }, Fe = function (t) {
    var e, n;function i() {
      return t.apply(this, arguments) || this;
    }n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;var r = i.prototype;return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (t) {
      we(this.getTipElement()).addClass(Le + "-" + t);
    }, r.getTipElement = function () {
      return this.tip = this.tip || we(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var t = we(this.getTipElement());this.setElementContent(t.find(xe), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = we(this.getTipElement()),
          e = t.attr("class").match(je);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = we(this).data(Oe),
            e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? n : null;if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, o(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return Re;
      } }, { key: "NAME", get: function get() {
        return Ne;
      } }, { key: "DATA_KEY", get: function get() {
        return Oe;
      } }, { key: "Event", get: function get() {
        return Ke;
      } }, { key: "EVENT_KEY", get: function get() {
        return ke;
      } }, { key: "DefaultType", get: function get() {
        return He;
      } }]), i;
  }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function () {
    return we.fn[Ne] = Pe, Fe._jQueryInterface;
  }, Fe),
      kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = { offset: 10, method: "auto", target: "" }, ze = { offset: "number", method: "string", target: "(string|element)" }, Xe = { ACTIVATE: "activate" + Ye, SCROLL: "scroll" + Ye, LOAD_DATA_API: "load" + Ye + ".data-api" }, Je = "dropdown-item", Ze = "active", $e = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" }, tn = "offset", en = "position", nn = function () {
    function n(t, e) {
      var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }var t = n.prototype;return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? tn : en,
          r = "auto" === this._config.method ? t : this._config.method,
          s = r === en ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function (t) {
        var e,
            n = Cn.getSelectorFromElement(t);if (n && (e = Ve(n)[0]), e) {
          var i = e.getBoundingClientRect();if (i.width || i.height) return [Ve(e)[r]().top + s, n];
        }return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = h({}, qe, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).target) {
        var e = Ve(t.target).attr("id");e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e;
      }return Cn.typeCheckConfig(Qe, t, ze), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",");t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });var n = Ve(t.join(","));n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, { relatedTarget: e });
    }, t._clear = function () {
      Ve(this._selector).filter($e.ACTIVE).removeClass(Ze);
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = Ve(this).data(Be);if (t || (t = new n(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), Ve(this).data(Be, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, o(n, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }, { key: "Default", get: function get() {
        return qe;
      } }]), n;
  }(), Ve(window).on(Xe.LOAD_DATA_API, function () {
    for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
      var n = Ve(t[e]);nn._jQueryInterface.call(n, n.data());
    }
  }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function () {
    return Ve.fn[Qe] = Ge, nn._jQueryInterface;
  }, nn),
      Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = { HIDE: "hide" + on, HIDDEN: "hidden" + on, SHOW: "show" + on, SHOWN: "shown" + on, CLICK_DATA_API: "click" + on + ".data-api" }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function () {
    function i(t) {
      this._element = t;
    }var t = i.prototype;return t.show = function () {
      var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
        var t,
            i,
            e = rn(this._element).closest(gn)[0],
            r = Cn.getSelectorFromElement(this._element);if (e) {
          var s = "UL" === e.nodeName ? pn : mn;i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
        }var o = rn.Event(ln.HIDE, { relatedTarget: this._element }),
            a = rn.Event(ln.SHOW, { relatedTarget: i });if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
          r && (t = rn(r)[0]), this._activate(this._element, e);var l = function l() {
            var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }),
                e = rn.Event(ln.SHOWN, { relatedTarget: i });rn(i).trigger(t), rn(n._element).trigger(e);
          };t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      rn.removeData(this._element, sn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
          s = n && r && rn(r).hasClass(fn),
          o = function o() {
        return i._transitionComplete(t, r, n);
      };if (r && s) {
        var a = Cn.getTransitionDurationFromElement(r);rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a);
      } else o();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        rn(e).removeClass(dn + " " + cn);var i = rn(e.parentNode).find(yn)[0];i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
        var r = rn(t).closest(_n)[0];r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0);
      }n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = rn(this),
            e = t.data(sn);if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');e[n]();
        }
      });
    }, o(i, null, [{ key: "VERSION", get: function get() {
        return "4.1.1";
      } }]), i;
  }(), rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
    t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show");
  }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function () {
    return rn.fn.tab = an, Tn._jQueryInterface;
  }, Tn);!function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=bootstrap.min.js.map
/* @preserve
 * Leaflet 1.3.1+Detached: ba6f97fff8647e724e4dfe66d2ed7da11f908989.ba6f97f, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function (t, i) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {});
}(this, function (t) {
  "use strict";
  function i(t) {
    var i, e, n, o;for (e = 1, n = arguments.length; e < n; e++) {
      o = arguments[e];for (i in o) {
        t[i] = o[i];
      }
    }return t;
  }function e(t, i) {
    var e = Array.prototype.slice;if (t.bind) return t.bind.apply(t, e.call(arguments, 1));var n = e.call(arguments, 2);return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }function n(t) {
    return t._leaflet_id = t._leaflet_id || ++ti, t._leaflet_id;
  }function o(t, i, e) {
    var n, o, s, r;return r = function r() {
      n = !1, o && (s.apply(e, o), o = !1);
    }, s = function s() {
      n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0);
    };
  }function s(t, i, e) {
    var n = i[1],
        o = i[0],
        s = n - o;return t === n && e ? t : ((t - o) % s + s) % s + o;
  }function r() {
    return !1;
  }function a(t, i) {
    var e = Math.pow(10, void 0 === i ? 6 : i);return Math.round(t * e) / e;
  }function h(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }function u(t) {
    return h(t).split(/\s+/);
  }function l(t, i) {
    t.hasOwnProperty("options") || (t.options = t.options ? Qt(t.options) : {});for (var e in i) {
      t.options[e] = i[e];
    }return t.options;
  }function c(t, i, e) {
    var n = [];for (var o in t) {
      n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
    }return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&");
  }function _(t, i) {
    return t.replace(ii, function (t, e) {
      var n = i[e];if (void 0 === n) throw new Error("No value provided for variable " + t);return "function" == typeof n && (n = n(i)), n;
    });
  }function d(t, i) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] === i) return e;
    }return -1;
  }function p(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }function m(t) {
    var i = +new Date(),
        e = Math.max(0, 16 - (i - oi));return oi = i + e, window.setTimeout(t, e);
  }function f(t, i, n) {
    if (!n || si !== m) return si.call(window, e(t, i));t.call(i);
  }function g(t) {
    t && ri.call(window, t);
  }function v() {}function y(t) {
    if ("undefined" != typeof L && L && L.Mixin) {
      t = ei(t) ? t : [t];for (var i = 0; i < t.length; i++) {
        t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
      }
    }
  }function x(t, i, e) {
    this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i;
  }function w(t, i, e) {
    return t instanceof x ? t : ei(t) ? new x(t[0], t[1]) : void 0 === t || null === t ? t : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "x" in t && "y" in t ? new x(t.x, t.y) : new x(t, i, e);
  }function P(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }function b(t, i) {
    return !t || t instanceof P ? t : new P(t, i);
  }function T(t, i) {
    if (t) for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) {
      this.extend(e[n]);
    }
  }function z(t, i) {
    return t instanceof T ? t : new T(t, i);
  }function M(t, i, e) {
    if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e);
  }function C(t, i, e) {
    return t instanceof M ? t : ei(t) && "object" != _typeof(t[0]) ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : void 0 === t || null === t ? t : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new M(t, i, e);
  }function Z(t, i, e, n) {
    if (ei(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);this._a = t, this._b = i, this._c = e, this._d = n;
  }function S(t, i, e, n) {
    return new Z(t, i, e, n);
  }function E(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }function k(t, i) {
    var e,
        n,
        o,
        s,
        r,
        a,
        h = "";for (e = 0, o = t.length; e < o; e++) {
      for (n = 0, s = (r = t[e]).length; n < s; n++) {
        a = r[n], h += (n ? "L" : "M") + a.x + " " + a.y;
      }h += i ? Xi ? "z" : "x" : "";
    }return h || "M0 0";
  }function A(t) {
    return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
  }function I(t, i, e, n) {
    return "touchstart" === i ? O(t, e, n) : "touchmove" === i ? W(t, e, n) : "touchend" === i && H(t, e, n), this;
  }function B(t, i, e) {
    var n = t["_leaflet_" + i + e];return "touchstart" === i ? t.removeEventListener(Qi, n, !1) : "touchmove" === i ? t.removeEventListener(te, n, !1) : "touchend" === i && (t.removeEventListener(ie, n, !1), t.removeEventListener(ee, n, !1)), this;
  }function O(t, i, n) {
    var o = e(function (t) {
      if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
        if (!(ne.indexOf(t.target.tagName) < 0)) return;$(t);
      }j(t, i);
    });t["_leaflet_touchstart" + n] = o, t.addEventListener(Qi, o, !1), se || (document.documentElement.addEventListener(Qi, R, !0), document.documentElement.addEventListener(te, D, !0), document.documentElement.addEventListener(ie, N, !0), document.documentElement.addEventListener(ee, N, !0), se = !0);
  }function R(t) {
    oe[t.pointerId] = t, re++;
  }function D(t) {
    oe[t.pointerId] && (oe[t.pointerId] = t);
  }function N(t) {
    delete oe[t.pointerId], re--;
  }function j(t, i) {
    t.touches = [];for (var e in oe) {
      t.touches.push(oe[e]);
    }t.changedTouches = [t], i(t);
  }function W(t, i, e) {
    var n = function n(t) {
      (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && j(t, i);
    };t["_leaflet_touchmove" + e] = n, t.addEventListener(te, n, !1);
  }function H(t, i, e) {
    var n = function n(t) {
      j(t, i);
    };t["_leaflet_touchend" + e] = n, t.addEventListener(ie, n, !1), t.addEventListener(ee, n, !1);
  }function F(t, i, e) {
    function n(t) {
      var i;if (Ui) {
        if (!Pi || "mouse" === t.pointerType) return;i = re;
      } else i = t.touches.length;if (!(i > 1)) {
        var e = Date.now(),
            n = e - (s || e);r = t.touches ? t.touches[0] : t, a = n > 0 && n <= h, s = e;
      }
    }function o(t) {
      if (a && !r.cancelBubble) {
        if (Ui) {
          if (!Pi || "mouse" === t.pointerType) return;var e,
              n,
              o = {};for (n in r) {
            e = r[n], o[n] = e && e.bind ? e.bind(r) : e;
          }r = o;
        }r.type = "dblclick", i(r), s = null;
      }
    }var s,
        r,
        a = !1,
        h = 250;return t[ue + ae + e] = n, t[ue + he + e] = o, t[ue + "dblclick" + e] = i, t.addEventListener(ae, n, !1), t.addEventListener(he, o, !1), t.addEventListener("dblclick", i, !1), this;
  }function U(t, i) {
    var e = t[ue + ae + i],
        n = t[ue + he + i],
        o = t[ue + "dblclick" + i];return t.removeEventListener(ae, e, !1), t.removeEventListener(he, n, !1), Pi || t.removeEventListener("dblclick", o, !1), this;
  }function V(t, i, e, n) {
    if ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i))) for (var o in i) {
      G(t, o, i[o], e);
    } else for (var s = 0, r = (i = u(i)).length; s < r; s++) {
      G(t, i[s], e, n);
    }return this;
  }function q(t, i, e, n) {
    if ("object" == (typeof i === "undefined" ? "undefined" : _typeof(i))) for (var o in i) {
      K(t, o, i[o], e);
    } else if (i) for (var s = 0, r = (i = u(i)).length; s < r; s++) {
      K(t, i[s], e, n);
    } else {
      for (var a in t[le]) {
        K(t, a, t[le][a]);
      }delete t[le];
    }return this;
  }function G(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : "");if (t[le] && t[le][s]) return this;var r = function r(i) {
      return e.call(o || t, i || window.event);
    },
        a = r;Ui && 0 === i.indexOf("touch") ? I(t, i, r, s) : !Vi || "dblclick" !== i || !F || Ui && Si ? "addEventListener" in t ? "mousewheel" === i ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : "mouseenter" === i || "mouseleave" === i ? (r = function r(i) {
      i = i || window.event, ot(t, i) && a(i);
    }, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", r, !1)) : ("click" === i && Ti && (r = function r(t) {
      st(t, a);
    }), t.addEventListener(i, r, !1)) : "attachEvent" in t && t.attachEvent("on" + i, r) : F(t, r, s), t[le] = t[le] || {}, t[le][s] = r;
  }function K(t, i, e, o) {
    var s = i + n(e) + (o ? "_" + n(o) : ""),
        r = t[le] && t[le][s];if (!r) return this;Ui && 0 === i.indexOf("touch") ? B(t, i, s) : !Vi || "dblclick" !== i || !U || Ui && Si ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, r, !1) : "detachEvent" in t && t.detachEvent("on" + i, r) : U(t, s), t[le][s] = null;
  }function Y(t) {
    return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, nt(t), this;
  }function X(t) {
    return G(t, "mousewheel", Y), this;
  }function J(t) {
    return V(t, "mousedown touchstart dblclick", Y), G(t, "click", et), this;
  }function $(t) {
    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
  }function Q(t) {
    return $(t), Y(t), this;
  }function tt(t, i) {
    if (!i) return new x(t.clientX, t.clientY);var e = i.getBoundingClientRect(),
        n = e.width / i.offsetWidth || 1,
        o = e.height / i.offsetHeight || 1;return new x(t.clientX / n - e.left - i.clientLeft, t.clientY / o - e.top - i.clientTop);
  }function it(t) {
    return Pi ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ce : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0;
  }function et(t) {
    _e[t.type] = !0;
  }function nt(t) {
    var i = _e[t.type];return _e[t.type] = !1, i;
  }function ot(t, i) {
    var e = i.relatedTarget;if (!e) return !0;try {
      for (; e && e !== t;) {
        e = e.parentNode;
      }
    } catch (t) {
      return !1;
    }return e !== t;
  }function st(t, i) {
    var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
        n = pi && e - pi;n && n > 100 && n < 500 || t.target._simulatedClick && !t._simulated ? Q(t) : (pi = e, i(t));
  }function rt(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }function at(t, i) {
    var e = t.style[i] || t.currentStyle && t.currentStyle[i];if ((!e || "auto" === e) && document.defaultView) {
      var n = document.defaultView.getComputedStyle(t, null);e = n ? n[i] : null;
    }return "auto" === e ? null : e;
  }function ht(t, i, e) {
    var n = document.createElement(t);return n.className = i || "", e && e.appendChild(n), n;
  }function ut(t) {
    var i = t.parentNode;i && i.removeChild(t);
  }function lt(t) {
    for (; t.firstChild;) {
      t.removeChild(t.firstChild);
    }
  }function ct(t) {
    var i = t.parentNode;i.lastChild !== t && i.appendChild(t);
  }function _t(t) {
    var i = t.parentNode;i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }function dt(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);var e = gt(t);return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
  }function pt(t, i) {
    if (void 0 !== t.classList) for (var e = u(i), n = 0, o = e.length; n < o; n++) {
      t.classList.add(e[n]);
    } else if (!dt(t, i)) {
      var s = gt(t);ft(t, (s ? s + " " : "") + i);
    }
  }function mt(t, i) {
    void 0 !== t.classList ? t.classList.remove(i) : ft(t, h((" " + gt(t) + " ").replace(" " + i + " ", " ")));
  }function ft(t, i) {
    void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i;
  }function gt(t) {
    return void 0 === t.className.baseVal ? t.className : t.className.baseVal;
  }function vt(t, i) {
    "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && yt(t, i);
  }function yt(t, i) {
    var e = !1,
        n = "DXImageTransform.Microsoft.Alpha";try {
      e = t.filters.item(n);
    } catch (t) {
      if (1 === i) return;
    }i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")";
  }function xt(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++) {
      if (t[e] in i) return t[e];
    }return !1;
  }function wt(t, i, e) {
    var n = i || new x(0, 0);t.style[pe] = (Oi ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "");
  }function Lt(t, i) {
    t._leaflet_pos = i, Ni ? wt(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px");
  }function Pt(t) {
    return t._leaflet_pos || new x(0, 0);
  }function bt() {
    V(window, "dragstart", $);
  }function Tt() {
    q(window, "dragstart", $);
  }function zt(t) {
    for (; -1 === t.tabIndex;) {
      t = t.parentNode;
    }t.style && (Mt(), ve = t, ye = t.style.outline, t.style.outline = "none", V(window, "keydown", Mt));
  }function Mt() {
    ve && (ve.style.outline = ye, ve = void 0, ye = void 0, q(window, "keydown", Mt));
  }function Ct(t, i) {
    if (!i || !t.length) return t.slice();var e = i * i;return t = kt(t, e), t = St(t, e);
  }function Zt(t, i, e) {
    return Math.sqrt(Rt(t, i, e, !0));
  }function St(t, i) {
    var e = t.length,
        n = new ((typeof Uint8Array === "undefined" ? "undefined" : _typeof(Uint8Array)) != void 0 + "" ? Uint8Array : Array)(e);n[0] = n[e - 1] = 1, Et(t, n, i, 0, e - 1);var o,
        s = [];for (o = 0; o < e; o++) {
      n[o] && s.push(t[o]);
    }return s;
  }function Et(t, i, e, n, o) {
    var s,
        r,
        a,
        h = 0;for (r = n + 1; r <= o - 1; r++) {
      (a = Rt(t[r], t[n], t[o], !0)) > h && (s = r, h = a);
    }h > e && (i[s] = 1, Et(t, i, e, n, s), Et(t, i, e, s, o));
  }function kt(t, i) {
    for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) {
      Ot(t[n], t[o]) > i && (e.push(t[n]), o = n);
    }return o < s - 1 && e.push(t[s - 1]), e;
  }function At(t, i, e, n, o) {
    var s,
        r,
        a,
        h = n ? Se : Bt(t, e),
        u = Bt(i, e);for (Se = u;;) {
      if (!(h | u)) return [t, i];if (h & u) return !1;a = Bt(r = It(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a);
    }
  }function It(t, i, e, n, o) {
    var s,
        r,
        a = i.x - t.x,
        h = i.y - t.y,
        u = n.min,
        l = n.max;return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new x(s, r, o);
  }function Bt(t, i) {
    var e = 0;return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e;
  }function Ot(t, i) {
    var e = i.x - t.x,
        n = i.y - t.y;return e * e + n * n;
  }function Rt(t, i, e, n) {
    var o,
        s = i.x,
        r = i.y,
        a = e.x - s,
        h = e.y - r,
        u = a * a + h * h;return u > 0 && ((o = ((t.x - s) * a + (t.y - r) * h) / u) > 1 ? (s = e.x, r = e.y) : o > 0 && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new x(s, r);
  }function Dt(t) {
    return !ei(t[0]) || "object" != _typeof(t[0][0]) && void 0 !== t[0][0];
  }function Nt(t) {
    return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Dt(t);
  }function jt(t, i, e) {
    var n,
        o,
        s,
        r,
        a,
        h,
        u,
        l,
        c,
        _ = [1, 4, 2, 8];for (o = 0, u = t.length; o < u; o++) {
      t[o]._code = Bt(t[o], i);
    }for (r = 0; r < 4; r++) {
      for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) {
        a = t[o], h = t[s], a._code & l ? h._code & l || ((c = It(h, a, l, i, e))._code = Bt(c, i), n.push(c)) : (h._code & l && ((c = It(h, a, l, i, e))._code = Bt(c, i), n.push(c)), n.push(a));
      }t = n;
    }return t;
  }function Wt(t, i) {
    var e,
        n,
        o,
        s,
        r = "Feature" === t.type ? t.geometry : t,
        a = r ? r.coordinates : null,
        h = [],
        u = i && i.pointToLayer,
        l = i && i.coordsToLatLng || Ht;if (!a && !r) return null;switch (r.type) {case "Point":
        return e = l(a), u ? u(t, e) : new Xe(e);case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++) {
          e = l(a[o]), h.push(u ? u(t, e) : new Xe(e));
        }return new qe(h);case "LineString":case "MultiLineString":
        return n = Ft(a, "LineString" === r.type ? 0 : 1, l), new tn(n, i);case "Polygon":case "MultiPolygon":
        return n = Ft(a, "Polygon" === r.type ? 1 : 2, l), new en(n, i);case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = Wt({ geometry: r.geometries[o], type: "Feature", properties: t.properties }, i);c && h.push(c);
        }return new qe(h);default:
        throw new Error("Invalid GeoJSON object.");}
  }function Ht(t) {
    return new M(t[1], t[0], t[2]);
  }function Ft(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++) {
      n = i ? Ft(t[s], i - 1, e) : (e || Ht)(t[s]), o.push(n);
    }return o;
  }function Ut(t, i) {
    return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [a(t.lng, i), a(t.lat, i), a(t.alt, i)] : [a(t.lng, i), a(t.lat, i)];
  }function Vt(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++) {
      o.push(i ? Vt(t[s], i - 1, e, n) : Ut(t[s], n));
    }return !i && e && o.push(o[0]), o;
  }function qt(t, e) {
    return t.feature ? i({}, t.feature, { geometry: e }) : Gt(e);
  }function Gt(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type ? t : { type: "Feature", properties: {}, geometry: t };
  }function Kt(t, i) {
    return new nn(t, i);
  }function Yt(t, i) {
    return new dn(t, i);
  }function Xt(t) {
    return Yi ? new fn(t) : null;
  }function Jt(t) {
    return Xi || Ji ? new xn(t) : null;
  }var $t = Object.freeze;Object.freeze = function (t) {
    return t;
  };var Qt = Object.create || function () {
    function t() {}return function (i) {
      return t.prototype = i, new t();
    };
  }(),
      ti = 0,
      ii = /\{ *([\w_-]+) *\}/g,
      ei = Array.isArray || function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  },
      ni = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
      oi = 0,
      si = window.requestAnimationFrame || p("RequestAnimationFrame") || m,
      ri = window.cancelAnimationFrame || p("CancelAnimationFrame") || p("CancelRequestAnimationFrame") || function (t) {
    window.clearTimeout(t);
  },
      ai = (Object.freeze || Object)({ freeze: $t, extend: i, create: Qt, bind: e, lastId: ti, stamp: n, throttle: o, wrapNum: s, falseFn: r, formatNum: a, trim: h, splitWords: u, setOptions: l, getParamString: c, template: _, isArray: ei, indexOf: d, emptyImageUrl: ni, requestFn: si, cancelFn: ri, requestAnimFrame: f, cancelAnimFrame: g });v.extend = function (t) {
    var e = function e() {
      this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
    },
        n = e.__super__ = this.prototype,
        o = Qt(n);o.constructor = e, e.prototype = o;for (var s in this) {
      this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (e[s] = this[s]);
    }return t.statics && (i(e, t.statics), delete t.statics), t.includes && (y(t.includes), i.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = i(Qt(o.options), t.options)), i(o, t), o._initHooks = [], o.callInitHooks = function () {
      if (!this._initHooksCalled) {
        n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;for (var t = 0, i = o._initHooks.length; t < i; t++) {
          o._initHooks[t].call(this);
        }
      }
    }, e;
  }, v.include = function (t) {
    return i(this.prototype, t), this;
  }, v.mergeOptions = function (t) {
    return i(this.prototype.options, t), this;
  }, v.addInitHook = function (t) {
    var i = Array.prototype.slice.call(arguments, 1),
        e = "function" == typeof t ? t : function () {
      this[t].apply(this, i);
    };return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this;
  };var hi = { on: function on(t, i, e) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (var n in t) {
        this._on(n, t[n], i);
      } else for (var o = 0, s = (t = u(t)).length; o < s; o++) {
        this._on(t[o], i, e);
      }return this;
    }, off: function off(t, i, e) {
      if (t) {
        if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) for (var n in t) {
          this._off(n, t[n], i);
        } else for (var o = 0, s = (t = u(t)).length; o < s; o++) {
          this._off(t[o], i, e);
        }
      } else delete this._events;return this;
    }, _on: function _on(t, i, e) {
      this._events = this._events || {};var n = this._events[t];n || (n = [], this._events[t] = n), e === this && (e = void 0);for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++) {
        if (s[r].fn === i && s[r].ctx === e) return;
      }s.push(o);
    }, _off: function _off(t, i, e) {
      var n, o, s;if (this._events && (n = this._events[t])) if (i) {
        if (e === this && (e = void 0), n) for (o = 0, s = n.length; o < s; o++) {
          var a = n[o];if (a.ctx === e && a.fn === i) return a.fn = r, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1);
        }
      } else {
        for (o = 0, s = n.length; o < s; o++) {
          n[o].fn = r;
        }delete this._events[t];
      }
    }, fire: function fire(t, e, n) {
      if (!this.listens(t, n)) return this;var o = i({}, e, { type: t, target: this, sourceTarget: e && e.sourceTarget || this });if (this._events) {
        var s = this._events[t];if (s) {
          this._firingCount = this._firingCount + 1 || 1;for (var r = 0, a = s.length; r < a; r++) {
            var h = s[r];h.fn.call(h.ctx || this, o);
          }this._firingCount--;
        }
      }return n && this._propagateEvent(o), this;
    }, listens: function listens(t, i) {
      var e = this._events && this._events[t];if (e && e.length) return !0;if (i) for (var n in this._eventParents) {
        if (this._eventParents[n].listens(t, i)) return !0;
      }return !1;
    }, once: function once(t, i, n) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
        for (var o in t) {
          this.once(o, t[o], i);
        }return this;
      }var s = e(function () {
        this.off(t, i, n).off(t, s, n);
      }, this);return this.on(t, i, n).on(t, s, n);
    }, addEventParent: function addEventParent(t) {
      return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this;
    }, removeEventParent: function removeEventParent(t) {
      return this._eventParents && delete this._eventParents[n(t)], this;
    }, _propagateEvent: function _propagateEvent(t) {
      for (var e in this._eventParents) {
        this._eventParents[e].fire(t.type, i({ layer: t.target, propagatedFrom: t.target }, t), !0);
      }
    } };hi.addEventListener = hi.on, hi.removeEventListener = hi.clearAllEventListeners = hi.off, hi.addOneTimeEventListener = hi.once, hi.fireEvent = hi.fire, hi.hasEventListeners = hi.listens;var ui = v.extend(hi),
      li = Math.trunc || function (t) {
    return t > 0 ? Math.floor(t) : Math.ceil(t);
  };x.prototype = { clone: function clone() {
      return new x(this.x, this.y);
    }, add: function add(t) {
      return this.clone()._add(w(t));
    }, _add: function _add(t) {
      return this.x += t.x, this.y += t.y, this;
    }, subtract: function subtract(t) {
      return this.clone()._subtract(w(t));
    }, _subtract: function _subtract(t) {
      return this.x -= t.x, this.y -= t.y, this;
    }, divideBy: function divideBy(t) {
      return this.clone()._divideBy(t);
    }, _divideBy: function _divideBy(t) {
      return this.x /= t, this.y /= t, this;
    }, multiplyBy: function multiplyBy(t) {
      return this.clone()._multiplyBy(t);
    }, _multiplyBy: function _multiplyBy(t) {
      return this.x *= t, this.y *= t, this;
    }, scaleBy: function scaleBy(t) {
      return new x(this.x * t.x, this.y * t.y);
    }, unscaleBy: function unscaleBy(t) {
      return new x(this.x / t.x, this.y / t.y);
    }, round: function round() {
      return this.clone()._round();
    }, _round: function _round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }, floor: function floor() {
      return this.clone()._floor();
    }, _floor: function _floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }, ceil: function ceil() {
      return this.clone()._ceil();
    }, _ceil: function _ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }, trunc: function trunc() {
      return this.clone()._trunc();
    }, _trunc: function _trunc() {
      return this.x = li(this.x), this.y = li(this.y), this;
    }, distanceTo: function distanceTo(t) {
      var i = (t = w(t)).x - this.x,
          e = t.y - this.y;return Math.sqrt(i * i + e * e);
    }, equals: function equals(t) {
      return (t = w(t)).x === this.x && t.y === this.y;
    }, contains: function contains(t) {
      return t = w(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
    }, toString: function toString() {
      return "Point(" + a(this.x) + ", " + a(this.y) + ")";
    } }, P.prototype = { extend: function extend(t) {
      return t = w(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this;
    }, getCenter: function getCenter(t) {
      return new x((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t);
    }, getBottomLeft: function getBottomLeft() {
      return new x(this.min.x, this.max.y);
    }, getTopRight: function getTopRight() {
      return new x(this.max.x, this.min.y);
    }, getTopLeft: function getTopLeft() {
      return this.min;
    }, getBottomRight: function getBottomRight() {
      return this.max;
    }, getSize: function getSize() {
      return this.max.subtract(this.min);
    }, contains: function contains(t) {
      var i, e;return (t = "number" == typeof t[0] || t instanceof x ? w(t) : b(t)) instanceof P ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y;
    }, intersects: function intersects(t) {
      t = b(t);var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;return s && r;
    }, overlaps: function overlaps(t) {
      t = b(t);var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;return s && r;
    }, isValid: function isValid() {
      return !(!this.min || !this.max);
    } }, T.prototype = { extend: function extend(t) {
      var i,
          e,
          n = this._southWest,
          o = this._northEast;if (t instanceof M) i = t, e = t;else {
        if (!(t instanceof T)) return t ? this.extend(C(t) || z(t)) : this;if (i = t._southWest, e = t._northEast, !i || !e) return this;
      }return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new M(i.lat, i.lng), this._northEast = new M(e.lat, e.lng)), this;
    }, pad: function pad(t) {
      var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;return new T(new M(i.lat - n, i.lng - o), new M(e.lat + n, e.lng + o));
    }, getCenter: function getCenter() {
      return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
    }, getSouthWest: function getSouthWest() {
      return this._southWest;
    }, getNorthEast: function getNorthEast() {
      return this._northEast;
    }, getNorthWest: function getNorthWest() {
      return new M(this.getNorth(), this.getWest());
    }, getSouthEast: function getSouthEast() {
      return new M(this.getSouth(), this.getEast());
    }, getWest: function getWest() {
      return this._southWest.lng;
    }, getSouth: function getSouth() {
      return this._southWest.lat;
    }, getEast: function getEast() {
      return this._northEast.lng;
    }, getNorth: function getNorth() {
      return this._northEast.lat;
    }, contains: function contains(t) {
      t = "number" == typeof t[0] || t instanceof M || "lat" in t ? C(t) : z(t);var i,
          e,
          n = this._southWest,
          o = this._northEast;return t instanceof T ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng;
    }, intersects: function intersects(t) {
      t = z(t);var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;return s && r;
    }, overlaps: function overlaps(t) {
      t = z(t);var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;return s && r;
    }, toBBoxString: function toBBoxString() {
      return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
    }, equals: function equals(t, i) {
      return !!t && (t = z(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i));
    }, isValid: function isValid() {
      return !(!this._southWest || !this._northEast);
    } }, M.prototype = { equals: function equals(t, i) {
      return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i));
    }, toString: function toString(t) {
      return "LatLng(" + a(this.lat, t) + ", " + a(this.lng, t) + ")";
    }, distanceTo: function distanceTo(t) {
      return _i.distance(this, C(t));
    }, wrap: function wrap() {
      return _i.wrapLatLng(this);
    }, toBounds: function toBounds(t) {
      var i = 180 * t / 40075017,
          e = i / Math.cos(Math.PI / 180 * this.lat);return z([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
    }, clone: function clone() {
      return new M(this.lat, this.lng, this.alt);
    } };var ci = { latLngToPoint: function latLngToPoint(t, i) {
      var e = this.projection.project(t),
          n = this.scale(i);return this.transformation._transform(e, n);
    }, pointToLatLng: function pointToLatLng(t, i) {
      var e = this.scale(i),
          n = this.transformation.untransform(t, e);return this.projection.unproject(n);
    }, project: function project(t) {
      return this.projection.project(t);
    }, unproject: function unproject(t) {
      return this.projection.unproject(t);
    }, scale: function scale(t) {
      return 256 * Math.pow(2, t);
    }, zoom: function zoom(t) {
      return Math.log(t / 256) / Math.LN2;
    }, getProjectedBounds: function getProjectedBounds(t) {
      if (this.infinite) return null;var i = this.projection.bounds,
          e = this.scale(t);return new P(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e));
    }, infinite: !1, wrapLatLng: function wrapLatLng(t) {
      var i = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;return new M(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, i, t.alt);
    }, wrapLatLngBounds: function wrapLatLngBounds(t) {
      var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;if (0 === n && 0 === o) return t;var s = t.getSouthWest(),
          r = t.getNorthEast();return new T(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o));
    } },
      _i = i({}, ci, { wrapLng: [-180, 180], R: 6371e3, distance: function distance(t, i) {
      var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin((i.lat - t.lat) * e / 2),
          r = Math.sin((i.lng - t.lng) * e / 2),
          a = s * s + Math.cos(n) * Math.cos(o) * r * r,
          h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));return this.R * h;
    } }),
      di = { R: 6378137, MAX_LATITUDE: 85.0511287798, project: function project(t) {
      var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);return new x(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2);
    }, unproject: function unproject(t) {
      var i = 180 / Math.PI;return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R);
    }, bounds: function () {
      var t = 6378137 * Math.PI;return new P([-t, -t], [t, t]);
    }() };Z.prototype = { transform: function transform(t, i) {
      return this._transform(t.clone(), i);
    }, _transform: function _transform(t, i) {
      return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t;
    }, untransform: function untransform(t, i) {
      return i = i || 1, new x((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c);
    } };var pi,
      mi,
      fi,
      gi,
      vi = i({}, _i, { code: "EPSG:3857", projection: di, transformation: function () {
      var t = .5 / (Math.PI * di.R);return S(t, .5, -t, .5);
    }() }),
      yi = i({}, vi, { code: "EPSG:900913" }),
      xi = document.documentElement.style,
      wi = "ActiveXObject" in window,
      Li = wi && !document.addEventListener,
      Pi = "msLaunchUri" in navigator && !("documentMode" in document),
      bi = A("webkit"),
      Ti = A("android"),
      zi = A("android 2") || A("android 3"),
      Mi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      Ci = Ti && A("Google") && Mi < 537 && !("AudioNode" in window),
      Zi = !!window.opera,
      Si = A("chrome"),
      Ei = A("gecko") && !bi && !Zi && !wi,
      ki = !Si && A("safari"),
      Ai = A("phantom"),
      Ii = "OTransition" in xi,
      Bi = 0 === navigator.platform.indexOf("Win"),
      Oi = wi && "transition" in xi,
      Ri = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !zi,
      Di = "MozPerspective" in xi,
      Ni = !window.L_DISABLE_3D && (Oi || Ri || Di) && !Ii && !Ai,
      ji = "undefined" != typeof orientation || A("mobile"),
      Wi = ji && bi,
      Hi = ji && Ri,
      Fi = !window.PointerEvent && window.MSPointerEvent,
      Ui = !(!window.PointerEvent && !Fi),
      Vi = !window.L_NO_TOUCH && (Ui || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      qi = ji && Zi,
      Gi = ji && Ei,
      Ki = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      Yi = !!document.createElement("canvas").getContext,
      Xi = !(!document.createElementNS || !E("svg").createSVGRect),
      Ji = !Xi && function () {
    try {
      var t = document.createElement("div");t.innerHTML = '<v:shape adj="1"/>';var i = t.firstChild;return i.style.behavior = "url(#default#VML)", i && "object" == _typeof(i.adj);
    } catch (t) {
      return !1;
    }
  }(),
      $i = (Object.freeze || Object)({ ie: wi, ielt9: Li, edge: Pi, webkit: bi, android: Ti, android23: zi, androidStock: Ci, opera: Zi, chrome: Si, gecko: Ei, safari: ki, phantom: Ai, opera12: Ii, win: Bi, ie3d: Oi, webkit3d: Ri, gecko3d: Di, any3d: Ni, mobile: ji, mobileWebkit: Wi, mobileWebkit3d: Hi, msPointer: Fi, pointer: Ui, touch: Vi, mobileOpera: qi, mobileGecko: Gi, retina: Ki, canvas: Yi, svg: Xi, vml: Ji }),
      Qi = Fi ? "MSPointerDown" : "pointerdown",
      te = Fi ? "MSPointerMove" : "pointermove",
      ie = Fi ? "MSPointerUp" : "pointerup",
      ee = Fi ? "MSPointerCancel" : "pointercancel",
      ne = ["INPUT", "SELECT", "OPTION"],
      oe = {},
      se = !1,
      re = 0,
      ae = Fi ? "MSPointerDown" : Ui ? "pointerdown" : "touchstart",
      he = Fi ? "MSPointerUp" : Ui ? "pointerup" : "touchend",
      ue = "_leaflet_",
      le = "_leaflet_events",
      ce = Bi && Si ? 2 * window.devicePixelRatio : Ei ? window.devicePixelRatio : 1,
      _e = {},
      de = (Object.freeze || Object)({ on: V, off: q, stopPropagation: Y, disableScrollPropagation: X, disableClickPropagation: J, preventDefault: $, stop: Q, getMousePosition: tt, getWheelDelta: it, fakeStop: et, skipped: nt, isExternalTarget: ot, addListener: V, removeListener: q }),
      pe = xt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
      me = xt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
      fe = "webkitTransition" === me || "OTransition" === me ? me + "End" : "transitionend";if ("onselectstart" in document) mi = function mi() {
    V(window, "selectstart", $);
  }, fi = function fi() {
    q(window, "selectstart", $);
  };else {
    var ge = xt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);mi = function mi() {
      if (ge) {
        var t = document.documentElement.style;gi = t[ge], t[ge] = "none";
      }
    }, fi = function fi() {
      ge && (document.documentElement.style[ge] = gi, gi = void 0);
    };
  }var ve,
      ye,
      xe = (Object.freeze || Object)({ TRANSFORM: pe, TRANSITION: me, TRANSITION_END: fe, get: rt, getStyle: at, create: ht, remove: ut, empty: lt, toFront: ct, toBack: _t, hasClass: dt, addClass: pt, removeClass: mt, setClass: ft, getClass: gt, setOpacity: vt, testProp: xt, setTransform: wt, setPosition: Lt, getPosition: Pt, disableTextSelection: mi, enableTextSelection: fi, disableImageDrag: bt, enableImageDrag: Tt, preventOutline: zt, restoreOutline: Mt }),
      we = ui.extend({ run: function run(t, i, e, n) {
      this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Pt(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date(), this.fire("start"), this._animate();
    }, stop: function stop() {
      this._inProgress && (this._step(!0), this._complete());
    }, _animate: function _animate() {
      this._animId = f(this._animate, this), this._step();
    }, _step: function _step(t) {
      var i = +new Date() - this._startTime,
          e = 1e3 * this._duration;i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete());
    }, _runFrame: function _runFrame(t, i) {
      var e = this._startPos.add(this._offset.multiplyBy(t));i && e._round(), Lt(this._el, e), this.fire("step");
    }, _complete: function _complete() {
      g(this._animId), this._inProgress = !1, this.fire("end");
    }, _easeOut: function _easeOut(t) {
      return 1 - Math.pow(1 - t, this._easeOutPower);
    } }),
      Le = ui.extend({ options: { crs: vi, center: void 0, zoom: void 0, minZoom: void 0, maxZoom: void 0, layers: [], maxBounds: void 0, renderer: void 0, zoomAnimation: !0, zoomAnimationThreshold: 4, fadeAnimation: !0, markerZoomAnimation: !0, transform3DLimit: 8388608, zoomSnap: 1, zoomDelta: 1, trackResize: !0 }, initialize: function initialize(t, i) {
      i = l(this, i), this._initContainer(t), this._initLayout(), this._onResize = e(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(C(i.center), i.zoom, { reset: !0 }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = me && Ni && !qi && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), V(this._proxy, fe, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
    }, setView: function setView(t, e, n) {
      return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(C(t), e, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = i({ animate: n.animate }, n.zoom), n.pan = i({ animate: n.animate, duration: n.duration }, n.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, e), this);
    }, setZoom: function setZoom(t, i) {
      return this._loaded ? this.setView(this.getCenter(), t, { zoom: i }) : (this._zoom = t, this);
    }, zoomIn: function zoomIn(t, i) {
      return t = t || (Ni ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i);
    }, zoomOut: function zoomOut(t, i) {
      return t = t || (Ni ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i);
    }, setZoomAround: function setZoomAround(t, i, e) {
      var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = (t instanceof x ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
          r = this.containerPointToLatLng(o.add(s));return this.setView(r, i, { zoom: e });
    }, _getBoundsCenterZoom: function _getBoundsCenterZoom(t, i) {
      i = i || {}, t = t.getBounds ? t.getBounds() : z(t);var e = w(i.paddingTopLeft || i.padding || [0, 0]),
          n = w(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return { center: t.getCenter(), zoom: o };var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o);return { center: this.unproject(r.add(a).divideBy(2).add(s), o), zoom: o };
    }, fitBounds: function fitBounds(t, i) {
      if (!(t = z(t)).isValid()) throw new Error("Bounds are not valid.");var e = this._getBoundsCenterZoom(t, i);return this.setView(e.center, e.zoom, i);
    }, fitWorld: function fitWorld(t) {
      return this.fitBounds([[-90, -180], [90, 180]], t);
    }, panTo: function panTo(t, i) {
      return this.setView(t, this._zoom, { pan: i });
    }, panBy: function panBy(t, i) {
      if (t = w(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;if (this._panAnim || (this._panAnim = new we(), this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
        pt(this._mapPane, "leaflet-pan-anim");var e = this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity);
      } else this._rawPanBy(t), this.fire("move").fire("moveend");return this;
    }, flyTo: function flyTo(t, i, e) {
      function n(t) {
        var i = (g * g - m * m + (t ? -1 : 1) * x * x * v * v) / (2 * (t ? g : m) * x * v),
            e = Math.sqrt(i * i + 1) - i;return e < 1e-9 ? -18 : Math.log(e);
      }function o(t) {
        return (Math.exp(t) - Math.exp(-t)) / 2;
      }function s(t) {
        return (Math.exp(t) + Math.exp(-t)) / 2;
      }function r(t) {
        return o(t) / s(t);
      }function a(t) {
        return m * (s(w) / s(w + y * t));
      }function h(t) {
        return m * (s(w) * r(w + y * t) - o(w)) / x;
      }function u(t) {
        return 1 - Math.pow(1 - t, 1.5);
      }function l() {
        var e = (Date.now() - L) / b,
            n = u(e) * P;e <= 1 ? (this._flyToFrame = f(l, this), this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n) / v)), p), this.getScaleZoom(m / a(n), p), { flyTo: !0 })) : this._move(t, i)._moveEnd(!0);
      }if (!1 === (e = e || {}).animate || !Ni) return this.setView(t, i, e);this._stop();var c = this.project(this.getCenter()),
          _ = this.project(t),
          d = this.getSize(),
          p = this._zoom;t = C(t), i = void 0 === i ? p : i;var m = Math.max(d.x, d.y),
          g = m * this.getZoomScale(p, i),
          v = _.distanceTo(c) || 1,
          y = 1.42,
          x = y * y,
          w = n(0),
          L = Date.now(),
          P = (n(1) - w) / y,
          b = e.duration ? 1e3 * e.duration : 1e3 * P * .8;return this._moveStart(!0, e.noMoveStart), l.call(this), this;
    }, flyToBounds: function flyToBounds(t, i) {
      var e = this._getBoundsCenterZoom(t, i);return this.flyTo(e.center, e.zoom, i);
    }, setMaxBounds: function setMaxBounds(t) {
      return (t = z(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds));
    }, setMinZoom: function setMinZoom(t) {
      var i = this.options.minZoom;return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
    }, setMaxZoom: function setMaxZoom(t) {
      var i = this.options.maxZoom;return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
    }, panInsideBounds: function panInsideBounds(t, i) {
      this._enforcingBounds = !0;var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, z(t));return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this;
    }, invalidateSize: function invalidateSize(t) {
      if (!this._loaded) return this;t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);var n = this.getSize();this._sizeChanged = !0, this._lastCenter = null;var o = this.getSize(),
          s = n.divideBy(2).round(),
          r = o.divideBy(2).round(),
          a = s.subtract(r);return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: n, newSize: o })) : this;
    }, stop: function stop() {
      return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
    }, locate: function locate(t) {
      if (t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t), !("geolocation" in navigator)) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;var n = e(this._handleGeolocationResponse, this),
          o = e(this._handleGeolocationError, this);return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this;
    }, stopLocate: function stopLocate() {
      return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
    }, _handleGeolocationError: function _handleGeolocationError(t) {
      var i = t.code,
          e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: i, message: "Geolocation error: " + e + "." });
    }, _handleGeolocationResponse: function _handleGeolocationResponse(t) {
      var i = new M(t.coords.latitude, t.coords.longitude),
          e = i.toBounds(t.coords.accuracy),
          n = this._locateOptions;if (n.setView) {
        var o = this.getBoundsZoom(e);this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o);
      }var s = { latlng: i, bounds: e, timestamp: t.timestamp };for (var r in t.coords) {
        "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
      }this.fire("locationfound", s);
    }, addHandler: function addHandler(t, i) {
      if (!i) return this;var e = this[t] = new i(this);return this._handlers.push(e), this.options[t] && e.enable(), this;
    }, remove: function remove() {
      if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");try {
        delete this._container._leaflet_id, delete this._containerId;
      } catch (t) {
        this._container._leaflet_id = void 0, this._containerId = void 0;
      }void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ut(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");var t;for (t in this._layers) {
        this._layers[t].remove();
      }for (t in this._panes) {
        ut(this._panes[t]);
      }return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
    }, createPane: function createPane(t, i) {
      var e = ht("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);return t && (this._panes[t] = e), e;
    }, getCenter: function getCenter() {
      return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint());
    }, getZoom: function getZoom() {
      return this._zoom;
    }, getBounds: function getBounds() {
      var t = this.getPixelBounds();return new T(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()));
    }, getMinZoom: function getMinZoom() {
      return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom;
    }, getMaxZoom: function getMaxZoom() {
      return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
    }, getBoundsZoom: function getBoundsZoom(t, i, e) {
      t = z(t), e = w(e || [0, 0]);var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = b(this.project(a, n), this.project(r, n)).getSize(),
          l = Ni ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _);return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n));
    }, getSize: function getSize() {
      return this._size && !this._sizeChanged || (this._size = new x(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone();
    }, getPixelBounds: function getPixelBounds(t, i) {
      var e = this._getTopLeftPoint(t, i);return new P(e, e.add(this.getSize()));
    }, getPixelOrigin: function getPixelOrigin() {
      return this._checkIfLoaded(), this._pixelOrigin;
    }, getPixelWorldBounds: function getPixelWorldBounds(t) {
      return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t);
    }, getPane: function getPane(t) {
      return "string" == typeof t ? this._panes[t] : t;
    }, getPanes: function getPanes() {
      return this._panes;
    }, getContainer: function getContainer() {
      return this._container;
    }, getZoomScale: function getZoomScale(t, i) {
      var e = this.options.crs;return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i);
    }, getScaleZoom: function getScaleZoom(t, i) {
      var e = this.options.crs;i = void 0 === i ? this._zoom : i;var n = e.zoom(t * e.scale(i));return isNaN(n) ? 1 / 0 : n;
    }, project: function project(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(C(t), i);
    }, unproject: function unproject(t, i) {
      return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(w(t), i);
    }, layerPointToLatLng: function layerPointToLatLng(t) {
      var i = w(t).add(this.getPixelOrigin());return this.unproject(i);
    }, latLngToLayerPoint: function latLngToLayerPoint(t) {
      return this.project(C(t))._round()._subtract(this.getPixelOrigin());
    }, wrapLatLng: function wrapLatLng(t) {
      return this.options.crs.wrapLatLng(C(t));
    }, wrapLatLngBounds: function wrapLatLngBounds(t) {
      return this.options.crs.wrapLatLngBounds(z(t));
    }, distance: function distance(t, i) {
      return this.options.crs.distance(C(t), C(i));
    }, containerPointToLayerPoint: function containerPointToLayerPoint(t) {
      return w(t).subtract(this._getMapPanePos());
    }, layerPointToContainerPoint: function layerPointToContainerPoint(t) {
      return w(t).add(this._getMapPanePos());
    }, containerPointToLatLng: function containerPointToLatLng(t) {
      var i = this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i);
    }, latLngToContainerPoint: function latLngToContainerPoint(t) {
      return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)));
    }, mouseEventToContainerPoint: function mouseEventToContainerPoint(t) {
      return tt(t, this._container);
    }, mouseEventToLayerPoint: function mouseEventToLayerPoint(t) {
      return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
    }, mouseEventToLatLng: function mouseEventToLatLng(t) {
      return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
    }, _initContainer: function _initContainer(t) {
      var i = this._container = rt(t);if (!i) throw new Error("Map container not found.");if (i._leaflet_id) throw new Error("Map container is already initialized.");V(i, "scroll", this._onScroll, this), this._containerId = n(i);
    }, _initLayout: function _initLayout() {
      var t = this._container;this._fadeAnimated = this.options.fadeAnimation && Ni, pt(t, "leaflet-container" + (Vi ? " leaflet-touch" : "") + (Ki ? " leaflet-retina" : "") + (Li ? " leaflet-oldie" : "") + (ki ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));var i = at(t, "position");"absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
    }, _initPanes: function _initPanes() {
      var t = this._panes = {};this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Lt(this._mapPane, new x(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (pt(t.markerPane, "leaflet-zoom-hide"), pt(t.shadowPane, "leaflet-zoom-hide"));
    }, _resetView: function _resetView(t, i) {
      Lt(this._mapPane, new x(0, 0));var e = !this._loaded;this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");var n = this._zoom !== i;this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load");
    }, _moveStart: function _moveStart(t, i) {
      return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
    }, _move: function _move(t, i, e) {
      void 0 === i && (i = this._zoom);var n = this._zoom !== i;return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e);
    }, _moveEnd: function _moveEnd(t) {
      return t && this.fire("zoomend"), this.fire("moveend");
    }, _stop: function _stop() {
      return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
    }, _rawPanBy: function _rawPanBy(t) {
      Lt(this._mapPane, this._getMapPanePos().subtract(t));
    }, _getZoomSpan: function _getZoomSpan() {
      return this.getMaxZoom() - this.getMinZoom();
    }, _panInsideMaxBounds: function _panInsideMaxBounds() {
      this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
    }, _checkIfLoaded: function _checkIfLoaded() {
      if (!this._loaded) throw new Error("Set map center and zoom first.");
    }, _initEvents: function _initEvents(t) {
      this._targets = {}, this._targets[n(this._container)] = this;var i = t ? q : V;i(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), Ni && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
    }, _onResize: function _onResize() {
      g(this._resizeRequest), this._resizeRequest = f(function () {
        this.invalidateSize({ debounceMoveend: !0 });
      }, this);
    }, _onScroll: function _onScroll() {
      this._container.scrollTop = 0, this._container.scrollLeft = 0;
    }, _onMoveEnd: function _onMoveEnd() {
      var t = this._getMapPanePos();Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
    }, _findEventTargets: function _findEventTargets(t, i) {
      for (var e, o = [], s = "mouseout" === i || "mouseover" === i, r = t.target || t.srcElement, a = !1; r;) {
        if ((e = this._targets[n(r)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
          a = !0;break;
        }if (e && e.listens(i, !0)) {
          if (s && !ot(r, t)) break;if (o.push(e), s) break;
        }if (r === this._container) break;r = r.parentNode;
      }return o.length || a || s || !ot(r, t) || (o = [this]), o;
    }, _handleDOMEvent: function _handleDOMEvent(t) {
      if (this._loaded && !nt(t)) {
        var i = t.type;"mousedown" !== i && "keypress" !== i || zt(t.target || t.srcElement), this._fireDOMEvent(t, i);
      }
    }, _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"], _fireDOMEvent: function _fireDOMEvent(t, e, n) {
      if ("click" === t.type) {
        var o = i({}, t);o.type = "preclick", this._fireDOMEvent(o, o.type, n);
      }if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, e))).length) {
        var s = n[0];"contextmenu" === e && s.listens(e, !0) && $(t);var r = { originalEvent: t };if ("keypress" !== t.type) {
          var a = s.getLatLng && (!s._radius || s._radius <= 10);r.containerPoint = a ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = a ? s.getLatLng() : this.layerPointToLatLng(r.layerPoint);
        }for (var h = 0; h < n.length; h++) {
          if (n[h].fire(e, r, !0), r.originalEvent._stopped || !1 === n[h].options.bubblingMouseEvents && -1 !== d(this._mouseEvents, e)) return;
        }
      }
    }, _draggableMoved: function _draggableMoved(t) {
      return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
    }, _clearHandlers: function _clearHandlers() {
      for (var t = 0, i = this._handlers.length; t < i; t++) {
        this._handlers[t].disable();
      }
    }, whenReady: function whenReady(t, i) {
      return this._loaded ? t.call(i || this, { target: this }) : this.on("load", t, i), this;
    }, _getMapPanePos: function _getMapPanePos() {
      return Pt(this._mapPane) || new x(0, 0);
    }, _moved: function _moved() {
      var t = this._getMapPanePos();return t && !t.equals([0, 0]);
    }, _getTopLeftPoint: function _getTopLeftPoint(t, i) {
      return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos());
    }, _getNewPixelOrigin: function _getNewPixelOrigin(t, i) {
      var e = this.getSize()._divideBy(2);return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round();
    }, _latLngToNewLayerPoint: function _latLngToNewLayerPoint(t, i, e) {
      var n = this._getNewPixelOrigin(e, i);return this.project(t, i)._subtract(n);
    }, _latLngBoundsToNewLayerBounds: function _latLngBoundsToNewLayerBounds(t, i, e) {
      var n = this._getNewPixelOrigin(e, i);return b([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)]);
    }, _getCenterLayerPoint: function _getCenterLayerPoint() {
      return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
    }, _getCenterOffset: function _getCenterOffset(t) {
      return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
    }, _limitCenter: function _limitCenter(t, i, e) {
      if (!e) return t;var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new P(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
    }, _limitOffset: function _limitOffset(t, i) {
      if (!i) return t;var e = this.getPixelBounds(),
          n = new P(e.min.add(t), e.max.add(t));return t.add(this._getBoundsOffset(n, i));
    }, _getBoundsOffset: function _getBoundsOffset(t, i, e) {
      var n = b(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);return new x(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
    }, _rebound: function _rebound(t, i) {
      return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
    }, _limitZoom: function _limitZoom(t) {
      var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = Ni ? this.options.zoomSnap : 1;return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
    }, _onPanTransitionStep: function _onPanTransitionStep() {
      this.fire("move");
    }, _onPanTransitionEnd: function _onPanTransitionEnd() {
      mt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
    }, _tryAnimatedPan: function _tryAnimatedPan(t, i) {
      var e = this._getCenterOffset(t)._trunc();return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0);
    }, _createAnimProxy: function _createAnimProxy() {
      var t = this._proxy = ht("div", "leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
        var i = pe,
            e = this._proxy.style[i];wt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
      }, this), this.on("load moveend", function () {
        var t = this.getCenter(),
            i = this.getZoom();wt(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
      }, this), this._on("unload", this._destroyAnimProxy, this);
    }, _destroyAnimProxy: function _destroyAnimProxy() {
      ut(this._proxy), delete this._proxy;
    }, _catchTransitionEnd: function _catchTransitionEnd(t) {
      this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
    }, _nothingToAnimate: function _nothingToAnimate() {
      return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
    }, _tryAnimatedZoom: function _tryAnimatedZoom(t, i, e) {
      if (this._animatingZoom) return !0;if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);return !(!0 !== e.animate && !this.getSize().contains(o)) && (f(function () {
        this._moveStart(!0, !1)._animateZoom(t, i, !0);
      }, this), !0);
    }, _animateZoom: function _animateZoom(t, i, n, o) {
      this._mapPane && (n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, pt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", { center: t, zoom: i, noUpdate: o }), setTimeout(e(this._onZoomTransitionEnd, this), 250));
    }, _onZoomTransitionEnd: function _onZoomTransitionEnd() {
      this._animatingZoom && (this._mapPane && mt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), f(function () {
        this._moveEnd(!0);
      }, this));
    } }),
      Pe = v.extend({ options: { position: "topright" }, initialize: function initialize(t) {
      l(this, t);
    }, getPosition: function getPosition() {
      return this.options.position;
    }, setPosition: function setPosition(t) {
      var i = this._map;return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this;
    }, getContainer: function getContainer() {
      return this._container;
    }, addTo: function addTo(t) {
      this.remove(), this._map = t;var i = this._container = this.onAdd(t),
          e = this.getPosition(),
          n = t._controlCorners[e];return pt(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this;
    }, remove: function remove() {
      return this._map ? (ut(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this;
    }, _refocusOnMap: function _refocusOnMap(t) {
      this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
    } }),
      be = function be(t) {
    return new Pe(t);
  };Le.include({ addControl: function addControl(t) {
      return t.addTo(this), this;
    }, removeControl: function removeControl(t) {
      return t.remove(), this;
    }, _initControlPos: function _initControlPos() {
      function t(t, o) {
        var s = e + t + " " + e + o;i[t + o] = ht("div", s, n);
      }var i = this._controlCorners = {},
          e = "leaflet-",
          n = this._controlContainer = ht("div", e + "control-container", this._container);t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right");
    }, _clearControlPos: function _clearControlPos() {
      for (var t in this._controlCorners) {
        ut(this._controlCorners[t]);
      }ut(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
    } });var Te = Pe.extend({ options: { collapsed: !0, position: "topright", autoZIndex: !0, hideSingleBase: !1, sortLayers: !1, sortFunction: function sortFunction(t, i, e, n) {
        return e < n ? -1 : n < e ? 1 : 0;
      } }, initialize: function initialize(t, i, e) {
      l(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1;for (var n in t) {
        this._addLayer(t[n], n);
      }for (n in i) {
        this._addLayer(i[n], n, !0);
      }
    }, onAdd: function onAdd(t) {
      this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);for (var i = 0; i < this._layers.length; i++) {
        this._layers[i].layer.on("add remove", this._onLayerChange, this);
      }return this._container;
    }, addTo: function addTo(t) {
      return Pe.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
    }, onRemove: function onRemove() {
      this._map.off("zoomend", this._checkDisabledLayers, this);for (var t = 0; t < this._layers.length; t++) {
        this._layers[t].layer.off("add remove", this._onLayerChange, this);
      }
    }, addBaseLayer: function addBaseLayer(t, i) {
      return this._addLayer(t, i), this._map ? this._update() : this;
    }, addOverlay: function addOverlay(t, i) {
      return this._addLayer(t, i, !0), this._map ? this._update() : this;
    }, removeLayer: function removeLayer(t) {
      t.off("add remove", this._onLayerChange, this);var i = this._getLayer(n(t));return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this;
    }, expand: function expand() {
      pt(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;var t = this._map.getSize().y - (this._container.offsetTop + 50);return t < this._form.clientHeight ? (pt(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : mt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
    }, collapse: function collapse() {
      return mt(this._container, "leaflet-control-layers-expanded"), this;
    }, _initLayout: function _initLayout() {
      var t = "leaflet-control-layers",
          i = this._container = ht("div", t),
          e = this.options.collapsed;i.setAttribute("aria-haspopup", !0), J(i), X(i);var n = this._form = ht("form", t + "-list");e && (this._map.on("click", this.collapse, this), Ti || V(i, { mouseenter: this.expand, mouseleave: this.collapse }, this));var o = this._layersLink = ht("a", t + "-toggle", i);o.href = "#", o.title = "Layers", Vi ? (V(o, "click", Q), V(o, "click", this.expand, this)) : V(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = ht("div", t + "-base", n), this._separator = ht("div", t + "-separator", n), this._overlaysList = ht("div", t + "-overlays", n), i.appendChild(n);
    }, _getLayer: function _getLayer(t) {
      for (var i = 0; i < this._layers.length; i++) {
        if (this._layers[i] && n(this._layers[i].layer) === t) return this._layers[i];
      }
    }, _addLayer: function _addLayer(t, i, n) {
      this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({ layer: t, name: i, overlay: n }), this.options.sortLayers && this._layers.sort(e(function (t, i) {
        return this.options.sortFunction(t.layer, i.layer, t.name, i.name);
      }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
    }, _update: function _update() {
      if (!this._container) return this;lt(this._baseLayersList), lt(this._overlaysList), this._layerControlInputs = [];var t,
          i,
          e,
          n,
          o = 0;for (e = 0; e < this._layers.length; e++) {
        n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
      }return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this;
    }, _onLayerChange: function _onLayerChange(t) {
      this._handlingClick || this._update();var i = this._getLayer(n(t.target)),
          e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;e && this._map.fire(e, i);
    }, _createRadioElement: function _createRadioElement(t, i) {
      var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
          n = document.createElement("div");return n.innerHTML = e, n.firstChild;
    }, _addItem: function _addItem(t) {
      var i,
          e = document.createElement("label"),
          o = this._map.hasLayer(t.layer);t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = o) : i = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(i), i.layerId = n(t.layer), V(i, "click", this._onInputClick, this);var s = document.createElement("span");s.innerHTML = " " + t.name;var r = document.createElement("div");return e.appendChild(r), r.appendChild(i), r.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e;
    }, _onInputClick: function _onInputClick() {
      var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];this._handlingClick = !0;for (var s = e.length - 1; s >= 0; s--) {
        t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
      }for (s = 0; s < o.length; s++) {
        this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
      }for (s = 0; s < n.length; s++) {
        this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
      }this._handlingClick = !1, this._refocusOnMap();
    }, _checkDisabledLayers: function _checkDisabledLayers() {
      for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; o >= 0; o--) {
        t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom;
      }
    }, _expandIfNotCollapsed: function _expandIfNotCollapsed() {
      return this._map && !this.options.collapsed && this.expand(), this;
    }, _expand: function _expand() {
      return this.expand();
    }, _collapse: function _collapse() {
      return this.collapse();
    } }),
      ze = Pe.extend({ options: { position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "&#x2212;", zoomOutTitle: "Zoom out" }, onAdd: function onAdd(t) {
      var i = "leaflet-control-zoom",
          e = ht("div", i + " leaflet-bar"),
          n = this.options;return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e;
    }, onRemove: function onRemove(t) {
      t.off("zoomend zoomlevelschange", this._updateDisabled, this);
    }, disable: function disable() {
      return this._disabled = !0, this._updateDisabled(), this;
    }, enable: function enable() {
      return this._disabled = !1, this._updateDisabled(), this;
    }, _zoomIn: function _zoomIn(t) {
      !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    }, _zoomOut: function _zoomOut(t) {
      !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
    }, _createButton: function _createButton(t, i, e, n, o) {
      var s = ht("a", e, n);return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), J(s), V(s, "click", Q), V(s, "click", o, this), V(s, "click", this._refocusOnMap, this), s;
    }, _updateDisabled: function _updateDisabled() {
      var t = this._map,
          i = "leaflet-disabled";mt(this._zoomInButton, i), mt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && pt(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && pt(this._zoomInButton, i);
    } });Le.mergeOptions({ zoomControl: !0 }), Le.addInitHook(function () {
    this.options.zoomControl && (this.zoomControl = new ze(), this.addControl(this.zoomControl));
  });var Me = Pe.extend({ options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0 }, onAdd: function onAdd(t) {
      var i = ht("div", "leaflet-control-scale"),
          e = this.options;return this._addScales(e, "leaflet-control-scale-line", i), t.on(e.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
    }, onRemove: function onRemove(t) {
      t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
    }, _addScales: function _addScales(t, i, e) {
      t.metric && (this._mScale = ht("div", i, e)), t.imperial && (this._iScale = ht("div", i, e));
    }, _update: function _update() {
      var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));this._updateScales(e);
    }, _updateScales: function _updateScales(t) {
      this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
    }, _updateMetric: function _updateMetric(t) {
      var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";this._updateScale(this._mScale, e, i / t);
    }, _updateImperial: function _updateImperial(t) {
      var i,
          e,
          n,
          o = 3.2808399 * t;o > 5280 ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o));
    }, _updateScale: function _updateScale(t, i, e) {
      t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i;
    }, _getRoundNum: function _getRoundNum(t) {
      var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          e = t / i;return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e;
    } }),
      Ce = Pe.extend({ options: { position: "bottomright", prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>' }, initialize: function initialize(t) {
      l(this, t), this._attributions = {};
    }, onAdd: function onAdd(t) {
      t.attributionControl = this, this._container = ht("div", "leaflet-control-attribution"), J(this._container);for (var i in t._layers) {
        t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
      }return this._update(), this._container;
    }, setPrefix: function setPrefix(t) {
      return this.options.prefix = t, this._update(), this;
    }, addAttribution: function addAttribution(t) {
      return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
    }, removeAttribution: function removeAttribution(t) {
      return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
    }, _update: function _update() {
      if (this._map) {
        var t = [];for (var i in this._attributions) {
          this._attributions[i] && t.push(i);
        }var e = [];this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ");
      }
    } });Le.mergeOptions({ attributionControl: !0 }), Le.addInitHook(function () {
    this.options.attributionControl && new Ce().addTo(this);
  });Pe.Layers = Te, Pe.Zoom = ze, Pe.Scale = Me, Pe.Attribution = Ce, be.layers = function (t, i, e) {
    return new Te(t, i, e);
  }, be.zoom = function (t) {
    return new ze(t);
  }, be.scale = function (t) {
    return new Me(t);
  }, be.attribution = function (t) {
    return new Ce(t);
  };var Ze = v.extend({ initialize: function initialize(t) {
      this._map = t;
    }, enable: function enable() {
      return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
    }, disable: function disable() {
      return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
    }, enabled: function enabled() {
      return !!this._enabled;
    } });Ze.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };var Se,
      Ee = { Events: hi },
      ke = Vi ? "touchstart mousedown" : "mousedown",
      Ae = { mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend" },
      Ie = { mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove" },
      Be = ui.extend({ options: { clickTolerance: 3 }, initialize: function initialize(t, i, e, n) {
      l(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e;
    }, enable: function enable() {
      this._enabled || (V(this._dragStartTarget, ke, this._onDown, this), this._enabled = !0);
    }, disable: function disable() {
      this._enabled && (Be._dragging === this && this.finishDrag(), q(this._dragStartTarget, ke, this._onDown, this), this._enabled = !1, this._moved = !1);
    }, _onDown: function _onDown(t) {
      if (!t._simulated && this._enabled && (this._moved = !1, !dt(this._element, "leaflet-zoom-anim") && !(Be._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (Be._dragging = this, this._preventOutline && zt(this._element), bt(), mi(), this._moving)))) {
        this.fire("down");var i = t.touches ? t.touches[0] : t;this._startPoint = new x(i.clientX, i.clientY), V(document, Ie[t.type], this._onMove, this), V(document, Ae[t.type], this._onUp, this);
      }
    }, _onMove: function _onMove(t) {
      if (!t._simulated && this._enabled) if (t.touches && t.touches.length > 1) this._moved = !0;else {
        var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
            e = new x(i.clientX, i.clientY).subtract(this._startPoint);(e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || ($(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = Pt(this._element).subtract(e), pt(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), pt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = f(this._updatePosition, this, !0)));
      }
    }, _updatePosition: function _updatePosition() {
      var t = { originalEvent: this._lastEvent };this.fire("predrag", t), Lt(this._element, this._newPos), this.fire("drag", t);
    }, _onUp: function _onUp(t) {
      !t._simulated && this._enabled && this.finishDrag();
    }, finishDrag: function finishDrag() {
      mt(document.body, "leaflet-dragging"), this._lastTarget && (mt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);for (var t in Ie) {
        q(document, Ie[t], this._onMove, this), q(document, Ae[t], this._onUp, this);
      }Tt(), fi(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })), this._moving = !1, Be._dragging = !1;
    } }),
      Oe = (Object.freeze || Object)({ simplify: Ct, pointToSegmentDistance: Zt, closestPointOnSegment: function closestPointOnSegment(t, i, e) {
      return Rt(t, i, e);
    }, clipSegment: At, _getEdgeIntersection: It, _getBitCode: Bt, _sqClosestPointOnSegment: Rt, isFlat: Dt, _flat: Nt }),
      Re = (Object.freeze || Object)({ clipPolygon: jt }),
      De = { project: function project(t) {
      return new x(t.lng, t.lat);
    }, unproject: function unproject(t) {
      return new M(t.y, t.x);
    }, bounds: new P([-180, -90], [180, 90]) },
      Ne = { R: 6378137, R_MINOR: 6356752.314245179, bounds: new P([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]), project: function project(t) {
      var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);return n = -e * Math.log(Math.max(a, 1e-10)), new x(t.lng * i * e, n);
    }, unproject: function unproject(t) {
      for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && Math.abs(u) > 1e-7; h++) {
        i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
      }return new M(a * e, t.x * e / n);
    } },
      je = (Object.freeze || Object)({ LonLat: De, Mercator: Ne, SphericalMercator: di }),
      We = i({}, _i, { code: "EPSG:3395", projection: Ne, transformation: function () {
      var t = .5 / (Math.PI * Ne.R);return S(t, .5, -t, .5);
    }() }),
      He = i({}, _i, { code: "EPSG:4326", projection: De, transformation: S(1 / 180, 1, -1 / 180, .5) }),
      Fe = i({}, ci, { projection: De, transformation: S(1, 0, -1, 0), scale: function scale(t) {
      return Math.pow(2, t);
    }, zoom: function zoom(t) {
      return Math.log(t) / Math.LN2;
    }, distance: function distance(t, i) {
      var e = i.lng - t.lng,
          n = i.lat - t.lat;return Math.sqrt(e * e + n * n);
    }, infinite: !0 });ci.Earth = _i, ci.EPSG3395 = We, ci.EPSG3857 = vi, ci.EPSG900913 = yi, ci.EPSG4326 = He, ci.Simple = Fe;var Ue = ui.extend({ options: { pane: "overlayPane", attribution: null, bubblingMouseEvents: !0 }, addTo: function addTo(t) {
      return t.addLayer(this), this;
    }, remove: function remove() {
      return this.removeFrom(this._map || this._mapToAdd);
    }, removeFrom: function removeFrom(t) {
      return t && t.removeLayer(this), this;
    }, getPane: function getPane(t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    }, addInteractiveTarget: function addInteractiveTarget(t) {
      return this._map._targets[n(t)] = this, this;
    }, removeInteractiveTarget: function removeInteractiveTarget(t) {
      return delete this._map._targets[n(t)], this;
    }, getAttribution: function getAttribution() {
      return this.options.attribution;
    }, _layerAdd: function _layerAdd(t) {
      var i = t.target;if (i.hasLayer(this)) {
        if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
          var e = this.getEvents();i.on(e, this), this.once("remove", function () {
            i.off(e, this);
          }, this);
        }this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", { layer: this });
      }
    } });Le.include({ addLayer: function addLayer(t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");var i = n(t);return this._layers[i] ? this : (this._layers[i] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
    }, removeLayer: function removeLayer(t) {
      var i = n(t);return this._layers[i] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
    }, hasLayer: function hasLayer(t) {
      return !!t && n(t) in this._layers;
    }, eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }return this;
    }, _addLayers: function _addLayers(t) {
      for (var i = 0, e = (t = t ? ei(t) ? t : [t] : []).length; i < e; i++) {
        this.addLayer(t[i]);
      }
    }, _addZoomLimit: function _addZoomLimit(t) {
      !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels());
    }, _removeZoomLimit: function _removeZoomLimit(t) {
      var i = n(t);this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    }, _updateZoomLevels: function _updateZoomLevels() {
      var t = 1 / 0,
          i = -1 / 0,
          e = this._getZoomSpan();for (var n in this._zoomBoundLayers) {
        var o = this._zoomBoundLayers[n].options;t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
      }this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
    } });var Ve = Ue.extend({ initialize: function initialize(t, i) {
      l(this, i), this._layers = {};var e, n;if (t) for (e = 0, n = t.length; e < n; e++) {
        this.addLayer(t[e]);
      }
    }, addLayer: function addLayer(t) {
      var i = this.getLayerId(t);return this._layers[i] = t, this._map && this._map.addLayer(t), this;
    }, removeLayer: function removeLayer(t) {
      var i = t in this._layers ? t : this.getLayerId(t);return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this;
    }, hasLayer: function hasLayer(t) {
      return !!t && (t in this._layers || this.getLayerId(t) in this._layers);
    }, clearLayers: function clearLayers() {
      return this.eachLayer(this.removeLayer, this);
    }, invoke: function invoke(t) {
      var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);for (i in this._layers) {
        (e = this._layers[i])[t] && e[t].apply(e, n);
      }return this;
    }, onAdd: function onAdd(t) {
      this.eachLayer(t.addLayer, t);
    }, onRemove: function onRemove(t) {
      this.eachLayer(t.removeLayer, t);
    }, eachLayer: function eachLayer(t, i) {
      for (var e in this._layers) {
        t.call(i, this._layers[e]);
      }return this;
    }, getLayer: function getLayer(t) {
      return this._layers[t];
    }, getLayers: function getLayers() {
      var t = [];return this.eachLayer(t.push, t), t;
    }, setZIndex: function setZIndex(t) {
      return this.invoke("setZIndex", t);
    }, getLayerId: function getLayerId(t) {
      return n(t);
    } }),
      qe = Ve.extend({ addLayer: function addLayer(t) {
      return this.hasLayer(t) ? this : (t.addEventParent(this), Ve.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
    }, removeLayer: function removeLayer(t) {
      return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ve.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
    }, setStyle: function setStyle(t) {
      return this.invoke("setStyle", t);
    }, bringToFront: function bringToFront() {
      return this.invoke("bringToFront");
    }, bringToBack: function bringToBack() {
      return this.invoke("bringToBack");
    }, getBounds: function getBounds() {
      var t = new T();for (var i in this._layers) {
        var e = this._layers[i];t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
      }return t;
    } }),
      Ge = v.extend({ options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] }, initialize: function initialize(t) {
      l(this, t);
    }, createIcon: function createIcon(t) {
      return this._createIcon("icon", t);
    }, createShadow: function createShadow(t) {
      return this._createIcon("shadow", t);
    }, _createIcon: function _createIcon(t, i) {
      var e = this._getIconUrl(t);if (!e) {
        if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");return null;
      }var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);return this._setIconStyles(n, t), n;
    }, _setIconStyles: function _setIconStyles(t, i) {
      var e = this.options,
          n = e[i + "Size"];"number" == typeof n && (n = [n, n]);var o = w(n),
          s = w("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
    }, _createImg: function _createImg(t, i) {
      return i = i || document.createElement("img"), i.src = t, i;
    }, _getIconUrl: function _getIconUrl(t) {
      return Ki && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
    } }),
      Ke = Ge.extend({ options: { iconUrl: "marker-icon.png", iconRetinaUrl: "marker-icon-2x.png", shadowUrl: "marker-shadow.png", iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], tooltipAnchor: [16, -28], shadowSize: [41, 41] }, _getIconUrl: function _getIconUrl(t) {
      return Ke.imagePath || (Ke.imagePath = this._detectIconPath()), (this.options.imagePath || Ke.imagePath) + Ge.prototype._getIconUrl.call(this, t);
    }, _detectIconPath: function _detectIconPath() {
      var t = ht("div", "leaflet-default-icon-path", document.body),
          i = at(t, "background-image") || at(t, "backgroundImage");return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "");
    } }),
      Ye = Ze.extend({ initialize: function initialize(t) {
      this._marker = t;
    }, addHooks: function addHooks() {
      var t = this._marker._icon;this._draggable || (this._draggable = new Be(t, t, !0)), this._draggable.on({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).enable(), pt(t, "leaflet-marker-draggable");
    }, removeHooks: function removeHooks() {
      this._draggable.off({ dragstart: this._onDragStart, predrag: this._onPreDrag, drag: this._onDrag, dragend: this._onDragEnd }, this).disable(), this._marker._icon && mt(this._marker._icon, "leaflet-marker-draggable");
    }, moved: function moved() {
      return this._draggable && this._draggable._moved;
    }, _adjustPan: function _adjustPan(t) {
      var i = this._marker,
          e = i._map,
          n = this._marker.options.autoPanSpeed,
          o = this._marker.options.autoPanPadding,
          s = L.DomUtil.getPosition(i._icon),
          r = e.getPixelBounds(),
          a = e.getPixelOrigin(),
          h = b(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));if (!h.contains(s)) {
        var u = w((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);e.panBy(u, { animate: !1 }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), L.DomUtil.setPosition(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = f(this._adjustPan.bind(this, t));
      }
    }, _onDragStart: function _onDragStart() {
      this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart");
    }, _onPreDrag: function _onPreDrag(t) {
      this._marker.options.autoPan && (g(this._panRequest), this._panRequest = f(this._adjustPan.bind(this, t)));
    }, _onDrag: function _onDrag(t) {
      var i = this._marker,
          e = i._shadow,
          n = Pt(i._icon),
          o = i._map.layerPointToLatLng(n);e && Lt(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t);
    }, _onDragEnd: function _onDragEnd(t) {
      g(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
    } }),
      Xe = Ue.extend({ options: { icon: new Ke(), interactive: !0, draggable: !1, autoPan: !1, autoPanPadding: [50, 50], autoPanSpeed: 10, keyboard: !0, title: "", alt: "", zIndexOffset: 0, opacity: 1, riseOnHover: !1, riseOffset: 250, pane: "markerPane", bubblingMouseEvents: !1 }, initialize: function initialize(t, i) {
      l(this, i), this._latlng = C(t);
    }, onAdd: function onAdd(t) {
      this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
    }, onRemove: function onRemove(t) {
      this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
    }, getEvents: function getEvents() {
      return { zoom: this.update, viewreset: this.update };
    }, getLatLng: function getLatLng() {
      return this._latlng;
    }, setLatLng: function setLatLng(t) {
      var i = this._latlng;return this._latlng = C(t), this.update(), this.fire("move", { oldLatLng: i, latlng: this._latlng });
    }, setZIndexOffset: function setZIndexOffset(t) {
      return this.options.zIndexOffset = t, this.update();
    }, setIcon: function setIcon(t) {
      return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
    }, getElement: function getElement() {
      return this._icon;
    }, update: function update() {
      if (this._icon && this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t);
      }return this;
    }, _initIcon: function _initIcon() {
      var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), pt(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({ mouseover: this._bringToFront, mouseout: this._resetZIndex });var o = t.icon.createShadow(this._shadow),
          s = !1;o !== this._shadow && (this._removeShadow(), s = !0), o && (pt(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow);
    }, _removeIcon: function _removeIcon() {
      this.options.riseOnHover && this.off({ mouseover: this._bringToFront, mouseout: this._resetZIndex }), ut(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
    }, _removeShadow: function _removeShadow() {
      this._shadow && ut(this._shadow), this._shadow = null;
    }, _setPos: function _setPos(t) {
      Lt(this._icon, t), this._shadow && Lt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
    }, _updateZIndex: function _updateZIndex(t) {
      this._icon.style.zIndex = this._zIndex + t;
    }, _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();this._setPos(i);
    }, _initInteraction: function _initInteraction() {
      if (this.options.interactive && (pt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ye)) {
        var t = this.options.draggable;this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ye(this), t && this.dragging.enable();
      }
    }, setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._map && this._updateOpacity(), this;
    }, _updateOpacity: function _updateOpacity() {
      var t = this.options.opacity;vt(this._icon, t), this._shadow && vt(this._shadow, t);
    }, _bringToFront: function _bringToFront() {
      this._updateZIndex(this.options.riseOffset);
    }, _resetZIndex: function _resetZIndex() {
      this._updateZIndex(0);
    }, _getPopupAnchor: function _getPopupAnchor() {
      return this.options.icon.options.popupAnchor;
    }, _getTooltipAnchor: function _getTooltipAnchor() {
      return this.options.icon.options.tooltipAnchor;
    } }),
      Je = Ue.extend({ options: { stroke: !0, color: "#3388ff", weight: 3, opacity: 1, lineCap: "round", lineJoin: "round", dashArray: null, dashOffset: null, fill: !1, fillColor: null, fillOpacity: .2, fillRule: "evenodd", interactive: !0, bubblingMouseEvents: !0 }, beforeAdd: function beforeAdd(t) {
      this._renderer = t.getRenderer(this);
    }, onAdd: function onAdd() {
      this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
    }, onRemove: function onRemove() {
      this._renderer._removePath(this);
    }, redraw: function redraw() {
      return this._map && this._renderer._updatePath(this), this;
    }, setStyle: function setStyle(t) {
      return l(this, t), this._renderer && this._renderer._updateStyle(this), this;
    }, bringToFront: function bringToFront() {
      return this._renderer && this._renderer._bringToFront(this), this;
    }, bringToBack: function bringToBack() {
      return this._renderer && this._renderer._bringToBack(this), this;
    }, getElement: function getElement() {
      return this._path;
    }, _reset: function _reset() {
      this._project(), this._update();
    }, _clickTolerance: function _clickTolerance() {
      return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance;
    } }),
      $e = Je.extend({ options: { fill: !0, radius: 10 }, initialize: function initialize(t, i) {
      l(this, i), this._latlng = C(t), this._radius = this.options.radius;
    }, setLatLng: function setLatLng(t) {
      return this._latlng = C(t), this.redraw(), this.fire("move", { latlng: this._latlng });
    }, getLatLng: function getLatLng() {
      return this._latlng;
    }, setRadius: function setRadius(t) {
      return this.options.radius = this._radius = t, this.redraw();
    }, getRadius: function getRadius() {
      return this._radius;
    }, setStyle: function setStyle(t) {
      var i = t && t.radius || this._radius;return Je.prototype.setStyle.call(this, t), this.setRadius(i), this;
    }, _project: function _project() {
      this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
    }, _updateBounds: function _updateBounds() {
      var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];this._pxBounds = new P(this._point.subtract(n), this._point.add(n));
    }, _update: function _update() {
      this._map && this._updatePath();
    }, _updatePath: function _updatePath() {
      this._renderer._updateCircle(this);
    }, _empty: function _empty() {
      return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
    }, _containsPoint: function _containsPoint(t) {
      return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
    } }),
      Qe = $e.extend({ initialize: function initialize(t, e, n) {
      if ("number" == typeof e && (e = i({}, n, { radius: e })), l(this, e), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");this._mRadius = this.options.radius;
    }, setRadius: function setRadius(t) {
      return this._mRadius = t, this.redraw();
    }, getRadius: function getRadius() {
      return this._mRadius;
    }, getBounds: function getBounds() {
      var t = [this._radius, this._radiusY || this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)));
    }, setStyle: Je.prototype.setStyle, _project: function _project() {
      var t = this._latlng.lng,
          i = this._latlng.lat,
          e = this._map,
          n = e.options.crs;if (n.distance === _i.distance) {
        var o = Math.PI / 180,
            s = this._mRadius / _i.R / o,
            r = e.project([i + s, t]),
            a = e.project([i - s, t]),
            h = r.add(a).divideBy(2),
            u = e.unproject(h).lat,
            l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;(isNaN(l) || 0 === l) && (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y;
      } else {
        var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x;
      }this._updateBounds();
    } }),
      tn = Je.extend({ options: { smoothFactor: 1, noClip: !1 }, initialize: function initialize(t, i) {
      l(this, i), this._setLatLngs(t);
    }, getLatLngs: function getLatLngs() {
      return this._latlngs;
    }, setLatLngs: function setLatLngs(t) {
      return this._setLatLngs(t), this.redraw();
    }, isEmpty: function isEmpty() {
      return !this._latlngs.length;
    }, closestLayerPoint: function closestLayerPoint(t) {
      for (var i, e, n = 1 / 0, o = null, s = Rt, r = 0, a = this._parts.length; r < a; r++) {
        for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
          var c = s(t, i = h[u - 1], e = h[u], !0);c < n && (n = c, o = s(t, i, e));
        }
      }return o && (o.distance = Math.sqrt(n)), o;
    }, getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a = this._rings[0],
          h = a.length;if (!h) return null;for (t = 0, i = 0; t < h - 1; t++) {
        i += a[t].distanceTo(a[t + 1]) / 2;
      }if (0 === i) return this._map.layerPointToLatLng(a[0]);for (t = 0, n = 0; t < h - 1; t++) {
        if (o = a[t], s = a[t + 1], e = o.distanceTo(s), (n += e) > i) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)]);
      }
    }, getBounds: function getBounds() {
      return this._bounds;
    }, addLatLng: function addLatLng(t, i) {
      return i = i || this._defaultShape(), t = C(t), i.push(t), this._bounds.extend(t), this.redraw();
    }, _setLatLngs: function _setLatLngs(t) {
      this._bounds = new T(), this._latlngs = this._convertLatLngs(t);
    }, _defaultShape: function _defaultShape() {
      return Dt(this._latlngs) ? this._latlngs : this._latlngs[0];
    }, _convertLatLngs: function _convertLatLngs(t) {
      for (var i = [], e = Dt(t), n = 0, o = t.length; n < o; n++) {
        e ? (i[n] = C(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
      }return i;
    }, _project: function _project() {
      var t = new P();this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);var i = this._clickTolerance(),
          e = new x(i, i);this._bounds.isValid() && t.isValid() && (t.min._subtract(e), t.max._add(e), this._pxBounds = t);
    }, _projectLatlngs: function _projectLatlngs(t, i, e) {
      var n,
          o,
          s = t[0] instanceof M,
          r = t.length;if (s) {
        for (o = [], n = 0; n < r; n++) {
          o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
        }i.push(o);
      } else for (n = 0; n < r; n++) {
        this._projectLatlngs(t[n], i, e);
      }
    }, _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds;if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else {
        var i,
            e,
            n,
            o,
            s,
            r,
            a,
            h = this._parts;for (i = 0, n = 0, o = this._rings.length; i < o; i++) {
          for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++) {
            (r = At(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++));
          }
        }
      }
    }, _simplifyPoints: function _simplifyPoints() {
      for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) {
        t[e] = Ct(t[e], i);
      }
    }, _update: function _update() {
      this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    }, _updatePath: function _updatePath() {
      this._renderer._updatePoly(this);
    }, _containsPoint: function _containsPoint(t, i) {
      var e,
          n,
          o,
          s,
          r,
          a,
          h = this._clickTolerance();if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;for (e = 0, s = this._parts.length; e < s; e++) {
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++) {
          if ((i || 0 !== n) && Zt(t, a[o], a[n]) <= h) return !0;
        }
      }return !1;
    } });tn._flat = Nt;var en = tn.extend({ options: { fill: !0 }, isEmpty: function isEmpty() {
      return !this._latlngs.length || !this._latlngs[0].length;
    }, getCenter: function getCenter() {
      if (!this._map) throw new Error("Must add layer to map before using getCenter()");var t,
          i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = this._rings[0],
          l = u.length;if (!l) return null;for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) {
        e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
      }return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h);
    }, _convertLatLngs: function _convertLatLngs(t) {
      var i = tn.prototype._convertLatLngs.call(this, t),
          e = i.length;return e >= 2 && i[0] instanceof M && i[0].equals(i[e - 1]) && i.pop(), i;
    }, _setLatLngs: function _setLatLngs(t) {
      tn.prototype._setLatLngs.call(this, t), Dt(this._latlngs) && (this._latlngs = [this._latlngs]);
    }, _defaultShape: function _defaultShape() {
      return Dt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    }, _clipPoints: function _clipPoints() {
      var t = this._renderer._bounds,
          i = this.options.weight,
          e = new x(i, i);if (t = new P(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings;else for (var n, o = 0, s = this._rings.length; o < s; o++) {
        (n = jt(this._rings[o], t, !0)).length && this._parts.push(n);
      }
    }, _updatePath: function _updatePath() {
      this._renderer._updatePoly(this, !0);
    }, _containsPoint: function _containsPoint(t) {
      var i,
          e,
          n,
          o,
          s,
          r,
          a,
          h,
          u = !1;if (!this._pxBounds.contains(t)) return !1;for (o = 0, a = this._parts.length; o < a; o++) {
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) {
          e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
        }
      }return u || tn.prototype._containsPoint.call(this, t, !0);
    } }),
      nn = qe.extend({ initialize: function initialize(t, i) {
      l(this, i), this._layers = {}, t && this.addData(t);
    }, addData: function addData(t) {
      var i,
          e,
          n,
          o = ei(t) ? t : t.features;if (o) {
        for (i = 0, e = o.length; i < e; i++) {
          ((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
        }return this;
      }var s = this.options;if (s.filter && !s.filter(t)) return this;var r = Wt(t, s);return r ? (r.feature = Gt(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this;
    }, resetStyle: function resetStyle(t) {
      return t.options = i({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this;
    }, setStyle: function setStyle(t) {
      return this.eachLayer(function (i) {
        this._setLayerStyle(i, t);
      }, this);
    }, _setLayerStyle: function _setLayerStyle(t, i) {
      "function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i);
    } }),
      on = { toGeoJSON: function toGeoJSON(t) {
      return qt(this, { type: "Point", coordinates: Ut(this.getLatLng(), t) });
    } };Xe.include(on), Qe.include(on), $e.include(on), tn.include({ toGeoJSON: function toGeoJSON(t) {
      var i = !Dt(this._latlngs),
          e = Vt(this._latlngs, i ? 1 : 0, !1, t);return qt(this, { type: (i ? "Multi" : "") + "LineString", coordinates: e });
    } }), en.include({ toGeoJSON: function toGeoJSON(t) {
      var i = !Dt(this._latlngs),
          e = i && !Dt(this._latlngs[0]),
          n = Vt(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);return i || (n = [n]), qt(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n });
    } }), Ve.include({ toMultiPoint: function toMultiPoint(t) {
      var i = [];return this.eachLayer(function (e) {
        i.push(e.toGeoJSON(t).geometry.coordinates);
      }), qt(this, { type: "MultiPoint", coordinates: i });
    }, toGeoJSON: function toGeoJSON(t) {
      var i = this.feature && this.feature.geometry && this.feature.geometry.type;if ("MultiPoint" === i) return this.toMultiPoint(t);var e = "GeometryCollection" === i,
          n = [];return this.eachLayer(function (i) {
        if (i.toGeoJSON) {
          var o = i.toGeoJSON(t);if (e) n.push(o.geometry);else {
            var s = Gt(o);"FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s);
          }
        }
      }), e ? qt(this, { geometries: n, type: "GeometryCollection" }) : { type: "FeatureCollection", features: n };
    } });var sn = Kt,
      rn = Ue.extend({ options: { opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: "" }, initialize: function initialize(t, i, e) {
      this._url = t, this._bounds = z(i), l(this, e);
    }, onAdd: function onAdd() {
      this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (pt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
    }, onRemove: function onRemove() {
      ut(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
    }, setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._image && this._updateOpacity(), this;
    }, setStyle: function setStyle(t) {
      return t.opacity && this.setOpacity(t.opacity), this;
    }, bringToFront: function bringToFront() {
      return this._map && ct(this._image), this;
    }, bringToBack: function bringToBack() {
      return this._map && _t(this._image), this;
    }, setUrl: function setUrl(t) {
      return this._url = t, this._image && (this._image.src = t), this;
    }, setBounds: function setBounds(t) {
      return this._bounds = z(t), this._map && this._reset(), this;
    }, getEvents: function getEvents() {
      var t = { zoom: this._reset, viewreset: this._reset };return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    }, setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    }, getBounds: function getBounds() {
      return this._bounds;
    }, getElement: function getElement() {
      return this._image;
    }, _initImage: function _initImage() {
      var t = "IMG" === this._url.tagName,
          i = this._image = t ? this._url : ht("img");pt(i, "leaflet-image-layer"), this._zoomAnimated && pt(i, "leaflet-zoom-animated"), this.options.className && pt(i, this.options.className), i.onselectstart = r, i.onmousemove = r, i.onload = e(this.fire, this, "load"), i.onerror = e(this._overlayOnError, this, "error"), this.options.crossOrigin && (i.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt);
    }, _animateZoom: function _animateZoom(t) {
      var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;wt(this._image, e, i);
    }, _reset: function _reset() {
      var t = this._image,
          i = new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
          e = i.getSize();Lt(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px";
    }, _updateOpacity: function _updateOpacity() {
      vt(this._image, this.options.opacity);
    }, _updateZIndex: function _updateZIndex() {
      this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex);
    }, _overlayOnError: function _overlayOnError() {
      this.fire("error");var t = this.options.errorOverlayUrl;t && this._url !== t && (this._url = t, this._image.src = t);
    } }),
      an = rn.extend({ options: { autoplay: !0, loop: !0 }, _initImage: function _initImage() {
      var t = "VIDEO" === this._url.tagName,
          i = this._image = t ? this._url : ht("video");if (pt(i, "leaflet-image-layer"), this._zoomAnimated && pt(i, "leaflet-zoom-animated"), i.onselectstart = r, i.onmousemove = r, i.onloadeddata = e(this.fire, this, "load"), t) {
        for (var n = i.getElementsByTagName("source"), o = [], s = 0; s < n.length; s++) {
          o.push(n[s].src);
        }this._url = n.length > 0 ? o : [i.src];
      } else {
        ei(this._url) || (this._url = [this._url]), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;for (var a = 0; a < this._url.length; a++) {
          var h = ht("source");h.src = this._url[a], i.appendChild(h);
        }
      }
    } }),
      hn = Ue.extend({ options: { offset: [0, 7], className: "", pane: "popupPane" }, initialize: function initialize(t, i) {
      l(this, t), this._source = i;
    }, onAdd: function onAdd(t) {
      this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && vt(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && vt(this._container, 1), this.bringToFront();
    }, onRemove: function onRemove(t) {
      t._fadeAnimated ? (vt(this._container, 0), this._removeTimeout = setTimeout(e(ut, void 0, this._container), 200)) : ut(this._container);
    }, getLatLng: function getLatLng() {
      return this._latlng;
    }, setLatLng: function setLatLng(t) {
      return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this;
    }, getContent: function getContent() {
      return this._content;
    }, setContent: function setContent(t) {
      return this._content = t, this.update(), this;
    }, getElement: function getElement() {
      return this._container;
    }, update: function update() {
      this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
    }, getEvents: function getEvents() {
      var t = { zoom: this._updatePosition, viewreset: this._updatePosition };return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    }, isOpen: function isOpen() {
      return !!this._map && this._map.hasLayer(this);
    }, bringToFront: function bringToFront() {
      return this._map && ct(this._container), this;
    }, bringToBack: function bringToBack() {
      return this._map && _t(this._container), this;
    }, _updateContent: function _updateContent() {
      if (this._content) {
        var t = this._contentNode,
            i = "function" == typeof this._content ? this._content(this._source || this) : this._content;if ("string" == typeof i) t.innerHTML = i;else {
          for (; t.hasChildNodes();) {
            t.removeChild(t.firstChild);
          }t.appendChild(i);
        }this.fire("contentupdate");
      }
    }, _updatePosition: function _updatePosition() {
      if (this._map) {
        var t = this._map.latLngToLayerPoint(this._latlng),
            i = w(this.options.offset),
            e = this._getAnchor();this._zoomAnimated ? Lt(this._container, t.add(e)) : i = i.add(t).add(e);var n = this._containerBottom = -i.y,
            o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;this._container.style.bottom = n + "px", this._container.style.left = o + "px";
      }
    }, _getAnchor: function _getAnchor() {
      return [0, 0];
    } }),
      un = hn.extend({ options: { maxWidth: 300, minWidth: 50, maxHeight: null, autoPan: !0, autoPanPaddingTopLeft: null, autoPanPaddingBottomRight: null, autoPanPadding: [5, 5], keepInView: !1, closeButton: !0, autoClose: !0, closeOnEscapeKey: !0, className: "" }, openOn: function openOn(t) {
      return t.openPopup(this), this;
    }, onAdd: function onAdd(t) {
      hn.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Je || this._source.on("preclick", Y));
    }, onRemove: function onRemove(t) {
      hn.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Je || this._source.off("preclick", Y));
    }, getEvents: function getEvents() {
      var t = hn.prototype.getEvents.call(this);return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t;
    }, _close: function _close() {
      this._map && this._map.closePopup(this);
    }, _initLayout: function _initLayout() {
      var t = "leaflet-popup",
          i = this._container = ht("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
          e = this._wrapper = ht("div", t + "-content-wrapper", i);if (this._contentNode = ht("div", t + "-content", e), J(e), X(this._contentNode), V(e, "contextmenu", Y), this._tipContainer = ht("div", t + "-tip-container", i), this._tip = ht("div", t + "-tip", this._tipContainer), this.options.closeButton) {
        var n = this._closeButton = ht("a", t + "-close-button", i);n.href = "#close", n.innerHTML = "&#215;", V(n, "click", this._onCloseButtonClick, this);
      }
    }, _updateLayout: function _updateLayout() {
      var t = this._contentNode,
          i = t.style;i.width = "", i.whiteSpace = "nowrap";var e = t.offsetWidth;e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";var n = t.offsetHeight,
          o = this.options.maxHeight;o && n > o ? (i.height = o + "px", pt(t, "leaflet-popup-scrolled")) : mt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth;
    }, _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
          e = this._getAnchor();Lt(this._container, i.add(e));
    }, _adjustPan: function _adjustPan() {
      if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
        var t = this._map,
            i = parseInt(at(this._container, "marginBottom"), 10) || 0,
            e = this._container.offsetHeight + i,
            n = this._containerWidth,
            o = new x(this._containerLeft, -e - this._containerBottom);o._add(Pt(this._container));var s = t.layerPointToContainerPoint(o),
            r = w(this.options.autoPanPadding),
            a = w(this.options.autoPanPaddingTopLeft || r),
            h = w(this.options.autoPanPaddingBottomRight || r),
            u = t.getSize(),
            l = 0,
            c = 0;s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c]);
      }
    }, _onCloseButtonClick: function _onCloseButtonClick(t) {
      this._close(), Q(t);
    }, _getAnchor: function _getAnchor() {
      return w(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
    } });Le.mergeOptions({ closePopupOnClick: !0 }), Le.include({ openPopup: function openPopup(t, i, e) {
      return t instanceof un || (t = new un(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t));
    }, closePopup: function closePopup(t) {
      return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this;
    } }), Ue.include({ bindPopup: function bindPopup(t, i) {
      return t instanceof un ? (l(t, i), this._popup = t, t._source = this) : (this._popup && !i || (this._popup = new un(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !0), this;
    }, unbindPopup: function unbindPopup() {
      return this._popup && (this.off({ click: this._openPopup, keypress: this._onKeyPress, remove: this.closePopup, move: this._movePopup }), this._popupHandlersAdded = !1, this._popup = null), this;
    }, openPopup: function openPopup(t, i) {
      if (t instanceof Ue || (i = t, t = this), t instanceof qe) for (var e in this._layers) {
        t = this._layers[e];break;
      }return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this;
    }, closePopup: function closePopup() {
      return this._popup && this._popup._close(), this;
    }, togglePopup: function togglePopup(t) {
      return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this;
    }, isPopupOpen: function isPopupOpen() {
      return !!this._popup && this._popup.isOpen();
    }, setPopupContent: function setPopupContent(t) {
      return this._popup && this._popup.setContent(t), this;
    }, getPopup: function getPopup() {
      return this._popup;
    }, _openPopup: function _openPopup(t) {
      var i = t.layer || t.target;this._popup && this._map && (Q(t), i instanceof Je ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng));
    }, _movePopup: function _movePopup(t) {
      this._popup.setLatLng(t.latlng);
    }, _onKeyPress: function _onKeyPress(t) {
      13 === t.originalEvent.keyCode && this._openPopup(t);
    } });var ln = hn.extend({ options: { pane: "tooltipPane", offset: [0, 0], direction: "auto", permanent: !1, sticky: !1, interactive: !1, opacity: .9 }, onAdd: function onAdd(t) {
      hn.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
    }, onRemove: function onRemove(t) {
      hn.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && this._source.fire("tooltipclose", { tooltip: this }, !0);
    }, getEvents: function getEvents() {
      var t = hn.prototype.getEvents.call(this);return Vi && !this.options.permanent && (t.preclick = this._close), t;
    }, _close: function _close() {
      this._map && this._map.closeTooltip(this);
    }, _initLayout: function _initLayout() {
      var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");this._contentNode = this._container = ht("div", t);
    }, _updateLayout: function _updateLayout() {}, _adjustPan: function _adjustPan() {}, _setPosition: function _setPosition(t) {
      var i = this._map,
          e = this._container,
          n = i.latLngToContainerPoint(i.getCenter()),
          o = i.layerPointToContainerPoint(t),
          s = this.options.direction,
          r = e.offsetWidth,
          a = e.offsetHeight,
          h = w(this.options.offset),
          u = this._getAnchor();"top" === s ? t = t.add(w(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t = t.subtract(w(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(w(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(w(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(w(r + u.x - h.x, a / 2 - u.y - h.y, !0))), mt(e, "leaflet-tooltip-right"), mt(e, "leaflet-tooltip-left"), mt(e, "leaflet-tooltip-top"), mt(e, "leaflet-tooltip-bottom"), pt(e, "leaflet-tooltip-" + s), Lt(e, t);
    }, _updatePosition: function _updatePosition() {
      var t = this._map.latLngToLayerPoint(this._latlng);this._setPosition(t);
    }, setOpacity: function setOpacity(t) {
      this.options.opacity = t, this._container && vt(this._container, t);
    }, _animateZoom: function _animateZoom(t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);this._setPosition(i);
    }, _getAnchor: function _getAnchor() {
      return w(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
    } });Le.include({ openTooltip: function openTooltip(t, i, e) {
      return t instanceof ln || (t = new ln(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t);
    }, closeTooltip: function closeTooltip(t) {
      return t && this.removeLayer(t), this;
    } }), Ue.include({ bindTooltip: function bindTooltip(t, i) {
      return t instanceof ln ? (l(t, i), this._tooltip = t, t._source = this) : (this._tooltip && !i || (this._tooltip = new ln(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
    }, unbindTooltip: function unbindTooltip() {
      return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
    }, _initTooltipInteractions: function _initTooltipInteractions(t) {
      if (t || !this._tooltipHandlersAdded) {
        var i = t ? "off" : "on",
            e = { remove: this.closeTooltip, move: this._moveTooltip };this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), Vi && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t;
      }
    }, openTooltip: function openTooltip(t, i) {
      if (t instanceof Ue || (i = t, t = this), t instanceof qe) for (var e in this._layers) {
        t = this._layers[e];break;
      }return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (pt(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this;
    }, closeTooltip: function closeTooltip() {
      return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (mt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this;
    }, toggleTooltip: function toggleTooltip(t) {
      return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this;
    }, isTooltipOpen: function isTooltipOpen() {
      return this._tooltip.isOpen();
    }, setTooltipContent: function setTooltipContent(t) {
      return this._tooltip && this._tooltip.setContent(t), this;
    }, getTooltip: function getTooltip() {
      return this._tooltip;
    }, _openTooltip: function _openTooltip(t) {
      var i = t.layer || t.target;this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
    }, _moveTooltip: function _moveTooltip(t) {
      var i,
          e,
          n = t.latlng;this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n);
    } });var cn = Ge.extend({ options: { iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon" }, createIcon: function createIcon(t) {
      var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
          e = this.options;if (i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
        var n = w(e.bgPos);i.style.backgroundPosition = -n.x + "px " + -n.y + "px";
      }return this._setIconStyles(i, "icon"), i;
    }, createShadow: function createShadow() {
      return null;
    } });Ge.Default = Ke;var _n = Ue.extend({ options: { tileSize: 256, opacity: 1, updateWhenIdle: ji, updateWhenZooming: !0, updateInterval: 200, zIndex: 1, bounds: null, minZoom: 0, maxZoom: void 0, maxNativeZoom: void 0, minNativeZoom: void 0, noWrap: !1, pane: "tilePane", className: "", keepBuffer: 2 }, initialize: function initialize(t) {
      l(this, t);
    }, onAdd: function onAdd() {
      this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update();
    }, beforeAdd: function beforeAdd(t) {
      t._addZoomLimit(this);
    }, onRemove: function onRemove(t) {
      this._removeAllTiles(), ut(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
    }, bringToFront: function bringToFront() {
      return this._map && (ct(this._container), this._setAutoZIndex(Math.max)), this;
    }, bringToBack: function bringToBack() {
      return this._map && (_t(this._container), this._setAutoZIndex(Math.min)), this;
    }, getContainer: function getContainer() {
      return this._container;
    }, setOpacity: function setOpacity(t) {
      return this.options.opacity = t, this._updateOpacity(), this;
    }, setZIndex: function setZIndex(t) {
      return this.options.zIndex = t, this._updateZIndex(), this;
    }, isLoading: function isLoading() {
      return this._loading;
    }, redraw: function redraw() {
      return this._map && (this._removeAllTiles(), this._update()), this;
    }, getEvents: function getEvents() {
      var t = { viewprereset: this._invalidateAll, viewreset: this._resetView, zoom: this._resetView, moveend: this._onMoveEnd };return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
    }, createTile: function createTile() {
      return document.createElement("div");
    }, getTileSize: function getTileSize() {
      var t = this.options.tileSize;return t instanceof x ? t : new x(t, t);
    }, _updateZIndex: function _updateZIndex() {
      this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex);
    }, _setAutoZIndex: function _setAutoZIndex(t) {
      for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) {
        i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
      }isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex());
    }, _updateOpacity: function _updateOpacity() {
      if (this._map && !Li) {
        vt(this._container, this.options.opacity);var t = +new Date(),
            i = !1,
            e = !1;for (var n in this._tiles) {
          var o = this._tiles[n];if (o.current && o.loaded) {
            var s = Math.min(1, (t - o.loaded) / 200);vt(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0);
          }
        }e && !this._noPrune && this._pruneTiles(), i && (g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this));
      }
    }, _onOpaqueTile: r, _initContainer: function _initContainer() {
      this._container || (this._container = ht("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
    }, _updateLevels: function _updateLevels() {
      var t = this._tileZoom,
          i = this.options.maxZoom;if (void 0 !== t) {
        for (var e in this._levels) {
          this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ut(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
        }var n = this._levels[t],
            o = this._map;return n || ((n = this._levels[t] = {}).el = ht("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n;
      }
    }, _onUpdateLevel: r, _onRemoveLevel: r, _onCreateLevel: r, _pruneTiles: function _pruneTiles() {
      if (this._map) {
        var t,
            i,
            e = this._map.getZoom();if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();else {
          for (t in this._tiles) {
            (i = this._tiles[t]).retain = i.current;
          }for (t in this._tiles) {
            if ((i = this._tiles[t]).current && !i.active) {
              var n = i.coords;this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
            }
          }for (t in this._tiles) {
            this._tiles[t].retain || this._removeTile(t);
          }
        }
      }
    }, _removeTilesAtZoom: function _removeTilesAtZoom(t) {
      for (var i in this._tiles) {
        this._tiles[i].coords.z === t && this._removeTile(i);
      }
    }, _removeAllTiles: function _removeAllTiles() {
      for (var t in this._tiles) {
        this._removeTile(t);
      }
    }, _invalidateAll: function _invalidateAll() {
      for (var t in this._levels) {
        ut(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
      }this._removeAllTiles(), this._tileZoom = void 0;
    }, _retainParent: function _retainParent(t, i, e, n) {
      var o = Math.floor(t / 2),
          s = Math.floor(i / 2),
          r = e - 1,
          a = new x(+o, +s);a.z = +r;var h = this._tileCoordsToKey(a),
          u = this._tiles[h];return u && u.active ? (u.retain = !0, !0) : (u && u.loaded && (u.retain = !0), r > n && this._retainParent(o, s, r, n));
    }, _retainChildren: function _retainChildren(t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++) {
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new x(o, s);r.z = e + 1;var a = this._tileCoordsToKey(r),
              h = this._tiles[a];h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
      }
    }, _resetView: function _resetView(t) {
      var i = t && (t.pinch || t.flyTo);this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
    }, _animateZoom: function _animateZoom(t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    }, _clampZoom: function _clampZoom(t) {
      var i = this.options;return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t;
    }, _setView: function _setView(t, i, e, n) {
      var o = this._clampZoom(Math.round(i));(void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);var s = this.options.updateWhenZooming && o !== this._tileZoom;n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i);
    }, _setZoomTransforms: function _setZoomTransforms(t, i) {
      for (var e in this._levels) {
        this._setZoomTransform(this._levels[e], t, i);
      }
    }, _setZoomTransform: function _setZoomTransform(t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
          o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();Ni ? wt(t.el, o, n) : Lt(t.el, o);
    }, _resetGrid: function _resetGrid() {
      var t = this._map,
          i = t.options.crs,
          e = this._tileSize = this.getTileSize(),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)];
    }, _onMoveEnd: function _onMoveEnd() {
      this._map && !this._map._animatingZoom && this._update();
    }, _getTiledPixelBounds: function _getTiledPixelBounds(t) {
      var i = this._map,
          e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
          n = i.getZoomScale(e, this._tileZoom),
          o = i.project(t, this._tileZoom).floor(),
          s = i.getSize().divideBy(2 * n);return new P(o.subtract(s), o.add(s));
    }, _update: function _update(t) {
      var i = this._map;if (i) {
        var e = this._clampZoom(i.getZoom());if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
          var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              r = [],
              a = this.options.keepBuffer,
              h = new P(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");for (var u in this._tiles) {
            var l = this._tiles[u].coords;l.z === this._tileZoom && h.contains(new x(l.x, l.y)) || (this._tiles[u].current = !1);
          }if (Math.abs(e - this._tileZoom) > 1) this._setView(t, e);else {
            for (var c = o.min.y; c <= o.max.y; c++) {
              for (var _ = o.min.x; _ <= o.max.x; _++) {
                var d = new x(_, c);if (d.z = this._tileZoom, this._isValidTile(d)) {
                  var p = this._tiles[this._tileCoordsToKey(d)];p ? p.current = !0 : r.push(d);
                }
              }
            }if (r.sort(function (t, i) {
              return t.distanceTo(s) - i.distanceTo(s);
            }), 0 !== r.length) {
              this._loading || (this._loading = !0, this.fire("loading"));var m = document.createDocumentFragment();for (_ = 0; _ < r.length; _++) {
                this._addTile(r[_], m);
              }this._level.el.appendChild(m);
            }
          }
        }
      }
    }, _isValidTile: function _isValidTile(t) {
      var i = this._map.options.crs;if (!i.infinite) {
        var e = this._globalTileRange;if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1;
      }if (!this.options.bounds) return !0;var n = this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n);
    }, _keyToBounds: function _keyToBounds(t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    }, _tileCoordsToNwSe: function _tileCoordsToNwSe(t) {
      var i = this._map,
          e = this.getTileSize(),
          n = t.scaleBy(e),
          o = n.add(e);return [i.unproject(n, t.z), i.unproject(o, t.z)];
    }, _tileCoordsToBounds: function _tileCoordsToBounds(t) {
      var i = this._tileCoordsToNwSe(t),
          e = new T(i[0], i[1]);return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
    }, _tileCoordsToKey: function _tileCoordsToKey(t) {
      return t.x + ":" + t.y + ":" + t.z;
    }, _keyToTileCoords: function _keyToTileCoords(t) {
      var i = t.split(":"),
          e = new x(+i[0], +i[1]);return e.z = +i[2], e;
    }, _removeTile: function _removeTile(t) {
      var i = this._tiles[t];i && (Ci || i.el.setAttribute("src", ni), ut(i.el), delete this._tiles[t], this.fire("tileunload", { tile: i.el, coords: this._keyToTileCoords(t) }));
    }, _initTile: function _initTile(t) {
      pt(t, "leaflet-tile");var i = this.getTileSize();t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = r, t.onmousemove = r, Li && this.options.opacity < 1 && vt(t, this.options.opacity), Ti && !zi && (t.style.WebkitBackfaceVisibility = "hidden");
    }, _addTile: function _addTile(t, i) {
      var n = this._getTilePos(t),
          o = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), e(this._tileReady, this, t));this._initTile(s), this.createTile.length < 2 && f(e(this._tileReady, this, t, null, s)), Lt(s, n), this._tiles[o] = { el: s, coords: t, current: !0 }, i.appendChild(s), this.fire("tileloadstart", { tile: s, coords: t });
    }, _tileReady: function _tileReady(t, i, n) {
      if (this._map) {
        i && this.fire("tileerror", { error: i, tile: n, coords: t });var o = this._tileCoordsToKey(t);(n = this._tiles[o]) && (n.loaded = +new Date(), this._map._fadeAnimated ? (vt(n.el, 0), g(this._fadeFrame), this._fadeFrame = f(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), i || (pt(n.el, "leaflet-tile-loaded"), this.fire("tileload", { tile: n.el, coords: t })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Li || !this._map._fadeAnimated ? f(this._pruneTiles, this) : setTimeout(e(this._pruneTiles, this), 250)));
      }
    }, _getTilePos: function _getTilePos(t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    }, _wrapCoords: function _wrapCoords(t) {
      var i = new x(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);return i.z = t.z, i;
    }, _pxBoundsToTileRange: function _pxBoundsToTileRange(t) {
      var i = this.getTileSize();return new P(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]));
    }, _noTilesToLoad: function _noTilesToLoad() {
      for (var t in this._tiles) {
        if (!this._tiles[t].loaded) return !1;
      }return !0;
    } }),
      dn = _n.extend({ options: { minZoom: 0, maxZoom: 18, subdomains: "abc", errorTileUrl: "", zoomOffset: 0, tms: !1, zoomReverse: !1, detectRetina: !1, crossOrigin: !1 }, initialize: function initialize(t, i) {
      this._url = t, (i = l(this, i)).detectRetina && Ki && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), Ti || this.on("tileunload", this._onTileRemove);
    }, setUrl: function setUrl(t, i) {
      return this._url = t, i || this.redraw(), this;
    }, createTile: function createTile(t, i) {
      var n = document.createElement("img");return V(n, "load", e(this._tileOnLoad, this, i, n)), V(n, "error", e(this._tileOnError, this, i, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n;
    }, getTileUrl: function getTileUrl(t) {
      var e = { r: Ki ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl() };if (this._map && !this._map.options.crs.infinite) {
        var n = this._globalTileRange.max.y - t.y;this.options.tms && (e.y = n), e["-y"] = n;
      }return _(this._url, i(e, this.options));
    }, _tileOnLoad: function _tileOnLoad(t, i) {
      Li ? setTimeout(e(t, this, null, i), 0) : t(null, i);
    }, _tileOnError: function _tileOnError(t, i, e) {
      var n = this.options.errorTileUrl;n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
    }, _onTileRemove: function _onTileRemove(t) {
      t.tile.onload = null;
    }, _getZoomForUrl: function _getZoomForUrl() {
      var t = this._tileZoom,
          i = this.options.maxZoom,
          e = this.options.zoomReverse,
          n = this.options.zoomOffset;return e && (t = i - t), t + n;
    }, _getSubdomain: function _getSubdomain(t) {
      var i = Math.abs(t.x + t.y) % this.options.subdomains.length;return this.options.subdomains[i];
    }, _abortLoading: function _abortLoading() {
      var t, i;for (t in this._tiles) {
        this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = r, i.onerror = r, i.complete || (i.src = ni, ut(i), delete this._tiles[t]));
      }
    } }),
      pn = dn.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", layers: "", styles: "", format: "image/jpeg", transparent: !1, version: "1.1.1" }, options: { crs: null, uppercase: !1 }, initialize: function initialize(t, e) {
      this._url = t;var n = i({}, this.defaultWmsParams);for (var o in e) {
        o in this.options || (n[o] = e[o]);
      }var s = (e = l(this, e)).detectRetina && Ki ? 2 : 1,
          r = this.getTileSize();n.width = r.x * s, n.height = r.y * s, this.wmsParams = n;
    }, onAdd: function onAdd(t) {
      this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);var i = this._wmsVersion >= 1.3 ? "crs" : "srs";this.wmsParams[i] = this._crs.code, dn.prototype.onAdd.call(this, t);
    }, getTileUrl: function getTileUrl(t) {
      var i = this._tileCoordsToNwSe(t),
          e = this._crs,
          n = b(e.project(i[0]), e.project(i[1])),
          o = n.min,
          s = n.max,
          r = (this._wmsVersion >= 1.3 && this._crs === He ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
          a = L.TileLayer.prototype.getTileUrl.call(this, t);return a + c(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r;
    }, setParams: function setParams(t, e) {
      return i(this.wmsParams, t), e || this.redraw(), this;
    } });dn.WMS = pn, Yt.wms = function (t, i) {
    return new pn(t, i);
  };var mn = Ue.extend({ options: { padding: .1, tolerance: 0 }, initialize: function initialize(t) {
      l(this, t), n(this), this._layers = this._layers || {};
    }, onAdd: function onAdd() {
      this._container || (this._initContainer(), this._zoomAnimated && pt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
    }, onRemove: function onRemove() {
      this.off("update", this._updatePaths, this), this._destroyContainer();
    }, getEvents: function getEvents() {
      var t = { viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd };return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
    }, _onAnimZoom: function _onAnimZoom(t) {
      this._updateTransform(t.center, t.zoom);
    }, _onZoom: function _onZoom() {
      this._updateTransform(this._map.getCenter(), this._map.getZoom());
    }, _updateTransform: function _updateTransform(t, i) {
      var e = this._map.getZoomScale(i, this._zoom),
          n = Pt(this._container),
          o = this._map.getSize().multiplyBy(.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i).subtract(s),
          a = o.multiplyBy(-e).add(n).add(o).subtract(r);Ni ? wt(this._container, a, e) : Lt(this._container, a);
    }, _reset: function _reset() {
      this._update(), this._updateTransform(this._center, this._zoom);for (var t in this._layers) {
        this._layers[t]._reset();
      }
    }, _onZoomEnd: function _onZoomEnd() {
      for (var t in this._layers) {
        this._layers[t]._project();
      }
    }, _updatePaths: function _updatePaths() {
      for (var t in this._layers) {
        this._layers[t]._update();
      }
    }, _update: function _update() {
      var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds = new P(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
    } }),
      fn = mn.extend({ getEvents: function getEvents() {
      var t = mn.prototype.getEvents.call(this);return t.viewprereset = this._onViewPreReset, t;
    }, _onViewPreReset: function _onViewPreReset() {
      this._postponeUpdatePaths = !0;
    }, onAdd: function onAdd() {
      mn.prototype.onAdd.call(this), this._draw();
    }, _initContainer: function _initContainer() {
      var t = this._container = document.createElement("canvas");V(t, "mousemove", o(this._onMouseMove, 32, this), this), V(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), V(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d");
    }, _destroyContainer: function _destroyContainer() {
      delete this._ctx, ut(this._container), q(this._container), delete this._container;
    }, _updatePaths: function _updatePaths() {
      if (!this._postponeUpdatePaths) {
        this._redrawBounds = null;for (var t in this._layers) {
          this._layers[t]._update();
        }this._redraw();
      }
    }, _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        this._drawnLayers = {}, mn.prototype._update.call(this);var t = this._bounds,
            i = this._container,
            e = t.getSize(),
            n = Ki ? 2 : 1;Lt(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Ki && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
      }
    }, _reset: function _reset() {
      mn.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
    }, _initPath: function _initPath(t) {
      this._updateDashArray(t), this._layers[n(t)] = t;var i = t._order = { layer: t, prev: this._drawLast, next: null };this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast;
    }, _addPath: function _addPath(t) {
      this._requestRedraw(t);
    }, _removePath: function _removePath(t) {
      var i = t._order,
          e = i.next,
          n = i.prev;e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t);
    }, _updatePath: function _updatePath(t) {
      this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
    }, _updateStyle: function _updateStyle(t) {
      this._updateDashArray(t), this._requestRedraw(t);
    }, _updateDashArray: function _updateDashArray(t) {
      if (t.options.dashArray) {
        var i,
            e = t.options.dashArray.split(","),
            n = [];for (i = 0; i < e.length; i++) {
          n.push(Number(e[i]));
        }t.options._dashArray = n;
      }
    }, _requestRedraw: function _requestRedraw(t) {
      this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || f(this._redraw, this));
    }, _extendRedrawBounds: function _extendRedrawBounds(t) {
      if (t._pxBounds) {
        var i = (t.options.weight || 0) + 1;this._redrawBounds = this._redrawBounds || new P(), this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]));
      }
    }, _redraw: function _redraw() {
      this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
    }, _clear: function _clear() {
      var t = this._redrawBounds;if (t) {
        var i = t.getSize();this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y);
      } else this._ctx.clearRect(0, 0, this._container.width, this._container.height);
    }, _draw: function _draw() {
      var t,
          i = this._redrawBounds;if (this._ctx.save(), i) {
        var e = i.getSize();this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip();
      }this._drawing = !0;for (var n = this._drawFirst; n; n = n.next) {
        t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
      }this._drawing = !1, this._ctx.restore();
    }, _updatePoly: function _updatePoly(t, i) {
      if (this._drawing) {
        var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;if (a) {
          for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), e = 0; e < a; e++) {
            for (n = 0, o = r[e].length; n < o; n++) {
              s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
            }i && h.closePath();
          }this._fillStroke(h, t);
        }
      }
    }, _updateCircle: function _updateCircle(t) {
      if (this._drawing && !t._empty()) {
        var i = t._point,
            e = this._ctx,
            n = Math.max(Math.round(t._radius), 1),
            o = (Math.max(Math.round(t._radiusY), 1) || n) / n;this._drawnLayers[t._leaflet_id] = t, 1 !== o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && e.restore(), this._fillStroke(e, t);
      }
    }, _fillStroke: function _fillStroke(t, i) {
      var e = i.options;e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke());
    }, _onClick: function _onClick(t) {
      for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) {
        (i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
      }e && (et(t), this._fireEvent([e], t));
    }, _onMouseMove: function _onMouseMove(t) {
      if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
        var i = this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t, i);
      }
    }, _handleMouseOut: function _handleMouseOut(t) {
      var i = this._hoveredLayer;i && (mt(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null);
    }, _handleMouseHover: function _handleMouseHover(t, i) {
      for (var e, n, o = this._drawFirst; o; o = o.next) {
        (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
      }n !== this._hoveredLayer && (this._handleMouseOut(t), n && (pt(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t);
    }, _fireEvent: function _fireEvent(t, i, e) {
      this._map._fireDOMEvent(i, e || i.type, t);
    }, _bringToFront: function _bringToFront(t) {
      var i = t._order,
          e = i.next,
          n = i.prev;e && (e.prev = n, n ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, this._drawLast.next = i, i.next = null, this._drawLast = i, this._requestRedraw(t));
    }, _bringToBack: function _bringToBack(t) {
      var i = t._order,
          e = i.next,
          n = i.prev;n && (n.next = e, e ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t));
    } }),
      gn = function () {
    try {
      return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
        return document.createElement("<lvml:" + t + ' class="lvml">');
      };
    } catch (t) {
      return function (t) {
        return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
      };
    }
  }(),
      vn = { _initContainer: function _initContainer() {
      this._container = ht("div", "leaflet-vml-container");
    }, _update: function _update() {
      this._map._animatingZoom || (mn.prototype._update.call(this), this.fire("update"));
    }, _initPath: function _initPath(t) {
      var i = t._container = gn("shape");pt(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = gn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t;
    }, _addPath: function _addPath(t) {
      var i = t._container;this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i);
    }, _removePath: function _removePath(t) {
      var i = t._container;ut(i), t.removeInteractiveTarget(i), delete this._layers[n(t)];
    }, _updateStyle: function _updateStyle(t) {
      var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = gn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = ei(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = gn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null);
    }, _updateCircle: function _updateCircle(t) {
      var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600");
    }, _setPath: function _setPath(t, i) {
      t._path.v = i;
    }, _bringToFront: function _bringToFront(t) {
      ct(t._container);
    }, _bringToBack: function _bringToBack(t) {
      _t(t._container);
    } },
      yn = Ji ? gn : E,
      xn = mn.extend({ getEvents: function getEvents() {
      var t = mn.prototype.getEvents.call(this);return t.zoomstart = this._onZoomStart, t;
    }, _initContainer: function _initContainer() {
      this._container = yn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = yn("g"), this._container.appendChild(this._rootGroup);
    }, _destroyContainer: function _destroyContainer() {
      ut(this._container), q(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
    }, _onZoomStart: function _onZoomStart() {
      this._update();
    }, _update: function _update() {
      if (!this._map._animatingZoom || !this._bounds) {
        mn.prototype._update.call(this);var t = this._bounds,
            i = t.getSize(),
            e = this._container;this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), Lt(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update");
      }
    }, _initPath: function _initPath(t) {
      var i = t._path = yn("path");t.options.className && pt(i, t.options.className), t.options.interactive && pt(i, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t;
    }, _addPath: function _addPath(t) {
      this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
    }, _removePath: function _removePath(t) {
      ut(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)];
    }, _updatePath: function _updatePath(t) {
      t._project(), t._update();
    }, _updateStyle: function _updateStyle(t) {
      var i = t._path,
          e = t.options;i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"));
    }, _updatePoly: function _updatePoly(t, i) {
      this._setPath(t, k(t._parts, i));
    }, _updateCircle: function _updateCircle(t) {
      var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
          o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";this._setPath(t, o);
    }, _setPath: function _setPath(t, i) {
      t._path.setAttribute("d", i);
    }, _bringToFront: function _bringToFront(t) {
      ct(t._path);
    }, _bringToBack: function _bringToBack(t) {
      _t(t._path);
    } });Ji && xn.include(vn), Le.include({ getRenderer: function getRenderer(t) {
      var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;return i || (i = this._renderer = this.options.preferCanvas && Xt() || Jt()), this.hasLayer(i) || this.addLayer(i), i;
    }, _getPaneRenderer: function _getPaneRenderer(t) {
      if ("overlayPane" === t || void 0 === t) return !1;var i = this._paneRenderers[t];return void 0 === i && (i = xn && Jt({ pane: t }) || fn && Xt({ pane: t }), this._paneRenderers[t] = i), i;
    } });var wn = en.extend({ initialize: function initialize(t, i) {
      en.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    }, setBounds: function setBounds(t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    }, _boundsToLatLngs: function _boundsToLatLngs(t) {
      return t = z(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()];
    } });xn.create = yn, xn.pointsToPath = k, nn.geometryToLayer = Wt, nn.coordsToLatLng = Ht, nn.coordsToLatLngs = Ft, nn.latLngToCoords = Ut, nn.latLngsToCoords = Vt, nn.getFeature = qt, nn.asFeature = Gt, Le.mergeOptions({ boxZoom: !0 });var Ln = Ze.extend({ initialize: function initialize(t) {
      this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
    }, addHooks: function addHooks() {
      V(this._container, "mousedown", this._onMouseDown, this);
    }, removeHooks: function removeHooks() {
      q(this._container, "mousedown", this._onMouseDown, this);
    }, moved: function moved() {
      return this._moved;
    }, _destroy: function _destroy() {
      ut(this._pane), delete this._pane;
    }, _resetState: function _resetState() {
      this._resetStateTimeout = 0, this._moved = !1;
    }, _clearDeferredResetState: function _clearDeferredResetState() {
      0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
    }, _onMouseDown: function _onMouseDown(t) {
      if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;this._clearDeferredResetState(), this._resetState(), mi(), bt(), this._startPoint = this._map.mouseEventToContainerPoint(t), V(document, { contextmenu: Q, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
    }, _onMouseMove: function _onMouseMove(t) {
      this._moved || (this._moved = !0, this._box = ht("div", "leaflet-zoom-box", this._container), pt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);var i = new P(this._point, this._startPoint),
          e = i.getSize();Lt(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px";
    }, _finish: function _finish() {
      this._moved && (ut(this._box), mt(this._container, "leaflet-crosshair")), fi(), Tt(), q(document, { contextmenu: Q, mousemove: this._onMouseMove, mouseup: this._onMouseUp, keydown: this._onKeyDown }, this);
    }, _onMouseUp: function _onMouseUp(t) {
      if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
        this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(e(this._resetState, this), 0);var i = new T(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i });
      }
    }, _onKeyDown: function _onKeyDown(t) {
      27 === t.keyCode && this._finish();
    } });Le.addInitHook("addHandler", "boxZoom", Ln), Le.mergeOptions({ doubleClickZoom: !0 });var Pn = Ze.extend({ addHooks: function addHooks() {
      this._map.on("dblclick", this._onDoubleClick, this);
    }, removeHooks: function removeHooks() {
      this._map.off("dblclick", this._onDoubleClick, this);
    }, _onDoubleClick: function _onDoubleClick(t) {
      var i = this._map,
          e = i.getZoom(),
          n = i.options.zoomDelta,
          o = t.originalEvent.shiftKey ? e - n : e + n;"center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o);
    } });Le.addInitHook("addHandler", "doubleClickZoom", Pn), Le.mergeOptions({ dragging: !0, inertia: !zi, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, easeLinearity: .2, worldCopyJump: !1, maxBoundsViscosity: 0 });var bn = Ze.extend({ addHooks: function addHooks() {
      if (!this._draggable) {
        var t = this._map;this._draggable = new Be(t._mapPane, t._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
      }pt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
    }, removeHooks: function removeHooks() {
      mt(this._map._container, "leaflet-grab"), mt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
    }, moved: function moved() {
      return this._draggable && this._draggable._moved;
    }, moving: function moving() {
      return this._draggable && this._draggable._moving;
    }, _onDragStart: function _onDragStart() {
      var t = this._map;if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
        var i = z(this._map.options.maxBounds);this._offsetLimit = b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
      } else this._offsetLimit = null;t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
    }, _onDrag: function _onDrag(t) {
      if (this._map.options.inertia) {
        var i = this._lastTime = +new Date(),
            e = this._lastPos = this._draggable._absPos || this._draggable._newPos;this._positions.push(e), this._times.push(i), this._prunePositions(i);
      }this._map.fire("move", t).fire("drag", t);
    }, _prunePositions: function _prunePositions(t) {
      for (; this._positions.length > 1 && t - this._times[0] > 50;) {
        this._positions.shift(), this._times.shift();
      }
    }, _onZoomEnd: function _onZoomEnd() {
      var t = this._map.getSize().divideBy(2),
          i = this._map.latLngToLayerPoint([0, 0]);this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
    }, _viscousLimit: function _viscousLimit(t, i) {
      return t - (t - i) * this._viscosity;
    }, _onPreDragLimit: function _onPreDragLimit() {
      if (this._viscosity && this._offsetLimit) {
        var t = this._draggable._newPos.subtract(this._draggable._startPos),
            i = this._offsetLimit;t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
      }
    }, _onPreDragWrap: function _onPreDragWrap() {
      var t = this._worldWidth,
          i = Math.round(t / 2),
          e = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = (n - i + e) % t + i - e,
          s = (n + i + e) % t - i - e,
          r = Math.abs(o + e) < Math.abs(s + e) ? o : s;this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r;
    }, _onDragEnd: function _onDragEnd(t) {
      var i = this._map,
          e = i.options,
          n = !e.inertia || this._times.length < 2;if (i.fire("dragend", t), n) i.fire("moveend");else {
        this._prunePositions(+new Date());var o = this._lastPos.subtract(this._positions[0]),
            s = (this._lastTime - this._times[0]) / 1e3,
            r = e.easeLinearity,
            a = o.multiplyBy(r / s),
            h = a.distanceTo([0, 0]),
            u = Math.min(e.inertiaMaxSpeed, h),
            l = a.multiplyBy(u / h),
            c = u / (e.inertiaDeceleration * r),
            _ = l.multiplyBy(-c / 2).round();_.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), f(function () {
          i.panBy(_, { duration: c, easeLinearity: r, noMoveStart: !0, animate: !0 });
        })) : i.fire("moveend");
      }
    } });Le.addInitHook("addHandler", "dragging", bn), Le.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });var Tn = Ze.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 54, 173] }, initialize: function initialize(t) {
      this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
    }, addHooks: function addHooks() {
      var t = this._map._container;t.tabIndex <= 0 && (t.tabIndex = "0"), V(t, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    }, removeHooks: function removeHooks() {
      this._removeHooks(), q(this._map._container, { focus: this._onFocus, blur: this._onBlur, mousedown: this._onMouseDown }, this), this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    }, _onMouseDown: function _onMouseDown() {
      if (!this._focused) {
        var t = document.body,
            i = document.documentElement,
            e = t.scrollTop || i.scrollTop,
            n = t.scrollLeft || i.scrollLeft;this._map._container.focus(), window.scrollTo(n, e);
      }
    }, _onFocus: function _onFocus() {
      this._focused = !0, this._map.fire("focus");
    }, _onBlur: function _onBlur() {
      this._focused = !1, this._map.fire("blur");
    }, _setPanDelta: function _setPanDelta(t) {
      var i,
          e,
          n = this._panKeys = {},
          o = this.keyCodes;for (i = 0, e = o.left.length; i < e; i++) {
        n[o.left[i]] = [-1 * t, 0];
      }for (i = 0, e = o.right.length; i < e; i++) {
        n[o.right[i]] = [t, 0];
      }for (i = 0, e = o.down.length; i < e; i++) {
        n[o.down[i]] = [0, t];
      }for (i = 0, e = o.up.length; i < e; i++) {
        n[o.up[i]] = [0, -1 * t];
      }
    }, _setZoomDelta: function _setZoomDelta(t) {
      var i,
          e,
          n = this._zoomKeys = {},
          o = this.keyCodes;for (i = 0, e = o.zoomIn.length; i < e; i++) {
        n[o.zoomIn[i]] = t;
      }for (i = 0, e = o.zoomOut.length; i < e; i++) {
        n[o.zoomOut[i]] = -t;
      }
    }, _addHooks: function _addHooks() {
      V(document, "keydown", this._onKeyDown, this);
    }, _removeHooks: function _removeHooks() {
      q(document, "keydown", this._onKeyDown, this);
    }, _onKeyDown: function _onKeyDown(t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
            e = t.keyCode,
            n = this._map;if (e in this._panKeys) {
          if (n._panAnim && n._panAnim._inProgress) return;i = this._panKeys[e], t.shiftKey && (i = w(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds);
        } else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;n.closePopup();
        }Q(t);
      }
    } });Le.addInitHook("addHandler", "keyboard", Tn), Le.mergeOptions({ scrollWheelZoom: !0, wheelDebounceTime: 40, wheelPxPerZoomLevel: 60 });var zn = Ze.extend({ addHooks: function addHooks() {
      V(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0;
    }, removeHooks: function removeHooks() {
      q(this._map._container, "mousewheel", this._onWheelScroll, this);
    }, _onWheelScroll: function _onWheelScroll(t) {
      var i = it(t),
          n = this._map.options.wheelDebounceTime;this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date());var o = Math.max(n - (+new Date() - this._startTime), 0);clearTimeout(this._timer), this._timer = setTimeout(e(this._performZoom, this), o), Q(t);
    }, _performZoom: function _performZoom() {
      var t = this._map,
          i = t.getZoom(),
          e = this._map.options.zoomSnap || 0;t._stop();var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
          o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
          s = e ? Math.ceil(o / e) * e : o,
          r = t._limitZoom(i + (this._delta > 0 ? s : -s)) - i;this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r));
    } });Le.addInitHook("addHandler", "scrollWheelZoom", zn), Le.mergeOptions({ tap: !0, tapTolerance: 15 });var Mn = Ze.extend({ addHooks: function addHooks() {
      V(this._map._container, "touchstart", this._onDown, this);
    }, removeHooks: function removeHooks() {
      q(this._map._container, "touchstart", this._onDown, this);
    }, _onDown: function _onDown(t) {
      if (t.touches) {
        if ($(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);var i = t.touches[0],
            n = i.target;this._startPos = this._newPos = new x(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() && pt(n, "leaflet-active"), this._holdTimeout = setTimeout(e(function () {
          this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i));
        }, this), 1e3), this._simulateEvent("mousedown", i), V(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    }, _onUp: function _onUp(t) {
      if (clearTimeout(this._holdTimeout), q(document, { touchmove: this._onMove, touchend: this._onUp }, this), this._fireClick && t && t.changedTouches) {
        var i = t.changedTouches[0],
            e = i.target;e && e.tagName && "a" === e.tagName.toLowerCase() && mt(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i);
      }
    }, _isTapValid: function _isTapValid() {
      return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
    }, _onMove: function _onMove(t) {
      var i = t.touches[0];this._newPos = new x(i.clientX, i.clientY), this._simulateEvent("mousemove", i);
    }, _simulateEvent: function _simulateEvent(t, i) {
      var e = document.createEvent("MouseEvents");e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e);
    } });Vi && !Ui && Le.addInitHook("addHandler", "tap", Mn), Le.mergeOptions({ touchZoom: Vi && !zi, bounceAtZoomLimits: !0 });var Cn = Ze.extend({ addHooks: function addHooks() {
      pt(this._map._container, "leaflet-touch-zoom"), V(this._map._container, "touchstart", this._onTouchStart, this);
    }, removeHooks: function removeHooks() {
      mt(this._map._container, "leaflet-touch-zoom"), q(this._map._container, "touchstart", this._onTouchStart, this);
    }, _onTouchStart: function _onTouchStart(t) {
      var i = this._map;if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
        var e = i.mouseEventToContainerPoint(t.touches[0]),
            n = i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), V(document, "touchmove", this._onTouchMove, this), V(document, "touchend", this._onTouchEnd, this), $(t);
      }
    }, _onTouchMove: function _onTouchMove(t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
            n = i.mouseEventToContainerPoint(t.touches[0]),
            o = i.mouseEventToContainerPoint(t.touches[1]),
            s = n.distanceTo(o) / this._startDist;if (this._zoom = i.getScaleZoom(s, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && s < 1 || this._zoom > i.getMaxZoom() && s > 1) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
          if (this._center = this._startLatLng, 1 === s) return;
        } else {
          var r = n._add(o)._divideBy(2)._subtract(this._centerPoint);if (1 === s && 0 === r.x && 0 === r.y) return;this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom);
        }this._moved || (i._moveStart(!0, !1), this._moved = !0), g(this._animRequest);var a = e(i._move, i, this._center, this._zoom, { pinch: !0, round: !1 });this._animRequest = f(a, this, !0), $(t);
      }
    }, _onTouchEnd: function _onTouchEnd() {
      this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), q(document, "touchmove", this._onTouchMove), q(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1;
    } });Le.addInitHook("addHandler", "touchZoom", Cn), Le.BoxZoom = Ln, Le.DoubleClickZoom = Pn, Le.Drag = bn, Le.Keyboard = Tn, Le.ScrollWheelZoom = zn, Le.Tap = Mn, Le.TouchZoom = Cn;var Zn = window.L;window.L = t, Object.freeze = $t, t.version = "1.3.1+HEAD.ba6f97f", t.noConflict = function () {
    return window.L = Zn, this;
  }, t.Control = Pe, t.control = be, t.Browser = $i, t.Evented = ui, t.Mixin = Ee, t.Util = ai, t.Class = v, t.Handler = Ze, t.extend = i, t.bind = e, t.stamp = n, t.setOptions = l, t.DomEvent = de, t.DomUtil = xe, t.PosAnimation = we, t.Draggable = Be, t.LineUtil = Oe, t.PolyUtil = Re, t.Point = x, t.point = w, t.Bounds = P, t.bounds = b, t.Transformation = Z, t.transformation = S, t.Projection = je, t.LatLng = M, t.latLng = C, t.LatLngBounds = T, t.latLngBounds = z, t.CRS = ci, t.GeoJSON = nn, t.geoJSON = Kt, t.geoJson = sn, t.Layer = Ue, t.LayerGroup = Ve, t.layerGroup = function (t, i) {
    return new Ve(t, i);
  }, t.FeatureGroup = qe, t.featureGroup = function (t) {
    return new qe(t);
  }, t.ImageOverlay = rn, t.imageOverlay = function (t, i, e) {
    return new rn(t, i, e);
  }, t.VideoOverlay = an, t.videoOverlay = function (t, i, e) {
    return new an(t, i, e);
  }, t.DivOverlay = hn, t.Popup = un, t.popup = function (t, i) {
    return new un(t, i);
  }, t.Tooltip = ln, t.tooltip = function (t, i) {
    return new ln(t, i);
  }, t.Icon = Ge, t.icon = function (t) {
    return new Ge(t);
  }, t.DivIcon = cn, t.divIcon = function (t) {
    return new cn(t);
  }, t.Marker = Xe, t.marker = function (t, i) {
    return new Xe(t, i);
  }, t.TileLayer = dn, t.tileLayer = Yt, t.GridLayer = _n, t.gridLayer = function (t) {
    return new _n(t);
  }, t.SVG = xn, t.svg = Jt, t.Renderer = mn, t.Canvas = fn, t.canvas = Xt, t.Path = Je, t.CircleMarker = $e, t.circleMarker = function (t, i) {
    return new $e(t, i);
  }, t.Circle = Qe, t.circle = function (t, i, e) {
    return new Qe(t, i, e);
  }, t.Polyline = tn, t.polyline = function (t, i) {
    return new tn(t, i);
  }, t.Polygon = en, t.polygon = function (t, i) {
    return new en(t, i);
  }, t.Rectangle = wn, t.rectangle = function (t, i) {
    return new wn(t, i);
  }, t.Map = Le, t.map = function (t, i) {
    return new Le(t, i);
  };
});