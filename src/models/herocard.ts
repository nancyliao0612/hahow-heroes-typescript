export interface HeroListType {
  id: string;
  name: string;
  image: string;
}

export interface HeroCardType {
  id: string;
  name: string;
  image: string;
  highLight: string;
  highLightCard: (id: string) => void;
}

export interface HeroAbility {
  str: number;
  int: number;
  agi: number;
  luk: number;
}

export interface HeroPoint {
  name: string;
  point: string;
}

export interface HeroId {
  heroId: string;
}
