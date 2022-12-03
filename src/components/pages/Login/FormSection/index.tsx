import { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import { Icon, Pressable, useTheme, FormControl } from 'native-base'
import { Eye, EyeSlash } from 'phosphor-react-native'

import { Input, Button } from '../../../shared/form'

export function FormSection() {
  const navigation = useNavigation()

  const { colors } = useTheme()
  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [passoword, setPassword] = useState('')

  function handleLogin() {
    navigation.navigate('home')

    console.log("Email: ", email, "Senha: ",passoword);
  }

  return(
    <>
      <FormControl isRequired mb={4} >
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
        <Button.Title>Entrar</Button.Title>
      </Button>
    </>
  )
}