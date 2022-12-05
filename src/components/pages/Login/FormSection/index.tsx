import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon, Pressable, useTheme, FormControl, Text, Link, HStack } from 'native-base'
import { Eye, EyeSlash } from 'phosphor-react-native'
import { Input, Button } from '../../../shared/form'
import SignInWithGoogle from '../../../../services/config/AuthWithGoogle'
import { FirebaseApp } from '../../../../services/config/FirebaseApp'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export function FormSection() {
  const AuthInstance = getAuth(FirebaseApp);
  const navigation = useNavigation()
  const { colors } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  async function handleLogin (email: string,password: string){
    if (email == ''|| password == ''){
      alert('Há campos em branco')
    }
    else{
    signInWithEmailAndPassword(AuthInstance,email,password)
    .then(res=>navigation.navigate('home', {userID: res.user.uid}))
    .catch(err=>alert('ERRO:' + err))
  }
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

      <Button w="full" mt={12} onPress={()=>handleLogin(email,password)}>
        <Button.Title>Entrar</Button.Title>
      </Button>
      <SignInWithGoogle/>
      
      <HStack mt={24} alignItems="center" textAlign="center" justifyContent="center" w="full">
        <Text fontSize="md"color="gray.100">Ainda não tem conta?</Text>
        <Link 
          ml={2} 
          _text={{
            color: "primary.700",
            fontSize: "md",
            textDecoration: "none",
            fontWeight: "700"
          }}
          onPress={() => { navigation.navigate('register') }}
        >
          Cadastre-se
        </Link>

      </HStack>
    </>
  )
}