import { useState } from 'react'

import { Icon, Pressable, useTheme, FormControl } from 'native-base'
import { Eye, EyeSlash } from 'phosphor-react-native'

import { Input, Button } from '../../../shared/form'

export function FormSection() {
  const { colors } = useTheme()
  const [showPassword, setShowPassword] = useState(false)

  const [email, setEmail] = useState('')
  const [passoword, setPassword] = useState('')

  function setUserLogin() {
    console.log(email, passoword);
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

      <Button w="full" mt={12} onPress={setUserLogin}>
        <Button.Title>Entrar</Button.Title>
      </Button>
    </>
  )
}