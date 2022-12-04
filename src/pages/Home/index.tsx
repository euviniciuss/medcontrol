import { Page } from "../../components/shared/layout";
import { MainSection } from "../../components/pages/Home";
import { Header } from "../../components/shared/navigation";
import React from "react";
export default function Home() {
  return (
    <Page>
      <Header />
      <MainSection />
    </Page>
  );
}
