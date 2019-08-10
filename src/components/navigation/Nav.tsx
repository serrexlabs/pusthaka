import React from "react";
import { LayoutManager, NavigationProvider, ThemeProvider } from "@atlaskit/navigation-next";
import { navTheme } from "../../theme";
import Global from "./GlobalNavigation";

// @TODO move into separate component

export default () => (
  <NavigationProvider>
    <ThemeProvider
      theme={(theme: any) => ({
        ...theme,
        mode: navTheme,
      })}
    >
      <LayoutManager
        globalNavigation={() => <Global />}
        productNavigation={() => null}
        containerNavigation={() => null}
      />
    </ThemeProvider>
  </NavigationProvider>
);
