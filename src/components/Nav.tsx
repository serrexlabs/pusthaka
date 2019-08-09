import * as React from "react";
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/objects';
import {
    LayoutManager,
    NavigationProvider,
    ThemeProvider,
} from '@atlaskit/navigation-next';
import GlobalNavigation from '@atlaskit/global-navigation';
import { navTheme } from '../theme';
import Drawer from '@atlaskit/drawer';
import {useState} from "react";

const { dialog } = require('electron').remote;

const DrawerContent = ({
                           drawerTitle,
                           drawerBody,
                       }: {
    drawerTitle: string,
    drawerBody: string,
}) => (
    <div>
        <h1>{drawerTitle}</h1>
        <button> Upload book</button>

        <button> Create collection</button>

    </div>
);

const Global = () => {
    const [isCreateDrawer, openCreateDrawer] = useState(false);

    const renderDrawer = () => (
        <DrawerContent
            drawerTitle="Starred drawer"
            drawerBody="Can be controlled by passing the onStarredClick prop"
        />
    );

    return (
        <GlobalNavigation
            productIcon={EmojiAtlassianIcon}
            productHref="#"
            onProductClick={() => console.log('product clicked')}
            onCreateClick={() => {
  /*              dialog.showOpenDialog({ properties: ['openFile', 'openDirectory', 'multiSelections'], filters: [
                        { name: 'Books', extensions: ['pdf'] },
                    ]})*/
               // openCreateDrawer(true);
                openCreateDrawer(true)
            }}
            isCreateDrawerOpen={isCreateDrawer}
            createDrawerContents={renderDrawer}
            onCreateDrawerClose={() => openCreateDrawer(false)}
            onCreateDrawerCloseComplete={()=> console.log("closed")}


            onSearchClick={() => console.log("search")}
            onSettingsClick={() => console.log('settings clicked')}
            loginHref="#login"
        />
    );
}

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
