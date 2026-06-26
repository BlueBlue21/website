import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      blog: "Blog",
      projects: "Projects",
      comingSoon: "Coming Soon!",
      seeBlogVelog: "First you can see my blog in Velog.",
      goToVelog: "Go to Velog",
      techStack: "Tech Stack",
      myTechStackTemp: "My Tech Stack(Temp)",
      languages: "Languages : C, Go, Python, JavaScript, TypeScript, (HTML, CSS), etc.",
      others: "Others : SQLite, MongoDB, Express, React, Next.js, Chakra UI, Fyne, Godot Engine, etc.",
      tools: "Tools : Neovim, Visual Studio, Visual Studio Code, Zed, (Some Jetbrains Produect), Blender, etc.",
      butImSuperNoob: "* BUT I'M SUPER NOOBB!",
      error: "Error!",
      notFound: "404 - Not Found!",
      notInterestedPolitics: "* I do not interested in politics.",
      backToHome: "Back to home",
      allRightsReserved: "© {{year}} BlueBlue. All rights reserved.",
      koreanToggle: "한글",
      hiItsBlueBlue: "Hi, It's BlueBlue21! 👋",
      heHimAge: "He/Him, {{age}} years old.",
      intro: "I was born in Seoul, in South Korea. My dream is to be a happy developer. But I always waste my time..."
    }
  },
  ko: {
    translation: {
      blog: "블로그",
      projects: "프로젝트",
      comingSoon: "곧 공개됩니다!",
      seeBlogVelog: "일단 벨로그에서 제 블로그를 볼 수 있습니다.",
      goToVelog: "벨로그로 가기",
      techStack: "기술 스택",
      myTechStackTemp: "내 기술 스택(임시)",
      languages: "언어 : C, Go, Python, JavaScript, TypeScript, (HTML, CSS), 등등.",
      others: "기타 : SQLite, MongoDB, Express, React, Next.js, Chakra UI, Fyne, Godot Engine, 등등.",
      tools: "도구 : Neovim, Visual Studio, Visual Studio Code, Zed, (일부 Jetbrains 제품), Blender, 등등.",
      butImSuperNoob: "* 하지만 저는 쌉초보입니다!",
      error: "에러!",
      notFound: "404 - 찾을 수 없음!",
      notInterestedPolitics: "* 저는 정치에 관심이 없습니다.",
      backToHome: "홈으로 돌아가기",
      allRightsReserved: "© {{year}} BlueBlue. 모든 권리 보유.",
      koreanToggle: "English",
      hiItsBlueBlue: "안녕하세요, BlueBlue21입니다! 👋",
      heHimAge: "그/그를, {{age}}세.",
      intro: "저는 대한민국 서울에서 태어났습니다. 제 꿈은 행복한 개발자가 되는 것입니다. 하지만 항상 시간을 낭비하죠..."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
