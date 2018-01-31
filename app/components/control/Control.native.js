import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    control: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 7,
        paddingBottom: 4
    },
    label: { 
        paddingTop: 2,
        paddingBottom: 2 
    }
});

const Control = (props) => (
    <View style={[styles.control, !!props.style && props.style]}>
        <View>
            <Text style={[styles.label, { fontWeight: props.bold ? '600' : '200', fontSize: props.fontSize ? props.fontSize : 12}]}>{props.label}</Text>
        </View>
        <View>{props.children}</View>
    </View>
)

export default Control;