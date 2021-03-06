import { appSchema } from "@nozbe/watermelondb";
import { carSchema } from "./carsSchema";
import { userSchema } from "./userSchema";

const schemas = appSchema({
  version: 1,
  tables: [
    userSchema,
    carSchema
  ]
});

export { schemas }