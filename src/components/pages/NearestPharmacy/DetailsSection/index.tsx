import { useRoute, RouteProp } from '@react-navigation/native'
import { HStack, Heading, VStack, Text, Box } from 'native-base'

import { IMarker } from '../MapSection'

type DetailRoute = RouteProp< { detailsPharmacy: IMarker }, "detailsPharmacy">

export function DetailsSection() {
  const { params } = useRoute<DetailRoute>()
  return(
    <VStack flex={1} w="full" px={6} p={2} space={12}>
      <VStack w="full" alignItems="flex-start" justifyContent="center" py={4} mt={6}>
        <Heading color="gray.100" fontSize={22} textAlign="start" fontWeight="700">Detalhes sobre a farmácia:</Heading>

        <VStack w="full" alignItems="flex-start" justifyContent="center" space={2} mt={4} backgroundColor="gray.600" px={4} py={6} borderRadius={4}>
          <Heading color="white" fontSize={18}>Nome: Farmácia do trabalhador</Heading>
          <Heading color="white" fontSize={18}>Endereço: Rua de teste dele, Q21/B, N10</Heading>
        </VStack>
      </VStack>

      <VStack flex={1} space={4}>
        <Heading color="white" fontSize="22" mb={4}>Produtos disponíveis</Heading>

        <HStack
          bg="gray.600"
          mb={4}
          alignItems="center"
          justifyContent="space-between"
          rounded="sm"
          overflow="hidden"
        >
          <Box h="full" w={2} bg="primary.700" />

          <VStack flex={1} my={5} ml={5} space={2}>
            <Heading color="white" fontSize="lg" bold maxW="90%" >Paracetamol 750mg, 20 comprimidos</Heading>
            <Text color="gray.200" fontSize="md" ml={1}>12 unidades</Text>
          </VStack>
        </HStack>
        <HStack
          bg="gray.600"
          mb={4}
          alignItems="center"
          justifyContent="space-between"
          rounded="sm"
          overflow="hidden"
        >
          <Box h="full" w={2} bg="primary.700" />

          <VStack flex={1} my={5} ml={5} space={2}>
            <Heading color="white" fontSize="lg" bold maxW="90%" >Dramin B30 30ml</Heading>
            <Text color="gray.200" fontSize="md" ml={1}>35 unidades</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  )
}