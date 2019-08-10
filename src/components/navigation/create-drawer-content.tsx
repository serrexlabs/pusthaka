import { useDispatch } from "react-redux";
import * as React from "react";
import { openWindow } from "../../store/actions/upload-actions";

const CreateDrawerContent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Create</h1>
      <button id="upload-book-button" type="button" onClick={() => dispatch(openWindow())}>
        Upload book
      </button>

      <button type="button"> Create collection</button>
    </div>
  );
};

export default CreateDrawerContent;
