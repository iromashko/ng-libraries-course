import { Injectable } from "@angular/core";
import { LoggerConfig } from "./logger.config";

export abstract class AbstractLoggerService {
  abstract warn(message: string);
  abstract error(message: string);
  abstract info(message: string);
}

@Injectable({
  providedIn: "root",
})
export class AngularConsoleLoggerService implements AbstractLoggerService {
  constructor(private LoggerConfig: LoggerConfig) {}

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
