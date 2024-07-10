import {
  z as O,
  r as $,
  d as I,
  c as Z,
  A as W,
  o as ee,
  B as te,
  C as ne,
  e as S,
  g as s,
  a as w,
  h as u,
  b as e,
  w as t,
  F as z,
  D as oe,
  u as h,
  G as y,
  H as P,
  k as H,
  l as c,
  I as se,
  J as le,
  K as ae,
  L as ce,
  M as X,
  N as ie,
  O as q,
  P as _e,
  _ as V,
  j as re,
  Q as ue,
  R as de,
  S as pe,
  T as me,
  v as j,
  x as G,
  U as fe,
  V as ge,
  W as ve,
  X as he,
  Y as ke,
  Z as be,
  $ as we,
  a0 as Ce,
  a1 as xe,
  a2 as Se,
  a3 as ye
} from "./index-DQaA9kh1.js";
import { _ as M, a as $e, b as Ie, c as Ve } from "./index-Ct_raSMz.js";
const K = O("tagsView", () => ({
    visitedViews: $([
      { name: "home", path: "/", title: "测试路由home", fullPath: "/home" },
      { name: "about", path: "/about", title: "测试路由about", fullPath: "/about" }
    ])
  })),
  Ae = { class: "scrollbar-flex-content" },
  Ee = I({
    __name: "TabView",
    setup(o) {
      const { proxy: n } = ie(),
        f = Z(() => (n == null ? void 0 : n.$refs.scrollContainer.$refs.wrapRef));
      function d(_) {
        const r = _.wheelDelta || -_.deltaY * 40;
        f.value.scrollLeft += r / 4;
      }
      const l = K(),
        { visitedViews: a } = W(l),
        g = $(0),
        p = $(0),
        i = $(!1),
        k = $(null),
        m = $({
          path: "",
          fullPath: "",
          name: "",
          title: "",
          affix: !1,
          keepAlive: !0,
          query: {},
          meta: {}
        });
      ee(() => {
        te(i, _ => {
          _
            ? document.body.addEventListener("click", b)
            : document.body.removeEventListener("click", b);
        });
      });
      function x(_, r) {
        var T, F;
        m.value = _;
        const R = r.target,
          E = 105,
          B = ((T = k.value) == null ? void 0 : T.getBoundingClientRect().left) || 0,
          N = ((F = k.value) == null ? void 0 : F.getBoundingClientRect().width) || 0,
          { top: C, height: v } = R.getBoundingClientRect();
        (g.value = r.clientX + E > B + N ? r.clientX - E : r.clientX + 20),
          (p.value = C + v - 6),
          (i.value = !0);
      }
      function b() {
        i.value = !1;
      }
      const A = ne();
      function L(_) {
        return A.name === _.name;
      }
      function Qe(_) {}
      function U(_) {
        return !1;
      }
      function Ze(_) {}
      function Y() {}
      function J() {}
      function Q() {}
      function et(_) {}
      return (_, r) => {
        const R = S("Close"),
          E = q,
          B = S("router-link"),
          N = _e,
          C = M;
        return (
          s(),
          w(
            z,
            null,
            [
              u(
                "div",
                { ref_key: "container", ref: k },
                [
                  e(
                    N,
                    { ref: "scrollContainer", height: "34px", onWheel: H(d, ["prevent"]) },
                    {
                      default: t(() => [
                        u("div", Ae, [
                          (s(!0),
                          w(
                            z,
                            null,
                            oe(
                              h(a),
                              v => (
                                s(),
                                y(
                                  B,
                                  {
                                    key: v.path,
                                    to: { path: v.path, query: v.query },
                                    class: P(["tags-item", { active: L(v) }]),
                                    onContextmenu: H(T => x(v, T), ["prevent"])
                                  },
                                  {
                                    default: t(() => [
                                      c(se(v.title) + " ", 1),
                                      e(E, { size: 10 }, { default: t(() => [e(R)]), _: 1 })
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
              le(
                u(
                  "ul",
                  { class: "tag-menu", style: X({ left: g.value + "px", top: p.value + "px" }) },
                  [
                    u("li", { onClick: r[0] || (r[0] = v => (m.value, void 0)) }, [
                      e(C, { "icon-class": "refresh" }),
                      c(" 刷新 ")
                    ]),
                    U(m.value)
                      ? ce("", !0)
                      : (s(),
                        w("li", { key: 0, onClick: r[1] || (r[1] = v => (m.value, void 0)) }, [
                          e(C, { "icon-class": "close" }),
                          c(" 关闭 ")
                        ])),
                    u("li", { onClick: Y }, [
                      e(C, { "icon-class": "close_other" }),
                      c(" 关闭其它 ")
                    ]),
                    (s(),
                    w("li", { key: 1, onClick: J }, [
                      e(C, { "icon-class": "close_left" }),
                      c(" 关闭左侧 ")
                    ])),
                    (s(),
                    w("li", { key: 2, onClick: Q }, [
                      e(C, { "icon-class": "close_right" }),
                      c(" 关闭右侧 ")
                    ])),
                    u("li", { onClick: r[2] || (r[2] = v => (m.value, void 0)) }, [
                      e(C, { "icon-class": "close_all" }),
                      c(" 关闭所有 ")
                    ])
                  ],
                  4
                ),
                [[ae, i.value]]
              )
            ],
            64
          )
        );
      };
    }
  }),
  Te = V(Ee, [["__scopeId", "data-v-5cfb6b27"]]),
  Me = o => (j("data-v-bcd8e1ad"), (o = o()), G(), o),
  De = { class: "header-right" },
  Le = Me(() =>
    u(
      "div",
      { class: "avatar-container" },
      [u("div", { class: "user-avatar" }, "A"), u("div", { class: "user-name" }, "Admain")],
      -1
    )
  ),
  Re = I({
    __name: "NavRight",
    setup(o) {
      const n = $e(),
        f = () => Ve(n),
        { isFullscreen: d, toggle: l } = Ie();
      return (a, g) => {
        const p = M,
          i = ue,
          k = de,
          m = pe,
          x = me;
        return (
          s(),
          w("div", De, [
            e(
              i,
              {
                modelValue: h(n),
                "onUpdate:modelValue": g[0] || (g[0] = b => (re(n) ? (n.value = b) : null)),
                onChange: f,
                style: { "--el-switch-on-color": "darkgray", "--el-switch-off-color": "lightgray" }
              },
              {
                "active-action": t(() => [e(p, { "icon-class": "moon" })]),
                "inactive-action": t(() => [e(p, { "icon-class": "sun" })]),
                _: 1
              },
              8,
              ["modelValue"]
            ),
            u(
              "div",
              { class: "full-screen", onClick: g[1] || (g[1] = (...b) => h(l) && h(l)(...b)) },
              [
                e(
                  p,
                  { "icon-class": h(d) ? "exit-fullscreen" : "fullscreen", color: "darkgray" },
                  null,
                  8,
                  ["icon-class"]
                )
              ]
            ),
            e(
              x,
              { trigger: "click" },
              {
                dropdown: t(() => [
                  e(m, null, {
                    default: t(() => [
                      e(k, null, { default: t(() => [c(" 修改密码 ")]), _: 1 }),
                      e(k, { divided: "" }, { default: t(() => [c(" 注销 ")]), _: 1 })
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [Le]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  Be = V(Re, [["__scopeId", "data-v-bcd8e1ad"]]),
  D = O("global", () => {
    const o = fe({ isActive: !1 });
    return {
      sidebar: o,
      toggleClick: () => {
        o.isActive = !o.isActive;
      }
    };
  }),
  Ne = I({
    __name: "NavBar",
    setup(o) {
      const n = D();
      return (f, d) => {
        const l = M;
        return (
          s(),
          w(
            "div",
            { onClick: d[0] || (d[0] = (...a) => h(n).toggleClick && h(n).toggleClick(...a)) },
            [
              e(
                l,
                {
                  class: P(["hamburger", { "is-active": h(n).sidebar.isActive }]),
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
  Fe = V(Ne, [["__scopeId", "data-v-84977719"]]),
  ze = {},
  He = { class: "header" };
function Oe(o, n) {
  const f = Fe,
    d = Be;
  return s(), w("div", He, [e(f), e(d)]);
}
const We = V(ze, [
    ["render", Oe],
    ["__scopeId", "data-v-181b6dc2"]
  ]),
  Pe = u("span", null, "组件封装", -1),
  Xe = u("span", null, "系统管理", -1),
  qe = I({
    __name: "LeftMenu",
    setup(o) {
      const n = D(),
        f = (l, a) => {
          console.log(l, a);
        },
        d = (l, a) => {
          console.log(l, a);
        };
      return (l, a) => {
        const g = S("HomeFilled"),
          p = q,
          i = ge,
          k = S("location"),
          m = ve,
          x = S("setting"),
          b = he;
        return (
          s(),
          y(
            b,
            {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              collapse: !h(n).sidebar.isActive,
              onOpen: f,
              onClose: d
            },
            {
              default: t(() => [
                e(
                  i,
                  { index: "1" },
                  {
                    title: t(() => [c("首页")]),
                    default: t(() => [e(p, null, { default: t(() => [e(g)]), _: 1 })]),
                    _: 1
                  }
                ),
                e(
                  m,
                  { index: "2" },
                  {
                    title: t(() => [e(p, null, { default: t(() => [e(k)]), _: 1 }), Pe]),
                    default: t(() => [
                      e(i, { index: "1-1" }, { default: t(() => [c("Vxe-table")]), _: 1 })
                    ]),
                    _: 1
                  }
                ),
                e(
                  m,
                  { index: "3" },
                  {
                    title: t(() => [e(p, null, { default: t(() => [e(x)]), _: 1 }), Xe]),
                    default: t(() => [
                      e(i, { index: "3-1" }, { default: t(() => [c("用户管理")]), _: 1 }),
                      e(i, { index: "3-2" }, { default: t(() => [c("角色管理")]), _: 1 })
                    ]),
                    _: 1
                  }
                )
              ]),
              _: 1
            },
            8,
            ["collapse"]
          )
        );
      };
    }
  }),
  je = o => (j("data-v-26760a0d"), (o = o()), G(), o),
  Ge = { class: "project-title" },
  Ke = je(() => u("span", { class: "name" }, "SAAS - DEMO ", -1)),
  Ue = I({
    __name: "Logo",
    setup(o) {
      const n = D();
      return (f, d) => {
        const l = M,
          a = S("router-link");
        return (
          s(),
          w("div", Ge, [
            e(
              ke,
              { name: "sidebarLogoFade" },
              {
                default: t(() => [
                  h(n).sidebar.isActive
                    ? (s(), y(a, { key: "expand", to: "/" }, { default: t(() => [Ke]), _: 1 }))
                    : (s(),
                      y(
                        a,
                        { key: "collapse", to: "/" },
                        { default: t(() => [e(l, { "icon-class": "logo", size: "20" })]), _: 1 }
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
  Ye = V(Ue, [["__scopeId", "data-v-26760a0d"]]),
  Je = I({
    __name: "index",
    setup(o) {
      const n = D(),
        f = K();
      return (
        W(f),
        (d, l) => {
          const a = Ye,
            g = qe,
            p = xe,
            i = We,
            k = Se,
            m = Te,
            x = S("router-view"),
            b = ye,
            A = be;
          return (
            s(),
            y(
              A,
              { class: "common-layout" },
              {
                default: t(() => [
                  e(
                    p,
                    {
                      style: X({ width: h(n).sidebar.isActive ? "220px" : "65px" }),
                      class: "sidebar"
                    },
                    { default: t(() => [e(a), c(), e(g)]), _: 1 },
                    8,
                    ["style"]
                  ),
                  e(A, null, {
                    default: t(() => [
                      e(k, null, { default: t(() => [e(i)]), _: 1 }),
                      e(b, null, {
                        default: t(() => [
                          e(m),
                          e(x, null, {
                            default: t(({ Component: L }) => [
                              (s(), y(we, null, [(s(), y(Ce(L)))], 1024))
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
        }
      );
    }
  }),
  ot = V(Je, [["__scopeId", "data-v-22cad1c5"]]);
export { ot as default };
