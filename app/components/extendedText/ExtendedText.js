import React, { Component } from 'react';

class ExtendedText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
    }

    render() {
        return (
            <input className="control control-extentedText" placeholder="abc" value={this.props.value} />
        );
    }
}

export default ExtendedText;