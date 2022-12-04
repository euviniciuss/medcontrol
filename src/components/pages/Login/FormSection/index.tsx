import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Icon, Pressable, useTheme, FormControl } from "native-base";
import { Eye, EyeSlash } from "phosphor-react-native";

import { Input, Button } from "../../../shared/form";
import { RealmApp } from "../../../../databases/RealmApp";
import GoogleSignInButton from "../SignInWithGoogle/SignInWithGoogleButton";
import { AlertSection } from "../../SignUp/Alert";

export function FormSection() {
  const navigation = useNavigation();

  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function UserAuthentication(email: string, password: string) {
    const credentials = Realm.Credentials.emailPassword(email, password);
    try {
      let user = await RealmApp().logIn(credentials);
      return user.id;
    } catch (err) {
      console.error("Failed to log in", err.message);
      return err.message;
    }
  }
  async function handleLogin() {
    let loggedUser = await UserAuthentication(email, password);
    navigation.navigate("home", { userID: loggedUser });
  }
  function GoToSignUp() {
    navigation.navigate("signup");
  }

  return (
    <>
      <FormControl isRequired mb={4}>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          placeholder="Digite seu email"
          type="text"
          onChangeText={setEmail}
        />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Senha</FormControl.Label>
        <Input
          placeholder="Digite sua senha"
          type={showPassword ? "text" : "password"}
          onChangeText={setPassword}
          InputRightElement={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <Icon as={<EyeSlash color={colors.gray[200]} />} mr={4} />
              ) : (
                <Icon as={<Eye color={colors.gray[200]} />} mr={4} />
              )}
            </Pressable>
          }
        />
      </FormControl>
      <Button w="full" mt={6} onPress={handleLogin}>
        <Button.Title>Entrar</Button.Title>
      </Button>
      <Button w="full" mt={6} onPress={GoToSignUp}>
        <Button.Title>Cadastre-se</Button.Title>
      </Button>
      <GoogleSignInButton />
    </>
  );
}
