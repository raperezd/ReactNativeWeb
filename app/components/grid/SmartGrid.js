import React, { Component } from 'react';
import data from '../../data/gridData';


let SmartGrid = GridDumb => class extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.state = {
            listViewData: data,
        };
    }

    addNewItem() {
        let randNumber = Math.floor(Math.random() * this.state.listViewData.length);
        const newData = [...this.state.listViewData];
        newData.unshift(this.state.listViewData[randNumber]);
        this.setState({ listViewData: newData });
    }

    deleteRow(element, index) {
        const newData = [...this.state.listViewData];
        newData.splice(index, 1);
        this.setState({ listViewData: newData });
    }

    render() {
        const newProps = {
            listViewData: this.state.listViewData,
            deleteRow: this.deleteRow,
            addNewItem: this.addNewItem
        }
        return <GridDumb {...newProps} {...this.props} />;
    }
}

export default SmartGrid;