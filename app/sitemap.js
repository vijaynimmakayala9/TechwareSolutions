import site from "@/config/site";
import { blogs } from "@/data/blogs";
const paths = [
  "",
  "/about",
  "/services",
  "/services/web-development",
  "/services/app-development",
  "/services/digital-marketing",
  "/projects",
  "/blog",
  "/contact",
];
export default function sitemap() {
  const posts = blogs.map((b) => ({
    url: `${site.url}/blog/${b.slug}`,
    lastModified: new Date(b.updated),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [
    ...paths.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: p === "" ? 1 : 0.7,
    })),
    ...posts,
  ];
}
