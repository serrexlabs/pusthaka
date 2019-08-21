import Action from "../types/action";
import * as UploadActions from "../actions/upload-actions";

interface UploadState {
  isFileWindowOpen: boolean;
  newBooks: Array<string>;
}

const initialState: UploadState = {
  isFileWindowOpen: false,
  newBooks: [],
};

function openFileWindow(state: UploadState) {
  return {
    ...state,
    isFileWindowOpen: true,
  };
}
function newlyAddedBooks(state: UploadState, { books }: { books: Array<string> }) {
  return {
    ...state,
    isFileWindowOpen: false,
    newBooks: books,
  };
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case UploadActions.OPEN_FILE_WINDOW:
      return openFileWindow(state);
    case UploadActions.NEWLY_ADDED_BOOKS:
      return newlyAddedBooks(state, action.payload);
    default:
      return state;
  }
};
