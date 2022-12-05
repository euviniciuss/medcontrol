import { IMarker } from '../components/pages/NearestPharmacy/MapSection'
import { IMarkerUbs } from '../components/pages/NearestUBS'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined
      home: undefined
      personal: undefined
      queries: undefined
      ubs: undefined
      detailsUbs: {
        marker: IMarkerUbs
      }
      pharmacy: undefined
      detailsPharmacy: {
        marker: IMarker
      }
      redirect: undefined
      details: {
        orderId: string
      }
      register: undefined
    }
  }
}