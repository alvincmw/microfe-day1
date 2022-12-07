import React from 'react';
import {parent} from './styles';

const NavigationBar = (props) => {
    return (
        <div style={parent}>{props.children}</div>
    );
};

export default NavigationBar;