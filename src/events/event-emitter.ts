import { EventEmitter } from "events";

const DISPATCHED_ACTION = "DISPATCHED";
const SUBSCRIBED_ACTION = "SUBSCRIBED";
const UNSUBSCRIBED_ACTION = "UNSUBSCRIBED";

interface HookParams {
  payload?: any;
  listener?: any;
  listenerCount?: number;
}

type Listener = (...args: Array<any>) => void;
export type Hook = (action: string, event: string, params: HookParams) => void;

class Emitter {
  private eventEmitter: EventEmitter;

  private hooks: Array<Hook>;

  public constructor(eventEmitter: EventEmitter, hooks?: Array<Hook>) {
    this.eventEmitter = eventEmitter;
    this.hooks = hooks || [];
  }

  public dispatch(event: string, ...args: Array<any>) {
    this.sendThroughHooks(DISPATCHED_ACTION, event, args);
    this.eventEmitter.emit(event, args);
  }

  public subscribe(event: string, listener: Listener) {
    this.sendThroughHooks(SUBSCRIBED_ACTION, event, listener);
    this.eventEmitter.addListener(event, listener);
  }

  public unsubscribe(event: string, listener?: Listener) {
    if (!listener) {
      this.sendThroughHooks(UNSUBSCRIBED_ACTION, event);
      this.eventEmitter.removeAllListeners(event);
      return;
    }
    this.sendThroughHooks(UNSUBSCRIBED_ACTION, event, listener);
    this.eventEmitter.removeListener(event, listener);
  }

  private sendThroughHooks(action: string, event: string, payload?: any, listener?: any) {
    this.hooks.forEach((hook: Hook) => {
      hook(action, event, {
        payload,
        listener,
        listenerCount: this.eventEmitter.listenerCount(event),
      });
    });
  }
}

export function createEvent(emitter: EventEmitter, hooks?: Array<Hook>): Emitter {
  return new Emitter(emitter, hooks);
}
