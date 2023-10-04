export type FighterAPI = {
  id: number;
  name: string;
  nickname: string;
  surname: string;
  dateOfBirth: Date;
  nationality: string;
  weight: number;
  height: number;
  age: number;
  reach: number;
  legReach: number;
  winFights: number;
  lostFights: number;
  drawFights: number;
  record: string;
  gym: null;
  fightStyle: null;
  rankingNumber: number;
  rankingp4pNumber: number | null;
  fighterPhoto: null | string;
  fighterFullPhoto: null | string;
  fights: Fight[];
  ranking: Ranking;
  rankingP4P: Ranking | null;
};

export type Fight = {
  id: number;
  title: string;
  result: null | string;
  mehtod: null | string;
  round: null | string;
  time: null | string;
  winner: number | null;
  looser: number | null;
  company: Company;
  event: Event;
};

export type Event = {
  id: number;
  eventNumber: EventNumber;
  title: Title;
  fightDate: Date;
  place: Place;
  information: Information;
  eventPhoto: null | string;
};

export type Ranking = {
  id: number;
  name: Name;
  weight: string;
};
