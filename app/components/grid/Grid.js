import React, { Component } from 'react';
import Collapsible from '../collapsible/Collapsible';

import { List} from 'framework7-react';

import GridItem from './GridItem';
import data from '../../data/gridData';


export default class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listViewData: data,
        };
    }

    addNewItem(){
        let randNumber =  Math.floor(Math.random() * this.state.listViewData.length);
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
        const items =this.state.listViewData.map((element, index) => (<GridItem {...element} deleteRow={_ => this.deleteRow(element, index)} />));
        return (
            <Collapsible expanded={true} bgColor='#DEDEDE' title='Supplies to request' type='subTitle'>
                <List>
                    {items}
                </List>
            </Collapsible>
        );
    }
}
