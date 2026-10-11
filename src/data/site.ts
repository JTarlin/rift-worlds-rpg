export const site = {
  title: "Rift Worlds",
  tagline: "Adventure between broken worlds.",
  description:
    "A cinematic tabletop roleplaying game of perilous expeditions, strange powers, and choices that reshape worlds.",
};

export const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export const href = (path: string) => `${basePath}${path}`;

export const ruleNavigation = [
  { id: "core-concepts", title: "Core Concepts" },
  { id: "character-creation", title: "Character Creation" },
  { id: "gameplay", title: "Gameplay" },
  { id: "combat", title: "Combat" },
  { id: "exploration", title: "Exploration" },
  { id: "equipment", title: "Perks" },
  { id: "example-characters", title: "Example Characters" },
  { id: "quick-reference", title: "Quick Reference" },
] as const;
