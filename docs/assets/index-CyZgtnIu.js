import {
  z as Q,
  r as L,
  A as G,
  B as Z,
  d as T,
  c as re,
  C as ee,
  D as J,
  o as ue,
  e as D,
  g as p,
  a as S,
  h as b,
  b as s,
  w as u,
  F as z,
  G as te,
  u as w,
  H as y,
  I as ne,
  k as X,
  l as C,
  J as j,
  K as de,
  L as _e,
  M as se,
  N as oe,
  O as pe,
  P as fe,
  Q as me,
  R as ve,
  _ as M,
  j as he,
  S as ge,
  T as we,
  U as Ve,
  V as ke,
  v as ae,
  x as le,
  W as xe,
  X as be,
  Y as Ce,
  Z as Se,
  $ as ye,
  a0 as Ie,
  a1 as Ae,
  a2 as Le,
  a3 as Te,
  a4 as $e,
  a5 as Me,
  a6 as Pe
} from "./index-Ba89OMSi.js";
import { _ as N, a as Ee, b as Re, c as De } from "./index-Dxtl_4KZ.js";
const ce = Q("tagsView", () => {
    const e = L([]),
      t = L([]),
      m = G(),
      d = Z(),
      f = n => {
        e.value.some(o => o.path === n.path) || (n.affix ? e.value.unshift(n) : e.value.push(n));
      },
      v = n => {
        const o = n.name;
        t.value.includes(o) || (n.keepAlive && t.value.push(o));
      },
      h = n =>
        new Promise(o => {
          for (const [a, r] of e.value.entries())
            if (r.path === n.path) {
              e.value.splice(a, 1);
              break;
            }
          o([...e.value]);
        }),
      g = n => {
        const o = n.name;
        return new Promise(a => {
          const r = t.value.indexOf(o);
          r > -1 && t.value.splice(r, 1), a([...t.value]);
        });
      },
      k = n =>
        new Promise(o => {
          (e.value = e.value.filter(a => (a == null ? void 0 : a.affix) || a.path === n.path)),
            o([...e.value]);
        }),
      i = n => {
        const o = n.name;
        return new Promise(a => {
          const r = t.value.indexOf(o);
          r > -1 ? (t.value = t.value.slice(r, r + 1)) : (t.value = []), a([...t.value]);
        });
      };
    return {
      visitedViews: e,
      cachedViews: t,
      addView: n => {
        f(n), v(n);
      },
      delView: n =>
        new Promise(o => {
          h(n), g(n), o({ visitedViews: [...e.value], cachedViews: [...t.value] });
        }),
      delOtherViews: n =>
        new Promise(o => {
          k(n), i(n), o({ visitedViews: [...e.value], cachedViews: [...t.value] });
        }),
      delLeftViews: n =>
        new Promise(o => {
          const a = e.value.findIndex(r => r.path === n.path);
          a !== -1 &&
            ((e.value = e.value.filter((r, B) => {
              if (B >= a || (r != null && r.affix)) return !0;
              const c = t.value.indexOf(r.name);
              return c > -1 && t.value.splice(c, 1), !1;
            })),
            o({ visitedViews: [...e.value] }));
        }),
      delRightViews: n =>
        new Promise(o => {
          const a = e.value.findIndex(r => r.path === n.path);
          a !== -1 &&
            ((e.value = e.value.filter((r, B) => {
              if (B <= a || (r != null && r.affix)) return !0;
            })),
            o({ visitedViews: [...e.value] }));
        }),
      delAllViews: () =>
        new Promise(n => {
          const o = e.value.filter(a => (a == null ? void 0 : a.affix));
          (e.value = o),
            (t.value = []),
            n({ visitedViews: [...e.value], cachedViews: [...t.value] });
        }),
      updateVisitedView: n => {
        for (let o of e.value)
          if (o.path === n.path) {
            o = Object.assign(o, n);
            break;
          }
      },
      isActive: n => n.path === m.path,
      toLastView: (n, o) => {
        const a = n.slice(-1)[0];
        a && a.fullPath
          ? d.push(a.fullPath)
          : (o == null ? void 0 : o.name) === "Dashboard"
            ? d.replace("/redirect" + o.fullPath)
            : d.push("/");
      }
    };
  }),
  Ne = { class: "scrollbar-flex-content" },
  Oe = T({
    __name: "TabView",
    setup(e) {
      const { proxy: t } = pe(),
        m = re(() => (t == null ? void 0 : t.$refs.scrollContainer.$refs.wrapRef));
      function d(c) {
        const _ = c.wheelDelta || -c.deltaY * 40;
        m.value.scrollLeft += _ / 4;
      }
      const f = ce(),
        { visitedViews: v } = ee(f),
        h = L(0),
        g = L(0),
        k = L(!1),
        i = L(null),
        V = L({
          path: "",
          fullPath: "",
          name: "",
          title: "",
          affix: !1,
          keepAlive: !0,
          query: {},
          meta: {}
        }),
        l = G();
      J(
        l,
        () => {
          I(), O();
        },
        { immediate: !0 }
      ),
        ue(() => {
          J(k, c => {
            c
              ? document.body.addEventListener("click", E)
              : document.body.removeEventListener("click", E);
          });
        });
      function I() {
        var c, _;
        l.meta.title &&
          f.addView({
            name: l.name,
            title: l.meta.title,
            path: l.path,
            fullPath: l.fullPath,
            affix: !!((c = l.meta) != null && c.affix),
            keepAlive: !!((_ = l.meta) != null && _.keepAlive),
            query: l.query
          });
      }
      function O() {
        ve(() => {
          var c, _;
          for (const $ of v.value)
            $.path === l.path &&
              $.fullPath !== l.fullPath &&
              f.updateVisitedView({
                name: l.name,
                title: l.meta.title,
                path: l.path,
                fullPath: l.fullPath,
                affix: !!((c = l.meta) != null && c.affix),
                keepAlive: !!((_ = l.meta) != null && _.keepAlive),
                query: l.query
              });
        });
      }
      function P(c, _) {
        var R, Y;
        V.value = c;
        const $ = _.target,
          q = 105,
          W = ((R = i.value) == null ? void 0 : R.getBoundingClientRect().left) || 0,
          H = ((Y = i.value) == null ? void 0 : Y.getBoundingClientRect().width) || 0,
          { top: A, height: x } = $.getBoundingClientRect();
        (h.value = _.clientX + q > W + H ? _.clientX - q : _.clientX + 20),
          (g.value = A + x - 6),
          (k.value = !0);
      }
      function E() {
        k.value = !1;
      }
      function K(c) {
        return l.name === c.name;
      }
      function ie(c) {}
      function U(c) {
        return !1;
      }
      function n(c) {
        f.delView(c).then(_ => {
          f.isActive(c) && f.toLastView(_.visitedViews, c);
        });
      }
      function o() {}
      function a() {}
      function r() {}
      function B(c) {}
      return (c, _) => {
        const $ = D("Close"),
          q = fe,
          W = D("router-link"),
          H = me,
          A = N;
        return (
          p(),
          S(
            z,
            null,
            [
              b(
                "div",
                { ref_key: "container", ref: i },
                [
                  s(
                    H,
                    { ref: "scrollContainer", height: "34px", onWheel: X(d, ["prevent"]) },
                    {
                      default: u(() => [
                        b("div", Ne, [
                          (p(!0),
                          S(
                            z,
                            null,
                            te(
                              w(v),
                              x => (
                                p(),
                                y(
                                  W,
                                  {
                                    key: x.path,
                                    to: { path: x.path, query: x.query },
                                    class: ne(["tags-item", { active: K(x) }]),
                                    onContextmenu: X(R => P(x, R), ["prevent"])
                                  },
                                  {
                                    default: u(() => [
                                      C(j(x.title) + " ", 1),
                                      s(
                                        q,
                                        { size: 10, onClick: X(R => n(x), ["prevent", "stop"]) },
                                        { default: u(() => [s($)]), _: 2 },
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
              de(
                b(
                  "ul",
                  { class: "tag-menu", style: oe({ left: h.value + "px", top: g.value + "px" }) },
                  [
                    b("li", { onClick: _[0] || (_[0] = x => (V.value, void 0)) }, [
                      s(A, { "icon-class": "refresh" }),
                      C(" 刷新 ")
                    ]),
                    U(V.value)
                      ? se("", !0)
                      : (p(),
                        S("li", { key: 0, onClick: _[1] || (_[1] = x => n(V.value)) }, [
                          s(A, { "icon-class": "close" }),
                          C(" 关闭 ")
                        ])),
                    b("li", { onClick: o }, [
                      s(A, { "icon-class": "close_other" }),
                      C(" 关闭其它 ")
                    ]),
                    (p(),
                    S("li", { key: 1, onClick: a }, [
                      s(A, { "icon-class": "close_left" }),
                      C(" 关闭左侧 ")
                    ])),
                    (p(),
                    S("li", { key: 2, onClick: r }, [
                      s(A, { "icon-class": "close_right" }),
                      C(" 关闭右侧 ")
                    ])),
                    b("li", { onClick: _[2] || (_[2] = x => (V.value, void 0)) }, [
                      s(A, { "icon-class": "close_all" }),
                      C(" 关闭所有 ")
                    ])
                  ],
                  4
                ),
                [[_e, k.value]]
              )
            ],
            64
          )
        );
      };
    }
  }),
  Be = M(Oe, [["__scopeId", "data-v-a7ad981c"]]),
  qe = e => (ae("data-v-bcd8e1ad"), (e = e()), le(), e),
  ze = { class: "header-right" },
  Fe = qe(() =>
    b(
      "div",
      { class: "avatar-container" },
      [b("div", { class: "user-avatar" }, "A"), b("div", { class: "user-name" }, "Admain")],
      -1
    )
  ),
  We = T({
    __name: "NavRight",
    setup(e) {
      const t = Ee(),
        m = () => De(t),
        { isFullscreen: d, toggle: f } = Re();
      return (v, h) => {
        const g = N,
          k = ge,
          i = we,
          V = Ve,
          l = ke;
        return (
          p(),
          S("div", ze, [
            s(
              k,
              {
                modelValue: w(t),
                "onUpdate:modelValue": h[0] || (h[0] = I => (he(t) ? (t.value = I) : null)),
                onChange: m,
                style: { "--el-switch-on-color": "darkgray", "--el-switch-off-color": "lightgray" }
              },
              {
                "active-action": u(() => [s(g, { "icon-class": "moon" })]),
                "inactive-action": u(() => [s(g, { "icon-class": "sun" })]),
                _: 1
              },
              8,
              ["modelValue"]
            ),
            b(
              "div",
              { class: "full-screen", onClick: h[1] || (h[1] = (...I) => w(f) && w(f)(...I)) },
              [
                s(
                  g,
                  { "icon-class": w(d) ? "exit-fullscreen" : "fullscreen", color: "darkgray" },
                  null,
                  8,
                  ["icon-class"]
                )
              ]
            ),
            s(
              l,
              { trigger: "click" },
              {
                dropdown: u(() => [
                  s(V, null, {
                    default: u(() => [
                      s(i, null, { default: u(() => [C(" 修改密码 ")]), _: 1 }),
                      s(i, { divided: "" }, { default: u(() => [C(" 注销 ")]), _: 1 })
                    ]),
                    _: 1
                  })
                ]),
                default: u(() => [Fe]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  He = M(We, [["__scopeId", "data-v-bcd8e1ad"]]),
  F = Q("global", () => {
    const e = xe({ isActive: !1 });
    return {
      sidebar: e,
      toggleClick: () => {
        e.isActive = !e.isActive;
      }
    };
  }),
  Xe = T({
    __name: "NavBar",
    setup(e) {
      const t = F();
      return (m, d) => {
        const f = N;
        return (
          p(),
          S(
            "div",
            { onClick: d[0] || (d[0] = (...v) => w(t).toggleClick && w(t).toggleClick(...v)) },
            [
              s(
                f,
                {
                  class: ne(["hamburger", { "is-active": w(t).sidebar.isActive }]),
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
  je = M(Xe, [["__scopeId", "data-v-84977719"]]),
  Ge = {},
  Ke = { class: "header" };
function Ue(e, t) {
  const m = je,
    d = He;
  return p(), S("div", Ke, [s(m), s(d)]);
}
const Ye = M(Ge, [
    ["render", Ue],
    ["__scopeId", "data-v-181b6dc2"]
  ]),
  Je = { style: { "margin-left": "10px" } },
  Qe = T({
    __name: "SidebarMenuItem",
    props: { menuList: { type: Array, required: !0 } },
    setup(e) {
      const t = Z(),
        m = d => {
          if (d.meta.isLink) return window.open(d.meta.isLink, "_blank");
          t.push(d.path);
        };
      return (d, f) => {
        const v = N,
          h = D("SidebarMenuItem", !0),
          g = be,
          k = Ce;
        return (
          p(!0),
          S(
            z,
            null,
            te(e.menuList, i => {
              var V;
              return (
                p(),
                S(
                  z,
                  { key: i.path },
                  [
                    (V = i.children) != null && V.length && !i.meta.hidden
                      ? (p(),
                        y(
                          g,
                          { key: 0, index: i.path },
                          {
                            title: u(() => [
                              s(v, { "icon-class": i.meta.icon, size: "18" }, null, 8, [
                                "icon-class"
                              ]),
                              b("span", Je, j(i.meta.title), 1)
                            ]),
                            default: u(() => [
                              s(h, { menuList: i.children }, null, 8, ["menuList"])
                            ]),
                            _: 2
                          },
                          1032,
                          ["index"]
                        ))
                      : i.meta.hidden
                        ? se("", !0)
                        : (p(),
                          y(
                            k,
                            { key: 1, index: i.path, onClick: l => m(i) },
                            {
                              title: u(() => [
                                s(v, { "icon-class": i.meta.icon }, null, 8, ["icon-class"]),
                                C(" " + j(i.meta.title), 1)
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
  Ze = T({
    __name: "LeftMenu",
    setup(e) {
      const t = F(),
        m = G(),
        d = L(Se);
      return (f, v) => {
        const h = Qe,
          g = ye;
        return (
          p(),
          y(
            g,
            {
              "default-active": w(m).path,
              class: "el-menu-vertical-demo",
              collapse: !w(t).sidebar.isActive
            },
            { default: u(() => [s(h, { menuList: w(d) }, null, 8, ["menuList"])]), _: 1 },
            8,
            ["default-active", "collapse"]
          )
        );
      };
    }
  }),
  et = e => (ae("data-v-26760a0d"), (e = e()), le(), e),
  tt = { class: "project-title" },
  nt = et(() => b("span", { class: "name" }, "SAAS - DEMO ", -1)),
  st = T({
    __name: "Logo",
    setup(e) {
      const t = F();
      return (m, d) => {
        const f = N,
          v = D("router-link");
        return (
          p(),
          S("div", tt, [
            s(
              Ie,
              { name: "sidebarLogoFade" },
              {
                default: u(() => [
                  w(t).sidebar.isActive
                    ? (p(), y(v, { key: "expand", to: "/" }, { default: u(() => [nt]), _: 1 }))
                    : (p(),
                      y(
                        v,
                        { key: "collapse", to: "/" },
                        { default: u(() => [s(f, { "icon-class": "logo", size: "20" })]), _: 1 }
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
  ot = M(st, [["__scopeId", "data-v-26760a0d"]]),
  at = T({
    __name: "index",
    setup(e) {
      const t = F(),
        m = ce(),
        { cachedViews: d } = ee(m);
      return (f, v) => {
        const h = ot,
          g = Ze,
          k = $e,
          i = Ye,
          V = Me,
          l = Be,
          I = D("router-view"),
          O = Pe,
          P = Ae;
        return (
          p(),
          y(
            P,
            { class: "common-layout" },
            {
              default: u(() => [
                s(
                  k,
                  {
                    style: oe({ width: w(t).sidebar.isActive ? "220px" : "65px" }),
                    class: "sidebar"
                  },
                  { default: u(() => [s(h), C(), s(g)]), _: 1 },
                  8,
                  ["style"]
                ),
                s(P, null, {
                  default: u(() => [
                    s(V, null, { default: u(() => [s(i)]), _: 1 }),
                    s(O, null, {
                      default: u(() => [
                        s(l),
                        s(I, null, {
                          default: u(({ Component: E }) => [
                            (p(), y(Le, { include: w(d) }, [(p(), y(Te(E)))], 1032, ["include"]))
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
  it = M(at, [["__scopeId", "data-v-3b136fe7"]]);
export { it as default };
