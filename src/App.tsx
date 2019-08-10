import React from "react";
import { Nav } from "./components/navigation";
import Page from '@atlaskit/page';
import { Link } from "@reach/router"

function App(props: any) {
    return  (
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
