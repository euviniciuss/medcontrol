import { HStack, Heading } from 'native-base'

export function HeroSection() {
  return(
    <HStack w="full" alignItems="center" justifyContent="flex-start" py={4} px={6} mt={6}>
      <Heading color="gray.200" fontSize={28} textAlign="start" fontWeight="700">Encontre farmácias próximas de você!</Heading>
    </HStack>
  )
}