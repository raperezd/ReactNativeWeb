import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, ListView, TouchableHighlight } from 'react-native';
import { Button, List } from 'native-base';
/* import Icon from 'react-native-vector-icons/Feather';
import { BizagiGridItem } from './BizagiGridItem'; */
import datas from '../../data/gridData';
import Collapsible from '../collapsible/Collapsible';
//import BizagiCard from './BizagiCard';

const styles = StyleSheet.create({
    deleteButton: {
        margin: 2,
        backgroundColor: '#d04454',
        borderRadius: 4,
        elevation: 0,
    },
});

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            // basic: true,
            listViewData: datas,
        };
    }

    static propTypes = {
        onItemSelected: PropTypes.func
    }

    static defaultProps = {
        onItemSelected: (item) => { }
    }

    addNewItem(){
        let randNumber =  Math.floor(Math.random() * this.state.listViewData.length);
        const newData = [...this.state.listViewData];

        newData.unshift(this.state.listViewData[randNumber]);
        this.setState({ listViewData: newData });
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({ listViewData: newData });
    }
    render() {
        //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Collapsible expanded={true} bgColor="#DEDEDE" title="Supplies to request" type="subTitle">
            </Collapsible>
        );
    }
}
