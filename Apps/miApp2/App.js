/* Zona importaciones */
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/*Zona main (componentes o screens)*/
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <MenuScreen></MenuScreen>
      </View>
    </SafeAreaProvider>
  
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
