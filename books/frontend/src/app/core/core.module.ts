import { NgModule } from "@angular/core";
import {
  AngularConsoleLoggerModule,
  AngularConsoleLoggerService,
} from "projects/angular-console-logger/src/public_api";
import { CustomLoggerService } from "./services/custom-logger.service";

@NgModule({
  providers: [
    {
      provide: AngularConsoleLoggerService,
      useClass: CustomLoggerService,
    },
  ],
  imports: [
    AngularConsoleLoggerModule.forRoot({
      isProduction: false,
      appPrefix: "pluralsight-app",
    }),
  ],
})
export class CoreModule {}
