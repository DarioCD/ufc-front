import { type FighterAPI } from "../types/fighter-api";
import { apiUrl } from "./apiConfig";

export const getFighters = async () => {
  const res = await fetch(`${apiUrl}ufc/v1/fighter`);
  const data = (await res.json()) as FighterAPI[];
  return data;
};

export const getChampFighters = async () => {
  const res = await fetch(`${apiUrl}ufc/v1/fighter/champs`);
  const data = (await res.json()) as FighterAPI[];
  return data;
};

export const getFighterById = async ({ id }: { id: string }) => {
  const res = await fetch(`${apiUrl}ufc/v1/fighter/${id}`);

  const fighter = (await res.json()) as FighterAPI;

  return fighter;
};
