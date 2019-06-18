import React, {Component} from 'react';

const MainLayout: any = (props: {children: Component }) => (
 <div className={'containerX'}>
     {props.children}
 </div>
);

export default MainLayout;