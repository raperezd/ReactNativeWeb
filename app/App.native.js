/**
 * POC React Native & Web App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { BackButton, Navigation, Card } from 'react-router-navigation';
import { Button, Icon } from 'native-base';

import ImageHeader from './views/ImageHeader';
import FirstForm from './views/FirstForm';
import DetailView from './views/DetailView';

export default class App extends Component<{}> {
  render() {
    return ( 
     <NativeRouter>
        <Navigation>
            <Card 
            exact
            path="/" 
            renderNavBar={() => (
                <ImageHeader>
                    <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
                        <Text style={{padding: 15, color: '#FFF', fontSize: 16, fontWeight: '600'}}>POC React native web</Text>
                    </View>
                </ImageHeader>
            )} 
            render={() => (
                <View style={styles.container}>
                    <Text style={{paddingBottom: 15}}>Proof of concept, of the Bizagi forms in react native.</Text>
                    
                    <Button block style={{ backgroundColor: '#295d7b' }}>
                        <Link to='/FirstForm' underlayColor='transparent' style={{flex: 1}} >
                            <Text style={styles.navitem}>Work on it!!</Text>
                        </Link>                    
                        </Button>
                </View>
            )}
            />
            

            <Card path="/FirstForm" 
             renderNavBar={({history, match}) => (
                <ImageHeader>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Button transparent onPress={() => history.goBack()} title='back' >
                            <Icon  style={{fontSize: 22, color: '#FFF'}} name='arrow-back' />
                        </Button>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={styles.headerTitle}>Request office supplies</Text>
                            <Text style={styles.headerSubTitle}>CO-6122 Office supplies request</Text>
                        </View>
                        <Button transparent title='next'>
                            <Icon style={{fontSize: 22, color: '#FFF'}} name="more" />
                        </Button>
                    </View>
                </ImageHeader>
            )}
            component={FirstForm}
            />

            <Card path="/DetailView/:id" 
             renderNavBar={({history, match}) => (
                <ImageHeader>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Button transparent onPress={() => history.goBack()} title='back' >
                            <Icon  style={{fontSize: 22, color: '#FFF'}} name='arrow-back' />
                        </Button>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={styles.headerTitle}>Request office supplies</Text>
                            <Text style={styles.headerSubTitle}>CO-6122 Office supplies request</Text>
                        </View>
                        <Button transparent title='next'>
                            <Icon style={{fontSize: 22, color: '#FFF'}} name="more" />
                        </Button>
                    </View>
                </ImageHeader>
            )}
            component={DetailView}
            />

        </Navigation>
        
      </NativeRouter>
    );
  }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    navitem:{
        textAlign: 'center',
        padding: 10,
        color: '#FFF'
    },
    headerTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '200'
    },
    headerSubTitle: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '100'
    }
});