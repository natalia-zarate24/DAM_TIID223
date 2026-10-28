/* Zona importaciones */
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../componentes/SafeAreaEjemplo';
import ScrollViewEjemplo from '../componentes/ScrollViewEjemplo';

/*Zona main (componentes o screens)*/
export default function SafeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Text style={styles.container}>
        Aqui va la practica 10
      </Text>
      <SafeAreaEjemplo/>
      <ScrollViewEjemplo/>
    </SafeAreaView>
    
  );
}

/*Zona estética*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloPrincipal:{
    fontSize:24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  }
});
