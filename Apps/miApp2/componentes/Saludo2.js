import {View, Text, Button, Image} from 'react-native';

export const Saludo2= ()=>{
    return(
        <View>
            <Text>Hola React Native 2: Componente Propio</Text>
            <Image source={require('../assets/wave.png')}></Image>
            <Button title="Presiona para saludar"></Button>
        </View>
    )
}