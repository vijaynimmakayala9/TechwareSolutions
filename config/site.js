// Single source of truth for company details. Add real values only.
const site = {
  name: "TechWare Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com", // set NEXT_PUBLIC_SITE_URL in production
  description:
    "TechWare Solutions builds websites, mobile apps, custom software and digital marketing for growing businesses.",
  email: "Help@techwaresolutions.com",
  phones: [
    { display: "+91 70328 71605", href: "tel:+917032871605" },
    { display: "+91 78428 13291", href: "tel:+917842813291" },
  ],
  ceo: {
    name: "Draksharam Balaji",
    title: "Chief Executive Officer",
    education: "Master's, Campbellsville University",
  },
  address: null, // add a real address to show it on the Contact page
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7611.056722382428!2d78.3920053!3d17.4822739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919ef6c7c09d%3A0xe03175b81113bc71!2sNexus%20Hyderabad%20Mall!5e0!3m2!1sen!2sin!4v1794307184080!5m2!1sen!2sin",
  hours: null,
  social: {},
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Website Development", href: "/services/web-development" },
        { label: "Mobile App Development", href: "/services/app-development" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "All Services", href: "/services" },
      ],
    },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
};
export default site;
