
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Icon } from 'native-base';

import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';

const styles = StyleSheet.create({
    card: {
        height: 60,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F8F8F8",
        borderRadius: 5
    },
    icon: {
        fontSize: 25,
        color: "#2C5D79",
        fontWeight: "normal"
    },
    desc: {
        flex: 1,
        textAlign: 'center',
        color: "gray",
        fontWeight: "normal"
    }
});


class BizagiCard extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.desc}>{this.props.label}</Text>
                <Icon style={styles.icon} name="add-circle" />
            </View>
        );
    }
}

export default BizagiCard;