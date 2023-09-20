import { type FightAPI } from "../types/fight-api";
import { apiUrl } from "./apiConfig";

export const getFightById = async ({ id }: { id: string }) => {
  const res = await fetch(`${apiUrl}ufc/v1/fighter/fight/${id}`);
  const fight = (await res.json()) as FightAPI;
  return fight;
};
