import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Personal from "../pages/Personal";
import Queries from "../pages/Queries";
import DetailsQuerie from "../pages/DetailsQuerie";
import NearestUBS from "../pages/NearestUBS";
import NearestPharmacy from "../pages/NearestPharmacy";
import SignUp from "../pages/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="signup" component={SignUp} />
      <Screen name="home" component={Home} />
      <Screen name="personal" component={Personal} />
      <Screen name="queries" component={Queries} />
      <Screen name="details" component={DetailsQuerie} />
      <Screen name="ubs" component={NearestUBS} />
      <Screen name="pharmacy" component={NearestPharmacy} />
    </Navigator>
  );
}
