import React from 'react';
import {
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    Animated
} from 'react-native';

import { Button, Icon } from 'native-base';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);

export default class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        if (props.expanded) {
            this.state = {
                h: "auto",
                he: new Animated.Value(),
                expanded: props.expanded,
                icon: "arrow-dropdown"
            };
        } else {
            this.state = {
                h: 0,
                he: new Animated.Value(0),
                expanded: props.expanded,
                icon: "arrow-dropright"
            };
        }
    }

    _onPress = () => {
        // Linear with easing
        var CustomLayoutLinear = {
            duration: 150,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.linear,
            },
        };
        if (this.state.expanded) {
            this.setState({ expanded: false, icon: "arrow-dropright" })
            LayoutAnimation.configureNext(CustomLayoutLinear);
            this.setState({
                h: 0
            });
        } else {
            this.setState({ expanded: true, icon: "arrow-dropdown" })
            LayoutAnimation.configureNext(CustomLayoutLinear);
            this.setState({
                h: "auto"
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={{ flexDirection: "row", borderBottomColor: '#DEDEDE', borderBottomWidth: 1 }}>
                        <View style={this.props.type == "title" ? styles.principal : styles.secondary}>
                            <Text style={this.props.type == "title" ? styles.title : styles.subTitle}>{this.props.title}</Text>
                        </View>
                        <View>
                            <Icon style={this.props.type == "title" ? styles.iconExapandPrincipal : styles.iconExapandSecondary} name={this.state.icon} />
                        </View>
                    </View>
                </TouchableOpacity>
                <Animated.View style={[styles.box, { height: this.state.h, backgroundColor: this.props.bgColor }]}>
                    {this.props.children}
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        paddingBottom: 20
    },
    box: {
        minHeight: "auto"
    },
    title: {
        color: "#555555",
        fontSize: 14,
        fontWeight: "bold",
        padding: 15,
        marginLeft: 2,
    },
    subTitle: {
        color: "#555555",
        fontSize: 12,
        fontWeight: "normal",
        padding: 5,
        marginLeft: 12,
    },
    principal: {
        flex: 1,
        height: 50,
        backgroundColor: '#F8F8F8',
        marginLeft: "auto",
    },
    secondary: {
        flex: 1,
        height: 30,
        backgroundColor: '#F8F8F8',
        marginLeft: "auto",
    },
    iconExapandPrincipal: {
        color: '#B7B7B7',
        fontWeight: "200",
        fontSize: 24,
        backgroundColor: '#F8F8F8',
        padding: 11.8,
    },
    iconExapandSecondary: {
        color: '#B7B7B7',
        fontWeight: 'normal',
        fontSize: 22,
        backgroundColor: '#F8F8F8',
        padding: 3.5,
        paddingRight: 11
    }
});