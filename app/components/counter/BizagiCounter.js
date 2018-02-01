import React, { Component } from 'react';

class BizagiCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value || 0 };
    }

    _minusOne (){
        let val = this.state.value == 0 ? 0 : this.state.value - 1;
        this.setState({ value: val });
    }
    _plusOne() {
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        return (
            <div className="counter">
                 <h2>Quantity request</h2>
                <span className="minusIcon" onClick={this._minusOne.bind(this)}>-</span>
                <span className="cantValue">{this.state.value}</span>
                <span className="plusIcon" onClick={this._plusOne.bind(this)}>+</span>
            </div>
        );
    }
}

export default BizagiCounter;