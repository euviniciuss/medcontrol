import { HStack, VStack, Heading, IconButton, useTheme } from "native-base";

import { List } from "phosphor-react-native";
import React from "react";
import Logo from "../../../../assets/logo.svg";

export function HeaderSection() {
  const { colors } = useTheme();

  return (
    <HStack w="full" alignItems="center" pt={16} pb={5} px={4}>
      <IconButton icon={<List color={colors.gray[200]} size={42} />} mr={4} />
      <Logo width={62} height={62} />
    </HStack>
  );
}
