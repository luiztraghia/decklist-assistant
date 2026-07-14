export interface CardEntry {
  code: string;
  qty: number;
}

export interface ParsedList {
  cards: CardEntry[];
  invalid: string[];
  duplicates: number;
}

export interface AppSettings {
  charDelay: number;
  suggestionTimeout: number;
  betweenCardsDelay: number;
  retries: number;
  theme: string;
  githubRepo: string;
}
