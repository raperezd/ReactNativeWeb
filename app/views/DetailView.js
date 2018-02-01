import React, { Component } from 'react';

import Collapsible from '../components/collapsible/Collapsible';
import Form from '../components/form/Form';
import Span from '../components/span/Span';
import Grid from '../components/grid/Grid';
import Control from '../components/control/Control';
import ExtendedText from '../components/extendedText/ExtendedText';

import BizagiCounter  from '../components/counter/BizagiCounter'

class DetailView extends React.Component {


    openTab(evt, cityName) {

    }
    render() {
        const match = this.props.match;
        return (
            <Form>
                <div className="quantitySection">
                    <BizagiCounter/>
                </div>
                <div className="tab">
                    <button className="tablinks" onClick={this.openTab(event, 'Overview')}>Overview</button>
                    <button className="tablinks" onClick={this.openTab(event, 'Specs')}>Specs</button>
                    <button className="tablinks" onClick={this.openTab(event, 'Reviews')}>Reviews</button>
                </div>

                <div id="Overview" className="tabcontent">
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
                </div>
                {/*<div id="Specs" className="tabcontent">
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
                </div>
                 <div id="Reviews" className="tabcontent">
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
                </div>*/}
            </Form>
        );
    }
}


export default DetailView; 