import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Features } from "../components/Features";

export default function CallToActionWithVideo() {
  return (
    <>
      <Container maxW={"6xl"}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "brand.default",
                  zIndex: -1,
                }}
              >
                Pozbieraj si nové
              </Text>
              <br />
              <Text as={"span"}>priateľstvá</Text>
            </Heading>
            <Text color={"gray.500"}>
              Je to tu! Prišiel čas na to, aby sme našli všetky zabudnuté
              jablká, slivky, či hrušky v záhradách, humnách alebo sadoch a
              zozbierali ich. Obrané je tu pre všetkých, ktorí milujú miestne
              ovocie, ponúkame možnosť samostatného zberu zo záhrad a humien.
              <br /> Je to zadarmo, alebo aj za úsmev a chvíľu príjemnej
              konverzácie.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorScheme={"red"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
              >
                Mám strom
              </Button>
              <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6}>
                Hľadám ovocie
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/images/obrane_hero.jpg"}
            />
          </Flex>
        </Stack>
      </Container>
      <Box
        backgroundImage={"/images/obrane_wave1.svg"}
        backgroundSize="cover"
        backgroundPosition={"top"}
        backgroundRepeat="no-repeat"
      >
        <Features />
      </Box>
    </>
  );
}
