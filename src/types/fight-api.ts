export type FightAPI = {
  id:       number;
  title:    string;
  result:   null;
  mehtod:   null;
  round:    null;
  time:     null;
  fighter1: null;
  fighter2: null;
  company:  string;
  fighters: Fighter[];
  event:    Event;
}

export type Event = {
  id:          number;
  eventNumber: string;
  title:       string;
  fightDate:   Date;
  place:       string;
  information: string;
}

export type Fighter = {
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
  fighterPhoto:     string;
  fighterFullPhoto: null | string;
  ranking:          Ranking;
}

export type Ranking = {
  id:     number;
  name:   string;
  weight: string;
}
