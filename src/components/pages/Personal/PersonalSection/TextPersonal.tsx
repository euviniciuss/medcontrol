import { Text, VStack, Heading } from 'native-base'

type Props = {
  label: string,
  info: string
}

export function TextPersonal({ label, info }: Props) {
  return(
    <VStack w="full" justifyContent="flex-start" space={2}>
      <Heading color="gray.300" bold fontSize={18}>{ label }</Heading>
      <Text color="white" fontSize={18}>{ info }</Text>
    </VStack>
  )
}