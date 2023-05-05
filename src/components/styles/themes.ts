import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';


export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#21252B",
      scrollHandle: "#19252E",
      scrollHandleHover: "#162028",
      primary: '#e83e8c', 
      secondary: "#be70c7",
      text: {
        100: "#cbd5e1",
        200: "#B2BDCC", 
        300: "#64748b",
      },
    },
  },
};


export default theme;
