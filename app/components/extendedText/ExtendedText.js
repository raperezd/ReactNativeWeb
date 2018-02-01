import React, { Component } from 'react';

class ExtendedText extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value };
    }

    render() {
        return (
            <input value={this.props.value} />
        );
    }
}

export default ExtendedText;