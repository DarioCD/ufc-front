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
  fighterPhoto:     string;
  fighterFullPhoto: null;
  fights:           Fight[];
  ranking:          Ranking;
}

export type Fight = {
  id:      number;
  title:   string;
  result:  string;
  mehtod:  string;
  round:   string;
  time:    string;
  company: string;
  event:   Event;
}

export type Event = {
  id:          number;
  eventNumber: string;
  title:       string;
  fightDate:   Date;
  place:       string;
  information: string;
}

export type Ranking = {
  id:     number;
  name:   string;
  weight: string;
}
