export type FighterAPI = {
  id:               number;
  name:             string;
  nickname:         string;
  surname:          string;
  dateOfBirth:      Date;
  nationality:      string;
  weight:           number;
  height:           number;
  age:              number;
  reach:            number;
  legReach:         number;
  winFights:        number;
  lostFights:       number;
  drawFights:       number;
  record:           string;
  gym:              null;
  fightStyle:       null;
  rankingNumber:    number;
  fighterPhoto:     null | string;
  fighterFullPhoto: null | string;
  fights:           Fight[];
  ranking:          Ranking;
}

export type Fight = {
  id:      number;
  title:   string;
  result:  null;
  mehtod:  null;
  round:   null;
  time:    null;
  company: string;
}

export type Ranking = {
  id:     number;
  name:   Name;
  weight: string;
}

export enum Name {
  Bantamweight = "Bantamweight",
  Featherweight = "Featherweight",
  Flyweight = "Flyweight ",
  Heavyweight = "Heavyweight",
  LightHeavyweight = "Light heavyweight",
  Lightweight = "Lightweight",
  Middleweight = "Middleweight",
  Welterweight = "Welterweight",
}
