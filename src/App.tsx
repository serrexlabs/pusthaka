import React from "react";
import Page from "@atlaskit/page";
import { Link } from "@reach/router";
import { Nav } from "./components/navigation";

function App(props: any): JSX.Element {
  return (
    <Page navigation={<Nav />}>
      <nav>
        <Link to="home">Home</Link>
        <Link to="dashboard">Dashboard</Link>
      </nav>

      {props.children}
    </Page>
  );
}

export default App;
