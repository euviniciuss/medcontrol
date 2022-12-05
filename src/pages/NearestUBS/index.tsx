import { Page } from '../../components/shared/layout'

import { GoBackHeader as Header } from '../../components/shared/navigation'
import { HeroSection, MapSection } from '../../components/pages/NearestUBS'

export default function NearestUBS() {
  return(
    <Page>
      <Header page="UBS's Próximas" /> 
      <HeroSection />
      <MapSection />
    </Page>
  )
}