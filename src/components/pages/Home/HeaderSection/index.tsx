import { HStack, VStack, Heading, IconButton, useTheme } from 'native-base'

import { List } from 'phosphor-react-native'

import Logo from '../../../../assets/logo.svg'

export function HeaderSection() {
  const { colors } = useTheme()

  return( 
    <HStack
      w="full"
      alignItems="center"
      bg="gray.600"
      pt={12}
      pb={5}
      px={4}
    >
      <IconButton icon={<List color={colors.gray[200]} size={26} />} mr={2}/>
      <Heading color="white">MedControl +</Heading>
    </HStack>
  )
}