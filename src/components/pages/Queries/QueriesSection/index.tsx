import { Heading, HStack, VStack, Text } from "native-base";

export function QueriesSection() {
  return(
    <VStack flex={1} px={6}>
      <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
        <Heading color="gray.100">Minhas consultas</Heading>

        <Text color="gray.200">3</Text>
      </HStack>


    </VStack>
  )
}