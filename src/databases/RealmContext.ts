import { createRealmContext } from "@realm/react";
import { UserSchema } from "./Schemas/Users/UserSchema";

const config = {
  schema: [UserSchema],
};
export default createRealmContext(config);
