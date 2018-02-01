import React, { Component } from 'react';
import styles from './Control.scss';

const Control = (props) => (
    <div className='m-control'>
        <div className='m-label'>
            <span>{props.label}</span>
        </div>
        <div>{props.children}</div>
    </div>
)

export default Control; 