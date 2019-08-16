import { ServiceManagerInterface } from "./service-manager";
import UploadService from "./upload-service";
import BookService from "./book-service";
import ConfigService from "./config-service";

export default (serviceManager: ServiceManagerInterface) => {
  serviceManager.register(BookService.name, () => {
    return new BookService();
  });

  serviceManager.register(ConfigService.name, () => {
    return new ConfigService();
  });

  serviceManager.register(UploadService.name, () => {
    return new UploadService(
      serviceManager.get(BookService.name),
      serviceManager.get(ConfigService.name),
    );
  });
};
