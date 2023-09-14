import { type Ranking } from "../types/ranking-api";

export const getRankingByFighterId = async ({ id }: { id: number }) => {
  const res = await fetch(`http://localhost:5000/ufc/v1/ranking/fighter/${id}`);

  const fighter = (await res.json()) as Ranking;

  return fighter;
};
