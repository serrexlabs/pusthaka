import Action from "../types/Action";
import * as UploadActions from "../actions/uploadActions";

interface UploadState {
  isFileWindowOpen: boolean;
}

const initialState: UploadState = {
  isFileWindowOpen: false,
};

function openFileWindow(state: UploadState) {
  return {
    ...state,
    isFileWindowOpen: true,
  };
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case UploadActions.OPEN_FILE_WINDOW:
      return openFileWindow(state);
    default:
      return state;
  }
};
