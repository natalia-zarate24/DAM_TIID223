/* Zona importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './componentes/Saludo';
import {Saludo2} from './componentes/Saludo2';
import {Perfil} from './componentes/Perfil';

/*Zona main (componentes o screens)*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Saludo/>
      <Saludo2/>

      <Perfil 
      nombre="Natalia Zárate" 
      carrera="ITIID" 
      materia="Movil" 
      cuatri="4to"/>
      

      <StatusBar style="auto" />
    </View>
  );
}

/*Zona estética*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
