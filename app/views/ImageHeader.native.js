import React, { Component } from 'react';

import { View, Image } from 'react-native';

const ImageHeader = props => (
    <View style={{ backgroundColor: '#295d7b', height: 50}}>
        <Image
            style={{
                flex: 1,
                position: 'absolute',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
            }}
            source={require('./images/header.png')}
        />
        {props.children}
    </View>
);

export default ImageHeader;