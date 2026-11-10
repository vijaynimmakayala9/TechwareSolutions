(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    86991: function (e, t, r) {
      (Promise.resolve().then(r.bind(r, 58683)),
        Promise.resolve().then(r.bind(r, 88895)),
        Promise.resolve().then(r.t.bind(r, 72972, 23)));
    },
    58683: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return o;
        },
      });
      var n = r(57437),
        s = r(2265);
      let a = [
          "Website Development",
          "Mobile App Development",
          "Custom Software",
          "Digital Marketing",
          "UI/UX Design",
          "E-commerce",
          "SEO",
          "Cloud Solutions",
          "IT Consulting",
          "Business Automation",
          "Other",
        ],
        i = [
          "Under $1,000",
          "$1,000 – $5,000",
          "$5,000 – $15,000",
          "$15,000+",
          "Not sure yet",
        ],
        l = (e, t) =>
          String(null != e ? e : "")
            .replace(/[\u0000-\u001f\u007f<>]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, t);
      function o() {
        let [e, t] = (0, s.useState)("idle"),
          [r, o] = (0, s.useState)({}),
          [c, d] = (0, s.useState)(""),
          u = (e) => {
            let { id: t, label: r, req: s, err: a, children: i } = e;
            return (0, n.jsxs)("div", {
              children: [
                (0, n.jsxs)("label", {
                  htmlFor: t,
                  className: "text-sm font-semibold",
                  children: [
                    r,
                    s &&
                      (0, n.jsx)("span", {
                        "aria-hidden": "true",
                        children: " *",
                      }),
                  ],
                }),
                i,
                a &&
                  (0, n.jsx)("p", {
                    id: "".concat(t, "-e"),
                    className: "mt-1 text-sm text-red-700",
                    children: a,
                  }),
              ],
            });
          },
          m = (e) => ({
            id: e,
            name: e,
            "aria-invalid": !!r[e],
            "aria-describedby": r[e] ? "".concat(e, "-e") : void 0,
            className: ""
              .concat(
                "mt-1 min-h-11 w-full rounded-xl border bg-white px-4 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand",
                " ",
              )
              .concat(r[e] ? "border-red-600" : "border-line"),
          });
        async function h(e) {
          e.preventDefault();
          let r = new FormData(e.target),
            n = Object.fromEntries(
              [
                "name",
                "email",
                "phone",
                "company",
                "service",
                "budget",
                "message",
              ].map((e) => [e, l(r.get(e), "message" === e ? 3e3 : 254)]),
            ),
            s = (function (e) {
              let t = {};
              return (
                e.name.length < 2 && (t.name = "Enter your full name."),
                /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e.email) ||
                  (t.email = "Enter a valid email address."),
                e.phone &&
                  !/^\+?[\d\s()-]{7,20}$/.test(e.phone) &&
                  (t.phone = "Enter a valid phone number."),
                a.includes(e.service) || (t.service = "Choose a service."),
                e.budget &&
                  !i.includes(e.budget) &&
                  (t.budget = "Choose a budget range."),
                e.message.length < 20 &&
                  (t.message =
                    "Describe your project in at least 20 characters."),
                t
              );
            })(n);
          if ((o(s), Object.keys(s).length)) {
            (t("idle"), d(""));
            return;
          }
          (t("loading"), d(""));
          try {
            let s = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...n, website: r.get("website") }),
              }),
              a = await s.json().catch(() => ({}));
            s.ok
              ? (t("success"), e.target.reset())
              : (o(a.errors || {}),
                t("error"),
                d(a.error || "Something went wrong."));
          } catch (e) {
            (t("error"),
              d("Network error. Check your connection and try again."));
          }
        }
        return "success" === e
          ? (0, n.jsxs)("div", {
              role: "status",
              className: "rounded-3xl border border-brand bg-brand-light p-8",
              children: [
                (0, n.jsx)("h3", {
                  className: "text-xl font-bold text-brand-dark",
                  children: "Message sent",
                }),
                (0, n.jsx)("p", {
                  className: "mt-2 text-sm",
                  children:
                    "Thanks for getting in touch. We’ll reply to your email soon.",
                }),
                (0, n.jsx)("button", {
                  onClick: () => t("idle"),
                  className:
                    "mt-4 text-sm font-semibold text-brand-dark underline",
                  children: "Send another message",
                }),
              ],
            })
          : (0, n.jsxs)("form", {
              onSubmit: h,
              noValidate: !0,
              className:
                "grid gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft sm:grid-cols-2 sm:p-8",
              children: [
                (0, n.jsx)(u, {
                  id: "name",
                  label: "Full name",
                  req: !0,
                  err: r.name,
                  children: (0, n.jsx)("input", {
                    ...m("name"),
                    autoComplete: "name",
                    required: !0,
                  }),
                }),
                (0, n.jsx)(u, {
                  id: "email",
                  label: "Email address",
                  req: !0,
                  err: r.email,
                  children: (0, n.jsx)("input", {
                    ...m("email"),
                    type: "email",
                    autoComplete: "email",
                    required: !0,
                  }),
                }),
                (0, n.jsx)(u, {
                  id: "phone",
                  label: "Phone number",
                  err: r.phone,
                  children: (0, n.jsx)("input", {
                    ...m("phone"),
                    type: "tel",
                    autoComplete: "tel",
                  }),
                }),
                (0, n.jsx)(u, {
                  id: "company",
                  label: "Company name",
                  children: (0, n.jsx)("input", {
                    ...m("company"),
                    autoComplete: "organization",
                  }),
                }),
                (0, n.jsx)(u, {
                  id: "service",
                  label: "Required service",
                  req: !0,
                  err: r.service,
                  children: (0, n.jsxs)("select", {
                    ...m("service"),
                    defaultValue: "",
                    children: [
                      (0, n.jsx)("option", {
                        value: "",
                        disabled: !0,
                        children: "Select a service",
                      }),
                      a.map((e) => (0, n.jsx)("option", { children: e }, e)),
                    ],
                  }),
                }),
                (0, n.jsx)(u, {
                  id: "budget",
                  label: "Project budget",
                  err: r.budget,
                  children: (0, n.jsxs)("select", {
                    ...m("budget"),
                    defaultValue: "",
                    children: [
                      (0, n.jsx)("option", {
                        value: "",
                        children: "Select a range",
                      }),
                      i.map((e) => (0, n.jsx)("option", { children: e }, e)),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className: "sm:col-span-2",
                  children: (0, n.jsx)(u, {
                    id: "message",
                    label: "Project description",
                    req: !0,
                    err: r.message,
                    children: (0, n.jsx)("textarea", {
                      ...m("message"),
                      rows: 5,
                      className: "".concat(m("message").className, " py-3"),
                      required: !0,
                    }),
                  }),
                }),
                (0, n.jsx)("input", {
                  name: "website",
                  tabIndex: -1,
                  autoComplete: "off",
                  "aria-hidden": "true",
                  className: "hidden",
                }),
                (0, n.jsxs)("div", {
                  className: "sm:col-span-2",
                  children: [
                    "error" === e &&
                      (0, n.jsx)("p", {
                        role: "alert",
                        className: "mb-3 text-sm text-red-700",
                        children: c,
                      }),
                    (0, n.jsx)("button", {
                      disabled: "loading" === e,
                      className:
                        "min-h-11 rounded-full bg-brand px-8 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60",
                      children: "loading" === e ? "Sending…" : "Send message",
                    }),
                  ],
                }),
              ],
            });
      }
    },
    88895: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i;
        },
      });
      var n = r(57437),
        s = r(2265),
        a = r(40875);
      function i(e) {
        let { items: t } = e,
          [r, i] = (0, s.useState)(0);
        return (0, n.jsx)("div", {
          className: "mx-auto max-w-2xl space-y-3",
          children: t.map((e, t) => {
            let [s, l] = e;
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
                      onClick: () => i(r === t ? -1 : t),
                      children: [
                        s,
                        (0, n.jsx)(a.Z, {
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
                      children: l,
                    }),
                ],
              },
              s,
            );
          }),
        });
      }
    },
    20135: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(2265),
        s = {
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
        a = r(7656);
      let i = (0, n.forwardRef)((e, t) => {
        let {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: o,
          className: c = "",
          children: d,
          iconNode: u,
          ...m
        } = e;
        return (0, n.createElement)(
          "svg",
          {
            ref: t,
            ...s,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: o ? (24 * Number(l)) / Number(i) : l,
            className: (0, a.z)("lucide", c),
            ...m,
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
          return i;
        },
      });
      var n = r(2265),
        s = r(7656),
        a = r(20135);
      let i = (e, t) => {
        let r = (0, n.forwardRef)((r, i) => {
          let { className: l, ...o } = r;
          return (0, n.createElement)(a.Z, {
            ref: i,
            iconNode: t,
            className: (0, s.z)("lucide-".concat((0, s.m)(e)), l),
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
    7656: function (e, t, r) {
      "use strict";
      r.d(t, {
        m: function () {
          return n;
        },
        z: function () {
          return s;
        },
      });
      let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t.filter((e, t, r) => !!e && r.indexOf(e) === t).join(" ");
        };
    },
  },
  function (e) {
    (e.O(0, [972, 971, 117, 744], function () {
      return e((e.s = 86991));
    }),
      (_N_E = e.O()));
  },
]);
