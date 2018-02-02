import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { StyleSheet, ListView, TouchableHighlight } from 'react-native';
import { Button, List, Icon } from 'native-base';
import { GridItem } from './GridItem'; 
import SmartGrid from './SmartGrid'; 
import Collapsible from '../collapsible/Collapsible';
import Card from '../card/Card';

const styles = StyleSheet.create({
    deleteButton: {
        margin: 2,
        backgroundColor: '#d04454',
        borderRadius: 4,
        elevation: 0,
    },
});
  
class Grid extends Component {
    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return (
            <Collapsible expanded={true} bgColor='#DEDEDE' title='Supplies to request' type='subTitle'>
                <TouchableHighlight onPress={_ => this.props.addNewItem()} >
                    <Card label="Add suplies to request." />
                </TouchableHighlight>
                <List
                    style={{ backgroundColor: 'transparent', padding: 12, zIndex: 0 }}
                    swipeRowStyle={{ backgroundColor: 'transparent' }}
                    dataSource={ds.cloneWithRows(this.props.listViewData)}
                    renderRow={data => (<GridItem {...data} />)}

                    renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                        (
                            <Button style={styles.deleteButton} full danger
                                onPress={_ => { 
                                    rowMap[`${secId}${rowId}`].props.closeRow();
                                    this.props.deleteRow(rowMap, rowId);
                                    }} >
                                 <Icon active name="trash" />
                            </Button>
                        )
                    }
                    rightOpenValue={-50}
                />
            </Collapsible>
        );
    }
}

export default SmartGrid(Grid);