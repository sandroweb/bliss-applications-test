type ColorVariants = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

type Grey = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
};

export type Palette = {
  common: {
    black: string;
    white: string;
  };
  error: ColorVariants;
  grey: Grey;
  info: ColorVariants;
  secondary: ColorVariants;
  success: ColorVariants;
  primary: ColorVariants;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
  };
  warning: ColorVariants;
};
