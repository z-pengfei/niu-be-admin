import {
  z as W,
  r as $,
  d as V,
  c as ee,
  A as P,
  o as te,
  B as ne,
  C as oe,
  f as S,
  a as s,
  b as w,
  h as d,
  e,
  w as t,
  F as H,
  D as se,
  u as f,
  G as y,
  H as X,
  k as O,
  l as a,
  I as le,
  J as ae,
  K as ce,
  L as ie,
  M as q,
  N as _e,
  O as j,
  P as re,
  j as ue,
  Q as de,
  R as pe,
  S as me,
  T as fe,
  v as G,
  x as K,
  U as ge,
  V as ve,
  W as he,
  X as be,
  Y as ke,
  Z as we,
  _ as Ce,
  $ as xe,
  a0 as Se,
  a1 as ye,
  a2 as $e
} from "./index-BQEHPEhm.js";
import { _ as M, a as Ve, b as Ie, c as Ae } from "./index-BLks7vWa.js";
import { _ as I } from "./_plugin-vue_export-helper-DlAUqK2U.js";
const U = W("tagsView", () => ({
    visitedViews: $([
      { name: "home", path: "/", title: "测试路由home", fullPath: "/home" },
      { name: "about", path: "/about", title: "测试路由about", fullPath: "/about" }
    ])
  })),
  Ee = { class: "scrollbar-flex-content" },
  Te = V({
    __name: "TabView",
    setup(o) {
      const { proxy: n } = _e(),
        g = ee(() => (n == null ? void 0 : n.$refs.scrollContainer.$refs.wrapRef));
      function c(r) {
        const u = r.wheelDelta || -r.deltaY * 40;
        g.value.scrollLeft += u / 4;
      }
      const l = U(),
        { visitedViews: i } = P(l),
        v = $(0),
        p = $(0),
        _ = $(!1),
        b = $(null),
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
      te(() => {
        ne(_, r => {
          r
            ? document.body.addEventListener("click", k)
            : document.body.removeEventListener("click", k);
        });
      });
      function x(r, u) {
        var T, z;
        m.value = r;
        const R = u.target,
          E = 105,
          B = ((T = b.value) == null ? void 0 : T.getBoundingClientRect().left) || 0,
          N = ((z = b.value) == null ? void 0 : z.getBoundingClientRect().width) || 0,
          { top: C, height: h } = R.getBoundingClientRect();
        (v.value = u.clientX + E > B + N ? u.clientX - E : u.clientX + 20),
          (p.value = C + h - 6),
          (_.value = !0);
      }
      function k() {
        _.value = !1;
      }
      const L = oe();
      function A(r) {
        return L.name === r.name;
      }
      function F(r) {}
      function Y(r) {
        return !1;
      }
      function Ze(r) {}
      function J() {}
      function Q() {}
      function Z() {}
      function et(r) {}
      return (r, u) => {
        const R = S("Close"),
          E = j,
          B = S("router-link"),
          N = re,
          C = M;
        return (
          s(),
          w(
            H,
            null,
            [
              d(
                "div",
                { ref_key: "container", ref: b },
                [
                  e(
                    N,
                    { ref: "scrollContainer", height: "34px", onWheel: O(c, ["prevent"]) },
                    {
                      default: t(() => [
                        d("div", Ee, [
                          (s(!0),
                          w(
                            H,
                            null,
                            se(
                              f(i),
                              h => (
                                s(),
                                y(
                                  B,
                                  {
                                    key: h.path,
                                    to: { path: h.path, query: h.query },
                                    class: X(["tags-item", { active: A(h) }]),
                                    onContextmenu: O(T => x(h, T), ["prevent"])
                                  },
                                  {
                                    default: t(() => [
                                      a(le(h.title) + " ", 1),
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
              ae(
                d(
                  "ul",
                  { class: "tag-menu", style: q({ left: v.value + "px", top: p.value + "px" }) },
                  [
                    d("li", { onClick: u[0] || (u[0] = h => (m.value, void 0)) }, [
                      e(C, { "icon-class": "refresh" }),
                      a(" 刷新 ")
                    ]),
                    Y(m.value)
                      ? ie("", !0)
                      : (s(),
                        w("li", { key: 0, onClick: u[1] || (u[1] = h => (m.value, void 0)) }, [
                          e(C, { "icon-class": "close" }),
                          a(" 关闭 ")
                        ])),
                    d("li", { onClick: J }, [
                      e(C, { "icon-class": "close_other" }),
                      a(" 关闭其它 ")
                    ]),
                    (s(),
                    w("li", { key: 1, onClick: Q }, [
                      e(C, { "icon-class": "close_left" }),
                      a(" 关闭左侧 ")
                    ])),
                    (s(),
                    w("li", { key: 2, onClick: Z }, [
                      e(C, { "icon-class": "close_right" }),
                      a(" 关闭右侧 ")
                    ])),
                    d("li", { onClick: u[2] || (u[2] = h => (m.value, void 0)) }, [
                      e(C, { "icon-class": "close_all" }),
                      a(" 关闭所有 ")
                    ])
                  ],
                  4
                ),
                [[ce, _.value]]
              )
            ],
            64
          )
        );
      };
    }
  }),
  Me = I(Te, [["__scopeId", "data-v-5cfb6b27"]]),
  De = o => (G("data-v-bcd8e1ad"), (o = o()), K(), o),
  Le = { class: "header-right" },
  Re = De(() =>
    d(
      "div",
      { class: "avatar-container" },
      [d("div", { class: "user-avatar" }, "A"), d("div", { class: "user-name" }, "Admain")],
      -1
    )
  ),
  Be = V({
    __name: "NavRight",
    setup(o) {
      const n = Ve(),
        g = () => Ae(n),
        { isFullscreen: c, toggle: l } = Ie();
      return (i, v) => {
        const p = M,
          _ = de,
          b = pe,
          m = me,
          x = fe;
        return (
          s(),
          w("div", Le, [
            e(
              _,
              {
                modelValue: f(n),
                "onUpdate:modelValue": v[0] || (v[0] = k => (ue(n) ? (n.value = k) : null)),
                onChange: g,
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
            d(
              "div",
              { class: "full-screen", onClick: v[1] || (v[1] = (...k) => f(l) && f(l)(...k)) },
              [
                e(
                  p,
                  { "icon-class": f(c) ? "exit-fullscreen" : "fullscreen", color: "darkgray" },
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
                      e(b, null, { default: t(() => [a(" 修改密码 ")]), _: 1 }),
                      e(b, { divided: "" }, { default: t(() => [a(" 注销 ")]), _: 1 })
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [Re]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  Ne = I(Be, [["__scopeId", "data-v-bcd8e1ad"]]),
  D = W("global", () => {
    const o = ge({ isActive: !1 });
    return {
      sidebar: o,
      toggleClick: () => {
        o.isActive = !o.isActive;
      }
    };
  }),
  Fe = V({
    __name: "NavBar",
    setup(o) {
      const n = D();
      return (g, c) => {
        const l = M;
        return (
          s(),
          w(
            "div",
            { onClick: c[0] || (c[0] = (...i) => f(n).toggleClick && f(n).toggleClick(...i)) },
            [
              e(
                l,
                {
                  class: X(["hamburger", { "is-active": f(n).sidebar.isActive }]),
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
  ze = I(Fe, [["__scopeId", "data-v-84977719"]]),
  He = {},
  Oe = { class: "header" };
function We(o, n) {
  const g = ze,
    c = Ne;
  return s(), w("div", Oe, [e(g), e(c)]);
}
const Pe = I(He, [
    ["render", We],
    ["__scopeId", "data-v-181b6dc2"]
  ]),
  Xe = d("span", null, "组件封装", -1),
  qe = d("span", null, "系统管理", -1),
  je = V({
    __name: "LeftMenu",
    setup(o) {
      const n = D(),
        g = (l, i) => {
          console.log(l, i);
        },
        c = (l, i) => {
          console.log(l, i);
        };
      return (l, i) => {
        const v = S("HomeFilled"),
          p = j,
          _ = ve,
          b = S("location"),
          m = he,
          x = S("setting"),
          k = be;
        return (
          s(),
          y(
            k,
            {
              "default-active": "2",
              class: "el-menu-vertical-demo",
              collapse: !f(n).sidebar.isActive,
              onOpen: g,
              onClose: c
            },
            {
              default: t(() => [
                e(
                  _,
                  { index: "1" },
                  {
                    title: t(() => [a("首页")]),
                    default: t(() => [e(p, null, { default: t(() => [e(v)]), _: 1 })]),
                    _: 1
                  }
                ),
                e(
                  m,
                  { index: "2" },
                  {
                    title: t(() => [e(p, null, { default: t(() => [e(b)]), _: 1 }), Xe]),
                    default: t(() => [
                      e(_, { index: "1-1" }, { default: t(() => [a("Vxe-table")]), _: 1 })
                    ]),
                    _: 1
                  }
                ),
                e(
                  m,
                  { index: "3" },
                  {
                    title: t(() => [e(p, null, { default: t(() => [e(x)]), _: 1 }), qe]),
                    default: t(() => [
                      e(_, { index: "3-1" }, { default: t(() => [a("用户管理")]), _: 1 }),
                      e(_, { index: "3-2" }, { default: t(() => [a("角色管理")]), _: 1 })
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
  Ge = o => (G("data-v-26760a0d"), (o = o()), K(), o),
  Ke = { class: "project-title" },
  Ue = Ge(() => d("span", { class: "name" }, "SAAS - DEMO ", -1)),
  Ye = V({
    __name: "Logo",
    setup(o) {
      const n = D();
      return (g, c) => {
        const l = M,
          i = S("router-link");
        return (
          s(),
          w("div", Ke, [
            e(
              ke,
              { name: "sidebarLogoFade" },
              {
                default: t(() => [
                  f(n).sidebar.isActive
                    ? (s(), y(i, { key: "expand", to: "/" }, { default: t(() => [Ue]), _: 1 }))
                    : (s(),
                      y(
                        i,
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
  Je = I(Ye, [["__scopeId", "data-v-26760a0d"]]),
  Qe = V({
    __name: "index",
    setup(o) {
      const n = D(),
        g = U(),
        { visitedViews: c } = P(g);
      return (l, i) => {
        const v = Je,
          p = je,
          _ = Se,
          b = Pe,
          m = ye,
          x = Me,
          k = S("router-view"),
          L = $e,
          A = we;
        return (
          s(),
          y(
            A,
            { class: "common-layout" },
            {
              default: t(() => [
                e(
                  _,
                  {
                    style: q({ width: f(n).sidebar.isActive ? "220px" : "65px" }),
                    class: "sidebar"
                  },
                  { default: t(() => [e(v), a(), e(p)]), _: 1 },
                  8,
                  ["style"]
                ),
                e(A, null, {
                  default: t(() => [
                    e(m, null, { default: t(() => [e(b)]), _: 1 }),
                    e(L, null, {
                      default: t(() => [
                        e(x),
                        e(k, null, {
                          default: t(({ Component: F }) => [
                            (s(), y(Ce, { include: f(c) }, [(s(), y(xe(F)))], 1032, ["include"]))
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
  st = I(Qe, [["__scopeId", "data-v-ebb51c83"]]);
export { st as default };
