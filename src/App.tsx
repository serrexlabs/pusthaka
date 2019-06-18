import React, { PureComponent } from 'react';
import MainLayout from "./layout/MainLayout";

class App extends PureComponent {
    render() {
        return (
           <MainLayout>
               <h1>
                   Hello I'm from react world!!!!!!
               </h1>
           </MainLayout>
        );
    }
}

export default App;
