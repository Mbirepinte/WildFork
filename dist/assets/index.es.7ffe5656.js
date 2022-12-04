import { c as gr, _ as Wa } from "./index.de3e631d.js";
var Xt = function (a) {
    return a && a.Math == Math && a;
  },
  L =
    Xt(typeof globalThis == "object" && globalThis) ||
    Xt(typeof window == "object" && window) ||
    Xt(typeof self == "object" && self) ||
    Xt(typeof gr == "object" && gr) ||
    (function () {
      return this;
    })() ||
    Function("return this")(),
  lt = {},
  k = function (a) {
    try {
      return !!a();
    } catch {
      return !0;
    }
  },
  Al = k,
  ce = !Al(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] != 7
    );
  }),
  Pl = k,
  Sr = !Pl(function () {
    var a = function () {}.bind();
    return typeof a != "function" || a.hasOwnProperty("prototype");
  }),
  Rl = Sr,
  Wt = Function.prototype.call,
  Y = Rl
    ? Wt.bind(Wt)
    : function () {
        return Wt.apply(Wt, arguments);
      },
  Vo = {},
  Lo = {}.propertyIsEnumerable,
  ko = Object.getOwnPropertyDescriptor,
  Il = ko && !Lo.call({ 1: 2 }, 1);
Vo.f = Il
  ? function (e) {
      var t = ko(this, e);
      return !!t && t.enumerable;
    }
  : Lo;
var Or = function (a, e) {
    return {
      enumerable: !(a & 1),
      configurable: !(a & 2),
      writable: !(a & 4),
      value: e,
    };
  },
  Bo = Sr,
  Fo = Function.prototype,
  qa = Fo.call,
  Nl = Bo && Fo.bind.bind(qa, qa),
  U = Bo
    ? Nl
    : function (a) {
        return function () {
          return qa.apply(a, arguments);
        };
      },
  jo = U,
  Ml = jo({}.toString),
  _l = jo("".slice),
  ze = function (a) {
    return _l(Ml(a), 8, -1);
  },
  Dl = U,
  Vl = k,
  Ll = ze,
  ra = Object,
  kl = Dl("".split),
  Uo = Vl(function () {
    return !ra("z").propertyIsEnumerable(0);
  })
    ? function (a) {
        return Ll(a) == "String" ? kl(a, "") : ra(a);
      }
    : ra,
  Ge = function (a) {
    return a == null;
  },
  Bl = Ge,
  Fl = TypeError,
  ge = function (a) {
    if (Bl(a)) throw Fl("Can't call method on " + a);
    return a;
  },
  jl = Uo,
  Ul = ge,
  Rt = function (a) {
    return jl(Ul(a));
  },
  Qa = typeof document == "object" && document.all,
  zl = typeof Qa == "undefined" && Qa !== void 0,
  zo = { all: Qa, IS_HTMLDDA: zl },
  Go = zo,
  Gl = Go.all,
  D = Go.IS_HTMLDDA
    ? function (a) {
        return typeof a == "function" || a === Gl;
      }
    : function (a) {
        return typeof a == "function";
      },
  yn = D,
  Ho = zo,
  Hl = Ho.all,
  Te = Ho.IS_HTMLDDA
    ? function (a) {
        return typeof a == "object" ? a !== null : yn(a) || a === Hl;
      }
    : function (a) {
        return typeof a == "object" ? a !== null : yn(a);
      },
  aa = L,
  Yl = D,
  Xl = function (a) {
    return Yl(a) ? a : void 0;
  },
  Ce = function (a, e) {
    return arguments.length < 2 ? Xl(aa[a]) : aa[a] && aa[a][e];
  },
  Wl = U,
  Er = Wl({}.isPrototypeOf),
  ql = Ce,
  $r = ql("navigator", "userAgent") || "",
  Yo = L,
  ia = $r,
  mn = Yo.process,
  bn = Yo.Deno,
  xn = (mn && mn.versions) || (bn && bn.version),
  Tn = xn && xn.v8,
  ue,
  dr;
Tn &&
  ((ue = Tn.split(".")), (dr = ue[0] > 0 && ue[0] < 4 ? 1 : +(ue[0] + ue[1])));
!dr &&
  ia &&
  ((ue = ia.match(/Edge\/(\d+)/)),
  (!ue || ue[1] >= 74) &&
    ((ue = ia.match(/Chrome\/(\d+)/)), ue && (dr = +ue[1])));
var Ei = dr,
  Sn = Ei,
  Ql = k,
  Xo =
    !!Object.getOwnPropertySymbols &&
    !Ql(function () {
      var a = Symbol();
      return (
        !String(a) ||
        !(Object(a) instanceof Symbol) ||
        (!Symbol.sham && Sn && Sn < 41)
      );
    }),
  Kl = Xo,
  Wo = Kl && !Symbol.sham && typeof Symbol.iterator == "symbol",
  Zl = Ce,
  Jl = D,
  eh = Er,
  th = Wo,
  rh = Object,
  qo = th
    ? function (a) {
        return typeof a == "symbol";
      }
    : function (a) {
        var e = Zl("Symbol");
        return Jl(e) && eh(e.prototype, rh(a));
      },
  ah = String,
  wr = function (a) {
    try {
      return ah(a);
    } catch {
      return "Object";
    }
  },
  ih = D,
  nh = wr,
  sh = TypeError,
  Ae = function (a) {
    if (ih(a)) return a;
    throw sh(nh(a) + " is not a function");
  },
  oh = Ae,
  uh = Ge,
  ht = function (a, e) {
    var t = a[e];
    return uh(t) ? void 0 : oh(t);
  },
  na = Y,
  sa = D,
  oa = Te,
  lh = TypeError,
  hh = function (a, e) {
    var t, r;
    if (
      (e === "string" && sa((t = a.toString)) && !oa((r = na(t, a)))) ||
      (sa((t = a.valueOf)) && !oa((r = na(t, a)))) ||
      (e !== "string" && sa((t = a.toString)) && !oa((r = na(t, a))))
    )
      return r;
    throw lh("Can't convert object to primitive value");
  },
  Cr = { exports: {} },
  On = L,
  vh = Object.defineProperty,
  $i = function (a, e) {
    try {
      vh(On, a, { value: e, configurable: !0, writable: !0 });
    } catch {
      On[a] = e;
    }
    return e;
  },
  fh = L,
  ch = $i,
  En = "__core-js_shared__",
  gh = fh[En] || ch(En, {}),
  wi = gh,
  $n = wi;
(Cr.exports = function (a, e) {
  return $n[a] || ($n[a] = e !== void 0 ? e : {});
})("versions", []).push({
  version: "3.26.1",
  mode: "global",
  copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
  source: "https://github.com/zloirock/core-js",
});
var dh = ge,
  ph = Object,
  Ar = function (a) {
    return ph(dh(a));
  },
  yh = U,
  mh = Ar,
  bh = yh({}.hasOwnProperty),
  le =
    Object.hasOwn ||
    function (e, t) {
      return bh(mh(e), t);
    },
  xh = U,
  Th = 0,
  Sh = Math.random(),
  Oh = xh((1).toString),
  Qo = function (a) {
    return "Symbol(" + (a === void 0 ? "" : a) + ")_" + Oh(++Th + Sh, 36);
  },
  Eh = L,
  $h = Cr.exports,
  wn = le,
  wh = Qo,
  Cn = Xo,
  Ko = Wo,
  qe = $h("wks"),
  Be = Eh.Symbol,
  An = Be && Be.for,
  Ch = Ko ? Be : (Be && Be.withoutSetter) || wh,
  G = function (a) {
    if (!wn(qe, a) || !(Cn || typeof qe[a] == "string")) {
      var e = "Symbol." + a;
      Cn && wn(Be, a)
        ? (qe[a] = Be[a])
        : Ko && An
        ? (qe[a] = An(e))
        : (qe[a] = Ch(e));
    }
    return qe[a];
  },
  Ah = Y,
  Pn = Te,
  Rn = qo,
  Ph = ht,
  Rh = hh,
  Ih = G,
  Nh = TypeError,
  Mh = Ih("toPrimitive"),
  _h = function (a, e) {
    if (!Pn(a) || Rn(a)) return a;
    var t = Ph(a, Mh),
      r;
    if (t) {
      if ((e === void 0 && (e = "default"), (r = Ah(t, a, e)), !Pn(r) || Rn(r)))
        return r;
      throw Nh("Can't convert object to primitive value");
    }
    return e === void 0 && (e = "number"), Rh(a, e);
  },
  Dh = _h,
  Vh = qo,
  Ci = function (a) {
    var e = Dh(a, "string");
    return Vh(e) ? e : e + "";
  },
  Lh = L,
  In = Te,
  Ka = Lh.document,
  kh = In(Ka) && In(Ka.createElement),
  Pr = function (a) {
    return kh ? Ka.createElement(a) : {};
  },
  Bh = ce,
  Fh = k,
  jh = Pr,
  Zo =
    !Bh &&
    !Fh(function () {
      return (
        Object.defineProperty(jh("div"), "a", {
          get: function () {
            return 7;
          },
        }).a != 7
      );
    }),
  Uh = ce,
  zh = Y,
  Gh = Vo,
  Hh = Or,
  Yh = Rt,
  Xh = Ci,
  Wh = le,
  qh = Zo,
  Nn = Object.getOwnPropertyDescriptor;
lt.f = Uh
  ? Nn
  : function (e, t) {
      if (((e = Yh(e)), (t = Xh(t)), qh))
        try {
          return Nn(e, t);
        } catch {}
      if (Wh(e, t)) return Hh(!zh(Gh.f, e, t), e[t]);
    };
var de = {},
  Qh = ce,
  Kh = k,
  Jo =
    Qh &&
    Kh(function () {
      return (
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype != 42
      );
    }),
  Zh = Te,
  Jh = String,
  ev = TypeError,
  K = function (a) {
    if (Zh(a)) return a;
    throw ev(Jh(a) + " is not an object");
  },
  tv = ce,
  rv = Zo,
  av = Jo,
  qt = K,
  Mn = Ci,
  iv = TypeError,
  ua = Object.defineProperty,
  nv = Object.getOwnPropertyDescriptor,
  la = "enumerable",
  ha = "configurable",
  va = "writable";
de.f = tv
  ? av
    ? function (e, t, r) {
        if (
          (qt(e),
          (t = Mn(t)),
          qt(r),
          typeof e == "function" &&
            t === "prototype" &&
            "value" in r &&
            va in r &&
            !r[va])
        ) {
          var i = nv(e, t);
          i &&
            i[va] &&
            ((e[t] = r.value),
            (r = {
              configurable: ha in r ? r[ha] : i[ha],
              enumerable: la in r ? r[la] : i[la],
              writable: !1,
            }));
        }
        return ua(e, t, r);
      }
    : ua
  : function (e, t, r) {
      if ((qt(e), (t = Mn(t)), qt(r), rv))
        try {
          return ua(e, t, r);
        } catch {}
      if ("get" in r || "set" in r) throw iv("Accessors not supported");
      return "value" in r && (e[t] = r.value), e;
    };
var sv = ce,
  ov = de,
  uv = Or,
  It = sv
    ? function (a, e, t) {
        return ov.f(a, e, uv(1, t));
      }
    : function (a, e, t) {
        return (a[e] = t), a;
      },
  eu = { exports: {} },
  Za = ce,
  lv = le,
  tu = Function.prototype,
  hv = Za && Object.getOwnPropertyDescriptor,
  Ai = lv(tu, "name"),
  vv = Ai && function () {}.name === "something",
  fv = Ai && (!Za || (Za && hv(tu, "name").configurable)),
  Rr = { EXISTS: Ai, PROPER: vv, CONFIGURABLE: fv },
  cv = U,
  gv = D,
  Ja = wi,
  dv = cv(Function.toString);
gv(Ja.inspectSource) ||
  (Ja.inspectSource = function (a) {
    return dv(a);
  });
var Pi = Ja.inspectSource,
  pv = L,
  yv = D,
  _n = pv.WeakMap,
  mv = yv(_n) && /native code/.test(String(_n)),
  bv = Cr.exports,
  xv = Qo,
  Dn = bv("keys"),
  Ri = function (a) {
    return Dn[a] || (Dn[a] = xv(a));
  },
  Ii = {},
  Tv = mv,
  ru = L,
  Sv = Te,
  Ov = It,
  fa = le,
  ca = wi,
  Ev = Ri,
  $v = Ii,
  Vn = "Object already initialized",
  ei = ru.TypeError,
  wv = ru.WeakMap,
  pr,
  Ct,
  yr,
  Cv = function (a) {
    return yr(a) ? Ct(a) : pr(a, {});
  },
  Av = function (a) {
    return function (e) {
      var t;
      if (!Sv(e) || (t = Ct(e)).type !== a)
        throw ei("Incompatible receiver, " + a + " required");
      return t;
    };
  };
if (Tv || ca.state) {
  var fe = ca.state || (ca.state = new wv());
  (fe.get = fe.get),
    (fe.has = fe.has),
    (fe.set = fe.set),
    (pr = function (a, e) {
      if (fe.has(a)) throw ei(Vn);
      return (e.facade = a), fe.set(a, e), e;
    }),
    (Ct = function (a) {
      return fe.get(a) || {};
    }),
    (yr = function (a) {
      return fe.has(a);
    });
} else {
  var Qe = Ev("state");
  ($v[Qe] = !0),
    (pr = function (a, e) {
      if (fa(a, Qe)) throw ei(Vn);
      return (e.facade = a), Ov(a, Qe, e), e;
    }),
    (Ct = function (a) {
      return fa(a, Qe) ? a[Qe] : {};
    }),
    (yr = function (a) {
      return fa(a, Qe);
    });
}
var Ir = { set: pr, get: Ct, has: yr, enforce: Cv, getterFor: Av },
  Pv = k,
  Rv = D,
  Qt = le,
  ti = ce,
  Iv = Rr.CONFIGURABLE,
  Nv = Pi,
  au = Ir,
  Mv = au.enforce,
  _v = au.get,
  ur = Object.defineProperty,
  Dv =
    ti &&
    !Pv(function () {
      return ur(function () {}, "length", { value: 8 }).length !== 8;
    }),
  Vv = String(String).split("String"),
  Lv = (eu.exports = function (a, e, t) {
    String(e).slice(0, 7) === "Symbol(" &&
      (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
      t && t.getter && (e = "get " + e),
      t && t.setter && (e = "set " + e),
      (!Qt(a, "name") || (Iv && a.name !== e)) &&
        (ti ? ur(a, "name", { value: e, configurable: !0 }) : (a.name = e)),
      Dv &&
        t &&
        Qt(t, "arity") &&
        a.length !== t.arity &&
        ur(a, "length", { value: t.arity });
    try {
      t && Qt(t, "constructor") && t.constructor
        ? ti && ur(a, "prototype", { writable: !1 })
        : a.prototype && (a.prototype = void 0);
    } catch {}
    var r = Mv(a);
    return (
      Qt(r, "source") || (r.source = Vv.join(typeof e == "string" ? e : "")), a
    );
  });
Function.prototype.toString = Lv(function () {
  return (Rv(this) && _v(this).source) || Nv(this);
}, "toString");
var kv = D,
  Bv = de,
  Fv = eu.exports,
  jv = $i,
  He = function (a, e, t, r) {
    r || (r = {});
    var i = r.enumerable,
      n = r.name !== void 0 ? r.name : e;
    if ((kv(t) && Fv(t, n, r), r.global)) i ? (a[e] = t) : jv(e, t);
    else {
      try {
        r.unsafe ? a[e] && (i = !0) : delete a[e];
      } catch {}
      i
        ? (a[e] = t)
        : Bv.f(a, e, {
            value: t,
            enumerable: !1,
            configurable: !r.nonConfigurable,
            writable: !r.nonWritable,
          });
    }
    return a;
  },
  iu = {},
  Uv = Math.ceil,
  zv = Math.floor,
  Gv =
    Math.trunc ||
    function (e) {
      var t = +e;
      return (t > 0 ? zv : Uv)(t);
    },
  Hv = Gv,
  Nr = function (a) {
    var e = +a;
    return e !== e || e === 0 ? 0 : Hv(e);
  },
  Yv = Nr,
  Xv = Math.max,
  Wv = Math.min,
  nu = function (a, e) {
    var t = Yv(a);
    return t < 0 ? Xv(t + e, 0) : Wv(t, e);
  },
  qv = Nr,
  Qv = Math.min,
  vt = function (a) {
    return a > 0 ? Qv(qv(a), 9007199254740991) : 0;
  },
  Kv = vt,
  Mr = function (a) {
    return Kv(a.length);
  },
  Zv = Rt,
  Jv = nu,
  ef = Mr,
  Ln = function (a) {
    return function (e, t, r) {
      var i = Zv(e),
        n = ef(i),
        o = Jv(r, n),
        s;
      if (a && t != t) {
        for (; n > o; ) if (((s = i[o++]), s != s)) return !0;
      } else
        for (; n > o; o++) if ((a || o in i) && i[o] === t) return a || o || 0;
      return !a && -1;
    };
  },
  su = { includes: Ln(!0), indexOf: Ln(!1) },
  tf = U,
  ga = le,
  rf = Rt,
  af = su.indexOf,
  nf = Ii,
  kn = tf([].push),
  ou = function (a, e) {
    var t = rf(a),
      r = 0,
      i = [],
      n;
    for (n in t) !ga(nf, n) && ga(t, n) && kn(i, n);
    for (; e.length > r; ) ga(t, (n = e[r++])) && (~af(i, n) || kn(i, n));
    return i;
  },
  Ni = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  sf = ou,
  of = Ni,
  uf = of.concat("length", "prototype");
iu.f =
  Object.getOwnPropertyNames ||
  function (e) {
    return sf(e, uf);
  };
var uu = {};
uu.f = Object.getOwnPropertySymbols;
var lf = Ce,
  hf = U,
  vf = iu,
  ff = uu,
  cf = K,
  gf = hf([].concat),
  df =
    lf("Reflect", "ownKeys") ||
    function (e) {
      var t = vf.f(cf(e)),
        r = ff.f;
      return r ? gf(t, r(e)) : t;
    },
  Bn = le,
  pf = df,
  yf = lt,
  mf = de,
  bf = function (a, e, t) {
    for (var r = pf(e), i = mf.f, n = yf.f, o = 0; o < r.length; o++) {
      var s = r[o];
      !Bn(a, s) && !(t && Bn(t, s)) && i(a, s, n(e, s));
    }
  },
  xf = k,
  Tf = D,
  Sf = /#|\.prototype\./,
  Nt = function (a, e) {
    var t = Ef[Of(a)];
    return t == wf ? !0 : t == $f ? !1 : Tf(e) ? xf(e) : !!e;
  },
  Of = (Nt.normalize = function (a) {
    return String(a).replace(Sf, ".").toLowerCase();
  }),
  Ef = (Nt.data = {}),
  $f = (Nt.NATIVE = "N"),
  wf = (Nt.POLYFILL = "P"),
  lu = Nt,
  da = L,
  Cf = lt.f,
  Af = It,
  Pf = He,
  Rf = $i,
  If = bf,
  Nf = lu,
  ee = function (a, e) {
    var t = a.target,
      r = a.global,
      i = a.stat,
      n,
      o,
      s,
      u,
      l,
      h;
    if (
      (r
        ? (o = da)
        : i
        ? (o = da[t] || Rf(t, {}))
        : (o = (da[t] || {}).prototype),
      o)
    )
      for (s in e) {
        if (
          ((l = e[s]),
          a.dontCallGetSet ? ((h = Cf(o, s)), (u = h && h.value)) : (u = o[s]),
          (n = Nf(r ? s : t + (i ? "." : "#") + s, a.forced)),
          !n && u !== void 0)
        ) {
          if (typeof l == typeof u) continue;
          If(l, u);
        }
        (a.sham || (u && u.sham)) && Af(l, "sham", !0), Pf(o, s, l, a);
      }
  },
  Mf = ze,
  _f = L,
  Mt = Mf(_f.process) == "process",
  Df = D,
  Vf = String,
  Lf = TypeError,
  kf = function (a) {
    if (typeof a == "object" || Df(a)) return a;
    throw Lf("Can't set " + Vf(a) + " as a prototype");
  },
  Bf = U,
  Ff = K,
  jf = kf,
  hu =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var a = !1,
            e = {},
            t;
          try {
            (t = Bf(
              Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set
            )),
              t(e, []),
              (a = e instanceof Array);
          } catch {}
          return function (i, n) {
            return Ff(i), jf(n), a ? t(i, n) : (i.__proto__ = n), i;
          };
        })()
      : void 0),
  Uf = de.f,
  zf = le,
  Gf = G,
  Fn = Gf("toStringTag"),
  Mi = function (a, e, t) {
    a && !t && (a = a.prototype),
      a && !zf(a, Fn) && Uf(a, Fn, { configurable: !0, value: e });
  },
  Hf = Ce,
  Yf = de,
  Xf = G,
  Wf = ce,
  jn = Xf("species"),
  qf = function (a) {
    var e = Hf(a),
      t = Yf.f;
    Wf &&
      e &&
      !e[jn] &&
      t(e, jn, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
  },
  Qf = Er,
  Kf = TypeError,
  Zf = function (a, e) {
    if (Qf(e, a)) return a;
    throw Kf("Incorrect invocation");
  },
  Jf = G,
  ec = Jf("toStringTag"),
  vu = {};
vu[ec] = "z";
var tc = String(vu) === "[object z]",
  rc = tc,
  ac = D,
  lr = ze,
  ic = G,
  nc = ic("toStringTag"),
  sc = Object,
  oc =
    lr(
      (function () {
        return arguments;
      })()
    ) == "Arguments",
  uc = function (a, e) {
    try {
      return a[e];
    } catch {}
  },
  _i = rc
    ? lr
    : function (a) {
        var e, t, r;
        return a === void 0
          ? "Undefined"
          : a === null
          ? "Null"
          : typeof (t = uc((e = sc(a)), nc)) == "string"
          ? t
          : oc
          ? lr(e)
          : (r = lr(e)) == "Object" && ac(e.callee)
          ? "Arguments"
          : r;
      },
  lc = U,
  hc = k,
  fu = D,
  vc = _i,
  fc = Ce,
  cc = Pi,
  cu = function () {},
  gc = [],
  gu = fc("Reflect", "construct"),
  Di = /^\s*(?:class|function)\b/,
  dc = lc(Di.exec),
  pc = !Di.exec(cu),
  gt = function (e) {
    if (!fu(e)) return !1;
    try {
      return gu(cu, gc, e), !0;
    } catch {
      return !1;
    }
  },
  du = function (e) {
    if (!fu(e)) return !1;
    switch (vc(e)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return pc || !!dc(Di, cc(e));
    } catch {
      return !0;
    }
  };
du.sham = !0;
var yc =
    !gu ||
    hc(function () {
      var a;
      return (
        gt(gt.call) ||
        !gt(Object) ||
        !gt(function () {
          a = !0;
        }) ||
        a
      );
    })
      ? du
      : gt,
  mc = yc,
  bc = wr,
  xc = TypeError,
  Tc = function (a) {
    if (mc(a)) return a;
    throw xc(bc(a) + " is not a constructor");
  },
  Un = K,
  Sc = Tc,
  Oc = Ge,
  Ec = G,
  $c = Ec("species"),
  pu = function (a, e) {
    var t = Un(a).constructor,
      r;
    return t === void 0 || Oc((r = Un(t)[$c])) ? e : Sc(r);
  },
  wc = Sr,
  yu = Function.prototype,
  zn = yu.apply,
  Gn = yu.call,
  Vi =
    (typeof Reflect == "object" && Reflect.apply) ||
    (wc
      ? Gn.bind(zn)
      : function () {
          return Gn.apply(zn, arguments);
        }),
  Cc = ze,
  Ac = U,
  _t = function (a) {
    if (Cc(a) === "Function") return Ac(a);
  },
  Hn = _t,
  Pc = Ae,
  Rc = Sr,
  Ic = Hn(Hn.bind),
  Li = function (a, e) {
    return (
      Pc(a),
      e === void 0
        ? a
        : Rc
        ? Ic(a, e)
        : function () {
            return a.apply(e, arguments);
          }
    );
  },
  Nc = Ce,
  mu = Nc("document", "documentElement"),
  Mc = U,
  _c = Mc([].slice),
  Dc = TypeError,
  Vc = function (a, e) {
    if (a < e) throw Dc("Not enough arguments");
    return a;
  },
  Lc = $r,
  bu = /(?:ipad|iphone|ipod).*applewebkit/i.test(Lc),
  ae = L,
  kc = Vi,
  Bc = Li,
  Yn = D,
  Fc = le,
  jc = k,
  Xn = mu,
  Uc = _c,
  Wn = Pr,
  zc = Vc,
  Gc = bu,
  Hc = Mt,
  ri = ae.setImmediate,
  ai = ae.clearImmediate,
  Yc = ae.process,
  pa = ae.Dispatch,
  Xc = ae.Function,
  qn = ae.MessageChannel,
  Wc = ae.String,
  ya = 0,
  Et = {},
  Qn = "onreadystatechange",
  At,
  Me,
  ma,
  ba;
try {
  At = ae.location;
} catch {}
var ki = function (a) {
    if (Fc(Et, a)) {
      var e = Et[a];
      delete Et[a], e();
    }
  },
  xa = function (a) {
    return function () {
      ki(a);
    };
  },
  Kn = function (a) {
    ki(a.data);
  },
  Zn = function (a) {
    ae.postMessage(Wc(a), At.protocol + "//" + At.host);
  };
(!ri || !ai) &&
  ((ri = function (e) {
    zc(arguments.length, 1);
    var t = Yn(e) ? e : Xc(e),
      r = Uc(arguments, 1);
    return (
      (Et[++ya] = function () {
        kc(t, void 0, r);
      }),
      Me(ya),
      ya
    );
  }),
  (ai = function (e) {
    delete Et[e];
  }),
  Hc
    ? (Me = function (a) {
        Yc.nextTick(xa(a));
      })
    : pa && pa.now
    ? (Me = function (a) {
        pa.now(xa(a));
      })
    : qn && !Gc
    ? ((ma = new qn()),
      (ba = ma.port2),
      (ma.port1.onmessage = Kn),
      (Me = Bc(ba.postMessage, ba)))
    : ae.addEventListener &&
      Yn(ae.postMessage) &&
      !ae.importScripts &&
      At &&
      At.protocol !== "file:" &&
      !jc(Zn)
    ? ((Me = Zn), ae.addEventListener("message", Kn, !1))
    : Qn in Wn("script")
    ? (Me = function (a) {
        Xn.appendChild(Wn("script"))[Qn] = function () {
          Xn.removeChild(this), ki(a);
        };
      })
    : (Me = function (a) {
        setTimeout(xa(a), 0);
      }));
var xu = { set: ri, clear: ai },
  qc = $r,
  Qc = L,
  Kc = /ipad|iphone|ipod/i.test(qc) && Qc.Pebble !== void 0,
  Zc = $r,
  Jc = /web0s(?!.*chrome)/i.test(Zc),
  Fe = L,
  Jn = Li,
  eg = lt.f,
  Ta = xu.set,
  tg = bu,
  rg = Kc,
  ag = Jc,
  Sa = Mt,
  es = Fe.MutationObserver || Fe.WebKitMutationObserver,
  ts = Fe.document,
  rs = Fe.process,
  Kt = Fe.Promise,
  as = eg(Fe, "queueMicrotask"),
  Tu = as && as.value,
  dt,
  Le,
  $t,
  et,
  Oa,
  Ea,
  Zt,
  is;
Tu ||
  ((dt = function () {
    var a, e;
    for (Sa && (a = rs.domain) && a.exit(); Le; ) {
      (e = Le.fn), (Le = Le.next);
      try {
        e();
      } catch (t) {
        throw (Le ? et() : ($t = void 0), t);
      }
    }
    ($t = void 0), a && a.enter();
  }),
  !tg && !Sa && !ag && es && ts
    ? ((Oa = !0),
      (Ea = ts.createTextNode("")),
      new es(dt).observe(Ea, { characterData: !0 }),
      (et = function () {
        Ea.data = Oa = !Oa;
      }))
    : !rg && Kt && Kt.resolve
    ? ((Zt = Kt.resolve(void 0)),
      (Zt.constructor = Kt),
      (is = Jn(Zt.then, Zt)),
      (et = function () {
        is(dt);
      }))
    : Sa
    ? (et = function () {
        rs.nextTick(dt);
      })
    : ((Ta = Jn(Ta, Fe)),
      (et = function () {
        Ta(dt);
      })));
var ig =
    Tu ||
    function (a) {
      var e = { fn: a, next: void 0 };
      $t && ($t.next = e), Le || ((Le = e), et()), ($t = e);
    },
  ng = L,
  sg = function (a, e) {
    var t = ng.console;
    t && t.error && (arguments.length == 1 ? t.error(a) : t.error(a, e));
  },
  Bi = function (a) {
    try {
      return { error: !1, value: a() };
    } catch (e) {
      return { error: !0, value: e };
    }
  },
  Su = function () {
    (this.head = null), (this.tail = null);
  };
Su.prototype = {
  add: function (a) {
    var e = { item: a, next: null };
    this.head ? (this.tail.next = e) : (this.head = e), (this.tail = e);
  },
  get: function () {
    var a = this.head;
    if (a)
      return (
        (this.head = a.next), this.tail === a && (this.tail = null), a.item
      );
  },
};
var og = Su,
  ug = L,
  _r = ug.Promise,
  Ou = typeof Deno == "object" && Deno && typeof Deno.version == "object",
  lg = Ou,
  hg = Mt,
  vg = !lg && !hg && typeof window == "object" && typeof document == "object",
  fg = L,
  wt = _r,
  cg = D,
  gg = lu,
  dg = Pi,
  pg = G,
  yg = vg,
  mg = Ou,
  $a = Ei;
wt && wt.prototype;
var bg = pg("species"),
  ii = !1,
  Eu = cg(fg.PromiseRejectionEvent),
  xg = gg("Promise", function () {
    var a = dg(wt),
      e = a !== String(wt);
    if (!e && $a === 66) return !0;
    if (!$a || $a < 51 || !/native code/.test(a)) {
      var t = new wt(function (n) {
          n(1);
        }),
        r = function (n) {
          n(
            function () {},
            function () {}
          );
        },
        i = (t.constructor = {});
      if (((i[bg] = r), (ii = t.then(function () {}) instanceof r), !ii))
        return !0;
    }
    return !e && (yg || mg) && !Eu;
  }),
  Dt = { CONSTRUCTOR: xg, REJECTION_EVENT: Eu, SUBCLASSING: ii },
  ft = {},
  ns = Ae,
  Tg = TypeError,
  Sg = function (a) {
    var e, t;
    (this.promise = new a(function (r, i) {
      if (e !== void 0 || t !== void 0) throw Tg("Bad Promise constructor");
      (e = r), (t = i);
    })),
      (this.resolve = ns(e)),
      (this.reject = ns(t));
  };
ft.f = function (a) {
  return new Sg(a);
};
var Og = ee,
  mr = Mt,
  $e = L,
  ot = Y,
  ss = He,
  os = hu,
  Eg = Mi,
  $g = qf,
  wg = Ae,
  hr = D,
  Cg = Te,
  Ag = Zf,
  Pg = pu,
  $u = xu.set,
  Fi = ig,
  Rg = sg,
  Ig = Bi,
  Ng = og,
  wu = Ir,
  br = _r,
  ji = Dt,
  Cu = ft,
  Dr = "Promise",
  Au = ji.CONSTRUCTOR,
  Mg = ji.REJECTION_EVENT,
  _g = ji.SUBCLASSING,
  wa = wu.getterFor(Dr),
  Dg = wu.set,
  tt = br && br.prototype,
  ke = br,
  Jt = tt,
  Pu = $e.TypeError,
  ni = $e.document,
  Ui = $e.process,
  si = Cu.f,
  Vg = si,
  Lg = !!(ni && ni.createEvent && $e.dispatchEvent),
  Ru = "unhandledrejection",
  kg = "rejectionhandled",
  us = 0,
  Iu = 1,
  Bg = 2,
  zi = 1,
  Nu = 2,
  er,
  ls,
  Fg,
  hs,
  Mu = function (a) {
    var e;
    return Cg(a) && hr((e = a.then)) ? e : !1;
  },
  _u = function (a, e) {
    var t = e.value,
      r = e.state == Iu,
      i = r ? a.ok : a.fail,
      n = a.resolve,
      o = a.reject,
      s = a.domain,
      u,
      l,
      h;
    try {
      i
        ? (r || (e.rejection === Nu && Ug(e), (e.rejection = zi)),
          i === !0
            ? (u = t)
            : (s && s.enter(), (u = i(t)), s && (s.exit(), (h = !0))),
          u === a.promise
            ? o(Pu("Promise-chain cycle"))
            : (l = Mu(u))
            ? ot(l, u, n, o)
            : n(u))
        : o(t);
    } catch (f) {
      s && !h && s.exit(), o(f);
    }
  },
  Du = function (a, e) {
    a.notified ||
      ((a.notified = !0),
      Fi(function () {
        for (var t = a.reactions, r; (r = t.get()); ) _u(r, a);
        (a.notified = !1), e && !a.rejection && jg(a);
      }));
  },
  Vu = function (a, e, t) {
    var r, i;
    Lg
      ? ((r = ni.createEvent("Event")),
        (r.promise = e),
        (r.reason = t),
        r.initEvent(a, !1, !0),
        $e.dispatchEvent(r))
      : (r = { promise: e, reason: t }),
      !Mg && (i = $e["on" + a])
        ? i(r)
        : a === Ru && Rg("Unhandled promise rejection", t);
  },
  jg = function (a) {
    ot($u, $e, function () {
      var e = a.facade,
        t = a.value,
        r = vs(a),
        i;
      if (
        r &&
        ((i = Ig(function () {
          mr ? Ui.emit("unhandledRejection", t, e) : Vu(Ru, e, t);
        })),
        (a.rejection = mr || vs(a) ? Nu : zi),
        i.error)
      )
        throw i.value;
    });
  },
  vs = function (a) {
    return a.rejection !== zi && !a.parent;
  },
  Ug = function (a) {
    ot($u, $e, function () {
      var e = a.facade;
      mr ? Ui.emit("rejectionHandled", e) : Vu(kg, e, a.value);
    });
  },
  rt = function (a, e, t) {
    return function (r) {
      a(e, r, t);
    };
  },
  it = function (a, e, t) {
    a.done ||
      ((a.done = !0), t && (a = t), (a.value = e), (a.state = Bg), Du(a, !0));
  },
  oi = function (a, e, t) {
    if (!a.done) {
      (a.done = !0), t && (a = t);
      try {
        if (a.facade === e) throw Pu("Promise can't be resolved itself");
        var r = Mu(e);
        r
          ? Fi(function () {
              var i = { done: !1 };
              try {
                ot(r, e, rt(oi, i, a), rt(it, i, a));
              } catch (n) {
                it(i, n, a);
              }
            })
          : ((a.value = e), (a.state = Iu), Du(a, !1));
      } catch (i) {
        it({ done: !1 }, i, a);
      }
    }
  };
if (
  Au &&
  ((ke = function (e) {
    Ag(this, Jt), wg(e), ot(er, this);
    var t = wa(this);
    try {
      e(rt(oi, t), rt(it, t));
    } catch (r) {
      it(t, r);
    }
  }),
  (Jt = ke.prototype),
  (er = function (e) {
    Dg(this, {
      type: Dr,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new Ng(),
      rejection: !1,
      state: us,
      value: void 0,
    });
  }),
  (er.prototype = ss(Jt, "then", function (e, t) {
    var r = wa(this),
      i = si(Pg(this, ke));
    return (
      (r.parent = !0),
      (i.ok = hr(e) ? e : !0),
      (i.fail = hr(t) && t),
      (i.domain = mr ? Ui.domain : void 0),
      r.state == us
        ? r.reactions.add(i)
        : Fi(function () {
            _u(i, r);
          }),
      i.promise
    );
  })),
  (ls = function () {
    var a = new er(),
      e = wa(a);
    (this.promise = a), (this.resolve = rt(oi, e)), (this.reject = rt(it, e));
  }),
  (Cu.f = si =
    function (a) {
      return a === ke || a === Fg ? new ls(a) : Vg(a);
    }),
  hr(br) && tt !== Object.prototype)
) {
  (hs = tt.then),
    _g ||
      ss(
        tt,
        "then",
        function (e, t) {
          var r = this;
          return new ke(function (i, n) {
            ot(hs, r, i, n);
          }).then(e, t);
        },
        { unsafe: !0 }
      );
  try {
    delete tt.constructor;
  } catch {}
  os && os(tt, Jt);
}
Og({ global: !0, constructor: !0, wrap: !0, forced: Au }, { Promise: ke });
Eg(ke, Dr, !1);
$g(Dr);
var Vt = {},
  zg = G,
  Gg = Vt,
  Hg = zg("iterator"),
  Yg = Array.prototype,
  Xg = function (a) {
    return a !== void 0 && (Gg.Array === a || Yg[Hg] === a);
  },
  Wg = _i,
  fs = ht,
  qg = Ge,
  Qg = Vt,
  Kg = G,
  Zg = Kg("iterator"),
  Lu = function (a) {
    if (!qg(a)) return fs(a, Zg) || fs(a, "@@iterator") || Qg[Wg(a)];
  },
  Jg = Y,
  ed = Ae,
  td = K,
  rd = wr,
  ad = Lu,
  id = TypeError,
  nd = function (a, e) {
    var t = arguments.length < 2 ? ad(a) : e;
    if (ed(t)) return td(Jg(t, a));
    throw id(rd(a) + " is not iterable");
  },
  sd = Y,
  cs = K,
  od = ht,
  ud = function (a, e, t) {
    var r, i;
    cs(a);
    try {
      if (((r = od(a, "return")), !r)) {
        if (e === "throw") throw t;
        return t;
      }
      r = sd(r, a);
    } catch (n) {
      (i = !0), (r = n);
    }
    if (e === "throw") throw t;
    if (i) throw r;
    return cs(r), t;
  },
  ld = Li,
  hd = Y,
  vd = K,
  fd = wr,
  cd = Xg,
  gd = Mr,
  gs = Er,
  dd = nd,
  pd = Lu,
  ds = ud,
  yd = TypeError,
  vr = function (a, e) {
    (this.stopped = a), (this.result = e);
  },
  ps = vr.prototype,
  ku = function (a, e, t) {
    var r = t && t.that,
      i = !!(t && t.AS_ENTRIES),
      n = !!(t && t.IS_RECORD),
      o = !!(t && t.IS_ITERATOR),
      s = !!(t && t.INTERRUPTED),
      u = ld(e, r),
      l,
      h,
      f,
      c,
      v,
      d,
      g,
      p = function (x) {
        return l && ds(l, "normal", x), new vr(!0, x);
      },
      y = function (x) {
        return i
          ? (vd(x), s ? u(x[0], x[1], p) : u(x[0], x[1]))
          : s
          ? u(x, p)
          : u(x);
      };
    if (n) l = a.iterator;
    else if (o) l = a;
    else {
      if (((h = pd(a)), !h)) throw yd(fd(a) + " is not iterable");
      if (cd(h)) {
        for (f = 0, c = gd(a); c > f; f++)
          if (((v = y(a[f])), v && gs(ps, v))) return v;
        return new vr(!1);
      }
      l = dd(a, h);
    }
    for (d = n ? a.next : l.next; !(g = hd(d, l)).done; ) {
      try {
        v = y(g.value);
      } catch (x) {
        ds(l, "throw", x);
      }
      if (typeof v == "object" && v && gs(ps, v)) return v;
    }
    return new vr(!1);
  },
  md = G,
  Bu = md("iterator"),
  Fu = !1;
try {
  var bd = 0,
    ys = {
      next: function () {
        return { done: !!bd++ };
      },
      return: function () {
        Fu = !0;
      },
    };
  (ys[Bu] = function () {
    return this;
  }),
    Array.from(ys, function () {
      throw 2;
    });
} catch {}
var xd = function (a, e) {
    if (!e && !Fu) return !1;
    var t = !1;
    try {
      var r = {};
      (r[Bu] = function () {
        return {
          next: function () {
            return { done: (t = !0) };
          },
        };
      }),
        a(r);
    } catch {}
    return t;
  },
  Td = _r,
  Sd = xd,
  Od = Dt.CONSTRUCTOR,
  ju =
    Od ||
    !Sd(function (a) {
      Td.all(a).then(void 0, function () {});
    }),
  Ed = ee,
  $d = Y,
  wd = Ae,
  Cd = ft,
  Ad = Bi,
  Pd = ku,
  Rd = ju;
Ed(
  { target: "Promise", stat: !0, forced: Rd },
  {
    all: function (e) {
      var t = this,
        r = Cd.f(t),
        i = r.resolve,
        n = r.reject,
        o = Ad(function () {
          var s = wd(t.resolve),
            u = [],
            l = 0,
            h = 1;
          Pd(e, function (f) {
            var c = l++,
              v = !1;
            h++,
              $d(s, t, f).then(function (d) {
                v || ((v = !0), (u[c] = d), --h || i(u));
              }, n);
          }),
            --h || i(u);
        });
      return o.error && n(o.value), r.promise;
    },
  }
);
var Id = ee,
  Nd = Dt.CONSTRUCTOR,
  ui = _r,
  Md = Ce,
  _d = D,
  Dd = He,
  ms = ui && ui.prototype;
Id(
  { target: "Promise", proto: !0, forced: Nd, real: !0 },
  {
    catch: function (a) {
      return this.then(void 0, a);
    },
  }
);
if (_d(ui)) {
  var bs = Md("Promise").prototype.catch;
  ms.catch !== bs && Dd(ms, "catch", bs, { unsafe: !0 });
}
var Vd = ee,
  Ld = Y,
  kd = Ae,
  Bd = ft,
  Fd = Bi,
  jd = ku,
  Ud = ju;
Vd(
  { target: "Promise", stat: !0, forced: Ud },
  {
    race: function (e) {
      var t = this,
        r = Bd.f(t),
        i = r.reject,
        n = Fd(function () {
          var o = kd(t.resolve);
          jd(e, function (s) {
            Ld(o, t, s).then(r.resolve, i);
          });
        });
      return n.error && i(n.value), r.promise;
    },
  }
);
var zd = ee,
  Gd = Y,
  Hd = ft,
  Yd = Dt.CONSTRUCTOR;
zd(
  { target: "Promise", stat: !0, forced: Yd },
  {
    reject: function (e) {
      var t = Hd.f(this);
      return Gd(t.reject, void 0, e), t.promise;
    },
  }
);
var Xd = K,
  Wd = Te,
  qd = ft,
  Qd = function (a, e) {
    if ((Xd(a), Wd(e) && e.constructor === a)) return e;
    var t = qd.f(a),
      r = t.resolve;
    return r(e), t.promise;
  },
  Kd = ee,
  Zd = Ce,
  Jd = Dt.CONSTRUCTOR,
  ep = Qd;
Zd("Promise");
Kd(
  { target: "Promise", stat: !0, forced: Jd },
  {
    resolve: function (e) {
      return ep(this, e);
    },
  }
);
function xs(a, e, t, r, i, n, o) {
  try {
    var s = a[n](o),
      u = s.value;
  } catch (l) {
    t(l);
    return;
  }
  s.done ? e(u) : Promise.resolve(u).then(r, i);
}
function xe(a) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (r, i) {
      var n = a.apply(e, t);
      function o(u) {
        xs(n, r, i, o, s, "next", u);
      }
      function s(u) {
        xs(n, r, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
var tp = _i,
  rp = String,
  pe = function (a) {
    if (tp(a) === "Symbol")
      throw TypeError("Cannot convert a Symbol value to a string");
    return rp(a);
  },
  ap = K,
  Uu = function () {
    var a = ap(this),
      e = "";
    return (
      a.hasIndices && (e += "d"),
      a.global && (e += "g"),
      a.ignoreCase && (e += "i"),
      a.multiline && (e += "m"),
      a.dotAll && (e += "s"),
      a.unicode && (e += "u"),
      a.unicodeSets && (e += "v"),
      a.sticky && (e += "y"),
      e
    );
  },
  Gi = k,
  ip = L,
  Hi = ip.RegExp,
  Yi = Gi(function () {
    var a = Hi("a", "y");
    return (a.lastIndex = 2), a.exec("abcd") != null;
  }),
  np =
    Yi ||
    Gi(function () {
      return !Hi("a", "y").sticky;
    }),
  sp =
    Yi ||
    Gi(function () {
      var a = Hi("^r", "gy");
      return (a.lastIndex = 2), a.exec("str") != null;
    }),
  zu = { BROKEN_CARET: sp, MISSED_STICKY: np, UNSUPPORTED_Y: Yi },
  Gu = {},
  op = ou,
  up = Ni,
  lp =
    Object.keys ||
    function (e) {
      return op(e, up);
    },
  hp = ce,
  vp = Jo,
  fp = de,
  cp = K,
  gp = Rt,
  dp = lp;
Gu.f =
  hp && !vp
    ? Object.defineProperties
    : function (e, t) {
        cp(e);
        for (var r = gp(t), i = dp(t), n = i.length, o = 0, s; n > o; )
          fp.f(e, (s = i[o++]), r[s]);
        return e;
      };
var pp = K,
  yp = Gu,
  Ts = Ni,
  mp = Ii,
  bp = mu,
  xp = Pr,
  Tp = Ri,
  Ss = ">",
  Os = "<",
  li = "prototype",
  hi = "script",
  Hu = Tp("IE_PROTO"),
  Ca = function () {},
  Yu = function (a) {
    return Os + hi + Ss + a + Os + "/" + hi + Ss;
  },
  Es = function (a) {
    a.write(Yu("")), a.close();
    var e = a.parentWindow.Object;
    return (a = null), e;
  },
  Sp = function () {
    var a = xp("iframe"),
      e = "java" + hi + ":",
      t;
    return (
      (a.style.display = "none"),
      bp.appendChild(a),
      (a.src = String(e)),
      (t = a.contentWindow.document),
      t.open(),
      t.write(Yu("document.F=Object")),
      t.close(),
      t.F
    );
  },
  tr,
  fr = function () {
    try {
      tr = new ActiveXObject("htmlfile");
    } catch {}
    fr =
      typeof document != "undefined"
        ? document.domain && tr
          ? Es(tr)
          : Sp()
        : Es(tr);
    for (var a = Ts.length; a--; ) delete fr[li][Ts[a]];
    return fr();
  };
mp[Hu] = !0;
var Xi =
    Object.create ||
    function (e, t) {
      var r;
      return (
        e !== null
          ? ((Ca[li] = pp(e)), (r = new Ca()), (Ca[li] = null), (r[Hu] = e))
          : (r = fr()),
        t === void 0 ? r : yp.f(r, t)
      );
    },
  Op = k,
  Ep = L,
  $p = Ep.RegExp,
  wp = Op(function () {
    var a = $p(".", "s");
    return !(
      a.dotAll &&
      a.exec(`
`) &&
      a.flags === "s"
    );
  }),
  Cp = k,
  Ap = L,
  Pp = Ap.RegExp,
  Rp = Cp(function () {
    var a = Pp("(?<a>b)", "g");
    return a.exec("b").groups.a !== "b" || "b".replace(a, "$<a>c") !== "bc";
  }),
  at = Y,
  Vr = U,
  Ip = pe,
  Np = Uu,
  Mp = zu,
  _p = Cr.exports,
  Dp = Xi,
  Vp = Ir.get,
  Lp = wp,
  kp = Rp,
  Bp = _p("native-string-replace", String.prototype.replace),
  xr = RegExp.prototype.exec,
  vi = xr,
  Fp = Vr("".charAt),
  jp = Vr("".indexOf),
  Up = Vr("".replace),
  Aa = Vr("".slice),
  fi = (function () {
    var a = /a/,
      e = /b*/g;
    return (
      at(xr, a, "a"), at(xr, e, "a"), a.lastIndex !== 0 || e.lastIndex !== 0
    );
  })(),
  Xu = Mp.BROKEN_CARET,
  ci = /()??/.exec("")[1] !== void 0,
  zp = fi || ci || Xu || Lp || kp;
zp &&
  (vi = function (e) {
    var t = this,
      r = Vp(t),
      i = Ip(e),
      n = r.raw,
      o,
      s,
      u,
      l,
      h,
      f,
      c;
    if (n)
      return (
        (n.lastIndex = t.lastIndex),
        (o = at(vi, n, i)),
        (t.lastIndex = n.lastIndex),
        o
      );
    var v = r.groups,
      d = Xu && t.sticky,
      g = at(Np, t),
      p = t.source,
      y = 0,
      x = i;
    if (
      (d &&
        ((g = Up(g, "y", "")),
        jp(g, "g") === -1 && (g += "g"),
        (x = Aa(i, t.lastIndex)),
        t.lastIndex > 0 &&
          (!t.multiline ||
            (t.multiline &&
              Fp(i, t.lastIndex - 1) !==
                `
`)) &&
          ((p = "(?: " + p + ")"), (x = " " + x), y++),
        (s = new RegExp("^(?:" + p + ")", g))),
      ci && (s = new RegExp("^" + p + "$(?!\\s)", g)),
      fi && (u = t.lastIndex),
      (l = at(xr, d ? s : t, x)),
      d
        ? l
          ? ((l.input = Aa(l.input, y)),
            (l[0] = Aa(l[0], y)),
            (l.index = t.lastIndex),
            (t.lastIndex += l[0].length))
          : (t.lastIndex = 0)
        : fi && l && (t.lastIndex = t.global ? l.index + l[0].length : u),
      ci &&
        l &&
        l.length > 1 &&
        at(Bp, l[0], s, function () {
          for (h = 1; h < arguments.length - 2; h++)
            arguments[h] === void 0 && (l[h] = void 0);
        }),
      l && v)
    )
      for (l.groups = f = Dp(null), h = 0; h < v.length; h++)
        (c = v[h]), (f[c[0]] = l[c[1]]);
    return l;
  });
var Lr = vi,
  Gp = ee,
  $s = Lr;
Gp({ target: "RegExp", proto: !0, forced: /./.exec !== $s }, { exec: $s });
var ws = _t,
  Cs = He,
  Hp = Lr,
  As = k,
  Wu = G,
  Yp = It,
  Xp = Wu("species"),
  Pa = RegExp.prototype,
  Wi = function (a, e, t, r) {
    var i = Wu(a),
      n = !As(function () {
        var l = {};
        return (
          (l[i] = function () {
            return 7;
          }),
          ""[a](l) != 7
        );
      }),
      o =
        n &&
        !As(function () {
          var l = !1,
            h = /a/;
          return (
            a === "split" &&
              ((h = {}),
              (h.constructor = {}),
              (h.constructor[Xp] = function () {
                return h;
              }),
              (h.flags = ""),
              (h[i] = /./[i])),
            (h.exec = function () {
              return (l = !0), null;
            }),
            h[i](""),
            !l
          );
        });
    if (!n || !o || t) {
      var s = ws(/./[i]),
        u = e(i, ""[a], function (l, h, f, c, v) {
          var d = ws(l),
            g = h.exec;
          return g === Hp || g === Pa.exec
            ? n && !v
              ? { done: !0, value: s(h, f, c) }
              : { done: !0, value: d(f, h, c) }
            : { done: !1 };
        });
      Cs(String.prototype, a, u[0]), Cs(Pa, i, u[1]);
    }
    r && Yp(Pa[i], "sham", !0);
  },
  qi = U,
  Wp = Nr,
  qp = pe,
  Qp = ge,
  Kp = qi("".charAt),
  Ps = qi("".charCodeAt),
  Zp = qi("".slice),
  Rs = function (a) {
    return function (e, t) {
      var r = qp(Qp(e)),
        i = Wp(t),
        n = r.length,
        o,
        s;
      return i < 0 || i >= n
        ? a
          ? ""
          : void 0
        : ((o = Ps(r, i)),
          o < 55296 ||
          o > 56319 ||
          i + 1 === n ||
          (s = Ps(r, i + 1)) < 56320 ||
          s > 57343
            ? a
              ? Kp(r, i)
              : o
            : a
            ? Zp(r, i, i + 2)
            : ((o - 55296) << 10) + (s - 56320) + 65536);
    };
  },
  Jp = { codeAt: Rs(!1), charAt: Rs(!0) },
  ey = Jp.charAt,
  Qi = function (a, e, t) {
    return e + (t ? ey(a, e).length : 1);
  },
  Is = Y,
  ty = K,
  ry = D,
  ay = ze,
  iy = Lr,
  ny = TypeError,
  Ki = function (a, e) {
    var t = a.exec;
    if (ry(t)) {
      var r = Is(t, a, e);
      return r !== null && ty(r), r;
    }
    if (ay(a) === "RegExp") return Is(iy, a, e);
    throw ny("RegExp#exec called on incompatible receiver");
  },
  sy = Y,
  oy = Wi,
  uy = K,
  ly = Ge,
  hy = vt,
  Ra = pe,
  vy = ge,
  fy = ht,
  cy = Qi,
  Ns = Ki;
oy("match", function (a, e, t) {
  return [
    function (i) {
      var n = vy(this),
        o = ly(i) ? void 0 : fy(i, a);
      return o ? sy(o, i, n) : new RegExp(i)[a](Ra(n));
    },
    function (r) {
      var i = uy(this),
        n = Ra(r),
        o = t(e, i, n);
      if (o.done) return o.value;
      if (!i.global) return Ns(i, n);
      var s = i.unicode;
      i.lastIndex = 0;
      for (var u = [], l = 0, h; (h = Ns(i, n)) !== null; ) {
        var f = Ra(h[0]);
        (u[l] = f), f === "" && (i.lastIndex = cy(n, hy(i.lastIndex), s)), l++;
      }
      return l === 0 ? null : u;
    },
  ];
});
var Zi = U,
  gy = Ar,
  dy = Math.floor,
  Ia = Zi("".charAt),
  py = Zi("".replace),
  Na = Zi("".slice),
  yy = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
  my = /\$([$&'`]|\d{1,2})/g,
  by = function (a, e, t, r, i, n) {
    var o = t + a.length,
      s = r.length,
      u = my;
    return (
      i !== void 0 && ((i = gy(i)), (u = yy)),
      py(n, u, function (l, h) {
        var f;
        switch (Ia(h, 0)) {
          case "$":
            return "$";
          case "&":
            return a;
          case "`":
            return Na(e, 0, t);
          case "'":
            return Na(e, o);
          case "<":
            f = i[Na(h, 1, -1)];
            break;
          default:
            var c = +h;
            if (c === 0) return l;
            if (c > s) {
              var v = dy(c / 10);
              return v === 0
                ? l
                : v <= s
                ? r[v - 1] === void 0
                  ? Ia(h, 1)
                  : r[v - 1] + Ia(h, 1)
                : l;
            }
            f = r[c - 1];
        }
        return f === void 0 ? "" : f;
      })
    );
  },
  xy = Vi,
  Ms = Y,
  kr = U,
  Ty = Wi,
  Sy = k,
  Oy = K,
  Ey = D,
  $y = Ge,
  wy = Nr,
  Cy = vt,
  Ke = pe,
  Ay = ge,
  Py = Qi,
  Ry = ht,
  Iy = by,
  Ny = Ki,
  My = G,
  gi = My("replace"),
  _y = Math.max,
  Dy = Math.min,
  Vy = kr([].concat),
  Ma = kr([].push),
  _s = kr("".indexOf),
  Ds = kr("".slice),
  Ly = function (a) {
    return a === void 0 ? a : String(a);
  },
  ky = (function () {
    return "a".replace(/./, "$0") === "$0";
  })(),
  Vs = (function () {
    return /./[gi] ? /./[gi]("a", "$0") === "" : !1;
  })(),
  By = !Sy(function () {
    var a = /./;
    return (
      (a.exec = function () {
        var e = [];
        return (e.groups = { a: "7" }), e;
      }),
      "".replace(a, "$<a>") !== "7"
    );
  });
Ty(
  "replace",
  function (a, e, t) {
    var r = Vs ? "$" : "$0";
    return [
      function (n, o) {
        var s = Ay(this),
          u = $y(n) ? void 0 : Ry(n, gi);
        return u ? Ms(u, n, s, o) : Ms(e, Ke(s), n, o);
      },
      function (i, n) {
        var o = Oy(this),
          s = Ke(i);
        if (typeof n == "string" && _s(n, r) === -1 && _s(n, "$<") === -1) {
          var u = t(e, o, s, n);
          if (u.done) return u.value;
        }
        var l = Ey(n);
        l || (n = Ke(n));
        var h = o.global;
        if (h) {
          var f = o.unicode;
          o.lastIndex = 0;
        }
        for (var c = []; ; ) {
          var v = Ny(o, s);
          if (v === null || (Ma(c, v), !h)) break;
          var d = Ke(v[0]);
          d === "" && (o.lastIndex = Py(s, Cy(o.lastIndex), f));
        }
        for (var g = "", p = 0, y = 0; y < c.length; y++) {
          v = c[y];
          for (
            var x = Ke(v[0]),
              b = _y(Dy(wy(v.index), s.length), 0),
              T = [],
              $ = 1;
            $ < v.length;
            $++
          )
            Ma(T, Ly(v[$]));
          var E = v.groups;
          if (l) {
            var S = Vy([x], T, b, s);
            E !== void 0 && Ma(S, E);
            var C = Ke(xy(n, void 0, S));
          } else C = Iy(x, s, b, T, E, n);
          b >= p && ((g += Ds(s, p, b) + C), (p = b + x.length));
        }
        return g + Ds(s, p);
      },
    ];
  },
  !By || !ky || Vs
);
var Fy = Te,
  jy = ze,
  Uy = G,
  zy = Uy("match"),
  qu = function (a) {
    var e;
    return Fy(a) && ((e = a[zy]) !== void 0 ? !!e : jy(a) == "RegExp");
  },
  Gy = qu,
  Hy = TypeError,
  Ji = function (a) {
    if (Gy(a)) throw Hy("The method doesn't accept regular expressions");
    return a;
  },
  Yy = G,
  Xy = Yy("match"),
  en = function (a) {
    var e = /./;
    try {
      "/./"[a](e);
    } catch {
      try {
        return (e[Xy] = !1), "/./"[a](e);
      } catch {}
    }
    return !1;
  },
  Wy = ee,
  Qu = _t,
  qy = lt.f,
  Qy = vt,
  Ls = pe,
  Ky = Ji,
  Zy = ge,
  Jy = en,
  ks = Qu("".startsWith),
  em = Qu("".slice),
  tm = Math.min,
  Ku = Jy("startsWith"),
  rm =
    !Ku &&
    !!(function () {
      var a = qy(String.prototype, "startsWith");
      return a && !a.writable;
    })();
Wy(
  { target: "String", proto: !0, forced: !rm && !Ku },
  {
    startsWith: function (e) {
      var t = Ls(Zy(this));
      Ky(e);
      var r = Qy(tm(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        i = Ls(e);
      return ks ? ks(t, i, r) : em(t, r, r + i.length) === i;
    },
  }
);
var am = G,
  im = Xi,
  nm = de.f,
  di = am("unscopables"),
  pi = Array.prototype;
pi[di] == null && nm(pi, di, { configurable: !0, value: im(null) });
var sm = function (a) {
    pi[di][a] = !0;
  },
  om = k,
  um = !om(function () {
    function a() {}
    return (
      (a.prototype.constructor = null),
      Object.getPrototypeOf(new a()) !== a.prototype
    );
  }),
  lm = le,
  hm = D,
  vm = Ar,
  fm = Ri,
  cm = um,
  Bs = fm("IE_PROTO"),
  yi = Object,
  gm = yi.prototype,
  Zu = cm
    ? yi.getPrototypeOf
    : function (a) {
        var e = vm(a);
        if (lm(e, Bs)) return e[Bs];
        var t = e.constructor;
        return hm(t) && e instanceof t
          ? t.prototype
          : e instanceof yi
          ? gm
          : null;
      },
  dm = k,
  pm = D,
  ym = Te,
  Fs = Zu,
  mm = He,
  bm = G,
  mi = bm("iterator"),
  Ju = !1,
  je,
  _a,
  Da;
[].keys &&
  ((Da = [].keys()),
  "next" in Da
    ? ((_a = Fs(Fs(Da))), _a !== Object.prototype && (je = _a))
    : (Ju = !0));
var xm =
  !ym(je) ||
  dm(function () {
    var a = {};
    return je[mi].call(a) !== a;
  });
xm && (je = {});
pm(je[mi]) ||
  mm(je, mi, function () {
    return this;
  });
var el = { IteratorPrototype: je, BUGGY_SAFARI_ITERATORS: Ju },
  Tm = el.IteratorPrototype,
  Sm = Xi,
  Om = Or,
  Em = Mi,
  $m = Vt,
  wm = function () {
    return this;
  },
  Cm = function (a, e, t, r) {
    var i = e + " Iterator";
    return (
      (a.prototype = Sm(Tm, { next: Om(+!r, t) })),
      Em(a, i, !1),
      ($m[i] = wm),
      a
    );
  },
  Am = ee,
  Pm = Y,
  tl = Rr,
  Rm = D,
  Im = Cm,
  js = Zu,
  Us = hu,
  Nm = Mi,
  Mm = It,
  Va = He,
  _m = G,
  Dm = Vt,
  rl = el,
  Vm = tl.PROPER,
  Lm = tl.CONFIGURABLE,
  zs = rl.IteratorPrototype,
  rr = rl.BUGGY_SAFARI_ITERATORS,
  pt = _m("iterator"),
  Gs = "keys",
  yt = "values",
  Hs = "entries",
  km = function () {
    return this;
  },
  Bm = function (a, e, t, r, i, n, o) {
    Im(t, e, r);
    var s = function (y) {
        if (y === i && c) return c;
        if (!rr && y in h) return h[y];
        switch (y) {
          case Gs:
            return function () {
              return new t(this, y);
            };
          case yt:
            return function () {
              return new t(this, y);
            };
          case Hs:
            return function () {
              return new t(this, y);
            };
        }
        return function () {
          return new t(this);
        };
      },
      u = e + " Iterator",
      l = !1,
      h = a.prototype,
      f = h[pt] || h["@@iterator"] || (i && h[i]),
      c = (!rr && f) || s(i),
      v = (e == "Array" && h.entries) || f,
      d,
      g,
      p;
    if (
      (v &&
        ((d = js(v.call(new a()))),
        d !== Object.prototype &&
          d.next &&
          (js(d) !== zs && (Us ? Us(d, zs) : Rm(d[pt]) || Va(d, pt, km)),
          Nm(d, u, !0))),
      Vm &&
        i == yt &&
        f &&
        f.name !== yt &&
        (Lm
          ? Mm(h, "name", yt)
          : ((l = !0),
            (c = function () {
              return Pm(f, this);
            }))),
      i)
    )
      if (((g = { values: s(yt), keys: n ? c : s(Gs), entries: s(Hs) }), o))
        for (p in g) (rr || l || !(p in h)) && Va(h, p, g[p]);
      else Am({ target: e, proto: !0, forced: rr || l }, g);
    return h[pt] !== c && Va(h, pt, c, { name: i }), (Dm[e] = c), g;
  },
  Fm = function (a, e) {
    return { value: a, done: e };
  },
  jm = Rt,
  tn = sm,
  Ys = Vt,
  al = Ir,
  Um = de.f,
  zm = Bm,
  ar = Fm,
  Gm = ce,
  il = "Array Iterator",
  Hm = al.set,
  Ym = al.getterFor(il),
  Xm = zm(
    Array,
    "Array",
    function (a, e) {
      Hm(this, { type: il, target: jm(a), index: 0, kind: e });
    },
    function () {
      var a = Ym(this),
        e = a.target,
        t = a.kind,
        r = a.index++;
      return !e || r >= e.length
        ? ((a.target = void 0), ar(void 0, !0))
        : t == "keys"
        ? ar(r, !1)
        : t == "values"
        ? ar(e[r], !1)
        : ar([r, e[r]], !1);
    },
    "values"
  ),
  Xs = (Ys.Arguments = Ys.Array);
tn("keys");
tn("values");
tn("entries");
if (Gm && Xs.name !== "values")
  try {
    Um(Xs, "name", { value: "values" });
  } catch {}
var Wm = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0,
  },
  qm = Pr,
  La = qm("span").classList,
  Ws = La && La.constructor && La.constructor.prototype,
  Qm = Ws === Object.prototype ? void 0 : Ws,
  qs = L,
  nl = Wm,
  Km = Qm,
  Tt = Xm,
  ka = It,
  sl = G,
  Ba = sl("iterator"),
  Qs = sl("toStringTag"),
  Fa = Tt.values,
  ol = function (a, e) {
    if (a) {
      if (a[Ba] !== Fa)
        try {
          ka(a, Ba, Fa);
        } catch {
          a[Ba] = Fa;
        }
      if ((a[Qs] || ka(a, Qs, e), nl[e])) {
        for (var t in Tt)
          if (a[t] !== Tt[t])
            try {
              ka(a, t, Tt[t]);
            } catch {
              a[t] = Tt[t];
            }
      }
    }
  };
for (var ja in nl) ol(qs[ja] && qs[ja].prototype, ja);
ol(Km, "DOMTokenList");
function Zm(a, e) {
  if (Wa(a) !== "object" || a === null) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var r = t.call(a, e || "default");
    if (Wa(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function Jm(a) {
  var e = Zm(a, "string");
  return Wa(e) === "symbol" ? e : String(e);
}
function rn(a, e, t) {
  return (
    (e = Jm(e)),
    e in a
      ? Object.defineProperty(a, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (a[e] = t),
    a
  );
}
var e0 = Ae,
  t0 = Ar,
  r0 = Uo,
  a0 = Mr,
  i0 = TypeError,
  Ks = function (a) {
    return function (e, t, r, i) {
      e0(t);
      var n = t0(e),
        o = r0(n),
        s = a0(n),
        u = a ? s - 1 : 0,
        l = a ? -1 : 1;
      if (r < 2)
        for (;;) {
          if (u in o) {
            (i = o[u]), (u += l);
            break;
          }
          if (((u += l), a ? u < 0 : s <= u))
            throw i0("Reduce of empty array with no initial value");
        }
      for (; a ? u >= 0 : s > u; u += l) u in o && (i = t(i, o[u], u, n));
      return i;
    };
  },
  n0 = { left: Ks(!1), right: Ks(!0) },
  s0 = k,
  ul = function (a, e) {
    var t = [][a];
    return (
      !!t &&
      s0(function () {
        t.call(
          null,
          e ||
            function () {
              return 1;
            },
          1
        );
      })
    );
  },
  o0 = ee,
  u0 = n0.left,
  l0 = ul,
  Zs = Ei,
  h0 = Mt,
  v0 = l0("reduce"),
  f0 = !h0 && Zs > 79 && Zs < 83;
o0(
  { target: "Array", proto: !0, forced: !v0 || f0 },
  {
    reduce: function (e) {
      var t = arguments.length;
      return u0(this, e, t, t > 1 ? arguments[1] : void 0);
    },
  }
);
var c0 = ee,
  ll = _t,
  g0 = lt.f,
  d0 = vt,
  Js = pe,
  p0 = Ji,
  y0 = ge,
  m0 = en,
  eo = ll("".endsWith),
  b0 = ll("".slice),
  x0 = Math.min,
  hl = m0("endsWith"),
  T0 =
    !hl &&
    !!(function () {
      var a = g0(String.prototype, "endsWith");
      return a && !a.writable;
    })();
c0(
  { target: "String", proto: !0, forced: !T0 && !hl },
  {
    endsWith: function (e) {
      var t = Js(y0(this));
      p0(e);
      var r = arguments.length > 1 ? arguments[1] : void 0,
        i = t.length,
        n = r === void 0 ? i : x0(d0(r), i),
        o = Js(e);
      return eo ? eo(t, o, n) : b0(t, n - o.length, n) === o;
    },
  }
);
var S0 = Ci,
  O0 = de,
  E0 = Or,
  $0 = function (a, e, t) {
    var r = S0(e);
    r in a ? O0.f(a, r, E0(0, t)) : (a[r] = t);
  },
  to = nu,
  w0 = Mr,
  C0 = $0,
  A0 = Array,
  P0 = Math.max,
  R0 = function (a, e, t) {
    for (
      var r = w0(a),
        i = to(e, r),
        n = to(t === void 0 ? r : t, r),
        o = A0(P0(n - i, 0)),
        s = 0;
      i < n;
      i++, s++
    )
      C0(o, s, a[i]);
    return (o.length = s), o;
  },
  I0 = Vi,
  mt = Y,
  an = U,
  N0 = Wi,
  M0 = K,
  _0 = Ge,
  D0 = qu,
  ro = ge,
  V0 = pu,
  L0 = Qi,
  k0 = vt,
  Ua = pe,
  B0 = ht,
  ao = R0,
  io = Ki,
  F0 = Lr,
  j0 = zu,
  U0 = k,
  Ze = j0.UNSUPPORTED_Y,
  no = 4294967295,
  z0 = Math.min,
  vl = [].push,
  G0 = an(/./.exec),
  Je = an(vl),
  bt = an("".slice),
  H0 = !U0(function () {
    var a = /(?:)/,
      e = a.exec;
    a.exec = function () {
      return e.apply(this, arguments);
    };
    var t = "ab".split(a);
    return t.length !== 2 || t[0] !== "a" || t[1] !== "b";
  });
N0(
  "split",
  function (a, e, t) {
    var r;
    return (
      "abbc".split(/(b)*/)[1] == "c" ||
      "test".split(/(?:)/, -1).length != 4 ||
      "ab".split(/(?:ab)*/).length != 2 ||
      ".".split(/(.?)(.?)/).length != 4 ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? (r = function (i, n) {
            var o = Ua(ro(this)),
              s = n === void 0 ? no : n >>> 0;
            if (s === 0) return [];
            if (i === void 0) return [o];
            if (!D0(i)) return mt(e, o, i, s);
            for (
              var u = [],
                l =
                  (i.ignoreCase ? "i" : "") +
                  (i.multiline ? "m" : "") +
                  (i.unicode ? "u" : "") +
                  (i.sticky ? "y" : ""),
                h = 0,
                f = new RegExp(i.source, l + "g"),
                c,
                v,
                d;
              (c = mt(F0, f, o)) &&
              ((v = f.lastIndex),
              !(
                v > h &&
                (Je(u, bt(o, h, c.index)),
                c.length > 1 && c.index < o.length && I0(vl, u, ao(c, 1)),
                (d = c[0].length),
                (h = v),
                u.length >= s)
              ));

            )
              f.lastIndex === c.index && f.lastIndex++;
            return (
              h === o.length ? (d || !G0(f, "")) && Je(u, "") : Je(u, bt(o, h)),
              u.length > s ? ao(u, 0, s) : u
            );
          })
        : "0".split(void 0, 0).length
        ? (r = function (i, n) {
            return i === void 0 && n === 0 ? [] : mt(e, this, i, n);
          })
        : (r = e),
      [
        function (n, o) {
          var s = ro(this),
            u = _0(n) ? void 0 : B0(n, a);
          return u ? mt(u, n, s, o) : mt(r, Ua(s), n, o);
        },
        function (i, n) {
          var o = M0(this),
            s = Ua(i),
            u = t(r, o, s, n, r !== e);
          if (u.done) return u.value;
          var l = V0(o, RegExp),
            h = o.unicode,
            f =
              (o.ignoreCase ? "i" : "") +
              (o.multiline ? "m" : "") +
              (o.unicode ? "u" : "") +
              (Ze ? "g" : "y"),
            c = new l(Ze ? "^(?:" + o.source + ")" : o, f),
            v = n === void 0 ? no : n >>> 0;
          if (v === 0) return [];
          if (s.length === 0) return io(c, s) === null ? [s] : [];
          for (var d = 0, g = 0, p = []; g < s.length; ) {
            c.lastIndex = Ze ? 0 : g;
            var y = io(c, Ze ? bt(s, g) : s),
              x;
            if (
              y === null ||
              (x = z0(k0(c.lastIndex + (Ze ? g : 0)), s.length)) === d
            )
              g = L0(s, g, h);
            else {
              if ((Je(p, bt(s, d, g)), p.length === v)) return p;
              for (var b = 1; b <= y.length - 1; b++)
                if ((Je(p, y[b]), p.length === v)) return p;
              g = d = x;
            }
          }
          return Je(p, bt(s, d)), p;
        },
      ]
    );
  },
  !H0,
  Ze
);
var Br = { exports: {} },
  St = { exports: {} };
(function () {
  var a, e, t, r, i, n;
  typeof performance != "undefined" && performance !== null && performance.now
    ? (St.exports = function () {
        return performance.now();
      })
    : typeof process != "undefined" && process !== null && process.hrtime
    ? ((St.exports = function () {
        return (a() - i) / 1e6;
      }),
      (e = process.hrtime),
      (a = function () {
        var o;
        return (o = e()), o[0] * 1e9 + o[1];
      }),
      (r = a()),
      (n = process.uptime() * 1e9),
      (i = r - n))
    : Date.now
    ? ((St.exports = function () {
        return Date.now() - t;
      }),
      (t = Date.now()))
    : ((St.exports = function () {
        return new Date().getTime() - t;
      }),
      (t = new Date().getTime()));
}.call(gr));
var Y0 = St.exports,
  be = typeof window == "undefined" ? gr : window,
  ir = ["moz", "webkit"],
  nt = "AnimationFrame",
  ut = be["request" + nt],
  Pt = be["cancel" + nt] || be["cancelRequest" + nt];
for (var xt = 0; !ut && xt < ir.length; xt++)
  (ut = be[ir[xt] + "Request" + nt]),
    (Pt = be[ir[xt] + "Cancel" + nt] || be[ir[xt] + "CancelRequest" + nt]);
if (!ut || !Pt) {
  var za = 0,
    so = 0,
    _e = [],
    X0 = 1e3 / 60;
  (ut = function (a) {
    if (_e.length === 0) {
      var e = Y0(),
        t = Math.max(0, X0 - (e - za));
      (za = t + e),
        setTimeout(function () {
          var r = _e.slice(0);
          _e.length = 0;
          for (var i = 0; i < r.length; i++)
            if (!r[i].cancelled)
              try {
                r[i].callback(za);
              } catch (n) {
                setTimeout(function () {
                  throw n;
                }, 0);
              }
        }, Math.round(t));
    }
    return _e.push({ handle: ++so, callback: a, cancelled: !1 }), so;
  }),
    (Pt = function (a) {
      for (var e = 0; e < _e.length; e++)
        _e[e].handle === a && (_e[e].cancelled = !0);
    });
}
Br.exports = function (a) {
  return ut.call(be, a);
};
Br.exports.cancel = function () {
  Pt.apply(be, arguments);
};
Br.exports.polyfill = function (a) {
  a || (a = be), (a.requestAnimationFrame = ut), (a.cancelAnimationFrame = Pt);
};
var Ga = Br.exports,
  fl = `	
\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF`,
  W0 = U,
  q0 = ge,
  Q0 = pe,
  K0 = fl,
  oo = W0("".replace),
  Tr = "[" + K0 + "]",
  Z0 = RegExp("^" + Tr + Tr + "*"),
  J0 = RegExp(Tr + Tr + "*$"),
  Ha = function (a) {
    return function (e) {
      var t = Q0(q0(e));
      return a & 1 && (t = oo(t, Z0, "")), a & 2 && (t = oo(t, J0, "")), t;
    };
  },
  eb = { start: Ha(1), end: Ha(2), trim: Ha(3) },
  tb = Rr.PROPER,
  rb = k,
  uo = fl,
  lo = "\u200B\x85\u180E",
  ab = function (a) {
    return rb(function () {
      return !!uo[a]() || lo[a]() !== lo || (tb && uo[a].name !== a);
    });
  },
  ib = ee,
  nb = eb.trim,
  sb = ab;
ib(
  { target: "String", proto: !0, forced: sb("trim") },
  {
    trim: function () {
      return nb(this);
    },
  }
);
var bi = function (a) {
    (this.ok = !1),
      (this.alpha = 1),
      a.charAt(0) == "#" && (a = a.substr(1, 6)),
      (a = a.replace(/ /g, "")),
      (a = a.toLowerCase());
    var e = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "00ffff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000000",
      blanchedalmond: "ffebcd",
      blue: "0000ff",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "00ffff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dodgerblue: "1e90ff",
      feldspar: "d19275",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "ff00ff",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgrey: "d3d3d3",
      lightgreen: "90ee90",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslateblue: "8470ff",
      lightslategray: "778899",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "00ff00",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "ff00ff",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370d8",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "d87093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "ff0000",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      violetred: "d02090",
      wheat: "f5deb3",
      white: "ffffff",
      whitesmoke: "f5f5f5",
      yellow: "ffff00",
      yellowgreen: "9acd32",
    };
    a = e[a] || a;
    for (
      var t = [
          {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
            process: function (u) {
              return [
                parseInt(u[1]),
                parseInt(u[2]),
                parseInt(u[3]),
                parseFloat(u[4]),
              ];
            },
          },
          {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
            process: function (u) {
              return [parseInt(u[1]), parseInt(u[2]), parseInt(u[3])];
            },
          },
          {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: ["#00ff00", "336699"],
            process: function (u) {
              return [
                parseInt(u[1], 16),
                parseInt(u[2], 16),
                parseInt(u[3], 16),
              ];
            },
          },
          {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: ["#fb0", "f0f"],
            process: function (u) {
              return [
                parseInt(u[1] + u[1], 16),
                parseInt(u[2] + u[2], 16),
                parseInt(u[3] + u[3], 16),
              ];
            },
          },
        ],
        r = 0;
      r < t.length;
      r++
    ) {
      var i = t[r].re,
        n = t[r].process,
        o = i.exec(a);
      if (o) {
        var s = n(o);
        (this.r = s[0]),
          (this.g = s[1]),
          (this.b = s[2]),
          s.length > 3 && (this.alpha = s[3]),
          (this.ok = !0);
      }
    }
    (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
      (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
      (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
      (this.alpha =
        this.alpha < 0
          ? 0
          : this.alpha > 1 || isNaN(this.alpha)
          ? 1
          : this.alpha),
      (this.toRGB = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
      }),
      (this.toRGBA = function () {
        return (
          "rgba(" +
          this.r +
          ", " +
          this.g +
          ", " +
          this.b +
          ", " +
          this.alpha +
          ")"
        );
      }),
      (this.toHex = function () {
        var u = this.r.toString(16),
          l = this.g.toString(16),
          h = this.b.toString(16);
        return (
          u.length == 1 && (u = "0" + u),
          l.length == 1 && (l = "0" + l),
          h.length == 1 && (h = "0" + h),
          "#" + u + l + h
        );
      }),
      (this.getHelpXML = function () {
        for (var u = new Array(), l = 0; l < t.length; l++)
          for (var h = t[l].example, f = 0; f < h.length; f++)
            u[u.length] = h[f];
        for (var c in e) u[u.length] = c;
        var v = document.createElement("ul");
        v.setAttribute("id", "rgbcolor-examples");
        for (var l = 0; l < u.length; l++)
          try {
            var d = document.createElement("li"),
              g = new RGBColor(u[l]),
              p = document.createElement("div");
            (p.style.cssText =
              "margin: 3px; border: 1px solid black; background:" +
              g.toHex() +
              "; color:" +
              g.toHex()),
              p.appendChild(document.createTextNode("test"));
            var y = document.createTextNode(
              " " + u[l] + " -> " + g.toRGB() + " -> " + g.toHex()
            );
            d.appendChild(p), d.appendChild(y), v.appendChild(d);
          } catch {}
        return v;
      });
  },
  ob = ee,
  ub = _t,
  lb = su.indexOf,
  hb = ul,
  xi = ub([].indexOf),
  ho = !!xi && 1 / xi([1], 1, -0) < 0,
  vb = hb("indexOf");
ob(
  { target: "Array", proto: !0, forced: ho || !vb },
  {
    indexOf: function (e) {
      var t = arguments.length > 1 ? arguments[1] : void 0;
      return ho ? xi(this, e, t) || 0 : lb(this, e, t);
    },
  }
);
var fb = ee,
  cb = U,
  gb = Ji,
  db = ge,
  vo = pe,
  pb = en,
  yb = cb("".indexOf);
fb(
  { target: "String", proto: !0, forced: !pb("includes") },
  {
    includes: function (e) {
      return !!~yb(
        vo(db(this)),
        vo(gb(e)),
        arguments.length > 1 ? arguments[1] : void 0
      );
    },
  }
);
var mb = ze,
  bb =
    Array.isArray ||
    function (e) {
      return mb(e) == "Array";
    },
  xb = ee,
  Tb = U,
  Sb = bb,
  Ob = Tb([].reverse),
  fo = [1, 2];
xb(
  { target: "Array", proto: !0, forced: String(fo) === String(fo.reverse()) },
  {
    reverse: function () {
      return Sb(this) && (this.length = this.length), Ob(this);
    },
  }
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var cl =
  function (a, e) {
    return (cl =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, r) {
          t.__proto__ = r;
        }) ||
      function (t, r) {
        for (var i in r)
          Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
      })(a, e);
  };
function gl(a, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  function t() {
    this.constructor = a;
  }
  cl(a, e),
    (a.prototype =
      e === null ? Object.create(e) : ((t.prototype = e.prototype), new t()));
}
function Eb(a) {
  var e = "";
  Array.isArray(a) || (a = [a]);
  for (var t = 0; t < a.length; t++) {
    var r = a[t];
    if (r.type === m.CLOSE_PATH) e += "z";
    else if (r.type === m.HORIZ_LINE_TO) e += (r.relative ? "h" : "H") + r.x;
    else if (r.type === m.VERT_LINE_TO) e += (r.relative ? "v" : "V") + r.y;
    else if (r.type === m.MOVE_TO)
      e += (r.relative ? "m" : "M") + r.x + " " + r.y;
    else if (r.type === m.LINE_TO)
      e += (r.relative ? "l" : "L") + r.x + " " + r.y;
    else if (r.type === m.CURVE_TO)
      e +=
        (r.relative ? "c" : "C") +
        r.x1 +
        " " +
        r.y1 +
        " " +
        r.x2 +
        " " +
        r.y2 +
        " " +
        r.x +
        " " +
        r.y;
    else if (r.type === m.SMOOTH_CURVE_TO)
      e += (r.relative ? "s" : "S") + r.x2 + " " + r.y2 + " " + r.x + " " + r.y;
    else if (r.type === m.QUAD_TO)
      e += (r.relative ? "q" : "Q") + r.x1 + " " + r.y1 + " " + r.x + " " + r.y;
    else if (r.type === m.SMOOTH_QUAD_TO)
      e += (r.relative ? "t" : "T") + r.x + " " + r.y;
    else {
      if (r.type !== m.ARC)
        throw new Error(
          'Unexpected command type "' + r.type + '" at index ' + t + "."
        );
      e +=
        (r.relative ? "a" : "A") +
        r.rX +
        " " +
        r.rY +
        " " +
        r.xRot +
        " " +
        +r.lArcFlag +
        " " +
        +r.sweepFlag +
        " " +
        r.x +
        " " +
        r.y;
    }
  }
  return e;
}
function Ti(a, e) {
  var t = a[0],
    r = a[1];
  return [t * Math.cos(e) - r * Math.sin(e), t * Math.sin(e) + r * Math.cos(e)];
}
function oe() {
  for (var a = [], e = 0; e < arguments.length; e++) a[e] = arguments[e];
  for (var t = 0; t < a.length; t++)
    if (typeof a[t] != "number")
      throw new Error(
        "assertNumbers arguments[" +
          t +
          "] is not a number. " +
          typeof a[t] +
          " == typeof " +
          a[t]
      );
  return !0;
}
var Oe = Math.PI;
function Ya(a, e, t) {
  (a.lArcFlag = a.lArcFlag === 0 ? 0 : 1),
    (a.sweepFlag = a.sweepFlag === 0 ? 0 : 1);
  var r = a.rX,
    i = a.rY,
    n = a.x,
    o = a.y;
  (r = Math.abs(a.rX)), (i = Math.abs(a.rY));
  var s = Ti([(e - n) / 2, (t - o) / 2], (-a.xRot / 180) * Oe),
    u = s[0],
    l = s[1],
    h = Math.pow(u, 2) / Math.pow(r, 2) + Math.pow(l, 2) / Math.pow(i, 2);
  1 < h && ((r *= Math.sqrt(h)), (i *= Math.sqrt(h))), (a.rX = r), (a.rY = i);
  var f = Math.pow(r, 2) * Math.pow(l, 2) + Math.pow(i, 2) * Math.pow(u, 2),
    c =
      (a.lArcFlag !== a.sweepFlag ? 1 : -1) *
      Math.sqrt(Math.max(0, (Math.pow(r, 2) * Math.pow(i, 2) - f) / f)),
    v = ((r * l) / i) * c,
    d = ((-i * u) / r) * c,
    g = Ti([v, d], (a.xRot / 180) * Oe);
  (a.cX = g[0] + (e + n) / 2),
    (a.cY = g[1] + (t + o) / 2),
    (a.phi1 = Math.atan2((l - d) / i, (u - v) / r)),
    (a.phi2 = Math.atan2((-l - d) / i, (-u - v) / r)),
    a.sweepFlag === 0 && a.phi2 > a.phi1 && (a.phi2 -= 2 * Oe),
    a.sweepFlag === 1 && a.phi2 < a.phi1 && (a.phi2 += 2 * Oe),
    (a.phi1 *= 180 / Oe),
    (a.phi2 *= 180 / Oe);
}
function co(a, e, t) {
  oe(a, e, t);
  var r = a * a + e * e - t * t;
  if (0 > r) return [];
  if (r === 0) return [[(a * t) / (a * a + e * e), (e * t) / (a * a + e * e)]];
  var i = Math.sqrt(r);
  return [
    [(a * t + e * i) / (a * a + e * e), (e * t - a * i) / (a * a + e * e)],
    [(a * t - e * i) / (a * a + e * e), (e * t + a * i) / (a * a + e * e)],
  ];
}
var j,
  ye = Math.PI / 180;
function go(a, e, t) {
  return (1 - t) * a + t * e;
}
function po(a, e, t, r) {
  return a + Math.cos((r / 180) * Oe) * e + Math.sin((r / 180) * Oe) * t;
}
function yo(a, e, t, r) {
  var i = 1e-6,
    n = e - a,
    o = t - e,
    s = 3 * n + 3 * (r - t) - 6 * o,
    u = 6 * (o - n),
    l = 3 * n;
  return Math.abs(s) < i
    ? [-l / u]
    : (function (h, f, c) {
        c === void 0 && (c = 1e-6);
        var v = (h * h) / 4 - f;
        if (v < -c) return [];
        if (v <= c) return [-h / 2];
        var d = Math.sqrt(v);
        return [-h / 2 - d, -h / 2 + d];
      })(u / s, l / s, i);
}
function mo(a, e, t, r, i) {
  var n = 1 - i;
  return (
    a * (n * n * n) +
    e * (3 * n * n * i) +
    t * (3 * n * i * i) +
    r * (i * i * i)
  );
}
(function (a) {
  function e() {
    return i(function (s, u, l) {
      return (
        s.relative &&
          (s.x1 !== void 0 && (s.x1 += u),
          s.y1 !== void 0 && (s.y1 += l),
          s.x2 !== void 0 && (s.x2 += u),
          s.y2 !== void 0 && (s.y2 += l),
          s.x !== void 0 && (s.x += u),
          s.y !== void 0 && (s.y += l),
          (s.relative = !1)),
        s
      );
    });
  }
  function t() {
    var s = NaN,
      u = NaN,
      l = NaN,
      h = NaN;
    return i(function (f, c, v) {
      return (
        f.type & m.SMOOTH_CURVE_TO &&
          ((f.type = m.CURVE_TO),
          (s = isNaN(s) ? c : s),
          (u = isNaN(u) ? v : u),
          (f.x1 = f.relative ? c - s : 2 * c - s),
          (f.y1 = f.relative ? v - u : 2 * v - u)),
        f.type & m.CURVE_TO
          ? ((s = f.relative ? c + f.x2 : f.x2),
            (u = f.relative ? v + f.y2 : f.y2))
          : ((s = NaN), (u = NaN)),
        f.type & m.SMOOTH_QUAD_TO &&
          ((f.type = m.QUAD_TO),
          (l = isNaN(l) ? c : l),
          (h = isNaN(h) ? v : h),
          (f.x1 = f.relative ? c - l : 2 * c - l),
          (f.y1 = f.relative ? v - h : 2 * v - h)),
        f.type & m.QUAD_TO
          ? ((l = f.relative ? c + f.x1 : f.x1),
            (h = f.relative ? v + f.y1 : f.y1))
          : ((l = NaN), (h = NaN)),
        f
      );
    });
  }
  function r() {
    var s = NaN,
      u = NaN;
    return i(function (l, h, f) {
      if (
        (l.type & m.SMOOTH_QUAD_TO &&
          ((l.type = m.QUAD_TO),
          (s = isNaN(s) ? h : s),
          (u = isNaN(u) ? f : u),
          (l.x1 = l.relative ? h - s : 2 * h - s),
          (l.y1 = l.relative ? f - u : 2 * f - u)),
        l.type & m.QUAD_TO)
      ) {
        (s = l.relative ? h + l.x1 : l.x1), (u = l.relative ? f + l.y1 : l.y1);
        var c = l.x1,
          v = l.y1;
        (l.type = m.CURVE_TO),
          (l.x1 = ((l.relative ? 0 : h) + 2 * c) / 3),
          (l.y1 = ((l.relative ? 0 : f) + 2 * v) / 3),
          (l.x2 = (l.x + 2 * c) / 3),
          (l.y2 = (l.y + 2 * v) / 3);
      } else (s = NaN), (u = NaN);
      return l;
    });
  }
  function i(s) {
    var u = 0,
      l = 0,
      h = NaN,
      f = NaN;
    return function (c) {
      if (isNaN(h) && !(c.type & m.MOVE_TO))
        throw new Error("path must start with moveto");
      var v = s(c, u, l, h, f);
      return (
        c.type & m.CLOSE_PATH && ((u = h), (l = f)),
        c.x !== void 0 && (u = c.relative ? u + c.x : c.x),
        c.y !== void 0 && (l = c.relative ? l + c.y : c.y),
        c.type & m.MOVE_TO && ((h = u), (f = l)),
        v
      );
    };
  }
  function n(s, u, l, h, f, c) {
    return (
      oe(s, u, l, h, f, c),
      i(function (v, d, g, p) {
        var y = v.x1,
          x = v.x2,
          b = v.relative && !isNaN(p),
          T = v.x !== void 0 ? v.x : b ? 0 : d,
          $ = v.y !== void 0 ? v.y : b ? 0 : g;
        function E(ne) {
          return ne * ne;
        }
        v.type & m.HORIZ_LINE_TO &&
          u !== 0 &&
          ((v.type = m.LINE_TO), (v.y = v.relative ? 0 : g)),
          v.type & m.VERT_LINE_TO &&
            l !== 0 &&
            ((v.type = m.LINE_TO), (v.x = v.relative ? 0 : d)),
          v.x !== void 0 && (v.x = v.x * s + $ * l + (b ? 0 : f)),
          v.y !== void 0 && (v.y = T * u + v.y * h + (b ? 0 : c)),
          v.x1 !== void 0 && (v.x1 = v.x1 * s + v.y1 * l + (b ? 0 : f)),
          v.y1 !== void 0 && (v.y1 = y * u + v.y1 * h + (b ? 0 : c)),
          v.x2 !== void 0 && (v.x2 = v.x2 * s + v.y2 * l + (b ? 0 : f)),
          v.y2 !== void 0 && (v.y2 = x * u + v.y2 * h + (b ? 0 : c));
        var S = s * h - u * l;
        if (v.xRot !== void 0 && (s !== 1 || u !== 0 || l !== 0 || h !== 1))
          if (S === 0)
            delete v.rX,
              delete v.rY,
              delete v.xRot,
              delete v.lArcFlag,
              delete v.sweepFlag,
              (v.type = m.LINE_TO);
          else {
            var C = (v.xRot * Math.PI) / 180,
              N = Math.sin(C),
              _ = Math.cos(C),
              B = 1 / E(v.rX),
              P = 1 / E(v.rY),
              X = E(_) * B + E(N) * P,
              W = 2 * N * _ * (B - P),
              z = E(N) * B + E(_) * P,
              q = X * h * h - W * u * h + z * u * u,
              H = W * (s * h + u * l) - 2 * (X * l * h + z * s * u),
              Q = X * l * l - W * s * l + z * s * s,
              R = ((Math.atan2(H, q - Q) + Math.PI) % Math.PI) / 2,
              M = Math.sin(R),
              Z = Math.cos(R);
            (v.rX = Math.abs(S) / Math.sqrt(q * E(Z) + H * M * Z + Q * E(M))),
              (v.rY = Math.abs(S) / Math.sqrt(q * E(M) - H * M * Z + Q * E(Z))),
              (v.xRot = (180 * R) / Math.PI);
          }
        return (
          v.sweepFlag !== void 0 && 0 > S && (v.sweepFlag = +!v.sweepFlag), v
        );
      })
    );
  }
  function o() {
    return function (s) {
      var u = {};
      for (var l in s) u[l] = s[l];
      return u;
    };
  }
  (a.ROUND = function (s) {
    function u(l) {
      return Math.round(l * s) / s;
    }
    return (
      s === void 0 && (s = 1e13),
      oe(s),
      function (l) {
        return (
          l.x1 !== void 0 && (l.x1 = u(l.x1)),
          l.y1 !== void 0 && (l.y1 = u(l.y1)),
          l.x2 !== void 0 && (l.x2 = u(l.x2)),
          l.y2 !== void 0 && (l.y2 = u(l.y2)),
          l.x !== void 0 && (l.x = u(l.x)),
          l.y !== void 0 && (l.y = u(l.y)),
          l.rX !== void 0 && (l.rX = u(l.rX)),
          l.rY !== void 0 && (l.rY = u(l.rY)),
          l
        );
      }
    );
  }),
    (a.TO_ABS = e),
    (a.TO_REL = function () {
      return i(function (s, u, l) {
        return (
          s.relative ||
            (s.x1 !== void 0 && (s.x1 -= u),
            s.y1 !== void 0 && (s.y1 -= l),
            s.x2 !== void 0 && (s.x2 -= u),
            s.y2 !== void 0 && (s.y2 -= l),
            s.x !== void 0 && (s.x -= u),
            s.y !== void 0 && (s.y -= l),
            (s.relative = !0)),
          s
        );
      });
    }),
    (a.NORMALIZE_HVZ = function (s, u, l) {
      return (
        s === void 0 && (s = !0),
        u === void 0 && (u = !0),
        l === void 0 && (l = !0),
        i(function (h, f, c, v, d) {
          if (isNaN(v) && !(h.type & m.MOVE_TO))
            throw new Error("path must start with moveto");
          return (
            u &&
              h.type & m.HORIZ_LINE_TO &&
              ((h.type = m.LINE_TO), (h.y = h.relative ? 0 : c)),
            l &&
              h.type & m.VERT_LINE_TO &&
              ((h.type = m.LINE_TO), (h.x = h.relative ? 0 : f)),
            s &&
              h.type & m.CLOSE_PATH &&
              ((h.type = m.LINE_TO),
              (h.x = h.relative ? v - f : v),
              (h.y = h.relative ? d - c : d)),
            h.type & m.ARC &&
              (h.rX === 0 || h.rY === 0) &&
              ((h.type = m.LINE_TO),
              delete h.rX,
              delete h.rY,
              delete h.xRot,
              delete h.lArcFlag,
              delete h.sweepFlag),
            h
          );
        })
      );
    }),
    (a.NORMALIZE_ST = t),
    (a.QT_TO_C = r),
    (a.INFO = i),
    (a.SANITIZE = function (s) {
      s === void 0 && (s = 0), oe(s);
      var u = NaN,
        l = NaN,
        h = NaN,
        f = NaN;
      return i(function (c, v, d, g, p) {
        var y = Math.abs,
          x = !1,
          b = 0,
          T = 0;
        if (
          (c.type & m.SMOOTH_CURVE_TO &&
            ((b = isNaN(u) ? 0 : v - u), (T = isNaN(l) ? 0 : d - l)),
          c.type & (m.CURVE_TO | m.SMOOTH_CURVE_TO)
            ? ((u = c.relative ? v + c.x2 : c.x2),
              (l = c.relative ? d + c.y2 : c.y2))
            : ((u = NaN), (l = NaN)),
          c.type & m.SMOOTH_QUAD_TO
            ? ((h = isNaN(h) ? v : 2 * v - h), (f = isNaN(f) ? d : 2 * d - f))
            : c.type & m.QUAD_TO
            ? ((h = c.relative ? v + c.x1 : c.x1),
              (f = c.relative ? d + c.y1 : c.y2))
            : ((h = NaN), (f = NaN)),
          c.type & m.LINE_COMMANDS ||
            (c.type & m.ARC && (c.rX === 0 || c.rY === 0 || !c.lArcFlag)) ||
            c.type & m.CURVE_TO ||
            c.type & m.SMOOTH_CURVE_TO ||
            c.type & m.QUAD_TO ||
            c.type & m.SMOOTH_QUAD_TO)
        ) {
          var $ = c.x === void 0 ? 0 : c.relative ? c.x : c.x - v,
            E = c.y === void 0 ? 0 : c.relative ? c.y : c.y - d;
          (b = isNaN(h)
            ? c.x1 === void 0
              ? b
              : c.relative
              ? c.x
              : c.x1 - v
            : h - v),
            (T = isNaN(f)
              ? c.y1 === void 0
                ? T
                : c.relative
                ? c.y
                : c.y1 - d
              : f - d);
          var S = c.x2 === void 0 ? 0 : c.relative ? c.x : c.x2 - v,
            C = c.y2 === void 0 ? 0 : c.relative ? c.y : c.y2 - d;
          y($) <= s &&
            y(E) <= s &&
            y(b) <= s &&
            y(T) <= s &&
            y(S) <= s &&
            y(C) <= s &&
            (x = !0);
        }
        return (
          c.type & m.CLOSE_PATH && y(v - g) <= s && y(d - p) <= s && (x = !0),
          x ? [] : c
        );
      });
    }),
    (a.MATRIX = n),
    (a.ROTATE = function (s, u, l) {
      u === void 0 && (u = 0), l === void 0 && (l = 0), oe(s, u, l);
      var h = Math.sin(s),
        f = Math.cos(s);
      return n(f, h, -h, f, u - u * f + l * h, l - u * h - l * f);
    }),
    (a.TRANSLATE = function (s, u) {
      return u === void 0 && (u = 0), oe(s, u), n(1, 0, 0, 1, s, u);
    }),
    (a.SCALE = function (s, u) {
      return u === void 0 && (u = s), oe(s, u), n(s, 0, 0, u, 0, 0);
    }),
    (a.SKEW_X = function (s) {
      return oe(s), n(1, 0, Math.atan(s), 1, 0, 0);
    }),
    (a.SKEW_Y = function (s) {
      return oe(s), n(1, Math.atan(s), 0, 1, 0, 0);
    }),
    (a.X_AXIS_SYMMETRY = function (s) {
      return s === void 0 && (s = 0), oe(s), n(-1, 0, 0, 1, s, 0);
    }),
    (a.Y_AXIS_SYMMETRY = function (s) {
      return s === void 0 && (s = 0), oe(s), n(1, 0, 0, -1, 0, s);
    }),
    (a.A_TO_C = function () {
      return i(function (s, u, l) {
        return m.ARC === s.type
          ? (function (h, f, c) {
              var v, d, g, p;
              h.cX || Ya(h, f, c);
              for (
                var y = Math.min(h.phi1, h.phi2),
                  x = Math.max(h.phi1, h.phi2) - y,
                  b = Math.ceil(x / 90),
                  T = new Array(b),
                  $ = f,
                  E = c,
                  S = 0;
                S < b;
                S++
              ) {
                var C = go(h.phi1, h.phi2, S / b),
                  N = go(h.phi1, h.phi2, (S + 1) / b),
                  _ = N - C,
                  B = (4 / 3) * Math.tan((_ * ye) / 4),
                  P = [
                    Math.cos(C * ye) - B * Math.sin(C * ye),
                    Math.sin(C * ye) + B * Math.cos(C * ye),
                  ],
                  X = P[0],
                  W = P[1],
                  z = [Math.cos(N * ye), Math.sin(N * ye)],
                  q = z[0],
                  H = z[1],
                  Q = [q + B * Math.sin(N * ye), H - B * Math.cos(N * ye)],
                  R = Q[0],
                  M = Q[1];
                T[S] = { relative: h.relative, type: m.CURVE_TO };
                var Z = function (ne, ve) {
                  var Se = Ti([ne * h.rX, ve * h.rY], h.xRot),
                    Xe = Se[0],
                    kt = Se[1];
                  return [h.cX + Xe, h.cY + kt];
                };
                (v = Z(X, W)),
                  (T[S].x1 = v[0]),
                  (T[S].y1 = v[1]),
                  (d = Z(R, M)),
                  (T[S].x2 = d[0]),
                  (T[S].y2 = d[1]),
                  (g = Z(q, H)),
                  (T[S].x = g[0]),
                  (T[S].y = g[1]),
                  h.relative &&
                    ((T[S].x1 -= $),
                    (T[S].y1 -= E),
                    (T[S].x2 -= $),
                    (T[S].y2 -= E),
                    (T[S].x -= $),
                    (T[S].y -= E)),
                  ($ = (p = [T[S].x, T[S].y])[0]),
                  (E = p[1]);
              }
              return T;
            })(s, s.relative ? 0 : u, s.relative ? 0 : l)
          : s;
      });
    }),
    (a.ANNOTATE_ARCS = function () {
      return i(function (s, u, l) {
        return (
          s.relative && ((u = 0), (l = 0)), m.ARC === s.type && Ya(s, u, l), s
        );
      });
    }),
    (a.CLONE = o),
    (a.CALCULATE_BOUNDS = function () {
      var s = function (c) {
          var v = {};
          for (var d in c) v[d] = c[d];
          return v;
        },
        u = e(),
        l = r(),
        h = t(),
        f = i(function (c, v, d) {
          var g = h(l(u(s(c))));
          function p(M) {
            M > f.maxX && (f.maxX = M), M < f.minX && (f.minX = M);
          }
          function y(M) {
            M > f.maxY && (f.maxY = M), M < f.minY && (f.minY = M);
          }
          if (
            (g.type & m.DRAWING_COMMANDS && (p(v), y(d)),
            g.type & m.HORIZ_LINE_TO && p(g.x),
            g.type & m.VERT_LINE_TO && y(g.y),
            g.type & m.LINE_TO && (p(g.x), y(g.y)),
            g.type & m.CURVE_TO)
          ) {
            p(g.x), y(g.y);
            for (var x = 0, b = yo(v, g.x1, g.x2, g.x); x < b.length; x++)
              0 < (R = b[x]) && 1 > R && p(mo(v, g.x1, g.x2, g.x, R));
            for (var T = 0, $ = yo(d, g.y1, g.y2, g.y); T < $.length; T++)
              0 < (R = $[T]) && 1 > R && y(mo(d, g.y1, g.y2, g.y, R));
          }
          if (g.type & m.ARC) {
            p(g.x), y(g.y), Ya(g, v, d);
            for (
              var E = (g.xRot / 180) * Math.PI,
                S = Math.cos(E) * g.rX,
                C = Math.sin(E) * g.rX,
                N = -Math.sin(E) * g.rY,
                _ = Math.cos(E) * g.rY,
                B =
                  g.phi1 < g.phi2
                    ? [g.phi1, g.phi2]
                    : -180 > g.phi2
                    ? [g.phi2 + 360, g.phi1 + 360]
                    : [g.phi2, g.phi1],
                P = B[0],
                X = B[1],
                W = function (M) {
                  var Z = M[0],
                    ne = M[1],
                    ve = (180 * Math.atan2(ne, Z)) / Math.PI;
                  return ve < P ? ve + 360 : ve;
                },
                z = 0,
                q = co(N, -S, 0).map(W);
              z < q.length;
              z++
            )
              (R = q[z]) > P && R < X && p(po(g.cX, S, N, R));
            for (var H = 0, Q = co(_, -C, 0).map(W); H < Q.length; H++) {
              var R;
              (R = Q[H]) > P && R < X && y(po(g.cY, C, _, R));
            }
          }
          return c;
        });
      return (
        (f.minX = 1 / 0),
        (f.maxX = -1 / 0),
        (f.minY = 1 / 0),
        (f.maxY = -1 / 0),
        f
      );
    });
})(j || (j = {}));
var se,
  dl = (function () {
    function a() {}
    return (
      (a.prototype.round = function (e) {
        return this.transform(j.ROUND(e));
      }),
      (a.prototype.toAbs = function () {
        return this.transform(j.TO_ABS());
      }),
      (a.prototype.toRel = function () {
        return this.transform(j.TO_REL());
      }),
      (a.prototype.normalizeHVZ = function (e, t, r) {
        return this.transform(j.NORMALIZE_HVZ(e, t, r));
      }),
      (a.prototype.normalizeST = function () {
        return this.transform(j.NORMALIZE_ST());
      }),
      (a.prototype.qtToC = function () {
        return this.transform(j.QT_TO_C());
      }),
      (a.prototype.aToC = function () {
        return this.transform(j.A_TO_C());
      }),
      (a.prototype.sanitize = function (e) {
        return this.transform(j.SANITIZE(e));
      }),
      (a.prototype.translate = function (e, t) {
        return this.transform(j.TRANSLATE(e, t));
      }),
      (a.prototype.scale = function (e, t) {
        return this.transform(j.SCALE(e, t));
      }),
      (a.prototype.rotate = function (e, t, r) {
        return this.transform(j.ROTATE(e, t, r));
      }),
      (a.prototype.matrix = function (e, t, r, i, n, o) {
        return this.transform(j.MATRIX(e, t, r, i, n, o));
      }),
      (a.prototype.skewX = function (e) {
        return this.transform(j.SKEW_X(e));
      }),
      (a.prototype.skewY = function (e) {
        return this.transform(j.SKEW_Y(e));
      }),
      (a.prototype.xSymmetry = function (e) {
        return this.transform(j.X_AXIS_SYMMETRY(e));
      }),
      (a.prototype.ySymmetry = function (e) {
        return this.transform(j.Y_AXIS_SYMMETRY(e));
      }),
      (a.prototype.annotateArcs = function () {
        return this.transform(j.ANNOTATE_ARCS());
      }),
      a
    );
  })(),
  $b = function (a) {
    return (
      a === " " ||
      a === "	" ||
      a === "\r" ||
      a ===
        `
`
    );
  },
  bo = function (a) {
    return (
      "0".charCodeAt(0) <= a.charCodeAt(0) &&
      a.charCodeAt(0) <= "9".charCodeAt(0)
    );
  },
  wb = (function (a) {
    function e() {
      var t = a.call(this) || this;
      return (
        (t.curNumber = ""),
        (t.curCommandType = -1),
        (t.curCommandRelative = !1),
        (t.canParseCommandOrComma = !0),
        (t.curNumberHasExp = !1),
        (t.curNumberHasExpDigits = !1),
        (t.curNumberHasDecimal = !1),
        (t.curArgs = []),
        t
      );
    }
    return (
      gl(e, a),
      (e.prototype.finish = function (t) {
        if (
          (t === void 0 && (t = []),
          this.parse(" ", t),
          this.curArgs.length !== 0 || !this.canParseCommandOrComma)
        )
          throw new SyntaxError("Unterminated command at the path end.");
        return t;
      }),
      (e.prototype.parse = function (t, r) {
        var i = this;
        r === void 0 && (r = []);
        for (
          var n = function (f) {
              r.push(f),
                (i.curArgs.length = 0),
                (i.canParseCommandOrComma = !0);
            },
            o = 0;
          o < t.length;
          o++
        ) {
          var s = t[o],
            u = !(
              this.curCommandType !== m.ARC ||
              (this.curArgs.length !== 3 && this.curArgs.length !== 4) ||
              this.curNumber.length !== 1 ||
              (this.curNumber !== "0" && this.curNumber !== "1")
            ),
            l = bo(s) && ((this.curNumber === "0" && s === "0") || u);
          if (!bo(s) || l)
            if (s !== "e" && s !== "E")
              if (
                (s !== "-" && s !== "+") ||
                !this.curNumberHasExp ||
                this.curNumberHasExpDigits
              )
                if (
                  s !== "." ||
                  this.curNumberHasExp ||
                  this.curNumberHasDecimal ||
                  u
                ) {
                  if (this.curNumber && this.curCommandType !== -1) {
                    var h = Number(this.curNumber);
                    if (isNaN(h))
                      throw new SyntaxError("Invalid number ending at " + o);
                    if (this.curCommandType === m.ARC) {
                      if (
                        this.curArgs.length === 0 ||
                        this.curArgs.length === 1
                      ) {
                        if (0 > h)
                          throw new SyntaxError(
                            'Expected positive number, got "' +
                              h +
                              '" at index "' +
                              o +
                              '"'
                          );
                      } else if (
                        (this.curArgs.length === 3 ||
                          this.curArgs.length === 4) &&
                        this.curNumber !== "0" &&
                        this.curNumber !== "1"
                      )
                        throw new SyntaxError(
                          'Expected a flag, got "' +
                            this.curNumber +
                            '" at index "' +
                            o +
                            '"'
                        );
                    }
                    this.curArgs.push(h),
                      this.curArgs.length === Cb[this.curCommandType] &&
                        (m.HORIZ_LINE_TO === this.curCommandType
                          ? n({
                              type: m.HORIZ_LINE_TO,
                              relative: this.curCommandRelative,
                              x: h,
                            })
                          : m.VERT_LINE_TO === this.curCommandType
                          ? n({
                              type: m.VERT_LINE_TO,
                              relative: this.curCommandRelative,
                              y: h,
                            })
                          : this.curCommandType === m.MOVE_TO ||
                            this.curCommandType === m.LINE_TO ||
                            this.curCommandType === m.SMOOTH_QUAD_TO
                          ? (n({
                              type: this.curCommandType,
                              relative: this.curCommandRelative,
                              x: this.curArgs[0],
                              y: this.curArgs[1],
                            }),
                            m.MOVE_TO === this.curCommandType &&
                              (this.curCommandType = m.LINE_TO))
                          : this.curCommandType === m.CURVE_TO
                          ? n({
                              type: m.CURVE_TO,
                              relative: this.curCommandRelative,
                              x1: this.curArgs[0],
                              y1: this.curArgs[1],
                              x2: this.curArgs[2],
                              y2: this.curArgs[3],
                              x: this.curArgs[4],
                              y: this.curArgs[5],
                            })
                          : this.curCommandType === m.SMOOTH_CURVE_TO
                          ? n({
                              type: m.SMOOTH_CURVE_TO,
                              relative: this.curCommandRelative,
                              x2: this.curArgs[0],
                              y2: this.curArgs[1],
                              x: this.curArgs[2],
                              y: this.curArgs[3],
                            })
                          : this.curCommandType === m.QUAD_TO
                          ? n({
                              type: m.QUAD_TO,
                              relative: this.curCommandRelative,
                              x1: this.curArgs[0],
                              y1: this.curArgs[1],
                              x: this.curArgs[2],
                              y: this.curArgs[3],
                            })
                          : this.curCommandType === m.ARC &&
                            n({
                              type: m.ARC,
                              relative: this.curCommandRelative,
                              rX: this.curArgs[0],
                              rY: this.curArgs[1],
                              xRot: this.curArgs[2],
                              lArcFlag: this.curArgs[3],
                              sweepFlag: this.curArgs[4],
                              x: this.curArgs[5],
                              y: this.curArgs[6],
                            })),
                      (this.curNumber = ""),
                      (this.curNumberHasExpDigits = !1),
                      (this.curNumberHasExp = !1),
                      (this.curNumberHasDecimal = !1),
                      (this.canParseCommandOrComma = !0);
                  }
                  if (!$b(s))
                    if (s === "," && this.canParseCommandOrComma)
                      this.canParseCommandOrComma = !1;
                    else if (s !== "+" && s !== "-" && s !== ".")
                      if (l)
                        (this.curNumber = s), (this.curNumberHasDecimal = !1);
                      else {
                        if (this.curArgs.length !== 0)
                          throw new SyntaxError(
                            "Unterminated command at index " + o + "."
                          );
                        if (!this.canParseCommandOrComma)
                          throw new SyntaxError(
                            'Unexpected character "' +
                              s +
                              '" at index ' +
                              o +
                              ". Command cannot follow comma"
                          );
                        if (
                          ((this.canParseCommandOrComma = !1),
                          s !== "z" && s !== "Z")
                        )
                          if (s === "h" || s === "H")
                            (this.curCommandType = m.HORIZ_LINE_TO),
                              (this.curCommandRelative = s === "h");
                          else if (s === "v" || s === "V")
                            (this.curCommandType = m.VERT_LINE_TO),
                              (this.curCommandRelative = s === "v");
                          else if (s === "m" || s === "M")
                            (this.curCommandType = m.MOVE_TO),
                              (this.curCommandRelative = s === "m");
                          else if (s === "l" || s === "L")
                            (this.curCommandType = m.LINE_TO),
                              (this.curCommandRelative = s === "l");
                          else if (s === "c" || s === "C")
                            (this.curCommandType = m.CURVE_TO),
                              (this.curCommandRelative = s === "c");
                          else if (s === "s" || s === "S")
                            (this.curCommandType = m.SMOOTH_CURVE_TO),
                              (this.curCommandRelative = s === "s");
                          else if (s === "q" || s === "Q")
                            (this.curCommandType = m.QUAD_TO),
                              (this.curCommandRelative = s === "q");
                          else if (s === "t" || s === "T")
                            (this.curCommandType = m.SMOOTH_QUAD_TO),
                              (this.curCommandRelative = s === "t");
                          else {
                            if (s !== "a" && s !== "A")
                              throw new SyntaxError(
                                'Unexpected character "' +
                                  s +
                                  '" at index ' +
                                  o +
                                  "."
                              );
                            (this.curCommandType = m.ARC),
                              (this.curCommandRelative = s === "a");
                          }
                        else
                          r.push({ type: m.CLOSE_PATH }),
                            (this.canParseCommandOrComma = !0),
                            (this.curCommandType = -1);
                      }
                    else
                      (this.curNumber = s),
                        (this.curNumberHasDecimal = s === ".");
                } else (this.curNumber += s), (this.curNumberHasDecimal = !0);
              else this.curNumber += s;
            else (this.curNumber += s), (this.curNumberHasExp = !0);
          else
            (this.curNumber += s),
              (this.curNumberHasExpDigits = this.curNumberHasExp);
        }
        return r;
      }),
      (e.prototype.transform = function (t) {
        return Object.create(this, {
          parse: {
            value: function (r, i) {
              i === void 0 && (i = []);
              for (
                var n = 0, o = Object.getPrototypeOf(this).parse.call(this, r);
                n < o.length;
                n++
              ) {
                var s = o[n],
                  u = t(s);
                Array.isArray(u) ? i.push.apply(i, u) : i.push(u);
              }
              return i;
            },
          },
        });
      }),
      e
    );
  })(dl),
  m = (function (a) {
    function e(t) {
      var r = a.call(this) || this;
      return (r.commands = typeof t == "string" ? e.parse(t) : t), r;
    }
    return (
      gl(e, a),
      (e.prototype.encode = function () {
        return e.encode(this.commands);
      }),
      (e.prototype.getBounds = function () {
        var t = j.CALCULATE_BOUNDS();
        return this.transform(t), t;
      }),
      (e.prototype.transform = function (t) {
        for (var r = [], i = 0, n = this.commands; i < n.length; i++) {
          var o = t(n[i]);
          Array.isArray(o) ? r.push.apply(r, o) : r.push(o);
        }
        return (this.commands = r), this;
      }),
      (e.encode = function (t) {
        return Eb(t);
      }),
      (e.parse = function (t) {
        var r = new wb(),
          i = [];
        return r.parse(t, i), r.finish(i), i;
      }),
      (e.CLOSE_PATH = 1),
      (e.MOVE_TO = 2),
      (e.HORIZ_LINE_TO = 4),
      (e.VERT_LINE_TO = 8),
      (e.LINE_TO = 16),
      (e.CURVE_TO = 32),
      (e.SMOOTH_CURVE_TO = 64),
      (e.QUAD_TO = 128),
      (e.SMOOTH_QUAD_TO = 256),
      (e.ARC = 512),
      (e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO),
      (e.DRAWING_COMMANDS =
        e.HORIZ_LINE_TO |
        e.VERT_LINE_TO |
        e.LINE_TO |
        e.CURVE_TO |
        e.SMOOTH_CURVE_TO |
        e.QUAD_TO |
        e.SMOOTH_QUAD_TO |
        e.ARC),
      e
    );
  })(dl),
  Cb =
    (((se = {})[m.MOVE_TO] = 2),
    (se[m.LINE_TO] = 2),
    (se[m.HORIZ_LINE_TO] = 1),
    (se[m.VERT_LINE_TO] = 1),
    (se[m.CLOSE_PATH] = 0),
    (se[m.QUAD_TO] = 4),
    (se[m.SMOOTH_QUAD_TO] = 2),
    (se[m.CURVE_TO] = 6),
    (se[m.SMOOTH_CURVE_TO] = 4),
    (se[m.ARC] = 7),
    se),
  Ab = Y,
  Pb = le,
  Rb = Er,
  Ib = Uu,
  xo = RegExp.prototype,
  Nb = function (a) {
    var e = a.flags;
    return e === void 0 && !("flags" in xo) && !Pb(a, "flags") && Rb(xo, a)
      ? Ab(Ib, a)
      : e;
  },
  Mb = Rr.PROPER,
  _b = He,
  Db = K,
  To = pe,
  Vb = k,
  Lb = Nb,
  nn = "toString",
  kb = RegExp.prototype,
  pl = kb[nn],
  Bb = Vb(function () {
    return pl.call({ source: "a", flags: "b" }) != "/a/b";
  }),
  Fb = Mb && pl.name != nn;
(Bb || Fb) &&
  _b(
    RegExp.prototype,
    nn,
    function () {
      var e = Db(this),
        t = To(e.source),
        r = To(Lb(e));
      return "/" + t + "/" + r;
    },
    { unsafe: !0 }
  );
function cr(a) {
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (cr = function (e) {
          return typeof e;
        })
      : (cr = function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        }),
    cr(a)
  );
}
function jb(a, e) {
  if (!(a instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var Ub = [
    512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292,
    512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292,
    273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259,
    496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292,
    282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373,
    364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259,
    507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381,
    374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292,
    287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461,
    454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373,
    368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309,
    305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259,
    257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442,
    437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
    377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332,
    329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292,
    289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259,
  ],
  zb = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17,
    17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19,
    19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24,
  ];
function Gb(a, e, t, r, i) {
  if (
    (typeof a == "string" && (a = document.getElementById(a)),
    !a || cr(a) !== "object" || !("getContext" in a))
  )
    throw new TypeError(
      "Expecting canvas with `getContext` method in processCanvasRGB(A) calls!"
    );
  var n = a.getContext("2d");
  try {
    return n.getImageData(e, t, r, i);
  } catch (o) {
    throw new Error("unable to access image data: " + o);
  }
}
function Hb(a, e, t, r, i, n) {
  if (!(isNaN(n) || n < 1)) {
    n |= 0;
    var o = Gb(a, e, t, r, i);
    (o = Yb(o, e, t, r, i, n)), a.getContext("2d").putImageData(o, e, t);
  }
}
function Yb(a, e, t, r, i, n) {
  for (
    var o = a.data,
      s = 2 * n + 1,
      u = r - 1,
      l = i - 1,
      h = n + 1,
      f = (h * (h + 1)) / 2,
      c = new So(),
      v = c,
      d,
      g = 1;
    g < s;
    g++
  )
    (v = v.next = new So()), g === h && (d = v);
  v.next = c;
  for (
    var p = null, y = null, x = 0, b = 0, T = Ub[n], $ = zb[n], E = 0;
    E < i;
    E++
  ) {
    v = c;
    for (
      var S = o[b], C = o[b + 1], N = o[b + 2], _ = o[b + 3], B = 0;
      B < h;
      B++
    )
      (v.r = S), (v.g = C), (v.b = N), (v.a = _), (v = v.next);
    for (
      var P = 0,
        X = 0,
        W = 0,
        z = 0,
        q = h * S,
        H = h * C,
        Q = h * N,
        R = h * _,
        M = f * S,
        Z = f * C,
        ne = f * N,
        ve = f * _,
        Se = 1;
      Se < h;
      Se++
    ) {
      var Xe = b + ((u < Se ? u : Se) << 2),
        kt = o[Xe],
        un = o[Xe + 1],
        ln = o[Xe + 2],
        hn = o[Xe + 3],
        Bt = h - Se;
      (M += (v.r = kt) * Bt),
        (Z += (v.g = un) * Bt),
        (ne += (v.b = ln) * Bt),
        (ve += (v.a = hn) * Bt),
        (P += kt),
        (X += un),
        (W += ln),
        (z += hn),
        (v = v.next);
    }
    (p = c), (y = d);
    for (var Gr = 0; Gr < r; Gr++) {
      var Hr = (ve * T) >> $;
      if (((o[b + 3] = Hr), Hr !== 0)) {
        var Yr = 255 / Hr;
        (o[b] = ((M * T) >> $) * Yr),
          (o[b + 1] = ((Z * T) >> $) * Yr),
          (o[b + 2] = ((ne * T) >> $) * Yr);
      } else o[b] = o[b + 1] = o[b + 2] = 0;
      (M -= q),
        (Z -= H),
        (ne -= Q),
        (ve -= R),
        (q -= p.r),
        (H -= p.g),
        (Q -= p.b),
        (R -= p.a);
      var Pe = Gr + n + 1;
      (Pe = (x + (Pe < u ? Pe : u)) << 2),
        (P += p.r = o[Pe]),
        (X += p.g = o[Pe + 1]),
        (W += p.b = o[Pe + 2]),
        (z += p.a = o[Pe + 3]),
        (M += P),
        (Z += X),
        (ne += W),
        (ve += z),
        (p = p.next);
      var Ft = y,
        vn = Ft.r,
        fn = Ft.g,
        cn = Ft.b,
        gn = Ft.a;
      (q += vn),
        (H += fn),
        (Q += cn),
        (R += gn),
        (P -= vn),
        (X -= fn),
        (W -= cn),
        (z -= gn),
        (y = y.next),
        (b += 4);
    }
    x += r;
  }
  for (var We = 0; We < r; We++) {
    b = We << 2;
    var Re = o[b],
      Ie = o[b + 1],
      Ne = o[b + 2],
      te = o[b + 3],
      Xr = h * Re,
      Wr = h * Ie,
      qr = h * Ne,
      Qr = h * te,
      jt = f * Re,
      Ut = f * Ie,
      zt = f * Ne,
      Gt = f * te;
    v = c;
    for (var dn = 0; dn < h; dn++)
      (v.r = Re), (v.g = Ie), (v.b = Ne), (v.a = te), (v = v.next);
    for (var pn = r, Kr = 0, Zr = 0, Jr = 0, ea = 0, Ht = 1; Ht <= n; Ht++) {
      b = (pn + We) << 2;
      var Yt = h - Ht;
      (jt += (v.r = Re = o[b]) * Yt),
        (Ut += (v.g = Ie = o[b + 1]) * Yt),
        (zt += (v.b = Ne = o[b + 2]) * Yt),
        (Gt += (v.a = te = o[b + 3]) * Yt),
        (ea += Re),
        (Kr += Ie),
        (Zr += Ne),
        (Jr += te),
        (v = v.next),
        Ht < l && (pn += r);
    }
    (b = We), (p = c), (y = d);
    for (var ta = 0; ta < i; ta++) {
      var re = b << 2;
      (o[re + 3] = te = (Gt * T) >> $),
        te > 0
          ? ((te = 255 / te),
            (o[re] = ((jt * T) >> $) * te),
            (o[re + 1] = ((Ut * T) >> $) * te),
            (o[re + 2] = ((zt * T) >> $) * te))
          : (o[re] = o[re + 1] = o[re + 2] = 0),
        (jt -= Xr),
        (Ut -= Wr),
        (zt -= qr),
        (Gt -= Qr),
        (Xr -= p.r),
        (Wr -= p.g),
        (qr -= p.b),
        (Qr -= p.a),
        (re = (We + ((re = ta + h) < l ? re : l) * r) << 2),
        (jt += ea += p.r = o[re]),
        (Ut += Kr += p.g = o[re + 1]),
        (zt += Zr += p.b = o[re + 2]),
        (Gt += Jr += p.a = o[re + 3]),
        (p = p.next),
        (Xr += Re = y.r),
        (Wr += Ie = y.g),
        (qr += Ne = y.b),
        (Qr += te = y.a),
        (ea -= Re),
        (Kr -= Ie),
        (Zr -= Ne),
        (Jr -= te),
        (y = y.next),
        (b += r);
    }
  }
  return a;
}
var So = function a() {
  jb(this, a),
    (this.r = 0),
    (this.g = 0),
    (this.b = 0),
    (this.a = 0),
    (this.next = null);
};
function Xb() {
  var { DOMParser: a } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    e = {
      window: null,
      ignoreAnimation: !0,
      ignoreMouse: !0,
      DOMParser: a,
      createCanvas(t, r) {
        return new OffscreenCanvas(t, r);
      },
      createImage(t) {
        return xe(function* () {
          var r = yield fetch(t),
            i = yield r.blob(),
            n = yield createImageBitmap(i);
          return n;
        })();
      },
    };
  return (
    (typeof DOMParser != "undefined" || typeof a == "undefined") &&
      Reflect.deleteProperty(e, "DOMParser"),
    e
  );
}
function Wb(a) {
  var { DOMParser: e, canvas: t, fetch: r } = a;
  return {
    window: null,
    ignoreAnimation: !0,
    ignoreMouse: !0,
    DOMParser: e,
    fetch: r,
    createCanvas: t.createCanvas,
    createImage: t.loadImage,
  };
}
var s2 = Object.freeze({ __proto__: null, offscreen: Xb, node: Wb });
function ct(a) {
  return a.replace(/(?!\u3000)\s+/gm, " ");
}
function qb(a) {
  return a.replace(/^[\n \t]+/, "");
}
function Qb(a) {
  return a.replace(/[\n \t]+$/, "");
}
function ie(a) {
  var e =
    (a || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
  return e.map(parseFloat);
}
var Kb = /^[A-Z-]+$/;
function Zb(a) {
  return Kb.test(a) ? a.toLowerCase() : a;
}
function yl(a) {
  var e = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(a) || [];
  return e[2] || e[3] || e[4];
}
function Jb(a) {
  if (!a.startsWith("rgb")) return a;
  var e = 3,
    t = a.replace(/\d+(\.\d+)?/g, (r, i) =>
      e-- && i ? String(Math.round(parseFloat(r))) : r
    );
  return t;
}
var e1 = /(\[[^\]]+\])/g,
  t1 = /(#[^\s+>~.[:]+)/g,
  r1 = /(\.[^\s+>~.[:]+)/g,
  a1 = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
  i1 = /(:[\w-]+\([^)]*\))/gi,
  n1 = /(:[^\s+>~.[:]+)/g,
  s1 = /([^\s+>~.[:]+)/g;
function De(a, e) {
  var t = e.exec(a);
  return t ? [a.replace(e, " "), t.length] : [a, 0];
}
function o1(a) {
  var e = [0, 0, 0],
    t = a.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "),
    r = 0;
  return (
    ([t, r] = De(t, e1)),
    (e[1] += r),
    ([t, r] = De(t, t1)),
    (e[0] += r),
    ([t, r] = De(t, r1)),
    (e[1] += r),
    ([t, r] = De(t, a1)),
    (e[2] += r),
    ([t, r] = De(t, i1)),
    (e[1] += r),
    ([t, r] = De(t, n1)),
    (e[1] += r),
    (t = t.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ")),
    ([t, r] = De(t, s1)),
    (e[2] += r),
    e.join("")
  );
}
var st = 1e-8;
function Oo(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2));
}
function Si(a, e) {
  return (a[0] * e[0] + a[1] * e[1]) / (Oo(a) * Oo(e));
}
function Eo(a, e) {
  return (a[0] * e[1] < a[1] * e[0] ? -1 : 1) * Math.acos(Si(a, e));
}
function $o(a) {
  return a * a * a;
}
function wo(a) {
  return 3 * a * a * (1 - a);
}
function Co(a) {
  return 3 * a * (1 - a) * (1 - a);
}
function Ao(a) {
  return (1 - a) * (1 - a) * (1 - a);
}
function Po(a) {
  return a * a;
}
function Ro(a) {
  return 2 * a * (1 - a);
}
function Io(a) {
  return (1 - a) * (1 - a);
}
class O {
  constructor(e, t, r) {
    (this.document = e),
      (this.name = t),
      (this.value = r),
      (this.isNormalizedColor = !1);
  }
  static empty(e) {
    return new O(e, "EMPTY", "");
  }
  split() {
    var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ",
      { document: t, name: r } = this;
    return ct(this.getString())
      .trim()
      .split(e)
      .map((i) => new O(t, r, i));
  }
  hasValue(e) {
    var { value: t } = this;
    return t !== null && t !== "" && (e || t !== 0) && typeof t != "undefined";
  }
  isString(e) {
    var { value: t } = this,
      r = typeof t == "string";
    return !r || !e ? r : e.test(t);
  }
  isUrlDefinition() {
    return this.isString(/^url\(/);
  }
  isPixels() {
    if (!this.hasValue()) return !1;
    var e = this.getString();
    switch (!0) {
      case e.endsWith("px"):
      case /^[0-9]+$/.test(e):
        return !0;
      default:
        return !1;
    }
  }
  setValue(e) {
    return (this.value = e), this;
  }
  getValue(e) {
    return typeof e == "undefined" || this.hasValue() ? this.value : e;
  }
  getNumber(e) {
    if (!this.hasValue()) return typeof e == "undefined" ? 0 : parseFloat(e);
    var { value: t } = this,
      r = parseFloat(t);
    return this.isString(/%$/) && (r /= 100), r;
  }
  getString(e) {
    return typeof e == "undefined" || this.hasValue()
      ? typeof this.value == "undefined"
        ? ""
        : String(this.value)
      : String(e);
  }
  getColor(e) {
    var t = this.getString(e);
    return (
      this.isNormalizedColor ||
        ((this.isNormalizedColor = !0), (t = Jb(t)), (this.value = t)),
      t
    );
  }
  getDpi() {
    return 96;
  }
  getRem() {
    return this.document.rootEmSize;
  }
  getEm() {
    return this.document.emSize;
  }
  getUnits() {
    return this.getString().replace(/[0-9.-]/g, "");
  }
  getPixels(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!this.hasValue()) return 0;
    var [r, i] = typeof e == "boolean" ? [void 0, e] : [e],
      { viewPort: n } = this.document.screen;
    switch (!0) {
      case this.isString(/vmin$/):
        return (
          (this.getNumber() / 100) *
          Math.min(n.computeSize("x"), n.computeSize("y"))
        );
      case this.isString(/vmax$/):
        return (
          (this.getNumber() / 100) *
          Math.max(n.computeSize("x"), n.computeSize("y"))
        );
      case this.isString(/vw$/):
        return (this.getNumber() / 100) * n.computeSize("x");
      case this.isString(/vh$/):
        return (this.getNumber() / 100) * n.computeSize("y");
      case this.isString(/rem$/):
        return this.getNumber() * this.getRem();
      case this.isString(/em$/):
        return this.getNumber() * this.getEm();
      case this.isString(/ex$/):
        return (this.getNumber() * this.getEm()) / 2;
      case this.isString(/px$/):
        return this.getNumber();
      case this.isString(/pt$/):
        return this.getNumber() * this.getDpi() * (1 / 72);
      case this.isString(/pc$/):
        return this.getNumber() * 15;
      case this.isString(/cm$/):
        return (this.getNumber() * this.getDpi()) / 2.54;
      case this.isString(/mm$/):
        return (this.getNumber() * this.getDpi()) / 25.4;
      case this.isString(/in$/):
        return this.getNumber() * this.getDpi();
      case this.isString(/%$/) && i:
        return this.getNumber() * this.getEm();
      case this.isString(/%$/):
        return this.getNumber() * n.computeSize(r);
      default: {
        var o = this.getNumber();
        return t && o < 1 ? o * n.computeSize(r) : o;
      }
    }
  }
  getMilliseconds() {
    return this.hasValue()
      ? this.isString(/ms$/)
        ? this.getNumber()
        : this.getNumber() * 1e3
      : 0;
  }
  getRadians() {
    if (!this.hasValue()) return 0;
    switch (!0) {
      case this.isString(/deg$/):
        return this.getNumber() * (Math.PI / 180);
      case this.isString(/grad$/):
        return this.getNumber() * (Math.PI / 200);
      case this.isString(/rad$/):
        return this.getNumber();
      default:
        return this.getNumber() * (Math.PI / 180);
    }
  }
  getDefinition() {
    var e = this.getString(),
      t = /#([^)'"]+)/.exec(e);
    return t && (t = t[1]), t || (t = e), this.document.definitions[t];
  }
  getFillStyleDefinition(e, t) {
    var r = this.getDefinition();
    if (!r) return null;
    if (typeof r.createGradient == "function")
      return r.createGradient(this.document.ctx, e, t);
    if (typeof r.createPattern == "function") {
      if (r.getHrefAttribute().hasValue()) {
        var i = r.getAttribute("patternTransform");
        (r = r.getHrefAttribute().getDefinition()),
          i.hasValue() &&
            r.getAttribute("patternTransform", !0).setValue(i.value);
      }
      return r.createPattern(this.document.ctx, e, t);
    }
    return null;
  }
  getTextBaseline() {
    return this.hasValue() ? O.textBaselineMapping[this.getString()] : null;
  }
  addOpacity(e) {
    for (
      var t = this.getColor(), r = t.length, i = 0, n = 0;
      n < r && (t[n] === "," && i++, i !== 3);
      n++
    );
    if (e.hasValue() && this.isString() && i !== 3) {
      var o = new bi(t);
      o.ok && ((o.alpha = e.getNumber()), (t = o.toRGBA()));
    }
    return new O(this.document, this.name, t);
  }
}
O.textBaselineMapping = {
  baseline: "alphabetic",
  "before-edge": "top",
  "text-before-edge": "top",
  middle: "middle",
  central: "middle",
  "after-edge": "bottom",
  "text-after-edge": "bottom",
  ideographic: "ideographic",
  alphabetic: "alphabetic",
  hanging: "hanging",
  mathematical: "alphabetic",
};
class u1 {
  constructor() {
    this.viewPorts = [];
  }
  clear() {
    this.viewPorts = [];
  }
  setCurrent(e, t) {
    this.viewPorts.push({ width: e, height: t });
  }
  removeCurrent() {
    this.viewPorts.pop();
  }
  getCurrent() {
    var { viewPorts: e } = this;
    return e[e.length - 1];
  }
  get width() {
    return this.getCurrent().width;
  }
  get height() {
    return this.getCurrent().height;
  }
  computeSize(e) {
    return typeof e == "number"
      ? e
      : e === "x"
      ? this.width
      : e === "y"
      ? this.height
      : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) /
        Math.sqrt(2);
  }
}
class V {
  constructor(e, t) {
    (this.x = e), (this.y = t);
  }
  static parse(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
      [r = t, i = t] = ie(e);
    return new V(r, i);
  }
  static parseScale(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1,
      [r = t, i = r] = ie(e);
    return new V(r, i);
  }
  static parsePath(e) {
    for (var t = ie(e), r = t.length, i = [], n = 0; n < r; n += 2)
      i.push(new V(t[n], t[n + 1]));
    return i;
  }
  angleTo(e) {
    return Math.atan2(e.y - this.y, e.x - this.x);
  }
  applyTransform(e) {
    var { x: t, y: r } = this,
      i = t * e[0] + r * e[2] + e[4],
      n = t * e[1] + r * e[3] + e[5];
    (this.x = i), (this.y = n);
  }
}
class l1 {
  constructor(e) {
    (this.screen = e),
      (this.working = !1),
      (this.events = []),
      (this.eventElements = []),
      (this.onClick = this.onClick.bind(this)),
      (this.onMouseMove = this.onMouseMove.bind(this));
  }
  isWorking() {
    return this.working;
  }
  start() {
    if (!this.working) {
      var { screen: e, onClick: t, onMouseMove: r } = this,
        i = e.ctx.canvas;
      (i.onclick = t), (i.onmousemove = r), (this.working = !0);
    }
  }
  stop() {
    if (!!this.working) {
      var e = this.screen.ctx.canvas;
      (this.working = !1), (e.onclick = null), (e.onmousemove = null);
    }
  }
  hasEvents() {
    return this.working && this.events.length > 0;
  }
  runEvents() {
    if (!!this.working) {
      var { screen: e, events: t, eventElements: r } = this,
        { style: i } = e.ctx.canvas;
      i && (i.cursor = ""),
        t.forEach((n, o) => {
          for (var { run: s } = n, u = r[o]; u; ) s(u), (u = u.parent);
        }),
        (this.events = []),
        (this.eventElements = []);
    }
  }
  checkPath(e, t) {
    if (!(!this.working || !t)) {
      var { events: r, eventElements: i } = this;
      r.forEach((n, o) => {
        var { x: s, y: u } = n;
        !i[o] && t.isPointInPath && t.isPointInPath(s, u) && (i[o] = e);
      });
    }
  }
  checkBoundingBox(e, t) {
    if (!(!this.working || !t)) {
      var { events: r, eventElements: i } = this;
      r.forEach((n, o) => {
        var { x: s, y: u } = n;
        !i[o] && t.isPointInBox(s, u) && (i[o] = e);
      });
    }
  }
  mapXY(e, t) {
    for (
      var { window: r, ctx: i } = this.screen, n = new V(e, t), o = i.canvas;
      o;

    )
      (n.x -= o.offsetLeft), (n.y -= o.offsetTop), (o = o.offsetParent);
    return r.scrollX && (n.x += r.scrollX), r.scrollY && (n.y += r.scrollY), n;
  }
  onClick(e) {
    var { x: t, y: r } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onclick",
      x: t,
      y: r,
      run(i) {
        i.onClick && i.onClick();
      },
    });
  }
  onMouseMove(e) {
    var { x: t, y: r } = this.mapXY(e.clientX, e.clientY);
    this.events.push({
      type: "onmousemove",
      x: t,
      y: r,
      run(i) {
        i.onMouseMove && i.onMouseMove();
      },
    });
  }
}
var ml = typeof window != "undefined" ? window : null,
  bl = typeof fetch != "undefined" ? fetch.bind(void 0) : null;
class Fr {
  constructor(e) {
    var { fetch: t = bl, window: r = ml } =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.ctx = e),
      (this.FRAMERATE = 30),
      (this.MAX_VIRTUAL_PIXELS = 3e4),
      (this.CLIENT_WIDTH = 800),
      (this.CLIENT_HEIGHT = 600),
      (this.viewPort = new u1()),
      (this.mouse = new l1(this)),
      (this.animations = []),
      (this.waits = []),
      (this.frameDuration = 0),
      (this.isReadyLock = !1),
      (this.isFirstRender = !0),
      (this.intervalId = null),
      (this.window = r),
      (this.fetch = t);
  }
  wait(e) {
    this.waits.push(e);
  }
  ready() {
    return this.readyPromise ? this.readyPromise : Promise.resolve();
  }
  isReady() {
    if (this.isReadyLock) return !0;
    var e = this.waits.every((t) => t());
    return (
      e && ((this.waits = []), this.resolveReady && this.resolveReady()),
      (this.isReadyLock = e),
      e
    );
  }
  setDefaults(e) {
    (e.strokeStyle = "rgba(0,0,0,0)"),
      (e.lineCap = "butt"),
      (e.lineJoin = "miter"),
      (e.miterLimit = 4);
  }
  setViewBox(e) {
    var {
        document: t,
        ctx: r,
        aspectRatio: i,
        width: n,
        desiredWidth: o,
        height: s,
        desiredHeight: u,
        minX: l = 0,
        minY: h = 0,
        refX: f,
        refY: c,
        clip: v = !1,
        clipX: d = 0,
        clipY: g = 0,
      } = e,
      p = ct(i).replace(/^defer\s/, ""),
      [y, x] = p.split(" "),
      b = y || "xMidYMid",
      T = x || "meet",
      $ = n / o,
      E = s / u,
      S = Math.min($, E),
      C = Math.max($, E),
      N = o,
      _ = u;
    T === "meet" && ((N *= S), (_ *= S)), T === "slice" && ((N *= C), (_ *= C));
    var B = new O(t, "refX", f),
      P = new O(t, "refY", c),
      X = B.hasValue() && P.hasValue();
    if ((X && r.translate(-S * B.getPixels("x"), -S * P.getPixels("y")), v)) {
      var W = S * d,
        z = S * g;
      r.beginPath(),
        r.moveTo(W, z),
        r.lineTo(n, z),
        r.lineTo(n, s),
        r.lineTo(W, s),
        r.closePath(),
        r.clip();
    }
    if (!X) {
      var q = T === "meet" && S === E,
        H = T === "slice" && C === E,
        Q = T === "meet" && S === $,
        R = T === "slice" && C === $;
      b.startsWith("xMid") && (q || H) && r.translate(n / 2 - N / 2, 0),
        b.endsWith("YMid") && (Q || R) && r.translate(0, s / 2 - _ / 2),
        b.startsWith("xMax") && (q || H) && r.translate(n - N, 0),
        b.endsWith("YMax") && (Q || R) && r.translate(0, s - _);
    }
    switch (!0) {
      case b === "none":
        r.scale($, E);
        break;
      case T === "meet":
        r.scale(S, S);
        break;
      case T === "slice":
        r.scale(C, C);
        break;
    }
    r.translate(-l, -h);
  }
  start(e) {
    var {
        enableRedraw: t = !1,
        ignoreMouse: r = !1,
        ignoreAnimation: i = !1,
        ignoreDimensions: n = !1,
        ignoreClear: o = !1,
        forceRedraw: s,
        scaleWidth: u,
        scaleHeight: l,
        offsetX: h,
        offsetY: f,
      } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      { FRAMERATE: c, mouse: v } = this,
      d = 1e3 / c;
    if (
      ((this.frameDuration = d),
      (this.readyPromise = new Promise((b) => {
        this.resolveReady = b;
      })),
      this.isReady() && this.render(e, n, o, u, l, h, f),
      !!t)
    ) {
      var g = Date.now(),
        p = g,
        y = 0,
        x = () => {
          (g = Date.now()),
            (y = g - p),
            y >= d &&
              ((p = g - (y % d)),
              this.shouldUpdate(i, s) &&
                (this.render(e, n, o, u, l, h, f), v.runEvents())),
            (this.intervalId = Ga(x));
        };
      r || v.start(), (this.intervalId = Ga(x));
    }
  }
  stop() {
    this.intervalId && (Ga.cancel(this.intervalId), (this.intervalId = null)),
      this.mouse.stop();
  }
  shouldUpdate(e, t) {
    if (!e) {
      var { frameDuration: r } = this,
        i = this.animations.reduce((n, o) => o.update(r) || n, !1);
      if (i) return !0;
    }
    return !!(
      (typeof t == "function" && t()) ||
      (!this.isReadyLock && this.isReady()) ||
      this.mouse.hasEvents()
    );
  }
  render(e, t, r, i, n, o, s) {
    var {
        CLIENT_WIDTH: u,
        CLIENT_HEIGHT: l,
        viewPort: h,
        ctx: f,
        isFirstRender: c,
      } = this,
      v = f.canvas;
    h.clear(),
      v.width && v.height
        ? h.setCurrent(v.width, v.height)
        : h.setCurrent(u, l);
    var d = e.getStyle("width"),
      g = e.getStyle("height");
    !t &&
      (c || (typeof i != "number" && typeof n != "number")) &&
      (d.hasValue() &&
        ((v.width = d.getPixels("x")),
        v.style && (v.style.width = "".concat(v.width, "px"))),
      g.hasValue() &&
        ((v.height = g.getPixels("y")),
        v.style && (v.style.height = "".concat(v.height, "px"))));
    var p = v.clientWidth || v.width,
      y = v.clientHeight || v.height;
    if (
      (t &&
        d.hasValue() &&
        g.hasValue() &&
        ((p = d.getPixels("x")), (y = g.getPixels("y"))),
      h.setCurrent(p, y),
      typeof o == "number" && e.getAttribute("x", !0).setValue(o),
      typeof s == "number" && e.getAttribute("y", !0).setValue(s),
      typeof i == "number" || typeof n == "number")
    ) {
      var x = ie(e.getAttribute("viewBox").getString()),
        b = 0,
        T = 0;
      if (typeof i == "number") {
        var $ = e.getStyle("width");
        $.hasValue()
          ? (b = $.getPixels("x") / i)
          : isNaN(x[2]) || (b = x[2] / i);
      }
      if (typeof n == "number") {
        var E = e.getStyle("height");
        E.hasValue()
          ? (T = E.getPixels("y") / n)
          : isNaN(x[3]) || (T = x[3] / n);
      }
      b || (b = T),
        T || (T = b),
        e.getAttribute("width", !0).setValue(i),
        e.getAttribute("height", !0).setValue(n);
      var S = e.getStyle("transform", !0, !0);
      S.setValue(
        ""
          .concat(S.getString(), " scale(")
          .concat(1 / b, ", ")
          .concat(1 / T, ")")
      );
    }
    r || f.clearRect(0, 0, p, y), e.render(f), c && (this.isFirstRender = !1);
  }
}
Fr.defaultWindow = ml;
Fr.defaultFetch = bl;
var { defaultFetch: h1 } = Fr,
  v1 = typeof DOMParser != "undefined" ? DOMParser : null;
class Xa {
  constructor() {
    var { fetch: e = h1, DOMParser: t = v1 } =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.fetch = e), (this.DOMParser = t);
  }
  parse(e) {
    var t = this;
    return xe(function* () {
      return e.startsWith("<") ? t.parseFromString(e) : t.load(e);
    })();
  }
  parseFromString(e) {
    var t = new this.DOMParser();
    try {
      return this.checkDocument(t.parseFromString(e, "image/svg+xml"));
    } catch {
      return this.checkDocument(t.parseFromString(e, "text/xml"));
    }
  }
  checkDocument(e) {
    var t = e.getElementsByTagName("parsererror")[0];
    if (t) throw new Error(t.textContent);
    return e;
  }
  load(e) {
    var t = this;
    return xe(function* () {
      var r = yield t.fetch(e),
        i = yield r.text();
      return t.parseFromString(i);
    })();
  }
}
class f1 {
  constructor(e, t) {
    (this.type = "translate"), (this.point = null), (this.point = V.parse(t));
  }
  apply(e) {
    var { x: t, y: r } = this.point;
    e.translate(t || 0, r || 0);
  }
  unapply(e) {
    var { x: t, y: r } = this.point;
    e.translate(-1 * t || 0, -1 * r || 0);
  }
  applyToPoint(e) {
    var { x: t, y: r } = this.point;
    e.applyTransform([1, 0, 0, 1, t || 0, r || 0]);
  }
}
class c1 {
  constructor(e, t, r) {
    (this.type = "rotate"),
      (this.angle = null),
      (this.originX = null),
      (this.originY = null),
      (this.cx = 0),
      (this.cy = 0);
    var i = ie(t);
    (this.angle = new O(e, "angle", i[0])),
      (this.originX = r[0]),
      (this.originY = r[1]),
      (this.cx = i[1] || 0),
      (this.cy = i[2] || 0);
  }
  apply(e) {
    var { cx: t, cy: r, originX: i, originY: n, angle: o } = this,
      s = t + i.getPixels("x"),
      u = r + n.getPixels("y");
    e.translate(s, u), e.rotate(o.getRadians()), e.translate(-s, -u);
  }
  unapply(e) {
    var { cx: t, cy: r, originX: i, originY: n, angle: o } = this,
      s = t + i.getPixels("x"),
      u = r + n.getPixels("y");
    e.translate(s, u), e.rotate(-1 * o.getRadians()), e.translate(-s, -u);
  }
  applyToPoint(e) {
    var { cx: t, cy: r, angle: i } = this,
      n = i.getRadians();
    e.applyTransform([1, 0, 0, 1, t || 0, r || 0]),
      e.applyTransform([
        Math.cos(n),
        Math.sin(n),
        -Math.sin(n),
        Math.cos(n),
        0,
        0,
      ]),
      e.applyTransform([1, 0, 0, 1, -t || 0, -r || 0]);
  }
}
class g1 {
  constructor(e, t, r) {
    (this.type = "scale"),
      (this.scale = null),
      (this.originX = null),
      (this.originY = null);
    var i = V.parseScale(t);
    (i.x === 0 || i.y === 0) && ((i.x = st), (i.y = st)),
      (this.scale = i),
      (this.originX = r[0]),
      (this.originY = r[1]);
  }
  apply(e) {
    var {
        scale: { x: t, y: r },
        originX: i,
        originY: n,
      } = this,
      o = i.getPixels("x"),
      s = n.getPixels("y");
    e.translate(o, s), e.scale(t, r || t), e.translate(-o, -s);
  }
  unapply(e) {
    var {
        scale: { x: t, y: r },
        originX: i,
        originY: n,
      } = this,
      o = i.getPixels("x"),
      s = n.getPixels("y");
    e.translate(o, s), e.scale(1 / t, 1 / r || t), e.translate(-o, -s);
  }
  applyToPoint(e) {
    var { x: t, y: r } = this.scale;
    e.applyTransform([t || 0, 0, 0, r || 0, 0, 0]);
  }
}
class xl {
  constructor(e, t, r) {
    (this.type = "matrix"),
      (this.matrix = []),
      (this.originX = null),
      (this.originY = null),
      (this.matrix = ie(t)),
      (this.originX = r[0]),
      (this.originY = r[1]);
  }
  apply(e) {
    var { originX: t, originY: r, matrix: i } = this,
      n = t.getPixels("x"),
      o = r.getPixels("y");
    e.translate(n, o),
      e.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
      e.translate(-n, -o);
  }
  unapply(e) {
    var { originX: t, originY: r, matrix: i } = this,
      n = i[0],
      o = i[2],
      s = i[4],
      u = i[1],
      l = i[3],
      h = i[5],
      f = 0,
      c = 0,
      v = 1,
      d = 1 / (n * (l * v - h * c) - o * (u * v - h * f) + s * (u * c - l * f)),
      g = t.getPixels("x"),
      p = r.getPixels("y");
    e.translate(g, p),
      e.transform(
        d * (l * v - h * c),
        d * (h * f - u * v),
        d * (s * c - o * v),
        d * (n * v - s * f),
        d * (o * h - s * l),
        d * (s * u - n * h)
      ),
      e.translate(-g, -p);
  }
  applyToPoint(e) {
    e.applyTransform(this.matrix);
  }
}
class Tl extends xl {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "skew"),
      (this.angle = null),
      (this.angle = new O(e, "angle", t));
  }
}
class d1 extends Tl {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "skewX"),
      (this.matrix = [1, 0, Math.tan(this.angle.getRadians()), 1, 0, 0]);
  }
}
class p1 extends Tl {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "skewY"),
      (this.matrix = [1, Math.tan(this.angle.getRadians()), 0, 1, 0, 0]);
  }
}
function y1(a) {
  return ct(a)
    .trim()
    .replace(/\)([a-zA-Z])/g, ") $1")
    .replace(/\)(\s?,\s?)/g, ") ")
    .split(/\s(?=[a-z])/);
}
function m1(a) {
  var [e, t] = a.split("(");
  return [e.trim(), t.trim().replace(")", "")];
}
class Ue {
  constructor(e, t, r) {
    (this.document = e), (this.transforms = []);
    var i = y1(t);
    i.forEach((n) => {
      if (n !== "none") {
        var [o, s] = m1(n),
          u = Ue.transformTypes[o];
        typeof u != "undefined" &&
          this.transforms.push(new u(this.document, s, r));
      }
    });
  }
  static fromElement(e, t) {
    var r = t.getStyle("transform", !1, !0),
      [i, n = i] = t.getStyle("transform-origin", !1, !0).split(),
      o = [i, n];
    return r.hasValue() ? new Ue(e, r.getString(), o) : null;
  }
  apply(e) {
    for (var { transforms: t } = this, r = t.length, i = 0; i < r; i++)
      t[i].apply(e);
  }
  unapply(e) {
    for (var { transforms: t } = this, r = t.length, i = r - 1; i >= 0; i--)
      t[i].unapply(e);
  }
  applyToPoint(e) {
    for (var { transforms: t } = this, r = t.length, i = 0; i < r; i++)
      t[i].applyToPoint(e);
  }
}
Ue.transformTypes = {
  translate: f1,
  rotate: c1,
  scale: g1,
  matrix: xl,
  skewX: d1,
  skewY: p1,
};
class I {
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    if (
      ((this.document = e),
      (this.node = t),
      (this.captureTextNodes = r),
      (this.attributes = {}),
      (this.styles = {}),
      (this.stylesSpecificity = {}),
      (this.animationFrozen = !1),
      (this.animationFrozenValue = ""),
      (this.parent = null),
      (this.children = []),
      !(!t || t.nodeType !== 1))
    ) {
      if (
        (Array.from(t.attributes).forEach((s) => {
          var u = Zb(s.nodeName);
          this.attributes[u] = new O(e, u, s.value);
        }),
        this.addStylesFromStyleDefinition(),
        this.getAttribute("style").hasValue())
      ) {
        var i = this.getAttribute("style")
          .getString()
          .split(";")
          .map((s) => s.trim());
        i.forEach((s) => {
          if (!!s) {
            var [u, l] = s.split(":").map((h) => h.trim());
            this.styles[u] = new O(e, u, l);
          }
        });
      }
      var { definitions: n } = e,
        o = this.getAttribute("id");
      o.hasValue() && (n[o.getString()] || (n[o.getString()] = this)),
        Array.from(t.childNodes).forEach((s) => {
          if (s.nodeType === 1) this.addChild(s);
          else if (r && (s.nodeType === 3 || s.nodeType === 4)) {
            var u = e.createTextNode(s);
            u.getText().length > 0 && this.addChild(u);
          }
        });
    }
  }
  getAttribute(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = this.attributes[e];
    if (!r && t) {
      var i = new O(this.document, e, "");
      return (this.attributes[e] = i), i;
    }
    return r || O.empty(this.document);
  }
  getHrefAttribute() {
    for (var e in this.attributes)
      if (e === "href" || e.endsWith(":href")) return this.attributes[e];
    return O.empty(this.document);
  }
  getStyle(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      i = this.styles[e];
    if (i) return i;
    var n = this.getAttribute(e);
    if (n != null && n.hasValue()) return (this.styles[e] = n), n;
    if (!r) {
      var { parent: o } = this;
      if (o) {
        var s = o.getStyle(e);
        if (s != null && s.hasValue()) return s;
      }
    }
    if (t) {
      var u = new O(this.document, e, "");
      return (this.styles[e] = u), u;
    }
    return i || O.empty(this.document);
  }
  render(e) {
    if (
      !(
        this.getStyle("display").getString() === "none" ||
        this.getStyle("visibility").getString() === "hidden"
      )
    ) {
      if ((e.save(), this.getStyle("mask").hasValue())) {
        var t = this.getStyle("mask").getDefinition();
        t && (this.applyEffects(e), t.apply(e, this));
      } else if (this.getStyle("filter").getValue("none") !== "none") {
        var r = this.getStyle("filter").getDefinition();
        r && (this.applyEffects(e), r.apply(e, this));
      } else this.setContext(e), this.renderChildren(e), this.clearContext(e);
      e.restore();
    }
  }
  setContext(e) {}
  applyEffects(e) {
    var t = Ue.fromElement(this.document, this);
    t && t.apply(e);
    var r = this.getStyle("clip-path", !1, !0);
    if (r.hasValue()) {
      var i = r.getDefinition();
      i && i.apply(e);
    }
  }
  clearContext(e) {}
  renderChildren(e) {
    this.children.forEach((t) => {
      t.render(e);
    });
  }
  addChild(e) {
    var t = e instanceof I ? e : this.document.createElement(e);
    (t.parent = this),
      I.ignoreChildTypes.includes(t.type) || this.children.push(t);
  }
  matchesSelector(e) {
    var t,
      { node: r } = this;
    if (typeof r.matches == "function") return r.matches(e);
    var i =
      (t = r.getAttribute) === null || t === void 0
        ? void 0
        : t.call(r, "class");
    return !i || i === "" ? !1 : i.split(" ").some((n) => ".".concat(n) === e);
  }
  addStylesFromStyleDefinition() {
    var { styles: e, stylesSpecificity: t } = this.document;
    for (var r in e)
      if (!r.startsWith("@") && this.matchesSelector(r)) {
        var i = e[r],
          n = t[r];
        if (i)
          for (var o in i) {
            var s = this.stylesSpecificity[o];
            typeof s == "undefined" && (s = "000"),
              n >= s &&
                ((this.styles[o] = i[o]), (this.stylesSpecificity[o] = n));
          }
      }
  }
  removeStyles(e, t) {
    var r = t.reduce((i, n) => {
      var o = e.getStyle(n);
      if (!o.hasValue()) return i;
      var s = o.getString();
      return o.setValue(""), [...i, [n, s]];
    }, []);
    return r;
  }
  restoreStyles(e, t) {
    t.forEach((r) => {
      var [i, n] = r;
      e.getStyle(i, !0).setValue(n);
    });
  }
  isFirstChild() {
    var e;
    return (
      ((e = this.parent) === null || e === void 0
        ? void 0
        : e.children.indexOf(this)) === 0
    );
  }
}
I.ignoreChildTypes = ["title"];
class b1 extends I {
  constructor(e, t, r) {
    super(e, t, r);
  }
}
function x1(a) {
  var e = a.trim();
  return /^('|")/.test(e) ? e : '"'.concat(e, '"');
}
function T1(a) {
  return typeof process == "undefined"
    ? a
    : a.trim().split(",").map(x1).join(",");
}
function S1(a) {
  if (!a) return "";
  var e = a.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "italic":
    case "oblique":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^oblique\s+(-|)\d+deg$/.test(e) ? e : "";
  }
}
function O1(a) {
  if (!a) return "";
  var e = a.trim().toLowerCase();
  switch (e) {
    case "normal":
    case "bold":
    case "lighter":
    case "bolder":
    case "inherit":
    case "initial":
    case "unset":
      return e;
    default:
      return /^[\d.]+$/.test(e) ? e : "";
  }
}
class J {
  constructor(e, t, r, i, n, o) {
    var s = o ? (typeof o == "string" ? J.parse(o) : o) : {};
    (this.fontFamily = n || s.fontFamily),
      (this.fontSize = i || s.fontSize),
      (this.fontStyle = e || s.fontStyle),
      (this.fontWeight = r || s.fontWeight),
      (this.fontVariant = t || s.fontVariant);
  }
  static parse() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
      t = arguments.length > 1 ? arguments[1] : void 0,
      r = "",
      i = "",
      n = "",
      o = "",
      s = "",
      u = ct(e).trim().split(" "),
      l = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 };
    return (
      u.forEach((h) => {
        switch (!0) {
          case !l.fontStyle && J.styles.includes(h):
            h !== "inherit" && (r = h), (l.fontStyle = !0);
            break;
          case !l.fontVariant && J.variants.includes(h):
            h !== "inherit" && (i = h),
              (l.fontStyle = !0),
              (l.fontVariant = !0);
            break;
          case !l.fontWeight && J.weights.includes(h):
            h !== "inherit" && (n = h),
              (l.fontStyle = !0),
              (l.fontVariant = !0),
              (l.fontWeight = !0);
            break;
          case !l.fontSize:
            h !== "inherit" && ([o] = h.split("/")),
              (l.fontStyle = !0),
              (l.fontVariant = !0),
              (l.fontWeight = !0),
              (l.fontSize = !0);
            break;
          default:
            h !== "inherit" && (s += h);
        }
      }),
      new J(r, i, n, o, s, t)
    );
  }
  toString() {
    return [
      S1(this.fontStyle),
      this.fontVariant,
      O1(this.fontWeight),
      this.fontSize,
      T1(this.fontFamily),
    ]
      .join(" ")
      .trim();
  }
}
J.styles = "normal|italic|oblique|inherit";
J.variants = "normal|small-caps|inherit";
J.weights =
  "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
class he {
  constructor() {
    var e =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : Number.NaN,
      t =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : Number.NaN,
      r =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : Number.NaN,
      i =
        arguments.length > 3 && arguments[3] !== void 0
          ? arguments[3]
          : Number.NaN;
    (this.x1 = e),
      (this.y1 = t),
      (this.x2 = r),
      (this.y2 = i),
      this.addPoint(e, t),
      this.addPoint(r, i);
  }
  get x() {
    return this.x1;
  }
  get y() {
    return this.y1;
  }
  get width() {
    return this.x2 - this.x1;
  }
  get height() {
    return this.y2 - this.y1;
  }
  addPoint(e, t) {
    typeof e != "undefined" &&
      ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = e), (this.x2 = e)),
      e < this.x1 && (this.x1 = e),
      e > this.x2 && (this.x2 = e)),
      typeof t != "undefined" &&
        ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = t), (this.y2 = t)),
        t < this.y1 && (this.y1 = t),
        t > this.y2 && (this.y2 = t));
  }
  addX(e) {
    this.addPoint(e, null);
  }
  addY(e) {
    this.addPoint(null, e);
  }
  addBoundingBox(e) {
    if (!!e) {
      var { x1: t, y1: r, x2: i, y2: n } = e;
      this.addPoint(t, r), this.addPoint(i, n);
    }
  }
  sumCubic(e, t, r, i, n) {
    return (
      Math.pow(1 - e, 3) * t +
      3 * Math.pow(1 - e, 2) * e * r +
      3 * (1 - e) * Math.pow(e, 2) * i +
      Math.pow(e, 3) * n
    );
  }
  bezierCurveAdd(e, t, r, i, n) {
    var o = 6 * t - 12 * r + 6 * i,
      s = -3 * t + 9 * r - 9 * i + 3 * n,
      u = 3 * r - 3 * t;
    if (s === 0) {
      if (o === 0) return;
      var l = -u / o;
      0 < l &&
        l < 1 &&
        (e
          ? this.addX(this.sumCubic(l, t, r, i, n))
          : this.addY(this.sumCubic(l, t, r, i, n)));
      return;
    }
    var h = Math.pow(o, 2) - 4 * u * s;
    if (!(h < 0)) {
      var f = (-o + Math.sqrt(h)) / (2 * s);
      0 < f &&
        f < 1 &&
        (e
          ? this.addX(this.sumCubic(f, t, r, i, n))
          : this.addY(this.sumCubic(f, t, r, i, n)));
      var c = (-o - Math.sqrt(h)) / (2 * s);
      0 < c &&
        c < 1 &&
        (e
          ? this.addX(this.sumCubic(c, t, r, i, n))
          : this.addY(this.sumCubic(c, t, r, i, n)));
    }
  }
  addBezierCurve(e, t, r, i, n, o, s, u) {
    this.addPoint(e, t),
      this.addPoint(s, u),
      this.bezierCurveAdd(!0, e, r, n, s),
      this.bezierCurveAdd(!1, t, i, o, u);
  }
  addQuadraticCurve(e, t, r, i, n, o) {
    var s = e + 0.6666666666666666 * (r - e),
      u = t + (2 / 3) * (i - t),
      l = s + (1 / 3) * (n - e),
      h = u + (1 / 3) * (o - t);
    this.addBezierCurve(e, t, s, l, u, h, n, o);
  }
  isPointInBox(e, t) {
    var { x1: r, y1: i, x2: n, y2: o } = this;
    return r <= e && e <= n && i <= t && t <= o;
  }
}
class w extends m {
  constructor(e) {
    super(
      e
        .replace(/([+\-.])\s+/gm, "$1")
        .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, "")
    ),
      (this.control = null),
      (this.start = null),
      (this.current = null),
      (this.command = null),
      (this.commands = this.commands),
      (this.i = -1),
      (this.previousCommand = null),
      (this.points = []),
      (this.angles = []);
  }
  reset() {
    (this.i = -1),
      (this.command = null),
      (this.previousCommand = null),
      (this.start = new V(0, 0)),
      (this.control = new V(0, 0)),
      (this.current = new V(0, 0)),
      (this.points = []),
      (this.angles = []);
  }
  isEnd() {
    var { i: e, commands: t } = this;
    return e >= t.length - 1;
  }
  next() {
    var e = this.commands[++this.i];
    return (this.previousCommand = this.command), (this.command = e), e;
  }
  getPoint() {
    var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x",
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y",
      r = new V(this.command[e], this.command[t]);
    return this.makeAbsolute(r);
  }
  getAsControlPoint(e, t) {
    var r = this.getPoint(e, t);
    return (this.control = r), r;
  }
  getAsCurrentPoint(e, t) {
    var r = this.getPoint(e, t);
    return (this.current = r), r;
  }
  getReflectedControlPoint() {
    var e = this.previousCommand.type;
    if (
      e !== m.CURVE_TO &&
      e !== m.SMOOTH_CURVE_TO &&
      e !== m.QUAD_TO &&
      e !== m.SMOOTH_QUAD_TO
    )
      return this.current;
    var {
        current: { x: t, y: r },
        control: { x: i, y: n },
      } = this,
      o = new V(2 * t - i, 2 * r - n);
    return o;
  }
  makeAbsolute(e) {
    if (this.command.relative) {
      var { x: t, y: r } = this.current;
      (e.x += t), (e.y += r);
    }
    return e;
  }
  addMarker(e, t, r) {
    var { points: i, angles: n } = this;
    r &&
      n.length > 0 &&
      !n[n.length - 1] &&
      (n[n.length - 1] = i[i.length - 1].angleTo(r)),
      this.addMarkerAngle(e, t ? t.angleTo(e) : null);
  }
  addMarkerAngle(e, t) {
    this.points.push(e), this.angles.push(t);
  }
  getMarkerPoints() {
    return this.points;
  }
  getMarkerAngles() {
    for (var { angles: e } = this, t = e.length, r = 0; r < t; r++)
      if (!e[r]) {
        for (var i = r + 1; i < t; i++)
          if (e[i]) {
            e[r] = e[i];
            break;
          }
      }
    return e;
  }
}
class Ye extends I {
  constructor() {
    super(...arguments), (this.modifiedEmSizeStack = !1);
  }
  calculateOpacity() {
    for (var e = 1, t = this; t; ) {
      var r = t.getStyle("opacity", !1, !0);
      r.hasValue(!0) && (e *= r.getNumber()), (t = t.parent);
    }
    return e;
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!t) {
      var r = this.getStyle("fill"),
        i = this.getStyle("fill-opacity"),
        n = this.getStyle("stroke"),
        o = this.getStyle("stroke-opacity");
      if (r.isUrlDefinition()) {
        var s = r.getFillStyleDefinition(this, i);
        s && (e.fillStyle = s);
      } else if (r.hasValue()) {
        r.getString() === "currentColor" &&
          r.setValue(this.getStyle("color").getColor());
        var u = r.getColor();
        u !== "inherit" && (e.fillStyle = u === "none" ? "rgba(0,0,0,0)" : u);
      }
      if (i.hasValue()) {
        var l = new O(this.document, "fill", e.fillStyle)
          .addOpacity(i)
          .getColor();
        e.fillStyle = l;
      }
      if (n.isUrlDefinition()) {
        var h = n.getFillStyleDefinition(this, o);
        h && (e.strokeStyle = h);
      } else if (n.hasValue()) {
        n.getString() === "currentColor" &&
          n.setValue(this.getStyle("color").getColor());
        var f = n.getString();
        f !== "inherit" && (e.strokeStyle = f === "none" ? "rgba(0,0,0,0)" : f);
      }
      if (o.hasValue()) {
        var c = new O(this.document, "stroke", e.strokeStyle)
          .addOpacity(o)
          .getString();
        e.strokeStyle = c;
      }
      var v = this.getStyle("stroke-width");
      if (v.hasValue()) {
        var d = v.getPixels();
        e.lineWidth = d || st;
      }
      var g = this.getStyle("stroke-linecap"),
        p = this.getStyle("stroke-linejoin"),
        y = this.getStyle("stroke-miterlimit"),
        x = this.getStyle("stroke-dasharray"),
        b = this.getStyle("stroke-dashoffset");
      if (
        (g.hasValue() && (e.lineCap = g.getString()),
        p.hasValue() && (e.lineJoin = p.getString()),
        y.hasValue() && (e.miterLimit = y.getNumber()),
        x.hasValue() && x.getString() !== "none")
      ) {
        var T = ie(x.getString());
        typeof e.setLineDash != "undefined"
          ? e.setLineDash(T)
          : typeof e.webkitLineDash != "undefined"
          ? (e.webkitLineDash = T)
          : typeof e.mozDash != "undefined" &&
            !(T.length === 1 && T[0] === 0) &&
            (e.mozDash = T);
        var $ = b.getPixels();
        typeof e.lineDashOffset != "undefined"
          ? (e.lineDashOffset = $)
          : typeof e.webkitLineDashOffset != "undefined"
          ? (e.webkitLineDashOffset = $)
          : typeof e.mozDashOffset != "undefined" && (e.mozDashOffset = $);
      }
    }
    if (((this.modifiedEmSizeStack = !1), typeof e.font != "undefined")) {
      var E = this.getStyle("font"),
        S = this.getStyle("font-style"),
        C = this.getStyle("font-variant"),
        N = this.getStyle("font-weight"),
        _ = this.getStyle("font-size"),
        B = this.getStyle("font-family"),
        P = new J(
          S.getString(),
          C.getString(),
          N.getString(),
          _.hasValue() ? "".concat(_.getPixels(!0), "px") : "",
          B.getString(),
          J.parse(E.getString(), e.font)
        );
      S.setValue(P.fontStyle),
        C.setValue(P.fontVariant),
        N.setValue(P.fontWeight),
        _.setValue(P.fontSize),
        B.setValue(P.fontFamily),
        (e.font = P.toString()),
        _.isPixels() &&
          ((this.document.emSize = _.getPixels()),
          (this.modifiedEmSizeStack = !0));
    }
    t || (this.applyEffects(e), (e.globalAlpha = this.calculateOpacity()));
  }
  clearContext(e) {
    super.clearContext(e),
      this.modifiedEmSizeStack && this.document.popEmSize();
  }
}
class A extends Ye {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "path"),
      (this.pathParser = null),
      (this.pathParser = new w(this.getAttribute("d").getString()));
  }
  path(e) {
    var { pathParser: t } = this,
      r = new he();
    for (t.reset(), e && e.beginPath(); !t.isEnd(); )
      switch (t.next().type) {
        case w.MOVE_TO:
          this.pathM(e, r);
          break;
        case w.LINE_TO:
          this.pathL(e, r);
          break;
        case w.HORIZ_LINE_TO:
          this.pathH(e, r);
          break;
        case w.VERT_LINE_TO:
          this.pathV(e, r);
          break;
        case w.CURVE_TO:
          this.pathC(e, r);
          break;
        case w.SMOOTH_CURVE_TO:
          this.pathS(e, r);
          break;
        case w.QUAD_TO:
          this.pathQ(e, r);
          break;
        case w.SMOOTH_QUAD_TO:
          this.pathT(e, r);
          break;
        case w.ARC:
          this.pathA(e, r);
          break;
        case w.CLOSE_PATH:
          this.pathZ(e, r);
          break;
      }
    return r;
  }
  getBoundingBox(e) {
    return this.path();
  }
  getMarkers() {
    var { pathParser: e } = this,
      t = e.getMarkerPoints(),
      r = e.getMarkerAngles(),
      i = t.map((n, o) => [n, r[o]]);
    return i;
  }
  renderChildren(e) {
    this.path(e), this.document.screen.mouse.checkPath(this, e);
    var t = this.getStyle("fill-rule");
    e.fillStyle !== "" &&
      (t.getString("inherit") !== "inherit" ? e.fill(t.getString()) : e.fill()),
      e.strokeStyle !== "" &&
        (this.getAttribute("vector-effect").getString() === "non-scaling-stroke"
          ? (e.save(),
            e.setTransform(1, 0, 0, 1, 0, 0),
            e.stroke(),
            e.restore())
          : e.stroke());
    var r = this.getMarkers();
    if (r) {
      var i = r.length - 1,
        n = this.getStyle("marker-start"),
        o = this.getStyle("marker-mid"),
        s = this.getStyle("marker-end");
      if (n.isUrlDefinition()) {
        var u = n.getDefinition(),
          [l, h] = r[0];
        u.render(e, l, h);
      }
      if (o.isUrlDefinition())
        for (var f = o.getDefinition(), c = 1; c < i; c++) {
          var [v, d] = r[c];
          f.render(e, v, d);
        }
      if (s.isUrlDefinition()) {
        var g = s.getDefinition(),
          [p, y] = r[i];
        g.render(e, p, y);
      }
    }
  }
  static pathM(e) {
    var t = e.getAsCurrentPoint();
    return (e.start = e.current), { point: t };
  }
  pathM(e, t) {
    var { pathParser: r } = this,
      { point: i } = A.pathM(r),
      { x: n, y: o } = i;
    r.addMarker(i), t.addPoint(n, o), e && e.moveTo(n, o);
  }
  static pathL(e) {
    var { current: t } = e,
      r = e.getAsCurrentPoint();
    return { current: t, point: r };
  }
  pathL(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n } = A.pathL(r),
      { x: o, y: s } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathH(e) {
    var { current: t, command: r } = e,
      i = new V((r.relative ? t.x : 0) + r.x, t.y);
    return (e.current = i), { current: t, point: i };
  }
  pathH(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n } = A.pathH(r),
      { x: o, y: s } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathV(e) {
    var { current: t, command: r } = e,
      i = new V(t.x, (r.relative ? t.y : 0) + r.y);
    return (e.current = i), { current: t, point: i };
  }
  pathV(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n } = A.pathV(r),
      { x: o, y: s } = n;
    r.addMarker(n, i), t.addPoint(o, s), e && e.lineTo(o, s);
  }
  static pathC(e) {
    var { current: t } = e,
      r = e.getPoint("x1", "y1"),
      i = e.getAsControlPoint("x2", "y2"),
      n = e.getAsCurrentPoint();
    return { current: t, point: r, controlPoint: i, currentPoint: n };
  }
  pathC(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n, controlPoint: o, currentPoint: s } = A.pathC(r);
    r.addMarker(s, o, n),
      t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y),
      e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
  }
  static pathS(e) {
    var { current: t } = e,
      r = e.getReflectedControlPoint(),
      i = e.getAsControlPoint("x2", "y2"),
      n = e.getAsCurrentPoint();
    return { current: t, point: r, controlPoint: i, currentPoint: n };
  }
  pathS(e, t) {
    var { pathParser: r } = this,
      { current: i, point: n, controlPoint: o, currentPoint: s } = A.pathS(r);
    r.addMarker(s, o, n),
      t.addBezierCurve(i.x, i.y, n.x, n.y, o.x, o.y, s.x, s.y),
      e && e.bezierCurveTo(n.x, n.y, o.x, o.y, s.x, s.y);
  }
  static pathQ(e) {
    var { current: t } = e,
      r = e.getAsControlPoint("x1", "y1"),
      i = e.getAsCurrentPoint();
    return { current: t, controlPoint: r, currentPoint: i };
  }
  pathQ(e, t) {
    var { pathParser: r } = this,
      { current: i, controlPoint: n, currentPoint: o } = A.pathQ(r);
    r.addMarker(o, n, n),
      t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y),
      e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
  }
  static pathT(e) {
    var { current: t } = e,
      r = e.getReflectedControlPoint();
    e.control = r;
    var i = e.getAsCurrentPoint();
    return { current: t, controlPoint: r, currentPoint: i };
  }
  pathT(e, t) {
    var { pathParser: r } = this,
      { current: i, controlPoint: n, currentPoint: o } = A.pathT(r);
    r.addMarker(o, n, n),
      t.addQuadraticCurve(i.x, i.y, n.x, n.y, o.x, o.y),
      e && e.quadraticCurveTo(n.x, n.y, o.x, o.y);
  }
  static pathA(e) {
    var { current: t, command: r } = e,
      { rX: i, rY: n, xRot: o, lArcFlag: s, sweepFlag: u } = r,
      l = o * (Math.PI / 180),
      h = e.getAsCurrentPoint(),
      f = new V(
        (Math.cos(l) * (t.x - h.x)) / 2 + (Math.sin(l) * (t.y - h.y)) / 2,
        (-Math.sin(l) * (t.x - h.x)) / 2 + (Math.cos(l) * (t.y - h.y)) / 2
      ),
      c = Math.pow(f.x, 2) / Math.pow(i, 2) + Math.pow(f.y, 2) / Math.pow(n, 2);
    c > 1 && ((i *= Math.sqrt(c)), (n *= Math.sqrt(c)));
    var v =
      (s === u ? -1 : 1) *
      Math.sqrt(
        (Math.pow(i, 2) * Math.pow(n, 2) -
          Math.pow(i, 2) * Math.pow(f.y, 2) -
          Math.pow(n, 2) * Math.pow(f.x, 2)) /
          (Math.pow(i, 2) * Math.pow(f.y, 2) +
            Math.pow(n, 2) * Math.pow(f.x, 2))
      );
    isNaN(v) && (v = 0);
    var d = new V((v * i * f.y) / n, (v * -n * f.x) / i),
      g = new V(
        (t.x + h.x) / 2 + Math.cos(l) * d.x - Math.sin(l) * d.y,
        (t.y + h.y) / 2 + Math.sin(l) * d.x + Math.cos(l) * d.y
      ),
      p = Eo([1, 0], [(f.x - d.x) / i, (f.y - d.y) / n]),
      y = [(f.x - d.x) / i, (f.y - d.y) / n],
      x = [(-f.x - d.x) / i, (-f.y - d.y) / n],
      b = Eo(y, x);
    return (
      Si(y, x) <= -1 && (b = Math.PI),
      Si(y, x) >= 1 && (b = 0),
      {
        currentPoint: h,
        rX: i,
        rY: n,
        sweepFlag: u,
        xAxisRotation: l,
        centp: g,
        a1: p,
        ad: b,
      }
    );
  }
  pathA(e, t) {
    var { pathParser: r } = this,
      {
        currentPoint: i,
        rX: n,
        rY: o,
        sweepFlag: s,
        xAxisRotation: u,
        centp: l,
        a1: h,
        ad: f,
      } = A.pathA(r),
      c = 1 - s ? 1 : -1,
      v = h + c * (f / 2),
      d = new V(l.x + n * Math.cos(v), l.y + o * Math.sin(v));
    if (
      (r.addMarkerAngle(d, v - (c * Math.PI) / 2),
      r.addMarkerAngle(i, v - c * Math.PI),
      t.addPoint(i.x, i.y),
      e && !isNaN(h) && !isNaN(f))
    ) {
      var g = n > o ? n : o,
        p = n > o ? 1 : n / o,
        y = n > o ? o / n : 1;
      e.translate(l.x, l.y),
        e.rotate(u),
        e.scale(p, y),
        e.arc(0, 0, g, h, h + f, Boolean(1 - s)),
        e.scale(1 / p, 1 / y),
        e.rotate(-u),
        e.translate(-l.x, -l.y);
    }
  }
  static pathZ(e) {
    e.current = e.start;
  }
  pathZ(e, t) {
    A.pathZ(this.pathParser),
      e && t.x1 !== t.x2 && t.y1 !== t.y2 && e.closePath();
  }
}
class Sl extends A {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "glyph"),
      (this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber()),
      (this.unicode = this.getAttribute("unicode").getString()),
      (this.arabicForm = this.getAttribute("arabic-form").getString());
  }
}
class we extends Ye {
  constructor(e, t, r) {
    super(e, t, new.target === we ? !0 : r),
      (this.type = "text"),
      (this.x = 0),
      (this.y = 0),
      (this.measureCache = -1);
  }
  setContext(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    super.setContext(e, t);
    var r =
      this.getStyle("dominant-baseline").getTextBaseline() ||
      this.getStyle("alignment-baseline").getTextBaseline();
    r && (e.textBaseline = r);
  }
  initializeCoordinates() {
    (this.x = 0),
      (this.y = 0),
      (this.leafTexts = []),
      (this.textChunkStart = 0),
      (this.minX = Number.POSITIVE_INFINITY),
      (this.maxX = Number.NEGATIVE_INFINITY);
  }
  getBoundingBox(e) {
    if (this.type !== "text") return this.getTElementBoundingBox(e);
    this.initializeCoordinates(), this.adjustChildCoordinatesRecursive(e);
    var t = null;
    return (
      this.children.forEach((r, i) => {
        var n = this.getChildBoundingBox(e, this, this, i);
        t ? t.addBoundingBox(n) : (t = n);
      }),
      t
    );
  }
  getFontSize() {
    var { document: e, parent: t } = this,
      r = J.parse(e.ctx.font).fontSize,
      i = t.getStyle("font-size").getNumber(r);
    return i;
  }
  getTElementBoundingBox(e) {
    var t = this.getFontSize();
    return new he(this.x, this.y - t, this.x + this.measureText(e), this.y);
  }
  getGlyph(e, t, r) {
    var i = t[r],
      n = null;
    if (e.isArabic) {
      var o = t.length,
        s = t[r - 1],
        u = t[r + 1],
        l = "isolated";
      if (
        ((r === 0 || s === " ") && r < o - 1 && u !== " " && (l = "terminal"),
        r > 0 && s !== " " && r < o - 1 && u !== " " && (l = "medial"),
        r > 0 && s !== " " && (r === o - 1 || u === " ") && (l = "initial"),
        typeof e.glyphs[i] != "undefined")
      ) {
        var h = e.glyphs[i];
        n = h instanceof Sl ? h : h[l];
      }
    } else n = e.glyphs[i];
    return n || (n = e.missingGlyph), n;
  }
  getText() {
    return "";
  }
  getTextFromNode(e) {
    var t = e || this.node,
      r = Array.from(t.parentNode.childNodes),
      i = r.indexOf(t),
      n = r.length - 1,
      o = ct(t.textContent || "");
    return i === 0 && (o = qb(o)), i === n && (o = Qb(o)), o;
  }
  renderChildren(e) {
    if (this.type !== "text") {
      this.renderTElementChildren(e);
      return;
    }
    this.initializeCoordinates(),
      this.adjustChildCoordinatesRecursive(e),
      this.children.forEach((r, i) => {
        this.renderChild(e, this, this, i);
      });
    var { mouse: t } = this.document.screen;
    t.isWorking() && t.checkBoundingBox(this, this.getBoundingBox(e));
  }
  renderTElementChildren(e) {
    var { document: t, parent: r } = this,
      i = this.getText(),
      n = r.getStyle("font-family").getDefinition();
    if (n) {
      for (
        var { unitsPerEm: o } = n.fontFace,
          s = J.parse(t.ctx.font),
          u = r.getStyle("font-size").getNumber(s.fontSize),
          l = r.getStyle("font-style").getString(s.fontStyle),
          h = u / o,
          f = n.isRTL ? i.split("").reverse().join("") : i,
          c = ie(r.getAttribute("dx").getString()),
          v = f.length,
          d = 0;
        d < v;
        d++
      ) {
        var g = this.getGlyph(n, f, d);
        e.translate(this.x, this.y), e.scale(h, -h);
        var p = e.lineWidth;
        (e.lineWidth = (e.lineWidth * o) / u),
          l === "italic" && e.transform(1, 0, 0.4, 1, 0, 0),
          g.render(e),
          l === "italic" && e.transform(1, 0, -0.4, 1, 0, 0),
          (e.lineWidth = p),
          e.scale(1 / h, -1 / h),
          e.translate(-this.x, -this.y),
          (this.x += (u * (g.horizAdvX || n.horizAdvX)) / o),
          typeof c[d] != "undefined" && !isNaN(c[d]) && (this.x += c[d]);
      }
      return;
    }
    var { x: y, y: x } = this;
    e.fillStyle && e.fillText(i, y, x), e.strokeStyle && e.strokeText(i, y, x);
  }
  applyAnchoring() {
    if (!(this.textChunkStart >= this.leafTexts.length)) {
      var e = this.leafTexts[this.textChunkStart],
        t = e.getStyle("text-anchor").getString("start"),
        r = !1,
        i = 0;
      (t === "start" && !r) || (t === "end" && r)
        ? (i = e.x - this.minX)
        : (t === "end" && !r) || (t === "start" && r)
        ? (i = e.x - this.maxX)
        : (i = e.x - (this.minX + this.maxX) / 2);
      for (var n = this.textChunkStart; n < this.leafTexts.length; n++)
        this.leafTexts[n].x += i;
      (this.minX = Number.POSITIVE_INFINITY),
        (this.maxX = Number.NEGATIVE_INFINITY),
        (this.textChunkStart = this.leafTexts.length);
    }
  }
  adjustChildCoordinatesRecursive(e) {
    this.children.forEach((t, r) => {
      this.adjustChildCoordinatesRecursiveCore(e, this, this, r);
    }),
      this.applyAnchoring();
  }
  adjustChildCoordinatesRecursiveCore(e, t, r, i) {
    var n = r.children[i];
    n.children.length > 0
      ? n.children.forEach((o, s) => {
          t.adjustChildCoordinatesRecursiveCore(e, t, n, s);
        })
      : this.adjustChildCoordinates(e, t, r, i);
  }
  adjustChildCoordinates(e, t, r, i) {
    var n = r.children[i];
    if (typeof n.measureText != "function") return n;
    e.save(), n.setContext(e, !0);
    var o = n.getAttribute("x"),
      s = n.getAttribute("y"),
      u = n.getAttribute("dx"),
      l = n.getAttribute("dy"),
      h = n.getStyle("font-family").getDefinition(),
      f = Boolean(h) && h.isRTL;
    i === 0 &&
      (o.hasValue() || o.setValue(n.getInheritedAttribute("x")),
      s.hasValue() || s.setValue(n.getInheritedAttribute("y")),
      u.hasValue() || u.setValue(n.getInheritedAttribute("dx")),
      l.hasValue() || l.setValue(n.getInheritedAttribute("dy")));
    var c = n.measureText(e);
    return (
      f && (t.x -= c),
      o.hasValue()
        ? (t.applyAnchoring(),
          (n.x = o.getPixels("x")),
          u.hasValue() && (n.x += u.getPixels("x")))
        : (u.hasValue() && (t.x += u.getPixels("x")), (n.x = t.x)),
      (t.x = n.x),
      f || (t.x += c),
      s.hasValue()
        ? ((n.y = s.getPixels("y")), l.hasValue() && (n.y += l.getPixels("y")))
        : (l.hasValue() && (t.y += l.getPixels("y")), (n.y = t.y)),
      (t.y = n.y),
      t.leafTexts.push(n),
      (t.minX = Math.min(t.minX, n.x, n.x + c)),
      (t.maxX = Math.max(t.maxX, n.x, n.x + c)),
      n.clearContext(e),
      e.restore(),
      n
    );
  }
  getChildBoundingBox(e, t, r, i) {
    var n = r.children[i];
    if (typeof n.getBoundingBox != "function") return null;
    var o = n.getBoundingBox(e);
    return o
      ? (n.children.forEach((s, u) => {
          var l = t.getChildBoundingBox(e, t, n, u);
          o.addBoundingBox(l);
        }),
        o)
      : null;
  }
  renderChild(e, t, r, i) {
    var n = r.children[i];
    n.render(e),
      n.children.forEach((o, s) => {
        t.renderChild(e, t, n, s);
      });
  }
  measureText(e) {
    var { measureCache: t } = this;
    if (~t) return t;
    var r = this.getText(),
      i = this.measureTargetText(e, r);
    return (this.measureCache = i), i;
  }
  measureTargetText(e, t) {
    if (!t.length) return 0;
    var { parent: r } = this,
      i = r.getStyle("font-family").getDefinition();
    if (i) {
      for (
        var n = this.getFontSize(),
          o = i.isRTL ? t.split("").reverse().join("") : t,
          s = ie(r.getAttribute("dx").getString()),
          u = o.length,
          l = 0,
          h = 0;
        h < u;
        h++
      ) {
        var f = this.getGlyph(i, o, h);
        (l += ((f.horizAdvX || i.horizAdvX) * n) / i.fontFace.unitsPerEm),
          typeof s[h] != "undefined" && !isNaN(s[h]) && (l += s[h]);
      }
      return l;
    }
    if (!e.measureText) return t.length * 10;
    e.save(), this.setContext(e, !0);
    var { width: c } = e.measureText(t);
    return this.clearContext(e), e.restore(), c;
  }
  getInheritedAttribute(e) {
    for (var t = this; t instanceof we && t.isFirstChild(); ) {
      var r = t.parent.getAttribute(e);
      if (r.hasValue(!0)) return r.getValue("0");
      t = t.parent;
    }
    return null;
  }
}
class jr extends we {
  constructor(e, t, r) {
    super(e, t, new.target === jr ? !0 : r),
      (this.type = "tspan"),
      (this.text = this.children.length > 0 ? "" : this.getTextFromNode());
  }
  getText() {
    return this.text;
  }
}
class E1 extends jr {
  constructor() {
    super(...arguments), (this.type = "textNode");
  }
}
class Lt extends Ye {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.root = !1);
  }
  setContext(e) {
    var t,
      { document: r } = this,
      { screen: i, window: n } = r,
      o = e.canvas;
    if (
      (i.setDefaults(e),
      o.style &&
        typeof e.font != "undefined" &&
        n &&
        typeof n.getComputedStyle != "undefined")
    ) {
      e.font = n.getComputedStyle(o).getPropertyValue("font");
      var s = new O(r, "fontSize", J.parse(e.font).fontSize);
      s.hasValue() &&
        ((r.rootEmSize = s.getPixels("y")), (r.emSize = r.rootEmSize));
    }
    this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0),
      this.getAttribute("y").hasValue() ||
        this.getAttribute("y", !0).setValue(0);
    var { width: u, height: l } = i.viewPort;
    this.getStyle("width").hasValue() ||
      this.getStyle("width", !0).setValue("100%"),
      this.getStyle("height").hasValue() ||
        this.getStyle("height", !0).setValue("100%"),
      this.getStyle("color").hasValue() ||
        this.getStyle("color", !0).setValue("black");
    var h = this.getAttribute("refX"),
      f = this.getAttribute("refY"),
      c = this.getAttribute("viewBox"),
      v = c.hasValue() ? ie(c.getString()) : null,
      d =
        !this.root &&
        this.getStyle("overflow").getValue("hidden") !== "visible",
      g = 0,
      p = 0,
      y = 0,
      x = 0;
    v && ((g = v[0]), (p = v[1])),
      this.root ||
        ((u = this.getStyle("width").getPixels("x")),
        (l = this.getStyle("height").getPixels("y")),
        this.type === "marker" && ((y = g), (x = p), (g = 0), (p = 0))),
      i.viewPort.setCurrent(u, l),
      this.node &&
        (!this.parent ||
          ((t = this.node.parentNode) === null || t === void 0
            ? void 0
            : t.nodeName) === "foreignObject") &&
        this.getStyle("transform", !1, !0).hasValue() &&
        !this.getStyle("transform-origin", !1, !0).hasValue() &&
        this.getStyle("transform-origin", !0, !0).setValue("50% 50%"),
      super.setContext(e),
      e.translate(
        this.getAttribute("x").getPixels("x"),
        this.getAttribute("y").getPixels("y")
      ),
      v && ((u = v[2]), (l = v[3])),
      r.setViewBox({
        ctx: e,
        aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
        width: i.viewPort.width,
        desiredWidth: u,
        height: i.viewPort.height,
        desiredHeight: l,
        minX: g,
        minY: p,
        refX: h.getValue(),
        refY: f.getValue(),
        clip: d,
        clipX: y,
        clipY: x,
      }),
      v && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(u, l));
  }
  clearContext(e) {
    super.clearContext(e), this.document.screen.viewPort.removeCurrent();
  }
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
      i = this.getAttribute("width", !0),
      n = this.getAttribute("height", !0),
      o = this.getAttribute("viewBox"),
      s = this.getAttribute("style"),
      u = i.getNumber(0),
      l = n.getNumber(0);
    if (r)
      if (typeof r == "string")
        this.getAttribute("preserveAspectRatio", !0).setValue(r);
      else {
        var h = this.getAttribute("preserveAspectRatio");
        h.hasValue() &&
          h.setValue(h.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
      }
    if (
      (i.setValue(e),
      n.setValue(t),
      o.hasValue() || o.setValue("0 0 ".concat(u || e, " ").concat(l || t)),
      s.hasValue())
    ) {
      var f = this.getStyle("width"),
        c = this.getStyle("height");
      f.hasValue() && f.setValue("".concat(e, "px")),
        c.hasValue() && c.setValue("".concat(t, "px"));
    }
  }
}
class Ol extends A {
  constructor() {
    super(...arguments), (this.type = "rect");
  }
  path(e) {
    var t = this.getAttribute("x").getPixels("x"),
      r = this.getAttribute("y").getPixels("y"),
      i = this.getStyle("width", !1, !0).getPixels("x"),
      n = this.getStyle("height", !1, !0).getPixels("y"),
      o = this.getAttribute("rx"),
      s = this.getAttribute("ry"),
      u = o.getPixels("x"),
      l = s.getPixels("y");
    if (
      (o.hasValue() && !s.hasValue() && (l = u),
      s.hasValue() && !o.hasValue() && (u = l),
      (u = Math.min(u, i / 2)),
      (l = Math.min(l, n / 2)),
      e)
    ) {
      var h = 4 * ((Math.sqrt(2) - 1) / 3);
      e.beginPath(),
        n > 0 &&
          i > 0 &&
          (e.moveTo(t + u, r),
          e.lineTo(t + i - u, r),
          e.bezierCurveTo(
            t + i - u + h * u,
            r,
            t + i,
            r + l - h * l,
            t + i,
            r + l
          ),
          e.lineTo(t + i, r + n - l),
          e.bezierCurveTo(
            t + i,
            r + n - l + h * l,
            t + i - u + h * u,
            r + n,
            t + i - u,
            r + n
          ),
          e.lineTo(t + u, r + n),
          e.bezierCurveTo(
            t + u - h * u,
            r + n,
            t,
            r + n - l + h * l,
            t,
            r + n - l
          ),
          e.lineTo(t, r + l),
          e.bezierCurveTo(t, r + l - h * l, t + u - h * u, r, t + u, r),
          e.closePath());
    }
    return new he(t, r, t + i, r + n);
  }
  getMarkers() {
    return null;
  }
}
class $1 extends A {
  constructor() {
    super(...arguments), (this.type = "circle");
  }
  path(e) {
    var t = this.getAttribute("cx").getPixels("x"),
      r = this.getAttribute("cy").getPixels("y"),
      i = this.getAttribute("r").getPixels();
    return (
      e &&
        i > 0 &&
        (e.beginPath(), e.arc(t, r, i, 0, Math.PI * 2, !1), e.closePath()),
      new he(t - i, r - i, t + i, r + i)
    );
  }
  getMarkers() {
    return null;
  }
}
class w1 extends A {
  constructor() {
    super(...arguments), (this.type = "ellipse");
  }
  path(e) {
    var t = 4 * ((Math.sqrt(2) - 1) / 3),
      r = this.getAttribute("rx").getPixels("x"),
      i = this.getAttribute("ry").getPixels("y"),
      n = this.getAttribute("cx").getPixels("x"),
      o = this.getAttribute("cy").getPixels("y");
    return (
      e &&
        r > 0 &&
        i > 0 &&
        (e.beginPath(),
        e.moveTo(n + r, o),
        e.bezierCurveTo(n + r, o + t * i, n + t * r, o + i, n, o + i),
        e.bezierCurveTo(n - t * r, o + i, n - r, o + t * i, n - r, o),
        e.bezierCurveTo(n - r, o - t * i, n - t * r, o - i, n, o - i),
        e.bezierCurveTo(n + t * r, o - i, n + r, o - t * i, n + r, o),
        e.closePath()),
      new he(n - r, o - i, n + r, o + i)
    );
  }
  getMarkers() {
    return null;
  }
}
class C1 extends A {
  constructor() {
    super(...arguments), (this.type = "line");
  }
  getPoints() {
    return [
      new V(
        this.getAttribute("x1").getPixels("x"),
        this.getAttribute("y1").getPixels("y")
      ),
      new V(
        this.getAttribute("x2").getPixels("x"),
        this.getAttribute("y2").getPixels("y")
      ),
    ];
  }
  path(e) {
    var [{ x: t, y: r }, { x: i, y: n }] = this.getPoints();
    return (
      e && (e.beginPath(), e.moveTo(t, r), e.lineTo(i, n)), new he(t, r, i, n)
    );
  }
  getMarkers() {
    var [e, t] = this.getPoints(),
      r = e.angleTo(t);
    return [
      [e, r],
      [t, r],
    ];
  }
}
class El extends A {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "polyline"),
      (this.points = []),
      (this.points = V.parsePath(this.getAttribute("points").getString()));
  }
  path(e) {
    var { points: t } = this,
      [{ x: r, y: i }] = t,
      n = new he(r, i);
    return (
      e && (e.beginPath(), e.moveTo(r, i)),
      t.forEach((o) => {
        var { x: s, y: u } = o;
        n.addPoint(s, u), e && e.lineTo(s, u);
      }),
      n
    );
  }
  getMarkers() {
    var { points: e } = this,
      t = e.length - 1,
      r = [];
    return (
      e.forEach((i, n) => {
        n !== t && r.push([i, i.angleTo(e[n + 1])]);
      }),
      r.length > 0 && r.push([e[e.length - 1], r[r.length - 1][1]]),
      r
    );
  }
}
class A1 extends El {
  constructor() {
    super(...arguments), (this.type = "polygon");
  }
  path(e) {
    var t = super.path(e),
      [{ x: r, y: i }] = this.points;
    return e && (e.lineTo(r, i), e.closePath()), t;
  }
}
class P1 extends I {
  constructor() {
    super(...arguments), (this.type = "pattern");
  }
  createPattern(e, t, r) {
    var i = this.getStyle("width").getPixels("x", !0),
      n = this.getStyle("height").getPixels("y", !0),
      o = new Lt(this.document, null);
    (o.attributes.viewBox = new O(
      this.document,
      "viewBox",
      this.getAttribute("viewBox").getValue()
    )),
      (o.attributes.width = new O(this.document, "width", "".concat(i, "px"))),
      (o.attributes.height = new O(
        this.document,
        "height",
        "".concat(n, "px")
      )),
      (o.attributes.transform = new O(
        this.document,
        "transform",
        this.getAttribute("patternTransform").getValue()
      )),
      (o.children = this.children);
    var s = this.document.createCanvas(i, n),
      u = s.getContext("2d"),
      l = this.getAttribute("x"),
      h = this.getAttribute("y");
    l.hasValue() &&
      h.hasValue() &&
      u.translate(l.getPixels("x", !0), h.getPixels("y", !0)),
      r.hasValue()
        ? (this.styles["fill-opacity"] = r)
        : Reflect.deleteProperty(this.styles, "fill-opacity");
    for (var f = -1; f <= 1; f++)
      for (var c = -1; c <= 1; c++)
        u.save(),
          (o.attributes.x = new O(this.document, "x", f * s.width)),
          (o.attributes.y = new O(this.document, "y", c * s.height)),
          o.render(u),
          u.restore();
    var v = e.createPattern(s, "repeat");
    return v;
  }
}
class R1 extends I {
  constructor() {
    super(...arguments), (this.type = "marker");
  }
  render(e, t, r) {
    if (!!t) {
      var { x: i, y: n } = t,
        o = this.getAttribute("orient").getString("auto"),
        s = this.getAttribute("markerUnits").getString("strokeWidth");
      e.translate(i, n),
        o === "auto" && e.rotate(r),
        s === "strokeWidth" && e.scale(e.lineWidth, e.lineWidth),
        e.save();
      var u = new Lt(this.document, null);
      (u.type = this.type),
        (u.attributes.viewBox = new O(
          this.document,
          "viewBox",
          this.getAttribute("viewBox").getValue()
        )),
        (u.attributes.refX = new O(
          this.document,
          "refX",
          this.getAttribute("refX").getValue()
        )),
        (u.attributes.refY = new O(
          this.document,
          "refY",
          this.getAttribute("refY").getValue()
        )),
        (u.attributes.width = new O(
          this.document,
          "width",
          this.getAttribute("markerWidth").getValue()
        )),
        (u.attributes.height = new O(
          this.document,
          "height",
          this.getAttribute("markerHeight").getValue()
        )),
        (u.attributes.overflow = new O(
          this.document,
          "overflow",
          this.getAttribute("overflow").getValue()
        )),
        (u.attributes.fill = new O(
          this.document,
          "fill",
          this.getAttribute("fill").getColor("black")
        )),
        (u.attributes.stroke = new O(
          this.document,
          "stroke",
          this.getAttribute("stroke").getValue("none")
        )),
        (u.children = this.children),
        u.render(e),
        e.restore(),
        s === "strokeWidth" && e.scale(1 / e.lineWidth, 1 / e.lineWidth),
        o === "auto" && e.rotate(-r),
        e.translate(-i, -n);
    }
  }
}
class I1 extends I {
  constructor() {
    super(...arguments), (this.type = "defs");
  }
  render() {}
}
class sn extends Ye {
  constructor() {
    super(...arguments), (this.type = "g");
  }
  getBoundingBox(e) {
    var t = new he();
    return (
      this.children.forEach((r) => {
        t.addBoundingBox(r.getBoundingBox(e));
      }),
      t
    );
  }
}
class $l extends I {
  constructor(e, t, r) {
    super(e, t, r),
      (this.attributesToInherit = ["gradientUnits"]),
      (this.stops = []);
    var { stops: i, children: n } = this;
    n.forEach((o) => {
      o.type === "stop" && i.push(o);
    });
  }
  getGradientUnits() {
    return this.getAttribute("gradientUnits").getString("objectBoundingBox");
  }
  createGradient(e, t, r) {
    var i = this;
    this.getHrefAttribute().hasValue() &&
      ((i = this.getHrefAttribute().getDefinition()),
      this.inheritStopContainer(i));
    var { stops: n } = i,
      o = this.getGradient(e, t);
    if (!o) return this.addParentOpacity(r, n[n.length - 1].color);
    if (
      (n.forEach((p) => {
        o.addColorStop(p.offset, this.addParentOpacity(r, p.color));
      }),
      this.getAttribute("gradientTransform").hasValue())
    ) {
      var { document: s } = this,
        { MAX_VIRTUAL_PIXELS: u, viewPort: l } = s.screen,
        [h] = l.viewPorts,
        f = new Ol(s, null);
      (f.attributes.x = new O(s, "x", -u / 3)),
        (f.attributes.y = new O(s, "y", -u / 3)),
        (f.attributes.width = new O(s, "width", u)),
        (f.attributes.height = new O(s, "height", u));
      var c = new sn(s, null);
      (c.attributes.transform = new O(
        s,
        "transform",
        this.getAttribute("gradientTransform").getValue()
      )),
        (c.children = [f]);
      var v = new Lt(s, null);
      (v.attributes.x = new O(s, "x", 0)),
        (v.attributes.y = new O(s, "y", 0)),
        (v.attributes.width = new O(s, "width", h.width)),
        (v.attributes.height = new O(s, "height", h.height)),
        (v.children = [c]);
      var d = s.createCanvas(h.width, h.height),
        g = d.getContext("2d");
      return (g.fillStyle = o), v.render(g), g.createPattern(d, "no-repeat");
    }
    return o;
  }
  inheritStopContainer(e) {
    this.attributesToInherit.forEach((t) => {
      !this.getAttribute(t).hasValue() &&
        e.getAttribute(t).hasValue() &&
        this.getAttribute(t, !0).setValue(e.getAttribute(t).getValue());
    });
  }
  addParentOpacity(e, t) {
    if (e.hasValue()) {
      var r = new O(this.document, "color", t);
      return r.addOpacity(e).getColor();
    }
    return t;
  }
}
class N1 extends $l {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "linearGradient"),
      this.attributesToInherit.push("x1", "y1", "x2", "y2");
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === "objectBoundingBox",
      i = r ? t.getBoundingBox(e) : null;
    if (r && !i) return null;
    !this.getAttribute("x1").hasValue() &&
      !this.getAttribute("y1").hasValue() &&
      !this.getAttribute("x2").hasValue() &&
      !this.getAttribute("y2").hasValue() &&
      (this.getAttribute("x1", !0).setValue(0),
      this.getAttribute("y1", !0).setValue(0),
      this.getAttribute("x2", !0).setValue(1),
      this.getAttribute("y2", !0).setValue(0));
    var n = r
        ? i.x + i.width * this.getAttribute("x1").getNumber()
        : this.getAttribute("x1").getPixels("x"),
      o = r
        ? i.y + i.height * this.getAttribute("y1").getNumber()
        : this.getAttribute("y1").getPixels("y"),
      s = r
        ? i.x + i.width * this.getAttribute("x2").getNumber()
        : this.getAttribute("x2").getPixels("x"),
      u = r
        ? i.y + i.height * this.getAttribute("y2").getNumber()
        : this.getAttribute("y2").getPixels("y");
    return n === s && o === u ? null : e.createLinearGradient(n, o, s, u);
  }
}
class M1 extends $l {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "radialGradient"),
      this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
  }
  getGradient(e, t) {
    var r = this.getGradientUnits() === "objectBoundingBox",
      i = t.getBoundingBox(e);
    if (r && !i) return null;
    this.getAttribute("cx").hasValue() ||
      this.getAttribute("cx", !0).setValue("50%"),
      this.getAttribute("cy").hasValue() ||
        this.getAttribute("cy", !0).setValue("50%"),
      this.getAttribute("r").hasValue() ||
        this.getAttribute("r", !0).setValue("50%");
    var n = r
        ? i.x + i.width * this.getAttribute("cx").getNumber()
        : this.getAttribute("cx").getPixels("x"),
      o = r
        ? i.y + i.height * this.getAttribute("cy").getNumber()
        : this.getAttribute("cy").getPixels("y"),
      s = n,
      u = o;
    this.getAttribute("fx").hasValue() &&
      (s = r
        ? i.x + i.width * this.getAttribute("fx").getNumber()
        : this.getAttribute("fx").getPixels("x")),
      this.getAttribute("fy").hasValue() &&
        (u = r
          ? i.y + i.height * this.getAttribute("fy").getNumber()
          : this.getAttribute("fy").getPixels("y"));
    var l = r
        ? ((i.width + i.height) / 2) * this.getAttribute("r").getNumber()
        : this.getAttribute("r").getPixels(),
      h = this.getAttribute("fr").getPixels();
    return e.createRadialGradient(s, u, h, n, o, l);
  }
}
class _1 extends I {
  constructor(e, t, r) {
    super(e, t, r), (this.type = "stop");
    var i = Math.max(0, Math.min(1, this.getAttribute("offset").getNumber())),
      n = this.getStyle("stop-opacity"),
      o = this.getStyle("stop-color", !0);
    o.getString() === "" && o.setValue("#000"),
      n.hasValue() && (o = o.addOpacity(n)),
      (this.offset = i),
      (this.color = o.getColor());
  }
}
class on extends I {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "animate"),
      (this.duration = 0),
      (this.initialValue = null),
      (this.initialUnits = ""),
      (this.removed = !1),
      (this.frozen = !1),
      e.screen.animations.push(this),
      (this.begin = this.getAttribute("begin").getMilliseconds()),
      (this.maxDuration =
        this.begin + this.getAttribute("dur").getMilliseconds()),
      (this.from = this.getAttribute("from")),
      (this.to = this.getAttribute("to")),
      (this.values = new O(e, "values", null));
    var i = this.getAttribute("values");
    i.hasValue() && this.values.setValue(i.getString().split(";"));
  }
  getProperty() {
    var e = this.getAttribute("attributeType").getString(),
      t = this.getAttribute("attributeName").getString();
    return e === "CSS"
      ? this.parent.getStyle(t, !0)
      : this.parent.getAttribute(t, !0);
  }
  calcValue() {
    var { initialUnits: e } = this,
      { progress: t, from: r, to: i } = this.getProgress(),
      n = r.getNumber() + (i.getNumber() - r.getNumber()) * t;
    return e === "%" && (n *= 100), "".concat(n).concat(e);
  }
  update(e) {
    var { parent: t } = this,
      r = this.getProperty();
    if (
      (this.initialValue ||
        ((this.initialValue = r.getString()),
        (this.initialUnits = r.getUnits())),
      this.duration > this.maxDuration)
    ) {
      var i = this.getAttribute("fill").getString("remove");
      if (
        this.getAttribute("repeatCount").getString() === "indefinite" ||
        this.getAttribute("repeatDur").getString() === "indefinite"
      )
        this.duration = 0;
      else if (i === "freeze" && !this.frozen)
        (this.frozen = !0),
          (t.animationFrozen = !0),
          (t.animationFrozenValue = r.getString());
      else if (i === "remove" && !this.removed)
        return (
          (this.removed = !0),
          r.setValue(
            t.animationFrozen ? t.animationFrozenValue : this.initialValue
          ),
          !0
        );
      return !1;
    }
    this.duration += e;
    var n = !1;
    if (this.begin < this.duration) {
      var o = this.calcValue(),
        s = this.getAttribute("type");
      if (s.hasValue()) {
        var u = s.getString();
        o = "".concat(u, "(").concat(o, ")");
      }
      r.setValue(o), (n = !0);
    }
    return n;
  }
  getProgress() {
    var { document: e, values: t } = this,
      r = {
        progress:
          (this.duration - this.begin) / (this.maxDuration - this.begin),
      };
    if (t.hasValue()) {
      var i = r.progress * (t.getValue().length - 1),
        n = Math.floor(i),
        o = Math.ceil(i);
      (r.from = new O(e, "from", parseFloat(t.getValue()[n]))),
        (r.to = new O(e, "to", parseFloat(t.getValue()[o]))),
        (r.progress = (i - n) / (o - n));
    } else (r.from = this.from), (r.to = this.to);
    return r;
  }
}
class D1 extends on {
  constructor() {
    super(...arguments), (this.type = "animateColor");
  }
  calcValue() {
    var { progress: e, from: t, to: r } = this.getProgress(),
      i = new bi(t.getColor()),
      n = new bi(r.getColor());
    if (i.ok && n.ok) {
      var o = i.r + (n.r - i.r) * e,
        s = i.g + (n.g - i.g) * e,
        u = i.b + (n.b - i.b) * e;
      return "rgb("
        .concat(Math.floor(o), ", ")
        .concat(Math.floor(s), ", ")
        .concat(Math.floor(u), ")");
    }
    return this.getAttribute("from").getColor();
  }
}
class V1 extends on {
  constructor() {
    super(...arguments), (this.type = "animateTransform");
  }
  calcValue() {
    var { progress: e, from: t, to: r } = this.getProgress(),
      i = ie(t.getString()),
      n = ie(r.getString()),
      o = i
        .map((s, u) => {
          var l = n[u];
          return s + (l - s) * e;
        })
        .join(" ");
    return o;
  }
}
class L1 extends I {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "font"),
      (this.glyphs = {}),
      (this.horizAdvX = this.getAttribute("horiz-adv-x").getNumber());
    var { definitions: i } = e,
      { children: n } = this;
    for (var o of n)
      switch (o.type) {
        case "font-face": {
          this.fontFace = o;
          var s = o.getStyle("font-family");
          s.hasValue() && (i[s.getString()] = this);
          break;
        }
        case "missing-glyph":
          this.missingGlyph = o;
          break;
        case "glyph": {
          var u = o;
          u.arabicForm
            ? ((this.isRTL = !0),
              (this.isArabic = !0),
              typeof this.glyphs[u.unicode] == "undefined" &&
                (this.glyphs[u.unicode] = {}),
              (this.glyphs[u.unicode][u.arabicForm] = u))
            : (this.glyphs[u.unicode] = u);
          break;
        }
      }
  }
  render() {}
}
class k1 extends I {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "font-face"),
      (this.ascent = this.getAttribute("ascent").getNumber()),
      (this.descent = this.getAttribute("descent").getNumber()),
      (this.unitsPerEm = this.getAttribute("units-per-em").getNumber());
  }
}
class B1 extends A {
  constructor() {
    super(...arguments), (this.type = "missing-glyph"), (this.horizAdvX = 0);
  }
}
class F1 extends we {
  constructor() {
    super(...arguments), (this.type = "tref");
  }
  getText() {
    var e = this.getHrefAttribute().getDefinition();
    if (e) {
      var t = e.children[0];
      if (t) return t.getText();
    }
    return "";
  }
}
class j1 extends we {
  constructor(e, t, r) {
    super(e, t, r), (this.type = "a");
    var { childNodes: i } = t,
      n = i[0],
      o = i.length > 0 && Array.from(i).every((s) => s.nodeType === 3);
    (this.hasText = o), (this.text = o ? this.getTextFromNode(n) : "");
  }
  getText() {
    return this.text;
  }
  renderChildren(e) {
    if (this.hasText) {
      super.renderChildren(e);
      var { document: t, x: r, y: i } = this,
        { mouse: n } = t.screen,
        o = new O(t, "fontSize", J.parse(t.ctx.font).fontSize);
      n.isWorking() &&
        n.checkBoundingBox(
          this,
          new he(r, i - o.getPixels("y"), r + this.measureText(e), i)
        );
    } else if (this.children.length > 0) {
      var s = new sn(this.document, null);
      (s.children = this.children), (s.parent = this), s.render(e);
    }
  }
  onClick() {
    var { window: e } = this.document;
    e && e.open(this.getHrefAttribute().getString());
  }
  onMouseMove() {
    var e = this.document.ctx;
    e.canvas.style.cursor = "pointer";
  }
}
function No(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(a, i).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function nr(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? No(Object(t), !0).forEach(function (r) {
          rn(a, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
      : No(Object(t)).forEach(function (r) {
          Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return a;
}
class U1 extends we {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "textPath"),
      (this.textWidth = 0),
      (this.textHeight = 0),
      (this.pathLength = -1),
      (this.glyphInfo = null),
      (this.letterSpacingCache = []),
      (this.measuresCache = new Map([["", 0]]));
    var i = this.getHrefAttribute().getDefinition();
    (this.text = this.getTextFromNode()),
      (this.dataArray = this.parsePathData(i));
  }
  getText() {
    return this.text;
  }
  path(e) {
    var { dataArray: t } = this;
    e && e.beginPath(),
      t.forEach((r) => {
        var { type: i, points: n } = r;
        switch (i) {
          case w.LINE_TO:
            e && e.lineTo(n[0], n[1]);
            break;
          case w.MOVE_TO:
            e && e.moveTo(n[0], n[1]);
            break;
          case w.CURVE_TO:
            e && e.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
            break;
          case w.QUAD_TO:
            e && e.quadraticCurveTo(n[0], n[1], n[2], n[3]);
            break;
          case w.ARC: {
            var [o, s, u, l, h, f, c, v] = n,
              d = u > l ? u : l,
              g = u > l ? 1 : u / l,
              p = u > l ? l / u : 1;
            e &&
              (e.translate(o, s),
              e.rotate(c),
              e.scale(g, p),
              e.arc(0, 0, d, h, h + f, Boolean(1 - v)),
              e.scale(1 / g, 1 / p),
              e.rotate(-c),
              e.translate(-o, -s));
            break;
          }
          case w.CLOSE_PATH:
            e && e.closePath();
            break;
        }
      });
  }
  renderChildren(e) {
    this.setTextData(e), e.save();
    var t = this.parent.getStyle("text-decoration").getString(),
      r = this.getFontSize(),
      { glyphInfo: i } = this,
      n = e.fillStyle;
    t === "underline" && e.beginPath(),
      i.forEach((o, s) => {
        var { p0: u, p1: l, rotation: h, text: f } = o;
        e.save(),
          e.translate(u.x, u.y),
          e.rotate(h),
          e.fillStyle && e.fillText(f, 0, 0),
          e.strokeStyle && e.strokeText(f, 0, 0),
          e.restore(),
          t === "underline" &&
            (s === 0 && e.moveTo(u.x, u.y + r / 8), e.lineTo(l.x, l.y + r / 5));
      }),
      t === "underline" &&
        ((e.lineWidth = r / 20),
        (e.strokeStyle = n),
        e.stroke(),
        e.closePath()),
      e.restore();
  }
  getLetterSpacingAt() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    return this.letterSpacingCache[e] || 0;
  }
  findSegmentToFitChar(e, t, r, i, n, o, s, u, l) {
    var h = o,
      f = this.measureText(e, u);
    u === " " && t === "justify" && r < i && (f += (i - r) / n),
      l > -1 && (h += this.getLetterSpacingAt(l));
    var c = this.textHeight / 20,
      v = this.getEquidistantPointOnPath(h, c, 0),
      d = this.getEquidistantPointOnPath(h + f, c, 0),
      g = { p0: v, p1: d },
      p = v && d ? Math.atan2(d.y - v.y, d.x - v.x) : 0;
    if (s) {
      var y = Math.cos(Math.PI / 2 + p) * s,
        x = Math.cos(-p) * s;
      (g.p0 = nr(nr({}, v), {}, { x: v.x + y, y: v.y + x })),
        (g.p1 = nr(nr({}, d), {}, { x: d.x + y, y: d.y + x }));
    }
    return (h += f), { offset: h, segment: g, rotation: p };
  }
  measureText(e, t) {
    var { measuresCache: r } = this,
      i = t || this.getText();
    if (r.has(i)) return r.get(i);
    var n = this.measureTargetText(e, i);
    return r.set(i, n), n;
  }
  setTextData(e) {
    if (!this.glyphInfo) {
      var t = this.getText(),
        r = t.split(""),
        i = t.split(" ").length - 1,
        n = this.parent
          .getAttribute("dx")
          .split()
          .map((T) => T.getPixels("x")),
        o = this.parent.getAttribute("dy").getPixels("y"),
        s = this.parent.getStyle("text-anchor").getString("start"),
        u = this.getStyle("letter-spacing"),
        l = this.parent.getStyle("letter-spacing"),
        h = 0;
      !u.hasValue() || u.getValue() === "inherit"
        ? (h = l.getPixels())
        : u.hasValue() &&
          u.getValue() !== "initial" &&
          u.getValue() !== "unset" &&
          (h = u.getPixels());
      var f = [],
        c = t.length;
      this.letterSpacingCache = f;
      for (var v = 0; v < c; v++) f.push(typeof n[v] != "undefined" ? n[v] : h);
      var d = f.reduce((T, $, E) => (E === 0 ? 0 : T + $ || 0), 0),
        g = this.measureText(e),
        p = Math.max(g + d, 0);
      (this.textWidth = g),
        (this.textHeight = this.getFontSize()),
        (this.glyphInfo = []);
      var y = this.getPathLength(),
        x = this.getStyle("startOffset").getNumber(0) * y,
        b = 0;
      (s === "middle" || s === "center") && (b = -p / 2),
        (s === "end" || s === "right") && (b = -p),
        (b += x),
        r.forEach((T, $) => {
          var {
            offset: E,
            segment: S,
            rotation: C,
          } = this.findSegmentToFitChar(e, s, p, y, i, b, o, T, $);
          (b = E),
            !(!S.p0 || !S.p1) &&
              this.glyphInfo.push({
                text: r[$],
                p0: S.p0,
                p1: S.p1,
                rotation: C,
              });
        });
    }
  }
  parsePathData(e) {
    if (((this.pathLength = -1), !e)) return [];
    var t = [],
      { pathParser: r } = e;
    for (r.reset(); !r.isEnd(); ) {
      var { current: i } = r,
        n = i ? i.x : 0,
        o = i ? i.y : 0,
        s = r.next(),
        u = s.type,
        l = [];
      switch (s.type) {
        case w.MOVE_TO:
          this.pathM(r, l);
          break;
        case w.LINE_TO:
          u = this.pathL(r, l);
          break;
        case w.HORIZ_LINE_TO:
          u = this.pathH(r, l);
          break;
        case w.VERT_LINE_TO:
          u = this.pathV(r, l);
          break;
        case w.CURVE_TO:
          this.pathC(r, l);
          break;
        case w.SMOOTH_CURVE_TO:
          u = this.pathS(r, l);
          break;
        case w.QUAD_TO:
          this.pathQ(r, l);
          break;
        case w.SMOOTH_QUAD_TO:
          u = this.pathT(r, l);
          break;
        case w.ARC:
          l = this.pathA(r);
          break;
        case w.CLOSE_PATH:
          A.pathZ(r);
          break;
      }
      s.type !== w.CLOSE_PATH
        ? t.push({
            type: u,
            points: l,
            start: { x: n, y: o },
            pathLength: this.calcLength(n, o, u, l),
          })
        : t.push({ type: w.CLOSE_PATH, points: [], pathLength: 0 });
    }
    return t;
  }
  pathM(e, t) {
    var { x: r, y: i } = A.pathM(e).point;
    t.push(r, i);
  }
  pathL(e, t) {
    var { x: r, y: i } = A.pathL(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathH(e, t) {
    var { x: r, y: i } = A.pathH(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathV(e, t) {
    var { x: r, y: i } = A.pathV(e).point;
    return t.push(r, i), w.LINE_TO;
  }
  pathC(e, t) {
    var { point: r, controlPoint: i, currentPoint: n } = A.pathC(e);
    t.push(r.x, r.y, i.x, i.y, n.x, n.y);
  }
  pathS(e, t) {
    var { point: r, controlPoint: i, currentPoint: n } = A.pathS(e);
    return t.push(r.x, r.y, i.x, i.y, n.x, n.y), w.CURVE_TO;
  }
  pathQ(e, t) {
    var { controlPoint: r, currentPoint: i } = A.pathQ(e);
    t.push(r.x, r.y, i.x, i.y);
  }
  pathT(e, t) {
    var { controlPoint: r, currentPoint: i } = A.pathT(e);
    return t.push(r.x, r.y, i.x, i.y), w.QUAD_TO;
  }
  pathA(e) {
    var {
      rX: t,
      rY: r,
      sweepFlag: i,
      xAxisRotation: n,
      centp: o,
      a1: s,
      ad: u,
    } = A.pathA(e);
    return (
      i === 0 && u > 0 && (u -= 2 * Math.PI),
      i === 1 && u < 0 && (u += 2 * Math.PI),
      [o.x, o.y, t, r, s, u, n, i]
    );
  }
  calcLength(e, t, r, i) {
    var n = 0,
      o = null,
      s = null,
      u = 0;
    switch (r) {
      case w.LINE_TO:
        return this.getLineLength(e, t, i[0], i[1]);
      case w.CURVE_TO:
        for (
          n = 0,
            o = this.getPointOnCubicBezier(
              0,
              e,
              t,
              i[0],
              i[1],
              i[2],
              i[3],
              i[4],
              i[5]
            ),
            u = 0.01;
          u <= 1;
          u += 0.01
        )
          (s = this.getPointOnCubicBezier(
            u,
            e,
            t,
            i[0],
            i[1],
            i[2],
            i[3],
            i[4],
            i[5]
          )),
            (n += this.getLineLength(o.x, o.y, s.x, s.y)),
            (o = s);
        return n;
      case w.QUAD_TO:
        for (
          n = 0,
            o = this.getPointOnQuadraticBezier(0, e, t, i[0], i[1], i[2], i[3]),
            u = 0.01;
          u <= 1;
          u += 0.01
        )
          (s = this.getPointOnQuadraticBezier(u, e, t, i[0], i[1], i[2], i[3])),
            (n += this.getLineLength(o.x, o.y, s.x, s.y)),
            (o = s);
        return n;
      case w.ARC: {
        n = 0;
        var l = i[4],
          h = i[5],
          f = i[4] + h,
          c = Math.PI / 180;
        if (
          (Math.abs(l - f) < c && (c = Math.abs(l - f)),
          (o = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], l, 0)),
          h < 0)
        )
          for (u = l - c; u > f; u -= c)
            (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
              (n += this.getLineLength(o.x, o.y, s.x, s.y)),
              (o = s);
        else
          for (u = l + c; u < f; u += c)
            (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], u, 0)),
              (n += this.getLineLength(o.x, o.y, s.x, s.y)),
              (o = s);
        return (
          (s = this.getPointOnEllipticalArc(i[0], i[1], i[2], i[3], f, 0)),
          (n += this.getLineLength(o.x, o.y, s.x, s.y)),
          n
        );
      }
    }
    return 0;
  }
  getPointOnLine(e, t, r, i, n) {
    var o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : t,
      s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : r,
      u = (n - r) / (i - t + st),
      l = Math.sqrt((e * e) / (1 + u * u));
    i < t && (l *= -1);
    var h = u * l,
      f = null;
    if (i === t) f = { x: o, y: s + h };
    else if ((s - r) / (o - t + st) === u) f = { x: o + l, y: s + h };
    else {
      var c = 0,
        v = 0,
        d = this.getLineLength(t, r, i, n);
      if (d < st) return null;
      var g = (o - t) * (i - t) + (s - r) * (n - r);
      (g /= d * d), (c = t + g * (i - t)), (v = r + g * (n - r));
      var p = this.getLineLength(o, s, c, v),
        y = Math.sqrt(e * e - p * p);
      (l = Math.sqrt((y * y) / (1 + u * u))),
        i < t && (l *= -1),
        (h = u * l),
        (f = { x: c + l, y: v + h });
    }
    return f;
  }
  getPointOnPath(e) {
    var t = this.getPathLength(),
      r = 0,
      i = null;
    if (e < -5e-5 || e - 5e-5 > t) return null;
    var { dataArray: n } = this;
    for (var o of n) {
      if (o && (o.pathLength < 5e-5 || r + o.pathLength + 5e-5 < e)) {
        r += o.pathLength;
        continue;
      }
      var s = e - r,
        u = 0;
      switch (o.type) {
        case w.LINE_TO:
          i = this.getPointOnLine(
            s,
            o.start.x,
            o.start.y,
            o.points[0],
            o.points[1],
            o.start.x,
            o.start.y
          );
          break;
        case w.ARC: {
          var l = o.points[4],
            h = o.points[5],
            f = o.points[4] + h;
          if (
            ((u = l + (s / o.pathLength) * h),
            (h < 0 && u < f) || (h >= 0 && u > f))
          )
            break;
          i = this.getPointOnEllipticalArc(
            o.points[0],
            o.points[1],
            o.points[2],
            o.points[3],
            u,
            o.points[6]
          );
          break;
        }
        case w.CURVE_TO:
          (u = s / o.pathLength),
            u > 1 && (u = 1),
            (i = this.getPointOnCubicBezier(
              u,
              o.start.x,
              o.start.y,
              o.points[0],
              o.points[1],
              o.points[2],
              o.points[3],
              o.points[4],
              o.points[5]
            ));
          break;
        case w.QUAD_TO:
          (u = s / o.pathLength),
            u > 1 && (u = 1),
            (i = this.getPointOnQuadraticBezier(
              u,
              o.start.x,
              o.start.y,
              o.points[0],
              o.points[1],
              o.points[2],
              o.points[3]
            ));
          break;
      }
      if (i) return i;
      break;
    }
    return null;
  }
  getLineLength(e, t, r, i) {
    return Math.sqrt((r - e) * (r - e) + (i - t) * (i - t));
  }
  getPathLength() {
    return (
      this.pathLength === -1 &&
        (this.pathLength = this.dataArray.reduce(
          (e, t) => (t.pathLength > 0 ? e + t.pathLength : e),
          0
        )),
      this.pathLength
    );
  }
  getPointOnCubicBezier(e, t, r, i, n, o, s, u, l) {
    var h = u * $o(e) + o * wo(e) + i * Co(e) + t * Ao(e),
      f = l * $o(e) + s * wo(e) + n * Co(e) + r * Ao(e);
    return { x: h, y: f };
  }
  getPointOnQuadraticBezier(e, t, r, i, n, o, s) {
    var u = o * Po(e) + i * Ro(e) + t * Io(e),
      l = s * Po(e) + n * Ro(e) + r * Io(e);
    return { x: u, y: l };
  }
  getPointOnEllipticalArc(e, t, r, i, n, o) {
    var s = Math.cos(o),
      u = Math.sin(o),
      l = { x: r * Math.cos(n), y: i * Math.sin(n) };
    return { x: e + (l.x * s - l.y * u), y: t + (l.x * u + l.y * s) };
  }
  buildEquidistantCache(e, t) {
    var r = this.getPathLength(),
      i = t || 0.25,
      n = e || r / 100;
    if (
      !this.equidistantCache ||
      this.equidistantCache.step !== n ||
      this.equidistantCache.precision !== i
    ) {
      this.equidistantCache = { step: n, precision: i, points: [] };
      for (var o = 0, s = 0; s <= r; s += i) {
        var u = this.getPointOnPath(s),
          l = this.getPointOnPath(s + i);
        !u ||
          !l ||
          ((o += this.getLineLength(u.x, u.y, l.x, l.y)),
          o >= n &&
            (this.equidistantCache.points.push({ x: u.x, y: u.y, distance: s }),
            (o -= n)));
      }
    }
  }
  getEquidistantPointOnPath(e, t, r) {
    if (
      (this.buildEquidistantCache(t, r),
      e < 0 || e - this.getPathLength() > 5e-5)
    )
      return null;
    var i = Math.round(
      (e / this.getPathLength()) * (this.equidistantCache.points.length - 1)
    );
    return this.equidistantCache.points[i] || null;
  }
}
var z1 =
  /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
class G1 extends Ye {
  constructor(e, t, r) {
    super(e, t, r), (this.type = "image"), (this.loaded = !1);
    var i = this.getHrefAttribute().getString();
    if (!!i) {
      var n = i.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(i);
      e.images.push(this),
        n ? this.loadSvg(i) : this.loadImage(i),
        (this.isSvg = n);
    }
  }
  loadImage(e) {
    var t = this;
    return xe(function* () {
      try {
        var r = yield t.document.createImage(e);
        t.image = r;
      } catch (i) {
        console.error('Error while loading image "'.concat(e, '":'), i);
      }
      t.loaded = !0;
    })();
  }
  loadSvg(e) {
    var t = this;
    return xe(function* () {
      var r = z1.exec(e);
      if (r) {
        var i = r[5];
        r[4] === "base64"
          ? (t.image = atob(i))
          : (t.image = decodeURIComponent(i));
      } else
        try {
          var n = yield t.document.fetch(e),
            o = yield n.text();
          t.image = o;
        } catch (s) {
          console.error('Error while loading image "'.concat(e, '":'), s);
        }
      t.loaded = !0;
    })();
  }
  renderChildren(e) {
    var { document: t, image: r, loaded: i } = this,
      n = this.getAttribute("x").getPixels("x"),
      o = this.getAttribute("y").getPixels("y"),
      s = this.getStyle("width").getPixels("x"),
      u = this.getStyle("height").getPixels("y");
    if (!(!i || !r || !s || !u)) {
      if ((e.save(), e.translate(n, o), this.isSvg)) {
        var l = t.canvg.forkString(e, this.image, {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: 0,
          offsetY: 0,
          scaleWidth: s,
          scaleHeight: u,
        });
        (l.document.documentElement.parent = this), l.render();
      } else {
        var h = this.image;
        t.setViewBox({
          ctx: e,
          aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
          width: s,
          desiredWidth: h.width,
          height: u,
          desiredHeight: h.height,
        }),
          this.loaded &&
            (typeof h.complete == "undefined" || h.complete) &&
            e.drawImage(h, 0, 0);
      }
      e.restore();
    }
  }
  getBoundingBox() {
    var e = this.getAttribute("x").getPixels("x"),
      t = this.getAttribute("y").getPixels("y"),
      r = this.getStyle("width").getPixels("x"),
      i = this.getStyle("height").getPixels("y");
    return new he(e, t, e + r, t + i);
  }
}
class H1 extends Ye {
  constructor() {
    super(...arguments), (this.type = "symbol");
  }
  render(e) {}
}
class Y1 {
  constructor(e) {
    (this.document = e), (this.loaded = !1), e.fonts.push(this);
  }
  load(e, t) {
    var r = this;
    return xe(function* () {
      try {
        var { document: i } = r,
          n = yield i.canvg.parser.load(t),
          o = n.getElementsByTagName("font");
        Array.from(o).forEach((s) => {
          var u = i.createElement(s);
          i.definitions[e] = u;
        });
      } catch (s) {
        console.error('Error while loading font "'.concat(t, '":'), s);
      }
      r.loaded = !0;
    })();
  }
}
class wl extends I {
  constructor(e, t, r) {
    super(e, t, r), (this.type = "style");
    var i = ct(
        Array.from(t.childNodes)
          .map((o) => o.textContent)
          .join("")
          .replace(
            /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
            ""
          )
          .replace(/@import.*;/g, "")
      ),
      n = i.split("}");
    n.forEach((o) => {
      var s = o.trim();
      if (!!s) {
        var u = s.split("{"),
          l = u[0].split(","),
          h = u[1].split(";");
        l.forEach((f) => {
          var c = f.trim();
          if (!!c) {
            var v = e.styles[c] || {};
            if (
              (h.forEach((p) => {
                var y = p.indexOf(":"),
                  x = p.substr(0, y).trim(),
                  b = p.substr(y + 1, p.length - y).trim();
                x && b && (v[x] = new O(e, x, b));
              }),
              (e.styles[c] = v),
              (e.stylesSpecificity[c] = o1(c)),
              c === "@font-face")
            ) {
              var d = v["font-family"].getString().replace(/"|'/g, ""),
                g = v.src.getString().split(",");
              g.forEach((p) => {
                if (p.indexOf('format("svg")') > 0) {
                  var y = yl(p);
                  y && new Y1(e).load(d, y);
                }
              });
            }
          }
        });
      }
    });
  }
}
wl.parseExternalUrl = yl;
class X1 extends Ye {
  constructor() {
    super(...arguments), (this.type = "use");
  }
  setContext(e) {
    super.setContext(e);
    var t = this.getAttribute("x"),
      r = this.getAttribute("y");
    t.hasValue() && e.translate(t.getPixels("x"), 0),
      r.hasValue() && e.translate(0, r.getPixels("y"));
  }
  path(e) {
    var { element: t } = this;
    t && t.path(e);
  }
  renderChildren(e) {
    var { document: t, element: r } = this;
    if (r) {
      var i = r;
      if (
        (r.type === "symbol" &&
          ((i = new Lt(t, null)),
          (i.attributes.viewBox = new O(
            t,
            "viewBox",
            r.getAttribute("viewBox").getString()
          )),
          (i.attributes.preserveAspectRatio = new O(
            t,
            "preserveAspectRatio",
            r.getAttribute("preserveAspectRatio").getString()
          )),
          (i.attributes.overflow = new O(
            t,
            "overflow",
            r.getAttribute("overflow").getString()
          )),
          (i.children = r.children),
          (r.styles.opacity = new O(t, "opacity", this.calculateOpacity()))),
        i.type === "svg")
      ) {
        var n = this.getStyle("width", !1, !0),
          o = this.getStyle("height", !1, !0);
        n.hasValue() && (i.attributes.width = new O(t, "width", n.getString())),
          o.hasValue() &&
            (i.attributes.height = new O(t, "height", o.getString()));
      }
      var s = i.parent;
      (i.parent = this), i.render(e), (i.parent = s);
    }
  }
  getBoundingBox(e) {
    var { element: t } = this;
    return t ? t.getBoundingBox(e) : null;
  }
  elementTransform() {
    var { document: e, element: t } = this;
    return Ue.fromElement(e, t);
  }
  get element() {
    return (
      this.cachedElement ||
        (this.cachedElement = this.getHrefAttribute().getDefinition()),
      this.cachedElement
    );
  }
}
function sr(a, e, t, r, i, n) {
  return a[t * r * 4 + e * 4 + n];
}
function or(a, e, t, r, i, n, o) {
  a[t * r * 4 + e * 4 + n] = o;
}
function F(a, e, t) {
  var r = a[e];
  return r * t;
}
function me(a, e, t, r) {
  return e + Math.cos(a) * t + Math.sin(a) * r;
}
class Cl extends I {
  constructor(e, t, r) {
    super(e, t, r), (this.type = "feColorMatrix");
    var i = ie(this.getAttribute("values").getString());
    switch (this.getAttribute("type").getString("matrix")) {
      case "saturate": {
        var n = i[0];
        i = [
          0.213 + 0.787 * n,
          0.715 - 0.715 * n,
          0.072 - 0.072 * n,
          0,
          0,
          0.213 - 0.213 * n,
          0.715 + 0.285 * n,
          0.072 - 0.072 * n,
          0,
          0,
          0.213 - 0.213 * n,
          0.715 - 0.715 * n,
          0.072 + 0.928 * n,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
        ];
        break;
      }
      case "hueRotate": {
        var o = (i[0] * Math.PI) / 180;
        i = [
          me(o, 0.213, 0.787, -0.213),
          me(o, 0.715, -0.715, -0.715),
          me(o, 0.072, -0.072, 0.928),
          0,
          0,
          me(o, 0.213, -0.213, 0.143),
          me(o, 0.715, 0.285, 0.14),
          me(o, 0.072, -0.072, -0.283),
          0,
          0,
          me(o, 0.213, -0.213, -0.787),
          me(o, 0.715, -0.715, 0.715),
          me(o, 0.072, 0.928, 0.072),
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          1,
        ];
        break;
      }
      case "luminanceToAlpha":
        i = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721,
          0, 0, 0, 0, 0, 0, 1,
        ];
        break;
    }
    (this.matrix = i),
      (this.includeOpacity = this.getAttribute("includeOpacity").hasValue());
  }
  apply(e, t, r, i, n) {
    for (
      var { includeOpacity: o, matrix: s } = this,
        u = e.getImageData(0, 0, i, n),
        l = 0;
      l < n;
      l++
    )
      for (var h = 0; h < i; h++) {
        var f = sr(u.data, h, l, i, n, 0),
          c = sr(u.data, h, l, i, n, 1),
          v = sr(u.data, h, l, i, n, 2),
          d = sr(u.data, h, l, i, n, 3),
          g = F(s, 0, f) + F(s, 1, c) + F(s, 2, v) + F(s, 3, d) + F(s, 4, 1),
          p = F(s, 5, f) + F(s, 6, c) + F(s, 7, v) + F(s, 8, d) + F(s, 9, 1),
          y =
            F(s, 10, f) + F(s, 11, c) + F(s, 12, v) + F(s, 13, d) + F(s, 14, 1),
          x =
            F(s, 15, f) + F(s, 16, c) + F(s, 17, v) + F(s, 18, d) + F(s, 19, 1);
        o && ((g = 0), (p = 0), (y = 0), (x *= d / 255)),
          or(u.data, h, l, i, n, 0, g),
          or(u.data, h, l, i, n, 1, p),
          or(u.data, h, l, i, n, 2, y),
          or(u.data, h, l, i, n, 3, x);
      }
    e.clearRect(0, 0, i, n), e.putImageData(u, 0, 0);
  }
}
class Ur extends I {
  constructor() {
    super(...arguments), (this.type = "mask");
  }
  apply(e, t) {
    var { document: r } = this,
      i = this.getAttribute("x").getPixels("x"),
      n = this.getAttribute("y").getPixels("y"),
      o = this.getStyle("width").getPixels("x"),
      s = this.getStyle("height").getPixels("y");
    if (!o && !s) {
      var u = new he();
      this.children.forEach((d) => {
        u.addBoundingBox(d.getBoundingBox(e));
      }),
        (i = Math.floor(u.x1)),
        (n = Math.floor(u.y1)),
        (o = Math.floor(u.width)),
        (s = Math.floor(u.height));
    }
    var l = this.removeStyles(t, Ur.ignoreStyles),
      h = r.createCanvas(i + o, n + s),
      f = h.getContext("2d");
    r.screen.setDefaults(f),
      this.renderChildren(f),
      new Cl(r, {
        nodeType: 1,
        childNodes: [],
        attributes: [
          { nodeName: "type", value: "luminanceToAlpha" },
          { nodeName: "includeOpacity", value: "true" },
        ],
      }).apply(f, 0, 0, i + o, n + s);
    var c = r.createCanvas(i + o, n + s),
      v = c.getContext("2d");
    r.screen.setDefaults(v),
      t.render(v),
      (v.globalCompositeOperation = "destination-in"),
      (v.fillStyle = f.createPattern(h, "no-repeat")),
      v.fillRect(0, 0, i + o, n + s),
      (e.fillStyle = v.createPattern(c, "no-repeat")),
      e.fillRect(0, 0, i + o, n + s),
      this.restoreStyles(t, l);
  }
  render(e) {}
}
Ur.ignoreStyles = ["mask", "transform", "clip-path"];
var Mo = () => {};
class W1 extends I {
  constructor() {
    super(...arguments), (this.type = "clipPath");
  }
  apply(e) {
    var { document: t } = this,
      r = Reflect.getPrototypeOf(e),
      { beginPath: i, closePath: n } = e;
    r && ((r.beginPath = Mo), (r.closePath = Mo)),
      Reflect.apply(i, e, []),
      this.children.forEach((o) => {
        if (typeof o.path != "undefined") {
          var s =
            typeof o.elementTransform != "undefined"
              ? o.elementTransform()
              : null;
          s || (s = Ue.fromElement(t, o)),
            s && s.apply(e),
            o.path(e),
            r && (r.closePath = n),
            s && s.unapply(e);
        }
      }),
      Reflect.apply(n, e, []),
      e.clip(),
      r && ((r.beginPath = i), (r.closePath = n));
  }
  render(e) {}
}
class zr extends I {
  constructor() {
    super(...arguments), (this.type = "filter");
  }
  apply(e, t) {
    var { document: r, children: i } = this,
      n = t.getBoundingBox(e);
    if (!!n) {
      var o = 0,
        s = 0;
      i.forEach((y) => {
        var x = y.extraFilterDistance || 0;
        (o = Math.max(o, x)), (s = Math.max(s, x));
      });
      var u = Math.floor(n.width),
        l = Math.floor(n.height),
        h = u + 2 * o,
        f = l + 2 * s;
      if (!(h < 1 || f < 1)) {
        var c = Math.floor(n.x),
          v = Math.floor(n.y),
          d = this.removeStyles(t, zr.ignoreStyles),
          g = r.createCanvas(h, f),
          p = g.getContext("2d");
        r.screen.setDefaults(p),
          p.translate(-c + o, -v + s),
          t.render(p),
          i.forEach((y) => {
            typeof y.apply == "function" && y.apply(p, 0, 0, h, f);
          }),
          e.drawImage(g, 0, 0, h, f, c - o, v - s, h, f),
          this.restoreStyles(t, d);
      }
    }
  }
  render(e) {}
}
zr.ignoreStyles = ["filter", "transform", "clip-path"];
class q1 extends I {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "feDropShadow"),
      this.addStylesFromStyleDefinition();
  }
  apply(e, t, r, i, n) {}
}
class Q1 extends I {
  constructor() {
    super(...arguments), (this.type = "feMorphology");
  }
  apply(e, t, r, i, n) {}
}
class K1 extends I {
  constructor() {
    super(...arguments), (this.type = "feComposite");
  }
  apply(e, t, r, i, n) {}
}
class Z1 extends I {
  constructor(e, t, r) {
    super(e, t, r),
      (this.type = "feGaussianBlur"),
      (this.blurRadius = Math.floor(
        this.getAttribute("stdDeviation").getNumber()
      )),
      (this.extraFilterDistance = this.blurRadius);
  }
  apply(e, t, r, i, n) {
    var { document: o, blurRadius: s } = this,
      u = o.window ? o.window.document.body : null,
      l = e.canvas;
    (l.id = o.getUniqueId()),
      u && ((l.style.display = "none"), u.appendChild(l)),
      Hb(l, t, r, i, n, s),
      u && u.removeChild(l);
  }
}
class J1 extends I {
  constructor() {
    super(...arguments), (this.type = "title");
  }
}
class e2 extends I {
  constructor() {
    super(...arguments), (this.type = "desc");
  }
}
var t2 = {
  svg: Lt,
  rect: Ol,
  circle: $1,
  ellipse: w1,
  line: C1,
  polyline: El,
  polygon: A1,
  path: A,
  pattern: P1,
  marker: R1,
  defs: I1,
  linearGradient: N1,
  radialGradient: M1,
  stop: _1,
  animate: on,
  animateColor: D1,
  animateTransform: V1,
  font: L1,
  "font-face": k1,
  "missing-glyph": B1,
  glyph: Sl,
  text: we,
  tspan: jr,
  tref: F1,
  a: j1,
  textPath: U1,
  image: G1,
  g: sn,
  symbol: H1,
  style: wl,
  use: X1,
  mask: Ur,
  clipPath: W1,
  filter: zr,
  feDropShadow: q1,
  feMorphology: Q1,
  feComposite: K1,
  feColorMatrix: Cl,
  feGaussianBlur: Z1,
  title: J1,
  desc: e2,
};
function _o(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(a, i).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function r2(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? _o(Object(t), !0).forEach(function (r) {
          rn(a, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
      : _o(Object(t)).forEach(function (r) {
          Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return a;
}
function a2(a, e) {
  var t = document.createElement("canvas");
  return (t.width = a), (t.height = e), t;
}
function i2(a) {
  return Oi.apply(this, arguments);
}
function Oi() {
  return (
    (Oi = xe(function* (a) {
      var e =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        t = document.createElement("img");
      return (
        e && (t.crossOrigin = "Anonymous"),
        new Promise((r, i) => {
          (t.onload = () => {
            r(t);
          }),
            (t.onerror = (n, o, s, u, l) => {
              i(l);
            }),
            (t.src = a);
        })
      );
    })),
    Oi.apply(this, arguments)
  );
}
class Ee {
  constructor(e) {
    var {
      rootEmSize: t = 12,
      emSize: r = 12,
      createCanvas: i = Ee.createCanvas,
      createImage: n = Ee.createImage,
      anonymousCrossOrigin: o,
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.canvg = e),
      (this.definitions = {}),
      (this.styles = {}),
      (this.stylesSpecificity = {}),
      (this.images = []),
      (this.fonts = []),
      (this.emSizeStack = []),
      (this.uniqueId = 0),
      (this.screen = e.screen),
      (this.rootEmSize = t),
      (this.emSize = r),
      (this.createCanvas = i),
      (this.createImage = this.bindCreateImage(n, o)),
      this.screen.wait(this.isImagesLoaded.bind(this)),
      this.screen.wait(this.isFontsLoaded.bind(this));
  }
  bindCreateImage(e, t) {
    return typeof t == "boolean"
      ? (r, i) => e(r, typeof i == "boolean" ? i : t)
      : e;
  }
  get window() {
    return this.screen.window;
  }
  get fetch() {
    return this.screen.fetch;
  }
  get ctx() {
    return this.screen.ctx;
  }
  get emSize() {
    var { emSizeStack: e } = this;
    return e[e.length - 1];
  }
  set emSize(e) {
    var { emSizeStack: t } = this;
    t.push(e);
  }
  popEmSize() {
    var { emSizeStack: e } = this;
    e.pop();
  }
  getUniqueId() {
    return "canvg".concat(++this.uniqueId);
  }
  isImagesLoaded() {
    return this.images.every((e) => e.loaded);
  }
  isFontsLoaded() {
    return this.fonts.every((e) => e.loaded);
  }
  createDocumentElement(e) {
    var t = this.createElement(e.documentElement);
    return (
      (t.root = !0),
      t.addStylesFromStyleDefinition(),
      (this.documentElement = t),
      t
    );
  }
  createElement(e) {
    var t = e.nodeName.replace(/^[^:]+:/, ""),
      r = Ee.elementTypes[t];
    return typeof r != "undefined" ? new r(this, e) : new b1(this, e);
  }
  createTextNode(e) {
    return new E1(this, e);
  }
  setViewBox(e) {
    this.screen.setViewBox(r2({ document: this }, e));
  }
}
Ee.createCanvas = a2;
Ee.createImage = i2;
Ee.elementTypes = t2;
function Do(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(a);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(a, i).enumerable;
      })),
      t.push.apply(t, r);
  }
  return t;
}
function Ve(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Do(Object(t), !0).forEach(function (r) {
          rn(a, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t))
      : Do(Object(t)).forEach(function (r) {
          Object.defineProperty(a, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return a;
}
class Ot {
  constructor(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.parser = new Xa(r)), (this.screen = new Fr(e, r)), (this.options = r);
    var i = new Ee(this, r),
      n = i.createDocumentElement(t);
    (this.document = i), (this.documentElement = n);
  }
  static from(e, t) {
    var r = arguments;
    return xe(function* () {
      var i = r.length > 2 && r[2] !== void 0 ? r[2] : {},
        n = new Xa(i),
        o = yield n.parse(t);
      return new Ot(e, o, i);
    })();
  }
  static fromString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = new Xa(r),
      n = i.parseFromString(t);
    return new Ot(e, n, r);
  }
  fork(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Ot.from(e, t, Ve(Ve({}, this.options), r));
  }
  forkString(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Ot.fromString(e, t, Ve(Ve({}, this.options), r));
  }
  ready() {
    return this.screen.ready();
  }
  isReady() {
    return this.screen.isReady();
  }
  render() {
    var e = arguments,
      t = this;
    return xe(function* () {
      var r = e.length > 0 && e[0] !== void 0 ? e[0] : {};
      t.start(
        Ve({ enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 }, r)
      ),
        yield t.ready(),
        t.stop();
    })();
  }
  start() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      { documentElement: t, screen: r, options: i } = this;
    r.start(t, Ve(Ve({ enableRedraw: !0 }, i), e));
  }
  stop() {
    this.screen.stop();
  }
  resize(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
      r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    this.documentElement.resize(e, t, r);
  }
}
export {
  j1 as AElement,
  D1 as AnimateColorElement,
  on as AnimateElement,
  V1 as AnimateTransformElement,
  he as BoundingBox,
  $o as CB1,
  wo as CB2,
  Co as CB3,
  Ao as CB4,
  Ot as Canvg,
  $1 as CircleElement,
  W1 as ClipPathElement,
  I1 as DefsElement,
  e2 as DescElement,
  Ee as Document,
  I as Element,
  w1 as EllipseElement,
  Cl as FeColorMatrixElement,
  K1 as FeCompositeElement,
  q1 as FeDropShadowElement,
  Z1 as FeGaussianBlurElement,
  Q1 as FeMorphologyElement,
  zr as FilterElement,
  J as Font,
  L1 as FontElement,
  k1 as FontFaceElement,
  sn as GElement,
  Sl as GlyphElement,
  $l as GradientElement,
  G1 as ImageElement,
  C1 as LineElement,
  N1 as LinearGradientElement,
  R1 as MarkerElement,
  Ur as MaskElement,
  xl as Matrix,
  B1 as MissingGlyphElement,
  l1 as Mouse,
  st as PSEUDO_ZERO,
  Xa as Parser,
  A as PathElement,
  w as PathParser,
  P1 as PatternElement,
  V as Point,
  A1 as PolygonElement,
  El as PolylineElement,
  O as Property,
  Po as QB1,
  Ro as QB2,
  Io as QB3,
  M1 as RadialGradientElement,
  Ol as RectElement,
  Ye as RenderedElement,
  c1 as Rotate,
  Lt as SVGElement,
  Y1 as SVGFontLoader,
  g1 as Scale,
  Fr as Screen,
  Tl as Skew,
  d1 as SkewX,
  p1 as SkewY,
  _1 as StopElement,
  wl as StyleElement,
  H1 as SymbolElement,
  F1 as TRefElement,
  jr as TSpanElement,
  we as TextElement,
  U1 as TextPathElement,
  J1 as TitleElement,
  Ue as Transform,
  f1 as Translate,
  b1 as UnknownElement,
  X1 as UseElement,
  u1 as ViewPort,
  ct as compressSpaces,
  Ot as default,
  o1 as getSelectorSpecificity,
  Zb as normalizeAttributeName,
  Jb as normalizeColor,
  yl as parseExternalUrl,
  s2 as presets,
  ie as toNumbers,
  qb as trimLeft,
  Qb as trimRight,
  Oo as vectorMagnitude,
  Eo as vectorsAngle,
  Si as vectorsRatio,
};
