
import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView, 
    View
} from 'react-native';

import { Link } from 'react-router-native';

/* import { Button, Card, CardItem, Body, List, ListItem } from 'native-base';

import Icon from 'react-native-vector-icons/Feather';
import BizagiGroup from './components/BizagiGroup';
import BizagiControl from './components/BizagiControl';
import BizagiExtendedText from './components/BizagiExtendedText';
import BizagiGrid from './components/BizagiGrid';
import ImageHeader from './components/ImageHeader';
import TouchableIconBtn from './components/TouchableIconBtn';
import BizagiCollapsible from './components/BizagiCollapsible'; */


const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF'
    },
    header: {
        backgroundColor: 'transparent'
        //height: 81
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '200'
    },
    headerSubTitle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '100'
    },
    headerBackTitle: {
        fontSize: 16,
        padding: 16,
        color: '#FFF'
    }
});

class FirstForm extends React.Component {
    render() {
        const match = this.props.match;
        return (
            <View>
            <Link to={`/FirstForm/${Math.random()}`}>
                <Text>Click again {match.params.id}</Text>
            </Link>
            </View>
        );
    }
}

export default FirstForm; 