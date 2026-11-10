import ServicePage from "@/components/services/ServicePage";
import { servicePages } from "@/data/servicePages";
const d = servicePages["web-development"];
export const metadata = {
  title: d.seoTitle,
  description: d.seoDesc,
  alternates: { canonical: d.path },
  openGraph: {
    title: d.seoTitle + " | TechWare Solutions",
    description: d.seoDesc,
    url: d.path,
    images: [d.image],
  },
};
export default function Page() {
  return <ServicePage d={d} />;
}
