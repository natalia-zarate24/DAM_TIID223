/* Zona importaciones */
import { StyleSheet, View, Text } from 'react-native';

/*Zona main (componentes o screens)*/
export default function Modal() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la practica 15</Text>
        <Text>Equipo de Iancarlo</Text>
    </View>
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
});
