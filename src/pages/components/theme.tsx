import { PaletteMode } from "@mui/material";

export const getDesing = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? {} : {}),
  },
});
