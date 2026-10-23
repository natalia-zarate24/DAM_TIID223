/* Zona importaciones */
import { StyleSheet, View, Text } from 'react-native';

/*Zona main (componentes o screens)*/
export default function ActivityIndicator() {
  return (
    <View style={styles.container}>
        <Text>Aqui va la practica 16</Text>
        <Text>Equipo de Schoenstatt</Text>
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
