import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "next-themes";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const useStyles = makeStyles((theme) => ({
  customTooltip: {
    fontSize: 14,
    borderRadius: 4,
    fontFamily: "UniscoreSans",
  },
}));

function CustomTooltip({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const classes = useStyles();

  return (
    <Tooltip title={title} classes={{ tooltip: classes.customTooltip }}>
      {children}
    </Tooltip>
  );
}

export default function ToggleColorMode({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const {resolvedTheme} = useTheme()

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          resolvedTheme,
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
