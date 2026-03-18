import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations } from "./translations";

type Lang = "en" | "ar";

interface LanguageContextProps {
  lang: Lang;
  changeLanguage: (newLang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  lang: "en",
  changeLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("language");
    return stored === "ar" ? "ar" : "en";
  });

  const changeLanguage = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value: any = translations[lang];
    for (let k of keys) {
      if (value[k] === undefined) return key; 
      value = value[k];
    }
    return value;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);