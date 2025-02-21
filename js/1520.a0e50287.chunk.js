/*! For license information please see 1520.a0e50287.chunk.js.LICENSE.txt */
"use strict";
(self.webpackChunkcoin_flip_app_ts = self.webpackChunkcoin_flip_app_ts || []).push([[1520], {
    5331: function(t, e, r) {
        function i(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
        function n(t, e) {
            t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            t.__proto__ = e
        }
        r.d(e, {
            ZP: function() {
                return Ui
            }
        });
        var s, a, o, u, h, f, l, c, p, _, d, m = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        }, g = {
            duration: .5,
            overwrite: !1,
            delay: 0
        }, v = 1e8, y = 1e-8, T = 2 * Math.PI, x = T / 4, w = 0, b = Math.sqrt, k = Math.cos, M = Math.sin, O = function(t) {
            return "string" === typeof t
        }, A = function(t) {
            return "function" === typeof t
        }, C = function(t) {
            return "number" === typeof t
        }, D = function(t) {
            return "undefined" === typeof t
        }, E = function(t) {
            return "object" === typeof t
        }, P = function(t) {
            return !1 !== t
        }, S = function() {
            return "undefined" !== typeof window
        }, R = function(t) {
            return A(t) || O(t)
        }, z = "function" === typeof ArrayBuffer && ArrayBuffer.isView || function() {}
        , F = Array.isArray, B = /(?:-?\.?\d|\.)+/gi, L = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, I = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, U = /[+-]=-?[.\d]+/, N = /[^,'"\[\]\s]+/gi, X = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, q = {}, V = {}, j = function(t) {
            return (V = Tt(t, q)) && Tr
        }, G = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        }, W = function(t, e) {
            return !e && console.warn(t)
        }, Q = function(t, e) {
            return t && (q[t] = e) && V && (V[t] = e) || q
        }, Z = function() {
            return 0
        }, H = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        }, $ = {
            suppressEvents: !0,
            kill: !1
        }, J = {
            suppressEvents: !0
        }, K = {}, tt = [], et = {}, rt = {}, it = {}, nt = 30, st = [], at = "", ot = function(t) {
            var e, r, i = t[0];
            if (E(i) || A(i) || (t = [t]),
            !(e = (i._gsap || {}).harness)) {
                for (r = st.length; r-- && !st[r].targetTest(i); )
                    ;
                e = st[r]
            }
            for (r = t.length; r--; )
                t[r] && (t[r]._gsap || (t[r]._gsap = new Fe(t[r],e))) || t.splice(r, 1);
            return t
        }, ut = function(t) {
            return t._gsap || ot(Jt(t))[0]._gsap
        }, ht = function(t, e, r) {
            return (r = t[e]) && A(r) ? t[e]() : D(r) && t.getAttribute && t.getAttribute(e) || r
        }, ft = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        }, lt = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        }, ct = function(t) {
            return Math.round(1e7 * t) / 1e7 || 0
        }, pt = function(t, e) {
            var r = e.charAt(0)
              , i = parseFloat(e.substr(2));
            return t = parseFloat(t),
            "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
        }, _t = function(t, e) {
            for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
                ;
            return i < r
        }, dt = function() {
            var t, e, r = tt.length, i = tt.slice(0);
            for (et = {},
            tt.length = 0,
            t = 0; t < r; t++)
                (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        }, mt = function(t, e, r, i) {
            tt.length && !a && dt(),
            t.render(e, r, i || a && e < 0 && (t._initted || t._startAt)),
            tt.length && !a && dt()
        }, gt = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(N).length < 2 ? e : O(t) ? t.trim() : t
        }, vt = function(t) {
            return t
        }, yt = function(t, e) {
            for (var r in e)
                r in t || (t[r] = e[r]);
            return t
        }, Tt = function(t, e) {
            for (var r in e)
                t[r] = e[r];
            return t
        }, xt = function t(e, r) {
            for (var i in r)
                "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = E(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
            return e
        }, wt = function(t, e) {
            var r, i = {};
            for (r in t)
                r in e || (i[r] = t[r]);
            return i
        }, bt = function(t) {
            var e, r = t.parent || u, i = t.keyframes ? (e = F(t.keyframes),
            function(t, r) {
                for (var i in r)
                    i in t || "duration" === i && e || "ease" === i || (t[i] = r[i])
            }
            ) : yt;
            if (P(t.inherit))
                for (; r; )
                    i(t, r.vars.defaults),
                    r = r.parent || r._dp;
            return t
        }, kt = function(t, e, r, i, n) {
            void 0 === r && (r = "_first"),
            void 0 === i && (i = "_last");
            var s, a = t[i];
            if (n)
                for (s = e[n]; a && a[n] > s; )
                    a = a._prev;
            return a ? (e._next = a._next,
            a._next = e) : (e._next = t[r],
            t[r] = e),
            e._next ? e._next._prev = e : t[i] = e,
            e._prev = a,
            e.parent = e._dp = t,
            e
        }, Mt = function(t, e, r, i) {
            void 0 === r && (r = "_first"),
            void 0 === i && (i = "_last");
            var n = e._prev
              , s = e._next;
            n ? n._next = s : t[r] === e && (t[r] = s),
            s ? s._prev = n : t[i] === e && (t[i] = n),
            e._next = e._prev = e.parent = null
        }, Ot = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
            t._act = 0
        }, At = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var r = t; r; )
                    r._dirty = 1,
                    r = r.parent;
            return t
        }, Ct = function(t, e, r, i) {
            return t._startAt && (a ? t._startAt.revert($) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
        }, Dt = function t(e) {
            return !e || e._ts && t(e.parent)
        }, Et = function(t) {
            return t._repeat ? Pt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        }, Pt = function(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        }, St = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        }, Rt = function(t) {
            return t._end = ct(t._start + (t._tDur / Math.abs(t._ts || t._rts || y) || 0))
        }, zt = function(t, e) {
            var r = t._dp;
            return r && r.smoothChildTiming && t._ts && (t._start = ct(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
            Rt(t),
            r._dirty || At(r, t)),
            t
        }, Ft = function(t, e) {
            var r;
            if ((e._time || e._initted && !e._dur) && (r = St(t.rawTime(), e),
            (!e._dur || Wt(0, e.totalDuration(), r) - e._tTime > y) && e.render(r, !0)),
            At(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (r = t; r._dp; )
                        r.rawTime() >= 0 && r.totalTime(r._tTime),
                        r = r._dp;
                t._zTime = -1e-8
            }
        }, Bt = function(t, e, r, i) {
            return e.parent && Ot(e),
            e._start = ct((C(r) ? r : r || t !== u ? Vt(t, r, e) : t._time) + e._delay),
            e._end = ct(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
            kt(t, e, "_first", "_last", t._sort ? "_start" : 0),
            Ut(e) || (t._recent = e),
            i || Ft(t, e),
            t._ts < 0 && zt(t, t._tTime),
            t
        }, Lt = function(t, e) {
            return (q.ScrollTrigger || G("scrollTrigger", e)) && q.ScrollTrigger.create(e, t)
        }, It = function(t, e, r, i, n) {
            return qe(t, e, n),
            t._initted ? !r && t._pt && !a && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && p !== we.frame ? (tt.push(t),
            t._lazy = [n, i],
            1) : void 0 : 1
        }, Yt = function t(e) {
            var r = e.parent;
            return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
        }, Ut = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        }, Nt = function(t, e, r, i) {
            var n = t._repeat
              , s = ct(e) || 0
              , a = t._tTime / t._tDur;
            return a && !i && (t._time *= s / t._dur),
            t._dur = s,
            t._tDur = n ? n < 0 ? 1e10 : ct(s * (n + 1) + t._rDelay * n) : s,
            a > 0 && !i && zt(t, t._tTime = t._tDur * a),
            t.parent && Rt(t),
            r || At(t.parent, t),
            t
        }, Xt = function(t) {
            return t instanceof Le ? At(t) : Nt(t, t._dur)
        }, qt = {
            _start: 0,
            endTime: Z,
            totalDuration: Z
        }, Vt = function t(e, r, i) {
            var n, s, a, o = e.labels, u = e._recent || qt, h = e.duration() >= v ? u.endTime(!1) : e._dur;
            return O(r) && (isNaN(r) || r in o) ? (s = r.charAt(0),
            a = "%" === r.substr(-1),
            n = r.indexOf("="),
            "<" === s || ">" === s ? (n >= 0 && (r = r.replace(/=/, "")),
            ("<" === s ? u._start : u.endTime(u._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (a ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (r in o || (o[r] = h),
            o[r]) : (s = parseFloat(r.charAt(n - 1) + r.substr(n + 1)),
            a && i && (s = s / 100 * (F(i) ? i[0] : i).totalDuration()),
            n > 1 ? t(e, r.substr(0, n - 1), i) + s : h + s)) : null == r ? h : +r
        }, jt = function(t, e, r) {
            var i, n, s = C(e[1]), a = (s ? 2 : 1) + (t < 2 ? 0 : 1), o = e[a];
            if (s && (o.duration = e[1]),
            o.parent = r,
            t) {
                for (i = o,
                n = r; n && !("immediateRender"in i); )
                    i = n.vars.defaults || {},
                    n = P(n.vars.inherit) && n.parent;
                o.immediateRender = P(i.immediateRender),
                t < 2 ? o.runBackwards = 1 : o.startAt = e[a - 1]
            }
            return new Qe(e[0],o,e[a + 1])
        }, Gt = function(t, e) {
            return t || 0 === t ? e(t) : e
        }, Wt = function(t, e, r) {
            return r < t ? t : r > e ? e : r
        }, Qt = function(t, e) {
            return O(t) && (e = X.exec(t)) ? e[1] : ""
        }, Zt = [].slice, Ht = function(t, e) {
            return t && E(t) && "length"in t && (!e && !t.length || t.length - 1 in t && E(t[0])) && !t.nodeType && t !== h
        }, $t = function(t, e, r) {
            return void 0 === r && (r = []),
            t.forEach((function(t) {
                var i;
                return O(t) && !e || Ht(t, 1) ? (i = r).push.apply(i, Jt(t)) : r.push(t)
            }
            )) || r
        }, Jt = function(t, e, r) {
            return o && !e && o.selector ? o.selector(t) : !O(t) || r || !f && be() ? F(t) ? $t(t, r) : Ht(t) ? Zt.call(t, 0) : t ? [t] : [] : Zt.call((e || l).querySelectorAll(t), 0)
        }, Kt = function(t) {
            return t = Jt(t)[0] || W("Invalid scope") || {},
            function(e) {
                var r = t.current || t.nativeElement || t;
                return Jt(e, r.querySelectorAll ? r : r === t ? W("Invalid scope") || l.createElement("div") : t)
            }
        }, te = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }
            ))
        }, ee = function(t) {
            if (A(t))
                return t;
            var e = E(t) ? t : {
                each: t
            }
              , r = Ee(e.ease)
              , i = e.from || 0
              , n = parseFloat(e.base) || 0
              , s = {}
              , a = i > 0 && i < 1
              , o = isNaN(i) || a
              , u = e.axis
              , h = i
              , f = i;
            return O(i) ? h = f = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !a && o && (h = i[0],
            f = i[1]),
            function(t, a, l) {
                var c, p, _, d, m, g, y, T, x, w = (l || e).length, k = s[w];
                if (!k) {
                    if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, v])[1])) {
                        for (y = -v; y < (y = l[x++].getBoundingClientRect().left) && x < w; )
                            ;
                        x--
                    }
                    for (k = s[w] = [],
                    c = o ? Math.min(x, w) * h - .5 : i % x,
                    p = x === v ? 0 : o ? w * f / x - .5 : i / x | 0,
                    y = 0,
                    T = v,
                    g = 0; g < w; g++)
                        _ = g % x - c,
                        d = p - (g / x | 0),
                        k[g] = m = u ? Math.abs("y" === u ? d : _) : b(_ * _ + d * d),
                        m > y && (y = m),
                        m < T && (T = m);
                    "random" === i && te(k),
                    k.max = y - T,
                    k.min = T,
                    k.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (x > w ? w - 1 : u ? "y" === u ? w / x : x : Math.max(x, w / x)) || 0) * ("edges" === i ? -1 : 1),
                    k.b = w < 0 ? n - w : n,
                    k.u = Qt(e.amount || e.each) || 0,
                    r = r && w < 0 ? Ce(r) : r
                }
                return w = (k[t] - k.min) / k.max || 0,
                ct(k.b + (r ? r(w) : w) * k.v) + k.u
            }
        }, re = function(t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function(r) {
                var i = ct(Math.round(parseFloat(r) / t) * t * e);
                return (i - i % 1) / e + (C(r) ? 0 : Qt(r))
            }
        }, ie = function(t, e) {
            var r, i, n = F(t);
            return !n && E(t) && (r = n = t.radius || v,
            t.values ? (t = Jt(t.values),
            (i = !C(t[0])) && (r *= r)) : t = re(t.increment)),
            Gt(e, n ? A(t) ? function(e) {
                return i = t(e),
                Math.abs(i - e) <= r ? i : e
            }
            : function(e) {
                for (var n, s, a = parseFloat(i ? e.x : e), o = parseFloat(i ? e.y : 0), u = v, h = 0, f = t.length; f--; )
                    (n = i ? (n = t[f].x - a) * n + (s = t[f].y - o) * s : Math.abs(t[f] - a)) < u && (u = n,
                    h = f);
                return h = !r || u <= r ? t[h] : e,
                i || h === e || C(e) ? h : h + Qt(e)
            }
            : re(t))
        }, ne = function(t, e, r, i) {
            return Gt(F(t) ? !e : !0 === r ? !!(r = 0) : !i, (function() {
                return F(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
            }
            ))
        }, se = function(t, e, r) {
            return Gt(r, (function(r) {
                return t[~~e(r)]
            }
            ))
        }, ae = function(t) {
            for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
                i = t.indexOf(")", e),
                n = "[" === t.charAt(e + 7),
                r = t.substr(e + 7, i - e - 7).match(n ? N : B),
                a += t.substr(s, e - s) + ne(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5),
                s = i + 1;
            return a + t.substr(s, t.length - s)
        }, oe = function(t, e, r, i, n) {
            var s = e - t
              , a = i - r;
            return Gt(n, (function(e) {
                return r + ((e - t) / s * a || 0)
            }
            ))
        }, ue = function(t, e, r) {
            var i, n, s, a = t.labels, o = v;
            for (i in a)
                (n = a[i] - e) < 0 === !!r && n && o > (n = Math.abs(n)) && (s = i,
                o = n);
            return s
        }, he = function(t, e, r) {
            var i, n, s, a = t.vars, u = a[e], h = o, f = t._ctx;
            if (u)
                return i = a[e + "Params"],
                n = a.callbackScope || t,
                r && tt.length && dt(),
                f && (o = f),
                s = i ? u.apply(n, i) : u.call(n),
                o = h,
                s
        }, fe = function(t) {
            return Ot(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!a),
            t.progress() < 1 && he(t, "onInterrupt"),
            t
        }, le = [], ce = function(t) {
            if (S()) {
                var e = (t = !t.name && t.default || t).name
                  , r = A(t)
                  , i = e && !r && t.init ? function() {
                    this._props = []
                }
                : t
                  , n = {
                    init: Z,
                    render: ir,
                    add: Ne,
                    kill: sr,
                    modifier: nr,
                    rawVars: 0
                }
                  , s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: Ke,
                    aliases: {},
                    register: 0
                };
                if (be(),
                t !== i) {
                    if (rt[e])
                        return;
                    yt(i, yt(wt(t, n), s)),
                    Tt(i.prototype, Tt(n, wt(t, s))),
                    rt[i.prop = e] = i,
                    t.targetTest && (st.push(i),
                    K[e] = 1),
                    e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                Q(e, i),
                t.register && t.register(Tr, i, ur)
            } else
                le.push(t)
        }, pe = 255, _e = {
            aqua: [0, pe, pe],
            lime: [0, pe, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, pe],
            navy: [0, 0, 128],
            white: [pe, pe, pe],
            olive: [128, 128, 0],
            yellow: [pe, pe, 0],
            orange: [pe, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [pe, 0, 0],
            pink: [pe, 192, 203],
            cyan: [0, pe, pe],
            transparent: [pe, pe, pe, 0]
        }, de = function(t, e, r) {
            return (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * pe + .5 | 0
        }, me = function(t, e, r) {
            var i, n, s, a, o, u, h, f, l, c, p = t ? C(t) ? [t >> 16, t >> 8 & pe, t & pe] : 0 : _e.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
                _e[t])
                    p = _e[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (i = t.charAt(1),
                    n = t.charAt(2),
                    s = t.charAt(3),
                    t = "#" + i + i + n + n + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                    9 === t.length)
                        return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & pe, p & pe, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & pe, t & pe]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = c = t.match(B),
                    e) {
                        if (~t.indexOf("="))
                            return p = t.match(L),
                            r && p.length < 4 && (p[3] = 1),
                            p
                    } else
                        a = +p[0] % 360 / 360,
                        o = +p[1] / 100,
                        i = 2 * (u = +p[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o),
                        p.length > 3 && (p[3] *= 1),
                        p[0] = de(a + 1 / 3, i, n),
                        p[1] = de(a, i, n),
                        p[2] = de(a - 1 / 3, i, n);
                else
                    p = t.match(B) || _e.transparent;
                p = p.map(Number)
            }
            return e && !c && (i = p[0] / pe,
            n = p[1] / pe,
            s = p[2] / pe,
            u = ((h = Math.max(i, n, s)) + (f = Math.min(i, n, s))) / 2,
            h === f ? a = o = 0 : (l = h - f,
            o = u > .5 ? l / (2 - h - f) : l / (h + f),
            a = h === i ? (n - s) / l + (n < s ? 6 : 0) : h === n ? (s - i) / l + 2 : (i - n) / l + 4,
            a *= 60),
            p[0] = ~~(a + .5),
            p[1] = ~~(100 * o + .5),
            p[2] = ~~(100 * u + .5)),
            r && p.length < 4 && (p[3] = 1),
            p
        }, ge = function(t) {
            var e = []
              , r = []
              , i = -1;
            return t.split(ye).forEach((function(t) {
                var n = t.match(I) || [];
                e.push.apply(e, n),
                r.push(i += n.length + 1)
            }
            )),
            e.c = r,
            e
        }, ve = function(t, e, r) {
            var i, n, s, a, o = "", u = (t + o).match(ye), h = e ? "hsla(" : "rgba(", f = 0;
            if (!u)
                return t;
            if (u = u.map((function(t) {
                return (t = me(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }
            )),
            r && (s = ge(t),
            (i = r.c).join(o) !== s.c.join(o)))
                for (a = (n = t.replace(ye, "1").split(I)).length - 1; f < a; f++)
                    o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
            if (!n)
                for (a = (n = t.split(ye)).length - 1; f < a; f++)
                    o += n[f] + u[f];
            return o + n[a]
        }, ye = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in _e)
                e += "|" + t + "\\b";
            return new RegExp(e + ")","gi")
        }(), Te = /hsl[a]?\(/, xe = function(t) {
            var e, r = t.join(" ");
            if (ye.lastIndex = 0,
            ye.test(r))
                return e = Te.test(r),
                t[1] = ve(t[1], e),
                t[0] = ve(t[0], e, ge(t[1])),
                !0
        }, we = function() {
            var t, e, r, i, n, s, a = Date.now, o = 500, u = 33, p = a(), _ = p, m = 1e3 / 240, g = m, v = [], y = function r(h) {
                var f, l, c, d, y = a() - _, T = !0 === h;
                if (y > o && (p += y - u),
                ((f = (c = (_ += y) - p) - g) > 0 || T) && (d = ++i.frame,
                n = c - 1e3 * i.time,
                i.time = c /= 1e3,
                g += f + (f >= m ? 4 : m - f),
                l = 1),
                T || (t = e(r)),
                l)
                    for (s = 0; s < v.length; s++)
                        v[s](c, n, d, h)
            };
            return i = {
                time: 0,
                frame: 0,
                tick: function() {
                    y(!0)
                },
                deltaRatio: function(t) {
                    return n / (1e3 / (t || 60))
                },
                wake: function() {
                    c && (!f && S() && (h = f = window,
                    l = h.document || {},
                    q.gsap = Tr,
                    (h.gsapVersions || (h.gsapVersions = [])).push(Tr.version),
                    j(V || h.GreenSockGlobals || !h.gsap && h || {}),
                    r = h.requestAnimationFrame,
                    le.forEach(ce)),
                    t && i.sleep(),
                    e = r || function(t) {
                        return setTimeout(t, g - 1e3 * i.time + 1 | 0)
                    }
                    ,
                    d = 1,
                    y(2))
                },
                sleep: function() {
                    (r ? h.cancelAnimationFrame : clearTimeout)(t),
                    d = 0,
                    e = Z
                },
                lagSmoothing: function(t, e) {
                    o = t || 1 / 0,
                    u = Math.min(e || 33, o)
                },
                fps: function(t) {
                    m = 1e3 / (t || 240),
                    g = 1e3 * i.time + m
                },
                add: function(t, e, r) {
                    var n = e ? function(e, r, s, a) {
                        t(e, r, s, a),
                        i.remove(n)
                    }
                    : t;
                    return i.remove(t),
                    v[r ? "unshift" : "push"](n),
                    be(),
                    n
                },
                remove: function(t, e) {
                    ~(e = v.indexOf(t)) && v.splice(e, 1) && s >= e && s--
                },
                _listeners: v
            }
        }(), be = function() {
            return !d && we.wake()
        }, ke = {}, Me = /^[\d.\-M][\d.\-,\s]/, Oe = /["']/g, Ae = function(t) {
            for (var e, r, i, n = {}, s = t.substr(1, t.length - 3).split(":"), a = s[0], o = 1, u = s.length; o < u; o++)
                r = s[o],
                e = o !== u - 1 ? r.lastIndexOf(",") : r.length,
                i = r.substr(0, e),
                n[a] = isNaN(i) ? i.replace(Oe, "").trim() : +i,
                a = r.substr(e + 1).trim();
            return n
        }, Ce = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        }, De = function t(e, r) {
            for (var i, n = e._first; n; )
                n instanceof Le ? t(n, r) : !n.vars.yoyoEase || n._yoyo && n._repeat || n._yoyo === r || (n.timeline ? t(n.timeline, r) : (i = n._ease,
                n._ease = n._yEase,
                n._yEase = i,
                n._yoyo = r)),
                n = n._next
        }, Ee = function(t, e) {
            return t && (A(t) ? t : ke[t] || function(t) {
                var e = (t + "").split("(")
                  , r = ke[e[0]];
                return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [Ae(e[1])] : function(t) {
                    var e = t.indexOf("(") + 1
                      , r = t.indexOf(")")
                      , i = t.indexOf("(", e);
                    return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
                }(t).split(",").map(gt)) : ke._CE && Me.test(t) ? ke._CE("", t) : r
            }(t)) || e
        }, Pe = function(t, e, r, i) {
            void 0 === r && (r = function(t) {
                return 1 - e(1 - t)
            }
            ),
            void 0 === i && (i = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            }
            );
            var n, s = {
                easeIn: e,
                easeOut: r,
                easeInOut: i
            };
            return ft(t, (function(t) {
                for (var e in ke[t] = q[t] = s,
                ke[n = t.toLowerCase()] = r,
                s)
                    ke[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = ke[t + "." + e] = s[e]
            }
            )),
            s
        }, Se = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        }, Re = function t(e, r, i) {
            var n = r >= 1 ? r : 1
              , s = (i || (e ? .3 : .45)) / (r < 1 ? r : 1)
              , a = s / T * (Math.asin(1 / n) || 0)
              , o = function(t) {
                return 1 === t ? 1 : n * Math.pow(2, -10 * t) * M((t - a) * s) + 1
            }
              , u = "out" === e ? o : "in" === e ? function(t) {
                return 1 - o(1 - t)
            }
            : Se(o);
            return s = T / s,
            u.config = function(r, i) {
                return t(e, r, i)
            }
            ,
            u
        }, ze = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var i = function(t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            }
              , n = "out" === e ? i : "in" === e ? function(t) {
                return 1 - i(1 - t)
            }
            : Se(i);
            return n.config = function(r) {
                return t(e, r)
            }
            ,
            n
        };
        ft("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
            var r = e < 5 ? e + 1 : e;
            Pe(t + ",Power" + (r - 1), e ? function(t) {
                return Math.pow(t, r)
            }
            : function(t) {
                return t
            }
            , (function(t) {
                return 1 - Math.pow(1 - t, r)
            }
            ), (function(t) {
                return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
            }
            ))
        }
        )),
        ke.Linear.easeNone = ke.none = ke.Linear.easeIn,
        Pe("Elastic", Re("in"), Re("out"), Re()),
        function(t, e) {
            var r = 1 / e
              , i = function(i) {
                return i < r ? t * i * i : i < .7272727272727273 ? t * Math.pow(i - 1.5 / e, 2) + .75 : i < .9090909090909092 ? t * (i -= 2.25 / e) * i + .9375 : t * Math.pow(i - 2.625 / e, 2) + .984375
            };
            Pe("Bounce", (function(t) {
                return 1 - i(1 - t)
            }
            ), i)
        }(7.5625, 2.75),
        Pe("Expo", (function(t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        }
        )),
        Pe("Circ", (function(t) {
            return -(b(1 - t * t) - 1)
        }
        )),
        Pe("Sine", (function(t) {
            return 1 === t ? 1 : 1 - k(t * x)
        }
        )),
        Pe("Back", ze("in"), ze("out"), ze()),
        ke.SteppedEase = ke.steps = q.SteppedEase = {
            config: function(t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t
                  , i = t + (e ? 0 : 1)
                  , n = e ? 1 : 0;
                return function(t) {
                    return ((i * Wt(0, .99999999, t) | 0) + n) * r
                }
            }
        },
        g.ease = ke["quad.out"],
        ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
            return at += t + "," + t + "Params,"
        }
        ));
        var Fe = function(t, e) {
            this.id = w++,
            t._gsap = this,
            this.target = t,
            this.harness = e,
            this.get = e ? e.get : ht,
            this.set = e ? e.getSetter : Ke
        }
          , Be = function() {
            function t(t) {
                this.vars = t,
                this._delay = +t.delay || 0,
                (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
                this._yoyo = !!t.yoyo || !!t.yoyoEase),
                this._ts = 1,
                Nt(this, +t.duration, 1, 1),
                this.data = t.data,
                o && (this._ctx = o,
                o.data.push(this)),
                d || we.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
                this._delay = t,
                this) : this._delay
            }
            ,
            e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }
            ,
            e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0,
                Nt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }
            ,
            e.totalTime = function(t, e) {
                if (be(),
                !arguments.length)
                    return this._tTime;
                var r = this._dp;
                if (r && r.smoothChildTiming && this._ts) {
                    for (zt(this, t),
                    !r._dp || r.parent || Ft(r, this); r && r.parent; )
                        r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                        r = r.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && Bt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === y || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
                mt(this, t, e)),
                this
            }
            ,
            e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Et(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }
            ,
            e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }
            ,
            e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Et(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }
            ,
            e.iteration = function(t, e) {
                var r = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Pt(this._tTime, r) + 1 : 1
            }
            ,
            e.timeScale = function(t) {
                if (!arguments.length)
                    return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t)
                    return this;
                var e = this.parent && this._ts ? St(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0,
                this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
                this.totalTime(Wt(-Math.abs(this._delay), this._tDur, e), !0),
                Rt(this),
                function(t) {
                    for (var e = t.parent; e && e.parent; )
                        e._dirty = 1,
                        e.totalDuration(),
                        e = e.parent;
                    return t
                }(this)
            }
            ,
            e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t,
                t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                this._ts = this._act = 0) : (be(),
                this._ts = this._rts,
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== y && (this._tTime -= y)))),
                this) : this._ps
            }
            ,
            e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && Bt(e, this, t - this._delay),
                    this
                }
                return this._start
            }
            ,
            e.endTime = function(t) {
                return this._start + (P(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }
            ,
            e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? St(e.rawTime(t), this) : this._tTime : this._tTime
            }
            ,
            e.revert = function(t) {
                void 0 === t && (t = J);
                var e = a;
                return a = t,
                (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
                this.totalTime(-.01, t.suppressEvents)),
                "nested" !== this.data && !1 !== t.kill && this.kill(),
                a = e,
                this
            }
            ,
            e.globalTime = function(t) {
                for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                    r = e._start + r / (e._ts || 1),
                    e = e._dp;
                return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(t) : r
            }
            ,
            e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
                Xt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }
            ,
            e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t,
                    Xt(this),
                    e ? this.time(e) : this
                }
                return this._rDelay
            }
            ,
            e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t,
                this) : this._yoyo
            }
            ,
            e.seek = function(t, e) {
                return this.totalTime(Vt(this, t), P(e))
            }
            ,
            e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, P(e))
            }
            ,
            e.play = function(t, e) {
                return null != t && this.seek(t, e),
                this.reversed(!1).paused(!1)
            }
            ,
            e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
            }
            ,
            e.pause = function(t, e) {
                return null != t && this.seek(t, e),
                this.paused(!0)
            }
            ,
            e.resume = function() {
                return this.paused(!1)
            }
            ,
            e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this) : this._rts < 0
            }
            ,
            e.invalidate = function() {
                return this._initted = this._act = 0,
                this._zTime = -1e-8,
                this
            }
            ,
            e.isActive = function() {
                var t, e = this.parent || this._dp, r = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - y))
            }
            ,
            e.eventCallback = function(t, e, r) {
                var i = this.vars;
                return arguments.length > 1 ? (e ? (i[t] = e,
                r && (i[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
                this) : i[t]
            }
            ,
            e.then = function(t) {
                var e = this;
                return new Promise((function(r) {
                    var i = A(t) ? t : vt
                      , n = function() {
                        var t = e.then;
                        e.then = null,
                        A(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                        r(i),
                        e.then = t
                    };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? n() : e._prom = n
                }
                ))
            }
            ,
            e.kill = function() {
                fe(this)
            }
            ,
            t
        }();
        yt(Be.prototype, {
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
            _zTime: -1e-8,
            _prom: 0,
            _ps: !1,
            _rts: 1
        });
        var Le = function(t) {
            function e(e, r) {
                var n;
                return void 0 === e && (e = {}),
                (n = t.call(this, e) || this).labels = {},
                n.smoothChildTiming = !!e.smoothChildTiming,
                n.autoRemoveChildren = !!e.autoRemoveChildren,
                n._sort = P(e.sortChildren),
                u && Bt(e.parent || u, i(n), r),
                e.reversed && n.reverse(),
                e.paused && n.paused(!0),
                e.scrollTrigger && Lt(i(n), e.scrollTrigger),
                n
            }
            n(e, t);
            var r = e.prototype;
            return r.to = function(t, e, r) {
                return jt(0, arguments, this),
                this
            }
            ,
            r.from = function(t, e, r) {
                return jt(1, arguments, this),
                this
            }
            ,
            r.fromTo = function(t, e, r, i) {
                return jt(2, arguments, this),
                this
            }
            ,
            r.set = function(t, e, r) {
                return e.duration = 0,
                e.parent = this,
                bt(e).repeatDelay || (e.repeat = 0),
                e.immediateRender = !!e.immediateRender,
                new Qe(t,e,Vt(this, r),1),
                this
            }
            ,
            r.call = function(t, e, r) {
                return Bt(this, Qe.delayedCall(0, t, e), r)
            }
            ,
            r.staggerTo = function(t, e, r, i, n, s, a) {
                return r.duration = e,
                r.stagger = r.stagger || i,
                r.onComplete = s,
                r.onCompleteParams = a,
                r.parent = this,
                new Qe(t,r,Vt(this, n)),
                this
            }
            ,
            r.staggerFrom = function(t, e, r, i, n, s, a) {
                return r.runBackwards = 1,
                bt(r).immediateRender = P(r.immediateRender),
                this.staggerTo(t, e, r, i, n, s, a)
            }
            ,
            r.staggerFromTo = function(t, e, r, i, n, s, a, o) {
                return i.startAt = r,
                bt(i).immediateRender = P(i.immediateRender),
                this.staggerTo(t, e, i, n, s, a, o)
            }
            ,
            r.render = function(t, e, r) {
                var i, n, s, o, h, f, l, c, p, _, d, m, g = this._time, v = this._dirty ? this.totalDuration() : this._tDur, T = this._dur, x = t <= 0 ? 0 : ct(t), w = this._zTime < 0 !== t < 0 && (this._initted || !T);
                if (this !== u && x > v && t >= 0 && (x = v),
                x !== this._tTime || r || w) {
                    if (g !== this._time && T && (x += this._time - g,
                    t += this._time - g),
                    i = x,
                    p = this._start,
                    f = !(c = this._ts),
                    w && (T || (g = this._zTime),
                    (t || !e) && (this._zTime = t)),
                    this._repeat) {
                        if (d = this._yoyo,
                        h = T + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * h + t, e, r);
                        if (i = ct(x % h),
                        x === v ? (o = this._repeat,
                        i = T) : ((o = ~~(x / h)) && o === x / h && (i = T,
                        o--),
                        i > T && (i = T)),
                        _ = Pt(this._tTime, h),
                        !g && this._tTime && _ !== o && this._tTime - _ * h - this._dur <= 0 && (_ = o),
                        d && 1 & o && (i = T - i,
                        m = 1),
                        o !== _ && !this._lock) {
                            var b = d && 1 & _
                              , k = b === (d && 1 & o);
                            if (o < _ && (b = !b),
                            g = b ? 0 : T,
                            this._lock = 1,
                            this.render(g || (m ? 0 : ct(o * h)), e, !T)._lock = 0,
                            this._tTime = x,
                            !e && this.parent && he(this, "onRepeat"),
                            this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
                            g && g !== this._time || f !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                                return this;
                            if (T = this._dur,
                            v = this._tDur,
                            k && (this._lock = 2,
                            g = b ? T : -1e-4,
                            this.render(g, !0),
                            this.vars.repeatRefresh && !m && this.invalidate()),
                            this._lock = 0,
                            !this._ts && !f)
                                return this;
                            De(this, m)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (l = function(t, e, r) {
                        var i;
                        if (r > e)
                            for (i = t._first; i && i._start <= r; ) {
                                if ("isPause" === i.data && i._start > e)
                                    return i;
                                i = i._next
                            }
                        else
                            for (i = t._last; i && i._start >= r; ) {
                                if ("isPause" === i.data && i._start < e)
                                    return i;
                                i = i._prev
                            }
                    }(this, ct(g), ct(i)),
                    l && (x -= i - (i = l._start))),
                    this._tTime = x,
                    this._time = i,
                    this._act = !c,
                    this._initted || (this._onUpdate = this.vars.onUpdate,
                    this._initted = 1,
                    this._zTime = t,
                    g = 0),
                    !g && i && !e && !o && (he(this, "onStart"),
                    this._tTime !== x))
                        return this;
                    if (i >= g && t >= 0)
                        for (n = this._first; n; ) {
                            if (s = n._next,
                            (n._act || i >= n._start) && n._ts && l !== n) {
                                if (n.parent !== this)
                                    return this.render(t, e, r);
                                if (n.render(n._ts > 0 ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r),
                                i !== this._time || !this._ts && !f) {
                                    l = 0,
                                    s && (x += this._zTime = -1e-8);
                                    break
                                }
                            }
                            n = s
                        }
                    else {
                        n = this._last;
                        for (var M = t < 0 ? t : i; n; ) {
                            if (s = n._prev,
                            (n._act || M <= n._end) && n._ts && l !== n) {
                                if (n.parent !== this)
                                    return this.render(t, e, r);
                                if (n.render(n._ts > 0 ? (M - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (M - n._start) * n._ts, e, r || a && (n._initted || n._startAt)),
                                i !== this._time || !this._ts && !f) {
                                    l = 0,
                                    s && (x += this._zTime = M ? -1e-8 : y);
                                    break
                                }
                            }
                            n = s
                        }
                    }
                    if (l && !e && (this.pause(),
                    l.render(i >= g ? 0 : -1e-8)._zTime = i >= g ? 1 : -1,
                    this._ts))
                        return this._start = p,
                        Rt(this),
                        this.render(t, e, r);
                    this._onUpdate && !e && he(this, "onUpdate", !0),
                    (x === v && this._tTime >= this.totalDuration() || !x && g) && (p !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((t || !T) && (x === v && this._ts > 0 || !x && this._ts < 0) && Ot(this, 1),
                    e || t < 0 && !g || !x && !g && v || (he(this, x === v && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(x < v && this.timeScale() > 0) && this._prom())))
                }
                return this
            }
            ,
            r.add = function(t, e) {
                var r = this;
                if (C(e) || (e = Vt(this, e, t)),
                !(t instanceof Be)) {
                    if (F(t))
                        return t.forEach((function(t) {
                            return r.add(t, e)
                        }
                        )),
                        this;
                    if (O(t))
                        return this.addLabel(t, e);
                    if (!A(t))
                        return this;
                    t = Qe.delayedCall(0, t)
                }
                return this !== t ? Bt(this, t, e) : this
            }
            ,
            r.getChildren = function(t, e, r, i) {
                void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === r && (r = !0),
                void 0 === i && (i = -v);
                for (var n = [], s = this._first; s; )
                    s._start >= i && (s instanceof Qe ? e && n.push(s) : (r && n.push(s),
                    t && n.push.apply(n, s.getChildren(!0, e, r)))),
                    s = s._next;
                return n
            }
            ,
            r.getById = function(t) {
                for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                    if (e[r].vars.id === t)
                        return e[r]
            }
            ,
            r.remove = function(t) {
                return O(t) ? this.removeLabel(t) : A(t) ? this.killTweensOf(t) : (Mt(this, t),
                t === this._recent && (this._recent = this._last),
                At(this))
            }
            ,
            r.totalTime = function(e, r) {
                return arguments.length ? (this._forcing = 1,
                !this._dp && this._ts && (this._start = ct(we.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                t.prototype.totalTime.call(this, e, r),
                this._forcing = 0,
                this) : this._tTime
            }
            ,
            r.addLabel = function(t, e) {
                return this.labels[t] = Vt(this, e),
                this
            }
            ,
            r.removeLabel = function(t) {
                return delete this.labels[t],
                this
            }
            ,
            r.addPause = function(t, e, r) {
                var i = Qe.delayedCall(0, e || Z, r);
                return i.data = "isPause",
                this._hasPause = 1,
                Bt(this, i, Vt(this, t))
            }
            ,
            r.removePause = function(t) {
                var e = this._first;
                for (t = Vt(this, t); e; )
                    e._start === t && "isPause" === e.data && Ot(e),
                    e = e._next
            }
            ,
            r.killTweensOf = function(t, e, r) {
                for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                    Ie !== i[n] && i[n].kill(t, e);
                return this
            }
            ,
            r.getTweensOf = function(t, e) {
                for (var r, i = [], n = Jt(t), s = this._first, a = C(e); s; )
                    s instanceof Qe ? _t(s._targets, n) && (a ? (!Ie || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && i.push(s) : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                    s = s._next;
                return i
            }
            ,
            r.tweenTo = function(t, e) {
                e = e || {};
                var r, i = this, n = Vt(i, t), s = e, a = s.startAt, o = s.onStart, u = s.onStartParams, h = s.immediateRender, f = Qe.to(i, yt({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale()) || y,
                    onStart: function() {
                        if (i.pause(),
                        !r) {
                            var t = e.duration || Math.abs((n - (a && "time"in a ? a.time : i._time)) / i.timeScale());
                            f._dur !== t && Nt(f, t, 0, 1).render(f._time, !0, !0),
                            r = 1
                        }
                        o && o.apply(f, u || [])
                    }
                }, e));
                return h ? f.render(0) : f
            }
            ,
            r.tweenFromTo = function(t, e, r) {
                return this.tweenTo(e, yt({
                    startAt: {
                        time: Vt(this, t)
                    }
                }, r))
            }
            ,
            r.recent = function() {
                return this._recent
            }
            ,
            r.nextLabel = function(t) {
                return void 0 === t && (t = this._time),
                ue(this, Vt(this, t))
            }
            ,
            r.previousLabel = function(t) {
                return void 0 === t && (t = this._time),
                ue(this, Vt(this, t), 1)
            }
            ,
            r.currentLabel = function(t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + y)
            }
            ,
            r.shiftChildren = function(t, e, r) {
                void 0 === r && (r = 0);
                for (var i, n = this._first, s = this.labels; n; )
                    n._start >= r && (n._start += t,
                    n._end += t),
                    n = n._next;
                if (e)
                    for (i in s)
                        s[i] >= r && (s[i] += t);
                return At(this)
            }
            ,
            r.invalidate = function(e) {
                var r = this._first;
                for (this._lock = 0; r; )
                    r.invalidate(e),
                    r = r._next;
                return t.prototype.invalidate.call(this, e)
            }
            ,
            r.clear = function(t) {
                void 0 === t && (t = !0);
                for (var e, r = this._first; r; )
                    e = r._next,
                    this.remove(r),
                    r = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                At(this)
            }
            ,
            r.totalDuration = function(t) {
                var e, r, i, n = 0, s = this, a = s._last, o = v;
                if (arguments.length)
                    return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
                if (s._dirty) {
                    for (i = s.parent; a; )
                        e = a._prev,
                        a._dirty && a.totalDuration(),
                        (r = a._start) > o && s._sort && a._ts && !s._lock ? (s._lock = 1,
                        Bt(s, a, r - a._delay, 1)._lock = 0) : o = r,
                        r < 0 && a._ts && (n -= r,
                        (!i && !s._dp || i && i.smoothChildTiming) && (s._start += r / s._ts,
                        s._time -= r,
                        s._tTime -= r),
                        s.shiftChildren(-r, !1, -Infinity),
                        o = 0),
                        a._end > n && a._ts && (n = a._end),
                        a = e;
                    Nt(s, s === u && s._time > n ? s._time : n, 1, 1),
                    s._dirty = 0
                }
                return s._tDur
            }
            ,
            e.updateRoot = function(t) {
                if (u._ts && (mt(u, St(t, u)),
                p = we.frame),
                we.frame >= nt) {
                    nt += m.autoSleep || 120;
                    var e = u._first;
                    if ((!e || !e._ts) && m.autoSleep && we._listeners.length < 2) {
                        for (; e && !e._ts; )
                            e = e._next;
                        e || we.sleep()
                    }
                }
            }
            ,
            e
        }(Be);
        yt(Le.prototype, {
            _lock: 0,
            _hasPause: 0,
            _forcing: 0
        });
        var Ie, Ye, Ue = function(t, e, r, i, n, s, a) {
            var o, u, h, f, l, c, p, _, d = new ur(this._pt,t,e,0,1,rr,null,n), m = 0, g = 0;
            for (d.b = r,
            d.e = i,
            r += "",
            (p = ~(i += "").indexOf("random(")) && (i = ae(i)),
            s && (s(_ = [r, i], t, e),
            r = _[0],
            i = _[1]),
            u = r.match(Y) || []; o = Y.exec(i); )
                f = o[0],
                l = i.substring(m, o.index),
                h ? h = (h + 1) % 5 : "rgba(" === l.substr(-5) && (h = 1),
                f !== u[g++] && (c = parseFloat(u[g - 1]) || 0,
                d._pt = {
                    _next: d._pt,
                    p: l || 1 === g ? l : ",",
                    s: c,
                    c: "=" === f.charAt(1) ? pt(c, f) - c : parseFloat(f) - c,
                    m: h && h < 4 ? Math.round : 0
                },
                m = Y.lastIndex);
            return d.c = m < i.length ? i.substring(m, i.length) : "",
            d.fp = a,
            (U.test(i) || p) && (d.e = 0),
            this._pt = d,
            d
        }, Ne = function(t, e, r, i, n, s, a, o, u, h) {
            A(i) && (i = i(n || 0, t, s));
            var f, l = t[e], c = "get" !== r ? r : A(l) ? u ? t[e.indexOf("set") || !A(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : l, p = A(l) ? u ? $e : He : Ze;
            if (O(i) && (~i.indexOf("random(") && (i = ae(i)),
            "=" === i.charAt(1) && ((f = pt(c, i) + (Qt(c) || 0)) || 0 === f) && (i = f)),
            !h || c !== i || Ye)
                return isNaN(c * i) || "" === i ? (!l && !(e in t) && G(e, i),
                Ue.call(this, t, e, c, i, p, o || m.stringFilter, u)) : (f = new ur(this._pt,t,e,+c || 0,i - (c || 0),"boolean" === typeof l ? er : tr,0,p),
                u && (f.fp = u),
                a && f.modifier(a, this, t),
                this._pt = f)
        }, Xe = function(t, e, r, i, n, s) {
            var a, o, u, h;
            if (rt[t] && !1 !== (a = new rt[t]).init(n, a.rawVars ? e[t] : function(t, e, r, i, n) {
                if (A(t) && (t = je(t, n, e, r, i)),
                !E(t) || t.style && t.nodeType || F(t) || z(t))
                    return O(t) ? je(t, n, e, r, i) : t;
                var s, a = {};
                for (s in t)
                    a[s] = je(t[s], n, e, r, i);
                return a
            }(e[t], i, n, s, r), r, i, s) && (r._pt = o = new ur(r._pt,n,t,0,1,a.render,a,0,a.priority),
            r !== _))
                for (u = r._ptLookup[r._targets.indexOf(n)],
                h = a._props.length; h--; )
                    u[a._props[h]] = o;
            return a
        }, qe = function t(e, r, i) {
            var n, o, h, f, l, c, p, _, d, m, T, x, w, b = e.vars, k = b.ease, M = b.startAt, O = b.immediateRender, A = b.lazy, C = b.onUpdate, D = b.onUpdateParams, E = b.callbackScope, S = b.runBackwards, R = b.yoyoEase, z = b.keyframes, F = b.autoRevert, B = e._dur, L = e._startAt, I = e._targets, Y = e.parent, U = Y && "nested" === Y.data ? Y.vars.targets : I, N = "auto" === e._overwrite && !s, X = e.timeline;
            if (X && (!z || !k) && (k = "none"),
            e._ease = Ee(k, g.ease),
            e._yEase = R ? Ce(Ee(!0 === R ? k : R, g.ease)) : 0,
            R && e._yoyo && !e._repeat && (R = e._yEase,
            e._yEase = e._ease,
            e._ease = R),
            e._from = !X && !!b.runBackwards,
            !X || z && !b.stagger) {
                if (x = (_ = I[0] ? ut(I[0]).harness : 0) && b[_.prop],
                n = wt(b, K),
                L && (L._zTime < 0 && L.progress(1),
                r < 0 && S && O && !F ? L.render(-1, !0) : L.revert(S && B ? $ : H),
                L._lazy = 0),
                M) {
                    if (Ot(e._startAt = Qe.set(I, yt({
                        data: "isStart",
                        overwrite: !1,
                        parent: Y,
                        immediateRender: !0,
                        lazy: !L && P(A),
                        startAt: null,
                        delay: 0,
                        onUpdate: C,
                        onUpdateParams: D,
                        callbackScope: E,
                        stagger: 0
                    }, M))),
                    e._startAt._dp = 0,
                    e._startAt._sat = e,
                    r < 0 && (a || !O && !F) && e._startAt.revert($),
                    O && B && r <= 0 && i <= 0)
                        return void (r && (e._zTime = r))
                } else if (S && B && !L)
                    if (r && (O = !1),
                    h = yt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: O && !L && P(A),
                        immediateRender: O,
                        stagger: 0,
                        parent: Y
                    }, n),
                    x && (h[_.prop] = x),
                    Ot(e._startAt = Qe.set(I, h)),
                    e._startAt._dp = 0,
                    e._startAt._sat = e,
                    r < 0 && (a ? e._startAt.revert($) : e._startAt.render(-1, !0)),
                    e._zTime = r,
                    O) {
                        if (!r)
                            return
                    } else
                        t(e._startAt, y, y);
                for (e._pt = e._ptCache = 0,
                A = B && P(A) || A && !B,
                o = 0; o < I.length; o++) {
                    if (p = (l = I[o])._gsap || ot(I)[o]._gsap,
                    e._ptLookup[o] = m = {},
                    et[p.id] && tt.length && dt(),
                    T = U === I ? o : U.indexOf(l),
                    _ && !1 !== (d = new _).init(l, x || n, e, T, U) && (e._pt = f = new ur(e._pt,l,d.name,0,1,d.render,d,0,d.priority),
                    d._props.forEach((function(t) {
                        m[t] = f
                    }
                    )),
                    d.priority && (c = 1)),
                    !_ || x)
                        for (h in n)
                            rt[h] && (d = Xe(h, n, e, T, l, U)) ? d.priority && (c = 1) : m[h] = f = Ne.call(e, l, h, "get", n[h], T, U, 0, b.stringFilter);
                    e._op && e._op[o] && e.kill(l, e._op[o]),
                    N && e._pt && (Ie = e,
                    u.killTweensOf(l, m, e.globalTime(r)),
                    w = !e.parent,
                    Ie = 0),
                    e._pt && A && (et[p.id] = 1)
                }
                c && or(e),
                e._onInit && e._onInit(e)
            }
            e._onUpdate = C,
            e._initted = (!e._op || e._pt) && !w,
            z && r <= 0 && X.render(v, !0, !0)
        }, Ve = function(t, e, r, i) {
            var n, s, a = e.ease || i || "power1.inOut";
            if (F(e))
                s = r[t] || (r[t] = []),
                e.forEach((function(t, r) {
                    return s.push({
                        t: r / (e.length - 1) * 100,
                        v: t,
                        e: a
                    })
                }
                ));
            else
                for (n in e)
                    s = r[n] || (r[n] = []),
                    "ease" === n || s.push({
                        t: parseFloat(t),
                        v: e[n],
                        e: a
                    })
        }, je = function(t, e, r, i, n) {
            return A(t) ? t.call(e, r, i, n) : O(t) && ~t.indexOf("random(") ? ae(t) : t
        }, Ge = at + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", We = {};
        ft(Ge + ",id,stagger,delay,duration,paused,scrollTrigger", (function(t) {
            return We[t] = 1
        }
        ));
        var Qe = function(t) {
            function e(e, r, n, a) {
                var o;
                "number" === typeof r && (n.duration = r,
                r = n,
                n = null);
                var h, f, l, c, p, _, d, g, v = (o = t.call(this, a ? r : bt(r)) || this).vars, y = v.duration, T = v.delay, x = v.immediateRender, w = v.stagger, b = v.overwrite, k = v.keyframes, M = v.defaults, O = v.scrollTrigger, A = v.yoyoEase, D = r.parent || u, S = (F(e) || z(e) ? C(e[0]) : "length"in r) ? [e] : Jt(e);
                if (o._targets = S.length ? ot(S) : W("GSAP target " + e + " not found. https://greensock.com", !m.nullTargetWarn) || [],
                o._ptLookup = [],
                o._overwrite = b,
                k || w || R(y) || R(T)) {
                    if (r = o.vars,
                    (h = o.timeline = new Le({
                        data: "nested",
                        defaults: M || {},
                        targets: D && "nested" === D.data ? D.vars.targets : S
                    })).kill(),
                    h.parent = h._dp = i(o),
                    h._start = 0,
                    w || R(y) || R(T)) {
                        if (c = S.length,
                        d = w && ee(w),
                        E(w))
                            for (p in w)
                                ~Ge.indexOf(p) && (g || (g = {}),
                                g[p] = w[p]);
                        for (f = 0; f < c; f++)
                            (l = wt(r, We)).stagger = 0,
                            A && (l.yoyoEase = A),
                            g && Tt(l, g),
                            _ = S[f],
                            l.duration = +je(y, i(o), f, _, S),
                            l.delay = (+je(T, i(o), f, _, S) || 0) - o._delay,
                            !w && 1 === c && l.delay && (o._delay = T = l.delay,
                            o._start += T,
                            l.delay = 0),
                            h.to(_, l, d ? d(f, _, S) : 0),
                            h._ease = ke.none;
                        h.duration() ? y = T = 0 : o.timeline = 0
                    } else if (k) {
                        bt(yt(h.vars.defaults, {
                            ease: "none"
                        })),
                        h._ease = Ee(k.ease || r.ease || "none");
                        var B, L, I, Y = 0;
                        if (F(k))
                            k.forEach((function(t) {
                                return h.to(S, t, ">")
                            }
                            )),
                            h.duration();
                        else {
                            for (p in l = {},
                            k)
                                "ease" === p || "easeEach" === p || Ve(p, k[p], l, k.easeEach);
                            for (p in l)
                                for (B = l[p].sort((function(t, e) {
                                    return t.t - e.t
                                }
                                )),
                                Y = 0,
                                f = 0; f < B.length; f++)
                                    (I = {
                                        ease: (L = B[f]).e,
                                        duration: (L.t - (f ? B[f - 1].t : 0)) / 100 * y
                                    })[p] = L.v,
                                    h.to(S, I, Y),
                                    Y += I.duration;
                            h.duration() < y && h.to({}, {
                                duration: y - h.duration()
                            })
                        }
                    }
                    y || o.duration(y = h.duration())
                } else
                    o.timeline = 0;
                return !0 !== b || s || (Ie = i(o),
                u.killTweensOf(S),
                Ie = 0),
                Bt(D, i(o), n),
                r.reversed && o.reverse(),
                r.paused && o.paused(!0),
                (x || !y && !k && o._start === ct(D._time) && P(x) && Dt(i(o)) && "nested" !== D.data) && (o._tTime = -1e-8,
                o.render(Math.max(0, -T) || 0)),
                O && Lt(i(o), O),
                o
            }
            n(e, t);
            var r = e.prototype;
            return r.render = function(t, e, r) {
                var i, n, s, o, u, h, f, l, c, p = this._time, _ = this._tDur, d = this._dur, m = t < 0, g = t > _ - y && !m ? _ : t < y ? 0 : t;
                if (d) {
                    if (g !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== m) {
                        if (i = g,
                        l = this.timeline,
                        this._repeat) {
                            if (o = d + this._rDelay,
                            this._repeat < -1 && m)
                                return this.totalTime(100 * o + t, e, r);
                            if (i = ct(g % o),
                            g === _ ? (s = this._repeat,
                            i = d) : ((s = ~~(g / o)) && s === g / o && (i = d,
                            s--),
                            i > d && (i = d)),
                            (h = this._yoyo && 1 & s) && (c = this._yEase,
                            i = d - i),
                            u = Pt(this._tTime, o),
                            i === p && !r && this._initted)
                                return this._tTime = g,
                                this;
                            s !== u && (l && this._yEase && De(l, h),
                            !this.vars.repeatRefresh || h || this._lock || (this._lock = r = 1,
                            this.render(ct(o * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (It(this, m ? t : i, r, e, g))
                                return this._tTime = 0,
                                this;
                            if (p !== this._time)
                                return this;
                            if (d !== this._dur)
                                return this.render(t, e, r)
                        }
                        if (this._tTime = g,
                        this._time = i,
                        !this._act && this._ts && (this._act = 1,
                        this._lazy = 0),
                        this.ratio = f = (c || this._ease)(i / d),
                        this._from && (this.ratio = f = 1 - f),
                        i && !p && !e && !s && (he(this, "onStart"),
                        this._tTime !== g))
                            return this;
                        for (n = this._pt; n; )
                            n.r(f, n.d),
                            n = n._next;
                        l && l.render(t < 0 ? t : !i && h ? -1e-8 : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t),
                        this._onUpdate && !e && (m && Ct(this, t, 0, r),
                        he(this, "onUpdate")),
                        this._repeat && s !== u && this.vars.onRepeat && !e && this.parent && he(this, "onRepeat"),
                        g !== this._tDur && g || this._tTime !== g || (m && !this._onUpdate && Ct(this, t, 0, !0),
                        (t || !d) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && Ot(this, 1),
                        e || m && !p || !(g || p || h) || (he(this, g === _ ? "onComplete" : "onReverseComplete", !0),
                        this._prom && !(g < _ && this.timeScale() > 0) && this._prom()))
                    }
                } else
                    !function(t, e, r, i) {
                        var n, s, o, u = t.ratio, h = e < 0 || !e && (!t._start && Yt(t) && (t._initted || !Ut(t)) || (t._ts < 0 || t._dp._ts < 0) && !Ut(t)) ? 0 : 1, f = t._rDelay, l = 0;
                        if (f && t._repeat && (l = Wt(0, t._tDur, e),
                        s = Pt(l, f),
                        t._yoyo && 1 & s && (h = 1 - h),
                        s !== Pt(t._tTime, f) && (u = 1 - h,
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                        h !== u || a || i || t._zTime === y || !e && t._zTime) {
                            if (!t._initted && It(t, e, i, r, l))
                                return;
                            for (o = t._zTime,
                            t._zTime = e || (r ? y : 0),
                            r || (r = e && !o),
                            t.ratio = h,
                            t._from && (h = 1 - h),
                            t._time = 0,
                            t._tTime = l,
                            n = t._pt; n; )
                                n.r(h, n.d),
                                n = n._next;
                            e < 0 && Ct(t, e, 0, !0),
                            t._onUpdate && !r && he(t, "onUpdate"),
                            l && t._repeat && !r && t.parent && he(t, "onRepeat"),
                            (e >= t._tDur || e < 0) && t.ratio === h && (h && Ot(t, 1),
                            r || a || (he(t, h ? "onComplete" : "onReverseComplete", !0),
                            t._prom && t._prom()))
                        } else
                            t._zTime || (t._zTime = e)
                    }(this, t, e, r);
                return this
            }
            ,
            r.targets = function() {
                return this._targets
            }
            ,
            r.invalidate = function(e) {
                return (!e || !this.vars.runBackwards) && (this._startAt = 0),
                this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
                this._ptLookup = [],
                this.timeline && this.timeline.invalidate(e),
                t.prototype.invalidate.call(this, e)
            }
            ,
            r.resetTo = function(t, e, r, i) {
                d || we.wake(),
                this._ts || this.play();
                var n = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
                return this._initted || qe(this, n),
                function(t, e, r, i, n, s, a) {
                    var o, u, h, f, l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!l)
                        for (l = t._ptCache[e] = [],
                        h = t._ptLookup,
                        f = t._targets.length; f--; ) {
                            if ((o = h[f][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e && o.fp !== e; )
                                    o = o._next;
                            if (!o)
                                return Ye = 1,
                                t.vars[e] = "+=0",
                                qe(t, a),
                                Ye = 0,
                                1;
                            l.push(o)
                        }
                    for (f = l.length; f--; )
                        (o = (u = l[f])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + s * o.c : i,
                        o.c = r - o.s,
                        u.e && (u.e = lt(r) + Qt(u.e)),
                        u.b && (u.b = o.s + Qt(u.b))
                }(this, t, e, r, i, this._ease(n / this._dur), n) ? this.resetTo(t, e, r, i) : (zt(this, 0),
                this.parent || kt(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
                this.render(0))
            }
            ,
            r.kill = function(t, e) {
                if (void 0 === e && (e = "all"),
                !t && (!e || "all" === e))
                    return this._lazy = this._pt = 0,
                    this.parent ? fe(this) : this;
                if (this.timeline) {
                    var r = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Ie && !0 !== Ie.vars.overwrite)._first || fe(this),
                    this.parent && r !== this.timeline.totalDuration() && Nt(this, this._dur * this.timeline._tDur / r, 0, 1),
                    this
                }
                var i, n, s, a, o, u, h, f = this._targets, l = t ? Jt(t) : f, c = this._ptLookup, p = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
                        ;
                    return r < 0
                }(f, l))
                    return "all" === e && (this._pt = 0),
                    fe(this);
                for (i = this._op = this._op || [],
                "all" !== e && (O(e) && (o = {},
                ft(e, (function(t) {
                    return o[t] = 1
                }
                )),
                e = o),
                e = function(t, e) {
                    var r, i, n, s, a = t[0] ? ut(t[0]).harness : 0, o = a && a.aliases;
                    if (!o)
                        return e;
                    for (i in r = Tt({}, e),
                    o)
                        if (i in r)
                            for (n = (s = o[i].split(",")).length; n--; )
                                r[s[n]] = r[i];
                    return r
                }(f, e)),
                h = f.length; h--; )
                    if (~l.indexOf(f[h]))
                        for (o in n = c[h],
                        "all" === e ? (i[h] = e,
                        a = n,
                        s = {}) : (s = i[h] = i[h] || {},
                        a = e),
                        a)
                            (u = n && n[o]) && ("kill"in u.d && !0 !== u.d.kill(o) || Mt(this, u, "_pt"),
                            delete n[o]),
                            "all" !== s && (s[o] = 1);
                return this._initted && !this._pt && p && fe(this),
                this
            }
            ,
            e.to = function(t, r) {
                return new e(t,r,arguments[2])
            }
            ,
            e.from = function(t, e) {
                return jt(1, arguments)
            }
            ,
            e.delayedCall = function(t, r, i, n) {
                return new e(r,0,{
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: r,
                    onReverseComplete: r,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: n
                })
            }
            ,
            e.fromTo = function(t, e, r) {
                return jt(2, arguments)
            }
            ,
            e.set = function(t, r) {
                return r.duration = 0,
                r.repeatDelay || (r.repeat = 0),
                new e(t,r)
            }
            ,
            e.killTweensOf = function(t, e, r) {
                return u.killTweensOf(t, e, r)
            }
            ,
            e
        }(Be);
        yt(Qe.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0
        }),
        ft("staggerTo,staggerFrom,staggerFromTo", (function(t) {
            Qe[t] = function() {
                var e = new Le
                  , r = Zt.call(arguments, 0);
                return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
                e[t].apply(e, r)
            }
        }
        ));
        var Ze = function(t, e, r) {
            return t[e] = r
        }
          , He = function(t, e, r) {
            return t[e](r)
        }
          , $e = function(t, e, r, i) {
            return t[e](i.fp, r)
        }
          , Je = function(t, e, r) {
            return t.setAttribute(e, r)
        }
          , Ke = function(t, e) {
            return A(t[e]) ? He : D(t[e]) && t.setAttribute ? Je : Ze
        }
          , tr = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        }
          , er = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        }
          , rr = function(t, e) {
            var r = e._pt
              , i = "";
            if (!t && e.b)
                i = e.b;
            else if (1 === t && e.e)
                i = e.e;
            else {
                for (; r; )
                    i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i,
                    r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        }
          , ir = function(t, e) {
            for (var r = e._pt; r; )
                r.r(t, r.d),
                r = r._next
        }
          , nr = function(t, e, r, i) {
            for (var n, s = this._pt; s; )
                n = s._next,
                s.p === i && s.modifier(t, e, r),
                s = n
        }
          , sr = function(t) {
            for (var e, r, i = this._pt; i; )
                r = i._next,
                i.p === t && !i.op || i.op === t ? Mt(this, i, "_pt") : i.dep || (e = 1),
                i = r;
            return !e
        }
          , ar = function(t, e, r, i) {
            i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
        }
          , or = function(t) {
            for (var e, r, i, n, s = t._pt; s; ) {
                for (e = s._next,
                r = i; r && r.pr > s.pr; )
                    r = r._next;
                (s._prev = r ? r._prev : n) ? s._prev._next = s : i = s,
                (s._next = r) ? r._prev = s : n = s,
                s = e
            }
            t._pt = i
        }
          , ur = function() {
            function t(t, e, r, i, n, s, a, o, u) {
                this.t = e,
                this.s = i,
                this.c = n,
                this.p = r,
                this.r = s || tr,
                this.d = a || this,
                this.set = o || Ze,
                this.pr = u || 0,
                this._next = t,
                t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, r) {
                this.mSet = this.mSet || this.set,
                this.set = ar,
                this.m = t,
                this.mt = r,
                this.tween = e
            }
            ,
            t
        }();
        ft(at + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
            return K[t] = 1
        }
        )),
        q.TweenMax = q.TweenLite = Qe,
        q.TimelineLite = q.TimelineMax = Le,
        u = new Le({
            sortChildren: !1,
            defaults: g,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }),
        m.stringFilter = xe;
        var hr = []
          , fr = {}
          , lr = []
          , cr = 0
          , pr = function(t) {
            return (fr[t] || lr).map((function(t) {
                return t()
            }
            ))
        }
          , _r = function() {
            var t = Date.now()
              , e = [];
            t - cr > 2 && (pr("matchMediaInit"),
            hr.forEach((function(t) {
                var r, i, n, s, a = t.queries, o = t.conditions;
                for (i in a)
                    (r = h.matchMedia(a[i]).matches) && (n = 1),
                    r !== o[i] && (o[i] = r,
                    s = 1);
                s && (t.revert(),
                n && e.push(t))
            }
            )),
            pr("matchMediaRevert"),
            e.forEach((function(t) {
                return t.onMatch(t)
            }
            )),
            cr = t,
            pr("matchMedia"))
        }
          , dr = function() {
            function t(t, e) {
                this.selector = e && Kt(e),
                this.data = [],
                this._r = [],
                this.isReverted = !1,
                t && this.add(t)
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                A(t) && (r = e,
                e = t,
                t = A);
                var i = this
                  , n = function() {
                    var t, n = o, s = i.selector;
                    return n && n !== i && n.data.push(i),
                    r && (i.selector = Kt(r)),
                    o = i,
                    t = e.apply(i, arguments),
                    A(t) && i._r.push(t),
                    o = n,
                    i.selector = s,
                    i.isReverted = !1,
                    t
                };
                return i.last = n,
                t === A ? n(i) : t ? i[t] = n : n
            }
            ,
            e.ignore = function(t) {
                var e = o;
                o = null,
                t(this),
                o = e
            }
            ,
            e.getTweens = function() {
                var e = [];
                return this.data.forEach((function(r) {
                    return r instanceof t ? e.push.apply(e, r.getTweens()) : r instanceof Qe && !(r.parent && "nested" === r.parent.data) && e.push(r)
                }
                )),
                e
            }
            ,
            e.clear = function() {
                this._r.length = this.data.length = 0
            }
            ,
            e.kill = function(t, e) {
                var r = this;
                if (t) {
                    var i = this.getTweens();
                    this.data.forEach((function(t) {
                        "isFlip" === t.data && (t.revert(),
                        t.getChildren(!0, !0, !1).forEach((function(t) {
                            return i.splice(i.indexOf(t), 1)
                        }
                        )))
                    }
                    )),
                    i.map((function(t) {
                        return {
                            g: t.globalTime(0),
                            t: t
                        }
                    }
                    )).sort((function(t, e) {
                        return e.g - t.g || -1
                    }
                    )).forEach((function(e) {
                        return e.t.revert(t)
                    }
                    )),
                    this.data.forEach((function(e) {
                        return !(e instanceof Be) && e.revert && e.revert(t)
                    }
                    )),
                    this._r.forEach((function(e) {
                        return e(t, r)
                    }
                    )),
                    this.isReverted = !0
                } else
                    this.data.forEach((function(t) {
                        return t.kill && t.kill()
                    }
                    ));
                if (this.clear(),
                e) {
                    var n = hr.indexOf(this);
                    ~n && hr.splice(n, 1)
                }
            }
            ,
            e.revert = function(t) {
                this.kill(t || {})
            }
            ,
            t
        }()
          , mr = function() {
            function t(t) {
                this.contexts = [],
                this.scope = t
            }
            var e = t.prototype;
            return e.add = function(t, e, r) {
                E(t) || (t = {
                    matches: t
                });
                var i, n, s, a = new dr(0,r || this.scope), o = a.conditions = {};
                for (n in this.contexts.push(a),
                e = a.add("onMatch", e),
                a.queries = t,
                t)
                    "all" === n ? s = 1 : (i = h.matchMedia(t[n])) && (hr.indexOf(a) < 0 && hr.push(a),
                    (o[n] = i.matches) && (s = 1),
                    i.addListener ? i.addListener(_r) : i.addEventListener("change", _r));
                return s && e(a),
                this
            }
            ,
            e.revert = function(t) {
                this.kill(t || {})
            }
            ,
            e.kill = function(t) {
                this.contexts.forEach((function(e) {
                    return e.kill(t, !0)
                }
                ))
            }
            ,
            t
        }()
          , gr = {
            registerPlugin: function() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                    e[r] = arguments[r];
                e.forEach((function(t) {
                    return ce(t)
                }
                ))
            },
            timeline: function(t) {
                return new Le(t)
            },
            getTweensOf: function(t, e) {
                return u.getTweensOf(t, e)
            },
            getProperty: function(t, e, r, i) {
                O(t) && (t = Jt(t)[0]);
                var n = ut(t || {}).get
                  , s = r ? vt : gt;
                return "native" === r && (r = ""),
                t ? e ? s((rt[e] && rt[e].get || n)(t, e, r, i)) : function(e, r, i) {
                    return s((rt[e] && rt[e].get || n)(t, e, r, i))
                }
                : t
            },
            quickSetter: function(t, e, r) {
                if ((t = Jt(t)).length > 1) {
                    var i = t.map((function(t) {
                        return Tr.quickSetter(t, e, r)
                    }
                    ))
                      , n = i.length;
                    return function(t) {
                        for (var e = n; e--; )
                            i[e](t)
                    }
                }
                t = t[0] || {};
                var s = rt[e]
                  , a = ut(t)
                  , o = a.harness && (a.harness.aliases || {})[e] || e
                  , u = s ? function(e) {
                    var i = new s;
                    _._pt = 0,
                    i.init(t, r ? e + r : e, _, 0, [t]),
                    i.render(1, i),
                    _._pt && ir(1, _)
                }
                : a.set(t, o);
                return s ? u : function(e) {
                    return u(t, o, r ? e + r : e, a, 1)
                }
            },
            quickTo: function(t, e, r) {
                var i, n = Tr.to(t, Tt(((i = {})[e] = "+=0.1",
                i.paused = !0,
                i), r || {})), s = function(t, r, i) {
                    return n.resetTo(e, t, r, i)
                };
                return s.tween = n,
                s
            },
            isTweening: function(t) {
                return u.getTweensOf(t, !0).length > 0
            },
            defaults: function(t) {
                return t && t.ease && (t.ease = Ee(t.ease, g.ease)),
                xt(g, t || {})
            },
            config: function(t) {
                return xt(m, t || {})
            },
            registerEffect: function(t) {
                var e = t.name
                  , r = t.effect
                  , i = t.plugins
                  , n = t.defaults
                  , s = t.extendTimeline;
                (i || "").split(",").forEach((function(t) {
                    return t && !rt[t] && !q[t] && W(e + " effect requires " + t + " plugin.")
                }
                )),
                it[e] = function(t, e, i) {
                    return r(Jt(t), yt(e || {}, n), i)
                }
                ,
                s && (Le.prototype[e] = function(t, r, i) {
                    return this.add(it[e](t, E(r) ? r : (i = r) && {}, this), i)
                }
                )
            },
            registerEase: function(t, e) {
                ke[t] = Ee(e)
            },
            parseEase: function(t, e) {
                return arguments.length ? Ee(t, e) : ke
            },
            getById: function(t) {
                return u.getById(t)
            },
            exportRoot: function(t, e) {
                void 0 === t && (t = {});
                var r, i, n = new Le(t);
                for (n.smoothChildTiming = P(t.smoothChildTiming),
                u.remove(n),
                n._dp = 0,
                n._time = n._tTime = u._time,
                r = u._first; r; )
                    i = r._next,
                    !e && !r._dur && r instanceof Qe && r.vars.onComplete === r._targets[0] || Bt(n, r, r._start - r._delay),
                    r = i;
                return Bt(u, n, 0),
                n
            },
            context: function(t, e) {
                return t ? new dr(t,e) : o
            },
            matchMedia: function(t) {
                return new mr(t)
            },
            matchMediaRefresh: function() {
                return hr.forEach((function(t) {
                    var e, r, i = t.conditions;
                    for (r in i)
                        i[r] && (i[r] = !1,
                        e = 1);
                    e && t.revert()
                }
                )) || _r()
            },
            addEventListener: function(t, e) {
                var r = fr[t] || (fr[t] = []);
                ~r.indexOf(e) || r.push(e)
            },
            removeEventListener: function(t, e) {
                var r = fr[t]
                  , i = r && r.indexOf(e);
                i >= 0 && r.splice(i, 1)
            },
            utils: {
                wrap: function t(e, r, i) {
                    var n = r - e;
                    return F(e) ? se(e, t(0, e.length), r) : Gt(i, (function(t) {
                        return (n + (t - e) % n) % n + e
                    }
                    ))
                },
                wrapYoyo: function t(e, r, i) {
                    var n = r - e
                      , s = 2 * n;
                    return F(e) ? se(e, t(0, e.length - 1), r) : Gt(i, (function(t) {
                        return e + ((t = (s + (t - e) % s) % s || 0) > n ? s - t : t)
                    }
                    ))
                },
                distribute: ee,
                random: ne,
                snap: ie,
                normalize: function(t, e, r) {
                    return oe(t, e, 0, 1, r)
                },
                getUnit: Qt,
                clamp: function(t, e, r) {
                    return Gt(r, (function(r) {
                        return Wt(t, e, r)
                    }
                    ))
                },
                splitColor: me,
                toArray: Jt,
                selector: Kt,
                mapRange: oe,
                pipe: function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
                        e[r] = arguments[r];
                    return function(t) {
                        return e.reduce((function(t, e) {
                            return e(t)
                        }
                        ), t)
                    }
                },
                unitize: function(t, e) {
                    return function(r) {
                        return t(parseFloat(r)) + (e || Qt(r))
                    }
                },
                interpolate: function t(e, r, i, n) {
                    var s = isNaN(e + r) ? 0 : function(t) {
                        return (1 - t) * e + t * r
                    }
                    ;
                    if (!s) {
                        var a, o, u, h, f, l = O(e), c = {};
                        if (!0 === i && (n = 1) && (i = null),
                        l)
                            e = {
                                p: e
                            },
                            r = {
                                p: r
                            };
                        else if (F(e) && !F(r)) {
                            for (u = [],
                            h = e.length,
                            f = h - 2,
                            o = 1; o < h; o++)
                                u.push(t(e[o - 1], e[o]));
                            h--,
                            s = function(t) {
                                t *= h;
                                var e = Math.min(f, ~~t);
                                return u[e](t - e)
                            }
                            ,
                            i = r
                        } else
                            n || (e = Tt(F(e) ? [] : {}, e));
                        if (!u) {
                            for (a in r)
                                Ne.call(c, e, a, "get", r[a]);
                            s = function(t) {
                                return ir(t, c) || (l ? e.p : e)
                            }
                        }
                    }
                    return Gt(i, s)
                },
                shuffle: te
            },
            install: j,
            effects: it,
            ticker: we,
            updateRoot: Le.updateRoot,
            plugins: rt,
            globalTimeline: u,
            core: {
                PropTween: ur,
                globals: Q,
                Tween: Qe,
                Timeline: Le,
                Animation: Be,
                getCache: ut,
                _removeLinkedListItem: Mt,
                reverting: function() {
                    return a
                },
                context: function(t) {
                    return t && o && (o.data.push(t),
                    t._ctx = o),
                    o
                },
                suppressOverwrites: function(t) {
                    return s = t
                }
            }
        };
        ft("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
            return gr[t] = Qe[t]
        }
        )),
        we.add(Le.updateRoot),
        _ = gr.to({}, {
            duration: 0
        });
        var vr = function(t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
                r = r._next;
            return r
        }
          , yr = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, r, i) {
                    i._onInit = function(t) {
                        var i, n;
                        if (O(r) && (i = {},
                        ft(r, (function(t) {
                            return i[t] = 1
                        }
                        )),
                        r = i),
                        e) {
                            for (n in i = {},
                            r)
                                i[n] = e(r[n]);
                            r = i
                        }
                        !function(t, e) {
                            var r, i, n, s = t._targets;
                            for (r in e)
                                for (i = s.length; i--; )
                                    (n = t._ptLookup[i][r]) && (n = n.d) && (n._pt && (n = vr(n, r)),
                                    n && n.modifier && n.modifier(e[r], t, s[i], r))
                        }(t, r)
                    }
                }
            }
        }
          , Tr = gr.registerPlugin({
            name: "attr",
            init: function(t, e, r, i, n) {
                var s, a, o;
                for (s in this.tween = r,
                e)
                    o = t.getAttribute(s) || "",
                    (a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s)).op = s,
                    a.b = o,
                    this._props.push(s)
            },
            render: function(t, e) {
                for (var r = e._pt; r; )
                    a ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d),
                    r = r._next
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var r = e.length; r--; )
                    this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
            }
        }, yr("roundProps", re), yr("modifiers"), yr("snap", ie)) || gr;
        Qe.version = Le.version = Tr.version = "3.11.5",
        c = 1,
        S() && be();
        ke.Power0,
        ke.Power1,
        ke.Power2,
        ke.Power3,
        ke.Power4,
        ke.Linear,
        ke.Quad,
        ke.Cubic,
        ke.Quart,
        ke.Quint,
        ke.Strong,
        ke.Elastic,
        ke.Back,
        ke.SteppedEase,
        ke.Bounce,
        ke.Sine,
        ke.Expo,
        ke.Circ;
        var xr, wr, br, kr, Mr, Or, Ar, Cr, Dr = {}, Er = 180 / Math.PI, Pr = Math.PI / 180, Sr = Math.atan2, Rr = /([A-Z])/g, zr = /(left|right|width|margin|padding|x)/i, Fr = /[\s,\(]\S/, Br = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        }, Lr = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }, Ir = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        }, Yr = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        }, Ur = function(t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
        }, Nr = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        }, Xr = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        }, qr = function(t, e, r) {
            return t.style[e] = r
        }, Vr = function(t, e, r) {
            return t.style.setProperty(e, r)
        }, jr = function(t, e, r) {
            return t._gsap[e] = r
        }, Gr = function(t, e, r) {
            return t._gsap.scaleX = t._gsap.scaleY = r
        }, Wr = function(t, e, r, i, n) {
            var s = t._gsap;
            s.scaleX = s.scaleY = r,
            s.renderTransform(n, s)
        }, Qr = function(t, e, r, i, n) {
            var s = t._gsap;
            s[e] = r,
            s.renderTransform(n, s)
        }, Zr = "transform", Hr = Zr + "Origin", $r = function t(e, r) {
            var i = this
              , n = this.target
              , s = n.style;
            if (e in Dr) {
                if (this.tfm = this.tfm || {},
                "transform" === e)
                    return Br.transform.split(",").forEach((function(e) {
                        return t.call(i, e, r)
                    }
                    ));
                if (~(e = Br[e] || e).indexOf(",") ? e.split(",").forEach((function(t) {
                    return i.tfm[t] = di(n, t)
                }
                )) : this.tfm[e] = n._gsap.x ? n._gsap[e] : di(n, e),
                this.props.indexOf(Zr) >= 0)
                    return;
                n._gsap.svg && (this.svgo = n.getAttribute("data-svg-origin"),
                this.props.push(Hr, r, "")),
                e = Zr
            }
            (s || r) && this.props.push(e, r, s[e])
        }, Jr = function(t) {
            t.translate && (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"))
        }, Kr = function() {
            var t, e, r = this.props, i = this.target, n = i.style, s = i._gsap;
            for (t = 0; t < r.length; t += 3)
                r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(Rr, "-$1").toLowerCase());
            if (this.tfm) {
                for (e in this.tfm)
                    s[e] = this.tfm[e];
                s.svg && (s.renderTransform(),
                i.setAttribute("data-svg-origin", this.svgo || "")),
                (t = Ar()) && t.isStart || n[Zr] || (Jr(n),
                s.uncache = 1)
            }
        }, ti = function(t, e) {
            var r = {
                target: t,
                props: [],
                revert: Kr,
                save: $r
            };
            return t._gsap || Tr.core.getCache(t),
            e && e.split(",").forEach((function(t) {
                return r.save(t)
            }
            )),
            r
        }, ei = function(t, e) {
            var r = wr.createElementNS ? wr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : wr.createElement(t);
            return r.style ? r : wr.createElement(t)
        }, ri = function t(e, r, i) {
            var n = getComputedStyle(e);
            return n[r] || n.getPropertyValue(r.replace(Rr, "-$1").toLowerCase()) || n.getPropertyValue(r) || !i && t(e, ni(r) || r, 1) || ""
        }, ii = "O,Moz,ms,Ms,Webkit".split(","), ni = function(t, e, r) {
            var i = (e || Mr).style
              , n = 5;
            if (t in i && !r)
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(ii[n] + t in i); )
                ;
            return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? ii[n] : "") + t
        }, si = function() {
            "undefined" !== typeof window && window.document && (xr = window,
            wr = xr.document,
            br = wr.documentElement,
            Mr = ei("div") || {
                style: {}
            },
            ei("div"),
            Zr = ni(Zr),
            Hr = Zr + "Origin",
            Mr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            Cr = !!ni("perspective"),
            Ar = Tr.core.reverting,
            kr = 1)
        }, ai = function t(e) {
            var r, i = ei("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, s = this.nextSibling, a = this.style.cssText;
            if (br.appendChild(i),
            i.appendChild(this),
            this.style.display = "block",
            e)
                try {
                    r = this.getBBox(),
                    this._gsapBBox = this.getBBox,
                    this.getBBox = t
                } catch (o) {}
            else
                this._gsapBBox && (r = this._gsapBBox());
            return n && (s ? n.insertBefore(this, s) : n.appendChild(this)),
            br.removeChild(i),
            this.style.cssText = a,
            r
        }, oi = function(t, e) {
            for (var r = e.length; r--; )
                if (t.hasAttribute(e[r]))
                    return t.getAttribute(e[r])
        }, ui = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (r) {
                e = ai.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === ai || (e = ai.call(t, !0)),
            !e || e.width || e.x || e.y ? e : {
                x: +oi(t, ["x", "cx", "x1"]) || 0,
                y: +oi(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        }, hi = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ui(t))
        }, fi = function(t, e) {
            if (e) {
                var r = t.style;
                e in Dr && e !== Hr && (e = Zr),
                r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                r.removeProperty(e.replace(Rr, "-$1").toLowerCase())) : r.removeAttribute(e)
            }
        }, li = function(t, e, r, i, n, s) {
            var a = new ur(t._pt,e,r,0,1,s ? Xr : Nr);
            return t._pt = a,
            a.b = i,
            a.e = n,
            t._props.push(r),
            a
        }, ci = {
            deg: 1,
            rad: 1,
            turn: 1
        }, pi = {
            grid: 1,
            flex: 1
        }, _i = function t(e, r, i, n) {
            var s, a, o, u, h = parseFloat(i) || 0, f = (i + "").trim().substr((h + "").length) || "px", l = Mr.style, c = zr.test(r), p = "svg" === e.tagName.toLowerCase(), _ = (p ? "client" : "offset") + (c ? "Width" : "Height"), d = 100, m = "px" === n, g = "%" === n;
            return n === f || !h || ci[n] || ci[f] ? h : ("px" !== f && !m && (h = t(e, r, i, "px")),
            u = e.getCTM && hi(e),
            !g && "%" !== f || !Dr[r] && !~r.indexOf("adius") ? (l[c ? "width" : "height"] = d + (m ? f : n),
            a = ~r.indexOf("adius") || "em" === n && e.appendChild && !p ? e : e.parentNode,
            u && (a = (e.ownerSVGElement || {}).parentNode),
            a && a !== wr && a.appendChild || (a = wr.body),
            (o = a._gsap) && g && o.width && c && o.time === we.time && !o.uncache ? lt(h / o.width * d) : ((g || "%" === f) && !pi[ri(a, "display")] && (l.position = ri(e, "position")),
            a === e && (l.position = "static"),
            a.appendChild(Mr),
            s = Mr[_],
            a.removeChild(Mr),
            l.position = "absolute",
            c && g && ((o = ut(a)).time = we.time,
            o.width = a[_]),
            lt(m ? s * h / d : s && h ? d / s * h : 0))) : (s = u ? e.getBBox()[c ? "width" : "height"] : e[_],
            lt(g ? h / s * d : h / 100 * s)))
        }, di = function(t, e, r, i) {
            var n;
            return kr || si(),
            e in Br && "transform" !== e && ~(e = Br[e]).indexOf(",") && (e = e.split(",")[0]),
            Dr[e] && "transform" !== e ? (n = Ai(t, i),
            n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Ci(ri(t, Hr)) + " " + n.zOrigin + "px") : (!(n = t.style[e]) || "auto" === n || i || ~(n + "").indexOf("calc(")) && (n = Ti[e] && Ti[e](t, e, r) || ri(t, e) || ht(t, e) || ("opacity" === e ? 1 : 0)),
            r && !~(n + "").trim().indexOf(" ") ? _i(t, e, n, r) + r : n
        }, mi = function(t, e, r, i) {
            if (!r || "none" === r) {
                var n = ni(e, t, 1)
                  , s = n && ri(t, n, 1);
                s && s !== r ? (e = n,
                r = s) : "borderColor" === e && (r = ri(t, "borderTopColor"))
            }
            var a, o, u, h, f, l, c, p, _, d, g, v = new ur(this._pt,t.style,e,0,1,rr), y = 0, T = 0;
            if (v.b = r,
            v.e = i,
            r += "",
            "auto" === (i += "") && (t.style[e] = i,
            i = ri(t, e) || i,
            t.style[e] = r),
            xe(a = [r, i]),
            i = a[1],
            u = (r = a[0]).match(I) || [],
            (i.match(I) || []).length) {
                for (; o = I.exec(i); )
                    c = o[0],
                    _ = i.substring(y, o.index),
                    f ? f = (f + 1) % 5 : "rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5) || (f = 1),
                    c !== (l = u[T++] || "") && (h = parseFloat(l) || 0,
                    g = l.substr((h + "").length),
                    "=" === c.charAt(1) && (c = pt(h, c) + g),
                    p = parseFloat(c),
                    d = c.substr((p + "").length),
                    y = I.lastIndex - d.length,
                    d || (d = d || m.units[e] || g,
                    y === i.length && (i += d,
                    v.e += d)),
                    g !== d && (h = _i(t, e, l, d) || 0),
                    v._pt = {
                        _next: v._pt,
                        p: _ || 1 === T ? _ : ",",
                        s: h,
                        c: p - h,
                        m: f && f < 4 || "zIndex" === e ? Math.round : 0
                    });
                v.c = y < i.length ? i.substring(y, i.length) : ""
            } else
                v.r = "display" === e && "none" === i ? Xr : Nr;
            return U.test(i) && (v.e = 0),
            this._pt = v,
            v
        }, gi = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        }, vi = function(t) {
            var e = t.split(" ")
              , r = e[0]
              , i = e[1] || "50%";
            return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r,
            r = i,
            i = t),
            e[0] = gi[r] || r,
            e[1] = gi[i] || i,
            e.join(" ")
        }, yi = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var r, i, n, s = e.t, a = s.style, o = e.u, u = s._gsap;
                if ("all" === o || !0 === o)
                    a.cssText = "",
                    i = 1;
                else
                    for (n = (o = o.split(",")).length; --n > -1; )
                        r = o[n],
                        Dr[r] && (i = 1,
                        r = "transformOrigin" === r ? Hr : Zr),
                        fi(s, r);
                i && (fi(s, Zr),
                u && (u.svg && s.removeAttribute("transform"),
                Ai(s, 1),
                u.uncache = 1,
                Jr(a)))
            }
        }, Ti = {
            clearProps: function(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var s = t._pt = new ur(t._pt,e,r,0,0,yi);
                    return s.u = i,
                    s.pr = -10,
                    s.tween = n,
                    t._props.push(r),
                    1
                }
            }
        }, xi = [1, 0, 0, 1, 0, 0], wi = {}, bi = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        }, ki = function(t) {
            var e = ri(t, Zr);
            return bi(e) ? xi : e.substr(7).match(L).map(lt)
        }, Mi = function(t, e) {
            var r, i, n, s, a = t._gsap || ut(t), o = t.style, u = ki(t);
            return a.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? xi : u : (u !== xi || t.offsetParent || t === br || a.svg || (n = o.display,
            o.display = "block",
            (r = t.parentNode) && t.offsetParent || (s = 1,
            i = t.nextElementSibling,
            br.appendChild(t)),
            u = ki(t),
            n ? o.display = n : fi(t, "display"),
            s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : br.removeChild(t))),
            e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        }, Oi = function(t, e, r, i, n, s) {
            var a, o, u, h = t._gsap, f = n || Mi(t, !0), l = h.xOrigin || 0, c = h.yOrigin || 0, p = h.xOffset || 0, _ = h.yOffset || 0, d = f[0], m = f[1], g = f[2], v = f[3], y = f[4], T = f[5], x = e.split(" "), w = parseFloat(x[0]) || 0, b = parseFloat(x[1]) || 0;
            r ? f !== xi && (o = d * v - m * g) && (u = w * (-m / o) + b * (d / o) - (d * T - m * y) / o,
            w = w * (v / o) + b * (-g / o) + (g * T - v * y) / o,
            b = u) : (w = (a = ui(t)).x + (~x[0].indexOf("%") ? w / 100 * a.width : w),
            b = a.y + (~(x[1] || x[0]).indexOf("%") ? b / 100 * a.height : b)),
            i || !1 !== i && h.smooth ? (y = w - l,
            T = b - c,
            h.xOffset = p + (y * d + T * g) - y,
            h.yOffset = _ + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0,
            h.xOrigin = w,
            h.yOrigin = b,
            h.smooth = !!i,
            h.origin = e,
            h.originIsAbsolute = !!r,
            t.style[Hr] = "0px 0px",
            s && (li(s, h, "xOrigin", l, w),
            li(s, h, "yOrigin", c, b),
            li(s, h, "xOffset", p, h.xOffset),
            li(s, h, "yOffset", _, h.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + b)
        }, Ai = function(t, e) {
            var r = t._gsap || new Fe(t);
            if ("x"in r && !e && !r.uncache)
                return r;
            var i, n, s, a, o, u, h, f, l, c, p, _, d, g, v, y, T, x, w, b, k, M, O, A, C, D, E, P, S, R, z, F, B = t.style, L = r.scaleX < 0, I = "px", Y = "deg", U = getComputedStyle(t), N = ri(t, Hr) || "0";
            return i = n = s = u = h = f = l = c = p = 0,
            a = o = 1,
            r.svg = !(!t.getCTM || !hi(t)),
            U.translate && ("none" === U.translate && "none" === U.scale && "none" === U.rotate || (B[Zr] = ("none" !== U.translate ? "translate3d(" + (U.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== U.rotate ? "rotate(" + U.rotate + ") " : "") + ("none" !== U.scale ? "scale(" + U.scale.split(" ").join(",") + ") " : "") + ("none" !== U[Zr] ? U[Zr] : "")),
            B.scale = B.rotate = B.translate = "none"),
            g = Mi(t, r.svg),
            r.svg && (r.uncache ? (C = t.getBBox(),
            N = r.xOrigin - C.x + "px " + (r.yOrigin - C.y) + "px",
            A = "") : A = !e && t.getAttribute("data-svg-origin"),
            Oi(t, A || N, !!A || r.originIsAbsolute, !1 !== r.smooth, g)),
            _ = r.xOrigin || 0,
            d = r.yOrigin || 0,
            g !== xi && (x = g[0],
            w = g[1],
            b = g[2],
            k = g[3],
            i = M = g[4],
            n = O = g[5],
            6 === g.length ? (a = Math.sqrt(x * x + w * w),
            o = Math.sqrt(k * k + b * b),
            u = x || w ? Sr(w, x) * Er : 0,
            (l = b || k ? Sr(b, k) * Er + u : 0) && (o *= Math.abs(Math.cos(l * Pr))),
            r.svg && (i -= _ - (_ * x + d * b),
            n -= d - (_ * w + d * k))) : (F = g[6],
            R = g[7],
            E = g[8],
            P = g[9],
            S = g[10],
            z = g[11],
            i = g[12],
            n = g[13],
            s = g[14],
            h = (v = Sr(F, S)) * Er,
            v && (A = M * (y = Math.cos(-v)) + E * (T = Math.sin(-v)),
            C = O * y + P * T,
            D = F * y + S * T,
            E = M * -T + E * y,
            P = O * -T + P * y,
            S = F * -T + S * y,
            z = R * -T + z * y,
            M = A,
            O = C,
            F = D),
            f = (v = Sr(-b, S)) * Er,
            v && (y = Math.cos(-v),
            z = k * (T = Math.sin(-v)) + z * y,
            x = A = x * y - E * T,
            w = C = w * y - P * T,
            b = D = b * y - S * T),
            u = (v = Sr(w, x)) * Er,
            v && (A = x * (y = Math.cos(v)) + w * (T = Math.sin(v)),
            C = M * y + O * T,
            w = w * y - x * T,
            O = O * y - M * T,
            x = A,
            M = C),
            h && Math.abs(h) + Math.abs(u) > 359.9 && (h = u = 0,
            f = 180 - f),
            a = lt(Math.sqrt(x * x + w * w + b * b)),
            o = lt(Math.sqrt(O * O + F * F)),
            v = Sr(M, O),
            l = Math.abs(v) > 2e-4 ? v * Er : 0,
            p = z ? 1 / (z < 0 ? -z : z) : 0),
            r.svg && (A = t.getAttribute("transform"),
            r.forceCSS = t.setAttribute("transform", "") || !bi(ri(t, Zr)),
            A && t.setAttribute("transform", A))),
            Math.abs(l) > 90 && Math.abs(l) < 270 && (L ? (a *= -1,
            l += u <= 0 ? 180 : -180,
            u += u <= 0 ? 180 : -180) : (o *= -1,
            l += l <= 0 ? 180 : -180)),
            e = e || r.uncache,
            r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + I,
            r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + I,
            r.z = s + I,
            r.scaleX = lt(a),
            r.scaleY = lt(o),
            r.rotation = lt(u) + Y,
            r.rotationX = lt(h) + Y,
            r.rotationY = lt(f) + Y,
            r.skewX = l + Y,
            r.skewY = c + Y,
            r.transformPerspective = p + I,
            (r.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (B[Hr] = Ci(N)),
            r.xOffset = r.yOffset = 0,
            r.force3D = m.force3D,
            r.renderTransform = r.svg ? Fi : Cr ? zi : Ei,
            r.uncache = 0,
            r
        }, Ci = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        }, Di = function(t, e, r) {
            var i = Qt(e);
            return lt(parseFloat(e) + parseFloat(_i(t, "x", r + "px", i))) + i
        }, Ei = function(t, e) {
            e.z = "0px",
            e.rotationY = e.rotationX = "0deg",
            e.force3D = 0,
            zi(t, e)
        }, Pi = "0deg", Si = "0px", Ri = ") ", zi = function(t, e) {
            var r = e || this
              , i = r.xPercent
              , n = r.yPercent
              , s = r.x
              , a = r.y
              , o = r.z
              , u = r.rotation
              , h = r.rotationY
              , f = r.rotationX
              , l = r.skewX
              , c = r.skewY
              , p = r.scaleX
              , _ = r.scaleY
              , d = r.transformPerspective
              , m = r.force3D
              , g = r.target
              , v = r.zOrigin
              , y = ""
              , T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (f !== Pi || h !== Pi)) {
                var x, w = parseFloat(h) * Pr, b = Math.sin(w), k = Math.cos(w);
                w = parseFloat(f) * Pr,
                x = Math.cos(w),
                s = Di(g, s, b * x * -v),
                a = Di(g, a, -Math.sin(w) * -v),
                o = Di(g, o, k * x * -v + v)
            }
            d !== Si && (y += "perspective(" + d + Ri),
            (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
            (T || s !== Si || a !== Si || o !== Si) && (y += o !== Si || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Ri),
            u !== Pi && (y += "rotate(" + u + Ri),
            h !== Pi && (y += "rotateY(" + h + Ri),
            f !== Pi && (y += "rotateX(" + f + Ri),
            l === Pi && c === Pi || (y += "skew(" + l + ", " + c + Ri),
            1 === p && 1 === _ || (y += "scale(" + p + ", " + _ + Ri),
            g.style[Zr] = y || "translate(0, 0)"
        }, Fi = function(t, e) {
            var r, i, n, s, a, o = e || this, u = o.xPercent, h = o.yPercent, f = o.x, l = o.y, c = o.rotation, p = o.skewX, _ = o.skewY, d = o.scaleX, m = o.scaleY, g = o.target, v = o.xOrigin, y = o.yOrigin, T = o.xOffset, x = o.yOffset, w = o.forceCSS, b = parseFloat(f), k = parseFloat(l);
            c = parseFloat(c),
            p = parseFloat(p),
            (_ = parseFloat(_)) && (p += _ = parseFloat(_),
            c += _),
            c || p ? (c *= Pr,
            p *= Pr,
            r = Math.cos(c) * d,
            i = Math.sin(c) * d,
            n = Math.sin(c - p) * -m,
            s = Math.cos(c - p) * m,
            p && (_ *= Pr,
            a = Math.tan(p - _),
            n *= a = Math.sqrt(1 + a * a),
            s *= a,
            _ && (a = Math.tan(_),
            r *= a = Math.sqrt(1 + a * a),
            i *= a)),
            r = lt(r),
            i = lt(i),
            n = lt(n),
            s = lt(s)) : (r = d,
            s = m,
            i = n = 0),
            (b && !~(f + "").indexOf("px") || k && !~(l + "").indexOf("px")) && (b = _i(g, "x", f, "px"),
            k = _i(g, "y", l, "px")),
            (v || y || T || x) && (b = lt(b + v - (v * r + y * n) + T),
            k = lt(k + y - (v * i + y * s) + x)),
            (u || h) && (a = g.getBBox(),
            b = lt(b + u / 100 * a.width),
            k = lt(k + h / 100 * a.height)),
            a = "matrix(" + r + "," + i + "," + n + "," + s + "," + b + "," + k + ")",
            g.setAttribute("transform", a),
            w && (g.style[Zr] = a)
        }, Bi = function(t, e, r, i, n) {
            var s, a, o = 360, u = O(n), h = parseFloat(n) * (u && ~n.indexOf("rad") ? Er : 1) - i, f = i + h + "deg";
            return u && ("short" === (s = n.split("_")[1]) && (h %= o) !== h % 180 && (h += h < 0 ? o : -360),
            "cw" === s && h < 0 ? h = (h + 36e9) % o - ~~(h / o) * o : "ccw" === s && h > 0 && (h = (h - 36e9) % o - ~~(h / o) * o)),
            t._pt = a = new ur(t._pt,e,r,i,h,Ir),
            a.e = f,
            a.u = "deg",
            t._props.push(r),
            a
        }, Li = function(t, e) {
            for (var r in e)
                t[r] = e[r];
            return t
        }, Ii = function(t, e, r) {
            var i, n, s, a, o, u, h, f = Li({}, r._gsap), l = r.style;
            for (n in f.svg ? (s = r.getAttribute("transform"),
            r.setAttribute("transform", ""),
            l[Zr] = e,
            i = Ai(r, 1),
            fi(r, Zr),
            r.setAttribute("transform", s)) : (s = getComputedStyle(r)[Zr],
            l[Zr] = e,
            i = Ai(r, 1),
            l[Zr] = s),
            Dr)
                (s = f[n]) !== (a = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Qt(s) !== (h = Qt(a)) ? _i(r, n, s, h) : parseFloat(s),
                u = parseFloat(a),
                t._pt = new ur(t._pt,i,n,o,u - o,Lr),
                t._pt.u = h || 0,
                t._props.push(n));
            Li(i, f)
        };
        ft("padding,margin,Width,Radius", (function(t, e) {
            var r = "Top"
              , i = "Right"
              , n = "Bottom"
              , s = "Left"
              , a = (e < 3 ? [r, i, n, s] : [r + s, r + i, n + i, n + s]).map((function(r) {
                return e < 2 ? t + r : "border" + r + t
            }
            ));
            Ti[e > 1 ? "border" + t : t] = function(t, e, r, i, n) {
                var s, o;
                if (arguments.length < 4)
                    return s = a.map((function(e) {
                        return di(t, e, r)
                    }
                    )),
                    5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
                s = (i + "").split(" "),
                o = {},
                a.forEach((function(t, e) {
                    return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
                }
                )),
                t.init(e, o, n)
            }
        }
        ));
        var Yi = {
            name: "css",
            register: si,
            targetTest: function(t) {
                return t.style && t.nodeType
            },
            init: function(t, e, r, i, n) {
                var s, a, o, u, h, f, l, c, p, _, d, g, v, y, T, x, w = this._props, b = t.style, k = r.vars.startAt;
                for (l in kr || si(),
                this.styles = this.styles || ti(t),
                x = this.styles.props,
                this.tween = r,
                e)
                    if ("autoRound" !== l && (a = e[l],
                    !rt[l] || !Xe(l, e, r, i, t, n)))
                        if (h = typeof a,
                        f = Ti[l],
                        "function" === h && (h = typeof (a = a.call(r, i, t, n))),
                        "string" === h && ~a.indexOf("random(") && (a = ae(a)),
                        f)
                            f(this, t, l, a, r) && (T = 1);
                        else if ("--" === l.substr(0, 2))
                            s = (getComputedStyle(t).getPropertyValue(l) + "").trim(),
                            a += "",
                            ye.lastIndex = 0,
                            ye.test(s) || (c = Qt(s),
                            p = Qt(a)),
                            p ? c !== p && (s = _i(t, l, s, p) + p) : c && (a += c),
                            this.add(b, "setProperty", s, a, i, n, 0, 0, l),
                            w.push(l),
                            x.push(l, 0, b[l]);
                        else if ("undefined" !== h) {
                            if (k && l in k ? (s = "function" === typeof k[l] ? k[l].call(r, i, t, n) : k[l],
                            O(s) && ~s.indexOf("random(") && (s = ae(s)),
                            Qt(s + "") || (s += m.units[l] || Qt(di(t, l)) || ""),
                            "=" === (s + "").charAt(1) && (s = di(t, l))) : s = di(t, l),
                            u = parseFloat(s),
                            (_ = "string" === h && "=" === a.charAt(1) && a.substr(0, 2)) && (a = a.substr(2)),
                            o = parseFloat(a),
                            l in Br && ("autoAlpha" === l && (1 === u && "hidden" === di(t, "visibility") && o && (u = 0),
                            x.push("visibility", 0, b.visibility),
                            li(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                            "scale" !== l && "transform" !== l && ~(l = Br[l]).indexOf(",") && (l = l.split(",")[0])),
                            d = l in Dr)
                                if (this.styles.save(l),
                                g || ((v = t._gsap).renderTransform && !e.parseTransform || Ai(t, e.parseTransform),
                                y = !1 !== e.smoothOrigin && v.smooth,
                                (g = this._pt = new ur(this._pt,b,Zr,0,1,v.renderTransform,v,0,-1)).dep = 1),
                                "scale" === l)
                                    this._pt = new ur(this._pt,v,"scaleY",v.scaleY,(_ ? pt(v.scaleY, _ + o) : o) - v.scaleY || 0,Lr),
                                    this._pt.u = 0,
                                    w.push("scaleY", l),
                                    l += "X";
                                else {
                                    if ("transformOrigin" === l) {
                                        x.push(Hr, 0, b[Hr]),
                                        a = vi(a),
                                        v.svg ? Oi(t, a, 0, y, 0, this) : ((p = parseFloat(a.split(" ")[2]) || 0) !== v.zOrigin && li(this, v, "zOrigin", v.zOrigin, p),
                                        li(this, b, l, Ci(s), Ci(a)));
                                        continue
                                    }
                                    if ("svgOrigin" === l) {
                                        Oi(t, a, 1, y, 0, this);
                                        continue
                                    }
                                    if (l in wi) {
                                        Bi(this, v, l, u, _ ? pt(u, _ + a) : a);
                                        continue
                                    }
                                    if ("smoothOrigin" === l) {
                                        li(this, v, "smooth", v.smooth, a);
                                        continue
                                    }
                                    if ("force3D" === l) {
                                        v[l] = a;
                                        continue
                                    }
                                    if ("transform" === l) {
                                        Ii(this, a, t);
                                        continue
                                    }
                                }
                            else
                                l in b || (l = ni(l) || l);
                            if (d || (o || 0 === o) && (u || 0 === u) && !Fr.test(a) && l in b)
                                o || (o = 0),
                                (c = (s + "").substr((u + "").length)) !== (p = Qt(a) || (l in m.units ? m.units[l] : c)) && (u = _i(t, l, s, p)),
                                this._pt = new ur(this._pt,d ? v : b,l,u,(_ ? pt(u, _ + o) : o) - u,d || "px" !== p && "zIndex" !== l || !1 === e.autoRound ? Lr : Ur),
                                this._pt.u = p || 0,
                                c !== p && "%" !== p && (this._pt.b = s,
                                this._pt.r = Yr);
                            else if (l in b)
                                mi.call(this, t, l, s, _ ? _ + a : a);
                            else if (l in t)
                                this.add(t, l, s || t[l], _ ? _ + a : a, i, n);
                            else if ("parseTransform" !== l) {
                                G(l, a);
                                continue
                            }
                            d || (l in b ? x.push(l, 0, b[l]) : x.push(l, 1, s || t[l])),
                            w.push(l)
                        }
                T && or(this)
            },
            render: function(t, e) {
                if (e.tween._time || !Ar())
                    for (var r = e._pt; r; )
                        r.r(t, r.d),
                        r = r._next;
                else
                    e.styles.revert()
            },
            get: di,
            aliases: Br,
            getSetter: function(t, e, r) {
                var i = Br[e];
                return i && i.indexOf(",") < 0 && (e = i),
                e in Dr && e !== Hr && (t._gsap.x || di(t, "x")) ? r && Or === r ? "scale" === e ? Gr : jr : (Or = r || {}) && ("scale" === e ? Wr : Qr) : t.style && !D(t.style[e]) ? qr : ~e.indexOf("-") ? Vr : Ke(t, e)
            },
            core: {
                _removeProperty: fi,
                _getMatrix: Mi
            }
        };
        Tr.utils.checkPrefix = ni,
        Tr.core.getStyleSaver = ti,
        function(t, e, r, i) {
            var n = ft(t + "," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
                Dr[t] = 1
            }
            ));
            ft(e, (function(t) {
                m.units[t] = "deg",
                wi[t] = 1
            }
            )),
            Br[n[13]] = t + "," + e,
            ft("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
                var e = t.split(":");
                Br[e[1]] = n[e[0]]
            }
            ))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"),
        ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
            m.units[t] = "px"
        }
        )),
        Tr.registerPlugin(Yi);
        var Ui = Tr.registerPlugin(Yi) || Tr;
        Ui.core.Tween
    }
}]);
//# sourceMappingURL=1520.a0e50287.chunk.js.map
