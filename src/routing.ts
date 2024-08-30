import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./locales";

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
