import { Heading } from "native-base";
import React from "react";
import Logo from "../../../../assets/logo.svg";

export function HeaderSection() {
  return (
    <>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Faça seu login no Medcontrol!
      </Heading>
    </>
  );
}
