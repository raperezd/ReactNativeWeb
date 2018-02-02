import React, { Component } from 'react';

import Collapsible from '../components/collapsible/Collapsible';
import Form from '../components/form/Form';
import Span from '../components/span/Span';
import Grid from '../components/grid/Grid';
import Control from '../components/control/Control';
import ExtendedText from '../components/extendedText/ExtendedText';

import BizagiCounter from '../components/counter/BizagiCounter'
import BizagiCarousel from '../components/carousel/BizagiCarousel';
import BizagiTabs from '../components/tabs/BizagiTabs';
class DetailView extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    openTab(evt, cityName) {

    }
    render() {
        const match = this.props.match;
        return (
            <Form>
                <ul className="flex-container">
                    <li className="detailImg">
                        <img width="50" src="https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_25_acoustic_noise_cancelling_headphones-apple_devices/product_silo_images/qc25_apple_black_EC_hero_010716.psd/_jcr_content/renditions/cq5dam.web.320.320.png" alt="" />
                    </li>
                    <li className="detail">
                        <h4>Headphones</h4>
                        <span><b>Dimensions:</b>6.4 x 6.7 x 2.1 in</span>
                        <span><b>Deliver to:</b>Julio Ocaña</span>
                    </li>
                    <li className="flex-item">
                        <span className="time">Deliver in 3 days</span>
                    </li>
                </ul>

                <BizagiCarousel/>
                <hr size="1" />


                <div className="quantitySection">
                    <BizagiCounter />
                </div>

                <BizagiTabs/>
            </Form>
        );
    }
}


export default DetailView; 