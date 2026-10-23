/* Zona importaciones */
import { StyleSheet, View, Text, Button } from 'react-native';
import { useState } from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextInputScreen from './TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ModalScreen from './ModalScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';

/*Zona main (componentes o screens)*/
export default function MenuScreen() {
    const[screen,setScreen]= useState('menu');

    switch(screen){
        case 'safe':
            return <SafeScreen/>;
        case 'press':
            return <PressableScreen/>;
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'text':
            return <TextInputScreen/>;
        case 'flat':
            return <FlatListScreen/>;
        case 'image':
            return <ImageBackgroundScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'activity':
            return <ActivityIndicatorScreen/>;
        case 'menu':
            default:
            return (
                <View style={styles.container}>
                    <Text>Menu de Practicas</Text>
                    <Text> </Text>
                    <Button title="Practica Tarjetas" onPress={()=>setScreen('tarjetas')}></Button>
                    <Text> </Text>
                    <Button title="Practica SafeAreaView" onPress={()=>setScreen('safe')}></Button>
                    <Text> </Text>
                    <Button title="Practica Pressable" onPress={()=>setScreen('press')}></Button>
                    <Text> </Text>
                    <Button title="Practica TextInput" onPress={()=>setScreen('text')}></Button>
                    <Text> </Text>
                    <Button title="Practica FlatList" onPress={()=>setScreen('flat')}></Button>
                    <Text> </Text>
                    <Button title="Practica ImageBackground" onPress={()=>setScreen('image')}></Button>
                    <Text> </Text>
                    <Button title="Practica Modal & Bottom" onPress={()=>setScreen('modal')}></Button>
                    <Text> </Text>
                    <Button title="Practica ActivityIndicator" onPress={()=>setScreen('activity')}></Button>
                </View>
            );
    } //switch
} //function

/*Zona estética*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tarjeta1:{backgroundColor:'#C4F1BE'},
  tarjeta2:{backgroundColor:'#A2C3A4'},
  tarjeta3:{backgroundColor:'#869D96'},
});
