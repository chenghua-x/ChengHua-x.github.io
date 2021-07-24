'use strict';
(z => {
	let x;
	z.rea = x = {
		globals: window,
		extend: function(b) {
			const c = (l, e) => {
				for (const t in l)
					if (l.hasOwnProperty(t)) {
						var h = Object.getOwnPropertyDescriptor(l, t);
						if (h.get)
							Object.defineProperty(e, t, h);
						else {
							h = l[t];
							const v = typeof h;
							"undefined" != v && (null === h ? e[t] = h : "object" == v ? (e[t] = e[t] || (Array.isArray(h) ? [] : {}), c(h, e[t])) : e[t] = h)
						}
					}
			};
			c(b, z.rea)
		},
		internal: {
			new_uuid: function() {
				return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, b => {
					const c = 16 * Math.random() | 0;
					return ("x" == b ? c : c & 3 | 8).toString(16)
				})
			},
			messaging: (() => {
				let b,
					c;
				const l = {},
					e = {};
				let h;
				const t = () => {
					h = null;
					const m = Date.now();
					Object.keys(e).forEach(a => {e[a].ts + 3E5 < m && delete e[a]})
				};
				let v = () => {
					v = null;
					var m = (a, d, n) => {
						if ("sendMessage" == a.type)
							b && b(a.request, d, n);
						else if ("connect" == a.type && a.id && c) {
							var k = l[a.id];
							if ("init" == a.reason)
								k && console.warn("rea.messaging: port being overwritten!", a.id), k = l[a.id] = B(a, d), c(k.public);
							else if (!k || k.cspmn + 1 != a.cspmn) {
								e[a.id] = e[a.id] || {
									m: {}
								};
								e[a.id].ts = Date.now();
								e[a.id].m[a.cspmn] = {
									r: a,
									s: n
								};
								h && window.clearTimeout(h);
								h = window.setTimeout(t);
								return
							}
							k.handle(a, n);
							{
								a = a.id;
								let u,
									p;
								k = k.cspmn + 1;
								(u = e[a]) && (p = u.m[k]) && (delete u.m[k], 0 === Object.keys(u.m).length && delete e[a], m(p.r, d, p.s))
							}
						}
					};
					chrome.runtime.onMessage.addListener((a, d, n) => {
						"topee" == d.id && (d.id = x.runtime.id);
						return m(a, d, n)
					})
				};
				var B = (m, a) => {
					const d = [];
					let n = [],
						k = [];
					const u = [];
					let p = m.cspmn + 1;
					const q = g => {d.length ? g(d.shift()) : u.push(g)},
						f = g => {
							d.push(g);
							let y;
							for (; u.length && d.length;)
								y = u.shift(), g = d.shift(), y(g);
							for (; 3 < d.length;)
								g = d.shift(), g({
									type: "connect",
									reason: "null",
									ccpmn: p++
								})
						},
						r = () => {
							for (; d.length;)
								d.shift()({
									type: "connect",
									reason: "null",
									ccpmn: p++
								})
						};
					let w = {
						handle: function(g, y) {
							w && (w.cspmn = g.cspmn, f(y), "data" == g.reason ? n.forEach(A => {A(g.data)}) : "disconnect" == g.reason && (k.forEach(A => {A()}), r(), w = null))
						},
						public: {
							sender: a,
							postMessage: function(g) {
								q(y => {y({
										type: "connect",
										reason: "data",
										data: g,
										ping: 2 > d.length,
										ccpmn: p++
									})})
							},
							onMessage: {
								addListener: function(g) {
									n.push(g)
								}
							},
							onDisconnect: {
								addListener: function(g) {
									k.push(g)
								}
							},
							disconnect: function() {
								n = [];
								k = [];
								q(g => {
									g({
										type: "connect",
										reason: "disconnect",
										ccpmn: p++
									});
									r();
									w = null
								})
							}
						}
					};
					return w
				};
				return {
					sendTabMessage: function(m, a, d, n) {
						return chrome.tabs.sendMessage(m, {
							type: "sendMessage",
							request: a
						}, d, n)
					},
					sendMessage: function(m, a) {
						return chrome.runtime.sendMessage({
							type: "sendMessage",
							request: m
						}, a)
					},
					onMessage: {
						addListener: function(m) {
							v && v();
							b = m
						}
					},
					connect: function(m) {
						const a = (m || "-") + x.internal.new_uuid();
						let d = [],
							n = [],
							k = 0;
						const u = f => {
							let r,
								w;
							f += 1;
							(r = e[a]) && (w = r.m[f]) && (p(w.o), delete r.m[f], 0 === Object.keys(r.m).length &&
							delete e[a])
						};
						var p = f => {
								if (q)
									if (q.ccpmn + 1 != f.ccpmn)
										e[a] = e[a] || {
											m: {}
										}, e[a].ts = Date.now(), e[a].m[f.ccpmn] = {
											o: f
										}, h && window.clearTimeout(h), h = window.setTimeout(t);
									else if ("disconnect" == f.reason)
										n.forEach(r => {r()}), d = [], n = [], q = null;
									else {
										"data" == f.reason && d.forEach(r => {r(f.data)});
										if (f.ping) {
											const r = {
												type: "connect",
												reason: "pong",
												id: a,
												cspmn: k++
											};
											chrome.runtime.sendMessage(r, p)
										}
										q && (q.ccpmn = f.ccpmn, u(q.ccpmn))
									}
							},
							q = {
								ccpmn: k,
								postMessage: function(f) {
									if (q)
										return f = {
											type: "connect",
											reason: "data",
											data: f,
											id: a,
											cspmn: k++
										},
										chrome.runtime.sendMessage(f, p)
								},
								onMessage: {
									addListener: function(f) {
										d.push(f)
									}
								},
								onDisconnect: {
									addListener: function(f) {
										n.push(f)
									}
								},
								disconnect: function() {
									if (q) {
										var f = {
											type: "connect",
											reason: "disconnect",
											id: a,
											cspmn: k++
										};
										chrome.runtime.sendMessage(f, p);
										q = n = d = null
									}
								}
							};
						m = {
							type: "connect",
							reason: "init",
							id: a,
							cspmn: k++
						};
						chrome.runtime.sendMessage(m, p);
						return q
					},
					onConnect: {
						addListener: function(m) {
							v && v();
							c = m
						}
					}
				}
			})()
		}
	};
	z.rea.extend({
		page: {
			reload: function() {
				window.location.reload()
			},
			eval: function(b) {
				const c = document.createElementNS(document.lookupNamespaceURI(null) ||
				"http://www.w3.org/1999/xhtml", "script");
				c.textContent = b;
				(document.head || document.body || document.documentElement || document).appendChild(c);
				c.parentNode.removeChild(c)
			},
			addScript: function(b, c) {
				try {
					const l = new XMLHttpRequest;
					l.open("GET", b);
					l.onload = () => {
						window.eval(l.responseText);
						c && c(!0)
					};
					c && (l.onerror = () => {c(!1)});
					l.send()
				} catch (l) {
					console.warn(l), c && c(!1)
				}
			}
		},
		content: {
			onReady: function(b) {
				const c = () => {"prerender" !== document.webkitVisibilityState && (document.removeEventListener("webkitvisibilitychange",
					c, !1), b())};
				"prerender" !== document.webkitVisibilityState ? b() : document.addEventListener("webkitvisibilitychange", c, !1)
			}
		},
		runtime: (() => {
			const b = {};
			Object.defineProperties(b, {
				lastError: {
					get: function() {
						return chrome.runtime.lastError
					},
					enumerable: !0
				},
				id: {
					get: function() {
						return "safariapp"
					},
					enumerable: !0
				},
				short_id: {
					get: function() {
						return "saap"
					},
					enumerable: !0
				}
			});
			return b
		})(),
		extension: {
			inIncognitoContext: chrome.extension.inIncognitoContext,
			getURL: function(b) {
				b && "/" == b[0] && (b = b.slice(1));
				return document.location.origin +
				"/" + b
			},
			sendMessage: function(b, c) {
				return x.internal.messaging.sendMessage(b, c)
			},
			onMessage: {
				addListener: function(b) {
					return x.internal.messaging.onMessage.addListener(b)
				}
			},
			connect: function(b) {
				return x.internal.messaging.connect(b)
			}
		}
	});
	z.rea.extend((() => {
		let b = 20;
		try {
			b = parseInt(navigator.userAgent.match(/Version\/([0-9]+)\./)[1])
		} catch (l) {}
		const c = {
			CONSTANTS: {
				STORAGE: {
					SCHEMA: "#schema",
					TYPE: "#storage",
					CONFIG: "#config",
					SESSION: "#session",
					VERSION: "#version",
					LEGACY_VERSION: "TM_version",
					LAST_START: "#laststart",
					UPDATE: "#update",
					BEGGING: "#begging"
				},
				PREFIX: {
					SCRIPT_UID: "@uid#",
					COND: "@re#",
					STORE: "@st#",
					SCRIPT: "@source#",
					EXTERNAL: "@ext#",
					META: "@meta#"
				}
			},
			RUNTIME: {
				BROWSER: "safari",
				SAFARI: !0,
				BROWSER_VERSION: b,
				FAST_EXEC_SUPPORT: !1,
				DETECT_CONSTRUCTORS_BY_KEYS: 60 <= b,
				ALLOWS_FILE_SCHEME_ACCESS: null,
				MAX_SCRIPTS: 1E3,
				WEBREQUEST_XHR_SUPPORT: !1,
				WEBREQUEST_WEBSOCKET: !1,
				CLIPBOARD_API: !0,
				CAN_SAVEAS_ZIP: !0,
				SHARED_OBJECT_URLS: !1,
				CONTEXT_MENU: !1,
				INCOGNITO_MODE: !1
			},
			ACTIONMENU: {
				CLOSE_ALLOWED: !0,
				MIN_DELAY: 0
			},
			OPTIONPAGE: {
				CLOSE_ALLOWED: !1
			},
			DB: {
				USE: null,
				DEFAULT: "chromeStorage",
				SECURE: !0
			},
			XMLHTTPREQUEST: {
				RETRIES: 0,
				PARTIAL_SIZE: 16777216,
				COOKIE_PASSTHROUGH: !1
			},
			SCRIPT_DOWNLOAD: {
				TIMEOUT: 60
			},
			PINGPONG: {
				RETRIES: 15
			},
			MISC: {
				TIMEOUT: 1,
				IDLE_TIMEOUT: 15,
				DISTURBANCE_ALLOWED: 60
			},
			HTML5: {
				LOCALSTORAGE: null
			},
			PERMISSIONS: {
				ALL_URLS: "<all_urls>"
			},
			REQUESTS: {
				HAS_SENDER_ID: !0,
				INTERNAL_PAGE_PROTOCOLS: [],
				SENDS_ORIGIN: !0,
				GET_INTERNAL_PATH_REGEXP: function(l, e) {
					const h = /(\/|\.|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g;
					return new RegExp("https?" + "://ui.tampermonkey.net".replace(h,
					"\\$1") + "(?::[0-9]{1,5})?/([a-zA-Z" + (l ? "\\/" : "") + "]*)" + (e || "").replace(h, "\\$1"))
				},
				GET_INTERNAL_PAGE_REGEXP: function() {
					return c.REQUESTS.GET_INTERNAL_PATH_REGEXP(!1, ".html")
				}
			},
			OPTIONS: {
				HAS_CSP: !1,
				CAN_DOWNLOAD: !0
			}
		};
		return {
			FEATURES: c
		}
	})())
})(window);

