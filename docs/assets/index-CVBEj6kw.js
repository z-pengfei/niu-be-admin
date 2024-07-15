import {
  z as ee,
  r as A,
  A as Y,
  B as te,
  d as $,
  c as de,
  C as ne,
  D as Z,
  o as _e,
  F as pe,
  a as L,
  g as d,
  b as k,
  h as V,
  e as n,
  w as l,
  G as q,
  H as se,
  u as w,
  k as X,
  I as fe,
  J as me,
  l as y,
  K as B,
  L as oe,
  M as ve,
  N as he,
  O as S,
  P as ae,
  Q as j,
  R as G,
  _ as T,
  S as ge,
  T as we,
  U as xe,
  V as ke,
  W as Ve,
  p as le,
  X as Ce,
  Y as be,
  Z as ye,
  v as ce,
  x as ie,
  $ as Se,
  a0 as $e,
  a1 as Ie,
  a2 as Ae,
  a3 as Le,
  a4 as Me,
  a5 as Te,
  a6 as Pe
} from "./index-9lMfA8vk.js";
import { _ as R, a as Ee, b as Re } from "./index-DwP7Y2qu.js";
const re = ee("tagsView", () => {
    const t = A([]),
      e = A([]),
      f = Y(),
      c = te(),
      a = s => {
        t.value.some(o => o.path === s.path) || (s.affix ? t.value.unshift(s) : t.value.push(s));
      },
      r = s => {
        const o = s.name;
        e.value.includes(o) || (s.keepAlive && e.value.push(o));
      },
      h = s =>
        new Promise(o => {
          for (const [i, p] of t.value.entries())
            if (p.path === s.path) {
              t.value.splice(i, 1);
              break;
            }
          o([...t.value]);
        }),
      x = s => {
        const o = s.name;
        return new Promise(i => {
          const p = e.value.indexOf(o);
          p > -1 && e.value.splice(p, 1), i([...e.value]);
        });
      },
      g = s =>
        new Promise(o => {
          (t.value = t.value.filter(i => (i == null ? void 0 : i.affix) || i.path === s.path)),
            o([...t.value]);
        }),
      v = s => {
        const o = s.name;
        return new Promise(i => {
          const p = e.value.indexOf(o);
          p > -1 ? (e.value = e.value.slice(p, p + 1)) : (e.value = []), i([...e.value]);
        });
      };
    return {
      visitedViews: t,
      cachedViews: e,
      addView: s => {
        a(s), r(s);
      },
      delView: s =>
        new Promise(o => {
          h(s), x(s), o({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      delOtherViews: s =>
        new Promise(o => {
          g(s), v(s), o({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      delLeftViews: s =>
        new Promise(o => {
          const i = t.value.findIndex(p => p.path === s.path);
          i !== -1 &&
            ((t.value = t.value.filter((p, z) => {
              if (z >= i || (p != null && p.affix)) return !0;
              const u = e.value.indexOf(p.name);
              return u > -1 && e.value.splice(u, 1), !1;
            })),
            o({ visitedViews: [...t.value] }));
        }),
      delRightViews: s =>
        new Promise(o => {
          const i = t.value.findIndex(p => p.path === s.path);
          i !== -1 &&
            ((t.value = t.value.filter((p, z) => {
              if (z <= i || (p != null && p.affix)) return !0;
            })),
            o({ visitedViews: [...t.value] }));
        }),
      delAllViews: () =>
        new Promise(s => {
          const o = t.value.filter(i => (i == null ? void 0 : i.affix));
          (t.value = o),
            (e.value = []),
            s({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      updateVisitedView: s => {
        for (let o of t.value)
          if (o.path === s.path) {
            o = Object.assign(o, s);
            break;
          }
      },
      isActive: s => s.path === f.path,
      toLastView: (s, o) => {
        const i = s.slice(-1)[0];
        i && i.fullPath
          ? c.push(i.fullPath)
          : (o == null ? void 0 : o.name) === "Dashboard"
            ? c.replace("/redirect" + o.fullPath)
            : c.push("/");
      }
    };
  }),
  De = { class: "scrollbar-flex-content" },
  ze = $({
    __name: "TabView",
    setup(t) {
      const { proxy: e } = ve(),
        f = de(() => (e == null ? void 0 : e.$refs.scrollContainer.$refs.wrapRef));
      function c(u) {
        const m = u.wheelDelta || -u.deltaY * 40;
        f.value.scrollLeft += m / 4;
      }
      const a = re(),
        { visitedViews: r } = ne(a),
        h = A(0),
        x = A(0),
        g = A(!1),
        v = A(null),
        b = A({
          path: "",
          fullPath: "",
          name: "",
          title: "",
          affix: !1,
          keepAlive: !0,
          query: {},
          meta: {}
        }),
        _ = Y();
      Z(
        _,
        () => {
          P(), D();
        },
        { immediate: !0 }
      ),
        _e(() => {
          Z(g, u => {
            u
              ? document.body.addEventListener("click", F)
              : document.body.removeEventListener("click", F);
          });
        });
      function P() {
        var u, m;
        _.meta.title &&
          a.addView({
            name: _.name,
            title: _.meta.title,
            path: _.path,
            fullPath: _.fullPath,
            affix: !!((u = _.meta) != null && u.affix),
            keepAlive: !!((m = _.meta) != null && m.keepAlive),
            query: _.query
          });
      }
      function D() {
        pe(() => {
          var u, m;
          for (const M of r.value)
            M.path === _.path &&
              M.fullPath !== _.fullPath &&
              a.updateVisitedView({
                name: _.name,
                title: _.meta.title,
                path: _.path,
                fullPath: _.fullPath,
                affix: !!((u = _.meta) != null && u.affix),
                keepAlive: !!((m = _.meta) != null && m.keepAlive),
                query: _.query
              });
        });
      }
      function K(u, m) {
        var E, Q;
        b.value = u;
        const M = m.target,
          O = 105,
          W = ((E = v.value) == null ? void 0 : E.getBoundingClientRect().left) || 0,
          H = ((Q = v.value) == null ? void 0 : Q.getBoundingClientRect().width) || 0,
          { top: I, height: C } = M.getBoundingClientRect();
        (h.value = m.clientX + O > W + H ? m.clientX - O : m.clientX + 20),
          (x.value = I + C - 6),
          (g.value = !0);
      }
      function F() {
        g.value = !1;
      }
      function U(u) {
        return _.name === u.name;
      }
      function ue(u) {}
      function J(u) {
        return !1;
      }
      function s(u) {
        a.delView(u).then(m => {
          a.isActive(u) && a.toLastView(m.visitedViews, u);
        });
      }
      function o() {}
      function i() {}
      function p() {}
      function z(u) {}
      return (u, m) => {
        const M = L("Close"),
          O = G,
          W = L("router-link"),
          H = he,
          I = R;
        return (
          d(),
          k(
            q,
            null,
            [
              V(
                "div",
                { ref_key: "container", ref: v },
                [
                  n(
                    H,
                    { ref: "scrollContainer", height: "34px", onWheel: X(c, ["prevent"]) },
                    {
                      default: l(() => [
                        V("div", De, [
                          (d(!0),
                          k(
                            q,
                            null,
                            se(
                              w(r),
                              C => (
                                d(),
                                S(
                                  W,
                                  {
                                    key: C.path,
                                    to: { path: C.path, query: C.query },
                                    class: ae(["tags-item", { active: U(C) }]),
                                    onContextmenu: X(E => K(C, E), ["prevent"])
                                  },
                                  {
                                    default: l(() => [
                                      y(j(C.title) + " ", 1),
                                      n(
                                        O,
                                        { size: 10, onClick: X(E => s(C), ["prevent", "stop"]) },
                                        { default: l(() => [n(M)]), _: 2 },
                                        1032,
                                        ["onClick"]
                                      )
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
              fe(
                V(
                  "ul",
                  { class: "tag-menu", style: oe({ left: h.value + "px", top: x.value + "px" }) },
                  [
                    V("li", { onClick: m[0] || (m[0] = C => (b.value, void 0)) }, [
                      n(I, { "icon-class": "refresh" }),
                      y(" 刷新 ")
                    ]),
                    J(b.value)
                      ? B("", !0)
                      : (d(),
                        k("li", { key: 0, onClick: m[1] || (m[1] = C => s(b.value)) }, [
                          n(I, { "icon-class": "close" }),
                          y(" 关闭 ")
                        ])),
                    V("li", { onClick: o }, [
                      n(I, { "icon-class": "close_other" }),
                      y(" 关闭其它 ")
                    ]),
                    (d(),
                    k("li", { key: 1, onClick: i }, [
                      n(I, { "icon-class": "close_left" }),
                      y(" 关闭左侧 ")
                    ])),
                    (d(),
                    k("li", { key: 2, onClick: p }, [
                      n(I, { "icon-class": "close_right" }),
                      y(" 关闭右侧 ")
                    ])),
                    V("li", { onClick: m[2] || (m[2] = C => (b.value, void 0)) }, [
                      n(I, { "icon-class": "close_all" }),
                      y(" 关闭所有 ")
                    ])
                  ],
                  4
                ),
                [[me, g.value]]
              )
            ],
            64
          )
        );
      };
    }
  }),
  Oe = T(ze, [["__scopeId", "data-v-a7ad981c"]]),
  qe = { style: { "margin-left": "10px" } },
  Be = $({
    __name: "SidebarMenuItem",
    props: { menuList: { type: Array, required: !0 } },
    setup(t) {
      const e = te(),
        f = c => {
          if (c.meta.isLink) return window.open(c.meta.isLink, "_blank");
          e.push(c.path);
        };
      return (c, a) => {
        const r = R,
          h = L("SidebarMenuItem", !0),
          x = ge,
          g = we;
        return (
          d(!0),
          k(
            q,
            null,
            se(t.menuList, v => {
              var b;
              return (
                d(),
                k(
                  q,
                  { key: v.path },
                  [
                    (b = v.children) != null && b.length && !v.meta.hidden
                      ? (d(),
                        S(
                          x,
                          { key: 0, index: v.path },
                          {
                            title: l(() => [
                              n(r, { "icon-class": v.meta.icon, size: "18" }, null, 8, [
                                "icon-class"
                              ]),
                              V("span", qe, j(v.meta.title), 1)
                            ]),
                            default: l(() => [
                              n(h, { menuList: v.children }, null, 8, ["menuList"])
                            ]),
                            _: 2
                          },
                          1032,
                          ["index"]
                        ))
                      : v.meta.hidden
                        ? B("", !0)
                        : (d(),
                          S(
                            g,
                            { key: 1, index: v.path, onClick: _ => f(v) },
                            {
                              title: l(() => [
                                n(r, { "icon-class": v.meta.icon }, null, 8, ["icon-class"]),
                                y(" " + j(v.meta.title), 1)
                              ]),
                              _: 2
                            },
                            1032,
                            ["index", "onClick"]
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
  N = ee("global", () => {
    const t = xe({ isActive: !1 });
    return {
      sidebar: t,
      toggleClick: () => {
        t.isActive = !t.isActive;
      }
    };
  }),
  Ne = $({
    __name: "LeftMenu",
    setup(t) {
      const e = N(),
        f = Y(),
        c = A(ke);
      return (a, r) => {
        const h = Be,
          x = Ve;
        return (
          d(),
          S(
            x,
            {
              "default-active": w(f).path,
              class: "el-menu-vertical-demo",
              collapse: !w(e).sidebar.isActive
            },
            { default: l(() => [n(h, { menuList: w(c) }, null, 8, ["menuList"])]), _: 1 },
            8,
            ["default-active", "collapse"]
          )
        );
      };
    }
  }),
  Fe = $({
    __name: "Collapse",
    setup(t) {
      const e = N();
      return (f, c) => {
        const a = R;
        return (
          d(),
          k(
            "div",
            { onClick: c[0] || (c[0] = (...r) => w(e).toggleClick && w(e).toggleClick(...r)) },
            [
              n(
                a,
                {
                  class: ae(["collpase-icon", { "is-active": w(e).sidebar.isActive }]),
                  "icon-class": "shrink",
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
  We = T(Fe, [["__scopeId", "data-v-e486ead0"]]),
  He = $({
    __name: "FullScreen",
    setup(t) {
      const { isFullscreen: e, toggle: f } = Ee();
      return (c, a) => {
        const r = R;
        return (
          d(),
          k(
            "div",
            { class: "cursor-pointer", onClick: a[0] || (a[0] = (...h) => w(f) && w(f)(...h)) },
            [
              n(r, { "icon-class": w(e) ? "exit-fullscreen" : "fullscreen" }, null, 8, [
                "icon-class"
              ])
            ]
          )
        );
      };
    }
  }),
  Xe = { class: "mt-4px cursor-pointer" },
  je = $({
    __name: "Dark",
    setup(t) {
      const e = Re(),
        f = async c => {
          const a = c.clientX,
            r = c.clientY,
            h = Math.hypot(Math.max(a, innerWidth - a), Math.max(r, innerHeight - r));
          if (document.startViewTransition === void 0) e.value = !e.value;
          else {
            await document.startViewTransition(() => {
              e.value = !e.value;
            }).ready;
            const g = [`circle(0px at ${a}px ${r}px)`, `circle(${h}px at ${a}px ${r}px)`];
            document.documentElement.animate(
              { clipPath: e.value ? g : [...g].reverse() },
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
      return (c, a) => {
        const r = L("Sunny"),
          h = G,
          x = le,
          g = L("Moon");
        return (
          d(),
          k("div", Xe, [
            w(e)
              ? B("", !0)
              : (d(),
                S(
                  x,
                  { key: 0, content: "明亮模式" },
                  {
                    default: l(() => [
                      n(h, { size: 22, onClick: f }, { default: l(() => [n(r)]), _: 1 })
                    ]),
                    _: 1
                  }
                )),
            w(e)
              ? (d(),
                S(
                  x,
                  { key: 1, content: "暗黑模式" },
                  {
                    default: l(() => [
                      n(h, { size: 22, onClick: f }, { default: l(() => [n(g)]), _: 1 })
                    ]),
                    _: 1
                  }
                ))
              : B("", !0)
          ])
        );
      };
    }
  }),
  Ye = {},
  Ge = t => (ce("data-v-2fb26022"), (t = t()), ie(), t),
  Ke = Ge(() =>
    V(
      "div",
      { class: "flex items-center cursor-pointer font-bold" },
      [V("div", { class: "user-avatar" }, "A"), V("div", { class: "ml-6px" }, "Admin")],
      -1
    )
  );
function Ue(t, e) {
  const f = Ce,
    c = be,
    a = ye;
  return (
    d(),
    k("div", null, [
      n(
        a,
        { trigger: "click" },
        {
          dropdown: l(() => [
            n(c, null, {
              default: l(() => [
                n(f, null, { default: l(() => [y(" 修改密码 ")]), _: 1 }),
                n(f, { divided: "" }, { default: l(() => [y(" 注销 ")]), _: 1 })
              ]),
              _: 1
            })
          ]),
          default: l(() => [Ke]),
          _: 1
        }
      )
    ])
  );
}
const Je = T(Ye, [
    ["render", Ue],
    ["__scopeId", "data-v-2fb26022"]
  ]),
  Qe = { class: "mt-4px cursor-pointer" },
  Ze = $({
    __name: "Refresh",
    setup(t) {
      const e = () => {
        Se.success("刷新成功");
      };
      return (f, c) => {
        const a = L("RefreshRight"),
          r = G,
          h = le;
        return (
          d(),
          k("div", Qe, [
            n(
              h,
              { content: "刷新" },
              {
                default: l(() => [
                  n(r, { size: 20, onClick: e }, { default: l(() => [n(a)]), _: 1 })
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  et = { class: "header" },
  tt = { class: "flex items-center justify-between truncate" },
  nt = { class: "header-right flex items-center justify-between" },
  st = $({
    __name: "index",
    setup(t) {
      return (e, f) => (
        d(), k("div", et, [V("div", tt, [n(We)]), V("div", nt, [n(je), n(Ze), n(He), n(Je)])])
      );
    }
  }),
  ot = T(st, [["__scopeId", "data-v-0fa5976d"]]),
  at = t => (ce("data-v-08070c1c"), (t = t()), ie(), t),
  lt = { class: "project-title" },
  ct = at(() => V("span", { class: "font-bold text-xl" }, "niu-be-admin", -1)),
  it = $({
    __name: "index",
    setup(t) {
      const e = N();
      return (f, c) => {
        const a = R,
          r = L("router-link");
        return (
          d(),
          k("div", lt, [
            n(
              $e,
              { name: "sidebarLogoFade" },
              {
                default: l(() => [
                  w(e).sidebar.isActive
                    ? (d(), S(r, { key: "expand", to: "/" }, { default: l(() => [ct]), _: 1 }))
                    : (d(),
                      S(
                        r,
                        { key: "collapse", to: "/" },
                        { default: l(() => [n(a, { "icon-class": "logo", size: "20" })]), _: 1 }
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
  rt = T(it, [["__scopeId", "data-v-08070c1c"]]),
  ut = $({
    __name: "index",
    setup(t) {
      const e = N(),
        f = re(),
        { cachedViews: c } = ne(f);
      return (a, r) => {
        const h = Ne,
          x = Le,
          g = Me,
          v = Oe,
          b = L("router-view"),
          _ = Te,
          P = Pe;
        return (
          d(),
          S(
            P,
            { class: "common-layout" },
            {
              default: l(() => [
                n(
                  x,
                  {
                    style: oe({ width: w(e).sidebar.isActive ? "220px" : "65px" }),
                    class: "sidebar"
                  },
                  { default: l(() => [n(rt), y(), n(h)]), _: 1 },
                  8,
                  ["style"]
                ),
                n(P, null, {
                  default: l(() => [
                    n(g, null, { default: l(() => [n(ot)]), _: 1 }),
                    n(_, null, {
                      default: l(() => [
                        n(v),
                        n(b, null, {
                          default: l(({ Component: D }) => [
                            (d(), S(Ie, { include: w(c) }, [(d(), S(Ae(D)))], 1032, ["include"]))
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
  pt = T(ut, [["__scopeId", "data-v-aa6cd039"]]);
export { pt as default };
