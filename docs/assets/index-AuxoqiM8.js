import {
  z as te,
  A as _e,
  d as S,
  g as i,
  b as k,
  e as n,
  B as ne,
  u as g,
  _ as L,
  a as T,
  C as V,
  w as l,
  D as E,
  F as q,
  p as se,
  l as b,
  G as pe,
  H as fe,
  I as me,
  v as ae,
  x as oe,
  h as x,
  J as ve,
  T as he,
  K as le,
  L as ce,
  M as z,
  N as j,
  O as Y,
  P as we,
  Q as ge,
  R as G,
  r as A,
  S as xe,
  U as ke,
  c as Ve,
  V as ie,
  W as ee,
  o as Ce,
  X as ye,
  k as X,
  Y as be,
  Z as Se,
  $ as re,
  a0 as Ie,
  a1 as $e,
  a2 as Ae,
  a3 as Te,
  a4 as Le,
  a5 as Me,
  a6 as Pe
} from "./index-C1t76LZj.js";
import { _ as D, a as Re, b as Ee } from "./index-DVzjjm5K.js";
const B = te("global", () => {
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
        const o = D;
        return (
          i(),
          k(
            "div",
            { onClick: r[0] || (r[0] = (...d) => g(e).toggleClick && g(e).toggleClick(...d)) },
            [
              n(
                o,
                {
                  class: ne(["collpase-icon", { "is-active": g(e).sidebar.isActive }]),
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
  ze = S({
    __name: "FullScreen",
    setup(t) {
      const { isFullscreen: e, toggle: m } = Re();
      return (r, o) => {
        const d = D;
        return (
          i(),
          k(
            "div",
            { class: "cursor-pointer", onClick: o[0] || (o[0] = (...h) => g(m) && g(m)(...h)) },
            [n(d, { name: g(e) ? "exit-fullscreen" : "fullscreen" }, null, 8, ["name"])]
          )
        );
      };
    }
  }),
  qe = { class: "mt-4px cursor-pointer" },
  Be = S({
    __name: "Dark",
    setup(t) {
      const e = Ee(),
        m = async r => {
          const o = r.clientX,
            d = r.clientY,
            h = Math.hypot(Math.max(o, innerWidth - o), Math.max(d, innerHeight - d));
          if (document.startViewTransition === void 0) e.value = !e.value;
          else {
            await document.startViewTransition(() => {
              e.value = !e.value;
            }).ready;
            const w = [`circle(0px at ${o}px ${d}px)`, `circle(${h}px at ${o}px ${d}px)`];
            document.documentElement.animate(
              { clipPath: e.value ? w : [...w].reverse() },
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
          h = q,
          C = se,
          w = T("Moon");
        return (
          i(),
          k("div", qe, [
            g(e)
              ? E("", !0)
              : (i(),
                V(
                  C,
                  { key: 0, content: "明亮模式" },
                  {
                    default: l(() => [
                      n(h, { size: 22, onClick: m }, { default: l(() => [n(d)]), _: 1 })
                    ]),
                    _: 1
                  }
                )),
            g(e)
              ? (i(),
                V(
                  C,
                  { key: 1, content: "暗黑模式" },
                  {
                    default: l(() => [
                      n(h, { size: 22, onClick: m }, { default: l(() => [n(w)]), _: 1 })
                    ]),
                    _: 1
                  }
                ))
              : E("", !0)
          ])
        );
      };
    }
  }),
  Ne = {},
  Fe = t => (ae("data-v-2fb26022"), (t = t()), oe(), t),
  We = Fe(() =>
    x(
      "div",
      { class: "flex items-center cursor-pointer font-bold" },
      [x("div", { class: "user-avatar" }, "A"), x("div", { class: "ml-6px" }, "Admin")],
      -1
    )
  );
function He(t, e) {
  const m = pe,
    r = fe,
    o = me;
  return (
    i(),
    k("div", null, [
      n(
        o,
        { trigger: "click" },
        {
          dropdown: l(() => [
            n(r, null, {
              default: l(() => [
                n(m, null, { default: l(() => [b(" 修改密码 ")]), _: 1 }),
                n(m, { divided: "" }, { default: l(() => [b(" 注销 ")]), _: 1 })
              ]),
              _: 1
            })
          ]),
          default: l(() => [We]),
          _: 1
        }
      )
    ])
  );
}
const Xe = L(Ne, [
    ["render", He],
    ["__scopeId", "data-v-2fb26022"]
  ]),
  je = { class: "mt-4px cursor-pointer" },
  Ye = S({
    __name: "Refresh",
    setup(t) {
      const e = () => {
        ve.success("刷新成功");
      };
      return (m, r) => {
        const o = T("RefreshRight"),
          d = q,
          h = se;
        return (
          i(),
          k("div", je, [
            n(
              h,
              { content: "刷新" },
              {
                default: l(() => [
                  n(d, { size: 20, onClick: e }, { default: l(() => [n(o)]), _: 1 })
                ]),
                _: 1
              }
            )
          ])
        );
      };
    }
  }),
  Ge = { class: "header" },
  Ke = { class: "flex items-center justify-between truncate" },
  Ue = { class: "header-right flex items-center justify-between" },
  Je = S({
    __name: "index",
    setup(t) {
      return (e, m) => (
        i(), k("div", Ge, [x("div", Ke, [n(Oe)]), x("div", Ue, [n(Be), n(Ye), n(ze), n(Xe)])])
      );
    }
  }),
  Qe = L(Je, [["__scopeId", "data-v-0fa5976d"]]),
  Ze = t => (ae("data-v-8996f933"), (t = t()), oe(), t),
  et = { class: "project-title" },
  tt = Ze(() => x("span", { class: "font-bold text-xl" }, "niu-be-admin", -1)),
  nt = S({
    __name: "index",
    setup(t) {
      const e = B();
      return (m, r) => {
        const o = D,
          d = T("router-link");
        return (
          i(),
          k("div", et, [
            n(
              he,
              { name: "sidebarLogoFade" },
              {
                default: l(() => [
                  g(e).sidebar.isActive
                    ? (i(), V(d, { key: "expand", to: "/" }, { default: l(() => [tt]), _: 1 }))
                    : (i(),
                      V(
                        d,
                        { key: "collapse", to: "/" },
                        { default: l(() => [n(o, { name: "logo", size: "20" })]), _: 1 }
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
        const d = D,
          h = q,
          C = T("SidebarMenuItem", !0),
          w = we,
          I = ge;
        return (
          i(!0),
          k(
            z,
            null,
            ce(t.menuList, c => {
              var _;
              return (
                i(),
                k(
                  z,
                  { key: c.path },
                  [
                    (_ = c.children) != null && _.length && !c.meta.hidden
                      ? (i(),
                        V(
                          w,
                          { key: 0, index: c.path },
                          {
                            title: l(() => [
                              n(
                                h,
                                null,
                                {
                                  default: l(() => [
                                    c.meta.iconType == "el"
                                      ? (i(), V(j(c.meta.icon), { key: 0 }))
                                      : (i(),
                                        V(d, { key: 1, name: c.meta.icon }, null, 8, ["name"]))
                                  ]),
                                  _: 2
                                },
                                1024
                              ),
                              x("span", null, Y(c.meta.title), 1)
                            ]),
                            default: l(() => [
                              n(C, { menuList: c.children }, null, 8, ["menuList"])
                            ]),
                            _: 2
                          },
                          1032,
                          ["index"]
                        ))
                      : c.meta.hidden
                        ? E("", !0)
                        : (i(),
                          V(
                            I,
                            { key: 1, index: c.path, onClick: N => m(c) },
                            {
                              title: l(() => [
                                n(
                                  h,
                                  null,
                                  {
                                    default: l(() => [
                                      c.meta.iconType == "el"
                                        ? (i(), V(j(c.meta.icon), { key: 0 }))
                                        : E("", !0),
                                      n(d, { name: c.meta.icon }, null, 8, ["name"])
                                    ]),
                                    _: 2
                                  },
                                  1024
                                ),
                                x("span", null, Y(c.meta.title), 1)
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
  ot = S({
    __name: "index",
    setup(t) {
      const e = B(),
        m = G(),
        r = A(xe);
      return (o, d) => {
        const h = ke;
        return (
          i(),
          V(
            h,
            {
              "default-active": g(m).path,
              class: "el-menu-vertical-demo",
              collapse: !g(e).sidebar.isActive
            },
            { default: l(() => [n(at, { menuList: g(r) }, null, 8, ["menuList"])]), _: 1 },
            8,
            ["default-active", "collapse"]
          )
        );
      };
    }
  }),
  lt = L(ot, [["__scopeId", "data-v-f74ea3d4"]]),
  ue = te("tagsView", () => {
    const t = A([]),
      e = A([]),
      m = G(),
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
      w = s =>
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
          w(s), I(s), a({ visitedViews: [...t.value], cachedViews: [...e.value] });
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
  ct = { class: "scrollbar-flex-content" },
  it = S({
    __name: "index",
    setup(t) {
      const { proxy: e } = Ie(),
        m = Ve(() => (e == null ? void 0 : e.$refs.scrollContainer.$refs.wrapRef));
      function r(p) {
        const v = p.wheelDelta || -p.deltaY * 40;
        m.value.scrollLeft += v / 4;
      }
      const o = ue(),
        { visitedViews: d } = ie(o),
        h = A(0),
        C = A(0),
        w = A(!1),
        I = A(null),
        c = A({
          path: "",
          fullPath: "",
          name: "",
          query: {},
          meta: { title: "", affix: !1, keepAlive: !0 }
        }),
        _ = G();
      ee(
        _,
        () => {
          N(), K();
        },
        { immediate: !0 }
      ),
        Ce(() => {
          ee(w, p => {
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
      function K() {
        ye(() => {
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
      function U(p, v) {
        var R, Z;
        c.value = p;
        const M = v.target,
          O = 105,
          W = ((R = I.value) == null ? void 0 : R.getBoundingClientRect().left) || 0,
          H = ((Z = I.value) == null ? void 0 : Z.getBoundingClientRect().width) || 0,
          { top: $, height: y } = M.getBoundingClientRect();
        (h.value = v.clientX + O > W + H ? v.clientX - O : v.clientX + 20),
          (C.value = $ + y - 6),
          (w.value = !0);
      }
      function F() {
        w.value = !1;
      }
      function J(p) {
        return _.name === p.name;
      }
      function de(p) {}
      function Q(p) {
        return !1;
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
          O = q,
          W = T("router-link"),
          H = $e,
          $ = D;
        return (
          i(),
          k(
            z,
            null,
            [
              x(
                "div",
                { ref_key: "container", ref: I },
                [
                  n(
                    H,
                    { ref: "scrollContainer", height: "34px", onWheel: X(r, ["prevent"]) },
                    {
                      default: l(() => [
                        x("div", ct, [
                          (i(!0),
                          k(
                            z,
                            null,
                            ce(
                              g(d),
                              y => (
                                i(),
                                V(
                                  W,
                                  {
                                    key: y.path,
                                    to: { path: y.path, query: y.query },
                                    class: ne(["tags-item", { active: J(y) }]),
                                    onContextmenu: X(R => U(y, R), ["prevent"])
                                  },
                                  {
                                    default: l(() => [
                                      b(Y(y.meta.title) + " ", 1),
                                      n(
                                        O,
                                        { size: 10, onClick: X(R => s(y), ["prevent", "stop"]) },
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
              be(
                x(
                  "ul",
                  { class: "tag-menu", style: re({ left: h.value + "px", top: C.value + "px" }) },
                  [
                    x("li", { onClick: v[0] || (v[0] = y => (c.value, void 0)) }, [
                      n($, { name: "refresh" }),
                      b(" 刷新 ")
                    ]),
                    Q(c.value)
                      ? E("", !0)
                      : (i(),
                        k("li", { key: 0, onClick: v[1] || (v[1] = y => s(c.value)) }, [
                          n($, { name: "close" }),
                          b(" 关闭 ")
                        ])),
                    x("li", { onClick: a }, [n($, { name: "close_other" }), b(" 关闭其它 ")]),
                    (i(),
                    k("li", { key: 1, onClick: u }, [
                      n($, { name: "close_left" }),
                      b(" 关闭左侧 ")
                    ])),
                    (i(),
                    k("li", { key: 2, onClick: f }, [
                      n($, { name: "close_right" }),
                      b(" 关闭右侧 ")
                    ])),
                    x("li", { onClick: v[2] || (v[2] = y => P()) }, [
                      n($, { name: "close_all" }),
                      b(" 关闭所有 ")
                    ])
                  ],
                  4
                ),
                [[Se, w.value]]
              )
            ],
            64
          )
        );
      };
    }
  }),
  rt = L(it, [["__scopeId", "data-v-1d5fac14"]]),
  ut = S({
    __name: "index",
    setup(t) {
      const e = B(),
        m = ue(),
        { cachedViews: r } = ie(m);
      return (o, d) => {
        const h = Te,
          C = Le,
          w = T("router-view"),
          I = Me,
          c = Pe;
        return (
          i(),
          V(
            c,
            { class: "common-layout" },
            {
              default: l(() => [
                n(
                  h,
                  {
                    style: re({ width: g(e).sidebar.isActive ? "220px" : "65px" }),
                    class: "sidebar"
                  },
                  { default: l(() => [n(st), b(), n(lt)]), _: 1 },
                  8,
                  ["style"]
                ),
                n(c, null, {
                  default: l(() => [
                    n(C, null, { default: l(() => [n(Qe)]), _: 1 }),
                    n(I, null, {
                      default: l(() => [
                        n(rt),
                        n(w, null, {
                          default: l(({ Component: _ }) => [
                            (i(), V(Ae, { include: g(r) }, [(i(), V(j(_)))], 1032, ["include"]))
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
  pt = L(ut, [["__scopeId", "data-v-3e20a2b3"]]);
export { pt as default };
