import React from "react";
import { VStack } from "native-base";
import { HeaderSection, FormSection } from "../../components/pages/SignUp";

export default function SignUp() {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <HeaderSection />
      <FormSection />
    </VStack>
  );
}
