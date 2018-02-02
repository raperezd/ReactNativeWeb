import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  Slider from 'react-slick';
import './BizagiCarousel.scss';
import 'bootstrap/dist/css/bootstrap.css';
import './lib/lib.css';

export default class BizagiCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            centerMode:true,
            adaptiveHeight:false
        };
        return (
            <Slider {...settings}>
                <div className="contentImg"><img width="200" src="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_25_acoustic_noise_cancelling_headphones-apple_devices/product_silo_images/qc25_apple_black_EC_hero_010716.psd/_jcr_content/renditions/cq5dam.web.320.320.png" alt="" /></div>
               <div className="contentImg"><img width="200" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Bose_QuietComfort_25_Acoustic_Noise_Cancelling_Headphones_with_Carry_Case.jpg/800px-Bose_QuietComfort_25_Acoustic_Noise_Cancelling_Headphones_with_Carry_Case.jpg" alt="" /></div>
               <div className="contentImg"><img width="200" src="https://cnet3.cbsistatic.com/img/CMtwXq3nwIw7CcmdHCMezivqX3M=/936x527/2015/09/01/7a7111c2-c2f7-4383-ac01-644fca35adfd/11bose-soundlink-around-ear-wireless-headphones-ii.jpg" alt="" /></div>
               <div className="contentImg"><img width="200" src="https://cdn.blessthisstuff.com/imagens/stuff/bose-custom-quietcomfort-15-headphones.jpg" alt="" /></div>
               <div className="contentImg"><img width="200" src="https://cdn.blessthisstuff.com/imagens/stuff/bose-custom-quietcomfort-15-headphones-4.jpg" alt="" /></div>
            </Slider>
        )
    }
}

