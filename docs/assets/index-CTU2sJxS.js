import {
  d as ae,
  r as fe,
  a as S,
  o as i,
  c as g,
  b as s,
  n as oe,
  u as k,
  _ as T,
  e as L,
  f as w,
  w as c,
  g as P,
  E as z,
  h as le,
  i as C,
  j as me,
  k as he,
  l as ve,
  p as ie,
  m as ce,
  q as V,
  s as we,
  T as xe,
  t as re,
  v as ue,
  F as D,
  x as U,
  y as Y,
  z as Ve,
  A as ge,
  B as J,
  C as A,
  D as ke,
  G as ye,
  H as be,
  I as de,
  J as se,
  K as Ce,
  L as Se,
  M as K,
  N as Ie,
  O as $e,
  P as _e,
  Q as Ae,
  R as Le,
  S as Pe,
  U as Te,
  V as Me,
  W as Ee,
  X as Re
} from "./index-DcxNABBM.js";
import { _ as O, u as De, a as Oe } from "./index-COPllbn5.js";
/* empty css                  */ /* empty css                     */ const B = ae("global", () => {
    const t = fe({ isActive: !1 });
    return {
      sidebar: t,
      toggleClick: () => {
        t.isActive = !t.isActive;
      }
    };
  }),
  Fe = S({
    __name: "Collapse",
    setup(t) {
      const e = B();
      return (h, u) => {
        const a = O;
        return (
          i(),
          g(
            "div",
            { onClick: u[0] || (u[0] = (..._) => k(e).toggleClick && k(e).toggleClick(..._)) },
            [
              s(
                a,
                {
                  class: oe(["collpase-icon", { "is-active": k(e).sidebar.isActive }]),
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
  qe = T(Fe, [["__scopeId", "data-v-3a90420e"]]),
  ze = S({
    __name: "FullScreen",
    setup(t) {
      const { isFullscreen: e, toggle: h } = De();
      return (u, a) => {
        const _ = O;
        return (
          i(),
          g(
            "div",
            { class: "cursor-pointer", onClick: a[0] || (a[0] = (...v) => k(h) && k(h)(...v)) },
            [s(_, { name: k(e) ? "exit-fullscreen" : "fullscreen" }, null, 8, ["name"])]
          )
        );
      };
    }
  }),
  Be = { class: "mt-4px cursor-pointer" },
  Ne = S({
    __name: "Dark",
    setup(t) {
      const e = Oe(),
        h = async u => {
          const a = u.clientX,
            _ = u.clientY,
            v = Math.hypot(Math.max(a, innerWidth - a), Math.max(_, innerHeight - _));
          if (document.startViewTransition === void 0) e.value = !e.value;
          else {
            await document.startViewTransition(() => {
              e.value = !e.value;
            }).ready;
            const x = [`circle(0px at ${a}px ${_}px)`, `circle(${v}px at ${a}px ${_}px)`];
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
      return (u, a) => {
        const _ = L("Sunny"),
          v = z,
          b = le,
          x = L("Moon");
        return (
          i(),
          g("div", Be, [
            k(e)
              ? P("", !0)
              : (i(),
                w(
                  b,
                  { key: 0, content: "明亮模式" },
                  {
                    default: c(() => [
                      s(v, { size: 22, onClick: h }, { default: c(() => [s(_)]), _: 1 })
                    ]),
                    _: 1
                  }
                )),
            k(e)
              ? (i(),
                w(
                  b,
                  { key: 1, content: "暗黑模式" },
                  {
                    default: c(() => [
                      s(v, { size: 22, onClick: h }, { default: c(() => [s(x)]), _: 1 })
                    ]),
                    _: 1
                  }
                ))
              : P("", !0)
          ])
        );
      };
    }
  }),
  We = {},
  je = t => (ie("data-v-2fb26022"), (t = t()), ce(), t),
  He = je(() =>
    V(
      "div",
      { class: "flex items-center cursor-pointer font-bold" },
      [V("div", { class: "user-avatar" }, "A"), V("div", { class: "ml-6px" }, "Admin")],
      -1
    )
  );
function Xe(t, e) {
  const h = me,
    u = he,
    a = ve;
  return (
    i(),
    g("div", null, [
      s(
        a,
        { trigger: "click" },
        {
          dropdown: c(() => [
            s(u, null, {
              default: c(() => [
                s(h, null, { default: c(() => [C(" 修改密码 ")]), _: 1 }),
                s(h, { divided: "" }, { default: c(() => [C(" 注销 ")]), _: 1 })
              ]),
              _: 1
            })
          ]),
          default: c(() => [He]),
          _: 1
        }
      )
    ])
  );
}
const Ge = T(We, [
    ["render", Xe],
    ["__scopeId", "data-v-2fb26022"]
  ]),
  Ke = { class: "mt-4px cursor-pointer" },
  Ue = S({
    __name: "Refresh",
    setup(t) {
      const e = () => {
        we.success("刷新成功");
      };
      return (h, u) => {
        const a = L("RefreshRight"),
          _ = z,
          v = le;
        return (
          i(),
          g("div", Ke, [
            s(
              v,
              { content: "刷新" },
              {
                default: c(() => [
                  s(_, { size: 20, onClick: e }, { default: c(() => [s(a)]), _: 1 })
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  Ye = { class: "header" },
  Je = { class: "flex items-center justify-between truncate" },
  Qe = { class: "header-right flex items-center justify-between" },
  Ze = S({
    __name: "index",
    setup(t) {
      return (e, h) => (
        i(), g("div", Ye, [V("div", Je, [s(qe)]), V("div", Qe, [s(Ne), s(Ue), s(ze), s(Ge)])])
      );
    }
  }),
  et = T(Ze, [["__scopeId", "data-v-0fa5976d"]]),
  tt = t => (ie("data-v-22360ee7"), (t = t()), ce(), t),
  nt = { class: "project-title" },
  st = tt(() => V("span", { class: "font-bold text-xl" }, "niu-be-admin", -1)),
  at = S({
    __name: "index",
    setup(t) {
      const e = B();
      return (h, u) => {
        const a = O,
          _ = L("router-link");
        return (
          i(),
          g("div", nt, [
            s(
              xe,
              { name: "sidebarLogoFade" },
              {
                default: c(() => [
                  k(e).sidebar.isActive
                    ? (i(), w(_, { key: "expand", to: "/" }, { default: c(() => [st]), _: 1 }))
                    : (i(),
                      w(
                        _,
                        { key: "collapse", to: "/" },
                        { default: c(() => [s(a, { name: "niube-logo", size: "80" })]), _: 1 }
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
  ot = T(at, [["__scopeId", "data-v-22360ee7"]]),
  lt = S({
    __name: "SidebarMenuItem",
    props: { menuList: { type: Array, required: !0 } },
    setup(t) {
      const e = re(),
        h = u => {
          if (u.meta.isLink) return window.open(u.meta.isLink, "_blank");
          e.push(u.path);
        };
      return (u, a) => {
        const _ = O,
          v = z,
          b = L("SidebarMenuItem", !0),
          x = Ve,
          I = ge;
        return (
          i(!0),
          g(
            D,
            null,
            ue(t.menuList, o => {
              var p;
              return (
                i(),
                g(
                  D,
                  { key: o.path },
                  [
                    o.meta.hidden
                      ? P("", !0)
                      : (i(),
                        g(
                          D,
                          { key: 0 },
                          [
                            (p = o.children) != null && p.length
                              ? (i(),
                                w(
                                  x,
                                  { key: 0, index: o.path },
                                  {
                                    title: c(() => [
                                      s(
                                        v,
                                        null,
                                        {
                                          default: c(() => [
                                            o.meta.iconType == "el"
                                              ? (i(), w(U(o.meta.icon), { key: 0 }))
                                              : (i(),
                                                w(_, { key: 1, name: o.meta.icon }, null, 8, [
                                                  "name"
                                                ]))
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      ),
                                      V("span", null, Y(o.meta.title), 1)
                                    ]),
                                    default: c(() => [
                                      s(b, { menuList: o.children }, null, 8, ["menuList"])
                                    ]),
                                    _: 2
                                  },
                                  1032,
                                  ["index"]
                                ))
                              : (i(),
                                w(
                                  I,
                                  { key: 1, index: o.path, onClick: N => h(o) },
                                  {
                                    default: c(() => [
                                      s(
                                        v,
                                        null,
                                        {
                                          default: c(() => [
                                            o.meta.iconType == "el"
                                              ? (i(), w(U(o.meta.icon), { key: 0 }))
                                              : (i(),
                                                w(_, { key: 1, name: o.meta.icon }, null, 8, [
                                                  "name"
                                                ]))
                                          ]),
                                          _: 2
                                        },
                                        1024
                                      ),
                                      V("span", null, Y(o.meta.title), 1)
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
  it = S({
    __name: "index",
    setup(t) {
      const e = B(),
        h = J(),
        u = A(ke[0].children);
      return (a, _) => {
        const v = ye;
        return (
          i(),
          w(
            v,
            {
              "default-active": k(h).path,
              class: "el-menu-vertical-demo",
              collapse: !k(e).sidebar.isActive,
              "unique-opened": !0
            },
            { default: c(() => [s(lt, { menuList: k(u) }, null, 8, ["menuList"])]), _: 1 },
            8,
            ["default-active", "collapse"]
          )
        );
      };
    }
  }),
  ct = T(it, [["__scopeId", "data-v-6eb92e6b"]]),
  pe = ae("tagsView", () => {
    const t = A([]),
      e = A([]),
      h = J(),
      u = re(),
      a = n => {
        t.value.some(l => l.path === n.path) ||
          (n.meta.affix ? t.value.unshift(n) : t.value.push(n));
      },
      _ = n => {
        const l = n.name;
        e.value.includes(l) || (n.meta.keepAlive && e.value.push(l));
      },
      v = n =>
        new Promise(l => {
          for (const [d, f] of t.value.entries())
            if (f.path === n.path) {
              t.value.splice(d, 1);
              break;
            }
          l([...t.value]);
        }),
      b = n => {
        const l = n.name;
        return new Promise(d => {
          const f = e.value.indexOf(l);
          f > -1 && e.value.splice(f, 1), d([...e.value]);
        });
      },
      x = n =>
        new Promise(l => {
          (t.value = t.value.filter(d => (d == null ? void 0 : d.meta.affix) || d.path === n.path)),
            l([...t.value]);
        }),
      I = n => {
        const l = n.name;
        return new Promise(d => {
          const f = e.value.indexOf(l);
          f > -1 ? (e.value = e.value.slice(f, f + 1)) : (e.value = []), d([...e.value]);
        });
      };
    return {
      visitedViews: t,
      cachedViews: e,
      addView: n => {
        a(n), _(n);
      },
      delView: n =>
        new Promise(l => {
          v(n), b(n), l({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      delOtherViews: n =>
        new Promise(l => {
          x(n), I(n), l({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      delLeftViews: n =>
        new Promise(l => {
          const d = t.value.findIndex(f => f.path === n.path);
          d !== -1 &&
            ((t.value = t.value.filter((f, E) => {
              if (E >= d || (f != null && f.meta.affix)) return !0;
              const F = e.value.indexOf(f.name);
              return F > -1 && e.value.splice(F, 1), !1;
            })),
            l({ visitedViews: [...t.value] }));
        }),
      delRightViews: n =>
        new Promise(l => {
          const d = t.value.findIndex(f => f.path === n.path);
          d !== -1 &&
            ((t.value = t.value.filter((f, E) => {
              if (E <= d || (f != null && f.meta.affix)) return !0;
            })),
            l({ visitedViews: [...t.value] }));
        }),
      delAllViews: () =>
        new Promise(n => {
          const l = t.value.filter(d => (d == null ? void 0 : d.meta.affix));
          (t.value = l),
            (e.value = []),
            n({ visitedViews: [...t.value], cachedViews: [...e.value] });
        }),
      updateVisitedView: n => {
        for (let l of t.value)
          if (l.path === n.path) {
            l = Object.assign(l, n);
            break;
          }
      },
      isActive: n => n.path === h.path,
      toLastView: (n, l) => {
        const d = n.slice(-1)[0];
        d && d.fullPath
          ? u.push(d.fullPath)
          : (l == null ? void 0 : l.name) === "dashboard"
            ? u.replace("/redirect" + l.fullPath)
            : u.push("/");
      },
      toFirstView: n => {
        n != null && n.fullPath && u.replace(n == null ? void 0 : n.fullPath);
      }
    };
  }),
  rt = { class: "scrollbar-flex-content" },
  ut = S({
    __name: "index",
    setup(t) {
      const { proxy: e } = Ae(),
        h = be(() => (e == null ? void 0 : e.$refs.scrollContainer.$refs.wrapRef));
      function u(r) {
        const m = r.wheelDelta || -r.deltaY * 40;
        h.value.scrollLeft += m / 4;
      }
      const a = pe(),
        { visitedViews: _ } = de(a),
        v = A(0),
        b = A(0),
        x = A(!1),
        I = A(null),
        o = A({
          path: "",
          fullPath: "",
          name: "",
          query: {},
          meta: { title: "", affix: !1, keepAlive: !0 }
        }),
        p = J();
      se(
        p,
        () => {
          N(), Q();
        },
        { immediate: !0 }
      ),
        Ce(() => {
          se(x, r => {
            r
              ? document.body.addEventListener("click", W)
              : document.body.removeEventListener("click", W);
          });
        });
      function N() {
        var r, m;
        p.meta.title &&
          a.addView({
            name: p.name,
            path: p.path,
            fullPath: p.fullPath,
            query: p.query,
            meta: {
              title: p.meta.title,
              affix: !!((r = p.meta) != null && r.affix),
              keepAlive: !!((m = p.meta) != null && m.keepAlive)
            }
          });
      }
      function Q() {
        Se(() => {
          var r, m;
          for (const M of _.value)
            M.path === p.path &&
              M.fullPath !== p.fullPath &&
              a.updateVisitedView({
                name: p.name,
                path: p.path,
                fullPath: p.fullPath,
                query: p.query,
                meta: {
                  title: p.meta.title,
                  affix: !!((r = p.meta) != null && r.affix),
                  keepAlive: !!((m = p.meta) != null && m.keepAlive)
                }
              });
        });
      }
      const Z = (r, m) => {
          var R, ne;
          o.value = r;
          const M = m.target,
            q = 105,
            X = ((R = I.value) == null ? void 0 : R.getBoundingClientRect().left) || 0,
            G = ((ne = I.value) == null ? void 0 : ne.getBoundingClientRect().width) || 0,
            { top: $, height: y } = M.getBoundingClientRect();
          (v.value = m.clientX + q > X + G ? m.clientX - q : m.clientX + 20),
            (b.value = $ + y - 6),
            (x.value = !0);
        },
        W = () => {
          x.value = !1;
        },
        j = r => p.name === r.name,
        ee = () => {
          a.delOtherViews(o.value).then(() => {
            a.toFirstView(o.value);
          });
        },
        te = r => r.meta.affix,
        H = r => {
          a.delView(r).then(m => {
            a.isActive(r) && a.toLastView(m.visitedViews, r);
          });
        },
        n = () => {
          a.delOtherViews(o.value);
        },
        l = () => o.value.fullPath === a.visitedViews[0].fullPath,
        d = () => {
          a.delLeftViews(o.value).then(() => {
            j(o.value) || a.toFirstView(o.value);
          });
        },
        f = () => {
          var r;
          return (
            o.value.fullPath ===
            ((r = a.visitedViews[a.visitedViews.length - 1]) == null ? void 0 : r.fullPath)
          );
        },
        E = () => {
          a.delRightViews(o.value).then(r => {
            a.toLastView(r.visitedViews, o.value);
          });
        },
        F = r => {
          a.delAllViews().then(m => {
            a.toLastView(m.visitedViews, r);
          });
        };
      return (r, m) => {
        const M = L("Close"),
          q = z,
          X = L("router-link"),
          G = Le,
          $ = O;
        return (
          i(),
          g(
            D,
            null,
            [
              V(
                "div",
                { ref_key: "container", ref: I },
                [
                  s(
                    G,
                    {
                      ref: "scrollContainer",
                      height: "34px",
                      class: "px-8px",
                      onWheel: K(u, ["prevent"])
                    },
                    {
                      default: c(() => [
                        V("div", rt, [
                          (i(!0),
                          g(
                            D,
                            null,
                            ue(
                              k(_),
                              y => (
                                i(),
                                w(
                                  X,
                                  {
                                    key: y.path,
                                    to: { path: y.path, query: y.query },
                                    class: oe(["tags-item", { active: j(y) }]),
                                    onContextmenu: K(R => Z(y, R), ["prevent"])
                                  },
                                  {
                                    default: c(() => [
                                      C(Y(y.meta.title) + " ", 1),
                                      y.meta.affix
                                        ? P("", !0)
                                        : (i(),
                                          w(
                                            q,
                                            {
                                              key: 0,
                                              size: 10,
                                              onClick: K(R => H(y), ["prevent", "stop"])
                                            },
                                            { default: c(() => [s(M)]), _: 2 },
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
              Ie(
                V(
                  "ul",
                  { class: "tag-menu", style: _e({ left: v.value + "px", top: b.value + "px" }) },
                  [
                    V("li", { onClick: m[0] || (m[0] = y => ee()) }, [
                      s($, { name: "refresh" }),
                      C(" 刷新 ")
                    ]),
                    te(o.value)
                      ? P("", !0)
                      : (i(),
                        g("li", { key: 0, onClick: m[1] || (m[1] = y => H(o.value)) }, [
                          s($, { name: "close" }),
                          C(" 关闭 ")
                        ])),
                    V("li", { onClick: n }, [s($, { name: "close_other" }), C(" 关闭其它 ")]),
                    l()
                      ? P("", !0)
                      : (i(),
                        g("li", { key: 1, onClick: d }, [
                          s($, { name: "close_left" }),
                          C(" 关闭左侧 ")
                        ])),
                    f()
                      ? P("", !0)
                      : (i(),
                        g("li", { key: 2, onClick: E }, [
                          s($, { name: "close_right" }),
                          C(" 关闭右侧 ")
                        ])),
                    V("li", { onClick: m[2] || (m[2] = y => F(o.value)) }, [
                      s($, { name: "close_all" }),
                      C(" 关闭所有 ")
                    ])
                  ],
                  4
                ),
                [[$e, x.value]]
              )
            ],
            64
          )
        );
      };
    }
  }),
  dt = T(ut, [["__scopeId", "data-v-f6dbc8db"]]),
  _t = { class: "wrapper" },
  pt = S({
    __name: "index",
    setup(t) {
      const e = B(),
        h = pe(),
        { cachedViews: u } = de(h);
      return (a, _) => {
        const v = Te,
          b = Me,
          x = L("router-view"),
          I = Ee,
          o = Re;
        return (
          i(),
          w(
            o,
            { class: "common-layout" },
            {
              default: c(() => [
                s(
                  v,
                  {
                    style: _e({ width: k(e).sidebar.isActive ? "220px" : "65px" }),
                    class: "sidebar"
                  },
                  { default: c(() => [s(ot), C(), s(ct)]), _: 1 },
                  8,
                  ["style"]
                ),
                s(o, null, {
                  default: c(() => [
                    s(b, null, { default: c(() => [s(et)]), _: 1 }),
                    s(I, null, {
                      default: c(() => [
                        s(dt),
                        V("div", _t, [
                          s(x, null, {
                            default: c(({ Component: p }) => [
                              (i(), w(Pe, { include: k(u) }, [(i(), w(U(p)))], 1032, ["include"]))
                            ]),
                            _: 1
                          })
                        ])
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
  wt = T(pt, [["__scopeId", "data-v-f287d2d0"]]);
export { wt as default };
