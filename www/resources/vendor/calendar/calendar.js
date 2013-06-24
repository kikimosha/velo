function padBefore(n, t, i) {
    for (var r = "" + n; r.length < t;)r = (i || "0") + r;
    return r
}
function getMonthName() {
    var t = new Date, n = [];
    return n[0] = "Январь", n[1] = "Февраль", n[2] = "Март", n[3] = "Апрель", n[4] = "Май", n[5] = "Июнь", n[6] = "Июль", n[7] = "Август", n[8] = "Сентябрь", n[9] = "Октябрь", n[10] = "Ноябрь", n[11] = "Декабрь", n[t.getMonth()]
}
function callnext() {
    $("#calendar").fullCalendar("next")
}
function callprev() {
    $("#calendar").fullCalendar("prev")
}
function loadSuggestionBox() {
    var n = $(".actions-suggestion-read").val();
    n = n.replace("/blog/", "/"), $.ajax({type:"GET", url:n, success:function (n) {
        var t = $(".suggestionbox-content");
        t.html(n), t.modal(), $("#simplemodal-container").css("height", "490px")
    }, error:function (n, t, i) {
        alert(i)
    }})
}
//function Footer() {
//    var n = $(".actions-footer-read").val();
//    n = n.replace("/blog/", "/"), $.ajax({type:"GET", url:n, success:function (n) {
//        var t = $(".footer-content");
//        t.html(n)
//    }, error:function () {
//    }})
//}
//function loadSubscriptionForm() {
//    var n = $(".actions-subscription-read").val();
//    n = n.replace("/blog/", "/"), $.ajax({type:"GET", url:n, success:function (n) {
//        var t = $(".subscriptionbox-content");
//        t.html(n), t.modal(), $("#simplemodal-container").addClass("newswrap"), $("#simplemodal-container").height("auto").width(350)
//    }, error:function () {
//    }})
//}
var Utility, view, calendar;
(function (n, t) {
    function et(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }

    function bt(n) {
        if (!ut[n]) {
            var e = r.body, t = i("<" + n + ">").appendTo(e), u = t.css("display");
            t.remove(), (u === "none" || u === "") && (f || (f = r.createElement("iframe"), f.frameBorder = f.width = f.height = 0), e.appendChild(f), h && f.createElement || (h = (f.contentWindow || f.contentDocument).document, h.write((r.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), h.close()), t = h.createElement(n), h.body.appendChild(t), u = i.css(t, "display"), e.removeChild(f)), ut[n] = u
        }
        return ut[n]
    }

    function v(n, t) {
        var r = {};
        return i.each(tr.concat.apply([], tr.slice(0, t)), function () {
            r[this] = n
        }), r
    }

    function nf() {
        p = t
    }

    function bi() {
        return setTimeout(nf, 0), p = i.now()
    }

    function tf() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function ur() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {
        }
    }

    function du(n, r) {
        n.dataFilter && (r = n.dataFilter(r, n.dataType));
        for (var v = n.dataTypes, s = {}, l, p = v.length, a, f = v[0], h, y, u, o, e, c = 1; c < p; c++) {
            if (c === 1)for (l in n.converters)typeof l == "string" && (s[l.toLowerCase()] = n.converters[l]);
            if (h = f, f = v[c], f === "*")f = h; else if (h !== "*" && h !== f) {
                if (y = h + " " + f, u = s[y] || s["* " + f], !u) {
                    e = t;
                    for (o in s)if (a = o.split(" "), (a[0] === h || a[0] === "*") && (e = s[a[1] + " " + f], e)) {
                        o = s[o], o === !0 ? u = e : e === !0 && (u = o);
                        break
                    }
                }
                !u && !e && i.error("No conversion from " + y.replace(" ", " to ")), u !== !0 && (r = u ? u(r) : e(o(r)))
            }
        }
        return r
    }

    function gu(n, i, r) {
        var h = n.contents, f = n.dataTypes, c = n.responseFields, o, u, e, s;
        for (u in c)u in r && (i[c[u]] = r[u]);
        while (f[0] === "*")f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)for (u in h)if (h[u] && h[u].test(o)) {
            f.unshift(u);
            break
        }
        if (f[0]in r)e = f[0]; else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                s || (s = u)
            }
            e = e || s
        }
        if (e)return e !== f[0] && f.unshift(e), r[e]
    }

    function rt(n, t, r, u) {
        if (i.isArray(t))i.each(t, function (t, f) {
            r || dr.test(n) ? u(n, f) : rt(n + "[" + (typeof f == "object" || i.isArray(f) ? t : "") + "]", f, r, u)
        }); else if (r || t == null || typeof t != "object")u(n, t); else for (var f in t)rt(n + "[" + f + "]", t[f], r, u)
    }

    function yi(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r)r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }

    function tt(n, i, r, u, f, e) {
        f = f || i.dataTypes[0], e = e || {}, e[f] = !0;
        for (var h = n[f], c = 0, l = h ? h.length : 0, s = n === st, o; c < l && (s || !o); c++)o = h[c](i, r, u), typeof o == "string" && (!s || e[o] ? o = t : (i.dataTypes.unshift(o), o = tt(n, i, r, u, o, e)));
        return(s || !o) && !e["*"] && (o = tt(n, i, r, u, "*", e)), o
    }

    function er(n) {
        return function (t, r) {
            if (typeof t != "string" && (r = t, t = "*"), i.isFunction(r))for (var s = t.toLowerCase().split(lt), e = 0, h = s.length, u, o, f; e < h; e++)u = s[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), o = n[u] = n[u] || [], o[f ? "unshift" : "push"](r)
        }
    }

    function vr(n, t, r) {
        var u = t === "width" ? n.offsetWidth : n.offsetHeight, e = t === "width" ? pf : su, f = 0, o = e.length;
        if (u > 0) {
            if (r !== "border")for (; f < o; f++)r || (u -= parseFloat(i.css(n, "padding" + e[f])) || 0), r === "margin" ? u += parseFloat(i.css(n, r + e[f])) || 0 : u -= parseFloat(i.css(n, "border" + e[f] + "Width")) || 0;
            return u + "px"
        }
        if (u = l(n, t, t), (u < 0 || u == null) && (u = n.style[t] || 0), u = parseFloat(u) || 0, r)for (; f < o; f++)u += parseFloat(i.css(n, "padding" + e[f])) || 0, r !== "padding" && (u += parseFloat(i.css(n, "border" + e[f] + "Width")) || 0), r === "margin" && (u += parseFloat(i.css(n, r + e[f])) || 0);
        return u + "px"
    }

    function rf(n, t) {
        t.src ? i.ajax({url:t.src, async:!1, dataType:"script"}) : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(hf, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }

    function ef(n) {
        var t = r.createElement("div");
        return li.appendChild(t), t.innerHTML = n.outerHTML, t.firstChild
    }

    function nr(n) {
        var t = (n.nodeName || "").toLowerCase();
        t === "input" ? hr(n) : t !== "script" && typeof n.getElementsByTagName != "undefined" && i.grep(n.getElementsByTagName("input"), hr)
    }

    function hr(n) {
        (n.type === "checkbox" || n.type === "radio") && (n.defaultChecked = n.checked)
    }

    function g(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }

    function fi(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? t.outerHTML = n.outerHTML : r !== "input" || n.type !== "checkbox" && n.type !== "radio" ? r === "option" ? t.selected = n.defaultSelected : (r === "input" || r === "textarea") && (t.defaultValue = n.defaultValue) : (n.checked && (t.defaultChecked = t.checked = n.checked), t.value !== n.value && (t.value = n.value)), t.removeAttribute(i.expando))
    }

    function ui(n, t) {
        if (t.nodeType === 1 && !!i.hasData(n)) {
            var f, u, o, s = i._data(n), e = i._data(t, s), r = s.events;
            if (r) {
                delete e.handle, e.events = {};
                for (f in r)for (u = 0, o = r[f].length; u < o; u++)i.event.add(t, f + (r[f][u].namespace ? "." : "") + r[f][u].namespace, r[f][u], r[f][u].data)
            }
            e.data && (e.data = i.extend({}, e.data))
        }
    }

    function of(n) {
        return i.nodeName(n, "table") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
    }

    function ci(n) {
        var i = pt.split("|"), t = n.createDocumentFragment();
        if (t.createElement)while (i.length)t.createElement(i.pop());
        return t
    }

    function ni(n, t, r) {
        if (t = t || 0, i.isFunction(t))return i.grep(n, function (n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType)return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (gf.test(t))return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }

    function dt(n) {
        return!n || !n.parentNode || n.parentNode.nodeType === 11
    }

    function w() {
        return!0
    }

    function c() {
        return!1
    }

    function fr(n, t, r) {
        var e = t + "defer", o = t + "queue", u = t + "mark", f = i._data(n, e);
        f && (r === "queue" || !i._data(n, o)) && (r === "mark" || !i._data(n, u)) && setTimeout(function () {
            !i._data(n, o) && !i._data(n, u) && (i.removeData(n, e, !0), f.fire())
        }, 0)
    }

    function ct(n) {
        for (var t in n)if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON")return!1;
        return!0
    }

    function ir(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(wi, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : i.isNumeric(u) ? parseFloat(u) : gi.test(u) ? i.parseJSON(u) : u
                } catch (e) {
                }
                i.data(n, r, u)
            } else u = t
        }
        return u
    }

    function uf(n) {
        var r = rr[n] = {}, t, i;
        for (n = n.split(/\s+/), t = 0, i = n.length; t < i; t++)r[n[t]] = !0;
        return r
    }

    var r = n.document, ff = n.navigator, ku = n.location, i = function () {
        function b() {
            if (!i.isReady) {
                try {
                    r.documentElement.doScroll("left")
                } catch (n) {
                    setTimeout(b, 1);
                    return
                }
                i.ready()
            }
        }

        var i = function (n, t) {
            return new i.fn.init(n, t, y)
        }, g = n.jQuery, it = n.$, y, tt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, p = /\S/, v = /^\s+/, w = /\s+$/, st = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, et = /^[\],:{}\s]*$/, ot = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, ft = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rt = /(?:^|:|,)(?:\s*\[)+/g, ut = /(webkit)[ \/]([\w.]+)/, nt = /(opera)(?:.*version)?[ \/]([\w.]+)/, at = /(msie) ([\w.]+)/, vt = /(mozilla)(?:.*? rv:([\w.]+))?/, lt = /-([a-z]|[0-9])/ig, ht = /^-ms-/, ct = function (n, t) {
            return(t + "").toUpperCase()
        }, k = ff.userAgent, e, o, u, d = Object.prototype.toString, h = Object.prototype.hasOwnProperty, s = Array.prototype.push, f = Array.prototype.slice, l = String.prototype.trim, a = Array.prototype.indexOf, c = {};
        return i.fn = i.prototype = {constructor:i, init:function (n, u, f) {
            var o, s, e, h;
            if (!n)return this;
            if (n.nodeType)return this.context = this[0] = n, this.length = 1, this;
            if (n === "body" && !u && r.body)return this.context = r, this[0] = r.body, this.selector = n, this.length = 1, this;
            if (typeof n == "string") {
                if (o = n.charAt(0) !== "<" || n.charAt(n.length - 1) !== ">" || n.length < 3 ? tt.exec(n) : [null, n, null], o && (o[1] || !u)) {
                    if (o[1])return u = u instanceof i ? u[0] : u, h = u ? u.ownerDocument || u : r, e = st.exec(n), e ? i.isPlainObject(u) ? (n = [r.createElement(e[1])], i.fn.attr.call(n, u, !0)) : n = [h.createElement(e[1])] : (e = i.buildFragment([o[1]], [h]), n = (e.cacheable ? i.clone(e.fragment) : e.fragment).childNodes), i.merge(this, n);
                    if (s = r.getElementById(o[2]), s && s.parentNode) {
                        if (s.id !== o[2])return f.find(n);
                        this.length = 1, this[0] = s
                    }
                    return this.context = r, this.selector = n, this
                }
                return!u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
            }
            return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        }, selector:"", jquery:"1.7.1", length:0, size:function () {
            return this.length
        }, toArray:function () {
            return f.call(this, 0)
        }, get:function (n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        }, pushStack:function (n, t, r) {
            var u = this.constructor();
            return i.isArray(n) ? s.apply(u, n) : i.merge(u, n), u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
        }, each:function (n, t) {
            return i.each(this, n, t)
        }, ready:function (n) {
            return i.bindReady(), o.add(n), this
        }, eq:function (n) {
            return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
        }, first:function () {
            return this.eq(0)
        }, last:function () {
            return this.eq(-1)
        }, slice:function () {
            return this.pushStack(f.apply(this, arguments), "slice", f.call(arguments).join(","))
        }, map:function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        }, end:function () {
            return this.prevObject || this.constructor(null)
        }, push:s, sort:[].sort, splice:[].splice}, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function () {
            var s, e, u, r, h, c, n = arguments[0] || {}, f = 1, l = arguments.length, o = !1;
            for (typeof n == "boolean" && (o = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++)if ((s = arguments[f]) != null)for (e in s)(u = n[e], r = s[e], n !== r) && (o && r && (i.isPlainObject(r) || (h = i.isArray(r))) ? (h ? (h = !1, c = u && i.isArray(u) ? u : []) : c = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(o, c, r)) : r !== t && (n[e] = r));
            return n
        }, i.extend({noConflict:function (t) {
            return n.$ === i && (n.$ = it), t && n.jQuery === i && (n.jQuery = g), i
        }, isReady:!1, readyWait:1, holdReady:function (n) {
            n ? i.readyWait++ : i.ready(!0)
        }, ready:function (n) {
            if (n === !0 && !--i.readyWait || n !== !0 && !i.isReady) {
                if (!r.body)return setTimeout(i.ready, 1);
                if (i.isReady = !0, n !== !0 && --i.readyWait > 0)return;
                o.fireWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready")
            }
        }, bindReady:function () {
            if (!o) {
                if (o = i.Callbacks("once memory"), r.readyState === "complete")return setTimeout(i.ready, 1);
                if (r.addEventListener)r.addEventListener("DOMContentLoaded", u, !1), n.addEventListener("load", i.ready, !1); else if (r.attachEvent) {
                    r.attachEvent("onreadystatechange", u), n.attachEvent("onload", i.ready);
                    var t = !1;
                    try {
                        t = n.frameElement == null
                    } catch (f) {
                    }
                    r.documentElement.doScroll && t && b()
                }
            }
        }, isFunction:function (n) {
            return i.type(n) === "function"
        }, isArray:Array.isArray || function (n) {
            return i.type(n) === "array"
        }, isWindow:function (n) {
            return n && typeof n == "object" && "setInterval"in n
        }, isNumeric:function (n) {
            return!isNaN(parseFloat(n)) && isFinite(n)
        }, type:function (n) {
            return n == null ? String(n) : c[d.call(n)] || "object"
        }, isPlainObject:function (n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n))return!1;
            try {
                if (n.constructor && !h.call(n, "constructor") && !h.call(n.constructor.prototype, "isPrototypeOf"))return!1
            } catch (u) {
                return!1
            }
            var r;
            for (r in n);
            return r === t || h.call(n, r)
        }, isEmptyObject:function (n) {
            for (var t in n)return!1;
            return!0
        }, error:function (n) {
            throw new Error(n);
        }, parseJSON:function (t) {
            if (typeof t != "string" || !t)return null;
            if (t = i.trim(t), n.JSON && n.JSON.parse)return n.JSON.parse(t);
            if (et.test(t.replace(ot, "@").replace(ft, "]").replace(rt, "")))return new Function("return " + t)();
            i.error("Invalid JSON: " + t)
        }, parseXML:function (r) {
            var u, f;
            try {
                n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
            } catch (e) {
                u = t
            }
            return(!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r), u
        }, noop:function () {
        }, globalEval:function (t) {
            t && p.test(t) && (n.execScript || function (t) {
                n.eval.call(n, t)
            })(t)
        }, camelCase:function (n) {
            return n.replace(ht, "ms-").replace(lt, ct)
        }, nodeName:function (n, t) {
            return n.nodeName && n.nodeName.toUpperCase() === t.toUpperCase()
        }, each:function (n, r, u) {
            var e, f = 0, o = n.length, s = o === t || i.isFunction(n);
            if (u) {
                if (s) {
                    for (e in n)if (r.apply(n[e], u) === !1)break
                } else for (; f < o;)if (r.apply(n[f++], u) === !1)break
            } else if (s) {
                for (e in n)if (r.call(n[e], e, n[e]) === !1)break
            } else for (; f < o;)if (r.call(n[f], f, n[f++]) === !1)break;
            return n
        }, trim:l ? function (n) {
            return n == null ? "" : l.call(n)
        } : function (n) {
            return n == null ? "" : (n + "").replace(v, "").replace(w, "")
        }, makeArray:function (n, t) {
            var u = t || [], r;
            return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? s.call(u, n) : i.merge(u, n)), u
        }, inArray:function (n, t, i) {
            var r;
            if (t) {
                if (a)return a.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)if (i in t && t[i] === n)return i
            }
            return-1
        }, merge:function (n, i) {
            var u = n.length, r = 0, f;
            if (typeof i.length == "number")for (f = i.length; r < f; r++)n[u++] = i[r]; else while (i[r] !== t)n[u++] = i[r++];
            return n.length = u, n
        }, grep:function (n, t, i) {
            var f = [], e, r, u;
            for (i = !!i, r = 0, u = n.length; r < u; r++)e = !!t(n[r], r), i !== e && f.push(n[r]);
            return f
        }, map:function (n, r, u) {
            var o, h, f = [], s = 0, e = n.length, c = n instanceof i || e !== t && typeof e == "number" && (e > 0 && n[0] && n[e - 1] || e === 0 || i.isArray(n));
            if (c)for (; s < e; s++)o = r(n[s], s, u), o != null && (f[f.length] = o); else for (h in n)o = r(n[h], h, u), o != null && (f[f.length] = o);
            return f.concat.apply([], f)
        }, guid:1, proxy:function (n, r) {
            var e, o, u;
            return(typeof r == "string" && (e = n[r], r = n, n = e), !i.isFunction(n)) ? t : (o = f.call(arguments, 2), u = function () {
                return n.apply(r, o.concat(f.call(arguments)))
            }, u.guid = n.guid = n.guid || u.guid || i.guid++, u)
        }, access:function (n, r, u, f, e, o) {
            var c = n.length, h, s;
            if (typeof r == "object") {
                for (h in r)i.access(n, h, r[h], f, e, u);
                return n
            }
            if (u !== t) {
                for (f = !o && f && i.isFunction(u), s = 0; s < c; s++)e(n[s], r, f ? u.call(n[s], s, e(n[s], r)) : u, o);
                return n
            }
            return c ? e(n[0], r) : t
        }, now:function () {
            return+new Date
        }, uaMatch:function (n) {
            n = n.toLowerCase();
            var t = ut.exec(n) || nt.exec(n) || at.exec(n) || n.indexOf("compatible") < 0 && vt.exec(n) || [];
            return{browser:t[1] || "", version:t[2] || "0"}
        }, sub:function () {
            function n(t, i) {
                return new n.fn.init(t, i)
            }

            i.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), n.fn.constructor = n, n.sub = this.sub, n.fn.init = function (r, u) {
                return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
            }, n.fn.init.prototype = n.fn;
            var t = n(r);
            return n
        }, browser:{}}), i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
            c["[object " + t + "]"] = t.toLowerCase()
        }), e = i.uaMatch(k), e.browser && (i.browser[e.browser] = !0, i.browser.version = e.version), i.browser.webkit && (i.browser.safari = !0), p.test(" ") && (v = /^[\s\xA0]+/, w = /[\s\xA0]+$/), y = i(r), r.addEventListener ? u = function () {
            r.removeEventListener("DOMContentLoaded", u, !1), i.ready()
        } : r.attachEvent && (u = function () {
            r.readyState === "complete" && (r.detachEvent("onreadystatechange", u), i.ready())
        }), i
    }(), rr = {}, b, gi, wi, yr, y, k, ki, a, di, it;
    i.Callbacks = function (n) {
        n = n ? rr[n] || uf(n) : {};
        var r = [], f = [], u, s, c, h, e, l = function (t) {
            for (var u, e, h, f = 0, s = t.length; f < s; f++)u = t[f], e = i.type(u), e === "array" ? l(u) : e === "function" && (!n.unique || !o.has(u)) && r.push(u)
        }, a = function (t, i) {
            for (i = i || [], u = !n.memory || [t, i], s = !0, e = c || 0, c = 0, h = r.length; r && e < h; e++)if (r[e].apply(t, i) === !1 && n.stopOnFalse) {
                u = !0;
                break
            }
            s = !1, r && (n.once ? u === !0 ? o.disable() : r = [] : f && f.length && (u = f.shift(), o.fireWith(u[0], u[1])))
        }, o = {add:function () {
            if (r) {
                var n = r.length;
                l(arguments), s ? h = r.length : u && u !== !0 && (c = n, a(u[0], u[1]))
            }
            return this
        }, remove:function () {
            var t;
            if (r)for (var u = arguments, i = 0, f = u.length; i < f; i++)for (t = 0; t < r.length; t++)if (u[i] === r[t] && (s && t <= h && (h--, t <= e && e--), r.splice(t--, 1), n.unique))break;
            return this
        }, has:function (n) {
            if (r)for (var t = 0, i = r.length; t < i; t++)if (n === r[t])return!0;
            return!1
        }, empty:function () {
            return r = [], this
        }, disable:function () {
            return r = f = u = t, this
        }, disabled:function () {
            return!r
        }, lock:function () {
            return f = t, (!u || u === !0) && o.disable(), this
        }, locked:function () {
            return!f
        }, fireWith:function (t, i) {
            return f && (s ? n.once || f.push([t, i]) : (!n.once || !u) && a(t, i)), this
        }, fire:function () {
            return o.fireWith(this, arguments), this
        }, fired:function () {
            return!!u
        }};
        return o
    }, b = [].slice, i.extend({Deferred:function (n) {
        var u = i.Callbacks("once memory"), o = i.Callbacks("once memory"), e = i.Callbacks("memory"), s = "pending", h = {resolve:u, reject:o, notify:e}, f = {done:u.add, fail:o.add, progress:e.add, state:function () {
            return s
        }, isResolved:u.fired, isRejected:o.fired, then:function (n, i, r) {
            return t.done(n).fail(i).progress(r), this
        }, always:function () {
            return t.done.apply(t, arguments).fail.apply(t, arguments), this
        }, pipe:function (n, r, u) {
            return i.Deferred(
                function (f) {
                    i.each({done:[n, "resolve"], fail:[r, "reject"], progress:[u, "notify"]}, function (n, r) {
                        var e = r[0], o = r[1], u;
                        i.isFunction(e) ? t[n](function () {
                            u = e.apply(this, arguments), u && i.isFunction(u.promise) ? u.promise().then(f.resolve, f.reject, f.notify) : f[o + "With"](this === t ? f : this, [u])
                        }) : t[n](f[o])
                    })
                }).promise()
        }, promise:function (n) {
            if (n == null)n = f; else for (var t in f)n[t] = f[t];
            return n
        }}, t = f.promise({}), r;
        for (r in h)t[r] = h[r].fire, t[r + "With"] = h[r].fireWith;
        return t.done(
            function () {
                s = "resolved"
            }, o.disable, e.lock).fail(function () {
            s = "rejected"
        }, u.disable, e.lock), n && n.call(t, t), t
    }, when:function (n) {
        function h(n) {
            return function (i) {
                s[n] = arguments.length > 1 ? b.call(arguments, 0) : i, t.notifyWith(o, s)
            }
        }

        function c(n) {
            return function (i) {
                r[n] = arguments.length > 1 ? b.call(arguments, 0) : i, --e || t.resolveWith(t, r)
            }
        }

        var r = b.call(arguments, 0), u = 0, f = r.length, s = Array(f), e = f, l = f, t = f <= 1 && n && i.isFunction(n.promise) ? n : i.Deferred(), o = t.promise();
        if (f > 1) {
            for (; u < f; u++)r[u] && r[u].promise && i.isFunction(r[u].promise) ? r[u].promise().then(c(u), t.reject, h(u)) : --e;
            e || t.resolveWith(t, r)
        } else t !== n && t.resolveWith(t, f ? [n] : []);
        return o
    }}), i.support = function () {
        var u, y, o, v, a, f, h, e, c, k, l, p, s, t = r.createElement("div"), b = r.documentElement;
        if (t.setAttribute("className", "t"), t.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", y = t.getElementsByTagName("*"), o = t.getElementsByTagName("a")[0], !y || !y.length || !o)return{};
        v = r.createElement("select"), a = v.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], u = {leadingWhitespace:t.firstChild.nodeType === 3, tbody:!t.getElementsByTagName("tbody").length, htmlSerialize:!!t.getElementsByTagName("link").length, style:/top/.test(o.getAttribute("style")), hrefNormalized:o.getAttribute("href") === "/a", opacity:/^0.55/.test(o.style.opacity), cssFloat:!!o.style.cssFloat, checkOn:f.value === "on", optSelected:a.selected, getSetAttribute:t.className !== "t", enctype:!!r.createElement("form").enctype, html5Clone:r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", submitBubbles:!0, changeBubbles:!0, focusinBubbles:!1, deleteExpando:!0, noCloneEvent:!0, inlineBlockNeedsLayout:!1, shrinkWrapBlocks:!1, reliableMarginRight:!0}, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, v.disabled = !0, u.optDisabled = !a.disabled;
        try {
            delete t.test
        } catch (w) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", function () {
            u.noCloneEvent = !1
        }), t.cloneNode(!0).fireEvent("onclick")), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), t.appendChild(f), e = r.createDocumentFragment(), e.appendChild(t.lastChild), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, e.removeChild(f), e.appendChild(t), t.innerHTML = "", n.getComputedStyle && (h = r.createElement("div"), h.style.width = "0", h.style.marginRight = "0", t.style.width = "2px", t.appendChild(h), u.reliableMarginRight = (parseInt((n.getComputedStyle(h, null) || {marginRight:0}).marginRight, 10) || 0) === 0), t.attachEvent)for (p in{submit:1, change:1, focusin:1})l = "on" + p, s = l in t, s || (t.setAttribute(l, "return;"), s = typeof t[l] == "function"), u[p + "Bubbles"] = s;
        return e.removeChild(t), e = v = a = h = t = f = null, i(function () {
            var f, h, n, b, w, e, y, v, l, a, p, o = r.getElementsByTagName("body")[0];
            !o || (y = 1, v = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", a = "style='" + v + "border:5px solid #000;padding:0;'", p = "<div " + a + "><div></div></div><table " + a + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", f = r.createElement("div"), f.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + y + "px", o.insertBefore(f, o.firstChild), t = r.createElement("div"), f.appendChild(t), t.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", c = t.getElementsByTagName("td"), s = c[0].offsetHeight === 0, c[0].style.display = "", c[1].style.display = "none", u.reliableHiddenOffsets = s && c[0].offsetHeight === 0, t.innerHTML = "", t.style.width = t.style.paddingLeft = "1px", i.boxModel = u.boxModel = t.offsetWidth === 2, typeof t.style.zoom != "undefined" && (t.style.display = "inline", t.style.zoom = 1, u.inlineBlockNeedsLayout = t.offsetWidth === 2, t.style.display = "", t.innerHTML = "<div style='width:4px;'></div>", u.shrinkWrapBlocks = t.offsetWidth !== 2), t.style.cssText = v + l, t.innerHTML = p, h = t.firstChild, n = h.firstChild, w = h.nextSibling.firstChild.firstChild, e = {doesNotAddBorder:n.offsetTop !== 5, doesAddBorderForTableAndCells:w.offsetTop === 5}, n.style.position = "fixed", n.style.top = "20px", e.fixedPosition = n.offsetTop === 20 || n.offsetTop === 15, n.style.position = n.style.top = "", h.style.overflow = "hidden", h.style.position = "relative", e.subtractsBorderForOverflowNotVisible = n.offsetTop === -5, e.doesNotIncludeMarginInBodyOffset = o.offsetTop !== y, o.removeChild(f), t = f = null, i.extend(u, e))
        }), u
    }(), gi = /^(?:\{.*\}|\[.*\])$/, wi = /([A-Z])/g, i.extend({cache:{}, uuid:0, expando:"jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""), noData:{embed:!0, object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet:!0}, hasData:function (n) {
        return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ct(n)
    }, data:function (n, r, u, f) {
        if (!!i.acceptData(n)) {
            var v, s, c, h = i.expando, y = typeof r == "string", l = n.nodeType, o = l ? i.cache : n, e = l ? n[h] : n[h] && h, a = r === "events";
            return(!e || !o[e] || !a && !f && !o[e].data) && y && u === t ? void 0 : (e || (l ? n[h] = e = ++i.uuid : e = h), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), v = s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a && !s[r]) ? v.events : (y ? (c = s[r], c == null && (c = s[i.camelCase(r)])) : c = s, c)
        }
    }, removeData:function (n, t, r) {
        if (!!i.acceptData(n)) {
            var e, s, c, o = i.expando, h = n.nodeType, u = h ? i.cache : n, f = h ? n[o] : o;
            if (!u[f])return;
            if (t && (e = r ? u[f] : u[f].data, e)) {
                for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), s = 0, c = t.length; s < c; s++)delete e[t[s]];
                if (!(r ? ct : i.isEmptyObject)(e))return
            }
            if (!r && (delete u[f].data, !ct(u[f])))return;
            i.support.deleteExpando || !u.setInterval ? delete u[f] : u[f] = null, h && (i.support.deleteExpando ? delete n[o] : n.removeAttribute ? n.removeAttribute(o) : n[o] = null)
        }
    }, _data:function (n, t, r) {
        return i.data(n, t, r, !0)
    }, acceptData:function (n) {
        if (n.nodeName) {
            var t = i.noData[n.nodeName.toLowerCase()];
            if (t)return t !== !0 && n.getAttribute("classid") === t
        }
        return!0
    }}), i.fn.extend({data:function (n, r) {
        var u, s, e, f = null, o, h;
        if (typeof n == "undefined") {
            if (this.length && (f = i.data(this[0]), this[0].nodeType === 1 && !i._data(this[0], "parsedAttrs"))) {
                for (s = this[0].attributes, o = 0, h = s.length; o < h; o++)e = s[o].name, e.indexOf("data-") === 0 && (e = i.camelCase(e.substring(5)), ir(this[0], e, f[e]));
                i._data(this[0], "parsedAttrs", !0)
            }
            return f
        }
        return typeof n == "object" ? this.each(function () {
            i.data(this, n)
        }) : (u = n.split("."), u[1] = u[1] ? "." + u[1] : "", r === t) ? (f = this.triggerHandler("getData" + u[1] + "!", [u[0]]), f === t && this.length && (f = i.data(this[0], n), f = ir(this[0], n, f)), f === t && u[1] ? this.data(u[0]) : f) : this.each(function () {
            var f = i(this), t = [u[0], r];
            f.triggerHandler("setData" + u[1] + "!", t), i.data(this, n, r), f.triggerHandler("changeData" + u[1] + "!", t)
        })
    }, removeData:function (n) {
        return this.each(function () {
            i.removeData(this, n)
        })
    }}), i.extend({_mark:function (n, t) {
        n && (t = (t || "fx") + "mark", i._data(n, t, (i._data(n, t) || 0) + 1))
    }, _unmark:function (n, t, r) {
        if (n !== !0 && (r = t, t = n, n = !1), t) {
            r = r || "fx";
            var u = r + "mark", f = n ? 0 : (i._data(t, u) || 1) - 1;
            f ? i._data(t, u, f) : (i.removeData(t, u, !0), fr(t, r, "mark"))
        }
    }, queue:function (n, t, r) {
        var u;
        if (n)return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
    }, dequeue:function (n, t) {
        t = t || "fx";
        var u = i.queue(n, t), r = u.shift(), f = {};
        r === "inprogress" && (r = u.shift()), r && (t === "fx" && u.unshift("inprogress"), i._data(n, t + ".run", f), r.call(n, function () {
            i.dequeue(n, t)
        }, f)), u.length || (i.removeData(n, t + "queue " + t + ".run", !0), fr(n, t, "queue"))
    }}), i.fn.extend({queue:function (n, r) {
        return(typeof n != "string" && (r = n, n = "fx"), r === t) ? i.queue(this[0], n) : this.each(function () {
            var t = i.queue(this, n, r);
            n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
        })
    }, dequeue:function (n) {
        return this.each(function () {
            i.dequeue(this, n)
        })
    }, delay:function (n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
            var r = setTimeout(t, n);
            i.stop = function () {
                clearTimeout(r)
            }
        })
    }, clearQueue:function (n) {
        return this.queue(n || "fx", [])
    }, promise:function (n, r) {
        function c() {
            --s || h.resolveWith(u, [u])
        }

        typeof n != "string" && (r = n, n = t), n = n || "fx";
        for (var h = i.Deferred(), u = this, f = u.length, s = 1, e = n + "defer", l = n + "queue", a = n + "mark", o; f--;)(o = i.data(u[f], e, t, !0) || (i.data(u[f], l, t, !0) || i.data(u[f], a, t, !0)) && i.data(u[f], e, i.Callbacks("once memory"), !0)) && (s++, o.add(c));
        return c(), h.promise()
    }});
    var pi = /[\n\t\r]/g, d = /\s+/, lu = /\r/g, au = /^(?:button|input)$/i, hu = /^(?:button|input|object|select|textarea)$/i, cu = /^a(?:rea)?$/i, pr = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, cr = i.support.getSetAttribute, e, or, sr;
    i.fn.extend({attr:function (n, t) {
        return i.access(this, n, t, !0, i.attr)
    }, removeAttr:function (n) {
        return this.each(function () {
            i.removeAttr(this, n)
        })
    }, prop:function (n, t) {
        return i.access(this, n, t, !0, i.prop)
    }, removeProp:function (n) {
        return n = i.propFix[n] || n, this.each(function () {
            try {
                this[n] = t, delete this[n]
            } catch (i) {
            }
        })
    }, addClass:function (n) {
        var u, e, s, t, f, r, o;
        if (i.isFunction(n))return this.each(function (t) {
            i(this).addClass(n.call(this, t, this.className))
        });
        if (n && typeof n == "string")for (u = n.split(d), e = 0, s = this.length; e < s; e++)if (t = this[e], t.nodeType === 1)if (t.className || u.length !== 1) {
            for (f = " " + t.className + " ", r = 0, o = u.length; r < o; r++)~f.indexOf(" " + u[r] + " ") || (f += u[r] + " ");
            t.className = i.trim(f)
        } else t.className = n;
        return this
    }, removeClass:function (n) {
        var o, e, h, r, u, f, s;
        if (i.isFunction(n))return this.each(function (t) {
            i(this).removeClass(n.call(this, t, this.className))
        });
        if (n && typeof n == "string" || n === t)for (o = (n || "").split(d), e = 0, h = this.length; e < h; e++)if (r = this[e], r.nodeType === 1 && r.className)if (n) {
            for (u = (" " + r.className + " ").replace(pi, " "), f = 0, s = o.length; f < s; f++)u = u.replace(" " + o[f] + " ", " ");
            r.className = i.trim(u)
        } else r.className = "";
        return this
    }, toggleClass:function (n, t) {
        var r = typeof n, u = typeof t == "boolean";
        return i.isFunction(n) ? this.each(function (r) {
            i(this).toggleClass(n.call(this, r, this.className, t), t)
        }) : this.each(function () {
            if (r === "string")for (var e, h = 0, o = i(this), f = t, s = n.split(d); e = s[h++];)f = u ? f : !o.hasClass(e), o[f ? "addClass" : "removeClass"](e); else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
        })
    }, hasClass:function (n) {
        for (var r = " " + n + " ", t = 0, i = this.length; t < i; t++)if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(pi, " ").indexOf(r) > -1)return!0;
        return!1
    }, val:function (n) {
        var r, u, e, f = this[0];
        return!arguments.length ? f ? (r = i.valHooks[f.nodeName.toLowerCase()] || i.valHooks[f.type], r && "get"in r && (u = r.get(f, "value")) !== t) ? u : (u = f.value, typeof u == "string" ? u.replace(lu, "") : u == null ? "" : u) : void 0 : (e = i.isFunction(n), this.each(function (u) {
            var o = i(this), f;
            this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                return n == null ? "" : n + ""
            })), r = i.valHooks[this.nodeName.toLowerCase()] || i.valHooks[this.type], r && "set"in r && r.set(this, f, "value") !== t || (this.value = f))
        }))
    }}), i.extend({valHooks:{option:{get:function (n) {
        var t = n.attributes.value;
        return!t || t.specified ? n.value : n.text
    }}, select:{get:function (n) {
        var o, e, h, t, r = n.selectedIndex, s = [], u = n.options, f = n.type === "select-one";
        if (r < 0)return null;
        for (e = f ? r : 0, h = f ? r + 1 : u.length; e < h; e++)if (t = u[e], t.selected && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
            if (o = i(t).val(), f)return o;
            s.push(o)
        }
        return f && !s.length && u.length ? i(u[r]).val() : s
    }, set:function (n, t) {
        var r = i.makeArray(t);
        return i(n).find("option").each(function () {
            this.selected = i.inArray(i(this).val(), r) >= 0
        }), r.length || (n.selectedIndex = -1), r
    }}}, attrFn:{val:!0, css:!0, html:!0, text:!0, data:!0, width:!0, height:!0, offset:!0}, attr:function (n, r, u, f) {
        var s, o, c, h = n.nodeType;
        if (!!n && h !== 3 && h !== 8 && h !== 2) {
            if (f && r in i.attrFn)return i(n)[r](u);
            if (typeof n.getAttribute == "undefined")return i.prop(n, r, u);
            if (c = h !== 1 || !i.isXMLDoc(n), c && (r = r.toLowerCase(), o = i.attrHooks[r] || (pr.test(r) ? or : e)), u !== t) {
                if (u === null) {
                    i.removeAttr(n, r);
                    return
                }
                return o && "set"in o && c && (s = o.set(n, u, r)) !== t ? s : (n.setAttribute(r, "" + u), u)
            }
            return o && "get"in o && c && (s = o.get(n, r)) !== null ? s : (s = n.getAttribute(r), s === null ? t : s)
        }
    }, removeAttr:function (n, t) {
        var u, e, r, o, f = 0;
        if (t && n.nodeType === 1)for (e = t.toLowerCase().split(d), o = e.length; f < o; f++)r = e[f], r && (u = i.propFix[r] || r, i.attr(n, r, ""), n.removeAttribute(cr ? r : u), pr.test(r) && u in n && (n[u] = !1))
    }, attrHooks:{type:{set:function (n, t) {
        if (au.test(n.nodeName) && n.parentNode)i.error("type property can't be changed"); else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
            var r = n.value;
            return n.setAttribute("type", t), r && (n.value = r), t
        }
    }}, value:{get:function (n, t) {
        return e && i.nodeName(n, "button") ? e.get(n, t) : t in n ? n.value : null
    }, set:function (n, t, r) {
        if (e && i.nodeName(n, "button"))return e.set(n, t, r);
        n.value = t
    }}}, propFix:{tabindex:"tabIndex", readonly:"readOnly", "for":"htmlFor", "class":"className", maxlength:"maxLength", cellspacing:"cellSpacing", cellpadding:"cellPadding", rowspan:"rowSpan", colspan:"colSpan", usemap:"useMap", frameborder:"frameBorder", contenteditable:"contentEditable"}, prop:function (n, r, u) {
        var o, f, s, e = n.nodeType;
        if (!!n && e !== 3 && e !== 8 && e !== 2)return s = e !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set"in f && (o = f.set(n, u, r)) !== t ? o : n[r] = u : f && "get"in f && (o = f.get(n, r)) !== null ? o : n[r]
    }, propHooks:{tabIndex:{get:function (n) {
        var i = n.getAttributeNode("tabindex");
        return i && i.specified ? parseInt(i.value, 10) : hu.test(n.nodeName) || cu.test(n.nodeName) && n.href ? 0 : t
    }}}}), i.attrHooks.tabindex = i.propHooks.tabIndex, or = {get:function (n, r) {
        var f, u = i.prop(n, r);
        return u === !0 || typeof u != "boolean" && (f = n.getAttributeNode(r)) && f.nodeValue !== !1 ? r.toLowerCase() : t
    }, set:function (n, t, r) {
        var u;
        return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
    }}, cr || (sr = {name:!0, id:!0}, e = i.valHooks.button = {get:function (n, i) {
        var r;
        return r = n.getAttributeNode(i), r && (sr[i] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
    }, set:function (n, t, i) {
        var u = n.getAttributeNode(i);
        return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.nodeValue = t + ""
    }}, i.attrHooks.tabindex.set = e.set, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {set:function (n, i) {
            if (i === "")return n.setAttribute(t, "auto"), i
        }})
    }), i.attrHooks.contenteditable = {get:e.get, set:function (n, t, i) {
        t === "" && (t = "false"), e.set(n, t, i)
    }}), i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {get:function (n) {
            var i = n.getAttribute(r, 2);
            return i === null ? t : i
        }})
    }), i.support.style || (i.attrHooks.style = {get:function (n) {
        return n.style.cssText.toLowerCase() || t
    }, set:function (n, t) {
        return n.style.cssText = "" + t
    }}), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {get:function (n) {
        var t = n.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }})), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {get:function (n) {
            return n.getAttribute("value") === null ? "on" : n.value
        }}
    }), i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {set:function (n, t) {
            if (i.isArray(t))return n.checked = i.inArray(i(n).val(), t) >= 0
        }})
    });
    var ft = /^(?:textarea|input|select)$/i, lr = /^([^\.]*)?(?:\.(.+))?$/, vu = /\bhover(\.\S+)?\b/, wu = /^key/, bu = /^(?:mouse|contextmenu)|click/, kt = /^(?:focusinfocus|focusoutblur)$/, yu = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, pu = function (n) {
        var t = yu.exec(n);
        return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
    }, sf = function (n, t) {
        var i = n.attributes || {};
        return(!t[1] || n.nodeName.toLowerCase() === t[1]) && (!t[2] || (i.id || {}).value === t[2]) && (!t[3] || t[3].test((i["class"] || {}).value))
    }, gt = function (n) {
        return i.event.special.hover ? n : n.replace(vu, "mouseenter$1 mouseleave$1")
    };
    i.event = {add:function (n, r, u, f, e) {
        var v, h, a, p, y, o, w, l, b, k, c, s;
        if (!(n.nodeType === 3 || n.nodeType === 8 || !r || !u || !(v = i._data(n)))) {
            for (u.handler && (b = u, u = b.handler), u.guid || (u.guid = i.guid++), a = v.events, a || (v.events = a = {}), h = v.handle, h || (v.handle = h = function (n) {
                return typeof i != "undefined" && (!n || i.event.triggered !== n.type) ? i.event.dispatch.apply(h.elem, arguments) : t
            }, h.elem = n), r = i.trim(gt(r)).split(" "), p = 0; p < r.length; p++)y = lr.exec(r[p]) || [], o = y[1], w = (y[2] || "").split(".").sort(), s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, l = i.extend({type:o, origType:y[1], data:f, handler:u, guid:u.guid, selector:e, quick:pu(e), namespace:w.join(".")}, b), c = a[o], c || (c = a[o] = [], c.delegateCount = 0, s.setup && s.setup.call(n, f, w, h) !== !1 || (n.addEventListener ? n.addEventListener(o, h, !1) : n.attachEvent && n.attachEvent("on" + o, h))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
            n = null
        }
    }, global:{}, remove:function (n, t, r, u, f) {
        var y = i.hasData(n) && i._data(n), v, p, e, k, h, b, l, a, c, w, o, s;
        if (!!y && !!(a = y.events)) {
            for (t = i.trim(gt(t || "")).split(" "), v = 0; v < t.length; v++) {
                if (p = lr.exec(t[v]) || [], e = k = p[1], h = p[2], !e) {
                    for (e in a)i.event.remove(n, e + t[v], r, u, !0);
                    continue
                }
                for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = a[e] || [], b = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < o.length; l++)s = o[l], (f || k === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(l--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                o.length === 0 && b !== o.length && ((!c.teardown || c.teardown.call(n, h) === !1) && i.removeEvent(n, e, y.handle), delete a[e])
            }
            i.isEmptyObject(a) && (w = y.handle, w && (w.elem = null), i.removeData(n, ["events", "handle"], !0))
        }
    }, customEvent:{getData:!0, setData:!0, changeData:!0}, trigger:function (r, u, f, e) {
        if (!f || f.nodeType !== 3 && f.nodeType !== 8) {
            var o = r.type || r, w = [], p, k, c, s, h, a, l, v, y, b;
            if (kt.test(o + i.event.triggered))return;
            if (o.indexOf("!") >= 0 && (o = o.slice(0, -1), k = !0), o.indexOf(".") >= 0 && (w = o.split("."), o = w.shift(), w.sort()), (!f || i.event.customEvent[o]) && !i.event.global[o])return;
            if (r = typeof r == "object" ? r[i.expando] ? r : new i.Event(o, r) : new i.Event(o), r.type = o, r.isTrigger = !0, r.exclusive = k, r.namespace = w.join("."), r.namespace_re = r.namespace ? new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, a = o.indexOf(":") < 0 ? "on" + o : "", !f) {
                p = i.cache;
                for (c in p)p[c].events && p[c].events[o] && i.event.trigger(r, u, p[c].handle.elem, !0);
                return
            }
            if (r.result = t, r.target || (r.target = f), u = u != null ? i.makeArray(u) : [], u.unshift(r), l = i.event.special[o] || {}, l.trigger && l.trigger.apply(f, u) === !1)return;
            if (y = [
                [f, l.bindType || o]
            ], !e && !l.noBubble && !i.isWindow(f)) {
                for (b = l.delegateType || o, s = kt.test(b + o) ? f : f.parentNode, h = null; s; s = s.parentNode)y.push([s, b]), h = s;
                h && h === f.ownerDocument && y.push([h.defaultView || h.parentWindow || n, b])
            }
            for (c = 0; c < y.length && !r.isPropagationStopped(); c++)s = y[c][0], r.type = y[c][1], v = (i._data(s, "events") || {})[r.type] && i._data(s, "handle"), v && v.apply(s, u), v = a && s[a], v && i.acceptData(s) && v.apply(s, u) === !1 && r.preventDefault();
            return r.type = o, !e && !r.isDefaultPrevented() && (!l._default || l._default.apply(f.ownerDocument, u) === !1) && (o !== "click" || !i.nodeName(f, "a")) && i.acceptData(f) && a && f[o] && (o !== "focus" && o !== "blur" || r.target.offsetWidth !== 0) && !i.isWindow(f) && (h = f[a], h && (f[a] = null), i.event.triggered = o, f[o](), i.event.triggered = t, h && (f[a] = h)), r.result
        }
    }, dispatch:function (r) {
        r = i.event.fix(r || n.event);
        var h = (i._data(this, "events") || {})[r.type] || [], p = h.delegateCount, b = [].slice.call(arguments, 0), k = !r.exclusive && !r.namespace, y = [], f, w, e, a, v, c, s, l, u, o, d;
        if (b[0] = r, r.delegateTarget = this, p && !r.target.disabled && (!r.button || r.type !== "click"))for (a = i(this), a.context = this.ownerDocument || this, e = r.target; e != this; e = e.parentNode || this) {
            for (c = {}, l = [], a[0] = e, f = 0; f < p; f++)u = h[f], o = u.selector, c[o] === t && (c[o] = u.quick ? sf(e, u.quick) : a.is(o)), c[o] && l.push(u);
            l.length && y.push({elem:e, matches:l})
        }
        for (h.length > p && y.push({elem:this, matches:h.slice(p)}), f = 0; f < y.length && !r.isPropagationStopped(); f++)for (s = y[f], r.currentTarget = s.elem, w = 0; w < s.matches.length && !r.isImmediatePropagationStopped(); w++)u = s.matches[w], (k || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, v = ((i.event.special[u.origType] || {}).handle || u.handler).apply(s.elem, b), v !== t && (r.result = v, v === !1 && (r.preventDefault(), r.stopPropagation())));
        return r.result
    }, props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks:{}, keyHooks:{props:"char charCode key keyCode".split(" "), filter:function (n, t) {
        return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
    }}, mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function (n, i) {
        var s, f, u, e = i.button, o = i.fromElement;
        return n.pageX == null && i.clientX != null && (s = n.target.ownerDocument || r, f = s.documentElement, u = s.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? i.toElement : o), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
    }}, fix:function (n) {
        if (n[i.expando])return n;
        var e, o, u = n, f = i.event.fixHooks[n.type] || {}, s = f.props ? this.props.concat(f.props) : this.props;
        for (n = i.Event(u), e = s.length; e;)o = s[--e], n[o] = u[o];
        return n.target || (n.target = u.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey === t && (n.metaKey = n.ctrlKey), f.filter ? f.filter(n, u) : n
    }, special:{ready:{setup:i.bindReady}, load:{noBubble:!0}, focus:{delegateType:"focusin"}, blur:{delegateType:"focusout"}, beforeunload:{setup:function (n, t, r) {
        i.isWindow(this) && (this.onbeforeunload = r)
    }, teardown:function (n, t) {
        this.onbeforeunload === t && (this.onbeforeunload = null)
    }}}, simulate:function (n, t, r, u) {
        var f = i.extend(new i.Event, r, {type:n, isSimulated:!0, originalEvent:{}});
        u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
    }}, i.event.handle = i.event.dispatch, i.removeEvent = r.removeEventListener ? function (n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function (n, t, i) {
        n.detachEvent && n.detachEvent("on" + t, i)
    }, i.Event = function (n, t) {
        if (!(this instanceof i.Event))return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? w : c) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0
    }, i.Event.prototype = {preventDefault:function () {
        this.isDefaultPrevented = w;
        var n = this.originalEvent;
        !n || (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
    }, stopPropagation:function () {
        this.isPropagationStopped = w;
        var n = this.originalEvent;
        !n || (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
    }, stopImmediatePropagation:function () {
        this.isImmediatePropagationStopped = w, this.stopPropagation()
    }, isDefaultPrevented:c, isPropagationStopped:c, isImmediatePropagationStopped:c}, i.each({mouseenter:"mouseover", mouseleave:"mouseout"}, function (n, t) {
        i.event.special[n] = {delegateType:t, bindType:t, handle:function (n) {
            var e = this, u = n.relatedTarget, r = n.handleObj, o = r.selector, f;
            return u && (u === e || i.contains(e, u)) || (n.type = r.origType, f = r.handler.apply(this, arguments), n.type = t), f
        }}
    }), i.support.submitBubbles || (i.event.special.submit = {setup:function () {
        if (i.nodeName(this, "form"))return!1;
        i.event.add(this, "click._submit keypress._submit", function (n) {
            var u = n.target, r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
            r && !r._submit_attached && (i.event.add(r, "submit._submit", function (n) {
                this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0)
            }), r._submit_attached = !0)
        })
    }, teardown:function () {
        if (i.nodeName(this, "form"))return!1;
        i.event.remove(this, "._submit")
    }}), i.support.changeBubbles || (i.event.special.change = {setup:function () {
        if (ft.test(this.nodeName))return(this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
            n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
        }), i.event.add(this, "click._change", function (n) {
            this._just_changed && !n.isTrigger && (this._just_changed = !1, i.event.simulate("change", this, n, !0))
        })), !1;
        i.event.add(this, "beforeactivate._change", function (n) {
            var t = n.target;
            ft.test(t.nodeName) && !t._change_attached && (i.event.add(t, "change._change", function (n) {
                this.parentNode && !n.isSimulated && !n.isTrigger && i.event.simulate("change", this.parentNode, n, !0)
            }), t._change_attached = !0)
        })
    }, handle:function (n) {
        var t = n.target;
        if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox")return n.handleObj.handler.apply(this, arguments)
    }, teardown:function () {
        return i.event.remove(this, "._change"), ft.test(this.nodeName)
    }}), i.support.focusinBubbles || i.each({focus:"focusin", blur:"focusout"}, function (n, t) {
        var f = 0, u = function (n) {
            i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
        i.event.special[t] = {setup:function () {
            f++ == 0 && r.addEventListener(n, u, !0)
        }, teardown:function () {
            --f == 0 && r.removeEventListener(n, u, !0)
        }}
    }), i.fn.extend({on:function (n, r, u, f, e) {
        var o, s;
        if (typeof n == "object") {
            typeof r != "string" && (u = r, r = t);
            for (s in n)this.on(s, r, u, n[s], e);
            return this
        }
        if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1)f = c; else if (!f)return this;
        return e === 1 && (o = f, f = function (n) {
            return i().off(n), o.apply(this, arguments)
        }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
            i.event.add(this, n, f, u, r)
        })
    }, one:function (n, t, i, r) {
        return this.on.call(this, n, t, i, r, 1)
    }, off:function (n, r, u) {
        var f, e;
        if (n && n.preventDefault && n.handleObj)return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.type + "." + f.namespace : f.type, f.selector, f.handler), this;
        if (typeof n == "object") {
            for (e in n)this.off(e, r, n[e]);
            return this
        }
        return(r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = c), this.each(function () {
            i.event.remove(this, n, u, r)
        })
    }, bind:function (n, t, i) {
        return this.on(n, null, t, i)
    }, unbind:function (n, t) {
        return this.off(n, null, t)
    }, live:function (n, t, r) {
        i(this.context).on(n, this.selector, t, r);
        return this
    }, die:function (n, t) {
        return i(this.context).off(n, this.selector || "**", t), this
    }, delegate:function (n, t, i, r) {
        return this.on(t, n, i, r)
    }, undelegate:function (n, t, i) {
        return arguments.length == 1 ? this.off(n, "**") : this.off(t, n, i)
    }, trigger:function (n, t) {
        return this.each(function () {
            i.event.trigger(n, t, this)
        })
    }, triggerHandler:function (n, t) {
        if (this[0])return i.event.trigger(n, t, this[0], !0)
    }, toggle:function (n) {
        var r = arguments, f = n.guid || i.guid++, t = 0, u = function (u) {
            var f = (i._data(this, "lastToggle" + n.guid) || 0) % t;
            return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), r[f].apply(this, arguments) || !1
        };
        for (u.guid = f; t < r.length;)r[t++].guid = f;
        return this.click(u)
    }, hover:function (n, t) {
        return this.mouseenter(n).mouseleave(t || n)
    }}), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
        i.fn[t] = function (n, i) {
            return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }, i.attrFn && (i.attrFn[t] = !0), wu.test(t) && (i.event.fixHooks[t] = i.event.keyHooks), bu.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
    }), function () {
        function b(t, i, r, u, f, e) {
            for (var s, c, h = 0, l = u.length; h < l; h++)if (s = u[h], s) {
                for (c = !1, s = s[t]; s;) {
                    if (s[o] === r) {
                        c = u[s.sizset];
                        break
                    }
                    if (s.nodeType === 1)if (e || (s[o] = r, s.sizset = h), typeof i != "string") {
                        if (s === i) {
                            c = !0;
                            break
                        }
                    } else if (n.filter(i, [s]).length > 0) {
                        c = s;
                        break
                    }
                    s = s[t]
                }
                u[h] = c
            }
        }

        function d(n, t, i, r, u, f) {
            for (var e, h, s = 0, c = r.length; s < c; s++)if (e = r[s], e) {
                for (h = !1, e = e[n]; e;) {
                    if (e[o] === i) {
                        h = r[e.sizset];
                        break
                    }
                    if (e.nodeType === 1 && !f && (e[o] = i, e.sizset = s), e.nodeName.toLowerCase() === t) {
                        h = e;
                        break
                    }
                    e = e[n]
                }
                r[s] = h
            }
        }

        var w = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, o = "sizcache" + (Math.random() + "").replace(".", ""), p = 0, g = Object.prototype.toString, l = !1, k = !0, e = /\\/g, it = /\r\n/g, c = /\W/, n, h, f, a, s, y;
        [0, 0].sort(function () {
            return k = !1, 0
        }), n = function (t, i, e, o) {
            var it;
            if (e = e || [], i = i || r, it = i, i.nodeType !== 1 && i.nodeType !== 9)return[];
            if (!t || typeof t != "string")return e;
            var v, a, h, d, l, p, b, c, rt = !0, k = n.isXML(i), s = [], tt = t;
            do if (w.exec(""), v = w.exec(tt), v && (tt = v[3], s.push(v[1]), v[2])) {
                d = v[3];
                break
            } while (v);
            if (s.length > 1 && nt.exec(t))if (s.length === 2 && u.relative[s[0]])a = y(s[0] + s[1], i, o); else for (a = u.relative[s[0]] ? [i] : n(s.shift(), i); s.length;)t = s.shift(), u.relative[t] && (t += s.shift()), a = y(t, a, o); else if (!o && s.length > 1 && i.nodeType === 9 && !k && u.match.ID.test(s[0]) && !u.match.ID.test(s[s.length - 1]) && (l = n.find(s.shift(), i, k), i = l.expr ? n.filter(l.expr, l.set)[0] : l.set[0]), i)for (l = o ? {expr:s.pop(), set:f(o)} : n.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && i.parentNode ? i.parentNode : i, k), a = l.expr ? n.filter(l.expr, l.set) : l.set, s.length > 0 ? h = f(a) : rt = !1; s.length;)p = s.pop(), b = p, u.relative[p] ? b = s.pop() : p = "", b == null && (b = i), u.relative[p](h, b, k); else h = s = [];
            if (h || (h = a), h || n.error(p || t), g.call(h) === "[object Array]")if (rt)if (i && i.nodeType === 1)for (c = 0; h[c] != null; c++)h[c] && (h[c] === !0 || h[c].nodeType === 1 && n.contains(i, h[c])) && e.push(a[c]); else for (c = 0; h[c] != null; c++)h[c] && h[c].nodeType === 1 && e.push(a[c]); else e.push.apply(e, h); else f(h, e);
            return d && (n(d, it, e, o), n.uniqueSort(e)), e
        }, n.uniqueSort = function (n) {
            if (a && (l = k, n.sort(a), l))for (var t = 1; t < n.length; t++)n[t] === n[t - 1] && n.splice(t--, 1);
            return n
        }, n.matches = function (t, i) {
            return n(t, null, null, i)
        }, n.matchesSelector = function (t, i) {
            return n(i, null, null, [t]).length > 0
        }, n.find = function (n, t, i) {
            var f, s, c, r, o, h;
            if (!n)return[];
            for (s = 0, c = u.order.length; s < c; s++)if (o = u.order[s], (r = u.leftMatch[o].exec(n)) && (h = r[1], r.splice(1, 1), h.substr(h.length - 1) !== "\\" && (r[1] = (r[1] || "").replace(e, ""), f = u.find[o](r, t, i), f != null))) {
                n = n.replace(u.match[o], "");
                break
            }
            return f || (f = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {set:f, expr:n}
        }, n.filter = function (i, r, f, e) {
            for (var o, c, h, v, y, b, p, l, w, k = i, a = [], s = r, d = r && r[0] && n.isXML(r[0]); i && r.length;) {
                for (h in u.filter)if ((o = u.leftMatch[h].exec(i)) != null && o[2]) {
                    if (b = u.filter[h], p = o[1], c = !1, o.splice(1, 1), p.substr(p.length - 1) === "\\")continue;
                    if (s === a && (a = []), u.preFilter[h])if (o = u.preFilter[h](o, s, f, a, e, d), o) {
                        if (o === !0)continue
                    } else c = v = !0;
                    if (o)for (l = 0; (y = s[l]) != null; l++)y && (v = b(y, o, l, s), w = e ^ v, f && v != null ? w ? c = !0 : s[l] = !1 : w && (a.push(y), c = !0));
                    if (v !== t) {
                        if (f || (s = a), i = i.replace(u.match[h], ""), !c)return[];
                        break
                    }
                }
                if (i === k)if (c == null)n.error(i); else break;
                k = i
            }
            return s
        }, n.error = function (n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        var v = n.getText = function (n) {
            var r, u, t = n.nodeType, i = "";
            if (t) {
                if (t === 1 || t === 9) {
                    if (typeof n.textContent == "string")return n.textContent;
                    if (typeof n.innerText == "string")return n.innerText.replace(it, "");
                    for (n = n.firstChild; n; n = n.nextSibling)i += v(n)
                } else if (t === 3 || t === 4)return n.nodeValue
            } else for (r = 0; u = n[r]; r++)u.nodeType !== 8 && (i += v(u));
            return i
        }, u = n.selectors = {order:["ID", "NAME", "TAG"], match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/}, leftMatch:{}, attrMap:{"class":"className", "for":"htmlFor"}, attrHandle:{href:function (n) {
            return n.getAttribute("href")
        }, type:function (n) {
            return n.getAttribute("type")
        }}, relative:{"+":function (t, i) {
            var s = typeof i == "string", e = s && !c.test(i), o = s && !e, u, f, r;
            for (e && (i = i.toLowerCase()), u = 0, f = t.length; u < f; u++)if (r = t[u]) {
                while ((r = r.previousSibling) && r.nodeType !== 1);
                t[u] = o || r && r.nodeName.toLowerCase() === i ? r || !1 : r === i
            }
            o && n.filter(i, t, !0)
        }, ">":function (t, i) {
            var u, e = typeof i == "string", r = 0, o = t.length, f;
            if (e && !c.test(i))for (i = i.toLowerCase(); r < o; r++)u = t[r], u && (f = u.parentNode, t[r] = f.nodeName.toLowerCase() === i ? f : !1); else {
                for (; r < o; r++)u = t[r], u && (t[r] = e ? u.parentNode : u.parentNode === i);
                e && n.filter(i, t, !0)
            }
        }, "":function (n, t, i) {
            var u, f = p++, r = b;
            typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), u = t, r = d), r("parentNode", t, f, n, u, i)
        }, "~":function (n, t, i) {
            var u, f = p++, r = b;
            typeof t == "string" && !c.test(t) && (t = t.toLowerCase(), u = t, r = d), r("previousSibling", t, f, n, u, i)
        }}, find:{ID:function (n, t, i) {
            if (typeof t.getElementById != "undefined" && !i) {
                var r = t.getElementById(n[1]);
                return r && r.parentNode ? [r] : []
            }
        }, NAME:function (n, t) {
            var u, r, i, f;
            if (typeof t.getElementsByName != "undefined") {
                for (u = [], r = t.getElementsByName(n[1]), i = 0, f = r.length; i < f; i++)r[i].getAttribute("name") === n[1] && u.push(r[i]);
                return u.length === 0 ? null : u
            }
        }, TAG:function (n, t) {
            if (typeof t.getElementsByTagName != "undefined")return t.getElementsByTagName(n[1])
        }}, preFilter:{CLASS:function (n, t, i, r, u, f) {
            if (n = " " + n[1].replace(e, "") + " ", f)return n;
            for (var s = 0, o; (o = t[s]) != null; s++)o && (u ^ (o.className && (" " + o.className + " ").replace(/[\t\n\r]/g, " ").indexOf(n) >= 0) ? i || r.push(o) : i && (t[s] = !1));
            return!1
        }, ID:function (n) {
            return n[1].replace(e, "")
        }, TAG:function (n) {
            return n[1].replace(e, "").toLowerCase()
        }, CHILD:function (t) {
            if (t[1] === "nth") {
                t[2] || n.error(t[0]), t[2] = t[2].replace(/^\+|\s*/g, "");
                var i = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(t[2] === "even" && "2n" || t[2] === "odd" && "2n+1" || !/\D/.test(t[2]) && "0n+" + t[2] || t[2]);
                t[2] = i[1] + (i[2] || 1) - 0, t[3] = i[3] - 0
            } else t[2] && n.error(t[0]);
            return t[0] = p++, t
        }, ATTR:function (n, t, i, r, f, o) {
            var s = n[1] = n[1].replace(e, "");
            return!o && u.attrMap[s] && (n[1] = u.attrMap[s]), n[4] = (n[4] || n[5] || "").replace(e, ""), n[2] === "~=" && (n[4] = " " + n[4] + " "), n
        }, PSEUDO:function (t, i, r, f, e) {
            if (t[1] === "not")if ((w.exec(t[3]) || "").length > 1 || /^\w/.test(t[3]))t[3] = n(t[3], null, null, i); else {
                var o = n.filter(t[3], i, r, !0 ^ e);
                return r || f.push.apply(f, o), !1
            } else if (u.match.POS.test(t[0]) || u.match.CHILD.test(t[0]))return!0;
            return t
        }, POS:function (n) {
            return n.unshift(!0), n
        }}, filters:{enabled:function (n) {
            return n.disabled === !1 && n.type !== "hidden"
        }, disabled:function (n) {
            return n.disabled === !0
        }, checked:function (n) {
            return n.checked === !0
        }, selected:function (n) {
            return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
        }, parent:function (n) {
            return!!n.firstChild
        }, empty:function (n) {
            return!n.firstChild
        }, has:function (t, i, r) {
            return!!n(r[3], t).length
        }, header:function (n) {
            return/h\d/i.test(n.nodeName)
        }, text:function (n) {
            var i = n.getAttribute("type"), t = n.type;
            return n.nodeName.toLowerCase() === "input" && "text" === t && (i === t || i === null)
        }, radio:function (n) {
            return n.nodeName.toLowerCase() === "input" && "radio" === n.type
        }, checkbox:function (n) {
            return n.nodeName.toLowerCase() === "input" && "checkbox" === n.type
        }, file:function (n) {
            return n.nodeName.toLowerCase() === "input" && "file" === n.type
        }, password:function (n) {
            return n.nodeName.toLowerCase() === "input" && "password" === n.type
        }, submit:function (n) {
            var t = n.nodeName.toLowerCase();
            return(t === "input" || t === "button") && "submit" === n.type
        }, image:function (n) {
            return n.nodeName.toLowerCase() === "input" && "image" === n.type
        }, reset:function (n) {
            var t = n.nodeName.toLowerCase();
            return(t === "input" || t === "button") && "reset" === n.type
        }, button:function (n) {
            var t = n.nodeName.toLowerCase();
            return t === "input" && "button" === n.type || t === "button"
        }, input:function (n) {
            return/input|select|textarea|button/i.test(n.nodeName)
        }, focus:function (n) {
            return n === n.ownerDocument.activeElement
        }}, setFilters:{first:function (n, t) {
            return t === 0
        }, last:function (n, t, i, r) {
            return t === r.length - 1
        }, even:function (n, t) {
            return t % 2 == 0
        }, odd:function (n, t) {
            return t % 2 == 1
        }, lt:function (n, t, i) {
            return t < i[3] - 0
        }, gt:function (n, t, i) {
            return t > i[3] - 0
        }, nth:function (n, t, i) {
            return i[3] - 0 === t
        }, eq:function (n, t, i) {
            return i[3] - 0 === t
        }}, filter:{PSEUDO:function (t, i, r, f) {
            var o = i[1], c = u.filters[o], s, e, h;
            if (c)return c(t, r, i, f);
            if (o === "contains")return(t.textContent || t.innerText || v([t]) || "").indexOf(i[3]) >= 0;
            if (o === "not") {
                for (s = i[3], e = 0, h = s.length; e < h; e++)if (s[e] === t)return!1;
                return!0
            }
            n.error(o)
        }, CHILD:function (n, t) {
            var r, e, s, u, l, c, f, h = t[1], i = n;
            switch (h) {
                case"only":
                case"first":
                    while (i = i.previousSibling)if (i.nodeType === 1)return!1;
                    if (h === "first")return!0;
                    i = n;
                case"last":
                    while (i = i.nextSibling)if (i.nodeType === 1)return!1;
                    return!0;
                case"nth":
                    if (r = t[2], e = t[3], r === 1 && e === 0)return!0;
                    if (s = t[0], u = n.parentNode, u && (u[o] !== s || !n.nodeIndex)) {
                        for (c = 0, i = u.firstChild; i; i = i.nextSibling)i.nodeType === 1 && (i.nodeIndex = ++c);
                        u[o] = s
                    }
                    return f = n.nodeIndex - e, r === 0 ? f === 0 : f % r == 0 && f / r >= 0
            }
        }, ID:function (n, t) {
            return n.nodeType === 1 && n.getAttribute("id") === t
        }, TAG:function (n, t) {
            return t === "*" && n.nodeType === 1 || !!n.nodeName && n.nodeName.toLowerCase() === t
        }, CLASS:function (n, t) {
            return(" " + (n.className || n.getAttribute("class")) + " ").indexOf(t) > -1
        }, ATTR:function (t, i) {
            var o = i[1], s = n.attr ? n.attr(t, o) : u.attrHandle[o] ? u.attrHandle[o](t) : t[o] != null ? t[o] : t.getAttribute(o), f = s + "", e = i[2], r = i[4];
            return s == null ? e === "!=" : !e && n.attr ? s != null : e === "=" ? f === r : e === "*=" ? f.indexOf(r) >= 0 : e === "~=" ? (" " + f + " ").indexOf(r) >= 0 : r ? e === "!=" ? f !== r : e === "^=" ? f.indexOf(r) === 0 : e === "$=" ? f.substr(f.length - r.length) === r : e === "|=" ? f === r || f.substr(0, r.length + 1) === r + "-" : !1 : f && s !== !1
        }, POS:function (n, t, i, r) {
            var e = t[2], f = u.setFilters[e];
            if (f)return f(n, i, t, r)
        }}}, nt = u.match.POS, tt = function (n, t) {
            return"\\" + (+t + 1)
        };
        for (h in u.match)u.match[h] = new RegExp(u.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), u.leftMatch[h] = new RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[h].source.replace(/\\(\d+)/g, tt));
        f = function (n, t) {
            return(n = Array.prototype.slice.call(n, 0), t) ? (t.push.apply(t, n), t) : n
        };
        try {
            Array.prototype.slice.call(r.documentElement.childNodes, 0)[0].nodeType
        } catch (rt) {
            f = function (n, t) {
                var i = 0, r = t || [], u;
                if (g.call(n) === "[object Array]")Array.prototype.push.apply(r, n); else if (typeof n.length == "number")for (u = n.length; i < u; i++)r.push(n[i]); else for (; n[i]; i++)r.push(n[i]);
                return r
            }
        }
        r.documentElement.compareDocumentPosition ? a = function (n, t) {
            return n === t ? (l = !0, 0) : !n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition ? -1 : 1 : n.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (a = function (n, t) {
            var i;
            if (n === t)return l = !0, 0;
            if (n.sourceIndex && t.sourceIndex)return n.sourceIndex - t.sourceIndex;
            var o, c, f = [], u = [], h = n.parentNode, e = t.parentNode, r = h;
            if (h === e)return s(n, t);
            if (!h)return-1;
            if (!e)return 1;
            while (r)f.unshift(r), r = r.parentNode;
            for (r = e; r;)u.unshift(r), r = r.parentNode;
            for (o = f.length, c = u.length, i = 0; i < o && i < c; i++)if (f[i] !== u[i])return s(f[i], u[i]);
            return i === o ? s(n, u[i], -1) : s(f[i], t, 1)
        }, s = function (n, t, i) {
            if (n === t)return i;
            for (var r = n.nextSibling; r;) {
                if (r === t)return-1;
                r = r.nextSibling
            }
            return 1
        }), function () {
            var i = r.createElement("div"), f = "script" + +new Date, n = r.documentElement;
            i.innerHTML = "<a name='" + f + "'/>", n.insertBefore(i, n.firstChild), r.getElementById(f) && (u.find.ID = function (n, i, r) {
                if (typeof i.getElementById != "undefined" && !r) {
                    var u = i.getElementById(n[1]);
                    return u ? u.id === n[1] || typeof u.getAttributeNode != "undefined" && u.getAttributeNode("id").nodeValue === n[1] ? [u] : t : []
                }
            }, u.filter.ID = function (n, t) {
                var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                return n.nodeType === 1 && i && i.nodeValue === t
            }), n.removeChild(i), n = i = null
        }(), function () {
            var n = r.createElement("div");
            n.appendChild(r.createComment("")), n.getElementsByTagName("*").length > 0 && (u.find.TAG = function (n, t) {
                var r = t.getElementsByTagName(n[1]), u, i;
                if (n[1] === "*") {
                    for (u = [], i = 0; r[i]; i++)r[i].nodeType === 1 && u.push(r[i]);
                    r = u
                }
                return r
            }), n.innerHTML = "<a href='#'></a>", n.firstChild && typeof n.firstChild.getAttribute != "undefined" && n.firstChild.getAttribute("href") !== "#" && (u.attrHandle.href = function (n) {
                return n.getAttribute("href", 2)
            }), n = null
        }(), r.querySelectorAll && function () {
            var e = n, t = r.createElement("div"), o = "__sizzle__", i;
            if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                n = function (t, i, s, h) {
                    var c, l;
                    if (i = i || r, !h && !n.isXML(i)) {
                        if (c = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t), c && (i.nodeType === 1 || i.nodeType === 9)) {
                            if (c[1])return f(i.getElementsByTagName(t), s);
                            if (c[2] && u.find.CLASS && i.getElementsByClassName)return f(i.getElementsByClassName(c[2]), s)
                        }
                        if (i.nodeType === 9) {
                            if (t === "body" && i.body)return f([i.body], s);
                            if (c && c[3]) {
                                if (l = i.getElementById(c[3]), !l || !l.parentNode)return f([], s);
                                if (l.id === c[3])return f([l], s)
                            }
                            try {
                                return f(i.querySelectorAll(t), s)
                            } catch (k) {
                            }
                        } else if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                            var w = i, v = i.getAttribute("id"), a = v || o, y = i.parentNode, p = /^\s*[+~]/.test(t);
                            v ? a = a.replace(/'/g, "\\$&") : i.setAttribute("id", a), p && y && (i = i.parentNode);
                            try {
                                if (!p || y)return f(i.querySelectorAll("[id='" + a + "'] " + t), s)
                            } catch (b) {
                            } finally {
                                v || w.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, i, s, h)
                };
                for (i in e)n[i] = e[i];
                t = null
            }
        }(), function () {
            var i = r.documentElement, t = i.matchesSelector || i.mozMatchesSelector || i.webkitMatchesSelector || i.msMatchesSelector, e, f;
            if (t) {
                e = !t.call(r.createElement("div"), "div"), f = !1;
                try {
                    t.call(r.documentElement, "[test!='']:sizzle")
                } catch (o) {
                    f = !0
                }
                n.matchesSelector = function (i, r) {
                    if (r = r.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !n.isXML(i))try {
                        if (f || !u.match.PSEUDO.test(r) && !/!=/.test(r)) {
                            var o = t.call(i, r);
                            if (o || !e || i.document && i.document.nodeType !== 11)return o
                        }
                    } catch (s) {
                    }
                    return n(r, null, null, [i]).length > 0
                }
            }
        }(), function () {
            var n = r.createElement("div");
            if (n.innerHTML = "<div class='test e'></div><div class='test'></div>", !!n.getElementsByClassName && n.getElementsByClassName("e").length !== 0) {
                if (n.lastChild.className = "e", n.getElementsByClassName("e").length === 1)return;
                u.order.splice(1, 0, "CLASS"), u.find.CLASS = function (n, t, i) {
                    if (typeof t.getElementsByClassName != "undefined" && !i)return t.getElementsByClassName(n[1])
                }, n = null
            }
        }(), n.contains = r.documentElement.contains ? function (n, t) {
            return n !== t && (n.contains ? n.contains(t) : !0)
        } : r.documentElement.compareDocumentPosition ? function (n, t) {
            return!!(n.compareDocumentPosition(t) & 16)
        } : function () {
            return!1
        }, n.isXML = function (n) {
            var t = (n ? n.ownerDocument || n : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, y = function (t, i, r) {
            for (var s, h = [], c = "", e = i.nodeType ? [i] : i, f, o; s = u.match.PSEUDO.exec(t);)c += s[0], t = t.replace(u.match.PSEUDO, "");
            for (t = u.relative[t] ? t + "*" : t, f = 0, o = e.length; f < o; f++)n(t, e[f], h, r);
            return n.filter(c, h)
        }, n.attr = i.attr, n.selectors.attrMap = {}, i.find = n, i.expr = n.selectors, i.expr[":"] = i.expr.filters, i.unique = n.uniqueSort, i.text = n.getText, i.isXMLDoc = n.isXML, i.contains = n.contains
    }();
    var ne = /Until$/, te = /^(?:parents|prevUntil|prevAll)/, df = /,/, gf = /^.[^:#\[\.,]*$/, ie = Array.prototype.slice, wt = i.expr.match.POS, fe = {children:!0, contents:!0, next:!0, prev:!0};
    i.fn.extend({find:function (n) {
        var s = this, t, e, r, o, u, f;
        if (typeof n != "string")return i(n).filter(function () {
            for (t = 0, e = s.length; t < e; t++)if (i.contains(s[t], this))return!0
        });
        for (r = this.pushStack("", "find", n), t = 0, e = this.length; t < e; t++)if (o = r.length, i.find(n, this[t], r), t > 0)for (u = o; u < r.length; u++)for (f = 0; f < o; f++)if (r[f] === r[u]) {
            r.splice(u--, 1);
            break
        }
        return r
    }, has:function (n) {
        var t = i(n);
        return this.filter(function () {
            for (var n = 0, r = t.length; n < r; n++)if (i.contains(this, t[n]))return!0
        })
    }, not:function (n) {
        return this.pushStack(ni(this, n, !1), "not", n)
    }, filter:function (n) {
        return this.pushStack(ni(this, n, !0), "filter", n)
    }, is:function (n) {
        return!!n && (typeof n == "string" ? wt.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
    }, closest:function (n, t) {
        var f = [], u, s, r = this[0], e, o;
        if (i.isArray(n)) {
            for (e = 1; r && r.ownerDocument && r !== t;) {
                for (u = 0; u < n.length; u++)i(r).is(n[u]) && f.push({selector:n[u], elem:r, level:e});
                r = r.parentNode, e++
            }
            return f
        }
        for (o = wt.test(n) || typeof n != "string" ? i(n, t || this.context) : 0, u = 0, s = this.length; u < s; u++)for (r = this[u]; r;) {
            if (o ? o.index(r) > -1 : i.find.matchesSelector(r, n)) {
                f.push(r);
                break
            }
            if (r = r.parentNode, !r || !r.ownerDocument || r === t || r.nodeType === 11)break
        }
        return f = f.length > 1 ? i.unique(f) : f, this.pushStack(f, "closest", n)
    }, index:function (n) {
        return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
    }, add:function (n, t) {
        var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n), r = i.merge(this.get(), u);
        return this.pushStack(dt(u[0]) || dt(r[0]) ? r : i.unique(r))
    }, andSelf:function () {
        return this.add(this.prevObject)
    }}), i.each({parent:function (n) {
        var t = n.parentNode;
        return t && t.nodeType !== 11 ? t : null
    }, parents:function (n) {
        return i.dir(n, "parentNode")
    }, parentsUntil:function (n, t, r) {
        return i.dir(n, "parentNode", r)
    }, next:function (n) {
        return i.nth(n, 2, "nextSibling")
    }, prev:function (n) {
        return i.nth(n, 2, "previousSibling")
    }, nextAll:function (n) {
        return i.dir(n, "nextSibling")
    }, prevAll:function (n) {
        return i.dir(n, "previousSibling")
    }, nextUntil:function (n, t, r) {
        return i.dir(n, "nextSibling", r)
    }, prevUntil:function (n, t, r) {
        return i.dir(n, "previousSibling", r)
    }, siblings:function (n) {
        return i.sibling(n.parentNode.firstChild, n)
    }, children:function (n) {
        return i.sibling(n.firstChild)
    }, contents:function (n) {
        return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.makeArray(n.childNodes)
    }}, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return ne.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !fe[n] ? i.unique(f) : f, (this.length > 1 || df.test(u)) && te.test(n) && (f = f.reverse()), this.pushStack(f, n, ie.call(arguments).join(","))
        }
    }), i.extend({filter:function (n, t, r) {
        return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
    }, dir:function (n, r, u) {
        for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));)f.nodeType === 1 && e.push(f), f = f[r];
        return e
    }, nth:function (n, t, i) {
        t = t || 1;
        for (var u = 0; n; n = n[i])if (n.nodeType === 1 && ++u === t)break;
        return n
    }, sibling:function (n, t) {
        for (var i = []; n; n = n.nextSibling)n.nodeType === 1 && n !== t && i.push(n);
        return i
    }});
    var pt = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ee = / jQuery\d+="(?:\d+|null)"/g, ht = /^\s+/, hi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, si = /<([\w:]+)/, re = /<tbody/i, ue = /<|&#?\w+;/, kf = /<(?:script|style)/i, lf = /<(?:script|object|embed|option|style)/i, vi = new RegExp("<(?:" + pt + ")", "i"), ai = /checked\s*(?:[^=]|=\s*.checked.)/i, af = /\/(java|ecma)script/i, hf = /^\s*<!(?:\[CDATA\[|\-\-)/, u = {option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area:[1, "<map>", "</map>"], _default:[0, "", ""]}, li = ci(r);
    u.optgroup = u.option, u.tbody = u.tfoot = u.colgroup = u.caption = u.thead, u.th = u.td, i.support.htmlSerialize || (u._default = [1, "div<div>", "</div>"]), i.fn.extend({text:function (n) {
        return i.isFunction(n) ? this.each(function (t) {
            var r = i(this);
            r.text(n.call(this, t, r.text()))
        }) : typeof n != "object" && n !== t ? this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n)) : i.text(this)
    }, wrapAll:function (n) {
        if (i.isFunction(n))return this.each(function (t) {
            i(this).wrapAll(n.call(this, t))
        });
        if (this[0]) {
            var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(
                function () {
                    for (var n = this; n.firstChild && n.firstChild.nodeType === 1;)n = n.firstChild;
                    return n
                }).append(this)
        }
        return this
    }, wrapInner:function (n) {
        return i.isFunction(n) ? this.each(function (t) {
            i(this).wrapInner(n.call(this, t))
        }) : this.each(function () {
            var r = i(this), t = r.contents();
            t.length ? t.wrapAll(n) : r.append(n)
        })
    }, wrap:function (n) {
        var t = i.isFunction(n);
        return this.each(function (r) {
            i(this).wrapAll(t ? n.call(this, r) : n)
        })
    }, unwrap:function () {
        return this.parent().each(
            function () {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
    }, append:function () {
        return this.domManip(arguments, !0, function (n) {
            this.nodeType === 1 && this.appendChild(n)
        })
    }, prepend:function () {
        return this.domManip(arguments, !0, function (n) {
            this.nodeType === 1 && this.insertBefore(n, this.firstChild)
        })
    }, before:function () {
        if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (n) {
            this.parentNode.insertBefore(n, this)
        });
        if (arguments.length) {
            var n = i.clean(arguments);
            return n.push.apply(n, this.toArray()), this.pushStack(n, "before", arguments)
        }
    }, after:function () {
        if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (n) {
            this.parentNode.insertBefore(n, this.nextSibling)
        });
        if (arguments.length) {
            var n = this.pushStack(this, "after", arguments);
            return n.push.apply(n, i.clean(arguments)), n
        }
    }, remove:function (n, t) {
        for (var u = 0, r; (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (!t && r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
        return this
    }, empty:function () {
        for (var t = 0, n; (n = this[t]) != null; t++)for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;)n.removeChild(n.firstChild);
        return this
    }, clone:function (n, t) {
        return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
            return i.clone(this, n, t)
        })
    }, html:function (n) {
        if (n === t)return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(ee, "") : null;
        if (typeof n != "string" || kf.test(n) || !i.support.leadingWhitespace && ht.test(n) || u[(si.exec(n) || ["", ""])[1].toLowerCase()])i.isFunction(n) ? this.each(function (t) {
            var r = i(this);
            r.html(n.call(this, t, r.html()))
        }) : this.empty().append(n); else {
            n = n.replace(hi, "<$1></$2>");
            try {
                for (var r = 0, f = this.length; r < f; r++)this[r].nodeType === 1 && (i.cleanData(this[r].getElementsByTagName("*")), this[r].innerHTML = n)
            } catch (e) {
                this.empty().append(n)
            }
        }
        return this
    }, replaceWith:function (n) {
        return this[0] && this[0].parentNode ? i.isFunction(n) ? this.each(function (t) {
            var r = i(this), u = r.html();
            r.replaceWith(n.call(this, t, u))
        }) : (typeof n != "string" && (n = i(n).detach()), this.each(function () {
            var t = this.nextSibling, r = this.parentNode;
            i(this).remove(), t ? i(t).before(n) : i(r).append(n)
        })) : this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this
    }, detach:function (n) {
        return this.remove(n, !0)
    }, domManip:function (n, r, u) {
        var c, o, f, h, e = n[0], a = [];
        if (!i.support.checkClone && arguments.length === 3 && typeof e == "string" && ai.test(e))return this.each(function () {
            i(this).domManip(n, r, u, !0)
        });
        if (i.isFunction(e))return this.each(function (f) {
            var o = i(this);
            n[0] = e.call(this, f, r ? o.html() : t), o.domManip(n, r, u)
        });
        if (this[0]) {
            if (h = e && e.parentNode, c = i.support.parentNode && h && h.nodeType === 11 && h.childNodes.length === this.length ? {fragment:h} : i.buildFragment(n, this, a), f = c.fragment, o = f.childNodes.length === 1 ? f = f.firstChild : f.firstChild, o) {
                r = r && i.nodeName(o, "tr");
                for (var s = 0, l = this.length, v = l - 1; s < l; s++)u.call(r ? of(this[s], o) : this[s], c.cacheable || l > 1 && s < v ? i.clone(f, !0, !0) : f)
            }
            a.length && i.each(a, rf)
        }
        return this
    }}), i.buildFragment = function (n, t, u) {
        var o, h, s, e, f = n[0];
        return t && t[0] && (e = t[0].ownerDocument || t[0]), e.createDocumentFragment || (e = r), n.length === 1 && typeof f == "string" && f.length < 512 && e === r && f.charAt(0) === "<" && !lf.test(f) && (i.support.checkClone || !ai.test(f)) && (i.support.html5Clone || !vi.test(f)) && (h = !0, s = i.fragments[f], s && s !== 1 && (o = s)), o || (o = e.createDocumentFragment(), i.clean(n, e, o, u)), h && (i.fragments[f] = s ? o : 1), {fragment:o, cacheable:h}
    }, i.fragments = {}, i.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function (n, t) {
        i.fn[n] = function (r) {
            var o = [], u = i(r), s = this.length === 1 && this[0].parentNode, f, h, e;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && u.length === 1)return u[t](this[0]), this;
            for (f = 0, h = u.length; f < h; f++)e = (f > 0 ? this.clone(!0) : this).get(), i(u[f])[t](e), o = o.concat(e);
            return this.pushStack(o, n, u.selector)
        }
    }), i.extend({clone:function (n, t, r) {
        var f, e, u, o = i.support.html5Clone || !vi.test("<" + n.nodeName) ? n.cloneNode(!0) : ef(n);
        if ((!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))for (fi(n, o), f = g(n), e = g(o), u = 0; f[u]; ++u)e[u] && fi(f[u], e[u]);
        if (t && (ui(n, o), r))for (f = g(n), e = g(o), u = 0; f[u]; ++u)ui(f[u], e[u]);
        return f = e = null, o
    }, clean:function (n, t, f, e) {
        var p, s, l, h, o, y, a, w, k;
        for (t = t || r, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || r), s = [], h = 0; (o = n[h]) != null; h++)if (typeof o == "number" && (o += ""), o) {
            if (typeof o == "string")if (ue.test(o)) {
                o = o.replace(hi, "<$1></$2>");
                var b = (si.exec(o) || ["", ""])[1].toLowerCase(), v = u[b] || u._default, d = v[0], c = t.createElement("div");
                for (t === r ? li.appendChild(c) : ci(t).appendChild(c), c.innerHTML = v[1] + o + v[2]; d--;)c = c.lastChild;
                if (!i.support.tbody)for (y = re.test(o), a = b === "table" && !y ? c.firstChild && c.firstChild.childNodes : v[1] === "<table>" && !y ? c.childNodes : [], l = a.length - 1; l >= 0; --l)i.nodeName(a[l], "tbody") && !a[l].childNodes.length && a[l].parentNode.removeChild(a[l]);
                !i.support.leadingWhitespace && ht.test(o) && c.insertBefore(t.createTextNode(ht.exec(o)[0]), c.firstChild), o = c.childNodes
            } else o = t.createTextNode(o);
            if (!i.support.appendChecked)if (o[0] && typeof(w = o.length) == "number")for (l = 0; l < w; l++)nr(o[l]); else nr(o);
            o.nodeType ? s.push(o) : s = i.merge(s, o)
        }
        if (f)for (p = function (n) {
            return!n.type || af.test(n.type)
        }, h = 0; s[h]; h++)e && i.nodeName(s[h], "script") && (!s[h].type || s[h].type.toLowerCase() === "text/javascript") ? e.push(s[h].parentNode ? s[h].parentNode.removeChild(s[h]) : s[h]) : (s[h].nodeType === 1 && (k = i.grep(s[h].getElementsByTagName("script"), p), s.splice.apply(s, [h + 1, 0].concat(k))), f.appendChild(s[h]));
        return s
    }, cleanData:function (n) {
        for (var r, f, o = i.cache, s = i.event.special, h = i.support.deleteExpando, t, u, e = 0; (t = n[e]) != null; e++)if ((!t.nodeName || !i.noData[t.nodeName.toLowerCase()]) && (f = t[i.expando], f)) {
            if (r = o[f], r && r.events) {
                for (u in r.events)s[u] ? i.event.remove(t, u) : i.removeEvent(t, u, r.handle);
                r.handle && (r.handle.elem = null)
            }
            h ? delete t[i.expando] : t.removeAttribute && t.removeAttribute(i.expando), delete o[f]
        }
    }});
    var ot = /alpha\([^)]*\)/i, cf = /opacity=([^)]*)/, vf = /([A-Z]|^ms)/g, ii = /^-?\d+(?:px)?$/i, wf = /^-?\d/, bf = /^([\-+])=([\-+.\de]+)/, yf = {position:"absolute", visibility:"hidden", display:"block"}, pf = ["Left", "Right"], su = ["Top", "Bottom"], l, ei, oi;
    i.fn.css = function (n, r) {
        return arguments.length === 2 && r === t ? this : i.access(this, n, r, !0, function (n, r, u) {
            return u !== t ? i.style(n, r, u) : i.css(n, r)
        })
    }, i.extend({cssHooks:{opacity:{get:function (n, t) {
        if (t) {
            var i = l(n, "opacity", "opacity");
            return i === "" ? "1" : i
        }
        return n.style.opacity
    }}}, cssNumber:{fillOpacity:!0, fontWeight:!0, lineHeight:!0, opacity:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{float:i.support.cssFloat ? "cssFloat" : "styleFloat"}, style:function (n, r, u, f) {
        if (!!n && n.nodeType !== 3 && n.nodeType !== 8 && !!n.style) {
            var s, o, h = i.camelCase(r), c = n.style, e = i.cssHooks[h];
            if (r = i.cssProps[h] || h, u === t)return e && "get"in e && (s = e.get(n, !1, f)) !== t ? s : c[r];
            if (o = typeof u, o === "string" && (s = bf.exec(u)) && (u = +(s[1] + 1) * +s[2] + parseFloat(i.css(n, r)), o = "number"), u == null || o === "number" && isNaN(u))return;
            if (o === "number" && !i.cssNumber[h] && (u += "px"), !e || !("set"in e) || (u = e.set(n, u)) !== t)try {
                c[r] = u
            } catch (l) {
            }
        }
    }, css:function (n, r, u) {
        var e, f;
        return(r = i.camelCase(r), f = i.cssHooks[r], r = i.cssProps[r] || r, r === "cssFloat" && (r = "float"), f && "get"in f && (e = f.get(n, !0, u)) !== t) ? e : l ? l(n, r) : void 0
    }, swap:function (n, t, i) {
        var u = {}, r;
        for (r in t)u[r] = n.style[r], n.style[r] = t[r];
        i.call(n);
        for (r in t)n.style[r] = u[r]
    }}), i.curCSS = i.css, i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {get:function (n, r, u) {
            var f;
            if (r)return n.offsetWidth !== 0 ? vr(n, t, u) : (i.swap(n, yf, function () {
                f = vr(n, t, u)
            }), f)
        }, set:function (n, t) {
            return ii.test(t) ? (t = parseFloat(t), t >= 0 ? t + "px" : void 0) : t
        }}
    }), i.support.opacity || (i.cssHooks.opacity = {get:function (n, t) {
        return cf.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
    }, set:function (n, t) {
        var f = n.style, u = n.currentStyle, e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", r = u && u.filter || f.filter || "";
        (f.zoom = 1, t >= 1 && i.trim(r.replace(ot, "")) === "" && (f.removeAttribute("filter"), u && !u.filter)) || (f.filter = ot.test(r) ? r.replace(ot, e) : r + " " + e)
    }}), i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {get:function (n, t) {
            var r;
            return i.swap(n, {display:"inline-block"}, function () {
                r = t ? l(n, "margin-right", "marginRight") : n.style.marginRight
            }), r
        }})
    }), r.defaultView && r.defaultView.getComputedStyle && (ei = function (n, t) {
        var r, f, u;
        return t = t.replace(vf, "-$1").toLowerCase(), (f = n.ownerDocument.defaultView) && (u = f.getComputedStyle(n, null)) && (r = u.getPropertyValue(t), r === "" && !i.contains(n.ownerDocument.documentElement, n) && (r = i.style(n, t))), r
    }), r.documentElement.currentStyle && (oi = function (n, t) {
        var e, u, f, i = n.currentStyle && n.currentStyle[t], r = n.style;
        return i === null && r && (f = r[t]) && (i = f), !ii.test(i) && wf.test(i) && (e = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i || 0, i = r.pixelLeft + "px", r.left = e, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
    }), l = ei || oi, i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        var r = n.offsetWidth, t = n.offsetHeight;
        return r === 0 && t === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || i.css(n, "display")) === "none"
    }, i.expr.filters.visible = function (n) {
        return!i.expr.filters.hidden(n)
    });
    var kr = /%20/g, dr = /\[\]$/, ri = /\r?\n/g, uu = /#.*$/, ou = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, eu = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, ru = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, nu = /^(?:GET|HEAD)$/, gr = /^\/\//, yt = /\?/, br = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, tu = /^(?:select|textarea)/i, lt = /\s+/, iu = /([?&])_=[^&]*/, at = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, vt = i.fn.load, st = {}, ti = {}, s, o, ar = ["*/"] + ["*"];
    try {
        s = ku.href
    } catch (oe) {
        s = r.createElement("a"), s.href = "", s = s.href
    }
    o = at.exec(s.toLowerCase()) || [], i.fn.extend({load:function (n, r, u) {
        var f, s, o, e;
        return typeof n != "string" && vt ? vt.apply(this, arguments) : this.length ? (f = n.indexOf(" "), f >= 0 && (s = n.slice(f, n.length), n = n.slice(0, f)), o = "GET", r && (i.isFunction(r) ? (u = r, r = t) : typeof r == "object" && (r = i.param(r, i.ajaxSettings.traditional), o = "POST")), e = this, i.ajax({url:n, type:o, dataType:"html", data:r, complete:function (n, t, r) {
            r = n.responseText, n.isResolved() && (n.done(function (n) {
                r = n
            }), e.html(s ? i("<div>").append(r.replace(br, "")).find(s) : r)), u && e.each(u, [r, t, n])
        }}), this) : this
    }, serialize:function () {
        return i.param(this.serializeArray())
    }, serializeArray:function () {
        return this.map(
            function () {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(
            function () {
                return this.name && !this.disabled && (this.checked || tu.test(this.nodeName) || eu.test(this.type))
            }).map(
            function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return{name:t.name, value:n.replace(ri, "\r\n")}
                }) : {name:t.name, value:r.replace(ri, "\r\n")}
            }).get()
    }}), i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    }), i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({type:r, url:n, data:u, success:f, dataType:e})
        }
    }), i.extend({getScript:function (n, r) {
        return i.get(n, t, r, "script")
    }, getJSON:function (n, t, r) {
        return i.get(n, t, r, "json")
    }, ajaxSetup:function (n, t) {
        return t ? yi(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), yi(n, t), n
    }, ajaxSettings:{url:s, isLocal:ru.test(o[1]), global:!0, type:"GET", contentType:"application/x-www-form-urlencoded", processData:!0, async:!0, accepts:{xml:"application/xml, text/xml", html:"text/html", text:"text/plain", json:"application/json, text/javascript", "*":ar}, contents:{xml:/xml/, html:/html/, json:/json/}, responseFields:{xml:"responseXML", text:"responseText"}, converters:{"* text":n.String, "text html":!0, "text json":i.parseJSON, "text xml":i.parseXML}, flatOptions:{context:!0, url:!0}}, ajaxPrefilter:er(st), ajaxTransport:er(ti), ajax:function (n, r) {
        function w(n, r, o, l) {
            if (e !== 2) {
                e = 2, k && clearTimeout(k), c = t, nt = l || "", f.readyState = n > 0 ? 4 : 0;
                var y, g, w, a = r, ut = o ? gu(u, f, o) : t, it, tt;
                if (n >= 200 && n < 300 || n === 304)if (u.ifModified && ((it = f.getResponseHeader("Last-Modified")) && (i.lastModified[s] = it), (tt = f.getResponseHeader("Etag")) && (i.etag[s] = tt)), n === 304)a = "notmodified", y = !0; else try {
                    g = du(u, ut), a = "success", y = !0
                } catch (ft) {
                    a = "parsererror", w = ft
                } else w = a, (!a || n) && (a = "error", n < 0 && (n = 0));
                f.status = n, f.statusText = "" + (r || a), y ? b.resolveWith(h, [g, a, f]) : b.rejectWith(h, [f, a, w]), f.statusCode(p), p = t, v && d.trigger("ajax" + (y ? "Success" : "Error"), [f, u, y ? g : w]), rt.fireWith(h, [f, a]), v && (d.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop"))
            }
        }

        var it, g;
        typeof n == "object" && (r = n, n = t), r = r || {};
        var u = i.ajaxSetup({}, r), h = u.context || u, d = h !== u && (h.nodeType || h instanceof i) ? i(h) : i.event, b = i.Deferred(), rt = i.Callbacks("once memory"), p = u.statusCode || {}, s, ut = {}, ft = {}, nt, y, c, k, l, e = 0, v, a, f = {readyState:0, setRequestHeader:function (n, t) {
            if (!e) {
                var i = n.toLowerCase();
                n = ft[i] = ft[i] || n, ut[n] = t
            }
            return this
        }, getAllResponseHeaders:function () {
            return e === 2 ? nt : null
        }, getResponseHeader:function (n) {
            var i;
            if (e === 2) {
                if (!y)for (y = {}; i = ou.exec(nt);)y[i[1].toLowerCase()] = i[2];
                i = y[n.toLowerCase()]
            }
            return i === t ? null : i
        }, overrideMimeType:function (n) {
            return e || (u.mimeType = n), this
        }, abort:function (n) {
            return n = n || "abort", c && c.abort(n), w(0, n), this
        }};
        if (b.promise(f), f.success = f.done, f.error = f.fail, f.complete = rt.add, f.statusCode = function (n) {
            if (n) {
                var t;
                if (e < 2)for (t in n)p[t] = [p[t], n[t]]; else t = n[f.status], f.then(t, t)
            }
            return this
        }, u.url = ((n || u.url) + "").replace(uu, "").replace(gr, o[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(lt), u.crossDomain == null && (l = at.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] == o[1] && l[2] == o[2] && (l[3] || (l[1] === "http:" ? 80 : 443)) == (o[3] || (o[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), tt(st, u, r, f), e === 2)return!1;
        v = u.global, u.type = u.type.toUpperCase(), u.hasContent = !nu.test(u.type), v && i.active++ == 0 && i.event.trigger("ajaxStart"), u.hasContent || (u.data && (u.url += (yt.test(u.url) ? "&" : "?") + u.data, delete u.data), s = u.url, u.cache === !1 && (it = i.now(), g = u.url.replace(iu, "$1_=" + it), u.url = g + (g === u.url ? (yt.test(u.url) ? "&" : "?") + "_=" + it : ""))), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), u.ifModified && (s = s || u.url, i.lastModified[s] && f.setRequestHeader("If-Modified-Since", i.lastModified[s]), i.etag[s] && f.setRequestHeader("If-None-Match", i.etag[s])), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + ar + "; q=0.01" : "") : u.accepts["*"]);
        for (a in u.headers)f.setRequestHeader(a, u.headers[a]);
        if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || e === 2))return f.abort(), !1;
        for (a in{success:1, error:1, complete:1})f[a](u[a]);
        if (c = tt(ti, u, r, f), c) {
            f.readyState = 1, v && d.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (k = setTimeout(function () {
                f.abort("timeout")
            }, u.timeout));
            try {
                e = 1, c.send(ut, w)
            } catch (et) {
                if (e < 2)w(-1, et); else throw et;
            }
        } else w(-1, "No Transport");
        return f
    }, param:function (n, r) {
        var f = [], e = function (n, t) {
            t = i.isFunction(t) ? t() : t, f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        }, u;
        if (r === t && (r = i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n))i.each(n, function () {
            e(this.name, this.value)
        }); else for (u in n)rt(u, n[u], r, e);
        return f.join("&").replace(kr, "+")
    }}), i.extend({active:0, lastModified:{}, etag:{}}), yr = i.now(), y = /(\=)\?(&|$)|\?\?/i, i.ajaxSetup({jsonp:"callback", jsonpCallback:function () {
        return i.expando + "_" + yr++
    }}), i.ajaxPrefilter("json jsonp", function (t, r, u) {
        var l = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (y.test(t.url) || l && y.test(t.data))) {
            var o, f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, c = n[f], e = t.url, s = t.data, h = "$1" + f + "$2";
            return t.jsonp !== !1 && (e = e.replace(y, h), t.url === e && (l && (s = s.replace(y, h)), t.data === s && (e += (/\?/.test(e) ? "&" : "?") + t.jsonp + "=" + f))), t.url = e, t.data = s, n[f] = function (n) {
                o = [n]
            }, u.always(function () {
                n[f] = c, o && i.isFunction(c) && n[f](o[0])
            }), t.converters["script json"] = function () {
                return o || i.error(f + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), i.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/javascript|ecmascript/}, converters:{"text script":function (n) {
        return i.globalEval(n), n
    }}}), i.ajaxPrefilter("script", function (n) {
        n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
            return{send:function (f, e) {
                i = r.createElement("script"), i.async = "async", n.scriptCharset && (i.charset = n.scriptCharset), i.src = n.url, i.onload = i.onreadystatechange = function (n, r) {
                    (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                }, u.insertBefore(i, u.firstChild)
            }, abort:function () {
                i && i.onload(0, 1)
            }}
        }
    }), k = n.ActiveXObject ? function () {
        for (var n in a)a[n](0, 1)
    } : !1, ki = 0, i.ajaxSettings.xhr = n.ActiveXObject ? function () {
        return!this.isLocal && ur() || tf()
    } : ur, function (n) {
        i.extend(i.support, {ajax:!!n, cors:!!n && "withCredentials"in n})
    }(i.ajaxSettings.xhr()), i.support.ajax && i.ajaxTransport(function (r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return{send:function (f, e) {
                var o = r.xhr(), h, s;
                if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)for (s in r.xhrFields)o[s] = r.xhrFields[s];
                r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), !r.crossDomain && !f["X-Requested-With"] && (f["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in f)o.setRequestHeader(s, f[s])
                } catch (c) {
                }
                o.send(r.hasContent && r.data || null), u = function (n, f) {
                    var c, v, y, s, l;
                    try {
                        if (u && (f || o.readyState === 4))if (u = t, h && (o.onreadystatechange = i.noop, k && delete a[h]), f)o.readyState !== 4 && o.abort(); else {
                            c = o.status, y = o.getAllResponseHeaders(), s = {}, l = o.responseXML, l && l.documentElement && (s.xml = l), s.text = o.responseText;
                            try {
                                v = o.statusText
                            } catch (w) {
                                v = ""
                            }
                            !c && r.isLocal && !r.crossDomain ? c = s.text ? 200 : 404 : c === 1223 && (c = 204)
                        }
                    } catch (p) {
                        f || e(-1, p)
                    }
                    s && e(c, v, s, y)
                }, !r.async || o.readyState === 4 ? u() : (h = ++ki, k && (a || (a = {}, i(n).unload(k)), a[h] = u), o.onreadystatechange = u)
            }, abort:function () {
                u && u(0, 1)
            }}
        }
    });
    var ut = {}, f, h, fu = /^(?:toggle|show|hide)$/, wr = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, nt, tr = [
        ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
        ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
        ["opacity"]
    ], p;
    i.fn.extend({show:function (n, t, r) {
        var u, e, f, o;
        if (n || n === 0)return this.animate(v("show", 3), n, t, r);
        for (f = 0, o = this.length; f < o; f++)u = this[f], u.style && (e = u.style.display, !i._data(u, "olddisplay") && e === "none" && (e = u.style.display = ""), e === "" && i.css(u, "display") === "none" && i._data(u, "olddisplay", bt(u.nodeName)));
        for (f = 0; f < o; f++)u = this[f], u.style && (e = u.style.display, (e === "" || e === "none") && (u.style.display = i._data(u, "olddisplay") || ""));
        return this
    }, hide:function (n, t, r) {
        if (n || n === 0)return this.animate(v("hide", 3), n, t, r);
        for (var f, e, u = 0, o = this.length; u < o; u++)f = this[u], f.style && (e = i.css(f, "display"), e !== "none" && !i._data(f, "olddisplay") && i._data(f, "olddisplay", e));
        for (u = 0; u < o; u++)this[u].style && (this[u].style.display = "none");
        return this
    }, _toggle:i.fn.toggle, toggle:function (n, t, r) {
        var u = typeof n == "boolean";
        return i.isFunction(n) && i.isFunction(t) ? this._toggle.apply(this, arguments) : n == null || u ? this.each(function () {
            var t = u ? n : i(this).is(":hidden");
            i(this)[t ? "show" : "hide"]()
        }) : this.animate(v("toggle", 3), n, t, r), this
    }, fadeTo:function (n, t, i, r) {
        return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity:t}, n, i, r)
    }, animate:function (n, t, r, u) {
        function e() {
            f.queue === !1 && i._mark(this);
            var u = i.extend({}, f), y = this.nodeType === 1, v = y && i(this).is(":hidden"), e, t, r, s, c, o, h, l, a;
            u.animatedProperties = {};
            for (r in n) {
                if (e = i.camelCase(r), r !== e && (n[e] = n[r], delete n[r]), t = n[e], i.isArray(t) ? (u.animatedProperties[e] = t[1], t = n[e] = t[0]) : u.animatedProperties[e] = u.specialEasing && u.specialEasing[e] || u.easing || "swing", t === "hide" && v || t === "show" && !v)return u.complete.call(this);
                y && (e === "height" || e === "width") && (u.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], i.css(this, "display") === "inline" && i.css(this, "float") === "none" && (!i.support.inlineBlockNeedsLayout || bt(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
            }
            u.overflow != null && (this.style.overflow = "hidden");
            for (r in n)s = new i.fx(this, u, r), t = n[r], fu.test(t) ? (a = i._data(this, "toggle" + r) || (t === "toggle" ? v ? "show" : "hide" : 0), a ? (i._data(this, "toggle" + r, a === "show" ? "hide" : "show"), s[a]()) : s[t]()) : (c = wr.exec(t), o = s.cur(), c ? (h = parseFloat(c[2]), l = c[3] || (i.cssNumber[r] ? "" : "px"), l !== "px" && (i.style(this, r, (h || 1) + l), o = (h || 1) / s.cur() * o, i.style(this, r, o + l)), c[1] && (h = (c[1] === "-=" ? -1 : 1) * h + o), s.custom(o, h, l)) : s.custom(o, t, ""));
            return!0
        }

        var f = i.speed(t, r, u);
        return i.isEmptyObject(n) ? this.each(f.complete, [!1]) : (n = i.extend({}, n), f.queue === !1 ? this.each(e) : this.queue(f.queue, e))
    }, stop:function (n, r, u) {
        return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function () {
            function e(n, t, r) {
                var f = t[r];
                i.removeData(n, r, !0), f.stop(u)
            }

            var t, o = !1, f = i.timers, r = i._data(this);
            if (u || i._unmark(!0, this), n == null)for (t in r)r[t] && r[t].stop && t.indexOf(".run") === t.length - 4 && e(this, r, t); else r[t = n + ".run"] && r[t].stop && e(this, r, t);
            for (t = f.length; t--;)f[t].elem === this && (n == null || f[t].queue === n) && (u ? f[t](!0) : f[t].saveState(), o = !0, f.splice(t, 1));
            (!u || !o) && i.dequeue(this, n)
        })
    }}), i.each({slideDown:v("show", 1), slideUp:v("hide", 1), slideToggle:v("toggle", 1), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    }), i.extend({speed:function (n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {complete:r || !r && t || i.isFunction(n) && n, duration:n, easing:r && t || t && !i.isFunction(t) && t};
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function (n) {
            i.isFunction(u.old) && u.old.call(this), u.queue ? i.dequeue(this, u.queue) : n !== !1 && i._unmark(this)
        }, u
    }, easing:{linear:function (n, t, i, r) {
        return i + r * n
    }, swing:function (n, t, i, r) {
        return(-Math.cos(n * Math.PI) / 2 + .5) * r + i
    }}, timers:[], fx:function (n, t, i) {
        this.options = t, this.elem = n, this.prop = i, t.orig = t.orig || {}
    }}), i.fx.prototype = {update:function () {
        this.options.step && this.options.step.call(this.elem, this.now, this), (i.fx.step[this.prop] || i.fx.step._default)(this)
    }, cur:function () {
        if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))return this.elem[this.prop];
        var t, n = i.css(this.elem, this.prop);
        return isNaN(t = parseFloat(n)) ? !n || n === "auto" ? 0 : n : t
    }, custom:function (n, r, u) {
        function e(n) {
            return f.step(n)
        }

        var f = this, o = i.fx;
        this.startTime = p || bi(), this.end = r, this.now = this.start = n, this.pos = this.state = 0, this.unit = u || this.unit || (i.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function () {
            f.options.hide && i._data(f.elem, "fxshow" + f.prop) === t && i._data(f.elem, "fxshow" + f.prop, f.start)
        }, e() && i.timers.push(e) && !nt && (nt = setInterval(o.tick, o.interval))
    }, show:function () {
        var n = i._data(this.elem, "fxshow" + this.prop);
        this.options.orig[this.prop] = n || i.style(this.elem, this.prop), this.options.show = !0, n !== t ? this.custom(this.cur(), n) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), i(this.elem).show()
    }, hide:function () {
        this.options.orig[this.prop] = i._data(this.elem, "fxshow" + this.prop) || i.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
    }, step:function (n) {
        var r, e, f, o = p || bi(), s = !0, u = this.elem, t = this.options;
        if (n || o >= t.duration + this.startTime) {
            this.now = this.end, this.pos = this.state = 1, this.update(), t.animatedProperties[this.prop] = !0;
            for (r in t.animatedProperties)t.animatedProperties[r] !== !0 && (s = !1);
            if (s) {
                if (t.overflow != null && !i.support.shrinkWrapBlocks && i.each(["", "X", "Y"], function (n, i) {
                    u.style["overflow" + i] = t.overflow[n]
                }), t.hide && i(u).hide(), t.hide || t.show)for (r in t.animatedProperties)i.style(u, r, t.orig[r]), i.removeData(u, "fxshow" + r, !0), i.removeData(u, "toggle" + r, !0);
                f = t.complete, f && (t.complete = !1, f.call(u))
            }
            return!1
        }
        return t.duration == Infinity ? this.now = o : (e = o - this.startTime, this.state = e / t.duration, this.pos = i.easing[t.animatedProperties[this.prop]](this.state, e, 0, 1, t.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
    }}, i.extend(i.fx, {tick:function () {
        for (var r, t = i.timers, n = 0; n < t.length; n++)r = t[n], !r() && t[n] === r && t.splice(n--, 1);
        t.length || i.fx.stop()
    }, interval:13, stop:function () {
        clearInterval(nt), nt = null
    }, speeds:{slow:600, fast:200, _default:400}, step:{opacity:function (n) {
        i.style(n.elem, "opacity", n.now)
    }, _default:function (n) {
        n.elem.style && n.elem.style[n.prop] != null ? n.elem.style[n.prop] = n.now + n.unit : n.elem[n.prop] = n.now
    }}}), i.each(["width", "height"], function (n, t) {
        i.fx.step[t] = function (n) {
            i.style(n.elem, t, Math.max(0, n.now) + n.unit)
        }
    }), i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers,
            function (t) {
                return n === t.elem
            }).length
    }), di = /^t(?:able|d|h)$/i, it = /^(?:body|html)$/i, i.fn.offset = "getBoundingClientRect"in r.documentElement ? function (n) {
        var t = this[0], r, e, u;
        if (n)return this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        if (!t || !t.ownerDocument)return null;
        if (t === t.ownerDocument.body)return i.offset.bodyOffset(t);
        try {
            r = t.getBoundingClientRect()
        } catch (y) {
        }
        if (e = t.ownerDocument, u = e.documentElement, !r || !i.contains(u, t))return r ? {top:r.top, left:r.left} : {top:0, left:0};
        var f = e.body, o = et(e), l = u.clientTop || f.clientTop || 0, a = u.clientLeft || f.clientLeft || 0, v = o.pageYOffset || i.support.boxModel && u.scrollTop || f.scrollTop, s = o.pageXOffset || i.support.boxModel && u.scrollLeft || f.scrollLeft, h = r.top + v - l, c = r.left + s - a;
        return{top:h, left:c}
    } : function (n) {
        var t = this[0];
        if (n)return this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        if (!t || !t.ownerDocument)return null;
        if (t === t.ownerDocument.body)return i.offset.bodyOffset(t);
        for (var f, h = t.offsetParent, a = t, l = t.ownerDocument, c = l.documentElement, o = l.body, s = l.defaultView, e = s ? s.getComputedStyle(t, null) : t.currentStyle, u = t.offsetTop, r = t.offsetLeft; (t = t.parentNode) && t !== o && t !== c;) {
            if (i.support.fixedPosition && e.position === "fixed")break;
            f = s ? s.getComputedStyle(t, null) : t.currentStyle, u -= t.scrollTop, r -= t.scrollLeft, t === h && (u += t.offsetTop, r += t.offsetLeft, i.support.doesNotAddBorder && (!i.support.doesAddBorderForTableAndCells || !di.test(t.nodeName)) && (u += parseFloat(f.borderTopWidth) || 0, r += parseFloat(f.borderLeftWidth) || 0), a = h, h = t.offsetParent), i.support.subtractsBorderForOverflowNotVisible && f.overflow !== "visible" && (u += parseFloat(f.borderTopWidth) || 0, r += parseFloat(f.borderLeftWidth) || 0), e = f
        }
        return(e.position === "relative" || e.position === "static") && (u += o.offsetTop, r += o.offsetLeft), i.support.fixedPosition && e.position === "fixed" && (u += Math.max(c.scrollTop, o.scrollTop), r += Math.max(c.scrollLeft, o.scrollLeft)), {top:u, left:r}
    }, i.offset = {bodyOffset:function (n) {
        var r = n.offsetTop, t = n.offsetLeft;
        return i.support.doesNotIncludeMarginInBodyOffset && (r += parseFloat(i.css(n, "marginTop")) || 0, t += parseFloat(i.css(n, "marginLeft")) || 0), {top:r, left:t}
    }, setOffset:function (n, t, r) {
        var s = i.css(n, "position");
        s === "static" && (n.style.position = "relative");
        var h = i(n), c = h.offset(), l = i.css(n, "top"), a = i.css(n, "left"), v = (s === "absolute" || s === "fixed") && i.inArray("auto", [l, a]) > -1, u = {}, e = {}, f, o;
        v ? (e = h.position(), f = e.top, o = e.left) : (f = parseFloat(l) || 0, o = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, c)), t.top != null && (u.top = t.top - c.top + f), t.left != null && (u.left = t.left - c.left + o), "using"in t ? t.using.call(n, u) : h.css(u)
    }}, i.fn.extend({position:function () {
        if (!this[0])return null;
        var u = this[0], r = this.offsetParent(), n = this.offset(), t = it.test(r[0].nodeName) ? {top:0, left:0} : r.offset();
        return n.top -= parseFloat(i.css(u, "marginTop")) || 0, n.left -= parseFloat(i.css(u, "marginLeft")) || 0, t.top += parseFloat(i.css(r[0], "borderTopWidth")) || 0, t.left += parseFloat(i.css(r[0], "borderLeftWidth")) || 0, {top:n.top - t.top, left:n.left - t.left}
    }, offsetParent:function () {
        return this.map(function () {
            for (var n = this.offsetParent || r.body; n && !it.test(n.nodeName) && i.css(n, "position") === "static";)n = n.offsetParent;
            return n
        })
    }}), i.each(["Left", "Top"], function (n, r) {
        var u = "scroll" + r;
        i.fn[u] = function (r) {
            var e, f;
            return r === t ? (e = this[0], !e) ? null : (f = et(e), f ? "pageXOffset"in f ? f[n ? "pageYOffset" : "pageXOffset"] : i.support.boxModel && f.document.documentElement[u] || f.document.body[u] : e[u]) : this.each(function () {
                f = et(this), f ? f.scrollTo(n ? i(f).scrollLeft() : r, n ? r : i(f).scrollTop()) : this[u] = r
            })
        }
    }), i.each(["Height", "Width"], function (n, r) {
        var u = r.toLowerCase();
        i.fn["inner" + r] = function () {
            var n = this[0];
            return n ? n.style ? parseFloat(i.css(n, u, "padding")) : this[u]() : null
        }, i.fn["outer" + r] = function (n) {
            var t = this[0];
            return t ? t.style ? parseFloat(i.css(t, u, n ? "margin" : "border")) : this[u]() : null
        }, i.fn[u] = function (n) {
            var f = this[0], s, h, e, o;
            return f ? i.isFunction(n) ? this.each(function (t) {
                var r = i(this);
                r[u](n.call(this, t, r[u]()))
            }) : i.isWindow(f) ? (s = f.document.documentElement["client" + r], h = f.document.body, f.document.compatMode === "CSS1Compat" && s || h && h["client" + r] || s) : f.nodeType === 9 ? Math.max(f.documentElement["client" + r], f.body["scroll" + r], f.documentElement["scroll" + r], f.body["offset" + r], f.documentElement["offset" + r]) : n === t ? (e = i.css(f, u), o = parseFloat(e), i.isNumeric(o) ? o : e) : this.css(u, typeof n == "string" ? n : n + "px") : n == null ? null : this
        }
    }), n.jQuery = n.$ = i, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return i
    })
})(window), function (n) {
    n.extend(n.fn, {validate:function (t) {
        if (this.length) {
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (t = this.find("input, button"), t.filter(".cancel").click(function () {
                i.cancelSubmit = !0
            }), i.settings.submitHandler && t.filter(":submit").click(function () {
                i.submitButton = this
            }), this.submit(function (t) {
                function r() {
                    if (i.settings.submitHandler) {
                        if (i.submitButton)var t = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(i.submitButton.value).appendTo(i.currentForm);
                        return i.settings.submitHandler.call(i, i.currentForm), i.submitButton && t.remove(), !1
                    }
                    return!0
                }

                return(i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        }
        t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
    }, valid:function () {
        if (n(this[0]).is("form"))return this.validate().form();
        var t = !0, i = n(this[0].form).validate();
        return this.each(function () {
            t &= i.element(this)
        }), t
    }, removeAttrs:function (t) {
        var r = {}, i = this;
        return n.each(t.split(/\s/), function (n, t) {
            r[t] = i.attr(t), i.removeAttr(t)
        }), r
    }, rules:function (t, i) {
        var r = this[0], e;
        if (t) {
            var f = n.data(r.form, "validator").settings, o = f.rules, u = n.validator.staticRules(r);
            switch (t) {
                case"add":
                    n.extend(u, n.validator.normalizeRule(i)), o[r.name] = u, i.messages && (f.messages[r.name] = n.extend(f.messages[r.name], i.messages));
                    break;
                case"remove":
                    return i ? (e = {}, n.each(i.split(/\s/), function (n, t) {
                        e[t] = u[t], delete u[t]
                    }), e) : (delete o[r.name], u)
            }
        }
        return r = n.validator.normalizeRules(n.extend({}, n.validator.metadataRules(r), n.validator.classRules(r), n.validator.attributeRules(r), n.validator.staticRules(r)), r), r.required && (f = r.required, delete r.required, r = n.extend({required:f}, r)), r
    }}), n.extend(n.expr[":"], {blank:function (t) {
        return!n.trim("" + t.value)
    }, filled:function (t) {
        return!!n.trim("" + t.value)
    }, unchecked:function (n) {
        return!n.checked
    }}), n.validator = function (t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t), this.currentForm = i, this.init()
    }, n.validator.format = function (t, i) {
        return arguments.length == 1 ? function () {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor != Array && (i = n.makeArray(arguments).slice(1)), i.constructor != Array && (i = [i]), n.each(i, function (n, i) {
            t = t.replace(RegExp("\\{" + n + "\\}", "g"), i)
        }), t)
    }, n.extend(n.validator, {defaults:{messages:{}, groups:{}, rules:{}, errorClass:"error", validClass:"valid", errorElement:"label", focusInvalid:!0, errorContainer:n([]), errorLabelContainer:n([]), onsubmit:!0, ignore:":hidden", ignoreTitle:!1, onfocusin:function (n) {
        this.lastActive = n, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
    }, onfocusout:function (n) {
        !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
    }, onkeyup:function (n) {
        (n.name in this.submitted || n == this.lastElement) && this.element(n)
    }, onclick:function (n) {
        n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
    }, highlight:function (t, i, r) {
        t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
    }, unhighlight:function (t, i, r) {
        t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
    }}, setDefaults:function (t) {
        n.extend(n.validator.defaults, t)
    }, messages:{required:"This field is required.", remote:"Please fix this field.", email:"Please enter a valid email address.", url:"Please enter a valid URL.", date:"Please enter a valid date.", dateISO:"Please enter a valid date (ISO).", number:"Please enter a valid number.", digits:"Please enter only digits.", creditcard:"Please enter a valid credit card number.", equalTo:"Please enter the same value again.", accept:"Please enter a value with a valid extension.", maxlength:n.validator.format("Please enter no more than {0} characters."), minlength:n.validator.format("Please enter at least {0} characters."), rangelength:n.validator.format("Please enter a value between {0} and {1} characters long."), range:n.validator.format("Please enter a value between {0} and {1}."), max:n.validator.format("Please enter a value less than or equal to {0}."), min:n.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges:!1, prototype:{init:function () {
        function i(t) {
            var i = n.data(this[0].form, "validator"), r = "on" + t.type.replace(/^validate/, "");
            i.settings[r] && i.settings[r].call(i, this[0], t)
        }

        var r, t;
        this.labelContainer = n(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm), this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset(), r = this.groups = {}, n.each(this.settings.groups, function (t, i) {
            n.each(i.split(/\s/), function (n, i) {
                r[i] = t
            })
        }), t = this.settings.rules, n.each(t, function (i, r) {
            t[i] = n.validator.normalizeRule(r)
        }), n(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i), this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
    }, form:function () {
        return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
    }, checkForm:function () {
        this.prepareForm();
        for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++)this.check(t[n]);
        return this.valid()
    }, element:function (t) {
        this.lastElement = t = this.validationTargetFor(this.clean(t)), this.prepareElement(t), this.currentElements = n(t);
        var i = this.check(t);
        return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
    }, showErrors:function (t) {
        if (t) {
            n.extend(this.errorMap, t), this.errorList = [];
            for (var i in t)this.errorList.push({message:t[i], element:this.findByName(i)[0]});
            this.successList = n.grep(this.successList, function (n) {
                return!(n.name in t)
            })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
    }, resetForm:function () {
        n.fn.resetForm && n(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass)
    }, numberOfInvalids:function () {
        return this.objectLength(this.invalid)
    }, objectLength:function (n) {
        var t = 0, i;
        for (i in n)t++;
        return t
    }, hideErrors:function () {
        this.addWrapper(this.toHide).hide()
    }, valid:function () {
        return this.size() == 0
    }, size:function () {
        return this.errorList.length
    }, focusInvalid:function () {
        if (this.settings.focusInvalid)try {
            n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (t) {
        }
    }, findLastActive:function () {
        var t = this.lastActive;
        return t && n.grep(this.errorList,
            function (n) {
                return n.element.name == t.name
            }).length == 1 && t
    }, elements:function () {
        var i = this, t = {};
        return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
            return(!this.name && i.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in t || !i.objectLength(n(this).rules())) ? !1 : t[this.name] = !0
        })
    }, clean:function (t) {
        return n(t)[0]
    }, errors:function () {
        return n(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
    }, reset:function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = n([]), this.toHide = n([]), this.currentElements = n([])
    }, prepareForm:function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
    }, prepareElement:function (n) {
        this.reset(), this.toHide = this.errorsFor(n)
    }, check:function (t) {
        var f, e, u, i, r;
        t = this.validationTargetFor(this.clean(t)), f = n(t).rules(), e = !1;
        for (u in f) {
            i = {method:u, parameters:f[u]};
            try {
                if (r = n.validator.methods[u].call(this, t.value.replace(/\r/g, ""), t, i.parameters), r == "dependency-mismatch")e = !0; else {
                    if (e = !1, r == "pending") {
                        this.toHide = this.toHide.not(this.errorsFor(t));
                        return
                    }
                    if (!r)return this.formatAndAdd(t, i), !1
                }
            } catch (o) {
                this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + i.method + "' method", o);
                throw o;
            }
        }
        if (!e)return this.objectLength(f) && this.successList.push(t), !0
    }, customMetaMessage:function (t, i) {
        if (n.metadata) {
            var r = this.settings.meta ? n(t).metadata()[this.settings.meta] : n(t).metadata();
            return r && r.messages && r.messages[i]
        }
    }, customMessage:function (n, t) {
        var i = this.settings.messages[n];
        return i && (i.constructor == String ? i : i[t])
    }, findDefined:function () {
        for (var n = 0; n < arguments.length; n++)if (arguments[n] !== undefined)return arguments[n]
    }, defaultMessage:function (t, i) {
        return this.findDefined(this.customMessage(t.name, i), this.customMetaMessage(t, i), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
    }, formatAndAdd:function (n, t) {
        var i = this.defaultMessage(n, t.method), r = /\$?\{(\d+)\}/g;
        typeof i == "function" ? i = i.call(this, t.parameters, n) : r.test(i) && (i = jQuery.format(i.replace(r, "{$1}"), t.parameters)), this.errorList.push({message:i, element:n}), this.errorMap[n.name] = i, this.submitted[n.name] = i
    }, addWrapper:function (n) {
        return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
    }, defaultShowErrors:function () {
        for (var t, n = 0; this.errorList[n]; n++)t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (n = 0; this.successList[n]; n++)this.showLabel(this.successList[n]);
        if (this.settings.unhighlight)for (n = 0, t = this.validElements(); t[n]; n++)this.settings.unhighlight.call(this, t[n], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
    }, validElements:function () {
        return this.currentElements.not(this.invalidElements())
    }, invalidElements:function () {
        return n(this.errorList).map(function () {
            return this.element
        })
    }, showLabel:function (t, i) {
        var r = this.errorsFor(t);
        r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.attr("generated") && r.html(i)) : (r = n("<" + this.settings.errorElement + "/>").attr({"for":this.idOrName(t), generated:!0}).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t))), !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r)), this.toShow = this.toShow.add(r)
    }, errorsFor:function (t) {
        var i = this.idOrName(t);
        return this.errors().filter(function () {
            return n(this).attr("for") == i
        })
    }, idOrName:function (n) {
        return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
    }, validationTargetFor:function (n) {
        return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
    }, checkable:function (n) {
        return/radio|checkbox/i.test(n.type)
    }, findByName:function (t) {
        var i = this.currentForm;
        return n(document.getElementsByName(t)).map(function (n, r) {
            return r.form == i && r.name == t && r || null
        })
    }, getLength:function (t, i) {
        switch (i.nodeName.toLowerCase()) {
            case"select":
                return n("option:selected", i).length;
            case"input":
                if (this.checkable(i))return this.findByName(i.name).filter(":checked").length
        }
        return t.length
    }, depend:function (n, t) {
        return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
    }, dependTypes:{boolean:function (n) {
        return n
    }, string:function (t, i) {
        return!!n(t, i.form).length
    }, "function":function (n, t) {
        return n(t)
    }}, optional:function (t) {
        return!n.validator.methods.required.call(this, n.trim(t.value), t) && "dependency-mismatch"
    }, startRequest:function (n) {
        this.pending[n.name] || (this.pendingRequest++, this.pending[n.name] = !0)
    }, stopRequest:function (t, i) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], i && this.pendingRequest == 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest == 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
    }, previousValue:function (t) {
        return n.data(t, "previousValue") || n.data(t, "previousValue", {old:null, valid:!0, message:this.defaultMessage(t, "remote")})
    }}, classRuleSettings:{required:{required:!0}, email:{email:!0}, url:{url:!0}, date:{date:!0}, dateISO:{dateISO:!0}, dateDE:{dateDE:!0}, number:{number:!0}, numberDE:{numberDE:!0}, digits:{digits:!0}, creditcard:{creditcard:!0}}, addClassRules:function (t, i) {
        t.constructor == String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
    }, classRules:function (t) {
        var i = {};
        return(t = n(t).attr("class")) && n.each(t.split(" "), function () {
            this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
        }), i
    }, attributeRules:function (t) {
        var r = {}, i, u;
        t = n(t);
        for (i in n.validator.methods)(u = i === "required" && typeof n.fn.prop == "function" ? t.prop(i) : t.attr(i)) ? r[i] = u : t[0].getAttribute("type") === i && (r[i] = !0);
        return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
    }, metadataRules:function (t) {
        if (!n.metadata)return{};
        var i = n.data(t.form, "validator").settings.meta;
        return i ? n(t).metadata()[i] : n(t).metadata()
    }, staticRules:function (t) {
        var r = {}, i = n.data(t.form, "validator");
        return i.settings.rules && (r = n.validator.normalizeRule(i.settings.rules[t.name]) || {}), r
    }, normalizeRules:function (t, i) {
        return n.each(t, function (r, u) {
            if (u === !1)delete t[r]; else if (u.param || u.depends) {
                var f = !0;
                switch (typeof u.depends) {
                    case"string":
                        f = !!n(u.depends, i.form).length;
                        break;
                    case"function":
                        f = u.depends.call(i, i)
                }
                f ? t[r] = u.param !== undefined ? u.param : !0 : delete t[r]
            }
        }), n.each(t, function (r, u) {
            t[r] = n.isFunction(u) ? u(i) : u
        }), n.each(["minlength", "maxlength", "min", "max"], function () {
            t[this] && (t[this] = Number(t[this]))
        }), n.each(["rangelength", "range"], function () {
            t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
        }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t.messages && delete t.messages, t
    }, normalizeRule:function (t) {
        if (typeof t == "string") {
            var i = {};
            n.each(t.split(/\s/), function () {
                i[this] = !0
            }), t = i
        }
        return t
    }, addMethod:function (t, i, r) {
        n.validator.methods[t] = i, n.validator.messages[t] = r != undefined ? r : n.validator.messages[t], i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
    }, methods:{required:function (t, i, r) {
        if (!this.depend(r, i))return"dependency-mismatch";
        switch (i.nodeName.toLowerCase()) {
            case"select":
                return(t = n(i).val()) && t.length > 0;
            case"input":
                if (this.checkable(i))return this.getLength(t, i) > 0;
            default:
                return n.trim(t).length > 0
        }
    }, remote:function (t, i, r) {
        var f, u, e;
        return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = typeof r == "string" && {url:r} || r, this.pending[i.name]) ? "pending" : f.old === t ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {url:r, mode:"abort", port:"validate" + i.name, dataType:"json", data:e, success:function (r) {
            var o, e;
            u.settings.messages[i.name].remote = f.originalMessage, o = r === !0, o ? (e = u.formSubmitted, u.prepareElement(i), u.formSubmitted = e, u.successList.push(i), u.showErrors()) : (e = {}, r = r || u.defaultMessage(i, "remote"), e[i.name] = f.message = n.isFunction(r) ? r(t) : r, u.showErrors(e)), f.valid = o, u.stopRequest(i, o)
        }}, r)), "pending")
    }, minlength:function (t, i, r) {
        return this.optional(i) || this.getLength(n.trim(t), i) >= r
    }, maxlength:function (t, i, r) {
        return this.optional(i) || this.getLength(n.trim(t), i) <= r
    }, rangelength:function (t, i, r) {
        return t = this.getLength(n.trim(t), i), this.optional(i) || t >= r[0] && t <= r[1]
    }, min:function (n, t, i) {
        return this.optional(t) || n >= i
    }, max:function (n, t, i) {
        return this.optional(t) || n <= i
    }, range:function (n, t, i) {
        return this.optional(t) || n >= i[0] && n <= i[1]
    }, email:function (n, t) {
        return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
    }, url:function (n, t) {
        return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
    }, date:function (n, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(n))
    }, dateISO:function (n, t) {
        return this.optional(t) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(n)
    }, number:function (n, t) {
        return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(n)
    }, digits:function (n, t) {
        return this.optional(t) || /^\d+$/.test(n)
    }, creditcard:function (n, t) {
        var r;
        if (this.optional(t))return"dependency-mismatch";
        if (/[^0-9 -]+/.test(n))return!1;
        var f = 0, i = 0, u = !1;
        for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--)i = n.charAt(r), i = parseInt(i, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
        return f % 10 == 0
    }, accept:function (n, t, i) {
        return i = typeof i == "string" ? i.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || n.match(RegExp(".(" + i + ")$", "i"))
    }, equalTo:function (t, i, r) {
        return r = n(r).unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
            n(i).valid()
        }), t == r.val()
    }}}), n.format = n.validator.format
}(jQuery), function (n) {
    var t = {}, i;
    n.ajaxPrefilter ? n.ajaxPrefilter(function (n, i, r) {
        i = n.port, n.mode == "abort" && (t[i] && t[i].abort(), t[i] = r)
    }) : (i = n.ajax, n.ajax = function (r) {
        var u = ("port"in r ? r : n.ajaxSettings).port;
        return("mode"in r ? r : n.ajaxSettings).mode == "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments)) : i.apply(this, arguments)
    })
}(jQuery), function (n) {
    !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && n.each({focus:"focusin", blur:"focusout"}, function (t, i) {
        function r(t) {
            return t = n.event.fix(t), t.type = i, n.event.handle.call(this, t)
        }

        n.event.special[i] = {setup:function () {
            this.addEventListener(t, r, !0)
        }, teardown:function () {
            this.removeEventListener(t, r, !0)
        }, handler:function (t) {
            return arguments[0] = n.event.fix(t), arguments[0].type = i, n.event.handle.apply(this, arguments)
        }}
    }), n.extend(n.fn, {validateDelegate:function (t, i, r) {
        return this.bind(i, function (i) {
            var u = n(i.target);
            if (u.is(t))return r.apply(u, arguments)
        })
    }})
}(jQuery), function (n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : n(jQuery)
}(function (n) {
    var i = [], f = n(document), u = n.browser.msie && 6 === parseInt(n.browser.version) && "object" != typeof window.XMLHttpRequest, o = n.browser.msie && 7 === parseInt(n.browser.version), e = null, r = n(window), t = [];
    n.modal = function (t, i) {
        return n.modal.impl.init(t, i)
    }, n.modal.close = function () {
        n.modal.impl.close()
    }, n.modal.focus = function (t) {
        n.modal.impl.focus(t)
    }, n.modal.setContainerDimensions = function () {
        n.modal.impl.setContainerDimensions()
    }, n.modal.setPosition = function () {
        n.modal.impl.setPosition()
    }, n.modal.update = function (t, i) {
        n.modal.impl.update(t, i)
    }, n.fn.modal = function (t) {
        return n.modal.impl.init(this, t)
    }, n.modal.defaults = {appendTo:"body", focus:!0, opacity:50, overlayId:"simplemodal-overlay", overlayCss:{}, containerId:"simplemodal-container", containerCss:{}, dataId:"simplemodal-data", dataCss:{}, minHeight:null, minWidth:null, maxHeight:null, maxWidth:null, autoResize:!1, autoPosition:!0, zIndex:1e3, close:!0, closeHTML:'<a class="modalCloseImg" title="Close"></a>', closeClass:"simplemodal-close", escClose:!0, overlayClose:!1, fixed:!0, position:null, persist:!1, modal:!0, onOpen:null, onShow:null, onClose:null}, n.modal.impl = {d:{}, init:function (t, i) {
        if (this.d.data)return!1;
        if (e = n.browser.msie && !n.support.boxModel, this.o = n.extend({}, n.modal.defaults, i), this.zIndex = this.o.zIndex, this.occb = !1, "object" == typeof t)(t = t instanceof n ? t : n(t), this.d.placeholder = !1, 0 < t.parent().parent().size() && (t.before(n("<span></span>").attr("id", "simplemodal-placeholder").css({display:"none"})), this.d.placeholder = !0, this.display = t.css("display"), !this.o.persist)) && (this.d.orig = t.clone(!0)); else if ("string" == typeof t || "number" == typeof t)t = n("<div></div>").html(t); else return alert("SimpleModal Error: Unsupported data type: " + typeof t), this;
        return this.create(t), this.open(), n.isFunction(this.o.onShow) && this.o.onShow.apply(this, [this.d]), this
    }, create:function (r) {
        this.getDimensions(), this.o.modal && u && (this.d.iframe = n('<iframe src="javascript:false;"></iframe>').css(n.extend(this.o.iframeCss, {display:"none", opacity:0, position:"fixed", height:t[0], width:t[1], zIndex:this.o.zIndex, top:0, left:0})).appendTo(this.o.appendTo)), this.d.overlay = n("<div></div>").attr("id", this.o.overlayId).addClass("simplemodal-overlay").css(n.extend(this.o.overlayCss, {display:"none", opacity:this.o.opacity / 100, height:this.o.modal ? i[0] : 0, width:this.o.modal ? i[1] : 0, position:"fixed", left:0, top:0, zIndex:this.o.zIndex + 1})).appendTo(this.o.appendTo), this.d.container = n("<div></div>").attr("id", this.o.containerId).addClass("simplemodal-container").css(n.extend({position:this.o.fixed ? "fixed" : "absolute"}, this.o.containerCss, {display:"none", zIndex:this.o.zIndex + 2})).append(this.o.close && this.o.closeHTML ? n(this.o.closeHTML).addClass(this.o.closeClass) : "").appendTo(this.o.appendTo), this.d.wrap = n("<div></div>").attr("tabIndex", -1).addClass("simplemodal-wrap").css({height:"100%", outline:0, width:"100%"}).appendTo(this.d.container), this.d.data = r.attr("id", r.attr("id") || this.o.dataId).addClass("simplemodal-data").css(n.extend(this.o.dataCss, {display:"none"})).appendTo("body"), this.setContainerDimensions(), this.d.data.appendTo(this.d.wrap), (u || e) && this.fixIE()
    }, bindEvents:function () {
        var o = this;
        n("." + o.o.closeClass).bind("click.simplemodal", function (n) {
            n.preventDefault(), o.close()
        }), o.o.modal && o.o.close && o.o.overlayClose && o.d.overlay.bind("click.simplemodal", function (n) {
            n.preventDefault(), o.close()
        }), f.bind("keydown.simplemodal", function (n) {
            o.o.modal && 9 === n.keyCode ? o.watchTab(n) : o.o.close && o.o.escClose && 27 === n.keyCode && (n.preventDefault(), o.close())
        }), r.bind("resize.simplemodal orientationchange.simplemodal", function () {
            o.getDimensions(), o.o.autoResize ? o.setContainerDimensions() : o.o.autoPosition && o.setPosition(), u || e ? o.fixIE() : o.o.modal && (o.d.iframe && o.d.iframe.css({height:t[0], width:t[1]}), o.d.overlay.css({height:i[0], width:i[1]}))
        })
    }, unbindEvents:function () {
        n("." + this.o.closeClass).unbind("click.simplemodal"), f.unbind("keydown.simplemodal"), r.unbind(".simplemodal"), this.d.overlay.unbind("click.simplemodal")
    }, fixIE:function () {
        var t = this.o.position;
        n.each([this.d.iframe || null, this.o.modal ? this.d.overlay : null, "fixed" === this.d.container.css("position") ? this.d.container : null], function (n, i) {
            var r, f, u;
            i && (r = i[0].style, r.position = "absolute", 2 > n ? (r.removeExpression("height"), r.removeExpression("width"), r.setExpression("height", 'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'), r.setExpression("width", 'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"')) : (t && t.constructor === Array ? (f = t[0] ? "number" == typeof t[0] ? t[0].toString() : t[0].replace(/px/, "") : i.css("top").replace(/px/, ""), f = -1 === f.indexOf("%") ? f + ' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"' : parseInt(f.replace(/%/, "")) + ' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"', t[1] && (u = "number" == typeof t[1] ? t[1].toString() : t[1].replace(/px/, ""), u = -1 === u.indexOf("%") ? u + ' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"' : parseInt(u.replace(/%/, "")) + ' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')) : (f = '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"', u = '(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"'), r.removeExpression("top"), r.removeExpression("left"), r.setExpression("top", f), r.setExpression("left", u)))
        })
    }, focus:function (t) {
        var r = this, t = t && -1 !== n.inArray(t, ["first", "last"]) ? t : "first", i = n(":input:enabled:visible:" + t, r.d.wrap);
        setTimeout(function () {
            0 < i.length ? i.focus() : r.d.wrap.focus()
        }, 10)
    }, getDimensions:function () {
        var n = "undefined" == typeof window.innerHeight ? r.height() : window.innerHeight;
        i = [f.height(), f.width()], t = [n, r.width()]
    }, getVal:function (n, i) {
        return n ? "number" == typeof n ? n : "auto" === n ? 0 : 0 < n.indexOf("%") ? parseInt(n.replace(/%/, "")) / 100 * ("h" === i ? t[0] : t[1]) : parseInt(n.replace(/px/, "")) : null
    }, update:function (n, t) {
        if (!this.d.data)return!1;
        this.d.origHeight = this.getVal(n, "h"), this.d.origWidth = this.getVal(t, "w"), this.d.data.hide(), n && this.d.container.css("height", n), t && this.d.container.css("width", t), this.setContainerDimensions(), this.d.data.show(), this.o.focus && this.focus(), this.unbindEvents(), this.bindEvents()
    }, setContainerDimensions:function () {
        var r = u || o, f = this.d.origHeight ? this.d.origHeight : n.browser.opera ? this.d.container.height() : this.getVal(r ? this.d.container[0].currentStyle.height : this.d.container.css("height"), "h"), r = this.d.origWidth ? this.d.origWidth : n.browser.opera ? this.d.container.width() : this.getVal(r ? this.d.container[0].currentStyle.width : this.d.container.css("width"), "w"), c = this.d.data.outerHeight(!0), h = this.d.data.outerWidth(!0);
        this.d.origHeight = this.d.origHeight || f, this.d.origWidth = this.d.origWidth || r;
        var i = this.o.maxHeight ? this.getVal(this.o.maxHeight, "h") : null, e = this.o.maxWidth ? this.getVal(this.o.maxWidth, "w") : null, i = i && i < t[0] ? i : t[0], e = e && e < t[1] ? e : t[1], s = this.o.minHeight ? this.getVal(this.o.minHeight, "h") : "auto", f = f ? this.o.autoResize && f > i ? i : f < s ? s : f : c ? c > i ? i : this.o.minHeight && "auto" !== s && c < s ? s : c : s, i = this.o.minWidth ? this.getVal(this.o.minWidth, "w") : "auto", r = r ? this.o.autoResize && r > e ? e : r < i ? i : r : h ? h > e ? e : this.o.minWidth && "auto" !== i && h < i ? i : h : i;
        this.d.container.css({height:f, width:r}), this.d.wrap.css({overflow:c > f || h > r ? "auto" : "visible"}), this.o.autoPosition && this.setPosition()
    }, setPosition:function () {
        var n, i, u;
        n = t[0] / 2 - this.d.container.outerHeight(!0) / 2, i = t[1] / 2 - this.d.container.outerWidth(!0) / 2, u = "fixed" !== this.d.container.css("position") ? r.scrollTop() : 0, this.o.position && "[object Array]" === Object.prototype.toString.call(this.o.position) ? (n = u + (this.o.position[0] || n), i = this.o.position[1] || i) : n = u + n, this.d.container.css({left:i, top:n})
    }, watchTab:function (t) {
        0 < n(t.target).parents(".simplemodal-container").length ? (this.inputs = n(":input:enabled:visible:first, :input:enabled:visible:last", this.d.data[0]), !t.shiftKey && t.target === this.inputs[this.inputs.length - 1] || t.shiftKey && t.target === this.inputs[0] || 0 === this.inputs.length) && (t.preventDefault(), this.focus(t.shiftKey ? "last" : "first")) : (t.preventDefault(), this.focus())
    }, open:function () {
        this.d.iframe && this.d.iframe.show(), n.isFunction(this.o.onOpen) ? this.o.onOpen.apply(this, [this.d]) : (this.d.overlay.show(), this.d.container.show(), this.d.data.show()), this.o.focus && this.focus(), this.bindEvents()
    }, close:function () {
        if (!this.d.data)return!1;
        if (this.unbindEvents(), n.isFunction(this.o.onClose) && !this.occb)this.occb = !0, this.o.onClose.apply(this, [this.d]); else {
            if (this.d.placeholder) {
                var t = n("#simplemodal-placeholder");
                this.o.persist ? t.replaceWith(this.d.data.removeClass("simplemodal-data").css("display", this.display)) : (this.d.data.hide().remove(), t.replaceWith(this.d.orig))
            } else this.d.data.hide().remove();
            this.d.container.hide().remove(), this.d.overlay.hide(), this.d.iframe && this.d.iframe.hide().remove(), this.d.overlay.remove(), this.d = {}
        }
    }}
}), function (n, t, i) {
    var e = "watermark", u = "watermarkClass", a = "watermarkFocus", s = "watermarkSubmit", v = "watermarkMaxLength", f = "watermarkPassword", r = "watermarkText", o = /\r/g, y = "input:data(" + e + "),textarea:data(" + e + ")", h = "input:text,input:password,input[type=search],input:not([type]),textarea", l = ["Page_ClientValidate"], c = !1, p = "placeholder"in document.createElement("input");
    n.watermark = n.watermark || {version:"3.1.3", runOnce:!0, options:{className:"watermark", useNative:!0, hideBeforeUnload:!0}, hide:function (t) {
        n(t).filter(y).each(function () {
            n.watermark._hide(n(this))
        })
    }, _hide:function (n, i) {
        var c = n[0], y = (c.value || "").replace(o, ""), h = n.data(r) || "", a = n.data(v) || 0, l = n.data(u), s, e;
        h.length && y == h && (c.value = "", n.data(f) && (n.attr("type") || "") === "text" && (s = n.data(f) || [], e = n.parent() || [], s.length && e.length && (e[0].removeChild(n[0]), e[0].appendChild(s[0]), n = s)), a && (n.attr("maxLength", a), n.removeData(v)), i && (n.attr("autocomplete", "off"), t.setTimeout(function () {
            n.select()
        }, 1))), l && n.removeClass(l)
    }, show:function (t) {
        n(t).filter(y).each(function () {
            n.watermark._show(n(this))
        })
    }, _show:function (t) {
        var l = t[0], w = (l.value || "").replace(o, ""), i = t.data(r) || "", y = t.attr("type") || "", p = t.data(u), s, e, h;
        w.length != 0 && w != i || t.data(a) ? n.watermark._hide(t) : (c = !0, t.data(f) && y === "password" && (s = t.data(f) || [], e = t.parent() || [], s.length && e.length && (e[0].removeChild(t[0]), e[0].appendChild(s[0]), t = s, t.attr("maxLength", i.length), l = t[0])), (y === "text" || y === "search") && (h = t.attr("maxLength") || 0, h > 0 && i.length > h && (t.data(v, h), t.attr("maxLength", i.length))), p && t.addClass(p), l.value = i)
    }, hideAll:function () {
        c && (n.watermark.hide(h), c = !1)
    }, showAll:function () {
        n.watermark.show(h)
    }}, n.fn.watermark = n.fn.watermark || function (i, c) {
        if (!this.length)return this;
        var v = !1, l = typeof i == "string";
        return l && (i = i.replace(o, "")), typeof c == "object" ? (v = typeof c.className == "string", c = n.extend({}, n.watermark.options, c)) : typeof c == "string" ? (v = !0, c = n.extend({}, n.watermark.options, {className:c})) : c = n.watermark.options, typeof c.useNative != "function" && (c.useNative = c.useNative ? function () {
            return!0
        } : function () {
            return!1
        }), this.each(function () {
            var y = n(this), d, w, b, k;
            if (y.is(h)) {
                if (y.data(e))(l || v) && (n.watermark._hide(y), l && y.data(r, i), v && y.data(u, c.className)); else {
                    if (p && c.useNative.call(this, y) && (y[0].tagName || "") !== "TEXTAREA") {
                        l && y.attr("placeholder", i);
                        return
                    }
                    y.data(r, l ? i : ""), y.data(u, c.className), y.data(e, 1), (y.attr("type") || "") === "password" ? (d = y.wrap("<span>").parent(), w = n(d.html().replace(/type=["']?password["']?/i, 'type="text"')), w.data(r, y.data(r)), w.data(u, y.data(u)), w.data(e, 1), w.attr("maxLength", i.length), w.focus(
                        function () {
                            n.watermark._hide(w, !0)
                        }).bind("dragenter",
                        function () {
                            n.watermark._hide(w)
                        }).bind("dragend", function () {
                        t.setTimeout(function () {
                            w.blur()
                        }, 1)
                    }), y.blur(
                        function () {
                            n.watermark._show(y)
                        }).bind("dragleave", function () {
                        n.watermark._show(y)
                    }), w.data(f, y), y.data(f, w)) : y.focus(
                        function () {
                            y.data(a, 1), n.watermark._hide(y, !0)
                        }).blur(
                        function () {
                            y.data(a, 0), n.watermark._show(y)
                        }).bind("dragenter",
                        function () {
                            n.watermark._hide(y)
                        }).bind("dragleave",
                        function () {
                            n.watermark._show(y)
                        }).bind("dragend",
                        function () {
                            t.setTimeout(function () {
                                n.watermark._show(y)
                            }, 1)
                        }).bind("drop", function (n) {
                        var i = y[0], t = n.originalEvent.dataTransfer.getData("Text");
                        (i.value || "").replace(o, "").replace(t, "") === y.data(r) && (i.value = t), y.focus()
                    }), this.form && (b = this.form, k = n(b), k.data(s) || (k.submit(n.watermark.hideAll), b.submit ? (k.data(s, b.submit), b.submit = function (t, i) {
                        return function () {
                            var r = i.data(s);
                            n.watermark.hideAll(), r.apply ? r.apply(t, Array.prototype.slice.call(arguments)) : r()
                        }
                    }(b, k)) : (k.data(s, 1), b.submit = function (t) {
                        return function () {
                            n.watermark.hideAll(), delete t.submit, t.submit()
                        }
                    }(b))))
                }
                n.watermark._show(y)
            }
        })
    }, n.watermark.runOnce && (n.watermark.runOnce = !1, n.extend(n.expr[":"], {data:function (t, i, r) {
        return!!n.data(t, r[3])
    }}), function (t) {
        n.fn.val = function () {
            if (!this.length)return arguments.length ? this : i;
            if (arguments.length)return t.apply(this, arguments), n.watermark.show(this), this;
            if (this.data(e)) {
                var u = (this[0].value || "").replace(o, "");
                return u === (this.data(r) || "") ? "" : u
            }
            return t.apply(this, arguments)
        }
    }(n.fn.val), l.length && n(function () {
        for (var u, r, i = l.length - 1; i >= 0; i--)u = l[i], r = t[u], typeof r == "function" && (t[u] = function (t) {
            return function () {
                return n.watermark.hideAll(), t.apply(null, Array.prototype.slice.call(arguments))
            }
        }(r))
    }), n(t).bind("beforeunload", function () {
        n.watermark.options.hideBeforeUnload && n.watermark.hideAll()
    }))
}(jQuery, window), $("#searchhome").watermark("Search"), $("nav ul li ul").each(function () {
    $(this).css("margin-left", $(this).outerWidth() / -2)
}), $("nav > ul > li").hover(function () {
    $("ul", this).size() > 0 && $(this).addClass("hover")
}, function () {
    $(this).removeClass("hover")
}), function (n, t) {
    function hi(t) {
        n.extend(!0, g, t)
    }

    function rr(u, f, e) {
        function ti(n) {
            c ? (ht(), pt(), kt(), v(n)) : fi()
        }

        function fi() {
            ii = f.theme ? "ui" : "fc", u.addClass("fc"), f.isRTL && u.addClass("fc-rtl"), f.theme && u.addClass("ui-widget"), c = n("<div class='fc-content' style='position:relative'/>").prependTo(u), w = new ir(s, f), (it = w.render()) && u.prepend(it), ni(f.defaultView), n(window).resize(dt), yt() || wt()
        }

        function wt() {
            setTimeout(function () {
                !o.start && yt() && v()
            }, 0)
        }

        function ui() {
            n(window).unbind("resize", dt), w.destroy(), c.remove(), u.removeClass("fc fc-rtl ui-widget")
        }

        function tt() {
            return g.offsetWidth !== 0
        }

        function yt() {
            return n("body")[0].offsetWidth !== 0
        }

        function ni(t) {
            if (!o || t != o.name) {
                y++, ft();
                var i = o, r;
                i ? ((i.beforeHide || vi)(), d(c, c.height()), i.element.hide()) : d(c, 1), c.css("overflow", "hidden"), (o = rt[t]) ? o.element.show() : o = rt[t] = new h[t](r = k = n("<div class='fc-view fc-view-" + t + "' style='position:absolute'/>").appendTo(c), s), i && w.deactivateButton(i.name), w.activateButton(t), v(), c.css("overflow", ""), i && d(c, 1), r || (o.afterShow || vi)(), y--
            }
        }

        function v(n) {
            if (tt()) {
                y++, ft(), at === t && ht();
                var i = !1;
                !o.start || n || l < o.start || l >= o.end ? (o.render(l, n || 0), et(!0), i = !0) : o.sizeDirty ? (o.clearEvents(), et(), i = !0) : o.eventsDirty && (o.clearEvents(), i = !0), o.sizeDirty = !1, o.eventsDirty = !1, ai(i), st = u.outerWidth(), w.updateTitle(o.title), n = new Date, n >= o.start && n < o.end ? w.disableButton("today") : w.enableButton("today"), y--, o.trigger("viewDisplay", g)
            }
        }

        function vt() {
            pt(), tt() && (ht(), et(), ft(), o.clearEvents(), o.renderEvents(lt), o.sizeDirty = !1)
        }

        function pt() {
            n.each(rt, function (n, t) {
                t.sizeDirty = !0
            })
        }

        function ht() {
            at = f.contentHeight ? f.contentHeight : f.height ? f.height - (it ? it.height() : 0) - p(c) : Math.round(c.width() / Math.max(f.aspectRatio, .5))
        }

        function et(n) {
            y++, o.setHeight(at, n), k && (k.css("position", "relative"), k = null), o.setWidth(c.width(), n), y--
        }

        function dt() {
            if (!y)if (o.start) {
                var n = ++gt;
                setTimeout(function () {
                    n == gt && !y && tt() && st != (st = u.outerWidth()) && (y++, vt(), o.trigger("windowResize", g), y--)
                }, 200)
            } else wt()
        }

        function ai(n) {
            !f.lazyFetching || gi(o.visStart, o.visEnd) ? bt() : n && nt()
        }

        function bt() {
            ei(o.visStart, o.visEnd)
        }

        function yi(n) {
            lt = n, nt()
        }

        function pi(n) {
            nt(n)
        }

        function nt(n) {
            kt(), tt() && (o.clearEvents(), o.renderEvents(lt, n), o.eventsDirty = !1)
        }

        function kt() {
            n.each(rt, function (n, t) {
                t.eventsDirty = !0
            })
        }

        function ci(n, i, r) {
            o.select(n, i, r === t ? !0 : r)
        }

        function ft() {
            o && o.unselect()
        }

        function oi() {
            v(-1)
        }

        function si() {
            v(1)
        }

        function ri() {
            ct(l, -1), v()
        }

        function hi() {
            ct(l, 1), v()
        }

        function wi() {
            l = new Date, v()
        }

        function tr(n, t, r) {
            n instanceof Date ? l = i(n) : li(l, n, t, r), v()
        }

        function rr(n, i, u) {
            n !== t && ct(l, n), i !== t && ut(l, i), u !== t && r(l, u), v()
        }

        function ur() {
            return i(l)
        }

        function nr() {
            return o
        }

        function bi(n, i) {
            if (i === t)return f[n];
            (n == "height" || n == "contentHeight" || n == "aspectRatio") && (f[n] = i, vt())
        }

        function ki(n, t) {
            if (f[n])return f[n].apply(t || g, Array.prototype.slice.call(arguments, 2))
        }

        var s = this;
        s.options = f, s.render = ti, s.destroy = ui, s.refetchEvents = bt, s.reportEvents = yi, s.reportEventChange = pi, s.rerenderEvents = nt, s.changeView = ni, s.select = ci, s.unselect = ft, s.prev = oi, s.next = si, s.prevYear = ri, s.nextYear = hi, s.today = wi, s.gotoDate = tr, s.incrementDate = rr, s.formatDate = function (n, t) {
            return a(n, t, f)
        }, s.formatDates = function (n, t, i) {
            return ot(n, t, i, f)
        }, s.getDate = ur, s.getView = nr, s.option = bi, s.trigger = ki, di.call(s, f, e);
        var gi = s.isFetchNeeded, ei = s.fetchEvents, g = u[0], w, it, c, ii, o, rt = {}, st, at, k, gt = 0, y = 0, l = new Date, lt = [], b;
        li(l, f.year, f.month, f.date), f.droppable && n(document).bind("dragstart",
            function (t, i) {
                var u = t.target, e = n(u), r;
                e.parents(".fc").length || (r = f.dropAccept, (n.isFunction(r) ? r.call(u, e) : e.is(r)) && (b = u, o.dragStart(b, t, i)))
            }).bind("dragstop", function (n, t) {
            b && (o.dragStop(b, n, t), b = null)
        })
    }

    function ir(t, i) {
        function y() {
            return r = i.theme ? "ui" : "fc", i.header ? u = n("<table class='fc-header' style='width:100%'/>").append(n("<tr/>").append(e("left")).append(e("center")).append(e("right"))) : void 0
        }

        function a() {
            u.remove()
        }

        function e(u) {
            var f = n("<td class='fc-header-" + u + "'/>");
            return(u = i.header[u]) && n.each(u.split(" "), function (u) {
                u > 0 && f.append("<span class='fc-header-space'/>");
                var e;
                n.each(this.split(","), function (u, o) {
                    var c, l, s;
                    o == "title" ? (f.append("<div class='w16 mr5 pointer prev fc-header-title' title='Previous' onclick='callprev();'>&nbsp;</div><span class='fc-header-title'><h2>&nbsp;</h2></span><div title='Next' class='w16  ml5 pointer next fc-header-title' onclick='callnext();'>&nbsp;</div>"), e && e.addClass(r + "-corner-right"), e = null) : (t[o] ? c = t[o] : h[o] && (c = function () {
                        s.removeClass(r + "-state-hover"), t.changeView(o)
                    }), c && (u = i.theme ? it(i.buttonIcons, o) : null, l = it(i.buttonText, o), s = n("<span class='fc-button fc-button-" + o + " " + r + "-state-default'><span class='fc-button-inner'><span class='fc-button-content'>" + (u ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + u + "'/></span>" : l) + "</span><span class='fc-button-effect'><span></span></span></span></span>"), s && (s.click(
                        function () {
                            s.hasClass(r + "-state-disabled") || c()
                        }).mousedown(
                        function () {
                            s.not("." + r + "-state-active").not("." + r + "-state-disabled").addClass(r + "-state-down")
                        }).mouseup(
                        function () {
                            s.removeClass(r + "-state-down")
                        }).hover(
                        function () {
                            s.not("." + r + "-state-active").not("." + r + "-state-disabled").addClass(r + "-state-hover")
                        },
                        function () {
                            s.removeClass(r + "-state-hover").removeClass(r + "-state-down")
                        }).appendTo(f), e || s.addClass(r + "-corner-left"), e = s)))
                }), e && e.addClass(r + "-corner-right")
            }), f
        }

        function l(n) {
            u.find("h2").html(n)
        }

        function s(n) {
            u.find("span.fc-button-" + n).addClass(r + "-state-active")
        }

        function v(n) {
            u.find("span.fc-button-" + n).removeClass(r + "-state-active")
        }

        function c(n) {
            u.find("span.fc-button-" + n).addClass(r + "-state-disabled")
        }

        function o(n) {
            u.find("span.fc-button-" + n).removeClass(r + "-state-disabled")
        }

        var f = this, u, r;
        f.render = y, f.destroy = a, f.updateTitle = l, f.activateButton = s, f.deactivateButton = v, f.disableButton = c, f.enableButton = o, u = n([])
    }

    function di(r, u) {
        function kt(n, t) {
            return!h || n < h || t > c
        }

        function et(n, t) {
            h = n, c = t, e = [], n = ++w, v = t = s.length;
            for (var i = 0; i < t; i++)ut(s[i], n)
        }

        function ut(n, t) {
            d(n, function (i) {
                if (t == w) {
                    if (i) {
                        for (var r = 0; r < i.length; r++)i[r].source = n, l(i[r]);
                        e = e.concat(i)
                    }
                    v--, v || a(e)
                }
            })
        }

        function d(t, u) {
            for (var s = f.sourceFetchers, o, e = 0; e < s.length; e++) {
                if (o = s[e](t, h, c, u), o === !0)return;
                if (typeof o == "object") {
                    d(o, u);
                    return
                }
            }
            if (e = t.events)n.isFunction(e) ? (rt(), e(i(h), i(c), function (n) {
                u(n), ft()
            })) : n.isArray(e) ? u(e) : u(); else if (t.url) {
                var v = t.success, a = t.error, l = t.complete;
                e = n.extend({}, t.data || {}), s = y(t.startParam, r.startParam), o = y(t.endParam, r.endParam), s && (e[s] = Math.round(+h / 1e3)), o && (e[o] = Math.round(+c / 1e3)), rt(), n.ajax(n.extend({}, vt, t, {data:e, success:function (t) {
                    t = t || [];
                    var i = b(v, this, arguments);
                    n.isArray(i) && (t = i), u(t)
                }, error:function () {
                    b(a, this, arguments), u()
                }, complete:function () {
                    b(l, this, arguments), ft()
                }}))
            } else u()
        }

        function ct(n) {
            (n = tt(n)) && (v++, ut(n, w))
        }

        function tt(t) {
            return n.isFunction(t) || n.isArray(t) ? t = {events:t} : typeof t == "string" && (t = {url:t}), typeof t == "object" ? (yt(t), s.push(t), t) : void 0
        }

        function lt(t) {
            s = n.grep(s, function (n) {
                return!k(n, t)
            }), e = n.grep(e, function (n) {
                return!k(n.source, t)
            }), a(e)
        }

        function ot(n) {
            for (var f = e.length, t, u = wt().defaultEventEnd, o = n.start - n._start, r = n.end ? n.end - (n._end || u(n)) : 0, i = 0; i < f; i++)t = e[i], t._id == n._id && t != n && (t.start = new Date(+t.start + o), t.end = n.end ? t.end ? new Date(+t.end + r) : new Date(+u(t) + r) : null, t.title = n.title, t.url = n.url, t.allDay = n.allDay, t.className = n.className, t.editable = n.editable, t.color = n.color, t.backgroudColor = n.backgroudColor, t.borderColor = n.borderColor, t.textColor = n.textColor, l(t));
            l(n), a(e)
        }

        function ht(n, t) {
            l(n), n.source || (t && (p.events.push(n), n.source = p), e.push(n)), a(e)
        }

        function at(t) {
            var r, i;
            if (t)for (n.isFunction(t) || (r = t + "", t = function (n) {
                return n._id == r
            }), e = n.grep(e, t, !0), i = 0; i < s.length; i++)n.isArray(s[i].events) && (s[i].events = n.grep(s[i].events, t, !0)); else for (e = [], i = 0; i < s.length; i++)n.isArray(s[i].events) && (s[i].events = []);
            a(e)
        }

        function bt(t) {
            return n.isFunction(t) ? n.grep(e, t) : t ? (t += "", n.grep(e, function (n) {
                return n._id == t
            })) : e
        }

        function rt() {
            it++ || g("loading", null, !0)
        }

        function ft() {
            --it || g("loading", null, !1)
        }

        function l(n) {
            var f = n.source || {}, u = y(f.ignoreTimezone, r.ignoreTimezone);
            n._id = n._id || (n.id === t ? "_fc" + pt++ : n.id + ""), n.date && (n.start || (n.start = n.date), delete n.date), n._start = i(n.start = st(n.start, u)), n.end = st(n.end, u), n.end && n.end <= n.start && (n.end = null), n._end = n.end ? i(n.end) : null, n.allDay === t && (n.allDay = y(f.allDayDefault, r.allDayDefault)), n.className ? typeof n.className == "string" && (n.className = n.className.split(/\s+/)) : n.className = []
        }

        function yt(n) {
            n.className ? typeof n.className == "string" && (n.className = n.className.split(/\s+/)) : n.className = [];
            for (var i = f.sourceNormalizers, t = 0; t < i.length; t++)i[t](n)
        }

        function k(n, t) {
            return n && t && nt(n) == nt(t)
        }

        function nt(n) {
            return(typeof n == "object" ? n.events || n.url : "") || n
        }

        var o = this;
        o.isFetchNeeded = kt, o.fetchEvents = et, o.addEventSource = ct, o.removeEventSource = lt, o.updateEvent = ot, o.renderEvent = ht, o.removeEvents = at, o.clientEvents = bt, o.normalizeEvent = l;
        var g = o.trigger, wt = o.getView, a = o.reportEvents, p = {events:[]}, s = [p], h, c, w = 0, v = 0, it = 0, e = [];
        for (o = 0; o < u.length; o++)tt(u[o])
    }

    function ct(n, t, i) {
        return n.setFullYear(n.getFullYear() + t), i || c(n), n
    }

    function ut(n, t, r) {
        if (+n) {
            t = n.getMonth() + t;
            var u = i(n);
            for (u.setDate(1), u.setMonth(t), n.setMonth(t), r || c(n); n.getMonth() != u.getMonth();)n.setDate(n.getDate() + (n < u ? 1 : -1))
        }
        return n
    }

    function r(n, t, r) {
        if (+n) {
            t = n.getDate() + t;
            var u = i(n);
            u.setHours(9), u.setDate(t), n.setDate(t), r || c(n), lt(n, u)
        }
        return n
    }

    function lt(n, t) {
        if (+n)for (; n.getDate() != t.getDate();)n.setTime(+n + (n < t ? 1 : -1) * gi)
    }

    function u(n, t) {
        return n.setMinutes(n.getMinutes() + t), n
    }

    function c(n) {
        return n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0), n
    }

    function i(n, t) {
        return t ? c(new Date(+n)) : new Date(+n)
    }

    function ci() {
        var t = 0, n;
        do n = new Date(1970, t++, 1); while (n.getHours());
        return n
    }

    function s(n, t, i) {
        for (t = t || 1; !n.getDay() || i && n.getDay() == 1 || !i && n.getDay() == 6;)r(n, t);
        return n
    }

    function e(n, t) {
        return Math.round((i(n, !0) - i(t, !0)) / ti)
    }

    function li(n, i, r, u) {
        i !== t && i != n.getFullYear() && (n.setDate(1), n.setMonth(0), n.setFullYear(i)), r !== t && r != n.getMonth() && (n.setDate(1), n.setMonth(r)), u !== t && n.setDate(u)
    }

    function st(n, i) {
        return typeof n == "object" ? n : typeof n == "number" ? new Date(n * 1e3) : typeof n == "string" ? n.match(/^\d+(\.\d+)?$/) ? new Date(parseFloat(n) * 1e3) : (i === t && (i = !0), si(n, i) || (n ? new Date(n) : null)) : null
    }

    function si(n, t) {
        if (n = n.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/), !n)return null;
        var i = new Date(n[1], 0, 1);
        return t || !n[13] ? (t = new Date(n[1], 0, 1, 9, 0), n[3] && (i.setMonth(n[3] - 1), t.setMonth(n[3] - 1)), n[5] && (i.setDate(n[5]), t.setDate(n[5])), lt(i, t), n[7] && i.setHours(n[7]), n[8] && i.setMinutes(n[8]), n[10] && i.setSeconds(n[10]), n[12] && i.setMilliseconds(Number("0." + n[12]) * 1e3), lt(i, t)) : (i.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1), i.setUTCHours(n[7] || 0, n[8] || 0, n[10] || 0, n[12] ? Number("0." + n[12]) * 1e3 : 0), n[14] && (t = Number(n[16]) * 60 + (n[18] ? Number(n[18]) : 0), t *= n[15] == "-" ? 1 : -1, i = new Date(+i + t * 6e4))), i
    }

    function ht(n) {
        if (typeof n == "number")return n * 60;
        if (typeof n == "object")return n.getHours() * 60 + n.getMinutes();
        if (n = n.match(/(\d+)(?::(\d+))?\s*(\w+)?/)) {
            var t = parseInt(n[1], 10);
            return n[3] && (t %= 12, n[3].toLowerCase().charAt(0) == "p" && (t += 12)), t * 60 + (n[2] ? parseInt(n[2], 10) : 0)
        }
    }

    function a(n, t, i) {
        return ot(n, null, t, i)
    }

    function ot(n, t, i, r) {
        r = r || g;
        for (var o = n, c = t, h = i.length, e, u, l, s = "", f = 0; f < h; f++)if (e = i.charAt(f), e == "'") {
            for (u = f + 1; u < h; u++)if (i.charAt(u) == "'") {
                o && (s += u == f + 1 ? "'" : i.substring(f + 1, u), f = u);
                break
            }
        } else if (e == "(") {
            for (u = f + 1; u < h; u++)if (i.charAt(u) == ")") {
                f = a(o, i.substring(f + 1, u), r), parseInt(f.replace(/\D/, ""), 10) && (s += f), f = u;
                break
            }
        } else if (e == "[") {
            for (u = f + 1; u < h; u++)if (i.charAt(u) == "]") {
                e = i.substring(f + 1, u), f = a(o, e, r), f != a(c, e, r) && (s += f), f = u;
                break
            }
        } else if (e == "{")o = t, c = n; else if (e == "}")o = n, c = t; else {
            for (u = h; u > f; u--)if (l = tr[i.substring(f, u)]) {
                o && (s += l(o, r)), f = u - 1;
                break
            }
            u == f && o && (s += e)
        }
        return s
    }

    function w(n) {
        return n.end ? fr(n.end, n.allDay) : r(i(n.start), 1)
    }

    function fr(n, t) {
        return n = i(n), t || n.getHours() || n.getMinutes() ? r(n, 1) : c(n)
    }

    function pr(n, t) {
        return(t.msLength - n.msLength) * 100 + (n.event.start - t.event.start)
    }

    function fi(n, t) {
        return n.end > t.start && n.start < t.end
    }

    function at(n, t, r, u) {
        for (var l = [], a = n.length, c, f, e, s, h, o = 0; o < a; o++)c = n[o], f = c.start, e = t[o], e > r && f < u && (f < r ? (f = i(r), s = !1) : (f = f, s = !0), e > u ? (e = i(u), h = !1) : (e = e, h = !0), l.push({event:c, start:f, end:e, isStart:s, isEnd:h, msLength:e - f}));
        return l.sort(pr)
    }

    function et(n) {
        for (var i = [], o = n.length, r, t, e, f, u = 0; u < o; u++) {
            for (r = n[u], t = 0; ;) {
                if (e = !1, i[t])for (f = 0; f < i[t].length; f++)if (fi(i[t][f], r)) {
                    e = !0;
                    break
                }
                if (e)t++; else break
            }
            i[t] ? i[t].push(r) : i[t] = [r]
        }
        return i
    }

    function ei(i, r, u) {
        i.unbind("mouseover").mouseover(function (i) {
            for (var e = i.target, f; e != this;)f = e, e = e.parentNode;
            (e = f._fci) !== t && (f._fci = t, f = r[e], u(f.event, f.element, f), n(i.target).trigger(i)), i.stopPropagation()
        })
    }

    function v(t, i, r) {
        for (var f = 0, u; f < t.length; f++)u = n(t[f]), u.width(Math.max(0, i - tt(u, r)))
    }

    function oi(t, i, r) {
        for (var f = 0, u; f < t.length; f++)u = n(t[f]), u.height(Math.max(0, i - p(u, r)))
    }

    function tt(n, t) {
        return kr(n) + lr(n) + (t ? ar(n) : 0)
    }

    function kr(t) {
        return(parseFloat(n.css(t[0], "paddingLeft", !0)) || 0) + (parseFloat(n.css(t[0], "paddingRight", !0)) || 0)
    }

    function ar(t) {
        return(parseFloat(n.css(t[0], "marginLeft", !0)) || 0) + (parseFloat(n.css(t[0], "marginRight", !0)) || 0)
    }

    function lr(t) {
        return(parseFloat(n.css(t[0], "borderLeftWidth", !0)) || 0) + (parseFloat(n.css(t[0], "borderRightWidth", !0)) || 0)
    }

    function p(n, t) {
        return yr(n) + ki(n) + (t ? yi(n) : 0)
    }

    function yr(t) {
        return(parseFloat(n.css(t[0], "paddingTop", !0)) || 0) + (parseFloat(n.css(t[0], "paddingBottom", !0)) || 0)
    }

    function yi(t) {
        return(parseFloat(n.css(t[0], "marginTop", !0)) || 0) + (parseFloat(n.css(t[0], "marginBottom", !0)) || 0)
    }

    function ki(t) {
        return(parseFloat(n.css(t[0], "borderTopWidth", !0)) || 0) + (parseFloat(n.css(t[0], "borderBottomWidth", !0)) || 0)
    }

    function d(n, t) {
        t = typeof t == "number" ? Math.round(t/1.7) + "px" : t, n.each(function (n, i) {
            i.style.cssText += ";min-height:" + t + ";_height:" + t
        })
    }

    function vi() {
    }

    function ai(n, t) {
        return n - t
    }

    function pi(n) {
        return Math.max.apply(Math, n)
    }

    function l(n) {
        return(n < 10 ? "0" : "") + n
    }

    function it(n, i) {
        if (n[i] !== t)return n[i];
        i = i.split(/(?=[A-Z])/);
        for (var u = i.length - 1, r; u >= 0; u--)if (r = n[i[u].toLowerCase()], r !== t)return r;
        return n[""]
    }

    function o(n) {
        return n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function ui(n) {
        return n.id + "/" + n.className + "/" + n.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/ig, "")
    }

    function ft(n) {
        n.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function () {
            return!1
        })
    }

    function k(n) {
        n.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
    }

    function rt(n, t) {
        n.each(function (n, i) {
            i.className = i.className.replace(/^fc-\w*/, "fc-" + ur[t.getDay()])
        })
    }

    function bt(n, t) {
        var r = n.source || {}, i = n.color, e = r.color, f = t("eventColor"), u = n.backgroundColor || i || r.backgroundColor || e || t("eventBackgroundColor") || f;
        return i = n.borderColor || i || r.borderColor || e || t("eventBorderColor") || f, n = n.textColor || r.textColor || t("eventTextColor"), t = [], u && t.push("background-color:" + u), i && t.push("border-color:" + i), n && t.push("color:" + n), t.join(";")
    }

    function b(t, i, r) {
        if (n.isFunction(t) && (t = [t]), t) {
            for (var f, u = 0; u < t.length; u++)f = t[u].apply(i, r) || f;
            return f
        }
    }

    function y() {
        for (var n = 0; n < arguments.length; n++)if (arguments[n] !== t)return arguments[n]
    }

    function vr(n, t) {
        function h(n, t) {
            t && (ut(n, t), n.setDate(1)), n = i(n, !0), n.setDate(1), t = ut(i(n), 1);
            var l = i(n), h = i(t), c = f("firstDay"), a = f("weekends") ? 0 : 1;
            a && (s(l), s(h, -1, !0)), r(l, -((l.getDay() - Math.max(c, a) + 7) % 7)), r(h, (7 - h.getDay() + Math.max(c, a)) % 7), c = Math.round((h - l) / (ti * 7)), f("weekMode") == "fixed" && (r(h, (6 - c) * 7), c = 6), u.title = e(n, f("titleFormat")), u.start = n, u.end = t, u.visStart = l, u.visEnd = h, o(6, c, a ? 5 : 7, !0)
        }

        var u = this;
        u.render = h, nt.call(u, n, t, "month");
        var f = u.opt, o = u.renderBasic, e = t.formatDate
    }

    function hr(n, t) {
        function h(n, t) {
            t && r(n, t * 7), n = r(i(n), -((n.getDay() - f("firstDay") + 7) % 7)), t = r(i(n), 7);
            var c = i(n), h = i(t), l = f("weekends");
            l || (s(c), s(h, -1, !0)), u.title = e(c, r(i(h), -1), f("titleFormat")), u.start = n, u.end = t, u.visStart = c, u.visEnd = h, o(1, 1, l ? 7 : 5, !1)
        }

        var u = this;
        u.render = h, nt.call(u, n, t, "basicWeek");
        var f = u.opt, o = u.renderBasic, e = t.formatDates
    }

    function cr(n, t) {
        function h(n, t) {
            t && (r(n, t), f("weekends") || s(n, t < 0 ? -1 : 1)), u.title = e(n, f("titleFormat")), u.start = u.visStart = i(n, !0), u.end = u.visEnd = r(i(u.start), 1), o(1, 1, 1, !1)
        }

        var u = this;
        u.render = h, nt.call(u, n, t, "basicDay");
        var f = u.opt, o = u.renderBasic, e = t.formatDate
    }

    function nt(t, u, f) {
        function fr(n, t, i, r) {
            h = t, s = i, di(), (t = !tt) ? ki(n, r) : or(), bi(t)
        }

        function di() {
            (ui = l("isRTL")) ? (y = -1, w = s - 1) : (y = 1, w = 0), pt = l("firstDay"), vt = l("weekends") ? 0 : 1, nt = l("theme") ? "ui" : "fc", gt = l("columnFormat")
        }

        function ki(i, r) {
            for (var e = nt + "-widget-header", o = nt + "-widget-content", f = "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>", u = 0; u < s; u++)f += "<th class='fc- " + e + "'/>";
            for (f += "</tr></thead><tbody>", u = 0; u < i; u++) {
                for (f += "<tr class='fc-week" + u + "'>", e = 0; e < s; e++)f += "<td class='fc- " + o + " fc-day" + (u * s + e) + "'><div>" + (r ? "<div class='fc-day-number'/>" : "") + "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
                f += "</tr>"
            }
            f += "</tbody></table>", i = n(f).appendTo(t), g = i.find("thead"), et = g.find("th"), tt = i.find("tbody"), a = tt.find("tr"), b = tt.find("td"), ti = b.filter(":first-child"), fi = a.eq(0).find("div.fc-day-content div"), k(g.add(g.find("tr"))), k(a), a.eq(0).addClass("fc-first"), oi(b), ni = n("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(t)
        }

        function bi(t) {
            var f = t || h == 1, s = o.start.getMonth(), e = c(new Date), i, r, u;
            f && et.each(function (t, u) {
                i = n(u), r = ht(t), i.html(ur(r, gt)), rt(i, r)
            }), b.each(function (t, u) {
                i = n(u), r = ht(t), r.getMonth() == s ? i.removeClass("fc-other-month") : i.addClass("fc-other-month"), +r == +e ? i.addClass(nt + "-state-highlight fc-today") : i.removeClass(nt + "-state-highlight fc-today"), i.find("div.fc-day-number").text(r.getDate()), f && rt(i, r)
            }), a.each(function (t, i) {
                u = n(i), t < h ? (u.show(), t == h - 1 ? u.addClass("fc-last") : u.removeClass("fc-last")) : u.hide()
            })
        }

        function wi(t) {
            bt = t, t = bt - g.height();
            var i, u, r;
            l("weekMode") == "variable" ? i = u = Math.floor(t / (h == 1 ? 2 : 6)) : (i = Math.floor(t / h), u = t - i * (h - 1)), ti.each(function (t, f) {
                t < h && (r = n(f), d(r.find("> div"), (t == h - 1 ? u : i) - p(r)))
            })
        }

        function nr(n) {
            ct = n, it.clear(), at = Math.floor(ct / s), v(et.slice(0, -1), at)
        }

        function oi(n) {
            n.click(gi).mousedown(rr)
        }

        function gi(n) {
            if (!l("selectable")) {
                var t = parseInt(this.className.match(/fc\-day(\d+)/)[1]);
                t = ht(t), lt("dayClick", this, t, !0, n)
            }
        }

        function ei(n, t, u) {
            var v, c, f, l, a;
            for (u && ot.build(), u = i(o.visStart), v = r(i(u), s), c = 0; c < h; c++)f = new Date(Math.max(u, n)), l = new Date(Math.min(v, t)), f < l && (ui ? (a = e(l, u) * y + w + 1, f = e(f, u) * y + w + 1) : (a = e(f, u), f = e(l, u)), oi(ai(c, a, c, f - 1))), r(u, 7), r(v, 7)
        }

        function ai(n, i, r, u) {
            return n = ot.rect(n, i, r, u, t), sr(n, t)
        }

        function pi(n) {
            return i(n)
        }

        function vi(n, t) {
            ei(n, r(i(t), 1), !0)
        }

        function yi() {
            st()
        }

        function tr(n, t, i) {
            var r = si(n);
            lt("dayClick", b[r.row * s + r.col], n, t, i)
        }

        function lr(n, t) {
            ut.start(function (n) {
                st(), n && ai(n.row, n.col, n.row, n.col)
            }, t)
        }

        function cr(n, t, i) {
            var r = ut.stop();
            st(), r && (r = hi(r), lt("drop", n, r, !0, t, i))
        }

        function hr(n) {
            return i(n.start)
        }

        function yr(n) {
            return it.left(n)
        }

        function vr(n) {
            return it.right(n)
        }

        function si(n) {
            return{row:Math.floor(e(n, o.visStart) / 7), col:li(n.getDay())}
        }

        function hi(n) {
            return ci(n.row, n.col)
        }

        function ci(n, t) {
            return r(i(o.visStart), n * 7 + t * y + w)
        }

        function ht(n) {
            return ci(Math.floor(n / s), n % s)
        }

        function li(n) {
            return(n - Math.max(pt, vt) + s) % s * y + w
        }

        function ar(n) {
            return a.eq(n)
        }

        function ir() {
            return{left:0, right:ct}
        }

        var o = this;
        o.renderBasic = fr, o.setHeight = wi, o.setWidth = nr, o.renderDayOverlay = ei, o.defaultSelectionEnd = pi, o.renderSelection = vi, o.clearSelection = yi, o.reportDayClick = tr, o.dragStart = lr, o.dragStop = cr, o.defaultEventEnd = hr, o.getHoverListener = function () {
            return ut
        }, o.colContentLeft = yr, o.colContentRight = vr, o.dayOfWeekCol = li, o.dateCell = si, o.cellDate = hi, o.cellIsAllDay = function () {
            return!0
        }, o.allDayRow = ar, o.allDayBounds = ir, o.getRowCnt = function () {
            return h
        }, o.getColCnt = function () {
            return s
        }, o.getColWidth = function () {
            return at
        }, o.getDaySegmentContainer = function () {
            return ni
        }, kt.call(o, t, u, f), dt.call(o), wt.call(o), er.call(o);
        var l = o.opt, lt = o.trigger, or = o.clearEvents, sr = o.renderOverlay, st = o.clearOverlays, rr = o.daySelectionMousedown, ur = u.formatDate, g, et, tt, a, b, ti, fi, ni, ct, bt, at, h, s, ot, ut, it, ui, y, w, pt, vt, nt, gt;
        ft(t.addClass("fc-grid")), ot = new ri(function (t, i) {
            var f, r, u;
            et.each(function (t, e) {
                f = n(e), r = f.offset().left, t && (u[1] = r), u = [r], i[t] = u
            }), u[1] = r + f.outerWidth(), a.each(function (i, e) {
                i < h && (f = n(e), r = f.offset().top, i && (u[1] = r), u = [r], t[i] = u)
            }), u[1] = r + f.outerHeight()
        }), ut = new ii(ot), it = new yt(function (n) {
            return fi.eq(n)
        })
    }

    function er() {
        function nt(n, t) {
            ot(n), y(o(n), t)
        }

        function tt() {
            ut(), h().empty()
        }

        function o(u) {
            for (var k = b(), h = v(), l = i(t.visStart), y, f, a, s, o, h = r(i(l), h), p = n.map(u, w), c = [], e = 0; e < k; e++) {
                for (y = et(at(u, p, l, h)), f = 0; f < y.length; f++)for (a = y[f], s = 0; s < a.length; s++)o = a[s], o.row = e, o.level = f, c.push(o);
                r(l, 7), r(h, 7)
            }
            return c
        }

        function g(n, t, i) {
            d(n) && k(n, t), i.isEnd && ft(n) && p(n, t, i), it(n, t)
        }

        function k(n, t) {
            var h = l(), o;
            t.draggable({zIndex:9, delay:50, opacity:u("dragOpacity"), revertDuration:u("dragRevertDuration"), start:function (c, l) {
                e("eventDragStart", t, n, c, l), s(n, t), h.start(function (e, s, h, c) {
                    t.draggable("option", "revert", !e || !h && !c), f(), e ? (o = h * 7 + c * (u("isRTL") ? -1 : 1), a(r(i(n.start), o), r(w(n), o))) : o = 0
                }, c, "drag")
            }, stop:function (i, r) {
                h.stop(), f(), e("eventDragStop", t, n, i, r), o ? c(this, n, o, 0, n.allDay, i, r) : (t.css("filter", ""), rt(n, t))
            }})
        }

        var t = this;
        t.renderEvents = nt, t.compileDaySegs = o, t.clearEvents = tt, t.bindDaySeg = g, gt.call(t);
        var u = t.opt, e = t.trigger, d = t.isEventDraggable, ft = t.isEventResizable, ot = t.reportEvents, ut = t.reportEventClear, it = t.eventElementHandlers, rt = t.showEvents, s = t.hideEvents, c = t.eventDrop, h = t.getDaySegmentContainer, l = t.getHoverListener, a = t.renderDayOverlay, f = t.clearOverlays, b = t.getRowCnt, v = t.getColCnt, y = t.renderDaySegs, p = t.resizableDayEvent
    }

    function or(n, t) {
        function h(n, t) {
            t && r(n, t * 7), n = r(i(n), -((n.getDay() - f("firstDay") + 7) % 7)), t = r(i(n), 7);
            var c = i(n), h = i(t), l = f("weekends");
            l || (s(c), s(h, -1, !0)), u.title = e(c, r(i(h), -1), f("titleFormat")), u.start = n, u.end = t, u.visStart = c, u.visEnd = h, o(l ? 7 : 5)
        }

        var u = this;
        u.render = h, ni.call(u, n, t, "agendaWeek");
        var f = u.opt, o = u.renderAgenda, e = t.formatDates
    }

    function sr(n, t) {
        function h(n, t) {
            t && (r(n, t), f("weekends") || s(n, t < 0 ? -1 : 1)), t = i(n, !0);
            var h = r(i(t), 1);
            u.title = e(n, f("titleFormat")), u.start = u.visStart = t, u.end = u.visEnd = h, o(1)
        }

        var u = this;
        u.render = h, ni.call(u, n, t, "agendaDay");
        var f = u.opt, o = u.renderAgenda, e = t.formatDate
    }

    function ni(f, o, s) {
        function fu(n) {
            a = n, vu(), ct ? bu() : su(), hu()
        }

        function vu() {
            pt = l("theme") ? "ui" : "fc", lr = l("weekends") ? 0 : 1, er = l("firstDay"), (hr = l("isRTL")) ? (d = -1, g = a - 1) : (d = 1, g = 0), ot = ht(l("minTime")), ui = ht(l("maxTime")), tu = l("columnFormat")
        }

        function su() {
            for (var e = pt + "-widget-header", h = pt + "-widget-content", o, c, s, v = l("slotMinutes") % 15 == 0, t = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr><th class='fc-agenda-axis " + e + "'>&nbsp;</th>", r = 0; r < a; r++)t += "<th class='fc- fc-col" + r + " " + e + "'/>";
            for (t += "<th class='fc-agenda-gutter " + e + "'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis " + e + "'>&nbsp;</th>", r = 0; r < a; r++)t += "<td class='fc- fc-col" + r + " " + h + "'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
            for (t += "<td class='fc-agenda-gutter " + h + "'>&nbsp;</td></tr></tbody></table>", ct = n(t).appendTo(f), ni = ct.find("thead"), si = ni.find("th").slice(1, -1), gt = ct.find("tbody"), it = gt.find("td").slice(0, -1), ar = it.find("div.fc-day-content div"), gi = it.eq(0), cr = gi.find("> div"), k(ni.add(ni.find("tr"))), k(gt.add(gt.find("tr"))), lt = ni.find("th:first"), vt = ct.find(".fc-agenda-gutter"), nt = n("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(f), l("allDaySlot") ? (ki = n("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(nt), t = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + e + " fc-agenda-axis'>" + l("allDayText") + "</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='" + e + " fc-agenda-gutter'>&nbsp;</th></tr></table>", hi = n(t).appendTo(nt), li = hi.find("tr"), gr(li.find("td")), lt = lt.add(hi.find("th:first")), vt = vt.add(hi.find("th.fc-agenda-gutter")), nt.append("<div class='fc-agenda-divider " + e + "'><div class='fc-agenda-divider-inner'/></div>")) : ki = n([]), y = n("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(nt), b = n("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(y), rr = n("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(b), t = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", o = ci(), c = u(i(o), ui), u(o, ot), r = wi = 0; o < c; r++)s = o.getMinutes(), t += "<tr class='fc-slot" + r + " " + (s ? "fc-minor" : "") + "'><th class='fc-agenda-axis " + e + "'>" + (!v || !s ? iu(o, l("axisFormat")) : "&nbsp;") + "</th><td class='" + h + "'><div style='position:relative'>&nbsp;</div></td></tr>", u(o, l("slotMinutes")), wi++;
            t += "</tbody></table>", tt = n(t).appendTo(b), fr = tt.find("div:first"), pi(tt.find("td")), lt = lt.add(tt.find("th:first"))
        }

        function hu() {
            for (var r, i, t, u = c(new Date), n = 0; n < a; n++)t = di(n), r = si.eq(n), r.html(iu(t, tu)), i = it.eq(n), +t == +u ? i.addClass(pt + "-state-highlight fc-today") : i.removeClass(pt + "-state-highlight fc-today"), rt(r.add(i), t)
        }

        function cu(n, i) {
            n === t && (n = sr), sr = n, tr = {};
            var u = gt.position().top, r = y.position().top;
            n = Math.min(n - u, tt.height() + r + 1), cr.height(n - p(gi)), nt.css("top", u), y.height(n - r - 1), bt = fr.height() + 1, i && au()
        }

        function ou(t) {
            or = t, yi.clear(), ut = 0, v(lt.width("").each(function (t, i) {
                ut = Math.max(ut, n(i).outerWidth())
            }), ut), t = y[0].clientWidth, (bi = y.width() - t) ? (v(vt, bi), vt.show().prev().removeClass("fc-last")) : vt.hide().prev().addClass("fc-last"), fi = Math.floor((t - ut) / a), v(si.slice(0, -1), fi)
        }

        function au() {
            function r() {
                y.scrollTop(t)
            }

            var u = ci(), n = i(u), t;
            n.setHours(l("firstHour")), t = st(u, n) + 1, r(), setTimeout(r, 0)
        }

        function lu() {
            ur = y.scrollTop()
        }

        function uu() {
            y.scrollTop(ur)
        }

        function gr(n) {
            n.click(nu).mousedown(du)
        }

        function pi(n) {
            n.click(nu).mousedown(wu)
        }

        function nu(n) {
            var u;
            if (!l("selectable")) {
                var r = Math.min(a - 1, Math.floor((n.pageX - ct.offset().left - ut) / fi)), i = di(r), t = this.parentNode.className.match(/fc-slot(\d+)/);
                t ? (t = parseInt(t[1]) * l("slotMinutes"), u = Math.floor(t / 60), i.setHours(u), i.setMinutes(t % 60 + ot), ei("dayClick", it[r], i, !1, n)) : ei("dayClick", it[r], i, !0, n)
            }
        }

        function kr(n, t, r) {
            r && et.build();
            var u = i(h.visStart);
            hr ? (r = e(t, u) * d + g + 1, n = e(n, u) * d + g + 1) : (r = e(n, u), n = e(t, u)), r = Math.max(0, r), n = Math.min(a, n), r < n && gr(dr(0, r, 0, n - 1))
        }

        function dr(n, t, i, r) {
            return n = et.rect(n, t, i, r, nt), ru(n, nt)
        }

        function br(n, t) {
            for (var f, e, u, o = i(h.visStart), c = r(i(o), 1), s = 0; s < a; s++)f = new Date(Math.max(o, n)), e = new Date(Math.min(c, t)), f < e && (u = s * d + g, u = et.rect(0, u, 0, u, b), f = st(o, f), e = st(o, e), u.top = f, u.height = e - f, pi(ru(u, b))), r(o, 1), r(c, 1)
        }

        function uf(n) {
            return yi.left(n)
        }

        function rf(n) {
            return yi.right(n)
        }

        function tf(n) {
            return{row:Math.floor(e(n, h.visStart) / 7), col:nr(n.getDay())}
        }

        function ti(n) {
            var t = di(n.col);
            return n = n.row, l("allDaySlot") && n--, n >= 0 && u(t, ot + n * l("slotMinutes")), t
        }

        function di(n) {
            return r(i(h.visStart), n * d + g)
        }

        function vi(n) {
            return l("allDaySlot") && !n.row
        }

        function nr(n) {
            return(n - Math.max(er, lr) + a) % a * d + g
        }

        function st(n, r) {
            if (n = i(n, !0), r < u(i(n), ot))return 0;
            if (r >= u(i(n), ui))return tt.height();
            n = l("slotMinutes"), r = r.getHours() * 60 + r.getMinutes() - ot;
            var e = Math.floor(r / n), f = tr[e];
            return f === t && (f = tr[e] = tt.find("tr:eq(" + e + ") td div")[0].offsetTop), Math.max(0, Math.round(f - 1 + bt * (r % n / n)))
        }

        function ff() {
            return{left:ut, right:or - bi}
        }

        function sf() {
            return li
        }

        function of(n) {
            var t = i(n.start);
            return n.allDay ? t : u(t, l("defaultEventMinutes"))
        }

        function ef(n, t) {
            return t ? i(n) : u(i(n), l("slotMinutes"))
        }

        function nf(n, t, u) {
            u ? l("allDaySlot") && kr(n, r(i(t), 1), !0) : yr(n, t)
        }

        function yr(t, i) {
            var o = l("selectHelper"), r, u, f;
            et.build(), o ? (r = e(t, h.visStart) * d + g, r >= 0 && r < a && (r = et.rect(0, r, 0, r, b), u = st(t, t), f = st(t, i), f > u && (r.top = u, r.height = f - u, r.left += 2, r.width -= 5, n.isFunction(o) ? (t = o(t, i)) && (r.position = "absolute", r.zIndex = 8, w = n(t).css(r).appendTo(b)) : (r.isStart = !0, r.isEnd = !0, w = n(ku({title:"", start:t, end:i, className:["fc-select-helper"], editable:!1}, r)), w.css("opacity", l("dragOpacity"))), w && (pi(w), b.append(w), v(w, r.width, !0), oi(w, r.height, !0))))) : br(t, i)
        }

        function vr() {
            ir(), w && (w.remove(), w = null)
        }

        function wu(t) {
            if (t.which == 1 && l("selectable")) {
                eu(t);
                var r;
                at.start(function (n, t) {
                    vr(), n && n.col == t.col && !vi(n) ? (t = ti(t), n = ti(n), r = [t, u(i(t), l("slotMinutes")), n, u(i(n), l("slotMinutes"))].sort(ai), yr(r[0], r[3])) : r = null
                }, t);
                n(document).one("mouseup", function (n) {
                    at.stop(), r && (+r[0] == +r[1] && pr(r[0], !1, n), gu(r[0], r[3], !1, n))
                })
            }
        }

        function pr(n, t, i) {
            ei("dayClick", it[nr(n.getDay())], n, t, i)
        }

        function pu(n, t) {
            at.start(function (n) {
                if (ir(), n)if (vi(n))dr(n.row, n.col, n.row, n.col); else {
                    n = ti(n);
                    var t = u(i(n), l("defaultEventMinutes"));
                    br(n, t)
                }
            }, t)
        }

        function yu(n, t, i) {
            var r = at.stop();
            ir(), r && ei("drop", n, ti(r), vi(r), t, i)
        }

        var h = this;
        h.renderAgenda = fu, h.setWidth = ou, h.setHeight = cu, h.beforeHide = lu, h.afterShow = uu, h.defaultEventEnd = of, h.timePosition = st, h.dayOfWeekCol = nr, h.dateCell = tf, h.cellDate = ti, h.cellIsAllDay = vi, h.allDayRow = sf, h.allDayBounds = ff, h.getHoverListener = function () {
            return at
        }, h.colContentLeft = uf, h.colContentRight = rf, h.getDaySegmentContainer = function () {
            return ki
        }, h.getSlotSegmentContainer = function () {
            return rr
        }, h.getMinMinute = function () {
            return ot
        }, h.getMaxMinute = function () {
            return ui
        }, h.getBodyContent = function () {
            return b
        }, h.getRowCnt = function () {
            return 1
        }, h.getColCnt = function () {
            return a
        }, h.getColWidth = function () {
            return fi
        }, h.getSlotHeight = function () {
            return bt
        }, h.defaultSelectionEnd = ef, h.renderDayOverlay = kr, h.renderSelection = nf, h.clearSelection = vr, h.reportDayClick = pr, h.dragStart = pu, h.dragStop = yu, kt.call(h, f, o, s), dt.call(h), wt.call(h), wr.call(h);
        var l = h.opt, ei = h.trigger, bu = h.clearEvents, ru = h.renderOverlay, ir = h.clearOverlays, gu = h.reportSelection, eu = h.unselect, du = h.daySelectionMousedown, ku = h.slotSegHtml, iu = o.formatDate, ct, ni, si, gt, it, ar, gi, cr, nt, ki, hi, li, y, b, rr, tt, fr, lt, vt, w, or, sr, ut, fi, bi, bt, ur, a, wi, et, at, yi, tr = {}, pt, er, lr, hr, d, g, ot, ui, tu;
        ft(f.addClass("fc-agenda")), et = new ri(function (t, i) {
            function h(n) {
                return Math.max(s, Math.min(c, n))
            }

            var u, r, e;
            si.each(function (t, f) {
                u = n(f), r = u.offset().left, t && (e[1] = r), e = [r], i[t] = e
            }), e[1] = r + u.outerWidth(), l("allDaySlot") && (u = li, r = u.offset().top, t[0] = [r, r + u.outerHeight()]);
            for (var o = b.offset().top, s = y.offset().top, c = s + y.outerHeight(), f = 0; f < wi; f++)t.push([h(o + bt * f), h(o + bt * (f + 1))])
        }), at = new ii(et), yi = new yt(function (n) {
            return ar.eq(n)
        })
    }

    function wr() {
        function dt(n, t) {
            wi(n);
            for (var f = n.length, u = [], r = [], i = 0; i < f; i++)n[i].allDay ? u.push(n[i]) : r.push(n[i]);
            e("allDaySlot") && (pt(g(u), t), ki()), ci(si(r), t)
        }

        function hi() {
            di(), vi().empty(), it().empty()
        }

        function g(t) {
            t = et(at(t, n.map(t, w), f.visStart, f.visEnd));
            for (var s = t.length, e, r, u, o = [], i = 0; i < s; i++)for (e = t[i], r = 0; r < e.length; r++)u = e[r], u.row = 0, u.level = i, o.push(u);
            return o
        }

        function si(t) {
            for (var b = l(), y = ut(), k = ai(), a = u(i(f.visStart), y), w = n.map(t, li), s, e, v, c, h, p = [], o = 0; o < b; o++) {
                for (s = et(at(t, w, a, u(i(a), k - y))), br(s), e = 0; e < s.length; e++)for (v = s[e], c = 0; c < v.length; c++)h = v[c], h.col = o, h.level = e, p.push(h);
                r(a, 1, !0)
            }
            return p
        }

        function li(n) {
            return n.end ? i(n.end) : u(i(n.start), e("defaultEventMinutes"))
        }

        function ci(i, r) {
            var o, k = i.length, u, h, ft, st, y, v, b, ut, a, f = "", nt, c, w = {}, et = {}, g = it(), d;
            for (o = l(), (nt = e("isRTL")) ? (c = -1, d = o - 1) : (c = 1, d = 0), o = 0; o < k; o++)u = i[o], h = u.event, ft = rt(u.start, u.start), st = rt(u.start, u.end), y = u.col, v = u.level, b = u.forward || 0, ut = pi(y * c + d), a = yi(y * c + d) - ut, a = Math.min(a - 6, a * .95), y = v ? a / (v + b + 1) : b ? (a / (b + 1) - 6) * 2 : a, v = ut + a / (v + b + 1) * v * c + (nt ? a - y : 0), u.top = ft, u.left = v, u.outerWidth = y, u.outerHeight = st - ft, f += ot(h, u);
            for (g[0].innerHTML = f, nt = g.children(), o = 0; o < k; o++)u = i[o], h = u.event, f = n(nt[o]), c = s("eventRender", h, h, f), c === !1 ? f.remove() : (c && c !== !0 && (f.remove(), f = n(c).css({position:"absolute", top:u.top, left:u.left}).appendTo(g)), u.element = f, h._id === r ? ht(h, f, u) : f[0]._fci = o, ni(h, f));
            for (ei(g, i, ht), o = 0; o < k; o++)u = i[o], (f = u.element) && (h = w[r = u.key = ui(f[0])], u.vsides = h === t ? w[r] = p(f, !0) : h, h = et[r], u.hsides = h === t ? et[r] = tt(f, !0) : h, r = f.find("div.fc-event-content"), r.length && (u.contentTop = r[0].offsetTop));
            for (o = 0; o < k; o++)u = i[o], (f = u.element) && (f[0].style.width = Math.max(0, u.outerWidth - u.hsides) + "px", w = Math.max(0, u.outerHeight - u.vsides), f[0].style.height = w + "px", h = u.event, u.contentTop !== t && w - u.contentTop < 10 && (f.find("div.fc-event-time").text(wt(h.start, e("timeFormat")) + " - " + h.title), f.find("div.fc-event-title").remove()), s("eventAfterRender", h, h, f))
        }

        function ot(n, t) {
            var r = "<", u = n.url, f = bt(n, e), s = f ? " style='" + f + "'" : "", i = ["fc-event", "fc-event-skin", "fc-event-vert"];
            return k(n) && i.push("fc-event-draggable"), t.isStart && i.push("fc-corner-top"), t.isEnd && i.push("fc-corner-bottom"), i = i.concat(n.className), n.source && (i = i.concat(n.source.className || [])), r += o(n.url).indexOf("http://") == "-1" ? u ? "a target='_blank' href='http://" + o(n.url) + "'" : "div" : u ? "a target='_blank' href='" + o(n.url) + "'" : "div", r += " class='" + i.join(" ") + "' style='position:absolute;z-index:8;top:" + t.top + "px;left:" + t.left + "px;" + f + "'><div class='fc-event-inner fc-event-skin'" + s + "><div class='fc-event-head fc-event-skin'" + s + "><div class='fc-event-time'>" + o(v(n.start, n.end, e("timeFormat"))) + "</div></div><div class='fc-event-content'><div class='fc-event-title'>" + o(n.title) + "</div></div><div class='fc-event-bg'></div></div>", t.isEnd && y(n) && (r += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), r += "</" + (u ? "a" : "div") + ">"
        }

        function ii(n, t, i) {
            k(n) && ti(n, t, i.isStart), i.isEnd && y(n) && yt(n, t, i), nt(n, t)
        }

        function ht(n, t, i) {
            var r = t.find("div.fc-event-time");
            k(n) && fi(n, t, r), i.isEnd && y(n) && ri(n, t, r), nt(n, t)
        }

        function ti(n, t, u) {
            function v() {
                o || (t.width(k).height("").draggable("option", "grid", null), o = !0)
            }

            var k, f, o = !0, l, tt = e("isRTL") ? -1 : 1, y = ft(), p = d(), g = c(), nt = ut();
            t.draggable({zIndex:9, opacity:e("dragOpacity", "month"), revertDuration:e("dragRevertDuration"), start:function (c, b) {
                s("eventDragStart", t, n, c, b), a(n, t), k = t.width(), y.start(function (s, c, a, y) {
                    h(), s ? (f = !1, l = y * tt, s.row ? u ? o && (t.width(p - 10), oi(t, g * Math.round((n.end ? (n.end - n.start) / nr : e("defaultEventMinutes")) / e("slotMinutes"))), t.draggable("option", "grid", [p, 1]), o = !1) : f = !0 : (lt(r(i(n.start), l), r(w(n), l)), v()), f = f || o && !l) : (v(), f = !0), t.draggable("option", "revert", f)
                }, c, "drag")
            }, stop:function (i, r) {
                if (y.stop(), h(), s("eventDragStop", t, n, i, r), f)v(), t.css("filter", ""), b(n, t); else {
                    var u = 0;
                    o || (u = Math.round((t.offset().top - kt().offset().top) / g) * e("slotMinutes") + nt - (n.start.getHours() * 60 + n.start.getMinutes())), st(this, n, l, u, o, i, r)
                }
            }})
        }

        function fi(n, t, f) {
            function rt(t) {
                var o = u(i(n.start), t), r;
                n.end && (r = u(i(n.end), t)), f.text(v(o, r, e("timeFormat")))
            }

            function ut() {
                o && (f.css("display", ""), t.draggable("option", "grid", [tt, g]), o = !1)
            }

            var nt, o = !1, p, y, k, et = e("isRTL") ? -1 : 1, it = ft(), ot = l(), tt = d(), g = c();
            t.draggable({zIndex:9, scroll:!1, grid:[tt, g], axis:ot == 1 ? "y" : !1, opacity:e("dragOpacity"), revertDuration:e("dragRevertDuration"), start:function (u, c) {
                s("eventDragStart", t, n, u, c), a(n, t), nt = t.position(), y = k = 0, it.start(function (u, s, c, l) {
                    t.draggable("option", "revert", !u), h(), u && (p = l * et, e("allDaySlot") && !u.row ? (o || (o = !0, f.hide(), t.draggable("option", "grid", null)), lt(r(i(n.start), p), r(w(n), p))) : ut())
                }, u, "drag")
            }, drag:function (n, t) {
                y = Math.round((t.position.top - nt.top) / g) * e("slotMinutes"), y != k && (o || rt(y), k = y)
            }, stop:function (i, r) {
                var u = it.stop();
                h(), s("eventDragStop", t, n, i, r), u && (p || y || o) ? st(this, n, p, o ? 0 : y, o, i, r) : (ut(), t.css("filter", ""), t.css(nt), rt(0), b(n, t))
            }})
        }

        function ri(n, t, i) {
            var r, o, f = c();
            t.resizable({handles:{s:"div.ui-resizable-s"}, grid:f, start:function (i, u) {
                r = o = 0, a(n, t), t.css("z-index", 9), s("eventResizeStart", this, n, i, u)
            }, resize:function (s, h) {
                r = Math.round((Math.max(f, t.height()) - h.originalSize.height) / f), r != o && (i.text(v(n.start, !r && !n.end ? null : u(bi(n), e("slotMinutes") * r), e("timeFormat"))), o = r)
            }, stop:function (i, u) {
                s("eventResizeStop", this, n, i, u), r ? vt(this, n, 0, e("slotMinutes") * r, i, u) : (t.css("z-index", 8), b(n, t))
            }})
        }

        var f = this;
        f.renderEvents = dt, f.compileDaySegs = g, f.clearEvents = hi, f.slotSegHtml = ot, f.bindDaySeg = ii, gt.call(f);
        var e = f.opt, s = f.trigger, k = f.isEventDraggable, y = f.isEventResizable, bi = f.eventEnd, wi = f.reportEvents, di = f.reportEventClear, nt = f.eventElementHandlers, ki = f.setHeight, vi = f.getDaySegmentContainer, it = f.getSlotSegmentContainer, ft = f.getHoverListener, ai = f.getMaxMinute, ut = f.getMinMinute, rt = f.timePosition, pi = f.colContentLeft, yi = f.colContentRight, pt = f.renderDaySegs, yt = f.resizableDayEvent, l = f.getColCnt, d = f.getColWidth, c = f.getSlotHeight, kt = f.getBodyContent, ni = f.reportEventElement, b = f.showEvents, a = f.hideEvents, st = f.eventDrop, vt = f.eventResize, lt = f.renderDayOverlay, h = f.clearOverlays, ct = f.calendar, wt = ct.formatDate, v = ct.formatDates
    }

    function br(n) {
        for (var u, r, f, e, i, t = n.length - 1; t > 0; t--)for (f = n[t], u = 0; u < f.length; u++)for (e = f[u], r = 0; r < n[t - 1].length; r++)i = n[t - 1][r], fi(e, i) && (i.forward = Math.max(i.forward || 0, (e.forward || 0) + 1))
    }

    function kt(n, f, e) {
        function l(n, t) {
            return(n = v[n], typeof n == "object") ? it(n, t || e) : n
        }

        function h(n, t) {
            return f.trigger.apply(f, [n, t || o].concat(Array.prototype.slice.call(arguments, 2), [o]))
        }

        function ft(n) {
            return p(n) && !l("disableDragging")
        }

        function ut(n) {
            return p(n) && !l("disableResizing")
        }

        function p(n) {
            return y(n.editable, (n.source || {}).editable, l("editable"))
        }

        function ct(n) {
            s = {};
            for (var r = n.length, t, i = 0; i < r; i++)t = n[i], s[t._id] ? s[t._id].push(t) : s[t._id] = [t]
        }

        function nt(n) {
            return n.end ? i(n.end) : tt(n)
        }

        function lt(n, t) {
            d.push(t), c[n._id] ? c[n._id].push(t) : c[n._id] = [t]
        }

        function st() {
            d = [], c = {}
        }

        function ot(n, t) {
            t.click(
                function (i) {
                    if (!t.hasClass("ui-draggable-dragging") && !t.hasClass("ui-resizable-resizing"))return h("eventClick", this, n, i)
                }).hover(function (t) {
                h("eventMouseover", this, n, t)
            }, function (t) {
                h("eventMouseout", this, n, t)
            })
        }

        function rt(n, t) {
            w(n, t, "show")
        }

        function et(n, t) {
            w(n, t, "hide")
        }

        function w(n, t, i) {
            n = c[n._id];
            for (var u = n.length, r = 0; r < u; r++)t && n[r][0] == t[0] || n[r][i]()
        }

        function ht(n, t, i, r, u, f, e) {
            var c = t.allDay, o = t._id;
            g(s[o], i, r, u), h("eventDrop", n, t, i, r, u, function () {
                g(s[o], -i, -r, c), a(o)
            }, f, e), a(o)
        }

        function at(n, t, i, r, u, f) {
            var e = t._id;
            b(s[e], i, r), h("eventResize", n, t, i, r, function () {
                b(s[e], -i, -r), a(e)
            }, u, f), a(e)
        }

        function g(n, i, f, e) {
            f = f || 0;
            for (var o, h = n.length, s = 0; s < h; s++)o = n[s], e !== t && (o.allDay = e), u(r(o.start, i, !0), f), o.end && (o.end = u(r(o.end, i, !0), f)), k(o, v)
        }

        function b(n, t, i) {
            i = i || 0;
            for (var f, o = n.length, e = 0; e < o; e++)f = n[e], f.end = u(r(nt(f), t, !0), i), k(f, v)
        }

        var o = this;
        o.element = n, o.calendar = f, o.name = e, o.opt = l, o.trigger = h, o.isEventDraggable = ft, o.isEventResizable = ut, o.reportEvents = ct, o.eventEnd = nt, o.reportEventElement = lt, o.reportEventClear = st, o.eventElementHandlers = ot, o.showEvents = rt, o.hideEvents = et, o.eventDrop = ht, o.eventResize = at;
        var tt = o.defaultEventEnd, k = f.normalizeEvent, a = f.reportEventChange, s = {}, d = [], c = {}, v = f.options
    }

    function gt() {
        function pt(n, t) {
            var r = y(), a = h(), v = c(), o = 0, f, i, s = n.length, u, e;
            for (r[0].innerHTML = b(n), k(n, r.children()), kt(n), at(n, r, t), it(n), rt(n), nt(n), t = g(), r = 0; r < a; r++) {
                for (f = [], i = 0; i < v; i++)f[i] = 0;
                for (; o < s && (u = n[o]).row == r;) {
                    for (i = pi(f.slice(u.startCol, u.endCol)), u.top = i, i += u.outerHeight, e = u.startCol; e < u.endCol; e++)f[e] = i;
                    o++
                }
                t[r].height(pi(f))
            }
            l(n, p(t))
        }

        function wt(t, i, r) {
            var u = n("<div/>"), f = y(), o = t.length, e;
            for (u[0].innerHTML = b(t), u = u.children(), f.append(u), k(t, u), it(t), rt(t), nt(t), l(t, p(g())), u = [], f = 0; f < o; f++)(e = t[f].element) && (t[f].row === i && e.css("top", r), u.push(e[0]));
            return n(u)
        }

        function b(n) {
            var b = f("isRTL"), h, g = n.length, t, i, e, r;
            h = et();
            var k = h.left, d = h.right, l, y, c, w, p, u = "";
            for (h = 0; h < g; h++)t = n[h], i = t.event, r = ["fc-event", "fc-event-skin", "fc-event-hori"], yt(i) && r.push("fc-event-draggable"), b ? (t.isStart && r.push("fc-corner-right"), t.isEnd && r.push("fc-corner-left"), l = s(t.end.getDay() - 1), y = s(t.start.getDay()), c = t.isEnd ? a(l) : k, w = t.isStart ? v(y) : d) : (t.isStart && r.push("fc-corner-left"), t.isEnd && r.push("fc-corner-right"), l = s(t.start.getDay()), y = s(t.end.getDay() - 1), c = t.isStart ? a(l) : k, w = t.isEnd ? v(y) : d), r = r.concat(i.className), i.source && (r = r.concat(i.source.className || [])), e = i.url, p = bt(i, f), u += o(e).indexOf("http://") == "-1" ? e ? "<a target='_blank' href='http://" + o(e) + "'" : "<div" : e ? "<a target='_blank' href='" + o(e) + "'" : "<div", u += " class='" + r.join(" ") + "' style='position:absolute;z-index:8;left:" + c + "px;" + p + "'><div class='fc-event-inner fc-event-skin'" + (p ? " style='" + p + "'" : "") + ">", !i.allDay && t.isStart && (u += "<span class='fc-event-time'>" + o(st(i.start, i.end, f("timeFormat"))) + "</span>"), u += "<span class='fc-event-title'>" + o(i.title) + "</span></div>", t.isEnd && ti(i) && (u += "<div class='ui-resizable-handle ui-resizable-" + (b ? "w" : "e") + "'>&nbsp;&nbsp;&nbsp;</div>"), u += "</" + (e ? "a" : "div") + ">", t.left = c, t.outerWidth = w - c, t.startCol = l, t.endCol = y + 1;
            return u
        }

        function k(t, i) {
            for (var s = t.length, o, r, u, f = 0; f < s; f++)o = t[f], r = o.event, u = n(i[f]), r = e("eventRender", r, r, u), r === !1 ? u.remove() : (r && r !== !0 && (r = n(r).css({position:"absolute", left:o.left}), u.replaceWith(r), u = r), o.element = u)
        }

        function kt(n) {
            for (var u = n.length, i, r, t = 0; t < u; t++)i = n[t], (r = i.element) && ri(i.event, r)
        }

        function at(n, t, i) {
            for (var o = n.length, u, f, e, r = 0; r < o; r++)u = n[r], (f = u.element) && (e = u.event, e._id === i ? w(e, f, u) : f[0]._fci = r);
            ei(t, n, w)
        }

        function it(n) {
            for (var s = n.length, i, e, f, r, o = {}, u = 0; u < s; u++)i = n[u], (e = i.element) && (f = i.key = ui(e[0]), r = o[f], r === t && (r = o[f] = tt(e, !0)), i.hsides = r)
        }

        function rt(n) {
            for (var u = n.length, t, r, i = 0; i < u; i++)t = n[i], (r = t.element) && (r[0].style.width = Math.max(0, t.outerWidth - t.hsides) + "px")
        }

        function nt(n) {
            for (var s = n.length, i, e, f, r, o = {}, u = 0; u < s; u++)i = n[u], (e = i.element) && (f = i.key, r = o[f], r === t && (r = o[f] = yi(e)), i.outerHeight = e[0].offsetHeight + r)
        }

        function g() {
            for (var i = h(), t = [], n = 0; n < i; n++)t[n] = lt(n).find("td:first div.fc-day-content > div");
            return t
        }

        function p(n) {
            for (var r = n.length, i = [], t = 0; t < r; t++)i[t] = n[t][0].offsetTop;
            return i
        }

        function l(n, t) {
            for (var f = n.length, i, u, r = 0; r < f; r++)i = n[r], (u = i.element) && (u[0].style.top = t[i.row] + (i.top || 0) + "px", i = i.event, e("eventAfterRender", i, i, u))
        }

        function vt(t, o, s) {
            var l = f("isRTL"), v = l ? "w" : "e", y = o.find("div.ui-resizable-" + v), a = !1;
            ft(o), o.mousedown(
                function (n) {
                    n.preventDefault()
                }).click(function (n) {
                a && (n.preventDefault(), n.stopImmediatePropagation())
            }), y.mousedown(function (f) {
                function it(i) {
                    e("eventResizeStop", this, t, i), n("body").css("cursor", ""), k.stop(), d(), p && ni(this, t, p, 0, i), setTimeout(function () {
                        a = !1
                    }, 0)
                }

                if (f.which == 1) {
                    a = !0;
                    var k = u.getHoverListener(), rt = h(), tt = c(), nt = l ? -1 : 1, g = l ? tt - 1 : 0, ft = o.css("top"), p, y, b = n.extend({}, t), w = ht(t.start);
                    ut();
                    n("body").css("cursor", v + "-resize").one("mouseup", it);
                    e("eventResizeStart", this, t, f), k.start(function (n, u) {
                        if (n) {
                            var f = Math.max(w.row, n.row);
                            n = n.col, rt == 1 && (f = 0), f == w.row && (n = l ? Math.min(w.col, n) : Math.max(w.col, n)), p = f * 7 + n * nt + g - (u.row * 7 + u.col * nt + g), u = r(ii(t), p, !0), p ? (b.end = u, f = y, y = wt(ct([b]), s.row, ft), y.find("*").css("cursor", v + "-resize"), f && f.remove(), gt(t)) : y && (dt(t), y.remove(), y = null), d(), ot(t.start, r(i(u), 1))
                        }
                    }, f)
                }
            })
        }

        var u = this;
        u.renderDaySegs = pt, u.resizableDayEvent = vt;
        var f = u.opt, e = u.trigger, yt = u.isEventDraggable, ti = u.isEventResizable, ii = u.eventEnd, ri = u.reportEventElement, dt = u.showEvents, gt = u.hideEvents, ni = u.eventResize, h = u.getRowCnt, c = u.getColCnt, lt = u.allDayRow, et = u.allDayBounds, a = u.colContentLeft, v = u.colContentRight, s = u.dayOfWeekCol, ht = u.dateCell, ct = u.compileDaySegs, y = u.getDaySegmentContainer, w = u.bindDaySeg, st = u.calendar.formatDates, ot = u.renderDayOverlay, d = u.clearOverlays, ut = u.clearSelection
    }

    function wt() {
        function h(n, t, i) {
            r(), t || (t = l(n, i)), o(n, t, i), f(n, t, i)
        }

        function r(n) {
            u && (u = !1, e(), s("unselect", null, n))
        }

        function f(n, t, i, r) {
            u = !0, s("select", null, n, t, i, r)
        }

        function c(u) {
            var c = t.cellDate, l = t.cellIsAllDay, h = t.getHoverListener(), a = t.reportDayClick, s;
            if (u.which == 1 && i("selectable")) {
                r(u), h.start(function (n, t) {
                    e(), n && l(n) ? (s = [c(t), c(n)].sort(ai), o(s[0], s[1], !0)) : s = null
                }, u);
                n(document).one("mouseup", function (n) {
                    h.stop(), s && (+s[0] == +s[1] && a(s[0], !0, n), f(s[0], s[1], !0, n))
                })
            }
        }

        var t = this;
        t.select = h, t.unselect = r, t.reportSelection = f, t.daySelectionMousedown = c;
        var i = t.opt, s = t.trigger, l = t.defaultSelectionEnd, o = t.renderSelection, e = t.clearSelection, u = !1;
        i("selectable") && i("unselectAuto") && n(document).mousedown(function (t) {
            var u = i("unselectCancel");
            u && n(t.target).parents(u).length || r(t)
        })
    }

    function dt() {
        function u(r, u) {
            var f = i.shift();
            return f || (f = n("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")), f[0].parentNode != u[0] && f.appendTo(u), t.push(f.css(r).show()), f
        }

        function f() {
            for (var n; n = t.shift();)i.push(n.hide().unbind())
        }

        var r = this, t, i;
        r.renderOverlay = u, r.clearOverlays = f, t = [], i = []
    }

    function ri(n) {
        var r = this, t, i;
        r.build = function () {
            t = [], i = [], n(t, i)
        }, r.cell = function (n, r) {
            for (var s = t.length, o = i.length, f = -1, e = -1, u = 0; u < s; u++)if (r >= t[u][0] && r < t[u][1]) {
                f = u;
                break
            }
            for (u = 0; u < o; u++)if (n >= i[u][0] && n < i[u][1]) {
                e = u;
                break
            }
            return f >= 0 && e >= 0 ? {row:f, col:e} : null
        }, r.rect = function (n, r, u, f, e) {
            return e = e.offset(), {top:t[n][0] - e.top, left:i[r][0] - e.left, width:i[f][1] - i[r][0], height:t[u][1] - t[n][0]}
        }
    }

    function ii(t) {
        function u(n) {
            wi(n), n = t.cell(n.pageX, n.pageY), (!n != !r || n && (n.row != r.row || n.col != r.col)) && (n ? (i || (i = n), e(n, i, n.row - i.row, n.col - i.col)) : e(n, i), r = n)
        }

        var o = this, f, e, i, r;
        o.start = function (o, s, h) {
            e = o, i = r = null, t.build(), u(s), f = h || "mousemove", n(document).bind(f, u)
        }, o.stop = function () {
            return n(document).unbind(f, u), r
        }
    }

    function wi(n) {
        n.pageX === t && (n.pageX = n.originalEvent.pageX, n.pageY = n.originalEvent.pageY)
    }

    function yt(n) {
        function e(t) {
            return f[t] = f[t] || n(t)
        }

        var u = this, f = {}, i = {}, r = {};
        u.left = function (n) {
            return i[n] = i[n] === t ? e(n).position().left : i[n]
        }, u.right = function (n) {
            return r[n] = r[n] === t ? u.left(n) + e(n).width() : r[n]
        }, u.clear = function () {
            f = {}, i = {}, r = {}
        }
    }

    var g = {defaultView:"month", aspectRatio:1.35, header:{left:"title", center:"", right:"today prev,next"}, weekends:!0, allDayDefault:!0, ignoreTimezone:!0, lazyFetching:!0, startParam:"start", endParam:"end", titleFormat:{month:"MMMM yyyy", week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}", day:"dddd, MMM d, yyyy"}, columnFormat:{month:"ddd", week:"ddd M/d", day:"dddd M/d"}, timeFormat:{"":"h(:mm)t"}, isRTL:!1, firstDay:1, monthNames:["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], monthNamesShort:["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], dayNames:["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"], dayNamesShort:["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"], buttonText:{prev:"&nbsp;&#9668;&nbsp;", next:"&nbsp;&#9658;&nbsp;", prevYear:"&nbsp;&lt;&lt;&nbsp;", nextYear:"&nbsp;&gt;&gt;&nbsp;", today:"today", month:"month", week:"week", day:"day"}, theme:!1, buttonIcons:{prev:"circle-triangle-w", next:"circle-triangle-e"}, unselectAuto:!0, dropAccept:"*"}, bi = {header:{left:"next,prev today", center:"", right:"title"}, buttonText:{prev:"&nbsp;&#9658;&nbsp;", next:"&nbsp;&#9668;&nbsp;", prevYear:"&nbsp;&gt;&gt;&nbsp;", nextYear:"&nbsp;&lt;&lt;&nbsp;"}, buttonIcons:{prev:"circle-triangle-e", next:"circle-triangle-w"}}, f = n.fullCalendar = {version:"1.5.4"}, h = f.views = {}, vt, pt;
    n.fn.fullCalendar = function (i) {
        var f, r, u;
        return typeof i == "string" ? (f = Array.prototype.slice.call(arguments, 1), this.each(function () {
            var u = n.data(this, "fullCalendar");
            u && n.isFunction(u[i]) && (u = u[i].apply(u, f), r === t && (r = u), i == "destroy" && n.removeData(this, "fullCalendar"))
        }), r !== t) ? r : this : (u = i.eventSources || [], delete i.eventSources, i.events && (u.push(i.events), delete i.events), i = n.extend(!0, {}, g, i.isRTL || i.isRTL === t && g.isRTL ? bi : {}, i), this.each(function (t, r) {
            t = n(r), r = new rr(t, i, u), t.data("fullCalendar", r), r.render()
        }), this)
    }, f.sourceNormalizers = [], f.sourceFetchers = [], vt = {dataType:"json", cache:!1}, pt = 1, f.addDays = r, f.cloneDate = i, f.parseDate = st, f.parseISO8601 = si, f.parseTime = ht, f.formatDate = a, f.formatDates = ot;
    var ur = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], ti = 864e5, gi = 36e5, nr = 6e4, tr = {s:function (n) {
        return n.getSeconds()
    }, ss:function (n) {
        return l(n.getSeconds())
    }, m:function (n) {
        return n.getMinutes()
    }, mm:function (n) {
        return l(n.getMinutes())
    }, h:function (n) {
        return n.getHours() % 12 || 12
    }, hh:function (n) {
        return l(n.getHours() % 12 || 12)
    }, H:function (n) {
        return n.getHours()
    }, HH:function (n) {
        return l(n.getHours())
    }, d:function (n) {
        return n.getDate()
    }, dd:function (n) {
        return l(n.getDate())
    }, ddd:function (n, t) {
        return t.dayNamesShort[n.getDay()]
    }, dddd:function (n, t) {
        return t.dayNames[n.getDay()]
    }, M:function (n) {
        return n.getMonth() + 1
    }, MM:function (n) {
        return l(n.getMonth() + 1)
    }, MMM:function (n, t) {
        return t.monthNamesShort[n.getMonth()]
    }, MMMM:function (n, t) {
        return t.monthNames[n.getMonth()]
    }, yy:function (n) {
        return(n.getFullYear() + "").substring(2)
    }, yyyy:function (n) {
        return n.getFullYear()
    }, t:function (n) {
        return n.getHours() < 12 ? "a" : "p"
    }, tt:function (n) {
        return n.getHours() < 12 ? "am" : "pm"
    }, T:function (n) {
        return n.getHours() < 12 ? "A" : "P"
    }, TT:function (n) {
        return n.getHours() < 12 ? "AM" : "PM"
    }, u:function (n) {
        return a(n, "yyyy-MM-dd'T'HH:mm:ss'Z'")
    }, S:function (n) {
        return(n = n.getDate(), n > 10 && n < 20) ? "th" : ["st", "nd", "rd"][n % 10 - 1] || "th"
    }};
    f.applyAll = b, h.month = vr, h.basicWeek = hr, h.basicDay = cr, hi({weekMode:"fixed"}), h.agendaWeek = or, h.agendaDay = sr, hi({allDaySlot:!0, allDayText:"all-day", firstHour:6, slotMinutes:30, defaultEventMinutes:120, axisFormat:"h(:mm)tt", timeFormat:{agenda:"h:mm{ - h:mm}"}, dragOpacity:{agenda:.5}, minTime:0, maxTime:24})
}(jQuery), jQuery(function (n) {
    n("#basic-modal .basic").click(function () {
        return n("#basic-modal-content").modal(), !1
    })
}), Utility = {}, Utility.fancy = function (n, t, i) {
    typeof t == undefined && (t = 300), typeof i == undefined && (i = 200);
    var r;
    n.dialog({width:t, height:i, resizable:!1, modal:!0, open:function () {
        var f = $(this);
        r = $(document.createElement("a")), r.attr("style", 'display: inline;position: absolute;width: 30px;height: 30px;background: transparent url("/content/img/x.png");background-repeat: no-repeat;cursor: pointer;z-index: 1103;'), r.addClass("fancybox-close"), f.parent().before(r), $(".ui-dialog-titlebar").hide();
        var t = $(this).parent().position(), u = t.top - 10 + "px", i = t.left - 10 + this.offsetWidth + "px";
        r.css("top", u), r.css("left", i), r.click(function () {
            n.dialog("destroy"), r.remove()
        })
    }})
}, Date.prototype.stringFormat = function (n) {
    var a = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"], v = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], i = this, t = i.getHours(), s = i.getDate(), r = i.getMonth() + 1, o = i.getFullYear(), p = padBefore((o + "").substr(2, 2), 2), f = i.getMinutes(), y = padBefore(s, 2), w = padBefore(r, 2), k = padBefore(f, 2), b = a[r - 1], c = v[r - 1], h = t, l = padBefore(t, 2), u = "", e = "PM";
    return t >= 12 ? t != 12 && (t = t - 12) : (t == 0 && (t = 12), e = " AM"), u = padBefore(t, 2), n.replace("hh", u).replace("h", t).replace("HH", l).replace("H", h).replace("mm", k).replace("m", f).replace("dd", y).replace("d", s).replace("MMMM", c).replace("MMM", b).replace("MM", w).replace("yyyy", o).replace("yy", p).replace("tt", e)
}, view = {}, view.controls = {calendar:null, previous:null, next:null}, view.init = function () {
    view.controls.calendar = $("#calendar"), view.controls.previous = $(".cal-previous"), view.controls.next = $(".cal-next")
}, view.render = function () {
    view.init(), view.controls.calendar.mousemove(
        function (n) {
            var r = $(this).width(), t = n.pageX - $(this).offset().left, i = 55;
            t < i ? view.controls.previous.show() : view.controls.previous.hide(), t > r - i ? view.controls.next.show() : view.controls.next.hide()
        }).mouseout(function () {
        view.controls.previous.hide(), view.controls.next.hide()
    })
}, view.render(), view.controls.previous.hover(function () {
    $(this).show()
}, function () {
    $(this).hide()
}), view.controls.next.hover(function () {
    $(this).show()
}, function () {
    $(this).hide()
}),
    $(document).ready(function () {
    var n = $("#calendar");
    n.fullCalendar({header:{left:"", center:"title", right:""}, editable:!0, disableDragging:!0, events:function (n, t, i) {
        $.ajax({url:$("#actions-getcalendarevent").val(), data:{start:Math.round(n.getTime() / 1e3), end:Math.round(t.getTime() / 1e3)}, success:function (n) {
            for (var t = 0; t < n.length; t++)n[t].start = new Date(n[t].start + " utc"), n[t].end = new Date(n[t].end + " utc");
            i(n)
        }, error:function () {
        }})
    }, viewDisplay:function () {
        var i = getMonthName(), t = $(".fc-today").children().find($(".fc-day-number")).html();
        $(".fc-today").children().find($(".fc-day-number")).html('<div>Сегодня: ' + i + " " + t + "</div>")
    }, eventRender:function (n, t) {
        t.find(".fc-event-skin").css("background-color", n.bgcolor), t.find(".fc-event-skin").css("border-color", n.bgcolor), t.find(".fc-event-skin").parent().css("background-color", n.bgcolor), t.find(".fc-event-skin").parent().css("border-color", n.bgcolor), t.find(".fc-event-title").addClass("wrapword w120")
    }, eventClick:function (n) {
        $.ajax({type:"POST", url:$("#actions-viewcalendarevent").val(), data:{id:n.id}, success:function (n) {
            $("#viewEvent").html(n), $("#viewEvent").modal(), $("#simplemodal-container").css("height", "auto"), $("#simplemodal-container").css("max-height", "600px;"), $("#simplemodal-container").css("width", "700px"), $("#simplemodal-container").css("top", "50px"), $(".simplemodal-wrap").css("overflow", "auto")
        }, error:function () {
        }})
    }})
}), calendar = $("#calendar")
//    , $(document).ready(function (n) {
//    n(".suggestionbox").click(function () {
//        loadSuggestionBox()
//    })
//})
//    , $(document).ready(function (n) {
//    var i = n("#IsIpAddressExist").val(), t = n("#IsIpAddressRegister").val();
//    t != "True" && i == "True"// && loadSubscriptionForm(), Footer()
//})