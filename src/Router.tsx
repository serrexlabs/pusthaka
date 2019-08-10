import React from "react";
import { Router, createMemorySource, createHistory, LocationProvider } from "@reach/router";
import App from "./App";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";

const source = createMemorySource("home");
const history = createHistory(source);

function MainRouter(): JSX.Element {
  return (
    <LocationProvider history={history}>
      <App>
        <Router>
          <HomePage path="home" />
          <CollectionPage path="dashboard" />
        </Router>
      </App>
    </LocationProvider>
  );
}

export default MainRouter;
