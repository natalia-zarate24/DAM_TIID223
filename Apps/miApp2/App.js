/* Zona importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Perfil } from './componentes/Perfil.js';


/*Zona main (componentes o screens)*/
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil 
      nombre="Natalia Zárate" 
      carrera="ITIID" 
      materia="Movil" 
      cuatri="4to"
      style={styles.tarjeta1}/>

      <Perfil 
      nombre="Roberto Zárate" 
      carrera="IDIA" 
      materia="Movil" 
      cuatri="4to"
      style={styles.tarjeta2}/>

      <Perfil 
      nombre="Martha Terán" 
      carrera="ITIID" 
      materia="Movil" 
      cuatri="4to"
      style={styles.tarjeta3}/>
      

      <StatusBar style="auto" />
    </View>
  );
}

/*Zona estética*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tarjeta1:{backgroundColor:'#C4F1BE'},
  tarjeta2:{backgroundColor:'#A2C3A4'},
  tarjeta3:{backgroundColor:'#869D96'},
});
