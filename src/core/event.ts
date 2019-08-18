import { EventEmitter } from "events";
import { createEvent, Hook } from "../events/event-emitter";
import logger from "../events/hooks/logger-hook";

const hooks: Array<Hook> = [];

if (process.env.NODE_ENV === "development") {
  hooks.push(logger);
}

export const event = createEvent(new EventEmitter(), hooks);
