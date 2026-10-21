import {Text, View, Button, StyleSheet} from 'react-native';
import {useState} from 'react'; 


export const Perfil= ({nombre, carrera, materia, cuatri, style})=>{
    const[mostrar,setMostrar]= useState(false); 
    return(
        <View style={[estilos.tarjeta,style]}>
            <Text style={[estilos.nombres,style]}> {nombre} </Text>

            { mostrar && 
                <>
                <Text style={estilos.carrera}> {carrera} </Text>
                <Text style={estilos.otroTexto}> {materia} </Text>
                <Text style={estilos.otroTexto}> {cuatri} </Text>
                </>
            }

            <Button title="Ver Perfil" onPress={ ()=>setMostrar(!mostrar) }></Button>

        </View>

    )
}

const estilos = StyleSheet.create({
            nombres:{
                fontSize:24,
                fontWeight:700,
                textTransform:'uppercase',
                color:'#201E50'
            },
            carrera:{
                fontSize:20,
                fontFamily:'Roboto',
                color:'#201E50',
            },
            otroTexto:{
                fontSize:18,
                fontFamily:'Roboto',
                color:'#201E50',
                fontStyle:'italic',
            },
            tarjeta:{
                borderWidth:3,
                borderRadius:12,
                padding:15,
                margin:10,
                borderColor:'#201E50',
            },

        });