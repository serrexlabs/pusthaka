import { Callback } from "awesome-typescript-loader/dist/paths-plugin";

export interface ServiceInterface {
  serviceIdentifier(): string;
}

export interface ServiceManagerInterface {
  register(name: string, factory: Callback): void;
  get(name: string): any;
}

export class ServiceManager implements ServiceManagerInterface {
  private static instance: ServiceManager;

  private factories: { [name: string]: any } = {};

  private instances: { [name: string]: any } = {};

  private callStack: Array<string> = [];

  private constructor() {
    Object.defineProperty(this, "instances", {
      writable: false,
      enumerable: true,
      value: this.instances,
    });

    Object.defineProperty(this, "factories", {
      writable: false,
      enumerable: true,
      value: this.factories,
    });
  }

  public static getInstance(): ServiceManager {
    if (!ServiceManager.instance) {
      ServiceManager.instance = new ServiceManager();
    }

    return ServiceManager.instance;
  }

  /**
   * Register a new service in the service manager
   */
  public register(name: string, factory: Callback): void {
    this.factories[name] = factory;
    this.instances[name] = undefined;
  }

  /**
   * Instantiate the requested service.
   */
  private instantiate(name: string) {
    if (this.factories[name] === undefined) {
      throw new Error(`Unknown service ${name}`);
    }

    if (typeof this.factories[name] !== "function") {
      return this.factories[name];
    }

    if (!this.isSafeToInvoke(name)) {
      throw new Error(`Recursive dependency in ${name}`);
    }

    this.callStack.push(name);
    const instance = this.factories[name](this);

    if (instance === undefined) {
      throw new Error(`Service creation fails for ${name}`);
    }

    this.instances[name] = instance;

    this.callStack = [];

    return this.instances[name];
  }

  private isSafeToInvoke(name: string) {
    return this.callStack.indexOf(name) === -1;
  }

  /**
   *
   * @param {string} name
   */
  public get(name: string): any {
    return this.instances[name] || this.instantiate(name);
  }
}
