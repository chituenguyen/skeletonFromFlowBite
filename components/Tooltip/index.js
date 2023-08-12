import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "next-themes";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const useStyles = makeStyles(() => ({
  customTooltip: {
    fontSize: 14,
    borderRadius: 4,
    fontFamily: "UniscoreSans",
  },
}));

function CustomTooltip({
  title,
  children,
}) {
  const classes = useStyles();

  return (
    <Tooltip title={title} classes={{ tooltip: classes.customTooltip }} placement="bottom-end">
      {children}
    </Tooltip>
  );
}

export default function ToggleColorMode({
  title,
  children,
}) {
  const {resolvedTheme} = useTheme()

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: resolvedTheme,
        },
      }),
    [resolvedTheme]
  );

  const themeWithOverrides = createTheme(theme, {
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: resolvedTheme === "dark" ? "black" : "#F2F6F9",
            color: resolvedTheme === "dark" ? "white" : "black",
            fontSize: 14,
            borderRadius: 4,
            fontFamily: "UniscoreSans",
            boxShadow: [
              resolvedTheme === "dark" ? "none" : "0px 2px 3px rgba(0, 0, 0, 0.1)",
            ],
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={themeWithOverrides}>
      <ColorModeContext.Provider value={resolvedTheme}>
        <div>
          <CustomTooltip title={title}>{children}</CustomTooltip>
        </div>
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
}
