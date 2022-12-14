import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { HStack } from 'native-base'
import MapView, { Marker } from 'react-native-maps'

export type IMarker = {
  id: number
  name: string
  address: string
  latitude: number
  longitude: number
  stock: Stock[]
}

type Stock = {
  name: string,
  amount: number
}

export function MapSection() {
  const navigation = useNavigation()

  const [markers, setMarkers] = useState<IMarker[]>([
    {
      id: 1,
      name: 'Farmácia do trabalhador',
      address: 'Rua São João Terceiro, Q12/B, N18',
      latitude: -2.5180957003210636,
      longitude: -44.209035074256676,
      stock: [
        {
          name: 'Paracetamol 750mg, 20 comprimidos',
          amount: 12,
        },
        {
          name: 'Dramin B30 30ml',
          amount: 35,
        }
      ]
    },
    {
      id: 2,
      name: 'Unifarma',
      address: 'Rua da Paz, Q12/A, N26',
      latitude: -2.51694970949144,
      longitude: -44.20483954808304,
      stock: [
        {
          name: 'Paracetamol',
          amount: 12,
        }
      ]
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
              onPress={() =>  navigation.navigate('detailsPharmacy', { marker: item }) }
            />
          ))
        }
      </MapView>
    </HStack>
  )
}