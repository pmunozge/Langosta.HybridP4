import React from 'react';

import { View, StyleSheet,TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from '../estilosApp.js';
import { MenuRetos } from '../widgets/MenuRetos.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';



//{'nombre':item.value.nombre, 'categoria': item.value.categoria, 'detalle':item.value.detalle

export class Reto extends React.Component{

  
    
    render(){

        const { navigate } = this.props.navigation;
        const { nombre, categoria ,detalle, periodicidad, tiempo,completado} = this.props.route.params;

        return(
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
           
                 <Text>Nonbre: {nombre}</Text>
                 <Text>Categoria: {categoria}</Text>
                 <Text>Detalle: {detalle}</Text>
                 <Text>Periodicidad: {periodicidad}</Text>
                 <Text>Completado: {completado}</Text>
                 <Text>Tiempo: {tiempo}</Text>
                </View>
                <MenuRetos navigate={navigate}/>
            </View>        
        )
    }
     
}