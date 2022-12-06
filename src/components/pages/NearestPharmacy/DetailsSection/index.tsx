import { useEffect, useState } from 'react'

import { useRoute, RouteProp } from '@react-navigation/native'
import { HStack, Heading, VStack, Text, Box,View } from 'native-base'

import { IMarker } from '../MapSection'

type DetailRoute = RouteProp< { detailsPharmacy: IMarker }, "detailsPharmacy">

type Stock = {
  name: string,
  amount: number
}

export function DetailsSection() {
  const [data, setData] = useState<IMarker>()
  const [stock, setStock] = useState<Stock[]>([])
  const { params } = useRoute<DetailRoute | any>()

  useEffect(() => {
    const getData = async () => {
      if (params?.marker !== undefined) {
        setData(params?.marker)
        setStock(params?.marker.stock)
      }
    }

    getData()
    
    
  }, [])

  return(
    <>
      {
        params &&
        <VStack flex={1} w="full" px={6} p={2} space={12}>
          <VStack w="full" alignItems="flex-start" justifyContent="center" py={4} mt={6}>
            <Heading color="gray.100" fontSize={22} fontWeight="700">Detalhes sobre a farmácia:</Heading>
            <VStack w="full" alignItems="flex-start" justifyContent="center" space={2} mt={4} backgroundColor="gray.600" px={4} py={6} borderRadius={4}>
              <Heading color="white" fontSize={18}>Nome: {data?.name}</Heading>
              <Heading color="white" fontSize={18}>Endereço: {data?.address}</Heading>
            </VStack>
          </VStack>

          <VStack flex={1} space={4}>
            <Heading color="white" fontSize="22" mb={4}>Produtos disponíveis</Heading>

            { 
              data &&
              stock?.map((item, index) => (
                <HStack
                  key={index}
                  bg="gray.600"
                  mb={4}
                  alignItems="center"
                  justifyContent="space-between"
                  rounded="sm"
                  overflow="hidden"
                >
                  <Box h="full" w={2} bg="primary.700" />

                  <VStack flex={1} my={5} ml={5} space={2}>
                    <Heading color="white" fontSize="lg" bold maxW="90%" >{item?.name}</Heading>
                    <Text color="gray.200" fontSize="md" ml={1}>{item?.amount} unidades</Text>
                  </VStack>
                </HStack>
              ))
            }        
          </VStack>
        </VStack>
      }  
    </>
  )
}
