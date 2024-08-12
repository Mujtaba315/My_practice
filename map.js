! function(n) {
    var i = {};

    function r(e) {
        if (i[e]) return i[e].exports;
        var t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
    }
    r.m = n, r.c = i, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) r.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function(e, t, n) {
    n(2), e.exports = n(1)
}, function(e, t, n) {
    "use strict";
    n.r(t), t.default = n.p + "../css/alula.min.css"
}, function(e, t, n) {
    "use strict";

    function T(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function i(e, t) {
        e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
    }
    /*!
     * GSAP 3.6.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    n.r(t);

    function F(e) {
        return "string" == typeof e
    }

    function d(e) {
        return "function" == typeof e
    }

    function C(e) {
        return "number" == typeof e
    }

    function r(e) {
        return void 0 === e
    }

    function _(e) {
        return "object" == typeof e
    }

    function N(e) {
        return !1 !== e
    }

    function o() {
        return "undefined" != typeof window
    }

    function k(e) {
        return d(e) || F(e)
    }

    function s(e) {
        return (at = mt(e, st)) && hn
    }

    function O(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    }

    function S(e, t) {
        return !t && console.warn(e)
    }

    function a(e, t) {
        return e && (st[e] = t) && at && (at[e] = t) || st
    }

    function E() {
        return 0
    }

    function $(e) {
        var t, n, i = e[0];
        if (_(i) || d(i) || (e = [e]), !(t = (i._gsap || {}).harness)) {
            for (n = ht.length; n-- && !ht[n].targetTest(i););
            t = ht[n]
        }
        for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new qt(e[n], t))) || e.splice(n, 1);
        return e
    }

    function B(e) {
        return e._gsap || $(bt(e))[0]._gsap
    }

    function l(e, t, n) {
        return (n = e[t]) && d(n) ? e[t]() : r(n) && e.getAttribute && e.getAttribute(t) || n
    }

    function f(e, t) {
        return (e = e.split(",")).forEach(t) || e
    }

    function P(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function u(e, t, n) {
        var i, r = C(e[1]),
            o = (r ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[o];
        if (r && (s.duration = e[1]), s.parent = n, t) {
            for (i = s; n && !("immediateRender" in i);) i = n.vars.defaults || {}, n = N(n.vars.inherit) && n.parent;
            s.immediateRender = N(i.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[o - 1]
        }
        return s
    }

    function I() {
        var e, t, n = ut.length,
            i = ut.slice(0);
        for (ct = {}, e = ut.length = 0; e < n; e++)(t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
    }

    function c(e, t, n, i) {
        ut.length && I(), e.render(t, n, i), ut.length && I()
    }

    function p(e) {
        var t = parseFloat(e);
        return (t || 0 === t) && (e + "").match(rt).length < 2 ? t : F(e) ? e.trim() : e
    }

    function h(e) {
        return e
    }

    function R(e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e
    }

    function g(e, t) {
        for (var n in t) n in e || "duration" === n || "ease" === n || (e[n] = t[n])
    }

    function m(e, t) {
        for (var n in t) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = _(t[n]) ? m(e[n] || (e[n] = {}), t[n]) : t[n]);
        return e
    }

    function q(e, t) {
        var n, i = {};
        for (n in e) n in t || (i[n] = e[n]);
        return i
    }

    function A(e) {
        var t = e.parent || ve,
            n = e.keyframes ? g : R;
        if (N(e.inherit))
            for (; t;) n(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    }

    function y(e, t, n, i) {
        void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
        var r = t._prev,
            o = t._next;
        r ? r._next = o : e[n] === t && (e[n] = o), o ? o._prev = r : e[i] === t && (e[i] = r), t._next = t._prev = t.parent = null
    }

    function H(e, t) {
        !e.parent || t && !e.parent.autoRemoveChildren || e.parent.remove(e), e._act = 0
    }

    function v(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var n = e; n;) n._dirty = 1, n = n.parent;
        return e
    }

    function L(e) {
        return !e || e._ts && L(e.parent)
    }

    function D(e) {
        return e._repeat ? yt(e._tTime, e = e.duration() + e._rDelay) * e : 0
    }

    function x(e, t) {
        return (e - t._start) * t._ts + (0 <= t._ts ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    }

    function b(e) {
        return e._end = P(e._start + (e._tDur / Math.abs(e._ts || e._rts || We) || 0))
    }

    function w(e, t) {
        var n = e._dp;
        return n && n.smoothChildTiming && e._ts && (e._start = P(n._time - (0 < e._ts ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), b(e), n._dirty || v(n, e)), e
    }

    function M(e, t) {
        var n;
        if ((t._time || t._initted && !t._dur) && (n = x(e.rawTime(), t), (!t._dur || Dt(0, t.totalDuration(), n) - t._tTime > We) && t.render(n, !0)), v(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (n = e; n._dp;) 0 <= n.rawTime() && n.totalTime(n._tTime), n = n._dp;
            e._zTime = -We
        }
    }

    function j(e, t, n, i) {
        return t.parent && H(t), t._start = P(n + t._delay), t._end = P(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
            function(e, t, n, i, r) {
                void 0 === n && (n = "_first");
                var o, s = e[i = void 0 === i ? "_last" : i];
                if (r)
                    for (o = t[r]; s && s[r] > o;) s = s._prev;
                s ? (t._next = s._next, s._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e
            }(e, t, "_first", "_last", e._sort ? "_start" : 0), e._recent = t, i || M(e, t), e
    }

    function z(e, t) {
        return (st.ScrollTrigger || O("scrollTrigger", t)) && st.ScrollTrigger.create(t, e)
    }

    function W(e, t, n, i) {
        return Yt(e, t), e._initted ? !n && e._pt && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && Te !== Ot.frame ? (ut.push(e), e._lazy = [t, i]) : void 0 : 1
    }

    function X(e) {
        return (e = e.parent) && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || X(e))
    }

    function Y(e, t, n, i) {
        var r = e._repeat,
            o = P(t) || 0;
        return (t = e._tTime / e._tDur) && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = r ? r < 0 ? 1e10 : P(o * (r + 1) + e._rDelay * r) : o, t && !i ? w(e, e._tTime = e._tDur * t) : e.parent && b(e), n || v(e.parent, e), e
    }

    function U(e) {
        return e instanceof jt ? v(e) : Y(e, e._dur)
    }

    function V(e, t) {
        var n, i = e.labels,
            r = e._recent || vt,
            o = e.duration() >= ze ? r.endTime(!1) : e._dur;
        return F(t) && (isNaN(t) || t in i) ? "<" === (n = t.charAt(0)) || ">" === n ? ("<" === n ? r._start : r.endTime(0 <= r._repeat)) + (parseFloat(t.substr(1)) || 0) : (n = t.indexOf("=")) < 0 ? (t in i || (i[t] = o), i[t]) : (i = +(t.charAt(n - 1) + t.substr(n + 1)), 1 < n ? V(e, t.substr(0, n - 1)) + i : o + i) : null == t ? o : +t
    }

    function G(e, t) {
        return e || 0 === e ? t(e) : t
    }

    function K(e) {
        if ("string" != typeof e) return "";
        var t = ot.exec(e);
        return t ? e.substr(t.index + t[0].length) : ""
    }

    function Q(e, t) {
        return e && _(e) && "length" in e && (!t && !e.length || e.length - 1 in e && _(e[0])) && !e.nodeType && e !== De
    }

    function Z(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    }

    function J(e) {
        if (d(e)) return e;
        var f = _(e) ? e : {
                each: e
            },
            h = Bt(f.ease),
            g = f.from || 0,
            m = parseFloat(f.base) || 0,
            y = {},
            e = 0 < g && g < 1,
            v = isNaN(g) || e,
            D = f.axis,
            x = g,
            b = g;
        return F(g) ? x = b = {
                center: .5,
                edges: .5,
                end: 1
            } [g] || 0 : !e && v && (x = g[0], b = g[1]),
            function(e, t, n) {
                var i, r, o, s, a, l, u, c, d = (n || f).length,
                    p = y[d];
                if (!p) {
                    if (!(c = "auto" === f.grid ? 0 : (f.grid || [1, ze])[1])) {
                        for (l = -ze; l < (l = n[c++].getBoundingClientRect().left) && c < d;);
                        c--
                    }
                    for (p = y[d] = [], i = v ? Math.min(c, d) * x - .5 : g % c, r = v ? d * b / c - .5 : g / c | 0, u = ze, a = l = 0; a < d; a++) o = a % c - i, s = r - (a / c | 0), p[a] = s = D ? Math.abs("y" === D ? s : o) : Ve(o * o + s * s), l < s && (l = s), s < u && (u = s);
                    "random" === g && Z(p), p.max = l - u, p.min = u, p.v = d = (parseFloat(f.amount) || parseFloat(f.each) * (d < c ? d - 1 : D ? "y" === D ? d / c : c : Math.max(c, d / c)) || 0) * ("edges" === g ? -1 : 1), p.b = d < 0 ? m - d : m, p.u = K(f.amount || f.each) || 0, h = h && d < 0 ? $t(h) : h
                }
                return d = (p[e] - p.min) / p.max || 0, P(p.b + (h ? h(d) : d) * p.v) + p.u
            }
    }

    function ee(n) {
        var i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1;
        return function(e) {
            var t = Math.round(parseFloat(e) / n) * n * i;
            return (t - t % 1) / i + (C(e) ? 0 : K(e))
        }
    }

    function te(e, t, n, i) {
        return G(Ze(e) ? !t : !0 === n ? !!(n = 0) : !i, function() {
            return Ze(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * i) / i
        })
    }

    function ne(t, n, e) {
        return G(e, function(e) {
            return t[~~n(e)]
        })
    }

    function ie(t, e, n) {
        var i = e - t;
        return Ze(t) ? ne(t, ie(0, t.length), e) : G(n, function(e) {
            return (i + (e - t) % i) % i + t
        })
    }

    function re(e) {
        for (var t, n, i, r, o = 0, s = ""; ~(t = e.indexOf("random(", o));) i = e.indexOf(")", t), r = "[" === e.charAt(t + 7), n = e.substr(t + 7, i - t - 7).match(r ? rt : Je), s += e.substr(o, t - o) + te(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), o = i + 1;
        return s + e.substr(o, e.length - o)
    }

    function oe(e, t, n) {
        var i, r, o, s = e.labels,
            a = ze;
        for (i in s)(r = s[i] - t) < 0 == !!n && r && a > (r = Math.abs(r)) && (o = i, a = r);
        return o
    }

    function se(e) {
        return H(e), e.progress() < 1 && kt(e, "onInterrupt"), e
    }

    function ae(e, t, n) {
        return (6 * (e = e < 0 ? e + 1 : 1 < e ? e - 1 : e) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * St + .5 | 0
    }

    function le(e, t, n) {
        var i, r, o, s, a, l, u, c = e ? C(e) ? [e >> 16, e >> 8 & St, e & St] : 0 : Et.black;
        if (!c) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Et[e]) c = Et[e];
            else if ("#" === e.charAt(0)) {
                if (9 === (e = e.length < 6 ? "#" + (i = e.charAt(1)) + i + (r = e.charAt(2)) + r + (o = e.charAt(3)) + o + (5 === e.length ? e.charAt(4) + e.charAt(4) : "") : e).length) return [(c = parseInt(e.substr(1, 6), 16)) >> 16, c >> 8 & St, c & St, parseInt(e.substr(7), 16) / 255];
                c = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & St, e & St]
            } else if ("hsl" === e.substr(0, 3))
                if (c = u = e.match(Je), t) {
                    if (~e.indexOf("=")) return c = e.match(et), n && c.length < 4 && (c[3] = 1), c
                } else s = +c[0] % 360 / 360, a = +c[1] / 100, i = 2 * (l = +c[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < c.length && (c[3] *= 1), c[0] = ae(s + 1 / 3, i, r), c[1] = ae(s, i, r), c[2] = ae(s - 1 / 3, i, r);
            else c = e.match(Je) || Et.transparent;
            c = c.map(Number)
        }
        return t && !u && (i = c[0] / St, r = c[1] / St, o = c[2] / St, l = ((e = Math.max(i, r, o)) + (t = Math.min(i, r, o))) / 2, e === t ? s = a = 0 : (u = e - t, a = .5 < l ? u / (2 - e - t) : u / (e + t), s = e === i ? (r - o) / u + (r < o ? 6 : 0) : e === r ? (o - i) / u + 2 : (i - r) / u + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * a + .5), c[2] = ~~(100 * l + .5)), n && c.length < 4 && (c[3] = 1), c
    }

    function ue(e) {
        var t = [],
            n = [],
            i = -1;
        return e.split(At).forEach(function(e) {
            e = e.match(tt) || [];
            t.push.apply(t, e), n.push(i += e.length + 1)
        }), t.c = n, t
    }

    function ce(e, t, n) {
        var i, r, o, s, a = "",
            l = (e + a).match(At),
            u = t ? "hsla(" : "rgba(",
            c = 0;
        if (!l) return e;
        if (l = l.map(function(e) {
                return (e = le(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
            }), n && (o = ue(e), (i = n.c).join(a) !== o.c.join(a)))
            for (s = (r = e.replace(At, "1").split(tt)).length - 1; c < s; c++) a += r[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (o.length ? o : l.length ? l : n).shift());
        if (!r)
            for (s = (r = e.split(At)).length - 1; c < s; c++) a += r[c] + l[c];
        return a + r[s]
    }

    function de(e) {
        var t = e.join(" ");
        if (At.lastIndex = 0, At.test(t)) return t = Ft.test(t), e[1] = ce(e[1], t), e[0] = ce(e[0], t, ue(e[1])), !0
    }

    function pe(e) {
        var t, n, i, r = (e + "").split("("),
            o = Mt[r[0]];
        return o && 1 < r.length && o.config ? o.config.apply(null, ~e.indexOf("{") ? [function(e) {
            for (var t, n, i, r = {}, o = e.substr(1, e.length - 3).split(":"), s = o[0], a = 1, l = o.length; a < l; a++) n = o[a], t = a !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, t), r[s] = isNaN(i) ? i.replace(Nt, "").trim() : +i, s = n.substr(t + 1).trim();
            return r
        }(r[1])] : (n = (t = e).indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", n), t.substring(n, ~r && r < i ? t.indexOf(")", i + 1) : i).split(",").map(p))) : Mt._CE && Pt.test(e) ? Mt._CE("", e) : o
    }

    function fe(e, t) {
        for (var n, i = e._first; i;) i instanceof jt ? fe(i, t) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === t || (i.timeline ? fe(i.timeline, t) : (n = i._ease, i._ease = i._yEase, i._yEase = n, i._yoyo = t)), i = i._next
    }

    function he(e, t, n, i) {
        void 0 === n && (n = function(e) {
            return 1 - t(1 - e)
        }), void 0 === i && (i = function(e) {
            return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
        });
        var r, o = {
            easeIn: t,
            easeOut: n,
            easeInOut: i
        };
        return f(e, function(e) {
            for (var t in Mt[e] = st[e] = o, Mt[r = e.toLowerCase()] = n, o) Mt[r + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = Mt[e + "." + t] = o[t]
        }), 1
    }

    function ge(t) {
        return function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
        }
    }

    function me(n, e, t) {
        function i(e) {
            return 1 === e ? 1 : r * Math.pow(2, -10 * e) * Ke((e - o) * s) + 1
        }
        var r = 1 <= e ? e : 1,
            o = (s = (t || (n ? .3 : .45)) / (e < 1 ? e : 1)) / Xe * (Math.asin(1 / r) || 0),
            e = "out" === n ? i : "in" === n ? function(e) {
                return 1 - i(1 - e)
            } : ge(i),
            s = Xe / s;
        return e.config = function(e, t) {
            return me(n, e, t)
        }, e
    }
    var ye, ve, De, xe, be, we, Te, Ce, _e, ke, Se, Ee, Ae, Fe, Oe, Le, Me, Pe, Ne, $e, Be, Ie, Re, qe, He = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        je = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        ze = 1e8,
        We = 1 / ze,
        Xe = 2 * Math.PI,
        Ye = Xe / 4,
        Ue = 0,
        Ve = Math.sqrt,
        Ge = Math.cos,
        Ke = Math.sin,
        Qe = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Ze = Array.isArray,
        Je = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        nt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        it = /[+-]=-?[.\d]+/,
        rt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        ot = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        st = {},
        at = {},
        lt = {},
        ut = [],
        ct = {},
        dt = {},
        pt = {},
        ft = 30,
        ht = [],
        gt = "",
        mt = function(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        },
        yt = function(e, t) {
            t = Math.floor(e /= t);
            return e && t === e ? t - 1 : t
        },
        vt = {
            _start: 0,
            endTime: E
        },
        Dt = function(e, t, n) {
            return n < e ? e : t < n ? t : n
        },
        xt = [].slice,
        bt = function(e, t) {
            return !F(e) || t || !xe && Lt() ? Ze(e) ? (n = t, void 0 === i && (i = []), e.forEach(function(e) {
                return F(e) && !n || Q(e, 1) ? i.push.apply(i, bt(e)) : i.push(e)
            }) || i) : Q(e) ? xt.call(e, 0) : e ? [e] : [] : xt.call(be.querySelectorAll(e), 0);
            var n, i
        },
        wt = function(l, e) {
            var u, c, t = Ze(l);
            return !t && _(l) && (u = t = l.radius || ze, l.values ? (l = bt(l.values), (c = !C(l[0])) && (u *= u)) : l = ee(l.increment)), G(e, t ? d(l) ? function(e) {
                return c = l(e), Math.abs(c - e) <= u ? c : e
            } : function(e) {
                for (var t, n, i = parseFloat(c ? e.x : e), r = parseFloat(c ? e.y : 0), o = ze, s = 0, a = l.length; a--;)(t = c ? (t = l[a].x - i) * t + (n = l[a].y - r) * n : Math.abs(l[a] - i)) < o && (o = t, s = a);
                return s = !u || o <= u ? l[s] : e, c || s === e || C(e) ? s : s + K(e)
            } : ee(l))
        },
        Tt = function e(t, n, i) {
            var r = n - t,
                o = 2 * r;
            return Ze(t) ? ne(t, e(0, t.length - 1), n) : G(i, function(e) {
                return t + (r < (e = (o + (e - t) % o) % o || 0) ? o - e : e)
            })
        },
        Ct = function(t, e, n, i, r) {
            var o = e - t,
                s = i - n;
            return G(r, function(e) {
                return n + ((e - t) / o * s || 0)
            })
        },
        _t = function e(t, n, i, r) {
            var o = isNaN(t + n) ? 0 : function(e) {
                return (1 - e) * t + e * n
            };
            if (!o) {
                var s, a, l, u, c, d = F(t),
                    p = {};
                if (!0 === i && (r = 1) && (i = null), d) t = {
                    p: t
                }, n = {
                    p: n
                };
                else if (Ze(t) && !Ze(n)) {
                    for (l = [], u = t.length, c = u - 2, a = 1; a < u; a++) l.push(e(t[a - 1], t[a]));
                    u--, o = function(e) {
                        e *= u;
                        var t = Math.min(c, ~~e);
                        return l[t](e - t)
                    }, i = n
                } else r || (t = mt(Ze(t) ? [] : {}, t));
                if (!l) {
                    for (s in n) Xt.call(p, t, s, "get", n[s]);
                    o = function(e) {
                        return an(e, p) || (d ? t.p : t)
                    }
                }
            }
            return G(i, o)
        },
        kt = function(e, t, n) {
            var i = e.vars,
                r = i[t];
            if (r) return t = i[t + "Params"], e = i.callbackScope || e, n && ut.length && I(), t ? r.apply(e, t) : r.call(e)
        },
        St = 255,
        Et = {
            aqua: [0, St, St],
            lime: [0, St, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, St],
            navy: [0, 0, 128],
            white: [St, St, St],
            olive: [128, 128, 0],
            yellow: [St, St, 0],
            orange: [St, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [St, 0, 0],
            pink: [St, 192, 203],
            cyan: [0, St, St],
            transparent: [St, St, St, 0]
        },
        At = function() {
            var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (e in Et) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(),
        Ft = /hsl[a]?\(/,
        Ot = (Fe = Date.now, Oe = 500, Le = 33, Me = Fe(), Pe = Me, $e = Ne = 1e3 / 240, Ie = {
            time: 0,
            frame: 0,
            tick: function() {
                It(!0)
            },
            deltaRatio: function(e) {
                return Ee / (1e3 / (e || 60))
            },
            wake: function() {
                we && (!xe && o() && (De = xe = window, be = De.document || {}, st.gsap = hn, (De.gsapVersions || (De.gsapVersions = [])).push(hn.version), s(at || De.GreenSockGlobals || !De.gsap && De || {}), Se = De.requestAnimationFrame), _e && Ie.sleep(), ke = Se || function(e) {
                    return setTimeout(e, $e - 1e3 * Ie.time + 1 | 0)
                }, Ce = 1, It(2))
            },
            sleep: function() {
                (Se ? De.cancelAnimationFrame : clearTimeout)(_e), Ce = 0, ke = E
            },
            lagSmoothing: function(e, t) {
                Oe = e || 1e8, Le = Math.min(t, Oe, 0)
            },
            fps: function(e) {
                Ne = 1e3 / (e || 240), $e = 1e3 * Ie.time + Ne
            },
            add: function(e) {
                Be.indexOf(e) < 0 && Be.push(e), Lt()
            },
            remove: function(e) {
                ~(e = Be.indexOf(e)) && Be.splice(e, 1) && e <= Ae && Ae--
            },
            _listeners: Be = []
        }),
        Lt = function() {
            return !Ce && Ot.wake()
        },
        Mt = {},
        Pt = /^[\d.\-M][\d.\-,\s]/,
        Nt = /["']/g,
        $t = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        Bt = function(e, t) {
            return e && (d(e) ? e : Mt[e] || pe(e)) || t
        },
        t = function t(n, i) {
            void 0 === i && (i = 1.70158);

            function r(e) {
                return e ? --e * e * ((i + 1) * e + i) + 1 : 0
            }
            var e = "out" === n ? r : "in" === n ? function(e) {
                return 1 - r(1 - e)
            } : ge(r);
            return e.config = function(e) {
                return t(n, e)
            }, e
        };

    function It(e) {
        var t, n, i, r = Fe() - Pe,
            o = !0 === e;
        if (Oe < r && (Me += r - Le), (0 < (r = (n = (Pe += r) - Me) - $e) || o) && (i = ++Ie.frame, Ee = n - 1e3 * Ie.time, Ie.time = n /= 1e3, $e += r + (Ne <= r ? 4 : Ne - r), t = 1), o || (_e = ke(It)), t)
            for (Ae = 0; Ae < Be.length; Ae++) Be[Ae](n, Ee, i, e)
    }

    function Rt(e) {
        return e < qe ? Re * e * e : e < .7272727272727273 ? Re * Math.pow(e - 1.5 / 2.75, 2) + .75 : e < .9090909090909092 ? Re * (e -= 2.25 / 2.75) * e + .9375 : Re * Math.pow(e - 2.625 / 2.75, 2) + .984375
    }
    f("Linear,Quad,Cubic,Quart,Quint,Strong", function(e, t) {
        var n = t < 5 ? t + 1 : t;
        he(e + ",Power" + (n - 1), t ? function(e) {
            return Math.pow(e, n)
        } : function(e) {
            return e
        }, function(e) {
            return 1 - Math.pow(1 - e, n)
        }, function(e) {
            return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
        })
    }), Mt.Linear.easeNone = Mt.none = Mt.Linear.easeIn, he("Elastic", me("in"), me("out"), me()), Re = 7.5625, qe = 1 / 2.75, he("Bounce", function(e) {
        return 1 - Rt(1 - e)
    }, Rt), he("Expo", function(e) {
        return e ? Math.pow(2, 10 * (e - 1)) : 0
    }), he("Circ", function(e) {
        return -(Ve(1 - e * e) - 1)
    }), he("Sine", function(e) {
        return 1 === e ? 1 : 1 - Ge(e * Ye)
    }), he("Back", t("in"), t("out"), t()), Mt.SteppedEase = Mt.steps = st.SteppedEase = {
        config: function(e, t) {
            var n = 1 / (e = void 0 === e ? 1 : e),
                i = e + (t ? 0 : 1),
                r = t ? 1 : 0;
            return function(e) {
                return ((i * Dt(0, .99999999, e) | 0) + r) * n
            }
        }
    }, je.ease = Mt["quad.out"], f("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(e) {
        return gt += e + "," + e + "Params,"
    });
    var qt = function(e, t) {
            this.id = Ue++, (e._gsap = this).target = e, this.harness = t, this.get = t ? t.get : l, this.set = t ? t.getSetter : nn
        },
        Ht = function() {
            function e(e, t) {
                var n = e.parent || ve;
                this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Y(this, +e.duration, 1, 1), this.data = e.data, Ce || Ot.wake(), n && j(n, this, t || 0 === t ? t : n._time, 1), e.reversed && this.reverse(), e.paused && this.paused(!0)
            }
            var t = e.prototype;
            return t.delay = function(e) {
                return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
            }, t.duration = function(e) {
                return arguments.length ? this.totalDuration(0 < this._repeat ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
            }, t.totalDuration = function(e) {
                return arguments.length ? (this._dirty = 0, Y(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, t.totalTime = function(e, t) {
                if (Lt(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (w(this, e), !n._dp || n.parent || M(n, this); n.parent;) n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && e < this._tDur || this._ts < 0 && 0 < e || !this._tDur && !e) && j(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === We || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), c(this, e, t)), this
            }, t.time = function(e, t) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + D(this)) % this._dur || (e ? this._dur : 0), t) : this._time
            }, t.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, t.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + D(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, t.iteration = function(e, t) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? yt(this._tTime, n) + 1 : 1
            }, t.timeScale = function(e) {
                if (!arguments.length) return this._rts === -We ? 0 : this._rts;
                if (this._rts === e) return this;
                var t = this.parent && this._ts ? x(this.parent._time, this) : this._tTime;
                return this._rts = +e || 0, this._ts = this._ps || e === -We ? 0 : this._rts,
                    function(e) {
                        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                        return e
                    }(this.totalTime(Dt(-this._delay, this._tDur, t), !0))
            }, t.paused = function(e) {
                return arguments.length ? (this._ps !== e && ((this._ps = e) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Lt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= We) && Math.abs(this._zTime) !== We))), this) : this._ps
            }, t.startTime = function(e) {
                if (arguments.length) {
                    this._start = e;
                    var t = this.parent || this._dp;
                    return !t || !t._sort && this.parent || j(t, this, e - this._delay), this
                }
                return this._start
            }, t.endTime = function(e) {
                return this._start + (N(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, t.rawTime = function(e) {
                var t = this.parent || this._dp;
                return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? x(t.rawTime(e), this) : this._tTime : this._tTime
            }, t.globalTime = function(e) {
                for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (t._ts || 1), t = t._dp;
                return n
            }, t.repeat = function(e) {
                return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, U(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, t.repeatDelay = function(e) {
                return arguments.length ? (this._rDelay = e, U(this)) : this._rDelay
            }, t.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, t.seek = function(e, t) {
                return this.totalTime(V(this, e), N(t))
            }, t.restart = function(e, t) {
                return this.play().totalTime(e ? -this._delay : 0, N(t))
            }, t.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, t.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, t.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, t.resume = function() {
                return this.paused(!1)
            }, t.reversed = function(e) {
                return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -We : 0)), this) : this._rts < 0
            }, t.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -We, this
            }, t.isActive = function() {
                var e, t = this.parent || this._dp,
                    n = this._start;
                return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - We))
            }, t.eventCallback = function(e, t, n) {
                var i = this.vars;
                return 1 < arguments.length ? (t ? (i[e] = t, n && (i[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete i[e], this) : i[e]
            }, t.then = function(i) {
                var r = this;
                return new Promise(function(t) {
                    function e() {
                        var e = r.then;
                        r.then = null, d(n) && (n = n(r)) && (n.then || n === r) && (r.then = e), t(n), r.then = e
                    }
                    var n = d(i) ? i : h;
                    r._initted && 1 === r.totalProgress() && 0 <= r._ts || !r._tTime && r._ts < 0 ? e() : r._prom = e
                })
            }, t.kill = function() {
                se(this)
            }, e
        }();
    R(Ht.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -We,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var jt = function(n) {
        function e(e, t) {
            return (t = n.call(this, e = void 0 === e ? {} : e, t) || this).labels = {}, t.smoothChildTiming = !!e.smoothChildTiming, t.autoRemoveChildren = !!e.autoRemoveChildren, t._sort = N(e.sortChildren), t.parent && M(t.parent, T(t)), e.scrollTrigger && z(T(t), e.scrollTrigger), t
        }
        i(e, n);
        var t = e.prototype;
        return t.to = function(e, t, n) {
            return new Kt(e, u(arguments, 0, this), V(this, C(t) ? arguments[3] : n)), this
        }, t.from = function(e, t, n) {
            return new Kt(e, u(arguments, 1, this), V(this, C(t) ? arguments[3] : n)), this
        }, t.fromTo = function(e, t, n, i) {
            return new Kt(e, u(arguments, 2, this), V(this, C(t) ? arguments[4] : i)), this
        }, t.set = function(e, t, n) {
            return t.duration = 0, t.parent = this, A(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Kt(e, t, V(this, n), 1), this
        }, t.call = function(e, t, n) {
            return j(this, Kt.delayedCall(0, e, t), V(this, n))
        }, t.staggerTo = function(e, t, n, i, r, o, s) {
            return n.duration = t, n.stagger = n.stagger || i, n.onComplete = o, n.onCompleteParams = s, n.parent = this, new Kt(e, n, V(this, r)), this
        }, t.staggerFrom = function(e, t, n, i, r, o, s) {
            return n.runBackwards = 1, A(n).immediateRender = N(n.immediateRender), this.staggerTo(e, t, n, i, r, o, s)
        }, t.staggerFromTo = function(e, t, n, i, r, o, s, a) {
            return i.startAt = n, A(i).immediateRender = N(i.immediateRender), this.staggerTo(e, t, i, r, o, s, a)
        }, t.render = function(e, t, n) {
            var i, r, o, s, a, l, u, c, d, p, f = this._time,
                h = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                m = this !== ve && h - We < e && 0 <= e ? h : e < We ? 0 : e,
                y = this._zTime < 0 != e < 0 && (this._initted || !g);
            if (m !== this._tTime || n || y) {
                if (f !== this._time && g && (m += this._time - f, e += this._time - f), i = m, c = this._start, a = !(u = this._ts), y && (g || (f = this._zTime), !e && t || (this._zTime = e)), this._repeat) {
                    if (v = this._yoyo, s = g + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * s + e, t, n);
                    if (i = P(m % s), m === h ? (o = this._repeat, i = g) : ((o = ~~(m / s)) && o === m / s && (i = g, o--), g < i && (i = g)), d = yt(this._tTime, s), v && 1 & o && (i = g - i, p = 1), o !== (d = !f && this._tTime && d !== o ? o : d) && !this._lock) {
                        var y = v && 1 & d,
                            v = y === (v && 1 & o),
                            f = (y = o < d ? !y : y) ? 0 : g;
                        if (this._lock = 1, this.render(f || (p ? 0 : P(o * s)), t, !g)._lock = 0, !t && this.parent && kt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), f !== this._time || a != !this._ts) return this;
                        if (g = this._dur, h = this._tDur, v && (this._lock = 2, this.render(f = y ? g : -1e-4, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !a) return this;
                        fe(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(e, t, n) {
                        var i;
                        if (t < n)
                            for (i = e._first; i && i._start <= n;) {
                                if (!i._dur && "isPause" === i.data && i._start > t) return i;
                                i = i._next
                            } else
                                for (i = e._last; i && i._start >= n;) {
                                    if (!i._dur && "isPause" === i.data && i._start < t) return i;
                                    i = i._prev
                                }
                    }(this, P(f), P(i))) && (m -= i - (i = l._start)), this._tTime = m, this._time = i, this._act = !u, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, f = 0), f || !(i || !g && 0 <= e) || t || kt(this, "onStart"), f <= i && 0 <= e)
                    for (D = this._first; D;) {
                        if (r = D._next, (D._act || i >= D._start) && D._ts && l !== D) {
                            if (D.parent !== this) return this.render(e, t, n);
                            if (D.render(0 < D._ts ? (i - D._start) * D._ts : (D._dirty ? D.totalDuration() : D._tDur) + (i - D._start) * D._ts, t, n), i !== this._time || !this._ts && !a) {
                                l = 0, r && (m += this._zTime = -We);
                                break
                            }
                        }
                        D = r
                    } else
                        for (var D = this._last, x = e < 0 ? e : i; D;) {
                            if (r = D._prev, (D._act || x <= D._end) && D._ts && l !== D) {
                                if (D.parent !== this) return this.render(e, t, n);
                                if (D.render(0 < D._ts ? (x - D._start) * D._ts : (D._dirty ? D.totalDuration() : D._tDur) + (x - D._start) * D._ts, t, n), i !== this._time || !this._ts && !a) {
                                    l = 0, r && (m += this._zTime = x ? -We : We);
                                    break
                                }
                            }
                            D = r
                        }
                if (l && !t && (this.pause(), l.render(f <= i ? 0 : -We)._zTime = f <= i ? 1 : -1, this._ts)) return this._start = c, b(this), this.render(e, t, n);
                this._onUpdate && !t && kt(this, "onUpdate", !0), (m === h && h >= this.totalDuration() || !m && f) && (c !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || (!e && g || !(m === h && 0 < this._ts || !m && this._ts < 0) || H(this, 1), t || e < 0 && !f || !m && !f || (kt(this, m === h ? "onComplete" : "onReverseComplete", !0), !this._prom || m < h && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, t.add = function(e, t) {
            var n = this;
            if (C(t) || (t = V(this, t)), !(e instanceof Ht)) {
                if (Ze(e)) return e.forEach(function(e) {
                    return n.add(e, t)
                }), this;
                if (F(e)) return this.addLabel(e, t);
                if (!d(e)) return this;
                e = Kt.delayedCall(0, e)
            }
            return this !== e ? j(this, e, t) : this
        }, t.getChildren = function(e, t, n, i) {
            void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === i && (i = -ze);
            for (var r = [], o = this._first; o;) o._start >= i && (o instanceof Kt ? t && r.push(o) : (n && r.push(o), e && r.push.apply(r, o.getChildren(!0, t, n)))), o = o._next;
            return r
        }, t.getById = function(e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
                if (t[n].vars.id === e) return t[n]
        }, t.remove = function(e) {
            return F(e) ? this.removeLabel(e) : d(e) ? this.killTweensOf(e) : (y(this, e), e === this._recent && (this._recent = this._last), v(this))
        }, t.totalTime = function(e, t) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = P(Ot.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))), n.prototype.totalTime.call(this, e, t), this._forcing = 0, this) : this._tTime
        }, t.addLabel = function(e, t) {
            return this.labels[e] = V(this, t), this
        }, t.removeLabel = function(e) {
            return delete this.labels[e], this
        }, t.addPause = function(e, t, n) {
            n = Kt.delayedCall(0, t || E, n);
            return n.data = "isPause", this._hasPause = 1, j(this, n, V(this, e))
        }, t.removePause = function(e) {
            var t = this._first;
            for (e = V(this, e); t;) t._start === e && "isPause" === t.data && H(t), t = t._next
        }, t.killTweensOf = function(e, t, n) {
            for (var i = this.getTweensOf(e, n), r = i.length; r--;) Wt !== i[r] && i[r].kill(e, t);
            return this
        }, t.getTweensOf = function(e, t) {
            for (var n, i = [], r = bt(e), o = this._first, s = C(t); o;) o instanceof Kt ? function(e, t) {
                for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n;);
                return i < n
            }(o._targets, r) && (s ? (!Wt || o._initted && o._ts) && o.globalTime(0) <= t && o.globalTime(o.totalDuration()) > t : !t || o.isActive()) && i.push(o) : (n = o.getTweensOf(r, t)).length && i.push.apply(i, n), o = o._next;
            return i
        }, t.tweenTo = function(e, t) {
            t = t || {};
            var n = this,
                i = V(n, e),
                r = t.startAt,
                o = t.onStart,
                s = t.onStartParams,
                e = t.immediateRender,
                a = Kt.to(n, R({
                    ease: "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: t.duration || Math.abs((i - (r && "time" in r ? r.time : n._time)) / n.timeScale()) || We,
                    onStart: function() {
                        n.pause();
                        var e = t.duration || Math.abs((i - n._time) / n.timeScale());
                        a._dur !== e && Y(a, e, 0, 1).render(a._time, !0, !0), o && o.apply(a, s || [])
                    }
                }, t));
            return e ? a.render(0) : a
        }, t.tweenFromTo = function(e, t, n) {
            return this.tweenTo(t, R({
                startAt: {
                    time: V(this, e)
                }
            }, n))
        }, t.recent = function() {
            return this._recent
        }, t.nextLabel = function(e) {
            return void 0 === e && (e = this._time), oe(this, V(this, e))
        }, t.previousLabel = function(e) {
            return void 0 === e && (e = this._time), oe(this, V(this, e), 1)
        }, t.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + We)
        }, t.shiftChildren = function(e, t, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, o = this.labels; r;) r._start >= n && (r._start += e, r._end += e), r = r._next;
            if (t)
                for (i in o) o[i] >= n && (o[i] += e);
            return v(this)
        }, t.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return n.prototype.invalidate.call(this)
        }, t.clear = function(e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
            return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), v(this)
        }, t.totalDuration = function(e) {
            var t, n, i, r = 0,
                o = this,
                s = o._last,
                a = ze;
            if (arguments.length) return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -e : e));
            if (o._dirty) {
                for (i = o.parent; s;) t = s._prev, s._dirty && s.totalDuration(), a < (n = s._start) && o._sort && s._ts && !o._lock ? (o._lock = 1, j(o, s, n - s._delay, 1)._lock = 0) : a = n, n < 0 && s._ts && (r -= n, (!i && !o._dp || i && i.smoothChildTiming) && (o._start += n / o._ts, o._time -= n, o._tTime -= n), o.shiftChildren(-n, !1, -Infinity), a = 0), s._end > r && s._ts && (r = s._end), s = t;
                Y(o, o === ve && o._time > r ? o._time : r, 1, 1), o._dirty = 0
            }
            return o._tDur
        }, e.updateRoot = function(e) {
            if (ve._ts && (c(ve, x(e, ve)), Te = Ot.frame), Ot.frame >= ft) {
                ft += He.autoSleep || 120;
                var t = ve._first;
                if ((!t || !t._ts) && He.autoSleep && Ot._listeners.length < 2) {
                    for (; t && !t._ts;) t = t._next;
                    t || Ot.sleep()
                }
            }
        }, e
    }(Ht);
    R(jt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function zt(e, t, n, i, r, o) {
        var s, a, l, u;
        if (dt[e] && !1 !== (s = new dt[e]).init(r, s.rawVars ? t[e] : function(e, t, n, i, r) {
                if (d(e) && (e = Ut(e, r, t, n, i)), !_(e) || e.style && e.nodeType || Ze(e) || Qe(e)) return F(e) ? Ut(e, r, t, n, i) : e;
                var o, s = {};
                for (o in e) s[o] = Ut(e[o], r, t, n, i);
                return s
            }(t[e], i, r, o, n), n, i, o) && (n._pt = a = new dn(n._pt, r, e, 0, 1, s.render, s, 0, s.priority), n !== fn))
            for (l = n._ptLookup[n._targets.indexOf(r)], u = s._props.length; u--;) l[s._props[u]] = a;
        return s
    }
    var Wt, Xt = function(e, t, n, i, r, o, s, a, l) {
            d(i) && (i = i(r || 0, e, o));
            r = e[t], o = "get" !== n ? n : d(r) ? l ? e[t.indexOf("set") || !d(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : r, n = d(r) ? l ? tn : en : Jt;
            if (o !== (i = F(i) && "=" === (i = ~i.indexOf("random(") ? re(i) : i).charAt(1) ? parseFloat(o) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (K(o) || 0) : i)) return isNaN(o * i) ? (r || t in e || O(t, i), function(e, t, n, i, r, o, s) {
                var a, l, u, c, d, p = new dn(this._pt, e, t, 0, 1, sn, null, r),
                    f = 0,
                    h = 0;
                for (p.b = n, p.e = i, n += "", (r = ~(i += "").indexOf("random(")) && (i = re(i)), o && (o(o = [n, i], e, t), n = o[0], i = o[1]), a = n.match(nt) || []; d = nt.exec(i);) u = d[0], c = i.substring(f, d.index), l ? l = (l + 1) % 5 : "rgba(" === c.substr(-5) && (l = 1), u !== a[h++] && (d = parseFloat(a[h - 1]) || 0, p._pt = {
                    _next: p._pt,
                    p: c || 1 === h ? c : ",",
                    s: d,
                    c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - d,
                    m: l && l < 4 ? Math.round : 0
                }, f = nt.lastIndex);
                return p.c = f < i.length ? i.substring(f, i.length) : "", p.fp = s, (it.test(i) || r) && (p.e = 0), this._pt = p
            }.call(this, e, t, o, i, n, a || He.stringFilter, l)) : (n = new dn(this._pt, e, t, +o || 0, i - (o || 0), "boolean" == typeof r ? on : rn, 0, n), l && (n.fp = l), s && n.modifier(s, this, e), this._pt = n)
        },
        Yt = function e(t, n) {
            var i, r, o, s, a, l, u, c, d, p, f, h, g, m = t.vars,
                y = m.ease,
                v = m.startAt,
                D = m.immediateRender,
                x = m.lazy,
                b = m.onUpdate,
                w = m.onUpdateParams,
                T = m.callbackScope,
                C = m.runBackwards,
                _ = m.yoyoEase,
                k = m.keyframes,
                S = m.autoRevert,
                E = t._dur,
                A = t._startAt,
                F = t._targets,
                O = t.parent,
                L = O && "nested" === O.data ? O.parent._targets : F,
                M = "auto" === t._overwrite && !ye,
                P = t.timeline;
            if (t._ease = Bt(y = !(!P || k && y) ? "none" : y, je.ease), t._yEase = _ ? $t(Bt(!0 === _ ? y : _, je.ease)) : 0, _ && t._yoyo && !t._repeat && (_ = t._yEase, t._yEase = t._ease, t._ease = _), !P) {
                if (h = (c = F[0] ? B(F[0]).harness : 0) && m[c.prop], i = q(m, lt), A && A.render(-1, !0).kill(), v) {
                    if (H(t._startAt = Kt.set(F, R({
                            data: "isStart",
                            overwrite: !1,
                            parent: O,
                            immediateRender: !0,
                            lazy: N(x),
                            startAt: null,
                            delay: 0,
                            onUpdate: b,
                            onUpdateParams: w,
                            callbackScope: T,
                            stagger: 0
                        }, v))), D)
                        if (0 < n) S || (t._startAt = 0);
                        else if (E && !(n < 0 && A)) return void(n && (t._zTime = n))
                } else if (C && E)
                    if (A) S || (t._startAt = 0);
                    else if (o = R({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: (D = n ? !1 : D) && N(x),
                        immediateRender: D,
                        stagger: 0,
                        parent: O
                    }, i), h && (o[c.prop] = h), H(t._startAt = Kt.set(F, o)), D) {
                    if (!n) return
                } else e(t._startAt, We);
                for (t._pt = 0, x = E && N(x) || x && !E, r = 0; r < F.length; r++) {
                    if (u = (a = F[r])._gsap || $(F)[r]._gsap, t._ptLookup[r] = p = {}, ct[u.id] && ut.length && I(), f = L === F ? r : L.indexOf(a), c && !1 !== (d = new c).init(a, h || i, t, f, L) && (t._pt = s = new dn(t._pt, a, d.name, 0, 1, d.render, d, 0, d.priority), d._props.forEach(function(e) {
                            p[e] = s
                        }), d.priority && (l = 1)), !c || h)
                        for (o in i) dt[o] && (d = zt(o, i, t, f, a, L)) ? d.priority && (l = 1) : p[o] = s = Xt.call(t, a, o, "get", i[o], f, L, 0, m.stringFilter);
                    t._op && t._op[r] && t.kill(a, t._op[r]), M && t._pt && (Wt = t, ve.killTweensOf(a, p, t.globalTime(0)), g = !t.parent, Wt = 0), t._pt && x && (ct[u.id] = 1)
                }
                l && cn(t), t._onInit && t._onInit(t)
            }
            t._from = !P && !!m.runBackwards, t._onUpdate = b, t._initted = (!t._op || t._pt) && !g
        },
        Ut = function(e, t, n, i, r) {
            return d(e) ? e.call(t, n, i, r) : F(e) && ~e.indexOf("random(") ? re(e) : e
        },
        Vt = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Gt = (Vt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Kt = function(w) {
            function r(e, t, n, i) {
                "number" == typeof t && (n.duration = t, t = n, n = null);
                var r, o, s, a, l, u, c, d, p, f = (r = w.call(this, i ? t : A(t), n) || this).vars,
                    h = f.duration,
                    g = f.delay,
                    m = f.immediateRender,
                    y = f.stagger,
                    v = f.overwrite,
                    D = f.keyframes,
                    i = f.defaults,
                    n = f.scrollTrigger,
                    x = f.yoyoEase,
                    f = r.parent,
                    b = (Ze(e) || Qe(e) ? C(e[0]) : "length" in t) ? [e] : bt(e);
                if (r._targets = b.length ? $(b) : S("GSAP target " + e + " not found. https://greensock.com", !He.nullTargetWarn) || [], r._ptLookup = [], r._overwrite = v, D || y || k(h) || k(g)) {
                    if (t = r.vars, (o = r.timeline = new jt({
                            data: "nested",
                            defaults: i || {}
                        })).kill(), o.parent = o._dp = T(r), o._start = 0, D) R(o.vars.defaults, {
                        ease: "none"
                    }), D.forEach(function(e) {
                        return o.to(b, e, ">")
                    });
                    else {
                        if (l = b.length, d = y ? J(y) : E, _(y))
                            for (u in y) ~Vt.indexOf(u) && ((p = p || {})[u] = y[u]);
                        for (s = 0; s < l; s++) {
                            for (u in a = {}, t) Gt.indexOf(u) < 0 && (a[u] = t[u]);
                            a.stagger = 0, x && (a.yoyoEase = x), p && mt(a, p), c = b[s], a.duration = +Ut(h, T(r), s, c, b), a.delay = (+Ut(g, T(r), s, c, b) || 0) - r._delay, !y && 1 === l && a.delay && (r._delay = g = a.delay, r._start += g, a.delay = 0), o.to(c, a, d(s, c, b))
                        }
                        o.duration() ? h = g = 0 : r.timeline = 0
                    }
                    h || r.duration(h = o.duration())
                } else r.timeline = 0;
                return !0 !== v || ye || (Wt = T(r), ve.killTweensOf(b), Wt = 0), f && M(f, T(r)), (m || !h && !D && r._start === P(f._time) && N(m) && L(T(r)) && "nested" !== f.data) && (r._tTime = -We, r.render(Math.max(0, -g))), n && z(T(r), n), r
            }
            i(r, w);
            var e = r.prototype;
            return e.render = function(e, t, n) {
                var i, r, o, s, a, l, u, c, d, p = this._time,
                    f = this._tDur,
                    h = this._dur,
                    g = f - We < e && 0 <= e ? f : e < We ? 0 : e;
                if (h) {
                    if (g !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != e < 0) {
                        if (i = g, c = this.timeline, this._repeat) {
                            if (s = h + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * s + e, t, n);
                            if (i = P(g % s), g === f ? (o = this._repeat, i = h) : ((o = ~~(g / s)) && o === g / s && (i = h, o--), h < i && (i = h)), (l = this._yoyo && 1 & o) && (d = this._yEase, i = h - i), a = yt(this._tTime, s), i === p && !n && this._initted) return this;
                            o !== a && (c && this._yEase && fe(c, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1, this.render(P(s * o), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (W(this, e < 0 ? e : i, n, t)) return this._tTime = 0, this;
                            if (h !== this._dur) return this.render(e, t, n)
                        }
                        for (this._tTime = g, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (d || this._ease)(i / h), this._from && (this.ratio = u = 1 - u), !i || p || t || kt(this, "onStart"), r = this._pt; r;) r.r(u, r.d), r = r._next;
                        c && c.render(e < 0 ? e : !i && l ? -We : c._dur * u, t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (e < 0 && this._startAt && this._startAt.render(e, !0, n), kt(this, "onUpdate")), this._repeat && o !== a && this.vars.onRepeat && !t && this.parent && kt(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (e < 0 && this._startAt && !this._onUpdate && this._startAt.render(e, !0, !0), !e && h || !(g === this._tDur && 0 < this._ts || !g && this._ts < 0) || H(this, 1), t || e < 0 && !p || !g && !p || (kt(this, g === f ? "onComplete" : "onReverseComplete", !0), !this._prom || g < f && 0 < this.timeScale() || this._prom()))
                    }
                } else ! function(e, t, n, i) {
                    var r, o, s, a = e.ratio,
                        l = t < 0 || !t && (!e._start && X(e) || (e._ts < 0 || e._dp._ts < 0) && "isFromStart" !== e.data && "isStart" !== e.data) ? 0 : 1,
                        u = e._rDelay,
                        c = 0;
                    if (u && e._repeat && (c = Dt(0, e._tDur, t), o = yt(c, u), s = yt(e._tTime, u), e._yoyo && 1 & o && (l = 1 - l), o !== s && (a = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== a || i || e._zTime === We || !t && e._zTime) {
                        if (e._initted || !W(e, t, i, n)) {
                            for (s = e._zTime, e._zTime = t || (n ? We : 0), n = n || t && !s, e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = c, n || kt(e, "onStart"), r = e._pt; r;) r.r(l, r.d), r = r._next;
                            e._startAt && t < 0 && e._startAt.render(t, !0, !0), e._onUpdate && !n && kt(e, "onUpdate"), c && e._repeat && !n && e.parent && kt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && H(e, 1), n || (kt(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                        }
                    } else e._zTime || (e._zTime = t)
                }(this, e, t, n);
                return this
            }, e.targets = function() {
                return this._targets
            }, e.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), w.prototype.invalidate.call(this)
            }, e.kill = function(e, t) {
                if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? se(this) : this;
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(e, t, Wt && !0 !== Wt.vars.overwrite)._first || se(this), this.parent && n !== this.timeline.totalDuration() && Y(this, this._dur * this.timeline._tDur / n, 0, 1), this
                }
                var i, r, o, s, a, l, u, c = this._targets,
                    d = e ? bt(e) : c,
                    p = this._ptLookup,
                    e = this._pt;
                if ((!t || "all" === t) && function(e, t) {
                        for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n];);
                        return n < 0
                    }(c, d)) return "all" === t && (this._pt = 0), se(this);
                for (i = this._op = this._op || [], "all" !== t && (F(t) && (a = {}, f(t, function(e) {
                        return a[e] = 1
                    }), t = a), t = function(e, t) {
                        var n, i, r, o, e = e[0] ? B(e[0]).harness : 0,
                            s = e && e.aliases;
                        if (!s) return t;
                        for (i in n = mt({}, t), s)
                            if (i in n)
                                for (r = (o = s[i].split(",")).length; r--;) n[o[r]] = n[i];
                        return n
                    }(c, t)), u = c.length; u--;)
                    if (~d.indexOf(c[u]))
                        for (a in r = p[u], "all" === t ? (i[u] = t, s = r, o = {}) : (o = i[u] = i[u] || {}, s = t), s)(l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || y(this, l, "_pt"), delete r[a]), "all" !== o && (o[a] = 1);
                return this._initted && !this._pt && e && se(this), this
            }, r.to = function(e, t) {
                return new r(e, t, arguments[2])
            }, r.from = function(e, t) {
                return new r(e, u(arguments, 1))
            }, r.delayedCall = function(e, t, n, i) {
                return new r(t, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: e,
                    onComplete: t,
                    onReverseComplete: t,
                    onCompleteParams: n,
                    onReverseCompleteParams: n,
                    callbackScope: i
                })
            }, r.fromTo = function(e, t, n) {
                return new r(e, u(arguments, 2))
            }, r.set = function(e, t) {
                return t.duration = 0, t.repeatDelay || (t.repeat = 0), new r(e, t)
            }, r.killTweensOf = function(e, t, n) {
                return ve.killTweensOf(e, t, n)
            }, r
        }(Ht);
    R(Kt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), f("staggerTo,staggerFrom,staggerFromTo", function(n) {
        Kt[n] = function() {
            var e = new jt,
                t = xt.call(arguments, 0);
            return t.splice("staggerFromTo" === n ? 5 : 4, 0, 0), e[n].apply(e, t)
        }
    });

    function Qt(e, t, n) {
        return e.setAttribute(t, n)
    }

    function Zt(e, t, n, i) {
        i.mSet(e, t, i.m.call(i.tween, n, i.mt), i)
    }
    var Jt = function(e, t, n) {
            return e[t] = n
        },
        en = function(e, t, n) {
            return e[t](n)
        },
        tn = function(e, t, n, i) {
            return e[t](i.fp, n)
        },
        nn = function(e, t) {
            return d(e[t]) ? en : r(e[t]) && e.setAttribute ? Qt : Jt
        },
        rn = function(e, t) {
            return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4, t)
        },
        on = function(e, t) {
            return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        sn = function(e, t) {
            var n = t._pt,
                i = "";
            if (!e && t.b) i = t.b;
            else if (1 === e && t.e) i = t.e;
            else {
                for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + i, n = n._next;
                i += t.c
            }
            t.set(t.t, t.p, i, t)
        },
        an = function(e, t) {
            for (var n = t._pt; n;) n.r(e, n.d), n = n._next
        },
        ln = function(e, t, n, i) {
            for (var r, o = this._pt; o;) r = o._next, o.p === i && o.modifier(e, t, n), o = r
        },
        un = function(e) {
            for (var t, n, i = this._pt; i;) n = i._next, i.p === e && !i.op || i.op === e ? y(this, i, "_pt") : i.dep || (t = 1), i = n;
            return !t
        },
        cn = function(e) {
            for (var t, n, i, r, o = e._pt; o;) {
                for (t = o._next, n = i; n && n.pr > o.pr;) n = n._next;
                (o._prev = n ? n._prev : r) ? o._prev._next = o: i = o, (o._next = n) ? n._prev = o : r = o, o = t
            }
            e._pt = i
        },
        dn = function() {
            function e(e, t, n, i, r, o, s, a, l) {
                this.t = t, this.s = i, this.c = r, this.p = n, this.r = o || rn, this.d = s || this, this.set = a || Jt, this.pr = l || 0, (this._next = e) && (e._prev = this)
            }
            return e.prototype.modifier = function(e, t, n) {
                this.mSet = this.mSet || this.set, this.set = Zt, this.m = e, this.mt = n, this.tween = t
            }, e
        }();
    f(gt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(e) {
        return lt[e] = 1
    }), st.TweenMax = st.TweenLite = Kt, st.TimelineLite = st.TimelineMax = jt, ve = new jt({
        sortChildren: !1,
        defaults: je,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), He.stringFilter = de;
    var pn = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            t.forEach(function(e) {
                var t = (e = !e.name && e.default || e).name,
                    n = d(e),
                    i = t && !n && e.init ? function() {
                        this._props = []
                    } : e,
                    r = {
                        init: E,
                        render: an,
                        add: Xt,
                        kill: un,
                        modifier: ln,
                        rawVars: 0
                    },
                    n = {
                        targetTest: 0,
                        get: 0,
                        getSetter: nn,
                        aliases: {},
                        register: 0
                    };
                if (Lt(), e !== i) {
                    if (dt[t]) return;
                    R(i, R(q(e, r), n)), mt(i.prototype, mt(r, q(e, n))), dt[i.prop = t] = i, e.targetTest && (ht.push(i), lt[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                }
                a(t, i), e.register && e.register(hn, i, dn)
            })
        },
        timeline: function(e) {
            return new jt(e)
        },
        getTweensOf: function(e, t) {
            return ve.getTweensOf(e, t)
        },
        getProperty: function(i, e, t, n) {
            F(i) && (i = bt(i)[0]);
            var r = B(i || {}).get,
                o = t ? h : p;
            return "native" === t && (t = ""), i && (e ? o((dt[e] && dt[e].get || r)(i, e, t, n)) : function(e, t, n) {
                return o((dt[e] && dt[e].get || r)(i, e, t, n))
            })
        },
        quickSetter: function(n, t, i) {
            if (1 < (n = bt(n)).length) {
                var r = n.map(function(e) {
                        return hn.quickSetter(e, t, i)
                    }),
                    o = r.length;
                return function(e) {
                    for (var t = o; t--;) r[t](e)
                }
            }
            n = n[0] || {};
            var s = dt[t],
                a = B(n),
                l = a.harness && (a.harness.aliases || {})[t] || t,
                u = s ? function(e) {
                    var t = new s;
                    fn._pt = 0, t.init(n, i ? e + i : e, fn, 0, [n]), t.render(1, t), fn._pt && an(1, fn)
                } : a.set(n, l);
            return s ? u : function(e) {
                return u(n, l, i ? e + i : e, a, 1)
            }
        },
        isTweening: function(e) {
            return 0 < ve.getTweensOf(e, !0).length
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Bt(e.ease, je.ease)), m(je, e || {})
        },
        config: function(e) {
            return m(He, e || {})
        },
        registerEffect: function(e) {
            var i = e.name,
                r = e.effect,
                t = e.plugins,
                o = e.defaults,
                e = e.extendTimeline;
            (t || "").split(",").forEach(function(e) {
                return e && !dt[e] && !st[e] && S(i + " effect requires " + e + " plugin.")
            }), pt[i] = function(e, t, n) {
                return r(bt(e), R(t || {}, o), n)
            }, e && (jt.prototype[i] = function(e, t, n) {
                return this.add(pt[i](e, _(t) ? t : (n = t) && {}, this), n)
            })
        },
        registerEase: function(e, t) {
            Mt[e] = Bt(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? Bt(e, t) : Mt
        },
        getById: function(e) {
            return ve.getById(e)
        },
        exportRoot: function(e, t) {
            var n, i, r = new jt(e = void 0 === e ? {} : e);
            for (r.smoothChildTiming = N(e.smoothChildTiming), ve.remove(r), r._dp = 0, r._time = r._tTime = ve._time, n = ve._first; n;) i = n._next, !t && !n._dur && n instanceof Kt && n.vars.onComplete === n._targets[0] || j(r, n, n._start - n._delay), n = i;
            return j(ve, r, 0), r
        },
        utils: {
            wrap: ie,
            wrapYoyo: Tt,
            distribute: J,
            random: te,
            snap: wt,
            normalize: function(e, t, n) {
                return Ct(e, t, 0, 1, n)
            },
            getUnit: K,
            clamp: function(t, n, e) {
                return G(e, function(e) {
                    return Dt(t, n, e)
                })
            },
            splitColor: le,
            toArray: bt,
            mapRange: Ct,
            pipe: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return t.reduce(function(e, t) {
                        return t(e)
                    }, e)
                }
            },
            unitize: function(t, n) {
                return function(e) {
                    return t(parseFloat(e)) + (n || K(e))
                }
            },
            interpolate: _t,
            shuffle: Z
        },
        install: s,
        effects: pt,
        ticker: Ot,
        updateRoot: jt.updateRoot,
        plugins: dt,
        globalTimeline: ve,
        core: {
            PropTween: dn,
            globals: a,
            Tween: Kt,
            Timeline: jt,
            Animation: Ht,
            getCache: B,
            _removeLinkedListItem: y,
            suppressOverwrites: function(e) {
                return ye = e
            }
        }
    };
    f("to,from,fromTo,delayedCall,set,killTweensOf", function(e) {
        return pn[e] = Kt[e]
    }), Ot.add(jt.updateRoot);
    var fn = pn.to({}, {
            duration: 0
        }),
        Tt = function(e, r) {
            return {
                name: e,
                rawVars: 1,
                init: function(e, i, t) {
                    t._onInit = function(e) {
                        var t, n;
                        if (F(i) && (t = {}, f(i, function(e) {
                                return t[e] = 1
                            }), i = t), r) {
                            for (n in t = {}, i) t[n] = r(i[n]);
                            i = t
                        }! function(e, t) {
                            var n, i, r, o = e._targets;
                            for (n in t)
                                for (i = o.length; i--;)(r = (r = e._ptLookup[i][n]) && r.d) && (r = r._pt ? function(e, t) {
                                    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
                                    return n
                                }(r, n) : r) && r.modifier && r.modifier(t[n], e, o[i], n)
                        }(e, i)
                    }
                }
            }
        },
        hn = pn.registerPlugin({
            name: "attr",
            init: function(e, t, n, i, r) {
                var o, s;
                for (o in t)(s = this.add(e, "setAttribute", (e.getAttribute(o) || 0) + "", t[o], i, r, 0, 0, o)) && (s.op = o), this._props.push(o)
            }
        }, {
            name: "endArray",
            init: function(e, t) {
                for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n])
            }
        }, Tt("roundProps", ee), Tt("modifiers"), Tt("snap", wt)) || pn;
    Kt.version = jt.version = hn.version = "3.6.0", we = 1, o() && Lt();
    Mt.Power0, Mt.Power1, Mt.Power2, Mt.Power3, Mt.Power4, Mt.Linear, Mt.Quad, Mt.Cubic, Mt.Quart, Mt.Quint, Mt.Strong, Mt.Elastic, Mt.Back, Mt.SteppedEase, Mt.Bounce, Mt.Sine, Mt.Expo, Mt.Circ;
    /*!
     * CSSPlugin 3.6.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    function gn(e, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }

    function mn(e, t) {
        return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
    }

    function yn(e, t) {
        return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
    }

    function vn(e, t) {
        e = t.s + t.c * e, t.set(t.t, t.p, ~~(e + (e < 0 ? -.5 : .5)) + t.u, t)
    }

    function Dn(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    }

    function xn(e, t) {
        return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
    }

    function bn(e, t, n) {
        return e.style[t] = n
    }

    function wn(e, t, n) {
        return e.style.setProperty(t, n)
    }

    function Tn(e, t, n) {
        return e._gsap[t] = n
    }

    function Cn(e, t, n) {
        return e._gsap.scaleX = e._gsap.scaleY = n
    }

    function _n(e, t, n, i, r) {
        (e = e._gsap).scaleX = e.scaleY = n, e.renderTransform(r, e)
    }

    function kn(e, t, n, i, r) {
        (e = e._gsap)[t] = n, e.renderTransform(r, e)
    }

    function Sn(e, t) {
        return (t = Xn.createElementNS ? Xn.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Xn.createElement(e)).style ? t : Xn.createElement(e)
    }

    function En(e, t, n) {
        var i = getComputedStyle(e);
        return i[t] || i.getPropertyValue(t.replace(ni, "-$1").toLowerCase()) || i.getPropertyValue(t) || !n && En(e, ui(t) || t, 1) || ""
    }

    function An() {
        "undefined" != typeof window && window.document && (Yn = (Xn = window.document).documentElement, Vn = Sn("div") || {
            style: {}
        }, Gn = Sn("div"), si = ui(si), ai = si + "Origin", Vn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Qn = !!ui("perspective"), Un = 1)
    }

    function Fn(e) {
        var t, n = Sn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            r = this.nextSibling,
            o = this.style.cssText;
        if (Yn.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
            t = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Fn
        } catch (e) {} else this._gsapBBox && (t = this._gsapBBox());
        return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), Yn.removeChild(n), this.style.cssText = o, t
    }

    function On(e, t) {
        for (var n = t.length; n--;)
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
    }

    function Ln(t) {
        var n;
        try {
            n = t.getBBox()
        } catch (e) {
            n = Fn.call(t, !0)
        }
        return !(n = !(n && (n.width || n.height) || t.getBBox === Fn) ? Fn.call(t, !0) : n) || n.width || n.x || n.y ? n : {
            x: +On(t, ["x", "cx", "x1"]) || 0,
            y: +On(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Mn(e) {
        return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Ln(e))
    }

    function Pn(e, t) {
        t && (e = e.style, t in Zn && t !== ai && (t = si), e.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t), e.removeProperty(t.replace(ni, "-$1").toLowerCase())) : e.removeAttribute(t))
    }

    function Nn(e, t, n, i, r, o) {
        return o = new dn(e._pt, t, n, 0, 1, o ? xn : Dn), (e._pt = o).b = i, o.e = r, e._props.push(n), o
    }

    function $n(e, t, n, i) {
        var r, o = parseFloat(n) || 0,
            s = (n + "").trim().substr((o + "").length) || "px",
            a = Vn.style,
            l = ii.test(t),
            u = "svg" === e.tagName.toLowerCase(),
            c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
            d = "px" === i,
            p = "%" === i;
        return i === s || !o || ci[i] || ci[s] ? o : ("px" === s || d || (o = $n(e, t, n, "px")), n = e.getCTM && Mn(e), !p && "%" !== s || !Zn[t] && !~t.indexOf("adius") ? (a[l ? "width" : "height"] = 100 + (d ? s : i), i = ~t.indexOf("adius") || "em" === i && e.appendChild && !u ? e : e.parentNode, (u = (i = !(i = n ? (e.ownerSVGElement || {}).parentNode : i) || i === Xn || !i.appendChild ? Xn.body : i)._gsap) && p && u.width && l && u.time === Ot.time ? P(o / u.width * 100) : (!p && "%" !== s || (a.position = En(e, "position")), i === e && (a.position = "static"), i.appendChild(Vn), r = Vn[c], i.removeChild(Vn), a.position = "absolute", l && p && ((u = B(i)).time = Ot.time, u.width = i[c]), P(d ? r * o / 100 : r && o ? 100 / r * o : 0))) : (r = n ? e.getBBox()[l ? "width" : "height"] : e[c], P(p ? o / r * 100 : o / 100 * r)))
    }

    function Bn(e, t, n, i) {
        var r;
        return Un || An(), t in oi && "transform" !== t && ~(t = oi[t]).indexOf(",") && (t = t.split(",")[0]), Zn[t] && "transform" !== t ? (r = gi(e, i), r = "transformOrigin" !== t ? r[t] : mi(En(e, ai)) + " " + r.zOrigin + "px") : (r = e.style[t]) && "auto" !== r && !i && !~(r + "").indexOf("calc(") || (r = pi[t] && pi[t](e, t, n) || En(e, t) || l(e, t) || ("opacity" === t ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? $n(e, t, r, n) + n : r
    }

    function In(e, t, n, i) {
        var r;
        n && "none" !== n || ((o = (r = ui(t, e, 1)) && En(e, r, 1)) && o !== n ? (t = r, n = o) : "borderColor" === t && (n = En(e, "borderTopColor")));
        var o, s, a, l, u, c, d, p, f, h, g = new dn(this._pt, e.style, t, 0, 1, sn),
            m = 0,
            y = 0;
        if (g.b = n, g.e = i, n += "", "auto" === (i += "") && (e.style[t] = i, i = En(e, t) || i, e.style[t] = n), de(o = [n, i]), i = o[1], s = (n = o[0]).match(tt) || [], (i.match(tt) || []).length) {
            for (; c = tt.exec(i);) p = c[0], d = i.substring(m, c.index), l ? l = (l + 1) % 5 : "rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5) || (l = 1), p !== (u = s[y++] || "") && (a = parseFloat(u) || 0, f = u.substr((a + "").length), (h = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), c = parseFloat(p), p = p.substr((c + "").length), m = tt.lastIndex - p.length, p || (p = p || He.units[t] || f, m === i.length && (i += p, g.e += p)), f !== p && (a = $n(e, t, u, p) || 0), g._pt = {
                _next: g._pt,
                p: d || 1 === y ? d : ",",
                s: a,
                c: h ? h * c : c - a,
                m: l && l < 4 || "zIndex" === t ? Math.round : 0
            });
            g.c = m < i.length ? i.substring(m, i.length) : ""
        } else g.r = "display" === t && "none" === i ? xn : Dn;
        return it.test(i) && (g.e = 0), this._pt = g
    }

    function Rn(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var n, i, r, o = t.t,
                s = o.style,
                a = t.u,
                t = o._gsap;
            if ("all" === a || !0 === a) s.cssText = "", i = 1;
            else
                for (r = (a = a.split(",")).length; - 1 < --r;) n = a[r], Zn[n] && (i = 1, n = "transformOrigin" === n ? ai : si), Pn(o, n);
            i && (Pn(o, si), t && (t.svg && o.removeAttribute("transform"), gi(o, 1), t.uncache = 1))
        }
    }

    function qn(e) {
        return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
    }

    function Hn(e) {
        return e = En(e, si), qn(e) ? fi : e.substr(7).match(et).map(P)
    }

    function jn(e, t) {
        var n, i, r, o = e._gsap || B(e),
            s = e.style,
            a = Hn(e);
        return o.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(i = e.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? fi : a : (a !== fi || e.offsetParent || e === Yn || o.svg || (i = s.display, s.display = "block", (o = e.parentNode) && e.offsetParent || (r = 1, n = e.nextSibling, Yn.appendChild(e)), a = Hn(e), i ? s.display = i : Pn(e, "display"), r && (n ? o.insertBefore(e, n) : o ? o.appendChild(e) : Yn.removeChild(e))), t && 6 < a.length ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
    }

    function zn(e, t, n, i, r, o) {
        var s, a, l = e._gsap,
            u = r || jn(e, !0),
            c = l.xOrigin || 0,
            d = l.yOrigin || 0,
            p = l.xOffset || 0,
            f = l.yOffset || 0,
            h = u[0],
            g = u[1],
            m = u[2],
            y = u[3],
            v = u[4],
            D = u[5],
            x = t.split(" "),
            b = parseFloat(x[0]) || 0,
            r = parseFloat(x[1]) || 0;
        n ? u !== fi && (s = h * y - g * m) && (a = b * (-g / s) + r * (h / s) - (h * D - g * v) / s, b = b * (y / s) + r * (-m / s) + (m * D - y * v) / s, r = a) : (b = (a = Ln(e)).x + (~x[0].indexOf("%") ? b / 100 * a.width : b), r = a.y + (~(x[1] || x[0]).indexOf("%") ? r / 100 * a.height : r)), i || !1 !== i && l.smooth ? (l.xOffset = p + ((v = b - c) * h + (D = r - d) * m) - v, l.yOffset = f + (v * g + D * y) - D) : l.xOffset = l.yOffset = 0, l.xOrigin = b, l.yOrigin = r, l.smooth = !!i, l.origin = t, l.originIsAbsolute = !!n, e.style[ai] = "0px 0px", o && (Nn(o, l, "xOrigin", c, b), Nn(o, l, "yOrigin", d, r), Nn(o, l, "xOffset", p, l.xOffset), Nn(o, l, "yOffset", f, l.yOffset)), e.setAttribute("data-svg-origin", b + " " + r)
    }

    function Wn(e, t, n) {
        var i = K(t);
        return P(parseFloat(t) + parseFloat($n(e, "x", n + "px", i))) + i
    }
    var Xn, Yn, Un, Vn, Gn, Kn, Qn, Zn = {},
        Jn = 180 / Math.PI,
        ei = Math.PI / 180,
        ti = Math.atan2,
        ni = /([A-Z])/g,
        ii = /(?:left|right|width|margin|padding|x)/i,
        ri = /[\s,\(]\S/,
        oi = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        si = "transform",
        ai = si + "Origin",
        li = "O,Moz,ms,Ms,Webkit".split(","),
        ui = function(e, t, n) {
            var i = (t || Vn).style,
                r = 5;
            if (e in i && !n) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(li[r] + e in i););
            return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? li[r] : "") + e
        },
        ci = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        di = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        pi = {
            clearProps: function(e, t, n, i, r) {
                if ("isFromStart" !== r.data) {
                    t = e._pt = new dn(e._pt, t, n, 0, 0, Rn);
                    return t.u = i, t.pr = -10, t.tween = r, e._props.push(n), 1
                }
            }
        },
        fi = [1, 0, 0, 1, 0, 0],
        hi = {},
        gi = function(e, t) {
            var n = e._gsap || new qt(e);
            if ("x" in n && !t && !n.uncache) return n;
            var i, r, o, s, a, l, u, c, d, p, f, h, g, m, y, v, D, x, b, w, T, C, _, k, S, E = e.style,
                A = n.scaleX < 0,
                F = "deg",
                O = En(e, ai) || "0",
                L = i = r = s = a = l = u = c = 0,
                M = o = 1;
            return n.svg = !(!e.getCTM || !Mn(e)), d = jn(e, n.svg), n.svg && (x = !n.uncache && e.getAttribute("data-svg-origin"), zn(e, x || O, !!x || n.originIsAbsolute, !1 !== n.smooth, d)), C = n.xOrigin || 0, k = n.yOrigin || 0, d !== fi && (h = d[0], g = d[1], m = d[2], y = d[3], L = v = d[4], i = D = d[5], 6 === d.length ? (M = Math.sqrt(h * h + g * g), o = Math.sqrt(y * y + m * m), s = h || g ? ti(g, h) * Jn : 0, (u = m || y ? ti(m, y) * Jn + s : 0) && (o *= Math.cos(u * ei)), n.svg && (L -= C - (C * h + k * m), i -= k - (C * g + k * y))) : (S = d[6], _ = d[7], T = d[8], t = d[9], C = d[10], k = d[11], L = d[12], i = d[13], r = d[14], a = (d = ti(S, C)) * Jn, d && (x = v * (p = Math.cos(-d)) + T * (f = Math.sin(-d)), b = D * p + t * f, w = S * p + C * f, T = v * -f + T * p, t = D * -f + t * p, C = S * -f + C * p, k = _ * -f + k * p, v = x, D = b, S = w), l = (d = ti(-m, C)) * Jn, d && (p = Math.cos(-d), k = y * (f = Math.sin(-d)) + k * p, h = x = h * p - T * f, g = b = g * p - t * f, m = w = m * p - C * f), s = (d = ti(g, h)) * Jn, d && (x = h * (p = Math.cos(d)) + g * (f = Math.sin(d)), b = v * p + D * f, g = g * p - h * f, D = D * p - v * f, h = x, v = b), a && 359.9 < Math.abs(a) + Math.abs(s) && (a = s = 0, l = 180 - l), M = P(Math.sqrt(h * h + g * g + m * m)), o = P(Math.sqrt(D * D + S * S)), d = ti(v, D), u = 2e-4 < Math.abs(d) ? d * Jn : 0, c = k ? 1 / (k < 0 ? -k : k) : 0), n.svg && (x = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !qn(En(e, si)), x && e.setAttribute("transform", x))), 90 < Math.abs(u) && Math.abs(u) < 270 && (A ? (M *= -1, u += s <= 0 ? 180 : -180, s += s <= 0 ? 180 : -180) : (o *= -1, u += u <= 0 ? 180 : -180)), n.x = L - ((n.xPercent = L && (n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-L) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = r + "px", n.scaleX = P(M), n.scaleY = P(o), n.rotation = P(s) + F, n.rotationX = P(a) + F, n.rotationY = P(l) + F, n.skewX = u + F, n.skewY = 0 + F, n.transformPerspective = c + "px", (n.zOrigin = parseFloat(O.split(" ")[2]) || 0) && (E[ai] = mi(O)), n.xOffset = n.yOffset = 0, n.force3D = He.force3D, n.renderTransform = n.svg ? wi : Qn ? bi : yi, n.uncache = 0, n
        },
        mi = function(e) {
            return (e = e.split(" "))[0] + " " + e[1]
        },
        yi = function(e, t) {
            t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, bi(e, t)
        },
        vi = "0deg",
        Di = "0px",
        xi = ") ",
        bi = function(e, t) {
            var n = t || this,
                i = n.xPercent,
                r = n.yPercent,
                o = n.x,
                s = n.y,
                a = n.z,
                l = n.rotation,
                u = n.rotationY,
                c = n.rotationX,
                d = n.skewX,
                p = n.skewY,
                f = n.scaleX,
                h = n.scaleY,
                g = n.transformPerspective,
                m = n.force3D,
                y = n.target,
                v = n.zOrigin,
                D = "",
                x = "auto" === m && e && 1 !== e || !0 === m;
            !v || c === vi && u === vi || (t = parseFloat(u) * ei, n = Math.sin(t), e = Math.cos(t), t = parseFloat(c) * ei, m = Math.cos(t), o = Wn(y, o, n * m * -v), s = Wn(y, s, -Math.sin(t) * -v), a = Wn(y, a, e * m * -v + v)), g !== Di && (D += "perspective(" + g + xi), (i || r) && (D += "translate(" + i + "%, " + r + "%) "), !x && o === Di && s === Di && a === Di || (D += a !== Di || x ? "translate3d(" + o + ", " + s + ", " + a + ") " : "translate(" + o + ", " + s + xi), l !== vi && (D += "rotate(" + l + xi), u !== vi && (D += "rotateY(" + u + xi), c !== vi && (D += "rotateX(" + c + xi), d === vi && p === vi || (D += "skew(" + d + ", " + p + xi), 1 === f && 1 === h || (D += "scale(" + f + ", " + h + xi), y.style[si] = D || "translate(0, 0)"
        },
        wi = function(e, t) {
            var n, i, r, o, s, a = t || this,
                l = a.xPercent,
                u = a.yPercent,
                c = a.x,
                d = a.y,
                p = a.rotation,
                f = a.skewX,
                h = a.skewY,
                g = a.scaleX,
                m = a.scaleY,
                y = a.target,
                v = a.xOrigin,
                D = a.yOrigin,
                x = a.xOffset,
                b = a.yOffset,
                w = a.forceCSS,
                t = parseFloat(c),
                a = parseFloat(d),
                p = parseFloat(p),
                f = parseFloat(f);
            (h = parseFloat(h)) && (f += h = parseFloat(h), p += h), p || f ? (p *= ei, f *= ei, n = Math.cos(p) * g, i = Math.sin(p) * g, r = Math.sin(p - f) * -m, o = Math.cos(p - f) * m, f && (h *= ei, s = Math.tan(f - h), r *= s = Math.sqrt(1 + s * s), o *= s, h && (s = Math.tan(h), n *= s = Math.sqrt(1 + s * s), i *= s)), n = P(n), i = P(i), r = P(r), o = P(o)) : (n = g, o = m, i = r = 0), (t && !~(c + "").indexOf("px") || a && !~(d + "").indexOf("px")) && (t = $n(y, "x", c, "px"), a = $n(y, "y", d, "px")), (v || D || x || b) && (t = P(t + v - (v * n + D * r) + x), a = P(a + D - (v * i + D * o) + b)), (l || u) && (s = y.getBBox(), t = P(t + l / 100 * s.width), a = P(a + u / 100 * s.height)), y.setAttribute("transform", s = "matrix(" + n + "," + i + "," + r + "," + o + "," + t + "," + a + ")"), w && (y.style[si] = s)
        };
    f("padding,margin,Width,Radius", function(t, n) {
        var e = "Top",
            i = "Right",
            r = "Bottom",
            o = "Left",
            a = (n < 3 ? [e, i, r, o] : [e + o, e + i, r + i, r + o]).map(function(e) {
                return n < 2 ? t + e : "border" + e + t
            });
        pi[1 < n ? "border" + t : t] = function(t, e, n, i, r) {
            var o, s;
            if (arguments.length < 4) return o = a.map(function(e) {
                return Bn(t, e, n)
            }), 5 === (s = o.join(" ")).split(o[0]).length ? o[0] : s;
            o = (i + "").split(" "), s = {}, a.forEach(function(e, t) {
                return s[e] = o[t] = o[t] || o[(t - 1) / 2 | 0]
            }), t.init(e, s, r)
        }
    });
    var Ti, _t = {
        name: "css",
        register: An,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, n, i, r) {
            var o, s, a, l, u, c, d, p, f, h, g, m, y, v, D, x, b, w, T, C, _, k, S = this._props,
                E = e.style,
                A = n.vars.startAt;
            for (u in Un || An(), t)
                if ("autoRound" !== u && (s = t[u], !dt[u] || !zt(u, t, n, i, e, r)))
                    if (b = pi[u], "string" === (w = "function" === (w = typeof s) ? typeof(s = s.call(n, i, e, r)) : w) && ~s.indexOf("random(") && (s = re(s)), b) b(this, e, u, s, n) && (y = 1);
                    else if ("--" === u.substr(0, 2)) o = (getComputedStyle(e).getPropertyValue(u) + "").trim(), s += "", c = K(o), (d = K(s)) ? c !== d && (o = $n(e, u, o, d) + d) : c && (s += c), this.add(E, "setProperty", o, s, i, r, 0, 0, u);
            else if ("undefined" !== w) {
                if (A && u in A ? (o = "function" == typeof A[u] ? A[u].call(n, i, e, r) : A[u], u in He.units && !K(o) && (o += He.units[u]), "=" === (o + "").charAt(1) && (o = Bn(e, u))) : o = Bn(e, u), l = parseFloat(o), (p = "string" === w && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), a = parseFloat(s), u in oi && ("autoAlpha" === u && (1 === l && "hidden" === Bn(e, "visibility") && a && (l = 0), Nn(this, E, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== u && "transform" !== u && ~(u = oi[u]).indexOf(",") && (u = u.split(",")[0])), f = u in Zn)
                    if (h || ((g = e._gsap).renderTransform && !t.parseTransform || gi(e, t.parseTransform), m = !1 !== t.smoothOrigin && g.smooth, (h = this._pt = new dn(this._pt, E, si, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === u) this._pt = new dn(this._pt, g, "scaleY", g.scaleY, p ? p * a : a - g.scaleY), S.push("scaleY", u), u += "X";
                    else {
                        if ("transformOrigin" === u) {
                            k = _ = C = void 0, C = (T = s).split(" "), _ = C[0], k = C[1] || "50%", "top" !== _ && "bottom" !== _ && "left" !== k && "right" !== k || (T = _, _ = k, k = T), C[0] = di[_] || _, C[1] = di[k] || k, s = C.join(" "), g.svg ? zn(e, s, 0, m, 0, this) : ((d = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && Nn(this, g, "zOrigin", g.zOrigin, d), Nn(this, E, u, mi(o), mi(s)));
                            continue
                        }
                        if ("svgOrigin" === u) {
                            zn(e, s, 1, m, 0, this);
                            continue
                        }
                        if (u in hi) {
                            v = this, D = g, x = u, b = l, w = p, k = k = _ = T = void 0, T = 360, _ = F(C = s), k = parseFloat(C) * (_ && ~C.indexOf("rad") ? Jn : 1), k = b + (w = w ? k * w : k - b) + "deg", _ && ("short" === (C = C.split("_")[1]) && (w %= T) !== w % 180 && (w += w < 0 ? T : -T), "cw" === C && w < 0 ? w = (w + 36e9) % T - ~~(w / T) * T : "ccw" === C && 0 < w && (w = (w - 36e9) % T - ~~(w / T) * T)), v._pt = w = new dn(v._pt, D, x, b, w, mn), w.e = k, w.u = "deg", v._props.push(x);
                            continue
                        }
                        if ("smoothOrigin" === u) {
                            Nn(this, g, "smooth", g.smooth, s);
                            continue
                        }
                        if ("force3D" === u) {
                            g[u] = s;
                            continue
                        }
                        if ("transform" === u) {
                            ! function(e, t, n) {
                                var i, r, o, s, a, l = Gn.style,
                                    u = n._gsap;
                                for (r in l.cssText = getComputedStyle(n).cssText + ";position:absolute;display:block;", l[si] = t, Xn.body.appendChild(Gn), i = gi(Gn, 1), Zn)(o = u[r]) !== (s = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (o = K(o) !== (a = K(s)) ? $n(n, r, o, a) : parseFloat(o), s = parseFloat(s), e._pt = new dn(e._pt, u, r, o, s - o, gn), e._pt.u = a || 0, e._props.push(r));
                                Xn.body.removeChild(Gn)
                            }(this, s, e);
                            continue
                        }
                    }
                else u in E || (u = ui(u) || u);
                if (f || (a || 0 === a) && (l || 0 === l) && !ri.test(s) && u in E) a = a || 0, (c = (o + "").substr((l + "").length)) !== (d = K(s) || (u in He.units ? He.units[u] : c)) && (l = $n(e, u, o, d)), this._pt = new dn(this._pt, f ? g : E, u, l, p ? p * a : a - l, f || "px" !== d && "zIndex" !== u || !1 === t.autoRound ? gn : vn), this._pt.u = d || 0, c !== d && (this._pt.b = o, this._pt.r = yn);
                else if (u in E) In.call(this, e, u, o, s);
                else {
                    if (!(u in e)) {
                        O(u, s);
                        continue
                    }
                    this.add(e, u, e[u], s, i, r)
                }
                S.push(u)
            }
            y && cn(this)
        },
        get: Bn,
        aliases: oi,
        getSetter: function(e, t, n) {
            var i = oi[t];
            return (t = i && i.indexOf(",") < 0 ? i : t) in Zn && t !== ai && (e._gsap.x || Bn(e, "x")) ? n && Kn === n ? "scale" === t ? Cn : Tn : (Kn = n || {}) && ("scale" === t ? _n : kn) : e.style && !r(e.style[t]) ? bn : ~t.indexOf("-") ? wn : nn(e, t)
        },
        core: {
            _removeProperty: Pn,
            _getMatrix: jn
        }
    };
    hn.utils.checkPrefix = ui, Ti = f((Tt = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (wt = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(e) {
        Zn[e] = 1
    }), f(wt, function(e) {
        He.units[e] = "deg", hi[e] = 1
    }), oi[Ti[13]] = Tt + "," + wt, f("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(e) {
        e = e.split(":");
        oi[e[1]] = Ti[e[0]]
    }), f("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(e) {
        He.units[e] = "px"
    }), hn.registerPlugin(_t);
    var Ci = hn.registerPlugin(_t) || hn,
        _i = (Ci.core.Tween, /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/);
    /*!
     * strings: 3.6.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    function ki(e) {
        return Ri.getComputedStyle(e)
    }

    function Si(e, t) {
        var n;
        return zi(e) ? e : "string" == (n = typeof e) && !t && e ? Wi.call(Ii.querySelectorAll(e), 0) : e && "object" == n && "length" in e ? Wi.call(e, 0) : e ? [e] : []
    }

    function Ei(e) {
        return "absolute" === e.position || !0 === e.absolute
    }

    function Ai(e, t) {
        for (var n, i = t.length; - 1 < --i;)
            if (n = t[i], e.substr(0, n.length) === n) return n.length
    }

    function Fi(e, t) {
        var n = ~(e = void 0 === e ? "" : e).indexOf("++"),
            i = 1;
        return n && (e = e.split("++").join("")),
            function() {
                return "<" + t + " style='position:relative;display:inline-block;'" + (e ? " class='" + e + (n ? i++ : "") + "'>" : ">")
            }
    }

    function Oi(e, t, n) {
        var i = e.nodeType;
        if (1 === i || 9 === i || 11 === i)
            for (e = e.firstChild; e; e = e.nextSibling) Oi(e, t, n);
        else 3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(t).join(n))
    }

    function Li(e, t) {
        for (var n = t.length; - 1 < --n;) e.push(t[n])
    }

    function Mi(e, t, n) {
        for (var i; e && e !== t;) {
            if (i = e._next || e.nextSibling) return i.textContent.charAt(0) === n;
            e = e.parentNode || e._parent
        }
    }

    function Pi(e) {
        for (var t, n = Si(e.childNodes), i = n.length, r = 0; r < i; r++)(t = n[r])._isSplit ? Pi(t) : r && t.previousSibling && 3 === t.previousSibling.nodeType ? (t.previousSibling.nodeValue += (3 === t.nodeType ? t : t.firstChild).nodeValue, e.removeChild(t)) : 3 !== t.nodeType && (e.insertBefore(t.firstChild, t), e.removeChild(t))
    }

    function Ni(e, t) {
        return parseFloat(t[e]) || 0
    }

    function $i(e, t, n, i) {
        var r, o, s, a, l, u, c, d = t.tag || (t.span ? "span" : "div"),
            p = ~(t.type || t.split || "chars,words,lines").indexOf("chars"),
            f = Ei(t),
            h = t.wordDelimiter || " ",
            g = " " !== h ? "" : f ? "&#173; " : " ",
            m = "</" + d + ">",
            y = 1,
            v = t.specialChars ? "function" == typeof t.specialChars ? t.specialChars : Ai : null,
            D = Ii.createElement("div");
        for ((f = e.parentNode).insertBefore(D, e), D.textContent = e.nodeValue, f.removeChild(e), D = -1 !== (r = function e(t) {
                var n = t.nodeType,
                    i = "";
                if (1 === n || 9 === n || 11 === n) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += e(t)
                } else if (3 === n || 4 === n) return t.nodeValue;
                return i
            }(e = D)).indexOf("<"), !1 !== t.reduceWhiteSpace && (r = r.replace(ji, " ").replace(Hi, "")), l = (r = D ? r.split("<").join("{{LT}}") : r).length, o = (" " === r.charAt(0) ? g : "") + n(), s = 0; s < l; s++)
            if (u = r.charAt(s), v && (c = v(r.substr(s), t.specialChars))) u = r.substr(s, c || 1), o += p && " " !== u ? i() + u + "</" + d + ">" : u, s += c - 1;
            else if (u === h && r.charAt(s - 1) !== h && s) {
            for (o += y ? m : "", y = 0; r.charAt(s + 1) === h;) o += g, s++;
            s === l - 1 ? o += g : ")" !== r.charAt(s + 1) && (o += g + n(), y = 1)
        } else "{" === u && "{{LT}}" === r.substr(s, 6) ? (o += p ? i() + "{{LT}}</" + d + ">" : "{{LT}}", s += 5) : 55296 <= u.charCodeAt(0) && u.charCodeAt(0) <= 56319 || 65024 <= r.charCodeAt(s + 1) && r.charCodeAt(s + 1) <= 65039 ? (a = ((r.substr(s, 12).split(_i) || [])[1] || "").length || 2, o += p && " " !== u ? i() + r.substr(s, a) + "</" + d + ">" : r.substr(s, a), s += a - 1) : o += p && " " !== u ? i() + u + "</" + d + ">" : u;
        e.outerHTML = o + (y ? m : ""), D && Oi(f, "{{LT}}", "<")
    }

    function Bi(e, t, n, i) {
        var r, o, s = Si(e.childNodes),
            a = s.length,
            l = Ei(t);
        if (3 !== e.nodeType || 1 < a) {
            for (t.absolute = !1, r = 0; r < a; r++)(o = s[r])._next = o._isFirst = o._parent = o._wordEnd = null, 3 === o.nodeType && !/\S+/.test(o.nodeValue) || (l && 3 !== o.nodeType && "inline" === ki(o).display && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, Bi(o, t, n, i));
            return t.absolute = l, void(e._isSplit = !0)
        }
        $i(e, t, n, i)
    }
    /*!
     * SplitText: 3.6.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ii, Ri, qi, Hi = /(?:\r|\n|\t\t)/g,
        ji = /(?:\s\s+)/g,
        zi = Array.isArray,
        Wi = [].slice,
        Xi = function() {
            function n(e, t) {
                qi || (Ii = document, Ri = window, qi = 1), this.elements = Si(e), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = t || {}, this.split(t)
            }
            var e = n.prototype;
            return e.split = function(e) {
                this.isSplit && this.revert(), this.vars = e = e || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var t, n, i, r = this.elements.length, o = e.tag || (e.span ? "span" : "div"), s = Fi(e.wordsClass, o), a = Fi(e.charsClass, o); - 1 < --r;) i = this.elements[r], this._originals[r] = i.innerHTML, t = i.clientHeight, n = i.clientWidth, Bi(i, e, s, a),
                    function(e, t, n, i, r, o, s) {
                        var a, l, u, c, d, p, f, h, g, m, y, v, D = ki(e),
                            x = Ni("paddingLeft", D),
                            b = -999,
                            w = Ni("borderBottomWidth", D) + Ni("borderTopWidth", D),
                            T = Ni("borderLeftWidth", D) + Ni("borderRightWidth", D),
                            C = Ni("paddingTop", D) + Ni("paddingBottom", D),
                            _ = Ni("paddingLeft", D) + Ni("paddingRight", D),
                            k = Ni("fontSize", D) * (t.lineThreshold || .2),
                            S = D.textAlign,
                            E = [],
                            A = [],
                            F = [],
                            O = t.wordDelimiter || " ",
                            L = t.tag || (t.span ? "span" : "div"),
                            D = t.type || t.split || "chars,words,lines",
                            M = r && ~D.indexOf("lines") ? [] : null,
                            P = ~D.indexOf("words"),
                            N = ~D.indexOf("chars"),
                            $ = Ei(t),
                            B = t.linesClass,
                            I = ~(B || "").indexOf("++"),
                            R = [];
                        for (I && (B = B.split("++").join("")), u = (l = e.getElementsByTagName("*")).length, d = [], a = 0; a < u; a++) d[a] = l[a];
                        if (M || $)
                            for (a = 0; a < u; a++)((p = (c = d[a]).parentNode === e) || $ || N && !P) && (v = c.offsetTop, M && p && Math.abs(v - b) > k && ("BR" !== c.nodeName || 0 === a) && (M.push(f = []), b = v), $ && (c._x = c.offsetLeft, c._y = v, c._w = c.offsetWidth, c._h = c.offsetHeight), M && ((c._isSplit && p || !N && p || P && p || !P && c.parentNode.parentNode === e && !c.parentNode._isSplit) && (f.push(c), c._x -= x, Mi(c, e, O) && (c._wordEnd = !0)), "BR" === c.nodeName && (c.nextSibling && "BR" === c.nextSibling.nodeName || 0 === a) && M.push([])));
                        for (a = 0; a < u; a++)
                            if (p = (c = d[a]).parentNode === e, "BR" !== c.nodeName)
                                if ($ && (g = c.style, P || p || (c._x += c.parentNode._x, c._y += c.parentNode._y), g.left = c._x + "px", g.top = c._y + "px", g.position = "absolute", g.display = "block", g.width = c._w + 1 + "px", g.height = c._h + "px"), !P && N)
                                    if (c._isSplit)
                                        for (c._next = l = c.nextSibling, c.parentNode.appendChild(c); l && 3 === l.nodeType && " " === l.textContent;) c._next = l.nextSibling, c.parentNode.appendChild(l), l = l.nextSibling;
                                    else c.parentNode._isSplit ? (c._parent = c.parentNode, !c.previousSibling && c.firstChild && (c.firstChild._isFirst = !0), c.nextSibling && " " === c.nextSibling.textContent && !c.nextSibling.nextSibling && R.push(c.nextSibling), c._next = c.nextSibling && c.nextSibling._isFirst ? null : c.nextSibling, c.parentNode.removeChild(c), d.splice(a--, 1), u--) : p || (v = !c.nextSibling && Mi(c.parentNode, e, O), c.parentNode._parent && c.parentNode._parent.appendChild(c), v && c.parentNode.appendChild(Ii.createTextNode(" ")), "span" === L && (c.style.display = "inline"), E.push(c));
                        else c.parentNode._isSplit && !c._isSplit && "" !== c.innerHTML ? A.push(c) : N && !c._isSplit && ("span" === L && (c.style.display = "inline"), E.push(c));
                        else M || $ ? (c.parentNode && c.parentNode.removeChild(c), d.splice(a--, 1), u--) : P || e.appendChild(c);
                        for (a = R.length; - 1 < --a;) R[a].parentNode.removeChild(R[a]);
                        if (M) {
                            for ($ && (m = Ii.createElement(L), e.appendChild(m), y = m.offsetWidth + "px", v = m.offsetParent === e ? 0 : e.offsetLeft, e.removeChild(m)), g = e.style.cssText, e.style.cssText = "display:none;"; e.firstChild;) e.removeChild(e.firstChild);
                            for (h = " " === O && (!$ || !P && !N), a = 0; a < M.length; a++) {
                                for (f = M[a], (m = Ii.createElement(L)).style.cssText = "display:block;text-align:" + S + ";position:" + ($ ? "absolute;" : "relative;"), B && (m.className = B + (I ? a + 1 : "")), F.push(m), u = f.length, l = 0; l < u; l++) "BR" !== f[l].nodeName && (c = f[l], m.appendChild(c), h && c._wordEnd && m.appendChild(Ii.createTextNode(" ")), $ && (0 === l && (m.style.top = c._y + "px", m.style.left = x + v + "px"), c.style.top = "0px", v && (c.style.left = c._x - v + "px")));
                                0 === u ? m.innerHTML = "&nbsp;" : P || N || (Pi(m), Oi(m, String.fromCharCode(160), " ")), $ && (m.style.width = y, m.style.height = c._h + "px"), e.appendChild(m)
                            }
                            e.style.cssText = g
                        }
                        $ && (s > e.clientHeight && (e.style.height = s - C + "px", e.clientHeight < s && (e.style.height = s + w + "px")), o > e.clientWidth && (e.style.width = o - _ + "px", e.clientWidth < o && (e.style.width = o + T + "px"))), Li(n, E), P && Li(i, A), Li(r, F)
                    }(i, e, this.chars, this.words, this.lines, n, t);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, e.revert = function() {
                var n = this._originals;
                if (!n) throw "revert() call wasn't scoped properly.";
                return this.elements.forEach(function(e, t) {
                    return e.innerHTML = n[t]
                }), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, n.create = function(e, t) {
                return new n(e, t)
            }, n
        }();
    Xi.version = "3.6.0";

    function Yi() {
        return "undefined" != typeof window
    }

    function Ui() {
        return tr || Yi() && (tr = window.gsap) && tr.registerPlugin && tr
    }

    function Vi(e) {
        return "string" == typeof e
    }

    function Gi(e) {
        return "function" == typeof e
    }

    function Ki(e, t) {
        var n = "x" === t ? "Width" : "Height",
            i = "scroll" + n,
            t = "client" + n;
        return e === ir || e === rr || e === or ? Math.max(rr[i], or[i]) - (ir["inner" + n] || rr[t] || or[t]) : e[i] - e["offset" + n]
    }

    function Qi(e, t) {
        var n = "scroll" + ("x" === t ? "Left" : "Top");
        return e === ir && (null != e.pageXOffset ? n = "page" + t.toUpperCase() + "Offset" : e = null != rr[n] ? rr : or),
            function() {
                return e[n]
            }
    }

    function Zi(e, t) {
        if (!(e = sr(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var n = e.getBoundingClientRect(),
            i = !t || t === ir || t === or,
            e = i ? {
                top: rr.clientTop - (ir.pageYOffset || rr.scrollTop || or.scrollTop || 0),
                left: rr.clientLeft - (ir.pageXOffset || rr.scrollLeft || or.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            e = {
                x: n.left - e.left,
                y: n.top - e.top
            };
        return !i && t && (e.x += Qi(t, "x")(), e.y += Qi(t, "y")()), e
    }

    function Ji(e, t, n, i, r) {
        return isNaN(e) || "object" == typeof e ? Vi(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + i - r : "max" === e ? Ki(t, n) - r : Math.min(Ki(t, n), Zi(e, t)[n] - r) : parseFloat(e) - r
    }

    function er() {
        tr = Ui(), Yi() && tr && document.body && (ir = window, or = document.body, rr = document.documentElement, sr = tr.utils.toArray, tr.config({
            autoKillThreshold: 7
        }), ar = tr.config(), nr = 1)
    }
    /*!
     * ScrollToPlugin 3.6.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var tr, nr, ir, rr, or, sr, ar, Tt = {
        version: "3.6.0",
        name: "scrollTo",
        rawVars: 1,
        register: function(e) {
            tr = e, er()
        },
        init: function(e, t, n, i, r) {
            nr || er();
            var o = this;
            o.isWin = e === ir, o.target = e, o.tween = n, t = function(e, t, n, i) {
                if ("object" != typeof(e = Gi(e) ? e(t, n, i) : e)) return Vi(e) && "max" !== e && "=" !== e.charAt(1) ? {
                    x: e,
                    y: e
                } : {
                    y: e
                };
                if (e.nodeType) return {
                    y: e,
                    x: e
                };
                var r, o = {};
                for (r in e) "onAutoKill" !== r && (o[r] = Gi(e[r]) ? e[r](t, n, i) : e[r]);
                return o
            }(t, i, e, r), o.vars = t, o.autoKill = !!t.autoKill, o.getX = Qi(e, "x"), o.getY = Qi(e, "y"), o.x = o.xPrev = o.getX(), o.y = o.yPrev = o.getY(), null != t.x ? (o.add(o, "x", o.x, Ji(t.x, e, "x", o.x, t.offsetX || 0), i, r, Math.round), o._props.push("scrollTo_x")) : o.skipX = 1, null != t.y ? (o.add(o, "y", o.y, Ji(t.y, e, "y", o.y, t.offsetY || 0), i, r, Math.round), o._props.push("scrollTo_y")) : o.skipY = 1
        },
        render: function(e, t) {
            for (var n, i, r, o = t._pt, s = t.target, a = t.tween, l = t.autoKill, u = t.xPrev, c = t.yPrev, d = t.isWin; o;) o.r(e, o.d), o = o._next;
            n = d || !t.skipX ? t.getX() : u, r = (i = d || !t.skipY ? t.getY() : c) - c, c = n - u, u = ar.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), l && (!t.skipX && (u < c || c < -u) && n < Ki(s, "x") && (t.skipX = 1), !t.skipY && (u < r || r < -u) && i < Ki(s, "y") && (t.skipY = 1), t.skipX && t.skipY && (a.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(a, t.vars.onAutoKillParams || []))), d ? ir.scrollTo(t.skipX ? n : t.x, t.skipY ? i : t.y) : (t.skipY || (s.scrollTop = t.y), t.skipX || (s.scrollLeft = t.x)), t.xPrev = t.x, t.yPrev = t.y
        },
        kill: function(e) {
            var t = "scrollTo" === e;
            !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1)
        }
    };
    Tt.max = Ki, Tt.getOffset = Zi, Tt.buildGetter = Qi, Ui() && tr.registerPlugin(Tt);

    function lr(e, t) {
        if (e.parentNode && (cr || xr(e))) {
            var n = kr(e),
                i = n ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                r = n ? t ? "rect" : "g" : "div",
                o = 2 !== t ? 0 : 100,
                s = 3 === t ? 100 : 0,
                a = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                r = cr.createElementNS ? cr.createElementNS(i.replace(/^https/, "http"), r) : cr.createElement(r);
            return t && (n ? (gr = gr || lr(e), r.setAttribute("width", .01), r.setAttribute("height", .01), r.setAttribute("transform", "translate(" + o + "," + s + ")"), gr.appendChild(r)) : (hr || ((hr = lr(e)).style.cssText = a), r.style.cssText = a + "width:0.1px;height:0.1px;top:" + s + "px;left:" + o + "px", hr.appendChild(r))), r
        }
        throw "Need document and parent."
    }

    function ur(e, t, n, i, r, o, s) {
        return e.a = t, e.b = n, e.c = i, e.d = r, e.e = o, e.f = s, e
    }
    /*!
     * matrix 3.6.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var cr, dr, pr, fr, hr, gr, mr, yr, vr = "transform",
        Dr = vr + "Origin",
        xr = function(e) {
            var t, n = e.ownerDocument || e;
            !(vr in e.style) && "msTransform" in e.style && (Dr = (vr = "msTransform") + "Origin");
            for (; n.parentNode && (n = n.parentNode););
            return dr = window, mr = new Ar, n && (pr = (cr = n).documentElement, fr = n.body, t = n.createElement("div"), e = n.createElement("div"), fr.appendChild(t), t.appendChild(e), t.style.position = "static", t.style[vr] = "translate3d(0,0,1px)", yr = e.offsetParent !== t, fr.removeChild(t)), n
        },
        br = function(e) {
            for (var t, n; e && e !== fr;)(n = e._gsap) && n.uncache && n.get(e, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), t ? t.push(n) : t = [n]), e = e.parentNode;
            return t
        },
        wr = [],
        Tr = [],
        Cr = function() {
            return dr.pageYOffset || cr.scrollTop || pr.scrollTop || fr.scrollTop || 0
        },
        _r = function() {
            return dr.pageXOffset || cr.scrollLeft || pr.scrollLeft || fr.scrollLeft || 0
        },
        kr = function(e) {
            return e.ownerSVGElement || ("svg" === (e.tagName + "").toLowerCase() ? e : null)
        },
        Sr = function e(t) {
            return "fixed" === dr.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
        },
        Er = function(e, t) {
            var n, i, r, o, s = kr(e),
                a = e === s,
                l = s ? wr : Tr,
                u = e.parentNode;
            if (e === dr) return e;
            if (l.length || l.push(lr(e, 1), lr(e, 2), lr(e, 3)), l = s ? gr : hr, s) i = a ? {
                x: 0,
                y: 0
            } : e.getBBox(), o = (n = e.transform ? e.transform.baseVal : {}).numberOfItems ? (r = (n = 1 < n.numberOfItems ? function(e) {
                for (var t = new Ar, n = 0; n < e.numberOfItems; n++) t.multiply(e.getItem(n).matrix);
                return t
            }(n) : n.getItem(0).matrix).a * i.x + n.c * i.y, n.b * i.x + n.d * i.y) : (n = mr, r = i.x, i.y), t && "g" === e.tagName.toLowerCase() && (r = o = 0), l.setAttribute("transform", "matrix(" + n.a + "," + n.b + "," + n.c + "," + n.d + "," + (n.e + r) + "," + (n.f + o) + ")"), (a ? s : u).appendChild(l);
            else {
                if (r = o = 0, yr)
                    for (n = e.offsetParent, i = e;
                        (i = i && i.parentNode) && i !== n && i.parentNode;) 4 < (dr.getComputedStyle(i)[vr] + "").length && (r = i.offsetLeft, o = i.offsetTop, i = 0);
                if ("absolute" !== (s = dr.getComputedStyle(e)).position)
                    for (n = e.offsetParent; u !== n;) r += u.scrollLeft || 0, o += u.scrollTop || 0, u = u.parentNode;
                (i = l.style).top = e.offsetTop - o + "px", i.left = e.offsetLeft - r + "px", i[vr] = s[vr], i[Dr] = s[Dr], i.position = "fixed" === s.position ? "fixed" : "absolute", e.parentNode.appendChild(l)
            }
            return l
        },
        Ar = function() {
            function e(e, t, n, i, r, o) {
                ur(this, e = void 0 === e ? 1 : e, t = void 0 === t ? 0 : t, n = void 0 === n ? 0 : n, i = void 0 === i ? 1 : i, r = void 0 === r ? 0 : r, o = void 0 === o ? 0 : o)
            }
            var t = e.prototype;
            return t.inverse = function() {
                var e = this.a,
                    t = this.b,
                    n = this.c,
                    i = this.d,
                    r = this.e,
                    o = this.f,
                    s = e * i - t * n || 1e-10;
                return ur(this, i / s, -t / s, -n / s, e / s, (n * o - i * r) / s, -(e * o - t * r) / s)
            }, t.multiply = function(e) {
                var t = this.a,
                    n = this.b,
                    i = this.c,
                    r = this.d,
                    o = this.e,
                    s = this.f,
                    a = e.a,
                    l = e.c,
                    u = e.b,
                    c = e.d,
                    d = e.e,
                    e = e.f;
                return ur(this, a * t + u * i, a * n + u * r, l * t + c * i, l * n + c * r, o + d * t + e * i, s + d * n + e * r)
            }, t.clone = function() {
                return new e(this.a, this.b, this.c, this.d, this.e, this.f)
            }, t.equals = function(e) {
                var t = this.a,
                    n = this.b,
                    i = this.c,
                    r = this.d,
                    o = this.e,
                    s = this.f;
                return t === e.a && n === e.b && i === e.c && r === e.d && o === e.e && s === e.f
            }, t.apply = function(e, t) {
                var n = e.x,
                    i = e.y,
                    r = this.a,
                    o = this.b,
                    s = this.c,
                    a = this.d,
                    l = this.e,
                    e = this.f;
                return (t = void 0 === t ? {} : t).x = n * r + i * s + l || 0, t.y = n * o + i * a + e || 0, t
            }, e
        }();

    function Fr(e, t, n, i) {
        if (!e || !e.parentNode || (cr || xr(e)).documentElement === e) return new Ar;
        var r = br(e),
            o = kr(e) ? wr : Tr,
            s = Er(e, n),
            a = o[0].getBoundingClientRect(),
            l = o[1].getBoundingClientRect(),
            n = o[2].getBoundingClientRect(),
            o = s.parentNode,
            e = !i && Sr(e),
            e = new Ar((l.left - a.left) / 100, (l.top - a.top) / 100, (n.left - a.left) / 100, (n.top - a.top) / 100, a.left + (e ? 0 : _r()), a.top + (e ? 0 : Cr()));
        if (o.removeChild(s), r)
            for (a = r.length; a--;)(l = r[a]).scaleX = l.scaleY = 0, l.renderTransform(1, l);
        return t ? e.inverse() : e
    }

    function Or() {
        return "undefined" != typeof window
    }

    function Lr() {
        return Rr || Or() && (Rr = window.gsap) && Rr.registerPlugin && Rr
    }

    function Mr() {
        return !1
    }

    function Pr(e, t) {
        return (t = Hr.createElementNS ? Hr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Hr.createElement(e)).style ? t : Hr.createElement(e)
    }

    function Nr() {
        return vo.forEach(function(e) {
            return e()
        })
    }

    function $r() {
        return !vo.length && Rr.ticker.remove(Nr)
    }

    function Br(e) {
        Jr = e.touches && Zr < e.touches.length, Oo(e.target, "touchend", Br)
    }

    function Ir(e, t) {
        var n = "x" === t ? "Width" : "Height",
            i = "scroll" + n,
            t = "client" + n;
        return Math.max(0, Ro(e) ? Math.max(jr[i], zr[i]) - (qr["inner" + n] || jr[t] || zr[t]) : e[i] - e[t])
    }
    /*!
     * Draggable 3.6.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Rr, qr, Hr, jr, zr, Wr, Xr, Yr, Ur, Vr, Gr, Kr, Qr, Zr, Jr, eo, to, no, io, ro, oo, so = function(e) {
            return "function" == typeof e
        },
        ao = function(e) {
            return "object" == typeof e
        },
        lo = function(e) {
            return void 0 === e
        },
        uo = "transform",
        co = "transformOrigin",
        po = function(e) {
            return Math.round(1e4 * e) / 1e4
        },
        fo = Array.isArray,
        ho = 180 / Math.PI,
        go = 1e20,
        mo = new Ar,
        yo = Date.now || function() {
            return (new Date).getTime()
        },
        vo = [],
        Do = {},
        xo = 0,
        bo = /^(?:a|input|textarea|button|select)$/i,
        wo = 0,
        To = {},
        Co = {},
        _o = function(e, t) {
            var n, i = {};
            for (n in e) i[n] = t ? e[n] * t : e[n];
            return i
        },
        ko = function(e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e
        },
        So = function e(t, n) {
            for (var i, r = t.length; r--;) n ? t[r].style.touchAction = n : t[r].style.removeProperty("touch-action"), (i = t[r].children) && i.length && e(i, n)
        },
        Eo = function(e) {
            vo.push(e), 1 === vo.length && Rr.ticker.add(Nr)
        },
        Ao = function(e) {
            for (var t = vo.length; t--;) vo[t] === e && vo.splice(t, 1);
            Rr.to($r, {
                overwrite: !0,
                delay: 15,
                duration: 0,
                onComplete: $r,
                data: "_draggable"
            })
        },
        Fo = function(e, t, n, i) {
            var r;
            e.addEventListener && (r = Qr[t], e.addEventListener(r || t, n, i = i || (Gr ? {
                passive: !1
            } : null)), r && t !== r && e.addEventListener(t, n, i))
        },
        Oo = function(e, t, n) {
            var i;
            e.removeEventListener && (i = Qr[t], e.removeEventListener(i || t, n), i && t !== i && e.removeEventListener(t, n))
        },
        Lo = function(e) {
            e.preventDefault && e.preventDefault(), e.preventManipulation && e.preventManipulation()
        },
        Mo = function(e, t) {
            for (var n = e.length; n--;)
                if (e[n].identifier === t) return !0
        },
        Po = function(e) {
            Jr = e.touches && Zr < e.touches.length, Fo(e.target, "touchend", Br)
        },
        No = function(e) {
            return qr.pageYOffset || e.scrollTop || e.documentElement.scrollTop || e.body.scrollTop || 0
        },
        $o = function(e) {
            return qr.pageXOffset || e.scrollLeft || e.documentElement.scrollLeft || e.body.scrollLeft || 0
        },
        Bo = function e(t, n) {
            Fo(t, "scroll", n), Ro(t.parentNode) || e(t.parentNode, n)
        },
        Io = function e(t, n) {
            Oo(t, "scroll", n), Ro(t.parentNode) || e(t.parentNode, n)
        },
        Ro = function(e) {
            return !(e && e !== jr && 9 !== e.nodeType && e !== Hr.body && e !== qr && e.nodeType && e.parentNode)
        },
        qo = function e(t, n) {
            var i = Ir(t, "x"),
                r = Ir(t, "y");
            Ro(t) ? t = Co : e(t.parentNode, n), t._gsMaxScrollX = i, t._gsMaxScrollY = r, n || (t._gsScrollX = t.scrollLeft || 0, t._gsScrollY = t.scrollTop || 0)
        },
        Ho = function(e, t, n) {
            var i = e.style;
            i && (lo(i[t]) && (t = Ur(t, e) || t), null == n ? i.removeProperty && i.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase()) : i[t] = n)
        },
        jo = function(e) {
            return qr.getComputedStyle(!(e instanceof Element) && (e.host || (e.parentNode || {}).host) || e)
        },
        zo = {},
        Wo = function(e) {
            if (e === qr) return zo.left = zo.top = 0, zo.width = zo.right = jr.clientWidth || e.innerWidth || zr.clientWidth || 0, zo.height = zo.bottom = (e.innerHeight || 0) - 20 < jr.clientHeight ? jr.clientHeight : e.innerHeight || zr.clientHeight || 0, zo;
            var t = e.ownerDocument || Hr,
                t = lo(e.pageX) ? e.nodeType || lo(e.left) || lo(e.top) ? Vr(e)[0].getBoundingClientRect() : e : {
                    left: e.pageX - $o(t),
                    top: e.pageY - No(t),
                    right: e.pageX - $o(t) + 1,
                    bottom: e.pageY - No(t) + 1
                };
            return lo(t.right) && !lo(t.width) ? (t.right = t.left + t.width, t.bottom = t.top + t.height) : lo(t.width) && (t = {
                width: t.right - t.left,
                height: t.bottom - t.top,
                right: t.right,
                left: t.left,
                bottom: t.bottom,
                top: t.top
            }), t
        },
        Xo = function(e, t, n) {
            var i, r = e.vars,
                o = r[n],
                s = e._listeners[t];
            return so(o) && (i = o.apply(r.callbackScope || e, r[n + "Params"] || [e.pointerEvent])), i = s && !1 === e.dispatchEvent(t) ? !1 : i
        },
        Yo = function(e, t) {
            var n, i = Vr(e)[0];
            return i.nodeType || i === qr ? Vo(i, t) : lo(e.left) ? {
                left: t = e.min || e.minX || e.minRotation || 0,
                top: n = e.min || e.minY || 0,
                width: (e.max || e.maxX || e.maxRotation || 0) - t,
                height: (e.max || e.maxY || 0) - n
            } : {
                left: e.left - (n = {
                    x: 0,
                    y: 0
                }).x,
                top: e.top - n.y,
                width: e.width,
                height: e.height
            }
        },
        Uo = {},
        Vo = function(e, t) {
            t = Vr(t)[0];
            var n, i, r, o, s, a, l, u = e.getBBox && e.ownerSVGElement,
                c = e.ownerDocument || Hr;
            if (e === qr) i = No(c), r = (n = $o(c)) + (c.documentElement.clientWidth || e.innerWidth || c.body.clientWidth || 0), o = i + ((e.innerHeight || 0) - 20 < c.documentElement.clientHeight ? c.documentElement.clientHeight : e.innerHeight || c.body.clientHeight || 0);
            else {
                if (t === qr || lo(t)) return e.getBoundingClientRect();
                n = i = 0, u ? (a = (s = e.getBBox()).width, l = s.height) : (e.viewBox && (s = e.viewBox.baseVal) && (n = s.x || 0, i = s.y || 0, a = s.width, l = s.height), a || (s = "border-box" === (u = jo(e)).boxSizing, a = (parseFloat(u.width) || e.clientWidth || 0) + (s ? 0 : parseFloat(u.borderLeftWidth) + parseFloat(u.borderRightWidth)), l = (parseFloat(u.height) || e.clientHeight || 0) + (s ? 0 : parseFloat(u.borderTopWidth) + parseFloat(u.borderBottomWidth)))), r = a, o = l
            }
            return e === t ? {
                left: n,
                top: i,
                width: r - n,
                height: o - i
            } : (l = (a = Fr(t, !0).multiply(Fr(e))).apply({
                x: n,
                y: i
            }), e = a.apply({
                x: r,
                y: i
            }), r = a.apply({
                x: r,
                y: o
            }), o = a.apply({
                x: n,
                y: o
            }), n = Math.min(l.x, e.x, r.x, o.x), i = Math.min(l.y, e.y, r.y, o.y), {
                left: n + ((t = t.parentNode || {}).scrollLeft || 0),
                top: i + (t.scrollTop || 0),
                width: Math.max(l.x, e.x, r.x, o.x) - n,
                height: Math.max(l.y, e.y, r.y, o.y) - i
            })
        },
        Go = function(r, o, e, t, s, n) {
            var i, a, l, u = {};
            if (o)
                if (1 !== s && o instanceof Array) {
                    if (u.end = i = [], l = o.length, ao(o[0]))
                        for (a = 0; a < l; a++) i[a] = _o(o[a], s);
                    else
                        for (a = 0; a < l; a++) i[a] = o[a] * s;
                    e += 1.1, t -= 1.1
                } else so(o) ? u.end = function(e) {
                    var t, n, i = o.call(r, e);
                    if (1 !== s)
                        if (ao(i)) {
                            for (n in t = {}, i) t[n] = i[n] * s;
                            i = t
                        } else i *= s;
                    return i
                } : u.end = o;
            return !e && 0 !== e || (u.max = e), !t && 0 !== t || (u.min = t), n && (u.velocity = 0), u
        },
        Ko = function e(t) {
            var n;
            return !(!t || !t.getAttribute || t === zr) && (!("true" !== (n = t.getAttribute("data-clickable")) && ("false" === n || !t.onclick && !bo.test(t.nodeName + "") && "true" !== t.getAttribute("contentEditable"))) || e(t.parentNode))
        },
        Qo = function(e, t) {
            for (var n, i = e.length; i--;)(n = e[i]).ondragstart = n.onselectstart = t ? null : Mr, Rr.set(n, {
                lazy: !0,
                userSelect: t ? "text" : "none"
            })
        },
        Zo = function e(t) {
            return "fixed" === jo(t).position || ((t = t.parentNode) && 1 === t.nodeType ? e(t) : void 0)
        },
        Jo = function(o, r) {
            o = Rr.utils.toArray(o)[0], r = r || {};
            var s, a, l, e, u, c, d = document.createElement("div"),
                p = d.style,
                t = o.firstChild,
                f = 0,
                h = 0,
                g = o.scrollTop,
                m = o.scrollLeft,
                y = o.scrollWidth,
                v = o.scrollHeight,
                D = 0,
                x = 0,
                b = 0;
            ro && !1 !== r.force3D ? (u = "translate3d(", c = "px,0px)") : uo && (u = "translate(", c = "px)"), this.scrollTop = function(e, t) {
                if (!arguments.length) return -this.top();
                this.top(-e, t)
            }, this.scrollLeft = function(e, t) {
                if (!arguments.length) return -this.left();
                this.left(-e, t)
            }, this.left = function(e, t) {
                if (!arguments.length) return -(o.scrollLeft + h);
                var n = o.scrollLeft - m,
                    i = h;
                if ((2 < n || n < -2) && !t) return m = o.scrollLeft, Rr.killTweensOf(this, {
                    left: 1,
                    scrollLeft: 1
                }), this.left(-m), void(r.onKill && r.onKill());
                (e = -e) < 0 ? (h = e - .5 | 0, e = 0) : x < e ? (h = e - x | 0, e = x) : h = 0, (h || i) && (this._skip || (p[uo] = u + -h + "px," + -f + c), 0 <= h + D && (p.paddingRight = h + D + "px")), o.scrollLeft = 0 | e, m = o.scrollLeft
            }, this.top = function(e, t) {
                if (!arguments.length) return -(o.scrollTop + f);
                var n = o.scrollTop - g,
                    i = f;
                if ((2 < n || n < -2) && !t) return g = o.scrollTop, Rr.killTweensOf(this, {
                    top: 1,
                    scrollTop: 1
                }), this.top(-g), void(r.onKill && r.onKill());
                (e = -e) < 0 ? (f = e - .5 | 0, e = 0) : b < e ? (f = e - b | 0, e = b) : f = 0, (f || i) && (this._skip || (p[uo] = u + -h + "px," + -f + c)), o.scrollTop = 0 | e, g = o.scrollTop
            }, this.maxScrollTop = function() {
                return b
            }, this.maxScrollLeft = function() {
                return x
            }, this.disable = function() {
                for (t = d.firstChild; t;) e = t.nextSibling, o.appendChild(t), t = e;
                o === d.parentNode && o.removeChild(d)
            }, this.enable = function() {
                if ((t = o.firstChild) !== d) {
                    for (; t;) e = t.nextSibling, d.appendChild(t), t = e;
                    o.appendChild(d), this.calibrate()
                }
            }, this.calibrate = function(e) {
                var t, n, i, r = o.clientWidth === s;
                g = o.scrollTop, m = o.scrollLeft, r && o.clientHeight === a && d.offsetHeight === l && y === o.scrollWidth && v === o.scrollHeight && !e || ((f || h) && (n = this.left(), i = this.top(), this.left(-o.scrollLeft), this.top(-o.scrollTop)), t = jo(o), r && !e || (p.display = "block", p.width = "auto", p.paddingRight = "0px", (D = Math.max(0, o.scrollWidth - o.clientWidth)) && (D += parseFloat(t.paddingLeft) + (oo ? parseFloat(t.paddingRight) : 0))), p.display = "inline-block", p.position = "relative", p.overflow = "visible", p.verticalAlign = "top", p.boxSizing = "content-box", p.width = "100%", p.paddingRight = D + "px", oo && (p.paddingBottom = t.paddingBottom), s = o.clientWidth, a = o.clientHeight, y = o.scrollWidth, v = o.scrollHeight, x = o.scrollWidth - s, b = o.scrollHeight - a, l = d.offsetHeight, p.display = "block", (n || i) && (this.left(n), this.top(i)))
            }, this.content = d, this.element = o, this._skip = !1, this.enable()
        },
        es = function(e) {
            var t, n, i, r;
            Or() && document.body && (r = window && window.navigator, qr = window, Hr = document, jr = Hr.documentElement, zr = Hr.body, Wr = Pr("div"), io = !!window.PointerEvent, (Xr = Pr("div")).style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab", no = "grab" === Xr.style.cursor ? "grab" : "move", eo = r && -1 !== r.userAgent.toLowerCase().indexOf("android"), Kr = "ontouchstart" in jr && "orientation" in qr || r && (0 < r.MaxTouchPoints || 0 < r.msMaxTouchPoints), t = Pr("div"), n = Pr("div"), i = n.style, r = zr, i.display = "inline-block", i.position = "relative", t.style.cssText = n.innerHTML = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden", t.appendChild(n), r.appendChild(t), n = n.offsetHeight + 18 > t.scrollHeight, r.removeChild(t), oo = n, Qr = function(e) {
                for (var t = e.split(","), n = (("onpointerdown" in Wr ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in Wr ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : e).split(",")), i = {}, r = 4; - 1 < --r;) i[t[r]] = n[r], i[n[r]] = t[r];
                try {
                    jr.addEventListener("test", null, Object.defineProperty({}, "passive", {
                        get: function() {
                            Gr = 1
                        }
                    }))
                } catch (e) {}
                return i
            }("touchstart,touchmove,touchend,touchcancel"), Fo(Hr, "touchcancel", Mr), Fo(qr, "touchmove", Mr), zr && zr.addEventListener("touchstart", Mr), Fo(Hr, "contextmenu", function() {
                for (var e in Do) Do[e].isPressed && Do[e].endDrag()
            }), Rr = Yr = Lr()), Rr ? (to = Rr.plugins.inertia, Ur = Rr.utils.checkPrefix, uo = Ur(uo), co = Ur(co), Vr = Rr.utils.toArray, ro = !!Ur("perspective")) : e && console.warn("Please gsap.registerPlugin(Draggable)")
        },
        ts = function(we) {
            var e, t;

            function Te(f, p) {
                var e = we.call(this) || this;
                Rr || es(1), f = Vr(f)[0], to = to || Rr.plugins.inertia, e.vars = p = _o(p || {}), e.target = f, e.x = e.y = e.rotation = 0, e.dragResistance = parseFloat(p.dragResistance) || 0, e.edgeResistance = isNaN(p.edgeResistance) ? 1 : parseFloat(p.edgeResistance) || 0, e.lockAxis = p.lockAxis, e.autoScroll = p.autoScroll || 0, e.lockedAxis = null, e.allowEventDefault = !!p.allowEventDefault, Rr.getProperty(f, "x");

                function r(e, t) {
                    return parseFloat(he.get(f, e, t))
                }

                function o(e) {
                    return Lo(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
                }

                function h(e) {
                    if (ie.autoScroll && ie.isDragging && (ae || $)) {
                        var t, n, i, r, o, s, a, l, u = f,
                            c = 15 * ie.autoScroll;
                        for (ae = !1, Co.scrollTop = null != qr.pageYOffset ? qr.pageYOffset : (null != me.documentElement.scrollTop ? me.documentElement : me.body).scrollTop, Co.scrollLeft = null != qr.pageXOffset ? qr.pageXOffset : (null != me.documentElement.scrollLeft ? me.documentElement : me.body).scrollLeft, r = ie.pointerX - Co.scrollLeft, o = ie.pointerY - Co.scrollTop; u && !n;) t = (n = Ro(u.parentNode)) ? Co : u.parentNode, i = n ? {
                            bottom: Math.max(jr.clientHeight, qr.innerHeight || 0),
                            right: Math.max(jr.clientWidth, qr.innerWidth || 0),
                            left: 0,
                            top: 0
                        } : t.getBoundingClientRect(), s = a = 0, te && ((l = t._gsMaxScrollY - t.scrollTop) < 0 ? a = l : o > i.bottom - ce && l ? (ae = !0, a = Math.min(l, c * (1 - Math.max(0, i.bottom - o) / ce) | 0)) : o < i.top + le && t.scrollTop && (ae = !0, a = -Math.min(t.scrollTop, c * (1 - Math.max(0, o - i.top) / le) | 0)), a && (t.scrollTop += a)), ee && ((l = t._gsMaxScrollX - t.scrollLeft) < 0 ? s = l : r > i.right - ue && l ? (ae = !0, s = Math.min(l, c * (1 - Math.max(0, i.right - r) / ue) | 0)) : r < i.left + de && t.scrollLeft && (ae = !0, s = -Math.min(t.scrollLeft, c * (1 - Math.max(0, r - i.left) / de) | 0)), s && (t.scrollLeft += s)), n && (s || a) && (qr.scrollTo(t.scrollLeft, t.scrollTop), De(ie.pointerX + s, ie.pointerY + a)), u = t
                    }
                    var d, p;
                    $ && (d = ie.x, p = ie.y, Q ? (ie.deltaX = d - parseFloat(he.rotation), ie.rotation = d, he.rotation = d + "deg", he.renderTransform(1, he)) : b ? (te && (ie.deltaY = p - b.top(), b.top(p)), ee && (ie.deltaX = d - b.left(), b.left(d))) : K ? (te && (ie.deltaY = p - parseFloat(he.y), he.y = p + "px"), ee && (ie.deltaX = d - parseFloat(he.x), he.x = d + "px"), he.renderTransform(1, he)) : (te && (ie.deltaY = p - parseFloat(f.style.top || 0), f.style.top = p + "px"), ee && (ie.deltaY = d - parseFloat(f.style.left || 0), f.style.left = d + "px")), !S || e || Y || (!(Y = !0) === Xo(ie, "drag", "onDrag") && (ee && (ie.x -= ie.deltaX), te && (ie.y -= ie.deltaY), h(!0)), Y = !1)), $ = !1
                }

                function s(e, t) {
                    var n, i, r = ie.x,
                        o = ie.y;
                    (he = !f._gsap ? Rr.core.getCache(f) : he).uncache && Rr.getProperty(f, "x"), K ? (ie.x = parseFloat(he.x), ie.y = parseFloat(he.y)) : Q ? ie.x = ie.rotation = parseFloat(he.rotation) : b ? (ie.y = b.top(), ie.x = b.left()) : (ie.y = parseInt(f.style.top || (i = jo(f)) && i.top, 10) || 0, ie.x = parseInt(f.style.left || (i || {}).left, 10) || 0), (B || I || R) && !t && (ie.isDragging || ie.isThrowing) && (R && (To.x = ie.x, To.y = ie.y, (n = R(To)).x !== ie.x && (ie.x = n.x, $ = !0), n.y !== ie.y && (ie.y = n.y, $ = !0)), B && (n = B(ie.x)) !== ie.x && (ie.x = n, Q && (ie.rotation = n), $ = !0), I && ((n = I(ie.y)) !== ie.y && (ie.y = n), $ = !0)), $ && h(!0), e || (ie.deltaX = ie.x - r, ie.deltaY = ie.y - o, Xo(ie, "throwupdate", "onThrowUpdate"))
                }

                function n(s, a, l, n) {
                    return null == a && (a = -go), null == l && (l = go), so(s) ? function(e) {
                        var t = ie.isPressed ? 1 - ie.edgeResistance : 1;
                        return s.call(ie, l < e ? l + (e - l) * t : e < a ? a + (e - a) * t : e) * n
                    } : fo(s) ? function(e) {
                        for (var t, n, i = s.length, r = 0, o = go; - 1 < --i;)(n = (n = (t = s[i]) - e) < 0 ? -n : n) < o && a <= t && t <= l && (r = i, o = n);
                        return s[r]
                    } : isNaN(s) ? function(e) {
                        return e
                    } : function() {
                        return s * n
                    }
                }

                function a() {
                    var e, t, s, o, a, l, u, c, d;
                    k = !1, b ? (b.calibrate(), ie.minX = F = -b.maxScrollLeft(), ie.minY = L = -b.maxScrollTop(), ie.maxX = A = ie.maxY = O = 0, k = !0) : p.bounds && (t = Yo(p.bounds, f.parentNode), Q ? (ie.minX = F = t.left, ie.maxX = A = t.left + t.width, ie.minY = L = ie.maxY = O = 0) : lo(p.bounds.maxX) && lo(p.bounds.maxY) ? (e = Yo(f, f.parentNode), ie.minX = F = Math.round(r(Z, "px") + t.left - e.left - .5), ie.minY = L = Math.round(r(J, "px") + t.top - e.top - .5), ie.maxX = A = Math.round(F + (t.width - e.width)), ie.maxY = O = Math.round(L + (t.height - e.height))) : (t = p.bounds, ie.minX = F = t.minX, ie.minY = L = t.minY, ie.maxX = A = t.maxX, ie.maxY = O = t.maxY), A < F && (ie.minX = A, ie.maxX = A = F, F = ie.minX), O < L && (ie.minY = O, ie.maxY = O = L, L = ie.minY), Q && (ie.minRotation = F, ie.maxRotation = A), k = !0), p.liveSnap && (e = !0 === p.liveSnap ? p.snap || {} : p.liveSnap, t = fo(e) || so(e), Q ? (B = n(t ? e : e.rotation, F, A, 1), I = null) : e.points ? (s = t ? e : e.points, o = F, a = A, l = L, u = O, c = e.radius, d = b ? -1 : 1, c = c && c < go ? c * c : go, R = so(s) ? function(e) {
                        var t, n = ie.isPressed ? 1 - ie.edgeResistance : 1,
                            i = e.x,
                            r = e.y;
                        return e.x = i = a < i ? a + (i - a) * n : i < o ? o + (i - o) * n : i, e.y = r = u < r ? u + (r - u) * n : r < l ? l + (r - l) * n : r, (t = s.call(ie, e)) !== e && (e.x = t.x, e.y = t.y), 1 !== d && (e.x *= d, e.y *= d), c < go && (n = e.x - i, t = e.y - r, c < n * n + t * t && (e.x = i, e.y = r)), e
                    } : fo(s) ? function(e) {
                        for (var t, n, i = s.length, r = 0, o = go; - 1 < --i;)(n = (t = (n = s[i]).x - e.x) * t + (n = n.y - e.y) * n) < o && (r = i, o = n);
                        return o <= c ? s[r] : e
                    } : function(e) {
                        return e
                    }) : (ee && (B = n(t ? e : e.x || e.left || e.scrollLeft, F, A, b ? -1 : 1)), te && (I = n(t ? e : e.y || e.top || e.scrollTop, L, O, b ? -1 : 1))))
                }

                function l() {
                    ie.isThrowing = !1, Xo(ie, "throwcomplete", "onThrowComplete")
                }

                function u() {
                    ie.isThrowing = !1
                }

                function c(e, t) {
                    var n, i;
                    e && to ? (!0 === e && (i = p.snap || p.liveSnap || {}, n = fo(i) || so(i), e = {
                        resistance: (p.throwResistance || p.resistance || 1e3) / (Q ? 10 : 1)
                    }, Q ? e.rotation = Go(ie, n ? i : i.rotation, A, F, 1, t) : (ee && (e[Z] = Go(ie, n ? i : i.points || i.x || i.left, A, F, b ? -1 : 1, t || "x" === ie.lockedAxis)), te && (e[J] = Go(ie, n ? i : i.points || i.y || i.top, O, L, b ? -1 : 1, t || "y" === ie.lockedAxis)), (i.points || fo(i) && ao(i[0])) && (e.linkedProps = Z + "," + J, e.radius = i.radius))), ie.isThrowing = !0, t = isNaN(p.overshootTolerance) ? 1 === p.edgeResistance ? 0 : 1 - ie.edgeResistance + .2 : p.overshootTolerance, e.duration || (e.duration = {
                        max: Math.max(p.minDuration || 0, "maxDuration" in p ? p.maxDuration : 2),
                        min: isNaN(p.minDuration) ? 0 === t || ao(e) && 1e3 < e.resistance ? 0 : .5 : p.minDuration,
                        overshoot: t
                    }), ie.tween = i = Rr.to(b || f, {
                        inertia: e,
                        data: "_draggable",
                        onComplete: l,
                        onInterrupt: u,
                        onUpdate: p.fastMode ? Xo : s,
                        onUpdateParams: p.fastMode ? [ie, "onthrowupdate", "onThrowUpdate"] : i && i.radius ? [!1, !0] : []
                    }), p.fastMode || (b && (b._skip = !0), i.render(1e9, !0, !0), s(!0, !0), ie.endX = ie.x, ie.endY = ie.y, Q && (ie.endRotation = ie.x), i.play(0), s(!0, !0), b && (b._skip = !1))) : k && ie.applyBounds()
                }

                function d(e) {
                    var t = j;
                    j = Fr(f.parentNode, !0), e && ie.isPressed && !j.equals(t || new Ar) && (t = t.inverse().apply({
                        x: w,
                        y: T
                    }), j.apply(t, t), w = t.x, T = t.y), j.equals(mo) && (j = null)
                }

                function g() {
                    var e, t = 1 - ie.edgeResistance,
                        n = ge ? $o(me) : 0,
                        i = ge ? No(me) : 0;
                    d(!1), Uo.x = ie.pointerX - n, Uo.y = ie.pointerY - i, j && j.apply(Uo, Uo), w = Uo.x, T = Uo.y, $ && (De(ie.pointerX, ie.pointerY), h(!0)), b ? (a(), _ = b.top(), C = b.left()) : (ye() ? (s(!0, !0), a()) : ie.applyBounds(), Q ? (e = f.ownerSVGElement ? [he.xOrigin - f.getBBox().x, he.yOrigin - f.getBBox().y] : (jo(f)[co] || "0 0").split(" "), N = ie.rotationOrigin = Fr(f).apply({
                        x: parseFloat(e[0]) || 0,
                        y: parseFloat(e[1]) || 0
                    }), s(!0, !0), n = ie.pointerX - N.x - n, i = N.y - ie.pointerY + i, C = ie.x, _ = ie.y = Math.atan2(i, n) * ho) : (_ = r(J, "px"), C = r(Z, "px"))), k && t && (A < C ? C = A + (C - A) / t : C < F && (C = F - (F - C) / t), Q || (O < _ ? _ = O + (_ - O) / t : _ < L && (_ = L - (L - _) / t))), ie.startX = C, ie.startY = _
                }

                function m() {
                    !Xr.parentNode || ye() || ie.isDragging || Xr.parentNode.removeChild(Xr)
                }

                function y(e, t) {
                    var n;
                    if (!x || ie.isPressed || !e || !("mousedown" !== e.type && "pointerdown" !== e.type || t) && yo() - fe < 30 && Qr[ie.pointerEvent.type]) G && e && x && Lo(e);
                    else {
                        if (z = ye(), ie.pointerEvent = e, Qr[e.type] ? (H = ~e.type.indexOf("touch") ? e.currentTarget || e.target : me, Fo(H, "touchend", xe), Fo(H, "touchmove", ve), Fo(H, "touchcancel", xe), Fo(me, "touchstart", Po)) : (H = null, Fo(me, "mousemove", ve)), X = null, io && H || (Fo(me, "mouseup", xe), e && e.target && Fo(e.target, "mouseup", xe)), q = pe.call(ie, e.target) && !1 === p.dragClickables && !t) return Fo(e.target, "change", xe), Xo(ie, "pressInit", "onPressInit"), Xo(ie, "press", "onPress"), Qo(re, !0), void(G = !1);
                        if (W = !(!H || ee == te || !1 === ie.vars.allowNativeTouchScrolling || ie.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which)) && (ee ? "y" : "x"), (G = !W && !ie.allowEventDefault) && (Lo(e), Fo(qr, "touchforcechange", Lo)), e.changedTouches ? (e = M = e.changedTouches[0], P = e.identifier) : e.pointerId ? P = e.pointerId : M = P = null, Zr++, Eo(h), T = ie.pointerY = e.pageY, w = ie.pointerX = e.pageX, Xo(ie, "pressInit", "onPressInit"), (W || ie.autoScroll) && qo(f.parentNode), !f.parentNode || !ie.autoScroll || b || Q || !f.parentNode._gsMaxScrollX || Xr.parentNode || f.getBBox || (Xr.style.width = f.parentNode.scrollWidth + "px", f.parentNode.appendChild(Xr)), g(), ie.tween && ie.tween.kill(), ie.isThrowing = !1, Rr.killTweensOf(b || f, oe, !0), b && Rr.killTweensOf(f, {
                                scrollTo: 1
                            }, !0), ie.tween = ie.lockedAxis = null, !p.zIndexBoost && (Q || b || !1 === p.zIndexBoost) || (f.style.zIndex = Te.zIndex++), ie.isPressed = !0, S = !(!p.onDrag && !ie._listeners.drag), E = !(!p.onMove && !ie._listeners.move), !Q && (!1 !== p.cursor || p.activeCursor))
                            for (n = re.length; - 1 < --n;) Rr.set(re[n], {
                                cursor: p.activeCursor || p.cursor || ("grab" === no ? "grabbing" : no)
                            });
                        Xo(ie, "press", "onPress")
                    }
                }

                function v(e) {
                    var t, n;
                    e && ie.isDragging && !b && (n = (t = e.target || f.parentNode).scrollLeft - t._gsScrollX, e = t.scrollTop - t._gsScrollY, (n || e) && (j ? (w -= n * j.a + e * j.c, T -= e * j.d + n * j.b) : (w -= n, T -= e), t._gsScrollX += n, t._gsScrollY += e, De(ie.pointerX, ie.pointerY)))
                }

                function D(e) {
                    var t = (s = yo()) - fe < 40,
                        n = s - se < 40,
                        i = t && U === fe,
                        r = ie.pointerEvent && ie.pointerEvent.defaultPrevented,
                        o = t && V === fe,
                        s = e.isTrusted || null == e.isTrusted && t && i;
                    if ((i || n && !1 !== ie.vars.suppressClickOnDrag) && e.stopImmediatePropagation && e.stopImmediatePropagation(), t && (!ie.pointerEvent || !ie.pointerEvent.defaultPrevented) && (!i || s && !o)) return s && i && (V = fe), void(U = fe);
                    (ie.isPressed || n || t) && (s && e.detail && t && !r || Lo(e)), t || n || (e && e.target && (ie.pointerEvent = e), Xo(ie, "click", "onClick"))
                }

                function i(e) {
                    return j ? {
                        x: e.x * j.a + e.y * j.c + j.e,
                        y: e.x * j.b + e.y * j.d + j.f
                    } : {
                        x: e.x,
                        y: e.y
                    }
                }
                var x, b, w, T, C, _, k, S, E, A, F, O, L, M, P, N, $, B, I, R, q, H, j, z, W, X, Y, U, V, G, t = (p.type || "x,y").toLowerCase(),
                    K = ~t.indexOf("x") || ~t.indexOf("y"),
                    Q = -1 !== t.indexOf("rotation"),
                    Z = Q ? "rotation" : K ? "x" : "left",
                    J = K ? "y" : "top",
                    ee = !(!~t.indexOf("x") && !~t.indexOf("left") && "scroll" !== t),
                    te = !(!~t.indexOf("y") && !~t.indexOf("top") && "scroll" !== t),
                    ne = p.minimumMovement || 2,
                    ie = function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e),
                    re = Vr(p.trigger || p.handle || f),
                    oe = {},
                    se = 0,
                    ae = !1,
                    le = p.autoScrollMarginTop || 40,
                    ue = p.autoScrollMarginRight || 40,
                    ce = p.autoScrollMarginBottom || 40,
                    de = p.autoScrollMarginLeft || 40,
                    pe = p.clickableTest || Ko,
                    fe = 0,
                    he = f._gsap || Rr.core.getCache(f),
                    ge = Zo(f),
                    me = f.ownerDocument || Hr,
                    ye = function() {
                        return ie.tween && ie.tween.isActive()
                    },
                    ve = function(e) {
                        var t, n, i, r, o = e;
                        if (x && !Jr && ie.isPressed && e) {
                            if (t = (ie.pointerEvent = e).changedTouches) {
                                if ((e = t[0]) !== M && e.identifier !== P) {
                                    for (n = t.length; - 1 < --n && (e = t[n]).identifier !== P && e.target !== f;);
                                    if (n < 0) return
                                }
                            } else if (e.pointerId && P && e.pointerId !== P) return;
                            H && W && !X && (Uo.x = e.pageX, Uo.y = e.pageY, j && j.apply(Uo, Uo), i = Uo.x, r = Uo.y, ((i = Math.abs(i - w)) !== (r = Math.abs(r - T)) && (ne < i || ne < r) || eo && W === X) && (X = r < i && ee ? "x" : "y", W && X !== W && Fo(qr, "touchforcechange", Lo), !1 !== ie.vars.lockAxisOnTouchScroll && ee && te && (ie.lockedAxis = "x" === X ? "y" : "x", so(ie.vars.onLockAxis) && ie.vars.onLockAxis.call(ie, o)), eo && W === X)) ? xe(o) : (G = ie.allowEventDefault || W && (!X || W === X) || !1 === o.cancelable ? G && !1 : (Lo(o), !0), ie.autoScroll && (ae = !0), De(e.pageX, e.pageY, E))
                        } else G && e && x && Lo(e)
                    },
                    De = function(e, t, n) {
                        var i, r, o, s = 1 - ie.dragResistance,
                            a = 1 - ie.edgeResistance,
                            l = ie.pointerX,
                            u = ie.pointerY,
                            c = _,
                            d = ie.x,
                            p = ie.y,
                            f = ie.endX,
                            h = ie.endY,
                            g = ie.endRotation,
                            m = $;
                        ie.pointerX = e, ie.pointerY = t, ge && (e -= $o(me), t -= No(me)), Q ? (i = Math.atan2(N.y - t, e - N.x) * ho, 180 < (r = ie.y - i) ? (_ -= 360, ie.y = i) : r < -180 && (_ += 360, ie.y = i), r = ie.x !== C || Math.abs(_ - i) > ne ? (ie.y = i, C + (_ - i) * s) : C) : (j && (o = e * j.a + t * j.c + j.e, t = e * j.b + t * j.d + j.f, e = o), (t = t - T) < ne && -ne < t && (t = 0), (e = e - w) < ne && -ne < e && (e = 0), (ie.lockAxis || ie.lockedAxis) && (e || t) && ((o = ie.lockedAxis) || (ie.lockedAxis = o = ee && Math.abs(e) > Math.abs(t) ? "y" : te ? "x" : null, o && so(ie.vars.onLockAxis) && ie.vars.onLockAxis.call(ie, ie.pointerEvent)), "y" === o ? t = 0 : "x" === o && (e = 0)), r = po(C + e * s), i = po(_ + t * s)), (B || I || R) && (ie.x !== r || ie.y !== i && !Q) ? (R && (To.x = r, To.y = i, o = R(To), r = po(o.x), i = po(o.y)), B && (r = po(B(r))), I && (i = po(I(i)))) : k && (A < r ? r = A + Math.round((r - A) * a) : r < F && (r = F + Math.round((r - F) * a)), Q || (O < i ? i = Math.round(O + (i - O) * a) : i < L && (i = Math.round(L + (i - L) * a)))), ie.x === r && (ie.y === i || Q) || (Q ? (ie.endRotation = ie.x = ie.endX = r, $ = !0) : (te && (ie.y = ie.endY = i, $ = !0), ee && (ie.x = ie.endX = r, $ = !0)), n && !1 === Xo(ie, "move", "onMove") ? (ie.pointerX = l, ie.pointerY = u, _ = c, ie.x = d, ie.y = p, ie.endX = f, ie.endY = h, ie.endRotation = g, $ = m) : !ie.isDragging && ie.isPressed && (ie.isDragging = !0, Xo(ie, "dragstart", "onDragStart")))
                    },
                    xe = function e(t, n) {
                        if (x && ie.isPressed && (!t || null == P || n || !(t.pointerId && t.pointerId !== P && t.target !== f || t.changedTouches && !Mo(t.changedTouches, P)))) {
                            ie.isPressed = !1;
                            var i, r, o, s, a = t,
                                l = ie.isDragging,
                                u = ie.vars.allowContextMenu && t && (t.ctrlKey || 2 < t.which),
                                n = Rr.delayedCall(.001, m);
                            if (H ? (Oo(H, "touchend", e), Oo(H, "touchmove", ve), Oo(H, "touchcancel", e), Oo(me, "touchstart", Po)) : Oo(me, "mousemove", ve), Oo(qr, "touchforcechange", Lo), io && H || (Oo(me, "mouseup", e), t && t.target && Oo(t.target, "mouseup", e)), $ = !1, q && !u) return t && (Oo(t.target, "change", e), ie.pointerEvent = a), Qo(re, !1), Xo(ie, "release", "onRelease"), Xo(ie, "click", "onClick"), void(q = !1);
                            if (Ao(h), !Q)
                                for (r = re.length; - 1 < --r;) Ho(re[r], "cursor", p.cursor || (!1 !== p.cursor ? no : null));
                            if (l && (se = wo = yo(), ie.isDragging = !1), Zr--, t) {
                                if (i = t.changedTouches, i && (t = i[0]) !== M && t.identifier !== P) {
                                    for (r = i.length; - 1 < --r && (t = i[r]).identifier !== P && t.target !== f;);
                                    if (r < 0) return
                                }
                                ie.pointerEvent = a, ie.pointerX = t.pageX, ie.pointerY = t.pageY
                            }
                            return u && a ? (Lo(a), G = !0, Xo(ie, "release", "onRelease")) : a && !l ? (G = !1, z && (p.snap || p.bounds) && c(p.inertia || p.throwProps), Xo(ie, "release", "onRelease"), eo && "touchmove" === a.type || -1 !== a.type.indexOf("cancel") || (Xo(ie, "click", "onClick"), yo() - fe < 300 && Xo(ie, "doubleclick", "onDoubleClick"), s = a.target || f, fe = yo(), eo || a.defaultPrevented || Rr.delayedCall(.05, function() {
                                fe === U || !ie.enabled() || ie.isPressed || a.defaultPrevented || (s.click ? s.click() : me.createEvent && ((o = me.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, qr, 1, ie.pointerEvent.screenX, ie.pointerEvent.screenY, ie.pointerX, ie.pointerY, !1, !1, !1, !1, 0, null), s.dispatchEvent(o)))
                            }))) : (c(p.inertia || p.throwProps), ie.allowEventDefault || !a || !1 === p.dragClickables && pe.call(ie, a.target) || !l || W && (!X || W !== X) || !1 === a.cancelable ? G = !1 : (G = !0, Lo(a)), Xo(ie, "release", "onRelease")), ye() && n.duration(ie.tween.duration()), l && Xo(ie, "dragend", "onDragEnd"), !0
                        }
                        G && t && x && Lo(t)
                    },
                    be = Te.get(f);
                return be && be.kill(), e.startDrag = function(e, t) {
                    y(e || ie.pointerEvent, !0), t && !ie.hitTest(e || ie.pointerEvent) && (t = Wo(e || ie.pointerEvent), e = Wo(f), t = i({
                        x: t.left + t.width / 2,
                        y: t.top + t.height / 2
                    }), e = i({
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 2
                    }), w -= t.x - e.x, T -= t.y - e.y), ie.isDragging || (ie.isDragging = !0, Xo(ie, "dragstart", "onDragStart"))
                }, e.drag = ve, e.endDrag = function(e) {
                    return xe(e || ie.pointerEvent, !0)
                }, e.timeSinceDrag = function() {
                    return ie.isDragging ? 0 : (yo() - se) / 1e3
                }, e.timeSinceClick = function() {
                    return (yo() - fe) / 1e3
                }, e.hitTest = function(e, t) {
                    return Te.hitTest(ie.target, e, t)
                }, e.getDirection = function(e, t) {
                    var n, i, r = "velocity" === e && to ? e : ao(e) && !Q ? "element" : "start";
                    return "element" === r && (n = Wo(ie.target), i = Wo(e)), e = "start" === r ? ie.x - C : "velocity" === r ? to.getVelocity(f, Z) : n.left + n.width / 2 - (i.left + i.width / 2), Q ? e < 0 ? "counter-clockwise" : "clockwise" : (t = t || 2, n = "start" === r ? ie.y - _ : "velocity" === r ? to.getVelocity(f, J) : n.top + n.height / 2 - (i.top + i.height / 2), e = (i = Math.abs(e / n)) < 1 / t ? "" : e < 0 ? "left" : "right", i < t && ("" !== e && (e += "-"), e += n < 0 ? "up" : "down"), e)
                }, e.applyBounds = function(e, t) {
                    var n, i, r, o;
                    if (e && p.bounds !== e) return p.bounds = e, ie.update(!0, t);
                    if (s(!0), a(), k && !ye()) {
                        if (e = ie.x, t = ie.y, A < e ? e = A : e < F && (e = F), O < t ? t = O : t < L && (t = L), (ie.x !== e || ie.y !== t) && (n = !0, ie.x = ie.endX = e, Q ? ie.endRotation = e : ie.y = ie.endY = t, h($ = !0), ie.autoScroll && !ie.isDragging))
                            for (qo(f.parentNode), i = f, Co.scrollTop = null != qr.pageYOffset ? qr.pageYOffset : (null != me.documentElement.scrollTop ? me.documentElement : me.body).scrollTop, Co.scrollLeft = null != qr.pageXOffset ? qr.pageXOffset : (null != me.documentElement.scrollLeft ? me.documentElement : me.body).scrollLeft; i && !o;) r = (o = Ro(i.parentNode)) ? Co : i.parentNode, te && r.scrollTop > r._gsMaxScrollY && (r.scrollTop = r._gsMaxScrollY), ee && r.scrollLeft > r._gsMaxScrollX && (r.scrollLeft = r._gsMaxScrollX), i = r;
                        ie.isThrowing && (n || ie.endX > A || ie.endX < F || ie.endY > O || ie.endY < L) && c(p.inertia || p.throwProps, n)
                    }
                    return ie
                }, e.update = function(e, t, n) {
                    var i = ie.x,
                        r = ie.y;
                    return d(!t), e ? ie.applyBounds() : ($ && n && h(!0), s(!0)), t && (De(ie.pointerX, ie.pointerY), $ && h(!0)), ie.isPressed && !t && (ee && .01 < Math.abs(i - ie.x) || te && .01 < Math.abs(r - ie.y) && !Q) && g(), ie.autoScroll && (qo(f.parentNode, ie.isDragging), ae = ie.isDragging, h(!0), Io(f, v), Bo(f, v)), ie
                }, e.enable = function(e) {
                    var t, n, i = {
                        lazy: !0
                    };
                    if (Q || !1 === p.cursor || (i.cursor = p.cursor || no), Rr.utils.checkPrefix("touchCallout") && (i.touchCallout = "none"), "soft" !== e) {
                        for (So(re, ee == te ? "none" : p.allowNativeTouchScrolling && f.scrollHeight === f.clientHeight == (f.scrollWidth === f.clientHeight) || p.allowEventDefault ? "manipulation" : ee ? "pan-y" : "pan-x"), t = re.length; - 1 < --t;) n = re[t], io || Fo(n, "mousedown", y), Fo(n, "touchstart", y), Fo(n, "click", D, !0), Rr.set(n, i), n.getBBox && n.ownerSVGElement && Rr.set(n.ownerSVGElement, {
                            touchAction: ee == te ? "none" : p.allowNativeTouchScrolling || p.allowEventDefault ? "manipulation" : ee ? "pan-y" : "pan-x"
                        }), p.allowContextMenu || Fo(n, "contextmenu", o);
                        Qo(re, !1)
                    }
                    return Bo(f, v), x = !0, to && "soft" !== e && to.track(b || f, K ? "x,y" : Q ? "rotation" : "top,left"), f._gsDragID = e = "d" + xo++, Do[e] = ie, b && (b.enable(), b.element._gsDragID = e), (p.bounds || Q) && g(), p.bounds && ie.applyBounds(), ie
                }, e.disable = function(e) {
                    var t, n, i = ie.isDragging;
                    if (!Q)
                        for (t = re.length; - 1 < --t;) Ho(re[t], "cursor", null);
                    if ("soft" !== e) {
                        for (So(re, null), t = re.length; - 1 < --t;) n = re[t], Ho(n, "touchCallout", null), Oo(n, "mousedown", y), Oo(n, "touchstart", y), Oo(n, "click", D), Oo(n, "contextmenu", o);
                        Qo(re, !0), H && (Oo(H, "touchcancel", xe), Oo(H, "touchend", xe), Oo(H, "touchmove", ve)), Oo(me, "mouseup", xe), Oo(me, "mousemove", ve)
                    }
                    return Io(f, v), x = !1, to && "soft" !== e && to.untrack(b || f, K ? "x,y" : Q ? "rotation" : "top,left"), b && b.disable(), Ao(h), ie.isDragging = ie.isPressed = q = !1, i && Xo(ie, "dragend", "onDragEnd"), ie
                }, e.enabled = function(e, t) {
                    return arguments.length ? e ? ie.enable(t) : ie.disable(t) : x
                }, e.kill = function() {
                    return ie.isThrowing = !1, ie.tween && ie.tween.kill(), ie.disable(), Rr.set(re, {
                        clearProps: "userSelect"
                    }), delete Do[f._gsDragID], ie
                }, ~t.indexOf("scroll") && (b = e.scrollProxy = new Jo(f, ko({
                    onKill: function() {
                        ie.isPressed && xe(null)
                    }
                }, p)), f.style.overflowY = te && !Kr ? "auto" : "hidden", f.style.overflowX = ee && !Kr ? "auto" : "hidden", f = b.content), Q ? oe.rotation = 1 : (ee && (oe[Z] = 1), te && (oe[J] = 1)), he.force3D = !("force3D" in p) || p.force3D, e.enable(), e
            }
            return t = we, (e = Te).prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t, Te.register = function(e) {
                Rr = e, es()
            }, Te.create = function(e, t) {
                return Yr || es(!0), Vr(e).map(function(e) {
                    return new Te(e, t)
                })
            }, Te.get = function(e) {
                return Do[(Vr(e)[0] || {})._gsDragID]
            }, Te.timeSinceDrag = function() {
                return (yo() - wo) / 1e3
            }, Te.hitTest = function(e, t, n) {
                if (e === t) return !1;
                var i = Wo(e),
                    r = Wo(t),
                    o = i.top,
                    s = i.left,
                    a = i.right,
                    l = i.bottom,
                    e = i.width,
                    t = i.height,
                    i = r.left > a || r.right < s || r.top > l || r.bottom < o;
                return i || !n ? !i : (i = -1 !== (n + "").indexOf("%"), n = parseFloat(n) || 0, (o = {
                    left: Math.max(s, r.left),
                    top: Math.max(o, r.top)
                }).width = Math.min(a, r.right) - o.left, o.height = Math.min(l, r.bottom) - o.top, !(o.width < 0 || o.height < 0) && (i ? e * t * (n *= .01) <= (t = o.width * o.height) || t >= r.width * r.height * n : o.width > n && o.height > n))
            }, Te
        }(function() {
            function e(e) {
                this._listeners = {}, this.target = e || this
            }
            var t = e.prototype;
            return t.addEventListener = function(e, t) {
                e = this._listeners[e] || (this._listeners[e] = []);
                ~e.indexOf(t) || e.push(t)
            }, t.removeEventListener = function(e, t) {
                e = this._listeners[e], t = e && e.indexOf(t) || -1; - 1 < t && e.splice(t, 1)
            }, t.dispatchEvent = function(t) {
                var n, i = this;
                return (this._listeners[t] || []).forEach(function(e) {
                    return !1 === e.call(i, {
                        type: t,
                        target: i.target
                    }) && (n = !1)
                }), n
            }, e
        }());
    ! function(e, t) {
        for (var n in t) n in e || (e[n] = t[n])
    }(ts.prototype, {
        pointerX: 0,
        pointerY: 0,
        startX: 0,
        startY: 0,
        deltaX: 0,
        deltaY: 0,
        isDragging: !1,
        isPressed: !1
    }), ts.zIndex = 1e3, ts.version = "3.6.0", Lr() && Rr.registerPlugin(ts);

    function ns() {
        return "undefined" != typeof window
    }

    function is() {
        return hs || ns() && (hs = window.gsap) && hs.registerPlugin && hs
    }

    function rs(e) {
        return Math.round(1e4 * e) / 1e4
    }

    function os(e) {
        return parseFloat(e) || 0
    }

    function ss(e, t) {
        var n = os(e);
        return ~e.indexOf("%") ? n / 100 * t : n
    }

    function as(e, t) {
        return os(e.getAttribute(t))
    }

    function ls(e, t, n, i, r, o) {
        return bs(Math.pow((os(n) - os(e)) * r, 2) + Math.pow((os(i) - os(t)) * o, 2))
    }

    function us(e) {
        return console.warn(e)
    }

    function cs(e) {
        return "non-scaling-stroke" === e.getAttribute("vector-effect")
    }

    function ds(e) {
        if (!(e = gs(e)[0])) return 0;
        var t, n, i, r, o = e.tagName.toLowerCase(),
            s = e.style,
            a = 1,
            l = 1;
        cs(e) && (l = e.getScreenCTM(), a = bs(l.a * l.a + l.b * l.b), l = bs(l.d * l.d + l.c * l.c));
        try {
            i = e.getBBox()
        } catch (e) {
            us("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
        }
        var u = (p = i || {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }).x,
            c = p.y,
            d = p.width,
            p = p.height;
        if (i && (d || p) || !xs[o] || (d = as(e, xs[o][0]), p = as(e, xs[o][1]), "rect" !== o && "line" !== o && (d *= 2, p *= 2), "line" === o && (u = as(e, "x1"), c = as(e, "y1"), d = Math.abs(d - u), p = Math.abs(p - c))), "path" === o) i = s.strokeDasharray, s.strokeDasharray = "none", t = e.getTotalLength() || 0, a !== l && us("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (a + l) / 2, s.strokeDasharray = i;
        else if ("rect" === o) t = 2 * d * a + 2 * p * l;
        else if ("line" === o) t = ls(u, c, u + d, c + p, a, l);
        else if ("polyline" === o || "polygon" === o)
            for (n = e.getAttribute("points").match(Ds) || [], "polygon" === o && n.push(n[0], n[1]), t = 0, r = 2; r < n.length; r += 2) t += ls(n[r - 2], n[r - 1], n[r], n[r + 1], a, l) || 0;
        else "circle" !== o && "ellipse" !== o || (d = d / 2 * a, p = p / 2 * l, t = Math.PI * (3 * (d + p) - bs((3 * d + p) * (d + 3 * p))));
        return t || 0
    }

    function ps(e, t) {
        if (!(e = gs(e)[0])) return [0, 0];
        t = t || ds(e) + 1;
        var n = (i = ms.getComputedStyle(e)).strokeDasharray || "",
            e = os(i.strokeDashoffset),
            i = n.indexOf(",");
        return [-e || 0, (n = t < (n = (i = i < 0 ? n.indexOf(" ") : i) < 0 ? t : os(n.substr(0, i))) ? t : n) - e || 0]
    }

    function fs() {
        ns() && (document, ms = window, vs = hs = is(), gs = hs.utils.toArray, ys = -1 !== ((ms.navigator || {}).userAgent || "").indexOf("Edge"))
    }
    /*!
     * DrawSVGPlugin 3.6.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var hs, gs, ms, ys, vs, Ds = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        xs = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        bs = Math.sqrt,
        wt = {
            version: "3.6.0",
            name: "drawSVG",
            register: function(e) {
                hs = e, fs()
            },
            init: function(e, t, n, i, r) {
                if (!e.getBBox) return !1;
                vs || fs();
                var o, s, a, l, u, c, d, p = ds(e);
                return this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", o = ps(e, p), a = t, l = p, u = o[0], c = (c = a.indexOf(" ")) < 0 ? (d = void 0 !== u ? u + "" : a, a) : (d = a.substr(0, c), a.substr(c + 1)), d = ss(d, l), c = (c = ss(c, l)) < d ? [c, d] : [d, c], this._length = rs(p), this._dash = rs(o[1] - o[0]), this._offset = rs(-o[0]), this._dashPT = this.add(this, "_dash", this._dash, rs(c[1] - c[0])), this._offsetPT = this.add(this, "_offset", this._offset, rs(-c[0])), ys && (s = ms.getComputedStyle(e)).strokeLinecap !== s.strokeLinejoin && (c = os(s.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", c, c + .01)), this._live = cs(e) || ~(t + "").indexOf("live"), this._props.push("drawSVG"), 1
            },
            render: function(e, t) {
                var n, i, r, o = t._pt,
                    s = t._style;
                if (o) {
                    for (t._live && (n = ds(t._target)) !== t._length && (r = n / t._length, t._length = n, t._offsetPT.s *= r, t._offsetPT.c *= r, t._dashPT ? (t._dashPT.s *= r, t._dashPT.c *= r) : t._dash *= r); o;) o.r(e, o.d), o = o._next;
                    i = t._dash || e && 1 !== e && 1e-4 || 0, n = t._length - i + .1, r = t._offset, i && r && i + Math.abs(r % t._length) > t._length - .2 && (r += r < 0 ? .1 : -.1) && (n += .1), s.strokeDashoffset = i ? r : r + .001, s.strokeDasharray = n < .2 ? "none" : i ? i + "px," + n + "px" : "0px, 999999px"
                }
            },
            getLength: ds,
            getPosition: ps
        };
    is() && hs.registerPlugin(wt);

    function ws(e) {
        return e
    }

    function Ts() {
        return "undefined" != typeof window
    }

    function Cs() {
        return na || Ts() && (na = window.gsap) && na.registerPlugin && na
    }

    function _s(e) {
        return !!~la.indexOf(e)
    }

    function ks(e, t) {
        return ~Fa.indexOf(e) && Fa[Fa.indexOf(e) + 1][t]
    }

    function Ss(t, e) {
        var n = e.s,
            i = e.sc,
            r = Oa.indexOf(t),
            e = i === Ja.sc ? 1 : 2;
        return ~r || (r = Oa.push(t) - 1), Oa[r + e] || (Oa[r + e] = ks(t, n) || (_s(t) ? i : function(e) {
            return arguments.length ? t[n] = e : t[n]
        }))
    }

    function Es(e) {
        return ks(e, "getBoundingClientRect") || (_s(e) ? function() {
            return wl.width = ra.innerWidth, wl.height = ra.innerHeight, wl
        } : function() {
            return el(e)
        })
    }

    function As(e, t) {
        var n = t.s,
            i = t.d2,
            r = t.d,
            t = t.a;
        return (n = "scroll" + i) && (t = ks(e, n)) ? t() - Es(e)()[r] : _s(e) ? Math.max(sa[n], aa[n]) - (ra["inner" + i] || sa["client" + i] || aa["client" + i]) : e[n] - e["offset" + i]
    }

    function Fs(e, t) {
        for (var n = 0; n < wa.length; n += 3) t && !~t.indexOf(wa[n + 1]) || e(wa[n], wa[n + 1], wa[n + 2])
    }

    function Os(e) {
        return "string" == typeof e
    }

    function Ls(e) {
        return "function" == typeof e
    }

    function Ms(e) {
        return "number" == typeof e
    }

    function Ps(e) {
        return "object" == typeof e
    }

    function Ns(e) {
        return Ls(e) && e()
    }

    function $s(n, i) {
        return function() {
            var e = Ns(n),
                t = Ns(i);
            return function() {
                Ns(e), Ns(t)
            }
        }
    }

    function Bs(e) {
        return ra.getComputedStyle(e)
    }

    function Is(e, t) {
        for (var n in t) n in e || (e[n] = t[n]);
        return e
    }

    function Rs(e, t) {
        return t = t.d2, e["offset" + t] || e["client" + t] || 0
    }

    function qs(e) {
        var t, n = [],
            i = e.labels,
            r = e.duration();
        for (t in i) n.push(i[t] / r);
        return n
    }

    function Hs(t, n, e, i) {
        return e.split(",").forEach(function(e) {
            return t(n, e, i)
        })
    }

    function js(e, t, n) {
        return e.addEventListener(t, n, {
            passive: !0
        })
    }

    function zs(e, t, n) {
        return e.removeEventListener(t, n)
    }

    function Ws(e, t) {
        var n, i;
        return Os(e) && (i = ~(n = e.indexOf("=")) ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0, ~n && (e.indexOf("%") > n && (i *= t / 100), e = e.substr(0, n - 1)), e = i + (e in il ? il[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)), e
    }

    function Xs(e, t, n, i, r, o, s) {
        var a = r.startColor,
            l = r.endColor,
            u = r.fontSize,
            c = r.indent,
            d = r.fontWeight,
            p = oa.createElement("div"),
            f = _s(n) || "fixed" === ks(n, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            r = f ? aa : n,
            n = -1 !== e.indexOf("start"),
            d = "border-color:" + (l = n ? a : l) + ";font-size:" + u + ";color:" + l + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return d += "position:" + (h && f ? "fixed;" : "absolute;"), !h && f || (d += (i === Ja ? qa : Ha) + ":" + (o + parseFloat(c)) + "px;"), s && (d += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"), p._isStart = n, p.setAttribute("class", "gsap-marker-" + e), p.style.cssText = d, p.innerText = t || 0 === t ? e + "-" + t : e, r.children[0] ? r.insertBefore(p, r.children[0]) : r.appendChild(p), p._offset = p["offset" + i.op.d2], rl(p, 0, i, n), p
    }

    function Ys() {
        return da = da || ca(yl)
    }

    function Us() {
        da || (da = ca(yl), Pa || cl("scrollStart"), Pa = La())
    }

    function Vs() {
        return !ma && !_a && !oa.fullscreenElement && ua.restart(!0)
    }

    function Gs(e) {
        var t, n = na.ticker.frame,
            i = [],
            r = 0;
        if (Ea !== n || Aa) {
            for (fl(); r < ul.length; r += 4)(t = ra.matchMedia(ul[r]).matches) !== ul[r + 3] && ((ul[r + 3] = t) ? i.push(r) : fl(1, ul[r]) || Ls(ul[r + 2]) && ul[r + 2]());
            for (pl(), r = 0; r < i.length; r++) t = i[r], Sa = ul[t], ul[t + 2] = ul[t + 1](e);
            Sa = 0, ia && hl(0, 1), Ea = n, cl("matchMedia")
        }
    }

    function Ks() {
        return zs(Cl, "scrollEnd", Ks) || hl(!0)
    }

    function Qs(e, t, n, i) {
        if (e.parentNode !== t) {
            for (var r, o = vl.length, s = t.style, a = e.style; o--;) s[r = vl[o]] = n[r];
            s.position = "absolute" === n.position ? "absolute" : "relative", "inline" === n.display && (s.display = "inline-block"), a[Ha] = a[qa] = "auto", s.overflow = "visible", s.boxSizing = "border-box", s[ja] = Rs(e, Za) + Qa, s[za] = Rs(e, Ja) + Qa, s[Va] = a[Ga] = a.top = a[Ra] = "0", bl(i), a[ja] = a.maxWidth = n[ja], a[za] = a.maxHeight = n[za], a[Va] = n[Va], e.parentNode.insertBefore(t, e), t.appendChild(e)
        }
    }

    function Zs(e) {
        for (var t = Dl.length, n = e.style, i = [], r = 0; r < t; r++) i.push(Dl[r], n[Dl[r]]);
        return i.t = e, i
    }

    function Js(e, t, n, i, r, o, s, a, l, u, c, d) {
        var p, f;
        return Ls(e) && (e = e(a)), Os(e) && "max" === e.substr(0, 3) && (e = d + ("=" === e.charAt(4) ? Ws("0" + e.substr(3), n) : 0)), Ms(e) ? s && rl(s, n, i, !0) : (Ls(t) && (t = t(a)), p = pa(t)[0] || aa, a = el(p) || {}, f = e.split(" "), a && (a.left || a.top) || "none" !== Bs(p).display || (t = p.style.display, p.style.display = "block", a = el(p), t ? p.style.display = t : p.style.removeProperty("display")), p = Ws(f[0], a[i.d]), f = Ws(f[1] || "0", n), e = a[i.p] - l[i.p] - u + p + r - f, s && rl(s, f, i, n - f < 20 || s._isStart && 20 < f), n -= n - f), o && (f = o._isStart, d = "scroll" + i.d2, rl(o, n = e + n, i, f && 20 < n || !f && (c ? Math.max(aa[d], sa[d]) : o.parentNode[d]) <= n + 1), c && (l = el(s), c && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + Qa))), Math.round(e)
    }

    function ea(e, t, n, i) {
        if (e.parentNode !== t) {
            var r, o, s = e.style;
            if (t === aa) {
                for (r in e._stOrig = s.cssText, o = Bs(e)) + r || Tl.test(r) || !o[r] || "string" != typeof s[r] || "0" === r || (s[r] = o[r]);
                s.top = n, s.left = i
            } else s.cssText = e._stOrig;
            na.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function ta(l, e) {
        function u(e, t, n, i, r) {
            var o = u.tween,
                s = t.onComplete,
                a = {};
            return o && o.kill(), c = Math.round(n), t[f] = e, (t.modifiers = a)[f] = function(e) {
                return (e = Math.round(p())) !== c && e !== d && 2 < Math.abs(e - c) ? (o.kill(), u.tween = 0) : e = n + i * o.ratio + r * o.ratio * o.ratio, d = c, c = Math.round(e)
            }, t.onComplete = function() {
                u.tween = 0, s && s.call(o)
            }, o = u.tween = na.to(l, t)
        }
        var c, d, p = Ss(l, e),
            f = "_scroll" + e.p2;
        return l[f] = p, l.addEventListener("mousewheel", function() {
            return u.tween && u.tween.kill() && (u.tween = 0)
        }), u
    }
    /*!
     * ScrollTrigger 3.6.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var na, ia, ra, oa, sa, aa, la, ua, ca, da, pa, fa, ha, ga, ma, ya, va, Da, xa, ba, wa, Ta, Ca, _a, ka, Sa, Ea, Aa = 1,
        Fa = [],
        Oa = [],
        La = Date.now,
        Ma = La(),
        Pa = 0,
        Na = 1,
        $a = Math.abs,
        Ba = "scrollLeft",
        Ia = "scrollTop",
        Ra = "left",
        qa = "right",
        Ha = "bottom",
        ja = "width",
        za = "height",
        Wa = "Right",
        Xa = "Left",
        Ya = "Top",
        Ua = "Bottom",
        Va = "padding",
        Ga = "margin",
        Ka = "Width",
        _t = "Height",
        Qa = "px",
        Za = {
            s: Ba,
            p: Ra,
            p2: Xa,
            os: qa,
            os2: Wa,
            d: ja,
            d2: Ka,
            a: "x",
            sc: function(e) {
                return arguments.length ? ra.scrollTo(e, Ja.sc()) : ra.pageXOffset || oa[Ba] || sa[Ba] || aa[Ba] || 0
            }
        },
        Ja = {
            s: Ia,
            p: "top",
            p2: Ya,
            os: Ha,
            os2: Ua,
            d: za,
            d2: _t,
            a: "y",
            op: Za,
            sc: function(e) {
                return arguments.length ? ra.scrollTo(Za.sc(), e) : ra.pageYOffset || oa[Ia] || sa[Ia] || aa[Ia] || 0
            }
        },
        el = function(e, t) {
            t = t && "matrix(1, 0, 0, 1, 0, 0)" !== Bs(e)[va] && na.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1), e = e.getBoundingClientRect();
            return t && t.progress(0).kill(), e
        },
        tl = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        nl = {
            toggleActions: "play",
            anticipatePin: 0
        },
        il = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        rl = function(e, t, n, i) {
            var r = {
                    display: "block"
                },
                o = n[i ? "os2" : "p2"],
                s = n[i ? "p2" : "os2"];
            e._isFlipped = i, r[n.a + "Percent"] = i ? -100 : 0, r[n.a] = i ? "1px" : 0, r["border" + o + Ka] = 1, r["border" + s + Ka] = 0, r[n.p] = t + "px", na.set(e, r)
        },
        ol = [],
        sl = {},
        al = {},
        ll = [],
        ul = [],
        cl = function(e) {
            return al[e] && al[e].map(function(e) {
                return e()
            }) || ll
        },
        dl = [],
        pl = function(e) {
            for (var t = 0; t < dl.length; t += 4) e && dl[t + 3] !== e || (dl[t].style.cssText = dl[t + 1], dl[t + 2].uncache = 1)
        },
        fl = function(e, t) {
            var n;
            for (Da = 0; Da < ol.length; Da++) n = ol[Da], t && n.media !== t || (e ? n.kill(1) : (n.scroll.rec || (n.scroll.rec = n.scroll()), n.revert()));
            pl(t), t || cl("revert")
        },
        hl = function(e, t) {
            if (!Pa || e) {
                e = cl("refreshInit");
                for (Ta && Cl.sort(), t || fl(), Da = 0; Da < ol.length; Da++) ol[Da].refresh();
                for (e.forEach(function(e) {
                        return e && e.render && e.render(-1)
                    }), Da = ol.length; Da--;) ol[Da].scroll.rec = 0;
                ua.pause(), cl("refresh")
            } else js(Cl, "scrollEnd", Ks)
        },
        gl = 0,
        ml = 1,
        yl = function() {
            var e = ol.length,
                t = La(),
                n = 50 <= t - Ma,
                i = e && ol[0].scroll();
            if (ml = i < gl ? -1 : 1, gl = i, n && (Pa && !ya && 200 < t - Pa && (Pa = 0, cl("scrollEnd")), ha = Ma, Ma = t), ml < 0) {
                for (Da = e; Da--;) ol[Da] && ol[Da].update(0, n);
                ml = 1
            } else
                for (Da = 0; Da < e; Da++) ol[Da] && ol[Da].update(0, n);
            da = 0
        },
        vl = [Ra, "top", Ha, qa, Ga + Ua, Ga + Wa, Ga + Ya, Ga + Xa, "display", "flexShrink", "float", "zIndex"],
        Dl = vl.concat([ja, za, "boxSizing", "max" + Ka, "max" + _t, "position", Ga, Va, Va + Ya, Va + Wa, Va + Ua, Va + Xa]),
        xl = /([A-Z])/g,
        bl = function(e) {
            if (e) {
                var t, n, i = e.t.style,
                    r = e.length,
                    o = 0;
                for ((e.t._gsap || na.core.getCache(e.t)).uncache = 1; o < r; o += 2) n = e[o + 1], t = e[o], n ? i[t] = n : i[t] && i.removeProperty(t.replace(xl, "-$1").toLowerCase())
            }
        },
        wl = {
            left: 0,
            top: 0
        },
        Tl = /(?:webkit|moz|length|cssText|inset)/i;
    Za.op = Ja;
    var Cl = function() {
        function be(e, t) {
            ia || be.register(na) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
        }
        return be.prototype.init = function(g, m) {
            var y, c, d, i, p, v, e, D, x, b, w, f, t, l, h, T, C, _, k, n, S, E, A, F, O, L, r, M, P, N, o, u, $, B, I, R, q, H, j, z, W, X, Y, U, V, G, K, Q, Z, J, ee, te, ne, ie, s, re, oe, se, a, ae, le, ue, ce, de, pe, fe, he, ge, me, ye, ve, De, xe;
            this.progress = this.start = 0, this.vars && this.kill(1), Na ? (y = (g = Is(Os(g) || Ms(g) || g.nodeType ? {
                trigger: g
            } : g, nl)).horizontal ? Za : Ja, c = g.onUpdate, d = g.toggleClass, i = g.id, p = g.onToggle, v = g.onRefresh, e = g.scrub, D = g.trigger, x = g.pin, b = g.pinSpacing, w = g.invalidateOnRefresh, f = g.anticipatePin, t = g.onScrubComplete, l = g.onSnapComplete, h = g.once, T = g.snap, C = g.pinReparent, _ = !e && 0 !== e, k = pa(g.scroller || ra)[0], n = na.core.getCache(k), S = _s(k), E = "pinType" in g ? "fixed" === g.pinType : S || "fixed" === ks(k, "pinType"), A = [g.onEnter, g.onLeave, g.onEnterBack, g.onLeaveBack], F = _ && g.toggleActions.split(" "), xe = ("markers" in g ? g : nl).markers, O = !S && parseFloat(Bs(k)["border" + y.p2 + Ka]) || 0, L = this, r = g.onRefreshInit && function() {
                return g.onRefreshInit(L)
            }, pe = k, fe = S, ge = (he = y).d, me = he.d2, ye = he.a, M = (ye = ks(pe, "getBoundingClientRect")) ? function() {
                return ye()[ge]
            } : function() {
                return (fe ? ra["inner" + me] : pe["client" + me]) || 0
            }, he = k, P = !S || ~Fa.indexOf(he) ? Es(he) : function() {
                return wl
            }, L.media = Sa, f *= 45, ol.push(L), L.scroller = k, L.scroll = Ss(k, y), B = L.scroll(), L.vars = g, m = m || g.animation, "refreshPriority" in g && (Ta = 1), n.tweenScroll = n.tweenScroll || {
                top: ta(k, Ja),
                left: ta(k, Za)
            }, L.tweenTo = N = n.tweenScroll[y.p], m && (m.vars.lazy = !1, m._initted || !1 !== m.vars.immediateRender && !1 !== g.immediateRender && m.render(0, !0, !0), L.animation = m.pause(), m.scrollTrigger = L, (a = Ms(e) && e) && (se = na.to(m, {
                ease: "power3",
                duration: a,
                onComplete: function() {
                    return t && t(L)
                }
            })), re = 0, i = i || m.vars.id), T && (Ps(T) || (T = {
                snapTo: T
            }), "scrollBehavior" in aa.style && na.set(S ? [aa, sa] : k, {
                scrollBehavior: "auto"
            }), u = Ls(T.snapTo) ? T.snapTo : "labels" === T.snapTo ? (De = m, function(e) {
                return na.utils.snap(qs(De), e)
            }) : "labelsDirectional" === T.snapTo ? (ve = m, function(e, t) {
                var n, i = qs(ve);
                if (i.sort(function(e, t) {
                        return e - t
                    }), 0 < t.direction) {
                    for (n = 0; n < i.length; n++)
                        if (i[n] >= e) return i[n];
                    return i.pop()
                }
                for (n = i.length; n--;)
                    if (i[n] <= e) return i[n];
                return i[0]
            }) : na.utils.snap(T.snapTo), ae = T.duration || {
                min: .1,
                max: 2
            }, ae = Ps(ae) ? fa(ae.min, ae.max) : fa(ae, ae), le = na.delayedCall(T.delay || a / 2 || .1, function() {
                var e, t, n, i, r, o, s, a;
                Math.abs(L.getVelocity()) < 10 && !ya ? (t = ((e = m && !_ ? m.totalProgress() : L.progress) - oe) / (La() - ha) * 1e3 || 0, n = $a(t / 2) * t / .185, r = fa(0, 1, u(i = e + n, L)), o = L.scroll(), s = Math.round(R + r * X), a = N.tween, o <= q && R <= o && s !== o && (a && !a._initted && a.data <= Math.abs(s - o) || N(s, {
                    duration: ae($a(.185 * Math.max($a(i - e), $a(r - e)) / t / .05 || 0)),
                    ease: T.ease || "power3",
                    data: Math.abs(s - o),
                    onComplete: function() {
                        re = oe = m && !_ ? m.totalProgress() : L.progress, l && l(L)
                    }
                }, o, n * X, s - o - n * X))) : L.isActive && le.restart(!0)
            }).pause()), i && (sl[i] = L), D = L.trigger = pa(D || x)[0], x = !0 === x ? D : pa(x)[0], Os(d) && (d = {
                targets: D,
                className: d
            }), x && (!1 === b || b === Ga || (b = !(!b && "flex" === Bs(x.parentNode).display) && Va), L.pin = x, !1 !== g.force3D && na.set(x, {
                force3D: !0
            }), (o = na.core.getCache(x)).spacer ? Y = o.pinState : (o.spacer = G = oa.createElement("div"), G.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), o.pinState = Y = Zs(x)), L.spacer = G = o.spacer, s = Bs(x), ee = s[b + y.os2], K = na.getProperty(x), Q = na.quickSetter(x, y.a, Qa), Qs(x, G, s), V = Zs(x)), xe && (s = Ps(xe) ? Is(xe, tl) : tl, z = Xs("scroller-start", i, k, y, s, 0), W = Xs("scroller-end", i, k, y, s, 0, z), xe = z["offset" + y.op.d2], H = Xs("start", i, k, y, s, xe), j = Xs("end", i, k, y, s, xe), E || ((xe = S ? aa : k).style.position = "absolute" === Bs(xe).position ? "absolute" : "relative", na.set([z, W], {
                force3D: !0
            }), ne = na.quickSetter(z, y.a, Qa), ie = na.quickSetter(W, y.a, Qa))), L.revert = function(e) {
                var t, n = !1 !== e || !L.enabled,
                    i = ma;
                n !== $ && (n && (ce = Math.max(L.scroll(), L.scroll.rec || 0), ue = L.progress, de = m && m.progress()), H && [H, j, z, W].forEach(function(e) {
                    return e.style.display = n ? "none" : "block"
                }), n && (ma = 1), L.update(n), ma = i, x && (n ? (t = x, e = G, bl(i = Y), t.parentNode !== e || (i = e.parentNode) && (i.insertBefore(t, e), i.removeChild(e))) : C && L.isActive || Qs(x, G, Bs(x), te)), $ = n)
            }, L.refresh = function(e) {
                if (!ma && L.enabled)
                    if (x && e && Pa) js(be, "scrollEnd", Ks);
                    else {
                        ma = 1, se && se.pause(), w && m && m.progress(0).invalidate(), $ || L.revert();
                        for (var t, n, i, r, o, s = M(), a = P(), l = As(k, y), u = 0, c = 0, d = g.end, p = g.endTrigger || D, e = g.start || (0 !== g.start && D ? x ? "0 0" : "0 100%" : 0), f = D && Math.max(0, ol.indexOf(L)) || 0, h = f; h--;) !(r = ol[h].pin) || r !== D && r !== x || ol[h].revert();
                        for (R = Js(e, D, s, y, L.scroll(), H, z, L, a, O, E, l) || (x ? -.001 : 0), Ls(d) && (d = d(L)), Os(d) && !d.indexOf("+=") && (~d.indexOf(" ") ? d = (Os(e) ? e.split(" ")[0] : "") + d : (u = Ws(d.substr(2), s), d = Os(e) ? e : R + u, p = D)), q = Math.max(R, Js(d || (p ? "100% 0" : l), p, s, y, L.scroll() + u, j, W, L, a, O, E, l)) || -.001, X = q - R || (R -= .01) && .001, u = 0, h = f; h--;)(r = (i = ol[h]).pin) && i.start - i._pinPush < R && (t = i.end - i.start, r === D && (u += t), r === x && (c += t));
                        if (R += u, q += u, L._pinPush = c, H && u && ((t = {})[y.a] = "+=" + u, na.set([H, j], t)), x) t = Bs(x), s = y === Ja, a = L.scroll(), Z = parseFloat(K(y.a)) + c, !l && 1 < q && ((S ? aa : k).style["overflow-" + y.a] = "scroll"), Qs(x, G, t), V = Zs(x), n = el(x, !0), l = E && Ss(k, s ? Za : Ja)(), b && ((te = [b + y.os2, X + c + Qa]).t = G, (h = b === Va ? Rs(x, y) + X + c : 0) && te.push(y.d, h + Qa), bl(te), E && L.scroll(ce)), E && ((o = {
                            top: n.top + (s ? a - R : l) + Qa,
                            left: n.left + (s ? l : a - R) + Qa,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[ja] = o.maxWidth = Math.ceil(n.width) + Qa, o[za] = o.maxHeight = Math.ceil(n.height) + Qa, o[Ga] = o[Ga + Ya] = o[Ga + Wa] = o[Ga + Ua] = o[Ga + Xa] = "0", o[Va] = t[Va], o[Va + Ya] = t[Va + Ya], o[Va + Wa] = t[Va + Wa], o[Va + Ua] = t[Va + Ua], o[Va + Xa] = t[Va + Xa], U = function(e, t, n) {
                            for (var i, r = [], o = e.length, s = n ? 8 : 0; s < o; s += 2) i = e[s], r.push(i, i in t ? t[i] : e[s + 1]);
                            return r.t = e.t, r
                        }(Y, o, C)), m ? (o = m._initted, Ca(1), m.progress(1, !0), J = K(y.a) - Z + X + c, X !== J && U.splice(U.length - 2, 2), m.progress(0, !0), o || m.invalidate(), Ca(0)) : J = X;
                        else if (D && L.scroll())
                            for (n = D.parentNode; n && n !== aa;) n._pinOffset && (R -= n._pinOffset, q -= n._pinOffset), n = n.parentNode;
                        for (h = 0; h < f; h++) !(i = ol[h].pin) || i !== D && i !== x || ol[h].revert(!1);
                        L.start = R, L.end = q, (B = I = L.scroll()) < ce && L.scroll(ce), L.revert(!1), ma = 0, m && _ && m._initted && m.progress(de, !0).render(m.time(), !0, !0), ue !== L.progress && (se && m.totalProgress(ue, !0), L.progress = ue, L.update()), x && b && (G._pinOffset = Math.round(L.progress * J)), v && v(L)
                    }
            }, L.getVelocity = function() {
                return (L.scroll() - I) / (La() - ha) * 1e3 || 0
            }, L.update = function(e, t) {
                var n, i, r, o, s = L.scroll(),
                    a = e ? 0 : (s - R) / X,
                    l = a < 0 ? 0 : 1 < a ? 1 : a || 0,
                    u = L.progress;
                t && (I = B, B = s, T && (oe = re, re = m && !_ ? m.totalProgress() : l)), (l = f && !l && x && !ma && !Aa && Pa && R < s + (s - I) / (La() - ha) * f ? 1e-4 : l) !== u && L.enabled && (o = (r = (i = L.isActive = !!l && l < 1) != (!!u && u < 1)) || !!l != !!u, L.direction = u < l ? 1 : -1, L.progress = l, _ || (!se || ma || Aa ? m && m.totalProgress(l, !!ma) : (se.vars.totalProgress = l, se.invalidate().restart())), x && (e && b && (G.style[b + y.os2] = ee), E ? o && (n = !e && u < l && s < q + 1 && s + 1 >= As(k, y), C && (e || !i && !n ? ea(x, G) : (a = el(x, !0), t = s - R, ea(x, aa, a.top + (y === Ja ? t : 0) + Qa, a.left + (y === Ja ? 0 : t) + Qa))), bl(i || n ? U : V), J !== X && l < 1 && i || Q(Z + (1 !== l || n ? 0 : J))) : Q(Z + J * l)), !T || N.tween || ma || Aa || le.restart(!0), d && (r || h && l && (l < 1 || !ka)) && pa(d.targets).forEach(function(e) {
                    return e.classList[i || h ? "add" : "remove"](d.className)
                }), !c || _ || e || c(L), o && !ma ? (u = l && !u ? 0 : 1 === l ? 1 : 1 === u ? 2 : 3, _ && (n = !r && "none" !== F[u + 1] && F[u + 1] || F[u], m && ("complete" === n || "reset" === n || n in m) && ("complete" === n ? m.pause().totalProgress(1) : "reset" === n ? m.restart(!0).pause() : m[n]()), c && c(L)), !r && ka || (p && r && p(L), A[u] && A[u](L), h && (1 === l ? L.kill(!1, 1) : A[u] = 0), r || A[u = 1 === l ? 1 : 3] && A[u](L))) : _ && c && !ma && c(L)), ie && (ne(s + (z._isFlipped ? 1 : 0)), ie(s))
            }, L.enable = function() {
                L.enabled || (L.enabled = !0, js(k, "resize", Vs), js(k, "scroll", Us), r && js(be, "refreshInit", r), m && m.add ? na.delayedCall(.01, function() {
                    return R || q || L.refresh()
                }) && (X = .01) && (R = q = 0) : L.refresh())
            }, L.disable = function(e, t) {
                if (L.enabled && (!1 !== e && L.revert(), L.enabled = L.isActive = !1, t || se && se.pause(), ce = 0, o && (o.uncache = 1), r && zs(be, "refreshInit", r), le && (le.pause(), N.tween && N.tween.kill() && (N.tween = 0)), !S)) {
                    for (var n = ol.length; n--;)
                        if (ol[n].scroller === k && ol[n] !== L) return;
                    zs(k, "resize", Vs), zs(k, "scroll", Us)
                }
            }, L.kill = function(e, t) {
                L.disable(e, t), i && delete sl[i];
                var n = ol.indexOf(L);
                ol.splice(n, 1), n === Da && 0 < ml && Da--, m && (m.scrollTrigger = null, e && m.render(-1), t || m.kill()), H && [H, j, z, W].forEach(function(e) {
                    return e.parentNode.removeChild(e)
                }), x && (o && (o.uncache = 1), n = 0, ol.forEach(function(e) {
                    return e.pin === x && n++
                }), n || (o.spacer = 0))
            }, L.enable()) : this.update = this.refresh = this.kill = ws
        }, be.register = function(e) {
            var t, n;
            return ia || (na = e || Cs(), Ts() && window.document && (ra = window, oa = document, sa = oa.documentElement, aa = oa.body), na && (pa = na.utils.toArray, fa = na.utils.clamp, Ca = na.core.suppressOverwrites || ws, na.core.globals("ScrollTrigger", be), aa && (ca = ra.requestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            }, js(ra, "mousewheel", Us), la = [ra, oa, sa, aa], js(oa, "scroll", Us), n = (t = aa.style).borderTop, t.borderTop = "1px solid #000", e = el(aa), Ja.m = Math.round(e.top + Ja.sc()) || 0, Za.m = Math.round(e.left + Za.sc()) || 0, n ? t.borderTop = n : t.removeProperty("border-top"), ga = setInterval(Ys, 200), na.delayedCall(.5, function() {
                return Aa = 0
            }), js(oa, "touchcancel", ws), js(aa, "touchstart", ws), Hs(js, oa, "pointerdown,touchstart,mousedown", function() {
                return ya = 1
            }), Hs(js, oa, "pointerup,touchend,mouseup", function() {
                return ya = 0
            }), va = na.utils.checkPrefix("transform"), Dl.push(va), ia = La(), ua = na.delayedCall(.2, hl).pause(), wa = [oa, "visibilitychange", function() {
                var e = ra.innerWidth,
                    t = ra.innerHeight;
                oa.hidden ? (xa = e, ba = t) : xa === e && ba === t || Vs()
            }, oa, "DOMContentLoaded", hl, ra, "load", function() {
                return Pa || hl()
            }, ra, "resize", Vs], Fs(js)))), ia
        }, be.defaults = function(e) {
            for (var t in e) nl[t] = e[t]
        }, be.kill = function() {
            Na = 0, ol.slice(0).forEach(function(e) {
                return e.kill(1)
            })
        }, be.config = function(e) {
            "limitCallbacks" in e && (ka = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(ga) || (ga = t) && setInterval(Ys, t), "autoRefreshEvents" in e && (Fs(zs), Fs(js, e.autoRefreshEvents || "none"), _a = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, be.scrollerProxy = function(e, t) {
            var n = pa(e)[0],
                i = Oa.indexOf(n),
                e = _s(n);
            ~i && Oa.splice(i, e ? 6 : 2), e ? Fa.unshift(ra, t, aa, t, sa, t) : Fa.unshift(n, t)
        }, be.matchMedia = function(e) {
            var t, n, i, r, o;
            for (n in e) i = ul.indexOf(n), r = e[n], "all" === (Sa = n) ? r() : (t = ra.matchMedia(n)) && (t.matches && (o = r()), ~i ? (ul[i + 1] = $s(ul[i + 1], r), ul[i + 2] = $s(ul[i + 2], o)) : (i = ul.length, ul.push(n, r, o), t.addListener ? t.addListener(Gs) : t.addEventListener("change", Gs)), ul[i + 3] = t.matches), Sa = 0;
            return ul
        }, be.clearMatchMedia = function(e) {
            e || (ul.length = 0), 0 <= (e = ul.indexOf(e)) && ul.splice(e, 4)
        }, be
    }();
    Cl.version = "3.6.0", Cl.saveStyles = function(e) {
        return e ? pa(e).forEach(function(e) {
            var t;
            e && e.style && (0 <= (t = dl.indexOf(e)) && dl.splice(t, 4), dl.push(e, e.style.cssText, na.core.getCache(e), Sa))
        }) : dl
    }, Cl.revert = function(e, t) {
        return fl(!e, t)
    }, Cl.create = function(e, t) {
        return new Cl(e, t)
    }, Cl.refresh = function(e) {
        return e ? Vs() : hl(!0)
    }, Cl.update = yl, Cl.maxScroll = function(e, t) {
        return As(e, t ? Za : Ja)
    }, Cl.getScrollFunc = function(e, t) {
        return Ss(pa(e)[0], t ? Za : Ja)
    }, Cl.getById = function(e) {
        return sl[e]
    }, Cl.getAll = function() {
        return ol.slice(0)
    }, Cl.isScrolling = function() {
        return !!Pa
    }, Cl.addEventListener = function(e, t) {
        e = al[e] || (al[e] = []);
        ~e.indexOf(t) || e.push(t)
    }, Cl.removeEventListener = function(e, t) {
        e = al[e], t = e && e.indexOf(t);
        0 <= t && e.splice(t, 1)
    }, Cl.batch = function(e, t) {
        var n, i = [],
            r = {},
            o = t.interval || .016,
            s = t.batchMax || 1e9;
        for (n in t) r[n] = "on" === n.substr(0, 2) && Ls(t[n]) && "onRefreshInit" !== n ? function(e) {
            var t = [],
                n = [],
                i = na.delayedCall(o, function() {
                    e(t, n), t = [], n = []
                }).pause();
            return function(e) {
                t.length || i.restart(!0), t.push(e.trigger), n.push(e), s <= t.length && i.progress(1)
            }
        }(t[n]) : t[n];
        return Ls(s) && (s = s(), js(Cl, "refresh", function() {
            return s = t.batchMax()
        })), pa(e).forEach(function(e) {
            var t = {};
            for (n in r) t[n] = r[n];
            t.trigger = e, i.push(Cl.create(t))
        }), i
    }, Cl.sort = function(e) {
        return ol.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, Cs() && na.registerPlugin(Cl);
    var _t = n(4),
        _l = n.n(_t);
    n(3);

    function kl(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    window.$ = window.jQuery = _l.a, Ci.registerPlugin(Cl), Ci.registerPlugin(ts), Ci.registerPlugin(wt), Ci.registerPlugin(Tt);
    var Sl = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.buildPage()
        }
        var t, n, i;
        return t = e, (n = [{
            key: "screenSmall",
            value: function() {
                return window.innerWidth < 1e3
            }
        }, {
            key: "screenLarge",
            value: function() {
                return 999 < window.innerWidth
            }
        }, {
            key: "isRTL",
            value: function() {
                return "ar-sa" == document.documentElement.lang
            }
        }, {
            key: "doesElementExist",
            value: function(e) {
                return null !== document.querySelector(e)
            }
        }, {
            key: "buildPage",
            value: function() {
                this.nav(), this.maps(".amp-section8")
            }
        }, {
            key: "nav",
            value: function() {
                var t, n, i;
                null !== document.getElementById("full-nav") && ((t = Ci.timeline()).paused(!0), t.fromTo("#full-nav", {
                    translateY: "-100%",
                    transformOrigin: "0% 0 0",
                    opacity: 0
                }, {
                    duration: 1,
                    ease: "power.in",
                    absolute: 1,
                    translateY: 0,
                    opacity: 1
                }), document.getElementById("navBtn").addEventListener("click", function(e) {
                    document.querySelector("html").style.overflow = "hidden", t.play()
                }), document.getElementById("navClose").addEventListener("click", function(e) {
                    document.querySelector("html").style.overflow = "", t.reverse()
                }), n = Ci.to("nav", {
                    y: "-=164",
                    duration: .5,
                    ease: "power2.in",
                    paused: !0
                }), i = document.getElementById("menu-nav"), Cl.create({
                    trigger: "nav",
                    start: "0 top",
                    end: 99999,
                    onUpdate: function(e) {
                        e.progress;
                        var t = e.direction,
                            e = e.isActive; - 1 == t && (n.reverse(), i.classList = "is-scrolled"), (1 == t || 1 == t && 1 == e) && n.play(), 0 == window.scrollY && (i.classList = "")
                    }
                })), document.querySelectorAll('#full-nav .card-slider a[href^="#"]').forEach(function(n, e) {
                    n.addEventListener("click", function(e) {
                        e.preventDefault(), document.querySelector("html").style.overflow = "";
                        var e = n.getAttribute("href").replace("#", ""),
                            t = !1;
                        if (e) switch (e) {
                            case "map":
                                t = "section8";
                                break;
                        }
                        t ? Ci.to(window, {
                            duration: .4,
                            scrollTo: {
                                y: ".amp-" + t
                            }
                        }) : Ci.to(window, {
                            duration: .4,
                            scrollTo: {
                                y: "#" + e
                            }
                        }), tl_nav.reverse()
                    })
                })
            }
        }, {
            key: "maps",
            value: function(e) {
                var n, i, r;
                this.doesElementExist(e) && ((n = Ci.timeline({
                    scrollTrigger: {
                        trigger: e + " .map-overview",
                        start: "top center",
                        toggleActions: "play pause restart pause"
                    }
                })).fromTo(e + " .map-overview .mapcirclelarge", {
                    scale: 1,
                    opacity: 1,
                    stagger: .4,
                    transformOrigin: "center center"
                }, {
                    scale: 6,
                    opacity: .5,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: !0
                }, "<").from(e + " .map-overview .pathoutline", {
                    opacity: 0,
                    duration: 3,
                    stagger: .7,
                    drawSVG: 0
                }, "-=1"), (i = Ci.timeline({
                    paused: !0,
                    scrollTrigger: {
                        trigger: e + " .map-masterplan",
                        start: "top center",
                        toggleActions: "play pause play pause",
                        paused: !0
                    }
                })).paused(!0), i.fromTo(e + " .map-masterplan .mapcircle", {
                    scale: .5,
                    opacity: 1,
                    transformOrigin: "center center"
                }, {
                    scale: 1.3,
                    opacity: .5,
                    duration: 1.5,
                    repeat: -1,
                    stagger: .01,
                    yoyo: !0
                }).fromTo(e + " .map-masterplan .mapcirclelarge", {
                    scale: .5,
                    opacity: 1,
                    stagger: .4,
                    transformOrigin: "center center"
                }, {
                    scale: 2,
                    opacity: .5,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: !0
                }, "<"), r = Ci.timeline({
                    repeatDelay: 2,
                    repeat: -1,
                    yoyo: !1,
                    paused: !0,
                    scrollTrigger: {
                        trigger: e + " .map-mobility",
                        start: "top center",
                        toggleActions: "play pause play pause",
                        paused: !0
                    }
                }), (window.AlulaMP_Base.mobility = r).paused(!0), r.set(e + " .map-mobility .legend-animation li", {
                    display: "none",
                    opacity: 0
                }, "+=.5").to(e + " .map-mobility .legend-animation li.scenicroads", {
                    duration: .5,
                    opacity: 1,
                    display: "flex"
                }).fromTo(e + " .map-mobility #animate-MOBILITY_SCENICROAD1 path, " + e + " .map-mobility #animate-MOBILITY_SCENICROAD1 line", {
                    drawSVG: 0,
                    opacity: 1
                }, {
                    duration: 2,
                    opacity: 1,
                    stagger: 1,
                    drawSVG: "-100%",
                    transformOrigin: "center bottom"
                }).fromTo(e + " .map-mobility #animate-MOBILITY_SCENICROAD2 path, " + e + " .map-mobility #animate-MOBILITY_SCENICROAD2 line", {
                    drawSVG: 0,
                    opacity: 1
                }, {
                    duration: 2,
                    opacity: 1,
                    stagger: 1,
                    drawSVG: "100%",
                    transformOrigin: "center bottom"
                }).fromTo(e + " .map-mobility #animate-MOBILITY_SCENICROAD3 path, " + e + " .map-mobility #animate-MOBILITY_SCENICROAD3 line", {
                    drawSVG: 0,
                    opacity: 1
                }, {
                    duration: 2,
                    opacity: 1,
                    stagger: 1,
                    drawSVG: "100%",
                    transformOrigin: "center bottom"
                }).set(e + " .map-mobility .legend-animation li", {
                    display: "none",
                    opacity: 0
                }, "+=2").to(e + " .map-mobility .legend-animation li.aerial", {
                    duration: .5,
                    opacity: 1,
                    display: "flex"
                }).fromTo(e + " .map-mobility #animate-AERIALTRAILS path, " + e + " .map-mobility #animate-AERIALTRAILS line", {
                    drawSVG: 0,
                    opacity: 1
                }, {
                    duration: 1,
                    opacity: 1,
                    stagger: .01,
                    drawSVG: "-100%",
                    transformOrigin: "center center"
                }).set(e + " .map-mobility .legend-animation li", {
                    display: "none",
                    opacity: 0
                }, "+=2").to(e + " .map-mobility .legend-animation li.bike", {
                    duration: .5,
                    opacity: 1,
                    display: "flex"
                }).fromTo(e + " .map-mobility #animate-BIKETRAILS path, " + e + " .map-mobility #animate-BIKETRAILS line", {
                    drawSVG: 0,
                    opacity: 1
                }, {
                    duration: 1,
                    opacity: 1,
                    stagger: .01,
                    drawSVG: "-100%",
                    transformOrigin: "center center"
                }).set(e + " .map-mobility .legend-animation li", {
                    display: "none",
                    opacity: 0
                }, "+=2").to(e + " .map-mobility .legend-animation li.hejaz", {
                    duration: .5,
                    opacity: 1,
                    display: "flex"
                }).fromTo(e + " .map-mobility #animate-HEJAZRAILWAYBIKETRAILS path, " + e + " .map-mobility #animate-HEJAZRAILWAYBIKETRAILS line", {
                    drawSVG: 0,
                    opacity: 1
                }, {
                    duration: 1,
                    opacity: 1,
                    drawSVG: "-100%",
                    transformOrigin: "center center"
                }).set(e + " .map-mobility .legend-animation li", {
                    display: "none",
                    opacity: 0
                }, "+=2").to(e + " .map-mobility .legend-animation li.horse", {
                    duration: .5,
                    opacity: 1,
                    display: "flex"
                }).fromTo(e + " .map-mobility #animate-HORSETRAILS path, " + e + " .map-mobility #animate-HORSETRAILS line", {
                    drawSVG: 0,
                    opacity: 1
                }, {
                    duration: 1,
                    opacity: 1,
                    stagger: .01,
                    drawSVG: "-100%",
                    transformOrigin: "center center"
                }).set(e + " .map-mobility .legend-animation li", {
                    display: "none",
                    opacity: 0
                }, "+=2").to(e + " .map-mobility .legend-animation li.tram-exp", {
                    duration: .5,
                    opacity: 1,
                    display: "flex"
                }).fromTo(e + " .map-mobility #animate-MOBILILTY_TRAM path, " + e + " .map-mobility #animate-MOBILILTY_TRAM line", {
                    drawSVG: 0,
                    opacity: 1
                }, {
                    duration: 2,
                    opacity: 1,
                    stagger: .05,
                    drawSVG: "-100%",
                    transformOrigin: "center center"
                }), i.scrollTrigger.disable(!0), r.scrollTrigger.disable(!0), this.isRTL(), (e = document.querySelectorAll(".map-wrap .legend .close")) && e.forEach(function(e, t) {
                    e.addEventListener("click", function(e) {
                        e = e.target.parentNode.closest(".map-wrap");
                        Ci.to(e.querySelector(".legend"), {
                            opacity: 0,
                            display: "none",
                            duration: 1
                        }), e.querySelector(".info").classList = "info"
                    })
                }), document.querySelectorAll(".showmobilitymap").forEach(function(e, t) {
                    e.addEventListener("click", function(e) {
                        e.preventDefault(), n.paused(!0), i.paused(!0), n.scrollTrigger.disable(!0), i.scrollTrigger.disable(!0), e.target.disabled = !0, setTimeout(function() {
                            e.target.disabled = !1
                        }.bind(e), 750), document.querySelectorAll(".amp-section8 .map-wrap").forEach(function(e, t) {
                            e.style.display = "none"
                        }), document.querySelectorAll(".amp-section8 .toolbar .toggle").forEach(function(e, t) {
                            e.classList = "toggle"
                        }), document.getElementById("map_toggle_mobility").classList = "heading3 tab-button active", Ci.fromTo(".amp-section8 .map-mobility", {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1,
                            display: "block"
                        }), r.paused(!1), r.scrollTrigger.enable()
                    })
                }))
            }
        }, {
            key: "textCounters",
            value: function(e) {}
        }]) && kl(t.prototype, n), i && kl(t, i), e
    }();
    window.addEventListener("DOMContentLoaded", function(e) {
        try {
            new Sl
        } catch (e) {
            console.error(e)
        }
    }), window.AlulaMP_Base = Sl
}, function(e, t, n) {
    var i, r;
    ! function() {
        "use strict";
        i = [n(4)], void 0 === (r = "function" == typeof(r = function(c) {
            "use strict";
            var s = window.Slick || {},
                s;
            (s = function() {
                var r = 0;

                function e(e, t) {
                    var n = this,
                        i;
                    n.defaults = {
                        accessibility: true,
                        adaptiveHeight: false,
                        appendArrows: c(e),
                        appendDots: c(e),
                        arrows: true,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: false,
                        autoplaySpeed: 3e3,
                        centerMode: false,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function(e, t) {
                            return c('<button type="button" />').text(t + 1)
                        },
                        dots: false,
                        dotsClass: "slick-dots",
                        draggable: true,
                        easing: "linear",
                        edgeFriction: .35,
                        fade: false,
                        focusOnSelect: false,
                        focusOnChange: false,
                        infinite: true,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: false,
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        pauseOnDotsHover: false,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: false,
                        slide: "",
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
                        zIndex: 1e3
                    };
                    n.initials = {
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
                    c.extend(n, n.initials);
                    n.activeBreakpoint = null;
                    n.animType = null;
                    n.animProp = null;
                    n.breakpoints = [];
                    n.breakpointSettings = [];
                    n.cssTransitions = false;
                    n.focussed = false;
                    n.interrupted = false;
                    n.hidden = "hidden";
                    n.paused = true;
                    n.positionProp = null;
                    n.respondTo = null;
                    n.rowCount = 1;
                    n.shouldClick = true;
                    n.$slider = c(e);
                    n.$slidesCache = null;
                    n.transformType = null;
                    n.transitionType = null;
                    n.visibilityChange = "visibilitychange";
                    n.windowWidth = 0;
                    n.windowTimer = null;
                    i = c(e).data("slick") || {};
                    n.options = c.extend({}, n.defaults, t, i);
                    n.currentSlide = n.options.initialSlide;
                    n.originalSettings = n.options;
                    if (typeof document.mozHidden !== "undefined") {
                        n.hidden = "mozHidden";
                        n.visibilityChange = "mozvisibilitychange"
                    } else if (typeof document.webkitHidden !== "undefined") {
                        n.hidden = "webkitHidden";
                        n.visibilityChange = "webkitvisibilitychange"
                    }
                    n.autoPlay = c.proxy(n.autoPlay, n);
                    n.autoPlayClear = c.proxy(n.autoPlayClear, n);
                    n.autoPlayIterator = c.proxy(n.autoPlayIterator, n);
                    n.changeSlide = c.proxy(n.changeSlide, n);
                    n.clickHandler = c.proxy(n.clickHandler, n);
                    n.selectHandler = c.proxy(n.selectHandler, n);
                    n.setPosition = c.proxy(n.setPosition, n);
                    n.swipeHandler = c.proxy(n.swipeHandler, n);
                    n.dragHandler = c.proxy(n.dragHandler, n);
                    n.keyHandler = c.proxy(n.keyHandler, n);
                    n.instanceUid = r++;
                    n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
                    n.registerBreakpoints();
                    n.init(true)
                }
                return e
            }()).prototype.activateADA = function() {
                var e = this;
                e.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }, s.prototype.addSlide = s.prototype.slickAdd = function(e, t, n) {
                var i = this;
                if (typeof t === "boolean") {
                    n = t;
                    t = null
                } else if (t < 0 || t >= i.slideCount) return false;
                i.unload();
                if (typeof t === "number")
                    if (t === 0 && i.$slides.length === 0) c(e).appendTo(i.$slideTrack);
                    else if (n) c(e).insertBefore(i.$slides.eq(t));
                else c(e).insertAfter(i.$slides.eq(t));
                else if (n === true) c(e).prependTo(i.$slideTrack);
                else c(e).appendTo(i.$slideTrack);
                i.$slides = i.$slideTrack.children(this.options.slide);
                i.$slideTrack.children(this.options.slide).detach();
                i.$slideTrack.append(i.$slides);
                i.$slides.each(function(e, t) {
                    c(t).attr("data-slick-index", e)
                });
                i.$slidesCache = i.$slides;
                i.reinit()
            }, s.prototype.animateHeight = function() {
                var e = this;
                if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === true && e.options.vertical === false) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(true);
                    e.$list.animate({
                        height: t
                    }, e.options.speed)
                }
            }, s.prototype.animateSlide = function(e, t) {
                var n = {},
                    i = this;
                i.animateHeight();
                if (i.options.rtl === true && i.options.vertical === false) e = -e;
                if (i.transformsEnabled === false)
                    if (i.options.vertical === false) i.$slideTrack.animate({
                        left: e
                    }, i.options.speed, i.options.easing, t);
                    else i.$slideTrack.animate({
                        top: e
                    }, i.options.speed, i.options.easing, t);
                else if (i.cssTransitions === false) {
                    if (i.options.rtl === true) i.currentLeft = -i.currentLeft;
                    c({
                        animStart: i.currentLeft
                    }).animate({
                        animStart: e
                    }, {
                        duration: i.options.speed,
                        easing: i.options.easing,
                        step: function(e) {
                            e = Math.ceil(e);
                            if (i.options.vertical === false) {
                                n[i.animType] = "translate(" + e + "px, 0px)";
                                i.$slideTrack.css(n)
                            } else {
                                n[i.animType] = "translate(0px," + e + "px)";
                                i.$slideTrack.css(n)
                            }
                        },
                        complete: function() {
                            if (t) t.call()
                        }
                    })
                } else {
                    i.applyTransition();
                    e = Math.ceil(e);
                    if (i.options.vertical === false) n[i.animType] = "translate3d(" + e + "px, 0px, 0px)";
                    else n[i.animType] = "translate3d(0px," + e + "px, 0px)";
                    i.$slideTrack.css(n);
                    if (t) setTimeout(function() {
                        i.disableTransition();
                        t.call()
                    }, i.options.speed)
                }
            }, s.prototype.getNavTarget = function() {
                var e = this,
                    t = e.options.asNavFor;
                if (t && t !== null) t = c(t).not(e.$slider);
                return t
            }, s.prototype.asNavFor = function(t) {
                var e = this,
                    n = e.getNavTarget();
                if (n !== null && typeof n === "object") n.each(function() {
                    var e = c(this).slick("getSlick");
                    if (!e.unslicked) e.slideHandler(t, true)
                })
            }, s.prototype.applyTransition = function(e) {
                var t = this,
                    n = {};
                if (t.options.fade === false) n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase;
                else n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase;
                if (t.options.fade === false) t.$slideTrack.css(n);
                else t.$slides.eq(e).css(n)
            }, s.prototype.autoPlay = function() {
                var e = this;
                e.autoPlayClear();
                if (e.slideCount > e.options.slidesToShow) e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)
            }, s.prototype.autoPlayClear = function() {
                var e = this;
                if (e.autoPlayTimer) clearInterval(e.autoPlayTimer)
            }, s.prototype.autoPlayIterator = function() {
                var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                if (!e.paused && !e.interrupted && !e.focussed) {
                    if (e.options.infinite === false)
                        if (e.direction === 1 && e.currentSlide + 1 === e.slideCount - 1) e.direction = 0;
                        else if (e.direction === 0) {
                        t = e.currentSlide - e.options.slidesToScroll;
                        if (e.currentSlide - 1 === 0) e.direction = 1
                    }
                    e.slideHandler(t)
                }
            }, s.prototype.buildArrows = function() {
                var e = this;
                if (e.options.arrows === true) {
                    e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow");
                    e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow");
                    if (e.slideCount > e.options.slidesToShow) {
                        e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex");
                        if (e.htmlExpr.test(e.options.prevArrow)) e.$prevArrow.prependTo(e.options.appendArrows);
                        if (e.htmlExpr.test(e.options.nextArrow)) e.$nextArrow.appendTo(e.options.appendArrows);
                        if (e.options.infinite !== true) e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")
                    } else e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                        "aria-disabled": "true",
                        tabindex: "-1"
                    })
                }
            }, s.prototype.buildDots = function() {
                var e = this,
                    t, n;
                if (e.options.dots === true && e.slideCount > e.options.slidesToShow) {
                    e.$slider.addClass("slick-dotted");
                    n = c("<ul />").addClass(e.options.dotsClass);
                    for (t = 0; t <= e.getDotCount(); t += 1) n.append(c("<li />").append(e.options.customPaging.call(this, e, t)));
                    e.$dots = n.appendTo(e.options.appendDots);
                    e.$dots.find("li").first().addClass("slick-active")
                }
            }, s.prototype.buildOut = function() {
                var e = this;
                e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide");
                e.slideCount = e.$slides.length;
                e.$slides.each(function(e, t) {
                    c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
                });
                e.$slider.addClass("slick-slider");
                e.$slideTrack = e.slideCount === 0 ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent();
                e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent();
                e.$slideTrack.css("opacity", 0);
                if (e.options.centerMode === true || e.options.swipeToSlide === true) e.options.slidesToScroll = 1;
                c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading");
                e.setupInfinite();
                e.buildArrows();
                e.buildDots();
                e.updateDots();
                e.setSlideClasses(typeof e.currentSlide === "number" ? e.currentSlide : 0);
                if (e.options.draggable === true) e.$list.addClass("draggable")
            }, s.prototype.buildRows = function() {
                var e = this,
                    t, n, i, r, o, s, a;
                r = document.createDocumentFragment();
                s = e.$slider.children();
                if (e.options.rows > 0) {
                    a = e.options.slidesPerRow * e.options.rows;
                    o = Math.ceil(s.length / a);
                    for (t = 0; t < o; t++) {
                        var l = document.createElement("div");
                        for (n = 0; n < e.options.rows; n++) {
                            var u = document.createElement("div");
                            for (i = 0; i < e.options.slidesPerRow; i++) {
                                var c = t * a + (n * e.options.slidesPerRow + i);
                                if (s.get(c)) u.appendChild(s.get(c))
                            }
                            l.appendChild(u)
                        }
                        r.appendChild(l)
                    }
                    e.$slider.empty().append(r);
                    e.$slider.children().children().children().css({
                        width: 100 / e.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, s.prototype.checkResponsive = function(e, t) {
                var n = this,
                    i, r, o, s = false;
                var a = n.$slider.width();
                var l = window.innerWidth || c(window).width();
                if (n.respondTo === "window") o = l;
                else if (n.respondTo === "slider") o = a;
                else if (n.respondTo === "min") o = Math.min(l, a);
                if (n.options.responsive && n.options.responsive.length && n.options.responsive !== null) {
                    r = null;
                    for (i in n.breakpoints)
                        if (n.breakpoints.hasOwnProperty(i))
                            if (n.originalSettings.mobileFirst === false) {
                                if (o < n.breakpoints[i]) r = n.breakpoints[i]
                            } else if (o > n.breakpoints[i]) r = n.breakpoints[i];
                    if (r !== null)
                        if (n.activeBreakpoint !== null) {
                            if (r !== n.activeBreakpoint || t) {
                                n.activeBreakpoint = r;
                                if (n.breakpointSettings[r] === "unslick") n.unslick(r);
                                else {
                                    n.options = c.extend({}, n.originalSettings, n.breakpointSettings[r]);
                                    if (e === true) n.currentSlide = n.options.initialSlide;
                                    n.refresh(e)
                                }
                                s = r
                            }
                        } else {
                            n.activeBreakpoint = r;
                            if (n.breakpointSettings[r] === "unslick") n.unslick(r);
                            else {
                                n.options = c.extend({}, n.originalSettings, n.breakpointSettings[r]);
                                if (e === true) n.currentSlide = n.options.initialSlide;
                                n.refresh(e)
                            }
                            s = r
                        }
                    else if (n.activeBreakpoint !== null) {
                        n.activeBreakpoint = null;
                        n.options = n.originalSettings;
                        if (e === true) n.currentSlide = n.options.initialSlide;
                        n.refresh(e);
                        s = r
                    }
                    if (!e && s !== false) n.$slider.trigger("breakpoint", [n, s])
                }
            }, s.prototype.changeSlide = function(e, t) {
                var n = this,
                    i = c(e.currentTarget),
                    r, o, s;
                if (i.is("a")) e.preventDefault();
                if (!i.is("li")) i = i.closest("li");
                s = n.slideCount % n.options.slidesToScroll !== 0;
                r = s ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll;
                switch (e.data.message) {
                    case "previous":
                        o = r === 0 ? n.options.slidesToScroll : n.options.slidesToShow - r;
                        if (n.slideCount > n.options.slidesToShow) n.slideHandler(n.currentSlide - o, false, t);
                        break;
                    case "next":
                        o = r === 0 ? n.options.slidesToScroll : r;
                        if (n.slideCount > n.options.slidesToShow) n.slideHandler(n.currentSlide + o, false, t);
                        break;
                    case "index":
                        var a = e.data.index === 0 ? 0 : e.data.index || i.index() * n.options.slidesToScroll;
                        n.slideHandler(n.checkNavigable(a), false, t);
                        i.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, s.prototype.checkNavigable = function(e) {
                var t = this,
                    n, i;
                n = t.getNavigableIndexes();
                i = 0;
                if (e > n[n.length - 1]) e = n[n.length - 1];
                else
                    for (var r in n) {
                        if (e < n[r]) {
                            e = i;
                            break
                        }
                        i = n[r]
                    }
                return e
            }, s.prototype.cleanUpEvents = function() {
                var e = this;
                if (e.options.dots && e.$dots !== null) {
                    c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, true)).off("mouseleave.slick", c.proxy(e.interrupt, e, false));
                    if (e.options.accessibility === true) e.$dots.off("keydown.slick", e.keyHandler)
                }
                e.$slider.off("focus.slick blur.slick");
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
                    e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide);
                    e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide);
                    if (e.options.accessibility === true) {
                        e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler);
                        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler)
                    }
                }
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler);
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler);
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler);
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler);
                e.$list.off("click.slick", e.clickHandler);
                c(document).off(e.visibilityChange, e.visibility);
                e.cleanUpSlideEvents();
                if (e.options.accessibility === true) e.$list.off("keydown.slick", e.keyHandler);
                if (e.options.focusOnSelect === true) c(e.$slideTrack).children().off("click.slick", e.selectHandler);
                c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange);
                c(window).off("resize.slick.slick-" + e.instanceUid, e.resize);
                c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault);
                c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
            }, s.prototype.cleanUpSlideEvents = function() {
                var e = this;
                e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, true));
                e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, false))
            }, s.prototype.cleanUpRows = function() {
                var e = this,
                    t;
                if (e.options.rows > 0) {
                    t = e.$slides.children().children();
                    t.removeAttr("style");
                    e.$slider.empty().append(t)
                }
            }, s.prototype.clickHandler = function(e) {
                var t = this;
                if (t.shouldClick === false) {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    e.preventDefault()
                }
            }, s.prototype.destroy = function(e) {
                var t = this;
                t.autoPlayClear();
                t.touchObject = {};
                t.cleanUpEvents();
                c(".slick-cloned", t.$slider).detach();
                if (t.$dots) t.$dots.remove();
                if (t.$prevArrow && t.$prevArrow.length) {
                    t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                    if (t.htmlExpr.test(t.options.prevArrow)) t.$prevArrow.remove()
                }
                if (t.$nextArrow && t.$nextArrow.length) {
                    t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", "");
                    if (t.htmlExpr.test(t.options.nextArrow)) t.$nextArrow.remove()
                }
                if (t.$slides) {
                    t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                        c(this).attr("style", c(this).data("originalStyling"))
                    });
                    t.$slideTrack.children(this.options.slide).detach();
                    t.$slideTrack.detach();
                    t.$list.detach();
                    t.$slider.append(t.$slides)
                }
                t.cleanUpRows();
                t.$slider.removeClass("slick-slider");
                t.$slider.removeClass("slick-initialized");
                t.$slider.removeClass("slick-dotted");
                t.unslicked = true;
                if (!e) t.$slider.trigger("destroy", [t])
            }, s.prototype.disableTransition = function(e) {
                var t = this,
                    n = {};
                n[t.transitionType] = "";
                if (t.options.fade === false) t.$slideTrack.css(n);
                else t.$slides.eq(e).css(n)
            }, s.prototype.fadeSlide = function(e, t) {
                var n = this;
                if (n.cssTransitions === false) {
                    n.$slides.eq(e).css({
                        zIndex: n.options.zIndex
                    });
                    n.$slides.eq(e).animate({
                        opacity: 1
                    }, n.options.speed, n.options.easing, t)
                } else {
                    n.applyTransition(e);
                    n.$slides.eq(e).css({
                        opacity: 1,
                        zIndex: n.options.zIndex
                    });
                    if (t) setTimeout(function() {
                        n.disableTransition(e);
                        t.call()
                    }, n.options.speed)
                }
            }, s.prototype.fadeSlideOut = function(e) {
                var t = this;
                if (t.cssTransitions === false) t.$slides.eq(e).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing);
                else {
                    t.applyTransition(e);
                    t.$slides.eq(e).css({
                        opacity: 0,
                        zIndex: t.options.zIndex - 2
                    })
                }
            }, s.prototype.filterSlides = s.prototype.slickFilter = function(e) {
                var t = this;
                if (e !== null) {
                    t.$slidesCache = t.$slides;
                    t.unload();
                    t.$slideTrack.children(this.options.slide).detach();
                    t.$slidesCache.filter(e).appendTo(t.$slideTrack);
                    t.reinit()
                }
            }, s.prototype.focusHandler = function() {
                var n = this;
                n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(e) {
                    e.stopImmediatePropagation();
                    var t = c(this);
                    setTimeout(function() {
                        if (n.options.pauseOnFocus) {
                            n.focussed = t.is(":focus");
                            n.autoPlay()
                        }
                    }, 0)
                })
            }, s.prototype.getCurrent = s.prototype.slickCurrentSlide = function() {
                var e = this;
                return e.currentSlide
            }, s.prototype.getDotCount = function() {
                var e = this;
                var t = 0;
                var n = 0;
                var i = 0;
                if (e.options.infinite === true)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else
                        while (t < e.slideCount) {
                            ++i;
                            t = n + e.options.slidesToScroll;
                            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
                        } else if (e.options.centerMode === true) i = e.slideCount;
                        else if (!e.options.asNavFor) i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                else
                    while (t < e.slideCount) {
                        ++i;
                        t = n + e.options.slidesToScroll;
                        n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
                    }
                return i - 1
            }, s.prototype.getLeft = function(e) {
                var t = this,
                    n, i, r = 0,
                    o, s;
                t.slideOffset = 0;
                i = t.$slides.first().outerHeight(true);
                if (t.options.infinite === true) {
                    if (t.slideCount > t.options.slidesToShow) {
                        t.slideOffset = t.slideWidth * t.options.slidesToShow * -1;
                        s = -1;
                        if (t.options.vertical === true && t.options.centerMode === true)
                            if (t.options.slidesToShow === 2) s = -1.5;
                            else if (t.options.slidesToShow === 1) s = -2;
                        r = i * t.options.slidesToShow * s
                    }
                    if (t.slideCount % t.options.slidesToScroll !== 0)
                        if (e + t.options.slidesToScroll > t.slideCount && t.slideCount > t.options.slidesToShow)
                            if (e > t.slideCount) {
                                t.slideOffset = (t.options.slidesToShow - (e - t.slideCount)) * t.slideWidth * -1;
                                r = (t.options.slidesToShow - (e - t.slideCount)) * i * -1
                            } else {
                                t.slideOffset = t.slideCount % t.options.slidesToScroll * t.slideWidth * -1;
                                r = t.slideCount % t.options.slidesToScroll * i * -1
                            }
                } else if (e + t.options.slidesToShow > t.slideCount) {
                    t.slideOffset = (e + t.options.slidesToShow - t.slideCount) * t.slideWidth;
                    r = (e + t.options.slidesToShow - t.slideCount) * i
                }
                if (t.slideCount <= t.options.slidesToShow) {
                    t.slideOffset = 0;
                    r = 0
                }
                if (t.options.centerMode === true && t.slideCount <= t.options.slidesToShow) t.slideOffset = t.slideWidth * Math.floor(t.options.slidesToShow) / 2 - t.slideWidth * t.slideCount / 2;
                else if (t.options.centerMode === true && t.options.infinite === true) t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2) - t.slideWidth;
                else if (t.options.centerMode === true) {
                    t.slideOffset = 0;
                    t.slideOffset += t.slideWidth * Math.floor(t.options.slidesToShow / 2)
                }
                if (t.options.vertical === false) n = e * t.slideWidth * -1 + t.slideOffset;
                else n = e * i * -1 + r;
                if (t.options.variableWidth === true) {
                    if (t.slideCount <= t.options.slidesToShow || t.options.infinite === false) o = t.$slideTrack.children(".slick-slide").eq(e);
                    else o = t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow);
                    if (t.options.rtl === true)
                        if (o[0]) n = (t.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1;
                        else n = 0;
                    else n = o[0] ? o[0].offsetLeft * -1 : 0;
                    if (t.options.centerMode === true) {
                        if (t.slideCount <= t.options.slidesToShow || t.options.infinite === false) o = t.$slideTrack.children(".slick-slide").eq(e);
                        else o = t.$slideTrack.children(".slick-slide").eq(e + t.options.slidesToShow + 1);
                        if (t.options.rtl === true)
                            if (o[0]) n = (t.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1;
                            else n = 0;
                        else n = o[0] ? o[0].offsetLeft * -1 : 0;
                        n += (t.$list.width() - o.outerWidth()) / 2
                    }
                }
                return n
            }, s.prototype.getOption = s.prototype.slickGetOption = function(e) {
                var t = this;
                return t.options[e]
            }, s.prototype.getNavigableIndexes = function() {
                var e = this,
                    t = 0,
                    n = 0,
                    i = [],
                    r;
                if (e.options.infinite === false) r = e.slideCount;
                else {
                    t = e.options.slidesToScroll * -1;
                    n = e.options.slidesToScroll * -1;
                    r = e.slideCount * 2
                }
                while (t < r) {
                    i.push(t);
                    t = n + e.options.slidesToScroll;
                    n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
                }
                return i
            }, s.prototype.getSlick = function() {
                return this
            }, s.prototype.getSlideCount = function() {
                var n = this,
                    e, i, r;
                r = n.options.centerMode === true ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0;
                if (n.options.swipeToSlide === true) {
                    n.$slideTrack.find(".slick-slide").each(function(e, t) {
                        if (t.offsetLeft - r + c(t).outerWidth() / 2 > n.swipeLeft * -1) {
                            i = t;
                            return false
                        }
                    });
                    e = Math.abs(c(i).attr("data-slick-index") - n.currentSlide) || 1;
                    return e
                } else return n.options.slidesToScroll
            }, s.prototype.goTo = s.prototype.slickGoTo = function(e, t) {
                var n = this;
                n.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t)
            }, s.prototype.init = function(e) {
                var t = this;
                if (!c(t.$slider).hasClass("slick-initialized")) {
                    c(t.$slider).addClass("slick-initialized");
                    t.buildRows();
                    t.buildOut();
                    t.setProps();
                    t.startLoad();
                    t.loadSlider();
                    t.initializeEvents();
                    t.updateArrows();
                    t.updateDots();
                    t.checkResponsive(true);
                    t.focusHandler()
                }
                if (e) t.$slider.trigger("init", [t]);
                if (t.options.accessibility === true) t.initADA();
                if (t.options.autoplay) {
                    t.paused = false;
                    t.autoPlay()
                }
            }, s.prototype.initADA = function() {
                var i = this,
                    n = Math.ceil(i.slideCount / i.options.slidesToShow),
                    r = i.getNavigableIndexes().filter(function(e) {
                        return e >= 0 && e < i.slideCount
                    });
                i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                });
                if (i.$dots !== null) {
                    i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
                        var t = r.indexOf(e);
                        c(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + i.instanceUid + e,
                            tabindex: -1
                        });
                        if (t !== -1) {
                            var n = "slick-slide-control" + i.instanceUid + t;
                            if (c("#" + n).length) c(this).attr({
                                "aria-describedby": n
                            })
                        }
                    });
                    i.$dots.attr("role", "tablist").find("li").each(function(e) {
                        var t = r[e];
                        c(this).attr({
                            role: "presentation"
                        });
                        c(this).find("button").first().attr({
                            role: "tab",
                            id: "slick-slide-control" + i.instanceUid + e,
                            "aria-controls": "slick-slide" + i.instanceUid + t,
                            "aria-label": e + 1 + " of " + n,
                            "aria-selected": null,
                            tabindex: "-1"
                        })
                    }).eq(i.currentSlide).find("button").attr({
                        "aria-selected": "true",
                        tabindex: "0"
                    }).end()
                }
                for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++)
                    if (i.options.focusOnChange) i.$slides.eq(e).attr({
                        tabindex: "0"
                    });
                    else i.$slides.eq(e).removeAttr("tabindex");
                i.activateADA()
            }, s.prototype.initArrowEvents = function() {
                var e = this;
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
                    e.$prevArrow.off("click.slick").on("click.slick", {
                        message: "previous"
                    }, e.changeSlide);
                    e.$nextArrow.off("click.slick").on("click.slick", {
                        message: "next"
                    }, e.changeSlide);
                    if (e.options.accessibility === true) {
                        e.$prevArrow.on("keydown.slick", e.keyHandler);
                        e.$nextArrow.on("keydown.slick", e.keyHandler)
                    }
                }
            }, s.prototype.initDotEvents = function() {
                var e = this;
                if (e.options.dots === true && e.slideCount > e.options.slidesToShow) {
                    c("li", e.$dots).on("click.slick", {
                        message: "index"
                    }, e.changeSlide);
                    if (e.options.accessibility === true) e.$dots.on("keydown.slick", e.keyHandler)
                }
                if (e.options.dots === true && e.options.pauseOnDotsHover === true && e.slideCount > e.options.slidesToShow) c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, true)).on("mouseleave.slick", c.proxy(e.interrupt, e, false))
            }, s.prototype.initSlideEvents = function() {
                var e = this;
                if (e.options.pauseOnHover) {
                    e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, true));
                    e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, false))
                }
            }, s.prototype.initializeEvents = function() {
                var e = this;
                e.initArrowEvents();
                e.initDotEvents();
                e.initSlideEvents();
                e.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, e.swipeHandler);
                e.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, e.swipeHandler);
                e.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, e.swipeHandler);
                e.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, e.swipeHandler);
                e.$list.on("click.slick", e.clickHandler);
                c(document).on(e.visibilityChange, c.proxy(e.visibility, e));
                if (e.options.accessibility === true) e.$list.on("keydown.slick", e.keyHandler);
                if (e.options.focusOnSelect === true) c(e.$slideTrack).children().on("click.slick", e.selectHandler);
                c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e));
                c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e));
                c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault);
                c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition);
                c(e.setPosition)
            }, s.prototype.initUI = function() {
                var e = this;
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
                    e.$prevArrow.show();
                    e.$nextArrow.show()
                }
                if (e.options.dots === true && e.slideCount > e.options.slidesToShow) e.$dots.show()
            }, s.prototype.keyHandler = function(e) {
                var t = this;
                if (!e.target.tagName.match("TEXTAREA|INPUT|SELECT"))
                    if (e.keyCode === 37 && t.options.accessibility === true) t.changeSlide({
                        data: {
                            message: t.options.rtl === true ? "next" : "previous"
                        }
                    });
                    else if (e.keyCode === 39 && t.options.accessibility === true) t.changeSlide({
                    data: {
                        message: t.options.rtl === true ? "previous" : "next"
                    }
                })
            }, s.prototype.lazyLoad = function() {
                var o = this,
                    e, t, n, i;

                function r(e) {
                    c("img[data-lazy]", e).each(function() {
                        var e = c(this),
                            t = c(this).attr("data-lazy"),
                            n = c(this).attr("data-srcset"),
                            i = c(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                            r = document.createElement("img");
                        r.onload = function() {
                            e.animate({
                                opacity: 0
                            }, 100, function() {
                                if (n) {
                                    e.attr("srcset", n);
                                    if (i) e.attr("sizes", i)
                                }
                                e.attr("src", t).animate({
                                    opacity: 1
                                }, 200, function() {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                });
                                o.$slider.trigger("lazyLoaded", [o, e, t])
                            })
                        };
                        r.onerror = function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                            o.$slider.trigger("lazyLoadError", [o, e, t])
                        };
                        r.src = t
                    })
                }
                if (o.options.centerMode === true)
                    if (o.options.infinite === true) {
                        n = o.currentSlide + (o.options.slidesToShow / 2 + 1);
                        i = n + o.options.slidesToShow + 2
                    } else {
                        n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1));
                        i = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide
                    }
                else {
                    n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide;
                    i = Math.ceil(n + o.options.slidesToShow);
                    if (o.options.fade === true) {
                        if (n > 0) n--;
                        if (i <= o.slideCount) i++
                    }
                }
                e = o.$slider.find(".slick-slide").slice(n, i);
                if (o.options.lazyLoad === "anticipated") {
                    var s = n - 1,
                        a = i,
                        l = o.$slider.find(".slick-slide");
                    for (var u = 0; u < o.options.slidesToScroll; u++) {
                        if (s < 0) s = o.slideCount - 1;
                        e = e.add(l.eq(s));
                        e = e.add(l.eq(a));
                        s--;
                        a++
                    }
                }
                r(e);
                if (o.slideCount <= o.options.slidesToShow) {
                    t = o.$slider.find(".slick-slide");
                    r(t)
                } else if (o.currentSlide >= o.slideCount - o.options.slidesToShow) {
                    t = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow);
                    r(t)
                } else if (o.currentSlide === 0) {
                    t = o.$slider.find(".slick-cloned").slice(o.options.slidesToShow * -1);
                    r(t)
                }
            }, s.prototype.loadSlider = function() {
                var e = this;
                e.setPosition();
                e.$slideTrack.css({
                    opacity: 1
                });
                e.$slider.removeClass("slick-loading");
                e.initUI();
                if (e.options.lazyLoad === "progressive") e.progressiveLazyLoad()
            }, s.prototype.next = s.prototype.slickNext = function() {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, s.prototype.orientationChange = function() {
                var e = this;
                e.checkResponsive();
                e.setPosition()
            }, s.prototype.pause = s.prototype.slickPause = function() {
                var e = this;
                e.autoPlayClear();
                e.paused = true
            }, s.prototype.play = s.prototype.slickPlay = function() {
                var e = this;
                e.autoPlay();
                e.options.autoplay = true;
                e.paused = false;
                e.focussed = false;
                e.interrupted = false
            }, s.prototype.postSlide = function(e) {
                var t = this;
                if (!t.unslicked) {
                    t.$slider.trigger("afterChange", [t, e]);
                    t.animating = false;
                    if (t.slideCount > t.options.slidesToShow) t.setPosition();
                    t.swipeLeft = null;
                    if (t.options.autoplay) t.autoPlay();
                    if (t.options.accessibility === true) {
                        t.initADA();
                        if (t.options.focusOnChange) {
                            var n = c(t.$slides.get(t.currentSlide));
                            n.attr("tabindex", 0).focus()
                        }
                    }
                }
            }, s.prototype.prev = s.prototype.slickPrev = function() {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, s.prototype.preventDefault = function(e) {
                e.preventDefault()
            }, s.prototype.progressiveLazyLoad = function(e) {
                e = e || 1;
                var t = this,
                    n = c("img[data-lazy]", t.$slider),
                    i, r, o, s, a;
                if (n.length) {
                    i = n.first();
                    r = i.attr("data-lazy");
                    o = i.attr("data-srcset");
                    s = i.attr("data-sizes") || t.$slider.attr("data-sizes");
                    a = document.createElement("img");
                    a.onload = function() {
                        if (o) {
                            i.attr("srcset", o);
                            if (s) i.attr("sizes", s)
                        }
                        i.attr("src", r).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                        if (t.options.adaptiveHeight === true) t.setPosition();
                        t.$slider.trigger("lazyLoaded", [t, i, r]);
                        t.progressiveLazyLoad()
                    };
                    a.onerror = function() {
                        if (e < 3) setTimeout(function() {
                            t.progressiveLazyLoad(e + 1)
                        }, 500);
                        else {
                            i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error");
                            t.$slider.trigger("lazyLoadError", [t, i, r]);
                            t.progressiveLazyLoad()
                        }
                    };
                    a.src = r
                } else t.$slider.trigger("allImagesLoaded", [t])
            }, s.prototype.refresh = function(e) {
                var t = this,
                    n, i;
                i = t.slideCount - t.options.slidesToShow;
                if (!t.options.infinite && t.currentSlide > i) t.currentSlide = i;
                if (t.slideCount <= t.options.slidesToShow) t.currentSlide = 0;
                n = t.currentSlide;
                t.destroy(true);
                c.extend(t, t.initials, {
                    currentSlide: n
                });
                t.init();
                if (!e) t.changeSlide({
                    data: {
                        message: "index",
                        index: n
                    }
                }, false)
            }, s.prototype.registerBreakpoints = function() {
                var n = this,
                    e, t, i, r = n.options.responsive || null;
                if (c.type(r) === "array" && r.length) {
                    n.respondTo = n.options.respondTo || "window";
                    for (e in r) {
                        i = n.breakpoints.length - 1;
                        if (r.hasOwnProperty(e)) {
                            t = r[e].breakpoint;
                            while (i >= 0) {
                                if (n.breakpoints[i] && n.breakpoints[i] === t) n.breakpoints.splice(i, 1);
                                i--
                            }
                            n.breakpoints.push(t);
                            n.breakpointSettings[t] = r[e].settings
                        }
                    }
                    n.breakpoints.sort(function(e, t) {
                        return n.options.mobileFirst ? e - t : t - e
                    })
                }
            }, s.prototype.reinit = function() {
                var e = this;
                e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide");
                e.slideCount = e.$slides.length;
                if (e.currentSlide >= e.slideCount && e.currentSlide !== 0) e.currentSlide = e.currentSlide - e.options.slidesToScroll;
                if (e.slideCount <= e.options.slidesToShow) e.currentSlide = 0;
                e.registerBreakpoints();
                e.setProps();
                e.setupInfinite();
                e.buildArrows();
                e.updateArrows();
                e.initArrowEvents();
                e.buildDots();
                e.updateDots();
                e.initDotEvents();
                e.cleanUpSlideEvents();
                e.initSlideEvents();
                e.checkResponsive(false, true);
                if (e.options.focusOnSelect === true) c(e.$slideTrack).children().on("click.slick", e.selectHandler);
                e.setSlideClasses(typeof e.currentSlide === "number" ? e.currentSlide : 0);
                e.setPosition();
                e.focusHandler();
                e.paused = !e.options.autoplay;
                e.autoPlay();
                e.$slider.trigger("reInit", [e])
            }, s.prototype.resize = function() {
                var e = this;
                if (c(window).width() !== e.windowWidth) {
                    clearTimeout(e.windowDelay);
                    e.windowDelay = window.setTimeout(function() {
                        e.windowWidth = c(window).width();
                        e.checkResponsive();
                        if (!e.unslicked) e.setPosition()
                    }, 50)
                }
            }, s.prototype.removeSlide = s.prototype.slickRemove = function(e, t, n) {
                var i = this;
                if (typeof e === "boolean") {
                    t = e;
                    e = t === true ? 0 : i.slideCount - 1
                } else e = t === true ? --e : e;
                if (i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return false;
                i.unload();
                if (n === true) i.$slideTrack.children().remove();
                else i.$slideTrack.children(this.options.slide).eq(e).remove();
                i.$slides = i.$slideTrack.children(this.options.slide);
                i.$slideTrack.children(this.options.slide).detach();
                i.$slideTrack.append(i.$slides);
                i.$slidesCache = i.$slides;
                i.reinit()
            }, s.prototype.setCSS = function(e) {
                var t = this,
                    n = {},
                    i, r;
                if (t.options.rtl === true) e = -e;
                i = t.positionProp == "left" ? Math.ceil(e) + "px" : "0px";
                r = t.positionProp == "top" ? Math.ceil(e) + "px" : "0px";
                n[t.positionProp] = e;
                if (t.transformsEnabled === false) t.$slideTrack.css(n);
                else {
                    n = {};
                    if (t.cssTransitions === false) {
                        n[t.animType] = "translate(" + i + ", " + r + ")";
                        t.$slideTrack.css(n)
                    } else {
                        n[t.animType] = "translate3d(" + i + ", " + r + ", 0px)";
                        t.$slideTrack.css(n)
                    }
                }
            }, s.prototype.setDimensions = function() {
                var e = this;
                if (e.options.vertical === false) {
                    if (e.options.centerMode === true) e.$list.css({
                        padding: "0px " + e.options.centerPadding
                    })
                } else {
                    e.$list.height(e.$slides.first().outerHeight(true) * e.options.slidesToShow);
                    if (e.options.centerMode === true) e.$list.css({
                        padding: e.options.centerPadding + " 0px"
                    })
                }
                e.listWidth = e.$list.width();
                e.listHeight = e.$list.height();
                if (e.options.vertical === false && e.options.variableWidth === false) {
                    e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow);
                    e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))
                } else if (e.options.variableWidth === true) e.$slideTrack.width(5e3 * e.slideCount);
                else {
                    e.slideWidth = Math.ceil(e.listWidth);
                    e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(true) * e.$slideTrack.children(".slick-slide").length))
                }
                var t = e.$slides.first().outerWidth(true) - e.$slides.first().width();
                if (e.options.variableWidth === false) e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
            }, s.prototype.setFade = function() {
                var n = this,
                    i;
                n.$slides.each(function(e, t) {
                    i = n.slideWidth * e * -1;
                    if (n.options.rtl === true) c(t).css({
                        position: "relative",
                        right: i,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    });
                    else c(t).css({
                        position: "relative",
                        left: i,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    })
                });
                n.$slides.eq(n.currentSlide).css({
                    zIndex: n.options.zIndex - 1,
                    opacity: 1
                })
            }, s.prototype.setHeight = function() {
                var e = this;
                if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === true && e.options.vertical === false) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(true);
                    e.$list.css("height", t)
                }
            }, s.prototype.setOption = s.prototype.slickSetOption = function() {
                var n = this,
                    e, t, i, r, o = false,
                    s;
                if (c.type(arguments[0]) === "object") {
                    i = arguments[0];
                    o = arguments[1];
                    s = "multiple"
                } else if (c.type(arguments[0]) === "string") {
                    i = arguments[0];
                    r = arguments[1];
                    o = arguments[2];
                    if (arguments[0] === "responsive" && c.type(arguments[1]) === "array") s = "responsive";
                    else if (typeof arguments[1] !== "undefined") s = "single"
                }
                if (s === "single") n.options[i] = r;
                else if (s === "multiple") c.each(i, function(e, t) {
                    n.options[e] = t
                });
                else if (s === "responsive")
                    for (t in r)
                        if (c.type(n.options.responsive) !== "array") n.options.responsive = [r[t]];
                        else {
                            e = n.options.responsive.length - 1;
                            while (e >= 0) {
                                if (n.options.responsive[e].breakpoint === r[t].breakpoint) n.options.responsive.splice(e, 1);
                                e--
                            }
                            n.options.responsive.push(r[t])
                        } if (o) {
                    n.unload();
                    n.reinit()
                }
            }, s.prototype.setPosition = function() {
                var e = this;
                e.setDimensions();
                e.setHeight();
                if (e.options.fade === false) e.setCSS(e.getLeft(e.currentSlide));
                else e.setFade();
                e.$slider.trigger("setPosition", [e])
            }, s.prototype.setProps = function() {
                var e = this,
                    t = document.body.style;
                e.positionProp = e.options.vertical === true ? "top" : "left";
                if (e.positionProp === "top") e.$slider.addClass("slick-vertical");
                else e.$slider.removeClass("slick-vertical");
                if (t.WebkitTransition !== undefined || t.MozTransition !== undefined || t.msTransition !== undefined)
                    if (e.options.useCSS === true) e.cssTransitions = true;
                if (e.options.fade)
                    if (typeof e.options.zIndex === "number") {
                        if (e.options.zIndex < 3) e.options.zIndex = 3
                    } else e.options.zIndex = e.defaults.zIndex;
                if (t.OTransform !== undefined) {
                    e.animType = "OTransform";
                    e.transformType = "-o-transform";
                    e.transitionType = "OTransition";
                    if (t.perspectiveProperty === undefined && t.webkitPerspective === undefined) e.animType = false
                }
                if (t.MozTransform !== undefined) {
                    e.animType = "MozTransform";
                    e.transformType = "-moz-transform";
                    e.transitionType = "MozTransition";
                    if (t.perspectiveProperty === undefined && t.MozPerspective === undefined) e.animType = false
                }
                if (t.webkitTransform !== undefined) {
                    e.animType = "webkitTransform";
                    e.transformType = "-webkit-transform";
                    e.transitionType = "webkitTransition";
                    if (t.perspectiveProperty === undefined && t.webkitPerspective === undefined) e.animType = false
                }
                if (t.msTransform !== undefined) {
                    e.animType = "msTransform";
                    e.transformType = "-ms-transform";
                    e.transitionType = "msTransition";
                    if (t.msTransform === undefined) e.animType = false
                }
                if (t.transform !== undefined && e.animType !== false) {
                    e.animType = "transform";
                    e.transformType = "transform";
                    e.transitionType = "transition"
                }
                e.transformsEnabled = e.options.useTransform && (e.animType !== null && e.animType !== false)
            }, s.prototype.setSlideClasses = function(e) {
                var t = this,
                    n, i, r, o;
                i = t.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
                t.$slides.eq(e).addClass("slick-current");
                if (t.options.centerMode === true) {
                    var s = t.options.slidesToShow % 2 === 0 ? 1 : 0;
                    n = Math.floor(t.options.slidesToShow / 2);
                    if (t.options.infinite === true) {
                        if (e >= n && e <= t.slideCount - 1 - n) t.$slides.slice(e - n + s, e + n + 1).addClass("slick-active").attr("aria-hidden", "false");
                        else {
                            r = t.options.slidesToShow + e;
                            i.slice(r - n + 1 + s, r + n + 2).addClass("slick-active").attr("aria-hidden", "false")
                        }
                        if (e === 0) i.eq(i.length - 1 - t.options.slidesToShow).addClass("slick-center");
                        else if (e === t.slideCount - 1) i.eq(t.options.slidesToShow).addClass("slick-center")
                    }
                    t.$slides.eq(e).addClass("slick-center")
                } else if (e >= 0 && e <= t.slideCount - t.options.slidesToShow) t.$slides.slice(e, e + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false");
                else if (i.length <= t.options.slidesToShow) i.addClass("slick-active").attr("aria-hidden", "false");
                else {
                    o = t.slideCount % t.options.slidesToShow;
                    r = t.options.infinite === true ? t.options.slidesToShow + e : e;
                    if (t.options.slidesToShow == t.options.slidesToScroll && t.slideCount - e < t.options.slidesToShow) i.slice(r - (t.options.slidesToShow - o), r + o).addClass("slick-active").attr("aria-hidden", "false");
                    else i.slice(r, r + t.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")
                }
                if (t.options.lazyLoad === "ondemand" || t.options.lazyLoad === "anticipated") t.lazyLoad()
            }, s.prototype.setupInfinite = function() {
                var e = this,
                    t, n, i;
                if (e.options.fade === true) e.options.centerMode = false;
                if (e.options.infinite === true && e.options.fade === false) {
                    n = null;
                    if (e.slideCount > e.options.slidesToShow) {
                        if (e.options.centerMode === true) i = e.options.slidesToShow + 1;
                        else i = e.options.slidesToShow;
                        for (t = e.slideCount; t > e.slideCount - i; t -= 1) {
                            n = t - 1;
                            c(e.$slides[n]).clone(true).attr("id", "").attr("data-slick-index", n - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned")
                        }
                        for (t = 0; t < i + e.slideCount; t += 1) {
                            n = t;
                            c(e.$slides[n]).clone(true).attr("id", "").attr("data-slick-index", n + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned")
                        }
                        e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                            c(this).attr("id", "")
                        })
                    }
                }
            }, s.prototype.interrupt = function(e) {
                var t = this;
                if (!e) t.autoPlay();
                t.interrupted = e
            }, s.prototype.selectHandler = function(e) {
                var t = this;
                var n = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide");
                var i = parseInt(n.attr("data-slick-index"));
                if (!i) i = 0;
                if (t.slideCount <= t.options.slidesToShow) {
                    t.slideHandler(i, false, true);
                    return
                }
                t.slideHandler(i)
            }, s.prototype.slideHandler = function(e, t, n) {
                var i, r, o, s, a = null,
                    l = this,
                    u;
                t = t || false;
                if (l.animating === true && l.options.waitForAnimate === true) return;
                if (l.options.fade === true && l.currentSlide === e) return;
                if (t === false) l.asNavFor(e);
                i = e;
                a = l.getLeft(i);
                s = l.getLeft(l.currentSlide);
                l.currentLeft = l.swipeLeft === null ? s : l.swipeLeft;
                if (l.options.infinite === false && l.options.centerMode === false && (e < 0 || e > l.getDotCount() * l.options.slidesToScroll)) {
                    if (l.options.fade === false) {
                        i = l.currentSlide;
                        if (n !== true && l.slideCount > l.options.slidesToShow) l.animateSlide(s, function() {
                            l.postSlide(i)
                        });
                        else l.postSlide(i)
                    }
                    return
                } else if (l.options.infinite === false && l.options.centerMode === true && (e < 0 || e > l.slideCount - l.options.slidesToScroll)) {
                    if (l.options.fade === false) {
                        i = l.currentSlide;
                        if (n !== true && l.slideCount > l.options.slidesToShow) l.animateSlide(s, function() {
                            l.postSlide(i)
                        });
                        else l.postSlide(i)
                    }
                    return
                }
                if (l.options.autoplay) clearInterval(l.autoPlayTimer);
                if (i < 0)
                    if (l.slideCount % l.options.slidesToScroll !== 0) r = l.slideCount - l.slideCount % l.options.slidesToScroll;
                    else r = l.slideCount + i;
                else if (i >= l.slideCount)
                    if (l.slideCount % l.options.slidesToScroll !== 0) r = 0;
                    else r = i - l.slideCount;
                else r = i;
                l.animating = true;
                l.$slider.trigger("beforeChange", [l, l.currentSlide, r]);
                o = l.currentSlide;
                l.currentSlide = r;
                l.setSlideClasses(l.currentSlide);
                if (l.options.asNavFor) {
                    u = l.getNavTarget();
                    u = u.slick("getSlick");
                    if (u.slideCount <= u.options.slidesToShow) u.setSlideClasses(l.currentSlide)
                }
                l.updateDots();
                l.updateArrows();
                if (l.options.fade === true) {
                    if (n !== true) {
                        l.fadeSlideOut(o);
                        l.fadeSlide(r, function() {
                            l.postSlide(r)
                        })
                    } else l.postSlide(r);
                    l.animateHeight();
                    return
                }
                if (n !== true && l.slideCount > l.options.slidesToShow) l.animateSlide(a, function() {
                    l.postSlide(r)
                });
                else l.postSlide(r)
            }, s.prototype.startLoad = function() {
                var e = this;
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow) {
                    e.$prevArrow.hide();
                    e.$nextArrow.hide()
                }
                if (e.options.dots === true && e.slideCount > e.options.slidesToShow) e.$dots.hide();
                e.$slider.addClass("slick-loading")
            }, s.prototype.swipeDirection = function() {
                var e, t, n, i, r = this;
                e = r.touchObject.startX - r.touchObject.curX;
                t = r.touchObject.startY - r.touchObject.curY;
                n = Math.atan2(t, e);
                i = Math.round(n * 180 / Math.PI);
                if (i < 0) i = 360 - Math.abs(i);
                if (i <= 45 && i >= 0) return r.options.rtl === false ? "left" : "right";
                if (i <= 360 && i >= 315) return r.options.rtl === false ? "left" : "right";
                if (i >= 135 && i <= 225) return r.options.rtl === false ? "right" : "left";
                if (r.options.verticalSwiping === true)
                    if (i >= 35 && i <= 135) return "down";
                    else return "up";
                return "vertical"
            }, s.prototype.swipeEnd = function(e) {
                var t = this,
                    n, i;
                t.dragging = false;
                t.swiping = false;
                if (t.scrolling) {
                    t.scrolling = false;
                    return false
                }
                t.interrupted = false;
                t.shouldClick = t.touchObject.swipeLength > 10 ? false : true;
                if (t.touchObject.curX === undefined) return false;
                if (t.touchObject.edgeHit === true) t.$slider.trigger("edge", [t, t.swipeDirection()]);
                if (t.touchObject.swipeLength >= t.touchObject.minSwipe) {
                    i = t.swipeDirection();
                    switch (i) {
                        case "left":
                        case "down":
                            n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide + t.getSlideCount()) : t.currentSlide + t.getSlideCount();
                            t.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            n = t.options.swipeToSlide ? t.checkNavigable(t.currentSlide - t.getSlideCount()) : t.currentSlide - t.getSlideCount();
                            t.currentDirection = 1;
                            break;
                        default:
                    }
                    if (i != "vertical") {
                        t.slideHandler(n);
                        t.touchObject = {};
                        t.$slider.trigger("swipe", [t, i])
                    }
                } else if (t.touchObject.startX !== t.touchObject.curX) {
                    t.slideHandler(t.currentSlide);
                    t.touchObject = {}
                }
            }, s.prototype.swipeHandler = function(e) {
                var t = this;
                if (t.options.swipe === false || "ontouchend" in document && t.options.swipe === false) return;
                else if (t.options.draggable === false && e.type.indexOf("mouse") !== -1) return;
                t.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== undefined ? e.originalEvent.touches.length : 1;
                t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold;
                if (t.options.verticalSwiping === true) t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold;
                switch (e.data.action) {
                    case "start":
                        t.swipeStart(e);
                        break;
                    case "move":
                        t.swipeMove(e);
                        break;
                    case "end":
                        t.swipeEnd(e);
                        break
                }
            }, s.prototype.swipeMove = function(e) {
                var t = this,
                    n = false,
                    i, r, o, s, a, l;
                a = e.originalEvent !== undefined ? e.originalEvent.touches : null;
                if (!t.dragging || t.scrolling || a && a.length !== 1) return false;
                i = t.getLeft(t.currentSlide);
                t.touchObject.curX = a !== undefined ? a[0].pageX : e.clientX;
                t.touchObject.curY = a !== undefined ? a[0].pageY : e.clientY;
                t.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(t.touchObject.curX - t.touchObject.startX, 2)));
                l = Math.round(Math.sqrt(Math.pow(t.touchObject.curY - t.touchObject.startY, 2)));
                if (!t.options.verticalSwiping && !t.swiping && l > 4) {
                    t.scrolling = true;
                    return false
                }
                if (t.options.verticalSwiping === true) t.touchObject.swipeLength = l;
                r = t.swipeDirection();
                if (e.originalEvent !== undefined && t.touchObject.swipeLength > 4) {
                    t.swiping = true;
                    e.preventDefault()
                }
                s = (t.options.rtl === false ? 1 : -1) * (t.touchObject.curX > t.touchObject.startX ? 1 : -1);
                if (t.options.verticalSwiping === true) s = t.touchObject.curY > t.touchObject.startY ? 1 : -1;
                o = t.touchObject.swipeLength;
                t.touchObject.edgeHit = false;
                if (t.options.infinite === false)
                    if (t.currentSlide === 0 && r === "right" || t.currentSlide >= t.getDotCount() && r === "left") {
                        o = t.touchObject.swipeLength * t.options.edgeFriction;
                        t.touchObject.edgeHit = true
                    } if (t.options.vertical === false) t.swipeLeft = i + o * s;
                else t.swipeLeft = i + o * (t.$list.height() / t.listWidth) * s;
                if (t.options.verticalSwiping === true) t.swipeLeft = i + o * s;
                if (t.options.fade === true || t.options.touchMove === false) return false;
                if (t.animating === true) {
                    t.swipeLeft = null;
                    return false
                }
                t.setCSS(t.swipeLeft)
            }, s.prototype.swipeStart = function(e) {
                var t = this,
                    n;
                t.interrupted = true;
                if (t.touchObject.fingerCount !== 1 || t.slideCount <= t.options.slidesToShow) {
                    t.touchObject = {};
                    return false
                }
                if (e.originalEvent !== undefined && e.originalEvent.touches !== undefined) n = e.originalEvent.touches[0];
                t.touchObject.startX = t.touchObject.curX = n !== undefined ? n.pageX : e.clientX;
                t.touchObject.startY = t.touchObject.curY = n !== undefined ? n.pageY : e.clientY;
                t.dragging = true
            }, s.prototype.unfilterSlides = s.prototype.slickUnfilter = function() {
                var e = this;
                if (e.$slidesCache !== null) {
                    e.unload();
                    e.$slideTrack.children(this.options.slide).detach();
                    e.$slidesCache.appendTo(e.$slideTrack);
                    e.reinit()
                }
            }, s.prototype.unload = function() {
                var e = this;
                c(".slick-cloned", e.$slider).remove();
                if (e.$dots) e.$dots.remove();
                if (e.$prevArrow && e.htmlExpr.test(e.options.prevArrow)) e.$prevArrow.remove();
                if (e.$nextArrow && e.htmlExpr.test(e.options.nextArrow)) e.$nextArrow.remove();
                e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, s.prototype.unslick = function(e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]);
                t.destroy()
            }, s.prototype.updateArrows = function() {
                var e = this,
                    t;
                t = Math.floor(e.options.slidesToShow / 2);
                if (e.options.arrows === true && e.slideCount > e.options.slidesToShow && !e.options.infinite) {
                    e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                    e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false");
                    if (e.currentSlide === 0) {
                        e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
                    } else if (e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === false) {
                        e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
                    } else if (e.currentSlide >= e.slideCount - 1 && e.options.centerMode === true) {
                        e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true");
                        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")
                    }
                }
            }, s.prototype.updateDots = function() {
                var e = this;
                if (e.$dots !== null) {
                    e.$dots.find("li").removeClass("slick-active").end();
                    e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active")
                }
            }, s.prototype.visibility = function() {
                var e = this;
                if (e.options.autoplay)
                    if (document[e.hidden]) e.interrupted = true;
                    else e.interrupted = false
            }, c.fn.slick = function() {
                var e = this,
                    t = arguments[0],
                    n = Array.prototype.slice.call(arguments, 1),
                    i = e.length,
                    r, o;
                for (r = 0; r < i; r++) {
                    if (typeof t == "object" || typeof t == "undefined") e[r].slick = new s(e[r], t);
                    else o = e[r].slick[t].apply(e[r].slick, n);
                    if (typeof o != "undefined") return o
                }
                return e
            }
        }) ? r.apply(t, i) : r) || (e.exports = r)
    }()
}, function(Jt, en, e) {
    var tn;
    /*!
     * jQuery JavaScript Library v3.6.0
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright OpenJS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2021-03-02T17:08Z
     */
    ! function(e, t) {
        "use strict";
        "object" == typeof Jt.exports ? Jt.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(w, e) {
        "use strict";

        function g(e) {
            return null != e && e === e.window
        }
        var t = [],
            n = Object.getPrototypeOf,
            a = t.slice,
            m = t.flat ? function(e) {
                return t.flat.call(e)
            } : function(e) {
                return t.concat.apply([], e)
            },
            l = t.push,
            r = t.indexOf,
            i = {},
            o = i.toString,
            y = i.hasOwnProperty,
            s = y.toString,
            u = s.call(Object),
            v = {},
            D = function(e) {
                return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
            },
            T = w.document,
            c = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function x(e, t, n) {
            var i, r, o = (n = n || T).createElement("script");
            if (o.text = e, t)
                for (i in c)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function h(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[o.call(e)] || "object" : typeof e
        }
        var C = function(e, t) {
            return new C.fn.init(e, t)
        };

        function d(e) {
            var t = !!e && "length" in e && e.length,
                n = h(e);
            return !D(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        C.fn = C.prototype = {
            jquery: "3.6.0",
            constructor: C,
            length: 0,
            toArray: function() {
                return a.call(this)
            },
            get: function(e) {
                return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                e = C.merge(this.constructor(), e);
                return e.prevObject = this, e
            },
            each: function(e) {
                return C.each(this, e)
            },
            map: function(n) {
                return this.pushStack(C.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(a.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(C.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length,
                    e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: l,
            sort: t.sort,
            splice: t.splice
        }, C.extend = C.fn.extend = function() {
            var e, t, n, i, r, o = arguments[0] || {},
                s = 1,
                a = arguments.length,
                l = !1;
            for ("boolean" == typeof o && (l = o, o = arguments[s] || {}, s++), "object" == typeof o || D(o) || (o = {}), s === a && (o = this, s--); s < a; s++)
                if (null != (e = arguments[s]))
                    for (t in e) n = e[t], "__proto__" !== t && o !== n && (l && n && (C.isPlainObject(n) || (i = Array.isArray(n))) ? (r = o[t], r = i && !Array.isArray(r) ? [] : i || C.isPlainObject(r) ? r : {}, i = !1, o[t] = C.extend(l, r, n)) : void 0 !== n && (o[t] = n));
            return o
        }, C.extend({
            expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                return !(!e || "[object Object]" !== o.call(e)) && (!(e = n(e)) || "function" == typeof(e = y.call(e, "constructor") && e.constructor) && s.call(e) === u)
            },
            isEmptyObject: function(e) {
                for (var t in e) return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                x(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, i = 0;
                if (d(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i])) break;
                return e
            },
            makeArray: function(e, t) {
                t = t || [];
                return null != e && (d(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : r.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) != s && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, o = 0,
                    s = [];
                if (d(e))
                    for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                else
                    for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return m(s)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            i["[object " + t + "]"] = t.toLowerCase()
        });
        var p =
            /*!
             * Sizzle CSS Selector Engine v2.3.6
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://js.foundation/
             *
             * Date: 2021-02-16
             */
            function(n) {
                function d(e, t) {
                    return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
                }

                function i() {
                    w()
                }
                var e, p, x, o, r, f, h, g, b, l, u, w, T, s, C, m, a, c, y, _ = "sizzle" + +new Date,
                    v = n.document,
                    k = 0,
                    D = 0,
                    S = le(),
                    E = le(),
                    A = le(),
                    F = le(),
                    O = function(e, t) {
                        return e === t && (u = !0), 0
                    },
                    L = {}.hasOwnProperty,
                    t = [],
                    M = t.pop,
                    P = t.push,
                    N = t.push,
                    $ = t.slice,
                    B = function(e, t) {
                        for (var n = 0, i = e.length; n < i; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    R = "[\\x20\\t\\r\\n\\f]",
                    q = "(?:\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    H = "\\[" + R + "*(" + q + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + R + "*\\]",
                    j = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                    z = new RegExp(R + "+", "g"),
                    W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                    X = new RegExp("^" + R + "*," + R + "*"),
                    Y = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                    U = new RegExp(R + "|>"),
                    V = new RegExp(j),
                    G = new RegExp("^" + q + "$"),
                    K = {
                        ID: new RegExp("^#(" + q + ")"),
                        CLASS: new RegExp("^\\.(" + q + ")"),
                        TAG: new RegExp("^(" + q + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + j),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + I + ")$", "i"),
                        needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Q = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    ee = /^[^{]+\{\s*\[native \w/,
                    te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ne = /[+~]/,
                    ie = new RegExp("\\\\[\\da-fA-F]{1,6}" + R + "?|\\\\([^\\r\\n\\f])", "g"),
                    re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    oe = function(e, t) {
                        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                    },
                    se = ve(function(e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    N.apply(t = $.call(v.childNodes), v.childNodes), t[v.childNodes.length].nodeType
                } catch (e) {
                    N = {
                        apply: t.length ? function(e, t) {
                            P.apply(e, $.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }

                function ae(t, e, n, i) {
                    var r, o, s, a, l, u, c = e && e.ownerDocument,
                        d = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== d && 9 !== d && 11 !== d) return n;
                    if (!i && (w(e), e = e || T, C)) {
                        if (11 !== d && (a = te.exec(t)))
                            if (u = a[1]) {
                                if (9 === d) {
                                    if (!(o = e.getElementById(u))) return n;
                                    if (o.id === u) return n.push(o), n
                                } else if (c && (o = c.getElementById(u)) && y(e, o) && o.id === u) return n.push(o), n
                            } else {
                                if (a[2]) return N.apply(n, e.getElementsByTagName(t)), n;
                                if ((u = a[3]) && p.getElementsByClassName && e.getElementsByClassName) return N.apply(n, e.getElementsByClassName(u)), n
                            } if (p.qsa && !F[t + " "] && (!m || !m.test(t)) && (1 !== d || "object" !== e.nodeName.toLowerCase())) {
                            if (u = t, c = e, 1 === d && (U.test(t) || Y.test(t))) {
                                for ((c = ne.test(t) && ge(e.parentNode) || e) === e && p.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, oe) : e.setAttribute("id", s = _)), r = (l = f(t)).length; r--;) l[r] = (s ? "#" + s : ":scope") + " " + ye(l[r]);
                                u = l.join(",")
                            }
                            try {
                                return N.apply(n, c.querySelectorAll(u)), n
                            } catch (e) {
                                F(t, !0)
                            } finally {
                                s === _ && e.removeAttribute("id")
                            }
                        }
                    }
                    return g(t.replace(W, "$1"), e, n, i)
                }

                function le() {
                    var n = [];

                    function i(e, t) {
                        return n.push(e + " ") > x.cacheLength && delete i[n.shift()], i[e + " "] = t
                    }
                    return i
                }

                function ue(e) {
                    return e[_] = !0, e
                }

                function ce(e) {
                    var t = T.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function de(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
                }

                function pe(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function fe(t) {
                    return function(e) {
                        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function he(s) {
                    return ue(function(o) {
                        return o = +o, ue(function(e, t) {
                            for (var n, i = s([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                        })
                    })
                }

                function ge(e) {
                    return e && void 0 !== e.getElementsByTagName && e
                }
                for (e in p = ae.support = {}, r = ae.isXML = function(e) {
                        var t = e && e.namespaceURI,
                            e = e && (e.ownerDocument || e).documentElement;
                        return !Q.test(t || e && e.nodeName || "HTML")
                    }, w = ae.setDocument = function(e) {
                        var t, e = e ? e.ownerDocument || e : v;
                        return e != T && 9 === e.nodeType && e.documentElement && (s = (T = e).documentElement, C = !r(T), v != T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), p.scope = ce(function(e) {
                            return s.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                        }), p.attributes = ce(function(e) {
                            return e.className = "i", !e.getAttribute("className")
                        }), p.getElementsByTagName = ce(function(e) {
                            return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                        }), p.getElementsByClassName = ee.test(T.getElementsByClassName), p.getById = ce(function(e) {
                            return s.appendChild(e).id = _, !T.getElementsByName || !T.getElementsByName(_).length
                        }), p.getById ? (x.filter.ID = function(e) {
                            var t = e.replace(ie, d);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }, x.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && C) {
                                e = t.getElementById(e);
                                return e ? [e] : []
                            }
                        }) : (x.filter.ID = function(e) {
                            var t = e.replace(ie, d);
                            return function(e) {
                                e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                return e && e.value === t
                            }
                        }, x.find.ID = function(e, t) {
                            if (void 0 !== t.getElementById && C) {
                                var n, i, r, o = t.getElementById(e);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                }
                                return []
                            }
                        }), x.find.TAG = p.getElementsByTagName ? function(e, t) {
                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                        } : function(e, t) {
                            var n, i = [],
                                r = 0,
                                o = t.getElementsByTagName(e);
                            if ("*" !== e) return o;
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }, x.find.CLASS = p.getElementsByClassName && function(e, t) {
                            if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                        }, a = [], m = [], (p.qsa = ee.test(T.querySelectorAll)) && (ce(function(e) {
                            var t;
                            s.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + R + "*name" + R + "*=" + R + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                        }), ce(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = T.createElement("input");
                            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                        })), (p.matchesSelector = ee.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ce(function(e) {
                            p.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), a.push("!=", j)
                        }), m = m.length && new RegExp(m.join("|")), a = a.length && new RegExp(a.join("|")), t = ee.test(s.compareDocumentPosition), y = t || ee.test(s.contains) ? function(e, t) {
                            var n = 9 === e.nodeType ? e.documentElement : e,
                                t = t && t.parentNode;
                            return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                        } : function(e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e) return !0;
                            return !1
                        }, O = t ? function(e, t) {
                            if (e === t) return u = !0, 0;
                            var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                            return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == T || e.ownerDocument == v && y(v, e) ? -1 : t == T || t.ownerDocument == v && y(v, t) ? 1 : l ? B(l, e) - B(l, t) : 0 : 4 & n ? -1 : 1)
                        } : function(e, t) {
                            if (e === t) return u = !0, 0;
                            var n, i = 0,
                                r = e.parentNode,
                                o = t.parentNode,
                                s = [e],
                                a = [t];
                            if (!r || !o) return e == T ? -1 : t == T ? 1 : r ? -1 : o ? 1 : l ? B(l, e) - B(l, t) : 0;
                            if (r === o) return pe(e, t);
                            for (n = e; n = n.parentNode;) s.unshift(n);
                            for (n = t; n = n.parentNode;) a.unshift(n);
                            for (; s[i] === a[i];) i++;
                            return i ? pe(s[i], a[i]) : s[i] == v ? -1 : a[i] == v ? 1 : 0
                        }), T
                    }, ae.matches = function(e, t) {
                        return ae(e, null, null, t)
                    }, ae.matchesSelector = function(e, t) {
                        if (w(e), p.matchesSelector && C && !F[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))) try {
                            var n = c.call(e, t);
                            if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                        } catch (e) {
                            F(t, !0)
                        }
                        return 0 < ae(t, T, null, [e]).length
                    }, ae.contains = function(e, t) {
                        return (e.ownerDocument || e) != T && w(e), y(e, t)
                    }, ae.attr = function(e, t) {
                        (e.ownerDocument || e) != T && w(e);
                        var n = x.attrHandle[t.toLowerCase()],
                            n = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                        return void 0 !== n ? n : p.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                    }, ae.escape = function(e) {
                        return (e + "").replace(re, oe)
                    }, ae.error = function(e) {
                        throw new Error("Syntax error, unrecognized expression: " + e)
                    }, ae.uniqueSort = function(e) {
                        var t, n = [],
                            i = 0,
                            r = 0;
                        if (u = !p.detectDuplicates, l = !p.sortStable && e.slice(0), e.sort(O), u) {
                            for (; t = e[r++];) t === e[r] && (i = n.push(r));
                            for (; i--;) e.splice(n[i], 1)
                        }
                        return l = null, e
                    }, o = ae.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            r = e.nodeType;
                        if (r) {
                            if (1 === r || 9 === r || 11 === r) {
                                if ("string" == typeof e.textContent) return e.textContent;
                                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                            } else if (3 === r || 4 === r) return e.nodeValue
                        } else
                            for (; t = e[i++];) n += o(t);
                        return n
                    }, (x = ae.selectors = {
                        cacheLength: 50,
                        createPseudo: ue,
                        match: K,
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
                            ATTR: function(e) {
                                return e[1] = e[1].replace(ie, d), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, d), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                            },
                            CHILD: function(e) {
                                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                            },
                            PSEUDO: function(e) {
                                var t, n = !e[6] && e[2];
                                return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(e) {
                                var t = e.replace(ie, d).toLowerCase();
                                return "*" === e ? function() {
                                    return !0
                                } : function(e) {
                                    return e.nodeName && e.nodeName.toLowerCase() === t
                                }
                            },
                            CLASS: function(e) {
                                var t = S[e + " "];
                                return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, function(e) {
                                    return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                })
                            },
                            ATTR: function(t, n, i) {
                                return function(e) {
                                    e = ae.attr(e, t);
                                    return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(z, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                                }
                            },
                            CHILD: function(h, e, t, g, m) {
                                var y = "nth" !== h.slice(0, 3),
                                    v = "last" !== h.slice(-4),
                                    D = "of-type" === e;
                                return 1 === g && 0 === m ? function(e) {
                                    return !!e.parentNode
                                } : function(e, t, n) {
                                    var i, r, o, s, a, l, u = y != v ? "nextSibling" : "previousSibling",
                                        c = e.parentNode,
                                        d = D && e.nodeName.toLowerCase(),
                                        p = !n && !D,
                                        f = !1;
                                    if (c) {
                                        if (y) {
                                            for (; u;) {
                                                for (s = e; s = s[u];)
                                                    if (D ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                                l = u = "only" === h && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [v ? c.firstChild : c.lastChild], v && p) {
                                            for (f = (a = (i = (r = (o = (s = c)[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === k && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (f = a = 0) || l.pop();)
                                                if (1 === s.nodeType && ++f && s === e) {
                                                    r[h] = [k, a, f];
                                                    break
                                                }
                                        } else if (!1 === (f = p ? a = (i = (r = (o = (s = e)[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] || [])[0] === k && i[1] : f))
                                            for (;
                                                (s = ++a && s && s[u] || (f = a = 0) || l.pop()) && ((D ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++f || (p && ((r = (o = s[_] || (s[_] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[h] = [k, f]), s !== e)););
                                        return (f -= m) === g || f % g == 0 && 0 <= f / g
                                    }
                                }
                            },
                            PSEUDO: function(e, o) {
                                var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                return s[_] ? s(o) : 1 < s.length ? (t = [e, e, "", o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                                    for (var n, i = s(e, o), r = i.length; r--;) e[n = B(e, i[r])] = !(t[n] = i[r])
                                }) : function(e) {
                                    return s(e, 0, t)
                                }) : s
                            }
                        },
                        pseudos: {
                            not: ue(function(e) {
                                var i = [],
                                    r = [],
                                    a = h(e.replace(W, "$1"));
                                return a[_] ? ue(function(e, t, n, i) {
                                    for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                                }) : function(e, t, n) {
                                    return i[0] = e, a(i, null, n, r), i[0] = null, !r.pop()
                                }
                            }),
                            has: ue(function(t) {
                                return function(e) {
                                    return 0 < ae(t, e).length
                                }
                            }),
                            contains: ue(function(t) {
                                return t = t.replace(ie, d),
                                    function(e) {
                                        return -1 < (e.textContent || o(e)).indexOf(t)
                                    }
                            }),
                            lang: ue(function(n) {
                                return G.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(ie, d).toLowerCase(),
                                    function(e) {
                                        var t;
                                        do {
                                            if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function(e) {
                                var t = n.location && n.location.hash;
                                return t && t.slice(1) === e.id
                            },
                            root: function(e) {
                                return e === s
                            },
                            focus: function(e) {
                                return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                            },
                            enabled: fe(!1),
                            disabled: fe(!0),
                            checked: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                            },
                            selected: function(e) {
                                return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                            },
                            empty: function(e) {
                                for (e = e.firstChild; e; e = e.nextSibling)
                                    if (e.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function(e) {
                                return !x.pseudos.empty(e)
                            },
                            header: function(e) {
                                return J.test(e.nodeName)
                            },
                            input: function(e) {
                                return Z.test(e.nodeName)
                            },
                            button: function(e) {
                                var t = e.nodeName.toLowerCase();
                                return "input" === t && "button" === e.type || "button" === t
                            },
                            text: function(e) {
                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: he(function() {
                                return [0]
                            }),
                            last: he(function(e, t) {
                                return [t - 1]
                            }),
                            eq: he(function(e, t, n) {
                                return [n < 0 ? n + t : n]
                            }),
                            even: he(function(e, t) {
                                for (var n = 0; n < t; n += 2) e.push(n);
                                return e
                            }),
                            odd: he(function(e, t) {
                                for (var n = 1; n < t; n += 2) e.push(n);
                                return e
                            }),
                            lt: he(function(e, t, n) {
                                for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                                return e
                            }),
                            gt: he(function(e, t, n) {
                                for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                return e
                            })
                        }
                    }).pseudos.nth = x.pseudos.eq, {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) x.pseudos[e] = function(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(e);
                for (e in {
                        submit: !0,
                        reset: !0
                    }) x.pseudos[e] = function(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }(e);

                function me() {}

                function ye(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i
                }

                function ve(s, e, t) {
                    var a = e.dir,
                        l = e.next,
                        u = l || a,
                        c = t && "parentNode" === u,
                        d = D++;
                    return e.first ? function(e, t, n) {
                        for (; e = e[a];)
                            if (1 === e.nodeType || c) return s(e, t, n);
                        return !1
                    } : function(e, t, n) {
                        var i, r, o = [k, d];
                        if (n) {
                            for (; e = e[a];)
                                if ((1 === e.nodeType || c) && s(e, t, n)) return !0
                        } else
                            for (; e = e[a];)
                                if (1 === e.nodeType || c)
                                    if (i = (r = e[_] || (e[_] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[a] || e;
                                    else {
                                        if ((r = i[u]) && r[0] === k && r[1] === d) return o[2] = r[2];
                                        if ((i[u] = o)[2] = s(e, t, n)) return !0
                                    } return !1
                    }
                }

                function De(r) {
                    return 1 < r.length ? function(e, t, n) {
                        for (var i = r.length; i--;)
                            if (!r[i](e, t, n)) return !1;
                        return !0
                    } : r[0]
                }

                function xe(e, t, n, i, r) {
                    for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
                    return s
                }

                function be(f, h, g, m, y, e) {
                    return m && !m[_] && (m = be(m)), y && !y[_] && (y = be(y, e)), ue(function(e, t, n, i) {
                        var r, o, s, a = [],
                            l = [],
                            u = t.length,
                            c = e || function(e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                return n
                            }(h || "*", n.nodeType ? [n] : n, []),
                            d = !f || !e && h ? c : xe(c, a, f, n, i),
                            p = g ? y || (e ? f : u || m) ? [] : t : d;
                        if (g && g(d, p, n, i), m)
                            for (r = xe(p, l), m(r, [], n, i), o = r.length; o--;)(s = r[o]) && (p[l[o]] = !(d[l[o]] = s));
                        if (e) {
                            if (y || f) {
                                if (y) {
                                    for (r = [], o = p.length; o--;)(s = p[o]) && r.push(d[o] = s);
                                    y(null, p = [], r, i)
                                }
                                for (o = p.length; o--;)(s = p[o]) && -1 < (r = y ? B(e, s) : a[o]) && (e[r] = !(t[r] = s))
                            }
                        } else p = xe(p === t ? p.splice(u, p.length) : p), y ? y(null, t, p, i) : N.apply(t, p)
                    })
                }

                function we(m, y) {
                    function e(e, t, n, i, r) {
                        var o, s, a, l = 0,
                            u = "0",
                            c = e && [],
                            d = [],
                            p = b,
                            f = e || D && x.find.TAG("*", r),
                            h = k += null == p ? 1 : Math.random() || .1,
                            g = f.length;
                        for (r && (b = t == T || t || r); u !== g && null != (o = f[u]); u++) {
                            if (D && o) {
                                for (s = 0, t || o.ownerDocument == T || (w(o), n = !C); a = m[s++];)
                                    if (a(o, t || T, n)) {
                                        i.push(o);
                                        break
                                    } r && (k = h)
                            }
                            v && ((o = !a && o) && l--, e && c.push(o))
                        }
                        if (l += u, v && u !== l) {
                            for (s = 0; a = y[s++];) a(c, d, t, n);
                            if (e) {
                                if (0 < l)
                                    for (; u--;) c[u] || d[u] || (d[u] = M.call(i));
                                d = xe(d)
                            }
                            N.apply(i, d), r && !e && 0 < d.length && 1 < l + y.length && ae.uniqueSort(i)
                        }
                        return r && (k = h, b = p), c
                    }
                    var v = 0 < y.length,
                        D = 0 < m.length;
                    return v ? ue(e) : e
                }
                return me.prototype = x.filters = x.pseudos, x.setFilters = new me, f = ae.tokenize = function(e, t) {
                    var n, i, r, o, s, a, l, u = E[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, a = [], l = x.preFilter; s;) {
                        for (o in n && !(i = X.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(r = [])), n = !1, (i = Y.exec(s)) && (n = i.shift(), r.push({
                                value: n,
                                type: i[0].replace(W, " ")
                            }), s = s.slice(n.length)), x.filter) !(i = K[o].exec(s)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
                            value: n,
                            type: o,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return t ? s.length : s ? ae.error(e) : E(e, a).slice(0)
                }, h = ae.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = A[e + " "];
                    if (!o) {
                        for (n = (t = t || f(e)).length; n--;)((o = function e(t) {
                            for (var i, n, r, o = t.length, s = x.relative[t[0].type], a = s || x.relative[" "], l = s ? 1 : 0, u = ve(function(e) {
                                    return e === i
                                }, a, !0), c = ve(function(e) {
                                    return -1 < B(i, e)
                                }, a, !0), d = [function(e, t, n) {
                                    return n = !s && (n || t !== b) || ((i = t).nodeType ? u : c)(e, t, n), i = null, n
                                }]; l < o; l++)
                                if (n = x.relative[t[l].type]) d = [ve(De(d), n)];
                                else {
                                    if ((n = x.filter[t[l].type].apply(null, t[l].matches))[_]) {
                                        for (r = ++l; r < o && !x.relative[t[r].type]; r++);
                                        return be(1 < l && De(d), 1 < l && ye(t.slice(0, l - 1).concat({
                                            value: " " === t[l - 2].type ? "*" : ""
                                        })).replace(W, "$1"), n, l < r && e(t.slice(l, r)), r < o && e(t = t.slice(r)), r < o && ye(t))
                                    }
                                    d.push(n)
                                } return De(d)
                        }(t[n]))[_] ? i : r).push(o);
                        (o = A(e, we(r, i))).selector = e
                    }
                    return o
                }, g = ae.select = function(e, t, n, i) {
                    var r, o, s, a, l, u = "function" == typeof e && e,
                        c = !i && f(e = u.selector || e);
                    if (n = n || [], 1 === c.length) {
                        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && C && x.relative[o[1].type]) {
                            if (!(t = (x.find.ID(s.matches[0].replace(ie, d), t) || [])[0])) return n;
                            u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                        }
                        for (r = K.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                            if ((l = x.find[a]) && (i = l(s.matches[0].replace(ie, d), ne.test(o[0].type) && ge(t.parentNode) || t))) {
                                if (o.splice(r, 1), !(e = i.length && ye(o))) return N.apply(n, i), n;
                                break
                            }
                    }
                    return (u || h(e, c))(i, t, !C, n, !t || ne.test(e) && ge(t.parentNode) || t), n
                }, p.sortStable = _.split("").sort(O).join("") === _, p.detectDuplicates = !!u, w(), p.sortDetached = ce(function(e) {
                    return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
                }), ce(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || de("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), p.attributes && ce(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || de("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                }), ce(function(e) {
                    return null == e.getAttribute("disabled")
                }) || de(I, function(e, t, n) {
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
                }), ae
            }(w);
        C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains, C.escapeSelector = p.escape;

        function f(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && C(e).is(n)) break;
                    i.push(e)
                } return i
        }

        function b(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        var _ = C.expr.match.needsContext;

        function k(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function E(e, n, i) {
            return D(n) ? C.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            }) : n.nodeType ? C.grep(e, function(e) {
                return e === n !== i
            }) : "string" != typeof n ? C.grep(e, function(e) {
                return -1 < r.call(n, e) !== i
            }) : C.filter(n, e, i)
        }
        C.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, C.fn.extend({
            find: function(e) {
                var t, n, i = this.length,
                    r = this;
                if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < i; t++)
                        if (C.contains(r[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
                return 1 < i ? C.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(E(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(E(this, e || [], !0))
            },
            is: function(e) {
                return !!E(this, "string" == typeof e && _.test(e) ? C(e) : e || [], !1).length
            }
        });
        var A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (C.fn.init = function(e, t, n) {
            if (!e) return this;
            if (n = n || F, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : D(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : A.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (i[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), S.test(i[1]) && C.isPlainObject(t))
                    for (var i in t) D(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (e = T.getElementById(i[2])) && (this[0] = e, this.length = 1), this
        }).prototype = C.fn;
        var F = C(T),
            O = /^(?:parents|prev(?:Until|All))/,
            L = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function M(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }
        C.fn.extend({
            has: function(e) {
                var t = C(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (C.contains(this, t[e])) return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0,
                    r = this.length,
                    o = [],
                    s = "string" != typeof e && C(e);
                if (!_.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            } return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), C.each({
            parent: function(e) {
                e = e.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(e) {
                return f(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return f(e, "parentNode", n)
            },
            next: function(e) {
                return M(e, "nextSibling")
            },
            prev: function(e) {
                return M(e, "previousSibling")
            },
            nextAll: function(e) {
                return f(e, "nextSibling")
            },
            prevAll: function(e) {
                return f(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return f(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return f(e, "previousSibling", n)
            },
            siblings: function(e) {
                return b((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return b(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
            }
        }, function(i, r) {
            C.fn[i] = function(e, t) {
                var n = C.map(this, r, e);
                return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (L[i] || C.uniqueSort(n), O.test(i) && n.reverse()), this.pushStack(n)
            }
        });
        var P = /[^\x20\t\r\n\f]+/g;

        function N(e) {
            return e
        }

        function $(e) {
            throw e
        }

        function B(e, t, n, i) {
            var r;
            try {
                e && D(r = e.promise) ? r.call(e).done(t).fail(n) : e && D(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        C.Callbacks = function(i) {
            var e, n;
            i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(P) || [], function(e, t) {
                n[t] = !0
            }), n) : C.extend({}, i);

            function r() {
                for (a = a || i.once, s = o = !0; u.length; c = -1)
                    for (t = u.shift(); ++c < l.length;) !1 === l[c].apply(t[0], t[1]) && i.stopOnFalse && (c = l.length, t = !1);
                i.memory || (t = !1), o = !1, a && (l = t ? [] : "")
            }
            var o, t, s, a, l = [],
                u = [],
                c = -1,
                d = {
                    add: function() {
                        return l && (t && !o && (c = l.length - 1, u.push(t)), function n(e) {
                            C.each(e, function(e, t) {
                                D(t) ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== h(t) && n(t)
                            })
                        }(arguments), t && !o && r()), this
                    },
                    remove: function() {
                        return C.each(arguments, function(e, t) {
                            for (var n; - 1 < (n = C.inArray(t, l, n));) l.splice(n, 1), n <= c && c--
                        }), this
                    },
                    has: function(e) {
                        return e ? -1 < C.inArray(e, l) : 0 < l.length
                    },
                    empty: function() {
                        return l = l && [], this
                    },
                    disable: function() {
                        return a = u = [], l = t = "", this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return a = u = [], t || o || (l = t = ""), this
                    },
                    locked: function() {
                        return !!a
                    },
                    fireWith: function(e, t) {
                        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), o || r()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!s
                    }
                };
            return d
        }, C.extend({
            Deferred: function(e) {
                var o = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                    r = "pending",
                    s = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        catch: function(e) {
                            return s.then(null, e)
                        },
                        pipe: function() {
                            var r = arguments;
                            return C.Deferred(function(i) {
                                C.each(o, function(e, t) {
                                    var n = D(r[t[4]]) && r[t[4]];
                                    a[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        e && D(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                    })
                                }), r = null
                            }).promise()
                        },
                        then: function(t, n, i) {
                            var l = 0;

                            function u(r, o, s, a) {
                                return function() {
                                    function e() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if ((e = s.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, D(t) ? a ? t.call(e, u(l, o, N, a), u(l, o, $, a)) : (l++, t.call(e, u(l, o, N, a), u(l, o, $, a), u(l, o, N, o.notifyWith))) : (s !== N && (n = void 0, i = [e]), (a || o.resolveWith)(n, i))
                                        }
                                    }
                                    var n = this,
                                        i = arguments,
                                        t = a ? e : function() {
                                            try {
                                                e()
                                            } catch (e) {
                                                C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== $ && (n = void 0, i = [e]), o.rejectWith(n, i))
                                            }
                                        };
                                    r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), w.setTimeout(t))
                                }
                            }
                            return C.Deferred(function(e) {
                                o[0][3].add(u(0, e, D(i) ? i : N, e.notifyWith)), o[1][3].add(u(0, e, D(t) ? t : N)), o[2][3].add(u(0, e, D(n) ? n : $))
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? C.extend(e, s) : s
                        }
                    },
                    a = {};
                return C.each(o, function(e, t) {
                    var n = t[2],
                        i = t[5];
                    s[t[1]] = n.add, i && n.add(function() {
                        r = i
                    }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                        return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                    }, a[t[0] + "With"] = n.fireWith
                }), s.promise(a), e && e.call(a, a), a
            },
            when: function(e) {
                function t(t) {
                    return function(e) {
                        r[t] = this, o[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(r, o)
                    }
                }
                var n = arguments.length,
                    i = n,
                    r = Array(i),
                    o = a.call(arguments),
                    s = C.Deferred();
                if (n <= 1 && (B(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || D(o[i] && o[i].then))) return s.then();
                for (; i--;) B(o[i], t(i), s.reject);
                return s.promise()
            }
        });
        var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        C.Deferred.exceptionHook = function(e, t) {
            w.console && w.console.warn && e && I.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            w.setTimeout(function() {
                throw e
            })
        };
        var R = C.Deferred();

        function q() {
            T.removeEventListener("DOMContentLoaded", q), w.removeEventListener("load", q), C.ready()
        }
        C.fn.ready = function(e) {
            return R.then(e).catch(function(e) {
                C.readyException(e)
            }), this
        }, C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || R.resolveWith(T, [C])
            }
        }), C.ready.then = R.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? w.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", q), w.addEventListener("load", q));
        var H = function(e, t, n, i, r, o, s) {
                var a = 0,
                    l = e.length,
                    u = null == n;
                if ("object" === h(n))
                    for (a in r = !0, n) H(e, t, a, n[a], !0, o, s);
                else if (void 0 !== i && (r = !0, D(i) || (s = !0), t = u ? s ? (t.call(e, i), null) : (u = t, function(e, t, n) {
                        return u.call(C(e), n)
                    }) : t))
                    for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
            },
            j = /^-ms-/,
            z = /-([a-z])/g;

        function W(e, t) {
            return t.toUpperCase()
        }

        function X(e) {
            return e.replace(j, "ms-").replace(z, W)
        }

        function Y(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }

        function U() {
            this.expando = C.expando + U.uid++
        }
        U.uid = 1, U.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t) r[X(t)] = n;
                else
                    for (i in t) r[X(i)] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(P) || []).length;
                        for (; n--;) delete i[t[n]]
                    }
                    void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                e = e[this.expando];
                return void 0 !== e && !C.isEmptyObject(e)
            }
        };
        var V = new U,
            G = new U,
            K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Q = /[A-Z]/g;

        function Z(e, t, n) {
            var i, r;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(Q, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r)
                    } catch (e) {}
                    G.set(e, t, n)
                } else n = void 0;
            return n
        }
        C.extend({
            hasData: function(e) {
                return G.hasData(e) || V.hasData(e)
            },
            data: function(e, t, n) {
                return G.access(e, t, n)
            },
            removeData: function(e, t) {
                G.remove(e, t)
            },
            _data: function(e, t, n) {
                return V.access(e, t, n)
            },
            _removeData: function(e, t) {
                V.remove(e, t)
            }
        }), C.fn.extend({
            data: function(n, e) {
                var t, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                    G.set(this, n)
                }) : H(this, function(e) {
                    var t;
                    return o && void 0 === e ? void 0 !== (t = G.get(o, n)) || void 0 !== (t = Z(o, n)) ? t : void 0 : void this.each(function() {
                        G.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (r = G.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                    for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = X(i.slice(5)), Z(o, i, r[i]));
                    V.set(o, "hasDataAttrs", !0)
                }
                return r
            },
            removeData: function(e) {
                return this.each(function() {
                    G.remove(this, e)
                })
            }
        }), C.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return i = V.get(e, t = (t || "fx") + "queue"), n && (!i || Array.isArray(n) ? i = V.access(e, t, C.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                var n = C.queue(e, t = t || "fx"),
                    i = n.length,
                    r = n.shift(),
                    o = C._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                    C.dequeue(e, t)
                }, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return V.get(e, n) || V.access(e, n, {
                    empty: C.Callbacks("once memory").add(function() {
                        V.remove(e, [t + "queue", n])
                    })
                })
            }
        }), C.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = C.queue(this, t, n);
                    C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    C.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                function n() {
                    --r || o.resolveWith(s, [s])
                }
                var i, r = 1,
                    o = C.Deferred(),
                    s = this,
                    a = this.length;
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = V.get(s[a], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
                return n(), o.promise(t)
            }
        });
        var J = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ee = new RegExp("^(?:([+-])=|)(" + J + ")([a-z%]*)$", "i"),
            te = ["Top", "Right", "Bottom", "Left"],
            ne = T.documentElement,
            ie = function(e) {
                return C.contains(e.ownerDocument, e)
            },
            re = {
                composed: !0
            };
        ne.getRootNode && (ie = function(e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument
        });
        var oe = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === C.css(e, "display")
        };

        function se(e, t, n, i) {
            var r, o, s = 20,
                a = i ? function() {
                    return i.cur()
                } : function() {
                    return C.css(e, t, "")
                },
                l = a(),
                u = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (C.cssNumber[t] || "px" !== u && +l) && ee.exec(C.css(e, t));
            if (c && c[3] !== u) {
                for (u = u || c[3], c = +(l /= 2) || 1; s--;) C.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
                C.style(e, t, (c *= 2) + u), n = n || []
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }
        var ae = {};

        function le(e, t) {
            for (var n, i, r, o, s, a = [], l = 0, u = e.length; l < u; l++)(i = e[l]).style && (n = i.style.display, t ? ("none" === n && (a[l] = V.get(i, "display") || null, a[l] || (i.style.display = "")), "" === i.style.display && oe(i) && (a[l] = (s = o = void 0, o = (r = i).ownerDocument, s = r.nodeName, (r = ae[s]) || (o = o.body.appendChild(o.createElement(s)), r = C.css(o, "display"), o.parentNode.removeChild(o), ae[s] = r = "none" === r ? "block" : r)))) : "none" !== n && (a[l] = "none", V.set(i, "display", n)));
            for (l = 0; l < u; l++) null != a[l] && (e[l].style.display = a[l]);
            return e
        }
        C.fn.extend({
            show: function() {
                return le(this, !0)
            },
            hide: function() {
                return le(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    oe(this) ? C(this).show() : C(this).hide()
                })
            }
        });
        var ue = /^(?:checkbox|radio)$/i,
            ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            de = /^$|^module$|\/(?:java|ecma)script/i;
        Ut = T.createDocumentFragment().appendChild(T.createElement("div")), (p = T.createElement("input")).setAttribute("type", "radio"), p.setAttribute("checked", "checked"), p.setAttribute("name", "t"), Ut.appendChild(p), v.checkClone = Ut.cloneNode(!0).cloneNode(!0).lastChild.checked, Ut.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!Ut.cloneNode(!0).lastChild.defaultValue, Ut.innerHTML = "<option></option>", v.option = !!Ut.lastChild;
        var pe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

        function fe(e, t) {
            var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && k(e, t) ? C.merge([e], n) : n
        }

        function he(e, t) {
            for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"))
        }
        pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead, pe.th = pe.td, v.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
        var ge = /<|&#?\w+;/;

        function me(e, t, n, i, r) {
            for (var o, s, a, l, u, c = t.createDocumentFragment(), d = [], p = 0, f = e.length; p < f; p++)
                if ((o = e[p]) || 0 === o)
                    if ("object" === h(o)) C.merge(d, o.nodeType ? [o] : o);
                    else if (ge.test(o)) {
                for (s = s || c.appendChild(t.createElement("div")), a = (ce.exec(o) || ["", ""])[1].toLowerCase(), a = pe[a] || pe._default, s.innerHTML = a[1] + C.htmlPrefilter(o) + a[2], u = a[0]; u--;) s = s.lastChild;
                C.merge(d, s.childNodes), (s = c.firstChild).textContent = ""
            } else d.push(t.createTextNode(o));
            for (c.textContent = "", p = 0; o = d[p++];)
                if (i && -1 < C.inArray(o, i)) r && r.push(o);
                else if (l = ie(o), s = fe(c.appendChild(o), "script"), l && he(s), n)
                for (u = 0; o = s[u++];) de.test(o.type || "") && n.push(o);
            return c
        }
        var ye = /^([^.]*)(?:\.(.+)|)/;

        function ve() {
            return !0
        }

        function De() {
            return !1
        }

        function xe(e, t) {
            return e === function() {
                try {
                    return T.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }

        function be(e, t, n, i, r, o) {
            var s, a;
            if ("object" == typeof t) {
                for (a in "string" != typeof n && (i = i || n, n = void 0), t) be(e, a, n, i, t[a], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = De;
            else if (!r) return e;
            return 1 === o && (s = r, (r = function(e) {
                return C().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
                C.event.add(this, t, r, i, n)
            })
        }

        function we(e, r, o) {
            o ? (V.set(e, r, !1), C.event.add(e, r, {
                namespace: !1,
                handler: function(e) {
                    var t, n, i = V.get(this, r);
                    if (1 & e.isTrigger && this[r]) {
                        if (i.length)(C.event.special[r] || {}).delegateType && e.stopPropagation();
                        else if (i = a.call(arguments), V.set(this, r, i), t = o(this, r), this[r](), i !== (n = V.get(this, r)) || t ? V.set(this, r, !1) : n = {}, i !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                    } else i.length && (V.set(this, r, {
                        value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                    }), e.stopImmediatePropagation())
                }
            })) : void 0 === V.get(e, r) && C.event.add(e, r, ve)
        }
        C.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, s, a, l, u, c, d, p, f, h = V.get(t);
                if (Y(t))
                    for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(ne, r), n.guid || (n.guid = C.guid++), (a = h.events) || (a = h.events = Object.create(null)), (s = h.handle) || (s = h.handle = function(e) {
                            return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                        }), l = (e = (e || "").match(P) || [""]).length; l--;) d = f = (u = ye.exec(e[l]) || [])[1], p = (u[2] || "").split(".").sort(), d && (c = C.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, c = C.event.special[d] || {}, u = C.extend({
                        type: d,
                        origType: f,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && C.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, o), (f = a[d]) || ((f = a[d] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(d, s)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), C.event.global[d] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, s, a, l, u, c, d, p, f, h, g, m = V.hasData(e) && V.get(e);
                if (m && (l = m.events)) {
                    for (u = (t = (t || "").match(P) || [""]).length; u--;)
                        if (f = g = (a = ye.exec(t[u]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                            for (d = C.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                            s && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || C.removeEvent(e, f, m.handle), delete l[f])
                        } else
                            for (f in l) C.event.remove(e, f + t[u], n, i, !0);
                    C.isEmptyObject(l) && V.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, r, o, s = new Array(arguments.length),
                    a = C.event.fix(e),
                    l = (V.get(this, "events") || Object.create(null))[a.type] || [],
                    e = C.event.special[a.type] || {};
                for (s[0] = a, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (a.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, a)) {
                    for (o = C.event.handlers.call(this, a, l), t = 0;
                        (i = o[t++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = i.elem, n = 0;
                            (r = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (r = ((C.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(), a.stopPropagation()));
                    return e.postDispatch && e.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, s, a = [],
                    l = t.delegateCount,
                    u = e.target;
                if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < C(r, this).index(u) : C.find(r, this, null, [u]).length), s[r] && o.push(i);
                            o.length && a.push({
                                elem: u,
                                handlers: o
                            })
                        } return u = this, l < t.length && a.push({
                    elem: u,
                    handlers: t.slice(l)
                }), a
            },
            addProp: function(t, e) {
                Object.defineProperty(C.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: D(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[C.expando] ? e : new C.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        e = this || e;
                        return ue.test(e.type) && e.click && k(e, "input") && we(e, "click", ve), !1
                    },
                    trigger: function(e) {
                        e = this || e;
                        return ue.test(e.type) && e.click && k(e, "input") && we(e, "click"), !0
                    },
                    _default: function(e) {
                        e = e.target;
                        return ue.test(e.type) && e.click && k(e, "input") && V.get(e, "click") || k(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, C.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, C.Event = function(e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : De, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
        }, C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: De,
            isPropagationStopped: De,
            isImmediatePropagationStopped: De,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ve, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ve, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ve, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, C.each({
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
            char: !0,
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
            which: !0
        }, C.event.addProp), C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            C.event.special[e] = {
                setup: function() {
                    return we(this, e, xe), !1
                },
                trigger: function() {
                    return we(this, e), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: t
            }
        }), C.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, r) {
            C.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function(e) {
                    var t, n = e.relatedTarget,
                        i = e.handleObj;
                    return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
                }
            }
        }), C.fn.extend({
            on: function(e, t, n, i) {
                return be(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return be(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = De), this.each(function() {
                    C.event.remove(this, e, n, t)
                });
                for (r in e) this.off(r, t, e[r]);
                return this
            }
        });
        var Te = /<script|<style|<link/i,
            Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
            _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function ke(e, t) {
            return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
        }

        function Se(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Ee(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Ae(e, t) {
            var n, i, r, o;
            if (1 === t.nodeType) {
                if (V.hasData(e) && (o = V.get(e).events))
                    for (r in V.remove(t, "handle events"), o)
                        for (n = 0, i = o[r].length; n < i; n++) C.event.add(t, r, o[r][n]);
                G.hasData(e) && (e = G.access(e), e = C.extend({}, e), G.set(t, e))
            }
        }

        function Fe(n, i, r, o) {
            i = m(i);
            var e, t, s, a, l, u, c = 0,
                d = n.length,
                p = d - 1,
                f = i[0],
                h = D(f);
            if (h || 1 < d && "string" == typeof f && !v.checkClone && Ce.test(f)) return n.each(function(e) {
                var t = n.eq(e);
                h && (i[0] = f.call(this, e, t.html())), Fe(t, i, r, o)
            });
            if (d && (t = (e = me(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
                for (a = (s = C.map(fe(e, "script"), Se)).length; c < d; c++) l = e, c !== p && (l = C.clone(l, !0, !0), a && C.merge(s, fe(l, "script"))), r.call(n[c], l, c);
                if (a)
                    for (u = s[s.length - 1].ownerDocument, C.map(s, Ee), c = 0; c < a; c++) l = s[c], de.test(l.type || "") && !V.access(l, "globalEval") && C.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, u) : x(l.textContent.replace(_e, ""), l, u))
            }
            return n
        }

        function Oe(e, t, n) {
            for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(fe(i)), i.parentNode && (n && ie(i) && he(fe(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        C.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var i, r, o, s, a, l, u, c = e.cloneNode(!0),
                    d = ie(e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                    for (s = fe(c), i = 0, r = (o = fe(e)).length; i < r; i++) a = o[i], l = s[i], u = void 0, "input" === (u = l.nodeName.toLowerCase()) && ue.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
                if (t)
                    if (n)
                        for (o = o || fe(e), s = s || fe(c), i = 0, r = o.length; i < r; i++) Ae(o[i], s[i]);
                    else Ae(e, c);
                return 0 < (s = fe(c, "script")).length && he(s, !d && fe(e, "script")), c
            },
            cleanData: function(e) {
                for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Y(n)) {
                        if (t = n[V.expando]) {
                            if (t.events)
                                for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                            n[V.expando] = void 0
                        }
                        n[G.expando] && (n[G.expando] = void 0)
                    }
            }
        }), C.fn.extend({
            detach: function(e) {
                return Oe(this, e, !0)
            },
            remove: function(e) {
                return Oe(this, e)
            },
            text: function(e) {
                return H(this, function(e) {
                    return void 0 === e ? C.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Fe(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Fe(this, arguments, function(e) {
                    var t;
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = ke(this, e)).insertBefore(e, t.firstChild)
                })
            },
            before: function() {
                return Fe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Fe(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(fe(e, !1)), e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return C.clone(this, e, t)
                })
            },
            html: function(e) {
                return H(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !Te.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = C.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(fe(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Fe(this, arguments, function(e) {
                    var t = this.parentNode;
                    C.inArray(this, n) < 0 && (C.cleanData(fe(this)), t && t.replaceChild(e, this))
                }, n)
            }
        }), C.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, s) {
            C.fn[e] = function(e) {
                for (var t, n = [], i = C(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), C(i[o])[s](t), l.apply(n, t.get());
                return this.pushStack(n)
            }
        });

        function Le(e, t, n) {
            var i, r = {};
            for (i in t) r[i] = e.style[i], e.style[i] = t[i];
            for (i in n = n.call(e), t) e.style[i] = r[i];
            return n
        }
        var Me, Pe, Ne, $e, Be, Ie, Re, qe, He = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
            je = function(e) {
                var t = e.ownerDocument.defaultView;
                return (t = !t || !t.opener ? w : t).getComputedStyle(e)
            },
            ze = new RegExp(te.join("|"), "i");

        function We() {
            var e;
            qe && (Re.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", qe.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ne.appendChild(Re).appendChild(qe), e = w.getComputedStyle(qe), Me = "1%" !== e.top, Ie = 12 === Xe(e.marginLeft), qe.style.right = "60%", $e = 36 === Xe(e.right), Pe = 36 === Xe(e.width), qe.style.position = "absolute", Ne = 12 === Xe(qe.offsetWidth / 3), ne.removeChild(Re), qe = null)
        }

        function Xe(e) {
            return Math.round(parseFloat(e))
        }

        function Ye(e, t, n) {
            var i, r, o = e.style;
            return (n = n || je(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || ie(e) || (r = C.style(e, t)), !v.pixelBoxStyles() && He.test(r) && ze.test(t) && (i = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = n.width, o.width = i, o.minWidth = e, o.maxWidth = t)), void 0 !== r ? r + "" : r
        }

        function Ue(e, t) {
            return {
                get: function() {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        Re = T.createElement("div"), (qe = T.createElement("div")).style && (qe.style.backgroundClip = "content-box", qe.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === qe.style.backgroundClip, C.extend(v, {
            boxSizingReliable: function() {
                return We(), Pe
            },
            pixelBoxStyles: function() {
                return We(), $e
            },
            pixelPosition: function() {
                return We(), Me
            },
            reliableMarginLeft: function() {
                return We(), Ie
            },
            scrollboxSize: function() {
                return We(), Ne
            },
            reliableTrDimensions: function() {
                var e, t, n;
                return null == Be && (e = T.createElement("table"), t = T.createElement("tr"), n = T.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", ne.appendChild(e).appendChild(t).appendChild(n), n = w.getComputedStyle(t), Be = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, ne.removeChild(e)), Be
            }
        }));
        var Ve = ["Webkit", "Moz", "ms"],
            Ge = T.createElement("div").style,
            Ke = {};

        function Qe(e) {
            var t = C.cssProps[e] || Ke[e];
            return t || (e in Ge ? e : Ke[e] = function(e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = Ve.length; n--;)
                    if ((e = Ve[n] + t) in Ge) return e
            }(e) || e)
        }
        var Ze = /^(none|table(?!-c[ea]).+)/,
            Je = /^--/,
            et = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            tt = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function nt(e, t, n) {
            var i = ee.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }

        function it(e, t, n, i, r, o) {
            var s = "width" === t ? 1 : 0,
                a = 0,
                l = 0;
            if (n === (i ? "border" : "content")) return 0;
            for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + te[s], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + te[s], !0, r)), "margin" !== n && (l -= C.css(e, "border" + te[s] + "Width", !0, r))) : (l += C.css(e, "padding" + te[s], !0, r), "padding" !== n ? l += C.css(e, "border" + te[s] + "Width", !0, r) : a += C.css(e, "border" + te[s] + "Width", !0, r));
            return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
        }

        function rt(e, t, n) {
            var i = je(e),
                r = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
                o = r,
                s = Ye(e, t, i),
                a = "offset" + t[0].toUpperCase() + t.slice(1);
            if (He.test(s)) {
                if (!n) return s;
                s = "auto"
            }
            return (!v.boxSizingReliable() && r || !v.reliableTrDimensions() && k(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === C.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + it(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
        }

        function ot(e, t, n, i, r) {
            return new ot.prototype.init(e, t, n, i, r)
        }
        C.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            e = Ye(e, "opacity");
                            return "" === e ? "1" : e
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
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, s, a = X(t),
                        l = Je.test(t),
                        u = e.style;
                    if (l || (t = Qe(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                    "string" === (o = typeof n) && (r = ee.exec(n)) && r[1] && (n = se(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (C.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
                }
            },
            css: function(e, t, n, i) {
                var r, o = X(t);
                return Je.test(t) || (t = Qe(o)), "normal" === (r = void 0 === (r = (o = C.cssHooks[t] || C.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : r) ? Ye(e, t, i) : r) && t in tt && (r = tt[t]), "" === n || n ? (t = parseFloat(r), !0 === n || isFinite(t) ? t || 0 : r) : r
            }
        }), C.each(["height", "width"], function(e, a) {
            C.cssHooks[a] = {
                get: function(e, t, n) {
                    if (t) return !Ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, a, n) : Le(e, et, function() {
                        return rt(e, a, n)
                    })
                },
                set: function(e, t, n) {
                    var i, r = je(e),
                        o = !v.scrollboxSize() && "absolute" === r.position,
                        s = (o || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                        n = n ? it(e, a, n, s, r) : 0;
                    return s && o && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - it(e, a, "border", !1, r) - .5)), n && (i = ee.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = C.css(e, a)), nt(0, t, n)
                }
            }
        }), C.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - Le(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), C.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, o) {
            C.cssHooks[r + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + te[t] + o] = i[t] || i[t - 2] || i[0];
                    return n
                }
            }, "margin" !== r && (C.cssHooks[r + o].set = nt)
        }), C.fn.extend({
            css: function(e, t) {
                return H(this, function(e, t, n) {
                    var i, r, o = {},
                        s = 0;
                    if (Array.isArray(t)) {
                        for (i = je(e), r = t.length; s < r; s++) o[t[s]] = C.css(e, t[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }), (C.Tween = ot).prototype = {
            constructor: ot,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = ot.propHooks[this.prop];
                return (e && e.get ? e : ot.propHooks._default).get(this)
            },
            run: function(e) {
                var t, n = ot.propHooks[this.prop];
                return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : ot.propHooks._default).set(this), this
            }
        }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
            _default: {
                get: function(e) {
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, C.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, C.fx = ot.prototype.init, C.fx.step = {};
        var st, at, lt = /^(?:toggle|show|hide)$/,
            ut = /queueHooks$/;

        function ct() {
            at && (!1 === T.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(ct) : w.setTimeout(ct, C.fx.interval), C.fx.tick())
        }

        function dt() {
            return w.setTimeout(function() {
                st = void 0
            }), st = Date.now()
        }

        function pt(e, t) {
            var n, i = 0,
                r = {
                    height: e
                };
            for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = te[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function ft(e, t, n) {
            for (var i, r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                if (i = r[o].call(n, t, e)) return i
        }

        function ht(r, e, t) {
            var n, o, i = 0,
                s = ht.prefilters.length,
                a = C.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = st || dt(), e = Math.max(0, u.startTime + u.duration - e), t = 1 - (e / u.duration || 0), n = 0, i = u.tweens.length; n < i; n++) u.tweens[n].run(t);
                    return a.notifyWith(r, [u, t, e]), t < 1 && i ? e : (i || a.notifyWith(r, [u, 1, 0]), a.resolveWith(r, [u]), !1)
                },
                u = a.promise({
                    elem: r,
                    props: C.extend({}, e),
                    opts: C.extend(!0, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: st || dt(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        e = C.Tween(r, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(e), e
                    },
                    stop: function(e) {
                        var t = 0,
                            n = e ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; t < n; t++) u.tweens[t].run(1);
                        return e ? (a.notifyWith(r, [u, 1, 0]), a.resolveWith(r, [u, e])) : a.rejectWith(r, [u, e]), this
                    }
                }),
                c = u.props;
            for (! function(e, t) {
                    var n, i, r, o, s;
                    for (n in e)
                        if (r = t[i = X(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
                            for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                        else t[i] = r
                }(c, u.opts.specialEasing); i < s; i++)
                if (n = ht.prefilters[i].call(u, r, c, u.opts)) return D(n.stop) && (C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
            return C.map(c, ft, u), D(u.opts.start) && u.opts.start.call(r, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), C.fx.timer(C.extend(l, {
                elem: r,
                anim: u,
                queue: u.opts.queue
            })), u
        }
        C.Animation = C.extend(ht, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, ee.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                for (var n, i = 0, r = (e = D(e) ? (t = e, ["*"]) : e.match(P)).length; i < r; i++) n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, r, o, s, a, l, u, c = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    f = e.style,
                    h = e.nodeType && oe(e),
                    g = V.get(e, "fxshow");
                for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                        s.unqueued || a()
                    }), s.unqueued++, d.always(function() {
                        d.always(function() {
                            s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                        })
                    })), t)
                    if (r = t[i], lt.test(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            h = !0
                        }
                        p[i] = g && g[i] || C.style(e, i)
                    } if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                    for (i in c && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = g && g.display) && (u = V.get(e, "display")), "none" === (c = C.css(e, "display")) && (u ? c = u : (le([e], !0), u = e.style.display || u, c = C.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === C.css(e, "float") && (l || (d.done(function() {
                            f.display = u
                        }), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
                            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                        })), l = !1, p) l || (g ? "hidden" in g && (h = g.hidden) : g = V.access(e, "fxshow", {
                        display: u
                    }), o && (g.hidden = !h), h && le([e], !0), d.done(function() {
                        for (i in h || le([e]), V.remove(e, "fxshow"), p) C.style(e, i, p[i])
                    })), l = ft(h ? g[i] : 0, i, d), i in g || (g[i] = l.start, h && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(e, t) {
                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
            }
        }), C.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : {
                complete: n || !n && t || D(e) && e,
                duration: e,
                easing: n && t || t && !D(t) && t
            };
            return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                D(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
            }, i
        }, C.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(oe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                var r = C.isEmptyObject(t),
                    o = C.speed(e, n, i),
                    i = function() {
                        var e = ht(this, C.extend({}, t), o);
                        (r || V.get(this, "finish")) && e.stop(!0)
                    };
                return i.finish = i, r || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
            },
            stop: function(r, e, o) {
                function s(e) {
                    var t = e.stop;
                    delete e.stop, t(o)
                }
                return "string" != typeof r && (o = e, e = r, r = void 0), e && this.queue(r || "fx", []), this.each(function() {
                    var e = !0,
                        t = null != r && r + "queueHooks",
                        n = C.timers,
                        i = V.get(this);
                    if (t) i[t] && i[t].stop && s(i[t]);
                    else
                        for (t in i) i[t] && i[t].stop && ut.test(t) && s(i[t]);
                    for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                    !e && o || C.dequeue(this, r)
                })
            },
            finish: function(s) {
                return !1 !== s && (s = s || "fx"), this.each(function() {
                    var e, t = V.get(this),
                        n = t[s + "queue"],
                        i = t[s + "queueHooks"],
                        r = C.timers,
                        o = n ? n.length : 0;
                    for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }), C.each(["toggle", "show", "hide"], function(e, i) {
            var r = C.fn[i];
            C.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(pt(i, !0), e, t, n)
            }
        }), C.each({
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            C.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }), C.timers = [], C.fx.tick = function() {
            var e, t = 0,
                n = C.timers;
            for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), st = void 0
        }, C.fx.timer = function(e) {
            C.timers.push(e), C.fx.start()
        }, C.fx.interval = 13, C.fx.start = function() {
            at || (at = !0, ct())
        }, C.fx.stop = function() {
            at = null
        }, C.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, C.fn.delay = function(i, e) {
            return i = C.fx && C.fx.speeds[i] || i, this.queue(e = e || "fx", function(e, t) {
                var n = w.setTimeout(e, i);
                t.stop = function() {
                    w.clearTimeout(n)
                }
            })
        }, Ut = T.createElement("input"), J = T.createElement("select").appendChild(T.createElement("option")), Ut.type = "checkbox", v.checkOn = "" !== Ut.value, v.optSelected = J.selected, (Ut = T.createElement("input")).value = "t", Ut.type = "radio", v.radioValue = "t" === Ut.value;
        var gt, mt = C.expr.attrHandle;
        C.fn.extend({
            attr: function(e, t) {
                return H(this, C.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        }), C.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(r && "get" in r && null !== (i = r.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!v.radioValue && "radio" === t && k(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0,
                    r = t && t.match(P);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++];) e.removeAttribute(n)
            }
        }), gt = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var s = mt[t] || C.find.attr;
            mt[t] = function(e, t, n) {
                var i, r, o = t.toLowerCase();
                return n || (r = mt[o], mt[o] = i, i = null != s(e, t, n) ? o : null, mt[o] = r), i
            }
        });
        var yt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;

        function Dt(e) {
            return (e.match(P) || []).join(" ")
        }

        function xt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function bt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
        }
        C.fn.extend({
            prop: function(e, t) {
                return H(this, C.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[C.propFix[e] || e]
                })
            }
        }), C.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (C.propHooks.selected = {
            get: function(e) {
                e = e.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(e) {
                e = e.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            C.propFix[this.toLowerCase()] = this
        }), C.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, s, a = 0;
                if (D(t)) return this.each(function(e) {
                    C(this).addClass(t.call(this, e, xt(this)))
                });
                if ((e = bt(t)).length)
                    for (; n = this[a++];)
                        if (s = xt(n), i = 1 === n.nodeType && " " + Dt(s) + " ") {
                            for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s !== (s = Dt(i)) && n.setAttribute("class", s)
                        } return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s, a = 0;
                if (D(t)) return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, xt(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = bt(t)).length)
                    for (; n = this[a++];)
                        if (s = xt(n), i = 1 === n.nodeType && " " + Dt(s) + " ") {
                            for (o = 0; r = e[o++];)
                                for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                            s !== (s = Dt(i)) && n.setAttribute("class", s)
                        } return this
            },
            toggleClass: function(r, t) {
                var o = typeof r,
                    s = "string" == o || Array.isArray(r);
                return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : D(r) ? this.each(function(e) {
                    C(this).toggleClass(r.call(this, e, xt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, i;
                    if (s)
                        for (t = 0, n = C(this), i = bt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else void 0 !== r && "boolean" != o || ((e = xt(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== r && V.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                    if (1 === t.nodeType && -1 < (" " + Dt(xt(t)) + " ").indexOf(i)) return !0;
                return !1
            }
        });
        var wt = /\r/g;
        C.fn.extend({
            val: function(t) {
                var n, e, i, r = this[0];
                return arguments.length ? (i = D(t), this.each(function(e) {
                    1 === this.nodeType && (null == (e = i ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function(e) {
                        return null == e ? "" : e + ""
                    })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                })) : r ? (n = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(r, "value")) ? e : "string" == typeof(e = r.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : Dt(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type, o = r ? null : [], s = r ? i + 1 : n.length, a = i < 0 ? s : r ? i : 0; a < s; a++)
                            if (((t = n[a]).selected || a === i) && !t.disabled && (!t.parentNode.disabled || !k(t.parentNode, "optgroup"))) {
                                if (t = C(t).val(), r) return t;
                                o.push(t)
                            } return o
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = C.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
                }
            }, v.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), v.focusin = "onfocusin" in w;

        function Tt(e) {
            e.stopPropagation()
        }
        var Ct = /^(?:focusinfocus|focusoutblur)$/;
        C.extend(C.event, {
            trigger: function(e, t, n, i) {
                var r, o, s, a, l, u, c, d = [n || T],
                    p = y.call(e, "type") ? e.type : e,
                    f = y.call(e, "namespace") ? e.namespace.split(".") : [],
                    h = c = o = n = n || T;
                if (3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), u = C.event.special[p] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                    if (!i && !u.noBubble && !g(n)) {
                        for (s = u.delegateType || p, Ct.test(s + p) || (h = h.parentNode); h; h = h.parentNode) d.push(h), o = h;
                        o === (n.ownerDocument || T) && d.push(o.defaultView || o.parentWindow || w)
                    }
                    for (r = 0;
                        (h = d[r++]) && !e.isPropagationStopped();) c = h, e.type = 1 < r ? s : u.bindType || p, (l = (V.get(h, "events") || Object.create(null))[e.type] && V.get(h, "handle")) && l.apply(h, t), (l = a && h[a]) && l.apply && Y(h) && (e.result = l.apply(h, t), !1 === e.result && e.preventDefault());
                    return e.type = p, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !Y(n) || a && D(n[p]) && !g(n) && ((o = n[a]) && (n[a] = null), C.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, Tt), n[p](), e.isPropagationStopped() && c.removeEventListener(p, Tt), C.event.triggered = void 0, o && (n[a] = o)), e.result
                }
            },
            simulate: function(e, t, n) {
                e = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(e, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), v.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            function r(e) {
                C.event.simulate(i, e.target, C.event.fix(e))
            }
            C.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = V.access(e, i);
                    t || e.addEventListener(n, r, !0), V.access(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = V.access(e, i) - 1;
                    t ? V.access(e, i, t) : (e.removeEventListener(n, r, !0), V.remove(e, i))
                }
            }
        });
        var _t = w.location,
            kt = {
                guid: Date.now()
            },
            St = /\?/;
        C.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new w.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, function(e) {
                return e.textContent
            }).join("\n") : e)), t
        };
        var Et = /\[\]$/,
            At = /\r?\n/g,
            Ft = /^(?:submit|button|image|reset|file)$/i,
            Ot = /^(?:input|select|textarea|keygen)/i;
        C.param = function(e, t) {
            function n(e, t) {
                t = D(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
            }
            var i, r = [];
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
                n(this.name, this.value)
            });
            else
                for (i in e) ! function n(i, e, r, o) {
                    if (Array.isArray(e)) C.each(e, function(e, t) {
                        r || Et.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
                    });
                    else if (r || "object" !== h(e)) o(i, e);
                    else
                        for (var t in e) n(i + "[" + t + "]", e[t], r, o)
                }(i, e[i], t, n);
            return r.join("&")
        }, C.fn.extend({
            serialize: function() {
                return C.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !C(this).is(":disabled") && Ot.test(this.nodeName) && !Ft.test(e) && (this.checked || !ue.test(e))
                }).map(function(e, t) {
                    var n = C(this).val();
                    return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(At, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(At, "\r\n")
                    }
                }).get()
            }
        });
        var Lt = /%20/g,
            Mt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            $t = /^(?:GET|HEAD)$/,
            Bt = /^\/\//,
            It = {},
            Rt = {},
            qt = "*/".concat("*"),
            Ht = T.createElement("a");

        function jt(o) {
            return function(e, t) {
                "string" != typeof e && (t = e, e = "*");
                var n, i = 0,
                    r = e.toLowerCase().match(P) || [];
                if (D(t))
                    for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }

        function zt(t, i, r, o) {
            var s = {},
                a = t === Rt;

            function l(e) {
                var n;
                return s[e] = !0, C.each(t[e] || [], function(e, t) {
                    t = t(i, r, o);
                    return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
                }), n
            }
            return l(i.dataTypes[0]) || !s["*"] && l("*")
        }

        function Wt(e, t) {
            var n, i, r = C.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
            return i && C.extend(!0, e, i), e
        }
        Ht.href = _t.href, C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: _t.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qt,
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
                    "text xml": C.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
            },
            ajaxPrefilter: jt(It),
            ajaxTransport: jt(Rt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e, e = void 0);
                var l, u, c, n, d, p, f, i, r, h = C.ajaxSetup({}, t = t || {}),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                    y = C.Deferred(),
                    v = C.Callbacks("once memory"),
                    D = h.statusCode || {},
                    o = {},
                    s = {},
                    a = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (p) {
                                if (!n)
                                    for (n = {}; t = Nt.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = n[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return p ? c : null
                        },
                        setRequestHeader: function(e, t) {
                            return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, o[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return null == p && (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            if (e)
                                if (p) x.always(e[x.status]);
                                else
                                    for (var t in e) D[t] = [D[t], e[t]];
                            return this
                        },
                        abort: function(e) {
                            e = e || a;
                            return l && l.abort(e), b(0, e), this
                        }
                    };
                if (y.promise(x), h.url = ((e || h.url || _t.href) + "").replace(Bt, _t.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
                    r = T.createElement("a");
                    try {
                        r.href = h.url, r.href = r.href, h.crossDomain = Ht.protocol + "//" + Ht.host != r.protocol + "//" + r.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), zt(It, h, t, x), p) return x;
                for (i in (f = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$t.test(h.type), u = h.url.replace(Mt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Lt, "+")) : (r = h.url.slice(u.length), h.data && (h.processData || "string" == typeof h.data) && (u += (St.test(u) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (u = u.replace(Pt, "$1"), r = (St.test(u) ? "&" : "?") + "_=" + kt.guid++ + r), h.url = u + r), h.ifModified && (C.lastModified[u] && x.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && x.setRequestHeader("If-None-Match", C.etag[u])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && x.setRequestHeader("Content-Type", h.contentType), x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : h.accepts["*"]), h.headers) x.setRequestHeader(i, h.headers[i]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, x, h) || p)) return x.abort();
                if (a = "abort", v.add(h.complete), x.done(h.success), x.fail(h.error), l = zt(Rt, h, t, x)) {
                    if (x.readyState = 1, f && m.trigger("ajaxSend", [x, h]), p) return x;
                    h.async && 0 < h.timeout && (d = w.setTimeout(function() {
                        x.abort("timeout")
                    }, h.timeout));
                    try {
                        p = !1, l.send(o, b)
                    } catch (e) {
                        if (p) throw e;
                        b(-1, e)
                    }
                } else b(-1, "No Transport");

                function b(e, t, n, i) {
                    var r, o, s, a = t;
                    p || (p = !0, d && w.clearTimeout(d), l = void 0, c = i || "", x.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in a)
                                if (a[r] && a[r].test(i)) {
                                    l.unshift(r);
                                    break
                                } if (l[0] in n) o = l[0];
                        else {
                            for (r in n) {
                                if (!l[0] || e.converters[r + " " + l[0]]) {
                                    o = r;
                                    break
                                }
                                s = s || r
                            }
                            o = o || s
                        }
                        if (o) return o !== l[0] && l.unshift(o), n[o]
                    }(h, x, n)), !i && -1 < C.inArray("script", h.dataTypes) && C.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), s = function(e, t, n, i) {
                        var r, o, s, a, l, u = {},
                            c = e.dataTypes.slice();
                        if (c[1])
                            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                        for (o = c.shift(); o;)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(s = u[l + " " + o] || u["* " + o]))
                                for (r in u)
                                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                        !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                        break
                                    } if (!0 !== s)
                                if (s && e.throws) t = s(t);
                                else try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, s, x, i), i ? (h.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (C.lastModified[u] = n), (n = x.getResponseHeader("etag")) && (C.etag[u] = n)), 204 === e || "HEAD" === h.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state, r = s.data, i = !(o = s.error))) : (o = a, !e && a || (a = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || a) + "", i ? y.resolveWith(g, [r, a, x]) : y.rejectWith(g, [x, a, o]), x.statusCode(D), D = void 0, f && m.trigger(i ? "ajaxSuccess" : "ajaxError", [x, h, i ? r : o]), v.fireWith(g, [x, a]), f && (m.trigger("ajaxComplete", [x, h]), --C.active || C.event.trigger("ajaxStop")))
                }
                return x
            },
            getJSON: function(e, t, n) {
                return C.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return C.get(e, void 0, t, "script")
            }
        }), C.each(["get", "post"], function(e, r) {
            C[r] = function(e, t, n, i) {
                return D(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                    url: e,
                    type: r,
                    dataType: i,
                    data: t,
                    success: n
                }, C.isPlainObject(e) && e))
            }
        }), C.ajaxPrefilter(function(e) {
            for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }), C._evalUrl = function(e, t, n) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    C.globalEval(e, t, n)
                }
            })
        }, C.fn.extend({
            wrapAll: function(e) {
                return this[0] && (D(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            },
            wrapInner: function(n) {
                return D(n) ? this.each(function(e) {
                    C(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = C(this),
                        t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = D(t);
                return this.each(function(e) {
                    C(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    C(this).replaceWith(this.childNodes)
                }), this
            }
        }), C.expr.pseudos.hidden = function(e) {
            return !C.expr.pseudos.visible(e)
        }, C.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, C.ajaxSettings.xhr = function() {
            try {
                return new w.XMLHttpRequest
            } catch (e) {}
        };
        var Xt = {
                0: 200,
                1223: 204
            },
            Yt = C.ajaxSettings.xhr();
        v.cors = !!Yt && "withCredentials" in Yt, v.ajax = Yt = !!Yt, C.ajaxTransport(function(r) {
            var o, s;
            if (v.cors || Yt && !r.crossDomain) return {
                send: function(e, t) {
                    var n, i = r.xhr();
                    if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (n in r.xhrFields) i[n] = r.xhrFields[n];
                    for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Xt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                binary: i.response
                            } : {
                                text: i.responseText
                            }, i.getAllResponseHeaders()))
                        }
                    }, i.onload = o(), s = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                        4 === i.readyState && w.setTimeout(function() {
                            o && s()
                        })
                    }, o = o("abort");
                    try {
                        i.send(r.hasContent && r.data || null)
                    } catch (e) {
                        if (o) throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
        }), C.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), C.ajaxTransport("script", function(n) {
            var i, r;
            if (n.crossDomain || n.scriptAttrs) return {
                send: function(e, t) {
                    i = C("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", r = function(e) {
                        i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), T.head.appendChild(i[0])
                },
                abort: function() {
                    r && r()
                }
            }
        });
        var Ut, Vt = [],
            Gt = /(=)\?(?=&|$)|\?\?/;
        C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Vt.pop() || C.expando + "_" + kt.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, r, o, s = !1 !== e.jsonp && (Gt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = D(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Gt, "$1" + i) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
                return o || C.error(i + " was not called"), o[0]
            }, e.dataTypes[0] = "json", r = w[i], w[i] = function() {
                o = arguments
            }, n.always(function() {
                void 0 === r ? C(w).removeProp(i) : w[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Vt.push(i)), o && D(r) && r(o[0]), o = r = void 0
            }), "script"
        }), v.createHTMLDocument = ((Ut = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), i = !n && [], (n = S.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, i), i && i.length && C(i).remove(), C.merge([], n.childNodes)));
            var i
        }, C.fn.load = function(e, t, n) {
            var i, r, o, s = this,
                a = e.indexOf(" ");
            return -1 < a && (i = Dt(e.slice(a)), e = e.slice(0, a)), D(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && C.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, C.expr.pseudos.animated = function(t) {
            return C.grep(C.timers, function(e) {
                return t === e.elem
            }).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, s, a = C.css(e, "position"),
                    l = C(e),
                    u = {};
                "static" === a && (e.style.position = "relative"), o = l.offset(), i = C.css(e, "top"), s = C.css(e, "left"), s = ("absolute" === a || "fixed" === a) && -1 < (i + s).indexOf("auto") ? (r = (a = l.position()).top, a.left) : (r = parseFloat(i) || 0, parseFloat(s) || 0), null != (t = D(t) ? t.call(e, n, C.extend({}, o)) : t).top && (u.top = t.top - o.top + r), null != t.left && (u.left = t.left - o.left + s), "using" in t ? t.using.call(e, u) : l.css(u)
            }
        }, C.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
                var e, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0],
                        r = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - r.top - C.css(i, "marginTop", !0),
                        left: t.left - r.left - C.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || ne
                })
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, r) {
            var o = "pageYOffset" === r;
            C.fn[t] = function(e) {
                return H(this, function(e, t, n) {
                    var i;
                    return g(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[r] : e[t] : void(i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n)
                }, t, e, arguments.length)
            }
        }), C.each(["top", "left"], function(e, n) {
            C.cssHooks[n] = Ue(v.pixelPosition, function(e, t) {
                if (t) return t = Ye(e, n), He.test(t) ? C(e).position()[n] + "px" : t
            })
        }), C.each({
            Height: "height",
            Width: "width"
        }, function(s, a) {
            C.each({
                padding: "inner" + s,
                content: a,
                "": "outer" + s
            }, function(i, o) {
                C.fn[o] = function(e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        r = i || (!0 === e || !0 === t ? "margin" : "border");
                    return H(this, function(e, t, n) {
                        var i;
                        return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
                    }, a, n ? e : void 0, n)
                }
            })
        }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            C.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        C.proxy = function(e, t) {
            var n, i;
            if ("string" == typeof t && (i = e[t], t = e, e = i), D(e)) return n = a.call(arguments, 2), (i = function() {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, i
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = k, C.isFunction = D, C.isWindow = g, C.camelCase = X, C.type = h, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Kt, "")
        }, void 0 === (tn = function() {
            return C
        }.apply(en, [])) || (Jt.exports = tn);
        var Qt = w.jQuery,
            Zt = w.$;
        return C.noConflict = function(e) {
            return w.$ === C && (w.$ = Zt), e && w.jQuery === C && (w.jQuery = Qt), C
        }, void 0 === e && (w.jQuery = w.$ = C), C
    })
}]);
//# sourceMappingURL=main.js.map