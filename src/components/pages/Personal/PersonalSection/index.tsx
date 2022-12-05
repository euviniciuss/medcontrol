import { VStack, Circle, Heading } from 'native-base'

import { TextPersonal } from './TextPersonal'

import { User } from 'phosphor-react-native'

export function PersonalSection() {
  return(
    <VStack w="full" px={6} pt={6}>
      <VStack w="full" alignItems="center" justifyContent="center">
        <Circle bg="gray.500" h={24} w={24}>
          <User size={42} color="white" />
        </Circle>

        <Heading color="gray.100" mt={2} fontWeight="700">Marcus Vinicius</Heading>
      </VStack> 

      <VStack w="full" justifyContent="flex-start" space={4} mt={12}>
        <TextPersonal label="NOME COMPLETO" info="Marcus Vinicius Silva Costa" />
        <TextPersonal label="EMAIL" info="marcusvinicius@gmail.com" />
        <TextPersonal label="TELEFONE" info="(98) 982137419" />
        <TextPersonal label="Endereço" info="Rua São Benedito Franca, Q22/A, N11" />
      </VStack>
    </VStack>
  )
}