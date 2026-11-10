// Local content, shaped like a CMS entry so it can later move to Sanity or Strapi.
const author = { name: "TechWare Team", role: "Editorial" };
export const blogs = [
  {
    slug: "website-or-web-app",
    title: "Website or web app: which does your business need?",
    category: "Web Development",
    tags: ["websites", "web apps", "planning"],
    author,
    published: "2026-10-12",
    updated: "2026-10-12",
    image: "/images/blog-web.svg",
    featured: true,
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
    author,
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
    author,
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
    author,
    published: "2026-11-03",
    updated: "2026-11-03",
    image: "/images/blog-automation.svg",
    excerpt: "Repeated manual tasks are the best place to start saving time.",
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
];
export const wordCount = (b) => b.sections.flat().join(" ").split(/\s+/).length;
export const readingTime = (b) => Math.max(1, Math.round(wordCount(b) / 200));
export const getBlog = (slug) => blogs.find((b) => b.slug === slug);
export const blogCategories = ["All", ...new Set(blogs.map((b) => b.category))];
export const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
