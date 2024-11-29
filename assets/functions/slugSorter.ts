const slugMap: { [key: string]: string } = {
  health: "d180689f-3513-4827-b889-6d4229848a58",
  tech: "73c69fab-745c-449d-9579-268e5141766c",
  ai: "3d6f3261-9c75-4931-86e3-ce63b48920e4",
  fashion: "a969ec8c-d3be-4dd7-927e-a68c77f6bc2b",
  news: "bad4352f-9b22-4464-99d5-e9b241b6959f",
  personal: "b0f2e286-89e0-4703-81c3-e8942072c1be",
};

export type Slug = "health" | "tech" | "ai" | "fashion" | "news" | "personal";

export const SlugSorter = (slug: Slug): string => {
  return slugMap[slug] || "No Category";
};
