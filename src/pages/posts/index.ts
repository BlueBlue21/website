export const posts = [
  {
    id: "sample",
    title: "Hello World!",
    description: "This is my first blog post.",
    date: "2024-06-26",
    content: () => import('./sample.md?raw')
  }
];
