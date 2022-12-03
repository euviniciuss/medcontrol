import { VStack, HStack, Heading, Text } from 'native-base'

import { CardOption } from '../CardOption'

import UserIcon from '../../../../assets/icon_home_user.svg'
import HistoricIcon from '../../../../assets/icon_home_historic.svg'
import LocationIcon from '../../../../assets/icon_home_location.svg'
import PharmacyIcon from '../../../../assets/icon_home_pharmacy.svg'

export function MainSection() {
  return (
    <VStack flex={1} px={6}>
      <HStack w="full" mt={12} mb={4} alignItems="center">
        <Heading color="gray.100" bold>Consulte aqui suas opções! 💊</Heading>
      </HStack>

      <VStack w="full" mt={6} alignItems="center" justifyContent="center" space={6}>
        <HStack alignItems="center" justifyContent="center" space={4}>
          <CardOption 
            title="Dados pessoais"
            redirect="Dados"
            icon={<UserIcon />}
          />
          <CardOption 
            title="Histórico de Consultas"
            redirect="Dados"
            icon={<HistoricIcon />}
          />
        </HStack>

        <HStack w="full" alignItems="center" justifyContent="center" space={4}>
          <CardOption 
            title="UBSs próximas"
            redirect="Dados"
            icon={<LocationIcon />}
          />
          <CardOption 
            title="Farmácias próximas"
            redirect="Dados"
            icon={<PharmacyIcon />}
          />
        </HStack>
      </VStack>
    </VStack>
  )
}