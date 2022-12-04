import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Icon, Pressable, useTheme, FormControl } from "native-base";
import { Eye, EyeSlash } from "phosphor-react-native";
import { Input, Button } from "../../../shared/form";
import { RealmApp } from "../../../../databases/RealmApp";
import { getRealm } from "../../../../databases/Schemas/Users/OpenSchema";

import { AlertSection } from "../Alert";
import { DataSelector } from "../DatePicker";

export function FormSection() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [Loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [sexo, setSexo] = useState("");
  const [cpf, setCPF] = useState("");
  const [cep, setCEP] = useState("");
  const [endereco, setEndereco] = useState("");
  const [nascimento, setNascimento] = useState();

  function gotoLogin() {
    navigation.navigate("login");
  }
  async function handleSubmit() {
    try {
      await RealmApp().emailPasswordAuth.registerUser({ email, password });
      console.log("ok");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <FormControl isRequired>
        <FormControl.Label>Nome</FormControl.Label>
        <Input
          placeholder="Digite seu nome"
          type="text"
          onChangeText={setNome}
        />

        <FormControl.Label>Email</FormControl.Label>
        <Input
          placeholder="Digite seu email"
          type="text"
          onChangeText={setEmail}
        />

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

      <Button w="full" mt={12} onPress={handleSubmit}>
        <Button.Title>Entrar</Button.Title>
      </Button>
    </>
  );
}
