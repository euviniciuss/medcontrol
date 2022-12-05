import { useState } from 'react'

import { Heading, HStack, Text, VStack, IconButton, useTheme } from 'native-base'
import { Trash } from 'phosphor-react-native'

type AllergyCard = {
  name: string
}

export function MedicineSection() {
  const { colors } = useTheme()

  const [allergyMedicine, setAllergyMedicine] = useState<AllergyCard[]>([
    {
      name: "Busconpan Gotas 20mg"
    },
    {
      name: "Dipirona Monoidrata"
    },
  ])

  return(
    <VStack w="full" px={6}>
      <VStack w="full" justifyContent="flex-start" space={4} mt={8}>
        <HStack w="full" backgroundColor="gray.400" px={4} py={4} alignItems="center" justifyContent="space-between">
          <Heading color="white" fontWeight="700" fontSize={18}>Restrições médicas(Alergia)</Heading>
          <Text color="gray.300" fontSize={18}>{allergyMedicine.length}</Text>
        </HStack>

        {
          allergyMedicine.map((item, index) => (
            <HStack key={index} w="full" alignItems="center" justifyContent="space-between">
              <Text color="white" fontSize={18}>- {item.name}</Text>
              <IconButton icon={<Trash color={colors.red[300]} size={22} />} mr={4}/>
            </HStack>
          ))
        }
      </VStack>
    </VStack>
  )
}