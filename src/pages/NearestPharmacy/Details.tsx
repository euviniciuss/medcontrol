import { Page } from '../../components/shared/layout'

import { GoBackHeader as Header } from '../../components/shared/navigation'
import { DetailsSection } from '../../components/pages/NearestPharmacy'

export default function Detais() {
  return(
    <Page>
      <Header page="Detalhes da Farmácia" /> 
      <DetailsSection />
    </Page>
  )
}