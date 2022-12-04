import { useState } from "react";
import Realm from "realm";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { RealmApp } from "../../../../databases/RealmApp";

// Configure Google Auth
GoogleSignin.configure({
  webClientId:
    "783681760551-vjjmrvq49mcgpc517b05kb7i1dbnmiqs.apps.googleusercontent.com",
});

export default function GoogleSignInButton() {
  const [signinInProgress, setSigninInProgress] = useState(false);

  const signIn = async () => {
    setSigninInProgress(true);
    try {
      // Sign into Google
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      // use Google ID token to sign into Realm
      const credentials = Realm.Credentials.google({ idToken });
      const user = await RealmApp().logIn(credentials);
      console.log("signed in as Realm user", user.id);
    } catch (error) {
      // possible errors
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log("Something went wrong:", error.toString());
      }
    } finally {
      setSigninInProgress(false);
    }
  };

  return (
    <GoogleSigninButton
      style={{ width: 192, height: 48 }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
      disabled={signinInProgress}
    />
  );
}
