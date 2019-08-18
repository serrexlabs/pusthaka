import React from "react";
import { userDataPath } from "../core/config";

interface Props {
  id: string;
  title: string;
  author?: string;
  path?: string;
  /* thumbnail: string; */
}

function imagePath(id: string) {
  return `file://${userDataPath}/thumbs/${id}.jpeg`;
}

function BookTile(props: Props): JSX.Element {
  return (
    <div key={props.id} className="container__col-3" style={{ width: "200px" }}>
      <p className="title">{props.title}</p>
      <p>{props.author}</p>
      <img style={{ width: "100px" }} src={imagePath(props.id)} alt="" />
    </div>
  );
}

export default BookTile;
