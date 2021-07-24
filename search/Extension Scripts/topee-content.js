(function(){'use strict';
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(e) {
	var d = 0;
	return function() {
		return d < e.length ? {done:!1, value:e[d++]} : {done:!0};
	};
};
$jscomp.arrayIterator = function(e) {
	return {next:$jscomp.arrayIteratorImpl(e)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, d, a) {
	e != Array.prototype && e != Object.prototype && (e[d] = a.value);
};
$jscomp.getGlobal = function(e) {
	return "undefined" != typeof window && window === e ? e : "undefined" != typeof global && null != global ? global : e;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
	$jscomp.initSymbol = function() {
	};
	$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function(e, d) {
	this.$jscomp$symbol$id_ = e;
	$jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:d});
};
$jscomp.SymbolClass.prototype.toString = function() {
	return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = function() {
	function e(a) {
		if (this instanceof e) {
			throw new TypeError("Symbol is not a constructor");
		}
		return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (a || "") + "_" + d++, a);
	}
	var d = 0;
	return e;
}();
$jscomp.initSymbolIterator = function() {
	$jscomp.initSymbol();
	var e = $jscomp.global.Symbol.iterator;
	e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
	"function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {configurable:!0, writable:!0, value:function() {
		return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
	}});
	$jscomp.initSymbolIterator = function() {
	};
};
$jscomp.initSymbolAsyncIterator = function() {
	$jscomp.initSymbol();
	var e = $jscomp.global.Symbol.asyncIterator;
	e || (e = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
	$jscomp.initSymbolAsyncIterator = function() {
	};
};
$jscomp.iteratorPrototype = function(e) {
	$jscomp.initSymbolIterator();
	e = {next:e};
	e[$jscomp.global.Symbol.iterator] = function() {
		return this;
	};
	return e;
};
$jscomp.polyfill = function(e, d, a, c) {
	if (d) {
		a = $jscomp.global;
		e = e.split(".");
		for (c = 0; c < e.length - 1; c++) {
			var f = e[c];
			f in a || (a[f] = {});
			a = a[f];
		}
		e = e[e.length - 1];
		c = a[e];
		d = d(c);
		d != c && null != d && $jscomp.defineProperty(a, e, {configurable:!0, writable:!0, value:d});
	}
};
$jscomp.iteratorFromArray = function(e, d) {
	$jscomp.initSymbolIterator();
	e instanceof String && (e += "");
	var a = 0, c = {next:function() {
		if (a < e.length) {
			var f = a++;
			return {value:d(f, e[f]), done:!1};
		}
		c.next = function() {
			return {done:!0, value:void 0};
		};
		return c.next();
	}};
	c[Symbol.iterator] = function() {
		return c;
	};
	return c;
};
$jscomp.polyfill("Array.prototype.entries", function(e) {
	return e ? e : function() {
		return $jscomp.iteratorFromArray(this, function(d, a) {
			return [d, a];
		});
	};
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.keys", function(e) {
	return e ? e : function() {
		return $jscomp.iteratorFromArray(this, function(d) {
			return d;
		});
	};
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.values", function(e) {
	return e ? e : function() {
		return $jscomp.iteratorFromArray(this, function(d, a) {
			return a;
		});
	};
}, "es8", "es3");
$jscomp.polyfill("Object.getOwnPropertySymbols", function(e) {
	return e ? e : function() {
		return [];
	};
}, "es6", "es5");
$jscomp.polyfill("Number.isNaN", function(e) {
	return e ? e : function(d) {
		return "number" === typeof d && isNaN(d);
	};
}, "es6", "es3");
$jscomp.polyfill("Number.isFinite", function(e) {
	return e ? e : function(d) {
		return "number" !== typeof d ? !1 : !isNaN(d) && Infinity !== d && -Infinity !== d;
	};
}, "es6", "es3");
$jscomp.owns = function(e, d) {
	return Object.prototype.hasOwnProperty.call(e, d);
};
$jscomp.assign = "function" == typeof Object.assign ? Object.assign : function(e, d) {
	for (var a = 1; a < arguments.length; a++) {
		var c = arguments[a];
		if (c) {
			for (var f in c) {
				$jscomp.owns(c, f) && (e[f] = c[f]);
			}
		}
	}
	return e;
};
$jscomp.polyfill("Object.assign", function(e) {
	return e || $jscomp.assign;
}, "es6", "es3");
$jscomp.makeIterator = function(e) {
	var d = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
	return d ? d.call(e) : $jscomp.arrayIterator(e);
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(e) {
	function d() {
		this.batch_ = null;
	}
	function a(b) {
		return b instanceof f ? b : new f(function(c, a) {
			c(b);
		});
	}
	if (e && !$jscomp.FORCE_POLYFILL_PROMISE) {
		return e;
	}
	d.prototype.asyncExecute = function(b) {
		if (null == this.batch_) {
			this.batch_ = [];
			var c = this;
			this.asyncExecuteFunction(function() {
				c.executeBatch_();
			});
		}
		this.batch_.push(b);
	};
	var c = $jscomp.global.setTimeout;
	d.prototype.asyncExecuteFunction = function(b) {
		c(b, 0);
	};
	d.prototype.executeBatch_ = function() {
		for (; this.batch_ && this.batch_.length;) {
			var b = this.batch_;
			this.batch_ = [];
			for (var c = 0; c < b.length; ++c) {
				var a = b[c];
				b[c] = null;
				try {
					a();
				} catch (l) {
					this.asyncThrow_(l);
				}
			}
		}
		this.batch_ = null;
	};
	d.prototype.asyncThrow_ = function(b) {
		this.asyncExecuteFunction(function() {
			throw b;
		});
	};
	var f = function(b) {
		this.state_ = 0;
		this.result_ = void 0;
		this.onSettledCallbacks_ = [];
		var c = this.createResolveAndReject_();
		try {
			b(c.resolve, c.reject);
		} catch (k) {
			c.reject(k);
		}
	};
	f.prototype.createResolveAndReject_ = function() {
		function b(b) {
			return function(d) {
				a || (a = !0, b.call(c, d));
			};
		}
		var c = this, a = !1;
		return {resolve:b(this.resolveTo_), reject:b(this.reject_)};
	};
	f.prototype.resolveTo_ = function(b) {
		if (b === this) {
			this.reject_(new TypeError("A Promise cannot resolve to itself"));
		} else {
			if (b instanceof f) {
				this.settleSameAsPromise_(b);
			} else {
				a: {
					switch(typeof b) {
						case "object":
							var c = null != b;
							break a;
						case "function":
							c = !0;
							break a;
						default:
							c = !1;
					}
				}
				c ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b);
			}
		}
	};
	f.prototype.resolveToNonPromiseObj_ = function(b) {
		var c = void 0;
		try {
			c = b.then;
		} catch (k) {
			this.reject_(k);
			return;
		}
		"function" == typeof c ? this.settleSameAsThenable_(c, b) : this.fulfill_(b);
	};
	f.prototype.reject_ = function(b) {
		this.settle_(2, b);
	};
	f.prototype.fulfill_ = function(b) {
		this.settle_(1, b);
	};
	f.prototype.settle_ = function(b, c) {
		if (0 != this.state_) {
			throw Error("Cannot settle(" + b + ", " + c + "): Promise already settled in state" + this.state_);
		}
		this.state_ = b;
		this.result_ = c;
		this.executeOnSettledCallbacks_();
	};
	f.prototype.executeOnSettledCallbacks_ = function() {
		if (null != this.onSettledCallbacks_) {
			for (var b = 0; b < this.onSettledCallbacks_.length; ++b) {
				g.asyncExecute(this.onSettledCallbacks_[b]);
			}
			this.onSettledCallbacks_ = null;
		}
	};
	var g = new d;
	f.prototype.settleSameAsPromise_ = function(b) {
		var c = this.createResolveAndReject_();
		b.callWhenSettled_(c.resolve, c.reject);
	};
	f.prototype.settleSameAsThenable_ = function(b, c) {
		var a = this.createResolveAndReject_();
		try {
			b.call(c, a.resolve, a.reject);
		} catch (l) {
			a.reject(l);
		}
	};
	f.prototype.then = function(b, c) {
		function a(b, c) {
			return "function" == typeof b ? function(c) {
				try {
					d(b(c));
				} catch (w) {
					e(w);
				}
			} : c;
		}
		var d, e, g = new f(function(b, c) {
			d = b;
			e = c;
		});
		this.callWhenSettled_(a(b, d), a(c, e));
		return g;
	};
	f.prototype.catch = function(b) {
		return this.then(void 0, b);
	};
	f.prototype.callWhenSettled_ = function(b, c) {
		function a() {
			switch(d.state_) {
				case 1:
					b(d.result_);
					break;
				case 2:
					c(d.result_);
					break;
				default:
					throw Error("Unexpected state: " + d.state_);
			}
		}
		var d = this;
		null == this.onSettledCallbacks_ ? g.asyncExecute(a) : this.onSettledCallbacks_.push(a);
	};
	f.resolve = a;
	f.reject = function(b) {
		return new f(function(c, a) {
			a(b);
		});
	};
	f.race = function(b) {
		return new f(function(c, d) {
			for (var e = $jscomp.makeIterator(b), f = e.next(); !f.done; f = e.next()) {
				a(f.value).callWhenSettled_(c, d);
			}
		});
	};
	f.all = function(b) {
		var c = $jscomp.makeIterator(b), d = c.next();
		return d.done ? a([]) : new f(function(b, e) {
			function f(c) {
				return function(a) {
					k[c] = a;
					h--;
					0 == h && b(k);
				};
			}
			var k = [], h = 0;
			do {
				k.push(void 0), h++, a(d.value).callWhenSettled_(f(k.length - 1), e), d = c.next();
			} while (!d.done);
		});
	};
	return f;
}, "es6", "es3");
$jscomp.polyfill("Number.MAX_SAFE_INTEGER", function() {
	return 9007199254740991;
}, "es6", "es3");
$jscomp.checkStringArgs = function(e, d, a) {
	if (null == e) {
		throw new TypeError("The 'this' value for String.prototype." + a + " must not be null or undefined");
	}
	if (d instanceof RegExp) {
		throw new TypeError("First argument to String.prototype." + a + " must not be a regular expression");
	}
	return e + "";
};
$jscomp.polyfill("String.prototype.startsWith", function(e) {
	return e ? e : function(d, a) {
		var c = $jscomp.checkStringArgs(this, d, "startsWith");
		d += "";
		var e = c.length, g = d.length;
		a = Math.max(0, Math.min(a | 0, c.length));
		for (var b = 0; b < g && a < e;) {
			if (c[a++] != d[b++]) {
				return !1;
			}
		}
		return b >= g;
	};
}, "es6", "es3");
$jscomp.polyfill("Object.values", function(e) {
	return e ? e : function(d) {
		var a = [], c;
		for (c in d) {
			$jscomp.owns(d, c) && a.push(d[c]);
		}
		return a;
	};
}, "es8", "es3");
(function(e) {
	function d(c) {
		if (a[c]) {
			return a[c].exports;
		}
		var f = a[c] = {i:c, l:!1, exports:{}};
		e[c].call(f.exports, f, f.exports, d);
		f.l = !0;
		return f.exports;
	}
	var a = {};
	d.m = e;
	d.c = a;
	d.d = function(c, a, e) {
		d.o(c, a) || Object.defineProperty(c, a, {enumerable:!0, get:e});
	};
	d.r = function(c) {
		$jscomp.initSymbol();
		$jscomp.initSymbol();
		"undefined" !== typeof Symbol && Symbol.toStringTag && ($jscomp.initSymbol(), Object.defineProperty(c, Symbol.toStringTag, {value:"Module"}));
		Object.defineProperty(c, "__esModule", {value:!0});
	};
	d.t = function(c, a) {
		a & 1 && (c = d(c));
		if (a & 8 || a & 4 && "object" === typeof c && c && c.__esModule) {
			return c;
		}
		var e = Object.create(null);
		d.r(e);
		Object.defineProperty(e, "default", {enumerable:!0, value:c});
		if (a & 2 && "string" != typeof c) {
			for (var b in c) {
				d.d(e, b, function(b) {
					return c[b];
				}.bind(null, b));
			}
		}
		return e;
	};
	d.n = function(c) {
		var a = c && c.__esModule ? function() {
			return c["default"];
		} : function() {
			return c;
		};
		d.d(a, "a", a);
		return a;
	};
	d.o = function(c, a) {
		return Object.prototype.hasOwnProperty.call(c, a);
	};
	d.p = "";
	return d(d.s = 54);
})([function(e, d, a) {
	d = a(1);
	e.exports = d.call(Function.call, Object.prototype.hasOwnProperty);
}, function(e, d, a) {
	d = a(25);
	e.exports = Function.prototype.bind || d;
}, , function(e, d, a) {
	var c = Function.prototype.toString, f = /^\s*class\b/, g = function(b) {
		try {
			var a = c.call(b);
			return f.test(a);
		} catch (p) {
			return !1;
		}
	}, b = Object.prototype.toString;
	$jscomp.initSymbol();
	$jscomp.initSymbol();
	var n = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag;
	e.exports = function(a) {
		if (!a || "function" !== typeof a && "object" !== typeof a) {
			return !1;
		}
		if ("function" === typeof a && !a.prototype) {
			return !0;
		}
		if (n) {
			try {
				if (g(a)) {
					var d = !1;
				} else {
					c.call(a), d = !0;
				}
			} catch (p) {
				d = !1;
			}
			return d;
		}
		if (g(a)) {
			return !1;
		}
		a = b.call(a);
		return "[object Function]" === a || "[object GeneratorFunction]" === a;
	};
}, function(e, d, a) {
	d = Object.getOwnPropertyDescriptor ? function() {
		return Object.getOwnPropertyDescriptor(arguments, "callee").get;
	}() : function() {
		throw new TypeError;
	};
	$jscomp.initSymbol();
	$jscomp.initSymbol();
	$jscomp.initSymbolIterator();
	a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator;
	var c = Object.getPrototypeOf || function(b) {
		return b.__proto__;
	}, f = "undefined" === typeof Uint8Array ? void 0 : c(Uint8Array);
	$jscomp.initSymbol();
	$jscomp.initSymbolIterator();
	$jscomp.initSymbol();
	$jscomp.initSymbolAsyncIterator();
	$jscomp.initSymbol();
	$jscomp.initSymbolAsyncIterator();
	$jscomp.initSymbol();
	$jscomp.initSymbolIterator();
	$jscomp.initSymbol();
	$jscomp.initSymbolIterator();
	$jscomp.initSymbol();
	$jscomp.initSymbolIterator();
	$jscomp.initSymbol();
	$jscomp.initSymbolIterator();
	$jscomp.initSymbol();
	$jscomp.initSymbol();
	var g = {"$ %Array%":Array, "$ %ArrayBuffer%":"undefined" === typeof ArrayBuffer ? void 0 : ArrayBuffer, "$ %ArrayBufferPrototype%":"undefined" === typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype, "$ %ArrayIteratorPrototype%":a ? c([][Symbol.iterator]()) : void 0, "$ %ArrayPrototype%":Array.prototype, "$ %ArrayProto_entries%":Array.prototype.entries, "$ %ArrayProto_forEach%":Array.prototype.forEach, "$ %ArrayProto_keys%":Array.prototype.keys, "$ %ArrayProto_values%":Array.prototype.values, 
	"$ %AsyncFromSyncIteratorPrototype%":void 0, "$ %AsyncFunction%":void 0, "$ %AsyncFunctionPrototype%":void 0, "$ %AsyncGenerator%":void 0, "$ %AsyncGeneratorFunction%":void 0, "$ %AsyncGeneratorPrototype%":void 0, "$ %AsyncIteratorPrototype%":void 0, "$ %Atomics%":"undefined" === typeof Atomics ? void 0 : Atomics, "$ %Boolean%":Boolean, "$ %BooleanPrototype%":Boolean.prototype, "$ %DataView%":"undefined" === typeof DataView ? void 0 : DataView, "$ %DataViewPrototype%":"undefined" === typeof DataView ? 
	void 0 : DataView.prototype, "$ %Date%":Date, "$ %DatePrototype%":Date.prototype, "$ %decodeURI%":decodeURI, "$ %decodeURIComponent%":decodeURIComponent, "$ %encodeURI%":encodeURI, "$ %encodeURIComponent%":encodeURIComponent, "$ %Error%":Error, "$ %ErrorPrototype%":Error.prototype, "$ %eval%":eval, "$ %EvalError%":EvalError, "$ %EvalErrorPrototype%":EvalError.prototype, "$ %Float32Array%":"undefined" === typeof Float32Array ? void 0 : Float32Array, "$ %Float32ArrayPrototype%":"undefined" === typeof Float32Array ? 
	void 0 : Float32Array.prototype, "$ %Float64Array%":"undefined" === typeof Float64Array ? void 0 : Float64Array, "$ %Float64ArrayPrototype%":"undefined" === typeof Float64Array ? void 0 : Float64Array.prototype, "$ %Function%":Function, "$ %FunctionPrototype%":Function.prototype, "$ %Generator%":void 0, "$ %GeneratorFunction%":void 0, "$ %GeneratorPrototype%":void 0, "$ %Int8Array%":"undefined" === typeof Int8Array ? void 0 : Int8Array, "$ %Int8ArrayPrototype%":"undefined" === typeof Int8Array ? 
	void 0 : Int8Array.prototype, "$ %Int16Array%":"undefined" === typeof Int16Array ? void 0 : Int16Array, "$ %Int16ArrayPrototype%":"undefined" === typeof Int16Array ? void 0 : Int8Array.prototype, "$ %Int32Array%":"undefined" === typeof Int32Array ? void 0 : Int32Array, "$ %Int32ArrayPrototype%":"undefined" === typeof Int32Array ? void 0 : Int32Array.prototype, "$ %isFinite%":isFinite, "$ %isNaN%":isNaN, "$ %IteratorPrototype%":a ? c(c([][Symbol.iterator]())) : void 0, "$ %JSON%":JSON, "$ %JSONParse%":JSON.parse, 
	"$ %Map%":"undefined" === typeof Map ? void 0 : Map, "$ %MapIteratorPrototype%":"undefined" !== typeof Map && a ? c((new Map)[Symbol.iterator]()) : void 0, "$ %MapPrototype%":"undefined" === typeof Map ? void 0 : Map.prototype, "$ %Math%":Math, "$ %Number%":Number, "$ %NumberPrototype%":Number.prototype, "$ %Object%":Object, "$ %ObjectPrototype%":Object.prototype, "$ %ObjProto_toString%":Object.prototype.toString, "$ %ObjProto_valueOf%":Object.prototype.valueOf, "$ %parseFloat%":parseFloat, "$ %parseInt%":parseInt, 
	"$ %Promise%":"undefined" === typeof Promise ? void 0 : Promise, "$ %PromisePrototype%":"undefined" === typeof Promise ? void 0 : Promise.prototype, "$ %PromiseProto_then%":"undefined" === typeof Promise ? void 0 : Promise.prototype.then, "$ %Promise_all%":"undefined" === typeof Promise ? void 0 : Promise.all, "$ %Promise_reject%":"undefined" === typeof Promise ? void 0 : Promise.reject, "$ %Promise_resolve%":"undefined" === typeof Promise ? void 0 : Promise.resolve, "$ %Proxy%":"undefined" === 
	typeof Proxy ? void 0 : Proxy, "$ %RangeError%":RangeError, "$ %RangeErrorPrototype%":RangeError.prototype, "$ %ReferenceError%":ReferenceError, "$ %ReferenceErrorPrototype%":ReferenceError.prototype, "$ %Reflect%":"undefined" === typeof Reflect ? void 0 : Reflect, "$ %RegExp%":RegExp, "$ %RegExpPrototype%":RegExp.prototype, "$ %Set%":"undefined" === typeof Set ? void 0 : Set, "$ %SetIteratorPrototype%":"undefined" !== typeof Set && a ? c((new Set)[Symbol.iterator]()) : void 0, "$ %SetPrototype%":"undefined" === 
	typeof Set ? void 0 : Set.prototype, "$ %SharedArrayBuffer%":"undefined" === typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer, "$ %SharedArrayBufferPrototype%":"undefined" === typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype, "$ %String%":String, "$ %StringIteratorPrototype%":a ? c(""[Symbol.iterator]()) : void 0, "$ %StringPrototype%":String.prototype, "$ %Symbol%":a ? Symbol : void 0, "$ %SymbolPrototype%":a ? Symbol.prototype : void 0, "$ %SyntaxError%":SyntaxError, "$ %SyntaxErrorPrototype%":SyntaxError.prototype, 
	"$ %ThrowTypeError%":d, "$ %TypedArray%":f, "$ %TypedArrayPrototype%":f ? f.prototype : void 0, "$ %TypeError%":TypeError, "$ %TypeErrorPrototype%":TypeError.prototype, "$ %Uint8Array%":"undefined" === typeof Uint8Array ? void 0 : Uint8Array, "$ %Uint8ArrayPrototype%":"undefined" === typeof Uint8Array ? void 0 : Uint8Array.prototype, "$ %Uint8ClampedArray%":"undefined" === typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray, "$ %Uint8ClampedArrayPrototype%":"undefined" === typeof Uint8ClampedArray ? 
	void 0 : Uint8ClampedArray.prototype, "$ %Uint16Array%":"undefined" === typeof Uint16Array ? void 0 : Uint16Array, "$ %Uint16ArrayPrototype%":"undefined" === typeof Uint16Array ? void 0 : Uint16Array.prototype, "$ %Uint32Array%":"undefined" === typeof Uint32Array ? void 0 : Uint32Array, "$ %Uint32ArrayPrototype%":"undefined" === typeof Uint32Array ? void 0 : Uint32Array.prototype, "$ %URIError%":URIError, "$ %URIErrorPrototype%":URIError.prototype, "$ %WeakMap%":"undefined" === typeof WeakMap ? 
	void 0 : WeakMap, "$ %WeakMapPrototype%":"undefined" === typeof WeakMap ? void 0 : WeakMap.prototype, "$ %WeakSet%":"undefined" === typeof WeakSet ? void 0 : WeakSet, "$ %WeakSetPrototype%":"undefined" === typeof WeakSet ? void 0 : WeakSet.prototype};
	e.exports = function(b, c) {
		if (1 < arguments.length && "boolean" !== typeof c) {
			throw new TypeError('"allowMissing" argument must be a boolean');
		}
		var a = "$ " + b;
		if (!(a in g)) {
			throw new SyntaxError("intrinsic " + b + " does not exist!");
		}
		if ("undefined" === typeof g[a] && !c) {
			throw new TypeError("intrinsic " + b + " exists, but is not available. Please file an issue!");
		}
		return g[a];
	};
}, function(e, d, a) {
	var c = a(6);
	$jscomp.initSymbol();
	$jscomp.initSymbol();
	var f = "function" === typeof Symbol && "symbol" === typeof Symbol("foo"), g = Object.prototype.toString, b = Array.prototype.concat, n = Object.defineProperty;
	d = function() {
		var b = {};
		try {
			n(b, "x", {enumerable:!1, value:b});
			for (var c in b) {
				return !1;
			}
			return b.x === b;
		} catch (q) {
			return !1;
		}
	};
	var k = n && d();
	d = function(a, d) {
		var e = 2 < arguments.length ? arguments[2] : {}, l = c(d);
		f && (l = b.call(l, Object.getOwnPropertySymbols(d)));
		for (var h = 0; h < l.length; h += 1) {
			var v = a, w = l[h], r = d[l[h]], p = e[l[h]];
			if (!(w in v) || "function" === typeof p && "[object Function]" === g.call(p) && p()) {
				k ? n(v, w, {configurable:!0, enumerable:!1, value:r, writable:!0}) : v[w] = r;
			}
		}
	};
	d.supportsDescriptors = !!k;
	e.exports = d;
}, function(e, d, a) {
	var c = Array.prototype.slice, f = a(7), g = Object.keys, b = g ? function(b) {
		return g(b);
	} : a(21), n = Object.keys;
	b.shim = function() {
		Object.keys ? function() {
			var b = Object.keys(arguments);
			return b && b.length === arguments.length;
		}(1, 2) || (Object.keys = function(b) {
			return f(b) ? n(c.call(b)) : n(b);
		}) : Object.keys = b;
		return Object.keys || b;
	};
	e.exports = b;
}, function(e, d, a) {
	var c = Object.prototype.toString;
	e.exports = function(a) {
		var d = c.call(a), b = "[object Arguments]" === d;
		b || (b = "[object Array]" !== d && null !== a && "object" === typeof a && "number" === typeof a.length && 0 <= a.length && "[object Function]" === c.call(a.callee));
		return b;
	};
}, function(e, d, a) {
	var c = a(22), f = a(0), g = a(1).call(Function.call, Object.prototype.propertyIsEnumerable);
	e.exports = function(b) {
		b = c.RequireObjectCoercible(b);
		var a = [], d;
		for (d in b) {
			f(b, d) && g(b, d) && a.push(b[d]);
		}
		return a;
	};
}, function(e, d) {
	e.exports = function(a) {
		return null === a || "function" !== typeof a && "object" !== typeof a;
	};
}, function(e, d, a) {
	d = a(4);
	var c = d("%TypeError%"), f = d("%SyntaxError%"), g = a(0), b = {"Property Descriptor":function(b, a) {
		if ("Object" !== b.Type(a)) {
			return !1;
		}
		b = {"[[Configurable]]":!0, "[[Enumerable]]":!0, "[[Get]]":!0, "[[Set]]":!0, "[[Value]]":!0, "[[Writable]]":!0};
		for (var d in a) {
			if (g(a, d) && !b[d]) {
				return !1;
			}
		}
		d = g(a, "[[Value]]");
		a = g(a, "[[Get]]") || g(a, "[[Set]]");
		if (d && a) {
			throw new c("Property Descriptors may not be both accessor and data descriptors");
		}
		return !0;
	}};
	e.exports = function(a, d, e, g) {
		var k = b[d];
		if ("function" !== typeof k) {
			throw new f("unknown record type: " + d);
		}
		if (!k(a, g)) {
			throw new c(e + " must be a " + d);
		}
		console.log(k(a, g), g);
	};
}, function(e, d) {
	e.exports = Number.isNaN || function(a) {
		return a !== a;
	};
}, function(e, d) {
	var a = Number.isNaN || function(a) {
		return a !== a;
	};
	e.exports = Number.isFinite || function(c) {
		return "number" === typeof c && !a(c) && Infinity !== c && -Infinity !== c;
	};
}, function(e, d, a) {
	var c = a(1).call(Function.call, Object.prototype.hasOwnProperty), f = Object.assign;
	e.exports = function(a, b) {
		if (f) {
			return f(a, b);
		}
		for (var d in b) {
			c(b, d) && (a[d] = b[d]);
		}
		return a;
	};
}, function(e, d) {
	e.exports = function(a) {
		return 0 <= a ? 1 : -1;
	};
}, function(e, d) {
	e.exports = function(a, c) {
		a %= c;
		return Math.floor(0 <= a ? a : a + c);
	};
}, function(e, d, a) {
	var c = a(8);
	e.exports = function() {
		return "function" === typeof Object.values ? Object.values : c;
	};
}, function(e, d, a) {
	function c() {
		return {frameId:b.frameId, isVisible:!document.hidden, hasFocus:document.hasFocus(), status:"complete" === document.readyState ? "complete" : "loading", url:window.location.href};
	}
	function f(b) {
		if ("object" === typeof b && null !== b) {
			try {
				sessionStorage.setItem("topee_debug", JSON.stringify(b));
			} catch (h) {
			}
		}
	}
	function g(b) {
		if (0 < arguments.length) {
			if ("object" !== typeof b || null === b) {
				return;
			}
			q = b;
		}
		q.log ? window.topee_log = q.log : delete window.topee_log;
	}
	var b = {Event:{GET_TAB_ID:"topee.tabInfo.getTabId", TAB_ID:"topee.tabInfo.tabId"}, init:function() {
		window === window.top && (window.addEventListener("message", function(a) {
			a.data && a.data.type === b.Event.GET_TAB_ID && b.tabId.then(function(c) {
				return a.source && a.source.postMessage({type:b.Event.TAB_ID, detail:c, debug:q}, a.origin);
			});
		}), safari.self.addEventListener("message", function(b) {
			if ("tabUpdate" === b.name && b.message && b.message.url) {
				var a = b.message.url;
				b.message.url.startsWith(n) && (a = chrome.runtime.getURL(a.substr(n.length)));
				window.location = a;
			}
		}));
		if (!isNaN(l)) {
			k(l);
		} else {
			if (window === window.top) {
				safari.self.addEventListener("message", function(b) {
					if ("forceTabId" === b.name && b.message && "number" === typeof b.message.tabId) {
						l = b.message.tabId;
						try {
							sessionStorage.setItem("topee_tabId", l);
						} catch (w) {
						}
						g(b.message.debug);
						f(b.message.debug);
						k(b.message.tabId);
						if (b.message.manifest) {
							try {
								chrome.runtime._manifest = JSON.parse(b.message.manifest);
							} catch (w) {
							}
						}
					}
				});
			} else {
				if (window !== window.top) {
					var a = function(d) {
						d.data && d.data.type === b.Event.TAB_ID && "number" === typeof d.data.detail && (l = d.data.detail, g(d.data.debug), f(d.data.debug), k(d.data.detail), clearInterval(c), d.stopPropagation(), window.removeEventListener("message", a));
					};
					window.addEventListener("message", a);
					var c = setInterval(function() {
						window.top.postMessage({type:b.Event.GET_TAB_ID}, "*");
					}, 200);
					window.top.postMessage({type:b.Event.GET_TAB_ID}, "*");
				}
			}
		}
	}, sayHello:function() {
		var a = isNaN(l) ? null : l;
		if (null === a) {
			if (p) {
				return;
			}
			p = !0;
		}
		window.isTabRegistered || (b.tabId.then(function(b) {
			return window.topee_log && console.debug("topee.hello(tabId: " + a + ', referrer: "' + document.referrer + '", historyLength: ' + history.length + ") @ " + window.location.href + " -> " + b);
		}), safari.extension.dispatchMessage("hello", {tabId:a, referrer:document.referrer, historyLength:history.length, userAgent:navigator.userAgent, payload:Object.assign({eventName:"hello", tabId:a}, c())}), window.isTabRegistered = !0);
	}, sayAlive:function() {
		safari.extension.dispatchMessage("alive", {tabId:l, payload:Object.assign({eventName:"alive", tabId:l}, c())});
	}, sayBye:function(b) {
		var a = isNaN(l) ? null : l;
		window.isTabRegistered && (window.topee_log && console.debug("topee.bye(tabId: " + a + ", url: " + window.location.href + ")"), safari.extension.dispatchMessage("bye", {tabId:a, referrer:document.referrer, historyLength:history.length, payload:{tabId:a, eventName:"bye", reason:b ? b.type : "unknown", url:window.location.href}}), window.isTabRegistered = !1);
	}, isForThisFrame:function(a) {
		return null === a || void 0 === a ? !0 : a === b.frameId;
	}}, n = "extension-path:/", k;
	b.tabId = new Promise(function(b) {
		k = b;
	});
	b.frameId = window === window.top ? 0 : Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
	try {
		var l = window.opener ? NaN : parseInt(sessionStorage.getItem("topee_tabId"));
	} catch (m) {
		l = null;
	}
	var p = !1, q = function() {
		try {
			var b = sessionStorage.getItem("topee_debug");
			if (!b) {
				return {};
			}
			var a = JSON.parse(b);
			return null === a || "object" !== typeof a ? {} : a;
		} catch (v) {
			return {};
		}
	}();
	g();
	window.isTabRegistered = !1;
	e.exports = b;
}, function(e, d, a) {
	function c() {
		c.init.call(this);
	}
	function f(b, a, d, e) {
		if ("function" !== typeof d) {
			throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof d);
		}
		var f = b._events;
		if (void 0 === f) {
			f = b._events = Object.create(null), b._eventsCount = 0;
		} else {
			void 0 !== f.newListener && (b.emit("newListener", a, d.listener ? d.listener : d), f = b._events);
			var h = f[a];
		}
		void 0 === h ? (f[a] = d, ++b._eventsCount) : ("function" === typeof h ? h = f[a] = e ? [d, h] : [h, d] : e ? h.unshift(d) : h.push(d), d = void 0 === b._maxListeners ? c.defaultMaxListeners : b._maxListeners, 0 < d && h.length > d && !h.warned && (h.warned = !0, d = Error("Possible EventEmitter memory leak detected. " + h.length + " " + String(a) + " listeners added. Use emitter.setMaxListeners() to increase limit"), d.name = "MaxListenersExceededWarning", d.emitter = b, d.type = a, d.count = 
		h.length, console && console.warn && console.warn(d)));
		return b;
	}
	function g() {
		for (var b = [], a = 0; a < arguments.length; a++) {
			b.push(arguments[a]);
		}
		this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, p(this.listener, this.target, b));
	}
	function b(b, a, c) {
		b = {fired:!1, wrapFn:void 0, target:b, type:a, listener:c};
		a = g.bind(b);
		a.listener = c;
		return b.wrapFn = a;
	}
	function n(b, a, c) {
		b = b._events;
		if (void 0 === b) {
			return [];
		}
		a = b[a];
		if (void 0 === a) {
			return [];
		}
		if ("function" === typeof a) {
			return c ? [a.listener || a] : [a];
		}
		if (c) {
			for (c = Array(a.length), b = 0; b < c.length; ++b) {
				c[b] = a[b].listener || a[b];
			}
		} else {
			c = l(a, a.length);
		}
		return c;
	}
	function k(b) {
		var a = this._events;
		if (void 0 !== a) {
			b = a[b];
			if ("function" === typeof b) {
				return 1;
			}
			if (void 0 !== b) {
				return b.length;
			}
		}
		return 0;
	}
	function l(b, a) {
		for (var c = Array(a), d = 0; d < a; ++d) {
			c[d] = b[d];
		}
		return c;
	}
	var p = (d = "object" === typeof Reflect ? Reflect : null) && "function" === typeof d.apply ? d.apply : function(b, a, c) {
		return Function.prototype.apply.call(b, a, c);
	};
	var q = d && "function" === typeof d.ownKeys ? d.ownKeys : Object.getOwnPropertySymbols ? function(b) {
		return Object.getOwnPropertyNames(b).concat(Object.getOwnPropertySymbols(b));
	} : function(b) {
		return Object.getOwnPropertyNames(b);
	};
	var m = Number.isNaN || function(b) {
		return b !== b;
	};
	e.exports = c;
	c.EventEmitter = c;
	c.prototype._events = void 0;
	c.prototype._eventsCount = 0;
	c.prototype._maxListeners = void 0;
	var h = 10;
	Object.defineProperty(c, "defaultMaxListeners", {enumerable:!0, get:function() {
		return h;
	}, set:function(b) {
		if ("number" !== typeof b || 0 > b || m(b)) {
			throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + b + ".");
		}
		h = b;
	}});
	c.init = function() {
		if (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) {
			this._events = Object.create(null), this._eventsCount = 0;
		}
		this._maxListeners = this._maxListeners || void 0;
	};
	c.prototype.setMaxListeners = function(b) {
		if ("number" !== typeof b || 0 > b || m(b)) {
			throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + b + ".");
		}
		this._maxListeners = b;
		return this;
	};
	c.prototype.getMaxListeners = function() {
		return void 0 === this._maxListeners ? c.defaultMaxListeners : this._maxListeners;
	};
	c.prototype.emit = function(b) {
		for (var a = [], c = 1; c < arguments.length; c++) {
			a.push(arguments[c]);
		}
		c = "error" === b;
		var d = this._events;
		if (void 0 !== d) {
			c = c && void 0 === d.error;
		} else {
			if (!c) {
				return !1;
			}
		}
		if (c) {
			var e;
			0 < a.length && (e = a[0]);
			if (e instanceof Error) {
				throw e;
			}
			a = Error("Unhandled error." + (e ? " (" + e.message + ")" : ""));
			a.context = e;
			throw a;
		}
		c = d[b];
		if (void 0 === c) {
			return !1;
		}
		if ("function" === typeof c) {
			p(c, this, a);
		} else {
			for (e = c.length, d = l(c, e), c = 0; c < e; ++c) {
				p(d[c], this, a);
			}
		}
		return !0;
	};
	c.prototype.addListener = function(b, a) {
		return f(this, b, a, !1);
	};
	c.prototype.on = c.prototype.addListener;
	c.prototype.prependListener = function(b, a) {
		return f(this, b, a, !0);
	};
	c.prototype.once = function(a, c) {
		if ("function" !== typeof c) {
			throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof c);
		}
		this.on(a, b(this, a, c));
		return this;
	};
	c.prototype.prependOnceListener = function(a, c) {
		if ("function" !== typeof c) {
			throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof c);
		}
		this.prependListener(a, b(this, a, c));
		return this;
	};
	c.prototype.removeListener = function(b, a) {
		var c;
		if ("function" !== typeof a) {
			throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof a);
		}
		var d = this._events;
		if (void 0 === d) {
			return this;
		}
		var e = d[b];
		if (void 0 === e) {
			return this;
		}
		if (e === a || e.listener === a) {
			0 === --this._eventsCount ? this._events = Object.create(null) : (delete d[b], d.removeListener && this.emit("removeListener", b, e.listener || a));
		} else {
			if ("function" !== typeof e) {
				var h = -1;
				for (c = e.length - 1; 0 <= c; c--) {
					if (e[c] === a || e[c].listener === a) {
						var f = e[c].listener;
						h = c;
						break;
					}
				}
				if (0 > h) {
					return this;
				}
				if (0 === h) {
					e.shift();
				} else {
					for (; h + 1 < e.length; h++) {
						e[h] = e[h + 1];
					}
					e.pop();
				}
				1 === e.length && (d[b] = e[0]);
				void 0 !== d.removeListener && this.emit("removeListener", b, f || a);
			}
		}
		return this;
	};
	c.prototype.off = c.prototype.removeListener;
	c.prototype.removeAllListeners = function(b) {
		var a = this._events;
		if (void 0 === a) {
			return this;
		}
		if (void 0 === a.removeListener) {
			return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== a[b] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete a[b]), this;
		}
		if (0 === arguments.length) {
			var c = Object.keys(a);
			for (a = 0; a < c.length; ++a) {
				var d = c[a];
				"removeListener" !== d && this.removeAllListeners(d);
			}
			this.removeAllListeners("removeListener");
			this._events = Object.create(null);
			this._eventsCount = 0;
			return this;
		}
		c = a[b];
		if ("function" === typeof c) {
			this.removeListener(b, c);
		} else {
			if (void 0 !== c) {
				for (a = c.length - 1; 0 <= a; a--) {
					this.removeListener(b, c[a]);
				}
			}
		}
		return this;
	};
	c.prototype.listeners = function(b) {
		return n(this, b, !0);
	};
	c.prototype.rawListeners = function(b) {
		return n(this, b, !1);
	};
	c.listenerCount = function(b, a) {
		return "function" === typeof b.listenerCount ? b.listenerCount(a) : k.call(b, a);
	};
	c.prototype.listenerCount = k;
	c.prototype.eventNames = function() {
		return 0 < this._eventsCount ? q(this._events) : [];
	};
}, function(e, d, a) {
	a(20).shim();
	a(38);
}, function(e, d, a) {
	d = a(5);
	var c = a(8), f = a(16);
	a = a(37);
	var g = f();
	d(g, {getPolyfill:f, implementation:c, shim:a});
	e.exports = g;
}, function(e, d, a) {
	if (!Object.keys) {
		var c = Object.prototype.hasOwnProperty, f = Object.prototype.toString, g = a(7);
		d = Object.prototype.propertyIsEnumerable;
		var b = !d.call({toString:null}, "toString"), n = d.call(function() {
		}, "prototype"), k = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "), l = function(b) {
			var a = b.constructor;
			return a && a.prototype === b;
		}, p = {$applicationCache:!0, $console:!0, $external:!0, $frame:!0, $frameElement:!0, $frames:!0, $innerHeight:!0, $innerWidth:!0, $outerHeight:!0, $outerWidth:!0, $pageXOffset:!0, $pageYOffset:!0, $parent:!0, $scrollLeft:!0, $scrollTop:!0, $scrollX:!0, $scrollY:!0, $self:!0, $webkitIndexedDB:!0, $webkitStorageInfo:!0, $window:!0}, q = function() {
			if ("undefined" === typeof window) {
				return !1;
			}
			for (var b in window) {
				try {
					if (!p["$" + b] && c.call(window, b) && null !== window[b] && "object" === typeof window[b]) {
						try {
							l(window[b]);
						} catch (v) {
							return !0;
						}
					}
				} catch (v) {
					return !0;
				}
			}
			return !1;
		}();
		var m = function(a) {
			var d = null !== a && "object" === typeof a, e = "[object Function]" === f.call(a), h = g(a), p = d && "[object String]" === f.call(a), m = [];
			if (!d && !e && !h) {
				throw new TypeError("Object.keys called on a non-object");
			}
			d = n && e;
			if (p && 0 < a.length && !c.call(a, 0)) {
				for (p = 0; p < a.length; ++p) {
					m.push(String(p));
				}
			}
			if (h && 0 < a.length) {
				for (h = 0; h < a.length; ++h) {
					m.push(String(h));
				}
			} else {
				for (var y in a) {
					d && "prototype" === y || !c.call(a, y) || m.push(String(y));
				}
			}
			if (b) {
				if ("undefined" !== typeof window && q) {
					try {
						var z = l(a);
					} catch (B) {
						z = !1;
					}
				} else {
					z = l(a);
				}
				for (h = 0; h < k.length; ++h) {
					z && "constructor" === k[h] || !c.call(a, k[h]) || m.push(k[h]);
				}
			}
			return m;
		};
	}
	e.exports = m;
}, function(e, d, a) {
	e.exports = a(23);
}, function(e, d, a) {
	d = a(24);
	a = a(13);
	a = a(a({}, d), {SameValueNonNumber:function(a, d) {
		if ("number" === typeof a || typeof a !== typeof d) {
			throw new TypeError("SameValueNonNumber requires two non-number values of the same type.");
		}
		return this.SameValue(a, d);
	}});
	e.exports = a;
}, function(e, d, a) {
	var c = a(0), f = a(26), g = a(6);
	d = a(4);
	var b = d("%TypeError%"), n = d("%SyntaxError%"), k = d("%Array%"), l = d("%String%"), p = d("%Object%"), q = d("%Number%"), m = d("%Symbol%", !0), h = d("%RegExp%"), v = !!m, w = a(10), r = a(11), A = a(12), t = q.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1, y = a(13), z = a(14), B = a(15), C = a(33), x = parseInt, u = a(1), N = u.call(Function.call, k.prototype.slice), H = u.call(Function.call, l.prototype.slice), O = u.call(Function.call, h.prototype.test, /^0b[01]+$/i), P = u.call(Function.call, 
	h.prototype.test, /^0o[0-7]+$/i), Q = u.call(Function.call, h.prototype.exec), R = new h("[\u0085\u200b\ufffe]", "g"), S = u.call(Function.call, h.prototype.test, R), T = u.call(Function.call, h.prototype.test, /^[-+]0x[0-9a-f]+$/i), I = u.call(Function.call, l.prototype.charCodeAt), J = u.call(Function.call, Object.prototype.toString), U = u.call(Function.call, d("%NumberPrototype%").valueOf), V = u.call(Function.call, d("%BooleanPrototype%").valueOf), W = u.call(Function.call, d("%StringPrototype%").valueOf), 
	X = u.call(Function.call, d("%DatePrototype%").valueOf), E = Math.floor, K = Math.abs, L = Object.create, Y = p.getOwnPropertyDescriptor, F = p.isExtensible, G = p.defineProperty, Z = /(^[\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]+)|([\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]+$)/g, aa = u.call(Function.call, l.prototype.replace), 
	D = a(34), ba = a(36);
	a = y(y({}, D), {Call:function(a, c) {
		var d = 2 < arguments.length ? arguments[2] : [];
		if (!this.IsCallable(a)) {
			throw new b(a + " is not a function");
		}
		return a.apply(c, d);
	}, ToPrimitive:f, ToNumber:function(a) {
		a = C(a) ? a : f(a, q);
		if ("symbol" === typeof a) {
			throw new b("Cannot convert a Symbol value to a number");
		}
		if ("string" === typeof a) {
			if (O(a)) {
				return this.ToNumber(x(H(a, 2), 2));
			}
			if (P(a)) {
				return this.ToNumber(x(H(a, 2), 8));
			}
			if (S(a) || T(a)) {
				return NaN;
			}
			var c = aa(a, Z, "");
			if (c !== a) {
				return this.ToNumber(c);
			}
		}
		return q(a);
	}, ToInt16:function(a) {
		a = this.ToUint16(a);
		return 32768 <= a ? a - 65536 : a;
	}, ToInt8:function(a) {
		a = this.ToUint8(a);
		return 128 <= a ? a - 256 : a;
	}, ToUint8:function(a) {
		a = this.ToNumber(a);
		if (r(a) || 0 === a || !A(a)) {
			return 0;
		}
		a = z(a) * E(K(a));
		return B(a, 256);
	}, ToUint8Clamp:function(a) {
		var b = this.ToNumber(a);
		if (r(b) || 0 >= b) {
			return 0;
		}
		if (255 <= b) {
			return 255;
		}
		a = E(a);
		return a + 0.5 < b ? a + 1 : b < a + 0.5 ? a : 0 !== a % 2 ? a + 1 : a;
	}, ToString:function(a) {
		if ("symbol" === typeof a) {
			throw new b("Cannot convert a Symbol value to a string");
		}
		return l(a);
	}, ToObject:function(a) {
		this.RequireObjectCoercible(a);
		return p(a);
	}, ToPropertyKey:function(a) {
		a = this.ToPrimitive(a, l);
		return "symbol" === typeof a ? a : this.ToString(a);
	}, ToLength:function(a) {
		a = this.ToInteger(a);
		return 0 >= a ? 0 : a > t ? t : a;
	}, CanonicalNumericIndexString:function(a) {
		if ("[object String]" !== J(a)) {
			throw new b("must be a string");
		}
		if ("-0" === a) {
			return -0;
		}
		var c = this.ToNumber(a);
		if (this.SameValue(this.ToString(c), a)) {
			return c;
		}
	}, RequireObjectCoercible:D.CheckObjectCoercible, IsArray:k.isArray || function(a) {
		return "[object Array]" === J(a);
	}, IsConstructor:function(a) {
		return "function" === typeof a && !!a.prototype;
	}, IsExtensible:Object.preventExtensions ? function(a) {
		return C(a) ? !1 : F(a);
	} : function(a) {
		return !0;
	}, IsInteger:function(a) {
		if ("number" !== typeof a || r(a) || !A(a)) {
			return !1;
		}
		a = K(a);
		return E(a) === a;
	}, IsPropertyKey:function(a) {
		return "string" === typeof a || "symbol" === typeof a;
	}, IsRegExp:function(a) {
		if (!a || "object" !== typeof a) {
			return !1;
		}
		if (v) {
			var b = a[m.match];
			if ("undefined" !== typeof b) {
				return D.ToBoolean(b);
			}
		}
		return ba(a);
	}, SameValueZero:function(a, b) {
		return a === b || r(a) && r(b);
	}, GetV:function(a, c) {
		if (!this.IsPropertyKey(c)) {
			throw new b("Assertion failed: IsPropertyKey(P) is not true");
		}
		return this.ToObject(a)[c];
	}, GetMethod:function(a, c) {
		if (!this.IsPropertyKey(c)) {
			throw new b("Assertion failed: IsPropertyKey(P) is not true");
		}
		a = this.GetV(a, c);
		if (null != a) {
			if (!this.IsCallable(a)) {
				throw new b(c + "is not a function");
			}
			return a;
		}
	}, Get:function(a, c) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(O) is not Object");
		}
		if (!this.IsPropertyKey(c)) {
			throw new b("Assertion failed: IsPropertyKey(P) is not true");
		}
		return a[c];
	}, Type:function(a) {
		return "symbol" === typeof a ? "Symbol" : D.Type(a);
	}, SpeciesConstructor:function(a, c) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(O) is not Object");
		}
		a = a.constructor;
		if ("undefined" === typeof a) {
			return c;
		}
		if ("Object" !== this.Type(a)) {
			throw new b("O.constructor is not an Object");
		}
		a = v && m.species ? a[m.species] : void 0;
		if (null == a) {
			return c;
		}
		if (this.IsConstructor(a)) {
			return a;
		}
		throw new b("no constructor found");
	}, CompletePropertyDescriptor:function(a) {
		w(this, "Property Descriptor", "Desc", a);
		this.IsGenericDescriptor(a) || this.IsDataDescriptor(a) ? (c(a, "[[Value]]") || (a["[[Value]]"] = void 0), c(a, "[[Writable]]") || (a["[[Writable]]"] = !1)) : (c(a, "[[Get]]") || (a["[[Get]]"] = void 0), c(a, "[[Set]]") || (a["[[Set]]"] = void 0));
		c(a, "[[Enumerable]]") || (a["[[Enumerable]]"] = !1);
		c(a, "[[Configurable]]") || (a["[[Configurable]]"] = !1);
		return a;
	}, Set:function(a, c, d, e) {
		if ("Object" !== this.Type(a)) {
			throw new b("O must be an Object");
		}
		if (!this.IsPropertyKey(c)) {
			throw new b("P must be a Property Key");
		}
		if ("Boolean" !== this.Type(e)) {
			throw new b("Throw must be a Boolean");
		}
		if (e) {
			return a[c] = d, !0;
		}
		try {
			a[c] = d;
		} catch (M) {
			return !1;
		}
	}, HasOwnProperty:function(a, d) {
		if ("Object" !== this.Type(a)) {
			throw new b("O must be an Object");
		}
		if (!this.IsPropertyKey(d)) {
			throw new b("P must be a Property Key");
		}
		return c(a, d);
	}, HasProperty:function(a, c) {
		if ("Object" !== this.Type(a)) {
			throw new b("O must be an Object");
		}
		if (!this.IsPropertyKey(c)) {
			throw new b("P must be a Property Key");
		}
		return c in a;
	}, IsConcatSpreadable:function(a) {
		if ("Object" !== this.Type(a)) {
			return !1;
		}
		if (v && "symbol" === typeof m.isConcatSpreadable) {
			$jscomp.initSymbol();
			var b = this.Get(a, Symbol.isConcatSpreadable);
			if ("undefined" !== typeof b) {
				return this.ToBoolean(b);
			}
		}
		return this.IsArray(a);
	}, Invoke:function(a, c) {
		if (!this.IsPropertyKey(c)) {
			throw new b("P must be a Property Key");
		}
		var d = N(arguments, 2), e = this.GetV(a, c);
		return this.Call(e, a, d);
	}, GetIterator:function(a, c) {
		if (!v) {
			throw new SyntaxError("ES.GetIterator depends on native iterator support.");
		}
		var d = c;
		2 > arguments.length && (d = this.GetMethod(a, m.iterator));
		d = this.Call(d, a);
		if ("Object" !== this.Type(d)) {
			throw new b("iterator must return an object");
		}
		return d;
	}, IteratorNext:function(a, c) {
		var d = this.Invoke(a, "next", 2 > arguments.length ? [] : [c]);
		if ("Object" !== this.Type(d)) {
			throw new b("iterator next must return an object");
		}
		return d;
	}, IteratorComplete:function(a) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(iterResult) is not Object");
		}
		return this.ToBoolean(this.Get(a, "done"));
	}, IteratorValue:function(a) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(iterResult) is not Object");
		}
		return this.Get(a, "value");
	}, IteratorStep:function(a) {
		a = this.IteratorNext(a);
		return !0 === this.IteratorComplete(a) ? !1 : a;
	}, IteratorClose:function(a, c) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(iterator) is not Object");
		}
		if (!this.IsCallable(c)) {
			throw new b("Assertion failed: completion is not a thunk for a Completion Record");
		}
		var d = this.GetMethod(a, "return");
		if ("undefined" === typeof d) {
			return c();
		}
		try {
			var e = this.Call(d, a, []);
		} catch (M) {
			throw c(), M;
		}
		a = c();
		if ("Object" !== this.Type(e)) {
			throw new b("iterator .return must return an object");
		}
		return a;
	}, CreateIterResultObject:function(a, c) {
		if ("Boolean" !== this.Type(c)) {
			throw new b("Assertion failed: Type(done) is not Boolean");
		}
		return {value:a, done:c};
	}, RegExpExec:function(a, c) {
		if ("Object" !== this.Type(a)) {
			throw new b("R must be an Object");
		}
		if ("String" !== this.Type(c)) {
			throw new b("S must be a String");
		}
		var d = this.Get(a, "exec");
		if (this.IsCallable(d)) {
			a = this.Call(d, a, [c]);
			if (null === a || "Object" === this.Type(a)) {
				return a;
			}
			throw new b('"exec" method must return `null` or an Object');
		}
		return Q(a, c);
	}, ArraySpeciesCreate:function(a, c) {
		if (!this.IsInteger(c) || 0 > c) {
			throw new b("Assertion failed: length must be an integer >= 0");
		}
		c = 0 === c ? 0 : c;
		if (this.IsArray(a)) {
			var d = this.Get(a, "constructor");
			"Object" === this.Type(d) && v && m.species && (d = this.Get(d, m.species), null === d && (d = void 0));
		}
		if ("undefined" === typeof d) {
			return k(c);
		}
		if (!this.IsConstructor(d)) {
			throw new b("C must be a constructor");
		}
		return new d(c);
	}, CreateDataProperty:function(a, c, d) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(O) is not Object");
		}
		if (!this.IsPropertyKey(c)) {
			throw new b("Assertion failed: IsPropertyKey(P) is not true");
		}
		var e = Y(a, c), f = e || "function" !== typeof F || F(a);
		if (e && (!e.writable || !e.configurable) || !f) {
			return !1;
		}
		G(a, c, {configurable:!0, enumerable:!0, value:d, writable:!0});
		return !0;
	}, CreateDataPropertyOrThrow:function(a, c, d) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(O) is not Object");
		}
		if (!this.IsPropertyKey(c)) {
			throw new b("Assertion failed: IsPropertyKey(P) is not true");
		}
		a = this.CreateDataProperty(a, c, d);
		if (!a) {
			throw new b("unable to create data property");
		}
		return a;
	}, ObjectCreate:function(a, c) {
		if (null !== a && "Object" !== this.Type(a)) {
			throw new b("Assertion failed: proto must be null or an object");
		}
		if (0 < (2 > arguments.length ? [] : c).length) {
			throw new n("es-abstract does not yet support internal slots");
		}
		if (null === a && !L) {
			throw new n("native Object.create support is required to create null objects");
		}
		return L(a);
	}, AdvanceStringIndex:function(a, c, d) {
		if ("String" !== this.Type(a)) {
			throw new b("S must be a String");
		}
		if (!this.IsInteger(c) || 0 > c || c > t) {
			throw new b("Assertion failed: length must be an integer >= 0 and <= 2**53");
		}
		if ("Boolean" !== this.Type(d)) {
			throw new b("Assertion failed: unicode must be a Boolean");
		}
		if (!d || c + 1 >= a.length) {
			return c + 1;
		}
		d = I(a, c);
		if (55296 > d || 56319 < d) {
			return c + 1;
		}
		a = I(a, c + 1);
		return 56320 > a || 57343 < a ? c + 1 : c + 2;
	}, CreateMethodProperty:function(a, c, d) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(O) is not Object");
		}
		if (!this.IsPropertyKey(c)) {
			throw new b("Assertion failed: IsPropertyKey(P) is not true");
		}
		return !!G(a, c, {configurable:!0, enumerable:!1, value:d, writable:!0});
	}, DefinePropertyOrThrow:function(a, c, d) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(O) is not Object");
		}
		if (!this.IsPropertyKey(c)) {
			throw new b("Assertion failed: IsPropertyKey(P) is not true");
		}
		return !!G(a, c, d);
	}, DeletePropertyOrThrow:function(a, c) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(O) is not Object");
		}
		if (!this.IsPropertyKey(c)) {
			throw new b("Assertion failed: IsPropertyKey(P) is not true");
		}
		a = delete a[c];
		if (!a) {
			throw new TypeError("Attempt to delete property failed.");
		}
		return a;
	}, EnumerableOwnNames:function(a) {
		if ("Object" !== this.Type(a)) {
			throw new b("Assertion failed: Type(O) is not Object");
		}
		return g(a);
	}, thisNumberValue:function(a) {
		return "Number" === this.Type(a) ? a : U(a);
	}, thisBooleanValue:function(a) {
		return "Boolean" === this.Type(a) ? a : V(a);
	}, thisStringValue:function(a) {
		return "String" === this.Type(a) ? a : W(a);
	}, thisTimeValue:function(a) {
		return X(a);
	}});
	delete a.CheckObjectCoercible;
	e.exports = a;
}, function(e, d, a) {
	var c = Array.prototype.slice, f = Object.prototype.toString;
	e.exports = function(a) {
		var b = this;
		if ("function" !== typeof b || "[object Function]" !== f.call(b)) {
			throw new TypeError("Function.prototype.bind called on incompatible " + b);
		}
		for (var d = c.call(arguments, 1), e, g = Math.max(0, b.length - d.length), p = [], q = 0; q < g; q++) {
			p.push("$" + q);
		}
		e = Function("binder", "return function (" + p.join(",") + "){ return binder.apply(this,arguments); }")(function() {
			if (this instanceof e) {
				var f = b.apply(this, d.concat(c.call(arguments)));
				return Object(f) === f ? f : this;
			}
			return b.apply(a, d.concat(c.call(arguments)));
		});
		b.prototype && (g = function() {
		}, g.prototype = b.prototype, e.prototype = new g, g.prototype = null);
		return e;
	};
}, function(e, d, a) {
	e.exports = a(27);
}, function(e, d, a) {
	$jscomp.initSymbol();
	$jscomp.initSymbol();
	$jscomp.initSymbolIterator();
	var c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator, f = a(9), g = a(3), b = a(28), n = a(29);
	e.exports = function(a) {
		if (f(a)) {
			return a;
		}
		var d = "default";
		1 < arguments.length && (arguments[1] === String ? d = "string" : arguments[1] === Number && (d = "number"));
		if (c) {
			if ($jscomp.initSymbol(), Symbol.toPrimitive) {
				$jscomp.initSymbol();
				var e = Symbol.toPrimitive;
				var k = a[e];
				if (null !== k && "undefined" !== typeof k) {
					if (!g(k)) {
						throw new TypeError(k + " returned for property " + e + " of object " + a + " is not a function");
					}
					e = k;
				} else {
					e = void 0;
				}
			} else {
				n(a) && ($jscomp.initSymbol(), e = Symbol.prototype.valueOf);
			}
		}
		if ("undefined" !== typeof e) {
			d = e.call(a, d);
			if (f(d)) {
				return d;
			}
			throw new TypeError("unable to convert exotic object to primitive");
		}
		"default" === d && (b(a) || n(a)) && (d = "string");
		a: {
			d = "default" === d ? "number" : d;
			if ("undefined" === typeof a || null === a) {
				throw new TypeError("Cannot call method on " + a);
			}
			if ("string" !== typeof d || "number" !== d && "string" !== d) {
				throw new TypeError('hint must be "string" or "number"');
			}
			d = "string" === d ? ["toString", "valueOf"] : ["valueOf", "toString"];
			for (e = 0; e < d.length; ++e) {
				if (k = a[d[e]], g(k) && (k = k.call(a), f(k))) {
					break a;
				}
			}
			throw new TypeError("No default value");
		}
		return k;
	};
}, function(e, d, a) {
	var c = Date.prototype.getDay, f = Object.prototype.toString;
	$jscomp.initSymbol();
	$jscomp.initSymbol();
	var g = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag;
	e.exports = function(a) {
		if ("object" !== typeof a || null === a) {
			return !1;
		}
		if (g) {
			try {
				c.call(a);
				var b = !0;
			} catch (k) {
				b = !1;
			}
		} else {
			b = "[object Date]" === f.call(a);
		}
		return b;
	};
}, function(e, d, a) {
	var c = Object.prototype.toString;
	if (a(30)()) {
		$jscomp.initSymbol();
		var f = Symbol.prototype.toString, g = /^Symbol\(.*\)$/;
		e.exports = function(a) {
			if ("symbol" === typeof a) {
				return !0;
			}
			if ("[object Symbol]" !== c.call(a)) {
				return !1;
			}
			try {
				var b = "symbol" !== typeof a.valueOf() ? !1 : g.test(f.call(a));
				return b;
			} catch (k) {
				return !1;
			}
		};
	} else {
		e.exports = function(a) {
			return !1;
		};
	}
}, function(e, d, a) {
	(function(c) {
		var d = c.Symbol, g = a(32);
		e.exports = function() {
			if ("function" !== typeof d) {
				return !1;
			}
			$jscomp.initSymbol();
			if ("function" !== typeof Symbol || "symbol" !== typeof d("foo")) {
				return !1;
			}
			$jscomp.initSymbol();
			return "symbol" !== typeof Symbol("bar") ? !1 : g();
		};
	}).call(this, a(31));
}, function(e, d) {
	d = function() {
		return this;
	}();
	try {
		d = d || (new Function("return this"))();
	} catch (a) {
		"object" === typeof window && (d = window);
	}
	e.exports = d;
}, function(e, d, a) {
	e.exports = function() {
		$jscomp.initSymbol();
		if ("function" !== typeof Symbol || "function" !== typeof Object.getOwnPropertySymbols) {
			return !1;
		}
		$jscomp.initSymbol();
		$jscomp.initSymbolIterator();
		if ("symbol" === typeof Symbol.iterator) {
			return !0;
		}
		var a = {};
		$jscomp.initSymbol();
		var d = Symbol("test"), e = Object(d);
		if ("string" === typeof d || "[object Symbol]" !== Object.prototype.toString.call(d) || "[object Symbol]" !== Object.prototype.toString.call(e)) {
			return !1;
		}
		a[d] = 42;
		for (d in a) {
			return !1;
		}
		if ("function" === typeof Object.keys && 0 !== Object.keys(a).length || "function" === typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(a).length) {
			return !1;
		}
		e = Object.getOwnPropertySymbols(a);
		return 1 !== e.length || e[0] !== d || !Object.prototype.propertyIsEnumerable.call(a, d) || "function" === typeof Object.getOwnPropertyDescriptor && (a = Object.getOwnPropertyDescriptor(a, d), 42 !== a.value || !0 !== a.enumerable) ? !1 : !0;
	};
}, function(e, d) {
	e.exports = function(a) {
		return null === a || "function" !== typeof a && "object" !== typeof a;
	};
}, function(e, d, a) {
	d = a(4);
	var c = d("%Object%"), f = d("%TypeError%"), g = d("%String%"), b = a(10), n = a(11), k = a(12), l = a(14), p = a(15);
	d = a(3);
	var q = a(35), m = a(0);
	e.exports = {ToPrimitive:q, ToBoolean:function(a) {
		return !!a;
	}, ToNumber:function(a) {
		return +a;
	}, ToInteger:function(a) {
		a = this.ToNumber(a);
		return n(a) ? 0 : 0 !== a && k(a) ? l(a) * Math.floor(Math.abs(a)) : a;
	}, ToInt32:function(a) {
		return this.ToNumber(a) >> 0;
	}, ToUint32:function(a) {
		return this.ToNumber(a) >>> 0;
	}, ToUint16:function(a) {
		a = this.ToNumber(a);
		if (n(a) || 0 === a || !k(a)) {
			return 0;
		}
		a = l(a) * Math.floor(Math.abs(a));
		return p(a, 65536);
	}, ToString:function(a) {
		return g(a);
	}, ToObject:function(a) {
		this.CheckObjectCoercible(a);
		return c(a);
	}, CheckObjectCoercible:function(a, b) {
		if (null == a) {
			throw new f(b || "Cannot call method on " + a);
		}
		return a;
	}, IsCallable:d, SameValue:function(a, b) {
		return a === b ? 0 === a ? 1 / a === 1 / b : !0 : n(a) && n(b);
	}, Type:function(a) {
		if (null === a) {
			return "Null";
		}
		if ("undefined" === typeof a) {
			return "Undefined";
		}
		if ("function" === typeof a || "object" === typeof a) {
			return "Object";
		}
		if ("number" === typeof a) {
			return "Number";
		}
		if ("boolean" === typeof a) {
			return "Boolean";
		}
		if ("string" === typeof a) {
			return "String";
		}
	}, IsPropertyDescriptor:function(a) {
		if ("Object" !== this.Type(a)) {
			return !1;
		}
		var b = {"[[Configurable]]":!0, "[[Enumerable]]":!0, "[[Get]]":!0, "[[Set]]":!0, "[[Value]]":!0, "[[Writable]]":!0}, c;
		for (c in a) {
			if (m(a, c) && !b[c]) {
				return !1;
			}
		}
		b = m(a, "[[Value]]");
		a = m(a, "[[Get]]") || m(a, "[[Set]]");
		if (b && a) {
			throw new f("Property Descriptors may not be both accessor and data descriptors");
		}
		return !0;
	}, IsAccessorDescriptor:function(a) {
		if ("undefined" === typeof a) {
			return !1;
		}
		b(this, "Property Descriptor", "Desc", a);
		return m(a, "[[Get]]") || m(a, "[[Set]]") ? !0 : !1;
	}, IsDataDescriptor:function(a) {
		if ("undefined" === typeof a) {
			return !1;
		}
		b(this, "Property Descriptor", "Desc", a);
		return m(a, "[[Value]]") || m(a, "[[Writable]]") ? !0 : !1;
	}, IsGenericDescriptor:function(a) {
		if ("undefined" === typeof a) {
			return !1;
		}
		b(this, "Property Descriptor", "Desc", a);
		return this.IsAccessorDescriptor(a) || this.IsDataDescriptor(a) ? !1 : !0;
	}, FromPropertyDescriptor:function(a) {
		if ("undefined" === typeof a) {
			return a;
		}
		b(this, "Property Descriptor", "Desc", a);
		if (this.IsDataDescriptor(a)) {
			return {value:a["[[Value]]"], writable:!!a["[[Writable]]"], enumerable:!!a["[[Enumerable]]"], configurable:!!a["[[Configurable]]"]};
		}
		if (this.IsAccessorDescriptor(a)) {
			return {get:a["[[Get]]"], set:a["[[Set]]"], enumerable:!!a["[[Enumerable]]"], configurable:!!a["[[Configurable]]"]};
		}
		throw new f("FromPropertyDescriptor must be called with a fully populated Property Descriptor");
	}, ToPropertyDescriptor:function(a) {
		if ("Object" !== this.Type(a)) {
			throw new f("ToPropertyDescriptor requires an object");
		}
		var b = {};
		m(a, "enumerable") && (b["[[Enumerable]]"] = this.ToBoolean(a.enumerable));
		m(a, "configurable") && (b["[[Configurable]]"] = this.ToBoolean(a.configurable));
		m(a, "value") && (b["[[Value]]"] = a.value);
		m(a, "writable") && (b["[[Writable]]"] = this.ToBoolean(a.writable));
		if (m(a, "get")) {
			var c = a.get;
			if ("undefined" !== typeof c && !this.IsCallable(c)) {
				throw new TypeError("getter must be a function");
			}
			b["[[Get]]"] = c;
		}
		if (m(a, "set")) {
			a = a.set;
			if ("undefined" !== typeof a && !this.IsCallable(a)) {
				throw new f("setter must be a function");
			}
			b["[[Set]]"] = a;
		}
		if ((m(b, "[[Get]]") || m(b, "[[Set]]")) && (m(b, "[[Value]]") || m(b, "[[Writable]]"))) {
			throw new f("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
		}
		return b;
	}};
}, function(e, d, a) {
	var c = Object.prototype.toString, f = a(9), g = a(3), b = {"[[DefaultValue]]":function(a) {
		var b = 1 < arguments.length ? arguments[1] : "[object Date]" === c.call(a) ? String : Number;
		if (b === String || b === Number) {
			b = b === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
			var d;
			for (d = 0; d < b.length; ++d) {
				if (g(a[b[d]])) {
					var e = a[b[d]]();
					if (f(e)) {
						return e;
					}
				}
			}
			throw new TypeError("No default value");
		}
		throw new TypeError("invalid [[DefaultValue]] hint supplied");
	}};
	e.exports = function(a) {
		return f(a) ? a : 1 < arguments.length ? b["[[DefaultValue]]"](a, arguments[1]) : b["[[DefaultValue]]"](a);
	};
}, function(e, d, a) {
	var c = a(0), f = RegExp.prototype.exec, g = Object.getOwnPropertyDescriptor, b = Object.prototype.toString;
	$jscomp.initSymbol();
	$jscomp.initSymbol();
	var n = "function" === typeof Symbol && "symbol" === typeof Symbol.toStringTag;
	e.exports = function(a) {
		if (!a || "object" !== typeof a) {
			return !1;
		}
		if (!n) {
			return "[object RegExp]" === b.call(a);
		}
		var d = g(a, "lastIndex");
		if (!d || !c(d, "value")) {
			return !1;
		}
		a: {
			try {
				var e = a.lastIndex;
				a.lastIndex = 0;
				f.call(a);
				var k = !0;
				break a;
			} catch (m) {
				k = !1;
				break a;
			} finally {
				a.lastIndex = e;
			}
			k = void 0;
		}
		return k;
	};
}, function(e, d, a) {
	var c = a(16), f = a(5);
	e.exports = function() {
		var a = c();
		f(Object, {values:a}, {values:function() {
			return Object.values !== a;
		}});
		return a;
	};
}, function(e, d, a) {
	function c(a) {
		"string" !== typeof a && (a = String(a));
		if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(a)) {
			throw new TypeError("Invalid character in header field name");
		}
		return a.toLowerCase();
	}
	function f(a) {
		"string" !== typeof a && (a = String(a));
		return a;
	}
	function g(a) {
		var b = {next:function() {
			var b = a.shift();
			return {done:void 0 === b, value:b};
		}};
		t.iterable && ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), b[Symbol.iterator] = function() {
			return b;
		});
		return b;
	}
	function b(a) {
		this.map = {};
		a instanceof b ? a.forEach(function(a, b) {
			this.append(b, a);
		}, this) : Array.isArray(a) ? a.forEach(function(a) {
			this.append(a[0], a[1]);
		}, this) : a && Object.getOwnPropertyNames(a).forEach(function(b) {
			this.append(b, a[b]);
		}, this);
	}
	function n(a) {
		if (a.bodyUsed) {
			return Promise.reject(new TypeError("Already read"));
		}
		a.bodyUsed = !0;
	}
	function k(a) {
		return new Promise(function(b, c) {
			a.onload = function() {
				b(a.result);
			};
			a.onerror = function() {
				c(a.error);
			};
		});
	}
	function l(a) {
		var b = new FileReader, c = k(b);
		b.readAsArrayBuffer(a);
		return c;
	}
	function p(a) {
		a = new Uint8Array(a);
		for (var b = Array(a.length), c = 0; c < a.length; c++) {
			b[c] = String.fromCharCode(a[c]);
		}
		return b.join("");
	}
	function q(a) {
		if (a.slice) {
			return a.slice(0);
		}
		var b = new Uint8Array(a.byteLength);
		b.set(new Uint8Array(a));
		return b.buffer;
	}
	function m() {
		this.bodyUsed = !1;
		this._initBody = function(a) {
			(this._bodyInit = a) ? "string" === typeof a ? this._bodyText = a : t.blob && Blob.prototype.isPrototypeOf(a) ? this._bodyBlob = a : t.formData && FormData.prototype.isPrototypeOf(a) ? this._bodyFormData = a : t.searchParams && URLSearchParams.prototype.isPrototypeOf(a) ? this._bodyText = a.toString() : t.arrayBuffer && t.blob && a && DataView.prototype.isPrototypeOf(a) ? (this._bodyArrayBuffer = q(a.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(a) || 
			z(a)) ? this._bodyArrayBuffer = q(a) : this._bodyText = a = Object.prototype.toString.call(a) : this._bodyText = "";
			this.headers.get("content-type") || ("string" === typeof a ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(a) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
		};
		t.blob && (this.blob = function() {
			var a = n(this);
			if (a) {
				return a;
			}
			if (this._bodyBlob) {
				return Promise.resolve(this._bodyBlob);
			}
			if (this._bodyArrayBuffer) {
				return Promise.resolve(new Blob([this._bodyArrayBuffer]));
			}
			if (this._bodyFormData) {
				throw Error("could not read FormData body as blob");
			}
			return Promise.resolve(new Blob([this._bodyText]));
		}, this.arrayBuffer = function() {
			return this._bodyArrayBuffer ? n(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l);
		});
		this.text = function() {
			var a = n(this);
			if (a) {
				return a;
			}
			if (this._bodyBlob) {
				a = this._bodyBlob;
				var b = new FileReader, c = k(b);
				b.readAsText(a);
				return c;
			}
			if (this._bodyArrayBuffer) {
				return Promise.resolve(p(this._bodyArrayBuffer));
			}
			if (this._bodyFormData) {
				throw Error("could not read FormData body as text");
			}
			return Promise.resolve(this._bodyText);
		};
		t.formData && (this.formData = function() {
			return this.text().then(v);
		});
		this.json = function() {
			return this.text().then(JSON.parse);
		};
		return this;
	}
	function h(a, c) {
		c = c || {};
		var d = c.body;
		if (a instanceof h) {
			if (a.bodyUsed) {
				throw new TypeError("Already read");
			}
			this.url = a.url;
			this.credentials = a.credentials;
			c.headers || (this.headers = new b(a.headers));
			this.method = a.method;
			this.mode = a.mode;
			this.signal = a.signal;
			d || null == a._bodyInit || (d = a._bodyInit, a.bodyUsed = !0);
		} else {
			this.url = String(a);
		}
		this.credentials = c.credentials || this.credentials || "same-origin";
		if (c.headers || !this.headers) {
			this.headers = new b(c.headers);
		}
		a = c.method || this.method || "GET";
		var e = a.toUpperCase();
		this.method = -1 < B.indexOf(e) ? e : a;
		this.mode = c.mode || this.mode || null;
		this.signal = c.signal || this.signal;
		this.referrer = null;
		if (("GET" === this.method || "HEAD" === this.method) && d) {
			throw new TypeError("Body not allowed for GET or HEAD requests");
		}
		this._initBody(d);
	}
	function v(a) {
		var b = new FormData;
		a.trim().split("&").forEach(function(a) {
			if (a) {
				var c = a.split("=");
				a = c.shift().replace(/\+/g, " ");
				c = c.join("=").replace(/\+/g, " ");
				b.append(decodeURIComponent(a), decodeURIComponent(c));
			}
		});
		return b;
	}
	function w(a) {
		var c = new b;
		a.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(a) {
			var b = a.split(":");
			if (a = b.shift().trim()) {
				b = b.join(":").trim(), c.append(a, b);
			}
		});
		return c;
	}
	function r(a, c) {
		c || (c = {});
		this.type = "default";
		this.status = void 0 === c.status ? 200 : c.status;
		this.ok = 200 <= this.status && 300 > this.status;
		this.statusText = "statusText" in c ? c.statusText : "OK";
		this.headers = new b(c.headers);
		this.url = c.url || "";
		this._initBody(a);
	}
	function A(a, b) {
		return new Promise(function(c, d) {
			function e() {
				g.abort();
			}
			var f = new h(a, b);
			if (f.signal && f.signal.aborted) {
				return d(new x("Aborted", "AbortError"));
			}
			var g = new XMLHttpRequest;
			g.onload = function() {
				var a = {status:g.status, statusText:g.statusText, headers:w(g.getAllResponseHeaders() || "")};
				a.url = "responseURL" in g ? g.responseURL : a.headers.get("X-Request-URL");
				c(new r("response" in g ? g.response : g.responseText, a));
			};
			g.onerror = function() {
				d(new TypeError("Network request failed"));
			};
			g.ontimeout = function() {
				d(new TypeError("Network request failed"));
			};
			g.onabort = function() {
				d(new x("Aborted", "AbortError"));
			};
			g.open(f.method, f.url, !0);
			"include" === f.credentials ? g.withCredentials = !0 : "omit" === f.credentials && (g.withCredentials = !1);
			"responseType" in g && t.blob && (g.responseType = "blob");
			f.headers.forEach(function(a, b) {
				g.setRequestHeader(b, a);
			});
			f.signal && (f.signal.addEventListener("abort", e), g.onreadystatechange = function() {
				4 === g.readyState && f.signal.removeEventListener("abort", e);
			});
			g.send("undefined" === typeof f._bodyInit ? null : f._bodyInit);
		});
	}
	a.r(d);
	a.d(d, "Headers", function() {
		return b;
	});
	a.d(d, "Request", function() {
		return h;
	});
	a.d(d, "Response", function() {
		return r;
	});
	a.d(d, "DOMException", function() {
		return x;
	});
	a.d(d, "fetch", function() {
		return A;
	});
	$jscomp.initSymbol();
	e = "Symbol" in self && "iterator" in Symbol;
	if (d = "FileReader" in self && "Blob" in self) {
		try {
			new Blob, d = !0;
		} catch (u) {
			d = !1;
		}
	}
	var t = {searchParams:"URLSearchParams" in self, iterable:e, blob:d, formData:"FormData" in self, arrayBuffer:"ArrayBuffer" in self};
	if (t.arrayBuffer) {
		var y = "[object Int8Array];[object Uint8Array];[object Uint8ClampedArray];[object Int16Array];[object Uint16Array];[object Int32Array];[object Uint32Array];[object Float32Array];[object Float64Array]".split(";"), z = ArrayBuffer.isView || function(a) {
			return a && -1 < y.indexOf(Object.prototype.toString.call(a));
		};
	}
	b.prototype.append = function(a, b) {
		a = c(a);
		b = f(b);
		var d = this.map[a];
		this.map[a] = d ? d + ", " + b : b;
	};
	b.prototype["delete"] = function(a) {
		delete this.map[c(a)];
	};
	b.prototype.get = function(a) {
		a = c(a);
		return this.has(a) ? this.map[a] : null;
	};
	b.prototype.has = function(a) {
		return this.map.hasOwnProperty(c(a));
	};
	b.prototype.set = function(a, b) {
		this.map[c(a)] = f(b);
	};
	b.prototype.forEach = function(a, b) {
		for (var c in this.map) {
			this.map.hasOwnProperty(c) && a.call(b, this.map[c], c, this);
		}
	};
	b.prototype.keys = function() {
		var a = [];
		this.forEach(function(b, c) {
			a.push(c);
		});
		return g(a);
	};
	b.prototype.values = function() {
		var a = [];
		this.forEach(function(b) {
			a.push(b);
		});
		return g(a);
	};
	b.prototype.entries = function() {
		var a = [];
		this.forEach(function(b, c) {
			a.push([c, b]);
		});
		return g(a);
	};
	t.iterable && ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), b.prototype[Symbol.iterator] = b.prototype.entries);
	var B = "DELETE GET HEAD OPTIONS POST PUT".split(" ");
	h.prototype.clone = function() {
		return new h(this, {body:this._bodyInit});
	};
	m.call(h.prototype);
	m.call(r.prototype);
	r.prototype.clone = function() {
		return new r(this._bodyInit, {status:this.status, statusText:this.statusText, headers:new b(this.headers), url:this.url});
	};
	r.error = function() {
		var a = new r(null, {status:0, statusText:""});
		a.type = "error";
		return a;
	};
	var C = [301, 302, 303, 307, 308];
	r.redirect = function(a, b) {
		if (-1 === C.indexOf(b)) {
			throw new RangeError("Invalid status code");
		}
		return new r(null, {status:b, headers:{location:a}});
	};
	var x = self.DOMException;
	try {
		new x;
	} catch (u) {
		x = function(a, b) {
			this.message = a;
			this.name = b;
			this.stack = Error(a).stack;
		}, x.prototype = Object.create(Error.prototype), x.prototype.constructor = x;
	}
	A.polyfill = !0;
	self.fetch || (self.fetch = A, self.Headers = b, self.Request = h, self.Response = r);
}, function(e, d, a) {
	d = a(18);
	var c = a(17), f = a(41), g = a(40), b = {_manifest:void 0}, n = new d;
	n.setMaxListeners(1024);
	b.sendMessage = function(a, b) {
		g.dispatchRequest({eventName:"sendMessage", message:a}, b);
	};
	b.onMessage = {addListener:function(a) {
		n.addListener("message", a);
	}, removeListener:function(a) {
		n.removeListener("message", a);
	}};
	safari.self.addEventListener("message", function(a) {
		if ("request" === a.name && c.isForThisFrame(a.message.frameId)) {
			var b = a.message.payload;
			!b && (b = a.message.payload_json) && (b = JSON.parse(b));
			n.emit("message", b, {id:"topee"}, function(b) {
				g.dispatchRequest({eventName:"messageResponse", messageId:a.message.messageId, message:b});
			});
			"undefined" === typeof a.message.frameId && f.broadcast(a.message);
		} else {
			"request" === a.name && f.hasChild(a.message.frameId) && f.forward(a.message.frameId, a.message);
		}
	});
	b.getURL = function(a) {
		if (!safari.extension.baseURI) {
			throw Error("safari.extension.baseURI didn't return usable value");
		}
		return safari.extension.baseURI + a;
	};
	b.getPlatformInfo = function(a) {
		a({os:"mac", arch:"x86-64", nacl_arch:"x86-64"});
	};
	b.getManifest = function() {
		return b._manifest;
	};
	e.exports = b;
}, function(e, d, a) {
	function c(a, c, d) {
		function b(a) {
			if ("response" === a.name && a.message.messageId === e) {
				var c = a.message.payload;
				!c && (c = a.message.payload_json) && (c = JSON.parse(c));
				d(c);
				safari.self.removeEventListener("message", b);
			}
		}
		var e = c.messageId || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
		d && (b.messageId = e, safari.self.addEventListener("message", b));
		c.tabId = a;
		c.messageId = e;
		c.frameId = f.frameId;
		c.url = window.location.href;
		safari.extension.dispatchMessage("request", {tabId:a, payload:c});
	}
	var f = a(17), g = {dispatchRequest:function(a, d) {
		f.tabId.then(function(b) {
			c(b, a, d);
		});
	}};
	f.tabId.then(function(a) {
		g.dispatchRequest = function(b, d) {
			c(a, b, d);
		};
	});
	e.exports = g;
}, function(e, d, a) {
	var c = new (a(42)), f = {_frames:{}, add:function(a, b) {
		this.garbageCollect();
		this._frames[a] = b;
	}, get:function(a) {
		this.garbageCollect();
		return this._frames[a];
	}, getAll:function() {
		this.garbageCollect();
		return Object.values(this._frames);
	}, garbageCollect:function() {
		for (var a in this._frames) {
			this._frames[a].closed && delete this._frames[a];
		}
	}};
	e.exports = {install:function() {
		window.addEventListener("message", function(a) {
			safari.extension.baseURI.toLowerCase().startsWith(a.origin.toLowerCase()) && (a.data && "topee_get_iframe_key" === a.data.type && (f.add(a.data.frameId, a.source), c.readyPromise.then(function() {
				return c.getKey();
			}).then(function(b) {
				a.source && a.source.postMessage({type:"topee_iframe_key", value:b}, a.origin);
			})), a.data && "topee_iframe_request" === a.data.type && c.decrypt(a.data.value).then(function(b) {
				function d(b) {
					"response" === b.name && b.message.messageId === e && (c.encrypt(JSON.stringify(b.message)).then(function(b) {
						a.source && a.source.postMessage({type:"topee_iframe_response", value:b}, a.origin);
					}), safari.self.removeEventListener("message", d));
				}
				b = JSON.parse(b);
				var e = a.data.messageId;
				"undefined" !== typeof e && safari.self.addEventListener("message", d);
				safari.extension.dispatchMessage(b.name, b.value);
			}));
		});
	}, hasChild:function(a) {
		return !!a && !!f.get(a);
	}, forward:function(a, b) {
		var d = f.get(a);
		d ? c.readyPromise.then(function() {
			return c.encrypt(JSON.stringify(b));
		}).then(function(a) {
			return d.postMessage({type:"topee_iframe_request", value:a}, "*");
		}) : window.topee_log && console.log("frame", a, "not found");
	}, broadcast:function(a) {
		var b = f.getAll();
		0 != b.length && c.readyPromise.then(function() {
			return c.encrypt(JSON.stringify(a));
		}).then(function(a) {
			return b.forEach(function(b) {
				return b.postMessage({type:"topee_iframe_request", value:a}, "*");
			});
		});
	}};
}, function(e, d, a) {
	var c = a(45), f = a(46);
	d = function(a) {
		this.readyPromise = a ? c.importKey(a).then(function(a) {
			return this.key = a;
		}.bind(this)) : c.createKey().then(function(a) {
			return this.key = a;
		}.bind(this));
	};
	d.prototype.ready = function() {
		return !!this.key;
	};
	d.prototype.getKey = function() {
		return c.exportKey(this.key);
	};
	d.prototype.encrypt = function(a) {
		var b = c.createSalt();
		return c.encrypt(f.str2arrayBuffer(encodeURI(a)), b, this.key).then(function(a) {
			return {data:f.arrayBuffer2base64(a), salt:f.uint8array2base64(b)};
		});
	};
	d.prototype.decrypt = function(a) {
		return c.decrypt(f.base642arrayBuffer(a.data), f.base642uint8array(a.salt), this.key).then(function(a) {
			return decodeURI(f.arrayBuffer2str(a));
		});
	};
	e.exports = d;
}, function(e, d, a) {
	e.exports = {extension:a(44), i18n:a(47), runtime:a(39), tabs:a(48)};
}, function(e, d, a) {
	var c = a(39);
	e.exports = {getURL:function(a) {
		return c.getURL(a);
	}};
}, function(e, d) {
	e.exports = {createSalt:function() {
		return crypto.getRandomValues(new Uint8Array(16));
	}, createKey:function() {
		return crypto.subtle.generateKey({name:"AES-CBC", length:256}, !0, ["encrypt", "decrypt"]);
	}, importKey:function(a) {
		return crypto.subtle.importKey("jwk", {kty:"oct", k:a, alg:"A256CBC", ext:!0}, {name:"AES-CBC"}, !0, ["encrypt", "decrypt"]);
	}, exportKey:function(a) {
		return crypto.subtle.exportKey("jwk", a).then(function(a) {
			return a.k;
		});
	}, encrypt:function(a, c, d) {
		return crypto.subtle.encrypt({name:"AES-CBC", iv:c}, d, a);
	}, decrypt:function(a, c, d) {
		return crypto.subtle.decrypt({name:"AES-CBC", iv:c}, d, a);
	}};
}, function(e, d) {
	function a(a) {
		var b = [];
		a.forEach(function(a) {
			b.push(String.fromCharCode(a));
		});
		return b.join("");
	}
	function c(b) {
		return a(new Uint8Array(b));
	}
	function f(a) {
		return new Uint8Array([].map.call(a, function(b) {
			b = b.charCodeAt(0);
			if (255 < b) {
				throw a + ": cannot convert non-ASCII character";
			}
			return b;
		}));
	}
	function g(a) {
		return f(a).buffer;
	}
	e.exports = {uint8array2str:a, arrayBuffer2str:c, str2uint8array:f, str2arrayBuffer:g, uint8array2base64:function(b) {
		return btoa(a(b));
	}, arrayBuffer2base64:function(a) {
		return btoa(c(a));
	}, base642uint8array:function(a) {
		return f(atob(a));
	}, base642arrayBuffer:function(a) {
		return g(atob(a));
	}};
}, function(e, d) {
	e.exports = {getUILanguage:function() {
		return navigator.language;
	}, getMessage:function(a) {
		return a;
	}, detectLanguage:function(a, c) {
		c({isReliable:!0, languages:[{language:"en", percentage:100}]});
	}};
}, function(e, d, a) {
	var c = a(40);
	e.exports = {query:function(a, d) {
		c.dispatchRequest({eventName:"tabs.query", queryInfo:a}, d);
	}};
}, , , , , , function(e, d, a) {
	(function() {
		function c(a, b, c) {
			return new Promise(function(d) {
				function e() {
					d(c.apply(this, arguments));
					a.removeEventListener(b, e);
				}
				a.addEventListener(b, e);
			});
		}
		function d() {
			"prerender" !== document.visibilityState && window.location.href !== b && (b = window.location.href, e.sayHello());
		}
		if ({"http:":!0, "https:":!0, "about:":!0, "safari-extension:":!0}[window.location.protocol]) {
			a(19);
			a(55);
			var e = a(17);
			if ("object" === typeof window.chrome) {
				window.topee_log && console.log("chrome api already loaded into " + (window === window.top ? "top window" : "some frame")), window === window.top && (window.isTabRegistered = !0, window.addEventListener("pagehide", e.sayBye), window.addEventListener("beforeunload", e.sayBye));
			} else {
				window.chrome = a(43);
				e.init();
				a(41).install();
				window === window.top && (e.sayHello(), window.addEventListener("pageshow", function() {
					e.sayHello();
				}));
				var b = window.location.href;
				if (window === window.top) {
					var n = void 0;
					window.addEventListener("beforeunload", function() {
						e.sayBye();
						n = setTimeout(function() {
							return e.sayHello();
						}, 500);
					});
					window.addEventListener("pagehide", function() {
						clearTimeout(n);
						e.sayBye();
					});
					var k = !1;
					c(document, "readystatechange", function() {
						"complete" === document.readyState && (k = !0);
					});
					e.tabId.then(function() {
						setInterval(function() {
							return e.sayAlive();
						}, 5000);
						k && e.sayAlive();
						document.addEventListener("DOMContentLoaded", function() {
							e.sayAlive();
						});
						window.addEventListener("load", function() {
							e.sayAlive();
						});
						document.addEventListener("visibilitychange", function() {
							e.sayAlive();
						});
					});
					var l = "visible" === document.visibilityState ? 500 : 5000, p = setInterval(d, l);
					document.addEventListener("visibilitychange", function() {
						clearInterval(p);
						"visible" === document.visibilityState ? (d(), l = 500) : l = 5000;
						p = setInterval(d, l);
					});
				}
			}
		}
	})();
}, function(e, d, a) {
	if (window === window.top) {
		var c = {};
		safari.self.addEventListener("message", function(a) {
			"toolbarItem" === a.name && ((a = a.message ? a.message.toolbarItem : null) && (c = Object.assign(c, a)), safari.extension.dispatchMessage("toolbarItem", {text:c.text, title:c.title, image:c.image}));
		});
	}
}]);
}).call(this || window)

