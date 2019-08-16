import { ServiceManager } from "./service-manager";

export function getService(name: string): any {
  const serviceManage = ServiceManager.getInstance();
  return serviceManage.get(name);
}
