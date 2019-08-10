import  React, { useState } from "react";
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/objects';
import {
    LayoutManager,
    NavigationProvider,
    ThemeProvider,
} from '@atlaskit/navigation-next';
import { navTheme } from '../../theme';
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
                globalNavigation={()=> <Global />}
                productNavigation={() => null}
                containerNavigation={() => null}
            >
            </LayoutManager>
        </ThemeProvider>
    </NavigationProvider>
);
