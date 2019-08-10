import React ,{useState} from "react";
import GlobalNavigation from "@atlaskit/global-navigation";
import EmojiAtlassianIcon from "@atlaskit/icon/glyph/emoji/objects";
import CreateDrawerContent from "./CreateDrawerContent";

const Global = () => {
    const [isCreateDrawer, openCreateDrawer] = useState(false);

    return (
        <GlobalNavigation
            productIcon={EmojiAtlassianIcon}
            productHref="#"
            onProductClick={() => console.log('product clicked')}

            onCreateClick={() => { openCreateDrawer(true) }}
            isCreateDrawerOpen={isCreateDrawer}
            createDrawerContents={ () => (<CreateDrawerContent />)}
            onCreateDrawerClose={() => openCreateDrawer(false)}
            onCreateDrawerCloseComplete={()=> console.log("closed")}


            onSearchClick={() => console.log("search")}
            onSettingsClick={() => console.log('settings clicked')}
            loginHref="#login"
        />
    );
};

export default Global;