export const SERVICES = [
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
];
export const BUDGETS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
  "Not sure yet",
];
export const clean = (v, max) =>
  String(v ?? "")
    .replace(/[\u0000-\u001f\u007f<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
export function validate(d) {
  const e = {};
  if (d.name.length < 2) e.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email))
    e.email = "Enter a valid email address.";
  if (d.phone && !/^\+?[\d\s()-]{7,20}$/.test(d.phone))
    e.phone = "Enter a valid phone number.";
  if (!SERVICES.includes(d.service)) e.service = "Choose a service.";
  if (d.budget && !BUDGETS.includes(d.budget))
    e.budget = "Choose a budget range.";
  if (d.message.length < 20)
    e.message = "Describe your project in at least 20 characters.";
  return e;
}
