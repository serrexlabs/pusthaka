import { ServiceManager } from "./services/service-manager";
import serviceRegister from "./services/register";

export default () => {
  const serviceManager = ServiceManager.getInstance();
  serviceRegister(serviceManager);
};
