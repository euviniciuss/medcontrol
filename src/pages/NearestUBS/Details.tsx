import { Page } from '../../components/shared/layout'

import { GoBackHeader as Header } from '../../components/shared/navigation'
import { DetailsSection } from '../../components/pages/NearestUBS'

export default function Details() {
  return(
    <Page>
      <Header page="Detalhes da UBS" /> 
      <DetailsSection />
    </Page>
  )
}