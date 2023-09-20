import { type Event } from "../types/event-api";

import { apiUrl } from "./apiConfig";

export const getEventById = async ({ id }: { id: number }) => {
  const res = await fetch(`${apiUrl}ufc/v1/event/1`);
  const data = (await res.json()) as Event;
  return data;
};
