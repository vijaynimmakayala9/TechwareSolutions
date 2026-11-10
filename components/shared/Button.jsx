import Link from "next/link";
const styles = {
  primary: "bg-brand text-white hover:bg-brand-dark shadow-soft",
  secondary: "bg-white text-brand-dark border border-line hover:border-brand",
};
export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}) {
  const cls = `inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${styles[variant]} ${className}`;
  return href ? (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  ) : (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
