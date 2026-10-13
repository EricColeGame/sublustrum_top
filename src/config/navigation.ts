export interface NavigationItem {
  /** 翻译键（en.json 的 nav 命名空间） */
  key: string;
  /** 列表页 URL */
  path: `/${string}`;
  /** 是否为可枚举的内容类型（决定是否参与 getDynamicNavigation / sitemap） */
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
  { key: "details", path: "/details", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
  { key: "comparisons", path: "/comparisons", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.key);
