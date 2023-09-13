export type Event = {
  id:          number;
  eventNumber: string;
  title:       string;
  fightDate:   Date;
  place:       string;
  information: string;
  fights:      Fight[];
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
