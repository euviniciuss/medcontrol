import { VStack } from 'native-base'

import { HeaderSection, MainSection } from '../../components/pages/Home'

export default function Home() {
  return(
    <VStack flex={1} pb={6} bg="gray.700">
      <HeaderSection />
      <MainSection />
    </VStack>
  )
}