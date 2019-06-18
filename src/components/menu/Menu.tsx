import React, { PureComponent } from 'react';
import AddBookMenuItem from "./AddBookMenuItem";

class Menu extends PureComponent {
    render () {
        return (
            <div className="left-side-menu">
                <div className="slimscroll-menu">

                    <a href="#" className="logo text-center">
                        <span className="logo-sm">
                           <img src="assets/images/logo_sm.png" alt="" height="40" />
                        </span>
                    </a>

                    <ul className="metismenu side-nav">
                        {/*<SearchMenuItem/>*/}
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
                    </ul>

                    <div className="clearfix"/>

                </div>
            </div>
        );
    }
}

export default Menu;
