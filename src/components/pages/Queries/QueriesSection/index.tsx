import { useState } from 'react'

import { Heading, HStack, VStack, Text } from "native-base";

import { Filter } from '../Filter'

export function QueriesSection() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')

  return(
    <VStack flex={1} px={6}>
      <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
        <Heading color="gray.100">Minhas consultas</Heading>
        <Text color="gray.200">3</Text>
      </HStack>

      <HStack space={3} mb={8}>
        <Filter 
          title="Marcadas"
          type="open"
          onPress={() => setStatusSelected('open')}
          isActive={statusSelected === 'open'}
        />
        <Filter 
          title="Concluídas"
          type="closed"
          onPress={() => setStatusSelected('closed')}
          isActive={statusSelected === 'closed'}
        />
      </HStack>
    </VStack>
  )
}