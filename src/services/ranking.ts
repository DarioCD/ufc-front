import { type Ranking } from "../types/ranking-api";
import { apiUrl } from "./apiConfig";

export const getRankingByFighterId = async ({ id }: { id: number }) => {
  const res = await fetch(`${apiUrl}ufc/v1/ranking/fighter/${id}`);

  const fighter = (await res.json()) as Ranking;

  return fighter;
};


export const getAllRankings = async () => {
  const res = await fetch(`${apiUrl}ufc/v1/ranking`);

  const rankings = (await res.json()) as Ranking[];

  return rankings;
};