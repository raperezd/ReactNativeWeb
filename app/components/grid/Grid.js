import React, { Component } from 'react';
import Collapsible from '../collapsible/Collapsible';

import { List, Button } from 'framework7-react';
import GridItem from './GridItem';
import SmartGrid from './SmartGrid';


class Grid extends React.Component { 
    render() {
        const items = this.props.listViewData.map((element, index) => (<GridItem {...element} deleteRow={_ => this.props.deleteRow(element, index)} />));
        return (
            <Collapsible expanded={true} bgColor='#DEDEDE' title='Supplies to request' type='subTitle'>
            <Button className="col btn-add" onClick={_ => this.props.addNewItem()}>Add new item</Button>
            <List>
                {items}
            </List>
        </Collapsible>);
    }
}

export default SmartGrid(Grid);