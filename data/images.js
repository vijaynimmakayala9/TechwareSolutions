// Central list of photos (Unsplash). Swap any ID here and every page updates.
const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const images = {
  hero: u("photo-1522071820081-009f0129c71c"), // team collaborating around laptops
  about: u("photo-1553877522-43269d4ea984"), // office team at work
  webDevelopment: u("photo-1498050108023-c5249f4df085"), // developer laptop with code
  appDevelopment: u("photo-1551650975-87deedd944c3"), // mobile app on phone
  digitalMarketing: u("photo-1460925895917-afdab827c52f"), // analytics on laptop
  projectEcommerce: u("photo-1556742049-0cfed4f6a45d"), // online payment / store
  projectApp: u("photo-1512941937669-90a1b58e7e9c"), // phone app in hand
  projectWebsite: u("photo-1547658719-da2b51169166"), // website design / wireframes
  projectMarketing: u("photo-1551288049-bebda4e38f71"), // analytics dashboard
  blogWeb: u("photo-1467232004584-a241de8bcf5d"), // web design layout
  blogSeo: u("photo-1432888498266-38ffec3eaf0a"), // search / site planning
  blogMobile: u("photo-1511707171634-5f897ff02aa9"), // smartphone
  blogAutomation: u("photo-1518186285589-2f7649de83e0"), // automation / tech
};
