import { useEffect, useState } from 'react'

import { useRoute, RouteProp } from '@react-navigation/native'
import { HStack, Heading, VStack, Text, Box } from 'native-base'

import { IMarkerUbs } from '../MapSection'

type DetailRoute = RouteProp< { detailsPharmacy: IMarkerUbs }, "detailsPharmacy">

type Stock = {
  name: string,
  amount: number
}

export function DetailsSection() {
  const [data, setData] = useState<IMarkerUbs>()

  const { params } = useRoute<DetailRoute | any>()

  useEffect(() => {
    const getData = async () => {
      if (params?.marker !== undefined) {
        await setData(params?.marker)
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
            <Heading color="gray.100" fontSize={22} textAlign="start" fontWeight="700">Detalhes sobre a UBS:</Heading>

            <VStack w="full" alignItems="flex-start" justifyContent="center" space={2} mt={4} backgroundColor="gray.600" px={4} py={6} borderRadius={4}>
              <Heading color="white" fontSize={18}>Nome: {data?.name}</Heading>
              <Heading color="white" fontSize={18}>Endereço: {data?.address}</Heading>
            </VStack>
          </VStack>
        </VStack>
      }  
    </>
  )
}