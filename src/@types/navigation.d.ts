export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      login: undefined;
      home: { userID: string } | undefined;
      signup: undefined;
      personal: undefined;
      queries: undefined;
      ubs: undefined;
      pharmacy: undefined;
      redirect: undefined;
      details: {
        orderId: string;
      };
    }
  }
}
