(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [425, 194, 588],
  {
    6121: function (e, t, r) {
      (Promise.resolve().then(r.bind(r, 88895)),
        Promise.resolve().then(r.t.bind(r, 65878, 23)),
        Promise.resolve().then(r.t.bind(r, 72972, 23)));
    },
    88895: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return o;
        },
      });
      var n = r(57437),
        i = r(2265),
        s = r(40875);
      function o(e) {
        let { items: t } = e,
          [r, o] = (0, i.useState)(0);
        return (0, n.jsx)("div", {
          className: "mx-auto max-w-2xl space-y-3",
          children: t.map((e, t) => {
            let [i, c] = e;
            return (0, n.jsxs)(
              "div",
              {
                className: "rounded-2xl border border-line bg-white",
                children: [
                  (0, n.jsx)("h3", {
                    children: (0, n.jsxs)("button", {
                      className:
                        "flex w-full items-center justify-between gap-4 p-5 text-left font-semibold",
                      "aria-expanded": r === t,
                      "aria-controls": "f-".concat(t),
                      onClick: () => o(r === t ? -1 : t),
                      children: [
                        i,
                        (0, n.jsx)(s.Z, {
                          size: 18,
                          className: "shrink-0 transition ".concat(
                            r === t ? "rotate-180" : "",
                          ),
                          "aria-hidden": "true",
                        }),
                      ],
                    }),
                  }),
                  r === t &&
                    (0, n.jsx)("p", {
                      id: "f-".concat(t),
                      className: "px-5 pb-5 text-sm text-ink-soft",
                      children: c,
                    }),
                ],
              },
              i,
            );
          }),
        });
      }
    },
    20135: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(2265),
        i = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        s = r(7656);
      let o = (0, n.forwardRef)((e, t) => {
        let {
          color: r = "currentColor",
          size: o = 24,
          strokeWidth: c = 2,
          absoluteStrokeWidth: a,
          className: u = "",
          children: l,
          iconNode: d,
          ...f
        } = e;
        return (0, n.createElement)(
          "svg",
          {
            ref: t,
            ...i,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: a ? (24 * Number(c)) / Number(o) : c,
            className: (0, s.z)("lucide", u),
            ...f,
          },
          [
            ...d.map((e) => {
              let [t, r] = e;
              return (0, n.createElement)(t, r);
            }),
            ...(Array.isArray(l) ? l : [l]),
          ],
        );
      });
    },
    43168: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(2265),
        i = r(7656),
        s = r(20135);
      let o = (e, t) => {
        let r = (0, n.forwardRef)((r, o) => {
          let { className: c, ...a } = r;
          return (0, n.createElement)(s.Z, {
            ref: o,
            iconNode: t,
            className: (0, i.z)("lucide-".concat((0, i.m)(e)), c),
            ...a,
          });
        });
        return ((r.displayName = "".concat(e)), r);
      };
    },
    40875: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(43168).Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    7656: function (e, t, r) {
      "use strict";
      r.d(t, {
        m: function () {
          return n;
        },
        z: function () {
          return i;
        },
      });
      let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        };
    },
  },
  function (e) {
    (e.O(0, [972, 878, 971, 117, 744], function () {
      return e((e.s = 6121));
    }),
      (_N_E = e.O()));
  },
]);
