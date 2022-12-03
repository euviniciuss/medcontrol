import { Button, IButtonProps, useTheme, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  isActive?: boolean
  type: 'open' | 'closed'
}

export function Filter({ title, isActive=false, type, ...rest }: Props) {
  const { colors } = useTheme()

  const colorsType = type === 'open' ? colors.primary[700] : colors.green[300]

  return(
    <Button
      backgroundColor="gray.600"
      variant="outline"
      borderWidth={1}
      borderColor={isActive ? colorsType : 'gray.600'}
      flex={1}
      size="sm"
      {...rest}
    >
     <Text color={ isActive ? colorsType : "gray.300" } fontSize="md">{title}</Text>
    </Button>
  )
}