import {
  a as s,
  c as n,
  b as e,
  w as l,
  F as r,
  q as d,
  ae as m,
  o as c,
  af as p
} from "./index-CeVMKrt0.js";
/* empty css                    */ /* empty css                  */ /* empty css                     */ const _ =
    d("h1", null, "主内容展示", -1),
  T = s({
    __name: "HomeView",
    setup(i) {
      const o = [
        { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" },
        { date: "2016-05-02", name: "Tom", address: "No. 189, Grove St, Los Angeles" },
        { date: "2016-05-04", name: "Tom", address: "No. 189, Grove St, Los Angeles" },
        { date: "2016-05-01", name: "Tom", address: "No. 189, Grove St, Los Angeles" }
      ];
      return (b, u) => {
        const a = p,
          t = m;
        return (
          c(),
          n(
            r,
            null,
            [
              _,
              e(
                t,
                { data: o, style: { width: "100%" } },
                {
                  default: l(() => [
                    e(a, { prop: "date", label: "Date", width: "180" }),
                    e(a, { prop: "name", label: "Name", width: "180" }),
                    e(a, { prop: "address", label: "Address" })
                  ]),
                  _: 1
                }
              )
            ],
            64
          )
        );
      };
    }
  });
export { T as default };
