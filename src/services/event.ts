import { type Event } from "../types/event-api";

export const getEventById = async ({ id }: { id: number }) => {
  const res = await fetch(`http://localhost:5000/ufc/v1/event/1`);
  const data = (await res.json()) as Event;
  return data;
};
