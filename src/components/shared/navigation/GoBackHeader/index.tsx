import { useNavigation } from '@react-navigation/native'

import { HStack, IconButton, Heading, useTheme } from 'native-base'
import { ArrowLeft } from 'phosphor-react-native'

type Props = {
  page: string
}

export function GoBackHeader({ page }: Props) {
  const { colors } = useTheme()

  const navigation = useNavigation()

  return(
    <HStack w="full" alignItems="center" pt={16} pb={5} px={4} backgroundColor="gray.600" >
      <IconButton icon={<ArrowLeft color={colors.gray[100]} size={24} />} onPress={() => navigation.goBack()} />
      <Heading color="gray.100" fontSize={18} textAlign="center" flex={1} ml={-6}>{ page }</Heading>
    </HStack>
  )
}