import { Text } from "native-base";

import { useRoute } from '@react-navigation/native'

import { Page } from '../../components/shared/layout'
import { Header } from '../../components/shared/navigation'

type RouteParms = {
  orderId: string
}

export default function DetailsQuerie() {
  const route = useRoute()
  const { orderId } = route.params as RouteParms

  return(
    <Page>
      <Header />
      <Text mx={6} color="gray.100">{orderId}</Text>
    </Page>
  )
}