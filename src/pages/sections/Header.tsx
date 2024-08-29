import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, locales } from "@/locales";
import { Moon, Sun, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useAppStore } from "@/store/app";

const Header = ({
  isDarkMode,
  setIsDarkMode,
  changeLanguage,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
  changeLanguage: (lang: Locale) => void;
}) => {
  const t = useTranslations("Index");
  const { lang, activeMenu, setActiveMenu } = useAppStore();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const checkActiveLink = (link: string) =>
    activeMenu === link ? "text-gray-500" : "";

  const updateActiveLink = (link?: string) => setActiveMenu(link || "");

  return (
    <header className="fixed w-full bg-background px-4 lg:px-6 h-14 flex items-center justify-between border-b">
      <Link
        className="flex items-center"
        href="#home"
        onClick={() => updateActiveLink()}
      >
        <Image src="/dwrp.svg" alt="logotype" width={40} height={40} />
        <span className="font-bold ml-2">Douglas Pardim</span>
      </Link>

      <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
        <Link
          className={`text-sm font-medium hover:underline underline-offset-4 ${checkActiveLink(
            "about"
          )}`}
          href="#about"
          onClick={() => updateActiveLink("about")}
        >
          {t("nav.about")}
        </Link>
        <Link
          className={`text-sm font-medium hover:underline underline-offset-4 ${checkActiveLink(
            "skills"
          )}`}
          href="#skills"
          onClick={() => updateActiveLink("skills")}
        >
          {t("nav.skills")}
        </Link>
        <Link
          className={`text-sm font-medium hover:underline underline-offset-4 ${checkActiveLink(
            "projects"
          )}`}
          href="#projects"
          onClick={() => updateActiveLink("projects")}
        >
          {t("nav.projects")}
        </Link>
        <Link
          className={`text-sm font-medium hover:underline underline-offset-4 ${checkActiveLink(
            "contact"
          )}`}
          href="#contact"
          onClick={() => updateActiveLink("contact")}
        >
          {t("nav.contact")}
        </Link>
      </nav>

      <div className="flex items-center gap-4 ml-auto md:ml-4">
        <Select value={lang} onValueChange={changeLanguage}>
          <SelectTrigger className="w-[100px] md:w-[120px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            {locales.map((locale, index) => (
              <SelectItem value={locale} key={`${locale}-${index}`}>
                {t(`nav.locales.${locale}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDarkMode(!isDarkMode)}
          aria-label={
            isDarkMode ? t("switchToLightMode") : t("switchToDarkMode")
          }
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="flex items-center justify-center md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Menu Lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-background shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-[-150%]"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
        >
          ✕
        </button>
        <nav className="flex flex-col items-start p-4 mt-8 space-y-4">
          <Link
            className={`text-sm font-medium hover:underline underline-offset-4 ${checkActiveLink(
              "about"
            )}`}
            href="#about"
            onClick={toggleMenu}
          >
            {t("nav.about")}
          </Link>
          <Link
            className={`text-sm font-medium hover:underline underline-offset-4 ${checkActiveLink(
              "skills"
            )}`}
            href="#skills"
            onClick={toggleMenu}
          >
            {t("nav.skills")}
          </Link>
          <Link
            className={`text-sm font-medium hover:underline underline-offset-4 ${checkActiveLink(
              "projects"
            )}`}
            href="#projects"
            onClick={toggleMenu}
          >
            {t("nav.projects")}
          </Link>
          <Link
            className={`text-sm font-medium hover:underline underline-offset-4 ${checkActiveLink(
              "contact"
            )}`}
            href="#contact"
            onClick={toggleMenu}
          >
            {t("nav.contact")}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
