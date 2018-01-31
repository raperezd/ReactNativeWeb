import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ScrollView,

} from 'react-native';

import { Button } from 'native-base';

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


class Form extends React.Component {
    render() { 
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.form}>
                    {this.props.children}
                </ScrollView>      
                <View>
                    <Button full style={{ backgroundColor: '#295d7b' }}>
                        <Text style={{ color: '#FFF' }}>Request office supplies</Text>
                    </Button>
                </View>
            </View>
        )
    }
}
    
export default Form; 