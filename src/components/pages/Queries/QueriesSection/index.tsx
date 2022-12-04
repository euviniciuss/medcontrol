import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Heading, HStack, VStack, Text, FlatList, Center, useTheme } from "native-base";
import { XCircle } from 'phosphor-react-native'

import { Filter } from '../Filter'
import { Order, OrderProps } from '../Order'

export function QueriesSection() {
  const navigation = useNavigation()

  const { colors } = useTheme()

  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open')
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '1',
      consult: 'Médico geral',
      when: '03/12/2022 às 16:00',
      status: 'marked'
    },
  ])

  function handleOpenDetails(orderId: string) {
    navigation.navigate('details', { orderId })
  }

  return(
    <VStack flex={1} px={6}>
      <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
        <Heading color="gray.100">Minhas consultas</Heading>
        <Text color="gray.200">{orders.length}</Text>
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
        renderItem={({ item }) => <Order key={item.id} data={item} onPress={() => handleOpenDetails(item.id)} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <Center mt={12}>
            <XCircle color={colors.gray[300]} size={40} />
            <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
              Você ainda não possui {'\n'}
              consultas { statusSelected === 'open' 
                ? 'marcadas'
                : 'concluídas'
              }
            </Text>
          </Center>
        )}
      />
    </VStack>
  )
}