(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [469],
  {
    94340: function (e, t, n) {
      (Promise.resolve().then(n.bind(n, 56663)),
        Promise.resolve().then(n.t.bind(n, 72972, 23)));
    },
    18122: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return r;
        },
      });
      var s = n(57437),
        i = n(38567);
      function r(e) {
        let { children: t, delay: n = 0, className: r = "", blur: a = !1 } = e;
        return (0, s.jsx)(i.E.div, {
          className: r,
          initial: { opacity: 0, y: 24, ...(a && { filter: "blur(6px)" }) },
          whileInView: { opacity: 1, y: 0, ...(a && { filter: "blur(0px)" }) },
          viewport: { once: !0, margin: "-60px" },
          transition: { duration: 0.6, delay: n, ease: [0.22, 1, 0.36, 1] },
          children: t,
        });
      }
    },
    56663: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return l;
        },
      });
      var s = n(57437),
        i = n(27648),
        r = n(9971),
        a = n(30401),
        o = n(18122);
      let c = [
        {
          icon: "Globe",
          title: "Website Development",
          href: "/services/web-development",
          desc: "Fast, secure, search-ready websites for businesses of any size.",
          features: [
            "Business and corporate sites",
            "Landing pages",
            "API integration",
            "Ongoing maintenance",
          ],
          tech: ["React", "Next.js", "Tailwind CSS"],
          benefits:
            "A site that loads quickly and converts visitors into enquiries.",
        },
        {
          icon: "Smartphone",
          title: "Mobile App Development",
          href: "/services/app-development",
          desc: "Android, iOS and cross-platform apps with solid backends.",
          features: [
            "Android and iOS",
            "Cross-platform builds",
            "Backend and API work",
            "App maintenance",
          ],
          tech: ["React Native", "Flutter", "Node.js"],
          benefits: "One product reaching customers on every device.",
        },
        {
          icon: "Code2",
          title: "Custom Software Development",
          href: "/contact",
          desc: "Software built around your processes, not the other way round.",
          features: [
            "Internal tools",
            "Dashboards",
            "Integrations",
            "Legacy modernisation",
          ],
          tech: ["Node.js", "PostgreSQL", "React"],
          benefits: "Tools that fit how your team really works.",
        },
        {
          icon: "Megaphone",
          title: "Digital Marketing",
          href: "/services/digital-marketing",
          desc: "Campaigns that bring in measurable leads.",
          features: [
            "Social media",
            "Google Ads and PPC",
            "Content marketing",
            "Analytics and reporting",
          ],
          tech: ["GA4", "Google Ads", "Meta Ads"],
          benefits: "Clear reporting on what drives enquiries.",
        },
        {
          icon: "PenTool",
          title: "UI/UX Design",
          href: "/contact",
          desc: "Interfaces that are clear, accessible and on brand.",
          features: [
            "User research",
            "Wireframes",
            "Prototypes",
            "Design systems",
          ],
          tech: ["Figma"],
          benefits: "Fewer drop-offs and a more consistent brand.",
        },
        {
          icon: "ShoppingCart",
          title: "E-commerce Development",
          href: "/contact",
          desc: "Online stores that are easy to manage and to buy from.",
          features: [
            "Product catalogues",
            "Secure checkout",
            "Payment integration",
            "Inventory tools",
          ],
          tech: ["Next.js", "Stripe", "Node.js"],
          benefits: "A store built for conversion and growth.",
        },
        {
          icon: "Search",
          title: "SEO Services",
          href: "/contact",
          desc: "Technical and on-page SEO for lasting visibility.",
          features: [
            "Technical audits",
            "On-page optimisation",
            "Structured data",
            "Core Web Vitals",
          ],
          tech: ["Search Console", "Lighthouse"],
          benefits: "Steady organic traffic from people already searching.",
        },
        {
          icon: "Cloud",
          title: "Cloud Solutions",
          href: "/contact",
          desc: "Reliable hosting, deployment and infrastructure.",
          features: [
            "Cloud migration",
            "CI/CD pipelines",
            "Monitoring",
            "Backups",
          ],
          tech: ["AWS", "Google Cloud", "Vercel"],
          benefits: "Less downtime and predictable running costs.",
        },
        {
          icon: "Lightbulb",
          title: "IT Consulting",
          href: "/contact",
          desc: "Independent advice before you commit budget.",
          features: [
            "Technology roadmaps",
            "Architecture reviews",
            "Vendor selection",
            "Security checks",
          ],
          tech: ["Cloud", "Web", "Mobile"],
          benefits: "Confident decisions backed by clear reasoning.",
        },
        {
          icon: "Workflow",
          title: "Business Automation",
          href: "/contact",
          desc: "Remove repetitive manual work from your team’s day.",
          features: [
            "Workflow automation",
            "Report generation",
            "System integrations",
            "Notifications",
          ],
          tech: ["Node.js", "APIs"],
          benefits: "More time for work that needs people.",
        },
      ];
      function l() {
        return (0, s.jsx)("ul", {
          className: "grid gap-6 md:grid-cols-2",
          children: c.map((e, t) => {
            let n = r[e.icon];
            return (0, s.jsx)(
              o.default,
              {
                delay: (t % 2) * 0.06,
                children: (0, s.jsxs)("li", {
                  className:
                    "group h-full list-none rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-soft",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand-dark transition group-hover:bg-brand group-hover:text-white",
                      children: (0, s.jsx)(n, {
                        size: 24,
                        "aria-hidden": "true",
                      }),
                    }),
                    (0, s.jsx)("h2", {
                      className: "mt-4 text-xl font-bold",
                      children: e.title,
                    }),
                    (0, s.jsx)("p", {
                      className: "mt-2 text-ink-soft",
                      children: e.desc,
                    }),
                    (0, s.jsx)("h3", {
                      className: "mt-5 text-sm font-bold text-brand-dark",
                      children: "What we deliver",
                    }),
                    (0, s.jsx)("ul", {
                      className:
                        "mt-2 grid gap-1 text-sm text-ink-soft sm:grid-cols-2",
                      children: e.features.map((e) =>
                        (0, s.jsxs)(
                          "li",
                          {
                            className: "flex gap-2",
                            children: [
                              (0, s.jsx)(a.Z, {
                                size: 16,
                                className: "mt-0.5 shrink-0 text-brand",
                                "aria-hidden": "true",
                              }),
                              e,
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                    (0, s.jsxs)("p", {
                      className: "mt-5 text-sm",
                      children: [
                        (0, s.jsx)("span", {
                          className: "font-bold text-brand-dark",
                          children: "Benefit: ",
                        }),
                        e.benefits,
                      ],
                    }),
                    (0, s.jsx)("ul", {
                      className: "mt-4 flex flex-wrap gap-2",
                      "aria-label": "Technologies",
                      children: e.tech.map((e) =>
                        (0, s.jsx)(
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
                    (0, s.jsxs)(i.default, {
                      href: e.href,
                      className:
                        "mt-6 inline-block font-semibold text-brand hover:text-brand-dark",
                      children: ["Learn more about ", e.title.toLowerCase()],
                    }),
                  ],
                }),
              },
              e.title,
            );
          }),
        });
      }
    },
  },
  function (e) {
    (e.O(0, [279, 972, 567, 646, 971, 117, 744], function () {
      return e((e.s = 94340));
    }),
      (_N_E = e.O()));
  },
]);
