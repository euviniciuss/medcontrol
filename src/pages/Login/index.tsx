import { VStack } from 'native-base'
import { HeaderSection, FormSection } from '../../components/pages/Login'
import { useEffect } from 'react'
import { FirebaseApp } from '../../services/config/FirebaseApp'


export default function Login() {


  return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <HeaderSection />
      <FormSection />
    </VStack>
  )
}