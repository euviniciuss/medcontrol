import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { HStack } from 'native-base'
import MapView, { Marker } from 'react-native-maps'

export type IMarkerUbs = {
  id: number
  name: string
  address: string
  latitude: number
  longitude: number
}

export function MapSection() {
  const navigation = useNavigation()

  const [markers, setMarkers] = useState<IMarkerUbs[]>([
    {
      id: 1,
      name: 'Unidade Básica de Saúde do Cohatrac V',
      address: 'Rua São João Terceiro, Q12/B, N18',
      latitude: -2.5180957003210636,
      longitude: -44.209035074256676,
    },
    {
      id: 2,
      name: 'Unidade Básica de Saúde Safira',
      address: 'Rua da Paz, Q12/A, N26',
      latitude: -2.51694970949144,
      longitude: -44.20483954808304,
    }
  ])

  return(
    <HStack flex={1} pb={4} mt={4} borderRadius={2}>
      <MapView 
        style={{ flex: 1 }}
        initialRegion={{
          latitude: markers[0].latitude,
          longitude: markers[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
          markers.map(item => (
            <Marker 
              key={item.id}
              coordinate={{
                latitude: item.latitude, 
                longitude: item.longitude,
              }}
              onPress={() =>  navigation.navigate('detailsUbs', { marker:item }) }
            />
          ))
        }
      </MapView>
    </HStack>
  )
}