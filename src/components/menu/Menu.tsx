import React, { PureComponent } from 'react';
import AddBookMenuItem from "./AddBookMenuItem";

class Menu extends PureComponent {
    render () {
        return (
            <div className="left-side-menu">
                <div className="slimscroll-menu">

                    <a href="#" className="logo text-center mt-3">
                       <h2>Pusthaka</h2>
                    </a>
                    <ul className="metismenu side-nav mm-show mt-3">

                        <li className="side-nav-item">
                            <a href="javascript: void(0);" className="side-nav-link">
                                <i className="dripicons-time-reverse"/>
                                <span> Recent</span>
                            </a>
                        </li>

                        <li className="side-nav-title side-nav-item mt-2">Collections</li>

                        <li className="side-nav-item">
                            <a href="javascript: void(0);" className="side-nav-link">
                                <span> Collection one </span>
                            </a>
                        </li>

                        <li className="side-nav-item">
                            <a href="javascript: void(0);" className="side-nav-link">
                                <span> Collection two </span>
                            </a>
                        </li>

                        <li className="side-nav-title side-nav-item mt-4">Authors</li>

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
