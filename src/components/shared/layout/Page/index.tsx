import { ReactNode } from 'react'

import { VStack } from 'native-base'

type Props = {
  children: ReactNode
}

export function Page({ children }: Props) {
  return(
    <VStack flex={1} pb={6} bg="gray.700">
      {children}
    </VStack>
  )
}