import Realm from "realm";

// export const RealmApp = new Realm.App({ id: "application-0-oqitq",});

export function RealmApp() {
  const RealmAppID = "application-0-oqitq";
  const config = {
    id: RealmAppID,
    timeout: 10000,
  };
  return new Realm.App(config);
}
