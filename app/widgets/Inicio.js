import React from 'react';
import { View, StyleSheet, ImageBackground, Button } from 'react-native';
import { Menu } from '../widgets/Menu.js';
import { ZonaLogo } from './ZonaLogo.js';

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        backgroundColor: '#353535'
    },
    imagen: {
        flex: 2,
    }   
});

export class Inicio extends React.Component{

   render(){
        return(
        <View style={styles.contenedor}>

            <ZonaLogo/>
            <ImageBackground style={styles.imagen} source={require('../../assets/img/youarethebest.png')} />

            <Menu navigate={this.props.navigate}/>

        </View>        
        )
    }

}