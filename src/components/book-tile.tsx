import React from "react";

interface Props {
  id: string;
  title: string;
  author?: string;
  path?: string;
  /* thumbnail: string; */
}

function BookTile(props: Props): JSX.Element {
  return (
    <div key={props.id} className="container__col-3" style={{ width: "200px" }}>
      <p className="title">{props.title}</p>
      <p>{props.author}</p>
      <img
        style={{ width: "100px" }}
        src={`file:///home/sanath/.config/pusthaka/thumbs/${props.id}.jpeg`}
        alt=""
      />
    </div>
  );
}

export default BookTile;
