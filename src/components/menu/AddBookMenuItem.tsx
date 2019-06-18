import React, { PureComponent } from 'react';

class AddBookMenuItem extends PureComponent {
    render () {
        return (
            <li className="side-nav-item">
                    <i className="mdi mdi-plus"/>
                    <span> Add Book </span>
            </li>
        );
    }
};

export default AddBookMenuItem;

