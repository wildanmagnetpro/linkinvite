<script> ! function(t, e) {
    "object" == typeof module && module.exports ? module.exports = t.document ? e(t) : e : t.Highcharts = e(t)
}("undefined" != typeof window ? window : this, function(t) {
    var e, i, s, n, o, r, a, h, l, c, d, p, u, f, g, m, x, v, y, b, k, M, w, S, A, T, P, C, L, O, D, I, z, E, B, R, G, W, H, N, X, Y, F, V, j, U, _, K, Z, q, $, J, Q, tt, et, it, st, nt, ot, rt, at, ht, lt, ct, dt, pt, ut, ft, gt, mt, xt, vt, yt, bt, kt, Mt, wt, St, At, Tt;
    e = window, i = e.document, s = e.navigator && e.navigator.userAgent || "", n = i && i.createElementNS && !!i.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o = /(edge|msie|trident)/i.test(s) && !window.opera, r = !n, a = /Firefox/.test(s), h = a && 4 > parseInt(s.split("Firefox/")[1], 10), t = e.Highcharts ? e.Highcharts.error(16, !0) : {
            product: "Highstock",
            version: "5.0.12",
            deg2rad: 2 * Math.PI / 360,
            doc: i,
            hasBidiBug: h,
            hasTouch: i && void 0 !== i.documentElement.ontouchstart,
            isMS: o,
            isWebKit: /AppleWebKit/.test(s),
            isFirefox: a,
            isTouchDevice: /(Mobile|Android|Windows Phone)/.test(s),
            SVG_NS: "http://www.w3.org/2000/svg",
            chartCount: 0,
            seriesTypes: {},
            symbolSizes: {},
            svg: n,
            vml: r,
            win: e,
            marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
            noop: function() {},
            charts: []
        }, p = [], u = (l = t).charts, f = l.doc, g = l.win, l.error = function(t, e) {
            if (t = l.isNumber(t) ? "Highcharts error #" + t + ": www.highcharts.com/errors/" + t : t, e) throw Error(t);
            g.console && console.log(t)
        }, l.Fx = function(t, e, i) {
            this.options = e, this.elem = t, this.prop = i
        }, l.Fx.prototype = {
            dSetter: function() {
                var t, e = this.paths[0],
                    i = this.paths[1],
                    s = [],
                    n = this.now,
                    o = e.length;
                if (1 === n) s = this.toD;
                else if (o === i.length && 1 > n)
                    for (; o--;) t = parseFloat(e[o]), s[o] = isNaN(t) ? e[o] : n * parseFloat(i[o] - t) + t;
                else s = i;
                this.elem.attr("d", s, null, !0)
            },
            update: function() {
                var t = this.elem,
                    e = this.prop,
                    i = this.now,
                    s = this.options.step;
                this[e + "Setter"] ? this[e + "Setter"]() : t.attr ? t.element && t.attr(e, i, null, !0) : t.style[e] = i + this.unit, s && s.call(t, i, this)
            },
            run: function(t, e, i) {
                var s, n = this,
                    o = function(t) {
                        return !o.stopped && n.step(t)
                    };
                this.startTime = +new Date, this.start = t, this.end = e, this.unit = i, this.now = this.start, this.pos = 0, o.elem = this.elem, o.prop = this.prop, o() && 1 === p.push(o) && (o.timerId = setInterval(function() {
                    for (s = 0; s < p.length; s++) p[s]() || p.splice(s--, 1);
                    p.length || clearInterval(o.timerId)
                }, 13))
            },
            step: function(t) {
                var e, i = +new Date,
                    s = this.options,
                    n = this.elem,
                    o = s.complete,
                    r = s.duration,
                    a = s.curAnim;
                return n.attr && !n.element ? t = !1 : t || i >= r + this.startTime ? (this.now = this.end, this.pos = 1, this.update(), e = a[this.prop] = !0, l.objectEach(a, function(t) {
                    !0 !== t && (e = !1)
                }), e && o && o.call(n), t = !1) : (this.pos = s.easing((i - this.startTime) / r), this.now = this.start + (this.end - this.start) * this.pos, this.update(), t = !0), t
            },
            initPath: function(t, e, i) {
                function s(t) {
                    var e, i;
                    for (c = t.length; c--;) e = "M" === t[c] || "L" === t[c], i = /[a-zA-Z]/.test(t[c + 3]), e && i && t.splice(c + 1, 0, t[c + 1], t[c + 2], t[c + 1], t[c + 2])
                }

                function n(t, e) {
                    for (; t.length < a;) {
                        t[0] = e[a - t.length];
                        var i = t.slice(0, f);
                        [].splice.apply(t, [0, 0].concat(i)), m && (i = t.slice(t.length - f), [].splice.apply(t, [t.length, 0].concat(i)), c--)
                    }
                    t[0] = "M"
                }

                function o(t, e) {
                    for (var i = (a - t.length) / f; 0 < i && i--;)(h = t.slice().splice(t.length / x - f, f * x))[0] = e[a - f - i * f], u && (h[f - 6] = h[f - 2], h[f - 5] = h[f - 1]), [].splice.apply(t, [t.length / x, 0].concat(h)), m && i--
                }
                e = e || "";
                var r, a, h, c, d = t.startX,
                    p = t.endX,
                    u = -1 < e.indexOf("C"),
                    f = u ? 7 : 3;
                e = e.split(" "), i = i.slice();
                var g, m = t.isArea,
                    x = m ? 2 : 1;
                if (u && (s(e), s(i)), d && p) {
                    for (c = 0; c < d.length; c++) {
                        if (d[c] === p[0]) {
                            r = c;
                            break
                        }
                        if (d[0] === p[p.length - d.length + c]) {
                            r = c, g = !0;
                            break
                        }
                    }
                    void 0 === r && (e = [])
                }
                return e.length && l.isNumber(r) && (a = i.length + r * x * f, g ? (n(e, i), o(i, e)) : (n(i, e), o(e, i))), [e, i]
            }
        }, l.Fx.prototype.fillSetter = l.Fx.prototype.strokeSetter = function() {
            this.elem.attr(this.prop, l.color(this.start).tweenTo(l.color(this.end), this.pos), null, !0)
        }, l.extend = function(t, e) {
            var i;
            for (i in t || (t = {}), e) t[i] = e[i];
            return t
        }, l.merge = function() {
            var t, e, i = arguments,
                s = {},
                n = function(t, e) {
                    return "object" != typeof t && (t = {}), l.objectEach(e, function(i, s) {
                        !l.isObject(i, !0) || l.isClass(i) || l.isDOMElement(i) ? t[s] = e[s] : t[s] = n(t[s] || {}, i)
                    }), t
                };
            for (!0 === i[0] && (s = i[1], i = Array.prototype.slice.call(i, 2)), e = i.length, t = 0; t < e; t++) s = n(s, i[t]);
            return s
        }, l.pInt = function(t, e) {
            return parseInt(t, e || 10)
        }, l.isString = function(t) {
            return "string" == typeof t
        }, l.isArray = function(t) {
            return "[object Array]" === (t = Object.prototype.toString.call(t)) || "[object Array Iterator]" === t
        }, l.isObject = function(t, e) {
            return !(!t || "object" != typeof t || e && l.isArray(t))
        }, l.isDOMElement = function(t) {
            return l.isObject(t) && "number" == typeof t.nodeType
        }, l.isClass = function(t) {
            var e = t && t.constructor;
            return !(!l.isObject(t, !0) || l.isDOMElement(t) || !e || !e.name || "Object" === e.name)
        }, l.isNumber = function(t) {
            return "number" == typeof t && !isNaN(t)
        }, l.erase = function(t, e) {
            for (var i = t.length; i--;)
                if (t[i] === e) {
                    t.splice(i, 1);
                    break
                }
        }, l.defined = function(t) {
            return null != t
        }, l.attr = function(t, e, i) {
            var s;
            return l.isString(e) ? l.defined(i) ? t.setAttribute(e, i) : t && t.getAttribute && (s = t.getAttribute(e)) : l.defined(e) && l.isObject(e) && l.objectEach(e, function(e, i) {
                t.setAttribute(i, e)
            }), s
        }, l.splat = function(t) {
            return l.isArray(t) ? t : [t]
        }, l.syncTimeout = function(t, e, i) {
            if (e) return setTimeout(t, e, i);
            t.call(0, i)
        }, l.pick = function() {
            var t, e, i = arguments,
                s = i.length;
            for (t = 0; t < s; t++)
                if (null != (e = i[t])) return e
        }, l.css = function(t, e) {
            l.isMS && !l.svg && e && void 0 !== e.opacity && (e.filter = "alpha(opacity=" + 100 * e.opacity + ")"), l.extend(t.style, e)
        }, l.createElement = function(t, e, i, s, n) {
            t = f.createElement(t);
            var o = l.css;
            return e && l.extend(t, e), n && o(t, {
                padding: 0,
                border: "none",
                margin: 0
            }), i && o(t, i), s && s.appendChild(t), t
        }, l.extendClass = function(t, e) {
            var i = function() {};
            return i.prototype = new t, l.extend(i.prototype, e), i
        }, l.pad = function(t, e, i) {
            return Array((e || 2) + 1 - String(t).length).join(i || 0) + t
        }, l.relativeLength = function(t, e) {
            return /%$/.test(t) ? e * parseFloat(t) / 100 : parseFloat(t)
        }, l.wrap = function(t, e, i) {
            var s = t[e];
            t[e] = function() {
                var t = Array.prototype.slice.call(arguments),
                    e = arguments,
                    n = this;
                return n.proceed = function() {
                    s.apply(n, arguments.length ? arguments : e)
                }, t.unshift(s), t = i.apply(this, t), n.proceed = null, t
            }
        }, l.getTZOffset = function(t) {
            var e = l.Date;
            return 6e4 * (e.hcGetTimezoneOffset && e.hcGetTimezoneOffset(t) || e.hcTimezoneOffset || 0)
        }, l.dateFormat = function(t, e, i) {
            if (!l.defined(e) || isNaN(e)) return l.defaultOptions.lang.invalidDate || "";
            t = l.pick(t, "%Y-%m-%d %H:%M:%S");
            var s = new(f = l.Date)(e - l.getTZOffset(e)),
                n = s[f.hcGetHours](),
                o = s[f.hcGetDay](),
                r = s[f.hcGetDate](),
                a = s[f.hcGetMonth](),
                h = s[f.hcGetFullYear](),
                c = l.defaultOptions.lang,
                d = c.weekdays,
                p = c.shortWeekdays,
                u = l.pad,
                f = l.extend({
                    a: p ? p[o] : d[o].substr(0, 3),
                    A: d[o],
                    d: u(r),
                    e: u(r, 2, " "),
                    w: o,
                    b: c.shortMonths[a],
                    B: c.months[a],
                    m: u(a + 1),
                    y: h.toString().substr(2, 2),
                    Y: h,
                    H: u(n),
                    k: n,
                    I: u(n % 12 || 12),
                    l: n % 12 || 12,
                    M: u(s[f.hcGetMinutes]()),
                    p: 12 > n ? "AM" : "PM",
                    P: 12 > n ? "am" : "pm",
                    S: u(s.getSeconds()),
                    L: u(Math.round(e % 1e3), 3)
                }, l.dateFormats);
            return l.objectEach(f, function(i, s) {
                for (; - 1 !== t.indexOf("%" + s);) t = t.replace("%" + s, "function" == typeof i ? i(e) : i)
            }), i ? t.substr(0, 1).toUpperCase() + t.substr(1) : t
        }, l.formatSingle = function(t, e) {
            var i = /\.([0-9])/,
                s = l.defaultOptions.lang;
            return /f$/.test(t) ? (i = (i = t.match(i)) ? i[1] : -1, null !== e && (e = l.numberFormat(e, i, s.decimalPoint, -1 < t.indexOf(",") ? s.thousandsSep : ""))) : e = l.dateFormat(t, e), e
        }, l.format = function(t, e) {
            for (var i, s, n, o, r, a = "{", h = !1, c = []; t && -1 !== (a = t.indexOf(a));) {
                if (i = t.slice(0, a), h) {
                    for (o = (s = (i = i.split(":")).shift().split(".")).length, r = e, n = 0; n < o; n++) r = r[s[n]];
                    i.length && (r = l.formatSingle(i.join(":"), r)), c.push(r)
                } else c.push(i);
                t = t.slice(a + 1), a = (h = !h) ? "}" : "{"
            }
            return c.push(t), c.join("")
        }, l.getMagnitude = function(t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
        }, l.normalizeTickInterval = function(t, e, i, s, n) {
            var o, r = t;
            for (o = t / (i = l.pick(i, 1)), e || (e = n ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === s && (1 === i ? e = l.grep(e, function(t) {
                    return 0 == t % 1
                }) : .1 >= i && (e = [1 / i]))), s = 0; s < e.length && (r = e[s], !(n && r * i >= t || !n && o <= (e[s] + (e[s + 1] || e[s])) / 2)); s++);
            return l.correctFloat(r * i, -Math.round(Math.log(.001) / Math.LN10))
        }, l.stableSort = function(t, e) {
            var i, s, n = t.length;
            for (s = 0; s < n; s++) t[s].safeI = s;
            for (t.sort(function(t, s) {
                    return 0 === (i = e(t, s)) ? t.safeI - s.safeI : i
                }), s = 0; s < n; s++) delete t[s].safeI
        }, l.arrayMin = function(t) {
            for (var e = t.length, i = t[0]; e--;) t[e] < i && (i = t[e]);
            return i
        }, l.arrayMax = function(t) {
            for (var e = t.length, i = t[0]; e--;) t[e] > i && (i = t[e]);
            return i
        }, l.destroyObjectProperties = function(t, e) {
            l.objectEach(t, function(i, s) {
                i && i !== e && i.destroy && i.destroy(), delete t[s]
            })
        }, l.discardElement = function(t) {
            var e = l.garbageBin;
            e || (e = l.createElement("div")), t && e.appendChild(t), e.innerHTML = ""
        }, l.correctFloat = function(t, e) {
            return parseFloat(t.toPrecision(e || 14))
        }, l.setAnimation = function(t, e) {
            e.renderer.globalAnimation = l.pick(t, e.options.chart.animation, !0)
        }, l.animObject = function(t) {
            return l.isObject(t) ? l.merge(t) : {
                duration: t ? 500 : 0
            }
        }, l.timeUnits = {
            millisecond: 1,
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            week: 6048e5,
            month: 24192e5,
            year: 314496e5
        }, l.numberFormat = function(t, e, i, s) {
            t = +t || 0, e = +e;
            var n, o, r = l.defaultOptions.lang,
                a = (t.toString().split(".")[1] || "").length;
            return -1 === e ? e = Math.min(a, 20) : l.isNumber(e) || (e = 2), o = (Math.abs(t) + Math.pow(10, -Math.max(e, a) - 1)).toFixed(e), n = 3 < (a = String(l.pInt(o))).length ? a.length % 3 : 0, i = l.pick(i, r.decimalPoint), s = l.pick(s, r.thousandsSep), t = (0 > t ? "-" : "") + (n ? a.substr(0, n) + s : ""), t += a.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + s), e && (t += i + o.slice(-e)), t
        }, Math.easeInOutSine = function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        }, l.getStyle = function(t, e, i) {
            return "width" === e ? Math.min(t.offsetWidth, t.scrollWidth) - l.getStyle(t, "padding-left") - l.getStyle(t, "padding-right") : "height" === e ? Math.min(t.offsetHeight, t.scrollHeight) - l.getStyle(t, "padding-top") - l.getStyle(t, "padding-bottom") : ((t = g.getComputedStyle(t, void 0)) && (t = t.getPropertyValue(e), l.pick(i, !0) && (t = l.pInt(t))), t)
        }, l.inArray = function(t, e) {
            return e.indexOf ? e.indexOf(t) : [].indexOf.call(e, t)
        }, l.grep = function(t, e) {
            return [].filter.call(t, e)
        }, l.find = function(t, e) {
            return [].find.call(t, e)
        }, l.map = function(t, e) {
            for (var i = [], s = 0, n = t.length; s < n; s++) i[s] = e.call(t[s], t[s], s, t);
            return i
        }, l.offset = function(t) {
            var e = f.documentElement;
            return {
                top: (t = t.getBoundingClientRect()).top + (g.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: t.left + (g.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }
        }, l.stop = function(t, e) {
            for (var i = p.length; i--;) p[i].elem !== t || e && e !== p[i].prop || (p[i].stopped = !0)
        }, l.each = function(t, e, i) {
            return Array.prototype.forEach.call(t, e, i)
        }, l.objectEach = function(t, e, i) {
            for (var s in t) t.hasOwnProperty(s) && e.call(i, t[s], s, t)
        }, l.addEvent = function(t, e, i) {
            function s(e) {
                e.target = e.srcElement || g, i.call(t, e)
            }
            var n = t.hcEvents = t.hcEvents || {};
            return t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && (t.hcEventsIE || (t.hcEventsIE = {}), t.hcEventsIE[i.toString()] = s, t.attachEvent("on" + e, s)), n[e] || (n[e] = []), n[e].push(i),
                function() {
                    l.removeEvent(t, e, i)
                }
        }, l.removeEvent = function(t, e, i) {
            function s(e, i) {
                t.removeEventListener ? t.removeEventListener(e, i, !1) : t.attachEvent && (i = t.hcEventsIE[i.toString()], t.detachEvent("on" + e, i))
            }

            function n() {
                var i, n;
                t.nodeName && (e ? (i = {})[e] = !0 : i = a, l.objectEach(i, function(t, e) {
                    if (a[e])
                        for (n = a[e].length; n--;) s(e, a[e][n])
                }))
            }
            var o, r, a = t.hcEvents;
            a && (e ? (o = a[e] || [], i ? (-1 < (r = l.inArray(i, o)) && (o.splice(r, 1), a[e] = o), s(e, i)) : (n(), a[e] = [])) : (n(), t.hcEvents = {}))
        }, l.fireEvent = function(t, e, i, s) {
            var n, o, r;
            if (n = t.hcEvents, i = i || {}, f.createEvent && (t.dispatchEvent || t.fireEvent))(n = f.createEvent("Events")).initEvent(e, !0, !0), l.extend(n, i), t.dispatchEvent ? t.dispatchEvent(n) : t.fireEvent(e, n);
            else if (n)
                for (o = (n = n[e] || []).length, i.target || l.extend(i, {
                        preventDefault: function() {
                            i.defaultPrevented = !0
                        },
                        target: t,
                        type: e
                    }), e = 0; e < o; e++)(r = n[e]) && !1 === r.call(t, i) && i.preventDefault();
            s && !i.defaultPrevented && s(i)
        }, l.animate = function(t, e, i) {
            var s, n, o, r, a = "";
            l.isObject(i) || (i = {
                duration: (r = arguments)[2],
                easing: r[3],
                complete: r[4]
            }), l.isNumber(i.duration) || (i.duration = 400), i.easing = "function" == typeof i.easing ? i.easing : Math[i.easing] || Math.easeInOutSine, i.curAnim = l.merge(e), l.objectEach(e, function(r, h) {
                l.stop(t, h), o = new l.Fx(t, i, h), n = null, "d" === h ? (o.paths = o.initPath(t, t.d, e.d), o.toD = e.d, s = 0, n = 1) : t.attr ? s = t.attr(h) : (s = parseFloat(l.getStyle(t, h)) || 0, "opacity" !== h && (a = "px")), n || (n = r), n && n.match && n.match("px") && (n = n.replace(/px/g, "")), o.run(s, n, a)
            })
        }, l.seriesType = function(t, e, i, s, n) {
            var o = l.getOptions(),
                r = l.seriesTypes;
            return r[t] ? l.error(27) : (o.plotOptions[t] = l.merge(o.plotOptions[e], i), r[t] = l.extendClass(r[e] || function() {}, s), r[t].prototype.type = t, n && (r[t].prototype.pointClass = l.extendClass(l.Point, n)), r[t])
        }, l.uniqueKey = (c = Math.random().toString(36).substring(2, 9), d = 0, function() {
            return "highcharts-" + c + "-" + d++
        }), g.jQuery && (g.jQuery.fn.highcharts = function() {
            var t = [].slice.call(arguments);
            if (this[0]) return t[0] ? (new(l[l.isString(t[0]) ? t.shift() : "Chart"])(this[0], t[0], t[1]), this) : u[l.attr(this[0], "data-highcharts-chart")]
        }), f && !f.defaultView && (l.getStyle = function(t, e) {
            var i = {
                width: "clientWidth",
                height: "clientHeight"
            } [e];
            return t.style[e] ? l.pInt(t.style[e]) : ("opacity" === e && (e = "filter"), i ? (t.style.zoom = 1, Math.max(t[i] - 2 * l.getStyle(t, "padding"), 0)) : (t = t.currentStyle[e.replace(/\-(\w)/g, function(t, e) {
                return e.toUpperCase()
            })], "filter" === e && (t = t.replace(/alpha\(opacity=([0-9]+)\)/, function(t, e) {
                return e / 100
            })), "" === t ? 1 : l.pInt(t)))
        }), Array.prototype.forEach || (l.each = function(t, e, i) {
            for (var s = 0, n = t.length; s < n; s++)
                if (!1 === e.call(i, t[s], s, t)) return s
        }), Array.prototype.indexOf || (l.inArray = function(t, e) {
            var i, s = 0;
            if (e)
                for (i = e.length; s < i; s++)
                    if (e[s] === t) return s;
            return -1
        }), Array.prototype.filter || (l.grep = function(t, e) {
            for (var i = [], s = 0, n = t.length; s < n; s++) e(t[s], s) && i.push(t[s]);
            return i
        }), Array.prototype.find || (l.find = function(t, e) {
            var i, s = t.length;
            for (i = 0; i < s; i++)
                if (e(t[i], i)) return t[i]
        }), x = (m = t).each, v = m.isNumber, y = m.map, b = m.merge, k = m.pInt, m.Color = function(t) {
            if (!(this instanceof m.Color)) return new m.Color(t);
            this.init(t)
        }, m.Color.prototype = {
            parsers: [{
                regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                parse: function(t) {
                    return [k(t[1]), k(t[2]), k(t[3]), parseFloat(t[4], 10)]
                }
            }, {
                regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                parse: function(t) {
                    return [k(t[1]), k(t[2]), k(t[3]), 1]
                }
            }],
            names: {
                none: "rgba(255,255,255,0)",
                white: "#ffffff",
                black: "#000000"
            },
            init: function(t) {
                var e, i, s, n;
                if ((this.input = t = this.names[t && t.toLowerCase ? t.toLowerCase() : ""] || t) && t.stops) this.stops = y(t.stops, function(t) {
                    return new m.Color(t[1])
                });
                else if (t && "#" === t[0] && (e = t.length, t = parseInt(t.substr(1), 16), 7 === e ? i = [(16711680 & t) >> 16, (65280 & t) >> 8, 255 & t, 1] : 4 === e && (i = [(3840 & t) >> 4 | (3840 & t) >> 8, (240 & t) >> 4 | 240 & t, (15 & t) << 4 | 15 & t, 1])), !i)
                    for (s = this.parsers.length; s-- && !i;)(e = (n = this.parsers[s]).regex.exec(t)) && (i = n.parse(e));
                this.rgba = i || []
            },
            get: function(t) {
                var e, i = this.input,
                    s = this.rgba;
                return this.stops ? ((e = b(i)).stops = [].concat(e.stops), x(this.stops, function(i, s) {
                    e.stops[s] = [e.stops[s][0], i.get(t)]
                })) : e = s && v(s[0]) ? "rgb" === t || !t && 1 === s[3] ? "rgb(" + s[0] + "," + s[1] + "," + s[2] + ")" : "a" === t ? s[3] : "rgba(" + s.join(",") + ")" : i, e
            },
            brighten: function(t) {
                var e, i = this.rgba;
                if (this.stops) x(this.stops, function(e) {
                    e.brighten(t)
                });
                else if (v(t) && 0 !== t)
                    for (e = 0; 3 > e; e++) i[e] += k(255 * t), 0 > i[e] && (i[e] = 0), 255 < i[e] && (i[e] = 255);
                return this
            },
            setOpacity: function(t) {
                return this.rgba[3] = t, this
            },
            tweenTo: function(t, e) {
                var i, s;
                return t.rgba.length ? (i = this.rgba, t = ((s = 1 !== (t = t.rgba)[3] || 1 !== i[3]) ? "rgba(" : "rgb(") + Math.round(t[0] + (i[0] - t[0]) * (1 - e)) + "," + Math.round(t[1] + (i[1] - t[1]) * (1 - e)) + "," + Math.round(t[2] + (i[2] - t[2]) * (1 - e)) + (s ? "," + (t[3] + (i[3] - t[3]) * (1 - e)) : "") + ")") : t = t.input || "none", t
            }
        }, m.color = function(t) {
            return new m.Color(t)
        }, A = (M = t).addEvent, T = M.animate, P = M.attr, C = M.charts, L = M.color, O = M.css, D = M.createElement, I = M.defined, z = M.deg2rad, E = M.destroyObjectProperties, B = M.doc, R = M.each, G = M.extend, W = M.erase, H = M.grep, N = M.hasTouch, X = M.inArray, Y = M.isArray, F = M.isFirefox, V = M.isMS, j = M.isObject, U = M.isString, _ = M.isWebKit, K = M.merge, Z = M.noop, q = M.objectEach, $ = M.pick, J = M.pInt, Q = M.removeEvent, tt = M.stop, et = M.svg, it = M.SVG_NS, st = M.symbolSizes, nt = M.win, w = M.SVGElement = function() {
            return this
        }, G(w.prototype, {
            opacity: 1,
            SVG_NS: it,
            textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),
            init: function(t, e) {
                this.element = "span" === e ? D(e) : B.createElementNS(this.SVG_NS, e), this.renderer = t
            },
            animate: function(t, e, i) {
                return 0 !== (e = M.animObject($(e, this.renderer.globalAnimation, !0))).duration ? (i && (e.complete = i), T(this, t, e)) : (this.attr(t, null, i), e.step && e.step.call(this)), this
            },
            colorGradient: function(t, e, i) {
                var s, n, o, r, a, h, l, c, d, p, u, f = this.renderer,
                    g = [];
                t.radialGradient ? n = "radialGradient" : t.linearGradient && (n = "linearGradient"), n && (o = t[n], a = f.gradients, l = t.stops, p = i.radialReference, Y(o) && (t[n] = o = {
                    x1: o[0],
                    y1: o[1],
                    x2: o[2],
                    y2: o[3],
                    gradientUnits: "userSpaceOnUse"
                }), "radialGradient" === n && p && !I(o.gradientUnits) && (r = o, o = K(o, f.getRadialAttr(p, r), {
                    gradientUnits: "userSpaceOnUse"
                })), q(o, function(t, e) {
                    "id" !== e && g.push(e, t)
                }), q(l, function(t) {
                    g.push(t)
                }), a[g = g.join(",")] ? p = a[g].attr("id") : (o.id = p = M.uniqueKey(), a[g] = h = f.createElement(n).attr(o).add(f.defs), h.radAttr = r, h.stops = [], R(l, function(t) {
                    0 === t[1].indexOf("rgba") ? (s = M.color(t[1]), c = s.get("rgb"), d = s.get("a")) : (c = t[1], d = 1), t = f.createElement("stop").attr({
                        offset: t[0],
                        "stop-color": c,
                        "stop-opacity": d
                    }).add(h), h.stops.push(t)
                })), u = "url(" + f.url + "#" + p + ")", i.setAttribute(e, u), i.gradient = g, t.toString = function() {
                    return u
                })
            },
            applyTextOutline: function(t) {
                var e, i, s, n, o, r = this.element;
                if (-1 !== t.indexOf("contrast") && (t = t.replace(/contrast/g, this.renderer.getContrast(r.style.fill))), t = t.split(" "), i = t[t.length - 1], (s = t[0]) && "none" !== s && M.svg) {
                    for (this.fakeTS = !0, t = [].slice.call(r.getElementsByTagName("tspan")), this.ySetter = this.xSetter, s = s.replace(/(^[\d\.]+)(.*?)$/g, function(t, e, i) {
                            return 2 * e + i
                        }), o = t.length; o--;) "highcharts-text-outline" === (e = t[o]).getAttribute("class") && W(t, r.removeChild(e));
                    n = r.firstChild, R(t, function(t, e) {
                        0 === e && (t.setAttribute("x", r.getAttribute("x")), e = r.getAttribute("y"), t.setAttribute("y", e || 0), null === e && r.setAttribute("y", 0)), t = t.cloneNode(1), P(t, {
                            class: "highcharts-text-outline",
                            fill: i,
                            stroke: i,
                            "stroke-width": s,
                            "stroke-linejoin": "round"
                        }), r.insertBefore(t, n)
                    })
                }
            },
            attr: function(t, e, i, s) {
                var n, o, r, a, h = this.element,
                    l = this;
                return "string" == typeof t && void 0 !== e && (n = t, (t = {})[n] = e), "string" == typeof t ? l = (this[t + "Getter"] || this._defaultGetter).call(this, t, h) : (q(t, function(e, i) {
                    r = !1, s || tt(this, i), this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(i) && (o || (this.symbolAttr(t), o = !0), r = !0), !this.rotation || "x" !== i && "y" !== i || (this.doTransform = !0), r || ((a = this[i + "Setter"] || this._defaultSetter).call(this, e, i, h), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i) && this.updateShadows(i, e, a))
                }, this), this.afterSetters()), i && i(), l
            },
            afterSetters: function() {
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            },
            updateShadows: function(t, e, i) {
                for (var s = this.shadows, n = s.length; n--;) i.call(s[n], "height" === t ? Math.max(e - (s[n].cutHeight || 0), 0) : "d" === t ? this.d : e, t, s[n])
            },
            addClass: function(t, e) {
                var i = this.attr("class") || "";
                return -1 === i.indexOf(t) && (e || (t = (i + (i ? " " : "") + t).replace("  ", " ")), this.attr("class", t)), this
            },
            hasClass: function(t) {
                return -1 !== P(this.element, "class").indexOf(t)
            },
            removeClass: function(t) {
                return P(this.element, "class", (P(this.element, "class") || "").replace(t, "")), this
            },
            symbolAttr: function(t) {
                var e = this;
                R("x y r start end width height innerR anchorX anchorY".split(" "), function(i) {
                    e[i] = $(t[i], e[i])
                }), e.attr({
                    d: e.renderer.symbols[e.symbolName](e.x, e.y, e.width, e.height, e)
                })
            },
            clip: function(t) {
                return this.attr("clip-path", t ? "url(" + this.renderer.url + "#" + t.id + ")" : "none")
            },
            crisp: function(t, e) {
                var i, s = this,
                    n = {};
                return e = e || t.strokeWidth || 0, i = Math.round(e) % 2 / 2, t.x = Math.floor(t.x || s.x || 0) + i, t.y = Math.floor(t.y || s.y || 0) + i, t.width = Math.floor((t.width || s.width || 0) - 2 * i), t.height = Math.floor((t.height || s.height || 0) - 2 * i), I(t.strokeWidth) && (t.strokeWidth = e), q(t, function(t, e) {
                    s[e] !== t && (s[e] = n[e] = t)
                }), n
            },
            css: function(t) {
                var e, i, s = this.styles,
                    n = {},
                    o = this.element,
                    r = "",
                    a = !s,
                    h = ["textOutline", "textOverflow", "width"];
                return t && t.color && (t.fill = t.color), s && q(t, function(t, e) {
                    t !== s[e] && (n[e] = t, a = !0)
                }), a && (s && (t = G(s, n)), e = this.textWidth = t && t.width && "auto" !== t.width && "text" === o.nodeName.toLowerCase() && J(t.width), this.styles = t, e && !et && this.renderer.forExport && delete t.width, V && !et ? O(this.element, t) : (i = function(t, e) {
                    return "-" + e.toLowerCase()
                }, q(t, function(t, e) {
                    -1 === X(e, h) && (r += e.replace(/([A-Z])/g, i) + ":" + t + ";")
                }), r && P(o, "style", r)), this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), t && t.textOutline && this.applyTextOutline(t.textOutline))), this
            },
            strokeWidth: function() {
                return this["stroke-width"] || 0
            },
            on: function(t, e) {
                var i = this,
                    s = i.element;
                return N && "click" === t ? (s.ontouchstart = function(t) {
                    i.touchEventFired = Date.now(), t.preventDefault(), e.call(s, t)
                }, s.onclick = function(t) {
                    (-1 === nt.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (i.touchEventFired || 0)) && e.call(s, t)
                }) : s["on" + t] = e, this
            },
            setRadialReference: function(t) {
                var e = this.renderer.gradients[this.element.gradient];
                return this.element.radialReference = t, e && e.radAttr && e.animate(this.renderer.getRadialAttr(t, e.radAttr)), this
            },
            translate: function(t, e) {
                return this.attr({
                    translateX: t,
                    translateY: e
                })
            },
            invert: function(t) {
                return this.inverted = t, this.updateTransform(), this
            },
            updateTransform: function() {
                var t = this.translateX || 0,
                    e = this.translateY || 0,
                    i = this.scaleX,
                    s = this.scaleY,
                    n = this.inverted,
                    o = this.rotation,
                    r = this.element;
                n && (t += this.width, e += this.height), t = ["translate(" + t + "," + e + ")"], n ? t.push("rotate(90) scale(-1,1)") : o && t.push("rotate(" + o + " " + (r.getAttribute("x") || 0) + " " + (r.getAttribute("y") || 0) + ")"), (I(i) || I(s)) && t.push("scale(" + $(i, 1) + " " + $(s, 1) + ")"), t.length && r.setAttribute("transform", t.join(" "))
            },
            toFront: function() {
                var t = this.element;
                return t.parentNode.appendChild(t), this
            },
            align: function(t, e, i) {
                var s, n, o, r, a, h, l = {};
                return o = (n = this.renderer).alignedObjects, t ? (this.alignOptions = t, this.alignByTranslate = e, (!i || U(i)) && (this.alignTo = s = i || "renderer", W(o, this), o.push(this), i = null)) : (t = this.alignOptions, e = this.alignByTranslate, s = this.alignTo), i = $(i, n[s], n), s = t.align, n = t.verticalAlign, o = (i.x || 0) + (t.x || 0), r = (i.y || 0) + (t.y || 0), "right" === s ? a = 1 : "center" === s && (a = 2), a && (o += (i.width - (t.width || 0)) / a), l[e ? "translateX" : "x"] = Math.round(o), "bottom" === n ? h = 1 : "middle" === n && (h = 2), h && (r += (i.height - (t.height || 0)) / h), l[e ? "translateY" : "y"] = Math.round(r), this[this.placed ? "animate" : "attr"](l), this.placed = !0, this.alignAttr = l, this
            },
            getBBox: function(t, e) {
                var i, s, n, o, r, a = this.renderer,
                    h = this.element,
                    l = this.styles,
                    c = this.textStr,
                    d = a.cache,
                    p = a.cacheKeys;
                if (s = (e = $(e, this.rotation)) * z, n = l && l.fontSize, void 0 !== c && (-1 === (r = c.toString()).indexOf("<") && (r = r.replace(/[0-9]/g, "0")), r += ["", e || 0, n, l && l.width, l && l.textOverflow].join()), r && !t && (i = d[r]), !i) {
                    if (h.namespaceURI === this.SVG_NS || a.forExport) {
                        try {
                            (o = this.fakeTS && function(t) {
                                R(h.querySelectorAll(".highcharts-text-outline"), function(e) {
                                    e.style.display = t
                                })
                            }) && o("none"), i = h.getBBox ? G({}, h.getBBox()) : {
                                width: h.offsetWidth,
                                height: h.offsetHeight
                            }, o && o("")
                        } catch (t) {}(!i || 0 > i.width) && (i = {
                            width: 0,
                            height: 0
                        })
                    } else i = this.htmlGetBBox();
                    if (a.isSVG && (t = i.width, a = i.height, l && "11px" === l.fontSize && 17 === Math.round(a) && (i.height = a = 14), e && (i.width = Math.abs(a * Math.sin(s)) + Math.abs(t * Math.cos(s)), i.height = Math.abs(a * Math.cos(s)) + Math.abs(t * Math.sin(s)))), r && 0 < i.height) {
                        for (; 250 < p.length;) delete d[p.shift()];
                        d[r] || p.push(r), d[r] = i
                    }
                }
                return i
            },
            show: function(t) {
                return this.attr({
                    visibility: t ? "inherit" : "visible"
                })
            },
            hide: function() {
                return this.attr({
                    visibility: "hidden"
                })
            },
            fadeOut: function(t) {
                var e = this;
                e.animate({
                    opacity: 0
                }, {
                    duration: t || 150,
                    complete: function() {
                        e.attr({
                            y: -9999
                        })
                    }
                })
            },
            add: function(t) {
                var e, i = this.renderer,
                    s = this.element;
                return t && (this.parentGroup = t), this.parentInverted = t && t.inverted, void 0 !== this.textStr && i.buildText(this), this.added = !0, (!t || t.handleZ || this.zIndex) && (e = this.zIndexSetter()), e || (t ? t.element : i.box).appendChild(s), this.onAdd && this.onAdd(), this
            },
            safeRemoveChild: function(t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            },
            destroy: function() {
                var t = this,
                    e = t.element || {},
                    i = t.renderer.isSVG && "SPAN" === e.nodeName && t.parentGroup,
                    s = e.ownerSVGElement;
                if (e.onclick = e.onmouseout = e.onmouseover = e.onmousemove = e.point = null, tt(t), t.clipPath && s && (R(s.querySelectorAll("[clip-path]"), function(e) {
                        -1 < e.getAttribute("clip-path").indexOf(t.clipPath.element.id + ")") && e.removeAttribute("clip-path")
                    }), t.clipPath = t.clipPath.destroy()), t.stops) {
                    for (s = 0; s < t.stops.length; s++) t.stops[s] = t.stops[s].destroy();
                    t.stops = null
                }
                for (t.safeRemoveChild(e), t.destroyShadows(); i && i.div && 0 === i.div.childNodes.length;) e = i.parentGroup, t.safeRemoveChild(i.div), delete i.div, i = e;
                return t.alignTo && W(t.renderer.alignedObjects, t), q(t, function(e, i) {
                    delete t[i]
                }), null
            },
            shadow: function(t, e, i) {
                var s, n, o, r, a, h, l = [],
                    c = this.element;
                if (t) {
                    if (!this.shadows) {
                        for (r = $(t.width, 3), a = (t.opacity || .15) / r, h = this.parentInverted ? "(-1,-1)" : "(" + $(t.offsetX, 1) + ", " + $(t.offsetY, 1) + ")", s = 1; s <= r; s++) n = c.cloneNode(0), o = 2 * r + 1 - 2 * s, P(n, {
                            isShadow: "true",
                            stroke: t.color || "#000000",
                            "stroke-opacity": a * s,
                            "stroke-width": o,
                            transform: "translate" + h,
                            fill: "none"
                        }), i && (P(n, "height", Math.max(P(n, "height") - o, 0)), n.cutHeight = o), e ? e.element.appendChild(n) : c.parentNode.insertBefore(n, c), l.push(n);
                        this.shadows = l
                    }
                } else this.destroyShadows();
                return this
            },
            destroyShadows: function() {
                R(this.shadows || [], function(t) {
                    this.safeRemoveChild(t)
                }, this), this.shadows = void 0
            },
            xGetter: function(t) {
                return "circle" === this.element.nodeName && ("x" === t ? t = "cx" : "y" === t && (t = "cy")), this._defaultGetter(t)
            },
            _defaultGetter: function(t) {
                return t = $(this[t], this.element ? this.element.getAttribute(t) : null, 0), /^[\-0-9\.]+$/.test(t) && (t = parseFloat(t)), t
            },
            dSetter: function(t, e, i) {
                t && t.join && (t = t.join(" ")), /(NaN| {2}|^$)/.test(t) && (t = "M 0 0"), i.setAttribute(e, t), this[e] = t
            },
            dashstyleSetter: function(t) {
                var e, i = this["stroke-width"];
                if ("inherit" === i && (i = 1), t = t && t.toLowerCase()) {
                    for (e = (t = t.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",")).length; e--;) t[e] = J(t[e]) * i;
                    t = t.join(",").replace(/NaN/g, "none"), this.element.setAttribute("stroke-dasharray", t)
                }
            },
            alignSetter: function(t) {
                this.element.setAttribute("text-anchor", {
                    left: "start",
                    center: "middle",
                    right: "end"
                } [t])
            },
            opacitySetter: function(t, e, i) {
                this[e] = t, i.setAttribute(e, t)
            },
            titleSetter: function(t) {
                var e = this.element.getElementsByTagName("title")[0];
                e || (e = B.createElementNS(this.SVG_NS, "title"), this.element.appendChild(e)), e.firstChild && e.removeChild(e.firstChild), e.appendChild(B.createTextNode(String($(t), "").replace(/<[^>]*>/g, "")))
            },
            textSetter: function(t) {
                t !== this.textStr && (delete this.bBox, this.textStr = t, this.added && this.renderer.buildText(this))
            },
            fillSetter: function(t, e, i) {
                "string" == typeof t ? i.setAttribute(e, t) : t && this.colorGradient(t, e, i)
            },
            visibilitySetter: function(t, e, i) {
                "inherit" === t ? i.removeAttribute(e) : i.setAttribute(e, t)
            },
            zIndexSetter: function(t, e) {
                var i, s, n, o = this.renderer,
                    r = this.parentGroup,
                    a = (r || o).element || o.box,
                    h = this.element;
                if (i = this.added, I(t) && (h.zIndex = t, t = +t, this[e] === t && (i = !1), this[e] = t), i) {
                    for ((t = this.zIndex) && r && (r.handleZ = !0), e = a.childNodes, n = 0; n < e.length && !s; n++) i = (r = e[n]).zIndex, r !== h && (J(i) > t || !I(t) && I(i) || 0 > t && !I(i) && a !== o.box) && (a.insertBefore(h, r), s = !0);
                    s || a.appendChild(h)
                }
                return s
            },
            _defaultSetter: function(t, e, i) {
                i.setAttribute(e, t)
            }
        }), w.prototype.yGetter = w.prototype.xGetter, w.prototype.translateXSetter = w.prototype.translateYSetter = w.prototype.rotationSetter = w.prototype.verticalAlignSetter = w.prototype.scaleXSetter = w.prototype.scaleYSetter = function(t, e) {
            this[e] = t, this.doTransform = !0
        }, w.prototype["stroke-widthSetter"] = w.prototype.strokeSetter = function(t, e, i) {
            this[e] = t, this.stroke && this["stroke-width"] ? (w.prototype.fillSetter.call(this, this.stroke, "stroke", i), i.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === e && 0 === t && this.hasStroke && (i.removeAttribute("stroke"), this.hasStroke = !1)
        }, S = M.SVGRenderer = function() {
            this.init.apply(this, arguments)
        }, G(S.prototype, {
            Element: w,
            SVG_NS: it,
            init: function(t, e, i, s, n, o) {
                var r, a;
                r = (s = this.createElement("svg").attr({
                    version: "1.1",
                    class: "highcharts-root"
                }).css(this.getStyle(s))).element, t.appendChild(r), -1 === t.innerHTML.indexOf("xmlns") && P(r, "xmlns", this.SVG_NS), this.isSVG = !0, this.box = r, this.boxWrapper = s, this.alignedObjects = [], this.url = (F || _) && B.getElementsByTagName("base").length ? nt.location.href.replace(/#.*?$/, "").replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "", this.createElement("desc").add().element.appendChild(B.createTextNode("Created with Highstock 5.0.12")), this.defs = this.createElement("defs").add(), this.allowHTML = o, this.forExport = n, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), F && t.getBoundingClientRect && ((e = function() {
                    O(t, {
                        left: 0,
                        top: 0
                    }), a = t.getBoundingClientRect(), O(t, {
                        left: Math.ceil(a.left) - a.left + "px",
                        top: Math.ceil(a.top) - a.top + "px"
                    })
                })(), this.unSubPixelFix = A(nt, "resize", e))
            },
            getStyle: function(t) {
                return this.style = G({
                    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px"
                }, t)
            },
            setStyle: function(t) {
                this.boxWrapper.css(this.getStyle(t))
            },
            isHidden: function() {
                return !this.boxWrapper.getBBox().width
            },
            destroy: function() {
                var t = this.defs;
                return this.box = null, this.boxWrapper = this.boxWrapper.destroy(), E(this.gradients || {}), this.gradients = null, t && (this.defs = t.destroy()), this.unSubPixelFix && this.unSubPixelFix(), this.alignedObjects = null
            },
            createElement: function(t) {
                var e = new this.Element;
                return e.init(this, t), e
            },
            draw: Z,
            getRadialAttr: function(t, e) {
                return {
                    cx: t[0] - t[2] / 2 + e.cx * t[2],
                    cy: t[1] - t[2] / 2 + e.cy * t[2],
                    r: e.r * t[2]
                }
            },
            getSpanWidth: function(t, e) {
                var i = t.getBBox(!0).width;
                return !et && this.forExport && (i = this.measureSpanWidth(e.firstChild.data, t.styles)), i
            },
            applyEllipsis: function(t, e, i, s) {
                var n, o = (r = this.getSpanWidth(t, e)) > s,
                    r = i,
                    a = 0,
                    h = i.length,
                    l = function(t) {
                        e.removeChild(e.firstChild), t && e.appendChild(B.createTextNode(t))
                    };
                if (o) {
                    for (; a <= h;) n = Math.ceil((a + h) / 2), l(r = i.substring(0, n) + "…"), r = this.getSpanWidth(t, e), a === h ? a = h + 1 : r > s ? h = n - 1 : a = n;
                    0 === h && l("")
                }
                return o
            },
            buildText: function(t) {
                var e, i, s, n, o, r, a = t.element,
                    h = this,
                    l = h.forExport,
                    c = $(t.textStr, "").toString(),
                    d = -1 !== c.indexOf("<"),
                    p = a.childNodes,
                    u = P(a, "x"),
                    f = t.styles,
                    g = t.textWidth,
                    m = f && f.lineHeight,
                    x = f && f.textOutline,
                    v = f && "ellipsis" === f.textOverflow,
                    y = f && "nowrap" === f.whiteSpace,
                    b = f && f.fontSize,
                    k = p.length,
                    M = (f = g && !t.added && this.box, function(t) {
                        var e;
                        return e = /(px|em)$/.test(t && t.style.fontSize) ? t.style.fontSize : b || h.style.fontSize || 12, m ? J(m) : h.fontMetrics(e, t.getAttribute("style") ? t : a).h
                    });
                if ((o = [c, v, y, m, x, b, g].join()) !== t.textCache) {
                    for (t.textCache = o; k--;) a.removeChild(p[k]);
                    d || x || v || g || -1 !== c.indexOf(" ") ? (e = /<.*class="([^"]+)".*>/, i = /<.*style="([^"]+)".*>/, s = /<.*href="([^"]+)".*>/, f && f.appendChild(a), c = d ? c.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [c], c = H(c, function(t) {
                        return "" !== t
                    }), R(c, function(o, c) {
                        var d, p = 0;
                        o = o.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"), d = o.split("|||"), R(d, function(o) {
                            if ("" !== o || 1 === d.length) {
                                var f, m, x = {},
                                    b = B.createElementNS(h.SVG_NS, "tspan");
                                if (e.test(o) && (f = o.match(e)[1], P(b, "class", f)), i.test(o) && (m = o.match(i)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), P(b, "style", m)), s.test(o) && !l && (P(b, "onclick", 'location.href="' + o.match(s)[1] + '"'), O(b, {
                                        cursor: "pointer"
                                    })), " " !== (o = (o.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">"))) {
                                    if (b.appendChild(B.createTextNode(o)), p ? x.dx = 0 : c && null !== u && (x.x = u), P(b, x), a.appendChild(b), !p && r && (!et && l && O(b, {
                                            display: "block"
                                        }), P(b, "dy", M(b))), g) {
                                        x = o.replace(/([^\^])-/g, "$1- ").split(" "), f = 1 < d.length || c || 1 < x.length && !y;
                                        var k, w = [],
                                            S = M(b),
                                            A = t.rotation;
                                        for (v && (n = h.applyEllipsis(t, b, o, g)); !v && f && (x.length || w.length);) t.rotation = 0, o = (k = h.getSpanWidth(t, b)) > g, void 0 === n && (n = o), o && 1 !== x.length ? (b.removeChild(b.firstChild), w.unshift(x.pop())) : (x = w, w = [], x.length && !y && (b = B.createElementNS(it, "tspan"), P(b, {
                                            dy: S,
                                            x: u
                                        }), m && P(b, "style", m), a.appendChild(b)), k > g && (g = k)), x.length && b.appendChild(B.createTextNode(x.join(" ").replace(/- /g, "-")));
                                        t.rotation = A
                                    }
                                    p++
                                }
                            }
                        }), r = r || a.childNodes.length
                    }), n && t.attr("title", t.textStr), f && f.removeChild(a), x && t.applyTextOutline && t.applyTextOutline(x)) : a.appendChild(B.createTextNode(c.replace(/&lt;/g, "<").replace(/&gt;/g, ">")))
                }
            },
            getContrast: function(t) {
                return 510 < (t = L(t).rgba)[0] + t[1] + t[2] ? "#000000" : "#FFFFFF"
            },
            button: function(t, e, i, s, n, o, r, a, h) {
                var l, c, d, p, u = this.label(t, e, i, h, null, null, null, null, "button"),
                    f = 0;
                return u.attr(K({
                    padding: 8,
                    r: 2
                }, n)), n = K({
                    fill: "#f7f7f7",
                    stroke: "#cccccc",
                    "stroke-width": 1,
                    style: {
                        color: "#333333",
                        cursor: "pointer",
                        fontWeight: "normal"
                    }
                }, n), l = n.style, delete n.style, o = K(n, {
                    fill: "#e6e6e6"
                }, o), c = o.style, delete o.style, r = K(n, {
                    fill: "#e6ebf5",
                    style: {
                        color: "#000000",
                        fontWeight: "bold"
                    }
                }, r), d = r.style, delete r.style, a = K(n, {
                    style: {
                        color: "#cccccc"
                    }
                }, a), p = a.style, delete a.style, A(u.element, V ? "mouseover" : "mouseenter", function() {
                    3 !== f && u.setState(1)
                }), A(u.element, V ? "mouseout" : "mouseleave", function() {
                    3 !== f && u.setState(f)
                }), u.setState = function(t) {
                    1 !== t && (u.state = f = t), u.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][t || 0]), u.attr([n, o, r, a][t || 0]).css([l, c, d, p][t || 0])
                }, u.attr(n).css(G({
                    cursor: "default"
                }, l)), u.on("click", function(t) {
                    3 !== f && s.call(u, t)
                })
            },
            crispLine: function(t, e) {
                return t[1] === t[4] && (t[1] = t[4] = Math.round(t[1]) - e % 2 / 2), t[2] === t[5] && (t[2] = t[5] = Math.round(t[2]) + e % 2 / 2), t
            },
            path: function(t) {
                var e = {
                    fill: "none"
                };
                return Y(t) ? e.d = t : j(t) && G(e, t), this.createElement("path").attr(e)
            },
            circle: function(t, e, i) {
                return t = j(t) ? t : {
                    x: t,
                    y: e,
                    r: i
                }, (e = this.createElement("circle")).xSetter = e.ySetter = function(t, e, i) {
                    i.setAttribute("c" + e, t)
                }, e.attr(t)
            },
            arc: function(t, e, i, s, n, o) {
                return j(t) ? (e = (s = t).y, i = s.r, t = s.x) : s = {
                    innerR: s,
                    start: n,
                    end: o
                }, (t = this.symbol("arc", t, e, i, i, s)).r = i, t
            },
            rect: function(t, e, i, s, n, o) {
                n = j(t) ? t.r : n;
                var r = this.createElement("rect");
                return t = j(t) ? t : void 0 === t ? {} : {
                    x: t,
                    y: e,
                    width: Math.max(i, 0),
                    height: Math.max(s, 0)
                }, void 0 !== o && (t.strokeWidth = o, t = r.crisp(t)), t.fill = "none", n && (t.r = n), r.rSetter = function(t, e, i) {
                    P(i, {
                        rx: t,
                        ry: t
                    })
                }, r.attr(t)
            },
            setSize: function(t, e, i) {
                var s = this.alignedObjects,
                    n = s.length;
                for (this.width = t, this.height = e, this.boxWrapper.animate({
                        width: t,
                        height: e
                    }, {
                        step: function() {
                            this.attr({
                                viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                            })
                        },
                        duration: $(i, !0) ? void 0 : 0
                    }); n--;) s[n].align()
            },
            g: function(t) {
                var e = this.createElement("g");
                return t ? e.attr({
                    class: "highcharts-" + t
                }) : e
            },
            image: function(t, e, i, s, n) {
                var o = {
                    preserveAspectRatio: "none"
                };
                return 1 < arguments.length && G(o, {
                    x: e,
                    y: i,
                    width: s,
                    height: n
                }), (o = this.createElement("image").attr(o)).element.setAttributeNS ? o.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", t) : o.element.setAttribute("hc-svg-href", t), o
            },
            symbol: function(t, e, i, s, n, o) {
                var r, a, h, l = this,
                    c = /^url\((.*?)\)$/,
                    d = c.test(t),
                    p = !d && (this.symbols[t] ? t : "circle"),
                    u = p && this.symbols[p],
                    f = I(e) && u && u.call(this.symbols, Math.round(e), Math.round(i), s, n, o);
                return u ? ((r = this.path(f)).attr("fill", "none"), G(r, {
                    symbolName: p,
                    x: e,
                    y: i,
                    width: s,
                    height: n
                }), o && G(r, o)) : d && (a = t.match(c)[1], (r = this.image(a)).imgwidth = $(st[a] && st[a].width, o && o.width), r.imgheight = $(st[a] && st[a].height, o && o.height), h = function() {
                    r.attr({
                        width: r.width,
                        height: r.height
                    })
                }, R(["width", "height"], function(t) {
                    r[t + "Setter"] = function(t, e) {
                        var i = {},
                            s = this["img" + e],
                            n = "width" === e ? "translateX" : "translateY";
                        this[e] = t, I(s) && (this.element && this.element.setAttribute(e, s), this.alignByTranslate || (i[n] = ((this[e] || 0) - s) / 2, this.attr(i)))
                    }
                }), I(e) && r.attr({
                    x: e,
                    y: i
                }), r.isImg = !0, I(r.imgwidth) && I(r.imgheight) ? h() : (r.attr({
                    width: 0,
                    height: 0
                }), D("img", {
                    onload: function() {
                        var t = C[l.chartIndex];
                        0 === this.width && (O(this, {
                            position: "absolute",
                            top: "-999em"
                        }), B.body.appendChild(this)), st[a] = {
                            width: this.width,
                            height: this.height
                        }, r.imgwidth = this.width, r.imgheight = this.height, r.element && h(), this.parentNode && this.parentNode.removeChild(this), l.imgCount--, !l.imgCount && t && t.onload && t.onload()
                    },
                    src: a
                }), this.imgCount++)), r
            },
            symbols: {
                circle: function(t, e, i, s) {
                    return this.arc(t + i / 2, e + s / 2, i / 2, s / 2, {
                        start: 0,
                        end: 2 * Math.PI,
                        open: !1
                    })
                },
                square: function(t, e, i, s) {
                    return ["M", t, e, "L", t + i, e, t + i, e + s, t, e + s, "Z"]
                },
                triangle: function(t, e, i, s) {
                    return ["M", t + i / 2, e, "L", t + i, e + s, t, e + s, "Z"]
                },
                "triangle-down": function(t, e, i, s) {
                    return ["M", t, e, "L", t + i, e, t + i / 2, e + s, "Z"]
                },
                diamond: function(t, e, i, s) {
                    return ["M", t + i / 2, e, "L", t + i, e + s / 2, t + i / 2, e + s, t, e + s / 2, "Z"]
                },
                arc: function(t, e, i, s, n) {
                    var o = n.start,
                        r = n.r || i,
                        a = n.r || s || i,
                        h = n.end - .001;
                    i = n.innerR, s = n.open;
                    var l = Math.cos(o),
                        c = Math.sin(o),
                        d = Math.cos(h);
                    return h = Math.sin(h), r = ["M", t + r * l, e + a * c, "A", r, a, 0, n = n.end - o < Math.PI ? 0 : 1, 1, t + r * d, e + a * h], I(i) && r.push(s ? "M" : "L", t + i * d, e + i * h, "A", i, i, 0, n, 0, t + i * l, e + i * c), r.push(s ? "" : "Z"), r
                },
                callout: function(t, e, i, s, n) {
                    var o, r = Math.min(n && n.r || 0, i, s),
                        a = r + 6,
                        h = n && n.anchorX;
                    return n = n && n.anchorY, o = ["M", t + r, e, "L", t + i - r, e, "C", t + i, e, t + i, e, t + i, e + r, "L", t + i, e + s - r, "C", t + i, e + s, t + i, e + s, t + i - r, e + s, "L", t + r, e + s, "C", t, e + s, t, e + s, t, e + s - r, "L", t, e + r, "C", t, e, t, e, t + r, e], h && h > i ? n > e + a && n < e + s - a ? o.splice(13, 3, "L", t + i, n - 6, t + i + 6, n, t + i, n + 6, t + i, e + s - r) : o.splice(13, 3, "L", t + i, s / 2, h, n, t + i, s / 2, t + i, e + s - r) : h && 0 > h ? n > e + a && n < e + s - a ? o.splice(33, 3, "L", t, n + 6, t - 6, n, t, n - 6, t, e + r) : o.splice(33, 3, "L", t, s / 2, h, n, t, s / 2, t, e + r) : n && n > s && h > t + a && h < t + i - a ? o.splice(23, 3, "L", h + 6, e + s, h, e + s + 6, h - 6, e + s, t + r, e + s) : n && 0 > n && h > t + a && h < t + i - a && o.splice(3, 3, "L", h - 6, e, h, e - 6, h + 6, e, i - r, e), o
                }
            },
            clipRect: function(t, e, i, s) {
                var n = M.uniqueKey(),
                    o = this.createElement("clipPath").attr({
                        id: n
                    }).add(this.defs);
                return (t = this.rect(t, e, i, s, 0).add(o)).id = n, t.clipPath = o, t.count = 0, t
            },
            text: function(t, e, i, s) {
                var n = !et && this.forExport,
                    o = {};
                return !s || !this.allowHTML && this.forExport ? (o.x = Math.round(e || 0), i && (o.y = Math.round(i)), (t || 0 === t) && (o.text = t), t = this.createElement("text").attr(o), n && t.css({
                    position: "absolute"
                }), s || (t.xSetter = function(t, e, i) {
                    var s, n, o = i.getElementsByTagName("tspan"),
                        r = i.getAttribute(e);
                    for (n = 0; n < o.length; n++)(s = o[n]).getAttribute(e) === r && s.setAttribute(e, t);
                    i.setAttribute(e, t)
                }), t) : this.html(t, e, i)
            },
            fontMetrics: function(t, e) {
                return t = t || e && e.style && e.style.fontSize || this.style && this.style.fontSize, {
                    h: e = 24 > (t = /px/.test(t) ? J(t) : /em/.test(t) ? parseFloat(t) * (e ? this.fontMetrics(null, e.parentNode).f : 16) : 12) ? t + 3 : Math.round(1.2 * t),
                    b: Math.round(.8 * e),
                    f: t
                }
            },
            rotCorr: function(t, e, i) {
                var s = t;
                return e && i && (s = Math.max(s * Math.cos(e * z), 4)), {
                    x: -t / 3 * Math.sin(e * z),
                    y: s
                }
            },
            label: function(t, e, i, s, n, o, r, a, h) {
                var l, c, d, p, u, f, g, m, x, v, y, b, k, S = this,
                    A = S.g("button" !== h && "label"),
                    T = A.text = S.text("", 0, 0, r).attr({
                        zIndex: 1
                    }),
                    P = 0,
                    C = 3,
                    L = 0,
                    O = {},
                    D = /^url\((.*?)\)$/.test(s),
                    z = D;
                h && A.addClass("highcharts-" + h), z = D, v = function() {
                    return (m || 0) % 2 / 2
                }, y = function() {
                    var t = T.element.style,
                        e = {};
                    c = (void 0 === d || void 0 === p || g) && I(T.textStr) && T.getBBox(), A.width = (d || c.width || 0) + 2 * C + L, A.height = (p || c.height || 0) + 2 * C, x = C + S.fontMetrics(t && t.fontSize, T).b, z && (l || (A.box = l = S.symbols[s] || D ? S.symbol(s) : S.rect(), l.addClass(("button" === h ? "" : "highcharts-label-box") + (h ? " highcharts-" + h + "-box" : "")), l.add(A), t = v(), e.x = t, e.y = (a ? -x : 0) + t), e.width = Math.round(A.width), e.height = Math.round(A.height), l.attr(G(e, O)), O = {})
                }, b = function() {
                    var t, e = L + C;
                    t = a ? 0 : x, I(d) && c && ("center" === g || "right" === g) && (e += {
                        center: .5,
                        right: 1
                    } [g] * (d - c.width)), e === T.x && t === T.y || (T.attr("x", e), void 0 !== t && T.attr("y", t)), T.x = e, T.y = t
                }, k = function(t, e) {
                    l ? l.attr(t, e) : O[t] = e
                }, A.onAdd = function() {
                    T.add(A), A.attr({
                        text: t || 0 === t ? t : "",
                        x: e,
                        y: i
                    }), l && I(n) && A.attr({
                        anchorX: n,
                        anchorY: o
                    })
                }, A.widthSetter = function(t) {
                    d = M.isNumber(t) ? t : null
                }, A.heightSetter = function(t) {
                    p = t
                }, A["text-alignSetter"] = function(t) {
                    g = t
                }, A.paddingSetter = function(t) {
                    I(t) && t !== C && (C = A.padding = t, b())
                }, A.paddingLeftSetter = function(t) {
                    I(t) && t !== L && (L = t, b())
                }, A.alignSetter = function(t) {
                    (t = {
                        left: 0,
                        center: .5,
                        right: 1
                    } [t]) !== P && (P = t, c && A.attr({
                        x: u
                    }))
                }, A.textSetter = function(t) {
                    void 0 !== t && T.textSetter(t), y(), b()
                }, A["stroke-widthSetter"] = function(t, e) {
                    t && (z = !0), m = this["stroke-width"] = t, k(e, t)
                }, A.strokeSetter = A.fillSetter = A.rSetter = function(t, e) {
                    "fill" === e && t && (z = !0), k(e, t)
                }, A.anchorXSetter = function(t, e) {
                    n = A.anchorX = t, k(e, Math.round(t) - v() - u)
                }, A.anchorYSetter = function(t, e) {
                    o = A.anchorY = t, k(e, t - f)
                }, A.xSetter = function(t) {
                    A.x = t, P && (t -= P * ((d || c.width) + 2 * C)), u = Math.round(t), A.attr("translateX", u)
                }, A.ySetter = function(t) {
                    f = A.y = Math.round(t), A.attr("translateY", f)
                };
                var E = A.css;
                return G(A, {
                    css: function(t) {
                        if (t) {
                            var e = {};
                            t = K(t), R(A.textProps, function(i) {
                                void 0 !== t[i] && (e[i] = t[i], delete t[i])
                            }), T.css(e)
                        }
                        return E.call(A, t)
                    },
                    getBBox: function() {
                        return {
                            width: c.width + 2 * C,
                            height: c.height + 2 * C,
                            x: c.x - C,
                            y: c.y - C
                        }
                    },
                    shadow: function(t) {
                        return t && (y(), l && l.shadow(t)), A
                    },
                    destroy: function() {
                        Q(A.element, "mouseenter"), Q(A.element, "mouseleave"), T && (T = T.destroy()), l && (l = l.destroy()), w.prototype.destroy.call(A), A = S = y = b = k = null
                    }
                })
            }
        }), M.Renderer = S, rt = (ot = t).attr, at = ot.createElement, ht = ot.css, lt = ot.defined, ct = ot.each, dt = ot.extend, pt = ot.isFirefox, ut = ot.isMS, ft = ot.isWebKit, gt = ot.pInt, mt = ot.SVGRenderer, xt = ot.win, vt = ot.wrap, dt(ot.SVGElement.prototype, {
            htmlCss: function(t) {
                var e = this.element;
                return (e = t && "SPAN" === e.tagName && t.width) && (delete t.width, this.textWidth = e, this.updateTransform()), t && "ellipsis" === t.textOverflow && (t.whiteSpace = "nowrap", t.overflow = "hidden"), this.styles = dt(this.styles, t), ht(this.element, t), this
            },
            htmlGetBBox: function() {
                var t = this.element;
                return "text" === t.nodeName && (t.style.position = "absolute"), {
                    x: t.offsetLeft,
                    y: t.offsetTop,
                    width: t.offsetWidth,
                    height: t.offsetHeight
                }
            },
            htmlUpdateTransform: function() {
                if (this.added) {
                    var t = this.renderer,
                        e = this.element,
                        i = this.translateX || 0,
                        s = this.translateY || 0,
                        n = this.x || 0,
                        o = this.y || 0,
                        r = this.textAlign || "left",
                        a = {
                            left: 0,
                            center: .5,
                            right: 1
                        } [r],
                        h = this.styles;
                    if (ht(e, {
                            marginLeft: i,
                            marginTop: s
                        }), this.shadows && ct(this.shadows, function(t) {
                            ht(t, {
                                marginLeft: i + 1,
                                marginTop: s + 1
                            })
                        }), this.inverted && ct(e.childNodes, function(i) {
                            t.invertChild(i, e)
                        }), "SPAN" === e.tagName) {
                        var l = this.rotation,
                            c = gt(this.textWidth),
                            d = h && h.whiteSpace,
                            p = [l, r, e.innerHTML, this.textWidth, this.textAlign].join();
                        p !== this.cTT && (h = t.fontMetrics(e.style.fontSize).b, lt(l) && this.setSpanRotation(l, a, h), ht(e, {
                            width: "",
                            whiteSpace: d || "nowrap"
                        }), e.offsetWidth > c && /[ \-]/.test(e.textContent || e.innerText) && ht(e, {
                            width: c + "px",
                            display: "block",
                            whiteSpace: d || "normal"
                        }), this.getSpanCorrection(e.offsetWidth, h, a, l, r)), ht(e, {
                            left: n + (this.xCorr || 0) + "px",
                            top: o + (this.yCorr || 0) + "px"
                        }), ft && (h = e.offsetHeight), this.cTT = p
                    }
                } else this.alignOnAdd = !0
            },
            setSpanRotation: function(t, e, i) {
                var s = {},
                    n = ut ? "-ms-transform" : ft ? "-webkit-transform" : pt ? "MozTransform" : xt.opera ? "-o-transform" : "";
                s[n] = s.transform = "rotate(" + t + "deg)", s[n + (pt ? "Origin" : "-origin")] = s.transformOrigin = 100 * e + "% " + i + "px", ht(this.element, s)
            },
            getSpanCorrection: function(t, e, i) {
                this.xCorr = -t * i, this.yCorr = -e
            }
        }), dt(mt.prototype, {
            html: function(t, e, i) {
                var s = this.createElement("span"),
                    n = s.element,
                    o = s.renderer,
                    r = o.isSVG,
                    a = function(t, e) {
                        ct(["opacity", "visibility"], function(i) {
                            vt(t, i + "Setter", function(t, i, s, n) {
                                t.call(this, i, s, n), e[s] = i
                            })
                        })
                    };
                return s.textSetter = function(t) {
                    t !== n.innerHTML && delete this.bBox, n.innerHTML = this.textStr = t, s.htmlUpdateTransform()
                }, r && a(s, s.element.style), s.xSetter = s.ySetter = s.alignSetter = s.rotationSetter = function(t, e) {
                    "align" === e && (e = "textAlign"), s[e] = t, s.htmlUpdateTransform()
                }, s.attr({
                    text: t,
                    x: Math.round(e),
                    y: Math.round(i)
                }).css({
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize,
                    position: "absolute"
                }), n.style.whiteSpace = "nowrap", s.css = s.htmlCss, r && (s.add = function(t) {
                    var e, i = o.box.parentNode,
                        r = [];
                    if (this.parentGroup = t) {
                        if (!(e = t.div)) {
                            for (; t;) r.push(t), t = t.parentGroup;
                            ct(r.reverse(), function(t) {
                                var n, o = rt(t.element, "class");
                                o && (o = {
                                    className: o
                                }), e = t.div = t.div || at("div", o, {
                                    position: "absolute",
                                    left: (t.translateX || 0) + "px",
                                    top: (t.translateY || 0) + "px",
                                    display: t.display,
                                    opacity: t.opacity,
                                    pointerEvents: t.styles && t.styles.pointerEvents
                                }, e || i), n = e.style, dt(t, {
                                    on: function() {
                                        return s.on.apply({
                                            element: r[0].div
                                        }, arguments), t
                                    },
                                    translateXSetter: function(e, i) {
                                        n.left = e + "px", t[i] = e, t.doTransform = !0
                                    },
                                    translateYSetter: function(e, i) {
                                        n.top = e + "px", t[i] = e, t.doTransform = !0
                                    }
                                }), a(t, n)
                            })
                        }
                    } else e = i;
                    return e.appendChild(n), s.added = !0, s.alignOnAdd && s.htmlUpdateTransform(), s
                }), s
            }
        }),
        function(t) {
            var e, i, s = t.createElement,
                n = t.css,
                o = t.defined,
                r = t.deg2rad,
                a = t.discardElement,
                h = t.doc,
                l = t.each,
                c = t.erase,
                d = t.extend;
            e = t.extendClass;
            var p = t.isArray,
                u = t.isNumber,
                f = t.isObject,
                g = t.merge;
            i = t.noop;
            var m = t.pick,
                x = t.pInt,
                v = t.SVGElement,
                y = t.SVGRenderer,
                b = t.win;
            t.svg || ((i = {
                docMode8: h && 8 === h.documentMode,
                init: function(t, e) {
                    var i = ["<", e, ' filled="f" stroked="f"'],
                        n = ["position: ", "absolute", ";"],
                        o = "div" === e;
                    ("shape" === e || o) && n.push("left:0;top:0;width:1px;height:1px;"), n.push("visibility: ", o ? "hidden" : "visible"), i.push(' style="', n.join(""), '"/>'), e && (i = o || "span" === e || "img" === e ? i.join("") : t.prepVML(i), this.element = s(i)), this.renderer = t
                },
                add: function(t) {
                    var e = this.renderer,
                        i = this.element,
                        s = e.box,
                        n = t && t.inverted;
                    s = t ? t.element || t : s;
                    return t && (this.parentGroup = t), n && e.invertChild(i, s), s.appendChild(i), this.added = !0, this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform(), this.onAdd && this.onAdd(), this.className && this.attr("class", this.className), this
                },
                updateTransform: v.prototype.htmlUpdateTransform,
                setSpanRotation: function() {
                    var t = this.rotation,
                        e = Math.cos(t * r),
                        i = Math.sin(t * r);
                    n(this.element, {
                        filter: t ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", e, ", M12=", -i, ", M21=", i, ", M22=", e, ", sizingMethod='auto expand')"].join("") : "none"
                    })
                },
                getSpanCorrection: function(t, e, i, s, o) {
                    var a, h = s ? Math.cos(s * r) : 1,
                        l = s ? Math.sin(s * r) : 0,
                        c = m(this.elemHeight, this.element.offsetHeight);
                    this.xCorr = 0 > h && -t, this.yCorr = 0 > l && -c, a = 0 > h * l, this.xCorr += l * e * (a ? 1 - i : i), this.yCorr -= h * e * (s ? a ? i : 1 - i : 1), o && "left" !== o && (this.xCorr -= t * i * (0 > h ? -1 : 1), s && (this.yCorr -= c * i * (0 > l ? -1 : 1)), n(this.element, {
                        textAlign: o
                    }))
                },
                pathToVML: function(t) {
                    for (var e = t.length, i = []; e--;) u(t[e]) ? i[e] = Math.round(10 * t[e]) - 5 : "Z" === t[e] ? i[e] = "x" : (i[e] = t[e], !t.isArc || "wa" !== t[e] && "at" !== t[e] || (i[e + 5] === i[e + 7] && (i[e + 7] += t[e + 7] > t[e + 5] ? 1 : -1), i[e + 6] === i[e + 8] && (i[e + 8] += t[e + 8] > t[e + 6] ? 1 : -1)));
                    return i.join(" ") || "x"
                },
                clip: function(t) {
                    var e, i = this;
                    return t ? (e = t.members, c(e, i), e.push(i), i.destroyClip = function() {
                        c(e, i)
                    }, t = t.getCSS(i)) : (i.destroyClip && i.destroyClip(), t = {
                        clip: i.docMode8 ? "inherit" : "rect(auto)"
                    }), i.css(t)
                },
                css: v.prototype.htmlCss,
                safeRemoveChild: function(t) {
                    t.parentNode && a(t)
                },
                destroy: function() {
                    return this.destroyClip && this.destroyClip(), v.prototype.destroy.apply(this)
                },
                on: function(t, e) {
                    return this.element["on" + t] = function() {
                        var t = b.event;
                        t.target = t.srcElement, e(t)
                    }, this
                },
                cutOffPath: function(t, e) {
                    var i;
                    return 9 !== (i = (t = t.split(/[ ,]/)).length) && 11 !== i || (t[i - 4] = t[i - 2] = x(t[i - 2]) - 10 * e), t.join(" ")
                },
                shadow: function(t, e, i) {
                    var n, o, r, a, h, l, c, d = [],
                        p = this.element,
                        u = this.renderer,
                        f = p.style,
                        g = p.path;
                    if (g && "string" != typeof g.value && (g = "x"), h = g, t) {
                        for (l = m(t.width, 3), c = (t.opacity || .15) / l, n = 1; 3 >= n; n++) a = 2 * l + 1 - 2 * n, i && (h = this.cutOffPath(g.value, a + .5)), r = ['<shape isShadow="true" strokeweight="', a, '" filled="false" path="', h, '" coordsize="10 10" style="', p.style.cssText, '" />'], o = s(u.prepVML(r), null, {
                            left: x(f.left) + m(t.offsetX, 1),
                            top: x(f.top) + m(t.offsetY, 1)
                        }), i && (o.cutOff = a + 1), r = ['<stroke color="', t.color || "#000000", '" opacity="', c * n, '"/>'], s(u.prepVML(r), null, null, o), e ? e.element.appendChild(o) : p.parentNode.insertBefore(o, p), d.push(o);
                        this.shadows = d
                    }
                    return this
                },
                updateShadows: i,
                setAttr: function(t, e) {
                    this.docMode8 ? this.element[t] = e : this.element.setAttribute(t, e)
                },
                classSetter: function(t) {
                    (this.added ? this.element : this).className = t
                },
                dashstyleSetter: function(t, e, i) {
                    (i.getElementsByTagName("stroke")[0] || s(this.renderer.prepVML(["<stroke/>"]), null, null, i))[e] = t || "solid", this[e] = t
                },
                dSetter: function(t, e, i) {
                    var s = this.shadows;
                    if (t = t || [], this.d = t.join && t.join(" "), i.path = t = this.pathToVML(t), s)
                        for (i = s.length; i--;) s[i].path = s[i].cutOff ? this.cutOffPath(t, s[i].cutOff) : t;
                    this.setAttr(e, t)
                },
                fillSetter: function(t, e, i) {
                    var s = i.nodeName;
                    "SPAN" === s ? i.style.color = t : "IMG" !== s && (i.filled = "none" !== t, this.setAttr("fillcolor", this.renderer.color(t, i, e, this)))
                },
                "fill-opacitySetter": function(t, e, i) {
                    s(this.renderer.prepVML(["<", e.split("-")[0], ' opacity="', t, '"/>']), null, null, i)
                },
                opacitySetter: i,
                rotationSetter: function(t, e, i) {
                    i = i.style, this[e] = i[e] = t, i.left = -Math.round(Math.sin(t * r) + 1) + "px", i.top = Math.round(Math.cos(t * r)) + "px"
                },
                strokeSetter: function(t, e, i) {
                    this.setAttr("strokecolor", this.renderer.color(t, i, e, this))
                },
                "stroke-widthSetter": function(t, e, i) {
                    i.stroked = !!t, this[e] = t, u(t) && (t += "px"), this.setAttr("strokeweight", t)
                },
                titleSetter: function(t, e) {
                    this.setAttr(e, t)
                },
                visibilitySetter: function(t, e, i) {
                    "inherit" === t && (t = "visible"), this.shadows && l(this.shadows, function(i) {
                        i.style[e] = t
                    }), "DIV" === i.nodeName && (t = "hidden" === t ? "-999em" : 0, this.docMode8 || (i.style[e] = t ? "visible" : "hidden"), e = "top"), i.style[e] = t
                },
                xSetter: function(t, e, i) {
                    this[e] = t, "x" === e ? e = "left" : "y" === e && (e = "top"), this.updateClipping ? (this[e] = t, this.updateClipping()) : i.style[e] = t
                },
                zIndexSetter: function(t, e, i) {
                    i.style[e] = t
                }
            })["stroke-opacitySetter"] = i["fill-opacitySetter"], t.VMLElement = i = e(v, i), i.prototype.ySetter = i.prototype.widthSetter = i.prototype.heightSetter = i.prototype.xSetter, i = {
                Element: i,
                isIE8: -1 < b.navigator.userAgent.indexOf("MSIE 8.0"),
                init: function(t, e, i) {
                    var s, n;
                    if (this.alignedObjects = [], n = (s = this.createElement("div").css({
                            position: "relative"
                        })).element, t.appendChild(s.element), this.isVML = !0, this.box = n, this.boxWrapper = s, this.gradients = {}, this.cache = {}, this.cacheKeys = [], this.imgCount = 0, this.setSize(e, i, !1), !h.namespaces.hcv) {
                        h.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                        try {
                            h.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                        } catch (t) {
                            h.styleSheets[0].cssText += "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                        }
                    }
                },
                isHidden: function() {
                    return !this.box.offsetWidth
                },
                clipRect: function(t, e, i, s) {
                    var n = this.createElement(),
                        o = f(t);
                    return d(n, {
                        members: [],
                        count: 0,
                        left: (o ? t.x : t) + 1,
                        top: (o ? t.y : e) + 1,
                        width: (o ? t.width : i) - 1,
                        height: (o ? t.height : s) - 1,
                        getCSS: function(t) {
                            var e = (o = t.element).nodeName,
                                i = t.inverted,
                                s = this.top - ("shape" === e ? o.offsetTop : 0),
                                n = this.left,
                                o = n + this.width,
                                r = s + this.height;
                            s = {
                                clip: "rect(" + Math.round(i ? n : s) + "px," + Math.round(i ? r : o) + "px," + Math.round(i ? o : r) + "px," + Math.round(i ? s : n) + "px)"
                            };
                            return !i && t.docMode8 && "DIV" === e && d(s, {
                                width: o + "px",
                                height: r + "px"
                            }), s
                        },
                        updateClipping: function() {
                            l(n.members, function(t) {
                                t.element && t.css(n.getCSS(t))
                            })
                        }
                    })
                },
                color: function(e, i, n, o) {
                    var r, a, h, c = this,
                        d = /^rgba/,
                        p = "none";
                    if (e && e.linearGradient ? h = "gradient" : e && e.radialGradient && (h = "pattern"), h) {
                        var u, f, g, m, x, v, y, b = e.linearGradient || e.radialGradient,
                            k = "";
                        e = e.stops;
                        var M, w = [],
                            S = function() {
                                a = ['<fill colors="' + w.join(",") + '" opacity="', x, '" o:opacity2="', m, '" type="', h, '" ', k, 'focus="100%" method="any" />'], s(c.prepVML(a), null, null, i)
                            };
                        if (g = e[0], M = e[e.length - 1], 0 < g[0] && e.unshift([0, g[1]]), 1 > M[0] && e.push([1, M[1]]), l(e, function(e, i) {
                                d.test(e[1]) ? (r = t.color(e[1]), u = r.get("rgb"), f = r.get("a")) : (u = e[1], f = 1), w.push(100 * e[0] + "% " + u), i ? (x = f, v = u) : (m = f, y = u)
                            }), "fill" === n)
                            if ("gradient" === h) n = b.x1 || b[0] || 0, e = b.y1 || b[1] || 0, g = b.x2 || b[2] || 0, b = b.y2 || b[3] || 0, k = 'angle="' + (90 - 180 * Math.atan((b - e) / (g - n)) / Math.PI) + '"', S();
                            else {
                                var A, T = 2 * (p = b.r),
                                    P = 2 * p,
                                    C = b.cx,
                                    L = b.cy,
                                    O = i.radialReference;
                                p = function() {
                                    O && (A = o.getBBox(), C += (O[0] - A.x) / A.width - .5, L += (O[1] - A.y) / A.height - .5, T *= O[2] / A.width, P *= O[2] / A.height), k = 'src="' + t.getOptions().global.VMLRadialGradientURL + '" size="' + T + "," + P + '" origin="0.5,0.5" position="' + C + "," + L + '" color2="' + y + '" ', S()
                                };
                                o.added ? p() : o.onAdd = p, p = v
                            }
                        else p = u
                    } else d.test(e) && "IMG" !== i.tagName ? (r = t.color(e), o[n + "-opacitySetter"](r.get("a"), n, i), p = r.get("rgb")) : ((p = i.getElementsByTagName(n)).length && (p[0].opacity = 1, p[0].type = "solid"), p = e);
                    return p
                },
                prepVML: function(t) {
                    var e = this.isIE8;
                    return t = t.join(""), e ? t = -1 === (t = t.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />')).indexOf('style="') ? t.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : t.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);') : t = t.replace("<", "<hcv:"), t
                },
                text: y.prototype.html,
                path: function(t) {
                    var e = {
                        coordsize: "10 10"
                    };
                    return p(t) ? e.d = t : f(t) && d(e, t), this.createElement("shape").attr(e)
                },
                circle: function(t, e, i) {
                    var s = this.symbol("circle");
                    return f(t) && (i = t.r, e = t.y, t = t.x), s.isCircle = !0, s.r = i, s.attr({
                        x: t,
                        y: e
                    })
                },
                g: function(t) {
                    var e;
                    return t && (e = {
                        className: "highcharts-" + t,
                        class: "highcharts-" + t
                    }), this.createElement("div").attr(e)
                },
                image: function(t, e, i, s, n) {
                    var o = this.createElement("img").attr({
                        src: t
                    });
                    return 1 < arguments.length && o.attr({
                        x: e,
                        y: i,
                        width: s,
                        height: n
                    }), o
                },
                createElement: function(t) {
                    return "rect" === t ? this.symbol(t) : y.prototype.createElement.call(this, t)
                },
                invertChild: function(t, e) {
                    var i = this;
                    e = e.style;
                    var s = "IMG" === t.tagName && t.style;
                    n(t, {
                        flip: "x",
                        left: x(e.width) - (s ? x(s.top) : 1),
                        top: x(e.height) - (s ? x(s.left) : 1),
                        rotation: -90
                    }), l(t.childNodes, function(e) {
                        i.invertChild(e, t)
                    })
                },
                symbols: {
                    arc: function(t, e, i, s, n) {
                        var o = n.start,
                            r = n.end,
                            a = n.r || i || s;
                        i = n.innerR, s = Math.cos(o);
                        var h = Math.sin(o),
                            l = Math.cos(r),
                            c = Math.sin(r);
                        return 0 == r - o ? ["x"] : (o = ["wa", t - a, e - a, t + a, e + a, t + a * s, e + a * h, t + a * l, e + a * c], n.open && !i && o.push("e", "M", t, e), o.push("at", t - i, e - i, t + i, e + i, t + i * l, e + i * c, t + i * s, e + i * h, "x", "e"), o.isArc = !0, o)
                    },
                    circle: function(t, e, i, s, n) {
                        return n && o(n.r) && (i = s = 2 * n.r), n && n.isCircle && (t -= i / 2, e -= s / 2), ["wa", t, e, t + i, e + s, t + i, e + s / 2, t + i, e + s / 2, "e"]
                    },
                    rect: function(t, e, i, s, n) {
                        return y.prototype.symbols[o(n) && n.r ? "callout" : "square"].call(0, t, e, i, s, n)
                    }
                }
            }, t.VMLRenderer = e = function() {
                this.init.apply(this, arguments)
            }, e.prototype = g(y.prototype, i), t.Renderer = e), y.prototype.measureSpanWidth = function(t, e) {
                var i = h.createElement("span");
                return t = h.createTextNode(t), i.appendChild(t), n(i, e), this.box.appendChild(i), e = i.offsetWidth, a(i), e
            }
        }(t),
        function(t) {
            function e() {
                var e, i = t.defaultOptions.global,
                    o = i.useUTC,
                    h = o ? "getUTC" : "get",
                    l = o ? "setUTC" : "set";
                t.Date = e = i.Date || a.Date, e.hcTimezoneOffset = o && i.timezoneOffset, e.hcGetTimezoneOffset = function() {
                    var e = t.defaultOptions.global,
                        i = a.moment;
                    if (e.timezone) {
                        if (i) return function(t) {
                            return -i.tz(t, e.timezone).utcOffset()
                        };
                        t.error(25)
                    }
                    return e.useUTC && e.getTimezoneOffset
                }(), e.hcMakeTime = function(t, i, s, a, h, l) {
                    var c;
                    return o ? (c = e.UTC.apply(0, arguments), c += n(c)) : c = new e(t, i, r(s, 1), r(a, 0), r(h, 0), r(l, 0)).getTime(), c
                }, s("Minutes Hours Day Date Month FullYear".split(" "), function(t) {
                    e["hcGet" + t] = h + t
                }), s("Milliseconds Seconds Minutes Hours Date Month FullYear".split(" "), function(t) {
                    e["hcSet" + t] = l + t
                })
            }
            var i = t.color,
                s = t.each,
                n = t.getTZOffset,
                o = t.merge,
                r = t.pick,
                a = t.win;
            t.defaultOptions = {
                colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
                symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
                lang: {
                    loading: "Loading...",
                    months: "January February March April May June July August September October November December".split(" "),
                    shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    decimalPoint: ".",
                    numericSymbols: "kMGTPE".split(""),
                    resetZoom: "Reset zoom",
                    resetZoomTitle: "Reset zoom level 1:1",
                    thousandsSep: " "
                },
                global: {
                    useUTC: !0,
                    VMLRadialGradientURL: "http://code.highcharts.com/5.0.12/gfx/vml-radial-gradient.png"
                },
                chart: {
                    borderRadius: 0,
                    defaultSeriesType: "line",
                    ignoreHiddenSeries: !0,
                    spacing: [10, 10, 15, 10],
                    resetZoomButton: {
                        theme: {
                            zIndex: 20
                        },
                        position: {
                            align: "right",
                            x: -10,
                            y: 10
                        }
                    },
                    width: null,
                    height: null,
                    borderColor: "#335cad",
                    backgroundColor: "#ffffff",
                    plotBorderColor: "#cccccc"
                },
                title: {
                    text: "Chart title",
                    align: "center",
                    margin: 15,
                    widthAdjust: -44
                },
                subtitle: {
                    text: "",
                    align: "center",
                    widthAdjust: -44
                },
                plotOptions: {},
                labels: {
                    style: {
                        position: "absolute",
                        color: "#333333"
                    }
                },
                legend: {
                    enabled: !0,
                    align: "center",
                    layout: "horizontal",
                    labelFormatter: function() {
                        return this.name
                    },
                    borderColor: "#999999",
                    borderRadius: 0,
                    navigation: {
                        activeColor: "#003399",
                        inactiveColor: "#cccccc"
                    },
                    itemStyle: {
                        color: "#333333",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textOverflow: "ellipsis"
                    },
                    itemHoverStyle: {
                        color: "#000000"
                    },
                    itemHiddenStyle: {
                        color: "#cccccc"
                    },
                    shadow: !1,
                    itemCheckboxStyle: {
                        position: "absolute",
                        width: "13px",
                        height: "13px"
                    },
                    squareSymbol: !0,
                    symbolPadding: 5,
                    verticalAlign: "bottom",
                    x: 0,
                    y: 0,
                    title: {
                        style: {
                            fontWeight: "bold"
                        }
                    }
                },
                loading: {
                    labelStyle: {
                        fontWeight: "bold",
                        position: "relative",
                        top: "45%"
                    },
                    style: {
                        position: "absolute",
                        backgroundColor: "#ffffff",
                        opacity: .5,
                        textAlign: "center"
                    }
                },
                tooltip: {
                    enabled: !0,
                    animation: t.svg,
                    borderRadius: 3,
                    dateTimeLabelFormats: {
                        millisecond: "%A, %b %e, %H:%M:%S.%L",
                        second: "%A, %b %e, %H:%M:%S",
                        minute: "%A, %b %e, %H:%M",
                        hour: "%A, %b %e, %H:%M",
                        day: "%A, %b %e, %Y",
                        week: "Week from %A, %b %e, %Y",
                        month: "%B %Y",
                        year: "%Y"
                    },
                    footerFormat: "",
                    padding: 8,
                    snap: t.isTouchDevice ? 25 : 10,
                    backgroundColor: i("#f7f7f7").setOpacity(.85).get(),
                    borderWidth: 1,
                    headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                    pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',
                    shadow: !0,
                    style: {
                        color: "#333333",
                        cursor: "default",
                        fontSize: "12px",
                        pointerEvents: "none",
                        whiteSpace: "nowrap"
                    }
                },
                credits: {
                    enabled: !0,
                    href: "http://www.highcharts.com",
                    position: {
                        align: "right",
                        x: -10,
                        verticalAlign: "bottom",
                        y: -5
                    },
                    style: {
                        cursor: "pointer",
                        color: "#999999",
                        fontSize: "9px"
                    },
                    text: "Highcharts.com"
                }
            }, t.setOptions = function(i) {
                return t.defaultOptions = o(!0, t.defaultOptions, i), e(), t.defaultOptions
            }, t.getOptions = function() {
                return t.defaultOptions
            }, t.defaultPlotOptions = t.defaultOptions.plotOptions, e()
        }(t), bt = (yt = t).correctFloat, kt = yt.defined, Mt = yt.destroyObjectProperties, wt = yt.isNumber, St = yt.merge, At = yt.pick, Tt = yt.deg2rad, yt.Tick = function(t, e, i, s) {
            this.axis = t, this.pos = e, this.type = i || "", this.isNewLabel = this.isNew = !0, i || s || this.addLabel()
        }, yt.Tick.prototype = {
            addLabel: function() {
                var t, e = this.axis,
                    i = e.options,
                    s = e.chart,
                    n = e.categories,
                    o = e.names,
                    r = this.pos,
                    a = i.labels,
                    h = r === (c = e.tickPositions)[0],
                    l = r === c[c.length - 1],
                    c = (o = n ? At(n[r], o[r], r) : r, n = this.label, c.info);
                e.isDatetimeAxis && c && (t = i.dateTimeLabelFormats[c.higherRanks[r] || c.unitName]), this.isFirst = h, this.isLast = l, i = e.labelFormatter.call({
                    axis: e,
                    chart: s,
                    isFirst: h,
                    isLast: l,
                    dateTimeLabelFormat: t,
                    value: e.isLog ? bt(e.lin2log(o)) : o
                }), kt(n) ? n && n.attr({
                    text: i
                }) : (this.labelLength = (this.label = n = kt(i) && a.enabled ? s.renderer.text(i, 0, 0, a.useHTML).css(St(a.style)).add(e.labelGroup) : null) && n.getBBox().width, this.rotation = 0)
            },
            getLabelSize: function() {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0
            },
            handleOverflow: function(t) {
                var e, i = this.axis,
                    s = t.x,
                    n = i.chart.chartWidth,
                    o = i.chart.spacing,
                    r = At(i.labelLeft, Math.min(i.pos, o[3])),
                    a = (o = At(i.labelRight, Math.max(i.pos + i.len, n - o[1])), this.label),
                    h = this.rotation,
                    l = {
                        left: 0,
                        center: .5,
                        right: 1
                    } [i.labelAlign],
                    c = a.getBBox().width,
                    d = i.getSlotWidth(),
                    p = d,
                    u = 1,
                    f = {};
                h ? 0 > h && s - l * c < r ? e = Math.round(s / Math.cos(h * Tt) - r) : 0 < h && s + l * c > o && (e = Math.round((n - s) / Math.cos(h * Tt))) : (n = s + (1 - l) * c, s - l * c < r ? p = t.x + p * (1 - l) - r : n > o && (p = o - t.x + p * l, u = -1), (p = Math.min(d, p)) < d && "center" === i.labelAlign && (t.x += u * (d - p - l * (d - Math.min(c, p)))), (c > p || i.autoRotation && (a.styles || {}).width) && (e = p)), e && (f.width = e, (i.options.labels.style || {}).textOverflow || (f.textOverflow = "ellipsis"), a.css(f))
            },
            getPosition: function(t, e, i, s) {
                var n = this.axis,
                    o = n.chart,
                    r = s && o.oldChartHeight || o.chartHeight;
                return {
                    x: t ? n.translate(e + i, null, null, s) + n.transB : n.left + n.offset + (n.opposite ? (s && o.oldChartWidth || o.chartWidth) - n.right - n.left : 0),
                    y: t ? r - n.bottom + n.offset - (n.opposite ? n.height : 0) : r - n.translate(e + i, null, null, s) - n.transB
                }
            },
            getLabelPosition: function(t, e, i, s, n, o, r, a) {
                var h = this.axis,
                    l = h.transA,
                    c = h.reversed,
                    d = h.staggerLines,
                    p = h.tickRotCorr || {
                        x: 0,
                        y: 0
                    },
                    u = n.y;
                return kt(u) || (u = 0 === h.side ? i.rotation ? -8 : -i.getBBox().height : 2 === h.side ? p.y + 8 : Math.cos(i.rotation * Tt) * (p.y - i.getBBox(!1, 0).height / 2)), t = t + n.x + p.x - (o && s ? o * l * (c ? -1 : 1) : 0), e = e + u - (o && !s ? o * l * (c ? 1 : -1) : 0), d && (i = r / (a || 1) % d, h.opposite && (i = d - i - 1), e += h.labelOffset / d * i), {
                    x: t,
                    y: Math.round(e)
                }
            },
            getMarkPath: function(t, e, i, s, n, o) {
                return o.crispLine(["M", t, e, "L", t + (n ? 0 : -i), e + (n ? i : 0)], s)
            },
            renderGridLine: function(t, e, i) {
                var s = this.axis,
                    n = s.options,
                    o = this.gridLine,
                    r = {},
                    a = this.pos,
                    h = this.type,
                    l = s.tickmarkOffset,
                    c = s.chart.renderer,
                    d = h ? h + "Grid" : "grid",
                    p = n[d + "LineWidth"],
                    u = n[d + "LineColor"];
                n = n[d + "LineDashStyle"], o || (r.stroke = u, r["stroke-width"] = p, n && (r.dashstyle = n), h || (r.zIndex = 1), t && (r.opacity = 0), this.gridLine = o = c.path().attr(r).addClass("highcharts-" + (h ? h + "-" : "") + "grid-line").add(s.gridGroup)), !t && o && (t = s.getPlotLinePath(a + l, o.strokeWidth() * i, t, !0)) && o[this.isNew ? "attr" : "animate"]({
                    d: t,
                    opacity: e
                })
            },
            renderMark: function(t, e, i) {
                var s = this.axis,
                    n = s.options,
                    o = s.chart.renderer,
                    r = this.type,
                    a = r ? r + "Tick" : "tick",
                    h = s.tickSize(a),
                    l = this.mark,
                    c = !l,
                    d = t.x;
                t = t.y;
                var p = At(n[a + "Width"], !r && s.isXAxis ? 1 : 0);
                n = n[a + "Color"], h && (s.opposite && (h[0] = -h[0]), c && (this.mark = l = o.path().addClass("highcharts-" + (r ? r + "-" : "") + "tick").add(s.axisGroup), l.attr({
                    stroke: n,
                    "stroke-width": p
                })), l[c ? "attr" : "animate"]({
                    d: this.getMarkPath(d, t, h[0], l.strokeWidth() * i, s.horiz, o),
                    opacity: e
                }))
            },
            renderLabel: function(t, e, i, s) {
                var n = this.axis,
                    o = n.horiz,
                    r = n.options,
                    a = this.label,
                    h = r.labels,
                    l = h.step,
                    c = n.tickmarkOffset,
                    d = !0,
                    p = t.x;
                t = t.y, a && wt(p) && (a.xy = t = this.getLabelPosition(p, t, a, o, h, c, s, l), this.isFirst && !this.isLast && !At(r.showFirstLabel, 1) || this.isLast && !this.isFirst && !At(r.showLastLabel, 1) ? d = !1 : !o || n.isRadial || h.step || h.rotation || e || 0 === i || this.handleOverflow(t), l && s % l && (d = !1), d && wt(t.y) ? (t.opacity = i, a[this.isNewLabel ? "attr" : "animate"](t), this.isNewLabel = !1) : (a.attr("y", -9999), this.isNewLabel = !0), this.isNew = !1)
            },
            render: function(t, e, i) {
                var s = (a = this.axis).horiz,
                    n = this.getPosition(s, this.pos, a.tickmarkOffset, e),
                    o = n.x,
                    r = n.y,
                    a = s && o === a.pos + a.len || !s && r === a.pos ? -1 : 1;
                i = At(i, 1), this.isActive = !0, this.renderGridLine(e, i, a), this.renderMark(n, i, a), this.renderLabel(n, e, i, t)
            },
            destroy: function() {
                Mt(this, this.axis)
            }
        };
    var Pt, Ct, Lt, Ot, Dt, It, zt, Et, Bt, Rt, Gt, Wt, Ht, Nt, Xt, Yt, Ft, Vt, jt, Ut, _t, Kt, Zt, qt, $t, Jt, Qt, te, ee, ie, se, ne, oe, re, ae, he, le, ce, de, pe, ue, fe, ge, me, xe, ve, ye, be, ke, Me, we, Se, Ae, Te, Pe, Ce, Le, Oe, De, Ie, ze, Ee, Be, Re, Ge, We, He, Ne, Xe, Ye, Fe, Ve, je, Ue, _e, Ke, Ze, qe, $e, Je, Qe, ti, ei, ii, si, ni, oi, ri, ai, hi, li, ci, di, pi, ui, fi, gi, mi, xi, vi, yi, bi, ki, Mi, wi, Si, Ai, Ti, Pi, Ci, Li, Oi, Di, Ii, zi, Ei, Bi, Ri, Gi, Wi, Hi, Ni, Xi, Yi, Fi, Vi, ji, Ui, _i, Ki, Zi, qi, $i, Ji, Qi, ts, es, is, ss, ns, os, rs, as, hs, ls, cs, ds, ps, us, fs, gs, ms, xs, vs, ys, bs, ks, Ms, ws, Ss, As, Ts, Ps, Cs, Ls, Os, Ds, Is, zs, Es, Bs, Rs, Gs, Ws, Hs, Ns, Xs, Ys, Fs, Vs, js, Us, _s, Ks, Zs, qs, $s, Js, Qs, tn, en, sn, nn, on, rn, an, hn, ln, cn, dn, pn, un, fn, gn, mn, xn, vn, yn, bn, kn, Mn, wn, Sn, An, Tn, Pn, Cn, Ln, On, Dn, In, zn, En, Bn, Rn, Gn, Wn, Hn, Nn, Xn, Yn, Fn, Vn, jn, Un, _n, Kn, Zn, qn, $n, Jn, Qn, to, eo, io, so, no, oo, ro, ao, ho, lo, co, po, uo, fo, go, mo, xo, vo, yo, bo, ko, Mo, wo, So, Ao, To, Po, Co, Lo, Oo, Do, Io, zo, Eo, Bo, Ro, Go, Wo, Ho, No, Xo, Yo, Fo, Vo, jo, Uo, _o, Ko, Zo, qo, $o, Jo, Qo, tr, er, ir, sr, nr, or, rr, ar, hr, lr, cr, dr, pr, ur, fr, gr, mr, xr, vr, yr, br, kr, Mr, wr, Sr, Ar, Tr, Pr, Cr, Lr, Or, Dr, Ir, zr, Er, Br, Rr, Gr, Wr, Hr, Nr, Xr, Yr, Fr, Vr, jr, Ur, _r, Kr, Zr, qr, $r, Jr, Qr, ta, ea, ia, sa, na, oa, ra, aa, ha, la, ca, da, pa, ua, fa, ga, ma, xa, va, ya, ba, ka, Ma, wa, Sa, Aa, Ta, Pa, Ca, La = (Ct = (Pt = t).addEvent, Lt = Pt.animObject, Ot = Pt.arrayMax, Dt = Pt.arrayMin, It = Pt.color, zt = Pt.correctFloat, Et = Pt.defaultOptions, Bt = Pt.defined, Rt = Pt.deg2rad, Gt = Pt.destroyObjectProperties, Wt = Pt.each, Ht = Pt.extend, Nt = Pt.fireEvent, Xt = Pt.format, Yt = Pt.getMagnitude, Ft = Pt.grep, Vt = Pt.inArray, jt = Pt.isArray, Ut = Pt.isNumber, _t = Pt.isString, Kt = Pt.merge, Zt = Pt.normalizeTickInterval, qt = Pt.objectEach, $t = Pt.pick, Jt = Pt.removeEvent, Qt = Pt.splat, te = Pt.syncTimeout, ee = Pt.Tick, ie = function() {
        this.init.apply(this, arguments)
    }, Pt.extend(ie.prototype, {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            labels: {
                enabled: !0,
                style: {
                    color: "#666666",
                    cursor: "default",
                    fontSize: "11px"
                },
                x: 0
            },
            minPadding: .01,
            maxPadding: .01,
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickLength: 10,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            title: {
                align: "middle",
                style: {
                    color: "#666666"
                }
            },
            type: "linear",
            minorGridLineColor: "#f2f2f2",
            minorGridLineWidth: 1,
            minorTickColor: "#999999",
            lineColor: "#ccd6eb",
            lineWidth: 1,
            gridLineColor: "#e6e6e6",
            tickColor: "#ccd6eb"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                x: -8
            },
            maxPadding: .05,
            minPadding: .05,
            startOnTick: !0,
            title: {
                rotation: 270,
                text: "Values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return Pt.numberFormat(this.total, -1)
                },
                style: {
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "#000000",
                    textOutline: "1px contrast"
                }
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        defaultLeftAxisOptions: {
            labels: {
                x: -15
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                x: 15
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                autoRotation: [-45],
                x: 0
            },
            title: {
                rotation: 0
            }
        },
        init: function(t, e) {
            var i = e.isX,
                s = this;
            s.chart = t, s.horiz = t.inverted && !s.isZAxis ? !i : i, s.isXAxis = i, s.coll = s.coll || (i ? "xAxis" : "yAxis"), s.opposite = e.opposite, s.side = e.side || (s.horiz ? s.opposite ? 0 : 2 : s.opposite ? 1 : 3), s.setOptions(e);
            var n = this.options,
                o = n.type;
            s.labelFormatter = n.labels.formatter || s.defaultLabelFormatter, s.userOptions = e, s.minPixelPadding = 0, s.reversed = n.reversed, s.visible = !1 !== n.visible, s.zoomEnabled = !1 !== n.zoomEnabled, s.hasNames = "category" === o || !0 === n.categories, s.categories = n.categories || s.hasNames, s.names = s.names || [], s.plotLinesAndBandsGroups = {}, s.isLog = "logarithmic" === o, s.isDatetimeAxis = "datetime" === o, s.positiveValuesOnly = s.isLog && !s.allowNegativeLog, s.isLinked = Bt(n.linkedTo), s.ticks = {}, s.labelEdge = [], s.minorTicks = {}, s.plotLinesAndBands = [], s.alternateBands = {}, s.len = 0, s.minRange = s.userMinRange = n.minRange || n.maxZoom, s.range = n.range, s.offset = n.offset || 0, s.stacks = {}, s.oldStacks = {}, s.stacksTouched = 0, s.max = null, s.min = null, s.crosshair = $t(n.crosshair, Qt(t.options.tooltip.crosshairs)[i ? 0 : 1], !1), e = s.options.events, -1 === Vt(s, t.axes) && (i ? t.axes.splice(t.xAxis.length, 0, s) : t.axes.push(s), t[s.coll].push(s)), s.series = s.series || [], t.inverted && !s.isZAxis && i && void 0 === s.reversed && (s.reversed = !0), qt(e, function(t, e) {
                Ct(s, e, t)
            }), s.lin2log = n.linearToLogConverter || s.lin2log, s.isLog && (s.val2lin = s.log2lin, s.lin2val = s.lin2log)
        },
        setOptions: function(t) {
            this.options = Kt(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], Kt(Et[this.coll], t))
        },
        defaultLabelFormatter: function() {
            var t, e = this.axis,
                i = this.value,
                s = e.categories,
                n = this.dateTimeLabelFormat,
                o = (r = Et.lang).numericSymbols,
                r = r.numericSymbolMagnitude || 1e3,
                a = o && o.length,
                h = e.options.labels.format;
            if (e = e.isLog ? Math.abs(i) : e.tickInterval, h) t = Xt(h, this);
            else if (s) t = i;
            else if (n) t = Pt.dateFormat(n, i);
            else if (a && 1e3 <= e)
                for (; a-- && void 0 === t;) e >= (s = Math.pow(r, a + 1)) && 0 == 10 * i % s && null !== o[a] && 0 !== i && (t = Pt.numberFormat(i / s, -1) + o[a]);
            return void 0 === t && (t = 1e4 <= Math.abs(i) ? Pt.numberFormat(i, -1) : Pt.numberFormat(i, -1, void 0, "")), t
        },
        getSeriesExtremes: function() {
            var t = this,
                e = t.chart;
            t.hasVisibleSeries = !1, t.dataMin = t.dataMax = t.threshold = null, t.softThreshold = !t.isXAxis, t.buildStacks && t.buildStacks(), Wt(t.series, function(i) {
                if (i.visible || !e.options.chart.ignoreHiddenSeries) {
                    var s, n = i.options,
                        o = n.threshold;
                    t.hasVisibleSeries = !0, t.positiveValuesOnly && 0 >= o && (o = null), t.isXAxis ? (n = i.xData).length && (i = Dt(n), Ut(i) || i instanceof Date || (n = Ft(n, function(t) {
                        return Ut(t)
                    }), i = Dt(n)), t.dataMin = Math.min($t(t.dataMin, n[0]), i), t.dataMax = Math.max($t(t.dataMax, n[0]), Ot(n))) : (i.getExtremes(), s = i.dataMax, i = i.dataMin, Bt(i) && Bt(s) && (t.dataMin = Math.min($t(t.dataMin, i), i), t.dataMax = Math.max($t(t.dataMax, s), s)), Bt(o) && (t.threshold = o), (!n.softThreshold || t.positiveValuesOnly) && (t.softThreshold = !1))
                }
            })
        },
        translate: function(t, e, i, s, n, o) {
            var r = this.linkedParent || this,
                a = 1,
                h = 0,
                l = s ? r.oldTransA : r.transA;
            s = s ? r.oldMin : r.min;
            var c = r.minPixelPadding;
            return n = (r.isOrdinal || r.isBroken || r.isLog && n) && r.lin2val, l || (l = r.transA), i && (a *= -1, h = r.len), r.reversed && (h -= (a *= -1) * (r.sector || r.len)), e ? (t = (t * a + h - c) / l + s, n && (t = r.lin2val(t))) : (n && (t = r.val2lin(t)), t = a * (t - s) * l + h + a * c + (Ut(o) ? l * o : 0)), t
        },
        toPixels: function(t, e) {
            return this.translate(t, !1, !this.horiz, null, !0) + (e ? 0 : this.pos)
        },
        toValue: function(t, e) {
            return this.translate(t - (e ? 0 : this.pos), !0, !this.horiz, null, !0)
        },
        getPlotLinePath: function(t, e, i, s, n) {
            var o, r, a, h = this.chart,
                l = this.left,
                c = this.top,
                d = i && h.oldChartHeight || h.chartHeight,
                p = i && h.oldChartWidth || h.chartWidth;
            o = this.transB;
            var u = function(t, e, i) {
                return (t < e || t > i) && (s ? t = Math.min(Math.max(e, t), i) : a = !0), t
            };
            return n = $t(n, this.translate(t, null, null, i)), t = i = Math.round(n + o), o = r = Math.round(d - n - o), Ut(n) ? this.horiz ? (o = c, r = d - this.bottom, t = i = u(t, l, l + this.width)) : (t = l, i = p - this.right, o = r = u(o, c, c + this.height)) : a = !0, a && !s ? null : h.renderer.crispLine(["M", t, o, "L", i, r], e || 1)
        },
        getLinearTickPositions: function(t, e, i) {
            var s, n = zt(Math.floor(e / t) * t);
            i = zt(Math.ceil(i / t) * t);
            var o = [];
            if (this.single) return [e];
            for (e = n; e <= i && (o.push(e), (e = zt(e + t)) !== s);) s = e;
            return o
        },
        getMinorTickPositions: function() {
            var t = this,
                e = t.options,
                i = t.tickPositions,
                s = t.minorTickInterval,
                n = [],
                o = t.pointRangePadding || 0,
                r = t.min - o,
                a = (o = t.max + o) - r;
            if (a && a / s < t.len / 3)
                if (t.isLog) Wt(this.paddedTicks, function(e, i, o) {
                    i && n.push.apply(n, t.getLogTickPositions(s, o[i - 1], o[i], !0))
                });
                else if (t.isDatetimeAxis && "auto" === e.minorTickInterval) n = n.concat(t.getTimeTicks(t.normalizeTimeTickInterval(s), r, o, e.startOfWeek));
            else
                for (e = r + (i[0] - r) % s; e <= o && e !== n[0]; e += s) n.push(e);
            return 0 !== n.length && t.trimTicks(n), n
        },
        adjustForMinRange: function() {
            var t, e, i, s, n, o, r, a = this.options,
                h = this.min,
                l = this.max;
            this.isXAxis && void 0 === this.minRange && !this.isLog && (Bt(a.min) || Bt(a.max) ? this.minRange = null : (Wt(this.series, function(t) {
                for (o = t.xData, s = t.xIncrement ? 1 : o.length - 1; 0 < s; s--) n = o[s] - o[s - 1], (void 0 === i || n < i) && (i = n)
            }), this.minRange = Math.min(5 * i, this.dataMax - this.dataMin))), l - h < this.minRange && (e = this.dataMax - this.dataMin >= this.minRange, t = [h - (t = ((r = this.minRange) - l + h) / 2), $t(a.min, h - t)], e && (t[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin), l = [(h = Ot(t)) + r, $t(a.max, h + r)], e && (l[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax), (l = Dt(l)) - h < r && (t[0] = l - r, t[1] = $t(a.min, l - r), h = Ot(t))), this.min = h, this.max = l
        },
        getClosest: function() {
            var t;
            return this.categories ? t = 1 : Wt(this.series, function(e) {
                var i = e.closestPointRange,
                    s = e.visible || !e.chart.options.chart.ignoreHiddenSeries;
                !e.noSharedTooltip && Bt(i) && s && (t = Bt(t) ? Math.min(t, i) : i)
            }), t
        },
        nameToX: function(t) {
            var e, i = jt(this.categories),
                s = i ? this.categories : this.names,
                n = t.options.x;
            return t.series.requireSorting = !1, Bt(n) || (n = !1 === this.options.uniqueNames ? t.series.autoIncrement() : Vt(t.name, s)), -1 === n ? i || (e = s.length) : e = n, void 0 !== e && (this.names[e] = t.name), e
        },
        updateNames: function() {
            var t = this;
            0 < this.names.length && (this.names.length = 0, this.minRange = this.userMinRange, Wt(this.series || [], function(e) {
                e.xIncrement = null, e.points && !e.isDirtyData || (e.processData(), e.generatePoints()), Wt(e.points, function(i, s) {
                    var n;
                    i.options && void 0 !== (n = t.nameToX(i)) && n !== i.x && (i.x = n, e.xData[s] = n)
                })
            }))
        },
        setAxisTranslation: function(t) {
            var e, i = this,
                s = i.max - i.min,
                n = i.axisPointRange || 0,
                o = 0,
                r = 0,
                a = i.linkedParent,
                h = !!i.categories,
                l = i.transA,
                c = i.isXAxis;
            (c || h || n) && (e = i.getClosest(), a ? (o = a.minPointOffset, r = a.pointRangePadding) : Wt(i.series, function(t) {
                var s = h ? 1 : c ? $t(t.options.pointRange, e, 0) : i.axisPointRange || 0;
                t = t.options.pointPlacement, n = Math.max(n, s), i.single || (o = Math.max(o, _t(t) ? 0 : s / 2), r = Math.max(r, "on" === t ? 0 : s))
            }), a = i.ordinalSlope && e ? i.ordinalSlope / e : 1, i.minPointOffset = o *= a, i.pointRangePadding = r *= a, i.pointRange = Math.min(n, s), c && (i.closestPointRange = e)), t && (i.oldTransA = l), i.translationSlope = i.transA = l = i.options.staticScale || i.len / (s + r || 1), i.transB = i.horiz ? i.left : i.bottom, i.minPixelPadding = l * o
        },
        minFromRange: function() {
            return this.max - this.range
        },
        setTickInterval: function(t) {
            var e, i, s, n, o = this,
                r = o.chart,
                a = o.options,
                h = o.isLog,
                l = o.log2lin,
                c = o.isDatetimeAxis,
                d = o.isXAxis,
                p = o.isLinked,
                u = a.maxPadding,
                f = a.minPadding,
                g = a.tickInterval,
                m = a.tickPixelInterval,
                x = o.categories,
                v = o.threshold,
                y = o.softThreshold;
            c || x || p || this.getTickAmount(), s = $t(o.userMin, a.min), n = $t(o.userMax, a.max), p ? (o.linkedParent = r[o.coll][a.linkedTo], r = o.linkedParent.getExtremes(), o.min = $t(r.min, r.dataMin), o.max = $t(r.max, r.dataMax), a.type !== o.linkedParent.options.type && Pt.error(11, 1)) : (!y && Bt(v) && (o.dataMin >= v ? (e = v, f = 0) : o.dataMax <= v && (i = v, u = 0)), o.min = $t(s, e, o.dataMin), o.max = $t(n, i, o.dataMax)), h && (o.positiveValuesOnly && !t && 0 >= Math.min(o.min, $t(o.dataMin, o.min)) && Pt.error(10, 1), o.min = zt(l(o.min), 15), o.max = zt(l(o.max), 15)), o.range && Bt(o.max) && (o.userMin = o.min = s = Math.max(o.min, o.minFromRange()), o.userMax = n = o.max, o.range = null), Nt(o, "foundExtremes"), o.beforePadding && o.beforePadding(), o.adjustForMinRange(), !(x || o.axisPointRange || o.usePercentage || p) && Bt(o.min) && Bt(o.max) && (l = o.max - o.min) && (!Bt(s) && f && (o.min -= l * f), !Bt(n) && u && (o.max += l * u)), Ut(a.softMin) && (o.min = Math.min(o.min, a.softMin)), Ut(a.softMax) && (o.max = Math.max(o.max, a.softMax)), Ut(a.floor) && (o.min = Math.max(o.min, a.floor)), Ut(a.ceiling) && (o.max = Math.min(o.max, a.ceiling)), y && Bt(o.dataMin) && (v = v || 0, !Bt(s) && o.min < v && o.dataMin >= v ? o.min = v : !Bt(n) && o.max > v && o.dataMax <= v && (o.max = v)), o.tickInterval = o.min === o.max || void 0 === o.min || void 0 === o.max ? 1 : p && !g && m === o.linkedParent.options.tickPixelInterval ? g = o.linkedParent.tickInterval : $t(g, this.tickAmount ? (o.max - o.min) / Math.max(this.tickAmount - 1, 1) : void 0, x ? 1 : (o.max - o.min) * m / Math.max(o.len, m)), d && !t && Wt(o.series, function(t) {
                t.processData(o.min !== o.oldMin || o.max !== o.oldMax)
            }), o.setAxisTranslation(!0), o.beforeSetTickPositions && o.beforeSetTickPositions(), o.postProcessTickInterval && (o.tickInterval = o.postProcessTickInterval(o.tickInterval)), o.pointRange && !g && (o.tickInterval = Math.max(o.pointRange, o.tickInterval)), t = $t(a.minTickInterval, o.isDatetimeAxis && o.closestPointRange), !g && o.tickInterval < t && (o.tickInterval = t), c || h || g || (o.tickInterval = Zt(o.tickInterval, null, Yt(o.tickInterval), $t(a.allowDecimals, !(.5 < o.tickInterval && 5 > o.tickInterval && 1e3 < o.max && 9999 > o.max)), !!this.tickAmount)), this.tickAmount || (o.tickInterval = o.unsquish()), this.setTickPositions()
        },
        setTickPositions: function() {
            var t, e = this.options,
                i = e.tickPositions,
                s = e.tickPositioner,
                n = e.startOnTick,
                o = e.endOnTick;
            this.tickmarkOffset = this.categories && "between" === e.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0, this.minorTickInterval = "auto" === e.minorTickInterval && this.tickInterval ? this.tickInterval / 5 : e.minorTickInterval, this.single = this.min === this.max && Bt(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== e.allowDecimals), this.tickPositions = t = i && i.slice(), !t && ((t = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, e.units), this.min, this.max, e.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max)).length > this.len && (t = [t[0], t.pop()]), this.tickPositions = t, s && (s = s.apply(this, [this.min, this.max]))) && (this.tickPositions = t = s), this.paddedTicks = t.slice(0), this.trimTicks(t, n, o), this.isLinked || (this.single && (this.min -= .5, this.max += .5), i || s || this.adjustTickAmount())
        },
        trimTicks: function(t, e, i) {
            var s = t[0],
                n = t[t.length - 1],
                o = this.minPointOffset || 0;
            if (!this.isLinked) {
                if (e && -1 / 0 !== s) this.min = s;
                else
                    for (; this.min - o > t[0];) t.shift();
                if (i) this.max = n;
                else
                    for (; this.max + o < t[t.length - 1];) t.pop();
                0 === t.length && Bt(s) && t.push((n + s) / 2)
            }
        },
        alignToOthers: function() {
            var t, e = {},
                i = this.options;
            return !1 === this.chart.options.chart.alignTicks || !1 === i.alignTicks || this.isLog || Wt(this.chart[this.coll], function(i) {
                var s = i.options;
                s = [i.horiz ? s.left : s.top, s.width, s.height, s.pane].join(), i.series.length && (e[s] ? t = !0 : e[s] = 1)
            }), t
        },
        getTickAmount: function() {
            var t = this.options,
                e = t.tickAmount,
                i = t.tickPixelInterval;
            !Bt(t.tickInterval) && this.len < i && !this.isRadial && !this.isLog && t.startOnTick && t.endOnTick && (e = 2), !e && this.alignToOthers() && (e = Math.ceil(this.len / i) + 1), 4 > e && (this.finalTickAmt = e, e = 5), this.tickAmount = e
        },
        adjustTickAmount: function() {
            var t = this.tickInterval,
                e = this.tickPositions,
                i = this.tickAmount,
                s = this.finalTickAmt,
                n = e && e.length;
            if (n < i) {
                for (; e.length < i;) e.push(zt(e[e.length - 1] + t));
                this.transA *= (n - 1) / (i - 1), this.max = e[e.length - 1]
            } else n > i && (this.tickInterval *= 2, this.setTickPositions());
            if (Bt(s)) {
                for (t = i = e.length; t--;)(3 === s && 1 == t % 2 || 2 >= s && 0 < t && t < i - 1) && e.splice(t, 1);
                this.finalTickAmt = void 0
            }
        },
        setScale: function() {
            var t, e;
            this.oldMin = this.min, this.oldMax = this.max, this.oldAxisLength = this.len, this.setAxisSize(), e = this.len !== this.oldAxisLength, Wt(this.series, function(e) {
                (e.isDirtyData || e.isDirty || e.xAxis.isDirty) && (t = !0)
            }), e || t || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks()
        },
        setExtremes: function(t, e, i, s, n) {
            var o = this,
                r = o.chart;
            i = $t(i, !0), Wt(o.series, function(t) {
                delete t.kdTree
            }), n = Ht(n, {
                min: t,
                max: e
            }), Nt(o, "setExtremes", n, function() {
                o.userMin = t, o.userMax = e, o.eventArgs = n, i && r.redraw(s)
            })
        },
        zoom: function(t, e) {
            var i = this.dataMin,
                s = this.dataMax,
                n = this.options,
                o = Math.min(i, $t(n.min, i));
            return n = Math.max(s, $t(n.max, s)), t === this.min && e === this.max || (this.allowZoomOutside || (Bt(i) && (t < o && (t = o), t > n && (t = n)), Bt(s) && (e < o && (e = o), e > n && (e = n))), this.displayBtn = void 0 !== t || void 0 !== e, this.setExtremes(t, e, !1, void 0, {
                trigger: "zoom"
            })), !0
        },
        setAxisSize: function() {
            var t = this.chart,
                e = (r = this.options).offsets || [0, 0, 0, 0],
                i = this.horiz,
                s = $t(r.width, t.plotWidth - e[3] + e[1]),
                n = $t(r.height, t.plotHeight - e[0] + e[2]),
                o = $t(r.top, t.plotTop + e[0]),
                r = $t(r.left, t.plotLeft + e[3]);
            (e = /%$/).test(n) && (n = Math.round(parseFloat(n) / 100 * t.plotHeight)), e.test(o) && (o = Math.round(parseFloat(o) / 100 * t.plotHeight + t.plotTop)), this.left = r, this.top = o, this.width = s, this.height = n, this.bottom = t.chartHeight - n - o, this.right = t.chartWidth - s - r, this.len = Math.max(i ? s : n, 0), this.pos = i ? r : o
        },
        getExtremes: function() {
            var t = this.isLog,
                e = this.lin2log;
            return {
                min: t ? zt(e(this.min)) : this.min,
                max: t ? zt(e(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(t) {
            var e = this.isLog,
                i = this.lin2log,
                s = e ? i(this.min) : this.min;
            return e = e ? i(this.max) : this.max, null === t ? t = s : s > t ? t = s : e < t && (t = e), this.translate(t, 0, 1, 0, 1)
        },
        autoLabelAlign: function(t) {
            return 15 < (t = ($t(t, 0) - 90 * this.side + 720) % 360) && 165 > t ? "right" : 195 < t && 345 > t ? "left" : "center"
        },
        tickSize: function(t) {
            var e = this.options,
                i = e[t + "Length"],
                s = $t(e[t + "Width"], "tick" === t && this.isXAxis ? 1 : 0);
            if (s && i) return "inside" === e[t + "Position"] && (i = -i), [i, s]
        },
        labelMetrics: function() {
            var t = this.tickPositions && this.tickPositions[0] || 0;
            return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[t] && this.ticks[t].label)
        },
        unsquish: function() {
            var t, e, i, s = this.options.labels,
                n = this.horiz,
                o = this.tickInterval,
                r = o,
                a = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / o),
                h = s.rotation,
                l = this.labelMetrics(),
                c = Number.MAX_VALUE,
                d = function(t) {
                    return (t = 1 < (t /= a || 1) ? Math.ceil(t) : 1) * o
                };
            return n ? (i = !s.staggerLines && !s.step && (Bt(h) ? [h] : a < $t(s.autoRotationLimit, 80) && s.autoRotation)) && Wt(i, function(i) {
                var s;
                (i === h || i && -90 <= i && 90 >= i) && (s = (e = d(Math.abs(l.h / Math.sin(Rt * i)))) + Math.abs(i / 360)) < c && (c = s, t = i, r = e)
            }) : s.step || (r = d(l.h)), this.autoRotation = i, this.labelRotation = $t(t, h), r
        },
        getSlotWidth: function() {
            var t = this.chart,
                e = this.horiz,
                i = this.options.labels,
                s = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
                n = t.margin[3];
            return e && 2 > (i.step || 0) && !i.rotation && (this.staggerLines || 1) * this.len / s || !e && (n && n - t.spacing[3] || .33 * t.chartWidth)
        },
        renderUnsquish: function() {
            var t, e, i, s = this.chart,
                n = s.renderer,
                o = this.tickPositions,
                r = this.ticks,
                a = this.options.labels,
                h = this.horiz,
                l = this.getSlotWidth(),
                c = Math.max(1, Math.round(l - 2 * (a.padding || 5))),
                d = {},
                p = this.labelMetrics(),
                u = a.style && a.style.textOverflow,
                f = 0;
            if (_t(a.rotation) || (d.rotation = a.rotation || 0), Wt(o, function(t) {
                    (t = r[t]) && t.labelLength > f && (f = t.labelLength)
                }), this.maxLabelLength = f, this.autoRotation) f > c && f > p.h ? d.rotation = this.labelRotation : this.labelRotation = 0;
            else if (l && (t = {
                    width: c + "px"
                }, !u))
                for (t.textOverflow = "clip", e = o.length; !h && e--;) i = o[e], (c = r[i].label) && (c.styles && "ellipsis" === c.styles.textOverflow ? c.css({
                    textOverflow: "clip"
                }) : r[i].labelLength > l && c.css({
                    width: l + "px"
                }), c.getBBox().height > this.len / o.length - (p.h - p.f) && (c.specCss = {
                    textOverflow: "ellipsis"
                }));
            d.rotation && (t = {
                width: (f > .5 * s.chartHeight ? .33 * s.chartHeight : s.chartHeight) + "px"
            }, u || (t.textOverflow = "ellipsis")), (this.labelAlign = a.align || this.autoLabelAlign(this.labelRotation)) && (d.align = this.labelAlign), Wt(o, function(e) {
                var i = (e = r[e]) && e.label;
                i && (i.attr(d), t && i.css(Kt(t, i.specCss)), delete i.specCss, e.rotation = d.rotation)
            }), this.tickRotCorr = n.rotCorr(p.b, this.labelRotation || 0, 0 !== this.side)
        },
        hasData: function() {
            return this.hasVisibleSeries || Bt(this.min) && Bt(this.max) && !!this.tickPositions
        },
        addTitle: function(t) {
            var e, i = this.chart.renderer,
                s = this.horiz,
                n = this.opposite,
                o = this.options.title;
            this.axisTitle || ((e = o.textAlign) || (e = (s ? {
                low: "left",
                middle: "center",
                high: "right"
            } : {
                low: n ? "right" : "left",
                middle: "center",
                high: n ? "left" : "right"
            })[o.align]), this.axisTitle = i.text(o.text, 0, 0, o.useHTML).attr({
                zIndex: 7,
                rotation: o.rotation || 0,
                align: e
            }).addClass("highcharts-axis-title").css(o.style).add(this.axisGroup), this.axisTitle.isNew = !0), this.axisTitle[t ? "show" : "hide"](!0)
        },
        generateTick: function(t) {
            var e = this.ticks;
            e[t] ? e[t].addLabel() : e[t] = new ee(this, t)
        },
        getOffset: function() {
            var t, e, i, s = this,
                n = (x = s.chart).renderer,
                o = s.options,
                r = s.tickPositions,
                a = s.ticks,
                h = s.horiz,
                l = s.side,
                c = x.inverted && !s.isZAxis ? [1, 0, 3, 2][l] : l,
                d = 0,
                p = 0,
                u = o.title,
                f = o.labels,
                g = 0,
                m = x.axisOffset,
                x = x.clipOffset,
                v = [-1, 1, 1, -1][l],
                y = o.className,
                b = s.axisParent,
                k = this.tickSize("tick");
            t = s.hasData(), s.showAxis = e = t || $t(o.showEmpty, !0), s.staggerLines = s.horiz && f.staggerLines, s.axisGroup || (s.gridGroup = n.g("grid").attr({
                zIndex: o.gridZIndex || 1
            }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (y || "")).add(b), s.axisGroup = n.g("axis").attr({
                zIndex: o.zIndex || 2
            }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (y || "")).add(b), s.labelGroup = n.g("axis-labels").attr({
                zIndex: f.zIndex || 7
            }).addClass("highcharts-" + s.coll.toLowerCase() + "-labels " + (y || "")).add(b)), t || s.isLinked ? (Wt(r, function(t, e) {
                s.generateTick(t, e)
            }), s.renderUnsquish(), !1 === f.reserveSpace || 0 !== l && 2 !== l && {
                1: "left",
                3: "right"
            } [l] !== s.labelAlign && "center" !== s.labelAlign || Wt(r, function(t) {
                g = Math.max(a[t].getLabelSize(), g)
            }), s.staggerLines && (g *= s.staggerLines, s.labelOffset = g * (s.opposite ? -1 : 1))) : qt(a, function(t, e) {
                t.destroy(), delete a[e]
            }), u && u.text && !1 !== u.enabled && (s.addTitle(e), e && !1 !== u.reserveSpace && (s.titleOffset = d = s.axisTitle.getBBox()[h ? "height" : "width"], i = u.offset, p = Bt(i) ? 0 : $t(u.margin, h ? 5 : 10))), s.renderLine(), s.offset = v * $t(o.offset, m[l]), s.tickRotCorr = s.tickRotCorr || {
                x: 0,
                y: 0
            }, n = 0 === l ? -s.labelMetrics().h : 2 === l ? s.tickRotCorr.y : 0, p = Math.abs(g) + p, g && (p = p - n + v * (h ? $t(f.y, s.tickRotCorr.y + 8 * v) : f.x)), s.axisTitleMargin = $t(i, p), m[l] = Math.max(m[l], s.axisTitleMargin + d + v * s.offset, p, t && r.length && k ? k[0] + v * s.offset : 0), r = 2 * Math.floor(s.axisLine.strokeWidth() / 2), 0 < o.offset && (r -= 2 * o.offset), x[c] = Math.max(x[c] || r, r)
        },
        getLinePath: function(t) {
            var e = this.chart,
                i = this.opposite,
                s = this.offset,
                n = this.horiz,
                o = this.left + (i ? this.width : 0) + s;
            return s = e.chartHeight - this.bottom - (i ? this.height : 0) + s, i && (t *= -1), e.renderer.crispLine(["M", n ? this.left : o, n ? s : this.top, "L", n ? e.chartWidth - this.right : o, n ? s : e.chartHeight - this.bottom], t)
        },
        renderLine: function() {
            this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.axisLine.attr({
                stroke: this.options.lineColor,
                "stroke-width": this.options.lineWidth,
                zIndex: 7
            }))
        },
        getTitlePosition: function() {
            var t = this.horiz,
                e = this.left,
                i = this.top,
                s = this.len,
                n = this.options.title,
                o = t ? e : i,
                r = this.opposite,
                a = this.offset,
                h = n.x || 0,
                l = n.y || 0,
                c = this.chart.renderer.fontMetrics(n.style && n.style.fontSize, this.axisTitle).f;
            return s = {
                low: o + (t ? 0 : s),
                middle: o + s / 2,
                high: o + (t ? s : 0)
            } [n.align], e = (t ? i + this.height : e) + (t ? 1 : -1) * (r ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? c : 0), {
                x: t ? s + h : e + (r ? this.width : 0) + a + h,
                y: t ? e + l - (r ? this.height : 0) + a : s + l
            }
        },
        renderMinorTick: function(t) {
            var e = this.chart.hasRendered && Ut(this.oldMin),
                i = this.minorTicks;
            i[t] || (i[t] = new ee(this, t, "minor")), e && i[t].isNew && i[t].render(null, !0), i[t].render(null, !1, 1)
        },
        renderTick: function(t, e) {
            var i = this.isLinked,
                s = this.ticks,
                n = this.chart.hasRendered && Ut(this.oldMin);
            (!i || t >= this.min && t <= this.max) && (s[t] || (s[t] = new ee(this, t)), n && s[t].isNew && s[t].render(e, !0, .1), s[t].render(e))
        },
        render: function() {
            var t, e, i = this,
                s = i.chart,
                n = i.options,
                o = i.isLog,
                r = i.lin2log,
                a = i.isLinked,
                h = i.tickPositions,
                l = i.axisTitle,
                c = i.ticks,
                d = i.minorTicks,
                p = i.alternateBands,
                u = n.stackLabels,
                f = n.alternateGridColor,
                g = i.tickmarkOffset,
                m = i.axisLine,
                x = i.showAxis,
                v = Lt(s.renderer.globalAnimation);
            i.labelEdge.length = 0, i.overlap = !1, Wt([c, d, p], function(t) {
                qt(t, function(t) {
                    t.isActive = !1
                })
            }), (i.hasData() || a) && (i.minorTickInterval && !i.categories && Wt(i.getMinorTickPositions(), function(t) {
                i.renderMinorTick(t)
            }), h.length && (Wt(h, function(t, e) {
                i.renderTick(t, e)
            }), g && (0 === i.min || i.single) && (c[-1] || (c[-1] = new ee(i, -1, null, !0)), c[-1].render(-1))), f && Wt(h, function(n, a) {
                e = void 0 !== h[a + 1] ? h[a + 1] + g : i.max - g, 0 == a % 2 && n < i.max && e <= i.max + (s.polar ? -g : g) && (p[n] || (p[n] = new Pt.PlotLineOrBand(i)), t = n + g, p[n].options = {
                    from: o ? r(t) : t,
                    to: o ? r(e) : e,
                    color: f
                }, p[n].render(), p[n].isActive = !0)
            }), i._addedPlotLB || (Wt((n.plotLines || []).concat(n.plotBands || []), function(t) {
                i.addPlotBandOrLine(t)
            }), i._addedPlotLB = !0)), Wt([c, d, p], function(t) {
                var e, i = [],
                    n = v.duration;
                qt(t, function(t, e) {
                    t.isActive || (t.render(e, !1, 0), t.isActive = !1, i.push(e))
                }), te(function() {
                    for (e = i.length; e--;) t[i[e]] && !t[i[e]].isActive && (t[i[e]].destroy(), delete t[i[e]])
                }, t !== p && s.hasRendered && n ? n : 0)
            }), m && (m[m.isPlaced ? "animate" : "attr"]({
                d: this.getLinePath(m.strokeWidth())
            }), m.isPlaced = !0, m[x ? "show" : "hide"](!0)), l && x && (n = i.getTitlePosition(), Ut(n.y) ? (l[l.isNew ? "attr" : "animate"](n), l.isNew = !1) : (l.attr("y", -9999), l.isNew = !0)), u && u.enabled && i.renderStackTotals(), i.isDirty = !1
        },
        redraw: function() {
            this.visible && (this.render(), Wt(this.plotLinesAndBands, function(t) {
                t.render()
            })), Wt(this.series, function(t) {
                t.isDirty = !0
            })
        },
        keepProps: "extKey hcEvents names series userMax userMin".split(" "),
        destroy: function(t) {
            var e, i = this,
                s = i.stacks,
                n = i.plotLinesAndBands;
            if (t || Jt(i), qt(s, function(t, e) {
                    Gt(t), s[e] = null
                }), Wt([i.ticks, i.minorTicks, i.alternateBands], function(t) {
                    Gt(t)
                }), n)
                for (t = n.length; t--;) n[t].destroy();
            for (e in Wt("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "), function(t) {
                    i[t] && (i[t] = i[t].destroy())
                }), i.plotLinesAndBandsGroups) i.plotLinesAndBandsGroups[e] = i.plotLinesAndBandsGroups[e].destroy();
            qt(i, function(t, e) {
                -1 === Vt(e, i.keepProps) && delete i[e]
            })
        },
        drawCrosshair: function(t, e) {
            var i, s, n = this.crosshair,
                o = $t(n.snap, !0),
                r = this.cross;
            t || (t = this.cross && this.cross.e), this.crosshair && !1 !== (Bt(e) || !o) ? (o ? Bt(e) && (s = this.isXAxis ? e.plotX : this.len - e.plotY) : s = t && (this.horiz ? t.chartX - this.pos : this.len - t.chartY + this.pos), Bt(s) && (i = this.getPlotLinePath(e && (this.isXAxis ? e.x : $t(e.stackY, e.y)), null, null, null, s) || null), Bt(i) ? (e = this.categories && !this.isRadial, r || (this.cross = r = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (e ? "category " : "thin ") + n.className).attr({
                zIndex: $t(n.zIndex, 2)
            }).add(), r.attr({
                stroke: n.color || (e ? It("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
                "stroke-width": $t(n.width, 1)
            }), n.dashStyle && r.attr({
                dashstyle: n.dashStyle
            })), r.show().attr({
                d: i
            }), e && !n.width && r.attr({
                "stroke-width": this.transA
            }), this.cross.e = t) : this.hideCrosshair()) : this.hideCrosshair()
        },
        hideCrosshair: function() {
            this.cross && this.cross.hide()
        }
    }), Pt.Axis = ie);
    return ne = (se = t).Axis, oe = se.Date, re = se.dateFormat, ae = se.defaultOptions, he = se.defined, le = se.each, ce = se.extend, de = se.getMagnitude, pe = se.getTZOffset, ue = se.normalizeTickInterval, fe = se.pick, ge = se.timeUnits, ne.prototype.getTimeTicks = function(t, e, i, s) {
            var n, o, r = [],
                a = {},
                h = ae.global.useUTC,
                l = new oe(e - Math.max(pe(e), pe(i))),
                c = oe.hcMakeTime,
                d = t.unitRange,
                p = t.count;
            if (he(e)) {
                l[oe.hcSetMilliseconds](d >= ge.second ? 0 : p * Math.floor(l.getMilliseconds() / p)), d >= ge.second && l[oe.hcSetSeconds](d >= ge.minute ? 0 : p * Math.floor(l.getSeconds() / p)), d >= ge.minute && l[oe.hcSetMinutes](d >= ge.hour ? 0 : p * Math.floor(l[oe.hcGetMinutes]() / p)), d >= ge.hour && l[oe.hcSetHours](d >= ge.day ? 0 : p * Math.floor(l[oe.hcGetHours]() / p)), d >= ge.day && l[oe.hcSetDate](d >= ge.month ? 1 : p * Math.floor(l[oe.hcGetDate]() / p)), d >= ge.month && (l[oe.hcSetMonth](d >= ge.year ? 0 : p * Math.floor(l[oe.hcGetMonth]() / p)), n = l[oe.hcGetFullYear]()), d >= ge.year && l[oe.hcSetFullYear](n - n % p), d === ge.week && l[oe.hcSetDate](l[oe.hcGetDate]() - l[oe.hcGetDay]() + fe(s, 1)), n = l[oe.hcGetFullYear](), s = l[oe.hcGetMonth]();
                var u = l[oe.hcGetDate](),
                    f = l[oe.hcGetHours]();
                for ((oe.hcTimezoneOffset || oe.hcGetTimezoneOffset) && (o = (!h || !!oe.hcGetTimezoneOffset) && (i - e > 4 * ge.month || pe(e) !== pe(i)), l = l.getTime(), l = new oe(l + pe(l))), h = l.getTime(), e = 1; h < i;) r.push(h), h = d === ge.year ? c(n + e * p, 0) : d === ge.month ? c(n, s + e * p) : !o || d !== ge.day && d !== ge.week ? o && d === ge.hour ? c(n, s, u, f + e * p) : h + d * p : c(n, s, u + e * p * (d === ge.day ? 1 : 7)), e++;
                r.push(h), d <= ge.hour && 1e4 > r.length && le(r, function(t) {
                    0 == t % 18e5 && "000000000" === re("%H%M%S%L", t) && (a[t] = "day")
                })
            }
            return r.info = ce(t, {
                higherRanks: a,
                totalRange: d * p
            }), r
        }, ne.prototype.normalizeTimeTickInterval = function(t, e) {
            var i = e || [
                ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                ["second", [1, 2, 5, 10, 15, 30]],
                ["minute", [1, 2, 5, 10, 15, 30]],
                ["hour", [1, 2, 3, 4, 6, 8, 12]],
                ["day", [1, 2]],
                ["week", [1, 2]],
                ["month", [1, 2, 3, 4, 6]],
                ["year", null]
            ];
            e = i[i.length - 1];
            var s, n = ge[e[0]],
                o = e[1];
            for (s = 0; s < i.length && (e = i[s], n = ge[e[0]], o = e[1], !(i[s + 1] && t <= (n * o[o.length - 1] + ge[i[s + 1][0]]) / 2)); s++);
            return n === ge.year && t < 5 * n && (o = [1, 2, 5]), {
                unitRange: n,
                count: t = ue(t / n, o, "year" === e[0] ? Math.max(de(t / n), 1) : 1),
                unitName: e[0]
            }
        }, xe = (me = t).Axis, ve = me.getMagnitude, ye = me.map, be = me.normalizeTickInterval, ke = me.pick, xe.prototype.getLogTickPositions = function(t, e, i, s) {
            var n = this.options,
                o = this.len,
                r = this.lin2log,
                a = this.log2lin,
                h = [];
            if (s || (this._minorAutoInterval = null), .5 <= t) t = Math.round(t), h = this.getLinearTickPositions(t, e, i);
            else if (.08 <= t) {
                var l, c, d, p, u;
                for (o = Math.floor(e), n = .3 < t ? [1, 2, 4] : .15 < t ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; o < i + 1 && !u; o++)
                    for (c = n.length, l = 0; l < c && !u; l++)(d = a(r(o) * n[l])) > e && (!s || p <= i) && void 0 !== p && h.push(p), p > i && (u = !0), p = d
            } else e = r(e), i = r(i), t = n[s ? "minorTickInterval" : "tickInterval"], t = ke("auto" === t ? null : t, this._minorAutoInterval, n.tickPixelInterval / (s ? 5 : 1) * (i - e) / ((s ? o / this.tickPositions.length : o) || 1)), t = be(t, null, ve(t)), h = ye(this.getLinearTickPositions(t, e, i), a), s || (this._minorAutoInterval = t / 5);
            return s || (this.tickInterval = t), h
        }, xe.prototype.log2lin = function(t) {
            return Math.log(t) / Math.LN10
        }, xe.prototype.lin2log = function(t) {
            return Math.pow(10, t)
        }, we = La, Se = (Me = t).arrayMax, Ae = Me.arrayMin, Te = Me.defined, Pe = Me.destroyObjectProperties, Ce = Me.each, Le = Me.erase, Oe = Me.merge, De = Me.pick, Me.PlotLineOrBand = function(t, e) {
            this.axis = t, e && (this.options = e, this.id = e.id)
        }, Me.PlotLineOrBand.prototype = {
            render: function() {
                var t = this,
                    e = t.axis,
                    i = e.horiz,
                    s = t.options,
                    n = s.label,
                    o = t.label,
                    r = s.to,
                    a = s.from,
                    h = s.value,
                    l = Te(a) && Te(r),
                    c = Te(h),
                    d = t.svgElem,
                    p = !d,
                    u = [],
                    f = s.color,
                    g = De(s.zIndex, 0),
                    m = s.events,
                    x = (u = {
                        class: "highcharts-plot-" + (l ? "band " : "line ") + (s.className || "")
                    }, {}),
                    v = e.chart.renderer,
                    y = l ? "bands" : "lines",
                    b = e.log2lin;
                if (e.isLog && (a = b(a), r = b(r), h = b(h)), c ? (u = {
                        stroke: f,
                        "stroke-width": s.width
                    }, s.dashStyle && (u.dashstyle = s.dashStyle)) : l && (f && (u.fill = f), s.borderWidth && (u.stroke = s.borderColor, u["stroke-width"] = s.borderWidth)), x.zIndex = g, y += "-" + g, (f = e.plotLinesAndBandsGroups[y]) || (e.plotLinesAndBandsGroups[y] = f = v.g("plot-" + y).attr(x).add()), p && (t.svgElem = d = v.path().attr(u).add(f)), c) u = e.getPlotLinePath(h, d.strokeWidth());
                else {
                    if (!l) return;
                    u = e.getPlotBandPath(a, r, s)
                }
                return p && u && u.length ? (d.attr({
                    d: u
                }), m && Me.objectEach(m, function(e, i) {
                    d.on(i, function(e) {
                        m[i].apply(t, [e])
                    })
                })) : d && (u ? (d.show(), d.animate({
                    d: u
                })) : (d.hide(), o && (t.label = o = o.destroy()))), n && Te(n.text) && u && u.length && 0 < e.width && 0 < e.height && !u.flat ? (n = Oe({
                    align: i && l && "center",
                    x: i ? !l && 4 : 10,
                    verticalAlign: !i && l && "middle",
                    y: i ? l ? 16 : 10 : l ? 6 : -4,
                    rotation: i && !l && 90
                }, n), this.renderLabel(n, u, l, g)) : o && o.hide(), t
            },
            renderLabel: function(t, e, i, s) {
                var n = this.label,
                    o = this.axis.chart.renderer;
                n || ((n = {
                    align: t.textAlign || t.align,
                    rotation: t.rotation,
                    class: "highcharts-plot-" + (i ? "band" : "line") + "-label " + (t.className || "")
                }).zIndex = s, this.label = n = o.text(t.text, 0, 0, t.useHTML).attr(n).add(), n.css(t.style)), s = [e[1], e[4], i ? e[6] : e[1]], e = [e[2], e[5], i ? e[7] : e[2]], i = Ae(s), o = Ae(e), n.align(t, !1, {
                    x: i,
                    y: o,
                    width: Se(s) - i,
                    height: Se(e) - o
                }), n.show()
            },
            destroy: function() {
                Le(this.axis.plotLinesAndBands, this), delete this.axis, Pe(this)
            }
        }, Me.extend(we.prototype, {
            getPlotBandPath: function(t, e) {
                var i = this.getPlotLinePath(e, null, null, !0),
                    s = this.getPlotLinePath(t, null, null, !0),
                    n = this.horiz,
                    o = 1;
                return t = t < this.min && e < this.min || t > this.max && e > this.max, s && i ? (t && (s.flat = s.toString() === i.toString(), o = 0), s.push(n && i[4] === s[4] ? i[4] + o : i[4], n || i[5] !== s[5] ? i[5] : i[5] + o, n && i[1] === s[1] ? i[1] + o : i[1], n || i[2] !== s[2] ? i[2] : i[2] + o)) : s = null, s
            },
            addPlotBand: function(t) {
                return this.addPlotBandOrLine(t, "plotBands")
            },
            addPlotLine: function(t) {
                return this.addPlotBandOrLine(t, "plotLines")
            },
            addPlotBandOrLine: function(t, e) {
                var i = new Me.PlotLineOrBand(this, t).render(),
                    s = this.userOptions;
                return i && (e && (s[e] = s[e] || [], s[e].push(t)), this.plotLinesAndBands.push(i)), i
            },
            removePlotBandOrLine: function(t) {
                for (var e = this.plotLinesAndBands, i = this.options, s = this.userOptions, n = e.length; n--;) e[n].id === t && e[n].destroy();
                Ce([i.plotLines || [], s.plotLines || [], i.plotBands || [], s.plotBands || []], function(e) {
                    for (n = e.length; n--;) e[n].id === t && Le(e, e[n])
                })
            },
            removePlotBand: function(t) {
                this.removePlotBandOrLine(t)
            },
            removePlotLine: function(t) {
                this.removePlotBandOrLine(t)
            }
        }), ze = (Ie = t).dateFormat, Ee = Ie.each, Be = Ie.extend, Re = Ie.format, Ge = Ie.isNumber, We = Ie.map, He = Ie.merge, Ne = Ie.pick, Xe = Ie.splat, Ye = Ie.syncTimeout, Fe = Ie.timeUnits, Ie.Tooltip = function() {
            this.init.apply(this, arguments)
        }, Ie.Tooltip.prototype = {
            init: function(t, e) {
                this.chart = t, this.options = e, this.crosshairs = [], this.now = {
                    x: 0,
                    y: 0
                }, this.isHidden = !0, this.split = e.split && !t.inverted, this.shared = e.shared || this.split
            },
            cleanSplit: function(t) {
                Ee(this.chart.series, function(e) {
                    var i = e && e.tt;
                    i && (!i.isActive || t ? e.tt = i.destroy() : i.isActive = !1)
                })
            },
            getLabel: function() {
                var t = this.chart.renderer,
                    e = this.options;
                return this.label || (this.split ? this.label = t.g("tooltip") : (this.label = t.label("", 0, 0, e.shape || "callout", null, null, e.useHTML, null, "tooltip").attr({
                    padding: e.padding,
                    r: e.borderRadius
                }), this.label.attr({
                    fill: e.backgroundColor,
                    "stroke-width": e.borderWidth
                }).css(e.style).shadow(e.shadow)), this.label.attr({
                    zIndex: 8
                }).add()), this.label
            },
            update: function(t) {
                this.destroy(), He(!0, this.chart.options.tooltip.userOptions, t), this.init(this.chart, He(!0, this.options, t))
            },
            destroy: function() {
                this.label && (this.label = this.label.destroy()), this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()), clearTimeout(this.hideTimer), clearTimeout(this.tooltipTimeout)
            },
            move: function(t, e, i, s) {
                var n = this,
                    o = n.now,
                    r = !1 !== n.options.animation && !n.isHidden && (1 < Math.abs(t - o.x) || 1 < Math.abs(e - o.y)),
                    a = n.followPointer || 1 < n.len;
                Be(o, {
                    x: r ? (2 * o.x + t) / 3 : t,
                    y: r ? (o.y + e) / 2 : e,
                    anchorX: a ? void 0 : r ? (2 * o.anchorX + i) / 3 : i,
                    anchorY: a ? void 0 : r ? (o.anchorY + s) / 2 : s
                }), n.getLabel().attr(o), r && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                    n && n.move(t, e, i, s)
                }, 32))
            },
            hide: function(t) {
                var e = this;
                clearTimeout(this.hideTimer), t = Ne(t, this.options.hideDelay, 500), this.isHidden || (this.hideTimer = Ye(function() {
                    e.getLabel()[t ? "fadeOut" : "hide"](), e.isHidden = !0
                }, t))
            },
            getAnchor: function(t, e) {
                var i, s, n, o = this.chart,
                    r = o.inverted,
                    a = o.plotTop,
                    h = o.plotLeft,
                    l = 0,
                    c = 0;
                return i = (t = Xe(t))[0].tooltipPos, this.followPointer && e && (void 0 === e.chartX && (e = o.pointer.normalize(e)), i = [e.chartX - o.plotLeft, e.chartY - a]), i || (Ee(t, function(t) {
                    s = t.series.yAxis, n = t.series.xAxis, l += t.plotX + (!r && n ? n.left - h : 0), c += (t.plotLow ? (t.plotLow + t.plotHigh) / 2 : t.plotY) + (!r && s ? s.top - a : 0)
                }), l /= t.length, c /= t.length, i = [r ? o.plotWidth - c : l, this.shared && !r && 1 < t.length && e ? e.chartY - a : r ? o.plotHeight - l : c]), We(i, Math.round)
            },
            getPosition: function(t, e, i) {
                var s, n = this.chart,
                    o = this.distance,
                    r = {},
                    a = i.h || 0,
                    h = ["y", n.chartHeight, e, i.plotY + n.plotTop, n.plotTop, n.plotTop + n.plotHeight],
                    l = ["x", n.chartWidth, t, i.plotX + n.plotLeft, n.plotLeft, n.plotLeft + n.plotWidth],
                    c = !this.followPointer && Ne(i.ttBelow, !n.inverted == !!i.negative),
                    d = function(t) {
                        var e = h;
                        h = l, l = e, s = t
                    },
                    p = function() {
                        !1 !== function(t, e, i, s, n, h) {
                            var l = i < s - o,
                                d = s + o + i < e,
                                p = s - o - i;
                            if (s += o, c && d) r[t] = s;
                            else if (!c && l) r[t] = p;
                            else if (l) r[t] = Math.min(h - i, 0 > p - a ? p : p - a);
                            else {
                                if (!d) return !1;
                                r[t] = Math.max(n, s + a + i > e ? s : s + a)
                            }
                        }.apply(0, h) ? !1 !== function(t, e, i, s) {
                            var n;
                            return s < o || s > e - o ? n = !1 : r[t] = s < i / 2 ? 1 : s > e - i / 2 ? e - i - 2 : s - i / 2, n
                        }.apply(0, l) || s || (d(!0), p()) : s ? r.x = r.y = 0 : (d(!0), p())
                    };
                return (n.inverted || 1 < this.len) && d(), p(), r
            },
            defaultFormatter: function(t) {
                var e, i = this.points || Xe(this);
                return (e = (e = [t.tooltipFooterHeaderFormatter(i[0])]).concat(t.bodyFormatter(i))).push(t.tooltipFooterHeaderFormatter(i[0], !0)), e
            },
            refresh: function(t, e) {
                var i, s, n, o, r = this.options,
                    a = t,
                    h = {},
                    l = [];
                i = r.formatter || this.defaultFormatter, h = this.shared, clearTimeout(this.hideTimer), this.followPointer = Xe(a)[0].series.tooltipOptions.followPointer, e = (n = this.getAnchor(a, e))[0], s = n[1], !h || a.series && a.series.noSharedTooltip ? h = a.getLabelConfig() : (Ee(a, function(t) {
                    t.setState("hover"), l.push(t.getLabelConfig())
                }), (h = {
                    x: a[0].category,
                    y: a[0].y
                }).points = l, a = a[0]), this.len = l.length, h = i.call(h, this), o = a.series, this.distance = Ne(o.tooltipOptions.distance, 16), !1 === h ? this.hide() : (i = this.getLabel(), this.isHidden && i.attr({
                    opacity: 1
                }).show(), this.split ? this.renderSplit(h, t) : (r.style.width || i.css({
                    width: this.chart.spacingBox.width
                }), i.attr({
                    text: h && h.join ? h.join("") : h
                }), i.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + Ne(a.colorIndex, o.colorIndex)), i.attr({
                    stroke: r.borderColor || a.color || o.color || "#666666"
                }), this.updatePosition({
                    plotX: e,
                    plotY: s,
                    negative: a.negative,
                    ttBelow: a.ttBelow,
                    h: n[2] || 0
                })), this.isHidden = !1)
            },
            renderSplit: function(t, e) {
                var i, s = this,
                    n = [],
                    o = this.chart,
                    r = o.renderer,
                    a = !0,
                    h = this.options,
                    l = this.getLabel();
                Ee(t.slice(0, e.length + 1), function(t, c) {
                    var d = (c = e[c - 1] || {
                            isHeader: !0,
                            plotX: e[0].plotX
                        }).series || s,
                        p = d.tt,
                        u = c.series || {},
                        f = "highcharts-color-" + Ne(c.colorIndex, u.colorIndex, "none");
                    p || (d.tt = p = r.label(null, null, null, "callout").addClass("highcharts-tooltip-box " + f).attr({
                        padding: h.padding,
                        r: h.borderRadius,
                        fill: h.backgroundColor,
                        stroke: c.color || u.color || "#333333",
                        "stroke-width": h.borderWidth
                    }).add(l)), p.isActive = !0, p.attr({
                        text: t
                    }), p.css(h.style), u = (t = p.getBBox()).width + p.strokeWidth(), c.isHeader ? (i = t.height, u = Math.max(0, Math.min(c.plotX + o.plotLeft - u / 2, o.chartWidth - u))) : u = c.plotX + o.plotLeft - Ne(h.distance, 16) - u, 0 > u && (a = !1), t = (c.series && c.series.yAxis && c.series.yAxis.pos) + (c.plotY || 0), t -= o.plotTop, n.push({
                        target: c.isHeader ? o.plotHeight + i : t,
                        rank: c.isHeader ? 1 : 0,
                        size: d.tt.getBBox().height + 1,
                        point: c,
                        x: u,
                        tt: p
                    })
                }), this.cleanSplit(), Ie.distribute(n, o.plotHeight + i), Ee(n, function(t) {
                    var e = t.point,
                        i = e.series;
                    t.tt.attr({
                        visibility: void 0 === t.pos ? "hidden" : "inherit",
                        x: a || e.isHeader ? t.x : e.plotX + o.plotLeft + Ne(h.distance, 16),
                        y: t.pos + o.plotTop,
                        anchorX: e.isHeader ? e.plotX + o.plotLeft : e.plotX + i.xAxis.pos,
                        anchorY: e.isHeader ? t.pos + o.plotTop - 15 : e.plotY + i.yAxis.pos
                    })
                })
            },
            updatePosition: function(t) {
                var e = this.chart,
                    i = this.getLabel();
                i = (this.options.positioner || this.getPosition).call(this, i.width, i.height, t), this.move(Math.round(i.x), Math.round(i.y || 0), t.plotX + e.plotLeft, t.plotY + e.plotTop)
            },
            getDateFormat: function(t, e, i, s) {
                var n, o, r = ze("%m-%d %H:%M:%S.%L", e),
                    a = {
                        millisecond: 15,
                        second: 12,
                        minute: 9,
                        hour: 6,
                        day: 3
                    },
                    h = "millisecond";
                for (o in Fe) {
                    if (t === Fe.week && +ze("%w", e) === i && "00:00:00.000" === r.substr(6)) {
                        o = "week";
                        break
                    }
                    if (Fe[o] > t) {
                        o = h;
                        break
                    }
                    if (a[o] && r.substr(a[o]) !== "01-01 00:00:00.000".substr(a[o])) break;
                    "week" !== o && (h = o)
                }
                return o && (n = s[o]), n
            },
            getXDateFormat: function(t, e, i) {
                e = e.dateTimeLabelFormats;
                var s = i && i.closestPointRange;
                return (s ? this.getDateFormat(s, t.x, i.options.startOfWeek, e) : e.day) || e.year
            },
            tooltipFooterHeaderFormatter: function(t, e) {
                var i = e ? "footer" : "header",
                    s = (e = t.series).tooltipOptions,
                    n = s.xDateFormat,
                    o = e.xAxis,
                    r = o && "datetime" === o.options.type && Ge(t.key);
                return i = s[i + "Format"], r && !n && (n = this.getXDateFormat(t, s, o)), r && n && (i = i.replace("{point.key}", "{point.key:" + n + "}")), Re(i, {
                    point: t,
                    series: e
                })
            },
            bodyFormatter: function(t) {
                return We(t, function(t) {
                    var e = t.series.tooltipOptions;
                    return (e.pointFormatter || t.point.tooltipFormatter).call(t.point, e.pointFormat)
                })
            }
        }, je = (Ve = t).addEvent, Ue = Ve.attr, _e = Ve.charts, Ke = Ve.color, Ze = Ve.css, qe = Ve.defined, $e = Ve.doc, Je = Ve.each, Qe = Ve.extend, ti = Ve.fireEvent, ei = Ve.offset, ii = Ve.pick, si = Ve.removeEvent, ni = Ve.splat, oi = Ve.Tooltip, ri = Ve.win, Ve.Pointer = function(t, e) {
            this.init(t, e)
        }, Ve.Pointer.prototype = {
            init: function(t, e) {
                this.options = e, this.chart = t, this.runChartClick = e.chart.events && !!e.chart.events.click, this.pinchDown = [], this.lastValidTouch = {}, oi && e.tooltip.enabled && (t.tooltip = new oi(t, e.tooltip), this.followTouchMove = ii(e.tooltip.followTouchMove, !0)), this.setDOMEvents()
            },
            zoomOption: function(t) {
                var e = (s = this.chart).options.chart,
                    i = e.zoomType || "",
                    s = s.inverted;
                /touch/.test(t.type) && (i = ii(e.pinchType, i)), this.zoomX = t = /x/.test(i), this.zoomY = i = /y/.test(i), this.zoomHor = t && !s || i && s, this.zoomVert = i && !s || t && s, this.hasZoom = t || i
            },
            normalize: function(t, e) {
                var i, s;
                return (t = t || ri.event).target || (t.target = t.srcElement), s = t.touches ? t.touches.length ? t.touches.item(0) : t.changedTouches[0] : t, e || (this.chartPosition = e = ei(this.chart.container)), void 0 === s.pageX ? (i = Math.max(t.x, t.clientX - e.left), e = t.y) : (i = s.pageX - e.left, e = s.pageY - e.top), Qe(t, {
                    chartX: Math.round(i),
                    chartY: Math.round(e)
                })
            },
            getCoordinates: function(t) {
                var e = {
                    xAxis: [],
                    yAxis: []
                };
                return Je(this.chart.axes, function(i) {
                    e[i.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: i,
                        value: i.toValue(t[i.horiz ? "chartX" : "chartY"])
                    })
                }), e
            },
            getKDPoints: function(t, e, i) {
                var s, n, o, r = [];
                if (Je(t, function(t) {
                        s = t.noSharedTooltip && e, n = !e && t.directTouch, t.visible && !n && ii(t.options.enableMouseTracking, !0) && (o = t.searchPoint(i, !s && 0 > t.options.findNearestPointBy.indexOf("y"))) && o.series && r.push(o)
                    }), r.sort(function(t, i) {
                        var s = t.distX - i.distX,
                            n = t.dist - i.dist,
                            o = (i.series.group && i.series.group.zIndex) - (t.series.group && t.series.group.zIndex);
                        return 0 !== s && e ? s : 0 !== n ? n : 0 !== o ? o : t.series.index > i.series.index ? -1 : 1
                    }), e && r[0] && !r[0].series.noSharedTooltip)
                    for (t = r.length; t--;)(r[t].x !== r[0].x || r[t].series.noSharedTooltip) && r.splice(t, 1);
                return r
            },
            getPointFromEvent: function(t) {
                t = t.target;
                for (var e; t && !e;) e = t.point, t = t.parentNode;
                return e
            },
            getChartCoordinatesFromPoint: function(t, e) {
                var i = (s = t.series).xAxis,
                    s = s.yAxis;
                if (i && s) return e ? {
                    chartX: i.len + i.pos - t.clientX,
                    chartY: s.len + s.pos - t.plotY
                } : {
                    chartX: t.clientX + i.pos,
                    chartY: t.plotY + s.pos
                }
            },
            getHoverData: function(t, e, i, s, n, o) {
                var r = t,
                    a = e;
                r = n ? i : [a], s = !(!s || !t), e = a && !a.stickyTracking;
                var h, l = function(t, e) {
                    return 0 === e
                };
                return s ? l = function(e) {
                    return e === t
                } : e ? l = function(t) {
                    return t.series === a
                } : r = Ve.grep(i, function(t) {
                    return t.stickyTracking
                }), h = s && !n ? [t] : this.getKDPoints(r, n, o), a = (r = Ve.find(h, l)) && r.series, s || e || !n || (h = this.getKDPoints(i, n, o)), h.sort(function(t, e) {
                    return t.series.index - e.series.index
                }), {
                    hoverPoint: r,
                    hoverSeries: a,
                    hoverPoints: h
                }
            },
            runPointActions: function(t, e) {
                var i, s, n = this.chart,
                    o = n.tooltip,
                    r = !!o && o.shared,
                    a = (h = e || n.hoverPoint) && h.series || n.hoverSeries,
                    h = (e = this.getHoverData(h, a, n.series, !!e || a && a.directTouch && this.isDirectTouch, r, t)).hoverPoint;
                i = (a = e.hoverSeries) && a.tooltipOptions.followPointer, s = (r = r && h && !h.series.noSharedTooltip) ? e.hoverPoints : h ? [h] : [], h && (h !== n.hoverPoint || o && o.isHidden) ? (Je(n.hoverPoints || [], function(t) {
                    -1 === Ve.inArray(t, s) && t.setState()
                }), Je(s || [], function(t) {
                    t.setState("hover")
                }), n.hoverSeries !== a && a.onMouseOver(), n.hoverPoint && n.hoverPoint.firePointEvent("mouseOut"), h.firePointEvent("mouseOver"), n.hoverPoints = s, n.hoverPoint = h, o && o.refresh(r ? s : h, t)) : i && o && !o.isHidden && (a = o.getAnchor([{}], t), o.updatePosition({
                    plotX: a[0],
                    plotY: a[1]
                })), this.unDocMouseMove || (this.unDocMouseMove = je($e, "mousemove", function(t) {
                    var e = _e[Ve.hoverChartIndex];
                    e && e.pointer.onDocumentMouseMove(t)
                })), Je(n.axes, function(e) {
                    ii(e.crosshair.snap, !0) ? Ve.find(s, function(t) {
                        return t.series[e.coll] === e
                    }) ? e.drawCrosshair(t, h) : e.hideCrosshair() : e.drawCrosshair(t)
                })
            },
            reset: function(t, e) {
                var i = this.chart,
                    s = i.hoverSeries,
                    n = i.hoverPoint,
                    o = i.hoverPoints,
                    r = i.tooltip,
                    a = r && r.shared ? o : n;
                t && a && Je(ni(a), function(e) {
                    e.series.isCartesian && void 0 === e.plotX && (t = !1)
                }), t ? r && a && (r.refresh(a), n && (n.setState(n.state, !0), Je(i.axes, function(t) {
                    t.crosshair && t.drawCrosshair(null, n)
                }))) : (n && n.onMouseOut(), o && Je(o, function(t) {
                    t.setState()
                }), s && s.onMouseOut(), r && r.hide(e), this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()), Je(i.axes, function(t) {
                    t.hideCrosshair()
                }), this.hoverX = i.hoverPoints = i.hoverPoint = null)
            },
            scaleGroups: function(t, e) {
                var i, s = this.chart;
                Je(s.series, function(n) {
                    i = t || n.getPlotBox(), n.xAxis && n.xAxis.zoomEnabled && n.group && (n.group.attr(i), n.markerGroup && (n.markerGroup.attr(i), n.markerGroup.clip(e ? s.clipRect : null)), n.dataLabelsGroup && n.dataLabelsGroup.attr(i))
                }), s.clipRect.attr(e || s.clipBox)
            },
            dragStart: function(t) {
                var e = this.chart;
                e.mouseIsDown = t.type, e.cancelClick = !1, e.mouseDownX = this.mouseDownX = t.chartX, e.mouseDownY = this.mouseDownY = t.chartY
            },
            drag: function(t) {
                var e, i = this.chart,
                    s = i.options.chart,
                    n = t.chartX,
                    o = t.chartY,
                    r = this.zoomHor,
                    a = this.zoomVert,
                    h = i.plotLeft,
                    l = i.plotTop,
                    c = i.plotWidth,
                    d = i.plotHeight,
                    p = this.selectionMarker,
                    u = this.mouseDownX,
                    f = this.mouseDownY,
                    g = s.panKey && t[s.panKey + "Key"];
                p && p.touch || (n < h ? n = h : n > h + c && (n = h + c), o < l ? o = l : o > l + d && (o = l + d), this.hasDragged = Math.sqrt(Math.pow(u - n, 2) + Math.pow(f - o, 2)), 10 < this.hasDragged && (e = i.isInsidePlot(u - h, f - l), i.hasCartesianSeries && (this.zoomX || this.zoomY) && e && !g && !p && (this.selectionMarker = p = i.renderer.rect(h, l, r ? 1 : c, a ? 1 : d, 0).attr({
                    fill: s.selectionMarkerFill || Ke("#335cad").setOpacity(.25).get(),
                    class: "highcharts-selection-marker",
                    zIndex: 7
                }).add()), p && r && (n -= u, p.attr({
                    width: Math.abs(n),
                    x: (0 < n ? 0 : n) + u
                })), p && a && (n = o - f, p.attr({
                    height: Math.abs(n),
                    y: (0 < n ? 0 : n) + f
                })), e && !p && s.panning && i.pan(t, s.panning)))
            },
            drop: function(t) {
                var e = this,
                    i = this.chart,
                    s = this.hasPinched;
                if (this.selectionMarker) {
                    var n, o = {
                            originalEvent: t,
                            xAxis: [],
                            yAxis: []
                        },
                        r = this.selectionMarker,
                        a = r.attr ? r.attr("x") : r.x,
                        h = r.attr ? r.attr("y") : r.y,
                        l = r.attr ? r.attr("width") : r.width,
                        c = r.attr ? r.attr("height") : r.height;
                    (this.hasDragged || s) && (Je(i.axes, function(i) {
                        if (i.zoomEnabled && qe(i.min) && (s || e[{
                                xAxis: "zoomX",
                                yAxis: "zoomY"
                            } [i.coll]])) {
                            var r = i.horiz,
                                d = "touchend" === t.type ? i.minPixelPadding : 0,
                                p = i.toValue((r ? a : h) + d);
                            r = i.toValue((r ? a + l : h + c) - d), o[i.coll].push({
                                axis: i,
                                min: Math.min(p, r),
                                max: Math.max(p, r)
                            }), n = !0
                        }
                    }), n && ti(i, "selection", o, function(t) {
                        i.zoom(Qe(t, s ? {
                            animation: !1
                        } : null))
                    })), this.selectionMarker = this.selectionMarker.destroy(), s && this.scaleGroups()
                }
                i && (Ze(i.container, {
                    cursor: i._cursor
                }), i.cancelClick = 10 < this.hasDragged, i.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
            },
            onContainerMouseDown: function(t) {
                t = this.normalize(t), this.zoomOption(t), t.preventDefault && t.preventDefault(), this.dragStart(t)
            },
            onDocumentMouseUp: function(t) {
                _e[Ve.hoverChartIndex] && _e[Ve.hoverChartIndex].pointer.drop(t)
            },
            onDocumentMouseMove: function(t) {
                var e = this.chart,
                    i = this.chartPosition;
                t = this.normalize(t, i), !i || this.inClass(t.target, "highcharts-tracker") || e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || this.reset()
            },
            onContainerMouseLeave: function(t) {
                var e = _e[Ve.hoverChartIndex];
                e && (t.relatedTarget || t.toElement) && (e.pointer.reset(), e.pointer.chartPosition = null)
            },
            onContainerMouseMove: function(t) {
                var e = this.chart;
                qe(Ve.hoverChartIndex) && _e[Ve.hoverChartIndex] && _e[Ve.hoverChartIndex].mouseIsDown || (Ve.hoverChartIndex = e.index), (t = this.normalize(t)).returnValue = !1, "mousedown" === e.mouseIsDown && this.drag(t), !this.inClass(t.target, "highcharts-tracker") && !e.isInsidePlot(t.chartX - e.plotLeft, t.chartY - e.plotTop) || e.openMenu || this.runPointActions(t)
            },
            inClass: function(t, e) {
                for (var i; t;) {
                    if (i = Ue(t, "class")) {
                        if (-1 !== i.indexOf(e)) return !0;
                        if (-1 !== i.indexOf("highcharts-container")) return !1
                    }
                    t = t.parentNode
                }
            },
            onTrackerMouseOut: function(t) {
                var e = this.chart.hoverSeries;
                t = t.relatedTarget || t.toElement, this.isDirectTouch = !1, !e || !t || e.stickyTracking || this.inClass(t, "highcharts-tooltip") || this.inClass(t, "highcharts-series-" + e.index) && this.inClass(t, "highcharts-tracker") || e.onMouseOut()
            },
            onContainerClick: function(t) {
                var e = this.chart,
                    i = e.hoverPoint,
                    s = e.plotLeft,
                    n = e.plotTop;
                t = this.normalize(t), e.cancelClick || (i && this.inClass(t.target, "highcharts-tracker") ? (ti(i.series, "click", Qe(t, {
                    point: i
                })), e.hoverPoint && i.firePointEvent("click", t)) : (Qe(t, this.getCoordinates(t)), e.isInsidePlot(t.chartX - s, t.chartY - n) && ti(e, "click", t)))
            },
            setDOMEvents: function() {
                var t = this,
                    e = t.chart.container;
                e.onmousedown = function(e) {
                    t.onContainerMouseDown(e)
                }, e.onmousemove = function(e) {
                    t.onContainerMouseMove(e)
                }, e.onclick = function(e) {
                    t.onContainerClick(e)
                }, je(e, "mouseleave", t.onContainerMouseLeave), 1 === Ve.chartCount && je($e, "mouseup", t.onDocumentMouseUp), Ve.hasTouch && (e.ontouchstart = function(e) {
                    t.onContainerTouchStart(e)
                }, e.ontouchmove = function(e) {
                    t.onContainerTouchMove(e)
                }, 1 === Ve.chartCount && je($e, "touchend", t.onDocumentTouchEnd))
            },
            destroy: function() {
                var t = this;
                t.unDocMouseMove && t.unDocMouseMove(), si(t.chart.container, "mouseleave", t.onContainerMouseLeave), Ve.chartCount || (si($e, "mouseup", t.onDocumentMouseUp), si($e, "touchend", t.onDocumentTouchEnd)), clearInterval(t.tooltipTimeout), Ve.objectEach(t, function(e, i) {
                    t[i] = null
                })
            }
        }, hi = (ai = t).charts, li = ai.each, ci = ai.extend, di = ai.map, pi = ai.noop, ui = ai.pick, ci(ai.Pointer.prototype, {
            pinchTranslate: function(t, e, i, s, n, o) {
                this.zoomHor && this.pinchTranslateDirection(!0, t, e, i, s, n, o), this.zoomVert && this.pinchTranslateDirection(!1, t, e, i, s, n, o)
            },
            pinchTranslateDirection: function(t, e, i, s, n, o, r, a) {
                var h, l, c, d = this.chart,
                    p = t ? "x" : "y",
                    u = t ? "X" : "Y",
                    f = "chart" + u,
                    g = t ? "width" : "height",
                    m = d["plot" + (t ? "Left" : "Top")],
                    x = a || 1,
                    v = d.inverted,
                    y = d.bounds[t ? "h" : "v"],
                    b = 1 === e.length,
                    k = e[0][f],
                    M = i[0][f],
                    w = !b && e[1][f],
                    S = !b && i[1][f];
                (i = function() {
                    !b && 20 < Math.abs(k - w) && (x = a || Math.abs(M - S) / Math.abs(k - w)), l = (m - M) / x + k, h = d["plot" + (t ? "Width" : "Height")] / x
                })(), (e = l) < y.min ? (e = y.min, c = !0) : e + h > y.max && (e = y.max - h, c = !0), c ? (M -= .8 * (M - r[p][0]), b || (S -= .8 * (S - r[p][1])), i()) : r[p] = [M, S], v || (o[p] = l - m, o[g] = h), o = v ? 1 / x : x, n[g] = h, n[p] = e, s[v ? t ? "scaleY" : "scaleX" : "scale" + u] = x, s["translate" + u] = o * m + (M - o * k)
            },
            pinch: function(t) {
                var e = this,
                    i = e.chart,
                    s = e.pinchDown,
                    n = t.touches,
                    o = n.length,
                    r = e.lastValidTouch,
                    a = e.hasZoom,
                    h = e.selectionMarker,
                    l = {},
                    c = 1 === o && (e.inClass(t.target, "highcharts-tracker") && i.runTrackerClick || e.runChartClick),
                    d = {};
                1 < o && (e.initiated = !0), a && e.initiated && !c && t.preventDefault(), di(n, function(t) {
                    return e.normalize(t)
                }), "touchstart" === t.type ? (li(n, function(t, e) {
                    s[e] = {
                        chartX: t.chartX,
                        chartY: t.chartY
                    }
                }), r.x = [s[0].chartX, s[1] && s[1].chartX], r.y = [s[0].chartY, s[1] && s[1].chartY], li(i.axes, function(t) {
                    if (t.zoomEnabled) {
                        var e = i.bounds[t.horiz ? "h" : "v"],
                            s = t.minPixelPadding,
                            n = t.toPixels(ui(t.options.min, t.dataMin)),
                            o = t.toPixels(ui(t.options.max, t.dataMax)),
                            r = Math.max(n, o);
                        e.min = Math.min(t.pos, Math.min(n, o) - s), e.max = Math.max(t.pos + t.len, r + s)
                    }
                }), e.res = !0) : e.followTouchMove && 1 === o ? this.runPointActions(e.normalize(t)) : s.length && (h || (e.selectionMarker = h = ci({
                    destroy: pi,
                    touch: !0
                }, i.plotBox)), e.pinchTranslate(s, n, l, h, d, r), e.hasPinched = a, e.scaleGroups(l, d), e.res && (e.res = !1, this.reset(!1, 0)))
            },
            touch: function(t, e) {
                var i, s = this.chart;
                s.index !== ai.hoverChartIndex && this.onContainerMouseLeave({
                    relatedTarget: !0
                }), ai.hoverChartIndex = s.index, 1 === t.touches.length ? (t = this.normalize(t), s.isInsidePlot(t.chartX - s.plotLeft, t.chartY - s.plotTop) && !s.openMenu ? (e && this.runPointActions(t), "touchmove" === t.type && (i = !!(e = this.pinchDown)[0] && 4 <= Math.sqrt(Math.pow(e[0].chartX - t.chartX, 2) + Math.pow(e[0].chartY - t.chartY, 2))), ui(i, !0) && this.pinch(t)) : e && this.reset()) : 2 === t.touches.length && this.pinch(t)
            },
            onContainerTouchStart: function(t) {
                this.zoomOption(t), this.touch(t, !0)
            },
            onContainerTouchMove: function(t) {
                this.touch(t)
            },
            onDocumentTouchEnd: function(t) {
                hi[ai.hoverChartIndex] && hi[ai.hoverChartIndex].pointer.drop(t)
            }
        }),
        function(t) {
            var e = t.addEvent,
                i = t.charts,
                s = t.css,
                n = t.doc,
                o = t.extend,
                r = t.noop,
                a = t.Pointer,
                h = t.removeEvent,
                l = t.win,
                c = t.wrap;
            if (!t.hasTouch && (l.PointerEvent || l.MSPointerEvent)) {
                var d = {},
                    p = !!l.PointerEvent,
                    u = function(e, s, n, o) {
                        var a;
                        "touch" !== e.pointerType && e.pointerType !== e.MSPOINTER_TYPE_TOUCH || !i[t.hoverChartIndex] || (o(e), (o = i[t.hoverChartIndex].pointer)[s]({
                            type: n,
                            target: e.currentTarget,
                            preventDefault: r,
                            touches: (a = [], a.item = function(t) {
                                return this[t]
                            }, t.objectEach(d, function(t) {
                                a.push({
                                    pageX: t.pageX,
                                    pageY: t.pageY,
                                    target: t.target
                                })
                            }), a)
                        }))
                    };
                o(a.prototype, {
                    onContainerPointerDown: function(t) {
                        u(t, "onContainerTouchStart", "touchstart", function(t) {
                            d[t.pointerId] = {
                                pageX: t.pageX,
                                pageY: t.pageY,
                                target: t.currentTarget
                            }
                        })
                    },
                    onContainerPointerMove: function(t) {
                        u(t, "onContainerTouchMove", "touchmove", function(t) {
                            d[t.pointerId] = {
                                pageX: t.pageX,
                                pageY: t.pageY
                            }, d[t.pointerId].target || (d[t.pointerId].target = t.currentTarget)
                        })
                    },
                    onDocumentPointerUp: function(t) {
                        u(t, "onDocumentTouchEnd", "touchend", function(t) {
                            delete d[t.pointerId]
                        })
                    },
                    batchMSEvents: function(t) {
                        t(this.chart.container, p ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown), t(this.chart.container, p ? "pointermove" : "MSPointerMove", this.onContainerPointerMove), t(n, p ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
                    }
                }), c(a.prototype, "init", function(t, e, i) {
                    t.call(this, e, i), this.hasZoom && s(e.container, {
                        "-ms-touch-action": "none",
                        "touch-action": "none"
                    })
                }), c(a.prototype, "setDOMEvents", function(t) {
                    t.apply(this), (this.hasZoom || this.followTouchMove) && this.batchMSEvents(e)
                }), c(a.prototype, "destroy", function(t) {
                    this.batchMSEvents(h), t.call(this)
                })
            }
        }(t), gi = (fi = t).addEvent, mi = fi.css, xi = fi.discardElement, vi = fi.defined, yi = fi.each, bi = fi.isFirefox, ki = fi.marginNames, Mi = fi.merge, wi = fi.pick, Si = fi.setAnimation, Ai = fi.stableSort, Ti = fi.win, Pi = fi.wrap, fi.Legend = function(t, e) {
            this.init(t, e)
        }, fi.Legend.prototype = {
            init: function(t, e) {
                this.chart = t, this.setOptions(e), e.enabled && (this.render(), gi(this.chart, "endResize", function() {
                    this.legend.positionCheckboxes()
                }))
            },
            setOptions: function(t) {
                var e = wi(t.padding, 8);
                this.options = t, this.itemStyle = t.itemStyle, this.itemHiddenStyle = Mi(this.itemStyle, t.itemHiddenStyle), this.itemMarginTop = t.itemMarginTop || 0, this.padding = e, this.initialItemY = e - 5, this.itemHeight = this.maxItemWidth = 0, this.symbolWidth = wi(t.symbolWidth, 16), this.pages = []
            },
            update: function(t, e) {
                var i = this.chart;
                this.setOptions(Mi(!0, this.options, t)), this.destroy(), i.isDirtyLegend = i.isDirtyBox = !0, wi(e, !0) && i.redraw()
            },
            colorizeItem: function(t, e) {
                t.legendGroup[e ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                var i = this.options,
                    s = t.legendItem,
                    n = t.legendLine,
                    o = t.legendSymbol,
                    r = this.itemHiddenStyle.color,
                    a = (i = e ? i.itemStyle.color : r, e && t.color || r),
                    h = t.options && t.options.marker,
                    l = {
                        fill: a
                    };
                s && s.css({
                    fill: i,
                    color: i
                }), n && n.attr({
                    stroke: a
                }), o && (h && o.isMarker && (l = t.pointAttribs(), e || fi.objectEach(l, function(t, e) {
                    l[e] = r
                })), o.attr(l))
            },
            positionItem: function(t) {
                var e = (i = this.options).symbolPadding,
                    i = !i.rtl,
                    s = (n = t._legendItemPos)[0],
                    n = n[1],
                    o = t.checkbox;
                (t = t.legendGroup) && t.element && t.translate(i ? s : this.legendWidth - s - 2 * e - 4, n), o && (o.x = s, o.y = n)
            },
            destroyItem: function(t) {
                var e = t.checkbox;
                yi(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(e) {
                    t[e] && (t[e] = t[e].destroy())
                }), e && xi(t.checkbox)
            },
            destroy: function() {
                function t(t) {
                    this[t] && (this[t] = this[t].destroy())
                }
                yi(this.getAllItems(), function(e) {
                    yi(["legendItem", "legendGroup"], t, e)
                }), yi("clipRect up down pager nav box title group".split(" "), t, this), this.display = null
            },
            positionCheckboxes: function(t) {
                var e, i = this.group && this.group.alignAttr,
                    s = this.clipHeight || this.legendHeight,
                    n = this.titleHeight;
                i && (e = i.translateY, yi(this.allItems, function(o) {
                    var r, a = o.checkbox;
                    a && (r = e + n + a.y + (t || 0) + 3, mi(a, {
                        left: i.translateX + o.checkboxOffset + a.x - 20 + "px",
                        top: r + "px",
                        display: r > e - 6 && r < e + s - 6 ? "" : "none"
                    }))
                }))
            },
            renderTitle: function() {
                var t = this.options,
                    e = this.padding,
                    i = t.title,
                    s = 0;
                i.text && (this.title || (this.title = this.chart.renderer.label(i.text, e - 3, e - 4, null, null, null, t.useHTML, null, "legend-title").attr({
                    zIndex: 1
                }).css(i.style).add(this.group)), s = (t = this.title.getBBox()).height, this.offsetWidth = t.width, this.contentGroup.attr({
                    translateY: s
                })), this.titleHeight = s
            },
            setText: function(t) {
                var e = this.options;
                t.legendItem.attr({
                    text: e.labelFormat ? fi.format(e.labelFormat, t) : e.labelFormatter.call(t)
                })
            },
            renderItem: function(t) {
                var e = this.chart,
                    i = e.renderer,
                    s = this.options,
                    n = "horizontal" === s.layout,
                    o = this.symbolWidth,
                    r = s.symbolPadding,
                    a = this.itemStyle,
                    h = this.itemHiddenStyle,
                    l = this.padding,
                    c = n ? wi(s.itemDistance, 20) : 0,
                    d = !s.rtl,
                    p = s.width,
                    u = s.itemMarginBottom || 0,
                    f = this.itemMarginTop,
                    g = t.legendItem,
                    m = !t.series,
                    x = !m && t.series.drawLegendSymbol ? t.series : t,
                    v = x.options,
                    y = this.createCheckboxForItem && v && v.showCheckbox,
                    b = (v = o + r + c + (y ? 20 : 0), s.useHTML),
                    k = t.options.className;
                g || (t.legendGroup = i.g("legend-item").addClass("highcharts-" + x.type + "-series highcharts-color-" + t.colorIndex + (k ? " " + k : "") + (m ? " highcharts-series-" + t.index : "")).attr({
                    zIndex: 1
                }).add(this.scrollGroup), t.legendItem = g = i.text("", d ? o + r : -r, this.baseline || 0, b).css(Mi(t.visible ? a : h)).attr({
                    align: d ? "left" : "right",
                    zIndex: 2
                }).add(t.legendGroup), this.baseline || (o = a.fontSize, this.fontMetrics = i.fontMetrics(o, g), this.baseline = this.fontMetrics.f + 3 + f, g.attr("y", this.baseline)), this.symbolHeight = s.symbolHeight || this.fontMetrics.f, x.drawLegendSymbol(this, t), this.setItemEvents && this.setItemEvents(t, g, b), y && this.createCheckboxForItem(t)), this.colorizeItem(t, t.visible), a.width || g.css({
                    width: (s.itemWidth || e.spacingBox.width) - v
                }), this.setText(t), i = g.getBBox(), a = t.checkboxOffset = s.itemWidth || t.legendItemWidth || i.width + v, this.itemHeight = i = Math.round(t.legendItemHeight || i.height || this.symbolHeight), n && this.itemX - l + a > (p || e.spacingBox.width - 2 * l - s.x) && (this.itemX = l, this.itemY += f + this.lastLineHeight + u, this.lastLineHeight = 0), this.maxItemWidth = Math.max(this.maxItemWidth, a), this.lastItemY = f + this.itemY + u, this.lastLineHeight = Math.max(i, this.lastLineHeight), t._legendItemPos = [this.itemX, this.itemY], n ? this.itemX += a : (this.itemY += f + i + u, this.lastLineHeight = i), this.offsetWidth = p || Math.max((n ? this.itemX - l - c : a) + l, this.offsetWidth)
            },
            getAllItems: function() {
                var t = [];
                return yi(this.chart.series, function(e) {
                    var i = e && e.options;
                    e && wi(i.showInLegend, !vi(i.linkedTo) && void 0, !0) && (t = t.concat(e.legendItems || ("point" === i.legendType ? e.data : e)))
                }), t
            },
            adjustMargins: function(t, e) {
                var i = this.chart,
                    s = this.options,
                    n = s.align.charAt(0) + s.verticalAlign.charAt(0) + s.layout.charAt(0);
                s.floating || yi([/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/], function(o, r) {
                    o.test(n) && !vi(t[r]) && (i[ki[r]] = Math.max(i[ki[r]], i.legend[(r + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][r] * s[r % 2 ? "x" : "y"] + wi(s.margin, 12) + e[r]))
                })
            },
            render: function() {
                var t, e, i, s, n = this,
                    o = n.chart,
                    r = o.renderer,
                    a = n.group,
                    h = n.box,
                    l = n.options,
                    c = n.padding;
                n.itemX = c, n.itemY = n.initialItemY, n.offsetWidth = 0, n.lastItemY = 0, a || (n.group = a = r.g("legend").attr({
                    zIndex: 7
                }).add(), n.contentGroup = r.g().attr({
                    zIndex: 1
                }).add(a), n.scrollGroup = r.g().add(n.contentGroup)), n.renderTitle(), t = n.getAllItems(), Ai(t, function(t, e) {
                    return (t.options && t.options.legendIndex || 0) - (e.options && e.options.legendIndex || 0)
                }), l.reversed && t.reverse(), n.allItems = t, n.display = e = !!t.length, n.lastLineHeight = 0, yi(t, function(t) {
                    n.renderItem(t)
                }), i = (l.width || n.offsetWidth) + c, s = n.lastItemY + n.lastLineHeight + n.titleHeight, s = n.handleOverflow(s), s += c, h || (n.box = h = r.rect().addClass("highcharts-legend-box").attr({
                    r: l.borderRadius
                }).add(a), h.isNew = !0), h.attr({
                    stroke: l.borderColor,
                    "stroke-width": l.borderWidth || 0,
                    fill: l.backgroundColor || "none"
                }).shadow(l.shadow), 0 < i && 0 < s && (h[h.isNew ? "attr" : "animate"](h.crisp({
                    x: 0,
                    y: 0,
                    width: i,
                    height: s
                }, h.strokeWidth())), h.isNew = !1), h[e ? "show" : "hide"](), n.legendWidth = i, n.legendHeight = s, yi(t, function(t) {
                    n.positionItem(t)
                }), e && a.align(Mi(l, {
                    width: i,
                    height: s
                }), !0, "spacingBox"), o.isResizing || this.positionCheckboxes()
            },
            handleOverflow: function(t) {
                var e, i, s = this,
                    n = (h = this.chart).renderer,
                    o = this.options,
                    r = o.y,
                    a = this.padding,
                    h = h.spacingBox.height + ("top" === o.verticalAlign ? -r : r) - a,
                    l = (r = o.maxHeight, this.clipRect),
                    c = o.navigation,
                    d = wi(c.animation, !0),
                    p = c.arrowSize || 12,
                    u = this.nav,
                    f = this.pages,
                    g = this.allItems,
                    m = function(t) {
                        "number" == typeof t ? l.attr({
                            height: t
                        }) : l && (s.clipRect = l.destroy(), s.contentGroup.clip()), s.contentGroup.div && (s.contentGroup.div.style.clip = t ? "rect(" + a + "px,9999px," + (a + t) + "px,0)" : "auto")
                    };
                return "horizontal" !== o.layout || "middle" === o.verticalAlign || o.floating || (h /= 2), r && (h = Math.min(h, r)), f.length = 0, t > h && !1 !== c.enabled ? (this.clipHeight = e = Math.max(h - 20 - this.titleHeight - a, 0), this.currentPage = wi(this.currentPage, 1), this.fullHeight = t, yi(g, function(t, s) {
                    var n = t._legendItemPos[1];
                    t = Math.round(t.legendItem.getBBox().height);
                    var o = f.length;
                    (!o || n - f[o - 1] > e && (i || n) !== f[o - 1]) && (f.push(i || n), o++), s === g.length - 1 && n + t - f[o - 1] > e && f.push(n), n !== i && (i = n)
                }), l || (l = s.clipRect = n.clipRect(0, a, 9999, 0), s.contentGroup.clip(l)), m(e), u || (this.nav = u = n.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = n.symbol("triangle", 0, 0, p, p).on("click", function() {
                    s.scroll(-1, d)
                }).add(u), this.pager = n.text("", 15, 10).addClass("highcharts-legend-navigation").css(c.style).add(u), this.down = n.symbol("triangle-down", 0, 0, p, p).on("click", function() {
                    s.scroll(1, d)
                }).add(u)), s.scroll(0), t = h) : u && (m(), this.nav = u.destroy(), this.scrollGroup.attr({
                    translateY: 1
                }), this.clipHeight = 0), t
            },
            scroll: function(t, e) {
                var i = this.pages,
                    s = i.length;
                t = this.currentPage + t;
                var n = this.clipHeight,
                    o = this.options.navigation,
                    r = this.pager,
                    a = this.padding;
                t > s && (t = s), 0 < t && (void 0 !== e && Si(e, this.chart), this.nav.attr({
                    translateX: a,
                    translateY: n + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                }), this.up.attr({
                    class: 1 === t ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                }), r.attr({
                    text: t + "/" + s
                }), this.down.attr({
                    x: 18 + this.pager.getBBox().width,
                    class: t === s ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                }), this.up.attr({
                    fill: 1 === t ? o.inactiveColor : o.activeColor
                }).css({
                    cursor: 1 === t ? "default" : "pointer"
                }), this.down.attr({
                    fill: t === s ? o.inactiveColor : o.activeColor
                }).css({
                    cursor: t === s ? "default" : "pointer"
                }), e = -i[t - 1] + this.initialItemY, this.scrollGroup.animate({
                    translateY: e
                }), this.currentPage = t, this.positionCheckboxes(e))
            }
        }, fi.LegendSymbolMixin = {
            drawRectangle: function(t, e) {
                var i = t.symbolHeight,
                    s = t.options.squareSymbol;
                e.legendSymbol = this.chart.renderer.rect(s ? (t.symbolWidth - i) / 2 : 0, t.baseline - i + 1, s ? i : t.symbolWidth, i, wi(t.options.symbolRadius, i / 2)).addClass("highcharts-point").attr({
                    zIndex: 3
                }).add(e.legendGroup)
            },
            drawLineMarker: function(t) {
                var e, i = this.options,
                    s = i.marker,
                    n = t.symbolWidth,
                    o = t.symbolHeight,
                    r = o / 2,
                    a = this.chart.renderer,
                    h = this.legendGroup;
                t = t.baseline - Math.round(.3 * t.fontMetrics.b), e = {
                    "stroke-width": i.lineWidth || 0
                }, i.dashStyle && (e.dashstyle = i.dashStyle), this.legendLine = a.path(["M", 0, t, "L", n, t]).addClass("highcharts-graph").attr(e).add(h), s && !1 !== s.enabled && (i = Math.min(wi(s.radius, r), r), 0 === this.symbol.indexOf("url") && (s = Mi(s, {
                    width: o,
                    height: o
                }), i = 0), this.legendSymbol = s = a.symbol(this.symbol, n / 2 - i, t - i, 2 * i, 2 * i, s).addClass("highcharts-point").add(h), s.isMarker = !0)
            }
        }, (/Trident\/7\.0/.test(Ti.navigator.userAgent) || bi) && Pi(fi.Legend.prototype, "positionItem", function(t, e) {
            var i = this,
                s = function() {
                    e._legendItemPos && t.call(i, e)
                };
            s(), setTimeout(s)
        }), Li = (Ci = t).addEvent, Oi = Ci.animate, Di = Ci.animObject, Ii = Ci.attr, zi = Ci.doc, Ei = Ci.Axis, Bi = Ci.createElement, Ri = Ci.defaultOptions, Gi = Ci.discardElement, Wi = Ci.charts, Hi = Ci.css, Ni = Ci.defined, Xi = Ci.each, Yi = Ci.extend, Fi = Ci.find, Vi = Ci.fireEvent, ji = Ci.getStyle, Ui = Ci.grep, _i = Ci.isNumber, Ki = Ci.isObject, Zi = Ci.isString, qi = Ci.Legend, $i = Ci.marginNames, Ji = Ci.merge, Qi = Ci.objectEach, ts = Ci.Pointer, es = Ci.pick, is = Ci.pInt, ss = Ci.removeEvent, ns = Ci.seriesTypes, os = Ci.splat, rs = Ci.svg, as = Ci.syncTimeout, hs = Ci.win, ls = Ci.Renderer, cs = Ci.Chart = function() {
            this.getArgs.apply(this, arguments)
        }, Ci.chart = function(t, e, i) {
            return new cs(t, e, i)
        }, Yi(cs.prototype, {
            callbacks: [],
            getArgs: function() {
                var t = [].slice.call(arguments);
                (Zi(t[0]) || t[0].nodeName) && (this.renderTo = t.shift()), this.init(t[0], t[1])
            },
            init: function(t, e) {
                var i, s, n = t.series,
                    o = t.plotOptions || {};
                for (s in t.series = null, (i = Ji(Ri, t)).plotOptions) i.plotOptions[s].tooltip = o[s] && Ji(o[s].tooltip) || void 0;
                i.tooltip.userOptions = t.chart && t.chart.forExport && t.tooltip.userOptions || t.tooltip, i.series = t.series = n, this.userOptions = t, s = (t = i.chart).events, this.margin = [], this.spacing = [], this.bounds = {
                    h: {},
                    v: {}
                }, this.callback = e, this.isResizing = 0, this.options = i, this.axes = [], this.series = [], this.hasCartesianSeries = t.showAxes;
                var r = this;
                r.index = Wi.length, Wi.push(r), Ci.chartCount++, s && Qi(s, function(t, e) {
                    Li(r, e, t)
                }), r.xAxis = [], r.yAxis = [], r.pointCount = r.colorCounter = r.symbolCounter = 0, r.firstRender()
            },
            initSeries: function(t) {
                var e = this.options.chart;
                return (e = ns[t.type || e.type || e.defaultSeriesType]) || Ci.error(17, !0), (e = new e).init(this, t), e
            },
            orderSeries: function(t) {
                var e = this.series;
                for (t = t || 0; t < e.length; t++) e[t] && (e[t].index = t, e[t].name = e[t].name || "Series " + (e[t].index + 1))
            },
            isInsidePlot: function(t, e, i) {
                var s = i ? e : t;
                return t = i ? t : e, 0 <= s && s <= this.plotWidth && 0 <= t && t <= this.plotHeight
            },
            redraw: function(t) {
                var e, i, s, n = this.axes,
                    o = this.series,
                    r = this.pointer,
                    a = this.legend,
                    h = this.isDirtyLegend,
                    l = this.hasCartesianSeries,
                    c = this.isDirtyBox,
                    d = this.renderer,
                    p = d.isHidden(),
                    u = [];
                for (this.setResponsive && this.setResponsive(!1), Ci.setAnimation(t, this), p && this.temporaryDisplay(), this.layOutTitles(), t = o.length; t--;)
                    if ((s = o[t]).options.stacking && (e = !0, s.isDirty)) {
                        i = !0;
                        break
                    } if (i)
                    for (t = o.length; t--;)(s = o[t]).options.stacking && (s.isDirty = !0);
                Xi(o, function(t) {
                    t.isDirty && "point" === t.options.legendType && (t.updateTotals && t.updateTotals(), h = !0), t.isDirtyData && Vi(t, "updatedData")
                }), h && a.options.enabled && (a.render(), this.isDirtyLegend = !1), e && this.getStacks(), l && Xi(n, function(t) {
                    t.updateNames(), t.setScale()
                }), this.getMargins(), l && (Xi(n, function(t) {
                    t.isDirty && (c = !0)
                }), Xi(n, function(t) {
                    var i = t.min + "," + t.max;
                    t.extKey !== i && (t.extKey = i, u.push(function() {
                        Vi(t, "afterSetExtremes", Yi(t.eventArgs, t.getExtremes())), delete t.eventArgs
                    })), (c || e) && t.redraw()
                })), c && this.drawChartBox(), Vi(this, "predraw"), Xi(o, function(t) {
                    (c || t.isDirty) && t.visible && t.redraw(), t.isDirtyData = !1
                }), r && r.reset(!0), d.draw(), Vi(this, "redraw"), Vi(this, "render"), p && this.temporaryDisplay(!0), Xi(u, function(t) {
                    t.call()
                })
            },
            get: function(t) {
                function e(e) {
                    return e.id === t || e.options && e.options.id === t
                }
                var i, s, n = this.series;
                for (i = Fi(this.axes, e) || Fi(this.series, e), s = 0; !i && s < n.length; s++) i = Fi(n[s].points || [], e);
                return i
            },
            getAxes: function() {
                var t = this,
                    e = (i = this.options).xAxis = os(i.xAxis || {}),
                    i = i.yAxis = os(i.yAxis || {});
                Xi(e, function(t, e) {
                    t.index = e, t.isX = !0
                }), Xi(i, function(t, e) {
                    t.index = e
                }), e = e.concat(i), Xi(e, function(e) {
                    new Ei(t, e)
                })
            },
            getSelectedPoints: function() {
                var t = [];
                return Xi(this.series, function(e) {
                    t = t.concat(Ui(e.data || [], function(t) {
                        return t.selected
                    }))
                }), t
            },
            getSelectedSeries: function() {
                return Ui(this.series, function(t) {
                    return t.selected
                })
            },
            setTitle: function(t, e, i) {
                var s, n = this,
                    o = n.options;
                s = o.title = Ji({
                    style: {
                        color: "#333333",
                        fontSize: o.isStock ? "16px" : "18px"
                    }
                }, o.title, t), o = o.subtitle = Ji({
                    style: {
                        color: "#666666"
                    }
                }, o.subtitle, e), Xi([
                    ["title", t, s],
                    ["subtitle", e, o]
                ], function(t, e) {
                    var i = t[0],
                        s = n[i],
                        o = t[1];
                    t = t[2], s && o && (n[i] = s = s.destroy()), t && t.text && !s && (n[i] = n.renderer.text(t.text, 0, 0, t.useHTML).attr({
                        align: t.align,
                        class: "highcharts-" + i,
                        zIndex: t.zIndex || 4
                    }).add(), n[i].update = function(t) {
                        n.setTitle(!e && t, e && t)
                    }, n[i].css(t.style))
                }), n.layOutTitles(i)
            },
            layOutTitles: function(t) {
                var e, i = 0,
                    s = this.renderer,
                    n = this.spacingBox;
                Xi(["title", "subtitle"], function(t) {
                    var e, o = this[t],
                        r = this.options[t];
                    t = "title" === t ? -3 : r.verticalAlign ? 0 : i + 2, o && (e = r.style.fontSize, e = s.fontMetrics(e, o).b, o.css({
                        width: (r.width || n.width + r.widthAdjust) + "px"
                    }).align(Yi({
                        y: t + e
                    }, r), !1, "spacingBox"), r.floating || r.verticalAlign || (i = Math.ceil(i + o.getBBox(r.useHTML).height)))
                }, this), e = this.titleOffset !== i, this.titleOffset = i, !this.isDirtyBox && e && (this.isDirtyBox = e, this.hasRendered && es(t, !0) && this.isDirtyBox && this.redraw())
            },
            getChartSize: function() {
                var t = (e = this.options.chart).width,
                    e = e.height,
                    i = this.renderTo;
                Ni(t) || (this.containerWidth = ji(i, "width")), Ni(e) || (this.containerHeight = ji(i, "height")), this.chartWidth = Math.max(0, t || this.containerWidth || 600), this.chartHeight = Math.max(0, Ci.relativeLength(e, this.chartWidth) || this.containerHeight || 400)
            },
            temporaryDisplay: function(t) {
                var e = this.renderTo;
                if (t)
                    for (; e && e.style;) e.hcOrigStyle && (Ci.css(e, e.hcOrigStyle), delete e.hcOrigStyle), e = e.parentNode;
                else
                    for (; e && e.style;) "none" === ji(e, "display", !1) && (e.hcOrigStyle = {
                        display: e.style.display,
                        height: e.style.height,
                        overflow: e.style.overflow
                    }, t = {
                        display: "block",
                        overflow: "hidden"
                    }, e !== this.renderTo && (t.height = 0), Ci.css(e, t), e.style.setProperty && e.style.setProperty("display", "block", "important")), e = e.parentNode
            },
            setClassName: function(t) {
                this.container.className = "highcharts-container " + (t || "")
            },
            getContainer: function() {
                var t, e, i, s = this.options,
                    n = s.chart;
                t = this.renderTo;
                var o, r = Ci.uniqueKey();
                t || (this.renderTo = t = n.renderTo), Zi(t) && (this.renderTo = t = zi.getElementById(t)), t || Ci.error(13, !0), e = is(Ii(t, "data-highcharts-chart")), _i(e) && Wi[e] && Wi[e].hasRendered && Wi[e].destroy(), Ii(t, "data-highcharts-chart", this.index), t.innerHTML = "", n.skipClone || t.offsetWidth || this.temporaryDisplay(), this.getChartSize(), e = this.chartWidth, i = this.chartHeight, o = Yi({
                    position: "relative",
                    overflow: "hidden",
                    width: e + "px",
                    height: i + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
                }, n.style), this.container = t = Bi("div", {
                    id: r
                }, o, t), this._cursor = t.style.cursor, this.renderer = new(Ci[n.renderer] || ls)(t, e, i, null, n.forExport, s.exporting && s.exporting.allowHTML), this.setClassName(n.className), this.renderer.setStyle(n.style), this.renderer.chartIndex = this.index
            },
            getMargins: function(t) {
                var e = this.spacing,
                    i = this.margin,
                    s = this.titleOffset;
                this.resetMargins(), s && !Ni(i[0]) && (this.plotTop = Math.max(this.plotTop, s + this.options.title.margin + e[0])), this.legend.display && this.legend.adjustMargins(i, e), this.extraMargin && (this[this.extraMargin.type] = (this[this.extraMargin.type] || 0) + this.extraMargin.value), this.extraTopMargin && (this.plotTop += this.extraTopMargin), t || this.getAxisMargins()
            },
            getAxisMargins: function() {
                var t = this,
                    e = t.axisOffset = [0, 0, 0, 0],
                    i = t.margin;
                t.hasCartesianSeries && Xi(t.axes, function(t) {
                    t.visible && t.getOffset()
                }), Xi($i, function(s, n) {
                    Ni(i[n]) || (t[s] += e[n])
                }), t.setChartSize()
            },
            reflow: function(t) {
                var e = this,
                    i = e.options.chart,
                    s = e.renderTo,
                    n = Ni(i.width),
                    o = i.width || ji(s, "width");
                i = i.height || ji(s, "height"), s = t ? t.target : hs, n || e.isPrinting || !o || !i || s !== hs && s !== zi || (o === e.containerWidth && i === e.containerHeight || (clearTimeout(e.reflowTimeout), e.reflowTimeout = as(function() {
                    e.container && e.setSize(void 0, void 0, !1)
                }, t ? 100 : 0)), e.containerWidth = o, e.containerHeight = i)
            },
            initReflow: function() {
                var t, e = this;
                t = Li(hs, "resize", function(t) {
                    e.reflow(t)
                }), Li(e, "destroy", t)
            },
            setSize: function(t, e, i) {
                var s = this,
                    n = s.renderer;
                s.isResizing += 1, Ci.setAnimation(i, s), s.oldChartHeight = s.chartHeight, s.oldChartWidth = s.chartWidth, void 0 !== t && (s.options.chart.width = t), void 0 !== e && (s.options.chart.height = e), s.getChartSize(), ((t = n.globalAnimation) ? Oi : Hi)(s.container, {
                    width: s.chartWidth + "px",
                    height: s.chartHeight + "px"
                }, t), s.setChartSize(!0), n.setSize(s.chartWidth, s.chartHeight, i), Xi(s.axes, function(t) {
                    t.isDirty = !0, t.setScale()
                }), s.isDirtyLegend = !0, s.isDirtyBox = !0, s.layOutTitles(), s.getMargins(), s.redraw(i), s.oldChartHeight = null, Vi(s, "resize"), as(function() {
                    s && Vi(s, "endResize", null, function() {
                        --s.isResizing
                    })
                }, Di(t).duration)
            },
            setChartSize: function(t) {
                function e(t) {
                    return t = u[t] || 0, Math.max(r || t, t) / 2
                }
                var i, s, n, o, r, a = this.inverted,
                    h = this.renderer,
                    l = this.chartWidth,
                    c = this.chartHeight,
                    d = this.options.chart,
                    p = this.spacing,
                    u = this.clipOffset;
                this.plotLeft = i = Math.round(this.plotLeft), this.plotTop = s = Math.round(this.plotTop), this.plotWidth = n = Math.max(0, Math.round(l - i - this.marginRight)), this.plotHeight = o = Math.max(0, Math.round(c - s - this.marginBottom)), this.plotSizeX = a ? o : n, this.plotSizeY = a ? n : o, this.plotBorderWidth = d.plotBorderWidth || 0, this.spacingBox = h.spacingBox = {
                    x: p[3],
                    y: p[0],
                    width: l - p[3] - p[1],
                    height: c - p[0] - p[2]
                }, this.plotBox = h.plotBox = {
                    x: i,
                    y: s,
                    width: n,
                    height: o
                }, r = 2 * Math.floor(this.plotBorderWidth / 2), a = Math.ceil(e(3)), h = Math.ceil(e(0)), this.clipBox = {
                    x: a,
                    y: h,
                    width: Math.floor(this.plotSizeX - e(1) - a),
                    height: Math.max(0, Math.floor(this.plotSizeY - e(2) - h))
                }, t || Xi(this.axes, function(t) {
                    t.setAxisSize(), t.setAxisTranslation()
                })
            },
            resetMargins: function() {
                var t = this,
                    e = t.options.chart;
                Xi(["margin", "spacing"], function(i) {
                    var s = e[i],
                        n = Ki(s) ? s : [s, s, s, s];
                    Xi(["Top", "Right", "Bottom", "Left"], function(s, o) {
                        t[i][o] = es(e[i + s], n[o])
                    })
                }), Xi($i, function(e, i) {
                    t[e] = es(t.margin[i], t.spacing[i])
                }), t.axisOffset = [0, 0, 0, 0], t.clipOffset = []
            },
            drawChartBox: function() {
                var t, e, i = this.options.chart,
                    s = this.renderer,
                    n = this.chartWidth,
                    o = this.chartHeight,
                    r = this.chartBackground,
                    a = this.plotBackground,
                    h = this.plotBorder,
                    l = this.plotBGImage,
                    c = i.backgroundColor,
                    d = i.plotBackgroundColor,
                    p = i.plotBackgroundImage,
                    u = this.plotLeft,
                    f = this.plotTop,
                    g = this.plotWidth,
                    m = this.plotHeight,
                    x = this.plotBox,
                    v = this.clipRect,
                    y = this.clipBox,
                    b = "animate";
                r || (this.chartBackground = r = s.rect().addClass("highcharts-background").add(), b = "attr"), e = (t = i.borderWidth || 0) + (i.shadow ? 8 : 0), c = {
                    fill: c || "none"
                }, (t || r["stroke-width"]) && (c.stroke = i.borderColor, c["stroke-width"] = t), r.attr(c).shadow(i.shadow), r[b]({
                    x: e / 2,
                    y: e / 2,
                    width: n - e - t % 2,
                    height: o - e - t % 2,
                    r: i.borderRadius
                }), b = "animate", a || (b = "attr", this.plotBackground = a = s.rect().addClass("highcharts-plot-background").add()), a[b](x), a.attr({
                    fill: d || "none"
                }).shadow(i.plotShadow), p && (l ? l.animate(x) : this.plotBGImage = s.image(p, u, f, g, m).add()), v ? v.animate({
                    width: y.width,
                    height: y.height
                }) : this.clipRect = s.clipRect(y), b = "animate", h || (b = "attr", this.plotBorder = h = s.rect().addClass("highcharts-plot-border").attr({
                    zIndex: 1
                }).add()), h.attr({
                    stroke: i.plotBorderColor,
                    "stroke-width": i.plotBorderWidth || 0,
                    fill: "none"
                }), h[b](h.crisp({
                    x: u,
                    y: f,
                    width: g,
                    height: m
                }, -h.strokeWidth())), this.isDirtyBox = !1
            },
            propFromSeries: function() {
                var t, e, i, s = this,
                    n = s.options.chart,
                    o = s.options.series;
                Xi(["inverted", "angular", "polar"], function(r) {
                    for (t = ns[n.type || n.defaultSeriesType], i = n[r] || t && t.prototype[r], e = o && o.length; !i && e--;)(t = ns[o[e].type]) && t.prototype[r] && (i = !0);
                    s[r] = i
                })
            },
            linkSeries: function() {
                var t = this,
                    e = t.series;
                Xi(e, function(t) {
                    t.linkedSeries.length = 0
                }), Xi(e, function(e) {
                    var i = e.options.linkedTo;
                    Zi(i) && (i = ":previous" === i ? t.series[e.index - 1] : t.get(i)) && i.linkedParent !== e && (i.linkedSeries.push(e), e.linkedParent = i, e.visible = es(e.options.visible, i.options.visible, e.visible))
                })
            },
            renderSeries: function() {
                Xi(this.series, function(t) {
                    t.translate(), t.render()
                })
            },
            renderLabels: function() {
                var t = this,
                    e = t.options.labels;
                e.items && Xi(e.items, function(i) {
                    var s = Yi(e.style, i.style),
                        n = is(s.left) + t.plotLeft,
                        o = is(s.top) + t.plotTop + 12;
                    delete s.left, delete s.top, t.renderer.text(i.html, n, o).attr({
                        zIndex: 2
                    }).css(s).add()
                })
            },
            render: function() {
                var t, e, i, s = this.axes,
                    n = this.renderer,
                    o = this.options;
                this.setTitle(), this.legend = new qi(this, o.legend), this.getStacks && this.getStacks(), this.getMargins(!0), this.setChartSize(), o = this.plotWidth, t = this.plotHeight -= 21, Xi(s, function(t) {
                    t.setScale()
                }), this.getAxisMargins(), e = 1.1 < o / this.plotWidth, i = 1.05 < t / this.plotHeight, (e || i) && (Xi(s, function(t) {
                    (t.horiz && e || !t.horiz && i) && t.setTickInterval(!0)
                }), this.getMargins()), this.drawChartBox(), this.hasCartesianSeries && Xi(s, function(t) {
                    t.visible && t.render()
                }), this.seriesGroup || (this.seriesGroup = n.g("series-group").attr({
                    zIndex: 3
                }).add()), this.renderSeries(), this.renderLabels(), this.addCredits(), this.setResponsive && this.setResponsive(), this.hasRendered = !0
            },
            addCredits: function(t) {
                var e = this;
                (t = Ji(!0, this.options.credits, t)).enabled && !this.credits && (this.credits = this.renderer.text(t.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                    t.href && (hs.location.href = t.href)
                }).attr({
                    align: t.position.align,
                    zIndex: 8
                }).css(t.style).add().align(t.position), this.credits.update = function(t) {
                    e.credits = e.credits.destroy(), e.addCredits(t)
                })
            },
            destroy: function() {
                var t, e = this,
                    i = e.axes,
                    s = e.series,
                    n = e.container,
                    o = n && n.parentNode;
                for (Vi(e, "destroy"), e.renderer.forExport ? Ci.erase(Wi, e) : Wi[e.index] = void 0, Ci.chartCount--, e.renderTo.removeAttribute("data-highcharts-chart"), ss(e), t = i.length; t--;) i[t] = i[t].destroy();
                for (this.scroller && this.scroller.destroy && this.scroller.destroy(), t = s.length; t--;) s[t] = s[t].destroy();
                Xi("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(t) {
                    var i = e[t];
                    i && i.destroy && (e[t] = i.destroy())
                }), n && (n.innerHTML = "", ss(n), o && Gi(n)), Qi(e, function(t, i) {
                    delete e[i]
                })
            },
            isReadyToRender: function() {
                var t = this;
                return !(!rs && hs == hs.top && "complete" !== zi.readyState && (zi.attachEvent("onreadystatechange", function() {
                    zi.detachEvent("onreadystatechange", t.firstRender), "complete" === zi.readyState && t.firstRender()
                }), 1))
            },
            firstRender: function() {
                var t = this,
                    e = t.options;
                t.isReadyToRender() && (t.getContainer(), Vi(t, "init"), t.resetMargins(), t.setChartSize(), t.propFromSeries(), t.getAxes(), Xi(e.series || [], function(e) {
                    t.initSeries(e)
                }), t.linkSeries(), Vi(t, "beforeRender"), ts && (t.pointer = new ts(t, e)), t.render(), !t.renderer.imgCount && t.onload && t.onload(), t.temporaryDisplay(!0))
            },
            onload: function() {
                Xi([this.callback].concat(this.callbacks), function(t) {
                    t && void 0 !== this.index && t.apply(this, [this])
                }, this), Vi(this, "load"), Vi(this, "render"), Ni(this.index) && !1 !== this.options.chart.reflow && this.initReflow(), this.onload = null
            }
        }), us = (ds = t).each, fs = ds.extend, gs = ds.erase, ms = ds.fireEvent, xs = ds.format, vs = ds.isArray, ys = ds.isNumber, bs = ds.pick, ks = ds.removeEvent, ds.Point = ps = function() {}, ds.Point.prototype = {
            init: function(t, e, i) {
                return this.series = t, this.color = t.color, this.applyOptions(e, i), t.options.colorByPoint ? (e = t.options.colors || t.chart.options.colors, this.color = this.color || e[t.colorCounter], e = e.length, i = t.colorCounter, t.colorCounter++, t.colorCounter === e && (t.colorCounter = 0)) : i = t.colorIndex, this.colorIndex = bs(this.colorIndex, i), t.chart.pointCount++, this
            },
            applyOptions: function(t, e) {
                var i = this.series,
                    s = i.options.pointValKey || i.pointValKey;
                return t = ps.prototype.optionsToObject.call(this, t), fs(this, t), this.options = this.options ? fs(this.options, t) : t, t.group && delete this.group, s && (this.y = this[s]), this.isNull = bs(this.isValid && !this.isValid(), null === this.x || !ys(this.y, !0)), this.selected && (this.state = "select"), "name" in this && void 0 === e && i.xAxis && i.xAxis.hasNames && (this.x = i.xAxis.nameToX(this)), void 0 === this.x && i && (this.x = void 0 === e ? i.autoIncrement(this) : e), this
            },
            optionsToObject: function(t) {
                var e = {},
                    i = this.series,
                    s = i.options.keys,
                    n = s || i.pointArrayMap || ["y"],
                    o = n.length,
                    r = 0,
                    a = 0;
                if (ys(t) || null === t) e[n[0]] = t;
                else if (vs(t))
                    for (!s && t.length > o && ("string" == (i = typeof t[0]) ? e.name = t[0] : "number" === i && (e.x = t[0]), r++); a < o;) s && void 0 === t[r] || (e[n[a]] = t[r]), r++, a++;
                else "object" == typeof t && (e = t, t.dataLabels && (i._hasPointLabels = !0), t.marker && (i._hasPointMarkers = !0));
                return e
            },
            getClassName: function() {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
            },
            getZone: function() {
                var t, e = (i = this.series).zones,
                    i = i.zoneAxis || "y",
                    s = 0;
                for (t = e[s]; this[i] >= t.value;) t = e[++s];
                return t && t.color && !this.options.color && (this.color = t.color), t
            },
            destroy: function() {
                var t, e = this.series.chart,
                    i = e.hoverPoints;
                for (t in e.pointCount--, i && (this.setState(), gs(i, this), i.length || (e.hoverPoints = null)), this === e.hoverPoint && this.onMouseOut(), (this.graphic || this.dataLabel) && (ks(this), this.destroyElements()), this.legendItem && e.legend.destroyItem(this), this) this[t] = null
            },
            destroyElements: function() {
                for (var t, e = ["graphic", "dataLabel", "dataLabelUpper", "connector", "shadowGroup"], i = 6; i--;) this[t = e[i]] && (this[t] = this[t].destroy())
            },
            getLabelConfig: function() {
                return {
                    x: this.category,
                    y: this.y,
                    color: this.color,
                    colorIndex: this.colorIndex,
                    key: this.name || this.category,
                    series: this.series,
                    point: this,
                    percentage: this.percentage,
                    total: this.total || this.stackTotal
                }
            },
            tooltipFormatter: function(t) {
                var e = this.series,
                    i = e.tooltipOptions,
                    s = bs(i.valueDecimals, ""),
                    n = i.valuePrefix || "",
                    o = i.valueSuffix || "";
                return us(e.pointArrayMap || ["y"], function(e) {
                    e = "{point." + e, (n || o) && (t = t.replace(e + "}", n + e + "}" + o)), t = t.replace(e + "}", e + ":,." + s + "f}")
                }), xs(t, {
                    point: this,
                    series: this.series
                })
            },
            firePointEvent: function(t, e, i) {
                var s = this,
                    n = this.series.options;
                (n.point.events[t] || s.options && s.options.events && s.options.events[t]) && this.importEvents(), "click" === t && n.allowPointSelect && (i = function(t) {
                    s.select && s.select(null, t.ctrlKey || t.metaKey || t.shiftKey)
                }), ms(this, t, e, i)
            },
            visible: !0
        }, ws = (Ms = t).addEvent, Ss = Ms.animObject, As = Ms.arrayMax, Ts = Ms.arrayMin, Ps = Ms.correctFloat, Cs = Ms.Date, Ls = Ms.defaultOptions, Os = Ms.defaultPlotOptions, Ds = Ms.defined, Is = Ms.each, zs = Ms.erase, Es = Ms.extend, Bs = Ms.fireEvent, Rs = Ms.grep, Gs = Ms.isArray, Ws = Ms.isNumber, Hs = Ms.isString, Ns = Ms.merge, Xs = Ms.objectEach, Ys = Ms.pick, Fs = Ms.removeEvent, Vs = Ms.splat, js = Ms.SVGElement, Us = Ms.syncTimeout, _s = Ms.win, Ms.Series = Ms.seriesType("line", null, {
            lineWidth: 2,
            allowPointSelect: !1,
            showCheckbox: !1,
            animation: {
                duration: 1e3
            },
            events: {},
            marker: {
                lineWidth: 0,
                lineColor: "#ffffff",
                radius: 4,
                states: {
                    hover: {
                        animation: {
                            duration: 50
                        },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1
                    },
                    select: {
                        fillColor: "#cccccc",
                        lineColor: "#000000",
                        lineWidth: 2
                    }
                }
            },
            point: {
                events: {}
            },
            dataLabels: {
                align: "center",
                formatter: function() {
                    return null === this.y ? "" : Ms.numberFormat(this.y, -1)
                },
                style: {
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "contrast",
                    textOutline: "1px contrast"
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                padding: 5
            },
            cropThreshold: 300,
            pointRange: 0,
            softThreshold: !0,
            states: {
                hover: {
                    animation: {
                        duration: 50
                    },
                    lineWidthPlus: 1,
                    marker: {},
                    halo: {
                        size: 10,
                        opacity: .25
                    }
                },
                select: {
                    marker: {}
                }
            },
            stickyTracking: !0,
            turboThreshold: 1e3,
            findNearestPointBy: "x"
        }, {
            isCartesian: !0,
            pointClass: Ms.Point,
            sorted: !0,
            requireSorting: !0,
            directTouch: !1,
            axisTypes: ["xAxis", "yAxis"],
            colorCounter: 0,
            parallelArrays: ["x", "y"],
            coll: "series",
            init: function(t, e) {
                var i, s, n = this,
                    o = t.series;
                n.chart = t, n.options = e = n.setOptions(e), n.linkedSeries = [], n.bindAxes(), Es(n, {
                    name: e.name,
                    state: "",
                    visible: !1 !== e.visible,
                    selected: !0 === e.selected
                }), i = e.events, Xs(i, function(t, e) {
                    ws(n, e, t)
                }), (i && i.click || e.point && e.point.events && e.point.events.click || e.allowPointSelect) && (t.runTrackerClick = !0), n.getColor(), n.getSymbol(), Is(n.parallelArrays, function(t) {
                    n[t + "Data"] = []
                }), n.setData(e.data, !1), n.isCartesian && (t.hasCartesianSeries = !0), o.length && (s = o[o.length - 1]), n._i = Ys(s && s._i, -1) + 1, t.orderSeries(this.insert(o))
            },
            insert: function(t) {
                var e, i = this.options.index;
                if (Ws(i)) {
                    for (e = t.length; e--;)
                        if (i >= Ys(t[e].options.index, t[e]._i)) {
                            t.splice(e + 1, 0, this);
                            break
                        } - 1 === e && t.unshift(this), e += 1
                } else t.push(this);
                return Ys(e, t.length - 1)
            },
            bindAxes: function() {
                var t, e = this,
                    i = e.options,
                    s = e.chart;
                Is(e.axisTypes || [], function(n) {
                    Is(s[n], function(s) {
                        t = s.options, (i[n] === t.index || void 0 !== i[n] && i[n] === t.id || void 0 === i[n] && 0 === t.index) && (e.insert(s.series), e[n] = s, s.isDirty = !0)
                    }), e[n] || e.optionalAxis === n || Ms.error(18, !0)
                })
            },
            updateParallelArrays: function(t, e) {
                var i = t.series,
                    s = arguments,
                    n = Ws(e) ? function(s) {
                        var n = "y" === s && i.toYData ? i.toYData(t) : t[s];
                        i[s + "Data"][e] = n
                    } : function(t) {
                        Array.prototype[e].apply(i[t + "Data"], Array.prototype.slice.call(s, 2))
                    };
                Is(i.parallelArrays, n)
            },
            autoIncrement: function() {
                var t, e = this.options,
                    i = this.xIncrement,
                    s = e.pointIntervalUnit;
                return i = Ys(i, e.pointStart, 0), this.pointInterval = t = Ys(this.pointInterval, e.pointInterval, 1), s && (e = new Cs(i), "day" === s ? e = +e[Cs.hcSetDate](e[Cs.hcGetDate]() + t) : "month" === s ? e = +e[Cs.hcSetMonth](e[Cs.hcGetMonth]() + t) : "year" === s && (e = +e[Cs.hcSetFullYear](e[Cs.hcGetFullYear]() + t)), t = e - i), this.xIncrement = i + t, i
            },
            setOptions: function(t) {
                var e = this.chart,
                    i = e.options,
                    s = i.plotOptions,
                    n = (e.userOptions || {}).plotOptions || {},
                    o = s[this.type];
                return this.userOptions = t, e = Ns(o, s.series, t), this.tooltipOptions = Ns(Ls.tooltip, Ls.plotOptions.series && Ls.plotOptions.series.tooltip, Ls.plotOptions[this.type].tooltip, i.tooltip.userOptions, s.series && s.series.tooltip, s[this.type].tooltip, t.tooltip), this.stickyTracking = Ys(t.stickyTracking, n[this.type] && n[this.type].stickyTracking, n.series && n.series.stickyTracking, !(!this.tooltipOptions.shared || this.noSharedTooltip) || e.stickyTracking), null === o.marker && delete e.marker, this.zoneAxis = e.zoneAxis, t = this.zones = (e.zones || []).slice(), !e.negativeColor && !e.negativeFillColor || e.zones || t.push({
                    value: e[this.zoneAxis + "Threshold"] || e.threshold || 0,
                    className: "highcharts-negative",
                    color: e.negativeColor,
                    fillColor: e.negativeFillColor
                }), t.length && Ds(t[t.length - 1].value) && t.push({
                    color: this.color,
                    fillColor: this.fillColor
                }), e
            },
            getCyclic: function(t, e, i) {
                var s, n = this.chart,
                    o = this.userOptions,
                    r = t + "Index",
                    a = t + "Counter",
                    h = i ? i.length : Ys(n.options.chart[t + "Count"], n[t + "Count"]);
                e || (s = Ys(o[r], o["_" + r]), Ds(s) || (n.series.length || (n[a] = 0), o["_" + r] = s = n[a] % h, n[a] += 1), i && (e = i[s])), void 0 !== s && (this[r] = s), this[t] = e
            },
            getColor: function() {
                this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || Os[this.type].color, this.chart.options.colors)
            },
            getSymbol: function() {
                this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols)
            },
            drawLegendSymbol: Ms.LegendSymbolMixin.drawLineMarker,
            setData: function(t, e, i, s) {
                var n, o = this,
                    r = o.points,
                    a = r && r.length || 0,
                    h = o.options,
                    l = o.chart,
                    c = null,
                    d = o.xAxis,
                    p = h.turboThreshold,
                    u = this.xData,
                    f = this.yData,
                    g = (n = o.pointArrayMap) && n.length;
                if (n = (t = t || []).length, e = Ys(e, !0), !1 !== s && n && a === n && !o.cropped && !o.hasGroupedData && o.visible) Is(t, function(t, e) {
                    r[e].update && t !== h.data[e] && r[e].update(t, !1, null, !1)
                });
                else {
                    if (o.xIncrement = null, o.colorCounter = 0, Is(this.parallelArrays, function(t) {
                            o[t + "Data"].length = 0
                        }), p && n > p) {
                        for (i = 0; null === c && i < n;) c = t[i], i++;
                        if (Ws(c))
                            for (i = 0; i < n; i++) u[i] = this.autoIncrement(), f[i] = t[i];
                        else if (Gs(c))
                            if (g)
                                for (i = 0; i < n; i++) c = t[i], u[i] = c[0], f[i] = c.slice(1, g + 1);
                            else
                                for (i = 0; i < n; i++) c = t[i], u[i] = c[0], f[i] = c[1];
                        else Ms.error(12)
                    } else
                        for (i = 0; i < n; i++) void 0 !== t[i] && (c = {
                            series: o
                        }, o.pointClass.prototype.applyOptions.apply(c, [t[i]]), o.updateParallelArrays(c, i));
                    for (Hs(f[0]) && Ms.error(14, !0), o.data = [], o.options.data = o.userOptions.data = t, i = a; i--;) r[i] && r[i].destroy && r[i].destroy();
                    d && (d.minRange = d.userMinRange), o.isDirty = l.isDirtyBox = !0, o.isDirtyData = !!r, i = !1
                }
                "point" === h.legendType && (this.processData(), this.generatePoints()), e && l.redraw(i)
            },
            processData: function(t) {
                var e, i = this.xData,
                    s = this.yData,
                    n = i.length;
                e = 0;
                var o, r, a, h = this.xAxis;
                a = (u = this.options).cropThreshold;
                var l, c, d = this.getExtremesFromAll || u.getExtremesFromAll,
                    p = this.isCartesian,
                    u = h && h.val2lin,
                    f = h && h.isLog;
                if (p && !this.isDirty && !h.isDirty && !this.yAxis.isDirty && !t) return !1;
                for (h && (l = (t = h.getExtremes()).min, c = t.max), p && this.sorted && !d && (!a || n > a || this.forceCrop) && (i[n - 1] < l || i[0] > c ? (i = [], s = []) : (i[0] < l || i[n - 1] > c) && (i = (e = this.cropData(this.xData, this.yData, l, c)).xData, s = e.yData, e = e.start, o = !0)), a = i.length || 1; --a;) 0 < (n = f ? u(i[a]) - u(i[a - 1]) : i[a] - i[a - 1]) && (void 0 === r || n < r) ? r = n : 0 > n && this.requireSorting && Ms.error(15);
                this.cropped = o, this.cropStart = e, this.processedXData = i, this.processedYData = s, this.closestPointRange = r
            },
            cropData: function(t, e, i, s) {
                var n, o = t.length,
                    r = 0,
                    a = o,
                    h = Ys(this.cropShoulder, 1);
                for (n = 0; n < o; n++)
                    if (t[n] >= i) {
                        r = Math.max(0, n - h);
                        break
                    } for (i = n; i < o; i++)
                    if (t[i] > s) {
                        a = i + h;
                        break
                    } return {
                    xData: t.slice(r, a),
                    yData: e.slice(r, a),
                    start: r,
                    end: a
                }
            },
            generatePoints: function() {
                var t, e, i, s, n = (p = this.options).data,
                    o = this.data,
                    r = this.processedXData,
                    a = this.processedYData,
                    h = this.pointClass,
                    l = r.length,
                    c = this.cropStart || 0,
                    d = this.hasGroupedData,
                    p = p.keys,
                    u = [];
                for (o || d || ((o = []).length = n.length, o = this.data = o), p && d && (this.options.keys = !1), s = 0; s < l; s++) e = c + s, d ? (i = (new h).init(this, [r[s]].concat(Vs(a[s])))).dataGroup = this.groupMap[s] : (i = o[e]) || void 0 === n[e] || (o[e] = i = (new h).init(this, n[e], r[s])), i && (i.index = e, u[s] = i);
                if (this.options.keys = p, o && (l !== (t = o.length) || d))
                    for (s = 0; s < t; s++) s !== c || d || (s += l), o[s] && (o[s].destroyElements(), o[s].plotX = void 0);
                this.data = o, this.points = u
            },
            getExtremes: function(t) {
                var e, i, s, n, o, r = this.yAxis,
                    a = this.processedXData,
                    h = [],
                    l = 0,
                    c = (e = this.xAxis.getExtremes()).min,
                    d = e.max;
                for (e = (t = t || this.stackedYData || this.processedYData || []).length, o = 0; o < e; o++)
                    if (s = a[o], n = t[o], i = (Ws(n, !0) || Gs(n)) && (!r.positiveValuesOnly || n.length || 0 < n), s = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || (a[o] || s) >= c && (a[o] || s) <= d, i && s)
                        if (i = n.length)
                            for (; i--;) null !== n[i] && (h[l++] = n[i]);
                        else h[l++] = n;
                this.dataMin = Ts(h), this.dataMax = As(h)
            },
            translate: function() {
                this.processedXData || this.processData(), this.generatePoints();
                var t, e, i, s, n = this.options,
                    o = n.stacking,
                    r = this.xAxis,
                    a = r.categories,
                    h = this.yAxis,
                    l = this.points,
                    c = l.length,
                    d = !!this.modifyValue,
                    p = n.pointPlacement,
                    u = "between" === p || Ws(p),
                    f = n.threshold,
                    g = n.startFromThreshold ? f : 0,
                    m = Number.MAX_VALUE;
                for ("between" === p && (p = .5), Ws(p) && (p *= Ys(n.pointRange || r.pointRange)), n = 0; n < c; n++) {
                    var x = l[n],
                        v = x.x,
                        y = x.y;
                    e = x.low;
                    var b, k = o && h.stacks[(this.negStacks && y < (g ? 0 : f) ? "-" : "") + this.stackKey];
                    h.positiveValuesOnly && null !== y && 0 >= y && (x.isNull = !0), x.plotX = t = Ps(Math.min(Math.max(-1e5, r.translate(v, 0, 0, 0, 1, p, "flags" === this.type)), 1e5)), o && this.visible && !x.isNull && k && k[v] && (s = this.getStackIndicator(s, v, this.index), e = (y = (b = k[v]).points[s.key])[0], y = y[1], e === g && s.key === k[v].base && (e = Ys(f, h.min)), h.positiveValuesOnly && 0 >= e && (e = null), x.total = x.stackTotal = b.total, x.percentage = b.total && x.y / b.total * 100, x.stackY = y, b.setOffset(this.pointXOffset || 0, this.barW || 0)), x.yBottom = Ds(e) ? h.translate(e, 0, 1, 0, 1) : null, d && (y = this.modifyValue(y, x)), x.plotY = e = "number" == typeof y && 1 / 0 !== y ? Math.min(Math.max(-1e5, h.translate(y, 0, 1, 0, 1)), 1e5) : void 0, x.isInside = void 0 !== e && 0 <= e && e <= h.len && 0 <= t && t <= r.len, x.clientX = u ? Ps(r.translate(v, 0, 0, 0, 1, p)) : t, x.negative = x.y < (f || 0), x.category = a && void 0 !== a[x.x] ? a[x.x] : x.x, x.isNull || (void 0 !== i && (m = Math.min(m, Math.abs(t - i))), i = t), x.zone = this.zones.length && x.getZone()
                }
                this.closestPointRangePx = m
            },
            getValidPoints: function(t, e) {
                var i = this.chart;
                return Rs(t || this.points || [], function(t) {
                    return !(e && !i.isInsidePlot(t.plotX, t.plotY, i.inverted) || t.isNull)
                })
            },
            setClip: function(t) {
                var e = this.chart,
                    i = this.options,
                    s = e.renderer,
                    n = e.inverted,
                    o = this.clipBox,
                    r = o || e.clipBox,
                    a = this.sharedClipKey || ["_sharedClip", t && t.duration, t && t.easing, r.height, i.xAxis, i.yAxis].join(),
                    h = e[a],
                    l = e[a + "m"];
                h || (t && (r.width = 0, e[a + "m"] = l = s.clipRect(-99, n ? -e.plotLeft : -e.plotTop, 99, n ? e.chartWidth : e.chartHeight)), e[a] = h = s.clipRect(r), h.count = {
                    length: 0
                }), t && !h.count[this.index] && (h.count[this.index] = !0, h.count.length += 1), !1 !== i.clip && (this.group.clip(t || o ? h : e.clipRect), this.markerGroup.clip(l), this.sharedClipKey = a), t || (h.count[this.index] && (delete h.count[this.index], --h.count.length), 0 === h.count.length && a && e[a] && (o || (e[a] = e[a].destroy()), e[a + "m"] && (e[a + "m"] = e[a + "m"].destroy())))
            },
            animate: function(t) {
                var e, i = this.chart,
                    s = Ss(this.options.animation);
                t ? this.setClip(s) : ((t = i[e = this.sharedClipKey]) && t.animate({
                    width: i.plotSizeX
                }, s), i[e + "m"] && i[e + "m"].animate({
                    width: i.plotSizeX + 99
                }, s), this.animate = null)
            },
            afterAnimate: function() {
                this.setClip(), Bs(this, "afterAnimate")
            },
            drawPoints: function() {
                var t, e, i, s, n, o, r, a, h = this.points,
                    l = this.chart,
                    c = this.options.marker,
                    d = this[this.specialGroup] || this.markerGroup,
                    p = Ys(c.enabled, !!this.xAxis.isRadial || null, this.closestPointRangePx >= 2 * c.radius);
                if (!1 !== c.enabled || this._hasPointMarkers)
                    for (e = 0; e < h.length; e++) t = (i = h[e]).plotY, s = i.graphic, n = i.marker || {}, o = !!i.marker, r = p && void 0 === n.enabled || n.enabled, a = i.isInside, r && Ws(t) && null !== i.y ? (t = Ys(n.symbol, this.symbol), i.hasImage = 0 === t.indexOf("url"), r = this.markerAttribs(i, i.selected && "select"), s ? s[a ? "show" : "hide"](!0).animate(r) : a && (0 < r.width || i.hasImage) && (i.graphic = s = l.renderer.symbol(t, r.x, r.y, r.width, r.height, o ? n : c).add(d)), s && s.attr(this.pointAttribs(i, i.selected && "select")), s && s.addClass(i.getClassName(), !0)) : s && (i.graphic = s.destroy())
            },
            markerAttribs: function(t, e) {
                var i = this.options.marker,
                    s = t.marker || {},
                    n = Ys(s.radius, i.radius);
                return e && (i = i.states[e], e = s.states && s.states[e], n = Ys(e && e.radius, i && i.radius, n + (i && i.radiusPlus || 0))), t.hasImage && (n = 0), t = {
                    x: Math.floor(t.plotX) - n,
                    y: t.plotY - n
                }, n && (t.width = t.height = 2 * n), t
            },
            pointAttribs: function(t, e) {
                var i = this.options.marker,
                    s = (a = t && t.options) && a.marker || {},
                    n = this.color,
                    o = a && a.color,
                    r = t && t.color,
                    a = Ys(s.lineWidth, i.lineWidth);
                return t = t && t.zone && t.zone.color, n = o || t || r || n, t = s.fillColor || i.fillColor || n, n = s.lineColor || i.lineColor || n, e && (i = i.states[e], e = s.states && s.states[e] || {}, a = Ys(e.lineWidth, i.lineWidth, a + Ys(e.lineWidthPlus, i.lineWidthPlus, 0)), t = e.fillColor || i.fillColor || t, n = e.lineColor || i.lineColor || n), {
                    stroke: n,
                    "stroke-width": a,
                    fill: t
                }
            },
            destroy: function() {
                var t, e, i, s = this,
                    n = s.chart,
                    o = /AppleWebKit\/533/.test(_s.navigator.userAgent),
                    r = s.data || [];
                for (Bs(s, "destroy"), Fs(s), Is(s.axisTypes || [], function(t) {
                        (i = s[t]) && i.series && (zs(i.series, s), i.isDirty = i.forceRedraw = !0)
                    }), s.legendItem && s.chart.legend.destroyItem(s), t = r.length; t--;)(e = r[t]) && e.destroy && e.destroy();
                s.points = null, clearTimeout(s.animationTimeout), Xs(s, function(t, e) {
                    t instanceof js && !t.survive && t[o && "group" === e ? "hide" : "destroy"]()
                }), n.hoverSeries === s && (n.hoverSeries = null), zs(n.series, s), n.orderSeries(), Xs(s, function(t, e) {
                    delete s[e]
                })
            },
            getGraphPath: function(t, e, i) {
                var s, n, o = this,
                    r = o.options,
                    a = r.step,
                    h = [],
                    l = [];
                return (s = (t = t || o.points).reversed) && t.reverse(), (a = {
                    right: 1,
                    center: 2
                } [a] || a && 3) && s && (a = 4 - a), !r.connectNulls || e || i || (t = this.getValidPoints(t)), Is(t, function(s, c) {
                    var d = s.plotX,
                        p = s.plotY,
                        u = t[c - 1];
                    (s.leftCliff || u && u.rightCliff) && !i && (n = !0), s.isNull && !Ds(e) && 0 < c ? n = !r.connectNulls : s.isNull && !e ? n = !0 : (0 === c || n ? c = ["M", s.plotX, s.plotY] : o.getPointSpline ? c = o.getPointSpline(t, s, c) : a ? (c = 1 === a ? ["L", u.plotX, p] : 2 === a ? ["L", (u.plotX + d) / 2, u.plotY, "L", (u.plotX + d) / 2, p] : ["L", d, u.plotY]).push("L", d, p) : c = ["L", d, p], l.push(s.x), a && l.push(s.x), h.push.apply(h, c), n = !1)
                }), h.xMap = l, o.graphPath = h
            },
            drawGraph: function() {
                var t = this,
                    e = this.options,
                    i = (this.gappedPath || this.getGraphPath).call(this),
                    s = [
                        ["graph", "highcharts-graph", e.lineColor || this.color, e.dashStyle]
                    ];
                Is(this.zones, function(i, n) {
                    s.push(["zone-graph-" + n, "highcharts-graph highcharts-zone-graph-" + n + " " + (i.className || ""), i.color || t.color, i.dashStyle || e.dashStyle])
                }), Is(s, function(s, n) {
                    var o = s[0],
                        r = t[o];
                    r ? (r.endX = i.xMap, r.animate({
                        d: i
                    })) : i.length && (t[o] = t.chart.renderer.path(i).addClass(s[1]).attr({
                        zIndex: 1
                    }).add(t.group), r = {
                        stroke: s[2],
                        "stroke-width": e.lineWidth,
                        fill: t.fillGraph && t.color || "none"
                    }, s[3] ? r.dashstyle = s[3] : "square" !== e.linecap && (r["stroke-linecap"] = r["stroke-linejoin"] = "round"), r = t[o].attr(r).shadow(2 > n && e.shadow)), r && (r.startX = i.xMap, r.isArea = i.isArea)
                })
            },
            applyZones: function() {
                var t, e, i, s, n, o, r, a, h, l = this,
                    c = this.chart,
                    d = c.renderer,
                    p = this.zones,
                    u = this.clips || [],
                    f = this.graph,
                    g = this.area,
                    m = Math.max(c.chartWidth, c.chartHeight),
                    x = this[(this.zoneAxis || "y") + "Axis"],
                    v = c.inverted,
                    y = !1;
                p.length && (f || g) && x && void 0 !== x.min && (n = x.reversed, o = x.horiz, f && f.hide(), g && g.hide(), s = x.getExtremes(), Is(p, function(p, b) {
                    t = n ? o ? c.plotWidth : 0 : o ? 0 : x.toPixels(s.min), t = Math.min(Math.max(Ys(e, t), 0), m), e = Math.min(Math.max(Math.round(x.toPixels(Ys(p.value, s.max), !0)), 0), m), y && (t = e = x.toPixels(s.max)), r = Math.abs(t - e), a = Math.min(t, e), h = Math.max(t, e), x.isXAxis ? (i = {
                        x: v ? h : a,
                        y: 0,
                        width: r,
                        height: m
                    }, o || (i.x = c.plotHeight - i.x)) : (i = {
                        x: 0,
                        y: v ? h : a,
                        width: m,
                        height: r
                    }, o && (i.y = c.plotWidth - i.y)), v && d.isVML && (i = x.isXAxis ? {
                        x: 0,
                        y: n ? a : h,
                        height: i.width,
                        width: c.chartWidth
                    } : {
                        x: i.y - c.plotLeft - c.spacingBox.x,
                        y: 0,
                        width: i.height,
                        height: c.chartHeight
                    }), u[b] ? u[b].animate(i) : (u[b] = d.clipRect(i), f && l["zone-graph-" + b].clip(u[b]), g && l["zone-area-" + b].clip(u[b])), y = p.value > s.max
                }), this.clips = u)
            },
            invertGroups: function(t) {
                function e() {
                    Is(["group", "markerGroup"], function(e) {
                        s[e] && (n.renderer.isVML && s[e].attr({
                            width: s.yAxis.len,
                            height: s.xAxis.len
                        }), s[e].width = s.yAxis.len, s[e].height = s.xAxis.len, s[e].invert(t))
                    })
                }
                var i, s = this,
                    n = s.chart;
                s.xAxis && (i = ws(n, "resize", e), ws(s, "destroy", i), e(), s.invertGroups = e)
            },
            plotGroup: function(t, e, i, s, n) {
                var o = this[t],
                    r = !o;
                return r && (this[t] = o = this.chart.renderer.g().attr({
                    zIndex: s || .1
                }).add(n)), o.addClass("highcharts-" + e + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series highcharts-color-" + this.colorIndex + " " + (this.options.className || ""), !0), o.attr({
                    visibility: i
                })[r ? "attr" : "animate"](this.getPlotBox()), o
            },
            getPlotBox: function() {
                var t = this.chart,
                    e = this.xAxis,
                    i = this.yAxis;
                return t.inverted && (e = i, i = this.xAxis), {
                    translateX: e ? e.left : t.plotLeft,
                    translateY: i ? i.top : t.plotTop,
                    scaleX: 1,
                    scaleY: 1
                }
            },
            render: function() {
                var t, e = this,
                    i = e.chart,
                    s = e.options,
                    n = !!e.animate && i.renderer.isSVG && Ss(s.animation).duration,
                    o = e.visible ? "inherit" : "hidden",
                    r = s.zIndex,
                    a = e.hasRendered,
                    h = i.seriesGroup,
                    l = i.inverted;
                t = e.plotGroup("group", "series", o, r, h), e.markerGroup = e.plotGroup("markerGroup", "markers", o, r, h), n && e.animate(!0), t.inverted = !!e.isCartesian && l, e.drawGraph && (e.drawGraph(), e.applyZones()), e.drawDataLabels && e.drawDataLabels(), e.visible && e.drawPoints(), e.drawTracker && !1 !== e.options.enableMouseTracking && e.drawTracker(), e.invertGroups(l), !1 === s.clip || e.sharedClipKey || a || t.clip(i.clipRect), n && e.animate(), a || (e.animationTimeout = Us(function() {
                    e.afterAnimate()
                }, n)), e.isDirty = !1, e.hasRendered = !0
            },
            redraw: function() {
                var t = this.chart,
                    e = this.isDirty || this.isDirtyData,
                    i = this.group,
                    s = this.xAxis,
                    n = this.yAxis;
                i && (t.inverted && i.attr({
                    width: t.plotWidth,
                    height: t.plotHeight
                }), i.animate({
                    translateX: Ys(s && s.left, t.plotLeft),
                    translateY: Ys(n && n.top, t.plotTop)
                })), this.translate(), this.render(), e && delete this.kdTree
            },
            kdAxisArray: ["clientX", "plotY"],
            searchPoint: function(t, e) {
                var i = this.xAxis,
                    s = this.yAxis,
                    n = this.chart.inverted;
                return this.searchKDTree({
                    clientX: n ? i.len - t.chartY + i.pos : t.chartX - i.pos,
                    plotY: n ? s.len - t.chartX + s.pos : t.chartY - s.pos
                }, e)
            },
            buildKDTree: function() {
                this.buildingKdTree = !0;
                var t = this,
                    e = -1 < t.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                delete t.kdTree, Us(function() {
                    t.kdTree = function e(i, s, n) {
                        var o, r;
                        if (r = i && i.length) return o = t.kdAxisArray[s % n], i.sort(function(t, e) {
                            return t[o] - e[o]
                        }), {
                            point: i[r = Math.floor(r / 2)],
                            left: e(i.slice(0, r), s + 1, n),
                            right: e(i.slice(r + 1), s + 1, n)
                        }
                    }(t.getValidPoints(null, !t.directTouch), e, e), t.buildingKdTree = !1
                }, t.options.kdNow ? 0 : 1)
            },
            searchKDTree: function(t, e) {
                var i = this,
                    s = this.kdAxisArray[0],
                    n = this.kdAxisArray[1],
                    o = e ? "distX" : "dist";
                if (e = -1 < i.options.findNearestPointBy.indexOf("y") ? 2 : 1, this.kdTree || this.buildingKdTree || this.buildKDTree(), this.kdTree) return function t(e, r, a, h) {
                    var l, c, d = r.point,
                        p = i.kdAxisArray[a % h],
                        u = d;
                    return l = ((c = Ds(e[s]) && Ds(d[s]) ? Math.pow(e[s] - d[s], 2) : null) || 0) + ((l = Ds(e[n]) && Ds(d[n]) ? Math.pow(e[n] - d[n], 2) : null) || 0), d.dist = Ds(l) ? Math.sqrt(l) : Number.MAX_VALUE, d.distX = Ds(c) ? Math.sqrt(c) : Number.MAX_VALUE, c = 0 > (p = e[p] - d[p]) ? "right" : "left", r[l = 0 > p ? "left" : "right"] && (u = (l = t(e, r[l], a + 1, h))[o] < u[o] ? l : d), r[c] && Math.sqrt(p * p) < u[o] && (u = (e = t(e, r[c], a + 1, h))[o] < u[o] ? e : u), u
                }(t, this.kdTree, e, e)
            }
        }),
        function(t) {
            function e(t, e, i, s, n) {
                var o = t.chart.inverted;
                this.axis = t, this.isNegative = i, this.options = e, this.x = s, this.total = null, this.points = {}, this.stack = n, this.rightCliff = this.leftCliff = 0, this.alignOptions = {
                    align: e.align || (o ? i ? "left" : "right" : "center"),
                    verticalAlign: e.verticalAlign || (o ? "middle" : i ? "bottom" : "top"),
                    y: c(e.y, o ? 4 : i ? 14 : -6),
                    x: c(e.x, o ? i ? -6 : 6 : 0)
                }, this.textAlign = e.textAlign || (o ? i ? "right" : "left" : "center")
            }
            var i = t.Axis,
                s = t.Chart,
                n = t.correctFloat,
                o = t.defined,
                r = t.destroyObjectProperties,
                a = t.each,
                h = t.format,
                l = t.objectEach,
                c = t.pick;
            t = t.Series, e.prototype = {
                destroy: function() {
                    r(this, this.axis)
                },
                render: function(t) {
                    var e = this.options,
                        i = (i = e.format) ? h(i, this) : e.formatter.call(this);
                    this.label ? this.label.attr({
                        text: i,
                        visibility: "hidden"
                    }) : this.label = this.axis.chart.renderer.text(i, null, null, e.useHTML).css(e.style).attr({
                        align: this.textAlign,
                        rotation: e.rotation,
                        visibility: "hidden"
                    }).add(t)
                },
                setOffset: function(t, e) {
                    var i = (r = this.axis).chart,
                        s = i.inverted,
                        n = r.reversed,
                        o = (n = this.isNegative && !n || !this.isNegative && n, r.translate(r.usePercentage ? 100 : this.total, 0, 0, 0, 1)),
                        r = r.translate(0);
                    r = Math.abs(o - r);
                    t = i.xAxis[0].translate(this.x) + t;
                    var a = i.plotHeight;
                    s = {
                        x: s ? n ? o : o - r : t,
                        y: s ? a - t - e : n ? a - o - r : a - o,
                        width: s ? r : e,
                        height: s ? e : r
                    };
                    (e = this.label) && (e.align(this.alignOptions, null, s), s = e.alignAttr, e[!1 === this.options.crop || i.isInsidePlot(s.x, s.y) ? "show" : "hide"](!0))
                }
            }, s.prototype.getStacks = function() {
                var t = this;
                a(t.yAxis, function(t) {
                    t.stacks && t.hasVisibleSeries && (t.oldStacks = t.stacks)
                }), a(t.series, function(e) {
                    !e.options.stacking || !0 !== e.visible && !1 !== t.options.chart.ignoreHiddenSeries || (e.stackKey = e.type + c(e.options.stack, ""))
                })
            }, i.prototype.buildStacks = function() {
                var t, e, i = this.series,
                    s = c(this.options.reversedStacks, !0),
                    n = i.length;
                if (!this.isXAxis) {
                    for (this.usePercentage = !1, e = n; e--;) i[s ? e : n - e - 1].setStackedPoints();
                    for (e = n; e--;)(t = i[s ? e : n - e - 1]).setStackCliffs && t.setStackCliffs();
                    if (this.usePercentage)
                        for (e = 0; e < n; e++) i[e].setPercentStacks()
                }
            }, i.prototype.renderStackTotals = function() {
                var t = this.chart,
                    e = t.renderer,
                    i = this.stacks,
                    s = this.stackTotalGroup;
                s || (this.stackTotalGroup = s = e.g("stack-labels").attr({
                    visibility: "visible",
                    zIndex: 6
                }).add()), s.translate(t.plotLeft, t.plotTop), l(i, function(t) {
                    l(t, function(t) {
                        t.render(s)
                    })
                })
            }, i.prototype.resetStacks = function() {
                var t = this,
                    e = t.stacks;
                t.isXAxis || l(e, function(e) {
                    l(e, function(i, s) {
                        i.touched < t.stacksTouched ? (i.destroy(), delete e[s]) : (i.total = null, i.cum = null)
                    })
                })
            }, i.prototype.cleanStacks = function() {
                var t;
                this.isXAxis || (this.oldStacks && (t = this.stacks = this.oldStacks), l(t, function(t) {
                    l(t, function(t) {
                        t.cum = t.total
                    })
                }))
            }, t.prototype.setStackedPoints = function() {
                if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                    var t, i, s, r, a, h, l, d = this.processedXData,
                        p = this.processedYData,
                        u = [],
                        f = p.length,
                        g = (v = this.options).threshold,
                        m = v.startFromThreshold ? g : 0,
                        x = v.stack,
                        v = v.stacking,
                        y = this.stackKey,
                        b = "-" + y,
                        k = this.negStacks,
                        M = this.yAxis,
                        w = M.stacks,
                        S = M.oldStacks;
                    for (M.stacksTouched += 1, a = 0; a < f; a++) h = d[a], l = p[a], r = (t = this.getStackIndicator(t, h, this.index)).key, w[s = (i = k && l < (m ? 0 : g)) ? b : y] || (w[s] = {}), w[s][h] || (S[s] && S[s][h] ? (w[s][h] = S[s][h], w[s][h].total = null) : w[s][h] = new e(M, M.options.stackLabels, i, h, x)), s = w[s][h], null !== l && (s.points[r] = s.points[this.index] = [c(s.cum, m)], o(s.cum) || (s.base = r), s.touched = M.stacksTouched, 0 < t.index && !1 === this.singleStacks && (s.points[r][0] = s.points[this.index + "," + h + ",0"][0])), "percent" === v ? (i = i ? y : b, k && w[i] && w[i][h] ? (i = w[i][h], s.total = i.total = Math.max(i.total, s.total) + Math.abs(l) || 0) : s.total = n(s.total + (Math.abs(l) || 0))) : s.total = n(s.total + (l || 0)), s.cum = c(s.cum, m) + (l || 0), null !== l && (s.points[r].push(s.cum), u[a] = s.cum);
                    "percent" === v && (M.usePercentage = !0), this.stackedYData = u, M.oldStacks = {}
                }
            }, t.prototype.setPercentStacks = function() {
                var t, e = this,
                    i = e.stackKey,
                    s = e.yAxis.stacks,
                    o = e.processedXData;
                a([i, "-" + i], function(i) {
                    for (var r, a, h = o.length; h--;) r = o[h], t = e.getStackIndicator(t, r, e.index, i), (r = (a = s[i] && s[i][r]) && a.points[t.key]) && (a = a.total ? 100 / a.total : 0, r[0] = n(r[0] * a), r[1] = n(r[1] * a), e.stackedYData[h] = r[1])
                })
            }, t.prototype.getStackIndicator = function(t, e, i, s) {
                return !o(t) || t.x !== e || s && t.key !== s ? t = {
                    x: e,
                    index: 0,
                    key: s
                } : t.index++, t.key = [i, e, t.index].join(), t
            }
        }(t), Zs = (Ks = t).addEvent, qs = Ks.animate, $s = Ks.Axis, Js = Ks.createElement, Qs = Ks.css, tn = Ks.defined, en = Ks.each, sn = Ks.erase, nn = Ks.extend, on = Ks.fireEvent, rn = Ks.inArray, an = Ks.isNumber, hn = Ks.isObject, ln = Ks.isArray, cn = Ks.merge, dn = Ks.objectEach, pn = Ks.pick, un = Ks.Point, fn = Ks.Series, gn = Ks.seriesTypes, mn = Ks.setAnimation, xn = Ks.splat, nn(Ks.Chart.prototype, {
            addSeries: function(t, e, i) {
                var s, n = this;
                return t && (e = pn(e, !0), on(n, "addSeries", {
                    options: t
                }, function() {
                    s = n.initSeries(t), n.isDirtyLegend = !0, n.linkSeries(), e && n.redraw(i)
                })), s
            },
            addAxis: function(t, e, i, s) {
                var n = e ? "xAxis" : "yAxis",
                    o = this.options;
                t = cn(t, {
                    index: this[n].length,
                    isX: e
                }), new $s(this, t), o[n] = xn(o[n] || {}), o[n].push(t), pn(i, !0) && this.redraw(s)
            },
            showLoading: function(t) {
                var e = this,
                    i = e.options,
                    s = e.loadingDiv,
                    n = i.loading,
                    o = function() {
                        s && Qs(s, {
                            left: e.plotLeft + "px",
                            top: e.plotTop + "px",
                            width: e.plotWidth + "px",
                            height: e.plotHeight + "px"
                        })
                    };
                s || (e.loadingDiv = s = Js("div", {
                    className: "highcharts-loading highcharts-loading-hidden"
                }, null, e.container), e.loadingSpan = Js("span", {
                    className: "highcharts-loading-inner"
                }, null, s), Zs(e, "redraw", o)), s.className = "highcharts-loading", e.loadingSpan.innerHTML = t || i.lang.loading, Qs(s, nn(n.style, {
                    zIndex: 10
                })), Qs(e.loadingSpan, n.labelStyle), e.loadingShown || (Qs(s, {
                    opacity: 0,
                    display: ""
                }), qs(s, {
                    opacity: n.style.opacity || .5
                }, {
                    duration: n.showDuration || 0
                })), e.loadingShown = !0, o()
            },
            hideLoading: function() {
                var t = this.options,
                    e = this.loadingDiv;
                e && (e.className = "highcharts-loading highcharts-loading-hidden", qs(e, {
                    opacity: 0
                }, {
                    duration: t.loading.hideDuration || 100,
                    complete: function() {
                        Qs(e, {
                            display: "none"
                        })
                    }
                })), this.loadingShown = !1
            },
            propsRequireDirtyBox: "backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions tooltip".split(" "),
            update: function(t, e) {
                var i, s, n = this,
                    o = {
                        credits: "addCredits",
                        title: "setTitle",
                        subtitle: "setSubtitle"
                    },
                    r = t.chart;
                r && (cn(!0, n.options.chart, r), "className" in r && n.setClassName(r.className), ("inverted" in r || "polar" in r) && (n.propFromSeries(), i = !0), "alignTicks" in r && (i = !0), dn(r, function(t, e) {
                    -1 !== rn("chart." + e, n.propsRequireUpdateSeries) && (s = !0), -1 !== rn(e, n.propsRequireDirtyBox) && (n.isDirtyBox = !0)
                }), "style" in r && n.renderer.setStyle(r.style)), t.colors && (this.options.colors = t.colors), t.plotOptions && cn(!0, this.options.plotOptions, t.plotOptions), dn(t, function(t, e) {
                    n[e] && "function" == typeof n[e].update ? n[e].update(t, !1) : "function" == typeof n[o[e]] && n[o[e]](t), "chart" !== e && -1 !== rn(e, n.propsRequireUpdateSeries) && (s = !0)
                }), en("xAxis yAxis zAxis series colorAxis pane".split(" "), function(e) {
                    t[e] && en(xn(t[e]), function(t, i) {
                        (i = tn(t.id) && n.get(t.id) || n[e][i]) && i.coll === e && i.update(t, !1)
                    })
                }), i && en(n.axes, function(t) {
                    t.update({}, !1)
                }), s && en(n.series, function(t) {
                    t.update({}, !1)
                }), t.loading && cn(!0, n.options.loading, t.loading), i = r && r.width, r = r && r.height, an(i) && i !== n.chartWidth || an(r) && r !== n.chartHeight ? n.setSize(i, r) : pn(e, !0) && n.redraw()
            },
            setSubtitle: function(t) {
                this.setTitle(void 0, t)
            }
        }), nn(un.prototype, {
            update: function(t, e, i, s) {
                function n() {
                    r.applyOptions(t), null === r.y && h && (r.graphic = h.destroy()), hn(t, !0) && (h && h.element && t && t.marker && t.marker.symbol && (r.graphic = h.destroy()), t && t.dataLabels && r.dataLabel && (r.dataLabel = r.dataLabel.destroy())), o = r.index, a.updateParallelArrays(r, o), c.data[o] = hn(c.data[o], !0) || hn(t, !0) ? r.options : t, a.isDirty = a.isDirtyData = !0, !a.fixedBox && a.hasCartesianSeries && (l.isDirtyBox = !0), "point" === c.legendType && (l.isDirtyLegend = !0), e && l.redraw(i)
                }
                var o, r = this,
                    a = r.series,
                    h = r.graphic,
                    l = a.chart,
                    c = a.options;
                e = pn(e, !0), !1 === s ? n() : r.firePointEvent("update", {
                    options: t
                }, n)
            },
            remove: function(t, e) {
                this.series.removePoint(rn(this, this.series.data), t, e)
            }
        }), nn(fn.prototype, {
            addPoint: function(t, e, i, s) {
                var n, o, r, a, h = this.options,
                    l = this.data,
                    c = this.chart,
                    d = (d = this.xAxis) && d.hasNames && d.names,
                    p = h.data,
                    u = this.xData;
                if (e = pn(e, !0), n = {
                        series: this
                    }, this.pointClass.prototype.applyOptions.apply(n, [t]), a = n.x, r = u.length, this.requireSorting && a < u[r - 1])
                    for (o = !0; r && u[r - 1] > a;) r--;
                this.updateParallelArrays(n, "splice", r, 0, 0), this.updateParallelArrays(n, r), d && n.name && (d[a] = n.name), p.splice(r, 0, t), o && (this.data.splice(r, 0, null), this.processData()), "point" === h.legendType && this.generatePoints(), i && (l[0] && l[0].remove ? l[0].remove(!1) : (l.shift(), this.updateParallelArrays(n, "shift"), p.shift())), this.isDirtyData = this.isDirty = !0, e && c.redraw(s)
            },
            removePoint: function(t, e, i) {
                var s = this,
                    n = s.data,
                    o = n[t],
                    r = s.points,
                    a = s.chart,
                    h = function() {
                        r && r.length === n.length && r.splice(t, 1), n.splice(t, 1), s.options.data.splice(t, 1), s.updateParallelArrays(o || {
                            series: s
                        }, "splice", t, 1), o && o.destroy(), s.isDirty = !0, s.isDirtyData = !0, e && a.redraw()
                    };
                mn(i, a), e = pn(e, !0), o ? o.firePointEvent("remove", null, h) : h()
            },
            remove: function(t, e, i) {
                function s() {
                    n.destroy(), o.isDirtyLegend = o.isDirtyBox = !0, o.linkSeries(), pn(t, !0) && o.redraw(e)
                }
                var n = this,
                    o = n.chart;
                !1 !== i ? on(n, "remove", null, s) : s()
            },
            update: function(t, e) {
                var i, s = this,
                    n = s.chart,
                    o = s.userOptions,
                    r = s.oldType || s.type,
                    a = t.type || o.type || n.options.chart.type,
                    h = gn[r].prototype,
                    l = ["group", "markerGroup", "dataLabelsGroup"];
                if (Object.keys && "data" === Object.keys(t).toString()) return this.setData(t.data, e);
                for (i in (a && a !== r || void 0 !== t.zIndex) && (l.length = 0), en(l, function(t) {
                        l[t] = s[t], delete s[t]
                    }), t = cn(o, {
                        animation: !1,
                        index: s.index,
                        pointStart: s.xData[0]
                    }, {
                        data: s.options.data
                    }, t), s.remove(!1, null, !1), h) s[i] = void 0;
                nn(s, gn[a || r].prototype), en(l, function(t) {
                    s[t] = l[t]
                }), s.init(n, t), s.oldType = r, n.linkSeries(), pn(e, !0) && n.redraw(!1)
            }
        }), nn($s.prototype, {
            update: function(t, e) {
                var i = this.chart;
                t = i.options[this.coll][this.options.index] = cn(this.userOptions, t), this.destroy(!0), this.init(i, nn(t, {
                    events: void 0
                })), i.isDirtyBox = !0, pn(e, !0) && i.redraw()
            },
            remove: function(t) {
                for (var e = this.chart, i = this.coll, s = this.series, n = s.length; n--;) s[n] && s[n].remove(!1);
                sn(e.axes, this), sn(e[i], this), ln(e.options[i]) ? e.options[i].splice(this.options.index, 1) : delete e.options[i], en(e[i], function(t, e) {
                    t.options.index = e
                }), this.destroy(), e.isDirtyBox = !0, pn(t, !0) && e.redraw()
            },
            setTitle: function(t, e) {
                this.update({
                    title: t
                }, e)
            },
            setCategories: function(t, e) {
                this.update({
                    categories: t
                }, e)
            }
        }), yn = (vn = t).color, bn = vn.each, kn = vn.map, Mn = vn.pick, wn = vn.Series, (0, vn.seriesType)("area", "line", {
            softThreshold: !1,
            threshold: 0
        }, {
            singleStacks: !1,
            getStackPoints: function() {
                var t, e, i = [],
                    s = [],
                    n = this.xAxis,
                    o = this.yAxis,
                    r = o.stacks[this.stackKey],
                    a = {},
                    h = this.points,
                    l = this.index,
                    c = o.series,
                    d = c.length,
                    p = Mn(o.options.reversedStacks, !0) ? 1 : -1;
                if (this.options.stacking) {
                    for (e = 0; e < h.length; e++) a[h[e].x] = h[e];
                    vn.objectEach(r, function(t, e) {
                        null !== t.total && s.push(e)
                    }), s.sort(function(t, e) {
                        return t - e
                    }), t = kn(c, function() {
                        return this.visible
                    }), bn(s, function(h, c) {
                        var u, f, g = 0;
                        if (a[h] && !a[h].isNull) i.push(a[h]), bn([-1, 1], function(i) {
                            var n = 1 === i ? "rightNull" : "leftNull",
                                o = 0,
                                g = r[s[c + i]];
                            if (g)
                                for (e = l; 0 <= e && e < d;)(u = g.points[e]) || (e === l ? a[h][n] = !0 : t[e] && (f = r[h].points[e]) && (o -= f[1] - f[0])), e += p;
                            a[h][1 === i ? "rightCliff" : "leftCliff"] = o
                        });
                        else {
                            for (e = l; 0 <= e && e < d;) {
                                if (u = r[h].points[e]) {
                                    g = u[1];
                                    break
                                }
                                e += p
                            }
                            g = o.translate(g, 0, 1, 0, 1), i.push({
                                isNull: !0,
                                plotX: n.translate(h, 0, 0, 0, 1),
                                x: h,
                                plotY: g,
                                yBottom: g
                            })
                        }
                    })
                }
                return i
            },
            getGraphPath: function(t) {
                var e, i, s, n, o = wn.prototype.getGraphPath,
                    r = (f = this.options).stacking,
                    a = this.yAxis,
                    h = [],
                    l = [],
                    c = this.index,
                    d = a.stacks[this.stackKey],
                    p = f.threshold,
                    u = a.getThreshold(f.threshold),
                    f = f.connectNulls || "percent" === r,
                    g = function(e, i, n) {
                        var o = t[e];
                        e = r && d[o.x].points[c];
                        var f, g, m = o[n + "Null"] || 0;
                        n = o[n + "Cliff"] || 0, o = !0, n || m ? (f = (m ? e[0] : e[1]) + n, g = e[0] + n, o = !!m) : !r && t[i] && t[i].isNull && (f = g = p), void 0 !== f && (l.push({
                            plotX: s,
                            plotY: null === f ? u : a.getThreshold(f),
                            isNull: o,
                            isCliff: !0
                        }), h.push({
                            plotX: s,
                            plotY: null === g ? u : a.getThreshold(g),
                            doCurve: !1
                        }))
                    };
                for (t = t || this.points, r && (t = this.getStackPoints()), e = 0; e < t.length; e++) i = t[e].isNull, s = Mn(t[e].rectPlotX, t[e].plotX), n = Mn(t[e].yBottom, u), (!i || f) && (f || g(e, e - 1, "left"), i && !r && f || (l.push(t[e]), h.push({
                    x: e,
                    plotX: s,
                    plotY: n
                })), f || g(e, e + 1, "right"));
                return e = o.call(this, l, !0, !0), h.reversed = !0, (i = o.call(this, h, !0, !0)).length && (i[0] = "L"), i = e.concat(i), o = o.call(this, l, !1, f), i.xMap = e.xMap, this.areaPath = i, o
            },
            drawGraph: function() {
                this.areaPath = [], wn.prototype.drawGraph.apply(this);
                var t = this,
                    e = this.areaPath,
                    i = this.options,
                    s = [
                        ["area", "highcharts-area", this.color, i.fillColor]
                    ];
                bn(this.zones, function(e, n) {
                    s.push(["zone-area-" + n, "highcharts-area highcharts-zone-area-" + n + " " + e.className, e.color || t.color, e.fillColor || i.fillColor])
                }), bn(s, function(s) {
                    var n = s[0],
                        o = t[n];
                    o ? (o.endX = e.xMap, o.animate({
                        d: e
                    })) : (o = t[n] = t.chart.renderer.path(e).addClass(s[1]).attr({
                        fill: Mn(s[3], yn(s[2]).setOpacity(Mn(i.fillOpacity, .75)).get()),
                        zIndex: 0
                    }).add(t.group)).isArea = !0, o.startX = e.xMap, o.shiftUnit = i.step ? 2 : 1
                })
            },
            drawLegendSymbol: vn.LegendSymbolMixin.drawRectangle
        }), An = (Sn = t).pick, (Sn = Sn.seriesType)("spline", "line", {}, {
            getPointSpline: function(t, e, i) {
                var s, n, o, r, a = e.plotX,
                    h = e.plotY,
                    l = t[i - 1];
                if (i = t[i + 1], l && !l.isNull && !1 !== l.doCurve && !e.isCliff && i && !i.isNull && !1 !== i.doCurve && !e.isCliff) {
                    t = l.plotY, o = i.plotX;
                    var c = 0;
                    n = (1.5 * h + t) / 2.5, r = (1.5 * h + (i = i.plotY)) / 2.5, (o = (1.5 * a + o) / 2.5) != (s = (1.5 * a + l.plotX) / 2.5) && (c = (r - n) * (o - a) / (o - s) + h - r), r += c, (n += c) > t && n > h ? r = 2 * h - (n = Math.max(t, h)) : n < t && n < h && (r = 2 * h - (n = Math.min(t, h))), r > i && r > h ? n = 2 * h - (r = Math.max(i, h)) : r < i && r < h && (n = 2 * h - (r = Math.min(i, h))), e.rightContX = o, e.rightContY = r
                }
                return e = ["C", An(l.rightContX, l.plotX), An(l.rightContY, l.plotY), An(s, a), An(n, h), a, h], l.rightContX = l.rightContY = null, e
            }
        }), Pn = (Tn = t).seriesTypes.area.prototype, (0, Tn.seriesType)("areaspline", "spline", Tn.defaultPlotOptions.area, {
            getStackPoints: Pn.getStackPoints,
            getGraphPath: Pn.getGraphPath,
            setStackCliffs: Pn.setStackCliffs,
            drawGraph: Pn.drawGraph,
            drawLegendSymbol: Tn.LegendSymbolMixin.drawRectangle
        }), Ln = (Cn = t).animObject, On = Cn.color, Dn = Cn.each, In = Cn.extend, zn = Cn.isNumber, En = Cn.merge, Bn = Cn.pick, Rn = Cn.Series, Gn = Cn.seriesType, Wn = Cn.svg, Gn("column", "line", {
            borderRadius: 0,
            crisp: !0,
            groupPadding: .2,
            marker: null,
            pointPadding: .1,
            minPointLength: 0,
            cropThreshold: 50,
            pointRange: null,
            states: {
                hover: {
                    halo: !1,
                    brightness: .1,
                    shadow: !1
                },
                select: {
                    color: "#cccccc",
                    borderColor: "#000000",
                    shadow: !1
                }
            },
            dataLabels: {
                align: null,
                verticalAlign: null,
                y: null
            },
            softThreshold: !1,
            startFromThreshold: !0,
            stickyTracking: !1,
            tooltip: {
                distance: 6
            },
            threshold: 0,
            borderColor: "#ffffff"
        }, {
            cropShoulder: 0,
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            negStacks: !0,
            init: function() {
                Rn.prototype.init.apply(this, arguments);
                var t = this,
                    e = t.chart;
                e.hasRendered && Dn(e.series, function(e) {
                    e.type === t.type && (e.isDirty = !0)
                })
            },
            getColumnMetrics: function() {
                var t, e = this,
                    i = e.options,
                    s = e.xAxis,
                    n = e.yAxis,
                    o = s.reversed,
                    r = {},
                    a = 0;
                !1 === i.grouping ? a = 1 : Dn(e.chart.series, function(i) {
                    var s, o = i.options,
                        h = i.yAxis;
                    i.type !== e.type || !i.visible && e.chart.options.chart.ignoreHiddenSeries || n.len !== h.len || n.pos !== h.pos || (o.stacking ? (t = i.stackKey, void 0 === r[t] && (r[t] = a++), s = r[t]) : !1 !== o.grouping && (s = a++), i.columnIndex = s)
                });
                var h = Math.min(Math.abs(s.transA) * (s.ordinalSlope || i.pointRange || s.closestPointRange || s.tickInterval || 1), s.len),
                    l = h * i.groupPadding,
                    c = (h - 2 * l) / (a || 1);
                return i = Math.min(i.maxPointWidth || s.len, Bn(i.pointWidth, c * (1 - 2 * i.pointPadding))), e.columnMetrics = {
                    width: i,
                    offset: (c - i) / 2 + (l + ((e.columnIndex || 0) + (o ? 1 : 0)) * c - h / 2) * (o ? -1 : 1)
                }, e.columnMetrics
            },
            crispCol: function(t, e, i, s) {
                var n = this.chart,
                    o = -((r = this.borderWidth) % 2 ? .5 : 0),
                    r = r % 2 ? .5 : 1;
                return n.inverted && n.renderer.isVML && (r += 1), this.options.crisp && (i = Math.round(t + i) + o, i -= t = Math.round(t) + o), s = Math.round(e + s) + r, o = .5 >= Math.abs(e) && .5 < s, s -= e = Math.round(e) + r, o && s && (--e, s += 1), {
                    x: t,
                    y: e,
                    width: i,
                    height: s
                }
            },
            translate: function() {
                var t = this,
                    e = t.chart,
                    i = t.options,
                    s = t.dense = 2 > t.closestPointRange * t.xAxis.transA,
                    n = (s = t.borderWidth = Bn(i.borderWidth, s ? 0 : 1), t.yAxis),
                    o = t.translatedThreshold = n.getThreshold(i.threshold),
                    r = Bn(i.minPointLength, 5),
                    a = t.getColumnMetrics(),
                    h = a.width,
                    l = t.barW = Math.max(h, 1 + 2 * s),
                    c = t.pointXOffset = a.offset;
                e.inverted && (o -= .5), i.pointPadding && (l = Math.ceil(l)), Rn.prototype.translate.apply(t), Dn(t.points, function(i) {
                    var s, a = Bn(i.yBottom, o),
                        d = 999 + Math.abs(a),
                        p = (d = Math.min(Math.max(-d, i.plotY), n.len + d), i.plotX + c),
                        u = l,
                        f = Math.min(d, a),
                        g = Math.max(d, a) - f;
                    Math.abs(g) < r && r && (g = r, s = !n.reversed && !i.negative || n.reversed && i.negative, f = Math.abs(f - o) > r ? a - r : o - (s ? r : 0)), i.barX = p, i.pointWidth = h, i.tooltipPos = e.inverted ? [n.len + n.pos - e.plotLeft - d, t.xAxis.len - p - u / 2, g] : [p + u / 2, d + n.pos - e.plotTop, g], i.shapeType = "rect", i.shapeArgs = t.crispCol.apply(t, i.isNull ? [p, o, u, 0] : [p, f, u, g])
                })
            },
            getSymbol: Cn.noop,
            drawLegendSymbol: Cn.LegendSymbolMixin.drawRectangle,
            drawGraph: function() {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data")
            },
            pointAttribs: function(t, e) {
                var i, s = this.options;
                i = (h = this.pointAttrToOptions || {}).stroke || "borderColor";
                var n = h["stroke-width"] || "borderWidth",
                    o = t && t.color || this.color,
                    r = t[i] || s[i] || this.color || o,
                    a = t[n] || s[n] || this[n] || 0,
                    h = s.dashStyle;
                return t && this.zones.length && (o = t.getZone(), o = t.options.color || o && o.color || this.color), e && (e = (t = En(s.states[e], t.options.states && t.options.states[e] || {})).brightness, o = t.color || void 0 !== e && On(o).brighten(t.brightness).get() || o, r = t[i] || r, a = t[n] || a, h = t.dashStyle || h), i = {
                    fill: o,
                    stroke: r,
                    "stroke-width": a
                }, s.borderRadius && (i.r = s.borderRadius), h && (i.dashstyle = h), i
            },
            drawPoints: function() {
                var t, e = this,
                    i = this.chart,
                    s = e.options,
                    n = i.renderer,
                    o = s.animationLimit || 250;
                Dn(e.points, function(r) {
                    var a = r.graphic;
                    zn(r.plotY) && null !== r.y ? (t = r.shapeArgs, a ? a[i.pointCount < o ? "animate" : "attr"](En(t)) : r.graphic = a = n[r.shapeType](t).add(r.group || e.group), a.attr(e.pointAttribs(r, r.selected && "select")).shadow(s.shadow, null, s.stacking && !s.borderRadius), a.addClass(r.getClassName(), !0)) : a && (r.graphic = a.destroy())
                })
            },
            animate: function(t) {
                var e = this,
                    i = this.yAxis,
                    s = e.options,
                    n = this.chart.inverted,
                    o = {};
                Wn && (t ? (o.scaleY = .001, t = Math.min(i.pos + i.len, Math.max(i.pos, i.toPixels(s.threshold))), n ? o.translateX = t - i.len : o.translateY = t, e.group.attr(o)) : (o[n ? "translateX" : "translateY"] = i.pos, e.group.animate(o, In(Ln(e.options.animation), {
                    step: function(t, i) {
                        e.group.attr({
                            scaleY: Math.max(.001, i.pos)
                        })
                    }
                })), e.animate = null))
            },
            remove: function() {
                var t = this,
                    e = t.chart;
                e.hasRendered && Dn(e.series, function(e) {
                    e.type === t.type && (e.isDirty = !0)
                }), Rn.prototype.remove.apply(t, arguments)
            }
        }), (0, t.seriesType)("bar", "column", null, {
            inverted: !0
        }), Nn = (Hn = t).Series, (Hn = Hn.seriesType)("scatter", "line", {
            lineWidth: 0,
            findNearestPointBy: "xy",
            marker: {
                enabled: !0
            },
            tooltip: {
                headerFormat: '<span style="color:{point.color}">●</span> <span style="font-size: 0.85em"> {series.name}</span><br/>',
                pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
            }
        }, {
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
            takeOrdinalPosition: !1,
            drawGraph: function() {
                this.options.lineWidth && Nn.prototype.drawGraph.call(this)
            }
        }), Yn = (Xn = t).pick, Fn = Xn.relativeLength, Xn.CenteredSeriesMixin = {
            getCenter: function() {
                var t, e, i = this.options,
                    s = this.chart,
                    n = 2 * (i.slicedOffset || 0),
                    o = s.plotWidth - 2 * n,
                    r = (s = s.plotHeight - 2 * n, i.center),
                    a = (r = [Yn(r[0], "50%"), Yn(r[1], "50%"), i.size || "100%", i.innerSize || 0], Math.min(o, s));
                for (t = 0; 4 > t; ++t) e = r[t], i = 2 > t || 2 === t && /%$/.test(e), r[t] = Fn(e, [o, s, a, r[2]][t]) + (i ? n : 0);
                return r[3] > r[2] && (r[3] = r[2]), r
            }
        }, jn = (Vn = t).addEvent, Un = Vn.defined, _n = Vn.each, Kn = Vn.extend, Zn = Vn.inArray, qn = Vn.noop, $n = Vn.pick, Jn = Vn.Point, Qn = Vn.Series, to = Vn.seriesType, eo = Vn.setAnimation, to("pie", "line", {
            center: [null, null],
            clip: !1,
            colorByPoint: !0,
            dataLabels: {
                distance: 30,
                enabled: !0,
                formatter: function() {
                    return this.point.isNull ? void 0 : this.point.name
                },
                x: 0
            },
            ignoreHiddenPoint: !0,
            legendType: "point",
            marker: null,
            size: null,
            showInLegend: !1,
            slicedOffset: 10,
            stickyTracking: !1,
            tooltip: {
                followPointer: !0
            },
            borderColor: "#ffffff",
            borderWidth: 1,
            states: {
                hover: {
                    brightness: .1,
                    shadow: !1
                }
            }
        }, {
            isCartesian: !1,
            requireSorting: !1,
            directTouch: !0,
            noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            axisTypes: [],
            pointAttribs: Vn.seriesTypes.column.prototype.pointAttribs,
            animate: function(t) {
                var e = this,
                    i = e.points,
                    s = e.startAngleRad;
                t || (_n(i, function(t) {
                    var i = t.graphic,
                        n = t.shapeArgs;
                    i && (i.attr({
                        r: t.startR || e.center[3] / 2,
                        start: s,
                        end: s
                    }), i.animate({
                        r: n.r,
                        start: n.start,
                        end: n.end
                    }, e.options.animation))
                }), e.animate = null)
            },
            updateTotals: function() {
                var t, e, i = 0,
                    s = this.points,
                    n = s.length,
                    o = this.options.ignoreHiddenPoint;
                for (t = 0; t < n; t++) e = s[t], i += o && !e.visible ? 0 : e.isNull ? 0 : e.y;
                for (this.total = i, t = 0; t < n; t++)(e = s[t]).percentage = 0 < i && (e.visible || !o) ? e.y / i * 100 : 0, e.total = i
            },
            generatePoints: function() {
                Qn.prototype.generatePoints.call(this), this.updateTotals()
            },
            translate: function(t) {
                this.generatePoints();
                var e, i, s, n, o, r, a = 0,
                    h = (f = this.options).slicedOffset,
                    l = h + (f.borderWidth || 0),
                    c = f.startAngle || 0,
                    d = this.startAngleRad = Math.PI / 180 * (c - 90),
                    p = (c = (this.endAngleRad = Math.PI / 180 * ($n(f.endAngle, c + 360) - 90)) - d, this.points),
                    u = f.dataLabels.distance,
                    f = f.ignoreHiddenPoint,
                    g = p.length;
                for (t || (this.center = t = this.getCenter()), this.getX = function(e, i, n) {
                        return s = Math.asin(Math.min((e - t[1]) / (t[2] / 2 + n.labelDistance), 1)), t[0] + (i ? -1 : 1) * Math.cos(s) * (t[2] / 2 + n.labelDistance)
                    }, o = 0; o < g; o++)(r = p[o]).labelDistance = $n(r.options.dataLabels && r.options.dataLabels.distance, u), this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, r.labelDistance), e = d + a * c, f && !r.visible || (a += r.percentage / 100), i = d + a * c, r.shapeType = "arc", r.shapeArgs = {
                    x: t[0],
                    y: t[1],
                    r: t[2] / 2,
                    innerR: t[3] / 2,
                    start: Math.round(1e3 * e) / 1e3,
                    end: Math.round(1e3 * i) / 1e3
                }, (s = (i + e) / 2) > 1.5 * Math.PI ? s -= 2 * Math.PI : s < -Math.PI / 2 && (s += 2 * Math.PI), r.slicedTranslation = {
                    translateX: Math.round(Math.cos(s) * h),
                    translateY: Math.round(Math.sin(s) * h)
                }, i = Math.cos(s) * t[2] / 2, n = Math.sin(s) * t[2] / 2, r.tooltipPos = [t[0] + .7 * i, t[1] + .7 * n], r.half = s < -Math.PI / 2 || s > Math.PI / 2 ? 1 : 0, r.angle = s, e = Math.min(l, r.labelDistance / 5), r.labelPos = [t[0] + i + Math.cos(s) * r.labelDistance, t[1] + n + Math.sin(s) * r.labelDistance, t[0] + i + Math.cos(s) * e, t[1] + n + Math.sin(s) * e, t[0] + i, t[1] + n, 0 > r.labelDistance ? "center" : r.half ? "right" : "left", s]
            },
            drawGraph: null,
            drawPoints: function() {
                var t, e, i, s, n = this,
                    o = n.chart.renderer,
                    r = n.options.shadow;
                r && !n.shadowGroup && (n.shadowGroup = o.g("shadow").add(n.group)), _n(n.points, function(a) {
                    if (!a.isNull) {
                        e = a.graphic, s = a.shapeArgs, t = a.getTranslate();
                        var h = a.shadowGroup;
                        r && !h && (h = a.shadowGroup = o.g("shadow").add(n.shadowGroup)), h && h.attr(t), i = n.pointAttribs(a, a.selected && "select"), e ? e.setRadialReference(n.center).attr(i).animate(Kn(s, t)) : (a.graphic = e = o[a.shapeType](s).setRadialReference(n.center).attr(t).add(n.group), a.visible || e.attr({
                            visibility: "hidden"
                        }), e.attr(i).attr({
                            "stroke-linejoin": "round"
                        }).shadow(r, h)), e.addClass(a.getClassName())
                    }
                })
            },
            searchPoint: qn,
            sortByAngle: function(t, e) {
                t.sort(function(t, i) {
                    return void 0 !== t.angle && (i.angle - t.angle) * e
                })
            },
            drawLegendSymbol: Vn.LegendSymbolMixin.drawRectangle,
            getCenter: Vn.CenteredSeriesMixin.getCenter,
            getSymbol: qn
        }, {
            init: function() {
                Jn.prototype.init.apply(this, arguments);
                var t, e = this;
                return e.name = $n(e.name, "Slice"), jn(e, "select", t = function(t) {
                    e.slice("select" === t.type)
                }), jn(e, "unselect", t), e
            },
            isValid: function() {
                return Vn.isNumber(this.y, !0) && 0 <= this.y
            },
            setVisible: function(t, e) {
                var i = this,
                    s = i.series,
                    n = s.chart,
                    o = s.options.ignoreHiddenPoint;
                e = $n(e, o), t !== i.visible && (i.visible = i.options.visible = t = void 0 === t ? !i.visible : t, s.options.data[Zn(i, s.data)] = i.options, _n(["graphic", "dataLabel", "connector", "shadowGroup"], function(e) {
                    i[e] && i[e][t ? "show" : "hide"](!0)
                }), i.legendItem && n.legend.colorizeItem(i, t), t || "hover" !== i.state || i.setState(""), o && (s.isDirty = !0), e && n.redraw())
            },
            slice: function(t, e, i) {
                var s = this.series;
                eo(i, s.chart), $n(e, !0), this.sliced = this.options.sliced = Un(t) ? t : !this.sliced, s.options.data[Zn(this, s.data)] = this.options, this.graphic.animate(this.getTranslate()), this.shadowGroup && this.shadowGroup.animate(this.getTranslate())
            },
            getTranslate: function() {
                return this.sliced ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                }
            },
            haloPath: function(t) {
                var e = this.shapeArgs;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + t, e.r + t, {
                    innerR: this.shapeArgs.r,
                    start: e.start,
                    end: e.end
                })
            }
        }), so = (io = t).addEvent, no = io.arrayMax, oo = io.defined, ro = io.each, ao = io.extend, ho = io.format, lo = io.map, co = io.merge, po = io.noop, uo = io.pick, fo = io.relativeLength, go = io.Series, mo = io.seriesTypes, xo = io.stableSort, io.distribute = function(t, e) {
            function i(t, e) {
                return t.target - e.target
            }
            var s, n, o = !0,
                r = t,
                a = [];
            for (n = 0, s = t.length; s--;) n += t[s].size;
            if (n > e) {
                for (xo(t, function(t, e) {
                        return (e.rank || 0) - (t.rank || 0)
                    }), n = s = 0; n <= e;) n += t[s].size, s++;
                a = t.splice(s - 1, t.length)
            }
            for (xo(t, i), t = lo(t, function(t) {
                    return {
                        size: t.size,
                        targets: [t.target]
                    }
                }); o;) {
                for (s = t.length; s--;) o = t[s], n = (Math.min.apply(0, o.targets) + Math.max.apply(0, o.targets)) / 2, o.pos = Math.min(Math.max(0, n - o.size / 2), e - o.size);
                for (s = t.length, o = !1; s--;) 0 < s && t[s - 1].pos + t[s - 1].size > t[s].pos && (t[s - 1].size += t[s].size, t[s - 1].targets = t[s - 1].targets.concat(t[s].targets), t[s - 1].pos + t[s - 1].size > e && (t[s - 1].pos = e - t[s - 1].size), t.splice(s, 1), o = !0)
            }
            s = 0, ro(t, function(t) {
                var e = 0;
                ro(t.targets, function() {
                    r[s].pos = t.pos + e, e += r[s].size, s++
                })
            }), r.push.apply(r, a), xo(r, i)
        }, go.prototype.drawDataLabels = function() {
            var t, e, i, s, n = this,
                o = n.options,
                r = o.dataLabels,
                a = n.points,
                h = n.hasRendered || 0,
                l = uo(r.defer, !!o.animation),
                c = n.chart.renderer;
            (r.enabled || n._hasPointLabels) && (n.dlProcessOptions && n.dlProcessOptions(r), s = n.plotGroup("dataLabelsGroup", "data-labels", l && !h ? "hidden" : "visible", r.zIndex || 6), l && (s.attr({
                opacity: +h
            }), h || so(n, "afterAnimate", function() {
                n.visible && s.show(!0), s[o.animation ? "animate" : "attr"]({
                    opacity: 1
                }, {
                    duration: 200
                })
            })), e = r, ro(a, function(a) {
                var h, l, d, p, u = a.dataLabel,
                    f = a.connector,
                    g = !u;
                t = a.dlOptions || a.options && a.options.dataLabels, (h = uo(t && t.enabled, e.enabled) && null !== a.y) && (r = co(e, t), l = a.getLabelConfig(), i = r.format ? ho(r.format, l) : r.formatter.call(l, r), p = r.style, l = r.rotation, p.color = uo(r.color, p.color, n.color, "#000000"), "contrast" === p.color && (a.contrastColor = c.getContrast(a.color || n.color), p.color = r.inside || 0 > uo(a.labelDistance, r.distance) || o.stacking ? a.contrastColor : "#000000"), o.cursor && (p.cursor = o.cursor), d = {
                    fill: r.backgroundColor,
                    stroke: r.borderColor,
                    "stroke-width": r.borderWidth,
                    r: r.borderRadius || 0,
                    rotation: l,
                    padding: r.padding,
                    zIndex: 1
                }, io.objectEach(d, function(t, e) {
                    void 0 === t && delete d[e]
                })), !u || h && oo(i) ? h && oo(i) && (u ? d.text = i : (u = a.dataLabel = c[l ? "text" : "label"](i, 0, -9999, r.shape, null, null, r.useHTML, null, "data-label")).addClass("highcharts-data-label-color-" + a.colorIndex + " " + (r.className || "") + (r.useHTML ? "highcharts-tracker" : "")), u.attr(d), u.css(p).shadow(r.shadow), u.added || u.add(s), n.alignDataLabel(a, u, r, null, g)) : (a.dataLabel = u = u.destroy(), f && (a.connector = f.destroy()))
            }))
        }, go.prototype.alignDataLabel = function(t, e, i, s, n) {
            var o, r = this.chart,
                a = r.inverted,
                h = uo(t.plotX, -9999),
                l = uo(t.plotY, -9999),
                c = e.getBBox(),
                d = i.rotation,
                p = i.align,
                u = this.visible && (t.series.forceDL || r.isInsidePlot(h, Math.round(l), a) || s && r.isInsidePlot(h, a ? s.x + 1 : s.y + s.height - 1, a)),
                f = "justify" === uo(i.overflow, "justify");
            u && (o = i.style.fontSize, o = r.renderer.fontMetrics(o, e).b, s = ao({
                x: a ? r.plotWidth - l : h,
                y: Math.round(a ? r.plotHeight - h : l),
                width: 0,
                height: 0
            }, s), ao(i, {
                width: c.width,
                height: c.height
            }), d ? (f = !1, h = r.renderer.rotCorr(o, d), h = {
                x: s.x + i.x + s.width / 2 + h.x,
                y: s.y + i.y + {
                    top: 0,
                    middle: .5,
                    bottom: 1
                } [i.verticalAlign] * s.height
            }, e[n ? "attr" : "animate"](h).attr({
                align: p
            }), l = 180 < (l = (d + 720) % 360) && 360 > l, "left" === p ? h.y -= l ? c.height : 0 : "center" === p ? (h.x -= c.width / 2, h.y -= c.height / 2) : "right" === p && (h.x -= c.width, h.y -= l ? 0 : c.height)) : (e.align(i, null, s), h = e.alignAttr), f ? t.isLabelJustified = this.justifyDataLabel(e, i, h, c, s, n) : uo(i.crop, !0) && (u = r.isInsidePlot(h.x, h.y) && r.isInsidePlot(h.x + c.width, h.y + c.height)), i.shape && !d) && e[n ? "attr" : "animate"]({
                anchorX: a ? r.plotWidth - t.plotY : t.plotX,
                anchorY: a ? r.plotHeight - t.plotX : t.plotY
            }), u || (e.attr({
                y: -9999
            }), e.placed = !1)
        }, go.prototype.justifyDataLabel = function(t, e, i, s, n, o) {
            var r, a, h = this.chart,
                l = e.align,
                c = e.verticalAlign,
                d = t.box ? 0 : t.padding || 0;
            return 0 > (r = i.x + d) && ("right" === l ? e.align = "left" : e.x = -r, a = !0), (r = i.x + s.width - d) > h.plotWidth && ("left" === l ? e.align = "right" : e.x = h.plotWidth - r, a = !0), 0 > (r = i.y + d) && ("bottom" === c ? e.verticalAlign = "top" : e.y = -r, a = !0), (r = i.y + s.height - d) > h.plotHeight && ("top" === c ? e.verticalAlign = "bottom" : e.y = h.plotHeight - r, a = !0), a && (t.placed = !o, t.align(e, null, n)), a
        }, mo.pie && (mo.pie.prototype.drawDataLabels = function() {
            var t, e, i, s, n, o, r, a, h, l, c = this,
                d = c.data,
                p = c.chart,
                u = c.options.dataLabels,
                f = uo(u.connectorPadding, 10),
                g = uo(u.connectorWidth, 1),
                m = p.plotWidth,
                x = p.plotHeight,
                v = c.center,
                y = v[2] / 2,
                b = v[1],
                k = [
                    [],
                    []
                ],
                M = [0, 0, 0, 0];
            c.visible && (u.enabled || c._hasPointLabels) && (ro(d, function(t) {
                t.dataLabel && t.visible && t.dataLabel.shortened && (t.dataLabel.attr({
                    width: "auto"
                }).css({
                    width: "auto",
                    textOverflow: "clip"
                }), t.dataLabel.shortened = !1)
            }), go.prototype.drawDataLabels.apply(c), ro(d, function(t) {
                t.dataLabel && t.visible && (k[t.half].push(t), t.dataLabel._pos = null)
            }), ro(k, function(e, d) {
                var g, k, w, S = e.length,
                    A = [];
                if (S)
                    for (c.sortByAngle(e, d - .5), 0 < c.maxLabelDistance && (g = Math.max(0, b - y - c.maxLabelDistance), k = Math.min(b + y + c.maxLabelDistance, p.plotHeight), ro(e, function(t) {
                            0 < t.labelDistance && t.dataLabel && (t.top = Math.max(0, b - y - t.labelDistance), t.bottom = Math.min(b + y + t.labelDistance, p.plotHeight), w = t.dataLabel.getBBox().height || 21, t.positionsIndex = A.push({
                                target: t.labelPos[1] - t.top + w / 2,
                                size: w,
                                rank: t.y
                            }) - 1)
                        }), io.distribute(A, k + w - g)), l = 0; l < S; l++) k = (t = e[l]).positionsIndex, n = t.labelPos, i = t.dataLabel, h = !1 === t.visible ? "hidden" : "inherit", g = n[1], A && oo(A[k]) ? void 0 === A[k].pos ? h = "hidden" : (o = A[k].size, a = t.top + A[k].pos) : a = g, delete t.positionIndex, r = u.justify ? v[0] + (d ? -1 : 1) * (y + t.labelDistance) : c.getX(a < t.top + 2 || a > t.bottom - 2 ? g : a, d, t), i._attr = {
                        visibility: h,
                        align: n[6]
                    }, i._pos = {
                        x: r + u.x + ({
                            left: f,
                            right: -f
                        } [n[6]] || 0),
                        y: a + u.y - 10
                    }, n.x = r, n.y = a, s = i.getBBox().width, g = null, r - s < f ? (g = Math.round(s - r + f), M[3] = Math.max(g, M[3])) : r + s > m - f && (g = Math.round(r + s - m + f), M[1] = Math.max(g, M[1])), 0 > a - o / 2 ? M[0] = Math.max(Math.round(o / 2 - a), M[0]) : a + o / 2 > x && (M[2] = Math.max(Math.round(a + o / 2 - x), M[2])), i.sideOverflow = g
            }), 0 === no(M) || this.verifyDataLabelOverflow(M)) && (this.placeDataLabels(), g && ro(this.points, function(t) {
                var s;
                e = t.connector, (i = t.dataLabel) && i._pos && t.visible && 0 < t.labelDistance ? (h = i._attr.visibility, (s = !e) && (t.connector = e = p.renderer.path().addClass("highcharts-data-label-connector highcharts-color-" + t.colorIndex).add(c.dataLabelsGroup), e.attr({
                    "stroke-width": g,
                    stroke: u.connectorColor || t.color || "#666666"
                })), e[s ? "attr" : "animate"]({
                    d: c.connectorPath(t.labelPos)
                }), e.attr("visibility", h)) : e && (t.connector = e.destroy())
            }))
        }, mo.pie.prototype.connectorPath = function(t) {
            var e = t.x,
                i = t.y;
            return uo(this.options.dataLabels.softConnector, !0) ? ["M", e + ("left" === t[6] ? 5 : -5), i, "C", e, i, 2 * t[2] - t[4], 2 * t[3] - t[5], t[2], t[3], "L", t[4], t[5]] : ["M", e + ("left" === t[6] ? 5 : -5), i, "L", t[2], t[3], "L", t[4], t[5]]
        }, mo.pie.prototype.placeDataLabels = function() {
            ro(this.points, function(t) {
                var e = t.dataLabel;
                e && t.visible && ((t = e._pos) ? (e.sideOverflow && (e._attr.width = e.getBBox().width - e.sideOverflow, e.css({
                    width: e._attr.width + "px",
                    textOverflow: "ellipsis"
                }), e.shortened = !0), e.attr(e._attr), e[e.moved ? "animate" : "attr"](t), e.moved = !0) : e && e.attr({
                    y: -9999
                }))
            }, this)
        }, mo.pie.prototype.alignDataLabel = po, mo.pie.prototype.verifyDataLabelOverflow = function(t) {
            var e, i = this.center,
                s = this.options,
                n = s.center,
                o = s.minSize || 80,
                r = null !== s.size;
            return r || (null !== n[0] ? e = Math.max(i[2] - Math.max(t[1], t[3]), o) : (e = Math.max(i[2] - t[1] - t[3], o), i[0] += (t[3] - t[1]) / 2), null !== n[1] ? e = Math.max(Math.min(e, i[2] - Math.max(t[0], t[2])), o) : (e = Math.max(Math.min(e, i[2] - t[0] - t[2]), o), i[1] += (t[0] - t[2]) / 2), e < i[2] ? (i[2] = e, i[3] = Math.min(fo(s.innerSize || 0, e), e), this.translate(i), this.drawDataLabels && this.drawDataLabels()) : r = !0), r
        }), mo.column && (mo.column.prototype.alignDataLabel = function(t, e, i, s, n) {
            var o = this.chart.inverted,
                r = t.series,
                a = t.dlBox || t.shapeArgs,
                h = uo(t.below, t.plotY > uo(this.translatedThreshold, r.yAxis.len)),
                l = uo(i.inside, !!this.options.stacking);
            a && (0 > (s = co(a)).y && (s.height += s.y, s.y = 0), 0 < (a = s.y + s.height - r.yAxis.len) && (s.height -= a), o && (s = {
                x: r.yAxis.len - s.y - s.height,
                y: r.xAxis.len - s.x - s.width,
                width: s.height,
                height: s.width
            }), l || (o ? (s.x += h ? 0 : s.width, s.width = 0) : (s.y += h ? s.height : 0, s.height = 0))), i.align = uo(i.align, !o || l ? "center" : h ? "right" : "left"), i.verticalAlign = uo(i.verticalAlign, o || l ? "middle" : h ? "top" : "bottom"), go.prototype.alignDataLabel.call(this, t, e, i, s, n), t.isLabelJustified && t.contrastColor && t.dataLabel.css({
                color: t.contrastColor
            })
        }), yo = (vo = t).Chart, bo = vo.each, ko = vo.pick, Mo = vo.addEvent, yo.prototype.callbacks.push(function(t) {
            function e() {
                var e = [];
                bo(t.series || [], function(t) {
                    var i = t.options.dataLabels,
                        s = t.dataLabelCollections || ["dataLabel"];
                    (i.enabled || t._hasPointLabels) && !i.allowOverlap && t.visible && bo(s, function(i) {
                        bo(t.points, function(t) {
                            t[i] && (t[i].labelrank = ko(t.labelrank, t.shapeArgs && t.shapeArgs.height), e.push(t[i]))
                        })
                    })
                }), t.hideOverlappingLabels(e)
            }
            e(), Mo(t, "redraw", e)
        }), yo.prototype.hideOverlappingLabels = function(t) {
            var e, i, s, n, o, r, a, h, l, c, d, p, u, f, g, m, x, v = t.length;
            for (i = 0; i < v; i++)(e = t[i]) && (e.oldOpacity = e.opacity, e.newOpacity = 1);
            for (t.sort(function(t, e) {
                    return (e.labelrank || 0) - (t.labelrank || 0)
                }), i = 0; i < v; i++)
                for (s = t[i], e = i + 1; e < v; ++e) n = t[e], s && n && s !== n && s.placed && n.placed && 0 !== s.newOpacity && 0 !== n.newOpacity && (o = s.alignAttr, r = n.alignAttr, a = s.parentGroup, h = n.parentGroup, l = 2 * (s.box ? 0 : s.padding), c = o.x + a.translateX, d = o.y + a.translateY, p = s.width - l, u = s.height - l, f = r.x + h.translateX, g = r.y + h.translateY, m = n.width - l, x = n.height - l, o = !(f > c + p || f + m < c || g > d + u || g + x < d)) && ((s.labelrank < n.labelrank ? s : n).newOpacity = 0);
            bo(t, function(t) {
                var e, i;
                t && (i = t.newOpacity, t.oldOpacity !== i && t.placed && (i ? t.show(!0) : e = function() {
                    t.hide()
                }, t.alignAttr.opacity = i, t[t.isOld ? "animate" : "attr"](t.alignAttr, null, e)), t.isOld = !0)
            })
        }, Ao = (wo = t).addEvent, To = wo.Chart, Po = wo.createElement, Co = wo.css, Lo = wo.defaultOptions, Oo = wo.defaultPlotOptions, Do = wo.each, Io = wo.extend, zo = wo.fireEvent, Eo = wo.hasTouch, Bo = wo.inArray, Ro = wo.isObject, Go = wo.Legend, Wo = wo.merge, Ho = wo.pick, No = wo.Point, Xo = wo.Series, Yo = wo.seriesTypes, Fo = wo.svg, So = wo.TrackerMixin = {
            drawTrackerPoint: function() {
                var t = this,
                    e = t.chart.pointer,
                    i = function(t) {
                        var i = e.getPointFromEvent(t);
                        void 0 !== i && (e.isDirectTouch = !0, i.onMouseOver(t))
                    };
                Do(t.points, function(t) {
                    t.graphic && (t.graphic.element.point = t), t.dataLabel && (t.dataLabel.div ? t.dataLabel.div.point = t : t.dataLabel.element.point = t)
                }), t._hasTracking || (Do(t.trackerGroups, function(s) {
                    t[s] && (t[s].addClass("highcharts-tracker").on("mouseover", i).on("mouseout", function(t) {
                        e.onTrackerMouseOut(t)
                    }), Eo && t[s].on("touchstart", i), t.options.cursor && t[s].css(Co).css({
                        cursor: t.options.cursor
                    }))
                }), t._hasTracking = !0)
            },
            drawTrackerGraph: function() {
                var t, e = this,
                    i = e.options,
                    s = i.trackByArea,
                    n = [].concat(s ? e.areaPath : e.graphPath),
                    o = n.length,
                    r = e.chart,
                    a = r.pointer,
                    h = r.renderer,
                    l = r.options.tooltip.snap,
                    c = e.tracker,
                    d = function() {
                        r.hoverSeries !== e && e.onMouseOver()
                    },
                    p = "rgba(192,192,192," + (Fo ? 1e-4 : .002) + ")";
                if (o && !s)
                    for (t = o + 1; t--;) "M" === n[t] && n.splice(t + 1, 0, n[t + 1] - l, n[t + 2], "L"), (t && "M" === n[t] || t === o) && n.splice(t, 0, "L", n[t - 2] + l, n[t - 1]);
                c ? c.attr({
                    d: n
                }) : e.graph && (e.tracker = h.path(n).attr({
                    "stroke-linejoin": "round",
                    visibility: e.visible ? "visible" : "hidden",
                    stroke: p,
                    fill: s ? p : "none",
                    "stroke-width": e.graph.strokeWidth() + (s ? 0 : 2 * l),
                    zIndex: 2
                }).add(e.group), Do([e.tracker, e.markerGroup], function(t) {
                    t.addClass("highcharts-tracker").on("mouseover", d).on("mouseout", function(t) {
                        a.onTrackerMouseOut(t)
                    }), i.cursor && t.css({
                        cursor: i.cursor
                    }), Eo && t.on("touchstart", d)
                }))
            }
        }, Yo.column && (Yo.column.prototype.drawTracker = So.drawTrackerPoint), Yo.pie && (Yo.pie.prototype.drawTracker = So.drawTrackerPoint), Yo.scatter && (Yo.scatter.prototype.drawTracker = So.drawTrackerPoint), Io(Go.prototype, {
            setItemEvents: function(t, e, i) {
                var s = this,
                    n = s.chart.renderer.boxWrapper,
                    o = "highcharts-legend-" + (t.series ? "point" : "series") + "-active";
                (i ? e : t.legendGroup).on("mouseover", function() {
                    t.setState("hover"), n.addClass(o), e.css(s.options.itemHoverStyle)
                }).on("mouseout", function() {
                    e.css(Wo(t.visible ? s.itemStyle : s.itemHiddenStyle)), n.removeClass(o), t.setState()
                }).on("click", function(e) {
                    var i = function() {
                        t.setVisible && t.setVisible()
                    };
                    e = {
                        browserEvent: e
                    }, t.firePointEvent ? t.firePointEvent("legendItemClick", e, i) : zo(t, "legendItemClick", e, i)
                })
            },
            createCheckboxForItem: function(t) {
                t.checkbox = Po("input", {
                    type: "checkbox",
                    checked: t.selected,
                    defaultChecked: t.selected
                }, this.options.itemCheckboxStyle, this.chart.container), Ao(t.checkbox, "click", function(e) {
                    zo(t.series || t, "checkboxClick", {
                        checked: e.target.checked,
                        item: t
                    }, function() {
                        t.select()
                    })
                })
            }
        }), Lo.legend.itemStyle.cursor = "pointer", Io(To.prototype, {
            showResetZoom: function() {
                var t = this,
                    e = Lo.lang,
                    i = t.options.chart.resetZoomButton,
                    s = i.theme,
                    n = s.states,
                    o = "chart" === i.relativeTo ? null : "plotBox";
                this.resetZoomButton = t.renderer.button(e.resetZoom, null, null, function() {
                    t.zoomOut()
                }, s, n && n.hover).attr({
                    align: i.position.align,
                    title: e.resetZoomTitle
                }).addClass("highcharts-reset-zoom").add().align(i.position, !1, o)
            },
            zoomOut: function() {
                var t = this;
                zo(t, "selection", {
                    resetSelection: !0
                }, function() {
                    t.zoom()
                })
            },
            zoom: function(t) {
                var e, i, s = this.pointer,
                    n = !1;
                !t || t.resetSelection ? Do(this.axes, function(t) {
                    e = t.zoom()
                }) : Do(t.xAxis.concat(t.yAxis), function(t) {
                    var i = t.axis;
                    s[i.isXAxis ? "zoomX" : "zoomY"] && (e = i.zoom(t.min, t.max), i.displayBtn && (n = !0))
                }), i = this.resetZoomButton, n && !i ? this.showResetZoom() : !n && Ro(i) && (this.resetZoomButton = i.destroy()), e && this.redraw(Ho(this.options.chart.animation, t && t.animation, 100 > this.pointCount))
            },
            pan: function(t, e) {
                var i, s = this,
                    n = s.hoverPoints;
                n && Do(n, function(t) {
                    t.setState()
                }), Do("xy" === e ? [1, 0] : [1], function(e) {
                    var n, o, r = (e = s[e ? "xAxis" : "yAxis"][0]).horiz,
                        a = t[r ? "chartX" : "chartY"],
                        h = s[r = r ? "mouseDownX" : "mouseDownY"],
                        l = (e.pointRange || 0) / 2,
                        c = e.getExtremes(),
                        d = e.toValue(h - a, !0) + l;
                    h = (n = (l = e.toValue(h + e.len - a, !0) - l) < d) ? l : d, d = n ? d : l, 0 < (o = (l = Math.min(c.dataMin, e.toValue(e.toPixels(c.min) - e.minPixelPadding))) - h) && (d += o, h = l), 0 < (o = d - (n = Math.max(c.dataMax, e.toValue(e.toPixels(c.max) + e.minPixelPadding)))) && (d = n, h -= o), e.series.length && h !== c.min && d !== c.max && (e.setExtremes(h, d, !1, !1, {
                        trigger: "pan"
                    }), i = !0), s[r] = a
                }), i && s.redraw(!1), Co(s.container, {
                    cursor: "move"
                })
            }
        }), Io(No.prototype, {
            select: function(t, e) {
                var i = this,
                    s = i.series,
                    n = s.chart;
                t = Ho(t, !i.selected), i.firePointEvent(t ? "select" : "unselect", {
                    accumulate: e
                }, function() {
                    i.selected = i.options.selected = t, s.options.data[Bo(i, s.data)] = i.options, i.setState(t && "select"), e || Do(n.getSelectedPoints(), function(t) {
                        t.selected && t !== i && (t.selected = t.options.selected = !1, s.options.data[Bo(t, s.data)] = t.options, t.setState(""), t.firePointEvent("unselect"))
                    })
                })
            },
            onMouseOver: function(t) {
                var e = this.series.chart,
                    i = e.pointer;
                t = t ? i.normalize(t) : i.getChartCoordinatesFromPoint(this, e.inverted), i.runPointActions(t, this)
            },
            onMouseOut: function() {
                var t = this.series.chart;
                this.firePointEvent("mouseOut"), Do(t.hoverPoints || [], function(t) {
                    t.setState()
                }), t.hoverPoints = t.hoverPoint = null
            },
            importEvents: function() {
                if (!this.hasImportedEvents) {
                    var t = this,
                        e = Wo(t.series.options.point, t.options).events;
                    t.events = e, wo.objectEach(e, function(e, i) {
                        Ao(t, i, e)
                    }), this.hasImportedEvents = !0
                }
            },
            setState: function(t, e) {
                var i, s = Math.floor(this.plotX),
                    n = this.plotY,
                    o = this.series,
                    r = o.options.states[t] || {},
                    a = Oo[o.type].marker && o.options.marker,
                    h = a && !1 === a.enabled,
                    l = a && a.states && a.states[t] || {},
                    c = !1 === l.enabled,
                    d = o.stateMarkerGraphic,
                    p = this.marker || {},
                    u = o.chart,
                    f = o.halo,
                    g = a && o.markerAttribs;
                (t = t || "") === this.state && !e || this.selected && "select" !== t || !1 === r.enabled || t && (c || h && !1 === l.enabled) || t && p.states && p.states[t] && !1 === p.states[t].enabled || (g && (i = o.markerAttribs(this, t)), this.graphic ? (this.state && this.graphic.removeClass("highcharts-point-" + this.state), t && this.graphic.addClass("highcharts-point-" + t), this.graphic.attr(o.pointAttribs(this, t)), i && this.graphic.animate(i, Ho(u.options.chart.animation, l.animation, a.animation)), d && d.hide()) : (t && l && (a = p.symbol || o.symbol, d && d.currentSymbol !== a && (d = d.destroy()), d ? d[e ? "animate" : "attr"]({
                    x: i.x,
                    y: i.y
                }) : a && (o.stateMarkerGraphic = d = u.renderer.symbol(a, i.x, i.y, i.width, i.height).add(o.markerGroup), d.currentSymbol = a), d && d.attr(o.pointAttribs(this, t))), d && (d[t && u.isInsidePlot(s, n, u.inverted) ? "show" : "hide"](), d.element.point = this)), (s = r.halo) && s.size ? (f || (o.halo = f = u.renderer.path().add((this.graphic || d).parentGroup)), f[e ? "animate" : "attr"]({
                    d: this.haloPath(s.size)
                }), f.attr({
                    class: "highcharts-halo highcharts-color-" + Ho(this.colorIndex, o.colorIndex)
                }), f.point = this, f.attr(Io({
                    fill: this.color || o.color,
                    "fill-opacity": s.opacity,
                    zIndex: -1
                }, s.attributes))) : f && f.point && f.point.haloPath && f.animate({
                    d: f.point.haloPath(0)
                }), this.state = t)
            },
            haloPath: function(t) {
                return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - t, this.plotY - t, 2 * t, 2 * t)
            }
        }), Io(Xo.prototype, {
            onMouseOver: function() {
                var t = this.chart,
                    e = t.hoverSeries;
                e && e !== this && e.onMouseOut(), this.options.events.mouseOver && zo(this, "mouseOver"), this.setState("hover"), t.hoverSeries = this
            },
            onMouseOut: function() {
                var t = this.options,
                    e = this.chart,
                    i = e.tooltip,
                    s = e.hoverPoint;
                e.hoverSeries = null, s && s.onMouseOut(), this && t.events.mouseOut && zo(this, "mouseOut"), !i || this.stickyTracking || i.shared && !this.noSharedTooltip || i.hide(), this.setState()
            },
            setState: function(t) {
                var e = this,
                    i = e.options,
                    s = e.graph,
                    n = i.states,
                    o = i.lineWidth;
                if (i = 0, t = t || "", e.state !== t && (Do([e.group, e.markerGroup, e.dataLabelsGroup], function(i) {
                        i && (e.state && i.removeClass("highcharts-series-" + e.state), t && i.addClass("highcharts-series-" + t))
                    }), e.state = t, !n[t] || !1 !== n[t].enabled) && (t && (o = n[t].lineWidth || o + (n[t].lineWidthPlus || 0)), s && !s.dashstyle))
                    for (o = {
                            "stroke-width": o
                        }, s.animate(o, Ho(e.chart.options.chart.animation, n[t] && n[t].animation)); e["zone-graph-" + i];) e["zone-graph-" + i].attr(o), i += 1
            },
            setVisible: function(t, e) {
                var i, s = this,
                    n = s.chart,
                    o = s.legendItem,
                    r = n.options.chart.ignoreHiddenSeries,
                    a = s.visible;
                i = (s.visible = t = s.options.visible = s.userOptions.visible = void 0 === t ? !a : t) ? "show" : "hide", Do(["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"], function(t) {
                    s[t] && s[t][i]()
                }), n.hoverSeries !== s && (n.hoverPoint && n.hoverPoint.series) !== s || s.onMouseOut(), o && n.legend.colorizeItem(s, t), s.isDirty = !0, s.options.stacking && Do(n.series, function(t) {
                    t.options.stacking && t.visible && (t.isDirty = !0)
                }), Do(s.linkedSeries, function(e) {
                    e.setVisible(t, !1)
                }), r && (n.isDirtyBox = !0), !1 !== e && n.redraw(), zo(s, i)
            },
            show: function() {
                this.setVisible(!0)
            },
            hide: function() {
                this.setVisible(!1)
            },
            select: function(t) {
                this.selected = t = void 0 === t ? !this.selected : t, this.checkbox && (this.checkbox.checked = t), zo(this, t ? "select" : "unselect")
            },
            drawTracker: So.drawTrackerGraph
        }), jo = (Vo = t).Chart, Uo = Vo.each, _o = Vo.inArray, Ko = Vo.isArray, Zo = Vo.isObject, qo = Vo.pick, $o = Vo.splat, jo.prototype.setResponsive = function(t) {
            var e = this.options.responsive,
                i = [],
                s = this.currentResponsive;
            e && e.rules && Uo(e.rules, function(e) {
                void 0 === e._id && (e._id = Vo.uniqueKey()), this.matchResponsiveRule(e, i, t)
            }, this);
            var n = Vo.merge.apply(0, Vo.map(i, function(t) {
                return Vo.find(e.rules, function(e) {
                    return e._id === t
                }).chartOptions
            }));
            (i = i.toString() || void 0) !== (s && s.ruleIds) && (s && this.update(s.undoOptions, t), i ? (this.currentResponsive = {
                ruleIds: i,
                mergedOptions: n,
                undoOptions: this.currentOptions(n)
            }, this.update(n, t)) : this.currentResponsive = void 0)
        }, jo.prototype.matchResponsiveRule = function(t, e) {
            var i = t.condition;
            (i.callback || function() {
                return this.chartWidth <= qo(i.maxWidth, Number.MAX_VALUE) && this.chartHeight <= qo(i.maxHeight, Number.MAX_VALUE) && this.chartWidth >= qo(i.minWidth, 0) && this.chartHeight >= qo(i.minHeight, 0)
            }).call(this) && e.push(t._id)
        }, jo.prototype.currentOptions = function(t) {
            var e = {};
            return function t(e, i, s, n) {
                var o;
                Vo.objectEach(e, function(r, a) {
                    if (!n && -1 < _o(a, ["series", "xAxis", "yAxis"]))
                        for (e[a] = $o(e[a]), s[a] = [], o = 0; o < e[a].length; o++) i[a][o] && (s[a][o] = {}, t(r[o], i[a][o], s[a][o], n + 1));
                    else Zo(r) ? (s[a] = Ko(r) ? [] : {}, t(r, i[a] || {}, s[a], n + 1)) : s[a] = i[a] || null
                })
            }(t, this.options, e, 0), e
        }, Qo = (Jo = t).addEvent, tr = Jo.Axis, er = Jo.Chart, ir = Jo.css, sr = Jo.dateFormat, nr = Jo.defined, or = Jo.each, rr = Jo.extend, ar = Jo.noop, hr = Jo.timeUnits, (lr = Jo.wrap)(Jo.Series.prototype, "init", function(t) {
            var e;
            t.apply(this, Array.prototype.slice.call(arguments, 1)), (e = this.xAxis) && e.options.ordinal && Qo(this, "updatedData", function() {
                delete e.ordinalIndex
            })
        }), lr(tr.prototype, "getTimeTicks", function(t, e, i, s, n, o, r, a) {
            var h, l, c, d, p, u = 0,
                f = {},
                g = [],
                m = -Number.MAX_VALUE,
                x = this.options.tickPixelInterval;
            if (!this.options.ordinal && !this.options.breaks || !o || 3 > o.length || void 0 === i) return t.call(this, e, i, s, n);
            for (d = o.length, h = 0; h < d; h++) {
                if (p = h && o[h - 1] > s, o[h] < i && (u = h), h === d - 1 || o[h + 1] - o[h] > 5 * r || p) {
                    if (o[h] > m) {
                        for (l = t.call(this, e, o[u], o[h], n); l.length && l[0] <= m;) l.shift();
                        l.length && (m = l[l.length - 1]), g = g.concat(l)
                    }
                    u = h + 1
                }
                if (p) break
            }
            if (t = l.info, a && t.unitRange <= hr.hour) {
                for (h = g.length - 1, u = 1; u < h; u++) sr("%d", g[u]) !== sr("%d", g[u - 1]) && (f[g[u]] = "day", c = !0);
                c && (f[g[0]] = "day"), t.higherRanks = f
            }
            if (g.info = t, a && nr(x)) {
                var v;
                for (a = t = g.length, h = [], c = []; a--;) u = this.translate(g[a]), v && (c[a] = v - u), h[a] = v = u;
                for (c.sort(), (c = c[Math.floor(c.length / 2)]) < .6 * x && (c = null), a = g[t - 1] > s ? t - 1 : t, v = void 0; a--;) u = h[a], s = Math.abs(v - u), v && s < .8 * x && (null === c || s < .8 * c) ? (f[g[a]] && !f[g[a + 1]] ? (s = a + 1, v = u) : s = a, g.splice(s, 1)) : v = u
            }
            return g
        }), rr(tr.prototype, {
            beforeSetTickPositions: function() {
                var t, e, i, s = [],
                    n = !1,
                    o = (h = this.getExtremes()).min,
                    r = h.max,
                    a = this.isXAxis && !!this.options.breaks,
                    h = this.options.ordinal,
                    l = this.chart.options.chart.ignoreHiddenSeries;
                if (h || a) {
                    if (or(this.series, function(e, i) {
                            if (!(l && !1 === e.visible || !1 === e.takeOrdinalPosition && !a) && (s = s.concat(e.processedXData), t = s.length, s.sort(function(t, e) {
                                    return t - e
                                }), t))
                                for (i = t - 1; i--;) s[i] === s[i + 1] && s.splice(i, 1)
                        }), 2 < (t = s.length)) {
                        for (e = s[1] - s[0], i = t - 1; i-- && !n;) s[i + 1] - s[i] !== e && (n = !0);
                        !this.options.keepOrdinalPadding && (s[0] - o > e || r - s[s.length - 1] > e) && (n = !0)
                    }
                    n ? (this.ordinalPositions = s, e = this.ordinal2lin(Math.max(o, s[0]), !0), i = Math.max(this.ordinal2lin(Math.min(r, s[s.length - 1]), !0), 1), this.ordinalSlope = r = (r - o) / (i - e), this.ordinalOffset = o - e * r) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = void 0
                }
                this.isOrdinal = h && n, this.groupIntervalFactor = null
            },
            val2lin: function(t, e) {
                var i = this.ordinalPositions;
                if (i) {
                    var s, n, o = i.length;
                    for (s = o; s--;)
                        if (i[s] === t) {
                            n = s;
                            break
                        } for (s = o - 1; s--;)
                        if (t > i[s] || 0 === s) {
                            n = s + (t = (t - i[s]) / (i[s + 1] - i[s]));
                            break
                        } e = e ? n : this.ordinalSlope * (n || 0) + this.ordinalOffset
                } else e = t;
                return e
            },
            lin2val: function(t, e) {
                var i = this.ordinalPositions;
                if (i) {
                    var s, n = this.ordinalSlope,
                        o = this.ordinalOffset,
                        r = i.length - 1;
                    if (e) 0 > t ? t = i[0] : t > r ? t = i[r] : s = t - (r = Math.floor(t));
                    else
                        for (; r--;)
                            if (t >= (e = n * r + o)) {
                                s = (t - e) / ((n = n * (r + 1) + o) - e);
                                break
                            } return void 0 !== s && void 0 !== i[r] ? i[r] + (s ? s * (i[r + 1] - i[r]) : 0) : t
                }
                return t
            },
            getExtendedPositions: function() {
                var t, e, i = this.chart,
                    s = this.series[0].currentDataGrouping,
                    n = this.ordinalIndex,
                    o = s ? s.count + s.unitName : "raw",
                    r = this.getExtremes();
                return n || (n = this.ordinalIndex = {}), n[o] || (t = {
                    series: [],
                    chart: i,
                    getExtremes: function() {
                        return {
                            min: r.dataMin,
                            max: r.dataMax
                        }
                    },
                    options: {
                        ordinal: !0
                    },
                    val2lin: tr.prototype.val2lin,
                    ordinal2lin: tr.prototype.ordinal2lin
                }, or(this.series, function(n) {
                    (e = {
                        xAxis: t,
                        xData: n.xData,
                        chart: i,
                        destroyGroupedData: ar
                    }).options = {
                        dataGrouping: s ? {
                            enabled: !0,
                            forced: !0,
                            approximation: "open",
                            units: [
                                [s.unitName, [s.count]]
                            ]
                        } : {
                            enabled: !1
                        }
                    }, n.processData.apply(e), t.series.push(e)
                }), this.beforeSetTickPositions.apply(t), n[o] = t.ordinalPositions), n[o]
            },
            getGroupIntervalFactor: function(t, e, i) {
                var s, n = (i = i.processedXData).length,
                    o = [];
                if (!(s = this.groupIntervalFactor)) {
                    for (s = 0; s < n - 1; s++) o[s] = i[s + 1] - i[s];
                    o.sort(function(t, e) {
                        return t - e
                    }), o = o[Math.floor(n / 2)], t = Math.max(t, i[0]), e = Math.min(e, i[n - 1]), this.groupIntervalFactor = s = n * o / (e - t)
                }
                return s
            },
            postProcessTickInterval: function(t) {
                var e = this.ordinalSlope;
                return e ? this.options.breaks ? this.closestPointRange : t / (e / this.closestPointRange) : t
            }
        }), tr.prototype.ordinal2lin = tr.prototype.val2lin, lr(er.prototype, "pan", function(t, e) {
            var i = this.xAxis[0],
                s = e.chartX,
                n = !1;
            if (i.options.ordinal && i.series.length) {
                var o, r = this.mouseDownX,
                    a = i.getExtremes(),
                    h = a.dataMax,
                    l = a.min,
                    c = a.max,
                    d = this.hoverPoints,
                    p = i.closestPointRange,
                    u = (r = (r - s) / (i.translationSlope * (i.ordinalSlope || p)), {
                        ordinalPositions: i.getExtendedPositions()
                    }),
                    f = (p = i.lin2val, i.val2lin);
                u.ordinalPositions ? 1 < Math.abs(r) && (d && or(d, function(t) {
                    t.setState()
                }), 0 > r ? (d = u, o = i.ordinalPositions ? i : u) : (d = i.ordinalPositions ? i : u, o = u), h > (u = o.ordinalPositions)[u.length - 1] && u.push(h), this.fixedRange = c - l, (r = i.toFixedRange(null, null, p.apply(d, [f.apply(d, [l, !0]) + r, !0]), p.apply(o, [f.apply(o, [c, !0]) + r, !0]))).min >= Math.min(a.dataMin, l) && r.max <= Math.max(h, c) && i.setExtremes(r.min, r.max, !0, !1, {
                    trigger: "pan"
                }), this.mouseDownX = s, ir(this.container, {
                    cursor: "move"
                })) : n = !0
            } else n = !0;
            n && t.apply(this, Array.prototype.slice.call(arguments, 1))
        }),
        function(t) {
            function e(t) {
                t.apply(this), this.drawBreaks(this.xAxis, ["x"]), this.drawBreaks(this.yAxis, i(this.pointArrayMap, ["y"]))
            }
            var i = t.pick,
                s = t.wrap,
                n = t.each,
                o = t.extend,
                r = t.isArray,
                a = t.fireEvent,
                h = t.Axis,
                l = t.Series;
            o(h.prototype, {
                isInBreak: function(t, e) {
                    var i = t.repeat || 1 / 0,
                        s = t.from,
                        n = t.to - t.from;
                    return e = e >= s ? (e - s) % i : i - (s - e) % i, t.inclusive ? e <= n : e < n && 0 !== e
                },
                isInAnyBreak: function(t, e) {
                    var s, n, o, r = this.options.breaks,
                        a = r && r.length;
                    if (a) {
                        for (; a--;) this.isInBreak(r[a], t) && (s = !0, n || (n = i(r[a].showPoints, !this.isXAxis)));
                        o = s && e ? s && !n : s
                    }
                    return o
                }
            }), s(h.prototype, "setTickPositions", function(t) {
                if (t.apply(this, Array.prototype.slice.call(arguments, 1)), this.options.breaks) {
                    var e, i = this.tickPositions,
                        s = this.tickPositions.info,
                        n = [];
                    for (e = 0; e < i.length; e++) this.isInAnyBreak(i[e]) || n.push(i[e]);
                    this.tickPositions = n, this.tickPositions.info = s
                }
            }), s(h.prototype, "init", function(t, e, s) {
                var o = this;
                s.breaks && s.breaks.length && (s.ordinal = !1), t.call(this, e, s), t = this.options.breaks, o.isBroken = r(t) && !!t.length, o.isBroken && (o.val2lin = function(t) {
                    var e, i, s = t;
                    for (i = 0; i < o.breakArray.length; i++)
                        if ((e = o.breakArray[i]).to <= t) s -= e.len;
                        else {
                            if (e.from >= t) break;
                            if (o.isInBreak(e, t)) {
                                s -= t - e.from;
                                break
                            }
                        } return s
                }, o.lin2val = function(t) {
                    var e, i;
                    for (i = 0; i < o.breakArray.length && !((e = o.breakArray[i]).from >= t); i++) e.to < t ? t += e.len : o.isInBreak(e, t) && (t += e.len);
                    return t
                }, o.setExtremes = function(t, e, i, s, n) {
                    for (; this.isInAnyBreak(t);) t -= this.closestPointRange;
                    for (; this.isInAnyBreak(e);) e -= this.closestPointRange;
                    h.prototype.setExtremes.call(this, t, e, i, s, n)
                }, o.setAxisTranslation = function(t) {
                    h.prototype.setAxisTranslation.call(this, t), t = o.options.breaks;
                    var e, s, r, l, c = [],
                        d = [],
                        p = 0,
                        u = o.userMin || o.min,
                        f = o.userMax || o.max,
                        g = i(o.pointRangePadding, 0);
                    n(t, function(t) {
                        s = t.repeat || 1 / 0, o.isInBreak(t, u) && (u += t.to % s - u % s), o.isInBreak(t, f) && (f -= f % s - t.from % s)
                    }), n(t, function(t) {
                        for (r = t.from, s = t.repeat || 1 / 0; r - s > u;) r -= s;
                        for (; r < u;) r += s;
                        for (l = r; l < f; l += s) c.push({
                            value: l,
                            move: "in"
                        }), c.push({
                            value: l + (t.to - t.from),
                            move: "out",
                            size: t.breakSize
                        })
                    }), c.sort(function(t, e) {
                        return t.value === e.value ? ("in" === t.move ? 0 : 1) - ("in" === e.move ? 0 : 1) : t.value - e.value
                    }), e = 0, r = u, n(c, function(t) {
                        1 === (e += "in" === t.move ? 1 : -1) && "in" === t.move && (r = t.value), 0 === e && (d.push({
                            from: r,
                            to: t.value,
                            len: t.value - r - (t.size || 0)
                        }), p += t.value - r - (t.size || 0))
                    }), o.breakArray = d, o.unitLength = f - u - p + g, a(o, "afterBreaks"), o.options.staticScale ? o.transA = o.options.staticScale : o.unitLength && (o.transA *= (f - o.min + g) / o.unitLength), g && (o.minPixelPadding = o.transA * o.minPointOffset), o.min = u, o.max = f
                })
            }), s(l.prototype, "generatePoints", function(t) {
                t.apply(this, function() {
                    return Array.prototype.slice.call(arguments, 1)
                }(arguments));
                var e, i = this.xAxis,
                    s = this.yAxis,
                    n = this.points,
                    o = n.length,
                    r = this.options.connectNulls;
                if (i && s && (i.options.breaks || s.options.breaks))
                    for (; o--;) null === (e = n[o]).y && !1 === r || !i.isInAnyBreak(e.x, !0) && !s.isInAnyBreak(e.y, !0) || (n.splice(o, 1), this.data[o] && this.data[o].destroyElements())
            }), t.Series.prototype.drawBreaks = function(t, e) {
                var s, o, r, h, l = this,
                    c = l.points;
                t && n(e, function(e) {
                    s = t.breakArray || [], o = t.isXAxis ? t.min : i(l.options.threshold, t.min), n(c, function(l) {
                        h = i(l["stack" + e.toUpperCase()], l[e]), n(s, function(e) {
                            r = !1, o < e.from && h > e.to || o > e.from && h < e.from ? r = "pointBreak" : (o < e.from && h > e.from && h < e.to || o > e.from && h > e.to && h < e.from) && (r = "pointInBreak"), r && a(t, r, {
                                point: l,
                                brk: e
                            })
                        })
                    })
                })
            }, t.Series.prototype.gappedPath = function() {
                var t = this.options.gapSize,
                    e = this.points.slice(),
                    i = e.length - 1;
                if (t && 0 < i)
                    for (; i--;) e[i + 1].x - e[i].x > this.closestPointRange * t && e.splice(i + 1, 0, {
                        isNull: !0
                    });
                return this.getGraphPath(e)
            }, s(t.seriesTypes.column.prototype, "drawPoints", e), s(t.Series.prototype, "drawPoints", e)
        }(t), dr = (cr = t).arrayMax, pr = cr.arrayMin, ur = cr.Axis, fr = cr.defaultPlotOptions, gr = cr.defined, mr = cr.each, xr = cr.extend, vr = cr.format, yr = cr.isNumber, br = cr.merge, kr = cr.pick, Mr = cr.Point, wr = cr.Tooltip, Sr = cr.wrap, Ar = cr.Series.prototype, Tr = Ar.processData, Pr = Ar.generatePoints, Cr = Ar.destroy, Lr = {
            approximation: "average",
            groupPixelWidth: 2,
            dateTimeLabelFormats: {
                millisecond: ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"],
                second: ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"],
                minute: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                hour: ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"],
                day: ["%A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                week: ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"],
                month: ["%B %Y", "%B", "-%B %Y"],
                year: ["%Y", "%Y", "-%Y"]
            }
        }, Or = {
            line: {},
            spline: {},
            area: {},
            areaspline: {},
            column: {
                approximation: "sum",
                groupPixelWidth: 10
            },
            arearange: {
                approximation: "range"
            },
            areasplinerange: {
                approximation: "range"
            },
            columnrange: {
                approximation: "range",
                groupPixelWidth: 10
            },
            candlestick: {
                approximation: "ohlc",
                groupPixelWidth: 10
            },
            ohlc: {
                approximation: "ohlc",
                groupPixelWidth: 5
            }
        }, Dr = cr.defaultDataGroupingUnits = [
            ["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            ["second", [1, 2, 5, 10, 15, 30]],
            ["minute", [1, 2, 5, 10, 15, 30]],
            ["hour", [1, 2, 3, 4, 6, 8, 12]],
            ["day", [1]],
            ["week", [1]],
            ["month", [1, 3, 6]],
            ["year", null]
        ], Ir = {
            sum: function(t) {
                var e, i = t.length;
                if (!i && t.hasNulls) e = null;
                else if (i)
                    for (e = 0; i--;) e += t[i];
                return e
            },
            average: function(t) {
                var e = t.length;
                return t = Ir.sum(t), yr(t) && e && (t /= e), t
            },
            averages: function() {
                var t = [];
                return mr(arguments, function(e) {
                    t.push(Ir.average(e))
                }), t
            },
            open: function(t) {
                return t.length ? t[0] : t.hasNulls ? null : void 0
            },
            high: function(t) {
                return t.length ? dr(t) : t.hasNulls ? null : void 0
            },
            low: function(t) {
                return t.length ? pr(t) : t.hasNulls ? null : void 0
            },
            close: function(t) {
                return t.length ? t[t.length - 1] : t.hasNulls ? null : void 0
            },
            ohlc: function(t, e, i, s) {
                if (t = Ir.open(t), e = Ir.high(e), i = Ir.low(i), s = Ir.close(s), yr(t) || yr(e) || yr(i) || yr(s)) return [t, e, i, s]
            },
            range: function(t, e) {
                return t = Ir.low(t), e = Ir.high(e), yr(t) || yr(e) ? [t, e] : null === t && null === e ? null : void 0
            }
        }, Ar.groupData = function(t, e, i, s) {
            var n, o, r = this.data,
                a = this.options.data,
                h = [],
                l = [],
                c = [],
                d = t.length,
                p = !!e,
                u = [];
            s = "function" == typeof s ? s : Ir[s] || Or[this.type] && Ir[Or[this.type].approximation] || Ir[Lr.approximation];
            var f, g, m = this.pointArrayMap,
                x = m && m.length,
                v = 0;
            for (o = 0, x ? mr(m, function() {
                    u.push([])
                }) : u.push([]), f = x || 1, g = 0; g <= d && !(t[g] >= i[0]); g++);
            for (; g <= d; g++) {
                for (; void 0 !== i[v + 1] && t[g] >= i[v + 1] || g === d;) {
                    for (n = i[v], this.dataGroupInfo = {
                            start: o,
                            length: u[0].length
                        }, void 0 !== (o = s.apply(this, u)) && (h.push(n), l.push(o), c.push(this.dataGroupInfo)), o = g, n = 0; n < f; n++) u[n].length = 0, u[n].hasNulls = !1;
                    if (v += 1, g === d) break
                }
                if (g === d) break;
                if (m) {
                    n = this.cropStart + g;
                    var y, b = r && r[n] || this.pointClass.prototype.applyOptions.apply({
                        series: this
                    }, [a[n]]);
                    for (n = 0; n < x; n++) y = b[m[n]], yr(y) ? u[n].push(y) : null === y && (u[n].hasNulls = !0)
                } else n = p ? e[g] : null, yr(n) ? u[0].push(n) : null === n && (u[0].hasNulls = !0)
            }
            return [h, l, c]
        }, Ar.processData = function() {
            var t, e = this.chart,
                i = this.options.dataGrouping,
                s = !1 !== this.allowDG && i && kr(i.enabled, e.options.isStock),
                n = this.visible || !e.options.chart.ignoreHiddenSeries;
            if (this.forceCrop = s, this.groupPixelWidth = null, this.hasProcessed = !0, !1 !== Tr.apply(this, arguments) && s) {
                this.destroyGroupedData();
                var o = this.processedXData,
                    r = this.processedYData,
                    a = e.plotSizeX,
                    h = (e = this.xAxis).options.ordinal;
                if (c = this.groupPixelWidth = e.getGroupPixelWidth && e.getGroupPixelWidth()) {
                    this.isDirty = t = !0, this.points = null, s = (l = e.getExtremes()).min, a = c * ((l = l.max) - s) / a * (h = h && e.getGroupIntervalFactor(s, l, this) || 1);
                    var l, c = e.getTimeTicks(e.normalizeTimeTickInterval(a, i.units || Dr), Math.min(s, o[0]), Math.max(l, o[o.length - 1]), e.options.startOfWeek, o, this.closestPointRange);
                    if (r = (o = Ar.groupData.apply(this, [o, r, c, i.approximation]))[0], h = o[1], i.smoothed) {
                        for (r[i = r.length - 1] = Math.min(r[i], l); i-- && 0 < i;) r[i] += a / 2;
                        r[0] = Math.max(r[0], s)
                    }
                    this.currentDataGrouping = c.info, this.closestPointRange = c.info.totalRange, this.groupMap = o[2], gr(r[0]) && r[0] < e.dataMin && n && (e.min === e.dataMin && (e.min = r[0]), e.dataMin = r[0]), this.processedXData = r, this.processedYData = h
                } else this.currentDataGrouping = this.groupMap = null;
                this.hasGroupedData = t
            }
        }, Ar.destroyGroupedData = function() {
            var t = this.groupedData;
            mr(t || [], function(e, i) {
                e && (t[i] = e.destroy ? e.destroy() : null)
            }), this.groupedData = null
        }, Ar.generatePoints = function() {
            Pr.apply(this), this.destroyGroupedData(), this.groupedData = this.hasGroupedData ? this.points : null
        }, Sr(Mr.prototype, "update", function(t) {
            this.dataGroup ? cr.error(24) : t.apply(this, [].slice.call(arguments, 1))
        }), Sr(wr.prototype, "tooltipFooterHeaderFormatter", function(t, e, i) {
            var s, n = e.series,
                o = n.tooltipOptions,
                r = n.options.dataGrouping,
                a = o.xDateFormat,
                h = n.xAxis,
                l = cr.dateFormat;
            return h && "datetime" === h.options.type && r && yr(e.key) ? (t = n.currentDataGrouping, r = r.dateTimeLabelFormats, t ? (h = r[t.unitName], 1 === t.count ? a = h[0] : (a = h[1], s = h[2])) : !a && r && (a = this.getXDateFormat(e, o, h)), a = l(a, e.key), s && (a += l(s, e.key + t.totalRange - 1)), vr(o[(i ? "footer" : "header") + "Format"], {
                point: xr(e.point, {
                    key: a
                }),
                series: n
            })) : t.call(this, e, i)
        }), Ar.destroy = function() {
            for (var t = this.groupedData || [], e = t.length; e--;) t[e] && t[e].destroy();
            Cr.apply(this)
        }, Sr(Ar, "setOptions", function(t, e) {
            t = t.call(this, e);
            var i = this.type,
                s = this.chart.options.plotOptions,
                n = fr[i].dataGrouping;
            return Or[i] && (n || (n = br(Lr, Or[i])), t.dataGrouping = br(n, s.series && s.series.dataGrouping, s[i].dataGrouping, e.dataGrouping)), this.chart.options.isStock && (this.requireSorting = !0), t
        }), Sr(ur.prototype, "setScale", function(t) {
            t.call(this), mr(this.series, function(t) {
                t.hasProcessed = !1
            })
        }), ur.prototype.getGroupPixelWidth = function() {
            var t, e, i = this.series,
                s = i.length,
                n = 0,
                o = !1;
            for (t = s; t--;)(e = i[t].options.dataGrouping) && (n = Math.max(n, e.groupPixelWidth));
            for (t = s; t--;)(e = i[t].options.dataGrouping) && i[t].hasProcessed && (s = (i[t].processedXData || i[t].data).length, i[t].groupPixelWidth || s > this.chart.plotSizeX / n || s && e.forced) && (o = !0);
            return o ? n : 0
        }, ur.prototype.setDataGrouping = function(t, e) {
            var i;
            if (e = kr(e, !0), t || (t = {
                    forced: !1,
                    units: null
                }), this instanceof ur)
                for (i = this.series.length; i--;) this.series[i].update({
                    dataGrouping: t
                }, !1);
            else mr(this.chart.options.series, function(e) {
                e.dataGrouping = t
            }, !1);
            e && this.chart.redraw()
        }, Er = (zr = t).each, Br = zr.Point, Rr = zr.seriesType, Gr = zr.seriesTypes, Rr("ohlc", "column", {
            lineWidth: 1,
            tooltip: {
                pointFormat: '<span style="color:{point.color}">●</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
            },
            threshold: null,
            states: {
                hover: {
                    lineWidth: 3
                }
            },
            stickyTracking: !0
        }, {
            directTouch: !1,
            pointArrayMap: ["open", "high", "low", "close"],
            toYData: function(t) {
                return [t.open, t.high, t.low, t.close]
            },
            pointValKey: "close",
            pointAttrToOptions: {
                stroke: "color",
                "stroke-width": "lineWidth"
            },
            pointAttribs: function(t, e) {
                e = Gr.column.prototype.pointAttribs.call(this, t, e);
                var i = this.options;
                return delete e.fill, !t.options.color && i.upColor && t.open < t.close && (e.stroke = i.upColor), e
            },
            translate: function() {
                var t = this,
                    e = t.yAxis,
                    i = !!t.modifyValue,
                    s = ["plotOpen", "plotHigh", "plotLow", "plotClose", "yBottom"];
                Gr.column.prototype.translate.apply(t), Er(t.points, function(n) {
                    Er([n.open, n.high, n.low, n.close, n.low], function(o, r) {
                        null !== o && (i && (o = t.modifyValue(o)), n[s[r]] = e.toPixels(o, !0))
                    }), n.tooltipPos[1] = n.plotHigh + e.pos - t.chart.plotTop
                })
            },
            drawPoints: function() {
                var t = this,
                    e = t.chart;
                Er(t.points, function(i) {
                    var s, n, o, r, a, h = i.graphic,
                        l = !h;
                    void 0 !== i.plotY && (h || (i.graphic = h = e.renderer.path().add(t.group)), h.attr(t.pointAttribs(i, i.selected && "select")), n = h.strokeWidth() % 2 / 2, a = Math.round(i.plotX) - n, o = Math.round(i.shapeArgs.width / 2), r = ["M", a, Math.round(i.yBottom), "L", a, Math.round(i.plotHigh)], null !== i.open && (s = Math.round(i.plotOpen) + n, r.push("M", a, s, "L", a - o, s)), null !== i.close && (s = Math.round(i.plotClose) + n, r.push("M", a, s, "L", a + o, s)), h[l ? "attr" : "animate"]({
                        d: r
                    }).addClass(i.getClassName(), !0))
                })
            },
            animate: null
        }, {
            getClassName: function() {
                return Br.prototype.getClassName.call(this) + (this.open < this.close ? " highcharts-point-up" : " highcharts-point-down")
            }
        }), Hr = (Wr = t).defaultPlotOptions, Nr = Wr.each, Xr = Wr.merge, Yr = Wr.seriesType, Fr = Wr.seriesTypes, Yr("candlestick", "ohlc", Xr(Hr.column, {
            states: {
                hover: {
                    lineWidth: 2
                }
            },
            tooltip: Hr.ohlc.tooltip,
            threshold: null,
            lineColor: "#000000",
            lineWidth: 1,
            upColor: "#ffffff",
            stickyTracking: !0
        }), {
            pointAttribs: function(t, e) {
                var i = Fr.column.prototype.pointAttribs.call(this, t, e),
                    s = this.options,
                    n = t.open < t.close,
                    o = s.lineColor || this.color;
                return i["stroke-width"] = s.lineWidth, i.fill = t.options.color || n && s.upColor || this.color, i.stroke = t.lineColor || n && s.upLineColor || o, e && (t = s.states[e], i.fill = t.color || i.fill, i.stroke = t.lineColor || i.stroke, i["stroke-width"] = t.lineWidth || i["stroke-width"]), i
            },
            drawPoints: function() {
                var t = this,
                    e = t.chart;
                Nr(t.points, function(i) {
                    var s, n, o, r, a, h, l, c = i.graphic,
                        d = !c;
                    void 0 !== i.plotY && (c || (i.graphic = c = e.renderer.path().add(t.group)), c.attr(t.pointAttribs(i, i.selected && "select")).shadow(t.options.shadow), a = c.strokeWidth() % 2 / 2, h = Math.round(i.plotX) - a, s = i.plotOpen, n = i.plotClose, o = Math.min(s, n), s = Math.max(s, n), l = Math.round(i.shapeArgs.width / 2), n = Math.round(o) !== Math.round(i.plotHigh), r = s !== i.yBottom, o = Math.round(o) + a, s = Math.round(s) + a, (a = []).push("M", h - l, s, "L", h - l, o, "L", h + l, o, "L", h + l, s, "Z", "M", h, o, "L", h, n ? Math.round(i.plotHigh) : o, "M", h, s, "L", h, r ? Math.round(i.yBottom) : s), c[d ? "attr" : "animate"]({
                        d: a
                    }).addClass(i.getClassName(), !0))
                })
            }
        }), jr = (Vr = t).addEvent, Ur = Vr.each, _r = Vr.merge, Kr = Vr.noop, Zr = Vr.Renderer, qr = Vr.seriesType, $r = Vr.seriesTypes, Jr = Vr.TrackerMixin, Qr = Vr.VMLRenderer, ta = Vr.SVGRenderer.prototype.symbols, ea = Vr.stableSort, qr("flags", "column", {
            pointRange: 0,
            shape: "flag",
            stackDistance: 12,
            textAlign: "center",
            tooltip: {
                pointFormat: "{point.text}<br/>"
            },
            threshold: null,
            y: -30,
            fillColor: "#ffffff",
            lineWidth: 1,
            states: {
                hover: {
                    lineColor: "#000000",
                    fillColor: "#ccd6eb"
                }
            },
            style: {
                fontSize: "11px",
                fontWeight: "bold"
            }
        }, {
            sorted: !1,
            noSharedTooltip: !0,
            allowDG: !1,
            takeOrdinalPosition: !1,
            trackerGroups: ["markerGroup"],
            forceCrop: !0,
            init: Vr.Series.prototype.init,
            pointAttribs: function(t, e) {
                var i = this.options,
                    s = t && t.color || this.color,
                    n = i.lineColor,
                    o = t && t.lineWidth;
                return t = t && t.fillColor || i.fillColor, e && (t = i.states[e].fillColor, n = i.states[e].lineColor, o = i.states[e].lineWidth), {
                    fill: t || s,
                    stroke: n || s,
                    "stroke-width": o || i.lineWidth || 0
                }
            },
            translate: function() {
                $r.column.prototype.translate.apply(this);
                var t, e, i = this.options,
                    s = this.chart,
                    n = this.points,
                    o = n.length - 1;
                t = (l = i.onSeries) && s.get(l), i = i.onKey || "y";
                var r, a, h, l = t && t.options.step,
                    c = t && t.points,
                    d = c && c.length,
                    p = this.xAxis,
                    u = this.yAxis,
                    f = p.getExtremes(),
                    g = 0;
                if (t && t.visible && d)
                    for (g = (t.pointXOffset || 0) + (t.barW || 0) / 2, t = t.currentDataGrouping, a = c[d - 1].x + (t ? t.totalRange : 0), ea(n, function(t, e) {
                            return t.x - e.x
                        }), i = "plot" + i[0].toUpperCase() + i.substr(1); d-- && n[o] && (t = n[o], !((r = c[d]).x <= t.x && void 0 !== r[i] && (t.x <= a && (t.plotY = r[i], r.x < t.x && !l && (h = c[d + 1]) && void 0 !== h[i] && (t.plotY += (t.x - r.x) / (h.x - r.x) * (h[i] - r[i]))), o--, d++, 0 > o))););
                Ur(n, function(t, i) {
                    var o;
                    void 0 === t.plotY && (t.x >= f.min && t.x <= f.max ? t.plotY = s.chartHeight - p.bottom - (p.opposite ? p.height : 0) + p.offset - u.top : t.shapeArgs = {}), t.plotX += g, (e = n[i - 1]) && e.plotX === t.plotX && (void 0 === e.stackIndex && (e.stackIndex = 0), o = e.stackIndex + 1), t.stackIndex = o
                })
            },
            drawPoints: function() {
                var t, e, i, s, n, o, r, a, h, l = this.points,
                    c = this.chart,
                    d = c.renderer,
                    p = this.options,
                    u = p.y,
                    f = this.yAxis;
                for (s = l.length; s--;) h = (n = l[s]).plotX > this.xAxis.len, t = n.plotX, o = n.stackIndex, i = n.options.shape || p.shape, void 0 !== (e = n.plotY) && (e = n.plotY + u - (void 0 !== o && o * p.stackDistance)), r = o ? void 0 : n.plotX, a = o ? void 0 : n.plotY, o = n.graphic, void 0 !== e && 0 <= t && !h ? (o || (o = n.graphic = d.label("", null, null, i, null, null, p.useHTML).attr(this.pointAttribs(n)).css(_r(p.style, n.style)).attr({
                    align: "flag" === i ? "left" : "center",
                    width: p.width,
                    height: p.height,
                    "text-align": p.textAlign
                }).addClass("highcharts-point").add(this.markerGroup), n.graphic.div && (n.graphic.div.point = n), o.shadow(p.shadow)), 0 < t && (t -= o.strokeWidth() % 2), o.attr({
                    text: n.options.title || p.title || "A",
                    x: t,
                    y: e,
                    anchorX: r,
                    anchorY: a
                }), n.tooltipPos = c.inverted ? [f.len + f.pos - c.plotLeft - e, this.xAxis.len - t] : [t, e + f.pos - c.plotTop]) : o && (n.graphic = o.destroy());
                p.useHTML && Vr.wrap(this.markerGroup, "on", function(t) {
                    return Vr.SVGElement.prototype.on.apply(t.apply(this, [].slice.call(arguments, 1)), [].slice.call(arguments, 1))
                })
            },
            drawTracker: function() {
                var t = this.points;
                Jr.drawTrackerPoint.apply(this), Ur(t, function(e) {
                    var i = e.graphic;
                    i && jr(i.element, "mouseover", function() {
                        0 < e.stackIndex && !e.raised && (e._y = i.y, i.attr({
                            y: e._y - 8
                        }), e.raised = !0), Ur(t, function(t) {
                            t !== e && t.raised && t.graphic && (t.graphic.attr({
                                y: t._y
                            }), t.raised = !1)
                        })
                    })
                })
            },
            animate: Kr,
            buildKDTree: Kr,
            setClip: Kr
        }), ta.flag = function(t, e, i, s, n) {
            return ["M", n && n.anchorX || t, n && n.anchorY || e, "L", t, e + s, t, e, t + i, e, t + i, e + s, t, e + s, "Z"]
        }, Ur(["circle", "square"], function(t) {
            ta[t + "pin"] = function(e, i, s, n, o) {
                var r = o && o.anchorX;
                return o = o && o.anchorY, "circle" === t && n > s && (e -= Math.round((n - s) / 2), s = n), e = ta[t](e, i, s, n), r && o && e.push("M", r, i > o ? i : i + n, "L", r, o), e
            }
        }), Zr === Qr && Ur(["flag", "circlepin", "squarepin"], function(t) {
            Qr.prototype.symbols[t] = ta[t]
        }),
        function(t) {
            function e(t, e, i) {
                this.init(t, e, i)
            }
            var i, s = t.addEvent,
                n = t.Axis,
                o = t.correctFloat,
                r = t.defaultOptions,
                a = t.defined,
                h = t.destroyObjectProperties,
                l = t.doc,
                c = t.each,
                d = t.fireEvent,
                p = t.hasTouch,
                u = t.isTouchDevice,
                f = t.merge,
                g = t.pick,
                m = t.removeEvent,
                x = t.wrap,
                v = {
                    height: u ? 20 : 14,
                    barBorderRadius: 0,
                    buttonBorderRadius: 0,
                    liveRedraw: t.svg && !u,
                    margin: 10,
                    minWidth: 6,
                    step: .2,
                    zIndex: 3,
                    barBackgroundColor: "#cccccc",
                    barBorderWidth: 1,
                    barBorderColor: "#cccccc",
                    buttonArrowColor: "#333333",
                    buttonBackgroundColor: "#e6e6e6",
                    buttonBorderColor: "#cccccc",
                    buttonBorderWidth: 1,
                    rifleColor: "#333333",
                    trackBackgroundColor: "#f2f2f2",
                    trackBorderColor: "#f2f2f2",
                    trackBorderWidth: 1
                };
            r.scrollbar = f(!0, v, r.scrollbar), t.swapXY = i = function(t, e) {
                var i, s = t.length;
                if (e)
                    for (e = 0; e < s; e += 3) i = t[e + 1], t[e + 1] = t[e + 2], t[e + 2] = i;
                return t
            }, e.prototype = {
                init: function(t, e, i) {
                    this.scrollbarButtons = [], this.renderer = t, this.userOptions = e, this.options = f(v, e), this.chart = i, this.size = g(this.options.size, this.options.height), e.enabled && (this.render(), this.initEvents(), this.addEvents())
                },
                render: function() {
                    var t, e = this.renderer,
                        s = this.options,
                        n = this.size;
                    this.group = t = e.g("scrollbar").attr({
                        zIndex: s.zIndex,
                        translateY: -99999
                    }).add(), this.track = e.rect().addClass("highcharts-scrollbar-track").attr({
                        x: 0,
                        r: s.trackBorderRadius || 0,
                        height: n,
                        width: n
                    }).add(t), this.track.attr({
                        fill: s.trackBackgroundColor,
                        stroke: s.trackBorderColor,
                        "stroke-width": s.trackBorderWidth
                    }), this.trackBorderWidth = this.track.strokeWidth(), this.track.attr({
                        y: -this.trackBorderWidth % 2 / 2
                    }), this.scrollbarGroup = e.g().add(t), this.scrollbar = e.rect().addClass("highcharts-scrollbar-thumb").attr({
                        height: n,
                        width: n,
                        r: s.barBorderRadius || 0
                    }).add(this.scrollbarGroup), this.scrollbarRifles = e.path(i(["M", -3, n / 4, "L", -3, 2 * n / 3, "M", 0, n / 4, "L", 0, 2 * n / 3, "M", 3, n / 4, "L", 3, 2 * n / 3], s.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup), this.scrollbar.attr({
                        fill: s.barBackgroundColor,
                        stroke: s.barBorderColor,
                        "stroke-width": s.barBorderWidth
                    }), this.scrollbarRifles.attr({
                        stroke: s.rifleColor,
                        "stroke-width": 1
                    }), this.scrollbarStrokeWidth = this.scrollbar.strokeWidth(), this.scrollbarGroup.translate(-this.scrollbarStrokeWidth % 2 / 2, -this.scrollbarStrokeWidth % 2 / 2), this.drawScrollbarButton(0), this.drawScrollbarButton(1)
                },
                position: function(t, e, i, s) {
                    var n = this.options.vertical,
                        o = 0,
                        r = this.rendered ? "animate" : "attr";
                    this.x = t, this.y = e + this.trackBorderWidth, this.width = i, this.xOffset = this.height = s, this.yOffset = o, n ? (this.width = this.yOffset = i = o = this.size, this.xOffset = e = 0, this.barWidth = s - 2 * i, this.x = t += this.options.margin) : (this.height = this.xOffset = s = e = this.size, this.barWidth = i - 2 * s, this.y += this.options.margin), this.group[r]({
                        translateX: t,
                        translateY: this.y
                    }), this.track[r]({
                        width: i,
                        height: s
                    }), this.scrollbarButtons[1][r]({
                        translateX: n ? 0 : i - e,
                        translateY: n ? s - o : 0
                    })
                },
                drawScrollbarButton: function(t) {
                    var e, s = this.renderer,
                        n = this.scrollbarButtons,
                        o = this.options,
                        r = this.size;
                    e = s.g().add(this.group), n.push(e), (e = s.rect().addClass("highcharts-scrollbar-button").add(e)).attr({
                        stroke: o.buttonBorderColor,
                        "stroke-width": o.buttonBorderWidth,
                        fill: o.buttonBackgroundColor
                    }), e.attr(e.crisp({
                        x: -.5,
                        y: -.5,
                        width: r + 1,
                        height: r + 1,
                        r: o.buttonBorderRadius
                    }, e.strokeWidth())), (e = s.path(i(["M", r / 2 + (t ? -1 : 1), r / 2 - 3, "L", r / 2 + (t ? -1 : 1), r / 2 + 3, "L", r / 2 + (t ? 2 : -2), r / 2], o.vertical)).addClass("highcharts-scrollbar-arrow").add(n[t])).attr({
                        fill: o.buttonArrowColor
                    })
                },
                setRange: function(t, e) {
                    var i, s, n = this.options,
                        r = n.vertical,
                        h = n.minWidth,
                        l = this.barWidth,
                        c = this.rendered && !this.hasDragged ? "animate" : "attr";
                    a(l) && (t = Math.max(t, 0), i = Math.ceil(l * t), this.calculatedWidth = s = o(l * Math.min(e, 1) - i), s < h && (i = (l - h + s) * t, s = h), h = Math.floor(i + this.xOffset + this.yOffset), l = s / 2 - .5, this.from = t, this.to = e, r ? (this.scrollbarGroup[c]({
                        translateY: h
                    }), this.scrollbar[c]({
                        height: s
                    }), this.scrollbarRifles[c]({
                        translateY: l
                    }), this.scrollbarTop = h, this.scrollbarLeft = 0) : (this.scrollbarGroup[c]({
                        translateX: h
                    }), this.scrollbar[c]({
                        width: s
                    }), this.scrollbarRifles[c]({
                        translateX: l
                    }), this.scrollbarLeft = h, this.scrollbarTop = 0), 12 >= s ? this.scrollbarRifles.hide() : this.scrollbarRifles.show(!0), !1 === n.showFull && (0 >= t && 1 <= e ? this.group.hide() : this.group.show()), this.rendered = !0)
                },
                initEvents: function() {
                    var t = this;
                    t.mouseMoveHandler = function(e) {
                        var i = t.chart.pointer.normalize(e),
                            s = t.options.vertical ? "chartY" : "chartX",
                            n = t.initPositions;
                        !t.grabbedCenter || e.touches && 0 === e.touches[0][s] || (s = (i = t.cursorToScrollbarPosition(i)[s]) - (s = t[s]), t.hasDragged = !0, t.updatePosition(n[0] + s, n[1] + s), t.hasDragged && d(t, "changed", {
                            from: t.from,
                            to: t.to,
                            trigger: "scrollbar",
                            DOMType: e.type,
                            DOMEvent: e
                        }))
                    }, t.mouseUpHandler = function(e) {
                        t.hasDragged && d(t, "changed", {
                            from: t.from,
                            to: t.to,
                            trigger: "scrollbar",
                            DOMType: e.type,
                            DOMEvent: e
                        }), t.grabbedCenter = t.hasDragged = t.chartX = t.chartY = null
                    }, t.mouseDownHandler = function(e) {
                        e = t.chart.pointer.normalize(e), e = t.cursorToScrollbarPosition(e), t.chartX = e.chartX, t.chartY = e.chartY, t.initPositions = [t.from, t.to], t.grabbedCenter = !0
                    }, t.buttonToMinClick = function(e) {
                        var i = o(t.to - t.from) * t.options.step;
                        t.updatePosition(o(t.from - i), o(t.to - i)), d(t, "changed", {
                            from: t.from,
                            to: t.to,
                            trigger: "scrollbar",
                            DOMEvent: e
                        })
                    }, t.buttonToMaxClick = function(e) {
                        var i = (t.to - t.from) * t.options.step;
                        t.updatePosition(t.from + i, t.to + i), d(t, "changed", {
                            from: t.from,
                            to: t.to,
                            trigger: "scrollbar",
                            DOMEvent: e
                        })
                    }, t.trackClick = function(e) {
                        var i = t.chart.pointer.normalize(e),
                            s = t.to - t.from,
                            n = t.y + t.scrollbarTop,
                            o = t.x + t.scrollbarLeft;
                        t.options.vertical && i.chartY > n || !t.options.vertical && i.chartX > o ? t.updatePosition(t.from + s, t.to + s) : t.updatePosition(t.from - s, t.to - s), d(t, "changed", {
                            from: t.from,
                            to: t.to,
                            trigger: "scrollbar",
                            DOMEvent: e
                        })
                    }
                },
                cursorToScrollbarPosition: function(t) {
                    var e = (e = this.options).minWidth > this.calculatedWidth ? e.minWidth : 0;
                    return {
                        chartX: (t.chartX - this.x - this.xOffset) / (this.barWidth - e),
                        chartY: (t.chartY - this.y - this.yOffset) / (this.barWidth - e)
                    }
                },
                updatePosition: function(t, e) {
                    1 < e && (t = o(1 - o(e - t)), e = 1), 0 > t && (e = o(e - t), t = 0), this.from = t, this.to = e
                },
                update: function(t) {
                    this.destroy(), this.init(this.chart.renderer, f(!0, this.options, t), this.chart)
                },
                addEvents: function() {
                    var t = this.options.inverted ? [1, 0] : [0, 1],
                        e = this.scrollbarButtons,
                        i = this.scrollbarGroup.element,
                        n = this.mouseDownHandler,
                        o = this.mouseMoveHandler,
                        r = this.mouseUpHandler;
                    t = [
                        [e[t[0]].element, "click", this.buttonToMinClick],
                        [e[t[1]].element, "click", this.buttonToMaxClick],
                        [this.track.element, "click", this.trackClick],
                        [i, "mousedown", n],
                        [l, "mousemove", o],
                        [l, "mouseup", r]
                    ];
                    p && t.push([i, "touchstart", n], [l, "touchmove", o], [l, "touchend", r]), c(t, function(t) {
                        s.apply(null, t)
                    }), this._events = t
                },
                removeEvents: function() {
                    c(this._events, function(t) {
                        m.apply(null, t)
                    }), this._events.length = 0
                },
                destroy: function() {
                    var t = this.chart.scroller;
                    this.removeEvents(), c(["track", "scrollbarRifles", "scrollbar", "scrollbarGroup", "group"], function(t) {
                        this[t] && this[t].destroy && (this[t] = this[t].destroy())
                    }, this), t && this === t.scrollbar && (t.scrollbar = null, h(t.scrollbarButtons))
                }
            }, x(n.prototype, "init", function(t) {
                var i = this;
                t.apply(i, Array.prototype.slice.call(arguments, 1)), i.options.scrollbar && i.options.scrollbar.enabled && (i.options.scrollbar.vertical = !i.horiz, i.options.startOnTick = i.options.endOnTick = !1, i.scrollbar = new e(i.chart.renderer, i.options.scrollbar, i.chart), s(i.scrollbar, "changed", function(t) {
                    var e, s = Math.min(g(i.options.min, i.min), i.min, i.dataMin),
                        n = Math.max(g(i.options.max, i.max), i.max, i.dataMax) - s;
                    i.horiz && !i.reversed || !i.horiz && i.reversed ? (e = s + n * this.to, s += n * this.from) : (e = s + n * (1 - this.from), s += n * (1 - this.to)), i.setExtremes(s, e, !0, !1, t)
                }))
            }), x(n.prototype, "render", function(t) {
                var e = Math.min(g(this.options.min, this.min), this.min, this.dataMin),
                    i = Math.max(g(this.options.max, this.max), this.max, this.dataMax),
                    s = this.scrollbar,
                    n = this.titleOffset || 0;
                t.apply(this, Array.prototype.slice.call(arguments, 1)), s && (this.horiz ? (s.position(this.left, this.top + this.height + 2 + this.chart.scrollbarsOffsets[1] + (this.opposite ? 0 : n + this.axisTitleMargin + this.offset), this.width, this.height), n = 1) : (s.position(this.left + this.width + 2 + this.chart.scrollbarsOffsets[0] + (this.opposite ? n + this.axisTitleMargin + this.offset : 0), this.top, this.width, this.height), n = 0), (!this.opposite && !this.horiz || this.opposite && this.horiz) && (this.chart.scrollbarsOffsets[n] += this.scrollbar.size + this.scrollbar.options.margin), isNaN(e) || isNaN(i) || !a(this.min) || !a(this.max) ? s.setRange(0, 0) : (n = (this.min - e) / (i - e), e = (this.max - e) / (i - e), this.horiz && !this.reversed || !this.horiz && this.reversed ? s.setRange(n, e) : s.setRange(1 - e, 1 - n)))
            }), x(n.prototype, "getOffset", function(t) {
                var e = this.horiz ? 2 : 1,
                    i = this.scrollbar;
                t.apply(this, Array.prototype.slice.call(arguments, 1)), i && (this.chart.scrollbarsOffsets = [0, 0], this.chart.axisOffset[e] += i.size + i.options.margin)
            }), x(n.prototype, "destroy", function(t) {
                this.scrollbar && (this.scrollbar = this.scrollbar.destroy()), t.apply(this, Array.prototype.slice.call(arguments, 1))
            }), t.Scrollbar = e
        }(t),
        function(t) {
            function e(t) {
                this.init(t)
            }
            var i = t.addEvent,
                s = t.Axis,
                n = t.Chart,
                o = t.color,
                r = t.defaultOptions,
                a = t.defined,
                h = t.destroyObjectProperties,
                l = t.doc,
                c = t.each,
                d = t.erase,
                p = t.error,
                u = t.extend,
                f = t.grep,
                g = t.hasTouch,
                m = t.isNumber,
                x = t.isObject,
                v = t.merge,
                y = t.pick,
                b = t.removeEvent,
                k = t.Scrollbar,
                M = t.Series,
                w = t.seriesTypes,
                S = t.wrap,
                A = t.swapXY,
                T = [].concat(t.defaultDataGroupingUnits),
                P = function(t) {
                    var e = f(arguments, m);
                    if (e.length) return Math[t].apply(0, e)
                };
            T[4] = ["day", [1, 2, 3, 4]], T[5] = ["week", [1, 2, 3]], w = void 0 === w.areaspline ? "line" : "areaspline", u(r, {
                navigator: {
                    height: 40,
                    margin: 25,
                    maskInside: !0,
                    handles: {
                        backgroundColor: "#f2f2f2",
                        borderColor: "#999999"
                    },
                    maskFill: o("#6685c2").setOpacity(.3).get(),
                    outlineColor: "#cccccc",
                    outlineWidth: 1,
                    series: {
                        type: w,
                        color: "#335cad",
                        fillOpacity: .05,
                        lineWidth: 1,
                        compare: null,
                        dataGrouping: {
                            approximation: "average",
                            enabled: !0,
                            groupPixelWidth: 2,
                            smoothed: !0,
                            units: T
                        },
                        dataLabels: {
                            enabled: !1,
                            zIndex: 2
                        },
                        id: "highcharts-navigator-series",
                        className: "highcharts-navigator-series",
                        lineColor: null,
                        marker: {
                            enabled: !1
                        },
                        pointRange: 0,
                        shadow: !1,
                        threshold: null
                    },
                    xAxis: {
                        className: "highcharts-navigator-xaxis",
                        tickLength: 0,
                        lineWidth: 0,
                        gridLineColor: "#e6e6e6",
                        gridLineWidth: 1,
                        tickPixelInterval: 200,
                        labels: {
                            align: "left",
                            style: {
                                color: "#999999"
                            },
                            x: 3,
                            y: -4
                        },
                        crosshair: !1
                    },
                    yAxis: {
                        className: "highcharts-navigator-yaxis",
                        gridLineWidth: 0,
                        startOnTick: !1,
                        endOnTick: !1,
                        minPadding: .1,
                        maxPadding: .1,
                        labels: {
                            enabled: !1
                        },
                        crosshair: !1,
                        title: {
                            text: null
                        },
                        tickLength: 0,
                        tickWidth: 0
                    }
                }
            }), e.prototype = {
                drawHandle: function(t, e, i, s) {
                    this.handles[e][s](i ? {
                        translateX: Math.round(this.left + this.height / 2 - 8),
                        translateY: Math.round(this.top + parseInt(t, 10) + .5)
                    } : {
                        translateX: Math.round(this.left + parseInt(t, 10)),
                        translateY: Math.round(this.top + this.height / 2 - 8)
                    })
                },
                getHandlePath: function(t) {
                    return A(["M", -4.5, .5, "L", 3.5, .5, "L", 3.5, 15.5, "L", -4.5, 15.5, "L", -4.5, .5, "M", -1.5, 4, "L", -1.5, 12, "M", .5, 4, "L", .5, 12], t)
                },
                drawOutline: function(t, e, i, s) {
                    var n = this.navigatorOptions.maskInside,
                        o = (r = this.outline.strokeWidth()) / 2,
                        r = r % 2 / 2,
                        a = this.outlineHeight,
                        h = this.scrollbarHeight,
                        l = this.size,
                        c = this.left - h,
                        d = this.top;
                    i ? t = ["M", (c -= o) + a, d - h - r, "L", c + a, i = d + e + r, "L", c, i, "L", c, e = d + t + r, "L", c + a, e, "L", c + a, d + l + h].concat(n ? ["M", c + a, i - o, "L", c + a, e + o] : []) : t = ["M", c, d += o, "L", t += c + h - r, d, "L", t, d + a, "L", e += c + h - r, d + a, "L", e, d, "L", c + l + 2 * h, d].concat(n ? ["M", t - o, d, "L", e + o, d] : []), this.outline[s]({
                        d: t
                    })
                },
                drawMasks: function(t, e, i, s) {
                    var n, o, r, a, h = this.left,
                        l = this.top,
                        d = this.height;
                    i ? (r = [h, h, h], a = [l, l + t, l + e], o = [d, d, d], n = [t, e - t, this.size - e]) : (r = [h, h + t, h + e], a = [l, l, l], o = [t, e - t, this.size - e], n = [d, d, d]), c(this.shades, function(t, e) {
                        t[s]({
                            x: r[e],
                            y: a[e],
                            width: o[e],
                            height: n[e]
                        })
                    })
                },
                renderElements: function() {
                    var t, e = this,
                        i = e.navigatorOptions,
                        s = i.maskInside,
                        n = e.chart,
                        o = n.inverted,
                        r = n.renderer;
                    e.navigatorGroup = t = r.g("navigator").attr({
                        zIndex: 8,
                        visibility: "hidden"
                    }).add();
                    var a = {
                        cursor: o ? "ns-resize" : "ew-resize"
                    };
                    c([!s, s, !s], function(s, n) {
                        e.shades[n] = r.rect().addClass("highcharts-navigator-mask" + (1 === n ? "-inside" : "-outside")).attr({
                            fill: s ? i.maskFill : "rgba(0,0,0,0)"
                        }).css(1 === n && a).add(t)
                    }), e.outline = r.path().addClass("highcharts-navigator-outline").attr({
                        "stroke-width": i.outlineWidth,
                        stroke: i.outlineColor
                    }).add(t), c([0, 1], function(s) {
                        e.handles[s] = r.path(e.getHandlePath(o)).attr({
                            zIndex: 7 - s
                        }).addClass("highcharts-navigator-handle highcharts-navigator-handle-" + ["left", "right"][s]).add(t);
                        var n = i.handles;
                        e.handles[s].attr({
                            fill: n.backgroundColor,
                            stroke: n.borderColor,
                            "stroke-width": 1
                        }).css(a)
                    })
                },
                update: function(t) {
                    this.destroy(), v(!0, this.chart.options.navigator, this.options, t), this.init(this.chart)
                },
                render: function(t, e, i, s) {
                    var n, o, r, h = this.chart,
                        l = this.scrollbarHeight,
                        c = this.xAxis;
                    n = c.fake ? h.xAxis[0] : c;
                    var d, p = this.navigatorEnabled,
                        u = this.rendered;
                    o = h.inverted;
                    var f = h.xAxis[0].minRange;
                    if (!this.hasDragged || a(i)) {
                        if (!m(t) || !m(e)) {
                            if (!u) return;
                            i = 0, s = c.width
                        }
                        if (this.left = y(c.left, h.plotLeft + l + (o ? h.plotWidth : 0)), this.size = d = r = y(c.len, (o ? h.plotHeight : h.plotWidth) - 2 * l), h = o ? l : r + 2 * l, i = y(i, c.toPixels(t, !0)), s = y(s, c.toPixels(e, !0)), m(i) && 1 / 0 !== Math.abs(i) || (i = 0, s = h), t = c.toValue(i, !0), e = c.toValue(s, !0), Math.abs(e - t) < f)
                            if (this.grabbedLeft) i = c.toPixels(e - f, !0);
                            else {
                                if (!this.grabbedRight) return;
                                s = c.toPixels(t + f, !0)
                            } this.zoomedMax = Math.min(Math.max(i, s, 0), d), this.zoomedMin = Math.min(Math.max(this.fixedWidth ? this.zoomedMax - this.fixedWidth : Math.min(i, s), 0), d), this.range = this.zoomedMax - this.zoomedMin, d = Math.round(this.zoomedMax), i = Math.round(this.zoomedMin), p && (this.navigatorGroup.attr({
                            visibility: "visible"
                        }), u = u && !this.hasDragged ? "animate" : "attr", this.drawMasks(i, d, o, u), this.drawOutline(i, d, o, u), this.drawHandle(i, 0, o, u), this.drawHandle(d, 1, o, u)), this.scrollbar && (o ? (o = this.top - l, n = this.left - l + (p || !n.opposite ? 0 : (n.titleOffset || 0) + n.axisTitleMargin), l = r + 2 * l) : (o = this.top + (p ? this.height : -l), n = this.left - l), this.scrollbar.position(n, o, h, l), this.scrollbar.setRange(this.zoomedMin / r, this.zoomedMax / r)), this.rendered = !0
                    }
                },
                addMouseEvents: function() {
                    var t, e, s = this,
                        n = s.chart,
                        o = n.container,
                        r = [];
                    s.mouseMoveHandler = t = function(t) {
                        s.onMouseMove(t)
                    }, s.mouseUpHandler = e = function(t) {
                        s.onMouseUp(t)
                    }, (r = s.getPartsEvents("mousedown")).push(i(o, "mousemove", t), i(l, "mouseup", e)), g && (r.push(i(o, "touchmove", t), i(l, "touchend", e)), r.concat(s.getPartsEvents("touchstart"))), s.eventsToUnbind = r, s.series && s.series[0] && r.push(i(s.series[0].xAxis, "foundExtremes", function() {
                        n.navigator.modifyNavigatorAxisExtremes()
                    }))
                },
                getPartsEvents: function(t) {
                    var e = this,
                        s = [];
                    return c(["shades", "handles"], function(n) {
                        c(e[n], function(o, r) {
                            s.push(i(o.element, t, function(t) {
                                e[n + "Mousedown"](t, r)
                            }))
                        })
                    }), s
                },
                shadesMousedown: function(t, e) {
                    t = this.chart.pointer.normalize(t);
                    var i, s = this.chart,
                        n = this.xAxis,
                        o = this.zoomedMin,
                        r = this.left,
                        a = this.size,
                        h = this.range,
                        l = t.chartX;
                    s.inverted && (l = t.chartY, r = this.top), 1 === e ? (this.grabbedCenter = l, this.fixedWidth = h, this.dragOffset = l - o) : (t = l - r - h / 2, 0 === e ? t = Math.max(0, t) : 2 === e && t + h >= a && (t = a - h, i = this.getUnionExtremes().dataMax), t !== o && (this.fixedWidth = h, e = n.toFixedRange(t, t + h, null, i), s.xAxis[0].setExtremes(Math.min(e.min, e.max), Math.max(e.min, e.max), !0, null, {
                        trigger: "navigator"
                    })))
                },
                handlesMousedown: function(t, e) {
                    this.chart.pointer.normalize(t);
                    var i = (t = this.chart).xAxis[0],
                        s = t.inverted && !i.reversed || !t.inverted && i.reversed;
                    0 === e ? (this.grabbedLeft = !0, this.otherHandlePos = this.zoomedMax, this.fixedExtreme = s ? i.min : i.max) : (this.grabbedRight = !0, this.otherHandlePos = this.zoomedMin, this.fixedExtreme = s ? i.max : i.min), t.fixedRange = null
                },
                onMouseMove: function(t) {
                    var e = this,
                        i = e.chart,
                        s = e.left,
                        n = e.navigatorSize,
                        o = e.range,
                        r = e.dragOffset,
                        a = i.inverted;
                    t.touches && 0 === t.touches[0].pageX || (i = (t = i.pointer.normalize(t)).chartX, a && (s = e.top, i = t.chartY), e.grabbedLeft ? (e.hasDragged = !0, e.render(0, 0, i - s, e.otherHandlePos)) : e.grabbedRight ? (e.hasDragged = !0, e.render(0, 0, e.otherHandlePos, i - s)) : e.grabbedCenter && (e.hasDragged = !0, i < r ? i = r : i > n + r - o && (i = n + r - o), e.render(0, 0, i - r, i - r + o)), e.hasDragged && e.scrollbar && e.scrollbar.options.liveRedraw && (t.DOMType = t.type, setTimeout(function() {
                        e.onMouseUp(t)
                    }, 0)))
                },
                onMouseUp: function(t) {
                    var e, i, s = this.chart,
                        n = this.xAxis,
                        o = this.scrollbar,
                        r = t.DOMEvent || t;
                    (!this.hasDragged || o && o.hasDragged) && "scrollbar" !== t.trigger || (this.zoomedMin === this.otherHandlePos ? e = this.fixedExtreme : this.zoomedMax === this.otherHandlePos && (i = this.fixedExtreme), this.zoomedMax === this.size && (i = this.getUnionExtremes().dataMax), n = n.toFixedRange(this.zoomedMin, this.zoomedMax, e, i), a(n.min) && s.xAxis[0].setExtremes(Math.min(n.min, n.max), Math.max(n.min, n.max), !0, !this.hasDragged && null, {
                        trigger: "navigator",
                        triggerOp: "navigator-drag",
                        DOMEvent: r
                    })), "mousemove" !== t.DOMType && (this.grabbedLeft = this.grabbedRight = this.grabbedCenter = this.fixedWidth = this.fixedExtreme = this.otherHandlePos = this.hasDragged = this.dragOffset = null)
                },
                removeEvents: function() {
                    this.eventsToUnbind && (c(this.eventsToUnbind, function(t) {
                        t()
                    }), this.eventsToUnbind = void 0), this.removeBaseSeriesEvents()
                },
                removeBaseSeriesEvents: function() {
                    var t = this.baseSeries || [];
                    this.navigatorEnabled && t[0] && !1 !== this.navigatorOptions.adaptToUpdatedData && (c(t, function(t) {
                        b(t, "updatedData", this.updatedDataHandler)
                    }, this), t[0].xAxis && b(t[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes))
                },
                init: function(t) {
                    var e = (r = t.options).navigator,
                        n = e.enabled,
                        o = (l = r.scrollbar).enabled,
                        r = n ? e.height : 0,
                        a = o ? l.height : 0;
                    this.handles = [], this.shades = [], this.chart = t, this.setBaseSeries(), this.height = r, this.scrollbarHeight = a, this.scrollbarEnabled = o, this.navigatorEnabled = n, this.navigatorOptions = e, this.scrollbarOptions = l, this.outlineHeight = r + a, this.opposite = y(e.opposite, !n && t.inverted);
                    var h = this,
                        l = h.baseSeries,
                        c = (o = t.xAxis.length, t.yAxis.length),
                        d = l && l[0] && l[0].xAxis || t.xAxis[0];
                    t.extraMargin = {
                        type: h.opposite ? "plotTop" : "marginBottom",
                        value: (n || !t.inverted ? h.outlineHeight : 0) + e.margin
                    }, t.inverted && (t.extraMargin.type = h.opposite ? "marginRight" : "plotLeft"), t.isDirtyBox = !0, h.navigatorEnabled ? (h.xAxis = new s(t, v({
                        breaks: d.options.breaks,
                        ordinal: d.options.ordinal
                    }, e.xAxis, {
                        id: "navigator-x-axis",
                        yAxis: "navigator-y-axis",
                        isX: !0,
                        type: "datetime",
                        index: o,
                        offset: 0,
                        keepOrdinalPadding: !0,
                        startOnTick: !1,
                        endOnTick: !1,
                        minPadding: 0,
                        maxPadding: 0,
                        zoomEnabled: !1
                    }, t.inverted ? {
                        offsets: [a, 0, -a, 0],
                        width: r
                    } : {
                        offsets: [0, -a, 0, a],
                        height: r
                    })), h.yAxis = new s(t, v(e.yAxis, {
                        id: "navigator-y-axis",
                        alignTicks: !1,
                        offset: 0,
                        index: c,
                        zoomEnabled: !1
                    }, t.inverted ? {
                        width: r
                    } : {
                        height: r
                    })), l || e.series.data ? h.addBaseSeries() : 0 === t.series.length && S(t, "redraw", function(e, i) {
                        0 < t.series.length && !h.series && (h.setBaseSeries(), t.redraw = e), e.call(t, i)
                    }), h.renderElements(), h.addMouseEvents()) : h.xAxis = {
                        translate: function(e, i) {
                            var s = (r = t.xAxis[0]).getExtremes(),
                                n = r.len - 2 * a,
                                o = P("min", r.options.min, s.dataMin),
                                r = P("max", r.options.max, s.dataMax) - o;
                            return i ? e * r / n + o : n * (e - o) / r
                        },
                        toPixels: function(t) {
                            return this.translate(t)
                        },
                        toValue: function(t) {
                            return this.translate(t, !0)
                        },
                        toFixedRange: s.prototype.toFixedRange,
                        fake: !0
                    }, t.options.scrollbar.enabled && (t.scrollbar = h.scrollbar = new k(t.renderer, v(t.options.scrollbar, {
                        margin: h.navigatorEnabled ? 0 : 10,
                        vertical: t.inverted
                    }), t), i(h.scrollbar, "changed", function(e) {
                        var i = (s = h.size) * this.to,
                            s = s * this.from;
                        h.hasDragged = h.scrollbar.hasDragged, h.render(0, 0, s, i), (t.options.scrollbar.liveRedraw || "mousemove" !== e.DOMType) && setTimeout(function() {
                            h.onMouseUp(e)
                        })
                    })), h.addBaseSeriesEvents(), h.addChartEvents()
                },
                getUnionExtremes: function(t) {
                    var e, i = this.chart.xAxis[0],
                        s = this.xAxis,
                        n = s.options,
                        o = i.options;
                    return t && null === i.dataMin || (e = {
                        dataMin: y(n && n.min, P("min", o.min, i.dataMin, s.dataMin, s.min)),
                        dataMax: y(n && n.max, P("max", o.max, i.dataMax, s.dataMax, s.max))
                    }), e
                },
                setBaseSeries: function(t) {
                    var e, i = this.chart;
                    t = t || i.options && i.options.navigator.baseSeries || 0, this.series && (this.removeBaseSeriesEvents(), c(this.series, function(t) {
                        t.destroy()
                    })), e = this.baseSeries = [], c(i.series || [], function(i, s) {
                        (i.options.showInNavigator || (s === t || i.options.id === t) && !1 !== i.options.showInNavigator) && e.push(i)
                    }), this.xAxis && !this.xAxis.fake && this.addBaseSeries()
                },
                addBaseSeries: function() {
                    var t, e, i, s = this,
                        n = s.chart,
                        o = s.series = [],
                        r = s.baseSeries,
                        a = s.navigatorOptions.series,
                        h = {
                            enableMouseTracking: !1,
                            index: null,
                            group: "nav",
                            padXAxis: !1,
                            xAxis: "navigator-x-axis",
                            yAxis: "navigator-y-axis",
                            showInLegend: !1,
                            stacking: !1,
                            isInternal: !0,
                            visible: !0
                        };
                    r ? c(r, function(r, l) {
                        h.name = "Navigator " + (l + 1), t = r.options || {}, i = t.navigatorOptions || {}, e = v(t, h, a, i), l = i.data || a.data, s.hasNavigatorData = s.hasNavigatorData || !!l, e.data = l || t.data && t.data.slice(0), r.navigatorSeries = n.initSeries(e), o.push(r.navigatorSeries)
                    }) : ((e = v(a, h)).data = a.data, s.hasNavigatorData = !!e.data, o.push(n.initSeries(e))), this.addBaseSeriesEvents()
                },
                addBaseSeriesEvents: function() {
                    var t = this,
                        e = t.baseSeries || [];
                    e[0] && e[0].xAxis && i(e[0].xAxis, "foundExtremes", this.modifyBaseAxisExtremes), !1 !== this.navigatorOptions.adaptToUpdatedData && c(e, function(e) {
                        e.xAxis && i(e, "updatedData", this.updatedDataHandler), i(e, "remove", function() {
                            this.navigatorSeries && (d(t.series, this.navigatorSeries), this.navigatorSeries.remove(!1), delete this.navigatorSeries)
                        })
                    }, this)
                },
                modifyNavigatorAxisExtremes: function() {
                    var t, e = this.xAxis;
                    e.getExtremes && (!(t = this.getUnionExtremes(!0)) || t.dataMin === e.min && t.dataMax === e.max || (e.min = t.dataMin, e.max = t.dataMax))
                },
                modifyBaseAxisExtremes: function() {
                    var t, e, i = this.chart.navigator,
                        s = (o = this.getExtremes()).dataMin,
                        n = o.dataMax,
                        o = o.max - o.min,
                        r = i.stickToMin,
                        a = i.stickToMax,
                        h = i.series && i.series[0],
                        l = !!this.setExtremes;
                    this.eventArgs && "rangeSelectorButton" === this.eventArgs.trigger || (r && (t = (e = s) + o), a && (t = n, r || (e = Math.max(t - o, h && h.xData ? h.xData[0] : -Number.MAX_VALUE))), l && (r || a) && m(e) && (this.min = this.userMin = e, this.max = this.userMax = t)), i.stickToMin = i.stickToMax = null
                },
                updatedDataHandler: function() {
                    var t = this.chart.navigator,
                        e = this.navigatorSeries;
                    t.stickToMin = m(this.xAxis.min) && this.xAxis.min <= this.xData[0], t.stickToMax = Math.round(t.zoomedMax) >= Math.round(t.size), e && !t.hasNavigatorData && (e.options.pointStart = this.xData[0], e.setData(this.options.data, !1, null, !1))
                },
                addChartEvents: function() {
                    i(this.chart, "redraw", function() {
                        var t = this.navigator,
                            e = t && (t.baseSeries && t.baseSeries[0] && t.baseSeries[0].xAxis || t.scrollbar && this.xAxis[0]);
                        e && t.render(e.min, e.max)
                    })
                },
                destroy: function() {
                    this.removeEvents(), this.xAxis && (d(this.chart.xAxis, this.xAxis), d(this.chart.axes, this.xAxis)), this.yAxis && (d(this.chart.yAxis, this.yAxis), d(this.chart.axes, this.yAxis)), c(this.series || [], function(t) {
                        t.destroy && t.destroy()
                    }), c("series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" "), function(t) {
                        this[t] && this[t].destroy && this[t].destroy(), this[t] = null
                    }, this), c([this.handles], function(t) {
                        h(t)
                    }, this)
                }
            }, t.Navigator = e, S(s.prototype, "zoom", function(t, e, i) {
                var s, n = this.chart,
                    o = (h = n.options).chart.zoomType,
                    r = h.navigator,
                    h = h.rangeSelector;
                return this.isXAxis && (r && r.enabled || h && h.enabled) && ("x" === o ? n.resetZoomButton = "blocked" : "y" === o ? s = !1 : "xy" === o && (n = this.previousZoom, a(e) ? this.previousZoom = [this.min, this.max] : n && (e = n[0], i = n[1], delete this.previousZoom))), void 0 !== s ? s : t.call(this, e, i)
            }), S(n.prototype, "init", function(t, s, n) {
                i(this, "beforeRender", function() {
                    var t = this.options;
                    (t.navigator.enabled || t.scrollbar.enabled) && (this.scroller = this.navigator = new e(this))
                }), t.call(this, s, n)
            }), S(n.prototype, "setChartSize", function(t) {
                var e, i, s, n, o = this.legend,
                    r = this.navigator;
                t.apply(this, [].slice.call(arguments, 1)), r && (i = o.options, s = r.xAxis, n = r.yAxis, e = r.scrollbarHeight, this.inverted ? (r.left = r.opposite ? this.chartWidth - e - r.height : this.spacing[3] + e, r.top = this.plotTop + e) : (r.left = this.plotLeft + e, r.top = r.navigatorOptions.top || this.chartHeight - r.height - e - this.spacing[2] - ("bottom" === i.verticalAlign && i.enabled && !i.floating ? o.legendHeight + y(i.margin, 10) : 0)), s && n && (this.inverted ? s.options.left = n.options.left = r.left : s.options.top = n.options.top = r.top, s.setAxisSize(), n.setAxisSize()))
            }), S(M.prototype, "addPoint", function(t, e, i, s, n) {
                var o = this.options.turboThreshold;
                o && this.xData.length > o && x(e, !0) && this.chart.navigator && p(20, !0), t.call(this, e, i, s, n)
            }), S(n.prototype, "addSeries", function(t, e, i, s) {
                return t = t.call(this, e, !1, s), this.navigator && this.navigator.setBaseSeries(), y(i, !0) && this.redraw(), t
            }), S(M.prototype, "update", function(t, e, i) {
                t.call(this, e, !1), this.chart.navigator && this.chart.navigator.setBaseSeries(), y(i, !0) && this.chart.redraw()
            }), n.prototype.callbacks.push(function(t) {
                var e = t.navigator;
                e && (t = t.xAxis[0].getExtremes(), e.render(t.min, t.max))
            })
        }(t),
        function(t) {
            function e(t) {
                this.init(t)
            }
            var i = t.addEvent,
                s = t.Axis,
                n = t.Chart,
                o = t.css,
                r = t.createElement,
                a = t.dateFormat,
                h = t.defaultOptions,
                l = h.global.useUTC,
                c = t.defined,
                d = t.destroyObjectProperties,
                p = t.discardElement,
                u = t.each,
                f = t.extend,
                g = t.fireEvent,
                m = t.Date,
                x = t.isNumber,
                v = t.merge,
                y = t.pick,
                b = t.pInt,
                k = t.splat,
                M = t.wrap;
            f(h, {
                rangeSelector: {
                    buttonTheme: {
                        "stroke-width": 0,
                        width: 28,
                        height: 18,
                        padding: 2,
                        zIndex: 7
                    },
                    height: 35,
                    inputPosition: {
                        align: "right"
                    },
                    labelStyle: {
                        color: "#666666"
                    }
                }
            }), h.lang = v(h.lang, {
                rangeSelectorZoom: "Zoom",
                rangeSelectorFrom: "From",
                rangeSelectorTo: "To"
            }), e.prototype = {
                clickButton: function(t, e) {
                    var n, o, r, a, h, c = this,
                        d = c.chart,
                        p = c.buttonOptions[t],
                        f = d.xAxis[0],
                        g = (M = d.scroller && d.scroller.getUnionExtremes() || f || {}).dataMin,
                        m = M.dataMax,
                        v = f && Math.round(Math.min(f.max, y(m, f.max))),
                        b = p.type,
                        M = p._range,
                        w = p.dataGrouping;
                    if (null !== g && null !== m) {
                        if (d.fixedRange = M, w && (this.forcedDataGrouping = !0, s.prototype.setDataGrouping.call(f || {
                                chart: this.chart
                            }, w, !1)), "month" === b || "year" === b) f ? (b = {
                            range: p,
                            max: v,
                            dataMin: g,
                            dataMax: m
                        }, n = f.minFromRange.call(b), x(b.newMax) && (v = b.newMax)) : M = p;
                        else if (M) n = Math.max(v - M, g), v = Math.min(n + M, m);
                        else if ("ytd" === b) {
                            if (!f) return void i(d, "beforeRender", function() {
                                c.clickButton(t)
                            });
                            void 0 === m && (g = Number.MAX_VALUE, m = Number.MIN_VALUE, u(d.series, function(t) {
                                t = t.xData, g = Math.min(t[0], g), m = Math.max(t[t.length - 1], m)
                            }), e = !1), n = r = (v = c.getYTDExtremes(m, g, l)).min, v = v.max
                        } else "all" === b && f && (n = g, v = m);
                        c.setSelected(t), f ? f.setExtremes(n, v, y(e, 1), null, {
                            trigger: "rangeSelectorButton",
                            rangeSelectorButton: p
                        }) : (o = k(d.options.xAxis)[0], h = o.range, o.range = M, a = o.min, o.min = r, i(d, "load", function() {
                            o.range = h, o.min = a
                        }))
                    }
                },
                setSelected: function(t) {
                    this.selected = this.options.selected = t
                },
                defaultButtons: [{
                    type: "month",
                    count: 1,
                    text: "1m"
                }, {
                    type: "month",
                    count: 3,
                    text: "3m"
                }, {
                    type: "month",
                    count: 6,
                    text: "6m"
                }, {
                    type: "ytd",
                    text: "YTD"
                }, {
                    type: "year",
                    count: 1,
                    text: "1y"
                }, {
                    type: "all",
                    text: "All"
                }],
                init: function(t) {
                    var e = this,
                        s = t.options.rangeSelector,
                        n = s.buttons || [].concat(e.defaultButtons),
                        o = s.selected,
                        r = function() {
                            var t = e.minInput,
                                i = e.maxInput;
                            t && t.blur && g(t, "blur"), i && i.blur && g(i, "blur")
                        };
                    e.chart = t, e.options = s, e.buttons = [], t.extraTopMargin = s.height, e.buttonOptions = n, this.unMouseDown = i(t.container, "mousedown", r), this.unResize = i(t, "resize", r), u(n, e.computeButtonRange), void 0 !== o && n[o] && this.clickButton(o, !1), i(t, "load", function() {
                        i(t.xAxis[0], "setExtremes", function(i) {
                            this.max - this.min !== t.fixedRange && "rangeSelectorButton" !== i.trigger && "updatedData" !== i.trigger && e.forcedDataGrouping && this.setDataGrouping(!1, !1)
                        })
                    })
                },
                updateButtonStates: function() {
                    var t, e = (t = this.chart).xAxis[0],
                        i = Math.round(e.max - e.min),
                        s = !e.hasVisibleSeries,
                        n = (t = t.scroller && t.scroller.getUnionExtremes() || e).dataMin,
                        o = t.dataMax,
                        r = (t = this.getYTDExtremes(o, n, l)).min,
                        a = t.max,
                        h = this.selected,
                        c = x(h),
                        d = this.options.allButtonsEnabled,
                        p = this.buttons;
                    u(this.buttonOptions, function(t, l) {
                        var u = t._range,
                            f = t.type,
                            g = t.count || 1;
                        t = p[l];
                        var m = 0;
                        l = l === h;
                        var x = u > o - n,
                            v = u < e.minRange,
                            y = !1,
                            b = !1;
                        u = u === i;
                        ("month" === f || "year" === f) && i >= 864e5 * {
                            month: 28,
                            year: 365
                        } [f] * g && i <= 864e5 * {
                            month: 31,
                            year: 366
                        } [f] * g ? u = !0 : "ytd" === f ? (u = a - r === i, y = !l) : "all" === f && (u = e.max - e.min >= o - n, b = !l && c && u), u = l && u || u && !c && !y, (f = !d && (x || v || b || s)) ? m = 3 : u && (c = !0, m = 2), t.state !== m && t.setState(m)
                    })
                },
                computeButtonRange: function(t) {
                    var e = t.type,
                        i = t.count || 1,
                        s = {
                            millisecond: 1,
                            second: 1e3,
                            minute: 6e4,
                            hour: 36e5,
                            day: 864e5,
                            week: 6048e5
                        };
                    s[e] ? t._range = s[e] * i : "month" !== e && "year" !== e || (t._range = 864e5 * {
                        month: 30,
                        year: 365
                    } [e] * i)
                },
                setInputValue: function(t, e) {
                    var i = this.chart.options.rangeSelector,
                        s = this[t + "Input"];
                    c(e) && (s.previousValue = s.HCTime, s.HCTime = e), s.value = a(i.inputEditDateFormat || "%Y-%m-%d", s.HCTime), this[t + "DateBox"].attr({
                        text: a(i.inputDateFormat || "%b %e, %Y", s.HCTime)
                    })
                },
                showInput: function(t) {
                    var e = this.inputGroup,
                        i = this[t + "DateBox"];
                    o(this[t + "Input"], {
                        left: e.translateX + i.x + "px",
                        top: e.translateY + "px",
                        width: i.width - 2 + "px",
                        height: i.height - 2 + "px",
                        border: "2px solid silver"
                    })
                },
                hideInput: function(t) {
                    o(this[t + "Input"], {
                        border: 0,
                        width: "1px",
                        height: "1px"
                    }), this.setInputValue(t)
                },
                drawInput: function(t) {
                    function e() {
                        var t = i.value,
                            e = (p.inputDateParser || Date.parse)(t),
                            s = a.xAxis[0],
                            o = (r = a.scroller && a.scroller.xAxis ? a.scroller.xAxis : s).dataMin,
                            r = r.dataMax;
                        e !== i.previousValue && (i.previousValue = e, x(e) || (e = t.split("-"), e = Date.UTC(b(e[0]), b(e[1]) - 1, b(e[2]))), x(e) && (l || (e += 6e4 * (new Date).getTimezoneOffset()), g ? e > n.maxInput.HCTime ? e = void 0 : e < o && (e = o) : e < n.minInput.HCTime ? e = void 0 : e > r && (e = r), void 0 !== e && s.setExtremes(g ? e : s.min, g ? s.max : e, void 0, void 0, {
                            trigger: "rangeSelectorInput"
                        })))
                    }
                    var i, s, n = this,
                        a = n.chart,
                        c = a.renderer.style || {},
                        d = a.renderer,
                        p = a.options.rangeSelector,
                        u = n.div,
                        g = "min" === t,
                        m = this.inputGroup;
                    this[t + "Label"] = s = d.label(h.lang[g ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).addClass("highcharts-range-label").attr({
                        padding: 2
                    }).add(m), m.offset += s.width + 5, this[t + "DateBox"] = d = d.label("", m.offset).addClass("highcharts-range-input").attr({
                        padding: 2,
                        width: p.inputBoxWidth || 90,
                        height: p.inputBoxHeight || 17,
                        stroke: p.inputBoxBorderColor || "#cccccc",
                        "stroke-width": 1,
                        "text-align": "center"
                    }).on("click", function() {
                        n.showInput(t), n[t + "Input"].focus()
                    }).add(m), m.offset += d.width + (g ? 10 : 0), this[t + "Input"] = i = r("input", {
                        name: t,
                        className: "highcharts-range-selector",
                        type: "text"
                    }, {
                        top: a.plotTop + "px"
                    }, u), s.css(v(c, p.labelStyle)), d.css(v({
                        color: "#333333"
                    }, c, p.inputStyle)), o(i, f({
                        position: "absolute",
                        border: 0,
                        width: "1px",
                        height: "1px",
                        padding: 0,
                        textAlign: "center",
                        fontSize: c.fontSize,
                        fontFamily: c.fontFamily,
                        left: "-9em"
                    }, p.inputStyle)), i.onfocus = function() {
                        n.showInput(t)
                    }, i.onblur = function() {
                        n.hideInput(t)
                    }, i.onchange = e, i.onkeypress = function(t) {
                        13 === t.keyCode && e()
                    }
                },
                getPosition: function() {
                    var t, e = (t = this.chart).options.rangeSelector;
                    return {
                        buttonTop: t = y((e.buttonPosition || {}).y, t.plotTop - t.axisOffset[0] - e.height),
                        inputTop: t - 10
                    }
                },
                getYTDExtremes: function(t, e, i) {
                    var s = new m(t),
                        n = s[m.hcGetFullYear]();
                    return i = i ? m.UTC(n, 0, 1) : +new m(n, 0, 1), e = Math.max(e || 0, i), s = s.getTime(), {
                        max: Math.min(t || s, s),
                        min: e
                    }
                },
                render: function(t, e) {
                    var i, s = this,
                        n = s.chart,
                        o = n.renderer,
                        a = n.container,
                        l = (g = n.options).exporting && !1 !== g.exporting.enabled && g.navigation && g.navigation.buttonOptions,
                        d = g.rangeSelector,
                        p = s.buttons,
                        g = h.lang,
                        m = s.div,
                        x = (m = s.inputGroup, d.buttonTheme),
                        v = d.buttonPosition || {},
                        b = d.inputEnabled,
                        k = x && x.states,
                        M = n.plotLeft,
                        w = this.getPosition(),
                        S = s.group,
                        A = s.rendered;
                    !1 !== d.enabled && (A || (s.group = S = o.g("range-selector-buttons").add(), s.zoomText = o.text(g.rangeSelectorZoom, y(v.x, M), 15).css(d.labelStyle).add(S), i = y(v.x, M) + s.zoomText.getBBox().width + 5, u(s.buttonOptions, function(t, e) {
                        p[e] = o.button(t.text, i, 0, function() {
                            s.clickButton(e), s.isActive = !0
                        }, x, k && k.hover, k && k.select, k && k.disabled).attr({
                            "text-align": "center"
                        }).add(S), i += p[e].width + y(d.buttonSpacing, 5)
                    }), !1 !== b && (s.div = m = r("div", null, {
                        position: "relative",
                        height: 0,
                        zIndex: 1
                    }), a.parentNode.insertBefore(m, a), s.inputGroup = m = o.g("input-group").add(), m.offset = 0, s.drawInput("min"), s.drawInput("max"))), s.updateButtonStates(), S[A ? "animate" : "attr"]({
                        translateY: w.buttonTop
                    }), !1 !== b && (m.align(f({
                        y: w.inputTop,
                        width: m.offset,
                        x: l && w.inputTop < (l.y || 0) + l.height - n.spacing[0] ? -40 : 0
                    }, d.inputPosition), !0, n.spacingBox), c(b) || (n = S.getBBox(), m[m.alignAttr.translateX < n.x + n.width + 10 ? "hide" : "show"]()), s.setInputValue("min", t), s.setInputValue("max", e)), s.rendered = !0)
                },
                update: function(t) {
                    var e = this.chart;
                    v(!0, e.options.rangeSelector, t), this.destroy(), this.init(e)
                },
                destroy: function() {
                    var i = this,
                        s = i.minInput,
                        n = i.maxInput;
                    i.unMouseDown(), i.unResize(), d(i.buttons), s && (s.onfocus = s.onblur = s.onchange = null), n && (n.onfocus = n.onblur = n.onchange = null), t.objectEach(i, function(t, s) {
                        t && "chart" !== s && (t.destroy ? t.destroy() : t.nodeType && p(this[s])), t !== e.prototype[s] && (i[s] = null)
                    }, this)
                }
            }, s.prototype.toFixedRange = function(t, e, i, s) {
                var n = this.chart && this.chart.fixedRange;
                return t = y(i, this.translate(t, !0, !this.horiz)), e = y(s, this.translate(e, !0, !this.horiz)), .7 < (i = n && (e - t) / n) && 1.3 > i && (s ? t = e - n : e = t + n), x(t) || (t = e = void 0), {
                    min: t,
                    max: e
                }
            }, s.prototype.minFromRange = function() {
                var t, e, i, s = this.range,
                    n = {
                        month: "Month",
                        year: "FullYear"
                    } [s.type],
                    o = this.max,
                    r = function(t, e) {
                        var i = new Date(t),
                            s = i["get" + n]();
                        return i["set" + n](s + e), s === i["get" + n]() && i.setDate(0), i.getTime() - t
                    };
                return x(s) ? (t = o - s, i = s) : (t = o + r(o, -s.count), this.chart && (this.chart.fixedRange = o - t)), e = y(this.dataMin, Number.MIN_VALUE), x(t) || (t = e), t <= e && (t = e, void 0 === i && (i = r(t, s.count)), this.newMax = Math.min(t + i, this.dataMax)), x(o) || (t = void 0), t
            }, M(n.prototype, "init", function(t, s, n) {
                i(this, "init", function() {
                    this.options.rangeSelector.enabled && (this.rangeSelector = new e(this))
                }), t.call(this, s, n)
            }), n.prototype.callbacks.push(function(t) {
                function e() {
                    s = t.xAxis[0].getExtremes(), x(s.min) && r.render(s.min, s.max)
                }
                var s, n, o, r = t.rangeSelector;
                r && (o = i(t.xAxis[0], "afterSetExtremes", function(t) {
                    r.render(t.min, t.max)
                }), n = i(t, "redraw", e), e()), i(t, "destroy", function() {
                    r && (n(), o())
                })
            }), t.RangeSelector = e
        }(t), sa = (ia = t).arrayMax, na = ia.arrayMin, oa = ia.Axis, ra = ia.Chart, aa = ia.defined, ha = ia.each, la = ia.extend, ca = ia.format, da = ia.grep, pa = ia.inArray, ua = ia.isNumber, fa = ia.isString, ga = ia.map, ma = ia.merge, xa = ia.pick, va = ia.Point, ya = ia.Renderer, ba = ia.Series, ka = ia.splat, Ma = ia.SVGRenderer, wa = ia.VMLRenderer, Sa = ia.wrap, Aa = ba.prototype, Ta = Aa.init, Pa = Aa.processData, Ca = va.prototype.tooltipFormatter, ia.StockChart = ia.stockChart = function(t, e, i) {
            var s, n = fa(t) || t.nodeName,
                o = arguments[n ? 1 : 0],
                r = o.series,
                a = ia.getOptions(),
                h = xa(o.navigator && o.navigator.enabled, a.navigator.enabled, !0),
                l = h ? {
                    startOnTick: !1,
                    endOnTick: !1
                } : null,
                c = {
                    marker: {
                        enabled: !1,
                        radius: 2
                    }
                },
                d = {
                    shadow: !1,
                    borderWidth: 0
                };
            return o.xAxis = ga(ka(o.xAxis || {}), function(t) {
                return ma({
                    minPadding: 0,
                    maxPadding: 0,
                    ordinal: !0,
                    title: {
                        text: null
                    },
                    labels: {
                        overflow: "justify"
                    },
                    showLastLabel: !0
                }, a.xAxis, t, {
                    type: "datetime",
                    categories: null
                }, l)
            }), o.yAxis = ga(ka(o.yAxis || {}), function(t) {
                return s = xa(t.opposite, !0), ma({
                    labels: {
                        y: -2
                    },
                    opposite: s,
                    showLastLabel: !1,
                    title: {
                        text: null
                    }
                }, a.yAxis, t)
            }), o.series = null, (o = ma({
                chart: {
                    panning: !0,
                    pinchType: "x"
                },
                navigator: {
                    enabled: h
                },
                scrollbar: {
                    enabled: xa(a.scrollbar.enabled, !0)
                },
                rangeSelector: {
                    enabled: xa(a.rangeSelector.enabled, !0)
                },
                title: {
                    text: null
                },
                tooltip: {
                    shared: !0,
                    crosshairs: !0
                },
                legend: {
                    enabled: !1
                },
                plotOptions: {
                    line: c,
                    spline: c,
                    area: c,
                    areaspline: c,
                    arearange: c,
                    areasplinerange: c,
                    column: d,
                    columnrange: d,
                    candlestick: d,
                    ohlc: d
                }
            }, o, {
                isStock: !0
            })).series = r, n ? new ra(t, o, i) : new ra(o, e)
        }, Sa(oa.prototype, "autoLabelAlign", function(t) {
            var e = this.chart,
                i = this.options,
                s = (e = e._labelPanes = e._labelPanes || {}, this.options.labels);
            return this.chart.options.isStock && "yAxis" === this.coll && !e[i = i.top + "," + i.height] && s.enabled ? (15 === s.x && (s.x = 0), void 0 === s.align && (s.align = "right"), e[i] = this, "right") : t.call(this, [].slice.call(arguments, 1))
        }), Sa(oa.prototype, "destroy", function(t) {
            var e = this.chart,
                i = this.options && this.options.top + "," + this.options.height;
            return i && e._labelPanes && e._labelPanes[i] === this && delete e._labelPanes[i], t.call(this, Array.prototype.slice.call(arguments, 1))
        }), Sa(oa.prototype, "getPlotLinePath", function(t, e, i, s, n, o) {
            var r, a, h, l, c, d, p, u, f = this,
                g = this.isLinked && !this.series ? this.linkedParent.series : this.series,
                m = f.chart,
                x = m.renderer,
                v = f.left,
                y = f.top,
                b = [],
                k = [];
            return "xAxis" !== f.coll && "yAxis" !== f.coll ? t.apply(this, [].slice.call(arguments, 1)) : (p = f.coll, u = "xAxis" === p ? "yAxis" : "xAxis", p = f.options[u], k = ua(p) ? [m[u][p]] : fa(p) ? [m.get(p)] : ga(g, function(t) {
                return t[u]
            }), ha(f.isXAxis ? m.yAxis : m.xAxis, function(t) {
                if (!aa(t.options.id) || -1 === t.options.id.indexOf("navigator")) {
                    var e = t.isXAxis ? "yAxis" : "xAxis";
                    e = aa(t.options[e]) ? m[e][t.options[e]] : m[e][0], f === e && k.push(t)
                }
            }), c = k.length ? [] : [f.isXAxis ? m.yAxis[0] : m.xAxis[0]], ha(k, function(t) {
                -1 !== pa(t, c) || ia.find(c, function(e) {
                    return e.pos === t.pos && e.len && t.len
                }) || c.push(t)
            }), d = xa(o, f.translate(e, null, null, s)), ua(d) && (f.horiz ? ha(c, function(t) {
                var e;
                a = t.pos, l = a + t.len, ((r = h = Math.round(d + f.transB)) < v || r > v + f.width) && (n ? r = h = Math.min(Math.max(v, r), v + f.width) : e = !0), e || b.push("M", r, a, "L", h, l)
            }) : ha(c, function(t) {
                var e;
                r = t.pos, h = r + t.len, ((a = l = Math.round(y + f.height - d)) < y || a > y + f.height) && (n ? a = l = Math.min(Math.max(y, a), f.top + f.height) : e = !0), e || b.push("M", r, a, "L", h, l)
            })), 0 < b.length ? x.crispPolyLine(b, i || 1) : null)
        }), oa.prototype.getPlotBandPath = function(t, e) {
            e = this.getPlotLinePath(e, null, null, !0);
            var i, s = [];
            if ((t = this.getPlotLinePath(t, null, null, !0)) && e)
                if (t.toString() === e.toString())(s = t).flat = !0;
                else
                    for (i = 0; i < t.length; i += 6) s.push("M", t[i + 1], t[i + 2], "L", t[i + 4], t[i + 5], e[i + 4], e[i + 5], e[i + 1], e[i + 2], "z");
            else s = null;
            return s
        }, Ma.prototype.crispPolyLine = function(t, e) {
            var i;
            for (i = 0; i < t.length; i += 6) t[i + 1] === t[i + 4] && (t[i + 1] = t[i + 4] = Math.round(t[i + 1]) - e % 2 / 2), t[i + 2] === t[i + 5] && (t[i + 2] = t[i + 5] = Math.round(t[i + 2]) + e % 2 / 2);
            return t
        }, ya === wa && (wa.prototype.crispPolyLine = Ma.prototype.crispPolyLine), Sa(oa.prototype, "hideCrosshair", function(t, e) {
            t.call(this, e), this.crossLabel && (this.crossLabel = this.crossLabel.hide())
        }), Sa(oa.prototype, "drawCrosshair", function(t, e, i) {
            var s, n;
            if (t.call(this, e, i), aa(this.crosshair.label) && this.crosshair.label.enabled && this.cross) {
                t = this.chart;
                var o = this.options.crosshair.label,
                    r = this.horiz;
                s = this.opposite, n = this.left;
                var a, h = this.top,
                    l = this.crossLabel,
                    c = o.format,
                    d = "",
                    p = "inside" === this.options.tickPosition,
                    u = !1 !== this.crosshair.snap,
                    f = 0;
                e || (e = this.cross && this.cross.e), a = r ? "center" : s ? "right" === this.labelAlign ? "right" : "left" : "left" === this.labelAlign ? "left" : "center", l || (l = this.crossLabel = t.renderer.label(null, null, null, o.shape || "callout").addClass("highcharts-crosshair-label" + (this.series[0] && " highcharts-color-" + this.series[0].colorIndex)).attr({
                    align: o.align || a,
                    padding: xa(o.padding, 8),
                    r: xa(o.borderRadius, 3),
                    zIndex: 2
                }).add(this.labelGroup)).attr({
                    fill: o.backgroundColor || this.series[0] && this.series[0].color || "#666666",
                    stroke: o.borderColor || "",
                    "stroke-width": o.borderWidth || 0
                }).css(la({
                    color: "#ffffff",
                    fontWeight: "normal",
                    fontSize: "11px",
                    textAlign: "center"
                }, o.style)), r ? (a = u ? i.plotX + n : e.chartX, h += s ? 0 : this.height) : (a = s ? this.width + n : 0, h = u ? i.plotY + h : e.chartY), c || o.formatter || (this.isDatetimeAxis && (d = "%b %d, %Y"), c = "{value" + (d ? ":" + d : "") + "}"), e = u ? i[this.isXAxis ? "x" : "y"] : this.toValue(r ? e.chartX : e.chartY), l.attr({
                    text: c ? ca(c, {
                        value: e
                    }) : o.formatter.call(this, e),
                    x: a,
                    y: h,
                    visibility: "visible"
                }), e = l.getBBox(), r ? (p && !s || !p && s) && (h = l.y - e.height) : h = l.y - e.height / 2, r ? (s = n - e.x, n = n + this.width - e.x) : (s = "left" === this.labelAlign ? n : 0, n = "right" === this.labelAlign ? n + this.width : t.chartWidth), l.translateX < s && (f = s - l.translateX), l.translateX + e.width >= n && (f = -(l.translateX + e.width - n)), l.attr({
                    x: a + f,
                    y: h,
                    anchorX: r ? a : this.opposite ? 0 : t.chartWidth,
                    anchorY: r ? this.opposite ? t.chartHeight : 0 : h + e.height / 2
                })
            }
        }), Aa.init = function() {
            Ta.apply(this, arguments), this.setCompare(this.options.compare)
        }, Aa.setCompare = function(t) {
            this.modifyValue = "value" === t || "percent" === t ? function(e, i) {
                var s = this.compareValue;
                if (void 0 !== e && void 0 !== s) return e = "value" === t ? e - s : e / s * 100 - (100 === this.options.compareBase ? 0 : 100), i && (i.change = e), e
            } : null, this.userOptions.compare = t, this.chart.hasRendered && (this.isDirty = !0)
        }, Aa.processData = function() {
            var t, e, i, s, n, o = -1;
            if (Pa.apply(this, arguments), this.xAxis && this.processedYData)
                for (e = this.processedXData, s = (i = this.processedYData).length, this.pointArrayMap && -1 === (o = pa("close", this.pointArrayMap)) && (o = pa(this.pointValKey || "y", this.pointArrayMap)), t = 0; t < s - 1; t++)
                    if (n = i[t] && -1 < o ? i[t][o] : i[t], ua(n) && e[t + 1] >= this.xAxis.min && 0 !== n) {
                        this.compareValue = n;
                        break
                    }
        }, Sa(Aa, "getExtremes", function(t) {
            var e;
            t.apply(this, [].slice.call(arguments, 1)), this.modifyValue && (e = [this.modifyValue(this.dataMin), this.modifyValue(this.dataMax)], this.dataMin = na(e), this.dataMax = sa(e))
        }), oa.prototype.setCompare = function(t, e) {
            this.isXAxis || (ha(this.series, function(e) {
                e.setCompare(t)
            }), xa(e, !0) && this.chart.redraw())
        }, va.prototype.tooltipFormatter = function(t) {
            return t = t.replace("{point.change}", (0 < this.change ? "+" : "") + ia.numberFormat(this.change, xa(this.series.tooltipOptions.changeDecimals, 2))), Ca.apply(this, [t])
        }, Sa(ba.prototype, "render", function(t) {
            this.chart.is3d && this.chart.is3d() || this.chart.polar || !this.xAxis || this.xAxis.isRadial || (!this.clipBox && this.animate ? (this.clipBox = ma(this.chart.clipBox), this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len) : this.chart[this.sharedClipKey] ? this.chart[this.sharedClipKey].attr({
                width: this.xAxis.len,
                height: this.yAxis.len
            }) : this.clipBox && (this.clipBox.width = this.xAxis.len, this.clipBox.height = this.yAxis.len)), t.call(this)
        }), Sa(ra.prototype, "getSelectedPoints", function(t) {
            var e = t.call(this);
            return ha(this.series, function(t) {
                t.hasGroupedData && (e = e.concat(da(t.points || [], function(t) {
                    return t.selected
                })))
            }), e
        }), Sa(ra.prototype, "update", function(t, e) {
            return "scrollbar" in e && this.navigator && (ma(!0, this.options.scrollbar, e.scrollbar), this.navigator.update({}, !1), delete e.scrollbar), t.apply(this, Array.prototype.slice.call(arguments, 1))
        }), t
}); </script>