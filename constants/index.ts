import { SidebarLink } from "@/types";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];

export const BADGE_CRITERIA = {
  QUESTION_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_COUNT: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  QUESTION_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  ANSWER_UPVOTES: {
    BRONZE: 10,
    SILVER: 50,
    GOLD: 100,
  },
  TOTAL_VIEWS: {
    BRONZE: 1000,
    SILVER: 10000,
    GOLD: 100000,
  },
};

// Custom for my needs

export const SidebarQuestions = [
  {
    text: "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    question_url: "/question/64fa02046ce064be90efc42d",
    id: 1,
  },
  {
    text: "Is it only me or the font is bolder than necessary?",
    question_url: "/question/64fa34346ce064be90efc42d",
    id: 2,
  },
  {
    text: "Redux Toolkit Not Updating State as Expected",
    question_url: "/question/24dfd046ce064be90efc42d",
    id: 3,
  },
];

export const SidebarTags = [
  { text: "NextJS", tag_url: "/tag/nextjs", number: 31, id: "1" },
  { text: "React", tag_url: "/tag/react", number: 18, id: "2" },
  { text: "CSS", tag_url: "/tag/css", number: 9, id: "3" },
];
