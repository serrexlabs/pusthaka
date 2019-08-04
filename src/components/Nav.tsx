import * as React from "react";
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/objects';
import {
    LayoutManager,
    NavigationProvider,
    ThemeProvider,
} from '@atlaskit/navigation-next';
import GlobalNavigation from '@atlaskit/global-navigation';
import { navTheme } from '../theme';
const { dialog } = require('electron').remote;

const Global = () => (
    <GlobalNavigation
        productIcon={EmojiAtlassianIcon}
        productHref="#"
        onProductClick={() => console.log('product clicked')}
        onCreateClick={() => {
            dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'], filters: [
                    { name: 'Books', extensions: ['pdf'] },
                ]})
        }}
        onSearchClick={() => console.log('search clicked')}
        onSettingsClick={() => console.log('settings clicked')}
        loginHref="#login"
    />
);

export default () => (
    <NavigationProvider>
        <ThemeProvider
            theme={(theme: any) => ({
                ...theme,
                mode: navTheme,
            })}
        >
        <LayoutManager
            globalNavigation={Global}
            productNavigation={() => null}
            containerNavigation={() => null}
        >
        </LayoutManager>
        </ThemeProvider>
    </NavigationProvider>
);
