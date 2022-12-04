import React from "react";
import RealmContext from "../databases/RealmContext";
import { AppRoutes } from "./app.routes";
import { AppProvider } from "@realm/react";

const { RealmProvider } = RealmContext;

export default function RealmWrapper() {
  return (
    <AppProvider id={"application-0-oqitq"}>
      <RealmProvider>
        <AppRoutes />
      </RealmProvider>
    </AppProvider>
  );
}
