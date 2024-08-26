import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Footer from "./sections/Footer";

export default function FullstackDeveloperLanding() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();

  const changeLanguage = (newLang: string) => {
    router.push(`/?lang=${newLang}${window.location.hash}`);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <Header
        {...{
          changeLanguage,
          isDarkMode,
          setIsDarkMode,
        }}
      />

      <Main />

      <Footer />
    </div>
  );
}
