import { ReactNode } from 'react'
import { Button as NativeBaseButton, IButtonProps } from 'native-base'

import { Title } from './Title'

type Props = IButtonProps & {
  children: ReactNode
}

export function Button({ children, ...rest }: Props) {
  return(
    <NativeBaseButton 
      bg="primary.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ 
        opacity: 0.8,
        bg: "primary.700"
      }}
      {...rest}
    >
      {children}
    </NativeBaseButton>
  )
}

Button.Title = Title