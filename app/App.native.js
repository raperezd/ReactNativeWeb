/**
 * POC React Native & Web App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import { StyleSheet, Text, Button, View} from 'react-native';
import { NativeRouter, Link } from 'react-router-native';
import { BackButton, Navigation, Card } from 'react-router-navigation';
import ImageHeader from './views/ImageHeader';

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
                    <Text>Proof of concept, of the Bizagi forms in react native.</Text>
                    <Link to="/FirstForm/1">
                        <Text style={styles.navitem}> Click</Text>
                    </Link>
                </View>
            )}

            />
            <Card path="/FirstForm/:id" 
             renderNavBar={({history, match}) => (
                <ImageHeader>
                    <View style={{flex: 1}}>
                        <Button onPress={() => history.goBack()} title="back" />
                        
                        <Text style={{padding: 15, color: '#FFF', fontSize: 16, fontWeight: '600'}}>Caso {match.params.id}</Text>
                    </View>
                </ImageHeader>
            )}
            render={({match}) => (
                <View style={styles.container}>
                    <Link to={`/FirstForm/${Math.random()}`}>
                    <Text style={styles.navitem}> Click again {match.params.id}</Text>
                    </Link> 
                </View>
            )}
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
        alignItems: 'center',
        padding: 10
    }
});