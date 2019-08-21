import { ServiceManagerInterface } from "./service-manager";
import UploadService from "./upload-service";
import BookService from "./book-service";
import ConfigService from "./config-service";

export default (serviceManager: ServiceManagerInterface) => {
  serviceManager.register("BookService", () => {
    return new BookService();
  });

  serviceManager.register("ConfigService", () => {
    return new ConfigService();
  });

  serviceManager.register("UploadService", () => {
    return new UploadService(
      serviceManager.get("BookService"),
      serviceManager.get("ConfigService"),
    );
  });
};
