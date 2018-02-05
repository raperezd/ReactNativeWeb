import React, { Component } from 'react';

import Control from '../components/control/Control';
import Carousel from '../components/carousel/Carousel';
import Counter from '../components/counter/Counter';
import ExtendedText from '../components/extendedText/ExtendedText';
import { View, Page, Toolbar, Link, Tabs, Tab } from 'framework7-react';
import data from '../data/gridData';

class DetailView extends React.Component {

    constructor(props) {
        super(props);
        let { route } = props;
        this.data = data.find(el => el.id.toString() == route.params.id);
    }
    openTab(evt, cityName) {

    }
    render() {
        const match = this.props.match;
        return (
            <div>
                <ul className="flex-container">
                    <li className="detailImg">
                        <img width="50" src={this.data.images[0].uri} alt="" />
                    </li>
                    <li className="detail">
                        <h4>{this.data.productName}</h4>
                        <span><b>Dimensions:</b>{this.data.dimensions}</span>
                        <span><b>Deliver to:</b>{this.data.deliverTo}</span>
                    </li>
                    <li className="flex-item">
                        <span className="time">{this.data.deliverTime}</span>
                    </li>
                </ul>
                <Carousel images={this.data.images} />
                <hr size="1" />
                <div className="quantitySection">
                    <Counter />
                </div>
                <hr size="1" />
                <Toolbar tabbar className='m-toolbar bz-tabs--header'>
                    <Link className="bz-tabs--link" tabLink="#tab1">Overview</Link>
                    <Link className="bz-tabs--link" tabLink="#tab2">Comments</Link>
                    <Link className="bz-tabs--link" tabLink="#tab3">Reviews</Link>
                </Toolbar>
                <Tabs tabbar swipeable>
                    <Tab id="tab1" className="active" active>
                        <div className="overrideContent">
                            <h3>Dimensions / weight without the cable</h3>
                            <span><b>Headphones:</b>7.1" H x 6.7" W x 3.2" D (8.3 oz) </span>
                            <span><b>Audio cable:</b>47.2"</span>
                            <span><b>USB cable:</b>12</span>
                            <h3>What’s in the box</h3>
                            <ul>
                                <li>QC35 wireless headphones II</li>
                                <li>USB charging cable</li>
                                <li>Audio cable</li>
                                <li>Carrying case</li>
                                <li>SoundLink® Mini Bluetooth speaker II</li>
                                <li>Charging cradle</li>
                                <li>Wall charger</li>
                                <li>Cable</li>
                                <li>Wireless range up to 30 ft (9 m)</li>
                                <li>Battery life up to 10 hrs</li>
                                <li>Power rating: 100 – 240V</li>
                                <li>3.5 mm auxiliary</li>
                                <li>Micro-B USB port</li>
                            </ul>
                        </div></Tab>
                    <Tab id="tab2">
                        <div className="overrideContent">
                            <h3>Dimensions / weight without the cable</h3>
                            <span><b>Headphones:</b>7.1" H x 6.7" W x 3.2" D (8.3 oz) </span>
                            <span><b>Audio cable:</b>47.2"</span>
                            <span><b>USB cable:</b>12</span>
                            <h3>What’s in the box</h3>
                        </div>

                    </Tab>
                    <Tab id="tab3">
                        <div className="overrideContent">
                            <ul>
                                <li>QC35 wireless headphones II</li>
                                <li>USB charging cable</li>
                                <li>Audio cable</li>
                                <li>Carrying case</li>
                                <li>SoundLink® Mini Bluetooth speaker II</li>
                                <li>Charging cradle</li>
                                <li>Wall charger</li>
                                <li>Cable</li>
                                <li>Wireless range up to 30 ft (9 m)</li>
                                <li>Battery life up to 10 hrs</li>
                                <li>Power rating: 100 – 240V</li>
                                <li>3.5 mm auxiliary</li>
                                <li>Micro-B USB port</li>
                            </ul>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}


export default DetailView; 