import { useState } from 'react'

import { VStack, Heading, Icon, Pressable, useTheme } from 'native-base'
import { Eye, EyeSlash } from 'phosphor-react-native'

import Logo from '../../assets/logo.svg'
import { Input } from '../../components/shared/form'

export default function Login() {
  const { colors } = useTheme()
  const [showPassword, setShowPassword] = useState(false)

  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      {/* <Logo /> */}

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>Hello Login</Heading>

      <Input 
        placeholder="Email" 
        mb={4} 
        type="text"
      />
      <Input 
        placeholder="Senha" 
        type={ showPassword ? "text" : "password"} 
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
    </VStack>
  )
}