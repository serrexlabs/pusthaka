import Action from "../types/Action";

const PREFIX = '@@upload/';
export const OPEN_FILE_WINDOW = `${PREFIX}OPEN_FILE_WINDOW`;

export function openWindow(): Action {
    return {
        type: OPEN_FILE_WINDOW
    }
}