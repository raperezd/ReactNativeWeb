import React, { Component } from 'react';
import styles from './ImageHeader.scss';

const ImageHeader = props => (
    <header className='m-header'>
        <img/> 
        {props.children}
    </header> 
);

export default ImageHeader;