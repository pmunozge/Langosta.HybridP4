import React from 'react';
import { View, StyleSheet,TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from '../estilosApp.js';
import { Menu } from '../widgets/Menu.js';
import { MenuReto } from '../widgets/MenuReto.js';
import { ZonaLogo } from '../widgets/ZonaLogo.js';
import { collection,getDocs} from "firebase/firestore";
import {db} from '../config/db'

let actividades = [];

const querySnapshot = await getDocs(collection(db, "actividades"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

export class Evolucion extends React.Component{


    render(){
    
  
        

        const { navigate } = this.props.navigation;

        return(
            <View style={styles.contenedor}>
                <ZonaLogo/>
                <View style= {styles.contenido}>
                    <Text>Contenido de Evolucion</Text>
                </View>
                <MenuReto navigate={navigate}/>
            </View>      
        )
    }
     
}