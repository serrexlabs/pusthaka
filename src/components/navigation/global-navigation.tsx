import React, { useEffect, useState } from "react";
import GlobalNavigation from "@atlaskit/global-navigation";
import EmojiAtlassianIcon from "@atlaskit/icon/glyph/emoji/objects";
import CreateDrawerContent from "./create-drawer-content";
import { event } from "../../core/event";
import { BOOK_UPLOAD_STARTED } from "../../events/upload-events";

const Global = () => {
  const [isCreateDrawer, setIsCreateDrawer] = useState(false);

  function closeDrawer() {
    setIsCreateDrawer(false);
  }

  useEffect(() => {
    event.subscribe(BOOK_UPLOAD_STARTED, closeDrawer);
    return () => {
      event.unsubscribe(BOOK_UPLOAD_STARTED, closeDrawer);
    };
  }, []);

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
