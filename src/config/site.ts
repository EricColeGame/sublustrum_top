export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Sublustrum Wiki",
  shortName: "Sublustrum",
  logoText: "S",
  tagline: "Complete Walkthroughs, Puzzle Solutions & Story Guides",
  description: "Sublustrum is a surreal psychological horror adventure game with atmospheric exploration, mysterious sound-based puzzles, and a dark steampunk-inspired world full of secrets and hidden stories.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sublustrum.top",
  supportEmail: "support@sublustrum.top",
  gameUrl: "https://store.steampowered.com/app/4151300/Sublustrum/",
  heroVideoId: "EjwlaWYUmCc", // Sublustrum - Official Trailer
  social: {
    discord: "https://steamcommunity.com/app/4151300",
    youtube: "https://www.youtube.com/watch?v=EjwlaWYUmCc",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
