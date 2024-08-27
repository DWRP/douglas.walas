import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("Index");

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-zinc-500 dark:text-zinc-400">{t("footer.rights")}</p>
      {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="#about"
        >
          {t("nav.about")}
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="#projects"
        >
          {t("nav.projects")}
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4"
          href="#contact"
        >
          {t("nav.contact")}
        </Link>
      </nav> */}
    </footer>
  );
};

export default Footer;