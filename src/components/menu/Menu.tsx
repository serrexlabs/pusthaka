import React, { PureComponent } from 'react';
import AddBookMenuItem from "./AddBookMenuItem";

class Menu extends PureComponent {
    render () {
        return (
            <div className="left-side-menu">
                <div className="slimscroll-menu">

                    <a href="#" className="logo text-center">
                       <h2>Logo</h2>
                    </a>

                    <ul className="metismenu side-nav mm-show">

                        <li className="side-nav-title side-nav-item">Collections</li>

                        <li className="side-nav-item mm-active">

                            <ul className="side-nav-second-level mm-collapse mm-show" aria-expanded="false">
                                <li className="mm-active">
                                    <a href="#" className="active">Ecommerce</a>
                                </li>
                                <li>
                                    <a href="#">CRM</a>
                                </li>
                                <li>
                                    <a href="#">Projects</a>
                                </li>
                            </ul>
                        </li>

                        <li className="side-nav-item">
                            <a href="javascript: void(0);" className="side-nav-link">
                                <i className="dripicons-view-apps"/>
                                <span> Apps </span>
                            </a>
                        </li>

                        <li className="side-nav-title side-nav-item mt-1">Authors</li>

                        <li className="side-nav-item">
                            <a href="javascript: void(0);" className="side-nav-link">
                                <i className="dripicons-view-apps"/>
                                <span> Author 1</span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href="javascript: void(0);" className="side-nav-link">
                                <i className="dripicons-view-apps"/>
                                <span> Author 2</span>
                            </a>
                        </li>

                    </ul>

                   {/* <ul className="metismenu side-nav">
                        <AddBookMenuItem/>
                    </ul>

                    <ul className="metismenu side-nav">

                        <li className="side-nav-item">
                            <a href="/" className="side-nav-link">
                                <i className="mdi mdi-radio-tower"/>
                                <span> My Podcasts </span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href={"#"} className="side-nav-link">
                                <i className=" mdi mdi-apple-safari"/>
                                <span> Discover </span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href={"*"} className="side-nav-link" >
                                <i className=" mdi mdi-progress-clock"/>
                                <span>What's new!</span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href="#"  className="side-nav-link" >
                                <i className="mdi mdi-play-circle-outline"/>
                                <span>In progress</span>
                            </a>
                        </li>
                    </ul>*/}

                    <div className="clearfix"/>

                </div>
            </div>
        );
    }
}

export default Menu;
