import { type Event } from "../types/event-api";
import { type FightAPI } from "../types/fight-api";
import { apiUrl } from "./apiConfig";

export const getEventById = async ({ id }: { id: number }) => {
  const res = await fetch(`${apiUrl}ufc/v1/event/${id}`);
  const data = (await res.json()) as Event;
  return data;
};

export const getAllEvents = async () => {
  const res = await fetch(`${apiUrl}ufc/v1/event`);
  const data = (await res.json()) as Event[];
  return data;
};

export const getFightByEventId = async ({ id }: { id: number }) => {
  const res = await fetch(`${apiUrl}ufc/v1/event/fight/${id}`);
  const data = (await res.json()) as FightApi[];
  return data;
};

