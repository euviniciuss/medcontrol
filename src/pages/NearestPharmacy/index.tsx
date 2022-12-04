import { Page } from '../../components/shared/layout'

import { GoBackHeader as Header } from '../../components/shared/navigation'
import { HeroSection, MapSection } from '../../components/pages/NearestPharmacy'

export default function NearestPharmacy() {
  return(
    <Page>
      <Header page="Farmácias Próximas" /> 
      <HeroSection />
      <MapSection />
    </Page>
  )
}