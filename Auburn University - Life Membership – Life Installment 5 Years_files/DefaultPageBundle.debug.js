if(window.console) {window.console.log('start bundle DefaultPageBundle');}
// ~/scripts/jquery/jquery-1.9.1.js
!function (e, t) { var n, r, i = typeof t, o = e.document, a = e.location, s = e.jQuery, u = e.$, l = {}, c = [], f = c.concat, p = c.push, d = c.slice, h = c.indexOf, g = l.toString, m = l.hasOwnProperty, y = "1.9.1".trim, v = function (e, t) { return new v.fn.init(e, t, r) }, b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, x = /\S+/g, w = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, T = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, C = /^[\],:{}\s]*$/, k = /(?:^|:|,)(?:\s*\[)+/g, E = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, S = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, A = /^-ms-/, j = /-([\da-z])/gi, D = function (e, t) { return t.toUpperCase() }, L = function (e) { (o.addEventListener || "load" === e.type || "complete" === o.readyState) && (H(), v.ready()) }, H = function () { o.addEventListener ? (o.removeEventListener("DOMContentLoaded", L, !1), e.removeEventListener("load", L, !1)) : (o.detachEvent("onreadystatechange", L), e.detachEvent("onload", L)) }; function q(e) { var t = e.length, n = v.type(e); return !v.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e))) } v.fn = v.prototype = { jquery: "1.9.1", constructor: v, init: function (e, n, r) { var i, a; if (!e) return this; if ("string" == typeof e) { if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e); if (i[1]) { if (n = n instanceof v ? n[0] : n, v.merge(this, v.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), N.test(i[1]) && v.isPlainObject(n)) for (i in n) v.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]); return this } if ((a = o.getElementById(i[2])) && a.parentNode) { if (a.id !== i[2]) return r.find(e); this.length = 1, this[0] = a } return this.context = o, this.selector = e, this } return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this)) }, selector: "", length: 0, size: function () { return this.length }, toArray: function () { return d.call(this) }, get: function (e) { return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e] }, pushStack: function (e) { var t = v.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function (e, t) { return v.each(this, e, t) }, ready: function (e) { return v.ready.promise().done(e), this }, slice: function () { return this.pushStack(d.apply(this, arguments)) }, first: function () { return this.eq(0) }, last: function () { return this.eq(-1) }, eq: function (e) { var t = this.length, n = +e + (e < 0 ? t : 0); return this.pushStack(n >= 0 && n < t ? [this[n]] : []) }, map: function (e) { return this.pushStack(v.map(this, function (t, n) { return e.call(t, n, t) })) }, end: function () { return this.prevObject || this.constructor(null) }, push: p, sort: [].sort, splice: [].splice }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () { var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1; for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || v.isFunction(s) || (s = {}), l === u && (s = this, --u); u < l; u++)if (null != (o = arguments[u])) for (i in o) e = s[i], r = o[i], "__proto__" !== i && s !== r && (c && r && (v.isPlainObject(r) || (n = v.isArray(r))) ? (n ? (n = !1, a = e && v.isArray(e) ? e : []) : a = e && v.isPlainObject(e) ? e : {}, s[i] = v.extend(c, a, r)) : r !== t && (s[i] = r)); return s }, v.extend({ noConflict: function (t) { return e.$ === v && (e.$ = u), t && e.jQuery === v && (e.jQuery = s), v }, isReady: !1, readyWait: 1, holdReady: function (e) { e ? v.readyWait++ : v.ready(!0) }, ready: function (e) { if (!0 === e ? !--v.readyWait : !v.isReady) { if (!o.body) return setTimeout(v.ready); v.isReady = !0, !0 !== e && --v.readyWait > 0 || (n.resolveWith(o, [v]), v.fn.trigger && v(o).trigger("ready").off("ready")) } }, isFunction: function (e) { return "function" === v.type(e) }, isArray: Array.isArray || function (e) { return "array" === v.type(e) }, isWindow: function (e) { return null != e && e == e.window }, isNumeric: function (e) { return !isNaN(parseFloat(e)) && isFinite(e) }, type: function (e) { return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? l[g.call(e)] || "object" : typeof e }, isPlainObject: function (e) { if (!e || "object" !== v.type(e) || e.nodeType || v.isWindow(e)) return !1; try { if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 } var n; for (n in e); return n === t || m.call(e, n) }, isEmptyObject: function (e) { var t; for (t in e) return !1; return !0 }, error: function (e) { throw new Error(e) }, parseHTML: function (e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || o; var r = N.exec(e), i = !n && []; return r ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, i), i && v(i).remove(), v.merge([], r.childNodes)) }, parseJSON: function (t) { return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = v.trim(t)) && C.test(t.replace(E, "@").replace(S, "]").replace(k, "")) ? new Function("return " + t)() : void v.error("Invalid JSON: " + t) }, parseXML: function (n) { var r; if (!n || "string" != typeof n) return null; try { e.DOMParser ? r = (new DOMParser).parseFromString(n, "text/xml") : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(n)) } catch (e) { r = t } return r && r.documentElement && !r.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + n), r }, noop: function () { }, globalEval: function (t) { t && v.trim(t) && (e.execScript || function (t) { e.eval.call(e, t) })(t) }, camelCase: function (e) { return e.replace(A, "ms-").replace(j, D) }, nodeName: function (e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function (e, t, n) { var r = 0, i = e.length, o = q(e); if (n) { if (o) for (; r < i && !1 !== t.apply(e[r], n); r++); else for (r in e) if (!1 === t.apply(e[r], n)) break } else if (o) for (; r < i && !1 !== t.call(e[r], r, e[r]); r++); else for (r in e) if (!1 === t.call(e[r], r, e[r])) break; return e }, trim: y && !y.call("\ufeff�") ? function (e) { return null == e ? "" : y.call(e) } : function (e) { return null == e ? "" : (e + "").replace(w, "") }, makeArray: function (e, t) { var n = t || []; return null != e && (q(Object(e)) ? v.merge(n, "string" == typeof e ? [e] : e) : p.call(n, e)), n }, inArray: function (e, t, n) { var r; if (t) { if (h) return h.call(t, e, n); for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)if (n in t && t[n] === e) return n } return -1 }, merge: function (e, n) { var r = n.length, i = e.length, o = 0; if ("number" == typeof r) for (; o < r; o++)e[i++] = n[o]; else for (; n[o] !== t;)e[i++] = n[o++]; return e.length = i, e }, grep: function (e, t, n) { var r = [], i = 0, o = e.length; for (n = !!n; i < o; i++)n !== !!t(e[i], i) && r.push(e[i]); return r }, map: function (e, t, n) { var r, i = 0, o = e.length, a = []; if (q(e)) for (; i < o; i++)null != (r = t(e[i], i, n)) && (a[a.length] = r); else for (i in e) null != (r = t(e[i], i, n)) && (a[a.length] = r); return f.apply([], a) }, guid: 1, proxy: function (e, n) { var r, i, o; return "string" == typeof n && (o = e[n], n = e, e = o), v.isFunction(e) ? (r = d.call(arguments, 2), (i = function () { return e.apply(n || this, r.concat(d.call(arguments))) }).guid = e.guid = e.guid || v.guid++ , i) : t }, access: function (e, n, r, i, o, a, s) { var u = 0, l = e.length, c = null == r; if ("object" === v.type(r)) for (u in o = !0, r) v.access(e, n, u, r[u], !0, a, s); else if (i !== t && (o = !0, v.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) { return c.call(v(e), n) })), n)) for (; u < l; u++)n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r))); return o ? e : c ? n.call(e) : l ? n(e[0], r) : a }, now: function () { return (new Date).getTime() } }), v.ready.promise = function (t) { if (!n) if (n = v.Deferred(), "complete" === o.readyState) setTimeout(v.ready); else if (o.addEventListener) o.addEventListener("DOMContentLoaded", L, !1), e.addEventListener("load", L, !1); else { o.attachEvent("onreadystatechange", L), e.attachEvent("onload", L); var r = !1; try { r = null == e.frameElement && o.documentElement } catch (e) { } r && r.doScroll && function e() { if (!v.isReady) { try { r.doScroll("left") } catch (t) { return setTimeout(e, 50) } H(), v.ready() } }() } return n.promise(t) }, v.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) { l["[object " + t + "]"] = t.toLowerCase() }), r = v(o); var M = {}; v.Callbacks = function (e) { e = "string" == typeof e ? M[e] || function (e) { var t = M[e] = {}; return v.each(e.match(x) || [], function (e, n) { t[n] = !0 }), t }(e) : v.extend({}, e); var n, r, i, o, a, s, u = [], l = !e.once && [], c = function (t) { for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && a < o; a++)if (!1 === u[a].apply(t[0], t[1]) && e.stopOnFalse) { r = !1; break } n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : f.disable()) }, f = { add: function () { if (u) { var t = u.length; !function t(n) { v.each(n, function (n, r) { var i = v.type(r); "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r) }) }(arguments), n ? o = u.length : r && (s = t, c(r)) } return this }, remove: function () { return u && v.each(arguments, function (e, t) { for (var r; (r = v.inArray(t, u, r)) > -1;)u.splice(r, 1), n && (r <= o && o-- , r <= a && a--) }), this }, has: function (e) { return e ? v.inArray(e, u) > -1 : !(!u || !u.length) }, empty: function () { return u = [], this }, disable: function () { return u = l = r = t, this }, disabled: function () { return !u }, lock: function () { return l = t, r || f.disable(), this }, locked: function () { return !l }, fireWith: function (e, t) { return t = [e, (t = t || []).slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this }, fire: function () { return f.fireWith(this, arguments), this }, fired: function () { return !!i } }; return f }, v.extend({ Deferred: function (e) { var t = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]], n = "pending", r = { state: function () { return n }, always: function () { return i.done(arguments).fail(arguments), this }, then: function () { var e = arguments; return v.Deferred(function (n) { v.each(t, function (t, o) { var a = o[0], s = v.isFunction(e[t]) && e[t]; i[o[1]](function () { var e = s && s.apply(this, arguments); e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments) }) }), e = null }).promise() }, promise: function (e) { return null != e ? v.extend(e, r) : r } }, i = {}; return r.pipe = r.then, v.each(t, function (e, o) { var a = o[2], s = o[3]; r[o[1]] = a.add, s && a.add(function () { n = s }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () { return i[o[0] + "With"](this === i ? r : this, arguments), this }, i[o[0] + "With"] = a.fireWith }), r.promise(i), e && e.call(i, i), i }, when: function (e) { var t, n, r, i = 0, o = d.call(arguments), a = o.length, s = 1 !== a || e && v.isFunction(e.promise) ? a : 0, u = 1 === s ? e : v.Deferred(), l = function (e, n, r) { return function (i) { n[e] = this, r[e] = arguments.length > 1 ? d.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r) } }; if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)o[i] && v.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s; return s || u.resolveWith(r, o), u.promise() } }), v.support = function () { var t, n, r, a, s, u, l, c, f, p, d = o.createElement("div"); if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) return {}; l = (s = o.createElement("select")).appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = { getSetAttribute: "t" !== d.className, leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(r.getAttribute("style")), hrefNormalized: "/a" === r.getAttribute("href"), opacity: /^0.5/.test(r.style.opacity), cssFloat: !!r.style.cssFloat, checkOn: !!a.value, optSelected: l.selected, enctype: !!o.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === o.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled; try { delete d.test } catch (e) { t.deleteExpando = !1 } for (p in (a = o.createElement("input")).setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), (u = o.createDocumentFragment()).appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () { t.noCloneEvent = !1 }), d.cloneNode(!0).click()), { submit: !0, change: !0, focusin: !0 }) d.setAttribute(c = "on" + p, "t"), t[p + "Bubbles"] = c in e || !1 === d.attributes[c].expando; return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, v(function () { var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", u = o.getElementsByTagName("body")[0]; u && ((n = o.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (a = d.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", f = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = f && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, (r = d.appendChild(o.createElement("div"))).style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null) }), n = s = u = l = r = a = null, t }(); var _ = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, F = /([A-Z])/g; function O(e, n, r, i) { if (v.acceptData(e)) { var o, a, s = v.expando, u = "string" == typeof n, l = e.nodeType, f = l ? v.cache : e, p = l ? e[s] : e[s] && s; if (p && f[p] && (i || f[p].data) || !u || r !== t) return p || (l ? e[s] = p = c.pop() || v.guid++ : p = s), f[p] || (f[p] = {}, l || (f[p].toJSON = v.noop)), "object" != typeof n && "function" != typeof n || (i ? f[p] = v.extend(f[p], n) : f[p].data = v.extend(f[p].data, n)), o = f[p], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[v.camelCase(n)] = r), u ? null == (a = o[n]) && (a = o[v.camelCase(n)]) : a = o, a } } function B(e, t, n) { if (v.acceptData(e)) { var r, i, o, a = e.nodeType, s = a ? v.cache : e, u = a ? e[v.expando] : v.expando; if (s[u]) { if (t && (o = n ? s[u] : s[u].data)) { for ((r = 0, i = (t = v.isArray(t) ? t.concat(v.map(t, v.camelCase)) : t in o ? [t] : (t = v.camelCase(t)) in o ? [t] : t.split(" ")).length); r < i; r++)delete o[t[r]]; if (!(n ? R : v.isEmptyObject)(o)) return } (n || (delete s[u].data, R(s[u]))) && (a ? v.cleanData([e], !0) : v.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null) } } } function P(e, n, r) { if (r === t && 1 === e.nodeType) { var i = "data-" + n.replace(F, "-$1").toLowerCase(); if ("string" == typeof (r = e.getAttribute(i))) { try { r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : _.test(r) ? v.parseJSON(r) : r) } catch (e) { } v.data(e, n, r) } else r = t } return r } function R(e) { var t; for (t in e) if (("data" !== t || !v.isEmptyObject(e[t])) && "toJSON" !== t) return !1; return !0 } v.extend({ cache: {}, expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function (e) { return !!(e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando]) && !R(e) }, data: function (e, t, n) { return O(e, t, n) }, removeData: function (e, t) { return B(e, t) }, _data: function (e, t, n) { return O(e, t, n, !0) }, _removeData: function (e, t) { return B(e, t, !0) }, acceptData: function (e) { if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1; var t = e.nodeName && v.noData[e.nodeName.toLowerCase()]; return !t || !0 !== t && e.getAttribute("classid") === t } }), v.fn.extend({ data: function (e, n) { var r, i, o = this[0], a = 0, s = null; if (e === t) { if (this.length && (s = v.data(o), 1 === o.nodeType && !v._data(o, "parsedAttrs"))) { for (r = o.attributes; a < r.length; a++)(i = r[a].name).indexOf("data-") || (i = v.camelCase(i.slice(5)), P(o, i, s[i])); v._data(o, "parsedAttrs", !0) } return s } return "object" == typeof e ? this.each(function () { v.data(this, e) }) : v.access(this, function (n) { if (n === t) return o ? P(o, e, v.data(o, e)) : null; this.each(function () { v.data(this, e, n) }) }, null, n, arguments.length > 1, null, !0) }, removeData: function (e) { return this.each(function () { v.removeData(this, e) }) } }), v.extend({ queue: function (e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || [] }, dequeue: function (e, t) { t = t || "fx"; var n = v.queue(e, t), r = n.length, i = n.shift(), o = v._queueHooks(e, t); "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () { v.dequeue(e, t) }, o)), !r && o && o.empty.fire() }, _queueHooks: function (e, t) { var n = t + "queueHooks"; return v._data(e, n) || v._data(e, n, { empty: v.Callbacks("once memory").add(function () { v._removeData(e, t + "queue"), v._removeData(e, n) }) }) } }), v.fn.extend({ queue: function (e, n) { var r = 2; return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () { var t = v.queue(this, e, n); v._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && v.dequeue(this, e) }) }, dequeue: function (e) { return this.each(function () { v.dequeue(this, e) }) }, delay: function (e, t) { return e = v.fx && v.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) { var r = setTimeout(t, e); n.stop = function () { clearTimeout(r) } }) }, clearQueue: function (e) { return this.queue(e || "fx", []) }, promise: function (e, n) { var r, i = 1, o = v.Deferred(), a = this, s = this.length, u = function () { --i || o.resolveWith(a, [a]) }; for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)(r = v._data(a[s], e + "queueHooks")) && r.empty && (i++ , r.empty.add(u)); return u(), o.promise(n) } }); var W, $, I = /[\t\r\n]/g, z = /\r/g, X = /^(?:input|select|textarea|button|object)$/i, U = /^(?:a|area)$/i, V = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Q = /^(?:checked|selected)$/i, Y = v.support.getSetAttribute, J = v.support.input; v.fn.extend({ attr: function (e, t) { return v.access(this, v.attr, e, t, arguments.length > 1) }, removeAttr: function (e) { return this.each(function () { v.removeAttr(this, e) }) }, prop: function (e, t) { return v.access(this, v.prop, e, t, arguments.length > 1) }, removeProp: function (e) { return e = v.propFix[e] || e, this.each(function () { try { this[e] = t, delete this[e] } catch (e) { } }) }, addClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e; if (v.isFunction(e)) return this.each(function (t) { v(this).addClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(x) || []; a < s; a++)if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(I, " ") : " ")) { for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " "); n.className = v.trim(r) } return this }, removeClass: function (e) { var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e; if (v.isFunction(e)) return this.each(function (t) { v(this).removeClass(e.call(this, t, this.className)) }); if (u) for (t = (e || "").match(x) || []; a < s; a++)if (r = 1 === (n = this[a]).nodeType && (n.className ? (" " + n.className + " ").replace(I, " ") : "")) { for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " "); n.className = e ? v.trim(r) : "" } return this }, toggleClass: function (e, t) { var n = typeof e, r = "boolean" == typeof t; return v.isFunction(e) ? this.each(function (n) { v(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function () { if ("string" === n) for (var o, a = 0, s = v(this), u = t, l = e.match(x) || []; o = l[a++];)u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o); else n !== i && "boolean" !== n || (this.className && v._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : v._data(this, "__className__") || "") }) }, hasClass: function (e) { for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(I, " ").indexOf(t) >= 0) return !0; return !1 }, val: function (e) { var n, r, i, o = this[0]; return arguments.length ? (i = v.isFunction(e), this.each(function (n) { var o, a = v(this); 1 === this.nodeType && (null == (o = i ? e.call(this, n, a.val()) : e) ? o = "" : "number" == typeof o ? o += "" : v.isArray(o) && (o = v.map(o, function (e) { return null == e ? "" : e + "" })), (r = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, o, "value") !== t || (this.value = o)) })) : o ? (r = v.valHooks[o.type] || v.valHooks[o.nodeName.toLowerCase()]) && "get" in r && (n = r.get(o, "value")) !== t ? n : "string" == typeof (n = o.value) ? n.replace(z, "") : null == n ? "" : n : void 0 } }), v.extend({ valHooks: { option: { get: function (e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } }, select: { get: function (e) { for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)if (((n = r[u]).selected || u === i) && (v.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) { if (t = v(n).val(), o) return t; a.push(t) } return a }, set: function (e, t) { var n = v.makeArray(t); return v(e).find("option").each(function () { this.selected = v.inArray(v(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n } } }, attr: function (e, n, r) { var o, a, s, u = e.nodeType; if (e && 3 !== u && 8 !== u && 2 !== u) return typeof e.getAttribute === i ? v.prop(e, n, r) : ((a = 1 !== u || !v.isXMLDoc(e)) && (n = n.toLowerCase(), o = v.attrHooks[n] || (V.test(n) ? $ : W)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : void v.removeAttr(e, n)) }, removeAttr: function (e, t) { var n, r, i = 0, o = t && t.match(x); if (o && 1 === e.nodeType) for (; n = o[i++];)r = v.propFix[n] || n, V.test(n) ? !Y && Q.test(n) ? e[v.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : v.attr(e, n, ""), e.removeAttribute(Y ? n : r) }, attrHooks: { type: { set: function (e, t) { if (!v.support.radioValue && "radio" === t && v.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function (e, n, r) { var i, o, a = e.nodeType; if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !v.isXMLDoc(e)) && (n = v.propFix[n] || n, o = v.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n] }, propHooks: { tabIndex: { get: function (e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || U.test(e.nodeName) && e.href ? 0 : t } } } }), $ = { get: function (e, n) { var r = v.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? J && Y ? null != i : Q.test(n) ? e[v.camelCase("default-" + n)] : !!i : e.getAttributeNode(n); return o && !1 !== o.value ? n.toLowerCase() : t }, set: function (e, t, n) { return !1 === t ? v.removeAttr(e, n) : J && Y || !Q.test(n) ? e.setAttribute(!Y && v.propFix[n] || n, n) : e[v.camelCase("default-" + n)] = e[n] = !0, n } }, J && Y || (v.attrHooks.value = { get: function (e, n) { var r = e.getAttributeNode(n); return v.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t }, set: function (e, t, n) { if (!v.nodeName(e, "input")) return W && W.set(e, t, n); e.defaultValue = t } }), Y || (W = v.valHooks.button = { get: function (e, n) { var r = e.getAttributeNode(n); return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t }, set: function (e, n, r) { var i = e.getAttributeNode(r); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t } }, v.attrHooks.contenteditable = { get: W.get, set: function (e, t, n) { W.set(e, "" !== t && t, n) } }, v.each(["width", "height"], function (e, t) { v.attrHooks[t] = v.extend(v.attrHooks[t], { set: function (e, n) { if ("" === n) return e.setAttribute(t, "auto"), n } }) })), v.support.hrefNormalized || (v.each(["href", "src", "width", "height"], function (e, n) { v.attrHooks[n] = v.extend(v.attrHooks[n], { get: function (e) { var r = e.getAttribute(n, 2); return null == r ? t : r } }) }), v.each(["href", "src"], function (e, t) { v.propHooks[t] = { get: function (e) { return e.getAttribute(t, 4) } } })), v.support.style || (v.attrHooks.style = { get: function (e) { return e.style.cssText || t }, set: function (e, t) { return e.style.cssText = t + "" } }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, { get: function (e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () { v.valHooks[this] = { get: function (e) { return null === e.getAttribute("value") ? "on" : e.value } } }), v.each(["radio", "checkbox"], function () { v.valHooks[this] = v.extend(v.valHooks[this], { set: function (e, t) { if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0 } }) }); var G = /^(?:input|select|textarea)$/i, K = /^key/, Z = /^(?:mouse|contextmenu)|click/, ee = /^(?:focusinfocus|focusoutblur)$/, te = /^([^.]*)(?:\.(.+)|)$/; function ne() { return !0 } function re() { return !1 } v.event = { global: {}, add: function (e, n, r, o, a) { var s, u, l, c, f, p, d, h, g, m, y, b = v._data(e); if (b) { for (r.handler && (r = (c = r).handler, a = c.selector), r.guid || (r.guid = v.guid++), (u = b.events) || (u = b.events = {}), (p = b.handle) || ((p = b.handle = function (e) { return typeof v === i || e && v.event.triggered === e.type ? t : v.event.dispatch.apply(p.elem, arguments) }).elem = e), l = (n = (n || "").match(x) || [""]).length; l--;)g = y = (s = te.exec(n[l]) || [])[1], m = (s[2] || "").split(".").sort(), f = v.event.special[g] || {}, g = (a ? f.delegateType : f.bindType) || g, f = v.event.special[g] || {}, d = v.extend({ type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && v.expr.match.needsContext.test(a), namespace: m.join(".") }, c), (h = u[g]) || ((h = u[g] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, o, m, p) || (e.addEventListener ? e.addEventListener(g, p, !1) : e.attachEvent && e.attachEvent("on" + g, p))), f.add && (f.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), v.event.global[g] = !0; e = null } }, remove: function (e, t, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, m = v.hasData(e) && v._data(e); if (m && (c = m.events)) { for (l = (t = (t || "").match(x) || [""]).length; l--;)if (d = g = (s = te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) { for (f = v.event.special[d] || {}, p = c[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;)a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount-- , f.remove && f.remove.call(e, a)); u && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || v.removeEvent(e, d, m.handle), delete c[d]) } else for (d in c) v.event.remove(e, d + t[l], n, r, !0); v.isEmptyObject(c) && (delete m.handle, v._removeData(e, "events")) } }, trigger: function (n, r, i, a) { var s, u, l, c, f, p, d, h = [i || o], g = m.call(n, "type") ? n.type : n, y = m.call(n, "namespace") ? n.namespace.split(".") : []; if (l = p = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !ee.test(g + v.event.triggered) && (g.indexOf(".") >= 0 && (y = g.split("."), g = y.shift(), y.sort()), u = g.indexOf(":") < 0 && "on" + g, (n = n[v.expando] ? n : new v.Event(g, "object" == typeof n && n)).isTrigger = !0, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : v.makeArray(r, [n]), f = v.event.special[g] || {}, a || !f.trigger || !1 !== f.trigger.apply(i, r))) { if (!a && !f.noBubble && !v.isWindow(i)) { for (c = f.delegateType || g, ee.test(c + g) || (l = l.parentNode); l; l = l.parentNode)h.push(l), p = l; p === (i.ownerDocument || o) && h.push(p.defaultView || p.parentWindow || e) } for (d = 0; (l = h[d++]) && !n.isPropagationStopped();)n.type = d > 1 ? c : f.bindType || g, (s = (v._data(l, "events") || {})[n.type] && v._data(l, "handle")) && s.apply(l, r), (s = u && l[u]) && v.acceptData(l) && s.apply && !1 === s.apply(l, r) && n.preventDefault(); if (n.type = g, !a && !n.isDefaultPrevented() && (!f._default || !1 === f._default.apply(i.ownerDocument, r)) && ("click" !== g || !v.nodeName(i, "a")) && v.acceptData(i) && u && i[g] && !v.isWindow(i)) { (p = i[u]) && (i[u] = null), v.event.triggered = g; try { i[g]() } catch (e) { } v.event.triggered = t, p && (i[u] = p) } return n.result } }, dispatch: function (e) { e = v.event.fix(e); var n, r, i, o, a, s, u = d.call(arguments), l = (v._data(this, "events") || {})[e.type] || [], c = v.event.special[e.type] || {}; if (u[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) { for (s = v.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, (r = ((v.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u)) !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation())); return c.postDispatch && c.postDispatch.call(this, e), e.result } }, handlers: function (e, n) { var r, i, o, a, s = [], u = n.delegateCount, l = e.target; if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) { for (o = [], a = 0; a < u; a++)o[r = (i = n[a]).selector + " "] === t && (o[r] = i.needsContext ? v(r, this).index(l) >= 0 : v.find(r, this, null, [l]).length), o[r] && o.push(i); o.length && s.push({ elem: l, handlers: o }) } return u < n.length && s.push({ elem: this, handlers: n.slice(u) }), s }, fix: function (e) { if (e[v.expando]) return e; var t, n, r, i = e.type, a = e, s = this.fixHooks[i]; for (s || (this.fixHooks[i] = s = Z.test(i) ? this.mouseHooks : K.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new v.Event(a), t = r.length; t--;)e[n = r[t]] = a[n]; return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, a) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) { var r, i, a, s = n.button, u = n.fromElement; return null == e.pageX && null != n.clientX && (a = (i = e.target.ownerDocument || o).documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e } }, special: { load: { noBubble: !0 }, click: { trigger: function () { if (v.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1 } }, focus: { trigger: function () { if (this !== o.activeElement && this.focus) try { return this.focus(), !1 } catch (e) { } }, delegateType: "focusin" }, blur: { trigger: function () { if (this === o.activeElement && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, beforeunload: { postDispatch: function (e) { e.result !== t && (e.originalEvent.returnValue = e.result) } } }, simulate: function (e, t, n, r) { var i = v.extend(new v.Event, n, { type: e, isSimulated: !0, originalEvent: {} }); r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault() } }, v.removeEvent = o.removeEventListener ? function (e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function (e, t, n) { var r = "on" + t; e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n)) }, v.Event = function (e, t) { if (!(this instanceof v.Event)) return new v.Event(e, t); e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? ne : re) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0 }, v.Event.prototype = { isDefaultPrevented: re, isPropagationStopped: re, isImmediatePropagationStopped: re, preventDefault: function () { var e = this.originalEvent; this.isDefaultPrevented = ne, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function () { var e = this.originalEvent; this.isPropagationStopped = ne, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function () { this.isImmediatePropagationStopped = ne, this.stopPropagation() } }, v.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) { v.event.special[e] = { delegateType: t, bindType: t, handle: function (e) { var n, r = e.relatedTarget, i = e.handleObj; return r && (r === this || v.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n } } }), v.support.submitBubbles || (v.event.special.submit = { setup: function () { if (v.nodeName(this, "form")) return !1; v.event.add(this, "click._submit keypress._submit", function (e) { var n = e.target, r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t; r && !v._data(r, "submitBubbles") && (v.event.add(r, "submit._submit", function (e) { e._submit_bubble = !0 }), v._data(r, "submitBubbles", !0)) }) }, postDispatch: function (e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function () { if (v.nodeName(this, "form")) return !1; v.event.remove(this, "._submit") } }), v.support.changeBubbles || (v.event.special.change = { setup: function () { if (G.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (v.event.add(this, "propertychange._change", function (e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), v.event.add(this, "click._change", function (e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0) })), !1; v.event.add(this, "beforeactivate._change", function (e) { var t = e.target; G.test(t.nodeName) && !v._data(t, "changeBubbles") && (v.event.add(t, "change._change", function (e) { !this.parentNode || e.isSimulated || e.isTrigger || v.event.simulate("change", this.parentNode, e, !0) }), v._data(t, "changeBubbles", !0)) }) }, handle: function (e) { var t = e.target; if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments) }, teardown: function () { return v.event.remove(this, "._change"), !G.test(this.nodeName) } }), v.support.focusinBubbles || v.each({ focus: "focusin", blur: "focusout" }, function (e, t) { var n = 0, r = function (e) { v.event.simulate(t, e.target, v.event.fix(e), !0) }; v.event.special[t] = { setup: function () { 0 == n++ && o.addEventListener(e, r, !0) }, teardown: function () { 0 == --n && o.removeEventListener(e, r, !0) } } }), v.fn.extend({ on: function (e, n, r, i, o) { var a, s; if ("object" == typeof e) { for (a in "string" != typeof n && (r = r || n, n = t), e) this.on(a, n, r, e[a], o); return this } if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = re; else if (!i) return this; return 1 === o && (s = i, (i = function (e) { return v().off(e), s.apply(this, arguments) }).guid = s.guid || (s.guid = v.guid++)), this.each(function () { v.event.add(this, e, i, r, n) }) }, one: function (e, t, n, r) { return this.on(e, t, n, r, 1) }, off: function (e, n, r) { var i, o; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof e) { for (o in e) this.off(o, n, e[o]); return this } return !1 !== n && "function" != typeof n || (r = n, n = t), !1 === r && (r = re), this.each(function () { v.event.remove(this, e, r, n) }) }, bind: function (e, t, n) { return this.on(e, null, t, n) }, unbind: function (e, t) { return this.off(e, null, t) }, delegate: function (e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function (e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) }, trigger: function (e, t) { return this.each(function () { v.event.trigger(e, t, this) }) }, triggerHandler: function (e, t) { var n = this[0]; if (n) return v.event.trigger(e, t, n, !0) } }), function (e, t) { var n, r, i, o, a, s, u, l, c, f, p, d, h, g, m, y, b, x = "sizzle" + -new Date, w = e.document, T = {}, N = 0, C = 0, k = te(), E = te(), S = te(), A = 1 << 31, j = [], D = j.pop, L = j.push, H = j.slice, q = j.indexOf || function (e) { for (var t = 0, n = this.length; t < n; t++)if (this[t] === e) return t; return -1 }, M = "[\\x20\\t\\r\\n\\f]", _ = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", F = _.replace("w", "w#"), O = "\\[" + M + "*(" + _ + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + M + "*\\]", B = ":(" + _ + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + O.replace(3, 8) + ")*)|.*)\\)|)", P = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), R = new RegExp("^" + M + "*," + M + "*"), W = new RegExp("^" + M + "*([\\x20\\t\\r\\n\\f>+~])" + M + "*"), $ = new RegExp(B), I = new RegExp("^" + F + "$"), z = { ID: new RegExp("^#(" + _ + ")"), CLASS: new RegExp("^\\.(" + _ + ")"), NAME: new RegExp("^\\[name=['\"]?(" + _ + ")['\"]?\\]"), TAG: new RegExp("^(" + _.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + B), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") }, X = /[\x20\t\r\n\f]*[+~]/, U = /^[^{]+\{\s*\[native code/, V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, J = /'|\\/g, G = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, K = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, Z = function (e, t) { var n = "0x" + t - 65536; return n != n ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) }; try { H.call(w.documentElement.childNodes, 0)[0].nodeType } catch (e) { H = function (e) { for (var t, n = []; t = this[e++];)n.push(t); return n } } function ee(e) { return U.test(e + "") } function te() { var e, t = []; return e = function (n, r) { return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r } } function ne(e) { return e[x] = !0, e } function re(e) { var t = f.createElement("div"); try { return e(t) } catch (e) { return !1 } finally { t = null } } function ie(e, t, n, r) { var o, a, u, l, p, g, m, v, b, N; if ((t ? t.ownerDocument || t : w) !== f && c(t), n = n || [], !e || "string" != typeof e) return n; if (1 !== (l = (t = t || f).nodeType) && 9 !== l) return []; if (!d && !r) { if (o = V.exec(e)) if (u = o[1]) { if (9 === l) { if (!(a = t.getElementById(u)) || !a.parentNode) return n; if (a.id === u) return n.push(a), n } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(u)) && y(t, a) && a.id === u) return n.push(a), n } else { if (o[2]) return L.apply(n, H.call(t.getElementsByTagName(e), 0)), n; if ((u = o[3]) && T.getByClassName && t.getElementsByClassName) return L.apply(n, H.call(t.getElementsByClassName(u), 0)), n } if (T.qsa && !h.test(e)) { if (m = !0, v = x, b = t, N = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) { for (g = le(e), (m = t.getAttribute("id")) ? v = m.replace(J, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", p = g.length; p--;)g[p] = v + ce(g[p]); b = X.test(e) && t.parentNode || t, N = g.join(",") } if (N) try { return L.apply(n, H.call(b.querySelectorAll(N), 0)), n } catch (e) { } finally { m || t.removeAttribute("id") } } } return function (e, t, n, r) { var o, a, u, l, c, f = le(e); if (!r && 1 === f.length) { if ((a = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) { if (!(t = i.find.ID(u.matches[0].replace(K, Z), t)[0])) return n; e = e.slice(a.shift().value.length) } for (o = z.needsContext.test(e) ? 0 : a.length; o-- && (u = a[o], !i.relative[l = u.type]);)if ((c = i.find[l]) && (r = c(u.matches[0].replace(K, Z), X.test(a[0].type) && t.parentNode || t))) { if (a.splice(o, 1), !(e = r.length && ce(a))) return L.apply(n, H.call(r, 0)), n; break } } return s(e, f)(r, t, d, n, X.test(e)), n }(e.replace(P, "$1"), t, n, r) } function oe(e, t) { var n = t && e, r = n && (~t.sourceIndex || A) - (~e.sourceIndex || A); if (r) return r; if (n) for (; n = n.nextSibling;)if (n === t) return -1; return e ? 1 : -1 } function ae(e) { return function (t) { return "input" === t.nodeName.toLowerCase() && t.type === e } } function se(e) { return function (t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } } function ue(e) { return ne(function (t) { return t = +t, ne(function (n, r) { for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i])) }) }) } for (n in a = ie.isXML = function (e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, c = ie.setDocument = function (e) { var t = e ? e.ownerDocument || e : w; return t !== f && 9 === t.nodeType && t.documentElement ? (f = t, p = t.documentElement, d = a(t), T.tagNameNoComments = re(function (e) { return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length }), T.attributes = re(function (e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }), T.getByClassName = re(function (e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) }), T.getByName = re(function (e) { e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", p.insertBefore(e, p.firstChild); var n = t.getElementsByName && t.getElementsByName(x).length === 2 + t.getElementsByName(x + 0).length; return T.getIdNotName = !t.getElementById(x), p.removeChild(e), n }), i.attrHandle = re(function (e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && void 0 !== e.firstChild.getAttribute && "#" === e.firstChild.getAttribute("href") }) ? {} : { href: function (e) { return e.getAttribute("href", 2) }, type: function (e) { return e.getAttribute("type") } }, T.getIdNotName ? (i.find.ID = function (e, t) { if (void 0 !== t.getElementById && !d) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, i.filter.ID = function (e) { var t = e.replace(K, Z); return function (e) { return e.getAttribute("id") === t } }) : (i.find.ID = function (e, t) { if (void 0 !== t.getElementById && !d) { var n = t.getElementById(e); return n ? n.id === e || void 0 !== n.getAttributeNode && n.getAttributeNode("id").value === e ? [n] : void 0 : [] } }, i.filter.ID = function (e) { var t = e.replace(K, Z); return function (e) { var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return n && n.value === t } }), i.find.TAG = T.tagNameNoComments ? function (e, t) { if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(e) } : function (e, t) { var n, r = [], i = 0, o = t.getElementsByTagName(e); if ("*" === e) { for (; n = o[i++];)1 === n.nodeType && r.push(n); return r } return o }, i.find.NAME = T.getByName && function (e, t) { if (void 0 !== t.getElementsByName) return t.getElementsByName(name) }, i.find.CLASS = T.getByClassName && function (e, t) { if (void 0 !== t.getElementsByClassName && !d) return t.getElementsByClassName(e) }, g = [], h = [":focus"], (T.qsa = ee(t.querySelectorAll)) && (re(function (e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + M + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked") }), re(function (e) { e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + M + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:") })), (T.matchesSelector = ee(m = p.matchesSelector || p.mozMatchesSelector || p.webkitMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && re(function (e) { T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", B) }), h = new RegExp(h.join("|")), g = new RegExp(g.join("|")), y = ee(p.contains) || p.compareDocumentPosition ? function (e, t) { var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode; return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))) } : function (e, t) { if (t) for (; t = t.parentNode;)if (t === e) return !0; return !1 }, b = p.compareDocumentPosition ? function (e, n) { var r; return e === n ? (u = !0, 0) : (r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === t || y(w, e) ? -1 : n === t || y(w, n) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1 } : function (e, n) { var r, i = 0, o = e.parentNode, a = n.parentNode, s = [e], l = [n]; if (e === n) return u = !0, 0; if (!o || !a) return e === t ? -1 : n === t ? 1 : o ? -1 : a ? 1 : 0; if (o === a) return oe(e, n); for (r = e; r = r.parentNode;)s.unshift(r); for (r = n; r = r.parentNode;)l.unshift(r); for (; s[i] === l[i];)i++; return i ? oe(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0 }, u = !1, [0, 0].sort(b), T.detectDuplicates = u, f) : f }, ie.matches = function (e, t) { return ie(e, null, null, t) }, ie.matchesSelector = function (e, t) { if ((e.ownerDocument || e) !== f && c(e), t = t.replace(G, "='$1']"), T.matchesSelector && !d && (!g || !g.test(t)) && !h.test(t)) try { var n = m.call(e, t); if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { } return ie(t, f, null, [e]).length > 0 }, ie.contains = function (e, t) { return (e.ownerDocument || e) !== f && c(e), y(e, t) }, ie.attr = function (e, t) { var n; return (e.ownerDocument || e) !== f && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t : n && n.specified ? n.value : null }, ie.error = function (e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ie.uniqueSort = function (e) { var t, n = [], r = 1, i = 0; if (u = !T.detectDuplicates, e.sort(b), u) { for (; t = e[r]; r++)t === e[r - 1] && (i = n.push(r)); for (; i--;)e.splice(n[i], 1) } return e }, o = ie.getText = function (e) { var t, n = "", r = 0, i = e.nodeType; if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling)n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else for (; t = e[r]; r++)n += o(t); return n }, i = ie.selectors = { cacheLength: 50, createPseudo: ne, match: z, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) { return e[1] = e[1].replace(K, Z), e[3] = (e[4] || e[5] || "").replace(K, Z), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function (e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e }, PSEUDO: function (e) { var t, n = !e[5] && e[2]; return z.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && $.test(n) && (t = le(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function (e) { return "*" === e ? function () { return !0 } : (e = e.replace(K, Z).toLowerCase(), function (t) { return t.nodeName && t.nodeName.toLowerCase() === e }) }, CLASS: function (e) { var t = k[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && k(e, function (e) { return t.test(e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "") }) }, ATTR: function (e, t, n) { return function (r) { var i = ie.attr(r, e); return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-")) } }, CHILD: function (e, t, n, r, i) { var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t; return 1 === r && 0 === i ? function (e) { return !!e.parentNode } : function (t, n, u) { var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s; if (m) { if (o) { for (; g;) { for (f = t; f = f[g];)if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1; h = g = "only" === e && !h && "nextSibling" } return !0 } if (h = [a ? m.firstChild : m.lastChild], a && v) { for (d = (l = (c = m[x] || (m[x] = {}))[e] || [])[0] === N && l[1], p = l[0] === N && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)if (1 === f.nodeType && ++p && f === t) { c[e] = [N, d, p]; break } } else if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[x] || (f[x] = {}))[e] = [N, p]), f !== t));); return (p -= i) === r || p % r == 0 && p / r >= 0 } } }, PSEUDO: function (e, t) { var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e); return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ne(function (e, n) { for (var i, o = r(e, t), a = o.length; a--;)e[i = q.call(e, o[a])] = !(n[i] = o[a]) }) : function (e) { return r(e, 0, n) }) : r } }, pseudos: { not: ne(function (e) { var t = [], n = [], r = s(e.replace(P, "$1")); return r[x] ? ne(function (e, t, n, i) { for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o)) }) : function (e, i, o) { return t[0] = e, r(t, null, o, n), !n.pop() } }), has: ne(function (e) { return function (t) { return ie(e, t).length > 0 } }), contains: ne(function (e) { return function (t) { return (t.textContent || t.innerText || o(t)).indexOf(e) > -1 } }), lang: ne(function (e) { return I.test(e || "") || ie.error("unsupported lang: " + e), e = e.replace(K, Z).toLowerCase(), function (t) { var n; do { if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-") } while ((t = t.parentNode) && 1 === t.nodeType); return !1 } }), target: function (t) { var n = e.location && e.location.hash; return n && n.slice(1) === t.id }, root: function (e) { return e === p }, focus: function (e) { return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function (e) { return !1 === e.disabled }, disabled: function (e) { return !0 === e.disabled }, checked: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function (e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function (e) { for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1; return !0 }, parent: function (e) { return !i.pseudos.empty(e) }, header: function (e) { return Y.test(e.nodeName) }, input: function (e) { return Q.test(e.nodeName) }, button: function (e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function (e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type) }, first: ue(function () { return [0] }), last: ue(function (e, t) { return [t - 1] }), eq: ue(function (e, t, n) { return [n < 0 ? n + t : n] }), even: ue(function (e, t) { for (var n = 0; n < t; n += 2)e.push(n); return e }), odd: ue(function (e, t) { for (var n = 1; n < t; n += 2)e.push(n); return e }), lt: ue(function (e, t, n) { for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r); return e }), gt: ue(function (e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r); return e }) } }, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) i.pseudos[n] = ae(n); for (n in { submit: !0, reset: !0 }) i.pseudos[n] = se(n); function le(e, t) { var n, r, o, a, s, u, l, c = E[e + " "]; if (c) return t ? 0 : c.slice(0); for (s = e, u = [], l = i.preFilter; s;) { for (a in n && !(r = R.exec(s)) || (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = W.exec(s)) && (n = r.shift(), o.push({ value: n, type: r[0].replace(P, " ") }), s = s.slice(n.length)), i.filter) !(r = z[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({ value: n, type: a, matches: r }), s = s.slice(n.length)); if (!n) break } return t ? s.length : s ? ie.error(e) : E(e, u).slice(0) } function ce(e) { for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value; return r } function fe(e, t, n) { var i = t.dir, o = n && "parentNode" === i, a = C++; return t.first ? function (t, n, r) { for (; t = t[i];)if (1 === t.nodeType || o) return e(t, n, r) } : function (t, n, s) { var u, l, c, f = N + " " + a; if (s) { for (; t = t[i];)if ((1 === t.nodeType || o) && e(t, n, s)) return !0 } else for (; t = t[i];)if (1 === t.nodeType || o) if ((l = (c = t[x] || (t[x] = {}))[i]) && l[0] === f) { if (!0 === (u = l[1]) || u === r) return !0 === u } else if ((l = c[i] = [f])[1] = e(t, n, s) || r, !0 === l[1]) return !0 } } function pe(e) { return e.length > 1 ? function (t, n, r) { for (var i = e.length; i--;)if (!e[i](t, n, r)) return !1; return !0 } : e[0] } function de(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a } function he(e, t, n, r, i, o) { return r && !r[x] && (r = he(r)), i && !i[x] && (i = he(i, o)), ne(function (o, a, s, u) { var l, c, f, p = [], d = [], h = a.length, g = o || function (e, t, n) { for (var r = 0, i = t.length; r < i; r++)ie(e, t[r], n); return n }(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : de(g, p, e, s, u), y = n ? i || (o ? e : h || r) ? [] : a : m; if (n && n(m, y, s, u), r) for (l = de(y, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(m[d[c]] = f)); if (o) { if (i || e) { if (i) { for (l = [], c = y.length; c--;)(f = y[c]) && l.push(m[c] = f); i(null, y = [], l, u) } for (c = y.length; c--;)(f = y[c]) && (l = i ? q.call(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f)) } } else y = de(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : L.apply(a, y) }) } function ge(e) { for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], u = a ? 1 : 0, c = fe(function (e) { return e === t }, s, !0), f = fe(function (e) { return q.call(t, e) > -1 }, s, !0), p = [function (e, n, r) { return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r)) }]; u < o; u++)if (n = i.relative[e[u].type]) p = [fe(pe(p), n)]; else { if ((n = i.filter[e[u].type].apply(null, e[u].matches))[x]) { for (r = ++u; r < o && !i.relative[e[r].type]; r++); return he(u > 1 && pe(p), u > 1 && ce(e.slice(0, u - 1)).replace(P, "$1"), n, u < r && ge(e.slice(u, r)), r < o && ge(e = e.slice(r)), r < o && ce(e)) } p.push(n) } return pe(p) } function me() { } s = ie.compile = function (e, t) { var n, o = [], a = [], s = S[e + " "]; if (!s) { for (t || (t = le(e)), n = t.length; n--;)(s = ge(t[n]))[x] ? o.push(s) : a.push(s); s = S(e, function (e, t) { var n = 0, o = t.length > 0, a = e.length > 0, s = function (s, u, c, p, d) { var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, T = l, C = s || a && i.find.TAG("*", d && u.parentNode || u), k = N += null == T ? 1 : Math.random() || .1; for (w && (l = u !== f && u, r = n); null != (h = C[b]); b++) { if (a && h) { for (g = 0; m = e[g++];)if (m(h, u, c)) { p.push(h); break } w && (N = k, r = ++n) } o && ((h = !m && h) && v-- , s && x.push(h)) } if (v += b, o && b !== v) { for (g = 0; m = t[g++];)m(x, y, u, c); if (s) { if (v > 0) for (; b--;)x[b] || y[b] || (y[b] = D.call(p)); y = de(y) } L.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && ie.uniqueSort(p) } return w && (N = k, l = T), x }; return o ? ne(s) : s }(a, o)) } return s }, i.pseudos.nth = i.pseudos.eq, i.filters = me.prototype = i.pseudos, i.setFilters = new me, c(), ie.attr = v.attr, v.find = ie, v.expr = ie.selectors, v.expr[":"] = v.expr.pseudos, v.unique = ie.uniqueSort, v.text = ie.getText, v.isXMLDoc = ie.isXML, v.contains = ie.contains }(e); var ie = /Until$/, oe = /^(?:parents|prev(?:Until|All))/, ae = /^.[^:#\[\.,]*$/, se = v.expr.match.needsContext, ue = { children: !0, contents: !0, next: !0, prev: !0 }; function le(e, t) { do { e = e[t] } while (e && 1 !== e.nodeType); return e } function ce(e, t, n) { if (t = t || 0, v.isFunction(t)) return v.grep(e, function (e, r) { return !!t.call(e, r, e) === n }); if (t.nodeType) return v.grep(e, function (e) { return e === t === n }); if ("string" == typeof t) { var r = v.grep(e, function (e) { return 1 === e.nodeType }); if (ae.test(t)) return v.filter(t, r, !n); t = v.filter(t, r) } return v.grep(e, function (e) { return v.inArray(e, t) >= 0 === n }) } function fe(e) { var t = pe.split("|"), n = e.createDocumentFragment(); if (n.createElement) for (; t.length;)n.createElement(t.pop()); return n } v.fn.extend({ find: function (e) { var t, n, r, i = this.length; if ("string" != typeof e) return r = this, this.pushStack(v(e).filter(function () { for (t = 0; t < i; t++)if (v.contains(r[t], this)) return !0 })); for (n = [], t = 0; t < i; t++)v.find(e, this[t], n); return (n = this.pushStack(i > 1 ? v.unique(n) : n)).selector = (this.selector ? this.selector + " " : "") + e, n }, has: function (e) { var t, n = v(e, this), r = n.length; return this.filter(function () { for (t = 0; t < r; t++)if (v.contains(this, n[t])) return !0 }) }, not: function (e) { return this.pushStack(ce(this, e, !1)) }, filter: function (e) { return this.pushStack(ce(this, e, !0)) }, is: function (e) { return !!e && ("string" == typeof e ? se.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0) }, closest: function (e, t) { for (var n, r = 0, i = this.length, o = [], a = se.test(e) || "string" != typeof e ? v(e, t || this.context) : 0; r < i; r++)for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) { if (a ? a.index(n) > -1 : v.find.matchesSelector(n, e)) { o.push(n); break } n = n.parentNode } return this.pushStack(o.length > 1 ? v.unique(o) : o) }, index: function (e) { return e ? "string" == typeof e ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (e, t) { var n = "string" == typeof e ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e), r = v.merge(this.get(), n); return this.pushStack(v.unique(r)) }, addBack: function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), v.fn.andSelf = v.fn.addBack, v.each({ parent: function (e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function (e) { return v.dir(e, "parentNode") }, parentsUntil: function (e, t, n) { return v.dir(e, "parentNode", n) }, next: function (e) { return le(e, "nextSibling") }, prev: function (e) { return le(e, "previousSibling") }, nextAll: function (e) { return v.dir(e, "nextSibling") }, prevAll: function (e) { return v.dir(e, "previousSibling") }, nextUntil: function (e, t, n) { return v.dir(e, "nextSibling", n) }, prevUntil: function (e, t, n) { return v.dir(e, "previousSibling", n) }, siblings: function (e) { return v.sibling((e.parentNode || {}).firstChild, e) }, children: function (e) { return v.sibling(e.firstChild) }, contents: function (e) { return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes) } }, function (e, t) { v.fn[e] = function (n, r) { var i = v.map(this, t, n); return ie.test(e) || (r = n), r && "string" == typeof r && (i = v.filter(r, i)), i = this.length > 1 && !ue[e] ? v.unique(i) : i, this.length > 1 && oe.test(e) && (i = i.reverse()), this.pushStack(i) } }), v.extend({ filter: function (e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t) }, dir: function (e, n, r) { for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !v(o).is(r));)1 === o.nodeType && i.push(o), o = o[n]; return i }, sibling: function (e, t) { for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e); return n } }); var pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", de = / jQuery\d+="(?:null|\d+)"/g, he = new RegExp("<(?:" + pe + ")[\\s/>]", "i"), ge = /^\s+/, me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ye = /<([\w:]+)/, ve = /<tbody/i, be = /<|&#?\w+;/, xe = /<(?:script|style|link)/i, we = /^(?:checkbox|radio)$/i, Te = /checked\s*(?:[^=]|=\s*.checked.)/i, Ne = /^$|\/(?:java|ecma)script/i, Ce = /^true\/(.*)/, ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ee = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: v.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] }, Se = fe(o).appendChild(o.createElement("div")); function Ae(e) { var t = e.getAttributeNode("type"); return e.type = (t && t.specified) + "/" + e.type, e } function je(e) { var t = Ce.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e } function De(e, t) { for (var n, r = 0; null != (n = e[r]); r++)v._data(n, "globalEval", !t || v._data(t[r], "globalEval")) } function Le(e, t) { if (1 === t.nodeType && v.hasData(e)) { var n, r, i, o = v._data(e), a = v._data(t, o), s = o.events; if (s) for (n in delete a.handle, a.events = {}, s) for (r = 0, i = s[n].length; r < i; r++)v.event.add(t, n, s[n][r]); a.data && (a.data = v.extend({}, a.data)) } } function He(e, t) { var n, r, i; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !v.support.noCloneEvent && t[v.expando]) { for (r in (i = v._data(t)).events) v.removeEvent(t, r, i.handle); t.removeAttribute(v.expando) } "script" === n && t.text !== e.text ? (Ae(t).text = e.text, je(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && we.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } } function qe(e, n) { var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t; if (!s) for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || v.nodeName(o, n) ? s.push(o) : v.merge(s, qe(o, n)); return n === t || n && v.nodeName(e, n) ? v.merge([e], s) : s } function Me(e) { we.test(e.type) && (e.defaultChecked = e.checked) } Ee.optgroup = Ee.option, Ee.tbody = Ee.tfoot = Ee.colgroup = Ee.caption = Ee.thead, Ee.th = Ee.td, v.fn.extend({ text: function (e) { return v.access(this, function (e) { return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e)) }, null, e, arguments.length) }, wrapAll: function (e) { if (v.isFunction(e)) return this.each(function (t) { v(this).wrapAll(e.call(this, t)) }); if (this[0]) { var t = v(e, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && t.insertBefore(this[0]), t.map(function () { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild; return e }).append(this) } return this }, wrapInner: function (e) { return v.isFunction(e) ? this.each(function (t) { v(this).wrapInner(e.call(this, t)) }) : this.each(function () { var t = v(this), n = t.contents(); n.length ? n.wrapAll(e) : t.append(e) }) }, wrap: function (e) { var t = v.isFunction(e); return this.each(function (n) { v(this).wrapAll(t ? e.call(this, n) : e) }) }, unwrap: function () { return this.parent().each(function () { v.nodeName(this, "body") || v(this).replaceWith(this.childNodes) }).end() }, append: function () { return this.domManip(arguments, !0, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e) }) }, prepend: function () { return this.domManip(arguments, !0, function (e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild) }) }, before: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function () { return this.domManip(arguments, !1, function (e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function (e, t) { for (var n, r = 0; null != (n = this[r]); r++)(!e || v.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || v.cleanData(qe(n)), n.parentNode && (t && v.contains(n.ownerDocument, n) && De(qe(n, "script")), n.parentNode.removeChild(n))); return this }, empty: function () { for (var e, t = 0; null != (e = this[t]); t++) { for (1 === e.nodeType && v.cleanData(qe(e, !1)); e.firstChild;)e.removeChild(e.firstChild); e.options && v.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function (e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function () { return v.clone(this, e, t) }) }, html: function (e) { return v.access(this, function (e) { var n = this[0] || {}, r = 0, i = this.length; if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(de, "") : t; if ("string" == typeof e && !xe.test(e) && (v.support.htmlSerialize || !he.test(e)) && (v.support.leadingWhitespace || !ge.test(e)) && !Ee[(ye.exec(e) || ["", ""])[1].toLowerCase()]) { e = e.replace(me, "<$1></$2>"); try { for (; r < i; r++)1 === (n = this[r] || {}).nodeType && (v.cleanData(qe(n, !1)), n.innerHTML = e); n = 0 } catch (e) { } } n && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function (e) { return v.isFunction(e) || "string" == typeof e || (e = v(e).not(this).detach()), this.domManip([e], !0, function (e) { var t = this.nextSibling, n = this.parentNode; n && (v(this).remove(), n.insertBefore(e, t)) }) }, detach: function (e) { return this.remove(e, !0) }, domManip: function (e, n, r) { e = f.apply([], e); var i, o, a, s, u, l, c, p, d = 0, h = this.length, g = this, m = h - 1, y = e[0], b = v.isFunction(y); if (b || !(h <= 1 || "string" != typeof y || v.support.checkClone) && Te.test(y)) return this.each(function (i) { var o = g.eq(i); b && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r) }); if (h && (i = (l = v.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = i), i)) { for (n = n && v.nodeName(i, "tr"), a = (s = v.map(qe(l, "script"), Ae)).length; d < h; d++)o = l, d !== m && (o = v.clone(o, !0, !0), a && v.merge(s, qe(o, "script"))), r.call(n && v.nodeName(this[d], "table") ? (c = this[d], p = "tbody", c.getElementsByTagName(p)[0] || c.appendChild(c.ownerDocument.createElement(p))) : this[d], o, d); if (a) for (u = s[s.length - 1].ownerDocument, v.map(s, je), d = 0; d < a; d++)o = s[d], Ne.test(o.type || "") && !v._data(o, "globalEval") && v.contains(u, o) && (o.src ? v.ajax({ url: o.src, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) : v.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ke, ""))); l = i = null } return this } }), v.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) { v.fn[e] = function (e) { for (var n, r = 0, i = [], o = v(e), a = o.length - 1; r <= a; r++)n = r === a ? this : this.clone(!0), v(o[r])[t](n), p.apply(i, n.get()); return this.pushStack(i) } }), v.extend({ clone: function (e, t, n) { var r, i, o, a, s, u = v.contains(e.ownerDocument, e); if (v.support.html5Clone || v.isXMLDoc(e) || !he.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Se.innerHTML = e.outerHTML, Se.removeChild(o = Se.firstChild)), !(v.support.noCloneEvent && v.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || v.isXMLDoc(e))) for (r = qe(o), s = qe(e), a = 0; null != (i = s[a]); ++a)r[a] && He(i, r[a]); if (t) if (n) for (s = s || qe(e), r = r || qe(o), a = 0; null != (i = s[a]); a++)Le(i, r[a]); else Le(e, o); return (r = qe(o, "script")).length > 0 && De(r, !u && qe(e, "script")), r = s = i = null, o }, buildFragment: function (e, t, n, r) { for (var i, o, a, s, u, l, c, f = e.length, p = fe(t), d = [], h = 0; h < f; h++)if ((o = e[h]) || 0 === o) if ("object" === v.type(o)) v.merge(d, o.nodeType ? [o] : o); else if (be.test(o)) { for (s = s || p.appendChild(t.createElement("div")), u = (ye.exec(o) || ["", ""])[1].toLowerCase(), c = Ee[u] || Ee._default, s.innerHTML = c[1] + o.replace(me, "<$1></$2>") + c[2], i = c[0]; i--;)s = s.lastChild; if (!v.support.leadingWhitespace && ge.test(o) && d.push(t.createTextNode(ge.exec(o)[0])), !v.support.tbody) for (i = (o = "table" !== u || ve.test(o) ? "<table>" !== c[1] || ve.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;)v.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l); for (v.merge(d, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild); s = p.lastChild } else d.push(t.createTextNode(o)); for (s && p.removeChild(s), v.support.appendChecked || v.grep(qe(d, "input"), Me), h = 0; o = d[h++];)if ((!r || -1 === v.inArray(o, r)) && (a = v.contains(o.ownerDocument, o), s = qe(p.appendChild(o), "script"), a && De(s), n)) for (i = 0; o = s[i++];)Ne.test(o.type || "") && n.push(o); return s = null, p }, cleanData: function (e, t) { for (var n, r, o, a, s = 0, u = v.expando, l = v.cache, f = v.support.deleteExpando, p = v.event.special; null != (n = e[s]); s++)if ((t || v.acceptData(n)) && (a = (o = n[u]) && l[o])) { if (a.events) for (r in a.events) p[r] ? v.event.remove(n, r) : v.removeEvent(n, r, a.handle); l[o] && (delete l[o], f ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o)) } } }); var _e, Fe, Oe, Be = /alpha\([^)]*\)/i, Pe = /opacity\s*=\s*([^)]*)/, Re = /^(top|right|bottom|left)$/, We = /^(none|table(?!-c[ea]).+)/, $e = /^margin/, Ie = new RegExp("^(" + b + ")(.*)$", "i"), ze = new RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"), Xe = new RegExp("^([+-])=(" + b + ")", "i"), Ue = { BODY: "block" }, Ve = { position: "absolute", visibility: "hidden", display: "block" }, Qe = { letterSpacing: 0, fontWeight: 400 }, Ye = ["Top", "Right", "Bottom", "Left"], Je = ["Webkit", "O", "Moz", "ms"]; function Ge(e, t) { if (t in e) return t; for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Je.length; i--;)if ((t = Je[i] + n) in e) return t; return r } function Ke(e, t) { return e = t || e, "none" === v.css(e, "display") || !v.contains(e.ownerDocument, e) } function Ze(e, t) { for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = v._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ke(r) && (o[a] = v._data(r, "olddisplay", rt(r.nodeName)))) : o[a] || (i = Ke(r), (n && "none" !== n || !i) && v._data(r, "olddisplay", i ? n : v.css(r, "display")))); for (a = 0; a < s; a++)(r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none")); return e } function et(e, t, n) { var r = Ie.exec(t); return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t } function tt(e, t, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += v.css(e, n + Ye[o], !0, i)), r ? ("content" === n && (a -= v.css(e, "padding" + Ye[o], !0, i)), "margin" !== n && (a -= v.css(e, "border" + Ye[o] + "Width", !0, i))) : (a += v.css(e, "padding" + Ye[o], !0, i), "padding" !== n && (a += v.css(e, "border" + Ye[o] + "Width", !0, i))); return a } function nt(e, t, n) { var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Fe(e), a = v.support.boxSizing && "border-box" === v.css(e, "boxSizing", !1, o); if (i <= 0 || null == i) { if (((i = Oe(e, t, o)) < 0 || null == i) && (i = e.style[t]), ze.test(i)) return i; r = a && (v.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0 } return i + tt(e, t, n || (a ? "border" : "content"), r, o) + "px" } function rt(e) { var t = o, n = Ue[e]; return n || ("none" !== (n = it(e, t)) && n || ((t = ((_e = (_e || v("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || _e[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = it(e, t), _e.detach()), Ue[e] = n), n } function it(e, t) { var n = v(t.createElement(e)).appendTo(t.body), r = v.css(n[0], "display"); return n.remove(), r } v.fn.extend({ css: function (e, n) { return v.access(this, function (e, n, r) { var i, o, a = {}, s = 0; if (v.isArray(n)) { for (o = Fe(e), i = n.length; s < i; s++)a[n[s]] = v.css(e, n[s], !1, o); return a } return r !== t ? v.style(e, n, r) : v.css(e, n) }, e, n, arguments.length > 1) }, show: function () { return Ze(this, !0) }, hide: function () { return Ze(this) }, toggle: function (e) { var t = "boolean" == typeof e; return this.each(function () { (t ? e : Ke(this)) ? v(this).show() : v(this).hide() }) } }), v.extend({ cssHooks: { opacity: { get: function (e, t) { if (t) { var n = Oe(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: v.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var o, a, s, u = v.camelCase(n), l = e.style; if (n = v.cssProps[u] || (v.cssProps[u] = Ge(l, u)), s = v.cssHooks[n] || v.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n]; if (!("string" === (a = typeof r) && (o = Xe.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(v.css(e, n)), a = "number"), null == r || "number" === a && isNaN(r) || ("number" !== a || v.cssNumber[u] || (r += "px"), v.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try { l[n] = r } catch (e) { } } }, css: function (e, n, r, i) { var o, a, s, u = v.camelCase(n); return n = v.cssProps[u] || (v.cssProps[u] = Ge(e.style, u)), (s = v.cssHooks[n] || v.cssHooks[u]) && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Oe(e, n, i)), "normal" === a && n in Qe && (a = Qe[n]), "" === r || r ? (o = parseFloat(a), !0 === r || v.isNumeric(o) ? o || 0 : a) : a }, swap: function (e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i } }), e.getComputedStyle ? (Fe = function (t) { return e.getComputedStyle(t, null) }, Oe = function (e, n, r) { var i, o, a, s = r || Fe(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style; return s && ("" !== u || v.contains(e.ownerDocument, e) || (u = v.style(e, n)), ze.test(u) && $e.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u }) : o.documentElement.currentStyle && (Fe = function (e) { return e.currentStyle }, Oe = function (e, n, r) { var i, o, a, s = r || Fe(e), u = s ? s[n] : t, l = e.style; return null == u && l && l[n] && (u = l[n]), ze.test(u) && !Re.test(n) && (i = l.left, (a = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u }), v.each(["height", "width"], function (e, t) { v.cssHooks[t] = { get: function (e, n, r) { if (n) return 0 === e.offsetWidth && We.test(v.css(e, "display")) ? v.swap(e, Ve, function () { return nt(e, t, r) }) : nt(e, t, r) }, set: function (e, n, r) { var i = r && Fe(e); return et(0, n, r ? tt(e, t, r, v.support.boxSizing && "border-box" === v.css(e, "boxSizing", !1, i), i) : 0) } } }), v.support.opacity || (v.cssHooks.opacity = { get: function (e, t) { return Pe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function (e, t) { var n = e.style, r = e.currentStyle, i = v.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || ""; n.zoom = 1, (t >= 1 || "" === t) && "" === v.trim(o.replace(Be, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Be.test(o) ? o.replace(Be, i) : o + " " + i) } }), v(function () { v.support.reliableMarginRight || (v.cssHooks.marginRight = { get: function (e, t) { if (t) return v.swap(e, { display: "inline-block" }, Oe, [e, "marginRight"]) } }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) { v.cssHooks[t] = { get: function (e, n) { if (n) return n = Oe(e, t), ze.test(n) ? v(e).position()[t] + "px" : n } } }) }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) { return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !v.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || v.css(e, "display")) }, v.expr.filters.visible = function (e) { return !v.expr.filters.hidden(e) }), v.each({ margin: "", padding: "", border: "Width" }, function (e, t) { v.cssHooks[e + t] = { expand: function (n) { for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + Ye[r] + t] = o[r] || o[r - 2] || o[0]; return i } }, $e.test(e) || (v.cssHooks[e + t].set = et) }); var ot = /%20/g, at = /\[\]$/, st = /\r?\n/g, ut = /^(?:submit|button|image|reset|file)$/i, lt = /^(?:input|select|textarea|keygen)/i; function ct(e, t, n, r) { var i; if (v.isArray(t)) v.each(t, function (t, i) { n || at.test(e) ? r(e, i) : ct(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r) }); else if (n || "object" !== v.type(t)) r(e, t); else for (i in t) ct(e + "[" + i + "]", t[i], n, r) } v.fn.extend({ serialize: function () { return v.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var e = v.prop(this, "elements"); return e ? v.makeArray(e) : this }).filter(function () { var e = this.type; return this.name && !v(this).is(":disabled") && lt.test(this.nodeName) && !ut.test(e) && (this.checked || !we.test(e)) }).map(function (e, t) { var n = v(this).val(); return null == n ? null : v.isArray(n) ? v.map(n, function (e) { return { name: t.name, value: e.replace(st, "\r\n") } }) : { name: t.name, value: n.replace(st, "\r\n") } }).get() } }), v.param = function (e, n) { var r, i = [], o = function (e, t) { t = v.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) }; if (n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional), v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function () { o(this.name, this.value) }); else for (r in e) ct(r, e[r], n, o); return i.join("&").replace(ot, "+") }, v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) { v.fn[t] = function (e, n) { return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) } }), v.fn.hover = function (e, t) { return this.mouseenter(e).mouseleave(t || e) }; var ft, pt, dt = v.now(), ht = /\?/, gt = /#.*$/, mt = /([?&])_=[^&]*/, yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, vt = /^(?:GET|HEAD)$/, bt = /^\/\//, xt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, wt = v.fn.load, Tt = {}, Nt = {}, Ct = "*/".concat("*"); try { pt = a.href } catch (e) { (pt = o.createElement("a")).href = "", pt = pt.href } function kt(e) { return function (t, n) { "string" != typeof t && (n = t, t = "*"); var r, i = 0, o = t.toLowerCase().match(x) || []; if (v.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n) } } function Et(e, t, n, r) { var i = {}, o = e === Nt; function a(s) { var u; return i[s] = !0, v.each(e[s] || [], function (e, s) { var l = s(t, n, r); return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1) }), u } return a(t.dataTypes[0]) || !i["*"] && a("*") } function St(e, n) { var r, i, o = v.ajaxSettings.flatOptions || {}; for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]); return r && v.extend(!0, e, r), e } ft = xt.exec(pt.toLowerCase()) || [], v.fn.load = function (e, n, r) { if ("string" != typeof e && wt) return wt.apply(this, arguments); var i, o, a, s = this, u = e.indexOf(" "); return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), v.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && v.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) { o = arguments, s.html(i ? v("<div>").append(v.parseHTML(e)).find(i) : e) }).complete(r && function (e, t) { s.each(r, o || [e.responseText, t, e]) }), this }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) { v.fn[t] = function (e) { return this.on(t, e) } }), v.each(["get", "post"], function (e, n) { v[n] = function (e, r, i, o) { return v.isFunction(r) && (o = o || i, i = r, r = t), v.ajax({ url: e, type: n, dataType: o, data: r, success: i }) } }), v.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: pt, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ft[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ct, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": v.parseJSON, "text xml": v.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) { return t ? St(St(e, v.ajaxSettings), t) : St(v.ajaxSettings, e) }, ajaxPrefilter: kt(Tt), ajaxTransport: kt(Nt), ajax: function (e, n) { "object" == typeof e && (n = e, e = t), n = n || {}; var r, i, o, a, s, u, l, c, f = v.ajaxSetup({}, n), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? v(p) : v.event, h = v.Deferred(), g = v.Callbacks("once memory"), m = f.statusCode || {}, y = {}, b = {}, w = 0, T = "canceled", N = { readyState: 0, getResponseHeader: function (e) { var t; if (2 === w) { if (!c) for (c = {}; t = yt.exec(a);)c[t[1].toLowerCase()] = t[2]; t = c[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function () { return 2 === w ? a : null }, setRequestHeader: function (e, t) { var n = e.toLowerCase(); return w || (e = b[n] = b[n] || e, y[e] = t), this }, overrideMimeType: function (e) { return w || (f.mimeType = e), this }, statusCode: function (e) { var t; if (e) if (w < 2) for (t in e) m[t] = [m[t], e[t]]; else N.always(e[N.status]); return this }, abort: function (e) { var t = e || T; return l && l.abort(t), C(0, t), this } }; if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, f.url = ((e || f.url || pt) + "").replace(gt, "").replace(bt, ft[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = v.trim(f.dataType || "*").toLowerCase().match(x) || [""], null == f.crossDomain && (r = xt.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === ft[1] && r[2] === ft[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (ft[3] || ("http:" === ft[1] ? 80 : 443)))), f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)), Et(Tt, f, n, N), 2 === w) return N; for (i in (u = f.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !vt.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (ht.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = mt.test(o) ? o.replace(mt, "$1_=" + dt++) : o + (ht.test(o) ? "&" : "?") + "_=" + dt++)), f.ifModified && (v.lastModified[o] && N.setRequestHeader("If-Modified-Since", v.lastModified[o]), v.etag[o] && N.setRequestHeader("If-None-Match", v.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && N.setRequestHeader("Content-Type", f.contentType), N.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ct + "; q=0.01" : "") : f.accepts["*"]), f.headers) N.setRequestHeader(i, f.headers[i]); if (f.beforeSend && (!1 === f.beforeSend.call(p, N, f) || 2 === w)) return N.abort(); for (i in T = "abort", { success: 1, error: 1, complete: 1 }) N[i](f[i]); if (l = Et(Nt, f, n, N)) { N.readyState = 1, u && d.trigger("ajaxSend", [N, f]), f.async && f.timeout > 0 && (s = setTimeout(function () { N.abort("timeout") }, f.timeout)); try { w = 1, l.send(y, C) } catch (e) { if (!(w < 2)) throw e; C(-1, e) } } else C(-1, "No Transport"); function C(e, n, r, i) { var c, y, b, x, T, C = n; 2 !== w && (w = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (x = function (e, n, r) { var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields; for (s in c) s in r && (n[c[s]] = r[s]); for (; "*" === l[0];)l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type")); if (o) for (s in u) if (u[s] && u[s].test(o)) { l.unshift(s); break } if (l[0] in r) a = l[0]; else { for (s in r) { if (!l[0] || e.converters[s + " " + l[0]]) { a = s; break } i || (i = s) } a = a || i } if (a) return a !== l[0] && l.unshift(a), r[a] }(f, N, r)), e >= 200 && e < 300 || 304 === e ? (f.ifModified && ((T = N.getResponseHeader("Last-Modified")) && (v.lastModified[o] = T), (T = N.getResponseHeader("etag")) && (v.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (C = (c = function (e, t) { var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0]; e.dataFilter && (t = e.dataFilter(t, e.dataType)); if (u[1]) for (i in e.converters) a[i.toLowerCase()] = e.converters[i]; for (; r = u[++s];)if ("*" !== r) { if ("*" !== l && l !== r) { if (!(i = a[l + " " + r] || a["* " + r])) for (n in a) if ((o = n.split(" "))[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) { !0 === i ? i = a[n] : !0 !== a[n] && (r = o[0], u.splice(s--, 0, r)); break } if (!0 !== i) if (i && e.throws) t = i(t); else try { t = i(t) } catch (e) { return { state: "parsererror", error: i ? e : "No conversion from " + l + " to " + r } } } l = r } return { state: "success", data: t } }(f, x)).state, y = c.data, c = !(b = c.error))) : (b = C, !e && C || (C = "error", e < 0 && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(p, [y, C, N]) : h.rejectWith(p, [N, C, b]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, f, c ? y : b]), g.fireWith(p, [N, C]), u && (d.trigger("ajaxComplete", [N, f]), --v.active || v.event.trigger("ajaxStop"))) } return N }, getScript: function (e, n) { return v.get(e, t, n, "script") }, getJSON: function (e, t, n) { return v.get(e, t, n, "json") } }), v.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) { return v.globalEval(e), e } } }), v.ajaxPrefilter("script", function (e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), v.ajaxTransport("script", function (e) { if (e.crossDomain) { var n, r = o.head || v("head")[0] || o.documentElement; return { send: function (t, i) { (n = o.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success")) }, r.insertBefore(n, r.firstChild) }, abort: function () { n && n.onload(t, !0) } } } }); var At = [], jt = /(=)\?(?=&|$)|\?\?/; v.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var e = At.pop() || v.expando + "_" + dt++; return this[e] = !0, e } }), v.ajaxPrefilter("json jsonp", function (n, r, i) { var o, a, s, u = !1 !== n.jsonp && (jt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(n.data) && "data"); if (u || "jsonp" === n.dataTypes[0]) return o = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(jt, "$1" + o) : !1 !== n.jsonp && (n.url += (ht.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () { return s || v.error(o + " was not called"), s[0] }, n.dataTypes[0] = "json", a = e[o], e[o] = function () { s = arguments }, i.always(function () { e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, At.push(o)), s && v.isFunction(a) && a(s[0]), s = a = t }), "script" }); var Dt, Lt, Ht = 0, qt = e.ActiveXObject && function () { var e; for (e in Dt) Dt[e](t, !0) }; function Mt() { try { return new e.XMLHttpRequest } catch (e) { } } v.ajaxSettings.xhr = e.ActiveXObject ? function () { return !this.isLocal && Mt() || function () { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (e) { } }() } : Mt, Lt = v.ajaxSettings.xhr(), v.support.cors = !!Lt && "withCredentials" in Lt, (Lt = v.support.ajax = !!Lt) && v.ajaxTransport(function (n) { var r; if (!n.crossDomain || v.support.cors) return { send: function (i, o) { var a, s, u = n.xhr(); if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s]; n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"); try { for (s in i) u.setRequestHeader(s, i[s]) } catch (e) { } u.send(n.hasContent && n.data || null), r = function (e, i) { var s, l, c, f; try { if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = v.noop, qt && delete Dt[a]), i) 4 !== u.readyState && u.abort(); else { f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText); try { c = u.statusText } catch (e) { c = "" } s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404 } } catch (e) { i || o(-1, e) } f && o(s, c, f, l) }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Ht, qt && (Dt || (Dt = {}, v(e).unload(qt)), Dt[a] = r), u.onreadystatechange = r) : r() }, abort: function () { r && r(t, !0) } } }); var _t, Ft, Ot = /^(?:toggle|show|hide)$/, Bt = new RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"), Pt = /queueHooks$/, Rt = [function (e, t, n) { var r, i, o, a, s, u, l, c, f, p = this, d = e.style, h = {}, g = [], m = e.nodeType && Ke(e); n.queue || (null == (c = v._queueHooks(e, "fx")).unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () { c.unqueued || f() }), c.unqueued++ , p.always(function () { p.always(function () { c.unqueued-- , v.queue(e, "fx").length || c.empty.fire() }) })); 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === v.css(e, "display") && "none" === v.css(e, "float") && (v.support.inlineBlockNeedsLayout && "inline" !== rt(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")); n.overflow && (d.overflow = "hidden", v.support.shrinkWrapBlocks || p.always(function () { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] })); for (i in t) if (a = t[i], Ot.exec(a)) { if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) continue; g.push(i) } if (o = g.length) { "hidden" in (s = v._data(e, "fxshow") || v._data(e, "fxshow", {})) && (m = s.hidden), u && (s.hidden = !m), m ? v(e).show() : p.done(function () { v(e).hide() }), p.done(function () { var t; for (t in v._removeData(e, "fxshow"), h) v.style(e, t, h[t]) }); for (i = 0; i < o; i++)r = g[i], l = p.createTween(r, m ? s[r] : 0), h[r] = s[r] || v.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0)) } }], Wt = { "*": [function (e, t) { var n, r, i = this.createTween(e, t), o = Bt.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20; if (o) { if (n = +o[2], "px" !== (r = o[3] || (v.cssNumber[e] ? "" : "px")) && s) { s = v.css(i.elem, e, !0) || n || 1; do { s /= u = u || ".5", v.style(i.elem, e, s + r) } while (u !== (u = i.cur() / a) && 1 !== u && --l) } i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n } return i }] }; function $t() { return setTimeout(function () { _t = t }), _t = v.now() } function It(e, t, n) { var r, i, o = 0, a = Rt.length, s = v.Deferred().always(function () { delete u.elem }), u = function () { if (i) return !1; for (var t = _t || $t(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)l.tweens[o].run(r); return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (s.resolveWith(e, [l]), !1) }, l = s.promise({ elem: e, props: v.extend({}, t), opts: v.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: _t || $t(), duration: n.duration, tweens: [], createTween: function (t, n) { var r = v.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(r), r }, stop: function (t) { var n = 0, r = t ? l.tweens.length : 0; if (i) return this; for (i = !0; n < r; n++)l.tweens[n].run(1); return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this } }), c = l.props; for (!function (e, t) { var n, r, i, o, a; for (i in e) if (r = v.camelCase(i), o = t[r], n = e[i], v.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), (a = v.cssHooks[r]) && "expand" in a) for (i in n = a.expand(n), delete e[r], n) i in e || (e[i] = n[i], t[i] = o); else t[r] = o }(c, l.opts.specialEasing); o < a; o++)if (r = Rt[o].call(l, e, c, l.opts)) return r; return function (e, t) { v.each(t, function (t, n) { for (var r = (Wt[t] || []).concat(Wt["*"]), i = 0, o = r.length; i < o; i++)if (r[i].call(e, t, n)) return }) }(l, c), v.isFunction(l.opts.start) && l.opts.start.call(e, l), v.fx.timer(v.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always) } function zt(e, t, n, r, i) { return new zt.prototype.init(e, t, n, r, i) } function Xt(e, t) { var n, r = { height: e }, i = 0; for (t = t ? 1 : 0; i < 4; i += 2 - t)r["margin" + (n = Ye[i])] = r["padding" + n] = e; return t && (r.opacity = r.width = e), r } function Ut(e) { return v.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) } v.Animation = v.extend(It, { tweener: function (e, t) { v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, r = 0, i = e.length; r < i; r++)n = e[r], Wt[n] = Wt[n] || [], Wt[n].unshift(t) }, prefilter: function (e, t) { t ? Rt.unshift(e) : Rt.push(e) } }), v.Tween = zt, zt.prototype = { constructor: zt, init: function (e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (v.cssNumber[n] ? "" : "px") }, cur: function () { var e = zt.propHooks[this.prop]; return e && e.get ? e.get(this) : zt.propHooks._default.get(this) }, run: function (e) { var t, n = zt.propHooks[this.prop]; return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : zt.propHooks._default.set(this), this } }, zt.prototype.init.prototype = zt.prototype, zt.propHooks = { _default: { get: function (e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = v.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop] }, set: function (e) { v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[v.cssProps[e.prop]] || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, zt.propHooks.scrollTop = zt.propHooks.scrollLeft = { set: function (e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, v.each(["toggle", "show", "hide"], function (e, t) { var n = v.fn[t]; v.fn[t] = function (e, r, i) { return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Xt(t, !0), e, r, i) } }), v.fn.extend({ fadeTo: function (e, t, n, r) { return this.filter(Ke).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) }, animate: function (e, t, n, r) { var i = v.isEmptyObject(e), o = v.speed(t, n, r), a = function () { var t = It(this, v.extend({}, e), o); a.finish = function () { t.stop(!0) }, (i || v._data(this, "finish")) && t.stop(!0) }; return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a) }, stop: function (e, n, r) { var i = function (e) { var t = e.stop; delete e.stop, t(r) }; return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () { var t = !0, n = null != e && e + "queueHooks", o = v.timers, a = v._data(this); if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Pt.test(n) && i(a[n]); for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1)); !t && r || v.dequeue(this, e) }) }, finish: function (e) { return !1 !== e && (e = e || "fx"), this.each(function () { var t, n = v._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = v.timers, a = r ? r.length : 0; for (n.finish = !0, v.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1)); for (t = 0; t < a; t++)r[t] && r[t].finish && r[t].finish.call(this); delete n.finish }) } }), v.each({ slideDown: Xt("show"), slideUp: Xt("hide"), slideToggle: Xt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) { v.fn[e] = function (e, n, r) { return this.animate(t, e, n, r) } }), v.speed = function (e, t, n) { var r = e && "object" == typeof e ? v.extend({}, e) : { complete: n || !n && t || v.isFunction(e) && e, duration: e, easing: n && t || t && !v.isFunction(t) && t }; return r.duration = v.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () { v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue) }, r }, v.easing = { linear: function (e) { return e }, swing: function (e) { return .5 - Math.cos(e * Math.PI) / 2 } }, v.timers = [], v.fx = zt.prototype.init, v.fx.tick = function () { var e, n = v.timers, r = 0; for (_t = v.now(); r < n.length; r++)(e = n[r])() || n[r] !== e || n.splice(r--, 1); n.length || v.fx.stop(), _t = t }, v.fx.timer = function (e) { e() && v.timers.push(e) && v.fx.start() }, v.fx.interval = 13, v.fx.start = function () { Ft || (Ft = setInterval(v.fx.tick, v.fx.interval)) }, v.fx.stop = function () { clearInterval(Ft), Ft = null }, v.fx.speeds = { slow: 600, fast: 200, _default: 400 }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) { return v.grep(v.timers, function (t) { return e === t.elem }).length }), v.fn.offset = function (e) { if (arguments.length) return e === t ? this : this.each(function (t) { v.offset.setOffset(this, e, t) }); var n, r, o = { top: 0, left: 0 }, a = this[0], s = a && a.ownerDocument; return s ? (n = s.documentElement, v.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = Ut(s), { top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : o) : void 0 }, v.offset = { setOffset: function (e, t, n) { var r = v.css(e, "position"); "static" === r && (e.style.position = "relative"); var i, o, a = v(e), s = a.offset(), u = v.css(e, "top"), l = v.css(e, "left"), c = {}, f = {}; ("absolute" === r || "fixed" === r) && v.inArray("auto", [u, l]) > -1 ? (i = (f = a.position()).top, o = f.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), v.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + o), "using" in t ? t.using.call(e, c) : a.css(c) } }, v.fn.extend({ position: function () { if (this[0]) { var e, t, n = { top: 0, left: 0 }, r = this[0]; return "fixed" === v.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), v.nodeName(e[0], "html") || (n = e.offset()), n.top += v.css(e[0], "borderTopWidth", !0), n.left += v.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - v.css(r, "marginTop", !0), left: t.left - n.left - v.css(r, "marginLeft", !0) } } }, offsetParent: function () { return this.map(function () { for (var e = this.offsetParent || o.documentElement; e && !v.nodeName(e, "html") && "static" === v.css(e, "position");)e = e.offsetParent; return e || o.documentElement }) } }), v.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) { var r = /Y/.test(n); v.fn[e] = function (i) { return v.access(this, function (e, i, o) { var a = Ut(e); if (o === t) return a ? n in a ? a[n] : a.document.documentElement[i] : e[i]; a ? a.scrollTo(r ? v(a).scrollLeft() : o, r ? o : v(a).scrollTop()) : e[i] = o }, e, i, arguments.length, null) } }), v.each({ Height: "height", Width: "width" }, function (e, n) { v.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) { v.fn[i] = function (i, o) { var a = arguments.length && (r || "boolean" != typeof i), s = r || (!0 === i || !0 === o ? "margin" : "border"); return v.access(this, function (n, r, i) { var o; return v.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? v.css(n, r, s) : v.style(n, r, i, s) }, n, a ? i : t, a, null) } }) }), e.jQuery = e.$ = v, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () { return v }) }(window), jQuery.noConflict(), jQuery.curCSS = jQuery.css, jQuery.ajaxPrefilter(function (e) { e.crossDomain && (e.contents.script = !1) });
jQuery.noConflict();
jQuery.curCSS = jQuery.css;

// ~/scripts/jquery/plugins/jquery-migrate/1.2.1/jquery-migrate-1.2.1.js
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);

// ~/scripts/Underscore/mixins/imod-underscore-mixins.js
_.mixin({filterValue:function(n,t,i){return _.chain(n).map(function(n){return n}).filter(t,i).value()},selectValue:function(n,t,i){return _.filterValue(n,t,i)},maxValue:function(n,t,i){return _.chain(n).map(function(n){return n}).max(t,i).value()},whereValue:function(n,t,i){if(_.isUndefined(t)||_.isNull(t)||_.isEmpty(t))throw"You must supply a valid 'properties' parameter";if(_.isUndefined(i)||_.isNull(i)||_.isEmpty(i))throw"You must supply a 'hashtableKey'";return _.chain(n).map(function(n){return n}).where(t).map(function(n){return[n[i],n]}).object().value()},findWhereValue:function(n,t){return _.chain(n).map(function(n){return n}).findWhere(t).value()},eachValue:function(n,t,i){return _.chain(n).map(function(n){return n},i).each(t,i).value()},sortByValue:function(n,t,i,r){if(_.isUndefined(t)||_.isNull(t)||_.isEmpty(t))throw"You must supply a 'hashtableKey'";return _.chain(n).map(function(n){return n},r).sortBy(i,r).map(function(n){return[n[t],n]}).object().value()}});
//# sourceMappingURL=imod-underscore-mixins.min.js.map


// ~/scripts/Common/Uri.js
/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.13.1
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 */
(function (root, factory) {
    'use strict';
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    if (typeof exports === 'object') {
        // Node
        module.exports = factory(require('./punycode'), require('./IPv6'), require('./SecondLevelDomains'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['./punycode', './IPv6', './SecondLevelDomains'], factory);
    } else {
        // Browser globals (root is window)
        root.URI = factory(root.punycode, root.IPv6, root.SecondLevelDomains, root);
    }
}(this, function (punycode, IPv6, SLD, root) {
    'use strict';
    /*global location, escape, unescape */
    // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
    /*jshint camelcase: false */

    // save current URI variable, if any
    var _URI = root && root.URI;

    function URI(url, base) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof URI)) {
            return new URI(url, base);
        }

        if (url === undefined) {
            if (typeof location !== 'undefined') {
                url = location.href + '';
            } else {
                url = '';
            }
        }

        this.href(url);

        // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
        if (base !== undefined) {
            return this.absoluteTo(base);
        }

        return this;
    }

    URI.version = '1.13.1';

    var p = URI.prototype;
    var hasOwn = Object.prototype.hasOwnProperty;

    function escapeRegEx(string) {
        // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
        return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }

    function getType(value) {
        // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
        if (value === undefined) {
            return 'Undefined';
        }

        return String(Object.prototype.toString.call(value)).slice(8, -1);
    }

    function isArray(obj) {
        return getType(obj) === 'Array';
    }

    function filterArrayValues(data, value) {
        var lookup = {};
        var i, length;

        if (isArray(value)) {
            for (i = 0, length = value.length; i < length; i++) {
                lookup[value[i]] = true;
            }
        } else {
            lookup[value] = true;
        }

        for (i = 0, length = data.length; i < length; i++) {
            if (lookup[data[i]] !== undefined) {
                data.splice(i, 1);
                length--;
                i--;
            }
        }

        return data;
    }

    function arrayContains(list, value) {
        var i, length;

        // value may be string, number, array, regexp
        if (isArray(value)) {
            // Note: this can be optimized to O(n) (instead of current O(m * n))
            for (i = 0, length = value.length; i < length; i++) {
                if (!arrayContains(list, value[i])) {
                    return false;
                }
            }

            return true;
        }

        var _type = getType(value);
        for (i = 0, length = list.length; i < length; i++) {
            if (_type === 'RegExp') {
                if (typeof list[i] === 'string' && list[i].match(value)) {
                    return true;
                }
            } else if (list[i] === value) {
                return true;
            }
        }

        return false;
    }

    function arraysEqual(one, two) {
        if (!isArray(one) || !isArray(two)) {
            return false;
        }

        // arrays can't be equal if they have different amount of content
        if (one.length !== two.length) {
            return false;
        }

        one.sort();
        two.sort();

        for (var i = 0, l = one.length; i < l; i++) {
            if (one[i] !== two[i]) {
                return false;
            }
        }

        return true;
    }

    URI._parts = function () {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            // state
            duplicateQueryParameters: URI.duplicateQueryParameters,
            escapeQuerySpace: URI.escapeQuerySpace
        };
    };
    // state: allow duplicate query parameters (a=1&a=1)
    URI.duplicateQueryParameters = false;
    // state: replaces + with %20 (space in query strings)
    URI.escapeQuerySpace = true;
    // static properties
    URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
    URI.idn_expression = /[^a-z0-9\.-]/i;
    URI.punycode_expression = /(xn--)/i;
    // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
    URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    // credits to Rich Brown
    // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
    // specification: http://www.ietf.org/rfc/rfc4291.txt
    URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    // expression used is "gruber revised" (@gruber v2) determined to be the
    // best solution in a regex-golf we did a couple of ages ago at
    // * http://mathiasbynens.be/demo/url-regex
    // * http://rodneyrehm.de/t/url-regex.html
    URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
    URI.findUri = {
        // valid "scheme://" or "www."
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        // everything up to the next whitespace
        end: /[\s\r\n]|$/,
        // trim trailing punctuation captured by end RegExp
        trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/
    };
    // http://www.iana.org/assignments/uri-schemes.html
    // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
    URI.defaultPorts = {
        http: '80',
        https: '443',
        ftp: '21',
        gopher: '70',
        ws: '80',
        wss: '443'
    };
    // allowed hostname characters according to RFC 3986
    // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
    // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . -
    URI.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/;
    // map DOM Elements to their URI attribute
    URI.domAttributes = {
        'a': 'href',
        'blockquote': 'cite',
        'link': 'href',
        'base': 'href',
        'script': 'src',
        'form': 'action',
        'img': 'src',
        'area': 'href',
        'iframe': 'src',
        'embed': 'src',
        'source': 'src',
        'track': 'src',
        'input': 'src' // but only if type="image"
    };
    URI.getDomAttribute = function (node) {
        if (!node || !node.nodeName) {
            return undefined;
        }

        var nodeName = node.nodeName.toLowerCase();
        // <input> should only expose src for type="image"
        if (nodeName === 'input' && node.type !== 'image') {
            return undefined;
        }

        return URI.domAttributes[nodeName];
    };

    function escapeForDumbFirefox36(value) {
        // https://github.com/medialize/URI.js/issues/91
        return escape(value);
    }

    // encoding / decoding according to RFC3986
    function strictEncodeURIComponent(string) {
        // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
        return encodeURIComponent(string)
          .replace(/[!'()*]/g, escapeForDumbFirefox36)
          .replace(/\*/g, '%2A');
    }
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
    URI.iso8859 = function () {
        URI.encode = escape;
        URI.decode = unescape;
    };
    URI.unicode = function () {
        URI.encode = strictEncodeURIComponent;
        URI.decode = decodeURIComponent;
    };
    URI.characters = {
        pathname: {
            encode: {
                // RFC3986 2.1: For consistency, URI producers and normalizers should
                // use uppercase hexadecimal digits for all percent-encodings.
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
                map: {
                    // -._~!'()*
                    '%24': '$',
                    '%26': '&',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '=',
                    '%3A': ':',
                    '%40': '@'
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    '/': '%2F',
                    '?': '%3F',
                    '#': '%23'
                }
            }
        },
        reserved: {
            encode: {
                // RFC3986 2.1: For consistency, URI producers and normalizers should
                // use uppercase hexadecimal digits for all percent-encodings.
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
                map: {
                    // gen-delims
                    '%3A': ':',
                    '%2F': '/',
                    '%3F': '?',
                    '%23': '#',
                    '%5B': '[',
                    '%5D': ']',
                    '%40': '@',
                    // sub-delims
                    '%21': '!',
                    '%24': '$',
                    '%26': '&',
                    '%27': '\'',
                    '%28': '(',
                    '%29': ')',
                    '%2A': '*',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '='
                }
            }
        }
    };
    URI.encodeQuery = function (string, escapeQuerySpace) {
        var escaped = URI.encode(string + '');
        if (escapeQuerySpace === undefined) {
            escapeQuerySpace = URI.escapeQuerySpace;
        }

        return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
    };
    URI.decodeQuery = function (string, escapeQuerySpace) {
        string += '';
        if (escapeQuerySpace === undefined) {
            escapeQuerySpace = URI.escapeQuerySpace;
        }

        try {
            return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
        } catch (e) {
            // we're not going to mess with weird encodings,
            // give up and return the undecoded original string
            // see https://github.com/medialize/URI.js/issues/87
            // see https://github.com/medialize/URI.js/issues/92
            return string;
        }
    };
    URI.recodePath = function (string) {
        var segments = (string + '').split('/');
        for (var i = 0, length = segments.length; i < length; i++) {
            segments[i] = URI.encodePathSegment(URI.decode(segments[i]));
        }

        return segments.join('/');
    };
    URI.decodePath = function (string) {
        var segments = (string + '').split('/');
        for (var i = 0, length = segments.length; i < length; i++) {
            segments[i] = URI.decodePathSegment(segments[i]);
        }

        return segments.join('/');
    };
    // generate encode/decode path functions
    var _parts = { 'encode': 'encode', 'decode': 'decode' };
    var _part;
    var generateAccessor = function (_group, _part) {
        return function (string) {
            return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function (c) {
                return URI.characters[_group][_part].map[c];
            });
        };
    };

    for (_part in _parts) {
        URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
    }

    URI.encodeReserved = generateAccessor('reserved', 'encode');

    URI.parse = function (string, parts) {
        var pos;
        if (!parts) {
            parts = {};
        }
        // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]

        // extract fragment
        pos = string.indexOf('#');
        if (pos > -1) {
            // escaping?
            parts.fragment = string.substring(pos + 1) || null;
            string = string.substring(0, pos);
        }

        // extract query
        pos = string.indexOf('?');
        if (pos > -1) {
            // escaping?
            parts.query = string.substring(pos + 1) || null;
            string = string.substring(0, pos);
        }

        // extract protocol
        if (string.substring(0, 2) === '//') {
            // relative-scheme
            parts.protocol = null;
            string = string.substring(2);
            // extract "user:pass@host:port"
            string = URI.parseAuthority(string, parts);
        } else {
            pos = string.indexOf(':');
            if (pos > -1) {
                parts.protocol = string.substring(0, pos) || null;
                if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
                    // : may be within the path
                    parts.protocol = undefined;
                } else if (parts.protocol === 'file') {
                    // the file scheme: does not contain an authority
                    string = string.substring(pos + 3);
                } else if (string.substring(pos + 1, pos + 3) === '//') {
                    string = string.substring(pos + 3);

                    // extract "user:pass@host:port"
                    string = URI.parseAuthority(string, parts);
                } else {
                    string = string.substring(pos + 1);
                    parts.urn = true;
                }
            }
        }

        // what's left must be the path
        parts.path = string;

        // and we're done
        return parts;
    };
    URI.parseHost = function (string, parts) {
        // extract host:port
        var pos = string.indexOf('/');
        var bracketPos;
        var t;

        if (pos === -1) {
            pos = string.length;
        }

        if (string.charAt(0) === '[') {
            // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
            // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
            // IPv6+port in the format [2001:db8::1]:80 (for the time being)
            bracketPos = string.indexOf(']');
            parts.hostname = string.substring(1, bracketPos) || null;
            parts.port = string.substring(bracketPos + 2, pos) || null;
            if (parts.port === '/') {
                parts.port = null;
            }
        } else if (string.indexOf(':') !== string.lastIndexOf(':')) {
            // IPv6 host contains multiple colons - but no port
            // this notation is actually not allowed by RFC 3986, but we're a liberal parser
            parts.hostname = string.substring(0, pos) || null;
            parts.port = null;
        } else {
            t = string.substring(0, pos).split(':');
            parts.hostname = t[0] || null;
            parts.port = t[1] || null;
        }

        if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
            pos++;
            string = '/' + string;
        }

        return string.substring(pos) || '/';
    };
    URI.parseAuthority = function (string, parts) {
        string = URI.parseUserinfo(string, parts);
        return URI.parseHost(string, parts);
    };
    URI.parseUserinfo = function (string, parts) {
        // extract username:password
        var firstSlash = string.indexOf('/');
        /*jshint laxbreak: true */
        var pos = firstSlash > -1
          ? string.lastIndexOf('@', firstSlash)
          : string.indexOf('@');
        /*jshint laxbreak: false */
        var t;

        // authority@ must come before /path
        if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
            t = string.substring(0, pos).split(':');
            parts.username = t[0] ? URI.decode(t[0]) : null;
            t.shift();
            parts.password = t[0] ? URI.decode(t.join(':')) : null;
            string = string.substring(pos + 1);
        } else {
            parts.username = null;
            parts.password = null;
        }

        return string;
    };
    URI.parseQuery = function (string, escapeQuerySpace) {
        if (!string) {
            return {};
        }

        // throw out the funky business - "?"[name"="value"&"]+
        string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');

        if (!string) {
            return {};
        }

        var items = {};
        var splits = string.split('&');
        var length = splits.length;
        var v, name, value;

        for (var i = 0; i < length; i++) {
            v = splits[i].split('=');
            name = URI.decodeQuery(v.shift(), escapeQuerySpace);
            // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
            value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;

            if (items[name]) {
                if (typeof items[name] === 'string') {
                    items[name] = [items[name]];
                }

                items[name].push(value);
            } else {
                items[name] = value;
            }
        }

        return items;
    };

    URI.build = function (parts) {
        var t = '';

        if (parts.protocol) {
            t += parts.protocol + ':';
        }

        if (!parts.urn && (t || parts.hostname)) {
            t += '//';
        }

        t += (URI.buildAuthority(parts) || '');

        if (typeof parts.path === 'string') {
            if (parts.path.charAt(0) !== '/' && typeof parts.hostname === 'string') {
                t += '/';
            }

            t += parts.path;
        }

        if (typeof parts.query === 'string' && parts.query) {
            t += '?' + parts.query;
        }

        if (typeof parts.fragment === 'string' && parts.fragment) {
            t += '#' + parts.fragment;
        }
        return t;
    };
    URI.buildHost = function (parts) {
        var t = '';

        if (!parts.hostname) {
            return '';
        } else if (URI.ip6_expression.test(parts.hostname)) {
            t += '[' + parts.hostname + ']';
        } else {
            t += parts.hostname;
        }

        if (parts.port) {
            t += ':' + parts.port;
        }

        return t;
    };
    URI.buildAuthority = function (parts) {
        return URI.buildUserinfo(parts) + URI.buildHost(parts);
    };
    URI.buildUserinfo = function (parts) {
        var t = '';

        if (parts.username) {
            t += URI.encode(parts.username);

            if (parts.password) {
                t += ':' + URI.encode(parts.password);
            }

            t += '@';
        }

        return t;
    };
    URI.buildQuery = function (data, duplicateQueryParameters, escapeQuerySpace) {
        // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
        // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
        // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
        // URI.js treats the query string as being application/x-www-form-urlencoded
        // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type

        var t = '';
        var unique, key, i, length;
        for (key in data) {
            if (hasOwn.call(data, key) && key) {
                if (isArray(data[key])) {
                    unique = {};
                    for (i = 0, length = data[key].length; i < length; i++) {
                        if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
                            t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
                            if (duplicateQueryParameters !== true) {
                                unique[data[key][i] + ''] = true;
                            }
                        }
                    }
                } else if (data[key] !== undefined) {
                    t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
                }
            }
        }

        return t.substring(1);
    };
    URI.buildQueryParameter = function (name, value, escapeQuerySpace) {
        // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
        // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
        return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
    };

    URI.addQuery = function (data, name, value) {
        if (typeof name === 'object') {
            for (var key in name) {
                if (hasOwn.call(name, key)) {
                    URI.addQuery(data, key, name[key]);
                }
            }
        } else if (typeof name === 'string') {
            if (data[name] === undefined) {
                data[name] = value;
                return;
            } else if (typeof data[name] === 'string') {
                data[name] = [data[name]];
            }

            if (!isArray(value)) {
                value = [value];
            }

            data[name] = data[name].concat(value);
        } else {
            throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
        }
    };
    URI.removeQuery = function (data, name, value) {
        var i, length, key;

        if (isArray(name)) {
            for (i = 0, length = name.length; i < length; i++) {
                data[name[i]] = undefined;
            }
        } else if (typeof name === 'object') {
            for (key in name) {
                if (hasOwn.call(name, key)) {
                    URI.removeQuery(data, key, name[key]);
                }
            }
        } else if (typeof name === 'string') {
            if (value !== undefined) {
                if (data[name] === value) {
                    data[name] = undefined;
                } else if (isArray(data[name])) {
                    data[name] = filterArrayValues(data[name], value);
                }
            } else {
                data[name] = undefined;
            }
        } else {
            throw new TypeError('URI.addQuery() accepts an object, string as the first parameter');
        }
    };
    URI.hasQuery = function (data, name, value, withinArray) {
        if (typeof name === 'object') {
            for (var key in name) {
                if (hasOwn.call(name, key)) {
                    if (!URI.hasQuery(data, key, name[key])) {
                        return false;
                    }
                }
            }

            return true;
        } else if (typeof name !== 'string') {
            throw new TypeError('URI.hasQuery() accepts an object, string as the name parameter');
        }

        switch (getType(value)) {
            case 'Undefined':
                // true if exists (but may be empty)
                return name in data; // data[name] !== undefined;

            case 'Boolean':
                // true if exists and non-empty
                var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
                return value === _booly;

            case 'Function':
                // allow complex comparison
                return !!value(data[name], name, data);

            case 'Array':
                if (!isArray(data[name])) {
                    return false;
                }

                var op = withinArray ? arrayContains : arraysEqual;
                return op(data[name], value);

            case 'RegExp':
                if (!isArray(data[name])) {
                    return Boolean(data[name] && data[name].match(value));
                }

                if (!withinArray) {
                    return false;
                }

                return arrayContains(data[name], value);

            case 'Number':
                value = String(value);
                /* falls through */
            case 'String':
                if (!isArray(data[name])) {
                    return data[name] === value;
                }

                if (!withinArray) {
                    return false;
                }

                return arrayContains(data[name], value);

            default:
                throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
        }
    };


    URI.commonPath = function (one, two) {
        var length = Math.min(one.length, two.length);
        var pos;

        // find first non-matching character
        for (pos = 0; pos < length; pos++) {
            if (one.charAt(pos) !== two.charAt(pos)) {
                pos--;
                break;
            }
        }

        if (pos < 1) {
            return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
        }

        // revert to last /
        if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
            pos = one.substring(0, pos).lastIndexOf('/');
        }

        return one.substring(0, pos + 1);
    };

    URI.withinString = function (string, callback, options) {
        options || (options = {});
        var _start = options.start || URI.findUri.start;
        var _end = options.end || URI.findUri.end;
        var _trim = options.trim || URI.findUri.trim;
        var _attributeOpen = /[a-z0-9-]=["']?$/i;

        _start.lastIndex = 0;
        while (true) {
            var match = _start.exec(string);
            if (!match) {
                break;
            }

            var start = match.index;
            if (options.ignoreHtml) {
                // attribut(e=["']?$)
                var attributeOpen = string.slice(Math.max(start - 3, 0), start);
                if (attributeOpen && _attributeOpen.test(attributeOpen)) {
                    continue;
                }
            }

            var end = start + string.slice(start).search(_end);
            var slice = string.slice(start, end).replace(_trim, '');
            if (options.ignore && options.ignore.test(slice)) {
                continue;
            }

            end = start + slice.length;
            var result = callback(slice, start, end, string);
            string = string.slice(0, start) + result + string.slice(end);
            _start.lastIndex = start + result.length;
        }

        _start.lastIndex = 0;
        return string;
    };

    URI.ensureValidHostname = function (v) {
        // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
        // they are not part of DNS and therefore ignored by URI.js

        if (v.match(URI.invalid_hostname_characters)) {
            // test punycode
            if (!punycode) {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-] and Punycode.js is not available');
            }

            if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
            }
        }
    };

    // noConflict
    URI.noConflict = function (removeAll) {
        if (removeAll) {
            var unconflicted = {
                URI: this.noConflict()
            };

            if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
                unconflicted.URITemplate = root.URITemplate.noConflict();
            }

            if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
                unconflicted.IPv6 = root.IPv6.noConflict();
            }

            if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
                unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
            }

            return unconflicted;
        } else if (root.URI === this) {
            root.URI = _URI;
        }

        return this;
    };

    p.build = function (deferBuild) {
        if (deferBuild === true) {
            this._deferred_build = true;
        } else if (deferBuild === undefined || this._deferred_build) {
            this._string = URI.build(this._parts);
            this._deferred_build = false;
        }

        return this;
    };

    p.clone = function () {
        return new URI(this);
    };

    p.valueOf = p.toString = function () {
        return this.build(false)._string;
    };

    // generate simple accessors
    _parts = { protocol: 'protocol', username: 'username', password: 'password', hostname: 'hostname', port: 'port' };
    generateAccessor = function (_part) {
        return function (v, build) {
            if (v === undefined) {
                return this._parts[_part] || '';
            } else {
                this._parts[_part] = v || null;
                this.build(!build);
                return this;
            }
        };
    };

    for (_part in _parts) {
        p[_part] = generateAccessor(_parts[_part]);
    }

    // generate accessors with optionally prefixed input
    _parts = { query: '?', fragment: '#' };
    generateAccessor = function (_part, _key) {
        return function (v, build) {
            if (v === undefined) {
                return this._parts[_part] || '';
            } else {
                if (v !== null) {
                    v = v + '';
                    if (v.charAt(0) === _key) {
                        v = v.substring(1);
                    }
                }

                this._parts[_part] = v;
                this.build(!build);
                return this;
            }
        };
    };

    for (_part in _parts) {
        p[_part] = generateAccessor(_part, _parts[_part]);
    }

    // generate accessors with prefixed output
    _parts = { search: ['?', 'query'], hash: ['#', 'fragment'] };
    generateAccessor = function (_part, _key) {
        return function (v, build) {
            var t = this[_part](v, build);
            return typeof t === 'string' && t.length ? (_key + t) : t;
        };
    };

    for (_part in _parts) {
        p[_part] = generateAccessor(_parts[_part][1], _parts[_part][0]);
    }

    p.pathname = function (v, build) {
        if (v === undefined || v === true) {
            var res = this._parts.path || (this._parts.hostname ? '/' : '');
            return v ? URI.decodePath(res) : res;
        } else {
            this._parts.path = v ? URI.recodePath(v) : '/';
            this.build(!build);
            return this;
        }
    };
    p.path = p.pathname;
    p.href = function (href, build) {
        var key;

        if (href === undefined) {
            return this.toString();
        }

        this._string = '';
        this._parts = URI._parts();

        var _URI = href instanceof URI;
        var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
        if (href.nodeName) {
            var attribute = URI.getDomAttribute(href);
            href = href[attribute] || '';
            _object = false;
        }

        // window.location is reported to be an object, but it's not the sort
        // of object we're looking for:
        // * location.protocol ends with a colon
        // * location.query != object.search
        // * location.hash != object.fragment
        // simply serializing the unknown object should do the trick
        // (for location, not for everything...)
        if (!_URI && _object && href.pathname !== undefined) {
            href = href.toString();
        }

        if (typeof href === 'string') {
            this._parts = URI.parse(href, this._parts);
        } else if (_URI || _object) {
            var src = _URI ? href._parts : href;
            for (key in src) {
                if (hasOwn.call(this._parts, key)) {
                    this._parts[key] = src[key];
                }
            }
        } else {
            throw new TypeError('invalid input');
        }

        this.build(!build);
        return this;
    };

    // identification accessors
    p.is = function (what) {
        var ip = false;
        var ip4 = false;
        var ip6 = false;
        var name = false;
        var sld = false;
        var idn = false;
        var punycode = false;
        var relative = !this._parts.urn;

        if (this._parts.hostname) {
            relative = false;
            ip4 = URI.ip4_expression.test(this._parts.hostname);
            ip6 = URI.ip6_expression.test(this._parts.hostname);
            ip = ip4 || ip6;
            name = !ip;
            sld = name && SLD && SLD.has(this._parts.hostname);
            idn = name && URI.idn_expression.test(this._parts.hostname);
            punycode = name && URI.punycode_expression.test(this._parts.hostname);
        }

        switch (what.toLowerCase()) {
            case 'relative':
                return relative;

            case 'absolute':
                return !relative;

                // hostname identification
            case 'domain':
            case 'name':
                return name;

            case 'sld':
                return sld;

            case 'ip':
                return ip;

            case 'ip4':
            case 'ipv4':
            case 'inet4':
                return ip4;

            case 'ip6':
            case 'ipv6':
            case 'inet6':
                return ip6;

            case 'idn':
                return idn;

            case 'url':
                return !this._parts.urn;

            case 'urn':
                return !!this._parts.urn;

            case 'punycode':
                return punycode;
        }

        return null;
    };

    // component specific input validation
    var _protocol = p.protocol;
    var _port = p.port;
    var _hostname = p.hostname;

    p.protocol = function (v, build) {
        if (v !== undefined) {
            if (v) {
                // accept trailing ://
                v = v.replace(/:(\/\/)?$/, '');

                if (!v.match(URI.protocol_expression)) {
                    throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
                }
            }
        }
        return _protocol.call(this, v, build);
    };
    p.scheme = p.protocol;
    p.port = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (v !== undefined) {
            if (v === 0) {
                v = null;
            }

            if (v) {
                v += '';
                if (v.charAt(0) === ':') {
                    v = v.substring(1);
                }

                if (v.match(/[^0-9]/)) {
                    throw new TypeError('Port "' + v + '" contains characters other than [0-9]');
                }
            }
        }
        return _port.call(this, v, build);
    };
    p.hostname = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (v !== undefined) {
            var x = {};
            URI.parseHost(v, x);
            v = x.hostname;
        }
        return _hostname.call(this, v, build);
    };

    // compound accessors
    p.host = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (v === undefined) {
            return this._parts.hostname ? URI.buildHost(this._parts) : '';
        } else {
            URI.parseHost(v, this._parts);
            this.build(!build);
            return this;
        }
    };
    p.authority = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (v === undefined) {
            return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
        } else {
            URI.parseAuthority(v, this._parts);
            this.build(!build);
            return this;
        }
    };
    p.userinfo = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (v === undefined) {
            if (!this._parts.username) {
                return '';
            }

            var t = URI.buildUserinfo(this._parts);
            return t.substring(0, t.length - 1);
        } else {
            if (v[v.length - 1] !== '@') {
                v += '@';
            }

            URI.parseUserinfo(v, this._parts);
            this.build(!build);
            return this;
        }
    };
    p.resource = function (v, build) {
        var parts;

        if (v === undefined) {
            return this.path() + this.search() + this.hash();
        }

        parts = URI.parse(v);
        this._parts.path = parts.path;
        this._parts.query = parts.query;
        this._parts.fragment = parts.fragment;
        this.build(!build);
        return this;
    };

    // fraction accessors
    p.subdomain = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        // convenience, return "www" from "www.example.org"
        if (v === undefined) {
            if (!this._parts.hostname || this.is('IP')) {
                return '';
            }

            // grab domain and add another segment
            var end = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, end) || '';
        } else {
            var e = this._parts.hostname.length - this.domain().length;
            var sub = this._parts.hostname.substring(0, e);
            var replace = new RegExp('^' + escapeRegEx(sub));

            if (v && v.charAt(v.length - 1) !== '.') {
                v += '.';
            }

            if (v) {
                URI.ensureValidHostname(v);
            }

            this._parts.hostname = this._parts.hostname.replace(replace, v);
            this.build(!build);
            return this;
        }
    };
    p.domain = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (typeof v === 'boolean') {
            build = v;
            v = undefined;
        }

        // convenience, return "example.org" from "www.example.org"
        if (v === undefined) {
            if (!this._parts.hostname || this.is('IP')) {
                return '';
            }

            // if hostname consists of 1 or 2 segments, it must be the domain
            var t = this._parts.hostname.match(/\./g);
            if (t && t.length < 2) {
                return this._parts.hostname;
            }

            // grab tld and add another segment
            var end = this._parts.hostname.length - this.tld(build).length - 1;
            end = this._parts.hostname.lastIndexOf('.', end - 1) + 1;
            return this._parts.hostname.substring(end) || '';
        } else {
            if (!v) {
                throw new TypeError('cannot set domain empty');
            }

            URI.ensureValidHostname(v);

            if (!this._parts.hostname || this.is('IP')) {
                this._parts.hostname = v;
            } else {
                var replace = new RegExp(escapeRegEx(this.domain()) + '$');
                this._parts.hostname = this._parts.hostname.replace(replace, v);
            }

            this.build(!build);
            return this;
        }
    };
    p.tld = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (typeof v === 'boolean') {
            build = v;
            v = undefined;
        }

        // return "org" from "www.example.org"
        if (v === undefined) {
            if (!this._parts.hostname || this.is('IP')) {
                return '';
            }

            var pos = this._parts.hostname.lastIndexOf('.');
            var tld = this._parts.hostname.substring(pos + 1);

            if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
                return SLD.get(this._parts.hostname) || tld;
            }

            return tld;
        } else {
            var replace;

            if (!v) {
                throw new TypeError('cannot set TLD empty');
            } else if (v.match(/[^a-zA-Z0-9-]/)) {
                if (SLD && SLD.is(v)) {
                    replace = new RegExp(escapeRegEx(this.tld()) + '$');
                    this._parts.hostname = this._parts.hostname.replace(replace, v);
                } else {
                    throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
                }
            } else if (!this._parts.hostname || this.is('IP')) {
                throw new ReferenceError('cannot set TLD on non-domain host');
            } else {
                replace = new RegExp(escapeRegEx(this.tld()) + '$');
                this._parts.hostname = this._parts.hostname.replace(replace, v);
            }

            this.build(!build);
            return this;
        }
    };
    p.directory = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (v === undefined || v === true) {
            if (!this._parts.path && !this._parts.hostname) {
                return '';
            }

            if (this._parts.path === '/') {
                return '/';
            }

            var end = this._parts.path.length - this.filename().length - 1;
            var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');

            return v ? URI.decodePath(res) : res;

        } else {
            var e = this._parts.path.length - this.filename().length;
            var directory = this._parts.path.substring(0, e);
            var replace = new RegExp('^' + escapeRegEx(directory));

            // fully qualifier directories begin with a slash
            if (!this.is('relative')) {
                if (!v) {
                    v = '/';
                }

                if (v.charAt(0) !== '/') {
                    v = '/' + v;
                }
            }

            // directories always end with a slash
            if (v && v.charAt(v.length - 1) !== '/') {
                v += '/';
            }

            v = URI.recodePath(v);
            this._parts.path = this._parts.path.replace(replace, v);
            this.build(!build);
            return this;
        }
    };
    p.filename = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (v === undefined || v === true) {
            if (!this._parts.path || this._parts.path === '/') {
                return '';
            }

            var pos = this._parts.path.lastIndexOf('/');
            var res = this._parts.path.substring(pos + 1);

            return v ? URI.decodePathSegment(res) : res;
        } else {
            var mutatedDirectory = false;

            if (v.charAt(0) === '/') {
                v = v.substring(1);
            }

            if (v.match(/\.?\//)) {
                mutatedDirectory = true;
            }

            var replace = new RegExp(escapeRegEx(this.filename()) + '$');
            v = URI.recodePath(v);
            this._parts.path = this._parts.path.replace(replace, v);

            if (mutatedDirectory) {
                this.normalizePath(build);
            } else {
                this.build(!build);
            }

            return this;
        }
    };
    p.suffix = function (v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }

        if (v === undefined || v === true) {
            if (!this._parts.path || this._parts.path === '/') {
                return '';
            }

            var filename = this.filename();
            var pos = filename.lastIndexOf('.');
            var s, res;

            if (pos === -1) {
                return '';
            }

            // suffix may only contain alnum characters (yup, I made this up.)
            s = filename.substring(pos + 1);
            res = (/^[a-z0-9%]+$/i).test(s) ? s : '';
            return v ? URI.decodePathSegment(res) : res;
        } else {
            if (v.charAt(0) === '.') {
                v = v.substring(1);
            }

            var suffix = this.suffix();
            var replace;

            if (!suffix) {
                if (!v) {
                    return this;
                }

                this._parts.path += '.' + URI.recodePath(v);
            } else if (!v) {
                replace = new RegExp(escapeRegEx('.' + suffix) + '$');
            } else {
                replace = new RegExp(escapeRegEx(suffix) + '$');
            }

            if (replace) {
                v = URI.recodePath(v);
                this._parts.path = this._parts.path.replace(replace, v);
            }

            this.build(!build);
            return this;
        }
    };
    p.segment = function (segment, v, build) {
        var separator = this._parts.urn ? ':' : '/';
        var path = this.path();
        var absolute = path.substring(0, 1) === '/';
        var segments = path.split(separator);

        if (segment !== undefined && typeof segment !== 'number') {
            build = v;
            v = segment;
            segment = undefined;
        }

        if (segment !== undefined && typeof segment !== 'number') {
            throw new Error('Bad segment "' + segment + '", must be 0-based integer');
        }

        if (absolute) {
            segments.shift();
        }

        if (segment < 0) {
            // allow negative indexes to address from the end
            segment = Math.max(segments.length + segment, 0);
        }

        if (v === undefined) {
            /*jshint laxbreak: true */
            return segment === undefined
              ? segments
              : segments[segment];
            /*jshint laxbreak: false */
        } else if (segment === null || segments[segment] === undefined) {
            if (isArray(v)) {
                segments = [];
                // collapse empty elements within array
                for (var i = 0, l = v.length; i < l; i++) {
                    if (!v[i].length && (!segments.length || !segments[segments.length - 1].length)) {
                        continue;
                    }

                    if (segments.length && !segments[segments.length - 1].length) {
                        segments.pop();
                    }

                    segments.push(v[i]);
                }
            } else if (v || (typeof v === 'string')) {
                if (segments[segments.length - 1] === '') {
                    // empty trailing elements have to be overwritten
                    // to prevent results such as /foo//bar
                    segments[segments.length - 1] = v;
                } else {
                    segments.push(v);
                }
            }
        } else {
            if (v || (typeof v === 'string' && v.length)) {
                segments[segment] = v;
            } else {
                segments.splice(segment, 1);
            }
        }

        if (absolute) {
            segments.unshift('');
        }

        return this.path(segments.join(separator), build);
    };
    p.segmentCoded = function (segment, v, build) {
        var segments, i, l;

        if (typeof segment !== 'number') {
            build = v;
            v = segment;
            segment = undefined;
        }

        if (v === undefined) {
            segments = this.segment(segment, v, build);
            if (!isArray(segments)) {
                segments = segments !== undefined ? URI.decode(segments) : undefined;
            } else {
                for (i = 0, l = segments.length; i < l; i++) {
                    segments[i] = URI.decode(segments[i]);
                }
            }

            return segments;
        }

        if (!isArray(v)) {
            v = typeof v === 'string' ? URI.encode(v) : v;
        } else {
            for (i = 0, l = v.length; i < l; i++) {
                v[i] = URI.decode(v[i]);
            }
        }

        return this.segment(segment, v, build);
    };

    // mutating query string
    var q = p.query;
    p.query = function (v, build) {
        if (v === true) {
            return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        } else if (typeof v === 'function') {
            var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            var result = v.call(this, data);
            this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            this.build(!build);
            return this;
        } else if (v !== undefined && typeof v !== 'string') {
            this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            this.build(!build);
            return this;
        } else {
            return q.call(this, v, build);
        }
    };
    p.setQuery = function (name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);

        if (typeof name === 'object') {
            for (var key in name) {
                if (hasOwn.call(name, key)) {
                    data[key] = name[key];
                }
            }
        } else if (typeof name === 'string') {
            data[name] = value !== undefined ? value : null;
        } else {
            throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
        }

        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== 'string') {
            build = value;
        }

        this.build(!build);
        return this;
    };
    p.addQuery = function (name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        URI.addQuery(data, name, value === undefined ? null : value);
        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== 'string') {
            build = value;
        }

        this.build(!build);
        return this;
    };
    p.removeQuery = function (name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        URI.removeQuery(data, name, value);
        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== 'string') {
            build = value;
        }

        this.build(!build);
        return this;
    };
    p.hasQuery = function (name, value, withinArray) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return URI.hasQuery(data, name, value, withinArray);
    };
    p.setSearch = p.setQuery;
    p.addSearch = p.addQuery;
    p.removeSearch = p.removeQuery;
    p.hasSearch = p.hasQuery;

    // sanitizing URLs
    p.normalize = function () {
        if (this._parts.urn) {
            return this
              .normalizeProtocol(false)
              .normalizeQuery(false)
              .normalizeFragment(false)
              .build();
        }

        return this
          .normalizeProtocol(false)
          .normalizeHostname(false)
          .normalizePort(false)
          .normalizePath(false)
          .normalizeQuery(false)
          .normalizeFragment(false)
          .build();
    };
    p.normalizeProtocol = function (build) {
        if (typeof this._parts.protocol === 'string') {
            this._parts.protocol = this._parts.protocol.toLowerCase();
            this.build(!build);
        }

        return this;
    };
    p.normalizeHostname = function (build) {
        if (this._parts.hostname) {
            if (this.is('IDN') && punycode) {
                this._parts.hostname = punycode.toASCII(this._parts.hostname);
            } else if (this.is('IPv6') && IPv6) {
                this._parts.hostname = IPv6.best(this._parts.hostname);
            }

            this._parts.hostname = this._parts.hostname.toLowerCase();
            this.build(!build);
        }

        return this;
    };
    p.normalizePort = function (build) {
        // remove port of it's the protocol's default
        if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
            this._parts.port = null;
            this.build(!build);
        }

        return this;
    };
    p.normalizePath = function (build) {
        if (this._parts.urn) {
            return this;
        }

        if (!this._parts.path || this._parts.path === '/') {
            return this;
        }

        var _was_relative;
        var _path = this._parts.path;
        var _leadingParents = '';
        var _parent, _pos;

        // handle relative paths
        if (_path.charAt(0) !== '/') {
            _was_relative = true;
            _path = '/' + _path;
        }

        // resolve simples
        _path = _path
          .replace(/(\/(\.\/)+)|(\/\.$)/g, '/')
          .replace(/\/{2,}/g, '/');

        // remember leading parents
        if (_was_relative) {
            _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
            if (_leadingParents) {
                _leadingParents = _leadingParents[0];
            }
        }

        // resolve parents
        while (true) {
            _parent = _path.indexOf('/..');
            if (_parent === -1) {
                // no more ../ to resolve
                break;
            } else if (_parent === 0) {
                // top level cannot be relative, skip it
                _path = _path.substring(3);
                continue;
            }

            _pos = _path.substring(0, _parent).lastIndexOf('/');
            if (_pos === -1) {
                _pos = _parent;
            }
            _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
        }

        // revert to relative
        if (_was_relative && this.is('relative')) {
            _path = _leadingParents + _path.substring(1);
        }

        _path = URI.recodePath(_path);
        this._parts.path = _path;
        this.build(!build);
        return this;
    };
    p.normalizePathname = p.normalizePath;
    p.normalizeQuery = function (build) {
        if (typeof this._parts.query === 'string') {
            if (!this._parts.query.length) {
                this._parts.query = null;
            } else {
                this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
            }

            this.build(!build);
        }

        return this;
    };
    p.normalizeFragment = function (build) {
        if (!this._parts.fragment) {
            this._parts.fragment = null;
            this.build(!build);
        }

        return this;
    };
    p.normalizeSearch = p.normalizeQuery;
    p.normalizeHash = p.normalizeFragment;

    p.iso8859 = function () {
        // expect unicode input, iso8859 output
        var e = URI.encode;
        var d = URI.decode;

        URI.encode = escape;
        URI.decode = decodeURIComponent;
        this.normalize();
        URI.encode = e;
        URI.decode = d;
        return this;
    };

    p.unicode = function () {
        // expect iso8859 input, unicode output
        var e = URI.encode;
        var d = URI.decode;

        URI.encode = strictEncodeURIComponent;
        URI.decode = unescape;
        this.normalize();
        URI.encode = e;
        URI.decode = d;
        return this;
    };

    p.readable = function () {
        var uri = this.clone();
        // removing username, password, because they shouldn't be displayed according to RFC 3986
        uri.username('').password('').normalize();
        var t = '';
        if (uri._parts.protocol) {
            t += uri._parts.protocol + '://';
        }

        if (uri._parts.hostname) {
            if (uri.is('punycode') && punycode) {
                t += punycode.toUnicode(uri._parts.hostname);
                if (uri._parts.port) {
                    t += ':' + uri._parts.port;
                }
            } else {
                t += uri.host();
            }
        }

        if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
            t += '/';
        }

        t += uri.path(true);
        if (uri._parts.query) {
            var q = '';
            for (var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++) {
                var kv = (qp[i] || '').split('=');
                q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace)
                  .replace(/&/g, '%26');

                if (kv[1] !== undefined) {
                    q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace)
                      .replace(/&/g, '%26');
                }
            }
            t += '?' + q.substring(1);
        }

        t += URI.decodeQuery(uri.hash(), true);
        return t;
    };

    // resolving relative and absolute URLs
    p.absoluteTo = function (base) {
        var resolved = this.clone();
        var properties = ['protocol', 'username', 'password', 'hostname', 'port'];
        var basedir, i, p;

        if (this._parts.urn) {
            throw new Error('URNs do not have any generally defined hierarchical components');
        }

        if (!(base instanceof URI)) {
            base = new URI(base);
        }

        if (!resolved._parts.protocol) {
            resolved._parts.protocol = base._parts.protocol;
        }

        if (this._parts.hostname) {
            return resolved;
        }

        for (i = 0; (p = properties[i]) ; i++) {
            resolved._parts[p] = base._parts[p];
        }

        if (!resolved._parts.path) {
            resolved._parts.path = base._parts.path;
            if (!resolved._parts.query) {
                resolved._parts.query = base._parts.query;
            }
        } else if (resolved._parts.path.substring(-2) === '..') {
            resolved._parts.path += '/';
        }

        if (resolved.path().charAt(0) !== '/') {
            basedir = base.directory();
            resolved._parts.path = (basedir ? (basedir + '/') : '') + resolved._parts.path;
            resolved.normalizePath();
        }

        resolved.build();
        return resolved;
    };
    p.relativeTo = function (base) {
        var relative = this.clone().normalize();
        var relativeParts, baseParts, common, relativePath, basePath;

        if (relative._parts.urn) {
            throw new Error('URNs do not have any generally defined hierarchical components');
        }

        base = new URI(base).normalize();
        relativeParts = relative._parts;
        baseParts = base._parts;
        relativePath = relative.path();
        basePath = base.path();

        if (relativePath.charAt(0) !== '/') {
            throw new Error('URI is already relative');
        }

        if (basePath.charAt(0) !== '/') {
            throw new Error('Cannot calculate a URI relative to another relative URI');
        }

        if (relativeParts.protocol === baseParts.protocol) {
            relativeParts.protocol = null;
        }

        if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
            return relative.build();
        }

        if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
            return relative.build();
        }

        if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
            relativeParts.hostname = null;
            relativeParts.port = null;
        } else {
            return relative.build();
        }

        if (relativePath === basePath) {
            relativeParts.path = '';
            return relative.build();
        }

        // determine common sub path
        common = URI.commonPath(relative.path(), base.path());

        // If the paths have nothing in common, return a relative URL with the absolute path.
        if (!common) {
            return relative.build();
        }

        var parents = baseParts.path
          .substring(common.length)
          .replace(/[^\/]*$/, '')
          .replace(/.*?\//g, '../');

        relativeParts.path = parents + relativeParts.path.substring(common.length);

        return relative.build();
    };

    // comparing URIs
    p.equals = function (uri) {
        var one = this.clone();
        var two = new URI(uri);
        var one_map = {};
        var two_map = {};
        var checked = {};
        var one_query, two_query, key;

        one.normalize();
        two.normalize();

        // exact match
        if (one.toString() === two.toString()) {
            return true;
        }

        // extract query string
        one_query = one.query();
        two_query = two.query();
        one.query('');
        two.query('');

        // definitely not equal if not even non-query parts match
        if (one.toString() !== two.toString()) {
            return false;
        }

        // query parameters have the same length, even if they're permuted
        if (one_query.length !== two_query.length) {
            return false;
        }

        one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
        two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);

        for (key in one_map) {
            if (hasOwn.call(one_map, key)) {
                if (!isArray(one_map[key])) {
                    if (one_map[key] !== two_map[key]) {
                        return false;
                    }
                } else if (!arraysEqual(one_map[key], two_map[key])) {
                    return false;
                }

                checked[key] = true;
            }
        }

        for (key in two_map) {
            if (hasOwn.call(two_map, key)) {
                if (!checked[key]) {
                    // two contains a parameter not present in one
                    return false;
                }
            }
        }

        return true;
    };

    // state
    p.duplicateQueryParameters = function (v) {
        this._parts.duplicateQueryParameters = !!v;
        return this;
    };

    p.escapeQuerySpace = function (v) {
        this._parts.escapeQuerySpace = !!v;
        return this;
    };

    return URI;
}));

/*!
 * URI.js - Mutating URLs
 * URI Template Support - http://tools.ietf.org/html/rfc6570
 *
 * Version: 1.13.1
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *   GPL v3 http://opensource.org/licenses/GPL-3.0
 *
 */
(function (root, factory) {
    'use strict';
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    if (typeof exports === 'object') {
        // Node
        module.exports = factory(require('./URI'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['./URI'], factory);
    } else {
        // Browser globals (root is window)
        root.URITemplate = factory(root.URI, root);
    }
}(this, function (URI, root) {
    'use strict';
    // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
    /*jshint camelcase: false */

    // save current URITemplate variable, if any
    var _URITemplate = root && root.URITemplate;

    var hasOwn = Object.prototype.hasOwnProperty;
    function URITemplate(expression) {
        // serve from cache where possible
        if (URITemplate._cache[expression]) {
            return URITemplate._cache[expression];
        }

        // Allow instantiation without the 'new' keyword
        if (!(this instanceof URITemplate)) {
            return new URITemplate(expression);
        }

        this.expression = expression;
        URITemplate._cache[expression] = this;
        return this;
    }

    function Data(data) {
        this.data = data;
        this.cache = {};
    }

    var p = URITemplate.prototype;
    // list of operators and their defined options
    var operators = {
        // Simple string expansion
        '': {
            prefix: '',
            separator: ',',
            named: false,
            empty_name_separator: false,
            encode: 'encode'
        },
        // Reserved character strings
        '+': {
            prefix: '',
            separator: ',',
            named: false,
            empty_name_separator: false,
            encode: 'encodeReserved'
        },
        // Fragment identifiers prefixed by '#'
        '#': {
            prefix: '#',
            separator: ',',
            named: false,
            empty_name_separator: false,
            encode: 'encodeReserved'
        },
        // Name labels or extensions prefixed by '.'
        '.': {
            prefix: '.',
            separator: '.',
            named: false,
            empty_name_separator: false,
            encode: 'encode'
        },
        // Path segments prefixed by '/'
        '/': {
            prefix: '/',
            separator: '/',
            named: false,
            empty_name_separator: false,
            encode: 'encode'
        },
        // Path parameter name or name=value pairs prefixed by ';'
        ';': {
            prefix: ';',
            separator: ';',
            named: true,
            empty_name_separator: false,
            encode: 'encode'
        },
        // Query component beginning with '?' and consisting
        // of name=value pairs separated by '&'; an
        '?': {
            prefix: '?',
            separator: '&',
            named: true,
            empty_name_separator: true,
            encode: 'encode'
        },
        // Continuation of query-style &name=value pairs
        // within a literal query component.
        '&': {
            prefix: '&',
            separator: '&',
            named: true,
            empty_name_separator: true,
            encode: 'encode'
        }

        // The operator characters equals ("="), comma (","), exclamation ("!"),
        // at sign ("@"), and pipe ("|") are reserved for future extensions.
    };

    // storage for already parsed templates
    URITemplate._cache = {};
    // pattern to identify expressions [operator, variable-list] in template
    URITemplate.EXPRESSION_PATTERN = /\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;
    // pattern to identify variables [name, explode, maxlength] in variable-list
    URITemplate.VARIABLE_PATTERN = /^([^*:]+)((\*)|:(\d+))?$/;
    // pattern to verify variable name integrity
    URITemplate.VARIABLE_NAME_PATTERN = /[^a-zA-Z0-9%_]/;

    // expand parsed expression (expression, not template!)
    URITemplate.expand = function (expression, data) {
        // container for defined options for the given operator
        var options = operators[expression.operator];
        // expansion type (include keys or not)
        var type = options.named ? 'Named' : 'Unnamed';
        // list of variables within the expression
        var variables = expression.variables;
        // result buffer for evaluating the expression
        var buffer = [];
        var d, variable, i;

        for (i = 0; (variable = variables[i]) ; i++) {
            // fetch simplified data source
            d = data.get(variable.name);
            if (!d.val.length) {
                if (d.type) {
                    // empty variables (empty string)
                    // still lead to a separator being appended!
                    buffer.push('');
                }
                // no data, no action
                continue;
            }

            // expand the given variable
            buffer.push(URITemplate['expand' + type](
              d,
              options,
              variable.explode,
              variable.explode && options.separator || ',',
              variable.maxlength,
              variable.name
            ));
        }

        if (buffer.length) {
            return options.prefix + buffer.join(options.separator);
        } else {
            // prefix is not prepended for empty expressions
            return '';
        }
    };
    // expand a named variable
    URITemplate.expandNamed = function (d, options, explode, separator, length, name) {
        // variable result buffer
        var result = '';
        var encode = options.encode;
        var empty_name_separator = options.empty_name_separator;
        // flag noting if values are already encoded
        var _encode = !d[encode].length;
        // key for named expansion
        var _name = d.type === 2 ? '' : URI[encode](name);
        var _value, i, l;

        // for each found value
        for (i = 0, l = d.val.length; i < l; i++) {
            if (length) {
                // maxlength must be determined before encoding can happen
                _value = URI[encode](d.val[i][1].substring(0, length));
                if (d.type === 2) {
                    // apply maxlength to keys of objects as well
                    _name = URI[encode](d.val[i][0].substring(0, length));
                }
            } else if (_encode) {
                // encode value
                _value = URI[encode](d.val[i][1]);
                if (d.type === 2) {
                    // encode name and cache encoded value
                    _name = URI[encode](d.val[i][0]);
                    d[encode].push([_name, _value]);
                } else {
                    // cache encoded value
                    d[encode].push([undefined, _value]);
                }
            } else {
                // values are already encoded and can be pulled from cache
                _value = d[encode][i][1];
                if (d.type === 2) {
                    _name = d[encode][i][0];
                }
            }

            if (result) {
                // unless we're the first value, prepend the separator
                result += separator;
            }

            if (!explode) {
                if (!i) {
                    // first element, so prepend variable name
                    result += URI[encode](name) + (empty_name_separator || _value ? '=' : '');
                }

                if (d.type === 2) {
                    // without explode-modifier, keys of objects are returned comma-separated
                    result += _name + ',';
                }

                result += _value;
            } else {
                // only add the = if it is either default (?&) or there actually is a value (;)
                result += _name + (empty_name_separator || _value ? '=' : '') + _value;
            }
        }

        return result;
    };
    // expand an unnamed variable
    URITemplate.expandUnnamed = function (d, options, explode, separator, length) {
        // variable result buffer
        var result = '';
        var encode = options.encode;
        var empty_name_separator = options.empty_name_separator;
        // flag noting if values are already encoded
        var _encode = !d[encode].length;
        var _name, _value, i, l;

        // for each found value
        for (i = 0, l = d.val.length; i < l; i++) {
            if (length) {
                // maxlength must be determined before encoding can happen
                _value = URI[encode](d.val[i][1].substring(0, length));
            } else if (_encode) {
                // encode and cache value
                _value = URI[encode](d.val[i][1]);
                d[encode].push([
                  d.type === 2 ? URI[encode](d.val[i][0]) : undefined,
                  _value
                ]);
            } else {
                // value already encoded, pull from cache
                _value = d[encode][i][1];
            }

            if (result) {
                // unless we're the first value, prepend the separator
                result += separator;
            }

            if (d.type === 2) {
                if (length) {
                    // maxlength also applies to keys of objects
                    _name = URI[encode](d.val[i][0].substring(0, length));
                } else {
                    // at this point the name must already be encoded
                    _name = d[encode][i][0];
                }

                result += _name;
                if (explode) {
                    // explode-modifier separates name and value by "="
                    result += (empty_name_separator || _value ? '=' : '');
                } else {
                    // no explode-modifier separates name and value by ","
                    result += ',';
                }
            }

            result += _value;
        }

        return result;
    };

    URITemplate.noConflict = function () {
        if (root.URITemplate === URITemplate) {
            root.URITemplate = _URITemplate;
        }

        return URITemplate;
    };

    // expand template through given data map
    p.expand = function (data) {
        var result = '';

        if (!this.parts || !this.parts.length) {
            // lazilyy parse the template
            this.parse();
        }

        if (!(data instanceof Data)) {
            // make given data available through the
            // optimized data handling thingie
            data = new Data(data);
        }

        for (var i = 0, l = this.parts.length; i < l; i++) {
            /*jshint laxbreak: true */
            result += typeof this.parts[i] === 'string'
              // literal string
              ? this.parts[i]
              // expression
              : URITemplate.expand(this.parts[i], data);
            /*jshint laxbreak: false */
        }

        return result;
    };
    // parse template into action tokens
    p.parse = function () {
        var expression = this.expression;
        var ePattern = URITemplate.EXPRESSION_PATTERN;
        var vPattern = URITemplate.VARIABLE_PATTERN;
        var nPattern = URITemplate.VARIABLE_NAME_PATTERN;
        // token result buffer
        var parts = [];
        // position within source template
        var pos = 0;
        var variables, eMatch, vMatch;

        // RegExp is shared accross all templates,
        // which requires a manual reset
        ePattern.lastIndex = 0;
        // I don't like while(foo = bar()) loops,
        // to make things simpler I go while(true) and break when required
        while (true) {
            eMatch = ePattern.exec(expression);
            if (eMatch === null) {
                // push trailing literal
                parts.push(expression.substring(pos));
                break;
            } else {
                // push leading literal
                parts.push(expression.substring(pos, eMatch.index));
                pos = eMatch.index + eMatch[0].length;
            }

            if (!operators[eMatch[1]]) {
                throw new Error('Unknown Operator "' + eMatch[1] + '" in "' + eMatch[0] + '"');
            } else if (!eMatch[3]) {
                throw new Error('Unclosed Expression "' + eMatch[0] + '"');
            }

            // parse variable-list
            variables = eMatch[2].split(',');
            for (var i = 0, l = variables.length; i < l; i++) {
                vMatch = variables[i].match(vPattern);
                if (vMatch === null) {
                    throw new Error('Invalid Variable "' + variables[i] + '" in "' + eMatch[0] + '"');
                } else if (vMatch[1].match(nPattern)) {
                    throw new Error('Invalid Variable Name "' + vMatch[1] + '" in "' + eMatch[0] + '"');
                }

                variables[i] = {
                    name: vMatch[1],
                    explode: !!vMatch[3],
                    maxlength: vMatch[4] && parseInt(vMatch[4], 10)
                };
            }

            if (!variables.length) {
                throw new Error('Expression Missing Variable(s) "' + eMatch[0] + '"');
            }

            parts.push({
                expression: eMatch[0],
                operator: eMatch[1],
                variables: variables
            });
        }

        if (!parts.length) {
            // template doesn't contain any expressions
            // so it is a simple literal string
            // this probably should fire a warning or something?
            parts.push(expression);
        }

        this.parts = parts;
        return this;
    };

    // simplify data structures
    Data.prototype.get = function (key) {
        var data = this.data;
        // cache for processed data-point
        var d = {
            // type of data 0: undefined/null, 1: string, 2: object, 3: array
            type: 0,
            // original values (except undefined/null)
            val: [],
            // cache for encoded values (only for non-maxlength expansion)
            encode: [],
            encodeReserved: []
        };
        var i, l, value;

        if (this.cache[key] !== undefined) {
            // we've already processed this key
            return this.cache[key];
        }

        this.cache[key] = d;

        if (String(Object.prototype.toString.call(data)) === '[object Function]') {
            // data itself is a callback (global callback)
            value = data(key);
        } else if (String(Object.prototype.toString.call(data[key])) === '[object Function]') {
            // data is a map of callbacks (local callback)
            value = data[key](key);
        } else {
            // data is a map of data
            value = data[key];
        }

        // generalize input into [ [name1, value1], [name2, value2], … ]
        // so expansion has to deal with a single data structure only
        if (value === undefined || value === null) {
            // undefined and null values are to be ignored completely
            return d;
        } else if (String(Object.prototype.toString.call(value)) === '[object Array]') {
            for (i = 0, l = value.length; i < l; i++) {
                if (value[i] !== undefined && value[i] !== null) {
                    // arrays don't have names
                    d.val.push([undefined, String(value[i])]);
                }
            }

            if (d.val.length) {
                // only treat non-empty arrays as arrays
                d.type = 3; // array
            }
        } else if (String(Object.prototype.toString.call(value)) === '[object Object]') {
            for (i in value) {
                if (hasOwn.call(value, i) && value[i] !== undefined && value[i] !== null) {
                    // objects have keys, remember them for named expansion
                    d.val.push([i, String(value[i])]);
                }
            }

            if (d.val.length) {
                // only treat non-empty objects as objects
                d.type = 2; // object
            }
        } else {
            d.type = 1; // primitive string (could've been string, number, boolean and objects with a toString())
            // arrays don't have names
            d.val.push([undefined, String(value)]);
        }

        return d;
    };

    // hook into URI for fluid access
    URI.expand = function (expression, data) {
        var template = new URITemplate(expression);
        var expansion = template.expand(data);

        return new URI(expansion);
    };

    return URITemplate;
}));


// ~/scripts/jquery/plugins/cookie.jquery.js
if(window.jQuery && !window.jQuery.cookie){

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', value, expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

};

// ~/scripts/jquery/plugins/blockui/2.66.0/jquery.blockui.js
/*
* jQuery BlockUI; v20131009
* http://jquery.malsup.com/block/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
*/
(function(){"use strict";function e(e){function o(o,i){var s,h,k=o==window,v=i&&void 0!==i.message?i.message:void 0;if(i=e.extend({},e.blockUI.defaults,i||{}),!i.ignoreIfBlocked||!e(o).data("blockUI.isBlocked")){if(i.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,i.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,i.css||{}),i.onOverlayClick&&(i.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,i.themedCSS||{}),v=void 0===v?i.message:v,k&&b&&t(window,{fadeOut:0}),v&&"string"!=typeof v&&(v.parentNode||v.jquery)){var y=v.jquery?v[0]:v,m={};e(o).data("blockUI.history",m),m.el=y,m.parent=y.parentNode,m.display=y.style.display,m.position=y.style.position,m.parent&&m.parent.removeChild(y)}e(o).data("blockUI.onUnblock",i.onUnblock);var g,I,w,U,x=i.baseZ;g=r||i.forceIframe?e('<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+i.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),I=i.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),i.theme&&k?(U='<div class="blockUI '+i.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):i.theme?(U='<div class="blockUI '+i.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',i.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(i.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+i.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+i.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),v&&(i.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),i.theme||I.css(i.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||i.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=k?e("body"):e(o);e.each(C,function(){this.appendTo(S)}),i.theme&&i.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:o).length>0);if(u||O){if(k&&i.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(o,"borderTopWidth"),T=d(o,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,o){var t=o[0].style;if(t.position="absolute",2>e)k?t.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+i.quirksmodeOffsetHack+') + "px"'):t.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?t.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):t.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&t.setExpression("left",B),M&&t.setExpression("top",M);else if(i.centerY)k&&t.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),t.marginTop=0;else if(!i.centerY&&k){var n=i.css&&i.css.top?parseInt(i.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+n+') + "px"';t.setExpression("top",s)}})}if(v&&(i.theme?w.find(".ui-widget-content").append(v):w.append(v),(v.jquery||v.nodeType)&&e(v).show()),(r||i.forceIframe)&&i.showOverlay&&g.show(),i.fadeIn){var j=i.onBlock?i.onBlock:c,H=i.showOverlay&&!v?j:c,z=v?j:c;i.showOverlay&&I._fadeIn(i.fadeIn,H),v&&w._fadeIn(i.fadeIn,z)}else i.showOverlay&&I.show(),v&&w.show(),i.onBlock&&i.onBlock();if(n(1,o,i),k?(b=w[0],p=e(i.focusableElements,b),i.focusInput&&setTimeout(l,20)):a(w[0],i.centerX,i.centerY),i.timeout){var W=setTimeout(function(){k?e.unblockUI(i):e(o).unblock(i)},i.timeout);e(o).data("blockUI.timeout",W)}}}function t(o,t){var s,l=o==window,a=e(o),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),t=e.extend({},e.blockUI.defaults,t||{}),n(0,o,t),null===t.onUnblock&&(t.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),t.cursorReset&&(r.length>1&&(r[1].style.cursor=t.cursorReset),r.length>2&&(r[2].style.cursor=t.cursorReset)),l&&(b=p=null),t.fadeOut?(s=r.length,r.stop().fadeOut(t.fadeOut,function(){0===--s&&i(r,d,t,o)})):i(r,d,t,o)}function i(o,t,i,n){var s=e(n);if(!s.data("blockUI.isBlocked")){o.each(function(){this.parentNode&&this.parentNode.removeChild(this)}),t&&t.el&&(t.el.style.display=t.display,t.el.style.position=t.position,t.parent&&t.parent.appendChild(t.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof i.onUnblock&&i.onUnblock(n,i);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function n(o,t,i){var n=t==window,l=e(t);if((o||(!n||b)&&(n||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",o),n&&i.bindEvents&&(!o||i.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";o?e(document).bind(a,i,s):e(document).unbind(a,s)}}function s(o){if("keydown"===o.type&&o.keyCode&&9==o.keyCode&&b&&o.data.constrainTabKey){var t=p,i=!o.shiftKey&&o.target===t[t.length-1],n=o.shiftKey&&o.target===t[0];if(i||n)return setTimeout(function(){l(n)},10),!1}var s=o.data,a=e(o.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(o),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(p){var o=p[e===!0?p.length-1:0];o&&o.focus()}}function a(e,o,t){var i=e.parentNode,n=e.style,s=(i.offsetWidth-e.offsetWidth)/2-d(i,"borderLeftWidth"),l=(i.offsetHeight-e.offsetHeight)/2-d(i,"borderTopWidth");o&&(n.left=s>0?s+"px":"0"),t&&(n.top=l>0?l+"px":"0")}function d(o,t){return parseInt(e.css(o,t),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent);document.documentMode||0;var f=e.isFunction(document.createElement("div").style.setExpression);e.blockUI=function(e){o(window,e)},e.unblockUI=function(e){t(window,e)},e.growlUI=function(o,t,i,n){var s=e('<div class="growlUI"></div>');o&&s.append("<h1>"+o+"</h1>"),t&&s.append("<h2>"+t+"</h2>"),void 0===i&&(i=3e3);var l=function(o){o=o||{},e.blockUI({message:s,fadeIn:o.fadeIn!==void 0?o.fadeIn:700,fadeOut:o.fadeOut!==void 0?o.fadeOut:1e3,timeout:o.timeout!==void 0?o.timeout:i,centerY:!1,showOverlay:!1,onUnblock:n,css:e.blockUI.defaults.growlCSS})};l(),s.css("opacity"),s.mouseover(function(){l({fadeIn:0,timeout:3e4});var o=e(".blockMsg");o.stop(),o.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),this;var i=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var o=e(this);i.ignoreIfBlocked&&o.data("blockUI.isBlocked")||o.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,o(this,t)})},e.fn.unblock=function(o){return this[0]===window?(e.unblockUI(o),this):this.each(function(){t(this,o)})},e.blockUI.version=2.66,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var b=null,p=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)})();

// ~/scripts/jquery/plugins/simplemodal/1.4.4/jquery.simplemodal.js
/*
 * SimpleModal 1.4.4 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2013 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sun, Jan 20 2013 15:58:56 -0800
 */
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){var j=[],n=b(document),k=navigator.userAgent.toLowerCase(),l=b(window),g=[],o=null,p=/msie/.test(k)&&!/opera/.test(k),q=/opera/.test(k),m,r;m=p&&/msie 6./.test(k)&&"object"!==typeof window.XMLHttpRequest;r=p&&/msie 7.0/.test(k);b.modal=function(a,h){return b.modal.impl.init(a,h)};b.modal.close=function(){b.modal.impl.close()};b.modal.focus=function(a){b.modal.impl.focus(a)};b.modal.setContainerDimensions=
function(){b.modal.impl.setContainerDimensions()};b.modal.setPosition=function(){b.modal.impl.setPosition()};b.modal.update=function(a,h){b.modal.impl.update(a,h)};b.fn.modal=function(a){return b.modal.impl.init(this,a)};b.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,
close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.modal.impl={d:{},init:function(a,h){if(this.d.data)return!1;o=p&&!b.support.boxModel;this.o=b.extend({},b.modal.defaults,h);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof b?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id",
"simplemodal-placeholder").css({display:"none"})),this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&m)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:g[0],width:g[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(m||o)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});n.bind("keydown.simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});l.bind("resize.simplemodal orientationchange.simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();m||o?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:g[0],width:g[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.simplemodal");n.unbind("keydown.simplemodal");l.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,e){if(e){var f=e[0].style;f.position="absolute";if(2>b)f.removeExpression("height"),f.removeExpression("width"),f.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),f.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,d;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):e.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(d="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),d=-1===d.indexOf("%")?d+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(d.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
d='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');f.removeExpression("top");f.removeExpression("left");f.setExpression("top",c);f.setExpression("left",d)}}})},focus:function(a){var h=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",e=b(":input:enabled:visible:"+a,h.d.wrap);setTimeout(function(){0<e.length?e.focus():h.d.wrap.focus()},
10)},getDimensions:function(){var a="undefined"===typeof window.innerHeight?l.height():window.innerHeight;j=[n.height(),n.width()];g=[a,l.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?g[0]:g[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",
b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=m||r,b=this.d.origHeight?this.d.origHeight:q?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:q?this.d.container.width():this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),e=this.d.data.outerHeight(!0),f=
this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||b;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,d=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<g[0]?c:g[0],d=d&&d<g[1]?d:g[1],i=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",b=b?this.o.autoResize&&b>c?c:b<i?i:b:e?e>c?c:this.o.minHeight&&"auto"!==i&&e<i?i:e:i,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>d?d:a<c?c:a:f?
f>d?d:this.o.minWidth&&"auto"!==c&&f<c?c:f:c;this.d.container.css({height:b,width:a});this.d.wrap.css({overflow:e>b||f>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=g[0]/2-this.d.container.outerHeight(!0)/2;b=g[1]/2-this.d.container.outerWidth(!0)/2;var e="fixed"!==this.d.container.css("position")?l.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(a=e+(this.o.position[0]||a),b=this.o.position[1]||b):
a=e+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?
this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();
this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}});


// ~/scripts/Common/imodules_common_1_0_2.js
//**PUT EVERYTHING AFTER THIS IF STATEMENT**
if (window.imodules_common_loaded == null) { //Load first time only
    window.imodules_common_loaded = true;

    // disable writing to the console if we're not in firefox
    if (typeof console === "undefined") {
	    console = { log: function() {}, warn: function() {}, error: function() {} };
    }
	
	//ie has an incomplete console object so we check here.
    var consoleFunctions = ["log", "error", "warn", "debug", "info"];
	
	function checkConsoleFunction(consoleFunction)
	{
		if (!console[consoleFunction]) {
			console[consoleFunction] = function() {};
		}
	}

	consoleFunctions.forEach(function(consoleFunction) {
		checkConsoleFunction(consoleFunction);
	});

    window.loaded = false;

    if (!window.imod) var imod = {};
    if (!imod.logger) imod.logger = {};

    if (typeof (Page_Validators) === "undefined") {
    	window.Page_Validators = [];
    }

    imod.logger.LogToService = function (logLevel, message, url, lineNumber) {
        var currentUrl = new URI(window.location);
        var qsParams = currentUrl.query(true);
        var siteId = qsParams.sid;
        if (IModController.siteId) {
            siteId = IModController.siteId;
        }
        if (!siteId) {
            return;
        }

        var logData = Sys.Serialization.JavaScriptSerializer.serialize({
            "message": message,
            "lineNumber": lineNumber ? lineNumber : '',
            "url": '' + window.location + ''
        });
        var logControllerUrl = "/apiservices/system/JsLog/" + logLevel;

        jQuery.ajax({
            type: "POST",
            headers: { SiteInfoId: IModController.siteId, GroupId: IModController.groupId },
            url: logControllerUrl,
            data: logData,
            contentType: "application/json; charset=utf-8"
        });

    };

    if (Function.prototype.bind) {
        imod.log = Function.prototype.bind.call(console.log, console);
        imod.warn = Function.prototype.bind.call(console.warn, console);
        imod.error = Function.prototype.bind.call(console.error, console);
        imod.debug = Function.prototype.bind.call(console.debug, console);
        imod.info = Function.prototype.bind.call(console.info, console);
    }
    else {
        imod.log = function () {
            Function.prototype.apply.call(console.log, console, arguments);
        };
        imod.warn = function () {
            Function.prototype.apply.call(console.warn, console, arguments);
        };
        imod.error = function () {
            Function.prototype.apply.call(console.error, console, arguments);
        };
        imod.debug = function () {
	        Function.prototype.apply.call(console.debug, console, arguments);
        };
        imod.info = function () {
	        Function.prototype.apply.call(console.info, console, arguments);
	    };
    }
	
    if (!window.IModController) window.IModController = {};
    if (!imod.Fancy) imod.Fancy = {};
    if (!imod.Fancy.Handlers) imod.Fancy.Handlers = {};
    if (!imod.dom) imod.dom = {}; //DOM manipulation
    if (!imod.Security) imod.Security = {};

    IModController.loadedScripts = new Array;
    IModController.debug = false;
    IModController.isCmsMenuShown = false;

    IModController.PageRequestManagerEndRequestHandler = function (sender, args) {
        if (args.get_error() != undefined) {
            if (args.get_response().get_statusCode() == '0') {
                args.set_errorHandled(true);
            }
        }
    };

    // the init call is setup server side in the BasePage.cs OnPreRender.
    // If debug == false then do not show console log messages
    IModController.init = function (siteId, groupId, groupName, groupChain, memberId, debug, siteHasSFTP) {
        IModController.siteId = siteId;
        IModController.groupId = groupId;
        IModController.groupName = groupName;
        IModController.groupChain = groupChain;
        IModController.memberId = memberId;
        IModController.debug = debug;
        IModController.fancyInitialized = false;
        IModController.helpSettings = null;
        IModController.siteHasSFTP = siteHasSFTP;

        if (!IModController.debug) {
            //console = { log: function () { } };
        }

        Sys.WebForms.PageRequestManager.getInstance().add_endRequest(IModController.PageRequestManagerEndRequestHandler);
    };

    IModController.scriptLoadedNotification = function (scriptName) {
        imod.log(scriptName);
    };

    imod.Browser = {}; //browser related stuff like size, cookies, querystring
    imod.Browser.Request = {};
    imod.Form = {};
    imod.Form.Controls = [];
    imod.Element = {};
    imod.General = {};
    imod.RolloutFlags = {};

    imod.WindowUtilities = imod.WindowUtilities || {};
    imod.WindowUtilities.RefreshParentPage = function () {
        if (window.opener === undefined || window.opener === null) {
            return;
        }

        window.opener.location.reload();
    };

    imod.WindowUtilities.CloseAndRefreshParentPage = function () {
        if (window.opener === undefined || window.opener === null) {
            return;
        }

        imod.WindowUtilities.RefreshParentPage();
        window.close();
    };

    imod.WindowUtilities.Close = function () {
        if (window.opener === undefined || window.opener === null) {
            return;
        }
        window.close();
    };

    IModController.diagnostic = {};

    IModController.diagnostic.overrideRolloutFlag = function (rolloutFlagName, rolloutFlagValue) {
        imod.log(rolloutFlagName);

        var currentUrl = new URI(window.location);
        if (currentUrl.hasQuery(rolloutFlagName) === true) {
            window.location = new URI(window.location).removeQuery(rolloutFlagName).toString();
        } else {
            window.location = new URI(window.location).addQuery(rolloutFlagName, rolloutFlagValue).toString();
        }
    };

    IModController.debugWidgetSettings = { "Position": "TopLeft", "ActiveTabName": "Utilities", "DisplayMode": "Collapsed", "VisibleOnLoad": true, "SelectedTabs": ["Utilities"] };

   
    IModController.navigateToCacheDiagnostics = function () {
        document.location = "/admin/cachediagnostics.aspx?sid=" + IModController.siteId + "&gid=" + IModController.groupId;
    };

    IModController.removeCacheItem = function(cacheKey, region) {
        var siteId = IModController.siteId;
        var groupId = IModController.groupId;

        if (typeof region === 'undefined') region = siteId;
        
        var url = "/apiservices/system/cache/level/2/remove/" + cacheKey + "/" + region + "?sid=" + siteId + "&gid=" + groupId;

        jQuery.ajax({
            url: url,
            method: 'DELETE'
        })
        .done(function () {
            window.alert('Cache clear complete for key ' + cacheKey);
            location.reload();
        })
        .fail(function (err) {
            window.alert('Cache clear failed for key ' + cacheKey);
        });

    };

	IModController.removeSiteCache = function () {
		var siteId = IModController.siteId;
        var groupId = IModController.groupId;

        
		var url = "/apiservices/system/cache/level/2/removesite/" + siteId + "?sid=" + siteId + "&gid=" + groupId;

		return jQuery.ajax({
				url: url,
				method: 'DELETE'
			})
			.done(function () {
                window.alert('Site cache clear complete');
			});
	};

	IModController.navigateToImageManagerSandbox = function () {
        document.location = "/admin/ImageManagerSandbox.aspx?sid=" + IModController.siteId + "&gid=" + IModController.groupId;
	};

    IModController.navigateToCreateNewMember = function (navigateUrl, cid) {
	    var siteId = IModController.siteId;
	    var groupId = IModController.groupId;

	    var url = "/apiservices/member/session/dataentrymode/" + cid + "/?sid=" + siteId + "&gid=" + groupId;

	    jQuery.ajax({
			    url: url,
			    method: 'POST'
		    })
		    .done(function () {
				location.href = navigateUrl;
		    })
		    .fail(function (err) {
			    if (window.console) console.log('Call to set data entry mode failed: ' + err);
			    location.href = navigateUrl;
		    });
    };

    imod.cookie = function (name, value, options) {
        if (typeof value != 'undefined') { // name and value given, set cookie
            options = options || {};
            if (value === null) {
                value = '';
                options.expires = -1;
            }
            var expires = '';
            if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                var date;
                if (typeof options.expires == 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                } else {
                    date = options.expires;
                }
                expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
            }
            // CAUTION: Needed to parenthesize options.path and options.domain
            // in the following expressions, otherwise they evaluate to undefined
            // in the packed version for some reason...
            var path = options.path ? '; path=' + (options.path) : '';
            var domain = options.domain ? '; domain=' + (options.domain) : '';
            var secure = options.secure ? '; secure' : '';
            document.cookie = [name, '=', value, expires, path, domain, secure].join('');
        } else { // only name given, get cookie
            var cookieValue = null;
            if (document.cookie && document.cookie != '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) == (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        }
    };

    if (!imod.JqueryAjax) imod.JqueryAjax = {};

    imod.JqueryAjax.JsonPost = function (options) {
        var jQueryVersion = jQuery().jquery;
        var isAsync = true;

        if (options.hasOwnProperty("isAsync") && options.isAsync !== null) {
            isAsync = options.isAsync;
        }

        if (jQueryVersion === "1.2.6") {
            if (window.console) console.log("imod.JqueryAjax.JsonPost jQueryVersion:" + jQueryVersion);

            return jQuery.ajax({
                type: "POST",
                headers: { SiteInfoId: IModController.siteId, GroupId: IModController.groupId },
                async: isAsync,
                contentType: "application/json",
                url: options.url,
                data: options.data,
                dataFilter: function (response) {
                    // This boils the response string down into a proper JavaScript Object().
                    var result = eval("(" + response + ")");
                    // If the response has a ".d" top-level property, return what's below that instead.
                    if (result.hasOwnProperty("d"))
                        return result.d;
                    else
                        return result;
                },
                success: options.success,
                error: options.error,
                complete: options.complete
            });
        }

        return jQuery.ajax({
                type: "POST",
                headers: { SiteInfoId: IModController.siteId, GroupId: IModController.groupId },
                async: isAsync,
                contentType: "application/json",
                url: options.url,
                data: options.data,
                converters: {
                    "text json": function (response) {
                        var result = Sys.Serialization.JavaScriptSerializer.deserialize(response);
                        return result.hasOwnProperty('d') ? result.d : result;
                    }
                },
                success: options.success,
                error: options.error,
                complete: options.complete
            });
    };
    imod.JqueryAjax.JsonGet = function (options) {
        var isAsync = true;
        var crossDomain = false;
        var dataType = 'json';
        var headers = { SiteInfoId: IModController.siteId, GroupId: IModController.groupId };

        if (options.hasOwnProperty("isAsync") && options.isAsync !== null) {
            isAsync = options.isAsync;
        }

        if (options.hasOwnProperty('headers') && options.headers !== null) {
        	headers = options.headers;
        }

        if (options.hasOwnProperty('dataType') && options.dataType !== null) {
            dataType = options.dataType;
        }

        if (options.hasOwnProperty("crossDomain") && options.crossDomain !== null) {
            crossDomain = options.crossDomain;
        }

        return jQuery.ajax({
            type: "GET",
            headers: headers,
            async: isAsync,
            crossDomain: crossDomain,
            contentType: "application/json",
            url: options.url,
            data: options.data,
            dataType: dataType,
            converters: {
                "text json": function (response) {
                    var result = Sys.Serialization.JavaScriptSerializer.deserialize(response);
                    return result.hasOwnProperty("d") ? result.d : result;
                }
            },
            success: options.success,
            error: options.error,
            complete: options.complete
        });
    };

    /**
		*	Events. Pub/Sub system for Loosely Coupled logic.
		*	Based on Peter Higgins' port from Dojo to jQuery
		*	https://github.com/phiggins42/bloody-jquery-plugins/blob/master/pubsub.js
		*
		*	Re-adapted to vanilla Javascript
		*
		*	@class Events
	*/
    imod.Events = (function () {
        var cache = {},
		/**
		*	Events.publish
		*	e.g.: Events.publish("/Article/added", [article], this);
		*
		*	@class Events
		*	@method publish
		*	@param topic {String}
		*	@param args	{Array}
		*	@param scope {Object} Optional
		*/
		publish = function (topic, args, scope) {
		    if (cache[topic]) {
		        var thisTopic = cache[topic],
				i = thisTopic.length - 1;

		        for (i; i >= 0; i -= 1) {
		            thisTopic[i].apply(scope || this, args || []);
		        }
		    }
		},
		/**
		*	Events.subscribe
		*	e.g.: Events.subscribe("/Article/added", Articles.validate)
		*
		*	@class Events
		*	@method subscribe
		*	@param topic {String}
		*	@param callback {Function}
		*	@return Event handler {Array}
		*/
		subscribe = function (topic, callback) {
		    if (!cache[topic]) {
		        cache[topic] = [];
		    }
		    cache[topic].push(callback);
		    return [topic, callback];
		},
		/**
		*	Events.unsubscribe
		*	e.g.: var handle = Events.subscribe("/Article/added", Articles.validate);
		*		Events.unsubscribe(handle);
		*
		*	@class Events
		*	@method unsubscribe
		*	@param handle {Array}
		*	@param completly {Boolean}
		*	@return {type description }
		*/
		unsubscribe = function (handle, completly) {
		    var t = handle[0],
			i = cache[t].length - 1;

		    if (cache[t]) {
		        for (i; i >= 0; i -= 1) {
		            if (cache[t][i] === handle[1]) {
		                cache[t].splice(cache[t][i], 1);
		                if (completly) { delete cache[t]; }
		            }
		        }
		    }
		};

        return {
            publish: publish,
            subscribe: subscribe,
            unsubscribe: unsubscribe
        };
    }());

    if (!imod.Security) imod.Security = {};

    imod.Security.Logout = function () {

        var ajaxPostOptions = {

            url: "/controls/login/AuthenticationService.asmx/Logout",
            data: Sys.Serialization.JavaScriptSerializer.serialize({ "sid": imod.Security.SiteId, "gid": imod.Security.GroupId }),
            success: function (result) {

                if (window.console) console.log(result.ReturnUrl);

                if (window.parent) {
                    window.parent.location = result.ReturnUrl;
                }
                else {
                    window.location = result.ReturnUrl;
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus !== null) {
                    alert("error: " + textStatus);
                } else if (errorThrown !== null) {
                    alert("exception: " + errorThrown.message);
                }
                else {
                    alert("error");
                }
            }
        };
        imod.JqueryAjax.JsonPost(ajaxPostOptions);
    };

    imod.Security.Logon = function (username, password, isImodEmployee, successMethod) {
        var serviceUrl = imod.Security.LoginDomain + "/controls/login/AuthenticationService.asmx/Logon";
        serviceUrl += isImodEmployee ? "?lmode=esk" : "?lmode=user";

        var postData = { "sid": imod.Security.SiteId, "gid": imod.Security.GroupId, "username": username, "password": password, "isImodEmployee": isImodEmployee };
        var ajaxOptions = {
            url: serviceUrl,
            crossDomain: true,
            dataType: "jsonp",
            data: postData,
            success: function (result) {
                if (successMethod) {
                    imod.log('AuthenticationService Logon:' + result.Success);
                    successMethod(result);
                }

                if (!result.Success) {
                    imod.log(result.ErrorMessage);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus !== null && textStatus.length > 0) {
                    imod.log("error: " + textStatus);
                } else if (errorThrown !== null) {
                    imod.log("exception: " + errorThrown.message);
                } else {
                    imod.log("error");
                }
            }
        };

        imod.JqueryAjax.JsonGet(ajaxOptions);
    };

    imod.Security.ContinueSession = function (successMethod) {
        var serviceUrl = imod.Security.LoginDomain + "/controls/login/AuthenticationService.asmx/ContinueSession";
        var postData = { "sid": imod.Security.SiteId, "gid": imod.Security.GroupId };
        var ajaxOptions = {
            url: serviceUrl,
            crossDomain: true,
            dataType: "jsonp",
            data: postData,
            success: function (result) {
                if (successMethod) {
                    imod.log('AuthenticationService ContinueSession:' + result.Success);
                    successMethod(result);
                }

                if (!result.Success) {
                    imod.log('AuthenticationService ContinueSession:' + result.ErrorMessage);
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus !== null && textStatus.length > 0) {
                    imod.log("error: " + textStatus);
                } else if (errorThrown !== null) {
                    imod.log("exception: " + errorThrown.message);
                } else {
                    imod.log("error");
                }
            }
        };

        imod.JqueryAjax.JsonGet(ajaxOptions);
    };

    imod.Security.UpdateMemberSessionTableEntry = function (logoutUrl, authenticationTicket) {

        if (window.console) console.log('authenticationTicket:' + authenticationTicket);
        if (window.console) console.log('imod.Security.AuthenticationTimeoutInSeconds:' + imod.Security.AuthenticationTimeoutInSeconds);

        var ajaxPostOptions = {
            url: "/controls/login/AuthenticationService.asmx/UpdateMemberSessionTableEntry",
            data: Sys.Serialization.JavaScriptSerializer.serialize({ "authenticationTicket": authenticationTicket }),
            success: function (result) {

                if (window.console) console.log(result);

            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus !== null) {
                    alert("error: " + textStatus);
                } else if (errorThrown !== null) {
                    alert("exception: " + errorThrown.message);
                } else {
                    alert("error");
                }
            }
        };

        imod.JqueryAjax.JsonPost(ajaxPostOptions);
    };

    imod.Security.GetRemainingSecondsBeforeSessionEnds = function (successMethod) {

        var serviceUrl = imod.Security.LoginDomain + "/controls/login/AuthenticationService.asmx/GetRemainingSecondsBeforeSessionEnds";
        var postData = { 'sid': IModController.siteId, 'gid': IModController.groupId };
        var ajaxOptions = {
            url: serviceUrl,
            crossDomain: true,
            dataType: "jsonp",
            data: postData,
            success: function (result) {
                if (successMethod) {
                    successMethod(result.AuthenticationTimeoutInSeconds);
                }
                else {

                    if (!result.Success) {
                        imod.log('member session has expired.');
                    }
                    else {
                        imod.log('member session expires in ' + result.AuthenticationTimeoutInSeconds + ' seconds.');
                    }
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus != null) {
                    imod.log("error: " + textStatus);
                } else if (errorThrown != null) {
                    imod.log("exception: " + errorThrown.message);
                }
                else {
                    imod.log("error");
                }
            }
        };
        imod.JqueryAjax.JsonGet(ajaxOptions);
    };

    if (!imod.SessionData) imod.SessionData = {};
    if (!imod.SessionData.Data) imod.SessionData.Data = {};

    imod.SessionData.SiteViewModeEnum = {
        UseFullSiteTemplate: { value: "0", name: "UseFullSiteTemplate" },
        UseDeviceSpecificTemplate: { value: "1", name: "UseDeviceSpecificTemplate" }
    };

    imod.SessionData.SetSiteViewMode = function (siteViewMode) {

        imod.log('imod.SessionData.SetSiteViewMode:' + siteViewMode);
        imod.SessionData.Data.SiteViewMode = siteViewMode;

        var postData = Sys.Serialization.JavaScriptSerializer.serialize({ 'sessionData': imod.SessionData.Data });

        var ajaxPostOptions = {
            url: "/ApiServices/Personalization.asmx/SaveSessionData",
            data: postData,
            success: function (result) {
                if (result.Success) {
                    imod.log('SaveSessionData Success.');
                    location.reload();

                } else {
                    imod.log('SaveSessionData Failed.');
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus != null) {
                    imod.log("error: " + textStatus);
                } else if (errorThrown != null) {
                    imod.log("exception: " + errorThrown.message);
                } else {
                    imod.log("error");
                }
            }
        };
        imod.JqueryAjax.JsonPost(ajaxPostOptions);

    };

    imod.Form.SelectText = function (oPrmContainer, sPrmTextProperty) {
        if (oPrmContainer.setSelectionRange != null) {
            oPrmContainer.setSelectionRange(0, oPrmContainer[sPrmTextProperty].length);
        }
        else if (oPrmContainer.createTextRange != null) {
            var oRange = oPrmContainer.createTextRange();
            oRange.moveStart("character", 0);
            oRange.moveEnd("character", oPrmContainer[sPrmTextProperty].length);
            oRange.select();
        }
        else {
            alert("Element does not support selecting text");
        }
    };
    imod.Browser.ScreenWidth = function () {
        return screen.availWidth;
    };
    imod.Browser.ScreenHeight = function () {
        return screen.availHeight;
    };
    imod.Browser.ParseQuerystring = function (queryString) {
        var qs = {};
        var s = queryString || window.location.search.replace(/^\?/, "");
        var aryQS = s.split("&");
        for (var i = 0; i < aryQS.length; i++) {
            var aryPair = aryQS[i].split("=");
            qs[aryPair[0]] = aryPair[1];
        }
        return qs;
    };
    imod.Browser.Request.Querystring = imod.Browser.ParseQuerystring();
    imod.Browser.Request.QueryString = imod.Browser.Request.Querystring;

    imod.Browser.IE = (window.attachEvent != null);

    imod.Browser.GetWindowScroll = function (frm) {
        var oReturn = { "left": 0, "top": 0 };
        var w = (frm || frm == 0) ? window.frames[frm] : window;
        var de = w.document.documentElement;
        var db = w.document.body;

        if (de && de.scrollLeft > 0)
            oReturn.left = de.scrollLeft;
        else
            oReturn.left = db.scrollLeft;
        if (de && de.scrollTop > 0)
            oReturn.top = de.scrollTop;
        else
            oReturn.top = db.scrollTop;

        return oReturn;
    };
    imod.Browser.ScrollWindow = function () {
        var left = null, top = null, frm = null;
        switch (arguments.length) {
            case 2:
                left = arguments[0];
                top = arguments[1];
                break;
            case 3:
                frm = arguments[0];
                left = arguments[1];
                top = arguments[2];
                break;
            default:
                var s = "No overload for ScrollWindow(";
                for (var i = 0; i < arguments.length; i++) {
                    if (i > 0) s += ",";
                    s += typeof (arguments[i]);
                }
                s += ")";
                throw new Error(s);
        }

        var w = (frm || frm == 0) ? window.frames[frm] : window;
        var de = w.document.documentElement;
        var db = w.document.body;

        if (left != null) {
            if (de) de.scrollLeft = left;
            db.scrollLeft = left;
        }
        if (top != null) {
            if (de) de.scrollTop = top;
            db.scrollTop = top;
        }
    };
    imod.Browser.GetWindowSize = function (frm) {
        var oReturn = { width: 0, height: 0 };

        var w = (frm) ? window.frames[frm] : window;
        var de = w.document.documentElement;
        var db = w.document.body;

        if (w.innerWidth)
            oReturn.width = w.innerWidth;
        else if (de && de.offsetWidth > 0)
            oReturn.width = de.offsetWidth;
        else
            oReturn.width = db.offsetWidth;

        if (w.innerHeight)
            oReturn.height = w.innerHeight;
        else if (de && de.offsetHeight > 0)
            oReturn.height = de.offsetHeight;
        else
            oReturn.height = db.offsetHeight;

        return oReturn;
    };
    imod.dom.DisableSelect = function (o) {
        o.style.MozUserSelect = "none";
        o.onselectstart = function () { return false; };
        o.unselectable = "on";
    };
    imod.dom.ConfirmPageExit = function (sPrmMessage, prmConfirmDelegate) {
        var f = function (e) {
            if (window.event) e = window.event;
            var bDoIt = true;
            if (prmConfirmDelegate != null)
                bDoIt = prmConfirmDelegate();
            if (bDoIt) {
                e.returnValue = sPrmMessage.replace(/<br[^>]*>/gi, "\n");
                e.cancelBubble = true;
            }
        };
        imod.dom.AddHandler(window, "beforeunload", f);
    };
    imod.dom.PreventDefault = function (e) {
        if (e && e.preventDefault)
            e.preventDefault();
        else
            window.event.returnValue = false;
    };
    imod.dom.GetSender = function (e) {
        if (e && e.target)
            return e.target;
        if (window.event && window.event.srcElement)
            return window.event.srcElement;
        return null;
    };
    imod.dom.InsertAfter = function (oPrmInsert, oPrmAfter) {
        if (oPrmAfter.nextSibling) {
            oPrmAfter.parentNode.insertBefore(oPrmInsert, oPrmAfter.nextSibling);
        }
        else {
            oPrmAfter.parentNode.appendChild(oPrmInsert);
        }
    };
    imod.dom.GenerateId = function (sPrmRoot) {
        var sRoot = sPrmRoot;
        var sId = null;
        if (!sRoot)
            sRoot = "element";
        while (sId == null || imod$(sId))
            sId = sRoot + Math.random().toString().replace(/\./gi, "");
        return sId;
    };
    imod.dom.CenterElement = function (o, isFixed) {
        var x = imod.Browser.ClientWidth() - o.offsetWidth;
        var y = imod.Browser.ClientHeight() - o.offsetHeight;
        if (x < 0) x = 0;
        if (y < 0) y = 0;

        x = (x / 2);
        y = (y / 2);

        if (isFixed === false) {
            var ws = imod.Browser.GetWindowScroll();
            x += ws.left;
            y += ws.top;
        }
        o.style.left = x + "px";
        o.style.top = y + "px";
    };
    //Element, point  (where point is any object with an exposed x and y property)
    imod.dom.PositionElement = function () {
        var x = 0;
        var y = 0;
        var o = null;
        var scrollBarWidth = 25;

        switch (arguments.length) {
            case 2:
                o = arguments[0];
                x = arguments[1].x;
                y = arguments[1].y;
            case 3:
                o = arguments[0];
                x = arguments[1];
                y = arguments[2];
            case 4:
                o = arguments[0];
                x = arguments[1];
                y = arguments[2];
                break;
        }
        var w = o.offsetWidth;
        var h = o.offsetHeight;
        var winScroll = imod.Browser.GetWindowScroll();

        var edgeLeft = imod.Browser.ClientWidth() + winScroll.left - scrollBarWidth;
        var edgeBottom = imod.Browser.ClientHeight() + winScroll.top - scrollBarWidth;

        if (x + w > edgeLeft)
            x -= (x + w - edgeLeft);
        if (x < winScroll.left)
            x = winScroll.left;

        if (y + h > edgeBottom)
            y -= (y + h - edgeBottom);
        if (y < winScroll.top)
            y = winScroll.top;

        o.style.left = x + "px";
        o.style.top = y + "px";
    };
    imod.Fancy.GlobalFastTitle2 = function (oPrmRoot) {
        var oRoot = oPrmRoot;
        if (oRoot == null)
            oRoot = document.body;

        imod.dom.AddHandler(oRoot, "mouseover", imod.Fancy.FastTitleHandler2);
        imod.dom.AddHandler(oRoot, "mouseout", imod.Fancy.FastTitleCloseHandler2);
        imod.dom.AddHandler(oRoot, "mousemove", imod.Fancy.FastTitleMoveHandler2);

        imod.Fancy.BuildFastTitleDiv();
    };
    imod.Fancy.FastTitleMoveHandler2 = function (e) {
        if (imod.Fancy.FastTitleOn) {
            imod.Fancy.ShowFastTitle(imod.Fancy.FastTitleCurrent, e);
        }
    };
    imod.Fancy.ShowFastTitle = function (sender, e) {
        if (sender.FastTitle != null) {

            var divFastTitle = imod$("divFastTitle55378008");
            divFastTitle.innerHTML = sender.FastTitle;
            divFastTitle.style.display = "block";
            var iOffsetY = 0;
            var ws = imod.Browser.GetWindowScroll();
            var mouse = imod.Browser.GetMouse(e);
            if (mouse.x + 15 + divFastTitle.offsetWidth > imod.Browser.ClientWidth() + ws.left) iOffsetY = 15;
            imod.dom.PositionElement(divFastTitle, mouse.x + 15, mouse.y + iOffsetY);
        }
    };
    imod.Fancy.FastTitleHandler2 = function (e) {
        var sender = ((e.target != null) ? e.target : window.event.srcElement);

        switch (sender.tagName) {
            case "IFRAME":
                return; //skip iframes
        }

        if (!sender.FastTitleCached) {
            var oCurrent = sender;
            var bNotFound = true;

            while (bNotFound) {
                if (oCurrent == document || oCurrent == document.body) {
                    sender.FastTitle = null;
                    sender.title = "";
                    // ENC-5787 per DJ, we are already at the top of the stack and have determined we cannot do anything;
                    // break out of the loop so we do not while ourselves to death...
                    bNotFound = false;
                }
                else {
                    if (oCurrent.FastTitle)
                        sender.FastTitle = oCurrent.FastTitle;
                    else if (oCurrent.title != null && oCurrent.title.length > 0)
                        sender.FastTitle = oCurrent.title;
                    else if (oCurrent.alt != null && oCurrent.alt.length > 0)
                        sender.FastTitle = oCurrent.alt;
                    else {
                        oCurrent = oCurrent.parentNode;
                    }
                }
                if (sender.FastTitle != null || oCurrent == null || oCurrent == document.body) {
                    bNotFound = false;
                    if (oCurrent != null && oCurrent != document.body)
                        oCurrent.title = "";
                }
            }
            if (sender.FastTitle != null)
                sender.title = "";
            sender.FastTitleCached = true;
        }
        if (imod.Fancy.FastTitle != null) {
            imod.Fancy.FastTitleOn = true;
            imod.Fancy.FastTitleCurrent = sender;
            imod.Fancy.ShowFastTitle(sender, e);
        }
    };
    imod.Fancy.FastTitleCloseHandler2 = function (e) {
        if (imod.Fancy.FastTitleOn) {
            var sender = ((e.target != null) ? this : window.event.srcElement);
            var divFastTitle = imod$("divFastTitle55378008");
            divFastTitle.style.display = "none";
            imod.Fancy.FastTitleOn = false;
            imod.Fancy.FastTitleCurrent = null;
        }
    };
    imod.Fancy.BuildFastTitleDiv = function () {
        var divFastTitle = document.createElement("div");
        divFastTitle.id = "divFastTitle55378008";
        divFastTitle.className = "imod-FastTitle";
        divFastTitle.style.display = "none";
        document.body.appendChild(divFastTitle);
        return divFastTitle;
    };
    imod.Fancy.FastTitle = function (o, s) {
        if (!o.FastTitle) {
            imod.dom.AddHandler(o, "mousemove", imod.Fancy.FastTitleHandler2);
            imod.dom.AddHandler(o, "mouseout", imod.Fancy.FastTitleCloseHandler2);
        }
        if (!s) {
            if (o.title && o.title.length > 0)
                o.FastTitle = o.title;
            else
                o.FastTitle = o.alt;
            o.title = "";
        }
        else {
            o.FastTitle = s;
        }
        o.FastTitleEnabled = true;
    }; //All of these should be moved to CSS where possible if we can make the admin template use standards mode
    imod.Fancy.ActivateFancyInputFocus = function () { };
    imod.Fancy.HighlightInput = function (e) { };
    imod.Fancy.UnHighlightInput = function (e) { };
    imod.Fancy.ActivateFancyLabels = function () { };
    imod.Fancy.HighlightInputLabel = function (e) { };
    imod.Fancy.UnHighlightInputLabel = function (e) { };
    imod.Fancy.ActivateFancyCheckBoxes = function () { };
    imod.Fancy.ActivateFancyRadioButtons = function () { };
    imod.Fancy.Handlers.FancyRadioCheckBoxClickHandler = function (e) { };
    imod.Fancy.SelectFancyCheckBox = function (sender) { };

    function imod_GetLabelForInput(o) {
        var labels = document.body.getElementsByTagName("label");
        for (var i = 0; i < labels.length; i++) {
            if (labels[i].htmlFor == o.id)
                return labels[i];
        }
        return null;

    }

    function imod_ParseInt(sPrmInt) {
        if (!isNaN(sPrmInt))
            return parseInt(sPrmInt);
        if (typeof (sPrmInt) == "string" && sPrmInt.length > 0) {
            var s = sPrmInt.split("");
            var sValid = "0123456789";
            var sSkip = ",-";
            var sInt = "";
            var bGetting = false;
            for (var i = 0; i < s.length; i++) {
                if (sValid.indexOf(s[i]) > -1) {
                    sInt += s[i];
                    bGetting = true;
                }
                else if (sSkip.indexOf(s[i]) > -1) {
                    //do nothing
                }
                else {
                    if (bGetting)
                        break;
                }
            }
            if (s[0] == "-")
                sInt = "-" + sInt;
            if (!isNaN(sInt))
                return parseInt(sInt);
        }
        return 0;
    }

    // right now we attach this to both oninput and onkeyup,
    // but oninput is preferred since it handles mouse clicks and ctrl-v;
    // once IE10 is minimum requirement for admins, onkeyup can go away
    // (Not for donation drivers, they have their own handler)
    function imod_CurrencyTextboxOnInput(target, event) {
        var value = jQuery(target).val();
        var oldvalue = value;
        value = value.replace(/[^0-9\.]+/g, ''); // 0-9 plus .
        var charIndex = String(value).indexOf(".");
        var valueLength = String(value).length;
        if ((charIndex >= 0) && (charIndex < valueLength - 3)) {
            value = value.substr(0, charIndex + 3);
        }
        if (oldvalue != value) {
            jQuery(target).val(value);
        }
    }

    function imod_Pixel(i) {
        if (isNaN(i) && i.indexOf != null && i.indexOf("px") > -1)
            return i;
        var s = i + "px";
        if (s == "px")
            s = "";

        return s;
    }

    function imod_ASCX(sPrmUniqueId) {
        var UniqueId;
        if (sPrmUniqueId) { SetUniqueId(sPrmUniqueId); }
        this.Verbiage = new imod_Verbiage();

        this.$ = GetElement;
        this.O = GetObject;

        this.SetUniqueId = SetUniqueId;
		this.ResolveId = ResolveId;

        function SetUniqueId(sPrmUniqueId) {
            UniqueId = sPrmUniqueId.replace(/[$:]/gi, "_");
        }

        function GetElement(sPrmId) {
            return imod$(UniqueId + "_" + sPrmId);
        }

        function GetObject(sPrmName) {
            return window[UniqueId + "_" + sPrmName];
        }

		function ResolveId(id) {
			return UniqueId + "_" + id;
		}
    }

    function imod_Verbiage() {
        var Items = {};

        this.Add = Add;
        this.Set = Add;
        this.Get = Get;

        function Add(sPrmKey, sPrmValue) {
            Items[sPrmKey] = sPrmValue;
        }

        function Get(sPrmKey) {
            if (Items[sPrmKey] == null)
                return sPrmKey;
            return Items[sPrmKey];

        }
    }

    imod.dom.CreateElement = function (sPrmElement, sPrmFrame) {
        var dummy = null;
        if (sPrmFrame) {
            if (sPrmElement.indexOf("<") > -1) {
                dummy = window.frames[sPrmFrame].document.createElement("div");
                dummy.innerHTML = sPrmElement;
                return dummy.firstChild;
            }
            return window.frames[sPrmFrame].document.createElement(sPrmElement);
        }
        else {
            if (sPrmElement.indexOf("<") > -1) {
                dummy = document.createElement("div");
                dummy.innerHTML = sPrmElement;
                return dummy.firstChild;
            }
            return document.createElement(sPrmElement);
        }
    };


    function imod_CreateElement(sPrmElement, sPrmFrame) {
        var dummy = null;
        if (sPrmFrame) {
            if (sPrmElement.indexOf("<") > -1) {
                dummy = window.frames[sPrmFrame].document.createElement("div");
                dummy.innerHTML = sPrmElement;
                return dummy.firstChild;
            }
            return window.frames[sPrmFrame].document.createElement(sPrmElement);
        }
        else {
            if (sPrmElement.indexOf("<") > -1) {
                dummy = document.createElement("div");
                dummy.innerHTML = sPrmElement;
                return dummy.firstChild;
            }
            return document.createElement(sPrmElement);
        }
    }


    function imod_GetRadioButtonValue(sPrmName) {
        var rbs = document.forms["MainForm"].elements[sPrmName];
        for (var i = 0; i < rbs.length; i++) {
            if (rbs[i].checked)
                return rbs[i].value;
        }
        return null;
    }

    function imod_SetTableRowBackgroundColors(oPrmTable, sPrmColor, sPrmColorAlt, bPrmSkipHeader) {
        if (sPrmColor == null)
            sPrmColor = "#f7f6eb";
        if (sPrmColorAlt == null)
            sPrmColorAlt = "#e5e7d8";
        if (oPrmTable == null) {
            alert("imod_SetTableRowBackgroundColors::oPrmTable is null");
            return;
        }
        if (oPrmTable.rows == null) {
            alert("imod_SetTableRowBackgroundColors::oPrmTable is not a table");
            return;
        }
        var iStart = 0;
        if (bPrmSkipHeader)
            iStart = 1;
        for (var i = iStart; i < oPrmTable.rows.length; i++) {
            if (i % 2 == 0)
                oPrmTable.rows[i].style.backgroundColor = sPrmColor;
            else
                oPrmTable.rows[i].style.backgroundColor = sPrmColorAlt;
        }
    }

    function imod$() {
        if (arguments.length == 0)
            return null;
        if (arguments.length == 1) {
            return imod$_getElement(arguments[0]);
        }
        var aryReturn = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++)
            aryReturn[i] = imod$_getElement(arguments[i]);
        return aryReturn;
    }
    imod.$ = imod$;

    function imod$_getElement(s) {
        if (s && s.indexOf && s.indexOf("~") > -1) {
            var pair = s.split("~");
            var tag = "*";
            var suffix = pair[1];
            if (pair[0] && pair[0] != "") tag = pair[0];

            var els = document.getElementsByTagName(tag);

            for (var k in els) {
                if (els[k].length) {
                    for (var i = 0; i < els[k].length; i++) {
                        if (els[k][i].id && els[k][i].id.indexOf(suffix, els[k][i].id.length - suffix.length) != -1) {
                            return els[k][i];
                        }
                    }
                }
                else {
                    if (els[k].id && els[k].id.indexOf(suffix, els[k].id.length - suffix.length) != -1) {
                        return els[k];
                    }
                }
            }
        }
        if (s && s.indexOf && s.indexOf(".") > -1) {
            var pair = s.split(".");
            if (pair[0] == null || pair[0] == "") pair[0] = "*";
            var els = document.getElementsByTagName(pair[0]);
            for (var k in els) {
                if (els[k].className == pair[1]) {
                    return els[k];
                }
            }
            //return null;
        }
        return document.getElementById(s);
    }

    function imod_ASCX$(sPrmId) {
        return imod$(this.UniqueId + "_" + sPrmId);
    }

    //Read .Net compatible cookie
    function imod_GetCookie(sPrmName, sPrmKey) {
        var aryCookies = document.cookie.replace(/;\s/gi, ";").split(";");
        for (var i = 0; i < aryCookies.length; i++) {
            var sCookie = aryCookies[i];
            if (sCookie.indexOf(sPrmName + "=") == 0) {
                if (sPrmKey != null) {
                    var sNewPairs = "";
                    var sValues = sCookie.substring(sPrmName.length + 1, sCookie.length);
                    var aryValues = sValues.split("&");
                    for (var j = 0; j < aryValues.length; j++) {
                        var sPair = aryValues[j];
                        if (sPair.indexOf(sPrmKey + "=") == 0) {
                            return window.unescape(sPair.substring(sPrmKey.length + 1, sPair.length));
                        }
                    }
                }
                else {
                    return window.unescape(sCookie.substring(sPrmName.length + 1, sCookie.length));
                }
            }
        }
        return null;
    }


    //Write .Net compatible cookie
    //Expiration NYI, Domain NYI
    function imod_SetCookie(sPrmName, sPrmKey, sPrmValue, iPrmDaysToLive, sPrmDomain, cookiePath) {
        //var DateExpires = new Date("12/11/2009");
        var sDomain = "domain=" + window.location.host + ";";
        //var sExpires = "expires=" + DateExpires.toGMTString() + ";"; //" expires=;";
        var sPath = ""; //var sCookieFooter = sExpires + sPath + sDomain;
        var sCookieFooter = sDomain;

        if (arguments.length == 6) {
            sPath = "path=" + cookiePath + ";";
        }

        var aryCookies = document.cookie.replace(/;\s/gi, ";").split(";");
        for (var i = 0; i < aryCookies.length; i++) {
            var sCookie = aryCookies[i];
            if (sCookie.indexOf(sPrmName + "=") == 0) {
                var sNewPairs = "";
                var sValues = window.unescape(sCookie.substring(sPrmName.length + 1, sCookie.length));
                var aryValues = sValues.split("&");
                var bExists = false;
                for (var j = 0; j < aryValues.length; j++) {
                    var sPair = aryValues[j];
                    if (sPair.indexOf(sPrmKey + "=") == 0) {
                        sNewPairs += "&" + sPrmKey + "=" + window.escape(sPrmValue);
                        bExists = true;
                    }
                    else {
                        sNewPairs += "&" + sPair;
                    }
                }
                if (!bExists) {
                    sNewPairs += "&" + sPrmKey + "=" + window.escape(sPrmValue);
                }
                if (sNewPairs.length > 0 && sNewPairs[0] == "&")
                    sNewPairs = sNewPairs.substring(1);
                document.cookie = sPrmName + "=" + sNewPairs + ";" + sCookieFooter + sPath; // + " expires=" + DateExpires.toGMTString() + "; path=/";
                return;
            }
        }
        document.cookie = sPrmName + "=" + sPrmKey + "=" + window.escape(sPrmValue) + ";" + sCookieFooter + sPath; // + ";" + " expires=" + DateExpires.toGMTString() + "; path=/";
    }

    imod.dom.GetElementsByTagNames = function (oPrmTarget) {
        var aryReturn = new Array();
        for (var i = 1; i < arguments.length; i++) {
            var aryElements = oPrmTarget.getElementsByTagName(arguments[i]);
            for (var j = 0; j < aryElements.length; j++)
                aryReturn.push(aryElements[j]);
        }
        return aryReturn;
    };

    function imod_SetOpacity(o, iPrmOpacity) {
        if (iPrmOpacity != null) {
            o.style.opacity = iPrmOpacity;
            o.style.MozOpacity = iPrmOpacity;
            o.style.filter = "alpha(opacity=" + iPrmOpacity * 100 + ")";
        }
        else {
            o.style.opacity = "";
            o.style.MozOpacity = "";
            o.style.filter = "";
        }
    }

    function imod_StopPropagation(e, sPrmFrameName) {
        //Stops events from bubbling up.
        //e: the event object.  Currently needed for Mozilla
        //sPrmFrameName:  If you are stopping propagation of an event in a frame by a method declared outside the frame
        //	this should be set so in IE it knows which event object to use.
        if (e == null) {
            if (sPrmFrameName != null)
                e = window.frames[sPrmFrameName].event;
            else
                e = window.event;
        }
        if (e.stopPropagation)
            e.stopPropagation();
        else
            e.cancelBubble = true;
    }

    //iPrmCenterMode: 0 - none, 1 - browser, 2 = screen, null - none, 3 = full screen
    function imod_OpenWindow(sPrmUrl, iPrmWidth, iPrmHeight, sPrmWindowProperties, iPrmCenterMode, iPrmLeft, iPrmTop) {
        var sWindowProperties = "";
        if (iPrmCenterMode == 3)
            sWindowProperties = "width=" + imod.Browser.ScreenWidth() + ",height=" + imod.Browser.ScreenHeight();
        else
            sWindowProperties = "width=" + iPrmWidth + ",height=" + iPrmHeight;
        if (sPrmWindowProperties != null && sPrmWindowProperties.length > 0)
            sWindowProperties += "," + sPrmWindowProperties;

        if (iPrmCenterMode != null) {
            if (iPrmCenterMode == true)
                iPrmCenterMode = 1;
            else if (iPrmCenterMode == false)
                iPrmCenterMode = 2;
        }
        if (iPrmCenterMode != null && iPrmCenterMode != 0) {
            var x = 0;
            var y = 0;
            switch (iPrmCenterMode) {
                case 1: //browser
                    x = (document.body.clientWidth - iPrmWidth) / 2;
                    y = (imod.Browser.ClientHeight() - iPrmHeight) / 2;
                    if (window.screenX != null) {
                        x += window.screenX;
                        y += window.screenY;
                    }
                    else if (window.screenLeft != null) {
                        x += window.screenLeft;
                        y += window.screenTop;
                    }
                    break;
                case 2: //screen
                    x = (screen.availWidth - iPrmWidth) / 2;
                    y = (screen.availHeight - iPrmHeight) / 2;
                    break;
            }
            if (x < 0)
                x = 0;
            if (y < 0)
                y = 0;
            sWindowProperties += ",left=" + x + ",top=" + y;
        }
        else {
            if (iPrmLeft != null)
                sWindowProperties += ",left=" + iPrmLeft;
            if (iPrmTop != null)
                sWindowProperties += ",top=" + iPrmTop;
        }
        sWindowProperties = sWindowProperties.replace(/scrolling=/gi, "scrollbars=");
        if (sWindowProperties.indexOf("scrollbars=") == -1) {
            if (sWindowProperties.length > 0) sWindowProperties += ",";
            sWindowProperties += "scrollbars=1";
        }
        if (sWindowProperties.indexOf("resizable=") == -1) {
            if (sWindowProperties.length > 0) sWindowProperties += ",";
            sWindowProperties += "resizable=1";
        }
        return window.open(sPrmUrl, "", sWindowProperties);
    }

    imod.Browser.ClientHeight = function () {
        if (window.innerHeight)
            return window.innerHeight;
        if (document.documentElement && document.documentElement.clientHeight) //  && document.documentElement.clientHeight != document.documentElement.scrollHeight)
            return document.documentElement.clientHeight;
        return document.body.clientHeight;
    };
    window.imod_ClientHeight = imod.Browser.ClientHeight;

    imod.Browser.ClientWidth = function () {
        if (window.innerWidth)
            return window.innerWidth;
        if (document.documentElement && document.documentElement.clientWidth) //  && document.documentElement.clientWidth != document.documentElement.scrollWidth)
            return document.documentElement.clientWidth;
        return document.body.clientWidth;
    };
    window.imod_ClientWidth = imod.Browser.ClientWidth;

    function imod_Bool(sPrmBool) {
        //Convert sPrmBool to boolean true or false.
        switch (sPrmBool) {
            case "true":
            case "True":
            case "T":
            case "t":
            case "1":
            case "-1":
            case true:
            case 1:
            case -1:
                return true;
        }
        return false;
    }

    imod.General.IsValidEmail = function (sEmailAddress) {
        var emailPattern = /^[A-Za-z0-9!#$%&*+/=?^_'{|}~-]+(?:\.[A-Za-z0-9!#$%&*+/=?^_'{|}~-]+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,3})(\]?)$/;
        return emailPattern.test(sEmailAddress.trim());
    }; //Methods for the pixel location of elements on a page.  These versions attempt to factor in scroll offsets.

    imod.General.ProcessEmailControlInputSelection = function (term, existingTerms, maxLength) {
        var maxRecipientEmailCharLength = maxLength || 1000,
            failedValidationValue = null;

        var trimmedTerm = term.trim();
        if (!imod.General.IsValidEmail(trimmedTerm)) {
            return failedValidationValue;
        }

        var termAlredyExists = _.find(existingTerms, function (existingTerm) { return existingTerm.localeCompare(trimmedTerm) === 0; }) !== undefined;
        if (termAlredyExists) {
            return failedValidationValue;
        }

        var existingTermsLengths = _.map(existingTerms, function (existingTerm) { return existingTerm.length; });
        var existingTermsTotalLength = _.reduce(existingTermsLengths, function (termLength, accumulatedLength) { return termLength + accumulatedLength; }, 0);
        if (existingTermsTotalLength + trimmedTerm.length > maxRecipientEmailCharLength) {
            return failedValidationValue;
        }

        return { id: trimmedTerm, text: trimmedTerm };
    }

    function imod_DocumentScrollTop(iPrmScroll) {
        if (iPrmScroll) {
            imod.Browser.ScrollWindow(null, iPrmScroll);
        }
        return imod.Browser.GetWindowScroll().top;
    }

    function imod_DocumentScrollLeft(iPrmScroll) {
        if (iPrmScroll) {
            imod.Browser.ScrollWindow(iPrmScroll, null);
        }
        return imod.Browser.GetWindowScroll().left;
    }

    imod.dom.GetPosition = function (el, CheckScrollOffsets) {
        var o = el;
        var x = 0;
        var y = 0;
        var w = o.offsetWidth;
        var h = o.offsetHeight;
        while (o != null) {
            x += o.offsetLeft;
            y += o.offsetTop;
            o = o.offsetParent;
        }
        if (CheckScrollOffsets) {
            var o = el;
            var OffsetX = 0;
            var OffsetY = 0;
            if (o != null) {
                while (o.parentNode) {
                    if (o.parentNode.scrollTop) {
                        if (o.parentNode != document.body) //don't factor window scroll bars
                        {
                            OffsetY += o.parentNode.scrollTop;
                        }
                    }
                    if (o.parentNode.scrollLeft) {
                        if (o.parentNode != document.body) //don't factor window scroll bars
                        {
                            OffsetX += o.parentNode.scrollLeft;
                        }
                    }
                    o = o.parentNode;
                }
            }
            if (document.documentElement != null) {
                if (document.documentElement.scrollLeft)
                    OffsetX -= document.documentElement.scrollLeft;
                if (document.documentElement.scrollTop)
                    OffsetY -= document.documentElement.scrollTop;
            }


            x -= OffsetX;
            y -= OffsetY;
        }
        return { "x": x, "y": y, "w": w, "h": h, "x2": x + w, "y2": y + h };
    };

    function imod_OffsetLeft(o) {
        //Get the exact left pixel position of element o.
        return imod.dom.GetPosition(o, true).x;
    }

    function imod_OffsetTop(o) {
        //Get the exact top pixel position of element o.
        return imod.dom.GetPosition(o, true).y;
    }

    imod.Browser.MouseX = function (e) { return imod.Browser.GetMouse(e).x; };
    imod.Browser.MouseY = function (e) { return imod.Browser.GetMouse(e).y; }; //Return an object with the x and y coords of the mouse (clientX and clientY are added as a bonus if you need them)
    imod.Browser.GetMouse = function (evt, frm) {
        var m = {};
        var w = (frm) ? window.frames[frm] : window;
        var e = (w.event) ? w.event : evt;
        m.clientX = e.clientX;
        m.clientY = e.clientY;
        if (e.pageX) {
            m.x = e.pageX;
            m.y = e.pageY;
        }
        else {
            var ws = imod.Browser.GetWindowScroll(frm);
            m.x = e.clientX + ws.left;
            m.y = e.clientY + ws.top;
        }
        return m;
    }; //Methods to add/remove event handlers
    if (window.EventHandlers == null)
        var EventHandlers = new Array();

    var LogHandlers = true;

    function imod_HandlerCleanUp() {
        for (var i = 0; i < EventHandlers.length; i++) {
            if (EventHandlers[i].Event != "unload") {
                imod_RemoveHandler(EventHandlers[i].Object, EventHandlers[i].Event, EventHandlers[i].Handler);
                EventHandlers[i].Object = null;
                EventHandlers[i].Handler = null;
                EventHandlers[i] = null;
            }
        }
        EventHandlers = null;
        imod_RemoveHandler(window, "unload", imod_HandlerCleanUp);
    }

    function imod_RemoveHandlersOnUnload() {
        imod_AddHandler(window, "unload", imod_HandlerCleanUp);
    }

    imod.dom.AddHandler2 = function (o, sPrmEvent, prmMethod, bPrmOnCapture) {
        var f = function (e) {
            if (window.event != null) e = window.event;
            var target = e.target;
            if (target == null && e.srcElement != null)
                target = e.srcElement;
            prmMethod(o, e, target);
        };
        imod.dom.AddHandler(o, sPrmEvent, f, bPrmOnCapture);
    };

    function imod_AddHandler(o, sPrmEvent, f, bPrmOnCapture) {
        bReturn = false;
        if (o) {
            if (o.addEventListener != null) {
                var bOnCapture = false;
                if (bPrmOnCapture) bOnCapture = true;
                o.addEventListener(sPrmEvent, f, bOnCapture);
                bReturn = true;
            }
            else if (o.attachEvent) {
                o.attachEvent("on" + sPrmEvent, f);
                bReturn = true;
            }
            else {
                /*
				o["on" + sPrmEvent] = function(e) {
					if (o["on" + sPrmEvent] != null)
						o["on" + sPrmEvent](e);
					functionDelegate(e);
				}
				*/
            }
        }
        if (LogHandlers)
            EventHandlers[EventHandlers.length++] = { "Object": o, "Event": sPrmEvent, "Handler": f };
        return bReturn;
    }

    function imod_RemoveHandler(o, sPrmEvent, f) {
        var bReturn = false;
        if (o == null) {
            return bReturn;
        }
        try {
            if (o.removeEventListener != null) {
                o.removeEventListener(sPrmEvent, f, false);
                bReturn = true;
            }
            else if (o.detachEvent) {
                o.detachEvent("on" + sPrmEvent, f);
                bReturn = true;
            }
            else {
                //o["on" + sPrmEvent] = null;
            }
        }
        catch (ex) {
            //Stop permission errors from breaking IE in cross-frame assignments
        }
        return bReturn;
    }

    //FIXES RadEditor's HTML issues
    function imod_RadEditorIPadFix(clientId) {
        setTimeout(
			function () {
			    document.getElementById(clientId).style.height = "";
			}, 1000);
    }
    function imod_FixRadEditorHtml(sPrmClientID) {
        var bHasFail = true;
        if (window.GetRadEditor != null) {
            var RadEditor1 = GetRadEditor(sPrmClientID);
            if (RadEditor1 != null) {
                bHasFail = false;
                RadEditor1.FiltersManager.Add(new imod_RadEditorFix_CustomFilter());
            }
        }
        if (bHasFail)
            setTimeout(function () { imod_FixRadEditorHtml(sPrmClientID); }, 100);
    }

    function imod_RadEditorFix_CustomFilter() {
        this.GetHtmlContent = imod_RadEditorFix;
    }

    function imod_RadEditorFix(sPrmHtml) {
        var sReturn = sPrmHtml;

        sReturn = sReturn.replace(/&amp;/gi, "&");
        sReturn = sReturn.replace(/&gt;/gi, ">");
        sReturn = sReturn.replace(/&lt;$/i, "<");
        sReturn = sReturn.replace(/&lt;([\s"'])/gi, "<$1");
        sReturn = sReturn.replace(/&lt;([<])/gi, "<<");
        sReturn = sReturn.replace(/%5B/gi, "[");
        sReturn = sReturn.replace(/%5D/gi, "]");

        //Fix token spacing
        var reTokens = new Array(/\[[^\]]*\]/gi, /##[^#]*##/gi);
        for (var i = 0; i < reTokens.length; i++) {
            var mcToken = sReturn.match(reTokens[i]);
            if (mcToken != null) {
                for (var m = 0; m < mcToken.length; m++) {
                    var mToken = mcToken[m];
                    var sFixed = "";
                    if (mToken != null) {
                        sFixed = mToken.replace(/[\s]+/g, " ");
                        sReturn = sReturn.replace(mToken, sFixed);
                    }
                }
            }
        }
        return sReturn;
    }

    //KD 2006-0808 added common function to show/hide an html element based on the checked status of a checkbox passed in
    function imod_ShowHide(oPrmCheckBox, sPrmElementId) {
        var oElement = document.getElementById(sPrmElementId);
        if (oPrmCheckBox && oElement) {
            if (oPrmCheckBox.checked)
                oElement.style.display = '';
            else
                oElement.style.display = 'none';
        }
    } //imod_ShowHide

    //KD 2006-0822 added common function to show/hide an html element based on a bool passed in
    function imod_ForceShowHide(bShow, sPrmId) {
        var element = document.getElementById(sPrmId);
        if (element && element.style) {
            if (bShow)
                element.style.display = '';
            else
                element.style.display = 'none';
        }
    }

    function imod_ToggleDisplay(sPrmId) {
        var element = document.getElementById(sPrmId);
        if (element && element.style) {
            if (element.style.display == 'none')
                element.style.display = '';
            else
                element.style.display = 'none';
        }
    }


    // KD 2006-0915 - the following 2 functions allow you to add a javascript file or css file to the head tag of the page
    var arLoadedFiles = [];

    function imod_LoadScriptFile(prmFullPath) {
        if (!arLoadedFiles[prmFullPath]) {
            var el = document.createElement("script");
            el.src = prmFullPath;
            el.type = "text/javascript";
            if (document.getElementsByTagName("head") && document.getElementsByTagName("head")[0]) {
                document.getElementsByTagName("head")[0].appendChild(el);
                arLoadedFiles[prmFullPath] = true;
            }
            el = null;
        }
    }

    function imod_LoadStyleFile(prmFullPath) {
        if (!arLoadedFiles[prmFullPath]) {
            var el = document.createElement("link");
            el.href = prmFullPath;
            el.rel = "stylesheet";
            el.type = "text/css";
            if (document.getElementsByTagName("head") && document.getElementsByTagName("head")[0]) {
                document.getElementsByTagName("head")[0].appendChild(el);
                arLoadedFiles[prmFullPath] = true;
            }
            el = null;
        }
    }

    imod.General.StringBuilder = function () {
        var Items = new Array();

        this.Append = Append;
        this.ToString = ToString;

        function Append() { //can pass as many strings as you like now
            for (var i = 0; i < arguments.length; i++)
                Items.push(arguments[i]);
        }

        function ToString() {
            return Items.join("");
        }
    };
    imod.General.divDarkScreen = null;

    imod.General.DarkScreen = function (iPrmOpacity, sPrmColor, iPrmZIndex) {
        if (!imod.General.divDarkScreen) {
            imod.General.divDarkScreen = document.createElement("div");
            imod.General.divDarkScreen.style.display = "none";
            imod.General.divDarkScreen.style.background = "#000";
            imod.General.divDarkScreen.style.opacity = .5;
            imod.General.divDarkScreen.style.filter = "alpha(opacity=50)";

            //pdavis 3/4/2011: Added ID to DarkScreen so it can be accessed and resized: ENC-2062
            imod.General.divDarkScreen.setAttribute("id", "divDarkScreen");

            imod.General.divDarkScreen.style.zIndex = 1000;
            imod.General.divDarkScreen.style.position = "absolute";
            imod.General.divDarkScreen.style.left = "0px";
            imod.General.divDarkScreen.style.top = "0px";
            document.body.appendChild(imod.General.divDarkScreen);
        }
        if (iPrmOpacity)
            imod.dom.SetOpacity(imod.General.divDarkScreen, iPrmOpacity);
        if (sPrmColor)
            imod.General.divDarkScreen.style.background = sPrmColor;
        if (iPrmZIndex)
            imod.General.divDarkScreen.style.zIndex = iPrmZIndex;

        imod.General.divDarkScreen.style.width = document.body.scrollWidth + "px";

        //I don't know what this height thing did but removing the check fixed some stuff so if you find something with a weird shaped background div then we will have to come back to this
        //if (document.body.scrollHeight > 1) {
        //	imod.General.divDarkScreen.style.height = document.body.scrollHeight + "px";
        //}
        //else {
        if (imod.Browser.ClientHeight() > document.body.scrollHeight)
            imod.General.divDarkScreen.style.height = imod.Browser.ClientHeight() + "px";
        else
            imod.General.divDarkScreen.style.height = document.body.scrollHeight + "px";
        //}


        imod.General.divDarkScreen.style.display = "block";
    };
    imod.General.DarkScreenOpacity = 0;
    imod.General.DarkScreenThreadPointer = 0;

    imod.General.DarkScreenThread = function () {
        imod.General.DarkScreenOpacity += .01;
        imod.dom.SetOpacity(imod.General.divDarkScreen, imod.General.DarkScreenOpacity);
        if (imod.General.DarkScreenOpacity >= .5)
            clearInterval(imod.General.DarkScreenThreadPointer);

    };
    imod.General.NormalScreen = function () {
        if (imod.General.divDarkScreen)
            imod.General.divDarkScreen.style.display = "none";
    };
    imod.dom.Hide = function (el) {
        var o;
        if (el) {
            o = (el.style != null) ? el : imod$(el);
            if (o)
                o.style.display = "none";
        }

    };
    imod.dom.Show = function (el, s) {
        var o;
        if (el) {
            o = (el.style != null) ? el : imod$(el);
            if (o)
                o.style.display = (s != null) ? s : "";
        }
    };
    imod.dom.GetComputedStyle = function (el, p) {
        if (window.getComputedStyle)
            return window.getComputedStyle(el, null).getPropertyValue(p);
        if (el.currentStyle) {
            return el.currentStyle[p];
        }
        return;

    };
    imod.dom.AddEnterKeyHandler = function (sPrmId, ENTER_Action) {
        var fEnter = function (e) {
            if (window.event != null) e = window.event;
            if (e.keyCode == 13) {
                ENTER_Action(e);
                imod.dom.PreventDefault(e);
            }
        };
        imod.dom.AddHandler(imod$(sPrmId), "keypress", fEnter);
    }; //Adds trim function to the string object

    if (!String.prototype.trim) {
        String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        };
    };

    String.concat = function () {
        var s = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++)
            s[i] = arguments[i];
        return s.join("");
    };
    imod.dom.AddHandler = imod_AddHandler;
    imod.dom.RemoveHandler = imod_RemoveHandler;
    imod.dom.StopPropagation = imod_StopPropagation;
    imod.dom.OffsetTop = imod_OffsetTop;
    imod.dom.OffsetLeft = imod_OffsetLeft;
    imod.dom.MakePixel = imod_Pixel;
    imod.dom.SetOpacity = imod_SetOpacity;
    imod.dom.CreateElement = imod_CreateElement;
    imod.dom.LoadScriptFile = imod_LoadScriptFile;
    imod.dom.LoadStyleFile = imod_LoadStyleFile;
    imod.Browser.OpenWindow = imod_OpenWindow;

    imod.Browser.OpenFullWindow = function (sPrmUrl) {
        imod.Browser.OpenWindow(sPrmUrl, 0, 0, "location=yes,menubar=yes,toolbar=yes,directories=yes,status=yes,scrollbars=yes,resizable=yes", 3);
    };
    imod.Browser.DocumentScrollLeft = imod_DocumentScrollLeft;
    imod.Browser.DocumentScrollTop = imod_DocumentScrollTop;
    imod.Browser.GetCookie = imod_GetCookie;
    imod.Browser.SetCookie = imod_SetCookie;

    imod.General.ParseInt = imod_ParseInt;

    imod.dom.AddHandler(window, "load", function () {
        window.loaded = true;
    });

    imod_RemoveHandlersOnUnload();

    imod.HelpProvider = function () {

        var helpItemContainerElementId = 'HELPPROVIDER_Container';
        var helpItemContainer;

        // This is the JSON representation of IMod.Framework3.Utilities.DebugSystem.WebDebugHelper
        var providerData;
        var initialized = false;

        var settings = {
            helpIconUrl: "/images/icons/v2/context_help.gif"
        };

        var getHelpItem = function (controlClientId) {

            for (var i = 0; i < providerData.HelpItems.length; i++) {

                var itemElementId = providerData.HelpItems[i].ControlClientId;
                if (itemElementId == controlClientId) {

                    return providerData.HelpItems[i];
                }
            }

            return null;
        };

        var controlLabel = function (elementId) {
            return jQuery('label[for="' + elementId + '"]');
        };

        var showHelpItem = function (elementId, helpItemIconId) {

            logInfo('imod.HelpProvider showHelpItem ' + elementId);
            var providerDataHelpItem = getHelpItem(elementId);

            var ajaxPostOptions = {
                url: "/apiservices/Help.asmx/GetHelpContent",
                data: Sys.Serialization.JavaScriptSerializer.serialize({ "verbiageKey": providerDataHelpItem.VerbiageText }),
                success: function (result) {

                    if (window.console) console.log(result.Data);

                    helpItemContainer.html(result.Data);

                    jQuery(helpItemContainer).find('a').each(function () {
                        jQuery(this).attr('target', '_blank');
                    });

                    helpItemContainer.show();
                    showRadTooltip(helpItemIconId);

                },
                error: function (xhr, textStatus, errorThrown) {

                }
            };

            imod.JqueryAjax.JsonPost(ajaxPostOptions);

        };

        var hideHelpItem = function () {

            helpItemContainer.hide();
        };

        var hideRadTooltip = function () {
            var tooltip = Telerik.Web.UI.RadToolTip.getCurrent();
            if (tooltip) tooltip.hide();
        };

        var closeOnDocumentClick = function (e) {
            var tooltip = Telerik.Web.UI.RadToolTip.getCurrent();
            if (tooltip && !$telerik.isMouseOverElementEx(tooltip.get_popupElement(), e)) {
                tooltip.hide();
            }
        };

        var showRadTooltip = function (helpItemIconId) {

            logInfo('imod.HelpProvider showRadTooltip ' + helpItemIconId);

            var tooltip = $find("HELPPROVIDER_RadToolTip");
            //tooltip.hide();
            //var helpItemIconElement = jQuery("#" + helpItemIconId);
            tooltip.set_targetControlID(helpItemIconId);

            window.setTimeout(function () {
                tooltip.show();
                logInfo('imod.HelpProvider showRadTooltipsetTimeout ' + helpItemIconId + ' targetControlID=' + tooltip.get_targetControlID());
            }, 20);
        };


        var endsWith = function (str, suffix) {

            return str.indexOf(suffix, str.length - suffix.length) !== -1;
        };


        var insertBeforeTag = function (str, helpIconMarkup) {

            var endIndex = str.length - '<br>'.length;
            return str.substring(0, endIndex) + helpIconMarkup + '<br>';
        };


        var logInfo = function (message) {
            imod.log(message);
        };

        var appendHelpItemMarkUp = function (elementHtml, element, helpIconMarkup) {
            if (elementHtml && elementHtml.indexOf(helpIconMarkup) == -1) {

                if (endsWith(elementHtml, '<br>')) {

                    logInfo(element.attr('id') + ' ends with br');

                    var newMarkup = insertBeforeTag(elementHtml, helpIconMarkup);

                    element.html(newMarkup);
                }
                else {

                    element.after(helpIconMarkup);
                }
            }
        };

        return {

            HELPDATA: this.providerData,

            init: function (helpData, options) {

                if (initialized) {
                    return;
                }


                logInfo('imod.HelpProvider helpItemData ');
                logInfo(helpData);

                // If options exist, lets merge them
                // with our default settings
                if (options) {
                    jQuery.extend(settings, options);
                }

                if (helpData) {
                    providerData = helpData;
                }

                jQuery('<div class="contextualHelpContainer">')
					.attr("id", helpItemContainerElementId)
					.css("display", "none")
					.appendTo("#HELPPROVIDER_RadToolTip_Content");

                helpItemContainer = jQuery('#' + helpItemContainerElementId);

                for (var i = 0; i < providerData.HelpItems.length; i++) {

                    if (providerData.HelpItems[i].IsVisible) {
                        var itemElementId = providerData.HelpItems[i].ControlClientId;
                        var helpItemIconId = itemElementId + "helpIcon";

                        var helpIconMarkup = "&nbsp;<img id='" + helpItemIconId + "' class=\"imod-contextual-help-icon\" onclick=\"imod.HelpProvider.show('" + itemElementId + "','" + helpItemIconId + "')\" src='" + settings.helpIconUrl + "'/>";
                        var elementHtml = jQuery("#" + itemElementId).html();
                        var elementType = jQuery("#" + itemElementId).get(0);

                        if (elementType != null) {

                            if (elementType.tagName.toLowerCase() == "span") {
                                appendHelpItemMarkUp(elementHtml, jQuery("#" + itemElementId), helpIconMarkup);
                            }
                            if (elementType.tagName.toLowerCase() == "input") {
                                var element = controlLabel(itemElementId);
                                appendHelpItemMarkUp(element.html(), element, helpIconMarkup);
                            }
                        }
                    }
                }

                imod.HelpProvider.toggleicons(IModController.helpSettings == null || IModController.helpSettings.ContextualHelpEnabled);

                if ($telerik) {
                    $telerik.$(document).click(closeOnDocumentClick);
                }

                initialized = true;

                logInfo('imod.HelpProvider init complete');
            },

            toggleicons: function (val) {
                for (var i = 0; i < providerData.HelpItems.length; i++) {
                    var itemElementId = providerData.HelpItems[i].ControlClientId;
                    var helpItemIconId = itemElementId + "helpIcon";
                    jQuery("#" + helpItemIconId).toggle(val);
                }
            },

            hide: function () {


            },

            show: function (elementId, itemVerbiageText) {

                //helpItemContainer.html('called by' + elementId + '');
                showHelpItem(elementId, itemVerbiageText);
            }
        };
    }();

    function ShowHideContextualHelp(val) {
        // Step 1: persist the user setting for next page_load
        if (IModController.helpSettings != null) {
            IModController.helpSettings.ContextualHelpEnabled = val;

            var ajaxPostOptions = {
                url: '/controls/WebComponents/Services/MemberPersonalizationService.asmx/SaveHelpSettings',
                data: Sys.Serialization.JavaScriptSerializer.serialize({ 'settings': IModController.helpSettings }),
                success: function (result) {
                    if (window.console) console.log(result.Success);
                    if (window.console) console.log(result.Data);
                },
                error: function () {
                    if (window.console) console.log('Error saving HelpSettings');
                }
            };

            imod.JqueryAjax.JsonPost(ajaxPostOptions);
        }
        else {
            if (window.console) console.log('IModController.helpSettings is null');
        }

        // Step 2 - apply real time to any helpitems currently displayed
        if (imod.HelpProvider != null) {
            imod.HelpProvider.toggleicons(IModController.helpSettings == null || IModController.helpSettings.ContextualHelpEnabled);
        }
    }

    imod.TransactionState = function (urlToTransactionStateService, cid, mid, successCallback) {
        this.urlToTransactionStateService = urlToTransactionStateService;
        this.controlId = cid;
        this.memberId = mid;
        this.success = successCallback;
    };

    imod.TransactionState.prototype = function () {
        var checkPendingTransactionState = function () {
            var ajaxPostOptions =
			{
			    url: this.urlToTransactionStateService,

			    data: Sys.Serialization.JavaScriptSerializer.serialize({ cid: this.controlId, mid: this.memberId }),
			    success: this.success
			};

            imod.JqueryAjax.JsonPost(ajaxPostOptions);
        };

        return {
            checkPendingTransactionState: checkPendingTransactionState
        };
    }();

    imod.HtmlScraper = function (urlToHtmlScraperService, controlId, urlToScrape, startToken, endToken, urlToScriptFile, cacheDuration, resultElement, successCallback) {
        // the URL to the service
        this.urlToHtmlScraperService = urlToHtmlScraperService;

        // the current control's ControlId
        this.controlId = controlId;

        // the URL that will be scraped
        this.urlToScrape = urlToScrape;

        // user-defined starting point to scrape
        this.startToken = startToken;

        // user-defined end point to scrape
        this.endToken = endToken;

        // script file to be appended to the scraped html
        this.urlToScriptFile = urlToScriptFile;

        // the duration of the cache
        this.cacheDuration = cacheDuration;

        // the element that holds the result of the scrape
        this.resultElement = resultElement;

        // the function that will be called when the service call is successful
        this.success = successCallback;
    };

    imod.HtmlScraper.prototype = function () {
        var getHtmlFromUrl = function () {
            var ajaxPostOptions =
            {
                url: this.urlToHtmlScraperService,

                /// @author Jeffrey Jones @date 2013-06-25 @ref https://jira.imodules.com/browse/ENC-13093 @comment added sid and gid to the parameter to the service call
                ///@author John Rogers @date 2/12/2015 removed site and group id as these are now in the header
                data: Sys.Serialization.JavaScriptSerializer.serialize({ controlId: this.controlId, groupChain: IModController.groupChain, urlToScrape: this.urlToScrape, startToken: this.startToken, endToken: this.endToken, urlToScriptFile: this.urlToScriptFile, cacheDuration: this.cacheDuration }),
                success: this.success
            };

            imod.JqueryAjax.JsonPost(ajaxPostOptions);
        };

        return {
            getHtmlFromUrl: getHtmlFromUrl
        };
    }();

    imod.ErrorLevelEnum = {
        Debug: { value: 1, name: "Debug" },
        Error: { value: 2, name: "Error" },
        Information: { value: 3, name: "Information" },
        Warning: { value: 4, name: "Warning" },
        Success: { value: 5, name: "Success" }
    };

    imod.ValidationError = function (level, message) {
        this.Level = level === undefined || level === null ? imod.ErrorLevelEnum.Error.value : level;

        this.Message = message === undefined || message === null ? '' : message;
    };

    imod.ValidationError.prototype = function () {
        var toString = function () {
            return this.Message;
        };

        var toHtmlListItem = function () {
            return '<li>' + this.Message + '</li>';
        };

        return {
            ToString: toString,
            ToHtmlListItem: toHtmlListItem
        };

    }();

    imod.ValidationResult = function (success) {
        this.Success = success === undefined || success === null ? true : success;

        this.Errors = [];
    };

    imod.ValidationResult.prototype = function () {

        var addDebugMessage = function (message) {
            this.Errors.push(new imod.ValidationError(imod.ErrorLevelEnum.Debug.value, message));
        };

        var addErrorMessage = function (message) {
            this.Success = false;
            this.Errors.push(new imod.ValidationError(imod.ErrorLevelEnum.Error.value, message));
        };

        var addInformationMessage = function (message) {
            this.Errors.push(new imod.ValidationError(imod.ErrorLevelEnum.Information.value, message));
        };

        var addWarningMessage = function (message) {
            this.Errors.push(new imod.ValidationError(imod.ErrorLevelEnum.Warning.value, message));
        };

        var toString = function (level, delimiter) {
            var messageBuilder = '';

            if (this.Errors.length > 0) {
                jQuery.each(this.Errors, function (index, value) {
                    if (level === undefined || level === null) {
                        messageBuilder += value.ToString() + (delimiter === undefined || delimiter === null ? '<br />' : delimiter);
                    } else {
                        if (value.Level === level) {
                            messageBuilder += value.ToString() + (delimiter === undefined || delimiter === null ? '<br />' : delimiter);
                        }
                    }
                });
            }

            return messageBuilder;
        };

        var toHtmlList = function (level) {
            var messageBuilder = '';

            if (this.Errors.length > 0) {
                messageBuilder += '<ul>';

                jQuery.each(this.Errors, function (index, value) {
                    if (level === undefined || level === null) {
                        messageBuilder += value.ToHtmlListItem();
                    } else {
                        if (value.Level === level) {
                            messageBuilder += value.ToHtmlListItem();
                        }
                    }
                });

                messageBuilder += '</ul>';
            }

            return messageBuilder;
        };

        return {
            AddDebugMessage: addDebugMessage,
            AddErrorMessage: addErrorMessage,
            AddInformationMessage: addInformationMessage,
            AddWarningMessage: addWarningMessage,
            ToString: toString,
            ToHtmlList: toHtmlList
        };
    }();

    if (!imod.Date) imod.Date = {};
    imod.Date.DefaultShortDateFormat = "MM/dd/yyyy";
    imod.Date.ToShortDateByFormat = function (date, format) {
        if (!format) format = imod.Date.DefaultShortDateFormat;
        var dateToFormat = new Date(date);
        var formatedDate = format;
        formatedDate = formatedDate.replace("MM", ((dateToFormat.getMonth() < 9) ? "0" : "") + (dateToFormat.getMonth() + 1));
        formatedDate = formatedDate.replace("dd", ((dateToFormat.getDate() < 10) ? "0" : "") + dateToFormat.getDate());
        formatedDate = formatedDate.replace("yyyy", dateToFormat.getFullYear());
        formatedDate = formatedDate.replace("M", dateToFormat.getMonth() + 1);
        formatedDate = formatedDate.replace("d", dateToFormat.getDate());
        formatedDate = formatedDate.replace("yy", dateToFormat.getFullYear().toString().substring(2));
        return formatedDate;
    };
    imod.Date.isValid = function (date) {
        if (!date || Object.prototype.toString.call(date) !== "[object Date]") {
            return false;
        }
        // An invalid date object returns NaN for getTime() and NaN is the only
        // object not strictly equal to itself.
        return date.getTime() === date.getTime();
    };

    if (!imod.Accessibility) imod.Accessibility = {};
    imod.Accessibility.Enable508SkipNav = function (target) {

        if (!target) {
            console.warn('Enable508SkipNav - initalized without a valid target');
            return;
        }

        console.log('Enable508SkipNav - adding link to body');
        jQuery('<div id="imod-skip"><a href="#main">Skip to Main Content</a></div>').prependTo('body');

        // FOR CONTENT SKIP ACTION
        // bind a click event to the 'skip' link

        jQuery("#imod-skip").on('click', 'a', function (e) {

            e.preventDefault();

            console.log('Enable508SkipNav - handling click');

            // prepend the leading hash and declare
            // the content we're skipping to
            var skipTo = (target[0] !== '#' ? "#" : '') + target;

            // Setting 'tabindex' to -1 takes an element out of normal
            // tab flow but allows it to be focused via javascript
            jQuery(skipTo).attr('tabindex', -1).on('blur focusout', function () {

                // when focus leaves this element,
                // remove the tabindex attribute
                jQuery(this).removeAttr('tabindex');

            }).focus()				// focus on the content container
			[0].scrollIntoView();	// put it where it goes
        });
    }

    String.prototype.IsNullOrEmpty = function () {
        var value = this,
			isNullOrEmpty = false;
        if (value.length === '') {
            isNullOrEmpty = true;
        }
        return isNullOrEmpty;
    };
    String.prototype.Format = function (args) {
        var template = this;
        return template.replace(String.prototype.Format.regex, function (item) {
            var initialValue = parseInt(item.substring(1, item.length - 1));
            var replace;
            if (initialValue >= 0) {
                replace = args[initialValue];
            }
            else if (initialValue === -1) {
                replace = "{";
            }
            else if (initialValue === -2) {
                replace = "}";
            } else {
                replace = "";
            }
            return replace;
        });
    };
    String.prototype.Format.regex = new RegExp("{-?[0-9]+}", "g");

    jQuery(function () {
        jQuery("span.imod-admin-nav-new-email-marketing-reporting").parent().css("text-decoration", "none");
    });

    //**DO NOT PUT ANYTHING BELOW THIS LINE**
}

if (window.IModController) imod.log("imodules_common_1_0_2.js");


// ~/scripts/Common/AjaxRunner.js
/// <reference path="~/_references.js" />

function AjaxResponseParser(sPrmResponse) {
	var Response = {};
	Response.Status = "";
	Response.Title = "";
	Response.Message = "";
	Response.RowsAffected = 0;
	Response.NewId = 0;
	Response.Format = "html";
	
	this.Get = Get;
	this.Set = Set;
	this.Parse = Parse;
	
	Parse(sPrmResponse);
	
	function Parse(sPrmResponse) {
		var oXml = new imod.Xml.XmlDocument(sPrmResponse);
		var oBuffer = imod.Xml.GetFEValue("status", oXml);
		if (oBuffer != null)
			Response.Status = oBuffer;
		oBuffer = imod.Xml.GetFEValue("title", oXml);
		if (oBuffer != null)
			Response.Title = oBuffer;
		oBuffer = imod.Xml.GetFEValue("message", oXml);
		if (oBuffer != null)
			Response.Message = oBuffer;
		oBuffer = imod.Xml.GetFEValue("rowsaffected", oXml);
		if (oBuffer != null)
			Response.RowsAffected = imod.General.ParseInt(oBuffer);
		oBuffer = imod.Xml.GetFEValue("newid", oXml);
		if (oBuffer != null)
			Response.NewId = imod.General.ParseInt(oBuffer);
		oBuffer = imod.Xml.GetFEValue("format", oXml);
		if (oBuffer != null)
			Response.Format = oBuffer;
	}
	
	function Get(sPrmKey) {
		return Response[sPrmKey];
	}
	
	function Set(sPrmKey, oPrmValue) {
		Response[sPrmKey] = oPrmValue;
	}
	
	
}

function imod_BuildFromHtml(sPrmHtml, sPrmWrapper, oPrmTarget, bPrmExecuteScripts) {
	var o = document.createElement(sPrmWrapper);
	oPrmTarget.appendChild(o);
	o.innerHTML = sPrmHtml;

	if (bPrmExecuteScripts)
		imod_ExecuteElementScripts(o);
}

function imod_ExecuteElementScripts(o, sPrmFrame) {
	var aryScripts = o.getElementsByTagName("script");
	for (var i = 0; i < aryScripts.length; i++) {
		if (aryScripts[i].src != null && aryScripts[i].src.length > 0)
			imod_ExecuteRemoteScript(aryScripts[i].src, sPrmFrame);
		else
			imod_ExecuteScript(aryScripts[i].text, sPrmFrame);
	}
}

function imod_ExecuteScript(sPrmText, sPrmFrame) {
	var scriptNew;
	if (sPrmFrame != null && sPrmFrame.length > 0)
		scriptNew = window.frames[sPrmFrame].document.createElement("script");
	else
		scriptNew = document.createElement("script");
	scriptNew.text = sPrmText;
	if (sPrmFrame != null && sPrmFrame.length > 0) {
		window.frames[sPrmFrame].document.body.appendChild(scriptNew);
		window.frames[sPrmFrame].document.body.removeChild(scriptNew);
	}
	else {
		document.body.appendChild(scriptNew);
		document.body.removeChild(scriptNew);
	}
}

function imod_ExecuteRemoteScript(sPrmUrl, sPrmFrame) {
	var ar = new AjaxRunner();
	ar.Asynchronous = false;
	ar.Url = sPrmUrl;
	var oResponse = ar.Execute();
	if (oResponse.status == 200)
		imod_ExecuteScript(oResponse.responseText, sPrmFrame);
}

function imod_CreateXMLDocument(sPrmXML) {
	var oReturn = null;
	try {
		if (window.DOMParser != null) {
			oReturn = (new DOMParser()).parseFromString(sPrmXML, "text/xml");
		}
		else if (window.ActiveXObject != null) {
			oReturn = new window.ActiveXObject("Microsoft.XMLDOM");
			oReturn.loadXML(sPrmXML);
		}
	}
	catch (E) {
		oReturn = null;
	}
	
	return oReturn;
}

function GetFE(sPrmTagName, oPrmXmlDom) {
	return GetFirstElementByTagName(sPrmTagName, oPrmXmlDom);
}

function GetFirstElementByTagName(sPrmTagName, oPrmXmlDom) {
	var oElements = oPrmXmlDom.getElementsByTagName(sPrmTagName);
	if (oElements != null && oElements.length > 0)
		if (oElements[0] != null && oElements[0].firstChild != null)
			return oElements[0];
	return null;
}

function GetFirstElementDateByTagName(sPrmTagName, oPrmXmlDom) {
	var n = GetFirstElementByTagName(sPrmTagName, oPrmXmlDom);
	if (n != null) {
		var iMonth = n.getAttribute("month");
		var iDay = n.getAttribute("day");
		var iYear = n.getAttribute("year");
		var iHour = n.getAttribute("hour");
		var iMinute = n.getAttribute("minute");
		var iSecond = n.getAttribute("second");
		if (iMonth == 1 && iDay == 1 && iYear == 1)
			return null;
		if (iMonth > 0 && iDay > 0 && iYear > 0) {
			return new Date(iYear, iMonth - 1, iDay, iHour, iMinute, iSecond);
		}
	}
	return null;
}

function GetFEValue(sPrmTagName, oPrmXmlDom) {
	return GetFirstElementValueByTagName(sPrmTagName, oPrmXmlDom);
}

function GetFirstElementValueByTagName(sPrmTagName, oPrmXmlDom) {
	//alert(sPrmTagName);
	var oElements = oPrmXmlDom.getElementsByTagName(sPrmTagName);
	if (oElements != null && oElements.length > 0)
		if (oElements[0] != null && oElements[0].firstChild != null)
			return oElements[0].firstChild.nodeValue;
	return null;
}

function AjaxRunner() {
	this.Url = "";
	this.Querystring = "";
	this.FormValue = "";
	this.SubmitMethod = "GET";
	this.ForceNoCache = true;
	this.CacheEnabled = false;
	this.Cache = {};
	this.ContentOnly = false;
	this.Finished = false;
	this.Asynchronous = true;
	//this.EnvironmentVariables = {};
	
	this.OnOpen = null; //Called when the connection is opened
	this.OnSend = null; //Called when the data is sent
	this.OnReceivePartial = null; //Called whenever partial data is received
	this.OnSuccess = null; //Called when page is completely loaded with no errors, passes a string of the response text
	this.OnFailure = null; //Called when page loads with an error like 404, 500, etc....  Passes a string of the response text and integer that is the page error code
	this.OnNotSupported = null; //Called if a XmlHttp object could not be created
	this.OnPermissionDenied = null; //Called if an error occurred because a connection could not be established
	this.OnError = null; //Called if any JS error happens.  If OnPermissionDenied is set this is event is not fired for permission denied errors.
	this.OnFinished = null; //Called after OnSuccess, OnFailure, OnError, and OnPermissionDenied. (Only one of these will fire, this is good if they all need to do the same thing like clean up an object).
	
	this.Execute = Execute;
	this.AddFormValue = AddFormValue;
		
	function Execute(sPrmKey, oPrmEventArgs) {
		//sPrmKey: if CacheEnabled then this is used to store and find cached values
		//oPrmEventArgs:  A custom object that will be passed to every event method.  This is so you can give the events access to data easily.
		//	an easy to way to use this is ArrayRunner.Execute("", {"var1": "value1", "var2": "value2"})
		//  it will always contain the object AjaxData which will encapsulate basic stuff about the AjaxRunner object at the point execute was ran
		this.Finished = false;
		var bDoIt = true;
		if (oPrmEventArgs == null)
			oPrmEventArgs = {};
		oPrmEventArgs.AjaxData = {};
		oPrmEventArgs.AjaxData.Url = this.Url;
		oPrmEventArgs.AjaxData.Querystring = this.Querystring;
		oPrmEventArgs.AjaxData.Cached = false;
		oPrmEventArgs.AjaxData.CacheKey = sPrmKey;
		if (this.CacheEnabled) {
			if (sPrmKey != null && sPrmKey.length > 0) {
				if (this.Cache[sPrmKey] != null && this.OnSuccess != null) {
					oPrmEventArgs.AjaxData.Cached = true;
					this.OnSuccess(this.Cache[sPrmKey], oPrmEventArgs);
					bDoIt = false;
					this.Finished = true;
				}
			}
		}
		if (bDoIt)
			return AjaxPost(this, sPrmKey, oPrmEventArgs, this.Asynchronous);
		return null;
	}
	
	function AddFormValue(sPrmKey, sPrmValue) {
		if (this.FormValue == null)
			this.FormValue == "";
		this.FormValue += "&" + sPrmKey + "=" + encodeURIComponent(sPrmValue);
		this.SubmitMethod = "POST";
	}
}

function AjaxPost(arData, sPrmKey, oPrmEventArgs, bPrmAsynchronous) {
	var oData = null;
	
	if (window.XMLHttpRequest) {
		//Create object for Firefox and other good browsers
		oData = new XMLHttpRequest();
	}
	else {
		//Try to create object for IE
		try {	
			oData = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (E) {
			oData = null;
		}
	}
	if (oData != null) {
		oData.onreadystatechange = function() {
			switch (oData.readyState) {
				case 0:  //object exists, open not called
					break;
				case 1: //open called, send not called
					if (arData.OnOpen != null)
						arData.OnOpen(oPrmEventArgs);
					break;
				case 2: //send called
					if (arData.OnSend != null)
						arData.OnSend(oPrmEventArgs);
					break;
				case 3: //partial data received
					if (arData.OnReceivePartialData != null)
						arData.OnReceievePartialData(oData.responseText, oPrmEventArgs);
					break;
				case 4: //data received
					
					//alert("save move");
					if (oData.status == 200) {
						//alert("success");
						//Success
						var sResponseText = oData.responseText;
						if (arData.ContentOnly) {
							sResponseText = sResponseText.replace(/<form[\s\S]*?>/gi, "");
						    sResponseText = sResponseText.replace(/<\/form>/gi, "");
							sResponseText = sResponseText.replace(/<input\s+[\s\S]*?name\s*=\s*"__EVENTTARGET"[\s\S]*?\/>/gi, "");
							sResponseText = sResponseText.replace(/<input\s+[\s\S]*?name\s*=\s*"__EVENTARGUMENT"[\s\S]*?\/>/gi, "");
							sResponseText = sResponseText.replace(/<input\s+[\s\S]*?name\s*=\s*"__VIEWSTATE"[\s\S]*?\/>/gi, "");
							sResponseText = sResponseText.replace(/<script\s+[\s\S]*?>\s*<!--\s*function\s+__doPostBack\(eventTarget,\s*eventArgument\)\s*\{[\s\S]*?\/\/\s*-->\s*<\/script>/gi, "");
							sResponseText = sResponseText.replace(/document.write\("[\s\S]*?"\);/gi, "");
						}
							
						if (arData.CacheEnabled && sPrmKey != null && sPrmKey.length > 0)
							arData.Cache[sPrmKey] = sResponseText;
						if (arData.OnSuccess != null) {
							arData.OnSuccess(sResponseText, oPrmEventArgs);
						}
					}
					else {
						//alert("failure");
						//Page errored
						if (arData.OnFailure != null)
							arData.OnFailure(oData.responseText, oData.status, oPrmEventArgs);
					}
					if (arData.OnFinished != null) {
						arData.OnFinished(oPrmEventArgs);
					}
					arData.Finished = true;
					//alert("end save move");
					break;
			}
		};
	    try {
			var sUrl = arData.Url;
			if (arData.Querystring.length > 0) {
				sUrl += (sUrl.indexOf("?") > -1)? "&" : "?";
				sUrl += arData.Querystring;
			}
			if (arData.ForceNoCache) {
				sUrl += (sUrl.indexOf("?") > -1) ? "&" : "?";
				sUrl += Math.random();
			}
			//alert("Connecting: " + sUrl);
			oData.open(arData.SubmitMethod, sUrl, bPrmAsynchronous);
			if (arData.SubmitMethod != null && arData.SubmitMethod.toLowerCase() == "post")
				oData.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            oData.send(arData.FormValue);
		}
		catch (E) {
			var sErrorMsg = (E.message) ? E.message : E;
			
			if (arData.OnPermissionDenied && sErrorMsg.indexOf("Permission denied") == 0) {
				arData.OnPermissionDenied(oPrmEventArgs);
			} 
			else {
				if (arData.OnError != null)
					arData.OnError(E, oPrmEventArgs);
				else
					throw E;
			}
			if (arData.OnFinished != null) {
				arData.OnFinished(oPrmEventArgs);
			}
			arData.Finished = true;
		}
	}
	return oData;
}


if (!window.imod) imod = {};
if (!window.imod.Xml) imod.Xml = {};
imod.Xml.XmlDocument = imod_CreateXMLDocument;
imod.Xml.GetFE = GetFE;
imod.Xml.GetFirstElementByTagName = GetFirstElementByTagName;
imod.Xml.GetFirstElementDateByTagName = GetFirstElementDateByTagName;
imod.Xml.GetFEValue = GetFEValue;
imod.Xml.GetFirstElementValueByTagName = GetFirstElementValueByTagName;

if (!window.imod.Ajax) imod.Ajax = {};
imod.Ajax.AjaxRunner = AjaxRunner;
imod.Ajax.BuildFromHtml = imod_BuildFromHtml;
imod.Ajax.ExecuteElementScripts = imod_ExecuteElementScripts;
imod.Ajax.ExecuteScript = imod_ExecuteScript;
imod.Ajax.ExecuteRemoteScript = imod_ExecuteRemoteScript;
imod.Ajax.AjaxResponseParser = AjaxResponseParser;

if (window.IModController) imod.log("AjaxRunner.js");

// ~/scripts/Common/imod-ani.js
window.imod = window.imod || {};
imod.ani = imod.ani || {};

imod.ani.Init = function() {
	if (imod.ani.AniMan == null)
		imod.ani.AniMan = new imod.ani.AnimationManager();
};

imod.ani.AnimationManager = function() {
	var items = [];
	var processes = 0;
	var timer = null;
	var delay = 33;

	this.Add = Add;
	this.Remove = Remove;

	function Add(k, f, l) {
		if (items[k]) {
		} else {
			items[k] = new imod.ani.AnimationManagerItem(f, l);
			processes++;
			CheckTimer();
		}
	}

	function Remove(k) {
		if (items[k] != null) {
			processes--;
			CheckTimer();
			items[k] = null;
		}
	}

	function CheckTimer() {
		if (processes > 0) {
			if (timer == null)
				timer = setInterval(Step, delay);
		} else {
			if (timer != null) {
				clearInterval(timer);
				timer = null;
			}
		}
	}

	function Step() {
		var n = new Date();
		var ms = n.getTime();
		for (var k in items) {
			if (items[k]) {
				if (!items[k].Execute(ms))
					Remove(k);
			}
		}
	}
};

imod.ani.AnimationManagerItem = function(f, l) {
	var d = new Date();
	var t = d.getTime();
	var p = 0;

	this.Execute = Execute;

	this.P = function() {
		return p;
	};

	function Execute(n) {
		p = (n - t) / l;
		if (p > 1) p = 1;
		f(p);
		return p < 1;
	}
};

imod.ani.Rotate = function(elOrId, startingDegree, degrees, time, onComplete) {
	var el = imod$(elOrId);

	imod.ani.Init();

	var aniKey = (el.id) ? "Rotate.DoRotate:" + el.id : imod.dom.GenerateId("Rotate.DoRotate:", false);

	imod.ani.AniMan.Add(aniKey, DoRotate, time);

	function DoRotate(p) {
		el.style.transform = "rotate(" + (startingDegree + (degrees * p)) + "deg)";
		if (p == 1) {
			if (onComplete) onComplete();
		}
	}

};

imod.ani.Phase = function(elOrId, time, onComplete) {
	var el = elOrId;
	if (!el.tagName) el = document.getElementById(elOrId);

	var fadeOutComplete = function() {
		imod.ani.FadeIn(el, 1000, null, fadeInComplete);
	};

	var fadeInComplete = function() {
		if (onComplete) onComplete();
	};

	imod.ani.FadeOut(el, 1000, false, fadeOutComplete);
};


imod.ani.Appear = function(elOrId, time, displayBlockOnStart, onComplete) {
	if (time == null) time = 600;
	var el = elOrId;
	if (!el.tagName) el = document.getElementById(elOrId);

	el.style.opacity = "0";
	el.style.filter = "alpha(opacity=0)";


	var scrollComplete = function() {
		imod.ani.FadeIn(el, time / 2, displayBlockOnStart, fadeComplete);
	};

	var fadeComplete = function() {
		el.style.opacity = "";
		if (onComplete) onComplete();
	};

	imod.ani.ScrollOpen(el, scrollComplete, null, null, time / 2);
};

imod.ani.Disappear = function(elOrId, time, displayNoneOnComplete, onComplete) {
	if (time == null) time = 600;

	var el = elOrId;
	if (!el.tagName) el = document.getElementById(elOrId);

	var fadeComplete = function() {
		imod.ani.ScrollClose(el, scrollComplete, null, null, time / 2);
	};

	var scrollComplete = function() {
		el.style.opacity = "";
		if (displayNoneOnComplete) el.style.display = "none";
		if (onComplete) onComplete();
	};

	imod.ani.FadeOut(el, time / 2, false, fadeComplete);
};


imod.ani.FadeOut = function(el, time, displayNoneOnComplete, onComplete) {
	imod.ani.Init();

	imod.dom.SetOpacity(el, 1);

	var aniKey = (el.id) ? "FadeOut.DoFade:" + el.id : imod.dom.GenerateId("FadeOut.DoFade:", false);

	imod.ani.AniMan.Add(aniKey, DoFade, time);

	function DoFade(p) {
		imod.dom.SetOpacity(el, 1 - p);
		if (p == 1) {
			if (displayNoneOnComplete) el.style.display = "none";
			if (onComplete) onComplete();
		}
	}
};

imod.ani.FadeIn = function(el, time, displayBlockOnStart, onComplete, maxOpacity) {
	imod.ani.Init();

	if (!maxOpacity) maxOpacity = 1;
	imod.dom.SetOpacity(el, 0);
	if (displayBlockOnStart) el.style.display = "block";

	var aniKey = (el.id) ? "FadeIn.DoFade:" + el.id : imod.dom.GenerateId("FadeIn.DoFade:", false);

	imod.ani.AniMan.Add(aniKey, DoFade, time);

	function DoFade(p) {
		imod.dom.SetOpacity(el, p * maxOpacity);
		if (p == 1) {
			el.style.opacity = "";
			el.style.filter = "";
			el.style.mozOpacity = "";
			if (onComplete) onComplete();
		}
	}
};

imod.ani.FadeSwap = function(elOrIdHide, elOrIdShow, displayNoneOnComplete, displayBlockOnComplete) {
	var elHide = imod$(elOrIdHide);
	var elShow = imod$(elOrIdShow);

	imod.ani.FadeOut(elHide, 150, displayNoneOnComplete,
		function() {
			imod.ani.FadeIn(elShow, 300, displayBlockOnComplete);
		}
	);

};


imod.ani.SlideIn = function(elOrId, onComplete, maxMilliseconds, displayBlockOnStart) {
	var el = imod$(elOrId);
	imod.ani.Init();

	if (displayBlockOnStart) el.style.display = "block";
	startPos = -1 * el.offsetWidth;
	el.style.marginLeft = startPos + "px";

	var f = function(p) {
		if (p == 1) {
			el.style.marginLeft = "";
			if (onComplete) onComplete();
		} else {
			el.style.marginLeft = (startPos * (1 - p)) + "px";
		}
	};

	if (!maxMilliseconds) maxMilliseconds = 300;

	var aniKey = (el.id) ? "SlideIn:" + el.id : imod.dom.GenerateId("SlideIn:", false);
	imod.ani.AniMan.Add(aniKey, f, maxMilliseconds);
};


imod.ani.SlideOut = function(elOrId, onComplete, maxMilliseconds, displayNoneOnComplete) {
	var el = imod$(elOrId);
	imod.ani.Init();

	var targetLeftMargin = -1 * el.offsetWidth;

	var f = function(p) {
		if (p == 1) {
			if (displayNoneOnComplete) el.style.display = "none";
			if (onComplete) onComplete();
		} else {
			el.style.marginLeft = (p * targetLeftMargin) + "px";
		}
	};

	if (!maxMilliseconds) maxMilliseconds = 300;

	var aniKey = (el.id) ? "SlideOut:" + el.id : imod.dom.GenerateId("SlideOut:", false);
	imod.ani.AniMan.Add(aniKey, f, maxMilliseconds);
};
imod.ani.ScrollOpen = function(el, onComplete, onFrameChange, horizontal, maxMilliseconds) {
	if (el.indexOf) el = imod$(el);
	imod.ani.Init();

	var overflow = el.style.overflow;
	el.style.overflow = "hidden";
	var max;

	el.style.visibility = "hidden";
	el.style.display = "block";
	if (horizontal) {
		max = el.offsetWidth;
		el.style.width = "0px";
	} else {
		max = el.offsetHeight;
		el.style.height = "0px";
	}

	el.style.visibility = "visible";

	var f = function(p) {
		if (p == 1) {
			if (horizontal)
				el.style.width = "";
			else
				el.style.height = "";
			el.style.height = "";
			el.style.overflow = overflow;
			if (onComplete) onComplete();
		} else {
			if (horizontal)
				el.style.width = (p * max) + "px";
			else {
				el.style.height = (p * max) + "px";
			}
		}
		if (onFrameChange) onFrameChange(p);
	};

	if (!maxMilliseconds) maxMilliseconds = 300;


	var aniKey = (el.id) ? "ScrollOpen:" + el.id : imod.dom.GenerateId("ScrollOpen:", false);
	imod.ani.AniMan.Add(aniKey, f, maxMilliseconds);
};

imod.ani.ScrollClose = function(el, onComplete, onFrameChange, horizontal, maxMilliseconds) {
	if (el.indexOf) el = imod$(el);
	imod.ani.Init();

	var max;

	var overflow = el.style.overflow;
	el.style.overflow = "hidden";

	if (horizontal) {
		max = el.offsetWidth;
		el.style.height = el.offsetHeight + "px";
	} else {
		max = el.offsetHeight;
	}

	var f = function(p) {
		if (p == 1) {
			if (horizontal)
				el.style.width = "";
			else
				el.style.height = "";

			el.style.display = "none";
			el.style.overflow = overflow;
			if (onComplete) {
				onComplete();
			}
		} else {
			if (horizontal)
				el.style.width = (max - (p * max)) + "px";
			else {
				el.style.height = (max - (p * max)) + "px";
			}
		}
		if (onFrameChange) onFrameChange(p);
	};

	if (!maxMilliseconds) maxMilliseconds = 200;
	var aniKey = (el.id) ? "ScrollClose:" + el.id : imod.dom.GenerateId("ScrollClose:", false);
	imod.ani.AniMan.Add(aniKey, f, maxMilliseconds);
};

imod.ani.Expand = function(el, onComplete, onFrameChange, horizontal) {
	if (el.indexOf) el = imod$(el);
	imod.ani.Init();

	var overflow = el.style.overflow;
	el.style.overflow = "hidden";
	var max;

	el.style.visibility = "hidden";
	el.style.display = "block";
	var prop = "";
	if (horizontal) {
		max = el.offsetWidth;
		prop = "width";
	} else {
		max = el.offsetHeight;
		prop = "height";
	}
	el.style[prop] = "0px";

	el.style.visibility = "visible";

	var x = max;
	var steps = [];
	while (x > 0) {
		steps.push(x);
		x = Math.floor(x / 4);
	}
	var i = steps.length;

	var f = function() {
		if (i > 0) {
			el.style[prop] = steps[i] + "px";
			i--;
			setTimeout(f, 30);
		} else {
			el.style[prop] = "";
			el.style.overflow = overflow;
			if (onComplete) onComplete();
		}
	};

	setTimeout(f, 30);
};

imod.ani.Collapse = function(el, onComplete, onFrameChange, horizontal) {
	if (el.indexOf) el = imod$(el);
	imod.ani.Init();

	var max;

	var overflow = el.style.overflow;
	el.style.overflow = "hidden";

	var prop = "";
	if (horizontal) {
		max = el.offsetWidth;
		prop = "width";
		el.style.height = el.offsetHeight + "px";
	} else {
		max = el.offsetHeight;
		prop = "height";
	}


	var x = max;
	var steps = [];
	while (x > 0) {
		steps.push(x);
		x = Math.floor(x / 4);
	}
	var i = 0;


	var f = function() {
		if (i < steps.length) {
			el.style[prop] = steps[i] + "px";
			i++;
			setTimeout(f, 30);
		} else {
			el.style[prop] = "";
			el.style.display = "none";
			el.style.overflow = overflow;
			if (onComplete) onComplete();
		}
	};

	setTimeout(f, 30);
};


imod.ani.StopFade = function(elOrId) {
	var id = (elOrId.id) ? elOrId.id : elOrId;
	imod.ani.AniMan.Remove("FadeIn.DoFade:" + id);
	imod.ani.AniMan.Remove("FadeOut.DoFade:" + id);
};
imod.ani.ScrollTo = function(elOrId, maxAniTimeInMS) {
	var el = elOrId;
	if (!el.id) el = document.getElementById(elOrId);

	var targetPos = imod.dom.GetPosition(el);

	var startPos =
	{
		x: (document.body.scrollLeft > document.documentElement.scrollLeft) ? document.body.scrollLeft : document.documentElement.scrollLeft,
		y: (document.body.scrollTop > document.documentElement.scrollTop) ? document.body.scrollTop : document.documentElement.scrollTop
	};

	var f = function(p) {
		if (p >= 1) {
			window.scrollTo(targetPos.x, targetPos.y);
		} else {
			var x = startPos.x * (1 - p) + targetPos.x * p;
			var y = startPos.y * (1 - p) + targetPos.y * p;
			window.scrollTo(x, y);
		}
	};

	if (!maxAniTimeInMS) maxAniTimeInMS = 250;

	if (el.id) {
		imod.ani.AniMan.Add("ScrollTo:" + el.id, f, maxAniTimeInMS);
	} else {
		imod.ani.AniMan.Add("ScrollTo:" + new Date().getTime(), f, maxAniTimeInMS);
	}
};

imod.ani.ChangeColor = function(elOrId, colorStart, colorEnd, styleProperty, time, onComplete) {
	var el = imod$(elOrId);
	if (!styleProperty) styleProperty = "color";
	imod.ani.Init();

	var f = function(p) {
		el.style[styleProperty] = (p == 1) ? colorEnd.toString() : colorStart.Multiply(1 - p).Add(colorEnd.Multiply(p)).toString();
		if (p == 1) {
			if (onComplete) onComplete();
		}
	};

	if (!time) time = 300;

	var aniKey = (el.id) ? "ChangeColor:" + el.id : imod.dom.GenerateId("ChangeColor:", false);
	imod.ani.AniMan.Add(aniKey, f, time);
};


imod.ani.Accordion = function() {
	var items = new Array();

	for (var i = 0; i < arguments.length; i++) {
		items.push(new imod.ani.AccordionItem(this, arguments[i]));
	}

	var current = items[0];
	current.Expand(true);

	this.ReportClick = ReportClick;

	function ReportClick(reporter) {
		if (current != reporter) {
			current.Collapse();
			current = reporter;
			current.Expand();
		} else {
			current.Toggle();
			//special binary mode:  if there are only 2 panels, keep one open always
			if ((!current.IsExpanded()) && items.length == 2) {
				for (var i = 0; i < items.length; i++) {
					if (current != items[i]) {
						current = items[i];
						current.Expand();
						break;
					}
				}
			}
		}
	}
};

imod.ani.AccordionItem = function(o, s) {
	var parent = o;
	var target = imod$(s);
	var content = imod$(s + "_content");
	var header_collapsed = imod$(s + "Header_c");
	var header_expanded = imod$(s + "Header_e");
	var has_headers = (header_collapsed && header_expanded);
	var base = this;
	var expanded = false;
	var ani_time = 350;
	var start_height = 0;

	imod.dom.AddHandler(target, "click", Click);
	imod.ani.Init();

	this.Click = Click;
	this.GetElement = GetElement;
	this.Expand = Expand;
	this.Collapse = Collapse;
	this.Toggle = Toggle;
	this.IsExpanded = IsExpanded;

	function IsExpanded() {
		return expanded;
	}

	function Click() {
		parent.ReportClick(base);
	}

	function GetElement() {
		return element;
	}

	function Toggle() {
		if (expanded)
			Collapse();
		else
			Expand();
	}

	function Expand(bAlreadyOpen) {
		if (!bAlreadyOpen) {
			if (!expanded) {
				imod.ani.AniMan.Remove(content.id);
				start_height = content.offsetHeight;
				imod.ani.AniMan.Add(content.id, do_expand, ani_time);
			}
		}
		expanded = true;
		HandleHeaders();
	}

	function do_expand(p) {
		var h;
		if (p < 1) {
			h = (content.scrollHeight - start_height) * p + start_height;
		} else {
			h = content.scrollHeight;
		}
		content.style.height = h + "px";
	}

	function do_collapse(p) {
		var h = 0;
		if (p < 1) {
			h = (0 - start_height) * p + start_height;
		}
		content.style.height = h + "px";
	}

	function Resize() {
	}

	function Collapse() {
		if (expanded) {
			imod.ani.AniMan.Remove(content.id);
			start_height = content.offsetHeight;
			imod.ani.AniMan.Add(content.id, do_collapse, ani_time);
		}
		expanded = false;
		HandleHeaders();
	}

	function HandleHeaders() {
		if (has_headers) {
			if (expanded) {
				imod.dom.Show(header_expanded);
				imod.dom.Hide(header_collapsed);
			} else {
				imod.dom.Hide(header_expanded);
				imod.dom.Show(header_collapsed);
			}
		}
	}
};

imod.ani.Shrink = function(el, onFinish, args, t) {
	var start_height = el.offsetHeight;
	var ani_time = (t != null) ? t : 333;

	imod.ani.Init();
	el.style.overflow = "hidden";
	imod.ani.AniMan.Add(el.id, do_shrink, ani_time);

	function do_shrink(p) {
		var h = 0;
		if (p < 1) {
			h = Math.round((0 - start_height) * p + start_height);
			el.style.height = h + "px";
		} else {
			done();
		}
	}

	function done() {
		imod.ani.AniMan.Remove(el.id);
		if (onFinish)
			onFinish(el, args);
	}
};

if (window.IModController) IModController.scriptLoadedNotification("/scripts/imod-ani.js");

// ~/scripts/features/admin/admin-index.js
var IndexAdminPage = new imod_ASCX();
var BaseWidth;
var BaseHeight;

if (!window.AdminPage) window.AdminPage = new imod_ASCX();

AdminPage.OnLoad = function ()
{
	IndexAdminPage.ResizeWindowDelayed();
};

AdminPage.Logout = function ()
{
	var bConfirm = confirm(AdminPage.Verbiage.Get("[ConfirmLogout]").replace(/<br[^>]*>/gi, "\n"));

	if (bConfirm)
	{
	    imod.Security.Logout();
	}
};

function AdminPageMenuItemClick (sender, eventArgs) {
	if (eventArgs.get_item().get_value() != "clickable") {
		eventArgs.get_item().blur();
		eventArgs.set_cancel(true);
	}
}

AdminPage.ResizeItems = new Array();

AdminPage.RegisterResizeItem = function (clientId, widthOffset, heightOffset, adjustWidth, adjustHeight, isEditor)
{
	AdminPage.ResizeItems.push({"ClientId": clientId, "WidthOffset": widthOffset, "HeightOffset": heightOffset, "AdjustWidth": adjustWidth, "AdjustHeight": adjustHeight, "IsEditor": isEditor});
};

IndexAdminPage.ResizeWindow = function ()
{
	BaseWidth = imod.Browser.ClientWidth();
	var pageInformationElemHeight = imod$("PageInformation") ? imod$("PageInformation").offsetHeight : 0;
	BaseHeight = imod.Browser.ClientHeight() - pageInformationElemHeight - 30;
	for (var i in AdminPage.ResizeItems)
	{
		var ritem = AdminPage.ResizeItems[i];
		if (ritem.IsEditor)
		{
			if ($get(ritem.ClientId))
			{
				// Make sure that the method exists
				if ($get(ritem.ClientId).SetSize)
				{
					ResizeEditorControl(ritem);
				}
				else
				{
					ResizeStandardControl(ritem);
				}
			}
		}
		else
		{
			ResizeStandardControl(ritem);
		}
	}
};

function ResizeStandardControl(ritem){
    if (imod$("NavigationSection")) BaseHeight -= imod$("NavigationSection").offsetHeight;
    if (imod$(ritem.ClientId)) {
        if (ritem.AdjustWidth) imod$(ritem.ClientId).style.width = BaseWidth - ritem.WidthOffset + "px";
        if (ritem.AdjustHeight) imod$(ritem.ClientId).style.height = BaseHeight - ritem.HeightOffset + "px";
    }
}
function ResizeEditorControl(ritem) {
	if (imod$("NavigationSection")) BaseHeight -= imod$("NavigationSection").offsetHeight;
	var width = ritem.AdjustWidth ? BaseWidth - ritem.WidthOffset - 10 : ritem.WidthOffset;
	var height = ritem.AdjustHeight ? BaseHeight - ritem.HeightOffset : ritem.HeightOffset;
	$get(ritem.ClientId).SetSize(width, height);
	if (imod.RolloutFlags.UseAdminTemplate3) {
		jQuery('.active-draft-message-container').css('width', width - 37 + 'px');
	}
}

IndexAdminPage.ResizeWindowDelayed = function ()
{
	setTimeout(IndexAdminPage.ResizeWindow, 1);
};

AdminPage.RevertToMe = function ()
{
	var sRedirect = window.location.toString();
	sRedirect = sRedirect.replace(/[?|&]mid=[^&]*/i, "");
	window.location = sRedirect;
};

AdminPage.OpenHelpWindow = function (url)
{
	imod_OpenWindow(url, 800, 600, 'location=yes,resizable=yes,toolbar=no,scrollbars=yes', 2);
};

IndexAdminPage.ResizeFrame = function ()
{
	//document.getElementById("frmContent");
	var frames = document.getElementsByTagName("iframe");
	var frmContent = null;
	for (var i = 0; i < frames.length; i++)
	{
		if (frames[i].id.indexOf("frmContent") > -1)
		{
			frmContent = frames[i];
			break;
		}
	}
	if (frmContent)
	{
		var iOffset = 33;
		if (imod.Browser.IE) iOffset = 36; //IE8 hack
		frmContent.style.height = (document.documentElement.clientHeight - iOffset) + "px";
	}
};

AdminPage.MenuNav = function ()
{
	return $find(AdminPage.MenuNavId);
};

AdminPage.RightMenuNav = function ()
{
	return $find(AdminPage.RightMenuNavId);
};

AdminPage.CloseMenusTimer = null;
AdminPage.StartCloseMenus = function ()
{
	AdminPage.CloseMenusTimer = setTimeout(AdminPage.CloseMenus, 100);
};

AdminPage.CancelCloseMenus = function ()
{
	clearTimeout(AdminPage.CloseMenusTimer);
};

AdminPage.CloseMenus = function ()
{
	AdminPage.CloseMenuNav();
	AdminPage.CloseRightMenuNav();
};

AdminPage.CloseMenuNav = function ()
{
	AdminPage.MenuNav().close();
};

AdminPage.CloseRightMenuNav = function ()
{
	AdminPage.RightMenuNav().close();
};

IndexAdminPage.SetPageTitle = function (pageTitle)
{
	jQuery('#PageTitleLabel').html(pageTitle);
};

IndexAdminPage.SetPageSubTitle = function (pageSubTitle)
{
	jQuery('#PageSubTitleLabel').html(pageSubTitle);
};


function TimerManager()
{
	var Items = [];
	var Keys = {};
	var Watchers = {};

	this.Create = function (timerName, methodDelegate, delayInMS)
	{
		var timerItem = FindTimer(timerName);
		if (timerItem)
		{
			imod.log("removing old one");
			timerItem.Stop();
			Items.splice(Keys[timerName], 1);
		}

		Keys[timerName] = Items.length;
		Items.push(new TimerItem(timerName, methodDelegate, delayInMS));
	};

	this.FindTimer = FindTimer;

	function FindTimer(timerName)
	{
		if (Keys[timerName] != null)
		{
			if (Keys[timerName] < Items.length)
			{
				return Items[Keys[timerName]];
			}
		}
		return null;
	}

	this.StartWatching = function (timerName, intervalInMS)
	{
		var f = function ()
		{
			switch (FindTimer(timerName).GetStatus())
			{
				case "done":
					imod.log("Watcher detects timer complete, turning watch off for " + timerName);
					StopWatching(timerName);
					break;
				default:
					imod.log(timerName + " time remaining: " + FindTimer(timerName).GetRemainingTimeInMS());
					break;
			}
		};
		Watchers[timerName] = setInterval(f, intervalInMS);
	};

	this.StopWatching = StopWatching;

	function StopWatching(timerName)
	{
		clearInterval(Watchers[timerName]);
		Watchers[timerName] = null;
	}

	function TimerItem(name, methodDelegate, delayInMS)
	{
		this.Name = name;
		var MethodDelegate = methodDelegate;
		var DelayInMS = delayInMS;
		var StartTime = new Date();
		var timerPointer = null;
		var status = "running";

		imod.log("registered TimerItem: " + this.Name);
		imod.log("Timer Delay: " + DelayInMS);
		timerPointer = setTimeout(ExecuteMethodDelegate, DelayInMS);

		this.GetRemainingTimeInMS = function ()
		{
			var currentDate = new Date();
			return (DelayInMS - (currentDate.getTime() - StartTime.getTime()));
		};

		this.Stop = function ()
		{
			clearTimeout(timerPointer);
			timerPointer = null;
		};

		function ExecuteMethodDelegate()
		{
			MethodDelegate();
			status = "done";
		}

		this.GetStatus = function ()
		{
			return status;
		};
	}
}


imod.log("/scripts/features/admin/admin-index.js");


if(window.console) {window.console.log('end bundle DefaultPageBundle');}

