import React, { PureComponent } from 'react';

import MainLayout from "./layouts/MainLayout";
import DashboardWindow from "./windows/DashboardWindow";

class App extends PureComponent {
    render() {
        return (
           <MainLayout>
               <DashboardWindow/>
           </MainLayout>
        );
    }
}

export default App;
