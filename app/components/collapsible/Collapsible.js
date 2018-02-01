import React from 'react';

export default class Collapsible extends React.Component {
    render() {
        return (
            <div className='m-collapsible'>
                <div className='m-collapsible-header'>
                    <div className='m-collapsible-title'>
                        <span>{this.props.title}</span>
                    </div>
                    <div className='m-collapsible-icon'>
                        <a/>
                    </div>
                </div>
            
                <div className='m-collapsible-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}