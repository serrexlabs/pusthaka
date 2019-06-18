import React, {Component} from 'react';
import './MainLayout.css'
import Menu from "../components/menu/Menu";

const MainLayout: any = (props: { children: Component }) => (
    <div className="wrapper">
        <Menu/>

        <div className="content-page">
            <div className="content">
                <div className="container-fluid">

                    <div className="row">

                        <div className="col-12">
                            {props.children}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default MainLayout;
