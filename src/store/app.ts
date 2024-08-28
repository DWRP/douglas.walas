import { Locale } from "@/locales";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { storage } from "./store.service";

type Theme = "light" | "dark";

interface AppState {
  theme: Theme;
  lang: Locale;
  activeMenu: string;
  setTheme: (theme: Theme) => void;
  setLocale: (lang: Locale) => void;
  setActiveMenu: (activeMenu: string) => void;
}

export const useAppStore = create(
  persist<AppState>(
    (set) => ({
      theme: "light",
      lang: "en",
      activeMenu: "",
      setActiveMenu: (activeMenu: string) => {
        set({ activeMenu });
      },
      setTheme: (theme: Theme) => {
        set({ theme });
      },
      setLocale: (lang: Locale) => {
        set({ lang });
      },
    }),
    {
      name: "app",
      storage,
    }
  )
);
