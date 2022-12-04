import { VStack } from 'native-base'

import { HeaderSection, FormSection } from '../../components/pages/Register'

export default function Register() {
  return(
    <VStack w="full" flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <HeaderSection />
      <FormSection />
    </VStack>
  )
}