import React, { Component } from 'react';

import { Platform, StyleSheet, Text, TouchableHighlight, View, Button } from 'react-native';

import IconButton from '../iconButton/IconButton';
import Control from '../control/Control';

const styles = StyleSheet.create({
    icon: {
        borderRadius: 75,
        color: '#B7B7B7'
    }
});


class BizagiCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props.value || 0 };
    }

    _minusOne = () => {
        let val = this.state.value == 0 ? 0 : this.state.value - 1;
        this.setState({ value: val });
    }
    _plusOne = () => {
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        return (
            <Control style={{borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#DEDEDE', paddingTop: 5,  paddingBottom: 0}} label={<Text style={{ fontSize: 12, fontWeight: '600' }}>Quantity request</Text>}>
                <View style={{flex: 1, flexDirection: 'row', marginLeft: -16}}>
                    <IconButton size={25} style={styles.icon} name='remove' onPress={this._minusOne} />
                    <Text style={{ fontSize: 36, fontWeight: '600', color: '#295d7b' }}>{this.state.value}</Text>
                    <IconButton size={25} style={styles.icon} name='add' onPress={this._plusOne} />
                </View>
            </Control>
        );
    }
}

export default BizagiCounter;