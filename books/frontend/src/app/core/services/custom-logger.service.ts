import { AbstractLoggerService } from "projects/angular-console-logger/src/public_api";

export class CustomLoggerService implements AbstractLoggerService {
  warn(message: string) {
    throw new Error("Method not implemented.");
  }
  error(message: string) {
    throw new Error("Method not implemented.");
  }
  info(message: string) {
    throw new Error("Method not implemented.");
  }
}
