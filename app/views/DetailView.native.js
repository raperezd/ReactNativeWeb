import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    ScrollView, 
    View
} from 'react-native';

import { Link } from 'react-router-native';

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