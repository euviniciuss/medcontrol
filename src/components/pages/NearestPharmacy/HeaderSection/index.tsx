import { HStack, IconButton, Heading, useTheme } from 'native-base'
import { ArrowLeft } from 'phosphor-react-native'

export function HeaderSection() {
  const { colors } = useTheme()

  return(
    <HStack w="full" alignItems="center" pt={16} pb={5} px={4} backgroundColor="gray.600" >
      <IconButton icon={<ArrowLeft color={colors.gray[100]} size={24} />} />
      <Heading color="gray.100" fontSize={18} textAlign="center" flex={1} ml={-6}>Farmácias Próximas</Heading>
    </HStack>
  )
}