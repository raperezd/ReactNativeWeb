import React, { Component } from 'react';
import styles from './Form.scss';
import { Toolbar } from 'framework7-react';

class Form extends React.Component {
    render() {
        return (
            <div className='m-form'>
                <div className='m-form-container'>
                    {this.props.children}
                </div>
                <Toolbar bottom className='m-form-button-container'>
                    <span>Request supplies</span>
                </Toolbar>
            </div>

        )
    }
}

export default Form; 