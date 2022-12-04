import { useRoute, RouteProp } from '@react-navigation/native'
import { HStack, Heading } from 'native-base'

import { IMarker } from '../MapSection'

type DetailRoute = RouteProp< { detailsPharmacy: IMarker }, "detailsPharmacy">

export function DetailsSection() {
  const { params } = useRoute<DetailRoute>()

  console.log("-----------------------------");
  
  console.log(params)

  console.log("-----------------------------");

  return(
    <HStack w="full" alignItems="center" justifyContent="flex-start" py={4} px={6} mt={6}>
      <Heading color="gray.200" fontSize={18} textAlign="start" fontWeight="700">Encontre farmácias próximas a você!</Heading>
    </HStack>
  )
}