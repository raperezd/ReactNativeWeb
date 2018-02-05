import React from 'react';

import FirstForm from './views/FirstForm';
import DetailView from './views/DetailView';
import ImageHeader from './views/ImageHeader';


import {
    Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
    List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
    LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Toolbar
} from 'framework7-react';

import styles from './App.scss';

let currentRoute;
export const getCurrentRoute = () => currentRoute;

export default class App extends React.Component {
    render() {
        return (
            <Framework7App onRouteChange={route => currentRoute = route} routes={[
                {
                    path: '/FirstForm/',
                    component: () => (
                        <Page name='firstform'>
                            <Navbar>
                                <NavLeft backLink="Back" sliding></NavLeft>
                                <NavCenter>Request supplies</NavCenter>
                                <NavRight>
                                    <Link>Next</Link>
                                </NavRight>
                            </Navbar>
                            <FirstForm />
                        </Page>
                    )
                },
                {
                    path: '/DetailView/:id',
                    component: () => (
                        <Page name="viewdetail">
                            <Navbar>
                                <NavLeft backLink="Back" sliding></NavLeft>
                                    <NavCenter>Detail View</NavCenter>
                                <NavRight>
                                </NavRight>
                            </Navbar>
                            <DetailView route={getCurrentRoute()}/>
                        </Page>
                    )
                }
            ]}>
                <Views>
                    <View main>
                        <Pages navbarFixed>
                            <Page name='home'>
                                <Navbar className="header header-poc">
                                    <label>POC React native web</label>
                                </Navbar>

                                <p>Proof of concept, of the Bizagi forms usinng React native.</p>
                                <Link className="btn bz-btn--primay" href="/FirstForm/">Work on it!</Link>
                            </Page>
                        </Pages>
                    </View>
                </Views>
            </Framework7App>
        );
    }
}
