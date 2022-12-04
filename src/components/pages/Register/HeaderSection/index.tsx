import { Heading, HStack } from 'native-base'

import Logo from '../../../../assets/logo.svg'

export function HeaderSection() {
  return(
    <HStack w="full" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={16} mb={8}>Faça agora cadastro no Medcontrol!</Heading>
    </HStack>
  )
}