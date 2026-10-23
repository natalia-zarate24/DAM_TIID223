/* Zona importaciones */
import { StyleSheet, View, Text } from 'react-native';

/*Zona main (componentes o screens)*/
export default function ImageBackground() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la practica 14</Text>
        <Text>Equipo de Paloma</Text>
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
