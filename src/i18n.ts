import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			blog: "Blog",
			projects: "Projects",
			techStack: "Tech stack",
			myTechStack: "My tech stack",
			languages: "Languages: Korean?",
			others: "Others: Pet the dog",
			tools: "Tools: Notepad",
			error: "Error!",
			notFound: "404 - Not Found!",
			backToHome: "Back to home",
			allRightsReserved: "© {{year}} BlueBlue. All rights reserved.",
			languageToggle: "한국어",
			hiItsBlueBlue: "Hi, It's BlueBlue21! 👋",
			pronounsAge: "Boy, {{age}} years old.",
			intro: "Lazy human",
		},
	},
	ko: {
		translation: {
			blog: "블로그",
			projects: "프로젝트",
			techStack: "기술 스택",
			myTechStack: "제 기술 스택",
			languages: "사용하는 언어: 한국어?",
			others: "하는 짓: 강아지 쓰담쓰담",
			tools: "사용하는 도구들: 메모장",
			error: "에러!",
			notFound: "404 - 찾을 수 없는 페이지!",
			backToHome: "홈으로 가기",
			allRightsReserved: "© {{year}} BlueBlue. All rights reserved.",
			languageToggle: "English",
			hiItsBlueBlue: "하이요, 저는 BlueBlue21 이에요! 👋",
			pronounsAge: "남자이고, 세는 나이 {{age}}살 입니다.",
			intro: "많이 게으른 사람",
		},
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en-US",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
