import { type FighterAPI } from "../types/fighter-api";

export const getFighters = async () => {
  const res = await fetch("http://localhost:5000/ufc/v1/fighter");
  const data = await res.json();
  return data;
};
