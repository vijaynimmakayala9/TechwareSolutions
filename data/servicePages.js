import { images } from "@/data/images";
// Content for the three service detail pages. Edit freely.
const o = (a) => a.map(([title, desc]) => ({ title, desc }));
export const servicePages = {
  "web-development": {
    name: "Website Development",
    path: "/services/web-development",
    image: images.webDevelopment,
    imageAlt: "Developer writing website code on a laptop",
    seoTitle: "Website Development Services",
    seoDesc:
      "Custom website development with React.js and Next.js: business sites, corporate sites, landing pages, e-commerce, API integration and maintenance.",
    h1: "Website development built for speed, search and sales",
    intro:
      "We design and build websites that load fast, rank well and make it easy for visitors to contact you.",
    offerings: o([
      [
        "Custom website development",
        "Tailored sites built around your goals and brand.",
      ],
      [
        "Business websites",
        "Clear, credible sites for small and growing companies.",
      ],
      [
        "Corporate websites",
        "Structured, multi-page sites for larger organisations.",
      ],
      [
        "Landing page development",
        "Focused pages for campaigns and lead capture.",
      ],
      [
        "React.js development",
        "Interactive front ends with reusable components.",
      ],
      [
        "Next.js development",
        "Server-rendered, SEO-friendly sites with strong performance.",
      ],
      ["E-commerce websites", "Online stores with secure checkout."],
      ["API integration", "Connect payments, CRMs, email and other services."],
      [
        "Website maintenance",
        "Updates, backups, security and fixes after launch.",
      ],
    ]),
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Vercel"],
    faqs: [
      [
        "Will my website be optimised for search engines?",
        "Yes. Technical SEO, metadata and structured data are part of every build.",
      ],
      [
        "Can you redesign my existing website?",
        "Yes. We review what you have and keep what works.",
      ],
      [
        "Do you maintain the site after launch?",
        "Yes. Maintenance plans cover updates, backups and fixes.",
      ],
    ],
  },
  "app-development": {
    name: "Mobile App Development",
    path: "/services/app-development",
    image: images.appDevelopment,
    imageAlt: "Person using a mobile app on a smartphone",
    seoTitle: "Mobile App Development Services",
    seoDesc:
      "Android, iOS and cross-platform mobile app development with React Native and Flutter, including UI/UX design, backend integration and app maintenance.",
    h1: "Mobile apps your customers will actually use",
    intro:
      "From idea to app store, we build reliable mobile apps with clean design and solid backends.",
    offerings: o([
      [
        "Android app development",
        "Native and cross-platform apps for Android devices.",
      ],
      [
        "iOS app development",
        "Apps built to Apple’s design and review standards.",
      ],
      [
        "Cross-platform applications",
        "One codebase for both platforms to save time and cost.",
      ],
      ["React Native", "JavaScript-based apps with near-native performance."],
      ["Flutter", "Fast, consistent interfaces from a single codebase."],
      ["UI/UX design", "Clear flows and accessible screens."],
      ["Backend integration", "Accounts, data storage and notifications."],
      ["API development", "Secure APIs that power your app and web products."],
      ["App maintenance", "OS updates, bug fixes and new features."],
    ]),
    tech: ["React Native", "Flutter", "Node.js", "Firebase", "PostgreSQL"],
    faqs: [
      [
        "Should I build for Android, iOS or both?",
        "We help you decide based on your audience and budget. Cross-platform is often the efficient start.",
      ],
      [
        "Do you handle app store submission?",
        "Yes. We prepare and submit the app, and support you through review.",
      ],
      [
        "Can you add features to an existing app?",
        "Yes, after a short code review.",
      ],
    ],
  },
  "digital-marketing": {
    name: "Digital Marketing",
    path: "/services/digital-marketing",
    image: images.digitalMarketing,
    imageAlt: "Marketing analytics charts on a laptop screen",
    seoTitle: "Digital Marketing Services",
    seoDesc:
      "Digital marketing services including SEO, social media, Google Ads, PPC, content marketing, branding and analytics reporting for growing businesses.",
    h1: "Digital marketing focused on measurable enquiries",
    intro:
      "We plan and run campaigns across search, social and paid channels, and report on what they deliver.",
    offerings: o([
      [
        "Search engine optimisation",
        "Technical and on-page work to grow organic traffic.",
      ],
      [
        "Social media marketing",
        "Consistent content and community management.",
      ],
      ["Google Ads", "Search and display campaigns aimed at qualified leads."],
      ["PPC advertising", "Paid campaigns with controlled budgets."],
      [
        "Content marketing",
        "Articles and pages that answer what customers ask.",
      ],
      ["Performance marketing", "Campaigns optimised toward conversions."],
      ["Branding", "Consistent identity across every channel."],
      ["Graphic design", "Social, ad and print creative."],
      ["Analytics and reporting", "Clear monthly reports in plain language."],
      ["Marketing strategy", "A prioritised plan matched to your goals."],
    ]),
    tech: ["GA4", "Search Console", "Google Ads", "Meta Ads", "Figma"],
    faqs: [
      [
        "How soon will I see results?",
        "Paid campaigns can produce traffic quickly. SEO usually takes months. We set expectations upfront.",
      ],
      [
        "Do you guarantee rankings?",
        "No. Nobody can honestly guarantee rankings. We commit to the work and to transparent reporting.",
      ],
      [
        "How will I know what is working?",
        "You receive regular reports tied to your goals.",
      ],
    ],
  },
};
