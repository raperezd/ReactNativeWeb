import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import FirstForm from './views/FirstForm';

import DetailView from './views/DetailView';
import ImageHeader from './views/ImageHeader';


import styles from './App.scss';

export default class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        exact
                        path="/"
                        render={({ history, match }) => (
                            <div>
                                <ImageHeader>
                                    <div className='m-header-layout'>
                                        <div></div>
                                        <div className='m-header-title'>
                                            <span>POC React native web</span>
                                        </div>
                                        <div>tras punticos</div>
                                    </div>
                                </ImageHeader>
                                <div>
                                    <span>Proof of concept, of the Bizagi forms in react native.</span>

                                    <Link to='/DetailView'>
                                        <span>Work on it!!</span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    />

                    <Route
                        exact
                        path="/FirstForm"
                        render={({ history, match }) => (
                            <div>
                                <ImageHeader>
                                    <div className='m-header-layout'>
                                        <div>
                                            <button onClick={() => history.goBack()} >back</button>
                                        </div>
                                        <div className='m-header-title'>
                                            <div>
                                                <span>Request office supplies</span>
                                            </div>
                                            <div>
                                                <span>CO-6122 Office supplies request</span>
                                            </div>
                                        </div>
                                    </div>
                                </ImageHeader>
                                <FirstForm />
                            </div>
                        )}
                    />
                    <Route
                        exact
                        path="/DetailView"
                        render={({ history, match }) => (
                            <div>
                                <ImageHeader>
                                    <div className='m-header-layout'>
                                        <div>
                                            <button onClick={() => history.goBack()} >back</button>
                                        </div>
                                       
                                    </div>
                                </ImageHeader>
                                <DetailView />
                            </div>
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}
