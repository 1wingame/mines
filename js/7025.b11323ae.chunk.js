(self.webpackChunkcoin_flip_app_ts = self.webpackChunkcoin_flip_app_ts || []).push([[7025], {
    1426: function(e) {
        var t, n, r = e.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function i() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === o || !t) && setTimeout)
                return t = setTimeout,
                setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (n) {
                try {
                    return t.call(null, e, 0)
                } catch (n) {
                    return t.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                t = "function" === typeof setTimeout ? setTimeout : o
            } catch (e) {
                t = o
            }
            try {
                n = "function" === typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                n = i
            }
        }();
        var s, u = [], c = !1, l = -1;
        function f() {
            c && s && (c = !1,
            s.length ? u = s.concat(u) : l = -1,
            u.length && p())
        }
        function p() {
            if (!c) {
                var e = a(f);
                c = !0;
                for (var t = u.length; t; ) {
                    for (s = u,
                    u = []; ++l < t; )
                        s && s[l].run();
                    l = -1,
                    t = u.length
                }
                s = null,
                c = !1,
                function(e) {
                    if (n === clearTimeout)
                        return clearTimeout(e);
                    if ((n === i || !n) && clearTimeout)
                        return n = clearTimeout,
                        clearTimeout(e);
                    try {
                        return n(e)
                    } catch (t) {
                        try {
                            return n.call(null, e)
                        } catch (t) {
                            return n.call(this, e)
                        }
                    }
                }(e)
            }
        }
        function g(e, t) {
            this.fun = e,
            this.array = t
        }
        function h() {}
        r.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            u.push(new g(e,t)),
            1 !== u.length || c || a(p)
        }
        ,
        g.prototype.run = function() {
            this.fun.apply(null, this.array)
        }
        ,
        r.title = "browser",
        r.browser = !0,
        r.env = {},
        r.argv = [],
        r.version = "",
        r.versions = {},
        r.on = h,
        r.addListener = h,
        r.once = h,
        r.off = h,
        r.removeListener = h,
        r.removeAllListeners = h,
        r.emit = h,
        r.prependListener = h,
        r.prependOnceListener = h,
        r.listeners = function(e) {
            return []
        }
        ,
        r.binding = function(e) {
            throw new Error("process.binding is not supported")
        }
        ,
        r.cwd = function() {
            return "/"
        }
        ,
        r.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }
        ,
        r.umask = function() {
            return 0
        }
    },
    3533: function(e, t, n) {
        "use strict";
        n.d(t, {
            a: function() {
                return i
            }
        });
        var r = n(2791)
          , o = n(8589);
        function i(e) {
            var t = e.i18n
              , n = e.defaultNS
              , i = e.children
              , a = (0,
            r.useMemo)((function() {
                return {
                    i18n: t,
                    defaultNS: n
                }
            }
            ), [t, n]);
            return (0,
            r.createElement)(o.OO.Provider, {
                value: a
            }, i)
        }
    },
    8589: function(e, t, n) {
        "use strict";
        n.d(t, {
            OO: function() {
                return h
            },
            zv: function() {
                return v
            },
            JP: function() {
                return d
            },
            nI: function() {
                return y
            },
            Db: function() {
                return m
            }
        });
        var r = n(5671)
          , o = n(3144)
          , i = n(4942)
          , a = n(2791)
          , s = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
          , u = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "\xa9",
            "&#169;": "\xa9",
            "&reg;": "\xae",
            "&#174;": "\xae",
            "&hellip;": "\u2026",
            "&#8230;": "\u2026",
            "&#x2F;": "/",
            "&#47;": "/"
        }
          , c = function(e) {
            return u[e]
        };
        function l(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var p, g = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: function(e) {
                return e.replace(s, c)
            }
        }, h = (0,
        a.createContext)();
        function d() {
            return g
        }
        var v = function() {
            function e() {
                (0,
                r.Z)(this, e),
                this.usedNamespaces = {}
            }
            return (0,
            o.Z)(e, [{
                key: "addUsedNamespaces",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                    }
                    ))
                }
            }, {
                key: "getUsedNamespaces",
                value: function() {
                    return Object.keys(this.usedNamespaces)
                }
            }]),
            e
        }();
        function y() {
            return p
        }
        var m = {
            type: "3rdParty",
            init: function(e) {
                !function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    g = f(f({}, g), e)
                }(e.options.react),
                function(e) {
                    p = e
                }(e)
            }
        }
    },
    3168: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return h
            }
        });
        var r = n(9439)
          , o = n(4942)
          , i = n(2791)
          , a = n(8589);
        function s() {
            if (console && console.warn) {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                "string" === typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
                (e = console).warn.apply(e, n)
            }
        }
        var u = {};
        function c() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            "string" === typeof t[0] && u[t[0]] || ("string" === typeof t[0] && (u[t[0]] = new Date),
            s.apply(void 0, t))
        }
        function l(e, t, n) {
            e.loadNamespaces(t, (function() {
                if (e.isInitialized)
                    n();
                else {
                    e.on("initialized", (function t() {
                        setTimeout((function() {
                            e.off("initialized", t)
                        }
                        ), 0),
                        n()
                    }
                    ))
                }
            }
            ))
        }
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    (0,
                    o.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var g = function(e, t) {
            var n = (0,
            i.useRef)();
            return (0,
            i.useEffect)((function() {
                n.current = t ? n.current : e
            }
            ), [e, t]),
            n.current
        };
        function h(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.i18n
              , o = (0,
            i.useContext)(a.OO) || {}
              , s = o.i18n
              , u = o.defaultNS
              , f = n || s || (0,
            a.nI)();
            if (f && !f.reportNamespaces && (f.reportNamespaces = new a.zv),
            !f) {
                c("You will need to pass in an i18next instance by using initReactI18next");
                var h = function(e) {
                    return Array.isArray(e) ? e[e.length - 1] : e
                }
                  , d = [h, {}, !1];
                return d.t = h,
                d.i18n = {},
                d.ready = !1,
                d
            }
            f.options.react && void 0 !== f.options.react.wait && c("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
            var v = p(p(p({}, (0,
            a.JP)()), f.options.react), t)
              , y = v.useSuspense
              , m = v.keyPrefix
              , b = e || u || f.options && f.options.defaultNS;
            b = "string" === typeof b ? [b] : b || ["translation"],
            f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(b);
            var O = (f.isInitialized || f.initializedStoreOnce) && b.every((function(e) {
                return function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return t.languages && t.languages.length ? void 0 !== t.options.ignoreJSONStructure ? t.hasLoadedNamespace(e, {
                        precheck: function(t, r) {
                            if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e))
                                return !1
                        }
                    }) : function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                          , r = t.languages[0]
                          , o = !!t.options && t.options.fallbackLng
                          , i = t.languages[t.languages.length - 1];
                        if ("cimode" === r.toLowerCase())
                            return !0;
                        var a = function(e, n) {
                            var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                            return -1 === r || 2 === r
                        };
                        return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(r, e) || !(t.services.backendConnector.backend && (!t.options.resources || t.options.partialBundledLanguages)) || !(!a(r, e) || o && !a(i, e)))
                    }(e, t, n) : (c("i18n.languages were undefined or empty", t.languages),
                    !0)
                }(e, f, v)
            }
            ));
            function k() {
                return f.getFixedT(null, "fallback" === v.nsMode ? b : b[0], m)
            }
            var w = (0,
            i.useState)(k)
              , x = (0,
            r.Z)(w, 2)
              , S = x[0]
              , j = x[1]
              , P = b.join()
              , L = g(P)
              , N = (0,
            i.useRef)(!0);
            (0,
            i.useEffect)((function() {
                var e = v.bindI18n
                  , t = v.bindI18nStore;
                function n() {
                    N.current && j(k)
                }
                return N.current = !0,
                O || y || l(f, b, (function() {
                    N.current && j(k)
                }
                )),
                O && L && L !== P && N.current && j(k),
                e && f && f.on(e, n),
                t && f && f.store.on(t, n),
                function() {
                    N.current = !1,
                    e && f && e.split(" ").forEach((function(e) {
                        return f.off(e, n)
                    }
                    )),
                    t && f && t.split(" ").forEach((function(e) {
                        return f.store.off(e, n)
                    }
                    ))
                }
            }
            ), [f, P]);
            var R = (0,
            i.useRef)(!0);
            (0,
            i.useEffect)((function() {
                N.current && !R.current && j(k),
                R.current = !1
            }
            ), [f, m]);
            var C = [S, f, O];
            if (C.t = S,
            C.i18n = f,
            C.ready = O,
            O)
                return C;
            if (!O && !y)
                return C;
            throw new Promise((function(e) {
                l(f, b, (function() {
                    e()
                }
                ))
            }
            ))
        }
    },
    6662: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var r = function(e) {
            return {
                type: "backend",
                init: function(e, t, n) {},
                read: function(t, n, r) {
                    if ("function" !== typeof e)
                        r(null, e && e[t] && e[t][n]);
                    else {
                        if (2 === e.length) {
                            try {
                                var o = e(t, n);
                                o && "function" === typeof o.then ? o.then((function(e) {
                                    return r(null, e && e.__esModule && e.default || e)
                                }
                                )).catch(r) : r(null, o)
                            } catch (i) {
                                r(i)
                            }
                            return
                        }
                        e(t, n, r)
                    }
                }
            }
        }
    },
    8825: function(e, t, n) {
        "use strict";
        n.d(t, {
            t: function() {
                return pe
            }
        });
        var r = n(1002)
          , o = n(5671)
          , i = n(3144)
          , a = n(7326)
          , s = n(136)
          , u = n(2963)
          , c = n(1120)
          , l = n(4942)
          , f = n(4506);
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var h = {
            type: "logger",
            log: function(e) {
                this.output("log", e)
            },
            warn: function(e) {
                this.output("warn", e)
            },
            error: function(e) {
                this.output("error", e)
            },
            output: function(e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        }
          , d = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0,
                o.Z)(this, e),
                this.init(t, n)
            }
            return (0,
            i.Z)(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:",
                    this.logger = e || h,
                    this.options = t,
                    this.debug = t.debug
                }
            }, {
                key: "setDebug",
                value: function(e) {
                    this.debug = e
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
            }, {
                key: "deprecate",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward",
                value: function(e, t, n, r) {
                    return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                    this.logger[t](e))
                }
            }, {
                key: "create",
                value: function(t) {
                    return new e(this.logger,g(g({}, {
                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                    }), this.options))
                }
            }, {
                key: "clone",
                value: function(t) {
                    return (t = t || this.options).prefix = t.prefix || this.prefix,
                    new e(this.logger,t)
                }
            }]),
            e
        }()
          , v = new d
          , y = function() {
            function e() {
                (0,
                o.Z)(this, e),
                this.observers = {}
            }
            return (0,
            i.Z)(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    return e.split(" ").forEach((function(e) {
                        n.observers[e] = n.observers[e] || [],
                        n.observers[e].push(t)
                    }
                    )),
                    this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                        return e !== t
                    }
                    )) : delete this.observers[e])
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    this.observers[e] && [].concat(this.observers[e]).forEach((function(e) {
                        e.apply(void 0, n)
                    }
                    ));
                    this.observers["*"] && [].concat(this.observers["*"]).forEach((function(t) {
                        t.apply(t, [e].concat(n))
                    }
                    ))
                }
            }]),
            e
        }();
        function m() {
            var e, t, n = new Promise((function(n, r) {
                e = n,
                t = r
            }
            ));
            return n.resolve = e,
            n.reject = t,
            n
        }
        function b(e) {
            return null == e ? "" : "" + e
        }
        function O(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }
            function o() {
                return !e || "string" === typeof e
            }
            for (var i = "string" !== typeof t ? [].concat(t) : t.split("."); i.length > 1; ) {
                if (o())
                    return {};
                var a = r(i.shift());
                !e[a] && n && (e[a] = new n),
                e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
            }
            return o() ? {} : {
                obj: e,
                k: r(i.shift())
            }
        }
        function k(e, t, n) {
            var r = O(e, t, Object);
            r.obj[r.k] = n
        }
        function w(e, t) {
            var n = O(e, t)
              , r = n.obj
              , o = n.k;
            if (r)
                return r[o]
        }
        function x(e, t, n) {
            var r = w(e, n);
            return void 0 !== r ? r : w(t, n)
        }
        function S(e, t, n) {
            for (var r in t)
                "__proto__" !== r && "constructor" !== r && (r in e ? "string" === typeof e[r] || e[r]instanceof String || "string" === typeof t[r] || t[r]instanceof String ? n && (e[r] = t[r]) : S(e[r], t[r], n) : e[r] = t[r]);
            return e
        }
        function j(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var P = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        function L(e) {
            return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                return P[e]
            }
            )) : e
        }
        var N = "undefined" !== typeof window && window.navigator && "undefined" === typeof window.navigator.userAgentData && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1
          , R = [" ", ",", "?", "!", ";"];
        function C(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function E(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function D(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                c.Z)(e);
                if (t) {
                    var o = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.Z)(this, n)
            }
        }
        function I(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (e) {
                if (e[t])
                    return e[t];
                for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
                    if (!o)
                        return;
                    if ("string" === typeof o[r[i]] && i + 1 < r.length)
                        return;
                    if (void 0 === o[r[i]]) {
                        for (var a = 2, s = r.slice(i, i + a).join(n), u = o[s]; void 0 === u && r.length > i + a; )
                            a++,
                            u = o[s = r.slice(i, i + a).join(n)];
                        if (void 0 === u)
                            return;
                        if (null === u)
                            return null;
                        if (t.endsWith(s)) {
                            if ("string" === typeof u)
                                return u;
                            if (s && "string" === typeof u[s])
                                return u[s]
                        }
                        var c = r.slice(i + a).join(n);
                        return c ? I(u, c, n) : void 0
                    }
                    o = o[r[i]]
                }
                return o
            }
        }
        var T = function(e) {
            (0,
            s.Z)(n, e);
            var t = D(n);
            function n(e) {
                var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return (0,
                o.Z)(this, n),
                r = t.call(this),
                N && y.call((0,
                a.Z)(r)),
                r.data = e || {},
                r.options = i,
                void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
                void 0 === r.options.ignoreJSONStructure && (r.options.ignoreJSONStructure = !0),
                r
            }
            return (0,
            i.Z)(n, [{
                key: "addNamespaces",
                value: function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces",
                value: function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                      , o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator
                      , i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure
                      , a = [e, t];
                    n && "string" !== typeof n && (a = a.concat(n)),
                    n && "string" === typeof n && (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 && (a = e.split("."));
                    var s = w(this.data, a);
                    return s || !i || "string" !== typeof n ? s : I(this.data && this.data[e] && this.data[e][t], n, o)
                }
            }, {
                key: "addResource",
                value: function(e, t, n, r) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    }
                      , i = this.options.keySeparator;
                    void 0 === i && (i = ".");
                    var a = [e, t];
                    n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 && (r = t,
                    t = (a = e.split("."))[1]),
                    this.addNamespaces(t),
                    k(this.data, a, r),
                    o.silent || this.emit("added", e, t, n, r)
                }
            }, {
                key: "addResources",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (var o in n)
                        "string" !== typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                            silent: !0
                        });
                    r.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "addResourceBundle",
                value: function(e, t, n, r, o) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1
                    }
                      , a = [e, t];
                    e.indexOf(".") > -1 && (r = n,
                    n = t,
                    t = (a = e.split("."))[1]),
                    this.addNamespaces(t);
                    var s = w(this.data, a) || {};
                    r ? S(s, n, o) : s = E(E({}, s), n),
                    k(this.data, a, s),
                    i.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "removeResourceBundle",
                value: function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t)
                }
            }, {
                key: "hasResourceBundle",
                value: function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
            }, {
                key: "getResourceBundle",
                value: function(e, t) {
                    return t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI ? E(E({}, {}), this.getResource(e, t)) : this.getResource(e, t)
                }
            }, {
                key: "getDataByLanguage",
                value: function(e) {
                    return this.data[e]
                }
            }, {
                key: "hasLanguageSomeTranslations",
                value: function(e) {
                    var t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find((function(e) {
                        return t[e] && Object.keys(t[e]).length > 0
                    }
                    ))
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]),
            n
        }(y)
          , Z = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, r, o) {
                var i = this;
                return e.forEach((function(e) {
                    i.processors[e] && (t = i.processors[e].process(t, n, r, o))
                }
                )),
                t
            }
        };
        function F(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function A(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function V(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                c.Z)(e);
                if (t) {
                    var o = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.Z)(this, n)
            }
        }
        var U = {}
          , B = function(e) {
            (0,
            s.Z)(n, e);
            var t = V(n);
            function n(e) {
                var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0,
                o.Z)(this, n),
                r = t.call(this),
                N && y.call((0,
                a.Z)(r)),
                function(e, t, n) {
                    e.forEach((function(e) {
                        t[e] && (n[e] = t[e])
                    }
                    ))
                }(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, (0,
                a.Z)(r)),
                r.options = i,
                void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
                r.logger = v.create("translator"),
                r
            }
            return (0,
            i.Z)(n, [{
                key: "changeLanguage",
                value: function(e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (void 0 === e || null === e)
                        return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
            }, {
                key: "extractFromKey",
                value: function(e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , o = t.ns || this.options.defaultNS || []
                      , i = n && e.indexOf(n) > -1
                      , a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !function(e, t, n) {
                        t = t || "",
                        n = n || "";
                        var r = R.filter((function(e) {
                            return t.indexOf(e) < 0 && n.indexOf(e) < 0
                        }
                        ));
                        if (0 === r.length)
                            return !0;
                        var o = new RegExp("(".concat(r.map((function(e) {
                            return "?" === e ? "\\?" : e
                        }
                        )).join("|"), ")"))
                          , i = !o.test(e);
                        if (!i) {
                            var a = e.indexOf(n);
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0)
                        }
                        return i
                    }(e, n, r);
                    if (i && !a) {
                        var s = e.match(this.interpolator.nestingRegexp);
                        if (s && s.length > 0)
                            return {
                                key: e,
                                namespaces: o
                            };
                        var u = e.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(u[0]) > -1) && (o = u.shift()),
                        e = u.join(r)
                    }
                    return "string" === typeof o && (o = [o]),
                    {
                        key: e,
                        namespaces: o
                    }
                }
            }, {
                key: "translate",
                value: function(e, t, o) {
                    var i = this;
                    if ("object" !== (0,
                    r.Z)(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                    t || (t = {}),
                    void 0 === e || null === e)
                        return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var a = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails
                      , s = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , u = this.extractFromKey(e[e.length - 1], t)
                      , c = u.key
                      , l = u.namespaces
                      , f = l[l.length - 1]
                      , p = t.lng || this.language
                      , g = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (p && "cimode" === p.toLowerCase()) {
                        if (g) {
                            var h = t.nsSeparator || this.options.nsSeparator;
                            return a ? (d.res = "".concat(f).concat(h).concat(c),
                            d) : "".concat(f).concat(h).concat(c)
                        }
                        return a ? (d.res = c,
                        d) : c
                    }
                    var d = this.resolve(e, t)
                      , v = d && d.res
                      , y = d && d.usedKey || c
                      , m = d && d.exactUsedKey || c
                      , b = Object.prototype.toString.apply(v)
                      , O = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                      , k = !this.i18nFormat || this.i18nFormat.handleAsObject;
                    if (k && v && ("string" !== typeof v && "boolean" !== typeof v && "number" !== typeof v) && ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(b) < 0 && ("string" !== typeof O || "[object Array]" !== b)) {
                        if (!t.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            var w = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(y, v, A(A({}, t), {}, {
                                ns: l
                            })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                            return a ? (d.res = w,
                            d) : w
                        }
                        if (s) {
                            var x = "[object Array]" === b
                              , S = x ? [] : {}
                              , j = x ? m : y;
                            for (var P in v)
                                if (Object.prototype.hasOwnProperty.call(v, P)) {
                                    var L = "".concat(j).concat(s).concat(P);
                                    S[P] = this.translate(L, A(A({}, t), {
                                        joinArrays: !1,
                                        ns: l
                                    })),
                                    S[P] === L && (S[P] = v[P])
                                }
                            v = S
                        }
                    } else if (k && "string" === typeof O && "[object Array]" === b)
                        (v = v.join(O)) && (v = this.extendTranslation(v, e, t, o));
                    else {
                        var N = !1
                          , R = !1
                          , C = void 0 !== t.count && "string" !== typeof t.count
                          , E = n.hasDefaultValue(t)
                          , D = C ? this.pluralResolver.getSuffix(p, t.count, t) : ""
                          , I = t["defaultValue".concat(D)] || t.defaultValue;
                        !this.isValidLookup(v) && E && (N = !0,
                        v = I),
                        this.isValidLookup(v) || (R = !0,
                        v = c);
                        var T = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && R ? void 0 : v
                          , Z = E && I !== v && this.options.updateMissing;
                        if (R || N || Z) {
                            if (this.logger.log(Z ? "updateKey" : "missingKey", p, f, c, Z ? I : v),
                            s) {
                                var F = this.resolve(c, A(A({}, t), {}, {
                                    keySeparator: !1
                                }));
                                F && F.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var V = []
                              , U = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && U && U[0])
                                for (var B = 0; B < U.length; B++)
                                    V.push(U[B]);
                            else
                                "all" === this.options.saveMissingTo ? V = this.languageUtils.toResolveHierarchy(t.lng || this.language) : V.push(t.lng || this.language);
                            var K = function(e, n, r) {
                                var o = E && r !== v ? r : T;
                                i.options.missingKeyHandler ? i.options.missingKeyHandler(e, f, n, o, Z, t) : i.backendConnector && i.backendConnector.saveMissing && i.backendConnector.saveMissing(e, f, n, o, Z, t),
                                i.emit("missingKey", e, f, n, v)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && C ? V.forEach((function(e) {
                                i.pluralResolver.getSuffixes(e, t).forEach((function(n) {
                                    K([e], c + n, t["defaultValue".concat(n)] || I)
                                }
                                ))
                            }
                            )) : K(V, c, I))
                        }
                        v = this.extendTranslation(v, e, t, d, o),
                        R && v === c && this.options.appendNamespaceToMissingKey && (v = "".concat(f, ":").concat(c)),
                        (R || N) && this.options.parseMissingKeyHandler && (v = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? "".concat(f, ":").concat(c) : c, N ? v : void 0) : this.options.parseMissingKeyHandler(v))
                    }
                    return a ? (d.res = v,
                    d) : v
                }
            }, {
                key: "extendTranslation",
                value: function(e, t, n, r, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                        e = this.i18nFormat.parse(e, A(A({}, this.options.interpolation.defaultVariables), n), r.usedLng, r.usedNS, r.usedKey, {
                            resolved: r
                        });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init(A(A({}, n), {
                            interpolation: A(A({}, this.options.interpolation), n.interpolation)
                        }));
                        var a, s = "string" === typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        if (s) {
                            var u = e.match(this.interpolator.nestingRegexp);
                            a = u && u.length
                        }
                        var c = n.replace && "string" !== typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (c = A(A({}, this.options.interpolation.defaultVariables), c)),
                        e = this.interpolator.interpolate(e, c, n.lng || this.language, n),
                        s) {
                            var l = e.match(this.interpolator.nestingRegexp);
                            a < (l && l.length) && (n.nest = !1)
                        }
                        !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
                                r[a] = arguments[a];
                            return o && o[0] === r[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])),
                            null) : i.translate.apply(i, r.concat([t]))
                        }
                        ), n)),
                        n.interpolation && this.interpolator.reset()
                    }
                    var f = n.postProcess || this.options.postProcess
                      , p = "string" === typeof f ? [f] : f;
                    return void 0 !== e && null !== e && p && p.length && !1 !== n.applyPostProcessor && (e = Z.handle(p, e, t, this.options && this.options.postProcessPassResolved ? A({
                        i18nResolved: r
                    }, n) : n, this)),
                    e
                }
            }, {
                key: "resolve",
                value: function(e) {
                    var t, n, r, o, i, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" === typeof e && (e = [e]),
                    e.forEach((function(e) {
                        if (!a.isValidLookup(t)) {
                            var u = a.extractFromKey(e, s)
                              , c = u.key;
                            n = c;
                            var l = u.namespaces;
                            a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                            var f = void 0 !== s.count && "string" !== typeof s.count
                              , p = f && !s.ordinal && 0 === s.count && a.pluralResolver.shouldUseIntlApi()
                              , g = void 0 !== s.context && ("string" === typeof s.context || "number" === typeof s.context) && "" !== s.context
                              , h = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                            l.forEach((function(e) {
                                a.isValidLookup(t) || (i = e,
                                !U["".concat(h[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (U["".concat(h[0], "-").concat(e)] = !0,
                                a.logger.warn('key "'.concat(n, '" for languages "').concat(h.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                                h.forEach((function(n) {
                                    if (!a.isValidLookup(t)) {
                                        o = n;
                                        var i, u = [c];
                                        if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                            a.i18nFormat.addLookupKeys(u, c, n, e, s);
                                        else {
                                            var l;
                                            f && (l = a.pluralResolver.getSuffix(n, s.count, s));
                                            var h = "".concat(a.options.pluralSeparator, "zero");
                                            if (f && (u.push(c + l),
                                            p && u.push(c + h)),
                                            g) {
                                                var d = "".concat(c).concat(a.options.contextSeparator).concat(s.context);
                                                u.push(d),
                                                f && (u.push(d + l),
                                                p && u.push(d + h))
                                            }
                                        }
                                        for (; i = u.pop(); )
                                            a.isValidLookup(t) || (r = i,
                                            t = a.getResource(n, e, i, s))
                                    }
                                }
                                )))
                            }
                            ))
                        }
                    }
                    )),
                    {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                }
            }], [{
                key: "hasDefaultValue",
                value: function(e) {
                    var t = "defaultValue";
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n])
                            return !0;
                    return !1
                }
            }]),
            n
        }(y);
        function K(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var M = function() {
            function e(t) {
                (0,
                o.Z)(this, e),
                this.options = t,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = v.create("languageUtils")
            }
            return (0,
            i.Z)(e, [{
                key: "getScriptPartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return null;
                    var t = e.split("-");
                    return 2 === t.length ? null : (t.pop(),
                    "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return e;
                    var t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
            }, {
                key: "formatLanguageCode",
                value: function(e) {
                    if ("string" === typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                          , n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((function(e) {
                            return e.toLowerCase()
                        }
                        )) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                        n[1] = n[1].toUpperCase(),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = K(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                        "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = K(n[1].toLowerCase())),
                        t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = K(n[2].toLowerCase()))),
                        n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isSupportedCode",
                value: function(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
            }, {
                key: "getBestMatchFromCodes",
                value: function(e) {
                    var t, n = this;
                    return e ? (e.forEach((function(e) {
                        if (!t) {
                            var r = n.formatLanguageCode(e);
                            n.options.supportedLngs && !n.isSupportedCode(r) || (t = r)
                        }
                    }
                    )),
                    !t && this.options.supportedLngs && e.forEach((function(e) {
                        if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r))
                                return t = r;
                            t = n.options.supportedLngs.find((function(e) {
                                if (0 === e.indexOf(r))
                                    return e
                            }
                            ))
                        }
                    }
                    )),
                    t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    t) : null
                }
            }, {
                key: "getFallbackCodes",
                value: function(e, t) {
                    if (!e)
                        return [];
                    if ("function" === typeof e && (e = e(t)),
                    "string" === typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                        return e;
                    if (!t)
                        return e.default || [];
                    var n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                }
            }, {
                key: "toResolveHierarchy",
                value: function(e, t) {
                    var n = this
                      , r = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                      , o = []
                      , i = function(e) {
                        e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                    };
                    return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" === typeof e && i(this.formatLanguageCode(e)),
                    r.forEach((function(e) {
                        o.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                    }
                    )),
                    o
                }
            }]),
            e
        }()
          , z = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , H = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        }
          , J = ["v1", "v2", "v3"]
          , _ = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };
        var q = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0,
                o.Z)(this, e),
                this.languageUtils = t,
                this.options = n,
                this.logger = v.create("pluralResolver"),
                this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" !== typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3",
                this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                this.rules = function() {
                    var e = {};
                    return z.forEach((function(t) {
                        t.lngs.forEach((function(n) {
                            e[n] = {
                                numbers: t.nr,
                                plurals: H[t.fc]
                            }
                        }
                        ))
                    }
                    )),
                    e
                }()
            }
            return (0,
            i.Z)(e, [{
                key: "addRule",
                value: function(e, t) {
                    this.rules[e] = t
                }
            }, {
                key: "getRule",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi())
                        try {
                            return new Intl.PluralRules(e,{
                                type: t.ordinal ? "ordinal" : "cardinal"
                            })
                        } catch (n) {
                            return
                        }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, n).map((function(e) {
                        return "".concat(t).concat(e)
                    }
                    ))
                }
            }, {
                key: "getSuffixes",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = this.getRule(e, n);
                    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((function(e, t) {
                        return _[e] - _[t]
                    }
                    )).map((function(e) {
                        return "".concat(t.options.prepend).concat(e)
                    }
                    )) : r.numbers.map((function(r) {
                        return t.getSuffix(e, r, n)
                    }
                    )) : []
                }
            }, {
                key: "getSuffix",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = this.getRule(e, n);
                    return r ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(r.select(t)) : this.getSuffixRetroCompatible(r, t) : (this.logger.warn("no plural rule found for: ".concat(e)),
                    "")
                }
            }, {
                key: "getSuffixRetroCompatible",
                value: function(e, t) {
                    var n = this
                      , r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t))
                      , o = e.numbers[r];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                    var i = function() {
                        return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                    };
                    return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" === typeof o ? "_plural_".concat(o.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                }
            }, {
                key: "shouldUseIntlApi",
                value: function() {
                    return !J.includes(this.options.compatibilityJSON)
                }
            }]),
            e
        }();
        function $(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function W(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Y = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                o.Z)(this, e),
                this.logger = v.create("interpolator"),
                this.options = t,
                this.format = t.interpolation && t.interpolation.format || function(e) {
                    return e
                }
                ,
                this.init(t)
            }
            return (0,
            i.Z)(e, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var t = e.interpolation;
                    this.escape = void 0 !== t.escape ? t.escape : L,
                    this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                    this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                    this.prefix = t.prefix ? j(t.prefix) : t.prefixEscaped || "{{",
                    this.suffix = t.suffix ? j(t.suffix) : t.suffixEscaped || "}}",
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                    this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                    this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                    this.nestingPrefix = t.nestingPrefix ? j(t.nestingPrefix) : t.nestingPrefixEscaped || j("$t("),
                    this.nestingSuffix = t.nestingSuffix ? j(t.nestingSuffix) : t.nestingSuffixEscaped || j(")"),
                    this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                    this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                    this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                    this.resetRegExp()
                }
            }, {
                key: "reset",
                value: function() {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp",
                value: function() {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                    this.regexp = new RegExp(e,"g");
                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                    this.regexpUnescape = new RegExp(t,"g");
                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(n,"g")
                }
            }, {
                key: "interpolate",
                value: function(e, t, n, r) {
                    var o, i, a, s = this, u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                    function c(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    var l = function(e) {
                        if (e.indexOf(s.formatSeparator) < 0) {
                            var o = x(t, u, e);
                            return s.alwaysFormat ? s.format(o, void 0, n, W(W(W({}, r), t), {}, {
                                interpolationkey: e
                            })) : o
                        }
                        var i = e.split(s.formatSeparator)
                          , a = i.shift().trim()
                          , c = i.join(s.formatSeparator).trim();
                        return s.format(x(t, u, a), c, n, W(W(W({}, r), t), {}, {
                            interpolationkey: a
                        }))
                    };
                    this.resetRegExp();
                    var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler
                      , p = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: function(e) {
                            return c(e)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(e) {
                            return s.escapeValue ? c(s.escape(e)) : c(e)
                        }
                    }].forEach((function(t) {
                        for (a = 0; o = t.regex.exec(e); ) {
                            var n = o[1].trim();
                            if (void 0 === (i = l(n)))
                                if ("function" === typeof f) {
                                    var u = f(e, o, r);
                                    i = "string" === typeof u ? u : ""
                                } else if (r && r.hasOwnProperty(n))
                                    i = "";
                                else {
                                    if (p) {
                                        i = o[0];
                                        continue
                                    }
                                    s.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)),
                                    i = ""
                                }
                            else
                                "string" === typeof i || s.useRawValueToEscape || (i = b(i));
                            var c = t.safeValue(i);
                            if (e = e.replace(o[0], c),
                            p ? (t.regex.lastIndex += i.length,
                            t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0,
                            ++a >= s.maxReplaces)
                                break
                        }
                    }
                    )),
                    e
                }
            }, {
                key: "nest",
                value: function(e, t) {
                    var n, r, o = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = W({}, i);
                    function s(e, t) {
                        var n = this.nestingOptionsSeparator;
                        if (e.indexOf(n) < 0)
                            return e;
                        var r = e.split(new RegExp("".concat(n, "[ ]*{")))
                          , o = "{".concat(r[1]);
                        e = r[0];
                        var i = (o = this.interpolate(o, a)).match(/'/g)
                          , s = o.match(/"/g);
                        (i && i.length % 2 === 0 && !s || s.length % 2 !== 0) && (o = o.replace(/'/g, '"'));
                        try {
                            a = JSON.parse(o),
                            t && (a = W(W({}, t), a))
                        } catch (u) {
                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), u),
                            "".concat(e).concat(n).concat(o)
                        }
                        return delete a.defaultValue,
                        e
                    }
                    for (a.applyPostProcessor = !1,
                    delete a.defaultValue; n = this.nestingRegexp.exec(e); ) {
                        var u = []
                          , c = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            var l = n[1].split(this.formatSeparator).map((function(e) {
                                return e.trim()
                            }
                            ));
                            n[1] = l.shift(),
                            u = l,
                            c = !0
                        }
                        if ((r = t(s.call(this, n[1].trim(), a), a)) && n[0] === e && "string" !== typeof r)
                            return r;
                        "string" !== typeof r && (r = b(r)),
                        r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)),
                        r = ""),
                        c && (r = u.reduce((function(e, t) {
                            return o.format(e, t, i.lng, W(W({}, i), {}, {
                                interpolationkey: n[1].trim()
                            }))
                        }
                        ), r.trim())),
                        e = e.replace(n[0], r),
                        this.regexp.lastIndex = 0
                    }
                    return e
                }
            }]),
            e
        }();
        function G(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? G(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : G(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function X(e) {
            var t = {};
            return function(n, r, o) {
                var i = r + JSON.stringify(o)
                  , a = t[i];
                return a || (a = e(r, o),
                t[i] = a),
                a(n)
            }
        }
        var ee = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                o.Z)(this, e),
                this.logger = v.create("formatter"),
                this.options = t,
                this.formats = {
                    number: X((function(e, t) {
                        var n = new Intl.NumberFormat(e,t);
                        return function(e) {
                            return n.format(e)
                        }
                    }
                    )),
                    currency: X((function(e, t) {
                        var n = new Intl.NumberFormat(e,Q(Q({}, t), {}, {
                            style: "currency"
                        }));
                        return function(e) {
                            return n.format(e)
                        }
                    }
                    )),
                    datetime: X((function(e, t) {
                        var n = new Intl.DateTimeFormat(e,Q({}, t));
                        return function(e) {
                            return n.format(e)
                        }
                    }
                    )),
                    relativetime: X((function(e, t) {
                        var n = new Intl.RelativeTimeFormat(e,Q({}, t));
                        return function(e) {
                            return n.format(e, t.range || "day")
                        }
                    }
                    )),
                    list: X((function(e, t) {
                        var n = new Intl.ListFormat(e,Q({}, t));
                        return function(e) {
                            return n.format(e)
                        }
                    }
                    ))
                },
                this.init(t)
            }
            return (0,
            i.Z)(e, [{
                key: "init",
                value: function(e) {
                    var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }).interpolation;
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","
                }
            }, {
                key: "add",
                value: function(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
            }, {
                key: "addCached",
                value: function(e, t) {
                    this.formats[e.toLowerCase().trim()] = X(t)
                }
            }, {
                key: "format",
                value: function(e, t, n, r) {
                    var o = this;
                    return t.split(this.formatSeparator).reduce((function(e, t) {
                        var i = function(e) {
                            var t = e.toLowerCase().trim()
                              , n = {};
                            if (e.indexOf("(") > -1) {
                                var r = e.split("(");
                                t = r[0].toLowerCase().trim();
                                var o = r[1].substring(0, r[1].length - 1);
                                "currency" === t && o.indexOf(":") < 0 ? n.currency || (n.currency = o.trim()) : "relativetime" === t && o.indexOf(":") < 0 ? n.range || (n.range = o.trim()) : o.split(";").forEach((function(e) {
                                    if (e) {
                                        var t = e.split(":")
                                          , r = (0,
                                        f.Z)(t)
                                          , o = r[0]
                                          , i = r.slice(1).join(":").trim().replace(/^'+|'+$/g, "");
                                        n[o.trim()] || (n[o.trim()] = i),
                                        "false" === i && (n[o.trim()] = !1),
                                        "true" === i && (n[o.trim()] = !0),
                                        isNaN(i) || (n[o.trim()] = parseInt(i, 10))
                                    }
                                }
                                ))
                            }
                            return {
                                formatName: t,
                                formatOptions: n
                            }
                        }(t)
                          , a = i.formatName
                          , s = i.formatOptions;
                        if (o.formats[a]) {
                            var u = e;
                            try {
                                var c = r && r.formatParams && r.formatParams[r.interpolationkey] || {}
                                  , l = c.locale || c.lng || r.locale || r.lng || n;
                                u = o.formats[a](e, l, Q(Q(Q({}, s), r), c))
                            } catch (p) {
                                o.logger.warn(p)
                            }
                            return u
                        }
                        return o.logger.warn("there was no format function for ".concat(a)),
                        e
                    }
                    ), e)
                }
            }]),
            e
        }();
        function te(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ne(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? te(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function re(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                c.Z)(e);
                if (t) {
                    var o = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.Z)(this, n)
            }
        }
        var oe = function(e) {
            (0,
            s.Z)(n, e);
            var t = re(n);
            function n(e, r, i) {
                var s, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return (0,
                o.Z)(this, n),
                s = t.call(this),
                N && y.call((0,
                a.Z)(s)),
                s.backend = e,
                s.store = r,
                s.services = i,
                s.languageUtils = i.languageUtils,
                s.options = u,
                s.logger = v.create("backendConnector"),
                s.waitingReads = [],
                s.maxParallelReads = u.maxParallelReads || 10,
                s.readingCalls = 0,
                s.maxRetries = u.maxRetries >= 0 ? u.maxRetries : 5,
                s.retryTimeout = u.retryTimeout >= 1 ? u.retryTimeout : 350,
                s.state = {},
                s.queue = [],
                s.backend && s.backend.init && s.backend.init(i, u.backend, u),
                s
            }
            return (0,
            i.Z)(n, [{
                key: "queueLoad",
                value: function(e, t, n, r) {
                    var o = this
                      , i = {}
                      , a = {}
                      , s = {}
                      , u = {};
                    return e.forEach((function(e) {
                        var r = !0;
                        t.forEach((function(t) {
                            var s = "".concat(e, "|").concat(t);
                            !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? void 0 === a[s] && (a[s] = !0) : (o.state[s] = 1,
                            r = !1,
                            void 0 === a[s] && (a[s] = !0),
                            void 0 === i[s] && (i[s] = !0),
                            void 0 === u[t] && (u[t] = !0)))
                        }
                        )),
                        r || (s[e] = !0)
                    }
                    )),
                    (Object.keys(i).length || Object.keys(a).length) && this.queue.push({
                        pending: a,
                        pendingCount: Object.keys(a).length,
                        loaded: {},
                        errors: [],
                        callback: r
                    }),
                    {
                        toLoad: Object.keys(i),
                        pending: Object.keys(a),
                        toLoadLanguages: Object.keys(s),
                        toLoadNamespaces: Object.keys(u)
                    }
                }
            }, {
                key: "loaded",
                value: function(e, t, n) {
                    var r = e.split("|")
                      , o = r[0]
                      , i = r[1];
                    t && this.emit("failedLoading", o, i, t),
                    n && this.store.addResourceBundle(o, i, n),
                    this.state[e] = t ? -1 : 2;
                    var a = {};
                    this.queue.forEach((function(n) {
                        !function(e, t, n, r) {
                            var o = O(e, t, Object)
                              , i = o.obj
                              , a = o.k;
                            i[a] = i[a] || [],
                            r && (i[a] = i[a].concat(n)),
                            r || i[a].push(n)
                        }(n.loaded, [o], i),
                        function(e, t) {
                            void 0 !== e.pending[t] && (delete e.pending[t],
                            e.pendingCount--)
                        }(n, e),
                        t && n.errors.push(t),
                        0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach((function(e) {
                            a[e] || (a[e] = {});
                            var t = n.loaded[e];
                            t.length && t.forEach((function(t) {
                                void 0 === a[e][t] && (a[e][t] = !0)
                            }
                            ))
                        }
                        )),
                        n.done = !0,
                        n.errors.length ? n.callback(n.errors) : n.callback())
                    }
                    )),
                    this.emit("loaded", a),
                    this.queue = this.queue.filter((function(e) {
                        return !e.done
                    }
                    ))
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    var r = this
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout
                      , a = arguments.length > 5 ? arguments[5] : void 0;
                    return e.length ? this.readingCalls >= this.maxParallelReads ? void this.waitingReads.push({
                        lng: e,
                        ns: t,
                        fcName: n,
                        tried: o,
                        wait: i,
                        callback: a
                    }) : (this.readingCalls++,
                    this.backend[n](e, t, (function(s, u) {
                        if (r.readingCalls--,
                        r.waitingReads.length > 0) {
                            var c = r.waitingReads.shift();
                            r.read(c.lng, c.ns, c.fcName, c.tried, c.wait, c.callback)
                        }
                        s && u && o < r.maxRetries ? setTimeout((function() {
                            r.read.call(r, e, t, n, o + 1, 2 * i, a)
                        }
                        ), i) : a(s, u)
                    }
                    ))) : a(null, {})
                }
            }, {
                key: "prepareLoading",
                value: function(e, t) {
                    var n = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , o = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend)
                        return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                        o && o();
                    "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                    "string" === typeof t && (t = [t]);
                    var i = this.queueLoad(e, t, r, o);
                    if (!i.toLoad.length)
                        return i.pending.length || o(),
                        null;
                    i.toLoad.forEach((function(e) {
                        n.loadOne(e)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
            }, {
                key: "reload",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
            }, {
                key: "loadOne",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , r = e.split("|")
                      , o = r[0]
                      , i = r[1];
                    this.read(o, i, "read", void 0, void 0, (function(r, a) {
                        r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r),
                        !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a),
                        t.loaded(e, r, a)
                    }
                    ))
                }
            }, {
                key: "saveMissing",
                value: function(e, t, n, r, o) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== n && null !== n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, ne(ne({}, i), {}, {
                        isUpdate: o
                    })),
                    e && e[0] && this.store.addResource(e[0], t, n, r))
                }
            }]),
            n
        }(y);
        function ie(e) {
            return "string" === typeof e.ns && (e.ns = [e.ns]),
            "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
            e
        }
        function ae(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function se(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ae(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function ue(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = (0,
                c.Z)(e);
                if (t) {
                    var o = (0,
                    c.Z)(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return (0,
                u.Z)(this, n)
            }
        }
        function ce() {}
        var le = function(e) {
            (0,
            s.Z)(n, e);
            var t = ue(n);
            function n() {
                var e, r, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
                if ((0,
                o.Z)(this, n),
                e = t.call(this),
                N && y.call((0,
                a.Z)(e)),
                e.options = ie(i),
                e.services = {},
                e.logger = v,
                e.modules = {
                    external: []
                },
                r = (0,
                a.Z)(e),
                Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((function(e) {
                    "function" === typeof r[e] && (r[e] = r[e].bind(r))
                }
                )),
                s && !e.isInitialized && !i.isClone) {
                    if (!e.options.initImmediate)
                        return e.init(i, s),
                        (0,
                        u.Z)(e, (0,
                        a.Z)(e));
                    setTimeout((function() {
                        e.init(i, s)
                    }
                    ), 0)
                }
                return e
            }
            return (0,
            i.Z)(n, [{
                key: "init",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    "function" === typeof t && (n = t,
                    t = {}),
                    !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" === typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                    var o = {
                        debug: !1,
                        initImmediate: !0,
                        ns: ["translation"],
                        defaultNS: ["translation"],
                        fallbackLng: ["dev"],
                        fallbackNS: !1,
                        supportedLngs: !1,
                        nonExplicitSupportedLngs: !1,
                        load: "all",
                        preload: !1,
                        simplifyPluralSuffix: !0,
                        keySeparator: ".",
                        nsSeparator: ":",
                        pluralSeparator: "_",
                        contextSeparator: "_",
                        partialBundledLanguages: !1,
                        saveMissing: !1,
                        updateMissing: !1,
                        saveMissingTo: "fallback",
                        saveMissingPlurals: !0,
                        missingKeyHandler: !1,
                        missingInterpolationHandler: !1,
                        postProcess: !1,
                        postProcessPassResolved: !1,
                        returnNull: !0,
                        returnEmptyString: !0,
                        returnObjects: !1,
                        joinArrays: !1,
                        returnedObjectHandler: !1,
                        parseMissingKeyHandler: !1,
                        appendNamespaceToMissingKey: !1,
                        appendNamespaceToCIMode: !1,
                        overloadTranslationOptionHandler: function(e) {
                            var t = {};
                            if ("object" === (0,
                            r.Z)(e[1]) && (t = e[1]),
                            "string" === typeof e[1] && (t.defaultValue = e[1]),
                            "string" === typeof e[2] && (t.tDescription = e[2]),
                            "object" === (0,
                            r.Z)(e[2]) || "object" === (0,
                            r.Z)(e[3])) {
                                var n = e[3] || e[2];
                                Object.keys(n).forEach((function(e) {
                                    t[e] = n[e]
                                }
                                ))
                            }
                            return t
                        },
                        interpolation: {
                            escapeValue: !0,
                            format: function(e, t, n, r) {
                                return e
                            },
                            prefix: "{{",
                            suffix: "}}",
                            formatSeparator: ",",
                            unescapePrefix: "-",
                            nestingPrefix: "$t(",
                            nestingSuffix: ")",
                            nestingOptionsSeparator: ",",
                            maxReplaces: 1e3,
                            skipOnVariables: !0
                        }
                    };
                    function i(e) {
                        return e ? "function" === typeof e ? new e : e : null
                    }
                    if (this.options = se(se(se({}, o), this.options), ie(t)),
                    "v1" !== this.options.compatibilityAPI && (this.options.interpolation = se(se({}, o.interpolation), this.options.interpolation)),
                    void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator),
                    void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator),
                    !this.options.isClone) {
                        var a;
                        this.modules.logger ? v.init(i(this.modules.logger), this.options) : v.init(null, this.options),
                        this.modules.formatter ? a = this.modules.formatter : "undefined" !== typeof Intl && (a = ee);
                        var s = new M(this.options);
                        this.store = new T(this.options.resources,this.options);
                        var u = this.services;
                        u.logger = v,
                        u.resourceStore = this.store,
                        u.languageUtils = s,
                        u.pluralResolver = new q(s,{
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }),
                        !a || this.options.interpolation.format && this.options.interpolation.format !== o.interpolation.format || (u.formatter = i(a),
                        u.formatter.init(u, this.options),
                        this.options.interpolation.format = u.formatter.format.bind(u.formatter)),
                        u.interpolator = new Y(this.options),
                        u.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        },
                        u.backendConnector = new oe(i(this.modules.backend),u.resourceStore,u,this.options),
                        u.backendConnector.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.languageDetector && (u.languageDetector = i(this.modules.languageDetector),
                        u.languageDetector.init(u, this.options.detection, this.options)),
                        this.modules.i18nFormat && (u.i18nFormat = i(this.modules.i18nFormat),
                        u.i18nFormat.init && u.i18nFormat.init(this)),
                        this.translator = new B(this.services,this.options),
                        this.translator.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.external.forEach((function(t) {
                            t.init && t.init(e)
                        }
                        ))
                    }
                    if (this.format = this.options.interpolation.format,
                    n || (n = ce),
                    this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        c.length > 0 && "dev" !== c[0] && (this.options.lng = c[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                    ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments)
                        }
                    }
                    ));
                    ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments),
                            e
                        }
                    }
                    ));
                    var l = m()
                      , f = function() {
                        var t = function(t, r) {
                            e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"),
                            e.isInitialized = !0,
                            e.options.isClone || e.logger.log("initialized", e.options),
                            e.emit("initialized", e.options),
                            l.resolve(r),
                            n(t, r)
                        };
                        if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized)
                            return t(null, e.t.bind(e));
                        e.changeLanguage(e.options.lng, t)
                    };
                    return this.options.resources || !this.options.initImmediate ? f() : setTimeout(f, 0),
                    l
                }
            }, {
                key: "loadResources",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ce
                      , r = "string" === typeof e ? e : this.language;
                    if ("function" === typeof e && (n = e),
                    !this.options.resources || this.options.partialBundledLanguages) {
                        if (r && "cimode" === r.toLowerCase())
                            return n();
                        var o = []
                          , i = function(e) {
                            e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                o.indexOf(e) < 0 && o.push(e)
                            }
                            ))
                        };
                        if (r)
                            i(r);
                        else
                            this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((function(e) {
                                return i(e)
                            }
                            ));
                        this.options.preload && this.options.preload.forEach((function(e) {
                            return i(e)
                        }
                        )),
                        this.services.backendConnector.load(o, this.options.ns, (function(e) {
                            e || t.resolvedLanguage || !t.language || t.setResolvedLanguage(t.language),
                            n(e)
                        }
                        ))
                    } else
                        n(null)
                }
            }, {
                key: "reloadResources",
                value: function(e, t, n) {
                    var r = m();
                    return e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = ce),
                    this.services.backendConnector.reload(e, t, (function(e) {
                        r.resolve(),
                        n(e)
                    }
                    )),
                    r
                }
            }, {
                key: "use",
                value: function(e) {
                    if (!e)
                        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type)
                        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                    "languageDetector" === e.type && (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && Z.addPostProcessor(e),
                    "formatter" === e.type && (this.modules.formatter = e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                }
            }, {
                key: "setResolvedLanguage",
                value: function(e) {
                    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                        for (var t = 0; t < this.languages.length; t++) {
                            var n = this.languages[t];
                            if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
                                this.resolvedLanguage = n;
                                break
                            }
                        }
                }
            }, {
                key: "changeLanguage",
                value: function(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    var r = m();
                    this.emit("languageChanging", e);
                    var o = function(e) {
                        n.language = e,
                        n.languages = n.services.languageUtils.toResolveHierarchy(e),
                        n.resolvedLanguage = void 0,
                        n.setResolvedLanguage(e)
                    }
                      , i = function(i) {
                        e || i || !n.services.languageDetector || (i = []);
                        var a = "string" === typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
                        a && (n.language || o(a),
                        n.translator.language || n.translator.changeLanguage(a),
                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(a)),
                        n.loadResources(a, (function(e) {
                            !function(e, i) {
                                i ? (o(i),
                                n.translator.changeLanguage(i),
                                n.isLanguageChangingTo = void 0,
                                n.emit("languageChanged", i),
                                n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0,
                                r.resolve((function() {
                                    return n.t.apply(n, arguments)
                                }
                                )),
                                t && t(e, (function() {
                                    return n.t.apply(n, arguments)
                                }
                                ))
                            }(e, a)
                        }
                        ))
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()),
                    r
                }
            }, {
                key: "getFixedT",
                value: function(e, t, n) {
                    var o = this
                      , i = function e(t, i) {
                        var a;
                        if ("object" !== (0,
                        r.Z)(i)) {
                            for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++)
                                u[c - 2] = arguments[c];
                            a = o.options.overloadTranslationOptionHandler([t, i].concat(u))
                        } else
                            a = se({}, i);
                        a.lng = a.lng || e.lng,
                        a.lngs = a.lngs || e.lngs,
                        a.ns = a.ns || e.ns,
                        a.keyPrefix = a.keyPrefix || n || e.keyPrefix;
                        var l = o.options.keySeparator || "."
                          , f = a.keyPrefix ? "".concat(a.keyPrefix).concat(l).concat(t) : t;
                        return o.t(f, a)
                    };
                    return "string" === typeof e ? i.lng = e : i.lngs = e,
                    i.ns = t,
                    i.keyPrefix = n,
                    i
                }
            }, {
                key: "t",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace",
                value: function(e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized)
                        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                        !1;
                    if (!this.languages || !this.languages.length)
                        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                        !1;
                    var r = this.resolvedLanguage || this.languages[0]
                      , o = !!this.options && this.options.fallbackLng
                      , i = this.languages[this.languages.length - 1];
                    if ("cimode" === r.toLowerCase())
                        return !0;
                    var a = function(e, n) {
                        var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                        return -1 === r || 2 === r
                    };
                    if (n.precheck) {
                        var s = n.precheck(this, a);
                        if (void 0 !== s)
                            return s
                    }
                    return !!this.hasResourceBundle(r, e) || (!(this.services.backendConnector.backend && (!this.options.resources || this.options.partialBundledLanguages)) || !(!a(r, e) || o && !a(i, e)))
                }
            }, {
                key: "loadNamespaces",
                value: function(e, t) {
                    var n = this
                      , r = m();
                    return this.options.ns ? ("string" === typeof e && (e = [e]),
                    e.forEach((function(e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }
                    )),
                    this.loadResources((function(e) {
                        r.resolve(),
                        t && t(e)
                    }
                    )),
                    r) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "loadLanguages",
                value: function(e, t) {
                    var n = m();
                    "string" === typeof e && (e = [e]);
                    var r = this.options.preload || []
                      , o = e.filter((function(e) {
                        return r.indexOf(e) < 0
                    }
                    ));
                    return o.length ? (this.options.preload = r.concat(o),
                    this.loadResources((function(e) {
                        n.resolve(),
                        t && t(e)
                    }
                    )),
                    n) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "dir",
                value: function(e) {
                    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
                    !e)
                        return "rtl";
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                }
            }, {
                key: "cloneInstance",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ce
                      , o = se(se(se({}, this.options), t), {
                        isClone: !0
                    })
                      , i = new n(o);
                    void 0 === t.debug && void 0 === t.prefix || (i.logger = i.logger.clone(t));
                    return ["store", "services", "language"].forEach((function(t) {
                        i[t] = e[t]
                    }
                    )),
                    i.services = se({}, this.services),
                    i.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    },
                    i.translator = new B(i.services,i.options),
                    i.translator.on("*", (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        i.emit.apply(i, [e].concat(n))
                    }
                    )),
                    i.init(o, r),
                    i.translator.options = i.options,
                    i.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    },
                    i
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }]),
            n
        }(y);
        (0,
        l.Z)(le, "createInstance", (function() {
            return new le(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},arguments.length > 1 ? arguments[1] : void 0)
        }
        ));
        var fe = le.createInstance();
        fe.createInstance = le.createInstance;
        fe.createInstance,
        fe.init,
        fe.loadResources,
        fe.reloadResources,
        fe.use,
        fe.changeLanguage,
        fe.getFixedT;
        var pe = fe.t;
        fe.exists,
        fe.setDefaultNamespace,
        fe.hasLoadedNamespace,
        fe.loadNamespaces,
        fe.loadLanguages;
        t.ZP = fe
    },
    5733: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    r(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        n.d(t, {
            A: function() {
                return u
            }
        });
        var a = "https://mini.locize.com"
          , s = {
            queryStringParam: "showtranslations"
        }
          , u = {
            type: "3rdParty",
            init: function(e) {
                var t = i(i({}, s), e.options.translationStats);
                e.on("initialized", (function() {
                    new URLSearchParams(window.location.search).has(t.queryStringParam) && function(e) {
                        var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = e.store && e.store.toJSON, o = {
                            sourceLng: n.sourceLng,
                            targetLngs: n.targetLngs,
                            preserveEmptyStrings: n.preserveEmptyStrings,
                            i18nFormat: n.i18nFormat
                        };
                        r ? (o.sourceLng || (o.sourceLng = e.languages[0]),
                        o.targetLngs || (o.targetLngs = e.options.supportedLngs ? e.options.supportedLngs.filter((function(t) {
                            return t !== e.languages[0] && "cimode" !== t
                        }
                        )) : void 0),
                        o.preserveEmptyStrings || (o.preserveEmptyStrings = e.options.returnEmptyString),
                        o.i18nFormat || (o.i18nFormat = e.options.compatibilityJSON && "v4" !== e.options.compatibilityJSON ? "i18next_v3" : "i18next_v4"),
                        t = e.store.toJSON()) : t = e;
                        var s = window.open(a)
                          , u = setInterval((function() {
                            return s.postMessage({
                                message: "isEditorReady"
                            }, a)
                        }
                        ), 1e3);
                        window.addEventListener("message", (function(e) {
                            e.origin === a && "editorIsReady" === e.data.message && (clearInterval(u),
                            s.postMessage(i(i({
                                message: "initializeProject"
                            }, o), {}, {
                                resources: t
                            }), a))
                        }
                        ))
                    }(e, t)
                }
                ))
            }
        }
    }
}]);
//# sourceMappingURL=7025.b11323ae.chunk.js.map
