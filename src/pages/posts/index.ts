export const posts = [
	{
		id: "main",
		title: "하이요! - Hi!",
		description: "읽어주세요. - Read me.",
		date: "2026-06-27",
		content: () => import("./main.md?raw"),
	},
];
