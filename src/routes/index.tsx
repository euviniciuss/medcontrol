import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RealmWrapper from "./realmprovider";

export function Routes() {
  return (
    <NavigationContainer>
      <RealmWrapper />
    </NavigationContainer>
  );
}
