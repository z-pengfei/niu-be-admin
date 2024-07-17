import {
  d as te,
  r as _e,
  a as S,
  o as l,
  c as g,
  b as n,
  n as ne,
  u as k,
  _ as L,
  e as T,
  f as w,
  w as i,
  g as D,
  E as z,
  h as se,
  i as b,
  j as pe,
  k as fe,
  l as me,
  p as ae,
  m as oe,
  q as V,
  s as ve,
  T as he,
  t as le,
  v as ie,
  F as R,
  x as X,
  y as G,
  z as we,
  A as xe,
  B as K,
  C as A,
  D as ge,
  G as ke,
  H as Ve,
  I as ce,
  J as ee,
  K as ye,
  L as Ce,
  M as H,
  N as be,
  O as Se,
  P as re,
  Q as Ie,
  R as $e,
  S as Ae,
  U as Te,
  V as Le,
  W as Me,
  X as Pe
} from "./index-DWH8vS13.js";
import { _ as O, u as Ee, a as Re } from "./index-DgSXKmha.js";
/* empty css                  */ /* empty css                     */ const B = te("global", () => {
    const t = _e({ isActive: !1 });
    return {
      sidebar: t,
      toggleClick: () => {
        t.isActive = !t.isActive;
      }
    };
  }),
  De = S({
    __name: "Collapse",
    setup(t) {
      const e = B();
      return (m, r) => {
        const o = O;
        return (
          l(),
          g(
            "div",
            { onClick: r[0] || (r[0] = (...d) => k(e).toggleClick && k(e).toggleClick(...d)) },
            [
              n(
                o,
                {
                  class: ne(["collpase-icon", { "is-active": k(e).sidebar.isActive }]),
                  name: "shrink",
                  size: "20"
                },
                null,
                8,
                ["class"]
              )
            ]
          )
        );
      };
    }
  }),
  Oe = L(De, [["__scopeId", "data-v-3a90420e"]]),
  qe = S({
    __name: "FullScreen",
    setup(t) {
      const { isFullscreen: e, toggle: m } = Ee();
      return (r, o) => {
        const d = O;
        return (
          l(),
          g(
            "div",
            { class: "cursor-pointer", onClick: o[0] || (o[0] = (...h) => k(m) && k(m)(...h)) },
            [n(d, { name: k(e) ? "exit-fullscreen" : "fullscreen" }, null, 8, ["name"])]
          )
        );
      };
    }
  }),
  ze = { class: "mt-4px cursor-pointer" },
  Be = S({
    __name: "Dark",
    setup(t) {
      const e = Re(),
        m = async r => {
          const o = r.clientX,
            d = r.clientY,
            h = Math.hypot(Math.max(o, innerWidth - o), Math.max(d, innerHeight - d));
          if (document.startViewTransition === void 0) e.value = !e.value;
          else {
            await document.startViewTransition(() => {
              e.value = !e.value;
            }).ready;
            const x = [`circle(0px at ${o}px ${d}px)`, `circle(${h}px at ${o}px ${d}px)`];
            document.documentElement.animate(
              { clipPath: e.value ? x : [...x].reverse() },
              {
                duration: 300,
                easing: "ease-in",
                pseudoElement: e.value
                  ? "::view-transition-new(root)"
                  : "::view-transition-old(root)"
              }
            );
          }
        };
      return (r, o) => {
        const d = T("Sunny"),
          h = z,
          C = se,
          x = T("Moon");
        return (
          l(),
          g("div", ze, [
            k(e)
              ? D("", !0)
              : (l(),
                w(
                  C,
                  { key: 0, content: "明亮模式" },
                  {
                    default: i(() => [
                      n(h, { size: 22, onClick: m }, { default: i(() => [n(d)]), _: 1 })
                    ]),
                    _: 1
                  }
                )),
            k(e)
              ? (l(),
                w(
                  C,
                  { key: 1, content: "暗黑模式" },
                  {
                    default: i(() => [
                      n(h, { size: 22, onClick: m }, { default: i(() => [n(x)]), _: 1 })
                    ]),
                    _: 1
                  }
                ))
              : D("", !0)
          ])
        );
      };
    }
  }),
  Ne = {},
  Fe = t => (ae("data-v-2fb26022"), (t = t()), oe(), t),
  We = Fe(() =>
    V(
      "div",
      { class: "flex items-center cursor-pointer font-bold" },
      [V("div", { class: "user-avatar" }, "A"), V("div", { class: "ml-6px" }, "Admin")],
      -1
    )
  );
function je(t, e) {
  const m = pe,
    r = fe,
    o = me;
  return (
    l(),
    g("div", null, [
      n(
        o,
        { trigger: "click" },
        {
          dropdown: i(() => [
            n(r, null, {
              default: i(() => [
                n(m, null, { default: i(() => [b(" 修改密码 ")]), _: 1 }),
                n(m, { divided: "" }, { default: i(() => [b(" 注销 ")]), _: 1 })
              ]),
              _: 1
            })
          ]),
          default: i(() => [We]),
          _: 1
        }
      )
    ])
  );
}
const He = L(Ne, [
    ["render", je],
    ["__scopeId", "data-v-2fb26022"]
  ]),
  Xe = { class: "mt-4px cursor-pointer" },
  Ge = S({
    __name: "Refresh",
    setup(t) {
      const e = () => {
        ve.success("刷新成功");
      };
      return (m, r) => {
        const o = T("RefreshRight"),
          d = z,
          h = se;
        return (
          l(),
          g("div", Xe, [
            n(
              h,
              { content: "刷新" },
              {
                default: i(() => [
                  n(d, { size: 20, onClick: e }, { default: i(() => [n(o)]), _: 1 })
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  Ke = { class: "header" },
  Ue = { class: "flex items-center justify-between truncate" },
  Ye = { class: "header-right flex items-center justify-between" },
  Je = S({
    __name: "index",
    setup(t) {
      return (e, m) => (
        l(), g("div", Ke, [V("div", Ue, [n(Oe)]), V("div", Ye, [n(Be), n(Ge), n(qe), n(He)])])
      );
    }
  }),
  Qe = L(Je, [["__scopeId", "data-v-0fa5976d"]]),
  Ze = t => (ae("data-v-8996f933"), (t = t()), oe(), t),
  et = { class: "project-title" },
  tt = Ze(() => V("span", { class: "font-bold text-xl" }, "niu-be-admin", -1)),
  nt = S({
    __name: "index",
    setup(t) {
      const e = B();
      return (m, r) => {
        const o = O,
          d = T("router-link");
        return (
          l(),
          g("div", et, [
            n(
              he,
              { name: "sidebarLogoFade" },
              {
                default: i(() => [
                  k(e).sidebar.isActive
                    ? (l(), w(d, { key: "expand", to: "/" }, { default: i(() => [tt]), _: 1 }))
                    : (l(),
                      w(
                        d,
                        { key: "collapse", to: "/" },
                        { default: i(() => [n(o, { name: "logo", size: "20" })]), _: 1 }
                      ))
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  st = L(nt, [["__scopeId", "data-v-8996f933"]]),
  at = S({
    __name: "SidebarMenuItem",
    props: { menuList: { type: Array, required: !0 } },
    setup(t) {
      const e = le(),
        m = r => {
          if (r.meta.isLink) return window.open(r.meta.isLink, "_blank");
          e.push(r.path);
        };
      return (r, o) => {
        const d = O,
          h = z,
          C = T("SidebarMenuItem", !0),
          x = we,
          I = xe;
        return (
          l(!0),
          g(
            R,
            null,
            ie(t.menuList, c => {
              var _;
              return (
                l(),
                g(
                  R,
                  { key: c.path },
                  [
                    c.meta.hidden
                      ? D("", !0)
                      : (l(),
                        g(
                          R,
                          { key: 0 },
                          [
                            (_ = c.children) != null && _.length
                              ? (l(),
                                w(
                                  x,
                                  { key: 0, index: c.path },
                                  {
                                    title: i(() => [
                                      n(
                                        h,
                                        null,
                                        {
                                          default: i(() => [
                                            c.meta.iconType == "el"
                                              ? (l(), w(X(c.meta.icon), { key: 0 }))
                                              : (l(),
                                                w(d, { key: 1, name: c.meta.icon }, null, 8, [
                                                  "name"
                                                ]))
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      ),
                                      V("span", null, G(c.meta.title), 1)
                                    ]),
                                    default: i(() => [
                                      n(C, { menuList: c.children }, null, 8, ["menuList"])
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ["index"]
                                ))
                              : (l(),
                                w(
                                  I,
                                  { key: 1, index: c.path, onClick: N => m(c) },
                                  {
                                    default: i(() => [
                                      n(
                                        h,
                                        null,
                                        {
                                          default: i(() => [
                                            c.meta.iconType == "el"
                                              ? (l(), w(X(c.meta.icon), { key: 0 }))
                                              : (l(),
                                                w(d, { key: 1, name: c.meta.icon }, null, 8, [
                                                  "name"
                                                ]))
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      ),
                                      V("span", null, G(c.meta.title), 1)
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ["index", "onClick"]
                                ))
                          ],
                          64
                        ))
                  ],
                  64
                )
              );
            }),
            128
          )
        );
      };
    }
  }),
  ot = S({
    __name: "index",
    setup(t) {
      const e = B(),
        m = K(),
        r = A(ge[0].children);
      return (o, d) => {
        const h = ke;
        return (
          l(),
          w(
            h,
            {
              "default-active": k(m).path,
              class: "el-menu-vertical-demo",
              collapse: !k(e).sidebar.isActive,
              "unique-opened": !0
            },
            { default: i(() => [n(at, { menuList: k(r) }, null, 8, ["menuList"])]), _: 1 },
            8,
            ["default-active", "collapse"]
          )
        );
      };
    }
  }),
  lt = L(ot, [["__scopeId", "data-v-6eb92e6b"]]),
  ue = te("tagsView", () => {
    const t = A([]),
      e = A([]),
      m = K(),
      r = le(),
      o = s => {
        t.value.some(a => a.path === s.path) ||
          (s.meta.affix ? t.value.unshift(s) : t.value.push(s));
      },
      d = s => {
        const a = s.name;
        e.value.includes(a) || (s.meta.keepAlive && e.value.push(a));
      },
      h = s =>
        new Promise(a => {
          for (const [u, f] of t.value.entries())
            if (f.path === s.path) {
              t.value.splice(u, 1);
              break;
            }
          a([...t.value]);
        }),
      C = s => {
        const a = s.name;
        return new Promise(u => {
          const f = e.value.indexOf(a);
          f > -1 && e.value.splice(f, 1), u([...e.value]);
        });
      },
      x = s =>
        new Promise(a => {
          (t.value = t.value.filter(u => (u == null ? void 0 : u.meta.affix) || u.path === s.path)),
            a([...t.value]);
        }),
      I = s => {
        const a = s.name;
        return new Promise(u => {
          const f = e.value.indexOf(a);
          f > -1 ? (e.value = e.value.slice(f, f + 1)) : (e.value = []), u([...e.value]);
        });
      };
    return {
      visitedViews: t,
      cachedViews: e,
      addView: s => {
        o(s), d(s);
      },
      delView: s =>
        new Promise(a => {
          h(s), C(s), a({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      delOtherViews: s =>
        new Promise(a => {
          x(s), I(s), a({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      delLeftViews: s =>
        new Promise(a => {
          const u = t.value.findIndex(f => f.path === s.path);
          u !== -1 &&
            ((t.value = t.value.filter((f, P) => {
              if (P >= u || (f != null && f.meta.affix)) return !0;
              const p = e.value.indexOf(f.name);
              return p > -1 && e.value.splice(p, 1), !1;
            })),
            a({ visitedViews: [...t.value] }));
        }),
      delRightViews: s =>
        new Promise(a => {
          const u = t.value.findIndex(f => f.path === s.path);
          u !== -1 &&
            ((t.value = t.value.filter((f, P) => {
              if (P <= u || (f != null && f.meta.affix)) return !0;
            })),
            a({ visitedViews: [...t.value] }));
        }),
      delAllViews: () =>
        new Promise(s => {
          const a = t.value.filter(u => (u == null ? void 0 : u.meta.affix));
          (t.value = a),
            (e.value = []),
            s({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      updateVisitedView: s => {
        for (let a of t.value)
          if (a.path === s.path) {
            a = Object.assign(a, s);
            break;
          }
      },
      isActive: s => s.path === m.path,
      toLastView: (s, a) => {
        const u = s.slice(-1)[0];
        u && u.fullPath
          ? r.push(u.fullPath)
          : (a == null ? void 0 : a.name) === "dashboard"
            ? r.replace("/redirect" + a.fullPath)
            : r.push("/");
      }
    };
  }),
  it = { class: "scrollbar-flex-content" },
  ct = S({
    __name: "index",
    setup(t) {
      const { proxy: e } = Ie(),
        m = Ve(() => (e == null ? void 0 : e.$refs.scrollContainer.$refs.wrapRef));
      function r(p) {
        const v = p.wheelDelta || -p.deltaY * 40;
        m.value.scrollLeft += v / 4;
      }
      const o = ue(),
        { visitedViews: d } = ce(o),
        h = A(0),
        C = A(0),
        x = A(!1),
        I = A(null),
        c = A({
          path: "",
          fullPath: "",
          name: "",
          query: {},
          meta: { title: "", affix: !1, keepAlive: !0 }
        }),
        _ = K();
      ee(
        _,
        () => {
          N(), U();
        },
        { immediate: !0 }
      ),
        ye(() => {
          ee(x, p => {
            p
              ? document.body.addEventListener("click", F)
              : document.body.removeEventListener("click", F);
          });
        });
      function N() {
        var p, v;
        _.meta.title &&
          o.addView({
            name: _.name,
            path: _.path,
            fullPath: _.fullPath,
            query: _.query,
            meta: {
              title: _.meta.title,
              affix: !!((p = _.meta) != null && p.affix),
              keepAlive: !!((v = _.meta) != null && v.keepAlive)
            }
          });
      }
      function U() {
        Ce(() => {
          var p, v;
          for (const M of d.value)
            M.path === _.path &&
              M.fullPath !== _.fullPath &&
              o.updateVisitedView({
                name: _.name,
                path: _.path,
                fullPath: _.fullPath,
                query: _.query,
                meta: {
                  title: _.meta.title,
                  affix: !!((p = _.meta) != null && p.affix),
                  keepAlive: !!((v = _.meta) != null && v.keepAlive)
                }
              });
        });
      }
      function Y(p, v) {
        var E, Z;
        c.value = p;
        const M = v.target,
          q = 105,
          W = ((E = I.value) == null ? void 0 : E.getBoundingClientRect().left) || 0,
          j = ((Z = I.value) == null ? void 0 : Z.getBoundingClientRect().width) || 0,
          { top: $, height: y } = M.getBoundingClientRect();
        (h.value = v.clientX + q > W + j ? v.clientX - q : v.clientX + 20),
          (C.value = $ + y - 6),
          (x.value = !0);
      }
      function F() {
        x.value = !1;
      }
      function J(p) {
        return _.name === p.name;
      }
      function de(p) {}
      function Q(p) {
        return p.meta.affix;
      }
      function s(p) {
        o.delView(p).then(v => {
          o.isActive(p) && o.toLastView(v.visitedViews, p);
        });
      }
      function a() {
        o.delOtherViews(c.value);
      }
      function u() {
        o.delLeftViews(c.value);
      }
      function f() {
        o.delRightViews(c.value);
      }
      function P() {
        o.delAllViews();
      }
      return (p, v) => {
        const M = T("Close"),
          q = z,
          W = T("router-link"),
          j = $e,
          $ = O;
        return (
          l(),
          g(
            R,
            null,
            [
              V(
                "div",
                { ref_key: "container", ref: I },
                [
                  n(
                    j,
                    { ref: "scrollContainer", height: "34px", onWheel: H(r, ["prevent"]) },
                    {
                      default: i(() => [
                        V("div", it, [
                          (l(!0),
                          g(
                            R,
                            null,
                            ie(
                              k(d),
                              y => (
                                l(),
                                w(
                                  W,
                                  {
                                    key: y.path,
                                    to: { path: y.path, query: y.query },
                                    class: ne(["tags-item", { active: J(y) }]),
                                    onContextmenu: H(E => Y(y, E), ["prevent"])
                                  },
                                  {
                                    default: i(() => [
                                      b(G(y.meta.title) + " ", 1),
                                      y.meta.affix
                                        ? D("", !0)
                                        : (l(),
                                          w(
                                            q,
                                            {
                                              key: 0,
                                              size: 10,
                                              onClick: H(E => s(y), ["prevent", "stop"])
                                            },
                                            { default: i(() => [n(M)]), _: 2 },
                                            1032,
                                            ["onClick"]
                                          ))
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ["to", "class", "onContextmenu"]
                                )
                              )
                            ),
                            128
                          ))
                        ])
                      ]),
                      _: 1
                    },
                    512
                  )
                ],
                512
              ),
              be(
                V(
                  "ul",
                  { class: "tag-menu", style: re({ left: h.value + "px", top: C.value + "px" }) },
                  [
                    V("li", { onClick: v[0] || (v[0] = y => (c.value, void 0)) }, [
                      n($, { name: "refresh" }),
                      b(" 刷新 ")
                    ]),
                    Q(c.value)
                      ? D("", !0)
                      : (l(),
                        g("li", { key: 0, onClick: v[1] || (v[1] = y => s(c.value)) }, [
                          n($, { name: "close" }),
                          b(" 关闭 ")
                        ])),
                    V("li", { onClick: a }, [n($, { name: "close_other" }), b(" 关闭其它 ")]),
                    (l(),
                    g("li", { key: 1, onClick: u }, [
                      n($, { name: "close_left" }),
                      b(" 关闭左侧 ")
                    ])),
                    (l(),
                    g("li", { key: 2, onClick: f }, [
                      n($, { name: "close_right" }),
                      b(" 关闭右侧 ")
                    ])),
                    V("li", { onClick: v[2] || (v[2] = y => P()) }, [
                      n($, { name: "close_all" }),
                      b(" 关闭所有 ")
                    ])
                  ],
                  4
                ),
                [[Se, x.value]]
              )
            ],
            64
          )
        );
      };
    }
  }),
  rt = L(ct, [["__scopeId", "data-v-549a6cac"]]),
  ut = S({
    __name: "index",
    setup(t) {
      const e = B(),
        m = ue(),
        { cachedViews: r } = ce(m);
      return (o, d) => {
        const h = Te,
          C = Le,
          x = T("router-view"),
          I = Me,
          c = Pe;
        return (
          l(),
          w(
            c,
            { class: "common-layout" },
            {
              default: i(() => [
                n(
                  h,
                  {
                    style: re({ width: k(e).sidebar.isActive ? "220px" : "65px" }),
                    class: "sidebar"
                  },
                  { default: i(() => [n(st), b(), n(lt)]), _: 1 },
                  8,
                  ["style"]
                ),
                n(c, null, {
                  default: i(() => [
                    n(C, null, { default: i(() => [n(Qe)]), _: 1 }),
                    n(I, null, {
                      default: i(() => [
                        n(rt),
                        n(x, null, {
                          default: i(({ Component: _ }) => [
                            (l(), w(Ae, { include: k(r) }, [(l(), w(X(_)))], 1032, ["include"]))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }
          )
        );
      };
    }
  }),
  mt = L(ut, [["__scopeId", "data-v-3e20a2b3"]]);
export { mt as default };
