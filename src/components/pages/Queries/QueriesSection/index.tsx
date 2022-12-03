import { useState } from 'react'

import { Heading, HStack, VStack, Text, FlatList } from "native-base";

import { Filter } from '../Filter'
import { Order, OrderProps } from '../Order'

export function QueriesSection() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '1',
      consult: 'Médico geral',
      when: '03/12/2022 às 16:00',
      status: 'marked'
    },
    {
      id: '2',
      consult: 'Médico Plantão',
      when: '03/12/2022 às 16:00',
      status: 'closed'
    },
  ])

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

      <FlatList 
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Order key={item.id} data={item}/>}
      />
    </VStack>
  )
}