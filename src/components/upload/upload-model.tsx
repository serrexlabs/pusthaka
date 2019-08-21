import React, { useEffect } from "react";
import { remote } from "electron";
import UploadService from "../../services/upload-service";
import { getService } from "../../services/get-service";
import { event } from "../../core/event";
import {
  BOOK_UPLOAD_STARTED,
  NEW_BOOKS_HAS_ADDED,
  OPEN_FILE_WINDOW_REQUESTED,
} from "../../events/upload-events";

export default function UploadModel() {
  const uploadService: UploadService = getService("UploadService");

  async function handleBookUpload() {
    const files = await remote.dialog.showOpenDialog({
      properties: ["openFile", "multiSelections"],
      filters: [{ name: "PDF", extensions: ["pdf"] }],
    });

    event.dispatch(BOOK_UPLOAD_STARTED);

    if (!files) {
      return;
    }

    await uploadService.upload(files);
    event.dispatch(NEW_BOOKS_HAS_ADDED);
  }

  useEffect(() => {
    event.subscribe(OPEN_FILE_WINDOW_REQUESTED, handleBookUpload);

    return () => {
      event.unsubscribe(OPEN_FILE_WINDOW_REQUESTED, handleBookUpload);
    };
  }, []);

  return <span>file model</span>;
}
