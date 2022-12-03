import { ReactNode } from 'react'

import { VStack, Text, Icon, Container, useTheme } from 'native-base'

import UserIcon from '../../../../assets/icon_home_user.svg'

import { ArrowRight } from 'phosphor-react-native'

type Props = {
  title: string,
  redirect: string,
  icon: ReactNode
}

export function CardOption({ title, redirect, icon }: Props) {
  const { colors } = useTheme()

  return(
    <VStack 
      flex={1}
      backgroundColor="gray.600" 
      py={22}
      px={4}
      alignItems="center"
      justifyContent="center"
      borderRadius={12}
      height={242}
    >
      <VStack alignItems="center" justifyContent="center" space={8}>
        { icon }
        <Text fontSize={14} color="white" fontWeight="bold" bold>{title}</Text>
      </VStack>


      <Container backgroundColor="primary.700" borderRadius="100%" p={2} mt={8}>
        <Icon as={<ArrowRight color={colors.white} />}/>
      </Container>
    </VStack>
  )
}