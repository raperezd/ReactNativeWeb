import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Swiper, SwiperSlide } from 'framework7-react';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            centerMode:true,
            adaptiveHeight:false,
            controls:false
        };
        return (
            <Swiper params={{speed:500, slidesPerView: 3, spaceBetween: 20}}>
                {this.props.images.map(image => (
                    <SwiperSlide>  <div className="contentImg"><img width="200" src={image.uri} alt="" /></div></SwiperSlide>
                ))}
            </Swiper>
        )
    }
}