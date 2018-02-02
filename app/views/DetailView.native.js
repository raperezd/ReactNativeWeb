import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView, View, Button
} from 'react-native';
import { Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

import IconButton from '../components/iconButton/IconButton';
import { SimpleGridItem } from '../components/grid/GridItem';
import BizagiTab from '../components/bizagiTab/BizagiTab';
import Counter from '../components/counter/Counter';
import Control from '../components/control/Control';
import SliderEntry from '../components/carousel/SliderEntry';
import data from '../data/gridData';

import stylesC from './styles/BizagiCarouselStyles.style';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(28);
const itemHorizontalMargin = wp(0.5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

class DetailView extends React.Component {
    constructor(props){
        super(props);
        const { params } = this.props.match;
        this.element = data.find(el => el.id.toString() == params.id);

        this.entries = this.element.images.map((el)=> {
            return {illustration: el.uri}; 
        });

        this.state = {
            sliderWidth: 100,
            itemWidth: 100
        }
    }
    

    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }

    _openModal() {
        this.setState({ modalVisible: true });
    }

    _closeModal() {
        this.setState({ modalVisible: false });
    }

    render() {  
       
        return ( 
            <ScrollView style={styles.form}>
                <SimpleGridItem {...this.element} style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 7, paddingBottom: 7 }} />
                <Carousel
                    ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                    data={this.entries} 
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    hasParallaxImages={true}
                    firstItem={0}
                    inactiveSlideScale={0.85}
                    inactiveSlideOpacity={0.5}
                    enableMomentum={false}
                    containerCustomStyle={stylesC.slider}
                    contentContainerCustomStyle={stylesC.sliderContentContainer}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
                <Counter></Counter>
                <BizagiTab {...this.element}/> 
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: 'transparent',
        //height: 81
    },
    headerTitle: { 
        color: '#FFF',
        fontSize: 16,
        fontWeight: '200',
        alignItems: 'center',
    },
    headerSubTitle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '100'
    },
    headerBackTitle: {
        fontSize: 16,
        padding: 0,
        color: '#FFF'
    },
    bold: {
        fontWeight: '600'
    }
});

export default DetailView;