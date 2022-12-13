import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    default: "#72B262",
    900: "#72B262",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors,
  config,
  fonts: {
    kalam: `'Kalam', sans-serif`,
  },
});
