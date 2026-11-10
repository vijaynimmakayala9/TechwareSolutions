(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    53258: function (e, t, r) {
      (Promise.resolve().then(r.t.bind(r, 47960, 23)),
        Promise.resolve().then(r.bind(r, 5815)),
        Promise.resolve().then(r.bind(r, 45308)),
        Promise.resolve().then(r.bind(r, 26776)),
        Promise.resolve().then(r.t.bind(r, 72972, 23)),
        Promise.resolve().then(r.t.bind(r, 47451, 23)));
    },
    5815: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return f;
        },
      });
      var n = r(57437),
        l = r(27648),
        i = r(2265),
        s = r(35475),
        a = r(40875),
        o = r(32489),
        c = r(58293),
        d = {
          nav: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            {
              label: "Services",
              href: "/services",
              children: [
                {
                  label: "Website Development",
                  href: "/services/web-development",
                },
                {
                  label: "Mobile App Development",
                  href: "/services/app-development",
                },
                {
                  label: "Digital Marketing",
                  href: "/services/digital-marketing",
                },
                { label: "All Services", href: "/services" },
              ],
            },
            { label: "Projects", href: "/projects" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ],
        },
        u = r(56537);
      function f() {
        let e = (0, s.usePathname)(),
          [t, r] = (0, i.useState)(!1),
          [f, h] = (0, i.useState)(!1),
          [b, m] = (0, i.useState)(!1);
        ((0, i.useEffect)(() => {
          (r(!1), h(!1));
        }, [e]),
          (0, i.useEffect)(() => {
            let e = () => m(window.scrollY > 8);
            return (
              e(),
              window.addEventListener("scroll", e, { passive: !0 }),
              () => window.removeEventListener("scroll", e)
            );
          }, []));
        let x = (t) => ("/" === t ? "/" === e : e.startsWith(t)),
          p = (e) =>
            "rounded-full px-3 py-2 text-sm font-semibold transition hover:text-brand ".concat(
              x(e) ? "text-brand" : "text-ink",
            );
        return (0, n.jsxs)("header", {
          className: "sticky top-0 z-50 border-b transition ".concat(
            b
              ? "border-line bg-white/90 shadow-soft backdrop-blur"
              : "border-transparent bg-brand-bg",
          ),
          children: [
            (0, n.jsxs)("nav", {
              "aria-label": "Main",
              className:
                "mx-auto flex h-16 max-w-6xl items-center justify-between px-6",
              children: [
                (0, n.jsxs)(l.default, {
                  href: "/",
                  className: "text-lg font-extrabold text-brand-dark",
                  children: [
                    "TechWare",
                    (0, n.jsx)("span", {
                      className: "text-brand",
                      children: " Solutions",
                    }),
                  ],
                }),
                (0, n.jsx)("ul", {
                  className: "hidden items-center gap-1 lg:flex",
                  children: d.nav.map((e) =>
                    e.children
                      ? (0, n.jsxs)(
                          "li",
                          {
                            className: "relative",
                            onMouseLeave: () => h(!1),
                            children: [
                              (0, n.jsxs)("button", {
                                className: "".concat(
                                  p(e.href),
                                  " inline-flex items-center gap-1",
                                ),
                                "aria-expanded": f,
                                "aria-haspopup": "true",
                                onClick: () => h(!f),
                                onMouseEnter: () => h(!0),
                                onKeyDown: (e) => "Escape" === e.key && h(!1),
                                children: [
                                  e.label,
                                  (0, n.jsx)(a.Z, {
                                    size: 14,
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                              f &&
                                (0, n.jsx)("ul", {
                                  className:
                                    "absolute left-0 top-full w-64 rounded-2xl border border-line bg-white p-2 shadow-soft",
                                  children: e.children.map((e) =>
                                    (0, n.jsx)(
                                      "li",
                                      {
                                        children: (0, n.jsx)(l.default, {
                                          href: e.href,
                                          className:
                                            "block rounded-xl px-3 py-2 text-sm hover:bg-brand-light",
                                          children: e.label,
                                        }),
                                      },
                                      e.href,
                                    ),
                                  ),
                                }),
                            ],
                          },
                          e.href,
                        )
                      : (0, n.jsx)(
                          "li",
                          {
                            children: (0, n.jsx)(l.default, {
                              href: e.href,
                              className: p(e.href),
                              "aria-current": x(e.href) ? "page" : void 0,
                              children: e.label,
                            }),
                          },
                          e.href,
                        ),
                  ),
                }),
                (0, n.jsx)("div", {
                  className: "hidden lg:block",
                  children: (0, n.jsx)(u.Z, {
                    href: "/contact",
                    children: "Get a Quote",
                  }),
                }),
                (0, n.jsx)("button", {
                  className:
                    "inline-flex h-11 w-11 items-center justify-center lg:hidden",
                  "aria-label": t ? "Close menu" : "Open menu",
                  "aria-expanded": t,
                  onClick: () => r(!t),
                  children: t ? (0, n.jsx)(o.Z, {}) : (0, n.jsx)(c.Z, {}),
                }),
              ],
            }),
            t &&
              (0, n.jsxs)("div", {
                className: "border-t border-line bg-white px-6 pb-6 lg:hidden",
                children: [
                  (0, n.jsx)("ul", {
                    className: "flex flex-col py-2",
                    children: d.nav
                      .flatMap((e) => [
                        e,
                        ...(e.children || [])
                          .filter((e) => "All Services" !== e.label)
                          .map((e) => ({ ...e, sub: !0 })),
                      ])
                      .map((e) =>
                        (0, n.jsx)(
                          "li",
                          {
                            children: (0, n.jsx)(l.default, {
                              href: e.href,
                              className: "block py-3 text-base font-semibold "
                                .concat(
                                  e.sub
                                    ? "pl-4 text-sm font-medium text-ink-soft"
                                    : "",
                                  " ",
                                )
                                .concat(
                                  x(e.href) && !e.sub ? "text-brand" : "",
                                ),
                              children: e.label,
                            }),
                          },
                          e.href + e.label,
                        ),
                      ),
                  }),
                  (0, n.jsx)(u.Z, {
                    href: "/contact",
                    className: "w-full",
                    children: "Get a Quote",
                  }),
                ],
              }),
          ],
        });
      }
    },
    56537: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(57437),
        l = r(27648);
      let i = {
        primary: "bg-brand text-white hover:bg-brand-dark shadow-soft",
        secondary:
          "bg-white text-brand-dark border border-line hover:border-brand",
      };
      function s(e) {
        let {
            href: t,
            variant: r = "primary",
            children: s,
            className: a = "",
            ...o
          } = e,
          c =
            "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand "
              .concat(i[r], " ")
              .concat(a);
        return t
          ? (0, n.jsx)(l.default, { href: t, className: c, ...o, children: s })
          : (0, n.jsx)("button", { className: c, ...o, children: s });
      }
    },
    45308: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return c;
        },
      });
      var n = r(57437),
        l = r(2265),
        i = r(45750),
        s = r(26257),
        a = r(53576);
      function o(e) {
        let { children: t, isValidProp: r, ...o } = e;
        (r && (0, s.K)(r),
          ((o = { ...(0, l.useContext)(i._), ...o }).isStatic = (0, a.h)(
            () => o.isStatic,
          )));
        let c = (0, l.useMemo)(
          () => o,
          [JSON.stringify(o.transition), o.transformPagePoint, o.reducedMotion],
        );
        return (0, n.jsx)(i._.Provider, { value: c, children: t });
      }
      function c(e) {
        let { children: t } = e;
        return (0, n.jsx)(o, { reducedMotion: "user", children: t });
      }
    },
    26776: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return s;
        },
      });
      var n = r(57437),
        l = r(45447),
        i = r(38567);
      function s() {
        let { scrollYProgress: e } = (0, l.v)();
        return (0, n.jsx)(i.E.div, {
          "aria-hidden": "true",
          style: { scaleX: e },
          className: "fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-brand",
        });
      }
    },
    20135: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(2265),
        l = {
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
        i = r(7656);
      let s = (0, n.forwardRef)((e, t) => {
        let {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: a = 2,
          absoluteStrokeWidth: o,
          className: c = "",
          children: d,
          iconNode: u,
          ...f
        } = e;
        return (0, n.createElement)(
          "svg",
          {
            ref: t,
            ...l,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: o ? (24 * Number(a)) / Number(s) : a,
            className: (0, i.z)("lucide", c),
            ...f,
          },
          [
            ...u.map((e) => {
              let [t, r] = e;
              return (0, n.createElement)(t, r);
            }),
            ...(Array.isArray(d) ? d : [d]),
          ],
        );
      });
    },
    43168: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return s;
        },
      });
      var n = r(2265),
        l = r(7656),
        i = r(20135);
      let s = (e, t) => {
        let r = (0, n.forwardRef)((r, s) => {
          let { className: a, ...o } = r;
          return (0, n.createElement)(i.Z, {
            ref: s,
            iconNode: t,
            className: (0, l.z)("lucide-".concat((0, l.m)(e)), a),
            ...o,
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
    58293: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(43168).Z)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    32489: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (0, r(43168).Z)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    7656: function (e, t, r) {
      "use strict";
      r.d(t, {
        m: function () {
          return n;
        },
        z: function () {
          return l;
        },
      });
      let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        l = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        };
    },
    27648: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l.a;
        },
      });
      var n = r(72972),
        l = r.n(n);
    },
    47960: function () {},
    47451: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Manrope_855f89', '__Manrope_Fallback_855f89'",
          fontStyle: "normal",
        },
        className: "__className_855f89",
      };
    },
  },
  function (e) {
    (e.O(0, [713, 972, 567, 447, 971, 117, 744], function () {
      return e((e.s = 53258));
    }),
      (_N_E = e.O()));
  },
]);
