import React, {Component} from 'react';

const MainLayout = (props: {children: Component}) => (
 <div className={'containerX'}>
     {props.children}
 </div>
);

export default MainLayout;