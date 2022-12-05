import { ReactNode } from 'react'
import { VStack, Text, Icon, Container, useTheme, Pressable, IPressableProps } from 'native-base'

import { ArrowRight } from 'phosphor-react-native'

type Props = IPressableProps & {
  title: string,
  icon: ReactNode
}

export function CardOption({ title, icon, ...rest }: Props) {
  const { colors } = useTheme()

  return(
    <Pressable
      flex={1}
      backgroundColor="gray.600"
      py={22}
      px={4}
      height={242}
      borderRadius={12}
      {...rest}
    >
      <VStack 
        height='100%'
        width='100%'
        alignItems="center"
        justifyContent="center"
      >
        <VStack alignItems="center" justifyContent="center" space={8}>
          { icon }
          <Text fontSize={14} color="white" fontWeight="bold" bold>{title}</Text>
        </VStack>


        <Container backgroundColor="primary.700" borderRadius={100} p={2} mt={8}>
          <Icon as={<ArrowRight color={colors.white} />}/>
        </Container>
      </VStack>
    </Pressable>
  )
}