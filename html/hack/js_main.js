! function(d, G, Y) {
	"use strict";

	function _(n) {
		return function() {
			var e, t = arguments[0];
			t = "[" + (n ? n + ":" : "") + t + "] http://errors.angularjs.org/1.2.5/" + (n ? n + "/" : "") + t;
			for(e = 1; e < arguments.length; e++) t = t + (1 == e ? "?" : "&") + "p" + (e - 1) + "=" + encodeURIComponent("function" == typeof arguments[e] ? arguments[e].toString().replace(/ \{[\s\S]*$/, "") : void 0 === arguments[e] ? "undefined" : "string" != typeof arguments[e] ? JSON.stringify(arguments[e]) : arguments[e]);
			return Error(t)
		}
	}

	function T(e) {
		if(null == e || o(e)) return !1;
		var t = e.length;
		return !(1 !== e.nodeType || !t) || (J(e) || K(e) || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}

	function Q(e, t, n) {
		var i;
		if(e)
			if(Z(e))
				for(i in e) "prototype" != i && "length" != i && "name" != i && e.hasOwnProperty(i) && t.call(n, e[i], i);
			else if(e.forEach && e.forEach !== Q) e.forEach(t, n);
		else if(T(e))
			for(i = 0; i < e.length; i++) t.call(n, e[i], i);
		else
			for(i in e) e.hasOwnProperty(i) && t.call(n, e[i], i);
		return e
	}

	function A(e) {
		var t, n = [];
		for(t in e) e.hasOwnProperty(t) && n.push(t);
		return n.sort()
	}

	function p(n) {
		return function(e, t) {
			n(t, e)
		}
	}

	function r() {
		for(var e, t = Ut.length; t;) {
			if(57 == (e = Ut[--t].charCodeAt(0))) return Ut[t] = "A", Ut.join("");
			if(90 != e) return Ut[t] = String.fromCharCode(e + 1), Ut.join("");
			Ut[t] = "0"
		}
		return Ut.unshift("0"), Ut.join("")
	}

	function a(e, t) {
		t ? e.$$hashKey = t : delete e.$$hashKey
	}

	function q(n) {
		var e = n.$$hashKey;
		return Q(arguments, function(e) {
			e !== n && Q(e, function(e, t) {
				n[t] = e
			})
		}), a(n, e), n
	}

	function h(e) {
		return parseInt(e, 10)
	}

	function m(e, t) {
		return q(new(q(function() {}, {
			prototype: e
		})), t)
	}

	function S() {}

	function g(e) {
		return e
	}

	function D(e) {
		return function() {
			return e
		}
	}

	function j(e) {
		return void 0 === e
	}

	function O(e) {
		return void 0 !== e
	}

	function X(e) {
		return null != e && "object" == typeof e
	}

	function J(e) {
		return "string" == typeof e
	}

	function c(e) {
		return "number" == typeof e
	}

	function u(e) {
		return "[object Date]" === It.call(e)
	}

	function K(e) {
		return "[object Array]" === It.call(e)
	}

	function Z(e) {
		return "function" == typeof e
	}

	function s(e) {
		return "[object RegExp]" === It.call(e)
	}

	function o(e) {
		return e && e.document && e.location && e.alert && e.setInterval
	}

	function f(e) {
		return !(!e || !(e.nodeName || e.on && e.find))
	}

	function b(e, t) {
		if(e.indexOf) return e.indexOf(t);
		for(var n = 0; n < e.length; n++)
			if(t === e[n]) return n;
		return -1
	}

	function w(e, t) {
		var n = b(e, t);
		return 0 <= n && e.splice(n, 1), t
	}

	function x(e, n) {
		if(o(e) || e && e.$evalAsync && e.$watch) throw zt("cpws");
		if(n) {
			if(e === n) throw zt("cpi");
			if(K(e))
				for(var t = n.length = 0; t < e.length; t++) n.push(x(e[t]));
			else {
				for(var i in t = n.$$hashKey, Q(n, function(e, t) {
						delete n[t]
					}), e) n[i] = x(e[i]);
				a(n, t)
			}
		} else(n = e) && (K(e) ? n = x(e, []) : u(e) ? n = new Date(e.getTime()) : s(e) ? n = RegExp(e.source) : X(e) && (n = x(e, {})));
		return n
	}

	function ee(e, t) {
		if(e === t) return !0;
		if(null === e || null === t) return !1;
		if(e != e && t != t) return !0;
		var n, i = typeof e;
		if(i == typeof t && "object" == i) {
			if(!K(e)) {
				if(u(e)) return u(t) && e.getTime() == t.getTime();
				if(s(e) && s(t)) return e.toString() == t.toString();
				if(e && e.$evalAsync && e.$watch || t && t.$evalAsync && t.$watch || o(e) || o(t) || K(t)) return !1;
				for(n in i = {}, e)
					if("$" !== n.charAt(0) && !Z(e[n])) {
						if(!ee(e[n], t[n])) return !1;
						i[n] = !0
					}
				for(n in t)
					if(!i.hasOwnProperty(n) && "$" !== n.charAt(0) && t[n] !== Y && !Z(t[n])) return !1;
				return !0
			}
			if(!K(t)) return !1;
			if((i = e.length) == t.length) {
				for(n = 0; n < i; n++)
					if(!ee(e[n], t[n])) return !1;
				return !0
			}
		}
		return !1
	}

	function v() {
		return G.securityPolicy && G.securityPolicy.isActive || G.querySelector && !(!G.querySelector("[ng-csp]") && !G.querySelector("[data-ng-csp]"))
	}

	function te(e, t) {
		var n = 2 < arguments.length ? Pt.call(arguments, 2) : [];
		return !Z(t) || t instanceof RegExp ? t : n.length ? function() {
			return arguments.length ? t.apply(e, n.concat(Pt.call(arguments, 0))) : t.apply(e, n)
		} : function() {
			return arguments.length ? t.apply(e, arguments) : t.call(e)
		}
	}

	function n(e, t) {
		var n = t;
		return "string" == typeof e && "$" === e.charAt(0) ? n = Y : o(t) ? n = "$WINDOW" : t && G === t ? n = "$DOCUMENT" : t && t.$evalAsync && t.$watch && (n = "$SCOPE"), n
	}

	function C(e, t) {
		return void 0 === e ? Y : JSON.stringify(e, n, t ? "  " : null)
	}

	function y(e) {
		return J(e) ? JSON.parse(e) : e
	}

	function $(e) {
		return e && 0 !== e.length ? e = !("f" == (e = Ot("" + e)) || "0" == e || "false" == e || "no" == e || "n" == e || "[]" == e) : e = !1, e
	}

	function ne(e) {
		e = Dt(e).clone();
		try {
			e.empty()
		} catch(e) {}
		var t = Dt("<div>").append(e).html();
		try {
			return 3 === e[0].nodeType ? Ot(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(e, t) {
				return "<" + Ot(t)
			})
		} catch(e) {
			return Ot(t)
		}
	}

	function l(e) {
		try {
			return decodeURIComponent(e)
		} catch(e) {}
	}

	function k(e) {
		var t, n, i = {};
		return Q((e || "").split("&"), function(e) {
			e && (t = e.split("="), O(n = l(t[0])) && (e = !O(t[1]) || l(t[1]), i[n] ? K(i[n]) ? i[n].push(e) : i[n] = [i[n], e] : i[n] = e))
		}), i
	}

	function E(e) {
		var n = [];
		return Q(e, function(e, t) {
			K(e) ? Q(e, function(e) {
				n.push(P(t, !0) + (!0 === e ? "" : "=" + P(e, !0)))
			}) : n.push(P(t, !0) + (!0 === e ? "" : "=" + P(e, !0)))
		}), n.length ? n.join("&") : ""
	}

	function M(e) {
		return P(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
	}

	function P(e, t) {
		return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, t ? "%20" : "+")
	}

	function F(t, n) {
		var i = function() {
				if((t = Dt(t)).injector()) {
					var e = t[0] === G ? "document" : ne(t);
					throw zt("btstrpd", e)
				}
				return(n = n || []).unshift(["$provide", function(e) {
					e.value("$rootElement", t)
				}]), n.unshift("ng"), (e = ge(n)).invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(e, t, n, i, r) {
					e.$apply(function() {
						t.data("$injector", i), n(t)(e)
					})
				}]), e
			},
			e = /^NG_DEFER_BOOTSTRAP!/;
		if(d && !e.test(d.name)) return i();
		d.name = d.name.replace(e, ""), Nt.resumeBootstrap = function(e) {
			Q(e, function(e) {
				n.push(e)
			}), i()
		}
	}

	function ie(e, n) {
		return n = n || "_", e.replace(Lt, function(e, t) {
			return(t ? n : "") + e.toLowerCase()
		})
	}

	function re(e, t, n) {
		if(!e) throw zt("areq", t || "?", n || "required");
		return e
	}

	function I(e, t, n) {
		return n && K(e) && (e = e[e.length - 1]), re(Z(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
	}

	function z(e, t) {
		if("hasOwnProperty" === e) throw zt("badname", t)
	}

	function N(e, t, n) {
		if(!t) return e;
		for(var i, r = e, a = (t = t.split(".")).length, s = 0; s < a; s++) i = t[s], e && (e = (r = e)[i]);
		return !n && Z(e) ? te(r, e) : e
	}

	function U(e) {
		var t = e[0];
		if(t === (e = e[e.length - 1])) return Dt(t);
		var n = [t];
		do {
			if(!(t = t.nextSibling)) break;
			n.push(t)
		} while (t !== e);
		return Dt(n)
	}

	function R(e) {
		return e.replace(Qt, function(e, t, n, i) {
			return i ? n.toUpperCase() : n
		}).replace(Xt, "Moz$1")
	}

	function e(e, c, u, d) {
		function t(e) {
			var t, n, i, r, a, s, o = u && e ? [this.filter(e)] : [this],
				l = c;
			if(!d || null != e)
				for(; o.length;)
					for(n = 0, i = (t = o.shift()).length; n < i; n++)
						for(r = Dt(t[n]), l ? r.triggerHandler("$destroy") : l = !l, a = 0, r = (s = r.children()).length; a < r; a++) o.push(Et(s[a]));
			return f.apply(this, arguments)
		}
		var f = (f = Et.fn[e]).$original || f;
		t.$original = f, Et.fn[e] = t
	}

	function L(e) {
		if(e instanceof L) return e;
		if(!(this instanceof L)) {
			if(J(e) && "<" != e.charAt(0)) throw Jt("nosel");
			return new L(e)
		}
		if(J(e)) {
			var t = G.createElement("div");
			t.innerHTML = "<div>&#160;</div>" + e, t.removeChild(t.firstChild), ce(this, t.childNodes), Dt(G.createDocumentFragment()).append(this)
		} else ce(this, e)
	}

	function ae(e) {
		return e.cloneNode(!0)
	}

	function H(e) {
		i(e);
		var t = 0;
		for(e = e.childNodes || []; t < e.length; t++) H(e[t])
	}

	function V(n, e, t, i) {
		if(O(i)) throw Jt("offargs");
		var r = B(n, "events");
		B(n, "handle") && (j(e) ? Q(r, function(e, t) {
			Yt(n, t, e), delete r[t]
		}) : Q(e.split(" "), function(e) {
			j(t) ? (Yt(n, e, r[e]), delete r[e]) : w(r[e] || [], t)
		}))
	}

	function i(e, t) {
		var n = e[Bt],
			i = Vt[n];
		i && (t ? delete Vt[n].data[t] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), V(e)), delete Vt[n], e[Bt] = Y))
	}

	function B(e, t, n) {
		var i = e[Bt];
		i = Vt[i || -1];
		if(!O(n)) return i && i[t];
		i || (e[Bt] = i = ++Wt, i = Vt[i] = {}), i[t] = n
	}

	function W(e, t, n) {
		var i = B(e, "data"),
			r = O(n),
			a = !r && O(t),
			s = a && !X(t);
		if(i || s || B(e, "data", i = {}), r) i[t] = n;
		else {
			if(!a) return i;
			if(s) return i && i[t];
			q(i, t)
		}
	}

	function se(e, t) {
		return !!e.getAttribute && -1 < (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ")
	}

	function oe(t, e) {
		e && t.setAttribute && Q(e.split(" "), function(e) {
			t.setAttribute("class", Rt((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Rt(e) + " ", " ")))
		})
	}

	function le(e, t) {
		if(t && e.setAttribute) {
			var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
			Q(t.split(" "), function(e) {
				e = Rt(e), -1 === n.indexOf(" " + e + " ") && (n += e + " ")
			}), e.setAttribute("class", Rt(n))
		}
	}

	function ce(e, t) {
		if(t) {
			t = t.nodeName || !O(t.length) || o(t) ? [t] : t;
			for(var n = 0; n < t.length; n++) e.push(t[n])
		}
	}

	function ue(e, t) {
		return de(e, "$" + (t || "ngController") + "Controller")
	}

	function de(e, t, n) {
		for(9 == (e = Dt(e))[0].nodeType && (e = e.find("html")), t = K(t) ? t : [t]; e.length;) {
			for(var i = 0, r = t.length; i < r; i++)
				if((n = e.data(t[i])) !== Y) return n;
			e = e.parent()
		}
	}

	function fe(e) {
		for(var t = 0, n = e.childNodes; t < n.length; t++) H(n[t]);
		for(; e.firstChild;) e.removeChild(e.firstChild)
	}

	function pe(e, t) {
		var n = Zt[t.toLowerCase()];
		return n && en[e.nodeName] && n
	}

	function _e(e) {
		var t, n = typeof e;
		return "object" == n && null !== e ? "function" == typeof(t = e.$$hashKey) ? t = e.$$hashKey() : t === Y && (t = e.$$hashKey = r()) : t = e, n + ":" + t
	}

	function he(e) {
		Q(e, this.put, this)
	}

	function me(e) {
		var i, t;
		return "function" == typeof e ? (i = e.$inject) || (i = [], e.length && Q((t = (t = e.toString().replace(an, "")).match(tn))[1].split(nn), function(e) {
			e.replace(rn, function(e, t, n) {
				i.push(n)
			})
		}), e.$inject = i) : K(e) ? (I(e[t = e.length - 1], "fn"), i = e.slice(0, t)) : I(e, "fn", !0), i
	}

	function ge(e) {
		function t(n) {
			return function(e, t) {
				if(!X(e)) return n(e, t);
				Q(e, p(n))
			}
		}

		function n(e, t) {
			if(z(e, "service"), (Z(t) || K(t)) && (t = d.instantiate(t)), !t.$get) throw sn("pget", e);
			return u[e + s] = t
		}

		function i(e, t) {
			return n(e, {
				$get: t
			})
		}

		function r(t, n) {
			function l(e) {
				if(t.hasOwnProperty(e)) {
					if(t[e] === a) throw sn("cdep", o.join(" <- "));
					return t[e]
				}
				try {
					return o.unshift(e), t[e] = a, t[e] = n(e)
				} finally {
					o.shift()
				}
			}

			function r(e, t, n) {
				var i, r, a, s = [],
					o = me(e);
				for(r = 0, i = o.length; r < i; r++) {
					if("string" != typeof(a = o[r])) throw sn("itkn", a);
					s.push(n && n.hasOwnProperty(a) ? n[a] : l(a))
				}
				return e.$inject || (e = e[i]), e.apply(t, s)
			}
			return {
				invoke: r,
				instantiate: function(e, t) {
					var n, i = function() {};
					return i.prototype = (K(e) ? e[e.length - 1] : e).prototype, X(n = r(e, i = new i, t)) || Z(n) ? n : i
				},
				get: l,
				annotate: me,
				has: function(e) {
					return u.hasOwnProperty(e + s) || t.hasOwnProperty(e)
				}
			}
		}
		var a = {},
			s = "Provider",
			o = [],
			c = new he,
			u = {
				$provide: {
					provider: t(n),
					factory: t(i),
					service: t(function(e, t) {
						return i(e, ["$injector", function(e) {
							return e.instantiate(t)
						}])
					}),
					value: t(function(e, t) {
						return i(e, D(t))
					}),
					constant: t(function(e, t) {
						z(e, "constant"), u[e] = t, l[e] = t
					}),
					decorator: function(e, t) {
						var n = d.get(e + s),
							i = n.$get;
						n.$get = function() {
							var e = f.invoke(i, n);
							return f.invoke(t, null, {
								$delegate: e
							})
						}
					}
				}
			},
			d = u.$injector = r(u, function() {
				throw sn("unpr", o.join(" <- "))
			}),
			l = {},
			f = l.$injector = r(l, function(e) {
				return e = d.get(e + s), f.invoke(e.$get, e)
			});
		return Q(function i(e) {
			var r, a, s, o, l = [];
			return Q(e, function(t) {
				if(!c.get(t)) {
					c.put(t, !0);
					try {
						if(J(t))
							for(r = At(t), l = l.concat(i(r.requires)).concat(r._runBlocks), a = r._invokeQueue, s = 0, o = a.length; s < o; s++) {
								var e = a[s],
									n = d.get(e[0]);
								n[e[1]].apply(n, e[2])
							} else Z(t) ? l.push(d.invoke(t)) : K(t) ? l.push(d.invoke(t)) : I(t, "module")
					} catch(e) {
						throw K(t) && (t = t[t.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), sn("modulerr", t, e.stack || e.message || e)
					}
				}
			}), l
		}(e), function(e) {
			f.invoke(e || S)
		}), f
	}

	function ve() {
		var n = !0;
		this.disableAutoScrolling = function() {
			n = !1
		}, this.$get = ["$window", "$location", "$rootScope", function(r, a, e) {
			function t() {
				var e, t, n, i = a.hash();
				i ? (e = s.getElementById(i)) ? e.scrollIntoView() : (t = s.getElementsByName(i), n = null, Q(t, function(e) {
					n || "a" !== Ot(e.nodeName) || (n = e)
				}), (e = n) ? e.scrollIntoView() : "top" === i && r.scrollTo(0, 0)) : r.scrollTo(0, 0)
			}
			var s = r.document;
			return n && e.$watch(function() {
				return a.hash()
			}, function() {
				e.$evalAsync(t)
			}), t
		}]
	}

	function ye(n, e, s, i) {
		function r(e) {
			try {
				e.apply(null, Pt.call(arguments, 1))
			} finally {
				if(0 === --p)
					for(; _.length;) try {
						_.pop()()
					} catch(e) {
						s.error(e)
					}
			}
		}

		function t() {
			y = null, g != a.url() && (g = a.url(), Q($, function(e) {
				e(a.url())
			}))
		}
		var a = this,
			o = e[0],
			l = n.location,
			c = n.history,
			u = n.setTimeout,
			d = n.clearTimeout,
			f = {};
		a.isMock = !1;
		var p = 0,
			_ = [];
		a.$$completeOutstandingRequest = r, a.$$incOutstandingRequestCount = function() {
			p++
		}, a.notifyWhenNoOutstandingRequests = function(e) {
			Q(m, function(e) {
				e()
			}), 0 === p ? e() : _.push(e)
		};
		var h, m = [];
		a.addPollFn = function(e) {
			var t, n;
			return j(h) && (t = 100, n = u, function e() {
				Q(m, function(e) {
					e()
				}), h = n(e, t)
			}()), m.push(e), e
		};
		var g = l.href,
			v = e.find("base"),
			y = null;
		a.url = function(e, t) {
			return l !== n.location && (l = n.location), e ? g != e ? (g = e, i.history ? t ? c.replaceState(null, "", e) : (c.pushState(null, "", e), v.attr("href", v.attr("href"))) : (y = e, t ? l.replace(e) : l.href = e), a) : void 0 : y || l.href.replace(/%27/g, "'")
		};
		var $ = [],
			b = !1;
		a.onUrlChange = function(e) {
			return b || (i.history && Dt(n).on("popstate", t), i.hashchange ? Dt(n).on("hashchange", t) : a.addPollFn(t), b = !0), $.push(e), e
		}, a.baseHref = function() {
			var e = v.attr("href");
			return e ? e.replace(/^https?\:\/\/[^\/]*/, "") : ""
		};
		var w = {},
			x = "",
			C = a.baseHref();
		a.cookies = function(e, t) {
			var n, i, r, a;
			if(!e) {
				if(o.cookie !== x)
					for(n = (x = o.cookie).split("; "), w = {}, r = 0; r < n.length; r++) 0 < (a = (i = n[r]).indexOf("=")) && (e = unescape(i.substring(0, a)), w[e] === Y && (w[e] = unescape(i.substring(a + 1))));
				return w
			}
			t === Y ? o.cookie = escape(e) + "=;path=" + C + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : J(t) && (4096 < (n = (o.cookie = escape(e) + "=" + escape(t) + ";path=" + C).length + 1) && s.warn("Cookie '" + e + "' possibly not set or overflowed because it was too large (" + n + " > 4096 bytes)!"))
		}, a.defer = function(e, t) {
			var n;
			return p++, n = u(function() {
				delete f[n], r(e)
			}, t || 0), f[n] = !0, n
		}, a.defer.cancel = function(e) {
			return !!f[e] && (delete f[e], d(e), r(S), !0)
		}
	}

	function $e() {
		this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, i) {
			return new ye(e, i, t, n)
		}]
	}

	function be() {
		this.$get = function() {
			function e(e, t) {
				function n(e) {
					e != c && (u ? u == e && (u = e.n) : u = e, i(e.n, e.p), i(e, c), (c = e).n = null)
				}

				function i(e, t) {
					e != t && (e && (e.p = t), t && (t.n = e))
				}
				if(e in d) throw _("$cacheFactory")("iid", e);
				var r = 0,
					a = q({}, t, {
						id: e
					}),
					s = {},
					o = t && t.capacity || Number.MAX_VALUE,
					l = {},
					c = null,
					u = null;
				return d[e] = {
					put: function(e, t) {
						if(n(l[e] || (l[e] = {
								key: e
							})), !j(t)) return e in s || r++, s[e] = t, o < r && this.remove(u.key), t
					},
					get: function(e) {
						var t = l[e];
						if(t) return n(t), s[e]
					},
					remove: function(e) {
						var t = l[e];
						t && (t == c && (c = t.p), t == u && (u = t.n), i(t.n, t.p), delete l[e], delete s[e], r--)
					},
					removeAll: function() {
						s = {}, r = 0, l = {}, c = u = null
					},
					destroy: function() {
						l = a = s = null, delete d[e]
					},
					info: function() {
						return q({}, a, {
							size: r
						})
					}
				}
			}
			var d = {};
			return e.info = function() {
				var n = {};
				return Q(d, function(e, t) {
					n[t] = e.info()
				}), n
			}, e.get = function(e) {
				return d[e]
			}, e
		}
	}

	function we() {
		this.$get = ["$cacheFactory", function(e) {
			return e("templates")
		}]
	}

	function xe(n, t) {
		var d = {},
			f = "Directive",
			S = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
			k = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
			l = /^(on[a-z]+|formaction)$/;
		this.directive = function e(s, t) {
			return z(s, "directive"), J(s) ? (re(t, "directiveFactory"), d.hasOwnProperty(s) || (d[s] = [], n.factory(s + f, ["$injector", "$exceptionHandler", function(i, r) {
				var a = [];
				return Q(d[s], function(e, t) {
					try {
						var n = i.invoke(e);
						Z(n) ? n = {
							compile: D(n)
						} : !n.compile && n.link && (n.compile = D(n.link)), n.priority = n.priority || 0, n.index = t, n.name = n.name || s, n.require = n.require || n.controller && n.name, n.restrict = n.restrict || "A", a.push(n)
					} catch(e) {
						r(e)
					}
				}), a
			}])), d[s].push(t)) : Q(s, p(e)), this
		}, this.aHrefSanitizationWhitelist = function(e) {
			return O(e) ? (t.aHrefSanitizationWhitelist(e), this) : t.aHrefSanitizationWhitelist()
		}, this.imgSrcSanitizationWhitelist = function(e) {
			return O(e) ? (t.imgSrcSanitizationWhitelist(e), this) : t.imgSrcSanitizationWhitelist()
		}, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(u, E, A, e, t, j, O, a, n, b, i, s) {
			function M(s, e, t, n, i) {
				s instanceof Dt || (s = Dt(s)), Q(s, function(e, t) {
					3 == e.nodeType && e.nodeValue.match(/\S+/) && (s[t] = Dt(e).wrap("<span></span>").parent()[0])
				});
				var o = w(s, e, s, t, n, i);
				return function(e, t, n) {
					re(e, "scope");
					var i = t ? Kt.clone.call(s) : s;
					Q(n, function(e, t) {
						i.data("$" + t + "Controller", e)
					}), n = 0;
					for(var r = i.length; n < r; n++) {
						var a = i[n];
						1 != a.nodeType && 9 != a.nodeType || i.eq(n).data("$scope", e)
					}
					return P(i, "ng-scope"), t && t(i, e), o && o(e, i, i), i
				}
			}

			function P(e, t) {
				try {
					e.addClass(t)
				} catch(e) {}
			}

			function w(e, f, t, n, i, r) {
				for(var a, s, o, p = [], l = 0; l < e.length; l++) s = new B, a = (r = (a = F(e[l], [], s, 0 === l ? n : Y, i)).length ? C(a, e[l], s, f, t, null, [], [], r) : null) && r.terminal || !e[l].childNodes || !e[l].childNodes.length ? null : w(e[l].childNodes, r ? r.transclude : f), p.push(r), p.push(a), o = o || r || a, r = null;
				return o ? function(e, t, n, i) {
					var r, a, s, o, l, c, u, d = [];
					for(l = 0, c = t.length; l < c; l++) d.push(t[l]);
					for(u = l = 0, c = p.length; l < c; u++) a = d[u], t = p[l++], r = p[l++], s = Dt(a), t ? (t.scope ? (o = e.$new(), s.data("$scope", o), P(s, "ng-scope")) : o = e, (s = t.transclude) || !i && f ? t(r, o, a, n, x(e, s || f)) : t(r, o, a, n, i)) : r && r(e, a.childNodes, Y, i)
				} : null
			}

			function x(r, a) {
				return function(e, t, n) {
					var i = !1;
					return e || (i = (e = r.$new()).$$transcluded = !0), t = a(e, t, n), i && t.on("$destroy", te(e, e.$destroy)), t
				}
			}

			function F(e, t, n, i, r) {
				var a, s, o, l, c = n.$attr;
				switch(e.nodeType) {
					case 1:
						var u, d, f;
						v(t, Ce(jt(e).toLowerCase()), "E", i, r);
						for(var p = 0, _ = (a = e.attributes) && a.length; p < _; p++) {
							var h = !1,
								m = !1;
							if(u = a[p], !qt || 8 <= qt || u.specified) {
								f = Ce(d = u.name), T.test(f) && (d = ie(f.substr(6), "-"));
								var g = f.replace(/(Start|End)$/, "");
								f === g + "Start" && (m = (h = d).substr(0, d.length - 5) + "end", d = d.substr(0, d.length - 6)), c[f = Ce(d.toLowerCase())] = d, n[f] = u = Rt(qt && "href" == d ? decodeURIComponent(e.getAttribute(d, 2)) : u.value), pe(e, f) && (n[f] = !0), $(e, t, u, f), v(t, f, "A", i, r, h, m)
							}
						}
						if(J(e = e.className) && "" !== e)
							for(; a = k.exec(e);) v(t, f = Ce(a[2]), "C", i, r) && (n[f] = Rt(a[3])), e = e.substr(a.index + a[0].length);
						break;
					case 3:
						s = t, o = e.nodeValue, (l = E(o, !0)) && s.push({
							priority: 0,
							compile: D(function(e, t) {
								var n = t.parent(),
									i = n.data("$binding") || [];
								i.push(l), P(n.data("$binding", i), "ng-binding"), e.$watch(l, function(e) {
									t[0].nodeValue = e
								})
							})
						});
						break;
					case 8:
						try {
							(a = S.exec(e.nodeValue)) && (v(t, f = Ce(a[1]), "M", i, r) && (n[f] = Rt(a[2])))
						} catch(e) {}
				}
				return t.sort(y), t
			}

			function I(e, t, n) {
				var i = [],
					r = 0;
				if(t && e.hasAttribute && e.hasAttribute(t))
					do {
						if(!e) throw cn("uterdir", t, n);
						1 == e.nodeType && (e.hasAttribute(t) && r++, e.hasAttribute(n) && r--), i.push(e), e = e.nextSibling
					} while (0 < r);
				else i.push(e);
				return Dt(i)
			}

			function z(a, s, o) {
				return function(e, t, n, i, r) {
					return t = I(t[0], s, o), a(e, t, n, i, r)
				}
			}

			function C(e, _, h, t, n, i, m, g, r) {
				function a(e, t, n, i) {
					e && (n && (e = z(e, n, i)), e.require = c.require, ($ === c || c.$$isolateScope) && (e = V(e, {
						isolateScope: !0
					})), m.push(e)), t && (n && (t = z(t, n, i)), t.require = c.require, ($ === c || c.$$isolateScope) && (t = V(t, {
						isolateScope: !0
					})), g.push(t))
				}

				function v(e, t, n) {
					var i, r = "data",
						a = !1;
					if(J(e)) {
						for(;
							"^" == (i = e.charAt(0)) || "?" == i;) e = e.substr(1), "^" == i && (r = "inheritedData"), a = a || "?" == i;
						if(i = null, n && "data" === r && (i = n[e]), !(i = i || t[r]("$" + e + "Controller")) && !a) throw cn("ctreq", e, u)
					} else K(e) && (i = [], Q(e, function(e) {
						i.push(v(e, t, n))
					}));
					return i
				}

				function s(e, c, t, n, i) {
					var u, r, a, s, o, d, l, f = {};
					if(u = _ === t ? h : function(e, t) {
							for(var n in t = t || {}, e) e.hasOwnProperty(n) && "$$" !== n.substr(0, 2) && (t[n] = e[n]);
							return t
						}(h, new B(Dt(t), h.$attr)), r = u.$$element, $) {
						var p = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
						n = Dt(t), d = c.$new(!0), b && b === $.$$originalDirective ? n.data("$isolateScope", d) : n.data("$isolateScopeNoTemplate", d), P(n, "ng-isolate-scope"), Q($.scope, function(e, t) {
							var n, i, r, a, s = (l = e.match(p) || [])[3] || t,
								o = "?" == l[2],
								l = l[1];
							switch(d.$$isolateBindings[t] = l + s, l) {
								case "@":
									u.$observe(s, function(e) {
										d[t] = e
									}), u.$$observers[s].$$scope = c, u[s] && (d[t] = E(u[s])(c));
									break;
								case "=":
									if(o && !u[s]) break;
									i = j(u[s]), a = i.literal ? ee : function(e, t) {
										return e === t
									}, r = i.assign || function() {
										throw n = d[t] = i(c), cn("nonassign", u[s], $.name)
									}, n = d[t] = i(c), d.$watch(function() {
										var e = i(c);
										return a(e, d[t]) || (a(e, n) ? r(c, e = d[t]) : d[t] = e), n = e
									}, null, i.literal);
									break;
								case "&":
									i = j(u[s]), d[t] = function(e) {
										return i(c, e)
									};
									break;
								default:
									throw cn("iscp", $.name, t, e)
							}
						})
					}
					for(l = i && function(e, t) {
							var n;
							return arguments.length < 2 && (t = e, e = Y), w && (n = f), i(e, t, n)
						}, y && Q(y, function(e) {
							var t, n = {
								$scope: e === $ || e.$$isolateScope ? d : c,
								$element: r,
								$attrs: u,
								$transclude: l
							};
							"@" == (o = e.controller) && (o = u[e.name]), t = O(o, n), f[e.name] = t, w || r.data("$" + e.name + "Controller", t), e.controllerAs && (n.$scope[e.controllerAs] = t)
						}), n = 0, a = m.length; n < a; n++) try {
						(s = m[n])(s.isolateScope ? d : c, r, u, s.require && v(s.require, r, f), l)
					} catch(e) {
						A(e, ne(r))
					}
					for(n = c, $ && ($.template || null === $.templateUrl) && (n = d), e && e(n, t.childNodes, Y, i), n = g.length - 1; 0 <= n; n--) try {
						(s = g[n])(s.isolateScope ? d : c, r, u, s.require && v(s.require, r, f), l)
					} catch(e) {
						A(e, ne(r))
					}
				}
				r = r || {};
				var o, l = -Number.MAX_VALUE,
					y = r.controllerDirectives,
					$ = r.newIsolateScopeDirective,
					b = r.templateDirective;
				r = r.nonTlbTranscludeDirective;
				for(var c, u, d, f, p = !1, w = !1, x = h.$$element = Dt(_), C = t, T = 0, S = e.length; T < S; T++) {
					var k = (c = e[T]).$$start,
						q = c.$$end;
					if(k && (x = I(_, k, q)), d = Y, l > c.priority) break;
					if((d = c.scope) && (o = o || c, c.templateUrl || (L("new/isolated scope", $, c, x), X(d) && ($ = c))), u = c.name, !c.templateUrl && c.controller && (d = c.controller, L("'" + u + "' controller", (y = y || {})[u], c, x), y[u] = c), (d = c.transclude) && (p = !0, c.$$tlb || (L("transclusion", r, c, x), r = c), "element" == d ? (w = !0, l = c.priority, d = I(_, k, q), x = h.$$element = Dt(G.createComment(" " + u + ": " + h[u] + " ")), _ = x[0], H(n, Dt(Pt.call(d, 0)), _), C = M(d, t, l, i && i.name, {
							nonTlbTranscludeDirective: r
						})) : (d = Dt(ae(_)).contents(), x.empty(), C = M(d, t))), c.template)
						if(L("template", b, c, x), d = Z((b = c).template) ? c.template(x, h) : c.template, d = W(d), c.replace) {
							if(i = c, d = Dt("<div>" + Rt(d) + "</div>").contents(), _ = d[0], 1 != d.length || 1 !== _.nodeType) throw cn("tplrt", u, "");
							H(n, x, _), d = F(_, [], S = {
								$attr: {}
							});
							var D = e.splice(T + 1, e.length - (T + 1));
							$ && N(d), e = e.concat(d).concat(D), U(h, S), S = e.length
						} else x.html(d);
					if(c.templateUrl) L("template", b, c, x), (b = c).replace && (i = c), s = R(e.splice(T, e.length - T), x, h, n, C, m, g, {
						controllerDirectives: y,
						newIsolateScopeDirective: $,
						templateDirective: b,
						nonTlbTranscludeDirective: r
					}), S = e.length;
					else if(c.compile) try {
						Z(f = c.compile(x, h, C)) ? a(null, f, k, q) : f && a(f.pre, f.post, k, q)
					} catch(e) {
						A(e, ne(x))
					}
					c.terminal && (s.terminal = !0, l = Math.max(l, c.priority))
				}
				return s.scope = o && !0 === o.scope, s.transclude = p && C, s
			}

			function N(e) {
				for(var t = 0, n = e.length; t < n; t++) e[t] = m(e[t], {
					$$isolateScope: !0
				})
			}

			function v(e, t, n, i, r, a, s) {
				if(t === r) return null;
				if(r = null, d.hasOwnProperty(t))
					for(var o, l = 0, c = (t = u.get(t + f)).length; l < c; l++) try {
						o = t[l], (i === Y || i > o.priority) && -1 != o.restrict.indexOf(n) && (a && (o = m(o, {
							$$start: a,
							$$end: s
						})), e.push(o), r = o)
					} catch(e) {
						A(e)
					}
				return r
			}

			function U(n, i) {
				var r = i.$attr,
					a = n.$attr,
					s = n.$$element;
				Q(n, function(e, t) {
					"$" != t.charAt(0) && (i[t] && (e += ("style" === t ? ";" : " ") + i[t]), n.$set(t, e, !0, r[t]))
				}), Q(i, function(e, t) {
					"class" == t ? (P(s, e), n.class = (n.class ? n.class + " " : "") + e) : "style" == t ? (s.attr("style", s.attr("style") + ";" + e), n.style = (n.style ? n.style + ";" : "") + e) : "$" == t.charAt(0) || n.hasOwnProperty(t) || (n[t] = e, a[t] = r[t])
				})
			}

			function R(s, o, l, c, u, d, f, p) {
				var _, h, m = [],
					g = o[0],
					v = s.shift(),
					y = q({}, v, {
						templateUrl: null,
						transclude: null,
						replace: null,
						$$originalDirective: v
					}),
					$ = Z(v.templateUrl) ? v.templateUrl(o, l) : v.templateUrl;
				return o.empty(), e.get(b.getTrustedResourceUrl($), {
						cache: t
					}).success(function(e) {
						var n, t;
						if(e = W(e), v.replace) {
							if(e = Dt("<div>" + Rt(e) + "</div>").contents(), n = e[0], 1 != e.length || 1 !== n.nodeType) throw cn("tplrt", v.name, $);
							e = {
								$attr: {}
							}, H(c, o, n);
							var i = F(n, [], e);
							X(v.scope) && N(i), s = i.concat(s), U(l, e)
						} else n = g, o.html(e);
						for(s.unshift(y), _ = C(s, n, l, u, o, v, d, f, p), Q(c, function(e, t) {
								e == n && (c[t] = o[0])
							}), h = w(o[0].childNodes, u); m.length;) {
							e = m.shift(), t = m.shift();
							var r = m.shift(),
								a = m.shift();
							i = o[0];
							t !== g && (i = ae(n), H(r, Dt(t), i)), t = _.transclude ? x(e, _.transclude) : a, _(h, e, i, c, t)
						}
						m = null
					}).error(function(e, t, n, i) {
						throw cn("tpload", i.url)
					}),
					function(e, t, n, i, r) {
						m ? (m.push(t), m.push(n), m.push(i), m.push(r)) : _(h, t, n, i, r)
					}
			}

			function y(e, t) {
				var n = t.priority - e.priority;
				return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
			}

			function L(e, t, n, i) {
				if(t) throw cn("multidir", t.name, n.name, e, ne(i))
			}

			function $(i, e, t, r) {
				var a = E(t, !0);
				if(a) {
					if("multiple" === r && "SELECT" === jt(i)) throw cn("selmulti", ne(i));
					e.push({
						priority: 100,
						compile: function() {
							return {
								pre: function(e, t, n) {
									if(t = n.$$observers || (n.$$observers = {}), l.test(r)) throw cn("nodomevents");
									(a = E(n[r], !0, function(e, t) {
										if("srcdoc" == t) return b.HTML;
										var n = jt(e);
										return "xlinkHref" == t || "FORM" == n && "action" == t || "IMG" != n && ("src" == t || "ngSrc" == t) ? b.RESOURCE_URL : void 0
									}(i, r))) && (n[r] = a(e), (t[r] || (t[r] = [])).$$inter = !0, (n.$$observers && n.$$observers[r].$$scope || e).$watch(a, function(e, t) {
										"class" === r && e != t ? n.$updateClass(e, t) : n.$set(r, e)
									}))
								}
							}
						}
					})
				}
			}

			function H(e, t, n) {
				var i, r, a = t[0],
					s = t.length,
					o = a.parentNode;
				if(e)
					for(i = 0, r = e.length; i < r; i++)
						if(e[i] == a) {
							e[i++] = n, r = i + s - 1;
							for(var l = e.length; i < l; i++, r++) r < l ? e[i] = e[r] : delete e[i];
							e.length -= s - 1;
							break
						}
				for(o && o.replaceChild(n, a), (e = G.createDocumentFragment()).appendChild(a), n[Dt.expando] = a[Dt.expando], a = 1, s = t.length; a < s; a++) o = t[a], Dt(o).remove(), e.appendChild(o), delete t[a];
				t[0] = n, t.length = 1
			}

			function V(e, t) {
				return q(function() {
					return e.apply(null, arguments)
				}, e, t)
			}
			var B = function(e, t) {
				this.$$element = e, this.$attr = t || {}
			};
			B.prototype = {
				$normalize: Ce,
				$addClass: function(e) {
					e && 0 < e.length && i.addClass(this.$$element, e)
				},
				$removeClass: function(e) {
					e && 0 < e.length && i.removeClass(this.$$element, e)
				},
				$updateClass: function(e, t) {
					this.$removeClass(Te(t, e)), this.$addClass(Te(e, t))
				},
				$set: function(e, t, n, i) {
					var r = pe(this.$$element[0], e);
					r && (this.$$element.prop(e, t), i = r), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e]) || (this.$attr[e] = i = ie(e, "-")), ("A" === (r = jt(this.$$element)) && "href" === e || "IMG" === r && "src" === e) && (this[e] = t = s(t, "src" === e)), !1 !== n && (null === t || t === Y ? this.$$element.removeAttr(i) : this.$$element.attr(i, t)), (n = this.$$observers) && Q(n[e], function(e) {
						try {
							e(t)
						} catch(e) {
							A(e)
						}
					})
				},
				$observe: function(e, t) {
					var n = this,
						i = n.$$observers || (n.$$observers = {}),
						r = i[e] || (i[e] = []);
					return r.push(t), a.$evalAsync(function() {
						r.$$inter || t(n[e])
					}), t
				}
			};
			var r = E.startSymbol(),
				o = E.endSymbol(),
				W = "{{" == r || "}}" == o ? g : function(e) {
					return e.replace(/\{\{/g, r).replace(/}}/g, o)
				},
				T = /^ngAttr[A-Z]/;
			return M
		}]
	}

	function Ce(e) {
		return R(e.replace(un, ""))
	}

	function Te(e, t) {
		var n = "",
			i = e.split(/\s+/),
			r = t.split(/\s+/),
			a = 0;
		e: for(; a < i.length; a++) {
			for(var s = i[a], o = 0; o < r.length; o++)
				if(s == r[o]) continue e;
			n += (0 < n.length ? " " : "") + s
		}
		return n
	}

	function Se() {
		var o = {},
			l = /^(\S+)(\s+as\s+(\w+))?$/;
		this.register = function(e, t) {
			z(e, "controller"), X(e) ? q(o, e) : o[e] = t
		}, this.$get = ["$injector", "$window", function(a, s) {
			return function(e, t) {
				var n, i, r;
				if(J(e) && (i = (n = e.match(l))[1], r = n[3], I(e = o.hasOwnProperty(i) ? o[i] : N(t.$scope, i, !0) || N(s, i, !0), i, !0)), n = a.instantiate(e, t), r) {
					if(!t || "object" != typeof t.$scope) throw _("$controller")("noscp", i || e.name, r);
					t.$scope[r] = n
				}
				return n
			}
		}]
	}

	function ke() {
		this.$get = ["$window", function(e) {
			return Dt(e.document)
		}]
	}

	function qe() {
		this.$get = ["$log", function(n) {
			return function(e, t) {
				n.error.apply(n, arguments)
			}
		}]
	}

	function De(e) {
		var t, n, i, r = {};
		return e && Q(e.split("\n"), function(e) {
			i = e.indexOf(":"), t = Ot(Rt(e.substr(0, i))), n = Rt(e.substr(i + 1)), t && (r[t] = r[t] ? r[t] + ", " + n : n)
		}), r
	}

	function Ee(t) {
		var n = X(t) ? t : Y;
		return function(e) {
			return n || (n = De(t)), e ? n[Ot(e)] || null : n
		}
	}

	function Ae(t, n, e) {
		return Z(e) ? e(t, n) : (Q(e, function(e) {
			t = e(t, n)
		}), t)
	}

	function je() {
		var t = /^\s*(\[|\{[^\{])/,
			n = /[\}\]]\s*$/,
			i = /^\)\]\}',?\n/,
			e = {
				"Content-Type": "application/json;charset=utf-8"
			},
			h = this.defaults = {
				transformResponse: [function(e) {
					return J(e) && (e = e.replace(i, ""), t.test(e) && n.test(e) && (e = y(e))), e
				}],
				transformRequest: [function(e) {
					return X(e) && "[object File]" !== It.call(e) ? C(e) : e
				}],
				headers: {
					common: {
						Accept: "application/json, text/plain, */*"
					},
					post: e,
					put: e,
					patch: e
				},
				xsrfCookieName: "XSRF-TOKEN",
				xsrfHeaderName: "X-XSRF-TOKEN"
			},
			r = this.interceptors = [],
			a = this.responseInterceptors = [];
		this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(u, o, e, d, f, i) {
			function p(e) {
				function n(e) {
					var t = q({}, e, {
						data: Ae(e.data, e.headers, i.transformResponse)
					});
					return 200 <= e.status && e.status < 300 ? t : f.reject(t)
				}
				var i = {
						transformRequest: h.transformRequest,
						transformResponse: h.transformResponse
					},
					r = function(e) {
						function t(n) {
							var i;
							Q(n, function(e, t) {
								Z(e) && (null != (i = e()) ? n[t] = i : delete n[t])
							})
						}
						var n, i, r = h.headers,
							a = q({}, e.headers);
						t(r = q({}, r.common, r[Ot(e.method)])), t(a);
						e: for(n in r) {
							for(i in e = Ot(n), a)
								if(Ot(i) === e) continue e;
							a[n] = r[n]
						}
						return a
					}(e);
				q(i, e), i.headers = r, i.method = Mt(i.method), (e = ut(i.url) ? o.cookies()[i.xsrfCookieName || h.xsrfCookieName] : Y) && (r[i.xsrfHeaderName || h.xsrfHeaderName] = e);
				var t = [function(e) {
						r = e.headers;
						var t = Ae(e.data, Ee(r), e.transformRequest);
						return j(e.data) && Q(r, function(e, t) {
								"content-type" === Ot(t) && delete r[t]
							}), j(e.withCredentials) && !j(h.withCredentials) && (e.withCredentials = h.withCredentials),
							function(i, e, t) {
								function r(e, t, n) {
									(200 <= (t = Math.max(t, 0)) && t < 300 ? o.resolve : o.reject)({
										data: e,
										status: t,
										headers: Ee(n),
										config: i
									})
								}

								function n() {
									var e = b(p.pendingRequests, i); - 1 !== e && p.pendingRequests.splice(e, 1)
								}
								var a, s, o = f.defer(),
									l = o.promise,
									c = function(e, t) {
										if(!t) return e;
										var n = [];
										return function(e, t, n) {
											for(var i = A(e), r = 0; r < i.length; r++) t.call(n, e[i[r]], i[r])
										}(t, function(e, t) {
											null === e || j(e) || (K(e) || (e = [e]), Q(e, function(e) {
												X(e) && (e = C(e)), n.push(P(t) + "=" + P(e))
											}))
										}), e + (-1 == e.indexOf("?") ? "?" : "&") + n.join("&")
									}(i.url, i.params);
								if(p.pendingRequests.push(i), l.then(n, n), (i.cache || h.cache) && !1 !== i.cache && "GET" == i.method && (a = X(i.cache) ? i.cache : X(h.cache) ? h.cache : _), a)
									if(O(s = a.get(c))) {
										if(s.then) return s.then(n, n), s;
										K(s) ? r(s[1], s[0], x(s[2])) : r(s, 200, {})
									} else a.put(c, l);
								return j(s) && u(i.method, c, e, function(e, t, n) {
									a && (200 <= e && e < 300 ? a.put(c, [e, t, De(n)]) : a.remove(c)), r(t, e, n), d.$$phase || d.$apply()
								}, t, i.timeout, i.withCredentials, i.responseType), l
							}(e, t, r).then(n, n)
					}, Y],
					a = f.when(i);
				for(Q(l, function(e) {
						(e.request || e.requestError) && t.unshift(e.request, e.requestError), (e.response || e.responseError) && t.push(e.response, e.responseError)
					}); t.length;) {
					e = t.shift();
					var s = t.shift();
					a = a.then(e, s)
				}
				return a.success = function(t) {
					return a.then(function(e) {
						t(e.data, e.status, e.headers, i)
					}), a
				}, a.error = function(t) {
					return a.then(null, function(e) {
						t(e.data, e.status, e.headers, i)
					}), a
				}, a
			}
			var _ = e("$http"),
				l = [];
			return Q(r, function(e) {
					l.unshift(J(e) ? i.get(e) : i.invoke(e))
				}), Q(a, function(e, t) {
					var n = J(e) ? i.get(e) : i.invoke(e);
					l.splice(t, 0, {
						response: function(e) {
							return n(f.when(e))
						},
						responseError: function(e) {
							return n(f.reject(e))
						}
					})
				}), p.pendingRequests = [],
				function(e) {
					Q(arguments, function(n) {
						p[n] = function(e, t) {
							return p(q(t || {}, {
								method: n,
								url: e
							}))
						}
					})
				}("get", "delete", "head", "jsonp"),
				function(e) {
					Q(arguments, function(i) {
						p[i] = function(e, t, n) {
							return p(q(n || {}, {
								method: i,
								url: e,
								data: t
							}))
						}
					})
				}("post", "put"), p.defaults = h, p
		}]
	}

	function Oe() {
		this.$get = ["$browser", "$window", "$document", function(e, t, n) {
			return $ = dn, b = (y = e).defer, w = t.angular.callbacks, x = n[0],
				function(e, a, t, n, i, r, s, o) {
					function l() {
						u = -1, m && m(), g && g.abort()
					}

					function c(e, t, n, i) {
						var r = ct(a).protocol;
						v && b.cancel(v), m = g = null, e(1223 == (t = "file" == r && 0 === t ? n ? 200 : 404 : t) ? 204 : t, n, i), y.$$completeOutstandingRequest(S)
					}
					var u, d, f, p, _;
					if(y.$$incOutstandingRequestCount(), a = a || y.url(), "jsonp" == Ot(e)) {
						var h = "_" + (w.counter++).toString(36);
						w[h] = function(e) {
							w[h].data = e
						};
						var m = (d = a.replace("JSON_CALLBACK", "angular.callbacks." + h), f = function() {
							w[h].data ? c(n, 200, w[h].data) : c(n, u || -2), delete w[h]
						}, p = x.createElement("script"), _ = function() {
							p.onreadystatechange = p.onload = p.onerror = null, x.body.removeChild(p), f && f()
						}, p.type = "text/javascript", p.src = d, qt && qt <= 8 ? p.onreadystatechange = function() {
							/loaded|complete/.test(p.readyState) && _()
						} : p.onload = p.onerror = function() {
							_()
						}, x.body.appendChild(p), _)
					} else {
						var g = new $;
						g.open(e, a, !0), Q(i, function(e, t) {
							O(e) && g.setRequestHeader(t, e)
						}), g.onreadystatechange = function() {
							if(4 == g.readyState) {
								var e = null,
									t = null; - 1 !== u && (e = g.getAllResponseHeaders(), t = g.responseType ? g.response : g.responseText), c(n, u || g.status, t, e)
							}
						}, s && (g.withCredentials = !0), o && (g.responseType = o), g.send(t || null)
					}
					if(0 < r) var v = b(l, r);
					else r && r.then && r.then(l)
				};
			var y, $, b, w, x
		}]
	}

	function Me() {
		var h = "{{",
			m = "}}";
		this.startSymbol = function(e) {
			return e ? (h = e, this) : h
		}, this.endSymbol = function(e) {
			return e ? (m = e, this) : m
		}, this.$get = ["$parse", "$exceptionHandler", "$sce", function(u, d, f) {
			function e(r, e, a) {
				for(var t, n, i = 0, s = [], o = r.length, l = !1, c = []; i < o;) - 1 != (t = r.indexOf(h, i)) && -1 != (n = r.indexOf(m, t + p)) ? (i != t && s.push(r.substring(i, t)), s.push(i = u(l = r.substring(t + p, n))), i.exp = l, i = n + _, l = !0) : (i != o && s.push(r.substring(i)), i = o);
				if((o = s.length) || (s.push(""), o = 1), a && 1 < s.length) throw fn("noconcat", r);
				if(!e || l) return c.length = o, (i = function(t) {
					try {
						for(var e, n = 0, i = o; n < i; n++) "function" == typeof(e = s[n]) && (e = e(t), null === (e = a ? f.getTrusted(a, e) : f.valueOf(e)) || j(e) ? e = "" : "string" != typeof e && (e = C(e))), c[n] = e;
						return c.join("")
					} catch(e) {
						t = fn("interr", r, e.toString()), d(t)
					}
				}).exp = r, i.parts = s, i
			}
			var p = h.length,
				_ = m.length;
			return e.startSymbol = function() {
				return h
			}, e.endSymbol = function() {
				return m
			}, e
		}]
	}

	function Pe() {
		this.$get = ["$rootScope", "$window", "$q", function(u, d, f) {
			function e(e, t, n, i) {
				var r = d.setInterval,
					a = d.clearInterval,
					s = f.defer(),
					o = s.promise,
					l = 0,
					c = O(i) && !i;
				return n = O(n) ? n : 0, o.then(null, null, e), o.$$intervalId = r(function() {
					s.notify(l++), 0 < n && n <= l && (s.resolve(l), a(o.$$intervalId), delete p[o.$$intervalId]), c || u.$apply()
				}, t), p[o.$$intervalId] = s, o
			}
			var p = {};
			return e.cancel = function(e) {
				return !!(e && e.$$intervalId in p) && (p[e.$$intervalId].reject("canceled"), clearInterval(e.$$intervalId), delete p[e.$$intervalId], !0)
			}, e
		}]
	}

	function Fe() {
		this.$get = function() {
			return {
				id: "en-us",
				NUMBER_FORMATS: {
					DECIMAL_SEP: ".",
					GROUP_SEP: ",",
					PATTERNS: [{
						minInt: 1,
						minFrac: 0,
						maxFrac: 3,
						posPre: "",
						posSuf: "",
						negPre: "-",
						negSuf: "",
						gSize: 3,
						lgSize: 3
					}, {
						minInt: 1,
						minFrac: 2,
						maxFrac: 2,
						posPre: "¤",
						posSuf: "",
						negPre: "(¤",
						negSuf: ")",
						gSize: 3,
						lgSize: 3
					}],
					CURRENCY_SYM: "$"
				},
				DATETIME_FORMATS: {
					MONTH: "January February March April May June July August September October November December".split(" "),
					SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
					DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
					SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
					AMPMS: ["AM", "PM"],
					medium: "MMM d, y h:mm:ss a",
					short: "M/d/yy h:mm a",
					fullDate: "EEEE, MMMM d, y",
					longDate: "MMMM d, y",
					mediumDate: "MMM d, y",
					shortDate: "M/d/yy",
					mediumTime: "h:mm:ss a",
					shortTime: "h:mm a"
				},
				pluralCat: function(e) {
					return 1 === e ? "one" : "other"
				}
			}
		}
	}

	function Ie(e) {
		for(var t = (e = e.split("/")).length; t--;) e[t] = M(e[t]);
		return e.join("/")
	}

	function t(e, t, n) {
		e = ct(e, n), t.$$protocol = e.protocol, t.$$host = e.hostname, t.$$port = h(e.port) || _n[e.protocol] || null
	}

	function ze(e, t, n) {
		var i = "/" !== e.charAt(0);
		i && (e = "/" + e), e = ct(e, n), t.$$path = decodeURIComponent(i && "/" === e.pathname.charAt(0) ? e.pathname.substring(1) : e.pathname), t.$$search = k(e.search), t.$$hash = decodeURIComponent(e.hash), t.$$path && "/" != t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
	}

	function Ne(e, t) {
		if(0 === t.indexOf(e)) return t.substr(e.length)
	}

	function Ue(e) {
		var t = e.indexOf("#");
		return -1 == t ? e : e.substr(0, t)
	}

	function Re(e) {
		return e.substr(0, Ue(e).lastIndexOf("/") + 1)
	}

	function Le(n, i) {
		this.$$html5 = !0, i = i || "";
		var r = Re(n);
		t(n, this, n), this.$$parse = function(e) {
			var t = Ne(r, e);
			if(!J(t)) throw hn("ipthprfx", e, r);
			ze(t, this, n), this.$$path || (this.$$path = "/"), this.$$compose()
		}, this.$$compose = function() {
			var e = E(this.$$search),
				t = this.$$hash ? "#" + M(this.$$hash) : "";
			this.$$url = Ie(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = r + this.$$url.substr(1)
		}, this.$$rewrite = function(e) {
			var t;
			return(t = Ne(n, e)) !== Y ? (t = Ne(i, e = t)) !== Y ? r + (Ne("/", t) || t) : n + e : (t = Ne(r, e)) !== Y ? r + t : r == e + "/" ? r : void 0
		}
	}

	function He(i, r) {
		var a = Re(i);
		t(i, this, i), this.$$parse = function(e) {
			var t;
			if(!J(t = "#" == (t = Ne(i, e) || Ne(a, e)).charAt(0) ? Ne(r, t) : this.$$html5 ? t : "")) throw hn("ihshprfx", e, r);
			ze(t, this, i), e = this.$$path;
			var n = /^\/?.*?:(\/.*)/;
			0 === t.indexOf(i) && (t = t.replace(i, "")), n.exec(t) || (e = (t = n.exec(e)) ? t[1] : e), this.$$path = e, this.$$compose()
		}, this.$$compose = function() {
			var e = E(this.$$search),
				t = this.$$hash ? "#" + M(this.$$hash) : "";
			this.$$url = Ie(this.$$path) + (e ? "?" + e : "") + t, this.$$absUrl = i + (this.$$url ? r + this.$$url : "")
		}, this.$$rewrite = function(e) {
			if(Ue(i) == Ue(e)) return e
		}
	}

	function Ve(n, i) {
		this.$$html5 = !0, He.apply(this, arguments);
		var r = Re(n);
		this.$$rewrite = function(e) {
			var t;
			return n == Ue(e) ? e : (t = Ne(r, e)) ? n + i + t : r === e + "/" ? r : void 0
		}
	}

	function Be(e) {
		return function() {
			return this[e]
		}
	}

	function We(t, n) {
		return function(e) {
			return j(e) ? this[t] : (this[t] = n(e), this.$$compose(), this)
		}
	}

	function Ge() {
		var c = "",
			u = !1;
		this.hashPrefix = function(e) {
			return O(e) ? (c = e, this) : c
		}, this.html5Mode = function(e) {
			return O(e) ? (u = e, this) : u
		}, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(r, a, e, s) {
			function n(e) {
				r.$broadcast("$locationChangeSuccess", o.absUrl(), e)
			}
			var o, t = a.baseHref(),
				i = a.url();
			u ? (t = i.substring(0, i.indexOf("/", i.indexOf("//") + 2)) + (t || "/"), e = e.history ? Le : Ve) : (t = Ue(i), e = He), (o = new e(t, "#" + c)).$$parse(o.$$rewrite(i)), s.on("click", function(e) {
				if(!e.ctrlKey && !e.metaKey && 2 != e.which) {
					for(var t = Dt(e.target);
						"a" !== Ot(t[0].nodeName);)
						if(t[0] === s[0] || !(t = t.parent())[0]) return;
					var n = t.prop("href"),
						i = o.$$rewrite(n);
					n && !t.attr("target") && i && !e.isDefaultPrevented() && (e.preventDefault(), i != a.url() && (o.$$parse(i), r.$apply(), d.angular["ff-684208-preventDefault"] = !0))
				}
			}), o.absUrl() != i && a.url(o.absUrl(), !0), a.onUrlChange(function(t) {
				o.absUrl() != t && (r.$broadcast("$locationChangeStart", t, o.absUrl()).defaultPrevented ? a.url(o.absUrl()) : (r.$evalAsync(function() {
					var e = o.absUrl();
					o.$$parse(t), n(e)
				}), r.$$phase || r.$digest()))
			});
			var l = 0;
			return r.$watch(function() {
				var e = a.url(),
					t = o.$$replace;
				return l && e == o.absUrl() || (l++, r.$evalAsync(function() {
					r.$broadcast("$locationChangeStart", o.absUrl(), e).defaultPrevented ? o.$$parse(e) : (a.url(o.absUrl(), t), n(e))
				})), o.$$replace = !1, l
			}), o
		}]
	}

	function Ye() {
		var i = !0,
			r = this;
		this.debugEnabled = function(e) {
			return O(e) ? (i = e, this) : i
		}, this.$get = ["$window", function(n) {
			function e(e) {
				var t = n.console || {},
					i = t[e] || t.log || S;
				return i.apply ? function() {
					var n = [];
					return Q(arguments, function(e) {
						var t;
						n.push(((t = e) instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t))
					}), i.apply(t, n)
				} : function(e, t) {
					i(e, null == t ? "" : t)
				}
			}
			return {
				log: e("log"),
				info: e("info"),
				warn: e("warn"),
				error: e("error"),
				debug: (t = e("debug"), function() {
					i && t.apply(r, arguments)
				})
			};
			var t
		}]
	}

	function Qe(e, t) {
		if("constructor" === e) throw gn("isecfld", t);
		return e
	}

	function Xe(e, t) {
		if(e) {
			if(e.constructor === e) throw gn("isecfn", t);
			if(e.document && e.location && e.alert && e.setInterval) throw gn("isecwindow", t);
			if(e.children && (e.nodeName || e.on && e.find)) throw gn("isecdom", t)
		}
		return e
	}

	function Je(e, t, n, i, r) {
		r = r || {}, t = t.split(".");
		for(var a, s = 0; 1 < t.length; s++) {
			var o = e[a = Qe(t.shift(), i)];
			o || (o = {}, e[a] = o), (e = o).then && r.unwrapPromises && (mn(i), "$$v" in e || function(t) {
				t.then(function(e) {
					t.$$v = e
				})
			}(e), e.$$v === Y && (e.$$v = {}), e = e.$$v)
		}
		return e[a = Qe(t.shift(), i)] = n
	}

	function Ke(r, a, s, o, l, c, e) {
		return Qe(r, c), Qe(a, c), Qe(s, c), Qe(o, c), Qe(l, c), e.unwrapPromises ? function(e, t) {
			var n, i = t && t.hasOwnProperty(r) ? t : e;
			return null === i || i === Y ? i : ((i = i[r]) && i.then && (mn(c), "$$v" in i || ((n = i).$$v = Y, n.then(function(e) {
				n.$$v = e
			})), i = i.$$v), a && null !== i && i !== Y ? ((i = i[a]) && i.then && (mn(c), "$$v" in i || ((n = i).$$v = Y, n.then(function(e) {
				n.$$v = e
			})), i = i.$$v), s && null !== i && i !== Y ? ((i = i[s]) && i.then && (mn(c), "$$v" in i || ((n = i).$$v = Y, n.then(function(e) {
				n.$$v = e
			})), i = i.$$v), o && null !== i && i !== Y ? ((i = i[o]) && i.then && (mn(c), "$$v" in i || ((n = i).$$v = Y, n.then(function(e) {
				n.$$v = e
			})), i = i.$$v), l && null !== i && i !== Y && (i = i[l]) && i.then && (mn(c), "$$v" in i || ((n = i).$$v = Y, n.then(function(e) {
				n.$$v = e
			})), i = i.$$v), i) : i) : i) : i)
		} : function(e, t) {
			var n = t && t.hasOwnProperty(r) ? t : e;
			return null === n || n === Y ? n : (n = n[r], a && null !== n && n !== Y ? (n = n[a], s && null !== n && n !== Y ? (n = n[s], o && null !== n && n !== Y ? (n = n[o], l && null !== n && n !== Y ? n = n[l] : n) : n) : n) : n)
		}
	}

	function Ze(e, r, a) {
		if(xn.hasOwnProperty(e)) return xn[e];
		var t, s = e.split("."),
			o = s.length;
		if(r.csp) t = o < 6 ? Ke(s[0], s[1], s[2], s[3], s[4], a, r) : function(e, t) {
			for(var n, i = 0; n = Ke(s[i++], s[i++], s[i++], s[i++], s[i++], a, r)(e, t), t = Y, e = n, i < o;);
			return n
		};
		else {
			var n = "var l, fn, p;\n";
			Q(s, function(e, t) {
				Qe(e, a), n += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (t ? "s" : '((k&&k.hasOwnProperty("' + e + '"))?k:s)') + '["' + e + '"];\n' + (r.unwrapPromises ? 'if (s && s.then) {\n pw("' + a.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
			});
			n = n + "return s;";
			var i = new Function("s", "k", "pw", n);
			i.toString = function() {
				return n
			}, t = function(e, t) {
				return i(e, t, mn)
			}
		}
		return "hasOwnProperty" !== e && (xn[e] = t), t
	}

	function et() {
		var i = {},
			r = {
				csp: !1,
				unwrapPromises: !1,
				logPromiseWarnings: !0
			};
		this.unwrapPromises = function(e) {
			return O(e) ? (r.unwrapPromises = !!e, this) : r.unwrapPromises
		}, this.logPromiseWarnings = function(e) {
			return O(e) ? (r.logPromiseWarnings = e, this) : r.logPromiseWarnings
		}, this.$get = ["$filter", "$sniffer", "$log", function(n, e, t) {
			return r.csp = e.csp, mn = function(e) {
					r.logPromiseWarnings && !vn.hasOwnProperty(e) && (vn[e] = !0, t.warn("[$parse] Promise found in the expression `" + e + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
				},
				function(e) {
					var t;
					switch(typeof e) {
						case "string":
							return i.hasOwnProperty(e) ? i[e] : (t = new bn(r), t = new wn(t, n, r).parse(e, !1), "hasOwnProperty" !== e && (i[e] = t), t);
						case "function":
							return e;
						default:
							return S
					}
				}
		}]
	}

	function tt() {
		this.$get = ["$rootScope", "$exceptionHandler", function(t, e) {
			return function(c, u) {
				function d(e) {
					return e
				}

				function f(e) {
					return h(e)
				}
				var p = function() {
						var o, t, l = [];
						return t = {
							resolve: function(e) {
								if(l) {
									var i = l;
									l = Y, o = _(e), i.length && c(function() {
										for(var e, t = 0, n = i.length; t < n; t++) e = i[t], o.then(e[0], e[1], e[2])
									})
								}
							},
							reject: function(e) {
								t.resolve(h(e))
							},
							notify: function(n) {
								if(l) {
									var i = l;
									l.length && c(function() {
										for(var e = 0, t = i.length; e < t; e++) i[e][2](n)
									})
								}
							},
							promise: {
								then: function(t, n, i) {
									var r = p(),
										e = function(e) {
											try {
												r.resolve((Z(t) ? t : d)(e))
											} catch(e) {
												r.reject(e), u(e)
											}
										},
										a = function(e) {
											try {
												r.resolve((Z(n) ? n : f)(e))
											} catch(e) {
												r.reject(e), u(e)
											}
										},
										s = function(e) {
											try {
												r.notify((Z(i) ? i : d)(e))
											} catch(e) {
												u(e)
											}
										};
									return l ? l.push([e, a, s]) : o.then(e, a, s), r.promise
								},
								catch: function(e) {
									return this.then(null, e)
								},
								finally: function(i) {
									function r(e, t) {
										var n = p();
										return t ? n.resolve(e) : n.reject(e), n.promise
									}

									function t(e, t) {
										var n = null;
										try {
											n = (i || d)()
										} catch(e) {
											return r(e, !1)
										}
										return n && Z(n.then) ? n.then(function() {
											return r(e, t)
										}, function(e) {
											return r(e, !1)
										}) : r(e, t)
									}
									return this.then(function(e) {
										return t(e, !0)
									}, function(e) {
										return t(e, !1)
									})
								}
							}
						}
					},
					_ = function(n) {
						return n && Z(n.then) ? n : {
							then: function(e) {
								var t = p();
								return c(function() {
									t.resolve(e(n))
								}), t.promise
							}
						}
					},
					h = function(i) {
						return {
							then: function(e, t) {
								var n = p();
								return c(function() {
									try {
										n.resolve((Z(t) ? t : f)(i))
									} catch(e) {
										n.reject(e), u(e)
									}
								}), n.promise
							}
						}
					};
				return {
					defer: p,
					reject: h,
					when: function(e, t, n, i) {
						var r, a = p(),
							s = function(e) {
								try {
									return(Z(t) ? t : d)(e)
								} catch(e) {
									return u(e), h(e)
								}
							},
							o = function(e) {
								try {
									return(Z(n) ? n : f)(e)
								} catch(e) {
									return u(e), h(e)
								}
							},
							l = function(e) {
								try {
									return(Z(i) ? i : d)(e)
								} catch(e) {
									u(e)
								}
							};
						return c(function() {
							_(e).then(function(e) {
								r || (r = !0, a.resolve(_(e).then(s, o, l)))
							}, function(e) {
								r || (r = !0, a.resolve(o(e)))
							}, function(e) {
								r || a.notify(l(e))
							})
						}), a.promise
					},
					all: function(e) {
						var n = p(),
							i = 0,
							r = K(e) ? [] : {};
						return Q(e, function(e, t) {
							i++, _(e).then(function(e) {
								r.hasOwnProperty(t) || (r[t] = e, --i || n.resolve(r))
							}, function(e) {
								r.hasOwnProperty(t) || n.reject(e)
							})
						}), 0 === i && n.resolve(r), n.promise
					}
				}
			}(function(e) {
				t.$evalAsync(e)
			}, e)
		}]
	}

	function nt() {
		var v = 10,
			y = _("$rootScope"),
			$ = null;
		this.digestTtl = function(e) {
			return arguments.length && (v = e), v
		}, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function(e, _, u, t) {
			function n() {
				this.$id = r(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.this = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], this.$$postDigestQueue = [], this.$$listeners = {}, this.$$isolateBindings = {}
			}

			function h(e) {
				if(g.$$phase) throw y("inprog", g.$$phase);
				g.$$phase = e
			}

			function l(e, t) {
				var n = u(e);
				return I(n, t), n
			}

			function m() {}
			n.prototype = {
				constructor: n,
				$new: function(e) {
					return e ? ((e = new n).$root = this.$root, e.$$asyncQueue = this.$$asyncQueue, e.$$postDigestQueue = this.$$postDigestQueue) : ((e = function() {}).prototype = this, (e = new e).$id = r()), (e.this = e).$$listeners = {}, e.$parent = this, e.$$watchers = e.$$nextSibling = e.$$childHead = e.$$childTail = null, e.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = e : this.$$childHead = this.$$childTail = e, e
				},
				$watch: function(e, t, n) {
					var i = l(e, "watch"),
						r = this.$$watchers,
						a = {
							fn: t,
							last: m,
							get: i,
							exp: e,
							eq: !!n
						};
					if($ = null, !Z(t)) {
						var s = l(t || S, "listener");
						a.fn = function(e, t, n) {
							s(n)
						}
					}
					if("string" == typeof e && i.constant) {
						var o = a.fn;
						a.fn = function(e, t, n) {
							o.call(this, e, t, n), w(r, a)
						}
					}
					return r || (r = this.$$watchers = []), r.unshift(a),
						function() {
							w(r, a)
						}
				},
				$watchCollection: function(e, t) {
					var n, i, r = this,
						a = 0,
						s = u(e),
						o = [],
						l = {},
						c = 0;
					return this.$watch(function() {
						var e, t;
						if(X(i = s(r)))
							if(T(i))
								for(n !== o && (c = (n = o).length = 0, a++), e = i.length, c !== e && (a++, n.length = c = e), t = 0; t < e; t++) n[t] !== i[t] && (a++, n[t] = i[t]);
							else {
								for(t in n !== l && (n = l = {}, c = 0, a++), e = 0, i) i.hasOwnProperty(t) && (e++, n.hasOwnProperty(t) ? n[t] !== i[t] && (a++, n[t] = i[t]) : (c++, n[t] = i[t], a++));
								if(e < c)
									for(t in a++, n) n.hasOwnProperty(t) && !i.hasOwnProperty(t) && (c--, delete n[t])
							} else n !== i && (n = i, a++);
						return a
					}, function() {
						t(i, n, r)
					})
				},
				$digest: function() {
					var e, t, n, i, r, a, s, o, l, c, u = this.$$asyncQueue,
						d = this.$$postDigestQueue,
						f = v,
						p = [];
					h("$digest"), $ = null;
					do {
						for(a = !1, s = this; u.length;) {
							try {
								(c = u.shift()).scope.$eval(c.expression)
							} catch(e) {
								g.$$phase = null, _(e)
							}
							$ = null
						}
						e: do {
							if(i = s.$$watchers)
								for(r = i.length; r--;) try {
									if(e = i[r])
										if((t = e.get(s)) === (n = e.last) || (e.eq ? ee(t, n) : "number" == typeof t && "number" == typeof n && isNaN(t) && isNaN(n))) {
											if(e === $) {
												a = !1;
												break e
											}
										} else a = !0, ($ = e).last = e.eq ? x(t) : t, e.fn(t, n === m ? t : n, s), f < 5 && (p[o = 4 - f] || (p[o] = []), l = Z(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp, l += "; newVal: " + C(t) + "; oldVal: " + C(n), p[o].push(l))
								} catch(e) {
									g.$$phase = null, _(e)
								}
							if(!(i = s.$$childHead || s !== this && s.$$nextSibling))
								for(; s !== this && !(i = s.$$nextSibling);) s = s.$parent
						} while (s = i);
						if(a && !f--) throw g.$$phase = null, y("infdig", v, C(p))
					} while (a || u.length);
					for(g.$$phase = null; d.length;) try {
						d.shift()()
					} catch(e) {
						_(e)
					}
				},
				$destroy: function() {
					if(!this.$$destroyed) {
						var e = this.$parent;
						this.$broadcast("$destroy"), this.$$destroyed = !0, this !== g && (e.$$childHead == this && (e.$$childHead = this.$$nextSibling), e.$$childTail == this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null)
					}
				},
				$eval: function(e, t) {
					return u(e)(this, t)
				},
				$evalAsync: function(e) {
					g.$$phase || g.$$asyncQueue.length || t.defer(function() {
						g.$$asyncQueue.length && g.$digest()
					}), this.$$asyncQueue.push({
						scope: this,
						expression: e
					})
				},
				$$postDigest: function(e) {
					this.$$postDigestQueue.push(e)
				},
				$apply: function(e) {
					try {
						return h("$apply"), this.$eval(e)
					} catch(e) {
						_(e)
					} finally {
						g.$$phase = null;
						try {
							g.$digest()
						} catch(e) {
							throw _(e), e
						}
					}
				},
				$on: function(e, t) {
					var n = this.$$listeners[e];
					return n || (this.$$listeners[e] = n = []), n.push(t),
						function() {
							n[b(n, t)] = null
						}
				},
				$emit: function(e, t) {
					var n, i, r, a = [],
						s = this,
						o = !1,
						l = {
							name: e,
							targetScope: s,
							stopPropagation: function() {
								o = !0
							},
							preventDefault: function() {
								l.defaultPrevented = !0
							},
							defaultPrevented: !1
						},
						c = [l].concat(Pt.call(arguments, 1));
					do {
						for(n = s.$$listeners[e] || a, l.currentScope = s, i = 0, r = n.length; i < r; i++)
							if(n[i]) try {
								n[i].apply(null, c)
							} catch(e) {
								_(e)
							} else n.splice(i, 1), i--, r--;
						if(o) break;
						s = s.$parent
					} while (s);
					return l
				},
				$broadcast: function(e, t) {
					var n, i, r = this,
						a = this,
						s = {
							name: e,
							targetScope: this,
							preventDefault: function() {
								s.defaultPrevented = !0
							},
							defaultPrevented: !1
						},
						o = [s].concat(Pt.call(arguments, 1));
					do {
						for(r = a, n = 0, i = (a = (s.currentScope = r).$$listeners[e] || []).length; n < i; n++)
							if(a[n]) try {
								a[n].apply(null, o)
							} catch(e) {
								_(e)
							} else a.splice(n, 1), n--, i--;
						if(!(a = r.$$childHead || r !== this && r.$$nextSibling))
							for(; r !== this && !(a = r.$$nextSibling);) r = r.$parent
					} while (r = a);
					return s
				}
			};
			var g = new n;
			return g
		}]
	}

	function it() {
		var r = /^\s*(https?|ftp|mailto|tel|file):/,
			a = /^\s*(https?|ftp|file):|data:image\//;
		this.aHrefSanitizationWhitelist = function(e) {
			return O(e) ? (r = e, this) : r
		}, this.imgSrcSanitizationWhitelist = function(e) {
			return O(e) ? (a = e, this) : a
		}, this.$get = function() {
			return function(e, t) {
				var n, i = t ? a : r;
				return qt && !(8 <= qt) || ("" === (n = ct(e).href) || n.match(i)) ? e : "unsafe:" + n
			}
		}
	}

	function rt(e) {
		var t = [];
		return O(e) && Q(e, function(e) {
			t.push(function(e) {
				if("self" === e) return e;
				if(J(e)) {
					if(-1 < e.indexOf("***")) throw Cn("iwcard", e);
					return e = e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), RegExp("^" + e + "$")
				}
				if(s(e)) return RegExp("^" + e.source + "$");
				throw Cn("imatcher")
			}(e))
		}), t
	}

	function at() {
		this.SCE_CONTEXTS = Tn;
		var l = ["self"],
			c = [];
		this.resourceUrlWhitelist = function(e) {
			return arguments.length && (l = rt(e)), l
		}, this.resourceUrlBlacklist = function(e) {
			return arguments.length && (c = rt(e)), c
		}, this.$get = ["$injector", function(e) {
			function t(e) {
				var t = function(e) {
					this.$$unwrapTrustedValue = function() {
						return e
					}
				};
				return e && (t.prototype = new e), t.prototype.valueOf = function() {
					return this.$$unwrapTrustedValue()
				}, t.prototype.toString = function() {
					return this.$$unwrapTrustedValue().toString()
				}, t
			}
			var s = function(e) {
				throw Cn("unsafe")
			};
			e.has("$sanitize") && (s = e.get("$sanitize"));
			var n = t(),
				o = {};
			return o[Tn.HTML] = t(n), o[Tn.CSS] = t(n), o[Tn.URL] = t(n), o[Tn.JS] = t(n), o[Tn.RESOURCE_URL] = t(o[Tn.URL]), {
				trustAs: function(e, t) {
					var n = o.hasOwnProperty(e) ? o[e] : null;
					if(!n) throw Cn("icontext", e, t);
					if(null === t || t === Y || "" === t) return t;
					if("string" != typeof t) throw Cn("itype", e);
					return new n(t)
				},
				getTrusted: function(e, t) {
					if(null === t || t === Y || "" === t) return t;
					if((r = o.hasOwnProperty(e) ? o[e] : null) && t instanceof r) return t.$$unwrapTrustedValue();
					if(e === Tn.RESOURCE_URL) {
						var n, i, r = ct(t.toString()),
							a = !1;
						for(n = 0, i = l.length; n < i; n++)
							if("self" === l[n] ? ut(r) : l[n].exec(r.href)) {
								a = !0;
								break
							}
						if(a)
							for(n = 0, i = c.length; n < i; n++)
								if("self" === c[n] ? ut(r) : c[n].exec(r.href)) {
									a = !1;
									break
								}
						if(a) return t;
						throw Cn("insecurl", t.toString())
					}
					if(e === Tn.HTML) return s(t);
					throw Cn("unsafe")
				},
				valueOf: function(e) {
					return e instanceof n ? e.$$unwrapTrustedValue() : e
				}
			}
		}]
	}

	function st() {
		var o = !0;
		this.enabled = function(e) {
			return arguments.length && (o = !!e), o
		}, this.$get = ["$parse", "$sniffer", "$sceDelegate", function(t, e, n) {
			if(o && e.msie && e.msieDocumentMode < 8) throw Cn("iequirks");
			var r = x(Tn);
			r.isEnabled = function() {
				return o
			}, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, o || (r.trustAs = r.getTrusted = function(e, t) {
				return t
			}, r.valueOf = g), r.parseAs = function(n, e) {
				var i = t(e);
				return i.literal && i.constant ? i : function(e, t) {
					return r.getTrusted(n, i(e, t))
				}
			};
			var i = r.parseAs,
				a = r.getTrusted,
				s = r.trustAs;
			return Q(Tn, function(t, e) {
				var n = Ot(e);
				r[R("parse_as_" + n)] = function(e) {
					return i(t, e)
				}, r[R("get_trusted_" + n)] = function(e) {
					return a(t, e)
				}, r[R("trust_as_" + n)] = function(e) {
					return s(t, e)
				}
			}), r
		}]
	}

	function ot() {
		this.$get = ["$window", "$document", function(e, t) {
			var n, i = {},
				r = h((/android (\d+)/.exec(Ot((e.navigator || {}).userAgent)) || [])[1]),
				a = /Boxee/i.test((e.navigator || {}).userAgent),
				s = t[0] || {},
				o = s.documentMode,
				l = /^(Moz|webkit|O|ms)(?=[A-Z])/,
				c = s.body && s.body.style,
				u = !1,
				d = !1;
			if(c) {
				for(var f in c)
					if(u = l.exec(f)) {
						n = (n = u[0]).substr(0, 1).toUpperCase() + n.substr(1);
						break
					}
				n || (n = "WebkitOpacity" in c && "webkit"), u = !!("transition" in c || n + "Transition" in c), d = !!("animation" in c || n + "Animation" in c), !r || u && d || (u = J(s.body.style.webkitTransition), d = J(s.body.style.webkitAnimation))
			}
			return {
				history: !(!e.history || !e.history.pushState || r < 4 || a),
				hashchange: "onhashchange" in e && (!o || 7 < o),
				hasEvent: function(e) {
					if("input" == e && 9 == qt) return !1;
					if(j(i[e])) {
						var t = s.createElement("div");
						i[e] = "on" + e in t
					}
					return i[e]
				},
				csp: v(),
				vendorPrefix: n,
				transitions: u,
				animations: d,
				msie: qt,
				msieDocumentMode: o
			}
		}]
	}

	function lt() {
		this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(s, o, l, c) {
			function e(e, t, n) {
				var i = l.defer(),
					r = i.promise,
					a = O(n) && !n;
				return t = o.defer(function() {
					try {
						i.resolve(e())
					} catch(e) {
						i.reject(e), c(e)
					} finally {
						delete u[r.$$timeoutId]
					}
					a || s.$apply()
				}, t), r.$$timeoutId = t, u[t] = i, r
			}
			var u = {};
			return e.cancel = function(e) {
				return !!(e && e.$$timeoutId in u) && (u[e.$$timeoutId].reject("canceled"), delete u[e.$$timeoutId], o.defer.cancel(e.$$timeoutId))
			}, e
		}]
	}

	function ct(e, t) {
		var n = e;
		return qt && (Sn.setAttribute("href", n), n = Sn.href), Sn.setAttribute("href", n), {
			href: Sn.href,
			protocol: Sn.protocol ? Sn.protocol.replace(/:$/, "") : "",
			host: Sn.host,
			search: Sn.search ? Sn.search.replace(/^\?/, "") : "",
			hash: Sn.hash ? Sn.hash.replace(/^#/, "") : "",
			hostname: Sn.hostname,
			port: Sn.port,
			pathname: "/" === Sn.pathname.charAt(0) ? Sn.pathname : "/" + Sn.pathname
		}
	}

	function ut(e) {
		return(e = J(e) ? ct(e) : e).protocol === kn.protocol && e.host === kn.host
	}

	function dt() {
		this.$get = D(d)
	}

	function ft(i) {
		function r(e, t) {
			if(X(e)) {
				var n = {};
				return Q(e, function(e, t) {
					n[t] = r(t, e)
				}), n
			}
			return i.factory(e + a, t)
		}
		var a = "Filter";
		this.register = r, this.$get = ["$injector", function(t) {
			return function(e) {
				return t.get(e + a)
			}
		}], r("currency", _t), r("date", $t), r("filter", pt), r("json", bt), r("limitTo", wt), r("lowercase", jn), r("number", ht), r("orderBy", xt), r("uppercase", On)
	}

	function pt() {
		return function(e, n, i) {
			if(!K(e)) return e;
			var t = typeof i,
				r = [];
			r.check = function(e) {
				for(var t = 0; t < r.length; t++)
					if(!r[t](e)) return !1;
				return !0
			}, "function" !== t && (i = "boolean" === t && i ? function(e, t) {
				return Nt.equals(e, t)
			} : function(e, t) {
				return t = ("" + t).toLowerCase(), -1 < ("" + e).toLowerCase().indexOf(t)
			});
			var a = function(e, t) {
				if("string" == typeof t && "!" === t.charAt(0)) return !a(e, t.substr(1));
				switch(typeof e) {
					case "boolean":
					case "number":
					case "string":
						return i(e, t);
					case "object":
						switch(typeof t) {
							case "object":
								return i(e, t);
							default:
								for(var n in e)
									if("$" !== n.charAt(0) && a(e[n], t)) return !0
						}
						return !1;
					case "array":
						for(n = 0; n < e.length; n++)
							if(a(e[n], t)) return !0;
						return !1;
					default:
						return !1
				}
			};
			switch(typeof n) {
				case "boolean":
				case "number":
				case "string":
					n = {
						$: n
					};
				case "object":
					for(var s in n) "$" == s ? function() {
						if(n[s]) {
							var t = s;
							r.push(function(e) {
								return a(e, n[t])
							})
						}
					}() : function() {
						if(void 0 !== n[s]) {
							var t = s;
							r.push(function(e) {
								return a(N(e, t), n[t])
							})
						}
					}();
					break;
				case "function":
					r.push(n);
					break;
				default:
					return e
			}
			t = [];
			for(var o = 0; o < e.length; o++) {
				var l = e[o];
				r.check(l) && t.push(l)
			}
			return t
		}
	}

	function _t(e) {
		var n = e.NUMBER_FORMATS;
		return function(e, t) {
			return j(t) && (t = n.CURRENCY_SYM), mt(e, n.PATTERNS[1], n.GROUP_SEP, n.DECIMAL_SEP, 2).replace(/\u00A4/g, t)
		}
	}

	function ht(e) {
		var n = e.NUMBER_FORMATS;
		return function(e, t) {
			return mt(e, n.PATTERNS[0], n.GROUP_SEP, n.DECIMAL_SEP, t)
		}
	}

	function mt(e, t, n, i, r) {
		if(isNaN(e) || !isFinite(e)) return "";
		var a = e < 0,
			s = (e = Math.abs(e)) + "",
			o = "",
			l = [],
			c = !1; - 1 !== s.indexOf("e") && ((u = s.match(/([\d\.]+)e(-?)(\d+)/)) && "-" == u[2] && u[3] > r + 1 ? s = "0" : (o = s, c = !0));
		if(c) 0 < r && -1 < e && e < 1 && (o = e.toFixed(r));
		else {
			s = (s.split(qn)[1] || "").length, j(r) && (r = Math.min(Math.max(t.minFrac, s), t.maxFrac)), s = Math.pow(10, r), s = (e = ("" + (e = Math.round(e * s) / s)).split(qn))[0], e = e[1] || "";
			var u = 0,
				d = t.lgSize,
				f = t.gSize;
			if(s.length >= d + f)
				for(u = s.length - d, c = 0; c < u; c++) 0 == (u - c) % f && 0 !== c && (o += n), o += s.charAt(c);
			for(c = u; c < s.length; c++) 0 == (s.length - c) % d && 0 !== c && (o += n), o += s.charAt(c);
			for(; e.length < r;) e += "0";
			r && "0" !== r && (o += i + e.substr(0, r))
		}
		return l.push(a ? t.negPre : t.posPre), l.push(o), l.push(a ? t.negSuf : t.posSuf), l.join("")
	}

	function gt(e, t, n) {
		var i = "";
		for(e < 0 && (i = "-", e = -e), e = "" + e; e.length < t;) e = "0" + e;
		return n && (e = e.substr(e.length - t)), i + e
	}

	function vt(t, n, i, r) {
		return i = i || 0,
			function(e) {
				return e = e["get" + t](), (0 < i || -i < e) && (e += i), 0 === e && -12 == i && (e = 12), gt(e, n, r)
			}
	}

	function yt(i, r) {
		return function(e, t) {
			var n = e["get" + i]();
			return t[Mt(r ? "SHORT" + i : i)][n]
		}
	}

	function $t(s) {
		var o = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
		return function(t, e) {
			var n, i, r = "",
				a = [];
			if(e = e || "mediumDate", e = s.DATETIME_FORMATS[e] || e, J(t) && (t = An.test(t) ? h(t) : function(e) {
					var t;
					if(t = e.match(o)) {
						e = new Date(0);
						var n = 0,
							i = 0,
							r = t[8] ? e.setUTCFullYear : e.setFullYear,
							a = t[8] ? e.setUTCHours : e.setHours;
						t[9] && (n = h(t[9] + t[10]), i = h(t[9] + t[11])), r.call(e, h(t[1]), h(t[2]) - 1, h(t[3])), n = h(t[4] || 0) - n, i = h(t[5] || 0) - i, r = h(t[6] || 0), t = Math.round(1e3 * parseFloat("0." + (t[7] || 0))), a.call(e, n, i, r, t)
					}
					return e
				}(t)), c(t) && (t = new Date(t)), !u(t)) return t;
			for(; e;)(i = En.exec(e)) ? e = (a = a.concat(Pt.call(i, 1))).pop() : (a.push(e), e = null);
			return Q(a, function(e) {
				n = Dn[e], r += n ? n(t, s.DATETIME_FORMATS) : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
			}), r
		}
	}

	function bt() {
		return function(e) {
			return C(e, !0)
		}
	}

	function wt() {
		return function(e, t) {
			if(!K(e) && !J(e)) return e;
			if(t = h(t), J(e)) return t ? 0 <= t ? e.slice(0, t) : e.slice(t, e.length) : "";
			var n, i, r = [];
			for(t > e.length ? t = e.length : t < -e.length && (t = -e.length), 0 < t ? (n = 0, i = t) : (n = e.length + t, i = e.length); n < i; n++) r.push(e[n]);
			return r
		}
	}

	function xt(c) {
		return function(e, r, t) {
			function n(n, e) {
				return $(e) ? function(e, t) {
					return n(t, e)
				} : n
			}
			if(!K(e) || !r) return e;
			var i, a, s;
			r = K(r) ? r : [r], i = function(e) {
				var t = !1,
					s = e || g;
				return J(e) && ("+" != e.charAt(0) && "-" != e.charAt(0) || (t = "-" == e.charAt(0), e = e.substring(1)), s = c(e)), n(function(e, t) {
					var n;
					n = s(e);
					var i = s(t),
						r = typeof n,
						a = typeof i;
					return r == a ? ("string" == r && (n = n.toLowerCase(), i = i.toLowerCase()), n = n === i ? 0 : n < i ? -1 : 1) : n = r < a ? -1 : 1, n
				}, t)
			}, s = [], Q(r, function(e, t, n) {
				s.push(i.call(a, e, t, n))
			}), r = s;
			for(var o = [], l = 0; l < e.length; l++) o.push(e[l]);
			return o.sort(n(function(e, t) {
				for(var n = 0; n < r.length; n++) {
					var i = r[n](e, t);
					if(0 !== i) return i
				}
				return 0
			}, t))
		}
	}

	function Ct(e) {
		return Z(e) && (e = {
			link: e
		}), e.restrict = e.restrict || "AC", D(e)
	}

	function Tt(n, e) {
		function r(e, t) {
			t = t ? "-" + ie(t, "-") : "", n.removeClass((e ? Wn : Bn) + t).addClass((e ? Bn : Wn) + t)
		}
		var a = this,
			s = n.parent().controller("form") || Fn,
			o = 0,
			l = a.$error = {},
			t = [];
		a.$name = e.name || e.ngForm, a.$dirty = !1, a.$pristine = !0, a.$valid = !0, a.$invalid = !1, s.$addControl(a), n.addClass(Gn), r(!0), a.$addControl = function(e) {
			z(e.$name, "input"), t.push(e), e.$name && (a[e.$name] = e)
		}, a.$removeControl = function(n) {
			n.$name && a[n.$name] === n && delete a[n.$name], Q(l, function(e, t) {
				a.$setValidity(t, !0, n)
			}), w(t, n)
		}, a.$setValidity = function(e, t, n) {
			var i = l[e];
			if(t) i && (w(i, n), i.length || (--o || (r(t), a.$valid = !0, a.$invalid = !1), r(!(l[e] = !1), e), s.$setValidity(e, !0, a)));
			else {
				if(o || r(t), i) {
					if(-1 != b(i, n)) return
				} else l[e] = i = [], o++, r(!1, e), s.$setValidity(e, !1, a);
				i.push(n), a.$valid = !1, a.$invalid = !0
			}
		}, a.$setDirty = function() {
			n.removeClass(Gn).addClass(Yn), a.$dirty = !0, a.$pristine = !1, s.$setDirty()
		}, a.$setPristine = function() {
			n.removeClass(Yn).addClass(Gn), a.$dirty = !1, a.$pristine = !0, Q(t, function(e) {
				e.$setPristine()
			})
		}
	}

	function St(n, i, t, r, e, a) {
		var s = !1;
		i.on("compositionstart", function() {
			s = !0
		}), i.on("compositionend", function() {
			s = !1
		});
		var o = function() {
			if(!s) {
				var e = i.val();
				$(t.ngTrim || "T") && (e = Rt(e)), r.$viewValue !== e && n.$apply(function() {
					r.$setViewValue(e)
				})
			}
		};
		if(e.hasEvent("input")) i.on("input", o);
		else {
			var l, c = function() {
				l || (l = a.defer(function() {
					o(), l = null
				}))
			};
			i.on("keydown", function(e) {
				91 === (e = e.keyCode) || 15 < e && e < 19 || 37 <= e && e <= 40 || c()
			}), e.hasEvent("paste") && i.on("paste cut", c)
		}
		i.on("change", o), r.$render = function() {
			i.val(r.$isEmpty(r.$viewValue) ? "" : r.$viewValue)
		};
		var u = t.ngPattern,
			d = function(e, t) {
				return r.$isEmpty(t) || e.test(t) ? (r.$setValidity("pattern", !0), t) : (r.$setValidity("pattern", !1), Y)
			};
		if(u && ((e = u.match(/^\/(.*)\/([gim]*)$/)) ? (u = RegExp(e[1], e[2]), e = function(e) {
				return d(u, e)
			}) : e = function(e) {
				var t = n.$eval(u);
				if(!t || !t.test) throw _("ngPattern")("noregexp", u, t, ne(i));
				return d(t, e)
			}, r.$formatters.push(e), r.$parsers.push(e)), t.ngMinlength) {
			var f = h(t.ngMinlength);
			e = function(e) {
				return !r.$isEmpty(e) && e.length < f ? (r.$setValidity("minlength", !1), Y) : (r.$setValidity("minlength", !0), e)
			}, r.$parsers.push(e), r.$formatters.push(e)
		}
		if(t.ngMaxlength) {
			var p = h(t.ngMaxlength);
			e = function(e) {
				return !r.$isEmpty(e) && e.length > p ? (r.$setValidity("maxlength", !1), Y) : (r.$setValidity("maxlength", !0), e)
			}, r.$parsers.push(e), r.$formatters.push(e)
		}
	}

	function kt(o, l) {
		return o = "ngClass" + o,
			function() {
				return {
					restrict: "AC",
					link: function(r, e, a) {
						function t(e) {
							if(!0 === l || r.$index % 2 === l) {
								var t = s(e || "");
								n ? ee(e, n) || a.$updateClass(t, s(n)) : a.$addClass(t)
							}
							n = x(e)
						}

						function s(e) {
							if(K(e)) return e.join(" ");
							if(X(e)) {
								var n = [];
								return Q(e, function(e, t) {
									e && n.push(t)
								}), n.join(" ")
							}
							return e
						}
						var n;
						r.$watch(a[o], t, !0), a.$observe("class", function(e) {
							t(r.$eval(a[o]))
						}), "ngClass" !== o && r.$watch("$index", function(e, t) {
							var n = 1 & e;
							if(n !== t & 1) {
								var i = s(r.$eval(a[o]));
								n === l ? a.$addClass(i) : a.$removeClass(i)
							}
						})
					}
				}
			}
	}
	var qt, Dt, Et, At, jt, Ot = function(e) {
			return J(e) ? e.toLowerCase() : e
		},
		Mt = function(e) {
			return J(e) ? e.toUpperCase() : e
		},
		Pt = [].slice,
		Ft = [].push,
		It = Object.prototype.toString,
		zt = _("ng"),
		Nt = d.angular || (d.angular = {}),
		Ut = ["0", "0", "0"];
	qt = h((/msie (\d+)/.exec(Ot(navigator.userAgent)) || [])[1]), isNaN(qt) && (qt = h((/trident\/.*; rv:(\d+)/.exec(Ot(navigator.userAgent)) || [])[1])), S.$inject = [], g.$inject = [];
	var Rt = String.prototype.trim ? function(e) {
		return J(e) ? e.trim() : e
	} : function(e) {
		return J(e) ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
	};
	jt = qt < 9 ? function(e) {
		return(e = e.nodeName ? e : e[0]).scopeName && "HTML" != e.scopeName ? Mt(e.scopeName + ":" + e.nodeName) : e.nodeName
	} : function(e) {
		return e.nodeName ? e.nodeName : e[0].nodeName
	};
	var Lt = /[A-Z]/g,
		Ht = {
			full: "1.2.5",
			major: 1,
			minor: 2,
			dot: 5,
			codeName: "singularity-expansion"
		},
		Vt = L.cache = {},
		Bt = L.expando = "ng-" + (new Date).getTime(),
		Wt = 1,
		Gt = d.document.addEventListener ? function(e, t, n) {
			e.addEventListener(t, n, !1)
		} : function(e, t, n) {
			e.attachEvent("on" + t, n)
		},
		Yt = d.document.removeEventListener ? function(e, t, n) {
			e.removeEventListener(t, n, !1)
		} : function(e, t, n) {
			e.detachEvent("on" + t, n)
		},
		Qt = /([\:\-\_]+(.))/g,
		Xt = /^moz([A-Z])/,
		Jt = _("jqLite"),
		Kt = L.prototype = {
			ready: function(e) {
				function t() {
					n || (n = !0, e())
				}
				var n = !1;
				"complete" === G.readyState ? setTimeout(t) : (this.on("DOMContentLoaded", t), L(d).on("load", t))
			},
			toString: function() {
				var t = [];
				return Q(this, function(e) {
					t.push("" + e)
				}), "[" + t.join(", ") + "]"
			},
			eq: function(e) {
				return Dt(0 <= e ? this[e] : this[this.length + e])
			},
			length: 0,
			push: Ft,
			sort: [].sort,
			splice: [].splice
		},
		Zt = {};
	Q("multiple selected checked disabled readOnly required open".split(" "), function(e) {
		Zt[Ot(e)] = e
	});
	var en = {};
	Q("input select option textarea button form details".split(" "), function(e) {
		en[Mt(e)] = !0
	}), Q({
		data: W,
		inheritedData: de,
		scope: function(e) {
			return Dt(e).data("$scope") || de(e.parentNode || e, ["$isolateScope", "$scope"])
		},
		isolateScope: function(e) {
			return Dt(e).data("$isolateScope") || Dt(e).data("$isolateScopeNoTemplate")
		},
		controller: ue,
		injector: function(e) {
			return de(e, "$injector")
		},
		removeAttr: function(e, t) {
			e.removeAttribute(t)
		},
		hasClass: se,
		css: function(e, t, n) {
			var i;
			if(t = R(t), !O(n)) return qt <= 8 && ("" === (i = e.currentStyle && e.currentStyle[t]) && (i = "auto")), i = i || e.style[t], qt <= 8 && (i = "" === i ? Y : i), i;
			e.style[t] = n
		},
		attr: function(e, t, n) {
			var i = Ot(t);
			if(Zt[i]) {
				if(!O(n)) return e[t] || (e.attributes.getNamedItem(t) || S).specified ? i : Y;
				n ? (e[t] = !0, e.setAttribute(t, i)) : (e[t] = !1, e.removeAttribute(i))
			} else if(O(n)) e.setAttribute(t, n);
			else if(e.getAttribute) return null === (e = e.getAttribute(t, 2)) ? Y : e
		},
		prop: function(e, t, n) {
			if(!O(n)) return e[t];
			e[t] = n
		},
		text: function() {
			function e(e, t) {
				var n = i[e.nodeType];
				if(j(t)) return n ? e[n] : "";
				e[n] = t
			}
			var i = [];
			return qt < 9 ? (i[1] = "innerText", i[3] = "nodeValue") : i[1] = i[3] = "textContent", e.$dv = "", e
		}(),
		val: function(e, t) {
			if(j(t)) {
				if("SELECT" === jt(e) && e.multiple) {
					var n = [];
					return Q(e.options, function(e) {
						e.selected && n.push(e.value || e.text)
					}), 0 === n.length ? null : n
				}
				return e.value
			}
			e.value = t
		},
		html: function(e, t) {
			if(j(t)) return e.innerHTML;
			for(var n = 0, i = e.childNodes; n < i.length; n++) H(i[n]);
			e.innerHTML = t
		},
		empty: fe
	}, function(s, e) {
		L.prototype[e] = function(e, t) {
			var n, i;
			if(s !== fe && (2 == s.length && s !== se && s !== ue ? e : t) === Y) {
				if(X(e)) {
					for(n = 0; n < this.length; n++)
						if(s === W) s(this[n], e);
						else
							for(i in e) s(this[n], i, e[i]);
					return this
				}
				i = (n = s.$dv) === Y ? Math.min(this.length, 1) : this.length;
				for(var r = 0; r < i; r++) {
					var a = s(this[r], e, t);
					n = n ? n + a : a
				}
				return n
			}
			for(n = 0; n < this.length; n++) s(this[n], e, t);
			return this
		}
	}), Q({
		removeData: i,
		dealoc: H,
		on: function t(r, e, a, n) {
			if(O(n)) throw Jt("onargs");
			var i, s, o, l = B(r, "events"),
				c = B(r, "handle");
			l || B(r, "events", l = {}), c || B(r, "handle", (s = l, (o = function(t, e) {
				if(t.preventDefault || (t.preventDefault = function() {
						t.returnValue = !1
					}), t.stopPropagation || (t.stopPropagation = function() {
						t.cancelBubble = !0
					}), t.target || (t.target = t.srcElement || G), j(t.defaultPrevented)) {
					var n = t.preventDefault;
					t.preventDefault = function() {
						t.defaultPrevented = !0, n.call(t)
					}, t.defaultPrevented = !1
				}
				t.isDefaultPrevented = function() {
					return t.defaultPrevented || !1 === t.returnValue
				}, Q(s[e || t.type], function(e) {
					e.call(i, t)
				}), qt <= 8 ? (t.preventDefault = null, t.stopPropagation = null, t.isDefaultPrevented = null) : (delete t.preventDefault, delete t.stopPropagation, delete t.isDefaultPrevented)
			}).elem = i = r, c = o)), Q(e.split(" "), function(n) {
				var e = l[n];
				if(!e) {
					if("mouseenter" == n || "mouseleave" == n) {
						var i = G.body.contains || G.body.compareDocumentPosition ? function(e, t) {
							var n = 9 === e.nodeType ? e.documentElement : e,
								i = t && t.parentNode;
							return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
						} : function(e, t) {
							if(t)
								for(; t = t.parentNode;)
									if(t === e) return !0;
							return !1
						};
						l[n] = [], t(r, {
							mouseleave: "mouseout",
							mouseenter: "mouseover"
						}[n], function(e) {
							var t = e.relatedTarget;
							t && (t === this || i(this, t)) || c(e, n)
						})
					} else Gt(r, n, c), l[n] = [];
					e = l[n]
				}
				e.push(a)
			})
		},
		off: V,
		replaceWith: function(t, e) {
			var n, i = t.parentNode;
			H(t), Q(new L(e), function(e) {
				n ? i.insertBefore(e, n.nextSibling) : i.replaceChild(e, t), n = e
			})
		},
		children: function(e) {
			var t = [];
			return Q(e.childNodes, function(e) {
				1 === e.nodeType && t.push(e)
			}), t
		},
		contents: function(e) {
			return e.childNodes || []
		},
		append: function(t, e) {
			Q(new L(e), function(e) {
				1 !== t.nodeType && 11 !== t.nodeType || t.appendChild(e)
			})
		},
		prepend: function(t, e) {
			if(1 === t.nodeType) {
				var n = t.firstChild;
				Q(new L(e), function(e) {
					t.insertBefore(e, n)
				})
			}
		},
		wrap: function(e, t) {
			t = Dt(t)[0];
			var n = e.parentNode;
			n && n.replaceChild(t, e), t.appendChild(e)
		},
		remove: function(e) {
			H(e);
			var t = e.parentNode;
			t && t.removeChild(e)
		},
		after: function(e, t) {
			var n = e,
				i = e.parentNode;
			Q(new L(t), function(e) {
				i.insertBefore(e, n.nextSibling), n = e
			})
		},
		addClass: le,
		removeClass: oe,
		toggleClass: function(e, t, n) {
			j(n) && (n = !se(e, t)), (n ? le : oe)(e, t)
		},
		parent: function(e) {
			return(e = e.parentNode) && 11 !== e.nodeType ? e : null
		},
		next: function(e) {
			if(e.nextElementSibling) return e.nextElementSibling;
			for(e = e.nextSibling; null != e && 1 !== e.nodeType;) e = e.nextSibling;
			return e
		},
		find: function(e, t) {
			return e.getElementsByTagName ? e.getElementsByTagName(t) : []
		},
		clone: ae,
		triggerHandler: function(t, e, n) {
			e = (B(t, "events") || {})[e], n = n || [];
			var i = [{
				preventDefault: S,
				stopPropagation: S
			}];
			Q(e, function(e) {
				e.apply(t, i.concat(n))
			})
		}
	}, function(a, e) {
		L.prototype[e] = function(e, t, n) {
			for(var i, r = 0; r < this.length; r++) j(i) ? O(i = a(this[r], e, t, n)) && (i = Dt(i)) : ce(i, a(this[r], e, t, n));
			return O(i) ? i : this
		}, L.prototype.bind = L.prototype.on, L.prototype.unbind = L.prototype.off
	}), he.prototype = {
		put: function(e, t) {
			this[_e(e)] = t
		},
		get: function(e) {
			return this[_e(e)]
		},
		remove: function(e) {
			var t = this[e = _e(e)];
			return delete this[e], t
		}
	};
	var tn = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
		nn = /,/,
		rn = /^\s*(_?)(\S+?)\1\s*$/,
		an = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
		sn = _("$injector"),
		on = _("$animate"),
		ln = ["$provide", function(i) {
			this.$$selectors = {}, this.register = function(e, t) {
				var n = e + "-animation";
				if(e && "." != e.charAt(0)) throw on("notcsel", e);
				this.$$selectors[e.substr(1)] = n, i.factory(n, t)
			}, this.$get = ["$timeout", function(r) {
				return {
					enter: function(e, t, n, i) {
						n ? n.after(e) : (t && t[0] || (t = n.parent()), t.append(e)), i && r(i, 0, !1)
					},
					leave: function(e, t) {
						e.remove(), t && r(t, 0, !1)
					},
					move: function(e, t, n, i) {
						this.enter(e, t, n, i)
					},
					addClass: function(e, t, n) {
						t = J(t) ? t : K(t) ? t.join(" ") : "", Q(e, function(e) {
							le(e, t)
						}), n && r(n, 0, !1)
					},
					removeClass: function(e, t, n) {
						t = J(t) ? t : K(t) ? t.join(" ") : "", Q(e, function(e) {
							oe(e, t)
						}), n && r(n, 0, !1)
					},
					enabled: S
				}
			}]
		}],
		cn = _("$compile");
	xe.$inject = ["$provide", "$$sanitizeUriProvider"];
	var un = /^(x[\:\-_]|data[\:\-_])/i,
		dn = d.XMLHttpRequest || function() {
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.6.0")
			} catch(e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP.3.0")
			} catch(e) {}
			try {
				return new ActiveXObject("Msxml2.XMLHTTP")
			} catch(e) {}
			throw _("$httpBackend")("noxhr")
		},
		fn = _("$interpolate"),
		pn = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
		_n = {
			http: 80,
			https: 443,
			ftp: 21
		},
		hn = _("$location");
	Ve.prototype = He.prototype = Le.prototype = {
		$$html5: !1,
		$$replace: !1,
		absUrl: Be("$$absUrl"),
		url: function(e, t) {
			if(j(e)) return this.$$url;
			var n = pn.exec(e);
			return n[1] && this.path(decodeURIComponent(n[1])), (n[2] || n[1]) && this.search(n[3] || ""), this.hash(n[5] || "", t), this
		},
		protocol: Be("$$protocol"),
		host: Be("$$host"),
		port: Be("$$port"),
		path: We("$$path", function(e) {
			return "/" == e.charAt(0) ? e : "/" + e
		}),
		search: function(e, t) {
			switch(arguments.length) {
				case 0:
					return this.$$search;
				case 1:
					if(J(e)) this.$$search = k(e);
					else {
						if(!X(e)) throw hn("isrcharg");
						this.$$search = e
					}
					break;
				default:
					j(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
			}
			return this.$$compose(), this
		},
		hash: We("$$hash", g),
		replace: function() {
			return this.$$replace = !0, this
		}
	};
	var mn, gn = _("$parse"),
		vn = {},
		yn = {
			null: function() {
				return null
			},
			true: function() {
				return !0
			},
			false: function() {
				return !1
			},
			undefined: S,
			"+": function(e, t, n, i) {
				return n = n(e, t), i = i(e, t), O(n) ? O(i) ? n + i : n : O(i) ? i : Y
			},
			"-": function(e, t, n, i) {
				return n = n(e, t), i = i(e, t), (O(n) ? n : 0) - (O(i) ? i : 0)
			},
			"*": function(e, t, n, i) {
				return n(e, t) * i(e, t)
			},
			"/": function(e, t, n, i) {
				return n(e, t) / i(e, t)
			},
			"%": function(e, t, n, i) {
				return n(e, t) % i(e, t)
			},
			"^": function(e, t, n, i) {
				return n(e, t) ^ i(e, t)
			},
			"=": S,
			"===": function(e, t, n, i) {
				return n(e, t) === i(e, t)
			},
			"!==": function(e, t, n, i) {
				return n(e, t) !== i(e, t)
			},
			"==": function(e, t, n, i) {
				return n(e, t) == i(e, t)
			},
			"!=": function(e, t, n, i) {
				return n(e, t) != i(e, t)
			},
			"<": function(e, t, n, i) {
				return n(e, t) < i(e, t)
			},
			">": function(e, t, n, i) {
				return n(e, t) > i(e, t)
			},
			"<=": function(e, t, n, i) {
				return n(e, t) <= i(e, t)
			},
			">=": function(e, t, n, i) {
				return n(e, t) >= i(e, t)
			},
			"&&": function(e, t, n, i) {
				return n(e, t) && i(e, t)
			},
			"||": function(e, t, n, i) {
				return n(e, t) || i(e, t)
			},
			"&": function(e, t, n, i) {
				return n(e, t) & i(e, t)
			},
			"|": function(e, t, n, i) {
				return i(e, t)(e, t, n(e, t))
			},
			"!": function(e, t, n) {
				return !n(e, t)
			}
		},
		$n = {
			n: "\n",
			f: "\f",
			r: "\r",
			t: "\t",
			v: "\v",
			"'": "'",
			'"': '"'
		},
		bn = function(e) {
			this.options = e
		};
	bn.prototype = {
		constructor: bn,
		lex: function(e) {
			var t;
			for(this.text = e, this.index = 0, this.ch = Y, this.lastCh = ":", this.tokens = [], e = []; this.index < this.text.length;) {
				if(this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch);
				else if(this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber();
				else if(this.isIdent(this.ch)) this.readIdent(), this.was("{,") && "{" === e[0] && (t = this.tokens[this.tokens.length - 1]) && (t.json = -1 === t.text.indexOf("."));
				else if(this.is("(){}[].,;:?")) this.tokens.push({
					index: this.index,
					text: this.ch,
					json: this.was(":[,") && this.is("{[") || this.is("}]:,")
				}), this.is("{[") && e.unshift(this.ch), this.is("}]") && e.shift(), this.index++;
				else {
					if(this.isWhitespace(this.ch)) {
						this.index++;
						continue
					}
					var n = this.ch + this.peek(),
						i = n + this.peek(2),
						r = yn[this.ch],
						a = yn[n],
						s = yn[i];
					s ? (this.tokens.push({
						index: this.index,
						text: i,
						fn: s
					}), this.index += 3) : a ? (this.tokens.push({
						index: this.index,
						text: n,
						fn: a
					}), this.index += 2) : r ? (this.tokens.push({
						index: this.index,
						text: this.ch,
						fn: r,
						json: this.was("[,:") && this.is("+-")
					}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
				}
				this.lastCh = this.ch
			}
			return this.tokens
		},
		is: function(e) {
			return -1 !== e.indexOf(this.ch)
		},
		was: function(e) {
			return -1 !== e.indexOf(this.lastCh)
		},
		peek: function(e) {
			return e = e || 1, this.index + e < this.text.length && this.text.charAt(this.index + e)
		},
		isNumber: function(e) {
			return "0" <= e && e <= "9"
		},
		isWhitespace: function(e) {
			return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || " " === e
		},
		isIdent: function(e) {
			return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
		},
		isExpOperator: function(e) {
			return "-" === e || "+" === e || this.isNumber(e)
		},
		throwError: function(e, t, n) {
			throw n = n || this.index, t = O(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n, gn("lexerr", e, t, this.text)
		},
		readNumber: function() {
			for(var e = "", t = this.index; this.index < this.text.length;) {
				var n = Ot(this.text.charAt(this.index));
				if("." == n || this.isNumber(n)) e += n;
				else {
					var i = this.peek();
					if("e" == n && this.isExpOperator(i)) e += n;
					else if(this.isExpOperator(n) && i && this.isNumber(i) && "e" == e.charAt(e.length - 1)) e += n;
					else {
						if(!this.isExpOperator(n) || i && this.isNumber(i) || "e" != e.charAt(e.length - 1)) break;
						this.throwError("Invalid exponent")
					}
				}
				this.index++
			}
			e *= 1, this.tokens.push({
				index: t,
				text: e,
				json: !0,
				fn: function() {
					return e
				}
			})
		},
		readIdent: function() {
			for(var e, t, n, i, r = this, a = "", s = this.index; this.index < this.text.length && ("." === (i = this.text.charAt(this.index)) || this.isIdent(i) || this.isNumber(i));) "." === i && (e = this.index), a += i, this.index++;
			if(e)
				for(t = this.index; t < this.text.length;) {
					if("(" === (i = this.text.charAt(t))) {
						n = a.substr(e - s + 1), a = a.substr(0, e - s), this.index = t;
						break
					}
					if(!this.isWhitespace(i)) break;
					t++
				}
			if(s = {
					index: s,
					text: a
				}, yn.hasOwnProperty(a)) s.fn = yn[a], s.json = yn[a];
			else {
				var o = Ze(a, this.options, this.text);
				s.fn = q(function(e, t) {
					return o(e, t)
				}, {
					assign: function(e, t) {
						return Je(e, a, t, r.text, r.options)
					}
				})
			}
			this.tokens.push(s), n && (this.tokens.push({
				index: e,
				text: ".",
				json: !1
			}), this.tokens.push({
				index: e + 1,
				text: n,
				json: !1
			}))
		},
		readString: function(e) {
			var t = this.index;
			this.index++;
			for(var n = "", i = e, r = !1; this.index < this.text.length;) {
				var a = this.text.charAt(this.index);
				i = i + a;
				if(r) "u" === a ? ((a = this.text.substring(this.index + 1, this.index + 5)).match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))) : n = (r = $n[a]) ? n + r : n + a, r = !1;
				else if("\\" === a) r = !0;
				else {
					if(a === e) return this.index++, void this.tokens.push({
						index: t,
						text: i,
						string: n,
						json: !0,
						fn: function() {
							return n
						}
					});
					n += a
				}
				this.index++
			}
			this.throwError("Unterminated quote", t)
		}
	};
	var wn = function(e, t, n) {
		this.lexer = e, this.$filter = t, this.options = n
	};
	wn.ZERO = function() {
		return 0
	}, wn.prototype = {
		constructor: wn,
		parse: function(e, t) {
			this.text = e, this.json = t, this.tokens = this.lexer.lex(e), t && (this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
				this.throwError("is not valid json", {
					text: e,
					index: 0
				})
			});
			var n = t ? this.primary() : this.statements();
			return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), n.literal = !!n.literal, n.constant = !!n.constant, n
		},
		primary: function() {
			var e, t;
			if(this.expect("(")) e = this.filterChain(), this.consume(")");
			else if(this.expect("[")) e = this.arrayDeclaration();
			else if(this.expect("{")) e = this.object();
			else {
				var n = this.expect();
				(e = n.fn) || this.throwError("not a primary expression", n), n.json && (e.constant = !0, e.literal = !0)
			}
			for(; n = this.expect("(", "[", ".");) "(" === n.text ? (e = this.functionCall(e, t), t = null) : "[" === n.text ? (t = e, e = this.objectIndex(e)) : "." === n.text ? (t = e, e = this.fieldAccess(e)) : this.throwError("IMPOSSIBLE");
			return e
		},
		throwError: function(e, t) {
			throw gn("syntax", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
		},
		peekToken: function() {
			if(0 === this.tokens.length) throw gn("ueoe", this.text);
			return this.tokens[0]
		},
		peek: function(e, t, n, i) {
			if(0 < this.tokens.length) {
				var r = this.tokens[0],
					a = r.text;
				if(a === e || a === t || a === n || a === i || !(e || t || n || i)) return r
			}
			return !1
		},
		expect: function(e, t, n, i) {
			return !!(e = this.peek(e, t, n, i)) && (this.json && !e.json && this.throwError("is not valid json", e), this.tokens.shift(), e)
		},
		consume: function(e) {
			this.expect(e) || this.throwError("is unexpected, expecting [" + e + "]", this.peek())
		},
		unaryFn: function(n, i) {
			return q(function(e, t) {
				return n(e, t, i)
			}, {
				constant: i.constant
			})
		},
		ternaryFn: function(n, i, r) {
			return q(function(e, t) {
				return n(e, t) ? i(e, t) : r(e, t)
			}, {
				constant: n.constant && i.constant && r.constant
			})
		},
		binaryFn: function(n, i, r) {
			return q(function(e, t) {
				return i(e, t, n, r)
			}, {
				constant: n.constant && r.constant
			})
		},
		statements: function() {
			for(var a = [];;)
				if(0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(e, t) {
					for(var n, i = 0; i < a.length; i++) {
						var r = a[i];
						r && (n = r(e, t))
					}
					return n
				}
		},
		filterChain: function() {
			for(var e, t = this.expression();;) {
				if(!(e = this.expect("|"))) return t;
				t = this.binaryFn(t, e.fn, this.filter())
			}
		},
		filter: function() {
			for(var e = this.expect(), r = this.$filter(e.text), a = [];;) {
				if(!(e = this.expect(":"))) {
					var t = function(e, t, n) {
						n = [n];
						for(var i = 0; i < a.length; i++) n.push(a[i](e, t));
						return r.apply(e, n)
					};
					return function() {
						return t
					}
				}
				a.push(this.expression())
			}
		},
		expression: function() {
			return this.assignment()
		},
		assignment: function() {
			var n, e, i = this.ternary();
			return(e = this.expect("=")) ? (i.assign || this.throwError("implies assignment but [" + this.text.substring(0, e.index) + "] can not be assigned to", e), n = this.ternary(), function(e, t) {
				return i.assign(e, n(e, t), t)
			}) : i
		},
		ternary: function() {
			var e, t, n = this.logicalOR();
			return this.expect("?") ? (e = this.ternary(), (t = this.expect(":")) ? this.ternaryFn(n, e, this.ternary()) : void this.throwError("expected :", t)) : n
		},
		logicalOR: function() {
			for(var e, t = this.logicalAND();;) {
				if(!(e = this.expect("||"))) return t;
				t = this.binaryFn(t, e.fn, this.logicalAND())
			}
		},
		logicalAND: function() {
			var e, t = this.equality();
			return(e = this.expect("&&")) && (t = this.binaryFn(t, e.fn, this.logicalAND())), t
		},
		equality: function() {
			var e, t = this.relational();
			return(e = this.expect("==", "!=", "===", "!==")) && (t = this.binaryFn(t, e.fn, this.equality())), t
		},
		relational: function() {
			var e, t = this.additive();
			return(e = this.expect("<", ">", "<=", ">=")) && (t = this.binaryFn(t, e.fn, this.relational())), t
		},
		additive: function() {
			for(var e, t = this.multiplicative(); e = this.expect("+", "-");) t = this.binaryFn(t, e.fn, this.multiplicative());
			return t
		},
		multiplicative: function() {
			for(var e, t = this.unary(); e = this.expect("*", "/", "%");) t = this.binaryFn(t, e.fn, this.unary());
			return t
		},
		unary: function() {
			var e;
			return this.expect("+") ? this.primary() : (e = this.expect("-")) ? this.binaryFn(wn.ZERO, e.fn, this.unary()) : (e = this.expect("!")) ? this.unaryFn(e.fn, this.unary()) : this.primary()
		},
		fieldAccess: function(i) {
			var r = this,
				a = this.expect().text,
				s = Ze(a, this.options, this.text);
			return q(function(e, t, n) {
				return s(n || i(e, t), t)
			}, {
				assign: function(e, t, n) {
					return Je(i(e, n), a, t, r.text, r.options)
				}
			})
		},
		objectIndex: function(a) {
			var s = this,
				o = this.expression();
			return this.consume("]"), q(function(e, t) {
				var n, i = a(e, t),
					r = o(e, t);
				return i ? ((i = Xe(i[r], s.text)) && i.then && s.options.unwrapPromises && ("$$v" in (n = i) || (n.$$v = Y, n.then(function(e) {
					n.$$v = e
				})), i = i.$$v), i) : Y
			}, {
				assign: function(e, t, n) {
					var i = o(e, n);
					return Xe(a(e, n), s.text)[i] = t
				}
			})
		},
		functionCall: function(a, s) {
			var o = [];
			if(")" !== this.peekToken().text)
				for(; o.push(this.expression()), this.expect(","););
			this.consume(")");
			var l = this;
			return function(e, t) {
				for(var n = [], i = s ? s(e, t) : e, r = 0; r < o.length; r++) n.push(o[r](e, t));
				return r = a(e, t, i) || S, Xe(i, l.text), Xe(r, l.text), Xe(n = r.apply ? r.apply(i, n) : r(n[0], n[1], n[2], n[3], n[4]), l.text)
			}
		},
		arrayDeclaration: function() {
			var r = [],
				e = !0;
			if("]" !== this.peekToken().text)
				do {
					var t = this.expression();
					r.push(t), t.constant || (e = !1)
				} while (this.expect(","));
			return this.consume("]"), q(function(e, t) {
				for(var n = [], i = 0; i < r.length; i++) n.push(r[i](e, t));
				return n
			}, {
				literal: !0,
				constant: e
			})
		},
		object: function() {
			var a = [],
				e = !0;
			if("}" !== this.peekToken().text)
				do {
					var t = (t = this.expect()).string || t.text;
					this.consume(":");
					var n = this.expression();
					a.push({
						key: t,
						value: n
					}), n.constant || (e = !1)
				} while (this.expect(","));
			return this.consume("}"), q(function(e, t) {
				for(var n = {}, i = 0; i < a.length; i++) {
					var r = a[i];
					n[r.key] = r.value(e, t)
				}
				return n
			}, {
				literal: !0,
				constant: e
			})
		}
	};
	var xn = {},
		Cn = _("$sce"),
		Tn = {
			HTML: "html",
			CSS: "css",
			URL: "url",
			RESOURCE_URL: "resourceUrl",
			JS: "js"
		},
		Sn = G.createElement("a"),
		kn = ct(d.location.href);
	ft.$inject = ["$provide"], _t.$inject = ["$locale"], ht.$inject = ["$locale"];
	var qn = ".",
		Dn = {
			yyyy: vt("FullYear", 4),
			yy: vt("FullYear", 2, 0, !0),
			y: vt("FullYear", 1),
			MMMM: yt("Month"),
			MMM: yt("Month", !0),
			MM: vt("Month", 2, 1),
			M: vt("Month", 1, 1),
			dd: vt("Date", 2),
			d: vt("Date", 1),
			HH: vt("Hours", 2),
			H: vt("Hours", 1),
			hh: vt("Hours", 2, -12),
			h: vt("Hours", 1, -12),
			mm: vt("Minutes", 2),
			m: vt("Minutes", 1),
			ss: vt("Seconds", 2),
			s: vt("Seconds", 1),
			sss: vt("Milliseconds", 3),
			EEEE: yt("Day"),
			EEE: yt("Day", !0),
			a: function(e, t) {
				return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
			},
			Z: function(e) {
				return(0 <= (e = -1 * e.getTimezoneOffset()) ? "+" : "") + (gt(Math[0 < e ? "floor" : "ceil"](e / 60), 2) + gt(Math.abs(e % 60), 2))
			}
		},
		En = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
		An = /^\-?\d+$/;
	$t.$inject = ["$locale"];
	var jn = D(Ot),
		On = D(Mt);
	xt.$inject = ["$parse"];
	var Mn = D({
			restrict: "E",
			compile: function(e, t) {
				if(qt <= 8 && (t.href || t.name || t.$set("href", ""), e.append(G.createComment("IE fix"))), !t.href && !t.name) return function(e, t) {
					t.on("click", function(e) {
						t.attr("href") || e.preventDefault()
					})
				}
			}
		}),
		Pn = {};
	Q(Zt, function(e, i) {
		if("multiple" != e) {
			var r = Ce("ng-" + i);
			Pn[r] = function() {
				return {
					priority: 100,
					compile: function() {
						return function(e, t, n) {
							e.$watch(n[r], function(e) {
								n.$set(i, !!e)
							})
						}
					}
				}
			}
		}
	}), Q(["src", "srcset", "href"], function(i) {
		var r = Ce("ng-" + i);
		Pn[r] = function() {
			return {
				priority: 99,
				link: function(e, t, n) {
					n.$observe(r, function(e) {
						e && (n.$set(i, e), qt && t.prop(i, n[i]))
					})
				}
			}
		}
	});
	var Fn = {
		$addControl: S,
		$removeControl: S,
		$setValidity: S,
		$setDirty: S,
		$setPristine: S
	};
	Tt.$inject = ["$element", "$attrs", "$scope"];
	var In = function(e) {
			return ["$timeout", function(o) {
				return {
					name: "form",
					restrict: e ? "EAC" : "E",
					controller: Tt,
					compile: function() {
						return {
							pre: function(e, t, n, i) {
								if(!n.action) {
									var r = function(e) {
										e.preventDefault ? e.preventDefault() : e.returnValue = !1
									};
									Gt(t[0], "submit", r), t.on("$destroy", function() {
										o(function() {
											Yt(t[0], "submit", r)
										}, 0, !1)
									})
								}
								var a = t.parent().controller("form"),
									s = n.name || n.ngForm;
								s && Je(e, s, i, s), a && t.on("$destroy", function() {
									a.$removeControl(i), s && Je(e, s, Y, s), q(i, Fn)
								})
							}
						}
					}
				}
			}]
		},
		zn = In(),
		Nn = In(!0),
		Un = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
		Rn = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
		Ln = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
		Hn = {
			text: St,
			number: function(e, t, n, i, r, a) {
				St(e, t, n, i, r, a), i.$parsers.push(function(e) {
					var t = i.$isEmpty(e);
					return t || Ln.test(e) ? (i.$setValidity("number", !0), "" === e ? null : t ? e : parseFloat(e)) : (i.$setValidity("number", !1), Y)
				}), i.$formatters.push(function(e) {
					return i.$isEmpty(e) ? "" : "" + e
				}), n.min && (e = function(e) {
					var t = parseFloat(n.min);
					return !i.$isEmpty(e) && e < t ? (i.$setValidity("min", !1), Y) : (i.$setValidity("min", !0), e)
				}, i.$parsers.push(e), i.$formatters.push(e)), n.max && (e = function(e) {
					var t = parseFloat(n.max);
					return !i.$isEmpty(e) && t < e ? (i.$setValidity("max", !1), Y) : (i.$setValidity("max", !0), e)
				}, i.$parsers.push(e), i.$formatters.push(e)), i.$formatters.push(function(e) {
					return i.$isEmpty(e) || c(e) ? (i.$setValidity("number", !0), e) : (i.$setValidity("number", !1), Y)
				})
			},
			url: function(e, t, n, i, r, a) {
				St(e, t, n, i, r, a), e = function(e) {
					return i.$isEmpty(e) || Un.test(e) ? (i.$setValidity("url", !0), e) : (i.$setValidity("url", !1), Y)
				}, i.$formatters.push(e), i.$parsers.push(e)
			},
			email: function(e, t, n, i, r, a) {
				St(e, t, n, i, r, a), e = function(e) {
					return i.$isEmpty(e) || Rn.test(e) ? (i.$setValidity("email", !0), e) : (i.$setValidity("email", !1), Y)
				}, i.$formatters.push(e), i.$parsers.push(e)
			},
			radio: function(e, t, n, i) {
				j(n.name) && t.attr("name", r()), t.on("click", function() {
					t[0].checked && e.$apply(function() {
						i.$setViewValue(n.value)
					})
				}), i.$render = function() {
					t[0].checked = n.value == i.$viewValue
				}, n.$observe("value", i.$render)
			},
			checkbox: function(e, t, n, i) {
				var r = n.ngTrueValue,
					a = n.ngFalseValue;
				J(r) || (r = !0), J(a) || (a = !1), t.on("click", function() {
					e.$apply(function() {
						i.$setViewValue(t[0].checked)
					})
				}), i.$render = function() {
					t[0].checked = i.$viewValue
				}, i.$isEmpty = function(e) {
					return e !== r
				}, i.$formatters.push(function(e) {
					return e === r
				}), i.$parsers.push(function(e) {
					return e ? r : a
				})
			},
			hidden: S,
			button: S,
			submit: S,
			reset: S
		},
		Vn = ["$browser", "$sniffer", function(r, a) {
			return {
				restrict: "E",
				require: "?ngModel",
				link: function(e, t, n, i) {
					i && (Hn[Ot(n.type)] || Hn.text)(e, t, n, i, a, r)
				}
			}
		}],
		Bn = "ng-valid",
		Wn = "ng-invalid",
		Gn = "ng-pristine",
		Yn = "ng-dirty",
		Qn = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(i, n, e, r, t) {
			function a(e, t) {
				t = t ? "-" + ie(t, "-") : "", r.removeClass((e ? Wn : Bn) + t).addClass((e ? Bn : Wn) + t)
			}
			this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$name = e.name;
			var s = t(e.ngModel),
				o = s.assign;
			if(!o) throw _("ngModel")("nonassign", e.ngModel, ne(r));
			this.$render = S, this.$isEmpty = function(e) {
				return j(e) || "" === e || null === e || e != e
			};
			var l = r.inheritedData("$formController") || Fn,
				c = 0,
				u = this.$error = {};
			r.addClass(Gn), a(!0), this.$setValidity = function(e, t) {
				u[e] !== !t && (t ? (u[e] && c--, c || (a(!0), this.$valid = !0, this.$invalid = !1)) : (a(!1), this.$invalid = !0, this.$valid = !1, c++), u[e] = !t, a(t, e), l.$setValidity(e, t, this))
			}, this.$setPristine = function() {
				this.$dirty = !1, this.$pristine = !0, r.removeClass(Yn).addClass(Gn)
			}, this.$setViewValue = function(t) {
				this.$viewValue = t, this.$pristine && (this.$dirty = !0, this.$pristine = !1, r.removeClass(Gn).addClass(Yn), l.$setDirty()), Q(this.$parsers, function(e) {
					t = e(t)
				}), this.$modelValue !== t && (this.$modelValue = t, o(i, t), Q(this.$viewChangeListeners, function(e) {
					try {
						e()
					} catch(e) {
						n(e)
					}
				}))
			};
			var d = this;
			i.$watch(function() {
				var e = s(i);
				if(d.$modelValue !== e) {
					var t = d.$formatters,
						n = t.length;
					for(d.$modelValue = e; n--;) e = t[n](e);
					d.$viewValue !== e && (d.$viewValue = e, d.$render())
				}
				return e
			})
		}],
		Xn = function() {
			return {
				require: ["ngModel", "^?form"],
				controller: Qn,
				link: function(e, t, n, i) {
					var r = i[0],
						a = i[1] || Fn;
					a.$addControl(r), e.$on("$destroy", function() {
						a.$removeControl(r)
					})
				}
			}
		},
		Jn = D({
			require: "ngModel",
			link: function(e, t, n, i) {
				i.$viewChangeListeners.push(function() {
					e.$eval(n.ngChange)
				})
			}
		}),
		Kn = function() {
			return {
				require: "?ngModel",
				link: function(e, t, n, i) {
					if(i) {
						n.required = !0;
						var r = function(e) {
							if(!n.required || !i.$isEmpty(e)) return i.$setValidity("required", !0), e;
							i.$setValidity("required", !1)
						};
						i.$formatters.push(r), i.$parsers.unshift(r), n.$observe("required", function() {
							r(i.$viewValue)
						})
					}
				}
			}
		},
		Zn = function() {
			return {
				require: "ngModel",
				link: function(e, t, n, i) {
					var r = (e = /\/(.*)\//.exec(n.ngList)) && RegExp(e[1]) || n.ngList || ",";
					i.$parsers.push(function(e) {
						if(!j(e)) {
							var t = [];
							return e && Q(e.split(r), function(e) {
								e && t.push(Rt(e))
							}), t
						}
					}), i.$formatters.push(function(e) {
						return K(e) ? e.join(", ") : Y
					}), i.$isEmpty = function(e) {
						return !e || !e.length
					}
				}
			}
		},
		ei = /^(true|false|\d+)$/,
		ti = function() {
			return {
				priority: 100,
				compile: function(e, t) {
					return ei.test(t.ngValue) ? function(e, t, n) {
						n.$set("value", e.$eval(n.ngValue))
					} : function(e, t, n) {
						e.$watch(n.ngValue, function(e) {
							n.$set("value", e)
						})
					}
				}
			}
		},
		ni = Ct(function(e, t, n) {
			t.addClass("ng-binding").data("$binding", n.ngBind), e.$watch(n.ngBind, function(e) {
				t.text(e == Y ? "" : e)
			})
		}),
		ii = ["$interpolate", function(i) {
			return function(e, t, n) {
				e = i(t.attr(n.$attr.ngBindTemplate)), t.addClass("ng-binding").data("$binding", e), n.$observe("ngBindTemplate", function(e) {
					t.text(e)
				})
			}
		}],
		ri = ["$sce", "$parse", function(r, a) {
			return function(t, n, e) {
				n.addClass("ng-binding").data("$binding", e.ngBindHtml);
				var i = a(e.ngBindHtml);
				t.$watch(function() {
					return(i(t) || "").toString()
				}, function(e) {
					n.html(r.getTrustedHtml(i(t)) || "")
				})
			}
		}],
		ai = kt("", !0),
		si = kt("Odd", 0),
		oi = kt("Even", 1),
		li = Ct({
			compile: function(e, t) {
				t.$set("ngCloak", Y), e.removeClass("ng-cloak")
			}
		}),
		ci = [function() {
			return {
				scope: !0,
				controller: "@",
				priority: 500
			}
		}],
		ui = {};
	Q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(r) {
		var a = Ce("ng-" + r);
		ui[a] = ["$parse", function(n) {
			return {
				compile: function(e, t) {
					var i = n(t[a]);
					return function(t, e, n) {
						e.on(Ot(r), function(e) {
							t.$apply(function() {
								i(t, {
									$event: e
								})
							})
						})
					}
				}
			}
		}]
	});
	var di = ["$animate", function(o) {
			return {
				transclude: "element",
				priority: 600,
				terminal: !0,
				restrict: "A",
				$$tlb: !0,
				link: function(t, n, i, e, r) {
					var a, s;
					t.$watch(i.ngIf, function(e) {
						$(e) ? s || (s = t.$new(), r(s, function(e) {
							e[e.length++] = G.createComment(" end ngIf: " + i.ngIf + " "), a = {
								clone: e
							}, o.enter(e, n.parent(), n)
						})) : (s && (s.$destroy(), s = null), a && (o.leave(U(a.clone)), a = null))
					})
				}
			}
		}],
		fi = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(_, h, m, g, i) {
			return {
				restrict: "ECA",
				priority: 400,
				terminal: !0,
				transclude: "element",
				controller: Nt.noop,
				compile: function(e, t) {
					var n = t.ngInclude || t.src,
						f = t.onload || "",
						p = t.autoscroll;
					return function(r, a, e, s, o) {
						var l, c, u = 0,
							d = function() {
								l && (l.$destroy(), l = null), c && (g.leave(c), c = null)
							};
						r.$watch(i.parseAsResourceUrl(n), function(e) {
							var n = function() {
									!O(p) || p && !r.$eval(p) || m()
								},
								i = ++u;
							e ? (_.get(e, {
								cache: h
							}).success(function(e) {
								if(i === u) {
									var t = r.$new();
									s.template = e, e = o(t, function(e) {
										d(), g.enter(e, null, a, n)
									}), c = e, (l = t).$emit("$includeContentLoaded"), r.$eval(f)
								}
							}).error(function() {
								i === u && d()
							}), r.$emit("$includeContentRequested")) : (d(), s.template = null)
						})
					}
				}
			}
		}],
		pi = ["$compile", function(r) {
			return {
				restrict: "ECA",
				priority: -400,
				require: "ngInclude",
				link: function(e, t, n, i) {
					t.html(i.template), r(t.contents())(e)
				}
			}
		}],
		_i = Ct({
			priority: 450,
			compile: function() {
				return {
					pre: function(e, t, n) {
						e.$eval(n.ngInit)
					}
				}
			}
		}),
		hi = Ct({
			terminal: !0,
			priority: 1e3
		}),
		mi = ["$locale", "$interpolate", function(d, f) {
			var p = /{}/g;
			return {
				restrict: "EA",
				link: function(t, n, i) {
					var r = i.count,
						e = i.$attr.when && n.attr(i.$attr.when),
						a = i.offset || 0,
						s = t.$eval(e) || {},
						o = {},
						l = f.startSymbol(),
						c = f.endSymbol(),
						u = /^when(Minus)?(.+)$/;
					Q(i, function(e, t) {
						u.test(t) && (s[Ot(t.replace("when", "").replace("Minus", "-"))] = n.attr(i.$attr[t]))
					}), Q(s, function(e, t) {
						o[t] = f(e.replace(p, l + r + "-" + a + c))
					}), t.$watch(function() {
						var e = parseFloat(t.$eval(r));
						return isNaN(e) ? "" : (e in s || (e = d.pluralCat(e - a)), o[e](t, n, !0))
					}, function(e) {
						n.text(e)
					})
				}
			}
		}],
		gi = ["$parse", "$animate", function(a, x) {
			var C = _("ngRepeat");
			return {
				transclude: "element",
				priority: 1e3,
				terminal: !0,
				$$tlb: !0,
				link: function(p, _, e, t, h) {
					var i, m, g, v, y, $, b = e.ngRepeat,
						n = b.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
						r = {
							$id: _e
						};
					if(!n) throw C("iexp", b);
					if(e = n[1], t = n[2], (n = n[4]) ? (i = a(n), m = function(e, t, n) {
							return $ && (r[$] = e), r[y] = t, r.$index = n, i(p, r)
						}) : (g = function(e, t) {
							return _e(t)
						}, v = function(e) {
							return e
						}), !(n = e.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/))) throw C("iidexp", e);
					y = n[3] || n[1], $ = n[2];
					var w = {};
					p.$watchCollection(t, function(e) {
						var t, n, i, r, a, s, o, l, c, u = _[0],
							d = {},
							f = [];
						if(T(e)) l = e, i = m || g;
						else {
							for(s in i = m || v, l = [], e) e.hasOwnProperty(s) && "$" != s.charAt(0) && l.push(s);
							l.sort()
						}
						for(r = l.length, n = f.length = l.length, t = 0; t < n; t++)
							if(z(o = i(s = e === l ? t : l[t], o = e[s], t), "`track by` id"), w.hasOwnProperty(o)) c = w[o], delete w[o], d[o] = c, f[t] = c;
							else {
								if(d.hasOwnProperty(o)) throw Q(f, function(e) {
									e && e.scope && (w[e.id] = e)
								}), C("dupes", b, o);
								f[t] = {
									id: o
								}, d[o] = !1
							}
						for(s in w) w.hasOwnProperty(s) && (t = U((c = w[s]).clone), x.leave(t), Q(t, function(e) {
							e.$$NG_REMOVED = !0
						}), c.scope.$destroy());
						for(t = 0, n = l.length; t < n; t++) {
							if(o = e[s = e === l ? t : l[t]], c = f[t], f[t - 1] && (u = f[t - 1].clone[f[t - 1].clone.length - 1]), c.scope) {
								for(a = c.scope, i = u;
									(i = i.nextSibling) && i.$$NG_REMOVED;);
								c.clone[0] != i && x.move(U(c.clone), null, Dt(u)), u = c.clone[c.clone.length - 1]
							} else a = p.$new();
							a[y] = o, $ && (a[$] = s), a.$index = t, a.$first = 0 === t, a.$last = t === r - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 == (1 & t)), c.scope || h(a, function(e) {
								e[e.length++] = G.createComment(" end ngRepeat: " + b + " "), x.enter(e, null, Dt(u)), u = e, c.scope = a, c.clone = e, d[c.id] = c
							})
						}
						w = d
					})
				}
			}
		}],
		vi = ["$animate", function(i) {
			return function(e, t, n) {
				e.$watch(n.ngShow, function(e) {
					i[$(e) ? "removeClass" : "addClass"](t, "ng-hide")
				})
			}
		}],
		yi = ["$animate", function(i) {
			return function(e, t, n) {
				e.$watch(n.ngHide, function(e) {
					i[$(e) ? "addClass" : "removeClass"](t, "ng-hide")
				})
			}
		}],
		$i = Ct(function(e, n, t) {
			e.$watch(t.ngStyle, function(e, t) {
				t && e !== t && Q(t, function(e, t) {
					n.css(t, "")
				}), e && n.css(e)
			}, !0)
		}),
		bi = ["$animate", function(c) {
			return {
				restrict: "EA",
				require: "ngSwitch",
				controller: ["$scope", function() {
					this.cases = {}
				}],
				link: function(i, e, r, a) {
					var s, o, l = [];
					i.$watch(r.ngSwitch || r.on, function(e) {
						for(var t = 0, n = l.length; t < n; t++) l[t].$destroy(), c.leave(o[t]);
						o = [], l = [], (s = a.cases["!" + e] || a.cases["?"]) && (i.$eval(r.change), Q(s, function(n) {
							var e = i.$new();
							l.push(e), n.transclude(e, function(e) {
								var t = n.element;
								o.push(e), c.enter(e, t.parent(), t)
							})
						}))
					})
				}
			}
		}],
		wi = Ct({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			compile: function(e, a) {
				return function(e, t, n, i, r) {
					i.cases["!" + a.ngSwitchWhen] = i.cases["!" + a.ngSwitchWhen] || [], i.cases["!" + a.ngSwitchWhen].push({
						transclude: r,
						element: t
					})
				}
			}
		}),
		xi = Ct({
			transclude: "element",
			priority: 800,
			require: "^ngSwitch",
			link: function(e, t, n, i, r) {
				i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
					transclude: r,
					element: t
				})
			}
		}),
		Ci = Ct({
			controller: ["$element", "$transclude", function(e, t) {
				if(!t) throw _("ngTransclude")("orphan", ne(e));
				this.$transclude = t
			}],
			link: function(e, t, n, i) {
				i.$transclude(function(e) {
					t.empty(), t.append(e)
				})
			}
		}),
		Ti = ["$templateCache", function(n) {
			return {
				restrict: "E",
				terminal: !0,
				compile: function(e, t) {
					"text/ng-template" == t.type && n.put(t.id, e[0].text)
				}
			}
		}],
		Si = _("ngOptions"),
		ki = D({
			terminal: !0
		}),
		qi = ["$compile", "$parse", function(q, D) {
			var E = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
				o = {
					$setViewValue: S
				};
			return {
				restrict: "E",
				require: ["select", "?ngModel"],
				controller: ["$element", "$scope", "$attrs", function(t, e, n) {
					var i, r = this,
						a = {},
						s = o;
					r.databound = n.ngModel, r.init = function(e, t, n) {
						s = e, i = n
					}, r.addOption = function(e) {
						z(e, '"option value"'), a[e] = !0, s.$viewValue == e && (t.val(e), i.parent() && i.remove())
					}, r.removeOption = function(e) {
						this.hasOption(e) && (delete a[e], s.$viewValue == e && this.renderUnknownOption(e))
					}, r.renderUnknownOption = function(e) {
						e = "? " + _e(e) + " ?", i.val(e), t.prepend(i), t.val(e), i.prop("selected", !0)
					}, r.hasOption = function(e) {
						return a.hasOwnProperty(e)
					}, e.$on("$destroy", function() {
						r.renderUnknownOption = S
					})
				}],
				link: function(e, t, n, i) {
					if(i[1]) {
						var r, a = i[0],
							s = i[1],
							C = n.multiple,
							o = n.ngOptions,
							T = !1,
							S = Dt(G.createElement("option")),
							k = Dt(G.createElement("optgroup")),
							l = S.clone();
						i = 0;
						for(var c = t.children(), u = c.length; i < u; i++)
							if("" === c[i].value) {
								r = T = c.eq(i);
								break
							}
						if(a.init(s, T, l), C && (n.required || n.ngRequired)) {
							var d = function(e) {
								return s.$setValidity("required", !n.required || e && e.length), e
							};
							s.$parsers.push(d), s.$formatters.unshift(d), n.$observe("required", function() {
								d(s.$viewValue)
							})
						}
						o ? function(p, _, h) {
							function e() {
								var e, t, n, i, r, a = {
										"": []
									},
									s = [""];
								i = h.$modelValue, r = b(p) || [];
								var o, l, c, u, d, f = v ? A(r) : r;
								if(n = !(l = {}), C)
									if(w && K(i))
										for(n = new he([]), c = 0; c < i.length; c++) l[g] = i[c], n.put(w(p, l), i[c]);
									else n = new he(i);
								for(c = 0; c < (o = f.length); c++) {
									if(t = c, v) {
										if("$" === (t = f[c]).charAt(0)) continue;
										l[v] = t
									}
									l[g] = r[t], (t = a[e = y(p, l) || ""]) || (t = a[e] = [], s.push(e)), C ? e = O(n.remove(w ? w(p, l) : $(p, l))) : (w ? ((e = {})[g] = i, e = w(p, e) === w(p, l)) : e = i === $(p, l), n = n || e), u = O(u = m(p, l)) ? u : "", t.push({
										id: w ? w(p, l) : v ? f[c] : c,
										label: u,
										selected: e
									})
								}
								for(C || (T || null === i ? a[""].unshift({
										id: "",
										label: "",
										selected: !n
									}) : n || a[""].unshift({
										id: "?",
										label: "",
										selected: !0
									})), l = 0, f = s.length; l < f; l++) {
									for(t = a[e = s[l]], x.length <= l ? (r = [i = {
											element: k.clone().attr("label", e),
											label: t.label
										}], x.push(r), _.append(i.element)) : (i = (r = x[l])[0]).label != e && i.element.attr("label", i.label = e), u = null, c = 0, o = t.length; c < o; c++) n = t[c], (e = r[c + 1]) ? (u = e.element, e.label !== n.label && u.text(e.label = n.label), e.id !== n.id && u.val(e.id = n.id), u[0].selected !== n.selected && u.prop("selected", e.selected = n.selected)) : ("" === n.id && T ? d = T : (d = S.clone()).val(n.id).attr("selected", n.selected).text(n.label), r.push({
										element: d,
										label: n.label,
										id: n.id,
										selected: n.selected
									}), u ? u.after(d) : i.element.append(d), u = d);
									for(c++; r.length > c;) r.pop().element.remove()
								}
								for(; x.length > l;) x.pop()[0].element.remove()
							}
							var t;
							if(!(t = o.match(E))) throw Si("iexp", o, ne(_));
							var m = D(t[2] || t[1]),
								g = t[4] || t[6],
								v = t[5],
								y = D(t[3] || ""),
								$ = D(t[2] ? t[1] : g),
								b = D(t[7]),
								w = t[8] ? D(t[8]) : null,
								x = [
									[{
										element: _,
										label: ""
									}]
								];
							T && (q(T)(p), T.removeClass("ng-scope"), T.remove()), _.empty(), _.on("change", function() {
								p.$apply(function() {
									var e, t, n, i, r, a, s, o, l = b(p) || [],
										c = {};
									if(C) {
										for(n = [], r = 0, s = x.length; r < s; r++)
											for(i = 1, a = (e = x[r]).length; i < a; i++)
												if((t = e[i].element)[0].selected) {
													if(t = t.val(), v && (c[v] = t), w)
														for(o = 0; o < l.length && (c[g] = l[o], w(p, c) != t); o++);
													else c[g] = l[t];
													n.push($(p, c))
												}
									} else if("?" == (t = _.val())) n = Y;
									else if("" === t) n = null;
									else if(w) {
										for(o = 0; o < l.length; o++)
											if(c[g] = l[o], w(p, c) == t) {
												n = $(p, c);
												break
											}
									} else c[g] = l[t], v && (c[v] = t), n = $(p, c);
									h.$setViewValue(n)
								})
							}), h.$render = e, p.$watch(e)
						}(e, t, s) : C ? (m = e, g = t, (v = s).$render = function() {
							var t = new he(v.$viewValue);
							Q(g.find("option"), function(e) {
								e.selected = O(t.get(e.value))
							})
						}, m.$watch(function() {
							ee(y, v.$viewValue) || (y = x(v.$viewValue), v.$render())
						}), g.on("change", function() {
							m.$apply(function() {
								var t = [];
								Q(g.find("option"), function(e) {
									e.selected && t.push(e.value)
								}), v.$setViewValue(t)
							})
						})) : (f = e, p = t, h = a, (_ = s).$render = function() {
							var e = _.$viewValue;
							h.hasOption(e) ? (l.parent() && l.remove(), p.val(e), "" === e && r.prop("selected", !0)) : j(e) && r ? p.val("") : h.renderUnknownOption(e)
						}, p.on("change", function() {
							f.$apply(function() {
								l.parent() && l.remove(), _.$setViewValue(p.val())
							})
						}))
					}
					var f, p, _, h, m, g, v, y
				}
			}
		}],
		Di = ["$interpolate", function(n) {
			var s = {
				addOption: S,
				removeOption: S
			};
			return {
				restrict: "E",
				priority: 100,
				compile: function(e, t) {
					if(j(t.value)) {
						var a = n(e.text(), !0);
						a || t.$set("value", e.text())
					}
					return function(e, t, n) {
						var i = t.parent(),
							r = i.data("$selectController") || i.parent().data("$selectController");
						r && r.databound ? t.prop("selected", !1) : r = s, a ? e.$watch(a, function(e, t) {
							n.$set("value", e), e !== t && r.removeOption(t), r.addOption(e)
						}) : r.addOption(n.value), t.on("$destroy", function() {
							r.removeOption(n.value)
						})
					}
				}
			}
		}],
		Ei = D({
			restrict: "E",
			terminal: !0
		});
	(Et = d.jQuery) ? (q((Dt = Et).fn, {
		scope: Kt.scope,
		isolateScope: Kt.isolateScope,
		controller: Kt.controller,
		injector: Kt.injector,
		inheritedData: Kt.inheritedData
	}), e("remove", !0, !0, !1), e("empty", !1, !1, !1), e("html", !1, !1, !0)) : Dt = L, Nt.element = Dt,
		function(e) {
			var t, n, l, i;
			q(Nt, {
				bootstrap: F,
				copy: x,
				extend: q,
				equals: ee,
				element: Dt,
				forEach: Q,
				injector: ge,
				noop: S,
				bind: te,
				toJson: C,
				fromJson: y,
				identity: g,
				isUndefined: j,
				isDefined: O,
				isString: J,
				isFunction: Z,
				isObject: X,
				isNumber: c,
				isElement: f,
				isArray: K,
				version: Ht,
				isDate: u,
				lowercase: Ot,
				uppercase: Mt,
				callbacks: {
					counter: 0
				},
				$$minErr: _,
				$$csp: v
			}), t = d, l = _("$injector"), i = _("ng"), (t = t.angular || (t.angular = {})).$$minErr = t.$$minErr || _, At = t.module || (t.module = (n = {}, function(a, s, o) {
				if("hasOwnProperty" === a) throw i("badname", "module");
				return s && n.hasOwnProperty(a) && (n[a] = null), n[a] || (n[a] = function() {
					function e(e, t, n) {
						return function() {
							return i[n || "push"]([e, t, arguments]), r
						}
					}
					if(!s) throw l("nomod", a);
					var i = [],
						t = [],
						n = e("$injector", "invoke"),
						r = {
							_invokeQueue: i,
							_runBlocks: t,
							requires: s,
							name: a,
							provider: e("$provide", "provider"),
							factory: e("$provide", "factory"),
							service: e("$provide", "service"),
							value: e("$provide", "value"),
							constant: e("$provide", "constant", "unshift"),
							animation: e("$animateProvider", "register"),
							filter: e("$filterProvider", "register"),
							controller: e("$controllerProvider", "register"),
							directive: e("$compileProvider", "directive"),
							config: n,
							run: function(e) {
								return t.push(e), this
							}
						};
					return o && n(o), r
				}())
			}));
			try {
				At("ngLocale")
			} catch(e) {
				At("ngLocale", []).provider("$locale", Fe)
			}
			At("ng", ["ngLocale"], ["$provide", function(e) {
				e.provider({
					$$sanitizeUri: it
				}), e.provider("$compile", xe).directive({
					a: Mn,
					input: Vn,
					textarea: Vn,
					form: zn,
					script: Ti,
					select: qi,
					style: Ei,
					option: Di,
					ngBind: ni,
					ngBindHtml: ri,
					ngBindTemplate: ii,
					ngClass: ai,
					ngClassEven: oi,
					ngClassOdd: si,
					ngCloak: li,
					ngController: ci,
					ngForm: Nn,
					ngHide: yi,
					ngIf: di,
					ngInclude: fi,
					ngInit: _i,
					ngNonBindable: hi,
					ngPluralize: mi,
					ngRepeat: gi,
					ngShow: vi,
					ngStyle: $i,
					ngSwitch: bi,
					ngSwitchWhen: wi,
					ngSwitchDefault: xi,
					ngOptions: ki,
					ngTransclude: Ci,
					ngModel: Xn,
					ngList: Zn,
					ngChange: Jn,
					required: Kn,
					ngRequired: Kn,
					ngValue: ti
				}).directive({
					ngInclude: pi
				}).directive(Pn).directive(ui), e.provider({
					$anchorScroll: ve,
					$animate: ln,
					$browser: $e,
					$cacheFactory: be,
					$controller: Se,
					$document: ke,
					$exceptionHandler: qe,
					$filter: ft,
					$interpolate: Me,
					$interval: Pe,
					$http: je,
					$httpBackend: Oe,
					$location: Ge,
					$log: Ye,
					$parse: et,
					$rootScope: nt,
					$q: tt,
					$sce: st,
					$sceDelegate: at,
					$sniffer: ot,
					$templateCache: we,
					$timeout: lt,
					$window: dt
				})
			}])
		}(), Dt(G).ready(function() {
			! function(t, e) {
				function n(e) {
					e && a.push(e)
				}
				var i, r, a = [t],
					s = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
					o = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
				Q(s, function(e) {
					s[e] = !0, n(G.getElementById(e)), e = e.replace(":", "\\:"), t.querySelectorAll && (Q(t.querySelectorAll("." + e), n), Q(t.querySelectorAll("." + e + "\\:"), n), Q(t.querySelectorAll("[" + e + "]"), n))
				}), Q(a, function(t) {
					if(!i) {
						var e = o.exec(" " + t.className + " ");
						e ? (i = t, r = (e[2] || "").replace(/\s+/g, ",")) : Q(t.attributes, function(e) {
							!i && s[e.name] && (i = t, r = e.value)
						})
					}
				}), i && e(i, r ? [r] : [])
			}(G, F)
		})
}(window, document), !angular.$$csp() && angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{border-spacing:1px 1px;-ms-zoom:1.0001;}.ng-animate-active{border-spacing:0px 0px;-ms-zoom:1;}</style>'),
	function(i) {
		if(i) {
			i.ajax_upload = function(e, t) {
				return 1 != (e = i(e)).size() ? (console.error("You passed ", e.size(), " elements to ajax_upload at once"), !1) : new n(e, t)
			};
			var e, t = (e = 0, function() {
					return e++
				}),
				n = function(e, t) {
					this.button = e, this.wrapper = null, this.form = null, this.input = null, this.iframe = null, this.disabled = !1, this.submitting = !1, this.settings = {
						action: "upload.php",
						name: "userfile",
						data: {},
						onSubmit: function(e, t) {},
						onComplete: function(e, t) {},
						onSuccess: function(e) {},
						onError: function(e, t) {}
					}, i.extend(this.settings, t), this.create_wrapper(), this.create_input(), jQuery.browser.msie && this.make_parent_opaque(), this.create_iframe()
				};
			n.prototype = {
				set_data: function(e) {
					this.settings.data = e
				},
				disable: function() {
					this.disabled = !0, this.submitting || this.input.attr("disabled", !0)
				},
				enable: function() {
					this.disabled = !1, this.input.attr("disabled", !1)
				},
				create_wrapper: function() {
					var t, e = this.button;
					t = this.wrapper = i("<div></div>").insertAfter(e).append(e), setTimeout(function() {
						t.css({
							position: "relative",
							display: "inline-block",
							overflow: "hidden",
							height: e.outerHeight(!0),
							width: e.outerWidth(!0)
						})
					}, 1);
					var n = this;
					t.mousemove(function(e) {
						n.input && n.input.css({
							top: e.pageY - t.offset().top - 5 + "px",
							left: e.pageX - t.offset().left - 170 + "px"
						})
					})
				},
				create_input: function() {
					var e = this;
					this.input = i('<input type="file" />').attr("name", this.settings.name).css({
						position: "absolute",
						margin: 0,
						padding: 0,
						width: "220px",
						heigth: "10px",
						opacity: 0
					}).change(function() {
						"" != i(this).val() && (e.submitting = !0, e.submit(), e.submitting = !1)
					}).appendTo(this.wrapper).hover(function() {
						e.button.addClass("hover")
					}, function() {
						e.button.removeClass("hover")
					}), this.disabled && this.input.attr("disabled", !0)
				},
				create_iframe: function() {
					var e = "iframe_au" + t();
					this.iframe = i('<iframe name="' + e + '"></iframe>').css("display", "none").appendTo("body")
				},
				submit: function() {
					var t = this,
						n = this.settings,
						i = this.file_from_path(this.input.val());
					if(!1 !== n.onSubmit.call(this, i, this.get_ext(i))) {
						this.create_form(), this.input.appendTo(this.form), this.form.submit(), this.input.remove(), this.input = null, this.form.remove(), this.form = null, this.submitting = !1, this.create_input();
						var r = this.iframe;
						r.load(function() {
							var e = r.contents().find("body").html();
							n.onComplete.call(t, i, e), "success" == e ? n.onSuccess.call(t, i) : n.onError.call(t, i, e), setTimeout(function() {
								r.remove()
							}, 1)
						}), this.create_iframe()
					} else t.disabled && this.input.attr("disabled", !0)
				},
				create_form: function() {
					for(var e in this.form = i('<form method="post" enctype="multipart/form-data"></form>').appendTo("body").attr({
							action: this.settings.action,
							target: this.iframe.attr("name")
						}), this.settings.data) i('<input type="hidden" />').appendTo(this.form).attr({
						name: e,
						value: this.settings.data[e]
					})
				},
				file_from_path: function(e) {
					var t = e.lastIndexOf("\\");
					return -1 !== t ? e.slice(t + 1) : e
				},
				get_ext: function(e) {
					var t = e.lastIndexOf(".");
					return -1 !== t ? e.slice(t + 1) : ""
				},
				make_parent_opaque: function() {
					this.button.add(this.button.parents()).each(function() {
						var e = i(this).css("backgroundColor"),
							t = i(this).css("backgroundImage");
						if("transparent" != e || "none" != t) return i(this).css("opacity", 1), !1
					})
				}
			}
		}
	}(jQuery), angular.module("ngLocale", [], ["$provide", function(e) {
		var t = "one",
			n = "few",
			i = "many",
			r = "other";
		e.value("$locale", {
			DATETIME_FORMATS: {
				AMPMS: ["до полудня", "после полудня"],
				DAY: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
				MONTH: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
				SHORTDAY: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
				SHORTMONTH: ["янв.", "февр.", "марта", "апр.", "мая", "июня", "июля", "авг.", "сент.", "окт.", "нояб.", "дек."],
				fullDate: "EEEE, d MMMM y 'г'.",
				longDate: "d MMMM y 'г'.",
				medium: "dd.MM.yyyy H:mm:ss",
				mediumDate: "dd.MM.yyyy",
				mediumTime: "H:mm:ss",
				short: "dd.MM.yy H:mm",
				shortDate: "dd.MM.yy",
				shortTime: "H:mm"
			},
			NUMBER_FORMATS: {
				CURRENCY_SYM: "руб.",
				DECIMAL_SEP: ",",
				GROUP_SEP: " ",
				PATTERNS: [{
					gSize: 3,
					lgSize: 3,
					macFrac: 0,
					maxFrac: 3,
					minFrac: 0,
					minInt: 1,
					negPre: "-",
					negSuf: "",
					posPre: "",
					posSuf: ""
				}, {
					gSize: 3,
					lgSize: 3,
					macFrac: 0,
					maxFrac: 2,
					minFrac: 2,
					minInt: 1,
					negPre: "-",
					negSuf: " ¤",
					posPre: "",
					posSuf: " ¤"
				}]
			},
			id: "ru-ru",
			pluralCat: function(e) {
				return e % 10 == 1 && e % 100 != 11 ? t : e == (0 | e) && 2 <= e % 10 && e % 10 <= 4 && (e % 100 < 12 || 14 < e % 100) ? n : e % 10 == 0 || e == (0 | e) && 5 <= e % 10 && e % 10 <= 9 || e == (0 | e) && 11 <= e % 100 && e % 100 <= 14 ? i : r
			}
		})
	}]),
	function(e, y, t) {
		"use strict";

		function n(f, p, _) {
			return {
				restrict: "ECA",
				terminal: !0,
				priority: 400,
				transclude: "element",
				link: function(n, i, e, t, r) {
					function a() {
						c && (c.remove(), c = null), o && (o.$destroy(), o = null), l && (_.leave(l, function() {
							c = null
						}), c = l, l = null)
					}

					function s() {
						var e = f.current && f.current.locals;
						if(y.isDefined(e && e.$template)) {
							e = n.$new();
							var t = f.current;
							l = r(e, function(e) {
								_.enter(e, null, l || i, function() {
									!y.isDefined(u) || u && !n.$eval(u) || p()
								}), a()
							}), (o = t.scope = e).$emit("$viewContentLoaded"), o.$eval(d)
						} else a()
					}
					var o, l, c, u = e.autoscroll,
						d = e.onload || "";
					n.$on("$routeChangeSuccess", s), s()
				}
			}
		}

		function i(a, s, o) {
			return {
				restrict: "ECA",
				priority: -400,
				link: function(e, t) {
					var n = o.current,
						i = n.locals;
					t.html(i.$template);
					var r = a(t.contents());
					n.controller && (i.$scope = e, i = s(n.controller, i), n.controllerAs && (e[n.controllerAs] = i), t.data("$ngControllerController", i), t.children().data("$ngControllerController", i)), r(e)
				}
			}
		}(e = y.module("ngRoute", ["ng"]).provider("$route", function() {
			function g(e, t) {
				return y.extend(new(y.extend(function() {}, {
					prototype: e
				})), t)
			}

			function i(e, t) {
				var n = t.caseInsensitiveMatch,
					i = {
						originalPath: e,
						regexp: e
					},
					r = i.keys = [];
				return e = e.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(e, t, n, i) {
					return e = "?" === i ? i : null, i = "*" === i ? i : null, r.push({
						name: n,
						optional: !!e
					}), t = t || "", (e ? "" : t) + "(?:" + (e ? t : "") + (i ? "(.+?)" : "([^/]+)") + (e || "") + ")" + (e || "")
				}).replace(/([\/$\*])/g, "\\$1"), i.regexp = RegExp("^" + e + "$", n ? "i" : ""), i
			}
			var v = {};
			this.when = function(e, t) {
				if(v[e] = y.extend({
						reloadOnSearch: !0
					}, t, e && i(e, t)), e) {
					var n = "/" == e[e.length - 1] ? e.substr(0, e.length - 1) : e + "/";
					v[n] = y.extend({
						redirectTo: e
					}, i(n, t))
				}
				return this
			}, this.otherwise = function(e) {
				return this.when(null, e), this
			}, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(n, d, s, o, l, f, p, _) {
				function e() {
					var c, u, e, r, a, i = (y.forEach(v, function(e, t) {
							var n;
							if(n = !u) {
								var i = d.path();
								n = e.keys;
								var r = {};
								if(e.regexp)
									if(i = e.regexp.exec(i)) {
										for(var a = 1, s = i.length; a < s; ++a) {
											var o = n[a - 1],
												l = "string" == typeof i[a] ? decodeURIComponent(i[a]) : i[a];
											o && l && (r[o.name] = l)
										}
										n = r
									} else n = null;
								else n = null;
								n = c = n
							}
							n && ((u = g(e, {
								params: y.extend({}, d.search(), c),
								pathParams: c
							})).$$route = e)
						}), u || v.null && g(v.null, {
							params: {},
							pathParams: {}
						})),
						t = m.current;
					i && t && i.$$route === t.$$route && y.equals(i.pathParams, t.pathParams) && !i.reloadOnSearch && !h ? (t.params = i.params, y.copy(t.params, s), n.$broadcast("$routeUpdate", t)) : (i || t) && (h = !1, n.$broadcast("$routeChangeStart", i, t), (m.current = i) && i.redirectTo && (y.isString(i.redirectTo) ? d.path((e = i.redirectTo, r = i.params, a = [], y.forEach((e || "").split(":"), function(e, t) {
						if(0 === t) a.push(e);
						else {
							var n = e.match(/(\w+)(.*)/),
								i = n[1];
							a.push(r[i]), a.push(n[2] || ""), delete r[i]
						}
					}), a.join(""))).search(i.params).replace() : d.url(i.redirectTo(i.pathParams, d.path(), d.search())).replace()), o.when(i).then(function() {
						if(i) {
							var e, t, n = y.extend({}, i.resolve);
							return y.forEach(n, function(e, t) {
								n[t] = y.isString(e) ? l.get(e) : l.invoke(e)
							}), y.isDefined(e = i.template) ? y.isFunction(e) && (e = e(i.params)) : y.isDefined(t = i.templateUrl) && (y.isFunction(t) && (t = t(i.params)), t = _.getTrustedResourceUrl(t), y.isDefined(t) && (i.loadedTemplateUrl = t, e = f.get(t, {
								cache: p
							}).then(function(e) {
								return e.data
							}))), y.isDefined(e) && (n.$template = e), o.all(n)
						}
					}).then(function(e) {
						i == m.current && (i && (i.locals = e, y.copy(i.params, s)), n.$broadcast("$routeChangeSuccess", i, t))
					}, function(e) {
						i == m.current && n.$broadcast("$routeChangeError", i, t, e)
					}))
				}
				var h = !1,
					m = {
						routes: v,
						reload: function() {
							h = !0, n.$evalAsync(e)
						}
					};
				return n.$on("$locationChangeSuccess", e), m
			}]
		})).provider("$routeParams", function() {
			this.$get = function() {
				return {}
			}
		}), e.directive("ngView", n), e.directive("ngView", i), n.$inject = ["$route", "$anchorScroll", "$animate"], i.$inject = ["$compile", "$controller", "$route"]
	}(window, window.angular),
	function(e, p, t) {
		"use strict";

		function n(e) {
			var t, n = {};
			for(e = e.split(","), t = 0; t < e.length; t++) n[e[t]] = !0;
			return n
		}

		function l(e) {
			if(!e) return "";
			var t = a.exec(e);
			e = t[1];
			var n = t[3];
			return(t = t[2]) && (r.innerHTML = t.replace(/</g, "&lt;"), t = "textContent" in r ? r.textContent : r.innerText), e + t + n
		}

		function o(e) {
			return e.replace(/&/g, "&amp;").replace(i, function(e) {
				return "&#" + e.charCodeAt(0) + ";"
			}).replace(/</g, "&lt;").replace(/>/g, "&gt;")
		}

		function _(e, a) {
			var n = !1,
				s = p.bind(e, e.push);
			return {
				start: function(r, e, t) {
					r = p.lowercase(r), !n && C[r] && (n = r), n || !0 !== T[r] || (s("<"), s(r), p.forEach(e, function(e, t) {
						var n = p.lowercase(t),
							i = "img" === r && "src" === n || "background" === n;
						!0 !== k[n] || !0 === S[n] && !a(e, i) || (s(" "), s(t), s('="'), s(o(e)), s('"'))
					}), s(t ? "/>" : ">"))
				},
				end: function(e) {
					e = p.lowercase(e), n || !0 !== T[e] || (s("</"), s(e), s(">")), e == n && (n = !1)
				},
				chars: function(e) {
					n || s(o(e))
				}
			}
		}
		var c = p.$$minErr("$sanitize"),
			u = /^<\s*([\w:-]+)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*>/,
			d = /^<\s*\/\s*([\w:-]+)[^>]*>/,
			f = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
			h = /^</,
			m = /^<\s*\//,
			g = /\x3c!--(.*?)--\x3e/g,
			v = /<!DOCTYPE([^>]*?)>/i,
			y = /<!\[CDATA\[(.*?)]]\x3e/g,
			i = /([^\#-~| |!])/g,
			$ = n("area,br,col,hr,img,wbr");
		e = n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), t = n("rp,rt");
		var b = p.extend({}, t, e),
			w = p.extend({}, e, n("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
			x = p.extend({}, t, n("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
			C = n("script,style"),
			T = p.extend({}, $, w, x, b),
			S = n("background,cite,href,longdesc,src,usemap"),
			k = p.extend({}, S, n("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,span,start,summary,target,title,type,valign,value,vspace,width")),
			r = document.createElement("pre"),
			a = /^(\s*)([\s\S]*?)(\s*)$/;
		p.module("ngSanitize", []).provider("$sanitize", function() {
			this.$get = ["$$sanitizeUri", function(n) {
				return function(e) {
					var t = [];
					return function(e, r) {
						function t(e, t, n, i) {
							if(t = p.lowercase(t), w[t])
								for(; o.last() && x[o.last()];) s(0, o.last());
							b[t] && o.last() == t && s(0, t), (i = $[t] || !!i) || o.push(t);
							var a = {};
							n.replace(f, function(e, t, n, i, r) {
								a[t] = l(n || i || r || "")
							}), r.start && r.start(t, a, i)
						}

						function s(e, t) {
							var n, i = 0;
							if(t = p.lowercase(t))
								for(i = o.length - 1; 0 <= i && o[i] != t; i--);
							if(0 <= i) {
								for(n = o.length - 1; i <= n; n--) r.end && r.end(o[n]);
								o.length = i
							}
						}
						var n, i, o = [],
							a = e;
						for(o.last = function() {
								return o[o.length - 1]
							}; e;) {
							if(i = !0, o.last() && C[o.last()] ? (e = e.replace(RegExp("(.*)<\\s*\\/\\s*" + o.last() + "[^>]*>", "i"), function(e, t) {
									return t = t.replace(g, "$1").replace(y, "$1"), r.chars && r.chars(l(t)), ""
								}), s(0, o.last())) : (0 === e.indexOf("\x3c!--") ? 0 <= (n = e.indexOf("--", 4)) && e.lastIndexOf("--\x3e", n) === n && (r.comment && r.comment(e.substring(4, n)), e = e.substring(n + 3), i = !1) : v.test(e) ? (n = e.match(v)) && (e = e.replace(n[0], ""), i = !1) : m.test(e) ? (n = e.match(d)) && (e = e.substring(n[0].length), n[0].replace(d, s), i = !1) : h.test(e) && (n = e.match(u)) && (e = e.substring(n[0].length), n[0].replace(u, t), i = !1), i && (i = (n = e.indexOf("<")) < 0 ? e : e.substring(0, n), e = n < 0 ? "" : e.substring(n), r.chars && r.chars(l(i)))), e == a) throw c("badparse", e);
							a = e
						}
						s()
					}(e, _(t, function(e, t) {
						return !/^unsafe/.test(n(e, t))
					})), t.join("")
				}
			}]
		}), p.module("ngSanitize").filter("linky", ["$sanitize", function(u) {
			var d = /((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>]/,
				f = /^mailto:/;
			return function(e, t) {
				function n(e) {
					var t, n;
					e && o.push((t = e, _(n = [], p.noop).chars(t), n.join("")))
				}
				if(!e) return e;
				for(var i, r, a, s = e, o = []; i = s.match(d);) r = i[0], i[2] == i[3] && (r = "mailto:" + r), a = i.index, n(s.substr(0, a)), l = r, c = i[0].replace(f, ""), o.push("<a "), p.isDefined(t) && (o.push('target="'), o.push(t), o.push('" ')), o.push('href="'), o.push(l), o.push('">'), n(c), o.push("</a>"), s = s.substring(a + i[0].length);
				var l, c;
				return n(s), u(o.join(""))
			}
		}])
	}(window, window.angular),
	function(t) {
		t(function() {
			var e;
			t.support.transition = (e = function() {
				var e, t = document.createElement("bootstrap"),
					n = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					};
				for(e in n)
					if(void 0 !== t.style[e]) return n[e]
			}()) && {
				end: e
			}
		})
	}(window.jQuery),
	function(a) {
		var r = function(e, t) {
			this.options = t, this.$element = a(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
		};
		r.prototype = {
			constructor: r,
			toggle: function() {
				return this[this.isShown ? "hide" : "show"]()
			},
			show: function() {
				var t = this,
					e = a.Event("show");
				this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
					var e = a.support.transition && t.$element.hasClass("fade");
					t.$element.parent().length || t.$element.appendTo(document.body), t.$element.show(), e && t.$element[0].offsetWidth, t.$element.addClass("in").attr("aria-hidden", !1), t.enforceFocus(), e ? t.$element.one(a.support.transition.end, function() {
						t.$element.focus().trigger("shown")
					}) : t.$element.focus().trigger("shown")
				}))
			},
			hide: function(e) {
				e && e.preventDefault();
				e = a.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
			},
			enforceFocus: function() {
				var t = this;
				a(document).on("focusin.modal", function(e) {
					t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
				})
			},
			escape: function() {
				var t = this;
				this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(e) {
					27 == e.which && t.hide()
				}) : this.isShown || this.$element.off("keyup.dismiss.modal")
			},
			hideWithTransition: function() {
				var e = this,
					t = setTimeout(function() {
						e.$element.off(a.support.transition.end), e.hideModal()
					}, 500);
				this.$element.one(a.support.transition.end, function() {
					clearTimeout(t), e.hideModal()
				})
			},
			hideModal: function(e) {
				this.$element.hide().trigger("hidden"), this.backdrop()
			},
			removeBackdrop: function() {
				this.$backdrop.remove(), this.$backdrop = null
			},
			backdrop: function(e) {
				var t = this.$element.hasClass("fade") ? "fade" : "";
				if(this.isShown && this.options.backdrop) {
					var n = a.support.transition && t;
					this.$backdrop = a('<div class="modal-backdrop ' + t + '" />').appendTo(document.body), this.$backdrop.click("static" == this.options.backdrop ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), n ? this.$backdrop.one(a.support.transition.end, e) : e()
				} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, a.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : e && e()
			}
		}, a.fn.modal = function(i) {
			return this.each(function() {
				var e = a(this),
					t = e.data("modal"),
					n = a.extend({}, a.fn.modal.defaults, e.data(), "object" == typeof i && i);
				t || e.data("modal", t = new r(this, n)), "string" == typeof i ? t[i]() : n.show && t.show()
			})
		}, a.fn.modal.defaults = {
			backdrop: !0,
			keyboard: !0,
			show: !0
		}, a.fn.modal.Constructor = r, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(e) {
			var t = a(this),
				n = t.attr("href"),
				i = a(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
				r = i.data("modal") ? "toggle" : a.extend({
					remote: !/#/.test(n) && n
				}, i.data(), t.data());
			e.preventDefault(), i.modal(r).one("hide", function() {
				t.focus()
			})
		})
	}(window.jQuery),
	function(s) {
		function r() {
			s(e).each(function() {
				o(s(this)).removeClass("open")
			})
		}

		function o(e) {
			var t, n = e.attr("data-target");
			return n || (n = (n = e.attr("href")) && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")), (t = s(n)).length || (t = e.parent()), t
		}
		var e = "[data-toggle=dropdown]",
			i = function(e) {
				var t = s(e).on("click.dropdown.data-api", this.toggle);
				s("html").on("click.dropdown.data-api", function() {
					t.parent().removeClass("open")
				})
			};
		i.prototype = {
			constructor: i,
			toggle: function(e) {
				var t, n, i = s(this);
				if(!i.is(".disabled, :disabled")) return n = (t = o(i)).hasClass("open"), r(), n || (t.toggleClass("open"), i.focus()), !1
			},
			keydown: function(e) {
				var t, n, i, r, a;
				if(/(38|40|27)/.test(e.keyCode) && (t = s(this), e.preventDefault(), e.stopPropagation(), !t.is(".disabled, :disabled"))) {
					if(!(r = (i = o(t)).hasClass("open")) || r && 27 == e.keyCode) return t.click();
					(n = s("[role=menu] li:not(.divider) a", i)).length && (a = n.index(n.filter(":focus")), 38 == e.keyCode && 0 < a && a--, 40 == e.keyCode && a < n.length - 1 && a++, ~a || (a = 0), n.eq(a).focus())
				}
			}
		}, s.fn.dropdown = function(n) {
			return this.each(function() {
				var e = s(this),
					t = e.data("dropdown");
				t || e.data("dropdown", t = new i(this)), "string" == typeof n && t[n].call(e)
			})
		}, s.fn.dropdown.Constructor = i, s(document).on("click.dropdown.data-api touchstart.dropdown.data-api", r).on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(e) {
			e.stopPropagation()
		}).on("click.dropdown.data-api touchstart.dropdown.data-api", e, i.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", e + ", [role=menu]", i.prototype.keydown)
	}(window.jQuery),
	function(a) {
		function r(e, t) {
			var n, i = a.proxy(this.process, this),
				r = a(e).is("body") ? a(window) : a(e);
			this.options = a.extend({}, a.fn.scrollspy.defaults, t), this.$scrollElement = r.on("scroll.scroll-spy.data-api", i), this.selector = (this.options.target || (n = a(e).attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
		}
		r.prototype = {
			constructor: r,
			refresh: function() {
				var e = this;
				this.offsets = a([]), this.targets = a([]), this.$body.find(this.selector).map(function() {
					var e = a(this),
						t = e.data("target") || e.attr("href"),
						n = /^#\w/.test(t) && a(t);
					return n && n.length && [
						[n.position().top, t]
					] || null
				}).sort(function(e, t) {
					return e[0] - t[0]
				}).each(function() {
					e.offsets.push(this[0]), e.targets.push(this[1])
				})
			},
			process: function() {
				var e, t = this.$scrollElement.scrollTop() + this.options.offset,
					n = (this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight) - this.$scrollElement.height(),
					i = this.offsets,
					r = this.targets,
					a = this.activeTarget;
				if(n <= t) return a != (e = r.last()[0]) && this.activate(e);
				for(e = i.length; e--;) a != r[e] && t >= i[e] && (!i[e + 1] || t <= i[e + 1]) && this.activate(r[e])
			},
			activate: function(e) {
				var t, n;
				this.activeTarget = e, a(this.selector).parent(".active").removeClass("active"), n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', (t = a(n).parent("li").addClass("active")).parent(".dropdown-menu").length && (t = t.closest("li.dropdown").addClass("active")), t.trigger("activate")
			}
		}, a.fn.scrollspy = function(i) {
			return this.each(function() {
				var e = a(this),
					t = e.data("scrollspy"),
					n = "object" == typeof i && i;
				t || e.data("scrollspy", t = new r(this, n)), "string" == typeof i && t[i]()
			})
		}, a.fn.scrollspy.Constructor = r, a.fn.scrollspy.defaults = {
			offset: 10
		}, a(window).on("load", function() {
			a('[data-spy="scroll"]').each(function() {
				var e = a(this);
				e.scrollspy(e.data())
			})
		})
	}(window.jQuery),
	function(s) {
		var i = function(e) {
			this.element = s(e)
		};
		i.prototype = {
			constructor: i,
			show: function() {
				var e, t, n, i = this.element,
					r = i.closest("ul:not(.dropdown-menu)"),
					a = i.attr("data-target");
				a || (a = (a = i.attr("href")) && a.replace(/.*(?=#[^\s]*$)/, "")), i.parent("li").hasClass("active") || (e = r.find(".active:last a")[0], n = s.Event("show", {
					relatedTarget: e
				}), i.trigger(n), n.isDefaultPrevented() || (t = s(a), this.activate(i.parent("li"), r), this.activate(t, t.parent(), function() {
					i.trigger({
						type: "shown",
						relatedTarget: e
					})
				})))
			},
			activate: function(e, t, n) {
				function i() {
					r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), n && n()
				}
				var r = t.find("> .active"),
					a = n && s.support.transition && r.hasClass("fade");
				a ? r.one(s.support.transition.end, i) : i(), r.removeClass("in")
			}
		}, s.fn.tab = function(n) {
			return this.each(function() {
				var e = s(this),
					t = e.data("tab");
				t || e.data("tab", t = new i(this)), "string" == typeof n && t[n]()
			})
		}, s.fn.tab.Constructor = i, s(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
			e.preventDefault(), s(this).tab("show")
		})
	}(window.jQuery),
	function(a) {
		var r = function(e, t) {
			this.init("tooltip", e, t)
		};
		r.prototype = {
			constructor: r,
			init: function(e, t, n) {
				var i, r;
				this.type = e, this.$element = a(t), this.options = this.getOptions(n), this.enabled = !0, "click" == this.options.trigger ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : "manual" != this.options.trigger && (i = "hover" == this.options.trigger ? "mouseenter" : "focus", r = "hover" == this.options.trigger ? "mouseleave" : "blur", this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(r + "." + this.type, this.options.selector, a.proxy(this.leave, this))), this.options.selector ? this._options = a.extend({}, this.options, {
					trigger: "manual",
					selector: ""
				}) : this.fixTitle()
			},
			getOptions: function(e) {
				return(e = a.extend({}, a.fn[this.type].defaults, e, this.$element.data())).delay && "number" == typeof e.delay && (e.delay = {
					show: e.delay,
					hide: e.delay
				}), e
			},
			enter: function(e) {
				var t = a(e.currentTarget)[this.type](this._options).data(this.type);
				if(!t.options.delay || !t.options.delay.show) return t.show();
				clearTimeout(this.timeout), t.hoverState = "in", this.timeout = setTimeout(function() {
					"in" == t.hoverState && t.show()
				}, t.options.delay.show)
			},
			leave: function(e) {
				var t = a(e.currentTarget)[this.type](this._options).data(this.type);
				if(this.timeout && clearTimeout(this.timeout), !t.options.delay || !t.options.delay.hide) return t.hide();
				t.hoverState = "out", this.timeout = setTimeout(function() {
					"out" == t.hoverState && t.hide()
				}, t.options.delay.hide)
			},
			show: function() {
				var e, t, n, i, r, a, s;
				if(this.hasContent() && this.enabled) {
					switch(e = this.tip(), this.setContent(), this.options.animation && e.addClass("fade"), a = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement, t = /in/.test(a), e.detach().css({
						top: 0,
						left: 0,
						display: "block"
					}).insertAfter(this.$element), n = this.getPosition(t), i = e[0].offsetWidth, r = e[0].offsetHeight, t ? a.split(" ")[1] : a) {
						case "bottom":
							s = {
								top: n.top + n.height,
								left: n.left + n.width / 2 - i / 2
							};
							break;
						case "top":
							s = {
								top: n.top - r,
								left: n.left + n.width / 2 - i / 2
							};
							break;
						case "left":
							s = {
								top: n.top + n.height / 2 - r / 2,
								left: n.left - i
							};
							break;
						case "right":
							s = {
								top: n.top + n.height / 2 - r / 2,
								left: n.left + n.width
							}
					}
					e.offset(s).addClass(a).addClass("in")
				}
			},
			setContent: function() {
				var e = this.tip(),
					t = this.getTitle();
				e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
			},
			hide: function() {
				var e, t = this.tip();
				return t.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? (e = setTimeout(function() {
					t.off(a.support.transition.end).detach()
				}, 500), t.one(a.support.transition.end, function() {
					clearTimeout(e), t.detach()
				})) : t.detach(), this
			},
			fixTitle: function() {
				var e = this.$element;
				(e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").removeAttr("title")
			},
			hasContent: function() {
				return this.getTitle()
			},
			getPosition: function(e) {
				return a.extend({}, e ? {
					top: 0,
					left: 0
				} : this.$element.offset(), {
					width: this.$element[0].offsetWidth,
					height: this.$element[0].offsetHeight
				})
			},
			getTitle: function() {
				var e = this.$element,
					t = this.options;
				return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
			},
			tip: function() {
				return this.$tip = this.$tip || a(this.options.template)
			},
			validate: function() {
				this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
			},
			enable: function() {
				this.enabled = !0
			},
			disable: function() {
				this.enabled = !1
			},
			toggleEnabled: function() {
				this.enabled = !this.enabled
			},
			toggle: function(e) {
				var t = a(e.currentTarget)[this.type](this._options).data(this.type);
				t[t.tip().hasClass("in") ? "hide" : "show"]()
			},
			destroy: function() {
				this.hide().$element.off("." + this.type).removeData(this.type)
			}
		}, a.fn.tooltip = function(i) {
			return this.each(function() {
				var e = a(this),
					t = e.data("tooltip"),
					n = "object" == typeof i && i;
				t || e.data("tooltip", t = new r(this, n)), "string" == typeof i && t[i]()
			})
		}, a.fn.tooltip.Constructor = r, a.fn.tooltip.defaults = {
			animation: !0,
			placement: "top",
			selector: !1,
			template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover",
			title: "",
			delay: 0,
			html: !1
		}
	}(window.jQuery),
	function(r) {
		var a = function(e, t) {
			this.init("popover", e, t)
		};
		a.prototype = r.extend({}, r.fn.tooltip.Constructor.prototype, {
			constructor: a,
			setContent: function() {
				var e = this.tip(),
					t = this.getTitle(),
					n = this.getContent();
				e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content > *")[this.options.html ? "html" : "text"](n), e.removeClass("fade top bottom left right in")
			},
			hasContent: function() {
				return this.getTitle() || this.getContent()
			},
			getContent: function() {
				var e = this.$element,
					t = this.options;
				return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
			},
			tip: function() {
				return this.$tip || (this.$tip = r(this.options.template)), this.$tip
			},
			destroy: function() {
				this.hide().$element.off("." + this.type).removeData(this.type)
			}
		}), r.fn.popover = function(i) {
			return this.each(function() {
				var e = r(this),
					t = e.data("popover"),
					n = "object" == typeof i && i;
				t || e.data("popover", t = new a(this, n)), "string" == typeof i && t[i]()
			})
		}, r.fn.popover.Constructor = a, r.fn.popover.defaults = r.extend({}, r.fn.tooltip.defaults, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
		})
	}(window.jQuery),
	function(o) {
		var r = function(e, t) {
			this.options = o.extend({}, o.fn.affix.defaults, t), this.$window = o(window).on("scroll.affix.data-api", o.proxy(this.checkPosition, this)).on("click.affix.data-api", o.proxy(function() {
				setTimeout(o.proxy(this.checkPosition, this), 1)
			}, this)), this.$element = o(e), this.checkPosition()
		};
		r.prototype.checkPosition = function() {
			if(this.$element.is(":visible")) {
				var e, t = o(document).height(),
					n = this.$window.scrollTop(),
					i = this.$element.offset(),
					r = this.options.offset,
					a = r.bottom,
					s = r.top;
				"object" != typeof r && (a = s = r), "function" == typeof s && (s = r.top()), "function" == typeof a && (a = r.bottom()), e = !(null != this.unpin && n + this.unpin <= i.top) && (null != a && i.top + this.$element.height() >= t - a ? "bottom" : null != s && n <= s && "top"), this.affixed !== e && (this.affixed = e, this.unpin = "bottom" == e ? i.top - n : null, this.$element.removeClass("affix affix-top affix-bottom").addClass("affix" + (e ? "-" + e : "")))
			}
		}, o.fn.affix = function(i) {
			return this.each(function() {
				var e = o(this),
					t = e.data("affix"),
					n = "object" == typeof i && i;
				t || e.data("affix", t = new r(this, n)), "string" == typeof i && t[i]()
			})
		}, o.fn.affix.Constructor = r, o.fn.affix.defaults = {
			offset: 0
		}, o(window).on("load", function() {
			o('[data-spy="affix"]').each(function() {
				var e = o(this),
					t = e.data();
				t.offset = t.offset || {}, t.offsetBottom && (t.offset.bottom = t.offsetBottom), t.offsetTop && (t.offset.top = t.offsetTop), e.affix(t)
			})
		})
	}(window.jQuery),
	function(a) {
		var t = '[data-dismiss="alert"]',
			i = function(e) {
				a(e).on("click", t, this.close)
			};
		i.prototype.close = function(e) {
			function t() {
				n.trigger("closed").remove()
			}
			var n, i = a(this),
				r = i.attr("data-target");
			r || (r = (r = i.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), n = a(r), e && e.preventDefault(), n.length || (n = i.hasClass("alert") ? i : i.parent()), n.trigger(e = a.Event("close")), e.isDefaultPrevented() || (n.removeClass("in"), a.support.transition && n.hasClass("fade") ? n.on(a.support.transition.end, t) : t())
		}, a.fn.alert = function(n) {
			return this.each(function() {
				var e = a(this),
					t = e.data("alert");
				t || e.data("alert", t = new i(this)), "string" == typeof n && t[n].call(e)
			})
		}, a.fn.alert.Constructor = i, a(document).on("click.alert.data-api", t, i.prototype.close)
	}(window.jQuery),
	function(r) {
		var a = function(e, t) {
			this.$element = r(e), this.options = r.extend({}, r.fn.button.defaults, t)
		};
		a.prototype.setState = function(e) {
			var t = "disabled",
				n = this.$element,
				i = n.data(),
				r = n.is("input") ? "val" : "html";
			e += "Text", i.resetText || n.data("resetText", n[r]()), n[r](i[e] || this.options[e]), setTimeout(function() {
				"loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
			}, 0)
		}, a.prototype.toggle = function() {
			var e = this.$element.closest('[data-toggle="buttons-radio"]');
			e && e.find(".active").removeClass("active"), this.$element.toggleClass("active")
		}, r.fn.button = function(i) {
			return this.each(function() {
				var e = r(this),
					t = e.data("button"),
					n = "object" == typeof i && i;
				t || e.data("button", t = new a(this, n)), "toggle" == i ? t.toggle() : i && t.setState(i)
			})
		}, r.fn.button.defaults = {
			loadingText: "loading..."
		}, r.fn.button.Constructor = a, r(document).on("click.button.data-api", "[data-toggle^=button]", function(e) {
			var t = r(e.target);
			t.hasClass("btn") || (t = t.closest(".btn")), t.button("toggle")
		})
	}(window.jQuery),
	function(a) {
		var r = function(e, t) {
			this.$element = a(e), this.options = a.extend({}, a.fn.collapse.defaults, t), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
		};
		r.prototype = {
			constructor: r,
			dimension: function() {
				return this.$element.hasClass("width") ? "width" : "height"
			},
			show: function() {
				var e, t, n, i;
				if(!this.transitioning) {
					if(e = this.dimension(), t = a.camelCase(["scroll", e].join("-")), (n = this.$parent && this.$parent.find("> .accordion-group > .in")) && n.length) {
						if((i = n.data("collapse")) && i.transitioning) return;
						n.collapse("hide"), i || n.data("collapse", null)
					}
					this.$element[e](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[e](this.$element[0][t])
				}
			},
			hide: function() {
				var e;
				this.transitioning || (e = this.dimension(), this.reset(this.$element[e]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[e](0))
			},
			reset: function(e) {
				var t = this.dimension();
				return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth, this.$element[null !== e ? "addClass" : "removeClass"]("collapse"), this
			},
			transition: function(e, t, n) {
				var i = this,
					r = function() {
						"show" == t.type && i.reset(), i.transitioning = 0, i.$element.trigger(n)
					};
				this.$element.trigger(t), t.isDefaultPrevented() || (this.transitioning = 1, this.$element[e]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, r) : r())
			},
			toggle: function() {
				this[this.$element.hasClass("in") ? "hide" : "show"]()
			}
		}, a.fn.collapse = function(i) {
			return this.each(function() {
				var e = a(this),
					t = e.data("collapse"),
					n = "object" == typeof i && i;
				t || e.data("collapse", t = new r(this, n)), "string" == typeof i && t[i]()
			})
		}, a.fn.collapse.defaults = {
			toggle: !0
		}, a.fn.collapse.Constructor = r, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(e) {
			var t, n = a(this),
				i = n.attr("data-target") || e.preventDefault() || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""),
				r = a(i).data("collapse") ? "toggle" : n.data();
			n[a(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(i).collapse(r)
		})
	}(window.jQuery),
	function(c) {
		var a = function(e, t) {
			this.$element = c(e), this.options = t, this.options.slide && this.slide(this.options.slide), "hover" == this.options.pause && this.$element.on("mouseenter", c.proxy(this.pause, this)).on("mouseleave", c.proxy(this.cycle, this))
		};
		a.prototype = {
			cycle: function(e) {
				return e || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(c.proxy(this.next, this), this.options.interval)), this
			},
			to: function(e) {
				var t = this.$element.find(".item.active"),
					n = t.parent().children(),
					i = n.index(t),
					r = this;
				if(!(e > n.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid", function() {
					r.to(e)
				}) : i == e ? this.pause().cycle() : this.slide(i < e ? "next" : "prev", c(n[e]))
			},
			pause: function(e) {
				return e || (this.paused = !0), this.$element.find(".next, .prev").length && c.support.transition.end && (this.$element.trigger(c.support.transition.end), this.cycle()), clearInterval(this.interval), this.interval = null, this
			},
			next: function() {
				if(!this.sliding) return this.slide("next")
			},
			prev: function() {
				if(!this.sliding) return this.slide("prev")
			},
			slide: function(e, t) {
				var n, i = this.$element.find(".item.active"),
					r = t || i[e](),
					a = this.interval,
					s = "next" == e ? "left" : "right",
					o = "next" == e ? "first" : "last",
					l = this;
				if(this.sliding = !0, a && this.pause(), r = r.length ? r : this.$element.find(".item")[o](), n = c.Event("slide", {
						relatedTarget: r[0]
					}), !r.hasClass("active")) {
					if(c.support.transition && this.$element.hasClass("slide")) {
						if(this.$element.trigger(n), n.isDefaultPrevented()) return;
						r.addClass(e), r[0].offsetWidth, i.addClass(s), r.addClass(s), this.$element.one(c.support.transition.end, function() {
							r.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
								l.$element.trigger("slid")
							}, 0)
						})
					} else {
						if(this.$element.trigger(n), n.isDefaultPrevented()) return;
						i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
					}
					return a && this.cycle(), this
				}
			}
		}, c.fn.carousel = function(r) {
			return this.each(function() {
				var e = c(this),
					t = e.data("carousel"),
					n = c.extend({}, c.fn.carousel.defaults, "object" == typeof r && r),
					i = "string" == typeof r ? r : n.slide;
				t || e.data("carousel", t = new a(this, n)), "number" == typeof r ? t.to(r) : i ? t[i]() : n.interval && t.cycle()
			})
		}, c.fn.carousel.defaults = {
			interval: 5e3,
			pause: "hover"
		}, c.fn.carousel.Constructor = a, c(document).on("click.carousel.data-api", "[data-slide]", function(e) {
			var t, n = c(this),
				i = c(n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "")),
				r = c.extend({}, i.data(), n.data());
			i.carousel(r), e.preventDefault()
		})
	}(window.jQuery),
	function(r) {
		var a = function(e, t) {
			this.$element = r(e), this.options = r.extend({}, r.fn.typeahead.defaults, t), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.$menu = r(this.options.menu).appendTo("body"), this.source = this.options.source, this.shown = !1, this.listen()
		};
		a.prototype = {
			constructor: a,
			select: function() {
				var e = this.$menu.find(".active").attr("data-value");
				return this.$element.val(this.updater(e)).change(), this.hide()
			},
			updater: function(e) {
				return e
			},
			show: function() {
				var e = r.extend({}, this.$element.offset(), {
					height: this.$element[0].offsetHeight
				});
				return this.$menu.css({
					top: e.top + e.height,
					left: e.left
				}), this.$menu.show(), this.shown = !0, this
			},
			hide: function() {
				return this.$menu.hide(), this.shown = !1, this
			},
			lookup: function(e) {
				var t;
				return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (t = r.isFunction(this.source) ? this.source(this.query, r.proxy(this.process, this)) : this.source) ? this.process(t) : this
			},
			process: function(e) {
				var t = this;
				return e = r.grep(e, function(e) {
					return t.matcher(e)
				}), (e = this.sorter(e)).length ? this.render(e.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
			},
			matcher: function(e) {
				return ~e.toLowerCase().indexOf(this.query.toLowerCase())
			},
			sorter: function(e) {
				for(var t, n = [], i = [], r = []; t = e.shift();) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? i.push(t) : r.push(t) : n.push(t);
				return n.concat(i, r)
			},
			highlighter: function(e) {
				var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
				return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
					return "<strong>" + t + "</strong>"
				})
			},
			render: function(e) {
				var n = this;
				return(e = r(e).map(function(e, t) {
					return(e = r(n.options.item).attr("data-value", t)).find("a").html(n.highlighter(t)), e[0]
				})).first().addClass("active"), this.$menu.html(e), this
			},
			next: function(e) {
				var t = this.$menu.find(".active").removeClass("active").next();
				t.length || (t = r(this.$menu.find("li")[0])), t.addClass("active")
			},
			prev: function(e) {
				var t = this.$menu.find(".active").removeClass("active").prev();
				t.length || (t = this.$menu.find("li").last()), t.addClass("active")
			},
			listen: function() {
				this.$element.on("blur", r.proxy(this.blur, this)).on("keypress", r.proxy(this.keypress, this)).on("keyup", r.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", r.proxy(this.keydown, this)), this.$menu.on("click", r.proxy(this.click, this)).on("mouseenter", "li", r.proxy(this.mouseenter, this))
			},
			eventSupported: function(e) {
				var t = e in this.$element;
				return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]), t
			},
			move: function(e) {
				if(this.shown) {
					switch(e.keyCode) {
						case 9:
						case 13:
						case 27:
							e.preventDefault();
							break;
						case 38:
							e.preventDefault(), this.prev();
							break;
						case 40:
							e.preventDefault(), this.next()
					}
					e.stopPropagation()
				}
			},
			keydown: function(e) {
				this.suppressKeyPressRepeat = !~r.inArray(e.keyCode, [40, 38, 9, 13, 27]), this.move(e)
			},
			keypress: function(e) {
				this.suppressKeyPressRepeat || this.move(e)
			},
			keyup: function(e) {
				switch(e.keyCode) {
					case 40:
					case 38:
					case 16:
					case 17:
					case 18:
						break;
					case 9:
					case 13:
						if(!this.shown) return;
						this.select();
						break;
					case 27:
						if(!this.shown) return;
						this.hide();
						break;
					default:
						this.lookup()
				}
				e.stopPropagation(), e.preventDefault()
			},
			blur: function(e) {
				var t = this;
				setTimeout(function() {
					t.hide()
				}, 150)
			},
			click: function(e) {
				e.stopPropagation(), e.preventDefault(), this.select()
			},
			mouseenter: function(e) {
				this.$menu.find(".active").removeClass("active"), r(e.currentTarget).addClass("active")
			}
		}, r.fn.typeahead = function(i) {
			return this.each(function() {
				var e = r(this),
					t = e.data("typeahead"),
					n = "object" == typeof i && i;
				t || e.data("typeahead", t = new a(this, n)), "string" == typeof i && t[i]()
			})
		}, r.fn.typeahead.defaults = {
			source: [],
			items: 8,
			menu: '<ul class="typeahead dropdown-menu"></ul>',
			item: '<li><a href="#"></a></li>',
			minLength: 1
		}, r.fn.typeahead.Constructor = a, r(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(e) {
			var t = r(this);
			t.data("typeahead") || (e.preventDefault(), t.typeahead(t.data()))
		})
	}(window.jQuery),
	function(v) {
		var i, e, t, r = (e = document.createElement("input"), t = "onpaste", e.setAttribute(t, ""), ("function" == typeof e[t] ? "paste" : "input") + ".mask"),
			n = navigator.userAgent,
			y = /iphone/i.test(n),
			$ = /android/i.test(n);
		v.mask = {
			definitions: {
				9: "[0-9]",
				a: "[A-Za-z]",
				"*": "[A-Za-z0-9]"
			},
			dataName: "rawMaskFn",
			placeholder: "_"
		}, v.fn.extend({
			caret: function(e, t) {
				var n;
				if(0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function() {
					this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()).collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
				})) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
					begin: e,
					end: t
				})
			},
			unmask: function() {
				return this.trigger("unmask")
			},
			mask: function(t, p) {
				var n, _, h, m, g;
				return !t && 0 < this.length ? v(this[0]).data(v.mask.dataName)() : (p = v.extend({
					placeholder: v.mask.placeholder,
					completed: null
				}, p), n = v.mask.definitions, _ = [], h = g = t.length, m = null, v.each(t.split(""), function(e, t) {
					"?" == t ? (g--, h = e) : n[t] ? (_.push(RegExp(n[t])), null === m && (m = _.length - 1)) : _.push(null)
				}), this.trigger("unmask").each(function() {
					function s(e) {
						for(; g > ++e && !_[e];);
						return e
					}

					function o(e, t) {
						var n, i;
						if(!(e < 0)) {
							for(n = e, i = s(t); n < g; n++)
								if(_[n]) {
									if(!(i < g && _[n].test(d[i]))) break;
									d[n] = d[i], d[i] = p.placeholder, i = s(i)
								}
							c(), u.caret(Math.max(m, e))
						}
					}

					function l(e, t) {
						var n;
						for(n = e; n < t && n < g; n++) _[n] && (d[n] = p.placeholder)
					}

					function c() {
						u.val(d.join(""))
					}

					function a(e) {
						for(var t, n = u.val(), i = -1, r = 0, a = 0; r < g; r++)
							if(_[r]) {
								for(d[r] = p.placeholder; a++ < n.length;)
									if(t = n.charAt(a - 1), _[r].test(t)) {
										d[r] = t, i = r;
										break
									}
								if(a > n.length) break
							} else d[r] === n.charAt(a) && r !== h && (a++, i = r);
						return e ? c() : i + 1 < h ? (u.val(""), l(0, g)) : (c(), u.val(u.val().substring(0, i + 1))), h ? r : m
					}
					var u = v(this),
						d = v.map(t.split(""), function(e) {
							return "?" != e ? n[e] ? p.placeholder : e : void 0
						}),
						f = u.val();
					u.data(v.mask.dataName, function() {
						return v.map(d, function(e, t) {
							return _[t] && e != p.placeholder ? e : null
						}).join("")
					}), u.attr("readonly") || u.one("unmask", function() {
						u.unbind(".mask").removeData(v.mask.dataName)
					}).bind("focus.mask", function() {
						var e;
						clearTimeout(i), f = u.val(), e = a(), i = setTimeout(function() {
							c(), e == t.length ? u.caret(0, e) : u.caret(e)
						}, 10)
					}).bind("blur.mask", function() {
						a(), u.val() != f && u.change()
					}).bind("keydown.mask", function(e) {
						var t, n, i, r = e.which;
						8 === r || 46 === r || y && 127 === r ? (n = (t = u.caret()).begin, 0 == (i = t.end) - n && (n = 46 !== r ? function(e) {
							for(; 0 <= --e && !_[e];);
							return e
						}(n) : i = s(n - 1), i = 46 === r ? s(i) : i), l(n, i), o(n, i - 1), e.preventDefault()) : 27 == r && (u.val(f), u.caret(0, a()), e.preventDefault())
					}).bind("keypress.mask", function(e) {
						var t, n, i, r = e.which,
							a = u.caret();
						e.ctrlKey || e.altKey || e.metaKey || r < 32 || r && (0 != a.end - a.begin && (l(a.begin, a.end), o(a.begin, a.end - 1)), (t = s(a.begin - 1)) < g && (n = String.fromCharCode(r), _[t].test(n) && (function(e) {
							var t, n, i, r;
							for(t = e, n = p.placeholder; t < g; t++)
								if(_[t]) {
									if(i = s(t), r = d[t], d[t] = n, !(i < g && _[i].test(r))) break;
									n = r
								}
						}(t), d[t] = n, c(), i = s(t), $ ? setTimeout(v.proxy(v.fn.caret, u, i), 0) : u.caret(i), p.completed && g <= i && p.completed.call(u))), e.preventDefault())
					}).bind(r, function() {
						setTimeout(function() {
							var e = a(!0);
							u.caret(e), p.completed && e == u.val().length && p.completed.call(u)
						}, 0)
					}), a()
				}))
			}
		})
	}(jQuery), angular.module("ui.ace", []).constant("uiAceConfig", {}).directive("uiAce", ["uiAceConfig", function(_) {
		if(angular.isUndefined(window.ace)) throw new Error("ui-ace need ace to work... (o rly?)");
		return {
			restrict: "EA",
			require: "?ngModel",
			link: function(i, e, n, r) {
				var a, s, o = _.ace || {},
					l = angular.extend({}, o, i.$eval(n.uiAce)),
					c = window.ace.edit(e[0]),
					u = c.getSession(),
					d = function() {
						var e = arguments[0],
							t = Array.prototype.slice.call(arguments, 1);
						angular.isDefined(e) && i.$evalAsync(function() {
							if(!angular.isFunction(e)) throw new Error("ui-ace use a function as callback.");
							e(t)
						})
					},
					f = function(n) {
						return function(e) {
							var t = u.getValue();
							!r || t === r.$viewValue || i.$$phase || i.$root.$$phase || i.$evalAsync(function() {
								r.$setViewValue(t)
							}), d(n, e, c)
						}
					},
					p = function(e) {
						return function() {
							d(e, c)
						}
					};
				n.$observe("readonly", function(e) {
					c.setReadOnly(!!e || "" === e)
				}), r && (r.$formatters.push(function(e) {
					if(angular.isUndefined(e) || null === e) return "";
					if(angular.isObject(e) || angular.isArray(e)) throw new Error("ui-ace cannot use an object or an array as a model");
					return e
				}), r.$render = function() {
					u.setValue(r.$viewValue)
				});
				var t = function(e, t) {
					e !== t && ((l = angular.extend({}, o, i.$eval(n.uiAce))).callbacks = [l.onLoad], l.onLoad !== o.onLoad && l.callbacks.unshift(o.onLoad), u.removeListener("change", a), a = f(l.onChange), u.on("change", a), c.removeListener("blur", s), s = p(l.onBlur), c.on("blur", s), function(t, e, n) {
						var i, r;
						angular.isDefined(n.workerPath) && window.ace.require("ace/config").set("workerPath", n.workerPath);
						if(angular.isDefined(n.require) && n.require.forEach(function(e) {
								window.ace.require(e)
							}), angular.isDefined(n.showGutter) && t.renderer.setShowGutter(n.showGutter), angular.isDefined(n.useWrapMode) && e.setUseWrapMode(n.useWrapMode), angular.isDefined(n.showInvisibles) && t.renderer.setShowInvisibles(n.showInvisibles), angular.isDefined(n.showIndentGuides) && t.renderer.setDisplayIndentGuides(n.showIndentGuides), angular.isDefined(n.useSoftTabs) && e.setUseSoftTabs(n.useSoftTabs), angular.isDefined(n.showPrintMargin) && t.setShowPrintMargin(n.showPrintMargin), angular.isDefined(n.disableSearch) && n.disableSearch && t.commands.addCommands([{
								name: "unfind",
								bindKey: {
									win: "Ctrl-F",
									mac: "Command-F"
								},
								exec: function() {
									return !1
								},
								readOnly: !0
							}]), angular.isString(n.theme) && t.setTheme("ace/theme/" + n.theme), angular.isString(n.mode) && e.setMode("ace/mode/" + n.mode), angular.isDefined(n.firstLineNumber) && (angular.isNumber(n.firstLineNumber) ? e.setOption("firstLineNumber", n.firstLineNumber) : angular.isFunction(n.firstLineNumber) && e.setOption("firstLineNumber", n.firstLineNumber())), angular.isDefined(n.advanced))
							for(i in n.advanced) r = {
								name: i,
								value: n.advanced[i]
							}, t.setOption(r.name, r.value);
						if(angular.isDefined(n.rendererOptions))
							for(i in n.rendererOptions) r = {
								name: i,
								value: n.rendererOptions[i]
							}, t.renderer.setOption(r.name, r.value);
						angular.forEach(n.callbacks, function(e) {
							angular.isFunction(e) && e(t)
						})
					}(c, u, l))
				};
				i.$watch(n.uiAce, t, !0), t(o), e.on("$destroy", function() {
					c.session.$stopWorker(), c.destroy()
				}), i.$watch(function() {
					return [e[0].offsetWidth, e[0].offsetHeight]
				}, function() {
					c.resize(), c.renderer.updateFull()
				}, !0)
			}
		}
	}]), angular.module("ui.autocomplete", []).directive("uiAutocomplete", ["$timeout", "$exceptionHandler", function(g, v) {
		var e = $.ui.autocomplete.prototype,
			t = e._initSource;

		function y(e, t) {
			var n = new RegExp($.ui.autocomplete.escapeRegex(t), "i");
			return $.grep(e, function(e) {
				return n.test($("<div>").html(e.label || e.value || e).text())
			})
		}
		return $.extend(e, {
			_initSource: function() {
				this.options.html && $.isArray(this.options.source) ? this.source = function(e, t) {
					t(y(this.options.source, e.term))
				} : t.call(this)
			},
			_normalize: function(e) {
				return $.map(e, function(e) {
					return e && "object" == typeof e ? $.extend({
						label: e.label || e.value,
						value: e.value || e.label
					}, e) : {
						label: e + "",
						value: e
					}
				})
			},
			_renderItemData: function(e, t) {
				var n = t.groupLabel || t.label;
				return t.groupLabel ? n = $("<div>").append(n).addClass("ui-menu-group") : this.options.html ? ("object" == typeof n && (n = $(n)), ("object" != typeof n || 1 < n.length || !n.is("a")) && (n = $("<a>").append(n))) : n = $("<a>").text(n), $("<li>").append(n).appendTo(e).data("ui-autocomplete-item", t)
			},
			_resizeMenu: function() {
				var r = this;
				setTimeout(function() {
					var e = r.menu.element,
						t = e.css("max-height") || 0,
						n = Math.max(e.width("").outerWidth() + 1, r.element.outerWidth() - r.options.outWidth),
						i = (r.element.height(), $(window).height() - r.options.outHeight - (window.scrollY - e.offset().top));
					i = t && t < i ? t : i, i = r.options.maxHeight && i > r.options.maxHeight ? r.options.maxHeight : i, e.css({
						width: n,
						maxHeight: i
					})
				}, 10)
			}
		}), {
			require: "ngModel",
			link: function(i, n, t, r) {
				var e, a = !1,
					s = null,
					o = {},
					l = null,
					c = angular.forEach,
					u = angular.isObject,
					d = angular.extend,
					f = i.$eval(t.uiAutocomplete),
					p = n.val.bind(n),
					_ = i.$watch(t.ngModel, function(e) {
						u(l = e) && (r.$formatters.push(function(e) {
							return e.value
						}), r.$parsers.push(function(e) {
							return l.value = e, l
						}), i.$watch(t.ngModel, function(e) {
							p() !== e.value && (r.$viewValue = e.value, r.$render())
						}, !0), r.$pristine = !1, r.$setViewValue(l.value), r.$pristine = !0), e && _()
					}),
					h = {
						open: function(e, t) {
							a = !0, s = null
						},
						close: function(e, t) {
							a = !1
						},
						select: function(e, t) {
							s = t, g(function() {
								n.blur()
							}, 0)
						},
						change: function(e, t) {
							var n = p();
							null === (n = s && s.item ? s.item.value : f.options.onlySelect ? "" : n) ? r.$render() : "" === r.$viewValue ? i.$apply(function() {
								m()
							}) : r.$viewValue !== n && i.$apply(function() {
								r.$setViewValue(n), r.$render(), m(s)
							})
						}
					};

				function m(e) {
					u(l) && (r.$viewValue || 0 === r.$viewValue ? e && e.item && (e.item.label = u(e.item.label) ? $("<div>").append(e.item.label).html() : e.item.label, d(l, e.item)) : function i(r) {
						if(u(r)) {
							var a = /^\$/;
							c(r, function(e, t) {
								var n = typeof e;
								a.test(t) || ("number" === n ? r[t] = 0 : "string" === n ? r[t] = "" : "boolean" === n ? r[t] = !1 : u(e) && i(e))
							})
						}
					}(l), c(r.$viewChangeListeners, function(e) {
						try {
							e()
						} catch(e) {
							v(e)
						}
					}))
				}
				u(f) && (f.methods = {}, f.options = (e = f.options, (e = u(e) ? e : {}).disabled = !e.source || e.disabled, e.appendTo = e.appendTo || n.parents(".ng-view")[0] || n.parents("[ng-view]")[0] || null, e.minLength = e.focusOpen ? 0 : e.minLength, e.outHeight = e.outHeight || 0, e.maxHeight = e.maxHeight || 0, e.outWidth = e.outWidth || 0, e.position = e.position || {
					my: "left top",
					at: "left bottom",
					collision: "flipfit"
				}, e), c(["change", "close", "create", "focus", "open", "response", "search", "select"], function(n) {
					var i = f.options[n];
					i = "function" == typeof i ? i : angular.noop, o[n] = function(e, t) {
						h[n] && h[n](e, t), i(e, t), f.events && "function" == typeof f.events[n] && f.events[n](e, t)
					}
				}), c(["close", "destroy", "disable", "enable", "option", "search", "widget"], function(e) {
					f.methods[e] = function() {
						var t = [e];
						return c(arguments, function(e) {
							t.push(e)
						}), n.autocomplete.apply(n, t)
					}
				}), f.methods.filter = y, f.methods.clean = function() {
					r.$setViewValue(""), r.$render(), m()
				}, n.on("focus", function() {
					f.options.focusOpen && !a && n.autocomplete("search", "")
				}), n.autocomplete(d({}, f.options, o)), f.widget = n.autocomplete("widget"))
			}
		}
	}]), angular.module("ui.calendar", []).constant("uiCalendarConfig", {}).controller("uiCalendarCtrl", ["$scope", "$timeout", function(e, a) {
		var t = 1,
			n = 1,
			o = e.eventSources,
			i = e.calendarWatchEvent ? e.calendarWatchEvent : angular.noop;
		this.eventsFingerprint = function(e) {
			return e.__uiCalId || (e.__uiCalId = n++), "" + e.__uiCalId + (e.id || "") + (e.title || "") + (e.url || "") + (+e.start || "") + (+e.end || "") + (e.allDay || "") + (e.className || "") + i(e) || ""
		}, this.sourcesFingerprint = function(e) {
			return e.__id || (e.__id = t++)
		}, this.allEvents = function() {
			for(var e = [], t = 0, n = o.length; t < n; t++) {
				var i = o[t];
				if(angular.isArray(i)) e.push(i);
				else if(angular.isObject(i) && angular.isArray(i.events)) {
					var r = {};
					for(var a in i) "_uiCalId" !== a && "events" !== a && (r[a] = i[a]);
					for(var s = 0; s < i.events.length; s++) angular.extend(i.events[s], r);
					e.push(i.events)
				}
			}
			return Array.prototype.concat.apply([], e)
		}, this.changeWatcher = function(s, d) {
			var f, t = function() {
					for(var e, t, n = angular.isFunction(s) ? s() : s, i = [], r = 0, a = n.length; r < a; r++) t = n[r], e = d(t), _[e] = t, i.push(e);
					return i
				},
				p = function(e, t) {
					var n, i, r = [],
						a = {};
					for(n = 0, i = t.length; n < i; n++) a[t[n]] = !0;
					for(n = 0, i = e.length; n < i; n++) a[e[n]] || r.push(e[n]);
					return r
				},
				_ = {};
			return f = {
				subscribe: function(e, n) {
					e.$watch(t, function(e, t) {
						n && !1 === n(e, t) || function(e, t) {
							var n, i, r, a, s = {},
								o = p(t, e);
							for(n = 0, i = o.length; n < i; n++) {
								var l = o[n];
								r = _[l], delete _[l];
								var c = d(r);
								c === l ? f.onRemoved(r) : (s[c] = l, f.onChanged(r))
							}
							var u = p(e, t);
							for(n = 0, i = u.length; n < i; n++) a = u[n], r = _[a], s[a] || f.onAdded(r)
						}(e, t)
					}, !0)
				},
				onAdded: angular.noop,
				onChanged: angular.noop,
				onRemoved: angular.noop
			}
		}, this.getFullCalendarConfig = function(e, t) {
			var r = {};
			return angular.extend(r, t), angular.extend(r, e), angular.forEach(r, function(e, t) {
				var n, i;
				"function" == typeof e && (r[t] = ((n = r[t]) && (i = function() {
					var e = arguments;
					a(function() {
						n.apply(this, e)
					})
				}), i))
			}), r
		}
	}]).directive("uiCalendar", ["uiCalendarConfig", "$locale", function(u, e) {
		var t = function(e) {
				var t, n;
				for(n in t = [], e) t[n] = e[n];
				return t
			},
			n = e.DATETIME_FORMATS;
		return u = angular.extend({
			monthNames: t(n.MONTH),
			monthNamesShort: t(n.SHORTMONTH),
			dayNames: t(n.DAY),
			dayNamesShort: t(n.SHORTDAY)
		}, u || {}), {
			restrict: "A",
			scope: {
				eventSources: "=ngModel",
				calendarWatchEvent: "&"
			},
			controller: "uiCalendarCtrl",
			link: function(r, e, a, s) {
				var o = r.eventSources,
					n = !1,
					t = s.changeWatcher(o, s.sourcesFingerprint),
					i = s.changeWatcher(s.allEvents, s.eventsFingerprint),
					l = null;

				function c() {
					var e, t = a.uiCalendar ? r.$parent.$eval(a.uiCalendar) : {};
					e = s.getFullCalendarConfig(t, u), l = {
						eventSources: o
					}, angular.extend(l, e);
					var n = {};
					for(var i in l) "eventSources" !== i && (n[i] = l[i]);
					return JSON.stringify(n)
				}
				r.destroy = function() {
					a.calendar ? r.calendar = r.$parent[a.calendar] = e.html("") : r.calendar = e.html("")
				}, r.init = function() {
					r.calendar.fullCalendar(l)
				}, t.onAdded = function(e) {
					r.calendar.fullCalendar("addEventSource", e), n = !0
				}, t.onRemoved = function(e) {
					r.calendar.fullCalendar("removeEventSource", e), n = !0
				}, i.onAdded = function(e) {
					r.calendar.fullCalendar("renderEvent", e)
				}, i.onRemoved = function(t) {
					r.calendar.fullCalendar("removeEvents", function(e) {
						return e === t
					})
				}, i.onChanged = function(e) {
					r.calendar.fullCalendar("updateEvent", e)
				}, r.destroy(), c(), r.init(), t.subscribe(r), i.subscribe(r, function(e, t) {
					if(!0 === n) return n = !1
				}), r.$watch(c, function(e, t) {
					e !== t && (r.destroy(), r.init())
				})
			}
		}
	}]), angular.module("ui.date", []).constant("uiDateConfig", {}).directive("uiDate", ["uiDateConfig", function(e) {
		"use strict";
		var t;
		return t = {}, angular.extend(t, e), {
			require: "?ngModel",
			link: function(r, a, n, s) {
				var o = function() {
					return angular.extend({}, e, r.$eval(n.uiDate))
				};
				r.$watch(o, function() {
					var n = !1,
						e = o();
					if(s) {
						var i = e.onSelect || angular.noop;
						e.onSelect = function(e, t) {
							r.$apply(function() {
								n = !0, s.$setViewValue(a.datepicker("getDate")), i(e, t), a.blur()
							})
						}, e.beforeShow = function() {
							n = !0
						}, e.onClose = function(e, t) {
							n = !1
						}, a.on("blur", function() {
							n || r.$apply(function() {
								a.datepicker("setDate", a.datepicker("getDate")), s.$setViewValue(a.datepicker("getDate"))
							})
						}), s.$render = function() {
							var e = s.$viewValue;
							if(angular.isDefined(e) && null !== e && !angular.isDate(e)) throw new Error("ng-Model value must be a Date object - currently it is a " + typeof e + " - use ui-date-format to convert it from a string");
							a.datepicker("setDate", e)
						}
					}
					a.datepicker("destroy"), a.datepicker(e), s && s.$render()
				}, !0), r.$watch(n.uiMinDate, function(e) {
					if(n.uiDateFormat) {
						var t = o();
						null != e && a.datepicker("option", "minDate", jQuery.datepicker.formatDate(t.dateFormat, jQuery.datepicker.parseDate(n.uiDateFormat, e)))
					} else null != e && a.datepicker("option", "minDate", e)
				}), r.$watch(n.uiMaxDate, function(e) {
					if(n.uiDateFormat) {
						var t = o();
						null != e && a.datepicker("option", "maxDate", jQuery.datepicker.formatDate(t.dateFormat, jQuery.datepicker.parseDate(n.uiDateFormat, e)))
					} else null != e && a.datepicker("option", "maxDate", e)
				})
			}
		}
	}]).constant("uiDateFormatConfig", "").directive("uiDateFormat", ["uiDateFormatConfig", function(a) {
		return {
			require: "ngModel",
			link: function(e, t, n, i) {
				var r = n.uiDateFormat || a;
				r ? (i.$formatters.push(function(e) {
					return angular.isString(e) ? jQuery.datepicker.parseDate(r, e) : null
				}), i.$parsers.push(function(e) {
					return e ? jQuery.datepicker.formatDate(r, e) : null
				})) : (i.$formatters.push(function(e) {
					return angular.isString(e) ? new Date(e) : null
				}), i.$parsers.push(function(e) {
					return e ? e.toISOString() : null
				}))
			}
		}
	}]),
	function() {
		function e(e, t) {
			window.XMLHttpRequest.prototype[e] = t(window.XMLHttpRequest.prototype[e])
		}

		function s(e, t, n) {
			try {
				Object.defineProperty(e, t, {
					get: n
				})
			} catch(e) {}
		}
		if(window.FileAPI || (window.FileAPI = {}), !window.XMLHttpRequest) throw "AJAX is not supported. XMLHttpRequest is not defined.";
		if(FileAPI.shouldLoad = !window.FormData || FileAPI.forceLoad, FileAPI.shouldLoad) {
			var r = function(n) {
				if(!n.__listeners) {
					n.upload || (n.upload = {}), n.__listeners = [];
					var i = n.upload.addEventListener;
					n.upload.addEventListener = function(e, t) {
						n.__listeners[e] = t, i && i.apply(this, arguments)
					}
				}
			};
			e("open", function(i) {
				return function(t, e, n) {
					r(this), this.__url = e;
					try {
						i.apply(this, [t, e, n])
					} catch(e) {
						-1 < e.message.indexOf("Access is denied") && (this.__origError = e, i.apply(this, [t, "_fix_for_ie_crossdomain__", n]))
					}
				}
			}), e("getResponseHeader", function(t) {
				return function(e) {
					return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(e) : null == t ? null : t.apply(this, [e])
				}
			}), e("getAllResponseHeaders", function(e) {
				return function() {
					return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == e ? null : e.apply(this)
				}
			}), e("abort", function(e) {
				return function() {
					return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == e ? null : e.apply(this)
				}
			}), e("setRequestHeader", function(i) {
				return function(e, t) {
					if("__setXHR_" === e) {
						r(this);
						var n = t(this);
						n instanceof Function && n(this)
					} else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[e] = t, i.apply(this, arguments)
				}
			}), e("send", function(a) {
				return function() {
					var i = this;
					if(arguments[0] && arguments[0].__isFileAPIShim) {
						for(var e = arguments[0], t = {
								url: i.__url,
								jsonp: !1,
								cache: !0,
								complete: function(e, t) {
									e && angular.isString(e) && -1 !== e.indexOf("#2174") && (e = null), i.__completed = !0, !e && i.__listeners.load && i.__listeners.load({
										type: "load",
										loaded: i.__loaded,
										total: i.__total,
										target: i,
										lengthComputable: !0
									}), !e && i.__listeners.loadend && i.__listeners.loadend({
										type: "loadend",
										loaded: i.__loaded,
										total: i.__total,
										target: i,
										lengthComputable: !0
									}), "abort" === e && i.__listeners.abort && i.__listeners.abort({
										type: "abort",
										loaded: i.__loaded,
										total: i.__total,
										target: i,
										lengthComputable: !0
									}), void 0 !== t.status && s(i, "status", function() {
										return 0 === t.status && e && "abort" !== e ? 500 : t.status
									}), void 0 !== t.statusText && s(i, "statusText", function() {
										return t.statusText
									}), s(i, "readyState", function() {
										return 4
									}), void 0 !== t.response && s(i, "response", function() {
										return t.response
									});
									var n = t.responseText || (e && 0 === t.status && "abort" !== e ? e : void 0);
									s(i, "responseText", function() {
										return n
									}), s(i, "response", function() {
										return n
									}), e && s(i, "err", function() {
										return e
									}), i.__fileApiXHR = t, i.onreadystatechange && i.onreadystatechange(), i.onload && i.onload()
								},
								progress: function(e) {
									if((e.target = i).__listeners.progress && i.__listeners.progress(e), i.__total = e.total, i.__loaded = e.loaded, e.total === e.loaded) {
										var t = this;
										setTimeout(function() {
											i.__completed || (i.getAllResponseHeaders = function() {}, t.complete(null, {
												status: 204,
												statusText: "No Content"
											}))
										}, FileAPI.noContentTimeout || 1e4)
									}
								},
								headers: i.__requestHeaders,
								data: {},
								files: {}
							}, n = 0; n < e.data.length; n++) {
							var r = e.data[n];
							null != r.val && null != r.val.name && null != r.val.size && null != r.val.type ? t.files[r.key] = r.val : t.data[r.key] = r.val
						}
						setTimeout(function() {
							if(!FileAPI.hasFlash) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
							i.__fileApiXHR = FileAPI.upload(t)
						}, 1)
					} else {
						if(this.__origError) throw this.__origError;
						a.apply(i, arguments)
					}
				}
			}), window.XMLHttpRequest.__isFileAPIShim = !0, window.FormData = FormData = function() {
				return {
					append: function(e, t, n) {
						t.__isFileAPIBlobShim && (t = t.data[0]), this.data.push({
							key: e,
							val: t,
							name: n
						})
					},
					data: [],
					__isFileAPIShim: !0
				}
			}, window.Blob = Blob = function(e) {
				return {
					data: e,
					__isFileAPIBlobShim: !0
				}
			}
		}
	}(),
	function() {
		function e() {
			try {
				if(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return !0
			} catch(e) {
				if(void 0 !== navigator.mimeTypes["application/x-shockwave-flash"]) return !0
			}
			return !1
		}

		function s(e) {
			var t = 0,
				n = 0;
			if(window.jQuery) return jQuery(e).offset();
			if(e.offsetParent)
				for(; t += e.offsetLeft - e.scrollLeft, n += e.offsetTop - e.scrollTop, e = e.offsetParent;);
			return {
				left: t,
				top: n
			}
		}
		if(FileAPI.shouldLoad) {
			if(FileAPI.hasFlash = e(), FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
				var t, n, i, r, a, o = document.createElement("script"),
					l = document.getElementsByTagName("script");
				if(window.FileAPI.jsUrl) t = window.FileAPI.jsUrl;
				else if(window.FileAPI.jsPath) n = window.FileAPI.jsPath;
				else
					for(i = 0; i < l.length; i++)
						if(-1 < (r = (a = l[i].src).search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/))) {
							n = a.substring(0, r + 1);
							break
						}
				null == FileAPI.staticPath && (FileAPI.staticPath = n), o.setAttribute("src", t || n + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(o)
			}
			FileAPI.ngfFixIE = function(n, i, r) {
				if(!e()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
				n.bind("mouseenter", function() {
					var e, t = i.parent();
					n.attr("disabled") ? t && t.removeClass("js-fileapi-wrapper") : (i.attr("__ngf_flash_") || (i.unbind("change"), i.unbind("click"), i.bind("change", function(e) {
						a.apply(this, [e]), r.apply(this, [e])
					}), i.attr("__ngf_flash_", "true")), t.addClass("js-fileapi-wrapper"), "input" === (e = n)[0].tagName.toLowerCase() && e.attr("type") && "file" === e.attr("type").toLowerCase() || (t.css("position", "absolute").css("top", s(n[0]).top + "px").css("left", s(n[0]).left + "px").css("width", n[0].offsetWidth + "px").css("height", n[0].offsetHeight + "px").css("filter", "alpha(opacity=0)").css("display", n.css("display")).css("overflow", "hidden").css("z-index", "900000").css("visibility", "visible"), i.css("width", n[0].offsetWidth + "px").css("height", n[0].offsetHeight + "px").css("position", "absolute").css("top", "0px").css("left", "0px")))
				});
				var a = function(t) {
					for(var e = FileAPI.getFiles(t), n = 0; n < e.length; n++) void 0 === e[n].size && (e[n].size = 0), void 0 === e[n].name && (e[n].name = "file"), void 0 === e[n].type && (e[n].type = "undefined");
					t.target || (t.target = {}), t.target.files = e, t.target.files !== e && (t.__files_ = e), (t.__files_ || t.target.files).item = function(e) {
						return(t.__files_ || t.target.files)[e] || null
					}
				}
			}, FileAPI.disableFileInput = function(e, t) {
				t ? e.removeClass("js-fileapi-wrapper") : e.addClass("js-fileapi-wrapper")
			}
		}
	}(), window.FileReader || (window.FileReader = function() {
		var i = this,
			n = !1;
		this.listeners = {}, this.addEventListener = function(e, t) {
			i.listeners[e] = i.listeners[e] || [], i.listeners[e].push(t)
		}, this.removeEventListener = function(e, t) {
			i.listeners[e] && i.listeners[e].splice(i.listeners[e].indexOf(t), 1)
		}, this.dispatchEvent = function(e) {
			var t = i.listeners[e.type];
			if(t)
				for(var n = 0; n < t.length; n++) t[n].call(i, e)
		}, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
		var r = function(e, t) {
				var n = {
					type: e,
					target: i,
					loaded: t.loaded,
					total: t.total,
					error: t.error
				};
				return null != t.result && (n.target.result = t.result), n
			},
			t = function(e) {
				var t;
				n || (n = !0, i.onloadstart && i.onloadstart(r("loadstart", e))), "load" === e.type ? (i.onloadend && i.onloadend(r("loadend", e)), t = r("load", e), i.onload && i.onload(t)) : "progress" === e.type ? (t = r("progress", e), i.onprogress && i.onprogress(t)) : (t = r("error", e), i.onerror && i.onerror(t)), i.dispatchEvent(t)
			};
		this.readAsDataURL = function(e) {
			FileAPI.readAsDataURL(e, t)
		}, this.readAsText = function(e) {
			FileAPI.readAsText(e, t)
		}
	}), !window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function(i) {
		return function(e, t) {
			if("__setXHR_" === e) {
				var n = t(this);
				n instanceof Function && n(this)
			} else i.apply(this, arguments)
		}
	}(window.XMLHttpRequest.prototype.setRequestHeader));
var ngFileUpload = angular.module("ngFileUpload", []);
ngFileUpload.version = "12.2.13", ngFileUpload.service("UploadBase", ["$http", "$q", "$timeout", function(o, e, l) {
		var c = this;
		c.promisesCount = 0, this.isResumeSupported = function() {
			return window.Blob && window.Blob.prototype.slice
		};
		var u = this.isResumeSupported();

		function t(n) {
			n.method = n.method || "POST", n.headers = n.headers || {};
			var i = n._deferred = n._deferred || e.defer(),
				r = i.promise;

			function a(e) {
				i.notify && i.notify(e), r.progressFunc && l(function() {
					r.progressFunc(e)
				})
			}

			function t(e) {
				return null != n._start && u ? {
					loaded: e.loaded + n._start,
					total: n._file && n._file.size || e.total,
					type: e.type,
					config: n,
					lengthComputable: !0,
					target: e.target
				} : e
			}

			function s() {
				o(n).then(function(e) {
					if(u && n._chunkSize && !n._finished && n._file) {
						var t = n._file && n._file.size || 0;
						a({
							loaded: Math.min(n._end, t),
							total: t,
							config: n,
							type: "progress"
						}), c.upload(n, !0)
					} else n._finished && delete n._finished, i.resolve(e)
				}, function(e) {
					i.reject(e)
				}, function(e) {
					i.notify(e)
				})
			}
			return n.disableProgress || (n.headers.__setXHR_ = function() {
				return function(e) {
					e && e.upload && e.upload.addEventListener && (n.__XHR = e, n.xhrFn && n.xhrFn(e), e.upload.addEventListener("progress", function(e) {
						e.config = n, a(t(e))
					}, !1), e.upload.addEventListener("load", function(e) {
						e.lengthComputable && (e.config = n, a(t(e)))
					}, !1))
				}
			}), u ? n._chunkSize && n._end && !n._finished ? (n._start = n._end, n._end += n._chunkSize, s()) : n.resumeSizeUrl ? o.get(n.resumeSizeUrl).then(function(e) {
				n.resumeSizeResponseReader ? n._start = n.resumeSizeResponseReader(e.data) : n._start = parseInt((null == e.data.size ? e.data : e.data.size).toString()), n._chunkSize && (n._end = n._start + n._chunkSize), s()
			}, function(e) {
				throw e
			}) : n.resumeSize ? n.resumeSize().then(function(e) {
				n._start = e, n._chunkSize && (n._end = n._start + n._chunkSize), s()
			}, function(e) {
				throw e
			}) : (n._chunkSize && (n._start = 0, n._end = n._start + n._chunkSize), s()) : s(), r.success = function(t) {
				return r.then(function(e) {
					t(e.data, e.status, e.headers, n)
				}), r
			}, r.error = function(t) {
				return r.then(null, function(e) {
					t(e.data, e.status, e.headers, n)
				}), r
			}, r.progress = function(t) {
				return r.progressFunc = t, r.then(null, null, function(e) {
					t(e)
				}), r
			}, r.abort = r.pause = function() {
				return n.__XHR && l(function() {
					n.__XHR.abort()
				}), r
			}, r.xhr = function(e) {
				var t;
				return n.xhrFn = (t = n.xhrFn, function() {
					t && t.apply(r, arguments), e.apply(r, arguments)
				}), r
			}, c.promisesCount++, r.finally && r.finally instanceof Function && r.finally(function() {
				c.promisesCount--
			}), r
		}

		function n(e) {
			var t = {};
			for(var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
			return t
		}
		this.isUploadInProgress = function() {
			return 0 < c.promisesCount
		}, this.rename = function(e, t) {
			return e.ngfName = t, e
		}, this.jsonBlob = function(e) {
			null == e || angular.isString(e) || (e = JSON.stringify(e));
			var t = new window.Blob([e], {
				type: "application/json"
			});
			return t._ngfBlob = !0, t
		}, this.json = function(e) {
			return angular.toJson(e)
		}, this.isFile = function(e) {
			return null != e && (e instanceof window.Blob || e.flashId && e.name && e.size)
		}, this.upload = function(o, e) {
			function l(e, t, n) {
				if(void 0 !== t)
					if(angular.isDate(t) && (t = t.toISOString()), angular.isString(t)) e.append(n, t);
					else if(c.isFile(t)) {
					var i = function(e, t) {
							if(e._ngfBlob) return e;
							if(o._file = o._file || e, null != o._start && u) {
								o._end && o._end >= e.size && (o._finished = !0, o._end = e.size);
								var n = e.slice(o._start, o._end || e.size);
								return n.name = e.name, n.ngfName = e.ngfName, o._chunkSize && (t.append("_chunkSize", o._chunkSize), t.append("_currentChunkSize", o._end - o._start), t.append("_chunkNumber", Math.floor(o._start / o._chunkSize)), t.append("_totalSize", o._file.size)), n
							}
							return e
						}(t, e),
						r = n.split(",");
					r[1] && (i.ngfName = r[1].replace(/^\s+|\s+$/g, ""), n = r[0]), o._fileKey = o._fileKey || n, e.append(n, i, i.ngfName || i.name)
				} else if(angular.isObject(t)) {
					if(t.$$ngfCircularDetection) throw "ngFileUpload: Circular reference in config.data. Make sure specified data for Upload.upload() has no circular reference: " + n;
					t.$$ngfCircularDetection = !0;
					try {
						for(var a in t)
							if(t.hasOwnProperty(a) && "$$ngfCircularDetection" !== a) {
								var s = null == o.objectKey ? "[i]" : o.objectKey;
								t.length && -1 < parseInt(a) && (s = null == o.arrayKey ? s : o.arrayKey), l(e, t[a], n + s.replace(/[ik]/g, a))
							}
					} finally {
						delete t.$$ngfCircularDetection
					}
				} else e.append(n, t)
			}
			return e || (o = n(o)), o._isDigested || (o._isDigested = !0, o._chunkSize = c.translateScalars(o.resumeChunkSize), o._chunkSize = o._chunkSize ? parseInt(o._chunkSize.toString()) : null, o.headers = o.headers || {}, o.headers["Content-Type"] = void 0, o.transformRequest = o.transformRequest ? angular.isArray(o.transformRequest) ? o.transformRequest : [o.transformRequest] : [], o.transformRequest.push(function(e) {
				var t, n = new window.FormData;
				for(t in e = e || o.fields || {}, o.file && (e.file = o.file), e)
					if(e.hasOwnProperty(t)) {
						var i = e[t];
						o.formDataAppender ? o.formDataAppender(n, t, i) : l(n, i, t)
					}
				return n
			})), t(o)
		}, this.http = function(e) {
			return(e = n(e)).transformRequest = e.transformRequest || function(e) {
				return window.ArrayBuffer && e instanceof window.ArrayBuffer || e instanceof window.Blob ? e : o.defaults.transformRequest[0].apply(this, arguments)
			}, e._chunkSize = c.translateScalars(e.resumeChunkSize), e._chunkSize = e._chunkSize ? parseInt(e._chunkSize.toString()) : null, t(e)
		}, this.translateScalars = function(e) {
			if(angular.isString(e)) {
				if(e.search(/kb/i) === e.length - 2) return parseFloat(1024 * e.substring(0, e.length - 2));
				if(e.search(/mb/i) === e.length - 2) return parseFloat(1048576 * e.substring(0, e.length - 2));
				if(e.search(/gb/i) === e.length - 2) return parseFloat(1073741824 * e.substring(0, e.length - 2));
				if(e.search(/b/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
				if(e.search(/s/i) === e.length - 1) return parseFloat(e.substring(0, e.length - 1));
				if(e.search(/m/i) === e.length - 1) return parseFloat(60 * e.substring(0, e.length - 1));
				if(e.search(/h/i) === e.length - 1) return parseFloat(3600 * e.substring(0, e.length - 1))
			}
			return e
		}, this.urlToBlob = function(a) {
			var s = e.defer();
			return o({
				url: a,
				method: "get",
				responseType: "arraybuffer"
			}).then(function(e) {
				var t = new Uint8Array(e.data),
					n = e.headers("content-type") || "image/WebP",
					i = new window.Blob([t], {
						type: n
					}),
					r = a.match(/.*\/(.+?)(\?.*)?$/);
				1 < r.length && (i.name = r[1]), s.resolve(i)
			}, function(e) {
				s.reject(e)
			}), s.promise
		}, this.setDefaults = function(e) {
			this.defaults = e || {}
		}, this.defaults = {}, this.version = ngFileUpload.version
	}]), ngFileUpload.service("Upload", ["$parse", "$timeout", "$compile", "$q", "UploadExif", function(w, x, e, C, t) {
		var T = t;

		function S(i, r, a, s, o) {
			var l = [T.emptyPromise()];

			function e(n, t) {
				if(0 === n.type.indexOf("image")) {
					if(i.pattern && !T.validatePattern(n, i.pattern)) return;
					i.resizeIf = function(e, t) {
						return T.attrGetter("ngfResizeIf", a, s, {
							$width: e,
							$height: t,
							$file: n
						})
					};
					var e = T.resize(n, i);
					l.push(e), e.then(function(e) {
						r.splice(t, 1, e)
					}, function(e) {
						n.$error = "resize", (n.$errorMessages = n.$errorMessages || {}).resize = !0, n.$errorParam = (e ? (e.message ? e.message : e) + ": " : "") + (n && n.name), o.$ngfValidations.push({
							name: "resize",
							valid: !1
						}), T.applyModelValidation(o, r)
					})
				}
			}
			for(var t = 0; t < r.length; t++) e(r[t], t);
			return C.all(l)
		}
		return T.getAttrWithDefaults = function(e, t) {
			if(null != e[t]) return e[t];
			var n = T.defaults[t];
			return null == n ? n : angular.isString(n) ? n : JSON.stringify(n)
		}, T.attrGetter = function(t, e, n, i) {
			var r = this.getAttrWithDefaults(e, t);
			if(!n) return r;
			try {
				return i ? w(r)(n, i) : w(r)(n)
			} catch(e) {
				if(t.search(/min|max|pattern/i)) return r;
				throw e
			}
		}, T.shouldUpdateOn = function(e, t, n) {
			var i = T.attrGetter("ngfModelOptions", t, n);
			return !i || !i.updateOn || -1 < i.updateOn.split(" ").indexOf(e)
		}, T.emptyPromise = function() {
			var e = C.defer(),
				t = arguments;
			return x(function() {
				e.resolve.apply(e, t)
			}), e.promise
		}, T.rejectPromise = function() {
			var e = C.defer(),
				t = arguments;
			return x(function() {
				e.reject.apply(e, t)
			}), e.promise
		}, T.happyPromise = function(e, t) {
			var n = C.defer();
			return e.then(function(e) {
				n.resolve(e)
			}, function(e) {
				x(function() {
					throw e
				}), n.resolve(t)
			}), n.promise
		}, T.updateModel = function(l, c, u, d, s, f, t) {
			function o(e, t, n, i, r) {
				c.$$ngfPrevValidFiles = e, c.$$ngfPrevInvalidFiles = t;
				var a = e && e.length ? e[0] : null,
					s = t && t.length ? t[0] : null;
				l && (T.applyModelValidation(l, e), l.$setViewValue(r ? a : e)), d && w(d)(u, {
					$files: e,
					$file: a,
					$newFiles: n,
					$duplicateFiles: i,
					$invalidFiles: t,
					$invalidFile: s,
					$event: f
				});
				var o = T.attrGetter("ngfModelInvalid", c);
				o && x(function() {
					w(o).assign(u, r ? s : t)
				}), x(function() {})
			}
			var p, a, _, e, h = [],
				m = [],
				g = [];

			function v() {
				function i() {
					x(function() {
						o(n ? a.concat(g) : g, n ? _.concat(m) : m, s, h, y)
					}, b && b.debounce ? b.debounce.change || b.debounce : 0)
				}
				var r = $ ? p : g;
				(function(t, n, i, r) {
					var e = T.attrGetter("ngfResize", n, i);
					if(!e || !T.isResizeSupported() || !t.length) return T.emptyPromise();
					if(e instanceof Function) {
						var a = C.defer();
						return e(t).then(function(e) {
							S(e, t, n, i, r).then(function(e) {
								a.resolve(e)
							}, function(e) {
								a.reject(e)
							})
						}, function(e) {
							a.reject(e)
						})
					}
					return S(e, t, n, i, r)
				})(r, c, u, l).then(function() {
					$ ? T.validate(p, n ? a.length : 0, l, c, u).then(function(e) {
						g = e.validsFiles, m = e.invalidsFiles, i()
					}) : i()
				}, function() {
					for(var e = 0; e < r.length; e++) {
						var t = r[e];
						if("resize" === t.$error) {
							var n = g.indexOf(t); - 1 < n && (g.splice(n, 1), m.push(t)), i()
						}
					}
				})
			}
			a = c.$$ngfPrevValidFiles || [], _ = c.$$ngfPrevInvalidFiles || [], l && l.$modelValue && (e = l.$modelValue, a = angular.isArray(e) ? e : [e]);
			var n = T.attrGetter("ngfKeep", c, u);
			p = (s || []).slice(0), "distinct" !== n && !0 !== T.attrGetter("ngfKeepDistinct", c, u) || function() {
				function n(e, t) {
					return e.name === t.name && (e.$ngfOrigSize || e.size) === (t.$ngfOrigSize || t.size) && e.type === t.type
				}

				function e(e) {
					var t;
					for(t = 0; t < a.length; t++)
						if(n(e, a[t])) return !0;
					for(t = 0; t < _.length; t++)
						if(n(e, _[t])) return !0;
					return !1
				}
				if(s) {
					p = [], h = [];
					for(var t = 0; t < s.length; t++) e(s[t]) ? h.push(s[t]) : p.push(s[t])
				}
			}();
			var y = !n && !T.attrGetter("ngfMultiple", c, u) && !T.attrGetter("multiple", c);
			if(!n || p.length) {
				T.attrGetter("ngfBeforeModelChange", c, u, {
					$files: s,
					$file: s && s.length ? s[0] : null,
					$newFiles: p,
					$duplicateFiles: h,
					$event: f
				});
				var $ = T.attrGetter("ngfValidateAfterResize", c, u),
					b = T.attrGetter("ngfModelOptions", c, u);
				T.validate(p, n ? a.length : 0, l, c, u).then(function(e) {
					var n, i, r, a;
					t ? o(p, [], s, h, y) : (b && b.allowInvalid || $ ? g = p : (g = e.validFiles, m = e.invalidFiles), T.attrGetter("ngfFixOrientation", c, u) && T.isExifSupported() ? (n = g, i = c, r = u, a = [T.emptyPromise()], angular.forEach(n, function(e, t) {
						0 === e.type.indexOf("image/jpeg") && T.attrGetter("ngfFixOrientation", i, r, {
							$file: e
						}) && a.push(T.happyPromise(T.applyExifRotation(e), e).then(function(e) {
							n.splice(t, 1, e)
						}))
					}), C.all(a)).then(function() {
						v()
					}) : v())
				})
			}
		}, T
	}]), ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile", "Upload", function(e, r, t, g) {
		var v = [];

		function a(r, a, s, o, e, t, n, l) {
			var i = function(e, t) {
				return l.attrGetter(e, s, t)
			};

			function c() {
				return "input" === a[0].tagName.toLowerCase() && s.type && "file" === s.type.toLowerCase()
			}

			function u() {
				return i("ngfChange") || i("ngfSelect")
			}

			function d(e) {
				if(l.shouldUpdateOn("change", s, r)) {
					var t = e.__files_ || e.target && e.target.files,
						n = [];
					if(!t) return;
					for(var i = 0; i < t.length; i++) n.push(t[i]);
					l.updateModel(o, s, r, u(), n.length ? n : null, e)
				}
			}
			l.registerModelChangeValidator(o, s, r);
			var f = [];
			i("ngfMultiple") && f.push(r.$watch(i("ngfMultiple"), function() {
				h.attr("multiple", i("ngfMultiple", r))
			})), i("ngfCapture") && f.push(r.$watch(i("ngfCapture"), function() {
				h.attr("capture", i("ngfCapture", r))
			})), i("ngfAccept") && f.push(r.$watch(i("ngfAccept"), function() {
				h.attr("accept", i("ngfAccept", r))
			})), f.push(s.$observe("accept", function() {
				h.attr("accept", i("accept"))
			}));
			var p = 0,
				_ = 0;
			var h = a;

			function m(e) {
				l.shouldUpdateOn("click", s, r) && h.val() && (h.val(null), l.updateModel(o, s, r, u(), null, e, !0))
			}
			c() || (h = function() {
				if(c()) return a;
				var e = angular.element('<input type="file">'),
					t = angular.element("<label>upload</label>");
				return t.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"),
					function(t, n) {
						function e(e) {
							t.attr("id", "ngf-" + e), n.attr("id", "ngf-label-" + e)
						}
						for(var i = 0; i < a[0].attributes.length; i++) {
							var r = a[0].attributes[i];
							"type" !== r.name && "class" !== r.name && "style" !== r.name && ("id" === r.name ? (e(r.value), f.push(s.$observe("id", e))) : t.attr(r.name, r.value || "required" !== r.name && "multiple" !== r.name ? r.value : r.name))
						}
					}(e, t), v.push({
						el: a,
						ref: t
					}), document.body.appendChild(t.append(e)[0]), e
			}()), h.bind("change", d), c() ? a.bind("click", m) : a.bind("click touchstart touchend", function(e) {
				if(a.attr("disabled")) return !1;
				if(!i("ngfSelectDisabled", r)) {
					var t = function(e) {
						var t = e.changedTouches || e.originalEvent && e.originalEvent.changedTouches;
						if(t) {
							if("touchstart" === e.type) return _ = t[0].clientX, p = t[0].clientY, !0;
							if("touchend" === e.type) {
								var n = t[0].clientX,
									i = t[0].clientY;
								if(20 < Math.abs(n - _) || 20 < Math.abs(i - p)) return e.stopPropagation(), e.preventDefault(), !1
							}
							return !0
						}
					}(e);
					if(null != t) return t;
					m(e);
					try {
						c() || document.body.contains(h[0]) || (v.push({
							el: a,
							ref: h.parent()
						}), document.body.appendChild(h.parent()[0]), h.bind("change", d))
					} catch(e) {}
					return function(e) {
						var t = e.match(/Android[^\d]*(\d+)\.(\d+)/);
						if(t && 2 < t.length) {
							var n = g.defaults.androidFixMinorVersion || 4;
							return parseInt(t[1]) < 4 || parseInt(t[1]) === n && parseInt(t[2]) < n
						}
						return -1 === e.indexOf("Chrome") && /.*Windows.*Safari.*/.test(e)
					}(navigator.userAgent) ? setTimeout(function() {
						h[0].click()
					}, 0) : h[0].click(), !1
				}
			}), -1 !== navigator.appVersion.indexOf("MSIE 10") && h.bind("click", function e(t) {
				if(h && !h.attr("__ngf_ie10_Fix_")) {
					if(!h[0].parentNode) return void(h = null);
					t.preventDefault(), t.stopPropagation(), h.unbind("click");
					var n = h.clone();
					return h.replaceWith(n), (h = n).attr("__ngf_ie10_Fix_", "true"), h.bind("change", d), h.bind("click", e), h[0].click(), !1
				}
				h.removeAttr("__ngf_ie10_Fix_")
			}), o && o.$formatters.push(function(e) {
				return null != e && 0 !== e.length || h.val() && h.val(null), e
			}), r.$on("$destroy", function() {
				c() || h.parent().remove(), angular.forEach(f, function(e) {
					e()
				})
			}), t(function() {
				for(var e = 0; e < v.length; e++) {
					var t = v[e];
					document.body.contains(t.el[0]) || (v.splice(e, 1), t.ref.remove())
				}
			}), window.FileAPI && window.FileAPI.ngfFixIE && window.FileAPI.ngfFixIE(a, h, d)
		}
		return {
			restrict: "AEC",
			require: "?ngModel",
			link: function(e, t, n, i) {
				a(e, t, n, i, 0, r, 0, g)
			}
		}
	}]),
	function() {
		function s(r, e, a, s, o, l, c, u) {
			function d(t) {
				var n = r.attrGetter("ngfNoObjectUrl", o, a);
				r.dataUrl(t, n).finally(function() {
					e(function() {
						var e = (n ? t.$ngfDataUrl : t.$ngfBlobUrl) || t.$ngfDataUrl;
						u ? s.css("background-image", "url('" + (e || "") + "')") : s.attr("src", e), e ? s.removeClass("ng-hide") : s.addClass("ng-hide")
					})
				})
			}
			e(function() {
				var e = a.$watch(o[l], function(n) {
					var e, t = c;
					if("ngfThumbnail" === l && (t || (t = {
							width: s[0].naturalWidth || s[0].clientWidth,
							height: s[0].naturalHeight || s[0].clientHeight
						}), 0 === t.width && window.getComputedStyle)) {
						var i = getComputedStyle(s[0]);
						i.width && -1 < i.width.indexOf("px") && i.height && -1 < i.height.indexOf("px") && (t = {
							width: parseInt(i.width.slice(0, -2)),
							height: parseInt(i.height.slice(0, -2))
						})
					}
					if(angular.isString(n)) return s.removeClass("ng-hide"), u ? s.css("background-image", "url('" + n + "')") : s.attr("src", n);
					!n || !n.type || 0 !== n.type.search("img" === (e = s[0]).tagName.toLowerCase() ? "image" : "audio" === e.tagName.toLowerCase() ? "audio" : "video" === e.tagName.toLowerCase() ? "video" : /./) || u && 0 !== n.type.indexOf("image") ? s.addClass("ng-hide") : t && r.isResizeSupported() ? (t.resizeIf = function(e, t) {
						return r.attrGetter("ngfResizeIf", o, a, {
							$width: e,
							$height: t,
							$file: n
						})
					}, r.resize(n, t).then(function(e) {
						d(e)
					}, function(e) {
						throw e
					})) : d(n)
				});
				a.$on("$destroy", function() {
					e()
				})
			})
		}
		ngFileUpload.service("UploadDataUrl", ["UploadBase", "$timeout", "$q", function(e, n, o) {
			var l = e;
			return l.base64DataUrl = function(n) {
				if(angular.isArray(n)) {
					var i = o.defer(),
						r = 0;
					return angular.forEach(n, function(e) {
						l.dataUrl(e, !0).finally(function() {
							if(++r === n.length) {
								var t = [];
								angular.forEach(n, function(e) {
									t.push(e.$ngfDataUrl)
								}), i.resolve(t, n)
							}
						})
					}), i.promise
				}
				return l.dataUrl(n, !0)
			}, l.dataUrl = function(a, t) {
				if(!a) return l.emptyPromise(a, a);
				if(t && null != a.$ngfDataUrl || !t && null != a.$ngfBlobUrl) return l.emptyPromise(t ? a.$ngfDataUrl : a.$ngfBlobUrl, a);
				var e = t ? a.$$ngfDataUrlPromise : a.$$ngfBlobUrlPromise;
				if(e) return e;
				var s = o.defer();
				return n(function() {
					if(window.FileReader && a && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || a.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || a.size < 4e6)) {
						var i = window.URL || window.webkitURL;
						if(i && i.createObjectURL && !t) {
							var r;
							try {
								r = i.createObjectURL(a)
							} catch(e) {
								return void n(function() {
									a.$ngfBlobUrl = "", s.reject()
								})
							}
							n(function() {
								if(a.$ngfBlobUrl = r) {
									s.resolve(r, a), l.blobUrls = l.blobUrls || [], l.blobUrlsTotalSize = l.blobUrlsTotalSize || 0, l.blobUrls.push({
										url: r,
										size: a.size
									}), l.blobUrlsTotalSize += a.size || 0;
									for(var e = l.defaults.blobUrlsMaxMemory || 268435456, t = l.defaults.blobUrlsMaxQueueSize || 200;
										(l.blobUrlsTotalSize > e || l.blobUrls.length > t) && 1 < l.blobUrls.length;) {
										var n = l.blobUrls.splice(0, 1)[0];
										i.revokeObjectURL(n.url), l.blobUrlsTotalSize -= n.size
									}
								}
							})
						} else {
							var e = new FileReader;
							e.onload = function(e) {
								n(function() {
									a.$ngfDataUrl = e.target.result, s.resolve(e.target.result, a), n(function() {
										delete a.$ngfDataUrl
									}, 1e3)
								})
							}, e.onerror = function() {
								n(function() {
									a.$ngfDataUrl = "", s.reject()
								})
							}, e.readAsDataURL(a)
						}
					} else n(function() {
						a[t ? "$ngfDataUrl" : "$ngfBlobUrl"] = "", s.reject()
					})
				}), (e = t ? a.$$ngfDataUrlPromise = s.promise : a.$$ngfBlobUrlPromise = s.promise).finally(function() {
					delete a[t ? "$$ngfDataUrlPromise" : "$$ngfBlobUrlPromise"]
				}), e
			}, l
		}]), ngFileUpload.directive("ngfSrc", ["Upload", "$timeout", function(i, r) {
			return {
				restrict: "AE",
				link: function(e, t, n) {
					s(i, r, e, t, n, "ngfSrc", i.attrGetter("ngfResize", n, e), !1)
				}
			}
		}]), ngFileUpload.directive("ngfBackground", ["Upload", "$timeout", function(i, r) {
			return {
				restrict: "AE",
				link: function(e, t, n) {
					s(i, r, e, t, n, "ngfBackground", i.attrGetter("ngfResize", n, e), !0)
				}
			}
		}]), ngFileUpload.directive("ngfThumbnail", ["Upload", "$timeout", function(r, a) {
			return {
				restrict: "AE",
				link: function(e, t, n) {
					var i = r.attrGetter("ngfSize", n, e);
					s(r, a, e, t, n, "ngfThumbnail", i, r.attrGetter("ngfAsBackground", n, e))
				}
			}
		}]), ngFileUpload.config(["$compileProvider", function(e) {
			e.imgSrcSanitizationWhitelist && e.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/), e.aHrefSanitizationWhitelist && e.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|webcal|local|file|data|blob):/)
		}]), ngFileUpload.filter("ngfDataUrl", ["UploadDataUrl", "$sce", function(r, a) {
			return function(e, t, n) {
				if(angular.isString(e)) return a.trustAsResourceUrl(e);
				var i = e && ((t ? e.$ngfDataUrl : e.$ngfBlobUrl) || e.$ngfDataUrl);
				return e && !i ? (!e.$ngfDataUrlFilterInProgress && angular.isObject(e) && (e.$ngfDataUrlFilterInProgress = !0, r.dataUrl(e, t)), "") : (e && delete e.$ngfDataUrlFilterInProgress, (e && i ? n ? a.trustAsResourceUrl(i) : i : e) || "")
			}
		}])
	}(), ngFileUpload.service("UploadValidate", ["UploadDataUrl", "$q", "$timeout", function(e, g, o) {
		var v = e;
		return v.validatePattern = function(e, t) {
			if(!t) return !0;
			var n = function e(t) {
					var n = "",
						i = [];
					if(2 < t.length && "/" === t[0] && "/" === t[t.length - 1]) n = t.substring(1, t.length - 1);
					else {
						var r = t.split(",");
						if(1 < r.length)
							for(var a = 0; a < r.length; a++) {
								var s = e(r[a]);
								s.regexp ? (n += "(" + s.regexp + ")", a < r.length - 1 && (n += "|")) : i = i.concat(s.excludes)
							} else 0 === t.indexOf("!") ? i.push("^((?!" + e(t.substring(1)).regexp + ").)*$") : (0 === t.indexOf(".") && (t = "*" + t), n = (n = "^" + t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$").replace(/\\\*/g, ".*").replace(/\\\?/g, "."))
					}
					return {
						regexp: n,
						excludes: i
					}
				}(t),
				i = !0;
			if(n.regexp && n.regexp.length) {
				var r = new RegExp(n.regexp, "i");
				i = null != e.type && r.test(e.type) || null != e.name && r.test(e.name)
			}
			for(var a = n.excludes.length; a--;) {
				var s = new RegExp(n.excludes[a], "i");
				i = i && (null == e.type || s.test(e.type)) && (null == e.name || s.test(e.name))
			}
			return i
		}, v.ratioToFloat = function(e) {
			var t = e.toString(),
				n = t.search(/[x:]/i);
			return t = -1 < n ? parseFloat(t.substring(0, n)) / parseFloat(t.substring(n + 1)) : parseFloat(t)
		}, v.registerModelChangeValidator = function(n, i, r) {
			n && n.$formatters.push(function(e) {
				if(n.$dirty) {
					var t = e;
					e && !angular.isArray(e) && (t = [e]), v.validate(t, 0, n, i, r).then(function() {
						v.applyModelValidation(n, t)
					})
				}
				return e
			})
		}, v.applyModelValidation = function(t, e) {
			var n;
			n = t, null == e || n.$dirty || (n.$setDirty ? n.$setDirty() : n.$dirty = !0), angular.forEach(t.$ngfValidations, function(e) {
				t.$setValidity(e.name, e.valid)
			})
		}, v.getValidationAttr = function(e, t, n, i, r) {
			var a = "ngf" + n[0].toUpperCase() + n.substr(1),
				s = v.attrGetter(a, e, t, {
					$file: r
				});
			if(null == s && (s = v.attrGetter("ngfValidate", e, t, {
					$file: r
				}))) {
				var o = (i || n).split(".");
				s = s[o[0]], 1 < o.length && (s = s && s[o[1]])
			}
			return s
		}, v.validate = function(c, i, u, d, f) {
			(u = u || {}).$ngfValidations = u.$ngfValidations || [], angular.forEach(u.$ngfValidations, function(e) {
				e.valid = !0
			});
			var p = function(e, t) {
					return v.attrGetter(e, d, f, t)
				},
				_ = (v.attrGetter("ngfIgnoreInvalid", d, f) || "").split(" "),
				h = v.attrGetter("ngfRunAllValidations", d, f);
			if(null == c || 0 === c.length) return v.emptyPromise({
				validFiles: c,
				invalidFiles: []
			});
			c = void 0 === c.length ? [c] : c.slice(0);
			var m = [];

			function t(e, t, n) {
				if(c) {
					for(var i = c.length, r = null; i--;) {
						var a = c[i];
						if(a) {
							var s = v.getValidationAttr(d, f, e, t, a);
							null != s && (n(a, s, i) || (-1 === _.indexOf(e) ? (a.$error = e, (a.$errorMessages = a.$errorMessages || {})[e] = !0, a.$errorParam = s, -1 === m.indexOf(a) && m.push(a), h || c.splice(i, 1), r = !1) : c.splice(i, 1)))
						}
					}
					null !== r && u.$ngfValidations.push({
						name: e,
						valid: r
					})
				}
			}
			t("pattern", null, v.validatePattern), t("minSize", "size.min", function(e, t) {
				return e.size + .1 >= v.translateScalars(t)
			}), t("maxSize", "size.max", function(e, t) {
				return e.size - .1 <= v.translateScalars(t)
			});
			var n = 0;
			if(t("maxTotalSize", null, function(e, t) {
					return !((n += e.size) > v.translateScalars(t)) || (c.splice(0, c.length), !1)
				}), t("validateFn", null, function(e, t) {
					return !0 === t || null === t || "" === t
				}), !c.length) return v.emptyPromise({
				validFiles: [],
				invalidFiles: m
			});

			function e(s, e, i, n, o) {
				function r(i, r, a) {
					function t(e) {
						if(e())
							if(-1 === _.indexOf(s)) {
								if(r.$error = s, (r.$errorMessages = r.$errorMessages || {})[s] = !0, r.$errorParam = a, -1 === m.indexOf(r) && m.push(r), !h) {
									var t = c.indexOf(r); - 1 < t && c.splice(t, 1)
								}
								i.resolve(!1)
							} else {
								var n = c.indexOf(r); - 1 < n && c.splice(n, 1), i.resolve(!0)
							} else i.resolve(!0)
					}
					null != a ? n(r, a).then(function(e) {
						t(function() {
							return !o(e, a)
						})
					}, function() {
						t(function() {
							return p("ngfValidateForce", {
								$file: r
							})
						})
					}) : i.resolve(!0)
				}
				var a = [v.emptyPromise(!0)];
				c && (c = void 0 === c.length ? [c] : c, angular.forEach(c, function(t) {
					var n = g.defer();
					a.push(n.promise), !i || null != t.type && 0 === t.type.search(i) ? "dimensions" === s && null != v.attrGetter("ngfDimensions", d) ? v.imageDimensions(t).then(function(e) {
						r(n, t, p("ngfDimensions", {
							$file: t,
							$width: e.width,
							$height: e.height
						}))
					}, function() {
						n.resolve(!1)
					}) : "duration" === s && null != v.attrGetter("ngfDuration", d) ? v.mediaDuration(t).then(function(e) {
						r(n, t, p("ngfDuration", {
							$file: t,
							$duration: e
						}))
					}, function() {
						n.resolve(!1)
					}) : r(n, t, v.getValidationAttr(d, f, s, e, t)) : n.resolve(!0)
				}));
				var l = g.defer();
				return g.all(a).then(function(e) {
					for(var t = !0, n = 0; n < e.length; n++)
						if(!e[n]) {
							t = !1;
							break
						}
					u.$ngfValidations.push({
						name: s,
						valid: t
					}), l.resolve(t)
				}), l.promise
			}
			var r = g.defer(),
				a = [];
			return a.push(e("maxHeight", "height.max", /image/, this.imageDimensions, function(e, t) {
				return e.height <= t
			})), a.push(e("minHeight", "height.min", /image/, this.imageDimensions, function(e, t) {
				return e.height >= t
			})), a.push(e("maxWidth", "width.max", /image/, this.imageDimensions, function(e, t) {
				return e.width <= t
			})), a.push(e("minWidth", "width.min", /image/, this.imageDimensions, function(e, t) {
				return e.width >= t
			})), a.push(e("dimensions", null, /image/, function(e, t) {
				return v.emptyPromise(t)
			}, function(e) {
				return e
			})), a.push(e("ratio", null, /image/, this.imageDimensions, function(e, t) {
				for(var n = t.toString().split(","), i = !1, r = 0; r < n.length; r++) Math.abs(e.width / e.height - v.ratioToFloat(n[r])) < .01 && (i = !0);
				return i
			})), a.push(e("maxRatio", "ratio.max", /image/, this.imageDimensions, function(e, t) {
				return e.width / e.height - v.ratioToFloat(t) < 1e-4
			})), a.push(e("minRatio", "ratio.min", /image/, this.imageDimensions, function(e, t) {
				return -1e-4 < e.width / e.height - v.ratioToFloat(t)
			})), a.push(e("maxDuration", "duration.max", /audio|video/, this.mediaDuration, function(e, t) {
				return e <= v.translateScalars(t)
			})), a.push(e("minDuration", "duration.min", /audio|video/, this.mediaDuration, function(e, t) {
				return e >= v.translateScalars(t)
			})), a.push(e("duration", null, /audio|video/, function(e, t) {
				return v.emptyPromise(t)
			}, function(e) {
				return e
			})), a.push(e("validateAsyncFn", null, null, function(e, t) {
				return t
			}, function(e) {
				return !0 === e || null === e || "" === e
			})), g.all(a).then(function() {
				if(h)
					for(var e = 0; e < c.length; e++) {
						c[e].$error && c.splice(e--, 1)
					}
				h = !1, t("maxFiles", null, function(e, t, n) {
					return i + n < t
				}), r.resolve({
					validFiles: c,
					invalidFiles: m
				})
			}), r.promise
		}, v.imageDimensions = function(a) {
			if(a.$ngfWidth && a.$ngfHeight) {
				var e = g.defer();
				return o(function() {
					e.resolve({
						width: a.$ngfWidth,
						height: a.$ngfHeight
					})
				}), e.promise
			}
			if(a.$ngfDimensionPromise) return a.$ngfDimensionPromise;
			var s = g.defer();
			return o(function() {
				0 === a.type.indexOf("image") ? v.dataUrl(a).then(function(e) {
					var n = angular.element("<img>").attr("src", e).css("visibility", "hidden").css("position", "fixed").css("max-width", "none !important").css("max-height", "none !important");

					function t() {
						var e = n[0].naturalWidth || n[0].clientWidth,
							t = n[0].naturalHeight || n[0].clientHeight;
						n.remove(), a.$ngfWidth = e, a.$ngfHeight = t, s.resolve({
							width: e,
							height: t
						})
					}

					function i() {
						n.remove(), s.reject("load error")
					}
					n.on("load", t), n.on("error", i);
					var r = 0;
					! function e() {
						o(function() {
							n[0].parentNode && (n[0].clientWidth ? t() : 10 < r++ ? i() : e())
						}, 1e3)
					}(), angular.element(document.getElementsByTagName("body")[0]).append(n)
				}, function() {
					s.reject("load error")
				}) : s.reject("not image")
			}), a.$ngfDimensionPromise = s.promise, a.$ngfDimensionPromise.finally(function() {
				delete a.$ngfDimensionPromise
			}), a.$ngfDimensionPromise
		}, v.mediaDuration = function(a) {
			if(a.$ngfDuration) {
				var e = g.defer();
				return o(function() {
					e.resolve(a.$ngfDuration)
				}), e.promise
			}
			if(a.$ngfDurationPromise) return a.$ngfDurationPromise;
			var s = g.defer();
			return o(function() {
				0 === a.type.indexOf("audio") || 0 === a.type.indexOf("video") ? v.dataUrl(a).then(function(e) {
					var t = angular.element(0 === a.type.indexOf("audio") ? "<audio>" : "<video>").attr("src", e).css("visibility", "none").css("position", "fixed");

					function n() {
						var e = t[0].duration;
						a.$ngfDuration = e, t.remove(), s.resolve(e)
					}

					function i() {
						t.remove(), s.reject("load error")
					}
					t.on("loadedmetadata", n), t.on("error", i);
					var r = 0;
					! function e() {
						o(function() {
							t[0].parentNode && (t[0].duration ? n() : 10 < r ? i() : e())
						}, 1e3)
					}(), angular.element(document.body).append(t)
				}, function() {
					s.reject("load error")
				}) : s.reject("not media")
			}), a.$ngfDurationPromise = s.promise, a.$ngfDurationPromise.finally(function() {
				delete a.$ngfDurationPromise
			}), a.$ngfDurationPromise
		}, v
	}]), ngFileUpload.service("UploadResize", ["UploadValidate", "$q", function(e, t) {
		var y = e,
			s = function(e, c, u, d, f, p, _, h) {
				var m = t.defer(),
					g = document.createElement("canvas"),
					v = document.createElement("img");
				return v.setAttribute("style", "visibility:hidden;position:fixed;z-index:-100000"), document.body.appendChild(v), v.onload = function() {
					var e, t, n, i, r, a = v.width,
						s = v.height;
					if(v.parentNode.removeChild(v), null == h || !1 !== h(a, s)) try {
						if(p) {
							var o = y.ratioToFloat(p);
							a / s < o ? u = (c = a) / o : c = (u = s) * o
						}
						c || (c = a), u || (u = s);
						var l = (e = a, t = s, n = c, i = u, r = _ ? Math.max(n / e, i / t) : Math.min(n / e, i / t), {
							width: e * r,
							height: t * r,
							marginX: e * r - n,
							marginY: t * r - i
						});
						g.width = Math.min(l.width, c), g.height = Math.min(l.height, u), g.getContext("2d").drawImage(v, Math.min(0, -l.marginX / 2), Math.min(0, -l.marginY / 2), l.width, l.height), m.resolve(g.toDataURL(f || "image/WebP", d || .934))
					} catch(e) {
						m.reject(e)
					} else m.reject("resizeIf")
				}, v.onerror = function() {
					v.parentNode.removeChild(v), m.reject()
				}, v.src = e, m.promise
			};
		return y.dataUrltoBlob = function(e, t, n) {
			for(var i = e.split(","), r = i[0].match(/:(.*?);/)[1], a = atob(i[1]), s = a.length, o = new Uint8Array(s); s--;) o[s] = a.charCodeAt(s);
			var l = new window.Blob([o], {
				type: r
			});
			return l.name = t, l.$ngfOrigSize = n, l
		}, y.isResizeSupported = function() {
			var e = document.createElement("canvas");
			return window.atob && e.getContext && e.getContext("2d") && window.Blob
		}, y.isResizeSupported() && Object.defineProperty(window.Blob.prototype, "name", {
			get: function() {
				return this.$ngfName
			},
			set: function(e) {
				this.$ngfName = e
			},
			configurable: !0
		}), y.resize = function(i, r) {
			if(0 !== i.type.indexOf("image")) return y.emptyPromise(i);
			var a = t.defer();
			return y.dataUrl(i, !0).then(function(n) {
				s(n, r.width, r.height, r.quality, r.type || i.type, r.ratio, r.centerCrop, r.resizeIf).then(function(e) {
					if("image/jpeg" === i.type && !1 !== r.restoreExif) try {
						e = y.restoreExif(n, e)
					} catch(e) {
						setTimeout(function() {
							throw e
						}, 1)
					}
					try {
						var t = y.dataUrltoBlob(e, i.name, i.size);
						a.resolve(t)
					} catch(e) {
						a.reject(e)
					}
				}, function(e) {
					"resizeIf" === e && a.resolve(i), a.reject(e)
				})
			}, function(e) {
				a.reject(e)
			}), a.promise
		}, y
	}]),
	function() {
		function p() {
			var e = document.createElement("div");
			return "draggable" in e && "ondrop" in e && !/Edge\/12./i.test(navigator.userAgent)
		}
		ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$window", "Upload", "$http", "$q", function(r, a, s, o, e, l) {
			return {
				restrict: "AEC",
				require: "?ngModel",
				link: function(e, t, n, i) {
					! function(g, n, v, i, e, r, y, $, t, b) {
						var a = p(),
							w = function(e, t, n) {
								return $.attrGetter(e, v, t, n)
							};
						w("dropAvailable") && r(function() {
							g[w("dropAvailable")] ? g[w("dropAvailable")].value = a : g[w("dropAvailable")] = a
						});
						if(!a) return !0 === w("ngfHideOnDropNotAvailable", g) && n.css("display", "none");

						function s() {
							return n.attr("disabled") || w("ngfDropDisabled", g)
						}
						null == w("ngfSelect") && $.registerModelChangeValidator(i, v, g);
						var o, l = null,
							c = e(w("ngfStopPropagation")),
							u = 1;
						n[0].addEventListener("dragover", function(t) {
							if(!s() && $.shouldUpdateOn("drop", v, g)) {
								if(t.preventDefault(), c(g) && t.stopPropagation(), -1 < navigator.userAgent.indexOf("Chrome")) {
									var e = t.dataTransfer.effectAllowed;
									t.dataTransfer.dropEffect = "move" === e || "linkMove" === e ? "move" : "copy"
								}
								r.cancel(l), o || (o = "C", function(e, t, n, i) {
									var r = w("ngfDragOverClass", e, {
											$event: n
										}),
										a = "dragover";
									if(angular.isString(r)) a = r;
									else if(r && (r.delay && (u = r.delay), r.accept || r.reject)) {
										var s = n.dataTransfer.items;
										if(null != s && s.length)
											for(var o = r.pattern || w("ngfPattern", e, {
													$event: n
												}), l = s.length; l--;) {
												if(!$.validatePattern(s[l], o)) {
													a = r.reject;
													break
												}
												a = r.accept
											} else a = r.accept
									}
									i(a)
								}(g, 0, t, function(e) {
									o = e, n.addClass(o), w("ngfDrag", g, {
										$isDragging: !0,
										$class: o,
										$event: t
									})
								}))
							}
						}, !1), n[0].addEventListener("dragenter", function(e) {
							!s() && $.shouldUpdateOn("drop", v, g) && (e.preventDefault(), c(g) && e.stopPropagation())
						}, !1), n[0].addEventListener("dragleave", function(e) {
							!s() && $.shouldUpdateOn("drop", v, g) && (e.preventDefault(), c(g) && e.stopPropagation(), l = r(function() {
								o && n.removeClass(o), o = null, w("ngfDrag", g, {
									$isDragging: !1,
									$event: e
								})
							}, u || 100))
						}, !1), n[0].addEventListener("drop", function(e) {
							!s() && $.shouldUpdateOn("drop", v, g) && (e.preventDefault(), c(g) && e.stopPropagation(), o && n.removeClass(o), o = null, d(e.dataTransfer, e, "dropUrl"))
						}, !1), n[0].addEventListener("paste", function(e) {
							-1 < navigator.userAgent.toLowerCase().indexOf("firefox") && w("ngfEnableFirefoxPaste", g) && e.preventDefault(), !s() && $.shouldUpdateOn("paste", v, g) && d(e.clipboardData || e.originalEvent.clipboardData, e, "pasteUrl")
						}, !1), -1 < navigator.userAgent.toLowerCase().indexOf("firefox") && w("ngfEnableFirefoxPaste", g) && (n.attr("contenteditable", !0), n.on("keypress", function(e) {
							e.metaKey || e.ctrlKey || e.preventDefault()
						}));

						function d(e, t, n) {
							if(e) {
								var i;
								try {
									i = e && e.getData && e.getData("text/html")
								} catch(e) {}(function(e, t, n, i) {
									var l = $.getValidationAttr(v, g, "maxFiles");
									null == l && (l = Number.MAX_VALUE);
									var c = $.getValidationAttr(v, g, "maxTotalSize");
									null == c && (c = Number.MAX_VALUE);
									var u = w("ngfIncludeDir", g),
										d = [],
										f = 0;

									function p(t, n) {
										var i = b.defer();
										if(null != t)
											if(t.isDirectory) {
												var r = [$.emptyPromise()];
												if(u) {
													var e = {
														type: "directory"
													};
													e.name = e.path = (n || "") + t.name, d.push(e)
												}
												var a = t.createReader(),
													s = [],
													o = function() {
														a.readEntries(function(e) {
															try {
																e.length ? (s = s.concat(Array.prototype.slice.call(e || [], 0)), o()) : (angular.forEach(s.slice(0), function(e) {
																	d.length <= l && f <= c && r.push(p(e, (n || "") + t.name + "/"))
																}), b.all(r).then(function() {
																	i.resolve()
																}, function(e) {
																	i.reject(e)
																}))
															} catch(e) {
																i.reject(e)
															}
														}, function(e) {
															i.reject(e)
														})
													};
												o()
											} else t.file(function(e) {
												try {
													e.path = (n || "") + e.name, u && (e = $.rename(e, e.path)), d.push(e), f += e.size, i.resolve()
												} catch(e) {
													i.reject(e)
												}
											}, function(e) {
												i.reject(e)
											});
										return i.promise
									}
									var r = [$.emptyPromise()];
									if(e && 0 < e.length && "file:" !== y.location.protocol)
										for(var a = 0; a < e.length; a++) {
											if(e[a].webkitGetAsEntry && e[a].webkitGetAsEntry() && e[a].webkitGetAsEntry().isDirectory) {
												var s = e[a].webkitGetAsEntry();
												if(s.isDirectory && !n) continue;
												null != s && r.push(p(s))
											} else {
												var o = e[a].getAsFile();
												null != o && (d.push(o), f += o.size)
											}
											if(d.length > l || c < f || !i && 0 < d.length) break
										} else if(null != t)
											for(var _ = 0; _ < t.length; _++) {
												var h = t.item(_);
												if((h.type || 0 < h.size) && (d.push(h), f += h.size), d.length > l || c < f || !i && 0 < d.length) break
											}
										var m = b.defer();
									return b.all(r).then(function() {
										if(i || u || !d.length) m.resolve(d);
										else {
											for(var e = 0; d[e] && "directory" === d[e].type;) e++;
											m.resolve([d[e]])
										}
									}, function(e) {
										m.reject(e)
									}), m.promise
								})(e.items, e.files, !1 !== w("ngfAllowDir", g), w("multiple") || w("ngfMultiple", g)).then(function(e) {
									e.length ? f(e, t) : function(e, t) {
										if(!$.shouldUpdateOn(e, v, g) || "string" != typeof t) return $.rejectPromise([]);
										var i = [];
										t.replace(/<(img src|img [^>]* src) *=\"([^\"]*)\"/gi, function(e, t, n) {
											i.push(n)
										});
										var n = [],
											r = [];
										if(i.length) {
											angular.forEach(i, function(e) {
												n.push($.urlToBlob(e).then(function(e) {
													r.push(e)
												}))
											});
											var a = b.defer();
											return b.all(n).then(function() {
												a.resolve(r)
											}, function(e) {
												a.reject(e)
											}), a.promise
										}
										return $.emptyPromise()
									}(n, i).then(function(e) {
										f(e, t)
									})
								})
							}
						}

						function f(e, t) {
							$.updateModel(i, v, g, w("ngfChange") || w("ngfDrop"), e, t)
						}
					}(e, t, n, i, r, a, s, o, 0, l)
				}
			}
		}]), ngFileUpload.directive("ngfNoFileDrop", function() {
			return function(e, t) {
				p() && t.css("display", "none")
			}
		}), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout", "Upload", function(r, a, s) {
			return function(e, t, n) {
				if(p()) {
					var i = r(s.attrGetter("ngfDropAvailable", n));
					a(function() {
						i(e), i.assign && i.assign(e, !0)
					})
				}
			}
		}])
	}(), ngFileUpload.service("UploadExif", ["UploadResize", "$q", function(e, i) {
		var l = e;
		return l.isExifSupported = function() {
			return window.FileReader && (new FileReader).readAsArrayBuffer && l.isResizeSupported()
		}, l.readOrientation = function(e) {
			var u = i.defer(),
				t = new FileReader,
				n = e.slice ? e.slice(0, 65536) : e;
			return t.readAsArrayBuffer(n), t.onerror = function(e) {
				return u.reject(e)
			}, t.onload = function(e) {
				var t = {
						orientation: 1
					},
					n = new DataView(this.result);
				if(65496 !== n.getUint16(0, !1)) return u.resolve(t);
				for(var i = n.byteLength, r = 2; r < i;) {
					var a = n.getUint16(r, !1);
					if(r += 2, 65505 === a) {
						if(1165519206 !== n.getUint32(r += 2, !1)) return u.resolve(t);
						var s = 18761 === n.getUint16(r += 6, !1);
						r += n.getUint32(r + 4, s);
						var o = n.getUint16(r, s);
						r += 2;
						for(var l = 0; l < o; l++)
							if(274 === n.getUint16(r + 12 * l, s)) {
								var c = n.getUint16(r + 12 * l + 8, s);
								return 2 <= c && c <= 8 && (n.setUint16(r + 12 * l + 8, 1, s), t.fixedArrayBuffer = e.target.result), t.orientation = c, u.resolve(t)
							}
					} else {
						if(65280 != (65280 & a)) break;
						r += n.getUint16(r, !1)
					}
				}
				return u.resolve(t)
			}, u.promise
		}, l.applyExifRotation = function(s) {
			if(0 !== s.type.indexOf("image/jpeg")) return l.emptyPromise(s);
			var o = i.defer();
			return l.readOrientation(s).then(function(a) {
				if(a.orientation < 2 || 8 < a.orientation) return o.resolve(s);
				l.dataUrl(s, !0).then(function(e) {
					var i = document.createElement("canvas"),
						r = document.createElement("img");
					r.onload = function() {
						try {
							i.width = 4 < a.orientation ? r.height : r.width, i.height = 4 < a.orientation ? r.width : r.height;
							var e = i.getContext("2d");
							! function(e, t, n, i) {
								switch(t) {
									case 2:
										return e.transform(-1, 0, 0, 1, n, 0);
									case 3:
										return e.transform(-1, 0, 0, -1, n, i);
									case 4:
										return e.transform(1, 0, 0, -1, 0, i);
									case 5:
										return e.transform(0, 1, 1, 0, 0, 0);
									case 6:
										return e.transform(0, 1, -1, 0, i, 0);
									case 7:
										return e.transform(0, -1, -1, 0, i, n);
									case 8:
										e.transform(0, -1, 1, 0, 0, n)
								}
							}(e, a.orientation, r.width, r.height), e.drawImage(r, 0, 0);
							var t = i.toDataURL(s.type || "image/WebP", .934);
							t = l.restoreExif(function(e) {
								for(var t = "", n = new Uint8Array(e), i = n.byteLength, r = 0; r < i; r++) t += String.fromCharCode(n[r]);
								return window.btoa(t)
							}(a.fixedArrayBuffer), t);
							var n = l.dataUrltoBlob(t, s.name);
							o.resolve(n)
						} catch(e) {
							return o.reject(e)
						}
					}, r.onerror = function() {
						o.reject()
					}, r.src = e
				}, function(e) {
					o.reject(e)
				})
			}, function(e) {
				o.reject(e)
			}), o.promise
		}, l.restoreExif = function(e, t) {
			var n = {
				KEY_STR: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
				encode64: function(e) {
					for(var t, n, i, r, a, s = "", o = "", l = "", c = 0; i = (t = e[c++]) >> 2, r = (3 & t) << 4 | (n = e[c++]) >> 4, a = (15 & n) << 2 | (o = e[c++]) >> 6, l = 63 & o, isNaN(n) ? a = l = 64 : isNaN(o) && (l = 64), s = s + this.KEY_STR.charAt(i) + this.KEY_STR.charAt(r) + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(l), t = n = o = "", i = r = a = l = "", c < e.length;);
					return s
				},
				restore: function(e, t) {
					e.match("data:image/jpeg;base64,") && (e = e.replace("data:image/jpeg;base64,", ""));
					var n = this.decode64(e),
						i = this.slice2Segments(n),
						r = this.exifManipulation(t, i);
					return "data:image/jpeg;base64," + this.encode64(r)
				},
				exifManipulation: function(e, t) {
					var n = this.getExifArray(t),
						i = this.insertExif(e, n);
					return new Uint8Array(i)
				},
				getExifArray: function(e) {
					for(var t, n = 0; n < e.length; n++)
						if(255 === (t = e[n])[0] & 225 === t[1]) return t;
					return []
				},
				insertExif: function(e, t) {
					var n = e.replace("data:image/jpeg;base64,", ""),
						i = this.decode64(n),
						r = i.indexOf(255, 3),
						a = i.slice(0, r),
						s = i.slice(r),
						o = a;
					return o = (o = o.concat(t)).concat(s)
				},
				slice2Segments: function(e) {
					for(var t = 0, n = []; !(255 === e[t] & 218 === e[t + 1]);) {
						if(255 === e[t] & 216 === e[t + 1]) t += 2;
						else {
							var i = t + (256 * e[t + 2] + e[t + 3]) + 2,
								r = e.slice(t, i);
							n.push(r), t = i
						}
						if(t > e.length) break
					}
					return n
				},
				decode64: function(e) {
					var t, n, i, r, a = "",
						s = "",
						o = 0,
						l = [];
					for(/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.log("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, NaNExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(o++)) << 2 | (i = this.KEY_STR.indexOf(e.charAt(o++))) >> 4, n = (15 & i) << 4 | (r = this.KEY_STR.indexOf(e.charAt(o++))) >> 2, a = (3 & r) << 6 | (s = this.KEY_STR.indexOf(e.charAt(o++))), l.push(t), 64 !== r && l.push(n), 64 !== s && l.push(a), t = n = a = "", i = r = s = "", o < e.length;);
					return l
				}
			};
			return n.restore(e, t)
		}, l
	}]), angular.module("ui.slider", []).value("uiSliderConfig", {}).directive("uiSlider", ["uiSliderConfig", "$timeout", function(u, d) {
		return u = u || {}, {
			require: "ngModel",
			compile: function() {
				return function(n, i, r, a) {
					function s(e, t) {
						return t ? parseFloat(e) : parseInt(e)
					}
					var t = angular.extend(n.$eval(r.uiSlider) || {}, u),
						o = {
							min: null,
							max: null
						},
						e = ["min", "max", "step"],
						l = !angular.isUndefined(r.useDecimals),
						c = function() {
							angular.isArray(a.$viewValue) && !0 !== t.range && (console.warn("Change your range option of ui-slider. When assigning ngModel an array of values then the range option should be set to true."), t.range = !0), angular.forEach(e, function(e) {
								angular.isDefined(r[e]) && (t[e] = s(r[e], l))
							}), i.slider(t), c = angular.noop
						};
					angular.forEach(e, function(t) {
						r.$observe(t, function(e) {
							e && (c(), i.slider("option", t, s(e, l)))
						})
					}), r.$observe("disabled", function(e) {
						c(), i.slider("option", "disabled", !!e)
					}), n.$watch(r.uiSlider, function(e) {
						c(), null != e && i.slider("option", e)
					}, !0), d(c, 0, !0), i.bind("slide", function(e, t) {
						a.$setViewValue(t.values || t.value), n.$apply()
					}), a.$render = function() {
						c();
						var e = !0 === t.range ? "values" : "value";
						!isNaN(a.$viewValue) || a.$viewValue instanceof Array || (a.$viewValue = 0), !0 === t.range && (angular.isDefined(t.min) && t.min > a.$viewValue[0] && (a.$viewValue[0] = t.min), angular.isDefined(t.max) && t.max < a.$viewValue[1] && (a.$viewValue[1] = t.max), a.$viewValue[0] >= a.$viewValue[1] && (o.min >= a.$viewValue[1] && (a.$viewValue[0] = o.min), o.max <= a.$viewValue[0] && (a.$viewValue[1] = o.max)), o.min = a.$viewValue[0], o.max = a.$viewValue[1]), i.slider(e, a.$viewValue)
					}, n.$watch(r.ngModel, function() {
						!0 === t.range && a.$render()
					}, !0), i.bind("$destroy", function() {
						i.slider("destroy")
					})
				}
			}
		}
	}]), angular.module("ui.tinymce", []).value("uiTinymceConfig", {}).directive("uiTinymce", ["uiTinymceConfig", function(d) {
		d = d || {};
		var f = 0;
		return {
			require: ["ngModel", "?^^selfTestTextEditor"],
			link: function(n, i, e, t) {
				var r, a, s, o = t[0],
					l = t[1] || null;
				l && l.setTinymceScope(n);
				var c = function(e) {
					var t = e.getContent().trim();
					l && l.updateText(t), n.setValue(t)
				};
				if(n.setValue = function(e) {
						o.$setViewValue(e), n.$root.$$phase || n.$apply()
					}, e.id || e.$set("id", "uiTinymce" + f++), (r = e.uiTinymce ? n.$eval(e.uiTinymce) : {}).setup) {
					var u = r.setup;
					delete r.setup
				}
				a = {
					setup: function(t) {
						t.on("init", function(e) {
							o.$render(), o.$setPristine()
						}), t.on("KeyUp ExecCommand change NodeChang Redo Undo", function(e) {
							t.save(), c(t)
						}), t.on("SetContent", function(e) {
							e.initial || o.$viewValue === e.content || (t.save(), c(t))
						}), t.on("blur", function(e) {
							i.blur()
						}), t.on("ObjectResized", function(e) {
							t.save(), c(t)
						}), u && u(t)
					},
					mode: "exact",
					elements: e.id
				}, angular.extend(a, d, r), setTimeout(function() {
					tinymce.init(a)
				}), o.$render = function() {
					s || (s = tinymce.get(e.id)), s && s.setContent(o.$viewValue || "")
				}, n.$on("$destroy", function() {
					s || (s = tinymce.get(e.id)), s && (s.remove(), s = null)
				})
			}
		}
	}]),
	function() {
		"use strict";
		angular.module("ui.tree", []).constant("treeConfig", {
			treeClass: "angular-ui-tree",
			emptyTreeClass: "angular-ui-tree-empty",
			dropzoneClass: "angular-ui-tree-dropzone",
			hiddenClass: "angular-ui-tree-hidden",
			nodesClass: "angular-ui-tree-nodes",
			nodeClass: "angular-ui-tree-node",
			handleClass: "angular-ui-tree-handle",
			placeholderClass: "angular-ui-tree-placeholder",
			dragClass: "angular-ui-tree-drag",
			dragThreshold: 3,
			defaultCollapsed: !1,
			appendChildOnHover: !0
		})
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").controller("TreeHandleController", ["$scope", "$element", function(e, t) {
			(this.scope = e).$element = t, e.$nodeScope = null, e.$type = "uiTreeHandle"
		}])
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").controller("TreeNodeController", ["$scope", "$element", function(n, i) {
			(this.scope = n).$element = i, n.$modelValue = null, n.$parentNodeScope = null, n.$childNodesScope = null, n.$parentNodesScope = null, n.$treeScope = null, n.$handleScope = null, n.$type = "uiTreeNode", n.$$allowNodeDrop = !1, n.collapsed = !1, n.expandOnHover = !1, n.init = function(e) {
				var t = e[0];
				n.$treeScope = e[1] ? e[1].scope : null, n.$parentNodeScope = t.scope.$nodeScope, n.$modelValue = t.scope.$modelValue[n.$index], n.$parentNodesScope = t.scope, t.scope.initSubNode(n), i.on("$destroy", function() {
					t.scope.destroySubNode(n)
				})
			}, n.index = function() {
				return n.$parentNodesScope.$modelValue.indexOf(n.$modelValue)
			}, n.dragEnabled = function() {
				return !(n.$treeScope && !n.$treeScope.dragEnabled)
			}, n.isSibling = function(e) {
				return n.$parentNodesScope == e.$parentNodesScope
			}, n.isChild = function(e) {
				var t = n.childNodes();
				return t && -1 < t.indexOf(e)
			}, n.prev = function() {
				var e = n.index();
				return 0 < e ? n.siblings()[e - 1] : null
			}, n.siblings = function() {
				return n.$parentNodesScope.childNodes()
			}, n.childNodesCount = function() {
				return n.childNodes() ? n.childNodes().length : 0
			}, n.hasChild = function() {
				return 0 < n.childNodesCount()
			}, n.childNodes = function() {
				return n.$childNodesScope && n.$childNodesScope.$modelValue ? n.$childNodesScope.childNodes() : null
			}, n.accept = function(e, t) {
				return n.$childNodesScope && n.$childNodesScope.$modelValue && n.$childNodesScope.accept(e, t)
			}, n.remove = function() {
				return n.$parentNodesScope.removeNode(n)
			}, n.toggle = function() {
				n.collapsed = !n.collapsed, n.$treeScope.$callbacks.toggle(n.collapsed, n)
			}, n.collapse = function() {
				n.collapsed = !0
			}, n.expand = function() {
				n.collapsed = !1
			}, n.depth = function() {
				var e = n.$parentNodeScope;
				return e ? e.depth() + 1 : 1
			}, n.maxSubDepth = function() {
				return n.$childNodesScope ? function e(t) {
					if(!t) return 0;
					var n, i, r = 0,
						a = t.childNodes();
					if(!a || 0 === a.length) return 0;
					for(i = a.length - 1; 0 <= i; i--) n = 1 + e(a[i]), r = Math.max(r, n);
					return r
				}(n.$childNodesScope) : 0
			}
		}])
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").controller("TreeNodesController", ["$scope", "$element", function(n, e) {
			(this.scope = n).$element = e, n.$modelValue = null, n.$nodeScope = null, n.$treeScope = null, n.$type = "uiTreeNodes", n.$nodesMap = {}, n.nodropEnabled = !1, n.maxDepth = 0, n.cloneEnabled = !1, n.initSubNode = function(e) {
				if(!e.$modelValue) return null;
				n.$nodesMap[e.$modelValue.$$hashKey] = e
			}, n.destroySubNode = function(e) {
				if(!e.$modelValue) return null;
				n.$nodesMap[e.$modelValue.$$hashKey] = null
			}, n.accept = function(e, t) {
				return n.$treeScope.$callbacks.accept(e, n, t)
			}, n.beforeDrag = function(e) {
				return n.$treeScope.$callbacks.beforeDrag(e)
			}, n.isParent = function(e) {
				return e.$parentNodesScope == n
			}, n.hasChild = function() {
				return 0 < n.$modelValue.length
			}, n.safeApply = function(e) {
				var t = this.$root.$$phase;
				"$apply" == t || "$digest" == t ? e && "function" == typeof e && e() : this.$apply(e)
			}, n.removeNode = function(e) {
				var t = n.$modelValue.indexOf(e.$modelValue);
				return -1 < t ? (n.safeApply(function() {
					n.$modelValue.splice(t, 1)[0]
				}), n.$treeScope.$callbacks.removed(e)) : null
			}, n.insertNode = function(e, t) {
				n.safeApply(function() {
					n.$modelValue.splice(e, 0, t)
				})
			}, n.childNodes = function() {
				var e, t = [];
				if(n.$modelValue)
					for(e = 0; e < n.$modelValue.length; e++) t.push(n.$nodesMap[n.$modelValue[e].$$hashKey]);
				return t
			}, n.depth = function() {
				return n.$nodeScope ? n.$nodeScope.depth() : 0
			}, n.outOfDepth = function(e) {
				var t = n.maxDepth || n.$treeScope.maxDepth;
				return 0 < t && n.depth() + e.maxSubDepth() + 1 > t
			}
		}])
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").controller("TreeController", ["$scope", "$element", function(t, e) {
			(this.scope = t).$element = e, t.$nodesScope = null, t.$type = "uiTree", t.$emptyElm = null, t.$dropzoneElm = null, t.$callbacks = null, t.dragEnabled = !0, t.emptyPlaceholderEnabled = !0, t.maxDepth = 0, t.dragDelay = 0, t.cloneEnabled = !1, t.nodropEnabled = !1, t.dropzoneEnabled = !1, t.isEmpty = function() {
				return t.$nodesScope && t.$nodesScope.$modelValue && 0 === t.$nodesScope.$modelValue.length
			}, t.place = function(e) {
				t.$nodesScope.$element.append(e), t.$emptyElm.remove()
			}, this.resetEmptyElement = function() {
				t.$nodesScope.$modelValue && 0 !== t.$nodesScope.$modelValue.length || !t.emptyPlaceholderEnabled ? t.$emptyElm.remove() : e.append(t.$emptyElm)
			}, this.resetDropzoneElement = function() {
				t.$nodesScope.$modelValue && 0 === t.$nodesScope.$modelValue.length || !t.dropzoneEnabled ? t.$dropzoneElm.remove() : e.append(t.$dropzoneElm)
			}, t.resetEmptyElement = this.resetEmptyElement, t.resetDropzoneElement = this.resetDropzoneElement
		}])
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").directive("uiTree", ["treeConfig", "$window", function(c, u) {
			return {
				restrict: "A",
				scope: !0,
				controller: "TreeController",
				link: function(n, e, t, i) {
					var r, a, s, o = {
							accept: null,
							beforeDrag: null
						},
						l = {};
					angular.extend(l, c), l.treeClass && e.addClass(l.treeClass), "table" === e.prop("tagName").toLowerCase() ? (n.$emptyElm = angular.element(u.document.createElement("tr")), s = 0 < (a = e.find("tr")).length ? angular.element(a).children().length : 1e6, r = angular.element(u.document.createElement("td")).attr("colspan", s), n.$emptyElm.append(r)) : (n.$emptyElm = angular.element(u.document.createElement("div")), n.$dropzoneElm = angular.element(u.document.createElement("div"))), l.emptyTreeClass && n.$emptyElm.addClass(l.emptyTreeClass), l.dropzoneClass && n.$dropzoneElm.addClass(l.dropzoneClass), n.$watch("$nodesScope.$modelValue.length", function(e) {
						angular.isNumber(e) && (i.resetEmptyElement(), i.resetDropzoneElement())
					}, !0), n.$watch(t.dragEnabled, function(e) {
						"boolean" == typeof e && (n.dragEnabled = e)
					}), n.$watch(t.emptyPlaceholderEnabled, function(e) {
						"boolean" == typeof e && (n.emptyPlaceholderEnabled = e, i.resetEmptyElement())
					}), n.$watch(t.nodropEnabled, function(e) {
						"boolean" == typeof e && (n.nodropEnabled = e)
					}), n.$watch(t.dropzoneEnabled, function(e) {
						"boolean" == typeof e && (n.dropzoneEnabled = e, i.resetDropzoneElement())
					}), n.$watch(t.cloneEnabled, function(e) {
						"boolean" == typeof e && (n.cloneEnabled = e)
					}), n.$watch(t.maxDepth, function(e) {
						"number" == typeof e && (n.maxDepth = e)
					}), n.$watch(t.dragDelay, function(e) {
						"number" == typeof e && (n.dragDelay = e)
					}), o.accept = function(e, t, n) {
						return !(t.nodropEnabled || t.$treeScope.nodropEnabled || t.outOfDepth(e))
					}, o.beforeDrag = function(e) {
						return !0
					}, o.expandTimeoutStart = function() {}, o.expandTimeoutCancel = function() {}, o.expandTimeoutEnd = function() {}, o.removed = function(e) {}, o.dropped = function(e) {}, o.dragStart = function(e) {}, o.dragMove = function(e) {}, o.dragStop = function(e) {}, o.beforeDrop = function(e) {}, o.toggle = function(e, t) {}, n.$watch(t.uiTree, function(e, t) {
						angular.forEach(e, function(e, t) {
							o[t] && "function" == typeof e && (o[t] = e)
						}), n.$callbacks = o
					}, !0)
				}
			}
		}])
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").directive("uiTreeHandle", ["treeConfig", function(a) {
			return {
				require: "^uiTreeNode",
				restrict: "A",
				scope: !0,
				controller: "TreeHandleController",
				link: function(e, t, n, i) {
					var r = {};
					angular.extend(r, a), r.handleClass && t.addClass(r.handleClass), e != i.scope && (e.$nodeScope = i.scope, i.scope.$handleScope = e)
				}
			}
		}])
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").directive("uiTreeNode", ["treeConfig", "UiTreeHelper", "$window", "$document", "$timeout", "$q", function(w, z, N, U, R, L) {
			return {
				require: ["^uiTreeNodes", "^uiTree"],
				restrict: "A",
				controller: "TreeNodeController",
				link: function(x, d, t, e) {
					var C, T, S, k, f, q, D, E, A, j, O, n, i, r, a, s, o, l, c, u, p, _, h, M, m, g, P, v, F = {},
						y = "ontouchstart" in window,
						I = null,
						$ = document.body,
						b = document.documentElement;
					angular.extend(F, w), F.nodeClass && d.addClass(F.nodeClass), x.init(e), x.collapsed = !!z.getNodeAttribute(x, "collapsed") || w.defaultCollapsed, x.expandOnHover = !!z.getNodeAttribute(x, "expandOnHover"), x.scrollContainer = z.getNodeAttribute(x, "scrollContainer") || t.scrollContainer || null, x.sourceOnly = x.nodropEnabled || x.$treeScope.nodropEnabled, x.$watch(t.collapsed, function(e) {
						"boolean" == typeof e && (x.collapsed = e)
					}), x.$watch("collapsed", function(e) {
						z.setNodeAttribute(x, "collapsed", e), t.$set("collapsed", e)
					}), x.$watch(t.expandOnHover, function(e) {
						"boolean" != typeof e && "number" != typeof e || (x.expandOnHover = e)
					}), x.$watch("expandOnHover", function(e) {
						z.setNodeAttribute(x, "expandOnHover", e), t.$set("expandOnHover", e)
					}), t.$observe("scrollContainer", function(e) {
						"string" == typeof e && (x.scrollContainer = e)
					}), x.$watch("scrollContainer", function(e) {
						z.setNodeAttribute(x, "scrollContainer", e), t.$set("scrollContainer", e), D = document.querySelector(e)
					}), x.$on("angular-ui-tree:collapse-all", function() {
						x.collapsed = !0
					}), x.$on("angular-ui-tree:expand-all", function() {
						x.collapsed = !1
					}), n = function(e) {
						if((y || 2 !== e.button && 3 !== e.which) && !(e.uiTreeDragging || e.originalEvent && e.originalEvent.uiTreeDragging)) {
							var t, n, i, r, a, s, o, l, c, u = angular.element(e.target);
							if((t = z.treeNodeHandlerContainerOfElement(u)) && (u = angular.element(t)), n = d.clone(), l = z.elementIsTreeNode(u), c = z.elementIsTreeNodeHandle(u), (l || c) && !(l && z.elementContainsTreeNodeHandler(u) || "input" == (i = u.prop("tagName").toLowerCase()) || "textarea" == i || "button" == i || "select" == i)) {
								for(m = angular.element(e.target), g = m[0].attributes["ui-tree"]; m && m[0] && m[0] !== d && !g;) {
									if(m[0].attributes && (g = m[0].attributes["ui-tree"]), z.nodrag(m)) return;
									m = m.parent()
								}
								x.beforeDrag(x) && (e.uiTreeDragging = !0, e.originalEvent && (e.originalEvent.uiTreeDragging = !0), e.preventDefault(), a = z.eventObj(e), C = !0, T = z.dragInfo(x), P = T.source.$treeScope.$id, "tr" === (r = d.prop("tagName")).toLowerCase() ? (k = angular.element(N.document.createElement(r)), s = angular.element(N.document.createElement("td")).addClass(F.placeholderClass).attr("colspan", d[0].children.length), k.append(s)) : k = angular.element(N.document.createElement(r)).addClass(F.placeholderClass), f = angular.element(N.document.createElement(r)), F.hiddenClass && f.addClass(F.hiddenClass), S = z.positionStarted(a, d), k.css("height", d.prop("offsetHeight") + "px"), (q = angular.element(N.document.createElement(x.$parentNodesScope.$element.prop("tagName"))).addClass(x.$parentNodesScope.$element.attr("class")).addClass(F.dragClass)).css("width", z.width(d) + "px"), q.css("z-index", 9999), (o = (d[0].querySelector(".angular-ui-tree-handle") || d[0]).currentStyle) && (document.body.setAttribute("ui-tree-cursor", U.find("body").css("cursor") || ""), U.find("body").css({
									cursor: o.cursor + "!important"
								})), x.sourceOnly && k.css("display", "none"), d.after(k), d.after(f), T.isClone() && x.sourceOnly ? q.append(n) : q.append(d), U.find("body").append(q), q.css({
									left: a.pageX - S.offsetX + "px",
									top: a.pageY - S.offsetY + "px"
								}), A = {
									placeholder: k,
									dragging: q
								}, p(), x.$apply(function() {
									x.$treeScope.$callbacks.dragStart(T.eventArgs(A, S))
								}), j = Math.max($.scrollHeight, $.offsetHeight, b.clientHeight, b.scrollHeight, b.offsetHeight), O = Math.max($.scrollWidth, $.offsetWidth, b.clientWidth, b.scrollWidth, b.offsetWidth))
							}
						}
					}, i = function(e) {
						var t, n, i, r, a, s, o, l, c, u, d, f, p, _, h, m, g, v, y, $, b, w = z.eventObj(e);
						if(q) {
							if(e.preventDefault(), N.getSelection ? N.getSelection().removeAllRanges() : N.document.selection && N.document.selection.empty(), (n = w.pageX - S.offsetX) < 0 && (n = 0), (i = w.pageY - S.offsetY) < 0 && (i = 0), j < i + 10 && (i = j - 10), O < n + 10 && (n = O - 10), q.css({
									left: n + "px",
									top: i + "px"
								}), D ? (s = D.getBoundingClientRect(), a = (r = D.scrollTop) + D.clientHeight, s.bottom < w.clientY && a < D.scrollHeight && (_ = Math.min(D.scrollHeight - a, 10), D.scrollTop += _), s.top > w.clientY && 0 < r && (h = Math.min(r, 10), D.scrollTop -= h)) : ((a = (r = window.pageYOffset || N.document.documentElement.scrollTop) + (window.innerHeight || N.document.clientHeight || N.document.clientHeight)) < w.pageY && a < j && (_ = Math.min(j - a, 10), window.scrollBy(0, _)), r > w.pageY && (h = Math.min(r, 10), window.scrollBy(0, -h))), z.positionMoved(e, S, C), C) return void(C = !1);
							if(l = w.pageX - (N.pageXOffset || N.document.body.scrollLeft || N.document.documentElement.scrollLeft) - (N.document.documentElement.clientLeft || 0), c = w.pageY - (N.pageYOffset || N.document.body.scrollTop || N.document.documentElement.scrollTop) - (N.document.documentElement.clientTop || 0), angular.isFunction(q.hide) ? q.hide() : (u = q[0].style.display, q[0].style.display = "none"), N.document.elementFromPoint(l, c), f = angular.element(N.document.elementFromPoint(l, c)), (M = z.treeNodeHandlerContainerOfElement(f)) && (f = angular.element(M)), angular.isFunction(q.show) ? q.show() : q[0].style.display = u, z.elementIsTree(f) ? d = f.controller("uiTree").scope : z.elementIsTreeNodeHandle(f) ? d = f.controller("uiTreeHandle").scope : z.elementIsTreeNode(f) ? d = f.controller("uiTreeNode").scope : z.elementIsTreeNodes(f) ? d = f.controller("uiTreeNodes").scope : z.elementIsPlaceholder(f) ? d = f.controller("uiTreeNodes").scope : z.elementIsDropzone(f) ? (d = f.controller("uiTree").scope, b = !0) : f.controller("uiTreeNode") && (d = f.controller("uiTreeNode").scope), d && d.$treeScope && d.$treeScope.$id && d.$treeScope.$id === P && S.dirAx) 0 < S.distX && (t = T.prev()) && !t.collapsed && t.accept(x, t.childNodesCount()) && (t.$childNodesScope.$element.append(k), T.moveTo(t.$childNodesScope, t.childNodes(), t.childNodesCount())), S.distX < 0 && (T.next() || (o = T.parentNode()) && o.$parentNodesScope.accept(x, o.index() + 1) && (o.$element.after(k), T.moveTo(o.$parentNodesScope, o.siblings(), o.index() + 1)));
							else {
								if(p = !1, !d) return;
								if(!d.$treeScope || d.$parent.nodropEnabled || d.$treeScope.nodropEnabled || k.css("display", ""), "uiTree" === d.$type && d.dragEnabled && (p = d.isEmpty()), "uiTreeHandle" === d.$type && (d = d.$nodeScope), "uiTreeNode" !== d.$type && !p && !b) return void(F.appendChildOnHover && !T.next() && E && ((o = T.parentNode()).$element.after(k), T.moveTo(o.$parentNodesScope, o.siblings(), o.index() + 1), E = !1));
								I && k.parent()[0] != I.$element[0] && (I.resetEmptyElement(), I.resetDropzoneElement(), I = null), p ? (I = d).$nodesScope.accept(x, 0) && T.moveTo(d.$nodesScope, d.$nodesScope.childNodes(), 0) : b ? (I = d).$nodesScope.accept(x, d.$nodesScope.childNodes().length) && T.moveTo(d.$nodesScope, d.$nodesScope.childNodes(), d.$nodesScope.childNodes().length) : d.dragEnabled() && (angular.isDefined(x.expandTimeoutOn) && x.expandTimeoutOn !== d.id && (R.cancel(x.expandTimeout), delete x.expandTimeout, delete x.expandTimeoutOn, x.$callbacks.expandTimeoutCancel()), d.collapsed && (!0 === x.expandOnHover || angular.isNumber(x.expandOnHover) && 0 === x.expandOnHover ? (d.collapsed = !1, d.$treeScope.$callbacks.toggle(!1, d)) : !1 !== x.expandOnHover && angular.isNumber(x.expandOnHover) && 0 < x.expandOnHover && angular.isUndefined(x.expandTimeoutOn) && (x.expandTimeoutOn = d.$id, x.$callbacks.expandTimeoutStart(), x.expandTimeout = R(function() {
									x.$callbacks.expandTimeoutEnd(), d.collapsed = !1, d.$treeScope.$callbacks.toggle(!1, d)
								}, x.expandOnHover))), f = d.$element, m = z.offset(f), y = z.height(f), y -= ($ = d.$childNodesScope ? d.$childNodesScope.$element : null) ? z.height($) : 0, v = F.appendChildOnHover ? .25 * y : z.height(f) / 2, g = w.pageY < m.top + v, d.$parentNodesScope.accept(x, d.index()) ? g ? (f[0].parentNode.insertBefore(k[0], f[0]), T.moveTo(d.$parentNodesScope, d.siblings(), d.index())) : F.appendChildOnHover && d.accept(x, d.childNodesCount()) ? (d.$childNodesScope.$element.prepend(k), T.moveTo(d.$childNodesScope, d.childNodes(), 0), E = !0) : (f.after(k), T.moveTo(d.$parentNodesScope, d.siblings(), d.index() + 1)) : !g && d.accept(x, d.childNodesCount()) && (d.$childNodesScope.$element.append(k), T.moveTo(d.$childNodesScope, d.childNodes(), d.childNodesCount())))
							}
							x.$apply(function() {
								x.$treeScope.$callbacks.dragMove(T.eventArgs(A, S))
							})
						}
					}, r = function(e) {
						var t = T.eventArgs(A, S);
						e.preventDefault(), _(), R.cancel(x.expandTimeout), x.$treeScope.$apply(function() {
							L.when(x.$treeScope.$callbacks.beforeDrop(t)).then(function(e) {
								!1 !== e && x.$$allowNodeDrop ? (T.apply(), x.$treeScope.$callbacks.dropped(t)) : u()
							}).catch(function() {
								u()
							}).finally(function() {
								f.replaceWith(x.$element), k.remove(), q && (q.remove(), q = null), x.$treeScope.$callbacks.dragStop(t), x.$$allowNodeDrop = !1, T = null;
								var e = document.body.getAttribute("ui-tree-cursor");
								null !== e && (U.find("body").css({
									cursor: e
								}), document.body.removeAttribute("ui-tree-cursor"))
							})
						})
					}, a = function(e) {
						x.dragEnabled() && n(e)
					}, s = function(e) {
						i(e)
					}, o = function(e) {
						x.$$allowNodeDrop = !0, r(e)
					}, l = function(e) {
						r(e)
					}, c = {
						exec: function(e, t) {
							t || (t = 0), this.cancel(), v = R(e, t)
						},
						cancel: function() {
							R.cancel(v)
						}
					}, h = function(e) {
						27 === e.keyCode && o(e)
					}, (u = function() {
						d.bind("touchstart mousedown", function(e) {
							0 < x.dragDelay ? c.exec(function() {
								a(e)
							}, x.dragDelay) : a(e)
						}), d.bind("touchend touchcancel mouseup", function() {
							0 < x.dragDelay && c.cancel()
						})
					})(), p = function() {
						angular.element(U).bind("touchend", o), angular.element(U).bind("touchcancel", o), angular.element(U).bind("touchmove", s), angular.element(U).bind("mouseup", o), angular.element(U).bind("mousemove", s), angular.element(U).bind("mouseleave", l), angular.element(U).bind("keydown", h)
					}, _ = function() {
						angular.element(U).unbind("touchend", o), angular.element(U).unbind("touchcancel", o), angular.element(U).unbind("touchmove", s), angular.element(U).unbind("mouseup", o), angular.element(U).unbind("mousemove", s), angular.element(U).unbind("mouseleave", l), angular.element(U).unbind("keydown", h)
					}
				}
			}
		}])
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").directive("uiTreeNodes", ["treeConfig", "$window", function(l) {
			return {
				require: ["ngModel", "?^uiTreeNode", "^uiTree"],
				restrict: "A",
				scope: !0,
				controller: "TreeNodesController",
				link: function(t, e, n, i) {
					var r = {},
						a = i[0],
						s = i[1],
						o = i[2];
					angular.extend(r, l), r.nodesClass && e.addClass(r.nodesClass), s ? (s.scope.$childNodesScope = t).$nodeScope = s.scope : o.scope.$nodesScope = t, t.$treeScope = o.scope, a && (a.$render = function() {
						t.$modelValue = a.$modelValue
					}), t.$watch(function() {
						return n.maxDepth
					}, function(e) {
						"number" == typeof e && (t.maxDepth = e)
					}), t.$watch(function() {
						return n.nodropEnabled
					}, function(e) {
						void 0 !== e && (t.nodropEnabled = !0)
					}, !0)
				}
			}
		}])
	}(),
	function() {
		"use strict";
		angular.module("ui.tree").factory("UiTreeHelper", ["$document", "$window", "treeConfig", function(n, i, t) {
			return {
				nodesData: {},
				setNodeAttribute: function(e, t, n) {
					if(!e.$modelValue) return null;
					var i = this.nodesData[e.$modelValue.$$hashKey];
					i || (i = {}, this.nodesData[e.$modelValue.$$hashKey] = i), i[t] = n
				},
				getNodeAttribute: function(e, t) {
					if(!e.$modelValue) return null;
					var n = this.nodesData[e.$modelValue.$$hashKey];
					return n ? n[t] : null
				},
				nodrag: function(e) {
					return void 0 !== e.attr("data-nodrag") && "false" !== e.attr("data-nodrag")
				},
				eventObj: function(e) {
					var t = e;
					return void 0 !== e.targetTouches ? t = e.targetTouches.item(0) : void 0 !== e.originalEvent && void 0 !== e.originalEvent.targetTouches && (t = e.originalEvent.targetTouches.item(0)), t
				},
				dragInfo: function(e) {
					return {
						source: e,
						sourceInfo: {
							cloneModel: !0 === e.$treeScope.cloneEnabled ? angular.copy(e.$modelValue) : void 0,
							nodeScope: e,
							index: e.index(),
							nodesScope: e.$parentNodesScope
						},
						index: e.index(),
						siblings: e.siblings().slice(0),
						parent: e.$parentNodesScope,
						resetParent: function() {
							this.parent = e.$parentNodesScope
						},
						moveTo: function(e, t, n) {
							this.parent = e, this.siblings = t.slice(0);
							var i = this.siblings.indexOf(this.source); - 1 < i && (this.siblings.splice(i, 1), this.source.index() < n && n--), this.siblings.splice(n, 0, this.source), this.index = n
						},
						parentNode: function() {
							return this.parent.$nodeScope
						},
						prev: function() {
							return 0 < this.index ? this.siblings[this.index - 1] : null
						},
						next: function() {
							return this.index < this.siblings.length - 1 ? this.siblings[this.index + 1] : null
						},
						isClone: function() {
							return !0 === this.source.$treeScope.cloneEnabled
						},
						clonedNode: function(e) {
							return angular.copy(e)
						},
						isDirty: function() {
							return this.source.$parentNodesScope != this.parent || this.source.index() != this.index
						},
						isForeign: function() {
							return this.source.$treeScope !== this.parent.$treeScope
						},
						eventArgs: function(e, t) {
							return {
								source: this.sourceInfo,
								dest: {
									index: this.index,
									nodesScope: this.parent
								},
								elements: e,
								pos: t
							}
						},
						apply: function() {
							var e = this.source.$modelValue;
							this.parent.nodropEnabled || this.parent.$treeScope.nodropEnabled || this.isDirty() && (this.isClone() && this.isForeign() ? this.parent.insertNode(this.index, this.sourceInfo.cloneModel) : (this.source.remove(), this.parent.insertNode(this.index, e)))
						}
					}
				},
				height: function(e) {
					return e.prop("scrollHeight")
				},
				width: function(e) {
					return e.prop("scrollWidth")
				},
				offset: function(e) {
					var t = e[0].getBoundingClientRect();
					return {
						width: e.prop("offsetWidth"),
						height: e.prop("offsetHeight"),
						top: t.top + (i.pageYOffset || n[0].body.scrollTop || n[0].documentElement.scrollTop),
						left: t.left + (i.pageXOffset || n[0].body.scrollLeft || n[0].documentElement.scrollLeft)
					}
				},
				positionStarted: function(e, t) {
					var n = {},
						i = e.pageX,
						r = e.pageY;
					return e.originalEvent && e.originalEvent.touches && 0 < e.originalEvent.touches.length && (i = e.originalEvent.touches[0].pageX, r = e.originalEvent.touches[0].pageY), n.offsetX = i - this.offset(t).left, n.offsetY = r - this.offset(t).top, n.startX = n.lastX = i, n.startY = n.lastY = r, n.nowX = n.nowY = n.distX = n.distY = n.dirAx = 0, n.dirX = n.dirY = n.lastDirX = n.lastDirY = n.distAxX = n.distAxY = 0, n
				},
				positionMoved: function(e, t, n) {
					var i, r = e.pageX,
						a = e.pageY;
					if(e.originalEvent && e.originalEvent.touches && 0 < e.originalEvent.touches.length && (r = e.originalEvent.touches[0].pageX, a = e.originalEvent.touches[0].pageY), t.lastX = t.nowX, t.lastY = t.nowY, t.nowX = r, t.nowY = a, t.distX = t.nowX - t.lastX, t.distY = t.nowY - t.lastY, t.lastDirX = t.dirX, t.lastDirY = t.dirY, t.dirX = 0 === t.distX ? 0 : 0 < t.distX ? 1 : -1, t.dirY = 0 === t.distY ? 0 : 0 < t.distY ? 1 : -1, i = Math.abs(t.distX) > Math.abs(t.distY) ? 1 : 0, n) return t.dirAx = i, void(t.moving = !0);
					t.dirAx !== i ? (t.distAxX = 0, t.distAxY = 0) : (t.distAxX += Math.abs(t.distX), 0 !== t.dirX && t.dirX !== t.lastDirX && (t.distAxX = 0), t.distAxY += Math.abs(t.distY), 0 !== t.dirY && t.dirY !== t.lastDirY && (t.distAxY = 0)), t.dirAx = i
				},
				elementIsTreeNode: function(e) {
					return void 0 !== e.attr("ui-tree-node")
				},
				elementIsTreeNodeHandle: function(e) {
					return void 0 !== e.attr("ui-tree-handle")
				},
				elementIsTree: function(e) {
					return void 0 !== e.attr("ui-tree")
				},
				elementIsTreeNodes: function(e) {
					return void 0 !== e.attr("ui-tree-nodes")
				},
				elementIsPlaceholder: function(e) {
					return e.hasClass(t.placeholderClass)
				},
				elementIsDropzone: function(e) {
					return e.hasClass(t.dropzoneClass)
				},
				elementContainsTreeNodeHandler: function(e) {
					return 1 <= e[0].querySelectorAll("[ui-tree-handle]").length
				},
				treeNodeHandlerContainerOfElement: function(e) {
					return function(e, t) {
						if(void 0 === t) return null;
						var n = t.parentNode,
							i = "function" == typeof n.setAttribute && n.hasAttribute(e) ? n : null;
						for(; n && "function" == typeof n.setAttribute && !n.hasAttribute(e);) {
							if(n = n.parentNode, (i = n) === document.documentElement) {
								i = null;
								break
							}
							0
						}
						return i
					}("ui-tree-handle", e[0])
				}
			}
		}])
	}(), angular.module("yaMap", []).constant("GEOMETRY_TYPES", {
		POINT: "Point",
		LINESTRING: "LineString",
		RECTANGLE: "Rectangle",
		POLYGON: "Polygon",
		CIRCLE: "Circle"
	}).provider("yaMapSettings", function() {
		var t = {
			version: "2.1",
			lang: "ru_RU",
			order: "longlat"
		};
		this.setLanguage = function(e) {
			return t.lang = e, this
		}, this.setOrder = function(e) {
			return t.order = e, this
		}, this.$get = [function() {
			return t
		}]
	}).factory("mapApiLoad", ["yaMapSettings", function(e) {
		var t = !1,
			n = [],
			i = function() {
				for(; n.length;) n.splice(0, 1)[0]()
			},
			r = "http://api-maps.yandex.ru/" + e.version + "/?load=package.full&lang=" + e.lang + "&coordorder=" + e.order,
			a = !1;
		return function(e) {
			n.push(e), t ? i() : a || function(e, t) {
				if(!a) {
					a = !0;
					var n = document.createElement("script");
					n.type = "text/javascript", n.readyState ? n.onreadystatechange = function() {
						"loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = null, t())
					} : n.onload = function() {
						t()
					}, n.src = e, document.getElementsByTagName("head")[0].appendChild(n)
				}
			}(r, function() {
				ymaps.ready(function() {
					t = !0, i()
				})
			})
		}
	}]).service("yaLayer", [function() {
		this.create = function(e, t) {
			return new ymaps.Layer(e, t)
		}
	}]).service("yaMapType", [function() {
		this.create = function(e, t) {
			return new ymaps.MapType(e, t)
		}
	}]).service("layerStorage", ["mapApiLoad", function(n) {
		this.get = function(e) {
			if(this._storage) e(this._storage);
			else {
				var t = this;
				n(function() {
					t._storage = ymaps.layer.storage, e(t._storage)
				})
			}
		}
	}]).service("mapTypeStorage", ["mapApiLoad", function(n) {
		this.get = function(e) {
			if(this._storage) e(this._storage);
			else {
				var t = this;
				n(function() {
					t._storage = ymaps.mapType.storage, e(t._storage)
				})
			}
		}
	}]).service("yaSubscriber", function() {
		var o = /^yaEvent(\w*)?([A-Z]{1}[a-z]+)$/;
		this.subscribe = function(e, t, n, i) {
			var r = o.exec(n),
				a = r[2].toLowerCase(),
				s = r[1] ? r[1][1].toLowerCase() + r[1].substring(1) : void 0;
			i[n] = function(e) {
				return t(i.$parent || i, e)
			}, (s ? e[s].events : e.events).add(a, function(e) {
				setTimeout(function() {
					i.$apply(function() {
						i[n]({
							$event: e
						})
					})
				})
			})
		}
	}).service("templateLayoutFactory", ["mapApiLoad", function(r) {
		this._cache = {}, this.get = function(e) {
			return this._cache[e]
		}, this.create = function(e, t, n) {
			if(!this._cache[e]) {
				var i = this;
				r(function() {
					i._cache[e] = ymaps.templateLayoutFactory.createClass(t, n)
				})
			}
		}
	}]).directive("yaTemplateLayout", ["templateLayoutFactory", function(a) {
		return {
			restrict: "AEC",
			priority: 1001,
			scope: {
				overrides: "=yaOverrides"
			},
			compile: function(e) {
				var r = e.html();
				return e.html(""),
					function(e, t, n) {
						if(!n.yaKey) throw new Error('not require attribute "key"');
						var i = n.yaKey;
						a.create(i, r, e.overrides)
					}
			}
		}
	}]).controller("YaMapCtrl", ["$scope", "mapApiLoad", function(a, e) {
		var t = this;
		e(function() {
			t.addGeoObjects = function(e) {
				a.map.geoObjects.add(e)
			}, t.removeGeoObjects = function(e) {
				a.map.geoObjects.remove(e)
			}, t.addControl = function(e, t) {
				a.map.controls.add(e, t)
			}, t.getMap = function() {
				return a.map
			}, t.addImageLayer = function(e, t) {
				var n = new ymaps.Layer(e, t);
				a.map.layers.add(n)
			}, t.addHotspotLayer = function(e, t, n) {
				var i = new ymaps.hotspot.ObjectSource(e, t),
					r = new ymaps.hotspot.Layer(i, n);
				a.map.layers.add(r)
			}
		})
	}]).directive("yaMap", ["$compile", "mapApiLoad", "yaMapSettings", "$window", "yaSubscriber", "$parse", "$q", "$timeout", function(_, h, e, t, m, g, v, y) {
		return {
			restrict: "AEC",
			scope: {
				yaCenter: "@",
				yaType: "@",
				yaBeforeInit: "&",
				yaAfterInit: "&"
			},
			compile: function(e) {
				var p = e.children(),
					r = null;
				return e.html(""),
					function(a, s, o) {
						var l = Number(o.yaZoom),
							e = o.yaBehaviors ? o.yaBehaviors.split(" ") : ["default"],
							c = ["default"];
						o.yaControls ? c = o.yaControls.split(" ") : angular.isDefined(o.yaControls) && (c = []);
						for(var t, u, d = [], f = [], n = 0, i = e.length; n < i; n++) "-" === (t = e[n])[0] ? d.push(t.substring(1)) : f.push(t);
						l < 0 ? l = 0 : 23 < l && (l = 23);
						a.$watch("yaCenter", function(e) {
							var t, n = function(t) {
								try {
									return a.$eval(t)
								} catch(e) {
									return t
								}
							}(e);
							(t = n, r && r.reject(), r = v.defer(), t ? angular.isArray(t) ? y(function() {
								r.resolve(t)
							}) : angular.isString(t) && h(function() {
								ymaps.geocode(t, {
									results: 1
								}).then(function(e) {
									var t = e.geoObjects.get(0);
									a.$apply(function() {
										r.resolve(t.geometry.getCoordinates())
									})
								}, function(e) {
									a.$apply(function() {
										r.reject(e)
									})
								})
							}) : h(function() {
								ymaps.geolocation.get({
									provider: "yandex"
								}).then(function(e) {
									y(function() {
										r.resolve(e.geoObjects.position)
									})
								})
							}), r.promise).then(function(t) {
								if(!u) {
									i = t, r = v.defer(), h(function() {
										a.yaBeforeInit();
										var e = o.yaOptions ? a.$eval(o.yaOptions) : void 0;
										for(var t in e && e.projection && (e.projection = new ymaps.projection[e.projection.type](e.projection.bounds)), a.map = new ymaps.Map(s[0], {
												center: i,
												zoom: l,
												controls: c,
												type: o.yaType || "yandex#map",
												behaviors: f
											}, e), a.map.behaviors.disable(d), o)
											if(0 === t.indexOf("yaEvent")) {
												var n = g(o[t]);
												m.subscribe(a.map, n, t, a)
											}
										r.resolve(a.map), a.yaAfterInit({
											$target: a.map
										}), s.append(p), setTimeout(function() {
											a.$apply(function() {
												_(s.children())(a.$parent)
											})
										})
									}), u = r.promise;
									var n = !0
								}
								var i, r;
								u.then(function(e) {
									n || e.setCenter(t)
								})
							})
						}), a.$watch("yaType", function(t) {
							t && u && u.then(function(e) {
								e.setType(t)
							})
						}), a.$on("$destroy", function() {
							a.map && a.map.destroy()
						})
					}
			},
			controller: "YaMapCtrl"
		}
	}]).directive("yaControl", ["yaSubscriber", "templateLayoutFactory", "$parse", function(_, h, m) {
		return {
			restrict: "AEC",
			require: "^yaMap",
			scope: {
				yaAfterInit: "&"
			},
			link: function(e, t, n, i) {
				var r = n.yaType[0].toUpperCase() + n.yaType.substring(1),
					a = function(t) {
						try {
							return e.$eval(t)
						} catch(e) {
							return t
						}
					}(n.yaParams),
					s = n.yaOptions ? e.$eval(n.yaOptions) : void 0;
				if(s && s.layout && (s.layout = h.get(s.layout)), s && s.itemLayout && (s.itemLayout = h.get(s.itemLayout)), a && a.items) {
					for(var o, l = [], c = 0, u = a.items.length; c < u; c++) o = a.items[c], l.push(new ymaps.control.ListBoxItem(o));
					a.items = l
				}
				var d = new ymaps.control[r](a);
				for(var f in s) s.hasOwnProperty(f) && d.options.set(f, s[f]);
				for(f in n)
					if(0 === f.indexOf("yaEvent")) {
						var p = m(n[f]);
						_.subscribe(d, p, f, e)
					}
				i.addControl(d, s), e.yaAfterInit({
					$target: d
				})
			}
		}
	}]).controller("CollectionCtrl", ["$scope", function(t) {
		this.addGeoObjects = function(e) {
			t.collection.add(e)
		}, this.removeGeoObjects = function(e) {
			t.collection.remove(e)
		}
	}]).directive("yaCollection", ["$compile", "yaMapSettings", "$timeout", "yaSubscriber", "$parse", function(d, e, f, p, _) {
		return {
			require: "^yaMap",
			restrict: "AEC",
			scope: {
				yaAfterInit: "&"
			},
			compile: function(e) {
				var u = e.contents();
				return e.html(""),
					function(e, t, n, i) {
						var r = n.yaOptions ? e.$eval(n.yaOptions) : {};
						if(angular.isDefined(n.showAll) && "false" != n.showAll) {
							var a, s = i.getMap(),
								o = function() {
									a && f.cancel(a), a = f(function() {
										s.geoObjects.events.remove("add", o);
										var e = s.geoObjects.getBounds();
										e && s.setBounds(e)
									}, 300)
								};
							s.geoObjects.events.add("add", o)
						}
						for(var l in e.collection = new ymaps.GeoObjectCollection({}, r), n)
							if(0 === l.indexOf("yaEvent")) {
								var c = _(n[l]);
								p.subscribe(e.collection, c, l, e)
							}
						i.addGeoObjects(e.collection), e.yaAfterInit({
							$target: e.collection
						}), e.$on("$destroy", function() {
							e.collection && i.removeGeoObjects(e.collection)
						}), t.append(u), d(t.children())(e.$parent)
					}
			},
			controller: "CollectionCtrl"
		}
	}]).directive("yaCluster", ["yaMapSettings", "yaSubscriber", "$compile", "templateLayoutFactory", "$parse", function(e, l, c, u, d) {
		return {
			require: "^yaMap",
			restrict: "AEC",
			scope: {
				yaAfterInit: "&"
			},
			compile: function(e) {
				var o = e.contents();
				return e.html(""),
					function(e, t, n, i) {
						var r = n.yaOptions ? e.$eval(n.yaOptions) : {};
						for(var a in r && r.clusterBalloonItemContentLayout && (r.clusterBalloonItemContentLayout = u.get(r.clusterBalloonItemContentLayout)), r && r.clusterBalloonContentLayout && (r.clusterBalloonContentLayout = u.get(r.clusterBalloonContentLayout)), e.collection = new ymaps.Clusterer(r), n)
							if(0 === a.indexOf("yaEvent")) {
								var s = d(n[a]);
								l.subscribe(e.collection, s, a, e)
							}
						i.addGeoObjects(e.collection), e.yaAfterInit({
							$target: e.collection
						}), e.$on("$destroy", function() {
							e.collection && i.removeGeoObjects(e.collection)
						}), t.append(o), c(t.children())(e.$parent)
					}
			},
			controller: "CollectionCtrl"
		}
	}]).directive("yaGeoObject", ["GEOMETRY_TYPES", "yaSubscriber", "templateLayoutFactory", "$parse", function(d, f, n, p) {
		return {
			restrict: "AEC",
			require: ["^yaMap", "?^yaCollection", "?^yaCluster"],
			scope: {
				yaSource: "=",
				yaShowBalloon: "=",
				yaAfterInit: "&"
			},
			link: function(r, e, a, t) {
				var s, o = t[2] || t[1] || t[0],
					i = a.yaOptions ? r.$eval(a.yaOptions) : void 0;
				i && i.balloonContentLayout && (i.balloonContentLayout = n.get(i.balloonContentLayout)), i && i.iconLayout && (i.iconLayout = n.get(i.iconLayout));
				r.$watch("yaSource", function(e) {
					if(e)
						if(s) {
							s.geometry.setCoordinates(e.geometry.coordinates), s.geometry.getType() === d.CIRCLE && s.geometry.setRadius(e.geometry.radius);
							var t = e.properties;
							for(var n in t) t.hasOwnProperty(n) && s.properties.set(n, t[n])
						} else ! function(e, t) {
							for(var n in s = new ymaps.GeoObject(e, t), a)
								if(0 === n.indexOf("yaEvent")) {
									var i = p(a[n]);
									f.subscribe(s, i, n, r)
								}
							o.addGeoObjects(s), r.yaAfterInit({
								$target: s
							}), l(a.yaEdit), c(a.yaDraw), u(r.yaShowBalloon)
						}(e, i);
					else s && o.removeGeoObjects(s)
				}, angular.equals);
				var l = function(e) {
						angular.isDefined(e) && "false" !== e ? s && s.editor.startEditing() : angular.isDefined(e) && s && s.editor.stopEditing()
					},
					c = function(e) {
						angular.isDefined(e) && "false" !== e ? s && s.editor.startDrawing() : angular.isDefined(e) && s && s.editor.stopDrawing()
					},
					u = function(e) {
						e ? s && s.balloon.open() : s && s.balloon.close()
					};
				a.$observe("yaEdit", l), a.$observe("yaDraw", c), r.$watch("yaShowBalloon", u), r.$on("$destroy", function() {
					s && o.removeGeoObjects(s)
				})
			}
		}
	}]).directive("yaHotspotLayer", [function() {
		return {
			restrict: "AEC",
			require: "^yaMap",
			link: function(e, t, n, i) {
				if(!n.yaUrlTemplate) throw new Error('not exists required attribute "url-template"');
				if(!n.yaKeyTemplate) throw new Error('not exists required attribute "key-template"');
				var r = n.yaOptions ? e.$eval(n.yaOptions) : void 0;
				i.addHotspotLayer(n.yaUrlTemplate, n.yaKeyTemplate, r)
			}
		}
	}]).directive("yaImageLayer", [function() {
		return {
			restrict: "AEC",
			require: "^yaMap",
			link: function(e, t, n, i) {
				if(!n.yaUrlTemplate) throw new Error('not exists required attribute "url-template"');
				var r = n.yaOptions ? e.$eval(n.yaOptions) : void 0;
				i.addImageLayer(n.yaUrlTemplate, r)
			}
		}
	}]).directive("yaDragger", ["yaSubscriber", "$parse", "mapApiLoad", function(o, l, e) {
		return {
			restrict: "AEC",
			scope: {
				yaAfterInit: "&"
			},
			link: function(i, r, a) {
				var s = a.yaOptions ? i.$eval(a.yaOptions) : {};
				e(function() {
					s.autoStartElement = r[0];
					var e = new ymaps.util.Dragger(s);
					for(var t in a)
						if(0 === t.indexOf("yaEvent")) {
							var n = l(a[t]);
							"yaEventStart1" == t && (t = "yaEventStart"), o.subscribe(e, n, t, i)
						}
					i.yaAfterInit({
						$target: e
					})
				})
			}
		}
	}]), angular.module("selfTestAssignments", ["ngSanitize", "ui.calendar", "ui.autocomplete", "ui.date", "ui.slider"]).filter("in_array", function() {
		return function(e, t, n) {
			var i = [];
			return null == n && (n = "id"), angular.isArray(t) && angular.forEach(e, function(e) {
				-1 != t.indexOf(e[n]) && i.push(e)
			}), i
		}
	}).directive("getTopicInfo", ["$sce", "$http", function(e, s) {
		return {
			scope: {
				topic: "=ngModel",
				cache: "=getTopicInfoCache",
				type: "=getTopicInfoType",
				is_self_scan: "=getTopicInfoIsSelfScan"
			},
			restrict: "AEC",
			link: function(t, e, n) {
				if(null == t.cache && (t.cache = {}), null != t.topic) {
					var i = "topic_" + t.topic.id,
						r = [1, 2, 3, 4, 5, 8, 11];
					3 == t.type && (r = [16], i = i + "_" + t.type), 4 == t.type && (r = [6], i = i + "_" + t.type), 1 == t.is_self_scan && (r = [1, 2], i += "_ss1"), t.topic.question_count = "?"
				}
				if(null != t.topic && "?" == t.topic.question_count)
					if(null != t.cache[i]) {
						var a = t.cache[i];
						t.topic.question_count = a.question_count, t.topic.question_count_total_test = a.question_count_total_test, t.topic.question_count_final_test = a.question_count_final_test, t.topic.question_count_self_test = a.question_count_self_test
					} else s({
						method: "GET",
						url: "/assignments/getQuestionsCountsOfSchoolTopic/",
						params: {
							topic_id: t.topic.id,
							types: r.join(","),
							time: (new Date).getTime()
						}
					}).success(function(e) {
						t.cache[i] = e, t.topic.question_count = e.question_count, t.topic.question_count_total_test = e.question_count_total_test, t.topic.question_count_final_test = e.question_count_final_test, t.topic.question_count_self_test = e.question_count_self_test
					})
			}
		}
	}]).controller("AssignmentsControlsController", ["$scope", "$rootScope", "$filter", "$http", "$sce", "$q", "peopleService", "profileService", function(r, a, e, t, n, i, s, o) {
		var l = new Date,
			c = l.getDate(),
			u = l.getMonth() + 1,
			d = l.getFullYear();
		a.is_archive = !1, a.is_remove = !1, a.month_names = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"], a.now_date_name = c + "&nbsp;" + a.month_names[u - 1];
		var f = new Date(+new Date + 12096e5),
			p = f.getDate(),
			_ = f.getMonth() + 1,
			h = f.getFullYear();
		c < 10 && (c = "0" + c), u < 10 && (u = "0" + u), p < 10 && (p = "0" + p), _ < 10 && (_ = "0" + _), a.result_view_type_list = {
			1: {
				title: "Скрыть ошибки",
				value: "1"
			},
			2: {
				title: "Показать ошибки",
				value: "2"
			},
			3: {
				title: "Показать ошибки с подсказками без правильных ответов",
				value: "3"
			},
			4: {
				title: "Показать ошибки с объяснениями и правильными ответами",
				value: "4"
			}
		}, a.assignment_in_editor = {}, a.new_assignment = {
			id: 0,
			title: "",
			type_id: 0,
			type_title: "",
			classes_array: [],
			classes_settings: {},
			pupils_array: [],
			pupils_settings: {},
			change_topics: !0,
			topics_array: [],
			topics_array_old: [],
			topics_settings: {},
			topics_settings_old: {},
			selected_questions_count: 0,
			questions_number: -1,
			date_start_date: d + "-" + u + "-" + c,
			date_stop_date: h + "-" + _ + "-" + p,
			date_start_total_test_date: null,
			date_stop_total_test_date: null,
			attempts_number: 0,
			time_limit: "0",
			result_view_type: "3",
			result_view: "1",
			is_tip: "1",
			is_explanation: "0",
			is_result_after_stop: "1",
			is_question_author: "0",
			is_topic_explanation: "0",
			is_self_scan: "0",
			is_adaptive: "0",
			is_question_time_limit: "0",
			message_for_pupils: "",
			settings_array: [],
			time_limit_content_learning: "5",
			is_gradual_content_access: "0",
			content_access_passing_score_best_percent: "0",
			is_show_content_before_test: "0",
			is_finish_certificate: "0",
			archive: 0,
			sch_subject_title: "",
			user_access: [],
			user_access_array: [],
			filter: {}
		}, a.new_assignment_filter = {
			id: 0,
			order_id: "",
			tags: [],
			ques_count_in_test: "",
			is_excluded: 0
		}, a.filter_general_topic_id = "0", a.now_date = a.new_assignment.date_start_date, a.now_date_year = d, a.maxLoadingStatus = 5, a.isArchive = !1, r.onArchiveClick = function(e) {
			a.isArchive = !a.isArchive, a.assignmentsSearch(a.filterByType, a.isArchive)
		}, a.filterByType = new Set, r.onFilterTypeClick = function(e) {
			a.filterByType.has(e) ? a.filterByType.delete(e) : a.filterByType.add(e), a.assignmentsSearch(a.filterByType, a.isArchive)
		}, a.assignments_page = {
			type: "list"
		}, r.changePageType = function(e) {
			a.assignments_page.type = e
		}, a.openAssignmentEditor = function(e, t) {
			a.is_archive = !1, a.is_remove = !1, $("#ng_assignment_window").modal("show"), null == e ? a.assignment_in_editor = angular.copy(a.new_assignment) : (a.assignment_in_editor = angular.copy(e), a.assignment_in_editor.date_start_date = angular.copy(e.date_start_date + " 00:00:00"), a.assignment_in_editor.date_stop_date = angular.copy(e.date_stop_date + " 23:59:59"), null != e.date_start_total_test_date && (a.assignment_in_editor.date_start_total_test_date = angular.copy(e.date_start_total_test_date + " 00:00:00")), null != e.date_stop_total_test_date && (a.assignment_in_editor.date_stop_total_test_date = angular.copy(e.date_stop_total_test_date + " 23:59:59")), a.assignment_in_editor.change_topics = !1, a.assignment_in_editor.topics_array_old = angular.copy(a.assignment_in_editor.topics_array)), a.assignment_loading_in_editor = !1, a.assignment_success_in_editor = !1, a.assignment_error_in_editor = !1, null != t && t && (a.assignment_in_editor.id = 0), 0 < a.assignment_in_editor.type_id ? (a.assignment_in_editor.step = 1, a.assignment_in_editor.max_step = 4) : (a.assignment_in_editor.step = 0, a.assignment_in_editor.max_step = 1), 0 < a.assignment_in_editor.id && (a.assignment_in_editor.step = 10), 6 == a.assignment_in_editor.type_id && (a.assignment_in_editor.step = 2), a.assignment_in_editor.recomendations = {
				title: {
					active: !0,
					value: []
				}
			}, "" != a.assignment_in_editor.title && a.assignment_in_editor.recomendations.title.value.push({
				label: a.assignment_in_editor.title,
				value: a.assignment_in_editor.title
			}), a.assignment_in_editor.bg_file_clear_drop_box = !0
		}, a.peopleService = s, a.profileService = o;
		var m = [];
		m.push(s.loadUsersWithDefer([1, 2, 3, 4, 5])), m.push(o.loadProfile()), i.all(m), a.autocomplete_user_12345 = {
			value: ""
		}, a.autocomplete_options_users_12345 = {
			options: {
				html: !0,
				focusOpen: !0,
				onlySelect: !0,
				maxHeight: 250,
				outWidth: 6,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: function(e, t) {
					var n = s.users,
						i = [];
					angular.forEach(n, function(e, t) {
						(0 == a.assignment_in_editor.id && o.profile && e.id != o.profile.id || 0 != a.assignment_in_editor.id && e.id != a.assignment_in_editor.user_id) && -1 == a.assignment_in_editor.user_access_array.indexOf(e.id) && [1, 2, 3, 4, 5].inArray(parseInt(e.status_id)) && i.push(e)
					}), (i = r.autocomplete_options_users_12345.methods.filter(i, e.term)).length || i.push({
						groupLabel: "<small><i>коллеги не найдены</i></small>"
					}), t(i)
				}
			},
			events: {
				select: function(e, t) {
					-1 == a.assignment_in_editor.user_access_array.indexOf(t.item.id) && (a.assignment_in_editor.user_access_array.push(t.item.id), a.assignment_in_editor.user_access["id" + t.item.id] = {
						access_type: "VIEW",
						user_id: t.item.id
					}), e.preventDefault()
				}
			},
			methods: {}
		}
	}]).controller("AssignmentsController", ["$scope", "$rootScope", "$filter", "$http", "$sce", function(a, l, e, r, t) {
		a.trustAsHtmlST = function(e) {
			return t.trustAsHtml(e)
		}, l.loading_status = 0, l.areAssignmentLoading = !1, a.inArray = function(e, t) {
			return e.inArray(t)
		}, a.math_round = function(e) {
			return Math.round(e)
		}, a.show_assignments_list__date = function(e, t) {
			var n = l.assignments_list__date__last_showed != t && e.inArray(t);
			return n && (l.assignments_list__date__last_showed = t), n
		}, a.show_assignments_list__year = function(e) {
			var t = l.assignments_list__year__last_showed != e;
			return t && (l.assignments_list__year__last_showed = e), t
		}, a.show_assignments_list__now_date = function(e, t, n, i) {
			if(n || 0 != t)
				if(n)
					if(n && i) a = new Date(l.now_date), s = new Date(e), o = !l.assignments_list__is_now_date && a.getTime() < s.getTime();
					else o = !1;
			else var r = new Date(l.assignments_list__date__last_showed),
				a = new Date(l.now_date),
				s = new Date(e),
				o = !l.assignments_list__is_now_date && r.getTime() > a.getTime() && a.getTime() > s.getTime();
			else var a = new Date(l.now_date),
				s = new Date(e),
				o = !l.assignments_list__is_now_date && a.getTime() > s.getTime();
			return o
		}, a.openAssignment = function(t) {
			try {
				l.loadDefaultTags()
			} catch(e) {
				console.log(e.toString())
			}
			if(null == t || t.selected_questions_count) l.openAssignmentEditor(t);
			else {
				l.is_archive = !1, l.is_remove = !1, l.assignment_loading_in_editor = !0, l.assignment_success_in_editor = !1, l.assignment_error_in_editor = !1, l.assignment_in_editor = angular.copy(t), $("#ng_assignment_window").modal("show");
				var n = [];
				angular.forEach(t.topics, function(e) {
					n.push(parseInt(e.id))
				});
				var e = [1, 2, 3, 4, 5, 8, 11];
				3 == l.assignment_in_editor.type_id && (e = [16]), 4 == l.assignment_in_editor.type_id && (e = [6]), 1 == l.assignment_in_editor.is_self_scan && (e = [1, 2]), r({
					method: "GET",
					url: "/assignments/selected_questions_count/",
					params: {
						topics: n.join(","),
						types: e.join(","),
						type_id: t.type_id,
						time: (new Date).getTime()
					}
				}).success(function(e) {
					t.selected_questions_count = e.count, l.openAssignmentEditor(t)
				})
			}
		}, null == l.assignments_types && (l.assignments_types = [], r({
			method: "GET",
			url: "/assignments/types/",
			params: {
				time: (new Date).getTime()
			}
		}).success(function(e) {
			l.assignments_types = e, l.loading_status++
		})), l.assignmentsSearch = function(e, t) {
			e = angular.copy(Array.from(e).sort()), t = angular.copy(t);
			l.areAssignmentLoading && (l.loading_status--, l.areAssignmentLoading = !1), l.assignments = [], l.assignments_list_of_id_in_calendar = [], l.assignments_list__date = [], l.assignments_list__date__last_showed = "", l.assignments_list__year__last_showed = "";
			var i = (new Date).getTime();
			l.assignmentsSearchStartTime = i, r({
				method: "GET",
				url: "/assignments/api_search/",
				params: {
					isArchive: t ? 1 : 0,
					typeIds: e.join(","),
					time: i
				}
			}).success(function(n) {
				l.assignmentsSearchStartTime === i && (angular.forEach(n, function(e, t) {
					n[t].classes_settings = e.classes_settings, n[t].pupils_settings = e.pupils_settings, n[t].topics_settings_old = e.topics_settings, n[t].topics_array_old = angular.copy(e.topics_array)
				}), l.assignments = n, l.assignments_list_update(), l.areAssignmentLoading || (l.loading_status++, l.areAssignmentLoading = !0))
			}).error(function(e) {
				alert("Ошибка загрузки данных :( Попробуйте обновить страницу.")
			})
		}, null == l.assignments && l.assignmentsSearch(l.filterByType, l.isArchive), l.assignments_list_update = function() {
			l.assignments = e("orderBy")(l.assignments, "date_for_list", !0);
			var t = 0,
				r = l.assignments.length;
			l.eventSources[0] = [], l.assignments_list_of_id_in_calendar = [], angular.forEach(l.assignments, function(n, e) {
				if(l.assignments_list__date.inArray(n.date_for_list) || l.assignments_list__date.push(n.date_for_list), !l.assignments_list_of_id_in_calendar.inArray(n.id)) {
					var i = "assignments_type_";
					1 == n.status_id ? i += "0" : i += n.type_id, angular.forEach(n.intervals_of_dates_ng, function(e, t) {
						l.eventSources[0].push({
							data: n,
							editable: !1,
							title: n.title,
							start: new Date(e.date_start.y, e.date_start.m, e.date_start.d),
							end: new Date(e.date_stop.y, e.date_stop.m, e.date_stop.d),
							className: [i, "assignments_type_hover_by_id_" + n.id, "assignments_date_type_" + e.type]
						})
					}), l.assignments_list_of_id_in_calendar.push(n.id)
				}
				l.assignments[e].list_render_block1_if1 = a.show_assignments_list__now_date(n.date_for_list, t, !1, !1), l.assignments[e].list_render_block1_if1 && (l.assignments[e].list_render_block1_if2 = !(!a.show_assignments_list__year(l.now_date_year) && 0 != t)), l.assignments[e].list_render_block2_if1 = !(!a.show_assignments_list__year(n.date_for_list__year) || 0 == t && a.show_assignments_list__now_date(n.date_for_list, t) && l.now_date_year == n.date_for_list__year), l.assignments[e].list_render_block2_if2 = a.show_assignments_list__date(l.assignments_list__date, n.date_for_list), l.assignments[e].list_render_block3_if1 = a.show_assignments_list__now_date(n.date_for_list, t, !0, !(t != r - 1)), l.assignments[e].list_render_block3_if1 && (l.assignments[e].list_render_block3_if2 = a.show_assignments_list__year(l.now_date_year)), t++
			}), l.assignments_list__is_now_date = l.assignments_list__date.inArray(l.now_date)
		}, l.$watch("assignment_in_editor", function(e) {
			switch(null != e.title && "" != e.title && null != e.selected_questions_count && null != e.questions_number && e.selected_questions_count >= e.questions_number ? 2 == e.max_step && (l.assignment_in_editor.max_step = 4) : 2 < e.max_step && (l.assignment_in_editor.max_step = 2), e.result_view_type) {
				case "1":
					l.assignment_in_editor.result_view = "0", l.assignment_in_editor.is_tip = "0", l.assignment_in_editor.is_explanation = "0";
					break;
				case "2":
					l.assignment_in_editor.result_view = "1", l.assignment_in_editor.is_tip = "0", l.assignment_in_editor.is_explanation = "0";
					break;
				case "3":
					l.assignment_in_editor.result_view = "1", l.assignment_in_editor.is_tip = "1", l.assignment_in_editor.is_explanation = "0";
					break;
				case "4":
					l.assignment_in_editor.result_view = "1", l.assignment_in_editor.is_tip = "0", l.assignment_in_editor.is_explanation = "1";
					break;
				default:
					l.assignment_in_editor.result_view_type = "3", l.assignment_in_editor.result_view = "1", l.assignment_in_editor.is_tip = "1", l.assignment_in_editor.is_explanation = "0"
			}
		}, !0), null == l.pupils_classes && (l.pupils_classes = [], r({
			method: "GET",
			url: "/pupils/classes/",
			params: {
				time: (new Date).getTime()
			}
		}).success(function(e) {
			l.pupils_classes = e, l.loading_status++
		})), null == l.pupils_users && (l.pupils_users = [], r({
			method: "GET",
			url: "/pupils/users/",
			params: {
				time: (new Date).getTime()
			}
		}).success(function(e) {
			l.pupils_users = e, l.loading_status++
		})), null == l.curriculums && (l.curriculums = [], r({
			method: "GET",
			url: "/questions/curriculums/",
			params: {
				time: (new Date).getTime()
			}
		}).success(function(e) {
			l.curriculums = e, l.loading_status++
		}))
	}]).controller("AssignmentsCalendarController", ["$scope", "$rootScope", "$filter", "$http", "$sce", function(l, s, e, o, t) {
		var n = new Date;
		n.getDate(), n.getMonth(), n.getFullYear();
		l.math_round = function(e) {
			return Math.round(e)
		}, l.eventSource = {}, l.events = [], l.alertOnEventClick = function(t, e, n, i) {
			try {
				s.loadDefaultTags()
			} catch(e) {
				console.log(e.toString())
			}
			if(null == t.data || t.data.selected_questions_count) s.openAssignmentEditor(t.data);
			else {
				s.is_archive = !1, s.is_remove = !1, s.assignment_loading_in_editor = !0, s.assignment_success_in_editor = !1, s.assignment_error_in_editor = !1, s.assignment_in_editor = angular.copy(t.data), $("#ng_assignment_window").modal("show");
				var r = [];
				angular.forEach(t.data.topics, function(e) {
					r.push(parseInt(e.id))
				});
				var a = [1, 2, 3, 4, 5, 8, 11];
				3 == s.assignment_in_editor.type_id && (a = [16]), 4 == s.assignment_in_editor.type_id && (a = [6]), 1 == s.assignment_in_editor.is_self_scan && (a = [1, 2]), o({
					method: "GET",
					url: "/assignments/selected_questions_count/",
					params: {
						topics: r.join(","),
						types: a.join(","),
						type_id: t.data.type_id,
						time: (new Date).getTime()
					}
				}).success(function(e) {
					t.data.selected_questions_count = e.count, s.openAssignmentEditor(t.data)
				})
			}
		}, l.alertOnMouseOver = function(e, t, n, i) {
			null != e.data && null != e.data.id && $(".assignments_type_hover_by_id_" + e.data.id).addClass("assignments_type-hover")
		}, l.alertOnMouseOut = function(e, t, n, i) {
			null != e.data && null != e.data.id && $(".assignments_type_hover_by_id_" + e.data.id).removeClass("assignments_type-hover")
		}, l.alertOnDrop = function(e, t, n, i, r, a, s, o) {
			l.alertMessage = "Event Droped to make dayDelta " + t
		}, l.alertOnResize = function(e, t, n, i, r, a, s) {
			l.alertMessage = "Event Resized to make dayDelta " + n
		}, l.remove = function(e) {
			l.events.splice(e, 1)
		}, l.changeView = function(e, t) {
			t.fullCalendar("changeView", e)
		}, l.renderCalender = function(e) {
			e.fullCalendar("render")
		}, l.uiConfig = {
			calendar: {
				height: 800,
				editable: !0,
				header: {
					left: "prev,next today",
					center: "title",
					right: ""
				},
				eventClick: l.alertOnEventClick,
				eventDrop: l.alertOnDrop,
				eventResize: l.alertOnResize,
				eventMouseover: l.alertOnMouseOver,
				eventMouseout: l.alertOnMouseOut,
				firstDay: 1,
				monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
				monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
				dayNames: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
				dayNamesShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
				buttonText: {
					prev: "&nbsp;&#9668;&nbsp;",
					next: "&nbsp;&#9658;&nbsp;",
					prevYear: "&nbsp;&lt;&lt;&nbsp;",
					nextYear: "&nbsp;&gt;&gt;&nbsp;",
					today: "сегодня",
					month: "месяц",
					week: "неделя",
					day: "день"
				}
			}
		}, s.eventSources = [l.events, l.eventSource]
	}]).controller("AssignmentsEditorController", ["$scope", "$rootScope", "$filter", "$http", "$sce", "$compile", function(o, l, e, c, t, n) {
		function i(e, t) {
			jQuery(t.handle).html(t.value)
		}
		o.onlyNumbers = /^[0-9]+$/, o.set_questions_number_recomendation = function() {
			-1 == l.assignment_in_editor.questions_number && (40 <= l.assignment_in_editor.selected_questions_count ? l.assignment_in_editor.questions_number = 30 : 30 <= l.assignment_in_editor.selected_questions_count ? l.assignment_in_editor.questions_number = 20 : 0 <= l.assignment_in_editor.selected_questions_count && (l.assignment_in_editor.questions_number = l.assignment_in_editor.selected_questions_count))
		}, o.trustAsHtmlST = function(e) {
			return t.trustAsHtml(e)
		}, o.getQuestionCountsArrayForSelected = function(e, t) {
			return void 0 !== e && (e = parseInt(e)), e <= 0 && (e = 1), void 0 !== t && (t = parseInt(t)), t <= 0 && (t = 1), [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, e, t].sort(function(e, t) {
				return e - t
			}).filter(function(e, t, n) {
				return t == n.indexOf(e) ? 1 : 0
			})
		}, o.changeAssignmentType = function(e, t, n) {
			1 == t && (l.assignment_in_editor.type_id = e, l.assignment_in_editor.type_title = n, l.assignment_in_editor.type_id, 2 == l.assignment_in_editor.type_id && (l.assignment_in_editor.is_self_scan = "1"), 6 == l.assignment_in_editor.type_id ? o.changeStep(2) : o.changeStep(1))
		}, l.topic_info_cache = {}, o.changeStep = function(e) {
			var t = !1;
			if(6 == l.assignment_in_editor.type_id ? l.assignment_in_editor.max_step = 2 : 1 < e && e < 10 && (t || 0 != l.assignment_in_editor.topics_array.length && l.assignment_in_editor.change_topics || 0 != l.assignment_in_editor.settings_array.length && !l.assignment_in_editor.change_topics || (t = !0, alert("Нужно выбрать хотя бы одну тему.")), !t && l.assignment_in_editor.selected_questions_count < 1 && 5 != l.assignment_in_editor.type_id && (t = !0, 5 == l.assignment_in_editor.type_id ? alert("В выбранных темах нет включённых вопросов с тэгом «Итоговый контроль». Добавьте или включите в них вопросы с тэгом «Итоговый контроль» или выберите другие темы.") : alert("В выбранных темах нет включённых вопросов. Добавьте или включите в них вопросы или выберите другие темы.")), !t && l.assignment_in_editor.max_step < 2 && (l.assignment_in_editor.max_step = 2), o.set_questions_number_recomendation()), 2 < e && e < 10 && (t || "" != l.assignment_in_editor.title || (t = !0, 6 != l.assignment_in_editor.type_id ? alert("Необходимо в настройках ввести название задания.") : alert("Необходимо ввести название.")), !t && l.assignment_in_editor.selected_questions_count < l.assignment_in_editor.questions_number && (t = !0, alert("Уменьшите количество вопросов для теста в настройках, так как в выбранных темах их меньше.")), !t && l.assignment_in_editor.max_step < 3 && (l.assignment_in_editor.max_step = 4)), t || 1 < (l.assignment_in_editor.step = e) && e < 10 && l.assignment_in_editor.selected_questions_count < l.assignment_in_editor.questions_number && (l.assignment_in_editor.questions_number = l.assignment_in_editor.selected_questions_count), 1 == e && 0 < l.assignment_in_editor.id) {
				var a = l.assignment_in_editor.id;
				angular.forEach(l.assignment_in_editor.topics_settings, function(t, n) {
					var i = "topic_" + n;
					if(0 <= [3, 4].indexOf(l.assignment_in_editor.type_id) && (i = i + "_" + l.assignment_in_editor.type_id), (t.question_count = "?") == t.question_count)
						if(null != l.topic_info_cache[i]) {
							var e = l.topic_info_cache[i];
							5 == l.assignment_in_editor.type_id ? (t.question_count = e.question_count_total_test, t.question_count_final_test = e.question_count_final_test, t.question_count_self_test = e.question_count_self_test) : (t.question_count = e.question_count, t.question_count_final_test = e.question_count, t.question_count_self_test = e.question_count), l.assignment_in_editor.topics_settings_old[n].question_count = t.question_count, l.assignment_in_editor.topics_settings_old[n].question_count_final_test = t.question_count_final_test, l.assignment_in_editor.topics_settings_old[n].question_count_self_test = t.question_count_self_test
						} else {
							var r = [1, 2, 3, 4, 5, 8, 11];
							3 == l.assignment_in_editor.type_id && (r = [16]), 4 == l.assignment_in_editor.type_id && (r = [6]), 1 == l.assignment_in_editor.is_self_scan && (r = [1, 2]), c({
								method: "GET",
								url: "/assignments/getQuestionsCountsOfSchoolTopic/",
								params: {
									topic_id: n,
									types: r.join(","),
									time: (new Date).getTime()
								}
							}).success(function(e) {
								l.topic_info_cache[i] = e, l.assignment_in_editor.id == a && (5 == l.assignment_in_editor.type_id ? (t.question_count = e.question_count_total_test, t.question_count_final_test = e.question_count_final_test, t.question_count_self_test = e.question_count_self_test) : (t.question_count = e.question_count, t.question_count_final_test = e.question_count, t.question_count_self_test = e.question_count), l.assignment_in_editor.topics_settings_old[n].question_count = t.question_count, l.assignment_in_editor.topics_settings_old[n].question_count_final_test = t.question_count_final_test, l.assignment_in_editor.topics_settings_old[n].question_count_self_test = t.question_count_self_test)
							})
						}
				})
			}
		}, o.changeTopics = function(e, t) {
			if((l.assignment_in_editor.change_topics = e) && t) l.assignment_in_editor.topics_settings = angular.copy(l.assignment_in_editor.topics_settings_old), l.assignment_in_editor.topics_array = angular.copy(l.assignment_in_editor.topics_array_old);
			else if(e) l.assignment_in_editor.selected_questions_count = 0, l.assignment_in_editor.topics_array = [];
			else {
				l.assignment_in_editor.topics_settings = angular.copy(l.assignment_in_editor.topics_settings_old), l.assignment_in_editor.topics_array = angular.copy(l.assignment_in_editor.topics_array_old);
				var n = [];
				angular.forEach(l.assignment_in_editor.topics, function(e) {
					n.push(parseInt(e.id))
				}), l.assignment_in_editor.selected_questions_count = "?";
				var i = [1, 2, 3, 4, 5, 8, 11];
				3 == l.assignment_in_editor.type_id && (i = [16]), 4 == l.assignment_in_editor.type_id && (i = [6]), 1 == l.assignment_in_editor.is_self_scan && (i = [1, 2]), c({
					method: "GET",
					url: "/assignments/selected_questions_count/",
					params: {
						topics: n.join(","),
						types: i.join(","),
						type_id: l.assignment_in_editor.type_id,
						time: (new Date).getTime()
					}
				}).success(function(e) {
					l.assignment_in_editor.change_topics || (l.assignment_in_editor.selected_questions_count = e.count), o.set_questions_number_recomendation()
				})
			}
		}, o.removeTopic = function(n, e) {
			l.assignment_in_editor.topics_array.splice(l.assignment_in_editor.topics_array.indexOf(n), 1), l.assignment_in_editor.selected_questions_count < e ? l.assignment_in_editor.selected_questions_count = 0 : l.assignment_in_editor.selected_questions_count -= e, angular.forEach(l.assignment_in_editor.recomendations.title.value, function(e, t) {
				null != e.topic_id && e.topic_id == n && l.assignment_in_editor.recomendations.title.value.splice(t, 1)
			});
			var t = [];
			angular.forEach(l.assignment_in_editor.topics_array, function(e) {
				t.push(parseInt(e))
			}), 0 == t.length && (l.assignment_in_editor.max_step = 1);
			var i = [1, 2, 3, 4, 5, 8, 11];
			3 == l.assignment_in_editor.type_id && (i = [16]), 4 == l.assignment_in_editor.type_id && (i = [6]), 1 == l.assignment_in_editor.is_self_scan && (i = [1, 2]), c({
				method: "GET",
				url: "/assignments/selected_questions_count_by_sch/",
				params: {
					topics: t.join(","),
					types: i.join(","),
					type_id: l.assignment_in_editor.type_id,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				l.assignment_in_editor.selected_questions_count = e.count, o.set_questions_number_recomendation()
			})
		}, o.finalTestForTopic = function(e, t, n) {
			t && (l.assignment_in_editor.topics_settings[e].id = 0, l.assignment_in_editor.topics_settings[e].is_final_test = !1, l.assignment_in_editor.topics_settings[e].date_start_date = l.assignment_in_editor.date_start_date, l.assignment_in_editor.topics_settings[e].date_stop_date = l.assignment_in_editor.date_stop_date, l.assignment_in_editor.topics_settings[e].attempts_number = 3, l.assignment_in_editor.topics_settings[e].questions_number = 1, l.assignment_in_editor.topics_settings[e].time_limit = 0, l.assignment_in_editor.topics_settings[e].question_count_final_test = null == n ? 0 : n), l.assignment_in_editor.topics_settings[e].is_final_test = t
		}, o.selfTestForTopic = function(e, t, n) {
			t && (l.assignment_in_editor.topics_settings[e].id = 0, l.assignment_in_editor.topics_settings[e].is_self_test = !1, l.assignment_in_editor.topics_settings[e].self_questions_number = 1, l.assignment_in_editor.topics_settings[e].self_time_limit = 0, l.assignment_in_editor.topics_settings[e].question_count_self_test = null == n ? 0 : n), l.assignment_in_editor.topics_settings[e].is_self_test = t
		}, l.defaultTags = {
			ege_a: [],
			ege_b: [],
			gia_a: [],
			gia_b: []
		}, l.isLoadedDefaultTags = !1, l.loadDefaultTags = function() {
			l.isLoadedDefaultTags || (l.isLoadedDefaultTags = !0, c({
				method: "POST",
				url: "/questions/api_get_question_user_tags/",
				params: {
					type: "ege_a,ege_b,gia_a,gia_b",
					time: (new Date).getTime()
				}
			}).success(function(e) {
				e.status && "success" === e.status && angular.forEach(e.data, function(e, t) {
					l.defaultTags[t] = e
				})
			}))
		}, o.addFilter = function(e) {
			e += "";
			var t = angular.copy(l.new_assignment_filter);
			l.assignment_in_editor.filter[e] || (l.assignment_in_editor.filter[e] = []), l.assignment_in_editor.filter[e].push(t)
		}, o.removeFilter = function(e, t) {
			l.assignment_in_editor.filter[e].splice(t, 1), 0 == l.assignment_in_editor.filter[e].length && delete l.assignment_in_editor.filter[e]
		}, o.clearFilters = function(e) {
			var t = !!Object.keys(l.assignment_in_editor.filter).length;
			t && (t = confirm("Удалить все фильтры?")), t && (l.assignment_in_editor.filter = {})
		}, o.setFilters = function(e) {
			var t = !Object.keys(l.assignment_in_editor.filter).length;
			if(t || (t = confirm("Заменить все фильтры?")), t) switch(e) {
				case "uniform":
					0 < l.assignment_in_editor.selected_questions_count && o.uniformFilters();
					break;
				case "ege":
					o.setDefaultTagsFilters({
						ege_a: "Сколько частей A?",
						ege_b: "Сколько частей B?"
					});
					break;
				case "gia":
					o.setDefaultTagsFilters({
						gia_a: "Сколько частей A?",
						gia_b: "Сколько частей B?"
					})
			}
		}, o.uniformFilters = function() {
			var n = prompt("Сколько вопросов будет в варианте теста?", l.assignment_in_editor.selected_questions_count);
			(n = parseInt(n)) > l.assignment_in_editor.selected_questions_count && (n = l.assignment_in_editor.selected_questions_count);
			var r = n / l.assignment_in_editor.selected_questions_count,
				a = 0;
			l.assignment_in_editor.filter = {}, angular.forEach(l.curriculums, function(e, t) {
				angular.forEach(e.sections, function(e, t) {
					angular.forEach(e.topics, function(e, t) {
						if(-1 != l.assignment_in_editor.topics_array.indexOf(e.id)) {
							var n = e.id + "";
							l.assignment_in_editor.filter[n] = [];
							var i = angular.copy(l.new_assignment_filter);
							e.question_count && "?" != e.question_count && (i.ques_count_in_test = Math.floor(e.question_count * r), i.ques_count_in_test || (i.ques_count_in_test = 1), a += i.ques_count_in_test, l.assignment_in_editor.filter[n].push(i)), 0 == l.assignment_in_editor.filter[n].length && delete l.assignment_in_editor.filter[n]
						}
					})
				})
			}), angular.forEach(l.assignment_in_editor.filter, function(e, t) {
				a < n && (l.assignment_in_editor.filter[t][0].ques_count_in_test++, a++)
			}), l.assignment_in_editor.questions_number = a
		}, o.setDefaultTagsFilters = function(e) {
			l.assignment_in_editor.filter = {}, l.assignment_in_editor.filter[l.filter_general_topic_id] = [];
			var a = 1;
			angular.forEach(e, function(e, t) {
				if(0 < l.defaultTags[t].length) {
					var n = prompt(e, l.defaultTags[t].length);
					(n = parseInt(n)) > l.defaultTags[t].length && (n = l.defaultTags[t].length);
					for(var i = 0; i < n; i++) {
						var r = angular.copy(l.new_assignment_filter);
						r.order_id = a, a++, r.tags.push(l.defaultTags[t][i]), r.ques_count_in_test = 1, l.assignment_in_editor.filter[l.filter_general_topic_id].push(r)
					}
				}
			}), 0 == l.assignment_in_editor.filter[l.filter_general_topic_id].length && delete l.assignment_in_editor.filter[l.filter_general_topic_id]
		}, o.autocomplete_topic = {
			value: ""
		}, o.autocomplete_options_topics = function(a) {
			return {
				options: {
					html: !0,
					focusOpen: !0,
					onlySelect: !0,
					maxHeight: 250,
					outWidth: 6,
					position: {
						my: "left top",
						at: "left bottom",
						collision: "none"
					},
					source: function(e, t) {
						var n = {},
							r = [],
							i = [];
						angular.forEach(l.curriculums, function(e, t) {
							e.id == a && angular.forEach(e.sections, function(i, e) {
								angular.forEach(i.topics, function(e, t) {
									if(-1 == l.assignment_in_editor.topics_array.indexOf(e.id)) {
										var n = angular.copy(e);
										n.value = n.title, n.section_title = i.title, n.source = e, r.push(n)
									}
								})
							})
						}), r = o.autocomplete_options_pupils_users.methods.filter(r, e.term), angular.forEach(r, function(e) {
							n[e.section_title] = n[e.section_title] || [], n[e.section_title].push(e)
						}), angular.forEach(n, function(e, t) {
							i.push({
								groupLabel: t
							}), i = i.concat(e)
						}), i.length || i.push({
							groupLabel: "<small><i>темы не найдены</i></small>"
						}), t(i)
					}
				},
				events: {
					select: function(e, n) {
						if(-1 == l.assignment_in_editor.topics_array.indexOf(n.item.id)) {
							l.assignment_in_editor.topics_array.push(n.item.id);
							var i = 0,
								r = 0,
								a = 0;
							angular.forEach(l.assignment_in_editor.topics_settings, function(e, t) {
								parseInt(t) == n.item.id && null != e && (i = 5 == l.assignment_in_editor.type_id ? parseInt(e.question_count_total_test) : parseInt(e.question_count), r = parseInt(e.question_count_self_test), a = parseInt(e.question_count_final_test))
							}), l.assignment_in_editor.topics_settings[n.item.id] = {
								id: 0,
								question_count: i,
								is_final_test: !1,
								date_start_date: l.assignment_in_editor.date_start_date,
								date_stop_date: l.assignment_in_editor.date_stop_date,
								attempts_number: 3,
								questions_number: 5,
								time_limit: 0,
								question_count_final_test: a,
								is_self_test: !1,
								self_questions_number: 5,
								self_time_limit: 0,
								question_count_self_test: r
							}, "?" !== l.assignment_in_editor.selected_questions_count && 0 != n.item.source.question_count && (5 == l.assignment_in_editor.type_id ? "?" !== n.item.source.question_count_total_test && (l.assignment_in_editor.selected_questions_count += n.item.source.question_count_total_test) : "?" !== n.item.source.question_count && (l.assignment_in_editor.selected_questions_count += n.item.source.question_count)), l.assignment_in_editor.recomendations.title.value.push({
								topic_id: n.item.id,
								label: n.item.label,
								value: n.item.value
							});
							var t = [];
							angular.forEach(l.assignment_in_editor.topics_array, function(e) {
								t.push(parseInt(e))
							}), 0 < t.length && 1 == l.assignment_in_editor.max_step && (l.assignment_in_editor.max_step = 2);
							var s = [1, 2, 3, 4, 5, 8, 11];
							3 == l.assignment_in_editor.type_id && (s = [16]), 4 == l.assignment_in_editor.type_id && (s = [6]), 1 == l.assignment_in_editor.is_self_scan && (s = [1, 2]), c({
								method: "GET",
								url: "/assignments/selected_questions_count_by_sch/",
								params: {
									topics: t.join(","),
									types: s.join(","),
									type_id: l.assignment_in_editor.type_id,
									time: (new Date).getTime()
								}
							}).success(function(e) {
								l.assignment_in_editor.selected_questions_count = e.count, o.set_questions_number_recomendation()
							})
						}
						e.preventDefault()
					}
				},
				methods: {}
			}
		}, o.autocomplete_subject_cache = {}, o.autocomplete_options_subject = {
			options: {
				minLength: 1,
				onlySelect: !1,
				maxHeight: 250,
				outWidth: 6,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: function(e, i) {
					var r = e.term;
					r in o.autocomplete_subject_cache ? i(o.autocomplete_subject_cache[r]) : $.getJSON("/questions/getstrsubjects/?time=" + (new Date).getTime(), e, function(e, t, n) {
						o.autocomplete_subject_cache[r] = e, i(e)
					})
				}
			},
			events: {
				select: function(e, t) {
					l.assignment_in_editor.sch_subject_title = t.item.value, e.preventDefault()
				}
			},
			methods: {}
		}, o.autocomplete_options_title = {
			options: {
				html: !0,
				focusOpen: !0,
				onlySelect: !1,
				maxHeight: 250,
				outWidth: 6,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: function(e, t) {
					var n = angular.copy(l.assignment_in_editor.recomendations.title.value),
						i = [];
					(n = o.autocomplete_options_pupils_users.methods.filter(n, e.term)).length ? (i.push({
						groupLabel: "Предложения по названию задания"
					}), i = i.concat(n)) : i.push({
						groupLabel: "<small><i>предложения по названию заданий не найдены</i></small>"
					}), t(i)
				}
			},
			events: {
				select: function(e, t) {
					l.assignment_in_editor.title = t.item.value, e.preventDefault()
				}
			},
			methods: {}
		}, o.removePupil = function(e) {
			l.assignment_in_editor.pupils_array.splice(l.assignment_in_editor.pupils_array.indexOf(e), 1)
		}, o.individualSettings = function(e, t, n) {
			if(l.assignment_in_editor.pupils_settings[e] || (l.assignment_in_editor.pupils_settings[e] = {
					id: 0,
					active: !1,
					date_stop_date: l.assignment_in_editor.date_stop_date,
					date_start_date: l.assignment_in_editor.date_start_date,
					attempts_number: l.assignment_in_editor.attempts_number,
					bonus_enabled: 0,
					bonus_attendance_percent_condition: 90,
					bonus_score_percent: 5,
					penalty_enabled: 0,
					penalty_after_attempt_number: 1,
					penalty_step_of_increasing_by_attempts: 1,
					penalty_score_percent: 5
				}), t) switch(l.assignment_in_editor.pupils_settings[e].id = 0, n) {
				case "active":
					l.assignment_in_editor.pupils_settings[e].date_stop_date = l.assignment_in_editor.date_stop_date, l.assignment_in_editor.pupils_settings[e].date_start_date = l.assignment_in_editor.date_start_date, l.assignment_in_editor.pupils_settings[e].attempts_number = l.assignment_in_editor.attempts_number;
					break;
				case "bonus_enabled":
					l.assignment_in_editor.pupils_settings[e].bonus_attendance_percent_condition = 90, l.assignment_in_editor.pupils_settings[e].bonus_score_percent = 5;
					break;
				case "penalty_enabled":
					l.assignment_in_editor.pupils_settings[e].penalty_after_attempt_number = 1, l.assignment_in_editor.pupils_settings[e].penalty_step_of_increasing_by_attempts = 1, l.assignment_in_editor.pupils_settings[e].penalty_score_percent = 5
			}
			l.assignment_in_editor.pupils_settings[e][n] = t
		}, o.autocomplete_pupil = {
			value: ""
		}, o.autocomplete_options_pupils_users = {
			options: {
				html: !0,
				focusOpen: !0,
				onlySelect: !0,
				maxHeight: 250,
				outWidth: 6,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: function(e, t) {
					var n = angular.copy(l.pupils_users),
						i = [];
					angular.forEach(n, function(e, t) {
						-1 == l.assignment_in_editor.pupils_array.indexOf(e.id) && i.push(e)
					}), (i = o.autocomplete_options_pupils_users.methods.filter(i, e.term)).length || i.push({
						groupLabel: "<small><i>не найдено</i></small>"
					}), t(i)
				}
			},
			events: {
				select: function(e, t) {
					-1 == l.assignment_in_editor.pupils_array.indexOf(t.item.id) && (l.assignment_in_editor.pupils_array.push(t.item.id), l.assignment_in_editor.pupils_settings[t.item.id] = {
						id: 0,
						active: !1,
						date_stop_date: l.assignment_in_editor.date_stop_date,
						date_start_date: l.assignment_in_editor.date_start_date,
						attempts_number: l.assignment_in_editor.attempts_number,
						bonus_enabled: 0,
						bonus_attendance_percent_condition: 90,
						bonus_score_percent: 5,
						penalty_enabled: 0,
						penalty_after_attempt_number: 1,
						penalty_step_of_increasing_by_attempts: 1,
						penalty_score_percent: 5
					}), e.preventDefault()
				}
			},
			methods: {}
		}, o.removeClass = function(e) {
			l.assignment_in_editor.classes_array.splice(l.assignment_in_editor.classes_array.indexOf(e), 1)
		}, o.individualSettingsForClass = function(e, t, n) {
			if(l.assignment_in_editor.classes_settings[e] || (l.assignment_in_editor.classes_settings[e] = {
					id: 0,
					active: !1,
					date_stop_date: l.assignment_in_editor.date_stop_date,
					date_start_date: l.assignment_in_editor.date_start_date,
					attempts_number: l.assignment_in_editor.attempts_number,
					bonus_enabled: 0,
					bonus_attendance_percent_condition: 90,
					bonus_score_percent: 5,
					penalty_enabled: 0,
					penalty_after_attempt_number: 1,
					penalty_step_of_increasing_by_attempts: 1,
					penalty_score_percent: 5
				}), t) switch(l.assignment_in_editor.classes_settings[e].id = 0, n) {
				case "active":
					l.assignment_in_editor.classes_settings[e].date_stop_date = l.assignment_in_editor.date_stop_date, l.assignment_in_editor.classes_settings[e].date_start_date = l.assignment_in_editor.date_start_date, l.assignment_in_editor.classes_settings[e].attempts_number = l.assignment_in_editor.attempts_number;
					break;
				case "bonus_enabled":
					l.assignment_in_editor.classes_settings[e].bonus_attendance_percent_condition = 90, l.assignment_in_editor.classes_settings[e].bonus_score_percent = 5;
					break;
				case "penalty_enabled":
					l.assignment_in_editor.classes_settings[e].penalty_after_attempt_number = 1, l.assignment_in_editor.classes_settings[e].penalty_step_of_increasing_by_attempts = 1, l.assignment_in_editor.classes_settings[e].penalty_score_percent = 5
			}
			l.assignment_in_editor.classes_settings[e][n] = t
		}, o.autocomplete_class = {
			value: ""
		}, o.autocomplete_options_pupils_classes = {
			options: {
				html: !0,
				focusOpen: !0,
				onlySelect: !0,
				maxHeight: 250,
				outWidth: 6,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: function(e, t) {
					var n = angular.copy(l.pupils_classes),
						i = [];
					angular.forEach(n, function(e, t) {
						-1 == l.assignment_in_editor.classes_array.indexOf(e.class_id) && i.push(e)
					}), (i = o.autocomplete_options_pupils_classes.methods.filter(i, e.term)).length || i.push({
						groupLabel: "<small><i>не найдено</i></small>"
					}), t(i)
				}
			},
			events: {
				select: function(e, t) {
					-1 == l.assignment_in_editor.classes_array.indexOf(t.item.class_id) && (l.assignment_in_editor.classes_array.push(t.item.class_id), l.assignment_in_editor.classes_settings[t.item.class_id] = {
						id: 0,
						active: !1,
						date_stop_date: l.assignment_in_editor.date_stop_date,
						date_start_date: l.assignment_in_editor.date_start_date,
						attempts_number: l.assignment_in_editor.attempts_number,
						bonus_enabled: 0,
						bonus_attendance_percent_condition: 90,
						bonus_score_percent: 5,
						penalty_enabled: 0,
						penalty_after_attempt_number: 1,
						penalty_step_of_increasing_by_attempts: 1,
						penalty_score_percent: 5
					}), e.preventDefault()
				}
			},
			methods: {}
		}, o.dateOptions = {
			dateFormat: "d MM yy",
			changeMonth: !1,
			changeYear: !1,
			numberOfMonths: 1
		}, o.sliderOptions = {
			orientation: "horizontal",
			change: i,
			slide: i
		}, o.archiveAssignment = function(e) {
			var t = "Убрать задание в архив?";
			0 == e && (t = "Убрать задание из архива?"), confirm(t) && (l.is_archive = !0, o.spliceAssignment("/assignments/api_archive_assignment/", {
				archive: e
			}))
		}, o.removeAssignment = function() {
			confirm("Удалить задание?") && (l.is_remove = !0, o.spliceAssignment("/assignments/api_remove_assignment/"))
		}, o.spliceAssignment = function(e, t) {
			l.assignment_loading_in_editor = !0, l.assignment_success_in_editor = !1, l.assignment_error_in_editor = !1, t || (t = {}), t.id = o.assignment_in_editor.id, c({
				method: "POST",
				url: e,
				params: {
					time: (new Date).getTime()
				},
				data: t
			}).success(function(e) {
				null == e.error && e.success ? (angular.forEach(l.assignments, function(e, t) {
					e.id == o.assignment_in_editor.id && l.assignments.splice(t, 1)
				}), l.assignments_list_update(), l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !0, l.assignment_error_in_editor = !1) : (l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !1, l.assignment_error_in_editor = !0)
			}).error(function(e) {
				l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !1, l.assignment_error_in_editor = !0
			})
		}, o.assignmentSave = function() {
			var e = !1;
			if(6 != l.assignment_in_editor.type_id && (e || 0 != l.assignment_in_editor.topics_array.length && l.assignment_in_editor.change_topics || 0 != l.assignment_in_editor.settings_array.length && !l.assignment_in_editor.change_topics || (e = !0, alert("Нужно выбрать хотя бы одну тему.")), !e && l.assignment_in_editor.selected_questions_count < 1 && 5 != l.assignment_in_editor.type_id && (e = !0, 5 == l.assignment_in_editor.type_id ? alert("В выбранных темах нет включённых вопросов с тэгом «Итоговый контроль». Добавьте или включите в них вопросы с тэгом «Итоговый контроль» или выберите другие темы.") : alert("В выбранных темах нет включённых вопросов. Добавьте или включите в них вопросы или выберите другие темы."))), e || "" != l.assignment_in_editor.title || (e = !0, 6 != l.assignment_in_editor.type_id ? alert("Необходимо в настройках ввести название задания.") : alert("Необходимо ввести название.")), !e && l.assignment_in_editor.selected_questions_count < l.assignment_in_editor.questions_number && (e = !0, alert("Уменьшите количество вопросов для теста в настройках, так как в выбранных темах их меньше.")), e || 0 != l.assignment_in_editor.classes_array.length || 0 != l.assignment_in_editor.pupils_array.length || (e = 6 != l.assignment_in_editor.type_id ? !confirm("Вы не указали учеников, которые будут решать это задание. Продолжить?") : !confirm("Вы не указали учеников. Продолжить?")), !e) {
				l.assignment_loading_in_editor = !0, l.assignment_success_in_editor = !1, l.assignment_error_in_editor = !1;
				var t = [];
				for(var n in o.assignment_in_editor.user_access) {
					var i = o.assignment_in_editor.user_access[n],
						r = parseInt(i.user_id); - 1 !== o.assignment_in_editor.user_access_array.indexOf(r) && t.push(i)
				}
				c({
					method: "POST",
					url: "/assignments/api_save_assignment/",
					params: {
						time: (new Date).getTime()
					},
					data: {
						attempts_number: o.assignment_in_editor.attempts_number,
						bg_file: o.assignment_in_editor.bg_file,
						change_topics: o.assignment_in_editor.change_topics,
						classes_array: o.assignment_in_editor.classes_array,
						classes_settings: o.assignment_in_editor.classes_settings,
						content_access_passing_score_best_percent: o.assignment_in_editor.content_access_passing_score_best_percent,
						date_start_date: o.assignment_in_editor.date_start_date,
						date_start_total_test_date: o.assignment_in_editor.date_start_total_test_date,
						date_stop_date: o.assignment_in_editor.date_stop_date,
						date_stop_total_test_date: o.assignment_in_editor.date_stop_total_test_date,
						filter: o.assignment_in_editor.filter,
						id: o.assignment_in_editor.id,
						is_adaptive: o.assignment_in_editor.is_adaptive,
						is_explanation: o.assignment_in_editor.is_explanation,
						is_finish_certificate: o.assignment_in_editor.is_finish_certificate,
						is_gradual_content_access: o.assignment_in_editor.is_gradual_content_access,
						is_question_author: o.assignment_in_editor.is_question_author,
						is_question_time_limit: o.assignment_in_editor.is_question_time_limit,
						is_result_after_stop: o.assignment_in_editor.is_result_after_stop,
						is_self_scan: o.assignment_in_editor.is_self_scan,
						is_show_content_before_test: o.assignment_in_editor.is_show_content_before_test,
						is_tip: o.assignment_in_editor.is_tip,
						is_topic_explanation: o.assignment_in_editor.is_topic_explanation,
						message_for_pupils: o.assignment_in_editor.message_for_pupils,
						pupils_array: o.assignment_in_editor.pupils_array,
						pupils_settings: o.assignment_in_editor.pupils_settings,
						questions_number: o.assignment_in_editor.questions_number,
						result_view: o.assignment_in_editor.result_view,
						result_view_type: o.assignment_in_editor.result_view_type,
						sch_subject_title: o.assignment_in_editor.sch_subject_title,
						time_limit: o.assignment_in_editor.time_limit,
						time_limit_content_learning: o.assignment_in_editor.time_limit_content_learning,
						title: o.assignment_in_editor.title,
						topics_array: o.assignment_in_editor.topics_array,
						topics_settings: o.assignment_in_editor.topics_settings,
						type_id: o.assignment_in_editor.type_id,
						user_access: t
					}
				}).success(function(e) {
					l.isArchive !== !!o.assignment_in_editor.archive ? (l.isArchive = !!o.assignment_in_editor.archive, l.filterByType.clear(), l.assignmentsSearch(l.filterByType, l.isArchive), l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !0, l.assignment_error_in_editor = !1) : 0 < l.filterByType.size && !l.filterByType.has(o.assignment_in_editor.type_id) ? (l.filterByType.add(o.assignment_in_editor.type_id), l.assignmentsSearch(l.filterByType, l.isArchive), l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !0, l.assignment_error_in_editor = !1) : null == e.error && e.success && 0 < e.id ? c({
						method: "GET",
						url: "/assignments/api_search/" + e.id + "/",
						params: {
							time: (new Date).getTime()
						}
					}).success(function(n) {
						n.topics_settings_old = n.topics_settings, n.topics_array_old = angular.copy(n.topics_array), 0 < o.assignment_in_editor.id ? angular.forEach(l.assignments, function(e, t) {
							e.id == o.assignment_in_editor.id && (l.assignments[t] = n)
						}) : l.assignments.push(n), l.assignments_list_update(), l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !0, l.assignment_error_in_editor = !1
					}).error(function(e) {
						l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !1, l.assignment_error_in_editor = !0
					}) : (l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !1, l.assignment_error_in_editor = !0)
				}).error(function(e) {
					l.assignment_loading_in_editor = !1, l.assignment_success_in_editor = !1, l.assignment_error_in_editor = !0
				})
			}
		}, o.removeFile = function(e) {
			l.assignment_in_editor.bg_file = [], c({
				method: "GET",
				url: "/assignments/removebgfile/",
				params: {
					file_id: e.id,
					time: (new Date).getTime()
				}
			}).error(function(e) {
				alert("Ошибка удаления файла")
			})
		}, o.removeUserAccess = function(e) {
			l.assignment_in_editor.user_access_array.splice(l.assignment_in_editor.user_access_array.indexOf(e), 1)
		}
	}]), angular.module("selfTestCurriculums", ["ngSanitize"]).filter("in_array", function() {
		return function(e, t, n) {
			var i = [];
			return null == n && (n = "id"), angular.isArray(t) && angular.forEach(e, function(e) {
				-1 != t.indexOf(e[n]) && i.push(e)
			}), i
		}
	}).controller("CurriculumsController", ["$scope", "$rootScope", "$filter", "$http", "$sce", "curriculumService", "peopleService", function(e, t, n, i, r, a, s) {
		e.curriculumService = a, e.peopleService = s, e.trustAsHtmlST = function(e) {
			return r.trustAsHtml(e)
		}, e.shareCurriculum = function(e) {
			a.success_in_editor = !1, a.error_in_editor = !1, a.loading_in_editor = !0, a.loadCurriculumInEditor(e, s).then(function(e) {
				a.loading_in_editor = !1, a.success_in_editor = !1, a.error_in_editor = !1
			}, function(e) {
				alert("Ошибка"), a.loading_in_editor = !1, a.success_in_editor = !1, a.error_in_editor = !0
			}), $("#ng_share_curriculum_window").modal("show")
		}
	}]).controller("ShareCurriculumEditorController", ["$scope", "$rootScope", "$filter", "$http", "$sce", "curriculumService", "peopleService", function(r, e, t, a, n, s, o) {
		r.curriculumService = s, (r.peopleService = o).loadUsers([1, 2, 3, 4, 5]), r.autocomplete_user_12345 = {
			value: ""
		}, r.autocomplete_options_users_12345 = {
			options: {
				html: !0,
				focusOpen: !0,
				onlySelect: !0,
				source: function(e, t) {
					var n = o.users,
						i = [];
					angular.forEach(n, function(e, t) {
						-1 == s.curriculum_in_editor.user_access_array.indexOf(e.id) && [1, 2, 3, 4, 5].inArray(parseInt(e.status_id)) && i.push(e)
					}), (i = r.autocomplete_options_users_12345.methods.filter(i, e.term)).length || i.push({
						groupLabel: "<small><i>коллеги не найдены</i></small>"
					}), t(i)
				}
			},
			events: {
				select: function(e, t) {
					-1 == s.curriculum_in_editor.user_access_array.indexOf(t.item.id) && (s.curriculum_in_editor.user_access_array.push(t.item.id), s.curriculum_in_editor.user_access[t.item.id] = {
						type_id: 1,
						questions_user_access: 0
					}), e.preventDefault()
				}
			},
			methods: {}
		}, r.removeUserAccess = function(e) {
			s.curriculum_in_editor.user_access_array.splice(s.curriculum_in_editor.user_access_array.indexOf(e), 1)
		}, r.curriculumUserAccessSave = function() {
			var e = s.curriculum_in_editor;
			s.loading_in_editor = !0, s.success_in_editor = !1, s.error_in_editor = !1;
			var t = [];
			for(var n in e.user_access)
				if(e.user_access.hasOwnProperty(n) && -1 != s.curriculum_in_editor.user_access_array.indexOf(parseInt(n))) {
					var i = e.user_access[n];
					i.user_id = n, t.push(i)
				}
			a({
				method: "POST",
				url: "/questions/api_curriculums_user_access_save/",
				params: {
					time: (new Date).getTime()
				},
				data: {
					curriculum_id: e.id,
					user_access: t
				}
			}).success(function(e) {
				s.loading_in_editor = !1, s.success_in_editor = !0, s.error_in_editor = !1
			}).error(function(e) {
				alert("Ошибка"), s.loading_in_editor = !1, s.success_in_editor = !1, s.error_in_editor = !1
			})
		}
	}]), angular.module("selfTestData", ["ngSanitize"]).filter("in_array", function() {
		return function(e, t, n) {
			var i = [];
			return null == n && (n = "id"), angular.isArray(t) && angular.forEach(e, function(e) {
				-1 != t.indexOf(e[n]) && i.push(e)
			}), i
		}
	}).controller("DataImportController", ["$scope", "$rootScope", "$filter", "$http", "$sce", function(c, e, t, n, i) {
		c.class_type = "create", c.focus_id = "", c.data = [], c.new_item = {
			is_new: !0,
			is_error: !1,
			correct: !1,
			last_name: "",
			first_name: "",
			middle_name: ""
		}, c.columns = ["last_name", "first_name", "middle_name"], c.columns_count = c.columns.length, c.data.push(angular.copy(c.new_item)), c.trustAsHtmlST = function(e) {
			return i.trustAsHtml(e)
		}, c.changeItem = function() {
			"" == this.item.last_name && "" == this.item.first_name && "" == this.item.middle_name || !this.item.is_new ? "" != this.item.last_name || "" != this.item.first_name || "" != this.item.middle_name || this.item.is_new || this.$index != c.data.length - 2 || (c.data[this.$index].is_error = !1, c.data[this.$index].is_new = !0, c.data.splice(-1, 1)) : (c.data[this.$index].is_error = !0, c.data[this.$index].is_new = !1, c.data.push(angular.copy(c.new_item)))
		}, c.blurItem = function() {
			"" != this.item.last_name || "" != this.item.first_name || "" != this.item.middle_name || this.item.is_new || c.data.splice(this.$index, 1)
		}, c.focusItem = function() {
			c.data[this.$index].is_error = !1
		}, c.removeItem = function() {
			c.data.splice(this.$index, 1)
		}, c.pasteItems = function(e, o, l) {
			e.clipboardData.items[0].getAsString(function(e) {
				var t = o,
					n = 0,
					i = 0;
				if(null != l && l < c.columns_count) {
					var r = l,
						a = (c.columns[l], []);
					0 < $(e).find("tr").length ? $(e).find("tr").each(function() {
						a.push("<tr>" + $(this).html() + "</tr>")
					}) : a = e.split(/[\n\f\r]/);
					for(n = a.length; 0 < n; n--) "" == a[n] && a.splice(n, 1);
					for(n = 0; n < a.length; n++) {
						var s = [];
						0 < $(a[n]).find("td").length ? $(a[n]).find("td").each(function() {
							var e = $(this).text().replace(/<\/?[^>]+>/g, "").replace(/[\s\t]{1,}/g, " ");
							if(e)
								for(var t = e.trim().split(/[\s\t]/), n = 0; n < t.length; n++) s.push(t[n])
						}) : s = a[n].replace(/<\/?[^>]+>/g, "").replace(/[\s\t]{1,}/g, " ").trim().split(/[\s\t]/), null == c.data[t + n] && (c.data[t + n] = angular.copy(c.new_item));
						for(i = 0; i < s.length && i < c.columns_count - r; i++) c.data[t + n][c.columns[i + r]] = s[i];
						c.data[t + n].is_new && (c.data[t + n].is_new = !1, c.data.push(angular.copy(c.new_item)))
					}
				}
				c.$apply(), null != r && (1 < n || 1 < i) && $("#item_" + (t + n - 1) + "_" + (r + i - 1)).focus()
			})
		}
	}]), angular.module("selfTestFolders", ["ngSanitize", "ui.tree", "ui.autocomplete", "ui.ace"]).filter("in_array", function() {
		return function(e, t, n) {
			var i = [];
			return null == n && (n = "id"), angular.isArray(t) && angular.forEach(e, function(e) {
				-1 != t.indexOf(e[n]) && i.push(e)
			}), i
		}
	}).controller("FoldersController", ["$scope", "$rootScope", "$http", "$q", "$sce", "schoolService", "curriculumService", "testService", "compilerService", function(o, a, l, s, t, e, n, i, r) {
		var c;
		o.schoolService = e, o.curriculumService = n, o.testService = i, o.compilerService = r, o.math_round = function(e) {
			return Math.round(e)
		}, o.trustAsHtmlST = function(e) {
			return t.trustAsHtml(e)
		}, o.TYPES = {
			FOLDER: "FOLDER",
			ITEM: "ITEM"
		}, o.LOAD_STATUS = {
			NOT_LOADED: "NOT_LOADED",
			LOADING: "LOADING",
			LOADED: "LOADED",
			ERROR: "ERROR"
		}, o.data = [], o.order_by = [], o.order_by_for_field_value = [], o.max_depth = 5, o.max_loading_status = 1, o.cur_loading_status = 0, o.is_show_data = !1, o.new_folder = {
			id: 0,
			title: ""
		}, o.search_data = {
			value: "",
			current_value: ""
		}, o.autocomplete_response = [], o.autocomplete_options = {
			options: {
				html: !0,
				focusOpen: !0,
				maxHeight: 250,
				outWidth: 6,
				position: {
					my: "left top",
					at: "left bottom",
					collision: "none"
				},
				source: function(e, t) {
					t(o.autocomplete_response)
				}
			},
			events: {
				select: function(e, t) {
					o.search_data.value = t.item.value, o.search(!0), e.preventDefault()
				}
			},
			methods: {}
		}, o.add_folder_url = "", o.move_url = "", o.update_url = "", o.delete_url = "", o.toggle_url = "", o.update_loading_status = function() {
			o.cur_loading_status < o.max_loading_status && o.cur_loading_status++
		}, o.dropChecker = function(e, t) {
			return !0
		}, o.fields_for_send_by_move = [], o.tree_options = {
			beforeDrop: function(e) {
				var t, n = e.source.nodeScope.$modelValue;
				if(e.dest.nodesScope.node) {
					if(t = e.dest.nodesScope.node, n.id === t.id) return !1;
					if(t.type === o.TYPES.ITEM) return !1
				}
				return o.dropChecker(n, t)
			},
			dropped: function(e) {
				o.clear_additional_data(!1);
				var t = e.source.nodeScope.$modelValue,
					n = t ? t.id : 0,
					i = 0,
					r = [];
				if(e.dest.nodesScope.node) {
					var a = e.dest.nodesScope.node;
					i = a ? a.id : i, o.sort_data(a.nodes), angular.forEach(a.nodes, function(e) {
						r.push(e.id)
					})
				} else o.sort_data(o.data), angular.forEach(o.data, function(e) {
					r.push(e.id)
				});
				if(o.move_url) {
					var s = {};
					o.fields_for_send_by_move && angular.forEach(o.fields_for_send_by_move, function(e) {
						t[e] && (s[e] = t[e])
					}), s.id = n, s.parent_id = i, s.order_id = r.join(","), l({
						method: "POST",
						url: o.move_url,
						params: {
							time: (new Date).getTime()
						},
						data: s
					}).error(function(e) {
						console.log("error")
					})
				}
			}
		}, o.sort_data = function(e) {
			(0 === o.order_by_for_field_value.length || e[0] && e[0][o.order_by_for_field_value[0]] === o.order_by_for_field_value[1]) && e.sort(function(e, t) {
				for(var n = 0; n < o.order_by.length; n++) {
					var i = o.order_by[n],
						r = e[i] ? e[i] : "",
						a = t[i] ? t[i] : "";
					if("id" === i && "" === r) return 1;
					if("id" === i && "" === a) return -1;
					if(a < r) return 1;
					if(r < a) return -1
				}
				return 0
			})
		}, o.$watch("cur_loading_status", function(e) {
			o.cur_loading_status >= o.max_loading_status ? setTimeout(function() {
				o.$apply(function() {
					o.is_show_data = !0
				})
			}, 1e3) : o.is_show_data = !1
		}), o.get_data = function(e) {}, o.after_loading_data = function(e) {}, o.clear_additional_data = function(e) {}, o.$watch("type", function(e) {
			switch(e) {
				case "classes":
					o.order_by = ["type", "order_class", "order_title", "id"], o.max_loading_status = 1, o.new_folder = {
						id: 0,
						author: "я",
						title: "",
						order_title: "",
						order_class: 1,
						type: o.TYPES.FOLDER,
						is_main_for_site: !1,
						nodes: []
					}, o.add_folder_url = "/pupils/apiaddclass/", o.move_url = "/pupils/apiupdateclass/move/", o.update_url = "/pupils/apiupdateclass/update/", o.get_data = function(e) {
						var t = [];
						t.push(o.schoolService.loadClasses(o.update_loading_status)), o.update_data(t)
					};
					break;
				case "library":
					o.order_by = ["type", "order_title", "id"], o.order_by_for_field_value = ["data_type", "ORDER_BY_TITLE"], o.max_loading_status = 1, o.get_data = function(e) {
						var t = [];
						t.push(o.curriculumService.loadLibrary(o.update_loading_status)), o.update_data(t)
					};
					break;
				case "curriculums":
					o.order_by = ["type", "order_title", "id"], o.order_by_for_field_value = ["data_type", "CURRICULUM"], o.fields_for_send_by_move = ["data_type"], o.max_loading_status = 1, o.new_folder = {
						id: 0,
						title: "",
						order_title: "",
						order_id: 0,
						type: o.TYPES.FOLDER,
						nodes: []
					}, o.add_folder_url = "/questions/apiaddcst/", o.move_url = "/questions/apiupdatecst/move/", o.update_url = "/questions/apiupdatecst/", o.delete_url = "/questions/apiupdatecst/delete/", o.toggle_url = "/questions/apiupdatecst/toggle/", o.search_data.value = "Мои программы", o.autocomplete_response = [{
						label: "Мои программы",
						value: "Мои программы"
					}, {
						label: "Все программы",
						value: ""
					}], o.get_data = function(e) {
						var t = [];
						t.push(o.curriculumService.loadCurriculums(e)), o.update_data(t)
					}, o.clear_additional_data = function(e) {
						e ? o.curriculumService.clearAdditionalCurriculums() : o.curriculumService.clearAdditionalCurriculums($.trim(o.search_data.value))
					}, o.dropChecker = function(e, t) {
						return t && !t.is_mine || !e.is_mine ? (alert("Вы можете перемещать объекты только в объекты, которые Вы добавили."), !1) : t && t.loading_url && t.nodes_load_status && t.nodes_load_status !== o.LOAD_STATUS.LOADED ? (alert("Сначала откройте папку, куда хотели перенсти выбранный объект, а затем повторите перемещение."), !1) : t ? "CURRICULUM" === t.data_type ? "SECTION" === e.data_type || (alert("В учебные программы можно переносить только разделы."), !1) : "SECTION" === t.data_type ? "TOPIC" === e.data_type || (alert("В разделы можно переносить только темы."), !1) : (alert("В темы ничего нельзя переносить."), !1) : "CURRICULUM" === e.data_type || (alert("На этот уровень ничего нельзя переносить."), !1)
					};
					break;
				case "test":
					o.search_data.value = o.test_id, o.order_by = ["order_id", "id"], o.max_loading_status = 2, o.new_folder = {
						id: 0,
						title: "",
						order_title: "",
						order_id: 0,
						type: o.TYPES.FOLDER,
						nodes: []
					}, o.get_data = function(e) {
						var t = [];
						t.push(o.testService.loadTest(e)), t.push(o.compilerService.loadCompilers(o.update_loading_status)), o.update_data(t)
					}, o.add_folder_url = "/testing/apiaddupdateanswer/", o.update_url = "/testing/apiaddupdateanswer/", o.search_draft = function(e) {
						if(!o.is_show_data) return !1;
						var n, t = e.$modelValue;
						return !!t.id && (angular.forEach(t.nodes, function(e, t) {
							!n && e.is_draft && (n = e)
						}), n)
					}, o.save_button_click = function(e, t) {
						t.loading();
						var n = !!t.model && o.search_draft(t.model);
						if(!1 === n) return !1;
						n ? (e.is_draft = 0, o.update_from_form(n, t.model, e, t)) : o.add_folder_from_form(e, t), t.resetData()
					}, o.extraButtonClick = function(e, t) {
						t.loading();
						var n = !!t.model && o.search_draft(t.model);
						if(!1 === n) return t.loaded(), !1;
						e.is_draft = 1, n ? o.update_from_form(n, t.model, e, t) : o.add_folder_from_form(e, t, !0)
					}, o.after_loading_data = function(e) {
						e[1] && (o.compilers = e[1]), setTimeout(o.testService.jplayerEditorInit, 1500), setTimeout(o.testService.colorboxInit, 1500)
					}
			}
			o.get_data(o.search_data.value)
		}), o.update_data = function(e) {
			s.all(e).then(function(e) {
				e[0] && void 0 !== e[0].search ? $.trim(e[0].search) === $.trim(o.search_data.value) && e[0].data && (o.search_data.current_value = $.trim(o.search_data.value), o.data = e[0].data, o.update_loading_status()) : e[0] && (o.data = e[0]), o.after_loading_data(e)
			}, function(e) {
				console.log("error")
			})
		}, o.search = function(e) {
			e && clearTimeout(c), o.is_show_data && o.cur_loading_status === o.max_loading_status && o.cur_loading_status--, o.get_data($.trim(o.search_data.value))
		}, o.change_search_value = function() {
			clearTimeout(c), c = setTimeout(function() {
				o.search(!1)
			}, 1e3)
		}, o.blur_field_by_enter = function(e) {
			setTimeout(function() {
				$(e).blur()
			})
		}, o.show_all_data = function() {
			o.search_data.value = "", o.search(!0)
		}, o.node_click = function(t, e, n, i, r) {
			if(!r || confirm(r))
				if(!n && t.opening_url && (n = t.opening_url), n && i) window.open(n, i);
				else if(n) document.location = n;
			else if(t.id && t.type === o.TYPES.FOLDER && e && (e.toggle(), t.loading_url && t.nodes_load_status && (t.nodes_load_status === o.LOAD_STATUS.NOT_LOADED || t.nodes_load_status === o.LOAD_STATUS.ERROR))) {
				t.nodes_load_status = o.LOAD_STATUS.LOADING;
				var a = [];
				a.push(l({
					method: "POST",
					url: t.loading_url,
					params: {
						time: (new Date).getTime()
					}
				})), s.all(a).then(function(e) {
					e[0] && e[0].data && e[0].data.data && (t.nodes = angular.copy(e[0].data.data), o.sort_data(t.nodes)), t.nodes_load_status = o.LOAD_STATUS.LOADED
				}).catch(function(e) {
					t.nodes_load_status = o.LOAD_STATUS.ERROR
				})
			}
		}, o.add_folder_from_form = function(e, t, n) {
			if(n || t.resetData(), !o.is_show_data) return !1;
			var i;
			if(t.model && t.model.$modelValue && !(i = t.model.$modelValue).id) return !1;
			o.clear_additional_data(!1);
			var r = angular.copy(o.new_folder),
				a = {};
			t.extra_settings.default_data && angular.forEach(t.extra_settings.default_data, function(e, t) {
				r[t] = e, a[t] = e
			}), t.extra_settings.data_for_send && angular.forEach(t.extra_settings.data_for_send, function(e, t) {
				a[t] = e
			}), angular.forEach(e, function(e, t) {
				r[t] = e, a[t] = e
			}), r.title || (r.title = ""), r.order_title = r.title.toLowerCase(), o.add_folder_url && l({
				method: "POST",
				url: o.add_folder_url,
				params: {
					time: (new Date).getTime()
				},
				data: a
			}).success(function(e) {
				!e.error && e.id ? (angular.forEach(e, function(e, t) {
					r[t] = e
				}), t.loaded()) : (console.log("error"), t.error())
			}).error(function(e) {
				console.log("error"), t.error()
			}), i ? (i.nodes.push(r), o.sort_data(i.nodes)) : (o.data.push(r), o.sort_data(o.data))
		}, o.add_folder = function(t) {
			if(!o.is_show_data) return !1;
			var i;
			if(t && t.scope && !(i = t.scope.$modelValue).id) return !1;
			o.clear_additional_data(!1);
			var r = angular.copy(o.new_folder);
			if(t && t.popup_data) return a.selfTestPopup.openPopup(t.popup_data, function(e) {
				a.selfTestPopup.closePopup();
				var n = {};
				t.default_data && angular.forEach(t.default_data, function(e, t) {
					r[t] = e, n[t] = e
				}), t.data_for_send && angular.forEach(t.data_for_send, function(e, t) {
					n[t] = e
				}), angular.forEach(e, function(e, t) {
					r[t] = e, n[t] = e
				}), r.title || (r.title = ""), r.order_title = r.title.toLowerCase(), o.add_folder_url && l({
					method: "POST",
					url: o.add_folder_url,
					params: {
						time: (new Date).getTime()
					},
					data: n
				}).success(function(e) {
					!e.error && e.id ? angular.forEach(e, function(e, t) {
						r[t] = e
					}) : console.log("error")
				}).error(function(e) {
					console.log("error")
				}), i ? (i.nodes.push(r), o.sort_data(i.nodes)) : (o.data.push(r), o.sort_data(o.data))
			}, {
				saveButtonTitle: "Добавить"
			}), !1;
			var e = prompt("Введите название папки");
			if(!(e = $.trim(e))) return !1;
			i || (r.title = e, r.order_title = e.toLowerCase(), o.add_folder_url && l({
				method: "POST",
				url: o.add_folder_url,
				params: {
					time: (new Date).getTime()
				},
				data: {
					title: r.title,
					type: o.TYPES.FOLDER
				}
			}).success(function(e) {
				!e.error && e.id ? angular.forEach(e, function(e, t) {
					r[t] = e
				}) : console.log("error")
			}).error(function(e) {
				console.log("error")
			}), o.data.push(r), o.sort_data(o.data))
		}, o.update_from_form = function(n, e, t, i) {
			if(n.id && n.type === o.TYPES.FOLDER) {
				o.clear_additional_data(!1);
				var r = {};
				angular.forEach(t, function(e, t) {
					n[t] = e, r[t] = e
				}), i.extra_settings.data_for_send && angular.forEach(i.extra_settings.data_for_send, function(e, t) {
					r[t] = e
				}), n.title || (n.title = ""), n.order_title = n.title.toLowerCase(), n.parent_id ? e.$parentNodeScope && o.sort_data(e.$parentNodeScope.$modelValue.nodes) : o.sort_data(o.data), o.update_url && (r.id = n.id, r.title = n.title, l({
					method: "POST",
					url: o.update_url,
					params: {
						time: (new Date).getTime()
					},
					data: r
				}).success(function(e) {
					e.error ? (console.log("error"), i.error()) : (angular.forEach(e, function(e, t) {
						n[t] = e
					}), i.loaded())
				}).error(function(e) {
					console.log("error"), i.error()
				}))
			}
		}, o.update = function(i, t, r) {
			if(i.id && i.type === o.TYPES.FOLDER)
				if(o.clear_additional_data(!1), r && r.popup_data) a.selfTestPopup.openPopup(r.popup_data, function(e) {
					a.selfTestPopup.closePopup();
					var n = {};
					angular.forEach(e, function(e, t) {
						i[t] = e, n[t] = e
					}), r.data_for_send && angular.forEach(r.data_for_send, function(e, t) {
						n[t] = e
					}), i.title = e.title, i.order_title = i.title.toLowerCase(), i.parent_id ? t.$parentNodeScope && o.sort_data(t.$parentNodeScope.$modelValue.nodes) : o.sort_data(o.data), o.update_url && (n.id = i.id, n.title = i.title, l({
						method: "POST",
						url: o.update_url,
						params: {
							time: (new Date).getTime()
						},
						data: n
					}).success(function(e) {
						e.error ? console.log("error") : angular.forEach(e, function(e, t) {
							i[t] = e
						})
					}).error(function(e) {
						console.log("error")
					}))
				});
				else {
					var e = prompt("Введите название папки", i.title);
					if(!(e = $.trim(e))) return !1;
					i.title = e, i.order_title = e.toLowerCase(), i.parent_id ? t.$parentNodeScope && o.sort_data(t.$parentNodeScope.$modelValue.nodes) : o.sort_data(o.data), o.update_url && l({
						method: "POST",
						url: o.update_url,
						params: {
							time: (new Date).getTime()
						},
						data: {
							id: i.id,
							title: i.title
						}
					}).success(function(e) {
						e.error ? console.log("error") : angular.forEach(e, function(e, t) {
							i[t] = e
						})
					}).error(function(e) {
						console.log("error")
					})
				}
		}, o.delete = function(e, t) {
			var n = e.$modelValue;
			if(n.id && confirm("Удалить?")) {
				if(o.clear_additional_data(!1), o.delete_url) {
					var i = {
						id: n.id
					};
					t.data_for_send && angular.forEach(t.data_for_send, function(e, t) {
						i[t] = e
					}), l({
						method: "POST",
						url: o.delete_url,
						params: {
							time: (new Date).getTime()
						},
						data: i
					}).success(function(e) {
						e.error && console.log("error")
					}).error(function(e) {
						console.log("error")
					})
				}
				e.remove()
			}
		}, o.toggleData = function(n, e) {
			if(!n.id) return !1;
			if(e.confirm_text && !confirm(e.confirm_text)) return !1;
			o.clear_additional_data(!0);
			var i = {
				id: n.id
			};
			e.toggle_data && angular.forEach(e.toggle_data, function(e, t) {
				n[t] = e, i[t] = e
			}), o.toggle_url && (e.data_for_send && angular.forEach(e.data_for_send, function(e, t) {
				i[t] = e
			}), l({
				method: "POST",
				url: o.toggle_url,
				params: {
					time: (new Date).getTime()
				},
				data: i
			}).success(function(e) {
				e.error && console.log("error")
			}).error(function(e) {
				console.log("error")
			}))
		}
	}]), angular.module("selfTestPayStation", ["ngSanitize", "ui.autocomplete"]).filter("in_array", function() {
		return function(e, t, n, i) {
			if(!i) return e;
			var r = [];
			return null == n && (n = "id"), angular.isArray(t) && angular.forEach(e, function(e) {
				-1 != t.indexOf(e[n]) && r.push(e)
			}), r
		}
	}).controller("PayStationStartController", ["$scope", "$rootScope", "$filter", "$http", "$q", "$sce", "profileService", "testpacService", "peopleService", "subscriptionService", function(e, r, t, n, i, a, s, o, l, c) {
		r.authorized = !1, r.is_legal_entity_open = !1, r.is_fio = !0, r.is_email = !0, r.is_refresh = !1, r.testpac = null, r.teacher = null, r.users_by_testpac = {
			users: [],
			data: {}
		}, r.data_type = null, r.data_id = null, r.profileService = s, r.testpacService = o, r.peopleService = l, r.subscriptionService = c, r.openPayStation = function(e, t, n) {
			"undefined" === n && (n = !1), r.is_legal_entity_open = !!n, "undefined" !== r.is_legal_entities && 1 == r.is_legal_entities && r.is_legal_entity_open && (r.type = 4), $("#ng_paystation_window").modal({
				backdrop: "static",
				show: !0
			}), r.data_type = e, r.data_id = t, r.blocked_in_paystation = !1, r.loading_in_paystation = !0, r.success_in_paystation = !1, r.error_in_paystation = !1;
			var i = [];
			i.push(r.profileService.loadProfile()), i.push(r.peopleService.loadUsersWithDefer([6, 7])), i.push(r.subscriptionService.loadSubscriptions()), "testpac" == r.data_type && (i.push(r.peopleService.loadUsersByTestpacs(r.data_id)), i.push(r.testpacService.getTestpac(r.data_id))), "teacher" == r.data_type && i.push(r.peopleService.loadOtherUsers([r.data_id])), r.loadData(i), r.logEvent("openPayStation_" + e)
		}, r.loadData = function(e) {
			i.all(e).then(function(e) {
				"testpac" == r.data_type && (r.teacher = null, r.users_by_testpac = e[3], r.testpac = e[4]), "teacher" == r.data_type && ((r.testpac = null) != e[3].data[0] ? r.teacher = e[3].data[0] : r.teacher = null), r.is_refresh || (r.blocked_in_paystation = !1, r.loading_in_paystation = !1, r.success_in_paystation = !1);
				try {
					ga(function() {
						for(var e = ga.getAll(), t = 0; t < e.length; t++) e[t].set("userId", r.profileService.profile.lgn)
					})
				} catch(e) {}
			}, function(e) {
				r.blocked_in_paystation = !1, r.loading_in_paystation = !1, r.success_in_paystation = !1, r.error_in_paystation = !0
			})
		}, r.logEvent = function(i, r) {
			"undefined" === r && (r = {});
			try {
				yaCounter11236696.reachGoal(i)
			} catch(e) {}
			try {
				yaCounter31010971.reachGoal(i)
			} catch(e) {}
			try {
				ga(function() {
					var e = ga.getAll(),
						t = {
							eventAction: i
						};
					Object.assign(t, r);
					for(var n = 0; n < e.length; n++) e[n].send("event", t)
				})
			} catch(e) {}
		}, "undefined" != typeof visit_paid_test_page && visit_paid_test_page && r.logEvent("visit_paid_test_page")
	}]).controller("PayStationController", ["$scope", "$rootScope", "$filter", "$http", "$q", "$sce", "profileService", "testpacService", "peopleService", function(f, p, e, l, t, n, i, r, a) {
		p.types = [{
			id: 1,
			title: "участник",
			desc: "хочу принять участие",
			active: !0
		}, {
			id: 3,
			title: "преподаватель",
			desc: "хочу зарегистрировать своего ученика / своих учеников",
			active: !0
		}, {
			id: 2,
			title: "родитель",
			desc: "хочу зарегистрировать своего ребёнка / своих детей",
			active: !0
		}, {
			id: 4,
			title: "в подарок",
			desc: "хочу сделать подарок",
			active: !0
		}], p.is_email_y_n = "", p.is_self_code_y_n = "", p.self_code = null, f.self_code_count = "", p.subscription_id = null, p.login_type = "", p.is_legal_entities = 0, p.type = 0, p.rates = [], p.item_price = 0, p.item_price_old = 0, p.item_price_currency = 0, p.item_price_old_currency = 0, p.max_count_of_users_for_full_view = 50, p.$watch("testpac", function(e, t, n) {
			null == e || null == e || null == e.fee || "1" != e.fee && 1 != e.fee ? (p.item_price = 0, p.item_price_old = 0, p.item_price_currency = 0, p.item_price_old_currency = 0) : (p.rates = e.rates, p.item_price = e.price, p.item_price_old = e.price_old, p.item_price_currency = e.price_currency, p.item_price_old_currency = e.price_old_currency, null == e.is_legal_entities || "1" != e.is_legal_entities && 1 != e.is_legal_entities ? p.is_legal_entities = 0 : (p.types[3].title = "юр. лицо", p.types[3].desc = "оплату за участников производит образовательная организация", p.is_legal_entities = 1), (1 == p.is_legal_entities && p.is_legal_entity_open || 0 == p.type && 1 == p.is_legal_entities && null != p.profileService && null != p.profileService.profile && null != p.profileService.profile && "1" == p.profileService.profile.is_legal_entity) && (p.type = 4), f.getSum())
		}, !0), p.$watch("teacher", function(e, t, n) {
			null != e && null != e ? (p.item_price = e.coach_price, p.item_price_old = 0, p.item_price_currency = e.coach_price_currency, p.item_price_old_currency = 0, f.getSum()) : (p.item_price = 0, p.item_price_old = 0, p.item_price_currency = 0, p.item_price_old_currency = 0)
		}, !0), p.$watch("users_by_testpac", function(e, t, n) {
			p.checkActiveTraining()
		}, !0), p.checkActiveTraining = function() {
			null != p.profileService && null != p.profileService.profile && null != p.profileService.profile && -1 != p.users_by_testpac.users.indexOf(parseInt(p.profileService.profile.id)) ? (p.types[0].active = !1, p.type == p.types[0].id && "" != p.user.lgn_email && f.refresh(""), p.type == p.types[0].id && (p.type = 0)) : p.types[0].active = !0, null != p.profileService && null != p.profileService.profile && null != p.profileService.profile && (p.users_by_testpac.data["id_" + p.profileService.profile.id] && p.users_by_testpac.data["id_" + p.profileService.profile.id].user_value_1 && (p.user.user_value_1 = p.users_by_testpac.data["id_" + p.profileService.profile.id].user_value_1), "requisites" in p.profileService.profile && angular.forEach(p.user.requisites, function(e, t) {
				t in p.profileService.profile.requisites && (p.user.requisites[t] = p.profileService.profile.requisites[t])
			}))
		}, p.payment_type = "", p.old_payment_type = "", p.user = {
			lgn_email: "",
			pass: "",
			name: null,
			email: null,
			user_value_1: "",
			requisites: {
				title: "",
				director: "",
				address: "",
				inn: "",
				kpp: "",
				ogrn: "",
				bik: "",
				bank: "",
				cor_account: "",
				pay_account: ""
			}
		}, f.changeType = function(e) {
			e.active && (p.type = e.id)
		}, f.changeLoginType = function(e, t) {
			t && null != p.user.email && (p.user.lgn_email = p.user.email, f.reg_error_code = 0), p.login_type = e, "registration" == p.login_type && 1 == p.is_legal_entities && 4 == p.type && setTimeout(function() {
				$("#pay_user_name_4").focus()
			})
		}, f.changeIsSelfCodeYN = function(e) {
			p.is_self_code_y_n = e
		}, f.changeIsEmailYN = function(e) {
			p.is_email_y_n = e
		}, f.setSubscription = function(e) {
			p.subscription_id = parseInt(e)
		}, f.addPupil = function(e) {
			-1 != p.users_by_testpac.users.indexOf(parseInt(e)) ? alert("Этому пользователю уже открыт доступ к решению. Его выбрать нельзя.") : -1 == p.user_access_array.indexOf(e) && p.user_access_array.push(e)
		}, f.removePupil = function(e) {
			p.user_access_array.splice(p.user_access_array.indexOf(e), 1)
		}, f.indexOf = function(e, t) {
			return e.indexOf(t)
		}, p.user_access_array = [], p.autocomplete_user = {
			value: ""
		}, p.autocomplete_options_users = {
			options: {
				html: !0,
				focusOpen: !0,
				onlySelect: !0,
				source: function(e, t) {
					var n = p.peopleService.users,
						i = [];
					angular.forEach(n, function(e, t) {
						-1 == p.user_access_array.indexOf(e.id) && i.push(e)
					}), (i = p.autocomplete_options_users.methods.filter(i, e.term)).length || i.push({
						groupLabel: "<small><i>не найдено</i></small>"
					}), t(i)
				}
			},
			events: {
				select: function(e, t) {
					-1 != p.users_by_testpac.users.indexOf(parseInt(t.item.id)) ? alert("Этому пользователю уже открыт доступ к решению. Его выбрать нельзя.") : -1 == p.user_access_array.indexOf(t.item.id) && p.user_access_array.push(t.item.id), e.preventDefault()
				}
			},
			methods: {}
		}, f.sum_currency = 0, f.sum_finance = 0, f.sum_old_currency = 0, f.sum_old_finance = 0, p.$watch("user_access_array", function(e) {
			f.getSum()
		}, !0), f.$watch("self_code_count", function(e, t, n) {
			f.getSum()
		}), f.changeSelfCodeCount = function() {
			f.getSum()
		}, p.$watch("type", function(e, t, n) {
			f.getSum(), 1 == p.is_legal_entities && 4 == e ? (p.old_payment_type = p.payment_type, p.payment_type = "self_test_bank_transfer") : 1 == p.is_legal_entities && (p.payment_type = p.old_payment_type)
		}), f.$watch("subscription_id", function(e, t, n) {
			f.getSum()
		}), f.$watch("data", function(e, t, n) {
			f.getSum()
		}, !0), f.$watch("profileService.profile", function(e, t, n) {
			null != e ? (p.authorized = !0, p.is_fio = !0, p.is_email = !0, (null != e.last_name && "" != e.last_name || null != e.first_name && "" != e.first_name || null != e.middle_name && "" != e.middle_name) && (p.is_fio = !1), null != e.email && "" != e.email && (p.is_email = !1), 0 == p.type && ("1" == e.is_father && (p.type = 2), "6" == e.status_id && (p.type = 1), "5" != e.status_id && "1" != e.teacher_request || (p.type = 3), 1 == p.is_legal_entities && "1" == e.is_legal_entity && (p.type = 4)), 1 == p.is_legal_entities && p.is_legal_entity_open && (p.type = 4), p.checkActiveTraining()) : (p.authorized = !1, p.is_fio = !0, p.is_email = !0)
		}, !0), f.getSum = function() {
			if(f.sum_currency = 0, f.sum_finance = 0, f.sum_old_currency = 0, f.sum_old_finance = 0, null != p.testpac && null != p.testpac || null != p.teacher && null != p.teacher) {
				var n = f.getCount(),
					i = parseFloat(p.item_price),
					r = i,
					a = 0,
					s = parseFloat(p.item_price_currency),
					o = s,
					l = 0,
					c = parseFloat(p.item_price_old),
					u = parseFloat(p.item_price_old_currency);
				if(1 == p.type && p.subscription_id) {
					var d = !0;
					angular.forEach(p.subscriptionService.subscriptions, function(e, t) {
						d && parseInt(e.id) === p.subscription_id && (i = parseFloat(e.price), r = i, s = parseFloat(e.price_currency), o = s, c = parseFloat(e.price_old), u = parseFloat(e.price_old_currency), d = !1)
					})
				} else if(p.rates) {
					d = !0;
					angular.forEach(p.rates, function(e, t) {
						e.count_greater_or_equal = parseFloat(e.count_greater_or_equal), e.count_less = e.count_less ? parseFloat(e.count_less) : 0, d && e.count_greater_or_equal <= n && (n < e.count_less || 0 == e.count_less) && (i = parseFloat(e.price), a = parseFloat(e.price_of_bundle), s = parseFloat(e.price_currency), l = parseFloat(e.price_of_bundle_currency), d = !1)
					})
				}
				f.sum_old_finance = 0 <= c ? n * c : 0, f.sum_old_currency = 0 <= u ? n * u : 0, a ? (f.sum_finance = a, f.sum_currency = l, 1 == p.is_legal_entities && 4 == p.type || (0 <= r && n * r < f.sum_finance && (f.sum_finance = n * r), 0 <= o && n * o < f.sum_currency && (f.sum_currency = n * o))) : (f.sum_finance = 0 <= i ? n * i : 0, f.sum_currency = 0 <= s ? n * s : 0), 0 == f.sum_old_finance && 0 <= r && (f.sum_old_finance = n * r), 0 == f.sum_old_currency && 0 <= o && (f.sum_old_currency = n * o), f.sum_old_finance <= f.sum_finance && (f.sum_old_finance = 0), f.sum_old_currency <= f.sum_currency && (f.sum_old_currency = 0)
			}
		}, f.getCount = function() {
			var e = 0;
			if(null != p.testpac && null != p.testpac) {
				if(2 == p.type || 3 == p.type) {
					e += p.user_access_array.length;
					var t = f.data.length - 1;
					0 < t && (e += t)
				}
				if(2 == p.type || 3 == p.type || 4 == p.type) 0 < (n = parseInt(f.self_code_count)) && (e += n);
				1 == p.type && (e = 1)
			} else if(null != p.teacher && null != p.teacher) {
				var n;
				0 < (n = parseInt(f.self_code_count)) && (e += n)
			}
			return e
		}, p.message_in_paystation = !1, f.is_user_registered_in_testpac = 0, f.registered_in_testpac_user_data = {
			lgn: null,
			pass: null
		}, f.$watch("is_user_registered_in_testpac", function(e, t, n) {
			p.message_in_paystation = 1 == e
		}), f.$watch("pay_success", function(e, t, n) {
			p.message_in_paystation = "" != e
		}), f.closeMessage = function() {
			f.is_user_registered_in_testpac = 0, f.registered_in_testpac_user_data = {
				lgn: null,
				pass: null
			}, f.pay_success = ""
		}, f.closeError = function() {
			p.blocked_in_paystation = !1, p.loading_in_paystation = !0, p.success_in_paystation = !1, p.error_in_paystation = !1, p.profileService.profile = null, p.peopleService.users_by_status["6,7"] = null, "testpac" == p.data_type && (p.peopleService.users_by_testpac["id_" + p.data_id] = null, p.testpacService.testpacs["id_" + p.data_id] = null);
			var e = [];
			e.push(p.profileService.loadProfile()), e.push(p.peopleService.loadUsersWithDefer([6, 7])), e.push(p.subscriptionService.loadSubscriptions()), "testpac" == p.data_type && (e.push(p.peopleService.loadUsersByTestpacs(p.data_id)), e.push(p.testpacService.getTestpac(p.data_id))), "teacher" == p.data_type && e.push(p.peopleService.loadOtherUsers([p.data_id])), p.loadData(e)
		}, f.error_1 = !1, f.error_2 = !1, f.error_3 = !1, f.error_4 = !1, f.error_5 = !1, f.error_6 = !1, f.pay_error = "", f.pay_error_code = 0, f.pay_success = "", f.$watch("pay_error_code", function(e, t, n) {
			103 == e && (1 == p.type && p.is_email && "y" == p.is_email_y_n ? setTimeout(function() {
				$("#pay_user_email_y").focus()
			}) : setTimeout(function() {
				$("#pay_user_email").focus()
			})), 1 == e && setTimeout(function() {
				$("#pay_self_code").focus()
			})
		}), f.pay = function() {
			f.error_1 = !1, f.error_2 = !1, f.error_3 = !1, f.error_4 = !1, f.error_5 = !1, f.error_6 = !1, f.error_7 = !1, f.requisites_error = {
				title: !1,
				director: !1,
				address: !1,
				inn: !1,
				kpp: !1,
				ogrn: !1,
				bik: !1,
				bank: !1,
				cor_account: !1,
				pay_account: !1
			}, f.error_user_value_1 = !1, f.pay_error = "", f.pay_error_code = 0, f.pay_success = "";
			var n = !1,
				e = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/,
				i = {
					payment_type: ""
				};
			if((null == p.profileService.profile || f.sum_finance > p.profileService.profile.finance) && (i.payment_type = p.payment_type), (p.type < 1 || 4 < p.type) && null == p.teacher ? (f.error_1 = !0, n = !0) : i.user_type = p.type, p.is_fio && (0 < p.type || null != p.teacher) && ("" == p.user.name ? (f.error_2 = !0, n = !0) : i.user_name = p.user.name), 1 == p.type && null == p.teacher && ("y" == p.is_self_code_y_n && (null == p.self_code || "" == p.self_code ? (f.error_3 = !0, n = !0) : (i.payment_type = "self_test_self_code", i.self_code = p.self_code), p.is_email && "y" == p.is_email_y_n && (e.test(p.user.email) ? i.user_email = p.user.email : (f.error_4 = !0, n = !0))), p.is_email && "n" == p.is_self_code_y_n && (e.test(p.user.email) ? i.user_email = p.user.email : (f.error_4 = !0, n = !0)), "1" == p.testpac.is_user_value_1 && "1" == p.testpac.is_user_value_1_paystation && ("1" == p.testpac.is_required_user_value_1 && (p.user.user_value_1 || (f.error_user_value_1 = !0, n = !0)), f.error_user_value_1 || (i.user_value_1 = p.user.user_value_1))), 1 < p.type || null != p.teacher) {
				p.is_email && (e.test(p.user.email) ? i.user_email = p.user.email : (f.error_4 = !0, n = !0));
				var t = f.getCount();
				if(4 == p.type || null != p.teacher) 0 == t ? (f.error_5 = !0, n = !0) : (i.self_code_count = t, i.is_self_code = "1");
				else if(0 == f.sum_finance) f.error_6 = !0, n = !0;
				else {
					i.users_my = p.user_access_array, i.users_my_data = [];
					var r = p.peopleService.users;
					angular.forEach(r, function(e, t) {
						-1 < i.users_my.indexOf(e.id) && i.users_my_data.push(e)
					}), i.users_new = f.data;
					var a = parseInt(f.self_code_count);
					0 < a && (i.self_code_count = a, i.is_self_code = "1")
				}
			}
			if(1 == p.is_legal_entities && 4 == p.type && (i.requisites = {}, angular.forEach(f.requisites_error, function(e, t) {
					p.user.requisites[t] ? i.requisites[t] = p.user.requisites[t] : (f.requisites_error[t] = !0, f.error_7 = !0, n = !0)
				})), i.subscription_id = 0, 1 == p.type && p.subscription_id && (i.subscription_id = p.subscription_id), f.error_2) setTimeout(function() {
				$("#pay_user_name_" + p.type).focus()
			});
			else if(f.error_user_value_1) setTimeout(function() {
				$("#pay_user_value_1").focus()
			});
			else if(f.error_3) setTimeout(function() {
				$("#pay_self_code").focus()
			});
			else if(f.error_4) 1 == p.type && p.is_email && "y" == p.is_email_y_n ? setTimeout(function() {
				$("#pay_user_email_y").focus()
			}) : setTimeout(function() {
				$("#pay_user_email").focus()
			});
			else if(f.error_7) {
				var s = !0;
				angular.forEach(f.requisites_error, function(e, t) {
					s && e && (setTimeout(function() {
						$("#pay_user_requisites_" + t).focus()
					}), s = !1)
				})
			} else f.error_5 ? setTimeout(function() {
				$("#pay_self_code_count_4").focus()
			}) : f.error_6 && setTimeout(function() {
				$("#pay_item_0_0").focus()
			});
			if(!n) {
				p.blocked_in_paystation = !0, p.loading_in_paystation = !1, p.success_in_paystation = !1, p.error_in_paystation = !1;
				var o = "";
				"testpac" == p.data_type && (o = "/tests/start/" + p.testpac.id + "/"), "teacher" == p.data_type && (o = "/teachers/" + p.teacher.id + "/"), "" !== o ? (p.logEvent("payStation_pay_" + p.data_type, {
					eventValue: f.sum_finance
				}), l({
					method: "POST",
					url: o,
					params: {
						paystation: "pay",
						time: (new Date).getTime()
					},
					data: i
				}).success(function(e) {
					if(null != e.pay_url && null != e.pay_url && "" != e.pay_url) f.refresh(e.pay_url), p.blocked_in_paystation = !1, p.loading_in_paystation = !0, p.success_in_paystation = !1, p.error_in_paystation = !1;
					else {
						null != e.success && null != e.success && "" != e.success && (f.pay_success = e.success), null != e.error && null != e.error && "" != e.error && (f.pay_error = e.error, null != e.api_error_code && null != e.api_error_code || (p.blocked_in_paystation = !1, p.loading_in_paystation = !1, p.success_in_paystation = !1, p.error_in_paystation = !0)), null != e.api_error_code && null != e.api_error_code && (f.pay_error_code = parseInt(e.api_error_code)), null != e.is_user_registered_in_testpac && 1 == e.is_user_registered_in_testpac && null != e.user_id && 0 < e.user_id ? (f.is_user_registered_in_testpac = 1, null != e.lgn && null != e.pass && (f.registered_in_testpac_user_data = {
							lgn: e.lgn,
							pass: e.pass
						})) : "testpac" == p.data_type && (p.peopleService.users_by_testpac["id_" + p.data_id] = null);
						var t = [];
						t.push(p.profileService.loadProfile()), t.push(p.peopleService.loadUsersWithDefer([6, 7])), t.push(p.subscriptionService.loadSubscriptions()), "testpac" == p.data_type && (t.push(p.peopleService.loadUsersByTestpacs(p.data_id)), t.push(p.testpacService.getTestpac(p.data_id))), "teacher" == p.data_type && t.push(p.peopleService.loadOtherUsers([p.data_id])), p.loadData(t)
					}
				}).error(function(e) {
					null != e.error ? f.pay_error = e.error : f.pay_error = "Ошибка. Попробуйте снова.", p.blocked_in_paystation = !1, p.loading_in_paystation = !1, p.success_in_paystation = !1, p.error_in_paystation = !0
				})) : (f.pay_error = "Ошибка. Попробуйте снова.", p.blocked_in_paystation = !1, p.loading_in_paystation = !1, p.success_in_paystation = !1, p.error_in_paystation = !0)
			}
		}, f.refresh = function(e) {
			p.is_refresh = !0, document.location = "" == e ? document.location : e, p.blocked_in_paystation = !1, p.loading_in_paystation = !0, p.success_in_paystation = !1, p.error_in_paystation = !1, f.closeMessage()
		}, f.check_self_code_enter = function(e) {
			e ? setTimeout(function() {
				$("#pay_self_code").blur(), f.pay()
			}) : setTimeout(function() {
				$("#pay_self_code").blur(), f.check_self_code()
			})
		}, f.check_self_code = function() {
			f.error_3 = !1, 1 == p.type && "y" == p.is_self_code_y_n && (null != p.self_code && "" != p.self_code || (f.error_3 = !0)), f.error_3 && setTimeout(function() {
				$("#pay_self_code").focus()
			})
		}, f.error_7 = !1, f.error_8 = !1, p.login_error = "", f.login = function() {
			f.error_7 = !1;
			var e = f.error_8 = !1;
			(p.login_error = "") == p.user.lgn_email && (e = f.error_7 = !0), "" == p.user.pass && (e = f.error_8 = !0), f.error_7 ? setTimeout(function() {
				$("#pay_enter_form__lgn").focus()
			}) : f.error_8 && setTimeout(function() {
				$("#pay_enter_form__pass").focus()
			}), e || (p.blocked_in_paystation = !0, p.loading_in_paystation = !1, p.success_in_paystation = !1, p.error_in_paystation = !1, l({
				method: "POST",
				url: "/enter/apilogin/",
				params: {
					time: (new Date).getTime()
				},
				data: {
					lgn_email: p.user.lgn_email,
					pass: p.user.pass
				}
			}).success(function(e) {
				if(null != e.error && null != e.error && "" != e.error) p.login_error = e.error, p.blocked_in_paystation = !1, p.loading_in_paystation = !1, p.success_in_paystation = !1, p.error_in_paystation = !1;
				else {
					f.error_1 = !1, f.error_2 = !1, f.error_3 = !1, f.error_4 = !1, f.error_5 = !1, f.error_6 = !1, f.pay_error = "", f.pay_error_code = 0, f.pay_success = "", p.peopleService.users_by_status["6,7"] = null, "testpac" == p.data_type && (p.peopleService.users_by_testpac["id_" + p.data_id] = null);
					var t = [];
					t.push(p.profileService.loadProfile()), t.push(p.peopleService.loadUsersWithDefer([6, 7])), t.push(p.subscriptionService.loadSubscriptions()), "testpac" == p.data_type && (t.push(p.peopleService.loadUsersByTestpacs(p.data_id)), t.push(p.testpacService.getTestpac(p.data_id))), "teacher" == p.data_type && t.push(p.peopleService.loadOtherUsers([p.data_id])), p.loadData(t)
				}
			}).error(function(e) {
				null != e.error ? p.login_error = e.error : p.login_error = "Ошибка. Попробуйте снова.", p.blocked_in_paystation = !1, p.loading_in_paystation = !1, p.success_in_paystation = !1, p.error_in_paystation = !1
			}))
		}, f.class_type = "no", f.focus_id = "", f.data = [], f.new_item = {
			is_new: !0,
			is_error: !1,
			correct: !1,
			last_name: "",
			first_name: "",
			middle_name: ""
		}, f.columns = ["last_name", "first_name", "middle_name"], f.columns_count = f.columns.length, f.data.push(angular.copy(f.new_item)), f.trustAsHtmlST = function(e) {
			return n.trustAsHtml(e)
		}, f.changeItem = function() {
			"" == this.item.last_name && "" == this.item.first_name && "" == this.item.middle_name || !this.item.is_new ? "" != this.item.last_name || "" != this.item.first_name || "" != this.item.middle_name || this.item.is_new || this.$index != f.data.length - 2 || (f.data[this.$index].is_error = !1, f.data[this.$index].is_new = !0, f.data.splice(-1, 1)) : (f.data[this.$index].is_error = !0, f.data[this.$index].is_new = !1, f.data.push(angular.copy(f.new_item)))
		}, f.blurItem = function() {
			"" != this.item.last_name || "" != this.item.first_name || "" != this.item.middle_name || this.item.is_new || f.data.splice(this.$index, 1), f.checkNamesake()
		}, f.focusItem = function() {
			f.data[this.$index].is_error = !1
		}, f.removeItem = function() {
			f.data.splice(this.$index, 1)
		}, f.pasteItems = function(e, l, c) {
			e.clipboardData.items[0].getAsString(function(e) {
				var t = l,
					n = 0,
					i = 0;
				if(null != c && c < f.columns_count) {
					var r = c,
						a = (f.columns[c], []);
					0 < $(e).find("tr").length ? $(e).find("tr").each(function() {
						a.push("<tr>" + $(this).html() + "</tr>")
					}) : a = e.split(/[\n\f\r]/);
					for(n = a.length; 0 < n; n--) "" == a[n] && a.splice(n, 1);
					for(n = 0; n < a.length; n++) {
						var s = [];
						0 < $(a[n]).find("td").length ? $(a[n]).find("td").each(function() {
							var e = $(this).text().replace(/<\/?[^>]+>/g, "").replace(/[\s\t]{1,}/g, " ");
							if(e)
								for(var t = e.trim().split(/[\s\t]/), n = 0; n < t.length; n++) s.push(t[n])
						}) : s = a[n].replace(/<\/?[^>]+>/g, "").replace(/[\s\t]{1,}/g, " ").trim().split(/[\s\t]/), null == f.data[t + n] && (f.data[t + n] = angular.copy(f.new_item));
						for(i = 0; i < s.length && i < f.columns_count - r; i++) {
							var o = s[i].charAt(0).toUpperCase() + s[i].substring(1);
							f.data[t + n][f.columns[i + r]] = o
						}
						f.data[t + n].is_new && (f.data[t + n].is_new = !1, f.data.push(angular.copy(f.new_item)))
					}
				}
				f.$apply(), null != r && (1 < n || 1 < i) && $("#pay_item_" + (t + n - 1) + "_" + (r + i - 1)).focus()
			})
		}, f.checkNamesake = function() {
			var t = [];
			angular.forEach(f.data, function(i, e) {
				var r = !1;
				i.is_new || angular.forEach(p.peopleService.users, function(e) {
					if(!r) {
						var t = parseInt(e.id);
						if(-1 === p.user_access_array.indexOf(t) && -1 === p.users_by_testpac.users.indexOf(t)) {
							var n = i.middle_name.trim().toLowerCase();
							i.last_name.trim().toLowerCase() !== e.last_name.toLowerCase() || i.first_name.trim().toLowerCase() !== e.first_name.toLowerCase() || "" !== n && n !== e.middle_name.toLowerCase() || (p.user_access_array.push(t), r = !0)
						}
					}
				}), r || t.push(angular.copy(i))
			}), f.data = t
		}
	}]), angular.module("selfTestPopup", ["ngSanitize"]).controller("PopupController", ["$scope", "$rootScope", "$http", "$q", "$sce", function(a, e, t, n, i) {
		e.selfTestPopup = [], a.params = {}, a.popup_id = 0, a.POPUP_TYPE = {
			ALERT: "ALERT",
			EDITOR: "EDITOR"
		}, a.POPUP_STATUS = {
			LOADED: "LOADED",
			LOADING: "LOADING",
			SUCCESS: "SUCCESS",
			ERROR: "ERROR"
		}, a.FIELD_TYPE = {
			SELECT: "SELECT",
			TEXTAREA: "TEXTAREA",
			VARCHAR: "VARCHAR"
		}, a.VALUE_TYPE = {
			INT: "INT"
		}, a.status = a.POPUP_STATUS.LOADED, a.trustAsHtmlST = function(e) {
			return i.trustAsHtml(e)
		}, a.updateData = function(e) {
			a.data = angular.copy(e), a.data.type || (a.data.type = a.POPUP_TYPE.ALERT)
		}, a.openPopup = function(e, t, n, i) {
			a.params = void 0 !== n && n ? n : {}, a.popup_id++, i || (a.status = a.POPUP_STATUS.LOADED), void 0 !== t && t && (a.saveData = t), a.updateData(e), $("#self_test_popup").modal({
				backdrop: "static",
				show: !0
			}), $("#self_test_popup").on("shown", function() {
				setTimeout(function() {
					$("#self_test_popup input:eq(0)").focus()
				})
			})
		}, a.save = function() {
			var i = !0,
				r = {};
			if(angular.forEach(a.data.fields, function(e, t) {
					var n = "string" == typeof e.value ? e.value.trim() : e.value + "";
					!n || "0" === n && e.type === a.FIELD_TYPE.SELECT ? (i && setTimeout(function() {
						$("#self_test_popup__field_" + e.name).focus()
					}, 0), i = !1, a.data.fields[t].error = !0) : a.data.fields[t].error = !1, e.value_type === a.VALUE_TYPE.INT ? r[e.name] = parseInt(n) : r[e.name] = n
				}), !i) return !1;
			a.saveData && a.saveData(r)
		}, a.keyDown = function(e) {
			13 == e.keyCode && (e.preventDefault(), a.save())
		}, a.closePopup = function() {
			$("#self_test_popup").modal("hide"), $("#self_test_popup").on("hidden", function() {
				a.params = {}
			})
		}, a.loading = function() {
			a.status = a.POPUP_STATUS.LOADING
		}, a.success = function() {
			a.status = a.POPUP_STATUS.SUCCESS
		}, a.error = function() {
			a.status = a.POPUP_STATUS.ERROR
		}, a.loaded = function() {
			a.status = a.POPUP_STATUS.LOADED
		}, e.selfTestPopup.openPopup = a.openPopup, e.selfTestPopup.loading = a.loading, e.selfTestPopup.success = a.success, e.selfTestPopup.error = a.error, e.selfTestPopup.loaded = a.loaded, e.selfTestPopup.updateData = a.updateData, e.selfTestPopup.closePopup = a.closePopup
	}]), $(document).on("focusin", function(e) {
		$(e.target).closest(".mce-window").length && e.stopImmediatePropagation()
	}), angular.module("selfTestQuestions", ["ngSanitize", "ui.tinymce"]).filter("in_array", function() {
		return function(e, t, n) {
			var i = [];
			return null == n && (n = "id"), angular.isArray(t) && angular.forEach(e, function(e) {
				-1 != t.indexOf(e[n]) && i.push(e)
			}), i
		}
	}).directive("mySolvedprogress", function() {
		return function(e, n, t) {
			e.$watch(t.mySolvedprogress, function(e) {
				var t = 100 - Math.round(e.solved_correct / e.solved_amount * 100);
				n.html('<div class="horizontal_bar gradient" style="background: #eeeeee !important; width:' + t + '%"></div>')
			})
		}
	}).controller("QuestionsControlsController", ["$scope", "$rootScope", "$filter", "$http", "$sce", "$q", "questionService", "peopleService", "curriculumService", "compilerService", function(s, o, e, l, t, c, u, d, f, p) {
		s.questionService = u, s.peopleService = d, s.curriculumService = f, s.compilerService = p, o.tinymceDiv = {
			language: "ru",
			skin: "white",
			inline: !0,
			fixed_toolbar_container: "#question_container_edit_toolbar",
			plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste"],
			paste_as_text: !0,
			toolbar: "undo redo | styleselect | table | removeformat subscript superscript charmap | bold italic underline strikethrough st_formula | bullist numlist | link",
			menubar: !1,
			setup: function(n) {
				var t = function(t) {
					n.formatter.register("mathPhp", {
						inline: "em",
						classes: ["mathPhp"]
					}), n.formatter.formatChanged("mathPhp", function(e) {
						t.active(e)
					})
				};
				n.addButton("st_formula", {
					text: "ƒ",
					icon: !1,
					onPostRender: function() {
						var e = this;
						n.formatter ? t(e) : n.on("init", function() {
							t(e)
						})
					},
					onclick: function() {
						n.formatter.toggle("mathPhp")
					}
				})
			},
			formats: {
				italic: {
					inline: "span",
					classes: "italic"
				}
			},
			style_formats: [{
				title: "Формула",
				inline: "em",
				classes: "mathPhp"
			}, {
				title: "Заголовок",
				block: "h2"
			}, {
				title: "Параграф",
				block: "p"
			}, {
				title: "Код",
				block: "pre"
			}, {
				title: "Цитата или примечание",
				block: "blockquote"
			}],
			table_class_list: [{
				title: "None",
				value: ""
			}, {
				title: "По-умолчанию",
				value: "table"
			}, {
				title: "Все границы",
				value: "table table-border"
			}, {
				title: "Автоматическая ширина",
				value: "table table-width-auto"
			}, {
				title: "Подсветка строк при наведении",
				value: "table table-hover"
			}, {
				title: "Подсветка строк и все границы",
				value: "table table-hover table-border"
			}, {
				title: "Подсветка строк и автоматическая ширина",
				value: "table table-hover table-width-auto"
			}, {
				title: "Все границы и автоматическая ширина",
				value: "table table-border table-width-auto"
			}, {
				title: "Подсветка строк, все границы и автоматическая ширина",
				value: "table table-hover table-border table-width-auto"
			}],
			table_default_attributes: {
				class: "table"
			}
		}, s.questionBlock = function(e, t) {
			0 == e.data.blocked_by_user && u.questionBlock(e, t, 1).then(function(e) {}, function(e) {
				alert("Ошибка")
			})
		}, s.questionUnBlock = function(e, t, n) {
			1 == e.data.blocked_by_user && u.questionBlock(e, n, 0).then(function(e) {
				t && (0 == e.data.blocked_by_user && 0 == e.data.solved_amount ? s.openQuestionEditor(e) : alert("Вопрос нельзя редактировать, так как его уже решают."))
			}, function(e) {
				alert("Ошибка")
			})
		}, s.questionBlockUnBlock = function(e, t) {
			0 == e.data.blocked_by_user ? s.questionBlock(e, t) : s.questionUnBlock(e, !1, t)
		}, s.questionTag = function(e, t, n, i) {
			u.questionTag(e, t, n, i).then(function(e) {}, function(e) {
				alert("Ошибка")
			})
		}, s.questionPrivate = function(e, t) {
			u.questionPrivate(e, t).then(function(e) {}, function(e) {
				alert("Ошибка")
			})
		}, s.questionDelete = function(i) {
			(i.data.type_id < 9 && confirm("Удалить этот вопрос?") || 9 <= i.data.type_id && confirm("Удалить это содержание?")) && (i.loading = !0, l({
				method: "GET",
				url: "/questions/delete/",
				params: {
					question_id: i.data.id,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				null != e.success ? 0 < i.data.parent_id ? angular.forEach(u.questions, function(e, t) {
					if(e.data.id == i.data.parent_id) {
						var n = u.questions[t].childs.indexOf(i);
						7 == e.data.type_id && (e.child_with_blocked_by_user -= u.questions[t].childs[n].data.blocked_by_user, 0 < u.questions[t].childs[n].data.solved_amount && e.child_with_solved_amount--), u.questions[t].childs.splice(n, 1), i.loading = !1
					}
				}) : (u.questions.splice(u.questions.indexOf(i), 1), i.loading = !1) : (null != e.error ? alert(e.error) : alert("Ошибка"), i.loading = !1)
			}).error(function(e) {
				alert("Ошибка"), i.loading = !1
			}))
		}, s.questionCopy = function(i) {
			confirm("Создать копию этого вопроса?") && (i.loading = !0, l({
				method: "GET",
				url: "/questions/copy/",
				params: {
					question_id: i.data.id,
					time: (new Date).getTime()
				}
			}).success(function(n) {
				0 < n.data.parent_id ? angular.forEach(u.questions, function(e, t) {
					e.data.id == n.data.parent_id && (u.questions[t].childs.push(n), i.loading = !1)
				}) : (u.questions.push(n), i.loading = !1), setTimeout(u.jplayerEditorInit, 1e3), setTimeout(u.colorboxInit, 1e3)
			}).error(function(e) {
				alert("Ошибка"), i.loading = !1
			}))
		}, s.openQuestionEditor = function(e, t, n, i) {
			if(null == e || null == e ? u.setNewQuestionInEditor() : u.setQuestionInEditor(e), null != t && null != t && t && (u.question_in_editor.data.id = 0), null != n && null != n && n && u.setNewQuestionInEditor(e.data.id, e.ksa, e.data.type_id), null != i && null != i && 0 < i && (u.question_in_editor.data.type_id = i), 7 != u.question_in_editor.data.type_id && 8 != u.question_in_editor.data.type_id || (u.question_in_editor.block_types = !0), 4 != u.question_in_editor.data.type_id && 16 != u.question_in_editor.data.type_id) u.question_in_editor.answer_choise.push(angular.copy(u.new_answer_choise)), u.question_in_editor.answer_choise = [angular.copy(u.question_in_editor.answer_choise), []], angular.forEach(u.question_in_editor.answer_choise[0], function(e, t) {
				u.question_in_editor.answer_choise[1].push(angular.copy(u.new_answer_choise)), e.is_new || (u.question_in_editor.answer_choise[1][t].is_new = !1, u.question_in_editor.answer_choise[1][t].is_error = !0, u.question_in_editor.answer_choise[0][t].is_error = !0, "1" == e.correct || 1 == e.correct ? e.correct = !0 : e.correct = !1)
			});
			else {
				var r = [];
				void 0 !== u.question_in_editor.answer_choise[1] ? (r.push(angular.copy(u.question_in_editor.answer_choise[1])), r.push(angular.copy(u.question_in_editor.answer_choise[2]))) : (r.push([]), r.push([])), u.question_in_editor.answer_choise = r, u.question_in_editor.answer_choise[0].push(angular.copy(u.new_answer_choise)), u.question_in_editor.answer_choise[1].push(angular.copy(u.new_answer_choise))
			}
			u.question_in_editor.ksa_count = 0, u.question_in_editor.ksa_empty_title = "###", o.topic_structure_in_editor = angular.copy(u.topic_structure), angular.forEach(o.topic_structure_in_editor.str_topics, function(e, t) {
				angular.forEach(e, function(e, t) {
					angular.forEach(e, function(e, t) {
						angular.forEach(e.topics, function(e, t) {
							e.ksa.push(angular.copy(o.new_ksa)), angular.forEach(e.ksa, function(e, t) {
								var n = parseInt(e.id);
								0 < n && -1 != u.question_in_editor.ksa.indexOf(n) ? e.is_checked = !0 : e.is_checked = !1, 0 < n && e.title !== u.question_in_editor.ksa_empty_title && u.question_in_editor.ksa_count++
							})
						})
					})
				})
			}), "1" == u.question_in_editor.data.is_order || 1 == u.question_in_editor.data.is_order ? u.question_in_editor.data.is_order = !0 : u.question_in_editor.data.is_order = !1, "1" == u.question_in_editor.data.shuffle_answers || 1 == u.question_in_editor.data.shuffle_answers ? u.question_in_editor.data.shuffle_answers = !0 : u.question_in_editor.data.shuffle_answers = !1, u.question_in_editor.clear_drop_box = !0, o.loading_in_editor = !1, o.success_in_editor = !1, o.error_in_editor = !1, o.question_window_type = "editor", $("#ng_question_window").modal({
				backdrop: "static",
				show: !0
			}), $("#ng_question_window").on("shown", function() {
				var e = tinymce.EditorManager.get("question_container_edit__text__text");
				null != e && null != e && e.focus()
			})
		}, o.shareQuestion = function(e, t) {
			if(o.loading_in_editor = !0, null != t) {
				o.question_window_type = "share", u.setQuestionInEditor(e), u.question_in_editor.user_access_array = f.curriculum_in_editor.user_access_array, u.question_in_editor.user_access = [];
				for(var n = 0; n < u.question_in_editor.user_access_array.length; n++) u.question_in_editor.user_access[u.question_in_editor.user_access_array[n]] = {
					type_id: 1
				};
				o.loading_in_editor = !1, o.success_in_editor = !1, o.error_in_editor = !1
			} else {
				u.setQuestionInEditor(e);
				var i = [],
					r = [],
					a = d.users.length;
				for(n = 0; n < a; n++) r.push(d.users[n].id + "");
				a = d.otherUsers.length;
				for(n = 0; n < a; n++) r.push(d.otherUsers[n].id + "");
				for(var s in e.user_access) e.user_access.hasOwnProperty(s) && -1 == r.indexOf(s) && i.push(s);
				d.loadOtherUsers(i).then(function(e) {
					o.loading_in_editor = !1
				}, function(e) {
					alert("Ошибка"), o.loading_in_editor = !1
				}), o.success_in_editor = !1, o.error_in_editor = !1, o.question_window_type = "share", $("#ng_question_window").modal({
					backdrop: "static",
					show: !0
				})
			}
		}, s.shareQuestion = o.shareQuestion, s.newAuthorsAnswer = {
			text: "",
			text_html: "",
			compiler_id: 0,
			is_draft: !0,
			is_finish: !1,
			all_test_count: 0,
			correct_test_count: 0,
			score_final_percent: 0
		}, s.addUpdateAuthorsAnswer = function(t, n, i) {
			var r = void 0 === i;
			if(!t || !n || !n.popupData || !r && !i.id) return !1;
			var e = null === s.compilerService.compilers;
			if(e) {
				o.selfTestPopup.loading();
				var a = [];
				a.push(s.compilerService.loadCompilers()), c.all(a).then(function(e) {
					angular.forEach(n.popupData.fields, function(e, t) {
						"compiler_id" === e.name && (n.popupData.fields[t].data = angular.copy(p.compilers))
					}), o.selfTestPopup.updateData(n.popupData), o.selfTestPopup.loaded()
				}, function(e) {
					o.selfTestPopup.error()
				})
			}
			if(angular.forEach(n.popupData.fields, function(e, t) {
					"compiler_id" === e.name && (n.popupData.fields[t].data = angular.copy(p.compilers))
				}), r) i = angular.copy(s.newAuthorsAnswer);
			else if(!i.is_draft) return o.selfTestPopup.openPopup(n.popupData, function(e) {
				o.selfTestPopup.closePopup()
			}, {
				disableEditingData: !0
			}, e), !1;
			return o.selfTestPopup.openPopup(n.popupData, function(e) {
				o.selfTestPopup.closePopup();
				var n = {};
				angular.forEach(e, function(e, t) {
					i[t] = e, n[t] = e
				}), n.question_id = t.data.id, n.id = i.id ? i.id : 0, i.id && (i.id = 0), l({
					method: "POST",
					url: "/questions/addupdateauthorsanswer/",
					params: {
						time: (new Date).getTime()
					},
					data: n
				}).success(function(e) {
					!e.error && e.id ? angular.forEach(e, function(e, t) {
						i[t] = e
					}) : console.log("error")
				}).error(function(e) {
					console.log("error")
				}), void 0 === t.authors_answers && (t.authors_answers = []), r && t.authors_answers.push(i)
			}, n.popupParams ? n.popupParams : {
				saveButtonTitle: "Добавить"
			}, e), !1
		}, s.toggleAuthorsAnswer = function(e, n, t) {
			if(!n.id || !e) return !1;
			var i = {
				id: n.id,
				data: {}
			};
			if(t && angular.forEach(t, function(e, t) {
					n[t] = e, i.data[t] = e
				}), n.id && (n.id = 0), t && void 0 !== t.deleted && t.deleted) {
				if(!confirm("Удалить?")) return !1;
				e.authors_answers.splice(e.authors_answers.indexOf(n), 1)
			}
			l({
				method: "POST",
				url: "/questions/addupdateauthorsanswer/",
				params: {
					time: (new Date).getTime()
				},
				data: i
			}).success(function(e) {
				!e.error && e.id ? angular.forEach(e, function(e, t) {
					n[t] = e
				}) : e.error && console.log("error")
			}).error(function(e) {
				console.log("error")
			})
		}
	}]).controller("QuestionsController", ["$scope", "$rootScope", "$filter", "$http", "$sce", "questionService", function(t, e, n, i, r, a) {
		t.questionService = a, t.topic_id = parseInt($("#param_topic_id").val()), t.curriculum_id = parseInt($("#param_curriculum_id").val()), e.new_ksa = {
			title: "",
			is_new: !0,
			is_edit: !0,
			is_checked: !1
		}, t.trustAsHtmlST = function(e) {
			return r.trustAsHtml(e)
		}, t.math_round = function(e) {
			return Math.round(e)
		}, e.$watch("loading_in_editor", function(e) {
			setTimeout(function() {
				$(window).resize()
			}, 0)
		}), e.$watch("success_in_editor", function(e) {
			setTimeout(function() {
				$(window).resize()
			}, 0)
		}), e.$watch("error_in_editor", function(e) {
			setTimeout(function() {
				$(window).resize()
			}, 0)
		}), t.$watch("type", function(e) {
			switch(e) {
				case "content":
					a.loadQuestions(t.topic_id, t.curriculum_id, [9, 10, 12, 13, 14, 15]);
					break;
				case "questions":
					a.loadQuestions(t.topic_id, t.curriculum_id, [], [9, 10, 12, 13, 14, 15]);
					break;
				default:
					a.loadQuestions(t.topic_id, t.curriculum_id)
			}
		}), t.addQuestionToListAfterSave = function(n) {
			a.topic_structure = n.structure, angular.isArray(a.questions) || (a.questions = []), 0 < n.question.data.parent_id ? angular.forEach(a.questions, function(e, t) {
				e.data.id == n.question.data.parent_id && a.questions[t].childs.push(n.question)
			}) : a.questions.push(n.question);
			try {
				"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("question_add")
			} catch(e) {
				console.log(e.toString())
			}
			setTimeout(a.jplayerEditorInit, 1e3), setTimeout(a.colorboxInit, 1e3)
		}
	}]).controller("QuestionEditorController", ["$scope", "$rootScope", "$filter", "$http", "$sce", "questionService", "peopleService", "curriculumService", function(p, l, e, o, t, _, c, u) {
		p.questionService = _, p.peopleService = c, p.curriculumService = u, p.topic_id = parseInt($("#param_topic_id").val()), p.curriculum_id = parseInt($("#param_curriculum_id").val()), p.trustAsHtmlST = function(e) {
			return t.trustAsHtml(e)
		}, p.parseInt = function(e) {
			return parseInt(e)
		}, $(".upload_qfile").each(function() {
			var e = $(this),
				t = e.attr("data-ext"),
				i = e.parents(".upload_qfile_container");
			$.ajax_upload(e, {
				action: "/questions/uploadfile/?time=" + (new Date).getTime() + (null != t && "" != t ? "&ext=" + t : ""),
				name: "myfile",
				onSubmit: function(e, t) {
					if(this.disable(), i.hasClass("uploading")) return !1;
					i.addClass("uploading"), this.disable()
				},
				onComplete: function(e, t) {
					this.enable();
					var n = jQuery.parseJSON(t);
					null != n.error ? alert(n.error) : (null == _.question_in_editor.files && (_.question_in_editor.files = []), _.question_in_editor.files.push(n), l.$apply()), i.removeClass("uploading")
				}
			})
		}), p.submitQuestionFile = function(n, e) {
			if(!n.hasClass("uploading")) {
				var t = n.find(".upload_question_file"),
					i = n.find(".progress .bar"),
					r = i.find(".uploading_question_file__state"),
					a = t.attr("data-ext"),
					s = t.attr("data-max_mb"),
					o = new FormData;
				if(e.size > 1024 * s * 1024) return void alert("Максимальный размер файла " + s + " Мб. Пожалуйста, выберите файл меньше " + s + " Мб.");
				i.css("width", "0%"), r.text("0%"), n.addClass("uploading"), o.append("myfile", e), $.ajax({
					url: "/questions/uploadfile/?time=" + (new Date).getTime() + (null != a && "" != a ? "&ext=" + a : ""),
					type: "post",
					contentType: !1,
					processData: !1,
					data: o,
					dataType: "json",
					xhr: function() {
						var e = $.ajaxSettings.xhr();
						return e.upload.addEventListener("progress", function(e) {
							if(e.lengthComputable) {
								var t = Math.ceil(e.loaded / e.total * 100);
								i.css("width", t + "%"), r.text(t + "%")
							}
						}, !1), e
					},
					success: function(e) {
						null != e.error ? alert(e.error) : (null == _.question_in_editor.files && (_.question_in_editor.files = []), _.question_in_editor.files.push(e), l.$apply()), n.removeClass("uploading")
					},
					error: function(e, t) {
						null != e.error ? alert(e.error) : alert("Ошибка загрузки файла."), n.removeClass("uploading")
					}
				})
			}
		}, $(".upload_question_file").each(function() {
			var e = $(this),
				n = e.parents(".upload_question_file_container"),
				i = n.find("input[type=file]");
			e.live("click", function() {
				i.click()
			}), i.bind("change", function(e) {
				var t = e.target.files || e.dataTransfer.files;
				t.length && (p.submitQuestionFile(n, t[0]), i.val(""))
			})
		}), p.removeFile = function(e) {
			_.question_in_editor.files.splice(_.question_in_editor.files.indexOf(e), 1), o({
				method: "GET",
				url: "/questions/removefile/",
				params: {
					file_id: e.id,
					time: (new Date).getTime()
				}
			}).success(function(e) {}).error(function(e) {
				alert("Ошибка удаления файла")
			})
		}, p.updateFileData = function(a, t, n, s) {
			var o = _.questions;
			n ? angular.forEach(o, function(e, r) {
				e.data.id == n && angular.forEach(e.childs, function(e, n) {
					if(e.data.id == t) {
						var i = -1;
						angular.forEach(o[r].childs[n].files, function(e, t) {
							e.id == a && (i = t)
						}), 0 <= i && angular.forEach(s, function(e, t) {
							o[r].childs[n].files[i][t] = e
						})
					}
				})
			}) : angular.forEach(o, function(e, n) {
				if(e.data.id == t) {
					var i = -1;
					angular.forEach(o[n].files, function(e, t) {
						e.id == a && (i = t)
					}), 0 <= i && angular.forEach(s, function(e, t) {
						o[n].files[i][t] = e
					})
				}
			})
		}, p.editFile = function(e, t) {
			var n = {
					id: t.model.id,
					question_id: _.question_in_editor.data.id,
					question_parent_id: _.question_in_editor.data.parent_id
				},
				i = _.question_in_editor.files.indexOf(t.model);
			angular.forEach(e, function(e, t) {
				_.question_in_editor.files[i][t] = e, n[t] = e
			}), p.updateFileData(n.id, n.question_id, n.question_parent_id, e), o({
				method: "POST",
				url: "/questions/apiupdatefile/",
				params: {
					time: (new Date).getTime()
				},
				data: n
			}).success(function(e) {
				!e.error && e.id ? p.updateFileData(parseInt(e.id), parseInt(e.question_id), parseInt(e.question_parent_id), e.data) : console.log("error")
			}).error(function(e) {
				console.log("error")
			})
		}, p.questionSave = function() {
			var e = _.question_in_editor,
				t = !1;
			if(!t && (e.data.type_id <= 8 || 16 == e.data.type_id) && 8 != e.data.parent_type_id && "" == e.data.text && (t = !0, alert("Введите текст вопроса")), t || 12 != e.data.type_id || null != e.files && 0 != e.files.length || (t = !0, alert("Загрузите архив с курсом в формате SCORM")), !t) {
				var n = 0,
					i = 0;
				if(angular.forEach(l.topic_structure_in_editor.str_topics, function(e, t) {
						angular.forEach(e, function(e, t) {
							angular.forEach(e, function(e, t) {
								angular.forEach(e.topics, function(e, t) {
									angular.forEach(e.ksa, function(e, t) {
										e.is_checked && n++, e.is_new || i++
									})
								})
							})
						})
					}), !t && 0 == i)
					if(e.ksa_count) t = !0, alert("Добавьте хотя бы одно знание, умение или навык для этого вопроса");
					else {
						var r = angular.copy(l.new_ksa);
						r.title = e.ksa_empty_title, r.is_new = !1;
						var a = !(r.is_checked = !0);
						angular.forEach(l.topic_structure_in_editor.str_topics, function(e, t) {
							a || angular.forEach(e, function(e, t) {
								a || angular.forEach(e, function(e, t) {
									a || angular.forEach(e.topics, function(e, t) {
										a || (e.ksa.push(r), a = !0)
									})
								})
							})
						}), n++, i++
					}
				if(!t && 0 == n) {
					a = !1;
					angular.forEach(l.topic_structure_in_editor.str_topics, function(e, t) {
						a || angular.forEach(e, function(e, t) {
							a || angular.forEach(e, function(e, t) {
								a || angular.forEach(e.topics, function(e, t) {
									a || angular.forEach(e.ksa, function(e, t) {
										a || e.title === _.question_in_editor.ksa_empty_title && (e.is_checked = !0, a = !0)
									})
								})
							})
						})
					}), a || (t = !0, alert("Выберите хотя бы одно знание, умение или навык для этого вопроса"))
				}
			}
			if(!t) {
				l.loading_in_editor = !0, l.success_in_editor = !1, l.error_in_editor = !1;
				var s = l.topic_structure_in_editor.str_topics;
				o({
					method: "POST",
					url: "/questions/save/",
					params: {
						time: (new Date).getTime()
					},
					data: {
						question: e,
						structure: s,
						sch_topic_id: p.topic_id
					}
				}).success(function(i) {
					_.topic_structure = i.structure;
					var r, n = !1;
					"8" == i.question.data.parent_type_id && angular.forEach(_.questions_database, function(e, t) {
						e.data.id == i.question.data.parent_id && (n = !0)
					}), r = n || null != i.question.user_access_type_id && 0 < i.question.user_access_type_id ? _.questions_database : _.questions;
					var a = !1;
					if(0 < i.question.data.parent_id ? angular.forEach(r, function(e, n) {
							e.data.id == i.question.data.parent_id && angular.forEach(e.childs, function(e, t) {
								e.data.id == i.question.data.id && (r[n].childs[t] = i.question, a = !0)
							})
						}) : angular.forEach(r, function(e, n) {
							e.data.id == i.question.data.id && (r[n] = i.question, a = !0, angular.forEach(e.childs, function(e, t) {
								r[n].childs[t].ksa = i.question.ksa
							}))
						}), a) l.loading_in_editor = !1, l.success_in_editor = !0, l.error_in_editor = !1;
					else {
						angular.isArray(r) || (r = []), 0 < i.question.data.parent_id ? angular.forEach(r, function(e, t) {
							e.data.id == i.question.data.parent_id && (r[t].childs.push(i.question), p.last_added_question = i.question)
						}) : (r.push(i.question), p.last_added_question = i.question);
						try {
							"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("question_add")
						} catch(e) {
							console.log(e.toString())
						}
						u.curriculum_in_editor.hasOwnProperty("id") ? (l.loading_in_editor = !1, l.success_in_editor = !0, l.error_in_editor = !1) : u.loadCurriculumInEditor(p.curriculum_id, c).then(function(e) {
							l.loading_in_editor = !1, l.success_in_editor = !0, l.error_in_editor = !1
						}, function(e) {
							l.loading_in_editor = !1, l.success_in_editor = !0, l.error_in_editor = !1
						})
					}
					setTimeout(_.jplayerEditorInit, 1e3), setTimeout(_.colorboxInit, 1e3)
				}).error(function(e) {
					alert("Ошибка"), l.loading_in_editor = !1, l.success_in_editor = !1, l.error_in_editor = !1
				})
			}
		}, p.changeAnswer = function() {
			4 == _.question_in_editor.data.type_id || 16 == _.question_in_editor.data.type_id ? ("" != _.question_in_editor.answer_choise[0][this.$index].text && _.question_in_editor.answer_choise[0][this.$index].is_new || "" != _.question_in_editor.answer_choise[1][this.$index].text && _.question_in_editor.answer_choise[1][this.$index].is_new ? (_.question_in_editor.answer_choise[0][this.$index].is_new = !1, _.question_in_editor.answer_choise[1][this.$index].is_new = !1, _.question_in_editor.answer_choise[0].push(angular.copy(_.new_answer_choise)), _.question_in_editor.answer_choise[1].push(angular.copy(_.new_answer_choise))) : "" != _.question_in_editor.answer_choise[0][this.$index].text || _.question_in_editor.answer_choise[0][this.$index].is_new || "" != _.question_in_editor.answer_choise[1][this.$index].text || _.question_in_editor.answer_choise[1][this.$index].is_new || this.$index != _.question_in_editor.answer_choise[0].length - 2 || (_.question_in_editor.answer_choise[0][this.$index].is_new = !0, _.question_in_editor.answer_choise[1][this.$index].is_new = !0, _.question_in_editor.answer_choise[0].splice(-1, 1), _.question_in_editor.answer_choise[1].splice(-1, 1)), !_.question_in_editor.answer_choise[0][this.$index].is_new && !_.question_in_editor.answer_choise[1][this.$index].is_new && "" == _.question_in_editor.answer_choise[0][this.$index].text && "" != _.question_in_editor.answer_choise[1][this.$index].text || "" != _.question_in_editor.answer_choise[0][this.$index].text && "" == _.question_in_editor.answer_choise[1][this.$index].text && this.$index != _.question_in_editor.answer_choise[0].length - 2 ? (_.question_in_editor.answer_choise[0][this.$index].is_error = !0, _.question_in_editor.answer_choise[1][this.$index].is_error = !0) : (_.question_in_editor.answer_choise[0][this.$index].is_error = !1, _.question_in_editor.answer_choise[1][this.$index].is_error = !1)) : "" != this.answer.text && this.answer.is_new ? (_.question_in_editor.answer_choise[0][this.$index].is_error = !0, _.question_in_editor.answer_choise[1][this.$index].is_error = !0, _.question_in_editor.answer_choise[0][this.$index].is_new = !1, _.question_in_editor.answer_choise[1][this.$index].is_new = !1, _.question_in_editor.answer_choise[0].push(angular.copy(_.new_answer_choise)), _.question_in_editor.answer_choise[1].push(angular.copy(_.new_answer_choise))) : "" != this.answer.text || this.answer.is_new || this.$index != _.question_in_editor.answer_choise[0].length - 2 || (_.question_in_editor.answer_choise[0][this.$index].is_error = !1, _.question_in_editor.answer_choise[1][this.$index].is_error = !1, _.question_in_editor.answer_choise[0][this.$index].is_new = !0, _.question_in_editor.answer_choise[1][this.$index].is_new = !0, _.question_in_editor.answer_choise[0].splice(-1, 1), _.question_in_editor.answer_choise[1].splice(-1, 1))
		}, p.blurAnswer = function() {
			4 == _.question_in_editor.data.type_id || 16 == _.question_in_editor.data.type_id ? ("" != _.question_in_editor.answer_choise[0][this.$index].text || _.question_in_editor.answer_choise[0][this.$index].is_new || "" != _.question_in_editor.answer_choise[1][this.$index].text || _.question_in_editor.answer_choise[1][this.$index].is_new || (_.question_in_editor.answer_choise[0].splice(this.$index, 1), _.question_in_editor.answer_choise[1].splice(this.$index, 1)), !_.question_in_editor.answer_choise[0][this.$index].is_new && !_.question_in_editor.answer_choise[1][this.$index].is_new && "" == _.question_in_editor.answer_choise[0][this.$index].text && "" != _.question_in_editor.answer_choise[1][this.$index].text || "" != _.question_in_editor.answer_choise[0][this.$index].text && "" == _.question_in_editor.answer_choise[1][this.$index].text ? (_.question_in_editor.answer_choise[0][this.$index].is_error = !0, _.question_in_editor.answer_choise[1][this.$index].is_error = !0) : (_.question_in_editor.answer_choise[0][this.$index].is_error = !1, _.question_in_editor.answer_choise[1][this.$index].is_error = !1)) : "" != this.answer.text || this.answer.is_new || (_.question_in_editor.answer_choise[0].splice(this.$index, 1), _.question_in_editor.answer_choise[1].splice(this.$index, 1)), _.question_in_editor.answer_choise[0][this.$index].is_focus = !1, _.question_in_editor.answer_choise[1][this.$index].is_focus = !1, setTimeout(function() {
				$(window).resize()
			}, 0)
		}, p.changeKSA = function(e, t, n, i) {
			var r = l.topic_structure_in_editor.str_topics[e][t][n].topics[i].ksa,
				a = r[this.$index];
			"" != a.title && a.is_new ? (a.is_new = !1, r.push(angular.copy(l.new_ksa))) : "" != a.title || a.is_new || this.$index != r.length - 2 || (a.is_new = !0, r.splice(-1, 1))
		}, p.blurKSA = function(e, t, n, i) {
			var r = l.topic_structure_in_editor.str_topics[e][t][n].topics[i].ksa,
				a = r[this.$index];
			"" != a.title || a.is_new || r.splice(this.$index, 1)
		}, p.focusAnswer = function() {
			_.question_in_editor.answer_choise[0][this.$index].is_error = !1, _.question_in_editor.answer_choise[1][this.$index].is_error = !1, _.question_in_editor.answer_choise[0][this.$index].is_focus = !0, _.question_in_editor.answer_choise[1][this.$index].is_focus = !0, setTimeout(function() {
				$(window).resize()
			}, 0)
		}, p.changeQType = function() {
			var n = [],
				i = [];
			angular.forEach(_.question_in_editor.answer_choise[0], function(e, t) {
				("" != e.text || e.is_new) && (n.push(angular.copy(e)), i.push(angular.copy(_.question_in_editor.answer_choise[1][t])))
			}), _.question_in_editor.answer_choise[0] = angular.copy(n), _.question_in_editor.answer_choise[1] = angular.copy(i)
		}, p.pasteItems = function(e, d, f) {
			"" == _.question_in_editor.answer_choise[f][d].text && e.clipboardData.items[0].getAsString(function(e) {
				_.question_in_editor.answer_choise[f][d].text = "";
				var t = d,
					n = 0,
					i = 0;
				if(null != f && f < 2) {
					var r = f,
						a = e.split(/[\n\f\r]/);
					for(n = a.length; 0 < n; n--) "" == a[n] && a.splice(n, 1);
					for(n = 0; n < a.length; n++) {
						var s = [a[n].trim()];
						for(i = 0; i < s.length && i < 2 - r; i++) null == _.question_in_editor.answer_choise[i + r][t + n] && _.question_in_editor.answer_choise[i + r].push(angular.copy(_.new_answer_choise)), _.question_in_editor.answer_choise[i + r][t + n].text += s[i], _.question_in_editor.answer_choise[i + r][t + n].is_new = !1;
						for(var o = 0; o < r; o++) null == _.question_in_editor.answer_choise[o][t + n] && _.question_in_editor.answer_choise[o].push(angular.copy(_.new_answer_choise)), _.question_in_editor.answer_choise[o][t + n].is_new = !1;
						for(var l = i + r; l < 2; l++) null == _.question_in_editor.answer_choise[l][t + n] && _.question_in_editor.answer_choise[l].push(angular.copy(_.new_answer_choise)), _.question_in_editor.answer_choise[l][t + n].is_new = !1;
						for(var c = !1, u = 0; u < 2; u++) "" == _.question_in_editor.answer_choise[u][t + n].text && (c = !0);
						for(u = 0; u < 2; u++) _.question_in_editor.answer_choise[u][t + n].is_error = c
					}
					for(u = 0; u < 2; u++) null == _.question_in_editor.answer_choise[u][t + n] && _.question_in_editor.answer_choise[u].push(angular.copy(_.new_answer_choise))
				}
				p.$apply(), null != r && (1 < n || 1 < i) && $("#answer_text_" + (t + n - 1) + "_" + (r + i - 1)).focus()
			})
		}, p.inputNavigation = function(e, t, n) {
			38 == e.keyCode ? (e.preventDefault(), 0 < $("#answer_text_" + (t - 1) + "_" + n).length && setTimeout(function() {
				$("#answer_text_" + (t - 1) + "_" + n).focus()
			}, 0)) : 40 != e.keyCode && 13 != e.keyCode || (e.preventDefault(), 0 < $("#answer_text_" + (t + 1) + "_" + n).length && setTimeout(function() {
				$("#answer_text_" + (t + 1) + "_" + n).focus()
			}, 0))
		}, p.autocomplete_options_other_author_cache = {}, p.autocomplete_options_other_author = {
			options: {
				html: !0,
				focusOpen: !1,
				onlySelect: !1,
				source: function(e, i) {
					var r = e.term;
					r in p.autocomplete_options_other_author_cache ? i(p.autocomplete_options_other_author_cache[r]) : $.getJSON("/questions/apigetotherauthor/?time=" + (new Date).getTime(), e, function(e, t, n) {
						p.autocomplete_options_other_author_cache[r] = e, i(e)
					})
				}
			},
			events: {
				select: function(e, t) {
					_.question_in_editor.other_author.id = 0, _.question_in_editor.other_author.title = t.item.value
				}
			},
			methods: {}
		}
	}]).controller("ShareQuestionEditorController", ["$scope", "$rootScope", "$filter", "$http", "$sce", "questionService", "peopleService", function(r, a, e, i, t, s, o) {
		r.questionService = s, (r.peopleService = o).loadUsers([1, 2, 3, 4, 5]), r.autocomplete_user_12345 = {
			value: ""
		}, r.autocomplete_options_users_12345 = {
			options: {
				html: !0,
				focusOpen: !0,
				onlySelect: !0,
				source: function(e, t) {
					var n = o.users,
						i = [];
					angular.forEach(n, function(e, t) {
						-1 == s.question_in_editor.user_access_array.indexOf(e.id) && [1, 2, 3, 4, 5].inArray(parseInt(e.status_id)) && i.push(e)
					}), (i = r.autocomplete_options_users_12345.methods.filter(i, e.term)).length || i.push({
						groupLabel: "<small><i>коллеги не найдены</i></small>"
					}), t(i)
				}
			},
			events: {
				select: function(e, t) {
					-1 == s.question_in_editor.user_access_array.indexOf(t.item.id) && (s.question_in_editor.user_access_array.push(t.item.id), s.question_in_editor.user_access[t.item.id] = {
						type_id: 1
					}), e.preventDefault()
				}
			},
			methods: {}
		}, r.removeUserAccess = function(e) {
			s.question_in_editor.user_access_array.splice(s.question_in_editor.user_access_array.indexOf(e), 1)
		}, r.questionUserAccessSave = function() {
			var r = s.question_in_editor;
			a.loading_in_editor = !0, a.success_in_editor = !1, a.error_in_editor = !1;
			var e = [];
			for(var t in r.user_access)
				if(r.user_access.hasOwnProperty(t) && -1 != s.question_in_editor.user_access_array.indexOf(parseInt(t))) {
					var n = r.user_access[t];
					n.user_id = t, e.push(n)
				}
			i({
				method: "POST",
				url: "/questions/api_user_access_save/",
				params: {
					time: (new Date).getTime()
				},
				data: {
					question_id: r.data.id,
					user_access: e
				}
			}).success(function(i) {
				a.loading_in_editor = !1, a.success_in_editor = !0, a.error_in_editor = !1, 0 < r.data.parent_id ? angular.forEach(s.questions, function(e, n) {
					e.data.id == r.data.parent_id && angular.forEach(e.childs, function(e, t) {
						e.data.id == r.data.id && (s.questions[n].childs[t].user_access_array = i.user_access_array, s.questions[n].childs[t].user_access = i.user_access)
					})
				}) : angular.forEach(s.questions, function(e, t) {
					e.data.id == r.data.id && (s.questions[t].user_access_array = i.user_access_array, s.questions[t].user_access = i.user_access)
				})
			}).error(function(e) {
				alert("Ошибка"), a.loading_in_editor = !1, a.success_in_editor = !1, a.error_in_editor = !1
			})
		}
	}]), angular.module("selfTestSiteEdit", ["ui.tinymce", "yaMap"]).controller("siteEditCtrl", ["$scope", "$rootScope", "$filter", "$http", "$sce", "$q", "sitePlans", function(c, i, r, a, t, s, e) {
		c.trustAsHtmlST = function(e) {
			return t.trustAsHtml(e)
		}, c.site = {}, c.address = {}, c.address_type = {};
		var n = parseInt($("body").data("site_id")),
			o = parseInt($("body").data("gallery_type_id"));
		c.tinymceDivMini = {
			language: "ru",
			skin: "white",
			inline: !0,
			plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste"],
			toolbar: "undo redo | bold italic strikethrough | bullist numlist | link",
			menubar: !1
		}, c.tinymceDiv = {
			language: "ru",
			skin: "white",
			inline: !0,
			plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste"],
			toolbar: "undo redo | formatselect | table | bold italic strikethrough | bullist numlist | link",
			menubar: !1
		}, c.tinymceLine = {
			language: "ru",
			skin: "white",
			inline: !0,
			plugins: ["paste"],
			forced_root_block: !1,
			toolbar: !1,
			menubar: !1
		}, c.loading = {
			address: !0,
			address_form: !1,
			logo: !0,
			about: !0,
			news: !0,
			gallery: !0
		}, c.saved = {
			about: !1
		}, c.loading.news = !1, c.update_about_info = function() {
			c.loading.about = !0, c.saved.about = !1, a({
				method: "POST",
				url: "/sites/api_update_about_info/",
				params: {
					time: (new Date).getTime()
				},
				data: {
					id: c.site.id,
					about_title: c.site.about_title,
					about_text: c.site.about_text
				}
			}).success(function(e) {
				c.loading.about = !1, c.saved.about = !0, setTimeout(function() {
					c.saved.about = !1, c.$apply()
				}, 1e3)
			}).error(function(e) {
				alert("Ошибка сохранения")
			})
		}, s.all([a({
			method: "GET",
			url: "/sites/api_get_item/",
			params: {
				id: n,
				time: (new Date).getTime()
			}
		}), a({
			method: "GET",
			url: "/sites/api_get_address_list/",
			params: {
				id: n,
				time: (new Date).getTime()
			}
		}), a({
			method: "GET",
			url: "/sites/api_get_address_type_list/",
			params: {
				time: (new Date).getTime()
			}
		}), a({
			method: "GET",
			url: "/sites/api_get_main_gallery/",
			params: {
				gallery_type_id: o,
				time: (new Date).getTime()
			}
		})]).then(function(e) {
			c.site = e[0].data, c.address = e[1].data, c.address_type = e[2].data, c.gallery = e[3].data, c.loading.logo = !1, c.loading.about = !1, c.loading.address = !1, c.loading.gallery = !1
		}, function(e) {
			alert("Ошибка загрузки информации о компании")
		}), $.ajax_upload($("#upload_qfile"), {
			action: "/sites/api_upload_file/?gallery_type_id=" + o + "&time=" + (new Date).getTime(),
			name: "myfile",
			onSubmit: function(e, t) {
				if(this.disable(), $(".upload_qfile_container").hasClass("uploading")) return !1;
				$(".upload_qfile_container").addClass("uploading"), this.disable()
			},
			onComplete: function(e, t) {
				this.enable();
				var n = jQuery.parseJSON(t);
				null != n.error ? alert(n.error) : (null == c.gallery && (c.gallery = []), c.gallery.push(n), i.$apply()), $(".upload_qfile_container").removeClass("uploading")
			}
		}), c.removeFile = function(e) {
			confirm("Удалить фото?") && (c.gallery.splice(c.gallery.indexOf(e), 1), a({
				method: "GET",
				url: "/sites/api_remove_file/",
				params: {
					file_id: e.id,
					time: (new Date).getTime()
				}
			}).success(function(e) {}))
		};
		var l = "#00d146";
		c.yaMapIfLast = function(e) {
			e && c.yaMap.geoObjects.each(function(e) {
				for(var t = e.getGeoObjects(), n = 0, i = t.length; n < i; n++) t[n].options.set("iconColor", l);
				1 == i ? c.yaMap.setCenter(c.address_for_map[0].geometry.coordinates, 15, {
					duration: 300
				}) : 1 < i && c.yaMap.setBounds(e.getBounds())
			})
		}, c.yaMapAfterInit = function(e) {
			c.yaMap = e
		}, c.new_point_blank = {
			geometry: {
				type: "Point",
				coordinates: [0, 0]
			},
			properties: {
				address: "",
				text: ""
			}
		}, c.new_point = angular.copy(c.new_point_blank), c.back_map_properties = {
			zoom: 10,
			coordinates: [0, 0]
		}, c.reload_map = !0, c.$watch("address", function(e) {
			if(null != e && e.length && c.reload_map) {
				c.reload_map = !1;
				for(var t, n = [], i = 0, r = e.length; i < r; i++) t = e[i], n.push({
					geometry: {
						type: "Point",
						coordinates: [t.longitude, t.latitude]
					},
					properties: {
						address: c.address[i].address,
						text: t.text
					}
				}), n[i].properties = c.address[i];
				c.address_for_map = n
			}
		}, !0), c.address_window_show = !1, c.yaMapPointClick = function(e) {
			if(!c.loading.address_form) {
				0 < c.address_edit.id && c.yaMap.geoObjects.each(function(e) {
					for(var t = e.getGeoObjects(), n = 0, i = t.length; n < i; n++) t[n].options.set("iconColor", l)
				});
				var t = e.get("target").properties.get("id"),
					n = r("filter")(c.address, {
						id: t
					}, !0);
				if(0 < n.length) {
					c.back_map_properties.coordinates = c.yaMap.getCenter(), c.back_map_properties.zoom = c.yaMap.getZoom();
					var i = e.get("target").geometry.getPixelGeometry({
						geodesic: !0,
						simplification: !1
					}).getCoordinates();
					c.yaMap.setGlobalPixelCenter([i[0] + 210, i[1]], c.back_map_properties.zoom, {
						duration: 300
					}), c.address_edit = angular.copy(n[0]), c.address_edit.ready_to_save = !0, c.address_window_show = !0, e.get("target").options.set("iconColor", "#c745c2")
				}
			}
			return !1
		}, c.update_address = function() {
			if(!c.loading.address_form && c.address_edit.ready_to_save) {
				c.loading.address_form = !0;
				var e = [],
					t = "";
				if(c.address_edit.id) {
					var i = c.address_edit.id;
					t = "Ошибка. Попробуйте перезагрузить страницу и отредактировать адрес ещё раз.", e.push(a({
						method: "GET",
						url: "/sites/api_update_address/",
						params: {
							id: i,
							type_id: c.address_edit.type_id,
							text: c.address_edit.text,
							time: (new Date).getTime()
						}
					})), s.all(e).then(function(n) {
						angular.forEach(c.address, function(e, t) {
							e.id == i && (c.address[t].type_id = n[0].data.type_id, c.address[t].text = n[0].data.text)
						}), c.loading.address_form = !1, c.close_address_window()
					}, function(e) {
						alert(t), c.loading.address_form = !1
					})
				} else {
					var n = {
						country: c.address_edit.country,
						country_code: c.address_edit.country_code,
						administrative_area: c.address_edit.administrative_area,
						city: c.address_edit.city,
						address: c.address_edit.address,
						type_id: c.address_edit.type_id,
						longitude: c.new_point.geometry.coordinates[0],
						latitude: c.new_point.geometry.coordinates[1],
						text: c.address_edit.text,
						time: (new Date).getTime()
					};
					t = "Ошибка. Попробуйте перезагрузить страницу и добавить адрес ещё раз.", e.push(a({
						method: "GET",
						url: "/sites/api_create_address/",
						params: n
					})), s.all(e).then(function(e) {
						c.address.push(e[0].data), c.reload_map = !0, c.loading.address_form = !1, c.close_address_window()
					}, function(e) {
						alert(t), c.loading.address_form = !1
					})
				}
			}
		}, c.delete_address = function() {
			if(!c.loading.address_form && c.address_edit.id && confirm("Удалить этот адрес?")) {
				c.loading.address_form = !0;
				var i = c.address_edit.id,
					e = [];
				e.push(a({
					method: "GET",
					url: "/sites/api_delete_address/",
					params: {
						id: i,
						time: (new Date).getTime()
					}
				})), s.all(e).then(function(e) {
					var n = [];
					angular.forEach(c.address, function(e, t) {
						e.id != i && n.push(angular.copy(c.address[t]))
					}), c.address = n, c.reload_map = !0, c.loading.address_form = !1, c.close_address_window()
				}, function(e) {
					alert("Ошибка. Попробуйте перезагрузить страницу и удалить адрес ещё раз."), c.loading.address_form = !1
				})
			}
		}, c.close_address_window = function() {
			c.address_window_show = !1, c.loading.address = !1, c.yaMap.setCenter(c.back_map_properties.coordinates, c.back_map_properties.zoom, {
				duration: 300
			}), 0 < c.address_edit.id && c.yaMap.geoObjects.each(function(e) {
				for(var t = e.getGeoObjects(), n = 0, i = t.length; n < i; n++) t[n].options.set("iconColor", l)
			})
		}, c.create_address = function() {
			if(!c.address_window_show && !c.loading.address_form) {
				c.back_map_properties.coordinates = c.yaMap.getCenter(), c.back_map_properties.zoom = c.yaMap.getZoom();
				var e = c.yaMap.getGlobalPixelCenter();
				c.yaMap.setGlobalPixelCenter([e[0] + 210, e[1]], c.back_map_properties.zoom, {
					duration: 300
				}), c.new_point = angular.copy(c.new_point_blank), c.new_point.geometry.coordinates = c.back_map_properties.coordinates, c.new_point.properties.zoom = c.back_map_properties.zoom, c.address_edit = {
					country: "",
					country_code: "",
					administrative_area: "",
					city: "",
					address: "",
					type_id: c.address_type[0].id,
					map_search: "",
					ready_to_save: !1
				}, c.ya_map_search_address(c.new_point.geometry.coordinates), c.address_window_show = !0
			}
		}, c.ya_map_search_address = function(e, l) {
			c.loading.address_form = !0, ymaps.geocode(e).then(function(e) {
				e.geoObjects.each(function(e) {
					l && (c.new_point.geometry.coordinates = e.geometry.getCoordinates());
					var t = e.properties.get("metaDataProperty").GeocoderMetaData;
					if("house" == t.kind) {
						var n = t.AddressDetails.Country,
							i = n.AdministrativeArea,
							r = i.SubAdministrativeArea.Locality;
						if(null != r.DependentLocality) var a = r.DependentLocality,
							s = a.Thoroughfare;
						else s = r.Thoroughfare;
						var o = s.Premise;
						c.address_edit.country = n.CountryName, c.address_edit.country_code = n.CountryNameCode, c.address_edit.administrative_area = i.AdministrativeAreaName, c.address_edit.city = r.LocalityName, c.address_edit.address = s.ThoroughfareName + ", " + o.PremiseNumber, null != a && (c.address_edit.address = a.DependentLocalityName + ", " + c.address_edit.address), c.address_edit.ready_to_save = !0
					} else c.address_edit.country = "", c.address_edit.country_code = "", c.address_edit.administrative_area = "", c.address_edit.city = "", c.address_edit.address = "", c.address_edit.ready_to_save = !1;
					return c.address_edit.map_search = e.properties.get("text"), !1
				}), c.loading.address_form = !1, c.$apply()
			}, function(e) {
				c.address_edit.country = "", c.address_edit.country_code = "", c.address_edit.administrative_area = "", c.address_edit.city = "", c.address_edit.address = "", c.address_edit.ready_to_save = !1, c.address_edit.map_search = "", c.loading.address_form = !1, c.$apply()
			})
		}, c.new_point_drag = !1, c.yaMapDragStart = function(e) {
			c.new_point_drag = !0
		}, c.yaMapDragEnd = function(e) {
			c.new_point.geometry.coordinates = e.get("target").geometry.getCoordinates(), c.ya_map_search_address(c.new_point.geometry.coordinates), c.new_point_drag = !1
		}, c.address_search_on_map = function() {
			c.ya_map_search_address(c.address_edit.map_search, !0)
		}, c.yaMapGeometryChange = function(e) {
			if(!c.new_point_drag) {
				var t = e.get("target").geometry.getPixelGeometry({
					geodesic: !0,
					simplification: !1
				}).getCoordinates();
				c.yaMap.setGlobalPixelCenter([t[0] + 210, t[1]], c.yaMap.getZoom(), {
					duration: 300
				})
			}
		}
	}]), angular.module("selfTestSitePlans", []).controller("sitePlansCtrl", ["$scope", "$rootScope", "$filter", "$http", "$sce", "sitePlans", function(t, e, n, i, r, a) {
		t.sitePlans = a, t.options = t.sitePlans.getOptions(), t.recomended_plan = t.sitePlans.getRecomendedPlan(), t.trustAsHtmlST = function(e) {
			return r.trustAsHtml(e)
		}, t.addSite = function(e) {
			t.sitePlans.setNewPlan(e)
		}
	}]), angular.module("selfTestSites", []).controller("sitesCtrl", ["$scope", "$rootScope", "$filter", "$http", "$sce", "sitePlans", function(n, e, i, r, t, a) {
		n.loading_status = 0, n.sites = [], r({
			method: "GET",
			url: "/sites/api_get_list/",
			params: {
				time: (new Date).getTime()
			}
		}).success(function(e) {
			n.loading_status++, n.sites = e
		}).error(function(e) {}), n.sitePlans = a, n.new_site_blank = {
			code: "",
			plan_id: 0,
			date_end_balance: "",
			balance: 0,
			active: 0,
			icon_file: "/favicon.ico"
		}, n.new_site = angular.copy(n.new_site_blank), n.openPlans = function(e) {
			null == e ? (r({
				method: "GET",
				url: "/sites/api_create_site/",
				params: {
					code: n.new_site.code,
					plan_id: a.plans[0].id,
					price_per_day: a.plans[0].price_per_day,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				null != e.id ? (n.sites = angular.copy(n.sites.concat(e)), n.sitePlans.clearOldNewPlan(), n.sitePlans.setCurrentSiteId(e.id), $("#site_plans__window").modal("show")) : alert("Этот адрес сайта занят :(")
			}).error(function(e) {}), n.new_site = angular.copy(n.new_site_blank)) : (n.sitePlans.setOldPlan({
				id: e.plan_id,
				price_per_day: e.price_per_day
			}), n.sitePlans.setCurrentSiteId(e.id), $("#site_plans__window").modal("show"))
		}, n.$watch("sitePlans.new_plan", function(e) {
			0 < e.id && r({
				method: "GET",
				url: "/sites/api_change_plan/",
				params: {
					id: n.sitePlans.getCurrentSiteId(),
					plan_id: e.id,
					price_per_day: e.price_per_day,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				var t = i("filter")(n.sites, {
					id: e.id
				}, !0);
				0 < t.length && ((t = t[0]).plan_id = e.plan_id, t.price_per_day = e.price_per_day, t.balance = e.balance, t.date_end_balance = e.date_end_balance)
			}).error(function(e) {})
		}), n.activateSite = function(e, t) {
			e.active = null == t ? !e.active : t, r({
				method: "GET",
				url: "/sites/api_set_active/",
				params: {
					id: e.id,
					active: e.active,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				var t = i("filter")(n.sites, {
					id: e.id
				}, !0);
				0 < t.length && ((t = t[0]).active = e.active, t.balance = e.balance, t.date_end_balance = e.date_end_balance)
			}).error(function(e) {})
		}, n.$watch("sitePlans.loaded", function(e) {
			e && n.loading_status++
		})
	}]), angular.module("selfTestDirectives", ["ngFileUpload"]).filter("getCol", function() {
		return function(e, t) {
			return e && e.map(function(e) {
				return e[t]
			}).join(",")
		}
	}).filter("escape", function() {
		return function(e) {
			return e ? window.encodeURIComponent(e) : ""
		}
	}).directive("focusMe", ["$timeout", "$parse", function(r, a) {
		return {
			link: function(e, t, n) {
				var i = a(n.focusMe);
				e.$watch(i, function(e) {
					!0 === e && r(function() {
						t[0].focus()
					})
				}), t.bind("blur", function() {
					e.$apply()
				})
			}
		}
	}]).directive("ngEnter", function() {
		return function(t, e, n) {
			e.bind("keypress", function(e) {
				13 === e.which && (t.$apply(function() {
					t.$eval(n.ngEnter)
				}), e.preventDefault())
			})
		}
	}).directive("tagEditor", ["tagService", function(o) {
		return {
			restrict: "AE",
			scope: {
				tags: "=ngModel",
				load: "=selfTestLoad"
			},
			replace: !0,
			templateUrl: "/js/app/directives/tageditor.html",
			controller: ["$scope", "$attrs", "$element", "$http", "$filter", "$sce", "$q", function(n, e, t, i, r, a, s) {
				n.options = [], n.options.output = e.output || "title", n.options.placeholder = e.placeholder || "Enter a few letters...", n.options.apiOnly = e.apiOnly || !1, n.search = "", n.$watch("load", function(e) {
					e && o.loadTags("")
				}), n.tagService = o, n.$watch("tagService.tags", function(e) {
					e[""] && (n.suggestions = e[""])
				}, !0), n.trustAsHtmlST = function(e) {
					return a.trustAsHtml(e)
				}, n.addCopy = function(e) {
					n.tags.push(angular.copy(e))
				}, n.add = function(e, t) {
					n.tags.push({
						id: e,
						title: t
					}), n.search = "", n.$apply()
				}, n.remove = function(e) {
					n.tags.splice(e, 1)
				}, t.find(".tag-draft").on("click", function(e) {
					t.find("input").focus()
				}), t.find("input").on("keydown", function(e) {
					-1 !== [8, 13, 32].indexOf(e.which) && (8 == e.which ? 0 === n.search.length && n.tags.length && (n.tags.pop(), e.preventDefault()) : 13 == e.which && n.search.length && !n.apiOnly && (n.apiOnly || (n.add(0, n.search), e.preventDefault())), n.$apply())
				})
			}]
		}
	}]).directive("ngEnter", function() {
		return function(t, e, n) {
			e.bind("keydown keypress", function(e) {
				13 === e.which && (t.$apply(function() {
					t.$eval(n.ngEnter)
				}), e.preventDefault())
			})
		}
	}).directive("selfTestDragAndDropFileUpload", ["$timeout", "Upload", function($timeout, Upload) {
		function link(scope, element, attr) {
			function uploadUsingUpload(n, e) {
				n.upload = Upload.upload({
					url: scope.url + "?time=" + (new Date).getTime() + ("" != scope.ext ? "&ext=" + scope.ext : "") + (scope.isSingleFile && scope.attachedFiles && scope.attachedFiles.length ? "&prev_file_id=" + scope.attachedFiles[0].id : ""),
					resumeSizeUrl: e ? scope.url + "?time=" + (new Date).getTime() + "&name=" + encodeURIComponent(n.name) : null,
					resumeChunkSize: e ? scope.chunkSize : null,
					headers: {
						"optional-header": "header-value"
					},
					data: {
						myfile: n
					}
				}), n.upload.then(function(e) {
					$timeout(function() {
						void 0 !== e.data.error ? (n.error = e.data.error, $timeout(function() {
							scope.files.splice(scope.files.indexOf(n), 1)
						}, 4e3)) : (n.result = e.data, scope.afterUpload ? scope.afterUpload(e.data) : scope.isSingleFile ? scope.attachedFiles = [e.data] : scope.attachedFiles.push(e.data), scope.files.splice(scope.files.indexOf(n), 1))
					})
				}, function(e) {
					var t = void 0 !== e.data.error ? e.data.error : "Ошибка загрузки.";
					0 < e.status && (n.error = t, $timeout(function() {
						scope.files.splice(scope.files.indexOf(n), 1)
					}, 4e3))
				}, function(e) {
					n.progress = Math.min(100, parseInt(100 * e.loaded / e.total))
				}), n.upload.xhr(function(e) {})
			}
			scope.isSingleFile = !!scope.isSingleFile, scope.afterUpload = scope.afterUpload ? scope.afterUpload : null, scope.editFile = scope.editFile ? scope.editFile : null, scope.saveDataFile = function(e, t) {
				scope.editFile && scope.editFile(e, t), t.model.isShowAddUpdateForm = !1
			}, scope.removeFile = scope.removeFile ? scope.removeFile : null, scope.attachedFiles = scope.attachedFiles ? scope.attachedFiles : [], scope.ext = scope.ext ? scope.ext : "", scope.files = [], scope.usingFlash = FileAPI && null != FileAPI.upload, scope.invalidFiles = [], scope.$watch("invalidFiles", function(e) {
				null == e || angular.isArray(e) || $timeout(function() {
					scope.invalidFiles = [e]
				})
			}), scope.$watch("isClearDropBox", function(e) {
				e && (scope.files = [], scope.isClearDropBox = !1)
			}), scope.$watch("files", function(e) {
				if(scope.formUpload = !1, null != e) {
					if(!angular.isArray(e)) return void $timeout(function() {
						scope.files = [e]
					});
					for(var t = 0; t < e.length; t++) scope.errorMsg = null, n = e[t], scope.upload(n, !1)
				}
				var n
			}), scope.upload = function(e, t) {
				scope.errorMsg = null, uploadUsingUpload(e, t)
			}, scope.getFileTitle = function(e, t) {
				return 22 < e.length && (e = e.slice(0, 14) + "..." + e.slice(-3)), e + "." + t
			}, scope.isResumeSupported = Upload.isResumeSupported(), scope.chunkSize = 1e5, angular.element(window).bind("dragover", function(e) {
				e.preventDefault()
			}), angular.element(window).bind("drop", function(e) {
				e.preventDefault()
			}), scope.pattern = "", scope.acceptSelect = scope.acceptSelect ? scope.acceptSelect : "", scope.multiple = !scope.isSingleFile, scope.allowDir = !1, scope.ignoreInvalid = "", scope.keep = !0, scope.orientation = !1, scope.runAllValidations = !1, scope.maxFiles = 500, scope.modelOptionsObj = {
				debounce: 100
			}, scope.resizeObj = {
				width: 1e3,
				height: 1e3,
				centerCrop: !0
			}, scope.resizeIfFn = eval("(function(){var fn = function($file, $width, $height){return $width > 5000 || $height > 5000;};return fn;})()"), scope.dimensionsFn = eval("(function(){var fn = function($file, $width, $height){return $width < 12000 || $height < 12000;};return fn;})()"), scope.durationFn = eval("(function(){var fn = function($file, $duration){return $duration < 10000;};return fn;})()")
		}
		return {
			scope: {
				acceptSelect: "=?selfTestAcceptSelect",
				afterUpload: "=selfTestAfterUpload",
				attachedFiles: "=ngModel",
				attachedFilesLabel: "=selfTestAttachedFilesLabel",
				dropLabel: "=selfTestDropLabel",
				embedInText: "=selfTestEmbedInText",
				editFile: "=?selfTestEditFile",
				ext: "=selfTestExt",
				isClearDropBox: "=selfTestIsClearDropBox",
				isShowAttachedFiles: "=selfTestIsShowAttachedFiles",
				isShowDropBox: "=selfTestIsShowDropBox",
				isShowFiles: "=selfTestIsShowFiles",
				isSingleFile: "=?selfTestIsSingleFile",
				label: "=selfTestLabel",
				removeFile: "=selfTestRemoveFile",
				url: "=selfTestUrl"
			},
			restrict: "AEC",
			link: link,
			templateUrl: "/js/app/directives/ddfileupload.html?v=180807"
		}
	}]).directive("selfTestImageUpload", [function() {
		return {
			scope: {
				file: "=ngModel",
				loading: "=selfTestLoading",
				upload_action: "@selfTestUploadAction",
				delete_action: "@selfTestDeleteAction",
				delete_confirm_text: "@selfTestDeleteConfirmText"
			},
			restrict: "AEC",
			link: function(i, e, t) {
				var n = $(e),
					r = i.delete_confirm_text || "Удалить?",
					a = !1;
				n.addClass("directive__image_upload"), i.$watch("loading", function(e) {
					e ? n.addClass("directive__image_upload-loading") : n.removeClass("directive__image_upload-loading")
				}), i.$watch("file", function(e) {
					null == e || null == e.file_url || a || (a = !0, $.ajax_upload(n.find(".directive__image_upload__load_btn"), {
						action: i.upload_action + (i.upload_action.split("?")[1] ? "&" : "?") + "time=" + (new Date).getTime(),
						name: "myfile",
						onSubmit: function(e, t) {
							i.loading = !0, i.$apply(), this.disable()
						},
						onComplete: function(e, t) {
							var n = jQuery.parseJSON(t);
							null != n.file_url && (i.file.file_url = n.file_url, i.file.file_id = n.file_id), null != n.error && alert(n.error), this.enable(), i.loading = !1, i.$apply()
						}
					}))
				}), i.delete_image = function() {
					confirm(r) && (i.loading = !0, $.ajax({
						url: i.delete_action + (i.delete_action.split("?")[1] ? "&" : "?") + "time=" + (new Date).getTime(),
						dataType: "json",
						type: "post",
						success: function(e, t) {
							null != e.error && alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), null != e.file_url && (i.file.file_url = e.file_url, i.file.file_id = e.file_id), i.loading = !1, i.$apply()
						},
						error: function(e, t) {
							alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), i.loading = !1, i.$apply()
						}
					}))
				}
			},
			templateUrl: "/js/app/directives/imageupload.html"
		}
	}]).directive("selfTestQuestionInListForEdit", ["$sce", function(n) {
		return {
			scope: {
				question: "=ngModel",
				base_url: "=selfTestBaseUrl",
				repeat_index: "=selfTestRepeatIndex",
				question_types: "=selfTestQuestionTypes",
				is_share_question: "=selfTestShareQuestion"
			},
			restrict: "AEC",
			link: function(c, e, t) {
				c.trustAsHtmlST = function(e) {
					return n.trustAsHtml(e)
				}, c.filesInText = function(e, t, n, i) {
					if(null == t || null == n) return e;
					var r = 0;
					for(var a in t) {
						if(t.hasOwnProperty(a)) {
							var s = t[a] - 1;
							if(null != n[s]) {
								var o = n[s].title_html ? n[s].title_html : n[s].name;
								if("jpg" == n[s].ext || "jpeg" == n[s].ext || "png" == n[s].ext || "bmp" == n[s].ext || "tif" == n[s].ext) {
									if(0 <= a.indexOf("#file")) {
										var l = '<a class="gallery" rel="gal_question_' + i + '" href="' + n[s].path + n[s].name + '">';
										l += '<img src="' + n[s].path + n[s].name + '">', l += "</a>"
									} else l = '<span class="image_with_zoom_button ', l += "img-polaroid", l += '">', l += '<a class="gallery image_with_zoom_button__container" rel="gal_question_' + i + '" href="' + n[s].path + n[s].name + '">', l += '<img src="' + n[s].path + n[s].name + '">', l += "</a>", l += "</span>";
									e = e.split(a).join(l)
								} else "mp3" == n[s].ext ? (l = "<div self-test-jp-audio", l += " self-test-path=\"'" + c.base_url + n[s].path + n[s].name + "'\"", l += " self-test-id=\"'" + r + "_question_" + i + "_" + n[s].id + "'\"", l += " self-test-title=\"'" + o + "'\"", l += " self-test-name=\"'" + o + "'\"></div>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l)) : "mp4" == n[s].ext || "m4v" == n[s].ext ? (l = "<div self-test-jp-video", l += " self-test-path=\"'" + c.base_url + n[s].path + n[s].name + "'\"", l += " self-test-id=\"'" + r + "_question_" + i + "_" + n[s].id + "'\"", l += " self-test-title=\"'" + o + "'\"", l += " self-test-name=\"'" + o + "'\"></div>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l)) : -1 <= ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "rtf", "zip"].indexOf(n[s].ext) && (l = "<span self-test-doc-template", l += " self-test-href=\"'/download/file/" + n[s].id + "/'\"", l += " self-test-ext=\"'" + n[s].ext + "'\"", l += " self-test-name=\"'" + o + "'\"", l += ' self-test-desc=""', l += " self-test-size-byte=\"'" + n[s].size_byte + "'\"", l += ' self-test-class=""', l += " self-test-style=\"{display: 'block', marginBottom: '10px', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '600px'}\"></span>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l))
							}
						}
						r++
					}
					return e
				}
			},
			templateUrl: "/js/app/directives/questioninlistforedit.html?v=180804"
		}
	}]).directive("selfTestAssignmentFilter", ["$sce", function(e) {
		return {
			scope: {
				filter: "=ngModel",
				selfTestRemoveFilter: "&"
			},
			restrict: "AEC",
			link: function(e, t, n) {},
			templateUrl: "/js/app/directives/assignmentfilter.html?v=180514"
		}
	}]).directive("selfTestIntValue", function() {
		return {
			require: "ngModel",
			link: function(e, t, n, i) {
				var r = function(e) {
					if(null == e) return "";
					var t = e.replace(/[^0-9]/g, "");
					return t != e && (i.$setViewValue(t), i.$render()), t
				};
				i.$parsers.push(r), r(e[n.ngModel])
			}
		}
	}).directive("selfTestCapitalizeFirst", function() {
		return {
			require: "ngModel",
			link: function(e, t, n, i) {
				var r = function(e) {
					void 0 === e && (e = "");
					var t = e.charAt(0).toUpperCase() + e.substring(1);
					return t !== e && (i.$setViewValue(t), i.$render()), t
				};
				i.$parsers.push(r), r(e[n.ngModel])
			}
		}
	}).directive("selfTestQuestionInDatabaseList", ["$sce", function(n) {
		return {
			scope: {
				question: "=ngModel",
				base_url: "=selfTestBaseUrl",
				repeat_index: "=selfTestRepeatIndex",
				question_types: "=selfTestQuestionTypes",
				max_access: "=selfTestMaxAccess"
			},
			restrict: "AEC",
			link: function(c, e, t) {
				c.trustAsHtmlST = function(e) {
					return n.trustAsHtml(e)
				}, c.filesInText = function(e, t, n, i) {
					if(null == t || null == n) return e;
					var r = 0;
					for(var a in t) {
						if(t.hasOwnProperty(a)) {
							var s = t[a] - 1;
							if(null != n[s]) {
								var o = n[s].title_html ? n[s].title_html : n[s].name;
								if("jpg" == n[s].ext || "jpeg" == n[s].ext || "png" == n[s].ext || "bmp" == n[s].ext || "tif" == n[s].ext) {
									if(0 <= a.indexOf("#file")) {
										var l = '<a class="gallery" rel="gal_question_' + i + '" href="' + n[s].path + n[s].name + '">';
										l += '<img src="' + n[s].path + n[s].name + '">', l += "</a>"
									} else l = '<span class="image_with_zoom_button ', l += "img-polaroid", l += '">', l += '<a class="gallery image_with_zoom_button__container" rel="gal_question_' + i + '" href="' + n[s].path + n[s].name + '">', l += '<img src="' + n[s].path + n[s].name + '">', l += "</a>", l += "</span>";
									e = e.split(a).join(l)
								} else "mp3" == n[s].ext ? (l = "<div self-test-jp-audio", l += " self-test-path=\"'" + c.base_url + n[s].path + n[s].name + "'\"", l += " self-test-id=\"'" + r + "_question_" + i + "_" + n[s].id + "'\"", l += " self-test-title=\"'" + o + "'\"", l += " self-test-name=\"'" + o + "'\"></div>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l)) : "mp4" == n[s].ext || "m4v" == n[s].ext ? (l = "<div self-test-jp-video", l += " self-test-path=\"'" + c.base_url + n[s].path + n[s].name + "'\"", l += " self-test-id=\"'" + r + "_question_" + i + "_" + n[s].id + "'\"", l += " self-test-title=\"'" + o + "'\"", l += " self-test-name=\"'" + o + "'\"></div>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l)) : -1 <= ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "rtf", "zip"].indexOf(n[s].ext) && (l = "<span self-test-doc-template", l += " self-test-href=\"'/download/file/" + n[s].id + "/'\"", l += " self-test-ext=\"'" + n[s].ext + "'\"", l += " self-test-name=\"'" + o + "'\"", l += ' self-test-desc=""', l += " self-test-size-byte=\"'" + n[s].size_byte + "'\"", l += ' self-test-class=""', l += " self-test-style=\"{display: 'block', marginBottom: '10px', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '600px'}\"></span>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l))
							}
						}
						r++
					}
					return e
				}
			},
			templateUrl: "/js/app/directives/questionindatabaselist.html?v=180804"
		}
	}]).directive("selfTestQuestionAnswers", ["$sce", "$compile", "$rootScope", function(n, e, t) {
		return {
			scope: {
				question: "=ngModel",
				base_url: "=selfTestBaseUrl"
			},
			restrict: "AEC",
			link: function(u, e, t) {
				u.parentCtrl = u.$parent, u.trustAsHtmlST = function(e) {
					return n.trustAsHtml(e)
				}, u.filesInAnswer = function(e, t, n, i, r) {
					if(null == t || null == n) return e;
					var a = 0;
					for(var s in t) {
						if(t.hasOwnProperty(s)) {
							var o = t[s] - 1;
							if(null != n[o]) {
								var l = n[o].title_html ? n[o].title_html : n[o].name;
								if("jpg" == n[o].ext || "jpeg" == n[o].ext || "png" == n[o].ext || "bmp" == n[o].ext || "tif" == n[o].ext) {
									if(0 <= s.indexOf("#file")) {
										var c = '<a class="gallery" rel="gal_question_' + i + '_answers" href="' + n[o].path + n[o].name + '">';
										c += '<img src="' + n[o].path + n[o].name + '">', c += "</a>"
									} else c = '<span class="image_with_zoom_button ', null != r && r || (c += "img-polaroid"), c += '">', c += '<a class="gallery image_with_zoom_button__container" rel="gal_question_' + i + '_answers" href="' + n[o].path + n[o].name + '">', c += '<img src="' + n[o].path + n[o].name + '">', c += "</a>", c += "</span>";
									e = e.split(s).join(c)
								} else "mp3" == n[o].ext ? (c = "<div self-test-jp-audio", c += " self-test-path=\"'" + u.base_url + n[o].path + n[o].name + "'\"", c += " self-test-id=\"'" + a + "_question_" + i + "_answers_" + n[o].id + "'\"", c += " self-test-title=\"'" + l + "'\"", c += " self-test-name=\"'" + l + "'\"></div>", e = e.split(s).join(c)) : "mp4" == n[o].ext || "m4v" == n[o].ext ? (c = "<div self-test-jp-video", c += " self-test-path=\"'" + u.base_url + n[o].path + n[o].name + "'\"", c += " self-test-id=\"'" + a + "_question_" + i + "_answers_" + n[o].id + "'\"", c += " self-test-title=\"'" + l + "'\"", c += " self-test-name=\"'" + l + "'\"></div>", e = e.split(s).join(c)) : -1 <= ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "rtf", "zip"].indexOf(n[o].ext) && (c = "<span self-test-doc-template", c += " self-test-href=\"'/download/file/" + n[o].id + "/'\"", c += " self-test-ext=\"'" + n[o].ext + "'\"", c += " self-test-name=\"'" + l + "'\"", c += ' self-test-desc=""', c += " self-test-size-byte=\"'" + n[o].size_byte + "'\"", c += ' self-test-class=""', c += " self-test-style=\"{display: 'block', marginBottom: '10px', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '600px'}\"></span>", e = e.split(s).join(c))
							}
						}
						a++
					}
					return e
				}
			},
			templateUrl: "/js/app/directives/questionanswers.html?v=180525"
		}
	}]).directive("selfTestQuestion", ["$sce", function(n) {
		return {
			scope: {
				question: "=ngModel",
				base_url: "=selfTestBaseUrl",
				view_files: "=selfTestViewFiles",
				style: "=selfTestStyle"
			},
			restrict: "AEC",
			link: function(c, e, t) {
				c.trustAsHtmlST = function(e) {
					return n.trustAsHtml(e)
				}, c.filesInText = function(e, t, n, i) {
					if(null == t || null == n) return e;
					var r = 0;
					for(var a in t) {
						if(t.hasOwnProperty(a)) {
							var s = t[a] - 1;
							if(null != n[s]) {
								var o = n[s].title_html ? n[s].title_html : n[s].name;
								if("jpg" == n[s].ext || "jpeg" == n[s].ext || "png" == n[s].ext || "bmp" == n[s].ext || "tif" == n[s].ext) {
									if(0 <= a.indexOf("#file")) {
										var l = '<a class="gallery" rel="gal_question_' + i + '" href="' + n[s].path + n[s].name + '">';
										l += '<img src="' + n[s].path + n[s].name + '">', l += "</a>"
									} else l = "<self-test-image-with-zoom", l += "self-test-src=\"'" + n[s].path + n[s].name + "'\"", l += "self-test-rel=\"'gal_question_" + i + "'\"", l += 'self-test-style="{}"', l += 'self-test-is-without-polaroid="true"></self-test-image-with-zoom>';
									e = e.split(a).join(l)
								} else "mp3" == n[s].ext ? (l = "<div self-test-jp-audio", l += " self-test-path=\"'" + c.base_url + n[s].path + n[s].name + "'\"", l += " self-test-id=\"'" + r + "_question_" + i + "_" + n[s].id + "'\"", l += " self-test-title=\"'" + o + "'\"", l += " self-test-name=\"'" + o + "'\"></div>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l)) : "mp4" == n[s].ext || "m4v" == n[s].ext ? (l = "<div self-test-jp-video", l += " self-test-path=\"'" + c.base_url + n[s].path + n[s].name + "'\"", l += " self-test-id=\"'" + r + "_question_" + i + "_" + n[s].id + "'\"", l += " self-test-title=\"'" + o + "'\"", l += " self-test-name=\"'" + o + "'\"></div>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l)) : -1 <= ["doc", "docx", "xls", "xlsx", "ppt", "pptx", "pdf", "rtf", "zip"].indexOf(n[s].ext) && (l = "<span self-test-doc-template", l += " self-test-href=\"'/download/file/" + n[s].id + "/'\"", l += " self-test-ext=\"'" + n[s].ext + "'\"", l += " self-test-name=\"'" + o + "'\"", l += ' self-test-desc=""', l += " self-test-size-byte=\"'" + n[s].size_byte + "'\"", l += " self-test-base-url=\"'" + c.base_url + "'\"", l += ' self-test-view-files="' + c.view_files + '"', l += " self-test-view-href=\"'" + n[s].path + n[s].name + "'\"", l += ' self-test-class=""', l += " self-test-style=\"{display: 'block', marginBottom: '10px', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '600px'}\"></span>", e = (e = e.split("<p>" + a + "</p>").join(l)).split(a).join(l))
							}
						}
						r++
					}
					return e
				}
			},
			templateUrl: "/js/app/directives/question.html?v=180521"
		}
	}]).directive("bindHtmlCompile", ["$compile", function(i) {
		return {
			restrict: "A",
			link: function(t, n, e) {
				t.$watch(function() {
					return t.$eval(e.bindHtmlCompile)
				}, function(e) {
					n.html(e), i(n.contents())(t)
				})
			}
		}
	}]).directive("selfTestImageWithZoomButton", ["$sce", function(e) {
		return {
			scope: {
				src: "=selfTestSrc",
				rel: "=selfTestRel",
				is_without_polaroid: "=selfTestIsWithoutPolaroid",
				style: "=selfTestStyle"
			},
			restrict: "AEC",
			link: function(e, t, n) {},
			templateUrl: "/js/app/directives/imagewithzoombutton.html"
		}
	}]).directive("selfTestImageWithZoom", ["$sce", function(e) {
		return {
			scope: {
				src: "=selfTestSrc",
				rel: "=selfTestRel",
				is_without_polaroid: "=selfTestIsWithoutPolaroid",
				style: "=selfTestStyle"
			},
			restrict: "AEC",
			link: function(e, t, n) {},
			templateUrl: "/js/app/directives/imagewithzoom.html"
		}
	}]).directive("selfTestDocTemplate", ["$sce", function(e) {
		return {
			scope: {
				href: "=selfTestHref",
				ext: "=selfTestExt",
				name: "=selfTestName",
				desc: "=selfTestDesc",
				size: "=selfTestSizeByte",
				baseUrl: "=selfTestBaseUrl",
				viewFiles: "=selfTestViewFiles",
				viewHref: "=selfTestViewHref",
				class: "=selfTestClass",
				style: "=selfTestStyle"
			},
			restrict: "AEC",
			link: function(e, t, n) {
				e.getExt = function(e) {
					return e.split(".").pop()
				}, e.formatBytes = function(e, t) {
					if(0 == e) return "0 Byte";
					var n = t + 1 || 3,
						i = Math.floor(Math.log(e) / Math.log(1e3));
					return(e / Math.pow(1e3, i)).toPrecision(n) + " " + ["Байт", "Кб", "Мб", "Гб", "Тб", "PB", "EB", "ZB", "YB"][i]
				}, e.ext || (e.ext = e.getExt(e.href))
			},
			templateUrl: "/js/app/directives/doctemplate.html?v=180807"
		}
	}]).directive("selfTestJpAudio", ["$sce", function(e) {
		return {
			scope: {
				path: "=selfTestPath",
				id: "=selfTestId",
				title: "=selfTestTitle",
				name: "=selfTestName"
			},
			restrict: "AEC",
			link: function(e, t, n) {},
			templateUrl: "/js/app/directives/jpaudio.html"
		}
	}]).directive("selfTestJpVideo", ["$sce", function(e) {
		return {
			scope: {
				path: "=selfTestPath",
				id: "=selfTestId",
				title: "=selfTestTitle",
				name: "=selfTestName"
			},
			restrict: "AEC",
			link: function(e, t, n) {},
			templateUrl: "/js/app/directives/jpvideo.html"
		}
	}]).directive("selfTestAddUpdateForm", ["$sce", function(n) {
		return {
			scope: {
				model: "=ngModel",
				save_data: "=selfTestSaveData",
				extra_settings: "=selfTestExtraSettings",
				settings: "=selfTestSettings",
				prefix_id: "=selfTestPrefixId"
			},
			restrict: "AEC",
			link: function(a, e, t) {
				a.params = {}, a.FORM_TYPE = {
					ALERT: "ALERT",
					EDITOR: "EDITOR"
				}, a.FORM_STATUS = {
					LOADED: "LOADED",
					LOADING: "LOADING",
					SUCCESS: "SUCCESS",
					ERROR: "ERROR"
				}, a.FIELD_TYPE = {
					ACE: "ACE",
					SELECT: "SELECT",
					TEXTAREA: "TEXTAREA",
					TEXTEDITOR: "TEXTEDITOR",
					TEXTEDITORLINE: "TEXTEDITORLINE",
					VARCHAR: "VARCHAR"
				}, a.VALUE_TYPE = {
					INT: "INT"
				}, a.status = a.FORM_STATUS.LOADED, a.trustAsHtmlST = function(e) {
					return n.trustAsHtml(e)
				}, a.resetData = function() {
					a.updateData(a.settings.data)
				}, a.updateData = function(e) {
					a.data = angular.copy(e), a.data.type || (a.data.type = a.FORM_TYPE.ALERT)
				}, a.$watch("settings.data.element_id", function(e, t) {
					a.settings.params.notWatchElementIdFromZero && t !== e && 0 === t || a.settings.data && a.updateData(a.settings.data)
				}, !0), a.save = function(e) {
					var i = !0,
						r = {};
					if(angular.forEach(a.data.fields, function(e, t) {
							var n = "string" == typeof e.value ? e.value.trim() : e.value + "";
							!n || "0" === n && e.type === a.FIELD_TYPE.SELECT ? (i && setTimeout(function() {
								$("#" + a.prefix_id + "__add_update_form__field_" + e.name).focus()
							}, 0), i = !1, a.data.fields[t].error = !0) : a.data.fields[t].error = !1, e.value_type === a.VALUE_TYPE.INT ? r[e.name] = parseInt(n) : r[e.name] = n
						}), !i) return !1;
					!e && a.save_data && a.save_data(r, a), e && a.settings.params.extraButtonClick && a.settings.params.extraButtonClick(r, a)
				}, a.keyDown = function(e) {
					13 == e.keyCode && (e.preventDefault(), a.save())
				}, a.loading = function() {
					a.status = a.FORM_STATUS.LOADING
				}, a.success = function() {
					a.status = a.FORM_STATUS.SUCCESS
				}, a.error = function() {
					a.status = a.FORM_STATUS.ERROR
				}, a.loaded = function() {
					a.status = a.FORM_STATUS.LOADED
				}, a.getAceTemplate = function(e) {
					return e.type === a.FIELD_TYPE.ACE ? '<div ui-ace="{rendererOptions: {maxLines: f.maxLines}}" ng-model="f.value"></div>' : ""
				}
			},
			templateUrl: "/js/app/directives/addupdateform.html?v=180807"
		}
	}]).directive("selfTestLoadingData", ["$sce", "$interval", "$http", function(e, r, a) {
		return {
			scope: {
				model: "=ngModel",
				style: "=selfTestStyle",
				progressField: "=selfTestProgressField",
				progressShow: "=selfTestProgressShow",
				progressStyle: "=selfTestProgressStyle",
				interval: "=selfTestInterval",
				url: "=selfTestUrl"
			},
			restrict: "AEC",
			link: function(n, e, t) {
				var i;
				n.progressField = n.progressField ? n.progressField : "progress", n.interval = n.interval ? n.interval : 30, n.$watch("model", function(e) {
					!i && n.url && (i = r(function() {
						a({
							method: "POST",
							url: n.url,
							params: {
								time: (new Date).getTime()
							}
						}).success(function(e) {
							e.error ? console.log("error") : angular.forEach(e, function(e, t) {
								n.model[t] = e
							})
						}).error(function(e) {
							console.log("error")
						})
					}, 1e3 * n.interval))
				}), n.$on("$destroy", function() {
					i && (r.cancel(i), i = void 0)
				})
			},
			templateUrl: "/js/app/directives/loadingdata.html?v=180525"
		}
	}]).directive("selfTestTimer", ["$sce", "$interval", "$http", function(e, r, d) {
		return {
			scope: {
				timeModel: "=ngModel",
				time: "=selfTestTime",
				timeLimit: "=selfTestTimeLimit",
				style: "=selfTestStyle",
				url: "=selfTestUrl"
			},
			restrict: "AEC",
			link: function(u, e, t) {
				u.testCountUp = function(e) {
					var t = new Date,
						n = u.timeModel;
					if(u.timeLimit)(i = n - (t.getTime() - u.testStartTime) / 1e3) < 60 ? u.class = "time_limit_1" : i < 120 ? u.class = "time_limit_2" : i < 180 ? u.class = "time_limit_3" : i < 240 ? u.class = "time_limit_4" : i < 300 && (u.class = "time_limit_5");
					else var i = n + (t.getTime() - u.testStartTime) / 1e3;
					u.timeLimit && 2 == Math.floor(i) && 0 < $("#question_answer").find("#question_type_11").length && $(".next_question_form").submit(), i < 0 && (i = 0, u.stop(), u.timeLimit && location.reload(!0));
					var r = Math.floor(i / 3600);
					i -= 3600 * r;
					var a = Math.floor(i / 60);
					i -= 60 * a;
					var s = Math.floor(i % 60);
					a = a < 10 ? "0" + a : a, s = s < 10 ? "0" + s : s;
					var o = [];
					if("00" != (r = r < 10 ? "0" + r : r) ? (o[0] = r, o[1] = a, o[2] = s) : (o[0] = a, o[1] = s), u.timeLabel = o.join(":"), e && u.url && u.timeLimit && 0 < i && ("10" == s || "30" == s || "50" == s)) {
						var l = "",
							c = $("#question_answer");
						0 < c.find("#question_type_11").length && (l = c.serialize()), d({
							method: "POST",
							url: u.url,
							data: l,
							params: {
								time: (new Date).getTime()
							}
						}).success(function(e) {
							if(e.error) console.log("error");
							else if(e.reload) location.reload(!0);
							else if(void 0 !== e.time) {
								u.timeModel = e.time;
								var t = new Date;
								u.testStartTime = t.getTime()
							}
						}).error(function(e) {
							console.log("error")
						})
					}
				}, void 0 === u.timeModel && (u.timeModel = u.time ? u.time : 0), u.class = "", u.timeLabel = "", u.stop = function() {
					i && (r.cancel(i), i = void 0)
				}, u.$on("$destroy", function() {
					u.stop()
				});
				var n = new Date;
				u.testStartTime = n.getTime(), u.testCountUp(!1);
				var i = r(function() {
					u.testCountUp(!0)
				}, 1e3)
			},
			templateUrl: "/js/app/directives/timer.html?v=180530"
		}
	}]).directive("selfTestAjaxUpload", ["$sce", function(s) {
		return {
			scope: {
				files: "=ngModel",
				action: "@selfTestAjaxUploadAction",
				text: "@selfTestAjaxUploadText"
			},
			restrict: "AEC",
			link: function(e, t, n) {
				e.trustAsHtmlST = function(e) {
					return s.trustAsHtml(e)
				};
				var i = e.action || "/",
					r = t.find("a").eq(0),
					a = r.parent();
				$.ajax_upload(r, {
					action: i + "?time=" + (new Date).getTime(),
					name: "myfile",
					onSubmit: function(e, t) {
						if(a.hasClass("lock")) return !1;
						a.addClass("lock"), a.find(".progress").show(), this.disable()
					},
					onComplete: function(e, t) {
						this.enable();
						var n = jQuery.parseJSON(t);
						null != n.error && alert(n.error), a.find(".progress").hide(), a.removeClass("lock"), null != n.success && (alert(n.success), location.reload(!0))
					}
				})
			},
			templateUrl: "/js/app/directives/ajaxupload.html?v=180329"
		}
	}]).directive("selfTestFileUpload2", ["$timeout", function(e) {
		return {
			scope: {
				files: "=ngModel",
				action: "@selfTestFileUploadAction",
				buttonText: "@selfTestFileUploadButtonText",
				multiply: "@selfTestFileUploadMultiple",
				maxFiles: "@selfTestFileUploadMaxFiles",
				sizeLimit: "@selfTestFileUploadSizeLimit",
				allowedExtensions: "@selfTestFileUploadExtensions",
				removeFileAction: "@selfTestFileUploadRemoveAction"
			},
			restrict: "AEC",
			link: function(i, e, t) {
				var r = i.files.length,
					n = i.action || "/upload_example/upload.php",
					a = i.buttonText || "Прикрепить файлы",
					s = i.maxFiles || 5,
					o = (i.multiply, i.sizeLimit || 31457280),
					l = i.allowedExtensions || "pdf, doc, docx, xls, xlsx, rtf, png, jpg, jpeg",
					c = i.removeFileAction || "/upload_example/remove.php";
				l = l.split(", "), new qq.FileUploader({
					element: e.find(".file-uploader").get(0),
					action: n,
					allowedExtensions: l,
					sizeLimit: o,
					uploadButtonText: a,
					onComplete: function(e, t, n) {
						n && !0 === n.success && (c && d(), i.$apply(function() {
							i.files.push({
								name: t,
								id: n.id
							})
						}))
					},
					onSubmit: function(e, t) {
						if(s < ++r) return !1
					},
					onCancel: function(e, t) {
						r--
					},
					onError: function(e, t, n) {
						r--
					}
				});
				var u = $(e).find(".qq-upload-list");

				function d() {
					$(document).off("click.qq_upload"), $(document).on("click.qq_upload", ".qq-remove-file", function() {
						var t = $(this),
							n = $(this).attr("data-file-id");
						$.post(c, {
							id: n
						}, function(e) {
							i.$apply(function() {
								$.each(i.files, function(e, t) {
									+t.id == +n && i.files.splice(e, 1)
								}), r--
							}), t.parents("li").remove()
						})
					})
				}
				i.files.length && $.each(i.files, function(e, t) {
					u.append('<li class=" qq-upload-success"><span class="qq-upload-file">' + t.name + '</span><span class="qq-upload-size" style="display: inline;">' + t.size + '</span><a href="javascript:void(0)" class="js-link qq-remove-file" data-file-id="' + t.id + '">удалить</a></li>'), d()
				})
			},
			templateUrl: "/js/app/directives/fileupload.html"
		}
	}]).directive("selfTestVisual", ["$log", "$q", function(e, t) {
		return function(e, t, n) {
			var i = $(t),
				l = i.find(".visual_navigation a"),
				c = (i.find(".visual_bg"), i.find(".visual_page")),
				u = i.find(".visual_pages"),
				d = "data-page-id",
				f = l.filter(".active").attr(d),
				p = 1e3;

			function _(e) {
				e.preventDefault();
				var t = $(this).attr(d);
				t !== f && function(e) {
					var t = c.filter("[" + d + "=" + f + "]"),
						n = c.filter("[" + d + "=" + e + "]"),
						i = l.filter("[" + d + "=" + f + "]"),
						r = l.filter("[" + d + "=" + e + "]");
					i.removeClass("active"), r.addClass("active"), $(document).off("click.selfTestVisual"), n.show(), f < e ? (t.css({
						x: 0,
						opacity: 1
					}).addClass("inAnimate").transit({
						x: "-100%",
						opacity: 0
					}, p), n.css({
						x: "100%",
						opacity: 0
					}).addClass("inAnimate").transit({
						x: 0,
						opacity: 1
					}, p, o)) : (t.css({
						x: 0,
						opacity: 1
					}).addClass("inAnimate").transit({
						x: "100%",
						opacity: 0
					}, p), n.css({
						x: "-100%",
						opacity: 0
					}).addClass("inAnimate").transit({
						x: 0,
						opacity: 1
					}, p, o));
					var a = n.outerHeight(),
						s = t.outerHeight();

					function o() {
						$(document).on("click.selfTestVisual", ".visual_navigation a", _), t.removeClass("inAnimate"), n.removeClass("inAnimate"), t.hide(), f = e
					}
					u.css({
						height: s
					}).transit({
						height: a
					}, p)
				}(t)
			}
			$(document).on("click.selfTestVisual", ".visual_navigation a", _)
		}
	}]).directive("selfTestSetCardsHeight", ["$log", function(e) {
		return function(e, t, n) {
			var i = $(t).find(".lenta_item"),
				r = getMaxHeight(i);
			i.css("min-height", r)
		}
	}]).directive("selfTestMaskedInput", [function() {
		return {
			scope: {
				mask: "@selfTestMaskedInput",
				string: "@selfTestMaskedString"
			},
			restrict: "AEC",
			link: function(e, t, n) {
				var i = e.mask,
					r = e.string ? e.string : "";
				"" === r && ("phone" === i && (r = "+7 (999) 99-99-999"), "date" === i && (r = "99.99.9999"), "self-code" === i && (r = "********-********-********")), "" !== r && $(t).mask(r)
			}
		}
	}]).directive("selfTestTextEditor", ["$timeout", function(o) {
		return {
			restrict: "AE",
			scope: {
				text: "=ngModel",
				prefixId: "=selfTestPrefixId",
				focus: "=selfTestFocus",
				line: "=selfTestLine"
			},
			replace: !0,
			templateUrl: "/js/app/directives/texteditor.html?v=180521",
			controller: ["$scope", "$attrs", "$element", "$http", "$filter", "$sce", function(i, e, t, n, r, a) {
				if(i.isInitEditor = !!e.ngModel, i.isInitEditor) {
					var s = null;
					this.setTinymceScope = function(e) {
						s = e
					}, this.updateText = function(e) {
						i.text = e, s && (s.text = e)
					}, i.$watch("text", function(e) {
						s && s.text !== e && (s.text = e)
					}), i.toolbarId = i.prefixId + "toolbar", i.textId = i.prefixId + "text", i.line ? i.tinymce = {
						language: "ru",
						skin: "white",
						inline: !0,
						fixed_toolbar_container: "#" + i.toolbarId,
						plugins: ["paste"],
						paste_as_text: !0,
						forced_root_block: !1,
						force_p_newlines: !0,
						toolbar: "undo redo",
						menubar: !1,
						setup: function(e) {
							i.focus && o(function() {
								e.focus()
							})
						}
					} : i.tinymce = {
						language: "ru",
						skin: "white",
						inline: !0,
						fixed_toolbar_container: "#" + i.toolbarId,
						plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste"],
						paste_as_text: !0,
						toolbar: "undo redo | styleselect | table | removeformat subscript superscript charmap | bold italic underline strikethrough st_formula | bullist numlist | link",
						menubar: !1,
						setup: function(n) {
							var t = function(t) {
								n.formatter.register("mathPhp", {
									inline: "em",
									classes: ["mathPhp"]
								}), n.formatter.formatChanged("mathPhp", function(e) {
									t.active(e)
								})
							};
							n.addButton("st_formula", {
								text: "ƒ",
								icon: !1,
								onPostRender: function() {
									var e = this;
									n.formatter ? t(e) : n.on("init", function() {
										t(e)
									})
								},
								onclick: function() {
									n.formatter.toggle("mathPhp"), n.fire("change")
								}
							}), i.focus && o(function() {
								n.focus()
							})
						},
						formats: {
							italic: {
								inline: "span",
								classes: "italic"
							}
						},
						style_formats: [{
							title: "Формула",
							inline: "em",
							classes: "mathPhp"
						}, {
							title: "Заголовок",
							block: "h2"
						}, {
							title: "Параграф",
							block: "p"
						}, {
							title: "Код",
							block: "pre"
						}, {
							title: "Цитата или примечание",
							block: "blockquote"
						}],
						table_class_list: [{
							title: "None",
							value: ""
						}, {
							title: "По-умолчанию",
							value: "table"
						}, {
							title: "Все границы",
							value: "table table-border"
						}, {
							title: "Автоматическая ширина",
							value: "table table-width-auto"
						}, {
							title: "Подсветка строк при наведении",
							value: "table table-hover"
						}, {
							title: "Подсветка строк и все границы",
							value: "table table-hover table-border"
						}, {
							title: "Подсветка строк и автоматическая ширина",
							value: "table table-hover table-width-auto"
						}, {
							title: "Все границы и автоматическая ширина",
							value: "table table-border table-width-auto"
						}, {
							title: "Подсветка строк, все границы и автоматическая ширина",
							value: "table table-hover table-border table-width-auto"
						}],
						table_default_attributes: {
							class: "table table-hover table-border table-width-auto"
						}
					}, i.scrollToFixedSettings = {
						top: 0,
						limit: function() {
							var e = $(this).parents(".self_test_text_editor").find(".self_test_text_editor__text");
							if(e && e.offset()) return e.offset().top + e.outerHeight(!0) - $(this).outerHeight(!0) - 50
						},
						preFixed: function() {
							$(this).addClass("self_test_text_editor__toolbar--bottom_border"), $(this).removeClass("self_test_text_editor__toolbar--bottom_absolute")
						},
						preAbsolute: function() {
							$(this).addClass("self_test_text_editor__toolbar--bottom_border"), $(this).addClass("self_test_text_editor__toolbar--bottom_absolute")
						},
						postFixed: function() {
							$(this).removeClass("self_test_text_editor__toolbar--bottom_border"), $(this).removeClass("self_test_text_editor__toolbar--bottom_absolute")
						},
						postAbsolute: function() {
							$(this).removeClass("self_test_text_editor__toolbar--bottom_border"), $(this).removeClass("self_test_text_editor__toolbar--bottom_absolute")
						}
					}
				}
			}]
		}
	}]).directive("scrollToFixed", function() {
		return {
			require: "?ngModel",
			restrict: "A",
			link: function(e, t, n) {
				t.scrollToFixed(e.$eval(n.scrollToFixed)), n.ngModel && e.$watch(n.ngModel, function() {
					t.trigger("resize")
				}, !0), t.bind("update", function() {
					t.trigger("resize")
				}), t.bind("$destroy", function() {
					t.trigger("detach.ScrollToFixed")
				})
			}
		}
	}).directive("selfTestCategorySlidedown", function() {
		return function(e, t, n) {
			$(t).click(function() {
				var e = $(this).next(".nested_checkboxes_list, .nested_list");
				$(this).hasClass("js-active") ? ($(this).removeClass("js-active"), e.stop(!0, !0).slideUp("fast")) : ($(this).addClass("js-active"), e.stop(!0, !0).slideDown("fast"))
			})
		}
	}).directive("selfTestEmployeeSlideUpForm", function() {
		return function(e, t, n) {
			var i = $(t).find(".hide-subform"),
				r = $(t).find(".sub_form_slide_area");
			i.click(function() {
				$(this).hasClass("js-active") ? ($(this).removeClass("js-active"), r.slideUp("fast")) : ($(this).addClass("js-active"), r.slideDown("fast"))
			})
		}
	}).directive("selfTestSertificateSlide", function() {
		return function(e, t, n) {
			var i = $(t).find(".hide-subform"),
				r = $(t).find(".employee_certificate_form");
			i.click(function() {
				$(this).hasClass("js-active") ? ($(this).removeClass("js-active"), r.slideUp("fast")) : ($(this).addClass("js-active"), r.slideDown("fast"))
			})
		}
	}), angular.module("selfTestServices", []).service("sitePlans", ["$http", function(e) {
		var t = this;
		this.loaded = !1, this.options = [
			["Публикация контактов в базу образовательных<br>учреждений на сайте SELF-TEST.RU", 1, 1, 1, 1],
			["Главная страница сайта", 1, 1, 1, 1],
			["Филиалы на карте", "До 3 филиалов<br>1 город", "До 10 филиалов<br>до 3 городов", 1, 1],
			["Новости, контакты, описание,<br>тесты и соревнования на главной странице", 1, 1, 1, 1],
			["Виджеты лайков и групп ВКонтакте", 1, 1, 1, 1],
			["Подключение Яндекс.Метрики", 0, 1, 1, 1],
			["Добавление сотрудников (преподавателей)", 0, "До 10", "До 100", 1],
			["Общая база тестовых вопросов<br>для сотрудников", 0, 1, 1, 1],
			["Статистика работы сотрудников с учениками", 0, 1, 1, 1],
			["Отдельные разделы сайта для новостей,<br>контактов, сотрудников и тестов", 0, 1, 1, 1],
			["Создание дополнительных разделов сайта", 0, "До 3", 1, 1],
			["Создание подразделов сайта", 0, 0, 1, 1],
			["Блоги для сотрудников", 0, 0, 1, 1],
			["VIP поддрежка 24 часа в сутки", 0, 0, 0, 1]
		], e({
			method: "GET",
			url: "/sites/api_get_plans/",
			params: {
				time: (new Date).getTime()
			}
		}).success(function(e) {
			t.loaded = !0, t.plans = e
		}).error(function(e) {}), this.current_site_id = 0, this.old_plan = {
			id: 0
		}, this.new_plan = {
			id: 0
		}, this.recomended_plan = 1, this.getOptions = function() {
			return this.options
		}, this.getRecomendedPlan = function() {
			return this.recomended_plan
		}, this.getOldPlan = function() {
			return this.old_plan
		}, this.setOldPlan = function(e) {
			this.old_plan = angular.copy(e)
		}, this.setNewPlan = function(e) {
			this.new_plan = angular.copy(e)
		}, this.getCurrentSiteId = function() {
			return this.current_site_id
		}, this.setCurrentSiteId = function(e) {
			this.current_site_id = angular.copy(e)
		}, this.clearOldNewPlan = function() {
			this.current_site_id = 0, this.old_plan = {
				id: 0
			}, this.new_plan = {
				id: 0
			}
		}
	}]).service("curriculumService", ["$http", "$q", function(r, a) {
		this.loading_in_editor = !1, this.success_in_editor = !1, this.error_in_editor = !1, this.curriculum_in_editor = {}, this.loadCurriculumInEditor = function(e, s) {
			var o = a.defer(),
				l = this,
				t = [];
			return t.push(r({
				method: "GET",
				url: "/questions/api_get_curriculum/",
				params: {
					curriculum_id: e,
					time: (new Date).getTime()
				}
			})), a.all(t).then(function(e) {
				l.curriculum_in_editor = e[0].data;
				for(var t = [], n = [], i = s.users.length, r = 0; r < i; r++) n.push(s.users[r].id + "");
				i = s.otherUsers.length;
				for(r = 0; r < i; r++) n.push(s.otherUsers[r].id + "");
				for(var a in l.curriculum_in_editor.user_access) l.curriculum_in_editor.user_access.hasOwnProperty(a) && -1 == n.indexOf(a) && t.push(a);
				l.curriculum_in_editor.is_mine || (-1 == n.indexOf(l.curriculum_in_editor.user_id) && t.push(l.curriculum_in_editor.user_id), l.curriculum_in_editor.user_access_array.push(parseInt(l.curriculum_in_editor.user_id))), s.loadOtherUsers(t).then(function(e) {
					o.resolve(e)
				}, function(e) {
					o.reject(e)
				})
			}, function(e) {
				o.reject(e)
			}), o.promise
		}, this.library = null, this.loadLibrary = function(t) {
			var n = a.defer(),
				i = this;
			return null === i.library ? r({
				method: "GET",
				url: "/library/apigetlibrary/",
				params: {
					time: (new Date).getTime()
				}
			}).success(function(e) {
				e.data && (i.library = angular.copy(e.data)), t && t(), n.resolve(i.library)
			}).error(function(e) {
				n.reject(e)
			}) : (t && t(), n.resolve(i.library)), n.promise
		}, this.curriculums = {}, this.clearAdditionalCurriculums = function(e) {
			if(void 0 !== e && void 0 !== this.curriculums[e]) {
				var t = this.curriculums[e];
				this.curriculums = {}, this.curriculums[e] = t
			} else this.curriculums = {}
		}, this.loadCurriculums = function(t) {
			var n = a.defer(),
				i = this;
			return void 0 === i.curriculums[t] && (i.curriculums[t] = null), null === i.curriculums[t] ? r({
				method: "GET",
				url: "/questions/apigetcurriculums/",
				params: {
					search: t,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				e.data && (i.curriculums[t] = angular.copy(e.data)), n.resolve({
					data: i.curriculums[t],
					search: t
				})
			}).error(function(e) {
				n.reject(e)
			}) : n.resolve({
				data: i.curriculums[t],
				search: t
			}), n.promise
		}
	}]).service("questionService", ["$http", "$q", "$rootScope", function(c, u, s) {
		this.new_question = {
			data: {
				blocked: 0,
				blocked_by_user: 0,
				solved_amount: 0,
				text: "",
				tip: "",
				tip_is_active: !1,
				explanation: "",
				explanation_is_active: !1,
				type_id: 1,
				author_id: 0,
				shuffle_answers: 1,
				time_for_study: null
			},
			scorm: {
				title: "",
				version: ""
			},
			tags: [],
			answer_choise: [],
			authors_answers: [],
			ksa: [],
			topics: [],
			files: [],
			other_author: {
				id: 0,
				title: "",
				is_active: !1
			}
		}, this.new_answer_choise = {
			is_new: !0,
			is_error: !1,
			correct: !1,
			text: ""
		}, this.questions_database = [], this.questions = [], this.question_in_editor = {}, this.is_data_preloaded = !1, this.loading_status = 0, this.question_types = [], this.topic_structure = [], this.classes = [], this.subjects = [], this.question_user_access = [], this.setNewQuestionInEditor = function(e, t, n) {
			this.question_in_editor = angular.copy(this.new_question), null != e && (this.question_in_editor.data.parent_id = angular.copy(e)), null != t && (this.question_in_editor.ksa = angular.copy(t)), null != n && (this.question_in_editor.data.parent_type_id = angular.copy(n))
		}, this.setNewQuestionInEditor(), this.setQuestionInEditor = function(e) {
			this.question_in_editor = angular.copy(e)
		}, this.loadQuestions = function(e, t, n, i) {
			null == t && (t = 0), null == n && (n = []), null == i && (i = []);
			var r = this,
				a = [];
			a.push(c({
				method: "GET",
				url: "/questions/search_questions/",
				params: {
					topic_id: e,
					curriculum_id: t,
					type_id: n.join(","),
					not_type_id: i.join(","),
					time: (new Date).getTime()
				}
			}).success(function(e) {
				r.loading_status++
			})), a.push(c({
				method: "GET",
				url: "/questions/search_questions/",
				params: {
					topic_id: e,
					curriculum_id: t,
					type_id: n.join(","),
					not_type_id: i.join(","),
					is_user_access: 1,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				r.loading_status++
			})), a.push(c({
				method: "GET",
				url: "/questions/get_topic_structure/",
				params: {
					topic_id: e,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				r.loading_status++
			})), r.is_data_preloaded || a.push(c({
				method: "GET",
				url: "/questions/get_required_data/",
				params: {
					time: (new Date).getTime()
				}
			}).success(function(e) {
				r.loading_status++
			})), u.all(a).then(function(e) {
				r.questions = e[0].data, r.questions_database = e[1].data, r.topic_structure = e[2].data, r.is_data_preloaded ? (setTimeout(r.jplayerEditorInit, 500), setTimeout(r.colorboxInit, 500)) : (r.question_types = e[3].data.question_types, r.classes = e[3].data.classes, r.subjects = e[3].data.subjects, r.question_user_access = e[3].data.question_user_access, setTimeout(function() {
					s.$apply(function() {
						r.is_data_preloaded = !0
					}), setTimeout(r.jplayerEditorInit, 500), setTimeout(r.colorboxInit, 500)
				}, 1500))
			})
		}, this.questionBlock = function(s, e, t) {
			var o = u.defer(),
				n = this,
				i = (t = t ? 1 : 0, {
					question_id: s.data.id,
					is_user_access: e ? 1 : 0,
					time: (new Date).getTime()
				});
			return s.loading = !0, c({
				method: "GET",
				url: "/questions/block/" + t + "/",
				params: i
			}).success(function(r) {
				if(i.is_user_access) var a = n.questions_database;
				else a = n.questions;
				if(0 < parseInt(r.data.parent_id)) angular.forEach(a, function(e, t) {
					if(e.data.id == r.data.parent_id) {
						var n = a[t].childs.indexOf(s);
						7 == e.data.type_id && (e.child_with_blocked_by_user += r.data.blocked_by_user - a[t].childs[n].data.blocked_by_user), a[t].childs[n].data.blocked_by_user = r.data.blocked_by_user;
						var i = a[t].childs[n];
						s.loading = !1, o.resolve(i)
					}
				});
				else {
					var e = a.indexOf(s);
					a[e].data.blocked_by_user = r.data.blocked_by_user;
					var t = a[e];
					s.loading = !1, o.resolve(t)
				}
				setTimeout(n.jplayerEditorInit, 500), setTimeout(n.colorboxInit, 500)
			}).error(function(e) {
				o.reject(e)
			}), o.promise
		}, this.questionPrivate = function(a, e) {
			var s = u.defer(),
				o = this,
				t = (e = e ? 1 : 0, {
					question_id: a.data.id,
					time: (new Date).getTime()
				});
			return a.loading = !0, a.data.private = e, c({
				method: "GET",
				url: "/questions/api_private/" + e + "/",
				params: t
			}).success(function(r) {
				if(0 < parseInt(r.data.parent_id)) angular.forEach(o.questions, function(e, t) {
					if(e.data.id == r.data.parent_id) {
						var n = o.questions[t].childs.indexOf(a);
						o.questions[t].childs[n].data.private = r.data.private;
						var i = o.questions[t].childs[n];
						a.loading = !1, s.resolve(i)
					}
				});
				else {
					var e = o.questions.indexOf(a);
					o.questions[e].data.private = r.data.private;
					var t = o.questions[e];
					a.loading = !1, s.resolve(t)
				}
				setTimeout(o.jplayerEditorInit, 500), setTimeout(o.colorboxInit, 500)
			}).error(function(e) {
				s.reject(e)
			}), s.promise
		}, this.questionTag = function(s, e, t, n) {
			var o = u.defer(),
				i = this,
				l = (t = t ? 1 : 0, {
					question_id: s.data.id,
					enable: t,
					is_user_access: n ? 1 : 0,
					time: (new Date).getTime()
				});
			return s.loading = !0, 1 == t && (1 == e && (s.tag_1_enabled = 1), 2 == e && (s.tag_2_enabled = 1), 3 == e && (s.tag_3_enabled = 1)), c({
				method: "GET",
				url: "/questions/tag_enable/" + e + "/",
				params: l
			}).success(function(r) {
				if(l.is_user_access) var a = i.questions_database;
				else a = i.questions;
				if(0 < parseInt(r.data.parent_id)) angular.forEach(a, function(e, t) {
					if(e.data.id == r.data.parent_id) {
						var n = a[t].childs.indexOf(s);
						a[t].childs[n].tag_1 = r.tag_1, a[t].childs[n].tag_2 = r.tag_2, a[t].childs[n].tag_3 = r.tag_3, a[t].childs[n].tag_1_enabled = r.tag_1_enabled, a[t].childs[n].tag_2_enabled = r.tag_2_enabled, a[t].childs[n].tag_3_enabled = r.tag_3_enabled, a[t].childs[n].tags = r.tags;
						var i = a[t].childs[n];
						s.loading = !1, o.resolve(i)
					}
				});
				else {
					var e = a.indexOf(s);
					a[e].tag_1 = r.tag_1, a[e].tag_2 = r.tag_2, a[e].tag_3 = r.tag_3, a[e].tag_1_enabled = r.tag_1_enabled, a[e].tag_2_enabled = r.tag_2_enabled, a[e].tag_3_enabled = r.tag_3_enabled, a[e].tags = r.tags;
					var t = a[e];
					s.loading = !1, o.resolve(t)
				}
				setTimeout(i.jplayerEditorInit, 500), setTimeout(i.colorboxInit, 500)
			}).error(function(e) {
				o.reject(e)
			}), o.promise
		}, this.colorboxInit = function() {
			$("a.gallery").colorbox({
				opacity: .5,
				maxWidth: "90%",
				maxHeight: "90%",
				closeButton: !1
			})
		}, this.jplayerEditorInit = function() {
			$(".jp-jplayer-ng-ready").each(function() {
				var e = $(this),
					t = e.attr("data-id"),
					n = e.attr("data-path");
				$(".showtopic_jplayer_" + t).jPlayer({
					ready: function() {
						$(".showtopic_jplayer_" + t).jPlayer("setMedia", {
							mp3: n
						})
					},
					solution: "html, flash",
					swfPath: "/jplayer",
					supplied: "mp3",
					cssSelectorAncestor: ".showtopic_jp_container_" + t
				})
			}), $(".jp-jplayer-ng-ready-video").each(function() {
				var e = $(this),
					t = e.attr("data-id"),
					n = e.attr("data-path");
				$(".showtopic_jplayer_" + t).jPlayer({
					ready: function() {
						$(".showtopic_jplayer_" + t).jPlayer("setMedia", {
							m4v: n,
							poster: "/img/poster.jpg"
						})
					},
					solution: "html, flash",
					swfPath: "/jplayer",
					supplied: "m4v, ogv",
					cssSelectorAncestor: ".showtopic_jp_container_" + t
				})
			})
		}
	}]).service("schoolService", ["$http", "$q", "$rootScope", function(e, r, t) {
		this.classes = null, this.loadClasses = function(t) {
			var n = r.defer(),
				i = this;
			return null === i.classes ? e({
				method: "GET",
				url: "/pupils/apigetclasses/",
				params: {
					time: (new Date).getTime()
				}
			}).success(function(e) {
				e.data && (i.classes = angular.copy(e.data)), t && t(), n.resolve(i.classes)
			}).error(function(e) {
				n.reject(e)
			}) : (t && t(), n.resolve(i.classes)), n.promise
		}
	}]).service("peopleService", ["$http", "$q", function(r, a) {
		this.is_data_preloaded = !1, this.users = [], this.users_by_status = {}, this.users_by_testpac = {}, this.otherUsers = [], this.loadUsers = function(e) {
			var t = this,
				n = [];
			n.push(r({
				method: "POST",
				url: "/people/api_get_users/",
				params: {
					time: (new Date).getTime()
				},
				data: {
					status: e
				}
			})), a.all(n).then(function(e) {
				t.users = angular.copy(e[0].data)
			})
		}, this.loadUsersWithDefer = function(e) {
			var t = a.defer(),
				n = this,
				i = e.join(",");
			return null == n.users_by_status[i] || null == n.users_by_status[i] ? r({
				method: "POST",
				url: "/people/api_get_users/",
				params: {
					time: (new Date).getTime()
				},
				data: {
					status: e
				}
			}).success(function(e) {
				n.users_by_status[i] = angular.copy(e), n.users = angular.copy(e), t.resolve(n.users)
			}).error(function(e) {
				t.reject(e)
			}) : (n.users = angular.copy(n.users_by_status[i]), t.resolve(n.users)), t.promise
		}, this.loadUsersByTestpacs = function(t) {
			var n = a.defer(),
				i = this;
			return null == i.users_by_testpac["id_" + t] || null == i.users_by_testpac["id_" + t] ? r({
				method: "POST",
				url: "/people/apiusersbytestpac/",
				params: {
					time: (new Date).getTime()
				},
				data: {
					id: t
				}
			}).success(function(e) {
				i.users_by_testpac["id_" + t] = angular.copy(e), n.resolve(i.users_by_testpac["id_" + t])
			}).error(function(e) {
				n.reject(e)
			}) : n.resolve(i.users_by_testpac["id_" + t]), n.promise
		}, this.loadOtherUsers = function(e) {
			var t = a.defer();
			if(0 < e.length) {
				var n = this,
					i = [];
				i.push(r({
					method: "POST",
					url: "/people/api_get_users/",
					params: {
						time: (new Date).getTime()
					},
					data: {
						status: [],
						ids: e
					}
				})), a.all(i).then(function(e) {
					n.otherUsers = n.otherUsers.concat(angular.copy(e[0].data)), t.resolve(e[0])
				}, function(e) {
					t.reject(e)
				})
			} else t.resolve(null);
			return t.promise
		}
	}]).service("profileService", ["$http", "$q", function(e, i) {
		this.profile = null, this.loadProfile = function() {
			var t = i.defer(),
				n = this;
			return null == n.profile ? e({
				method: "POST",
				url: "/profile/apigetprofile/",
				params: {
					time: (new Date).getTime()
				},
				data: {}
			}).success(function(e) {
				n.profile = angular.copy(e.data), t.resolve(n.profile)
			}).error(function(e) {
				t.reject(e)
			}) : t.resolve(n.profile), t.promise
		}
	}]).service("testpacService", ["$http", "$q", function(e, r) {
		this.testpacs = {}, this.getTestpac = function(t) {
			var n = r.defer(),
				i = this;
			return null == i.testpacs["id_" + t] ? e({
				method: "POST",
				url: "/tests/apigettestpac/",
				params: {
					time: (new Date).getTime()
				},
				data: {
					id: t
				}
			}).success(function(e) {
				i.testpacs["id_" + t] = angular.copy(e.data), n.resolve(i.testpacs["id_" + t])
			}).error(function(e) {
				n.reject(e)
			}) : n.resolve(i.testpacs["id_" + t]), n.promise
		}
	}]).service("subscriptionService", ["$http", "$q", function(e, i) {
		this.subscriptions = [], this.loadSubscriptions = function() {
			var t = i.defer(),
				n = this;
			return e({
				method: "POST",
				url: "/api/getsubscription/",
				params: {
					time: (new Date).getTime()
				},
				data: {}
			}).success(function(e) {
				n.subscriptions = angular.copy(e.data), t.resolve(n.subscriptions)
			}).error(function(e) {
				t.reject(e)
			}), t.promise
		}
	}]).service("compilerService", ["$http", "$q", function(e, r) {
		this.compilers = null, this.loadCompilers = function(t) {
			var n = r.defer(),
				i = this;
			return null === i.compilers ? e({
				method: "POST",
				url: "/api/getcompilers/",
				params: {
					time: (new Date).getTime()
				},
				data: {}
			}).success(function(e) {
				i.compilers = angular.copy(e.data), t && t(), n.resolve(i.compilers)
			}).error(function(e) {
				n.reject(e)
			}) : (t && t(), n.resolve(i.compilers)), n.promise
		}
	}]).service("tagService", ["$http", "$q", function(e, r) {
		this.tags = {}, this.loadTags = function(t) {
			void 0 === t && (t = "");
			var n = r.defer(),
				i = this;
			return void 0 === i.tags[t] && (i.tags[t] = null), null === i.tags[t] ? (this.tags[t] = {}, e({
				method: "GET",
				url: "/questions/api_get_question_user_tags/",
				params: {
					search: t,
					time: (new Date).getTime()
				}
			}).success(function(e) {
				e.data && (i.tags[t] = angular.copy(e.data)), n.resolve({
					data: i.tags[t],
					search: t
				})
			}).error(function(e) {
				n.reject(e)
			})) : n.resolve({
				data: i.tags[t],
				search: t
			}), n.promise
		}
	}]).service("testService", ["$http", "$q", function(e, r) {
		this.tests = {}, this.loadTest = function(t) {
			var n = r.defer(),
				i = this;
			return void 0 === i.tests[t] && (i.tests[t] = null), null === i.tests[t] ? e({
				method: "GET",
				url: "/testing/apigettest/" + t + "/",
				params: {
					time: (new Date).getTime()
				}
			}).success(function(e) {
				e.data && (i.tests[t] = angular.copy(e.data)), n.resolve({
					data: i.tests[t],
					search: t
				})
			}).error(function(e) {
				n.reject(e)
			}) : n.resolve({
				data: i.tests[t],
				search: t
			}), n.promise
		}, this.colorboxInit = function() {
			$("a.gallery").colorbox({
				opacity: .5,
				maxWidth: "90%",
				maxHeight: "90%",
				closeButton: !1
			})
		}, this.jplayerEditorInit = function() {
			$(".jp-jplayer-ng-ready").each(function() {
				var e = $(this),
					t = e.attr("data-id"),
					n = e.attr("data-path");
				$(".showtopic_jplayer_" + t).jPlayer({
					ready: function() {
						$(".showtopic_jplayer_" + t).jPlayer("setMedia", {
							mp3: n
						})
					},
					solution: "html, flash",
					swfPath: "/jplayer",
					supplied: "mp3",
					cssSelectorAncestor: ".showtopic_jp_container_" + t
				})
			}), $(".jp-jplayer-ng-ready-video").each(function() {
				var e = $(this),
					t = e.attr("data-id"),
					n = e.attr("data-path");
				$(".showtopic_jplayer_" + t).jPlayer({
					ready: function() {
						$(".showtopic_jplayer_" + t).jPlayer("setMedia", {
							m4v: n,
							poster: "/img/poster.jpg"
						})
					},
					solution: "html, flash",
					swfPath: "/jplayer",
					supplied: "m4v, ogv",
					cssSelectorAncestor: ".showtopic_jp_container_" + t
				})
			})
		}
	}]), window.console && console.log || function() {
		"use strict";
		for(var e = function() {}, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "markTimeline", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], n = t.length, i = window.console = {}; n--;) i[t[n]] = e
	}(), jQuery.fn.extend({
		everyTime: function(e, t, n, i) {
			return this.each(function() {
				jQuery.timer.add(this, e, t, n, i)
			})
		},
		oneTime: function(e, t, n) {
			return this.each(function() {
				jQuery.timer.add(this, e, t, n, 1)
			})
		},
		stopTime: function(e, t) {
			return this.each(function() {
				jQuery.timer.remove(this, e, t)
			})
		}
	}), jQuery.extend({
		timer: {
			global: [],
			guid: 1,
			dataKey: "jQuery.timer",
			regex: /^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,
			powers: {
				ms: 1,
				cs: 10,
				ds: 100,
				s: 1e3,
				das: 1e4,
				hs: 1e5,
				ks: 1e6
			},
			timeParse: function(e) {
				if(null == e || null == e) return null;
				var t = this.regex.exec(jQuery.trim(e.toString()));
				return t[2] ? parseFloat(t[1]) * (this.powers[t[2]] || 1) : e
			},
			add: function(e, t, n, i, r) {
				var a = 0;
				if(jQuery.isFunction(n) && (r || (r = i), i = n, n = t), !("number" != typeof(t = jQuery.timer.timeParse(t)) || isNaN(t) || t < 0)) {
					("number" != typeof r || isNaN(r) || r < 0) && (r = 0), r = r || 0;
					var s = jQuery.data(e, this.dataKey) || jQuery.data(e, this.dataKey, {});
					s[n] || (s[n] = {}), i.timerID = i.timerID || this.guid++;
					var o = function() {
						(++a > r && 0 !== r || !1 === i.call(e, a)) && jQuery.timer.remove(e, n, i)
					};
					o.timerID = i.timerID, s[n][i.timerID] || (s[n][i.timerID] = window.setInterval(o, t)), this.global.push(e)
				}
			},
			remove: function(e, t, n) {
				var i, r = jQuery.data(e, this.dataKey);
				if(r) {
					if(t) {
						if(r[t]) {
							if(n) n.timerID && (window.clearInterval(r[t][n.timerID]), delete r[t][n.timerID]);
							else
								for(var n in r[t]) window.clearInterval(r[t][n]), delete r[t][n];
							for(i in r[t]) break;
							i || (i = null, delete r[t])
						}
					} else
						for(t in r) this.remove(e, t, n);
					for(i in r) break;
					i || jQuery.removeData(e, this.dataKey)
				}
			}
		}
	}), jQuery(window).bind("unload", function() {
		jQuery.each(jQuery.timer.global, function(e, t) {
			jQuery.timer.remove(t)
		})
	}),
	function(t) {
		t.fn.maxWidth = function() {
			var e = 0;
			return this.each(function() {
				e = Math.max(e, t(this).width())
			}), e
		}
	}(jQuery),
	function(s, i) {
		"use strict";

		function o(e) {
			var t, n = s(e),
				i = (t = function() {
					return Math.floor(65536 * Math.random()).toString(16)
				})() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
			return n.attr("data-awId", i), "<li data-awId=" + i + ">" + n.html() + "</li>"
		}

		function r(e, t) {
			t.find(".awDropDown").show(), t.find("ul:not(.awSuper)").width(t.find("ul:not(.awSuper)").maxWidth()), t.find("ul li").wrapInner("<span />"), t.find(".awText").width(t.find("ul li span").maxWidth()), t.find(".awDropDown").hide();
			var n = e.find(":selected").html(),
				i = e.find(":selected").attr("data-awId");
			t.find("li[data-awId=" + i + "]").addClass("selected"), t.find(".awText").html(n)
		}

		function a(e, t) {
			var n = s(l(e));
			t.find(".awDropDown").html(""), t.find(".awDropDown").append(n)
		}

		function l(e) {
			var t = "",
				n = ' class="first"',
				i = e.find("option"),
				r = e.find("optgroup");
			if(1 < r.length) {
				var a = e.find(">option");
				a.length && (t += '<ul class="awSuper">', a.each(function() {
					t += o(this)
				}), t += "</ul>"), r.each(function() {
					t += "<ul" + n + ">", s(this).find("option").each(function() {
						t += o(this)
					}), t += "</ul>", n = ""
				})
			} else t += "<ul" + n + ">", i.each(function() {
				t += o(this)
			}), t += "</ul>";
			return t
		}
		var c = {
				optgroupsAsCols: !0,
				slideTime: 200,
				waitTime: 500
			},
			u = {
				subsclick: function(e) {
					e.stopPropagation();
					var t = s(this),
						n = s(this).find(".awDropDown");
					n.stop(!0, !0), t.hasClass("active") ? d.slideUp.apply(this, arguments) : (t.addClass("active"), n.slideDown(c.slideTime), s(i).on("click.awSelect", {
						that: t
					}, u.winclick, !1), s(this).on("mouseout.awSelect", u.mouseout))
				},
				changeSubsSelect: function(e) {
					var t = s(this),
						n = e.data.select,
						i = e.data.subsSelect,
						r = t.attr("data-awId");
					i.find("li").removeClass("selected"), t.addClass("selected"), i.find(".awText").html(t.html()), n.find("option").removeAttr("selected"), n.find("option[data-awId=" + r + "]").attr("selected", !0), n.trigger("change")
				},
				winclick: function(e) {
					e.stopPropagation();
					var t = e.data.that;
					d.slideUp.apply(t, arguments)
				},
				mouseout: function() {
					s(this).oneTime(c.waitTime, function() {
						d.slideUp.apply(this)
					}), s(this).on("mouseover.awSelect", u.mouseover)
				},
				mouseover: function() {
					s(this).stopTime()
				}
			},
			d = {
				init: function(e) {
					return "object" == typeof e && (c = s.fn.extend(c, e)), this.each(function() {
						var e = s(this),
							t = e.data("awSelect"),
							n = s('<div class="awesomeSelect" unselectable="on"><div class="awPad"><span class="awText"></span><i class="awBullet"></i></div><div class="awDropDown"></div></div>');
						t || (e.data("awSelect", {
							subsSelect: n,
							select: e
						}), e.hide(), e.after(n), a(e, n), r(e, n), n.on("click.awSelect", u.subsclick), n.on("click.awSelect", "li", {
							select: e,
							subsSelect: n
						}, u.changeSubsSelect), e.trigger("change"))
					})
				},
				update: function() {
					return this.each(function() {
						var e = s(this),
							t = e.data("awSelect").select,
							n = e.data("awSelect").subsSelect;
						s(l(e));
						a(t, n), r(t, n)
					})
				},
				destroy: function() {
					return this.each(function() {
						var e = s(this),
							t = e.data("awSelect");
						e.off(".awSelect"), e.find("option").removeAttr("data-awId"), s(i).off(".awSelect"), t.subsSelect.remove(), t.select.show()
					})
				},
				option: function() {},
				slideUp: function() {
					var e = s(this),
						t = e.find(".awDropDown");
					e.removeClass("active"), t.slideUp(c.slideTime), s(i).off("click.awSelect"), s(this).off("mouseover.awSelect"), s(this).off("mouseout.awSelect"), e.stopTime()
				}
			};
		jQuery.fn.awSelect = function(e) {
			return "function" == typeof d[e] ? d[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void s.error("Method " + e + " does not exist on jQuery.awSelect") : d.init.apply(this, arguments)
		}
	}(jQuery, window);
var Base64 = {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	encode: function(e) {
		var t, n, i, r, a, s, o, l = "",
			c = 0;
		for(e = Base64._utf8_encode(e); c < e.length;) r = (t = e.charCodeAt(c++)) >> 2, a = (3 & t) << 4 | (n = e.charCodeAt(c++)) >> 4, s = (15 & n) << 2 | (i = e.charCodeAt(c++)) >> 6, o = 63 & i, isNaN(n) ? s = o = 64 : isNaN(i) && (o = 64), l = l + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(s) + this._keyStr.charAt(o);
		return l
	},
	decode: function(e) {
		var t, n, i, r, a, s, o = "",
			l = 0;
		for(e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) t = this._keyStr.indexOf(e.charAt(l++)) << 2 | (r = this._keyStr.indexOf(e.charAt(l++))) >> 4, n = (15 & r) << 4 | (a = this._keyStr.indexOf(e.charAt(l++))) >> 2, i = (3 & a) << 6 | (s = this._keyStr.indexOf(e.charAt(l++))), o += String.fromCharCode(t), 64 != a && (o += String.fromCharCode(n)), 64 != s && (o += String.fromCharCode(i));
		return o = Base64._utf8_decode(o)
	},
	_utf8_encode: function(e) {
		e = e.replace(/\r\n/g, "\n");
		for(var t = "", n = 0; n < e.length; n++) {
			var i = e.charCodeAt(n);
			i < 128 ? t += String.fromCharCode(i) : (127 < i && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128)), t += String.fromCharCode(63 & i | 128))
		}
		return t
	},
	_utf8_decode: function(e) {
		for(var t = "", n = 0, i = c1 = c2 = 0; n < e.length;)(i = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(i), n++) : 191 < i && i < 224 ? (c2 = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & c2), n += 2) : (c2 = e.charCodeAt(n + 1), c3 = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
		return t
	}
};

function getCookie(e) {
	var t = " " + document.cookie,
		n = " " + e + "=",
		i = null,
		r = 0,
		a = 0;
	return 0 < t.length && -1 != (r = t.indexOf(n)) && (r += n.length, -1 == (a = t.indexOf(";", r)) && (a = t.length), i = t.substring(r, a)), i
}

function setCookie(e, t, n, i, r, a) {
		var s = new Date;
		s.setTime(s.getTime()), n && (n = 1e3 * n * 60 * 60 * 24);
		var o = new Date(s.getTime() + n);
		document.cookie = e + "=" + t + (n ? "; expires=" + o : "") + (i ? "; path=" + i : "") + (r ? "; domain=" + r : "") + (a ? "; secure" : "")
	}! function($) {
		var escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
			meta = {
				"\b": "\\b",
				"\t": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			};
		$.toJSON = "object" == typeof JSON && JSON.stringify ? JSON.stringify : function(e) {
			if(null === e) return "null";
			var t = typeof e;
			if("undefined" !== t) {
				if("number" === t || "boolean" === t) return "" + e;
				if("string" === t) return $.quoteString(e);
				if("object" === t) {
					if("function" == typeof e.toJSON) return $.toJSON(e.toJSON());
					if(e.constructor === Date) {
						var n = e.getUTCMonth() + 1,
							i = e.getUTCDate(),
							r = e.getUTCFullYear(),
							a = e.getUTCHours(),
							s = e.getUTCMinutes(),
							o = e.getUTCSeconds(),
							l = e.getUTCMilliseconds();
						return n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), s < 10 && (s = "0" + s), o < 10 && (o = "0" + o), l < 100 && (l = "0" + l), l < 10 && (l = "0" + l), '"' + r + "-" + n + "-" + i + "T" + a + ":" + s + ":" + o + "." + l + 'Z"'
					}
					if(e.constructor === Array) {
						for(var c = [], u = 0; u < e.length; u++) c.push($.toJSON(e[u]) || "null");
						return "[" + c.join(",") + "]"
					}
					var d, f, p = [];
					for(var _ in e) {
						if("number" === (t = typeof _)) d = '"' + _ + '"';
						else {
							if("string" !== t) continue;
							d = $.quoteString(_)
						}
						"function" !== (t = typeof e[_]) && "undefined" !== t && (f = $.toJSON(e[_]), p.push(d + ":" + f))
					}
					return "{" + p.join(",") + "}"
				}
			}
		}, $.evalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(src) {
			return eval("(" + src + ")")
		}, $.secureEvalJSON = "object" == typeof JSON && JSON.parse ? JSON.parse : function(src) {
			var filtered = src.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "");
			if(/^[\],:{}\s]*$/.test(filtered)) return eval("(" + src + ")");
			throw new SyntaxError("Error parsing JSON, source is not valid.")
		}, $.quoteString = function(e) {
			return e.match(escapeable) ? '"' + e.replace(escapeable, function(e) {
				var t = meta[e];
				return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
			}) + '"' : '"' + e + '"'
		}
	}(jQuery),
	function(d) {
		d.fn.columnHover = function(e) {
			var c = d.extend({
					hoverClass: "hover",
					eachCell: !1,
					includeSpans: !0,
					ignoreCols: []
				}, e),
				n = function(e, t, n) {
					var i = t[e.realIndex],
						r = 0;
					if(-1 == d(c.ignoreCols).index(e.realIndex + 1)) {
						for(; ++r < e.colSpan;) i = i.concat(t[e.realIndex + r]);
						n ? d(i).addClass(c.hoverClass) : d(i).removeClass(c.hoverClass)
					}
				},
				u = function(e, t) {
					e.bind("mouseover", function() {
						n(this, t, !0)
					}).bind("mouseout", function() {
						n(this, t, !1)
					})
				};
			return this.each(function() {
				var e, t, n, i, r, a, s, o, l = [];
				if(this.tBodies && this.tBodies.length && this.tHead && c.hoverClass.length) {
					for(function(e) {
							for(var t = e.rows, n = t.length, i = [], r = 0; r < n; r++)
								for(var a = t[r].cells, s = a.length, o = 0; o < s; o++) {
									var l = a[o],
										c = l.rowSpan || 1,
										u = l.colSpan || 1,
										d = -1;
									i[r] || (i[r] = []);
									for(var f = i[r]; f[++d];);
									l.realIndex = d;
									for(var p = r; p < r + c; p++) {
										i[p] || (i[p] = []);
										for(var _ = i[p], h = d; h < d + u; h++) _[h] = 1
									}
								}
						}(this), i = 0; i < this.tBodies.length; i++)
						for(e = this.tBodies[i], r = 0; r < e.rows.length; r++)
							for(t = e.rows[r], a = 0; a < t.cells.length; a++)
								if(n = t.cells[a], c.includeSpans || !(1 < n.colSpan)) {
									for(o = c.includeSpans ? n.colSpan : 1; 0 <= --o;) l[s = n.realIndex + o] || (l[s] = []), l[s].push(n);
									c.eachCell && u(d(n), l)
								}
					u(d("td, th", this.tHead), l), c.eachCell && this.tFoot && u(d("td, th", this.tFoot), l)
				}
			})
		}
	}(jQuery),
	function(ge, ve) {
		var _ = {
				defaultView: "month",
				aspectRatio: 1.35,
				header: {
					left: "title",
					center: "",
					right: "today prev,next"
				},
				weekends: !0,
				allDayDefault: !0,
				ignoreTimezone: !0,
				lazyFetching: !0,
				startParam: "start",
				endParam: "end",
				titleFormat: {
					month: "MMMM yyyy",
					week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",
					day: "dddd, MMM d, yyyy"
				},
				columnFormat: {
					month: "ddd",
					week: "ddd M/d",
					day: "dddd M/d"
				},
				timeFormat: {
					"": "h(:mm)t"
				},
				isRTL: !1,
				firstDay: 0,
				monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				buttonText: {
					prev: "&nbsp;&#9668;&nbsp;",
					next: "&nbsp;&#9658;&nbsp;",
					prevYear: "&nbsp;&lt;&lt;&nbsp;",
					nextYear: "&nbsp;&gt;&gt;&nbsp;",
					today: "today",
					month: "month",
					week: "week",
					day: "day"
				},
				theme: !1,
				buttonIcons: {
					prev: "circle-triangle-w",
					next: "circle-triangle-e"
				},
				unselectAuto: !0,
				dropAccept: "*"
			},
			e = {
				header: {
					left: "next,prev today",
					center: "",
					right: "title"
				},
				buttonText: {
					prev: "&nbsp;&#9658;&nbsp;",
					next: "&nbsp;&#9668;&nbsp;",
					prevYear: "&nbsp;&gt;&gt;&nbsp;",
					nextYear: "&nbsp;&lt;&lt;&nbsp;"
				},
				buttonIcons: {
					prev: "circle-triangle-e",
					next: "circle-triangle-w"
				}
			},
			M = ge.fullCalendar = {
				version: "1.5.3"
			},
			P = M.views = {};

		function t(e) {
			ge.extend(!0, _, e)
		}

		function s(r, a, e) {
			var i = this;
			i.options = a, i.render = function(e) {
					o ? (k(), S(), j(), C(e)) : function() {
						a.theme ? "ui" : "fc", r.addClass("fc"), a.isRTL && r.addClass("fc-rtl");
						a.theme && r.addClass("ui-widget");
						o = ge("<div class='fc-content' style='position:relative'/>").prependTo(r), s = new F(i, a), (t = s.render()) && r.prepend(t);
						x(a.defaultView), ge(window).resize(D), w() || $()
					}()
				}, i.destroy = function() {
					ge(window).unbind("resize", D), s.destroy(), o.remove(), r.removeClass("fc fc-rtl ui-widget")
				}, i.refetchEvents = E, i.reportEvents = function(e) {
					y = e, A()
				}, i.reportEventChange = function(e) {
					A(e)
				}, i.rerenderEvents = A, i.changeView = x, i.select = function(e, t, n) {
					l.select(e, t, n === ve || n)
				}, i.unselect = O, i.prev = function() {
					C(-1)
				}, i.next = function() {
					C(1)
				}, i.prevYear = function() {
					N(v, -1), C()
				}, i.nextYear = function() {
					N(v, 1), C()
				}, i.today = function() {
					v = new Date, C()
				}, i.gotoDate = function(e, t, n) {
					e instanceof Date ? v = xe(e) : R(v, e, t, n);
					C()
				}, i.incrementDate = function(e, t, n) {
					e !== ve && N(v, e);
					t !== ve && U(v, t);
					n !== ve && $e(v, n);
					C()
				}, i.formatDate = function(e, t) {
					return H(e, t, a)
				}, i.formatDates = function(e, t, n) {
					return V(e, t, n, a)
				}, i.getDate = function() {
					return xe(v)
				}, i.getView = function() {
					return l
				}, i.option = function(e, t) {
					if(t === ve) return a[e];
					"height" != e && "contentHeight" != e && "aspectRatio" != e || (a[e] = t, T())
				}, i.trigger = function(e, t) {
					if(a[e]) return a[e].apply(t || _, Array.prototype.slice.call(arguments, 2))
				},
				function(_, e) {
					var t = this;
					t.isFetchNeeded = function(e, t) {
						return !h || e < h || m < t
					}, t.fetchEvents = function(e, t) {
						h = e, m = t, u = [];
						var n = ++s,
							i = a.length;
						c = i;
						for(var r = 0; r < i; r++) f(a[r], n)
					}, t.addEventSource = function(e) {
						(e = p(e)) && (c++, f(e, s))
					}, t.removeEventSource = function(t) {
						a = ge.grep(a, function(e) {
							return !$(e, t)
						}), u = ge.grep(u, function(e) {
							return !$(e.source, t)
						}), l(u)
					}, t.updateEvent = function(e) {
						var t, n, i = u.length,
							r = o().defaultEventEnd,
							a = e.start - e._start,
							s = e.end ? e.end - (e._end || r(e)) : 0;
						for(t = 0; t < i; t++)(n = u[t])._id == e._id && n != e && (n.start = new Date(+n.start + a), e.end ? n.end ? n.end = new Date(+n.end + s) : n.end = new Date(+r(n) + s) : n.end = null, n.title = e.title, n.url = e.url, n.allDay = e.allDay, n.className = e.className, n.editable = e.editable, n.color = e.color, n.backgroudColor = e.backgroudColor, n.borderColor = e.borderColor, n.textColor = e.textColor, y(n));
						y(e), l(u)
					}, t.renderEvent = function(e, t) {
						y(e), e.source || (t && (i.events.push(e), e.source = i), u.push(e));
						l(u)
					}, t.removeEvents = function(e) {
						if(e) {
							if(!ge.isFunction(e)) {
								var t = e + "";
								e = function(e) {
									return e._id == t
								}
							}
							u = ge.grep(u, e, !0);
							for(var n = 0; n < a.length; n++) ge.isArray(a[n].events) && (a[n].events = ge.grep(a[n].events, e, !0))
						} else {
							u = [];
							for(var n = 0; n < a.length; n++) ge.isArray(a[n].events) && (a[n].events = [])
						}
						l(u)
					}, t.clientEvents = function(t) {
						{
							if(ge.isFunction(t)) return ge.grep(u, t);
							if(t) return t += "", ge.grep(u, function(e) {
								return e._id == t
							})
						}
						return u
					}, t.normalizeEvent = y;
					for(var h, m, n = t.trigger, o = t.getView, l = t.reportEvents, i = {
							events: []
						}, a = [i], s = 0, c = 0, r = 0, u = [], d = 0; d < e.length; d++) p(e[d]);

					function f(n, i) {
						! function e(t, n) {
							var i;
							var r = M.sourceFetchers;
							var a;
							for(i = 0; i < r.length; i++) {
								if(!0 === (a = r[i](t, h, m, n))) return;
								if("object" == typeof a) return void e(a, n)
							}
							var s = t.events;
							if(s) ge.isFunction(s) ? (g(), s(xe(h), xe(m), function(e) {
								n(e), v()
							})) : ge.isArray(s) ? n(s) : n();
							else {
								var o = t.url;
								if(o) {
									var l = t.success,
										c = t.error,
										u = t.complete,
										d = ge.extend({}, t.data || {}),
										f = Q(t.startParam, _.startParam),
										p = Q(t.endParam, _.endParam);
									f && (d[f] = Math.round(+h / 1e3)), p && (d[p] = Math.round(+m / 1e3)), g(), ge.ajax(ge.extend({}, I, t, {
										data: d,
										success: function(e) {
											e = e || [];
											var t = Y(l, this, arguments);
											ge.isArray(t) && (e = t), n(e)
										},
										error: function() {
											Y(c, this, arguments), n()
										},
										complete: function() {
											Y(u, this, arguments), v()
										}
									}))
								} else n()
							}
						}(n, function(e) {
							if(i == s) {
								if(e) {
									for(var t = 0; t < e.length; t++) e[t].source = n, y(e[t]);
									u = u.concat(e)
								}--c || l(u)
							}
						})
					}

					function p(e) {
						if(ge.isFunction(e) || ge.isArray(e) ? e = {
								events: e
							} : "string" == typeof e && (e = {
								url: e
							}), "object" == typeof e) return function(e) {
							e.className ? "string" == typeof e.className && (e.className = e.className.split(/\s+/)) : e.className = [];
							for(var t = M.sourceNormalizers, n = 0; n < t.length; n++) t[n](e)
						}(e), a.push(e), e
					}

					function g() {
						r++ || n("loading", null, !0)
					}

					function v() {
						--r || n("loading", null, !1)
					}

					function y(e) {
						var t = e.source || {},
							n = Q(t.ignoreTimezone, _.ignoreTimezone);
						e._id = e._id || (e.id === ve ? "_fc" + z++ : e.id + ""), e.date && (e.start || (e.start = e.date), delete e.date), e._start = xe(e.start = L(e.start, n)), e.end = L(e.end, n), e.end && e.end <= e.start && (e.end = null), e._end = e.end ? xe(e.end) : null, e.allDay === ve && (e.allDay = Q(t.allDayDefault, _.allDayDefault)), e.className ? "string" == typeof e.className && (e.className = e.className.split(/\s+/)) : e.className = []
					}

					function $(e, t) {
						return e && t && b(e) == b(t)
					}

					function b(e) {
						return("object" == typeof e ? e.events || e.url : "") || e
					}
				}.call(i, a, e);
			var s, t, o, l, c, u, d, f, p = i.isFetchNeeded,
				n = i.fetchEvents,
				_ = r[0],
				h = {},
				m = 0,
				g = 0,
				v = new Date,
				y = [];

			function $() {
				setTimeout(function() {
					!l.start && w() && C()
				}, 0)
			}

			function b() {
				return 0 !== _.offsetWidth
			}

			function w() {
				return 0 !== ge("body")[0].offsetWidth
			}

			function x(e) {
				if(!l || e != l.name) {
					g++, O();
					var t, n = l;
					n ? ((n.beforeHide || W)(), B(o, o.height()), n.element.hide()) : B(o, 1), o.css("overflow", "hidden"), (l = h[e]) ? l.element.show() : l = h[e] = new P[e](t = d = ge("<div class='fc-view fc-view-" + e + "' style='position:absolute'/>").appendTo(o), i), n && s.deactivateButton(n.name), s.activateButton(e), C(), o.css("overflow", ""), n && B(o, 1), t || (l.afterShow || W)(), g--
				}
			}

			function C(e) {
				if(b()) {
					g++, O(), u === ve && k();
					var t = !1;
					!l.start || e || v < l.start || v >= l.end ? (l.render(v, e || 0), q(!0), t = !0) : l.sizeDirty ? (l.clearEvents(), q(), t = !0) : l.eventsDirty && (l.clearEvents(), t = !0), l.sizeDirty = !1, l.eventsDirty = !1, i = t, !a.lazyFetching || p(l.visStart, l.visEnd) ? E() : i && A(), c = r.outerWidth(), s.updateTitle(l.title);
					var n = new Date;
					n >= l.start && n < l.end ? s.disableButton("today") : s.enableButton("today"), g--, l.trigger("viewDisplay", _)
				}
				var i
			}

			function T() {
				S(), b() && (k(), q(), O(), l.clearEvents(), l.renderEvents(y), l.sizeDirty = !1)
			}

			function S() {
				ge.each(h, function(e, t) {
					t.sizeDirty = !0
				})
			}

			function k() {
				u = a.contentHeight ? a.contentHeight : a.height ? a.height - (t ? t.height() : 0) - Me(o) : Math.round(o.width() / Math.max(a.aspectRatio, .5))
			}

			function q(e) {
				g++, l.setHeight(u, e), d && (d.css("position", "relative"), d = null), l.setWidth(o.width(), e), g--
			}

			function D() {
				if(!g)
					if(l.start) {
						var e = ++m;
						setTimeout(function() {
							e == m && !g && b() && c != (c = r.outerWidth()) && (g++, T(), l.trigger("windowResize", _), g--)
						}, 200)
					} else $()
			}

			function E() {
				n(l.visStart, l.visEnd)
			}

			function A(e) {
				j(), b() && (l.clearEvents(), l.renderEvents(y, e), l.eventsDirty = !1)
			}

			function j() {
				ge.each(h, function(e, t) {
					t.eventsDirty = !0
				})
			}

			function O() {
				l && l.unselect()
			}
			R(v, a.year, a.month, a.date), a.droppable && ge(document).bind("dragstart", function(e, t) {
				var n = e.target,
					i = ge(n);
				if(!i.parents(".fc").length) {
					var r = a.dropAccept;
					(ge.isFunction(r) ? r.call(n, i) : i.is(r)) && (f = n, l.dragStart(f, e, t))
				}
			}).bind("dragstop", function(e, t) {
				f && (l.dragStop(f, e, t), f = null)
			})
		}

		function F(l, c) {
			this.render = function() {
				if(u = c.theme ? "ui" : "fc", c.header) return t = ge("<table class='fc-header' style='width:100%'/>").append(ge("<tr/>").append(e("left")).append(e("center")).append(e("right")))
			}, this.destroy = function() {
				t.remove()
			}, this.updateTitle = function(e) {
				t.find("h2").html(e)
			}, this.activateButton = function(e) {
				t.find("span.fc-button-" + e).addClass(u + "-state-active")
			}, this.deactivateButton = function(e) {
				t.find("span.fc-button-" + e).removeClass(u + "-state-active")
			}, this.disableButton = function(e) {
				t.find("span.fc-button-" + e).addClass(u + "-state-disabled")
			}, this.enableButton = function(e) {
				t.find("span.fc-button-" + e).removeClass(u + "-state-disabled")
			};
			var u, t = ge([]);

			function e(e) {
				var o = ge("<td class='fc-header-" + e + "'/>"),
					t = c.header[e];
				return t && ge.each(t.split(" "), function(e) {
					var s;
					0 < e && o.append("<span class='fc-header-space'/>"), ge.each(this.split(","), function(e, t) {
						var n;
						if("title" == t) o.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"), s && s.addClass(u + "-corner-right"), s = null;
						else if(l[t] ? n = l[t] : P[t] && (n = function() {
								a.removeClass(u + "-state-hover"), l.changeView(t)
							}), n) {
							var i = c.theme ? v(c.buttonIcons, t) : null,
								r = v(c.buttonText, t),
								a = ge("<span class='fc-button fc-button-" + t + " " + u + "-state-default'><span class='fc-button-inner'><span class='fc-button-content'>" + (i ? "<span class='fc-icon-wrap'><span class='ui-icon ui-icon-" + i + "'/></span>" : r) + "</span><span class='fc-button-effect'><span></span></span></span></span>");
							a && (a.click(function() {
								a.hasClass(u + "-state-disabled") || n()
							}).mousedown(function() {
								a.not("." + u + "-state-active").not("." + u + "-state-disabled").addClass(u + "-state-down")
							}).mouseup(function() {
								a.removeClass(u + "-state-down")
							}).hover(function() {
								a.not("." + u + "-state-active").not("." + u + "-state-disabled").addClass(u + "-state-hover")
							}, function() {
								a.removeClass(u + "-state-hover").removeClass(u + "-state-down")
							}).appendTo(o), s || a.addClass(u + "-corner-left"), s = a)
						}
					}), s && s.addClass(u + "-corner-right")
				}), o
			}
		}
		ge.fn.fullCalendar = function(r) {
			if("string" == typeof r) {
				var n, i = Array.prototype.slice.call(arguments, 1);
				return this.each(function() {
					var e = ge.data(this, "fullCalendar");
					if(e && ge.isFunction(e[r])) {
						var t = e[r].apply(e, i);
						n === ve && (n = t), "destroy" == r && ge.removeData(this, "fullCalendar")
					}
				}), n !== ve ? n : this
			}
			var a = r.eventSources || [];
			return delete r.eventSources, r.events && (a.push(r.events), delete r.events), r = ge.extend(!0, {}, _, r.isRTL || r.isRTL === ve && _.isRTL ? e : {}, r), this.each(function(e, t) {
				var n = ge(t),
					i = new s(n, r, a);
				n.data("fullCalendar", i), i.render()
			}), this
		}, M.sourceNormalizers = [];
		var I = {
				dataType: "json",
				cache: !(M.sourceFetchers = [])
			},
			z = 1;
		M.addDays = $e, M.cloneDate = xe, M.parseDate = L, M.parseISO8601 = r, M.parseTime = Se, M.formatDate = H, M.formatDates = V;
		var i = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
			p = 864e5,
			n = 36e5,
			ye = 6e4;

		function N(e, t, n) {
			return e.setFullYear(e.getFullYear() + t), n || we(e), e
		}

		function U(e, t, n) {
			if(+e) {
				var i = e.getMonth() + t,
					r = xe(e);
				for(r.setDate(1), r.setMonth(i), e.setMonth(i), n || we(e); e.getMonth() != r.getMonth();) e.setDate(e.getDate() + (e < r ? 1 : -1))
			}
			return e
		}

		function $e(e, t, n) {
			if(+e) {
				var i = e.getDate() + t,
					r = xe(e);
				r.setHours(9), r.setDate(i), e.setDate(i), n || we(e), o(e, r)
			}
			return e
		}

		function o(e, t) {
			if(+e)
				for(; e.getDate() != t.getDate();) e.setTime(+e + (e < t ? 1 : -1) * n)
		}

		function be(e, t) {
			return e.setMinutes(e.getMinutes() + t), e
		}

		function we(e) {
			return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e
		}

		function xe(e, t) {
			return t ? we(new Date(+e)) : new Date(+e)
		}

		function Ce() {
			for(var e, t = 0;
				(e = new Date(1970, t++, 1)).getHours(););
			return e
		}

		function h(e, t, n) {
			for(t = t || 1; !e.getDay() || n && 1 == e.getDay() || !n && 6 == e.getDay();) $e(e, t);
			return e
		}

		function Te(e, t) {
			return Math.round((xe(e, !0) - xe(t, !0)) / p)
		}

		function R(e, t, n, i) {
			t !== ve && t != e.getFullYear() && (e.setDate(1), e.setMonth(0), e.setFullYear(t)), n !== ve && n != e.getMonth() && (e.setDate(1), e.setMonth(n)), i !== ve && e.setDate(i)
		}

		function L(e, t) {
			return "object" == typeof e ? e : "number" == typeof e ? new Date(1e3 * e) : "string" == typeof e ? e.match(/^\d+(\.\d+)?$/) ? new Date(1e3 * parseFloat(e)) : (t === ve && (t = !0), r(e, t) || (e ? new Date(e) : null)) : null
		}

		function r(e, t) {
			var n = e.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);
			if(!n) return null;
			var i = new Date(n[1], 0, 1);
			if(t || !n[13]) {
				var r = new Date(n[1], 0, 1, 9, 0);
				n[3] && (i.setMonth(n[3] - 1), r.setMonth(n[3] - 1)), n[5] && (i.setDate(n[5]), r.setDate(n[5])), o(i, r), n[7] && i.setHours(n[7]), n[8] && i.setMinutes(n[8]), n[10] && i.setSeconds(n[10]), n[12] && i.setMilliseconds(1e3 * Number("0." + n[12])), o(i, r)
			} else if(i.setUTCFullYear(n[1], n[3] ? n[3] - 1 : 0, n[5] || 1), i.setUTCHours(n[7] || 0, n[8] || 0, n[10] || 0, n[12] ? 1e3 * Number("0." + n[12]) : 0), n[14]) {
				var a = 60 * Number(n[16]) + (n[18] ? Number(n[18]) : 0);
				a *= "-" == n[15] ? 1 : -1, i = new Date(+i + 60 * a * 1e3)
			}
			return i
		}

		function Se(e) {
			if("number" == typeof e) return 60 * e;
			if("object" == typeof e) return 60 * e.getHours() + e.getMinutes();
			var t = e.match(/(\d+)(?::(\d+))?\s*(\w+)?/);
			if(t) {
				var n = parseInt(t[1], 10);
				return t[3] && (n %= 12, "p" == t[3].toLowerCase().charAt(0) && (n += 12)), 60 * n + (t[2] ? parseInt(t[2], 10) : 0)
			}
		}

		function H(e, t, n) {
			return V(e, null, t, n)
		}

		function V(e, t, n, i) {
			i = i || _;
			var r, a, s, o, l = e,
				c = t,
				u = n.length,
				d = "";
			for(r = 0; r < u; r++)
				if("'" == (a = n.charAt(r))) {
					for(s = r + 1; s < u; s++)
						if("'" == n.charAt(s)) {
							l && (d += s == r + 1 ? "'" : n.substring(r + 1, s), r = s);
							break
						}
				} else if("(" == a) {
				for(s = r + 1; s < u; s++)
					if(")" == n.charAt(s)) {
						var f = H(l, n.substring(r + 1, s), i);
						parseInt(f.replace(/\D/, ""), 10) && (d += f), r = s;
						break
					}
			} else if("[" == a) {
				for(s = r + 1; s < u; s++)
					if("]" == n.charAt(s)) {
						var p = n.substring(r + 1, s);
						(f = H(l, p, i)) != H(c, p, i) && (d += f), r = s;
						break
					}
			} else if("{" == a) l = t, c = e;
			else if("}" == a) l = e, c = t;
			else {
				for(s = u; r < s; s--)
					if(o = m[n.substring(r, s)]) {
						l && (d += o(l, i)), r = s - 1;
						break
					}
				s == r && l && (d += a)
			}
			return d
		}
		var m = {
			s: function(e) {
				return e.getSeconds()
			},
			ss: function(e) {
				return a(e.getSeconds())
			},
			m: function(e) {
				return e.getMinutes()
			},
			mm: function(e) {
				return a(e.getMinutes())
			},
			h: function(e) {
				return e.getHours() % 12 || 12
			},
			hh: function(e) {
				return a(e.getHours() % 12 || 12)
			},
			H: function(e) {
				return e.getHours()
			},
			HH: function(e) {
				return a(e.getHours())
			},
			d: function(e) {
				return e.getDate()
			},
			dd: function(e) {
				return a(e.getDate())
			},
			ddd: function(e, t) {
				return t.dayNamesShort[e.getDay()]
			},
			dddd: function(e, t) {
				return t.dayNames[e.getDay()]
			},
			M: function(e) {
				return e.getMonth() + 1
			},
			MM: function(e) {
				return a(e.getMonth() + 1)
			},
			MMM: function(e, t) {
				return t.monthNamesShort[e.getMonth()]
			},
			MMMM: function(e, t) {
				return t.monthNames[e.getMonth()]
			},
			yy: function(e) {
				return(e.getFullYear() + "").substring(2)
			},
			yyyy: function(e) {
				return e.getFullYear()
			},
			t: function(e) {
				return e.getHours() < 12 ? "a" : "p"
			},
			tt: function(e) {
				return e.getHours() < 12 ? "am" : "pm"
			},
			T: function(e) {
				return e.getHours() < 12 ? "A" : "P"
			},
			TT: function(e) {
				return e.getHours() < 12 ? "AM" : "PM"
			},
			u: function(e) {
				return H(e, "yyyy-MM-dd'T'HH:mm:ss'Z'")
			},
			S: function(e) {
				var t = e.getDate();
				return 10 < t && t < 20 ? "th" : ["st", "nd", "rd"][t % 10 - 1] || "th"
			}
		};

		function ke(e) {
			return e.end ? (t = e.end, n = e.allDay, t = xe(t), n || t.getHours() || t.getMinutes() ? $e(t, 1) : we(t)) : $e(xe(e.start), 1);
			var t, n
		}

		function g(e, t) {
			return 100 * (t.msLength - e.msLength) + (e.event.start - t.event.start)
		}

		function l(e, t) {
			return e.end > t.start && e.start < t.end
		}

		function qe(e, t, n, i) {
			var r, a, s, o, l, c, u, d, f = [],
				p = e.length;
			for(r = 0; r < p; r++) s = (a = e[r]).start, n < (o = t[r]) && s < i && (s < n ? (l = xe(n), u = !1) : (l = s, u = !0), i < o ? (c = xe(i), d = !1) : (c = o, d = !0), f.push({
				event: a,
				start: l,
				end: c,
				isStart: u,
				isEnd: d,
				msLength: c - l
			}));
			return f.sort(g)
		}

		function De(e) {
			var t, n, i, r, a, s = [],
				o = e.length;
			for(t = 0; t < o; t++) {
				for(n = e[t], i = 0;;) {
					if(r = !1, s[i])
						for(a = 0; a < s[i].length; a++)
							if(l(s[i][a], n)) {
								r = !0;
								break
							}
					if(!r) break;
					i++
				}
				s[i] ? s[i].push(n) : s[i] = [n]
			}
			return s
		}

		function Ee(e, a, s) {
			e.unbind("mouseover").mouseover(function(e) {
				for(var t, n, i, r = e.target; r != this;) r = (t = r).parentNode;
				(n = t._fci) !== ve && (t._fci = ve, i = a[n], s(i.event, i.element, i), ge(e.target).trigger(e)), e.stopPropagation()
			})
		}

		function Ae(e, t, n) {
			for(var i, r = 0; r < e.length; r++)(i = ge(e[r])).width(Math.max(0, t - Oe(i, n)))
		}

		function je(e, t, n) {
			for(var i, r = 0; r < e.length; r++)(i = ge(e[r])).height(Math.max(0, t - Me(i, n)))
		}

		function Oe(e, t) {
			return r = e, (parseFloat(ge.css(r[0], "paddingLeft", !0)) || 0) + (parseFloat(ge.css(r[0], "paddingRight", !0)) || 0) + (i = e, (parseFloat(ge.css(i[0], "borderLeftWidth", !0)) || 0) + (parseFloat(ge.css(i[0], "borderRightWidth", !0)) || 0)) + (t ? (n = e, (parseFloat(ge.css(n[0], "marginLeft", !0)) || 0) + (parseFloat(ge.css(n[0], "marginRight", !0)) || 0)) : 0);
			var n, i, r
		}

		function Me(e, t) {
			return i = e, (parseFloat(ge.css(i[0], "paddingTop", !0)) || 0) + (parseFloat(ge.css(i[0], "paddingBottom", !0)) || 0) + (n = e, (parseFloat(ge.css(n[0], "borderTopWidth", !0)) || 0) + (parseFloat(ge.css(n[0], "borderBottomWidth", !0)) || 0)) + (t ? c(e) : 0);
			var n, i
		}

		function c(e) {
			return(parseFloat(ge.css(e[0], "marginTop", !0)) || 0) + (parseFloat(ge.css(e[0], "marginBottom", !0)) || 0)
		}

		function B(e, n) {
			n = "number" == typeof n ? n + "px" : n, e.each(function(e, t) {
				t.style.cssText += ";min-height:" + n + ";_height:" + n
			})
		}

		function W() {}

		function Pe(e, t) {
			return e - t
		}

		function G(e) {
			return Math.max.apply(Math, e)
		}

		function a(e) {
			return(e < 10 ? "0" : "") + e
		}

		function v(e, t) {
			if(e[t] !== ve) return e[t];
			for(var n, i = t.split(/(?=[A-Z])/), r = i.length - 1; 0 <= r; r--)
				if((n = e[i[r].toLowerCase()]) !== ve) return n;
			return e[""]
		}

		function Fe(e) {
			return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
		}

		function Ie(e) {
			return e.id + "/" + e.className + "/" + e.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/gi, "")
		}

		function ze(e) {
			e.attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
				return !1
			})
		}

		function Ne(e) {
			e.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")
		}

		function Ue(e, n) {
			e.each(function(e, t) {
				t.className = t.className.replace(/^fc-\w*/, "fc-" + i[n.getDay()])
			})
		}

		function Re(e, t) {
			var n = e.source || {},
				i = e.color,
				r = n.color,
				a = t("eventColor"),
				s = e.backgroundColor || i || n.backgroundColor || r || t("eventBackgroundColor") || a,
				o = e.borderColor || i || n.borderColor || r || t("eventBorderColor") || a,
				l = e.textColor || n.textColor || t("eventTextColor"),
				c = [];
			return s && c.push("background-color:" + s), o && c.push("border-color:" + o), l && c.push("color:" + l), c.join(";")
		}

		function Y(e, t, n) {
			if(ge.isFunction(e) && (e = [e]), e) {
				var i, r;
				for(i = 0; i < e.length; i++) r = e[i].apply(t, n) || r;
				return r
			}
		}

		function Q() {
			for(var e = 0; e < arguments.length; e++)
				if(arguments[e] !== ve) return arguments[e]
		}

		function y(l, e, t) {
			var u = this;
			u.renderBasic = function(e, t, n, i) {
					v = t, y = n,
						function() {
							(b = S("isRTL")) ? (w = -1, x = y - 1) : (w = 1, x = 0);
							s = S("firstDay"), o = S("weekends") ? 0 : 1, C = S("theme") ? "ui" : "fc", T = S("columnFormat")
						}();
					var r = !f;
					r ? function(e, t) {
						var n, i, r, a, s = C + "-widget-header",
							o = C + "-widget-content";
						for(n = "<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>", i = 0; i < y; i++) n += "<th class='fc- " + s + "'/>";
						for(n += "</tr></thead><tbody>", i = 0; i < e; i++) {
							for(n += "<tr class='fc-week" + i + "'>", r = 0; r < y; r++) n += "<td class='fc- " + o + " fc-day" + (i * y + r) + "'><div>" + (t ? "<div class='fc-day-number'/>" : "") + "<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
							n += "</tr>"
						}
						a = ge(n += "</tbody></table>").appendTo(l), c = a.find("thead"), d = c.find("th"), f = a.find("tbody"), p = f.find("tr"), _ = f.find("td"), h = _.filter(":first-child"), m = p.eq(0).find("div.fc-day-content div"), Ne(c.add(c.find("tr"))), Ne(p), p.eq(0).addClass("fc-first"), O(_), g = ge("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(l)
					}(e, i) : q();
					! function(e) {
						var n, i, r, a = e || 1 == v,
							s = u.start.getMonth(),
							o = we(new Date);
						a && d.each(function(e, t) {
							n = ge(t), i = U(e), n.html(j(i, T)), Ue(n, i)
						});
						_.each(function(e, t) {
							n = ge(t), (i = U(e)).getMonth() == s ? n.removeClass("fc-other-month") : n.addClass("fc-other-month"), +i == +o ? n.addClass(C + "-state-highlight fc-today") : n.removeClass(C + "-state-highlight fc-today"), n.find("div.fc-day-number").text(i.getDate()), a && Ue(n, i)
						}), p.each(function(e, t) {
							r = ge(t), e < v ? (r.show(), e == v - 1 ? r.addClass("fc-last") : r.removeClass("fc-last")) : r.hide()
						})
					}(r)
				}, u.setHeight = function(e) {
					var n, i, r, t = e - c.height();
					"variable" == S("weekMode") ? n = i = Math.floor(t / (1 == v ? 2 : 6)) : (n = Math.floor(t / v), i = t - n * (v - 1));
					h.each(function(e, t) {
						e < v && B((r = ge(t)).find("> div"), (e == v - 1 ? i : n) - Me(r))
					})
				}, u.setWidth = function(e) {
					n = e, r.clear(), i = Math.floor(n / y), Ae(d.slice(0, -1), i)
				}, u.renderDayOverlay = P, u.defaultSelectionEnd = function(e, t) {
					return xe(e)
				}, u.renderSelection = function(e, t, n) {
					P(e, $e(xe(t), 1), !0)
				}, u.clearSelection = function() {
					E()
				}, u.reportDayClick = function(e, t, n) {
					var i = I(e),
						r = _[i.row * y + i.col];
					k("dayClick", r, e, t, n)
				}, u.dragStart = function(e, t, n) {
					a.start(function(e) {
						E(), e && F(e.row, e.col, e.row, e.col)
					}, t)
				}, u.dragStop = function(e, t, n) {
					var i = a.stop();
					if(E(), i) {
						var r = z(i);
						k("drop", e, r, !0, t, n)
					}
				}, u.defaultEventEnd = function(e) {
					return xe(e.start)
				}, u.getHoverListener = function() {
					return a
				}, u.colContentLeft = function(e) {
					return r.left(e)
				}, u.colContentRight = function(e) {
					return r.right(e)
				}, u.dayOfWeekCol = R, u.dateCell = I, u.cellDate = z, u.cellIsAllDay = function() {
					return !0
				}, u.allDayRow = function(e) {
					return p.eq(e)
				}, u.allDayBounds = function(e) {
					return {
						left: 0,
						right: n
					}
				}, u.getRowCnt = function() {
					return v
				}, u.getColCnt = function() {
					return y
				}, u.getColWidth = function() {
					return i
				}, u.getDaySegmentContainer = function() {
					return g
				}, He.call(u, l, e, t), We.call(u), Be.call(u),
				function() {
					var p = this;
					p.renderEvents = function(e, t) {
						n(e), i(r(e), t)
					}, p.compileDaySegs = r, p.clearEvents = function() {
						e(), t().empty()
					}, p.bindDaySeg = function(e, t, n) {
						c(e) && (r = e, a = t, i = m(), a.draggable({
							zIndex: 9,
							delay: 50,
							opacity: o("dragOpacity"),
							revertDuration: o("dragRevertDuration"),
							start: function(e, t) {
								l("eventDragStart", a, r, e, t), _(r, a), i.start(function(e, t, n, i) {
									a.draggable("option", "revert", !e || !n && !i), v(), e ? (s = 7 * n + i * (o("isRTL") ? -1 : 1), g($e(xe(r.start), s), $e(ke(r), s))) : s = 0
								}, e, "drag")
							},
							stop: function(e, t) {
								i.stop(), v(), l("eventDragStop", a, r, e, t), s ? h(this, r, s, 0, r.allDay, e, t) : (a.css("filter", ""), f(r, a))
							}
						}));
						var r, a, s, i;
						n.isEnd && u(e) && b(e, t, n);
						d(e, t)
					}, Ve.call(p);
					var o = p.opt,
						l = p.trigger,
						c = p.isEventDraggable,
						u = p.isEventResizable,
						n = p.reportEvents,
						e = p.reportEventClear,
						d = p.eventElementHandlers,
						f = p.showEvents,
						_ = p.hideEvents,
						h = p.eventDrop,
						t = p.getDaySegmentContainer,
						m = p.getHoverListener,
						g = p.renderDayOverlay,
						v = p.clearOverlays,
						y = p.getRowCnt,
						$ = p.getColCnt,
						i = p.renderDaySegs,
						b = p.resizableDayEvent;

					function r(e) {
						var t, n, i, r, a, s, o = y(),
							l = $(),
							c = xe(p.visStart),
							u = $e(xe(c), l),
							d = ge.map(e, ke),
							f = [];
						for(t = 0; t < o; t++) {
							for(n = De(qe(e, d, c, u)), i = 0; i < n.length; i++)
								for(r = n[i], a = 0; a < r.length; a++)(s = r[a]).row = t, s.level = i, f.push(s);
							$e(c, 7), $e(u, 7)
						}
						return f
					}
				}.call(u);
			var c, d, f, p, _, h, m, g, n, i, v, y, $, a, r, b, w, x, s, o, C, T, S = u.opt,
				k = u.trigger,
				q = u.clearEvents,
				D = u.renderOverlay,
				E = u.clearOverlays,
				A = u.daySelectionMousedown,
				j = e.formatDate;

			function O(e) {
				e.click(M).mousedown(A)
			}

			function M(e) {
				if(!S("selectable")) {
					var t = U(parseInt(this.className.match(/fc\-day(\d+)/)[1]));
					k("dayClick", this, t, !0, e)
				}
			}

			function P(e, t, n) {
				n && $.build();
				for(var i = xe(u.visStart), r = $e(xe(i), y), a = 0; a < v; a++) {
					var s, o, l = new Date(Math.max(i, e)),
						c = new Date(Math.min(r, t));
					if(l < c) b ? (s = Te(c, i) * w + x + 1, o = Te(l, i) * w + x + 1) : (s = Te(l, i), o = Te(c, i)), O(F(a, s, a, o - 1));
					$e(i, 7), $e(r, 7)
				}
			}

			function F(e, t, n, i) {
				var r = $.rect(e, t, n, i, l);
				return D(r, l)
			}

			function I(e) {
				return {
					row: Math.floor(Te(e, u.visStart) / 7),
					col: R(e.getDay())
				}
			}

			function z(e) {
				return N(e.row, e.col)
			}

			function N(e, t) {
				return $e(xe(u.visStart), 7 * e + t * w + x)
			}

			function U(e) {
				return N(Math.floor(e / y), e % y)
			}

			function R(e) {
				return(e - Math.max(s, o) + y) % y * w + x
			}
			ze(l.addClass("fc-grid")), $ = new Ge(function(n, i) {
				var r, a, s;
				d.each(function(e, t) {
					r = ge(t), a = r.offset().left, e && (s[1] = a), s = [a], i[e] = s
				}), s[1] = a + r.outerWidth(), p.each(function(e, t) {
					e < v && (r = ge(t), a = r.offset().top, e && (s[1] = a), s = [a], n[e] = s)
				}), s[1] = a + r.outerHeight()
			}), a = new Ye($), r = new Qe(function(e) {
				return m.eq(e)
			})
		}

		function d(l, e, t) {
			var d = this;
			d.renderAgenda = function(e) {
					A = e, F = B("theme") ? "ui" : "fc", z = B("weekends") ? 0 : 1, I = B("firstDay"), (N = B("isRTL")) ? (U = -1, R = A - 1) : (U = 1, R = 0), L = Se(B("minTime")), H = Se(B("maxTime")), V = B("columnFormat"), c ? G() : function() {
						var e, t, n, i, r, a = F + "-widget-header",
							s = F + "-widget-content",
							o = B("slotMinutes") % 15 == 0;
						for(e = "<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr><th class='fc-agenda-axis " + a + "'>&nbsp;</th>", t = 0; t < A; t++) e += "<th class='fc- fc-col" + t + " " + a + "'/>";
						for(e += "<th class='fc-agenda-gutter " + a + "'>&nbsp;</th></tr></thead><tbody><tr><th class='fc-agenda-axis " + a + "'>&nbsp;</th>", t = 0; t < A; t++) e += "<td class='fc- fc-col" + t + " " + s + "'><div><div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";
						c = ge(e += "<td class='fc-agenda-gutter " + s + "'>&nbsp;</td></tr></tbody></table>").appendTo(l), u = c.find("thead"), f = u.find("th").slice(1, -1), p = c.find("tbody"), _ = p.find("td").slice(0, -1), h = _.find("div.fc-day-content div"), m = _.eq(0), g = m.find("> div"), Ne(u.add(u.find("tr"))), Ne(p.add(p.find("tr"))), k = u.find("th:first"), q = c.find(".fc-agenda-gutter"), v = ge("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(l), B("allDaySlot") ? (y = ge("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(v), e = "<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='" + a + " fc-agenda-axis'>" + B("allDayText") + "</th><td><div class='fc-day-content'><div style='position:relative'/></div></td><th class='" + a + " fc-agenda-gutter'>&nbsp;</th></tr></table>", $ = ge(e).appendTo(v), ne((b = $.find("tr")).find("td")), k = k.add($.find("th:first")), q = q.add($.find("th.fc-agenda-gutter")), v.append("<div class='fc-agenda-divider " + a + "'><div class='fc-agenda-divider-inner'/></div>")) : y = ge([]);
						for(w = ge("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(v), x = ge("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(w), C = ge("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(x), e = "<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>", n = Ce(), i = be(xe(n), H), be(n, L), t = j = 0; n < i; t++) r = n.getMinutes(), e += "<tr class='fc-slot" + t + " " + (r ? "fc-minor" : "") + "'><th class='fc-agenda-axis " + a + "'>" + (o && r ? "&nbsp;" : ee(n, B("axisFormat"))) + "</th><td class='" + s + "'><div style='position:relative'>&nbsp;</div></td></tr>", be(n, B("slotMinutes")), j++;
						T = ge(e += "</tbody></table>").appendTo(x), S = T.find("div:first"), ie(T.find("td")), k = k.add(T.find("th:first"))
					}();
					! function() {
						var e, t, n, i, r = we(new Date);
						for(e = 0; e < A; e++) i = ce(e), (t = f.eq(e)).html(ee(i, V)), n = _.eq(e), +i == +r ? n.addClass(F + "-state-highlight fc-today") : n.removeClass(F + "-state-highlight fc-today"), Ue(t.add(n), i)
					}()
				}, d.setWidth = function(e) {
					n = e, P.clear(), s = 0, Ae(k.width("").each(function(e, t) {
						s = Math.max(s, ge(t).outerWidth())
					}), s);
					var t = w[0].clientWidth;
					(i = w.width() - t) ? (Ae(q, i), q.show().prev().removeClass("fc-last")) : q.hide().prev().addClass("fc-last");
					o = Math.floor((t - s) / A), Ae(f.slice(0, -1), o)
				}, d.setHeight = function(e, t) {
					e === ve && (e = a);
					a = e, te = {};
					var n = p.position().top,
						i = w.position().top,
						r = Math.min(e - n, T.height() + i + 1);
					g.height(r - Me(m)), v.css("top", n), w.height(r - i - 1), E = S.height() + 1, t && function() {
						var e = Ce(),
							t = xe(e);
						t.setHours(B("firstHour"));
						var n = fe(e, t) + 1;

						function i() {
							w.scrollTop(n)
						}
						i(), setTimeout(i, 0)
					}()
				}, d.beforeHide = function() {
					r = w.scrollTop()
				}, d.afterShow = function() {
					w.scrollTop(r)
				}, d.defaultEventEnd = function(e) {
					var t = xe(e.start);
					if(e.allDay) return t;
					return be(t, B("defaultEventMinutes"))
				}, d.timePosition = fe, d.dayOfWeekCol = de, d.dateCell = function(e) {
					return {
						row: Math.floor(Te(e, d.visStart) / 7),
						col: de(e.getDay())
					}
				}, d.cellDate = le, d.cellIsAllDay = ue, d.allDayRow = function(e) {
					return b
				}, d.allDayBounds = function() {
					return {
						left: s,
						right: n - i
					}
				}, d.getHoverListener = function() {
					return M
				}, d.colContentLeft = function(e) {
					return P.left(e)
				}, d.colContentRight = function(e) {
					return P.right(e)
				}, d.getDaySegmentContainer = function() {
					return y
				}, d.getSlotSegmentContainer = function() {
					return C
				}, d.getMinMinute = function() {
					return L
				}, d.getMaxMinute = function() {
					return H
				}, d.getBodyContent = function() {
					return x
				}, d.getRowCnt = function() {
					return 1
				}, d.getColCnt = function() {
					return A
				}, d.getColWidth = function() {
					return o
				}, d.getSlotHeight = function() {
					return E
				}, d.defaultSelectionEnd = function(e, t) {
					if(t) return xe(e);
					return be(xe(e), B("slotMinutes"))
				}, d.renderDayOverlay = ae, d.renderSelection = function(e, t, n) {
					n ? B("allDaySlot") && ae(e, $e(xe(t), 1), !0) : pe(e, t)
				}, d.clearSelection = _e, d.reportDayClick = me, d.dragStart = function(e, t, n) {
					M.start(function(e) {
						if(Q(), e)
							if(ue(e)) se(e.row, e.col, e.row, e.col);
							else {
								var t = le(e),
									n = be(xe(t), B("defaultEventMinutes"));
								oe(t, n)
							}
					}, t)
				}, d.dragStop = function(e, t, n) {
					var i = M.stop();
					Q(), i && W("drop", e, le(i), ue(i), t, n)
				}, He.call(d, l, e, t), We.call(d), Be.call(d),
				function() {
					var p = this;
					p.renderEvents = function(e, t) {
						s(e);
						var n, i = e.length,
							r = [],
							a = [];
						for(n = 0; n < i; n++) e[n].allDay ? r.push(e[n]) : a.push(e[n]);
						E("allDaySlot") && (l(c(r), t), o());
						! function(e, t) {
							var n, i, r, a, s, o, l, c, u, d, f, p, _, h, m, g, v, y, $, b, w, x, C = e.length,
								T = "",
								S = {},
								k = {},
								q = j(),
								D = F();
							(b = E("isRTL")) ? (w = -1, x = D - 1) : (w = 1, x = 0);
							for(n = 0; n < C; n++) i = e[n], r = i.event, a = O(i.start, i.start), s = O(i.start, i.end), o = i.col, l = i.level, c = i.forward || 0, u = M(o * w + x), d = P(o * w + x) - u, d = Math.min(d - 6, .95 * d), f = l ? d / (l + c + 1) : c ? 2 * (d / (c + 1) - 6) : d, p = u + d / (l + c + 1) * l * w + (b ? d - f : 0), i.top = a, i.left = p, i.outerWidth = f, i.outerHeight = s - a, T += N(r, i);
							for(q[0].innerHTML = T, _ = q.children(), n = 0; n < C; n++) i = e[n], r = i.event, h = ge(_[n]), !1 === (m = A("eventRender", r, r, h)) ? h.remove() : (m && !0 !== m && (h.remove(), h = ge(m).css({
								position: "absolute",
								top: i.top,
								left: i.left
							}).appendTo(q)), i.element = h, r._id === t ? U(r, h, i) : h[0]._fci = n, I(r, h));
							for(Ee(q, e, U), n = 0; n < C; n++) i = e[n], (h = i.element) && (v = S[g = i.key = Ie(h[0])], i.vsides = v === ve ? S[g] = Me(h, !0) : v, v = k[g], i.hsides = v === ve ? k[g] = Oe(h, !0) : v, (y = h.find("div.fc-event-content")).length && (i.contentTop = y[0].offsetTop));
							for(n = 0; n < C; n++) i = e[n], (h = i.element) && (h[0].style.width = Math.max(0, i.outerWidth - i.hsides) + "px", $ = Math.max(0, i.outerHeight - i.vsides), h[0].style.height = $ + "px", r = i.event, i.contentTop !== ve && $ - i.contentTop < 10 && (h.find("div.fc-event-time").text(z(r.start, E("timeFormat")) + " - " + r.title), h.find("div.fc-event-title").remove()), A("eventAfterRender", r, r, h))
						}(function(e) {
							var t, n, i, r, a, s, o = F(),
								l = g(),
								c = m(),
								u = be(xe(p.visStart), l),
								d = ge.map(e, q),
								f = [];
							for(t = 0; t < o; t++) {
								for(Le(n = De(qe(e, d, u, be(xe(u), c - l)))), i = 0; i < n.length; i++)
									for(r = n[i], a = 0; a < r.length; a++)(s = r[a]).col = t, s.level = i, f.push(s);
								$e(u, 1, !0)
							}
							return f
						}(a), t)
					}, p.compileDaySegs = c, p.clearEvents = function() {
						e(), t().empty(), j().empty()
					}, p.slotSegHtml = N, p.bindDaySeg = function(e, t, n) {
						u(e) && function(r, a, s) {
							var n, o, l, c = !0,
								u = E("isRTL") ? -1 : 1,
								i = h(),
								d = v(),
								f = y(),
								p = g();

							function _() {
								c || (a.width(n).height("").draggable("option", "grid", null), c = !0)
							}
							a.draggable({
								zIndex: 9,
								opacity: E("dragOpacity", "month"),
								revertDuration: E("dragRevertDuration"),
								start: function(e, t) {
									A("eventDragStart", a, r, e, t), w(r, a), n = a.width(), i.start(function(e, t, n, i) {
										S(), e ? (o = !1, l = i * u, e.row ? s ? c && (a.width(d - 10), je(a, f * Math.round((r.end ? (r.end - r.start) / ye : E("defaultEventMinutes")) / E("slotMinutes"))), a.draggable("option", "grid", [d, 1]), c = !1) : o = !0 : (T($e(xe(r.start), l), $e(ke(r), l)), _()), o = o || c && !l) : (_(), o = !0), a.draggable("option", "revert", o)
									}, e, "drag")
								},
								stop: function(e, t) {
									if(i.stop(), S(), A("eventDragStop", a, r, e, t), o) _(), a.css("filter", ""), b(r, a);
									else {
										var n = 0;
										c || (n = Math.round((a.offset().top - $().offset().top) / f) * E("slotMinutes") + p - (60 * r.start.getHours() + r.start.getMinutes())), x(this, r, l, n, c, e, t)
									}
								}
							})
						}(e, t, n.isStart);
						n.isEnd && d(e) && i(e, t, n);
						_(e, t)
					}, Ve.call(p);
					var E = p.opt,
						A = p.trigger,
						u = p.isEventDraggable,
						d = p.isEventResizable,
						f = p.eventEnd,
						s = p.reportEvents,
						e = p.reportEventClear,
						_ = p.eventElementHandlers,
						o = p.setHeight,
						t = p.getDaySegmentContainer,
						j = p.getSlotSegmentContainer,
						h = p.getHoverListener,
						m = p.getMaxMinute,
						g = p.getMinMinute,
						O = p.timePosition,
						M = p.colContentLeft,
						P = p.colContentRight,
						l = p.renderDaySegs,
						i = p.resizableDayEvent,
						F = p.getColCnt,
						v = p.getColWidth,
						y = p.getSlotHeight,
						$ = p.getBodyContent,
						I = p.reportEventElement,
						b = p.showEvents,
						w = p.hideEvents,
						x = p.eventDrop,
						C = p.eventResize,
						T = p.renderDayOverlay,
						S = p.clearOverlays,
						n = p.calendar,
						z = n.formatDate,
						k = n.formatDates;

					function c(e) {
						var t, n, i, r, a = De(qe(e, ge.map(e, ke), p.visStart, p.visEnd)),
							s = a.length,
							o = [];
						for(t = 0; t < s; t++)
							for(n = a[t], i = 0; i < n.length; i++)(r = n[i]).row = 0, r.level = t, o.push(r);
						return o
					}

					function q(e) {
						return e.end ? xe(e.end) : be(xe(e.start), E("defaultEventMinutes"))
					}

					function N(e, t) {
						var n = "<",
							i = e.url,
							r = Re(e, E),
							a = r ? " style='" + r + "'" : "",
							s = ["fc-event", "fc-event-skin", "fc-event-vert"];
						return u(e) && s.push("fc-event-draggable"), t.isStart && s.push("fc-corner-top"), t.isEnd && s.push("fc-corner-bottom"), s = s.concat(e.className), e.source && (s = s.concat(e.source.className || [])), n += i ? "a href='" + Fe(e.url) + "'" : "div", n += " class='" + s.join(" ") + "' style='position:absolute;z-index:8;top:" + t.top + "px;left:" + t.left + "px;" + r + "'><div class='fc-event-inner fc-event-skin'" + a + "><div class='fc-event-head fc-event-skin'" + a + "><div class='fc-event-time'>" + Fe(k(e.start, e.end, E("timeFormat"))) + "</div></div><div class='fc-event-content'><div class='fc-event-title'>" + Fe(e.title) + "</div></div><div class='fc-event-bg'></div></div>", t.isEnd && d(e) && (n += "<div class='ui-resizable-handle ui-resizable-s'>=</div>"), n += "</" + (i ? "a" : "div") + ">"
					}

					function U(e, t, n) {
						var i, r, a, s, o, l, c = t.find("div.fc-event-time");
						u(e) && function(r, a, s) {
							var i, o, l, n, c = !1,
								u = E("isRTL") ? -1 : 1,
								d = h(),
								e = F(),
								t = v(),
								f = y();

							function p(e) {
								var t, n = be(xe(r.start), e);
								r.end && (t = be(xe(r.end), e)), s.text(k(n, t, E("timeFormat")))
							}

							function _() {
								c && (s.css("display", ""), a.draggable("option", "grid", [t, f]), c = !1)
							}
							a.draggable({
								zIndex: 9,
								scroll: !1,
								grid: [t, f],
								axis: 1 == e && "y",
								opacity: E("dragOpacity"),
								revertDuration: E("dragRevertDuration"),
								start: function(e, t) {
									A("eventDragStart", a, r, e, t), w(r, a), i = a.position(), l = n = 0, d.start(function(e, t, n, i) {
										a.draggable("option", "revert", !e), S(), e && (o = i * u, E("allDaySlot") && !e.row ? (c || (c = !0, s.hide(), a.draggable("option", "grid", null)), T($e(xe(r.start), o), $e(ke(r), o))) : _())
									}, e, "drag")
								},
								drag: function(e, t) {
									(l = Math.round((t.position.top - i.top) / f) * E("slotMinutes")) != n && (c || p(l), n = l)
								},
								stop: function(e, t) {
									var n = d.stop();
									S(), A("eventDragStop", a, r, e, t), n && (o || l || c) ? x(this, r, o, c ? 0 : l, c, e, t) : (_(), a.css("filter", ""), a.css(i), p(0), b(r, a))
								}
							})
						}(e, t, c), n.isEnd && d(e) && (i = e, r = t, a = c, l = y(), r.resizable({
							handles: {
								s: "div.ui-resizable-s"
							},
							grid: l,
							start: function(e, t) {
								s = o = 0, w(i, r), r.css("z-index", 9), A("eventResizeStart", this, i, e, t)
							},
							resize: function(e, t) {
								(s = Math.round((Math.max(l, r.height()) - t.originalSize.height) / l)) != o && (a.text(k(i.start, s || i.end ? be(f(i), E("slotMinutes") * s) : null, E("timeFormat"))), o = s)
							},
							stop: function(e, t) {
								A("eventResizeStop", this, i, e, t), s ? C(this, i, 0, E("slotMinutes") * s, e, t) : (r.css("z-index", 8), b(i, r))
							}
						})), _(e, t)
					}
				}.call(d);
			var c, u, f, p, _, h, m, g, v, y, $, b, w, x, C, T, S, k, q, D, n, a, s, o, i, E, r, A, j, O, M, P, F, I, z, N, U, R, L, H, V, B = d.opt,
				W = d.trigger,
				G = d.clearEvents,
				Y = d.renderOverlay,
				Q = d.clearOverlays,
				X = d.reportSelection,
				J = d.unselect,
				K = d.daySelectionMousedown,
				Z = d.slotSegHtml,
				ee = e.formatDate,
				te = {};

			function ne(e) {
				e.click(re).mousedown(K)
			}

			function ie(e) {
				e.click(re).mousedown(he)
			}

			function re(e) {
				if(!B("selectable")) {
					var t = Math.min(A - 1, Math.floor((e.pageX - c.offset().left - s) / o)),
						n = ce(t),
						i = this.parentNode.className.match(/fc-slot(\d+)/);
					if(i) {
						var r = parseInt(i[1]) * B("slotMinutes"),
							a = Math.floor(r / 60);
						n.setHours(a), n.setMinutes(r % 60 + L), W("dayClick", _[t], n, !1, e)
					} else W("dayClick", _[t], n, !0, e)
				}
			}

			function ae(e, t, n) {
				n && O.build();
				var i, r, a = xe(d.visStart);
				N ? (i = Te(t, a) * U + R + 1, r = Te(e, a) * U + R + 1) : (i = Te(e, a), r = Te(t, a)), (i = Math.max(0, i)) < (r = Math.min(A, r)) && ne(se(0, i, 0, r - 1))
			}

			function se(e, t, n, i) {
				var r = O.rect(e, t, n, i, v);
				return Y(r, v)
			}

			function oe(e, t) {
				for(var n = xe(d.visStart), i = $e(xe(n), 1), r = 0; r < A; r++) {
					var a = new Date(Math.max(n, e)),
						s = new Date(Math.min(i, t));
					if(a < s) {
						var o = r * U + R,
							l = O.rect(0, o, 0, o, x),
							c = fe(n, a),
							u = fe(n, s);
						l.top = c, l.height = u - c, ie(Y(l, x))
					}
					$e(n, 1), $e(i, 1)
				}
			}

			function le(e) {
				var t = ce(e.col),
					n = e.row;
				return B("allDaySlot") && n--, 0 <= n && be(t, L + n * B("slotMinutes")), t
			}

			function ce(e) {
				return $e(xe(d.visStart), e * U + R)
			}

			function ue(e) {
				return B("allDaySlot") && !e.row
			}

			function de(e) {
				return(e - Math.max(I, z) + A) % A * U + R
			}

			function fe(e, t) {
				if(t < be(xe(e = xe(e, !0)), L)) return 0;
				if(t >= be(xe(e), H)) return T.height();
				var n = B("slotMinutes"),
					i = 60 * t.getHours() + t.getMinutes() - L,
					r = Math.floor(i / n),
					a = te[r];
				return a === ve && (a = te[r] = T.find("tr:eq(" + r + ") td div")[0].offsetTop), Math.max(0, Math.round(a - 1 + E * (i % n / n)))
			}

			function pe(e, t) {
				var n = B("selectHelper");
				if(O.build(), n) {
					var i = Te(e, d.visStart) * U + R;
					if(0 <= i && i < A) {
						var r = O.rect(0, i, 0, i, x),
							a = fe(e, e),
							s = fe(e, endDate);
						if(a < s) {
							if(r.top = a, r.height = s - a, r.left += 2, r.width -= 5, ge.isFunction(n)) {
								var o = n(e, endDate);
								o && (r.position = "absolute", r.zIndex = 8, D = ge(o).css(r).appendTo(x))
							} else r.isStart = !0, r.isEnd = !0, (D = ge(Z({
								title: "",
								start: e,
								end: endDate,
								className: ["fc-select-helper"],
								editable: !1
							}, r))).css("opacity", B("dragOpacity"));
							D && (ie(D), x.append(D), Ae(D, r.width, !0), je(D, r.height, !0))
						}
					}
				} else oe(e, endDate)
			}

			function _e() {
				Q(), D && (D.remove(), D = null)
			}

			function he(e) {
				var r;
				1 == e.which && B("selectable") && (J(e), M.start(function(e, t) {
					if(_e(), e && e.col == t.col && !ue(e)) {
						var n = le(t),
							i = le(e);
						pe((r = [n, be(xe(n), B("slotMinutes")), i, be(xe(i), B("slotMinutes"))].sort(Pe))[0], r[3])
					} else r = null
				}, e), ge(document).one("mouseup", function(e) {
					M.stop(), r && (+r[0] == +r[1] && me(r[0], !1, e), X(r[0], r[3], !1, e))
				}))
			}

			function me(e, t, n) {
				W("dayClick", _[de(e.getDay())], e, t, n)
			}
			ze(l.addClass("fc-agenda")), O = new Ge(function(e, n) {
				var i, r, a;
				f.each(function(e, t) {
					i = ge(t), r = i.offset().left, e && (a[1] = r), a = [r], n[e] = a
				}), a[1] = r + i.outerWidth(), B("allDaySlot") && (r = (i = b).offset().top, e[0] = [r, r + i.outerHeight()]);
				var t = x.offset().top,
					s = w.offset().top,
					o = s + w.outerHeight();

				function l(e) {
					return Math.max(s, Math.min(o, e))
				}
				for(var c = 0; c < j; c++) e.push([l(t + E * c), l(t + E * (c + 1))])
			}), M = new Ye(O), P = new Qe(function(e) {
				return h.eq(e)
			})
		}

		function Le(e) {
			var t, n, i, r, a, s;
			for(t = e.length - 1; 0 < t; t--)
				for(r = e[t], n = 0; n < r.length; n++)
					for(a = r[n], i = 0; i < e[t - 1].length; i++) l(a, s = e[t - 1][i]) && (s.forward = Math.max(s.forward || 0, (a.forward || 0) + 1))
		}

		function He(e, n, i) {
			var r = this;
			r.element = e, r.calendar = n, r.name = i, r.opt = d, r.trigger = f, r.isEventDraggable = function(e) {
				return p(e) && !d("disableDragging")
			}, r.isEventResizable = function(e) {
				return p(e) && !d("disableResizing")
			}, r.reportEvents = function(e) {
				u = {};
				var t, n, i = e.length;
				for(t = 0; t < i; t++) n = e[t], u[n._id] ? u[n._id].push(n) : u[n._id] = [n]
			}, r.eventEnd = _, r.reportEventElement = function(e, t) {
				a.push(t), s[e._id] ? s[e._id].push(t) : s[e._id] = [t]
			}, r.reportEventClear = function() {
				a = [], s = {}
			}, r.eventElementHandlers = function(t, n) {
				n.click(function(e) {
					if(!n.hasClass("ui-draggable-dragging") && !n.hasClass("ui-resizable-resizing")) return f("eventClick", this, t, e)
				}).hover(function(e) {
					f("eventMouseover", this, t, e)
				}, function(e) {
					f("eventMouseout", this, t, e)
				})
			}, r.showEvents = function(e, t) {
				h(e, t, "show")
			}, r.hideEvents = function(e, t) {
				h(e, t, "hide")
			}, r.eventDrop = function(e, t, n, i, r, a, s) {
				var o = t.allDay,
					l = t._id;
				m(u[l], n, i, r), f("eventDrop", e, t, n, i, r, function() {
					m(u[l], -n, -i, o), c(l)
				}, a, s), c(l)
			}, r.eventResize = function(e, t, n, i, r, a) {
				var s = t._id;
				g(u[s], n, i), f("eventResize", e, t, n, i, function() {
					g(u[s], -n, -i), c(s)
				}, r, a), c(s)
			};
			var t = r.defaultEventEnd,
				o = n.normalizeEvent,
				c = n.reportEventChange,
				u = {},
				a = [],
				s = {},
				l = n.options;

			function d(e, t) {
				var n = l[e];
				return "object" == typeof n ? v(n, t || i) : n
			}

			function f(e, t) {
				return n.trigger.apply(n, [e, t || r].concat(Array.prototype.slice.call(arguments, 2), [r]))
			}

			function p(e) {
				return Q(e.editable, (e.source || {}).editable, d("editable"))
			}

			function _(e) {
				return e.end ? xe(e.end) : t(e)
			}

			function h(e, t, n) {
				var i, r = s[e._id],
					a = r.length;
				for(i = 0; i < a; i++) t && r[i][0] == t[0] || r[i][n]()
			}

			function m(e, t, n, i) {
				n = n || 0;
				for(var r, a = e.length, s = 0; s < a; s++) r = e[s], i !== ve && (r.allDay = i), be($e(r.start, t, !0), n), r.end && (r.end = be($e(r.end, t, !0), n)), o(r, l)
			}

			function g(e, t, n) {
				n = n || 0;
				for(var i, r = e.length, a = 0; a < r; a++)(i = e[a]).end = be($e(_(i), t, !0), n), o(i, l)
			}
		}

		function Ve() {
			var a = this;
			a.renderDaySegs = function(e, t) {
				var n, i, r, a, s, o, l, c = O(),
					u = T(),
					d = S(),
					f = 0,
					p = e.length;
				for(c[0].innerHTML = z(e), N(e, c.children()), function(e) {
						var t, n, i, r = e.length;
						for(t = 0; t < r; t++) n = e[t], (i = n.element) && _(n.event, i)
					}(e), function(e, t, n) {
						var i, r, a, s, o = e.length;
						for(i = 0; i < o; i++) r = e[i], (a = r.element) && ((s = r.event)._id === n ? h(s, a, r) : a[0]._fci = i);
						Ee(t, e, h)
					}(e, c, t), U(e), R(e), L(e), n = H(), i = 0; i < u; i++) {
					for(r = [], a = 0; a < d; a++) r[a] = 0;
					for(; f < p && (s = e[f]).row == i;) {
						for(o = G(r.slice(s.startCol, s.endCol)), s.top = o, o += s.outerHeight, l = s.startCol; l < s.endCol; l++) r[l] = o;
						f++
					}
					n[i].height(G(r))
				}
				B(e, V(n))
			}, a.resizableDayEvent = function(_, i, h) {
				var m = v("isRTL"),
					g = m ? "w" : "e",
					e = i.find("div.ui-resizable-" + g),
					r = !1;
				ze(i), i.mousedown(function(e) {
					e.preventDefault()
				}).click(function(e) {
					r && (e.preventDefault(), e.stopImmediatePropagation())
				}), e.mousedown(function(e) {
					if(1 == e.which) {
						r = !0;
						var s, o, t = a.getHoverListener(),
							l = T(),
							n = S(),
							c = m ? -1 : 1,
							u = m ? n - 1 : 0,
							d = i.css("top"),
							f = ge.extend({}, _),
							p = A(_.start);
						I(), ge("body").css("cursor", g + "-resize").one("mouseup", function(e) {
							y("eventResizeStop", this, _, e), ge("body").css("cursor", ""), t.stop(), F(), s && C(this, _, s, 0, e);
							setTimeout(function() {
								r = !1
							}, 0)
						}), y("eventResizeStart", this, _, e), t.start(function(e, t) {
							if(e) {
								var n = Math.max(p.row, e.row),
									i = e.col;
								1 == l && (n = 0), n == p.row && (i = m ? Math.min(p.col, i) : Math.max(p.col, i)), s = 7 * n + i * c + u - (7 * t.row + t.col * c + u);
								var r = $e(b(_), s, !0);
								if(s) {
									f.end = r;
									var a = o;
									(o = function(e, t, n) {
										var i, r, a, s = ge("<div/>"),
											o = O(),
											l = e.length;
										for(s[0].innerHTML = z(e), i = s.children(), o.append(i), N(e, i), U(e), R(e), L(e), B(e, V(H())), i = [], r = 0; r < l; r++)(a = e[r].element) && (e[r].row === t && a.css("top", n), i.push(a[0]));
										return ge(i)
									}(j([f]), h.row, d)).find("*").css("cursor", g + "-resize"), a && a.remove(), x(_)
								} else o && (w(_), o.remove(), o = null);
								F(), P(_.start, $e(xe(r), 1))
							}
						}, e)
					}
				})
			};
			var v = a.opt,
				y = a.trigger,
				g = a.isEventDraggable,
				$ = a.isEventResizable,
				b = a.eventEnd,
				_ = a.reportEventElement,
				w = a.showEvents,
				x = a.hideEvents,
				C = a.eventResize,
				T = a.getRowCnt,
				S = a.getColCnt,
				i = (a.getColWidth, a.allDayRow),
				k = a.allDayBounds,
				q = a.colContentLeft,
				D = a.colContentRight,
				E = a.dayOfWeekCol,
				A = a.dateCell,
				j = a.compileDaySegs,
				O = a.getDaySegmentContainer,
				h = a.bindDaySeg,
				M = a.calendar.formatDates,
				P = a.renderDayOverlay,
				F = a.clearOverlays,
				I = a.clearSelection;

			function z(e) {
				var t, n, i, r, a, s, o, l, c, u, d = v("isRTL"),
					f = e.length,
					p = k(),
					_ = p.left,
					h = p.right,
					m = "";
				for(t = 0; t < f; t++) i = (n = e[t]).event, a = ["fc-event", "fc-event-skin", "fc-event-hori"], g(i) && a.push("fc-event-draggable"), d ? (n.isStart && a.push("fc-corner-right"), n.isEnd && a.push("fc-corner-left"), s = E(n.end.getDay() - 1), o = E(n.start.getDay()), l = n.isEnd ? q(s) : _, c = n.isStart ? D(o) : h) : (n.isStart && a.push("fc-corner-left"), n.isEnd && a.push("fc-corner-right"), s = E(n.start.getDay()), o = E(n.end.getDay() - 1), l = n.isStart ? q(s) : _, c = n.isEnd ? D(o) : h), a = a.concat(i.className), i.source && (a = a.concat(i.source.className || [])), r = i.url, u = Re(i, v), m += r ? "<a href='" + Fe(r) + "'" : "<div", m += " class='" + a.join(" ") + "' style='position:absolute;z-index:8;left:" + l + "px;" + u + "'><div class='fc-event-inner fc-event-skin'" + (u ? " style='" + u + "'" : "") + ">", !i.allDay && n.isStart && (m += "<span class='fc-event-time'>" + Fe(M(i.start, i.end, v("timeFormat"))) + "</span>"), m += "<span class='fc-event-title'>" + Fe(i.title) + "</span></div>", n.isEnd && $(i) && (m += "<div class='ui-resizable-handle ui-resizable-" + (d ? "w" : "e") + "'>&nbsp;&nbsp;&nbsp;</div>"), m += "</" + (r ? "a" : "div") + ">", n.left = l, n.outerWidth = c - l, n.startCol = s, n.endCol = o + 1;
				return m
			}

			function N(e, t) {
				var n, i, r, a, s, o = e.length;
				for(n = 0; n < o; n++) r = (i = e[n]).event, a = ge(t[n]), !1 === (s = y("eventRender", r, r, a)) ? a.remove() : (s && !0 !== s && (s = ge(s).css({
					position: "absolute",
					left: i.left
				}), a.replaceWith(s), a = s), i.element = a)
			}

			function U(e) {
				var t, n, i, r, a, s = e.length,
					o = {};
				for(t = 0; t < s; t++)(i = (n = e[t]).element) && ((a = o[r = n.key = Ie(i[0])]) === ve && (a = o[r] = Oe(i, !0)), n.hsides = a)
			}

			function R(e) {
				var t, n, i, r = e.length;
				for(t = 0; t < r; t++)(i = (n = e[t]).element) && (i[0].style.width = Math.max(0, n.outerWidth - n.hsides) + "px")
			}

			function L(e) {
				var t, n, i, r, a, s = e.length,
					o = {};
				for(t = 0; t < s; t++)(i = (n = e[t]).element) && ((a = o[r = n.key]) === ve && (a = o[r] = c(i)), n.outerHeight = i[0].offsetHeight + a)
			}

			function H() {
				var e, t = T(),
					n = [];
				for(e = 0; e < t; e++) n[e] = i(e).find("td:first div.fc-day-content > div");
				return n
			}

			function V(e) {
				var t, n = e.length,
					i = [];
				for(t = 0; t < n; t++) i[t] = e[t][0].offsetTop;
				return i
			}

			function B(e, t) {
				var n, i, r, a, s = e.length;
				for(n = 0; n < s; n++)(r = (i = e[n]).element) && (r[0].style.top = t[i.row] + (i.top || 0) + "px", a = i.event, y("eventAfterRender", a, a, r))
			}
		}

		function Be() {
			var s = this;
			s.select = function(e, t, n) {
				u(), t || (t = i(e, n));
				l(e, t, n), d(e, t, n)
			}, s.unselect = u, s.reportSelection = d, s.daySelectionMousedown = function(e) {
				var n = s.cellDate,
					i = s.cellIsAllDay,
					t = s.getHoverListener(),
					r = s.reportDayClick;
				if(1 == e.which && o("selectable")) {
					u(e);
					var a;
					t.start(function(e, t) {
						c(), e && i(e) ? (a = [n(t), n(e)].sort(Pe), l(a[0], a[1], !0)) : a = null
					}, e), ge(document).one("mouseup", function(e) {
						t.stop(), a && (+a[0] == +a[1] && r(a[0], !0, e), d(a[0], a[1], !0, e))
					})
				}
			};
			var o = s.opt,
				r = s.trigger,
				i = s.defaultSelectionEnd,
				l = s.renderSelection,
				c = s.clearSelection,
				a = !1;

			function u(e) {
				a && (a = !1, c(), r("unselect", null, e))
			}

			function d(e, t, n, i) {
				a = !0, r("select", null, e, t, n, i)
			}
			o("selectable") && o("unselectAuto") && ge(document).mousedown(function(e) {
				var t = o("unselectCancel");
				t && ge(e.target).parents(t).length || u(e)
			})
		}

		function We() {
			this.renderOverlay = function(e, t) {
				var n = r.shift();
				n || (n = ge("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>"));
				n[0].parentNode != t[0] && n.appendTo(t);
				return i.push(n.css(e).show()), n
			}, this.clearOverlays = function() {
				var e;
				for(; e = i.shift();) r.push(e.hide().unbind())
			};
			var i = [],
				r = []
		}

		function Ge(e) {
			var o, l;
			this.build = function() {
				e(o = [], l = [])
			}, this.cell = function(e, t) {
				var n, i = o.length,
					r = l.length,
					a = -1,
					s = -1;
				for(n = 0; n < i; n++)
					if(t >= o[n][0] && t < o[n][1]) {
						a = n;
						break
					}
				for(n = 0; n < r; n++)
					if(e >= l[n][0] && e < l[n][1]) {
						s = n;
						break
					}
				return 0 <= a && 0 <= s ? {
					row: a,
					col: s
				} : null
			}, this.rect = function(e, t, n, i, r) {
				var a = r.offset();
				return {
					top: o[e][0] - a.top,
					left: l[t][0] - a.left,
					width: l[i][1] - l[t][0],
					height: o[n][1] - o[e][0]
				}
			}
		}

		function Ye(i) {
			var r, a, s, o;

			function l(e) {
				var t;
				(t = e).pageX === ve && (t.pageX = t.originalEvent.pageX, t.pageY = t.originalEvent.pageY);
				var n = i.cell(e.pageX, e.pageY);
				(!n != !o || n && (n.row != o.row || n.col != o.col)) && (n ? (s || (s = n), a(n, s, n.row - s.row, n.col - s.col)) : a(n, s), o = n)
			}
			this.start = function(e, t, n) {
				a = e, s = o = null, i.build(), l(t), r = n || "mousemove", ge(document).bind(r, l)
			}, this.stop = function() {
				return ge(document).unbind(r, l), o
			}
		}

		function Qe(t) {
			var n = this,
				i = {},
				r = {},
				a = {};

			function s(e) {
				return i[e] = i[e] || t(e)
			}
			n.left = function(e) {
				return r[e] = r[e] === ve ? s(e).position().left : r[e]
			}, n.right = function(e) {
				return a[e] = a[e] === ve ? n.left(e) + s(e).width() : a[e]
			}, n.clear = function() {
				i = {}, r = {}, a = {}
			}
		}
		M.applyAll = Y, P.month = function(e, t) {
			var c = this;
			c.render = function(e, t) {
				t && (U(e, t), e.setDate(1));
				var n = xe(e, !0);
				n.setDate(1);
				var i = U(xe(n), 1),
					r = xe(n),
					a = xe(i),
					s = u("firstDay"),
					o = u("weekends") ? 0 : 1;
				o && (h(r), h(a, -1, !0));
				$e(r, -(r.getDay() - Math.max(s, o) + 7) % 7), $e(a, (7 - a.getDay() + Math.max(s, o)) % 7);
				var l = Math.round((a - r) / (7 * p));
				"fixed" == u("weekMode") && ($e(a, 7 * (6 - l)), l = 6);
				c.title = f(n, u("titleFormat")), c.start = n, c.end = i, c.visStart = r, c.visEnd = a, d(6, l, o ? 5 : 7, !0)
			}, y.call(c, e, t, "month");
			var u = c.opt,
				d = c.renderBasic,
				f = t.formatDate
		}, P.basicWeek = function(e, t) {
			var o = this;
			o.render = function(e, t) {
				t && $e(e, 7 * t);
				var n = $e(xe(e), -(e.getDay() - l("firstDay") + 7) % 7),
					i = $e(xe(n), 7),
					r = xe(n),
					a = xe(i),
					s = l("weekends");
				s || (h(r), h(a, -1, !0));
				o.title = u(r, $e(xe(a), -1), l("titleFormat")), o.start = n, o.end = i, o.visStart = r, o.visEnd = a, c(1, 1, s ? 7 : 5, !1)
			}, y.call(o, e, t, "basicWeek");
			var l = o.opt,
				c = o.renderBasic,
				u = t.formatDates
		}, P.basicDay = function(e, t) {
			var n = this;
			n.render = function(e, t) {
				t && ($e(e, t), i("weekends") || h(e, t < 0 ? -1 : 1));
				n.title = a(e, i("titleFormat")), n.start = n.visStart = xe(e, !0), n.end = n.visEnd = $e(xe(n.start), 1), r(1, 1, 1, !1)
			}, y.call(n, e, t, "basicDay");
			var i = n.opt,
				r = n.renderBasic,
				a = t.formatDate
		}, t({
			weekMode: "fixed"
		}), P.agendaWeek = function(e, t) {
			var o = this;
			o.render = function(e, t) {
				t && $e(e, 7 * t);
				var n = $e(xe(e), -(e.getDay() - l("firstDay") + 7) % 7),
					i = $e(xe(n), 7),
					r = xe(n),
					a = xe(i),
					s = l("weekends");
				s || (h(r), h(a, -1, !0));
				o.title = u(r, $e(xe(a), -1), l("titleFormat")), o.start = n, o.end = i, o.visStart = r, o.visEnd = a, c(s ? 7 : 5)
			}, d.call(o, e, t, "agendaWeek");
			var l = o.opt,
				c = o.renderAgenda,
				u = t.formatDates
		}, P.agendaDay = function(e, t) {
			var r = this;
			r.render = function(e, t) {
				t && ($e(e, t), a("weekends") || h(e, t < 0 ? -1 : 1));
				var n = xe(e, !0),
					i = $e(xe(n), 1);
				r.title = o(e, a("titleFormat")), r.start = r.visStart = n, r.end = r.visEnd = i, s(1)
			}, d.call(r, e, t, "agendaDay");
			var a = r.opt,
				s = r.renderAgenda,
				o = t.formatDate
		}, t({
			allDaySlot: !0,
			allDayText: "all-day",
			firstHour: 6,
			slotMinutes: 30,
			defaultEventMinutes: 120,
			axisFormat: "h(:mm)tt",
			timeFormat: {
				agenda: "h:mm{ - h:mm}"
			},
			dragOpacity: {
				agenda: .5
			},
			minTime: 0,
			maxTime: 24
		})
	}(jQuery),
	function(n) {
		n.event.special.textchange = {
			setup: function() {
				n(this).data("lastValue", "true" === this.contentEditable ? n(this).html() : n(this).val()), n(this).bind("keyup.textchange", n.event.special.textchange.handler), n(this).bind("cut.textchange paste.textchange input.textchange", n.event.special.textchange.delayedHandler)
			},
			teardown: function() {
				n(this).unbind(".textchange")
			},
			handler: function() {
				n.event.special.textchange.triggerIfChanged(n(this))
			},
			delayedHandler: function() {
				var e = n(this);
				setTimeout(function() {
					n.event.special.textchange.triggerIfChanged(e)
				}, 25)
			},
			triggerIfChanged: function(e) {
				var t = "true" === e[0].contentEditable ? e.html() : e.val();
				t !== e.data("lastValue") && (e.trigger("textchange", [e.data("lastValue")]), e.data("lastValue", t))
			}
		}, n.event.special.hastext = {
			setup: function() {
				n(this).bind("textchange", n.event.special.hastext.handler)
			},
			teardown: function() {
				n(this).unbind("textchange", n.event.special.hastext.handler)
			},
			handler: function(e, t) {
				"" === t && t !== n(this).val() && n(this).trigger("hastext")
			}
		}, n.event.special.notext = {
			setup: function() {
				n(this).bind("textchange", n.event.special.notext.handler)
			},
			teardown: function() {
				n(this).unbind("textchange", n.event.special.notext.handler)
			},
			handler: function(e, t) {
				"" === n(this).val() && n(this).val() !== t && n(this).trigger("notext")
			}
		}
	}(jQuery),
	function() {
		"use strict";
		Array.prototype.inArray = Array.prototype.indexOf ? function(e) {
			return -1 != this.indexOf(e)
		} : function(e) {
			for(var t = this.length; t--;)
				if(this[t] === e) return !0;
			return !1
		}
	}();
var autocomplete_city_cache = {},
	autocomplete_city_init = function() {
		$(".autocomplete_city").length && $(".autocomplete_city").autocomplete({
			minLength: 1,
			source: function(e, i) {
				var r = e.term;
				r in autocomplete_city_cache ? i(autocomplete_city_cache[r]) : $.getJSON("/ajax/getcity/?time=" + (new Date).getTime(), e, function(e, t, n) {
					autocomplete_city_cache[r] = e, i(e)
				})
			},
			create: function(e, t) {
				$(".autocomplete_city").next(".ui-helper-hidden-accessible").remove()
			}
		})
	},
	autocomplete_school_cache = {},
	autocomplete_school_init = function() {
		$(".autocomplete_school").length && $(".autocomplete_school").autocomplete({
			minLength: 1,
			source: function(e, i) {
				var r = e.term;
				r in autocomplete_school_cache ? i(autocomplete_school_cache[r]) : $.getJSON("/ajax/getschool/?time=" + (new Date).getTime(), e, function(e, t, n) {
					autocomplete_school_cache[r] = e, i(e)
				})
			},
			create: function(e, t) {
				$(".autocomplete_school").next(".ui-helper-hidden-accessible").remove()
			}
		})
	},
	countdown_timer = function(e, t) {
		var n = $(".countdown_timer[data-finish_time=" + e + "]");
		if(0 < n.length) {
			var i = e - ((new Date).getTime() - t) / 1e3;
			i < 0 && (i = 0, clearInterval(countdown_timer_intervals[e]), location.reload(!0));
			var r = Math.floor(i / 3600 / 24);
			i -= 3600 * r * 24;
			var a = Math.floor(i / 3600);
			i -= 3600 * a;
			var s = Math.floor(i / 60);
			i -= 60 * s;
			var o = Math.floor(i % 60);
			a = a < 10 ? "0" + a : a, s = s < 10 ? "0" + s : s, o = o < 10 ? "0" + o : o, n.find(".countdown_timer__days span").text(r), n.find(".countdown_timer__hours span").text(a), n.find(".countdown_timer__minutes span").text(s), n.find(".countdown_timer__seconds span").text(o)
		} else clearInterval(countdown_timer_intervals[e])
	},
	countdown_timer_intervals = [];

function countdown_timer_init() {
	$(".countdown_timer").each(function() {
		var e = $(this),
			t = parseInt(e.attr("data-finish_time")),
			n = new Date;
		0 < t && (countdown_timer_intervals[t] = setInterval(countdown_timer, 1e3, t, n.getTime()))
	})
}

function systemCountUp() {
	var e = new Date,
		t = system_time + (e.getTime() - system_start_time) / 1e3;
	t -= 3600 * Math.floor(t / 3600 / 24) * 24;
	var n = Math.floor(t / 3600);
	t -= 3600 * n;
	var i = Math.floor(t / 60);
	t -= 60 * i;
	var r = Math.floor(t % 60);
	n = n < 10 ? "0" + n : n, i = i < 10 ? "0" + i : i, r = r < 10 ? "0" + r : r;
	var a = [];
	a[0] = n, a[1] = i, $(".system_time").html(a.join(":"))
}
$(function() {
		countdown_timer_init();
		var e = $(".testpac_form-promo"),
			t = $(".testpac_content"),
			n = t.find(".testpac_content__html"),
			i = $(".testpac_form__subject-select"),
			r = $(".testpac_form__subject_item"),
			a = $(".testpac_form__class-select"),
			s = $(".testpac_form__class_item"),
			o = $(".testpac_form__ege"),
			l = $(".testpac_form__gia"),
			c = $(".testpac_form__all"),
			u = $(".testpac_form__my"),
			d = $(".testpac_form__edit"),
			f = $(".testpac_form__search"),
			p = f.find("input[type=text]"),
			_ = f.find("button[type=button]"),
			h = $(".testpac_form__progress"),
			m = $(".testpac_results__item"),
			g = $(".testpac_test_info"),
			v = $(".testpac_test_info__close"),
			y = $(".testpac_form__close"),
			b = $(".testpac_fixed_top"),
			w = $(".testpac_test_info__result_open"),
			x = "testpac_form__ege-active",
			C = "testpac_form__gia-active",
			T = "testpac_form__my-active",
			S = "testpac_form__edit-active",
			k = "testpac_form-hidden",
			q = "testpac_content-hidden",
			D = "testpac_fixed_top-hidden",
			E = "testpac_content-loading",
			A = "testpac_form__progress-hidden",
			j = {
				hidden_promo: !1,
				subject_id: 0,
				subject_code: "",
				class_id: 0,
				class_code: "",
				is_ege_gia_my_edit: 0,
				query: "",
				subject_title: "",
				class_title: "",
				ege_gia_my_edit_title: "",
				test_id: 0,
				test_title: ""
			};
		e.hasClass(k) && (j.hidden_promo = !0);
		var O = i.find("option:selected");
		j.subject_id = O.attr("value"), j.subject_code = O.attr("data-code"), j.subject_title = O.attr("data-title");
		O = a.find("option:selected");

		function M(e, t) {
			var n = "/tests/";
			if(null == t || !t) {
				null != e && e && (n += "ajax/"), 0 == j.subject_id && (j.subject_code = "all"), 0 == j.class_id && (j.class_code = "all");
				var i = "";
				1 == j.is_ege_gia_my_edit ? i = "ege/" : 2 == j.is_ege_gia_my_edit ? i = "gia/" : 3 == j.is_ege_gia_my_edit ? i = "my/" : 4 == j.is_ege_gia_my_edit && (i = "edit/"), null != j.subject_code && null != j.class_code && (n += j.subject_code + "/" + j.class_code + "/" + i), null != j.query && "" != j.query ? (n += "?text=" + encodeURIComponent(j.query), 0 < j.test_id && (n += "&test=" + j.test_id)) : 0 < j.test_id && (n += "?test=" + j.test_id)
			}
			return n
		}

		function P() {
			var e = "";
			return 0 < j.test_id ? e = "self-test.ru" == window.location.hostname ? j.test_title + " — SELF-TEST.RU" : "brainoom.com" == window.location.hostname ? j.test_title + " — Brainoom" : j.test_title : null == j.subject_title ? e = document.title : (e = "" != j.subject_title ? j.subject_title : "undefined" == typeof language || "ru" == language ? "Все предметы" : "All subjects", "" != j.class_title && (e += ", " + j.class_title), 0 < j.is_ege_gia_my_edit && "" != j.ege_gia_my_edit_title && (e += ", " + j.ege_gia_my_edit_title), j.hidden_promo && "" != e ? "self-test.ru" == window.location.hostname ? e += " — качественные тесты" : "undefined" == typeof language || "ru" == language ? e += " — тесты" : e += " — Tests" : e = "self-test.ru" == window.location.hostname ? "Качественные тесты" : "undefined" == typeof language || "ru" == language ? "Тесты" : "Tests", "self-test.ru" == window.location.hostname ? e += " — SELF-TEST.RU" : "brainoom.com" == window.location.hostname && (e += " — Brainoom")), e
		}
		if(j.class_id = O.attr("value"), j.class_code = O.attr("data-code"), j.class_title = O.attr("data-title"), o.hasClass(x) && (j.is_ege_gia_my_edit = 1, j.ege_gia_my_edit_title = o.attr("data-title")), l.hasClass(C) && (j.is_ege_gia_my_edit = 2, j.ege_gia_my_edit_title = l.attr("data-title")), u.hasClass(T) && (j.is_ege_gia_my_edit = 3, j.ege_gia_my_edit_title = u.attr("data-title")), d.hasClass(S) && (j.is_ege_gia_my_edit = 4, j.ege_gia_my_edit_title = d.attr("data-title")), j.query = p.val(), 0 < g.length && (j.test_id = g.attr("data-id"), j.test_title = g.attr("data-title")), w.live("click", function() {
				var e = $(this),
					t = e.attr("data-id"),
					n = e.attr("data-title"),
					i = e.attr("data-statistic"),
					r = $("#" + e.attr("data-win")),
					a = "";
				a = "undefined" == typeof language || "ru" == language ? "Статистика моего решения" : "Statistics of my solution", "&statistic=1" == (i = null != i ? "&statistic=" + i : "") ? $("#" + r.attr("aria-labelledby")).html(a) : $("#" + r.attr("aria-labelledby")).html(n), r.find(".modal_container").hide(), r.find(".alert-error").hide(), r.find(".progress").show(), r.modal("show"), $.post("/tests/test/" + t + "/?time=" + (new Date).getTime() + i, "", function(e) {
					r.find(".modal_container").html(e), r.find(".progress").hide(), r.find(".modal_container").show(), setTimeout(R, 500)
				}).error(function() {
					r.find(".progress").hide(), r.find(".alert-error").show()
				})
			}), !window.history || !history.pushState || "undefined" != typeof supports_history_api_off && null != supports_history_api_off && 1 == supports_history_api_off || "welcome-test.ru" == window.location.hostname || "medgames.ru" == window.location.hostname || "iq007olymp.ru" == window.location.hostname || "aktiv-test.ru" == window.location.hostname || "everest-olimpiada.ru" == window.location.hostname) {
			function F() {
				j.query = $.trim(p.val()), 3 != j.is_ege_gia_my_edit && 4 != j.is_ege_gia_my_edit || "" == j.query || (j.is_ege_gia_my_edit = 0), j.test_title = "", j.test_id = 0, document.location = M(), I()
			}
			i.change(function() {
				var e = $(this).find("option:selected");
				j.subject_title = title = e.attr("data-title"), j.subject_id = e.attr("value"), j.subject_code = e.attr("data-code"), j.test_title = "", j.test_id = 0, document.location = M()
			}), a.change(function() {
				var e = $(this).find("option:selected");
				j.class_title = e.attr("data-title"), j.class_id = e.attr("value"), j.class_code = e.attr("data-code"), j.test_title = "", j.test_id = 0, document.location = M()
			}), o.live("click", function(e) {
				e.preventDefault();
				var t = $(this);
				return j.ege_gia_my_edit_title = t.attr("data-title"), t.hasClass(x) ? j.is_ege_gia_my_edit = 0 : j.is_ege_gia_my_edit = 1, j.test_title = "", j.test_id = 0, document.location = M(), !1
			}), l.live("click", function(e) {
				e.preventDefault();
				var t = $(this);
				return j.ege_gia_my_edit_title = t.attr("data-title"), t.hasClass(C) ? j.is_ege_gia_my_edit = 0 : j.is_ege_gia_my_edit = 2, j.test_title = "", j.test_id = 0, document.location = M(), !1
			}), u.live("click", function(e) {
				e.preventDefault();
				var t = $(this);
				return j.ege_gia_my_edit_title = t.attr("data-title"), t.hasClass(T) ? j.is_ege_gia_my_edit = 0 : j.is_ege_gia_my_edit = 3, j.test_title = "", j.test_id = 0, document.location = M(), !1
			}), d.live("click", function(e) {
				e.preventDefault();
				var t = $(this);
				return j.ege_gia_my_edit_title = t.attr("data-title"), t.hasClass(S) ? j.is_ege_gia_my_edit = 0 : j.is_ege_gia_my_edit = 4, j.test_title = "", j.test_id = 0, document.location = M(), !1
			}), _.live("click", function(e) {
				return e.preventDefault(), j.query = $.trim(p.val()), 3 != j.is_ege_gia_my_edit && 4 != j.is_ege_gia_my_edit || "" == j.query || (j.is_ege_gia_my_edit = 0), j.test_title = "", j.test_id = 0, document.location = M(), !1
			}), p.live("keypress", function(e) {
				"13" == e.which && (e.preventDefault(), e.stopPropagation(), F())
			}), v.live("click", function(e) {
				return e.preventDefault(), j.test_title = "", j.test_id = 0, document.location = M(), !1
			}), y.live("click", function(e) {
				return e.preventDefault(), z(), j = {
					hidden_promo: !1,
					subject_id: 0,
					subject_code: "",
					class_id: 0,
					class_code: "",
					is_ege_gia_my_edit: 0,
					query: "",
					subject_title: "",
					class_title: "",
					ege_gia_my_edit_title: "",
					test_id: 0,
					test_title: ""
				}, document.location = M(!1, !0), !1
			})
		} else {
			function I() {
				if(0 < $(".testpac_alert").length && $(".testpac_alert").remove(), i.val(j.subject_id), a.val(j.class_id), 1 == j.is_ege_gia_my_edit ? (o.addClass(x), l.removeClass(C), u.removeClass(T), d.removeClass(S)) : 2 == j.is_ege_gia_my_edit ? (l.addClass(C), o.removeClass(x), u.removeClass(T), d.removeClass(S)) : 3 == j.is_ege_gia_my_edit ? (u.addClass(T), o.removeClass(x), l.removeClass(C), d.removeClass(S)) : 4 == j.is_ege_gia_my_edit ? (d.addClass(S), o.removeClass(x), l.removeClass(C), u.removeClass(T)) : (o.removeClass(x), l.removeClass(C), u.removeClass(T), d.removeClass(S)), p.val(j.query), j.hidden_promo) {
					z(), t.addClass(E), h.removeClass(A);
					var e = M(!0);
					e += (e.split("?")[1] ? "&" : "?") + "time=" + (new Date).getTime(), $.post(e, "", function(e) {
						if("[]" != e) {
							(e = jQuery.parseJSON(e)).error ? (j.hidden_promo = !0, N()) : n.html(e.html), countdown_timer_init();
							setTimeout(function() {
								t.removeClass(E), h.addClass(A), $("[autofocus]:eq(0)").focus(), autocomplete_city_init(), autocomplete_school_init(), "undefined" != typeof initcharts1 && null != initcharts1 && initcharts1()
							}, 100)
						} else location.reload(!0);
						$("[rel=tooltip]").tooltip()
					}).error(function() {
						"undefined" == typeof language || "ru" == language ? alert("Ошибка :( Попробуйте начать поиск сначала.") : alert("Error :( Try to start the search at first."), t.removeClass(E), h.addClass(A), N()
					})
				} else N()
			}

			function z() {
				j.hidden_promo = !0, e.addClass(k), t.removeClass(q), b.removeClass(D)
			}

			function N() {
				j.hidden_promo = !1, t.addClass(q), b.addClass(D), e.removeClass(k)
			}
			var U;

			function F() {
				z(), j.query = $.trim(p.val()), 3 != j.is_ege_gia_my_edit && 4 != j.is_ege_gia_my_edit || "" == j.query || (j.is_ege_gia_my_edit = 0), j.test_title = "", j.test_id = 0;
				var e = P(),
					t = M();
				window.history.pushState(j, e, t), document.title = e, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(t, e)
				} catch(e) {
					console.log(e.toString())
				}
			}
			window.history.replaceState(j, document.title), window.addEventListener("popstate", function(e) {
				null !== e.state && null != e.state.hidden_promo && (j.hidden_promo = e.state.hidden_promo, j.subject_id = e.state.subject_id, j.subject_code = e.state.subject_code, j.subject_title = e.state.subject_title, j.class_id = e.state.class_id, j.class_code = e.state.class_code, j.class_title = e.state.class_title, j.is_ege_gia_my_edit = e.state.is_ege_gia_my_edit, j.ege_gia_my_edit_title = e.state.ege_gia_my_edit_title, j.query = e.state.query, j.test_id = e.state.test_id, j.test_title = e.state.test_title, document.title = P(), I())
			}, !1), i.change(function() {
				z();
				var e = $(this).find("option:selected");
				j.subject_title = e.attr("data-title"), j.subject_id = e.attr("value"), j.subject_code = e.attr("data-code"), j.test_title = "", j.test_id = 0;
				var t = P(),
					n = M();
				window.history.pushState(j, t, n), document.title = t, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(n, t)
				} catch(e) {
					console.log(e.toString())
				}
			}), r.live("click", function(e) {
				e.preventDefault(), z();
				var t = $(this);
				j.subject_title = t.attr("data-title"), j.subject_id = t.attr("data-value"), j.subject_code = t.attr("data-code"), j.test_title = "", j.test_id = 0;
				var n = P(),
					i = M();
				window.history.pushState(j, n, i), document.title = n, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(i, n)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), a.change(function() {
				z();
				var e = $(this).find("option:selected");
				j.class_title = e.attr("data-title"), j.class_id = e.attr("value"), j.class_code = e.attr("data-code"), j.test_title = "", j.test_id = 0;
				var t = P(),
					n = M();
				window.history.pushState(j, t, n), document.title = t, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(n, t)
				} catch(e) {
					console.log(e.toString())
				}
			}), s.live("click", function(e) {
				e.preventDefault(), z();
				var t = $(this);
				j.class_title = t.attr("data-title"), j.class_id = t.attr("data-value"), j.class_code = t.attr("data-code"), j.test_title = "", j.test_id = 0;
				var n = P(),
					i = M();
				window.history.pushState(j, n, i), document.title = n, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(i, n)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), o.live("click", function(e) {
				e.preventDefault(), z();
				var t = $(this);
				j.ege_gia_my_edit_title = t.attr("data-title"), t.hasClass(x) ? j.is_ege_gia_my_edit = 0 : j.is_ege_gia_my_edit = 1, j.test_title = "", j.test_id = 0;
				var n = P(),
					i = M();
				window.history.pushState(j, n, i), document.title = n, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(i, n)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), l.live("click", function(e) {
				e.preventDefault(), z();
				var t = $(this);
				j.ege_gia_my_edit_title = t.attr("data-title"), t.hasClass(C) ? j.is_ege_gia_my_edit = 0 : j.is_ege_gia_my_edit = 2, j.test_title = "", j.test_id = 0;
				var n = P(),
					i = M();
				window.history.pushState(j, n, i), document.title = n, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(i, n)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), c.live("click", function(e) {
				e.preventDefault(), z();
				var t = $(this);
				j.ege_gia_my_edit_title = t.attr("data-title"), j.is_ege_gia_my_edit = 0, j.test_title = "", j.test_id = 0;
				var n = P(),
					i = M();
				window.history.pushState(j, n, i), document.title = n, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(i, n)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), u.live("click", function(e) {
				e.preventDefault(), z();
				var t = $(this);
				j.ege_gia_my_edit_title = t.attr("data-title"), t.hasClass(T) ? j.is_ege_gia_my_edit = 0 : j.is_ege_gia_my_edit = 3, j.test_title = "", j.test_id = 0;
				var n = P(),
					i = M();
				window.history.pushState(j, n, i), document.title = n, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(i, n)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), d.live("click", function(e) {
				e.preventDefault(), z();
				var t = $(this);
				j.ege_gia_my_edit_title = t.attr("data-title"), t.hasClass(S) ? j.is_ege_gia_my_edit = 0 : j.is_ege_gia_my_edit = 4, j.test_title = "", j.test_id = 0;
				var n = P(),
					i = M();
				window.history.pushState(j, n, i), document.title = n, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(i, n)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), _.live("click", function(e) {
				e.preventDefault(), z(), j.query = $.trim(p.val()), 3 != j.is_ege_gia_my_edit && 4 != j.is_ege_gia_my_edit || "" == j.query || (j.is_ege_gia_my_edit = 0), j.test_title = "", j.test_id = 0;
				var t = P(),
					n = M();
				window.history.pushState(j, t, n), document.title = t, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(n, t)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), p.bind("textchange", function() {
				clearTimeout(U), U = setTimeout(function() {
					F()
				}, 1e3)
			}), p.live("keypress", function(e) {
				"13" == e.which && (e.preventDefault(), e.stopPropagation(), clearTimeout(U), F())
			}), m.live("click", function(e) {
				var t = $(this);
				if(t.hasClass("no-history")) return !0;
				e.preventDefault(), z(), j.test_title = t.attr("data-title"), j.test_id = t.attr("data-id");
				var n = P(),
					i = M();
				window.history.pushState(j, n, i), document.title = n, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(i, n)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), v.live("click", function(e) {
				e.preventDefault(), z(), j.test_title = "", j.test_id = 0;
				var t = P(),
					n = M();
				window.history.pushState(j, t, n), document.title = t, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(n, t)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			}), y.live("click", function(e) {
				e.preventDefault(), z(), j = {
					hidden_promo: !1,
					subject_id: 0,
					subject_code: "",
					class_id: 0,
					class_code: "",
					is_ege_gia_my_edit: 0,
					query: "",
					subject_title: "",
					class_title: "",
					ege_gia_my_edit_title: "",
					test_id: 0,
					test_title: ""
				};
				var t = P(),
					n = M(!1, !0);
				window.history.pushState(j, t, n), document.title = t, I();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.hit(n, t)
				} catch(e) {
					console.log(e.toString())
				}
				return !1
			})
		}
		var R = function() {
				$("a.gallery").colorbox({
					opacity: .5,
					maxWidth: "90%",
					maxHeight: "90%",
					closeButton: !1
				})
			},
			L = $(".testpac_test_create_edit_form__steps "),
			H = $(".testpac_test_create_edit_form__steps_nav"),
			V = $(".testpac_test_create_edit_form__change_step"),
			B = $(".testpac_test_create_edit_form__curriculums_panel"),
			W = $(".testpac_test_create_edit_form__curriculum_panel"),
			G = $(".testpac_test_create_edit_form__curriculum_panel_close"),
			Y = $("#testpac_test_create_edit_form");
		$(".question_settings_for_package__delete").live("click", function(e) {
			e.preventDefault();
			var t = "";
			if(t = "undefined" == typeof language || "ru" == language ? "Удалить вопрос?" : "Remove the question?", confirm(t)) {
				var n = $(this).attr("data-id");
				Q(n), $(".testpac_test_create_edit_form__change_step.data-id-3").click()
			}
			return !1
		});
		var Q = function(t) {
			var e = B.attr("data-questions");
			e = e.split(",").filter(function(e) {
				return e != t
			}), B.attr("data-questions", e.join(",")), W.find(".testpac_edit__topic_item a").each(function() {
				e = (e = $(this).attr("data-questions")).split(",").filter(function(e) {
					return e != t
				}), $(this).attr("data-questions", e.join(","))
			})
		};
		$(".testpac_edit__topic_item a").live("click", function(e) {
			e.preventDefault();
			var n = $(this),
				t = n.attr("data-id"),
				i = n.attr("data-questions"),
				r = B.attr("data-questions"),
				a = i && r ? i + "," + r : i || r,
				s = n.attr("data-title"),
				o = $("#" + n.attr("data-win"));
			$("#" + o.attr("aria-labelledby")).html(s), o.find(".modal_container").hide(), o.find(".alert-error").hide(), o.find(".progress").show(), o.modal("show");
			var l = 0;
			return n.hasClass("testpac_edit__topic_item-disabled") && (l = 1), $.post("/questions/get_topic_questions/" + t + "/?time=" + (new Date).getTime(), "disabled=" + l + "&questions=" + a, function(e) {
				o.find(".modal_container").html(e), o.find(".progress").hide(), o.find(".modal_container").show(), setTimeout(R, 500);
				var t = function() {
					L.filter(".data-id-2").find(".container-data").html(""), $(".testpac_edit__question_check:not(checked)").each(function() {
						var e = $(this).val();
						Q(e)
					});
					var e = [];
					$(".testpac_edit__question_check:checked").each(function() {
						e.push($(this).val())
					}), n.attr("data-questions", e.join(",")), n.parent().find(".testpac_edit__q_count").text(e.length), 0 < e.length ? n.parent().find(".inline_text_select_box--access").show() : n.parent().find(".inline_text_select_box--access").hide(), $(".testpac_test_create_edit_form__curriculum_item").each(function() {
						var e = $(this),
							t = e.attr("data-id"),
							n = W.filter(".data-id-" + t).find(".testpac_edit__topic_item a"),
							i = [];
						n.each(function() {
							var e = $(this).attr("data-questions");
							"" != e && i.push(e)
						}), "" != (i = i.join(",")) && (i = i.split(",").filter(function(e, t, n) {
							return n.indexOf(e) == t
						})), e.find(".testpac_edit__q_count_by_curriculum").text(i.length)
					})
				};
				$(".testpac_edit__question_check").change(function() {
					t()
				}), $(".testpac_edit__add_all_questions").click(function() {
					$(".testpac_edit__question_check:not(:disabled)").prop("checked", !0), t()
				}), $(".testpac_edit__exclude_all_questions").click(function() {
					$(".testpac_edit__question_check:not(:disabled)").prop("checked", !1), t()
				}), t()
			}).error(function() {
				o.find(".progress").hide(), o.find(".alert-error").show()
			}), !1
		}), $(".testpac_test_create_edit_form").submit(function() {
			var e = $(this),
				t = e.find(".testpac_test_create_edit_form__questions_ids"),
				n = [],
				i = B.attr("data-questions");
			return "" != i && n.push(i), e.find(".testpac_edit__topic_item a").each(function() {
				"" != (i = $(this).attr("data-questions")) && n.push(i)
			}), t.val(n.join(",")), 3 == H.find("button.btn-primary:eq(0)").attr("data-id") && (0 != e.find("#test_ques_count_in_test").length || ("undefined" == typeof language || "ru" == language ? alert("Сохранить данные пока нельзя,\nтак как список вопросов не загружен. \n\nПерейдите на второй шаг и подождите\nпока вопросы будут загружены. \n\nПосле этого Вы сможете сохранить данные.") : alert("Save the data while it is impossible,\nas the list of questions is not loaded.\n\nYou must go to the second step and wait\nwhile questions are downloaded. \n\nAfter that you can save the data."), !1))
		}), $(".testpac_results__item_publish_btn").live("click", function(e) {
			e.preventDefault();
			var t = $(this),
				n = t.parents(".testpac_results__item-edit"),
				i = t.attr("data-id");
			return n.removeClass("testpac_results__item-edit").addClass("testpac_results__item-publishing"), $.ajax({
				url: "/tests/publish/" + i + "/?time=" + (new Date).getTime(),
				data: "",
				dataType: "json",
				type: "post",
				success: function(e, t) {
					e.public ? n.removeClass("testpac_results__item-publishing").addClass("testpac_results__item-public") : n.removeClass("testpac_results__item-publishing").addClass("testpac_results__item-review")
				},
				error: function(e, t) {
					"undefined" == typeof language || "ru" == language ? alert("Ошибка. Попробуйте опубликовать тест позже.") : alert("Error :( Try again later."), n.removeClass("testpac_results__item-publishing").addClass("testpac_results__item-edit")
				}
			}), !1
		}), $(".testpac_results__item_delete_btn").live("click", function(e) {
			e.preventDefault();
			var t = "";
			if(t = "undefined" == typeof language || "ru" == language ? "Удалить тест?\r\n* при удалении теста вопросы не удаляются" : "Remove the test?\r\n* questions will not removed", confirm(t)) {
				var n = $(this),
					i = n.parents(".testpac_results__item-edit"),
					r = n.attr("data-id");
				i.removeClass("testpac_results__item-edit").addClass("testpac_results__item-publishing"), $.ajax({
					url: "/tests/delete/" + r + "/?time=" + (new Date).getTime(),
					data: "",
					dataType: "json",
					type: "post",
					success: function(e, t) {
						i.remove()
					},
					error: function(e, t) {
						"undefined" == typeof language || "ru" == language ? alert("Ошибка. Попробуйте удалить тест позже.") : alert("Error :( Try again later."), i.removeClass("testpac_results__item-publishing").addClass("testpac_results__item-edit")
					}
				})
			}
			return !1
		}), V.live("click", function(e) {
			e.preventDefault();
			var t = $(this).attr("data-id"),
				n = H.find("button"),
				c = L.filter(".data-id-" + t);
			if(L.hide(), c.show(), n.removeClass("btn-primary").addClass("btn-link"), n.filter(".data-id-" + t).addClass("btn-primary").removeClass("btn-link"), 3 == t) {
				c.addClass("loading"), c.find(".testpac_test_create_edit_form__save_btn").attr("disabled", "disabled");
				var i = [],
					r = B.attr("data-questions");
				"" != r && i.push(r), $(".testpac_edit__topic_item a").each(function() {
					"" != (r = $(this).attr("data-questions")) && i.push(r)
				}), i = i.join(","), $.ajax({
					url: "/questions/get_questions_for_package/?time=" + (new Date).getTime(),
					data: "disabled=" + Y.attr("data-disabled") + "&new=" + Y.attr("data-new") + "&package_id=" + Y.attr("data-id") + "&ques_count_in_test=" + Y.attr("data-ques_count_in_test") + "&questions_ids=" + i,
					dataType: "json",
					type: "post",
					success: function(e, t) {
						var o = c.find(".container-data"),
							n = [];
						o.find("select").each(function() {
							var e = $(this),
								t = !1;
							e.parent().find(".question_settings_for_package__auto_item").hasClass("question_settings_for_package__auto_item-active") && (t = !0), n.push([e.attr("id"), e.find("option:selected").val(), t])
						});
						var i = !1;
						if(0 < o.find("#test_ques_count_in_test").length) {
							var r = o.find("#test_ques_count_in_test").val();
							i = !0
						}
						o.html(e.html), setTimeout(R, 500), i && o.find("#test_ques_count_in_test").val(r);
						for(var a = n.length, s = 0; s < a; s++) {
							var l = o.find("#" + n[s][0]);
							l.val(n[s][1]), l.hasClass("question_order_for_package") && l.removeClass("question_order_for_package_1 question_order_for_package_2 question_order_for_package_3 question_order_for_package_4 question_order_for_package_5").addClass("question_order_for_package_" + n[s][1]), n[s][2] && l.parent().find(".question_settings_for_package__auto_item").removeClass("btn-primary").addClass("question_settings_for_package__auto_item-active")
						}
						$(".testpac_edit__topic_item a").each(function() {
							var e = $(this).attr("data-questions"),
								t = $(this).parents(".curri_section_row"),
								n = parseInt(t.find(".question_score_for_package_by_topic").val()),
								i = parseInt(t.find(".question_order_for_package_by_topic").val());
							if((0 < n || 0 < i) && "" != e)
								for(var r = (e = e.split(",")).length, a = 0; a < r; a++) {
									var s;
									if(0 < n)(s = o.find("#question_score_for_package_" + e[a])).val(n);
									if(0 < i)(s = o.find("#question_order_for_package_" + e[a])).val(i), s.removeClass("question_order_for_package_1 question_order_for_package_2 question_order_for_package_3 question_order_for_package_4 question_order_for_package_5").addClass("question_order_for_package_" + i);
									s.parent().find(".question_settings_for_package__auto_item").removeClass("question_settings_for_package__auto_item-active").addClass("btn-primary")
								}
							0 < n && t.find(".question_score_for_package_by_topic").val("0"), 0 < i && t.find(".question_order_for_package_by_topic").val("0")
						}), c.removeClass("loading"), c.find(".testpac_test_create_edit_form__save_btn").removeAttr("disabled")
					},
					error: function(e, t) {
						c.removeClass("loading"), c.find(".container-data").html("<p>Ошибка при загрузке. Попробуйте перейти на шаг назад, а затем обратно.</p>")
					}
				})
			}
			return !1
		}), B.find("a").live("click", function(e) {
			e.preventDefault();
			var t = $(this).attr("data-id");
			return W.hide(), B.hide(), W.filter(".data-id-" + t).show(), !1
		}), G.live("click", function(e) {
			return e.preventDefault(), W.hide(), B.show(), !1
		}), $(".radio-self_code input[type=text]").live("focus", function() {
			var e = $(this).parents(".testpac_test_info__price_container");
			e.find("input[name=payment_type]").removeAttr("checked").filter("[value=self_test_self_code]").attr("checked", "checked"), e.find(".radio-self_code").addClass("radio-self_code-active")
		}), $("input[name=payment_type]").live("change", function() {
			var e = $(this),
				t = e.val(),
				n = e.parents(".testpac_test_info__price_container");
			"self_test_self_code" == t ? n.find(".radio-self_code").addClass("radio-self_code-active") : (n.find(".radio-self_code").removeClass("radio-self_code-active"), n.find(".radio-self_code .control-group").removeClass("error"))
		});
		var X = function(e) {
				e.data.is_hide_modal && (e.data.modal.modal("hide"), e.data.input.val("1"), e.data.form.submit())
			},
			J = function(e) {
				var t = $(this).attr("data-id");
				e.data.input.val(t);
				var n = e.data.container.find("a");
				n.removeClass("btn-primary"), n.each(function() {
					var e = $(this);
					e.attr("data-id") == t && e.addClass("btn-primary")
				}), e.data.form.submit()
			};
		$(".testpac_test_info__price_container").live("submit", function() {
			var e = $(this),
				t = e.find("input[name=user_name]"),
				n = e.find("input[name=user_email].required_field"),
				i = e.find("input[name=user_email]"),
				r = e.find("input[name=user_phone]"),
				a = e.find("input[name=user_value_1].required_field"),
				s = e.find("select[name=user_value_1].required_field"),
				o = e.find("input[name=user_value_2].required_field"),
				l = e.find("input[name=user_value_3].required_field"),
				c = e.find("input[name=lgn]"),
				u = e.find("input[name=pass]"),
				d = e.find("input[name=payment_type]:checked").val(),
				f = [],
				p = !1,
				_ = !1,
				h = !1;
			if(0 == n.length && 0 < i.length && "" != i.val() && (n = i), f = "self_test_self_code" == d ? e.find("input[name=self_code]") : e.find("input[name=self_code].required_field"), e.find(".control-group").removeClass("error"), 0 != n.length && "" == n.val() || 0 != t.length && "" == t.val() || 0 != r.length && "" == r.val() || 0 != a.length && "" == a.val() || 0 != s.length && !s.find(":selected").val() || 0 != o.length && "" == o.val() || 0 != l.length && "" == l.val() || 0 != f.length && "" == f.val() || !(0 < n.length + t.length + r.length + a.length + s.length + o.length + l.length + f.length) || (_ = !0), 0 < c.length && 0 < u.length && "" != c.val() && "" != u.val() && (h = !0), 0 < c.length && 0 < u.length && !_) {
				var m;
				if("" != c.val())(m = u.parents(".control-group")).removeClass("error"), 0 == u.val().length && (u.focus(), m.addClass("error"), p = !0);
				else if("" != u.val()) {
					var g;
					(g = c.parents(".control-group")).removeClass("error"), 0 == c.val().length && (c.focus(), g.addClass("error"), p = !0)
				}(m = u.parents(".control-group")).removeClass("error"), 0 == u.val().length && (u.focus(), m.addClass("error"), p = !0), (g = c.parents(".control-group")).removeClass("error"), 0 == c.val().length && (c.focus(), g.addClass("error"), p = !0)
			}
			if((0 == c.length && 0 == u.length || 0 != n.length && "" != n.val() || 0 != t.length && "" != t.val() || 0 != r.length && "" != r.val() || 0 != a.length && "" != a.val() || 0 != s.length && s.find(":selected").val() || 0 != o.length && "" != o.val() || 0 != l.length && "" != l.val() || 0 != f.length && "" != f.val() || !p) && !h) {
				if(0 < f.length) {
					var v = f.parents(".control-group");
					v.removeClass("error"), 0 == f.val().length && (f.focus(), v.addClass("error"), p = !0)
				}
				if(0 < l.length) {
					var y = l.parents(".control-group");
					y.removeClass("error"), 0 == l.val().length && (l.focus(), y.addClass("error"), p = !0)
				}
				if(0 < o.length) {
					var b = o.parents(".control-group");
					b.removeClass("error"), 0 == o.val().length && (o.focus(), b.addClass("error"), p = !0)
				}
				if(0 < s.length) {
					var w = s.parents(".control-group");
					w.removeClass("error"), s.find(":selected").val() || (w.addClass("error"), p = !0)
				}
				if(0 < a.length) {
					var x = a.parents(".control-group");
					x.removeClass("error"), 0 == a.val().length && (a.focus(), x.addClass("error"), p = !0)
				}
				if(0 < r.length) {
					var C = r.parents(".control-group");
					C.removeClass("error"), 0 == r.val().length && (r.focus(), C.addClass("error"), p = !0)
				}
				if(0 < n.length) {
					var T = n.parents(".control-group");
					T.removeClass("error"), /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(n.val()) || (n.focus(), T.addClass("error"), p = !0)
				}
				if(0 < t.length) {
					var S = t.parents(".control-group");
					S.removeClass("error"), 0 == t.val().length && (t.focus(), S.addClass("error"), p = !0)
				}
			}
			var k = e.find("input[name=is_accepted_text_instruction]"),
				q = e.find("input[name=selected_testpac]"),
				D = 0 < q.length ? q.val() : null;
			if(!p && (0 < k.length && "0" == k.val() || 0 < q.length && !D)) {
				var E = $("#ajax_data_confirm_window");
				E.find("#ajax_data_confirm_window_label").html(e.find(".testpac_test_info__title_instruction").html()), E.find("#ajax_data_confirm_window_yes_btn").unbind("click", X), E.find("#ajax_data_confirm_window_yes_btn").bind("click", {
					input: k,
					form: e,
					modal: E,
					is_hide_modal: 0 == q.length || D
				}, X);
				var A = e.find(".testpac_test_info__selected_testpac"),
					j = $.trim(A.html());
				j && E.find("#ajax_data_confirm_window_yes_btn").removeClass("btn-primary"), j && !D || E.find("#ajax_data_confirm_window_yes_btn").addClass("btn-primary"), E.find(".modal_container").html(e.find(".testpac_test_info__text_instruction").html() + j), E.find(".selected_testpac_container a").bind("click", {
					input: q,
					form: e,
					container: A
				}, J), E.find(".alert-error").hide(), E.modal("show"), p = !0
			}
			if(!p) {
				var O = {
						price: e.find("input[name=price]").val(),
						payment_type: "self-test"
					},
					M = "testing";
				"1" == e.find("input[name=is_payement]").val() && (M = "payment_start"), "1" == e.find("input[name=is_rur_currency]").val() && (O.payment_type = d), null == O.payment_type && (O.payment_type = "robokassa"), null == O.price && (O.price = "0"), O.price = parseFloat(O.price), "testing" == M && (O.payment_type = "none");
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal(M, O)
				} catch(e) {
					console.log(e.toString())
				}
			}
			return !p
		}), $(".question_score_for_package, .question_order_for_package").live("change", function() {
			var e = $(this),
				t = e.find("option:selected").val();
			e.hasClass("question_order_for_package") && e.removeClass("question_order_for_package_1 question_order_for_package_2 question_order_for_package_3 question_order_for_package_4 question_order_for_package_5").addClass("question_order_for_package_" + t), e.parent().find(".question_settings_for_package__auto_item").removeClass("question_settings_for_package__auto_item-active").addClass("btn-primary")
		}), $(".question_settings_for_package__clear").live("click", function() {
			$(".question_score_for_package, .question_order_for_package").val(1), $(".question_order_for_package").removeClass("question_order_for_package_1 question_order_for_package_2 question_order_for_package_3 question_order_for_package_4 question_order_for_package_5").addClass("question_order_for_package_1"), $(".question_order_for_package").parent().find(".question_settings_for_package__auto_item").removeClass("question_settings_for_package__auto_item-active").addClass("btn-primary")
		}), $(".question_settings_for_package__auto").live("click", function() {
			$(".question_score_for_package, .question_order_for_package").each(function() {
				var e = $(this),
					t = parseInt(e.attr("data-complication"));
				0 < t && (e.val(t), e.hasClass("question_order_for_package") && (e.removeClass("question_order_for_package_1 question_order_for_package_2 question_order_for_package_3 question_order_for_package_4 question_order_for_package_5").addClass("question_order_for_package_" + t), e.parent().find(".question_settings_for_package__auto_item").addClass("question_settings_for_package__auto_item-active").removeClass("btn-primary")))
			})
		}), $(".question_settings_for_package__auto_item").live("click", function() {
			if((e = $(this)).hasClass("question_settings_for_package__auto_item-active")) {
				var e, t = (e = $(this)).parent().find(".question_score_for_package"),
					n = e.parent().find(".question_order_for_package");
				t.val(1), n.val(1), n.removeClass("question_order_for_package_1 question_order_for_package_2 question_order_for_package_3 question_order_for_package_4 question_order_for_package_5").addClass("question_order_for_package_1"), e.removeClass("question_settings_for_package__auto_item-active").addClass("btn-primary")
			} else e.parent().find(".question_score_for_package, .question_order_for_package").each(function() {
				var e = $(this),
					t = parseInt(e.attr("data-complication"));
				0 < t && (e.val(t), e.hasClass("question_order_for_package") && (e.removeClass("question_order_for_package_1 question_order_for_package_2 question_order_for_package_3 question_order_for_package_4 question_order_for_package_5").addClass("question_order_for_package_" + t), e.parent().find(".question_settings_for_package__auto_item").addClass("question_settings_for_package__auto_item-active").removeClass("btn-primary")))
			})
		}), $(".test_mass_start_date_time__check").live("change", function() {
			$(this);
			$(".test_mass_start_date_time__settings").animate({
				height: "toggle"
			}, 350)
		})
	}),
	function(e, t, n, i) {
		"use strict";
		t.module("SelfTest", ["selfTestDirectives", "selfTestServices", "selfTestAssignments", "selfTestCurriculums", "selfTestQuestions", "selfTestSites", "selfTestSitePlans", "selfTestData", "selfTestFolders", "selfTestPopup"]).config(function() {
			console.log("Configure SELF-TEST app")
		}).run(function() {
			console.log("Starting SELF-TEST app")
		}), t.module("SelfTestPay", ["selfTestDirectives", "selfTestServices", "selfTestPayStation", "selfTestFolders", "selfTestPopup"]).config(function() {
			console.log("Configure SELF-TEST PayStation app")
		}).run(function() {
			console.log("Starting SELF-TEST PayStation app")
		}), t.module("SelfTestSite", ["selfTestDirectives", "selfTestServices", "selfTestSiteEdit"]).config(function() {
			console.log("Configure SELF-TEST Site app")
		}).run(function() {
			console.log("Starting SELF-TEST Site app")
		})
	}(jQuery, angular, window),
	function(e, t, n) {
		t.ST || (t.ST = {})
	}(jQuery, window);
var system_start_time = 0,
	system_timer = "";

function testCountUp(e, t, n) {
	var i = new Date,
		r = e.hasClass("time_limit"),
		a = 0;
	if("test" == n ? a = time : (a = question_time, r = 0 < question_time_limit_sec), r) 290 < (s = a - (i.getTime() - test_start_time) / 1e3) && s < 300 ? e.addClass("time_limit_5") : 230 < s && s < 240 ? e.removeClass("time_limit_5").addClass("time_limit_4") : 170 < s && s < 180 ? e.removeClass("time_limit_4").addClass("time_limit_3") : 110 < s && s < 120 ? e.removeClass("time_limit_3").addClass("time_limit_2") : 50 < s && s < 60 && e.removeClass("time_limit_2").addClass("time_limit_1");
	else var s = a + (i.getTime() - test_start_time) / 1e3;
	r && 2 == Math.floor(s) && 0 < $("#question_answer").find("#question_type_11").length && $(".next_question_form").submit(), s < 0 && (s = 0, clearInterval(test_timer), clearInterval(question_timer), r && location.reload(!0));
	var o = Math.floor(s / 3600);
	s -= 3600 * o;
	var l = Math.floor(s / 60);
	s -= 60 * l;
	var c = Math.floor(s % 60);
	l = l < 10 ? "0" + l : l, c = c < 10 ? "0" + c : c;
	var u = [];
	if("00" != (o = o < 10 ? "0" + o : o) ? (u[0] = o, u[1] = l, u[2] = c) : (u[0] = l, u[1] = c), e.html(u.join(":")), t && r && 0 < s && ("10" == c || "30" == c || "50" == c)) {
		var d = "",
			f = $("#question_answer");
		0 < f.find("#question_type_11").length && (d = f.serialize()), $.post("/testing/test_time_to_js/?time=" + (new Date).getTime(), d, function(e) {
			if("[]" != e) {
				if(null != (e = jQuery.parseJSON(e)).time || null != e.question_time) {
					var t = new Date;
					test_start_time = t.getTime()
				}
				null != e.time && (time = e.time), null != e.question_time && (question_time = e.question_time), null != e.question_time_limit_sec && (question_time_limit_sec = e.question_time_limit_sec)
			} else location.reload(!0)
		})
	}
}
var test_start_time = 0,
	test_timer = "",
	question_timer = "",
	init_question_type_3 = function() {
		if($(".question_answers_sort").sortable({
				axis: "y",
				containment: "parent",
				tolerance: "pointer",
				cursor: "default",
				stop: function(e, t) {
					after_sort(t.item.parents(".question_answers_sort"))
				}
			}), $(".question_answers_sort").disableSelection(), $(".question_answers_sort").bind("sortchange", function(e, t) {
				$(".ui-sortable-placeholder").attr("value", $(".ui-sortable-placeholder").index())
			}), $(".question_answers_sort").bind("sortstart", function(e, t) {
				$(".ui-sortable-placeholder").attr("value", $(".ui-sortable-placeholder").index())
			}), $("#question_type_4_1").length) {
			var n = 0;
			$("#question_answer li").each(function(e) {
				var t = parseInt($(this).height());
				n < t && (n = t)
			}), $("#question_answer li").css("height", n + "px")
		}
	},
	after_sort = function(e) {
		e.find("li").each(function(e) {
			var t = $(this);
			t.find(".question_answer_table_1_2__check").text(e + 1), t.find(".sort_btn_up, .sort_btn_down").addClass("btn-success").removeAttr("disabled")
		}), e.find("li:first .sort_btn_up").removeClass("btn-success").attr("disabled", "disabled"), e.find("li:last .sort_btn_down").removeClass("btn-success").attr("disabled", "disabled")
	},
	colorboxInit = function() {
		$("a.gallery").colorbox({
			opacity: .5,
			maxWidth: "90%",
			maxHeight: "90%",
			closeButton: !1
		})
	},
	userViewQuestionFeedback = function(e) {
		$.ajax({
			url: "/ajax/view_question_feedback/?time=" + (new Date).getTime(),
			data: "is_not_viewed_ids=" + e,
			dataType: "json",
			type: "post"
		})
	};

function preventSelection(e) {
	var n = !1;

	function t(e, t, n) {
		e.attachEvent ? e.attachEvent("on" + t, n) : e.addEventListener && e.addEventListener(t, n, !1)
	}

	function i() {
		window.getSelection ? window.getSelection().removeAllRanges() : document.selection && document.selection.clear && document.selection.clear()
	}

	function r(e) {
		if(!((e = e || window.event).target || e.srcElement).tagName.match(/INPUT|TEXTAREA/i)) {
			var t = e.keyCode || e.which;
			e.ctrlKey && t == "A".charCodeAt(0) && (i(), e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		}
	}

	function a(e) {
		(e = e || window.event).target || e.srcElement;
		var t = e.keyCode || e.which;
		(e.ctrlKey && t == "X".charCodeAt(0) || e.ctrlKey && t == "C".charCodeAt(0)) && (i(), e.preventDefault ? e.preventDefault() : e.returnValue = !1)
	}
	t(e, "mousemove", function() {
		n && i()
	}), t(e, "mousedown", function(e) {
		var t = (e = e || window.event).target || e.srcElement;
		n = !t.tagName.match(/INPUT|TEXTAREA/i)
	}), t(e, "mouseup", function() {
		n && i(), n = !1
	}), t(e, "keydown", r), t(e, "keyup", r), t(e, "keydown", a), t(e, "keyup", a)
}! function() {
	"use strict";
	$("#finish_test_form, .finish_test_form").length && preventSelection(document), $(".field_without_paste").live("keydown keypress", function(e) {
		var t = (e = e || event).which || e.button;
		return(!e.ctrlKey || 86 != t) && (2 != t && void 0)
	}).bind("paste contextmenu", function() {
		return !1
	}), $(".select_for_changing_url").live("change", function() {
		document.location = $(this).find("option:selected").attr("data-url")
	}), $(".ya_start_work").live("click", function() {
		try {
			"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("testing_work")
		} catch(e) {
			console.log(e.toString())
		}
	}), $(".question_answers_sort .sort_btn_up").live("click", function() {
		var e = $(this).parents("li");
		e.insertBefore(e.prev()), after_sort(e.parents(".question_answers_sort"))
	}), $(".question_answers_sort .sort_btn_down").live("click", function() {
		var e = $(this).parents("li");
		e.insertAfter(e.next()), after_sort(e.parents(".question_answers_sort"))
	}), colorboxInit(), $(".table-pupils-hover").columnHover({
		eachCell: !0,
		hoverClass: "tr-td-hover",
		ignoreCols: [1, 2]
	});
	var e = $("[autofocus]:eq(0)");
	e.focus().val(e.val()), $(".with_label_hide").live("focusin", function() {
		var e = $(this);
		$("label[for=" + e.attr("id") + "]").hide()
	}).live("blur", function() {
		var e = $(this);
		"" == e.val() && $("label[for=" + e.attr("id") + "]").show(), e.removeClass("input-error")
	}), $("#feedback_form").submit(function() {
		var n = $(this),
			i = n.find("textarea");

		function r() {
			n.removeClass("main_page__feedback-sending").removeClass("main_page__feedback-sent").removeClass("main_page__feedback-error")
		}
		return "" == i.val() ? (i.focus(), i.addClass("input-error")) : (i.removeClass("feedback-error"), n.addClass("main_page__feedback-sending"), $.ajax({
			url: "/ajax/feedback/?time=" + (new Date).getTime(),
			data: n.serialize(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-sent"), i.val(""), $("label[for=" + i.attr("id") + "]").show();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("form_feedback")
				} catch(e) {
					console.log(e.toString())
				}
				setTimeout(r, 2e3)
			},
			error: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-error"), setTimeout(r, 2e3)
			}
		})), !1
	}), $("#teacher_request").submit(function() {
		var n = $(this),
			e = n.find("#teacher_request_phone"),
			i = n.find("textarea");

		function r() {
			n.removeClass("main_page__feedback-sending").removeClass("main_page__feedback-sent").removeClass("main_page__feedback-error")
		}
		return "" == e.val() ? (e.focus(), e.addClass("input-error")) : (e.removeClass("feedback-error"), i.removeClass("feedback-error"), n.addClass("main_page__feedback-sending"), $.ajax({
			url: "/ajax/teacher_request/?time=" + (new Date).getTime(),
			data: n.serialize(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-sent"), i.val(""), $("label[for=" + i.attr("id") + "]").show();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("form_teacher_request")
				} catch(e) {
					console.log(e.toString())
				}
				setTimeout(r, 2e3)
			},
			error: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-error"), setTimeout(r, 2e3)
			}
		})), !1
	}), $("#job_request").submit(function() {
		var n = $(this),
			e = n.find("#job_request_name"),
			t = n.find("#job_request_phone"),
			i = n.find("textarea"),
			r = e.val(),
			a = t.val();

		function s() {
			n.removeClass("main_page__feedback-sending").removeClass("main_page__feedback-sent").removeClass("main_page__feedback-error")
		}
		return "" == r ? (e.focus(), e.addClass("input-error")) : "" == a ? (t.focus(), t.addClass("input-error")) : (e.removeClass("feedback-error"), t.removeClass("feedback-error"), i.removeClass("feedback-error"), n.addClass("main_page__feedback-sending"), $.ajax({
			url: "/ajax/job_request/?time=" + (new Date).getTime(),
			data: n.serialize(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-sent"), i.val(""), $("label[for=" + i.attr("id") + "]").show();
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("form_job_request")
				} catch(e) {
					console.log(e.toString())
				}
				setTimeout(s, 2e3)
			},
			error: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-error"), setTimeout(s, 2e3)
			}
		})), !1
	}), $("#promo_request").submit(function() {
		var n = $(this),
			e = n.find("#promo_request_name"),
			t = n.find("#promo_request_email"),
			i = (n.find("#promo_request_phone"), e.val()),
			r = t.val();

		function a() {
			n.removeClass("main_page__feedback-sending").removeClass("main_page__feedback-sent").removeClass("main_page__feedback-error")
		}
		return "" == i ? (e.focus(), e.addClass("input-error")) : "" == r ? (t.focus(), t.addClass("input-error")) : (e.removeClass("feedback-error"), t.removeClass("feedback-error"), n.addClass("main_page__feedback-sending"), $.ajax({
			url: "/ajax/promo_request/?time=" + (new Date).getTime(),
			data: n.serialize(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-sent");
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("form_promo_request", {
						type: n.find("[name=promo_request_type]").val()
					})
				} catch(e) {
					console.log(e.toString())
				}
				setTimeout(a, 5e3)
			},
			error: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-error"), setTimeout(a, 3e3)
			}
		})), !1
	}), $("#ajax_data_form").submit(function() {
		var n = $(this),
			i = !1,
			e = n.attr("data-action"),
			r = n.find("input[type=text],textarea");

		function a() {
			n.removeClass("main_page__feedback-sending").removeClass("main_page__feedback-sent").removeClass("main_page__feedback-error")
		}
		return r.each(function(e) {
			var t = $(this);
			i || null == t.attr("data-required") || "" == t.val() && (t.focus(), t.addClass("input-error"), i = !0)
		}), i || (r.removeClass("feedback-error"), n.addClass("main_page__feedback-sending"), $.ajax({
			url: e + "?time=" + (new Date).getTime(),
			data: n.serialize(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				e.success ? (n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-sent"), r.filter(".input-clear_value").each(function(e) {
					var t = $(this);
					t.val(""), $("label[for=" + t.attr("id") + "]").show()
				})) : (alert(e.message), n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-error")), setTimeout(a, 2e3)
			},
			error: function(e, t) {
				n.removeClass("main_page__feedback-sending").addClass("main_page__feedback-error"), setTimeout(a, 2e3)
			}
		})), !1
	}), $(".hover_group").hover(function() {
		$(".hover_group").addClass("hover_group__on")
	}, function() {
		$(".hover_group").removeClass("hover_group__on")
	}), init_question_type_3(), $(".curri_sort:not(.curri_sort-disabled)").sortable({
		axis: "y",
		containment: "parent",
		tolerance: "pointer",
		cursor: "move",
		stop: function(e, t) {
			t.item.find(".progress").show();
			var n = "";
			$(".curri_sort li").each(function(e) {
				var t = $(this).attr("data-id");
				"" != n && (n += ","), n += t
			}), $.ajax({
				url: "/questions/savecurriorder/?time=" + (new Date).getTime(),
				data: "order_id=" + n,
				dataType: "json",
				type: "post",
				success: function(e, t) {
					null != e.error && alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), $(".curri_sort").find(".progress").hide()
				},
				error: function(e, t) {
					alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), $(".curri_sort").find(".progress").hide()
				}
			})
		}
	}), $(".curri_sort").disableSelection(), $(".curri_section_sort").sortable({
		axis: "y",
		containment: "parent",
		tolerance: "pointer",
		cursor: "move",
		stop: function(e, t) {
			t.item.find(".progress").show();
			var n = "";
			$(".curri_section_sort li").each(function(e) {
				var t = $(this).attr("data-id");
				"" != n && (n += ","), n += t
			});
			var i = $(".curri_section_sort").attr("data-id");
			$.ajax({
				url: "/questions/savesectionorder/" + i + "/?time=" + (new Date).getTime(),
				data: "order_id=" + n,
				dataType: "json",
				type: "post",
				success: function(e, t) {
					null != e.error && alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), $(".curri_section_sort").find(".progress").hide()
				},
				error: function(e, t) {
					alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), $(".curri_section_sort").find(".progress").hide()
				}
			})
		}
	}), $(".curri_section_sort").disableSelection();

	function s() {
		$(".curri_topic_sort").sortable({
			axis: "y",
			containment: "parent",
			tolerance: "pointer",
			cursor: "move",
			stop: function(e, t) {
				t.item.find(".progress").show();
				var n = "";
				$(".curri_topic_sort li").each(function(e) {
					var t = $(this).attr("data-id");
					"" != n && (n += ","), n += t
				});
				var i = $(".curri_topic_sort").attr("data-id");
				$.ajax({
					url: "/questions/savetopicorder/" + i + "/?time=" + (new Date).getTime(),
					data: "order_id=" + n,
					dataType: "json",
					type: "post",
					success: function(e, t) {
						null != e.error && alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), $(".curri_topic_sort").find(".progress").hide()
					},
					error: function(e, t) {
						alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), $(".curri_topic_sort").find(".progress").hide()
					}
				})
			}
		}), $(".curri_topic_sort").disableSelection(), m()
	}
	$(".curri_remove").click(function(e) {
		e.preventDefault();
		var t = $(this),
			n = $(".curri_form_rr"),
			i = t.attr("data-title");
		confirm(i) && (n.find("input[name=id]").val(t.attr("data-id")), n.find("input[name=type]").val("curri_remove"), n.submit())
	}), $(".curri_rename").click(function(e) {
		e.preventDefault();
		var t = $(this),
			n = $(".curri_form_rr"),
			i = t.attr("data-title"),
			r = t.attr("data-subject_title"),
			a = t.attr("data-class_title"),
			s = {};
		s.id = t.attr("data-id"), s.title = prompt("Введите новое название учебной программы", i), null != s.title && "" != s.title ? (s.subject = prompt("Введите название её предмета", r), null != s.subject && "" != s.subject ? (s.class = prompt("И введите её уровень", a), null != s.class && "" != s.class ? (n.find("input[name=id]").val(s.id), n.find("input[name=title]").val(s.title), n.find("input[name=subject]").val(s.subject), n.find("input[name=class]").val(s.class), n.find("input[name=type]").val("curri_rename"), n.submit()) : alert("Переименование отменено")) : alert("Переименование отменено")) : alert("Переименование отменено")
	});
	var o = {},
		l = $(".curri_topic_ajax_box");
	$(".curri_section_box a").click(function() {
		var n = $(this);
		if(n.hasClass("curri_replace_section")) {
			var e = $(".curri_section_form_rrr"),
				t = n.attr("data-curriculum_id");
			if((i = {}).id = n.attr("data-id"), i.curriculum_id = parseInt(prompt("Введите ID учебной программы, в который нужно переместить раздел", t)), !(null != i.curriculum_id && 0 < i.curriculum_id)) return alert("Перемещение отменено"), !1;
			e.find("input[name=id]").val(i.id), e.find("input[name=curriculum_id]").val(i.curriculum_id), e.find("input[name=type]").val("curri_section_replace"), e.submit()
		} else if(n.hasClass("curri_rename_section")) {
			e = $(".curri_section_form_rrr");
			var i, r = n.attr("data-title");
			(i = {}).id = n.attr("data-id"), i.title = prompt("Введите новое название темы", r), null != i.title && "" != i.title ? (e.find("input[name=id]").val(i.id), e.find("input[name=title]").val(i.title), e.find("input[name=type]").val("curri_section_rename"), e.submit()) : alert("Переименование отменено")
		} else if(n.hasClass("curri_remove_section")) {
			e = $(".curri_section_form_rrr"), r = n.attr("data-title");
			confirm(r) && (e.find("input[name=id]").val(n.attr("data-id")), e.find("input[name=type]").val("curri_section_remove"), e.submit())
		} else if(n.hasClass("curri_block_questions_by_section")) {
			e = $(".curri_section_form_rrr"), r = n.attr("data-title");
			confirm(r) && (e.find("input[name=id]").val(n.attr("data-id")), e.find("input[name=type]").val("curri_block_questions_by_section"), e.submit())
		} else if(!n.parents(".curri_section_box").hasClass("testpac_edit__topic_item")) {
			$(".curri_section_box").removeClass("active"), n.parents(".curri_section_box").addClass("active"), l.removeClass("error").addClass("loading");
			var a = n.attr("data-href");
			null == o[a] ? $.ajax({
				url: a + "?time=" + (new Date).getTime(),
				dataType: "json",
				type: "post",
				success: function(e, t) {
					l.removeClass("loading").removeClass("error"), o[a] = e.html, l.find(".ajax_box").html(o[a]), $(".curri_section_form form input[name=hash], .curri_section_form_rrr input[name=hash]").val(n.attr("data-section_id")), s()
				},
				error: function(e, t) {
					l.removeClass("loading").addClass("error")
				}
			}) : (l.removeClass("loading").removeClass("error"), l.find(".ajax_box").html(o[a]), $(".curri_section_form form input[name=hash], .curri_section_form_rrr input[name=hash]").val(n.attr("data-section_id")))
		}
	}), $(".curri_add").click(function() {
		$(".curri_form").animate({
			width: "toggle"
		}, 350, function() {
			$(this).find("input[type=text]:eq(0)").focus()
		}), $(".curri_avatar").toggleClass("active"), $(".curri_avatar span").toggleClass("icon-plus").toggleClass("icon-remove")
	}), $(".curri_form form").submit(function(e) {
		e.preventDefault();
		var t = $(this),
			n = t.find("input[name=title]"),
			i = t.find("input[name=subject]"),
			r = t.find("input[name=class]");
		"" == n.val() ? n.focus() : "" == i.val() ? i.focus() : "" == r.val() ? r.focus() : t.unbind("submit").submit()
	}), $(".curri_section_add").click(function() {
		$(".curri_section_form").animate({
			width: "toggle"
		}, 350, function() {
			$(this).find("input[type=text]:eq(0)").focus()
		}), $(".curri_section_avatar.add_btn").toggleClass("active"), $(".curri_section_avatar.add_btn span").toggleClass("icon-plus").toggleClass("icon-remove")
	}), $(".curri_section_form form").submit(function(e) {
		e.preventDefault();
		var t = $(this),
			n = t.find("input[name=title]");
		"" == n.val() ? n.focus() : t.unbind("submit").submit()
	}), $(".curri_topic_add").live("click", function() {
		$(".curri_topic_form").animate({
			width: "toggle"
		}, 350, function() {
			$(this).find("input[type=text]:eq(0)").focus()
		}), $(".curri_topic_avatar.add_btn").toggleClass("active"), $(".curri_topic_avatar.add_btn span").toggleClass("icon-plus").toggleClass("icon-remove")
	}), $(".curri_topic_form form").live("submit", function(e) {
		e.preventDefault();
		var t = $(this),
			n = t.find("input[name=title]");
		if("" == n.val()) n.focus();
		else {
			l.removeClass("error").addClass("loading");
			var i = t.attr("data-action");
			$.ajax({
				url: i + "?time=" + (new Date).getTime(),
				data: t.serialize(),
				dataType: "json",
				type: "post",
				success: function(e, t) {
					l.removeClass("loading").removeClass("error"), o[i] = e.html, l.find(".ajax_box").html(o[i]), null != e.alert_success && alert(e.alert_success), null != e.alert_error && alert(e.alert_error), s()
				},
				error: function(e, t) {
					l.removeClass("loading").addClass("error")
				}
			})
		}
	}), $(".curri_remove_topic").live("click", function(e) {
		e.preventDefault();
		var t = $(this),
			n = t.attr("data-title");
		if(!confirm(n)) return !1;
		l.removeClass("error").addClass("loading");
		var i = t.attr("data-action");
		$.ajax({
			url: i + "&time=" + (new Date).getTime(),
			data: t.serialize(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				l.removeClass("loading").removeClass("error"), o[i] = e.html, l.find(".ajax_box").html(o[i]), null != e.alert_success && alert(e.alert_success), null != e.alert_error && alert(e.alert_error), s()
			},
			error: function(e, t) {
				l.removeClass("loading").addClass("error")
			}
		})
	}), $(".curri_rename_topic").live("click", function(e) {
		e.preventDefault();
		var t = $(this),
			n = t.attr("data-title"),
			i = {};
		if(i.id = t.attr("data-id"), i.title = prompt("Введите новое название темы", n), i.type = "curri_topic_rename", null == i.title || "" == i.title) return alert("Переименование отменено"), !1;
		l.removeClass("error").addClass("loading");
		var r = t.attr("data-action");
		$.ajax({
			url: r + "?time=" + (new Date).getTime(),
			data: i,
			dataType: "json",
			type: "post",
			success: function(e, t) {
				l.removeClass("loading").removeClass("error"), o[r] = e.html, l.find(".ajax_box").html(o[r]), null != e.alert_success && alert(e.alert_success), null != e.alert_error && alert(e.alert_error), s()
			},
			error: function(e, t) {
				l.removeClass("loading").addClass("error")
			}
		})
	}), $(".curri_replace_topic").live("click", function(e) {
		e.preventDefault();
		var t = $(this),
			n = t.attr("data-section_id"),
			i = {};
		if(i.id = t.attr("data-id"), i.section_id = parseInt(prompt("Введите ID раздела, в который нужно переместить тему", n)), i.type = "curri_topic_replace", !(null != i.section_id && 0 < i.section_id)) return alert("Перемещение отменено"), !1;
		l.removeClass("error").addClass("loading");
		var r = t.attr("data-action");
		$.ajax({
			url: r + "?time=" + (new Date).getTime(),
			data: i,
			dataType: "json",
			type: "post",
			success: function(e, t) {
				l.removeClass("loading").removeClass("error"), o[r] = e.html, l.find(".ajax_box").html(o[r]), null != e.alert_success && alert(e.alert_success), null != e.alert_error && alert(e.alert_error), s()
			},
			error: function(e, t) {
				l.removeClass("loading").addClass("error")
			}
		})
	});
	var t = "";
	document.location.hash && (t = document.location.hash.replace("#!/", ""));
	"section_" == t.substr(0, 8) && $("a[data-section_id=" + t.substr(8) + "]").click();
	var i = $(".str_class_ajax_box");
	$(".str_subject_box a").click(function() {
		var e = $(this);
		$(".str_subject_box").removeClass("active"), e.parents(".str_subject_box").addClass("active"), i.removeClass("error").addClass("loading");
		var t = e.attr("data-href");
		$.ajax({
			url: t + "?time=" + (new Date).getTime(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				var n;
				i.removeClass("loading").removeClass("error"), i.find(".ajax_box").html(e.html), n = $(".str_topics_ajax_box"), $(".str_class_box a").click(function() {
					var e = $(this);
					$(".str_class_box").removeClass("active"), e.parents(".str_class_box").addClass("active"), n.removeClass("error").addClass("loading");
					var t = e.attr("data-href");
					t = t + $(".str_topics_ajax_box").attr("data-sch_topic_id") + "/", $.ajax({
						url: t + "?time=" + (new Date).getTime(),
						dataType: "json",
						type: "post",
						success: function(e, t) {
							n.removeClass("loading").removeClass("error"), n.find(".ajax_box").html(e.html)
						},
						error: function(e, t) {
							n.removeClass("loading").addClass("error")
						}
					})
				})
			},
			error: function(e, t) {
				i.removeClass("loading").addClass("error")
			}
		})
	});
	var a = {};
	$(".autocomplete_city").length && $(".autocomplete_city").autocomplete({
		minLength: 1,
		source: function(e, i) {
			var r = e.term;
			r in a ? i(a[r]) : $.getJSON("/ajax/getcity/?time=" + (new Date).getTime(), e, function(e, t, n) {
				a[r] = e, i(e)
			})
		},
		create: function(e, t) {
			$(".autocomplete_city").next(".ui-helper-hidden-accessible").remove()
		}
	});
	var n = function(e, o) {
		var l = {};
		$(e).length && $(e).each(function(e) {
			var n = $(this),
				t = n.attr("data-city-field"),
				s = $("#" + t),
				i = n.attr("data-min-length") ? parseInt(n.attr("data-min-length")) : 1;
			n.autocomplete({
				minLength: i,
				source: function(e, i) {
					e.city = s.length ? s.val() : "";
					var r = e.term,
						a = e.city;
					r || a ? r in l && a in l[r] ? i(l[r][a]) : $.getJSON(o, e, function(e, t, n) {
						r in l || (l[r] = {}), l[r][a] = e, i(e)
					}) : i([])
				},
				create: function(e, t) {
					n.next(".ui-helper-hidden-accessible").remove()
				}
			}).on("focus", function() {
				0 === i && $(this).autocomplete("search", $(this).val())
			})
		})
	};
	n(".autocomplete_settlement", "/ajax/getsettlement/?time=" + (new Date).getTime()), n(".autocomplete_district", "/ajax/getdistrict/?time=" + (new Date).getTime());
	var c = {};
	$(".autocomplete_school").length && $(".autocomplete_school").autocomplete({
		minLength: 1,
		source: function(e, i) {
			var r = e.term;
			r in c ? i(c[r]) : $.getJSON("/ajax/getschool/?time=" + (new Date).getTime(), e, function(e, t, n) {
				c[r] = e, i(e)
			})
		},
		create: function(e, t) {
			$(".autocomplete_school").next(".ui-helper-hidden-accessible").remove()
		}
	});
	var u = {},
		r = function() {
			$(".autocomplete_subject:not(.ui-autocomplete-input)").live("focus", function(e) {
				var n = $(this);
				n.autocomplete({
					minLength: 1,
					source: function(e, i) {
						var r = e.term;
						r in u ? i(u[r]) : $.getJSON("/questions/getstrsubjects/?time=" + (new Date).getTime(), e, function(e, t, n) {
							u[r] = e, i(e)
						})
					},
					create: function(e, t) {
						n.next(".ui-helper-hidden-accessible").remove()
					}
				})
			})
		};
	r();
	var d = {},
		f = function() {
			$(".autocomplete_class:not(.ui-autocomplete-input)").live("focus", function(e) {
				var n = $(this);
				n.autocomplete({
					minLength: 1,
					source: function(e, i) {
						var r = e.term;
						r in d ? i(d[r]) : $.getJSON("/questions/getstrclasses/?time=" + (new Date).getTime(), e, function(e, t, n) {
							d[r] = e, i(e)
						})
					},
					create: function(e, t) {
						n.next(".ui-helper-hidden-accessible").remove()
					}
				})
			})
		};
	f();
	var p = {},
		_ = function() {
			$(".autocomplete_section:not(.ui-autocomplete-input)").live("focus", function(e) {
				var n = $(this);
				n.autocomplete({
					minLength: 1,
					source: function(e, i) {
						var r = e.term;
						r in p ? i(p[r]) : $.getJSON("/questions/getstrsections/?time=" + (new Date).getTime(), e, function(e, t, n) {
							p[r] = e, i(e)
						})
					},
					create: function(e, t) {
						n.next(".ui-helper-hidden-accessible").remove()
					}
				})
			})
		};
	_();
	var h = {},
		m = function() {
			$(".autocomplete_topic:not(.ui-autocomplete-input)").live("focus", function(e) {
				var n = $(this);
				n.autocomplete({
					minLength: 1,
					source: function(e, i) {
						var r = e.term;
						r in h ? i(h[r]) : $.getJSON("/questions/getstrtopics/?time=" + (new Date).getTime(), e, function(e, t, n) {
							h[r] = e, i(e)
						})
					},
					create: function(e, t) {
						n.next(".ui-helper-hidden-accessible").remove()
					}
				})
			})
		};
	m();
	var g = $("#create_curi_topic_wizard");
	if(g.length) {
		var v = 0,
			y = g.attr("data-sch_topic_id"),
			b = g.attr("data-wizard_2"),
			w = $("#create_curi_topic_wizard_0"),
			x = $("#create_curi_topic_wizard_1"),
			C = $("#create_curi_topic_wizard_2"),
			T = $("#create_curi_topic_wizard_3"),
			S = $("#create_curi_topic_wizard_open_btn"),
			k = function(e) {
				g.removeClass("wizard_start").removeClass("wizard_0").removeClass("wizard_1").removeClass("wizard_2").removeClass("wizard_3").removeClass("wizard_4").removeClass("wizard_loading").addClass(e)
			},
			q = function() {
				k("wizard_loading"), $.ajax({
					url: "/questions/closewizard/?time=" + (new Date).getTime(),
					data: "sch_topic_id=" + y,
					dataType: "json",
					type: "post",
					success: function(e, t) {
						k("wizard_4")
					},
					error: function(e, t) {
						k("wizard_4")
					}
				})
			},
			D = function() {
				k("wizard_loading"), $.ajax({
					url: "/questions/wizard3/?time=" + (new Date).getTime(),
					data: "sch_topic_id=" + y + "&wizard_value=" + v,
					dataType: "json",
					type: "post",
					success: function(e, t) {
						T.find(".wizard_container").html(e.html), $(".topic_search_ajax_box").length ? E() : r(), k("wizard_3")
					},
					error: function(e, t) {
						q()
					}
				})
			},
			E = function() {
				var e;

				function n() {
					var a = $(".topic_search_ajax_box");
					a.removeClass("error"), $.ajax({
						url: "/str/searchtopics/?time=" + (new Date).getTime(),
						data: $(".topic_search_ajax_box form").serialize(),
						dataType: "json",
						type: "post",
						success: function(e, t) {
							if(a.removeClass("loading").removeClass("error"), "" == e.title) {
								$(".topic_search_info_edit").hide();
								var n = "",
									i = "0",
									r = "0";
								$(".topic_search_info").hide()
							} else {
								$(".topic_search_info_edit").show();
								n = e.section_title + "<br>" + e.subject_title + ", " + e.class_title, i = e.questions_count, r = e.ksa_count;
								$(".topic_search_info").show()
							}
							$(".topic_search_info").html(n), $(".topic_search_stat_q").html(i), $(".topic_search_stat_k").html(r), $("#subject_search_title").val(e.subject_title), $("#class_search_title").val(e.class_title), $("#section_search_title").val(e.section_title)
						},
						error: function(e, t) {
							a.removeClass("loading").addClass("error")
						}
					})
				}
				$("#topic_search_title").bind("textchange", function() {
					clearTimeout(e), $(".topic_search_info_edit").hide(), $(".topic_search_stat_q").html("&mdash;"), $(".topic_search_stat_k").html("&mdash;"), $(".topic_search_info").html("Поиск ..."), $(".topic_search_info").show();
					e = setTimeout(function() {
						n()
					}, 1e3)
				}), $("a.topic_search_info_edit").click(function() {
					$(".topic_search_info_edit").hide(), $(".topic_search_info").hide(), $(".topic_search_stat").hide(), $(".topic_search_info_hide").show(), $(".topic_search_additional").show()
				});
				var t = function() {
					var e = $("#topic_search_title").val(),
						t = $("#subject_search_title").val(),
						n = $("#class_search_title").val(),
						i = $("#section_search_title").val();
					if("" != e && "" != t && "" != n && "" != i) {
						var r = i + "<br>" + t + ", " + n;
						$(".topic_search_info").html(r), $(".topic_search_info_edit").show(), $(".topic_search_info").show(), $(".topic_search_stat_q").html("&mdash;"), $(".topic_search_stat_k").html("&mdash;")
					} else "" != e && $("#topic_search_title").trigger("textchange");
					$(".topic_search_stat").show(), $(".topic_search_info_hide").hide(), $(".topic_search_additional").hide()
				};
				if($("a.topic_search_info_hide").click(t), $("#topic_search_title").on("focus", t), $("#topic_search_title").length) {
					var a = {};
					$("#topic_search_title").autocomplete({
						minLength: 1,
						select: function(e, t) {
							$("#topic_search_title").val(t.item.value), n()
						},
						source: function(e, i) {
							var r = e.term;
							r in a ? i(a[r]) : $.getJSON("/questions/getstrtopics/?time=" + (new Date).getTime(), e, function(e, t, n) {
								a[r] = e, i(e)
							})
						},
						create: function(e, t) {
							$("#topic_search_title").next(".ui-helper-hidden-accessible").remove()
						}
					})
				}
				r(), f(), _(), $(".topic_search_ajax_box form").submit(function(e) {
					e.preventDefault;
					var t = $("#topic_search_title");
					if("" == t.val()) t.focus();
					else {
						var n = $("#subject_search_title").val(),
							i = $("#class_search_title").val(),
							r = $("#section_search_title").val();
						"" == n || "" == i || "" == r ? ($(".topic_search_info_edit").hide(), $(".topic_search_info_hide").show(), $(".topic_search_info").hide(), $(".topic_search_stat").hide(), $(".topic_search_additional").show(), "" == n ? $("#subject_search_title").focus() : "" == i ? $("#class_search_title").focus() : "" == r && $("#section_search_title").focus()) : (k("wizard_loading"), $.ajax({
							url: "/questions/addtopictopic/?time=" + (new Date).getTime(),
							data: $("#topic_search_form").serialize(),
							dataType: "json",
							type: "post",
							success: function(e, t) {
								v = $("#topic_search_form input[name=wizard_value]").val(), D()
							},
							error: function(e, t) {
								v = $("#topic_search_form input[name=wizard_value]").val(), D()
							}
						}))
					}
					return !1
				}), $(".delete_topic_topic").click(function(e) {
					e.preventDefault;
					var t = $(this).attr("data-id"),
						n = $(this).attr("data-questions"),
						i = "Удалить из содержания эту тему?";
					return 0 < n && (i = "При удалении этой темы из содержания пропадут " + n + " вопрос(а/ов), связанный(ые) с ней. Удалить?"), confirm(i) && (k("wizard_loading"), $.ajax({
						url: "/questions/deletetopictopic/?time=" + (new Date).getTime(),
						data: "sch_topic_id=" + y + "&str_topic_id=" + t,
						dataType: "json",
						type: "post",
						success: function(e, t) {
							v = $("#topic_search_form input[name=wizard_value]").val(), D()
						},
						error: function(e, t) {
							v = $("#topic_search_form input[name=wizard_value]").val(), D()
						}
					})), !1
				})
			};
		$(".topic_search_ajax_box").length && E(), g.find("form.close_wizard").submit(function(e) {
			return e.preventDefault, q(), !1
		}), w.length && w.find("form.next_wizard").submit(function(e) {
			return e.preventDefault, 0 < $("#create_curi_topic_wizard0_form").find("input[type=checkbox]:checked").length ? (k("wizard_loading"), $.ajax({
				url: "/questions/wizard0/?time=" + (new Date).getTime(),
				data: $("#create_curi_topic_wizard0_form").serialize(),
				dataType: "json",
				type: "post",
				success: function(e, t) {
					k("wizard_4")
				},
				error: function(e, t) {
					k("wizard_1")
				}
			})) : (k("wizard_loading"), $.ajax({
				url: "/questions/updatetopicwizard/?time=" + (new Date).getTime(),
				data: "sch_topic_id=" + y + "&wizard_step=3",
				dataType: "json",
				type: "post",
				success: function(e, t) {
					k("wizard_1")
				},
				error: function(e, t) {
					k("wizard_1")
				}
			})), !1
		}), x.length && (x.find("input[type=radio], label").click(function() {
			x.find("button").removeAttr("disabled")
		}), x.find("form.next_wizard").submit(function(e) {
			return e.preventDefault, "1" == (v = x.find("input[name=wizard1]:checked").val()) ? (k("wizard_loading"), $.ajax({
				url: "/questions/wizard1/?time=" + (new Date).getTime(),
				data: "sch_topic_id=" + y + "&wizard_value=" + v,
				dataType: "json",
				type: "post",
				success: function(e, t) {
					k("1" == b ? "wizard_2" : "wizard_4")
				},
				error: function(e, t) {
					k("wizard_1")
				}
			})) : "2" == v ? D() : "3" == v ? D() : "4" == v && D(), !1
		})), C.length && (C.find("input[type=radio], label").click(function() {
			C.find("button").removeAttr("disabled")
		}), C.find("form.next_wizard").submit(function(e) {
			return e.preventDefault, "5" == (v = C.find("input[name=wizard2]:checked").val()) && q(), "6" == v && (D(), T.find(".span4 p").toggle()), !1
		})), T.length && T.find("form.next_wizard").submit(function(e) {
			return e.preventDefault, "6" == (v = $("#topic_search_form input[name=wizard_value]").val()) ? (v = 0, $("#topic_search_form input[name=wizard_value]").val(v), k("wizard_loading"), $.ajax({
				url: "/questions/addtopictopic/?time=" + (new Date).getTime(),
				data: $("#topic_search_form").serialize(),
				dataType: "json",
				type: "post",
				success: function(e, t) {
					k("wizard_loading"), $.ajax({
						url: "/questions/updatetopicwizard/?time=" + (new Date).getTime(),
						data: "sch_topic_id=" + y + "&wizard_step=6",
						dataType: "json",
						type: "post",
						success: function(e, t) {
							k("wizard_4")
						},
						error: function(e, t) {
							k("wizard_4")
						}
					})
				},
				error: function(e, t) {
					k("wizard_loading"), $.ajax({
						url: "/questions/updatetopicwizard/?time=" + (new Date).getTime(),
						data: "sch_topic_id=" + y + "&wizard_step=6",
						dataType: "json",
						type: "post",
						success: function(e, t) {
							k("wizard_4")
						},
						error: function(e, t) {
							k("wizard_4")
						}
					})
				}
			})) : (k("wizard_loading"), $.ajax({
				url: "/questions/updatetopicwizard/?time=" + (new Date).getTime(),
				data: "sch_topic_id=" + y + "&wizard_step=6",
				dataType: "json",
				type: "post",
				success: function(e, t) {
					k("wizard_4")
				},
				error: function(e, t) {
					k("wizard_4")
				}
			})), !1
		}), S.length && S.click(function() {
			return $(this).toggleClass("active"), $(this).find("i").toggleClass("icon-wrench").toggleClass("icon-remove"), $(this).hasClass("active") ? (D(), g.removeClass("wizard_close")) : g.addClass("wizard_close"), !1
		});
		g.hasClass("wizard_start") && setTimeout(function() {
			$.ajax({
				url: "/questions/autowizard/?time=" + (new Date).getTime(),
				data: "sch_topic_id=" + y,
				dataType: "json",
				type: "post",
				success: function(e, t) {
					"1" == e.type ? k("wizard_4") : "2" == e.type ? (w.find(".wizard_container").html(e.html), k("wizard_0")) : k("wizard_1")
				},
				error: function(e, t) {
					q()
				}
			})
		}, 1e3)
	}
	if($(".additional_info__more, .additional_info__hide").live("click", function(e) {
			var t = $(this).parents(".additional_info__open"),
				n = t.parents(".question");
			n.hasClass("question-loading") || 0 != $(e.target).parents(".onoffswitch, .jp-audio, button, .gallery").length || 0 != $(e.target).filter("label, button, [role=button], [type=button], [type=submit], [type=text], [type=reset], [type=checkbox], select").length || "checkbox" == $(e.target).attr("type") || (t.hasClass("opened") ? (t.removeClass("opened"), n.find(".additional_info").hide("normal")) : (t.addClass("opened"), n.find(".additional_info").show("normal")))
		}), $("tr.question").live("click", function(e) {
			var t = $(this);
			t.hasClass("question-loading") || 0 != $(e.target).parents(".onoffswitch, .jp-audio, button, .gallery").length || 0 != $(e.target).filter("a, label, button, [role=button], [type=button], [type=submit], [type=text], [type=reset], [type=checkbox], select").length || "checkbox" == $(e.target).attr("type") || (t.hasClass("opened") ? (t.removeClass("opened"), t.find(".additional_info").hide("normal")) : (t.addClass("opened"), t.find(".additional_info").show("normal")))
		}), "undefined" != typeof is_question && is_question) {
		var A = new Date;
		test_start_time = A.getTime(), test_timer = setInterval(function() {
			testCountUp($("#question_panel .test_time"), !0, "test")
		}, 1e3), question_timer = setInterval(function() {
			testCountUp($("#question_panel .question_time"), !1, "question")
		}, 1e3)
	}
	if("undefined" != typeof is_system_time && is_system_time) {
		A = new Date;
		system_start_time = A.getTime(), system_timer = setInterval("systemCountUp()", 1e3)
	}
	$(".question_type_8").find("[data-toggle=buttons-radio] button.btn").live("click", function() {
		$(this).parents("[data-toggle=buttons-radio]").find("button.btn").removeClass("btn-success").find("i").removeClass("icon-white"), $(this).hasClass("btn-success") || $(this).addClass("btn-success").find("i").addClass("icon-white")
	}), $(".question_type_8").find("[data-toggle=buttons-checkbox] button.btn").live("click", function() {
		$(this).hasClass("btn-success") ? ($(this).removeClass("btn-success"), $(this).find("i").removeClass("icon-white")) : ($(this).addClass("btn-success"), $(this).find("i").addClass("icon-white"))
	}), $("#question_answer").find("div[data-toggle=buttons-radio] button.btn").live("click", function() {
		$(this).parents("div").find("button.btn").removeClass("btn-success").find("i").removeClass("icon-white"), $(this).hasClass("btn-success") || $(this).addClass("btn-success").find("i").addClass("icon-white"), $(this).parents("div").find(".question_answer_table_1_2__row").removeClass("question_answer_table_1_2__row-active"), $(this).parents(".question_answer_table_1_2__row").toggleClass("question_answer_table_1_2__row-active")
	}), $("#question_answer").find("div[data-toggle=buttons-checkbox] button.btn").live("click", function() {
		$(this).hasClass("btn-success") ? ($(this).removeClass("btn-success"), $(this).find("i").removeClass("icon-white")) : ($(this).addClass("btn-success"), $(this).find("i").addClass("icon-white")), $(this).parents(".question_answer_table_1_2__row").toggleClass("question_answer_table_1_2__row-active")
	}), $(".question_answer_table_1_2").live("click", function(e) {
		0 == $(e.target).parents("button.btn, .gallery").length && 0 == $(e.target).filter("button.btn, .gallery").length && $(this).find("button.btn").click()
	});
	var j = !1;
	$("#next_question_form, .next_question_form").live("submit", function() {
		if(j) return !1;
		j = !0;
		var e, r = "",
			t = $("#question_answer button.btn");
		if(0 < t.filter(".active").length && t.filter(".active").each(function() {
				"" == r ? r = "answer=" + $(this).attr("data-id") : r += "," + $(this).attr("data-id")
			}), 0 < (e = $("#question_type_3")).length) {
			var n = "";
			e.find("li").each(function(e) {
				var t = $(this).attr("data-id");
				"" != n && (n += ","), n += t
			}), r = "answer=" + n
		}
		if(0 < (e = $("#question_type_4_1")).length) {
			n = "";
			e.find("li").each(function(e) {
				var t = $(this).attr("data-id");
				"" != n && (n += ","), n += t
			}), r += "answer1=" + n
		}
		if(0 < (e = $("#question_type_4_2")).length) {
			n = "";
			e.find("li").each(function(e) {
				var t = $(this).attr("data-id");
				"" != n && (n += ","), n += t
			}), r += "&answer2=" + n
		}
		var i = $("#question_type_5");
		0 < i.length && (r = "answer=" + i.val());
		var a = $("#question_type_8");
		0 < a.length && (r = a.serialize(), a.find(".question_type_8_answer").each(function(e) {
			var t = $(this).attr("data-q"),
				n = $(this).find("button.btn"),
				i = [];
			0 < n.filter(".active").length && n.filter(".active").each(function() {
				i.push($(this).attr("data-id"))
			}), "" != r && (r += "&"), r += "answer_" + t + "=" + i.join(",")
		}));
		var s = $("#question_answer");
		0 < s.find("#question_type_11").length && (r = s.serialize());
		var o = "";
		if(o = "undefined" == typeof language || "ru" == language ? "Вы не ответили на текущий вопрос. Вы уверены, что хотите перейти к следующему вопросу?" : "You haven't answered the current question. Are you sure you want to go to the next question?", !("" != r && "answer=" != r || confirm(o))) return j = !1;
		$(".question_loading").show(), $(this).parent().parent().find(".buttons").hide(), $(this).parent().parent().find(".buttons_next").show(), $.each(jplayers_testing, function(e, t) {
			$(t).jPlayer("clearMedia"), $(t).jPlayer("destroy")
		}), jplayers_testing = [], $.post("/testing/next_question/?time=" + (new Date).getTime(), r, function(e) {
			if("[]" != e) try {
				if(null != (e = jQuery.parseJSON(e)).time) {
					var t = new Date;
					test_start_time = t.getTime()
				}
				$("#testing_container").html(e.html), init_question_type_3(), setTimeout(colorboxInit, 500)
			} catch(e) {
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("testing_error")
				} catch(e) {
					console.log(e.toString())
				}
				alert("Ошибка :( Попробуйте ответить на вопрос ещё раз."), location.reload(!0)
			} else {
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("testing_reload")
				} catch(e) {
					console.log(e.toString())
				}
				alert("Ошибка :( Возможно, Вы уже завершили тест или Ваша сессия на сайте истекла. Например, это могло произойти из-за смены IP Вашего устройства. Если Вы решали тест под своим аккаунтом, то сможете его завершить. Для этого необходимо ещё раз авторизоваться."), location.reload(!0)
			}
			j = !1
		})
	}), $("#finish_test_form, .finish_test_form").live("submit", function() {
		var e = "";
		e = "undefined" == typeof language || "ru" == language ? "Вы уверены, что хотите завершить тестирование?" : "Are you sure you want to finish the test?";
		var t, r = "",
			n = $("#question_answer button.btn");
		if(0 < n.filter(".active").length && n.filter(".active").each(function() {
				"" == r ? r = "answer=" + $(this).attr("data-id") : r += "," + $(this).attr("data-id")
			}), 0 < (t = $("#question_type_3")).length) {
			var i = "";
			t.find("li").each(function(e) {
				var t = $(this).attr("data-id");
				"" != i && (i += ","), i += t
			}), r = "answer=" + i
		}
		if(0 < (t = $("#question_type_4_1")).length) {
			i = "";
			t.find("li").each(function(e) {
				var t = $(this).attr("data-id");
				"" != i && (i += ","), i += t
			}), r += "answer1=" + i
		}
		if(0 < (t = $("#question_type_4_2")).length) {
			i = "";
			t.find("li").each(function(e) {
				var t = $(this).attr("data-id");
				"" != i && (i += ","), i += t
			}), r += "&answer2=" + i
		}
		var a = $("#question_type_5");
		0 < a.length && (r = "answer=" + a.val());
		var s = $("#question_type_8");
		0 < s.length && (r = s.serialize(), s.find(".question_type_8_answer").each(function(e) {
			var t = $(this).attr("data-q"),
				n = $(this).find("button.btn"),
				i = [];
			0 < n.filter(".active").length && n.filter(".active").each(function() {
				i.push($(this).attr("data-id"))
			}), "" != r && (r += "&"), r += "answer_" + t + "=" + i.join(",")
		}));
		var o = $("#question_answer");
		if(0 < o.find("#question_type_11").length && (r = o.serialize()), e = "" != r && "answer=" != r ? "undefined" == typeof language || "ru" == language ? "Вы уверены, что хотите завершить тестирование?" : "Are you sure you want to finish the test?" : "undefined" == typeof language || "ru" == language ? "Вы не ответили на текущий вопрос. Вы уверены, что хотите завершить тестирование?" : "You haven't answered the current question. Are you sure you want to finish the test?", !confirm(e)) return !1;
		$(".question_loading").show(), $(this).parent().parent().find(".buttons").hide(), $(this).parent().parent().find(".buttons_finish").show(), $.each(jplayers_testing, function(e, t) {
			$(t).jPlayer("clearMedia"), $(t).jPlayer("destroy")
		}), jplayers_testing = [], $.post("/testing/finish/yes/json/?time=" + (new Date).getTime(), r, function(e) {
			if("[]" != e) try {
				e = jQuery.parseJSON(e), clearInterval(test_timer), clearInterval(question_timer), $("#testing_container").html(e.html), init_question_type_3(), setTimeout(colorboxInit, 500), countdown_timer_init()
			} catch(e) {
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("testing_error")
				} catch(e) {
					console.log(e.toString())
				}
				alert("Ошибка :( Попробуйте ответить на вопрос и завершить тест ещё раз."), location.reload(!0)
			} else {
				try {
					"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("testing_reload")
				} catch(e) {
					console.log(e.toString())
				}
				alert("Ошибка :( Возможно, Вы уже завершили тест или Ваша сессия на сайте истекла. Например, это могло произойти из-за смены IP Вашего устройства. Если Вы решали тест под своим аккаунтом, то сможете его завершить. Для этого необходимо ещё раз авторизоваться."), location.reload(!0)
			}
		})
	})
}(function() {
	"use strict";
	$("[rel=tooltip]").tooltip(), $(".hover_info .hover_info__label").live("click", function() {
		var e = $(this).parents(".hover_info");
		e.hasClass("hover_info__opened") ? e.removeClass("hover_info__opened") : ($(".hover_info").removeClass("hover_info__opened"), e.addClass("hover_info__opened"))
	}), $(".hover_info__close").live("click", function() {
		$(this).parents(".hover_info").removeClass("hover_info__opened")
	}), $(".hover_info").live("mouseover", function() {
		$(this).addClass("hover_info__opened")
	}).live("mouseout", function() {
		$(this).removeClass("hover_info__opened")
	}), $.datepicker.regional.ru = {
		closeText: "Закрыть",
		prevText: "&#x3c;Пред",
		nextText: "След&#x3e;",
		currentText: "Сегодня",
		monthNames: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"],
		monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
		dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
		dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		weekHeader: "Нед",
		dateFormat: "dd MM",
		firstDay: 1,
		isRTL: !1,
		showMonthAfterYear: !1,
		yearSuffix: ""
	}, $.datepicker.setDefaults($.datepicker.regional.ru), $(".date_from_title").datepicker({
		dateFormat: "d MM yy",
		altField: $(".date_from"),
		altFormat: "yy-mm-dd 00:00:00",
		changeMonth: !1,
		changeYear: !1,
		numberOfMonths: 1,
		onClose: function(e) {
			$(".date_to_title").datepicker("option", "minDate", e)
		}
	}), $(".date_to_title").datepicker({
		dateFormat: "d MM yy",
		altField: $(".date_to"),
		altFormat: "yy-mm-dd 23:59:59",
		changeMonth: !1,
		changeYear: !1,
		numberOfMonths: 1,
		onClose: function(e) {
			$(".date_from_title").datepicker("option", "maxDate", e)
		}
	}), $(".date_start_title").datepicker({
		minDate: "+0d",
		dateFormat: "d MM yy",
		altField: $(".date_start"),
		altFormat: "yy-mm-dd 23:59:59",
		changeMonth: !1,
		changeYear: !1,
		numberOfMonths: 1,
		onClose: function(e) {
			$(".date_stop_title").datepicker("option", "minDate", e)
		}
	}), $(".date_stop_title").datepicker({
		minDate: "+0d",
		dateFormat: "d MM yy",
		altField: $(".date_stop"),
		altFormat: "yy-mm-dd 23:59:59",
		changeMonth: !1,
		changeYear: !1,
		numberOfMonths: 1,
		onClose: function(e) {
			$(".date_start_title").datepicker("option", "maxDate", e)
		}
	}), $(".date_time_title").datetimepicker({
		minDate: "+0d",
		dateFormat: "d MM yy",
		altField: $(".date_time_value"),
		altFormat: "yy-mm-dd",
		changeMonth: !1,
		changeYear: !1,
		numberOfMonths: 1,
		timeFormat: "в HH:mm",
		altTimeFormat: "HH:mm:00",
		altFieldTimeOnly: !1,
		timeOnlyTitle: "Выберите время",
		timeText: "Время",
		hourText: "Часы",
		minuteText: "Минуты",
		secondText: "Секунды",
		millisecText: "Миллисекунды",
		timezoneText: "Часовой пояс",
		currentText: "Сейчас",
		closeText: "Закрыть",
		showButtonPanel: !1
	}), $(".date_time_without_min_date").each(function() {
		$(this).find(".date_time_without_min_date_title").datetimepicker({
			dateFormat: "d MM yy",
			altField: $(this).find(".date_time_without_min_date_value"),
			altFormat: "yy-mm-dd",
			changeMonth: !1,
			changeYear: !1,
			numberOfMonths: 1,
			timeFormat: "в HH:mm",
			altTimeFormat: "HH:mm:00",
			altFieldTimeOnly: !1,
			timeOnlyTitle: "Выберите время",
			timeText: "Время",
			hourText: "Часы",
			minuteText: "Минуты",
			secondText: "Секунды",
			millisecText: "Миллисекунды",
			timezoneText: "Часовой пояс",
			currentText: "Сейчас",
			closeText: "Закрыть",
			showButtonPanel: !1
		})
	}), $(".add_window, #edit_pupil").on("hidden", function() {
		$(this).find("form")[0].reset(), $(this).find(".progress").hide(), $(this).find(".alert-success").hide(), $(this).find(".alert-error").hide(), $(this).find(".after_submit_buttons").hide(), $(this).find(".modal_container").show(), $(this).find(".before_submit_buttons").show()
	}), $(".add_window").find("form").live("submit", function() {
		return $(this).find(".before_submit_buttons").hide(), $(this).find(".after_submit_buttons").show(), $(this).find(".modal_container").hide(), $(this).find(".progress").show(), $(this).find(".alert-success").show(), $(this).find(".alert-error").show(), !1
	}), $("#edit_pupil").find("form").live("submit", function() {
		return $(this).find(".before_submit_buttons").hide(), $(this).find(".after_submit_buttons").show(), $(this).find(".modal_container").hide(), $(this).find(".progress").show(), $(this).find(".alert-success").show(), $(this).find(".alert-error").show(), !1
	});
	var n = "";
	1 == $("#wrap.add_sch_training").length && (n = $("#wrap.add_sch_training")), 1 == $("#wrap.add_assignment").length && (n = $("#wrap.add_assignment")), 1 == $("#wrap.topics_for_questions").length && (n = $("#wrap.topics_for_questions")), 1 == $("#wrap.add_edit_curriculum_topics").length && (n = $("#wrap.add_edit_curriculum_topics")), "" != n && (n.find("div[data-toggle=buttons-checkbox] button.btn").live("click", function() {
		$(this).hasClass("btn-success") ? ($(this).removeClass("btn-success"), $(this).find("i").removeClass("icon-white")) : ($(this).addClass("btn-success"), $(this).find("i").addClass("icon-white"))
	}), n.find("div[data-toggle=buttons-radio] button.btn").live("click", function() {
		$(this).parent().parent("div").find("button.btn").removeClass("btn-success"), $(this).parent().parent("div").find("button.btn i").removeClass("icon-white"), $(this).hasClass("btn-success") || ($(this).addClass("btn-success"), $(this).find("i").addClass("icon-white"))
	}), n.find("#subjects button.btn").live("click", function() {
		if(!$(this).hasClass("active")) {
			var e = n.find("#sections > div");
			e.hide(), e.find("button.btn").removeClass("active").removeClass("btn-success"), e.find("i").removeClass("icon-white");
			var t = n.find("#subject_classes > div");
			t.hide(), t.filter("[data-subject=" + $(this).attr("data-id") + "]").show(), e.parents(".span12").find(".alert-error").hide()
		}
	}), n.find("#subject_classes button.btn").live("click", function() {
		if(!$(this).hasClass("active")) {
			var e = n.find("#sections > div");
			e.hide(), e.filter("[data-subject_class=" + n.find("#subjects button.btn.active").attr("data-id") + "_" + $(this).attr("data-id") + "]").show()
		}
	}), n.find("#curriculums button.btn").live("click", function() {
		if(!$(this).hasClass("active")) {
			var e = n.find("#curriculum_topics > div");
			e.hide(), e.find("button.btn").removeClass("active").removeClass("btn-success"), e.find("i").removeClass("icon-white"), e.filter("[data-curriculum=" + $(this).attr("data-id") + "]").show()
		}
	}), $("#add_assignment_form").live("submit", function(e) {
		for(var t = !0, n = "", i = ["title", "date_stop"], r = 0; r < i.length; r++) {
			var a = $(this).find("input[name=" + i[r] + "]"),
				s = a.parents("div");
			s.removeClass("error"), t && "" == a.val() && ("date_stop" != i[r] ? a.focus() : $(this).find("input[name=date_stop_title]").focus(), s.addClass("error"), t = !1)
		}
		var o, l, c = "",
			u = "",
			d = "";
		((l = (o = $(this).find("#school_classes button.btn")).parents(".span12").find(".alert-error")).hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == c ? c = $(this).attr("data-id") : c += "," + $(this).attr("data-id")
		}), "" == c && (l.show(), t && (n = l.text()), t = !1), (l = (o = $(this).find("#curriculums button.btn")).parents(".span12").find(".alert-error")).hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == u ? u = $(this).attr("data-id") : u += "," + $(this).attr("data-id")
		}), "" == u && (l.show(), t && (n = l.text()), t = !1), "" != u) && ((l = (o = $(this).find("#curriculum_topics button.btn")).parents(".span12").find(".alert-error")).hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == d ? d = $(this).attr("data-id") : d += "," + $(this).attr("data-id")
		}), "" == d && (l.show(), t && (n = l.text()), t = !1));
		return t ? ($(this).find("input[name=school_classes]").val(c), $(this).find("input[name=curriculums]").val(u), $(this).find("input[name=curriculum_topics]").val(d), $(this).find("button[type=submit]").button("loading")) : $("html, body").animate({
			scrollTop: 0
		}, 0), "" != n && alert(n), t
	}), $("#add_sch_training_form").live("submit", function(e) {
		for(var t = !0, n = "", i = ["title"], r = 0; r < i.length; r++) {
			var a = $(this).find("input[name=" + i[r] + "]"),
				s = a.parents("div");
			s.removeClass("error"), t && "" == a.val() && (a.focus(), s.addClass("error"), t = !1)
		}
		var o, l, c = "",
			u = "";
		((l = (o = $(this).find("#curriculums button.btn")).parents(".span12").find(".alert-error")).hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == c ? c = $(this).attr("data-id") : c += "," + $(this).attr("data-id")
		}), "" == c && (l.show(), t && (n = l.text()), t = !1), "" != c) && ((l = (o = $(this).find("#curriculum_topics button.btn")).parents(".span12").find(".alert-error")).hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == u ? u = $(this).attr("data-id") : u += "," + $(this).attr("data-id")
		}), "" == u && (l.show(), t && (n = l.text()), t = !1));
		return t && ($(this).find("input[name=curriculums]").val(c), $(this).find("input[name=curriculum_topics]").val(u), $(this).find("button[type=submit]").button("loading")), "" != n && alert(n), t
	}), $("#add_edit_curriculum_topics_form").live("submit", function(e) {
		for(var t = !0, n = "", i = ["title"], r = 0; r < i.length; r++) {
			var a = $(this).find("input[name=" + i[r] + "]"),
				s = a.parents("div");
			s.removeClass("error"), t && "" == a.val() && ("date_stop" != i[r] ? a.focus() : $(this).find("input[name=date_stop_title]").focus(), s.addClass("error"), t = !1)
		}
		var o, l, c = "",
			u = "",
			d = "";
		((l = (o = $(this).find("#subjects button.btn")).parents(".span12").find(".alert-error")).hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == c ? c = $(this).attr("data-id") : c += "," + $(this).attr("data-id")
		}), "" == c && (l.show(), t && (n = l.text()), t = !1), "" != c) && ((l = (o = $(this).find("#subject_classes button.btn")).parents(".span12").find(".alert-error")).hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == u ? u = $(this).attr("data-id") : u += "," + $(this).attr("data-id")
		}), "" == u && (l.show(), t && (n = l.text()), t = !1), "" != u && ((l = (o = $(this).find("#sections button.btn")).parents(".span12").find(".alert-error")).hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == d ? d = $(this).attr("data-id") : d += "," + $(this).attr("data-id")
		}), "" == d && (l.show(), t && (n = l.text()), t = !1)));
		return t ? ($(this).find("input[name=subject]").val(c), $(this).find("input[name=subject_class]").val(u), $(this).find("input[name=topics]").val(d), $(this).find("button[type=submit]").button("loading")) : $("html, body").animate({
			scrollTop: 0
		}, 0), "" != n && alert(n), t
	}));
	var i = 0;
	$(".modal").on("show", function() {
		if(!$(this).hasClass("in")) {
			var e = $(document).height();
			document.body.clientHeight < e && $("body").css("overflow-y", "scroll"), $("html, body").css("height", "auto"), $("body").css("min-height", "100%"), i = -window.scrollY, $(".banner_top").css("position", "fixed"), $(".banner_top").css("top", i + "px");
			var t = parseInt($(".banner_top").outerHeight());
			0 < t || (t = 0), $("#basic_wrap").css("position", "fixed"), $("#basic_wrap").css("top", i + t + "px");
			var n = parseInt($("#basic_wrap").outerHeight());
			$(".page_footer").css("position", "fixed"), $(".page_footer").css("top", i + t + n + "px"), scroll(0, 0), $(".modal").find("input[type=text], select, textarea").each(function(e) {
				$(this).attr("tabindex", e + 100)
			})
		}
		$(window).scroll()
	}), $(".modal").on("hidden", function() {
		$(this).hasClass("in") || ($("html, body").css("height", "100%"), $("body").css("min-height", "none"), $(".banner_top").css("position", "static"), $(".banner_top").css("top", "0px"), $("#basic_wrap").css("position", "static"), $("#basic_wrap").css("top", "0px"), $(".page_footer").css("position", "relative"), $(".page_footer").css("top", "0px"), scroll(0, -i), $("body").css("overflow-y", "auto"));
		var e = window.scrollY;
		$(window).resize(), scroll(0, e)
	}), $(".open_microsoft_office_online").live("click", function() {
		var e = $(this),
			t = e.attr("href"),
			n = e.attr("data-title"),
			i = e.attr("data-type"),
			r = $("#ajax_iframe_open_window");
		return $("#" + r.attr("aria-labelledby")).text(n), r.find(".modal_container").html('<iframe src="https://view.officeapps.live.com/op/' + i + ".aspx?src=" + t + '&wdAr=1.7777777777777777" frameborder="0" style="width: 100%; display: block; height: 500px; background: #bbbbbb;"></iframe>'), r.modal("show"), !1
	}), $(".open_pdf").live("click", function() {
		var e = $(this),
			t = e.attr("href"),
			n = e.attr("data-title"),
			i = $("#ajax_iframe_open_window");
		return $("#" + i.attr("aria-labelledby")).text(n), i.find(".modal_container").html('<iframe src="' + t + '" frameborder="0" style="width: 100%; display: block; height: 500px; background: #bbbbbb;"></iframe>'), i.modal("show"), !1
	}), $("#wrap.add_edit_class div[data-toggle=buttons-checkbox] button.btn").live("click", function() {
		$(this).hasClass("btn-success") ? ($(this).removeClass("btn-success"), $(this).find("i").removeClass("icon-white")) : ($(this).addClass("btn-success"), $(this).find("i").addClass("icon-white"))
	}), $("#add_edit_class_form").live("submit", function(e) {
		for(var t = !0, n = ["title"], i = 0; i < n.length; i++) {
			var r = $(this).find("input[name=" + n[i] + "]"),
				a = r.parents("div");
			a.removeClass("error"), t && "" == r.val() && (r.focus(), a.addClass("error"), t = !1)
		}
		var s = "",
			o = $("#wrap.add_edit_class #pupils button.btn");
		return o.parents(".span12").find(".alert-error").hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == s ? s = $(this).attr("data-id") : s += "," + $(this).attr("data-id")
		}), t ? ($(this).find("input[name=pupils]").val(s), $(this).find("button[type=submit]").button("loading")) : $("html, body").animate({
			scrollTop: 0
		}, 0), t
	}), $("#wrap.add_edit_curriculum div[data-toggle=buttons-checkbox] button.btn").live("click", function() {
		$(this).hasClass("btn-success") ? ($(this).removeClass("btn-success"), $(this).find("i").removeClass("icon-white")) : ($(this).addClass("btn-success"), $(this).find("i").addClass("icon-white"))
	}), $("#add_edit_curriculums_form").live("submit", function(e) {
		for(var t = !0, n = ["title"], i = 0; i < n.length; i++) {
			var r = $(this).find("input[name=" + n[i] + "]"),
				a = r.parents("div");
			a.removeClass("error"), t && "" == r.val() && (r.focus(), a.addClass("error"), t = !1)
		}
		var s = "",
			o = $(this).find("#school_classes button.btn");
		return o.parents(".span12").find(".alert-error").hide(), 0 < o.filter(".active").length && o.filter(".active").each(function() {
			"" == s ? s = $(this).attr("data-id") : s += "," + $(this).attr("data-id")
		}), t ? ($(this).find("input[name=school_classes]").val(s), $(this).find("button[type=submit]").button("loading")) : $("html, body").animate({
			scrollTop: 0
		}, 0), t
	}), $("#add_subjects_for_school_topic button").live("click", function() {
		var e = $("#add_subjects_for_school_topic select option:selected"),
			t = e.attr("value"),
			n = e.text(),
			i = $("#content_window_subject_for_school_topic").html(),
			r = $("#edit_subjects_for_school_topic");
		return $("#" + r.attr("aria-labelledby")).text(n), r.find(".modal_container").html(i), r.find(".modal_container > div").hide(), r.find(".modal_container > div[data-subject=" + t + "]").show(), r.modal("show"), !1
	}), $(".edit_subjects_for_school_topic_btn").live("click", function() {
		var e = $(this),
			t = e.attr("data-id"),
			n = e.attr("data-title"),
			i = $("#content_window_subject_for_school_topic").html(),
			r = $("#edit_subjects_for_school_topic");
		return $("#" + r.attr("aria-labelledby")).text(n), r.find(".modal_container").html(i), r.find(".modal_container > div").hide(), r.find(".modal_container > div[data-subject=" + t + "]").show(), r.modal("show"), !1
	}), $(".open_div_in_window").live("click", function() {
		var e = $(this),
			t = $("#window_for_open_div"),
			n = e.attr("data-id"),
			i = e.attr("data-title"),
			r = $("#" + n).html();
		return $("#" + t.attr("aria-labelledby")).text(i), t.find(".modal_container").html(r), t.modal("show"), !1
	}), $(".show_hidden_div").click(function() {
		var e = $(this),
			t = e.attr("data-id");
		$("#" + t).animate({
			height: "toggle"
		}, 350), e.toggleClass("active")
	})
}()), $(".add_topic_container input[type=text]").live("blur", function() {
	var e = $(this).parent().parent(),
		t = e.attr("data-section_id"),
		n = e.find(".add_topic").index($(this).parent()) + 1;
	if(0 < e.find(".add_topic").eq(n).size() && "" == $(this).val()) {
		for(var i = n; i < e.find(".add_topic").size(); i++) e.find(".add_topic").eq(i).find("input[type=checkbox]").attr("name", "new_ksa_check[" + t + "][" + (i - 1) + "]"), e.find(".add_topic").eq(i).find("input[type=text]").attr("name", "new_ksa_text[" + t + "][" + (i - 1) + "]");
		e.find(".add_topic").eq(n - 1).remove(), $(".modal").find("input[type=text], select, textarea").each(function(e) {
			$(this).attr("tabindex", e + 100)
		})
	}
}), $(".add_topic_container input[type=text]").live("focus keydown keyup blur", function() {
	var e = $(this).parent().parent(),
		t = e.attr("data-section_id"),
		n = e.find(".add_topic").index($(this).parent()) + 1;
	if(0 == e.find(".add_topic").eq(n).size() && "" != $(this).val()) {
		var i = '<div class="add_topic new_topic">';
		i += '<input type="checkbox" name="new_topic_check[' + t + "][" + n + ']">', i += '<input name="new_topic_text[' + t + "][" + n + ']" type="text" placeholder="добавить тему">', i += "</div>", e.find(".add_topic").eq(n - 1).removeClass("new_topic"), e.find(".add_topic").eq(n - 1).after(i), $(".modal").find("input[type=text], select, textarea").each(function(e) {
			$(this).attr("tabindex", e + 100)
		})
	} else 0 < e.find(".add_topic").eq(n).size() && "" == $(this).val() && 0 == e.find(".add_topic").eq(n + 1).size() && "" == e.find(".add_topic").eq(n).find("input[type=text]").val() && (e.find(".add_topic").eq(n).remove(), e.find(".add_topic").eq(n - 1).addClass("new_topic"), e.find(".add_topic").eq(n - 1).find("input[type=checkbox]").removeAttr("checked"), $(".modal").find("input[type=text], select, textarea").each(function(e) {
		$(this).attr("tabindex", e + 100)
	}))
}), $(".add_section_container input[type=text].add_section_input").live("blur", function() {
	var e = $(this).parent().parent(),
		t = e.attr("data-subject_id"),
		n = (e.attr("data-class_id"), e.find(".add_section").index($(this).parent()) + 1);
	if(0 < e.find(".add_section").eq(n).size() && "" == $(this).val()) {
		for(var i = n; i < e.find(".add_section").size(); i++) e.find(".add_section").eq(i).find("input[type=text].add_section_input").attr("name", "new_section_text[" + t + "][" + (i - 1) + "]");
		e.find(".add_section").eq(n - 1).remove(), $(".modal").find("input[type=text], select, textarea").each(function(e) {
			$(this).attr("tabindex", e + 100)
		})
	}
}), $(".add_section_container input[type=text].add_section_input").live("focus keydown keyup blur", function() {
	var e = $(this).parent().parent(),
		t = $(this).parents(".modal_container"),
		n = e.attr("data-subject_id"),
		i = e.attr("data-class_id"),
		r = t.find(".add_section").size() + 1,
		a = e.find(".add_section").index($(this).parent()) + 1;
	if(0 == e.find(".add_section").eq(a).size() && "" != $(this).val()) {
		var s = '<div class="add_section new_section">';
		s += '<input class="add_section_input" name="new_section_text[' + n + "][" + i + "][" + r + ']" type="text" placeholder="добавить раздел">', s += '<div class="add_topic_container" data-section_id="new_' + r + '">', s += '<div class="add_topic new_topic">', s += '<input type="checkbox" name="new_topic_check[new_' + r + '][0]"><input type="text" name="new_topic_text[new_' + r + '][0]" placeholder="добавить тему">', s += "</div></div>", s += "</div>", e.find(".add_section").eq(a - 1).removeClass("new_section"), e.find(".add_section").eq(a - 1).after(s), $(".modal").find("input[type=text], select, textarea").each(function(e) {
			$(this).attr("tabindex", e + 100)
		})
	} else 0 < e.find(".add_section").eq(a).size() && "" == $(this).val() && 0 == e.find(".add_section").eq(a + 1).size() && e.find(".add_section").eq(a).find("input[type=text]").val()
}), $("#new_question_window form").live("submit", function() {
	var r = $(this),
		e = !0;
	$(this).find(".alert").hide();
	var i = !1;
	$(this).find("input[type=checkbox]").each(function(e) {
		var t = $(this).attr("id");
		null == t || i || "ksa_" != t.substr(0, 4) || "checked" != $(this).attr("checked") || (i = !0);
		var n = $(this).attr("name");
		null == n || i || "new_ksa_check" != n.substr(0, 13) || "checked" != $(this).attr("checked") || (i = !0)
	});
	var t = $(this).find("#question_container textarea");
	return "" == t.val() ? (t.parent().find(".alert-error").show(), e = !1) : i ? 4 == $(this).find("select[name=question_type] option:selected").val() && 0 < $(this).find("div.error").size() && ($(this).find("div.error").parent().find(".alert-error").show(), e = !1) : ($("#ksa_container").parent().find(".alert-error").show(), e = !1), e ? ($(this).find(".before_submit_buttons").hide(), $(this).find(".after_submit_buttons").show(), $(this).find(".modal_container").hide(), $(this).find(".alert-success").hide(), $(this).find(".alert-error").hide(), $(this).find(".progress").show(), $.post("/questions/add/?time=" + (new Date).getTime(), $(this).serialize(), function(e) {
		if(e = jQuery.parseJSON(e), r.find(".progress").hide(), null != e.error) r.find(".alert-error").show();
		else if(null != $("#new_question_window").attr("data-reload")) location.reload(), r.find(".alert-success").show();
		else {
			var t = $("#new_question_window").attr("data-topic_id"),
				n = $("#topic_" + t),
				i = parseInt(n.attr("data-count"));
			i += 1, n.attr("data-count", i), n.find("span").text(i), r.find(".alert-success").show()
		}
	}).error(function() {
		r.find(".progress").hide(), r.find(".alert-error").show()
	})) : alert("Ошибка. Проверьте введённые данные."), !1
}), $(document).ready(function() {
	$('a[href^="#"]').on("click", function(e) {
		e.preventDefault();
		var t = this.hash,
			n = $(t);
		$("html, body").stop().animate({
			scrollTop: n.offset().top
		}, 900, "swing", function() {
			window.location.hash = t
		})
	}), $(".clear_on_blur").live("blur", function() {
		$(this).val("")
	}), $(".banner_top .banner_top__close").live("click", function(e) {
		e.preventDefault();
		var t = $(this).parents(".banner_top");
		t.find(".container").animate({
			opacity: "0"
		}, 700, function() {
			t.find(".banner_top__max").animate({
				height: "hide"
			}, 700), t.find(".banner_top__min").animate({
				height: "show"
			}, 700, function() {
				t.find(".container").animate({
					opacity: "1"
				}, 700)
			})
		});
		var n = t.data("banner_id"),
			i = {};
		i.id = n, i.status = 2, $.ajax({
			url: "/ajax/banner_top/?time=" + (new Date).getTime(),
			dataType: "json",
			data: i,
			type: "post"
		})
	});
	if(setTimeout(function() {
			$(".banner_top.banner_top-opening").animate({
				height: "show"
			}, 700, function() {
				$(".banner_top.banner_top-opening .container").animate({
					opacity: "1"
				}, 700)
			}), $(".banner_top.banner_top-opening").each(function(e) {
				var t = $(this).data("banner_id"),
					n = {};
				n.id = t, n.status = 1, $.ajax({
					url: "/ajax/banner_top/?time=" + (new Date).getTime(),
					dataType: "json",
					data: n,
					type: "post"
				})
			})
		}, 100), "4" == tinyMCE.majorVersion) tinymce.init({
		skin: "white",
		language: "ru",
		selector: ".mce4EditorEdit",
		inline: !0,
		relative_urls: !1,
		remove_script_host: !1,
		convert_urls: !1,
		element_format: "html",
		allow_script_urls: !0,
		plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste", "textcolor colorpicker"],
		toolbar: "undo redo | formatselect | table | bold italic strikethrough | bullist numlist | link | forecolor backcolor",
		menubar: !1
	}), tinymce.init({
		skin: "white",
		language: "ru",
		selector: ".mce4EditorEditForEmailTemplates",
		inline: !0,
		relative_urls: !1,
		remove_script_host: !1,
		convert_urls: !1,
		element_format: "html",
		allow_script_urls: !0,
		plugins: ["advlist autolink lists link charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table contextmenu paste", "textcolor colorpicker image"],
		toolbar: "undo redo | formatselect | table | bold italic strikethrough | bullist numlist | link | forecolor backcolor | image",
		menubar: !1
	}), tinymce.init({
		language: "ru",
		selector: ".mce4EditorEditLine",
		skin: "white",
		inline: !0,
		plugins: ["paste"],
		forced_root_block: !1,
		toolbar: "undo redo",
		menubar: !1
	}), tinymce.init({
		language: "ru",
		selector: ".mce4EditorEditLineExtended",
		skin: "white",
		inline: !0,
		plugins: ["paste link", "textcolor colorpicker"],
		forced_root_block: !1,
		toolbar: "undo redo | bold italic strikethrough | link | forecolor backcolor",
		menubar: !1
	});
	else {
		tinyMCE.init({
			language: "ru",
			mode: "specific_textareas",
			editor_selector: "mceEditorEdit",
			theme: "advanced",
			element_format: "html",
			width: 620,
			height: 450,
			table_styles: "Таблица=table-bordered",
			plugins: "inlinepopups,spellchecker,advhr,insertdatetime,preview,typograf,media,table,searchreplace,jaretypograph,template,paste",
			paste_preprocess: function(e, t) {
				t.content = function(e, t) {
					var n = "",
						i = !1,
						r = [],
						a = [],
						s = "",
						o = 0,
						l = "",
						c = "";
					t && (a = t.match(/([a-zA-Z0-9]+)/gi));
					for(n in r = (e += "").match(/(<\/?[\S][^>]*>)/gi))
						if(!isNaN(n)) {
							for(l in c = r[n].toString(), i = !1, a)
								if(s = a[l], 0 != (o = -1) && (o = c.toLowerCase().indexOf("<" + s + ">")), 0 != o && (o = c.toLowerCase().indexOf("<" + s + " ")), 0 != o && (o = c.toLowerCase().indexOf("</" + s)), 0 == o) {
									i = !0;
									break
								}
							i || (u = c, d = "", e = e.split(u).join(d))
						}
					var u, d;
					return e
				}(t.content, "<p><h1><h2><h3><h4><b><strong><i><ul><ol><li>")
			},
			theme_advanced_buttons1: "jaretypograph,|,sub,sup,charmap,|,bullist,numlist,|,search,replace,|,undo,redo,|,styleselect",
			theme_advanced_buttons2: "table,|,row_before,row_after,delete_row,|,col_after,col_before,delete_col,|,merge_cells,split_cells,|,visualaid",
			theme_advanced_buttons3: "",
			theme_advanced_toolbar_location: "top",
			theme_advanced_toolbar_align: "left",
			theme_advanced_statusbar_location: "bottom",
			theme_advanced_resizing: !1,
			content_css: "/css/tinymce.css",
			style_formats: [{
				title: "Формула",
				inline: "em",
				classes: "mathPhp"
			}, {
				title: "Курсив",
				inline: "span",
				classes: "italic"
			}, {
				title: "Жирный",
				inline: "strong"
			}],
			theme_advanced_blockformats: "p"
		})
	}
	$.each(["contest_voting_items_files", "test_answer_choise_6_files"], function(e, i) {
		var r = "test_answer_choise_6_files" === i ? "works" : "contests";
		0 < $("#upload_" + i).length && $.ajax_upload($("#upload_" + i), {
			action: "/" + r + "/uploadfile/" + $("#upload_" + i).attr("data-item_id") + "/?time=" + (new Date).getTime(),
			name: "myfile",
			onSubmit: function(e, t) {
				if($("." + i + "_container").hasClass("lock")) return !1;
				$("." + i + "_container").addClass("lock"), $("." + i + "_container .progress").show(), this.disable()
			},
			onComplete: function(e, t) {
				this.enable();
				var n = jQuery.parseJSON(t);
				null != n.id && $("." + i + "_container ." + i + "_container__files ol").append('<li><a target="_blank" href="' + n.path + n.name + '">Скачать ' + n.name + '</a> <a class="delete_' + i + '" data-item_id="' + n.item_id + '" data-file_id="' + n.id + '" href="javascript:void(0)"><span class="icon icon-remove"></span></a></li>'), null != n.error && alert(n.error), $("." + i + "_container .progress").hide(), $("." + i + "_container").removeClass("lock")
			}
		}), $(".delete_" + i).live("click", function() {
			var n = $(this),
				e = n.attr("data-item_id"),
				t = n.attr("data-file_id");
			return n.hasClass("lock") || confirm("Удалить?") && (n.addClass("lock"), n.parent().hide(), $.ajax({
				url: "/" + r + "/deletefile/" + e + "/" + t + "/?time=" + (new Date).getTime(),
				dataType: "json",
				type: "post",
				success: function(e, t) {
					null != e.error ? (alert(e.error), n.removeClass("lock"), n.parent().show()) : n.parent().remove()
				},
				error: function(e, t) {
					alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), n.removeClass("lock"), n.parent().show()
				}
			})), !1
		})
	}), 0 < $(".upload_package_test_files").length && $(".upload_package_test_files").each(function(e) {
		var t = $(this),
			i = t.parents(".package_test_files_container"),
			r = t.attr("data-type");
		$.ajax_upload(t, {
			action: "/tests/uploadfile/" + t.attr("data-id") + "/" + r + "/?time=" + (new Date).getTime(),
			name: "myfile",
			onSubmit: function(e, t) {
				if(i.hasClass("lock")) return !1;
				i.addClass("lock"), i.find(".progress").show(), this.disable()
			},
			onComplete: function(e, t) {
				this.enable();
				var n = jQuery.parseJSON(t);
				null != n.id && i.find(".package_test_files_container__files").html('<img src="' + n.path + n.name + '" alt=""><br><a target="_blank" href="' + n.path + n.name + '">Скачать ' + n.name + '</a> <a class="delete_package_test_files" data-type="' + r + '" data-id="' + n.testpac_id + '" data-file_id="' + n.id + '" href="javascript:void(0)"><span class="icon icon-remove"></span></a>'), null != n.error && alert(n.error), i.find(".progress").hide(), i.removeClass("lock")
			}
		})
	}), 0 < $(".upload_questions").length && $(".upload_questions").each(function(e) {
		var t = $(this),
			i = t.parents(".upload_questions_container");
		$.ajax_upload(t, {
			action: "/questions/import/?time=" + (new Date).getTime(),
			name: "myfile",
			onSubmit: function(e, t) {
				if(i.hasClass("lock")) return !1;
				i.addClass("lock"), i.find(".progress").show(), this.disable()
			},
			onComplete: function(e, t) {
				this.enable();
				var n = jQuery.parseJSON(t);
				null != n.error && alert(n.error), i.find(".progress").hide(), i.removeClass("lock"), null != n.success && (alert(n.success), location.reload(!0))
			}
		})
	}), $(".delete_package_test_files").live("click", function() {
		var i = $(this),
			e = i.attr("data-id"),
			t = i.attr("data-file_id"),
			n = i.attr("data-type");
		return i.hasClass("lock") || confirm("Удалить?") && (i.addClass("lock"), i.parent().hide(), $.ajax({
			url: "/tests/deletefile/" + e + "/" + t + "/" + n + "/?time=" + (new Date).getTime(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				var n = i.parent();
				null != e.error ? alert(e.error) : n.html(""), i.removeClass("lock"), n.show()
			},
			error: function(e, t) {
				alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), i.removeClass("lock"), i.parent().show()
			}
		})), !1
	});
	var e = function(n, e, i, t, r, a, s) {
		var o = n.parent().find(".progress"),
			l = n.hasClass("btn-primary") ? i : t,
			c = n.attr("data-id");
		return n.hasClass("lock") || (n.addClass("lock"), o.show(), $.ajax({
			url: e + l + "/" + c + "/?time=" + (new Date).getTime(),
			dataType: "json",
			type: "post",
			success: function(e, t) {
				null != e.error ? alert(e.error) : l == i ? (n.removeClass("btn-primary"), r && n.find(r).text(parseInt(n.find(r).text()) - 1), a && n.find(a).show(), s && n.find(s).hide()) : (n.addClass("btn-primary"), r && n.find(r).text(parseInt(n.find(r).text()) + 1), a && n.find(a).hide(), s && n.find(s).show()), n.removeClass("lock"), o.hide(), null != e.message && alert(e.message)
			},
			error: function(e, t) {
				alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), n.removeClass("lock"), o.hide()
			}
		})), !1
	};
	$(".contest_voting_vote").live("click", function() {
		return e($(this), "/contests/", "vote/remove", "vote/add", ".contest_voting_results", null, null)
	}), $(".question_feedback__like").live("click", function() {
		return e($(this), "/ajax/", "question_feedback/like/remove", "question_feedback/like/add", ".question_feedback__like__results", null, null)
	}), $(".question_feedback__studied").live("click", function() {
		return e($(this), "/ajax/", "question_feedback/studied/remove", "question_feedback/studied/add", null, ".question_feedback__studied-hide", ".question_feedback__studied-show")
	}), $(".question_feedback__favorites").live("click", function() {
		return e($(this), "/ajax/", "question_feedback/favorites/remove", "question_feedback/favorites/add", null, ".question_feedback__favorites-hide", ".question_feedback__favorites-show")
	}), 0 < $("#upload_avatar").length && $.ajax_upload($("#upload_avatar"), {
		action: "/profile/uploadavatar/" + $("#upload_avatar").attr("data-user_id") + "/?time=" + (new Date).getTime(),
		name: "myfile",
		onSubmit: function(e, t) {
			if($(".profile_avatar").hasClass("lock")) return !1;
			$(".profile_avatar").addClass("lock"), $(".profile_avatar .progress").show(), this.disable()
		},
		onComplete: function(e, t) {
			this.enable();
			var n = jQuery.parseJSON(t);
			null != n.file_src && ($(".profile .avatar").html('<img src="' + n.file_src + '">'), $("#delete_avatar").show()), null != n.error && alert(n.error), $(".profile_avatar .progress").hide(), $(".profile_avatar").removeClass("lock")
		}
	}), $("#delete_avatar").click(function() {
		if(!$(".profile_avatar").hasClass("lock")) {
			var e = "";
			e = "undefined" == typeof language || "ru" == language ? "Удалить?" : "Remove?", confirm(e) && ($(".profile_avatar").addClass("lock"), $(this).hide(), $(".profile_avatar .progress").show(), $.ajax({
				url: "/profile/deleteavatar/" + $("#delete_avatar").attr("data-user_id") + "/?time=" + (new Date).getTime(),
				dataType: "json",
				type: "post",
				success: function(e, t) {
					null != e.error && alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), null != e.file_src && $(".profile .avatar").html('<img src="' + e.file_src + '">'), $(".profile_avatar .progress").hide(), $(".profile_avatar").removeClass("lock")
				},
				error: function(e, t) {
					alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), $(".profile_avatar .progress").hide(), $(".profile_avatar").removeClass("lock")
				}
			}))
		}
		return !1
	});
	var t = function(e, t) {
			var n = t.parents(".relation_buttons"),
				i = n.find(".progress"),
				r = n.find(".no_add_teacher_btn"),
				a = n.find(".add_teacher_btn"),
				s = n.find(".confirm_teacher_btn"),
				o = n.find(".decline_teacher_btn"),
				l = n.find(".wait_teacher_btn"),
				c = n.find(".added_teacher_btn"),
				u = t.attr("data-user_id");
			n.hasClass("lock") || (n.addClass("lock"), i.show(), $.ajax({
				url: e,
				dataType: "json",
				data: "user_id=" + u,
				type: "post",
				success: function(e, t) {
					if(null != e)
						if(null != e.error_message) alert(e.error_message);
						else if(null != e.error) alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз.");
					else if(null != e.id && null != e.from_user_1)
						if(s.hide(), o.hide(), a.hide(), r.hide(), l.hide(), c.hide(), 1 != e.id || e.from_user_1)
							if(1 == e.id && e.from_user_1) l.show();
							else if(2 == e.id) {
						c.show();
						try {
							"self-test.ru" == window.location.hostname && yaCounter11236696.reachGoal("confirm_pupil_request")
						} catch(e) {
							console.log(e.toString())
						}
					} else a.show();
					else s.show(), o.show();
					else alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз.");
					else alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз.");
					i.hide(), n.removeClass("lock")
				},
				error: function(e, t) {
					alert("Ошибка. Перезагрузите страницу и попробуйте ещё раз."), i.hide(), n.removeClass("lock")
				}
			}))
		},
		n = $(".no_add_teacher_btn"),
		i = $(".no_add_coach_btn"),
		r = $(".add_teacher_btn"),
		a = $(".confirm_teacher_btn"),
		s = $(".decline_teacher_btn");
	n.length && n.click(function() {
		alert("Для того, чтобы добавить преподавателя, необходимо авторизоваться.")
	}), i.length && i.click(function() {
		alert("Для того, чтобы добавить репетитора, необходимо авторизоваться.")
	}), r.length && r.click(function() {
		t("/users/add_user/?time=" + (new Date).getTime(), $(this))
	}), a.length && a.click(function() {
		t("/users/confirm_user/?time=" + (new Date).getTime(), $(this))
	}), s.length && s.click(function() {
		t("/users/decline_user/?time=" + (new Date).getTime(), $(this))
	});
	var o = $(".journal_edit__switcher"),
		l = o.find(".switcher"),
		c = o.find(".switcher-point"),
		u = o.find(".switcher-attendance"),
		d = o.find(".switcher-score"),
		f = function(e, t) {
			e && (t = u.hasClass("switcher-label-active")), t ? (u.removeClass("switcher-label-active"), d.addClass("switcher-label-active"), c.addClass("switcher-point-right"), $(".journal_edit__switcher-attendance").hide(), $(".journal_edit__switcher-score").show()) : (u.addClass("switcher-label-active"), d.removeClass("switcher-label-active"), c.removeClass("switcher-point-right"), $(".journal_edit__switcher-score").hide(), $(".journal_edit__switcher-attendance").show())
		};
	u.on("click", function(e) {
		e.preventDefault(), f(!1, !1)
	}), d.on("click", function(e) {
		e.preventDefault(), f(!1, !0)
	}), l.on("click", function(e) {
		e.preventDefault(), f(!0)
	}), $(".journal_edit__attendance").live("change", function() {
		var e = $(this),
			t = e.find("option:selected").val();
		1 !== parseInt(t) ? e.addClass("journal_edit__attendance-gray") : e.removeClass("journal_edit__attendance-gray")
	});
	var p = $(".scroll_to_fixed-top");
	if(0 < p.length) {
		var _ = 0;
		p.each(function(e) {
			var t = $(p[e]),
				n = t.hasClass("scroll_to_fixed-width_100_percents");
			t.scrollToFixed({
				marginTop: _,
				preFixed: function() {
					return $(this).addClass("scroll_to_fixed-top-shadow"), !1
				},
				preAbsolute: function() {
					return $(this).addClass("scroll_to_fixed-top-shadow"), !1
				},
				postFixed: function() {
					$(this).removeClass("scroll_to_fixed-top-shadow")
				},
				postAbsolute: function() {
					$(this).removeClass("scroll_to_fixed-top-shadow")
				},
				dontSetWidth: n
			}), _ += t.outerHeight(!0)
		})
	}
	if(0 < $(".scroll_to_fixed-bottom").length) {
		var h = $(".scroll_to_fixed-bottom").offset().top;
		$(".scroll_to_fixed-bottom").scrollToFixed({
			bottom: 0,
			limit: function() {
				return h + parseInt($("#basic_wrap").css("top"))
			},
			preFixed: function() {
				return $(this).addClass("scroll_to_fixed-bottom-shadow"), !1
			},
			preAbsolute: function() {
				return $(this).addClass("scroll_to_fixed-bottom-shadow"), !1
			},
			postFixed: function() {
				$(this).removeClass("scroll_to_fixed-bottom-shadow")
			},
			postAbsolute: function() {
				$(this).removeClass("scroll_to_fixed-bottom-shadow")
			}
		})
	}
	var m = !1;
	$(".personal_data_block .personal_data_agree_button").live("click", function(e) {
		if(e.preventDefault(), !m) {
			m = !0;
			var t = $(this).parents(".personal_data_block").find(".personal_data_agree_progress_button");
			t && ($(this).hide(), t.show());
			var n = $(this).attr("data-get") ? $(this).attr("data-get") : "personal_data_agree";
			window.location = (i = n + "=1", r = location.href, r += (r.split("?")[1] ? "&" : "?") + i)
		}
		var i, r
	}), $("#quiz_form").submit(function() {
		var e = $(this),
			n = e.parents(".quiz_wrapper"),
			i = 0,
			r = {
				step: 0,
				type: ""
			};
		if(n.hasClass("quiz_form--step_1")) {
			r.step = 1, r.type = "select";
			var t = e.find("#quiz_id");
			if(r.quiz_id = t.val(), "" === r.quiz_id) return t.focus(), !1
		} else if(n.hasClass("quiz_form--step_2")) {
			r.step = 2, r.type = "set_data";
			var a = e.find("#quiz_team_name");
			if(r.quiz_team_name = a.val(), "" === r.quiz_team_name) return a.focus(), !1
		} else if(n.hasClass("quiz_form--step_3"))
			if(r.step = 3, r.type = "answer", 0 < e.find(".quiz_form__question_1").length || 0 < e.find(".quiz_form__question_2").length) r.answer = "", $(".quiz_form__answer.quiz_form__answer--checked").each(function(e) {
				"" === r.answer ? r.answer = $(this).attr("data-id") : r.answer += "," + $(this).attr("data-id")
			});
			else if(0 < e.find(".quiz_form__question_5").length) r.answer = $("#quiz_answer").val();
		else if(0 < e.find(".quiz_form__question_0").length) return n.addClass("quiz_form--sending"), location.reload(!0), !1;
		return 0 === r.step || (r.step < 3 && (i = r.step + 1), n.addClass("quiz_form--sending"), $.ajax({
			url: "/quiz/request/?time=" + (new Date).getTime(),
			data: r,
			dataType: "json",
			type: "post",
			success: function(e, t) {
				e.error_code ? (n.removeClass("quiz_form--sending").addClass("quiz_form--error"), setTimeout(function() {
					n.removeClass("quiz_form--error")
				}, 1e3)) : 3 === i || 3 === r.step ? location.reload(!0) : (0 < i && n.removeClass("quiz_form--step_" + r.step).addClass("quiz_form--step_" + i), n.removeClass("quiz_form--sending"))
			},
			error: function(e, t) {
				n.removeClass("quiz_form--sending").addClass("quiz_form--error"), setTimeout(function() {
					n.removeClass("quiz_form--error")
				}, 1e3)
			}
		})), !1
	}), $(".quiz_form__answer").live("click", function() {
		var e = $(this);
		0 < e.parents(".quiz_form__question_1").length ? (e.addClass("quiz_form__answer--checked"), $("#quiz_form").submit()) : e.hasClass("quiz_form__answer--checked") ? e.removeClass("quiz_form__answer--checked") : e.addClass("quiz_form__answer--checked")
	}), $(".controls__open_block_button").live("click", function(e) {
		e.preventDefault();
		var t = $(this).attr("data-block-id");
		t && $("." + t).animate({
			height: "toggle"
		}, 350)
	}), $(".dropdown-menu-stop-propagation").live("click", function(e) {
		e.stopPropagation()
	})
});
