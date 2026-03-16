import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

type Mode = 'light' | 'dark';
type ColorModeContextType = {
  toggleColorMode: () => void;
};
type ColorScale = {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

type Severity = 'Critical' | 'High' | 'Low' | 'Medium';
type Severityscale = Record<Severity, string>;

type Tokens = {
    Severity: Severityscale
    text: ColorScale
    bg: ColorScale
    box: ColorScale
    buttons: ColorScale
}

type SidebarContextType = {
    isSidebarOpen: boolean;
    isBroken: boolean;
    setBroken: (value:boolean) => void;
    toggleSidebar: () => void;
}


//all colors we will use in the app
export function tokens(mode: Mode): Tokens {
  if (mode === "dark") {
    return {
        Severity : {
            Critical: "#e53935",
            High: "#fb8c00",
            Medium: "#fdd835",
            Low: "#42a5f5"
        },
        text: {
            100: "#fcfcfd",
            200: "#f9f9fb",
            300: "#f6f7f9",
            400: "#f3f4f7",
            500: "#f0f1f5",
            600: "#c0c1c4",
            700: "#909193",
            800: "#606062",
            900: "#303031"
        },
        bg: {
            100: "#d1d1d3",
            200: "#a2a2a7",
            300: "#74747b",
            400: "#45454f",
            500: "#171723",
            600: "#12121c",
            700: "#0e0e15",
            800: "#09090e",
            900: "#050507"
        },
        box: {
        100: "#d2d2d5",
        200: "#a5a5ab",
        300: "#777881",
        400: "#4a4b57",
        500: "#1d1e2d",
        600: "#171824",
        700: "#11121b",
        800: "#0c0c12",
        900: "#060609"
        },
        buttons: {
        100: "#d6e3fa",
        200: "#aec7f5",
        300: "#85aaf0",
        400: "#5d8eeb",
        500: "#3472e6",
        600: "#2a5bb8",
        700: "#1f448a",
        800: "#152e5c",
        900: "#0a172e"
        }
        };
  }

  return {
    Severity : {
        Critical: "#e53935",
        High: "#fb8c00",
        Medium: "#fdd835",
        Low: "#42a5f5"
    },
    text: {
        100: "#d4d4d4",
        200: "#a9a9a9",
        300: "#7e7e7e",
        400: "#535353",
        500: "#282828",
        600: "#202020",
        700: "#181818",
        800: "#101010",
        900: "#080808"
    },

    bg: {
        100: "#fcfcfd",
        200: "#f9f9fb",
        300: "#f6f6f9",
        400: "#f3f3f7",
        500: "#f0f0f5",
        600: "#c0c0c4",
        700: "#909093",
        800: "#606062",
        900: "#303031"
    },
    box: {
        100: "#ffffff",
        200: "#fefeff",
        300: "#fefefe",
        400: "#fdfdfe",
        500: "#fdfdfe",
        600: "#cacacb",
        700: "#989898",
        800: "#656566",
        900: "#333333"
    },
    buttons: {
        100: "#d6e3fa",
        200: "#aec7f5",
        300: "#85aaf0",
        400: "#5d8eeb",
        500: "#3472e6",
        600: "#2a5bb8",
        700: "#1f448a",
        800: "#152e5c",
        900: "#0a172e"
    }
  };
}

//mui theme settings
export function themeSettings(mode: Mode) {
    const colors = tokens(mode);

    return {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                Tablet: 768,
                md: 900,
                lg: 1200,
                xl: 1536
            }
        },
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    primary: {
                        main: colors.text[500]
                    },
                    background: {
                        default: colors.bg[500]
                    },
                    secondary:{
                        main: colors.buttons[500]
                    }
                }:
                {
                    primary: {
                        main: colors.text[500]
                    },
                    background: {
                        default: colors.bg[500]
                    },
                    secondary:{
                        main: colors.buttons[500]
                    }
                })
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24           
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14           
            }
        }
    };
}


// context for color mode
export const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => {}
});


export function useMode(){
    const [mode, setMode] = useState<Mode>("dark");

    const colorMode = useMemo(() => ({
        toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light"))
    }), []);

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode] as const;
}

// context for toggling sidebar
export const SidebarContext = createContext<SidebarContextType>({
    isSidebarOpen: true,
    toggleSidebar: () => {},
    isBroken: true,
    setBroken: ()=>{},
});





