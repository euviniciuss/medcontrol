import React from "react";
import { Page } from "../../components/shared/layout";
import { QueriesSection } from "../../components/pages/Queries";
import { Header } from "../../components/shared/navigation";

export default function Queries() {
  return (
    <Page>
      <Header />
      <QueriesSection />
    </Page>
  );
}
