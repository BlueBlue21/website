import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ko";

interface TranslationStrings {
  nav: { blog: string; projects: string };
  home: {
    greeting: string;
    bio: string;
    techStack: string;
    techStackTitle: string;
    techStackLangs: string;
    techStackOthers: string;
    techStackTools: string;
    techStackNote: string;
    gender: string;
    ageUnit: string;
  };
  blog: {
    title: string;
    comingSoon: string;
    velogPrompt: string;
    goToVelog: string;
    error: string;
    noDesc: string;
  };
  projects: { title: string; error: string };
  notFound: { title: string; note: string; backToHome: string };
  footer: { copyright: string; language: string };
  toast: { emailTitle: string; discordTitle: string };
}

const translations: Record<Language, TranslationStrings> = {
  en: {
    nav: { blog: "Blog", projects: "Projects" },
    home: {
      greeting: "Hi, It's BlueBlue21! 👋",
      bio: "I was born in Seoul, in South Korea. My dream is to be a happy developer. But I always waste my time...",
      techStack: "Tech Stack",
      techStackTitle: "My Tech Stack(Temp)",
      techStackLangs: "Languages : C, Go, Python, JavaScript, TypeScript, (HTML, CSS), etc.",
      techStackOthers:
        "Others : SQLite, MongoDB, Express, React, Next.js, Chakra UI, Fyne, Godot Engine, etc.",
      techStackTools:
        "Tools : Neovim, Visual Studio, Visual Studio Code, Zed, (Some Jetbrains Product), Blender, etc.",
      techStackNote: "* BUT I'M SUPER NOOBB!",
      gender: "He/Him",
      ageUnit: "years old",
    },
    blog: {
      title: "Blog",
      comingSoon: "Coming Soon!",
      velogPrompt: "First you can see my blog in Velog.",
      goToVelog: "Go to Velog",
      error: "Failed to load posts.",
      noDesc: "No description",
    },
    projects: { title: "Projects", error: "Error!" },
    notFound: {
      title: "404 - Not Found!",
      note: "* I do not interested in politics.",
      backToHome: "Back to home",
    },
    footer: { copyright: "All rights reserved.", language: "한글" },
    toast: { emailTitle: "Email", discordTitle: "Discord" },
  },
  ko: {
    nav: { blog: "블로그", projects: "프로젝트" },
    home: {
      greeting: "안녕하세요, BlueBlue21입니다! 👋",
      bio: "저는 대한민국 서울에서 태어났습니다. 제 꿈은 행복한 개발자가 되는 것입니다. 하지만 저는 항상 시간을 낭비하고 있어요...",
      techStack: "기술 스택",
      techStackTitle: "나의 기술 스택 (임시)",
      techStackLangs: "언어 : C, Go, Python, JavaScript, TypeScript, (HTML, CSS), 기타",
      techStackOthers:
        "기타 : SQLite, MongoDB, Express, React, Next.js, Chakra UI, Fyne, Godot Engine, 기타",
      techStackTools:
        "도구 : Neovim, Visual Studio, Visual Studio Code, Zed, (일부 Jetbrains 제품), Blender, 기타",
      techStackNote: "* 하지만 저는 완전 초보입니다!",
      gender: "남성",
      ageUnit: "살",
    },
    blog: {
      title: "블로그",
      comingSoon: "곧 공개됩니다!",
      velogPrompt: "먼저 벨로그에서 제 블로그를 확인하세요.",
      goToVelog: "벨로그 바로가기",
      error: "포스트를 불러오지 못했습니다.",
      noDesc: "설명 없음",
    },
    projects: { title: "프로젝트", error: "오류!" },
    notFound: {
      title: "404 - 찾을 수 없습니다!",
      note: "* 저는 정치에 관심이 없습니다.",
      backToHome: "홈으로",
    },
    footer: { copyright: "모든 권리 보유.", language: "English" },
    toast: { emailTitle: "이메일", discordTitle: "디스코드" },
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: TranslationStrings;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "ko" : "en"));
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
