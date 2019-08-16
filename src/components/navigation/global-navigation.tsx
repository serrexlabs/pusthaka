import React, { useState } from "react";
import GlobalNavigation from "@atlaskit/global-navigation";
import EmojiAtlassianIcon from "@atlaskit/icon/glyph/emoji/objects";
import CreateDrawerContent from "./create-drawer-content";

const Global = () => {
  const [isCreateDrawer, setIsCreateDrawer] = useState(false);

  return (
    <GlobalNavigation
      productIcon={EmojiAtlassianIcon}
      productHref="#"
      onProductClick={() => null}
      onCreateClick={() => setIsCreateDrawer(true)}
      isCreateDrawerOpen={isCreateDrawer}
      createDrawerContents={() => <CreateDrawerContent />}
      onCreateDrawerClose={() => setIsCreateDrawer(false)}
      onCreateDrawerCloseComplete={() => null}
      onSearchClick={() => null}
      onSettingsClick={() => null}
      loginHref="#login"
    />
  );
};

export default Global;
