import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Icon, Pressable, useTheme, FormControl, Text, Link, HStack } from 'native-base'
import { Eye, EyeSlash } from 'phosphor-react-native'

import { Input, Button } from '../../../shared/form'

export function FormSection() {
  const navigation = useNavigation()

  const { colors } = useTheme()
  const [showPassword, setShowPassword] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [passoword, setPassword] = useState('')

  function handleLogin() {
    navigation.navigate('home')

    console.log("Nome: ", name, "Email: ", email, "Senha: ",passoword);
  }

  return(
    <>
      <FormControl isRequired mb={4}>
        <FormControl.Label>Nome</FormControl.Label>
        <Input 
          placeholder="Digite seu nome" 
          type="text"
          mb={4}
          onChangeText={setName}
        />
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
          type={ showPassword ? "text" : "password"} 
          onChangeText={setPassword}
          InputRightElement={
            <Pressable onPress={() => setShowPassword(!showPassword)}>
              {
                showPassword 
                ? <Icon as={<EyeSlash color={colors.gray[200]} />} mr={4} /> 
                : <Icon as={<Eye color={colors.gray[200]} />} mr={4} />
              }
              
            </Pressable>
          }
        />
      </FormControl>

      <Button w="full" mt={12} onPress={handleLogin}>
        <Button.Title>Cadastra-se</Button.Title>
      </Button>

      <HStack mt={24} alignItems="center" textAlign="center" justifyContent="center" w="full">
        <Text fontSize="md"color="gray.100">Já tem conta?</Text>
        <Link 
          ml={2} 
          _text={{
            color: "primary.700",
            fontSize: "md",
            textDecoration: "none",
            fontWeight: "700"
          }}
          onPress={() => { navigation.navigate('login') }}
        >
          Faça seu login!
        </Link>
      </HStack>

    </>
  )
}