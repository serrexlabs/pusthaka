import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { remote } from "electron";
import UploadService from "../../services/upload-service";
import { getService } from "../../services/get-service";

export default function UploadModel() {
  const uploadService: UploadService = getService(UploadService.name);
  const { isFileWindowOpen } = useSelector((state: any) => state.upload);

  useEffect(() => {
    async function handleBookUpload() {
      const result = await remote.dialog.showOpenDialog({
        properties: ["openFile", "multiSelections"],
        filters: [{ name: "PDF", extensions: ["pdf"] }],
      });

      if (!result) {
        return;
      }
      await uploadService.upload(result);
    }

    if (isFileWindowOpen) {
      handleBookUpload();
    }
  });

  return <span>file model</span>;
}
