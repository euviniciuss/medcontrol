import { Heading } from 'native-base'

type Props = {
  children: string
}

export function Title({ children }: Props) {
  return(
    <Heading color="white" fontSize="sm">{children}</Heading>
  )
}