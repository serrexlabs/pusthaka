import React, { PureComponent } from 'react';
import './App.css';
import './Icons.css';

import MainLayout from "./layouts/MainLayout";

class App extends PureComponent {
    render() {
        return (
           <MainLayout>
               <h1>
                   Hello I'm from react world!!!!!! yoo
               </h1>
           </MainLayout>
        );
    }
}

export default App;
