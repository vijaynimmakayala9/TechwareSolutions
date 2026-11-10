(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [404],
  {
    27889: function (e, t, a) {
      (Promise.resolve().then(a.bind(a, 10833)),
        Promise.resolve().then(a.bind(a, 84859)),
        Promise.resolve().then(a.t.bind(a, 65878, 23)),
        Promise.resolve().then(a.t.bind(a, 72972, 23)));
    },
    10833: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return b;
        },
      });
      var s = a(57437),
        i = a(2265),
        r = a(18122),
        n = a(33145),
        o = a(27648);
      let l = { name: "TechWare Team", role: "Editorial" },
        c = [
          {
            slug: "website-or-web-app",
            title: "Website or web app: which does your business need?",
            category: "Web Development",
            tags: ["websites", "web apps", "planning"],
            author: l,
            published: "2026-10-12",
            updated: "2026-10-12",
            image: "/images/blog-web.svg",
            featured: !0,
            excerpt:
              "A simple way to decide between an informational website and an interactive web application.",
            sections: [
              [
                "Start with the job",
                "A website mainly tells people who you are and how to reach you. A web app lets people log in, enter data and get results back.",
              ],
              [
                "Ask who changes the content",
                "If your team edits pages occasionally, a website with a content system is enough. If customers create or manage records, you need an app.",
              ],
              [
                "You can grow into it",
                "Many businesses launch a fast website first and add app features later. Choose a foundation such as Next.js that supports both.",
              ],
            ],
          },
          {
            slug: "technical-seo-checklist",
            title: "A technical SEO checklist for a new business website",
            category: "SEO",
            tags: ["seo", "performance", "structured data"],
            author: l,
            published: "2026-10-20",
            updated: "2026-10-20",
            image: "/images/blog-seo.svg",
            excerpt:
              "The basics that help search engines crawl, understand and rank a new site.",
            sections: [
              [
                "Make pages crawlable",
                "Use clean URLs, a sitemap and a robots file. Make sure key content is in the initial HTML.",
              ],
              [
                "Describe every page",
                "Give each page a unique title, meta description and a single clear H1.",
              ],
              [
                "Measure speed",
                "Check Core Web Vitals with Lighthouse and PageSpeed Insights, then fix the largest images and scripts first.",
              ],
            ],
          },
          {
            slug: "native-vs-cross-platform",
            title: "Native or cross-platform: choosing your mobile approach",
            category: "Mobile Apps",
            tags: ["mobile", "react native", "flutter"],
            author: l,
            published: "2026-10-28",
            updated: "2026-10-28",
            image: "/images/blog-mobile.svg",
            excerpt:
              "How to weigh cost, speed and device features when planning a mobile app.",
            sections: [
              [
                "When cross-platform fits",
                "React Native and Flutter let one team ship to Android and iOS, which usually lowers cost and speeds up launch.",
              ],
              [
                "When native fits",
                "Apps that depend heavily on device hardware or platform-specific behaviour can justify separate native builds.",
              ],
              [
                "Decide with your users",
                "Check which devices your customers use before choosing. Start with one platform if the audience is clear.",
              ],
            ],
          },
          {
            slug: "signs-ready-for-automation",
            title: "Four signs your business is ready for automation",
            category: "Business Automation",
            tags: ["automation", "workflow"],
            author: l,
            published: "2026-11-03",
            updated: "2026-11-03",
            image: "/images/blog-automation.svg",
            excerpt:
              "Repeated manual tasks are the best place to start saving time.",
            sections: [
              [
                "Work is copied between tools",
                "If staff retype the same data into several systems, an integration can remove that step.",
              ],
              [
                "Reports take hours",
                "Scheduled reports pull the numbers for you and arrive on time.",
              ],
              [
                "Errors repeat",
                "Rules-based automation applies the same checks every time.",
              ],
            ],
          },
        ],
        d = (e) => e.sections.flat().join(" ").split(/\s+/).length,
        u = (e) => Math.max(1, Math.round(d(e) / 200)),
        h = ["All", ...new Set(c.map((e) => e.category))],
        m = (e) =>
          new Date(e).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
      function p(e) {
        let { b: t } = e;
        return (0, s.jsx)("article", {
          className:
            "group h-full overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-soft",
          children: (0, s.jsxs)(o.default, {
            href: "/blog/".concat(t.slug),
            className: "block h-full",
            children: [
              (0, s.jsx)(n.default, {
                src: t.image,
                alt: "",
                width: 640,
                height: 480,
                className: "h-auto w-full",
              }),
              (0, s.jsxs)("div", {
                className: "p-5",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-xs font-semibold text-brand",
                    children: t.category,
                  }),
                  (0, s.jsx)("h3", {
                    className: "mt-1 text-lg font-bold group-hover:text-brand",
                    children: t.title,
                  }),
                  (0, s.jsx)("p", {
                    className: "mt-2 text-sm text-ink-soft",
                    children: t.excerpt,
                  }),
                  (0, s.jsxs)("p", {
                    className: "mt-3 text-xs text-ink-soft",
                    children: [
                      t.author.name,
                      " \xb7 ",
                      m(t.published),
                      " \xb7 ",
                      u(t),
                      " min read",
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function b() {
        let [e, t] = (0, i.useState)(""),
          [a, n] = (0, i.useState)("All"),
          o = c.filter(
            (t) =>
              ("All" === a || t.category === a) &&
              ""
                .concat(t.title, " ")
                .concat(t.excerpt, " ")
                .concat(t.tags.join(" "))
                .toLowerCase()
                .includes(e.toLowerCase()),
          );
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)("div", {
              className:
                "mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
              children: [
                (0, s.jsx)("div", {
                  role: "group",
                  "aria-label": "Filter by category",
                  className: "flex flex-wrap gap-2",
                  children: h.map((e) =>
                    (0, s.jsx)(
                      "button",
                      {
                        onClick: () => n(e),
                        "aria-pressed": a === e,
                        className:
                          "min-h-11 rounded-full border px-4 text-sm font-semibold ".concat(
                            a === e
                              ? "border-brand bg-brand text-white"
                              : "border-line bg-white hover:border-brand",
                          ),
                        children: e,
                      },
                      e,
                    ),
                  ),
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      htmlFor: "bs",
                      className: "sr-only",
                      children: "Search articles",
                    }),
                    (0, s.jsx)("input", {
                      id: "bs",
                      type: "search",
                      value: e,
                      onChange: (e) => t(e.target.value),
                      placeholder: "Search articles",
                      className:
                        "min-h-11 w-full rounded-full border border-line bg-white px-5 text-sm md:w-72",
                    }),
                  ],
                }),
              ],
            }),
            o.length
              ? (0, s.jsx)("ul", {
                  className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                  children: o.map((e, t) =>
                    (0, s.jsx)(
                      "li",
                      {
                        className: "list-none",
                        children: (0, s.jsx)(r.default, {
                          delay: (t % 3) * 0.08,
                          children: (0, s.jsx)(p, { b: e }),
                        }),
                      },
                      e.slug,
                    ),
                  ),
                })
              : (0, s.jsx)("p", {
                  className: "py-10 text-center text-ink-soft",
                  children:
                    "No articles match. Clear the search or pick another category.",
                }),
          ],
        });
      }
    },
    84859: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return r;
        },
      });
      var s = a(57437),
        i = a(2265);
      function r() {
        let [e, t] = (0, i.useState)({ state: "idle", msg: "" });
        async function a(e) {
          e.preventDefault();
          let a = new FormData(e.target);
          t({ state: "loading", msg: "" });
          try {
            let e = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  email: a.get("email"),
                  website: a.get("website"),
                }),
              }),
              s = await e.json();
            t(
              e.ok
                ? { state: "ok", msg: "You’re subscribed." }
                : {
                    state: "error",
                    msg: s.error || "Something went wrong. Try again.",
                  },
            );
          } catch (e) {
            t({ state: "error", msg: "Network error. Try again." });
          }
        }
        return (0, s.jsxs)("form", {
          onSubmit: a,
          className: "mx-auto flex max-w-md flex-col gap-3 sm:flex-row",
          noValidate: !0,
          children: [
            (0, s.jsx)("label", {
              htmlFor: "nl-email",
              className: "sr-only",
              children: "Email address",
            }),
            (0, s.jsx)("input", {
              id: "nl-email",
              name: "email",
              type: "email",
              required: !0,
              placeholder: "you@company.com",
              className:
                "min-h-11 flex-1 rounded-full border border-line bg-white px-5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand",
            }),
            (0, s.jsx)("input", {
              name: "website",
              tabIndex: -1,
              autoComplete: "off",
              "aria-hidden": "true",
              className: "hidden",
            }),
            (0, s.jsx)("button", {
              disabled: "loading" === e.state,
              className:
                "min-h-11 rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60",
              children: "loading" === e.state ? "Subscribing…" : "Subscribe",
            }),
            (0, s.jsx)("p", {
              role: "status",
              className: "text-sm sm:basis-full ".concat(
                "error" === e.state ? "text-red-700" : "text-brand-dark",
              ),
              children: e.msg,
            }),
          ],
        });
      }
    },
    18122: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return r;
        },
      });
      var s = a(57437),
        i = a(38567);
      function r(e) {
        let { children: t, delay: a = 0, className: r = "", blur: n = !1 } = e;
        return (0, s.jsx)(i.E.div, {
          className: r,
          initial: { opacity: 0, y: 24, ...(n && { filter: "blur(6px)" }) },
          whileInView: { opacity: 1, y: 0, ...(n && { filter: "blur(0px)" }) },
          viewport: { once: !0, margin: "-60px" },
          transition: { duration: 0.6, delay: a, ease: [0.22, 1, 0.36, 1] },
          children: t,
        });
      }
    },
    33145: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return i.a;
        },
      });
      var s = a(48461),
        i = a.n(s);
    },
    27648: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return i.a;
        },
      });
      var s = a(72972),
        i = a.n(s);
    },
    48461: function (e, t, a) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return o;
          },
        }));
      let s = a(47043),
        i = a(55346),
        r = a(65878),
        n = s._(a(5084));
      function o(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: n.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
        return { props: t };
      }
      let l = r.Image;
    },
  },
  function (e) {
    (e.O(0, [972, 878, 567, 971, 117, 744], function () {
      return e((e.s = 27889));
    }),
      (_N_E = e.O()));
  },
]);
