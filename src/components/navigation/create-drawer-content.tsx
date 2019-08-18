import * as React from "react";
import { event } from "../../core/event";
import { OPEN_FILE_WINDOW_REQUESTED } from "../../events/upload-events";

function onClick() {
  event.dispatch(OPEN_FILE_WINDOW_REQUESTED);
}

const CreateDrawerContent = () => {
  return (
    <div>
      <h1>Create</h1>
      <button id="upload-book-button" type="button" onClick={onClick}>
        Upload book
      </button>

      <button type="button"> Create collection</button>
    </div>
  );
};

export default CreateDrawerContent;
