import Action from "../types/action";

const PREFIX = "@@upload/";
export const OPEN_FILE_WINDOW = `${PREFIX}OPEN_FILE_WINDOW`;
export const NEWLY_ADDED_BOOKS = `${PREFIX}NEWLY_ADDED_BOOKS`;

export function openWindow(): Action {
  return {
    type: OPEN_FILE_WINDOW,
  };
}

export function newlyBooksAdded(books: Array<string>): Action {
  return {
    type: NEWLY_ADDED_BOOKS,
    payload: {
      books,
    },
  };
}
