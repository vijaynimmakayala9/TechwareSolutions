(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [895],
  {
    61196: function (e, t, n) {
      (Promise.resolve().then(n.bind(n, 29960)),
        Promise.resolve().then(n.t.bind(n, 72972, 23)));
    },
    29960: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return C;
        },
      });
      var i = n(57437),
        r = n(2265),
        s = n(38567),
        o = n(64252),
        a = n(53576),
        l = n(45750);
      class c extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            ((e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u(e) {
        let { children: t, isPresent: n } = e,
          s = (0, r.useId)(),
          o = (0, r.useRef)(null),
          a = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
          { nonce: u } = (0, r.useContext)(l._);
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: t, top: i, left: r } = a.current;
            if (n || !o.current || !e || !t) return;
            o.current.dataset.motionPopId = s;
            let l = document.createElement("style");
            return (
              u && (l.nonce = u),
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      s,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            top: ")
                    .concat(i, "px !important;\n            left: ")
                    .concat(r, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [n]),
          (0, i.jsx)(c, {
            isPresent: n,
            childRef: o,
            sizeRef: a,
            children: r.cloneElement(t, { ref: o }),
          })
        );
      }
      let d = (e) => {
        let {
            children: t,
            initial: n,
            isPresent: s,
            onExitComplete: l,
            custom: c,
            presenceAffectsLayout: d,
            mode: h,
          } = e,
          g = (0, a.h)(p),
          m = (0, r.useId)(),
          f = (0, r.useMemo)(
            () => ({
              id: m,
              initial: n,
              isPresent: s,
              custom: c,
              onExitComplete: (e) => {
                for (let t of (g.set(e, !0), g.values())) if (!t) return;
                l && l();
              },
              register: (e) => (g.set(e, !1), () => g.delete(e)),
            }),
            d ? [Math.random()] : [s],
          );
        return (
          (0, r.useMemo)(() => {
            g.forEach((e, t) => g.set(t, !1));
          }, [s]),
          r.useEffect(() => {
            s || g.size || !l || l();
          }, [s]),
          "popLayout" === h &&
            (t = (0, i.jsx)(u, { isPresent: s, children: t })),
          (0, i.jsx)(o.O.Provider, { value: f, children: t })
        );
      };
      function p() {
        return new Map();
      }
      var h = n(58881),
        g = n(13223);
      let m = (e) => e.key || "";
      function f(e) {
        let t = [];
        return (
          r.Children.forEach(e, (e) => {
            (0, r.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      var x = n(11534);
      let b = (e) => {
        let {
          children: t,
          exitBeforeEnter: n,
          custom: s,
          initial: o = !0,
          onExitComplete: l,
          presenceAffectsLayout: c = !0,
          mode: u = "sync",
        } = e;
        (0, g.k)(!n, "Replace exitBeforeEnter with mode='wait'");
        let p = (0, r.useMemo)(() => f(t), [t]),
          b = p.map(m),
          v = (0, r.useRef)(!0),
          j = (0, r.useRef)(p),
          y = (0, a.h)(() => new Map()),
          [w, C] = (0, r.useState)(p),
          [N, k] = (0, r.useState)(p);
        (0, x.L)(() => {
          ((v.current = !1), (j.current = p));
          for (let e = 0; e < N.length; e++) {
            let t = m(N[e]);
            b.includes(t) ? y.delete(t) : !0 !== y.get(t) && y.set(t, !1);
          }
        }, [N, b.length, b.join("-")]);
        let E = [];
        if (p !== w) {
          let e = [...p];
          for (let t = 0; t < N.length; t++) {
            let n = N[t],
              i = m(n);
            b.includes(i) || (e.splice(t, 0, n), E.push(n));
          }
          ("wait" === u && E.length && (e = E), k(f(e)), C(p));
          return;
        }
        let { forceRender: R } = (0, r.useContext)(h.p);
        return (0, i.jsx)(i.Fragment, {
          children: N.map((e) => {
            let t = m(e),
              n = p === N || b.includes(t);
            return (0, i.jsx)(
              d,
              {
                isPresent: n,
                initial: (!v.current || !!o) && void 0,
                custom: n ? void 0 : s,
                presenceAffectsLayout: c,
                mode: u,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!y.has(t)) return;
                      y.set(t, !0);
                      let e = !0;
                      (y.forEach((t) => {
                        t || (e = !1);
                      }),
                        e && (null == R || R(), k(j.current), l && l()));
                    },
                children: e,
              },
              t,
            );
          }),
        });
      };
      var v = n(33145),
        j = n(27648);
      function y(e) {
        let { p: t } = e;
        return (0, i.jsxs)("article", {
          className:
            "group h-full overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-soft",
          children: [
            (0, i.jsx)("div", {
              className: "overflow-hidden",
              children: (0, i.jsx)(v.default, {
                src: t.image,
                alt: "".concat(t.title, " concept illustration"),
                width: 640,
                height: 480,
                className:
                  "h-auto w-full transition duration-500 group-hover:scale-105",
              }),
            }),
            (0, i.jsxs)("div", {
              className: "p-5",
              children: [
                (0, i.jsxs)("p", {
                  className: "text-xs font-semibold text-brand",
                  children: [
                    t.category,
                    " \xb7 ",
                    t.industry,
                    " (sample concept)",
                  ],
                }),
                (0, i.jsx)("h3", {
                  className: "mt-1 text-lg font-bold",
                  children: t.title,
                }),
                (0, i.jsx)("p", {
                  className: "mt-2 text-sm text-ink-soft",
                  children: t.desc,
                }),
                (0, i.jsx)("ul", {
                  className: "mt-3 flex flex-wrap gap-2",
                  "aria-label": "Technologies",
                  children: t.tech.map((e) =>
                    (0, i.jsx)(
                      "li",
                      {
                        className:
                          "rounded-full bg-brand-bg px-3 py-1 text-xs font-semibold",
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
                (0, i.jsx)(j.default, {
                  href: "/contact",
                  className:
                    "mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark",
                  children: "Discuss a similar project",
                }),
              ],
            }),
          ],
        });
      }
      var w = n(40944);
      function C() {
        let [e, t] = (0, r.useState)("All"),
          n = "All" === e ? w.q : w.q.filter((t) => t.category === e);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("div", {
              role: "group",
              "aria-label": "Filter projects",
              className: "mb-10 flex flex-wrap justify-center gap-2",
              children: w.b.map((n) =>
                (0, i.jsx)(
                  "button",
                  {
                    onClick: () => t(n),
                    "aria-pressed": e === n,
                    className:
                      "min-h-11 rounded-full border px-5 text-sm font-semibold transition ".concat(
                        e === n
                          ? "border-brand bg-brand text-white"
                          : "border-line bg-white hover:border-brand",
                      ),
                    children: n,
                  },
                  n,
                ),
              ),
            }),
            (0, i.jsx)(s.E.ul, {
              layout: !0,
              className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
              children: (0, i.jsx)(b, {
                mode: "popLayout",
                children: n.map((e) =>
                  (0, i.jsx)(
                    s.E.li,
                    {
                      layout: !0,
                      initial: { opacity: 0, scale: 0.96 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 0.96 },
                      transition: { duration: 0.25 },
                      className: "list-none",
                      children: (0, i.jsx)(y, { p: e }),
                    },
                    e.slug,
                  ),
                ),
              }),
            }),
            (0, i.jsxs)("p", {
              className: "mt-6 text-center text-sm text-ink-soft",
              "aria-live": "polite",
              children: [
                n.length,
                " sample concept",
                1 === n.length ? "" : "s",
                " shown",
              ],
            }),
          ],
        });
      }
    },
    40944: function (e, t, n) {
      "use strict";
      n.d(t, {
        b: function () {
          return i;
        },
        q: function () {
          return r;
        },
      });
      let i = [
          "All",
          "Website",
          "Mobile App",
          "E-commerce",
          "Digital Marketing",
        ],
        r = [
          {
            slug: "retail-storefront",
            title: "Retail storefront",
            category: "E-commerce",
            industry: "Retail",
            tech: ["Next.js", "Stripe"],
            image: "/images/project-ecommerce.svg",
            desc: "Concept: a fast online store with catalogue, search and secure checkout.",
          },
          {
            slug: "field-service-app",
            title: "Field-service app",
            category: "Mobile App",
            industry: "Services",
            tech: ["React Native", "Node.js"],
            image: "/images/project-app.svg",
            desc: "Concept: job scheduling and status updates for technicians on the go.",
          },
          {
            slug: "clinic-website",
            title: "Clinic website",
            category: "Website",
            industry: "Healthcare",
            tech: ["Next.js", "Tailwind CSS"],
            image: "/images/project-website.svg",
            desc: "Concept: clear service pages, opening hours and an enquiry form.",
          },
          {
            slug: "lead-generation-campaign",
            title: "Lead generation campaign",
            category: "Digital Marketing",
            industry: "Education",
            tech: ["Google Ads", "GA4"],
            image: "/images/project-marketing.svg",
            desc: "Concept: paid search campaign with conversion tracking and monthly reports.",
          },
          {
            slug: "boutique-online-shop",
            title: "Boutique online shop",
            category: "E-commerce",
            industry: "Fashion",
            tech: ["Next.js", "Resend"],
            image: "/images/project-ecommerce.svg",
            desc: "Concept: product pages designed for mobile shoppers.",
          },
          {
            slug: "booking-app",
            title: "Appointment booking app",
            category: "Mobile App",
            industry: "Wellness",
            tech: ["Flutter", "Firebase"],
            image: "/images/project-app.svg",
            desc: "Concept: book, reschedule and get reminders in a few taps.",
          },
          {
            slug: "corporate-site",
            title: "Corporate website",
            category: "Website",
            industry: "Manufacturing",
            tech: ["React", "Next.js"],
            image: "/images/project-website.svg",
            desc: "Concept: structured multi-page site with product catalogue.",
          },
          {
            slug: "seo-growth",
            title: "SEO growth plan",
            category: "Digital Marketing",
            industry: "Professional services",
            tech: ["Search Console", "Lighthouse"],
            image: "/images/project-marketing.svg",
            desc: "Concept: technical audit and content plan for organic growth.",
          },
        ];
    },
    33145: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var i = n(48461),
        r = n.n(i);
    },
    27648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r.a;
        },
      });
      var i = n(72972),
        r = n.n(i);
    },
    48461: function (e, t, n) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        }));
      let i = n(47043),
        r = n(55346),
        s = n(65878),
        o = i._(n(5084));
      function a(e) {
        let { props: t } = (0, r.getImgProps)(e, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = s.Image;
    },
  },
  function (e) {
    (e.O(0, [972, 878, 567, 971, 117, 744], function () {
      return e((e.s = 61196));
    }),
      (_N_E = e.O()));
  },
]);
