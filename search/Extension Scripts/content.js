!function(e) {
	function t(o) {
		if (n[o])
			return n[o].exports;
		var s = n[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return e[o].call(s.exports, s, s.exports, t), s.l = !0, s.exports
	}
	var n = {};
	t.m = e, t.c = n, t.d = function(e, n, o) {
		t.o(e, n) || Object.defineProperty(e, n, {
			enumerable: !0,
			get: o
		})
	}, t.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, t.t = function(e, n) {
		if (1 & n && (e = t(e)), 8 & n)
			return e
			;
		if (4 & n && "object" == typeof e && e && e.__esModule)
			return e;
		var o = Object.create(null);
		if (t.r(o), Object.defineProperty(o, "default", {
			enumerable: !0,
			value: e
		}), 2 & n && "string" != typeof e)
			for (var s in e)
				t.d(o, s, function(t) {
					return e[t]
				}.bind(null, s));
		return o
	}, t.n = function(e) {
		var n = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t) {
		return {}.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 72)
}({
	72: function(e, t, n) {
		"use strict";
		n.r(t);
		var o = (e, t, n, o) => {
				let s,
					r,
					a,
					i,
					c,
					d,
					l,
					u,
					p,
					g,
					m,
					f;
				const h = {};
				let v = {
					safeWindow: h,
					safeDocument: {},
					eval,
					Context: {
						D: o
					},
					exec_fn: (e, t, n) => {s(new h.Function(e), t, n)},
					exec_csp: (e, t, n) => {
						const o = "__u__" + (19831206 * v.Context.M_r() + 1);
						v.Message.send("csp", {
							id: o,
							src: e
						}), v.exec_script(o, t, n)
					},
					exec_script: (t, n, o) => {
						const r = e[t];
						r ? (delete e[t], s(r, n, o)) : e.console.error("Tampermonkey script execution failed")
					}
				};
				const w = (t, n) => {
					if (e.console.error(`Tampermonkey sandbox preparation ${n ? "(" + n + ") " : ""}failed. This usually is caused by a third-party extension.`, t), n)
						return () => {}
				};
				try {
					(() => {
						const o = e => {
								const t = (t, ...n) => s(e, t, n);
								return t.wrappedJSObject = e, t
							},
							y = (e, t) => {
								let n;
								for (; null != e && !(n = u(e, t));)
									e = l(e);
								return n
							},
							_ = {
								i_N: () => p = e => !("prototype" in e),
								i_SS: () => g = (e, t, n) => {
									const o = y(e, t);
									if (!o || !o.set || p(o.set))
										return e[t] = n, !0
								},
								i_SG: () => m = (e, t) => {
									const n = y(e, t);
									if (!n || !n.get || p(n.get))
										return e[t]
								},
								F_a: () => s = (() => {
									const t = e.Function.apply,
										o = n;
									return (e, n, s) => {
										let r;
										return m(e, "apply") === t ? r = e.apply(n, s) : g(e, o, t) && (r = e[o](n, s), delete e[o]), r
									}
								})(),
								E_u: () => function(t, n) {
									if (v.exec_eval)
										try {
											const o = "__u__" + (19831206 * v.Context.M_r() + 1);
											return e[o] = n, v.Context.F_c(v.Context.eval, e, `(function(that){${t}})((()=>{const k="${o}",r=this[k];delete this[k];return r;})())`)
										} catch (t) {
											try {
												v.exec_eval = r(v.eval, e)("true")
											} catch (e) {
												v.exec_eval = !1
											}
											if (v.exec_eval)
												throw t
										}
									v.exec_csp(`(function(that){${t}})(this)`, n)
								},
								F_c: () => o(e.Function.call),
								F_b: () => r = o(e.Function.bind),
								F_tS: () => o(e.Function.toString),
								A_fE: () => i = o(e.Array.prototype.forEach),
								A_sl: () => o(e.Array.prototype.slice),
								A_so: () => o(e.Array.prototype.some),
								A_sp: () => o(e.Array.prototype.splice),
								A_sh: () => o(e.Array.prototype.shift),
								A_j: () => o(e.Array.prototype.join),
								A_pu: () => a = o(e.Array.prototype.push),
								A_po: () => o(e.Array.prototype.pop),
								A_m: () => o(e.Array.prototype.map),
								A_c: () => o(e.Array.prototype.concat),
								A_f: () => o(e.Array.prototype.filter),
								A_iO: () => o(e.Array.prototype.indexOf),
								O_k: () => e.Object.keys,
								O_dP: () => e.Object.defineProperties,
								O_dPy: () => e.Object.defineProperty,
								O_gOPN: () => e.Object.getOwnPropertyNames,
								O_gOPD: () => u = e.Object.getOwnPropertyDescriptor,
								O_gOPDs: () => e.Object.getOwnPropertyDescriptors || (e => {
									const t = {};
									for (const n in e)
										t[n] = _.O_gOPD(e, n);
									return t
								}),
								O_gPO: () => l = e.Object.getPrototypeOf,
								O_tS: () => o(e.Object.prototype.toString),
								J_p: () => d = e.JSON.parse,
								J_s: () => c = e.JSON.stringify,
								c_l: () => (e.console.log || e.console.log).bind(e.console),
								c_i: () => (e.console.info || e.console.log).bind(e.console),
								c_w: () => (e.console.warn || e.console.log).bind(e.console),
								c_e: () => (e.console.error || e.console.log).bind(e.console),
								c_d: () => (e.console.debug || e.console.log).bind(e.console),
								M_f: () => e.Math.floor,
								M_r: () => e.Math.random,
								M_m: () => e.Math.max,
								M_i: () => f = o(e.MutationEvent.prototype.initMutationEvent),
								N_tS: () => o(e.Number.prototype.toString),
								P_r: () => e.Promise.resolve.bind(e.Promise),
								P_t: () => o(e.Promise.prototype.then),
								P_c: () => o(e.Promise.prototype.catch),
								R_rABS: () => o(e.FileReader.prototype.readAsBinaryString),
								R_rAT: () => o(e.FileReader.prototype.readAsText),
								S_fCC: () => e.String.fromCharCode,
								S_m: () => o(e.String.prototype.match),
								S_su: () => o(e.String.prototype.substr),
								S_se: () => o(e.String.prototype.search),
								S_sp: () => o(e.String.prototype.split),
								S_r: () => o(e.String.prototype.replace),
								S_cCA: () => o(e.String.prototype.charCodeAt),
								S_tLC: () => o(e.String.prototype.toLowerCase),
								S_tUC: () => o(e.String.prototype.toUpperCase),
								D_pFS: () => o(e.DOMParser.prototype.parseFromString),
								X_o: () => o(e.XMLHttpRequest.prototype.open),
								X_sRH: () => o(e.XMLHttpRequest.prototype.setRequestHeader),
								X_oMT: () => o(e.XMLHttpRequest.prototype.overrideMimeType),
								X_gARH: () => o(e.XMLHttpRequest.prototype.getAllResponseHeaders),
								X_gRH: () => o(e.XMLHttpRequest.prototype.getResponseHeader),
								X_s: () => o(e.XMLHttpRequest.prototype.send),
								X_a: () => o(e.XMLHttpRequest.prototype.abort),
								D_n: () => e.Date.now
							};
						var b
						;
						Object.keys(_).forEach(e => {
							try {
								v.Context[e] = _[e]()
							} catch (t) {
								v.Context[e] = w(t, "internal." + e)
							}
						}), ["String", "Array", "Object", "Number", "parseInt", "JSON", "Math", "Date", "Event", "CustomEvent", "MutationEvent", "console", "location", "Error", "Uint8Array", "Blob", "FileReader", "DOMParser", "XMLHttpRequest", "Function", "RegExp", "frames", "self", "top", "document", "location", "Promise"].forEach(t => {
							try {
								h[t] = e[t]
							} catch (e) {
								h[t] = w(e, "window." + t)
							}
						}),
						["postMessage", "addEventListener", "removeEventListener", "alert", "prompt", "confirm", "encodeURIComponent", (b = {
							a: "decodeURI",
							b: "Component"
						}, b.a + b.b), "encodeURI", "decodeURI", "escape", "unescape", "atob", "btoa", "close"].forEach(t => {
							try {
								const n = e[t];
								h[t] = function() {
									return s(n, e, arguments)
								}
							} catch (e) {
								h[t] = w(e, "window." + t)
							}
						}), v.createSafeDocument = e => {["getElementById", "createEvent", "createElement", "dispatchEvent", "addEventListener", "removeEventListener"].forEach(t => {
								try {
									const n = e[t]
									;
									v.safeDocument[t] = function() {
										return s(n, e, arguments)
									}
								} catch (e) {
									v.safeDocument[t] = w(e, "document." + t)
								}
							})}, v.createSafeDocument(t)
					})()
				} catch (e) {
					return w(e)
				}
				try {
					v.Message = ((e, t) => {
						let n,
							o,
							r,
							l,
							u = 1;
						const p = {};
						let g = [];
						const m = e => {
								const t = ++u;
								return p[u] = e, t
							},
							h = n => {
								const {m: o, a, r: i, n: d} = n;
								((...e) => {s(t.dispatchEvent, t, e)})(((n, o, s) => {
									let r;
									return s ? (r = t.createEvent("MutationEvent"), f(r, n, !1, !1, s || null, null, null, c(o), r.ADDITION)) : r = new e.CustomEvent(n, {
										detail: o
									}), r
								})(r, {
									m: o,
									a,
									r: i
								}, d))
							};
						let v = e => {
							const t = (o = e).detail || d(o.attrName);
							var o;
							if ("message.response" == t.m)
								((e, t) => {
									let n;
									e && (n = p[e]) && (n(t), delete p[e])
								})(t.r, t.a);
							else if (n) {
								const o = t.r ? e => {h({
										m: "message.response",
										a: e,
										r: t.r
									})} : () => {};
								!1 === n({
									method: t.m,
									args: t.a,
									node: e.relatedNode,
									sendResponse: o
								}) && a(g, e)
							}
						};
						return {
							init: e => {l || (l = e), r = "2C_" + l, o = "2P_" + l, ((...e) => {s(t.addEventListener, t, e)})(o, v, !1)},
							send: (...e) => {
								let t,
									n,
									o,
									s;
								"function" != typeof e[2] ? (t = e[0], n = e[1], o = e[2], s = e[3]) : (t = e[0], n = e[1], s = e[2]), h({
									m: t,
									a: n,
									r: s ? m(s) : null,
									n: o
								})
							},
							onMessage: {
								setListener: (e, t) => {n = e, t || (i(g, e => {v(e)}), g = null)}
							},
							cleanup: () => {v && ((...e) => {s(t.removeEventListener, t, e)})(o, v, !1), v = null}
						}
					})(h, v.safeDocument), v.Message.init(n), v.Message.onMessage.setListener(({method: t, args: n}) => {
						if (v)
							if ("load" == t)
								v.Context.pageLoaded = !0;
							else if ("DOMContentLoaded" == t)
								v.Context.domContentLoaded = !0;
							else if ("cleanup" == t)
								v.Message.cleanup(), v = null;
							else {
								if ("next" != t)
									return !1;
								if (n.id)
									v.exec_script(n.id, v), v.exec_eval = !1;
								else {
									if (void 0 === v.exec_eval)
										try {
											v.exec_eval = r(v.eval, e)("true")
										} catch (e) {
											v.exec_eval = !1
										}
									v.exec_eval ? v.exec_fn(n.src, v) : v.exec_csp(n.src, v)
								}
							}
					}, !0)
				} catch (e) {
					return w(e)
				}
			},
			s = (e, t, n, o, s, r, a, i, c, d, l, u, p, g) => ["const backup = this;", "(function TM_back() {", "const Context = backup.Context;", "const copy = function(src) {", '"use strict";', "const props = Context.O_gOPN(src);", "for (let kk, ii=0; (kk=props[ii]) !== undefined; ii++) {", "Context[kk] = src[kk];", "};", "};", "copy(backup);", "with (Context) {", "(() => {", '"use strict";', "copy({", "Context: Context,", `V:!!${a},`, `ENV:!!${i},`, `TS:!!${d},`, `D:!!${l},`, `use:${s},`, `windowProps:${n},`, `scripts:${t},`, "_content: false,", `flags:${o},`, "write_listeners: []", "});", "const cleanup = evt => {", "Message.cleanup();", 'safeWindow.removeEventListener("unload", cleanup, false);', "};", 'safeWindow.addEventListener("unload", cleanup, false);', "Context.write_listeners.push(d => {", "Context.createSafeDocument(d);", "Message.init();", "});", (() => {
				let t = "";
				a && (t += "let V = true;"), c && (t += "let EV = true;"), i && (t += "let ENV = true;"), t += `let logLevel = ${r};`;
				const n = `let contextId = "${e}";`;
				let o = "";
				return u || "complete" == document.readyState ? (o += "Context.pageLoaded |= true;", o += "Context.domContentLoaded |= true;") : (p || "interactive" == document.readyState) && (o += "Context.domContentLoaded |= true;"), `${t + n + "const Event = function() {};const Window = function() {};Window.prototype = {};" + o}(${g})(Context, contextId);\n`
			})(), "})();", "};", "})();"].join(""),
			r = function(e, t) {
				const n = e.V,
					o = e.EV,
					s = e.D,
					r = e.Message,
					a = e.safeWindow,
					i = window,
					c = e.safeDocument,
					d = e.flags,
					l = e.i_N,
					u = e.i_SS,
					p = e.i_SG,
					g = e.F_a,
					m = e.F_c,
					f = e.F_b,
					h = e.F_tS,
					v = e.A_fE,
					w = e.A_sl,
					y = e.A_sp,
					_ = e.A_so,
					b = e.A_pu,
					x = e.A_po,
					M = e.A_sh,
					L = e.A_j,
					E = e.A_f,
					T = e.A_iO,
					S = e.A_c,
					C = e.O_k,
					O = e.O_dP,
					R = e.O_dPy,
					A = e.O_gOPN,
					I = e.O_gOPD,
					D = e.O_gOPDs,
					k = e.O_tS,
					P = e.J_p,
					U = e.J_s,
					N = e.c_l,
					j = e.c_i,
					$ = e.c_w,
					F = e.c_e,
					V = e.c_d,
					X = e.M_f,
					q = e.M_r,
					G = e.M_m,
					H = e.P_r,
					B = e.P_t,
					J = e.P_c,
					W = e.S_fCC,
					z = e.S_m,
					K = e.S_su,
					Q = e.S_sp,
					Z = e.S_r,
					Y = e.S_se,
					ee = e.S_cCA,
					te = e.S_tLC,
					ne = e.S_tUC,
					oe = e.R_rABS,
					se = e.R_rAT,
					re = e.D_pFS,
					ae = e.X_o,
					ie = e.X_sRH,
					ce = e.X_oMT,
					de = e.X_gARH,
					le = e.X_gRH,
					ue = e.X_s,
					pe = e.X_a,
					ge = e.N_tS,
					me = e.D_n,
					fe = a.Promise,
					he = "DOMContentLoaded",
					ve = "load",
					we = "DOMNodeInserted"
					;
				e.domContentLoaded |= !1, e.pageLoaded |= !1, e.domNodeInserted |= !1, e.props = {};
				const ye = (() => {
						let e = 0,
							t = 0;
						const n = {},
							o = {},
							s = function(e, t, o, s) {
								const a = this,
									i = () => {n[o] && (g(e, a, s), delete n[o])};
								if ("function" == typeof e)
									if (n[o] = e, 0 === t) {
										const e = H();
										B(e, () => i())
									} else
										r.send("setTimeout", {
											t: t || 1
										}, () => i())
							},
							i = function(e, t, n, s) {
								const r = this;
								if ("function" == typeof e) {
									const a = o[n] = Ce.connect("setInterval");
									a.onMessage.addListener(() => {o[n] && g(e, r, s)}), a.onDisconnect.addListener(() => {self.clearInterval(n)}),
									a.postMessage({
										method: "setInterval",
										t: t || 1
									})
								}
							},
							c = {
								setTimeout: (e, t, ...n) => {
									const o = be.createUUID();
									return s(e, t, o, n), o
								},
								clearTimeout: e => (e => delete n[e])(e),
								setInterval: (e, t, ...n) => {
									const o = be.createUUID();
									return i(e, t, o, n), o
								},
								clearInterval: e => (e => {
									const t = o[e];
									t && (t.disconnect(), delete o[e])
								})(e)
							},
							d = {
								setTimeout: (e, n, ...o) => {
									const r = ++t;
									return n = G(n, 1), s(e, n, r, o), r
								},
								setInterval: (t, n, ...o) => {
									const s = ++e;
									return n = G(n, 1), i(t, n, s, o), s
								}
							};
						return v(C(c), e => a[e] = c[e]), d
					})(),
					_e = (() => {
						const t = [],
							n = e => {e()
							},
							o = e => {
								if (document.body)
									e && (e(), e = null);
								else {
									const t = [ve, we, he],
										n = () => {v(t, e => {c.removeEventListener(e, n, !1)}), o(e)};
									v(t, e => {c.addEventListener(e, n, !1)})
								}
							};
						var r = {
							runListeners: () => {
								let e;
								for (; e = M(t);)
									e()
							},
							run: i => {
								const c = () => {Ae.create(i)};
								var d;
								"document-start" == i.script.options.run_at ? (s && V(`env: run "${i.script.name}" ASAP -> document-start`), n(c)) : "document-body" == i.script.options.run_at ? (s && V(`env: schedule "${i.script.name}" for document-body`),
								o(c)) : "context-menu" == i.script.options.run_at ? (s && V(`env: run "${i.script.name}" ASAP -> context-menu`), n(c)) : "document-end" == i.script.options.run_at ? (s && V(`env: schedule "${i.script.name}" for document-end`), b(t, c), e.domContentLoaded && r.runListeners()) : (s && V(`env: schedule "${i.script.name}" for document-idle`), d = c, b(t, () => {a.setTimeout(d, 1)}), e.domContentLoaded && r.runListeners())
							}
						};
						return r
					})()
					;
				(n || s) && V(`env: initialized (content, id:${K(t, 0, 10)}..., ${a.location.origin}${a.location.pathname}) `);
				const be = {
						createUUID: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
							const t = 16 * q() | 0;
							return ge("x" == e ? t : 3 & t | 8, 16)
						}),
						toType: e => z(k(e, {}), new a.RegExp("\\s([a-z|A-Z]+)"))[1]
					},
					xe = e => a.unescape(a.encodeURIComponent(e)),
					Me = e => a.decodeURIComponent(a.escape(e)),
					Le = e => {
						let t = "";
						for (let n = 0; n < e.length; n++)
							t += W(255 & ee(e, n));
						return a.btoa(t)
					},
					Ee = e => a.atob(e),
					Te = e => {
						const t = new a.Uint8Array(e.length);
						for (let n = 0; n < e.length; n++)
							t[n] = ee(e, n);
						return t.buffer
					},
					Se = (e, t) => new a.Promise(n => {
						const o = new a.FileReader;
						o.onload = () => {n(o.result)}, o.onerror = e => {$("unable to decode data " + e), n("")}, t ? se(o, e, t) : oe(o, e)
					}),
					Ce = (() => {
						const e = {};
						let t;
						const n = t => {
							let n = [],
								o = [];
							const s = () => {n = null, o = null, a = null, delete e[t]};
							var a = {
								postMessage: e => {r.send("port.message", {
										response_id: t,
										value: e
									})},
								onMessage: {
									addListener: e => {b(n, e)}
								},
								onDisconnect: {
									addListener: e => {b(o, e)}
								},
								disconnect: () => {r.send("port.message", {
										response_id: t,
										disconnect: !0
									}), s()}
							};
							return e[t] = {
								message: e => {n && v(n, t => {t(e)})},
								disconnect: e => {o && v(o, t => {t(e)}), s()}
							}, a
						};
						return {
							message: o => {
								let r;
								if (o.connect)
									t && t(o.destination, n(o.response_id));
								else {
									if (!(r = e[o.response_id]))
										return void (s && $("ports: unknown id", o.response_id, o));
									o.disconnect ? r.disconnect() : r.message(o.value)
								}
							},
							connect: e => {
								const t = be.createUUID();
								return r.send("port.message", {
									response_id: t,
									connect: !0,
									destination: e
								}), n(t)
							},
							onConnect: {
								addListener: e => {t = e}
							}
						}
					})(),
					Oe = (() => {
						const e = {
							objs: {},
							push: (t, n) => {
								0 !== n && 1 !== n && (n = 0);
								const o = X(19831206 * q() + 1);
								return e.objs[o] = {
									fn: t,
									prio: n
								}, o
							},
							remove: t => delete e.objs[t],
							get: t => {
								const n = [];
								for (let o = 0; o <= 1; o++)
									v(C(e.objs), s => {e.objs[s].prio !== o || void 0 !== t && s != t || b(n, e.objs[s].fn)});
								return void 0 === t ? n : n[0]
							},
							finalize: t => {
								if (void 0 !== t) {
									let n;
									return e.objs[t] && (n = e.objs[t].fn(), delete e.objs[t]), n
								}
								{
									const t = e.get();
									for (let e = 0; e < t.length; e++)
										t[e]()
								}
							}
						};
						return e
					})(),
					Re = (() => {
						const e = (e, t) => {
								let n,
									o = null,
									r = !1,
									a = null;
								const i = (() => {
									const e = [];
									return {
										run: t => {
											if (t && b(e, t), o)
												for (; e.length;)
													x(e)()
										}
									}
								})();
								let c = Ce.connect("openInTab");
								const d = () => {c && c.postMessage({
										close: !0
									})};
								c.onMessage.addListener(e => {e.tabId ? r ? d() : (o = e.tabId, i.run()) : e.name ? n = e.name : e.closed && (r = !0, a && (a(), a = void 0))}), c.onDisconnect.addListener(() => {c = null}), c.postMessage({
									method: "openTab",
									url: e,
									options: t
								});
								const l = {};
								return O(l, {
									close: {
										value: () => {r ? s && V("env: attempt to close already closed tab!") : d()}
									},
									closed: {
										get: () => r
									},
									onclose: {
										get: () => a,
										set: e => {a = e}
									},
									name: {
										get: () => n,
										set: e => {i.run(() => {c && c.postMessage({
													name: e
												})})}
									}
								}), l
							},
							o = (...e) => {
								const t = "Object" === be.toType(e[0]) ? e[0] : {
										url: e[0],
										name: e[1]
									},
									n = (e, t) => {t = t || {}, e && a.setTimeout(() => {g(e, t, [t])}, 1)};
								let {url: o} = t;
								const {name: s, headers: r, saveAs: i} = t;
								let c = Ce.connect("download");
								return c.onMessage.addListener(e => {
									try {
										e.load ? t.onload && n(t.onload, e.data) : e.progress ? t.onprogress && n(t.onprogress, e.data) : e.timeout ? t.ontimeout && n(t.ontimeout, e.data) : t.onerror && n(t.onerror, e.data)
									} catch (e) {
										N("env: Error: TM_download - ", e, t)
									}
								}), c.onDisconnect.addListener(() => {c = null}), (e => {
									const n = () => {e && (e(), e = null)};
									if (!d.blob_download_supported && o.startsWith("blob:")) {
										const e = new a.XMLHttpRequest;
										ae(e, "GET", o), e.responseType = "blob", e.onload = () => {4 == e.readyState && B(Se(e.response), e => {
												try {
													o = "data:application/octet-stream;base64," + Le(e)
												} catch (e) {
													$("env: Error: TM_download - ", e, t)
												}
												n()
											})}, e.onerror = e.ontimeout = () => {n()}, ue(e)
									} else
										n()
								})(() => {c && c.postMessage({
										details: {
											url: o,
											name: s,
											headers: r,
											saveAs: i
										}
									})}), {
									abort: () => {c && c.postMessage({
											cancel: !0
										})}
								}
							},
							i = ({root: e, tag: t, properties: n, cb: o}) => {
								const s = be.createUUID(),
									a = {
										tag: t,
										properties: n,
										id: s
									};
								return r.send("addElement", a, e, o ? () => o() : null), c.getElementById(s)
							},
							l = {};
						return {
							log: function() {
								g(N, this, arguments)
							},
							addStyle: (e, t) => i({
								tag: "style",
								properties: {
									textContent: e
								},
								cb: t
							}),
							addElement: (...e) => {
								let t,
									n,
									o,
									s;
								return "string" == typeof e[0] ? (n = e[0], o = e[1], s = e[2]) : (t = e[0], n = e[1], o = e[2], s = e[3]), i({
									root: t,
									tag: n,
									properties: o,
									cb: s
								})
							},
							closeTab: e => {r.send("closeTab", null, e ? () => e() : null)},
							focusTab: e => {r.send("focusTab", null, e ? () => e() : null)},
							setClipboard: (e, n, o) => {r.send("setClipboard", {
									content: e,
									info: n,
									id: t
								}, o ? () => o() : null)},
							syntaxCheck: (e, t) => {r.send("syntaxCheck", {
									code: e
								}, t)},
							of: i => {
								const c = i.script,
									u = (() => {
										let e = [];
										const o = i.storage
										;
										let r = 0;
										const d = (e, t) => {
												if ("string" != typeof e)
													return t;
												{
													const n = e[0];
													switch (e = K(e, 1), n) {
													case "b":
														return "true" === e;
													case "n":
														return a.Number(e);
													case "x":
														return Me(Ee(e));
													case "o":
														try {
															return P(e)
														} catch (e) {
															N("values: parseValueFromStorage: " + e)
														}
														return t;
													default:
														return e
													}
												}
											},
											l = (t, n, o, r) => {n != o && v(e, e => {
													if (e && e.key == t && e.cb)
														try {
															e.cb(t, d(n), d(o), r)
														} catch (e) {
															s && $(`values: change listener of "${t}" failed with: ${e.message}`)
														}
												})},
											u = e => {p && p.postMessage({
													method: "saveStorageKey",
													uuid: c.uuid,
													key: e,
													value: o.data[e],
													id: t,
													ts: o.ts
												})};
										var p = Ce.connect("values");
										return p.onMessage.addListener(e => {
											if (!e.storage)
												return;
											const t = e.storage.data;
											e.removed && (t[e.removed] = void 0), v(C(t), e => {
												const s = o.data[e],
													r = t[e];
												void 0 === r ? delete o.data[e] : o.data[e] = r, n && N(`values: message - config key ${e}: ${s} -> ${r}`), l(e, s, r, !0)
											})
										}), p.onDisconnect.addListener(() => {s && N("values: port disconnected"), p = null}), p.postMessage({
											method: "addStorageListener",
											uuid: c.uuid,
											id: t
										}), {
											set: (e, t) => {
												const n = o.data[e];
												o.ts = me(),
												o.data[e] = (e => {
													let t = (typeof e)[0];
													switch (t) {
													case "o":
														try {
															e = t + U(e)
														} catch (e) {
															return void N(e)
														}
														break;
													case "s":
														-1 === Y(e, W(8232)) && -1 === Y(e, W(8233)) || (t = "x", e = Le(xe(e))), e = t + e;
														break;
													default:
														e = t + e
													}
													return e
												})(t), u(e), l(e, n, o.data[e], !1)
											},
											get: (e, t) => d(o.data[e], t),
											remove: e => {
												const t = o.data[e];
												o.ts = me(), delete o.data[e], u(e), l(e, t, o.data[e], !1)
											},
											list: () => C(o.data),
											registerChangeListener: (t, n) => {
												const o = ++r;
												return b(e, {
													id: o,
													key: t,
													cb: n
												}), o
											},
											unregisterChangeListener: t => {e = E(e, e => e.id !== t)}
										}
									})(),
									p = (() => {
										const e = [];
										let n;
										return {
											register: o => {b(e, o), n || (n = Ce.connect("onurlchange"), n.onMessage.addListener(({url: t}) => {t && v(e, e => e({
														url: t
													}))}), n.postMessage({
													method: "observeUrlChanges",
													uuid: c.uuid,
													id: t
												}))},
											unregister: t => {
												let o;
												t && (o = T(e, t)) > -1 && y(e, o, 1), n && 0 === e.length && (n.disconnect(), n = null)
											}
										}
									})(),
									m = {
										getText: e => {
											for (let t = 0; t < c.resources.length; t++) {
												const n = c.resources[t];
												if (n.name == e && !n.failed) {
													try {
														if (null !== n.content)
															return Me(n.content)
													} catch (e) {}
													return ""
												}
											}
											return null
										},
										getURL: e => {
											for (let t = 0; t < c.resources.length; t++) {
												const n = c.resources[t];
												if (n.name == e && !n.failed) {
													if (null === n.content)
														return "";
													try {
														return `data:${n.meta || "application/octet-stream"};base64,${Le(n.content)}`
													} catch (e) {}
													return n.url
												}
											}
											return null
										}
									},
									f = {
										set: (e, t) => {r.send("tabs", {
												action: "set",
												uuid: c.uuid,
												tab: e
											}, t ? () => t() : null)},
										get: e => {r.send("tabs", {
												action: "get",
												uuid: c.uuid
											}, e ? t => {e(t || {})} : null)},
										getAll: e => {r.send("tabs", {
												action: "list",
												uuid: c.uuid
											}, e ? t => {e(t || {})} : null)}
									};
								let w,
									M;
								const S = (() => {
										let e = 0
										;
										const t = {},
											o = {
												register: (s, r, i) => {
													const d = "registerMenuCommand",
														l = ++e,
														u = Ce.connect(d);
													return u.onMessage.addListener(e => {"run" === e && a.setTimeout(r, 1)}), u.onDisconnect.addListener(() => {o.unregister(l)}), u.postMessage({
														method: "register",
														name: s,
														uuid: c.uuid,
														accessKey: i
													}), n && N(`env: ${d} ${h(r)}`), t[l] = u.disconnect, l
												},
												unregister: e => {
													let o;
													n && N("env: unregisterMenuCommand " + e), (o = t[e]) && (o(), delete t[e])
												}
											};
										return o
									})(),
									O = (() => {
										const e = (e, t) => ({
											action: e,
											uuid: c.uuid,
											url: a.location.href,
											details: t
										})
										;
										return {
											set: (t, n) => {r.send("cookie", e("set", t), n ? e => {n(e.error)} : null)},
											delete: (t, n) => {r.send("cookie", e("delete", t), n ? e => {n(e.error)} : null)},
											list: (t, n) => {r.send("cookie", e("list", t), n ? e => {n(e.cookies, e.error)} : null)}
										}
									})();
								return l[i.script.uuid] = l[i.script.uuid] || {
									getInfo: () => {
										if (w)
											return w;
										const e = i.script,
											t = {
												id: 1,
												enabled: 1,
												hash: 1,
												fileURL: 1
											},
											n = {
												script: {}
											};
										v(C(e), o => {t[o] || (n.script[o] = e[o])});
										const o = e.options.updateURL || e.options.fileURL
										;
										return n.script["run-at"] = e.options.override.run_at || e.options.run_at, n.script.excludes = e.options.override.orig_excludes, n.script.includes = e.options.override.orig_includes, n.script.matches = e.options.override.orig_matches, n.script.grant = e.grant, n.script.unwrap = !1, n.scriptMetaStr = i.header, n.scriptSource = i.code, n.scriptWillUpdate = !!o, n.scriptUpdateURL = o, n.version = d.version, n.scriptHandler = "Tampermonkey", n.isIncognito = d.inIncognitoContext, n.isFirstPartyIsolation = d.isFirstPartyIsolation,
										n.downloadMode = d.downloadMode, w = n
									},
									registerMenuCommand: S.register,
									unregisterMenuCommand: S.unregister,
									download: o,
									webRequest: (e, t) => {
										const n = () => {M == o && (M = null), o = null};
										M && M.disconnect();
										var o = M = Ce.connect("webRequest");
										return t && o.onMessage.addListener(e => {t(e.type, e.message || "ok", e.details)}), o.onDisconnect.addListener(n), o.postMessage({
											rules: e,
											uuid: c.uuid
										}), {
											abort: () => {o && o.disconnect(), n()}
										}
									},
									openInTab: e,
									setValue: u.set,
									getValue: u.get,
									deleteValue: u.remove,
									listValues: u.list,
									addUrlChangeListener: p.register,
									removeUrlChangeListener: p.unregister,
									addValueChangeListener: u.registerChangeListener,
									removeValueChangeListener: u.unregisterChangeListener,
									getResourceText: m.getText,
									getResourceURL: m.getURL,
									notification: e => {
										const {text: n, title: o, image: s, highlight: a, silent: i, timeout: c, onclick: d, ondone: l} = e,
											u = {
												id: t,
												text: n,
												title: o,
												image: s,
												highlight: a,
												silent: i,
												timeout: c
											};
										n || a ? r.send("notification", u, e => {d && e.clicked && d(), l && l(!0 === e.clicked)
										}) : $("GM_notification: neither a message text nor highlight options were given!")
									},
									xmlhttpRequest: e => {
										let n = !1;
										const o = e.context,
											s = (() => {
												const e = {};
												v(C(a.XMLHttpRequest.__proto__), t => {e[t] = !0});
												const t = () => {};
												return v(C(a.XMLHttpRequest), n => {e[n] || (t[n] = a.XMLHttpRequest[n])}), t
											})();
										let r = () => {n = !0};
										const i = (e, t) => {t = t || {}, e && a.setTimeout(() => {t.__proto__ = s, g(e, t, [t])}, 1)};
										"object" == typeof e.url && e.url.href && (e.url = e.url.href);
										const l = (e, t) => {
												let n,
													o,
													s,
													r = be.toType(e)
													;
												if ("Blob" === r || "File" === r)
													B(Se(e), n => {t({
															type: r,
															value: n,
															meta: e.type,
															name: e.name,
															lastModified: e.lastModified
														})});
												else if ("FormData" === r)
													if (o = e.keys && e.getAll ? e.keys() : null, o) {
														let r;
														const a = {};
														for (n = []; !(r = o.next()).done;)
															b(n, r.value);
														s = () => {
															if (n.length) {
																const t = x(n);
																let o = e.getAll(t);
																-1 === Y(t, /\[\]$/) && (o = o[0]), l(o, e => {a[t] = e, s()})
															} else
																t({
																	type: "FormData",
																	value: a
																})
														}, s()
													} else
														t({
															error: r
														});
												else if (!(r = be.toType(e)) || "Array" !== r && "Object" !== r)
													t({
														value: e
													});
												else {
													let i,
														c,
														d = 0;
													o = 0, "Object" === r ? (n = C(e),
													c = e => e < n.length ? n[e] : null, i = {}) : (c = t => t < e.length ? t : null, i = []), s = () => {
														const n = c(d);
														null === n ? t({
															type: r,
															value: i
														}) : l(e[n], e => {e.error ? t(e) : (i[n] = e, d++, o++ < 1024 ? s() : (o = 0, a.setTimeout(s, 1)))})
													}, s()
												}
											},
											u = (e, t, n, o) => {
												let s;
												if ("arraybuffer" == n)
													s = t || Te(e);
												else if ("blob" == n)
													s = new a.Blob([t || Te(e)], {
														type: o
													});
												else if ("json" == n)
													s = P(e);
												else {
													if ("document" == n) {
														const t = new a.DOMParser,
															n = Q(o || "text/xml", ";")[0];
														return re(t, e, n)
													}
													s = e || (t ? (e => {
														let t = "";
														const n = new a.Uint8Array(e)
														;
														for (let e = 0; e < n.length; e += 32687)
															t += g(W, null, n.subarray(e, e + 32687));
														return t
													})(t) : "")
												}
												return s
											};
										let p = !0;
										return (t => {
											if (e.url) {
												const n = e.url.substr(0, 5);
												if (-1 != ["data:", "blob:"].indexOf(n))
													return t()
											}
											if (!e.data)
												return t();
											l(e.data, n => {n.error ? (p = !1, $("GM_xmlhttpRequest:", `unable to handle data type ${n.error}. Going to use default xhr as fallback.`)) : (e.binary && (n.type = "Blob"), e.data = n, e.data_type = "typified"), t()})
										})(() => {
											if (n)
												return n = !1, void i(e.onabort);
											if (p) {
												let n,
													o,
													s,
													d = Ce.connect("xhr"),
													l = []
													;
												const {method: p, url: g, headers: m, cookie: f, binary: h, nocache: w, revalidate: y, timeout: x, context: M, responseType: T, overrideMimeType: S, anonymous: O, fetch: A, user: I, password: D, data: k, data_type: P} = e,
													U = {
														method: p,
														url: g,
														headers: m,
														cookie: f,
														binary: h,
														nocache: w,
														revalidate: y,
														timeout: x,
														responseType: T,
														overrideMimeType: S,
														anonymous: O,
														fetch: A,
														user: I,
														password: D,
														data: k,
														data_type: P
													};
												let N,
													j,
													V,
													X,
													q;
												U.headers && v(C(U.headers), e => {"cookie" === te(e) && (U.cookie = U.headers[e], delete U.headers[e])}), d.postMessage({
													method: "xhr",
													details: U,
													callbacks: {
														onloadstart: !!e.onloadstart,
														onload: !!e.onload,
														ondone: !!e.onloadend,
														onreadystatechange: !!e.onreadystatechange,
														onerror: !0,
														onabort: !!e.onabort,
														ontimeout: !!e.ontimeout,
														onprogress: !!e.onprogress,
														onpartial: !0
													},
													id: t,
													url: a.location.href,
													uuid: c.uuid
												});
												const G = async e => {
													if (e && (void 0 !== o || void 0 !== s)) {
														if (V = T ? te(T) : "", S ? X = S : e && (X = (e => {
															const t = {};
															return e && v(Q(e, "\n"), e => {
																const n = z(e, /^([^:]+): ?(.*)/);
																n && (t[te(n[1])] = n[2] || "")
															}), t
														})(e.responseHeaders)["content-type"]), N = o, s) {
															const e = s
															;
															if (j = e.buffer, !["blob", "arraybuffer"].includes(V) && !N) {
																let t;
																_([X, e.ct, e.type], e => t = (z(te(e || ""), /charset=([^;]+)/) || [])[1]);
																const n = new a.Blob([j]);
																q = Se(n, t), N = await q
															}
															q = void 0
														} else
															q && await q;
														o = s = void 0
													}
													if (N || j) {
														e.responseType = T, v(["response_data"], t => {delete e[t]});
														const t = {
															response: () => u(N, j, V, X || "binary/octet-stream"),
															responseText: () => u(N, j, "text", X),
															responseXML: () => u(N, j, "document", "text/xml")
														};
														v(C(t), n => {R(e, n, {
																get() {
																	try {
																		return t[n]()
																	} catch (e) {
																		$(p + ":", e)
																	}
																}
															})})
													}
												}
												;
												d.onMessage.addListener(async t => {
													if (t.data && M && (t.data.context = M), t.onload)
														await G(t.data), i(e.onreadystatechange, t.data), i(e.onload, t.data);
													else if (t.onreadystatechange)
														await G(t.data), 4 != t.data.readyState && i(e.onreadystatechange, t.data);
													else if (t.onpartial) {
														const e = t.data;
														e.partial && b(l, e.partial), e.nada && (n = e.nada), void 0 !== e.index && e.index !== e.length - 1 || (l.length && (o = L(l, ""), l = []), s = n)
													} else if (t.onerror)
														t.exception && F(t.exception),
														i(e.onerror, t.data);
													else if (t.onabort)
														i(e.onabort, t.data);
													else if (t.ondone)
														await G(t.data), i(e.onloadend, t.data);
													else {
														const n = E(["onloadstart", "onprogress", "ontimeout"], e => !!t[e])[0] || "onerror";
														i(e[n], t.data)
													}
												}), d.onDisconnect.addListener(() => {d = null}), r = () => {d && d.postMessage({
														cancel: !0
													})}
											} else {
												const t = new a.XMLHttpRequest;
												void 0 === e.async && (e.async = !0), ae(t, e.method, e.url, e.async, e.user, e.password), e.headers && v(C(e.headers), n => {ie(t, n, e.headers[n])}),
												e.overrideMimeType && ce(t, e.overrideMimeType), e.responseType && (t.responseType = e.responseType), v(["abort", "error", "load", "loadstart", "progress", "readystatechange", "timeout"], n => {t["on" + n] = () => {
														let s = "",
															r = e.url;
														if (t.readyState > 2 && (s = de(t), 4 == t.readyState)) {
															let e;
															s && (s = Z(s, /TM-finalURL[0-9a-zA-Z]*\: .*[\r\n]{1,2}/, ""));
															try {
																e = le(t, "TM-finalURL" + d.short_id)
															} catch (e) {}
															e && (r = e)
														}
														const a = {
															readyState: t.readyState,
															status: "",
															statusText: "",
															responseHeaders: s,
															finalUrl: r,
															context: o
														}
														;
														4 == t.readyState && (t.responseType ? a.response = t.response : (a.responseText = t.responseText, a.responseXML = t.responseXML), a.status = t.status, a.statusText = t.statusText), i(e["on" + n], a)
													}}), ue(t, e.data), r = () => {pe(t)}
											}
										}), {
											abort: () => {r()}
										}
									},
									cookie: O,
									setTab: f.set,
									getTab: f.get,
									getTabs: f.getAll
								}, l[i.script.uuid]
							}
						}
					})();
				var Ae = (() => {
					const t = (e, t, n, o, s) => {
							const r = t[n],
								c = typeof r;
							return o && "string" === c ? t[n] = new a.Function(r) : s && "function" === c && (t[n] = function() {
								return g(r, s, arguments)
							}), g(e, i, t)
						},
						c = (e, t, n, o) => {
							const s = {
									attrChange: 0,
									attrName: null,
									bubbles: !0,
									cancelBubble: !1,
									cancelable: !1,
									clipboardData: void 0,
									currentTarget: null,
									defaultPrevented: !1,
									eventPhase: 0,
									newValue: null,
									prevValue: null,
									relatedNode: null,
									returnValue: !0,
									srcElement: null,
									target: null,
									timeStamp: me()
								},
								r = "string" == typeof n ? new a.Function(n) : n,
								i = new Event;
							v(C(s), e => {i[e] = s[e]}), v(C(t), e => {i[e] = t[e]}), i.type = e, g(r, o, [i])
						},
						h = (e, t, s) => {
							(n || o) && N("env: postLoadEvent!"), s = s || document;
							const r = {
								attrName: "null",
								newValue: "null",
								prevValue: "null",
								eventPhase: a.Event.AT_TARGET,
								attrChange: a.MutationEvent.ADDITION,
								target: s,
								relatedNode: s,
								srcElement: s
							};
							c(ve, r, e, t)
						},
						_ = (e, t, s) => {
							(n || o) && N("env: postDomEventListener!"), s = s || document;
							const r = {
								attrName: "null",
								newValue: "null",
								prevValue: "null",
								eventPhase: a.Event.AT_TARGET,
								attrChange: a.MutationEvent.ADDITION,
								target: s,
								relatedNode: s,
								srcElement: s
							};
							c(he, r, e, t)
						},
						x = (e, t) => (void 0 === t && (t = 100), t && e && (e == document || x(e.parentNode, t - 1))),
						E = (() => {
							let t = null;
							return n => {t || (t = {
									instance: n,
									is_open: !1
								},
								v(["write", "writeln", "open", "close"], o => {t[o] = n[o], n[o] = function() {
										let s = !1;
										-1 != T(["write", "writeln", "open"], o) ? t.is_open ? s = !0 : t.is_open = !0 : "close" === o && (t.is_open = !1), !s && t.is_open && r.send("document.write");
										const a = document.documentElement,
											i = g(t[o], n, arguments);
										if (!s && t.is_open)
											return a !== document.documentElement && (t.instance !== n && (t = null, E(document)), v(e.write_listeners, e => {e(document)})), i
									}}))}
						})(),
						k = {},
						P = [],
						X = [],
						q = (r, i, c) => {
							let d;
							if (X.forEach(e => {e.object === r && (d = !0)}), !d) {
								const d = {
									object: r,
									addEventListener: r.addEventListener,
									removeEventListener: r.removeEventListener
								};
								X.push(d);
								const l = [],
									p = e => {
										for (let t = 0; t < l.length; t++)
											if (l[t].fn === e)
												return t
									};
								r.removeEventListener = function(e, t, n) {
									let o,
										s,
										r;
									if (n = !!n, void 0 === (o = p(t)) || !(s = l[o].listeners))
										return g(d.removeEventListener, this, arguments);
									(r = s[`${e}-${n}`]) && (g(d.removeEventListener, this, [e, r, n]), delete s[`${e}-${n}`]), A(s).length || y(l, o, 1)
								};
								const f = (e, t, n, o) => {
									if (t) {
										let s = P.length
										;
										const r = a.parseInt(L([n == he ? 1 : 2, o ? 1 : 2, o ? t : 3 - t, me()], "0"));
										for (let e = 0; e < P.length; e++) {
											const t = P[e];
											if (!t || !t.prio || t.prio > r) {
												s = e;
												break
											}
										}
										y(P, s, 0, {
											prio: r,
											fn: e
										})
									} else
										b(P, {
											fn: e
										})
								};
								r.addEventListener = function(r, u, v) {
									(n || o) && N("env: addEventListener " + r);
									const w = this;
									if (u && (1 == i && r == ve || r == he || r == we)) {
										let n,
											o;
										v = !!v;
										try {
											try {
												throw new a.Error
											} catch (e) {
												const t = /tms_[0-9a-f_]+/,
													o = e.stack || e.stacktrace;
												if (o) {
													const e = Q(o, "\n");
													for (let o, s = 0; s < e.length && (!(o = z(e[s], t)) || !(n = k[o[0]])); s++)
														;
												}
											}
										} catch (e) {
											s && F("env: Error: event " + r, e)
										}
										if (n && "document-idle" !== n.run_at) {
											let t = null;
											if (r == ve ? e.pageLoaded && (t = () => {n.load_fired = !0, h(u, w, w.document || w)}, f(t, i, r, v)) : r == he && e.domContentLoaded && !n.load_fired && (t = () => {_(u, w, w.document || w)}, f(t, i, r, v)), t) {
												const e = () => {
													if (P.length) {
														const e = M(P);
														e && e.fn && e.fn()
													}
												};
												return void a.setTimeout(e, 1)
											}
										}
										const y = function(e) {
											return t(m, [u, this, c(e)], 0, !0, w)
										};
										return void 0 === (o = p(u)) && (o = l.length, b(l, {
											fn: u,
											listeners: {}
										})), l[o].listeners[`${r}-${v}`] = y,
										g(d.addEventListener, w, [r, y, v])
									}
									return g(d.addEventListener, w, arguments)
								};
								try {
									const e = () => "[native code]";
									[r.addEventListener, r.removeEventListener].forEach(t => {u(t, "toString", e)})
								} catch (e) {}
							}
						},
						W = e => {e.__evaluate || (O(e, {
								__evaluate: {
									value: e.evaluate,
									enumerable: !1,
									configurable: !1
								}
							}), e.evaluate = function(e, t, o, s, r) {
								let a;
								if (n && N("env: document.evaluate " + e), t || (t = this), "undefined" != typeof XPathResult) {
									let i = e,
										c = null;
									try {
										a = this.__evaluate(i, t, o, s, r)
									} catch (e) {
										c = e
									}
									let d = !1;
									try {
										d |= !!a.snapshotLength
									} catch (e) {}
									try {
										d |= !!a.singleNodeValue
									} catch (e) {}
									if (d || "." == e[0] || x(t))
										n && N("env: queried document for " + i);
									else {
										n && N("env: query added elem for " + i), i = ("/" == e[0] ? "." : "./") + e;
										try {
											a = this.__evaluate(i, t, o, s, r)
										} catch (e) {}
									}
									if (n && N("env: query returned ", a, c), !d && c)
										throw c
								} else
									n && N("env: XPathResult == undefined, but selectNodes via ", e), a = t.selectNodes(e);
								return a
							}, b(Oe, () => {e.evaluate = e.__evaluate}))},
						K = () => new Window,
						Y = (n, o, s) => {
							const r = ["eval"],
								c = {};
							v(C(n), e => {
								n[e].context_prop && (c[(e.split(".") || [])[1]] = !0)});
							const m = (e, t, n, o) => {
								const s = n => n === t ? e : n,
									u = (n, o, r, a) => {
										let i,
											c,
											d;
										const l = a && a.def || {
											enumerable: !0,
											configurable: !0
										};
										(d = "function" == typeof o) ? l.get = o : l.get = function() {
											return a && a.get_cb && g(a.get_cb, this, [arguments, u]), c ? i : s(t[n])
										}, "function" == typeof r ? l.set = r : d && !r || (l.set = function(t) {
											a && a.overwrite ? R(e, n, {
												value: t,
												enumerable: !0,
												configurable: !0
											}) : (i = t, c = !0)
										}), R(e, n, l)
									};
								v(C(o), e => {n[e] = n[e] || !1 !== o[e]})
								;
								const p = d.sandbox_allow_getters,
									m = d.detect_constructors_by_keys;
								return v(C(n), d => {
									let h,
										v,
										w,
										y,
										_,
										b,
										x,
										M,
										L,
										E,
										S,
										O,
										A,
										D;
									try {
										let k;
										(k = I(t, d)) && k.get && (_ = !l(k.get));
										try {
											if (!(v = o[d]) || v.needs_grant && !0 !== c[d])
												if ((h = n[d]) && h.event)
													A = !0;
												else if (k && k.get)
													if (_) {
														if (!p)
															return;
														x = !0
													} else
														x = () => s(g(k.get, i));
												else
													"function" == (y = typeof (w = t[d])) ? h.proto ? b = !0 : !k.enumerable && (m && C(w).length || !l(w)) || -1 != T(r, d) || !("bind" in w) ? E = !0 : S = !0 : "number" === y || "string" === y ? x = !0 : E = !0;
											else
												v.wrap ? (b = !0,
												O = v.that) : v.direct ? E = !0 : v.enhance ? D = v.enhance : (v.get || v.set) && (x = v.get, M = v.set, L = v.opts)
										} catch (e) {
											x = M = !0
										}
										if (D)
											e[d] = D;
										else {
											if (_ && !p)
												return;
											A ? (t => {
												let n;
												const o = t.substr(2);
												let s;
												R(e, t, {
													get: () => n,
													set: t => {n = t, n && !s ? (s = function() {
															if ("function" == typeof n)
																return g(n, e, arguments)
														}, a.addEventListener(o, s, !0)) : !n && s && (a.removeEventListener(o, s, !0), s = null)}
												})
											})(d) : x || M ? u(d, x, M, L) : b ? e[d] = ((e, t, n, o) => {
												n || (n = e);
												const s = e[t],
													r = function() {
														let e = g(s, n, arguments);
														return o && (e = o(e)), e
													};
												return r.__proto__ = s,
												r.prototype = s.prototype, r
											})(t, d, O, s) : E ? e[d] = s(t[d]) : S && (e[d] = f(t[d], t))
										}
									} catch (e) {
										$(`env: error while creating a new sandbox[${d}]: ${e.message}`)
									}
								}), e
							};
							return (() => {
								const n = K(),
									r = function(e, n) {
										if ("urlchange" != e || !c.onurlchange)
											return t(a.addEventListener, arguments, 1, !0);
										o.addUrlChangeListener(n)
									},
									d = function(e, n) {
										if ("urlchange" != e || !c.onurlchange)
											return t(a.removeEventListener, arguments, 1, !0);
										o.removeUrlChangeListener(n)
									},
									l = {
										setTimeout: {
											enhance: (...e) => t(ye.setTimeout, e, 0, !0, n)
										},
										setInterval: {
											enhance: (...e) => t(ye.setInterval, e, 0, !0, n)
										},
										close: {
											needs_grant: !0,
											get: () => a.self == a.top ? e => Re.closeTab(e) : a.close
										},
										focus: {
											needs_grant: !0,
											get: () => e => Re.focusTab(e)
										},
										onurlchange: (f = null, {
											needs_grant: !0,
											get: () => f,
											set: e => {f && d("urlchange", f), r("urlchange", f = e)}
										}),
										location: {
											get: !0,
											set: e => {a.location.href = e}
										},
										name: {
											get: () => p(i, "name"),
											set: e => {u(i, "name", e)}
										},
										event: {
											get: !0,
											set: !0,
											opts: {
												overwrite: !0
											}
										},
										document: {
											get: () => {
												const e = a.document;
												return s(e), e
											}
										},
										clearInterval: {
											get: () => a.clearInterval
										},
										clearTimeout: {
											get: () => a.clearTimeout
										},
										addEventListener: {
											enhance: r
										},
										removeEventListener: {
											enhance: d
										},
										toString: {
											get: () => () => "[object Window]",
											opts: {
												def: {
													enumerable: !1,
													configurable: !1
												}
											}
										},
										toStringTag: {
											get: () => () => "Window",
											opts: {
												def: {
													enumerable: !1,
													configurable: !1
												}
											}
										}
									};
								var f;
								(() => {
									let e = G(a.frames.length, 7);
									l.length = {
										get: !0,
										opts: {
											get_cb: (t, n) => {
												const o = a.frames.length;
												for (let t = e; t < o; t++)
													n(a.String(t), {
														get: !0
													});
												e = G(o, e)
											}
										}
									};
									for (let t = 0; t < e; t++)
										l[a.String(t)] = {
											get: !0
										}
								})(), v(C(a), e => {a[e] != i && (l[e] = l[e] || {
										enhance: a[e]
									})});
								const h = m(n, i, e.windowProps, l),
									w = {
										context: h,
										filter: e => e == i ? h : e,
										filterEvent: function(e) {
											const t = {};
											for (const n in e)
												if ("function" == typeof e[n])
													t[n] = (() => {
														const t = n;
														return function() {
															return g(e[t], e, arguments)
														}
													})();
												else {
													const o = w.filter(e[n]);
													t[n] = o
												}
											return t
										}
									};
								return w
							})()
						},
						ee = () => ((e, t, n) => {
							const o = D(t);
							return v(C(o), n => {
								const s = o[n];
								s && s.get && !l(s.get) || ("function" == typeof t[n] ? e[n] = f(t[n], t) : (() => {
									const o = n;
									R(e, o, {
										get: () => t[o]
									})
								})())
							}), v(C(n), t => {e[t] = n[t]}), e
						})({}, a.console, {
							debug: V,
							log: N,
							info: j,
							warn: $,
							error: F
						});
					return {
						create: t => {
							const o = t.script,
								r = {},
								c = -1 !== T(o.grant, "none"),
								l = `${o.namespace}_${c}`;
							void 0 === e.props[l] && (e.props[l] = {
								sandboxes: {},
								elements: {}
							}, b(Oe, () => {e.props[l] = null})), r.CDATA = {
								value: function(e) {
									this.src = e, this.toString = function() {
										return this.src
									}, this.toXMLString = this.toString
								}
							}, r.uneval = {
								value: e => {
									try {
										return `\\$1 = ${U(e)};`
									} catch (e) {
										N(e)
									}
								}
							}, r.define = {
								value: void 0
							}, r.module = {
								value: void 0
							}, r.exports = {
								value: void 0
							}
							;
							const p = {},
								m = {},
								f = {},
								h = {},
								y = Re.of(t);
							if (c)
								;
							else {
								r.window = {
									value: "context",
									overwrite: !0
								}, r.globalThis = {
									value: "context",
									overwrite: !0
								};
								const e = {
									window: i
								};
								v(C(e), t => {
									const n = Z(t, /^(.)/g, e => ne(e));
									r["unsafe" + n] = {
										value: e[t]
									}
								}), r.console = {
									value: ee()
								}, r.cloneInto = {
									value: e => e
								}, r.exportFunction = {
									value: (e, t, n) => (n && void 0 !== n.defineAs && (t[n.defineAs] = e), e)
								}, r.createObjectIn = {
									value: (e, t) => {
										const n = {};
										return t && void 0 !== t.defineAs && (e[t.defineAs] = n), n
									}
								}, p.addStyle = Re.addStyle, p.addElement = Re.addElement,
								p.deleteValue = y.deleteValue, p.listValues = y.listValues, p.getValue = y.getValue, p.setValue = y.setValue, p.log = Re.log, p.registerMenuCommand = y.registerMenuCommand, p.unregisterMenuCommand = y.unregisterMenuCommand, p.openInTab = y.openInTab, p.addValueChangeListener = y.addValueChangeListener, p.removeValueChangeListener = y.removeValueChangeListener, h.xmlhttpRequest = y.xmlhttpRequest, h.download = y.download, p.webRequest = y.webRequest, m.getTab = y.getTab, p.setTab = y.setTab, p.saveTab = y.setTab, m.getTabs = y.getTabs,
								p.getResourceText = y.getResourceText, h.getResourceURL = y.getResourceURL, m.setClipboard = {
									cb: 2,
									fn: Re.setClipboard
								};
								const t = e => function() {
										const t = H(g(e, this, arguments));
										return u(t, "then", e => B(t, e)), u(t, "catch", e => J(t, e)), t
									},
									n = (e, t) => {
										let n;
										const o = new a.Promise((o, s) => {
											const r = {},
												a = t.onload,
												i = t.ontimeout,
												c = t.onerror;
											v(C(t), e => {r[e] = t[e]}), r.onerror = function(e) {
												s(e), c && g(c, this, arguments)
											}, r.ontimeout = function(e) {
												s(e), i && g(i, this, arguments)
											}, r.onload = function(e) {
												o(e), a && g(a, this, arguments)
											}
											;
											const d = e(r).abort;
											!0 === n ? d() : n = d
										});
										return u(o, "abort", () => {n ? n() : n = !0}), o
									};
								v(C(h), e => {f["GM_" + e] = {
										value: h[e]
									}}), v(C(m), e => {
									const t = m[e];
									f["GM_" + e] = {
										value: t.fn || t
									}, f["GM." + e] = {
										value: function() {
											let e,
												n = [];
											if (void 0 === t.cb)
												e = t;
											else {
												e = t.fn;
												for (let e = 0; e < t.cb; e++)
													n.push(arguments[e] || void 0)
											}
											return new fe(t => {g(e, this, [...n, t])})
										}
									}
								}), v(C(p), e => {
									const n = p[e];
									f["GM_" + e] = {
										value: n
									}, f["GM." + e] = {
										getter: () => t(n)
									}
								}), f["GM.getResourceUrl"] = {
									getter: () => t(h.getResourceURL)
								}, f["GM.xmlHttpRequest"] = {
									value: e => n(h.xmlhttpRequest, e)
								}, f["GM.download"] = {
									value: e => n(h.download, e)
								};
								const s = (e, t, n, s) => {
									let r = null,
										a = null;
									const i = {};
									"object" == typeof e && (a = e), a ? (v(["timeout", "text", "image", "title", "highlight", "silent"], e => {i[e] = a[e]}), r = a.ondone, s = a.onclick, "function" == typeof t && (r = t)) : (i.image = n, i.title = t, i.text = e), i.text && (i.image = i.image || o.icon64 || o.icon, i.title = i.title || o.name), i.onclick = s, i.ondone = r, y.notification(i)
								};
								f.GM_notification = {
									value: s
								}, f["GM.notification"] = {
									value: (e, t, n, o) => {
										let r
										;
										return r = "object" == typeof e ? e : {
											text: e,
											title: t,
											image: n,
											onclick: o
										}, new fe(e => {
											let t = {};
											v(C(r), e => {t[e] = r[e]});
											const n = t.ondone;
											t.ondone = (...t) => {n && n(...t), e(...t)}, s(t)
										})
									}
								}, f.GM_cookie = {
									value: (() => {
										const e = y.cookie,
											t = (t, n, o) => (e[t] || (() => {}))(n, o);
										return v(C(e), n => {t[n] = e[n]}), t
									})()
								}, f["GM.cookie"] = {
									value: (() => {
										const e = y.cookie,
											t = (e, t) => new fe((n, o) => {"list" == e ? f.GM_cookie.value(e, t, (e, t) => {t ? o(t) : n(e)}) : f.GM_cookie.value(e, t, e => {e ? o(e) : n()})});
										return v(C(e), e => {t[e] = n => t(e, n)}), t
									})()
								},
								f["window.close"] = {
									context_prop: !0
								}, f["window.focus"] = {
									context_prop: !0
								}, f["window.onurlchange"] = {
									context_prop: !0
								}
							}
							f.GM_info = f["GM.info"] = {
								getter: y.getInfo
							};
							const _ = {};
							var x,
								M,
								A,
								I;
							r.GM = {
								value: _,
								protect: !0
							}, x = r, M = o.grant, A = f, void 0 === (I = (e, t) => {
								if ("GM." !== e.substr(0, 3))
									return t.protect = !0, t;
								e = e.split(".")[1], R(_, e, {
									get: t.getter ? t.getter : () => t.value
								})
							}) && (I = (e, t) => t), v(S(["GM_info", "GM.info"], M), e => {
								let t;
								const n = A[e];
								n && (t = I(e, n)) && (x[e] = t)
							}),
							o.options.compat_prototypes && ((n || s) && N("env: option: add toSource"), a.Object.prototype.toSource || O(a.Object.prototype, {
								toSource: {
									value: function() {
										const e = be.toType(this);
										if ("String" === e)
											return `(String("${Z(this, new a.RegExp('"', "g"), '\\"')}"))`;
										if ("Number" === e)
											return `(Number("${a.Number(this)}"))`;
										if ("Array" === e) {
											let e = "(new Array(";
											for (let t = 0; t < this.length; t++) {
												const n = this[t],
													o = be.toType(n);
												e += "Null" === o ? "null" : "Undefined" === o ? "undefined" : this[t].toSource(), t + 1 < this.length && (e += ",")
											}
											return e += "))", e
										}
										return `JSON.parse(unescape("${a.escape(U(this))}"))`
									},
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), (n || s) && N("env: option: add some array generics"), v(["indexOf", "lastIndexOf", "filter", "forEach", "every", "map", "some", "slice"], e => {
								if ("function" != typeof a.Array[e]) {
									const t = {};
									t[e] = {
										value: function(t) {
											return g(a.Array.prototype[e], t, g(w.wrappedJSObject, arguments, [1]))
										},
										enumerable: !1,
										writable: !0,
										configurable: !0
									}, O(a.Array, t)
								}
							}));
							let D,
								P = "";
							if (c)
								D = K();
							else {
								const e = Y(r, y, t => {W(t), E(t),
										q(t, 2, e.filterEvent)}),
									t = {
										run_at: o.options.run_at,
										uuid: o.uuid
									};
								P = "tms_" + Z(o.uuid, /-/g, "_"), ((e, t) => {k[e] = t, a.addEventListener("load", () => {a.setTimeout(() => delete k[e], 1)})})(P, t), q(e.context, 1, e.filterEvent), D = e.context
							}
							e.props[l].sandboxes[o.uuid] = D, e.props[l].elements[o.uuid] = r, (n || s) && V(`env: execute script ${o.name} @ the ${c ? "un" : ""}safe context now!`), ((t, n, o, r, i, c) => {
								let l = null;
								const p = () => "[Tampermonkey property]";
								try {
									const s = r.sandboxes[t.uuid],
										f = ["context", "fapply"],
										h = [void 0, void 0],
										w = r.elements[t.uuid];
									let y;
									v(C(w), e => {
										const t = w[e];
										t.overwrite ? (b(f, e), b(h, t.value)) : t.context_prop || (b(f, e), b(h, "context." + e), t.getter ? R(s, e, {
											get: t.getter
										}) : s[e] = t.value), t.protect && s[e] && u(s[e], "toString", p)
									}),
									l = L(["((context, fapply, console) => {", "with (context) {", "(module => {", '"use strict";', "try {", d.measure_scripts ? `console.time("${y = `SCRIPT RUN TIME[${t.name.replace(/\W+/g, " ")}]`}");\n` : "", "fapply(module, context, [", L(h, ","), "]);", d.measure_scripts ? `console.timeEnd("${y}");\n` : "", "} catch (e) {", "if (e.message && e.stack) {", "console.error(\"ERROR: Execution of script '", (m = t.name,
									Z(m, new a.RegExp("[\"']", "g"), "\\$1")), "' failed! \" + e.message);", 'console.log(e.stack.replace(/(\\\\(eval at )?<anonymous>[: ]?)|([\\s.]*at Object.tms_[\\s\\S.]*)/g, ""));', "} else {", "console.error(e);", "}", "}", "})", "(" + (d.top_level_await ? "async " : "") + "function ", i, "(", L(f, ","), ") {", d.enforce_strict_mode ? '"use strict";\n' : "", o, n, "\n", "})", "}", "})(that.context, that.fapply, that.console);\n", c ? `//# sourceURL=${c}\n` : ""], "");
									const _ = {
										context: s,
										fapply: g,
										console: ee()
									};
									e.E_u(l, _)
								} catch (e) {
									return void Re.syntaxCheck(L([o, n], ""), r => {
										let i = "";
										if (r.errors) {
											const e = Q(o, "\n").length - 1;
											let t = "";
											r.errors && v(C(r.errors), n => {
												const o = r.errors[n];
												if (o && o.line >= 0 && o.reason) {
													const n = o.line;
													t += L([n > e ? "script:" : "require:", " (", o.code, ") ", Z(o.reason, /.$/, ""), " on line: ", n > e ? n - e : n, " at character: ", o.character, "\n"], "")
												}
											}), i = "JSHINT output:\n" + t
										} else
											i = n;
										const c = e.stack ? Z(e.stack, /(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g, "") : ""
										;
										s || r.errors ? F(`Syntax error @ "${t.name}"!\n##########################\n${i}##########################\n\n${c}`) : F(`Syntax error @ "${t.name}"!\n\n`, c), a.setTimeout(() => {throw e}, 1)
									})
								}
								var m
							})(o, t.code, t.requires, e.props[l], P, t.source_url)
						}
					}
				})();
				(() => {
					if (!d.external_connect)
						return;
					let e;
					if (e = i.external) {
						const t = (e, t) => {r.send("external.message", e, t)};
						try {
							O(e, {
								Tampermonkey: {
									get: () => ({
										getVersion: e => {t({
												method: "getVersion"
											}, e)},
										isInstalled: (e, n, o) => {"function" == typeof n && (o = n, n = null), t({
												method: "isInstalled",
												script: {
													name: e,
													namespace: n
												}
											}, o)}
									}),
									configurable: !0
								}
							})
						} catch (e) {}
					}
				})(), r.onMessage.setListener(({method: t, args: n}) => {"load" == t ? (e.pageLoaded = !0, _e.runListeners()) : "DOMContentLoaded" == t ? (e.domContentLoaded = !0, _e.runListeners()) : "setForeignAttr" == t ? i[n.attr] = n.value : "port.message" == t ? Ce.message(n) : "executeScript" == t ? _e.run(n) : "cleanup" == t ? r.cleanup() : s && N("env: unkown method", t, n)}), s && N("Tampermonkey started"), v(e.scripts, e => {_e.run(e)})
			};
		(async () => {
			const e = window.rea
			;
			void 0 === e.globals._content && (e.globals._content = !0, (e => {
				const t = e.rea;
				let n;
				const a = (() => {
						const e = e => ({}.toString.apply(e).match(/\s([a-z|A-Z]+)/)[1]),
							t = n => {
								if ("Object" == e(n)) {
									const e = [];
									for (const o in n)
										n.hasOwnProperty(o) && e.push(o + ":" + t(n[o]));
									return "{" + e.join(",") + "}"
								}
								if ("Array" == e(n)) {
									const e = [];
									return n.forEach(n => {e.push(t(n))}), "[" + e.join(",") + "]"
								}
								return void 0 === n ? "undefined" : null === n ? "null" : "Function" == e(n) ? n.toString() : '"' + n.toString() + '"'
							};
						return {
							createUUID: () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
								const t = 16 * Math.random() | 0;
								return ("x" == e ? t : 3 & t | 8).toString(16)
							}),
							processQueue: e => {
								let t;
								for (; t = e.shift();)
									t()
							},
							serialize: t,
							toType: e
						}
					})(),
					i = (() => {
						const e = {
								_content: !0,
								JSHINT: !0
							},
							t = new RegExp("(" + ["webkitStorageInfo", "webkitIDB.*", "webkitIndexedDB", "webkitOfflineAudioContext", "webkitAudioContext", "webkitURL", "webkitSpeech.*", "Bluetooth.*", "MIDI.*", "StorageManager"].join("|") + ")");
						return () => {
							const n = {};
							let o,
								s
								;
							const r = Object.getOwnPropertyNames(window),
								a = ((e, t) => {
									for (; (e = Object.getPrototypeOf(e)) && e !== Object.prototype;)
										t = t.concat(Object.getOwnPropertyNames(e));
									return t
								})(window, []);
							for (o = 0, s = null; s = a[o]; o++)
								e[s] || t.exec(s) || (s.length > 2 && "on" === s.substr(0, 2) ? n[s] = {
									proto: !0,
									event: !0
								} : n[s] = {
									proto: !0
								});
							for (o = 0, s = null; s = r[o]; o++)
								e[s] || n[s] || t.exec(s) || (s.length > 2 && "on" === s.substr(0, 2) ? n[s] = {
									window: !0,
									event: !0
								} : n[s] = {
									window: !0
								});
							const i = {
								addEventListener: {
									window: 1
								},
								alert: {
									window: 1
								},
								atob: {
									window: 1
								},
								blur: {
									window: 1
								},
								btoa: {
									window: 1
								},
								clearInterval: {
									window: 1
								},
								clearTimeout: {
									window: 1
								},
								close: {
									window: 1
								},
								confirm: {
									window: 1
								},
								decodeURI: {
									window: 1
								},
								decodeURIComponent: {
									window: 1
								},
								dispatchEvent: {
									window: 1
								},
								encodeURI: {
									window: 1
								},
								encodeURIComponent: {
									window: 1
								},
								eval: {
									window: 1
								},
								find: {
									window: 1
								},
								focus: {
									window: 1
								},
								getComputedStyle: {
									window: 1
								},
								getSelection: {
									window: 1
								},
								isFinite: {
									window: 1
								},
								isNaN: {
									window: 1
								},
								location: {
									window: 1
								},
								open: {
									window: 1
								},
								openDialog: {
									window: 1
								},
								parseFloat: {
									window: 1
								},
								parseInt: {
									window: 1
								},
								postMessage: {
									window: 1
								},
								print: {
									window: 1
								},
								prompt: {
									window: 1
								},
								removeEventListener: {
									window: 1
								},
								resizeBy: {
									window: 1
								},
								resizeTo: {
									window: 1
								},
								scroll: {
									window: 1
								},
								scrollBy: {
									window: 1
								},
								scrollByLines: {
									window: 1
								},
								scrollByPages: {
									window: 1
								},
								scrollTo: {
									window: 1
								},
								setInterval: {
									window: 1
								},
								setTimeout: {
									window: 1
								},
								stop: {
									window: 1
								}
							};
							return Object.keys(i).forEach(e => {n[e] || (n[e] = i[e])}), n
						}
					})(),
					c = a.createUUID(),
					d = window.self == window.top;
				let l = 0;
				const u = (e => {
						const n = t.FEATURES.RUNTIME.FIREFOX ? e => window.cloneInto(e, document.defaultView) : e => e,
							o = e => {
								const t = ++d;
								return l[d] = e, t
							},
							s = t => {
								const {m: o, a: s, r, n: a} = t;
								((...t) => {e.dispatchEvent.apply(e, t)})(((t, o, s) => {
									let r;
									return s ? (r = e.createEvent("MutationEvent"), r.initMutationEvent(t, !1, !1, s || null, null, null, JSON.stringify(o), r.ADDITION)) : r = new window.CustomEvent(t, {
										detail: n(o)
									}), r
								})(i, {
									m: o,
									a: s,
									r
								}, a))
							};
						let r,
							a;
						var i;
						let c;
						var d = 1,
							l = {};
						return {
							init: t => {c || (c = t), i = "2P_" + c, a = "2C_" + c, ((...t) => {e.addEventListener.apply(e, t)})(a, e => {
									const t = (n = e).detail || JSON.parse(n.attrName);
									var n
									;
									if ("message.response" == t.m)
										((e, t) => {
											let n;
											e && (n = l[e]) && (n(t), delete l[e])
										})(t.r, t.a);
									else if (r) {
										const n = t.r ? e => {s({
												m: "message.response",
												a: e,
												r: t.r
											})} : () => {};
										r({
											method: t.m,
											args: t.a,
											node: e.relatedNode,
											sendResponse: n
										})
									}
								}, !1)},
							send: (e, t, n) => {s({
									m: e,
									a: t,
									r: n ? o(n) : null
								})},
							onMessage: {
								addListener: e => {r = e}
							},
							cleanup: () => {((...t) => {e.removeEventListener.apply(e, t)})(a, r, !1)}
						}
					})(document),
					p = (() => {
						const e = {};
						let t;
						const o = t => {
							let n = [],
								o = [];
							const s = () => {n = null, o = null, r = null, delete e[t]};
							var r = {
								postMessage: e => {
									u.send("port.message", {
										response_id: t,
										value: e
									})},
								onMessage: {
									addListener: e => {n.push(e)}
								},
								onDisconnect: {
									addListener: e => {o.push(e)}
								},
								disconnect: () => {u.send("port.message", {
										response_id: t,
										disconnect: !0
									}), s()}
							};
							return e[t] = {
								message: e => {n && n.forEach(t => {t(e)})},
								disconnect: e => {o && o.forEach(t => {t(e)}), s()}
							}, r
						};
						return {
							message: s => {
								let r;
								if (s.connect)
									t && t(s.destination, o(s.response_id));
								else {
									if (!(r = e[s.response_id]))
										return void (n && console.warn("ports: unkown id", s.response_id, s))
										;
									s.disconnect ? r.disconnect() : r.message(s.value)
								}
							},
							connect: e => {
								const t = a.createUUID();
								return u.send("port.message", {
									response_id: t,
									connect: !0,
									destination: e
								}), o(t)
							},
							onConnect: {
								addListener: e => {t = e}
							}
						}
					})(),
					g = (() => {
						let e,
							t;
						const o = [],
							s = [];
						let r = () => {n && console.log("content: detected DOMContentLoaded " + c), t = !0, window.removeEventListener("DOMContentLoaded", r, !1), r = null, a.processQueue(o)},
							i = () => {n && console.log("content: detected load " + c), t = !0, e = !0, d.cleanup(), a.processQueue(s)}
							;
						window.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", i, !1);
						var d = {
							registerDomListener: n => {t || e ? n() : o.push(n)},
							registerPageListener: t => {e ? t() : s.push(t)},
							forcedLoad: () => {e || t || !i || (n && console.log("content: use forced load " + c), i(!0))},
							seen: (() => {
								const n = {};
								return Object.defineProperties(n, {
									load: {
										get: () => e,
										enumerable: !0
									},
									DOMContentLoaded: {
										get: () => t,
										enumerable: !0
									}
								}), n
							})(),
							cleanup: () => {r && (window.removeEventListener("DOMContentLoaded", r, !1), r = null),
								i && (window.removeEventListener("load", i, !1), i = null)}
						};
						return d
					})(),
					m = e => {t.page.eval("(" + o + ')(window, document,"' + e + '",' + n + ");\n")},
					f = () => {u.send("cleanup")},
					h = (e, o) => {
						const a = {
							short_id: t.runtime.short_id
						};
						["isFirstPartyIsolation", "downloadMode", "enforce_strict_mode", "top_level_await", "measure_scripts", "version", "external_connect"].forEach(t => {a[t] = e[t]}), a.sandbox_allow_getters = !0, a.detect_constructors_by_keys = t.FEATURES.RUNTIME.DETECT_CONSTRUCTORS_BY_KEYS,
						a.inIncognitoContext = t.extension.inIncognitoContext, a.blob_download_supported = !t.FEATURES.RUNTIME.FIREFOX, n && (g.seen.load ? console.log("content: Start ENV with page loaded " + c) : g.seen.DOMContentLoaded ? console.log("content: Start ENV with DOMContentLoaded " + c) : console.log("content: Start ENV normally " + c));
						const i = s(c, JSON.stringify(e.scripts), JSON.stringify(o), JSON.stringify(a), JSON.stringify({}), l, void 0, void 0, void 0, void 0, n, g.seen.load, g.seen.DOMContentLoaded, r);
						u.send("next", {
							src: i
						})
					},
					v = (() => {
						const e = {
								setInterval: e => {
									let t;
									e.onMessage.addListener(n => {"setInterval" == n.method && (t = window.setInterval(e.postMessage, n.t))}), e.onDisconnect.addListener(() => {t && window.clearInterval(t), t = null})
								},
								registerMenuCommand: e => {
									const n = t.extension.connect("registerMenuCommand");
									n.onMessage.addListener(t => {t.run && null !== n && e.postMessage("run")}), n.onDisconnect.addListener(() => {e.disconnect()}), e.onMessage.addListener(e => {
										if ("register" !== e.method)
											return
											;
										const t = e.name,
											o = e.uuid,
											s = e.accessKey,
											r = [c, t, o].join("#");
										n.postMessage({
											method: "registerMenuCommand",
											name: t,
											uuid: o,
											menuId: r,
											accessKey: s
										})
									}), e.onDisconnect.addListener(() => {n.disconnect()})
								},
								openInTab: e => {
									const n = t.extension.connect("openInTab");
									n.onMessage.addListener(t => {e.postMessage(t)}), n.onDisconnect.addListener(() => {e.disconnect()}), e.onMessage.addListener(e => {
										if ("openTab" == e.method) {
											let t = e.url,
												o = e.options;
											"boolean" != typeof o && void 0 !== o || (o = {
												loadInBackground: o
											})
											;
											const s = void 0 === o.active ? void 0 !== o.loadInBackground && !o.loadInBackground : o.active,
												r = void 0 === o.insert || o.insert;
											t && 0 === t.search(/^\/\//) && (t = location.protocol + t), n.postMessage({
												method: "openInTab",
												details: {
													url: t,
													options: {
														active: !!s,
														insert: !!r,
														incognito: !!o.incognito,
														setParent: !o.incognito && !!o.setParent
													}
												}
											})
										} else
											void 0 !== e.name ? n.postMessage({
												name: e.name
											}) : e.close && n.postMessage({
												close: !0
											})
									}), e.onDisconnect.addListener(() => {n.disconnect()})
								},
								download: e => {
									const n = t.extension.connect("download")
									;
									n.onMessage.addListener(t => {e.postMessage(t)}), n.onDisconnect.addListener(() => {e.disconnect()}), e.onMessage.addListener(e => {
										if (e.cancel)
											n.postMessage({
												cancel: !0,
												id: c
											});
										else {
											const t = e.details;
											t.url && "/" === t.url[0] && (t.url = location.origin + t.url), n.postMessage({
												method: "download",
												details: t,
												id: c
											})
										}
									}), e.onDisconnect.addListener(() => {n.disconnect()})
								},
								webRequest: e => {
									const n = t.extension.connect("webRequest");
									n.onMessage.addListener(t => {e.postMessage(t)}), n.onDisconnect.addListener(() => {e.disconnect()
									}), e.onMessage.addListener(e => {n.postMessage({
											method: "webRequest",
											rules: e.rules,
											uuid: e.uuid
										})}), e.onDisconnect.addListener(() => {n.disconnect()})
								},
								xhr: e => {
									let n,
										o;
									const s = t.extension.connect("xhr");
									s.onMessage.addListener(t => {
										const n = () => {
											const {onpartial: n, data: s} = t;
											if (n && s && s.objurl) {
												const {objurl: n} = s;
												delete s.objurl, o = new Promise(r => {fetch(n.url).then(e => e.arrayBuffer()).then(a => {s.nada = {
															buffer: a,
															type: n.type
														}, e.postMessage(t), o = null, r(), URL.revokeObjectURL(n)}).catch(e => console.warn(e))})
											} else
												e.postMessage(t)
										};
										o ? o.then(n) : n()
									}), s.onDisconnect.addListener(() => {
										const t = async () => {e.disconnect()};
										o ? o.then(t) : t()
									}), e.onMessage.addListener(e => {n = n || e.details, s.postMessage(e)}), e.onDisconnect.addListener(() => {s.disconnect()})
								},
								onurlchange: e => {
									const n = t.extension.connect("onurlchange");
									let o = () => {e.postMessage({
											url: document.location.href
										})};
									const s = () => {o && (window.removeEventListener("hashchange", o), o = null)};
									window.addEventListener("hashchange", o), n.onMessage.addListener(t => {
										e.postMessage(t)}), n.onDisconnect.addListener(() => {e.disconnect(), s()}), e.onMessage.addListener(e => {n.postMessage(e)}), e.onDisconnect.addListener(() => {n.disconnect(), s()})
								},
								values: e => {
									const n = t.extension.connect("values");
									n.onMessage.addListener(t => {e.postMessage(t)}), n.onDisconnect.addListener(() => {e.disconnect()}), e.onMessage.addListener(e => {n.postMessage(e)}), e.onDisconnect.addListener(() => {n.disconnect()})
								}
							},
							n = {
								setTimeout: ({args: e, cb: t}) => {window.setTimeout(t, e.t)},
								setClipboard: ({args: e, cb: n}) => {
									const o = e.content,
										s = e.info,
										r = typeof s;
									let a,
										i;
									"object" === r ? (s.type && (a = s.type), s.mimetype && (i = s.mimetype)) : "string" === r && (a = s);
									const c = i || ("html" == a ? "text/html" : "text/plain");
									if (t.FEATURES.RUNTIME.CLIPBOARD_API)
										t.extension.sendMessage({
											method: "clipboard",
											mimetype: c,
											content: o
										}, () => n());
									else {
										const e = t => {document.removeEventListener("copy", e, !0), t.stopImmediatePropagation(), t.preventDefault(), t.clipboardData.setData(c, o)};
										document.addEventListener("copy", e, !0),
										document.execCommand("copy"), n()
									}
								},
								notification: ({args: e, cb: n}) => {e.method = "notification", t.extension.sendMessage(e, n)},
								syntaxCheck: ({args: e, cb: n}) => {e.method = "syntaxCheck", t.extension.sendMessage(e, n)},
								closeTab: ({cb: e}) => {t.extension.sendMessage({
										method: "closeTab",
										id: c
									}, t => {t.error && console.warn(t.error), e()})},
								focusTab: ({cb: e}) => {t.extension.sendMessage({
										method: "focusTab",
										id: c
									}, t => {t.error && console.warn(t.error), e()})},
								addElement: async ({args: e, node: t, cb: n}) => {
									try {
										const o = document.createElement(e.tag),
											s = e.properties;
										let r;
										Object.keys(s).forEach(e => {"textContent" == e ? o.textContent = s[e] : o.setAttribute(e, s[e])}), e.id && o.setAttribute("id", e.id), t ? r = t : (r = document.head || document.body || document.documentElement, r || (r = await new Promise(e => g.registerDomListener(() => e(document.head || document.body))))), r.appendChild(o), n()
									} catch (e) {
										console.warn("content: error adding script", e)
									}
								},
								tabs: ({args: e, cb: n}) => {e.method = "tabs", t.extension.sendMessage(e, e => {n(e.data)})},
								cookie: ({args: e, cb: n}) => {e.method = "cookie", t.extension.sendMessage(e, e => {n(e.data)})}
							};
						return {
							init: () => {},
							processMessage: ({method: e, args: t, node: o, sendResponse: s}) => {
								let r;
								if (r = n[e])
									return r({
										args: t,
										node: o,
										cb: s
									});
								s()
							},
							processConnect: (t, n) => {
								let o;
								if (o = e[t])
									return o(n)
							}
						}
					})();
				(t.FEATURES.RUNTIME.FIREFOX ? new Promise(e => g.registerDomListener(() => e(document.body))) : Promise.resolve(document)).then(e => {e.addEventListener("mouseenter", () => {t.extension.sendMessage({
							method: "contextmenu",
							url: window.location.href,
							id: c
						})}, !1)}), t.extension.onMessage.addListener((e, t, o) => {e.id && e.id != c ? console.warn("content: Not for me! " + c.substr(0, 10) + "!=" + e.id) : "executeScript" == e.method ? (e.url && 0 !== window.location.href.indexOf(e.url) ? n && console.log("exec: URL doesn't match", window.location, e) : void 0 !== e.topframe && e.topframe != d ? n && console.log("exec: topframe doesn't match", window.self, e) : u.send("executeScript", e),
					o({})) : "onLoad" == e.method ? (document.readyState && "complete" !== document.readyState || g.forcedLoad(), o({})) : d && ("loadUrl" == e.method ? (window.location = e.url, o({})) : "reload" == e.method ? (window.location.reload(), o({})) : "confirm" == e.method ? window.setTimeout(() => {
						const t = window.confirm(e.msg);
						o({
							confirm: t
						})
					}, 100) : "showMsg" == e.method ? window.setTimeout(() => {window.setTimeout(() => {window.alert(e.msg)}, 1), o({})}, 100) : "setForeignAttr" == e.method ? (u.send(e.method, e),
					o({})) : window.console.log("content: unknown method " + e.method))}), p.onConnect.addListener((e, t) => {v.processConnect(e, t)}), u.onMessage.addListener(e => {
					const {method: n, args: o, sendResponse: s} = e;
					if ("document.write" == n) {
						const e = document.documentElement;
						Promise.resolve().then(() => {e !== document.documentElement && u.init()})
					} else
						"port.message" == n ? p.message(o) : "csp" == n ? t.page.eval('window["' + o.id + '"] = function() { ' + o.src + " };\n") : "external.message" == n ? t.extension.sendMessage({
							method: "externalMessage",
							request: o
						}, e => {s(e)}) : v.processMessage(e)
				});
				let w = !1;
				const y = (e, o, s) => {
						let r = 1;
						const a = () => {n && console.debug('content: send "prepare" message'), t.extension.sendMessage({
								method: "prepare",
								id: c,
								topframe: d,
								url: window.location.href
							}, t => {
								if (!w) {
									if (!t)
										return n && console.debug("content: _early_ execution, connection to bg failed -> retry!"), window.setTimeout(a, r), void (r *= 2);
									w = !0, t.contexters || t.scripts && t.scripts.length || t.external_connect ? (s && s(), o(t)) : (f(), e())
								}
							})};
						t.content.onReady(a)
					},
					_ = location.pathname + location.search,
					b = "TM_" + t.runtime.short_id + window.btoa(_.length + _).substr(0, 255).replace(/[#=\/]/g, "_"),
					x = document.contentType && "text/html" != document.contentType;
				var M,
					L,
					E;
				M = (o, s) => {
					let r;
					n && console.log("content: Started (" + c + ", " + window.location.origin + window.location.pathname + ")", e.tm_info), t.FEATURES.RUNTIME.FAST_EXEC_SUPPORT && (r = (() => {
						let e,
							t,
							n,
							o;
						try {
							o = document.cookie.split(";")
						} catch (e) {
							return
						}
						for (e = 0; e < o.length; e++)
							if (t = o[e].substr(0, o[e].indexOf("=")),
							n = o[e].substr(o[e].indexOf("=") + 1), t = t.replace(/^\s+|\s+$/g, ""), 0 === t.indexOf(b)) {
								document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
								const e = window.decodeURIComponent(n);
								if (0 !== e.indexOf("blob:"))
									continue;
								const o = new XMLHttpRequest;
								try {
									if (o.open("GET", e, !1), o.send(null), 200 === o.status || 0 === o.status)
										return JSON.parse(o.responseText)
								} catch (e) {
									console.warn("content: unable to decode " + (o.responseText || "unknown"))
								}
							}
					})()) || (r = e.tm_info) ? (delete e.tm_info,
					r.contexters || r.scripts && r.scripts.length || r.external_connect ? (m(c), u.init(c), s(r, "sync")) : o(), t.FEATURES.RUNTIME.FAST_EXEC_SUPPORT && t.extension.sendMessage({
						method: "prepare",
						url: window.location.href,
						cleanup: !0
					}, () => {})) : x ? y(o, s, () => {m(c), u.init(c)}) : (m(c), u.init(c), y(o, s))
				}, L = () => {n && console.log("content: disable event processing for " + c), g.cleanup(), f(), u.cleanup()}, E = (e, o) => {l = e.logLevel, n |= l >= 60, g.registerDomListener(() => {u.send("DOMContentLoaded")}), g.registerPageListener(() => {
						u.send("load")}), n && console.log("content: " + (o || "normal") + " start event processing for " + c + " (" + e.scripts.length + " to run)"), v.init(e.scripts), h(e, i()), d || window.addEventListener("unload", () => {t.extension.sendMessage({
							method: "unLoad",
							id: c,
							topframe: !1,
							url: window.location.href
						}, () => {}), g.cleanup(), f(), u.cleanup()}, !1)}, x ? window.setTimeout(() => {M(L, E)}, 1) : M(L, E)
			})(window))
		})()
	}
});

