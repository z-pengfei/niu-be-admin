import {
  d as Z,
  c as b,
  g as ee,
  b as te,
  h as ne,
  u as B,
  $ as re,
  _ as le,
  o as J,
  X as $,
  r as A,
  a7 as H,
  W,
  a8 as ae,
  a9 as ie,
  a0 as I,
  aa as se,
  ab as ue,
  ac as oe,
  ad as ce
} from "./index-C1t76LZj.js";
const fe = ["xlink:href", "fill"],
  de = Z({
    __name: "index",
    props: {
      prefix: { type: String, default: "icon" },
      name: { type: String, required: !1, default: "" },
      color: { type: String, default: "" },
      size: { type: String, default: "1em" }
    },
    setup(e) {
      const r = e,
        t = b(() => `#${r.prefix}-${r.name}`);
      return (i, n) => (
        ee(),
        te(
          "svg",
          {
            "aria-hidden": "true",
            class: "svg-icon",
            style: re("width:" + e.size + ";height:" + e.size)
          },
          [ne("use", { "xlink:href": B(t), fill: e.color }, null, 8, fe)],
          4
        )
      );
    }
  }),
  De = le(de, [["__scopeId", "data-v-8b87a405"]]);
function j(e) {
  return ae() ? (ie(e), !0) : !1;
}
function R(e) {
  return typeof e == "function" ? e() : B(e);
}
const P = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ve = Object.prototype.toString,
  pe = e => ve.call(e) === "[object Object]",
  G = () => {};
function me(e, r) {
  function t(...i) {
    return new Promise((n, s) => {
      Promise.resolve(e(() => r.apply(this, i), { fn: r, thisArg: this, args: i }))
        .then(n)
        .catch(s);
    });
  }
  return t;
}
const K = e => e();
function he(e = K) {
  const r = A(!0);
  function t() {
    r.value = !1;
  }
  function i() {
    r.value = !0;
  }
  const n = (...s) => {
    r.value && e(...s);
  };
  return { isActive: H(r), pause: t, resume: i, eventFilter: n };
}
function ge(e) {
  return I();
}
function we(...e) {
  if (e.length !== 1) return se(...e);
  const r = e[0];
  return typeof r == "function" ? H(ue(() => ({ get: r, set: G }))) : A(r);
}
function ye(e, r, t = {}) {
  const { eventFilter: i = K, ...n } = t;
  return W(e, me(i, r), n);
}
function Se(e, r, t = {}) {
  const { eventFilter: i, ...n } = t,
    { eventFilter: s, pause: c, resume: u, isActive: o } = he(i);
  return { stop: ye(e, r, { ...n, eventFilter: s }), pause: c, resume: u, isActive: o };
}
function Q(e, r = !0, t) {
  ge() ? J(e, t) : r ? e() : $(e);
}
function N(e) {
  var r;
  const t = R(e);
  return (r = t == null ? void 0 : t.$el) != null ? r : t;
}
const M = P ? window : void 0,
  be = P ? window.document : void 0;
function T(...e) {
  let r, t, i, n;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([t, i, n] = e), (r = M))
      : ([r, t, i, n] = e),
    !r)
  )
    return G;
  Array.isArray(t) || (t = [t]), Array.isArray(i) || (i = [i]);
  const s = [],
    c = () => {
      s.forEach(v => v()), (s.length = 0);
    },
    u = (v, d, S, p) => (v.addEventListener(d, S, p), () => v.removeEventListener(d, S, p)),
    o = W(
      () => [N(r), R(n)],
      ([v, d]) => {
        if ((c(), !v)) return;
        const S = pe(d) ? { ...d } : d;
        s.push(...t.flatMap(p => i.map(w => u(v, p, w, S))));
      },
      { immediate: !0, flush: "post" }
    ),
    f = () => {
      o(), c();
    };
  return j(f), f;
}
function Fe() {
  const e = A(!1),
    r = I();
  return (
    r &&
      J(() => {
        e.value = !0;
      }, r),
    e
  );
}
function X(e) {
  const r = Fe();
  return b(() => (r.value, !!e()));
}
function ke(e, r = {}) {
  const { window: t = M } = r,
    i = X(() => t && "matchMedia" in t && typeof t.matchMedia == "function");
  let n;
  const s = A(!1),
    c = f => {
      s.value = f.matches;
    },
    u = () => {
      n && ("removeEventListener" in n ? n.removeEventListener("change", c) : n.removeListener(c));
    },
    o = ce(() => {
      i.value &&
        (u(),
        (n = t.matchMedia(R(e))),
        "addEventListener" in n ? n.addEventListener("change", c) : n.addListener(c),
        (s.value = n.matches));
    });
  return (
    j(() => {
      o(), u(), (n = void 0);
    }),
    s
  );
}
const z =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  L = "__vueuse_ssr_handlers__",
  Ee = Ce();
function Ce() {
  return L in z || (z[L] = z[L] || {}), z[L];
}
function U(e, r) {
  return Ee[e] || r;
}
function _e(e) {
  return e == null
    ? "any"
    : e instanceof Set
      ? "set"
      : e instanceof Map
        ? "map"
        : e instanceof Date
          ? "date"
          : typeof e == "boolean"
            ? "boolean"
            : typeof e == "string"
              ? "string"
              : typeof e == "object"
                ? "object"
                : Number.isNaN(e)
                  ? "any"
                  : "number";
}
const Me = {
    boolean: { read: e => e === "true", write: e => String(e) },
    object: { read: e => JSON.parse(e), write: e => JSON.stringify(e) },
    number: { read: e => Number.parseFloat(e), write: e => String(e) },
    any: { read: e => e, write: e => String(e) },
    string: { read: e => e, write: e => String(e) },
    map: { read: e => new Map(JSON.parse(e)), write: e => JSON.stringify(Array.from(e.entries())) },
    set: { read: e => new Set(JSON.parse(e)), write: e => JSON.stringify(Array.from(e)) },
    date: { read: e => new Date(e), write: e => e.toISOString() }
  },
  q = "vueuse-storage";
function Ae(e, r, t, i = {}) {
  var n;
  const {
      flush: s = "pre",
      deep: c = !0,
      listenToStorageChanges: u = !0,
      writeDefaults: o = !0,
      mergeDefaults: f = !1,
      shallow: v,
      window: d = M,
      eventFilter: S,
      onError: p = a => {
        console.error(a);
      },
      initOnMounted: w
    } = i,
    g = (v ? oe : A)(typeof r == "function" ? r() : r);
  if (!t)
    try {
      t = U("getDefaultStorage", () => {
        var a;
        return (a = M) == null ? void 0 : a.localStorage;
      })();
    } catch (a) {
      p(a);
    }
  if (!t) return g;
  const y = R(r),
    l = _e(y),
    k = (n = i.serializer) != null ? n : Me[l],
    { pause: O, resume: m } = Se(g, () => x(g.value), { flush: s, deep: c, eventFilter: S });
  d &&
    u &&
    Q(() => {
      T(d, "storage", F), T(d, q, D), w && F();
    }),
    w || F();
  function E(a, h) {
    d &&
      d.dispatchEvent(
        new CustomEvent(q, { detail: { key: e, oldValue: a, newValue: h, storageArea: t } })
      );
  }
  function x(a) {
    try {
      const h = t.getItem(e);
      if (a == null) E(h, null), t.removeItem(e);
      else {
        const C = k.write(a);
        h !== C && (t.setItem(e, C), E(h, C));
      }
    } catch (h) {
      p(h);
    }
  }
  function _(a) {
    const h = a ? a.newValue : t.getItem(e);
    if (h == null) return o && y != null && t.setItem(e, k.write(y)), y;
    if (!a && f) {
      const C = k.read(h);
      return typeof f == "function"
        ? f(C, y)
        : l === "object" && !Array.isArray(C)
          ? { ...y, ...C }
          : C;
    } else return typeof h != "string" ? h : k.read(h);
  }
  function F(a) {
    if (!(a && a.storageArea !== t)) {
      if (a && a.key == null) {
        g.value = y;
        return;
      }
      if (!(a && a.key !== e)) {
        O();
        try {
          (a == null ? void 0 : a.newValue) !== k.write(g.value) && (g.value = _(a));
        } catch (h) {
          p(h);
        } finally {
          a ? $(m) : m();
        }
      }
    }
  }
  function D(a) {
    F(a.detail);
  }
  return g;
}
function Y(e) {
  return ke("(prefers-color-scheme: dark)", e);
}
function Oe(e = {}) {
  const {
      selector: r = "html",
      attribute: t = "class",
      initialValue: i = "auto",
      window: n = M,
      storage: s,
      storageKey: c = "vueuse-color-scheme",
      listenToStorageChanges: u = !0,
      storageRef: o,
      emitAuto: f,
      disableTransition: v = !0
    } = e,
    d = { auto: "", light: "light", dark: "dark", ...(e.modes || {}) },
    S = Y({ window: n }),
    p = b(() => (S.value ? "dark" : "light")),
    w = o || (c == null ? we(i) : Ae(c, i, s, { window: n, listenToStorageChanges: u })),
    g = b(() => (w.value === "auto" ? p.value : w.value)),
    y = U("updateHTMLAttrs", (m, E, x) => {
      const _ = typeof m == "string" ? (n == null ? void 0 : n.document.querySelector(m)) : N(m);
      if (!_) return;
      let F;
      if (
        (v &&
          ((F = n.document.createElement("style")),
          F.appendChild(
            document.createTextNode(
              "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
            )
          ),
          n.document.head.appendChild(F)),
        E === "class")
      ) {
        const D = x.split(/\s/g);
        Object.values(d)
          .flatMap(a => (a || "").split(/\s/g))
          .filter(Boolean)
          .forEach(a => {
            D.includes(a) ? _.classList.add(a) : _.classList.remove(a);
          });
      } else _.setAttribute(E, x);
      v && (n.getComputedStyle(F).opacity, document.head.removeChild(F));
    });
  function l(m) {
    var E;
    y(r, t, (E = d[m]) != null ? E : m);
  }
  function k(m) {
    e.onChanged ? e.onChanged(m, l) : l(m);
  }
  W(g, k, { flush: "post", immediate: !0 }), Q(() => k(g.value));
  const O = b({
    get() {
      return f ? w.value : g.value;
    },
    set(m) {
      w.value = m;
    }
  });
  try {
    return Object.assign(O, { store: w, system: p, state: g });
  } catch {
    return O;
  }
}
function ze(e = {}) {
  const { valueDark: r = "dark", valueLight: t = "", window: i = M } = e,
    n = Oe({
      ...e,
      onChanged: (u, o) => {
        var f;
        e.onChanged ? (f = e.onChanged) == null || f.call(e, u === "dark", o, u) : o(u);
      },
      modes: { dark: r, light: t }
    }),
    s = b(() => (n.system ? n.system.value : Y({ window: i }).value ? "dark" : "light"));
  return b({
    get() {
      return n.value === "dark";
    },
    set(u) {
      const o = u ? "dark" : "light";
      s.value === o ? (n.value = "auto") : (n.value = o);
    }
  });
}
const V = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function Le(e, r = {}) {
  const { document: t = be, autoExit: i = !1 } = r,
    n = b(() => {
      var l;
      return (l = N(e)) != null ? l : t == null ? void 0 : t.querySelector("html");
    }),
    s = A(!1),
    c = b(() =>
      [
        "requestFullscreen",
        "webkitRequestFullscreen",
        "webkitEnterFullscreen",
        "webkitEnterFullScreen",
        "webkitRequestFullScreen",
        "mozRequestFullScreen",
        "msRequestFullscreen"
      ].find(l => (t && l in t) || (n.value && l in n.value))
    ),
    u = b(() =>
      [
        "exitFullscreen",
        "webkitExitFullscreen",
        "webkitExitFullScreen",
        "webkitCancelFullScreen",
        "mozCancelFullScreen",
        "msExitFullscreen"
      ].find(l => (t && l in t) || (n.value && l in n.value))
    ),
    o = b(() =>
      [
        "fullScreen",
        "webkitIsFullScreen",
        "webkitDisplayingFullscreen",
        "mozFullScreen",
        "msFullscreenElement"
      ].find(l => (t && l in t) || (n.value && l in n.value))
    ),
    f = [
      "fullscreenElement",
      "webkitFullscreenElement",
      "mozFullScreenElement",
      "msFullscreenElement"
    ].find(l => t && l in t),
    v = X(() => n.value && t && c.value !== void 0 && u.value !== void 0 && o.value !== void 0),
    d = () => (f ? (t == null ? void 0 : t[f]) === n.value : !1),
    S = () => {
      if (o.value) {
        if (t && t[o.value] != null) return t[o.value];
        {
          const l = n.value;
          if ((l == null ? void 0 : l[o.value]) != null) return !!l[o.value];
        }
      }
      return !1;
    };
  async function p() {
    if (!(!v.value || !s.value)) {
      if (u.value)
        if ((t == null ? void 0 : t[u.value]) != null) await t[u.value]();
        else {
          const l = n.value;
          (l == null ? void 0 : l[u.value]) != null && (await l[u.value]());
        }
      s.value = !1;
    }
  }
  async function w() {
    if (!v.value || s.value) return;
    S() && (await p());
    const l = n.value;
    c.value && (l == null ? void 0 : l[c.value]) != null && (await l[c.value](), (s.value = !0));
  }
  async function g() {
    await (s.value ? p() : w());
  }
  const y = () => {
    const l = S();
    (!l || (l && d())) && (s.value = l);
  };
  return (
    T(t, V, y, !1),
    T(() => N(n), V, y, !1),
    i && j(p),
    { isSupported: v, isFullscreen: s, enter: w, exit: p, toggle: g }
  );
}
export { De as _, Le as a, ze as b, Ae as u };
