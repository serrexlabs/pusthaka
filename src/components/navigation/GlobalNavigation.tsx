import React, { useState } from "react";
import GlobalNavigation from "@atlaskit/global-navigation";
import EmojiAtlassianIcon from "@atlaskit/icon/glyph/emoji/objects";
import CreateDrawerContent from "./CreateDrawerContent";

const Global = () => {
  const [isCreateDrawer, openCreateDrawer] = useState(false);

  return (
    <GlobalNavigation
      productIcon={EmojiAtlassianIcon}
      productHref="#"
      onProductClick={() => null}
      onCreateClick={() => openCreateDrawer(true)}
      isCreateDrawerOpen={isCreateDrawer}
      createDrawerContents={() => <CreateDrawerContent />}
      onCreateDrawerClose={() => openCreateDrawer(false)}
      onCreateDrawerCloseComplete={() => null}
      onSearchClick={() => null}
      onSettingsClick={() => null}
      loginHref="#login"
    />
  );
};

export default Global;
