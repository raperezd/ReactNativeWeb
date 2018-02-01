import React, { Component } from 'react';

const Control = (props) => (
    <div>
        <div>
            <span>{props.label}</span>
        </div>
        <div>{props.children}</div>
    </div>
)

export default Control;