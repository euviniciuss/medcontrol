import { useNavigation, useRoute } from "@react-navigation/native";

import { VStack, HStack, Heading, Text } from "native-base";

import { CardOption } from "../CardOption";
import React from "react";
import UserIcon from "../../../../assets/icon_home_user.svg";
import HistoricIcon from "../../../../assets/icon_home_historic.svg";
import LocationIcon from "../../../../assets/icon_home_location.svg";
import PharmacyIcon from "../../../../assets/icon_home_pharmacy.svg";

export function MainSection() {
  const route = useRoute();
  const navigation = useNavigation();
  console.log(route.params);

  return (
    <VStack flex={1} px={6}>
      <HStack w="full" mt={12} mb={4} alignItems="center">
        <Heading color="gray.100" bold>
          Consulte aqui suas opções! 💊
        </Heading>
      </HStack>

      <VStack
        w="full"
        mt={6}
        alignItems="center"
        justifyContent="center"
        space={6}
      >
        <HStack alignItems="center" justifyContent="center" space={4}>
          <CardOption
            title="Dados pessoais"
            icon={<UserIcon />}
            onPress={() => navigation.navigate("personal")}
          />
          <CardOption
            title="Histórico de Consultas"
            icon={<HistoricIcon />}
            onPress={() => navigation.navigate("queries")}
          />
        </HStack>

        <HStack w="full" alignItems="center" justifyContent="center" space={4}>
          <CardOption
            title="UBSs próximas"
            icon={<LocationIcon />}
            onPress={() => navigation.navigate("ubs")}
          />
          <CardOption
            title="Farmácias próximas"
            icon={<PharmacyIcon />}
            onPress={() => navigation.navigate("pharmacy")}
          />
        </HStack>
      </VStack>
    </VStack>
  );
}
