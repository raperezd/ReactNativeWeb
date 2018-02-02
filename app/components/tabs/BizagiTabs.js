import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './BizagiTabs.scss';

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem className="header-tab">
                        <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}>Overview</NavLink>
                    </NavItem>
                    <NavItem className="header-tab">
                        <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}>Specs</NavLink>
                    </NavItem>
                    <NavItem className="header-tab">
                        <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}>Review</NavLink>
                    </NavItem>
                </Nav>
                <TabContent className="tabcontent" activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
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
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
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
                            </Col>
                        </Row>
                    </TabPane>
                     <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <div className="overrideContent">
                                    <h3>Dimensions / weight without the cable</h3>
                                    <span><b>Headphones:</b>7.1" H x 6.7" W x 3.2" D (8.3 oz) </span>
                                    <span><b>Audio cable:</b>47.2"</span>
                                    <span><b>USB cable:</b>12</span>
                                    <h3>What’s in the box</h3>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}