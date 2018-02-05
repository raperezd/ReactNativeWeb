import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Button, StyleSheet, LayoutAnimation } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../../views/styles/BizagiCarouselStyles.style';
import { Icon } from 'native-base';

const stylesModal = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContainer: {
        backgroundColor: '#FBFBFB',
        borderRadius: 10,
        elevation: 2
    },

    header: {
        flexDirection: "row",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
    },
    title: {
        flex: 1,
        borderTopLeftRadius: 10,
        color: "#555555",
        fontSize: 14,
        fontWeight: "bold",
        padding: 10
    },
    closeButton: {
        borderTopRightRadius: 10,
        padding: 10,
    },
    image: {
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    }
});

export default class SliderEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        }
    }


    get image() {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: illustration }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={[styles.image, { width: 100, height: 100 }]}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
                <Image
                    source={{ uri: illustration }}
                    style={[styles.image, { width: 100, height: 100 }]}
                />
            );
    }

    _openModal(as) {
        this.setState({ modalVisible: true });
    }

    _closeModal() {
        this.setState({ modalVisible: false });
    }

    render() {
        const { data: { title, subtitle, illustration }, even } = this.props;
        var CustomLayoutSpring = {
            duration: 500,
            create: {
                type: LayoutAnimation.Types.spring,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 2,
            },
            update: {
                type: LayoutAnimation.Types.spring,
                springDamping: 2,
            },
        };

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => this._openModal(this.image)}
            >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    {this.image}
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <Modal
                    visible={this.state.modalVisible}
                    animationType={'fade'}
                    transparent={true}
                    onRequestClose={() => this._closeModal()}
                >
                    <View style={stylesModal.modalOverlay}>
                        <View style={stylesModal.modalContainer}>
                            <View style={stylesModal.header}>
                                <Text style={stylesModal.title}></Text>
                                <TouchableOpacity
                                    onPress={() => this._closeModal()}
                                    style={stylesModal.closeButton}
                                >
                                    <Icon size={23} name="close" />
                                </TouchableOpacity>
                            </View>
                            <Image
                                source={{ uri: illustration }}
                                style={[stylesModal.image, { width: 200, height: 200 }]}
                            />
                        </View>
                    </View>
                </Modal>
            </TouchableOpacity>
        );
    }
}
