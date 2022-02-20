import React from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from "styled-components";
import { Colors } from "./styled";

function colors(): Colors {
  return {
    white: "#FFFFFF",
    black: "#000000",
    lightBlue: "#ABE8FF",
    darkBlue: "#3772FF",
    background: "#191B20",
    inputGrey: "#242731",
    selectedGrey: "#353945",
    textColor: "#808191",
  };
}

function theme(): DefaultTheme {
  return {
    ...colors(),
    fontFamilyPoppins: `'Poppins', sans-serif`,
    fontFamilyInter: `'Inter', sans-serif`,
  };
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
}
