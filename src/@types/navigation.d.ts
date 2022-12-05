import { IMarker } from '../components/pages/NearestPharmacy/MapSection'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined
      home: { userID: string } | undefined;
      personal: undefined
      queries: undefined
      ubs: undefined
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