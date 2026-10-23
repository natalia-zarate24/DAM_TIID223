/* Zona importaciones */
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';

/*Zona main (componentes o screens)*/
export default function App() {
  return (
    <View style={styles.container}>
      <MenuScreen></MenuScreen>
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
    justifyContent: 'space-evenly',
  },

});
