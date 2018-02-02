import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Icon } from 'native-base';

import {
    StyleSheet,
    TouchableNativeFeedback,
    View,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    icon: {
        color: '#000',
        height: 24,
        width: 24,
        margin: 16
    }
})

class IconButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableNativeFeedback style={{borderRadius: 75}}
                onPress={this.props.onPress.bind(this)}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{ backgroundColor: 'transparent', borderRadius: 75}}>
                    <Icon name={this.props.name} style={[
                        styles.icon,
                        !!this.props.style && this.props.style
                    ]}
                        size={this.props.size} />
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default IconButton;