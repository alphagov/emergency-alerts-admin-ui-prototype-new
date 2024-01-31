//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
// 

window.GOVUKPrototypeKit.documentReady(() => {
  var Hogan = {};
!(function (t) {
    function l(t, n, e) {
        var i;
        return n && "object" == typeof n && (void 0 !== n[t] ? (i = n[t]) : e && n.get && "function" == typeof n.get && (i = n.get(t))), i;
    }
    (t.Template = function (t, n, e, i) {
        (this.r = (t = t || {}).code || this.r), (this.c = e), (this.options = i || {}), (this.text = n || ""), (this.partials = t.partials || {}), (this.subs = t.subs || {}), (this.buf = "");
    }),
        (t.Template.prototype = {
            r: function (t, n, e) {
                return "";
            },
            v: function (t) {
                return (t = o(t)), a.test(t) ? t.replace(n, "&amp;").replace(e, "&lt;").replace(i, "&gt;").replace(r, "&#39;").replace(s, "&quot;") : t;
            },
            t: o,
            render: function (t, n, e) {
                return this.ri([t], n || {}, e);
            },
            ri: function (t, n, e) {
                return this.r(t, n, e);
            },
            ep: function (t, n) {
                var e = this.partials[t],
                    i = n[e.name];
                if (e.instance && e.base == i) return e.instance;
                if ("string" == typeof i) {
                    if (!this.c) throw new Error("No compiler available.");
                    i = this.c.compile(i, this.options);
                }
                if (!i) return null;
                if (((this.partials[t].base = i), e.subs)) {
                    for (key in (n.stackText || (n.stackText = {}), e.subs)) n.stackText[key] || (n.stackText[key] = void 0 !== this.activeSub && n.stackText[this.activeSub] ? n.stackText[this.activeSub] : this.text);
                    i = (function (t, n, e, i, r, s) {
                        function a() {}
                        function o() {}
                        o.prototype = (a.prototype = t).subs;
                        var u,
                            c = new a();
                        for (u in ((c.subs = new o()), (c.subsText = {}), (c.buf = ""), (i = i || {}), (c.stackSubs = i), (c.subsText = s), n)) i[u] || (i[u] = n[u]);
                        for (u in i) c.subs[u] = i[u];
                        for (u in ((r = r || {}), (c.stackPartials = r), e)) r[u] || (r[u] = e[u]);
                        for (u in r) c.partials[u] = r[u];
                        return c;
                    })(i, e.subs, e.partials, this.stackSubs, this.stackPartials, n.stackText);
                }
                return (this.partials[t].instance = i);
            },
            rp: function (t, n, e, i) {
                t = this.ep(t, e);
                return t ? t.ri(n, e, i) : "";
            },
            rs: function (t, n, e) {
                var i = t[t.length - 1];
                if (f(i)) for (var r = 0; r < i.length; r++) t.push(i[r]), e(t, n, this), t.pop();
                else e(t, n, this);
            },
            s: function (t, n, e, i, r, s, a) {
                return (!f(t) || 0 !== t.length) && ((e = !!(t = "function" == typeof t ? this.ms(t, n, e, i, r, s, a) : t)), !i && e && n && n.push("object" == typeof t ? t : n[n.length - 1]), e);
            },
            d: function (t, n, e, i) {
                var r,
                    s = t.split("."),
                    a = this.f(s[0], n, e, i),
                    o = this.options.modelGet,
                    u = null;
                if ("." === t && f(n[n.length - 2])) a = n[n.length - 1];
                else for (var c = 1; c < s.length; c++) a = void 0 !== (r = l(s[c], a, o)) ? ((u = a), r) : "";
                return !(i && !a) && (i || "function" != typeof a || (n.push(u), (a = this.mv(a, n, e)), n.pop()), a);
            },
            f: function (t, n, e, i) {
                for (var r = !1, s = !1, a = this.options.modelGet, o = n.length - 1; 0 <= o; o--)
                    if (void 0 !== (r = l(t, n[o], a))) {
                        s = !0;
                        break;
                    }
                return s ? (i || "function" != typeof r ? r : this.mv(r, n, e)) : !i && "";
            },
            ls: function (t, n, e, i, r) {
                var s = this.options.delimiters;
                return (this.options.delimiters = r), this.b(this.ct(o(t.call(n, i)), n, e)), (this.options.delimiters = s), !1;
            },
            ct: function (t, n, e) {
                if (this.options.disableLambda) throw new Error("Lambda features disabled.");
                return this.c.compile(t, this.options).render(n, e);
            },
            b: function (t) {
                this.buf += t;
            },
            fl: function () {
                var t = this.buf;
                return (this.buf = ""), t;
            },
            ms: function (t, n, e, i, r, s, a) {
                (n = n[n.length - 1]), (t = t.call(n));
                return "function" == typeof t ? !!i || ((i = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text), this.ls(t, n, e, i.substring(r, s), a)) : t;
            },
            mv: function (t, n, e) {
                (n = n[n.length - 1]), (t = t.call(n));
                return "function" == typeof t ? this.ct(o(t.call(n)), n, e) : t;
            },
            sub: function (t, n, e, i) {
                var r = this.subs[t];
                r && ((this.activeSub = t), r(n, e, this, i), (this.activeSub = !1));
            },
        });
    var n = /&/g,
        e = /</g,
        i = />/g,
        r = /\'/g,
        s = /\"/g,
        a = /[&<>\"\']/;
    function o(t) {
        return String(null == t ? "" : t);
    }
    var f =
        Array.isArray ||
        function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
        };
})("undefined" != typeof exports ? exports : Hogan),
    (function (x) {
        var w = /\S/,
            n = /\"/g,
            e = /\n/g,
            i = /\r/g,
            r = /\\/g,
            s = /\u2028/,
            a = /\u2029/;
        function k(t) {
            return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "");
        }
        function y(t, n, e) {
            if (n.charAt(e) == t.charAt(0)) {
                for (var i = 1, r = t.length; i < r; i++) if (n.charAt(e + i) != t.charAt(i)) return;
                return 1;
            }
        }
        (x.tags = { "#": 1, "^": 2, "<": 3, $: 4, "/": 5, "!": 6, ">": 7, "=": 8, _v: 9, "{": 10, "&": 11, _t: 12 }),
            (x.scan = function (t, n) {
                var e,
                    i,
                    r,
                    s,
                    a,
                    o = t.length,
                    u = 0,
                    c = null,
                    l = "",
                    f = [],
                    h = !1,
                    p = 0,
                    g = 0,
                    b = "{{",
                    d = "}}";
                function v() {
                    0 < l.length && (f.push({ tag: "_t", text: new String(l) }), (l = ""));
                }
                function m(t, n) {
                    if (
                        (v(),
                        t &&
                            (function () {
                                for (var t = !0, n = g; n < f.length; n++) if (!(t = x.tags[f[n].tag] < x.tags._v || ("_t" == f[n].tag && null === f[n].text.match(w)))) return;
                                return t;
                            })())
                    )
                        for (var e, i = g; i < f.length; i++) f[i].text && ((e = f[i + 1]) && ">" == e.tag && (e.indent = f[i].text.toString()), f.splice(i, 1));
                    else n || f.push({ tag: "\n" });
                    (h = !1), (g = f.length);
                }
                for (n && ((n = n.split(" ")), (b = n[0]), (d = n[1])), p = 0; p < o; p++)
                    0 == u
                        ? y(b, t, p)
                            ? (--p, v(), (u = 1))
                            : "\n" == t.charAt(p)
                            ? m(h)
                            : (l += t.charAt(p))
                        : 1 == u
                        ? ((p += b.length - 1),
                          (u =
                              "=" == (c = (e = x.tags[t.charAt(p + 1)]) ? t.charAt(p + 1) : "_v")
                                  ? ((r = p), (a = s = void 0), (s = "=" + d), (a = (i = t).indexOf(s, r)), (i = k(i.substring(i.indexOf("=", r) + 1, a)).split(" ")), (b = i[0]), (d = i[i.length - 1]), (p = a + s.length - 1), 0)
                                  : (e && p++, 2)),
                          (h = p))
                        : y(d, t, p)
                        ? (f.push({ tag: c, n: k(l), otag: b, ctag: d, i: "/" == c ? h - b.length : p + d.length }),
                          (l = ""),
                          (p += d.length - 1),
                          (u = 0),
                          "{" == c && ("}}" == d ? p++ : "}" === (r = f[f.length - 1]).n.substr(r.n.length - 1) && (r.n = r.n.substring(0, r.n.length - 1))))
                        : (l += t.charAt(p));
                return m(h, !0), f;
            });
        var u = { _t: !0, "\n": !0, $: !0, "/": !0 };
        function c(t, n, e, i) {
            for (var r = [], s = null, a = null, o = e[e.length - 1]; 0 < t.length; ) {
                if (((a = t.shift()), o && "<" == o.tag && !(a.tag in u))) throw new Error("Illegal content in < super tag.");
                if (
                    x.tags[a.tag] <= x.tags.$ ||
                    (function (t, n) {
                        for (var e = 0, i = n.length; e < i; e++) if (n[e].o == t.n) return (t.tag = "#");
                    })(a, i)
                )
                    e.push(a), (a.nodes = c(t, a.tag, e, i));
                else {
                    if ("/" == a.tag) {
                        if (0 === e.length) throw new Error("Closing tag without opener: /" + a.n);
                        if (
                            ((s = e.pop()),
                            a.n == s.n ||
                                (function (t, n, e) {
                                    for (var i = 0, r = e.length; i < r; i++) if (e[i].c == t && e[i].o == n) return 1;
                                })(a.n, s.n, i))
                        )
                            return (s.end = a.i), r;
                        throw new Error("Nesting error: " + s.n + " vs. " + a.n);
                    }
                    "\n" == a.tag && (a.last = 0 == t.length || "\n" == t[0].tag);
                }
                r.push(a);
            }
            if (0 < e.length) throw new Error("missing closing tag: " + e.pop().n);
            return r;
        }
        function o(t) {
            var n,
                e = [];
            for (n in t.partials) e.push('"' + f(n) + '":{name:"' + f(t.partials[n].name) + '", ' + o(t.partials[n]) + "}");
            return (
                "partials: {" +
                e.join(",") +
                "}, subs: " +
                (function (t) {
                    var n,
                        e = [];
                    for (n in t) e.push('"' + f(n) + '": function(c,p,t,i) {' + t[n] + "}");
                    return "{ " + e.join(",") + " }";
                })(t.subs)
            );
        }
        x.stringify = function (t, n, e) {
            return "{code: function (c,p,i) { " + x.wrapMain(t.code) + " }," + o(t) + "}";
        };
        var l = 0;
        function f(t) {
            return t.replace(r, "\\\\").replace(n, '\\"').replace(e, "\\n").replace(i, "\\r").replace(s, "\\u2028").replace(a, "\\u2029");
        }
        function h(t) {
            return ~t.indexOf(".") ? "d" : "f";
        }
        function p(t, n) {
            var e = "<" + (n.prefix || "") + t.n + l++;
            return (n.partials[e] = { name: t.n, partials: {} }), (n.code += 't.b(t.rp("' + f(e) + '",c,p,"' + (t.indent || "") + '"));'), e;
        }
        function t(t, n) {
            n.code += "t.b(t.t(t." + h(t.n) + '("' + f(t.n) + '",c,p,0)));';
        }
        function g(t) {
            return "t.b(" + t + ");";
        }
        (x.generate = function (t, n, e) {
            l = 0;
            var i = { code: "", subs: {}, partials: {} };
            return x.walk(t, i), e.asString ? this.stringify(i, n, e) : this.makeTemplate(i, n, e);
        }),
            (x.wrapMain = function (t) {
                return 'var t=this;t.b(i=i||"");' + t + "return t.fl();";
            }),
            (x.template = x.Template),
            (x.makeTemplate = function (t, n, e) {
                var i = this.makePartials(t);
                return (i.code = new Function("c", "p", "i", this.wrapMain(t.code))), new this.template(i, n, this, e);
            }),
            (x.makePartials = function (t) {
                var n,
                    e = { subs: {}, partials: t.partials, name: t.name };
                for (n in e.partials) e.partials[n] = this.makePartials(e.partials[n]);
                for (n in t.subs) e.subs[n] = new Function("c", "p", "t", "i", t.subs[n]);
                return e;
            }),
            (x.codegen = {
                "#": function (t, n) {
                    (n.code += "if(t.s(t." + h(t.n) + '("' + f(t.n) + '",c,p,1),c,p,0,' + t.i + "," + t.end + ',"' + t.otag + " " + t.ctag + '")){t.rs(c,p,function(c,p,t){'), x.walk(t.nodes, n), (n.code += "});c.pop();}");
                },
                "^": function (t, n) {
                    (n.code += "if(!t.s(t." + h(t.n) + '("' + f(t.n) + '",c,p,1),c,p,1,0,0,"")){'), x.walk(t.nodes, n), (n.code += "};");
                },
                ">": p,
                "<": function (t, n) {
                    var e = { partials: {}, code: "", subs: {}, inPartial: !0 },
                        t = (x.walk(t.nodes, e), n.partials[p(t, n)]);
                    (t.subs = e.subs), (t.partials = e.partials);
                },
                $: function (t, n) {
                    var e = { subs: {}, code: "", partials: n.partials, prefix: t.n };
                    x.walk(t.nodes, e), (n.subs[t.n] = e.code), n.inPartial || (n.code += 't.sub("' + f(t.n) + '",c,p,i);');
                },
                "\n": function (t, n) {
                    n.code += g('"\\n"' + (t.last ? "" : " + i"));
                },
                _v: function (t, n) {
                    n.code += "t.b(t.v(t." + h(t.n) + '("' + f(t.n) + '",c,p,0)));';
                },
                _t: function (t, n) {
                    n.code += g('"' + f(t.text) + '"');
                },
                "{": t,
                "&": t,
            }),
            (x.walk = function (t, n) {
                for (var e, i = 0, r = t.length; i < r; i++) (e = x.codegen[t[i].tag]) && e(t[i], n);
                return n;
            }),
            (x.parse = function (t, n, e) {
                return c(t, 0, [], (e = e || {}).sectionTags || []);
            }),
            (x.cache = {}),
            (x.cacheKey = function (t, n) {
                return [t, !!n.asString, !!n.disableLambda, n.delimiters, !!n.modelGet].join("||");
            }),
            (x.compile = function (t, n) {
                var e = x.cacheKey(t, (n = n || {})),
                    i = this.cache[e];
                if (i) {
                    var r,
                        s = i.partials;
                    for (r in s) delete s[r].instance;
                    return i;
                }
                return (i = this.generate(this.parse(this.scan(t, n.delimiters), t, n), t, n)), (this.cache[e] = i);
            });
    })("undefined" != typeof exports ? exports : Hogan);
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (e.document) return t(e);
                    throw new Error("jQuery requires a window with a document");
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (T, R) {
    "use strict";
    function v(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
    }
    function g(e) {
        return null != e && e === e.window;
    }
    var t = [],
        M = Object.getPrototypeOf,
        s = t.slice,
        I = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        W = t.push,
        F = t.indexOf,
        B = {},
        $ = B.toString,
        _ = B.hasOwnProperty,
        z = _.toString,
        U = z.call(Object),
        y = {},
        C = T.document,
        X = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function V(e, t, n) {
        var r,
            i,
            o = (n = n || C).createElement("script");
        if (((o.text = e), t)) for (r in X) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[$.call(e)] || "object" : typeof e;
    }
    var e = "3.5.0",
        E = function (e, t) {
            return new E.fn.init(e, t);
        };
    function G(e) {
        var t = !!e && "length" in e && e.length,
            n = h(e);
        return !v(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (E.fn = E.prototype = {
        jquery: e,
        constructor: E,
        length: 0,
        toArray: function () {
            return s.call(this);
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            e = E.merge(this.constructor(), e);
            return (e.prevObject = this), e;
        },
        each: function (e) {
            return E.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                E.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                E.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: W,
        sort: t.sort,
        splice: t.splice,
    }),
        (E.extend = E.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o = arguments[0] || {},
                a = 1,
                s = arguments.length,
                u = !1;
            for ("boolean" == typeof o && ((u = o), (o = arguments[a] || {}), a++), "object" == typeof o || v(o) || (o = {}), a === s && ((o = this), a--); a < s; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        (n = e[t]),
                            "__proto__" !== t &&
                                o !== n &&
                                (u && n && (E.isPlainObject(n) || (r = Array.isArray(n)))
                                    ? ((i = o[t]), (i = r && !Array.isArray(i) ? [] : r || E.isPlainObject(i) ? i : {}), (r = !1), (o[t] = E.extend(u, i, n)))
                                    : void 0 !== n && (o[t] = n));
            return o;
        }),
        E.extend({
            expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return !(!e || "[object Object]" !== $.call(e) || ((e = M(e)) && ("function" != typeof (e = _.call(e, "constructor") && e.constructor) || z.call(e) !== U)));
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                V(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (G(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            makeArray: function (e, t) {
                t = t || [];
                return null != e && (G(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : W.call(t, e)), t;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : F.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
                return r;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    a = [];
                if (G(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return I(a);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
        E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            B["[object " + t + "]"] = t.toLowerCase();
        });
    function r(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && E(e).is(n)) break;
                r.push(e);
            }
        return r;
    }
    function Y(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var e = (function (R) {
            function f(e, t) {
                return (e = "0x" + e.slice(1) - 65536), t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
            }
            function M(e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            }
            function I() {
                T();
            }
            var e,
                p,
                b,
                o,
                W,
                d,
                F,
                B,
                w,
                u,
                l,
                T,
                C,
                n,
                E,
                h,
                r,
                i,
                g,
                S = "sizzle" + +new Date(),
                c = R.document,
                k = 0,
                $ = 0,
                _ = q(),
                z = q(),
                U = q(),
                y = q(),
                X = function (e, t) {
                    return e === t && (l = !0), 0;
                },
                V = {}.hasOwnProperty,
                t = [],
                G = t.pop,
                Y = t.push,
                A = t.push,
                Q = t.slice,
                v = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1;
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                a = "[\\x20\\t\\r\\n\\f]",
                s = "(?:\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                K = "\\[" + a + "*(" + s + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + s + "))|)" + a + "*\\]",
                Z = ":(" + s + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)",
                ee = new RegExp(a + "+", "g"),
                m = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
                te = new RegExp("^" + a + "*," + a + "*"),
                ne = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
                re = new RegExp(a + "|>"),
                ie = new RegExp(Z),
                oe = new RegExp("^" + s + "$"),
                x = {
                    ID: new RegExp("^#(" + s + ")"),
                    CLASS: new RegExp("^\\.(" + s + ")"),
                    TAG: new RegExp("^(" + s + "|[*])"),
                    ATTR: new RegExp("^" + K),
                    PSEUDO: new RegExp("^" + Z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i"),
                },
                ae = /HTML$/i,
                se = /^(?:input|select|textarea|button)$/i,
                ue = /^h\d$/i,
                N = /^[^{]+\{\s*\[native \w/,
                le = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ce = /[+~]/,
                D = new RegExp("\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])", "g"),
                fe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                pe = ve(
                    function (e) {
                        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                    },
                    { dir: "parentNode", next: "legend" }
                );
            try {
                A.apply((t = Q.call(c.childNodes)), c.childNodes), t[c.childNodes.length].nodeType;
            } catch (e) {
                A = {
                    apply: t.length
                        ? function (e, t) {
                              Y.apply(e, Q.call(t));
                          }
                        : function (e, t) {
                              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                              e.length = n - 1;
                          },
                };
            }
            function j(e, t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = t && t.ownerDocument,
                    f = t ? t.nodeType : 9;
                if (((n = n || []), "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))) return n;
                if (!r && (T(t), (t = t || C), E)) {
                    if (11 !== f && (s = le.exec(e)))
                        if ((i = s[1])) {
                            if (9 === f) {
                                if (!(l = t.getElementById(i))) return n;
                                if (l.id === i) return n.push(l), n;
                            } else if (c && (l = c.getElementById(i)) && g(t, l) && l.id === i) return n.push(l), n;
                        } else {
                            if (s[2]) return A.apply(n, t.getElementsByTagName(e)), n;
                            if ((i = s[3]) && p.getElementsByClassName && t.getElementsByClassName) return A.apply(n, t.getElementsByClassName(i)), n;
                        }
                    if (p.qsa && !y[e + " "] && (!h || !h.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
                        if (((l = e), (c = t), 1 === f && (re.test(e) || ne.test(e)))) {
                            for (((c = (ce.test(e) && ye(t.parentNode)) || t) === t && p.scope) || ((a = t.getAttribute("id")) ? (a = a.replace(fe, M)) : t.setAttribute("id", (a = S))), o = (u = d(e)).length; o--; )
                                u[o] = (a ? "#" + a : ":scope") + " " + P(u[o]);
                            l = u.join(",");
                        }
                        try {
                            return A.apply(n, c.querySelectorAll(l)), n;
                        } catch (t) {
                            y(e, !0);
                        } finally {
                            a === S && t.removeAttribute("id");
                        }
                    }
                }
                return B(e.replace(m, "$1"), t, n, r);
            }
            function q() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > b.cacheLength && delete e[r.shift()], (e[t + " "] = n);
                };
            }
            function L(e) {
                return (e[S] = !0), e;
            }
            function H(e) {
                var t = C.createElement("fieldset");
                try {
                    return !!e(t);
                } catch (e) {
                    return !1;
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                }
            }
            function de(e, t) {
                for (var n = e.split("|"), r = n.length; r--; ) b.attrHandle[n[r]] = t;
            }
            function he(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                return e ? 1 : -1;
            }
            function ge(t) {
                return function (e) {
                    return "form" in e
                        ? e.parentNode && !1 === e.disabled
                            ? "label" in e
                                ? "label" in e.parentNode
                                    ? e.parentNode.disabled === t
                                    : e.disabled === t
                                : e.isDisabled === t || (e.isDisabled !== !t && pe(e) === t)
                            : e.disabled === t
                        : "label" in e && e.disabled === t;
                };
            }
            function O(a) {
                return L(function (o) {
                    return (
                        (o = +o),
                        L(function (e, t) {
                            for (var n, r = a([], e.length, o), i = r.length; i--; ) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
                        })
                    );
                });
            }
            function ye(e) {
                return e && void 0 !== e.getElementsByTagName && e;
            }
            for (e in ((p = j.support = {}),
            (W = j.isXML = function (e) {
                var t = e.namespaceURI,
                    e = (e.ownerDocument || e).documentElement;
                return !ae.test(t || (e && e.nodeName) || "HTML");
            }),
            (T = j.setDocument = function (e) {
                var e = e ? e.ownerDocument || e : c;
                return (
                    e != C &&
                        9 === e.nodeType &&
                        e.documentElement &&
                        ((n = (C = e).documentElement),
                        (E = !W(C)),
                        c != C && (e = C.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", I, !1) : e.attachEvent && e.attachEvent("onunload", I)),
                        (p.scope = H(function (e) {
                            return n.appendChild(e).appendChild(C.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                        })),
                        (p.attributes = H(function (e) {
                            return (e.className = "i"), !e.getAttribute("className");
                        })),
                        (p.getElementsByTagName = H(function (e) {
                            return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
                        })),
                        (p.getElementsByClassName = N.test(C.getElementsByClassName)),
                        (p.getById = H(function (e) {
                            return (n.appendChild(e).id = S), !C.getElementsByName || !C.getElementsByName(S).length;
                        })),
                        p.getById
                            ? ((b.filter.ID = function (e) {
                                  var t = e.replace(D, f);
                                  return function (e) {
                                      return e.getAttribute("id") === t;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (void 0 !== t.getElementById && E) return (t = t.getElementById(e)) ? [t] : [];
                              }))
                            : ((b.filter.ID = function (e) {
                                  var t = e.replace(D, f);
                                  return function (e) {
                                      e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                      return e && e.value === t;
                                  };
                              }),
                              (b.find.ID = function (e, t) {
                                  if (void 0 !== t.getElementById && E) {
                                      var n,
                                          r,
                                          i,
                                          o = t.getElementById(e);
                                      if (o) {
                                          if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                          for (i = t.getElementsByName(e), r = 0; (o = i[r++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      }
                                      return [];
                                  }
                              })),
                        (b.find.TAG = p.getElementsByTagName
                            ? function (e, t) {
                                  return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0;
                              }
                            : function (e, t) {
                                  var n,
                                      r = [],
                                      i = 0,
                                      o = t.getElementsByTagName(e);
                                  if ("*" !== e) return o;
                                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                  return r;
                              }),
                        (b.find.CLASS =
                            p.getElementsByClassName &&
                            function (e, t) {
                                if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e);
                            }),
                        (r = []),
                        (h = []),
                        (p.qsa = N.test(C.querySelectorAll)) &&
                            (H(function (e) {
                                var t;
                                (n.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']").length && h.push("[*^$]=" + a + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length || h.push("\\[" + a + "*(?:value|" + J + ")"),
                                    e.querySelectorAll("[id~=" + S + "-]").length || h.push("~="),
                                    (t = C.createElement("input")).setAttribute("name", ""),
                                    e.appendChild(t),
                                    e.querySelectorAll("[name='']").length || h.push("\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")"),
                                    e.querySelectorAll(":checked").length || h.push(":checked"),
                                    e.querySelectorAll("a#" + S + "+*").length || h.push(".#.+[+~]"),
                                    e.querySelectorAll("\\\f"),
                                    h.push("[\\r\\n\\f]");
                            }),
                            H(function (e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = C.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length && h.push("name" + a + "*[*^$|!~]?="),
                                    2 !== e.querySelectorAll(":enabled").length && h.push(":enabled", ":disabled"),
                                    (n.appendChild(e).disabled = !0),
                                    2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    h.push(",.*:");
                            })),
                        (p.matchesSelector = N.test((i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector))) &&
                            H(function (e) {
                                (p.disconnectedMatch = i.call(e, "*")), i.call(e, "[s!='']:x"), r.push("!=", Z);
                            }),
                        (h = h.length && new RegExp(h.join("|"))),
                        (r = r.length && new RegExp(r.join("|"))),
                        (e = N.test(n.compareDocumentPosition)),
                        (g =
                            e || N.test(n.contains)
                                ? function (e, t) {
                                      var n = 9 === e.nodeType ? e.documentElement : e,
                                          t = t && t.parentNode;
                                      return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                                  }
                                : function (e, t) {
                                      if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                      return !1;
                                  }),
                        (X = e
                            ? function (e, t) {
                                  return e === t
                                      ? ((l = !0), 0)
                                      : !e.compareDocumentPosition - !t.compareDocumentPosition ||
                                            (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!p.sortDetached && t.compareDocumentPosition(e) === n)
                                                ? e == C || (e.ownerDocument == c && g(c, e))
                                                    ? -1
                                                    : t == C || (t.ownerDocument == c && g(c, t))
                                                    ? 1
                                                    : u
                                                    ? v(u, e) - v(u, t)
                                                    : 0
                                                : 4 & n
                                                ? -1
                                                : 1);
                                  var n;
                              }
                            : function (e, t) {
                                  if (e === t) return (l = !0), 0;
                                  var n,
                                      r = 0,
                                      i = e.parentNode,
                                      o = t.parentNode,
                                      a = [e],
                                      s = [t];
                                  if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? v(u, e) - v(u, t) : 0;
                                  if (i === o) return he(e, t);
                                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                                  for (; a[r] === s[r]; ) r++;
                                  return r ? he(a[r], s[r]) : a[r] == c ? -1 : s[r] == c ? 1 : 0;
                              })),
                    C
                );
            }),
            (j.matches = function (e, t) {
                return j(e, null, null, t);
            }),
            (j.matchesSelector = function (e, t) {
                if ((T(e), p.matchesSelector && E && !y[t + " "] && (!r || !r.test(t)) && (!h || !h.test(t))))
                    try {
                        var n = i.call(e, t);
                        if (n || p.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                    } catch (e) {
                        y(t, !0);
                    }
                return 0 < j(t, C, null, [e]).length;
            }),
            (j.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), g(e, t);
            }),
            (j.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    n = n && V.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== n ? n : p.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
            }),
            (j.escape = function (e) {
                return (e + "").replace(fe, M);
            }),
            (j.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (j.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    i = 0;
                if (((l = !p.detectDuplicates), (u = !p.sortStable && e.slice(0)), e.sort(X), l)) {
                    for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                    for (; r--; ) e.splice(n[r], 1);
                }
                return (u = null), e;
            }),
            (o = j.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                    } else if (3 === i || 4 === i) return e.nodeValue;
                } else for (; (t = e[r++]); ) n += o(t);
                return n;
            }),
            ((b = j.selectors = {
                cacheLength: 50,
                createPseudo: L,
                match: x,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(D, f)), (e[3] = (e[3] || e[4] || e[5] || "").replace(D, f)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || j.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && j.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return x.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && ie.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(D, f).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = _[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) &&
                                _(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (t, n, r) {
                        return function (e) {
                            e = j.attr(e, t);
                            return null == e
                                ? "!=" === n
                                : !n ||
                                      ((e += ""),
                                      "=" === n
                                          ? e === r
                                          : "!=" === n
                                          ? e !== r
                                          : "^=" === n
                                          ? r && 0 === e.indexOf(r)
                                          : "*=" === n
                                          ? r && -1 < e.indexOf(r)
                                          : "$=" === n
                                          ? r && e.slice(-r.length) === r
                                          : "~=" === n
                                          ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(r)
                                          : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"));
                        };
                    },
                    CHILD: function (h, e, t, g, y) {
                        var m = "nth" !== h.slice(0, 3),
                            v = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === y
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (e, t, n) {
                                  var r,
                                      i,
                                      o,
                                      a,
                                      s,
                                      u,
                                      l = m != v ? "nextSibling" : "previousSibling",
                                      c = e.parentNode,
                                      f = x && e.nodeName.toLowerCase(),
                                      p = !n && !x,
                                      d = !1;
                                  if (c) {
                                      if (m) {
                                          for (; l; ) {
                                              for (a = e; (a = a[l]); ) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                              u = l = "only" === h && !u && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((u = [v ? c.firstChild : c.lastChild]), v && p)) {
                                          for (
                                              d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                              (a = (++s && a && a[l]) || (d = s = 0) || u.pop());

                                          )
                                              if (1 === a.nodeType && ++d && a === e) {
                                                  i[h] = [k, s, d];
                                                  break;
                                              }
                                      } else if (!1 === (d = p ? (s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) : d))
                                          for (
                                              ;
                                              (a = (++s && a && a[l]) || (d = s = 0) || u.pop()) &&
                                              ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a !== e));

                                          );
                                      return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                                  }
                              };
                    },
                    PSEUDO: function (e, o) {
                        var t,
                            a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || j.error("unsupported pseudo: " + e);
                        return a[S]
                            ? a(o)
                            : 1 < a.length
                            ? ((t = [e, e, "", o]),
                              b.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? L(function (e, t) {
                                        for (var n, r = a(e, o), i = r.length; i--; ) e[(n = v(e, r[i]))] = !(t[n] = r[i]);
                                    })
                                  : function (e) {
                                        return a(e, 0, t);
                                    })
                            : a;
                    },
                },
                pseudos: {
                    not: L(function (e) {
                        var r = [],
                            i = [],
                            s = F(e.replace(m, "$1"));
                        return s[S]
                            ? L(function (e, t, n, r) {
                                  for (var i, o = s(e, null, r, []), a = e.length; a--; ) (i = o[a]) && (e[a] = !(t[a] = i));
                              })
                            : function (e, t, n) {
                                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                              };
                    }),
                    has: L(function (t) {
                        return function (e) {
                            return 0 < j(t, e).length;
                        };
                    }),
                    contains: L(function (t) {
                        return (
                            (t = t.replace(D, f)),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t);
                            }
                        );
                    }),
                    lang: L(function (n) {
                        return (
                            oe.test(n || "") || j.error("unsupported lang: " + n),
                            (n = n.replace(D, f).toLowerCase()),
                            function (e) {
                                var t;
                                do {
                                    if ((t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var t = R.location && R.location.hash;
                        return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                        return e === n;
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e);
                    },
                    header: function (e) {
                        return ue.test(e.nodeName);
                    },
                    input: function (e) {
                        return se.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                    },
                    first: O(function () {
                        return [0];
                    }),
                    last: O(function (e, t) {
                        return [t - 1];
                    }),
                    eq: O(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: O(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: O(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: O(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                        return e;
                    }),
                    gt: O(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = b.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                b.pseudos[e] = (function (t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t;
                    };
                })(e);
            for (e in { submit: !0, reset: !0 })
                b.pseudos[e] = (function (n) {
                    return function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n;
                    };
                })(e);
            function me() {}
            function P(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r;
            }
            function ve(a, e, t) {
                var s = e.dir,
                    u = e.next,
                    l = u || s,
                    c = t && "parentNode" === l,
                    f = $++;
                return e.first
                    ? function (e, t, n) {
                          for (; (e = e[s]); ) if (1 === e.nodeType || c) return a(e, t, n);
                          return !1;
                      }
                    : function (e, t, n) {
                          var r,
                              i,
                              o = [k, f];
                          if (n) {
                              for (; (e = e[s]); ) if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
                          } else
                              for (; (e = e[s]); )
                                  if (1 === e.nodeType || c)
                                      if (((i = (i = e[S] || (e[S] = {}))[e.uniqueID] || (i[e.uniqueID] = {})), u && u === e.nodeName.toLowerCase())) e = e[s] || e;
                                      else {
                                          if ((r = i[l]) && r[0] === k && r[1] === f) return (o[2] = r[2]);
                                          if (((i[l] = o)[2] = a(e, t, n))) return !0;
                                      }
                          return !1;
                      };
            }
            function xe(i) {
                return 1 < i.length
                    ? function (e, t, n) {
                          for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
                          return !0;
                      }
                    : i[0];
            }
            function be(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) !(o = e[s]) || (n && !n(o, r, i)) || (a.push(o), l && t.push(s));
                return a;
            }
            function we(e) {
                for (
                    var r,
                        t,
                        n,
                        i = e.length,
                        o = b.relative[e[0].type],
                        a = o || b.relative[" "],
                        s = o ? 1 : 0,
                        u = ve(
                            function (e) {
                                return e === r;
                            },
                            a,
                            !0
                        ),
                        l = ve(
                            function (e) {
                                return -1 < v(r, e);
                            },
                            a,
                            !0
                        ),
                        c = [
                            function (e, t, n) {
                                e = (!o && (n || t !== w)) || ((r = t).nodeType ? u : l)(e, t, n);
                                return (r = null), e;
                            },
                        ];
                    s < i;
                    s++
                )
                    if ((t = b.relative[e[s].type])) c = [ve(xe(c), t)];
                    else {
                        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                            for (n = ++s; n < i && !b.relative[e[n].type]; n++);
                            return (function e(d, h, g, y, m, t) {
                                return (
                                    y && !y[S] && (y = e(y)),
                                    m && !m[S] && (m = e(m, t)),
                                    L(function (e, t, n, r) {
                                        var i,
                                            o,
                                            a,
                                            s = [],
                                            u = [],
                                            l = t.length,
                                            c =
                                                e ||
                                                (function (e, t, n) {
                                                    for (var r = 0, i = t.length; r < i; r++) j(e, t[r], n);
                                                    return n;
                                                })(h || "*", n.nodeType ? [n] : n, []),
                                            f = !d || (!e && h) ? c : be(c, s, d, n, r),
                                            p = g ? (m || (e ? d : l || y) ? [] : t) : f;
                                        if ((g && g(f, p, n, r), y)) for (i = be(p, u), y(i, [], n, r), o = i.length; o--; ) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                                        if (e) {
                                            if (m || d) {
                                                if (m) {
                                                    for (i = [], o = p.length; o--; ) (a = p[o]) && i.push((f[o] = a));
                                                    m(null, (p = []), i, r);
                                                }
                                                for (o = p.length; o--; ) (a = p[o]) && -1 < (i = m ? v(e, a) : s[o]) && (e[i] = !(t[i] = a));
                                            }
                                        } else (p = be(p === t ? p.splice(l, p.length) : p)), m ? m(null, t, p, r) : A.apply(t, p);
                                    })
                                );
                            })(1 < s && xe(c), 1 < s && P(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(m, "$1"), t, s < n && we(e.slice(s, n)), n < i && we((e = e.slice(n))), n < i && P(e));
                        }
                        c.push(t);
                    }
                return xe(c);
            }
            return (
                (me.prototype = b.filters = b.pseudos),
                (b.setFilters = new me()),
                (d = j.tokenize = function (e, t) {
                    var n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l = z[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (a = e, s = [], u = b.preFilter; a; ) {
                        for (o in ((n && !(r = te.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
                        (n = !1),
                        (r = ne.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace(m, " ") }), (a = a.slice(n.length))),
                        b.filter))
                            !(r = x[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? a.length : a ? j.error(e) : z(e, s).slice(0);
                }),
                (F = j.compile = function (e, t) {
                    var n,
                        y,
                        m,
                        v,
                        x,
                        r,
                        i = [],
                        o = [],
                        a = U[e + " "];
                    if (!a) {
                        for (n = (t = t || d(e)).length; n--; ) ((a = we(t[n]))[S] ? i : o).push(a);
                        (a = U(
                            e,
                            ((v = 0 < (m = i).length),
                            (x = 0 < (y = o).length),
                            (r = function (e, t, n, r, i) {
                                var o,
                                    a,
                                    s,
                                    u = 0,
                                    l = "0",
                                    c = e && [],
                                    f = [],
                                    p = w,
                                    d = e || (x && b.find.TAG("*", i)),
                                    h = (k += null == p ? 1 : Math.random() || 0.1),
                                    g = d.length;
                                for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                                    if (x && o) {
                                        for (a = 0, t || o.ownerDocument == C || (T(o), (n = !E)); (s = y[a++]); )
                                            if (s(o, t || C, n)) {
                                                r.push(o);
                                                break;
                                            }
                                        i && (k = h);
                                    }
                                    v && ((o = !s && o) && u--, e && c.push(o));
                                }
                                if (((u += l), v && l !== u)) {
                                    for (a = 0; (s = m[a++]); ) s(c, f, t, n);
                                    if (e) {
                                        if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = G.call(r));
                                        f = be(f);
                                    }
                                    A.apply(r, f), i && !e && 0 < f.length && 1 < u + m.length && j.uniqueSort(r);
                                }
                                return i && ((k = h), (w = p)), c;
                            }),
                            v ? L(r) : r)
                        )).selector = e;
                    }
                    return a;
                }),
                (B = j.select = function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = "function" == typeof e && e,
                        c = !r && d((e = l.selector || e));
                    if (((n = n || []), 1 === c.length)) {
                        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                            if (!(t = (b.find.ID(a.matches[0].replace(D, f), t) || [])[0])) return n;
                            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                        }
                        for (i = x.needsContext.test(e) ? 0 : o.length; i-- && ((a = o[i]), !b.relative[(s = a.type)]); )
                            if ((u = b.find[s]) && (r = u(a.matches[0].replace(D, f), (ce.test(o[0].type) && ye(t.parentNode)) || t))) {
                                if ((o.splice(i, 1), (e = r.length && P(o)))) break;
                                return A.apply(n, r), n;
                            }
                    }
                    return (l || F(e, c))(r, t, !E, n, !t || (ce.test(e) && ye(t.parentNode)) || t), n;
                }),
                (p.sortStable = S.split("").sort(X).join("") === S),
                (p.detectDuplicates = !!l),
                T(),
                (p.sortDetached = H(function (e) {
                    return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
                })),
                H(function (e) {
                    return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                }) ||
                    de("type|href|height|width", function (e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                    }),
                (p.attributes &&
                    H(function (e) {
                        return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                    })) ||
                    de("value", function (e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                    }),
                H(function (e) {
                    return null == e.getAttribute("disabled");
                }) ||
                    de(J, function (e, t, n) {
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
                    }),
                j
            );
        })(T),
        Q =
            ((E.find = e),
            (E.expr = e.selectors),
            (E.expr[":"] = E.expr.pseudos),
            (E.uniqueSort = E.unique = e.uniqueSort),
            (E.text = e.getText),
            (E.isXMLDoc = e.isXML),
            (E.contains = e.contains),
            (E.escapeSelector = e.escape),
            E.expr.match.needsContext);
    function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var J = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function K(e, n, r) {
        return v(n)
            ? E.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== r;
              })
            : n.nodeType
            ? E.grep(e, function (e) {
                  return (e === n) !== r;
              })
            : "string" != typeof n
            ? E.grep(e, function (e) {
                  return -1 < F.call(n, e) !== r;
              })
            : E.filter(n, e, r);
    }
    (E.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? E.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : E.find.matches(
                      e,
                      E.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        E.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        E(e).filter(function () {
                            for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
                return 1 < r ? E.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(K(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(K(this, e || [], !0));
            },
            is: function (e) {
                return !!K(this, "string" == typeof e && Q.test(e) ? E(e) : e || [], !1).length;
            },
        });
    var Z,
        ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        te =
            (((E.fn.init = function (e, t, n) {
                if (!e) return this;
                if (((n = n || Z), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(E)) : E.makeArray(e, this);
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || (!r[1] && t)) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (r[1]) {
                    if (((t = t instanceof E ? t[0] : t), E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), J.test(r[1]) && E.isPlainObject(t)))
                        for (var r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                }
                return (n = C.getElementById(r[2])) && ((this[0] = n), (this.length = 1)), this;
            }).prototype = E.fn),
            (Z = E(C)),
            /^(?:parents|prev(?:Until|All))/),
        ne = { children: !0, contents: !0, next: !0, prev: !0 };
    function re(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    E.fn.extend({
        has: function (e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
            if (!Q.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? F.call(E(e), this[0]) : F.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        E.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return r(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return r(e, "parentNode", n);
                },
                next: function (e) {
                    return re(e, "nextSibling");
                },
                prev: function (e) {
                    return re(e, "previousSibling");
                },
                nextAll: function (e) {
                    return r(e, "nextSibling");
                },
                prevAll: function (e) {
                    return r(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return r(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return r(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return Y((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return Y(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && M(e.contentDocument) ? e.contentDocument : (u(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
                },
            },
            function (r, i) {
                E.fn[r] = function (e, t) {
                    var n = E.map(this, i, e);
                    return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (ne[r] || E.uniqueSort(n), te.test(r) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var S = /[^\x20\t\r\n\f]+/g;
    function c(e) {
        return e;
    }
    function ie(e) {
        throw e;
    }
    function oe(e, t, n, r) {
        var i;
        try {
            e && v((i = e.promise)) ? i.call(e).done(t).fail(n) : e && v((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (E.Callbacks = function (r) {
        var e, n;
        r =
            "string" == typeof r
                ? ((e = r),
                  (n = {}),
                  E.each(e.match(S) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : E.extend({}, r);
        function i() {
            for (s = s || r.once, a = o = !0; l.length; c = -1) for (t = l.shift(); ++c < u.length; ) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && ((c = u.length), (t = !1));
            r.memory || (t = !1), (o = !1), s && (u = t ? [] : "");
        }
        var o,
            t,
            a,
            s,
            u = [],
            l = [],
            c = -1,
            f = {
                add: function () {
                    return (
                        u &&
                            (t && !o && ((c = u.length - 1), l.push(t)),
                            (function n(e) {
                                E.each(e, function (e, t) {
                                    v(t) ? (r.unique && f.has(t)) || u.push(t) : t && t.length && "string" !== h(t) && n(t);
                                });
                            })(arguments),
                            t && !o && i()),
                        this
                    );
                },
                remove: function () {
                    return (
                        E.each(arguments, function (e, t) {
                            for (var n; -1 < (n = E.inArray(t, u, n)); ) u.splice(n, 1), n <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < E.inArray(e, u) : 0 < u.length;
                },
                empty: function () {
                    return (u = u && []), this;
                },
                disable: function () {
                    return (s = l = []), (u = t = ""), this;
                },
                disabled: function () {
                    return !u;
                },
                lock: function () {
                    return (s = l = []), t || o || (u = t = ""), this;
                },
                locked: function () {
                    return !!s;
                },
                fireWith: function (e, t) {
                    return s || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), o || i()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!a;
                },
            };
        return f;
    }),
        E.extend({
            Deferred: function (e) {
                var o = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    a = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return s.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return a.then(null, e);
                        },
                        pipe: function () {
                            var i = arguments;
                            return E.Deferred(function (r) {
                                E.each(o, function (e, t) {
                                    var n = v(i[t[4]]) && i[t[4]];
                                    s[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                    (i = null);
                            }).promise();
                        },
                        then: function (t, n, r) {
                            var u = 0;
                            function l(i, o, a, s) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                v(t)
                                                    ? s
                                                        ? t.call(e, l(u, o, c, s), l(u, o, ie, s))
                                                        : (u++, t.call(e, l(u, o, c, s), l(u, o, ie, s), l(u, o, c, o.notifyWith)))
                                                    : (a !== c && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                                        }
                                    }
                                    var n = this,
                                        r = arguments,
                                        t = s
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== ie && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                                                  }
                                              };
                                    i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), T.setTimeout(t));
                                };
                            }
                            return E.Deferred(function (e) {
                                o[0][3].add(l(0, e, v(r) ? r : c, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : c)), o[2][3].add(l(0, e, v(n) ? n : ie));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? E.extend(e, a) : a;
                        },
                    },
                    s = {};
                return (
                    E.each(o, function (e, t) {
                        var n = t[2],
                            r = t[5];
                        (a[t[1]] = n.add),
                            r &&
                                n.add(
                                    function () {
                                        i = r;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (s[t[0]] = function () {
                                return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                            }),
                            (s[t[0] + "With"] = n.fireWith);
                    }),
                    a.promise(s),
                    e && e.call(s, s),
                    s
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (i[t] = this), (o[t] = 1 < arguments.length ? s.call(arguments) : e), --n || a.resolveWith(i, o);
                    };
                }
                var n = arguments.length,
                    r = n,
                    i = Array(r),
                    o = s.call(arguments),
                    a = E.Deferred();
                if (n <= 1 && (oe(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || v(o[r] && o[r].then))) return a.then();
                for (; r--; ) oe(o[r], t(r), a.reject);
                return a.promise();
            },
        });
    var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        se =
            ((E.Deferred.exceptionHook = function (e, t) {
                T.console && T.console.warn && e && ae.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
            (E.readyException = function (e) {
                T.setTimeout(function () {
                    throw e;
                });
            }),
            E.Deferred());
    function ue() {
        C.removeEventListener("DOMContentLoaded", ue), T.removeEventListener("load", ue), E.ready();
    }
    (E.fn.ready = function (e) {
        return (
            se.then(e).catch(function (e) {
                E.readyException(e);
            }),
            this
        );
    }),
        E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait) || se.resolveWith(C, [E]);
            },
        }),
        (E.ready.then = se.then),
        "complete" === C.readyState || ("loading" !== C.readyState && !C.documentElement.doScroll) ? T.setTimeout(E.ready) : (C.addEventListener("DOMContentLoaded", ue), T.addEventListener("load", ue));
    function f(e, t, n, r, i, o, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === h(n)) for (s in ((i = !0), n)) f(e, t, s, n[s], !0, o, a);
        else if (
            void 0 !== r &&
            ((i = !0),
            v(r) || (a = !0),
            (t = l
                ? a
                    ? (t.call(e, r), null)
                    : ((l = t),
                      function (e, t, n) {
                          return l.call(E(e), n);
                      })
                : t))
        )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }
    var le = /^-ms-/,
        ce = /-([a-z])/g;
    function fe(e, t) {
        return t.toUpperCase();
    }
    function x(e) {
        return e.replace(le, "ms-").replace(ce, fe);
    }
    function m(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function pe() {
        this.expando = E.expando + pe.uid++;
    }
    (pe.uid = 1),
        (pe.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = Object.create(null)), m(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[x(t)] = n;
                else for (r in t) i[x(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][x(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(x) : (t = x(t)) in r ? [t] : t.match(S) || []).length;
                        for (; n--; ) delete r[t[n]];
                    }
                    (void 0 !== t && !E.isEmptyObject(r)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !E.isEmptyObject(e);
            },
        });
    var b = new pe(),
        l = new pe(),
        de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        he = /[A-Z]/g;
    function ge(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(he, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : de.test(i) ? JSON.parse(i) : i));
                } catch (e) {}
                l.set(e, t, n);
            } else n = void 0;
        return n;
    }
    E.extend({
        hasData: function (e) {
            return l.hasData(e) || b.hasData(e);
        },
        data: function (e, t, n) {
            return l.access(e, t, n);
        },
        removeData: function (e, t) {
            l.remove(e, t);
        },
        _data: function (e, t, n) {
            return b.access(e, t, n);
        },
        _removeData: function (e, t) {
            b.remove(e, t);
        },
    }),
        E.fn.extend({
            data: function (n, e) {
                var t,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              l.set(this, n);
                          })
                        : f(
                              this,
                              function (e) {
                                  var t;
                                  if (o && void 0 === e) return void 0 !== (t = l.get(o, n)) || void 0 !== (t = ge(o, n)) ? t : void 0;
                                  this.each(function () {
                                      l.set(this, n, e);
                                  });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (this.length && ((i = l.get(o)), 1 === o.nodeType && !b.get(o, "hasDataAttrs"))) {
                    for (t = a.length; t--; ) a[t] && 0 === (r = a[t].name).indexOf("data-") && ((r = x(r.slice(5))), ge(o, r, i[r]));
                    b.set(o, "hasDataAttrs", !0);
                }
                return i;
            },
            removeData: function (e) {
                return this.each(function () {
                    l.remove(this, e);
                });
            },
        }),
        E.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (r = b.get(e, (t = (t || "fx") + "queue"))), n && (!r || Array.isArray(n) ? (r = b.access(e, t, E.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = E.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = E._queueHooks(e, t);
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                            e,
                            function () {
                                E.dequeue(e, t);
                            },
                            o
                        )),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    b.get(e, n) ||
                    b.access(e, n, {
                        empty: E.Callbacks("once memory").add(function () {
                            b.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        E.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? E.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = E.queue(this, t, n);
                              E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    E.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function n() {
                    --i || o.resolveWith(a, [a]);
                }
                var r,
                    i = 1,
                    o = E.Deferred(),
                    a = this,
                    s = this.length;
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (r = b.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
                return n(), o.promise(t);
            },
        });
    function ye(e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && k(e) && "none" === E.css(e, "display"));
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        me = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        p = ["Top", "Right", "Bottom", "Left"],
        w = C.documentElement,
        k = function (e) {
            return E.contains(e.ownerDocument, e);
        },
        ve = { composed: !0 };
    w.getRootNode &&
        (k = function (e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(ve) === e.ownerDocument;
        });
    function xe(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return E.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (E.cssNumber[t] || ("px" !== l && +u)) && me.exec(E.css(e, t));
        if (c && c[3] !== l) {
            for (l = l || c[3], c = +(u /= 2) || 1; a--; ) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            E.style(e, t, (c *= 2) + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var be = {};
    function A(e, t) {
        for (var n, r, i, o, a, s, u = [], l = 0, c = e.length; l < c; l++)
            (r = e[l]).style &&
                ((n = r.style.display),
                t
                    ? ("none" === n && ((u[l] = b.get(r, "display") || null), u[l] || (r.style.display = "")),
                      "" === r.style.display &&
                          ye(r) &&
                          (u[l] =
                              ((s = o = i = void 0),
                              (o = r.ownerDocument),
                              (a = r.nodeName),
                              (s = be[a]) || ((i = o.body.appendChild(o.createElement(a))), (s = E.css(i, "display")), i.parentNode.removeChild(i), (be[a] = s = "none" === s ? "block" : s)))))
                    : "none" !== n && ((u[l] = "none"), b.set(r, "display", n)));
        for (l = 0; l < c; l++) null != u[l] && (e[l].style.display = u[l]);
        return e;
    }
    E.fn.extend({
        show: function () {
            return A(this, !0);
        },
        hide: function () {
            return A(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ye(this) ? E(this).show() : E(this).hide();
                  });
        },
    });
    var we = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i,
        n = C.createDocumentFragment().appendChild(C.createElement("div")),
        N =
            ((L = C.createElement("input")).setAttribute("type", "radio"),
            L.setAttribute("checked", "checked"),
            L.setAttribute("name", "t"),
            n.appendChild(L),
            (y.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (n.innerHTML = "<textarea>x</textarea>"),
            (y.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue),
            (n.innerHTML = "<option></option>"),
            (y.option = !!n.lastChild),
            { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] });
    function D(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || (t && u(e, t)) ? E.merge([e], n) : n;
    }
    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) b.set(e[n], "globalEval", !t || b.get(t[n], "globalEval"));
    }
    (N.tbody = N.tfoot = N.colgroup = N.caption = N.thead), (N.th = N.td), y.option || (N.optgroup = N.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Se = /<|&#?\w+;/;
    function ke(e, t, n, r, i) {
        for (var o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === h(o)) E.merge(f, o.nodeType ? [o] : o);
                else if (Se.test(o)) {
                    for (a = a || c.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), s = N[s] || N._default, a.innerHTML = s[1] + E.htmlPrefilter(o) + s[2], l = s[0]; l--; ) a = a.lastChild;
                    E.merge(f, a.childNodes), ((a = c.firstChild).textContent = "");
                } else f.push(t.createTextNode(o));
        for (c.textContent = "", p = 0; (o = f[p++]); )
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (((u = k(o)), (a = D(c.appendChild(o), "script")), u && Ee(a), n)) for (l = 0; (o = a[l++]); ) Ce.test(o.type || "") && n.push(o);
        return c;
    }
    var Ae = /^key/,
        Ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        De = /^([^.]*)(?:\.(.+)|)/;
    function a() {
        return !0;
    }
    function d() {
        return !1;
    }
    function je(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return C.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function qe(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) qe(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = d;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return E().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = E.guid++))),
            e.each(function () {
                E.event.add(this, t, i, r, n);
            })
        );
    }
    function Le(e, i, o) {
        o
            ? (b.set(e, i, !1),
              E.event.add(e, i, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          r = b.get(this, i);
                      if (1 & e.isTrigger && this[i]) {
                          if (r.length) (E.event.special[i] || {}).delegateType && e.stopPropagation();
                          else if (((r = s.call(arguments)), b.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = b.get(this, i)) || t ? b.set(this, i, !1) : (n = {}), r !== n))
                              return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                      } else r.length && (b.set(this, i, { value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === b.get(e, i) && E.event.add(e, i, a);
    }
    (E.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = b.get(t);
            if (m(t))
                for (
                    n.handler && ((n = (o = n).handler), (i = o.selector)),
                        i && E.find.matchesSelector(w, i),
                        n.guid || (n.guid = E.guid++),
                        (s = h.events) || (s = h.events = Object.create(null)),
                        (a = h.handle) ||
                            (a = h.handle = function (e) {
                                return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        u = (e = (e || "").match(S) || [""]).length;
                    u--;

                )
                    (f = d = (p = De.exec(e[u]) || [])[1]),
                        (p = (p[2] || "").split(".").sort()),
                        f &&
                            ((l = E.event.special[f] || {}),
                            (f = (i ? l.delegateType : l.bindType) || f),
                            (l = E.event.special[f] || {}),
                            (d = E.extend({ type: f, origType: d, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && E.expr.match.needsContext.test(i), namespace: p.join(".") }, o)),
                            (c = s[f]) || (((c = s[f] = []).delegateCount = 0), (l.setup && !1 !== l.setup.call(t, r, p, a)) || (t.addEventListener && t.addEventListener(f, a))),
                            l.add && (l.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)),
                            i ? c.splice(c.delegateCount++, 0, d) : c.push(d),
                            (E.event.global[f] = !0));
        },
        remove: function (e, t, n, r, i) {
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
                y = b.hasData(e) && b.get(e);
            if (y && (u = y.events)) {
                for (l = (t = (t || "").match(S) || [""]).length; l--; )
                    if (((d = g = (s = De.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        for (f = E.event.special[d] || {}, p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--; )
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || E.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && b.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a = new Array(arguments.length),
                s = E.event.fix(e),
                e = (b.get(this, "events") || Object.create(null))[s.type] || [],
                u = E.event.special[s.type] || {};
            for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (((s.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, s))) {
                for (o = E.event.handlers.call(this, s, e), t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        (s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace)) ||
                            ((s.handleObj = i), (s.data = i.data), void 0 !== (i = ((E.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[E.expando] ? e : new E.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    e = this || e;
                    return we.test(e.type) && e.click && u(e, "input") && Le(e, "click", a), !1;
                },
                trigger: function (e) {
                    e = this || e;
                    return we.test(e.type) && e.click && u(e, "input") && Le(e, "click"), !0;
                },
                _default: function (e) {
                    e = e.target;
                    return (we.test(e.type) && e.click && u(e, "input") && b.get(e, "click")) || u(e, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (E.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (E.Event = function (e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? a : d),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
        }),
        (E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: d,
            isPropagationStopped: d,
            isImmediatePropagationStopped: d,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = a), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = a), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = a), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        E.each(
            {
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
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Ae.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ne.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            E.event.addProp
        ),
        E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            E.event.special[e] = {
                setup: function () {
                    return Le(this, e, je), !1;
                },
                trigger: function () {
                    return Le(this, e), !0;
                },
                delegateType: t,
            };
        }),
        E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
            E.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        r = e.handleObj;
                    return (n && (n === this || E.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
                },
            };
        }),
        E.fn.extend({
            on: function (e, t, n, r) {
                return qe(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return qe(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                        !1 === n && (n = d),
                        this.each(function () {
                            E.event.remove(this, e, n, t);
                        })
                    );
                for (i in e) this.off(i, t, e[i]);
                return this;
            },
        });
    var He = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Re(e, t) {
        return (u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0]) || e;
    }
    function Me(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Ie(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function We(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
            if (b.hasData(e) && (o = b.get(e).events)) for (i in (b.remove(t, "handle events"), o)) for (n = 0, r = o[i].length; n < r; n++) E.event.add(t, i, o[i][n]);
            l.hasData(e) && ((e = l.access(e)), (e = E.extend({}, e)), l.set(t, e));
        }
    }
    function j(n, r, i, o) {
        r = I(r);
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
            h = v(d);
        if (h || (1 < f && "string" == typeof d && !y.checkClone && Oe.test(d)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())), j(t, r, i, o);
            });
        if (f && ((t = (e = ke(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(D(e, "script"), Me)).length; c < f; c++) (u = e), c !== p && ((u = E.clone(u, !0, !0)), s && E.merge(a, D(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, Ie), c = 0; c < s; c++)
                    (u = a[c]),
                        Ce.test(u.type || "") &&
                            !b.access(u, "globalEval") &&
                            E.contains(l, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : V(u.textContent.replace(Pe, ""), u, l));
        }
        return n;
    }
    function Fe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(D(r)), r.parentNode && (n && k(r) && Ee(D(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    E.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c = e.cloneNode(!0),
                f = k(e);
            if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || E.isXMLDoc(e)))
                for (a = D(c), r = 0, i = (o = D(e)).length; r < i; r++)
                    (s = o[r]), "input" === (l = (u = a[r]).nodeName.toLowerCase()) && we.test(s.type) ? (u.checked = s.checked) : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
            if (t)
                if (n) for (o = o || D(e), a = a || D(c), r = 0, i = o.length; r < i; r++) We(o[r], a[r]);
                else We(e, c);
            return 0 < (a = D(c, "script")).length && Ee(a, !f && D(e, "script")), c;
        },
        cleanData: function (e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (m(n)) {
                    if ((t = n[b.expando])) {
                        if (t.events) for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[b.expando] = void 0;
                    }
                    n[l.expando] && (n[l.expando] = void 0);
                }
        },
    }),
        E.fn.extend({
            detach: function (e) {
                return Fe(this, e, !0);
            },
            remove: function (e) {
                return Fe(this, e);
            },
            text: function (e) {
                return f(
                    this,
                    function (e) {
                        return void 0 === e
                            ? E.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return j(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Re(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return j(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = Re(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return j(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return j(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(D(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return E.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return f(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !He.test(e) && !N[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(D(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return j(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        E.inArray(this, n) < 0 && (E.cleanData(D(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
            E.fn[e] = function (e) {
                for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), E(r[o])[a](t), W.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    function Be(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : T).getComputedStyle(e);
    }
    function $e(e, t, n) {
        var r,
            i = {};
        for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
        for (r in ((n = n.call(e)), t)) e.style[r] = i[r];
        return n;
    }
    var _e,
        ze,
        Ue,
        Xe,
        Ve,
        Ge,
        Ye,
        i,
        Qe = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        Je = new RegExp(p.join("|"), "i");
    function Ke(e, t, n) {
        var r,
            i,
            o = e.style;
        return (
            (n = n || Be(e)) &&
                ("" !== (i = n.getPropertyValue(t) || n[t]) || k(e) || (i = E.style(e, t)),
                !y.pixelBoxStyles() && Qe.test(i) && Je.test(t) && ((e = o.width), (t = o.minWidth), (r = o.maxWidth), (o.minWidth = o.maxWidth = o.width = i), (i = n.width), (o.width = e), (o.minWidth = t), (o.maxWidth = r))),
            void 0 !== i ? i + "" : i
        );
    }
    function Ze(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    function et() {
        var e;
        i &&
            ((Ye.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (i.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            w.appendChild(Ye).appendChild(i),
            (e = T.getComputedStyle(i)),
            (_e = "1%" !== e.top),
            (Ge = 12 === tt(e.marginLeft)),
            (i.style.right = "60%"),
            (Xe = 36 === tt(e.right)),
            (ze = 36 === tt(e.width)),
            (i.style.position = "absolute"),
            (Ue = 12 === tt(i.offsetWidth / 3)),
            w.removeChild(Ye),
            (i = null));
    }
    function tt(e) {
        return Math.round(parseFloat(e));
    }
    (Ye = C.createElement("div")),
        (i = C.createElement("div")).style &&
            ((i.style.backgroundClip = "content-box"),
            (i.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === i.style.backgroundClip),
            E.extend(y, {
                boxSizingReliable: function () {
                    return et(), ze;
                },
                pixelBoxStyles: function () {
                    return et(), Xe;
                },
                pixelPosition: function () {
                    return et(), _e;
                },
                reliableMarginLeft: function () {
                    return et(), Ge;
                },
                scrollboxSize: function () {
                    return et(), Ue;
                },
                reliableTrDimensions: function () {
                    var e, t, n;
                    return (
                        null == Ve &&
                            ((e = C.createElement("table")),
                            (t = C.createElement("tr")),
                            (n = C.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            w.appendChild(e).appendChild(t).appendChild(n),
                            (n = T.getComputedStyle(t)),
                            (Ve = 3 < parseInt(n.height)),
                            w.removeChild(e)),
                        Ve
                    );
                },
            }));
    var nt = ["Webkit", "Moz", "ms"],
        rt = C.createElement("div").style,
        it = {};
    function ot(e) {
        return (
            E.cssProps[e] ||
            it[e] ||
            (e in rt
                ? e
                : (it[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; ) if ((e = nt[n] + t) in rt) return e;
                      })(e) || e))
        );
    }
    var at = /^(none|table(?!-c[ea]).+)/,
        st = /^--/,
        ut = { position: "absolute", visibility: "hidden", display: "block" },
        lt = { letterSpacing: "0", fontWeight: "400" };
    function ct(e, t, n) {
        var r = me.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function ft(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += E.css(e, n + p[a], !0, i)),
                r
                    ? ("content" === n && (u -= E.css(e, "padding" + p[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + p[a] + "Width", !0, i)))
                    : ((u += E.css(e, "padding" + p[a], !0, i)), "padding" !== n ? (u += E.css(e, "border" + p[a] + "Width", !0, i)) : (s += E.css(e, "border" + p[a] + "Width", !0, i)));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
    }
    function pt(e, t, n) {
        var r = Be(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Ke(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Qe.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && u(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((i = "border-box" === E.css(e, "boxSizing", !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + ft(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        );
    }
    function o(e, t, n, r, i) {
        return new o.prototype.init(e, t, n, r, i);
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) return "" === (t = Ke(e, "opacity")) ? "1" : t;
                },
            },
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
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = x(t),
                    u = st.test(t),
                    l = e.style;
                if ((u || (t = ot(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = me.exec(n)) && i[1] && ((n = xe(e, t, i)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || u || (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
                        y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o = x(t);
            return (
                st.test(t) || (t = ot(o)),
                "normal" === (i = void 0 === (i = (o = E.cssHooks[t] || E.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? Ke(e, t, r) : i) && t in lt && (i = lt[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        E.each(["height", "width"], function (e, a) {
            E.cssHooks[a] = {
                get: function (e, t, n) {
                    if (t)
                        return !at.test(E.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? pt(e, a, n)
                            : $e(e, ut, function () {
                                  return pt(e, a, n);
                              });
                },
                set: function (e, t, n) {
                    var r = Be(e),
                        i = !y.scrollboxSize() && "absolute" === r.position,
                        o = (i || n) && "border-box" === E.css(e, "boxSizing", !1, r),
                        n = n ? ft(e, a, n, o, r) : 0;
                    return (
                        o && i && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - ft(e, a, "border", !1, r) - 0.5)),
                        n && (o = me.exec(t)) && "px" !== (o[3] || "px") && ((e.style[a] = t), (t = E.css(e, a))),
                        ct(0, t, n)
                    );
                },
            };
        }),
        (E.cssHooks.marginLeft = Ze(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Ke(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            $e(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        E.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
            (E.cssHooks[i + o] = {
                expand: function (e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + p[t] + o] = r[t] || r[t - 2] || r[0];
                    return n;
                },
            }),
                "margin" !== i && (E.cssHooks[i + o].set = ct);
        }),
        E.fn.extend({
            css: function (e, t) {
                return f(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = Be(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((E.Tween = o).prototype = {
            constructor: o,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || E.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (E.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = o.propHooks[this.prop];
                return (e && e.get ? e : o.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    n = o.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : o.propHooks._default).set(this),
                    this
                );
            },
        }).init.prototype = o.prototype),
        ((o.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!E.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)]) ? (e.elem[e.prop] = e.now) : E.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = o.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (E.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (E.fx = o.prototype.init),
        (E.fx.step = {});
    var q,
        dt,
        L,
        ht = /^(?:toggle|show|hide)$/,
        gt = /queueHooks$/;
    function yt() {
        dt && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(yt) : T.setTimeout(yt, E.fx.interval), E.fx.tick());
    }
    function mt() {
        return (
            T.setTimeout(function () {
                q = void 0;
            }),
            (q = Date.now())
        );
    }
    function vt(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = p[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function xt(e, t, n) {
        for (var r, i = (H.tweeners[t] || []).concat(H.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function H(i, e, t) {
        var n,
            o,
            r,
            a,
            s,
            u,
            l,
            c = 0,
            f = H.prefilters.length,
            p = E.Deferred().always(function () {
                delete d.elem;
            }),
            d = function () {
                if (o) return !1;
                for (var e = q || mt(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t);
                return p.notifyWith(i, [h, t, e]), t < 1 && r ? e : (r || p.notifyWith(i, [h, 1, 0]), p.resolveWith(i, [h]), !1);
            },
            h = p.promise({
                elem: i,
                props: E.extend({}, e),
                opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: q || mt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    t = E.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(t), t;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? h.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) h.tweens[t].run(1);
                    return e ? (p.notifyWith(i, [h, 1, 0]), p.resolveWith(i, [h, e])) : p.rejectWith(i, [h, e]), this;
                },
            }),
            g = h.props,
            y = g,
            m = h.opts.specialEasing;
        for (r in y)
            if (((s = m[(a = x(r))]), (u = y[r]), Array.isArray(u) && ((s = u[1]), (u = y[r] = u[0])), r !== a && ((y[a] = u), delete y[r]), (l = E.cssHooks[a]) && "expand" in l))
                for (r in ((u = l.expand(u)), delete y[a], u)) r in y || ((y[r] = u[r]), (m[r] = s));
            else m[a] = s;
        for (; c < f; c++) if ((n = H.prefilters[c].call(h, i, g, h.opts))) return v(n.stop) && (E._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return (
            E.map(g, xt, h),
            v(h.opts.start) && h.opts.start.call(i, h),
            h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
            E.fx.timer(E.extend(d, { elem: i, anim: h, queue: h.opts.queue })),
            h
        );
    }
    (E.Animation = E.extend(H, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return xe(n.elem, e, me.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (var n, r = 0, i = (e = v(e) ? ((t = e), ["*"]) : e.match(S)).length; r < i; r++) (n = e[r]), (H.tweeners[n] = H.tweeners[n] || []), H.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = "width" in t || "height" in t,
                    f = this,
                    p = {},
                    d = e.style,
                    h = e.nodeType && ye(e),
                    g = b.get(e, "fxshow");
                for (r in (n.queue ||
                    (null == (a = E._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    f.always(function () {
                        f.always(function () {
                            a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((i = t[r]), ht.test(i))) {
                        if ((delete t[r], (o = o || "toggle" === i), i === (h ? "hide" : "show"))) {
                            if ("show" !== i || !g || void 0 === g[r]) continue;
                            h = !0;
                        }
                        p[r] = (g && g[r]) || E.style(e, r);
                    }
                if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                    for (r in (c &&
                        1 === e.nodeType &&
                        ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                        null == (l = g && g.display) && (l = b.get(e, "display")),
                        "none" === (c = E.css(e, "display")) && (l ? (c = l) : (A([e], !0), (l = e.style.display || l), (c = E.css(e, "display")), A([e]))),
                        ("inline" === c || ("inline-block" === c && null != l)) &&
                            "none" === E.css(e, "float") &&
                            (u ||
                                (f.done(function () {
                                    d.display = l;
                                }),
                                null == l && ((c = d.display), (l = "none" === c ? "" : c))),
                            (d.display = "inline-block"))),
                    n.overflow &&
                        ((d.overflow = "hidden"),
                        f.always(function () {
                            (d.overflow = n.overflow[0]), (d.overflowX = n.overflow[1]), (d.overflowY = n.overflow[2]);
                        })),
                    (u = !1),
                    p))
                        u ||
                            (g ? "hidden" in g && (h = g.hidden) : (g = b.access(e, "fxshow", { display: l })),
                            o && (g.hidden = !h),
                            h && A([e], !0),
                            f.done(function () {
                                for (r in (h || A([e]), b.remove(e, "fxshow"), p)) E.style(e, r, p[r]);
                            })),
                            (u = xt(h ? g[r] : 0, r, f)),
                            r in g || ((g[r] = u.start), h && ((u.end = u.start), (u.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? H.prefilters.unshift(e) : H.prefilters.push(e);
        },
    })),
        (E.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? E.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
            return (
                E.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in E.fx.speeds ? (r.duration = E.fx.speeds[r.duration]) : (r.duration = E.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    v(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
                }),
                r
            );
        }),
        E.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ye).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (t, e, n, r) {
                function i() {
                    var e = H(this, E.extend({}, t), a);
                    (o || b.get(this, "finish")) && e.stop(!0);
                }
                var o = E.isEmptyObject(t),
                    a = E.speed(e, n, r);
                return (i.finish = i), o || !1 === a.queue ? this.each(i) : this.queue(a.queue, i);
            },
            stop: function (i, e, o) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                }
                return (
                    "string" != typeof i && ((o = e), (e = i), (i = void 0)),
                    e && this.queue(i || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != i && i + "queueHooks",
                            n = E.timers,
                            r = b.get(this);
                        if (t) r[t] && r[t].stop && a(r[t]);
                        else for (t in r) r[t] && r[t].stop && gt.test(t) && a(r[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || E.dequeue(this, i);
                    })
                );
            },
            finish: function (a) {
                return (
                    !1 !== a && (a = a || "fx"),
                    this.each(function () {
                        var e,
                            t = b.get(this),
                            n = t[a + "queue"],
                            r = t[a + "queueHooks"],
                            i = E.timers,
                            o = n ? n.length : 0;
                        for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        E.each(["toggle", "show", "hide"], function (e, r) {
            var i = E.fn[r];
            E.fn[r] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(vt(r, !0), e, t, n);
            };
        }),
        E.each({ slideDown: vt("show"), slideUp: vt("hide"), slideToggle: vt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
            E.fn[e] = function (e, t, n) {
                return this.animate(r, e, t, n);
            };
        }),
        (E.timers = []),
        (E.fx.tick = function () {
            var e,
                t = 0,
                n = E.timers;
            for (q = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || E.fx.stop(), (q = void 0);
        }),
        (E.fx.timer = function (e) {
            E.timers.push(e), E.fx.start();
        }),
        (E.fx.interval = 13),
        (E.fx.start = function () {
            dt || ((dt = !0), yt());
        }),
        (E.fx.stop = function () {
            dt = null;
        }),
        (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (E.fn.delay = function (r, e) {
            return (
                (r = (E.fx && E.fx.speeds[r]) || r),
                this.queue((e = e || "fx"), function (e, t) {
                    var n = T.setTimeout(e, r);
                    t.stop = function () {
                        T.clearTimeout(n);
                    };
                })
            );
        }),
        (L = C.createElement("input")),
        (n = C.createElement("select").appendChild(C.createElement("option"))),
        (L.type = "checkbox"),
        (y.checkOn = "" !== L.value),
        (y.optSelected = n.selected),
        ((L = C.createElement("input")).value = "t"),
        (L.type = "radio"),
        (y.radioValue = "t" === L.value);
    var bt,
        wt = E.expr.attrHandle,
        Tt =
            (E.fn.extend({
                attr: function (e, t) {
                    return f(this, E.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        E.removeAttr(this, e);
                    });
                },
            }),
            E.extend({
                attr: function (e, t, n) {
                    var r,
                        i,
                        o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return void 0 === e.getAttribute
                            ? E.prop(e, t, n)
                            : ((1 === o && E.isXMLDoc(e)) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? bt : void 0)),
                              void 0 !== n
                                  ? null === n
                                      ? void E.removeAttr(e, t)
                                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                      ? r
                                      : (e.setAttribute(t, n + ""), n)
                                  : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = E.find.attr(e, t))
                                  ? void 0
                                  : r);
                },
                attrHooks: {
                    type: {
                        set: function (e, t) {
                            var n;
                            if (!y.radioValue && "radio" === t && u(e, "input")) return (n = e.value), e.setAttribute("type", t), n && (e.value = n), t;
                        },
                    },
                },
                removeAttr: function (e, t) {
                    var n,
                        r = 0,
                        i = t && t.match(S);
                    if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
                },
            }),
            (bt = {
                set: function (e, t, n) {
                    return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
                },
            }),
            E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var a = wt[t] || E.find.attr;
                wt[t] = function (e, t, n) {
                    var r,
                        i,
                        o = t.toLowerCase();
                    return n || ((i = wt[o]), (wt[o] = r), (r = null != a(e, t, n) ? o : null), (wt[o] = i)), r;
                };
            }),
            /^(?:input|select|textarea|button)$/i),
        Ct = /^(?:a|area)$/i;
    function O(e) {
        return (e.match(S) || []).join(" ");
    }
    function P(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function Et(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(S)) || [];
    }
    E.fn.extend({
        prop: function (e, t) {
            return f(this, E.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[E.propFix[e] || e];
            });
        },
    }),
        E.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && E.isXMLDoc(e)) || ((t = E.propFix[t] || t), (i = E.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Tt.test(e.nodeName) || (Ct.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
            (E.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    e = e.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            E.propFix[this.toLowerCase()] = this;
        }),
        E.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = 0;
                if (v(t))
                    return this.each(function (e) {
                        E(this).addClass(t.call(this, e, P(this)));
                    });
                if ((e = Et(t)).length)
                    for (; (n = this[s++]); )
                        if (((a = P(n)), (r = 1 === n.nodeType && " " + O(a) + " "))) {
                            for (o = 0; (i = e[o++]); ) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                            a !== (a = O(r)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = 0;
                if (v(t))
                    return this.each(function (e) {
                        E(this).removeClass(t.call(this, e, P(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = Et(t)).length)
                    for (; (n = this[s++]); )
                        if (((a = P(n)), (r = 1 === n.nodeType && " " + O(a) + " "))) {
                            for (o = 0; (i = e[o++]); ) for (; -1 < r.indexOf(" " + i + " "); ) r = r.replace(" " + i + " ", " ");
                            a !== (a = O(r)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function (i, t) {
                var o = typeof i,
                    a = "string" == o || Array.isArray(i);
                return "boolean" == typeof t && a
                    ? t
                        ? this.addClass(i)
                        : this.removeClass(i)
                    : v(i)
                    ? this.each(function (e) {
                          E(this).toggleClass(i.call(this, e, P(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, r;
                          if (a) for (t = 0, n = E(this), r = Et(i); (e = r[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          else (void 0 !== i && "boolean" != o) || ((e = P(this)) && b.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", (!e && !1 !== i && b.get(this, "__className__")) || ""));
                      });
            },
            hasClass: function (e) {
                for (var t, n = 0, r = " " + e + " "; (t = this[n++]); ) if (1 === t.nodeType && -1 < (" " + O(P(t)) + " ").indexOf(r)) return !0;
                return !1;
            },
        });
    function St(e) {
        e.stopPropagation();
    }
    var kt = /\r/g,
        At =
            (E.fn.extend({
                val: function (t) {
                    var n,
                        e,
                        r,
                        i = this[0];
                    return arguments.length
                        ? ((r = v(t)),
                          this.each(function (e) {
                              1 === this.nodeType &&
                                  (null == (e = r ? t.call(this, e, E(this).val()) : t)
                                      ? (e = "")
                                      : "number" == typeof e
                                      ? (e += "")
                                      : Array.isArray(e) &&
                                        (e = E.map(e, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  ((n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value")) || (this.value = e));
                          }))
                        : i
                        ? (n = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value"))
                            ? e
                            : "string" == typeof (e = i.value)
                            ? e.replace(kt, "")
                            : null == e
                            ? ""
                            : e
                        : void 0;
                },
            }),
            E.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = E.find.attr(e, "value");
                            return null != t ? t : O(E.text(e));
                        },
                    },
                    select: {
                        get: function (e) {
                            for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++)
                                if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !u(t.parentNode, "optgroup"))) {
                                    if (((t = E(t).val()), i)) return t;
                                    o.push(t);
                                }
                            return o;
                        },
                        set: function (e, t) {
                            for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                            return n || (e.selectedIndex = -1), o;
                        },
                    },
                },
            }),
            E.each(["radio", "checkbox"], function () {
                (E.valHooks[this] = {
                    set: function (e, t) {
                        if (Array.isArray(t)) return (e.checked = -1 < E.inArray(E(e).val(), t));
                    },
                }),
                    y.checkOn ||
                        (E.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value;
                        });
            }),
            (y.focusin = "onfocusin" in T),
            /^(?:focusinfocus|focusoutblur)$/),
        Nt =
            (E.extend(E.event, {
                trigger: function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c,
                        f = [n || C],
                        p = _.call(e, "type") ? e.type : e,
                        d = _.call(e, "namespace") ? e.namespace.split(".") : [],
                        h = (c = o = n = n || C);
                    if (
                        3 !== n.nodeType &&
                        8 !== n.nodeType &&
                        !At.test(p + E.event.triggered) &&
                        (-1 < p.indexOf(".") && ((p = (d = p.split(".")).shift()), d.sort()),
                        (s = p.indexOf(":") < 0 && "on" + p),
                        ((e = e[E.expando] ? e : new E.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
                        (e.namespace = d.join(".")),
                        (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                        (e.result = void 0),
                        e.target || (e.target = n),
                        (t = null == t ? [e] : E.makeArray(t, [e])),
                        (l = E.event.special[p] || {}),
                        r || !l.trigger || !1 !== l.trigger.apply(n, t))
                    ) {
                        if (!r && !l.noBubble && !g(n)) {
                            for (a = l.delegateType || p, At.test(a + p) || (h = h.parentNode); h; h = h.parentNode) f.push(h), (o = h);
                            o === (n.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T);
                        }
                        for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
                            (c = h),
                                (e.type = 1 < i ? a : l.bindType || p),
                                (u = (b.get(h, "events") || Object.create(null))[e.type] && b.get(h, "handle")) && u.apply(h, t),
                                (u = s && h[s]) && u.apply && m(h) && ((e.result = u.apply(h, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = p),
                            r ||
                                e.isDefaultPrevented() ||
                                (l._default && !1 !== l._default.apply(f.pop(), t)) ||
                                !m(n) ||
                                (s &&
                                    v(n[p]) &&
                                    !g(n) &&
                                    ((o = n[s]) && (n[s] = null),
                                    (E.event.triggered = p),
                                    e.isPropagationStopped() && c.addEventListener(p, St),
                                    n[p](),
                                    e.isPropagationStopped() && c.removeEventListener(p, St),
                                    (E.event.triggered = void 0),
                                    o && (n[s] = o))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    n = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
                    E.event.trigger(n, null, t);
                },
            }),
            E.fn.extend({
                trigger: function (e, t) {
                    return this.each(function () {
                        E.event.trigger(e, t, this);
                    });
                },
                triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return E.event.trigger(e, t, n, !0);
                },
            }),
            y.focusin ||
                E.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                    function i(e) {
                        E.event.simulate(r, e.target, E.event.fix(e));
                    }
                    E.event.special[r] = {
                        setup: function () {
                            var e = this.ownerDocument || this.document || this,
                                t = b.access(e, r);
                            t || e.addEventListener(n, i, !0), b.access(e, r, (t || 0) + 1);
                        },
                        teardown: function () {
                            var e = this.ownerDocument || this.document || this,
                                t = b.access(e, r) - 1;
                            t ? b.access(e, r, t) : (e.removeEventListener(n, i, !0), b.remove(e, r));
                        },
                    };
                }),
            T.location),
        Dt = { guid: Date.now() },
        jt = /\?/,
        qt =
            ((E.parseXML = function (e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    t = new T.DOMParser().parseFromString(e, "text/xml");
                } catch (e) {
                    t = void 0;
                }
                return (t && !t.getElementsByTagName("parsererror").length) || E.error("Invalid XML: " + e), t;
            }),
            /\[\]$/),
        Lt = /\r?\n/g,
        Ht = /^(?:submit|button|image|reset|file)$/i,
        Ot = /^(?:input|select|textarea|keygen)/i;
    (E.param = function (e, t) {
        function n(e, t) {
            (t = v(t) ? t() : t), (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
        }
        var r,
            i = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
            E.each(e, function () {
                n(this.name, this.value);
            });
        else
            for (r in e)
                !(function n(r, e, i, o) {
                    if (Array.isArray(e))
                        E.each(e, function (e, t) {
                            i || qt.test(r) ? o(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o);
                        });
                    else if (i || "object" !== h(e)) o(r, e);
                    else for (var t in e) n(r + "[" + t + "]", e[t], i, o);
                })(r, e[r], t, n);
        return i.join("&");
    }),
        E.fn.extend({
            serialize: function () {
                return E.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !E(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e));
                    })
                    .map(function (e, t) {
                        var n = E(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? E.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Lt, "\r\n") };
                    })
                    .get();
            },
        });
    var Pt = /%20/g,
        Rt = /#.*$/,
        Mt = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Wt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Bt = {},
        $t = {},
        _t = "*/".concat("*"),
        zt = C.createElement("a");
    function Ut(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                r = 0,
                i = e.toLowerCase().match(S) || [];
            if (v(t)) for (; (n = i[r++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Xt(t, r, i, o) {
        var a = {},
            s = t === $t;
        function u(e) {
            var n;
            return (
                (a[e] = !0),
                E.each(t[e] || [], function (e, t) {
                    t = t(r, i, o);
                    return "string" != typeof t || s || a[t] ? (s ? !(n = t) : void 0) : (r.dataTypes.unshift(t), u(t), !1);
                }),
                n
            );
        }
        return u(r.dataTypes[0]) || (!a["*"] && u("*"));
    }
    function Vt(e, t) {
        var n,
            r,
            i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e;
    }
    (zt.href = Nt.href),
        E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Nt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": _t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e);
            },
            ajaxPrefilter: Ut(Bt),
            ajaxTransport: Ut($t),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var u,
                    l,
                    c,
                    n,
                    f,
                    p,
                    d,
                    r,
                    i,
                    h = E.ajaxSetup({}, (t = t || {})),
                    g = h.context || h,
                    y = h.context && (g.nodeType || g.jquery) ? E(g) : E.event,
                    m = E.Deferred(),
                    v = E.Callbacks("once memory"),
                    x = h.statusCode || {},
                    o = {},
                    a = {},
                    s = "canceled",
                    b = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (p) {
                                if (!n) for (n = {}; (t = It.exec(c)); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return p ? c : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == p && ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e), (o[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == p && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (p) b.always(e[b.status]);
                                else for (var t in e) x[t] = [x[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || s;
                            return u && u.abort(e), w(0, e), this;
                        },
                    };
                if (
                    (m.promise(b),
                    (h.url = ((e || h.url || Nt.href) + "").replace(Ft, Nt.protocol + "//")),
                    (h.type = t.method || t.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(S) || [""]),
                    null == h.crossDomain)
                ) {
                    i = C.createElement("a");
                    try {
                        (i.href = h.url), (i.href = i.href), (h.crossDomain = zt.protocol + "//" + zt.host != i.protocol + "//" + i.host);
                    } catch (e) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), Xt(Bt, h, t, b), p)) return b;
                for (r in ((d = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Wt.test(h.type)),
                (l = h.url.replace(Rt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Pt, "+"))
                    : ((i = h.url.slice(l.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((l += (jt.test(l) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((l = l.replace(Mt, "$1")), (i = (jt.test(l) ? "&" : "?") + "_=" + Dt.guid++ + i)),
                      (h.url = l + i)),
                h.ifModified && (E.lastModified[l] && b.setRequestHeader("If-Modified-Since", E.lastModified[l]), E.etag[l] && b.setRequestHeader("If-None-Match", E.etag[l])),
                ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && b.setRequestHeader("Content-Type", h.contentType),
                b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : h.accepts["*"]),
                h.headers))
                    b.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p)) return b.abort();
                if (((s = "abort"), v.add(h.complete), b.done(h.success), b.fail(h.error), (u = Xt($t, h, t, b)))) {
                    if (((b.readyState = 1), d && y.trigger("ajaxSend", [b, h]), p)) return b;
                    h.async &&
                        0 < h.timeout &&
                        (f = T.setTimeout(function () {
                            b.abort("timeout");
                        }, h.timeout));
                    try {
                        (p = !1), u.send(o, w);
                    } catch (e) {
                        if (p) throw e;
                        w(-1, e);
                    }
                } else w(-1, "No Transport");
                function w(e, t, n, r) {
                    var i,
                        o,
                        a,
                        s = t;
                    p ||
                        ((p = !0),
                        f && T.clearTimeout(f),
                        (u = void 0),
                        (c = r || ""),
                        (b.readyState = 0 < e ? 4 : 0),
                        (r = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (a = (function (e, t, n) {
                                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (r)
                                    for (i in s)
                                        if (s[i] && s[i].test(r)) {
                                            u.unshift(i);
                                            break;
                                        }
                                if (u[0] in n) o = u[0];
                                else {
                                    for (i in n) {
                                        if (!u[0] || e.converters[i + " " + u[0]]) {
                                            o = i;
                                            break;
                                        }
                                        a = a || i;
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== u[0] && u.unshift(o), n[o];
                            })(h, b, n)),
                        !r && -1 < E.inArray("script", h.dataTypes) && (h.converters["text script"] = function () {}),
                        (a = (function (e, t, n, r) {
                            var i,
                                o,
                                a,
                                s,
                                u,
                                l = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                                    if ("*" === o) o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(h, a, b, r)),
                        r
                            ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (E.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (E.etag[l] = n)),
                              204 === e || "HEAD" === h.type ? (s = "nocontent") : 304 === e ? (s = "notmodified") : ((s = a.state), (i = a.data), (r = !(o = a.error))))
                            : ((o = s), (!e && s) || ((s = "error"), e < 0 && (e = 0))),
                        (b.status = e),
                        (b.statusText = (t || s) + ""),
                        r ? m.resolveWith(g, [i, s, b]) : m.rejectWith(g, [b, s, o]),
                        b.statusCode(x),
                        (x = void 0),
                        d && y.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? i : o]),
                        v.fireWith(g, [b, s]),
                        d && (y.trigger("ajaxComplete", [b, h]), --E.active || E.event.trigger("ajaxStop")));
                }
                return b;
            },
            getJSON: function (e, t, n) {
                return E.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
            },
        }),
        E.each(["get", "post"], function (e, i) {
            E[i] = function (e, t, n, r) {
                return v(t) && ((r = r || n), (n = t), (t = void 0)), E.ajax(E.extend({ url: e, type: i, dataType: r, data: t, success: n }, E.isPlainObject(e) && e));
            };
        }),
        E.ajaxPrefilter(function (e) {
            for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (E._evalUrl = function (e, t, n) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    E.globalEval(e, t, n);
                },
            });
        }),
        E.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (v(e) && (e = e.call(this[0])),
                        (e = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return v(n)
                    ? this.each(function (e) {
                          E(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = E(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = v(t);
                return this.each(function (e) {
                    E(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            E(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (E.expr.pseudos.hidden = function (e) {
            return !E.expr.pseudos.visible(e);
        }),
        (E.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (E.ajaxSettings.xhr = function () {
            try {
                return new T.XMLHttpRequest();
            } catch (e) {}
        });
    var Gt = { 0: 200, 1223: 204 },
        Yt = E.ajaxSettings.xhr();
    (y.cors = !!Yt && "withCredentials" in Yt),
        (y.ajax = Yt = !!Yt),
        E.ajaxTransport(function (i) {
            var o, a;
            if (y.cors || (Yt && !i.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            r = i.xhr();
                        if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                        for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) r.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                                    "abort" === e
                                        ? r.abort()
                                        : "error" === e
                                        ? "number" != typeof r.status
                                            ? t(0, "error")
                                            : t(r.status, r.statusText)
                                        : t(Gt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
                            };
                        }),
                            (r.onload = o()),
                            (a = r.onerror = r.ontimeout = o("error")),
                            void 0 !== r.onabort
                                ? (r.onabort = a)
                                : (r.onreadystatechange = function () {
                                      4 === r.readyState &&
                                          T.setTimeout(function () {
                                              o && a();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            r.send((i.hasContent && i.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        E.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        E.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return E.globalEval(e), e;
                },
            },
        }),
        E.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        E.ajaxTransport("script", function (n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (r = E("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (i = function (e) {
                                    r.remove(), (i = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            C.head.appendChild(r[0]);
                    },
                    abort: function () {
                        i && i();
                    },
                };
        });
    var Qt = [],
        Jt = /(=)\?(?=&|$)|\?\?/,
        Kt =
            (E.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Qt.pop() || E.expando + "_" + Dt.guid++;
                    return (this[e] = !0), e;
                },
            }),
            E.ajaxPrefilter("json jsonp", function (e, t, n) {
                var r,
                    i,
                    o,
                    a = !1 !== e.jsonp && (Jt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Jt.test(e.data) && "data");
                if (a || "jsonp" === e.dataTypes[0])
                    return (
                        (r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                        a ? (e[a] = e[a].replace(Jt, "$1" + r)) : !1 !== e.jsonp && (e.url += (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                        (e.converters["script json"] = function () {
                            return o || E.error(r + " was not called"), o[0];
                        }),
                        (e.dataTypes[0] = "json"),
                        (i = T[r]),
                        (T[r] = function () {
                            o = arguments;
                        }),
                        n.always(function () {
                            void 0 === i ? E(T).removeProp(r) : (T[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(r)), o && v(i) && i(o[0]), (o = i = void 0);
                        }),
                        "script"
                    );
            }),
            (y.createHTMLDocument = (((e = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length)),
            (E.parseHTML = function (e, t, n) {
                return "string" != typeof e
                    ? []
                    : ("boolean" == typeof t && ((n = t), (t = !1)),
                      t || (y.createHTMLDocument ? (((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href), t.head.appendChild(r)) : (t = C)),
                      (r = !n && []),
                      (n = J.exec(e)) ? [t.createElement(n[1])] : ((n = ke([e], t, r)), r && r.length && E(r).remove(), E.merge([], n.childNodes)));
                var r;
            }),
            (E.fn.load = function (e, t, n) {
                var r,
                    i,
                    o,
                    a = this,
                    s = e.indexOf(" ");
                return (
                    -1 < s && ((r = O(e.slice(s))), (e = e.slice(0, s))),
                    v(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                    0 < a.length &&
                        E.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                            .done(function (e) {
                                (o = arguments), a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
                            })
                            .always(
                                n &&
                                    function (e, t) {
                                        a.each(function () {
                                            n.apply(this, o || [e.responseText, t, e]);
                                        });
                                    }
                            ),
                    this
                );
            }),
            (E.expr.pseudos.animated = function (t) {
                return E.grep(E.timers, function (e) {
                    return t === e.elem;
                }).length;
            }),
            (E.offset = {
                setOffset: function (e, t, n) {
                    var r,
                        i,
                        o,
                        a,
                        s = E.css(e, "position"),
                        u = E(e),
                        l = {};
                    "static" === s && (e.style.position = "relative"),
                        (o = u.offset()),
                        (r = E.css(e, "top")),
                        (a = E.css(e, "left")),
                        (s = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? ((i = (s = u.position()).top), s.left) : ((i = parseFloat(r) || 0), parseFloat(a) || 0)),
                        null != (t = v(t) ? t.call(e, n, E.extend({}, o)) : t).top && (l.top = t.top - o.top + i),
                        null != t.left && (l.left = t.left - o.left + s),
                        "using" in t ? t.using.call(e, l) : ("number" == typeof l.top && (l.top += "px"), "number" == typeof l.left && (l.left += "px"), u.css(l));
                },
            }),
            E.fn.extend({
                offset: function (t) {
                    if (arguments.length)
                        return void 0 === t
                            ? this
                            : this.each(function (e) {
                                  E.offset.setOffset(this, t, e);
                              });
                    var e,
                        n = this[0];
                    return n ? (n.getClientRects().length ? ((e = n.getBoundingClientRect()), (n = n.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                },
                position: function () {
                    if (this[0]) {
                        var e,
                            t,
                            n,
                            r = this[0],
                            i = { top: 0, left: 0 };
                        if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                        else {
                            for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); ) e = e.parentNode;
                            e && e !== r && 1 === e.nodeType && (((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0)), (i.left += E.css(e, "borderLeftWidth", !0)));
                        }
                        return { top: t.top - i.top - E.css(r, "marginTop", !0), left: t.left - i.left - E.css(r, "marginLeft", !0) };
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && "static" === E.css(e, "position"); ) e = e.offsetParent;
                        return e || w;
                    });
                },
            }),
            E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
                var o = "pageYOffset" === i;
                E.fn[t] = function (e) {
                    return f(
                        this,
                        function (e, t, n) {
                            var r;
                            if ((g(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
                            r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }),
            E.each(["top", "left"], function (e, n) {
                E.cssHooks[n] = Ze(y.pixelPosition, function (e, t) {
                    if (t) return (t = Ke(e, n)), Qe.test(t) ? E(e).position()[n] + "px" : t;
                });
            }),
            E.each({ Height: "height", Width: "width" }, function (a, s) {
                E.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
                    E.fn[o] = function (e, t) {
                        var n = arguments.length && (r || "boolean" != typeof e),
                            i = r || (!0 === e || !0 === t ? "margin" : "border");
                        return f(
                            this,
                            function (e, t, n) {
                                var r;
                                return g(e)
                                    ? 0 === o.indexOf("outer")
                                        ? e["inner" + a]
                                        : e.document.documentElement["client" + a]
                                    : 9 === e.nodeType
                                    ? ((r = e.documentElement), Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a]))
                                    : void 0 === n
                                    ? E.css(e, t, i)
                                    : E.style(e, t, n, i);
                            },
                            s,
                            n ? e : void 0,
                            n
                        );
                    };
                });
            }),
            E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                E.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }),
            E.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                },
                unbind: function (e, t) {
                    return this.off(e, null, t);
                },
                delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r);
                },
                undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                },
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                },
            }),
            E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
                E.fn[n] = function (e, t) {
                    return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
                };
            }),
            /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
        Zt =
            ((E.proxy = function (e, t) {
                var n, r;
                if (("string" == typeof t && ((r = e[t]), (t = e), (e = r)), v(e)))
                    return (
                        (n = s.call(arguments, 2)),
                        ((r = function () {
                            return e.apply(t || this, n.concat(s.call(arguments)));
                        }).guid = e.guid = e.guid || E.guid++),
                        r
                    );
            }),
            (E.holdReady = function (e) {
                e ? E.readyWait++ : E.ready(!0);
            }),
            (E.isArray = Array.isArray),
            (E.parseJSON = JSON.parse),
            (E.nodeName = u),
            (E.isFunction = v),
            (E.isWindow = g),
            (E.camelCase = x),
            (E.type = h),
            (E.now = Date.now),
            (E.isNumeric = function (e) {
                var t = E.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
            }),
            (E.trim = function (e) {
                return null == e ? "" : (e + "").replace(Kt, "");
            }),
            "function" == typeof define &&
                define.amd &&
                define("jquery", [], function () {
                    return E;
                }),
            T.jQuery),
        en = T.$;
    return (
        (E.noConflict = function (e) {
            return T.$ === E && (T.$ = en), e && T.jQuery === E && (T.jQuery = Zt), E;
        }),
        void 0 === R && (T.jQuery = T.$ = E),
        E
    );
});
!(function r(n, s, t) {
    function a(o, e) {
        if (!s[o]) {
            if (!n[o]) {
                var i = "function" == typeof require && require;
                if (!e && i) return i(o, !0);
                if (d) return d(o, !0);
                e = new Error("Cannot find module '" + o + "'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            }
            i = s[o] = { exports: {} };
            n[o][0].call(
                i.exports,
                function (e) {
                    var i = n[o][1][e];
                    return a(i || e);
                },
                i,
                i.exports,
                r,
                n,
                s,
                t
            );
        }
        return s[o].exports;
    }
    for (var d = "function" == typeof require && require, e = 0; e < t.length; e++) a(t[e]);
    return a;
})(
    {
        1: [
            function (e, i, o) {
                !(function (e) {
                    void 0 !== i && i.exports ? (i.exports = e()) : "function" == typeof define && define.amd ? define(e) : (this.bowser = e());
                })(function () {
                    function e(i) {
                        function e(e) {
                            e = i.match(e);
                            return (e && 1 < e.length && e[1]) || "";
                        }
                        var o,
                            r = e(/(ipod|iphone|ipad)/i).toLowerCase(),
                            n = !/like android/i.test(i) && /android/i.test(i),
                            s = /CrOS/.test(i),
                            t = e(/edge\/(\d+(\.\d+)?)/i),
                            a = e(/version\/(\d+(\.\d+)?)/i),
                            d = /tablet/i.test(i),
                            m = !d && /[^-]mobi/i.test(i),
                            t =
                                (/opera|opr/i.test(i)
                                    ? (o = { name: "Opera", opera: f, version: a || e(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i) })
                                    : /yabrowser/i.test(i)
                                    ? (o = { name: "Yandex Browser", yandexbrowser: f, version: a || e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i) })
                                    : /windows phone/i.test(i)
                                    ? ((o = { name: "Windows Phone", windowsphone: f }), t ? ((o.msedge = f), (o.version = t)) : ((o.msie = f), (o.version = e(/iemobile\/(\d+(\.\d+)?)/i))))
                                    : /msie|trident/i.test(i)
                                    ? (o = { name: "Internet Explorer", msie: f, version: e(/(?:msie |rv:)(\d+(\.\d+)?)/i) })
                                    : s
                                    ? (o = { name: "Chrome", chromeBook: f, chrome: f, version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) })
                                    : /chrome.+? edge/i.test(i)
                                    ? (o = { name: "Microsoft Edge", msedge: f, version: t })
                                    : /chrome|crios|crmo/i.test(i)
                                    ? (o = { name: "Chrome", chrome: f, version: e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) })
                                    : r
                                    ? ((o = { name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod" }), a && (o.version = a))
                                    : /sailfish/i.test(i)
                                    ? (o = { name: "Sailfish", sailfish: f, version: e(/sailfish\s?browser\/(\d+(\.\d+)?)/i) })
                                    : /seamonkey\//i.test(i)
                                    ? (o = { name: "SeaMonkey", seamonkey: f, version: e(/seamonkey\/(\d+(\.\d+)?)/i) })
                                    : /firefox|iceweasel/i.test(i)
                                    ? ((o = { name: "Firefox", firefox: f, version: e(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i) }), /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i) && (o.firefoxos = f))
                                    : /silk/i.test(i)
                                    ? (o = { name: "Amazon Silk", silk: f, version: e(/silk\/(\d+(\.\d+)?)/i) })
                                    : n
                                    ? (o = { name: "Android", version: a })
                                    : /phantom/i.test(i)
                                    ? (o = { name: "PhantomJS", phantom: f, version: e(/phantomjs\/(\d+(\.\d+)?)/i) })
                                    : /blackberry|\bbb\d+/i.test(i) || /rim\stablet/i.test(i)
                                    ? (o = { name: "BlackBerry", blackberry: f, version: a || e(/blackberry[\d]+\/(\d+(\.\d+)?)/i) })
                                    : /(web|hpw)os/i.test(i)
                                    ? ((o = { name: "WebOS", webos: f, version: a || e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i) }), /touchpad\//i.test(i) && (o.touchpad = f))
                                    : (o = /bada/i.test(i)
                                          ? { name: "Bada", bada: f, version: e(/dolfin\/(\d+(\.\d+)?)/i) }
                                          : /tizen/i.test(i)
                                          ? { name: "Tizen", tizen: f, version: e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || a }
                                          : /safari/i.test(i)
                                          ? { name: "Safari", safari: f, version: a }
                                          : { name: e(/^(.*)\/(.*) /), version: ((s = /^(.*)\/(.*) /), ((s = i.match(s)) && 1 < s.length && s[2]) || "") }),
                                !o.msedge && /(apple)?webkit/i.test(i)
                                    ? ((o.name = o.name || "Webkit"), (o.webkit = f), !o.version && a && (o.version = a))
                                    : !o.opera && /gecko\//i.test(i) && ((o.name = o.name || "Gecko"), (o.gecko = f), (o.version = o.version || e(/gecko\/(\d+(\.\d+)?)/i))),
                                o.msedge || (!n && !o.silk) ? r && ((o[r] = f), (o.ios = f)) : (o.android = f),
                                ""),
                            s =
                                (o.windowsphone
                                    ? (t = e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i))
                                    : r
                                    ? (t = (t = e(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, "."))
                                    : n
                                    ? (t = e(/android[ \/-](\d+(\.\d+)*)/i))
                                    : o.webos
                                    ? (t = e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i))
                                    : o.blackberry
                                    ? (t = e(/rim\stablet\sos\s(\d+(\.\d+)*)/i))
                                    : o.bada
                                    ? (t = e(/bada\/(\d+(\.\d+)*)/i))
                                    : o.tizen && (t = e(/tizen[\/\s](\d+(\.\d+)*)/i)),
                                t && (o.osversion = t),
                                t.split(".")[0]);
                        return (
                            d || "ipad" == r || (n && (3 == s || (4 == s && !m))) || o.silk ? (o.tablet = f) : (m || "iphone" == r || "ipod" == r || n || o.blackberry || o.webos || o.bada) && (o.mobile = f),
                            o.msedge ||
                            (o.msie && 10 <= o.version) ||
                            (o.yandexbrowser && 15 <= o.version) ||
                            (o.chrome && 20 <= o.version) ||
                            (o.firefox && 20 <= o.version) ||
                            (o.safari && 6 <= o.version) ||
                            (o.opera && 10 <= o.version) ||
                            (o.ios && o.osversion && 6 <= o.osversion.split(".")[0]) ||
                            (o.blackberry && 10.1 <= o.version)
                                ? (o.a = f)
                                : (o.msie && o.version < 10) ||
                                  (o.chrome && o.version < 20) ||
                                  (o.firefox && o.version < 20) ||
                                  (o.safari && o.version < 6) ||
                                  (o.opera && o.version < 10) ||
                                  (o.ios && o.osversion && o.osversion.split(".")[0] < 6)
                                ? (o.c = f)
                                : (o.x = f),
                            o
                        );
                    }
                    var f = !0,
                        r = e("undefined" != typeof navigator ? navigator.userAgent : "");
                    return (
                        (r.test = function (e) {
                            for (var i = 0; i < e.length; ++i) {
                                var o = e[i];
                                if ("string" == typeof o && o in r) return !0;
                            }
                            return !1;
                        }),
                        (r._detect = e),
                        r
                    );
                });
            },
            {},
        ],
        2: [
            function (e, i, o) {
                var r = e("bowser"),
                    n = document.queryCommandSupported;
                document.queryCommandSupported = function (e) {
                    if ("copy" === e || "cut" === e) {
                        if (r.chrome) return 43 <= r.version;
                        if (r.firefox) return 41 <= r.version;
                    }
                    return n.apply(this, arguments);
                };
            },
            { bowser: 1 },
        ],
    },
    {},
    [2]
);
!(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && "object" == typeof module.exports ? t(require("jquery")) : t(jQuery);
})(function (l) {
    l.timeago = function (t) {
        return t instanceof Date ? o(t) : o("string" == typeof t ? l.timeago.parse(t) : "number" == typeof t ? new Date(t) : l.timeago.datetime(t));
    };
    var i = l.timeago,
        a =
            (l.extend(l.timeago, {
                settings: {
                    refreshMillis: 6e4,
                    allowPast: !0,
                    allowFuture: !1,
                    localeTitle: !1,
                    cutoff: 0,
                    autoDispose: !0,
                    strings: {
                        prefixAgo: null,
                        prefixFromNow: null,
                        suffixAgo: "ago",
                        suffixFromNow: "from now",
                        inPast: "any moment now",
                        seconds: "less than a minute",
                        minute: "about a minute",
                        minutes: "%d minutes",
                        hour: "about an hour",
                        hours: "about %d hours",
                        day: "a day",
                        days: "%d days",
                        month: "about a month",
                        months: "%d months",
                        year: "about a year",
                        years: "%d years",
                        wordSeparator: " ",
                        numbers: [],
                    },
                },
                inWords: function (i) {
                    if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
                    var a = this.settings.strings,
                        t = a.prefixAgo,
                        e = a.suffixAgo;
                    if ((this.settings.allowFuture && i < 0 && ((t = a.prefixFromNow), (e = a.suffixFromNow)), !this.settings.allowPast && 0 <= i)) return this.settings.strings.inPast;
                    var n = Math.abs(i) / 1e3,
                        o = n / 60,
                        r = o / 60,
                        s = r / 24,
                        u = s / 365;
                    function m(t, e) {
                        (t = l.isFunction(t) ? t(e, i) : t), (e = (a.numbers && a.numbers[e]) || e);
                        return t.replace(/%d/i, e);
                    }
                    (n =
                        (n < 45 && m(a.seconds, Math.round(n))) ||
                        (n < 90 && m(a.minute, 1)) ||
                        (o < 45 && m(a.minutes, Math.round(o))) ||
                        (o < 90 && m(a.hour, 1)) ||
                        (r < 24 && m(a.hours, Math.round(r))) ||
                        (r < 42 && m(a.day, 1)) ||
                        (s < 30 && m(a.days, Math.round(s))) ||
                        (s < 45 && m(a.month, 1)) ||
                        (s < 365 && m(a.months, Math.round(s / 30))) ||
                        (u < 1.5 && m(a.year, 1)) ||
                        m(a.years, Math.round(u))),
                        (o = a.wordSeparator || "");
                    return void 0 === a.wordSeparator && (o = " "), l.trim([t, n, e].join(o));
                },
                parse: function (t) {
                    t = l.trim(t);
                    return (
                        (t = (t = (t = (t = (t = t.replace(/\.\d+/, "")).replace(/-/, "/").replace(/-/, "/")).replace(/T/, " ").replace(/Z/, " UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2")).replace(/([\+\-]\d\d)$/, " $100")), new Date(t)
                    );
                },
                datetime: function (t) {
                    t = i.isTime(t) ? l(t).attr("datetime") : l(t).attr("title");
                    return i.parse(t);
                },
                isTime: function (t) {
                    return "time" === l(t).get(0).tagName.toLowerCase();
                },
            }),
            {
                init: function () {
                    a.dispose.call(this);
                    var t = l.proxy(n, this),
                        e = (t(), i.settings);
                    0 < e.refreshMillis && (this._timeagoInterval = setInterval(t, e.refreshMillis));
                },
                update: function (t) {
                    t = t instanceof Date ? t : i.parse(t);
                    l(this).data("timeago", { datetime: t }), i.settings.localeTitle && l(this).attr("title", t.toLocaleString()), n.apply(this);
                },
                updateFromDOM: function () {
                    l(this).data("timeago", { datetime: i.parse(i.isTime(this) ? l(this).attr("datetime") : l(this).attr("title")) }), n.apply(this);
                },
                dispose: function () {
                    this._timeagoInterval && (window.clearInterval(this._timeagoInterval), (this._timeagoInterval = null));
                },
            });
    function n() {
        var t = i.settings;
        if (t.autoDispose && !l.contains(document.documentElement, this)) return l(this).timeago("dispose"), this;
        var e = (function (t) {
            {
                var e;
                (t = l(t)).data("timeago") ||
                    (t.data("timeago", { datetime: i.datetime(t) }),
                    (e = l.trim(t.text())),
                    i.settings.localeTitle ? t.attr("title", t.data("timeago").datetime.toLocaleString()) : !(0 < e.length) || (i.isTime(t) && t.attr("title")) || t.attr("title", e));
            }
            return t.data("timeago");
        })(this);
        return isNaN(e.datetime) || (0 === t.cutoff || Math.abs(r(e.datetime)) < t.cutoff ? l(this).text(o(e.datetime)) : 0 < l(this).attr("title").length && l(this).text(l(this).attr("title"))), this;
    }
    function o(t) {
        return i.inWords(r(t));
    }
    function r(t) {
        return new Date().getTime() - t.getTime();
    }
    (l.fn.timeago = function (t, e) {
        var i = t ? a[t] : a.init;
        if (i)
            return (
                this.each(function () {
                    i.call(this, e);
                }),
                this
            );
        throw new Error("Unknown function name '" + t + "' for timeago");
    }),
        document.createElement("abbr"),
        document.createElement("time");
});
!(function () {
    var l = [
            "direction",
            "boxSizing",
            "width",
            "height",
            "overflowX",
            "overflowY",
            "borderTopWidth",
            "borderRightWidth",
            "borderBottomWidth",
            "borderLeftWidth",
            "borderStyle",
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
            "fontStyle",
            "fontVariant",
            "fontWeight",
            "fontStretch",
            "fontSize",
            "fontSizeAdjust",
            "lineHeight",
            "fontFamily",
            "textAlign",
            "textTransform",
            "textIndent",
            "textDecoration",
            "letterSpacing",
            "wordSpacing",
            "tabSize",
            "MozTabSize",
        ],
        p = "undefined" != typeof window,
        h = p && null != window.mozInnerScreenX;
    function e(e, t, o) {
        if (!p) throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
        var o = (o && o.debug) || !1,
            n = (!o || ((n = document.querySelector("#input-textarea-caret-position-mirror-div")) && n.parentNode.removeChild(n)), document.createElement("div")),
            i = ((n.id = "input-textarea-caret-position-mirror-div"), document.body.appendChild(n), n.style),
            r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle,
            d = "INPUT" === e.nodeName,
            a =
                ((i.whiteSpace = "pre-wrap"),
                d || (i.wordWrap = "break-word"),
                (i.position = "absolute"),
                o || (i.visibility = "hidden"),
                l.forEach(function (e) {
                    d && "lineHeight" === e ? (i.lineHeight = r.height) : (i[e] = r[e]);
                }),
                h ? e.scrollHeight > parseInt(r.height) && (i.overflowY = "scroll") : (i.overflow = "hidden"),
                (n.textContent = e.value.substring(0, t)),
                d && (n.textContent = n.textContent.replace(/\s/g, " ")),
                document.createElement("span")),
            e = ((a.textContent = e.value.substring(t) || "."), n.appendChild(a), { top: a.offsetTop + parseInt(r.borderTopWidth), left: a.offsetLeft + parseInt(r.borderLeftWidth), height: parseInt(r.lineHeight) });
        return o ? (a.style.backgroundColor = "#aaa") : document.body.removeChild(n), e;
    }
    "undefined" != typeof module && void 0 !== module.exports ? (module.exports = e) : p && (window.getCaretCoordinates = e);
})();
!(function (e, M) {
    "use strict";
    var I = Math.pow(2, -24),
        i = Math.pow(2, 32),
        w = Math.pow(2, 53);
    var r = {
        encode: function (e) {
            var f,
                a = new ArrayBuffer(256),
                o = new DataView(a),
                s = 0;
            function c(e) {
                for (var r = a.byteLength, t = s + e; r < t; ) r *= 2;
                if (r !== a.byteLength) for (var n = o, i = ((a = new ArrayBuffer(r)), (o = new DataView(a)), (s + 3) >> 2), u = 0; u < i; ++u) o.setUint32(4 * u, n.getUint32(4 * u));
                return (f = e), o;
            }
            function h() {
                s += f;
            }
            function l(e) {
                h(c(1).setUint8(s, e));
            }
            function g(e) {
                for (var r = c(e.length), t = 0; t < e.length; ++t) r.setUint8(s + t, e[t]);
                h();
            }
            function v(e, r) {
                var t, n;
                r < 24
                    ? l((e << 5) | r)
                    : r < 256
                    ? (l((e << 5) | 24), l(r))
                    : r < 65536
                    ? (l((e << 5) | 25), (n = r), h(c(2).setUint16(s, n)))
                    : r < 4294967296
                    ? (l((e << 5) | 26), (n = r), h(c(4).setUint32(s, n)))
                    : (l((e << 5) | 27), (e = ((e = r) - (r = r % i)) / i), (t = c(8)).setUint32(s, e), t.setUint32(s + 4, r), h());
            }
            if (
                (!(function e(r) {
                    var t;
                    if (!1 === r) return l(244);
                    if (!0 === r) return l(245);
                    if (null === r) return l(246);
                    if (r === M) return l(247);
                    switch (typeof r) {
                        case "number":
                            if (Math.floor(r) === r) {
                                if (0 <= r && r <= w) return v(0, r);
                                if (-w <= r && r < 0) return v(1, -(r + 1));
                            }
                            return l(251), (t = r), h(c(8).setFloat64(s, t));
                        case "string":
                            for (var n = [], i = 0; i < r.length; ++i) {
                                var u = r.charCodeAt(i);
                                u < 128
                                    ? n.push(u)
                                    : (u < 2048
                                          ? n.push(192 | (u >> 6))
                                          : (u < 55296 ? n.push(224 | (u >> 12)) : ((u = 65536 + ((u = (1023 & u) << 10) | (1023 & r.charCodeAt(++i)))), n.push(240 | (u >> 18)), n.push(128 | ((u >> 12) & 63))),
                                            n.push(128 | ((u >> 6) & 63))),
                                      n.push(128 | (63 & u)));
                            }
                            return v(3, n.length), g(n);
                        default:
                            if (Array.isArray(r)) for (v(4, (f = r.length)), i = 0; i < f; ++i) e(r[i]);
                            else if (r instanceof Uint8Array) v(2, r.length), g(r);
                            else {
                                var f,
                                    a = Object.keys(r);
                                for (v(5, (f = a.length)), i = 0; i < f; ++i) {
                                    var o = a[i];
                                    e(o), e(r[o]);
                                }
                            }
                    }
                })(e),
                "slice" in a)
            )
                return a.slice(0, s);
            for (var e = new ArrayBuffer(s), r = new DataView(e), t = 0; t < s; ++t) r.setUint8(t, o.getUint8(t));
            return e;
        },
        decode: function (r, p, d) {
            var y = new DataView(r),
                U = 0;
            function A(e, r) {
                return (U += r), e;
            }
            function b(e) {
                return A(new Uint8Array(r, U, e), e);
            }
            function m() {
                return A(y.getUint8(U), 1);
            }
            function B() {
                return A(y.getUint16(U), 2);
            }
            function t() {
                return A(y.getUint32(U), 4);
            }
            function C() {
                return 255 === y.getUint8(U) && ((U += 1), 1);
            }
            function D(e) {
                if (e < 24) return e;
                if (24 === e) return m();
                if (25 === e) return B();
                if (26 === e) return t();
                if (27 === e) return t() * i + t();
                if (31 === e) return -1;
                throw "Invalid length encoding";
            }
            function V(e) {
                var r = m();
                if (255 === r) return -1;
                var t = D(31 & r);
                if (t < 0 || r >> 5 !== e) throw "Invalid indefinite length element";
                return t;
            }
            function F(e, r) {
                for (var t = 0; t < r; ++t) {
                    var n = m();
                    128 & n &&
                        (n < 224
                            ? ((n = ((31 & n) << 6) | (63 & m())), --r)
                            : n < 240
                            ? ((n = ((15 & n) << 12) | ((63 & m()) << 6) | (63 & m())), (r -= 2))
                            : ((n = ((15 & n) << 18) | ((63 & m()) << 12) | ((63 & m()) << 6) | (63 & m())), (r -= 3))),
                        n < 65536 ? e.push(n) : ((n -= 65536), e.push(55296 | (n >> 10)), e.push(56320 | (1023 & n)));
                }
            }
            "function" != typeof p &&
                (p = function (e) {
                    return e;
                }),
                "function" != typeof d &&
                    (d = function () {
                        return M;
                    });
            var e = (function e() {
                var r,
                    t,
                    n = m(),
                    i = n >> 5,
                    n = 31 & n;
                if (7 == i)
                    switch (n) {
                        case 25:
                            var u = new ArrayBuffer(4),
                                u = new DataView(u),
                                f = B(),
                                a = 31744 & f,
                                o = 1023 & f;
                            if (31744 === a) a = 261120;
                            else if (0 !== a) a += 114688;
                            else if (0 != o) return o * I;
                            return u.setUint32(0, ((32768 & f) << 16) | (a << 13) | (o << 13)), u.getFloat32(0);
                        case 26:
                            return A(y.getFloat32(U), 4);
                        case 27:
                            return A(y.getFloat64(U), 8);
                    }
                if ((r = D(n)) < 0 && (i < 2 || 6 < i)) throw "Invalid length";
                switch (i) {
                    case 0:
                        return r;
                    case 1:
                        return -1 - r;
                    case 2:
                        if (r < 0) {
                            for (var s = [], c = 0; 0 <= (r = V(i)); ) (c += r), s.push(b(r));
                            for (var h = new Uint8Array(c), l = 0, g = 0; g < s.length; ++g) h.set(s[g], l), (l += s[g].length);
                            return h;
                        }
                        return b(r);
                    case 3:
                        var v = [];
                        if (r < 0) for (; 0 <= (r = V(i)); ) F(v, r);
                        else F(v, r);
                        return String.fromCharCode.apply(null, v);
                    case 4:
                        if (r < 0) for (t = []; !C(); ) t.push(e());
                        else for (t = new Array(r), g = 0; g < r; ++g) t[g] = e();
                        return t;
                    case 5:
                        var w = {};
                        for (g = 0; g < r || (r < 0 && !C()); ++g) w[e()] = e();
                        return w;
                    case 6:
                        return p(e(), r);
                    case 7:
                        switch (r) {
                            case 20:
                                return !1;
                            case 21:
                                return !0;
                            case 22:
                                return null;
                            case 23:
                                return M;
                            default:
                                return d(r);
                        }
                }
            })();
            if (U !== r.byteLength) throw "Remaining bytes";
            return e;
        },
    };
    "function" == typeof define && define.amd ? define("cbor/cbor", r) : "undefined" != typeof module && module.exports ? (module.exports = r) : e.CBOR || (e.CBOR = r);
})(this);
var GOVUK = (function (e) {
    "use strict";
    function i(e, t) {
        if (window.NodeList.prototype.forEach) return e.forEach(t);
        for (var n = 0; n < e.length; n++) t.call(window, e[n], n, e);
    }
    !function (e) {
        var a, s, l, c;
        ("defineProperty" in Object &&
            (function () {
                try {
                    return Object.defineProperty({}, "test", { value: 42 }), !0;
                } catch (e) {
                    return !1;
                }
            })()) ||
            ((a = Object.defineProperty),
            (s = Object.prototype.hasOwnProperty("__defineGetter__")),
            (l = "Getters & setters cannot be defined on this javascript engine"),
            (c = "A property cannot both have accessors and be writable or have a value"),
            (Object.defineProperty = function (e, t, n) {
                if (a && (e === window || e === document || e === Element.prototype || e instanceof Element)) return a(e, t, n);
                if (null === e || !(e instanceof Object || "object" == typeof e)) throw new TypeError("Object.defineProperty called on non-object");
                if (!(n instanceof Object)) throw new TypeError("Property description must be an object");
                var t = String(t),
                    o = "value" in n || "writable" in n,
                    i = "get" in n && typeof n.get,
                    r = "set" in n && typeof n.set;
                if (i) {
                    if ("function" !== i) throw new TypeError("Getter must be a function");
                    if (!s) throw new TypeError(l);
                    if (o) throw new TypeError(c);
                    Object.__defineGetter__.call(e, t, n.get);
                } else e[t] = n.value;
                if (r) {
                    if ("function" !== r) throw new TypeError("Setter must be a function");
                    if (!s) throw new TypeError(l);
                    if (o) throw new TypeError(c);
                    Object.__defineSetter__.call(e, t, n.set);
                }
                return "value" in n && (e[t] = n.value), e;
            }));
    }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (e) {
            "bind" in Function.prototype ||
                Object.defineProperty(Function.prototype, "bind", {
                    value: function (t) {
                        function e() {}
                        var n = Array,
                            o = Object,
                            i = o.prototype,
                            n = n.prototype,
                            r = i.toString,
                            a = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                            s = Function.prototype.toString,
                            l = n.slice,
                            c = n.concat,
                            u = n.push,
                            i = Math.max,
                            d = this;
                        if (
                            !(function (e) {
                                if ("function" != typeof e) return !1;
                                {
                                    if (!a) return "[object Function]" === (t = r.call(e)) || "[object GeneratorFunction]" === t;
                                    var t = e;
                                    try {
                                        return s.call(t), !0;
                                    } catch (e) {
                                        return !1;
                                    }
                                }
                            })(d)
                        )
                            throw new TypeError("Function.prototype.bind called on incompatible " + d);
                        for (var p, f = l.call(arguments, 1), h = i(0, d.length - f.length), m = [], b = 0; b < h; b++) u.call(m, "$" + b);
                        return (
                            (p = Function(
                                "binder",
                                "return function (" + m.join(",") + "){ return binder.apply(this, arguments); }"
                            )(function () {
                                var e;
                                return this instanceof p ? ((e = d.apply(this, c.call(f, l.call(arguments)))), o(e) === e ? e : this) : d.apply(t, c.call(f, l.call(arguments)));
                            })),
                            d.prototype && ((e.prototype = d.prototype), (p.prototype = new e()), (e.prototype = null)),
                            p
                        );
                    },
                });
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (o) {
            var e, i, r;
            (!("DOMTokenList" in this) || ("classList" in (e = document.createElement("x")) && (e.classList.toggle("x", !1) || e.className))) &&
                (("DOMTokenList" in (e = this) &&
                    e.DOMTokenList &&
                    (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)) ||
                    (e.DOMTokenList = (function () {
                        function n(e, t, n, o) {
                            Object.defineProperty ? Object.defineProperty(e, t, { configurable: !1 === i || !!o, get: n }) : e.__defineGetter__(t, n);
                        }
                        var i = !0;
                        try {
                            n({}, "support");
                        } catch (e) {
                            i = !1;
                        }
                        return function (i, r) {
                            function a() {
                                if (e <= d) for (; e < d; ++e) t(e);
                            }
                            function s() {
                                var e,
                                    t,
                                    n = arguments,
                                    o = /\s+/;
                                if (n.length) for (t = 0; t < n.length; ++t) if (o.test(n[t])) throw (((e = new SyntaxError('String "' + n[t] + '" contains an invalid character')).code = 5), (e.name = "InvalidCharacterError"), e);
                                for ("" === (c = ("object" == typeof i[r] ? "" + i[r].baseVal : "" + i[r]).replace(/^\s+|\s+$/g, "").split(o))[0] && (c = []), u = {}, t = 0; t < c.length; ++t) u[c[t]] = !0;
                                (d = c.length), a();
                            }
                            var l = this,
                                c = [],
                                u = {},
                                d = 0,
                                e = 0,
                                t = function (e) {
                                    n(
                                        l,
                                        e,
                                        function () {
                                            return s(), c[e];
                                        },
                                        !1
                                    );
                                };
                            return (
                                s(),
                                n(l, "length", function () {
                                    return s(), d;
                                }),
                                (l.toLocaleString = l.toString = function () {
                                    return s(), c.join(" ");
                                }),
                                (l.item = function (e) {
                                    return s(), c[e];
                                }),
                                (l.contains = function (e) {
                                    return s(), !!u[e];
                                }),
                                (l.add = function () {
                                    s.apply(l, (e = arguments));
                                    for (var e, t, n = 0, o = e.length; n < o; ++n) u[(t = e[n])] || (c.push(t), (u[t] = !0));
                                    d !== c.length && ((d = c.length >>> 0), "object" == typeof i[r] ? (i[r].baseVal = c.join(" ")) : (i[r] = c.join(" ")), a());
                                }),
                                (l.remove = function () {
                                    s.apply(l, (e = arguments));
                                    for (var e, t = {}, n = 0, o = []; n < e.length; ++n) (t[e[n]] = !0), delete u[e[n]];
                                    for (n = 0; n < c.length; ++n) t[c[n]] || o.push(c[n]);
                                    (d = (c = o).length >>> 0), "object" == typeof i[r] ? (i[r].baseVal = c.join(" ")) : (i[r] = c.join(" ")), a();
                                }),
                                (l.toggle = function (e, t) {
                                    return s.apply(l, [e]), o !== t ? (t ? (l.add(e), !0) : (l.remove(e), !1)) : u[e] ? (l.remove(e), !1) : (l.add(e), !0);
                                }),
                                l
                            );
                        };
                    })()),
                "classList" in (e = document.createElement("span")) &&
                    (e.classList.toggle("x", !1),
                    e.classList.contains("x") &&
                        (e.classList.constructor.prototype.toggle = function (e) {
                            var t,
                                n = arguments[1];
                            return n === o ? ((t = !this.contains(e)), this[t ? "add" : "remove"](e), t) : (this[(n = !!n) ? "add" : "remove"](e), n);
                        })),
                "classList" in (e = document.createElement("span")) &&
                    (e.classList.add("a", "b"),
                    e.classList.contains("b") ||
                        ((i = e.classList.constructor.prototype.add),
                        (e.classList.constructor.prototype.add = function () {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) i.call(this, e[n]);
                        }))),
                "classList" in (e = document.createElement("span")) &&
                    (e.classList.add("a"),
                    e.classList.add("b"),
                    e.classList.remove("a", "b"),
                    e.classList.contains("b") &&
                        ((r = e.classList.constructor.prototype.remove),
                        (e.classList.constructor.prototype.remove = function () {
                            for (var e = arguments, t = arguments.length, n = 0; n < t; n++) r.call(this, e[n]);
                        }))));
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (e) {
            "Document" in this ||
                ("undefined" == typeof WorkerGlobalScope &&
                    "function" != typeof importScripts &&
                    (this.HTMLDocument ? (this.Document = this.HTMLDocument) : ((this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")()), (this.Document.prototype = document))));
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (e) {
            var t, n, s, l, c, u, o, i, r;
            function a() {
                return (
                    r-- || clearTimeout(i), !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState)) && (c(document, !0), i && document.body.prototype && clearTimeout(i), !!document.body.prototype)
                );
            }
            ("Element" in this && "HTMLElement" in this) ||
                (window.Element && !window.HTMLElement
                    ? (window.HTMLElement = window.Element)
                    : ((window.Element = window.HTMLElement = new Function("return function Element() {}")()),
                      (n = (t = document.appendChild(document.createElement("body"))).appendChild(document.createElement("iframe")).contentWindow.document),
                      (s = Element.prototype = n.appendChild(n.createElement("*"))),
                      (l = {}),
                      (c = function (e, t) {
                          var n,
                              o,
                              i,
                              r = e.childNodes || [],
                              a = -1;
                          if (1 === e.nodeType && e.constructor !== Element) for (n in ((e.constructor = Element), l)) (o = l[n]), (e[n] = o);
                          for (; (i = t && r[++a]); ) c(i, t);
                          return e;
                      }),
                      (u = document.getElementsByTagName("*")),
                      (o = document.createElement),
                      (r = 100),
                      s.attachEvent("onpropertychange", function (e) {
                          for (var t, n = e.propertyName, o = !l.hasOwnProperty(n), i = s[n], r = l[n], a = -1; (t = u[++a]); ) 1 !== t.nodeType || (!o && t[n] !== r) || (t[n] = i);
                          l[n] = i;
                      }),
                      (s.constructor = Element),
                      s.hasAttribute ||
                          (s.hasAttribute = function (e) {
                              return null !== this.getAttribute(e);
                          }),
                      a() || ((document.onreadystatechange = a), (i = setInterval(a, 25))),
                      (document.createElement = function (e) {
                          e = o(String(e).toLowerCase());
                          return c(e);
                      }),
                      document.removeChild(t)));
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (e) {
            var t = "document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((t = document.createElement("span")).classList.add("a", "b"), t.classList.contains("b"));
            if (!t) {
                var n = this;
                function u(e, t, n, o) {
                    Object.defineProperty ? Object.defineProperty(e, t, { configurable: !1 === d || !!o, get: n }) : e.__defineGetter__(t, n);
                }
                var d = !0;
                try {
                    u({}, "support");
                } catch (e) {
                    d = !1;
                }
                function p(e, l, c) {
                    u(
                        e.prototype,
                        l,
                        function () {
                            var e,
                                t = this,
                                n = "__defineGetter__DEFINE_PROPERTY" + l;
                            if (t[n]) return e;
                            if (!(t[n] = !0) === d) {
                                for (var o, i = p.mirror || document.createElement("div"), r = i.childNodes, a = r.length, s = 0; s < a; ++s)
                                    if (r[s]._R === t) {
                                        o = r[s];
                                        break;
                                    }
                                (o = o || i.appendChild(document.createElement("div"))), (e = DOMTokenList.call(o, t, c));
                            } else e = new DOMTokenList(t, c);
                            return (
                                u(t, l, function () {
                                    return e;
                                }),
                                delete t[n],
                                e
                            );
                        },
                        !0
                    );
                }
                p(n.Element, "classList", "className"), p(n.HTMLElement, "classList", "className"), p(n.HTMLLinkElement, "relList", "rel"), p(n.HTMLAnchorElement, "relList", "rel"), p(n.HTMLAreaElement, "relList", "rel");
            }
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (e) {
            "Window" in this ||
                ("undefined" == typeof WorkerGlobalScope &&
                    "function" != typeof importScripts &&
                    !(function (e) {
                        e.constructor ? (e.Window = e.constructor) : ((e.Window = e.constructor = new Function("return function Window() {}")()).prototype = this);
                    })(this));
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (r) {
            var e, n;
            function s(e, t) {
                for (var n = -1, o = e.length; ++n < o; ) if (n in e && e[n] === t) return n;
                return -1;
            }
            !(function (e) {
                if (!("Event" in e)) return !1;
                if ("function" == typeof e.Event) return !0;
                try {
                    return new Event("click"), !0;
                } catch (e) {
                    return !1;
                }
            })(this) &&
                ((n = { click: 1, dblclick: 1, keyup: 1, keypress: 1, keydown: 1, mousedown: 1, mouseup: 1, mousemove: 1, mouseover: 1, mouseenter: 1, mouseleave: 1, mouseout: 1, storage: 1, storagecommit: 1, textinput: 1 }),
                "undefined" != typeof document &&
                    "undefined" != typeof window &&
                    ((e = (window.Event && window.Event.prototype) || null),
                    (window.Event = Window.prototype.Event = function (e, t) {
                        if (e)
                            return (
                                "createEvent" in document
                                    ? ((n = document.createEvent("Event")), (o = !(!t || t.bubbles === r) && t.bubbles), (i = !(!t || t.cancelable === r) && t.cancelable), n.initEvent(e, o, i))
                                    : (((n = document.createEventObject()).type = e), (n.bubbles = !(!t || t.bubbles === r) && t.bubbles), (n.cancelable = !(!t || t.cancelable === r) && t.cancelable)),
                                n
                            );
                        var n, o, i;
                        throw new Error("Not enough arguments");
                    }),
                    e && Object.defineProperty(window.Event, "prototype", { configurable: !1, enumerable: !1, writable: !0, value: e }),
                    "createEvent" in document ||
                        ((window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function () {
                            var a = this,
                                e = arguments[0],
                                t = arguments[1];
                            if (a === window && e in n) throw new Error("In IE8 the event: " + e + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                            a._events || (a._events = {}),
                                a._events[e] ||
                                    ((a._events[e] = function (e) {
                                        var t,
                                            n = a._events[e.type].list,
                                            o = n.slice(),
                                            i = -1,
                                            r = o.length;
                                        for (
                                            e.preventDefault = function () {
                                                !1 !== e.cancelable && (e.returnValue = !1);
                                            },
                                                e.stopPropagation = function () {
                                                    e.cancelBubble = !0;
                                                },
                                                e.stopImmediatePropagation = function () {
                                                    (e.cancelBubble = !0), (e.cancelImmediate = !0);
                                                },
                                                e.currentTarget = a,
                                                e.relatedTarget = e.fromElement || null,
                                                e.target = e.target || e.srcElement || a,
                                                e.timeStamp = new Date().getTime(),
                                                e.clientX && ((e.pageX = e.clientX + document.documentElement.scrollLeft), (e.pageY = e.clientY + document.documentElement.scrollTop));
                                            ++i < r && !e.cancelImmediate;

                                        )
                                            i in o && -1 !== s(n, (t = o[i])) && "function" == typeof t && t.call(a, e);
                                    }),
                                    (a._events[e].list = []),
                                    a.attachEvent && a.attachEvent("on" + e, a._events[e])),
                                a._events[e].list.push(t);
                        }),
                        (window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function () {
                            var e,
                                t = this,
                                n = arguments[0];
                            t._events &&
                                t._events[n] &&
                                t._events[n].list &&
                                -1 !== (e = s(t._events[n].list, arguments[1])) &&
                                (t._events[n].list.splice(e, 1), t._events[n].list.length || (t.detachEvent && t.detachEvent("on" + n, t._events[n]), delete t._events[n]));
                        }),
                        (window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function (t) {
                            if (!arguments.length) throw new Error("Not enough arguments");
                            if (!t || "string" != typeof t.type) throw new Error("DOM Events Exception 0");
                            var n,
                                o = this,
                                i = t.type;
                            try {
                                t.bubbles ||
                                    ((t.cancelBubble = !0),
                                    (n = function (e) {
                                        (e.cancelBubble = !0), (o || window).detachEvent("on" + i, n);
                                    }),
                                    this.attachEvent("on" + i, n)),
                                    this.fireEvent("on" + i, t);
                            } catch (e) {
                                for (
                                    t.target = o;
                                    "_events" in (t.currentTarget = o) && "function" == typeof o._events[i] && o._events[i].call(o, t),
                                        "function" == typeof o["on" + i] && o["on" + i].call(o, t),
                                        (o = 9 === o.nodeType ? o.parentWindow : o.parentNode) && !t.cancelBubble;

                                );
                            }
                            return !0;
                        }),
                        document.attachEvent("onreadystatechange", function () {
                            "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: !0 }));
                        }))));
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {});
    function n(e) {
        (this.$module = e), (this.debounceFormSubmitTimer = null);
    }
    (n.prototype.handleKeyDown = function (e) {
        var t = e.target;
        "button" === t.getAttribute("role") && 32 === e.keyCode && (e.preventDefault(), t.click());
    }),
        (n.prototype.debounce = function (e) {
            var t = e.target;
            if ("true" === t.getAttribute("data-prevent-double-click"))
                return this.debounceFormSubmitTimer
                    ? (e.preventDefault(), !1)
                    : void (this.debounceFormSubmitTimer = setTimeout(
                          function () {
                              this.debounceFormSubmitTimer = null;
                          }.bind(this),
                          1e3
                      ));
        }),
        (n.prototype.init = function () {
            this.$module.addEventListener("keydown", this.handleKeyDown), this.$module.addEventListener("click", this.debounce);
        });
    function o(e) {
        this.$module = e;
    }
    function r(e) {
        this.$module = e;
    }
    function a(e) {
        (this.$module = e), (this.$menuButton = e && e.querySelector(".govuk-js-header-toggle")), (this.$menu = this.$menuButton && e.querySelector("#" + this.$menuButton.getAttribute("aria-controls")));
    }
    function s(e) {
        (this.$module = e), (this.$inputs = e.querySelectorAll('input[type="radio"]'));
    }
    function l(e) {
        (this.$module = e), (this.$linkedElement = null), (this.linkedElementListener = !1);
    }
    function c(e) {
        (this.$module = e), (this.$tabs = e.querySelectorAll(".govuk-tabs__tab")), (this.keys = { left: 37, right: 39, up: 38, down: 40 }), (this.jsHiddenClass = "govuk-tabs__panel--hidden");
    }
    (o.prototype.init = function () {
        this.$module && "boolean" != typeof this.$module.open && this.polyfillDetails();
    }),
        (o.prototype.polyfillDetails = function () {
            var n,
                e = this.$module,
                t = (this.$summary = e.getElementsByTagName("summary").item(0)),
                o = (this.$content = e.getElementsByTagName("div").item(0));
            t &&
                o &&
                (o.id ||
                    (o.id =
                        "details-content-" +
                        ((n = new Date().getTime()),
                        void 0 !== window.performance && "function" == typeof window.performance.now && (n += window.performance.now()),
                        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                            var t = (n + 16 * Math.random()) % 16 | 0;
                            return (n = Math.floor(n / 16)), ("x" === e ? t : (3 & t) | 8).toString(16);
                        }))),
                e.setAttribute("role", "group"),
                t.setAttribute("role", "button"),
                t.setAttribute("aria-controls", o.id),
                !(t.tabIndex = 0) == (null !== e.getAttribute("open"))
                    ? (t.setAttribute("aria-expanded", "true"), o.setAttribute("aria-hidden", "false"))
                    : (t.setAttribute("aria-expanded", "false"), o.setAttribute("aria-hidden", "true"), (o.style.display = "none")),
                this.polyfillHandleInputs(t, this.polyfillSetAttributes.bind(this)));
        }),
        (o.prototype.polyfillSetAttributes = function () {
            var e = this.$module,
                t = this.$summary,
                n = this.$content,
                o = "true" === t.getAttribute("aria-expanded"),
                i = "true" === n.getAttribute("aria-hidden");
            return (
                t.setAttribute("aria-expanded", o ? "false" : "true"),
                n.setAttribute("aria-hidden", i ? "false" : "true"),
                (n.style.display = o ? "none" : ""),
                null !== e.getAttribute("open") ? e.removeAttribute("open") : e.setAttribute("open", "open"),
                !0
            );
        }),
        (o.prototype.polyfillHandleInputs = function (e, n) {
            e.addEventListener("keypress", function (e) {
                var t = e.target;
                (13 !== e.keyCode && 32 !== e.keyCode) || ("summary" === t.nodeName.toLowerCase() && (e.preventDefault(), t.click ? t.click() : n(e)));
            }),
                e.addEventListener("keyup", function (e) {
                    var t = e.target;
                    32 === e.keyCode && "summary" === t.nodeName.toLowerCase() && e.preventDefault();
                }),
                e.addEventListener("click", n);
        }),
        function (e) {
            ("document" in this && "matches" in document.documentElement) ||
                (Element.prototype.matches =
                    Element.prototype.webkitMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    function (e) {
                        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = 0; t[n] && t[n] !== this; ) ++n;
                        return !!t[n];
                    });
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (e) {
            ("document" in this && "closest" in document.documentElement) ||
                (Element.prototype.closest = function (e) {
                    for (var t = this; t; ) {
                        if (t.matches(e)) return t;
                        t = "SVGElement" in window && t instanceof SVGElement ? t.parentNode : t.parentElement;
                    }
                    return null;
                });
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        (r.prototype.init = function () {
            var e = this.$module;
            e && (this.setFocus(), e.addEventListener("click", this.handleClick.bind(this)));
        }),
        (r.prototype.setFocus = function () {
            var e = this.$module;
            "true" !== e.getAttribute("data-disable-auto-focus") &&
                (e.setAttribute("tabindex", "-1"),
                e.addEventListener("blur", function () {
                    e.removeAttribute("tabindex");
                }),
                e.focus());
        }),
        (r.prototype.handleClick = function (e) {
            var t = e.target;
            this.focusTarget(t) && e.preventDefault();
        }),
        (r.prototype.focusTarget = function (e) {
            if ("A" !== e.tagName || !1 === e.href) return !1;
            (e = this.getFragmentFromUrl(e.href)), (e = document.getElementById(e));
            if (!e) return !1;
            var t = this.getAssociatedLegendOrLabel(e);
            return !!t && (t.scrollIntoView(), e.focus({ preventScroll: !0 }), !0);
        }),
        (r.prototype.getFragmentFromUrl = function (e) {
            return -1 !== e.indexOf("#") && e.split("#").pop();
        }),
        (r.prototype.getAssociatedLegendOrLabel = function (e) {
            var t = e.closest("fieldset");
            if (t) {
                t = t.getElementsByTagName("legend");
                if (t.length) {
                    t = t[0];
                    if ("checkbox" === e.type || "radio" === e.type) return t;
                    var n = t.getBoundingClientRect().top,
                        o = e.getBoundingClientRect();
                    if (o.height && window.innerHeight) if (o.top + o.height - n < window.innerHeight / 2) return t;
                }
            }
            return document.querySelector("label[for='" + e.getAttribute("id") + "']") || e.closest("label");
        }),
        (a.prototype.init = function () {
            this.$module && this.$menuButton && this.$menu && (this.syncState(this.$menu.classList.contains("govuk-header__navigation-list--open")), this.$menuButton.addEventListener("click", this.handleMenuButtonClick.bind(this)));
        }),
        (a.prototype.syncState = function (e) {
            this.$menuButton.classList.toggle("govuk-header__menu-button--open", e), this.$menuButton.setAttribute("aria-expanded", e);
        }),
        (a.prototype.handleMenuButtonClick = function () {
            var e = this.$menu.classList.toggle("govuk-header__navigation-list--open");
            this.syncState(e);
        }),
        (s.prototype.init = function () {
            var e = this.$module;
            i(this.$inputs, function (e) {
                var t = e.getAttribute("data-aria-controls");
                t && document.getElementById(t) && (e.setAttribute("aria-controls", t), e.removeAttribute("data-aria-controls"));
            }),
                "onpageshow" in window ? window.addEventListener("pageshow", this.syncAllConditionalReveals.bind(this)) : window.addEventListener("DOMContentLoaded", this.syncAllConditionalReveals.bind(this)),
                this.syncAllConditionalReveals(),
                e.addEventListener("click", this.handleClick.bind(this));
        }),
        (s.prototype.syncAllConditionalReveals = function () {
            i(this.$inputs, this.syncConditionalRevealWithInputState.bind(this));
        }),
        (s.prototype.syncConditionalRevealWithInputState = function (e) {
            var t,
                n = document.getElementById(e.getAttribute("aria-controls"));
            n && n.classList.contains("govuk-radios__conditional") && ((t = e.checked), e.setAttribute("aria-expanded", t), n.classList.toggle("govuk-radios__conditional--hidden", !t));
        }),
        (s.prototype.handleClick = function (e) {
            var n = e.target;
            "radio" === n.type &&
                i(
                    document.querySelectorAll('input[type="radio"][aria-controls]'),
                    function (e) {
                        var t = e.form === n.form;
                        e.name === n.name && t && this.syncConditionalRevealWithInputState(e);
                    }.bind(this)
                );
        }),
        (l.prototype.init = function () {
            this.$module && ((this.$linkedElement = this.getLinkedElement()), this.$linkedElement && this.$module.addEventListener("click", this.focusLinkedElement.bind(this)));
        }),
        (l.prototype.getLinkedElement = function () {
            var e = this.getFragmentFromUrl();
            return !!e && document.getElementById(e);
        }),
        (l.prototype.focusLinkedElement = function () {
            var e = this.$linkedElement;
            e.getAttribute("tabindex") ||
                (e.setAttribute("tabindex", "-1"),
                e.classList.add("govuk-skip-link-focused-element"),
                this.linkedElementListener || (this.$linkedElement.addEventListener("blur", this.removeFocusProperties.bind(this)), (this.linkedElementListener = !0))),
                e.focus();
        }),
        (l.prototype.removeFocusProperties = function () {
            this.$linkedElement.removeAttribute("tabindex"), this.$linkedElement.classList.remove("govuk-skip-link-focused-element");
        }),
        (l.prototype.getFragmentFromUrl = function () {
            return !!this.$module.hash && this.$module.hash.split("#").pop();
        }),
        function (e) {
            ("document" in this && "nextElementSibling" in document.documentElement) ||
                Object.defineProperty(Element.prototype, "nextElementSibling", {
                    get: function () {
                        for (var e = this.nextSibling; e && 1 !== e.nodeType; ) e = e.nextSibling;
                        return e;
                    },
                });
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        function (e) {
            ("document" in this && "previousElementSibling" in document.documentElement) ||
                Object.defineProperty(Element.prototype, "previousElementSibling", {
                    get: function () {
                        for (var e = this.previousSibling; e && 1 !== e.nodeType; ) e = e.previousSibling;
                        return e;
                    },
                });
        }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof global && global) || {}),
        (c.prototype.init = function () {
            "function" == typeof window.matchMedia ? this.setupResponsiveChecks() : this.setup();
        }),
        (c.prototype.setupResponsiveChecks = function () {
            (this.mql = window.matchMedia("(min-width: 40.0625em)")), this.mql.addListener(this.checkMode.bind(this)), this.checkMode();
        }),
        (c.prototype.checkMode = function () {
            this.mql.matches ? this.setup() : this.teardown();
        }),
        (c.prototype.setup = function () {
            var e = this.$module,
                t = this.$tabs,
                n = e.querySelector(".govuk-tabs__list"),
                o = e.querySelectorAll(".govuk-tabs__list-item");
            t &&
                n &&
                o &&
                (n.setAttribute("role", "tablist"),
                i(o, function (e) {
                    e.setAttribute("role", "presentation");
                }),
                i(
                    t,
                    function (e) {
                        this.setAttributes(e),
                            (e.boundTabClick = this.onTabClick.bind(this)),
                            (e.boundTabKeydown = this.onTabKeydown.bind(this)),
                            e.addEventListener("click", e.boundTabClick, !0),
                            e.addEventListener("keydown", e.boundTabKeydown, !0),
                            this.hideTab(e);
                    }.bind(this)
                ),
                (n = this.getTab(window.location.hash) || this.$tabs[0]),
                this.showTab(n),
                (e.boundOnHashChange = this.onHashChange.bind(this)),
                window.addEventListener("hashchange", e.boundOnHashChange, !0));
        }),
        (c.prototype.teardown = function () {
            var e = this.$module,
                t = this.$tabs,
                n = e.querySelector(".govuk-tabs__list"),
                o = e.querySelectorAll(".govuk-tabs__list-item");
            t &&
                n &&
                o &&
                (n.removeAttribute("role"),
                i(o, function (e) {
                    e.removeAttribute("role", "presentation");
                }),
                i(
                    t,
                    function (e) {
                        e.removeEventListener("click", e.boundTabClick, !0), e.removeEventListener("keydown", e.boundTabKeydown, !0), this.unsetAttributes(e);
                    }.bind(this)
                ),
                window.removeEventListener("hashchange", e.boundOnHashChange, !0));
        }),
        (c.prototype.onHashChange = function (e) {
            var t,
                n = window.location.hash,
                n = this.getTab(n);
            n && (this.changingHash ? (this.changingHash = !1) : ((t = this.getCurrentTab()), this.hideTab(t), this.showTab(n), n.focus()));
        }),
        (c.prototype.hideTab = function (e) {
            this.unhighlightTab(e), this.hidePanel(e);
        }),
        (c.prototype.showTab = function (e) {
            this.highlightTab(e), this.showPanel(e);
        }),
        (c.prototype.getTab = function (e) {
            return this.$module.querySelector('.govuk-tabs__tab[href="' + e + '"]');
        }),
        (c.prototype.setAttributes = function (e) {
            var t = this.getHref(e).slice(1),
                t = (e.setAttribute("id", "tab_" + t), e.setAttribute("role", "tab"), e.setAttribute("aria-controls", t), e.setAttribute("aria-selected", "false"), e.setAttribute("tabindex", "-1"), this.getPanel(e));
            t.setAttribute("role", "tabpanel"), t.setAttribute("aria-labelledby", e.id), t.classList.add(this.jsHiddenClass);
        }),
        (c.prototype.unsetAttributes = function (e) {
            e.removeAttribute("id"), e.removeAttribute("role"), e.removeAttribute("aria-controls"), e.removeAttribute("aria-selected"), e.removeAttribute("tabindex");
            e = this.getPanel(e);
            e.removeAttribute("role"), e.removeAttribute("aria-labelledby"), e.classList.remove(this.jsHiddenClass);
        }),
        (c.prototype.onTabClick = function (e) {
            if (!e.target.classList.contains("govuk-tabs__tab")) return !1;
            e.preventDefault();
            var e = e.target,
                t = this.getCurrentTab();
            this.hideTab(t), this.showTab(e), this.createHistoryEntry(e);
        }),
        (c.prototype.createHistoryEntry = function (e) {
            var t = this.getPanel(e),
                n = t.id;
            (t.id = ""), (this.changingHash = !0), (window.location.hash = this.getHref(e).slice(1)), (t.id = n);
        }),
        (c.prototype.onTabKeydown = function (e) {
            switch (e.keyCode) {
                case this.keys.left:
                case this.keys.up:
                    this.activatePreviousTab(), e.preventDefault();
                    break;
                case this.keys.right:
                case this.keys.down:
                    this.activateNextTab(), e.preventDefault();
            }
        }),
        (c.prototype.activateNextTab = function () {
            var e,
                t = this.getCurrentTab(),
                n = t.parentNode.nextElementSibling;
            (e = n ? n.querySelector(".govuk-tabs__tab") : e) && (this.hideTab(t), this.showTab(e), e.focus(), this.createHistoryEntry(e));
        }),
        (c.prototype.activatePreviousTab = function () {
            var e,
                t = this.getCurrentTab(),
                n = t.parentNode.previousElementSibling;
            (e = n ? n.querySelector(".govuk-tabs__tab") : e) && (this.hideTab(t), this.showTab(e), e.focus(), this.createHistoryEntry(e));
        }),
        (c.prototype.getPanel = function (e) {
            return this.$module.querySelector(this.getHref(e));
        }),
        (c.prototype.showPanel = function (e) {
            this.getPanel(e).classList.remove(this.jsHiddenClass);
        }),
        (c.prototype.hidePanel = function (e) {
            this.getPanel(e).classList.add(this.jsHiddenClass);
        }),
        (c.prototype.unhighlightTab = function (e) {
            e.setAttribute("aria-selected", "false"), e.parentNode.classList.remove("govuk-tabs__list-item--selected"), e.setAttribute("tabindex", "-1");
        }),
        (c.prototype.highlightTab = function (e) {
            e.setAttribute("aria-selected", "true"), e.parentNode.classList.add("govuk-tabs__list-item--selected"), e.setAttribute("tabindex", "0");
        }),
        (c.prototype.getCurrentTab = function () {
            return this.$module.querySelector(".govuk-tabs__list-item--selected .govuk-tabs__tab");
        }),
        (c.prototype.getHref = function (e) {
            e = e.getAttribute("href");
            return e.slice(e.indexOf("#"), e.length);
        });
    var u;
    var h = "http://www.w3.org/1999/xhtml",
        C = "undefined" == typeof document ? void 0 : document,
        d = !!C && "content" in C.createElement("template"),
        p = !!C && C.createRange && "createContextualFragment" in C.createRange();
    function m(e) {
        return (
            (e = e.trim()),
            d
                ? ((t = e), ((n = C.createElement("template")).innerHTML = t), n.content.childNodes[0])
                : p
                ? ((t = e), u || (u = C.createRange()).selectNode(C.body), u.createContextualFragment(t).childNodes[0])
                : ((n = e), ((e = C.createElement("body")).innerHTML = n), e.childNodes[0])
        );
        var t, n;
    }
    function j(e, t) {
        var n,
            o,
            e = e.nodeName,
            t = t.nodeName;
        return e === t || ((n = e.charCodeAt(0)), (o = t.charCodeAt(0)), n <= 90 && 97 <= o ? e === t.toUpperCase() : o <= 90 && 97 <= n && t === e.toUpperCase());
    }
    function f(e, t, n) {
        e[n] !== t[n] && ((e[n] = t[n]), e[n] ? e.setAttribute(n, "") : e.removeAttribute(n));
    }
    var N,
        $ = {
            OPTION: function (e, t) {
                var n,
                    o = e.parentNode;
                o &&
                    "SELECT" === (n = "OPTGROUP" === (n = o.nodeName.toUpperCase()) ? (o = o.parentNode) && o.nodeName.toUpperCase() : n) &&
                    !o.hasAttribute("multiple") &&
                    (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"), e.removeAttribute("selected")), (o.selectedIndex = -1)),
                    f(e, t, "selected");
            },
            INPUT: function (e, t) {
                f(e, t, "checked"), f(e, t, "disabled"), e.value !== t.value && (e.value = t.value), t.hasAttribute("value") || e.removeAttribute("value");
            },
            TEXTAREA: function (e, t) {
                var n,
                    t = t.value,
                    o = (e.value !== t && (e.value = t), e.firstChild);
                o && (n = o.nodeValue) != t && (t || n != e.placeholder) && (o.nodeValue = t);
            },
            SELECT: function (e, t) {
                if (!t.hasAttribute("multiple")) {
                    for (var n, o, i = -1, r = 0, a = e.firstChild; a; )
                        if ("OPTGROUP" === (o = a.nodeName && a.nodeName.toUpperCase())) a = (n = a).firstChild;
                        else {
                            if ("OPTION" === o) {
                                if (a.hasAttribute("selected")) {
                                    i = r;
                                    break;
                                }
                                r++;
                            }
                            !(a = a.nextSibling) && n && ((a = n.nextSibling), (n = null));
                        }
                    e.selectedIndex = i;
                }
            },
        };
    function b() {}
    function y(e) {
        if (e) return (e.getAttribute && e.getAttribute("id")) || e.id;
    }
    function v(e, t) {
        if (window.NodeList.prototype.forEach) return e.forEach(t);
        for (var n = 0; n < e.length; n++) t.call(window, e[n], n, e);
    }
    N = function (e, t) {
        var n,
            o,
            i,
            r,
            a = t.attributes;
        if (11 !== t.nodeType && 11 !== e.nodeType) {
            for (var s = a.length - 1; 0 <= s; s--)
                (o = (n = a[s]).name),
                    (i = n.namespaceURI),
                    (r = n.value),
                    i ? ((o = n.localName || o), e.getAttributeNS(i, o) !== r && ("xmlns" === n.prefix && (o = n.name), e.setAttributeNS(i, o, r))) : e.getAttribute(o) !== r && e.setAttribute(o, r);
            for (var l = e.attributes, c = l.length - 1; 0 <= c; c--) (o = (n = l[c]).name), (i = n.namespaceURI) ? ((o = n.localName || o), t.hasAttributeNS(i, o) || e.removeAttributeNS(i, o)) : t.hasAttribute(o) || e.removeAttribute(o);
        }
    };
    var t = {
        morphdom: function (e, t, n) {
            (n = n || {}), "string" == typeof t && ("#document" === e.nodeName || "HTML" === e.nodeName || "BODY" === e.nodeName ? ((i = t), ((t = C.createElement("html")).innerHTML = i)) : (t = m(t)));
            var g = n.getNodeKey || y,
                w = n.onBeforeNodeAdded || b,
                E = n.onNodeAdded || b,
                T = n.onBeforeElUpdated || b,
                k = n.onElUpdated || b,
                o = n.onBeforeNodeDiscarded || b,
                r = n.onNodeDiscarded || b,
                L = n.onBeforeElChildrenUpdated || b,
                i = !0 === n.childrenOnly,
                A = Object.create(null),
                a = [];
            function S(e) {
                a.push(e);
            }
            function _(e, t, n) {
                !1 !== o(e) &&
                    (t && t.removeChild(e),
                    r(e),
                    (function e(t, n) {
                        if (1 === t.nodeType)
                            for (var o = t.firstChild; o; ) {
                                var i = void 0;
                                n && (i = g(o)) ? S(i) : (r(o), o.firstChild && e(o, n)), (o = o.nextSibling);
                            }
                    })(e, n));
            }
            function x(e, t, n) {
                var o = g(t);
                if ((o && delete A[o], !n)) {
                    if (!1 === T(e, t)) return;
                    if ((N(e, t), k(e), !1 === L(e, t))) return;
                }
                if ("TEXTAREA" !== e.nodeName) {
                    var i,
                        r,
                        a,
                        s,
                        l,
                        c,
                        u = e,
                        o = t,
                        d = o.firstChild,
                        p = u.firstChild;
                    e: for (; d; ) {
                        for (s = d.nextSibling, i = g(d); p; ) {
                            if (((a = p.nextSibling), d.isSameNode && d.isSameNode(p))) {
                                (d = s), (p = a);
                                continue e;
                            }
                            r = g(p);
                            var f = p.nodeType,
                                h = void 0;
                            if (
                                (f === d.nodeType &&
                                    (1 === f
                                        ? (i ? i !== r && (!(l = A[i]) || a === l ? (h = !1) : (u.insertBefore(l, p), r ? S(r) : _(p, u, !0), (p = l))) : r && (h = !1), (h = !1 !== h && j(p, d)) && x(p, d))
                                        : (3 !== f && 8 != f) || ((h = !0), p.nodeValue !== d.nodeValue && (p.nodeValue = d.nodeValue))),
                                h)
                            ) {
                                (d = s), (p = a);
                                continue e;
                            }
                            r ? S(r) : _(p, u, !0), (p = a);
                        }
                        i && (l = A[i]) && j(l, d)
                            ? (u.appendChild(l), x(l, d))
                            : !1 !== (c = w(d)) &&
                              ((d = c ? c : d).actualize && (d = d.actualize(u.ownerDocument || C)),
                              u.appendChild(d),
                              (function e(t) {
                                  E(t);
                                  for (var n = t.firstChild; n; ) {
                                      var o = n.nextSibling,
                                          i = g(n);
                                      (i = i && A[i]) && j(n, i) ? (n.parentNode.replaceChild(i, n), x(i, n)) : e(n), (n = o);
                                  }
                              })(d)),
                            (d = s),
                            (p = a);
                    }
                    for (var m = u, b = p, y = void 0; b; ) {
                        var v = b.nextSibling;
                        (y = g(b)) ? S(y) : _(b, m, !0), (b = v);
                    }
                    n = $[u.nodeName];
                    n && n(u, o);
                } else $.TEXTAREA(e, t);
            }
            !(function e(t) {
                if (1 === t.nodeType || 11 === t.nodeType)
                    for (var n = t.firstChild; n; ) {
                        var o = g(n);
                        o && (A[o] = n), e(n), (n = n.nextSibling);
                    }
            })(e);
            var s,
                l,
                n = e,
                c = n.nodeType,
                u = t.nodeType;
            if (!i)
                if (1 === c)
                    1 === u
                        ? j(e, t) ||
                          (r(e),
                          (n = (function (e, t) {
                              for (var n = e.firstChild; n; ) {
                                  var o = n.nextSibling;
                                  t.appendChild(n), (n = o);
                              }
                              return t;
                          })(e, ((s = t.nodeName), (l = t.namespaceURI) && l !== h ? C.createElementNS(l, s) : C.createElement(s)))))
                        : (n = t);
                else if (3 === c || 8 === c) {
                    if (u === c) return n.nodeValue !== t.nodeValue && (n.nodeValue = t.nodeValue), n;
                    n = t;
                }
            if (n === t) r(e);
            else {
                if (t.isSameNode && t.isSameNode(n)) return;
                if ((x(n, t, i), a))
                    for (var d = 0, p = a.length; d < p; d++) {
                        var f = A[a[d]];
                        f && _(f, f.parentNode, !1);
                    }
            }
            return !i && n !== e && e.parentNode && (n.actualize && (n = n.actualize(e.ownerDocument || C)), e.parentNode.replaceChild(n, e)), n;
        },
    };
    return (
        (e.Frontend = {
            Header: a,
            Details: o,
            Button: n,
            Radios: s,
            ErrorSummary: r,
            SkipLink: l,
            initAll: function (e) {
                new n((e = void 0 !== (e = void 0 !== e ? e : {}).scope ? e.scope : document)).init(),
                    v(e.querySelectorAll('[data-module="govuk-details"]'), function (e) {
                        new o(e).init();
                    }),
                    new a(e.querySelector('[data-module="govuk-header"]')).init(),
                    v(e.querySelectorAll('[data-module="govuk-radios"]'), function (e) {
                        new s(e).init();
                    });
                v((t = e.querySelectorAll('[data-module="govuk-skip-link"]')), function (e) {
                    new l(e).init();
                });
                var t = e.querySelectorAll('[data-module="govuk-tabs"]');
                v(t, function (e) {
                    new c(e).init();
                }),
                    new r(e.querySelector('[data-module="govuk-error-summary"]')).init();
            },
        }),
        (e.vendor = t),
        e
    );
})({});
("use strict");
!(function (t) {
    var i = t.jQuery,
        u = t.GOVUK || {};
    (u.NotifyModules = u.NotifyModules || {}),
        (u.notifyModules = {
            find: function (t) {
                var o = "[data-notify-module]",
                    e = (t = t || i("body")).find(o);
                return (e = t.is(o) ? e.add(t) : e);
            },
            start: function (t) {
                for (var o = this.find(t), e = 0, n = o.length; e < n; e++) {
                    var r = i(o[e]),
                        a = (function (t) {
                            return t.charAt(0).toUpperCase() + t.slice(1);
                        })(
                            (function (t) {
                                return t.replace(/-([a-z])/g, function (t) {
                                    return t.charAt(1).toUpperCase();
                                });
                            })(r.data("notifyModule"))
                        ),
                        d = r.data("module-started");
                    "function" != typeof u.NotifyModules[a] || d || (new u.NotifyModules[a]().start(r), r.data("module-started", !0));
                }
            },
        }),
        (t.GOVUK = u);
})(window);
("use strict");
!(function (t) {
    var u = t.jQuery,
        a = t.GOVUK || {};
    function n() {
        function o() {
            var t = u(this),
                a = d(t);
            a.length && (t.attr("aria-controls", a.attr("id")), t.attr("aria-expanded", "false"), a.attr("aria-hidden", "true"));
        }
        var t = this,
            r = "ShowHideContent",
            i = '[data-target] > input[type="radio"]',
            a = '[data-target] > input[type="checkbox"]';
        function d(t) {
            var a = (a = t.attr("aria-controls")) || t.closest("[data-target]").data("target");
            return u("#" + a);
        }
        function s(t, a) {
            a.hasClass("js-hidden") && (a.removeClass("js-hidden"), a.attr("aria-hidden", "false"), t.attr("aria-controls") && t.attr("aria-expanded", "true"));
        }
        function c(t, a) {
            (a = a || d(t)).hasClass("js-hidden") || (a.addClass("js-hidden"), a.attr("aria-hidden", "true"), t.attr("aria-controls") && t.attr("aria-expanded", "false"));
        }
        function n(t, a) {
            var n = i + '[name="' + t.attr("name") + '"][aria-controls]',
                e = t.closest("form");
            (e.length ? e.find(n) : u(n)).each(function () {
                c(u(this));
            }),
                t.is("[aria-controls]") && s(t, a);
        }
        function e(t, a) {
            (t.is(":checked") ? s : c)(t, a);
        }
        function h(n, t, a, e) {
            n = n || u(document.body);
            function i() {
                var t = u(this);
                e(t, d(t));
            }
            t = u(t);
            t.each(o),
                u.each(a, function (t, a) {
                    n.on("click." + r, a, i);
                }),
                t.is(":checked") && t.filter(":checked").each(i);
        }
        (t.showHideRadioToggledContent = function (t) {
            var a;
            h(
                t,
                i,
                ((a = []),
                u(i).map(function () {
                    var t = u(this).attr("name");
                    return -1 === u.inArray(t, a) ? (a.push(t), 'input[type="radio"][name="' + u(this).attr("name") + '"]') : null;
                })),
                n
            );
        }),
            (t.showHideCheckboxToggledContent = function (t) {
                h(t, a, [a], e);
            }),
            (t.destroy = function (t) {
                (t = t || u(document.body)).off("." + r);
            });
    }
    (n.prototype.init = function (t) {
        this.showHideRadioToggledContent(t), this.showHideCheckboxToggledContent(t);
    }),
        (a.ShowHideContent = n),
        (t.GOVUK = a);
})(window);
("use strict");
function _typeof(o) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (o) {
                  return typeof o;
              }
            : function (o) {
                  return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
              })(o);
}
!(function () {
    window.GOVUK = window.GOVUK || {};
    var i = { analytics: !1 },
        r = { _ga: "analytics", _gid: "analytics" };
    (window.GOVUK.cookie = function (o, n, e) {
        return void 0 !== n ? (!1 === n || null === n ? window.GOVUK.setCookie(o, "", { days: -1 }) : (void 0 === e && (e = { days: 30 }), window.GOVUK.setCookie(o, n, e))) : window.GOVUK.getCookie(o);
    }),
        (window.GOVUK.getConsentCookie = function () {
            var o,
                n = window.GOVUK.cookie("cookies_policy");
            if (!n) return null;
            try {
                o = JSON.parse(n);
            } catch (o) {
                return null;
            }
            return (o = "object" !== _typeof(o) && null !== o ? JSON.parse(o) : o);
        }),
        (window.GOVUK.setConsentCookie = function (o) {
            var n,
                e = (e = window.GOVUK.getConsentCookie()) || JSON.parse(JSON.stringify(i));
            for (n in o)
                if (((e[n] = o[n]), !o[n]))
                    for (var t in r) r[t] === n && (window.GOVUK.cookie(t, null), window.GOVUK.cookie(t) && (document.cookie = t + "=;expires=" + new Date() + ";domain=" + window.location.hostname.replace(/^www\./, ".") + ";path=/"));
            window.GOVUK.setCookie("cookies_policy", JSON.stringify(e), { days: 365 });
        }),
        (window.GOVUK.checkConsentCookieCategory = function (o, n) {
            if (!window.GOVUK.getConsentCookie() && r[o]) return !0;
            o = window.GOVUK.getConsentCookie();
            try {
                return o[n];
            } catch (o) {
                return console.error(o), !1;
            }
        }),
        (window.GOVUK.checkConsentCookie = function (o, n) {
            return "cookies_policy" === o || null === n || !1 === n || (!!r[o] && window.GOVUK.checkConsentCookieCategory(o, r[o]));
        }),
        (window.GOVUK.setCookie = function (o, n, e) {
            window.GOVUK.checkConsentCookie(o, n) &&
                ((o = o + "=" + n + "; path=/; SameSite=Lax"),
                (e = void 0 === e ? {} : e).days && ((n = new Date()).setTime(n.getTime() + 24 * e.days * 60 * 60 * 1e3), (o = o + "; expires=" + n.toGMTString())),
                "https:" === document.location.protocol && (o += "; Secure"),
                (document.cookie = o));
        }),
        (window.GOVUK.getCookie = function (o) {
            for (var n = o + "=", e = document.cookie.split(";"), t = 0, i = e.length; t < i; t++) {
                for (var r = e[t]; " " === r.charAt(0); ) r = r.substring(1, r.length);
                if (0 === r.indexOf(n)) return decodeURIComponent(r.substring(n.length));
            }
            return null;
        });
})(window);
("use strict");
!(function (t) {
    t.GOVUK.hasConsentFor = function (n, o) {
        return null !== (o = void 0 === o ? t.GOVUK.getConsentCookie() : o) && n in o && o[n];
    };
})(window);
("use strict");
function _typeof(e) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              })(e);
}
!(function (n) {
    n.GOVUK = n.GOVUK || {};
    function e(e) {
        n.ga("create", { trackingId: e.trackingId, cookieDomain: e.cookieDomain, cookieExpires: 24 * e.expires * 60 * 60, cookieFlags: "Secure; SameSite=Lax" }),
            n.ga("set", "anonymizeIp", e.anonymizeIp),
            n.ga("set", "allowAdFeatures", e.allowAdFeatures),
            n.ga("set", "transport", e.transport),
            n.ga("set", "title", "GOV.UK Notify");
    }
    (e.load = function () {
        var e, t, o, a;
        (e = n),
            (a = document),
            (t = "script"),
            (o = "ga"),
            (e.GoogleAnalyticsObject = o),
            (e.ga =
                e.ga ||
                function () {
                    (e.ga.q = e.ga.q || []).push(arguments);
                }),
            (e.ga.l = +new Date()),
            (o = a.createElement(t)),
            (a = a.getElementsByTagName(t)[0]),
            (o.async = 1),
            (o.src = "//www.google-analytics.com/analytics.js"),
            a.parentNode.insertBefore(o, a);
    }),
        (e.prototype.trackPageview = function (e, t, o) {
            var a = (n.location.pathname + n.location.search).replace(/[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g, "…");
            n.ga("send", "pageview", a);
        }),
        (e.prototype.trackEvent = function (e, t, o) {
            e = { eventCategory: e, eventAction: t };
            (o = o || {}).label && ((e.eventLabel = o.label), delete o.label), "object" === _typeof(o) && $.extend(e, o), n.ga("send", "event", e);
        }),
        (n.GOVUK.Analytics = e);
})(window);
("use strict");
!(function (a) {
    a.GOVUK = a.GOVUK || {};
    var n = "UA-75215134-1";
    a["ga-disable-".concat(n)] = !0;
    a.GOVUK.initAnalytics = function () {
        "analytics" in a.GOVUK ||
            ((a["ga-disable-".concat(n)] = !1),
            a.GOVUK.Analytics.load(),
            (a.GOVUK.analytics = new GOVUK.Analytics({ trackingId: n, cookieDomain: "auto", anonymizeIp: !0, allowAdFeatures: !1, transport: "beacon", expires: 365 })),
            a.GOVUK.analytics.trackPageview());
    };
})(window);
("use strict");
(window.GOVUK = window.GOVUK || {}),
    (window.GOVUK.NotifyModules = window.GOVUK.NotifyModules || {}),
    (function (e) {
        function o() {}
        (o.clearOldCookies = function (e) {
            var o = ["_ga", "_gid"];
            if ((window.GOVUK.cookie("seen_cookie_message") && (document.cookie = "seen_cookie_message=;expires=" + new Date().toGMTString() + ";path=/"), null === e))
                for (var i, t = 0; t < o.length; t++) window.GOVUK.cookie(o[t]) && ((i = o[t] + "=;expires=" + new Date().toGMTString() + ";domain=" + window.location.hostname.replace(/^www\./, ".") + ";path=/"), (document.cookie = i));
        }),
            (o.prototype.start = function (e) {
                (this.$module = e[0]),
                    (this.$module.hideCookieMessage = this.hideCookieMessage.bind(this)),
                    (this.$module.showConfirmationMessage = this.showConfirmationMessage.bind(this)),
                    (this.$module.setCookieConsent = this.setCookieConsent.bind(this)),
                    (this.$module.cookieBanner = document.querySelector(".notify-cookie-banner")),
                    (this.$module.cookieBannerConfirmationMessage = this.$module.querySelector(".notify-cookie-banner__confirmation")),
                    this.setupCookieMessage();
            }),
            (o.prototype.setupCookieMessage = function () {
                var e = this;
                (this.$hideLink = this.$module.querySelector("button[data-hide-cookie-banner]")),
                    this.$hideLink && this.$hideLink.addEventListener("click", this.$module.hideCookieMessage),
                    (this.$acceptCookiesLink = this.$module.querySelector("button[data-accept-cookies=true]")),
                    this.$acceptCookiesLink &&
                        this.$acceptCookiesLink.addEventListener("click", function () {
                            return e.$module.setCookieConsent(!0);
                        }),
                    (this.$rejectCookiesLink = this.$module.querySelector("button[data-accept-cookies=false]")),
                    this.$rejectCookiesLink &&
                        this.$rejectCookiesLink.addEventListener("click", function () {
                            return e.$module.setCookieConsent(!1);
                        }),
                    this.showCookieMessage();
            }),
            (o.prototype.showCookieMessage = function () {
                var e;
                this.isInCookiesPage() || ((e = window.GOVUK.cookie("cookies_policy")), this.$module && !e && (this.$module.style.display = "block"));
            }),
            (o.prototype.hideCookieMessage = function (e) {
                this.$module && (this.$module.style.display = "none"), e.target && e.preventDefault();
            }),
            (o.prototype.setCookieConsent = function (e) {
                window.GOVUK.setConsentCookie({ analytics: e }), this.$module.showConfirmationMessage(e), this.$module.cookieBannerConfirmationMessage.focus(), e && window.GOVUK.initAnalytics();
            }),
            (o.prototype.showConfirmationMessage = function (e) {
                e = e ? "You’ve accepted analytics cookies." : "You told us not to use analytics cookies.";
                (this.$cookieBannerMainContent = document.querySelector(".notify-cookie-banner__wrapper")),
                    (this.$cookieBannerConfirmationMessage = document.querySelector(".notify-cookie-banner__confirmation-message")),
                    this.$cookieBannerConfirmationMessage.insertAdjacentText("afterbegin", e),
                    (this.$cookieBannerMainContent.style.display = "none"),
                    (this.$module.cookieBannerConfirmationMessage.style.display = "block");
            }),
            (o.prototype.isInCookiesPage = function () {
                return "/cookies" === window.location.pathname;
            }),
            (e.CookieBanner = o);
    })(window.GOVUK.NotifyModules);
("use strict");
(window.GOVUK = window.GOVUK || {}),
    (window.GOVUK.NotifyModules = window.GOVUK.NotifyModules || {}),
    (function (e) {
        function n() {}
        (n.prototype.start = function (e) {
            (this.$module = e[0]),
                (this.$module.submitSettingsForm = this.submitSettingsForm.bind(this)),
                document.querySelector("form[data-notify-module=cookie-settings]").addEventListener("submit", this.$module.submitSettingsForm),
                this.setInitialFormValues();
        }),
            (n.prototype.setInitialFormValues = function () {
                var e = window.GOVUK.getConsentCookie("consent");
                e && ((e.analytics ? document.querySelector("input[name=cookies-analytics][value=on]") : document.querySelector("input[name=cookies-analytics][value=off]")).checked = !0);
            }),
            (n.prototype.submitSettingsForm = function (e) {
                e.preventDefault();
                for (var t = e.target.querySelectorAll("input[name=cookies-analytics]"), o = {}, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (i.checked) {
                        i = "on" === i.value;
                        o.analytics = i;
                        break;
                    }
                }
                return window.GOVUK.setConsentCookie(o), this.showConfirmationMessage(), window.GOVUK.hasConsentFor("analytics") && window.GOVUK.initAnalytics(), !1;
            }),
            (n.prototype.showConfirmationMessage = function () {
                var e = document.querySelector("div[data-cookie-confirmation]"),
                    t = document.querySelector(".cookie-settings__prev-page"),
                    o = n.prototype.getReferrerLink();
                (document.body.scrollTop = document.documentElement.scrollTop = 0), o && o !== document.location.pathname ? ((t.href = o), (t.style.display = "block")) : (t.style.display = "none"), (e.style.display = "block");
            }),
            (n.prototype.getReferrerLink = function () {
                return !!document.referrer && new URL(document.referrer).pathname;
            }),
            (e.CookieSettings = n);
    })(window.GOVUK.NotifyModules);
("use strict");
!(function (l) {
    function s(t, e, i) {
        var o = t.$fixedEl,
            s = o.closest(".sticky-scroll-area");
        0 === s.length && (s = o.parent()).addClass("sticky-scroll-area"), (this._els = [t]), (this.edge = e), (this.selector = i), (this.node = s.get(0)), this.setEvents();
    }
    function h(t, e) {
        (this._sticky = e),
            (this.$fixedEl = t),
            (this._initialFixedClass = "content-fixed-onload"),
            (this._fixedClass = "content-fixed"),
            (this._appliedClass = null),
            (this._$shim = null),
            (this._stopped = !1),
            (this._hasLoaded = !1),
            (this._canBeStuck = !0),
            (this.verticalMargins = { top: parseInt(this.$fixedEl.css("margin-top"), 10), bottom: parseInt(this.$fixedEl.css("margin-bottom"), 10) });
    }
    function t(t) {
        (this._hasScrolled = !1),
            (this._scrollTimeout = !1),
            (this._windowHasResized = !1),
            (this._resizeTimeout = !1),
            (this._elsLoaded = !1),
            (this._initialPositionsSet = !1),
            (this._els = []),
            (this.CSS_SELECTOR = t),
            (this.STOP_PADDING = 10);
    }
    var c = l.jQuery,
        e = l.GOVUK || {},
        n = "default",
        a =
            ((s.prototype.addEl = function (t) {
                this._els.push(t);
            }),
            (s.prototype.hasEl = function (t) {
                return -1 !== c.inArray(t, this._els);
            }),
            (s.prototype.updateEls = function (t) {
                this._els = t;
            }),
            (s.prototype.setEvents = function () {
                this.node.addEventListener("focus", this.focusHandler.bind(this), !0), c(this.node).on("keyup", "textarea", this.focusHandler.bind(this));
            }),
            (s.prototype.removeEvents = function () {
                this.node.removeEventListener("focus", this.focusHandler.bind(this)), c(this.node).find("textarea").off("keyup", "textarea", this.focusHandler.bind(this));
            }),
            (s.prototype.getFocusedDetails = {
                forElement: function (t) {
                    t = { top: t.offset().top, height: t.outerHeight(), type: "element" };
                    return (t.bottom = t.top + t.height), t;
                },
                forCaret: function (t) {
                    var e = t.get(0),
                        e = window.getCaretCoordinates(e, e.selectionEnd),
                        t = { top: t.offset().top + e.top, height: e.height, type: "caret" };
                    return (t.bottom = t.top + t.height), t;
                },
            }),
            (s.prototype.focusHandler = function (t) {
                this.scrollToRevealElement(c(document.activeElement));
            }),
            (s.prototype.scrollToRevealElement = function (t) {
                var e,
                    i = t.get(0).nodeName.toLowerCase(),
                    o = r.endOfFurthestEl(this._els, this.edge),
                    s = function () {
                        return 0 < t.closest(this.selector).length;
                    }.bind(this);
                if ("textarea" === i) e = this.getFocusedDetails.forCaret(t);
                else {
                    if (s()) return;
                    e = this.getFocusedDetails.forElement(t);
                }
                0 < (i = r.getOverlap(e, this.edge, o)) && r.adjustForOverlap(e, this.edge, i);
            }),
            (s.prototype.destroy = function () {
                this.removeEvents();
            }),
            {
                _scrollAreas: [],
                getAreaForEl: function (t) {
                    for (var e = this._scrollAreas.length; e--; ) if (this._scrollAreas[e].hasEl(t)) return this._scrollAreas[e];
                    return !1;
                },
                getAreaByEl: function (e) {
                    return (
                        c.grep(this._scrollAreas, function (t) {
                            return -1 !== c.inArray(e, t.els);
                        })[0] || !1
                    );
                },
                addEl: function (t, e, i) {
                    var o = this.getAreaForEl(t);
                    o ? o.addEl(t) : this._scrollAreas.push(new s(t, e, i));
                },
                syncEls: function (n) {
                    var i = this,
                        r = [];
                    c.each(this._scrollAreas, function (t, e) {
                        (i = e),
                            (o = []),
                            c.each(n, function (t, e) {
                                i.hasEl(e) && o.push(e);
                            });
                        var i,
                            o,
                            s = o;
                        s.length || r.push(t), e.updateEls(s);
                    }),
                        c.each(r, function (t, e) {
                            i._scrollAreas[e].destroy(), i._scrollAreas.splice(e, 1);
                        });
                },
            }),
        r = {
            getOverlap: function (t, e, i) {
                return i ? ("top" === e ? i - t.top : t.bottom - i) : 0;
            },
            endOfFurthestEl: function (t, e) {
                var t = c.grep(t, function (t) {
                        return t.isStuck();
                    }),
                    i =
                        "bottom" === e
                            ? function (t) {
                                  return t.$fixedEl.offset().top;
                              }
                            : function (t) {
                                  return t.$fixedEl.offset().top + t.height;
                              };
                return (
                    !!t.length &&
                    c
                        .map(t, function (t) {
                            return i(t);
                        })
                        .reduce(function (t, e) {
                            return t < e ? e : t;
                        })
                );
            },
            adjustForOverlap: function (t, e, i) {
                var o = c(window).scrollTop();
                "top" === e ? c(window).scrollTop(o - i) : c(window).scrollTop(o + i);
            },
        },
        d = {
            _classes: { top: "content-fixed__top", bottom: "content-fixed__bottom" },
            _getClassForEdge: function (t) {
                return this._classes[t];
            },
            mark: function (t) {
                var i = this._getClassForEdge(t.edge),
                    t = "dialog" === n ? [u.getElementAtOppositeEnd(t)] : t._els;
                (t = c.grep(t, function (t) {
                    return t.isStuck();
                })),
                    c.each(t, function (t, e) {
                        e.$fixedEl.addClass(i);
                    });
            },
            unmark: function (t) {
                var i = this._getClassForEdge(t.edge);
                c.each(t._els, function (t, e) {
                    e.$fixedEl.removeClass(i);
                });
            },
        },
        u =
            ((h.prototype._getShimCSS = function () {
                return { width: this.horizontalSpace + "px", height: this.height + "px", "margin-top": this.verticalMargins.top + "px", "margin-bottom": this.verticalMargins.bottom + "px" };
            }),
            (h.prototype.stickyClass = function () {
                return this._sticky._initialPositionsSet ? this._fixedClass : this._initialFixedClass;
            }),
            (h.prototype.appliedClass = function () {
                return this._appliedClass;
            }),
            (h.prototype.removeStickyClasses = function (t) {
                this.$fixedEl.removeClass([this._initialFixedClass, this._fixedClass].join(" "));
            }),
            (h.prototype.isStuck = function () {
                return null !== this._appliedClass;
            }),
            (h.prototype.stick = function (t) {
                (this._appliedClass = this.stickyClass()), this.$fixedEl.addClass(this._appliedClass), (this._hasBeenCalled = !0);
            }),
            (h.prototype.release = function (t) {
                (this._appliedClass = null), this.removeStickyClasses(t), (this._hasBeenCalled = !0);
            }),
            (h.prototype.addShim = function (t) {
                (this._$shim = c('<div class="shim">&nbsp</div>')), this._$shim.css(this._getShimCSS()), this.$fixedEl[t](this._$shim);
            }),
            (h.prototype.removeShim = function () {
                null !== this._$shim && (this._$shim.remove(), (this._$shim = null));
            }),
            (h.prototype.updateShim = function () {
                this._$shim && this._$shim.css(this._getShimCSS());
            }),
            (h.prototype.stop = function () {
                this._stopped = !0;
            }),
            (h.prototype.unstop = function () {
                this._stopped = !1;
            }),
            (h.prototype.isStopped = function () {
                return this._stopped;
            }),
            (h.prototype.isInPage = function () {
                var t = this.$fixedEl.get(0);
                return t !== document.body && document.body.contains(t);
            }),
            (h.prototype.canBeStuck = function (t) {
                if (void 0 === t) return this._canBeStuck;
                this._canBeStuck = t;
            }),
            {
                hasResized: !(h.prototype.hasLoaded = function (t) {
                    if (void 0 === t) return this._hasLoaded;
                    this._hasLoaded = t;
                }),
                spaceBetweenStickys: 40,
                _getPaddingBetweenEls: function (t) {
                    return t.length <= 1 ? 0 : (t.length - 1) * this.spaceBetweenStickys;
                },
                _getTotalHeight: function (t) {
                    return (
                        c
                            .map(t, function (t) {
                                return t.height;
                            })
                            .reduce(function (t, e) {
                                return t + e;
                            }) - this._getPaddingBetweenEls(t)
                    );
                },
                _elsThatCanBeStuck: function (t) {
                    return c.grep(t, function (t) {
                        return t.canBeStuck();
                    });
                },
                getOffsetFromEdge: function (t, e) {
                    var i = this._elsThatCanBeStuck(e._els).slice();
                    return "top" === e.edge && i.reverse(), (e = i.indexOf(t)) === i.length - 1 ? 0 : ((i = i.slice(e + 1)), this._getTotalHeight(i) - this.spaceBetweenStickys);
                },
                getOffsetFromEnd: function (t, e) {
                    var i = this._elsThatCanBeStuck(e._els).slice();
                    return "bottom" === e.edge && i.reverse(), (e = i.indexOf(t)) === i.length - 1 ? 0 : ((i = i.slice(e + 1)), this._getTotalHeight(i) - this.spaceBetweenStickys);
                },
                fitToHeight: function (t) {
                    var e = this,
                        i = t._els.slice(),
                        o = t.getWindowDimensions().height,
                        s = function () {
                            return e._getTotalHeight(e._elsThatCanBeStuck(i));
                        };
                    for (
                        "top" === t.edge && i.reverse(),
                            c.each(i, function (t, e) {
                                e.canBeStuck(!0);
                            });
                        e._elsThatCanBeStuck(i).length && !(s() <= o);

                    ) {
                        var n = e._elsThatCanBeStuck(i)[0];
                        t.reset(n), n.canBeStuck(!1), e.hasResized || (e.hasResized = !0);
                    }
                },
                getElementAtStickyEdge: function (t) {
                    var e = this._elsThatCanBeStuck(t._els);
                    return e["top" === t.edge ? 0 : e.length - 1];
                },
                getElementAtOppositeEnd: function (t) {
                    var e = this._elsThatCanBeStuck(t._els);
                    return e["top" === t.edge ? e.length - 1 : 0];
                },
                getInPageEdgePosition: function (t) {
                    return this.getElementAtStickyEdge(t).inPageEdgePosition;
                },
                getHeight: function (t) {
                    return this._getTotalHeight(this._elsThatCanBeStuck(t));
                },
                adjustForResize: function (t) {
                    var e = t.getWindowDimensions().height;
                    "top" === t.edge ? c(window).scrollTop(this.getInPageEdgePosition(t)) : c(window).scrollTop(this.getInPageEdgePosition(t) - e), (this.hasResized = !1);
                },
                releaseEl: function (t, e) {
                    t.$fixedEl.css(e.edge, "");
                },
            }),
        i =
            ((t.prototype.setMode = function (t) {
                n = t;
            }),
            (t.prototype.getWindowDimensions = function () {
                return { height: c(l).height(), width: c(l).width() };
            }),
            (t.prototype.getWindowPositions = function () {
                return { scrollTop: c(l).scrollTop() };
            }),
            (t.prototype.setElementPositions = function () {
                var i = this,
                    o = i.getWindowDimensions(),
                    t = i.getWindowPositions().scrollTop,
                    s = { top: t, bottom: t + o.height };
                d.unmark(i),
                    c.each(i._els, function (t, e) {
                        e.canBeStuck() &&
                            ((e = e),
                            !i.viewportIsWideEnough(o.width) || i.windowNotPastScrolledFrom(s, i.getScrolledFrom(e))
                                ? i.reset(e)
                                : i.windowNotPastScrollingTo(s, i.getScrollingTo(e))
                                ? (i.stick(e), e.isStopped() && i.unstop(e))
                                : (e.isStuck() || i.stick(e), i.stop(e)));
                    }),
                    d.mark(i),
                    !1 === i._initialPositionsSet && (i._initialPositionsSet = !0);
            }),
            (t.prototype.setElementDimensions = function (t, e) {
                t.$fixedEl;
                this.setElWidth(t),
                    this.setElHeight(t, function () {
                        t._$shim && t.updateShim(), void 0 !== e && e();
                    });
            }),
            (t.prototype.reset = function (t) {
                t.isStopped() && this.unstop(t), t.isStuck() && this.release(t);
            }),
            (t.prototype.recalculate = function () {
                var t = this;
                this.syncWithDOM(function () {
                    a.syncEls(t._els), t.setEvents(), "dialog" === n && (u.fitToHeight(t), u.hasResized && u.adjustForResize(t)), t.setElementPositions();
                });
            }),
            (t.prototype.scrollToRevealElement = function (t) {
                var t = c(t),
                    e = t.closest(".sticky-scroll-area").get(0),
                    i = c.grep(a._scrollAreas, function (t) {
                        return t.node === e;
                    });
                i.length && i[0].scrollToRevealElement(t);
            }),
            (t.prototype.setElWidth = function (t) {
                var e = t.$fixedEl,
                    i = a.getAreaByEl(t),
                    i = c(i.node).width();
                (t.horizontalSpace = i), t._$shim && e.width(i);
            }),
            (t.prototype.setElHeight = function (t, e) {
                function i() {
                    (t.height = n.outerHeight()), t._$shim ? (t.inPageEdgePosition = s.getInPageEdgePosition(t._$shim)) : (t.inPageEdgePosition = s.getInPageEdgePosition(n)), e();
                }
                var o,
                    s = this,
                    n = t.$fixedEl,
                    r = n.find("img");
                !t.hasLoaded() && 0 < r.length
                    ? (((o = new l.Image()).onload = function () {
                          i();
                      }),
                      (o.src = r.attr("src")))
                    : i();
            }),
            (t.prototype.allElementsLoaded = function (t) {
                return this._els.length === t;
            }),
            (t.prototype.getElForNode = function (e) {
                var t = c.grep(this._els, function (t) {
                    return t.$fixedEl.is(e);
                });
                return !!t.length && t[0];
            }),
            (t.prototype.add = function (t, e, i) {
                var o = this,
                    s = c(t),
                    n = this.getElForNode(t),
                    r = !!n,
                    t = function () {
                        n.hasLoaded(!0), r || o._els.push(n), e && o.setElementPositions(), void 0 !== i && i();
                    };
                r || ((n = new h(s, o)), a.addEl(n, o.edge, o.CSS_SELECTOR)), o.setElementDimensions(n, t);
            }),
            (t.prototype.remove = function (e) {
                -1 !== c.inArray(e, this._els) &&
                    (this.reset(e),
                    (this._els = c.grep(this._els, function (t) {
                        return t !== e;
                    })));
            }),
            (t.prototype.syncWithDOM = function (t) {
                var i = this,
                    e = c(i.CSS_SELECTOR),
                    o = e.length,
                    s = function () {
                        i._els.length === o && ((i.endOfScrollArea = i.getEndOfScrollArea()), void 0 !== t && t());
                    };
                this._els.length &&
                    c.each(this._els, function (t, e) {
                        e.isInPage() || i.remove(e);
                    }),
                    o &&
                        ((this._initialPositionsSet = !1),
                        e.each(function (t, e) {
                            i.add(e, !1, s);
                        }));
            }),
            (t.prototype.init = function () {
                this.recalculate();
            }),
            (t.prototype.setEvents = function () {
                (this._scrollEvent = this.onScroll.bind(this)),
                    (this._resizeEvent = this.onResize.bind(this)),
                    !1 === this._scrollTimeout && (c(l).scroll(this._scrollEvent), (this._scrollTimeout = l.setInterval(this.checkScroll.bind(this), 50))),
                    !1 === this._resizeTimeout && (c(l).resize(this._resizeEvent), (this._resizeTimeout = l.setInterval(this.checkResize.bind(this), 50)));
            }),
            (t.prototype.clearEvents = function () {
                !1 !== this._scrollTimeout && (c(l).off("scroll", this._scrollEvent), l.clearInterval(this._scrollTimeout), (this._scrollTimeout = !1)),
                    !1 !== this._resizeTimeout && (c(l).off("resize", this._resizeEvent), l.clearInterval(this._resizeTimeout), (this._resizeTimeout = !1));
            }),
            (t.prototype.viewportIsWideEnough = function (t) {
                return 768 < t;
            }),
            (t.prototype.onScroll = function () {
                this._hasScrolled = !0;
            }),
            (t.prototype.onResize = function () {
                this._windowHasResized = !0;
            }),
            (t.prototype.checkScroll = function () {
                !0 === this._hasScrolled && ((this._hasScrolled = !1), this.setElementPositions());
            }),
            (t.prototype.checkResize = function () {
                var i = this,
                    o = i.getWindowDimensions().width;
                !0 === i._windowHasResized &&
                    ((i._windowHasResized = !1),
                    c.each(i._els, function (t, e) {
                        i.viewportIsWideEnough(o) ? i.setElementDimensions(e) : i.reset(e);
                    }),
                    i.viewportIsWideEnough(o) && ("dialog" === n && (u.fitToHeight(i), u.hasResized && u.adjustForResize(i)), i.setElementPositions()));
            }),
            (t.prototype.release = function (t) {
                var e;
                t.isStuck() && ((e = t.$fixedEl), t.removeStickyClasses(this), e.css("width", ""), u.releaseEl(t, this), t.removeShim(), t.release(this));
            }),
            new t(".js-stick-at-top-when-scrolling")),
        o =
            ((i.edge = "top"),
            (i.getEndOfScrollArea = function () {
                var t = c(".js-footer:eq(0)");
                return 0 === t.length ? 0 : t.offset().top - this.STOP_PADDING;
            }),
            (i.getInPageEdgePosition = function (t) {
                return t.offset().top;
            }),
            (i.getScrolledFrom = function (t) {
                return "dialog" === n ? u.getInPageEdgePosition(this) : t.inPageEdgePosition;
            }),
            (i.getScrollingTo = function (t) {
                t = t.height;
                return "dialog" === n && (t = u.getHeight(this._els)), this.endOfScrollArea - t;
            }),
            (i.getStoppingPosition = function (t) {
                var e = 0;
                return "dialog" === n && (e = u.getOffsetFromEnd(t, this)), this.endOfScrollArea - e - t.height;
            }),
            (i.windowNotPastScrolledFrom = function (t, e) {
                return e > t.top;
            }),
            (i.windowNotPastScrollingTo = function (t, e) {
                return t.top < e;
            }),
            (i.stick = function (t) {
                var e, i;
                t.isStuck() || ((e = t.$fixedEl), (i = 0), "dialog" === n && (i = u.getOffsetFromEdge(t, this)), t.addShim("before"), e.css({ width: e.width() + "px", top: i + "px" }), t.stick(this));
            }),
            (i.stop = function (t) {
                t.isStopped() || (t.$fixedEl.css({ position: "absolute", top: this.getStoppingPosition(t) }), t.stop());
            }),
            (i.unstop = function (t) {
                var e = 0;
                "dialog" === n && (e = u.getOffsetFromEdge(t, this)), t.$fixedEl.css({ position: "", top: e + "px" }), t.unstop();
            }),
            new t(".js-stick-at-bottom-when-scrolling"));
    (o.edge = "bottom"),
        (o.getEndOfScrollArea = function () {
            var t = c(".js-header:eq(0)");
            return 0 === t.length ? 0 : t.offset().top + t.outerHeight() + this.STOP_PADDING;
        }),
        (o.getInPageEdgePosition = function (t) {
            return t.offset().top + t.outerHeight();
        }),
        (o.getScrolledFrom = function (t) {
            return "dialog" === n ? u.getInPageEdgePosition(this) : t.inPageEdgePosition;
        }),
        (o.getScrollingTo = function (t) {
            t = t.height;
            return "dialog" === n && (t = u.getHeight(this._els)), this.endOfScrollArea + t;
        }),
        (o.getStoppingPosition = function (t) {
            var e = 0;
            return "dialog" === n && (e = u.getOffsetFromEnd(t, this)), this.endOfScrollArea + e;
        }),
        (o.windowNotPastScrolledFrom = function (t, e) {
            return e < t.bottom;
        }),
        (o.windowNotPastScrollingTo = function (t, e) {
            return t.bottom > e;
        }),
        (o.stick = function (t) {
            var e, i;
            t.isStuck() || ((e = t.$fixedEl), (i = 0), "dialog" === n && (i = u.getOffsetFromEdge(t, this)), t.addShim("after"), e.css({ width: e.width() + "px", bottom: i + "px" }), t.stick(this));
        }),
        (o.stop = function (t) {
            t.isStopped() || (t.$fixedEl.css({ position: "absolute", top: this.getStoppingPosition(t), bottom: "auto" }), t.stop());
        }),
        (o.unstop = function (t) {
            var e = 0;
            "dialog" === n && (e = u.getOffsetFromEdge(t, this)), t.$fixedEl.css({ position: "", top: "", bottom: e + "px" }), t.unstop();
        }),
        (e.stickAtTopWhenScrolling = i),
        (e.stickAtBottomWhenScrolling = o),
        (l.GOVUK = e);
})(window);
("use strict");
!(function (o) {
    document.queryCommandSupported("copy") &&
        (o.CopyToClipboard = function () {
            var c = function (o) {
                    return '\n        <span class="copy-to-clipboard__value">'
                        .concat(o.valueLabel ? '<span class="govuk-visually-hidden">' + o.thing + ": </span>" : "")
                        .concat(o.value, '</span>\n        <span class="copy-to-clipboard__notice govuk-visually-hidden" aria-live="assertive">\n          ')
                        .concat(
                            o.onload ? "" : o.thing + " returned to page, press button to copy to clipboard",
                            '\n        </span>\n        <button type="button" class="govuk-button govuk-button--secondary copy-to-clipboard__button--copy">\n          Copy '
                        )
                        .concat(o.thing, " to clipboard")
                        .concat(o.name ? '<span class="govuk-visually-hidden"> for ' + o.name + "</span>" : "", "\n        </button>\n      ");
                },
                i = function (o) {
                    return '\n        <span class="copy-to-clipboard__notice" aria-live="assertive">\n          <span class="govuk-visually-hidden">'
                        .concat(
                            o.thing,
                            ' </span>Copied to clipboard<span class="govuk-visually-hidden">, press button to show in page</span>\n        </span>\n        <button type="button" class="govuk-button govuk-button--secondary copy-to-clipboard__button--show">\n          Show '
                        )
                        .concat(o.thing)
                        .concat(o.name ? '<span class="govuk-visually-hidden"> for ' + o.name + "</span>" : "", "\n        </button>\n      ");
                };
            (this.getRangeFromElement = function (o) {
                var n = document.createRange(),
                    t = Array.prototype.slice.call(o.childNodes),
                    a = -1;
                return (
                    t.forEach(function (o, n) {
                        1 === o.nodeType && o.classList.contains("govuk-visually-hidden") && (a = n);
                    }),
                    n.selectNodeContents(o),
                    -1 !== a && n.setStart(o, a + 1),
                    n
                );
            }),
                (this.copyValueToClipboard = function (o, n) {
                    var t = window.getSelection ? window.getSelection() : document.selection,
                        o = this.getRangeFromElement(o);
                    t.removeAllRanges(), t.addRange(o), document.execCommand("copy"), t.removeAllRanges(), n();
                }),
                (this.start = function (o) {
                    var n = this,
                        t = $(o),
                        a = { value: t.data("value"), thing: t.data("thing") },
                        e = t.data("name");
                    e !== a.thing && ((a.name = e), (a.valueLabel = !0)),
                        t
                            .addClass("copy-to-clipboard")
                            .css("min-height", t.height())
                            .html(c($.extend({ onload: !0 }, a)))
                            .on("click", ".copy-to-clipboard__button--copy", function () {
                                return n.copyValueToClipboard($(".copy-to-clipboard__value", o)[0], function () {
                                    return t.html(i(a)).find(".govuk-button").focus();
                                });
                            })
                            .on("click", ".copy-to-clipboard__button--show", function () {
                                return t.html(c(a)).find(".govuk-button").focus();
                            }),
                        "stickAtBottomWhenScrolling" in GOVUK && GOVUK.stickAtBottomWhenScrolling.recalculate();
                });
        });
})(window.GOVUK.NotifyModules);
("use strict");
window.GOVUK.NotifyModules.Autofocus = function () {
    this.start = function (t) {
        var t = $(t),
            e = t.data("forceFocus");
        (0 < $(window).scrollTop() && !e) || (e = 0 === (e = t.filter("input, textarea, select")).length ? $("input, textarea, select", t) : e).eq(0).trigger("focus");
    };
};
("use strict");
!(function (t) {
    var i;
    "oninput" in document.createElement("input") &&
        ((i = /\(\(([^\)\((\?)]+)(\?\?)?([^\)\(]*)\)\)/g),
        (t.EnhancedTextbox = function () {
            var t = this;
            (this.start = function (t) {
                (this.highlightPlaceholders = void 0 === t.data("highlightPlaceholders") || !!t.data("highlightPlaceholders")),
                    (this.$textbox = $(t)
                        .wrap("\n          <div class='textbox-highlight-wrapper' />\n        ")
                        .after((this.$background = $('\n          <div class="textbox-highlight-background" aria-hidden="true" />\n        ')))
                        .on("input", this.update)),
                    $(window).on("resize", this.resize),
                    (t = this.$textbox.clone().appendTo("body").css({ position: "absolute", visibility: "hidden", display: "block" })),
                    (this.initialHeight = t.height()),
                    this.$background.css({ "border-width": this.$textbox.css("border-width") }),
                    t.remove(),
                    this.$textbox.trigger("input");
            }),
                (this.resize = function () {
                    t.$background.width(t.$textbox.width()), t.$textbox.height(Math.max(t.initialHeight, t.$background.outerHeight())), "stickAtBottomWhenScrolling" in GOVUK && GOVUK.stickAtBottomWhenScrolling.recalculate();
                }),
                (this.contentEscaped = function () {
                    return $("<div/>").text(t.$textbox.val()).html();
                }),
                (this.contentReplaced = function () {
                    return t.contentEscaped().replace(i, function (t, i, e, n) {
                        return n && e ? "<span class='placeholder-conditional'>((".concat(i, "??</span>").concat(n, "))") : "<span class='placeholder'>((".concat(i).concat(n, "))</span>");
                    });
                }),
                (this.update = function () {
                    t.$background.html(t.highlightPlaceholders ? t.contentReplaced() : t.contentEscaped()), t.resize();
                });
        }));
})(window.GOVUK.NotifyModules);
("use strict");
window.GOVUK.NotifyModules.FileUpload = function () {
    var n = this;
    (this.submit = function () {
        return n.$form.trigger("submit");
    }),
        (this.addCancelButton = function () {
            var t = $('\n        <a href="" role="button" class="file-upload-button govuk-button govuk-button--warning">\n          Cancel upload\n        </a>\n      ');
            $("button.file-upload-button", n.$form).replaceWith(t), new window.GOVUK.Frontend.Button(n.$form[0]).init(), t.focus();
        }),
        (this.addFakeButton = function () {
            var n = this,
                t = this.$field.data("buttonText"),
                o = '\n        <button type="button" class="file-upload-button govuk-button govuk-!-margin-right-1" id="file-upload-button">\n          '.concat(t, "\n        </button>");
            0 < this.$fieldErrors.length &&
                (o = '\n          <label class="file-upload-button-label error-message" for="file-upload-button">\n            <span class="govuk-visually-hidden">'
                    .concat(t, " </span>\n            ")
                    .concat(this.$fieldErrors.eq(0).text(), "\n          </label>\n          ")
                    .concat(o)),
                $(o)
                    .on("click", function (t) {
                        return n.$field.click();
                    })
                    .insertAfter(this.$field);
        }),
        (this.start = function (t) {
            var n = this;
            (this.$form = $(t)),
                (this.$field = this.$form.find(".file-upload-field")),
                (this.$fieldErrors = this.$form.find(".file-upload-label .error-message")),
                this.addFakeButton(),
                $(window).on("pageshow", function () {
                    return n.$form[0].reset();
                }),
                this.$form.on("change", ".file-upload-field", function () {
                    return n.submit() && n.addCancelButton();
                });
        });
};
("use strict");
!(function (e) {
    function r(e, o) {
        "default" === e && $("[type=radio]", o).eq(0).focus(), "option" === e && $("[type=radio]", o).eq(1).focus();
    }
    var o = e.GOVUK.NotifyModules,
        e = e.Hogan,
        v = {
            initial: e.compile(
                '\n      {{#showNowAsDefault}}\n        <div class="radio-select__column">\n          <div class="govuk-radios__item">\n            <input class="govuk-radios__input" checked="checked" id="{{name}}-0" name="{{name}}" type="radio" value="">\n            <label class="govuk-label govuk-radios__label" for="{{name}}-0">Now</label>\n          </div>\n        </div>\n      {{/showNowAsDefault}}\n      <div class="radio-select__column">\n        {{#categories}}\n          <input type=\'button\' class=\'govuk-button govuk-button--secondary radio-select__button--category\' aria-expanded="false" value=\'{{.}}\' />\n        {{/categories}}\n      </div>\n    '
            ),
            choose: e.compile(
                '\n      {{#showNowAsDefault}}\n        <div class="radio-select__column">\n          <div class="govuk-radios__item">\n            <input class="govuk-radios__input" checked="checked" id="{{name}}-0" name="{{name}}" type="radio" value="">\n            <label class="govuk-label govuk-radios__label" for="{{name}}-0">Now</label>\n          </div>\n        </div>\n      {{/showNowAsDefault}}\n      <div class="radio-select__column">\n        {{#choices}}\n          <div class="govuk-radios__item js-option">\n            <input class="govuk-radios__input" type="radio" value="{{value}}" id="{{id}}" name="{{name}}" />\n            <label class="govuk-label govuk-radios__label" for="{{id}}">{{label}}</label>\n          </div>\n        {{/choices}}\n        <input type=\'button\' class=\'govuk-button govuk-button--secondary radio-select__button--done\' aria-expanded=\'true\' value=\'Done\' />\n      </div>\n    '
            ),
            chosen: e.compile(
                '\n      {{#showNowAsDefault}}\n        <div class="radio-select__column">\n          <div class="govuk-radios__item">\n            <input class="govuk-radios__input" id="{{name}}-0" name="{{name}}" type="radio" value="">\n            <label class="govuk-label govuk-radios__label" for="{{name}}-0">Now</label>\n          </div>\n        </div>\n      {{/showNowAsDefault}}\n      <div class="radio-select__column">\n        {{#choices}}\n          <div class="govuk-radios__item">\n            <input class="govuk-radios__input" checked="checked" type="radio" value="{{value}}" id="{{id}}" name="{{name}}" />\n            <label class="govuk-label govuk-radios__label" for="{{id}}">{{label}}</label>\n          </div>\n        {{/choices}}\n      </div>\n      <div class="radio-select__column">\n        <input type=\'button\' class=\'govuk-button govuk-button--secondary radio-select__button--reset\' aria-expanded=\'false\' value=\'Choose a different time\' />\n      </div>\n    '
            ),
        };
    o.RadioSelect = function () {
        this.start = function (n) {
            function a() {
                l("initial", { categories: e, name: u, showNowAsDefault: d }), r("default", n);
            }
            function o(o) {
                l("chosen", {
                    choices: s.filter(function (e) {
                        return e.value == o;
                    }),
                    name: u,
                    showNowAsDefault: d,
                }),
                    r("option", n);
            }
            function t(e) {
                (e = e.target.parentNode) === c && ((e = $("input", e).attr("value")), o(e), (c = null), $(document).off("mouseup", t));
            }
            var i = $(n),
                l = function (e, o) {
                    i.html(v[e].render(o));
                },
                s = $("label", i)
                    .toArray()
                    .map(function (e) {
                        e = $(e);
                        return { id: e.attr("for"), label: $.trim(e.text()), value: e.prev("input").attr("value") };
                    }),
                e = i.data("categories").split(","),
                u = i.find("input").eq(0).attr("name"),
                c = null,
                d = "true" === i.data("show-now-as-default").toString() && { name: u };
            i
                .on("click", ".radio-select__button--category", function (e) {
                    e.preventDefault();
                    var e = $(this).attr("value").split(" "),
                        o = e[e.length - 1].toLowerCase();
                    l("choose", {
                        choices: s.filter(function (e) {
                            return -1 < e.label.toLowerCase().indexOf(o);
                        }),
                        name: u,
                        showNowAsDefault: d,
                    }),
                        r("option", n);
                })
                .on("mousedown", ".js-option", function (e) {
                    (c = this), $(document).on("mouseup", t);
                })
                .on("keydown", "input[type=radio]", function (e) {
                    if (13 !== e.which && 32 !== e.which) return !0;
                    e.preventDefault();
                    e = $(this).attr("value");
                    o(e);
                })
                .on("click", ".radio-select__button--done", function (e) {
                    e.preventDefault();
                    var o = $("input[type=radio]:checked", this.parentNode);
                    o.length
                        ? (l("chosen", {
                              choices: s.filter(function (e) {
                                  return e.value == o.eq(0).attr("value");
                              }),
                              name: u,
                              showNowAsDefault: d,
                          }),
                          r("option", n))
                        : (a(), r("default", n));
                })
                .on("click", ".radio-select__button--reset", function (e) {
                    e.preventDefault(), a(), r("default", n);
                }),
                l("initial", { categories: e, name: u, showNowAsDefault: d }),
                i.css({ height: "auto" });
        };
    };
})(window);
("use strict");
!(function (a) {
    function i(t) {
        return parseInt(Math.max(250 * Math.sqrt(t) - 1e3, 1e3));
    }
    function s(t) {
        (this._$contents = t), (this._classNames = []), (this._classesTo$ElsMap = {});
    }
    var l = {},
        u = a.GOVUK.vendor.morphdom,
        c = 0,
        f =
            ((s.prototype.addClassName = function (t) {
                -1 === this._classNames.indexOf(t) && this._classNames.push(t);
            }),
            (s.prototype.remove = function () {
                var e = this;
                this._classNames.forEach(function (t) {
                    var s = $("." + t, e._$contents).removeClass(t);
                    0 < s.length && (e._classesTo$ElsMap[t] = s);
                });
            }),
            (s.prototype.replace = function () {
                function t(t, s) {
                    a.document.body.contains(s) && $(s).addClass(e);
                }
                for (var e in this._classesTo$ElsMap) this._classesTo$ElsMap[e].each(t);
                this._classesTo$ElsMap = {};
            }),
            function (t, s, a, e) {
                var n = arguments,
                    o = Date.now();
                "hidden" !== document.visibilityState &&
                    1 === a.push(t) &&
                    $.ajax(s, { method: e ? "post" : "get", data: e ? $("#" + e).serialize() : {} })
                        .done(function (t) {
                            for (var s = a, e = t; s.length; ) s.shift()(e);
                            1 === t.stop && (f = function () {}), (c = i(Date.now() - o));
                        })
                        .fail(function () {
                            return (f = function () {});
                        }),
                    setTimeout(function () {
                        return f.apply(window, n);
                    }, c);
            });
    (a.GOVUK.NotifyModules.UpdateContent = function () {
        this.start = function (t) {
            var t = $(t),
                n = t.children().eq(0),
                o = t.data("key"),
                i = t.data("resource"),
                c = t.data("form"),
                r = new s(n);
            t.replaceWith(n),
                void 0 !== n.data("classesToPersist") &&
                    n
                        .data("classesToPersist")
                        .split(" ")
                        .forEach(function (t) {
                            return r.addClassName(t);
                        }),
                setTimeout(function () {
                    return f(
                        ((s = n),
                        (e = o),
                        (a = r),
                        function (t) {
                            a.remove(), u(s.get(0), $(t[e]).get(0)), a.replace();
                        }),
                        i,
                        (l[i] = l[i] || []),
                        c
                    );
                    var s, e, a;
                }, 2e3);
        };
    }),
        (a.GOVUK.NotifyModules.UpdateContent.calculateBackoff = i);
})(window);
("use strict");
!(function (t) {
    var e = [],
        i = function (t) {
            var t = $(t),
                e = t.prop("id");
            if (!e) return !1;
            (this.idPattern = e),
                (this.elementSelector = ".list-entry, .input-list__button--remove, .input-list__button--add"),
                (this.entries = []),
                (this.$wrapper = t),
                (this.minEntries = 2),
                (this.listItemName = this.$wrapper.data("listItemName")),
                this.getSharedAttributes(),
                this.getValues(),
                (this.maxEntries = this.entries.length),
                this.trimEntries(),
                this.render(),
                this.bindEvents();
        };
    (i.optionalAttributes = ["aria-describedby"]),
        (i.prototype.entryTemplate = Hogan.compile(
            '<div class="list-entry"><label for="{{{id}}}" class="govuk-input--numbered__label"><span class="govuk-visually-hidden">{{listItemName}} number </span>{{number}}.</label><input name="{{name}}" id="{{id}}" {{#value}}value="{{value}}{{/value}}" {{{sharedAttributes}}}/>{{#button}}<button type="button" class="govuk-button govuk-button--secondary input-list__button--remove">Remove<span class="govuk-visually-hidden"> {{listItemName}} number {{number}}</span></button>{{/button}}</div>'
        )),
        (i.prototype.addButtonTemplate = Hogan.compile('<button type="button" class="govuk-button govuk-button--secondary input-list__button--add">Add another {{listItemName}} ({{entriesLeft}} remaining)</button>')),
        (i.prototype.getSharedAttributes = function () {
            var i,
                n,
                t = this.$wrapper.find("input"),
                a = Hogan.compile(' {{name}}="{{value}}"'),
                s = ["id", "name", "value"],
                r = [],
                e = function (t) {
                    for (var e, i, n = "", s = t.length, r = []; s--; ) for (i = (e = t[s]).length; i--; ) -1 === $.inArray(e[i].name, r) && ((n += a.render({ name: e[i].name, value: e[i].value })), r.push(e[i].name));
                    return n;
                };
            t.each(function (t, e) {
                for (i = e.attributes.length, n = []; i--; ) -1 === $.inArray(e.attributes[i].name, s) && n.push({ name: e.attributes[i].name, value: e.attributes[i].value });
                n.length && r.push(n);
            }),
                (this.sharedAttributes = r.length ? e(r) : "");
        }),
        (i.prototype.getValues = function () {
            (this.entries = []),
                this.$wrapper.find("input").each(
                    function (t, e) {
                        e = $(e).val();
                        this.entries.push(e);
                    }.bind(this)
                );
        }),
        (i.prototype.trimEntries = function () {
            for (var t = this.entries.length, e = []; t--; ) "" !== this.entries[t] ? e.push(this.entries[t]) : t < this.minEntries && e.push("");
            this.entries = e.reverse();
        }),
        (i.prototype.getId = function (t) {
            var e = this.idPattern.replace("list-entry-", "");
            return void 0 === t ? e : e + "-" + t;
        }),
        (i.prototype.bindEvents = function () {
            this.$wrapper.on(
                "click",
                ".input-list__button--remove",
                function (t) {
                    this.removeEntry($(t.target));
                }.bind(this)
            ),
                this.$wrapper.on(
                    "click",
                    ".input-list__button--add",
                    function (t) {
                        this.addEntry();
                    }.bind(this)
                );
        }),
        (i.prototype.shiftFocus = function (t) {
            t = "remove" === t.action ? (1 < t.entryNumberFocused ? t.entryNumberFocused - 1 : 1) : t.entryNumberFocused + 1;
            this.$wrapper
                .find(".list-entry")
                .eq(t - 1)
                .find("input")
                .focus();
        }),
        (i.prototype.removeEntryFromEntries = function (t) {
            for (var e = [], i = 0, n = this.entries.length; i < n; i++) t - 1 !== i && e.push(this.entries[i]);
            this.entries = e;
        }),
        (i.prototype.addEntry = function (t) {
            var e = this.entries.length;
            this.getValues(), this.entries.push(""), this.render(), this.shiftFocus({ action: "add", entryNumberFocused: e });
        }),
        (i.prototype.removeEntry = function (t) {
            t = parseInt(t.find("span").text().match(/\d+/)[0], 10);
            this.getValues(), this.removeEntryFromEntries(t), this.render(), this.shiftFocus({ action: "remove", entryNumberFocused: t });
        }),
        (i.prototype.render = function () {
            this.$wrapper.find(this.elementSelector).remove(),
                $.each(
                    this.entries,
                    function (t, e) {
                        var i = t + 1,
                            t = { id: this.getId(i), number: i, index: t, name: this.getId(i), value: e, listItemName: this.listItemName, sharedAttributes: this.sharedAttributes };
                        1 < i && (t.button = !0), this.$wrapper.append(this.entryTemplate.render(t));
                    }.bind(this)
                ),
                this.entries.length < this.maxEntries && this.$wrapper.append(this.addButtonTemplate.render({ listItemName: this.listItemName, entriesLeft: this.maxEntries - this.entries.length }));
        }),
        (t.ListEntry = function () {
            this.start = function (t) {
                return e.push(new i($(t)));
            };
        });
})(window.GOVUK.NotifyModules);
("use strict");
!(function (t) {
    function l(t) {
        return t.toLowerCase().replace(/ /g, "");
    }
    function c(t) {
        return 0 === t ? "no results" : t + (1 === t ? " result" : " results");
    }
    var u;
    t.LiveSearch = function () {
        this.start = function (t) {
            var a,
                r,
                n,
                s,
                t = $(t),
                e = $("input", t),
                i = $("label", t),
                o = $(".live-search__status", t),
                i =
                    ((a = e),
                    (r = i),
                    (n = o),
                    (s = $(t.data("targets"))),
                    function () {
                        var e = l(a.val()),
                            i = 0;
                        s.each(function () {
                            var t = $(".live-search-relevant", this).text() || $(this).text(),
                                t = -1 < l(t).indexOf(l(e));
                            return $(this).has(":checked").length ? ($(this).show(), void i++) : "" == e ? ($(this).css("display", ""), void i++) : ($(this).toggle(t), void (t && i++));
                        }),
                            "loaded" === u ? ("" !== e && a.attr("aria-label", r.text().trim() + ", " + c(i)), (u = "active")) : (a.removeAttr("aria-label"), n.text(c(i))),
                            "stickAtBottomWhenScrolling" in GOVUK && GOVUK.stickAtBottomWhenScrolling.recalculate();
                    });
            (u = "loaded"), e.on("keyup input", i), i();
        };
    };
})(window.GOVUK.NotifyModules);
("use strict");
!(function (t) {
    t.GOVUK.NotifyModules.TrackError = function () {
        this.start = function (r) {
            "analytics" in t.GOVUK && t.GOVUK.analytics.trackEvent("Error", $(r).data("error-type"), { label: $(r).data("error-label") });
        };
    };
})(window);
("use strict");
!(function () {
    function e(t) {
        return function () {
            t.data("clicked", "");
        };
    }
    $("form").on("submit", function (t) {
        var i = $(this).find(":submit");
        "true" == i.data("clicked") ? t.preventDefault() : (i.data("clicked", "true"), setTimeout(e(i), 1500));
    });
})();
("use strict");
window.GOVUK.NotifyModules.FullscreenTable = function () {
    var t = this;
    (this.start = function (e) {
        var t = this;
        (this.$component = $(e)),
            (this.$table = this.$component.find("table")),
            (this.nativeHeight = this.$component.innerHeight() + 20),
            (this.topOffset = this.$component.offset().top),
            this.insertShims(),
            this.maintainWidth(),
            this.maintainHeight(),
            this.toggleShadows(),
            $(window).on("scroll resize", this.maintainHeight).on("resize", this.maintainWidth),
            this.$scrollableTable
                .on("scroll", this.toggleShadows)
                .on("scroll", this.maintainHeight)
                .on("focus blur", function () {
                    return t.$component.toggleClass("js-focus-style");
                }),
            window.GOVUK.stickAtBottomWhenScrolling && window.GOVUK.stickAtBottomWhenScrolling.recalculate && window.GOVUK.stickAtBottomWhenScrolling.recalculate(),
            this.maintainWidth();
    }),
        (this.insertShims = function () {
            var e = t.$table
                .find("caption")
                .text()
                .toLowerCase()
                .replace(/[^A-Za-z]+/g, "");
            t.$table.find("caption").attr("id", e),
                t.$table.wrap('<div class="fullscreen-scrollable-table" role="region" aria-labelledby="'.concat(e, '" tabindex="0"/>')),
                t.$component
                    .append(
                        t.$component
                            .find(".fullscreen-scrollable-table")
                            .clone()
                            .addClass("fullscreen-fixed-table")
                            .removeClass("fullscreen-scrollable-table")
                            .removeAttr("role aria-labelledby tabindex")
                            .attr("aria-hidden", !0)
                            .find("caption")
                            .removeAttr("id")
                            .closest(".fullscreen-fixed-table")
                    )
                    .append('<div class="fullscreen-right-shadow" />')
                    .after($("<div class='fullscreen-shim'/>").css({ height: t.nativeHeight, top: t.topOffset }))
                    .css("position", "absolute"),
                (t.$scrollableTable = t.$component.find(".fullscreen-scrollable-table")),
                (t.$fixedTable = t.$component.find(".fullscreen-fixed-table"));
        }),
        (this.maintainHeight = function () {
            var e = Math.min($(window).height() - t.topOffset + $(window).scrollTop(), t.nativeHeight);
            t.$scrollableTable.outerHeight(e), t.$fixedTable.outerHeight(e);
        }),
        (this.maintainWidth = function () {
            var e = t.$fixedTable.find(".table-field-index").outerWidth();
            t.$scrollableTable.css({ width: t.$component.parent("main").width() - e, "margin-left": e }), t.$fixedTable.width(e + 4);
        }),
        (this.toggleShadows = function () {
            t.$fixedTable.toggleClass("fullscreen-scrolled-table", 0 < t.$scrollableTable.scrollLeft()),
                t.$component.find(".fullscreen-right-shadow").toggleClass("visible", t.$scrollableTable.scrollLeft() < t.$table.width() - t.$scrollableTable.width()),
                setTimeout(function () {
                    return t.$component.find(".fullscreen-right-shadow").addClass("with-transition");
                }, 3e3);
        });
};
("use strict");
window.GOVUK.NotifyModules.RadiosWithImages = function () {
    (this.handleImageClick = function () {
        var e = this.id,
            e = document.querySelector('[aria-describedby="' + e + '"]');
        (e.checked = !0), e.focus();
    }),
        (this.start = function (e) {
            e = e.get(0);
            e.addEventListener("click", this.handleImageClick), (e.style.cursor = "pointer");
        });
};
("use strict");
!(function (n) {
    var e,
        t,
        a,
        i = ($ = n.jQuery)('.govuk-radios__item input[name="branding_style"]:checked');
    function r() {
        return $.map(arguments, function (n, e) {
            return encodeURI(n[0]) + "=" + encodeURI(n[1]);
        }).join("&");
    }
    i.length &&
        ((i = i.val()),
        (n = $('<div class="govuk-grid-column-full"></div>')),
        (e = $("form")),
        (t = e.data("previewType")),
        (a = $('<iframe src="/_'.concat(t, "?").concat(r(["branding_style", i]), '" class="branding-preview" scrolling="no"></iframe>'))),
        n.append(a),
        e.find(".govuk-grid-row").eq(0).prepend(n),
        e.attr("action", location.pathname.replace(new RegExp("set-".concat(t, "-branding$")), "preview-".concat(t, "-branding"))),
        e.find("button").text("Save"),
        $("fieldset").on("change", 'input[name="branding_style"]', function (n) {
            "branding_style" == (n = $(n.target)).attr("name") && (i = n.val()), a.attr("src", "/_".concat(t, "?").concat(r(["branding_style", i])));
        }));
})(window);
("use strict");
!(function (t) {
    t.ColourPreview = function () {
        var i = this;
        (this.start = function (t) {
            (i.$input = $(t)), i.$input.parent().append((i.$preview = $('<span class="textbox-colour-preview"></span>'))), i.$input.on("input", i.update).trigger("input");
        }),
            (this.update = function () {
                return i.$preview.css("background", (t = i.$input.val().trim()).match(/^#?(?:[0-9A-F]{3}){1,2}$/i) ? ("#" === (t = t).charAt(0) ? t : "#" + t) : "#FFFFFF");
                var t;
            });
    };
})(window.GOVUK.NotifyModules);
("use strict");
window.GOVUK.NotifyModules.TemplateFolderForm = function () {
    var e = this;
    (this.start = function (t) {
        var e = this;
        (this.$form = $(t)),
            this.$form.find("button[value=unknown]").remove(),
            (this.$liveRegionCounter = this.$form.find(".selection-counter")),
            this.$liveRegionCounter.before(this.nothingSelectedButtons),
            this.$liveRegionCounter.before(this.itemsSelectedButtons),
            (this.states = [
                { key: "nothing-selected-buttons", $el: this.$form.find("#nothing_selected"), cancellable: !1 },
                { key: "items-selected-buttons", $el: this.$form.find("#items_selected"), cancellable: !1 },
                {
                    key: "move-to-existing-folder",
                    $el: this.$form.find("#move_to_folder_radios"),
                    cancellable: !0,
                    setFocus: function () {
                        return $("#move_to_folder_radios").focus();
                    },
                    action: "move to folder",
                    description: "Press move to confirm or cancel to close",
                },
                {
                    key: "move-to-new-folder",
                    $el: this.$form.find("#move_to_new_folder_form"),
                    cancellable: !0,
                    setFocus: function () {
                        return $("#move_to_new_folder_form").focus();
                    },
                    action: "move to new folder",
                    description: "Press add to new folder to confirm name or cancel to close",
                },
                {
                    key: "add-new-folder",
                    $el: this.$form.find("#add_new_folder_form"),
                    cancellable: !0,
                    setFocus: function () {
                        return $("#add_new_folder_form").focus();
                    },
                    action: "new folder",
                    description: "Press add new folder to confirm name or cancel to close",
                },
                {
                    key: "add-new-template",
                    $el: this.$form.find("#add_new_template_form"),
                    cancellable: !0,
                    setFocus: function () {
                        return $("#add_new_template_form").focus();
                    },
                    action: "new template",
                    description: "Press continue to confirm selection or cancel to close",
                },
            ]),
            this.states
                .filter(function (t) {
                    return t.cancellable;
                })
                .forEach(function (t) {
                    return e.addCancelButton(t);
                }),
            this.states
                .filter(function (t) {
                    return "items-selected-buttons" === t.key;
                })
                .forEach(function (t) {
                    return e.addClearButton(t);
                }),
            this.states
                .filter(function (t) {
                    return t.setFocus;
                })
                .forEach(function (t) {
                    return t.$el.attr("tabindex", "0");
                }),
            this.addDescriptionsToStates(),
            this.activateStickyElements(),
            (this._lastState = this.$form.data("prev-state")),
            void 0 === this._lastState ? this.selectActionButtons() : ((this.currentState = this._lastState), this.render()),
            this.$form.on("click", "button.govuk-button--secondary", function (t) {
                return e.actionButtonClicked(t);
            }),
            this.$form.on("change", "input[type=checkbox]", function () {
                return e.templateFolderCheckboxChanged();
            });
    }),
        (this.addDescriptionsToStates = function () {
            var n, o;
            $.each(
                this.states.filter(function (t) {
                    return "description" in t;
                }),
                function (t, e) {
                    (n = "".concat(e.key, "__description")), (o = '<p class="govuk-visually-hidden" id="'.concat(n, '">').concat(e.description, "</p>")), e.$el.prepend(o).attr("aria-describedby", n);
                }
            );
        }),
        (this.activateStickyElements = function () {
            var e = "js-will-stick-at-bottom-when-scrolling";
            this.states.forEach(function (t) {
                t.$el
                    .find("." + e)
                    .removeClass(e)
                    .addClass("js-stick-at-bottom-when-scrolling");
            });
        }),
        (this.addCancelButton = function (t) {
            var e = this,
                n = "[value=".concat(t.key, "]"),
                o = this.makeButton("Cancel", {
                    onclick: function () {
                        t.$el.find("input:radio").prop("checked", !1), t.$el.find("input:text").val(""), e.selectActionButtons(n);
                    },
                    cancelSelector: n,
                    nonvisualText: t.action,
                });
            t.$el.find(n).after(o);
        }),
        (this.addClearButton = function (t) {
            var e = this,
                n = this.makeButton("Clear", {
                    onclick: function () {
                        e.$form.find("input:checkbox").prop("checked", !1), e.selectActionButtons("button[value=add-new-template]");
                    },
                    nonvisualText: "selection",
                });
            t.$el.find(".checkbox-list-selected-counter").append(n);
        }),
        (this.makeButton = function (t, e) {
            t = $('<a href=""></a>')
                .html(t)
                .addClass("govuk-link govuk-link--no-visited-state js-cancel")
                .data("target", e.cancelSelector || void 0)
                .attr("tabindex", "0")
                .on("click keydown", function (t) {
                    -1 < [13, 32, void 0].indexOf(t.keyCode) && (t.preventDefault(), e.hasOwnProperty("onclick") && e.onclick());
                });
            return e.hasOwnProperty("nonvisualText") && t.append('<span class="govuk-visually-hidden"> '.concat(e.nonvisualText, "</span>")), t;
        }),
        (this.selectActionButtons = function (t) {
            (this.currentState = "nothing-selected-buttons"), this.templateFolderCheckboxChanged(), t && $(t).focus();
        }),
        (this.stateChanged = function () {
            var t = this.currentState !== this._lastState;
            return (this._lastState = this.currentState), t;
        }),
        (this.$singleNotificationChannel = document.querySelector("div[id=add_new_template_form]").getAttribute("data-channel")),
        (this.$singleChannelService = document.querySelector("div[id=add_new_template_form]").getAttribute("data-service")),
        (this.actionButtonClicked = function (t) {
            t.preventDefault(),
                (this.currentState = $(t.currentTarget).val()),
                "add-new-template" === t.currentTarget.value && this.$singleNotificationChannel
                    ? (window.location = "/services/" + this.$singleChannelService + "/templates/add-" + this.$singleNotificationChannel)
                    : this.stateChanged() && this.render();
        }),
        (this.selectionStatus = {
            default: "Nothing selected",
            selected: function (e) {
                function t(t) {
                    return 0 === e[t] ? "" : 1 === e[t] ? "1 ".concat(t.substring(0, t.length - 1)) : "".concat(e[t], " ").concat(t);
                }
                var n = [];
                return 0 < e.templates && n.push(t("templates")), 0 < e.folders && n.push(t("folders")), n.join(", ") + " selected";
            },
            update: function (t) {
                t = 0 < t.total ? e.selectionStatus.selected(t) : e.selectionStatus.default;
                $(".checkbox-list-selected-counter__count").html(t), e.$liveRegionCounter.html(t);
            },
        }),
        (this.templateFolderCheckboxChanged = function () {
            var t = this.countSelectedCheckboxes();
            "nothing-selected-buttons" === this.currentState && 0 !== t.total
                ? (this.currentState = "items-selected-buttons")
                : "items-selected-buttons" === this.currentState && 0 === t.total && (this.currentState = "nothing-selected-buttons"),
                this.stateChanged() && this.render(),
                this.selectionStatus.update(t),
                $(".checkbox-list-selected-counter").toggle(this.hasCheckboxes());
        }),
        (this.hasCheckboxes = function () {
            return !!this.$form.find("input:checkbox").length;
        }),
        (this.countSelectedCheckboxes = function () {
            var t = this.$form.find("input:checkbox:checked");
            return {
                templates: t.filter(function (t, e) {
                    return 0 < $(e).siblings(".template-list-template").length;
                }).length,
                folders: t.filter(function (t, e) {
                    return 0 < $(e).siblings(".template-list-folder").length;
                }).length,
                total: t.length,
            };
        }),
        (this.render = function () {
            var e = this,
                t = "default",
                n = this.states.filter(function (t) {
                    return t.key === e.currentState;
                })[0];
            this.states.forEach(function (t) {
                return t.key === e.currentState ? e.$liveRegionCounter.before(t.$el) : t.$el.detach();
            }),
                -1 !== ["move-to-existing-folder", "add-new-template"].indexOf(this.currentState) && (t = "dialog"),
                GOVUK.stickAtBottomWhenScrolling.setMode(t),
                GOVUK.stickAtBottomWhenScrolling.recalculate(),
                n && "setFocus" in n && ((t = $(window).scrollTop()), n.setFocus(), $(window).scrollTop(t));
        }),
        (this.nothingSelectedButtons = $(
            '\n      <div id="nothing_selected">\n        <div class="js-stick-at-bottom-when-scrolling">\n          <button type="button" class="govuk-button govuk-button--secondary govuk-!-margin-right-3 govuk-!-margin-bottom-1" value="add-new-template" '
                .concat(
                    this.$singleNotificationChannel ? "" : 'aria-expanded="false"',
                    '>\n            New template\n          </button>\n          <button type="button" class="govuk-button govuk-button--secondary govuk-!-margin-bottom-1" value="add-new-folder" aria-expanded="false">New folder</button>\n          <div class="checkbox-list-selected-counter">\n            <span class="checkbox-list-selected-counter__count" aria-hidden="true">\n              '
                )
                .concat(this.selectionStatus.default, "\n            </span>\n          </div>\n        </div>\n      </div>\n    ")
        ).get(0)),
        (this.itemsSelectedButtons = $(
            '\n      <div id="items_selected">\n        <div class="js-stick-at-bottom-when-scrolling">\n          <button type="button" class="govuk-button govuk-button--secondary govuk-!-margin-right-3 govuk-!-margin-bottom-1" value="move-to-existing-folder" aria-expanded="false">\n            Move<span class="govuk-visually-hidden"> selection to folder</span>\n          </button>\n          <button type="button" class="govuk-button govuk-button--secondary govuk-!-margin-bottom-1" value="move-to-new-folder" aria-expanded="false">Add to new folder</button>\n          <div class="checkbox-list-selected-counter" aria-hidden="true">\n            <span class="checkbox-list-selected-counter__count" aria-hidden="true">\n              '.concat(
                this.selectionStatus.selected(1),
                "\n            </span>\n          </div>\n        </div>\n      </div>\n    "
            )
        ).get(0));
};
("use strict");
window.GOVUK.NotifyModules.AddBrandingOptionsForm = function () {
    var e = this;
    (this.start = function (t) {
        var e = this;
        (this.$form = $(t)),
            (this.$liveRegionCounter = this.$form.find(".selection-counter")),
            this.$liveRegionCounter.before(this.nothingSelectedHint),
            this.$liveRegionCounter.before(this.itemsSelectedHint),
            (this.states = [
                { key: "nothing-selected-hint", $el: this.$form.find("#nothing_selected"), cancellable: !1 },
                { key: "items-selected-hint", $el: this.$form.find("#items_selected"), cancellable: !1 },
            ]),
            this.states
                .filter(function (t) {
                    return "items-selected-hint" === t.key;
                })
                .forEach(function (t) {
                    return e.addClearButton(t);
                }),
            (this._lastState = this.$form.data("prev-state")),
            void 0 === this._lastState ? this.showInitialState() : ((this.currentState = this._lastState), this.render()),
            this.$form.on("change", "input[type=checkbox]", function () {
                return e.BrandingOptionCheckboxChanged();
            });
    }),
        (this.addClearButton = function (t) {
            var e = this,
                n = this.makeButton("Clear", {
                    onclick: function () {
                        e.$form.find("input:checkbox").prop("checked", !1), e.$form.find("input:checkbox").eq(0).focus(), e.showInitialState();
                    },
                    nonvisualText: "selection",
                });
            t.$el.find(".checkbox-list-selected-counter").append(n);
        }),
        (this.makeButton = function (t, e) {
            t = $('<a href=""></a>')
                .html(t)
                .addClass("govuk-link govuk-link--no-visited-state js-cancel")
                .attr("tabindex", "0")
                .on("click keydown", function (t) {
                    -1 < [13, 32, void 0].indexOf(t.keyCode) && (t.preventDefault(), e.hasOwnProperty("onclick") && e.onclick());
                });
            return e.hasOwnProperty("nonvisualText") && t.append('<span class="govuk-visually-hidden"> '.concat(e.nonvisualText, "</span>")), t;
        }),
        (this.showInitialState = function () {
            (this.currentState = "nothing-selected-hint"), this.BrandingOptionCheckboxChanged();
        }),
        (this.stateChanged = function () {
            var t = this.currentState !== this._lastState;
            return (this._lastState = this.currentState), t;
        }),
        (this.selectionStatus = {
            default: "Nothing selected",
            selected: function (t) {
                var e,
                    n = [];
                return 0 < t.options && n.push(0 === t[(e = "options")] ? "" : 1 === t[e] ? "1 ".concat(e.substring(0, e.length - 1)) : "".concat(t[e], " ").concat(e)), n.join(", ") + " selected";
            },
            update: function (t) {
                t = 0 < t.options ? e.selectionStatus.selected(t) : e.selectionStatus.default;
                $(".checkbox-list-selected-counter__count").html(t), e.$liveRegionCounter.html(t);
            },
        }),
        (this.BrandingOptionCheckboxChanged = function () {
            var t = this.countSelectedCheckboxes();
            "nothing-selected-hint" === this.currentState && 0 !== t.options ? (this.currentState = "items-selected-hint") : "items-selected-hint" === this.currentState && 0 === t.options && (this.currentState = "nothing-selected-hint"),
                this.stateChanged() && this.render(),
                this.selectionStatus.update(t);
        }),
        (this.countSelectedCheckboxes = function () {
            return { options: this.$form.find("input:checkbox:checked").length };
        }),
        (this.render = function () {
            var e = this;
            this.states.filter(function (t) {
                return t.key === e.currentState;
            })[0];
            this.states.forEach(function (t) {
                return t.key === e.currentState ? e.$liveRegionCounter.before(t.$el) : t.$el.detach();
            });
        }),
        (this.nothingSelectedHint = $(
            '\n      <div id="nothing_selected">\n        <div class="checkbox-list-selected-counter">\n          <span class="checkbox-list-selected-counter__count" aria-hidden="true">\n            '.concat(
                this.selectionStatus.default,
                "\n          </span>\n        </div>\n      </div>\n    "
            )
        ).get(0)),
        (this.itemsSelectedHint = $(
            '\n      <div id="items_selected">\n        <div class="checkbox-list-selected-counter">\n          <span class="checkbox-list-selected-counter__count" aria-hidden="true">\n            '.concat(
                this.selectionStatus.selected(1),
                "\n          </span>\n        </div>\n      </div>\n    "
            )
        ).get(0));
};
("use strict");
!(function () {
    var e = window.GOVUK;
    function i(t) {
        (this.module = t), (this.$el = t.$formGroup.find(".selection-summary").first()), (this.fieldLabel = t.fieldLabel), (this.total = t.total), this.addContent(), this.update(t.getSelection());
    }
    function o(t) {
        (this.module = t), (this.fieldLabel = t.fieldLabel), (this.fieldsetId = t.$fieldset.attr("id")), (this.$el = this.getEl(this.module.expanded)), this.module.$formGroup.append(this.$el);
    }
    function t() {}
    (i.prototype.templates = {
        all: function (t, e, i) {
            return "All ".concat(i, "s");
        },
        some: function (t, e, i) {
            return "".concat(t, " of ").concat(e, " ").concat(i, "s");
        },
        none: function (t, e, i) {
            return { folder: "No folders (only templates outside a folder)", "team member": "No team members (only you)" }[i] || "No ".concat(i, "s");
        },
    }),
        (i.prototype.addContent = function () {
            var t = this.module.$formGroup.find(".govuk-hint");
            (this.$text = $('<p class="selection-summary__text" />')), "folder" === this.fieldLabel && this.$text.addClass("selection-summary__text--folders"), this.$el.attr("id", t.attr("id")), this.$el.append(this.$text), t.remove();
        }),
        (i.prototype.update = function (t) {
            var e = t === this.total ? "all" : 0 < t ? "some" : "none";
            this.$text.html(this.templates[e](t, this.total, this.fieldLabel));
        }),
        (i.prototype.bindEvents = function () {
            var e = this;
            this.$el.on("blur", function (t) {
                return $(e).attr("tabindex", "-1");
            });
        }),
        (o.prototype.buttonContent = {
            change: function (t) {
                return "Choose ".concat(t, "s");
            },
            done: function (t) {
                return 'Done<span class="govuk-visually-hidden"> choosing '.concat(t, "s</span>");
            },
        }),
        (o.prototype.getEl = function (t) {
            var e = this.buttonContent[t ? "done" : "change"](this.fieldLabel);
            return $(
                '<div class="selection-footer'
                    .concat(
                        t ? " js-stick-at-bottom-when-scrolling" : "",
                        '">\n              <button\n                type="button"\n                class="govuk-button govuk-button--secondary selection-footer__button"\n                aria-expanded="'
                    )
                    .concat(t ? "true" : "false", '"\n                aria-controls="')
                    .concat(this.fieldsetId, '">\n              ')
                    .concat(e, "\n              </button>\n            </div>")
            );
        }),
        (o.prototype.update = function (t) {
            this.$el.remove(), (this.$el = this.getEl(t)), this.module.$formGroup.append(this.$el), e.stickAtBottomWhenScrolling.recalculate();
        }),
        (t.prototype._focusTextElement = function (t) {
            t.attr("tabindex", "-1").focus();
        }),
        (t.prototype.start = function (t) {
            (this.$component = $(t)),
                (this.$formGroup = this.$component.find(".govuk-form-group").first()),
                (this.$fieldset = this.$formGroup.find("fieldset").first()),
                (this.$checkboxes = this.$fieldset.find("input[type=checkbox]")),
                (this.fieldLabel = this.$component.data("fieldLabel")),
                (this.total = this.$checkboxes.length),
                (this.legendText = this.$fieldset.find("legend").first().text().trim()),
                (this.expanded = !1),
                this.addHeadingHideLegend(),
                (this.footer = new o(this)),
                (this.summary = new i(this)),
                this.$fieldset.before(this.summary.$el),
                this.$formGroup.addClass("selection-wrapper"),
                this.$fieldset.addClass("selection-content"),
                this.$fieldset.hide(),
                this.bindEvents();
        }),
        (t.prototype.getSelection = function () {
            return this.$checkboxes.filter(":checked").length;
        }),
        (t.prototype.addHeadingHideLegend = function () {
            var t = this.$component.data("heading-level") || "2";
            (this.$heading = $("<h".concat(t, ' class="heading-small">').concat(this.legendText, "</h").concat(t, ">"))), this.$fieldset.before(this.$heading), this.$fieldset.find("legend").addClass("govuk-visually-hidden");
        }),
        (t.prototype.expand = function (t) {
            void 0 !== t && t.preventDefault(), this.expanded || (this.$fieldset.show(), (this.expanded = !0), this.summary.update(this.getSelection()), this.footer.update(this.expanded)), this._focusTextElement(this.$fieldset);
        }),
        (t.prototype.collapse = function (t) {
            void 0 !== t && t.preventDefault(), this.expanded && (this.$fieldset.hide(), (this.expanded = !1), this.summary.update(this.getSelection()), this.footer.update(this.expanded)), this._focusTextElement(this.summary.$text);
        }),
        (t.prototype.handleClick = function (t) {
            this.expanded ? this.collapse(t) : this.expand(t);
        }),
        (t.prototype.handleSelection = function (t) {
            this.summary.update(this.getSelection(), this.total, this.fieldLabel);
        }),
        (t.prototype.bindEvents = function () {
            this.$formGroup.on("click", ".govuk-button", this.handleClick.bind(this)), this.$checkboxes.on("click", this.handleSelection.bind(this)), this.summary.bindEvents(this);
        }),
        (e.NotifyModules.CollapsibleCheckboxes = t);
})();
("use strict");
!(function (r) {
    r.GOVUK.NotifyModules.RegisterSecurityKey = function () {
        this.start = function (n) {
            $(n).on("click", function (t) {
                t.preventDefault(),
                    r.GOVUK.ErrorBanner.hideBanner(),
                    fetch("/webauthn/register")
                        .then(function (t) {
                            if (t.ok) return t.arrayBuffer();
                            throw Error(t.statusText);
                        })
                        .then(function (t) {
                            t = r.CBOR.decode(t);
                            return r.navigator.credentials.create(t);
                        })
                        .then(function (t) {
                            return (
                                (t = t.response),
                                (e = n.data("csrfToken")),
                                fetch("/webauthn/register", {
                                    method: "POST",
                                    headers: { "X-CSRFToken": e },
                                    body: r.CBOR.encode({ attestationObject: new Uint8Array(t.attestationObject), clientDataJSON: new Uint8Array(t.clientDataJSON) }),
                                })
                            );
                            var e;
                        })
                        .then(function (t) {
                            if (!t.ok) throw Error(t.statusText);
                            r.location.reload();
                        })
                        .catch(function (t) {
                            console.error(t), r.GOVUK.ErrorBanner.showBanner();
                        });
            });
        };
    };
})(window);
("use strict");
!(function (a) {
    a.GOVUK.NotifyModules.AuthenticateSecurityKey = function () {
        this.start = function (r) {
            $(r).on("click", function (e) {
                e.preventDefault(),
                    a.GOVUK.ErrorBanner.hideBanner(),
                    fetch("/webauthn/authenticate")
                        .then(function (e) {
                            if (e.ok) return e.arrayBuffer();
                            throw Error(e.statusText);
                        })
                        .then(function (e) {
                            e = a.CBOR.decode(e);
                            return a.navigator.credentials.get(e);
                        })
                        .then(function (e) {
                            var t = new URL(a.location.href),
                                n = new URL("/webauthn/authenticate", a.location.href),
                                t = t.searchParams.get("next");
                            return (
                                t && n.searchParams.set("next", t),
                                fetch(n, {
                                    method: "POST",
                                    headers: { "X-CSRFToken": r.data("csrfToken") },
                                    body: a.CBOR.encode({
                                        credentialId: new Uint8Array(e.rawId),
                                        authenticatorData: new Uint8Array(e.response.authenticatorData),
                                        signature: new Uint8Array(e.response.signature),
                                        clientDataJSON: new Uint8Array(e.response.clientDataJSON),
                                    }),
                                })
                            );
                        })
                        .then(function (e) {
                            if (e.ok) return e.arrayBuffer();
                            throw Error(e.statusText);
                        })
                        .then(function (e) {
                            return Promise.resolve(a.CBOR.decode(e));
                        })
                        .then(function (e) {
                            a.location.assign(e.redirect_url);
                        })
                        .catch(function (e) {
                            console.error(e), a.GOVUK.ErrorBanner.showBanner();
                        });
            });
        };
    };
})(window);
("use strict");
window.GOVUK.NotifyModules.UpdateStatus = function () {
    var u = this;
    (this.start = function (t) {
        var e,
            o,
            n,
            i,
            r,
            a = "update-status";
        (u.$component = $(t)),
            (u.$textbox = $("#" + u.$component.data("target"))),
            u.$component.attr("id", a),
            u.$textbox
                .attr("aria-describedby", (u.$textbox.attr("aria-describedby") || "") + (u.$textbox.attr("aria-describedby") ? " " : "") + a)
                .on(
                    "input",
                    ((e = u.update),
                    (r = i = !(o = 150)),
                    function () {
                        var t = arguments,
                            a = this;
                        i ? (r = !0) : (e.apply(a, t), (i = !0)),
                            clearTimeout(n),
                            (n = setTimeout(function () {
                                (i = !1), r && e.apply(a, t), (r = !1);
                            }, o));
                    })
                )
                .trigger("input");
    }),
        (this.update = function () {
            var a;
            $.ajax(u.$component.data("updates-url"), { method: "post", data: u.$textbox.parents("form").serialize() })
                .done(
                    ((a = u.$component),
                    function (t) {
                        return a.html(t.html);
                    })
                )
                .fail(function () {});
        });
};
("use strict");
window.GOVUK.ErrorBanner = {
    hideBanner: function () {
        return $(".banner-dangerous").addClass("govuk-!-display-none");
    },
    showBanner: function () {
        return $(".banner-dangerous").removeClass("govuk-!-display-none").trigger("focus");
    },
};
("use strict");
window.GOVUK.NotifyModules.Homepage = function () {
    this.start = function (t) {
        var e = $(t),
            n = 0,
            o = null;
        e.on("click", function () {
            5 == ++n && e.toggleClass("product-page-intro-wrapper--alternative"),
                clearTimeout(o),
                (o = setTimeout(function () {
                    return (n = 0);
                }, 1500));
        });
    };
};
("use strict");
window.GOVUK.Frontend.initAll();
var consentData = window.GOVUK.getConsentCookie(),
    showHideContent =
        (window.GOVUK.NotifyModules.CookieBanner.clearOldCookies(consentData),
        window.GOVUK.hasConsentFor("analytics", consentData) && window.GOVUK.initAnalytics(),
        $(function () {
            return $("time.timeago").timeago();
        }),
        $(function () {
            return GOVUK.stickAtTopWhenScrolling.init();
        }),
        $(function () {
            return GOVUK.stickAtBottomWhenScrolling.init();
        }),
        new GOVUK.ShowHideContent());
showHideContent.init(),
    $(function () {
        return GOVUK.notifyModules.start();
    }),
    $(function () {
        return $(".error-message, .govuk-error-message").eq(0).parent("label").next("input").trigger("focus");
    }),
    $(function () {
        return $(".banner-dangerous").eq(0).trigger("focus");
    }),
    $(".js-mark-focus-on-parent").on("focus blur", "*", function (n) {
        ($target = $(n.target)), "focusin" === n.type ? $target.parent().addClass("js-child-has-focus") : $target.parent().removeClass("js-child-has-focus");
    });

  var Hogan={};!function(t){function l(t,n,e){var i;return n&&"object"==typeof n&&(void 0!==n[t]?i=n[t]:e&&n.get&&"function"==typeof n.get&&(i=n.get(t))),i}t.Template=function(t,n,e,i){this.r=(t=t||{}).code||this.r,this.c=e,this.options=i||{},this.text=n||"",this.partials=t.partials||{},this.subs=t.subs||{},this.buf=""},t.Template.prototype={r:function(t,n,e){return""},v:function(t){return t=o(t),a.test(t)?t.replace(n,"&amp;").replace(e,"&lt;").replace(i,"&gt;").replace(r,"&#39;").replace(s,"&quot;"):t},t:o,render:function(t,n,e){return this.ri([t],n||{},e)},ri:function(t,n,e){return this.r(t,n,e)},ep:function(t,n){var e=this.partials[t],i=n[e.name];if(e.instance&&e.base==i)return e.instance;if("string"==typeof i){if(!this.c)throw new Error("No compiler available.");i=this.c.compile(i,this.options)}if(!i)return null;if(this.partials[t].base=i,e.subs){for(key in n.stackText||(n.stackText={}),e.subs)n.stackText[key]||(n.stackText[key]=void 0!==this.activeSub&&n.stackText[this.activeSub]?n.stackText[this.activeSub]:this.text);i=function(t,n,e,i,r,s){function a(){}function o(){}o.prototype=(a.prototype=t).subs;var u,c=new a;for(u in c.subs=new o,c.subsText={},c.buf="",i=i||{},c.stackSubs=i,c.subsText=s,n)i[u]||(i[u]=n[u]);for(u in i)c.subs[u]=i[u];for(u in r=r||{},c.stackPartials=r,e)r[u]||(r[u]=e[u]);for(u in r)c.partials[u]=r[u];return c}(i,e.subs,e.partials,this.stackSubs,this.stackPartials,n.stackText)}return this.partials[t].instance=i},rp:function(t,n,e,i){t=this.ep(t,e);return t?t.ri(n,e,i):""},rs:function(t,n,e){var i=t[t.length-1];if(f(i))for(var r=0;r<i.length;r++)t.push(i[r]),e(t,n,this),t.pop();else e(t,n,this)},s:function(t,n,e,i,r,s,a){return(!f(t)||0!==t.length)&&(e=!!(t="function"==typeof t?this.ms(t,n,e,i,r,s,a):t),!i&&e&&n&&n.push("object"==typeof t?t:n[n.length-1]),e)},d:function(t,n,e,i){var r,s=t.split("."),a=this.f(s[0],n,e,i),o=this.options.modelGet,u=null;if("."===t&&f(n[n.length-2]))a=n[n.length-1];else for(var c=1;c<s.length;c++)a=void 0!==(r=l(s[c],a,o))?(u=a,r):"";return!(i&&!a)&&(i||"function"!=typeof a||(n.push(u),a=this.mv(a,n,e),n.pop()),a)},f:function(t,n,e,i){for(var r=!1,s=!1,a=this.options.modelGet,o=n.length-1;0<=o;o--)if(void 0!==(r=l(t,n[o],a))){s=!0;break}return s?i||"function"!=typeof r?r:this.mv(r,n,e):!i&&""},ls:function(t,n,e,i,r){var s=this.options.delimiters;return this.options.delimiters=r,this.b(this.ct(o(t.call(n,i)),n,e)),this.options.delimiters=s,!1},ct:function(t,n,e){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(t,this.options).render(n,e)},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},ms:function(t,n,e,i,r,s,a){n=n[n.length-1],t=t.call(n);return"function"==typeof t?!!i||(i=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(t,n,e,i.substring(r,s),a)):t},mv:function(t,n,e){n=n[n.length-1],t=t.call(n);return"function"==typeof t?this.ct(o(t.call(n)),n,e):t},sub:function(t,n,e,i){var r=this.subs[t];r&&(this.activeSub=t,r(n,e,this,i),this.activeSub=!1)}};var n=/&/g,e=/</g,i=/>/g,r=/\'/g,s=/\"/g,a=/[&<>\"\']/;function o(t){return String(null==t?"":t)}var f=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}("undefined"!=typeof exports?exports:Hogan),function(x){var w=/\S/,n=/\"/g,e=/\n/g,i=/\r/g,r=/\\/g,s=/\u2028/,a=/\u2029/;function k(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function y(t,n,e){if(n.charAt(e)==t.charAt(0)){for(var i=1,r=t.length;i<r;i++)if(n.charAt(e+i)!=t.charAt(i))return;return 1}}x.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},x.scan=function(t,n){var e,i,r,s,a,o=t.length,u=0,c=null,l="",f=[],h=!1,p=0,g=0,b="{{",d="}}";function v(){0<l.length&&(f.push({tag:"_t",text:new String(l)}),l="")}function m(t,n){if(v(),t&&function(){for(var t=!0,n=g;n<f.length;n++)if(!(t=x.tags[f[n].tag]<x.tags._v||"_t"==f[n].tag&&null===f[n].text.match(w)))return;return t}())for(var e,i=g;i<f.length;i++)f[i].text&&((e=f[i+1])&&">"==e.tag&&(e.indent=f[i].text.toString()),f.splice(i,1));else n||f.push({tag:"\n"});h=!1,g=f.length}for(n&&(n=n.split(" "),b=n[0],d=n[1]),p=0;p<o;p++)0==u?y(b,t,p)?(--p,v(),u=1):"\n"==t.charAt(p)?m(h):l+=t.charAt(p):1==u?(p+=b.length-1,u="="==(c=(e=x.tags[t.charAt(p+1)])?t.charAt(p+1):"_v")?(r=p,a=s=void 0,s="="+d,a=(i=t).indexOf(s,r),i=k(i.substring(i.indexOf("=",r)+1,a)).split(" "),b=i[0],d=i[i.length-1],p=a+s.length-1,0):(e&&p++,2),h=p):y(d,t,p)?(f.push({tag:c,n:k(l),otag:b,ctag:d,i:"/"==c?h-b.length:p+d.length}),l="",p+=d.length-1,u=0,"{"==c&&("}}"==d?p++:"}"===(r=f[f.length-1]).n.substr(r.n.length-1)&&(r.n=r.n.substring(0,r.n.length-1)))):l+=t.charAt(p);return m(h,!0),f};var u={_t:!0,"\n":!0,$:!0,"/":!0};function c(t,n,e,i){for(var r=[],s=null,a=null,o=e[e.length-1];0<t.length;){if(a=t.shift(),o&&"<"==o.tag&&!(a.tag in u))throw new Error("Illegal content in < super tag.");if(x.tags[a.tag]<=x.tags.$||function(t,n){for(var e=0,i=n.length;e<i;e++)if(n[e].o==t.n)return t.tag="#"}(a,i))e.push(a),a.nodes=c(t,a.tag,e,i);else{if("/"==a.tag){if(0===e.length)throw new Error("Closing tag without opener: /"+a.n);if(s=e.pop(),a.n==s.n||function(t,n,e){for(var i=0,r=e.length;i<r;i++)if(e[i].c==t&&e[i].o==n)return 1}(a.n,s.n,i))return s.end=a.i,r;throw new Error("Nesting error: "+s.n+" vs. "+a.n)}"\n"==a.tag&&(a.last=0==t.length||"\n"==t[0].tag)}r.push(a)}if(0<e.length)throw new Error("missing closing tag: "+e.pop().n);return r}function o(t){var n,e=[];for(n in t.partials)e.push('"'+f(n)+'":{name:"'+f(t.partials[n].name)+'", '+o(t.partials[n])+"}");return"partials: {"+e.join(",")+"}, subs: "+function(t){var n,e=[];for(n in t)e.push('"'+f(n)+'": function(c,p,t,i) {'+t[n]+"}");return"{ "+e.join(",")+" }"}(t.subs)}x.stringify=function(t,n,e){return"{code: function (c,p,i) { "+x.wrapMain(t.code)+" },"+o(t)+"}"};var l=0;function f(t){return t.replace(r,"\\\\").replace(n,'\\"').replace(e,"\\n").replace(i,"\\r").replace(s,"\\u2028").replace(a,"\\u2029")}function h(t){return~t.indexOf(".")?"d":"f"}function p(t,n){var e="<"+(n.prefix||"")+t.n+l++;return n.partials[e]={name:t.n,partials:{}},n.code+='t.b(t.rp("'+f(e)+'",c,p,"'+(t.indent||"")+'"));',e}function t(t,n){n.code+="t.b(t.t(t."+h(t.n)+'("'+f(t.n)+'",c,p,0)));'}function g(t){return"t.b("+t+");"}x.generate=function(t,n,e){l=0;var i={code:"",subs:{},partials:{}};return x.walk(t,i),e.asString?this.stringify(i,n,e):this.makeTemplate(i,n,e)},x.wrapMain=function(t){return'var t=this;t.b(i=i||"");'+t+"return t.fl();"},x.template=x.Template,x.makeTemplate=function(t,n,e){var i=this.makePartials(t);return i.code=new Function("c","p","i",this.wrapMain(t.code)),new this.template(i,n,this,e)},x.makePartials=function(t){var n,e={subs:{},partials:t.partials,name:t.name};for(n in e.partials)e.partials[n]=this.makePartials(e.partials[n]);for(n in t.subs)e.subs[n]=new Function("c","p","t","i",t.subs[n]);return e},x.codegen={"#":function(t,n){n.code+="if(t.s(t."+h(t.n)+'("'+f(t.n)+'",c,p,1),c,p,0,'+t.i+","+t.end+',"'+t.otag+" "+t.ctag+'")){t.rs(c,p,function(c,p,t){',x.walk(t.nodes,n),n.code+="});c.pop();}"},"^":function(t,n){n.code+="if(!t.s(t."+h(t.n)+'("'+f(t.n)+'",c,p,1),c,p,1,0,0,"")){',x.walk(t.nodes,n),n.code+="};"},">":p,"<":function(t,n){var e={partials:{},code:"",subs:{},inPartial:!0},t=(x.walk(t.nodes,e),n.partials[p(t,n)]);t.subs=e.subs,t.partials=e.partials},$:function(t,n){var e={subs:{},code:"",partials:n.partials,prefix:t.n};x.walk(t.nodes,e),n.subs[t.n]=e.code,n.inPartial||(n.code+='t.sub("'+f(t.n)+'",c,p,i);')},"\n":function(t,n){n.code+=g('"\\n"'+(t.last?"":" + i"))},_v:function(t,n){n.code+="t.b(t.v(t."+h(t.n)+'("'+f(t.n)+'",c,p,0)));'},_t:function(t,n){n.code+=g('"'+f(t.text)+'"')},"{":t,"&":t},x.walk=function(t,n){for(var e,i=0,r=t.length;i<r;i++)(e=x.codegen[t[i].tag])&&e(t[i],n);return n},x.parse=function(t,n,e){return c(t,0,[],(e=e||{}).sectionTags||[])},x.cache={},x.cacheKey=function(t,n){return[t,!!n.asString,!!n.disableLambda,n.delimiters,!!n.modelGet].join("||")},x.compile=function(t,n){var e=x.cacheKey(t,n=n||{}),i=this.cache[e];if(i){var r,s=i.partials;for(r in s)delete s[r].instance;return i}return i=this.generate(this.parse(this.scan(t,n.delimiters),t,n),t,n),this.cache[e]=i}}("undefined"!=typeof exports?exports:Hogan);
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(e.document)return t(e);throw new Error("jQuery requires a window with a document")}:t(e)}("undefined"!=typeof window?window:this,function(T,R){"use strict";function v(e){return"function"==typeof e&&"number"!=typeof e.nodeType}function g(e){return null!=e&&e===e.window}var t=[],M=Object.getPrototypeOf,s=t.slice,I=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},W=t.push,F=t.indexOf,B={},$=B.toString,_=B.hasOwnProperty,z=_.toString,U=z.call(Object),y={},C=T.document,X={type:!0,src:!0,nonce:!0,noModule:!0};function V(e,t,n){var r,i,o=(n=n||C).createElement("script");if(o.text=e,t)for(r in X)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function h(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?B[$.call(e)]||"object":typeof e}var e="3.5.0",E=function(e,t){return new E.fn.init(e,t)};function G(e){var t=!!e&&"length"in e&&e.length,n=h(e);return!v(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:e,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){e=E.merge(this.constructor(),e);return e.prevObject=this,e},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,e=+e+(e<0?t:0);return this.pushStack(0<=e&&e<t?[this[e]]:[])},end:function(){return this.prevObject||this.constructor()},push:W,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o=arguments[0]||{},a=1,s=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[a]||{},a++),"object"==typeof o||v(o)||(o={}),a===s&&(o=this,a--);a<s;a++)if(null!=(e=arguments[a]))for(t in e)n=e[t],"__proto__"!==t&&o!==n&&(u&&n&&(E.isPlainObject(n)||(r=Array.isArray(n)))?(i=o[t],i=r&&!Array.isArray(i)?[]:r||E.isPlainObject(i)?i:{},r=!1,o[t]=E.extend(u,i,n)):void 0!==n&&(o[t]=n));return o},E.extend({expando:"jQuery"+(e+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){return!(!e||"[object Object]"!==$.call(e)||(e=M(e))&&("function"!=typeof(e=_.call(e,"constructor")&&e.constructor)||z.call(e)!==U))},isEmptyObject:function(e){for(var t in e)return!1;return!0},globalEval:function(e,t,n){V(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(G(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){t=t||[];return null!=e&&(G(Object(e))?E.merge(t,"string"==typeof e?[e]:e):W.call(t,e)),t},inArray:function(e,t,n){return null==t?-1:F.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!=a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(G(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return I(a)},guid:1,support:y}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){B["[object "+t+"]"]=t.toLowerCase()});function r(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r}function Y(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}var e=function(R){function f(e,t){return e="0x"+e.slice(1)-65536,t||(e<0?String.fromCharCode(65536+e):String.fromCharCode(e>>10|55296,1023&e|56320))}function M(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}function I(){T()}var e,p,b,o,W,d,F,B,w,u,l,T,C,n,E,h,r,i,g,S="sizzle"+ +new Date,c=R.document,k=0,$=0,_=q(),z=q(),U=q(),y=q(),X=function(e,t){return e===t&&(l=!0),0},V={}.hasOwnProperty,t=[],G=t.pop,Y=t.push,A=t.push,Q=t.slice,v=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",a="[\\x20\\t\\r\\n\\f]",s="(?:\\\\[\\da-fA-F]{1,6}"+a+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",K="\\["+a+"*("+s+")(?:"+a+"*([*^$|!~]?=)"+a+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+s+"))|)"+a+"*\\]",Z=":("+s+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+K+")*)|.*)\\)|)",ee=new RegExp(a+"+","g"),m=new RegExp("^"+a+"+|((?:^|[^\\\\])(?:\\\\.)*)"+a+"+$","g"),te=new RegExp("^"+a+"*,"+a+"*"),ne=new RegExp("^"+a+"*([>+~]|"+a+")"+a+"*"),re=new RegExp(a+"|>"),ie=new RegExp(Z),oe=new RegExp("^"+s+"$"),x={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),TAG:new RegExp("^("+s+"|[*])"),ATTR:new RegExp("^"+K),PSEUDO:new RegExp("^"+Z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+a+"*(even|odd|(([+-]|)(\\d*)n|)"+a+"*(?:([+-]|)"+a+"*(\\d+)|))"+a+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+a+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+a+"*((?:-\\d)?\\d*)"+a+"*\\)|)(?=[^-]|$)","i")},ae=/HTML$/i,se=/^(?:input|select|textarea|button)$/i,ue=/^h\d$/i,N=/^[^{]+\{\s*\[native \w/,le=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ce=/[+~]/,D=new RegExp("\\\\[\\da-fA-F]{1,6}"+a+"?|\\\\([^\\r\\n\\f])","g"),fe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,pe=ve(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{A.apply(t=Q.call(c.childNodes),c.childNodes),t[c.childNodes.length].nodeType}catch(e){A={apply:t.length?function(e,t){Y.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function j(e,t,n,r){var i,o,a,s,u,l,c=t&&t.ownerDocument,f=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==f&&9!==f&&11!==f)return n;if(!r&&(T(t),t=t||C,E)){if(11!==f&&(s=le.exec(e)))if(i=s[1]){if(9===f){if(!(l=t.getElementById(i)))return n;if(l.id===i)return n.push(l),n}else if(c&&(l=c.getElementById(i))&&g(t,l)&&l.id===i)return n.push(l),n}else{if(s[2])return A.apply(n,t.getElementsByTagName(e)),n;if((i=s[3])&&p.getElementsByClassName&&t.getElementsByClassName)return A.apply(n,t.getElementsByClassName(i)),n}if(p.qsa&&!y[e+" "]&&(!h||!h.test(e))&&(1!==f||"object"!==t.nodeName.toLowerCase())){if(l=e,c=t,1===f&&(re.test(e)||ne.test(e))){for((c=ce.test(e)&&ye(t.parentNode)||t)===t&&p.scope||((a=t.getAttribute("id"))?a=a.replace(fe,M):t.setAttribute("id",a=S)),o=(u=d(e)).length;o--;)u[o]=(a?"#"+a:":scope")+" "+P(u[o]);l=u.join(",")}try{return A.apply(n,c.querySelectorAll(l)),n}catch(t){y(e,!0)}finally{a===S&&t.removeAttribute("id")}}}return B(e.replace(m,"$1"),t,n,r)}function q(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function L(e){return e[S]=!0,e}function H(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t)}}function de(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function he(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&pe(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function O(a){return L(function(o){return o=+o,L(function(e,t){for(var n,r=a([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in p=j.support={},W=j.isXML=function(e){var t=e.namespaceURI,e=(e.ownerDocument||e).documentElement;return!ae.test(t||e&&e.nodeName||"HTML")},T=j.setDocument=function(e){var e=e?e.ownerDocument||e:c;return e!=C&&9===e.nodeType&&e.documentElement&&(n=(C=e).documentElement,E=!W(C),c!=C&&(e=C.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",I,!1):e.attachEvent&&e.attachEvent("onunload",I)),p.scope=H(function(e){return n.appendChild(e).appendChild(C.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),p.attributes=H(function(e){return e.className="i",!e.getAttribute("className")}),p.getElementsByTagName=H(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),p.getElementsByClassName=N.test(C.getElementsByClassName),p.getById=H(function(e){return n.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),p.getById?(b.filter.ID=function(e){var t=e.replace(D,f);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E)return(t=t.getElementById(e))?[t]:[]}):(b.filter.ID=function(e){var t=e.replace(D,f);return function(e){e=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return e&&e.value===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=p.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):p.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},b.find.CLASS=p.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&E)return t.getElementsByClassName(e)},r=[],h=[],(p.qsa=N.test(C.querySelectorAll))&&(H(function(e){var t;n.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&h.push("[*^$]="+a+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||h.push("\\["+a+"*(?:value|"+J+")"),e.querySelectorAll("[id~="+S+"-]").length||h.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||h.push("\\["+a+"*name"+a+"*="+a+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||h.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||h.push(".#.+[+~]"),e.querySelectorAll("\\\f"),h.push("[\\r\\n\\f]")}),H(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&h.push("name"+a+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&h.push(":enabled",":disabled"),n.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(p.matchesSelector=N.test(i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.msMatchesSelector))&&H(function(e){p.disconnectedMatch=i.call(e,"*"),i.call(e,"[s!='']:x"),r.push("!=",Z)}),h=h.length&&new RegExp(h.join("|")),r=r.length&&new RegExp(r.join("|")),e=N.test(n.compareDocumentPosition),g=e||N.test(n.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,t=t&&t.parentNode;return e===t||!(!t||1!==t.nodeType||!(n.contains?n.contains(t):e.compareDocumentPosition&&16&e.compareDocumentPosition(t)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=e?function(e,t){return e===t?(l=!0,0):!e.compareDocumentPosition-!t.compareDocumentPosition||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==c&&g(c,e)?-1:t==C||t.ownerDocument==c&&g(c,t)?1:u?v(u,e)-v(u,t):0:4&n?-1:1);var n}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?v(u,e)-v(u,t):0;if(i===o)return he(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?he(a[r],s[r]):a[r]==c?-1:s[r]==c?1:0}),C},j.matches=function(e,t){return j(e,null,null,t)},j.matchesSelector=function(e,t){if(T(e),p.matchesSelector&&E&&!y[t+" "]&&(!r||!r.test(t))&&(!h||!h.test(t)))try{var n=i.call(e,t);if(n||p.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){y(t,!0)}return 0<j(t,C,null,[e]).length},j.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),g(e,t)},j.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],n=n&&V.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==n?n:p.attributes||!E?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},j.escape=function(e){return(e+"").replace(fe,M)},j.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},j.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!p.detectDuplicates,u=!p.sortStable&&e.slice(0),e.sort(X),l){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return u=null,e},o=j.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(b=j.selectors={cacheLength:50,createPseudo:L,match:x,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(D,f),e[3]=(e[3]||e[4]||e[5]||"").replace(D,f),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||j.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&j.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return x.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ie.test(n)&&(t=d(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(D,f).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+a+")"+e+"("+a+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(e){e=j.attr(e,t);return null==e?"!="===n:!n||(e+="","="===n?e===r:"!="===n?e!==r:"^="===n?r&&0===e.indexOf(r):"*="===n?r&&-1<e.indexOf(r):"$="===n?r&&e.slice(-r.length)===r:"~="===n?-1<(" "+e.replace(ee," ")+" ").indexOf(r):"|="===n&&(e===r||e.slice(0,r.length+1)===r+"-"))}},CHILD:function(h,e,t,g,y){var m="nth"!==h.slice(0,3),v="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=m!=v?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(m){for(;l;){for(a=e;a=a[l];)if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[v?c.firstChild:c.lastChild],v&&p){for(d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];a=++s&&a&&a[l]||(d=s=0)||u.pop();)if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(!1===(d=p?s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]:d))for(;(a=++s&&a&&a[l]||(d=s=0)||u.pop())&&((x?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++d||(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a!==e)););return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||j.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?L(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=v(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:L(function(e){var r=[],i=[],s=F(e.replace(m,"$1"));return s[S]?L(function(e,t,n,r){for(var i,o=s(e,null,r,[]),a=e.length;a--;)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:L(function(t){return function(e){return 0<j(t,e).length}}),contains:L(function(t){return t=t.replace(D,f),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:L(function(n){return oe.test(n||"")||j.error("unsupported lang: "+n),n=n.replace(D,f).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=R.location&&R.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===n},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return ue.test(e.nodeName)},input:function(e){return se.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(e=e.getAttribute("type"))||"text"===e.toLowerCase())},first:O(function(){return[0]}),last:O(function(e,t){return[t-1]}),eq:O(function(e,t,n){return[n<0?n+t:n]}),even:O(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:O(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:O(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:O(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function me(){}function P(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ve(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=$++;return e.first?function(e,t,n){for(;e=e[s];)if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[k,f];if(n){for(;e=e[s];)if((1===e.nodeType||c)&&a(e,t,n))return!0}else for(;e=e[s];)if(1===e.nodeType||c)if(i=(i=e[S]||(e[S]={}))[e.uniqueID]||(i[e.uniqueID]={}),u&&u===e.nodeName.toLowerCase())e=e[s]||e;else{if((r=i[l])&&r[0]===k&&r[1]===f)return o[2]=r[2];if((i[l]=o)[2]=a(e,t,n))return!0}return!1}}function xe(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)!(o=e[s])||n&&!n(o,r,i)||(a.push(o),l&&t.push(s));return a}function we(e){for(var r,t,n,i=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=ve(function(e){return e===r},a,!0),l=ve(function(e){return-1<v(r,e)},a,!0),c=[function(e,t,n){e=!o&&(n||t!==w)||((r=t).nodeType?u:l)(e,t,n);return r=null,e}];s<i;s++)if(t=b.relative[e[s].type])c=[ve(xe(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<i&&!b.relative[e[n].type];n++);return function e(d,h,g,y,m,t){return y&&!y[S]&&(y=e(y)),m&&!m[S]&&(m=e(m,t)),L(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)j(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:be(c,s,d,n,r),p=g?m||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y)for(i=be(p,u),y(i,[],n,r),o=i.length;o--;)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));if(e){if(m||d){if(m){for(i=[],o=p.length;o--;)(a=p[o])&&i.push(f[o]=a);m(null,p=[],i,r)}for(o=p.length;o--;)(a=p[o])&&-1<(i=m?v(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=be(p===t?p.splice(l,p.length):p),m?m(null,t,p,r):A.apply(t,p)})}(1<s&&xe(c),1<s&&P(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(m,"$1"),t,s<n&&we(e.slice(s,n)),n<i&&we(e=e.slice(n)),n<i&&P(e))}c.push(t)}return xe(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,d=j.tokenize=function(e,t){var n,r,i,o,a,s,u,l=z[e+" "];if(l)return t?0:l.slice(0);for(a=e,s=[],u=b.preFilter;a;){for(o in n&&!(r=te.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=ne.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(m," ")}),a=a.slice(n.length)),b.filter)!(r=x[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?j.error(e):z(e,s).slice(0)},F=j.compile=function(e,t){var n,y,m,v,x,r,i=[],o=[],a=U[e+" "];if(!a){for(n=(t=t||d(e)).length;n--;)((a=we(t[n]))[S]?i:o).push(a);(a=U(e,(v=0<(m=i).length,x=0<(y=o).length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){for(a=0,t||o.ownerDocument==C||(T(o),n=!E);s=y[a++];)if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}v&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,v&&l!==u){for(a=0;s=m[a++];)s(c,f,t,n);if(e){if(0<u)for(;l--;)c[l]||f[l]||(f[l]=G.call(r));f=be(f)}A.apply(r,f),i&&!e&&0<f.length&&1<u+m.length&&j.uniqueSort(r)}return i&&(k=h,w=p),c},v?L(r):r))).selector=e}return a},B=j.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&d(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(D,f),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=x.needsContext.test(e)?0:o.length;i--&&(a=o[i],!b.relative[s=a.type]);)if((u=b.find[s])&&(r=u(a.matches[0].replace(D,f),ce.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&P(o))break;return A.apply(n,r),n}}return(l||F(e,c))(r,t,!E,n,!t||ce.test(e)&&ye(t.parentNode)||t),n},p.sortStable=S.split("").sort(X).join("")===S,p.detectDuplicates=!!l,T(),p.sortDetached=H(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),H(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||de("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),p.attributes&&H(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||de("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),H(function(e){return null==e.getAttribute("disabled")})||de(J,function(e,t,n){if(!n)return!0===e[t]?t.toLowerCase():(n=e.getAttributeNode(t))&&n.specified?n.value:null}),j}(T),Q=(E.find=e,E.expr=e.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=e.uniqueSort,E.text=e.getText,E.isXMLDoc=e.isXML,E.contains=e.contains,E.escapeSelector=e.escape,E.expr.match.needsContext);function u(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var J=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function K(e,n,r){return v(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<F.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(K(this,e||[],!1))},not:function(e){return this.pushStack(K(this,e||[],!0))},is:function(e){return!!K(this,"string"==typeof e&&Q.test(e)?E(e):e||[],!1).length}});var Z,ee=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,te=((E.fn.init=function(e,t,n){if(!e)return this;if(n=n||Z,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this);if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:ee.exec(e))||!r[1]&&t)return(!t||t.jquery?t||n:this.constructor(t)).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:C,!0)),J.test(r[1])&&E.isPlainObject(t))for(var r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(n=C.getElementById(r[2]))&&(this[0]=n,this.length=1),this}).prototype=E.fn,Z=E(C),/^(?:parents|prev(?:Until|All))/),ne={children:!0,contents:!0,next:!0,prev:!0};function re(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!Q.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?F.call(E(e),this[0]):F.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){e=e.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return r(e,"parentNode")},parentsUntil:function(e,t,n){return r(e,"parentNode",n)},next:function(e){return re(e,"nextSibling")},prev:function(e){return re(e,"previousSibling")},nextAll:function(e){return r(e,"nextSibling")},prevAll:function(e){return r(e,"previousSibling")},nextUntil:function(e,t,n){return r(e,"nextSibling",n)},prevUntil:function(e,t,n){return r(e,"previousSibling",n)},siblings:function(e){return Y((e.parentNode||{}).firstChild,e)},children:function(e){return Y(e.firstChild)},contents:function(e){return null!=e.contentDocument&&M(e.contentDocument)?e.contentDocument:(u(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return(t="Until"!==r.slice(-5)?e:t)&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(ne[r]||E.uniqueSort(n),te.test(r)&&n.reverse()),this.pushStack(n)}});var S=/[^\x20\t\r\n\f]+/g;function c(e){return e}function ie(e){throw e}function oe(e,t,n,r){var i;try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(S)||[],function(e,t){n[t]=!0}),n):E.extend({},r);function i(){for(s=s||r.once,a=o=!0;l.length;c=-1)for(t=l.shift();++c<u.length;)!1===u[c].apply(t[0],t[1])&&r.stopOnFalse&&(c=u.length,t=!1);r.memory||(t=!1),o=!1,s&&(u=t?[]:"")}var o,t,a,s,u=[],l=[],c=-1,f={add:function(){return u&&(t&&!o&&(c=u.length-1,l.push(t)),function n(e){E.each(e,function(e,t){v(t)?r.unique&&f.has(t)||u.push(t):t&&t.length&&"string"!==h(t)&&n(t)})}(arguments),t&&!o&&i()),this},remove:function(){return E.each(arguments,function(e,t){for(var n;-1<(n=E.inArray(t,u,n));)u.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<E.inArray(e,u):0<u.length},empty:function(){return u=u&&[],this},disable:function(){return s=l=[],u=t="",this},disabled:function(){return!u},lock:function(){return s=l=[],t||o||(u=t=""),this},locked:function(){return!!s},fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),o||i()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!a}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=v(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&v(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){function e(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,v(t)?s?t.call(e,l(u,o,c,s),l(u,o,ie,s)):(u++,t.call(e,l(u,o,c,s),l(u,o,ie,s),l(u,o,c,o.notifyWith))):(a!==c&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}}var n=this,r=arguments,t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==ie&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),T.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,v(r)?r:c,e.notifyWith)),o[1][3].add(l(0,e,v(t)?t:c)),o[2][3].add(l(0,e,v(n)?n:ie))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){function t(t){return function(e){i[t]=this,o[t]=1<arguments.length?s.call(arguments):e,--n||a.resolveWith(i,o)}}var n=arguments.length,r=n,i=Array(r),o=s.call(arguments),a=E.Deferred();if(n<=1&&(oe(e,a.done(t(r)).resolve,a.reject,!n),"pending"===a.state()||v(o[r]&&o[r].then)))return a.then();for(;r--;)oe(o[r],t(r),a.reject);return a.promise()}});var ae=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,se=(E.Deferred.exceptionHook=function(e,t){T.console&&T.console.warn&&e&&ae.test(e.name)&&T.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){T.setTimeout(function(){throw e})},E.Deferred());function ue(){C.removeEventListener("DOMContentLoaded",ue),T.removeEventListener("load",ue),E.ready()}E.fn.ready=function(e){return se.then(e).catch(function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||se.resolveWith(C,[E])}}),E.ready.then=se.then,"complete"===C.readyState||"loading"!==C.readyState&&!C.documentElement.doScroll?T.setTimeout(E.ready):(C.addEventListener("DOMContentLoaded",ue),T.addEventListener("load",ue));function f(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===h(n))for(s in i=!0,n)f(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,v(r)||(a=!0),t=l?a?(t.call(e,r),null):(l=t,function(e,t,n){return l.call(E(e),n)}):t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o}var le=/^-ms-/,ce=/-([a-z])/g;function fe(e,t){return t.toUpperCase()}function x(e){return e.replace(le,"ms-").replace(ce,fe)}function m(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function pe(){this.expando=E.expando+pe.uid++}pe.uid=1,pe.prototype={cache:function(e){var t=e[this.expando];return t||(t=Object.create(null),m(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[x(t)]=n;else for(r in t)i[x(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][x(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(x):(t=x(t))in r?[t]:t.match(S)||[]).length;for(;n--;)delete r[t[n]]}void 0!==t&&!E.isEmptyObject(r)||(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){e=e[this.expando];return void 0!==e&&!E.isEmptyObject(e)}};var b=new pe,l=new pe,de=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,he=/[A-Z]/g;function ge(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(he,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:de.test(i)?JSON.parse(i):i)}catch(e){}l.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return l.hasData(e)||b.hasData(e)},data:function(e,t,n){return l.access(e,t,n)},removeData:function(e,t){l.remove(e,t)},_data:function(e,t,n){return b.access(e,t,n)},_removeData:function(e,t){b.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0!==n)return"object"==typeof n?this.each(function(){l.set(this,n)}):f(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=l.get(o,n))||void 0!==(t=ge(o,n))?t:void 0;this.each(function(){l.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=l.get(o),1===o.nodeType&&!b.get(o,"hasDataAttrs"))){for(t=a.length;t--;)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=x(r.slice(5)),ge(o,r,i[r]));b.set(o,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){l.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return r=b.get(e,t=(t||"fx")+"queue"),n&&(!r||Array.isArray(n)?r=b.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b.get(e,n)||b.access(e,n,{empty:E.Callbacks("once memory").add(function(){b.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--i||o.resolveWith(a,[a])}var r,i=1,o=E.Deferred(),a=this,s=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(r=b.get(a[s],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(n));return n(),o.promise(t)}});function ye(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&k(e)&&"none"===E.css(e,"display")}var e=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,me=new RegExp("^(?:([+-])=|)("+e+")([a-z%]*)$","i"),p=["Top","Right","Bottom","Left"],w=C.documentElement,k=function(e){return E.contains(e.ownerDocument,e)},ve={composed:!0};w.getRootNode&&(k=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(ve)===e.ownerDocument});function xe(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&me.exec(E.css(e,t));if(c&&c[3]!==l){for(l=l||c[3],c=+(u/=2)||1;a--;)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;E.style(e,t,(c*=2)+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var be={};function A(e,t){for(var n,r,i,o,a,s,u=[],l=0,c=e.length;l<c;l++)(r=e[l]).style&&(n=r.style.display,t?("none"===n&&(u[l]=b.get(r,"display")||null,u[l]||(r.style.display="")),""===r.style.display&&ye(r)&&(u[l]=(s=o=i=void 0,o=r.ownerDocument,a=r.nodeName,(s=be[a])||(i=o.body.appendChild(o.createElement(a)),s=E.css(i,"display"),i.parentNode.removeChild(i),be[a]=s="none"===s?"block":s)))):"none"!==n&&(u[l]="none",b.set(r,"display",n)));for(l=0;l<c;l++)null!=u[l]&&(e[l].style.display=u[l]);return e}E.fn.extend({show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ye(this)?E(this).show():E(this).hide()})}});var we=/^(?:checkbox|radio)$/i,Te=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ce=/^$|^module$|\/(?:java|ecma)script/i,n=C.createDocumentFragment().appendChild(C.createElement("div")),N=((L=C.createElement("input")).setAttribute("type","radio"),L.setAttribute("checked","checked"),L.setAttribute("name","t"),n.appendChild(L),y.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,n.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue,n.innerHTML="<option></option>",y.option=!!n.lastChild,{thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]});function D(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&u(e,t)?E.merge([e],n):n}function Ee(e,t){for(var n=0,r=e.length;n<r;n++)b.set(e[n],"globalEval",!t||b.get(t[n],"globalEval"))}N.tbody=N.tfoot=N.colgroup=N.caption=N.thead,N.th=N.td,y.option||(N.optgroup=N.option=[1,"<select multiple='multiple'>","</select>"]);var Se=/<|&#?\w+;/;function ke(e,t,n,r,i){for(var o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if((o=e[p])||0===o)if("object"===h(o))E.merge(f,o.nodeType?[o]:o);else if(Se.test(o)){for(a=a||c.appendChild(t.createElement("div")),s=(Te.exec(o)||["",""])[1].toLowerCase(),s=N[s]||N._default,a.innerHTML=s[1]+E.htmlPrefilter(o)+s[2],l=s[0];l--;)a=a.lastChild;E.merge(f,a.childNodes),(a=c.firstChild).textContent=""}else f.push(t.createTextNode(o));for(c.textContent="",p=0;o=f[p++];)if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(u=k(o),a=D(c.appendChild(o),"script"),u&&Ee(a),n)for(l=0;o=a[l++];)Ce.test(o.type||"")&&n.push(o);return c}var Ae=/^key/,Ne=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,De=/^([^.]*)(?:\.(.+)|)/;function a(){return!0}function d(){return!1}function je(e,t){return e===function(){try{return C.activeElement}catch(e){}}()==("focus"===t)}function qe(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)qe(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=d;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Le(e,i,o){o?(b.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=b.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),b.set(this,i,r),t=o(this,i),this[i](),r!==(n=b.get(this,i))||t?b.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(b.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===b.get(e,i)&&E.event.add(e,i,a)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h=b.get(t);if(m(t))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(w,i),n.guid||(n.guid=E.guid++),(s=h.events)||(s=h.events=Object.create(null)),(a=h.handle)||(a=h.handle=function(e){return void 0!==E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(S)||[""]).length;u--;)f=d=(p=De.exec(e[u])||[])[1],p=(p[2]||"").split(".").sort(),f&&(l=E.event.special[f]||{},f=(i?l.delegateType:l.bindType)||f,l=E.event.special[f]||{},d=E.extend({type:f,origType:d,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:p.join(".")},o),(c=s[f])||((c=s[f]=[]).delegateCount=0,l.setup&&!1!==l.setup.call(t,r,p,a)||t.addEventListener&&t.addEventListener(f,a)),l.add&&(l.add.call(t,d),d.handler.guid||(d.handler.guid=n.guid)),i?c.splice(c.delegateCount++,0,d):c.push(d),E.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=b.hasData(e)&&b.get(e);if(y&&(u=y.events)){for(l=(t=(t||"").match(S)||[""]).length;l--;)if(d=g=(s=De.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&b.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a=new Array(arguments.length),s=E.event.fix(e),e=(b.get(this,"events")||Object.create(null))[s.type]||[],u=E.event.special[s.type]||{};for(a[0]=s,t=1;t<arguments.length;t++)a[t]=arguments[t];if(s.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,s)){for(o=E.event.handlers.call(this,s,e),t=0;(r=o[t++])&&!s.isPropagationStopped();)for(s.currentTarget=r.elem,n=0;(i=r.handlers[n++])&&!s.isImmediatePropagationStopped();)s.rnamespace&&!1!==i.namespace&&!s.rnamespace.test(i.namespace)||(s.handleObj=i,s.data=i.data,void 0!==(i=((E.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,a))&&!1===(s.result=i)&&(s.preventDefault(),s.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:v(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){e=this||e;return we.test(e.type)&&e.click&&u(e,"input")&&Le(e,"click",a),!1},trigger:function(e){e=this||e;return we.test(e.type)&&e.click&&u(e,"input")&&Le(e,"click"),!0},_default:function(e){e=e.target;return we.test(e.type)&&e.click&&u(e,"input")&&b.get(e,"click")||u(e,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?a:d,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:d,isPropagationStopped:d,isImmediatePropagationStopped:d,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=a,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=a,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=a,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ae.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ne.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(e,t){E.event.special[e]={setup:function(){return Le(this,e,je),!1},trigger:function(){return Le(this,e),!0},delegateType:t}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return qe(this,e,t,n,r)},one:function(e,t,n,r){return qe(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=d),this.each(function(){E.event.remove(this,e,n,t)});for(i in e)this.off(i,t,e[i]);return this}});var He=/<script|<style|<link/i,Oe=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Re(e,t){return u(e,"table")&&u(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function Me(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ie(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function We(e,t){var n,r,i,o;if(1===t.nodeType){if(b.hasData(e)&&(o=b.get(e).events))for(i in b.remove(t,"handle events"),o)for(n=0,r=o[i].length;n<r;n++)E.event.add(t,i,o[i][n]);l.hasData(e)&&(e=l.access(e),e=E.extend({},e),l.set(t,e))}}function j(n,r,i,o){r=I(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=v(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Oe.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),j(t,r,i,o)});if(f&&(t=(e=ke(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(D(e,"script"),Me)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,D(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,Ie),c=0;c<s;c++)u=a[c],Ce.test(u.type||"")&&!b.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):V(u.textContent.replace(Pe,""),u,l))}return n}function Fe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(D(r)),r.parentNode&&(n&&k(r)&&Ee(D(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=k(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=D(c),r=0,i=(o=D(e)).length;r<i;r++)s=o[r],"input"===(l=(u=a[r]).nodeName.toLowerCase())&&we.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||D(e),a=a||D(c),r=0,i=o.length;r<i;r++)We(o[r],a[r]);else We(e,c);return 0<(a=D(c,"script")).length&&Ee(a,!f&&D(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(m(n)){if(t=n[b.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[b.expando]=void 0}n[l.expando]&&(n[l.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Fe(this,e,!0)},remove:function(e){return Fe(this,e)},text:function(e){return f(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return j(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Re(this,e).appendChild(e)})},prepend:function(){return j(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=Re(this,e)).insertBefore(e,t.firstChild)})},before:function(){return j(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return j(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(D(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return f(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!He.test(e)&&!N[(Te.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(D(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return j(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(D(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),W.apply(n,t.get());return this.pushStack(n)}});function Be(e){var t=e.ownerDocument.defaultView;return(t=t&&t.opener?t:T).getComputedStyle(e)}function $e(e,t,n){var r,i={};for(r in t)i[r]=e.style[r],e.style[r]=t[r];for(r in n=n.call(e),t)e.style[r]=i[r];return n}var _e,ze,Ue,Xe,Ve,Ge,Ye,i,Qe=new RegExp("^("+e+")(?!px)[a-z%]+$","i"),Je=new RegExp(p.join("|"),"i");function Ke(e,t,n){var r,i,o=e.style;return(n=n||Be(e))&&(""!==(i=n.getPropertyValue(t)||n[t])||k(e)||(i=E.style(e,t)),!y.pixelBoxStyles()&&Qe.test(i)&&Je.test(t)&&(e=o.width,t=o.minWidth,r=o.maxWidth,o.minWidth=o.maxWidth=o.width=i,i=n.width,o.width=e,o.minWidth=t,o.maxWidth=r)),void 0!==i?i+"":i}function Ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function et(){var e;i&&(Ye.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",i.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",w.appendChild(Ye).appendChild(i),e=T.getComputedStyle(i),_e="1%"!==e.top,Ge=12===tt(e.marginLeft),i.style.right="60%",Xe=36===tt(e.right),ze=36===tt(e.width),i.style.position="absolute",Ue=12===tt(i.offsetWidth/3),w.removeChild(Ye),i=null)}function tt(e){return Math.round(parseFloat(e))}Ye=C.createElement("div"),(i=C.createElement("div")).style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===i.style.backgroundClip,E.extend(y,{boxSizingReliable:function(){return et(),ze},pixelBoxStyles:function(){return et(),Xe},pixelPosition:function(){return et(),_e},reliableMarginLeft:function(){return et(),Ge},scrollboxSize:function(){return et(),Ue},reliableTrDimensions:function(){var e,t,n;return null==Ve&&(e=C.createElement("table"),t=C.createElement("tr"),n=C.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",w.appendChild(e).appendChild(t).appendChild(n),n=T.getComputedStyle(t),Ve=3<parseInt(n.height),w.removeChild(e)),Ve}}));var nt=["Webkit","Moz","ms"],rt=C.createElement("div").style,it={};function ot(e){return E.cssProps[e]||it[e]||(e in rt?e:it[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if((e=nt[n]+t)in rt)return e}(e)||e)}var at=/^(none|table(?!-c[ea]).+)/,st=/^--/,ut={position:"absolute",visibility:"hidden",display:"block"},lt={letterSpacing:"0",fontWeight:"400"};function ct(e,t,n){var r=me.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function ft(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+p[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+p[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+p[a]+"Width",!0,i))):(u+=E.css(e,"padding"+p[a],!0,i),"padding"!==n?u+=E.css(e,"border"+p[a]+"Width",!0,i):s+=E.css(e,"border"+p[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function pt(e,t,n){var r=Be(e),i=(!y.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Ke(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Qe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&u(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+ft(e,t,n||(i?"border":"content"),o,r,a)+"px"}function o(e,t,n,r,i){return new o.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t)return""===(t=Ke(e,"opacity"))?"1":t}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=x(t),u=st.test(t),l=e.style;if(u||(t=ot(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=me.exec(n))&&i[1]&&(n=xe(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o=x(t);return st.test(t)||(t=ot(o)),"normal"===(i=void 0===(i=(o=E.cssHooks[t]||E.cssHooks[o])&&"get"in o?o.get(e,!0,n):i)?Ke(e,t,r):i)&&t in lt&&(i=lt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,a){E.cssHooks[a]={get:function(e,t,n){if(t)return!at.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?pt(e,a,n):$e(e,ut,function(){return pt(e,a,n)})},set:function(e,t,n){var r=Be(e),i=!y.scrollboxSize()&&"absolute"===r.position,o=(i||n)&&"border-box"===E.css(e,"boxSizing",!1,r),n=n?ft(e,a,n,o,r):0;return o&&i&&(n-=Math.ceil(e["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(r[a])-ft(e,a,"border",!1,r)-.5)),n&&(o=me.exec(t))&&"px"!==(o[3]||"px")&&(e.style[a]=t,t=E.css(e,a)),ct(0,t,n)}}}),E.cssHooks.marginLeft=Ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ke(e,"marginLeft"))||e.getBoundingClientRect().left-$e(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+p[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=ct)}),E.fn.extend({css:function(e,t){return f(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Be(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=o).prototype={constructor:o,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=o.propHooks[this.prop];return(e&&e.get?e:o.propHooks._default).get(this)},run:function(e){var t,n=o.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(n&&n.set?n:o.propHooks._default).set(this),this}}).init.prototype=o.prototype,(o.propHooks={_default:{get:function(e){return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(e=E.css(e.elem,e.prop,""))&&"auto"!==e?e:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[ot(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=o.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=o.prototype.init,E.fx.step={};var q,dt,L,ht=/^(?:toggle|show|hide)$/,gt=/queueHooks$/;function yt(){dt&&(!1===C.hidden&&T.requestAnimationFrame?T.requestAnimationFrame(yt):T.setTimeout(yt,E.fx.interval),E.fx.tick())}function mt(){return T.setTimeout(function(){q=void 0}),q=Date.now()}function vt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=p[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function xt(e,t,n){for(var r,i=(H.tweeners[t]||[]).concat(H.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function H(i,e,t){var n,o,r,a,s,u,l,c=0,f=H.prefilters.length,p=E.Deferred().always(function(){delete d.elem}),d=function(){if(o)return!1;for(var e=q||mt(),e=Math.max(0,h.startTime+h.duration-e),t=1-(e/h.duration||0),n=0,r=h.tweens.length;n<r;n++)h.tweens[n].run(t);return p.notifyWith(i,[h,t,e]),t<1&&r?e:(r||p.notifyWith(i,[h,1,0]),p.resolveWith(i,[h]),!1)},h=p.promise({elem:i,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:q||mt(),duration:t.duration,tweens:[],createTween:function(e,t){t=E.Tween(i,h.opts,e,t,h.opts.specialEasing[e]||h.opts.easing);return h.tweens.push(t),t},stop:function(e){var t=0,n=e?h.tweens.length:0;if(o)return this;for(o=!0;t<n;t++)h.tweens[t].run(1);return e?(p.notifyWith(i,[h,1,0]),p.resolveWith(i,[h,e])):p.rejectWith(i,[h,e]),this}}),g=h.props,y=g,m=h.opts.specialEasing;for(r in y)if(s=m[a=x(r)],u=y[r],Array.isArray(u)&&(s=u[1],u=y[r]=u[0]),r!==a&&(y[a]=u,delete y[r]),(l=E.cssHooks[a])&&"expand"in l)for(r in u=l.expand(u),delete y[a],u)r in y||(y[r]=u[r],m[r]=s);else m[a]=s;for(;c<f;c++)if(n=H.prefilters[c].call(h,i,g,h.opts))return v(n.stop)&&(E._queueHooks(h.elem,h.opts.queue).stop=n.stop.bind(n)),n;return E.map(g,xt,h),v(h.opts.start)&&h.opts.start.call(i,h),h.progress(h.opts.progress).done(h.opts.done,h.opts.complete).fail(h.opts.fail).always(h.opts.always),E.fx.timer(E.extend(d,{elem:i,anim:h,queue:h.opts.queue})),h}E.Animation=E.extend(H,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return xe(n.elem,e,me.exec(t),n),n}]},tweener:function(e,t){for(var n,r=0,i=(e=v(e)?(t=e,["*"]):e.match(S)).length;r<i;r++)n=e[r],H.tweeners[n]=H.tweeners[n]||[],H.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c="width"in t||"height"in t,f=this,p={},d=e.style,h=e.nodeType&&ye(e),g=b.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ht.test(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(p))for(r in c&&1===e.nodeType&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],null==(l=g&&g.display)&&(l=b.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(A([e],!0),l=e.style.display||l,c=E.css(e,"display"),A([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(f.done(function(){d.display=l}),null==l&&(c=d.display,l="none"===c?"":c)),d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]})),u=!1,p)u||(g?"hidden"in g&&(h=g.hidden):g=b.access(e,"fxshow",{display:l}),o&&(g.hidden=!h),h&&A([e],!0),f.done(function(){for(r in h||A([e]),b.remove(e,"fxshow"),p)E.style(e,r,p[r])})),u=xt(h?g[r]:0,r,f),r in g||(g[r]=u.start,h&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?H.prefilters.unshift(e):H.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ye).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){function i(){var e=H(this,E.extend({},t),a);(o||b.get(this,"finish"))&&e.stop(!0)}var o=E.isEmptyObject(t),a=E.speed(e,n,r);return i.finish=i,o||!1===a.queue?this.each(i):this.queue(a.queue,i)},stop:function(i,e,o){function a(e){var t=e.stop;delete e.stop,t(o)}return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=b.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&gt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=b.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(vt(r,!0),e,t,n)}}),E.each({slideDown:vt("show"),slideUp:vt("hide"),slideToggle:vt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(q=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),q=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){dt||(dt=!0,yt())},E.fx.stop=function(){dt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,this.queue(e=e||"fx",function(e,t){var n=T.setTimeout(e,r);t.stop=function(){T.clearTimeout(n)}})},L=C.createElement("input"),n=C.createElement("select").appendChild(C.createElement("option")),L.type="checkbox",y.checkOn=""!==L.value,y.optSelected=n.selected,(L=C.createElement("input")).value="t",L.type="radio",y.radioValue="t"===L.value;var bt,wt=E.expr.attrHandle,Tt=(E.fn.extend({attr:function(e,t){return f(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?bt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):!(i&&"get"in i&&null!==(r=i.get(e,t)))&&null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){var n;if(!y.radioValue&&"radio"===t&&u(e,"input"))return n=e.value,e.setAttribute("type",t),n&&(e.value=n),t}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(S);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),bt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=wt[t]||E.find.attr;wt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=wt[o],wt[o]=r,r=null!=a(e,t,n)?o:null,wt[o]=i),r}}),/^(?:input|select|textarea|button)$/i),Ct=/^(?:a|area)$/i;function O(e){return(e.match(S)||[]).join(" ")}function P(e){return e.getAttribute&&e.getAttribute("class")||""}function Et(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(S)||[]}E.fn.extend({prop:function(e,t){return f(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):Tt.test(e.nodeName)||Ct.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),y.optSelected||(E.propHooks.selected={get:function(e){e=e.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(e){e=e.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s=0;if(v(t))return this.each(function(e){E(this).addClass(t.call(this,e,P(this)))});if((e=Et(t)).length)for(;n=this[s++];)if(a=P(n),r=1===n.nodeType&&" "+O(a)+" "){for(o=0;i=e[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a!==(a=O(r))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,r,i,o,a,s=0;if(v(t))return this.each(function(e){E(this).removeClass(t.call(this,e,P(this)))});if(!arguments.length)return this.attr("class","");if((e=Et(t)).length)for(;n=this[s++];)if(a=P(n),r=1===n.nodeType&&" "+O(a)+" "){for(o=0;i=e[o++];)for(;-1<r.indexOf(" "+i+" ");)r=r.replace(" "+i+" "," ");a!==(a=O(r))&&n.setAttribute("class",a)}return this},toggleClass:function(i,t){var o=typeof i,a="string"==o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):v(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,P(this),t),t)}):this.each(function(){var e,t,n,r;if(a)for(t=0,n=E(this),r=Et(i);e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==i&&"boolean"!=o||((e=P(this))&&b.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==i&&b.get(this,"__className__")||""))})},hasClass:function(e){for(var t,n=0,r=" "+e+" ";t=this[n++];)if(1===t.nodeType&&-1<(" "+O(P(t))+" ").indexOf(r))return!0;return!1}});function St(e){e.stopPropagation()}var kt=/\r/g,At=(E.fn.extend({val:function(t){var n,e,r,i=this[0];return arguments.length?(r=v(t),this.each(function(e){1===this.nodeType&&(null==(e=r?t.call(this,e,E(this).val()):t)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=E.map(e,function(e){return null==e?"":e+""})),(n=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,e,"value")||(this.value=e))})):i?(n=E.valHooks[i.type]||E.valHooks[i.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(i,"value"))?e:"string"==typeof(e=i.value)?e.replace(kt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:O(E.text(e))}},select:{get:function(e){for(var t,n=e.options,r=e.selectedIndex,i="select-one"===e.type,o=i?null:[],a=i?r+1:n.length,s=r<0?a:i?r:0;s<a;s++)if(((t=n[s]).selected||s===r)&&!t.disabled&&(!t.parentNode.disabled||!u(t.parentNode,"optgroup"))){if(t=E(t).val(),i)return t;o.push(t)}return o},set:function(e,t){for(var n,r,i=e.options,o=E.makeArray(t),a=i.length;a--;)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},y.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in T,/^(?:focusinfocus|focusoutblur)$/),Nt=(E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f=[n||C],p=_.call(e,"type")?e.type:e,d=_.call(e,"namespace")?e.namespace.split("."):[],h=c=o=n=n||C;if(3!==n.nodeType&&8!==n.nodeType&&!At.test(p+E.event.triggered)&&(-1<p.indexOf(".")&&(p=(d=p.split(".")).shift(),d.sort()),s=p.indexOf(":")<0&&"on"+p,(e=e[E.expando]?e:new E.Event(p,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=d.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),l=E.event.special[p]||{},r||!l.trigger||!1!==l.trigger.apply(n,t))){if(!r&&!l.noBubble&&!g(n)){for(a=l.delegateType||p,At.test(a+p)||(h=h.parentNode);h;h=h.parentNode)f.push(h),o=h;o===(n.ownerDocument||C)&&f.push(o.defaultView||o.parentWindow||T)}for(i=0;(h=f[i++])&&!e.isPropagationStopped();)c=h,e.type=1<i?a:l.bindType||p,(u=(b.get(h,"events")||Object.create(null))[e.type]&&b.get(h,"handle"))&&u.apply(h,t),(u=s&&h[s])&&u.apply&&m(h)&&(e.result=u.apply(h,t),!1===e.result&&e.preventDefault());return e.type=p,r||e.isDefaultPrevented()||l._default&&!1!==l._default.apply(f.pop(),t)||!m(n)||s&&v(n[p])&&!g(n)&&((o=n[s])&&(n[s]=null),E.event.triggered=p,e.isPropagationStopped()&&c.addEventListener(p,St),n[p](),e.isPropagationStopped()&&c.removeEventListener(p,St),E.event.triggered=void 0,o&&(n[s]=o)),e.result}},simulate:function(e,t,n){n=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(n,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),y.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){function i(e){E.event.simulate(r,e.target,E.event.fix(e))}E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=b.access(e,r);t||e.addEventListener(n,i,!0),b.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=b.access(e,r)-1;t?b.access(e,r,t):(e.removeEventListener(n,i,!0),b.remove(e,r))}}}),T.location),Dt={guid:Date.now()},jt=/\?/,qt=(E.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new T.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+e),t},/\[\]$/),Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;E.param=function(e,t){function n(e,t){t=v(t)?t():t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==t?"":t)}var r,i=[];if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){n(this.name,this.value)});else for(r in e)!function n(r,e,i,o){if(Array.isArray(e))E.each(e,function(e,t){i||qt.test(r)?o(r,t):n(r+"["+("object"==typeof t&&null!=t?e:"")+"]",t,i,o)});else if(i||"object"!==h(e))o(r,e);else for(var t in e)n(r+"["+t+"]",e[t],i,o)}(r,e[r],t,n);return i.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!we.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Pt=/%20/g,Rt=/#.*$/,Mt=/([?&])_=[^&]*/,It=/^(.*?):[ \t]*([^\r\n]*)$/gm,Wt=/^(?:GET|HEAD)$/,Ft=/^\/\//,Bt={},$t={},_t="*/".concat("*"),zt=C.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(S)||[];if(v(t))for(;n=i[r++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Xt(t,r,i,o){var a={},s=t===$t;function u(e){var n;return a[e]=!0,E.each(t[e]||[],function(e,t){t=t(r,i,o);return"string"!=typeof t||s||a[t]?s?!(n=t):void 0:(r.dataTypes.unshift(t),u(t),!1)}),n}return u(r.dataTypes[0])||!a["*"]&&u("*")}function Vt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r=r||{})[n]=t[n]);return r&&E.extend(!0,e,r),e}zt.href=Nt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Nt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Vt(Vt(e,E.ajaxSettings),t):Vt(E.ajaxSettings,e)},ajaxPrefilter:Ut(Bt),ajaxTransport:Ut($t),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0);var u,l,c,n,f,p,d,r,i,h=E.ajaxSetup({},t=t||{}),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?E(g):E.event,m=E.Deferred(),v=E.Callbacks("once memory"),x=h.statusCode||{},o={},a={},s="canceled",b={readyState:0,getResponseHeader:function(e){var t;if(p){if(!n)for(n={};t=It.exec(c);)n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return p?c:null},setRequestHeader:function(e,t){return null==p&&(e=a[e.toLowerCase()]=a[e.toLowerCase()]||e,o[e]=t),this},overrideMimeType:function(e){return null==p&&(h.mimeType=e),this},statusCode:function(e){if(e)if(p)b.always(e[b.status]);else for(var t in e)x[t]=[x[t],e[t]];return this},abort:function(e){e=e||s;return u&&u.abort(e),w(0,e),this}};if(m.promise(b),h.url=((e||h.url||Nt.href)+"").replace(Ft,Nt.protocol+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(S)||[""],null==h.crossDomain){i=C.createElement("a");try{i.href=h.url,i.href=i.href,h.crossDomain=zt.protocol+"//"+zt.host!=i.protocol+"//"+i.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=E.param(h.data,h.traditional)),Xt(Bt,h,t,b),p)return b;for(r in(d=E.event&&h.global)&&0==E.active++&&E.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Wt.test(h.type),l=h.url.replace(Rt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Pt,"+")):(i=h.url.slice(l.length),h.data&&(h.processData||"string"==typeof h.data)&&(l+=(jt.test(l)?"&":"?")+h.data,delete h.data),!1===h.cache&&(l=l.replace(Mt,"$1"),i=(jt.test(l)?"&":"?")+"_="+Dt.guid+++i),h.url=l+i),h.ifModified&&(E.lastModified[l]&&b.setRequestHeader("If-Modified-Since",E.lastModified[l]),E.etag[l]&&b.setRequestHeader("If-None-Match",E.etag[l])),(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&b.setRequestHeader("Content-Type",h.contentType),b.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+_t+"; q=0.01":""):h.accepts["*"]),h.headers)b.setRequestHeader(r,h.headers[r]);if(h.beforeSend&&(!1===h.beforeSend.call(g,b,h)||p))return b.abort();if(s="abort",v.add(h.complete),b.done(h.success),b.fail(h.error),u=Xt($t,h,t,b)){if(b.readyState=1,d&&y.trigger("ajaxSend",[b,h]),p)return b;h.async&&0<h.timeout&&(f=T.setTimeout(function(){b.abort("timeout")},h.timeout));try{p=!1,u.send(o,w)}catch(e){if(p)throw e;w(-1,e)}}else w(-1,"No Transport");function w(e,t,n,r){var i,o,a,s=t;p||(p=!0,f&&T.clearTimeout(f),u=void 0,c=r||"",b.readyState=0<e?4:0,r=200<=e&&e<300||304===e,n&&(a=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a=a||i}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,b,n)),!r&&-1<E.inArray("script",h.dataTypes)&&(h.converters["text script"]=function(){}),a=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(h,a,b,r),r?(h.ifModified&&((n=b.getResponseHeader("Last-Modified"))&&(E.lastModified[l]=n),(n=b.getResponseHeader("etag"))&&(E.etag[l]=n)),204===e||"HEAD"===h.type?s="nocontent":304===e?s="notmodified":(s=a.state,i=a.data,r=!(o=a.error))):(o=s,!e&&s||(s="error",e<0&&(e=0))),b.status=e,b.statusText=(t||s)+"",r?m.resolveWith(g,[i,s,b]):m.rejectWith(g,[b,s,o]),b.statusCode(x),x=void 0,d&&y.trigger(r?"ajaxSuccess":"ajaxError",[b,h,r?i:o]),v.fireWith(g,[b,s]),d&&(y.trigger("ajaxComplete",[b,h]),--E.active||E.event.trigger("ajaxStop")))}return b},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return v(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){for(var t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){return this[0]&&(v(e)&&(e=e.call(this[0])),e=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return v(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=v(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new T.XMLHttpRequest}catch(e){}};var Gt={0:200,1223:204},Yt=E.ajaxSettings.xhr();y.cors=!!Yt&&"withCredentials"in Yt,y.ajax=Yt=!!Yt,E.ajaxTransport(function(i){var o,a;if(y.cors||Yt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Gt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&T.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),C.head.appendChild(r[0])},abort:function(){i&&i()}}});var Qt=[],Jt=/(=)\?(?=&|$)|\?\?/,Kt=(E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||E.expando+"_"+Dt.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Jt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Jt,"$1"+r):!1!==e.jsonp&&(e.url+=(jt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=T[r],T[r]=function(){o=arguments},n.always(function(){void 0===i?E(T).removeProp(r):T[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Qt.push(r)),o&&v(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((e=C.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===e.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=C.implementation.createHTMLDocument("")).createElement("base")).href=C.location.href,t.head.appendChild(r)):t=C),r=!n&&[],(n=J.exec(e))?[t.createElement(n[1])]:(n=ke([e],t,r),r&&r.length&&E(r).remove(),E.merge([],n.childNodes)));var r},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=O(e.slice(s)),e=e.slice(0,s)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s=E.css(e,"position"),u=E(e),l={};"static"===s&&(e.style.position="relative"),o=u.offset(),r=E.css(e,"top"),a=E.css(e,"left"),s=("absolute"===s||"fixed"===s)&&-1<(r+a).indexOf("auto")?(i=(s=u.position()).top,s.left):(i=parseFloat(r)||0,parseFloat(a)||0),null!=(t=v(t)?t.call(e,n,E.extend({},o)):t).top&&(l.top=t.top-o.top+i),null!=t.left&&(l.left=t.left-o.left+s),"using"in t?t.using.call(e,l):("number"==typeof l.top&&(l.top+="px"),"number"==typeof l.left&&(l.left+="px"),u.css(l))}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),n=n.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent;return e||w})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return f(this,function(e,t,n){var r;if(g(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=Ze(y.pixelPosition,function(e,t){if(t)return t=Ke(e,n),Qe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return f(this,function(e,t,n){var r;return g(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),Zt=(E.proxy=function(e,t){var n,r;if("string"==typeof t&&(r=e[t],t=e,e=r),v(e))return n=s.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,r},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=u,E.isFunction=v,E.isWindow=g,E.camelCase=x,E.type=h,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Kt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E}),T.jQuery),en=T.$;return E.noConflict=function(e){return T.$===E&&(T.$=en),e&&T.jQuery===E&&(T.jQuery=Zt),E},void 0===R&&(T.jQuery=T.$=E),E});
!function r(n,s,t){function a(o,e){if(!s[o]){if(!n[o]){var i="function"==typeof require&&require;if(!e&&i)return i(o,!0);if(d)return d(o,!0);e=new Error("Cannot find module '"+o+"'");throw e.code="MODULE_NOT_FOUND",e}i=s[o]={exports:{}};n[o][0].call(i.exports,function(e){var i=n[o][1][e];return a(i||e)},i,i.exports,r,n,s,t)}return s[o].exports}for(var d="function"==typeof require&&require,e=0;e<t.length;e++)a(t[e]);return a}({1:[function(e,i,o){!function(e){void 0!==i&&i.exports?i.exports=e():"function"==typeof define&&define.amd?define(e):this.bowser=e()}(function(){function e(i){function e(e){e=i.match(e);return e&&1<e.length&&e[1]||""}var o,r=e(/(ipod|iphone|ipad)/i).toLowerCase(),n=!/like android/i.test(i)&&/android/i.test(i),s=/CrOS/.test(i),t=e(/edge\/(\d+(\.\d+)?)/i),a=e(/version\/(\d+(\.\d+)?)/i),d=/tablet/i.test(i),m=!d&&/[^-]mobi/i.test(i),t=(/opera|opr/i.test(i)?o={name:"Opera",opera:f,version:a||e(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(i)?o={name:"Yandex Browser",yandexbrowser:f,version:a||e(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(i)?(o={name:"Windows Phone",windowsphone:f},t?(o.msedge=f,o.version=t):(o.msie=f,o.version=e(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(i)?o={name:"Internet Explorer",msie:f,version:e(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:s?o={name:"Chrome",chromeBook:f,chrome:f,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(i)?o={name:"Microsoft Edge",msedge:f,version:t}:/chrome|crios|crmo/i.test(i)?o={name:"Chrome",chrome:f,version:e(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:r?(o={name:"iphone"==r?"iPhone":"ipad"==r?"iPad":"iPod"},a&&(o.version=a)):/sailfish/i.test(i)?o={name:"Sailfish",sailfish:f,version:e(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(i)?o={name:"SeaMonkey",seamonkey:f,version:e(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(i)?(o={name:"Firefox",firefox:f,version:e(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i)&&(o.firefoxos=f)):/silk/i.test(i)?o={name:"Amazon Silk",silk:f,version:e(/silk\/(\d+(\.\d+)?)/i)}:n?o={name:"Android",version:a}:/phantom/i.test(i)?o={name:"PhantomJS",phantom:f,version:e(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(i)||/rim\stablet/i.test(i)?o={name:"BlackBerry",blackberry:f,version:a||e(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(i)?(o={name:"WebOS",webos:f,version:a||e(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(i)&&(o.touchpad=f)):o=/bada/i.test(i)?{name:"Bada",bada:f,version:e(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(i)?{name:"Tizen",tizen:f,version:e(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||a}:/safari/i.test(i)?{name:"Safari",safari:f,version:a}:{name:e(/^(.*)\/(.*) /),version:(s=/^(.*)\/(.*) /,(s=i.match(s))&&1<s.length&&s[2]||"")},!o.msedge&&/(apple)?webkit/i.test(i)?(o.name=o.name||"Webkit",o.webkit=f,!o.version&&a&&(o.version=a)):!o.opera&&/gecko\//i.test(i)&&(o.name=o.name||"Gecko",o.gecko=f,o.version=o.version||e(/gecko\/(\d+(\.\d+)?)/i)),o.msedge||!n&&!o.silk?r&&(o[r]=f,o.ios=f):o.android=f,""),s=(o.windowsphone?t=e(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):r?t=(t=e(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):n?t=e(/android[ \/-](\d+(\.\d+)*)/i):o.webos?t=e(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):o.blackberry?t=e(/rim\stablet\sos\s(\d+(\.\d+)*)/i):o.bada?t=e(/bada\/(\d+(\.\d+)*)/i):o.tizen&&(t=e(/tizen[\/\s](\d+(\.\d+)*)/i)),t&&(o.osversion=t),t.split(".")[0]);return d||"ipad"==r||n&&(3==s||4==s&&!m)||o.silk?o.tablet=f:(m||"iphone"==r||"ipod"==r||n||o.blackberry||o.webos||o.bada)&&(o.mobile=f),o.msedge||o.msie&&10<=o.version||o.yandexbrowser&&15<=o.version||o.chrome&&20<=o.version||o.firefox&&20<=o.version||o.safari&&6<=o.version||o.opera&&10<=o.version||o.ios&&o.osversion&&6<=o.osversion.split(".")[0]||o.blackberry&&10.1<=o.version?o.a=f:o.msie&&o.version<10||o.chrome&&o.version<20||o.firefox&&o.version<20||o.safari&&o.version<6||o.opera&&o.version<10||o.ios&&o.osversion&&o.osversion.split(".")[0]<6?o.c=f:o.x=f,o}var f=!0,r=e("undefined"!=typeof navigator?navigator.userAgent:"");return r.test=function(e){for(var i=0;i<e.length;++i){var o=e[i];if("string"==typeof o&&o in r)return!0}return!1},r._detect=e,r})},{}],2:[function(e,i,o){var r=e("bowser"),n=document.queryCommandSupported;document.queryCommandSupported=function(e){if("copy"===e||"cut"===e){if(r.chrome)return 43<=r.version;if(r.firefox)return 41<=r.version}return n.apply(this,arguments)}},{bowser:1}]},{},[2]);
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(l){l.timeago=function(t){return t instanceof Date?o(t):o("string"==typeof t?l.timeago.parse(t):"number"==typeof t?new Date(t):l.timeago.datetime(t))};var i=l.timeago,a=(l.extend(l.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(i){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var a=this.settings.strings,t=a.prefixAgo,e=a.suffixAgo;if(this.settings.allowFuture&&i<0&&(t=a.prefixFromNow,e=a.suffixFromNow),!this.settings.allowPast&&0<=i)return this.settings.strings.inPast;var n=Math.abs(i)/1e3,o=n/60,r=o/60,s=r/24,u=s/365;function m(t,e){t=l.isFunction(t)?t(e,i):t,e=a.numbers&&a.numbers[e]||e;return t.replace(/%d/i,e)}n=n<45&&m(a.seconds,Math.round(n))||n<90&&m(a.minute,1)||o<45&&m(a.minutes,Math.round(o))||o<90&&m(a.hour,1)||r<24&&m(a.hours,Math.round(r))||r<42&&m(a.day,1)||s<30&&m(a.days,Math.round(s))||s<45&&m(a.month,1)||s<365&&m(a.months,Math.round(s/30))||u<1.5&&m(a.year,1)||m(a.years,Math.round(u)),o=a.wordSeparator||"";return void 0===a.wordSeparator&&(o=" "),l.trim([t,n,e].join(o))},parse:function(t){t=l.trim(t);return t=(t=(t=(t=(t=t.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(t)},datetime:function(t){t=i.isTime(t)?l(t).attr("datetime"):l(t).attr("title");return i.parse(t)},isTime:function(t){return"time"===l(t).get(0).tagName.toLowerCase()}}),{init:function(){a.dispose.call(this);var t=l.proxy(n,this),e=(t(),i.settings);0<e.refreshMillis&&(this._timeagoInterval=setInterval(t,e.refreshMillis))},update:function(t){t=t instanceof Date?t:i.parse(t);l(this).data("timeago",{datetime:t}),i.settings.localeTitle&&l(this).attr("title",t.toLocaleString()),n.apply(this)},updateFromDOM:function(){l(this).data("timeago",{datetime:i.parse(i.isTime(this)?l(this).attr("datetime"):l(this).attr("title"))}),n.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}});function n(){var t=i.settings;if(t.autoDispose&&!l.contains(document.documentElement,this))return l(this).timeago("dispose"),this;var e=function(t){{var e;(t=l(t)).data("timeago")||(t.data("timeago",{datetime:i.datetime(t)}),e=l.trim(t.text()),i.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(0<e.length)||i.isTime(t)&&t.attr("title")||t.attr("title",e))}return t.data("timeago")}(this);return isNaN(e.datetime)||(0===t.cutoff||Math.abs(r(e.datetime))<t.cutoff?l(this).text(o(e.datetime)):0<l(this).attr("title").length&&l(this).text(l(this).attr("title"))),this}function o(t){return i.inWords(r(t))}function r(t){return(new Date).getTime()-t.getTime()}l.fn.timeago=function(t,e){var i=t?a[t]:a.init;if(i)return this.each(function(){i.call(this,e)}),this;throw new Error("Unknown function name '"+t+"' for timeago")},document.createElement("abbr"),document.createElement("time")});
!function(){var l=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],p="undefined"!=typeof window,h=p&&null!=window.mozInnerScreenX;function e(e,t,o){if(!p)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var o=o&&o.debug||!1,n=(!o||(n=document.querySelector("#input-textarea-caret-position-mirror-div"))&&n.parentNode.removeChild(n),document.createElement("div")),i=(n.id="input-textarea-caret-position-mirror-div",document.body.appendChild(n),n.style),r=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,d="INPUT"===e.nodeName,a=(i.whiteSpace="pre-wrap",d||(i.wordWrap="break-word"),i.position="absolute",o||(i.visibility="hidden"),l.forEach(function(e){d&&"lineHeight"===e?i.lineHeight=r.height:i[e]=r[e]}),h?e.scrollHeight>parseInt(r.height)&&(i.overflowY="scroll"):i.overflow="hidden",n.textContent=e.value.substring(0,t),d&&(n.textContent=n.textContent.replace(/\s/g," ")),document.createElement("span")),e=(a.textContent=e.value.substring(t)||".",n.appendChild(a),{top:a.offsetTop+parseInt(r.borderTopWidth),left:a.offsetLeft+parseInt(r.borderLeftWidth),height:parseInt(r.lineHeight)});return o?a.style.backgroundColor="#aaa":document.body.removeChild(n),e}"undefined"!=typeof module&&void 0!==module.exports?module.exports=e:p&&(window.getCaretCoordinates=e)}();
!function(e,M){"use strict";var I=Math.pow(2,-24),i=Math.pow(2,32),w=Math.pow(2,53);var r={encode:function(e){var f,a=new ArrayBuffer(256),o=new DataView(a),s=0;function c(e){for(var r=a.byteLength,t=s+e;r<t;)r*=2;if(r!==a.byteLength)for(var n=o,i=(a=new ArrayBuffer(r),o=new DataView(a),s+3>>2),u=0;u<i;++u)o.setUint32(4*u,n.getUint32(4*u));return f=e,o}function h(){s+=f}function l(e){h(c(1).setUint8(s,e))}function g(e){for(var r=c(e.length),t=0;t<e.length;++t)r.setUint8(s+t,e[t]);h()}function v(e,r){var t,n;r<24?l(e<<5|r):r<256?(l(e<<5|24),l(r)):r<65536?(l(e<<5|25),n=r,h(c(2).setUint16(s,n))):r<4294967296?(l(e<<5|26),n=r,h(c(4).setUint32(s,n))):(l(e<<5|27),e=((e=r)-(r=r%i))/i,(t=c(8)).setUint32(s,e),t.setUint32(s+4,r),h())}if(!function e(r){var t;if(!1===r)return l(244);if(!0===r)return l(245);if(null===r)return l(246);if(r===M)return l(247);switch(typeof r){case"number":if(Math.floor(r)===r){if(0<=r&&r<=w)return v(0,r);if(-w<=r&&r<0)return v(1,-(r+1))}return l(251),t=r,h(c(8).setFloat64(s,t));case"string":for(var n=[],i=0;i<r.length;++i){var u=r.charCodeAt(i);u<128?n.push(u):(u<2048?n.push(192|u>>6):(u<55296?n.push(224|u>>12):(u=65536+((u=(1023&u)<<10)|1023&r.charCodeAt(++i)),n.push(240|u>>18),n.push(128|u>>12&63)),n.push(128|u>>6&63)),n.push(128|63&u))}return v(3,n.length),g(n);default:if(Array.isArray(r))for(v(4,f=r.length),i=0;i<f;++i)e(r[i]);else if(r instanceof Uint8Array)v(2,r.length),g(r);else{var f,a=Object.keys(r);for(v(5,f=a.length),i=0;i<f;++i){var o=a[i];e(o),e(r[o])}}}}(e),"slice"in a)return a.slice(0,s);for(var e=new ArrayBuffer(s),r=new DataView(e),t=0;t<s;++t)r.setUint8(t,o.getUint8(t));return e},decode:function(r,p,d){var y=new DataView(r),U=0;function A(e,r){return U+=r,e}function b(e){return A(new Uint8Array(r,U,e),e)}function m(){return A(y.getUint8(U),1)}function B(){return A(y.getUint16(U),2)}function t(){return A(y.getUint32(U),4)}function C(){return 255===y.getUint8(U)&&(U+=1,1)}function D(e){if(e<24)return e;if(24===e)return m();if(25===e)return B();if(26===e)return t();if(27===e)return t()*i+t();if(31===e)return-1;throw"Invalid length encoding"}function V(e){var r=m();if(255===r)return-1;var t=D(31&r);if(t<0||r>>5!==e)throw"Invalid indefinite length element";return t}function F(e,r){for(var t=0;t<r;++t){var n=m();128&n&&(n<224?(n=(31&n)<<6|63&m(),--r):n<240?(n=(15&n)<<12|(63&m())<<6|63&m(),r-=2):(n=(15&n)<<18|(63&m())<<12|(63&m())<<6|63&m(),r-=3)),n<65536?e.push(n):(n-=65536,e.push(55296|n>>10),e.push(56320|1023&n))}}"function"!=typeof p&&(p=function(e){return e}),"function"!=typeof d&&(d=function(){return M});var e=function e(){var r,t,n=m(),i=n>>5,n=31&n;if(7==i)switch(n){case 25:var u=new ArrayBuffer(4),u=new DataView(u),f=B(),a=31744&f,o=1023&f;if(31744===a)a=261120;else if(0!==a)a+=114688;else if(0!=o)return o*I;return u.setUint32(0,(32768&f)<<16|a<<13|o<<13),u.getFloat32(0);case 26:return A(y.getFloat32(U),4);case 27:return A(y.getFloat64(U),8)}if((r=D(n))<0&&(i<2||6<i))throw"Invalid length";switch(i){case 0:return r;case 1:return-1-r;case 2:if(r<0){for(var s=[],c=0;0<=(r=V(i));)c+=r,s.push(b(r));for(var h=new Uint8Array(c),l=0,g=0;g<s.length;++g)h.set(s[g],l),l+=s[g].length;return h}return b(r);case 3:var v=[];if(r<0)for(;0<=(r=V(i));)F(v,r);else F(v,r);return String.fromCharCode.apply(null,v);case 4:if(r<0)for(t=[];!C();)t.push(e());else for(t=new Array(r),g=0;g<r;++g)t[g]=e();return t;case 5:var w={};for(g=0;g<r||r<0&&!C();++g)w[e()]=e();return w;case 6:return p(e(),r);case 7:switch(r){case 20:return!1;case 21:return!0;case 22:return null;case 23:return M;default:return d(r)}}}();if(U!==r.byteLength)throw"Remaining bytes";return e}};"function"==typeof define&&define.amd?define("cbor/cbor",r):"undefined"!=typeof module&&module.exports?module.exports=r:e.CBOR||(e.CBOR=r)}(this);
var GOVUK=function(e){"use strict";function t(e,t){if(window.NodeList.prototype.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t.call(window,e[n],n,e)}!function(e){var a,l,c,s;"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(e){return!1}}()||(a=Object.defineProperty,l=Object.prototype.hasOwnProperty("__defineGetter__"),c="Getters & setters cannot be defined on this javascript engine",s="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(e,t,n){if(a&&(e===window||e===document||e===Element.prototype||e instanceof Element))return a(e,t,n);if(null===e||!(e instanceof Object||"object"==typeof e))throw new TypeError("Object.defineProperty called on non-object");if(!(n instanceof Object))throw new TypeError("Property description must be an object");var t=String(t),o="value"in n||"writable"in n,i="get"in n&&typeof n.get,r="set"in n&&typeof n.set;if(i){if("function"!==i)throw new TypeError("Getter must be a function");if(!l)throw new TypeError(c);if(o)throw new TypeError(s);Object.__defineGetter__.call(e,t,n.get)}else e[t]=n.value;if(r){if("function"!==r)throw new TypeError("Setter must be a function");if(!l)throw new TypeError(c);if(o)throw new TypeError(s);Object.__defineSetter__.call(e,t,n.set)}return"value"in n&&(e[t]=n.value),e})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function(t){function e(){}var n=Array,o=Object,i=o.prototype,n=n.prototype,r=i.toString,a="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,l=Function.prototype.toString,c=n.slice,s=n.concat,u=n.push,i=Math.max,d=this;if(!function(e){if("function"!=typeof e)return!1;{if(!a)return"[object Function]"===(t=r.call(e))||"[object GeneratorFunction]"===t;var t=e;try{return l.call(t),!0}catch(e){return!1}}}(d))throw new TypeError("Function.prototype.bind called on incompatible "+d);for(var p,f=c.call(arguments,1),m=i(0,d.length-f.length),h=[],b=0;b<m;b++)u.call(h,"$"+b);return p=Function("binder","return function ("+h.join(",")+"){ return binder.apply(this, arguments); }")(function(){var e;return this instanceof p?(e=d.apply(this,s.call(f,c.call(arguments))),o(e)===e?e:this):d.apply(t,s.call(f,c.call(arguments)))}),d.prototype&&(e.prototype=d.prototype,p.prototype=new e,e.prototype=null),p}})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(o){var e,i,r;(!("DOMTokenList"in this)||"classList"in(e=document.createElement("x"))&&(e.classList.toggle("x",!1)||e.className))&&("DOMTokenList"in(e=this)&&e.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(e.DOMTokenList=function(){function n(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===i||!!o,get:n}):e.__defineGetter__(t,n)}var i=!0;try{n({},"support")}catch(e){i=!1}return function(i,r){function a(){if(e<=d)for(;e<d;++e)t(e)}function l(){var e,t,n=arguments,o=/\s+/;if(n.length)for(t=0;t<n.length;++t)if(o.test(n[t]))throw(e=new SyntaxError('String "'+n[t]+'" contains an invalid character')).code=5,e.name="InvalidCharacterError",e;for(""===(s=("object"==typeof i[r]?""+i[r].baseVal:""+i[r]).replace(/^\s+|\s+$/g,"").split(o))[0]&&(s=[]),u={},t=0;t<s.length;++t)u[s[t]]=!0;d=s.length,a()}var c=this,s=[],u={},d=0,e=0,t=function(e){n(c,e,function(){return l(),s[e]},!1)};return l(),n(c,"length",function(){return l(),d}),c.toLocaleString=c.toString=function(){return l(),s.join(" ")},c.item=function(e){return l(),s[e]},c.contains=function(e){return l(),!!u[e]},c.add=function(){l.apply(c,e=arguments);for(var e,t,n=0,o=e.length;n<o;++n)u[t=e[n]]||(s.push(t),u[t]=!0);d!==s.length&&(d=s.length>>>0,"object"==typeof i[r]?i[r].baseVal=s.join(" "):i[r]=s.join(" "),a())},c.remove=function(){l.apply(c,e=arguments);for(var e,t={},n=0,o=[];n<e.length;++n)t[e[n]]=!0,delete u[e[n]];for(n=0;n<s.length;++n)t[s[n]]||o.push(s[n]);d=(s=o).length>>>0,"object"==typeof i[r]?i[r].baseVal=s.join(" "):i[r]=s.join(" "),a()},c.toggle=function(e,t){return l.apply(c,[e]),o!==t?t?(c.add(e),!0):(c.remove(e),!1):u[e]?(c.remove(e),!1):(c.add(e),!0)},c}}()),"classList"in(e=document.createElement("span"))&&(e.classList.toggle("x",!1),e.classList.contains("x")&&(e.classList.constructor.prototype.toggle=function(e){var t,n=arguments[1];return n===o?(t=!this.contains(e),this[t?"add":"remove"](e),t):(this[(n=!!n)?"add":"remove"](e),n)})),"classList"in(e=document.createElement("span"))&&(e.classList.add("a","b"),e.classList.contains("b")||(i=e.classList.constructor.prototype.add,e.classList.constructor.prototype.add=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)i.call(this,e[n])})),"classList"in(e=document.createElement("span"))&&(e.classList.add("a"),e.classList.add("b"),e.classList.remove("a","b"),e.classList.contains("b")&&(r=e.classList.constructor.prototype.remove,e.classList.constructor.prototype.remove=function(){for(var e=arguments,t=arguments.length,n=0;n<t;n++)r.call(this,e[n])})))}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){var t,n,l,c,s,u,o,i,r;function a(){return r--||clearTimeout(i),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(s(document,!0),i&&document.body.prototype&&clearTimeout(i),!!document.body.prototype)}"Element"in this&&"HTMLElement"in this||(window.Element&&!window.HTMLElement?window.HTMLElement=window.Element:(window.Element=window.HTMLElement=new Function("return function Element() {}")(),n=(t=document.appendChild(document.createElement("body"))).appendChild(document.createElement("iframe")).contentWindow.document,l=Element.prototype=n.appendChild(n.createElement("*")),c={},s=function(e,t){var n,o,i,r=e.childNodes||[],a=-1;if(1===e.nodeType&&e.constructor!==Element)for(n in e.constructor=Element,c)o=c[n],e[n]=o;for(;i=t&&r[++a];)s(i,t);return e},u=document.getElementsByTagName("*"),o=document.createElement,r=100,l.attachEvent("onpropertychange",function(e){for(var t,n=e.propertyName,o=!c.hasOwnProperty(n),i=l[n],r=c[n],a=-1;t=u[++a];)1!==t.nodeType||!o&&t[n]!==r||(t[n]=i);c[n]=i}),l.constructor=Element,l.hasAttribute||(l.hasAttribute=function(e){return null!==this.getAttribute(e)}),a()||(document.onreadystatechange=a,i=setInterval(a,25)),document.createElement=function(e){e=o(String(e).toLowerCase());return s(e)},document.removeChild(t)))}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){var t="document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((t=document.createElement("span")).classList.add("a","b"),t.classList.contains("b"));if(!t){var n=this;function u(e,t,n,o){Object.defineProperty?Object.defineProperty(e,t,{configurable:!1===d||!!o,get:n}):e.__defineGetter__(t,n)}var d=!0;try{u({},"support")}catch(e){d=!1}function p(e,c,s){u(e.prototype,c,function(){var e,t=this,n="__defineGetter__DEFINE_PROPERTY"+c;if(t[n])return e;if(!(t[n]=!0)===d){for(var o,i=p.mirror||document.createElement("div"),r=i.childNodes,a=r.length,l=0;l<a;++l)if(r[l]._R===t){o=r[l];break}o=o||i.appendChild(document.createElement("div")),e=DOMTokenList.call(o,t,s)}else e=new DOMTokenList(t,s);return u(t,c,function(){return e}),delete t[n],e},!0)}p(n.Element,"classList","className"),p(n.HTMLElement,"classList","className"),p(n.HTMLLinkElement,"relList","rel"),p(n.HTMLAnchorElement,"relList","rel"),p(n.HTMLAreaElement,"relList","rel")}}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&!function(e){e.constructor?e.Window=e.constructor:(e.Window=e.constructor=new Function("return function Window() {}")()).prototype=this}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(r){var e,n;function l(e,t){for(var n=-1,o=e.length;++n<o;)if(n in e&&e[n]===t)return n;return-1}!function(e){if(!("Event"in e))return!1;if("function"==typeof e.Event)return!0;try{return new Event("click"),!0}catch(e){return!1}}(this)&&(n={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1},"undefined"!=typeof document&&"undefined"!=typeof window&&(e=window.Event&&window.Event.prototype||null,window.Event=Window.prototype.Event=function(e,t){if(e)return"createEvent"in document?(n=document.createEvent("Event"),o=!(!t||t.bubbles===r)&&t.bubbles,i=!(!t||t.cancelable===r)&&t.cancelable,n.initEvent(e,o,i)):((n=document.createEventObject()).type=e,n.bubbles=!(!t||t.bubbles===r)&&t.bubbles,n.cancelable=!(!t||t.cancelable===r)&&t.cancelable),n;var n,o,i;throw new Error("Not enough arguments")},e&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:e}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var a=this,e=arguments[0],t=arguments[1];if(a===window&&e in n)throw new Error("In IE8 the event: "+e+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");a._events||(a._events={}),a._events[e]||(a._events[e]=function(e){var t,n=a._events[e.type].list,o=n.slice(),i=-1,r=o.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=a,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||a,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++i<r&&!e.cancelImmediate;)i in o&&-1!==l(n,t=o[i])&&"function"==typeof t&&t.call(a,e)},a._events[e].list=[],a.attachEvent&&a.attachEvent("on"+e,a._events[e])),a._events[e].list.push(t)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var e,t=this,n=arguments[0];t._events&&t._events[n]&&t._events[n].list&&-1!==(e=l(t._events[n].list,arguments[1]))&&(t._events[n].list.splice(e,1),t._events[n].list.length||(t.detachEvent&&t.detachEvent("on"+n,t._events[n]),delete t._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var n,o=this,i=t.type;try{t.bubbles||(t.cancelBubble=!0,n=function(e){e.cancelBubble=!0,(o||window).detachEvent("on"+i,n)},this.attachEvent("on"+i,n)),this.fireEvent("on"+i,t)}catch(e){for(t.target=o;"_events"in(t.currentTarget=o)&&"function"==typeof o._events[i]&&o._events[i].call(o,t),"function"==typeof o["on"+i]&&o["on"+i].call(o,t),(o=9===o.nodeType?o.parentWindow:o.parentNode)&&!t.cancelBubble;);}return!0},document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))}))))}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});function n(e){this.$module=e,this.debounceFormSubmitTimer=null}n.prototype.handleKeyDown=function(e){var t=e.target;"button"===t.getAttribute("role")&&32===e.keyCode&&(e.preventDefault(),t.click())},n.prototype.debounce=function(e){var t=e.target;if("true"===t.getAttribute("data-prevent-double-click"))return this.debounceFormSubmitTimer?(e.preventDefault(),!1):void(this.debounceFormSubmitTimer=setTimeout(function(){this.debounceFormSubmitTimer=null}.bind(this),1e3))},n.prototype.init=function(){this.$module.addEventListener("keydown",this.handleKeyDown),this.$module.addEventListener("click",this.debounce)};function o(e){this.$module=e}function i(e){this.$module=e}function r(e){this.$module=e,this.$menuButton=e&&e.querySelector(".govuk-js-header-toggle"),this.$menu=this.$menuButton&&e.querySelector("#"+this.$menuButton.getAttribute("aria-controls"))}function a(e){this.$module=e,this.$inputs=e.querySelectorAll('input[type="radio"]')}function l(e){this.$module=e,this.$linkedElement=null,this.linkedElementListener=!1}o.prototype.init=function(){this.$module&&"boolean"!=typeof this.$module.open&&this.polyfillDetails()},o.prototype.polyfillDetails=function(){var n,e=this.$module,t=this.$summary=e.getElementsByTagName("summary").item(0),o=this.$content=e.getElementsByTagName("div").item(0);t&&o&&(o.id||(o.id="details-content-"+(n=(new Date).getTime(),void 0!==window.performance&&"function"==typeof window.performance.now&&(n+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"===e?t:3&t|8).toString(16)}))),e.setAttribute("role","group"),t.setAttribute("role","button"),t.setAttribute("aria-controls",o.id),!(t.tabIndex=0)==(null!==e.getAttribute("open"))?(t.setAttribute("aria-expanded","true"),o.setAttribute("aria-hidden","false")):(t.setAttribute("aria-expanded","false"),o.setAttribute("aria-hidden","true"),o.style.display="none"),this.polyfillHandleInputs(t,this.polyfillSetAttributes.bind(this)))},o.prototype.polyfillSetAttributes=function(){var e=this.$module,t=this.$summary,n=this.$content,o="true"===t.getAttribute("aria-expanded"),i="true"===n.getAttribute("aria-hidden");return t.setAttribute("aria-expanded",o?"false":"true"),n.setAttribute("aria-hidden",i?"false":"true"),n.style.display=o?"none":"",null!==e.getAttribute("open")?e.removeAttribute("open"):e.setAttribute("open","open"),!0},o.prototype.polyfillHandleInputs=function(e,n){e.addEventListener("keypress",function(e){var t=e.target;13!==e.keyCode&&32!==e.keyCode||"summary"===t.nodeName.toLowerCase()&&(e.preventDefault(),t.click?t.click():n(e))}),e.addEventListener("keyup",function(e){var t=e.target;32===e.keyCode&&"summary"===t.nodeName.toLowerCase()&&e.preventDefault()}),e.addEventListener("click",n)},function(e){"document"in this&&"matches"in document.documentElement||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=0;t[n]&&t[n]!==this;)++n;return!!t[n]})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(e){"document"in this&&"closest"in document.documentElement||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t="SVGElement"in window&&t instanceof SVGElement?t.parentNode:t.parentElement}return null})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),i.prototype.init=function(){var e=this.$module;e&&(this.setFocus(),e.addEventListener("click",this.handleClick.bind(this)))},i.prototype.setFocus=function(){var e=this.$module;"true"!==e.getAttribute("data-disable-auto-focus")&&(e.setAttribute("tabindex","-1"),e.addEventListener("blur",function(){e.removeAttribute("tabindex")}),e.focus())},i.prototype.handleClick=function(e){var t=e.target;this.focusTarget(t)&&e.preventDefault()},i.prototype.focusTarget=function(e){if("A"!==e.tagName||!1===e.href)return!1;e=this.getFragmentFromUrl(e.href),e=document.getElementById(e);if(!e)return!1;var t=this.getAssociatedLegendOrLabel(e);return!!t&&(t.scrollIntoView(),e.focus({preventScroll:!0}),!0)},i.prototype.getFragmentFromUrl=function(e){return-1!==e.indexOf("#")&&e.split("#").pop()},i.prototype.getAssociatedLegendOrLabel=function(e){var t=e.closest("fieldset");if(t){t=t.getElementsByTagName("legend");if(t.length){t=t[0];if("checkbox"===e.type||"radio"===e.type)return t;var n=t.getBoundingClientRect().top,o=e.getBoundingClientRect();if(o.height&&window.innerHeight)if(o.top+o.height-n<window.innerHeight/2)return t}}return document.querySelector("label[for='"+e.getAttribute("id")+"']")||e.closest("label")},r.prototype.init=function(){this.$module&&this.$menuButton&&this.$menu&&(this.syncState(this.$menu.classList.contains("govuk-header__navigation-list--open")),this.$menuButton.addEventListener("click",this.handleMenuButtonClick.bind(this)))},r.prototype.syncState=function(e){this.$menuButton.classList.toggle("govuk-header__menu-button--open",e),this.$menuButton.setAttribute("aria-expanded",e)},r.prototype.handleMenuButtonClick=function(){var e=this.$menu.classList.toggle("govuk-header__navigation-list--open");this.syncState(e)},a.prototype.init=function(){var e=this.$module;t(this.$inputs,function(e){var t=e.getAttribute("data-aria-controls");t&&document.getElementById(t)&&(e.setAttribute("aria-controls",t),e.removeAttribute("data-aria-controls"))}),"onpageshow"in window?window.addEventListener("pageshow",this.syncAllConditionalReveals.bind(this)):window.addEventListener("DOMContentLoaded",this.syncAllConditionalReveals.bind(this)),this.syncAllConditionalReveals(),e.addEventListener("click",this.handleClick.bind(this))},a.prototype.syncAllConditionalReveals=function(){t(this.$inputs,this.syncConditionalRevealWithInputState.bind(this))},a.prototype.syncConditionalRevealWithInputState=function(e){var t,n=document.getElementById(e.getAttribute("aria-controls"));n&&n.classList.contains("govuk-radios__conditional")&&(t=e.checked,e.setAttribute("aria-expanded",t),n.classList.toggle("govuk-radios__conditional--hidden",!t))},a.prototype.handleClick=function(e){var n=e.target;"radio"===n.type&&t(document.querySelectorAll('input[type="radio"][aria-controls]'),function(e){var t=e.form===n.form;e.name===n.name&&t&&this.syncConditionalRevealWithInputState(e)}.bind(this))},l.prototype.init=function(){this.$module&&(this.$linkedElement=this.getLinkedElement(),this.$linkedElement&&this.$module.addEventListener("click",this.focusLinkedElement.bind(this)))},l.prototype.getLinkedElement=function(){var e=this.getFragmentFromUrl();return!!e&&document.getElementById(e)},l.prototype.focusLinkedElement=function(){var e=this.$linkedElement;e.getAttribute("tabindex")||(e.setAttribute("tabindex","-1"),e.classList.add("govuk-skip-link-focused-element"),this.linkedElementListener||(this.$linkedElement.addEventListener("blur",this.removeFocusProperties.bind(this)),this.linkedElementListener=!0)),e.focus()},l.prototype.removeFocusProperties=function(){this.$linkedElement.removeAttribute("tabindex"),this.$linkedElement.classList.remove("govuk-skip-link-focused-element")},l.prototype.getFragmentFromUrl=function(){return!!this.$module.hash&&this.$module.hash.split("#").pop()};var c;var m="http://www.w3.org/1999/xhtml",N="undefined"==typeof document?void 0:document,s=!!N&&"content"in N.createElement("template"),u=!!N&&N.createRange&&"createContextualFragment"in N.createRange();function h(e){return e=e.trim(),s?(t=e,(n=N.createElement("template")).innerHTML=t,n.content.childNodes[0]):u?(t=e,c||(c=N.createRange()).selectNode(N.body),c.createContextualFragment(t).childNodes[0]):(n=e,(e=N.createElement("body")).innerHTML=n,e.childNodes[0]);var t,n}function C(e,t){var n,o,e=e.nodeName,t=t.nodeName;return e===t||(n=e.charCodeAt(0),o=t.charCodeAt(0),n<=90&&97<=o?e===t.toUpperCase():o<=90&&97<=n&&t===e.toUpperCase())}function d(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var _,$={OPTION:function(e,t){var n,o=e.parentNode;o&&"SELECT"===(n="OPTGROUP"===(n=o.nodeName.toUpperCase())?(o=o.parentNode)&&o.nodeName.toUpperCase():n)&&!o.hasAttribute("multiple")&&(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),o.selectedIndex=-1),d(e,t,"selected")},INPUT:function(e,t){d(e,t,"checked"),d(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n,t=t.value,o=(e.value!==t&&(e.value=t),e.firstChild);o&&(n=o.nodeValue)!=t&&(t||n!=e.placeholder)&&(o.nodeValue=t)},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,o,i=-1,r=0,a=e.firstChild;a;)if("OPTGROUP"===(o=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===o){if(a.hasAttribute("selected")){i=r;break}r++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=i}}};function b(){}function y(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}function p(e,t){if(window.NodeList.prototype.forEach)return e.forEach(t);for(var n=0;n<e.length;n++)t.call(window,e[n],n,e)}_=function(e,t){var n,o,i,r,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var l=a.length-1;0<=l;l--)o=(n=a[l]).name,i=n.namespaceURI,r=n.value,i?(o=n.localName||o,e.getAttributeNS(i,o)!==r&&("xmlns"===n.prefix&&(o=n.name),e.setAttributeNS(i,o,r))):e.getAttribute(o)!==r&&e.setAttribute(o,r);for(var c=e.attributes,s=c.length-1;0<=s;s--)o=(n=c[s]).name,(i=n.namespaceURI)?(o=n.localName||o,t.hasAttributeNS(i,o)||e.removeAttributeNS(i,o)):t.hasAttribute(o)||e.removeAttribute(o)}};var f={morphdom:function(e,t,n){n=n||{},"string"==typeof t&&("#document"===e.nodeName||"HTML"===e.nodeName||"BODY"===e.nodeName?(i=t,(t=N.createElement("html")).innerHTML=i):t=h(t));var g=n.getNodeKey||y,w=n.onBeforeNodeAdded||b,E=n.onNodeAdded||b,L=n.onBeforeElUpdated||b,A=n.onElUpdated||b,o=n.onBeforeNodeDiscarded||b,r=n.onNodeDiscarded||b,k=n.onBeforeElChildrenUpdated||b,i=!0===n.childrenOnly,T=Object.create(null),a=[];function S(e){a.push(e)}function x(e,t,n){!1!==o(e)&&(t&&t.removeChild(e),r(e),function e(t,n){if(1===t.nodeType)for(var o=t.firstChild;o;){var i=void 0;n&&(i=g(o))?S(i):(r(o),o.firstChild&&e(o,n)),o=o.nextSibling}}(e,n))}function j(e,t,n){var o=g(t);if(o&&delete T[o],!n){if(!1===L(e,t))return;if(_(e,t),A(e),!1===k(e,t))return}if("TEXTAREA"!==e.nodeName){var i,r,a,l,c,s,u=e,o=t,d=o.firstChild,p=u.firstChild;e:for(;d;){for(l=d.nextSibling,i=g(d);p;){if(a=p.nextSibling,d.isSameNode&&d.isSameNode(p)){d=l,p=a;continue e}r=g(p);var f=p.nodeType,m=void 0;if(f===d.nodeType&&(1===f?(i?i!==r&&(!(c=T[i])||a===c?m=!1:(u.insertBefore(c,p),r?S(r):x(p,u,!0),p=c)):r&&(m=!1),(m=!1!==m&&C(p,d))&&j(p,d)):3!==f&&8!=f||(m=!0,p.nodeValue!==d.nodeValue&&(p.nodeValue=d.nodeValue))),m){d=l,p=a;continue e}r?S(r):x(p,u,!0),p=a}i&&(c=T[i])&&C(c,d)?(u.appendChild(c),j(c,d)):!1!==(s=w(d))&&((d=s?s:d).actualize&&(d=d.actualize(u.ownerDocument||N)),u.appendChild(d),function e(t){E(t);for(var n=t.firstChild;n;){var o=n.nextSibling,i=g(n);(i=i&&T[i])&&C(n,i)?(n.parentNode.replaceChild(i,n),j(i,n)):e(n),n=o}}(d)),d=l,p=a}for(var h=u,b=p,y=void 0;b;){var v=b.nextSibling;(y=g(b))?S(y):x(b,h,!0),b=v}n=$[u.nodeName];n&&n(u,o)}else $.TEXTAREA(e,t)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var o=g(n);o&&(T[o]=n),e(n),n=n.nextSibling}}(e);var l,c,n=e,s=n.nodeType,u=t.nodeType;if(!i)if(1===s)1===u?C(e,t)||(r(e),n=function(e,t){for(var n=e.firstChild;n;){var o=n.nextSibling;t.appendChild(n),n=o}return t}(e,(l=t.nodeName,(c=t.namespaceURI)&&c!==m?N.createElementNS(c,l):N.createElement(l)))):n=t;else if(3===s||8===s){if(u===s)return n.nodeValue!==t.nodeValue&&(n.nodeValue=t.nodeValue),n;n=t}if(n===t)r(e);else{if(t.isSameNode&&t.isSameNode(n))return;if(j(n,t,i),a)for(var d=0,p=a.length;d<p;d++){var f=T[a[d]];f&&x(f,f.parentNode,!1)}}return!i&&n!==e&&e.parentNode&&(n.actualize&&(n=n.actualize(e.ownerDocument||N)),e.parentNode.replaceChild(n,e)),n}};return e.Frontend={Header:r,Details:o,Button:n,Radios:a,ErrorSummary:i,SkipLink:l,initAll:function(e){new n(e=void 0!==(e=void 0!==e?e:{}).scope?e.scope:document).init(),p(e.querySelectorAll('[data-module="govuk-details"]'),function(e){new o(e).init()}),new r(e.querySelector('[data-module="govuk-header"]')).init(),p(e.querySelectorAll('[data-module="govuk-radios"]'),function(e){new a(e).init()}),p(e.querySelectorAll('[data-module="govuk-skip-link"]'),function(e){new l(e).init()}),new i(e.querySelector('[data-module="govuk-error-summary"]')).init()}},e.vendor=f,e}({});
"use strict";!function(t){var i=t.jQuery,u=t.GOVUK||{};u.NotifyModules=u.NotifyModules||{},u.notifyModules={find:function(t){var o="[data-notify-module]",e=(t=t||i("body")).find(o);return e=t.is(o)?e.add(t):e},start:function(t){for(var o=this.find(t),e=0,n=o.length;e<n;e++){var r=i(o[e]),a=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(function(t){return t.replace(/-([a-z])/g,function(t){return t.charAt(1).toUpperCase()})}(r.data("notifyModule"))),d=r.data("module-started");"function"!=typeof u.NotifyModules[a]||d||((new u.NotifyModules[a]).start(r),r.data("module-started",!0))}}},t.GOVUK=u}(window);
"use strict";!function(t){var u=t.jQuery,a=t.GOVUK||{};function n(){function o(){var t=u(this),a=d(t);a.length&&(t.attr("aria-controls",a.attr("id")),t.attr("aria-expanded","false"),a.attr("aria-hidden","true"))}var t=this,r="ShowHideContent",i='[data-target] > input[type="radio"]',a='[data-target] > input[type="checkbox"]';function d(t){var a=(a=t.attr("aria-controls"))||t.closest("[data-target]").data("target");return u("#"+a)}function s(t,a){a.hasClass("js-hidden")&&(a.removeClass("js-hidden"),a.attr("aria-hidden","false"),t.attr("aria-controls")&&t.attr("aria-expanded","true"))}function c(t,a){(a=a||d(t)).hasClass("js-hidden")||(a.addClass("js-hidden"),a.attr("aria-hidden","true"),t.attr("aria-controls")&&t.attr("aria-expanded","false"))}function n(t,a){var n=i+'[name="'+t.attr("name")+'"][aria-controls]',e=t.closest("form");(e.length?e.find(n):u(n)).each(function(){c(u(this))}),t.is("[aria-controls]")&&s(t,a)}function e(t,a){(t.is(":checked")?s:c)(t,a)}function h(n,t,a,e){n=n||u(document.body);function i(){var t=u(this);e(t,d(t))}t=u(t);t.each(o),u.each(a,function(t,a){n.on("click."+r,a,i)}),t.is(":checked")&&t.filter(":checked").each(i)}t.showHideRadioToggledContent=function(t){var a;h(t,i,(a=[],u(i).map(function(){var t=u(this).attr("name");return-1===u.inArray(t,a)?(a.push(t),'input[type="radio"][name="'+u(this).attr("name")+'"]'):null})),n)},t.showHideCheckboxToggledContent=function(t){h(t,a,[a],e)},t.destroy=function(t){(t=t||u(document.body)).off("."+r)}}n.prototype.init=function(t){this.showHideRadioToggledContent(t),this.showHideCheckboxToggledContent(t)},a.ShowHideContent=n,t.GOVUK=a}(window);
"use strict";function _typeof(o){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}!function(){window.GOVUK=window.GOVUK||{};var i={analytics:!1},r={_ga:"analytics",_gid:"analytics"};window.GOVUK.cookie=function(o,n,e){return void 0!==n?!1===n||null===n?window.GOVUK.setCookie(o,"",{days:-1}):(void 0===e&&(e={days:30}),window.GOVUK.setCookie(o,n,e)):window.GOVUK.getCookie(o)},window.GOVUK.getConsentCookie=function(){var o,n=window.GOVUK.cookie("cookies_policy");if(!n)return null;try{o=JSON.parse(n)}catch(o){return null}return o="object"!==_typeof(o)&&null!==o?JSON.parse(o):o},window.GOVUK.setConsentCookie=function(o){var n,e=(e=window.GOVUK.getConsentCookie())||JSON.parse(JSON.stringify(i));for(n in o)if(e[n]=o[n],!o[n])for(var t in r)r[t]===n&&(window.GOVUK.cookie(t,null),window.GOVUK.cookie(t)&&(document.cookie=t+"=;expires="+new Date+";domain="+window.location.hostname.replace(/^www\./,".")+";path=/"));window.GOVUK.setCookie("cookies_policy",JSON.stringify(e),{days:365})},window.GOVUK.checkConsentCookieCategory=function(o,n){if(!window.GOVUK.getConsentCookie()&&r[o])return!0;o=window.GOVUK.getConsentCookie();try{return o[n]}catch(o){return console.error(o),!1}},window.GOVUK.checkConsentCookie=function(o,n){return"cookies_policy"===o||null===n||!1===n||!!r[o]&&window.GOVUK.checkConsentCookieCategory(o,r[o])},window.GOVUK.setCookie=function(o,n,e){window.GOVUK.checkConsentCookie(o,n)&&(o=o+"="+n+"; path=/; SameSite=Lax",(e=void 0===e?{}:e).days&&((n=new Date).setTime(n.getTime()+24*e.days*60*60*1e3),o=o+"; expires="+n.toGMTString()),"https:"===document.location.protocol&&(o+="; Secure"),document.cookie=o)},window.GOVUK.getCookie=function(o){for(var n=o+"=",e=document.cookie.split(";"),t=0,i=e.length;t<i;t++){for(var r=e[t];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return decodeURIComponent(r.substring(n.length))}return null}}(window);
"use strict";!function(t){t.GOVUK.hasConsentFor=function(n,o){return null!==(o=void 0===o?t.GOVUK.getConsentCookie():o)&&(n in o&&o[n])}}(window);
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){n.GOVUK=n.GOVUK||{};function e(e){n.ga("create",{trackingId:e.trackingId,cookieDomain:e.cookieDomain,cookieExpires:24*e.expires*60*60,cookieFlags:"Secure; SameSite=Lax"}),n.ga("set","anonymizeIp",e.anonymizeIp),n.ga("set","allowAdFeatures",e.allowAdFeatures),n.ga("set","transport",e.transport),n.ga("set","title","GOV.UK Notify")}e.load=function(){var e,t,o,a;e=n,a=document,t="script",o="ga",e.GoogleAnalyticsObject=o,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=+new Date,o=a.createElement(t),a=a.getElementsByTagName(t)[0],o.async=1,o.src="//www.google-analytics.com/analytics.js",a.parentNode.insertBefore(o,a)},e.prototype.trackPageview=function(e,t,o){var a=(n.location.pathname+n.location.search).replace(/[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}/g,"…");n.ga("send","pageview",a)},e.prototype.trackEvent=function(e,t,o){e={eventCategory:e,eventAction:t};(o=o||{}).label&&(e.eventLabel=o.label,delete o.label),"object"===_typeof(o)&&$.extend(e,o),n.ga("send","event",e)},n.GOVUK.Analytics=e}(window);
"use strict";!function(a){a.GOVUK=a.GOVUK||{};var n="UA-75215134-1";a["ga-disable-".concat(n)]=!0;a.GOVUK.initAnalytics=function(){"analytics"in a.GOVUK||(a["ga-disable-".concat(n)]=!1,a.GOVUK.Analytics.load(),a.GOVUK.analytics=new GOVUK.Analytics({trackingId:n,cookieDomain:"auto",anonymizeIp:!0,allowAdFeatures:!1,transport:"beacon",expires:365}),a.GOVUK.analytics.trackPageview())}}(window);
"use strict";window.GOVUK=window.GOVUK||{},window.GOVUK.NotifyModules=window.GOVUK.NotifyModules||{},function(e){function o(){}o.clearOldCookies=function(e){var o=["_ga","_gid"];if(window.GOVUK.cookie("seen_cookie_message")&&(document.cookie="seen_cookie_message=;expires="+(new Date).toGMTString()+";path=/"),null===e)for(var i,t=0;t<o.length;t++)window.GOVUK.cookie(o[t])&&(i=o[t]+"=;expires="+(new Date).toGMTString()+";domain="+window.location.hostname.replace(/^www\./,".")+";path=/",document.cookie=i)},o.prototype.start=function(e){this.$module=e[0],this.$module.hideCookieMessage=this.hideCookieMessage.bind(this),this.$module.showConfirmationMessage=this.showConfirmationMessage.bind(this),this.$module.setCookieConsent=this.setCookieConsent.bind(this),this.$module.cookieBanner=document.querySelector(".notify-cookie-banner"),this.$module.cookieBannerConfirmationMessage=this.$module.querySelector(".notify-cookie-banner__confirmation"),this.setupCookieMessage()},o.prototype.setupCookieMessage=function(){var e=this;this.$hideLink=this.$module.querySelector("button[data-hide-cookie-banner]"),this.$hideLink&&this.$hideLink.addEventListener("click",this.$module.hideCookieMessage),this.$acceptCookiesLink=this.$module.querySelector("button[data-accept-cookies=true]"),this.$acceptCookiesLink&&this.$acceptCookiesLink.addEventListener("click",function(){return e.$module.setCookieConsent(!0)}),this.$rejectCookiesLink=this.$module.querySelector("button[data-accept-cookies=false]"),this.$rejectCookiesLink&&this.$rejectCookiesLink.addEventListener("click",function(){return e.$module.setCookieConsent(!1)}),this.showCookieMessage()},o.prototype.showCookieMessage=function(){var e;this.isInCookiesPage()||(e=window.GOVUK.cookie("cookies_policy"),this.$module&&!e&&(this.$module.style.display="block"))},o.prototype.hideCookieMessage=function(e){this.$module&&(this.$module.style.display="none"),e.target&&e.preventDefault()},o.prototype.setCookieConsent=function(e){window.GOVUK.setConsentCookie({analytics:e}),this.$module.showConfirmationMessage(e),this.$module.cookieBannerConfirmationMessage.focus(),e&&window.GOVUK.initAnalytics()},o.prototype.showConfirmationMessage=function(e){e=e?"You’ve accepted analytics cookies.":"You told us not to use analytics cookies.";this.$cookieBannerMainContent=document.querySelector(".notify-cookie-banner__wrapper"),this.$cookieBannerConfirmationMessage=document.querySelector(".notify-cookie-banner__confirmation-message"),this.$cookieBannerConfirmationMessage.insertAdjacentText("afterbegin",e),this.$cookieBannerMainContent.style.display="none",this.$module.cookieBannerConfirmationMessage.style.display="block"},o.prototype.isInCookiesPage=function(){return"/cookies"===window.location.pathname},e.CookieBanner=o}(window.GOVUK.NotifyModules);
"use strict";window.GOVUK=window.GOVUK||{},window.GOVUK.NotifyModules=window.GOVUK.NotifyModules||{},function(e){function n(){}n.prototype.start=function(e){this.$module=e[0],this.$module.submitSettingsForm=this.submitSettingsForm.bind(this),document.querySelector("form[data-notify-module=cookie-settings]").addEventListener("submit",this.$module.submitSettingsForm),this.setInitialFormValues()},n.prototype.setInitialFormValues=function(){var e=window.GOVUK.getConsentCookie("consent");e&&((e.analytics?document.querySelector("input[name=cookies-analytics][value=on]"):document.querySelector("input[name=cookies-analytics][value=off]")).checked=!0)},n.prototype.submitSettingsForm=function(e){e.preventDefault();for(var t=e.target.querySelectorAll("input[name=cookies-analytics]"),o={},n=0;n<t.length;n++){var i=t[n];if(i.checked){i="on"===i.value;o.analytics=i;break}}return window.GOVUK.setConsentCookie(o),this.showConfirmationMessage(),window.GOVUK.hasConsentFor("analytics")&&window.GOVUK.initAnalytics(),!1},n.prototype.showConfirmationMessage=function(){var e=document.querySelector("div[data-cookie-confirmation]"),t=document.querySelector(".cookie-settings__prev-page"),o=n.prototype.getReferrerLink();document.body.scrollTop=document.documentElement.scrollTop=0,o&&o!==document.location.pathname?(t.href=o,t.style.display="block"):t.style.display="none",e.style.display="block"},n.prototype.getReferrerLink=function(){return!!document.referrer&&new URL(document.referrer).pathname},e.CookieSettings=n}(window.GOVUK.NotifyModules);
"use strict";!function(l){function s(t,e,i){var o=t.$fixedEl,s=o.closest(".sticky-scroll-area");0===s.length&&(s=o.parent()).addClass("sticky-scroll-area"),this._els=[t],this.edge=e,this.selector=i,this.node=s.get(0),this.setEvents()}function h(t,e){this._sticky=e,this.$fixedEl=t,this._initialFixedClass="content-fixed-onload",this._fixedClass="content-fixed",this._appliedClass=null,this._$shim=null,this._stopped=!1,this._hasLoaded=!1,this._canBeStuck=!0,this.verticalMargins={top:parseInt(this.$fixedEl.css("margin-top"),10),bottom:parseInt(this.$fixedEl.css("margin-bottom"),10)}}function t(t){this._hasScrolled=!1,this._scrollTimeout=!1,this._windowHasResized=!1,this._resizeTimeout=!1,this._elsLoaded=!1,this._initialPositionsSet=!1,this._els=[],this.CSS_SELECTOR=t,this.STOP_PADDING=10}var c=l.jQuery,e=l.GOVUK||{},n="default",a=(s.prototype.addEl=function(t){this._els.push(t)},s.prototype.hasEl=function(t){return-1!==c.inArray(t,this._els)},s.prototype.updateEls=function(t){this._els=t},s.prototype.setEvents=function(){this.node.addEventListener("focus",this.focusHandler.bind(this),!0),c(this.node).on("keyup","textarea",this.focusHandler.bind(this))},s.prototype.removeEvents=function(){this.node.removeEventListener("focus",this.focusHandler.bind(this)),c(this.node).find("textarea").off("keyup","textarea",this.focusHandler.bind(this))},s.prototype.getFocusedDetails={forElement:function(t){t={top:t.offset().top,height:t.outerHeight(),type:"element"};return t.bottom=t.top+t.height,t},forCaret:function(t){var e=t.get(0),e=window.getCaretCoordinates(e,e.selectionEnd),t={top:t.offset().top+e.top,height:e.height,type:"caret"};return t.bottom=t.top+t.height,t}},s.prototype.focusHandler=function(t){this.scrollToRevealElement(c(document.activeElement))},s.prototype.scrollToRevealElement=function(t){var e,i=t.get(0).nodeName.toLowerCase(),o=r.endOfFurthestEl(this._els,this.edge),s=function(){return 0<t.closest(this.selector).length}.bind(this);if("textarea"===i)e=this.getFocusedDetails.forCaret(t);else{if(s())return;e=this.getFocusedDetails.forElement(t)}0<(i=r.getOverlap(e,this.edge,o))&&r.adjustForOverlap(e,this.edge,i)},s.prototype.destroy=function(){this.removeEvents()},{_scrollAreas:[],getAreaForEl:function(t){for(var e=this._scrollAreas.length;e--;)if(this._scrollAreas[e].hasEl(t))return this._scrollAreas[e];return!1},getAreaByEl:function(e){return c.grep(this._scrollAreas,function(t){return-1!==c.inArray(e,t.els)})[0]||!1},addEl:function(t,e,i){var o=this.getAreaForEl(t);o?o.addEl(t):this._scrollAreas.push(new s(t,e,i))},syncEls:function(n){var i=this,r=[];c.each(this._scrollAreas,function(t,e){i=e,o=[],c.each(n,function(t,e){i.hasEl(e)&&o.push(e)});var i,o,s=o;s.length||r.push(t),e.updateEls(s)}),c.each(r,function(t,e){i._scrollAreas[e].destroy(),i._scrollAreas.splice(e,1)})}}),r={getOverlap:function(t,e,i){return i?"top"===e?i-t.top:t.bottom-i:0},endOfFurthestEl:function(t,e){var t=c.grep(t,function(t){return t.isStuck()}),i="bottom"===e?function(t){return t.$fixedEl.offset().top}:function(t){return t.$fixedEl.offset().top+t.height};return!!t.length&&c.map(t,function(t){return i(t)}).reduce(function(t,e){return t<e?e:t})},adjustForOverlap:function(t,e,i){var o=c(window).scrollTop();"top"===e?c(window).scrollTop(o-i):c(window).scrollTop(o+i)}},d={_classes:{top:"content-fixed__top",bottom:"content-fixed__bottom"},_getClassForEdge:function(t){return this._classes[t]},mark:function(t){var i=this._getClassForEdge(t.edge),t="dialog"===n?[u.getElementAtOppositeEnd(t)]:t._els;t=c.grep(t,function(t){return t.isStuck()}),c.each(t,function(t,e){e.$fixedEl.addClass(i)})},unmark:function(t){var i=this._getClassForEdge(t.edge);c.each(t._els,function(t,e){e.$fixedEl.removeClass(i)})}},u=(h.prototype._getShimCSS=function(){return{width:this.horizontalSpace+"px",height:this.height+"px","margin-top":this.verticalMargins.top+"px","margin-bottom":this.verticalMargins.bottom+"px"}},h.prototype.stickyClass=function(){return this._sticky._initialPositionsSet?this._fixedClass:this._initialFixedClass},h.prototype.appliedClass=function(){return this._appliedClass},h.prototype.removeStickyClasses=function(t){this.$fixedEl.removeClass([this._initialFixedClass,this._fixedClass].join(" "))},h.prototype.isStuck=function(){return null!==this._appliedClass},h.prototype.stick=function(t){this._appliedClass=this.stickyClass(),this.$fixedEl.addClass(this._appliedClass),this._hasBeenCalled=!0},h.prototype.release=function(t){this._appliedClass=null,this.removeStickyClasses(t),this._hasBeenCalled=!0},h.prototype.addShim=function(t){this._$shim=c('<div class="shim">&nbsp</div>'),this._$shim.css(this._getShimCSS()),this.$fixedEl[t](this._$shim)},h.prototype.removeShim=function(){null!==this._$shim&&(this._$shim.remove(),this._$shim=null)},h.prototype.updateShim=function(){this._$shim&&this._$shim.css(this._getShimCSS())},h.prototype.stop=function(){this._stopped=!0},h.prototype.unstop=function(){this._stopped=!1},h.prototype.isStopped=function(){return this._stopped},h.prototype.isInPage=function(){var t=this.$fixedEl.get(0);return t!==document.body&&document.body.contains(t)},h.prototype.canBeStuck=function(t){if(void 0===t)return this._canBeStuck;this._canBeStuck=t},{hasResized:!(h.prototype.hasLoaded=function(t){if(void 0===t)return this._hasLoaded;this._hasLoaded=t}),spaceBetweenStickys:40,_getPaddingBetweenEls:function(t){return t.length<=1?0:(t.length-1)*this.spaceBetweenStickys},_getTotalHeight:function(t){return c.map(t,function(t){return t.height}).reduce(function(t,e){return t+e})-this._getPaddingBetweenEls(t)},_elsThatCanBeStuck:function(t){return c.grep(t,function(t){return t.canBeStuck()})},getOffsetFromEdge:function(t,e){var i=this._elsThatCanBeStuck(e._els).slice();return"top"===e.edge&&i.reverse(),(e=i.indexOf(t))===i.length-1?0:(i=i.slice(e+1),this._getTotalHeight(i)-this.spaceBetweenStickys)},getOffsetFromEnd:function(t,e){var i=this._elsThatCanBeStuck(e._els).slice();return"bottom"===e.edge&&i.reverse(),(e=i.indexOf(t))===i.length-1?0:(i=i.slice(e+1),this._getTotalHeight(i)-this.spaceBetweenStickys)},fitToHeight:function(t){var e=this,i=t._els.slice(),o=t.getWindowDimensions().height,s=function(){return e._getTotalHeight(e._elsThatCanBeStuck(i))};for("top"===t.edge&&i.reverse(),c.each(i,function(t,e){e.canBeStuck(!0)});e._elsThatCanBeStuck(i).length&&!(s()<=o);){var n=e._elsThatCanBeStuck(i)[0];t.reset(n),n.canBeStuck(!1),e.hasResized||(e.hasResized=!0)}},getElementAtStickyEdge:function(t){var e=this._elsThatCanBeStuck(t._els);return e["top"===t.edge?0:e.length-1]},getElementAtOppositeEnd:function(t){var e=this._elsThatCanBeStuck(t._els);return e["top"===t.edge?e.length-1:0]},getInPageEdgePosition:function(t){return this.getElementAtStickyEdge(t).inPageEdgePosition},getHeight:function(t){return this._getTotalHeight(this._elsThatCanBeStuck(t))},adjustForResize:function(t){var e=t.getWindowDimensions().height;"top"===t.edge?c(window).scrollTop(this.getInPageEdgePosition(t)):c(window).scrollTop(this.getInPageEdgePosition(t)-e),this.hasResized=!1},releaseEl:function(t,e){t.$fixedEl.css(e.edge,"")}}),i=(t.prototype.setMode=function(t){n=t},t.prototype.getWindowDimensions=function(){return{height:c(l).height(),width:c(l).width()}},t.prototype.getWindowPositions=function(){return{scrollTop:c(l).scrollTop()}},t.prototype.setElementPositions=function(){var i=this,o=i.getWindowDimensions(),t=i.getWindowPositions().scrollTop,s={top:t,bottom:t+o.height};d.unmark(i),c.each(i._els,function(t,e){e.canBeStuck()&&(e=e,!i.viewportIsWideEnough(o.width)||i.windowNotPastScrolledFrom(s,i.getScrolledFrom(e))?i.reset(e):i.windowNotPastScrollingTo(s,i.getScrollingTo(e))?(i.stick(e),e.isStopped()&&i.unstop(e)):(e.isStuck()||i.stick(e),i.stop(e)))}),d.mark(i),!1===i._initialPositionsSet&&(i._initialPositionsSet=!0)},t.prototype.setElementDimensions=function(t,e){t.$fixedEl;this.setElWidth(t),this.setElHeight(t,function(){t._$shim&&t.updateShim(),void 0!==e&&e()})},t.prototype.reset=function(t){t.isStopped()&&this.unstop(t),t.isStuck()&&this.release(t)},t.prototype.recalculate=function(){var t=this;this.syncWithDOM(function(){a.syncEls(t._els),t.setEvents(),"dialog"===n&&(u.fitToHeight(t),u.hasResized&&u.adjustForResize(t)),t.setElementPositions()})},t.prototype.scrollToRevealElement=function(t){var t=c(t),e=t.closest(".sticky-scroll-area").get(0),i=c.grep(a._scrollAreas,function(t){return t.node===e});i.length&&i[0].scrollToRevealElement(t)},t.prototype.setElWidth=function(t){var e=t.$fixedEl,i=a.getAreaByEl(t),i=c(i.node).width();t.horizontalSpace=i,t._$shim&&e.width(i)},t.prototype.setElHeight=function(t,e){function i(){t.height=n.outerHeight(),t._$shim?t.inPageEdgePosition=s.getInPageEdgePosition(t._$shim):t.inPageEdgePosition=s.getInPageEdgePosition(n),e()}var o,s=this,n=t.$fixedEl,r=n.find("img");!t.hasLoaded()&&0<r.length?((o=new l.Image).onload=function(){i()},o.src=r.attr("src")):i()},t.prototype.allElementsLoaded=function(t){return this._els.length===t},t.prototype.getElForNode=function(e){var t=c.grep(this._els,function(t){return t.$fixedEl.is(e)});return!!t.length&&t[0]},t.prototype.add=function(t,e,i){var o=this,s=c(t),n=this.getElForNode(t),r=!!n,t=function(){n.hasLoaded(!0),r||o._els.push(n),e&&o.setElementPositions(),void 0!==i&&i()};r||(n=new h(s,o),a.addEl(n,o.edge,o.CSS_SELECTOR)),o.setElementDimensions(n,t)},t.prototype.remove=function(e){-1!==c.inArray(e,this._els)&&(this.reset(e),this._els=c.grep(this._els,function(t){return t!==e}))},t.prototype.syncWithDOM=function(t){var i=this,e=c(i.CSS_SELECTOR),o=e.length,s=function(){i._els.length===o&&(i.endOfScrollArea=i.getEndOfScrollArea(),void 0!==t&&t())};this._els.length&&c.each(this._els,function(t,e){e.isInPage()||i.remove(e)}),o&&(this._initialPositionsSet=!1,e.each(function(t,e){i.add(e,!1,s)}))},t.prototype.init=function(){this.recalculate()},t.prototype.setEvents=function(){this._scrollEvent=this.onScroll.bind(this),this._resizeEvent=this.onResize.bind(this),!1===this._scrollTimeout&&(c(l).scroll(this._scrollEvent),this._scrollTimeout=l.setInterval(this.checkScroll.bind(this),50)),!1===this._resizeTimeout&&(c(l).resize(this._resizeEvent),this._resizeTimeout=l.setInterval(this.checkResize.bind(this),50))},t.prototype.clearEvents=function(){!1!==this._scrollTimeout&&(c(l).off("scroll",this._scrollEvent),l.clearInterval(this._scrollTimeout),this._scrollTimeout=!1),!1!==this._resizeTimeout&&(c(l).off("resize",this._resizeEvent),l.clearInterval(this._resizeTimeout),this._resizeTimeout=!1)},t.prototype.viewportIsWideEnough=function(t){return 768<t},t.prototype.onScroll=function(){this._hasScrolled=!0},t.prototype.onResize=function(){this._windowHasResized=!0},t.prototype.checkScroll=function(){!0===this._hasScrolled&&(this._hasScrolled=!1,this.setElementPositions())},t.prototype.checkResize=function(){var i=this,o=i.getWindowDimensions().width;!0===i._windowHasResized&&(i._windowHasResized=!1,c.each(i._els,function(t,e){i.viewportIsWideEnough(o)?i.setElementDimensions(e):i.reset(e)}),i.viewportIsWideEnough(o)&&("dialog"===n&&(u.fitToHeight(i),u.hasResized&&u.adjustForResize(i)),i.setElementPositions()))},t.prototype.release=function(t){var e;t.isStuck()&&(e=t.$fixedEl,t.removeStickyClasses(this),e.css("width",""),u.releaseEl(t,this),t.removeShim(),t.release(this))},new t(".js-stick-at-top-when-scrolling")),o=(i.edge="top",i.getEndOfScrollArea=function(){var t=c(".js-footer:eq(0)");return 0===t.length?0:t.offset().top-this.STOP_PADDING},i.getInPageEdgePosition=function(t){return t.offset().top},i.getScrolledFrom=function(t){return"dialog"===n?u.getInPageEdgePosition(this):t.inPageEdgePosition},i.getScrollingTo=function(t){t=t.height;return"dialog"===n&&(t=u.getHeight(this._els)),this.endOfScrollArea-t},i.getStoppingPosition=function(t){var e=0;return"dialog"===n&&(e=u.getOffsetFromEnd(t,this)),this.endOfScrollArea-e-t.height},i.windowNotPastScrolledFrom=function(t,e){return e>t.top},i.windowNotPastScrollingTo=function(t,e){return t.top<e},i.stick=function(t){var e,i;t.isStuck()||(e=t.$fixedEl,i=0,"dialog"===n&&(i=u.getOffsetFromEdge(t,this)),t.addShim("before"),e.css({width:e.width()+"px",top:i+"px"}),t.stick(this))},i.stop=function(t){t.isStopped()||(t.$fixedEl.css({position:"absolute",top:this.getStoppingPosition(t)}),t.stop())},i.unstop=function(t){var e=0;"dialog"===n&&(e=u.getOffsetFromEdge(t,this)),t.$fixedEl.css({position:"",top:e+"px"}),t.unstop()},new t(".js-stick-at-bottom-when-scrolling"));o.edge="bottom",o.getEndOfScrollArea=function(){var t=c(".js-header:eq(0)");return 0===t.length?0:t.offset().top+t.outerHeight()+this.STOP_PADDING},o.getInPageEdgePosition=function(t){return t.offset().top+t.outerHeight()},o.getScrolledFrom=function(t){return"dialog"===n?u.getInPageEdgePosition(this):t.inPageEdgePosition},o.getScrollingTo=function(t){t=t.height;return"dialog"===n&&(t=u.getHeight(this._els)),this.endOfScrollArea+t},o.getStoppingPosition=function(t){var e=0;return"dialog"===n&&(e=u.getOffsetFromEnd(t,this)),this.endOfScrollArea+e},o.windowNotPastScrolledFrom=function(t,e){return e<t.bottom},o.windowNotPastScrollingTo=function(t,e){return t.bottom>e},o.stick=function(t){var e,i;t.isStuck()||(e=t.$fixedEl,i=0,"dialog"===n&&(i=u.getOffsetFromEdge(t,this)),t.addShim("after"),e.css({width:e.width()+"px",bottom:i+"px"}),t.stick(this))},o.stop=function(t){t.isStopped()||(t.$fixedEl.css({position:"absolute",top:this.getStoppingPosition(t),bottom:"auto"}),t.stop())},o.unstop=function(t){var e=0;"dialog"===n&&(e=u.getOffsetFromEdge(t,this)),t.$fixedEl.css({position:"",top:"",bottom:e+"px"}),t.unstop()},e.stickAtTopWhenScrolling=i,e.stickAtBottomWhenScrolling=o,l.GOVUK=e}(window);
"use strict";!function(o){document.queryCommandSupported("copy")&&(o.CopyToClipboard=function(){var c=function(o){return'\n        <span class="copy-to-clipboard__value">'.concat(o.valueLabel?'<span class="govuk-visually-hidden">'+o.thing+": </span>":"").concat(o.value,'</span>\n        <span class="copy-to-clipboard__notice govuk-visually-hidden" aria-live="assertive">\n          ').concat(o.onload?"":o.thing+" returned to page, press button to copy to clipboard",'\n        </span>\n        <button type="button" class="govuk-button govuk-button--secondary copy-to-clipboard__button--copy">\n          Copy ').concat(o.thing," to clipboard").concat(o.name?'<span class="govuk-visually-hidden"> for '+o.name+"</span>":"","\n        </button>\n      ")},i=function(o){return'\n        <span class="copy-to-clipboard__notice" aria-live="assertive">\n          <span class="govuk-visually-hidden">'.concat(o.thing,' </span>Copied to clipboard<span class="govuk-visually-hidden">, press button to show in page</span>\n        </span>\n        <button type="button" class="govuk-button govuk-button--secondary copy-to-clipboard__button--show">\n          Show ').concat(o.thing).concat(o.name?'<span class="govuk-visually-hidden"> for '+o.name+"</span>":"","\n        </button>\n      ")};this.getRangeFromElement=function(o){var n=document.createRange(),t=Array.prototype.slice.call(o.childNodes),a=-1;return t.forEach(function(o,n){1===o.nodeType&&o.classList.contains("govuk-visually-hidden")&&(a=n)}),n.selectNodeContents(o),-1!==a&&n.setStart(o,a+1),n},this.copyValueToClipboard=function(o,n){var t=window.getSelection?window.getSelection():document.selection,o=this.getRangeFromElement(o);t.removeAllRanges(),t.addRange(o),document.execCommand("copy"),t.removeAllRanges(),n()},this.start=function(o){var n=this,t=$(o),a={value:t.data("value"),thing:t.data("thing")},e=t.data("name");e!==a.thing&&(a.name=e,a.valueLabel=!0),t.addClass("copy-to-clipboard").css("min-height",t.height()).html(c($.extend({onload:!0},a))).on("click",".copy-to-clipboard__button--copy",function(){return n.copyValueToClipboard($(".copy-to-clipboard__value",o)[0],function(){return t.html(i(a)).find(".govuk-button").focus()})}).on("click",".copy-to-clipboard__button--show",function(){return t.html(c(a)).find(".govuk-button").focus()}),"stickAtBottomWhenScrolling"in GOVUK&&GOVUK.stickAtBottomWhenScrolling.recalculate()}})}(window.GOVUK.NotifyModules);
"use strict";window.GOVUK.NotifyModules.Autofocus=function(){this.start=function(t){var t=$(t),e=t.data("forceFocus");0<$(window).scrollTop()&&!e||(e=0===(e=t.filter("input, textarea, select")).length?$("input, textarea, select",t):e).eq(0).trigger("focus")}};
"use strict";!function(t){var i;"oninput"in document.createElement("input")&&(i=/\(\(([^\)\((\?)]+)(\?\?)?([^\)\(]*)\)\)/g,t.EnhancedTextbox=function(){var t=this;this.start=function(t){this.highlightPlaceholders=void 0===t.data("highlightPlaceholders")||!!t.data("highlightPlaceholders"),this.$textbox=$(t).wrap("\n          <div class='textbox-highlight-wrapper' />\n        ").after(this.$background=$('\n          <div class="textbox-highlight-background" aria-hidden="true" />\n        ')).on("input",this.update),$(window).on("resize",this.resize),t=this.$textbox.clone().appendTo("body").css({position:"absolute",visibility:"hidden",display:"block"}),this.initialHeight=t.height(),this.$background.css({"border-width":this.$textbox.css("border-width")}),t.remove(),this.$textbox.trigger("input")},this.resize=function(){t.$background.width(t.$textbox.width()),t.$textbox.height(Math.max(t.initialHeight,t.$background.outerHeight())),"stickAtBottomWhenScrolling"in GOVUK&&GOVUK.stickAtBottomWhenScrolling.recalculate()},this.contentEscaped=function(){return $("<div/>").text(t.$textbox.val()).html()},this.contentReplaced=function(){return t.contentEscaped().replace(i,function(t,i,e,n){return n&&e?"<span class='placeholder-conditional'>((".concat(i,"??</span>").concat(n,"))"):"<span class='placeholder'>((".concat(i).concat(n,"))</span>")})},this.update=function(){t.$background.html(t.highlightPlaceholders?t.contentReplaced():t.contentEscaped()),t.resize()}})}(window.GOVUK.NotifyModules);
"use strict";window.GOVUK.NotifyModules.FileUpload=function(){var n=this;this.submit=function(){return n.$form.trigger("submit")},this.addCancelButton=function(){var t=$('\n        <a href="" role="button" class="file-upload-button govuk-button govuk-button--warning">\n          Cancel upload\n        </a>\n      ');$("button.file-upload-button",n.$form).replaceWith(t),new window.GOVUK.Frontend.Button(n.$form[0]).init(),t.focus()},this.addFakeButton=function(){var n=this,t=this.$field.data("buttonText"),o='\n        <button type="button" class="file-upload-button govuk-button govuk-!-margin-right-1" id="file-upload-button">\n          '.concat(t,"\n        </button>");0<this.$fieldErrors.length&&(o='\n          <label class="file-upload-button-label error-message" for="file-upload-button">\n            <span class="govuk-visually-hidden">'.concat(t," </span>\n            ").concat(this.$fieldErrors.eq(0).text(),"\n          </label>\n          ").concat(o)),$(o).on("click",function(t){return n.$field.click()}).insertAfter(this.$field)},this.start=function(t){var n=this;this.$form=$(t),this.$field=this.$form.find(".file-upload-field"),this.$fieldErrors=this.$form.find(".file-upload-label .error-message"),this.addFakeButton(),$(window).on("pageshow",function(){return n.$form[0].reset()}),this.$form.on("change",".file-upload-field",function(){return n.submit()&&n.addCancelButton()})}};
"use strict";!function(e){function r(e,o){"default"===e&&$("[type=radio]",o).eq(0).focus(),"option"===e&&$("[type=radio]",o).eq(1).focus()}var o=e.GOVUK.NotifyModules,e=e.Hogan,v={initial:e.compile('\n      {{#showNowAsDefault}}\n        <div class="radio-select__column">\n          <div class="govuk-radios__item">\n            <input class="govuk-radios__input" checked="checked" id="{{name}}-0" name="{{name}}" type="radio" value="">\n            <label class="govuk-label govuk-radios__label" for="{{name}}-0">Now</label>\n          </div>\n        </div>\n      {{/showNowAsDefault}}\n      <div class="radio-select__column">\n        {{#categories}}\n          <input type=\'button\' class=\'govuk-button govuk-button--secondary radio-select__button--category\' aria-expanded="false" value=\'{{.}}\' />\n        {{/categories}}\n      </div>\n    '),choose:e.compile('\n      {{#showNowAsDefault}}\n        <div class="radio-select__column">\n          <div class="govuk-radios__item">\n            <input class="govuk-radios__input" checked="checked" id="{{name}}-0" name="{{name}}" type="radio" value="">\n            <label class="govuk-label govuk-radios__label" for="{{name}}-0">Now</label>\n          </div>\n        </div>\n      {{/showNowAsDefault}}\n      <div class="radio-select__column">\n        {{#choices}}\n          <div class="govuk-radios__item js-option">\n            <input class="govuk-radios__input" type="radio" value="{{value}}" id="{{id}}" name="{{name}}" />\n            <label class="govuk-label govuk-radios__label" for="{{id}}">{{label}}</label>\n          </div>\n        {{/choices}}\n        <input type=\'button\' class=\'govuk-button govuk-button--secondary radio-select__button--done\' aria-expanded=\'true\' value=\'Done\' />\n      </div>\n    '),chosen:e.compile('\n      {{#showNowAsDefault}}\n        <div class="radio-select__column">\n          <div class="govuk-radios__item">\n            <input class="govuk-radios__input" id="{{name}}-0" name="{{name}}" type="radio" value="">\n            <label class="govuk-label govuk-radios__label" for="{{name}}-0">Now</label>\n          </div>\n        </div>\n      {{/showNowAsDefault}}\n      <div class="radio-select__column">\n        {{#choices}}\n          <div class="govuk-radios__item">\n            <input class="govuk-radios__input" checked="checked" type="radio" value="{{value}}" id="{{id}}" name="{{name}}" />\n            <label class="govuk-label govuk-radios__label" for="{{id}}">{{label}}</label>\n          </div>\n        {{/choices}}\n      </div>\n      <div class="radio-select__column">\n        <input type=\'button\' class=\'govuk-button govuk-button--secondary radio-select__button--reset\' aria-expanded=\'false\' value=\'Choose a different time\' />\n      </div>\n    ')};o.RadioSelect=function(){this.start=function(n){function a(){l("initial",{categories:e,name:u,showNowAsDefault:d}),r("default",n)}function o(o){l("chosen",{choices:s.filter(function(e){return e.value==o}),name:u,showNowAsDefault:d}),r("option",n)}function t(e){(e=e.target.parentNode)===c&&(e=$("input",e).attr("value"),o(e),c=null,$(document).off("mouseup",t))}var i=$(n),l=function(e,o){i.html(v[e].render(o))},s=$("label",i).toArray().map(function(e){e=$(e);return{id:e.attr("for"),label:$.trim(e.text()),value:e.prev("input").attr("value")}}),e=i.data("categories").split(","),u=i.find("input").eq(0).attr("name"),c=null,d="true"===i.data("show-now-as-default").toString()&&{name:u};i.on("click",".radio-select__button--category",function(e){e.preventDefault();var e=$(this).attr("value").split(" "),o=e[e.length-1].toLowerCase();l("choose",{choices:s.filter(function(e){return-1<e.label.toLowerCase().indexOf(o)}),name:u,showNowAsDefault:d}),r("option",n)}).on("mousedown",".js-option",function(e){c=this,$(document).on("mouseup",t)}).on("keydown","input[type=radio]",function(e){if(13!==e.which&&32!==e.which)return!0;e.preventDefault();e=$(this).attr("value");o(e)}).on("click",".radio-select__button--done",function(e){e.preventDefault();var o=$("input[type=radio]:checked",this.parentNode);o.length?(l("chosen",{choices:s.filter(function(e){return e.value==o.eq(0).attr("value")}),name:u,showNowAsDefault:d}),r("option",n)):(a(),r("default",n))}).on("click",".radio-select__button--reset",function(e){e.preventDefault(),a(),r("default",n)}),l("initial",{categories:e,name:u,showNowAsDefault:d}),i.css({height:"auto"})}}}(window);
"use strict";!function(a){function i(t){return parseInt(Math.max(250*Math.sqrt(t)-1e3,1e3))}function s(t){this._$contents=t,this._classNames=[],this._classesTo$ElsMap={}}var l={},u=a.GOVUK.vendor.morphdom,c=0,f=(s.prototype.addClassName=function(t){-1===this._classNames.indexOf(t)&&this._classNames.push(t)},s.prototype.remove=function(){var e=this;this._classNames.forEach(function(t){var s=$("."+t,e._$contents).removeClass(t);0<s.length&&(e._classesTo$ElsMap[t]=s)})},s.prototype.replace=function(){function t(t,s){a.document.body.contains(s)&&$(s).addClass(e)}for(var e in this._classesTo$ElsMap)this._classesTo$ElsMap[e].each(t);this._classesTo$ElsMap={}},function(t,s,a,e){var n=arguments,o=Date.now();"hidden"!==document.visibilityState&&1===a.push(t)&&$.ajax(s,{method:e?"post":"get",data:e?$("#"+e).serialize():{}}).done(function(t){for(var s=a,e=t;s.length;)s.shift()(e);1===t.stop&&(f=function(){}),c=i(Date.now()-o)}).fail(function(){return f=function(){}}),setTimeout(function(){return f.apply(window,n)},c)});a.GOVUK.NotifyModules.UpdateContent=function(){this.start=function(t){var t=$(t),n=t.children().eq(0),o=t.data("key"),i=t.data("resource"),c=t.data("form"),r=new s(n);t.replaceWith(n),void 0!==n.data("classesToPersist")&&n.data("classesToPersist").split(" ").forEach(function(t){return r.addClassName(t)}),setTimeout(function(){return f((s=n,e=o,a=r,function(t){a.remove(),u(s.get(0),$(t[e]).get(0)),a.replace()}),i,l[i]=l[i]||[],c);var s,e,a},2e3)}},a.GOVUK.NotifyModules.UpdateContent.calculateBackoff=i}(window);
"use strict";!function(t){var e=[],i=function(t){var t=$(t),e=t.prop("id");if(!e)return!1;this.idPattern=e,this.elementSelector=".list-entry, .input-list__button--remove, .input-list__button--add",this.entries=[],this.$wrapper=t,this.minEntries=2,this.listItemName=this.$wrapper.data("listItemName"),this.getSharedAttributes(),this.getValues(),this.maxEntries=this.entries.length,this.trimEntries(),this.render(),this.bindEvents()};i.optionalAttributes=["aria-describedby"],i.prototype.entryTemplate=Hogan.compile('<div class="list-entry"><label for="{{{id}}}" class="govuk-input--numbered__label"><span class="govuk-visually-hidden">{{listItemName}} number </span>{{number}}.</label><input name="{{name}}" id="{{id}}" {{#value}}value="{{value}}{{/value}}" {{{sharedAttributes}}}/>{{#button}}<button type="button" class="govuk-button govuk-button--secondary input-list__button--remove">Remove<span class="govuk-visually-hidden"> {{listItemName}} number {{number}}</span></button>{{/button}}</div>'),i.prototype.addButtonTemplate=Hogan.compile('<button type="button" class="govuk-button govuk-button--secondary input-list__button--add">Add another {{listItemName}} ({{entriesLeft}} remaining)</button>'),i.prototype.getSharedAttributes=function(){var i,n,t=this.$wrapper.find("input"),a=Hogan.compile(' {{name}}="{{value}}"'),s=["id","name","value"],r=[],e=function(t){for(var e,i,n="",s=t.length,r=[];s--;)for(i=(e=t[s]).length;i--;)-1===$.inArray(e[i].name,r)&&(n+=a.render({name:e[i].name,value:e[i].value}),r.push(e[i].name));return n};t.each(function(t,e){for(i=e.attributes.length,n=[];i--;)-1===$.inArray(e.attributes[i].name,s)&&n.push({name:e.attributes[i].name,value:e.attributes[i].value});n.length&&r.push(n)}),this.sharedAttributes=r.length?e(r):""},i.prototype.getValues=function(){this.entries=[],this.$wrapper.find("input").each(function(t,e){e=$(e).val();this.entries.push(e)}.bind(this))},i.prototype.trimEntries=function(){for(var t=this.entries.length,e=[];t--;)""!==this.entries[t]?e.push(this.entries[t]):t<this.minEntries&&e.push("");this.entries=e.reverse()},i.prototype.getId=function(t){var e=this.idPattern.replace("list-entry-","");return void 0===t?e:e+"-"+t},i.prototype.bindEvents=function(){this.$wrapper.on("click",".input-list__button--remove",function(t){this.removeEntry($(t.target))}.bind(this)),this.$wrapper.on("click",".input-list__button--add",function(t){this.addEntry()}.bind(this))},i.prototype.shiftFocus=function(t){t="remove"===t.action?1<t.entryNumberFocused?t.entryNumberFocused-1:1:t.entryNumberFocused+1;this.$wrapper.find(".list-entry").eq(t-1).find("input").focus()},i.prototype.removeEntryFromEntries=function(t){for(var e=[],i=0,n=this.entries.length;i<n;i++)t-1!==i&&e.push(this.entries[i]);this.entries=e},i.prototype.addEntry=function(t){var e=this.entries.length;this.getValues(),this.entries.push(""),this.render(),this.shiftFocus({action:"add",entryNumberFocused:e})},i.prototype.removeEntry=function(t){t=parseInt(t.find("span").text().match(/\d+/)[0],10);this.getValues(),this.removeEntryFromEntries(t),this.render(),this.shiftFocus({action:"remove",entryNumberFocused:t})},i.prototype.render=function(){this.$wrapper.find(this.elementSelector).remove(),$.each(this.entries,function(t,e){var i=t+1,t={id:this.getId(i),number:i,index:t,name:this.getId(i),value:e,listItemName:this.listItemName,sharedAttributes:this.sharedAttributes};1<i&&(t.button=!0),this.$wrapper.append(this.entryTemplate.render(t))}.bind(this)),this.entries.length<this.maxEntries&&this.$wrapper.append(this.addButtonTemplate.render({listItemName:this.listItemName,entriesLeft:this.maxEntries-this.entries.length}))},t.ListEntry=function(){this.start=function(t){return e.push(new i($(t)))}}}(window.GOVUK.NotifyModules);
"use strict";!function(t){function l(t){return t.toLowerCase().replace(/ /g,"")}function c(t){return 0===t?"no results":t+(1===t?" result":" results")}var u;t.LiveSearch=function(){this.start=function(t){var a,r,n,s,t=$(t),e=$("input",t),i=$("label",t),o=$(".live-search__status",t),i=(a=e,r=i,n=o,s=$(t.data("targets")),function(){var e=l(a.val()),i=0;s.each(function(){var t=$(".live-search-relevant",this).text()||$(this).text(),t=-1<l(t).indexOf(l(e));return $(this).has(":checked").length?($(this).show(),void i++):""==e?($(this).css("display",""),void i++):($(this).toggle(t),void(t&&i++))}),"loaded"===u?(""!==e&&a.attr("aria-label",r.text().trim()+", "+c(i)),u="active"):(a.removeAttr("aria-label"),n.text(c(i))),"stickAtBottomWhenScrolling"in GOVUK&&GOVUK.stickAtBottomWhenScrolling.recalculate()});u="loaded",e.on("keyup input",i),i()}}}(window.GOVUK.NotifyModules);
"use strict";!function(t){t.GOVUK.NotifyModules.TrackError=function(){this.start=function(r){"analytics"in t.GOVUK&&t.GOVUK.analytics.trackEvent("Error",$(r).data("error-type"),{label:$(r).data("error-label")})}}}(window);
"use strict";!function(){function e(t){return function(){t.data("clicked","")}}$("form").on("submit",function(t){var i=$(this).find(":submit");"true"==i.data("clicked")?t.preventDefault():(i.data("clicked","true"),setTimeout(e(i),1500))})}();
"use strict";window.GOVUK.NotifyModules.FullscreenTable=function(){var t=this;this.start=function(e){var t=this;this.$component=$(e),this.$table=this.$component.find("table"),this.nativeHeight=this.$component.innerHeight()+20,this.topOffset=this.$component.offset().top,this.insertShims(),this.maintainWidth(),this.maintainHeight(),this.toggleShadows(),$(window).on("scroll resize",this.maintainHeight).on("resize",this.maintainWidth),this.$scrollableTable.on("scroll",this.toggleShadows).on("scroll",this.maintainHeight).on("focus blur",function(){return t.$component.toggleClass("js-focus-style")}),window.GOVUK.stickAtBottomWhenScrolling&&window.GOVUK.stickAtBottomWhenScrolling.recalculate&&window.GOVUK.stickAtBottomWhenScrolling.recalculate(),this.maintainWidth()},this.insertShims=function(){var e=t.$table.find("caption").text().toLowerCase().replace(/[^A-Za-z]+/g,"");t.$table.find("caption").attr("id",e),t.$table.wrap('<div class="fullscreen-scrollable-table" role="region" aria-labelledby="'.concat(e,'" tabindex="0"/>')),t.$component.append(t.$component.find(".fullscreen-scrollable-table").clone().addClass("fullscreen-fixed-table").removeClass("fullscreen-scrollable-table").removeAttr("role aria-labelledby tabindex").attr("aria-hidden",!0).find("caption").removeAttr("id").closest(".fullscreen-fixed-table")).append('<div class="fullscreen-right-shadow" />').after($("<div class='fullscreen-shim'/>").css({height:t.nativeHeight,top:t.topOffset})).css("position","absolute"),t.$scrollableTable=t.$component.find(".fullscreen-scrollable-table"),t.$fixedTable=t.$component.find(".fullscreen-fixed-table")},this.maintainHeight=function(){var e=Math.min($(window).height()-t.topOffset+$(window).scrollTop(),t.nativeHeight);t.$scrollableTable.outerHeight(e),t.$fixedTable.outerHeight(e)},this.maintainWidth=function(){var e=t.$fixedTable.find(".table-field-index").outerWidth();t.$scrollableTable.css({width:t.$component.parent("main").width()-e,"margin-left":e}),t.$fixedTable.width(e+4)},this.toggleShadows=function(){t.$fixedTable.toggleClass("fullscreen-scrolled-table",0<t.$scrollableTable.scrollLeft()),t.$component.find(".fullscreen-right-shadow").toggleClass("visible",t.$scrollableTable.scrollLeft()<t.$table.width()-t.$scrollableTable.width()),setTimeout(function(){return t.$component.find(".fullscreen-right-shadow").addClass("with-transition")},3e3)}};
"use strict";window.GOVUK.NotifyModules.RadiosWithImages=function(){this.handleImageClick=function(){var e=this.id,e=document.querySelector('[aria-describedby="'+e+'"]');e.checked=!0,e.focus()},this.start=function(e){e=e.get(0);e.addEventListener("click",this.handleImageClick),e.style.cursor="pointer"}};
"use strict";!function(n){var e,t,a,i=($=n.jQuery)('.govuk-radios__item input[name="branding_style"]:checked');function r(){return $.map(arguments,function(n,e){return encodeURI(n[0])+"="+encodeURI(n[1])}).join("&")}i.length&&(i=i.val(),n=$('<div class="govuk-grid-column-full"></div>'),e=$("form"),t=e.data("previewType"),a=$('<iframe src="/_'.concat(t,"?").concat(r(["branding_style",i]),'" class="branding-preview" scrolling="no"></iframe>')),n.append(a),e.find(".govuk-grid-row").eq(0).prepend(n),e.attr("action",location.pathname.replace(new RegExp("set-".concat(t,"-branding$")),"preview-".concat(t,"-branding"))),e.find("button").text("Save"),$("fieldset").on("change",'input[name="branding_style"]',function(n){"branding_style"==(n=$(n.target)).attr("name")&&(i=n.val()),a.attr("src","/_".concat(t,"?").concat(r(["branding_style",i])))}))}(window);
"use strict";!function(t){t.ColourPreview=function(){var i=this;this.start=function(t){i.$input=$(t),i.$input.parent().append(i.$preview=$('<span class="textbox-colour-preview"></span>')),i.$input.on("input",i.update).trigger("input")},this.update=function(){return i.$preview.css("background",(t=i.$input.val().trim()).match(/^#?(?:[0-9A-F]{3}){1,2}$/i)?"#"===(t=t).charAt(0)?t:"#"+t:"#FFFFFF");var t}}}(window.GOVUK.NotifyModules);
"use strict";window.GOVUK.NotifyModules.TemplateFolderForm=function(){var e=this;this.start=function(t){var e=this;this.$form=$(t),this.$form.find("button[value=unknown]").remove(),this.$liveRegionCounter=this.$form.find(".selection-counter"),this.$liveRegionCounter.before(this.nothingSelectedButtons),this.$liveRegionCounter.before(this.itemsSelectedButtons),this.states=[{key:"nothing-selected-buttons",$el:this.$form.find("#nothing_selected"),cancellable:!1},{key:"items-selected-buttons",$el:this.$form.find("#items_selected"),cancellable:!1},{key:"move-to-existing-folder",$el:this.$form.find("#move_to_folder_radios"),cancellable:!0,setFocus:function(){return $("#move_to_folder_radios").focus()},action:"move to folder",description:"Press move to confirm or cancel to close"},{key:"move-to-new-folder",$el:this.$form.find("#move_to_new_folder_form"),cancellable:!0,setFocus:function(){return $("#move_to_new_folder_form").focus()},action:"move to new folder",description:"Press add to new folder to confirm name or cancel to close"},{key:"add-new-folder",$el:this.$form.find("#add_new_folder_form"),cancellable:!0,setFocus:function(){return $("#add_new_folder_form").focus()},action:"new folder",description:"Press add new folder to confirm name or cancel to close"},{key:"add-new-template",$el:this.$form.find("#add_new_template_form"),cancellable:!0,setFocus:function(){return $("#add_new_template_form").focus()},action:"new template",description:"Press continue to confirm selection or cancel to close"}],this.states.filter(function(t){return t.cancellable}).forEach(function(t){return e.addCancelButton(t)}),this.states.filter(function(t){return"items-selected-buttons"===t.key}).forEach(function(t){return e.addClearButton(t)}),this.states.filter(function(t){return t.setFocus}).forEach(function(t){return t.$el.attr("tabindex","0")}),this.addDescriptionsToStates(),this.activateStickyElements(),this._lastState=this.$form.data("prev-state"),void 0===this._lastState?this.selectActionButtons():(this.currentState=this._lastState,this.render()),this.$form.on("click","button.govuk-button--secondary",function(t){return e.actionButtonClicked(t)}),this.$form.on("change","input[type=checkbox]",function(){return e.templateFolderCheckboxChanged()})},this.addDescriptionsToStates=function(){var n,o;$.each(this.states.filter(function(t){return"description"in t}),function(t,e){n="".concat(e.key,"__description"),o='<p class="govuk-visually-hidden" id="'.concat(n,'">').concat(e.description,"</p>"),e.$el.prepend(o).attr("aria-describedby",n)})},this.activateStickyElements=function(){var e="js-will-stick-at-bottom-when-scrolling";this.states.forEach(function(t){t.$el.find("."+e).removeClass(e).addClass("js-stick-at-bottom-when-scrolling")})},this.addCancelButton=function(t){var e=this,n="[value=".concat(t.key,"]"),o=this.makeButton("Cancel",{onclick:function(){t.$el.find("input:radio").prop("checked",!1),t.$el.find("input:text").val(""),e.selectActionButtons(n)},cancelSelector:n,nonvisualText:t.action});t.$el.find(n).after(o)},this.addClearButton=function(t){var e=this,n=this.makeButton("Clear",{onclick:function(){e.$form.find("input:checkbox").prop("checked",!1),e.selectActionButtons("button[value=add-new-template]")},nonvisualText:"selection"});t.$el.find(".checkbox-list-selected-counter").append(n)},this.makeButton=function(t,e){t=$('<a href=""></a>').html(t).addClass("govuk-link govuk-link--no-visited-state js-cancel").data("target",e.cancelSelector||void 0).attr("tabindex","0").on("click keydown",function(t){-1<[13,32,void 0].indexOf(t.keyCode)&&(t.preventDefault(),e.hasOwnProperty("onclick")&&e.onclick())});return e.hasOwnProperty("nonvisualText")&&t.append('<span class="govuk-visually-hidden"> '.concat(e.nonvisualText,"</span>")),t},this.selectActionButtons=function(t){this.currentState="nothing-selected-buttons",this.templateFolderCheckboxChanged(),t&&$(t).focus()},this.stateChanged=function(){var t=this.currentState!==this._lastState;return this._lastState=this.currentState,t},this.$singleNotificationChannel=document.querySelector("div[id=add_new_template_form]").getAttribute("data-channel"),this.$singleChannelService=document.querySelector("div[id=add_new_template_form]").getAttribute("data-service"),this.actionButtonClicked=function(t){t.preventDefault(),this.currentState=$(t.currentTarget).val(),"add-new-template"===t.currentTarget.value&&this.$singleNotificationChannel?window.location="/services/"+this.$singleChannelService+"/templates/add-"+this.$singleNotificationChannel:this.stateChanged()&&this.render()},this.selectionStatus={default:"Nothing selected",selected:function(e){function t(t){return 0===e[t]?"":1===e[t]?"1 ".concat(t.substring(0,t.length-1)):"".concat(e[t]," ").concat(t)}var n=[];return 0<e.templates&&n.push(t("templates")),0<e.folders&&n.push(t("folders")),n.join(", ")+" selected"},update:function(t){t=0<t.total?e.selectionStatus.selected(t):e.selectionStatus.default;$(".checkbox-list-selected-counter__count").html(t),e.$liveRegionCounter.html(t)}},this.templateFolderCheckboxChanged=function(){var t=this.countSelectedCheckboxes();"nothing-selected-buttons"===this.currentState&&0!==t.total?this.currentState="items-selected-buttons":"items-selected-buttons"===this.currentState&&0===t.total&&(this.currentState="nothing-selected-buttons"),this.stateChanged()&&this.render(),this.selectionStatus.update(t),$(".checkbox-list-selected-counter").toggle(this.hasCheckboxes())},this.hasCheckboxes=function(){return!!this.$form.find("input:checkbox").length},this.countSelectedCheckboxes=function(){var t=this.$form.find("input:checkbox:checked");return{templates:t.filter(function(t,e){return 0<$(e).siblings(".template-list-template").length}).length,folders:t.filter(function(t,e){return 0<$(e).siblings(".template-list-folder").length}).length,total:t.length}},this.render=function(){var e=this,t="default",n=this.states.filter(function(t){return t.key===e.currentState})[0];this.states.forEach(function(t){return t.key===e.currentState?e.$liveRegionCounter.before(t.$el):t.$el.detach()}),-1!==["move-to-existing-folder","add-new-template"].indexOf(this.currentState)&&(t="dialog"),GOVUK.stickAtBottomWhenScrolling.setMode(t),GOVUK.stickAtBottomWhenScrolling.recalculate(),n&&"setFocus"in n&&(t=$(window).scrollTop(),n.setFocus(),$(window).scrollTop(t))},this.nothingSelectedButtons=$('\n      <div id="nothing_selected">\n        <div class="js-stick-at-bottom-when-scrolling">\n          <button type="button" class="govuk-button govuk-button--secondary govuk-!-margin-right-3 govuk-!-margin-bottom-1" value="add-new-template" '.concat(this.$singleNotificationChannel?"":'aria-expanded="false"','>\n            New template\n          </button>\n          <button type="button" class="govuk-button govuk-button--secondary govuk-!-margin-bottom-1" value="add-new-folder" aria-expanded="false">New folder</button>\n          <div class="checkbox-list-selected-counter">\n            <span class="checkbox-list-selected-counter__count" aria-hidden="true">\n              ').concat(this.selectionStatus.default,"\n            </span>\n          </div>\n        </div>\n      </div>\n    ")).get(0),this.itemsSelectedButtons=$('\n      <div id="items_selected">\n        <div class="js-stick-at-bottom-when-scrolling">\n          <button type="button" class="govuk-button govuk-button--secondary govuk-!-margin-right-3 govuk-!-margin-bottom-1" value="move-to-existing-folder" aria-expanded="false">\n            Move<span class="govuk-visually-hidden"> selection to folder</span>\n          </button>\n          <button type="button" class="govuk-button govuk-button--secondary govuk-!-margin-bottom-1" value="move-to-new-folder" aria-expanded="false">Add to new folder</button>\n          <div class="checkbox-list-selected-counter" aria-hidden="true">\n            <span class="checkbox-list-selected-counter__count" aria-hidden="true">\n              '.concat(this.selectionStatus.selected(1),"\n            </span>\n          </div>\n        </div>\n      </div>\n    ")).get(0)};
"use strict";window.GOVUK.NotifyModules.AddBrandingOptionsForm=function(){var e=this;this.start=function(t){var e=this;this.$form=$(t),this.$liveRegionCounter=this.$form.find(".selection-counter"),this.$liveRegionCounter.before(this.nothingSelectedHint),this.$liveRegionCounter.before(this.itemsSelectedHint),this.states=[{key:"nothing-selected-hint",$el:this.$form.find("#nothing_selected"),cancellable:!1},{key:"items-selected-hint",$el:this.$form.find("#items_selected"),cancellable:!1}],this.states.filter(function(t){return"items-selected-hint"===t.key}).forEach(function(t){return e.addClearButton(t)}),this._lastState=this.$form.data("prev-state"),void 0===this._lastState?this.showInitialState():(this.currentState=this._lastState,this.render()),this.$form.on("change","input[type=checkbox]",function(){return e.BrandingOptionCheckboxChanged()})},this.addClearButton=function(t){var e=this,n=this.makeButton("Clear",{onclick:function(){e.$form.find("input:checkbox").prop("checked",!1),e.$form.find("input:checkbox").eq(0).focus(),e.showInitialState()},nonvisualText:"selection"});t.$el.find(".checkbox-list-selected-counter").append(n)},this.makeButton=function(t,e){t=$('<a href=""></a>').html(t).addClass("govuk-link govuk-link--no-visited-state js-cancel").attr("tabindex","0").on("click keydown",function(t){-1<[13,32,void 0].indexOf(t.keyCode)&&(t.preventDefault(),e.hasOwnProperty("onclick")&&e.onclick())});return e.hasOwnProperty("nonvisualText")&&t.append('<span class="govuk-visually-hidden"> '.concat(e.nonvisualText,"</span>")),t},this.showInitialState=function(){this.currentState="nothing-selected-hint",this.BrandingOptionCheckboxChanged()},this.stateChanged=function(){var t=this.currentState!==this._lastState;return this._lastState=this.currentState,t},this.selectionStatus={default:"Nothing selected",selected:function(t){var e,n=[];return 0<t.options&&n.push(0===t[e="options"]?"":1===t[e]?"1 ".concat(e.substring(0,e.length-1)):"".concat(t[e]," ").concat(e)),n.join(", ")+" selected"},update:function(t){t=0<t.options?e.selectionStatus.selected(t):e.selectionStatus.default;$(".checkbox-list-selected-counter__count").html(t),e.$liveRegionCounter.html(t)}},this.BrandingOptionCheckboxChanged=function(){var t=this.countSelectedCheckboxes();"nothing-selected-hint"===this.currentState&&0!==t.options?this.currentState="items-selected-hint":"items-selected-hint"===this.currentState&&0===t.options&&(this.currentState="nothing-selected-hint"),this.stateChanged()&&this.render(),this.selectionStatus.update(t)},this.countSelectedCheckboxes=function(){return{options:this.$form.find("input:checkbox:checked").length}},this.render=function(){var e=this;this.states.filter(function(t){return t.key===e.currentState})[0];this.states.forEach(function(t){return t.key===e.currentState?e.$liveRegionCounter.before(t.$el):t.$el.detach()})},this.nothingSelectedHint=$('\n      <div id="nothing_selected">\n        <div class="checkbox-list-selected-counter">\n          <span class="checkbox-list-selected-counter__count" aria-hidden="true">\n            '.concat(this.selectionStatus.default,"\n          </span>\n        </div>\n      </div>\n    ")).get(0),this.itemsSelectedHint=$('\n      <div id="items_selected">\n        <div class="checkbox-list-selected-counter">\n          <span class="checkbox-list-selected-counter__count" aria-hidden="true">\n            '.concat(this.selectionStatus.selected(1),"\n          </span>\n        </div>\n      </div>\n    ")).get(0)};
"use strict";!function(){var e=window.GOVUK;function i(t){this.module=t,this.$el=t.$formGroup.find(".selection-summary").first(),this.fieldLabel=t.fieldLabel,this.total=t.total,this.addContent(),this.update(t.getSelection())}function o(t){this.module=t,this.fieldLabel=t.fieldLabel,this.fieldsetId=t.$fieldset.attr("id"),this.$el=this.getEl(this.module.expanded),this.module.$formGroup.append(this.$el)}function t(){}i.prototype.templates={all:function(t,e,i){return"All ".concat(i,"s")},some:function(t,e,i){return"".concat(t," of ").concat(e," ").concat(i,"s")},none:function(t,e,i){return{folder:"No folders (only templates outside a folder)","team member":"No team members (only you)"}[i]||"No ".concat(i,"s")}},i.prototype.addContent=function(){var t=this.module.$formGroup.find(".govuk-hint");this.$text=$('<p class="selection-summary__text" />'),"folder"===this.fieldLabel&&this.$text.addClass("selection-summary__text--folders"),this.$el.attr("id",t.attr("id")),this.$el.append(this.$text),t.remove()},i.prototype.update=function(t){var e=t===this.total?"all":0<t?"some":"none";this.$text.html(this.templates[e](t,this.total,this.fieldLabel))},i.prototype.bindEvents=function(){var e=this;this.$el.on("blur",function(t){return $(e).attr("tabindex","-1")})},o.prototype.buttonContent={change:function(t){return"Choose ".concat(t,"s")},done:function(t){return'Done<span class="govuk-visually-hidden"> choosing '.concat(t,"s</span>")}},o.prototype.getEl=function(t){var e=this.buttonContent[t?"done":"change"](this.fieldLabel);return $('<div class="selection-footer'.concat(t?" js-stick-at-bottom-when-scrolling":"",'">\n              <button\n                type="button"\n                class="govuk-button govuk-button--secondary selection-footer__button"\n                aria-expanded="').concat(t?"true":"false",'"\n                aria-controls="').concat(this.fieldsetId,'">\n              ').concat(e,"\n              </button>\n            </div>"))},o.prototype.update=function(t){this.$el.remove(),this.$el=this.getEl(t),this.module.$formGroup.append(this.$el),e.stickAtBottomWhenScrolling.recalculate()},t.prototype._focusTextElement=function(t){t.attr("tabindex","-1").focus()},t.prototype.start=function(t){this.$component=$(t),this.$formGroup=this.$component.find(".govuk-form-group").first(),this.$fieldset=this.$formGroup.find("fieldset").first(),this.$checkboxes=this.$fieldset.find("input[type=checkbox]"),this.fieldLabel=this.$component.data("fieldLabel"),this.total=this.$checkboxes.length,this.legendText=this.$fieldset.find("legend").first().text().trim(),this.expanded=!1,this.addHeadingHideLegend(),this.footer=new o(this),this.summary=new i(this),this.$fieldset.before(this.summary.$el),this.$formGroup.addClass("selection-wrapper"),this.$fieldset.addClass("selection-content"),this.$fieldset.hide(),this.bindEvents()},t.prototype.getSelection=function(){return this.$checkboxes.filter(":checked").length},t.prototype.addHeadingHideLegend=function(){var t=this.$component.data("heading-level")||"2";this.$heading=$("<h".concat(t,' class="heading-small">').concat(this.legendText,"</h").concat(t,">")),this.$fieldset.before(this.$heading),this.$fieldset.find("legend").addClass("govuk-visually-hidden")},t.prototype.expand=function(t){void 0!==t&&t.preventDefault(),this.expanded||(this.$fieldset.show(),this.expanded=!0,this.summary.update(this.getSelection()),this.footer.update(this.expanded)),this._focusTextElement(this.$fieldset)},t.prototype.collapse=function(t){void 0!==t&&t.preventDefault(),this.expanded&&(this.$fieldset.hide(),this.expanded=!1,this.summary.update(this.getSelection()),this.footer.update(this.expanded)),this._focusTextElement(this.summary.$text)},t.prototype.handleClick=function(t){this.expanded?this.collapse(t):this.expand(t)},t.prototype.handleSelection=function(t){this.summary.update(this.getSelection(),this.total,this.fieldLabel)},t.prototype.bindEvents=function(){this.$formGroup.on("click",".govuk-button",this.handleClick.bind(this)),this.$checkboxes.on("click",this.handleSelection.bind(this)),this.summary.bindEvents(this)},e.NotifyModules.CollapsibleCheckboxes=t}();
"use strict";!function(r){r.GOVUK.NotifyModules.RegisterSecurityKey=function(){this.start=function(n){$(n).on("click",function(t){t.preventDefault(),r.GOVUK.ErrorBanner.hideBanner(),fetch("/webauthn/register").then(function(t){if(t.ok)return t.arrayBuffer();throw Error(t.statusText)}).then(function(t){t=r.CBOR.decode(t);return r.navigator.credentials.create(t)}).then(function(t){return t=t.response,e=n.data("csrfToken"),fetch("/webauthn/register",{method:"POST",headers:{"X-CSRFToken":e},body:r.CBOR.encode({attestationObject:new Uint8Array(t.attestationObject),clientDataJSON:new Uint8Array(t.clientDataJSON)})});var e}).then(function(t){if(!t.ok)throw Error(t.statusText);r.location.reload()}).catch(function(t){console.error(t),r.GOVUK.ErrorBanner.showBanner()})})}}}(window);
"use strict";!function(a){a.GOVUK.NotifyModules.AuthenticateSecurityKey=function(){this.start=function(r){$(r).on("click",function(e){e.preventDefault(),a.GOVUK.ErrorBanner.hideBanner(),fetch("/webauthn/authenticate").then(function(e){if(e.ok)return e.arrayBuffer();throw Error(e.statusText)}).then(function(e){e=a.CBOR.decode(e);return a.navigator.credentials.get(e)}).then(function(e){var t=new URL(a.location.href),n=new URL("/webauthn/authenticate",a.location.href),t=t.searchParams.get("next");return t&&n.searchParams.set("next",t),fetch(n,{method:"POST",headers:{"X-CSRFToken":r.data("csrfToken")},body:a.CBOR.encode({credentialId:new Uint8Array(e.rawId),authenticatorData:new Uint8Array(e.response.authenticatorData),signature:new Uint8Array(e.response.signature),clientDataJSON:new Uint8Array(e.response.clientDataJSON)})})}).then(function(e){if(e.ok)return e.arrayBuffer();throw Error(e.statusText)}).then(function(e){return Promise.resolve(a.CBOR.decode(e))}).then(function(e){a.location.assign(e.redirect_url)}).catch(function(e){console.error(e),a.GOVUK.ErrorBanner.showBanner()})})}}}(window);
"use strict";window.GOVUK.NotifyModules.UpdateStatus=function(){var u=this;this.start=function(t){var e,o,n,i,r,a="update-status";u.$component=$(t),u.$textbox=$("#"+u.$component.data("target")),u.$component.attr("id",a),u.$textbox.attr("aria-describedby",(u.$textbox.attr("aria-describedby")||"")+(u.$textbox.attr("aria-describedby")?" ":"")+a).on("input",(e=u.update,r=i=!(o=150),function(){var t=arguments,a=this;i?r=!0:(e.apply(a,t),i=!0),clearTimeout(n),n=setTimeout(function(){i=!1,r&&e.apply(a,t),r=!1},o)})).trigger("input")},this.update=function(){var a;$.ajax(u.$component.data("updates-url"),{method:"post",data:u.$textbox.parents("form").serialize()}).done((a=u.$component,function(t){return a.html(t.html)})).fail(function(){})}};
"use strict";window.GOVUK.ErrorBanner={hideBanner:function(){return $(".banner-dangerous").addClass("govuk-!-display-none")},showBanner:function(){return $(".banner-dangerous").removeClass("govuk-!-display-none").trigger("focus")}};
"use strict";window.GOVUK.NotifyModules.Homepage=function(){this.start=function(t){var e=$(t),n=0,o=null;e.on("click",function(){5==++n&&e.toggleClass("product-page-intro-wrapper--alternative"),clearTimeout(o),o=setTimeout(function(){return n=0},1500)})}};
"use strict";window.GOVUK.Frontend.initAll();var consentData=window.GOVUK.getConsentCookie(),showHideContent=(window.GOVUK.NotifyModules.CookieBanner.clearOldCookies(consentData),window.GOVUK.hasConsentFor("analytics",consentData)&&window.GOVUK.initAnalytics(),$(function(){return $("time.timeago").timeago()}),$(function(){return GOVUK.stickAtTopWhenScrolling.init()}),$(function(){return GOVUK.stickAtBottomWhenScrolling.init()}),new GOVUK.ShowHideContent);showHideContent.init(),$(function(){return GOVUK.notifyModules.start()}),$(function(){return $(".error-message, .govuk-error-message").eq(0).parent("label").next("input").trigger("focus")}),$(function(){return $(".banner-dangerous").eq(0).trigger("focus")}),$(function(){return $(".govuk-header__container").on("click",function(){$(this).css("border-color","#1d70b8")})}),$(".js-mark-focus-on-parent").on("focus blur","*",function(n){$target=$(n.target),"focusin"===n.type?$target.parent().addClass("js-child-has-focus"):$target.parent().removeClass("js-child-has-focus")});

  !function(){"use strict";function t(t){this.$module=t}t.prototype.init=function(){var t=this.$module;if(t){var n=t.querySelector('form[action="/form-handler"]');this.preventFormSubmission(n)}},t.prototype.preventFormSubmission=function(t){if(!t)return!1;t.addEventListener("submit",(function(t){t.preventDefault()}))},new t(document).init()}();
//# sourceMappingURL=example-a14d27b365afed4f7809dfacf8a30e4e.js.map

  !function(){"use strict";function t(t,e){if(window.NodeList.prototype.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e.call(window,t[n],n,t)}function e(){for(var t=function(t){var e={},n=function(t,o){for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var s=t[i],r=o?o+"."+i:i;"object"==typeof s?n(s,r):e[r]=s}};return n(t),e},e={},n=0;n<arguments.length;n++){var o=t(arguments[n]);for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}function n(t,e){if(!t||"object"!=typeof t)throw new Error('Provide a `configObject` of type "object".');if(!e||"string"!=typeof e)throw new Error('Provide a `namespace` of type "string" to filter the `configObject` by.');var n={};for(var o in t){var i=o.split(".");if(Object.prototype.hasOwnProperty.call(t,o)&&i[0]===e)i.length>1&&i.shift(),n[i.join(".")]=t[o]}return n}function o(t){if("string"!=typeof t)return t;var e=t.trim();return"true"===e||"false"!==e&&(e.length>0&&isFinite(Number(e))?Number(e):t)}function i(t){var e={};for(var n in t)e[n]=o(t[n]);return e}function s(t,e){this.translations=t||{},this.locale=e&&e.locale||document.documentElement.lang||"en"}(function(t){var e,n,o,i;"defineProperty"in Object&&function(){try{return Object.defineProperty({},"test",{value:42}),!0}catch(t){return!1}}()||(e=Object.defineProperty,n=Object.prototype.hasOwnProperty("__defineGetter__"),o="Getters & setters cannot be defined on this javascript engine",i="A property cannot both have accessors and be writable or have a value",Object.defineProperty=function(t,s,r){if(e&&(t===window||t===document||t===Element.prototype||t instanceof Element))return e(t,s,r);if(null===t||!(t instanceof Object||"object"==typeof t))throw new TypeError("Object.defineProperty called on non-object");if(!(r instanceof Object))throw new TypeError("Property description must be an object");var a=String(s),l="value"in r||"writable"in r,c="get"in r&&typeof r.get,u="set"in r&&typeof r.set;if(c){if("function"!==c)throw new TypeError("Getter must be a function");if(!n)throw new TypeError(o);if(l)throw new TypeError(i);Object.__defineGetter__.call(t,a,r.get)}else t[a]=r.value;if(u){if("function"!==u)throw new TypeError("Setter must be a function");if(!n)throw new TypeError(o);if(l)throw new TypeError(i);Object.__defineSetter__.call(t,a,r.set)}return"value"in r&&(t[a]=r.value),t})}).call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"Document"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&(this.HTMLDocument?this.Document=this.HTMLDocument:(this.Document=this.HTMLDocument=document.constructor=new Function("return function Document() {}")(),this.Document.prototype=document))}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"Element"in this&&"HTMLElement"in this||function(){if(!window.Element||window.HTMLElement){window.Element=window.HTMLElement=new Function("return function Element() {}")();var t,e=document.appendChild(document.createElement("body")),n=e.appendChild(document.createElement("iframe")).contentWindow.document,o=Element.prototype=n.appendChild(n.createElement("*")),i={},s=function(t,e){var n,o,r,a=t.childNodes||[],l=-1;if(1===t.nodeType&&t.constructor!==Element)for(n in t.constructor=Element,i)o=i[n],t[n]=o;for(;r=e&&a[++l];)s(r,e);return t},r=document.getElementsByTagName("*"),a=document.createElement,l=100;o.attachEvent("onpropertychange",(function(t){for(var e,n=t.propertyName,s=!i.hasOwnProperty(n),a=o[n],l=i[n],c=-1;e=r[++c];)1===e.nodeType&&(s||e[n]===l)&&(e[n]=a);i[n]=a})),o.constructor=Element,o.hasAttribute||(o.hasAttribute=function(t){return null!==this.getAttribute(t)}),c()||(document.onreadystatechange=c,t=setInterval(c,25)),document.createElement=function(t){var e=a(String(t).toLowerCase());return s(e)},document.removeChild(e)}else window.HTMLElement=window.Element;function c(){return l--||clearTimeout(t),!(!document.body||document.body.prototype||!/(complete|interactive)/.test(document.readyState))&&(s(document,!0),t&&document.body.prototype&&clearTimeout(t),!!document.body.prototype)}}()}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){(function(){if(!document.documentElement.dataset)return!1;var t=document.createElement("div");return t.setAttribute("data-a-b","c"),t.dataset&&"c"==t.dataset.aB})()||Object.defineProperty(Element.prototype,"dataset",{get:function(){for(var t=this.attributes,e={},n=0;n<t.length;n++){var o=t[n];if(o&&o.name&&/^data-\w[.\w-]*$/.test(o.name)){var i=o.name,s=o.value,r=i.substr(5).replace(/-./g,(function(t){return t.charAt(1).toUpperCase()}));"__defineGetter__"in Object.prototype&&"__defineSetter__"in Object.prototype?Object.defineProperty(e,r,{enumerable:!0,get:function(){return this.value}.bind({value:s||""}),set:function(t,e){void 0!==e?this.setAttribute(t,e):this.removeAttribute(t)}.bind(this,i)}):e[r]=s}}return e}})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"trim"in String.prototype||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),s.prototype.t=function(t,e){if(!t)throw new Error("i18n: lookup key missing");e&&"number"==typeof e.count&&(t=t+"."+this.getPluralSuffix(t,e.count));var n=this.translations[t];if("string"==typeof n){if(n.match(/%{(.\S+)}/)){if(!e)throw new Error("i18n: cannot replace placeholders in string if no option data provided");return this.replacePlaceholders(n,e)}return n}return t},s.prototype.replacePlaceholders=function(t,e){var n;return this.hasIntlNumberFormatSupport()&&(n=new Intl.NumberFormat(this.locale)),t.replace(/%{(.\S+)}/g,(function(t,o){if(Object.prototype.hasOwnProperty.call(e,o)){var i=e[o];return!1===i||"number"!=typeof i&&"string"!=typeof i?"":"number"==typeof i?n?n.format(i):i.toString():i}throw new Error("i18n: no data found to replace "+t+" placeholder in string")}))},s.prototype.hasIntlPluralRulesSupport=function(){return Boolean(window.Intl&&"PluralRules"in window.Intl&&Intl.PluralRules.supportedLocalesOf(this.locale).length)},s.prototype.hasIntlNumberFormatSupport=function(){return Boolean(window.Intl&&"NumberFormat"in window.Intl&&Intl.NumberFormat.supportedLocalesOf(this.locale).length)},s.prototype.getPluralSuffix=function(t,e){if(e=Number(e),!isFinite(e))return"other";var n;if(t+"."+(n=this.hasIntlPluralRulesSupport()?new Intl.PluralRules(this.locale).select(e):this.selectPluralFormUsingFallbackRules(e))in this.translations)return n;if(t+".other"in this.translations)return console&&"warn"in console&&console.warn('i18n: Missing plural form ".'+n+'" for "'+this.locale+'" locale. Falling back to ".other".'),"other";throw new Error('i18n: Plural form ".other" is required for "'+this.locale+'" locale')},s.prototype.selectPluralFormUsingFallbackRules=function(t){t=Math.abs(Math.floor(t));var e=this.getPluralRulesForLocale();return e?s.pluralRules[e](t):"other"},s.prototype.getPluralRulesForLocale=function(){var t=this.locale,e=t.split("-")[0];for(var n in s.pluralRulesMap)if(Object.prototype.hasOwnProperty.call(s.pluralRulesMap,n))for(var o=s.pluralRulesMap[n],i=0;i<o.length;i++)if(o[i]===t||o[i]===e)return n},s.pluralRulesMap={arabic:["ar"],chinese:["my","zh","id","ja","jv","ko","ms","th","vi"],french:["hy","bn","fr","gu","hi","fa","pa","zu"],german:["af","sq","az","eu","bg","ca","da","nl","en","et","fi","ka","de","el","hu","lb","no","so","sw","sv","ta","te","tr","ur"],irish:["ga"],russian:["ru","uk"],scottish:["gd"],spanish:["pt-PT","it","es"],welsh:["cy"]},s.pluralRules={arabic:function(t){return 0===t?"zero":1===t?"one":2===t?"two":t%100>=3&&t%100<=10?"few":t%100>=11&&t%100<=99?"many":"other"},chinese:function(){return"other"},french:function(t){return 0===t||1===t?"one":"other"},german:function(t){return 1===t?"one":"other"},irish:function(t){return 1===t?"one":2===t?"two":t>=3&&t<=6?"few":t>=7&&t<=10?"many":"other"},russian:function(t){var e=t%100,n=e%10;return 1===n&&11!==e?"one":n>=2&&n<=4&&!(e>=12&&e<=14)?"few":0===n||n>=5&&n<=9||e>=11&&e<=14?"many":"other"},scottish:function(t){return 1===t||11===t?"one":2===t||12===t?"two":t>=3&&t<=10||t>=13&&t<=19?"few":"other"},spanish:function(t){return 1===t?"one":t%1e6==0&&0!==t?"many":"other"},welsh:function(t){return 0===t?"zero":1===t?"one":2===t?"two":3===t?"few":6===t?"many":"other"}},function(t){var e;"DOMTokenList"in this&&(!("classList"in(e=document.createElement("x")))||!e.classList.toggle("x",!1)&&!e.className)||function(e){var n;"DOMTokenList"in e&&e.DOMTokenList&&(!document.createElementNS||!document.createElementNS("http://www.w3.org/2000/svg","svg")||document.createElementNS("http://www.w3.org/2000/svg","svg").classList instanceof DOMTokenList)||(e.DOMTokenList=function(){var e=!0,o=function(t,n,o,i){Object.defineProperty?Object.defineProperty(t,n,{configurable:!1===e||!!i,get:o}):t.__defineGetter__(n,o)};try{o({},"support")}catch(n){e=!1}return function(e,n){var i=this,s=[],r={},a=0,l=0,c=function(t){o(i,t,(function(){return d(),s[t]}),!1)},u=function(){if(a>=l)for(;l<a;++l)c(l)},d=function(){var t,o,i=arguments,l=/\s+/;if(i.length)for(o=0;o<i.length;++o)if(l.test(i[o]))throw(t=new SyntaxError('String "'+i[o]+'" contains an invalid character')).code=5,t.name="InvalidCharacterError",t;for(""===(s="object"==typeof e[n]?(""+e[n].baseVal).replace(/^\s+|\s+$/g,"").split(l):(""+e[n]).replace(/^\s+|\s+$/g,"").split(l))[0]&&(s=[]),r={},o=0;o<s.length;++o)r[s[o]]=!0;a=s.length,u()};return d(),o(i,"length",(function(){return d(),a})),i.toLocaleString=i.toString=function(){return d(),s.join(" ")},i.item=function(t){return d(),s[t]},i.contains=function(t){return d(),!!r[t]},i.add=function(){d.apply(i,t=arguments);for(var t,o,l=0,c=t.length;l<c;++l)r[o=t[l]]||(s.push(o),r[o]=!0);a!==s.length&&(a=s.length>>>0,"object"==typeof e[n]?e[n].baseVal=s.join(" "):e[n]=s.join(" "),u())},i.remove=function(){d.apply(i,t=arguments);for(var t,o={},l=0,c=[];l<t.length;++l)o[t[l]]=!0,delete r[t[l]];for(l=0;l<s.length;++l)o[s[l]]||c.push(s[l]);s=c,a=c.length>>>0,"object"==typeof e[n]?e[n].baseVal=s.join(" "):e[n]=s.join(" "),u()},i.toggle=function(e,n){return d.apply(i,[e]),t!==n?n?(i.add(e),!0):(i.remove(e),!1):r[e]?(i.remove(e),!1):(i.add(e),!0)},i}}()),"classList"in(n=document.createElement("span"))&&(n.classList.toggle("x",!1),n.classList.contains("x")&&(n.classList.constructor.prototype.toggle=function(e){var n=arguments[1];if(n===t){var o=!this.contains(e);return this[o?"add":"remove"](e),o}return this[(n=!!n)?"add":"remove"](e),n})),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a","b"),!t.classList.contains("b"))){var e=t.classList.constructor.prototype.add;t.classList.constructor.prototype.add=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}(),function(){var t=document.createElement("span");if("classList"in t&&(t.classList.add("a"),t.classList.add("b"),t.classList.remove("a","b"),t.classList.contains("b"))){var e=t.classList.constructor.prototype.remove;t.classList.constructor.prototype.remove=function(){for(var t=arguments,n=arguments.length,o=0;o<n;o++)e.call(this,t[o])}}}()}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){var e;"document"in this&&"classList"in document.documentElement&&"Element"in this&&"classList"in Element.prototype&&((e=document.createElement("span")).classList.add("a","b"),e.classList.contains("b"))||function(t){var n=!0,o=function(t,e,o,i){Object.defineProperty?Object.defineProperty(t,e,{configurable:!1===n||!!i,get:o}):t.__defineGetter__(e,o)};try{o({},"support")}catch(e){n=!1}var i=function(t,e,s){o(t.prototype,e,(function(){var t,r=this,a="__defineGetter__DEFINE_PROPERTY"+e;if(r[a])return t;if(r[a]=!0,!1===n){for(var l,c=i.mirror||document.createElement("div"),u=c.childNodes,d=u.length,h=0;h<d;++h)if(u[h]._R===r){l=u[h];break}l||(l=c.appendChild(document.createElement("div"))),t=DOMTokenList.call(l,r,s)}else t=new DOMTokenList(r,s);return o(r,e,(function(){return t})),delete r[a],t}),!0)};i(t.Element,"classList","className"),i(t.HTMLElement,"classList","className"),i(t.HTMLLinkElement,"relList","rel"),i(t.HTMLAnchorElement,"relList","rel"),i(t.HTMLAreaElement,"relList","rel")}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"document"in this&&"matches"in document.documentElement||(Element.prototype.matches=Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||function(t){for(var e=this,n=(e.document||e.ownerDocument).querySelectorAll(t),o=0;n[o]&&n[o]!==e;)++o;return!!n[o]})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"document"in this&&"closest"in document.documentElement||(Element.prototype.closest=function(t){for(var e=this;e;){if(e.matches(t))return e;e="SVGElement"in window&&e instanceof SVGElement?e.parentNode:e.parentElement}return null})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"Window"in this||"undefined"==typeof WorkerGlobalScope&&"function"!=typeof importScripts&&function(t){t.constructor?t.Window=t.constructor:(t.Window=t.constructor=new Function("return function Window() {}")()).prototype=this}(this)}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){(function(t){if(!("Event"in t))return!1;if("function"==typeof t.Event)return!0;try{return new Event("click"),!0}catch(e){return!1}})(this)||function(){var e={click:1,dblclick:1,keyup:1,keypress:1,keydown:1,mousedown:1,mouseup:1,mousemove:1,mouseover:1,mouseenter:1,mouseleave:1,mouseout:1,storage:1,storagecommit:1,textinput:1};if("undefined"!=typeof document&&"undefined"!=typeof window){var n=window.Event&&window.Event.prototype||null;window.Event=Window.prototype.Event=function(e,n){if(!e)throw new Error("Not enough arguments");var o;if("createEvent"in document){o=document.createEvent("Event");var i=!(!n||n.bubbles===t)&&n.bubbles,s=!(!n||n.cancelable===t)&&n.cancelable;return o.initEvent(e,i,s),o}return(o=document.createEventObject()).type=e,o.bubbles=!(!n||n.bubbles===t)&&n.bubbles,o.cancelable=!(!n||n.cancelable===t)&&n.cancelable,o},n&&Object.defineProperty(window.Event,"prototype",{configurable:!1,enumerable:!1,writable:!0,value:n}),"createEvent"in document||(window.addEventListener=Window.prototype.addEventListener=Document.prototype.addEventListener=Element.prototype.addEventListener=function(){var t=this,n=arguments[0],i=arguments[1];if(t===window&&n in e)throw new Error("In IE8 the event: "+n+" is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");t._events||(t._events={}),t._events[n]||(t._events[n]=function(e){var n,i=t._events[e.type].list,s=i.slice(),r=-1,a=s.length;for(e.preventDefault=function(){!1!==e.cancelable&&(e.returnValue=!1)},e.stopPropagation=function(){e.cancelBubble=!0},e.stopImmediatePropagation=function(){e.cancelBubble=!0,e.cancelImmediate=!0},e.currentTarget=t,e.relatedTarget=e.fromElement||null,e.target=e.target||e.srcElement||t,e.timeStamp=(new Date).getTime(),e.clientX&&(e.pageX=e.clientX+document.documentElement.scrollLeft,e.pageY=e.clientY+document.documentElement.scrollTop);++r<a&&!e.cancelImmediate;)r in s&&-1!==o(i,n=s[r])&&"function"==typeof n&&n.call(t,e)},t._events[n].list=[],t.attachEvent&&t.attachEvent("on"+n,t._events[n])),t._events[n].list.push(i)},window.removeEventListener=Window.prototype.removeEventListener=Document.prototype.removeEventListener=Element.prototype.removeEventListener=function(){var t,e=this,n=arguments[0],i=arguments[1];e._events&&e._events[n]&&e._events[n].list&&-1!==(t=o(e._events[n].list,i))&&(e._events[n].list.splice(t,1),e._events[n].list.length||(e.detachEvent&&e.detachEvent("on"+n,e._events[n]),delete e._events[n]))},window.dispatchEvent=Window.prototype.dispatchEvent=Document.prototype.dispatchEvent=Element.prototype.dispatchEvent=function(t){if(!arguments.length)throw new Error("Not enough arguments");if(!t||"string"!=typeof t.type)throw new Error("DOM Events Exception 0");var e=this,n=t.type;try{if(!t.bubbles){t.cancelBubble=!0;var o=function(t){t.cancelBubble=!0,(e||window).detachEvent("on"+n,o)};this.attachEvent("on"+n,o)}this.fireEvent("on"+n,t)}catch(i){t.target=e;do{t.currentTarget=e,"_events"in e&&"function"==typeof e._events[n]&&e._events[n].call(e,t),"function"==typeof e["on"+n]&&e["on"+n].call(e,t),e=9===e.nodeType?e.parentWindow:e.parentNode}while(e&&!t.cancelBubble)}return!0},document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&document.dispatchEvent(new Event("DOMContentLoaded",{bubbles:!0}))})))}function o(t,e){for(var n=-1,o=t.length;++n<o;)if(n in t&&t[n]===e)return n;return-1}}()}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"bind"in Function.prototype||Object.defineProperty(Function.prototype,"bind",{value:function(t){var e,n=Array,o=Object,i=o.prototype,s=n.prototype,r=function(){},a=i.toString,l="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,c=Function.prototype.toString;e=function(t){if("function"!=typeof t)return!1;if(l)return function(t){try{return c.call(t),!0}catch(e){return!1}}(t);var e=a.call(t);return"[object Function]"===e||"[object GeneratorFunction]"===e};var u=s.slice,d=s.concat,h=s.push,p=Math.max,f=this;if(!e(f))throw new TypeError("Function.prototype.bind called on incompatible "+f);for(var m,b=u.call(arguments,1),v=p(0,f.length-b.length),g=[],y=0;y<v;y++)h.call(g,"$"+y);return m=Function("binder","return function ("+g.join(",")+"){ return binder.apply(this, arguments); }")((function(){if(this instanceof m){var e=f.apply(this,d.call(b,u.call(arguments)));return o(e)===e?e:this}return f.apply(t,d.call(b,u.call(arguments)))})),f.prototype&&(r.prototype=f.prototype,m.prototype=new r,r.prototype=null),m}})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});var r={hideAllSections:"Hide all sections",hideSection:"Hide",hideSectionAriaLabel:"Hide this section",showAllSections:"Show all sections",showSection:"Show",showSectionAriaLabel:"Show this section"};function a(t,o){if(!(t instanceof HTMLElement))return this;this.$module=t;var a={i18n:r,rememberExpanded:!0};this.config=e(a,o||{},i(t.dataset)),this.i18n=new s(n(this.config,"i18n")),this.controlsClass="govuk-accordion__controls",this.showAllClass="govuk-accordion__show-all",this.showAllTextClass="govuk-accordion__show-all-text",this.sectionClass="govuk-accordion__section",this.sectionExpandedClass="govuk-accordion__section--expanded",this.sectionButtonClass="govuk-accordion__section-button",this.sectionHeaderClass="govuk-accordion__section-header",this.sectionHeadingClass="govuk-accordion__section-heading",this.sectionHeadingDividerClass="govuk-accordion__section-heading-divider",this.sectionHeadingTextClass="govuk-accordion__section-heading-text",this.sectionHeadingTextFocusClass="govuk-accordion__section-heading-text-focus",this.sectionShowHideToggleClass="govuk-accordion__section-toggle",this.sectionShowHideToggleFocusClass="govuk-accordion__section-toggle-focus",this.sectionShowHideTextClass="govuk-accordion__section-toggle-text",this.upChevronIconClass="govuk-accordion-nav__chevron",this.downChevronIconClass="govuk-accordion-nav__chevron--down",this.sectionSummaryClass="govuk-accordion__section-summary",this.sectionSummaryFocusClass="govuk-accordion__section-summary-focus",this.sectionContentClass="govuk-accordion__section-content";var c=this.$module.querySelectorAll("."+this.sectionClass);if(!c.length)return this;this.$sections=c,this.browserSupportsSessionStorage=l.checkForSessionStorage(),this.$showAllButton=null,this.$showAllIcon=null,this.$showAllText=null}a.prototype.init=function(){if(this.$module&&this.$sections){this.initControls(),this.initSectionHeaders();var t=this.checkIfAllSectionsOpen();this.updateShowAllButton(t)}},a.prototype.initControls=function(){this.$showAllButton=document.createElement("button"),this.$showAllButton.setAttribute("type","button"),this.$showAllButton.setAttribute("class",this.showAllClass),this.$showAllButton.setAttribute("aria-expanded","false"),this.$showAllIcon=document.createElement("span"),this.$showAllIcon.classList.add(this.upChevronIconClass),this.$showAllButton.appendChild(this.$showAllIcon);var t=document.createElement("div");t.setAttribute("class",this.controlsClass),t.appendChild(this.$showAllButton),this.$module.insertBefore(t,this.$module.firstChild),this.$showAllText=document.createElement("span"),this.$showAllText.classList.add(this.showAllTextClass),this.$showAllButton.appendChild(this.$showAllText),this.$showAllButton.addEventListener("click",this.onShowOrHideAllToggle.bind(this)),"onbeforematch"in document&&document.addEventListener("beforematch",this.onBeforeMatch.bind(this))},a.prototype.initSectionHeaders=function(){var e=this;t(this.$sections,(function(t,n){var o=t.querySelector("."+e.sectionHeaderClass);o&&(e.constructHeaderMarkup(o,n),e.setExpanded(e.isExpanded(t),t),o.addEventListener("click",e.onSectionToggle.bind(e,t)),e.setInitialState(t))}))},a.prototype.constructHeaderMarkup=function(t,e){var n=t.querySelector("."+this.sectionButtonClass),o=t.querySelector("."+this.sectionHeadingClass),i=t.querySelector("."+this.sectionSummaryClass);if(n&&o){var s=document.createElement("button");s.setAttribute("type","button"),s.setAttribute("aria-controls",this.$module.id+"-content-"+(e+1).toString());for(var r=0;r<n.attributes.length;r++){var a=n.attributes.item(r);"id"!==a.nodeName&&s.setAttribute(a.nodeName,a.nodeValue)}var l=document.createElement("span");l.classList.add(this.sectionHeadingTextClass),l.id=n.id;var c=document.createElement("span");c.classList.add(this.sectionHeadingTextFocusClass),l.appendChild(c),c.innerHTML=n.innerHTML;var u=document.createElement("span");u.classList.add(this.sectionShowHideToggleClass),u.setAttribute("data-nosnippet","");var d=document.createElement("span");d.classList.add(this.sectionShowHideToggleFocusClass),u.appendChild(d);var h=document.createElement("span"),p=document.createElement("span");if(p.classList.add(this.upChevronIconClass),d.appendChild(p),h.classList.add(this.sectionShowHideTextClass),d.appendChild(h),s.appendChild(l),s.appendChild(this.getButtonPunctuationEl()),i){var f=document.createElement("span"),m=document.createElement("span");m.classList.add(this.sectionSummaryFocusClass),f.appendChild(m);for(var b=0,v=i.attributes.length;b<v;++b){var g=i.attributes.item(b).nodeName,y=i.attributes.item(b).nodeValue;f.setAttribute(g,y)}m.innerHTML=i.innerHTML,i.parentNode.replaceChild(f,i),s.appendChild(f),s.appendChild(this.getButtonPunctuationEl())}s.appendChild(u),o.removeChild(n),o.appendChild(s)}},a.prototype.onBeforeMatch=function(t){var e=t.target;if(e instanceof Element){var n=e.closest("."+this.sectionClass);n&&this.setExpanded(!0,n)}},a.prototype.onSectionToggle=function(t){var e=this.isExpanded(t);this.setExpanded(!e,t),this.storeState(t)},a.prototype.onShowOrHideAllToggle=function(){var e=this,n=this.$sections,o=!this.checkIfAllSectionsOpen();t(n,(function(t){e.setExpanded(o,t),e.storeState(t)})),e.updateShowAllButton(o)},a.prototype.setExpanded=function(t,e){var n=e.querySelector("."+this.upChevronIconClass),o=e.querySelector("."+this.sectionShowHideTextClass),i=e.querySelector("."+this.sectionButtonClass),s=e.querySelector("."+this.sectionContentClass);if(n&&o instanceof HTMLElement&&i&&s){var r=t?this.i18n.t("hideSection"):this.i18n.t("showSection");o.innerText=r,i.setAttribute("aria-expanded",t.toString());var a=[],l=e.querySelector("."+this.sectionHeadingTextClass);l instanceof HTMLElement&&a.push(l.innerText.trim());var c=e.querySelector("."+this.sectionSummaryClass);c instanceof HTMLElement&&a.push(c.innerText.trim());var u=t?this.i18n.t("hideSectionAriaLabel"):this.i18n.t("showSectionAriaLabel");a.push(u),i.setAttribute("aria-label",a.join(" , ")),t?(s.removeAttribute("hidden"),e.classList.add(this.sectionExpandedClass),n.classList.remove(this.downChevronIconClass)):(s.setAttribute("hidden","until-found"),e.classList.remove(this.sectionExpandedClass),n.classList.add(this.downChevronIconClass));var d=this.checkIfAllSectionsOpen();this.updateShowAllButton(d)}},a.prototype.isExpanded=function(t){return t.classList.contains(this.sectionExpandedClass)},a.prototype.checkIfAllSectionsOpen=function(){return this.$sections.length===this.$module.querySelectorAll("."+this.sectionExpandedClass).length},a.prototype.updateShowAllButton=function(t){var e=t?this.i18n.t("hideAllSections"):this.i18n.t("showAllSections");this.$showAllButton.setAttribute("aria-expanded",t.toString()),this.$showAllText.innerText=e,t?this.$showAllIcon.classList.remove(this.downChevronIconClass):this.$showAllIcon.classList.add(this.downChevronIconClass)};var l={checkForSessionStorage:function(){var t,e="this is the test string";try{return window.sessionStorage.setItem(e,e),t=window.sessionStorage.getItem(e)===e.toString(),window.sessionStorage.removeItem(e),t}catch(n){return!1}}};a.prototype.storeState=function(t){if(this.browserSupportsSessionStorage&&this.config.rememberExpanded){var e=t.querySelector("."+this.sectionButtonClass);if(e){var n=e.getAttribute("aria-controls"),o=e.getAttribute("aria-expanded");n&&o&&window.sessionStorage.setItem(n,o)}}},a.prototype.setInitialState=function(t){if(this.browserSupportsSessionStorage&&this.config.rememberExpanded){var e=t.querySelector("."+this.sectionButtonClass);if(e){var n=e.getAttribute("aria-controls"),o=n?window.sessionStorage.getItem(n):null;null!==o&&this.setExpanded("true"===o,t)}}},a.prototype.getButtonPunctuationEl=function(){var t=document.createElement("span");return t.classList.add("govuk-visually-hidden",this.sectionHeadingDividerClass),t.innerHTML=", ",t};function c(t,n){if(!(t instanceof HTMLElement))return this;this.$module=t,this.debounceFormSubmitTimer=null;this.config=e({preventDoubleClick:!1},n||{},i(t.dataset))}c.prototype.init=function(){this.$module&&(this.$module.addEventListener("keydown",this.handleKeyDown),this.$module.addEventListener("click",this.debounce.bind(this)))},c.prototype.handleKeyDown=function(t){var e=t.target;32===t.keyCode&&e instanceof HTMLElement&&"button"===e.getAttribute("role")&&(t.preventDefault(),e.click())},c.prototype.debounce=function(t){if(this.config.preventDoubleClick)return this.debounceFormSubmitTimer?(t.preventDefault(),!1):void(this.debounceFormSubmitTimer=setTimeout(function(){this.debounceFormSubmitTimer=null}.bind(this),1e3))},function(t){"Date"in self&&"now"in self.Date&&"getTime"in self.Date.prototype||(Date.now=function(){return(new Date).getTime()})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{});var u={charactersUnderLimit:{one:"You have %{count} character remaining",other:"You have %{count} characters remaining"},charactersAtLimit:"You have 0 characters remaining",charactersOverLimit:{one:"You have %{count} character too many",other:"You have %{count} characters too many"},wordsUnderLimit:{one:"You have %{count} word remaining",other:"You have %{count} words remaining"},wordsAtLimit:"You have 0 words remaining",wordsOverLimit:{one:"You have %{count} word too many",other:"You have %{count} words too many"},textareaDescription:{other:""}};function d(t,o){if(!(t instanceof HTMLElement))return this;var r=t.querySelector(".govuk-js-character-count");if(!(r instanceof HTMLTextAreaElement||r instanceof HTMLInputElement))return this;var a,l,c,d={threshold:0,i18n:u},h=i(t.dataset),p={};if(("maxwords"in h||"maxlength"in h)&&(p={maxlength:!1,maxwords:!1}),this.config=e(d,o||{},p,h),this.i18n=new s(n(this.config,"i18n"),{locale:(a=t,l="lang",c=a.closest("["+l+"]"),c?c.getAttribute(l):null)}),this.maxLength=1/0,"maxwords"in this.config&&this.config.maxwords)this.maxLength=this.config.maxwords;else{if(!("maxlength"in this.config)||!this.config.maxlength)return;this.maxLength=this.config.maxlength}this.$module=t,this.$textarea=r,this.$visibleCountMessage=null,this.$screenReaderCountMessage=null,this.lastInputTimestamp=null,this.lastInputValue="",this.valueChecker=null}function h(t){if(!(t instanceof HTMLElement))return this;var e=t.querySelectorAll('input[type="checkbox"]');if(!e.length)return this;this.$module=t,this.$inputs=e}d.prototype.init=function(){if(this.$module&&this.$textarea){var t=this.$textarea,e=document.getElementById(t.id+"-info");if(e){e.innerText.match(/^\s*$/)&&(e.innerText=this.i18n.t("textareaDescription",{count:this.maxLength})),t.insertAdjacentElement("afterend",e);var n=document.createElement("div");n.className="govuk-character-count__sr-status govuk-visually-hidden",n.setAttribute("aria-live","polite"),this.$screenReaderCountMessage=n,e.insertAdjacentElement("afterend",n);var o=document.createElement("div");o.className=e.className,o.classList.add("govuk-character-count__status"),o.setAttribute("aria-hidden","true"),this.$visibleCountMessage=o,e.insertAdjacentElement("afterend",o),e.classList.add("govuk-visually-hidden"),t.removeAttribute("maxlength"),this.bindChangeEvents(),window.addEventListener("onpageshow"in window?"pageshow":"DOMContentLoaded",this.updateCountMessage.bind(this)),this.updateCountMessage()}}},d.prototype.bindChangeEvents=function(){var t=this.$textarea;t.addEventListener("keyup",this.handleKeyUp.bind(this)),t.addEventListener("focus",this.handleFocus.bind(this)),t.addEventListener("blur",this.handleBlur.bind(this))},d.prototype.handleKeyUp=function(){this.updateVisibleCountMessage(),this.lastInputTimestamp=Date.now()},d.prototype.handleFocus=function(){this.valueChecker=setInterval(function(){(!this.lastInputTimestamp||Date.now()-500>=this.lastInputTimestamp)&&this.updateIfValueChanged()}.bind(this),1e3)},d.prototype.handleBlur=function(){clearInterval(this.valueChecker)},d.prototype.updateIfValueChanged=function(){this.$textarea.value!==this.lastInputValue&&(this.lastInputValue=this.$textarea.value,this.updateCountMessage())},d.prototype.updateCountMessage=function(){this.updateVisibleCountMessage(),this.updateScreenReaderCountMessage()},d.prototype.updateVisibleCountMessage=function(){var t=this.$textarea,e=this.$visibleCountMessage,n=this.maxLength-this.count(t.value);this.isOverThreshold()?e.classList.remove("govuk-character-count__message--disabled"):e.classList.add("govuk-character-count__message--disabled"),n<0?(t.classList.add("govuk-textarea--error"),e.classList.remove("govuk-hint"),e.classList.add("govuk-error-message")):(t.classList.remove("govuk-textarea--error"),e.classList.remove("govuk-error-message"),e.classList.add("govuk-hint")),e.innerText=this.getCountMessage()},d.prototype.updateScreenReaderCountMessage=function(){var t=this.$screenReaderCountMessage;this.isOverThreshold()?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden","true"),t.innerText=this.getCountMessage()},d.prototype.count=function(t){return"maxwords"in this.config&&this.config.maxwords?(t.match(/\S+/g)||[]).length:t.length},d.prototype.getCountMessage=function(){var t=this.maxLength-this.count(this.$textarea.value),e="maxwords"in this.config&&this.config.maxwords?"words":"characters";return this.formatCountMessage(t,e)},d.prototype.formatCountMessage=function(t,e){if(0===t)return this.i18n.t(e+"AtLimit");var n=t<0?"OverLimit":"UnderLimit";return this.i18n.t(e+n,{count:Math.abs(t)})},d.prototype.isOverThreshold=function(){if(!this.config.threshold)return!0;var t=this.$textarea,e=this.count(t.value);return this.maxLength*this.config.threshold/100<=e},h.prototype.init=function(){if(this.$module&&this.$inputs){var e=this.$module;t(this.$inputs,(function(t){var e=t.getAttribute("data-aria-controls");e&&document.getElementById(e)&&(t.setAttribute("aria-controls",e),t.removeAttribute("data-aria-controls"))})),window.addEventListener("onpageshow"in window?"pageshow":"DOMContentLoaded",this.syncAllConditionalReveals.bind(this)),this.syncAllConditionalReveals(),e.addEventListener("click",this.handleClick.bind(this))}},h.prototype.syncAllConditionalReveals=function(){t(this.$inputs,this.syncConditionalRevealWithInputState.bind(this))},h.prototype.syncConditionalRevealWithInputState=function(t){var e=t.getAttribute("aria-controls");if(e){var n=document.getElementById(e);if(n&&n.classList.contains("govuk-checkboxes__conditional")){var o=t.checked;t.setAttribute("aria-expanded",o.toString()),n.classList.toggle("govuk-checkboxes__conditional--hidden",!o)}}},h.prototype.unCheckAllInputsExcept=function(e){var n=this;t(document.querySelectorAll('input[type="checkbox"][name="'+e.name+'"]'),(function(t){e.form===t.form&&t!==e&&(t.checked=!1,n.syncConditionalRevealWithInputState(t))}))},h.prototype.unCheckExclusiveInputs=function(e){var n=this;t(document.querySelectorAll('input[data-behaviour="exclusive"][type="checkbox"][name="'+e.name+'"]'),(function(t){e.form===t.form&&(t.checked=!1,n.syncConditionalRevealWithInputState(t))}))},h.prototype.handleClick=function(t){var e=t.target;e instanceof HTMLInputElement&&"checkbox"===e.type&&(e.getAttribute("aria-controls")&&this.syncConditionalRevealWithInputState(e),e.checked&&("exclusive"===e.getAttribute("data-behaviour")?this.unCheckAllInputsExcept(e):this.unCheckExclusiveInputs(e)))};function p(t){if(!(t instanceof HTMLElement))return this;this.$module=t,this.$summary=null,this.$content=null}function f(t,n){if(!(t instanceof HTMLElement))return this;this.$module=t;this.config=e({disableAutoFocus:!1},n||{},i(t.dataset))}function m(t){if(!(t instanceof HTMLElement))return this;this.$module=t,this.$menuButton=t.querySelector(".govuk-js-header-toggle"),this.$menu=this.$menuButton&&t.querySelector("#"+this.$menuButton.getAttribute("aria-controls")),this.menuIsOpen=!1,this.mql=null}function b(t,n){if(!(t instanceof HTMLElement))return this;this.$module=t;this.config=e({disableAutoFocus:!1},n||{},i(t.dataset))}function v(t){if(!(t instanceof HTMLElement))return this;var e=t.querySelectorAll('input[type="radio"]');if(!e.length)return this;this.$module=t,this.$inputs=e}function g(t){if(!(t instanceof HTMLAnchorElement))return this;this.$module=t,this.$linkedElement=null,this.linkedElementListener=!1}function y(t){if(!(t instanceof HTMLElement))return this;var e=t.querySelectorAll("a.govuk-tabs__tab");if(!e.length)return this;this.$module=t,this.$tabs=e,this.keys={left:37,right:39,up:38,down:40},this.jsHiddenClass="govuk-tabs__panel--hidden",this.boundTabClick=this.onTabClick.bind(this),this.boundTabKeydown=this.onTabKeydown.bind(this),this.boundOnHashChange=this.onHashChange.bind(this),this.changingHash=!1}p.prototype.init=function(){this.$module&&("HTMLDetailsElement"in window&&this.$module instanceof HTMLDetailsElement||this.polyfillDetails())},p.prototype.polyfillDetails=function(){var t,e=this.$module,n=this.$summary=e.getElementsByTagName("summary").item(0),o=this.$content=e.getElementsByTagName("div").item(0);n&&o&&(o.id||(o.id="details-content-"+(t=(new Date).getTime(),void 0!==window.performance&&"function"==typeof window.performance.now&&(t+=window.performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"===e?n:3&n|8).toString(16)})))),e.setAttribute("role","group"),n.setAttribute("role","button"),n.setAttribute("aria-controls",o.id),n.tabIndex=0,this.$module.hasAttribute("open")?n.setAttribute("aria-expanded","true"):(n.setAttribute("aria-expanded","false"),o.style.display="none"),this.polyfillHandleInputs(this.polyfillSetAttributes.bind(this)))},p.prototype.polyfillSetAttributes=function(){return this.$module.hasAttribute("open")?(this.$module.removeAttribute("open"),this.$summary.setAttribute("aria-expanded","false"),this.$content.style.display="none"):(this.$module.setAttribute("open","open"),this.$summary.setAttribute("aria-expanded","true"),this.$content.style.display=""),!0},p.prototype.polyfillHandleInputs=function(t){this.$summary.addEventListener("keypress",(function(e){var n=e.target;13!==e.keyCode&&32!==e.keyCode||n instanceof HTMLElement&&"summary"===n.nodeName.toLowerCase()&&(e.preventDefault(),n.click?n.click():t(e))})),this.$summary.addEventListener("keyup",(function(t){var e=t.target;32===t.keyCode&&e instanceof HTMLElement&&"summary"===e.nodeName.toLowerCase()&&t.preventDefault()})),this.$summary.addEventListener("click",t)},f.prototype.init=function(){if(this.$module){var t=this.$module;this.setFocus(),t.addEventListener("click",this.handleClick.bind(this))}},f.prototype.setFocus=function(){var t=this.$module;this.config.disableAutoFocus||(t.setAttribute("tabindex","-1"),t.addEventListener("blur",(function(){t.removeAttribute("tabindex")})),t.focus())},f.prototype.handleClick=function(t){var e=t.target;this.focusTarget(e)&&t.preventDefault()},f.prototype.focusTarget=function(t){if(!(t instanceof HTMLAnchorElement))return!1;var e=this.getFragmentFromUrl(t.href);if(!e)return!1;var n=document.getElementById(e);if(!n)return!1;var o=this.getAssociatedLegendOrLabel(n);return!!o&&(o.scrollIntoView(),n.focus({preventScroll:!0}),!0)},f.prototype.getFragmentFromUrl=function(t){if(-1!==t.indexOf("#"))return t.split("#").pop()},f.prototype.getAssociatedLegendOrLabel=function(t){var e=t.closest("fieldset");if(e){var n=e.getElementsByTagName("legend");if(n.length){var o=n[0];if(t instanceof HTMLInputElement&&("checkbox"===t.type||"radio"===t.type))return o;var i=o.getBoundingClientRect().top,s=t.getBoundingClientRect();if(s.height&&window.innerHeight)if(s.top+s.height-i<window.innerHeight/2)return o}}return document.querySelector("label[for='"+t.getAttribute("id")+"']")||t.closest("label")},m.prototype.init=function(){this.$module&&this.$menuButton&&this.$menu&&("matchMedia"in window?(this.mql=window.matchMedia("(min-width: 48.0625em)"),"addEventListener"in this.mql?this.mql.addEventListener("change",this.syncState.bind(this)):this.mql.addListener(this.syncState.bind(this)),this.syncState(),this.$menuButton.addEventListener("click",this.handleMenuButtonClick.bind(this))):this.$menuButton.setAttribute("hidden",""))},m.prototype.syncState=function(){this.mql.matches?(this.$menu.removeAttribute("hidden"),this.$menuButton.setAttribute("hidden","")):(this.$menuButton.removeAttribute("hidden"),this.$menuButton.setAttribute("aria-expanded",this.menuIsOpen.toString()),this.menuIsOpen?this.$menu.removeAttribute("hidden"):this.$menu.setAttribute("hidden",""))},m.prototype.handleMenuButtonClick=function(){this.menuIsOpen=!this.menuIsOpen,this.syncState()},b.prototype.init=function(){this.$module&&this.setFocus()},b.prototype.setFocus=function(){var t=this.$module;this.config.disableAutoFocus||"alert"===t.getAttribute("role")&&(t.getAttribute("tabindex")||(t.setAttribute("tabindex","-1"),t.addEventListener("blur",(function(){t.removeAttribute("tabindex")}))),t.focus())},v.prototype.init=function(){if(this.$module&&this.$inputs){var e=this.$module;t(this.$inputs,(function(t){var e=t.getAttribute("data-aria-controls");e&&document.getElementById(e)&&(t.setAttribute("aria-controls",e),t.removeAttribute("data-aria-controls"))})),window.addEventListener("onpageshow"in window?"pageshow":"DOMContentLoaded",this.syncAllConditionalReveals.bind(this)),this.syncAllConditionalReveals(),e.addEventListener("click",this.handleClick.bind(this))}},v.prototype.syncAllConditionalReveals=function(){t(this.$inputs,this.syncConditionalRevealWithInputState.bind(this))},v.prototype.syncConditionalRevealWithInputState=function(t){var e=t.getAttribute("aria-controls");if(e){var n=document.getElementById(e);if(n&&n.classList.contains("govuk-radios__conditional")){var o=t.checked;t.setAttribute("aria-expanded",o.toString()),n.classList.toggle("govuk-radios__conditional--hidden",!o)}}},v.prototype.handleClick=function(e){var n=this,o=e.target;if(o instanceof HTMLInputElement&&"radio"===o.type){var i=document.querySelectorAll('input[type="radio"][aria-controls]'),s=o.form,r=o.name;t(i,(function(t){var e=t.form===s;t.name===r&&e&&n.syncConditionalRevealWithInputState(t)}))}},g.prototype.init=function(){if(this.$module){var t=this.getLinkedElement();t&&(this.$linkedElement=t,this.$module.addEventListener("click",this.focusLinkedElement.bind(this)))}},g.prototype.getLinkedElement=function(){var t=this.getFragmentFromUrl();return t?document.getElementById(t):null},g.prototype.focusLinkedElement=function(){var t=this.$linkedElement;t.getAttribute("tabindex")||(t.setAttribute("tabindex","-1"),t.classList.add("govuk-skip-link-focused-element"),this.linkedElementListener||(this.$linkedElement.addEventListener("blur",this.removeFocusProperties.bind(this)),this.linkedElementListener=!0)),t.focus()},g.prototype.removeFocusProperties=function(){this.$linkedElement.removeAttribute("tabindex"),this.$linkedElement.classList.remove("govuk-skip-link-focused-element")},g.prototype.getFragmentFromUrl=function(){if(this.$module.hash)return this.$module.hash.split("#").pop()},function(t){"document"in this&&"nextElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t&&1!==t.nodeType;)t=t.nextSibling;return t}})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),function(t){"document"in this&&"previousElementSibling"in document.documentElement||Object.defineProperty(Element.prototype,"previousElementSibling",{get:function(){for(var t=this.previousSibling;t&&1!==t.nodeType;)t=t.previousSibling;return t}})}.call("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof global&&global||{}),y.prototype.init=function(){this.$module&&this.$tabs&&("function"==typeof window.matchMedia?this.setupResponsiveChecks():this.setup())},y.prototype.setupResponsiveChecks=function(){this.mql=window.matchMedia("(min-width: 40.0625em)"),this.mql.addListener(this.checkMode.bind(this)),this.checkMode()},y.prototype.checkMode=function(){this.mql.matches?this.setup():this.teardown()},y.prototype.setup=function(){var e=this,n=this.$module,o=this.$tabs,i=n.querySelector(".govuk-tabs__list"),s=n.querySelectorAll(".govuk-tabs__list-item");if(o&&i&&s){i.setAttribute("role","tablist"),t(s,(function(t){t.setAttribute("role","presentation")})),t(o,(function(t){e.setAttributes(t),t.addEventListener("click",e.boundTabClick,!0),t.addEventListener("keydown",e.boundTabKeydown,!0),e.hideTab(t)}));var r=this.getTab(window.location.hash)||this.$tabs[0];r&&(this.showTab(r),window.addEventListener("hashchange",this.boundOnHashChange,!0))}},y.prototype.teardown=function(){var e=this,n=this.$module,o=this.$tabs,i=n.querySelector(".govuk-tabs__list"),s=n.querySelectorAll("a.govuk-tabs__list-item");o&&i&&s&&(i.removeAttribute("role"),t(s,(function(t){t.removeAttribute("role")})),t(o,(function(t){t.removeEventListener("click",e.boundTabClick,!0),t.removeEventListener("keydown",e.boundTabKeydown,!0),e.unsetAttributes(t)})),window.removeEventListener("hashchange",this.boundOnHashChange,!0))},y.prototype.onHashChange=function(){var t=window.location.hash,e=this.getTab(t);if(e)if(this.changingHash)this.changingHash=!1;else{var n=this.getCurrentTab();n&&(this.hideTab(n),this.showTab(e),e.focus())}},y.prototype.hideTab=function(t){this.unhighlightTab(t),this.hidePanel(t)},y.prototype.showTab=function(t){this.highlightTab(t),this.showPanel(t)},y.prototype.getTab=function(t){return this.$module.querySelector('a.govuk-tabs__tab[href="'+t+'"]')},y.prototype.setAttributes=function(t){var e=this.getHref(t).slice(1);t.setAttribute("id","tab_"+e),t.setAttribute("role","tab"),t.setAttribute("aria-controls",e),t.setAttribute("aria-selected","false"),t.setAttribute("tabindex","-1");var n=this.getPanel(t);n&&(n.setAttribute("role","tabpanel"),n.setAttribute("aria-labelledby",t.id),n.classList.add(this.jsHiddenClass))},y.prototype.unsetAttributes=function(t){t.removeAttribute("id"),t.removeAttribute("role"),t.removeAttribute("aria-controls"),t.removeAttribute("aria-selected"),t.removeAttribute("tabindex");var e=this.getPanel(t);e&&(e.removeAttribute("role"),e.removeAttribute("aria-labelledby"),e.classList.remove(this.jsHiddenClass))},y.prototype.onTabClick=function(t){var e=this.getCurrentTab(),n=t.currentTarget;e&&n instanceof HTMLAnchorElement&&(t.preventDefault(),this.hideTab(e),this.showTab(n),this.createHistoryEntry(n))},y.prototype.createHistoryEntry=function(t){var e=this.getPanel(t);if(e){var n=e.id;e.id="",this.changingHash=!0,window.location.hash=this.getHref(t).slice(1),e.id=n}},y.prototype.onTabKeydown=function(t){switch(t.keyCode){case this.keys.left:case this.keys.up:this.activatePreviousTab(),t.preventDefault();break;case this.keys.right:case this.keys.down:this.activateNextTab(),t.preventDefault()}},y.prototype.activateNextTab=function(){var t=this.getCurrentTab();if(t&&t.parentElement){var e=t.parentElement.nextElementSibling;if(e){var n=e.querySelector("a.govuk-tabs__tab");n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))}}},y.prototype.activatePreviousTab=function(){var t=this.getCurrentTab();if(t&&t.parentElement){var e=t.parentElement.previousElementSibling;if(e){var n=e.querySelector("a.govuk-tabs__tab");n&&(this.hideTab(t),this.showTab(n),n.focus(),this.createHistoryEntry(n))}}},y.prototype.getPanel=function(t){return this.$module.querySelector(this.getHref(t))},y.prototype.showPanel=function(t){var e=this.getPanel(t);e&&e.classList.remove(this.jsHiddenClass)},y.prototype.hidePanel=function(t){var e=this.getPanel(t);e&&e.classList.add(this.jsHiddenClass)},y.prototype.unhighlightTab=function(t){t.parentElement&&(t.setAttribute("aria-selected","false"),t.parentElement.classList.remove("govuk-tabs__list-item--selected"),t.setAttribute("tabindex","-1"))},y.prototype.highlightTab=function(t){t.parentElement&&(t.setAttribute("aria-selected","true"),t.parentElement.classList.add("govuk-tabs__list-item--selected"),t.setAttribute("tabindex","0"))},y.prototype.getCurrentTab=function(){return this.$module.querySelector(".govuk-tabs__list-item--selected a.govuk-tabs__tab")},y.prototype.getHref=function(t){var e=t.getAttribute("href");return e.slice(e.indexOf("#"),e.length)},function(e){var n=(e=void 0!==e?e:{}).scope instanceof HTMLElement?e.scope:document;t(n.querySelectorAll('[data-module="govuk-accordion"]'),(function(t){new a(t,e.accordion).init()})),t(n.querySelectorAll('[data-module="govuk-button"]'),(function(t){new c(t,e.button).init()})),t(n.querySelectorAll('[data-module="govuk-character-count"]'),(function(t){new d(t,e.characterCount).init()})),t(n.querySelectorAll('[data-module="govuk-checkboxes"]'),(function(t){new h(t).init()})),t(n.querySelectorAll('[data-module="govuk-details"]'),(function(t){new p(t).init()}));var o=n.querySelector('[data-module="govuk-error-summary"]');o&&new f(o,e.errorSummary).init();var i=n.querySelector('[data-module="govuk-header"]');i&&new m(i).init(),t(n.querySelectorAll('[data-module="govuk-notification-banner"]'),(function(t){new b(t,e.notificationBanner).init()})),t(n.querySelectorAll('[data-module="govuk-radios"]'),(function(t){new v(t).init()}));var s=n.querySelector('[data-module="govuk-skip-link"]');s&&new g(s).init(),t(n.querySelectorAll('[data-module="govuk-tabs"]'),(function(t){new y(t).init()}))}({errorSummary:{disableAutoFocus:!0},notificationBanner:{disableAutoFocus:!0}})}();
//# sourceMappingURL=govuk-frontend-34519804930abda7b4f055df21573286.js.map

})
