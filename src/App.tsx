import React, { Fragment } from "react";
import Page from "@atlaskit/page";
import { Link } from "@reach/router";
import { Nav } from "./components/navigation";
import UploadModel from "./components/upload/upload-model";

function App(props: any): JSX.Element {
  return (
    <Fragment>
      <Page navigation={<Nav />}>
        <nav>
          <Link to="home">Home</Link>
          <Link to="dashboard">Dashboard</Link>
        </nav>

        {props.children}
      </Page>
      <UploadModel />
    </Fragment>
  );
}

export default App;
