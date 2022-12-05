import { Page } from '../../components/shared/layout'
import { GoBackHeader } from '../../components/shared/navigation'

import { PersonalSection, MedicineSection } from '../../components/pages/Personal'

export default function Personal() {
  return(
    <Page>
      <GoBackHeader page="Dados pessoais" />
      <PersonalSection />
      <MedicineSection />
    </Page>
  )
}