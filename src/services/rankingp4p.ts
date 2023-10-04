import { type Ranking } from "../types/ranking-api";
import { apiUrl } from "./apiConfig";

export const getRankingp4pByFighterId = async ({ id }: { id: number }) => {
  const res = await fetch(`${apiUrl}ufc/v1/rankingp4p/fighter/${id}`);

  const fighter = (await res.json()) as Ranking;

  return fighter;
};


export const getAllRankingsp4p = async () => {
  const res = await fetch(`${apiUrl}ufc/v1/rankingp4p`);

  const rankings = (await res.json()) as Ranking[];

  return rankings;
};