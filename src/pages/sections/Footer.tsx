import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Index");

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-zinc-500 dark:text-zinc-400">
        {t("footer.rights")}
      </p>
    </footer>
  );
};

export default Footer;
