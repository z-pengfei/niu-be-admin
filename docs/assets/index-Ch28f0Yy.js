import {
  a as E,
  C as a,
  K as w,
  ag as L,
  o as _,
  c as f,
  q as s,
  ah as m,
  _ as g,
  b as k,
  w as p
} from "./index-DcxNABBM.js";
const y = E({
    __name: "index",
    setup(h) {
      const e = a(null),
        t = a(null),
        i = a(null),
        o = a(null);
      let r = !1;
      const c = n => {
          (r = !0),
            document.addEventListener("mousemove", l),
            document.addEventListener("mouseup", u);
        },
        l = n => {
          if (!r || !e.value || !t.value || !i.value) return;
          const d = e.value.clientHeight,
            v = ((n.clientY - e.value.offsetTop) / d) * 100,
            b = 100 - v;
          (t.value.style.height = `${v}%`), (i.value.style.height = `${b}%`);
        },
        u = () => {
          (r = !1),
            document.removeEventListener("mousemove", l),
            document.removeEventListener("mouseup", u);
        };
      return (
        w(() => {
          o.value && o.value.addEventListener("mousedown", c);
        }),
        L(() => {
          o.value && o.value.removeEventListener("mousedown", c),
            document.removeEventListener("mousemove", l),
            document.removeEventListener("mouseup", u);
        }),
        (n, d) => (
          _(),
          f(
            "div",
            { class: "split-view", ref_key: "splitView", ref: e },
            [
              s(
                "div",
                { class: "pane top-pane", ref_key: "topPane", ref: t },
                [m(n.$slots, "top", {}, void 0, !0)],
                512
              ),
              s("div", { class: "divider", ref_key: "divider", ref: o, onMousedown: c }, null, 544),
              s(
                "div",
                { class: "pane bottom-pane", ref_key: "bottomPane", ref: i },
                [m(n.$slots, "bottom", {}, void 0, !0)],
                512
              )
            ],
            512
          )
        )
      );
    }
  }),
  H = g(y, [["__scopeId", "data-v-500003d3"]]),
  P = {},
  x = s("div", { class: "bg-red-600 h-100%" }, "111111111", -1),
  $ = s("div", { class: "bg-lime-400 h-100%" }, "222222", -1);
function V(h, e) {
  const t = H;
  return _(), f("div", null, [k(t, null, { top: p(() => [x]), bottom: p(() => [$]), _: 1 })]);
}
const D = g(P, [["render", V]]);
export { D as default };
