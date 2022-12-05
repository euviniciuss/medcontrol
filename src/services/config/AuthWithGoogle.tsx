import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import { View,Button } from 'react-native';
GoogleSignin.configure({
  webClientId: '783681760551-56g6kkssuam8ojbcsid0fnbuqovncnp3.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  

    return auth().signInWithCredential(googleCredential);
  }

export default function SignInWithGoogle(){
    const navigation = useNavigation()
    return (
        <View>
        <Button
          title="Google Sign-In"
          onPress={() => onGoogleButtonPress()
            .then((res) =>navigation.navigate('home',{userID: res.user.uid})
          )}
        />
        </View>
      );
}