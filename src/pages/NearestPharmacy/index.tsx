import { Page } from '../../components/shared/layout'

import { GoBackHeader as Header } from '../../components/shared/navigation'
import { MapSection } from '../../components/pages/NearestPharmacy'


export default function NearestPharmacy() {
  return(
    <Page>
      <Header page="Encontre farmácias próximas de você!" /> 
      <MapSection/>
    </Page>
  )
}