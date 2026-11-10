(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [301],
  {
    84808: function (e, n, i) {
      (Promise.resolve().then(i.bind(i, 10965)),
        Promise.resolve().then(i.bind(i, 18122)),
        Promise.resolve().then(i.t.bind(i, 65878, 23)),
        Promise.resolve().then(i.t.bind(i, 72972, 23)));
    },
    10965: function (e, n, i) {
      "use strict";
      i.d(n, {
        default: function () {
          return o;
        },
      });
      var t = i(57437),
        r = i(38567);
      function o(e) {
        let { children: n, className: i = "" } = e;
        return (0, t.jsx)(r.E.div, {
          className: "overflow-hidden rounded-3xl ".concat(i),
          initial: {
            clipPath: "inset(12% 12% 12% 12% round 24px)",
            scale: 1.06,
          },
          whileInView: { clipPath: "inset(0% 0% 0% 0% round 24px)", scale: 1 },
          viewport: { once: !0, margin: "-80px" },
          transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          children: n,
        });
      }
    },
    18122: function (e, n, i) {
      "use strict";
      i.d(n, {
        default: function () {
          return o;
        },
      });
      var t = i(57437),
        r = i(38567);
      function o(e) {
        let { children: n, delay: i = 0, className: o = "", blur: s = !1 } = e;
        return (0, t.jsx)(r.E.div, {
          className: o,
          initial: { opacity: 0, y: 24, ...(s && { filter: "blur(6px)" }) },
          whileInView: { opacity: 1, y: 0, ...(s && { filter: "blur(0px)" }) },
          viewport: { once: !0, margin: "-60px" },
          transition: { duration: 0.6, delay: i, ease: [0.22, 1, 0.36, 1] },
          children: n,
        });
      }
    },
  },
  function (e) {
    (e.O(0, [972, 878, 567, 971, 117, 744], function () {
      return e((e.s = 84808));
    }),
      (_N_E = e.O()));
  },
]);
