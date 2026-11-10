import { Manrope } from "next/font/google";
import "./globals.css";
import site from "@/config/site";
import Providers from "@/components/shared/Providers";
import Navbar from "@/components/layout/Navbar";
import ScrollProgress from "@/components/shared/ScrollProgress";
import Footer from "@/components/layout/Footer";

const font = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "TechWare Solutions | Web, App & Software Development",
    template: "%s | TechWare Solutions",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#org`,
      name: site.name,
      url: site.url,
      email: site.email,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+917032871605",
          email: site.email,
          contactType: "customer support",
        },
      ],
      founder: { "@type": "Person", name: site.ceo.name },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#org` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-brand-bg text-ink antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
