import Realm from "realm";
import { RealmApp } from "../../RealmApp";
import { UserSchema } from "./UserSchema";

export const getRealm = async () => {
  await Realm.open({
    path: "projectubs",
    schema: [UserSchema],
    sync: {
      user: RealmApp().currentUser,
      partitionValue: "",
    },
  });
};
