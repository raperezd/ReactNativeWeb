import React, { Component } from 'react';
import styles from './Form.scss';

class Form extends React.Component {
    render() { 
        return (
            <div className='m-form'>
                <div className='m-form-container'>
                    { this.props.children }
                </div>
                <div className='m-form-button-container'>
                    <button>Request office supplies</button>
                </div>
            </div>
        )
    }
}
    
export default Form; 