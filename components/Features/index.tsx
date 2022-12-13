import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Image,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = [
  {
    id: 1,
    title: "Čerstvé a chutné",
    text: "Lokálne ovocie je čerstvé a chutnejšie ako ovocie, ktoré bolo prepravené na dlhé vzdialenosti.",
  },
  {
    id: 2,
    title: "Podpora malých farmárov a pestovateľov",
    text: "Zberom alebo nákupom lokálnej zeleniny a ovocia podporíte malých farmárov a pestovateľov vo vašej komunite, čo môže pomôcť stimulovať lokálnu ekonomiku.",
  },
  {
    id: 3,
    title: "Menšia spotreba prírodnýh zdrojov, menej dopravy",
    text: "Lokálna produkcia ovocia a zeleniny zvyčajne vyžaduje menej zdrojov, tovar sa neprepravuje na dlhé vzdialenosti, čo môže pomôcť znížiť environmentálny dopad výberu vašich potravín.",
  },
  {
    id: 4,
    title: "Tvorba komunity",
    text: "Zber u starčeka vo vašej dedine, či na nedalekej farme, je možnosťou pre vytvorenie nových priateľstiev a komunity.",
  },
  {
    id: 5,
    title: "Zdravšie a bez E-čok",
    text: "Zber lokálneho ovocia môže mať pozitívny vplyv na vaše zdravie. Lokálne je zvyčajne pestované v súlade s prírodou, bez použitia chemických postrekov.",
  },
];

export function Features() {
  return (
    <Box>
      <Container maxW={"6xl"} mt={10} py={6}>
        <Flex>
          <Flex display={{ base: "none", sm: "flex" }}>
            <Box>
              <Image
                src="/images/obrane_benefits.png"
                alt="Benefity projektu"
              />
            </Box>
          </Flex>
          <Flex>
            <Flex direction={"column"} align={"start"} w={"100%"} px={6}>
              <Text fontSize="3xl" color="brand.default" fontFamily={"Kalam"}>
                Benefity
              </Text>
              <Heading fontSize={"3xl"} mb={6}>
                Čo vám Obrané ponúka?
              </Heading>
              <SimpleGrid columns={1} spacing={5}>
                {features.map((feature) => (
                  <HStack key={feature.id} align={"top"}>
                    <Box color={"brand.default"} px={2}>
                      <Icon as={CheckIcon} />
                    </Box>
                    <VStack align={"start"}>
                      <Text fontWeight={600}>{feature.title}</Text>
                      <Text color={"gray.600"}>{feature.text}</Text>
                    </VStack>
                  </HStack>
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
